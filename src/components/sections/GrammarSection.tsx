"use client";

// GRAMMAR SECTION — topic picker → lesson view → quiz player.
// Lessons/quizzes come from the unified /api/ai endpoint (server-cached per
// topic+level); results are logged to /api/practice on quiz finish.

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { BookOpenText, Check, CircleCheck, KeyRound, ListChecks, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import SectionHeader from "@/components/shared/SectionHeader";
import PointList from "@/components/shared/PointList";
import StatCard from "@/components/shared/StatCard";
import { useDevice } from "@/hooks/use-device";
import { apiGet } from "@/lib/client-api";
import { cn } from "@/lib/utils";
import LessonView from "@/components/grammar/LessonView";
import QuizPlayer from "@/components/grammar/QuizPlayer";
import {
  fmtNum,
  LEVEL_ORDER,
  readDoneTopics,
  saveDoneTopic,
  TOPICS,
  type GrammarTopic,
  type Level,
} from "@/components/grammar/shared";

type View =
  | { kind: "topics" }
  | { kind: "lesson"; topic: GrammarTopic; level: Level }
  | { kind: "quiz"; topic: GrammarTopic; level: Level };

interface QuizStat {
  count: number;
  correct: number;
  total: number;
}

interface ProgressResp {
  practiceByKind: Record<string, QuizStat>;
}

export default function GrammarSection() {
  const t = useTranslations("grammar");
  const tc = useTranslations("common");
  const locale = useLocale();
  const fmt = useCallback((n: number) => fmtNum(n, locale), [locale]);

  const hasKey = useDevice((s) => s.hasKey);
  const loaded = useDevice((s) => s.loaded);
  const deviceId = useDevice((s) => s.deviceId);
  const storeLevel = useDevice((s) => s.level);

  // Effective level = Settings level until the user overrides it here.
  const [levelOverride, setLevelOverride] = useState<Level | null>(null);
  const level = levelOverride ?? storeLevel;
  const [view, setView] = useState<View>({ kind: "topics" });

  // Completed topics (localStorage) + quiz totals (/api/progress), refreshed
  // whenever we come back to the topic grid.
  const [doneTopics, setDoneTopics] = useState<string[]>([]);
  const [quizStat, setQuizStat] = useState<QuizStat | null>(null);

  useEffect(() => {
    if (view.kind !== "topics") return;
    let alive = true;
    // Microtask keeps setState out of the effect body (no cascading renders).
    queueMicrotask(() => {
      if (!alive) return;
      setDoneTopics(readDoneTopics());
      if (!deviceId) return;
      apiGet<ProgressResp>(`/api/progress?deviceId=${encodeURIComponent(deviceId)}`)
        .then((d) => {
          if (!alive) return;
          const g = d.practiceByKind?.["grammar-quiz"];
          setQuizStat(g && g.count > 0 ? g : null);
        })
        .catch(() => undefined);
    });
    return () => {
      alive = false;
    };
  }, [view.kind, deviceId]);

  const markDone = useCallback((topicId: string) => {
    setDoneTopics(saveDoneTopic(topicId));
  }, []);

  /* ---- config still loading ---- */
  if (!loaded) {
    return (
      <div className="space-y-5" aria-busy="true" aria-label={tc("loading")}>
        <div className="flex items-center gap-3">
          <Skeleton className="h-11 w-11 rounded-2xl" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-44" />
            <Skeleton className="h-4 w-64 max-w-full" />
          </div>
        </div>
        <Skeleton className="h-14 w-full rounded-2xl" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-32 rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  /* ---- no Gemini key: friendly notice, no AI call ---- */
  if (!hasKey) {
    return (
      <div className="space-y-5">
        <SectionHeader
          icon={BookOpenText}
          title={t("title")}
          subtitle={t("subtitle")}
          tint="emerald"
        />
        <Card className="animate-fade-in-up border-amber-200 bg-amber-50/80 dark:border-amber-900/60 dark:bg-amber-950/30">
          <CardContent className="flex items-start gap-3.5 p-4 sm:p-5 sm:items-center">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-md">
              <KeyRound className="h-5 w-5" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-amber-900 dark:text-amber-200">
                {t("noKey.title")}
              </p>
              <p className="mt-0.5 text-sm leading-relaxed text-amber-800/80 dark:text-amber-300/80">
                {t("noKey.body")}
              </p>
            </div>
          </CardContent>
        </Card>
        <HowItWorksCard />
      </div>
    );
  }

  /* ---- lesson ---- */
  if (view.kind === "lesson") {
    return (
      <LessonView
        topic={view.topic}
        level={view.level}
        onBack={() => setView({ kind: "topics" })}
        onStartQuiz={() => setView({ kind: "quiz", topic: view.topic, level: view.level })}
      />
    );
  }

  /* ---- quiz ---- */
  if (view.kind === "quiz") {
    return (
      <QuizPlayer
        topic={view.topic}
        level={view.level}
        onBack={() => setView({ kind: "topics" })}
        onFinished={() => markDone(view.topic.topic)}
      />
    );
  }

  /* ---- topics ---- */
  const showProgress = quizStat !== null || doneTopics.length > 0;

  return (
    <div className="space-y-5">
      <SectionHeader
        icon={BookOpenText}
        title={t("title")}
        subtitle={t("subtitle")}
        tint="emerald"
      />

      {/* Level selector — segmented control */}
      <div
        role="radiogroup"
        aria-label={t("levelSelect")}
        className="animate-fade-in-up flex gap-1 rounded-2xl border border-border/70 bg-muted/60 p-1"
      >
        {LEVEL_ORDER.map((lv) => (
          <button
            key={lv}
            type="button"
            role="radio"
            aria-checked={level === lv}
            onClick={() => setLevelOverride(lv)}
            className={cn(
              "min-h-11 flex-1 rounded-xl px-2 text-sm font-semibold transition-all duration-200",
              level === lv
                ? "bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-md"
                : "text-muted-foreground hover:bg-background/60 hover:text-foreground"
            )}
          >
            {tc(`level.${lv}`)}
          </button>
        ))}
      </div>

      {/* Progress note — only when there is data */}
      {showProgress && (
        <div className="animate-fade-in-up flex flex-wrap gap-3" aria-label={t("progress.topicsDone")}>
          {quizStat && (
            <>
              <StatCard
                icon={ListChecks}
                value={fmt(quizStat.count)}
                label={t("progress.quizzes")}
                tint="teal"
                className="min-w-[46%] flex-1"
              />
              <StatCard
                icon={Target}
                value={`${fmt(quizStat.correct)}/${fmt(quizStat.total)}`}
                label={t("progress.accuracy")}
                tint="amber"
                className="min-w-[46%] flex-1"
              />
            </>
          )}
          {doneTopics.length > 0 && (
            <StatCard
              icon={CircleCheck}
              value={`${fmt(doneTopics.length)}/${fmt(TOPICS.length)}`}
              label={t("progress.topicsDone")}
              tint="emerald"
              className="min-w-[46%] flex-1"
            />
          )}
        </div>
      )}

      {/* Topic grid */}
      <section
        aria-label={t("topicsLabel")}
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
      >
        {TOPICS.map((topic) => {
          const name = t(`topics.${topic.key}.name`);
          const done = doneTopics.includes(topic.topic);
          return (
            <button
              key={topic.topic}
              type="button"
              onClick={() => setView({ kind: "lesson", topic, level })}
              className="group relative text-left"
              aria-label={t("openTopic", { topic: name })}
            >
              <div className="premium-card h-full rounded-2xl bg-card p-4">
                <span
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm",
                    topic.tint
                  )}
                >
                  <topic.icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="mt-2.5 block text-sm font-semibold leading-snug">
                  {name}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                  {t(`topics.${topic.key}.sub`)}
                </span>
              </div>
              {done && (
                <span
                  className="absolute right-2.5 top-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm"
                  aria-hidden
                >
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
              )}
            </button>
          );
        })}
      </section>

      <HowItWorksCard />
    </div>
  );
}

/** Section footer: illustration + what you get in every topic. */
function HowItWorksCard() {
  const t = useTranslations("grammar");
  return (
    <Card className="animate-fade-in-up overflow-hidden border-dashed border-border/80 bg-muted/40 shadow-none">
      <CardContent className="flex flex-col items-center gap-4 p-5 sm:flex-row sm:gap-6">
        <Image
          src="/illustrations/ill-grammar.webp"
          alt=""
          width={120}
          height={120}
          className="h-24 w-auto shrink-0 object-contain"
        />
        <div className="min-w-0">
          <p className="font-semibold">💡 {t("howTo.title")}</p>
          <PointList
            className="mt-2.5"
            items={[
              t("howTo.point1"),
              t("howTo.point2"),
              t("howTo.point3"),
            ]}
          />
        </div>
      </CardContent>
    </Card>
  );
}
