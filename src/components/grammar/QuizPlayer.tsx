"use client";

// Quiz player — 5 MCQs for one topic/level (static bank first, AI fallback),
// one question at a time, instant feedback, score screen with wrong-answer
// review and a practice-log POST on finish.

import { useCallback, useEffect, useState } from "react";
import type { ComponentType } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowLeft,
  ArrowRight,
  CircleCheck,
  CircleX,
  RotateCcw,
  Trophy,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import PointList from "@/components/shared/PointList";
import { useDevice } from "@/hooks/use-device";
import { apiPost, callAi } from "@/lib/client-api";
import { cn } from "@/lib/utils";
import type { QuizQuestion } from "@/lib/types";
import {
  errMessage,
  fmtNum,
  type GrammarTopic,
  type Level,
} from "@/components/grammar/shared";
import { getBankQuiz } from "@/components/grammar/bank";

interface QuizPlayerProps {
  topic: GrammarTopic;
  level: Level;
  /** Display name for owner-created topics with no i18n key. */
  topicName?: string;
  onBack: () => void;
  /** Fired once when the quiz is finished (for the completed-topics badge). */
  onFinished?: () => void;
}

type Phase = "loading" | "playing" | "done";

const OPT_LETTERS = ["A", "B", "C", "D"];

function motivationKey(correct: number, total: number): string {
  const ratio = total > 0 ? correct / total : 0;
  if (ratio === 1) return "perfect";
  if (ratio >= 0.6) return "good";
  if (ratio >= 0.4) return "ok";
  return "low";
}

