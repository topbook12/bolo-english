"use client";

import { useMemo, useState } from "react";
import {
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Loader2,
  PlusCircle,
  Search,
  Sparkles,
  Trash2,
  Volume2,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import EmptyState from "@/components/shared/EmptyState";
import { callAi } from "@/lib/client-api";
import type { DailyWord } from "@/lib/types";
import type { SavedWord } from "./types";
import WordCard from "./WordCard";
import { speakEnglish } from "./speech";
import { useLocaleNum } from "./use-locale-num";

interface WordbookTabProps {
  deviceId: string;
  words: SavedWord[] | null; // null = loading
  error: string | null;
  onRetry: () => void;
  onDelete: (w: SavedWord) => void;
  deletingWord: string | null;
  isSaved: (word: string) => boolean;
  onSave: (w: DailyWord) => void;
  savingWord: string | null;
  onGoDaily: () => void;
}

// Tab 2 — ওয়ার্ডবুক: saved words list (search / speak / delete) + add your own word.
export default function WordbookTab({
  deviceId,
  words,
  error,
  onRetry,
  onDelete,
  deletingWord,
  isSaved,
  onSave,
  savingWord,
  onGoDaily,
}: WordbookTabProps) {
  const t = useTranslations("vocab");
  const tCommon = useTranslations("common");
  const num = useLocaleNum();

  const [search, setSearch] = useState("");
  const [addOpen, setAddOpen] = useState(false);
  const [lookupInput, setLookupInput] = useState("");
  const [lookupLoading, setLookupLoading] = useState(false);
  const [lookupError, setLookupError] = useState<string | null>(null);
  const [lookupResult, setLookupResult] = useState<DailyWord | null>(null);

  const filtered = useMemo(() => {
    if (!words) return null;
    const q = search.trim().toLowerCase();
    if (!q) return words;
    return words.filter(
      (w) => w.word.toLowerCase().includes(q) || w.banglaMeaning.toLowerCase().includes(q)
    );
  }, [words, search]);

  const runLookup = async () => {
    const word = lookupInput.trim();
    if (!word || lookupLoading) return;
    setLookupLoading(true);
    setLookupError(null);
    setLookupResult(null);
    try {
      const res = await callAi<DailyWord>(deviceId, "vocab-lookup", { word });
      if (!res?.word) {
        setLookupError(t("wordbook.notEnglish", { word }));
      } else {
        setLookupResult(res);
      }
    } catch (e) {
      setLookupError((e as Error).message);
    } finally {
      setLookupLoading(false);
    }
  };

  return (
    <div className="animate-fade-in-up space-y-4">
      {/* Add your own word (expandable) */}
      <Collapsible open={addOpen} onOpenChange={setAddOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant="outline"
            className="h-11 w-full justify-between rounded-xl"
            aria-label={t("wordbook.addWordAria")}
            aria-expanded={addOpen}
          >
            <span className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden />
              ➕ {t("wordbook.addWord")}
            </span>
            {addOpen ? (
              <ChevronUp className="h-4 w-4 text-muted-foreground" aria-hidden />
            ) : (
              <ChevronDown className="h-4 w-4 text-muted-foreground" aria-hidden />
            )}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-3 pt-3">
          <div className="flex flex-col gap-2 sm:flex-row">
            <Input
              value={lookupInput}
              onChange={(e) => setLookupInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") runLookup();
              }}
              placeholder={t("wordbook.lookupPlaceholder")}
              aria-label={t("wordbook.lookupAria")}
              className="h-11 flex-1 rounded-xl"
            />
            <Button
              className="btn-shine h-11 gap-1.5 rounded-xl"
              onClick={runLookup}
              disabled={lookupLoading || !lookupInput.trim()}
            >
              {lookupLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              ) : (
                <Sparkles className="h-4 w-4" aria-hidden />
              )}
              {lookupLoading ? t("wordbook.lookupLoading") : t("wordbook.lookupButton")}
            </Button>
          </div>

          {lookupError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>{t("wordbook.lookupErrorTitle")}</AlertTitle>
              <AlertDescription>
                <span>{lookupError}</span>
              </AlertDescription>
            </Alert>
          )}

          {lookupLoading && <Skeleton className="h-60 rounded-2xl" />}

          {lookupResult && !lookupLoading && (
            <div className="animate-fade-in-up">
              <WordCard
                w={lookupResult}
                saved={isSaved(lookupResult.word)}
                saving={savingWord === lookupResult.word}
                onSave={() => onSave(lookupResult)}
              />
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>

      {/* Search */}
      <div className="relative">
        <Search
          className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t("wordbook.searchPlaceholder")}
          aria-label={t("wordbook.searchAria")}
          className="h-11 rounded-xl pl-9"
        />
      </div>

      {/* List header */}
      {words && words.length > 0 && (
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold">📚 {t("wordbook.yourWords")}</h2>
          <Badge className="border-emerald-200/70 bg-emerald-500/10 text-xs font-semibold text-emerald-700 dark:border-emerald-800/60 dark:text-emerald-300">
            {t("wordbook.count", { n: num(words.length) })}
          </Badge>
        </div>
      )}

      {/* Wordbook error */}
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{t("wordbook.loadErrorTitle")}</AlertTitle>
          <AlertDescription className="flex flex-col items-start gap-2">
            <span>{error}</span>
            <Button size="sm" variant="outline" onClick={onRetry} className="h-9">
              {tCommon("retry")}
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {/* Loading */}
      {!words && !error && (
        <div
          className="space-y-2"
          aria-busy="true"
          aria-label={t("wordbook.loadingAria")}
        >
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-16 rounded-2xl" />
          ))}
        </div>
      )}

      {/* Empty state */}
      {words && words.length === 0 && !error && (
        <EmptyState
          illustration="/illustrations/ill-vocab.webp"
          emoji="📖"
          title={t("wordbook.emptyTitle")}
          description={t("wordbook.emptyDesc")}
          actionLabel={t("wordbook.goDaily")}
          onAction={onGoDaily}
        />
      )}

      {/* No search match */}
      {words && words.length > 0 && filtered && filtered.length === 0 && (
        <div className="premium-card rounded-2xl bg-card p-4 text-center text-sm text-muted-foreground">
          🔍 {t("wordbook.noMatch", { query: search })}
        </div>
      )}

      {/* Saved words list — 2 columns on desktop, taller scroll area */}
      {filtered && filtered.length > 0 && (
        <ul className="nice-scroll grid max-h-96 gap-2 overflow-y-auto pr-1 sm:grid-cols-2 lg:max-h-[34rem] lg:gap-2.5">
          {filtered.map((w) => (
            <li key={w.id}>
              <div className="premium-card flex items-center gap-3 rounded-2xl bg-card p-3 transition-shadow hover:shadow-md">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/90 to-teal-500/90 text-base font-bold text-white uppercase shadow-sm"
                  aria-hidden
                >
                  {w.word.charAt(0)}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">
                    {w.word}
                    {w.partOfSpeech && (
                      <span className="ml-1.5 text-[10px] font-medium text-muted-foreground">
                        ({w.partOfSpeech})
                      </span>
                    )}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">{w.banglaMeaning}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 shrink-0 text-emerald-600 hover:bg-emerald-500/10 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                  onClick={() => speakEnglish(w.word)}
                  aria-label={t("word.hearAria", { word: w.word })}
                >
                  <Volume2 className="h-4.5 w-4.5" aria-hidden />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 shrink-0 text-muted-foreground hover:bg-rose-500/10 hover:text-rose-600 dark:hover:text-rose-400"
                  onClick={() => onDelete(w)}
                  disabled={deletingWord === w.word}
                  aria-label={t("wordbook.deleteAria", { word: w.word })}
                >
                  {deletingWord === w.word ? (
                    <Loader2 className="h-4.5 w-4.5 animate-spin" aria-hidden />
                  ) : (
                    <Trash2 className="h-4.5 w-4.5" aria-hidden />
                  )}
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
