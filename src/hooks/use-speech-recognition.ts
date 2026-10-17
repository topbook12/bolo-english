"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { clientMsg } from "@/lib/api-i18n";

// Browser-native speech recognition (Web Speech API) — 100% free, runs on-device.
// Produces live interim text + final transcripts for captions and AI analysis.

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

export interface FinalLine {
  text: string;
  at: number;
}

const subscribeNoop = () => () => undefined;

/* ── auto-restart backoff (iOS / flaky engines loop risk) ──
 * Chrome stops the recognizer periodically and we restart silently. But when
 * the engine dies within <2s of starting, something is wrong (iOS Safari
 * permission glitch, recognizer thrash) — restarting instantly turns into a
 * hot loop that drains battery and can hard-crash WebKit. So: count
 * consecutive rapid restarts; from the 3rd one onward wait 5s → 10s → 20s
 * (capped). A healthy session (>5s of listening) resets the counter. */
const RAPID_RESTART_MS = 2_000; // session shorter than this counts as "rapid"
const HEALTHY_SESSION_MS = 5_000; // session longer than this resets the counter
const BACKOFF_BASE_MS = 5_000;
const BACKOFF_CAP_MS = 20_000;
const RAPID_RESTARTS_BEFORE_BACKOFF = 3;

function backoffDelayMs(rapidCount: number): number {
  if (rapidCount < RAPID_RESTARTS_BEFORE_BACKOFF) return 0;
  const step = rapidCount - RAPID_RESTARTS_BEFORE_BACKOFF; // 0,1,2…
  return Math.min(BACKOFF_CAP_MS, BACKOFF_BASE_MS * 2 ** step);
}

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

  const recRef = useRef<SpeechRecognitionLike | null>(null);
  const wantRef = useRef(false);
  const finalCbRef = useRef(onFinal);
  useEffect(() => {
    finalCbRef.current = onFinal;
  }, [onFinal]);

  // backoff bookkeeping
  const startedAtRef = useRef(0); // when the current session began
  const rapidRestartsRef = useRef(0);
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
        wantRef.current = false;
        setListening(false);
        setError(clientMsg("micPermission"));
      } else if (e.error === "audio-capture") {
        wantRef.current = false;
        setListening(false);
        setError(clientMsg("micNotFound"));
      }
    };

    rec.onend = () => {
      // auto-restart while user wants to listen (Chrome stops periodically)
      if (!wantRef.current) {
        setListening(false);
        return;
      }
      // classify the session that just ended
      const uptime = Date.now() - startedAtRef.current;
      if (uptime >= HEALTHY_SESSION_MS) {
        rapidRestartsRef.current = 0; // healthy run — backoff resets
      } else if (uptime < RAPID_RESTART_MS) {
        rapidRestartsRef.current += 1; // rapid death — escalate backoff
      }
      const delay = backoffDelayMs(rapidRestartsRef.current);
      clearRestartTimer();
      restartTimerRef.current = setTimeout(() => {
        restartTimerRef.current = null;
        if (!wantRef.current) return;
        try {
          startedAtRef.current = Date.now();
          rec.start();
        } catch {
          /* already started */
        }
      }, delay);
    };

    return rec;
  }, [clearRestartTimer]);

  const start = useCallback(() => {
    setError(null);
    if (!getRecognitionCtor()) {
      setError(clientMsg("speechUnsupported"));
      return;
    }
    clearRestartTimer();
    wantRef.current = true;
    rapidRestartsRef.current = 0; // an explicit user start resets the loop guard
    if (!recRef.current) recRef.current = create();
    try {
      startedAtRef.current = Date.now();
      recRef.current!.start();
      setListening(true);
    } catch {
      setListening(true); // already running
    }
  }, [create, clearRestartTimer]);

  const stop = useCallback(() => {
    wantRef.current = false;
    clearRestartTimer();
    rapidRestartsRef.current = 0;
    setListening(false);
    setInterim("");
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

  return { supported, listening, interim, error, start, stop };
}
