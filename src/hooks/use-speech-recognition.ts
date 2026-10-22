"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { clientMsg } from "@/lib/api-i18n";

// Browser-native speech recognition (Web Speech API) — 100% free, runs on-device.
// Produces live interim text + final transcripts for captions and AI analysis.
//
// Task 27-m (mobile captions): Android Chrome fires `onend` after the FIRST
// utterance even with continuous=true and never resumes by itself, so live
// captions silently died mid-call on phones. The watchdog below restarts the
// recognizer ~250ms after every UNEXPECTED end while the user is still in
// listening mode. A rolling-window loop guard (max 5 auto-restarts inside 10s)
// gives up on pathological thrash and surfaces `failed` instead of hot-looping.
// Deliberate stop() / fatal permission errors / unmount are respected — the
// watchdog never restarts against them.

type SpeechRecognitionLike = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((e: SpeechEventLike) => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onend: (() => void) | null;
  onstart: (() => void) | null;
};

interface SpeechEventLike {
  resultIndex: number;
  results: {
    length: number;
    [i: number]: {
      isFinal: boolean;
      length: number;
      [j: number]: { transcript: string };
    };
  };
}

function getRecognitionCtor(): (new () => SpeechRecognitionLike) | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as {
    SpeechRecognition?: new () => SpeechRecognitionLike;
    webkitSpeechRecognition?: new () => SpeechRecognitionLike;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

/** Standalone capability probe for consumers that only need a boolean
 *  (CallRoom's push-to-talk fallback). Always `false` on the server — call it
 *  after mount, exactly like the hook's `supported`. */
export function isSpeechRecognitionSupported(): boolean {
  return !!getRecognitionCtor();
}

export interface FinalLine {
  text: string;
  at: number;
}

const subscribeNoop = () => () => undefined;

/* ── auto-restart watchdog constants (Task 27-m) ── */
const RESTART_DELAY_MS = 250; // small settle delay before each auto-restart
const RESTART_WINDOW_MS = 10_000; // rolling window for the loop guard
const MAX_RESTARTS_PER_WINDOW = 5; // more restarts than this ⇒ engine thrash ⇒ give up

export function useSpeechRecognition(onFinal?: (line: FinalLine) => void) {
  // Hydration-safe capability probe: server snapshot is always `false`, the
  // client value swaps in after mount (a `useState(() => window...)`
  // initializer would render differently on server vs client first paint).
  const supported = useSyncExternalStore(
    subscribeNoop,
    () => !!getRecognitionCtor(),
    () => false
  );
  const [listening, setListening] = useState(false);
  const [interim, setInterim] = useState("");
  const [error, setError] = useState<string | null>(null);
  // Watchdog gave up (rapid restart loop) — captions are dead until the user
  // explicitly starts listening again (start() clears it).
  const [failed, setFailed] = useState(false);

  const recRef = useRef<SpeechRecognitionLike | null>(null);
  // `want` = the user is deliberately in listening mode. Every deliberate
  // stop path (stop(), fatal errors) clears it FIRST so the onend watchdog
  // can tell "engine died unexpectedly" from "user stopped it".
  const wantRef = useRef(false);
  const finalCbRef = useRef(onFinal);
  useEffect(() => {
    finalCbRef.current = onFinal;
  }, [onFinal]);

  // watchdog bookkeeping: timestamps of the most recent AUTO restarts
  const restartTimesRef = useRef<number[]>([]);
  const restartTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearRestartTimer = useCallback(() => {
    if (restartTimerRef.current) {
      clearTimeout(restartTimerRef.current);
      restartTimerRef.current = null;
    }
  }, []);

  const create = useCallback(() => {
    const Ctor = getRecognitionCtor();
    if (!Ctor) return null;
    const rec = new Ctor();
    rec.lang = "en-US";
    rec.continuous = true;
    rec.interimResults = true;
    rec.maxAlternatives = 1;

    rec.onresult = (e) => {
      let interimText = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const result = e.results[i];
        const text = result[0]?.transcript ?? "";
        if (result.isFinal) {
          const trimmed = text.trim();
          if (trimmed) {
            setInterim("");
            finalCbRef.current?.({ text: trimmed, at: Date.now() });
          }
        } else {
          interimText += text;
        }
      }
      if (interimText) setInterim(interimText);
    };

    rec.onerror = (e) => {
      if (e.error === "no-speech" || e.error === "aborted") return;
      if (e.error === "not-allowed" || e.error === "service-not-allowed") {
        wantRef.current = false; // fatal — the watchdog must not restart
        setListening(false);
        setError(clientMsg("micPermission"));
      } else if (e.error === "audio-capture") {
        wantRef.current = false; // fatal — the watchdog must not restart
        setListening(false);
        setError(clientMsg("micNotFound"));
      }
    };

    rec.onend = () => {
      // Deliberate stop (stop() / fatal error / unmount already cleared want).
      if (!wantRef.current) {
        setListening(false);
        return;
      }
      // Unexpected end — Android Chrome ends after the FIRST utterance even
      // with continuous=true; Chrome desktop also stops periodically. Guard
      // against thrash: only auto-restart while the rolling restart rate is
      // sane, otherwise give up and surface `failed`.
      const now = Date.now();
      restartTimesRef.current = restartTimesRef.current.filter(
        (t) => now - t < RESTART_WINDOW_MS
      );
      if (restartTimesRef.current.length >= MAX_RESTARTS_PER_WINDOW) {
        wantRef.current = false;
        restartTimesRef.current = [];
        restartTimerRef.current = null;
        setListening(false);
        setInterim("");
        setFailed(true);
        return;
      }
      restartTimesRef.current.push(now);
      clearRestartTimer();
      restartTimerRef.current = setTimeout(() => {
        restartTimerRef.current = null;
        if (!wantRef.current) return; // stopped while the delay was running
        try {
          rec.start();
        } catch {
          /* already started */
        }
      }, RESTART_DELAY_MS);
    };

    return rec;
  }, [clearRestartTimer]);

  const start = useCallback(() => {
    setError(null);
    setFailed(false);
    restartTimesRef.current = []; // an explicit user start resets the loop guard
    if (!getRecognitionCtor()) {
      setError(clientMsg("speechUnsupported"));
      return;
    }
    clearRestartTimer();
    wantRef.current = true;
    if (!recRef.current) recRef.current = create();
    try {
      recRef.current!.start();
      setListening(true);
    } catch {
      setListening(true); // already running
    }
  }, [create, clearRestartTimer]);

  const stop = useCallback(() => {
    wantRef.current = false; // deliberate — the watchdog must not fight this
    clearRestartTimer();
    restartTimesRef.current = [];
    setListening(false);
    setInterim("");
    setFailed(false);
    try {
      recRef.current?.stop();
    } catch {
      /* noop */
    }
  }, [clearRestartTimer]);

  useEffect(() => {
    return () => {
      wantRef.current = false;
      if (restartTimerRef.current) {
        clearTimeout(restartTimerRef.current);
        restartTimerRef.current = null;
      }
      try {
        recRef.current?.abort();
      } catch {
        /* noop */
      }
    };
  }, []);

  return { supported, listening, interim, error, failed, start, stop };
}
