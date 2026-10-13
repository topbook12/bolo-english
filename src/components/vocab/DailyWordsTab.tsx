"use client";

import { useCallback, useEffect, useState } from "react";
import { AlertCircle, CalendarDays, KeyRound, Target } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { apiGet } from "@/lib/client-api";
import type { DailyWord } from "@/lib/types";
import WordCard from "./WordCard";

interface DailyWordsTabProps {
  deviceId: string;
  hasKey: boolean;
  deviceLoaded: boolean;
  isSaved: (word: string) => boolean;
  onSave: (w: DailyWord) => void;
  savingWord: string | null;
  onGoQuiz: () => void;
}

interface DailyResponse {
  date: string;
  words: DailyWord[];
}

// Tab 1 — আজকের শব্দ: server generates 3 words once per day (shared cache), we just fetch.
export default function DailyWordsTab({
  deviceId,
  hasKey,
  deviceLoaded,
  isSaved,
  onSave,
  savingWord,
  onGoQuiz,
}: DailyWordsTabProps) {
  const t = useTranslations("vocab");
  const tCommon = useTranslations("common");
  const [data, setData] = useState<DailyResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  // No synchronous setState here (loading = !data && !error) — matches the lint rule
  const load = useCallback(() => {
    if (!deviceId || !hasKey) return;
    apiGet<DailyResponse>(`/api/vocab/daily?deviceId=${encodeURIComponent(deviceId)}`)
      .then((d) => {
        setData(d);
        setError(null);
      })
      .catch((e) => setError((e as Error).message));
  }, [deviceId, hasKey]);

  useEffect(() => {
    load();
  }, [load]);

  const skeletons = (
    <div
      className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3"
      aria-busy="true"
      aria-label={t("daily.loadingAria")}
    >
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="h-64 rounded-2xl" />
      ))}
    </div>
  );

  // Waiting for the device store to hydrate → skeleton (avoid flashing the key notice)
  if (!deviceLoaded) return skeletons;

  // No API key yet → friendly amber notice
  if (!hasKey) {
    return (
      <div className="flex flex-col gap-3 rounded-2xl border border-amber-300/70 bg-amber-50 p-4 dark:border-amber-800/60 dark:bg-amber-950/40 sm:flex-row sm:items-center sm:gap-4 sm:p-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
          <KeyRound className="h-5 w-5" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-1.5 text-sm font-semibold text-amber-900 dark:text-amber-200">
            🔑 {t("daily.noKeyTitle")}
          </p>
          <p className="mt-0.5 text-xs leading-relaxed text-amber-800/85 dark:text-amber-200/75">
            {t("daily.noKeyDesc")}
          </p>
        </div>
      </div>
    );
  }

  // Fetch error → alert with retry
  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>{t("daily.loadErrorTitle")}</AlertTitle>
        <AlertDescription className="flex flex-col items-start gap-2">
          <span>{error}</span>
          <Button size="sm" variant="outline" onClick={load} className="h-9">
            {tCommon("retry")}
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  // Loading → skeleton (initial fetch or after retry)
  if (!data) return skeletons;

  return (
    <div className="animate-fade-in-up space-y-4">
      {/* Date strip + quiz shortcut */}
      <div className="premium-card flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-card p-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <CalendarDays className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">
              📅 {t("daily.dateLabel", { date: data.date })}
            </p>
            <p className="truncate text-xs text-muted-foreground">{t("daily.dailyNote")}</p>
          </div>
        </div>
        <Button
          size="sm"
          className="btn-shine h-11 gap-1.5 rounded-xl px-4"
          onClick={onGoQuiz}
          aria-label={t("daily.goQuizAria")}
        >
          <Target className="h-4 w-4" aria-hidden />
          {t("daily.goQuiz")}
        </Button>
      </div>

      {/* Words grid 1 / 2 / 3 columns */}
      <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.words.map((w) => (
          <WordCard
            key={w.word}
            w={w}
            saved={isSaved(w.word)}
            saving={savingWord === w.word}
            onSave={() => onSave(w)}
          />
        ))}
      </div>
    </div>
  );
}
