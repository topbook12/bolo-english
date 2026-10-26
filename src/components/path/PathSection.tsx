"use client";

// LEARNING PATH — "শেখার পথ" (the psychology-based curriculum view).
//
// One level = 5 sequential units. One unit = a small, complete chunk:
//   1. LEARN  12 thematically-clustered words (mark ≥10 learned = done)
//   2. BUILD  one grammar lesson (bank or owner-authored DB lesson)
//   3. LISTEN one graded story episode + its quiz (active recall)
//   + READ    one library passage per unit (light, additive — shown for
//             exposure but does NOT gate unit completion) + a bonus passage
//             (unit 0) after the last unit
//
// Everything is 100% free — no Gemini key anywhere on the path. The
// "Continue" button always points at the exact next incomplete step, so the
// student never has to decide what to study (reduces cognitive load — the
// hardest part of self-study is starting).

import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  BookOpenText,
  BookOpen,
  BrainCircuit,
  CalendarRange,
  Check,
  CircleCheck,
  GraduationCap,
  Headphones,
  LibraryBig,
  Play,
  Route,
  RotateCcw,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import SectionHeader from "@/components/shared/SectionHeader";
import PointList from "@/components/shared/PointList";
import { useDeviceValue, useDevice } from "@/hooks/use-device";
import { apiGet } from "@/lib/client-api";
import { track } from "@/lib/track";
import {
  buildWeekPlan,
  goalFromStored,
  unitToWeek,
  PATH_GOALS,
  type GoalId,
} from "@/lib/path-plan";
import { cn } from "@/lib/utils";
import { fmtNum } from "@/components/grammar/shared";
import {
  getDoneIdsServerSnapshot,
  getDoneIdsSnapshot,
  subscribeDoneIds,
} from "@/components/listening/library";
import {
  getLearnedWordsServerSnapshot,
  getLearnedWordsSnapshot,
  subscribeLearnedWords,
} from "@/components/vocab/learned-store";
import {
  countDue,
  countMastered,
  getReviewMapServerSnapshot,
  getReviewMapSnapshot,
  subscribeReviewMap,
} from "@/components/vocab/review-store";
import ReviewDialog from "@/components/vocab/ReviewDialog";
import {
  getDoneTopicsServerSnapshot,
  getDoneTopicsSnapshot,
  subscribeDoneTopics,
} from "@/components/grammar/shared";
import {
  getDoneIdsServerSnapshot as getReadIdsServerSnapshot,
  getDoneIdsSnapshot as getReadIdsSnapshot,
  subscribeDoneIds as subscribeReadIds,
} from "@/components/reading/reading-store";
import { setNavIntent } from "@/lib/nav-intent";
import {
  PATH_UNITS,
  READ_BONUS_UNIT,
  VOCAB_UNIT_MASTERY,
  type PathUnitDef,
} from "@/lib/learning-path";
import { pickTri } from "@/lib/library-types";
import type { LibraryLevel } from "@/lib/library-types";
import type { LibraryVocabData, LibraryListeningData, LibraryReadingData } from "@/lib/library-types";
import type { TabId } from "@/components/layout/AppShell";

interface VocabItem {
  id: string;
  word: string;
  level: string;
  category: string;
  unit: number;
  data: LibraryVocabData;
}

interface GrammarMetaItem {
  id: string;
  topic: string;
  level: string;
  title: string;
  unit: number;
}

interface ListeningItem {
  id: string;
  slug: string;
  level: string;
  category: string;
  minutes: number;
  unit: number;
  data: LibraryListeningData;
}

interface ReadingItem {
  id: string;
  slug: string;
  level: string;
  category: string;
  minutes: number;
  unit: number;
  data: LibraryReadingData;
}

interface UnitState {
  def: PathUnitDef;
  words: VocabItem[];
  learnedCount: number;
  wordsDone: boolean;
  grammarTitle: string;
  grammarDone: boolean;
  story?: ListeningItem;
  storyTitle: string;
  storyDone: boolean;
  read?: ReadingItem;
  readDone: boolean;
  complete: boolean;
  phasesDone: number;
}

const LEVEL_ORDER: LibraryLevel[] = ["beginner", "intermediate", "advanced"];

