"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import {
  Briefcase,
  CheckCircle2,
  CloudSun,
  Cpu,
  Flame,
  GraduationCap,
  Headphones,
  HeartHandshake,
  HeartPulse,
  Home,
  KeyRound,
  LibraryBig,
  ListChecks,
  Plane,
  Play,
  Search,
  ShoppingBag,
  Sparkles,
  Sprout,
  UtensilsCrossed,
  Volume2,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { apiGet } from "@/lib/client-api";
import { takeNavIntent } from "@/lib/nav-intent";
import type { LibraryListeningEntry } from "@/lib/library-types";
import { useDeviceValue } from "@/hooks/use-device";
import SectionHeader from "@/components/shared/SectionHeader";
import StoryPlayer, {
  LISTENING_LEVELS,
  type ListeningLevel,
} from "@/components/listening/StoryPlayer";
import {
  LIBRARY_CATEGORIES,
  LIBRARY_STORIES,
  getDoneIdsServerSnapshot,
  getDoneIdsSnapshot,
  subscribeDoneIds,
} from "@/components/listening/library";
import {
  pickLang,
  type LibraryCategory,
  type LibraryStory,
} from "@/components/listening/types";

interface Topic {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

// Label for each topic comes from i18n: listening.topics.<id>
const TOPICS: Topic[] = [
  { id: "dailyLife", icon: Home, gradient: "from-emerald-500 to-teal-500" },
  { id: "travel", icon: Plane, gradient: "from-amber-500 to-orange-500" },
  { id: "food", icon: UtensilsCrossed, gradient: "from-rose-500 to-orange-500" },
  { id: "office", icon: Briefcase, gradient: "from-teal-500 to-cyan-600" },
  { id: "school", icon: GraduationCap, gradient: "from-orange-500 to-amber-500" },
  { id: "shopping", icon: ShoppingBag, gradient: "from-rose-500 to-pink-500" },
  { id: "weather", icon: CloudSun, gradient: "from-teal-500 to-emerald-500" },
  { id: "health", icon: HeartPulse, gradient: "from-orange-500 to-rose-500" },
  { id: "technology", icon: Cpu, gradient: "from-emerald-500 to-teal-500" },
  { id: "friendship", icon: HeartHandshake, gradient: "from-rose-500 to-pink-500" },
];

// Level icons: শুরু → মাঝারি → উন্নত
const LEVEL_ICONS: Record<ListeningLevel, React.ComponentType<{ className?: string }>> = {
  beginner: Sprout,
  intermediate: Zap,
  advanced: Flame,
};

const CATEGORY_GRADIENTS: Record<LibraryCategory, string> = {
  daily: "from-emerald-500 to-teal-500",
  travel: "from-amber-500 to-orange-500",
  work: "from-teal-500 to-cyan-600",
  culture: "from-rose-500 to-pink-500",
  science: "from-orange-500 to-amber-600",
  inspire: "from-rose-500 to-orange-500",
};

/**
 * Owner-authored DB story (LibraryListening row) → LibraryStory.
 * `db:${slug}` ids keep completion tracking working (ids are just strings in
 * the localStorage done-list). Defensive defaults keep malformed rows from
 * breaking the whole grid: unknown category → "daily", bad quiz answer → 0.
 */
function dbEntryToStory(e: LibraryListeningEntry): LibraryStory | null {
  try {
    const d = e.data;
    const paragraphs = Array.isArray(d.paragraphs) ? d.paragraphs : [];
    if (paragraphs.length === 0) return null;
    const tri = (x: { bn?: string; en?: string; hi?: string }) => ({
      bn: x?.bn ?? "",
      en: x?.en ?? "",
      hi: x?.hi ?? "",
    });
    return {
      id: `db:${e.slug}`,
      level: e.level,
      category: (LIBRARY_CATEGORIES as readonly string[]).includes(e.category)
        ? (e.category as LibraryCategory)
        : "daily",
      minutes: typeof e.minutes === "number" && e.minutes > 0 ? e.minutes : 2,
      unit: typeof e.unit === "number" && e.unit > 0 ? e.unit : undefined,
      title: tri(d.title),
      summary: tri(d.summary),
      paragraphs,
      vocabulary: (Array.isArray(d.vocabulary) ? d.vocabulary : []).map((v) => ({
        word: v.word,
        meaning: tri(v.meaning),
        example: v.example,
      })),
      quiz: (Array.isArray(d.quiz) ? d.quiz : []).map((q) => ({
        question: tri(q.question),
        options: (Array.isArray(q.options) ? q.options : []).map(tri),
        answer:
          Number.isInteger(q.answer) && q.answer >= 0 && q.answer <= 3
            ? (q.answer as 0 | 1 | 2 | 3)
            : 0,
        explain: tri(q.explain),
      })),
    };
  } catch {
    return null; // one broken row must not break the whole library
  }
}

export default function ListeningSection() {
  const t = useTranslations("listening");
  const tc = useTranslations("common");
  const locale = useLocale();
  const hasKey = useDeviceValue((s) => s.hasKey, false);
  const loaded = useDeviceValue((s) => s.loaded, false);
  const deviceLevel = useDeviceValue((s) => s.level, "beginner" as const);
  const deviceId = useDeviceValue((s) => s.deviceId, "");
  // ডিফল্ট = ইউজারের সেভ করা লেভেল; ম্যানুয়ালি বদলালে override জেতে
  const [levelOverride, setLevelOverride] = useState<ListeningLevel | null>(null);
  const level = levelOverride ?? deviceLevel;

  const [tab, setTab] = useState<"library" | "ai">("library");
  const [aiSel, setAiSel] = useState<{ topic: string; label: string } | null>(null);
  const [libSel, setLibSel] = useState<LibraryStory | null>(null);
  const [category, setCategory] = useState<"all" | LibraryCategory>("all");
  const [query, setQuery] = useState("");
  // Completed story ids via an external store (hydration-safe, no effect setState)
  const doneIds = useSyncExternalStore(
    subscribeDoneIds,
    getDoneIdsSnapshot,
    getDoneIdsServerSnapshot
  );

  // Owner-authored DB stories — null = still loading (static stories render
  // instantly either way; DB stories append on arrival). Errors stay graceful:
  // the library simply remains static-only.
  const [dbStories, setDbStories] = useState<LibraryStory[] | null>(null);

  // Deep link from the Learning Path: open the exact episode when it arrives.
  const [pendingSlug, setPendingSlug] = useState<string | null>(null);
  useEffect(() => {
    queueMicrotask(() => {
      const intent = takeNavIntent();
      if (intent && intent.tab === "listening") setPendingSlug(intent.slug);
    });
  }, []);

  useEffect(() => {
    let alive = true;
    apiGet<{ items: LibraryListeningEntry[] }>("/api/library?kind=listening")
      .then((res) => {
        if (!alive) return;
        const converted = (res.items ?? [])
          .map(dbEntryToStory)
          .filter((s): s is LibraryStory => s !== null)
          .filter((s) => !LIBRARY_STORIES.some((x) => x.id === s.id));
        setDbStories(converted);
      })
      .catch(() => {
        if (alive) setDbStories([]); // loading finished, nothing to add
      });
    return () => {
      alive = false;
    };
  }, []);

  // Static catalog + DB stories (dedupe against static ids just in case).
  const allStories = useMemo(
    () => [...LIBRARY_STORIES, ...(dbStories ?? [])],
    [dbStories]
  );

  // Consume a pending deep link once the target story is available.
  useEffect(() => {
    if (!pendingSlug) return;
    const story = allStories.find(
      (s) => s.id === `db:${pendingSlug}` || s.id === pendingSlug
    );
    if (!story) return;
    // Microtask keeps setState out of the effect body (no cascading renders).
    queueMicrotask(() => {
      setLevelOverride(story.level);
      setCategory("all");
      setLibSel(story);
      setPendingSlug(null);
    });
  }, [pendingSlug, allStories]);

  const categoryLabel = (c: LibraryCategory) => t(`library.categories.${c}`);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = allStories.filter((s) => {
      if (s.level !== level) return false;
      if (category !== "all" && s.category !== category) return false;
      if (!q) return true;
      return (
        pickLang(s.title, locale).toLowerCase().includes(q) ||
        pickLang(s.summary, locale).toLowerCase().includes(q) ||
        s.title.en.toLowerCase().includes(q)
      );
    });
    // Path episodes first (unit 1→5, in order), then standalone stories —
    // the serial order is the learning order.
    return [...list].sort((a, b) => {
      const au = a.unit ?? 0;
      const bu = b.unit ?? 0;
      if (au > 0 && bu > 0) return au - bu;
      if (au > 0) return -1;
      if (bu > 0) return 1;
      return 0;
    });
  }, [allStories, level, category, query, locale]);

  const doneCount = useMemo(
    () => allStories.filter((s) => doneIds.includes(s.id)).length,
    [allStories, doneIds]
  );

  return (
    <div className="space-y-6">
      <SectionHeader icon={Headphones} title={t("title")} subtitle={t("subtitle")} tint="teal" />

      {libSel ? (
        // ---------- লাইব্রেরি স্টোরি প্লেয়ার ----------
        <StoryPlayer
          key={libSel.id}
          deviceId=""
          topic={libSel.id}
          topicLabel={categoryLabel(libSel.category)}
          level={libSel.level}
          libraryStory={libSel}
          onBack={() => setLibSel(null)}
        />
      ) : aiSel ? (
        // ---------- AI স্টোরি প্লেয়ার ----------
        <StoryPlayer
          key={`${aiSel.topic}::${level}`}
          deviceId={deviceId}
          topic={aiSel.topic}
          topicLabel={aiSel.label}
          level={level}
          onBack={() => setAiSel(null)}
        />
      ) : (
        <>
          {/* ---------- ট্যাব সুইচার: Library | AI Story ---------- */}
          <div
            className="grid max-w-2xl grid-cols-2 gap-2 rounded-2xl border border-border/60 bg-muted/40 p-1.5"
            role="tablist"
            aria-label={t("library.tabAria")}
          >
            <Button
              role="tab"
              aria-selected={tab === "library"}
              variant={tab === "library" ? "default" : "ghost"}
              onClick={() => setTab("library")}
              className="min-h-11 gap-2 rounded-xl"
            >
              <LibraryBig className="h-4.5 w-4.5" aria-hidden />
              {t("library.tab")}
              <Badge
                variant="secondary"
                className="ml-0.5 hidden bg-white/15 px-1.5 text-[10px] text-inherit sm:inline-flex"
              >
                {t("library.freeBadge")}
              </Badge>
            </Button>
            <Button
              role="tab"
              aria-selected={tab === "ai"}
              variant={tab === "ai" ? "default" : "ghost"}
              onClick={() => setTab("ai")}
              className="min-h-11 gap-2 rounded-xl"
            >
              <Sparkles className="h-4.5 w-4.5" aria-hidden />
              {t("library.tabAi")}
            </Button>
          </div>

          {/* ---------- লেভেল ফিল্টার (দুই ট্যাবেই কাজ করে) ---------- */}
          <section aria-label={t("steps.levelAria")} className="animate-fade-in-up space-y-2.5">
            <div className="grid max-w-xl grid-cols-3 gap-2" role="group" aria-label={t("steps.levelAria")}>
              {LISTENING_LEVELS.map((l) => {
                const Icon = LEVEL_ICONS[l.id];
                return (
                  <Button
                    key={l.id}
                    variant={level === l.id ? "default" : "outline"}
                    aria-pressed={level === l.id}
                    className="min-h-11 gap-1.5 rounded-xl px-2 text-sm"
                    onClick={() => setLevelOverride(l.id)}
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                    {tc(`level.${l.id}`)}
                  </Button>
                );
              })}
            </div>
          </section>

          {tab === "library" ? (
            // ---------- লাইব্রেরি ----------
            <section className="animate-fade-in-up space-y-4" aria-label={t("library.tab")}>
              {/* সার্চ + প্রগ্রেস */}
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
                    className="h-11 w-full rounded-xl border border-border/70 bg-card pl-9 pr-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <Badge variant="outline" className="justify-center gap-1.5 px-3 py-2 text-xs">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
                  {t("library.progress", { done: doneCount, total: allStories.length })}
                </Badge>
              </div>

              {/* ক্যাটাগরি চিপস */}
              <div className="flex flex-wrap gap-1.5" role="group" aria-label={t("library.catAria")}>
                <Button
                  size="sm"
                  variant={category === "all" ? "default" : "outline"}
                  onClick={() => setCategory("all")}
                  className="min-h-9 rounded-full px-3.5 text-xs"
                  aria-pressed={category === "all"}
                >
                  {t("library.all")}
                </Button>
                {LIBRARY_CATEGORIES.map((c) => (
                  <Button
                    key={c}
                    size="sm"
                    variant={category === c ? "default" : "outline"}
                    onClick={() => setCategory(c)}
                    className="min-h-9 rounded-full px-3.5 text-xs"
                    aria-pressed={category === c}
                  >
                    {categoryLabel(c)}
                  </Button>
                ))}
              </div>

              {/* স্টোরি গ্রিড */}
              {filtered.length === 0 ? (
                <Card className="border-dashed">
                  <CardContent className="p-8 text-center text-sm text-muted-foreground">
                    {t("library.empty")}
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((s) => {
                    const done = doneIds.includes(s.id);
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setLibSel(s)}
                        className="group text-left"
                        aria-label={pickLang(s.title, locale)}
                      >
                        <Card className="h-full rounded-2xl border-border/70 bg-card shadow-sm transition-all group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-md group-active:translate-y-0">
                          <CardContent className="flex h-full flex-col gap-2.5 p-4">
                            <div className="flex items-start justify-between gap-2">
                              <span
                                className={cn(
                                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md transition-transform group-hover:scale-105",
                                  CATEGORY_GRADIENTS[s.category]
                                )}
                              >
                                <Headphones className="h-4.5 w-4.5" aria-hidden />
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
                                <Badge variant="secondary" className="text-[10px]">
                                  {t("library.minutes", { n: s.minutes })}
                                </Badge>
                              </div>
                            </div>
                            <div className="min-w-0">
                              <p className="truncate text-sm font-bold">{pickLang(s.title, locale)}</p>
                              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                                {pickLang(s.summary, locale)}
                              </p>
                            </div>
                            <span className="mt-auto inline-flex items-center gap-1 text-[11px] font-medium text-primary">
                              <Play className="h-3 w-3 fill-current" aria-hidden />
                              {t("topicCta")}
                            </span>
                          </CardContent>
                        </Card>
                      </button>
                    );
                  })}
                </div>
              )}
            </section>
          ) : (
            // ---------- AI স্টোরি (টপিক → জেনারেট) ----------
            <section aria-label={t("steps.topicAria")} className="animate-fade-in-up space-y-3">
              {loaded && !hasKey && (
                <Card
                  className="animate-fade-in-up rounded-2xl border-amber-300/70 bg-amber-50/80 shadow-sm dark:border-amber-800 dark:bg-amber-950/40"
                  aria-label={t("apiKey.aria")}
                >
                  <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/90 to-orange-500/90 text-white shadow-md">
                      <KeyRound className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-amber-900 dark:text-amber-200">
                        {t("apiKey.title")}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-amber-800/80 dark:text-amber-300/80">
                        {t("apiKey.description")}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div>
                <h2 className="text-base font-semibold">{t("steps.topic")}</h2>
                <p className="mt-0.5 text-sm text-muted-foreground">{t("steps.topicHint")}</p>
              </div>

              {/* Hero band */}
              <div className="premium-card relative overflow-hidden rounded-2xl bg-card p-4 sm:p-5">
                <div
                  className="pointer-events-none absolute -right-8 -top-12 h-36 w-36 rounded-full bg-teal-500/10 blur-2xl"
                  aria-hidden
                />
                <div className="flex items-center gap-4">
                  <div className="min-w-0 flex-1 space-y-2">
                    <p className="text-base font-bold tracking-tight sm:text-lg">{t("hero.title")}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {t("hero.subtitle")}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      <Badge variant="secondary" className="gap-1 font-medium">
                        <Sparkles className="h-3 w-3" aria-hidden /> {t("hero.badge1")}
                      </Badge>
                      <Badge variant="secondary" className="gap-1 font-medium">
                        <Volume2 className="h-3 w-3" aria-hidden /> {t("hero.badge2")}
                      </Badge>
                      <Badge variant="secondary" className="gap-1 font-medium">
                        <ListChecks className="h-3 w-3" aria-hidden /> {t("hero.badge3")}
                      </Badge>
                    </div>
                  </div>
                  <Image
                    src="/illustrations/ill-listening.webp"
                    alt=""
                    width={120}
                    height={120}
                    className="animate-float h-16 w-auto shrink-0 object-contain drop-shadow-sm sm:h-24"
                  />
                </div>
              </div>

              {/* Topic cards */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {TOPICS.map((topic) => {
                  const label = t(`topics.${topic.id}`);
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setAiSel({ topic: topic.id, label })}
                      className="group text-left"
                      aria-label={t("topicAriaLabel", { topic: label })}
                    >
                      <Card className="h-full rounded-2xl border-border/70 bg-card shadow-sm transition-all group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-md group-active:translate-y-0">
                        <CardContent className="flex h-full flex-col items-center justify-center gap-2.5 p-4 text-center">
                          <span
                            className={cn(
                              "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-md transition-transform group-hover:scale-105",
                              topic.gradient
                            )}
                          >
                            <topic.icon className="h-5.5 w-5.5" aria-hidden />
                          </span>
                          <span className="text-sm font-semibold">{label}</span>
                          <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                            <Play className="h-3 w-3 fill-current" aria-hidden />
                            {t("topicCta")}
                          </span>
                        </CardContent>
                      </Card>
                    </button>
                  );
                })}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}