export default function QuizPlayer({
  topic,
  level,
  topicName,
  onBack,
  onFinished,
}: QuizPlayerProps) {
  const t = useTranslations("grammar");
  const tc = useTranslations("common");
  const locale = useLocale();
  const fmt = useCallback((n: number) => fmtNum(n, locale), [locale]);

  const { deviceId } = useDevice();
  const [phase, setPhase] = useState<Phase>("loading");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [logged, setLogged] = useState(false);

  const load = useCallback(async () => {
    setPhase("loading");
    setError(null);
    setIdx(0);
    setPicked(null);
    setCorrect(0);
    setAnswers([]);
    setLogged(false);
    // 1) Static bank first — stored in this site's own source, zero API keys.
    const banked = getBankQuiz(topic.topic, level, locale);
    if (banked && banked.length > 0) {
      setQuestions(banked);
      setPhase("playing");
      return;
    }
    // 2) Bank miss → AI generation (needs the user's Gemini key).
    if (!deviceId) return;
    try {
      const qs = await callAi<QuizQuestion[]>(deviceId, "grammar-quiz", {
        topic: topic.topic,
        level,
        count: 5,
      });
      if (!Array.isArray(qs) || qs.length === 0) {
        throw new Error(t("quiz.errorEmpty"));
      }
      setQuestions(qs);
      setPhase("playing");
    } catch (e) {
      setError(errMessage(e, t("errors.unknown")));
    }
  }, [deviceId, topic.topic, level, locale, t]);

  useEffect(() => {
    void load();
  }, [load]);

  const q = questions[idx];

  const answer = (i: number) => {
    if (picked !== null || !q) return;
    setPicked(i);
    setAnswers((a) => {
      const copy = [...a];
      copy[idx] = i;
      return copy;
    });
    if (i === q.answer) setCorrect((c) => c + 1);
  };

  const next = () => {
    if (idx + 1 >= questions.length) {
      setPhase("done");
      onFinished?.();
      // Log result — fire and forget (errors silently ignored).
      apiPost("/api/practice", {
        deviceId,
        kind: "grammar-quiz",
        refId: topic.topic,
        score: correct,
        total: questions.length,
      })
        .then(() => setLogged(true))
        .catch(() => undefined);
    } else {
      setIdx((n) => n + 1);
      setPicked(null);
    }
  };

  const name = topicName ?? t(`topics.${topic.key}.name`);
  const header = (
    <HeaderRow
      topicName={name}
      topicIcon={topic.icon}
      level={level}
      quizBadge={t("quiz.badge")}
    />
  );

  /* ---------- loading ---------- */
  if (phase === "loading") {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="-ml-2 min-h-11 gap-1.5 text-muted-foreground"
            aria-label={t("lesson.backAria")}
          >
            <ArrowLeft className="h-4 w-4" /> {t("lesson.back")}
          </Button>
        </div>
        {header}
        {error ? (
          <Alert variant="destructive">
            <CircleX className="h-4 w-4" />
            <AlertTitle>{t("quiz.errorTitle")}</AlertTitle>
            <AlertDescription>
              <p>{error}</p>
              <Button
                size="sm"
                variant="outline"
                onClick={() => void load()}
                className="mt-2 min-h-11 gap-1.5 bg-transparent"
              >
                <RotateCcw className="h-4 w-4" /> {tc("retry")}
              </Button>
            </AlertDescription>
          </Alert>
        ) : (
          <Card aria-hidden>
            <CardContent className="space-y-4 p-4 sm:p-6">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-3 w-full rounded-full" />
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-12 w-full rounded-xl" />
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  /* ---------- done: score screen ---------- */
  if (phase === "done") {
    const wrongs = questions
      .map((qq, i) => ({ question: qq, answerIdx: answers[i] }))
      .filter((x) => x.answerIdx !== undefined && x.answerIdx !== x.question.answer);

    return (
      <div className="space-y-4">
        {header}

        <Card className="premium-card animate-fade-in-up rounded-2xl border-border/70 shadow-sm">
          <CardContent className="flex flex-col items-center gap-3 p-6 text-center sm:p-8">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg">
              <Trophy className="h-8 w-8" aria-hidden />
            </span>
            <p
              className="text-gradient text-4xl font-bold tracking-tight"
              aria-live="polite"
              role="status"
            >
              {fmt(correct)}/{fmt(questions.length)}{" "}
              <span className="text-2xl">{t("quiz.scoreWord")}</span>
            </p>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {t(`quiz.motivation.${motivationKey(correct, questions.length)}`)}
            </p>
            {logged && (
              <Badge
                variant="secondary"
                className="gap-1 bg-emerald-100 text-[11px] text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
              >
                <CircleCheck className="h-3.5 w-3.5" aria-hidden />{" "}
                {t("quiz.loggedBadge")}
              </Badge>
            )}
            <div className="mt-2 flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <Button
                onClick={() => void load()}
                className="btn-shine min-h-11 gap-2 rounded-xl"
                aria-label={t("quiz.retryAria")}
              >
                <RotateCcw className="h-4 w-4" /> {t("quiz.retry")}
              </Button>
              <Button
                variant="outline"
                onClick={onBack}
                className="min-h-11 rounded-xl bg-transparent"
              >
                {t("quiz.backToTopic")}
              </Button>
            </div>
          </CardContent>
        </Card>

        {wrongs.length > 0 && (
          <Card className="animate-fade-in-up-1 border-rose-200 bg-rose-50/60 shadow-none dark:border-rose-900/60 dark:bg-rose-950/20">
            <CardContent className="p-4 sm:p-5">
              <h2 className="mb-3 flex items-center gap-2 font-semibold">
                <CircleX className="h-4.5 w-4.5 text-rose-500" aria-hidden />
                {t("quiz.reviewTitle")}
              </h2>
              <div className="max-h-96 overflow-y-auto nice-scroll pr-1">
                <PointList
                  variant="number"
                  itemClassName="text-xs sm:text-sm"
                  items={wrongs.map((x) =>
                    t("quiz.reviewItem", {
                      question: x.question.question,
                      answer: x.question.options[x.question.answer] ?? "—",
                    })
                  )}
                />
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  /* ---------- playing ---------- */
  const isLast = idx + 1 >= questions.length;
  const isCorrect = picked !== null && picked === q.answer;
  const pct = ((idx + (picked !== null ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="mx-auto max-w-4xl space-y-4">
      {header}

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold">
            {t("quiz.questionOf", { i: fmt(idx + 1), n: fmt(questions.length) })}
          </span>
          <span className="text-muted-foreground">
            {t("quiz.scoreSoFar", { n: fmt(correct) })}
          </span>
        </div>
        <Progress
          value={pct}
          aria-label={t("quiz.progressAria", { pct: fmt(Math.round(pct)) })}
        />
      </div>

      <Card className="premium-card animate-fade-in-up rounded-2xl border-border/70 shadow-sm">
        <CardContent className="space-y-4 p-4 sm:p-6">
          <p className="text-base font-semibold leading-relaxed sm:text-lg">
            {q.question}
          </p>

          <div
            className="space-y-2.5"
            role="group"
            aria-label={t("quiz.chooseAnswer")}
          >
            {q.options.map((opt, i) => {
              const answered = picked !== null;
              const isAnswer = i === q.answer;
              const isPicked = i === picked;
              return (
                <button
                  key={i}
                  type="button"
                  disabled={answered}
                  onClick={() => answer(i)}
                  aria-pressed={isPicked}
                  className={cn(
                    "flex min-h-11 w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-left text-sm transition-all duration-150",
                    !answered
                      ? "border-border bg-card hover:-translate-y-px hover:border-emerald-500/50 hover:bg-emerald-500/5 hover:shadow-sm"
                      : isAnswer
                        ? "border-emerald-500 bg-emerald-500/10 font-medium text-emerald-800 dark:text-emerald-300"
                        : isPicked
                          ? "border-destructive/60 bg-destructive/10 font-medium text-destructive"
                          : "border-border bg-card opacity-50"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-xs font-bold",
                      answered && isAnswer
                        ? "border-emerald-500 bg-emerald-500 text-white"
                        : answered && isPicked
                          ? "border-destructive/50 bg-destructive/10 text-destructive"
                          : "border-border bg-muted/60 text-muted-foreground"
                    )}
                    aria-hidden
                  >
                    {OPT_LETTERS[i] ?? fmt(i + 1)}
                  </span>
                  <span className="min-w-0 flex-1 leading-relaxed">{opt}</span>
                  {answered && isAnswer && (
                    <CircleCheck
                      className="h-5 w-5 shrink-0 text-emerald-600"
                      aria-hidden
                    />
                  )}
                  {answered && isPicked && !isAnswer && (
                    <CircleX
                      className="h-5 w-5 shrink-0 text-destructive"
                      aria-hidden
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Instant feedback */}
          {picked !== null && (
            <div
              className={cn(
                "animate-fade-in-up space-y-2.5 rounded-xl border p-3.5",
                isCorrect
                  ? "border-emerald-200 bg-emerald-500/5 dark:border-emerald-900/60"
                  : "border-destructive/30 bg-destructive/5 dark:border-destructive/40"
              )}
              role="status"
              aria-live="polite"
            >
              <p
                className={cn(
                  "flex items-center gap-1.5 text-sm font-semibold",
                  isCorrect
                    ? "text-emerald-700 dark:text-emerald-400"
                    : "text-destructive"
                )}
              >
                {isCorrect ? (
                  <CircleCheck className="h-4 w-4" aria-hidden />
                ) : (
                  <CircleX className="h-4 w-4" aria-hidden />
                )}
                {isCorrect
                  ? t("quiz.correct")
                  : t("quiz.wrong", { answer: q.options[q.answer] ?? "—" })}
              </p>
              {q.explanation && (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {t("quiz.explanation")}{" "}
                  </span>
                  {q.explanation}
                </p>
              )}
              <Button
                onClick={next}
                className={cn(
                  "mt-1 min-h-11 w-full gap-1.5 rounded-xl sm:w-auto",
                  isLast && "btn-shine"
                )}
              >
                {isLast ? t("quiz.seeResult") : t("quiz.nextQuestion")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function HeaderRow({
  topicName,
  topicIcon: Icon,
  level,
  quizBadge,
}: {
  topicName: string;
  topicIcon: ComponentType<{ className?: string }>;
  level: Level;
  quizBadge: string;
}) {
  const tc = useTranslations("common");
  return (
    <div className="animate-fade-in-up flex flex-wrap items-center gap-1.5">
      <Badge variant="secondary" className="gap-1 text-[11px]">
        <Icon className="h-3.5 w-3.5" aria-hidden /> {topicName}
      </Badge>
      <Badge variant="outline" className="text-[11px]">
        {quizBadge} · {tc(`level.${level}`)}
      </Badge>
    </div>
  );
}
