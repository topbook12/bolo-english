"use client";

// Lesson view — renders one grammar lesson for a topic/level, with a sticky
// CTA into the quiz. Load order: owner-authored DB lesson (zero keys) →
// static bank (zero keys) → AI generation (BYO Gemini key).

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleCheckBig,
  CircleX,
  Languages,
  Lightbulb,
  ListChecks,
  RefreshCw,
  TriangleAlert,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useDevice } from "@/hooks/use-device";
import { apiGet, callAi } from "@/lib/client-api";
import { cn } from "@/lib/utils";
import type { GrammarLessonContent } from "@/lib/types";
import { pickTri, type LibraryGrammarEntry } from "@/lib/library-types";
import { errMessage, fmtNum, saveDoneTopic, type GrammarTopic, type Level } from "@/components/grammar/shared";
import { bankLessonToContent, getBankLesson } from "@/components/grammar/bank";
import LibraryAskBox from "@/components/library/AskBox";

interface LessonViewProps {
  topic: GrammarTopic;
  level: Level;
  onBack: () => void;
  onStartQuiz: () => void;
  /**
   * Display name for owner-made topics that have no i18n topic key.
   * Always preferred when present — `t()` on a missing key throws in dev.
   */
  topicName?: string;
  /** Present when a next topic exists in the sequential course order. */
  onNextLesson?: () => void;
}

/** Owner-authored DB entry → the AI-shaped content this view renders. */
function dbEntryToContent(
  entry: LibraryGrammarEntry,
  locale: string
): GrammarLessonContent {
  return {
    title: pickTri(entry.data.title, locale),
    level: entry.level,
    intro: pickTri(entry.data.intro, locale),
    sections: (entry.data.sections ?? []).map((s) => ({
      heading: pickTri(s.heading, locale),
      explanation: pickTri(s.body, locale),
      examples: (s.examples ?? []).map((ex) => ({
        wrong: ex.wrong,
        right: ex.right,
        note: pickTri(ex.note, locale),
      })),
    })),
    tips: (entry.data.tips ?? []).map((tip) => pickTri(tip, locale)),
  };
}

/** Compact pre-localized context for the "ask a question" teacher (≤3500 chars). */
function lessonContextOf(d: GrammarLessonContent): string {
  const parts: string[] = [`Intro: ${d.intro}`];
  for (const s of d.sections ?? []) {
    parts.push(
      `## ${s.heading}\n${s.explanation}\nExamples: ${(s.examples ?? [])
        .map((e) => e.right)
        .join(" | ")}`
    );
  }
  parts.push(`Tips: ${(d.tips ?? []).join("; ")}`);
  return parts.join("\n").slice(0, 3500);
}

/** One AI example as a premium "wrong → right" card. */
function ExampleCard({ wrong, right, note }: { wrong: string; right: string; note?: string }) {
  const t = useTranslations("grammar");
  return (
    <div className="rounded-xl border border-border/70 bg-muted/30 p-3.5">
      <div className="grid grid-cols-[1.25rem_1fr] items-start gap-x-2.5">
        <CircleX className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden />
        <p className="min-w-0 break-words text-sm leading-relaxed text-muted-foreground line-through decoration-destructive/50">
          <span className="sr-only">{t("lesson.wrongLabel")} </span>
          {wrong}
        </p>
        <ArrowRight className="my-1 h-4 w-4 shrink-0 text-emerald-500/80" aria-hidden />
        <span aria-hidden />
        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
        <p className="min-w-0 break-words text-[15px] font-medium leading-relaxed text-emerald-800 dark:text-emerald-300">
          <span className="sr-only">{t("lesson.rightLabel")} </span>
          {right}
        </p>
      </div>
      {note && (
        <p className="mt-2.5 flex items-start gap-1.5 border-t border-border/60 pt-2.5 text-[13px] leading-relaxed text-muted-foreground">
          <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" aria-hidden />
          <span className="min-w-0 flex-1">{note}</span>
        </p>
      )}
    </div>
  );
}

