"use client";

// ReaderView — the comfortable reading experience (Task 11).
// Every paragraph is a card: numbered tinted chip + English text + free TTS +
// a tap-to-reveal translation. A global "show all" switch, key-word chips,
// an inline comprehension quiz and next-passage navigation complete the flow.

import { useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ChevronRight,
  Circle,
  CircleX,
  Ear,
  Languages,
  Lightbulb,
  ListChecks,
  RotateCcw,
  Trophy,
  Volume2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { speakEnglish, cancelSpeech } from "@/components/vocab/speech";
import { markReadingDone } from "@/components/reading/reading-store";
import { toast } from "sonner";
import type { ReadingStory } from "@/components/reading/ReadingSection";
// Same 6-color tint rotation the grammar lesson cards use (no blue/indigo).
const TINTS = [
  { chip: "bg-rose-500/10 text-rose-600 dark:text-rose-400", ring: "border-rose-200 dark:border-rose-900/60" },
  { chip: "bg-amber-500/10 text-amber-600 dark:text-amber-400", ring: "border-amber-200 dark:border-amber-900/60" },
  { chip: "bg-teal-500/10 text-teal-600 dark:text-teal-400", ring: "border-teal-200 dark:border-teal-900/60" },
  { chip: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400", ring: "border-emerald-200 dark:border-emerald-900/60" },
  { chip: "bg-orange-500/10 text-orange-600 dark:text-orange-400", ring: "border-orange-200 dark:border-orange-900/60" },
  { chip: "bg-pink-500/10 text-pink-600 dark:text-pink-400", ring: "border-pink-200 dark:border-pink-900/60" },
];

export default function ReaderView({
  story,
  onBack,
  onNext,
}: {
  story: ReadingStory;
  onBack: () => void;
  onNext: (() => void) | null;
}) {
  const t = useTranslations("reading");
  const locale = useLocale();

  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [qIndex, setQIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // speak current state: cancel TTS when the passage changes
  useEffect(() => {
    return () => cancelSpeech();
  }, [story.id]);

  const genreLabel = t(`genres.${story.genre}`);
  const translation = useMemo(
    () => (p: { en: string; bn: string; hi: string }) => (locale === "hi" ? p.hi : p.bn),
    [locale]
  );

  const progressPct = Math.round(((revealed.size + (showAll ? story.paragraphs.length : 0)) / Math.max(1, story.paragraphs.length)) * 100);
  const wordCount = useMemo(
    () => story.paragraphs.reduce((n, p) => n + p.en.split(/\s+/).length, 0),
    [story]
  );

  const reveal = (i: number) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const complete = () => {
    markReadingDone(story.id);
    toast.success(t("reader.doneToast"), { icon: "🎉" });
  };

  /* ── quiz handlers ── */
  const startQuiz = () => {
    setQuizOpen(true);
    setQIndex(0);
    setPicked(null);
    setLocked(false);
    setScore(0);
    setFinished(false);
  };
  const submitAnswer = () => {
    if (picked === null || locked) return;
    if (story.quiz[qIndex].answer === picked) setScore((s) => s + 1);
    setLocked(true);
  };
  const nextQuestion = () => {
    if (qIndex + 1 >= story.quiz.length) {
      setFinished(true);
      complete();
      return;
    }
    setQIndex((i) => i + 1);
    setPicked(null);
    setLocked(false);
  };

  const q = quizOpen && !finished && story.quiz[qIndex] ? story.quiz[qIndex] : null;

  return (
    <div className="space-y-4">
      {/* back row */}
      <div className="flex items-center justify-between gap-2">
        <Button variant="outline" onClick={onBack} className="min-h-11 gap-1.5 rounded-xl">
          <ArrowLeft className="h-4 w-4" aria-hidden /> {t("reader.back")}
        </Button>
        <div className="flex flex-wrap justify-end gap-1.5">
          <Badge variant="outline" className="gap-1">
            {genreLabel}
          </Badge>
          <Badge variant="secondary" className="text-[11px]">
            {t("levels." + story.level)}
          </Badge>
          <Badge variant="secondary" className="text-[11px]">
            {t("library.minutes", { n: story.minutes })} · {wordCount} {t("reader.words")}
          </Badge>
        </div>
      </div>

      {/* hero */}
      <Card className="premium-card overflow-hidden rounded-2xl border-border/70 py-0">
        <CardContent className="relative p-5 sm:p-6">
          <div
            className="pointer-events-none absolute -right-10 -top-14 h-40 w-40 rounded-full bg-amber-500/10 blur-2xl"
            aria-hidden
          />
          <div className="flex items-start gap-3.5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/90 to-orange-500/90 text-2xl shadow-md">
              {story.emoji}
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-bold leading-snug sm:text-xl">{story.title[locale === "bn" ? "bn" : locale === "hi" ? "hi" : "en"] || story.title.en}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {story.summary[locale === "bn" ? "bn" : locale === "hi" ? "hi" : "en"] || story.summary.en}
              </p>
            </div>
          </div>
          <div className="mt-4 space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-medium text-muted-foreground">
              <span>{t("reader.readProgress", { done: Math.min(revealed.size + (showAll ? story.paragraphs.length : 0), story.paragraphs.length), total: story.paragraphs.length })}</span>
              <span>{Math.min(100, progressPct)}%</span>
            </div>
            <Progress value={Math.min(100, progressPct)} className="h-1.5" aria-label="reading progress" />
          </div>
        </CardContent>
      </Card>

      {/* reading help + show-all switch */}
      <div className="flex flex-col gap-2 rounded-2xl border border-dashed border-amber-500/40 bg-amber-500/5 px-4 py-3 sm:flex-row sm:items-center">
        <div className="flex min-w-0 flex-1 items-start gap-2.5">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" aria-hidden />
          <div className="min-w-0">
            <p className="text-xs font-semibold text-amber-700 dark:text-amber-300">{t("reader.helpTitle")}</p>
            <p className="text-[11px] leading-relaxed text-amber-700/80 dark:text-amber-300/80">{t("reader.helpDesc")}</p>
          </div>
        </div>
        <label className="flex shrink-0 items-center gap-2 text-xs font-medium text-amber-700 dark:text-amber-300">
          {showAll ? t("reader.hideAll") : t("reader.showAll")}
          <Switch
            checked={showAll}
            onCheckedChange={(v) => {
              setShowAll(v);
              if (v) cancelSpeech();
            }}
            aria-label={t("reader.showAll")}
          />
        </label>
      </div>

      {/* vocabulary chips */}
      {story.vocabulary.length > 0 && (
        <Card className="rounded-2xl border-border/70 py-0">
          <CardContent className="p-4">
            <h3 className="flex items-center gap-1.5 text-sm font-semibold">
              <BookOpenCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden />
              {t("reader.vocabTitle")}
              <span className="text-xs font-normal text-muted-foreground">· {t("reader.vocabHint")}</span>
            </h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {story.vocabulary.map((v) => (
                <div
                  key={v.word}
                  className="flex items-start gap-2 rounded-xl border border-border/60 bg-muted/40 px-3 py-2"
                >
                  <button
                    type="button"
                    onClick={() => speakEnglish(v.word)}
                    className="relative mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-emerald-600 transition-colors after:absolute after:-inset-1.5 after:content-[''] hover:bg-emerald-500/10 dark:text-emerald-400"
                    aria-label={`${t("reader.speakAria")}: ${v.word}`}
                  >
                    <Volume2 className="h-3.5 w-3.5" aria-hidden />
                  </button>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-foreground">{v.word}</p>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {v.meaning[locale === "bn" ? "bn" : locale === "hi" ? "hi" : "en"] || v.meaning.en}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* paragraphs */}
      <div className="space-y-3">
        {story.paragraphs.map((p, i) => {
          const tint = TINTS[i % TINTS.length];
          const open = showAll || revealed.has(i);
          return (
            <Card
              key={i}
              className={cn("rounded-2xl border-border/60 py-0 transition-colors", open && tint.ring)}
            >
              <CardContent className="p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <span
                    className={cn(
                      "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                      tint.chip
                    )}
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <p className="min-w-0 flex-1 text-[15px] leading-[1.85] text-foreground/95">
                    {p.en}
                  </p>
                  <div className="flex shrink-0 flex-col gap-1">
                    <button
                      type="button"
                      onClick={() => speakEnglish(p.en)}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-emerald-600 transition-colors hover:bg-emerald-500/10 dark:text-emerald-400"
                      aria-label={t("reader.speakAria")}
                    >
                      <Ear className="h-4 w-4" aria-hidden />
                    </button>
                    <button
                      type="button"
                      onClick={() => reveal(i)}
                      className={cn(
                        "inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors",
                        open
                          ? "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                          : "text-muted-foreground hover:bg-accent"
                      )}
                      aria-label={t("reader.translateAria")}
                      aria-pressed={open}
                    >
                      <Languages className="h-4 w-4" aria-hidden />
                    </button>
                  </div>
                </div>
                {open && (
                  <p className="mt-3 rounded-xl bg-muted/60 px-3.5 py-2.5 text-sm leading-relaxed text-muted-foreground">
                    {translation(p)}
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* quiz section */}
      <Card className="rounded-2xl border-border/70 py-0">
        <CardContent className="p-4 sm:p-5">
          {!quizOpen && (
            <div className="flex flex-col items-center gap-3 py-3 text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/90 to-emerald-600/90 text-white shadow-md">
                <ListChecks className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-bold">{t("reader.quizTitle")}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {t("reader.quizDesc", { n: story.quiz.length })}
                </p>
              </div>
              <Button
                onClick={startQuiz}
                className="min-h-11 gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:from-teal-600 hover:to-emerald-700"
              >
                <ListChecks className="h-4 w-4" aria-hidden /> {t("reader.quizStart")}
              </Button>
            </div>
          )}

          {q && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                <span className="flex items-center gap-1.5 font-semibold text-foreground">
                  <ListChecks className="h-3.5 w-3.5 text-teal-600" aria-hidden />
                  {t("reader.question", { n: qIndex + 1 })}
                </span>
                <span>
                  {qIndex + 1}/{story.quiz.length}
                </span>
              </div>
              <Progress value={((qIndex + (locked ? 1 : 0)) / story.quiz.length) * 100} className="h-1.5" />
              <p className="text-[15px] font-semibold leading-relaxed">
                {q.question[locale === "bn" ? "bn" : locale === "hi" ? "hi" : "en"] || q.question.en}
              </p>
              <div className="grid gap-2">
                {q.options.map((opt, oi) => {
                  const isAnswer = oi === q.answer;
                  const isPicked = picked === oi;
                  return (
                    <button
                      key={oi}
                      type="button"
                      disabled={locked}
                      onClick={() => setPicked(oi)}
                      className={cn(
                        "flex min-h-11 items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-left text-sm transition-all",
                        !locked && "hover:border-primary/50 hover:bg-accent/60",
                        locked && isAnswer && "border-emerald-500/60 bg-emerald-500/10",
                        locked && isPicked && !isAnswer && "border-rose-500/60 bg-rose-500/10",
                        !locked && isPicked && "border-primary bg-primary/5",
                        !locked && !isPicked && "border-border/70"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold",
                          locked && isAnswer
                            ? "bg-emerald-500 text-white"
                            : locked && isPicked
                              ? "bg-rose-500 text-white"
                              : isPicked
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground"
                        )}
                        aria-hidden
                      >
                        {locked && isAnswer ? "✓" : String.fromCharCode(65 + oi)}
                      </span>
                      <span className="min-w-0">
                        {opt[locale === "bn" ? "bn" : locale === "hi" ? "hi" : "en"] || opt.en}
                      </span>
                    </button>
                  );
                })}
              </div>

              {locked && (
                <div
                  className={cn(
                    "flex items-start gap-2 rounded-xl px-3.5 py-2.5 text-sm",
                    picked === q.answer
                      ? "bg-emerald-500/10 text-emerald-800 dark:text-emerald-300"
                      : "bg-rose-500/10 text-rose-800 dark:text-rose-300"
                  )}
                >
                  {picked === q.answer ? (
                    <Circle className="mt-0.5 h-4 w-4 shrink-0 fill-emerald-500 text-emerald-500" aria-hidden />
                  ) : (
                    <CircleX className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                  )}
                  <span className="min-w-0">
                    {picked === q.answer ? (
                      <b>{t("reader.correct")}</b>
                    ) : (
                      <>
                        <b>{t("reader.wrong")}</b>{" "}
                        {q.options[q.answer][locale === "bn" ? "bn" : locale === "hi" ? "hi" : "en"] ||
                          q.options[q.answer].en}
                        {". "}
                      </>
                    )}
                    <span className="text-xs opacity-90">
                      {q.explain[locale === "bn" ? "bn" : locale === "hi" ? "hi" : "en"] || q.explain.en}
                    </span>
                  </span>
                </div>
              )}

              <div className="flex gap-2">
                {!locked ? (
                  <Button
                    onClick={submitAnswer}
                    disabled={picked === null}
                    className="min-h-11 flex-1 gap-1.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:from-teal-600 hover:to-emerald-700"
                  >
                    <CheckCircle2 className="h-4 w-4" aria-hidden /> {t("reader.submit")}
                  </Button>
                ) : (
                  <Button
                    onClick={nextQuestion}
                    className="min-h-11 flex-1 gap-1.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:from-teal-600 hover:to-emerald-700"
                  >
                    {t("reader.next")} <ChevronRight className="h-4 w-4" aria-hidden />
                  </Button>
                )}
              </div>
            </div>
          )}

          {quizOpen && finished && (
            <div className="flex flex-col items-center gap-3 py-4 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-500/90 to-orange-500/90 text-white shadow-md">
                <Trophy className="h-7 w-7" aria-hidden />
              </span>
              <p className="text-lg font-bold">
                {t("reader.score", { score, total: story.quiz.length })}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Button variant="outline" onClick={startQuiz} className="min-h-10 gap-1.5 rounded-xl">
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden /> {t("reader.quizRetry")}
                </Button>
                {onNext && (
                  <Button
                    onClick={onNext}
                    className="min-h-10 gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700"
                  >
                    {t("reader.nextStory")} <ArrowRight className="h-4 w-4" aria-hidden />
                  </Button>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* mark done row */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
        <Button variant="outline" onClick={complete} className="min-h-11 gap-1.5 rounded-xl">
          <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden /> {t("reader.markDone")}
        </Button>
        {onNext && (
          <Button
            onClick={onNext}
            variant="ghost"
            className="min-h-11 gap-1.5 rounded-xl text-primary"
          >
            {t("reader.nextStory")} <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        )}
      </div>
    </div>
  );
}
