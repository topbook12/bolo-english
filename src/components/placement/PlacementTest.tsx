"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  Volume2,
  ArrowRight,
  RotateCcw,
  Trophy,
  Loader2,
  Gauge,
  CircleCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { getDeviceId } from "@/hooks/use-device";
import { track } from "@/lib/track";
import { speakEnglish, cancelSpeech } from "@/components/vocab/speech";
import {
  PLACEMENT_QUESTIONS,
  PLACEMENT_TOTAL,
  type PlacementLevel,
  type PlacementQuestion,
} from "@/lib/placement-bank";
import { cn } from "@/lib/utils";

// Placement test player (D8, ROADMAP-60). 12 questions, one at a time,
// graded SERVER-SIDE (the client never sends a score). Listening questions
// speak the English sentence via on-device TTS (replay allowed).
// Flow: intro → 12 questions → result (A1-B2 + stored level saved).

type Phase = "intro" | "playing" | "grading" | "done";

interface PlacementResult {
  score: number;
  total: number;
  level: PlacementLevel;
  stored: string;
}

const LEVEL_COLOR: Record<PlacementLevel, string> = {
  A1: "from-emerald-500 to-teal-600",
  A2: "from-lime-500 to-emerald-600",
  B1: "from-amber-500 to-orange-600",
  B2: "from-rose-500 to-pink-600",
};

