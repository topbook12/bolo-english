"use client";

// ─── Dictation mode (D26, ROADMAP-60.md) ────────────────────────────────────
// Listen → type what you hear → word-by-word comparison with wrong words
// highlighted. Free everywhere: the audio is on-device TTS (speed control +
// unlimited replays) and the comparison is the same PURE word-level matcher
// the pronunciation card uses. Zero API cost for the whole loop.

import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  CircleCheck,
  CircleMinus,
  CircleX,
  Gauge,
  PenLine,
  RotateCcw,
  Volume2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { apiPost } from "@/lib/client-api";
import { useDeviceValue } from "@/hooks/use-device";
import { compareSpeech, type WordVerdict } from "@/lib/pron-bank";
import { cancelSpeech, speakEnglishAt } from "@/components/vocab/speech";
import { pickLang } from "@/components/listening/types";
import type { LibraryStory } from "@/components/listening/types";
import { cn } from "@/lib/utils";

const VERDICT_STYLE: Record<WordVerdict, string> = {
  ok: "border-emerald-300/70 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  close: "border-amber-300/70 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  miss: "border-rose-300/70 bg-rose-500/10 text-rose-700 dark:text-rose-300",
};

/** A story paragraph → clean dictatable sentences (bounded, speakable). */
export function sentencesOf(story: LibraryStory): string[] {
  const raw = story.paragraphs.join(" ");
  return raw
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim().replace(/\s+/g, " "))
    .filter((s) => s.length >= 12 && s.length <= 160)
    .slice(0, 6);
}

type Phase = "pick" | "playing" | "done";

