"use client";

// ─── Pronunciation practice (D15, ROADMAP-60.md) ────────────────────────────
// Speak an exercise → BYOK STT (/api/stt, the learner's own Gemini key) →
// word-by-word verdicts (ok/close/miss) + a trilingual tip. Uses the SAME
// recording pipeline as the call room (MediaRecorder → 16kHz mono WAV →
// base64 → /api/stt). The Web Speech API is deliberately NOT used here: it
// auto-corrects toward dictionary words, which would flatter the score.
//
// Privacy/limits: the recording is sent ONLY to /api/stt (rate-limited
// 30/min/IP), never stored server-side; nothing leaves the learner's own
// AI call.

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  CircleCheck,
  CircleMinus,
  CircleX,
  Info,
  Loader2,
  Mic,
  RotateCcw,
  Square,
  Volume2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useDeviceValue, getDeviceId } from "@/hooks/use-device";
import { useToast } from "@/hooks/use-toast";
import { speakEnglish, cancelSpeech } from "@/components/vocab/speech";
import { track } from "@/lib/track";
import { blobToBase64, transcodeToWavBlob } from "@/lib/audio-wav";
import {
  pronExercisesForLevel,
  compareSpeech,
  type CompareResult,
  type PronExercise,
} from "@/lib/pron-bank";
import type { LibraryLevel } from "@/lib/library-types";
import { cn } from "@/lib/utils";

const MAX_MS = 10_000;

const VERDICT_STYLE: Record<string, string> = {
  ok: "border-emerald-300/70 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300",
  close: "border-amber-300/70 bg-amber-500/10 text-amber-800 dark:text-amber-300",
  miss: "border-rose-300/70 bg-rose-500/10 text-rose-800 dark:text-rose-300",
};

