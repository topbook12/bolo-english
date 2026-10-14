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
      if (wantRef.current) {
        try {
          rec.start();
        } catch {
          /* already started */
        }
      } else {
        setListening(false);
      }
    };

    return rec;
  }, []);

  const start = useCallback(() => {
    setError(null);
    if (!getRecognitionCtor()) {
      setError(clientMsg("speechUnsupported"));
      return;
    }
    wantRef.current = true;
    if (!recRef.current) recRef.current = create();
    try {
      recRef.current!.start();
      setListening(true);
    } catch {
      setListening(true); // already running
    }
  }, [create]);

  const stop = useCallback(() => {
    wantRef.current = false;
    setListening(false);
    setInterim("");
    try {
      recRef.current?.stop();
    } catch {
      /* noop */
    }
  }, []);

  useEffect(() => {
    return () => {
      wantRef.current = false;
      try {
        recRef.current?.abort();
      } catch {
        /* noop */
      }
    };
  }, []);

  return { supported, listening, interim, error, start, stop };
}
