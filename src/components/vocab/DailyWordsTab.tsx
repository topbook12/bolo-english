"use client";

import { useCallback, useEffect, useState } from "react";
import { AlertCircle, CalendarDays, Flame, Target } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { apiGet } from "@/lib/client-api";
import { track } from "@/lib/track";
import type { DailyWord } from "@/lib/types";
import WordCard from "./WordCard";

interface DailyWordsTabProps {
  deviceId: string;
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

// Tab 1 — আজকের শব্দ: served from the site's own static trilingual word bank
// (src/lib/daily-words.ts) — completely keyless, we just fetch by deviceId so
// the server can read the saved level.

// ── D23: word-of-day streak (localStorage, device-local) ──
// Consecutive days the learner OPENS the daily words. Client-local calendar
// day (timezone-safe, like the D11 streak — the timezone itself is never
// stored). `wod_open` fires once per day (deduped by the day key).
const WOD_KEY = "bolo_wod_streak";

function localDay(d: Date): string {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function markWodVisit(): number {
  if (typeof window === "undefined") return 0;
  const today = localDay(new Date());
  let prev: { last?: string; count?: number } = {};
  try {
    prev = JSON.parse(localStorage.getItem(WOD_KEY) ?? "{}") as { last?: string; count?: number };
  } catch {
    prev = {};
  }
  if (prev.last === today) return prev.count ?? 0; // already marked today
  const yesterday = localDay(new Date(Date.now() - 86_400_000));
  const count = prev.last === yesterday ? (prev.count ?? 0) + 1 : 1;
  try {
    localStorage.setItem(WOD_KEY, JSON.stringify({ last: today, count }));
  } catch {
    /* private mode — streak just stays session-less */
  }
  track("wod_open", { streak: count });
  return count;
}
export default function DailyWordsTab({
  deviceId,
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
  const [streak, setStreak] = useState(0);

  // Word-of-day streak: marked once per local day, tracked client-side.
  useEffect(() => {
    if (!deviceLoaded || !deviceId) return;
    const queue = queueMicrotask(() => {
      setStreak(markWodVisit());
    });
    return queue;
  }, [deviceLoaded, deviceId]);

  // No synchronous setState here (loading = !data && !error) — matches the lint rule
  const load = useCallback(() => {
    if (!deviceId) return;
    apiGet<DailyResponse>(`/api/vocab/daily?deviceId=${encodeURIComponent(deviceId)}`)
      .then((d) => {
        setData(d);
        setError(null);
      })
      .catch((e) => setError((e as Error).message));
  }, [deviceId]);

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

  // Waiting for the device store to hydrate → skeleton
  if (!deviceLoaded || !deviceId) return skeletons;

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
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/90 to-teal-600/90 text-emerald-50 shadow-md ring-1 ring-inset ring-white/25">
            <CalendarDays className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">
              📅 {t("daily.dateLabel", { date: data.date })}
            </p>
            <p className="truncate text-xs text-muted-foreground">{t("daily.dailyNote")}</p>
          </div>
        </div>
        {streak > 1 && (
          <span
            className="flex h-10 shrink-0 items-center gap-1 rounded-xl border border-orange-300/70 bg-orange-500/10 px-2.5 text-xs font-bold text-orange-700 dark:border-orange-800/60 dark:bg-orange-950/40 dark:text-orange-300"
            title={t("daily.streakAria", { n: streak })}
          >
            <Flame className="h-4 w-4" aria-hidden />
            {t("daily.streakLabel", { n: streak })}
          </span>
        )}
        <Button
          size="sm"
          className="btn-shine h-11 gap-1.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 px-4 text-white shadow-md shadow-emerald-500/25 hover:from-emerald-600 hover:to-teal-700"
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