export default function DictationCard({ stories }: { stories: LibraryStory[] }) {
  const t = useTranslations("listening.dictation");
  const locale = useLocale() as "en" | "bn" | "hi";
  const deviceId = useDeviceValue((s) => s.deviceId, "");

  const [level, setLevel] = useState<"beginner" | "intermediate" | "advanced">("beginner");
  const [story, setStory] = useState<LibraryStory | null>(null);
  const [phase, setPhase] = useState<Phase>("pick");
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [result, setResult] = useState<{ score: number; words: { word: string; verdict: WordVerdict }[] } | null>(null);
  const [rate, setRate] = useState(0.85);
  const [scores, setScores] = useState<number[]>([]);
  const [autoLoop, setAutoLoop] = useState(false);
  const [logFailed, setLogFailed] = useState(false);
  const autoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sentences = useMemo(() => (story ? sentencesOf(story) : []), [story]);
  const current = sentences[idx];

  // stop TTS + auto-replay timer on unmount / story change
  useEffect(() => {
    return () => {
      cancelSpeech();
      if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
    };
  }, [story]);

  const byLevel = useMemo(
    () => stories.filter((s) => s.level === level).slice(0, 6),
    [stories, level]
  );

  function openStory(s: LibraryStory) {
    cancelSpeech();
    if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
    setStory(s);
    setIdx(0);
    setTyped("");
    setResult(null);
    setScores([]);
    setPhase("playing");
    // first sentence auto-plays once the view is live
    autoTimerRef.current = setTimeout(() => speakEnglishAt(sentencesOf(s)[0] ?? "", rate), 250);
  }

  function play() {
    if (!current) return;
    speakEnglishAt(current, rate);
  }

  function replayLoop() {
    if (!current) return;
    // play twice with a small gap — the "loop" learner control
    speakEnglishAt(current, rate, () => {
      autoTimerRef.current = setTimeout(() => speakEnglishAt(current, rate), 700);
    });
  }

  function check() {
    if (!current || !typed.trim() || result) return;
    const cmp = compareSpeech(current, typed);
    setResult(cmp);
    setScores((prev) => [...prev, cmp.score]);
  }

  function next() {
    if (!story) return;
    if (idx + 1 >= sentences.length) {
      // log the dictation session (server derives quiz_complete analytics)
      const total = scores.length;
      const ok = Math.round(scores.reduce((a, b) => a + b, 0) / Math.max(1, total));
      if (deviceId && total > 0 && !logFailed) {
        void apiPost("/api/practice", {
          deviceId,
          kind: "dictation",
          refId: story.id.slice(0, 120),
          score: ok,
          total,
        }).catch(() => setLogFailed(true));
      }
      cancelSpeech();
      setPhase("done");
      return;
    }
    const nextIdx = idx + 1;
    setIdx(nextIdx);
    setTyped("");
    setResult(null);
    if (autoLoop) {
      autoTimerRef.current = setTimeout(
        () => speakEnglishAt(sentences[nextIdx] ?? "", rate),
        350
      );
    }
  }

  function quit() {
    cancelSpeech();
    if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
    setStory(null);
    setPhase("pick");
    setIdx(0);
    setTyped("");
    setResult(null);
    setScores([]);
  }

  /* ── render ── */

  if (phase === "pick") {
    return (
      <Card className="premium-card border-border/70 rounded-2xl bg-card">
        <CardContent className="space-y-3 p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500/90 to-cyan-600/90 text-white shadow-md">
              <PenLine className="h-5 w-5" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-bold">{t("title")}</p>
              <p className="text-xs text-muted-foreground">{t("desc")}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label={t("title")}>
            {(["beginner", "intermediate", "advanced"] as const).map((l) => (
              <button
                key={l}
                role="tab"
                aria-selected={level === l}
                onClick={() => setLevel(l)}
                className={cn(
                  "min-h-9 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all",
                  level === l
                    ? "border-transparent bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-sm"
                    : "border-border/60 text-muted-foreground hover:bg-accent"
                )}
              >
                {t(l)}
              </button>
            ))}
          </div>
          {byLevel.length === 0 ? (
            <p className="rounded-xl border border-dashed border-border/60 p-3 text-xs text-muted-foreground">
              {t("noStories")}
            </p>
          ) : (
            <div className="flex flex-wrap gap-1.5">
              {byLevel.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => openStory(s)}
                  className="min-h-9 max-w-full truncate rounded-full border border-border/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:bg-accent"
                >
                  {pickLang(s.title, locale) || s.title.en}
                </button>
              ))}
            </div>
          )}
          <p className="text-[11px] text-muted-foreground">{t("freeNote")}</p>
        </CardContent>
      </Card>
    );
  }

  if (phase === "done" && story) {
    const avg = Math.round(scores.reduce((a, b) => a + b, 0) / Math.max(1, scores.length));
    return (
      <Card className="premium-card border-border/70 rounded-2xl bg-card">
        <CardContent className="space-y-3 p-5 text-center sm:p-6">
          <p className="text-sm font-bold">{t("doneTitle", { score: avg })}</p>
          <p className="text-xs text-muted-foreground">
            {t("doneNote", { n: scores.length })}
          </p>
          <Button onClick={quit} className="min-h-11 w-full gap-1.5 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-md hover:from-teal-600 hover:to-cyan-700">
            <RotateCcw className="h-4 w-4" aria-hidden />
            {t("again")}
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!story || !current) return null;

  return (
    <Card className="premium-card border-border/70 rounded-2xl bg-card">
      <CardContent className="space-y-4 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <p className="min-w-0 truncate text-sm font-bold">
            {pickLang(story.title, locale) || story.title.en}
          </p>
          <Button size="sm" variant="ghost" onClick={quit} className="min-h-9 shrink-0 text-xs text-muted-foreground">
            {t("quit")}
          </Button>
        </div>
        <Progress value={(idx / Math.max(1, sentences.length)) * 100} className="h-1.5" aria-label={t("title")} />

        {/* listen row: play / loop + speed */}
        <div className="flex flex-wrap items-center gap-2">
          <Button onClick={play} className="min-h-11 gap-1.5 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-md hover:from-teal-600 hover:to-cyan-700">
            <Volume2 className="h-4 w-4" aria-hidden />
            {t("play")}
          </Button>
          <Button onClick={replayLoop} variant="outline" className="min-h-11 gap-1.5 rounded-xl">
            <RotateCcw className="h-4 w-4" aria-hidden />
            {t("loop")}
          </Button>
          <button
            type="button"
            onClick={() => setAutoLoop((v) => !v)}
            aria-pressed={autoLoop}
            className={cn(
              "min-h-11 rounded-xl border px-3 text-xs font-semibold transition-all",
              autoLoop
                ? "border-teal-400/70 bg-teal-500/10 text-teal-700 dark:text-teal-300"
                : "border-border/60 text-muted-foreground hover:bg-accent"
            )}
          >
            {t("autoPlay")}
          </button>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Gauge className="h-3.5 w-3.5" aria-hidden />
            {(
              [
                { v: 0.6, k: "slow" },
                { v: 0.85, k: "normal" },
              ] as const
            ).map((s) => (
              <button
                key={s.k}
                type="button"
                onClick={() => setRate(s.v)}
                aria-pressed={rate === s.v}
                className={cn(
                  "min-h-9 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-all",
                  rate === s.v
                    ? "border-transparent bg-accent text-accent-foreground"
                    : "border-border/60 text-muted-foreground hover:bg-accent"
                )}
              >
                {t(s.k)}
              </button>
            ))}
          </span>
        </div>

        {/* type area */}
        <Textarea
          value={typed}
          onChange={(e) => setTyped(e.target.value.slice(0, 300))}
          placeholder={t("placeholder")}
          disabled={!!result}
          rows={2}
          className="min-h-16 rounded-xl text-sm"
          aria-label={t("placeholder")}
        />

        {!result ? (
          <Button onClick={check} disabled={!typed.trim()} className="min-h-11 w-full rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-md hover:from-teal-600 hover:to-cyan-700">
            {t("check")}
          </Button>
        ) : (
          <div className="space-y-2.5 rounded-xl border border-border/60 p-4">
            <p className="text-sm font-bold">{t("scoreTitle", { score: result.score })}</p>
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
            <details className="text-xs text-muted-foreground">
              <summary className="cursor-pointer font-medium">{t("showOriginal")}</summary>
              <p className="mt-1 leading-relaxed">{current}</p>
            </details>
            <Button onClick={next} className="min-h-11 w-full rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-md hover:from-teal-600 hover:to-cyan-700">
              {idx + 1 >= sentences.length ? t("finish") : t("next")}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
