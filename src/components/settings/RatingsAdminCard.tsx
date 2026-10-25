"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Star,
  RefreshCw,
  Loader2,
  AlertTriangle,
  Gauge,
  PhoneCall,
  ListChecks,
  MessageSquareQuote,
  Trash2,
  TrendingUp,
  Minus,
  TrendingDown,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Admin ratings overview (D4, ROADMAP-60). Rendered ONLY for admins
// (SettingsSection gates it); the API re-verifies server-side — the UI is
// convenience, the 403 is the law.
//
// Shows: NPS score + promoter/passive/detractor split, per-kind averages
// (speaking/quiz), and the latest comments with two-step delete.

interface KindStat {
  kind: string;
  count: number;
  avg: number | null;
}

interface NpsAgg {
  score: number | null;
  total: number;
  promoters: number;
  passives: number;
  detractors: number;
}

interface RecentComment {
  id: string;
  kind: string;
  score: number;
  comment: string;
  context: string;
  createdAt: string;
}

interface RatingAgg {
  ok: boolean;
  kindStats: KindStat[];
  nps: NpsAgg;
  recent: RecentComment[];
}

function npsTone(score: number | null): { Icon: typeof TrendingUp; color: string; label: string } {
  if (score === null) return { Icon: Minus, color: "text-muted-foreground", label: "" };
  if (score > 0) return { Icon: TrendingUp, color: "text-emerald-600 dark:text-emerald-400", label: "great" };
  if (score === 0) return { Icon: Minus, color: "text-amber-600 dark:text-amber-400", label: "ok" };
  return { Icon: TrendingDown, color: "text-rose-600 dark:text-rose-400", label: "poor" };
}

function formatWhen(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? "—"
    : d.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
}

