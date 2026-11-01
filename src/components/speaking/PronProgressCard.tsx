"use client";

// ─── Pronunciation progress card (Backlog A3 — শেখার গভীরতা) ────────────────
// Reads the device-local attempt history (src/lib/pron-history.ts) and shows:
//   • a score-trend chart (last 20 attempts, recharts — same lib as Progress)
//   • average / best / first-vs-recent delta
//   • the weak-word list (words most often MISSED across attempts) with
//     one-tap "drill" jumps back into the practice card above
//   • an auto-generated drill suggestion
// 100% offline-friendly: history never leaves the device.

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import {
  ArrowDownRight,
  ArrowUpRight,
  LineChart as LineChartIcon,
  Minus,
  Target,
  Volume2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip as ReTooltip,
} from "recharts";
import { useDeviceValue } from "@/hooks/use-device";
import { speakEnglish } from "@/components/vocab/speech";
import { PRON_EXERCISES } from "@/lib/pron-bank";
import {
  loadPronHistory,
  weakWords,
  trendSeries,
  pronStats,
  clearPronHistory,
  type PronAttempt,
} from "@/lib/pron-history";

const SELECT_EVENT = "bolo:pron-select";

export default function PronProgressCard() {
  const t = useTranslations("speaking.pronProgress");
  const level = useDeviceValue((s) => s.level, "beginner");
  const [history, setHistory] = useState<PronAttempt[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Load once, then refresh whenever a NEW attempt lands (the practice card
  // dispatches bolo:pron-attempt after storing it).
  useEffect(() => {
    queueMicrotask(() => {
      setHistory(loadPronHistory());
      setLoaded(true);
    });
    function onAttempt() {
      setHistory(loadPronHistory());
    }
    window.addEventListener("bolo:pron-attempt", onAttempt as EventListener);
    return () => window.removeEventListener("bolo:pron-attempt", onAttempt as EventListener);
  }, []);

  const stats = useMemo(() => pronStats(history), [history]);
  const weak = useMemo(() => weakWords(history, 6), [history]);
  const series = useMemo(
    () =>
      trendSeries(history, 20).map((p, i) => ({
        n: i + 1,
        score: p.score,
      })),
    [history]
  );

  /** One-tap drill: find an exercise containing the weak word (current level
   *  first) and tell the practice card to select it; always speak the word. */
  function drillWord(word: string) {
    speakEnglish(word);
    const inLevel = PRON_EXERCISES.filter((e) => e.level === level);
    const pool = inLevel.length > 0 ? inLevel : PRON_EXERCISES;
    const target = pool.find((e) =>
      e.text.toLowerCase().split(/\W+/).includes(word.toLowerCase())
    );
    if (target) {
      window.dispatchEvent(new CustomEvent(SELECT_EVENT, { detail: { exId: target.id } }));
    }
  }

  return (
    <Card className="premium-card rounded-2xl border-border/70 bg-card">
      <CardContent className="space-y-4 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="flex items-center gap-1.5 text-sm font-bold">
              <LineChartIcon className="h-4 w-4 text-rose-500" aria-hidden="true" />
              {t("title")}
            </p>
            <p className="text-xs text-muted-foreground">{t("desc")}</p>
          </div>
        </div>

        {!loaded || history.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border/70 p-4 text-center text-xs leading-relaxed text-muted-foreground">
            {t("empty")}
          </p>
        ) : (
          <>
            {/* stat chips */}
            <div className="grid grid-cols-4 gap-2">
              <div className="rounded-xl border border-border/50 p-2.5 text-center">
                <p className="text-lg font-bold tabular-nums">{stats.attempts}</p>
                <p className="text-[10px] leading-tight text-muted-foreground">{t("stat.attempts")}</p>
              </div>
              <div className="rounded-xl border border-border/50 p-2.5 text-center">
                <p className="text-lg font-bold tabular-nums">{stats.avg}%</p>
                <p className="text-[10px] leading-tight text-muted-foreground">{t("stat.avg")}</p>
              </div>
              <div className="rounded-xl border border-border/50 p-2.5 text-center">
                <p className="text-lg font-bold tabular-nums text-emerald-600 dark:text-emerald-400">{stats.best}%</p>
                <p className="text-[10px] leading-tight text-muted-foreground">{t("stat.best")}</p>
              </div>
              <div className="rounded-xl border border-border/50 p-2.5 text-center">
                <p
                  className={`flex items-center justify-center gap-0.5 text-lg font-bold tabular-nums ${
                    stats.delta > 2
                      ? "text-emerald-600 dark:text-emerald-400"
                      : stats.delta < -2
                        ? "text-rose-600 dark:text-rose-400"
                        : ""
                  }`}
                >
                  {stats.delta > 2 ? (
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  ) : stats.delta < -2 ? (
                    <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Minus className="h-4 w-4" aria-hidden="true" />
                  )}
                  {Math.abs(stats.delta)}
                </p>
                <p className="text-[10px] leading-tight text-muted-foreground">{t("stat.delta")}</p>
              </div>
            </div>

            {/* trend chart */}
            {series.length >= 2 && (
              <div className="h-40 w-full rounded-xl border border-border/50 p-2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={series} margin={{ top: 8, right: 8, bottom: 0, left: -20 }}>
                    <defs>
                      <linearGradient id="pronGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f43f5e" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="#f43f5e" stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="n"
                      tick={{ fontSize: 10 }}
                      stroke="currentColor"
                      className="text-muted-foreground"
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      domain={[0, 100]}
                      tick={{ fontSize: 10 }}
                      stroke="currentColor"
                      className="text-muted-foreground"
                      tickLine={false}
                      axisLine={false}
                    />
                    <ReTooltip
                      formatter={(value: number) => [`${value}%`, t("chart.tooltip")]}
                      labelFormatter={(label: number) => t("chart.attempt", { n: label })}
                      contentStyle={{
                        borderRadius: 12,
                        border: "1px solid var(--border)",
                        fontSize: 12,
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="score"
                      stroke="#f43f5e"
                      strokeWidth={2}
                      fill="url(#pronGrad)"
                      isAnimationActive={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* weak words */}
            {weak.length > 0 && (
              <div className="space-y-2">
                <p className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                  <Target className="h-3.5 w-3.5 text-rose-500" aria-hidden="true" />
                  {t("weak.title")}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {weak.map((w) => (
                    <button
                      key={w.word}
                      type="button"
                      onClick={() => drillWord(w.word)}
                      className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-rose-300/60 bg-rose-500/5 px-3 py-1.5 text-xs font-medium text-rose-700 transition-colors hover:bg-rose-500/15 dark:text-rose-300"
                      title={t("weak.drillTip")}
                    >
                      <Volume2 className="h-3 w-3" aria-hidden="true" />
                      {w.word}
                      <span className="text-[10px] tabular-nums opacity-70">
                        {Math.round(w.missRate * 100)}%
                      </span>
                    </button>
                  ))}
                </div>
                <p className="text-[11px] leading-relaxed text-muted-foreground">
                  <Badge variant="outline" className="mr-1 text-[10px]">
                    {t("weak.drillBadge")}
                  </Badge>
                  {t("weak.drillHint")}
                </p>
              </div>
            )}

            {/* auto drill suggestion */}
            <p className="rounded-xl border border-amber-300/60 bg-amber-50 p-3 text-xs leading-relaxed dark:border-amber-900/60 dark:bg-amber-950/30">
              {weak.length > 0
                ? t("suggestion.words", { words: weak.slice(0, 3).map((w) => w.word).join(", ") })
                : stats.avg >= 85
                  ? t("suggestion.great")
                  : t("suggestion.more")}
            </p>

            <div className="flex justify-end">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  clearPronHistory();
                  setHistory([]);
                }}
                className="min-h-9 text-[11px] text-muted-foreground"
              >
                {t("clear")}
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
