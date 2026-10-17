"use client";

import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Loader2,
  Play,
  RotateCcw,
  Target,
  Trophy,
  Volume2,
  XCircle,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import EmptyState from "@/components/shared/EmptyState";
import { cn } from "@/lib/utils";
import { callAi, apiPost } from "@/lib/client-api";
import type { QuizQuestion } from "@/lib/types";
import type { SavedWord } from "./types";
import { speakEnglish } from "./speech";
import { useLocaleNum } from "./use-locale-num";

interface QuizTabProps {
  deviceId: string;
  words: SavedWord[] | null; // null = wordbook still loading
  onGoWordbook: () => void;
}

type Phase = "idle" | "loading" | "active" | "done" | "error";

// Tab 3 — কুইজ: AI quiz from the user's saved words (needs ≥ 3 words).
// Questions / options / explanations are AI DATA (Bangla) — never translated.
export default function QuizTab({ deviceId, words, onGoWordbook }: QuizTabProps) {
  const t = useTranslations("vocab");
  const tCommon = useTranslations("common");
  const num = useLocaleNum();

  const [phase, setPhase] = useState<Phase>("idle");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const startQuiz = async () => {
    if (!words || words.length < 3) return;
    setPhase("loading");
    setError(null);
    try {
      const raw = await callAi<QuizQuestion[]>(deviceId, "vocab-quiz", {
        words: words.slice(0, 10).map((w) => w.word),
      });
      const clean = (raw ?? []).filter(
        (q) =>
          q &&
          typeof q.question === "string" &&
          Array.isArray(q.options) &&
          q.options.length >= 2
      );
      if (clean.length === 0) {
        throw new Error(t("quiz.makeError"));
      }
      setQuestions(clean);
      setIdx(0);
      setSelected(null);
      setScore(0);
      setPhase("active");
    } catch (e) {
      setError((e as Error).message);
      setPhase("error");
    }
  };

  // ---- Wordbook still loading ----
  if (!words) {
    return (
      <div className="space-y-3" aria-busy="true" aria-label={t("wordbook.loadingAria")}>
        <Skeleton className="h-48 rounded-2xl" />
      </div>
    );
  }

  // ---- Not-enough-words prompt ----
  if (words.length < 3) {
    return (
      <div className="animate-fade-in-up">
        <EmptyState
          illustration="/illustrations/ill-vocab.webp"
          emoji="🎯"
          title={t("quiz.needMoreTitle")}
          description={t("quiz.needMoreDesc", { n: num(words.length) })}
          actionLabel={t("quiz.goWordbook")}
          onAction={onGoWordbook}
        />
      </div>
    );
  }

  // ---- Loading ----
  if (phase === "loading") {
    return (
      <div
        className="premium-card flex flex-col items-center gap-3 rounded-2xl bg-card p-8 text-center"
        aria-busy="true"
      >
        <Loader2 className="h-8 w-8 animate-spin text-emerald-600 dark:text-emerald-400" aria-hidden />
        <p className="text-sm font-medium">{t("quiz.generatingTitle")}</p>
        <p className="text-xs leading-relaxed text-muted-foreground">
          {t("quiz.generatingDesc")}
        </p>
      </div>
    );
  }

  // ---- Error ----
  if (phase === "error") {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>{t("quiz.loadErrorTitle")}</AlertTitle>
        <AlertDescription className="flex flex-col items-start gap-2">
          <span>{error}</span>
          <Button size="sm" variant="outline" onClick={startQuiz} className="h-9">
            {tCommon("retry")}
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  // ---- Final score screen ----
  if (phase === "done") {
    const total = questions.length;
    const ratio = total > 0 ? score / total : 0;
    const pct = Math.round(ratio * 100);
    const resultMessage =
      ratio >= 0.8 ? t("quiz.msgGreat") : ratio >= 0.5 ? t("quiz.msgGood") : t("quiz.msgKeep");
    return (
      <article className="premium-card animate-fade-in-up flex flex-col items-center gap-4 rounded-2xl bg-card p-6 text-center">
        <span className="animate-float flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/90 to-orange-500/90 text-white shadow-md">
          <Trophy className="h-8 w-8" aria-hidden />
        </span>
        <div>
          <p className="text-sm font-semibold text-muted-foreground">{t("quiz.resultTitle")}</p>
          <p className="mt-1 text-4xl font-bold tracking-tight">
            {num(score)}
            <span className="text-xl text-muted-foreground">/{num(total)}</span>
          </p>
          <p className="mt-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            {t("quiz.pctCorrect", { pct: num(pct) })}
          </p>
        </div>
        <Progress
          value={pct}
          className="h-2 max-w-xs"
          aria-label={t("quiz.scoreAria", { score: num(score), total: num(total) })}
        />
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{resultMessage}</p>
        <Separator className="w-full" />
        <Button
          className="btn-shine h-11 gap-1.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 px-6 text-white shadow-md shadow-emerald-500/25 hover:from-emerald-600 hover:to-teal-700"
          onClick={startQuiz}
        >
          <RotateCcw className="h-4 w-4" aria-hidden />
          {t("quiz.retry")}
        </Button>
        <p className="text-xs text-muted-foreground">{t("quiz.retryNote")}</p>
      </article>
    );
  }

  // ---- Idle (start screen) ----
  if (phase === "idle") {
    const quizWords = words.slice(0, 10);
    return (
      <article className="premium-card animate-fade-in-up space-y-4 rounded-2xl bg-card p-4 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/90 to-teal-600/90 text-white shadow-md ring-1 ring-inset ring-white/25">
            <Target className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <h2 className="font-semibold">🎯 {t("quiz.startTitle")}</h2>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {t("quiz.startDesc", { n: num(quizWords.length) })}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5" aria-label={t("aria.wordsChips")}>
          {quizWords.map((w) => (
            <Badge key={w.id} variant="secondary" className="text-xs">
              {w.word}
            </Badge>
          ))}
        </div>

        <Button
          className="btn-shine h-11 w-full gap-1.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25 hover:from-emerald-600 hover:to-teal-700 sm:w-auto sm:px-6"
          onClick={startQuiz}
        >
          <Play className="h-4 w-4" aria-hidden />
          {t("quiz.start")}
        </Button>
      </article>
    );
  }

  // ---- Active quiz ----
  const q = questions[idx];
  const revealed = selected !== null;
  const isCorrect = revealed && selected === q.answer;
  const validAnswer = q.answer >= 0 && q.answer < q.options.length;
  const isLast = idx + 1 >= questions.length;

  const choose = (i: number) => {
    if (selected !== null) return; // already answered
    setSelected(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (isLast) {
      setPhase("done");
      // Log the result to /api/practice (fire-and-forget; score already includes the last answer)
      if (deviceId) {
        apiPost("/api/practice", {
          deviceId,
          kind: "vocab-quiz",
          refId: "wordbook",
          score,
          total: questions.length,
        }).catch(() => null);
      }
    } else {
      setIdx((i) => i + 1);
      setSelected(null);
    }
  };

  return (
    <div className="animate-fade-in-up space-y-3">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold">
            {t("quiz.questionOf", { cur: num(idx + 1), total: num(questions.length) })}
          </span>
          <span className="text-muted-foreground">
            {t("quiz.scoreLabel", { score: num(score) })}
          </span>
        </div>
        <Progress value={((idx + 1) / questions.length) * 100} className="h-2" />
      </div>

      <article className="premium-card space-y-4 rounded-2xl bg-card p-4 sm:p-6">
        {/* Question */}
        <div className="flex items-start justify-between gap-2">
          <p className="text-base leading-relaxed font-semibold sm:text-lg">{q.question}</p>
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 shrink-0 rounded-xl text-emerald-600 hover:bg-emerald-500/10 hover:text-emerald-700 dark:text-emerald-400"
            onClick={() => speakEnglish(q.question)}
            aria-label={t("quiz.listenAria")}
          >
            <Volume2 className="h-4.5 w-4.5" aria-hidden />
          </Button>
        </div>

        {/* Options — A/B/C/D chips */}
        <div className="space-y-2" role="group" aria-label={t("aria.optionsGroup")}>
          {q.options.map((opt, i) => {
            const isAnswer = i === q.answer;
            const isPicked = selected === i;
            return (
              <button
                key={i}
                type="button"
                disabled={revealed}
                onClick={() => choose(i)}
                aria-pressed={isPicked}
                className={cn(
                  "flex min-h-11 w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all",
                  !revealed &&
                    "border-border/70 bg-card hover:border-emerald-500/50 hover:bg-emerald-500/5 active:scale-[0.99]",
                  revealed &&
                    isAnswer &&
                    "border-emerald-600 bg-emerald-500/10 text-emerald-800 dark:border-emerald-500 dark:text-emerald-300",
                  revealed &&
                    isPicked &&
                    !isAnswer &&
                    "border-destructive bg-destructive/10 text-destructive",
                  revealed && !isPicked && !isAnswer && "border-border/50 opacity-50"
                )}
              >
                <span
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                    revealed && isAnswer
                      ? "border-emerald-600 bg-emerald-600 text-white dark:border-emerald-500"
                      : revealed && isPicked
                        ? "border-destructive bg-destructive text-white"
                        : "border-border text-muted-foreground"
                  )}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="min-w-0 flex-1">{opt}</span>
                {revealed && isAnswer && (
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400"
                    aria-hidden
                  />
                )}
                {revealed && isPicked && !isAnswer && (
                  <XCircle className="h-4 w-4 shrink-0 text-destructive" aria-hidden />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback + explanation */}
        {revealed && (
          <div
            className={cn(
              "animate-fade-in-up space-y-1 rounded-xl px-3 py-2.5",
              isCorrect
                ? "bg-emerald-500/10 text-emerald-800 dark:text-emerald-300"
                : "bg-destructive/10 text-destructive"
            )}
            aria-live="polite"
          >
            <p className="text-sm font-semibold">
              {isCorrect
                ? t("quiz.correctFeedback")
                : t("quiz.wrongFeedback", {
                    answer: validAnswer ? q.options[q.answer] : "—",
                  })}
            </p>
            {q.explanation && (
              <p className="text-xs leading-relaxed opacity-90">{q.explanation}</p>
            )}
          </div>
        )}

        {/* Next */}
        {revealed && (
          <Button
            className="btn-shine h-11 w-full gap-1.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25 hover:from-emerald-600 hover:to-teal-700"
            onClick={next}
          >
            {isLast ? t("quiz.seeResults") : t("quiz.nextQuestion")}
            {!isLast && <ChevronRight className="h-4 w-4" aria-hidden />}
          </Button>
        )}
      </article>
    </div>
  );
}