export default function PlacementTest({ onDone }: { onDone?: (stored: string) => void }) {
  const t = useTranslations("placement");
  const locale = useLocale() as "en" | "bn" | "hi";
  const [phase, setPhase] = useState<Phase>("intro");
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(PLACEMENT_TOTAL).fill(null)
  );
  const [result, setResult] = useState<PlacementResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [replayable, setReplayable] = useState(true);

  const q: PlacementQuestion | undefined = PLACEMENT_QUESTIONS[idx];

  // Stop any TTS when leaving the player.
  useEffect(() => {
    return () => cancelSpeech();
  }, []);

  // Auto-speak listening questions once when they appear.
  useEffect(() => {
    if (phase === "playing" && q?.kind === "listening") {
      setReplayable(false);
      speakEnglish(q.q.en);
      const timer = setTimeout(() => setReplayable(true), 2500);
      return () => clearTimeout(timer);
    }
  }, [phase, idx, q]);

  const pick = (i: number) => {
    setAnswers((a) => {
      const copy = [...a];
      copy[idx] = i;
      return copy;
    });
  };

  const next = async () => {
    if (idx + 1 >= PLACEMENT_TOTAL) {
      setPhase("grading");
      setError(null);
      try {
        const res = await fetch("/api/placement", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ deviceId: getDeviceId(), answers }),
        });
        const json = await res.json().catch(() => null);
        if (!res.ok || !json?.ok) throw new Error(json?.error || String(res.status));
        setResult(json as PlacementResult);
        setPhase("done");
        track("placement_done", { level: String(json.level) });
        onDone?.(String(json.stored));
      } catch (e) {
        setError(e instanceof Error ? t("errors.submit") : t("errors.submit"));
        setPhase("playing");
      }
    } else {
      setIdx((n) => n + 1);
    }
  };

  const restart = () => {
    cancelSpeech();
    setAnswers(Array(PLACEMENT_TOTAL).fill(null));
    setIdx(0);
    setResult(null);
    setError(null);
    setPhase("intro");
  };

  /* ---------- intro ---------- */
  if (phase === "intro") {
    return (
      <Card className="premium-card rounded-2xl border-border/70 bg-card">
        <CardContent className="space-y-4 p-5 text-center sm:p-6">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-600 text-white shadow-md">
            <Gauge className="h-7 w-7" aria-hidden />
          </span>
          <div className="space-y-1.5">
            <h3 className="text-lg font-bold">{t("intro.title")}</h3>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground">
              {t("intro.desc")}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 text-[11px] text-muted-foreground">
            <Badge variant="secondary">{t("intro.qCount", { n: PLACEMENT_TOTAL })}</Badge>
            <Badge variant="secondary">{t("intro.time")}</Badge>
            <Badge variant="secondary">{t("intro.free")}</Badge>
          </div>
          <Button
            onClick={() => setPhase("playing")}
            className="min-h-11 w-full gap-2 bg-gradient-to-br from-sky-500 to-cyan-600 text-white shadow-md hover:from-sky-600 hover:to-cyan-700 sm:w-auto sm:px-8"
          >
            {t("intro.start")}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </CardContent>
      </Card>
    );
  }

  /* ---------- grading ---------- */
  if (phase === "grading") {
    return (
      <Card className="rounded-2xl border-border/70 bg-card">
        <CardContent className="flex min-h-40 items-center justify-center gap-2 p-6 text-sm text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
          {t("grading")}
        </CardContent>
      </Card>
    );
  }

  /* ---------- done: result ---------- */
  if (phase === "done" && result) {
    return (
      <Card className="premium-card rounded-2xl border-border/70 bg-card">
        <CardContent className="space-y-4 p-5 text-center sm:p-6">
          <span
            className={cn(
              "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg",
              LEVEL_COLOR[result.level]
            )}
          >
            <Trophy className="h-8 w-8" aria-hidden />
          </span>
          <div className="space-y-1">
            <p className="text-4xl font-bold tracking-tight text-gradient">{result.level}</p>
            <p className="text-sm font-semibold">{t("result.title", { level: t(`result.stored_${result.stored}`) })}</p>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground">
              {t(`result.note_${result.level}`)}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
            <Badge variant="secondary" className="gap-1">
              <CircleCheck className="h-3.5 w-3.5" aria-hidden />
              {t("result.score", { score: result.score, total: result.total })}
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <CircleCheck className="h-3.5 w-3.5" aria-hidden />
              {t("result.saved")}
            </Badge>
          </div>
          <Button variant="outline" onClick={restart} className="min-h-11 gap-1.5">
            <RotateCcw className="h-4 w-4" aria-hidden />
            {t("result.retake")}
          </Button>
        </CardContent>
      </Card>
    );
  }

  /* ---------- playing ---------- */
  if (!q) return null;
  const answered = answers.filter((a) => a !== null).length;
  const progressPct = ((idx + (answers[idx] !== null ? 1 : 0)) / PLACEMENT_TOTAL) * 100;

  return (
    <Card className="premium-card rounded-2xl border-border/70 bg-card">
      <CardContent className="space-y-4 p-5 sm:p-6">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
            <span>{t("player.progress", { n: idx + 1, total: PLACEMENT_TOTAL })}</span>
            <span>{t("player.answered", { n: answered })}</span>
          </div>
          <Progress value={progressPct} className="h-1.5" aria-label={t("player.progressAria")} />
        </div>

        <div className="space-y-3">
          {/* Listening questions show the INSTRUCTION only — the sentence is
              spoken by TTS; showing the text would give the answer away. */}
          <p className="text-base font-semibold leading-relaxed">
            {q.kind === "listening" ? t("player.listeningStem") : q.q[locale] || q.q.en}
          </p>
          {q.kind === "listening" && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => speakEnglish(q.q.en)}
              disabled={!replayable}
              className="min-h-10 gap-1.5"
            >
              <Volume2 className="h-4 w-4" aria-hidden />
              {t("player.replay")}
            </Button>
          )}
          <div className="grid gap-2" role="group" aria-label={t("player.groupAria")}>
            {q.options.map((opt, i) => {
              const active = answers[idx] === i;
              const text = (locale !== "en" ? opt[locale] : undefined) || opt.en;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => pick(i)}
                  aria-pressed={active}
                  className={cn(
                    "flex min-h-11 items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-left text-sm transition-all",
                    active
                      ? "border-transparent bg-gradient-to-br from-sky-500 to-cyan-600 text-white shadow-sm"
                      : "border-border/60 hover:bg-accent"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold",
                      active ? "bg-white/25" : "bg-muted"
                    )}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="min-w-0 flex-1">{text}</span>
                </button>
              );
            })}
          </div>
        </div>

        {error && <p className="text-xs text-rose-600 dark:text-rose-400">{error}</p>}

        <div className="flex items-center justify-between gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={restart}
            className="min-h-10 text-xs text-muted-foreground"
          >
            {t("player.quit")}
          </Button>
          <Button
            size="sm"
            onClick={() => void next()}
            disabled={answers[idx] === null}
            className="min-h-11 gap-1.5 bg-gradient-to-br from-sky-500 to-cyan-600 text-white shadow-sm hover:from-sky-600 hover:to-cyan-700"
          >
            {idx + 1 >= PLACEMENT_TOTAL ? t("player.finish") : t("player.next")}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