/** First unread reading entry of a unit (falls back to the first entry). */
function pickUnread(
  list: ReadingItem[] | undefined,
  doneIds: string[]
): ReadingItem | undefined {
  if (!list || list.length === 0) return undefined;
  return list.find((r) => !doneIds.includes(`db:${r.slug}`)) ?? list[0];
}

export default function PathSection({ onNavigate }: { onNavigate: (t: TabId) => void }) {
  const t = useTranslations("path");
  const tr = useTranslations("review");
  const tc = useTranslations("common");
  const locale = useLocale();
  const fmt = useCallback((n: number) => fmtNum(n, locale), [locale]);

  const storeLevel = useDeviceValue((s) => s.level, "beginner");
  const [levelOverride, setLevelOverride] = useState<LibraryLevel | null>(null);
  const level = levelOverride ?? storeLevel;

  // D9: goal from the device/account config — persisted via /api/config and
  // shared with Settings. The weekly plan derives from level + goal.
  const storeGoal = useDeviceValue((s) => s.goal, "general");
  const goal = goalFromStored(storeGoal);
  const plan = useMemo(() => buildWeekPlan(level, goal), [level, goal]);

  const setGoal = useCallback(
    (g: GoalId) => {
      if (g === goal) return;
      useDevice.getState().setConfig({ goal: g });
      // Fire-and-forget persist — a failed save must never block the UI;
      // the next config refresh re-syncs the store.
      const deviceId = useDevice.getState().deviceId;
      if (deviceId) {
        fetch("/api/config", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ deviceId, goal: g }),
        }).catch(() => null);
      }
      track("path_goal_set", { goal: g });
    },
    [goal]
  );

  const [vocab, setVocab] = useState<VocabItem[] | null>(null);
  const [grammar, setGrammar] = useState<GrammarMetaItem[] | null>(null);
  const [listening, setListening] = useState<ListeningItem[] | null>(null);
  // READ phase: reading library is fetched ONCE (all levels) and grouped by
  // unit client-side, so switching levels never re-downloads it.
  const [reading, setReading] = useState<ReadingItem[] | null>(null);
  const [error, setError] = useState(false);

  // Live progress stores (hydration-safe external stores).
  const learned = useSyncExternalStore(
    subscribeLearnedWords,
    getLearnedWordsSnapshot,
    getLearnedWordsServerSnapshot
  );
  const doneTopics = useSyncExternalStore(
    subscribeDoneTopics,
    getDoneTopicsSnapshot,
    getDoneTopicsServerSnapshot
  );
  const doneIds = useSyncExternalStore(
    subscribeDoneIds,
    getDoneIdsSnapshot,
    getDoneIdsServerSnapshot
  );
  // Reading completion store (separate list from listening — both are "db:slug" ids)
  const readDoneIds = useSyncExternalStore(
    subscribeReadIds,
    getReadIdsSnapshot,
    getReadIdsServerSnapshot
  );
  // Spaced-repetition state — drives the "মনে রাখার রিভিউ" card.
  const reviewMap = useSyncExternalStore(
    subscribeReviewMap,
    getReviewMapSnapshot,
    getReviewMapServerSnapshot
  );
  const [reviewOpen, setReviewOpen] = useState(false);
  const [dueCount, setDueCount] = useState(0);
  const [masteredCount, setMasteredCount] = useState(0);

  // Time-dependent counts are computed after mount (hydration-safe).
  const refreshReviewCounts = useCallback(() => {
    setDueCount(countDue(learned));
    setMasteredCount(countMastered(learned));
  }, [learned]);

  useEffect(() => {
    queueMicrotask(refreshReviewCounts);
  }, [refreshReviewCounts, reviewMap]);

  /* ---- data loading (vocab+listening are level-filtered server-side) ---- */
  const load = useCallback(async () => {
    setError(false);
    setVocab(null);
    setListening(null);
    try {
      const g = apiGet<{ items: GrammarMetaItem[] }>("/api/library?kind=grammar");
      const v = apiGet<{ items: VocabItem[] }>(
        `/api/library?kind=vocab&level=${level}`
      );
      const l = apiGet<{ items: ListeningItem[] }>(
        `/api/library?kind=listening&level=${level}`
      );
      const [gv, vv, lv] = await Promise.all([g, v, l]);
      setGrammar(Array.isArray(gv.items) ? gv.items : []);
      setVocab(Array.isArray(vv.items) ? vv.items : []);
      setListening(Array.isArray(lv.items) ? lv.items : []);
    } catch {
      setError(true);
    }
  }, [level]);

  useEffect(() => {
    // Microtask keeps setState out of the effect body (no cascading renders).
    queueMicrotask(() => void load());
  }, [load]);

  /* ---- READ phase: one fetch, grouped by level+unit client-side ---- */
  useEffect(() => {
    let alive = true;
    apiGet<{ items: ReadingItem[] }>("/api/library?kind=reading")
      .then((res) => {
        if (!alive) return;
        setReading(Array.isArray(res.items) ? res.items : []);
      })
      .catch(() => {
        if (alive) setReading([]); // READ is additive — never block the path
      });
    return () => {
      alive = false;
    };
  }, []);

  const readingByUnit = useMemo(() => {
    const m = new Map<number, ReadingItem[]>();
    for (const r of reading ?? []) {
      if (r.level !== level) continue;
      const u = r.unit ?? 0;
      const arr = m.get(u) ?? [];
      arr.push(r);
      m.set(u, arr);
    }
    return m;
  }, [reading, level]);

  /** First unread entry of a unit (falls back to the first entry). */
  const pickRead = useCallback(
    (unit: number): ReadingItem | undefined =>
      pickUnread(readingByUnit.get(unit), readDoneIds),
    [readingByUnit, readDoneIds]
  );

  /* ---- per-unit state computation ---- */
  const units = useMemo<UnitState[]>(() => {
    const defs = PATH_UNITS[level];
    const byUnitWord = new Map<number, VocabItem[]>();
    for (const w of vocab ?? []) {
      if (typeof w.unit !== "number") continue;
      const arr = byUnitWord.get(w.unit) ?? [];
      arr.push(w);
      byUnitWord.set(w.unit, arr);
    }
    const grammarByTopic = new Map<string, GrammarMetaItem>();
    for (const m of grammar ?? []) grammarByTopic.set(`${m.topic}::${m.level}`, m);
    const storyBySlug = new Map<string, ListeningItem>();
    for (const s of listening ?? []) storyBySlug.set(s.slug, s);

    return defs.map((def) => {
      const words = byUnitWord.get(def.unit) ?? [];
      const learnedCount = words.filter((w) => learned.includes(w.word)).length;
      const wordsDone = words.length > 0 && learnedCount >= Math.min(VOCAB_UNIT_MASTERY, words.length);

      let grammarTitle = "";
      let grammarDone = false;
      if (def.grammar) {
        if (def.grammar.source === "db") {
          const meta = grammarByTopic.get(`${def.grammar.topic}::${level}`);
          grammarTitle = meta?.title ?? def.grammar.topic;
        } else {
          grammarTitle = def.grammar.topic;
        }
        grammarDone = doneTopics.includes(def.grammar.topic);
      }

      const story = def.listeningSlug ? storyBySlug.get(def.listeningSlug) : undefined;
      const storyTitle = story ? pickTri(story.data.title, locale) : "";
      const storyDone = def.listeningSlug
        ? doneIds.includes(`db:${def.listeningSlug}`) || doneIds.includes(def.listeningSlug)
        : false;

      // READ phase (light): one passage per unit — does NOT gate completion.
      const read = pickUnread(readingByUnit.get(def.unit), readDoneIds);
      const readDone = read
        ? readDoneIds.includes(`db:${read.slug}`)
        : false;

      const phasesDone =
        (wordsDone ? 1 : 0) + (grammarDone ? 1 : 0) + (storyDone ? 1 : 0);
      return {
        def,
        words,
        learnedCount,
        wordsDone,
        grammarTitle,
        grammarDone,
        story,
        storyTitle,
        storyDone,
        read,
        readDone,
        complete: phasesDone === 3,
        phasesDone,
      };
    });
  }, [level, vocab, grammar, listening, learned, doneTopics, doneIds, locale, readingByUnit, readDoneIds]);

  /* ---- continue target: first incomplete phase of the first incomplete unit ---- */
  const continueTarget = (() => {
    for (const u of units) {
      if (u.complete) continue;
      if (!u.wordsDone) return { kind: "words" as const, unit: u };
      if (!u.grammarDone) return { kind: "grammar" as const, unit: u };
      if (!u.storyDone) return { kind: "listening" as const, unit: u };
    }
    return null;
  })();

  const totalPhases = units.length * 3;
  const donePhases = units.reduce((acc, u) => acc + u.phasesDone, 0);
  const allDone = totalPhases > 0 && donePhases === totalPhases;

  // D9: the plan highlights the first week whose units aren't finished yet.
  const currentWeek = useMemo(() => {
    const completeByUnit = new Map<number, boolean>();
    for (const u of units) completeByUnit.set(u.def.unit, u.complete);
    for (const w of plan) {
      if (!w.units.every((un) => completeByUnit.get(un) === true)) return w.week;
    }
    return plan[plan.length - 1]?.week ?? 1;
  }, [plan, units]);

  /* ---- navigation actions (deep-link into the exact step) ---- */
  const goWords = useCallback(
    (unit: number) => {
      setNavIntent({ tab: "vocab", level, unit });
      onNavigate("vocab");
    },
    [level, onNavigate]
  );

  const goGrammar = useCallback(
    (u: UnitState) => {
      if (!u.def.grammar) return;
      setNavIntent({
        tab: "grammar",
        level,
        topic: u.def.grammar.topic,
        topicName:
          u.def.grammar.source === "db" && u.grammarTitle ? u.grammarTitle : undefined,
      });
      onNavigate("grammar");
    },
    [level, onNavigate]
  );

  const goStory = useCallback(
    (u: UnitState) => {
      if (!u.def.listeningSlug) return;
      setNavIntent({ tab: "listening", slug: u.def.listeningSlug });
      onNavigate("listening");
    },
    [onNavigate]
  );

  /** READ phase → the reading library pre-filtered to this unit (0 = bonus). */
  const goReading = useCallback(
    (unit: number) => {
      setNavIntent({ tab: "reading", unit });
      onNavigate("reading");
    },
    [onNavigate]
  );

  const doContinue = useCallback(() => {
    if (!continueTarget) return;
    const u = continueTarget.unit;
    if (continueTarget.kind === "words") goWords(u.def.unit);
    else if (continueTarget.kind === "grammar") goGrammar(u);
    else goStory(u);
  }, [continueTarget, goWords, goGrammar, goStory]);

  /* ---- loading skeleton ---- */
  if (!vocab || !grammar || !listening || !reading) {
    return (
      <div className="space-y-5" aria-busy="true" aria-label={t("loading")}>
        <SectionHeader icon={Route} title={t("title")} subtitle={t("subtitle")} tint="teal" />
        <Skeleton className="h-14 w-full rounded-2xl" />
        <Skeleton className="h-10 w-full rounded-2xl" />
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-40 w-full rounded-2xl" />
        ))}
      </div>
    );
  }

  /* ---- error ---- */
  if (error) {
    return (
      <div className="space-y-5">
        <SectionHeader icon={Route} title={t("title")} subtitle={t("subtitle")} tint="teal" />
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center gap-3 p-8 text-center">
            <p className="text-sm text-muted-foreground">{tc("error")}</p>
            <Button size="sm" variant="outline" onClick={() => void load()}>
              <RotateCcw className="mr-1.5 h-4 w-4" /> {tc("retry")}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const serialLabel = (serial: string) => {
    try {
      return t(`serial.${serial}`);
    } catch {
      return serial;
    }
  };

  return (
    <div className="space-y-5">
      <SectionHeader icon={Route} title={t("title")} subtitle={t("subtitle")} tint="teal" />

      {/* Level selector */}
      <div
        role="radiogroup"
        aria-label={t("levelAria")}
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
                ? "bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-md ring-1 ring-inset ring-white/25"
                : "text-muted-foreground hover:bg-background/60 hover:text-foreground"
            )}
          >
            {tc(`level.${lv}`)}
          </button>
        ))}
      </div>

      {/* D9: goal selector — personalizes the weekly plan below. Persisted
          instantly (fire-and-forget) so the plan survives reloads. */}
      <div className="animate-fade-in-up space-y-1.5">
        <p className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
          <Target className="h-3.5 w-3.5" aria-hidden />
          {t("plan.goalLabel")}
        </p>
        <div
          role="radiogroup"
          aria-label={t("plan.goalLabel")}
          className="flex flex-wrap gap-1.5"
        >
          {PATH_GOALS.map((g) => (
            <button
              key={g}
              type="button"
              role="radio"
              aria-checked={goal === g}
              onClick={() => setGoal(g)}
              className={cn(
                "min-h-9 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-200",
                goal === g
                  ? "border-transparent bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-sm ring-1 ring-inset ring-white/25"
                  : "border-border/70 bg-muted/60 text-muted-foreground hover:bg-background hover:text-foreground"
              )}
            >
              {t(`plan.goals.${g}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Hero — overall progress + the single Continue button */}
      <Card className="animate-fade-in-up overflow-hidden border-teal-200/60 bg-gradient-to-br from-teal-50 via-background to-emerald-50 dark:border-teal-900/50 dark:from-teal-950/40 dark:via-background dark:to-emerald-950/30">
        <CardContent className="p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-teal-800 dark:text-teal-200">
                {t("hero.progress", { done: fmt(donePhases), total: fmt(totalPhases) })}
              </p>
              <div
                className="mt-2 h-2.5 w-full max-w-sm overflow-hidden rounded-full bg-teal-500/15"
                role="progressbar"
                aria-valuenow={donePhases}
                aria-valuemin={0}
                aria-valuemax={totalPhases}
                aria-label={t("hero.progress", { done: fmt(donePhases), total: fmt(totalPhases) })}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-500"
                  style={{ width: `${totalPhases ? (donePhases / totalPhases) * 100 : 0}%` }}
                />
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {serialLabel(units[0]?.def.serial ?? "")}
              </p>
            </div>
            {allDone ? (
              <div className="flex items-center gap-3 rounded-2xl border border-amber-300/70 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/40">
                <Trophy className="h-8 w-8 shrink-0 text-amber-500" aria-hidden />
                <div className="min-w-0">
                  <p className="text-sm font-bold text-amber-900 dark:text-amber-200">
                    {t("hero.allDone")}
                  </p>
                  <p className="text-xs text-amber-800/80 dark:text-amber-300/80">
                    {t("hero.allDoneBody")}
                  </p>
                </div>
              </div>
            ) : (
              <Button
                size="lg"
                className="btn-shine min-h-11 shrink-0 gap-2 bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-md shadow-teal-500/25 hover:from-teal-600 hover:to-emerald-700"
                onClick={doContinue}
              >
                <Play className="h-4 w-4" aria-hidden />
                {t("hero.continue")}
              </Button>
            )}
            <Image
              src="/illustrations/ill-path.webp"
              alt=""
              width={110}
              height={110}
              aria-hidden
              className="animate-float hidden h-16 w-auto shrink-0 object-contain drop-shadow-sm lg:block"
            />
          </div>
        </CardContent>
      </Card>

      {/* D9: the 4-week personalized plan — level units laid onto weeks with
          a goal-specific extra push each week. Current week is highlighted. */}
      <Card className="animate-fade-in-up border-teal-200/60 bg-card dark:border-teal-900/50">
        <CardContent className="space-y-3 p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-sm">
              <CalendarRange className="h-4 w-4" aria-hidden />
            </span>
            <p className="text-sm font-bold">{t("plan.title")}</p>
            <Badge variant="secondary" className="ml-auto gap-1 text-[11px]">
              {t("plan.weekNow", { n: fmt(currentWeek) })}
            </Badge>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {t("plan.subtitle", { goal: t(`plan.goals.${goal}`) })}
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {plan.map((w) => (
              <div
                key={w.week}
                className={cn(
                  "rounded-xl border p-3 transition-colors",
                  w.week === currentWeek
                    ? "border-teal-300 bg-teal-50/70 dark:border-teal-800 dark:bg-teal-950/30"
                    : "border-border/60"
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold tracking-tight">
                    {t("plan.week", { n: fmt(w.week) })}
                  </span>
                  {w.week === currentWeek && (
                    <span className="rounded-full bg-teal-500/10 px-2 py-0.5 text-[10px] font-semibold text-teal-700 dark:text-teal-300">
                      {t("plan.now")}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {t(`plan.themes.${goal}.w${w.week}`)}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  <Badge variant="secondary" className="text-[10px]">
                    {t("plan.unitsLabel", { units: w.units.map((un) => fmt(un)).join(", ") })}
                  </Badge>
                  <Badge variant="secondary" className="text-[10px]">
                    {t(`plan.extra.${w.extra}`)}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Spaced-repetition review — the 4th phase: memory. Rendered once the
          learner has learned their first word, so it always feels relevant. */}
      {learned.length > 0 && (
        <Card className="animate-fade-in-up border-amber-200/70! bg-gradient-to-br from-amber-50 via-background to-orange-50 shadow-sm dark:border-amber-900/50! dark:from-amber-950/30 dark:via-background dark:to-orange-950/20">
          <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-sm">
                <BrainCircuit className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-bold">{tr("title")}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  {tr("subtitle")}
                </p>
                <p className="mt-1.5 text-xs font-semibold text-amber-700 dark:text-amber-300">
                  {dueCount > 0
                    ? tr("dueToday", { n: fmt(dueCount) })
                    : tr("noneDue")}
                  {masteredCount > 0 && ` · ${tr("mastered", { n: fmt(masteredCount) })}`}
                </p>
              </div>
            </div>
            <Button
              size="lg"
              disabled={dueCount === 0}
              className="btn-shine min-h-11 shrink-0 gap-2 bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md hover:from-amber-600 hover:to-orange-700"
              onClick={() => setReviewOpen(true)}
              aria-label={tr("startAria")}
            >
              <Sparkles className="h-4 w-4" aria-hidden />
              {tr("start")}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Unit cards */}
      <section aria-label={t("unitsAria")} className="space-y-4">
        {units.map((u, i) => {
          const isNext = continueTarget?.unit.def.unit === u.def.unit;
          return (
            <Card
              key={u.def.unit}
              className={cn(
                "animate-fade-in-up premium-card overflow-hidden",
                isNext && "ring-2 ring-teal-500/60",
                i > 0 && `animate-fade-in-up-${Math.min(i, 3)}`
              )}
            >
              <CardContent className="p-4 sm:p-5">
                {/* Unit header */}
                <div className="flex items-start gap-3">
                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-base font-bold shadow-sm ring-1 ring-inset ring-white/25",
                      u.complete
                        ? "bg-emerald-500 text-white"
                        : "bg-gradient-to-br from-teal-500 to-emerald-600 text-white"
                    )}
                    aria-current={isNext ? "step" : undefined}
                  >
                    {u.complete ? <Check className="h-5 w-5" strokeWidth={3} /> : fmt(u.def.unit)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-bold tracking-tight sm:text-base">
                        {t(`units.${u.def.key}.theme`)}
                      </h3>
                      {u.complete && (
                        <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                          <CircleCheck className="h-3 w-3" aria-hidden /> {t("unitDone")}
                        </span>
                      )}
                      {isNext && (
                        <span className="rounded-full bg-teal-500/10 px-2 py-0.5 text-[11px] font-semibold text-teal-700 dark:text-teal-300">
                          {t("upNext")}
                        </span>
                      )}
                      {/* D9: which week of the plan this unit belongs to. */}
                      <Badge variant="outline" className="text-[10px] font-semibold text-muted-foreground">
                        {t("plan.weekShort", { n: fmt(unitToWeek(u.def.unit)) })}
                      </Badge>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {t(`units.${u.def.key}.goal`)}
                    </p>
                  </div>
                </div>

                {/* Phase rows */}
                <div className="mt-3.5 space-y-2">
                  {/* Words */}
                  <PhaseRow
                    icon={LibraryBig}
                    done={u.wordsDone}
                    label={t("phase.words")}
                    detail={
                      u.words.length > 0
                        ? t("phase.wordsDetail", {
                            learned: fmt(u.learnedCount),
                            total: fmt(u.words.length),
                          })
                        : "—"
                    }
                    cta={
                      u.wordsDone
                        ? t("phase.review")
                        : u.learnedCount > 0
                          ? t("phase.continue")
                          : t("phase.start")
                    }
                    onClick={() => goWords(u.def.unit)}
                    progress={
                      u.words.length > 0
                        ? Math.min(1, u.learnedCount / Math.max(1, u.words.length))
                        : 0
                    }
                    chip="from-emerald-500 to-teal-600"
                    bar="from-emerald-500 to-teal-500"
                  />
                  {/* Grammar */}
                  <PhaseRow
                    icon={BookOpenText}
                    done={u.grammarDone}
                    label={t("phase.grammar")}
                    detail={u.grammarTitle || "—"}
                    cta={u.grammarDone ? t("phase.review") : t("phase.start")}
                    onClick={() => goGrammar(u)}
                    chip="from-orange-500 to-amber-600"
                  />
                  {/* Listening */}
                  <PhaseRow
                    icon={Headphones}
                    done={u.storyDone}
                    label={
                      u.story && u.story.unit > 0
                        ? `${t("phase.episode", { n: fmt(u.def.unit) })} · ${t("phase.listening")}`
                        : t("phase.listening")
                    }
                    detail={
                      u.story
                        ? `${u.storyTitle || u.def.listeningSlug} · ${fmt(u.story.minutes)} ${tc("minutesShort")}`
                        : "—"
                    }
                    cta={u.storyDone ? t("phase.review") : t("phase.listen")}
                    onClick={() => goStory(u)}
                    disabled={!u.story}
                    chip="from-teal-500 to-emerald-600"
                  />
                  {/* READ — light reading phase (additive, does not gate unit
                      completion): jumps into the reading library pre-filtered */}
                  <ReadRow
                    done={u.readDone}
                    label={t("phase.read")}
                    levelLabel={tc(`level.${level}`)}
                    title={u.read ? pickTri(u.read.data.title, locale) : ""}
                    minutes={u.read?.minutes ?? 0}
                    minutesLabel={tc("minutesShort")}
                    cta={u.readDone ? t("phase.readDone") : t("phase.readCta")}
                    onClick={() => goReading(u.def.unit)}
                    disabled={!u.read}
                  />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      {/* Bonus reading (unit 0) — an extra passage beyond the 5 units */}
      {(() => {
        const bonus = pickRead(READ_BONUS_UNIT);
        if (!bonus) return null;
        const bonusDone = readDoneIds.includes(`db:${bonus.slug}`);
        return (
          <Card className="animate-fade-in-up overflow-hidden border-amber-200/60! bg-gradient-to-br from-amber-50/70 via-background to-orange-50/60 shadow-sm dark:border-amber-900/40! dark:from-amber-950/20 dark:via-background dark:to-orange-950/20">
            <CardContent className="p-0">
              <button
                type="button"
                onClick={() => goReading(READ_BONUS_UNIT)}
                className="group flex w-full items-center gap-3 p-4 text-left sm:gap-4 sm:p-5"
                aria-label={`${t("readCard.bonus")} — ${pickTri(bonus.data.title, locale)}`}
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-xl shadow-md transition-transform group-hover:scale-105"
                  aria-hidden
                >
                  📖
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-1.5">
                    <span className="text-sm font-bold">{t("readCard.bonus")}</span>
                    <span className="rounded-full bg-emerald-500/10 px-1.5 text-[10px] font-semibold text-emerald-700 dark:text-emerald-300">
                      {tc(`level.${level}`)}
                    </span>
                    {bonusDone && (
                      <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-1.5 text-[10px] font-semibold text-emerald-700 dark:text-emerald-300">
                        <CircleCheck className="h-3 w-3" aria-hidden /> {t("phase.readDone")}
                      </span>
                    )}
                  </span>
                  <span className="mt-0.5 block truncate text-sm font-medium">
                    {pickTri(bonus.data.title, locale)} · ⏱ {fmt(bonus.minutes)} {tc("minutesShort")}
                  </span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                    {t("readCard.bonusDesc")}
                  </span>
                </span>
                <span
                  className={cn(
                    "shrink-0 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors",
                    bonusDone
                      ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                      : "bg-amber-500/10 text-amber-700 group-hover:bg-amber-500 group-hover:text-white dark:text-amber-300"
                  )}
                >
                  {bonusDone ? t("phase.readDone") : t("phase.readCta")}
                </span>
              </button>
            </CardContent>
          </Card>
        );
      })()}

      {/* Why this order — the psychology, explained simply */}
      <Card className="animate-fade-in-up border-dashed border-border/80 bg-muted/40 shadow-none">
        <CardContent className="p-5">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <GraduationCap className="h-4 w-4 text-teal-600" aria-hidden />
            {t("why.title")}
          </p>
          <PointList
            className="mt-2.5"
            items={[t("why.point1"), t("why.point2"), t("why.point3")]}
          />
        </CardContent>
      </Card>

      {/* Spaced-repetition flashcard session */}
      <ReviewDialog
        open={reviewOpen}
        onOpenChange={setReviewOpen}
        learned={learned}
        onReviewed={refreshReviewCounts}
      />
    </div>
  );
}

/** READ phase row — same anatomy as PhaseRow, but with the 📖 emoji,
 *  level badge and amber accent (reading, not listening). */
function ReadRow({
  done,
  label,
  levelLabel,
  title,
  minutes,
  minutesLabel,
  cta,
  onClick,
  disabled,
}: {
  done: boolean;
  label: string;
  levelLabel: string;
  title: string;
  minutes: number;
  minutesLabel: string;
  cta: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "group flex w-full items-center gap-3 rounded-xl border border-border/60 bg-background/70 p-3 text-left transition-all hover:border-amber-500/50 hover:bg-amber-500/5 disabled:cursor-not-allowed disabled:opacity-50",
        done && "border-emerald-500/30 bg-emerald-500/5"
      )}
      aria-label={`${label} — ${title}`}
    >
      <span
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-base shadow-sm ring-1 ring-inset ring-white/25",
          done ? "from-emerald-500 to-teal-500" : "from-amber-500 to-orange-500"
        )}
        aria-hidden
      >
        {done ? <Check className="h-4 w-4" strokeWidth={3} /> : "📖"}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5">
          <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {label}
          </span>
          <span className="rounded-full bg-emerald-500/10 px-1.5 text-[10px] font-semibold text-emerald-700 dark:text-emerald-300">
            {levelLabel}
          </span>
        </span>
        <span className="block truncate text-sm font-medium">
          {title ? `${title} · ⏱ ${minutes} ${minutesLabel}` : "—"}
        </span>
      </span>
      <span
        className={cn(
          "shrink-0 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors",
          done
            ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
            : "bg-amber-500/10 text-amber-700 group-hover:bg-amber-500 group-hover:text-white dark:text-amber-300"
        )}
      >
        {cta}
      </span>
    </button>
  );
}

/** One phase row inside a unit card. `chip` carries the phase's module
 *  accent gradient (words=emerald, grammar=orange, listening=teal) — the
 *  cross-module color-coding is intentional; the row chrome stays path-teal. */
function PhaseRow({
  icon: Icon,
  done,
  label,
  detail,
  cta,
  onClick,
  progress,
  disabled,
  chip = "from-teal-500 to-emerald-600",
  bar = "from-teal-500 to-emerald-500",
}: {
  icon: React.ComponentType<{ className?: string }>;
  done: boolean;
  label: string;
  detail: string;
  cta: string;
  onClick: () => void;
  progress?: number;
  disabled?: boolean;
  chip?: string;
  bar?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "group flex w-full items-center gap-3 rounded-xl border border-border/60 bg-background/70 p-3 text-left transition-all hover:border-teal-500/50 hover:bg-teal-500/5 disabled:cursor-not-allowed disabled:opacity-50",
        done && "border-emerald-500/30 bg-emerald-500/5"
      )}
      aria-label={`${label} — ${detail}`}
    >
      <span
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm ring-1 ring-inset ring-white/25",
          done ? "from-emerald-500 to-teal-500" : chip
        )}
      >
        {done ? <Check className="h-4 w-4" strokeWidth={3} /> : <Icon className="h-4 w-4" />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {label}
        </span>
        <span className="block truncate text-sm font-medium">{detail}</span>
        {typeof progress === "number" && (
          <span className="mt-1.5 block h-1.5 w-full max-w-40 overflow-hidden rounded-full bg-emerald-500/15">
            <span
              className={cn("block h-full rounded-full bg-gradient-to-r", bar)}
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </span>
        )}
      </span>
      <span
        className={cn(
          "shrink-0 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors",
          done
            ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
            : "bg-teal-500/10 text-teal-700 group-hover:bg-teal-500 group-hover:text-white dark:text-teal-300"
        )}
      >
        {cta}
      </span>
    </button>
  );
}
