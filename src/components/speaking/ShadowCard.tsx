"use client";

// ─── Shadowing exercise (D18, ROADMAP-60.md) ────────────────────────────────
// Listen → speak along → compare. The line plays with free on-device TTS
// (slow or normal speed); the learner repeats it out loud; the BYOK STT
// transcript is compared word-by-word with the same engine as the
// pronunciation card. Quota protection: one STT call per attempt, 15s cap.

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  CircleCheck,
  CircleMinus,
  CircleX,
  Gauge,
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
import { track } from "@/lib/track";
import { blobToBase64, transcodeToWavBlob } from "@/lib/audio-wav";
import { compareSpeech, type WordVerdict } from "@/lib/pron-bank";
import { shadowLinesForLevel, type ShadowLevel, type ShadowLine } from "@/lib/shadow-bank";
import { cancelSpeech, speakEnglishAt } from "@/components/vocab/speech";
import { cn } from "@/lib/utils";

const MAX_MS = 15_000; // hard cap per attempt (quota protection)

const VERDICT_STYLE: Record<WordVerdict, string> = {
  ok: "border-emerald-300/70 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  close: "border-amber-300/70 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  miss: "border-rose-300/70 bg-rose-500/10 text-rose-700 dark:text-rose-300",
};

type Phase = "idle" | "recording" | "busy";

export default function ShadowCard() {
  const t = useTranslations("speaking.shadow");
  const locale = useLocale() as "en" | "bn" | "hi";
  const { toast } = useToast();
  const hasKey = useDeviceValue((s) => s.hasKey, false);

  const [level, setLevel] = useState<ShadowLevel>("beginner");
  const lines = shadowLinesForLevel(level);
  const [idx, setIdx] = useState(0);
  const line: ShadowLine | undefined = lines[idx];

  const [phase, setPhase] = useState<Phase>("idle");
  const [rate, setRate] = useState(0.95); // 0.6 slow · 0.95 normal
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [result, setResult] = useState<{ score: number; words: { word: string; verdict: WordVerdict }[] } | null>(null);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const maxTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function stopTimers() {
    if (timerRef.current) clearInterval(timerRef.current);
    if (maxTimerRef.current) clearTimeout(maxTimerRef.current);
    timerRef.current = null;
    maxTimerRef.current = null;
  }

  // Stop TTS + mic on unmount.
  useEffect(() => {
    return () => {
      cancelSpeech();
      stopTimers();
      streamRef.current?.getTracks().forEach((tr) => tr.stop());
      if (recorderRef.current?.state === "recording") recorderRef.current.stop();
    };
  }, []);

  function pickLevel(l: ShadowLevel) {
    cancelSpeech();
    setPlaying(false);
    setLevel(l);
    setIdx(0);
    setResult(null);
    setPhase("idle");
  }

  function pickLine(i: number) {
    cancelSpeech();
    setPlaying(false);
    setIdx(i);
    setResult(null);
    setPhase("idle");
  }

  function play() {
    if (!line) return;
    setPlaying(true);
    speakEnglishAt(line.text, rate, () => setPlaying(false));
  }

  async function startRecording() {
    if (!line || phase !== "idle") return;
    cancelSpeech();
    setPlaying(false);
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
    maxTimerRef.current = setTimeout(() => stopRecording(), MAX_MS);
  }

  function stopRecording() {
    stopTimers();
    const rec = recorderRef.current;
    if (rec && rec.state === "recording") rec.stop();
    streamRef.current?.getTracks().forEach((tr) => tr.stop());
    streamRef.current = null;
    setPhase("busy"); // transcribing
  }

  async function finishRecording() {
    const chunks = chunksRef.current;
    const mime = recorderRef.current?.mimeType || "audio/webm";
    recorderRef.current = null;
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
      const cmp = compareSpeech(line!.text, text);
      setResult(cmp);
      track("shadowing_done", { score: cmp.score, level });
      setPhase("idle");
    } catch {
      toast({ title: t("sttFailed"), variant: "destructive" });
      setPhase("idle");
    }
  }

  if (!line) return null;

  const translation = locale === "hi" ? line.hi : line.bn; // en-UI learners get Bangla help

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

        {/* level chips */}
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label={t("title")}>
          {(["beginner", "intermediate", "advanced"] as const).map((l) => (
            <button
              key={l}
              role="tab"
              aria-selected={level === l}
              onClick={() => pickLevel(l)}
              className={cn(
                "min-h-9 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all",
                level === l
                  ? "border-transparent bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-sm"
                  : "border-border/60 text-muted-foreground hover:bg-accent"
              )}
            >
              {t(l)}
            </button>
          ))}
        </div>

        {/* line chips */}
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label={t("pickLine")}>
          {lines.map((l, i) => (
            <button
              key={l.id}
              role="tab"
              aria-selected={i === idx}
              onClick={() => pickLine(i)}
              className={cn(
                "min-h-8 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-all",
                i === idx
                  ? "border-rose-400/70 bg-rose-500/10 text-rose-700 dark:text-rose-300"
                  : "border-border/60 text-muted-foreground hover:bg-accent"
              )}
            >
              #{i + 1}
            </button>
          ))}
        </div>

        {/* target line + translation */}
        <div className="space-y-2 rounded-xl border border-border/60 bg-muted/40 p-4">
          <div className="flex items-start justify-between gap-2">
            <p className="text-lg font-bold leading-snug">{line.text}</p>
            <Button
              size="sm"
              variant="outline"
              onClick={play}
              className="min-h-10 shrink-0 gap-1.5"
              aria-label={playing ? t("playing") : t("listen")}
            >
              {playing ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              ) : (
                <Volume2 className="h-4 w-4" aria-hidden />
              )}
              {t("listen")}
            </Button>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">{translation}</p>
          {/* speed control */}
          <div className="flex items-center gap-1.5 pt-1">
            <Gauge className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
            {(
              [
                { v: 0.6, k: "slow" },
                { v: 0.95, k: "normal" },
              ] as const
            ).map((s) => (
              <button
                key={s.k}
                type="button"
                onClick={() => setRate(s.v)}
                aria-pressed={rate === s.v}
                className={cn(
                  "min-h-8 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-all",
                  rate === s.v
                    ? "border-transparent bg-accent text-accent-foreground"
                    : "border-border/60 text-muted-foreground hover:bg-accent"
                )}
              >
                {t(s.k)}
              </button>
            ))}
          </div>
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
            <Button onClick={stopRecording} variant="destructive" className="min-h-12 w-full gap-2">
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
                <p className="text-sm font-bold">{t("scoreTitle", { score: result.score })}</p>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setResult(null)}
                  className="min-h-9 gap-1.5 text-xs"
                >
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
                    title={w.verdict === "ok" ? t("wOk") : w.verdict === "close" ? t("wClose") : t("wMiss")}
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
