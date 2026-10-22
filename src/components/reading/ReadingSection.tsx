"use client";

// ReadingSection — the free Reading Library (Task 11, owner requirement #5):
// "রিডিং এর জন্য আরেকটা লাইব্রেরী ... বেসিক থেকে শুরু করে ... সুন্দর গ্রাফিক্স ও
// ভিজুয়ালাইজেশন". Level filters, category chips, search, progress, genre-emoji
// cards (level-tinted strip + category emoji + ⏱/📚 chips) and the comfortable
// ReaderView — all 100% keyless. Accepts nav intents from the Learning Path's
// READ phase: { tab: "reading", unit } filters the grid to that unit.

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import {
  BookOpen,
  CheckCircle2,
  Flame,
  LibraryBig,
  Play,
  Search,
  Sprout,
  X,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { apiGet } from "@/lib/client-api";
import { takeNavIntent } from "@/lib/nav-intent";
import { pickTri, type LibraryLevel, type LibraryReadingEntry } from "@/lib/library-types";
import SectionHeader from "@/components/shared/SectionHeader";
import EmptyState from "@/components/shared/EmptyState";
import ReaderView from "@/components/reading/ReaderView";
import {
  getDoneIdsServerSnapshot,
  getDoneIdsSnapshot,
  subscribeDoneIds,
} from "@/components/reading/reading-store";

/* ── client-side normalized passage ── */
export interface ReadingStory {
  id: string;
  slug: string;
  level: LibraryLevel;
  category: string;
  minutes: number;
  unit?: number;
  genre: string;
  emoji: string;
  title: { bn: string; en: string; hi: string };
  summary: { bn: string; en: string; hi: string };
  paragraphs: { en: string; bn: string; hi: string }[];
  vocabulary: { word: string; meaning: { bn: string; en: string; hi: string }; example: string }[];
  quiz: {
    question: { bn: string; en: string; hi: string };
    options: { bn: string; en: string; hi: string }[];
    answer: number;
    explain: { bn: string; en: string; hi: string };
  }[];
}

const GENRE_META: Record<string, { emoji: string; gradient: string }> = {
  story: { emoji: "📖", gradient: "from-rose-500 to-orange-500" },
  dialog: { emoji: "💬", gradient: "from-amber-500 to-orange-600" },
  letter: { emoji: "✉️", gradient: "from-orange-500 to-amber-600" },
  diary: { emoji: "📔", gradient: "from-teal-500 to-emerald-600" },
  article: { emoji: "🔬", gradient: "from-emerald-500 to-teal-600" },
  news: { emoji: "🗞️", gradient: "from-rose-500 to-pink-500" },
};

const CATEGORY_GRADIENTS: Record<string, string> = {
  daily: "from-emerald-500 to-teal-500",
  travel: "from-amber-500 to-orange-500",
  work: "from-teal-500 to-emerald-600",
  culture: "from-rose-500 to-pink-500",
  science: "from-orange-500 to-amber-600",
  inspire: "from-rose-500 to-orange-500",
};

/** Category emoji map — a friendly visual anchor next to every genre badge. */
const CATEGORY_EMOJI: Record<string, string> = {
  daily: "☀️",
  travel: "✈️",
  work: "💼",
  culture: "🎉",
  science: "🔬",
  inspire: "🌟",
};

/** Level-tinted top strip on every card (emerald → amber → rose, no blue). */
const LEVEL_STRIP: Record<LibraryLevel, string> = {
  beginner: "from-emerald-400 to-teal-500",
  intermediate: "from-amber-400 to-orange-500",
  advanced: "from-rose-400 to-pink-500",
};

const LEVELS: LibraryLevel[] = ["beginner", "intermediate", "advanced"];
const LEVEL_ICONS: Record<LibraryLevel, React.ComponentType<{ className?: string }>> = {
  beginner: Sprout,
  intermediate: Zap,
  advanced: Flame,
};

/** DB row → normalized story (defensive: one broken row must not break the grid). */
function dbEntryToStory(e: LibraryReadingEntry): ReadingStory | null {
  try {
    const d = e.data;
    const paragraphs = Array.isArray(d.paragraphs) ? d.paragraphs : [];
    if (paragraphs.length === 0) return null;
    const tri = (x: { bn?: string; en?: string; hi?: string } | undefined) => ({
      bn: x?.bn ?? "",
      en: x?.en ?? "",
      hi: x?.hi ?? "",
    });
    const meta = GENRE_META[d.genre] ?? GENRE_META.story;
    return {
      id: `db:${e.slug}`,
      slug: e.slug,
      level: e.level,
      category: e.category,
      minutes: typeof e.minutes === "number" && e.minutes > 0 ? e.minutes : 3,
      unit: typeof e.unit === "number" && e.unit > 0 ? e.unit : undefined,
      genre: d.genre ?? "story",
      emoji: meta.emoji,
      title: tri(d.title),
      summary: tri(d.summary),
      paragraphs: paragraphs.map((p) => ({
        en: p?.en ?? "",
        bn: p?.bn ?? "",
        hi: p?.hi ?? "",
      })),
      vocabulary: (Array.isArray(d.vocabulary) ? d.vocabulary : []).map((v) => ({
        word: v.word,
        meaning: tri(v.meaning),
        example: v.example,
      })),
      quiz: (Array.isArray(d.quiz) ? d.quiz : []).map((q) => ({
        question: tri(q.question),
        options: (Array.isArray(q.options) ? q.options : []).map(tri),
        answer: Number.isInteger(q.answer) && q.answer >= 0 && q.answer <= 3 ? q.answer : 0,
        explain: tri(q.explain),
      })),
    };
  } catch {
    return null;
  }
}

export default function ReadingSection() {
  const t = useTranslations("reading");
  const tc = useTranslations("common");
  const locale = useLocale();
  const deviceLevel = useDeviceLevelSafe();

  const [level, setLevel] = useState<LibraryLevel | null>(null);
  const [selected, setSelected] = useState<ReadingStory | null>(null);
  const [category, setCategory] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [dbStories, setDbStories] = useState<ReadingStory[] | null>(null);
  // Deep link from the Learning Path's READ phase: filter the grid to a unit
  // (0 = bonus passages). Consumed once via takeNavIntent (effects only).
  const [unitIntent, setUnitIntent] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const doneIds = useSyncExternalStore(
    subscribeDoneIds,
    getDoneIdsSnapshot,
    getDoneIdsServerSnapshot
  );

  // default level follows the learner's saved profile level (once)
  useEffect(() => {
    queueMicrotask(() => setLevel(deviceLevel));
  }, [deviceLevel]);

  // Consume a pending Learning-Path READ intent and bring the grid into view.
  useEffect(() => {
    queueMicrotask(() => {
      const intent = takeNavIntent();
      if (intent && intent.tab === "reading") setUnitIntent(intent.unit);
    });
  }, []);

  // Smooth-scroll to the grid once the unit filter is applied.
  useEffect(() => {
    if (unitIntent === null) return;
    const id = window.setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(id);
  }, [unitIntent]);

  useEffect(() => {
    let alive = true;
    apiGet<{ items: LibraryReadingEntry[] }>("/api/library?kind=reading")
      .then((res) => {
        if (!alive) return;
        setDbStories((res.items ?? []).map(dbEntryToStory).filter((s): s is ReadingStory => s !== null));
      })
      .catch(() => {
        if (alive) setDbStories([]);
      });
    return () => {
      alive = false;
    };
  }, []);

  const all = useMemo(() => dbStories ?? [], [dbStories]);

  const effectiveLevel = level ?? "beginner";
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all
      .filter((s) => {
        if (s.level !== effectiveLevel) return false;
        if (unitIntent !== null && !q && (s.unit ?? 0) !== unitIntent) return false;
        if (category !== "all" && s.category !== category) return false;
        if (!q) return true;
        return (
          pickTri(s.title, locale).toLowerCase().includes(q) ||
          s.title.en.toLowerCase().includes(q) ||
          pickTri(s.summary, locale).toLowerCase().includes(q)
        );
      })
      .sort((a, b) => {
        const au = a.unit ?? 0;
        const bu = b.unit ?? 0;
        if (au > 0 && bu > 0) return au - bu;
        if (au > 0) return -1;
        if (bu > 0) return 1;
        return 0;
      });
  }, [all, effectiveLevel, category, query, locale, unitIntent]);

  const doneCount = useMemo(
    () => all.filter((s) => doneIds.includes(s.id)).length,
    [all, doneIds]
  );

  // next passage: next item in the current filtered list after the open one
  const nextStory = useMemo(() => {
    if (!selected) return null;
    const idx = filtered.findIndex((s) => s.id === selected.id);
    if (idx >= 0 && idx + 1 < filtered.length) return filtered[idx + 1];
    return null;
  }, [selected, filtered]);

  if (selected) {
    return (
      <ReaderView
        key={selected.id}
        story={selected}
        onBack={() => setSelected(null)}
        onNext={nextStory ? () => setSelected(nextStory) : null}
      />
    );
  }

  const categories = ["all", "daily", "travel", "work", "culture", "science", "inspire"];

  return (
    <div className="space-y-5">
      <SectionHeader icon={BookOpen} title={t("title")} subtitle={t("subtitle")} tint="amber" />

      {/* hero band */}
      <div className="premium-card relative overflow-hidden rounded-2xl bg-card p-4 sm:p-5">
        <span className="hero-aurora" aria-hidden />
        <div
          className="pointer-events-none absolute -right-8 -top-12 h-36 w-36 rounded-full bg-amber-500/10 blur-2xl"
          aria-hidden
        />
        <div className="flex items-center gap-4">
          <div className="min-w-0 flex-1 space-y-2">
            <p className="text-base font-bold tracking-tight sm:text-lg">{t("hero.title")}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">{t("hero.subtitle")}</p>
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              <Badge variant="secondary" className="gap-1 font-medium">
                📚 {t("hero.badge1")}
              </Badge>
              <Badge variant="secondary" className="gap-1 font-medium">
                <BookOpen className="h-3 w-3" aria-hidden /> {t("hero.badge2")}
              </Badge>
              <Badge variant="secondary" className="gap-1 font-medium">
                🔊 {t("hero.badge3")}
              </Badge>
            </div>
          </div>
          <Image
            src="/illustrations/ill-reading.webp"
            alt=""
            width={120}
            height={120}
            className="animate-float h-16 w-auto shrink-0 object-contain drop-shadow-sm sm:h-24"
          />
        </div>
      </div>

      {/* level filter */}
      <section aria-label={t("library.levelAria")} className="space-y-2.5">
        <div className="grid max-w-xl grid-cols-3 gap-2" role="group" aria-label={t("library.levelAria")}>
          {LEVELS.map((l) => {
            const Icon = LEVEL_ICONS[l];
            const active = effectiveLevel === l;
            return (
              <Button
                key={l}
                variant="outline"
                aria-pressed={active}
                className={cn(
                  "min-h-11 gap-1.5 rounded-xl px-2 text-sm",
                  active &&
                    "border-transparent bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/25 hover:from-amber-600 hover:to-orange-700"
                )}
                onClick={() => setLevel(l)}
              >
                <Icon className="h-4 w-4" aria-hidden />
                {t(`levels.${l}`)}
              </Button>
            );
          })}
        </div>
      </section>

      {/* search + progress */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("library.search")}
            aria-label={t("library.searchAria")}
            className="h-11 w-full rounded-xl border border-border/70 bg-card pl-9 pr-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-amber-500/40"
          />
        </div>
        <Badge variant="outline" className="justify-center gap-1.5 px-3 py-2 text-xs">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
          {/* while the library list is still loading show an ellipsis instead
              of a misleading "0/0" (Task 29-a QA finding) */}
          {dbStories === null
            ? "…"
            : t("library.progress", { done: doneCount, total: all.length })}
        </Badge>
      </div>

      {/* category chips + Learning-Path unit filter chip */}
      <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label={t("library.catAria")}>
        {categories.map((c) => (
          <Button
            key={c}
            size="sm"
            variant="outline"
            onClick={() => setCategory(c)}
            className={cn(
              "min-h-9 rounded-full px-3.5 text-xs",
              category === c &&
                "border-transparent bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/25 hover:from-amber-600 hover:to-orange-700"
            )}
            aria-pressed={category === c}
          >
            {c === "all" ? t("library.all") : t(`categories.${c}`)}
          </Button>
        ))}
        {unitIntent !== null && (
          <Button
            size="sm"
            variant="outline"
            onClick={() => setUnitIntent(null)}
            aria-label={t("library.unitFilterAria")}
            className="min-h-9 gap-1.5 rounded-full border-amber-500/50 bg-amber-500/10 px-3.5 text-xs font-semibold text-amber-700 hover:bg-amber-500/20 dark:text-amber-300"
          >
            📖 {unitIntent > 0 ? t("library.unitFilter", { n: unitIntent }) : t("library.bonusChip")}
            <X className="h-3 w-3" aria-hidden />
          </Button>
        )}
      </div>

      {/* grid */}
      <div ref={gridRef} className="scroll-mt-20">
        {dbStories === null ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-44 rounded-2xl" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <EmptyState
            illustration="/illustrations/ill-reading.webp"
            title={t("library.emptyTitle")}
            description={t("library.empty")}
          />
        ) : (
          <div className="stagger-grid grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => {
              const done = doneIds.includes(s.id);
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelected(s)}
                  className="group text-left"
                  aria-label={pickTri(s.title, locale)}
                >
                  <Card className="h-full overflow-hidden rounded-2xl border-border/70 bg-card shadow-sm transition-all group-hover:-translate-y-1 group-hover:border-amber-500/40 group-hover:shadow-md group-active:translate-y-0">
                    {/* level-tinted strip — the level is visible at a glance */}
                    <div
                      className={cn(
                        "h-1.5 w-full bg-gradient-to-r",
                        LEVEL_STRIP[s.level]
                      )}
                      aria-hidden
                    />
                    <CardContent className="flex h-full flex-col gap-2.5 p-4">
                      <div className="flex items-start justify-between gap-2">
                        <span
                          className={cn(
                            "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-xl shadow-md transition-transform group-hover:scale-105",
                            CATEGORY_GRADIENTS[s.category] ?? CATEGORY_GRADIENTS.daily
                          )}
                          aria-hidden
                        >
                          {s.emoji}
                        </span>
                        <div className="flex flex-wrap justify-end gap-1">
                          {(s.unit ?? 0) > 0 && (
                            <Badge
                              variant="outline"
                              className="border-teal-500/40 text-[10px] text-teal-700 dark:text-teal-300"
                            >
                              {t("library.episode", { n: s.unit ?? 0 })}
                            </Badge>
                          )}
                          {done && (
                            <Badge
                              variant="outline"
                              className="gap-1 border-emerald-500/40 text-[10px] text-emerald-700 dark:text-emerald-400"
                            >
                              <CheckCircle2 className="h-3 w-3" aria-hidden />
                              {t("library.done")}
                            </Badge>
                          )}
                          <Badge variant="secondary" className="gap-0.5 text-[10px]">
                            <span aria-hidden>⏱</span>
                            {t("library.minutes", { n: s.minutes })}
                          </Badge>
                        </div>
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold">{pickTri(s.title, locale)}</p>
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                          {pickTri(s.summary, locale)}
                        </p>
                      </div>
                      <div className="mt-auto flex items-center justify-between gap-1.5">
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-600 dark:text-amber-400">
                          <Play className="h-3 w-3 fill-current" aria-hidden />
                          {t("library.readCta")}
                        </span>
                        <span className="flex shrink-0 items-center gap-1">
                          <Badge variant="outline" className="px-1.5 text-[10px] font-normal text-muted-foreground">
                            <span aria-hidden className="mr-0.5">{CATEGORY_EMOJI[s.category] ?? "📖"}</span>
                            {t(`genres.${s.genre}`)}
                          </Badge>
                          {s.vocabulary.length > 0 && (
                            <Badge
                              variant="outline"
                              className="border-emerald-500/30 px-1.5 text-[10px] font-normal text-emerald-700 dark:text-emerald-300"
                              aria-hidden
                            >
                              📚 {t("library.vocabCount", { n: s.vocabulary.length })}
                            </Badge>
                          )}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* free note */}
      <p className="flex items-center justify-center gap-1.5 pb-2 text-center text-[11px] text-muted-foreground">
        <LibraryBig className="h-3.5 w-3.5" aria-hidden />
        {t("library.freeBadge")} · {tc("free")}
      </p>
    </div>
  );
}

/** Profile level from the device store (hydration-safe default). */
import { useDeviceValue } from "@/hooks/use-device";
function useDeviceLevelSafe(): LibraryLevel {
  return useDeviceValue((s) => s.level, "beginner" as const);
}
