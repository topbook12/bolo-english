"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Trophy, Medal, Flame, Coins, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { apiGet } from "@/lib/client-api";
import { useDevice } from "@/hooks/use-device";
import { track } from "@/lib/track";
import { cn } from "@/lib/utils";

// ─── Leaderboard (D30, ROADMAP-60) ──────────────────────────────────────────
// Weekly / all-time XP board. Privacy-safe by construction (the SERVER sends
// first name + initial only), leagues as weekly badges (gold/silver/wood).

type Range = "week" | "all";

interface Entry {
  rank: number;
  name: string;
  xp: number;
  league: "wood" | "silver" | "gold";
  isMe: boolean;
}

interface BoardData {
  range: Range;
  learners: number;
  top: Entry[];
  me: { rank: number; name: string; xp: number; league: Entry["league"] } | null;
}

const LEAGUE_BADGE: Record<Entry["league"], string> = {
  gold: "bg-gradient-to-br from-amber-400 to-yellow-600 text-white shadow-amber-500/30",
  silver: "bg-gradient-to-br from-slate-300 to-slate-500 text-slate-900 shadow-slate-500/30",
  wood: "bg-gradient-to-br from-orange-200 to-amber-700/80 text-amber-950 shadow-amber-700/20",
};

const RANK_MEDAL = ["🥇", "🥈", "🥉"];

export default function LeaderboardCard() {
  const t = useTranslations("community.leaderboard");
  const { deviceId } = useDevice();
  const [range, setRange] = useState<Range>("week");
  const [data, setData] = useState<BoardData | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(
    async (r: Range) => {
      if (!deviceId) return;
      setLoading(true);
      try {
        const d = await apiGet<BoardData>(`/api/leaderboard?deviceId=${encodeURIComponent(deviceId)}&range=${r}`);
        setData(d);
        track("leaderboard_view", { range: r });
      } catch {
        setData({ range: r, learners: 0, top: [], me: null });
      } finally {
        setLoading(false);
      }
    },
    [deviceId]
  );

  useEffect(() => {
    void load(range);
  }, [deviceId, range, load]);

  const switchRange = (r: Range) => {
    if (r !== range) setRange(r);
  };

  return (
    <Card className="premium-card animate-fade-in-up rounded-2xl border-border/70 bg-card">
      <CardContent className="space-y-4 p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/90 to-orange-600/90 text-white shadow-md shadow-amber-500/30">
              <Trophy className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-sm font-bold sm:text-base">{t("title")}</h3>
              <p className="text-xs text-muted-foreground">{t("subtitle")}</p>
            </div>
          </div>
          {/* week/all segmented toggle */}
          <div role="tablist" aria-label={t("title")} className="flex rounded-xl border border-border/70 bg-muted/40 p-1">
            {(["week", "all"] as Range[]).map((r) => (
              <button
                key={r}
                role="tab"
                aria-selected={range === r}
                onClick={() => switchRange(r)}
                className={cn(
                  "min-h-9 rounded-lg px-3 text-xs font-semibold transition-colors",
                  range === r
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {r === "week" ? t("tabWeek") : t("tabAll")}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="space-y-2" aria-busy="true">
            {[0, 1, 2].map((i) => (
              <Skeleton key={i} className="h-12 w-full rounded-xl" />
            ))}
          </div>
        ) : !data || data.top.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border/80 bg-card/50 px-4 py-6 text-center text-sm text-muted-foreground">
            {t("empty")}
          </p>
        ) : (
          <ol className="space-y-1.5" aria-label={t("aria")}>
            {data.top.map((e) => (
              <li
                key={`${e.rank}-${e.name}`}
                className={cn(
                  "flex items-center gap-3 rounded-xl border px-3 py-2 transition-colors",
                  e.isMe
                    ? "border-emerald-500/40 bg-emerald-500/10 dark:border-emerald-400/30"
                    : "border-transparent bg-muted/30 hover:bg-muted/50"
                )}
              >
                <span className="w-8 shrink-0 text-center text-sm font-bold tabular-nums text-muted-foreground">
                  {e.rank <= 3 ? RANK_MEDAL[e.rank - 1] : e.rank}
                </span>
                <span className="min-w-0 flex-1 truncate text-sm font-semibold">
                  {e.name}
                  {e.isMe && <span className="ml-1.5 rounded-md bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-300">{t("me")}</span>}
                </span>
                {/* league badge — always THIS week's league */}
                <span
                  title={t(e.league === "gold" ? "leagueGold" : e.league === "silver" ? "leagueSilver" : "leagueWood")}
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[10px] font-black uppercase shadow-sm",
                    LEAGUE_BADGE[e.league]
                  )}
                  aria-label={t(e.league === "gold" ? "leagueGold" : e.league === "silver" ? "leagueSilver" : "leagueWood")}
                >
                  {e.league === "gold" ? "G" : e.league === "silver" ? "S" : "W"}
                </span>
                <span className="flex shrink-0 items-center gap-1 text-sm font-bold tabular-nums">
                  <Coins className="h-3.5 w-3.5 text-amber-500" aria-hidden="true" />
                  {e.xp}
                </span>
              </li>
            ))}
          </ol>
        )}

        {/* my strip — even when outside the visible top */}
        {data?.me && !data.top.some((e) => e.isMe) && (
          <div className="flex items-center gap-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2">
            <Medal className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            <p className="min-w-0 flex-1 truncate text-sm font-semibold">
              {t("youAre", { rank: data.me.rank, n: data.me.xp })}
            </p>
            <span className={cn("flex h-6 w-6 items-center justify-center rounded-lg text-[10px] font-black uppercase shadow-sm", LEAGUE_BADGE[data.me.league])}>
              {data.me.league === "gold" ? "G" : data.me.league === "silver" ? "S" : "W"}
            </span>
          </div>
        )}

        <div className="flex items-start justify-between gap-3">
          <p className="flex items-start gap-1.5 text-[11px] leading-relaxed text-muted-foreground">
            <Flame className="mt-0.5 h-3 w-3 shrink-0 text-amber-500" aria-hidden="true" />
            {t("howLeague")}
          </p>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 shrink-0 gap-1 rounded-lg text-muted-foreground"
            onClick={() => void load(range)}
            aria-label={t("aria")}
          >
            <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
          </Button>
        </div>
        <p className="text-[11px] text-muted-foreground">
          {data ? t("learners", { n: data.learners }) : ""} · {t("privacyNote")}
        </p>
      </CardContent>
    </Card>
  );
}
