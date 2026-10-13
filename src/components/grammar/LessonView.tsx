"use client";

// Lesson view — renders AI-generated grammar lesson (Bangla explanation +
// English examples) for one topic/level, with a sticky CTA into the quiz.

import { useCallback, useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleX,
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
import { callAi } from "@/lib/client-api";
import { cn } from "@/lib/utils";
import type { GrammarLessonContent } from "@/lib/types";
import { errMessage, fmtNum, type GrammarTopic, type Level } from "@/components/grammar/shared";

interface LessonViewProps {
  topic: GrammarTopic;
  level: Level;
  onBack: () => void;
  onStartQuiz: () => void;
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
        <p className="min-w-0 break-words text-sm font-medium leading-relaxed text-emerald-800 dark:text-emerald-300">
          <span className="sr-only">{t("lesson.rightLabel")} </span>
          {right}
        </p>
      </div>
      {note && (
        <p className="mt-2.5 flex items-start gap-1.5 border-t border-border/60 pt-2.5 text-xs leading-relaxed text-muted-foreground">
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
}: LessonViewProps) {
  const t = useTranslations("grammar");
  const tc = useTranslations("common");
  const locale = useLocale();
  const fmt = useCallback((n: number) => fmtNum(n, locale), [locale]);

  const { deviceId } = useDevice();
  const [data, setData] = useState<GrammarLessonContent | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const topicName = t(`topics.${topic.key}.name`);

  const load = useCallback(async () => {
    if (!deviceId) return;
    setLoading(true);
    setError(null);
    try {
      const d = await callAi<GrammarLessonContent>(deviceId, "grammar-lesson", {
        topic: topic.topic,
        level,
      });
      setData(d);
    } catch (e) {
      setError(errMessage(e, t("errors.unknown")));
    } finally {
      setLoading(false);
    }
  }, [deviceId, topic.topic, level, t]);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <div className="space-y-4 pb-4">
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
            aria-label={topicName}
            className="premium-card animate-fade-in-up rounded-2xl border-border/70 bg-gradient-to-br from-emerald-500/10 via-card to-amber-500/10 p-5 sm:p-6"
          >
            <div className="flex flex-wrap items-center gap-1.5">
              <Badge className="border-transparent bg-gradient-to-br from-emerald-500 to-teal-500 text-[11px] text-white">
                {tc(`level.${level}`)}
              </Badge>
              <Badge variant="outline" className="text-[11px]">
                {topicName}
              </Badge>
            </div>
            <h1 className="mt-2.5 text-xl font-bold tracking-tight sm:text-2xl">
              {data.title || topicName}
            </h1>
            {data.intro && (
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {data.intro}
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
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {s.explanation}
                    </p>
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

          {/* Sticky quiz CTA (above the mobile bottom nav) */}
          <div className="sticky bottom-20 z-20 mt-6 md:bottom-4">
            <div className="premium-card flex items-center gap-3 rounded-2xl bg-card/95 p-3 shadow-lg backdrop-blur">
              <div className="hidden min-w-0 flex-1 sm:block">
                <p className="truncate text-sm font-semibold">{topicName}</p>
                <p className="text-xs text-muted-foreground">{tc(`level.${level}`)}</p>
              </div>
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
