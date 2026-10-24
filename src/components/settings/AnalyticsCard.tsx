"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  BarChart3,
  RefreshCw,
  Users,
  UserPlus,
  Activity,
  CalendarDays,
  MessageSquare,
  Mic,
  BookOpenCheck,
  MonitorSmartphone,
  Loader2,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StatCard from "@/components/shared/StatCard";
import { useToast } from "@/hooks/use-toast";

// Admin analytics dashboard v1 (D2, ROADMAP-60). Rendered ONLY for admins
// (SettingsSection gates it), and the API re-verifies the role server-side —
// the UI is convenience, the 403 is the law.

interface AnalyticsData {
  generatedAt: string;
  users: { total: number; new7: number; new30: number };
  dau: number;
  wau: number;
  mau: number;
  trend: { date: string; devices: number }[];
  sessions: { today: number; avgDurationSec7d: number };
  topSections: { key: string; count: number }[];
  topFeatures: { key: string; count: number }[];
  quiz: { kind: string; count: number; avgPct: number | null }[];
  speaking: { count7d: number; minutes7d: number };
  devices: { key: string; count: number }[];
}

const nf = new Intl.NumberFormat("en-US");

function BarRow({
  label,
  value,
  max,
  suffix,
}: {
  label: string;
  value: number;
  max: number;
  suffix?: string;
}) {
  const pct = max > 0 ? Math.max((value / max) * 100, 6) : 6;
  // Stacked layout (label+value on top, bar underneath) — unlike a
  // label-bar-number flex row it can never collapse: the settings masonry
  // can render these panels anywhere from ~150px to ~500px wide.
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <span className="min-w-0 truncate text-xs font-medium text-muted-foreground">
          {label}
        </span>
        <span className="shrink-0 text-xs font-bold tabular-nums">
          {nf.format(value)}
          {suffix ?? ""}
        </span>
      </div>
      <span className="mt-1 block h-2 overflow-hidden rounded-full bg-muted">
        <span
          className="block h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-600"
          style={{ width: `${pct}%` }}
        />
      </span>
    </div>
  );
}

