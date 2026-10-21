"use client";

// VocabLibraryTab — the owner-authored Vocabulary LIBRARY redesigned as a
// WORD JOURNEY. Three journey stations (Beginner 🌱 → Intermediate 🚀 →
// Advanced 🏔) each carry five themed units, and every unit's words run from
// simple to rich in seed order — so the path a learner walks IS the path the
// data is arranged in. All 240 words load once (instant stage switching);
// learners mark words "learned" (testing effect — it feeds the Learning
// Path's mastery rings) and can save any word to their wordbook for quizzes.
// Everything is free; AI (the learner's own Gemini key) is only used when
// they check a sentence or ask a question about a word.

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  BookOpenCheck,
  BookmarkPlus,
  Check,
  CircleCheck,
  Languages,
  Lightbulb,
  RefreshCw,
  Search,
  Sparkles,
  TriangleAlert,
  Volume2,
  X,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useDevice, useDeviceValue } from "@/hooks/use-device";
import { useToast } from "@/hooks/use-toast";
import { apiGet } from "@/lib/client-api";
import {
  pickTri,
  type LibraryLevel,
  type LibraryVocabData,
  type LibraryVocabEntry,
} from "@/lib/library-types";
import {
  getLearnedWordsServerSnapshot,
  getLearnedWordsSnapshot,
  subscribeLearnedWords,
  toggleLearnedWord,
} from "@/components/vocab/learned-store";
import { takeNavIntent } from "@/lib/nav-intent";
import { speakEnglish } from "@/components/vocab/speech";
import SentenceCheckCard from "@/components/library/SentenceCheckCard";
import LibraryAskBox from "@/components/library/AskBox";
import {
  EXTRA_UNIT_VISUAL,
  JOURNEY_ORDER,
  categoryMeta,
  posChip,
  unitVisual,
  type UnitVisual,
} from "@/components/vocab/vocab-visuals";

/** i18n unit key for a level+unit pair (path.units.<key>.theme). */
function unitKey(level: LibraryLevel, unit: number): string {
  return `${level[0]}${unit}`;
}

/** JSON payload for POST /api/vocab — the exact shape the wordbook API expects. */
function wordbookPayload(entry: LibraryVocabEntry) {
  const d = entry.data;
  return {
    word: entry.word,
    pronunciation: d.pronunciation ?? "",
    partOfSpeech: d.partOfSpeech ?? "",
    banglaMeaning: d.meaning?.bn ?? d.meaning?.en ?? "",
    englishMeaning: d.englishMeaning ?? "",
    examples: (d.examples ?? []).map((x) => x.en),
    usageTip: d.tip?.bn ?? "",
  };
}

/* ───────────────────────── Progress ring ───────────────────────── */

function ProgressRing({
  pct,
  stroke,
  size = 52,
  width = 5,
  children,
}: {
  pct: number;
  stroke: string;
  size?: number;
  width?: number;
  children?: React.ReactNode;
}) {
  const r = (size - width - 2) / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, pct));
  return (
    <span className="relative inline-flex shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={width}
          className="stroke-border/60"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={width}
          stroke={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - clamped / 100)}
          className="transition-[stroke-dashoffset] duration-700 ease-out"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center">{children}</span>
    </span>
  );
}

/* ───────────────────────── Journey header ───────────────────────── */

