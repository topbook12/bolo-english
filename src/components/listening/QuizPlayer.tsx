"use client";

import { useCallback, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  BookOpen,
  ChevronRight,
  CircleCheck,
  CircleX,
  RotateCcw,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { apiPost } from "@/lib/client-api";
import type { QuizQuestion } from "@/lib/types";
import EmptyState from "@/components/shared/EmptyState";

const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

/** Convert latin digits to Bengali digits (প্রশ্ন ২/৫ স্টাইলের জন্য) */
export function bn(n: number | string): string {
  return String(n).replace(/[0-9]/g, (d) => BN_DIGITS[Number(d)]);
}

/**
 * Locale-aware digit formatter: Bengali digits in the bn UI,
 * latin digits for en/hi. Wraps the existing bn() helper.
 */
export function useDigits(): (n: number | string) => string {
  const locale = useLocale();
  return useCallback((n: number | string) => (locale === "bn" ? bn(n) : String(n)), [locale]);
}

const LETTERS = ["A", "B", "C", "D"] as const;

interface QuizPlayerProps {
  deviceId: string;
  storyTitle: string;
  questions: QuizQuestion[];
  onBackToStory: () => void;
  onNewStory: () => void;
  onFinished?: (score: number, total: number) => void;
}

export default function QuizPlayer({
  deviceId,
  storyTitle,
  questions,
  onBackToStory,
  onNewStory,
  onFinished,
}: QuizPlayerProps) {
  const t = useTranslations("listening.quiz");
  const fmt = useDigits();

  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = questions.length;
  const answered = selected !== null;
  const correct = selected !== null && selected === questions[idx]?.answer;

  const choose = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === questions[idx].answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (idx + 1 < total) {
      setIdx(idx + 1);
      setSelected(null);
      return;
    }
    const finalScore = score;
    setFinished(true);
    onFinished?.(finalScore, total);
    // প্র্যাকটিস লগ — ব্যর্থ হলে চুপচাপ এগিয়ে যাই
    apiPost("/api/practice", {
      deviceId,
      kind: "listening-quiz",
      refId: storyTitle,
      score: finalScore,
      total,
    }).catch(() => undefined);
  };

  const retry = () => {
    setIdx(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  if (total === 0) {
    return (
      <EmptyState
        emoji="📝"
        title={t("noQuestions")}
        description={storyTitle}
        actionLabel={t("backToStory")}
        onAction={onBackToStory}
      />
    );
  }

  if (finished) {
    const pct = Math.round((score / total) * 100);
    const msgKey = pct === 100 ? "msgPerfect" : pct >= 60 ? "msgGreat" : pct >= 40 ? "msgGood" : "msgKeep";
    return (
      <Card className="premium-card animate-fade-in-up rounded-2xl bg-card shadow-sm">
        <CardContent className="flex flex-col items-center gap-4 p-6 text-center sm:p-8">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500/90 to-emerald-600/90 text-white shadow-md ring-1 ring-inset ring-white/25">
            <Trophy className="h-8 w-8" aria-hidden />
          </span>
          <div>
            <h2 className="text-xl font-bold">{t("finishedTitle")}</h2>
            <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">“{storyTitle}”</p>
          </div>
          <p className="text-4xl font-extrabold tracking-tight text-teal-700 dark:text-teal-300">
            {fmt(score)}
            <span className="text-2xl text-muted-foreground">/{fmt(total)}</span>
          </p>
          <Badge variant="secondary" className="bg-teal-500/10 text-teal-700 dark:text-teal-300">
            {t("scorePct", { pct: fmt(pct) })}
          </Badge>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{t(msgKey)}</p>
          <div className="mt-2 grid w-full gap-2.5 sm:grid-cols-3">
            <Button variant="outline" onClick={retry} className="min-h-11 gap-1.5 rounded-xl">
              <RotateCcw className="h-4 w-4" /> {t("retryQuiz")}
            </Button>
            <Button variant="outline" onClick={onBackToStory} className="min-h-11 gap-1.5 rounded-xl">
              <BookOpen className="h-4 w-4" /> {t("backToStory")}
            </Button>
            <Button onClick={onNewStory} className="btn-shine min-h-11 gap-1.5 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-md hover:from-teal-600 hover:to-emerald-700">
              <Sparkles className="h-4 w-4" /> {t("newStory")}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const q = questions[idx];
  const progressPct = ((idx + (answered ? 1 : 0)) / total) * 100;

  return (
    <Card className="premium-card animate-fade-in-up rounded-2xl bg-card shadow-sm">
      <CardContent className="space-y-4 p-4 sm:p-6">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2 text-sm">
            <span className="font-semibold">{t("questionN", { cur: fmt(idx + 1), total: fmt(total) })}</span>
            <span className="truncate text-xs text-muted-foreground">{storyTitle}</span>
          </div>
          <Progress value={progressPct} aria-label={t("progressAria")} />
        </div>

        {/* Question */}
        <h2 className="text-base font-semibold leading-relaxed sm:text-lg">{q.question}</h2>

        {/* Options */}
        <div className="grid gap-2.5" role="group" aria-label={t("optionsAria")}>
          {q.options.map((opt, i) => {
            const isAnswer = i === q.answer;
            const isSelected = i === selected;
            return (
              <button
                key={i}
                type="button"
                onClick={() => choose(i)}
                disabled={answered}
                aria-pressed={isSelected}
                aria-label={t("optionAria", { letter: LETTERS[i], option: opt })}
                className={cn(
                  "flex min-h-11 w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all sm:text-[15px]",
                  !answered &&
                    "border-border bg-background hover:border-teal-500/50 hover:bg-teal-500/5 active:scale-[0.99]",
                  answered && isAnswer && "border-emerald-500 bg-emerald-500/10 font-medium text-emerald-800 dark:text-emerald-300",
                  answered &&
                    isSelected &&
                    !isAnswer &&
                    "border-destructive bg-destructive/10 text-destructive",
                  answered && !isAnswer && !isSelected && "border-border/60 text-muted-foreground"
                )}
              >
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-xs font-bold",
                    !answered && "border-border text-muted-foreground",
                    answered && isAnswer && "border-emerald-500 bg-emerald-500 text-white",
                    answered &&
                      isSelected &&
                      !isAnswer &&
                      "border-destructive bg-destructive text-destructive-foreground",
                    answered && !isAnswer && !isSelected && "border-border/60"
                  )}
                >
                  {LETTERS[i]}
                </span>
                <span className="min-w-0 flex-1">{opt}</span>
                {answered && isAnswer && <CircleCheck className="h-5 w-5 shrink-0" aria-hidden />}
                {answered && isSelected && !isAnswer && (
                  <CircleX className="h-5 w-5 shrink-0" aria-hidden />
                )}
              </button>
            );
          })}
        </div>

        {/* Instant feedback + explanation */}
        {answered && (
          <div
            className={cn(
              "rounded-xl border p-4",
              correct
                ? "border-emerald-500/40 bg-emerald-500/5 dark:border-emerald-900/40"
                : "border-destructive/40 bg-destructive/5"
            )}
            aria-live="polite"
          >
            <p
              className={cn(
                "flex items-center gap-1.5 text-sm font-semibold",
                correct ? "text-emerald-700 dark:text-emerald-400" : "text-destructive"
              )}
            >
              {correct ? (
                <CircleCheck className="h-4 w-4 shrink-0" aria-hidden />
              ) : (
                <CircleX className="h-4 w-4 shrink-0" aria-hidden />
              )}
              {correct ? t("correctFeedback") : t("wrongFeedback", { answer: q.options[q.answer] })}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{q.explanation}</p>
          </div>
        )}

        {answered && (
          <Button onClick={next} className="btn-shine min-h-11 w-full gap-1.5 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-md hover:from-teal-600 hover:to-emerald-700 sm:w-auto">
            {idx + 1 < total ? t("nextQuestion") : t("showResult")}
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