export default function RatingsAdminCard() {
  const t = useTranslations("rating");
  const { toast } = useToast();
  const [agg, setAgg] = useState<RatingAgg | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actingId, setActingId] = useState<string | null>(null);
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const confirmTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/rating", { cache: "no-store" });
      const json = await res.json().catch(() => null);
      if (res.status === 403 || (json && json.ok === false)) {
        throw new Error(json?.error || "forbidden");
      }
      if (!json?.ok) throw new Error("bad payload");
      setAgg(json as RatingAgg);
    } catch (e) {
      setError(e instanceof Error ? e.message : "error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    return () => {
      if (confirmTimer.current) clearTimeout(confirmTimer.current);
    };
  }, []);

  const armDelete = (id: string) => {
    setConfirmId(id);
    if (confirmTimer.current) clearTimeout(confirmTimer.current);
    confirmTimer.current = setTimeout(() => setConfirmId(null), 3000);
  };

  const remove = async (id: string) => {
    setActingId(id);
    setConfirmId(null);
    try {
      const res = await fetch("/api/rating", {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const json = await res.json().catch(() => null);
      if (res.ok && json?.ok) {
        toast({ title: t("admin.deleted") });
        await load();
      } else {
        toast({ title: t("admin.actionFailed"), variant: "destructive" });
      }
    } catch {
      toast({ title: t("admin.actionFailed"), variant: "destructive" });
    } finally {
      setActingId(null);
    }
  };

  const statOf = (kind: string): KindStat | undefined =>
    agg?.kindStats.find((k) => k.kind === kind);

  const speaking = statOf("speaking");
  const quiz = statOf("quiz");
  const nps = agg?.nps;
  const tone = npsTone(nps?.score ?? null);
  const ToneIcon = tone.Icon;

  return (
    <Card className="premium-card border-border/70 rounded-2xl bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500/90 to-pink-600/90 text-white shadow-md shadow-rose-500/30 ring-1 ring-inset ring-white/25">
            <Star className="h-4.5 w-4.5" aria-hidden />
          </span>
          <span className="flex min-w-0 flex-wrap items-center gap-2">
            <span>{t("admin.title")}</span>
            <Badge
              variant="secondary"
              className="bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"
            >
              {t("admin.badge")}
            </Badge>
          </span>
        </CardTitle>
        <CardDescription>{t("admin.desc")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {loading && (
          <div className="flex min-h-32 items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            {t("admin.loading")}
          </div>
        )}

        {!loading && error && (
          <div className="flex min-h-32 flex-col items-center justify-center gap-3 text-center">
            <AlertTriangle className="h-6 w-6 text-amber-500" aria-hidden />
            <p className="text-sm text-muted-foreground">{t("admin.loadError")}</p>
            <Button size="sm" variant="outline" onClick={() => void load()} className="min-h-11">
              <RefreshCw className="h-4 w-4" />
              {t("admin.retry")}
            </Button>
          </div>
        )}

        {!loading && !error && agg && (
          <>
            {/* Stat row: NPS + per-kind averages */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-border/60 p-4">
                <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <Gauge className="h-3.5 w-3.5" aria-hidden />
                  {t("admin.npsScore")}
                </p>
                <p className={cn("mt-1 text-3xl font-bold tabular-nums", tone.color)}>
                  {nps?.score === null || nps?.score === undefined ? "—" : nps.score}
                </p>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  {t("admin.npsBase", { n: nps?.total ?? 0 })}
                </p>
              </div>
              <div className="rounded-xl border border-border/60 p-4">
                <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <PhoneCall className="h-3.5 w-3.5" aria-hidden />
                  {t("admin.speakingAvg")}
                </p>
                <p className="mt-1 text-3xl font-bold tabular-nums">
                  {speaking?.avg ?? "—"}
                  <span className="text-base font-medium text-muted-foreground">/5</span>
                </p>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  {t("admin.count", { n: speaking?.count ?? 0 })}
                </p>
              </div>
              <div className="rounded-xl border border-border/60 p-4">
                <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <ListChecks className="h-3.5 w-3.5" aria-hidden />
                  {t("admin.quizAvg")}
                </p>
                <p className="mt-1 text-3xl font-bold tabular-nums">
                  {quiz?.avg ?? "—"}
                  <span className="text-base font-medium text-muted-foreground">/5</span>
                </p>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  {t("admin.count", { n: quiz?.count ?? 0 })}
                </p>
              </div>
            </div>

            {/* NPS breakdown — only meaningful when there are NPS responses */}
            {(nps?.total ?? 0) > 0 && (
              <div className="grid grid-cols-3 gap-2 rounded-xl border border-border/60 p-3">
                <div className="text-center">
                  <p className="flex items-center justify-center gap-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                    <TrendingUp className="h-3.5 w-3.5" aria-hidden />
                    {t("admin.promoters")}
                  </p>
                  <p className="mt-0.5 text-lg font-bold tabular-nums">{nps?.promoters}</p>
                </div>
                <div className="text-center">
                  <p className="flex items-center justify-center gap-1 text-xs font-medium text-amber-700 dark:text-amber-400">
                    <Minus className="h-3.5 w-3.5" aria-hidden />
                    {t("admin.passives")}
                  </p>
                  <p className="mt-0.5 text-lg font-bold tabular-nums">{nps?.passives}</p>
                </div>
                <div className="text-center">
                  <p className="flex items-center justify-center gap-1 text-xs font-medium text-rose-700 dark:text-rose-400">
                    <TrendingDown className="h-3.5 w-3.5" aria-hidden />
                    {t("admin.detractors")}
                  </p>
                  <p className="mt-0.5 text-lg font-bold tabular-nums">{nps?.detractors}</p>
                </div>
              </div>
            )}

            {/* Recent comments */}
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-1.5 text-sm font-semibold">
                <MessageSquareQuote className="h-4 w-4 text-muted-foreground" aria-hidden />
                {t("admin.recent")}
              </p>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => void load()}
                className="min-h-9 gap-1.5 text-xs"
              >
                <RefreshCw className="h-3.5 w-3.5" aria-hidden />
                {t("admin.refresh")}
              </Button>
            </div>

            {(agg.recent?.length ?? 0) === 0 ? (
              <p className="py-6 text-center text-sm text-muted-foreground">
                {t("admin.empty")}
              </p>
            ) : (
              <div className="nice-scroll max-h-96 space-y-3 overflow-y-auto pr-1">
                {agg.recent.map((item) => {
                  const acting = actingId === item.id;
                  return (
                    <div
                      key={item.id}
                      className="rounded-xl border border-border/60 p-3.5 transition-shadow hover:shadow-sm"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge
                          variant="secondary"
                          className={cn(
                            "gap-1",
                            item.kind === "nps"
                              ? "bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300"
                              : item.kind === "speaking"
                                ? "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"
                                : "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                          )}
                        >
                          <Star className="h-3 w-3" aria-hidden />
                          {t(`admin.kind_${item.kind}`)}
                        </Badge>
                        <Badge variant="outline" className="tabular-nums">
                          {item.kind === "nps" ? `NPS ${item.score}/10` : `${item.score}/5`}
                        </Badge>
                        {item.context && (
                          <span className="max-w-40 truncate font-mono text-[11px] text-muted-foreground">
                            {item.context}
                          </span>
                        )}
                        <span className="ml-auto text-[11px] text-muted-foreground">
                          {formatWhen(item.createdAt)}
                        </span>
                      </div>

                      <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-relaxed">
                        {item.comment}
                      </p>

                      <div className="mt-2.5 flex justify-end">
                        {confirmId === item.id ? (
                          <Button
                            size="sm"
                            variant="destructive"
                            disabled={acting}
                            onClick={() => void remove(item.id)}
                            className="min-h-9 gap-1 px-2.5 text-xs"
                          >
                            <Trash2 className="h-3.5 w-3.5" aria-hidden />
                            {t("admin.confirmDelete")}
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            variant="ghost"
                            disabled={acting}
                            onClick={() => armDelete(item.id)}
                            aria-label={t("admin.delete")}
                            className="min-h-9 gap-1 px-2.5 text-xs text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 className="h-3.5 w-3.5" aria-hidden />
                            {t("admin.delete")}
                          </Button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
