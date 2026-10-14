"use client";

// VocabLibraryTab — the owner-authored Vocabulary Library.
// The owner adds words via the admin Content Studio; learners browse every
// word with ZERO API keys. AI (the learner's own Gemini key) is used only
// when they check a sentence or ask a question about a word.

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  BookOpenCheck,
  Check,
  Languages,
  Lightbulb,
  Loader2,
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
import { useDeviceValue } from "@/hooks/use-device";
import { apiGet } from "@/lib/client-api";
import {
  LIBRARY_LEVELS,
  pickTri,
  type LibraryLevel,
  type LibraryVocabData,
  type LibraryVocabEntry,
} from "@/lib/library-types";
import SentenceCheckCard from "@/components/library/SentenceCheckCard";
import LibraryAskBox from "@/components/library/AskBox";

const LEVEL_TINT: Record<LibraryLevel, string> = {
  beginner: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  intermediate: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
  advanced: "bg-rose-500/10 text-rose-700 dark:text-rose-300",
};

export default function VocabLibraryTab() {
  const t = useTranslations("vocab");
  const tc = useTranslations("common");
  const tl = useTranslations("library");
  const locale = useLocale();

  const deviceLevel = useDeviceValue((s) => s.level, "beginner" as const);
  const [level, setLevel] = useState<LibraryLevel | null>(null);
  const activeLevel: LibraryLevel = level ?? deviceLevel;

  const [entries, setEntries] = useState<LibraryVocabEntry[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);
  const reqRef = useRef(0);

  const load = useCallback((lv: LibraryLevel) => {
    const reqId = ++reqRef.current;
    setEntries(null);
    setError(null);
    apiGet<{ items: LibraryVocabEntry[] }>(
      `/api/library?kind=vocab&level=${lv}`
    )
      .then((d) => {
        if (reqRef.current !== reqId) return;
        setEntries(d.items);
      })
      .catch((e) => {
        if (reqRef.current !== reqId) return;
        setError((e as Error).message);
      });
  }, []);

  useEffect(() => {
    // Microtask keeps setState out of the effect body (no cascading renders).
    queueMicrotask(() => load(activeLevel));
  }, [activeLevel, load]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!entries) return null;
    if (!q) return entries;
    return entries.filter(
      (e) =>
        e.word.toLowerCase().includes(q) ||
        pickTri(e.data.meaning, locale).toLowerCase().includes(q) ||
        (e.data.englishMeaning ?? "").toLowerCase().includes(q)
    );
  }, [entries, query, locale]);

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

  return (
    <div className="animate-fade-in-up space-y-4">
      {/* Level filter */}
      <div
        role="radiogroup"
        aria-label={t("lib.levelAria")}
        className="flex gap-1 rounded-2xl border border-border/70 bg-muted/60 p-1"
      >
        {LIBRARY_LEVELS.map((lv) => (
          <button
            key={lv}
            type="button"
            role="radio"
            aria-checked={activeLevel === lv}
            onClick={() => {
              setLevel(lv);
              setSelectedId(null);
            }}
            className={cn(
              "min-h-11 flex-1 rounded-xl px-2 text-sm font-semibold transition-all duration-200",
              activeLevel === lv
                ? "bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-md"
                : "text-muted-foreground hover:bg-background/60 hover:text-foreground"
            )}
          >
            {tc(`level.${lv}`)}
          </button>
        ))}
      </div>

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
          className="h-11 w-full rounded-xl border border-border/70 bg-card pl-9 pr-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-primary/30"
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
                <Skeleton key={i} className="h-28 rounded-2xl" />
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
                    onClick={() => void load(activeLevel)}
                    className="mt-2 min-h-9 gap-1.5 bg-transparent px-3 text-xs"
                  >
                    {error ? <RefreshCw className="h-3.5 w-3.5" aria-hidden /> : null}
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

          {/* Word grid */}
          {filtered && filtered.length > 0 && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {filtered.map((e) => (
                <button
                  key={e.id}
                  type="button"
                  onClick={() => select(e.id)}
                  className="group text-left"
                  aria-label={e.word}
                  aria-pressed={selectedId === e.id}
                >
                  <Card
                    className={cn(
                      "h-full rounded-2xl border-border/70 bg-card shadow-sm transition-all group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-md group-active:translate-y-0",
                      selectedId === e.id && "border-primary/60 ring-2 ring-primary/25"
                    )}
                  >
                    <CardContent className="flex h-full flex-col gap-1.5 p-3.5">
                      <div className="flex items-start justify-between gap-1.5">
                        <p className="min-w-0 break-words text-sm font-bold leading-snug">
                          {e.word}
                        </p>
                        <Badge
                          variant="secondary"
                          className={cn("shrink-0 border-transparent px-1.5 text-[9px]", LEVEL_TINT[e.level])}
                        >
                          {tc(`level.${e.level}`)}
                        </Badge>
                      </div>
                      {e.data.pronunciation && (
                        <p className="flex items-center gap-1 truncate text-[11px] text-muted-foreground" dir="auto">
                          <Volume2 className="h-3 w-3 shrink-0 text-emerald-600" aria-hidden />
                          <span className="truncate">{e.data.pronunciation}</span>
                        </p>
                      )}
                      <p className="mt-auto line-clamp-2 text-xs leading-relaxed text-muted-foreground" dir="auto">
                        {pickTri(e.data.meaning, locale)}
                      </p>
                      {e.data.partOfSpeech && (
                        <span className="text-[10px] font-medium uppercase tracking-wide text-primary/80">
                          {e.data.partOfSpeech}
                        </span>
                      )}
                    </CardContent>
                  </Card>
                </button>
              ))}
            </div>
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
              locale={locale}
              onClose={() => setSelectedId(null)}
              closeLabel={t("lib.closeAria")}
              labels={{
                meaning: t("lib.meaningLabel"),
                english: t("lib.englishLabel"),
                examples: t("lib.examplesLabel"),
                tip: t("lib.tipLabel"),
                synonyms: t("lib.synonymsLabel"),
                antonyms: t("lib.antonymsLabel"),
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── Word detail rail ─────────────────────── */

function WordDetail({
  entry,
  locale,
  onClose,
  closeLabel,
  labels,
}: {
  entry: LibraryVocabEntry;
  locale: string;
  onClose: () => void;
  closeLabel: string;
  labels: {
    meaning: string;
    english: string;
    examples: string;
    tip: string;
    synonyms: string;
    antonyms: string;
  };
}) {
  const d: LibraryVocabData = entry.data;
  const meaning = pickTri(d.meaning, locale);
  const tip = pickTri(d.tip, locale);

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
      {/* Hero */}
      <Card className="premium-card relative overflow-hidden rounded-2xl border-border/70 bg-gradient-to-br from-emerald-500/10 via-card to-teal-500/10 shadow-sm">
        <CardContent className="space-y-3 p-4 sm:p-5">
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              <Badge className="border-transparent bg-gradient-to-br from-emerald-500 to-teal-500 text-[11px] text-white">
                {entry.level}
              </Badge>
              {d.partOfSpeech && (
                <Badge variant="outline" className="text-[11px]">
                  {d.partOfSpeech}
                </Badge>
              )}
              {entry.category && entry.category !== "general" && (
                <Badge variant="secondary" className="text-[11px]">
                  {entry.category}
                </Badge>
              )}
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={onClose}
              aria-label={closeLabel}
              className="min-h-9 px-2 lg:hidden"
            >
              <X className="h-4 w-4" aria-hidden />
            </Button>
          </div>
          <h2 className="break-words text-2xl font-bold tracking-tight">{entry.word}</h2>
          {d.pronunciation && (
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground" dir="auto">
              <Volume2 className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
              {d.pronunciation}
            </p>
          )}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
              {labels.meaning}
            </p>
            <p className="mt-0.5 break-words text-[15px] font-medium leading-relaxed" dir="auto">
              {meaning}
            </p>
          </div>
          {d.englishMeaning && (
            <div className="flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
              <Languages className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
              <span dir="auto">{d.englishMeaning}</span>
            </div>
          )}
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
                  <p className="break-words text-sm font-medium leading-relaxed text-foreground/95">
                    {ex.en}
                  </p>
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