export default function AnalyticsCard() {
  const t = useTranslations("analytics");
  const { toast } = useToast();
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/analytics", { cache: "no-store" });
      const json = await res.json().catch(() => null);
      if (res.status === 403 || (json && json.ok === false)) {
        throw new Error(json?.error || "forbidden");
      }
      if (!json?.ok || !json?.data) throw new Error("bad payload");
      setData(json.data as AnalyticsData);
    } catch (e) {
      setError(e instanceof Error ? e.message : "error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const refresh = () => {
    load().then(() => {
      if (!error) toast({ title: t("refreshed") });
    });
  };

  const maxTrend = data ? Math.max(...data.trend.map((d) => d.devices), 1) : 1;
  const maxSection = data ? Math.max(...data.topSections.map((s) => s.count), 1) : 1;
  const maxFeature = data ? Math.max(...data.topFeatures.map((f) => f.count), 1) : 1;
  const maxDevice = data ? Math.max(...data.devices.map((d) => d.count), 1) : 1;
  const deviceLabel = (k: string) =>
    k === "m" ? t("deviceMobile") : k === "d" ? t("deviceDesktop") : t("deviceUnknown");

  return (
    <Card className="premium-card border-border/70 rounded-2xl bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/90 to-purple-600/90 text-white shadow-md shadow-violet-500/30 ring-1 ring-inset ring-white/25">
            <BarChart3 className="h-4.5 w-4.5" aria-hidden />
          </span>
          <span className="flex min-w-0 flex-wrap items-center gap-2">
            <span>{t("title")}</span>
            <Badge variant="secondary" className="bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300">
              {t("adminBadge")}
            </Badge>
          </span>
        </CardTitle>
        <CardDescription>{t("desc")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {loading && (
          <div className="flex min-h-40 items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            {t("loading")}
          </div>
        )}

        {!loading && error && (
          <div className="flex min-h-40 flex-col items-center justify-center gap-3 text-center">
            <AlertTriangle className="h-6 w-6 text-amber-500" aria-hidden />
            <p className="text-sm text-muted-foreground">{t("loadError")}</p>
            <Button size="sm" variant="outline" onClick={load} className="min-h-11">
              <RefreshCw className="h-4 w-4" />
              {t("retry")}
            </Button>
          </div>
        )}

        {!loading && data && (
          <>
            {/* Overview stats */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <StatCard icon={Users} value={nf.format(data.users.total)} label={t("statUsers")} tint="emerald" />
              <StatCard icon={UserPlus} value={`+${nf.format(data.users.new7)}`} label={t("statNew7")} tint="teal" />
              <StatCard icon={Activity} value={nf.format(data.dau)} label={t("statDau")} tint="rose" />
              <StatCard icon={CalendarDays} value={nf.format(data.wau)} label={t("statWau")} tint="amber" />
              <StatCard
                icon={MessageSquare}
                value={nf.format(data.sessions.today)}
                label={t("statSessions")}
                tint="orange"
              />
              <StatCard
                icon={Mic}
                value={nf.format(data.speaking.count7d)}
                label={t("statSpeaking")}
                tint="violet"
              />
            </div>

            {/* 14-day active-devices trend (pure CSS bars — no chart dep) */}
            <div className="rounded-2xl border border-border/60 p-4">
              <div className="mb-3 flex items-baseline justify-between gap-2">
                <p className="text-sm font-bold">{t("trendTitle")}</p>
                <p className="text-[11px] text-muted-foreground">{t("trendHint")}</p>
              </div>
              <div className="flex h-24 items-end gap-1.5" role="img" aria-label={t("trendTitle")}>
                {data.trend.map((d) => (
                  <div key={d.date} className="group relative flex h-full flex-1 items-end">
                    <div
                      className="w-full rounded-t-md bg-gradient-to-t from-emerald-500/80 to-teal-400/80 transition-all group-hover:from-emerald-600 group-hover:to-teal-500"
                      style={{ height: `${Math.max((d.devices / maxTrend) * 100, 3)}%` }}
                    />
                    <span className="pointer-events-none absolute -top-7 left-1/2 z-10 -translate-x-1/2 rounded-md border bg-popover px-1.5 py-0.5 text-[10px] font-semibold opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                      {d.date.slice(5)} · {d.devices}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-1.5 flex justify-between text-[10px] text-muted-foreground">
                <span>{data.trend[0]?.date.slice(5)}</span>
                <span>{t("trendToday")}</span>
              </div>
            </div>

            {/* Breakdowns — scrollable lists */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border/60 p-4">
                <p className="mb-3 text-sm font-bold">{t("topSections")}</p>
                {data.topSections.length === 0 ? (
                  <p className="py-4 text-center text-xs text-muted-foreground">{t("empty")}</p>
                ) : (
                  <div className="nice-scroll max-h-56 space-y-2.5 overflow-y-auto pr-1">
                    {data.topSections.map((s) => (
                      <BarRow key={s.key} label={s.key} value={s.count} max={maxSection} />
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-border/60 p-4">
                <p className="mb-3 text-sm font-bold">{t("topFeatures")}</p>
                {data.topFeatures.length === 0 ? (
                  <p className="py-4 text-center text-xs text-muted-foreground">{t("empty")}</p>
                ) : (
                  <div className="nice-scroll max-h-56 space-y-2.5 overflow-y-auto pr-1">
                    {data.topFeatures.map((f) => (
                      <BarRow key={f.key} label={f.key} value={f.count} max={maxFeature} />
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-border/60 p-4">
                <p className="mb-3 text-sm font-bold">{t("quizTitle")}</p>
                {data.quiz.length === 0 ? (
                  <p className="py-4 text-center text-xs text-muted-foreground">{t("empty")}</p>
                ) : (
                  <div className="nice-scroll max-h-56 space-y-2.5 overflow-y-auto pr-1">
                    {data.quiz.map((q) => (
                      <BarRow
                        key={q.kind}
                        label={q.kind}
                        value={q.count}
                        max={maxSection /* reuse the count scale visually */}
                        suffix={q.avgPct == null ? "" : ` · ${q.avgPct}%`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-border/60 p-4">
                <p className="mb-3 flex items-center gap-1.5 text-sm font-bold">
                  <MonitorSmartphone className="h-4 w-4" aria-hidden />
                  {t("devicesTitle")}
                </p>
                {data.devices.length === 0 ? (
                  <p className="py-4 text-center text-xs text-muted-foreground">{t("empty")}</p>
                ) : (
                  <div className="space-y-2.5">
                    {data.devices.map((d) => (
                      <BarRow key={d.key} label={deviceLabel(d.key)} value={d.count} max={maxDevice} />
                    ))}
                  </div>
                )}
                <div className="mt-3 space-y-1 border-t border-border/60 pt-3 text-xs text-muted-foreground">
                  <p>
                    {t("avgSession")}:{" "}
                    <span className="font-bold text-foreground">
                      {data.sessions.avgDurationSec7d >= 60
                        ? `${Math.round(data.sessions.avgDurationSec7d / 60)} ${t("minUnit")}`
                        : `${data.sessions.avgDurationSec7d} ${t("secUnit")}`}
                    </span>
                  </p>
                  <p>
                    {t("speakingMinutes")}:{" "}
                    <span className="font-bold text-foreground">
                      {nf.format(data.speaking.minutes7d)} {t("minUnit")}
                    </span>
                  </p>
                  <p>
                    {t("newUsers30")}:{" "}
                    <span className="font-bold text-foreground">+{nf.format(data.users.new30)}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2">
              <p className="text-[11px] text-muted-foreground">
                {t("updated")}: {new Date(data.generatedAt).toLocaleTimeString()}
              </p>
              <Button size="sm" variant="outline" onClick={refresh} disabled={loading} className="min-h-11 sm:min-h-9">
                <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                {t("refresh")}
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