function LessonSkeleton() {
  return (
    <Card aria-hidden>
      <CardContent className="space-y-4 p-5 sm:p-6">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-7 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        {[1, 2].map((i) => (
          <div key={i} className="space-y-2.5 rounded-2xl border border-border/70 p-4">
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-16 w-full rounded-xl" />
            <Skeleton className="h-16 w-full rounded-xl" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default function LessonView({
  topic,
  level,
  onBack,
  onStartQuiz,
  topicName,
  onNextLesson,
}: LessonViewProps) {
  const t = useTranslations("grammar");
  const tc = useTranslations("common");
  const locale = useLocale();
  const fmt = useCallback((n: number) => fmtNum(n, locale), [locale]);

  const { deviceId } = useDevice();
  const [data, setData] = useState<GrammarLessonContent | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const reqIdRef = useRef(0);

  // Owner topics have no i18n topic key — GrammarSection passes the DB title
  // as `topicName`. `t()` on a missing key throws in dev, so the prop wins.
  const name = topicName ?? t(`topics.${topic.key}.name`);

  const load = useCallback(async () => {
    const reqId = ++reqIdRef.current;
    setLoading(true);
    setError(null);
    // 1) Owner-authored library lesson first — stored in the site's own DB,
    //    zero API keys, editable by the owner from the Content Studio.
    //    Any DB problem stays SILENT: we just fall through to the bank/AI.
    try {
      const res = await apiGet<{ items: LibraryGrammarEntry[] }>(
        `/api/library?kind=grammar&topic=${encodeURIComponent(topic.topic)}&level=${level}`
      );
      if (reqId !== reqIdRef.current) return; // stale (topic switched)
      const entry = res.items?.[0];
      if (entry) {
        setData(dbEntryToContent(entry, locale));
        setLoading(false);
        return;
      }
    } catch {
      // DB miss/offline → static bank or AI below (never an error state)
    }
    // 2) Static bank — stored in this site's own source, zero API keys,
    //    zero network. Covers foundation×beginner and advanced×advanced in
    //    bn/en/hi (see bank/index.ts).
    const banked = getBankLesson(topic.topic, level, locale);
    if (banked) {
      setData(bankLessonToContent(banked));
      setLoading(false);
      return;
    }
    // 3) Bank miss → AI generation (needs the user's Gemini key; the result
    //    is cached in the site's own DB so it loads from storage afterwards).
    if (!deviceId) {
      if (reqId === reqIdRef.current) setLoading(false);
      return;
    }
    try {
      const d = await callAi<GrammarLessonContent>(deviceId, "grammar-lesson", {
        topic: topic.topic,
        level,
      });
      if (reqId !== reqIdRef.current) return;
      setData(d);
    } catch (e) {
      if (reqId !== reqIdRef.current) return;
      setError(errMessage(e, t("errors.unknown")));
    } finally {
      if (reqId === reqIdRef.current) setLoading(false);
    }
  }, [deviceId, topic.topic, level, locale, t]);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <div className="mx-auto max-w-4xl space-y-4 pb-4">
      {/* Header */}
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

      {loading && <LessonSkeleton />}

      {!loading && error && (
        <Alert variant="destructive">
          <TriangleAlert className="h-4 w-4" />
          <AlertTitle>{t("lesson.errorTitle")}</AlertTitle>
          <AlertDescription>
            <p>{error}</p>
            <Button
              size="sm"
              variant="outline"
              onClick={() => void load()}
              className="mt-2 min-h-11 gap-1.5 bg-transparent"
            >
              <RefreshCw className="h-4 w-4" /> {tc("retry")}
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {!loading && !error && data && (
        <>
          {/* Hero */}
          <section
            aria-label={name}
            className="premium-card animate-fade-in-up rounded-2xl border-border/70 bg-gradient-to-br from-emerald-500/10 via-card to-amber-500/10 p-5 sm:p-6"
          >
            <div className="flex flex-wrap items-center gap-1.5">
              <Badge className="border-transparent bg-gradient-to-br from-emerald-500 to-teal-500 text-[11px] text-white">
                {tc(`level.${level}`)}
              </Badge>
              <Badge variant="outline" className="text-[11px]">
                {name}
              </Badge>
            </div>
            <h1 className="mt-2.5 text-xl font-bold tracking-tight sm:text-2xl">
              {data.title || name}
            </h1>
            {data.intro && (
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {data.intro}
              </p>
            )}
            {locale !== "bn" && (
              <p className="mt-2.5 flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
                <Languages className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                <span>{t("lesson.langNote")}</span>
              </p>
            )}
          </section>

          {/* Sections */}
          <div className="space-y-4">
            {(data.sections ?? []).map((s, i) => (
              <Card
                key={`${s.heading}-${i}`}
                className={cn(
                  "premium-card rounded-2xl border-border/70 bg-card shadow-sm",
                  i === 0 && "animate-fade-in-up-1",
                  i === 1 && "animate-fade-in-up-2",
                  i >= 2 && "animate-fade-in-up-3"
                )}
              >
                <CardContent className="space-y-3 p-4 sm:p-6">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-xs font-bold text-white shadow-sm"
                      aria-hidden
                    >
                      {fmt(i + 1)}
                    </span>
                    <h2 className="font-semibold leading-snug">{s.heading}</h2>
                  </div>
                  {s.explanation && (
                    <div className="rounded-r-xl border-l-2 border-emerald-500/50 bg-emerald-500/[0.04] py-2.5 pl-3.5 pr-3">
                      <p className="min-w-0 break-words text-[15px] leading-7 text-foreground/90">
                        {s.explanation}
                      </p>
                    </div>
                  )}
                  {(s.examples ?? []).length > 0 && (
                    <div className="max-h-96 space-y-3 overflow-y-auto nice-scroll pr-1">
                      {(s.examples ?? []).map((ex, j) => (
                        <ExampleCard
                          key={j}
                          wrong={ex.wrong}
                          right={ex.right}
                          note={ex.note}
                        />
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tips */}
          {(data.tips ?? []).length > 0 && (
            <Card className="animate-fade-in-up border-amber-200 bg-amber-50/70 shadow-none dark:border-amber-900/60 dark:bg-amber-950/20">
              <CardContent className="p-4 sm:p-5">
                <h2 className="flex items-center gap-2 font-semibold">
                  <Lightbulb className="h-4.5 w-4.5 text-amber-500" aria-hidden />
                  {t("lesson.tipsTitle")}
                </h2>
                <div className="mt-3 max-h-96 overflow-y-auto nice-scroll pr-1">
                  <ul className="space-y-2.5">
                    {(data.tips ?? []).map((tip, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/60">
                          <Check
                            className="h-3 w-3 text-amber-700 dark:text-amber-300"
                            strokeWidth={3}
                          />
                        </span>
                        <span className="min-w-0 flex-1">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Ask the teacher — reading is free; asking uses the learner's key */}
          <LibraryAskBox
            compact
            className="mt-2"
            title={data.title || name}
            context={lessonContextOf(data)}
          />

          {/* Sticky quiz CTA (above the mobile bottom nav) */}
          <div className="sticky bottom-20 z-20 mt-6 md:bottom-4">
            <div className="premium-card flex items-center gap-3 rounded-2xl bg-card/95 p-3 shadow-lg backdrop-blur">
              <div className="hidden min-w-0 flex-1 sm:block">
                <p className="truncate text-sm font-semibold">{name}</p>
                <p className="text-xs text-muted-foreground">{tc(`level.${level}`)}</p>
              </div>
              {/* Mark-as-read: keyless completion for the Learning Path —
                  reading the lesson fully counts even without a quiz. */}
              {onNextLesson && (
                <Button
                  variant="outline"
                  onClick={onNextLesson}
                  className="min-h-11 gap-1.5 rounded-xl border-teal-500/40 px-3 text-teal-700 hover:bg-teal-500/10 dark:text-teal-300"
                  aria-label={t("lesson.nextLessonAria")}
                >
                  <ArrowRight className="h-4 w-4" aria-hidden />
                  <span className="hidden sm:inline">{t("lesson.nextLesson")}</span>
                </Button>
              )}
              <Button
                variant="outline"
                onClick={() => saveDoneTopic(topic.topic)}
                className="min-h-11 gap-1.5 rounded-xl border-emerald-500/40 px-3 text-emerald-700 hover:bg-emerald-500/10 dark:text-emerald-300"
                aria-label={t("lesson.markReadAria")}
              >
                <CircleCheckBig className="h-4 w-4" aria-hidden />
                <span className="hidden sm:inline">{t("lesson.markRead")}</span>
              </Button>
              <Button
                onClick={onStartQuiz}
                className="btn-shine min-h-11 flex-1 gap-2 rounded-xl text-base sm:flex-none sm:px-8"
                aria-label={t("lesson.startQuizAria")}
              >
                <ListChecks className="h-5 w-5" /> {t("lesson.startQuiz")}
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