export default function PronunciationCard() {
  const t = useTranslations("speaking.pron");
  const locale = useLocale() as "en" | "bn" | "hi";
  const { toast } = useToast();
  const level = useDeviceValue((s) => s.level, "beginner");
  const hasKey = useDeviceValue((s) => s.hasKey, false);

  const exercises = pronExercisesForLevel(level as LibraryLevel);
  const [idx, setIdx] = useState(0);
  const ex: PronExercise | undefined = exercises[idx % Math.max(1, exercises.length)];

  const [phase, setPhase] = useState<"idle" | "recording" | "busy">("idle");
  const [result, setResult] = useState<CompareResult | null>(null);
  const [elapsed, setElapsed] = useState(0);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const maxTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // latest exercise for the async finisher (avoids stale closures)
  const exRef = useRef<PronExercise | undefined>(undefined);
  useEffect(() => {
    exRef.current = ex;
  }, [ex]);

  // Reset when the level (and thus the exercise list) changes.
  useEffect(() => {
    queueMicrotask(() => {
      setIdx(0);
      setResult(null);
    });
  }, [level]);


  // Stop mic + timers + TTS on unmount.
  useEffect(() => {
    return () => {
      if (maxTimerRef.current) clearTimeout(maxTimerRef.current);
      if (timerRef.current) clearInterval(timerRef.current);
      streamRef.current?.getTracks().forEach((tr) => tr.stop());
      if (recorderRef.current?.state === "recording") recorderRef.current.stop();
      cancelSpeech();
    };
  }, []);

  function pick(i: number) {
    cancelSpeech();
    setResult(null);
    setIdx(i);
  }

  function stopRecording() {
    if (maxTimerRef.current) clearTimeout(maxTimerRef.current);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
    const rec = recorderRef.current;
    if (rec && rec.state === "recording") rec.stop();
    streamRef.current?.getTracks().forEach((tr) => tr.stop());
    streamRef.current = null;
  }

  async function finishRecording() {
    setPhase("busy");
    const chunks = chunksRef.current;
    const mime = recorderRef.current?.mimeType || "audio/webm";
    recorderRef.current = null;
    const current = exRef.current;
    try {
      const original = new Blob(chunks, { type: mime });
      if (original.size === 0) {
        setPhase("idle");
        return;
      }
      const wav = await transcodeToWavBlob(original);
      const send = wav ?? original;
      const audio = await blobToBase64(send);
      const res = await fetch("/api/stt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deviceId: getDeviceId(), audio, mime: wav ? "audio/wav" : mime }),
      });
      const json = (await res.json().catch(() => null)) as {
        ok?: boolean;
        data?: { text?: unknown };
        error?: unknown;
      } | null;
      if (!res.ok || !json?.ok) {
        toast({
          title: typeof json?.error === "string" ? json.error : t("sttFailed"),
          variant: "destructive",
        });
        setPhase("idle");
        return;
      }
      const text = typeof json.data?.text === "string" ? json.data.text.trim() : "";
      if (!text) {
        toast({ title: t("noSpeech") });
        setPhase("idle");
        return;
      }
      const cmp = compareSpeech(current!.text, text);
      setResult(cmp);
      track("pronunciation_done", { score: cmp.score });
      setPhase("idle");
    } catch {
      toast({ title: t("sttFailed"), variant: "destructive" });
      setPhase("idle");
    }
  }

  async function startRecording() {
    if (!ex || phase !== "idle") return;
    cancelSpeech();
    setResult(null);
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      toast({ title: t("unsupported") });
      return;
    }
    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      toast({ title: t("permission") });
      return;
    }
    streamRef.current = stream;
    chunksRef.current = [];
    const mimeCandidates = ["audio/webm", "audio/ogg;codecs=opus", "audio/mp4"];
    const mimeType = mimeCandidates.find((m) => MediaRecorder.isTypeSupported(m));
    const rec = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
    rec.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };
    rec.onstop = () => void finishRecording();
    recorderRef.current = rec;
    rec.start();
    setPhase("recording");
    setElapsed(0);
    timerRef.current = setInterval(() => setElapsed((n) => n + 100), 100);
    // hard cap so a forgotten stop can't eat the learner's quota
    maxTimerRef.current = setTimeout(() => stopRecording(), MAX_MS);
  }

  if (!ex) return null;

  return (
    <Card className="premium-card border-border/70 rounded-2xl bg-card">
      <CardContent className="space-y-4 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-sm font-bold">{t("title")}</p>
            <p className="text-xs text-muted-foreground">{t("desc")}</p>
          </div>
          {!hasKey && <Badge variant="outline" className="shrink-0 text-[10px]">{t("needKey")}</Badge>}
        </div>

        {/* exercise chips */}
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label={t("title")}>
          {exercises.map((e, i) => (
            <button
              key={e.id}
              role="tab"
              aria-selected={i === idx}
              onClick={() => pick(i)}
              className={cn(
                "min-h-9 rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
                i === idx
                  ? "border-transparent bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-sm"
                  : "border-border/60 text-muted-foreground hover:bg-accent"
              )}
            >
              {e.text.length > 22 ? `${e.text.slice(0, 20)}…` : e.text}
            </button>
          ))}
        </div>

        {/* target + phonetic + tip */}
        <div className="space-y-2 rounded-xl border border-border/60 bg-muted/40 p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="text-lg font-bold leading-snug">{ex.text}</p>
              <p className="mt-0.5 font-mono text-xs text-muted-foreground">/{ex.phonetic}/</p>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => speakEnglish(ex.text)}
              className="min-h-10 shrink-0 gap-1.5"
            >
              <Volume2 className="h-4 w-4" aria-hidden />
              {t("listen")}
            </Button>
          </div>
          <p className="flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
            {ex.tip[locale]}
          </p>
        </div>

        {/* record / result */}
        <div className="space-y-3">
          {phase === "idle" && (
            <Button
              onClick={() => void startRecording()}
              className="min-h-12 w-full gap-2 bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-md hover:from-rose-600 hover:to-pink-700"
            >
              <Mic className="h-5 w-5" aria-hidden />
              {t("record")}
            </Button>
          )}
          {phase === "recording" && (
            <Button
              onClick={stopRecording}
              variant="destructive"
              className="min-h-12 w-full gap-2"
            >
              <Square className="h-4 w-4" aria-hidden />
              {t("stop")} · {(elapsed / 1000).toFixed(1)}s
            </Button>
          )}
          {phase === "busy" && (
            <div className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-border/60 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              {t("checking")}
            </div>
          )}
          {!hasKey && phase === "idle" && (
            <p className="text-[11px] leading-relaxed text-muted-foreground">{t("keyHint")}</p>
          )}

          {result && (
            <div className="space-y-2.5 rounded-xl border border-border/60 p-4">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-bold">
                  {t("scoreTitle", { score: result.score })}
                </p>
                <Button size="sm" variant="ghost" onClick={() => setResult(null)} className="min-h-9 gap-1.5 text-xs">
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden />
                  {t("again")}
                </Button>
              </div>
              <Progress value={result.score} className="h-2" aria-label={t("scoreTitle", { score: result.score })} />
              <div className="flex flex-wrap gap-1.5">
                {result.words.map((w, i) => (
                  <span
                    key={`${w.word}-${i}`}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium",
                      VERDICT_STYLE[w.verdict]
                    )}
                    title={
                      w.verdict === "ok"
                        ? t("wOk")
                        : w.verdict === "close"
                          ? t("wClose")
                          : t("wMiss")
                    }
                  >
                    {w.verdict === "ok" ? (
                      <CircleCheck className="h-3 w-3" aria-hidden />
                    ) : w.verdict === "close" ? (
                      <CircleMinus className="h-3 w-3" aria-hidden />
                    ) : (
                      <CircleX className="h-3 w-3" aria-hidden />
                    )}
                    {w.word}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