function JourneyHeader({
  activeLevel,
  stats,
  onSelect,
  levelLabel,
}: {
  activeLevel: LibraryLevel;
  stats: Map<LibraryLevel, { total: number; learned: number }> | null;
  onSelect: (lv: LibraryLevel) => void;
  levelLabel: (lv: LibraryLevel) => string;
}) {
  const t = useTranslations("vocab");
  const tCommon = useTranslations("common");

  const overall = useMemo(() => {
    if (!stats) return null;
    let learned = 0;
    let total = 0;
    for (const s of stats.values()) {
      learned += s.learned;
      total += s.total;
    }
    return { learned, total };
  }, [stats]);

  return (
    <Card className="premium-card overflow-hidden rounded-3xl border-border/70 bg-card shadow-sm">
      <CardContent className="p-4 sm:p-5">
        {/* Title + overall progress */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div className="min-w-0">
            <h3 className="flex items-center gap-1.5 text-sm font-bold tracking-tight sm:text-base">
              <span aria-hidden>🧭</span>
              {t("journey.title")}
            </h3>
            <p className="mt-0.5 text-xs text-muted-foreground">{t("journey.subtitle")}</p>
          </div>
          {overall && overall.total > 0 && (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary">
              {t("journey.mastered", { learned: overall.learned, total: overall.total })}
            </span>
          )}
        </div>

        {/* Stations */}
        <div role="radiogroup" aria-label={t("journey.aria")} className="flex items-stretch gap-1.5">
          {JOURNEY_ORDER.map((lv, i) => {
            const s = stats?.get(lv);
            const pct = s && s.total > 0 ? Math.round((s.learned / s.total) * 100) : 0;
            const active = activeLevel === lv;
            const done = pct >= 100;
            const vis = { beginner: "#10b981", intermediate: "#f59e0b", advanced: "#8b5cf6" }[lv];
            const visual = LEVEL_EMOJI[lv];
            return (
              <div key={lv} className="flex min-w-0 flex-1 items-center">
                <button
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => onSelect(lv)}
                  className={cn(
                    "group flex min-w-0 flex-1 flex-col items-center gap-1.5 rounded-2xl border px-2 py-3 transition-all duration-200",
                    active
                      ? "border-primary/40 bg-primary/5 shadow-sm"
                      : "border-transparent hover:border-border/60 hover:bg-muted/40"
                  )}
                >
                  <ProgressRing pct={pct} stroke={vis} size={active ? 58 : 50}>
                    <span
                      className={cn(
                        "text-xl transition-transform duration-200 group-hover:scale-110 sm:text-2xl",
                        !active && "opacity-90"
                      )}
                      aria-hidden
                    >
                      {done ? "✅" : visual}
                    </span>
                  </ProgressRing>
                  <span
                    className={cn(
                      "max-w-full truncate text-[11px] font-bold sm:text-xs",
                      active ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    )}
                  >
                    {levelLabel(lv)}
                  </span>
                  {s && s.total > 0 && (
                    <span
                      className={cn(
                        "text-[10px] font-semibold tabular-nums",
                        done ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground"
                      )}
                    >
                      {done ? t("journey.complete") : `${s.learned}/${s.total}`}
                    </span>
                  )}
                  {!s && <Skeleton className="h-3 w-10" />}
                </button>
                {i < JOURNEY_ORDER.length - 1 && (
                  <span
                    aria-hidden
                    className={cn(
                      "mt-[-22px] h-0.5 w-4 shrink-0 border-t-2 border-dashed sm:w-6",
                      pct >= 100 ? "border-emerald-400" : "border-border"
                    )}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Hidden i18n interpolation (level labels reuse common keys) */}
        <span className="sr-only">{tCommon("level.beginner")} · {tCommon("level.intermediate")} · {tCommon("level.advanced")}</span>
      </CardContent>
    </Card>
  );
}

const LEVEL_EMOJI: Record<LibraryLevel, string> = {
  beginner: "🌱",
  intermediate: "🚀",
  advanced: "🏔",
};

/* ───────────────────────── Unit banner strip ───────────────────────── */

function UnitBannerStrip({
  level,
  units,
  unitCounts,
  unitFilter,
  onPick,
  themeLabel,
}: {
  level: LibraryLevel;
  units: number[];
  unitCounts: Map<number, { total: number; learned: number }>;
  unitFilter: number | null;
  onPick: (u: number | null) => void;
  themeLabel: (unit: number) => string;
}) {
  const t = useTranslations("vocab");
  return (
    <div
      role="group"
      aria-label={t("lib.unitsAria")}
      className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1.5 nice-scroll"
    >
      <button
        type="button"
        onClick={() => onPick(null)}
        aria-pressed={unitFilter === null}
        className={cn(
          "group flex min-h-24 w-28 shrink-0 flex-col justify-between rounded-2xl border p-2.5 text-left transition-all duration-200 sm:w-32",
          unitFilter === null
            ? "border-primary/50 bg-primary/5 shadow-sm ring-1 ring-primary/25"
            : "border-border/60 bg-card hover:border-primary/30 hover:shadow-sm"
        )}
      >
        <span
          className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-bold text-white shadow-sm"
          aria-hidden
        >
          ✦
        </span>
        <span className="mt-auto">
          <span className="block truncate text-[11px] font-bold">{t("lib.allUnits")}</span>
        </span>
      </button>
      {units.map((u) => {
        const vis = u === 0 ? EXTRA_UNIT_VISUAL : unitVisual(level, u);
        const c = unitCounts.get(u);
        const pct = c && c.total > 0 ? Math.round((c.learned / c.total) * 100) : 0;
        const active = unitFilter === u;
        return (
          <button
            key={u}
            type="button"
            onClick={() => onPick(active ? null : u)}
            aria-pressed={active}
            className={cn(
              "group flex min-h-24 w-28 shrink-0 flex-col justify-between rounded-2xl border p-2.5 text-left transition-all duration-200 sm:w-36",
              active
                ? "border-primary/50 bg-primary/5 shadow-sm ring-1 ring-primary/25"
                : "border-border/60 bg-card hover:border-primary/30 hover:shadow-sm"
            )}
          >
            <span
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br text-xs shadow-sm",
                vis.gradient
              )}
              aria-hidden
            >
              {u === 0 ? "★" : vis.emoji}
            </span>
            <span className="mt-1.5 block">
              <span className="block truncate text-[11px] font-bold leading-tight">
                {themeLabel(u)}
              </span>
              {c && u > 0 && (
                <span className="mt-1.5 flex items-center gap-1.5">
                  <span className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-muted">
                    <span
                      className={cn("block h-full rounded-full bg-gradient-to-r transition-all duration-500", vis.gradient)}
                      style={{ width: `${pct}%` }}
                    />
                  </span>
                  <span className="shrink-0 text-[9px] font-bold tabular-nums text-muted-foreground">
                    {c.learned}/{c.total}
                  </span>
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ───────────────────────── Main tab ───────────────────────── */

export default function VocabLibraryTab() {
  const t = useTranslations("vocab");
  const tp = useTranslations("path");
  const tc = useTranslations("common");
  const tl = useTranslations("library");
  const locale = useLocale();
  const { toast } = useToast();
  const deviceId = useDevice((s) => s.deviceId);

  const deviceLevel = useDeviceValue((s) => s.level, "beginner" as const);
  const [level, setLevel] = useState<LibraryLevel | null>(null);
  const activeLevel: LibraryLevel = level ?? deviceLevel;

  const [all, setAll] = useState<LibraryVocabEntry[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [unitFilter, setUnitFilter] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);
  const reqRef = useRef(0);

  // Live learned-words store (feeds both cards and the Learning Path).
  const learned = useSyncExternalStore(
    subscribeLearnedWords,
    getLearnedWordsSnapshot,
    getLearnedWordsServerSnapshot
  );

  const load = useCallback(() => {
    const reqId = ++reqRef.current;
    setAll(null);
    setError(null);
    apiGet<{ items: LibraryVocabEntry[] }>("/api/library?kind=vocab")
      .then((d) => {
        if (reqRef.current !== reqId) return;
        setAll(d.items);
      })
      .catch((e) => {
        if (reqRef.current !== reqId) return;
        setError((e as Error).message);
      });
  }, []);

  useEffect(() => {
    // Microtask keeps setState out of the effect body (no cascading renders).
    queueMicrotask(() => load());
  }, [load]);

  // Deep link from the Learning Path: jump to the exact unit.
  useEffect(() => {
    queueMicrotask(() => {
      const intent = takeNavIntent();
      if (!intent || intent.tab !== "vocab") return;
      setLevel(intent.level);
      setUnitFilter(intent.unit);
      setQuery("");
      setSelectedId(null);
    });
  }, []);

  // All entries of the ACTIVE level (client-side — stage switching is instant).
  const entries = useMemo(
    () => all?.filter((e) => e.level === activeLevel) ?? null,
    [all, activeLevel]
  );

  // Journey stats: per-level totals + learned counts (a word maps to its level).
  const journeyStats = useMemo(() => {
    if (!all) return null;
    const map = new Map<LibraryLevel, { total: number; learned: number }>();
    for (const lv of JOURNEY_ORDER) map.set(lv, { total: 0, learned: 0 });
    const wordLevel = new Map<string, LibraryLevel>();
    for (const e of all) {
      const st = map.get(e.level);
      if (!st) continue;
      st.total += 1;
      wordLevel.set(e.word, e.level);
    }
    for (const w of learned) {
      const lv = wordLevel.get(w);
      if (lv) {
        const st = map.get(lv);
        if (st) st.learned += 1;
      }
    }
    return map;
  }, [all, learned]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!entries) return null;
    let list = entries;
    if (unitFilter !== null && !q) {
      list = list.filter((e) => (e.unit ?? 0) === unitFilter);
    }
    if (!q) return list;
    return list.filter(
      (e) =>
        e.word.toLowerCase().includes(q) ||
        pickTri(e.data.meaning, locale).toLowerCase().includes(q) ||
        (e.data.englishMeaning ?? "").toLowerCase().includes(q)
    );
  }, [entries, query, locale, unitFilter]);

  // Group by path unit (1..5 first, then extras) — sequential, psychology-
  // friendly chunks. Search results render as one flat list instead.
  const grouped = useMemo(() => {
    if (!filtered || query.trim()) return null;
    const byUnit = new Map<number, LibraryVocabEntry[]>();
    for (const e of filtered) {
      const u = e.unit ?? 0;
      const arr = byUnit.get(u) ?? [];
      arr.push(e);
      byUnit.set(u, arr);
    }
    const units = [...byUnit.keys()].sort((a, b) => {
      if (a === 0) return 1; // extras last
      if (b === 0) return -1;
      return a - b;
    });
    return units.map((u) => ({ unit: u, items: byUnit.get(u) ?? [] }));
  }, [filtered, query]);

  const unitCounts = useMemo(() => {
    const counts = new Map<number, { total: number; learned: number }>();
    for (const e of entries ?? []) {
      const u = e.unit ?? 0;
      const c = counts.get(u) ?? { total: 0, learned: 0 };
      c.total += 1;
      if (learned.includes(e.word)) c.learned += 1;
      counts.set(u, c);
    }
    return counts;
  }, [entries, learned]);

  const selected = useMemo(
    () => filtered?.find((e) => e.id === selectedId) ?? null,
    [filtered, selectedId]
  );

  const select = useCallback(
    (id: string) => {
      setSelectedId(id);
      // On mobile/tablet the detail renders below the grid — bring it into view.
      if (typeof window !== "undefined" && window.innerWidth < 1024) {
        window.setTimeout(() => {
          detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 60);
      }
    },
    []
  );

  const units = useMemo(() => {
    const set = new Set<number>();
    for (const e of entries ?? []) set.add(e.unit ?? 0);
    return [...set].sort((a, b) => (a === 0 ? 1 : b === 0 ? -1 : a - b));
  }, [entries]);

  const saveToWordbook = useCallback(
    (entry: LibraryVocabEntry) => {
      if (!deviceId) {
        toast({ title: tc("error"), description: tc("loading") });
        return;
      }
      void fetch("/api/vocab", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deviceId, word: wordbookPayload(entry) }),
      })
        .then((r) => {
          if (!r.ok) throw new Error("save failed");
          toast({ title: t("lib.saved") });
        })
        .catch(() => {
          toast({ title: tc("error") });
        });
    },
    [deviceId, t, tc, toast]
  );

  /**
   * Mark-learned now ALSO saves the word to the server wordbook (fire-and-
   * forget, silent) so the Progress word count AND the review flow (which
   * builds from the wordbook/learned lists) actually include it — previously
   * words marked learned could never be reviewed. Un-marking skips the POST
   * (the wordbook copy is kept — deletion is an explicit wordbook action).
   */
  const handleToggleLearned = useCallback(
    (entry: LibraryVocabEntry) => {
      const wasLearned = learned.includes(entry.word);
      toggleLearnedWord(entry.word);
      if (!wasLearned && deviceId) {
        void fetch("/api/vocab", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ deviceId, word: wordbookPayload(entry) }),
        }).catch(() => undefined); // silent: local learned state already applied
      }
    },
    [deviceId, learned]
  );

  const unitTheme = useCallback(
    (u: number) =>
      u === 0 ? t("lib.extraGroup") : tp(`units.${unitKey(activeLevel, u)}.theme`),
    [t, tp, activeLevel]
  );

  return (
    <div className="animate-fade-in-up space-y-4">
      {/* Word journey — three stations with live mastery rings */}
      <JourneyHeader
        activeLevel={activeLevel}
        stats={journeyStats}
        onSelect={(lv) => {
          setLevel(lv);
          setSelectedId(null);
          setUnitFilter(null);
        }}
        levelLabel={(lv) => tc(`level.${lv}`)}
      />

      {/* Unit banners — the five themed stops of the active stage */}
      {entries && units.length > 0 && !query.trim() && (
        <UnitBannerStrip
          level={activeLevel}
          units={units}
          unitCounts={unitCounts}
          unitFilter={unitFilter}
          onPick={(u) => {
            setUnitFilter(u);
            setSelectedId(null);
          }}
          themeLabel={unitTheme}
        />
      )}

      {/* Free note */}
      <p className="flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
        <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" aria-hidden />
        <span>{tl("freeNote")}</span>
      </p>

      {/* Search */}
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("lib.search")}
          aria-label={t("lib.searchAria")}
          className="h-11 w-full rounded-xl border border-border/70 bg-card pl-9 pr-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-emerald-500/40"
        />
      </div>

      {/* Master-detail */}
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_400px] xl:grid-cols-[minmax(0,1fr)_440px]">
        {/* List column */}
        <div className="min-w-0 space-y-3">
          {/* Count */}
          {filtered && (
            <p className="text-xs font-medium text-muted-foreground">
              {t("lib.count", { n: filtered.length })}
            </p>
          )}

          {/* Loading */}
          {!filtered && !error && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3" aria-busy="true">
              {Array.from({ length: 9 }).map((_, i) => (
                <Skeleton key={i} className="h-32 rounded-2xl" />
              ))}
            </div>
          )}

          {/* Error */}
          {error && (
            <Card className="border-destructive/30">
              <CardContent className="flex items-start gap-3 p-4">
                <TriangleAlert className="mt-0.5 h-4.5 w-4.5 shrink-0 text-destructive" aria-hidden />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">{t("lib.error.title")}</p>
                  <p className="mt-0.5 break-words text-xs text-muted-foreground">{error}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => void load()}
                    className="mt-2 min-h-9 gap-1.5 bg-transparent px-3 text-xs"
                  >
                    <RefreshCw className="h-3.5 w-3.5" aria-hidden />
                    {tc("retry")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Empty */}
          {filtered && filtered.length === 0 && !error && (
            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center gap-2 p-8 text-center">
                <BookOpenCheck className="h-8 w-8 text-muted-foreground/50" aria-hidden />
                <p className="text-sm font-semibold">{t("lib.empty.title")}</p>
                <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
                  {t("lib.empty.body")}
                </p>
              </CardContent>
            </Card>
          )}

          {/* Grouped-by-unit grid (no search) */}
          {grouped && grouped.length > 0 &&
            grouped.map((g) => {
              const vis = g.unit === 0 ? EXTRA_UNIT_VISUAL : unitVisual(activeLevel, g.unit);
              return (
                <section
                  key={g.unit}
                  className="space-y-2.5"
                  aria-label={g.unit === 0 ? t("lib.extraGroup") : tp(`units.${unitKey(activeLevel, g.unit)}.theme`)}
                >
                  {/* Unit header */}
                  <div className="flex items-center gap-2.5">
                    <span
                      className={cn(
                        "flex h-8 min-w-8 items-center justify-center rounded-xl bg-gradient-to-br text-sm shadow-sm",
                        vis.gradient
                      )}
                      aria-hidden
                    >
                      {g.unit === 0 ? "★" : vis.emoji}
                    </span>
                    <h3 className="min-w-0 truncate text-sm font-bold tracking-tight">
                      {g.unit === 0 ? t("lib.extraGroup") : tp(`units.${unitKey(activeLevel, g.unit)}.theme`)}
                    </h3>
                    {g.unit > 0 && unitCounts.get(g.unit) && (
                      <span className={cn("shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold", vis.soft)}>
                        {t("lib.learnedCount", {
                          learned: unitCounts.get(g.unit)!.learned,
                          total: unitCounts.get(g.unit)!.total,
                        })}
                      </span>
                    )}
                  </div>
                  <WordGrid
                    items={g.items}
                    level={activeLevel}
                    learned={learned}
                    selectedId={selectedId}
                    onSelect={select}
                    locale={locale}
                    levelLabel={tc(`level.${activeLevel}`)}
                  />
                </section>
              );
            })}

          {/* Flat grid (searching) */}
          {filtered && query.trim() && filtered.length > 0 && (
            <WordGrid
              items={filtered}
              level={activeLevel}
              learned={learned}
              selectedId={selectedId}
              onSelect={select}
              locale={locale}
              levelLabel={tc(`level.${activeLevel}`)}
            />
          )}
        </div>

        {/* Detail column */}
        <div ref={detailRef} className="min-w-0 scroll-mt-24 space-y-4">
          {/* Mobile close button + detail on <lg; sticky rail on lg+ */}
          {!selected && (
            <Card className="hidden border-dashed lg:block">
              <CardContent className="flex h-full min-h-40 flex-col items-center justify-center gap-2 p-6 text-center">
                <BookOpenCheck className="h-8 w-8 text-muted-foreground/40" aria-hidden />
                <p className="text-sm font-medium text-muted-foreground">{t("lib.pickHint")}</p>
              </CardContent>
            </Card>
          )}

          {selected && (
            <WordDetail
              key={selected.id}
              entry={selected}
              level={activeLevel}
              locale={locale}
              learned={learned.includes(selected.word)}
              onToggleLearned={() => handleToggleLearned(selected)}
              onSave={() => saveToWordbook(selected)}
              unitLabel={
                (selected.unit ?? 0) > 0
                  ? t("lib.unitChip", { n: selected.unit ?? 0 })
                  : null
              }
              onClose={() => setSelectedId(null)}
              closeLabel={t("lib.closeAria")}
              labels={{
                meaning: t("lib.meaningLabel"),
                english: t("lib.englishLabel"),
                examples: t("lib.examplesLabel"),
                tip: t("lib.tipLabel"),
                synonyms: t("lib.synonymsLabel"),
                antonyms: t("lib.antonymsLabel"),
                wordFamily: t("lib.wordFamily"),
                collocations: t("lib.collocations"),
                markLearned: t("lib.markLearned"),
                learned: t("lib.learned"),
                saveWordbook: t("lib.saveWordbook"),
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── Word card grid ─────────────────────── */

function WordGrid({
  items,
  level,
  learned,
  selectedId,
  onSelect,
  locale,
  levelLabel,
}: {
  items: LibraryVocabEntry[];
  level: LibraryLevel;
  learned: string[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  locale: string;
  levelLabel: string;
}) {
  const t = useTranslations("vocab");
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {items.map((e) => {
        const isLearned = learned.includes(e.word);
        const vis = unitVisual(level, e.unit ?? 0);
        const cat = categoryMeta(e.category);
        return (
          <button
            key={e.id}
            type="button"
            onClick={() => onSelect(e.id)}
            className="group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-2xl"
            aria-label={e.word}
            aria-pressed={selectedId === e.id}
          >
            <Card
              className={cn(
                "relative h-full overflow-hidden rounded-2xl border-border/70 bg-card shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-md group-active:translate-y-0",
                selectedId === e.id && "border-primary/60 ring-2 ring-primary/25",
                isLearned && "border-emerald-500/40 bg-emerald-500/5"
              )}
            >
              {/* Unit-coloured accent edge */}
              <span
                aria-hidden
                className={cn(
                  "absolute inset-y-0 left-0 w-1 bg-gradient-to-b opacity-80 transition-opacity group-hover:opacity-100",
                  vis.gradient
                )}
              />
              <CardContent className="flex h-full flex-col gap-1.5 p-3.5 pl-4">
                <div className="flex items-start justify-between gap-1.5">
                  <span
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[11px]",
                      cat.chip
                    )}
                    aria-hidden
                    title={e.category}
                  >
                    {cat.emoji}
                  </span>
                  {isLearned ? (
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-sm"
                      title={levelLabel}
                    >
                      <Check className="h-3 w-3" strokeWidth={3.5} aria-hidden />
                    </span>
                  ) : (
                    <span
                      className={cn(
                        "shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-bold",
                        vis.soft
                      )}
                    >
                      U{e.unit || "★"}
                    </span>
                  )}
                </div>
                <p className="break-words text-[15px] font-bold leading-snug tracking-tight">
                  {e.word}
                </p>
                {e.data.pronunciation && (
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={(ev) => {
                      ev.stopPropagation();
                      speakEnglish(e.word);
                    }}
                    onKeyDown={(ev) => {
                      if (ev.key === "Enter" || ev.key === " ") {
                        ev.preventDefault();
                        ev.stopPropagation();
                        speakEnglish(e.word);
                      }
                    }}
                    className="-mx-1 -my-0.5 flex max-w-full items-center gap-1 rounded px-1 py-0.5 text-[11px] text-muted-foreground transition-colors hover:bg-emerald-500/10 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-emerald-600 dark:hover:text-emerald-300"
                    dir="auto"
                    aria-label={t("lib.speakAria")}
                    title={t("lib.speakAria")}
                  >
                    <Volume2 className="h-3 w-3 shrink-0 text-emerald-600" aria-hidden />
                    <span className="truncate">{e.data.pronunciation}</span>
                  </span>
                )}
                <p
                  className="mt-auto line-clamp-2 text-xs leading-relaxed text-muted-foreground"
                  dir="auto"
                >
                  {pickTri(e.data.meaning, locale)}
                </p>
              </CardContent>
            </Card>
          </button>
        );
      })}
    </div>
  );
}

/* ─────────────────────── Word detail rail ─────────────────────── */

function WordDetail({
  entry,
  level,
  locale,
  learned,
  onToggleLearned,
  onSave,
  unitLabel,
  onClose,
  closeLabel,
  labels,
}: {
  entry: LibraryVocabEntry;
  level: LibraryLevel;
  locale: string;
  learned: boolean;
  onToggleLearned: () => void;
  onSave: () => void;
  unitLabel: string | null;
  onClose: () => void;
  closeLabel: string;
  labels: {
    meaning: string;
    english: string;
    examples: string;
    tip: string;
    synonyms: string;
    antonyms: string;
    wordFamily: string;
    collocations: string;
    markLearned: string;
    learned: string;
    saveWordbook: string;
  };
}) {
  const t = useTranslations("vocab");
  const d: LibraryVocabData = entry.data;
  const meaning = pickTri(d.meaning, locale);
  const tip = pickTri(d.tip, locale);
  const vis = unitVisual(level, entry.unit ?? 0);
  const cat = categoryMeta(entry.category);

  const askContext = useMemo(() => {
    const ex = d.examples.map((x) => x.en).join(" / ");
    return [
      `Word: ${entry.word}`,
      `Type: ${d.partOfSpeech}`,
      `Meaning: ${meaning}`,
      `English meaning: ${d.englishMeaning}`,
      `Examples: ${ex}`,
      `Tip: ${tip}`,
    ]
      .filter(Boolean)
      .join(" | ")
      .slice(0, 1500);
  }, [entry.word, d, meaning, tip]);

  return (
    <div className="animate-fade-in-up space-y-4">
      {/* Hero — gradient band carrying the unit's colour identity */}
      <Card className="premium-card overflow-hidden rounded-2xl border-border/70 bg-card shadow-sm">
        <div className={cn("relative bg-gradient-to-br px-4 pb-5 pt-4 sm:px-5", vis.gradient)}>
          {/* Soft decorative rings */}
          <span aria-hidden className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full bg-white/10" />
          <span aria-hidden className="pointer-events-none absolute -right-12 top-8 h-20 w-20 rounded-full bg-white/5" />
          <div className="relative flex items-start justify-between gap-2">
            <div className="flex min-w-0 flex-wrap gap-1.5">
              {unitLabel && (
                <Badge className="border-transparent bg-white/20 text-[11px] text-white backdrop-blur-sm">
                  {unitLabel}
                </Badge>
              )}
              {d.partOfSpeech && (
                <Badge className="border-transparent bg-white/20 text-[11px] capitalize text-white backdrop-blur-sm">
                  {d.partOfSpeech}
                </Badge>
              )}
              {entry.category && entry.category !== "general" && (
                <Badge className="border-transparent bg-white/20 text-[11px] text-white backdrop-blur-sm">
                  <span aria-hidden className="mr-0.5">{cat.emoji}</span>
                  {entry.category}
                </Badge>
              )}
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={onClose}
              aria-label={closeLabel}
              className="min-h-9 px-2 text-white/90 hover:bg-white/20 hover:text-white lg:hidden"
            >
              <X className="h-4 w-4" aria-hidden />
            </Button>
          </div>
          <h2 className="relative mt-2 break-words text-3xl font-extrabold tracking-tight text-white drop-shadow-sm">
            {entry.word}
          </h2>
          {d.pronunciation && (
            <button
              type="button"
              onClick={() => speakEnglish(entry.word)}
              className="relative mt-1.5 flex min-h-9 items-center gap-1.5 rounded-lg px-2 py-1 -ml-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/20 hover:text-white"
              aria-label={t("lib.speakAria")}
              title={t("lib.speakAria")}
            >
              <Volume2 className="h-4 w-4 shrink-0" aria-hidden />
              {d.pronunciation}
            </button>
          )}
        </div>

        <CardContent className="space-y-3 p-4 sm:p-5">
          {/* Meaning */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
              {labels.meaning}
            </p>
            <p className="mt-0.5 break-words text-[15px] font-semibold leading-relaxed" dir="auto">
              {meaning}
            </p>
          </div>
          {d.englishMeaning && (
            <div className="flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
              <Languages className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
              <span dir="auto">{d.englishMeaning}</span>
            </div>
          )}

          {/* Word family — morphological strip */}
          {(d.wordFamily ?? []).length > 0 && (
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                {labels.wordFamily}
              </p>
              <div className="mt-1.5 flex flex-wrap items-center gap-1">
                {(d.wordFamily ?? []).map((f, i) => (
                  <span key={f} className="flex items-center gap-1">
                    {i > 0 && (
                      <span aria-hidden className="text-[10px] text-muted-foreground/60">
                        →
                      </span>
                    )}
                    <span
                      dir="auto"
                      className={cn(
                        "rounded-full border border-border/60 px-2 py-0.5 text-[11px] font-semibold",
                        vis.soft
                      )}
                    >
                      {f}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Collocations — natural word partnerships */}
          {(d.collocations ?? []).length > 0 && (
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                {labels.collocations}
              </p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {(d.collocations ?? []).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => speakEnglish(c)}
                    className="flex min-h-8 items-center gap-1 rounded-full border border-border/60 bg-muted/40 px-2.5 text-[11px] font-medium transition-colors hover:bg-emerald-500/10 hover:text-emerald-700 dark:hover:text-emerald-300"
                    dir="auto"
                    aria-label={t("lib.speakAria")}
                  >
                    <Volume2 className="h-3 w-3 shrink-0 text-emerald-600" aria-hidden />
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Learned toggle + wordbook save — the two learning actions */}
          <div className="flex flex-wrap gap-2 pt-1">
            <Button
              size="sm"
              onClick={onToggleLearned}
              aria-pressed={learned}
              className={cn(
                "min-h-10 gap-1.5",
                learned
                  ? "bg-emerald-500 text-white hover:bg-emerald-600"
                  : "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25 hover:from-emerald-600 hover:to-teal-700"
              )}
            >
              {learned ? (
                <CircleCheck className="h-4 w-4" aria-hidden />
              ) : (
                <Check className="h-4 w-4" aria-hidden />
              )}
              {learned ? labels.learned : labels.markLearned}
            </Button>
            <Button size="sm" variant="outline" onClick={onSave} className="min-h-10 gap-1.5">
              <BookmarkPlus className="h-4 w-4 text-teal-600" aria-hidden />
              {labels.saveWordbook}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Examples */}
      {(d.examples ?? []).length > 0 && (
        <Card className="premium-card rounded-2xl border-border/70 bg-card shadow-sm">
          <CardContent className="space-y-2.5 p-4">
            <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
              {labels.examples}
            </p>
            <div className="max-h-72 space-y-2.5 overflow-y-auto nice-scroll pr-1">
              {d.examples.map((ex, i) => (
                <div key={i} className="rounded-xl border border-border/60 bg-muted/30 p-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="min-w-0 break-words text-sm font-medium leading-relaxed text-foreground/95">
                      {ex.en}
                    </p>
                    <button
                      type="button"
                      onClick={() => speakEnglish(ex.en)}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-emerald-500/10 hover:text-emerald-700 dark:hover:text-emerald-300"
                      aria-label={t("lib.speakAria")}
                    >
                      <Volume2 className="h-3.5 w-3.5" aria-hidden />
                    </button>
                  </div>
                  {ex.bn && (
                    <p className="mt-1 break-words text-xs leading-relaxed text-muted-foreground" dir="auto">
                      {ex.bn}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tip */}
      {tip && (
        <div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50/80 p-3.5 dark:border-amber-900/60 dark:bg-amber-950/30">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" aria-hidden />
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-wide text-amber-700 dark:text-amber-400">
              {labels.tip}
            </p>
            <p className="mt-0.5 break-words text-[13px] leading-relaxed text-amber-900/90 dark:text-amber-200/90" dir="auto">
              {tip}
            </p>
          </div>
        </div>
      )}

      {/* Synonyms / antonyms */}
      {((d.synonyms ?? []).length > 0 || (d.antonyms ?? []).length > 0) && (
        <Card className="premium-card rounded-2xl border-border/70 bg-card shadow-sm">
          <CardContent className="space-y-2.5 p-4">
            {(d.synonyms ?? []).length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                  {labels.synonyms}
                </span>
                {d.synonyms.map((s) => (
                  <Badge key={s} variant="outline" className="gap-0.5 text-[11px]">
                    <Check className="h-3 w-3 text-emerald-500" aria-hidden />
                    {s}
                  </Badge>
                ))}
              </div>
            )}
            {(d.antonyms ?? []).length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                  {labels.antonyms}
                </span>
                {d.antonyms.map((s) => (
                  <Badge key={s} variant="outline" className="text-[11px] line-through decoration-destructive/40">
                    {s}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* AI — used ONLY here (learner's own key; browsing is free) */}
      <SentenceCheckCard
        word={entry.word}
        meaningLine={`${entry.word} = ${meaning}`}
      />
      <LibraryAskBox title={entry.word} context={askContext} compact />
    </div>
  );
}
