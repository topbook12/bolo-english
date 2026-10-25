"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  ClipboardList,
  RefreshCw,
  Loader2,
  AlertTriangle,
  UserPlus,
  Radio,
  ListChecks,
  PhoneCall,
  Gauge,
  Inbox,
  ShieldAlert,
  CalendarCheck,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { WeekDigest } from "@/lib/digest";

// Admin weekly digest card (D6, ROADMAP-60). Rendered ONLY for admins
// (SettingsSection gates it); the API re-verifies server-side.
// Shows the live-computed last-7-days digest (same numbers the Monday cron
// freezes into MetricDigest for the week report).

interface DigestResp {
  ok: boolean;
  digest: WeekDigest;
  saved: { weekKey: string; updatedAt: string } | null;
}

function formatWhen(iso: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? "—"
    : d.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
}

export default function WeeklyDigestCard() {
  const t = useTranslations("digest");
  const [resp, setResp] = useState<DigestResp | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/digest", { cache: "no-store" });
      const json = await res.json().catch(() => null);
      if (res.status === 403 || (json && json.ok === false)) {
        throw new Error(json?.error || "forbidden");
      }
      if (!json?.ok) throw new Error("bad payload");
      setResp(json as DigestResp);
    } catch (e) {
      setError(e instanceof Error ? e.message : "error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const d = resp?.digest;
  const stat = (
    icon: React.ComponentType<{ className?: string }>,
    label: string,
    value: string,
    tint: string
  ) => (
    <div className="rounded-xl border border-border/60 p-3">
      <p className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
        {(() => {
          const Icon = icon;
          return <Icon className="h-3.5 w-3.5" aria-hidden />;
        })()}
        <span className="truncate">{label}</span>
      </p>
      <p className={`mt-1 text-2xl font-bold tabular-nums ${tint}`}>{value}</p>
    </div>
  );

  return (
    <Card className="premium-card border-border/70 rounded-2xl bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/90 to-cyan-600/90 text-white shadow-md shadow-sky-500/30 ring-1 ring-inset ring-white/25">
            <ClipboardList className="h-4.5 w-4.5" aria-hidden />
          </span>
          <span className="flex min-w-0 flex-wrap items-center gap-2">
            <span>{t("title")}</span>
            {d && (
              <Badge
                variant="secondary"
                className="bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300"
              >
                {d.weekKey}
              </Badge>
            )}
          </span>
        </CardTitle>
        <CardDescription>{t("desc")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {loading && (
          <div className="flex min-h-24 items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            {t("loading")}
          </div>
        )}

        {!loading && error && (
          <div className="flex min-h-24 flex-col items-center justify-center gap-3 text-center">
            <AlertTriangle className="h-6 w-6 text-amber-500" aria-hidden />
            <p className="text-sm text-muted-foreground">{t("loadError")}</p>
            <Button size="sm" variant="outline" onClick={() => void load()} className="min-h-11">
              <RefreshCw className="h-4 w-4" />
              {t("retry")}
            </Button>
          </div>
        )}

        {!loading && !error && d && (
          <>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stat(UserPlus, t("users.total"), String(d.users.total), "text-foreground")}
              {stat(Sparkles, t("users.new7"), String(d.users.new7), "text-emerald-600 dark:text-emerald-400")}
              {stat(Radio, t("active.week"), String(d.active.weekDevices), "text-foreground")}
              {stat(ShieldAlert, t("errors.last24h"), String(d.errors.last24h), d.errors.last24h > 0 ? "text-rose-600 dark:text-rose-400" : "text-emerald-600 dark:text-emerald-400")}
              {stat(ListChecks, t("learning.quiz7"), String(d.learning.quiz7.count), "text-foreground")}
              {stat(PhoneCall, t("learning.speaking7"), String(d.learning.speaking7.count), "text-foreground")}
              {stat(Gauge, t("sentiment.nps"), d.sentiment.nps7.score === null ? "—" : String(d.sentiment.nps7.score), "text-foreground")}
              {stat(Inbox, t("feedback.new7"), String(d.feedback.new7), "text-foreground")}
            </div>

            {/* Sub-details */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border/60 p-3.5">
                <p className="text-xs font-semibold text-muted-foreground">{t("quality.title")}</p>
                <ul className="mt-1.5 space-y-1 text-xs">
                  <li className="flex justify-between gap-2">
                    <span>{t("quality.quizAvg")}</span>
                    <span className="font-semibold tabular-nums">
                      {d.learning.quiz7.avgRatio === null ? "—" : `${Math.round(d.learning.quiz7.avgRatio * 100)}%`}
                    </span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>{t("quality.speakingMin")}</span>
                    <span className="font-semibold tabular-nums">{d.learning.speaking7.minutes ?? "—"}</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>{t("quality.speakingAvg")}</span>
                    <span className="font-semibold tabular-nums">
                      {d.sentiment.speaking.avg === null ? "—" : `${d.sentiment.speaking.avg}/5`}
                    </span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>{t("quality.aiCalls")}</span>
                    <span className="font-semibold tabular-nums">{d.learning.aiCalls7}</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>{t("quality.errors7")}</span>
                    <span className="font-semibold tabular-nums">{d.errors.last7}</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-border/60 p-3.5">
                <p className="text-xs font-semibold text-muted-foreground">{t("top.title")}</p>
                {d.topSections.length === 0 ? (
                  <p className="mt-2 text-xs text-muted-foreground">{t("top.empty")}</p>
                ) : (
                  <ul className="mt-1.5 space-y-1 text-xs">
                    {d.topSections.map((s) => (
                      <li key={s.kind} className="flex justify-between gap-2">
                        <span className="truncate font-mono">{s.kind}</span>
                        <span className="font-semibold tabular-nums">{s.n}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <CalendarCheck className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {t("savedNote", {
                key: resp?.saved?.weekKey ?? "—",
                when: formatWhen(resp?.saved?.updatedAt ?? null),
              })}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
