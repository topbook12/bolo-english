"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Bot,
  Activity,
  KeyRound,
  ShieldCheck,
  ShieldAlert,
  Loader2,
  ArrowUpRight,
  ExternalLink,
  Gauge,
  BarChart3,
  LayoutGrid,
  Info,
  RefreshCw,
  Wifi,
  WifiOff,
  Layers,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import SectionHeader from "@/components/shared/SectionHeader";
import KeyPoolCard from "@/components/settings/KeyPoolCard";
import type { TabId } from "@/components/layout/AppShell";
import { useDevice } from "@/hooks/use-device";
import { clientMsg } from "@/lib/api-i18n";

/* ── AI Hub (ব্যাকলগ ক্যাটাগরি "AI ফোকাস") ──────────────────────────────────
 * AI-কে প্রথম-শ্রেণির ট্যাব: কানেকশন স্ট্যাটাস + লাইভ প্রোব, ব্যক্তিগত AI
 * ব্যবহারের হিসাব, সব AI ফিচারের ডিরেক্টরি এবং কী-পুল ম্যানেজমেন্ট (কার্ড
 * পুনঃব্যবহার)। ডেটা: /api/ai/status + /api/ai/usage — কী কখনো ব্রাউজারে
 * আসে না, শুধু মাস্কড প্রিভিউ। */

type PoolSummary = { total: number; healthy: number; cooldown: number; failures: number };

type StatusData = {
  hasKey: boolean;
  source: "pool" | "legacy" | null;
  keyPreview: string | null;
  unreadable: boolean;
  pool?: PoolSummary | null;
  backup?: { available: boolean; name: string } | null;
};

type ProbeData = {
  ok: boolean;
  latencyMs: number;
  model?: string;
  models?: string[];
  code?: string;
  message?: string;
};

type ZaiProbeData = {
  ok: boolean;
  latencyMs: number;
  message?: string;
};

type UsageData = {
  days: number;
  total: number;
  byFeature: { feature: string; count: number }[];
  byDay: { day: string; count: number }[];
};

// Feature → tab registry. Labels come from aiHub.features.<id>; ids not in
// the registry (future features) still appear in "most used" with the raw id.
const AI_FEATURES: { id: string; tab: TabId }[] = [
  { id: "grammar-lesson", tab: "grammar" },
  { id: "grammar-quiz", tab: "grammar" },
  { id: "listening-story", tab: "listening" },
  { id: "vocab-lookup", tab: "vocab" },
  { id: "vocab-quiz", tab: "vocab" },
  { id: "vocab-example", tab: "vocab" },
  { id: "word-lookup", tab: "vocab" },
  { id: "chat-partner", tab: "speaking" },
  { id: "scenario-feedback", tab: "speaking" },
  { id: "simulator-feedback", tab: "speaking" },
  { id: "call-analysis", tab: "speaking" },
  { id: "sentence-check", tab: "writing" },
  { id: "writing-feedback", tab: "writing" },
  { id: "content-ask", tab: "reading" },
  { id: "challenge-feedback", tab: "community" },
];

function featureLabel(tf: (k: string) => string, id: string): string {
  // next-intl returns the full key path when a message is missing — treat
  // that (or a throw) as "no translation" and show the raw feature id.
  try {
    const v = tf(id);
    if (v && !v.includes(".features.") && v !== id) return v;
  } catch {
    /* fall through */
  }
  return id;
}

/** Probe error → localized text (api-i18n catalog), raw message as fallback. */
function probeFailText(p: ProbeData): string {
  if (p.code) {
    try {
      return clientMsg(p.code as never);
    } catch {
      /* unknown code → fall through */
    }
  }
  return p.message ?? "";
}

export default function AiHubSection({ onNavigate }: { onNavigate: (tab: TabId) => void }) {
  const t = useTranslations("aiHub");
  const tf = useTranslations("aiHub.features");
  const { deviceId } = useDevice();

  const [status, setStatus] = useState<StatusData | null>(null);
  const [statusErr, setStatusErr] = useState(false);
  const [probe, setProbe] = useState<ProbeData | null>(null);
  const [zaiProbe, setZaiProbe] = useState<ZaiProbeData | null>(null);
  const [probing, setProbing] = useState(false);
  const [usage, setUsage] = useState<UsageData | null>(null);
  const [usageErr, setUsageErr] = useState(false);
  const [days, setDays] = useState<7 | 30>(7);

  const loadStatus = useCallback(async () => {
    if (!deviceId) return;
    setStatusErr(false);
    try {
      const res = await fetch(`/api/ai/status?deviceId=${encodeURIComponent(deviceId)}`, {
        cache: "no-store",
      });
      const json = await res.json().catch(() => null);
      if (!json?.ok) throw new Error("bad response");
      setStatus(json.data as StatusData);
    } catch {
      setStatusErr(true);
    }
  }, [deviceId]);

  const loadUsage = useCallback(async () => {
    if (!deviceId) return;
    setUsageErr(false);
    try {
      const res = await fetch(
        `/api/ai/usage?deviceId=${encodeURIComponent(deviceId)}&days=${days}`,
        { cache: "no-store" }
      );
      const json = await res.json().catch(() => null);
      if (!json?.ok) throw new Error("bad response");
      setUsage(json.data as UsageData);
    } catch {
      setUsageErr(true);
    }
  }, [deviceId, days]);

  useEffect(() => {
    void loadStatus();
  }, [loadStatus]);
  useEffect(() => {
    void loadUsage();
  }, [loadUsage]);

  const runProbe = async () => {
    if (!deviceId || probing) return;
    setProbing(true);
    setProbe(null);
    setZaiProbe(null);
    try {
      const params = new URLSearchParams({ deviceId, probeBackup: "1" });
      // Gemini probe spends the user's quota — only when a key exists. The
      // backup probe always runs, so keyless users can still test their AI.
      if (status?.hasKey) params.set("probe", "1");
      const res = await fetch(`/api/ai/status?${params.toString()}`, { cache: "no-store" });
      const json = await res.json().catch(() => null);
      const data = json?.ok && json.data ? json.data : null;
      if (data?.probe) setProbe(data.probe as ProbeData);
      else if (status?.hasKey) setProbe({ ok: false, latencyMs: 0, message: t("errors.loadFailed") });
      if (data?.backupProbe) setZaiProbe(data.backupProbe as ZaiProbeData);
      else setZaiProbe({ ok: false, latencyMs: 0, message: t("errors.loadFailed") });
      // Pool health may have changed after a probe (cooldown writes) — refresh.
      void loadStatus();
    } catch {
      if (status?.hasKey) setProbe({ ok: false, latencyMs: 0, message: t("errors.loadFailed") });
      setZaiProbe({ ok: false, latencyMs: 0, message: t("errors.loadFailed") });
    } finally {
      setProbing(false);
    }
  };

  // Full day-window for the chart (honest-empty: zero days stay zero).
  const dayBars = useMemo(() => {
    if (!usage) return [];
    const map = new Map(usage.byDay.map((d) => [d.day, d.count]));
    const out: { day: string; count: number }[] = [];
    const today = new Date();
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(today.getTime() - i * 86_400_000).toISOString().slice(0, 10);
      out.push({ day: d, count: map.get(d) ?? 0 });
    }
    return out;
  }, [usage, days]);
  const maxDay = Math.max(1, ...dayBars.map((d) => d.count));

  const usageFor = useCallback(
    (feature: string) => usage?.byFeature.find((f) => f.feature === feature)?.count ?? 0,
    [usage]
  );

  return (
    <div>
      <SectionHeader icon={Bot} title={t("title")} subtitle={t("subtitle")} tint="violet" />

      <div className="space-y-6 pb-24 md:pb-6">
        {/* ── 1. কানেকশন স্ট্যাটাস ── */}
        <Card className="premium-card rounded-2xl border-border/60 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/90 to-purple-600/90 text-white shadow-md shadow-violet-500/30 ring-1 ring-inset ring-white/25">
                <Activity className="h-4.5 w-4.5" aria-hidden />
              </span>
              {t("conn.title")}
            </CardTitle>
            <CardDescription>{t("conn.desc")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {statusErr ? (
              <div className="flex items-center justify-between gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-3.5">
                <p className="text-sm font-medium text-destructive">{t("errors.loadFailed")}</p>
                <Button size="sm" variant="outline" onClick={() => void loadStatus()} className="min-h-11 gap-1.5 sm:min-h-9">
                  <RefreshCw className="h-3.5 w-3.5" /> {t("conn.probe")}
                </Button>
              </div>
            ) : !status ? (
              <div className="space-y-2.5">
                <Skeleton className="h-9 w-2/3 rounded-lg" />
                <Skeleton className="h-6 w-1/3 rounded-lg" />
              </div>
            ) : (
              <>
                <div className="flex flex-wrap items-center gap-2.5 rounded-xl border border-border/60 bg-muted/40 p-3.5">
                  {status.hasKey ? (
                    <Badge className="gap-1.5 bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      <Wifi className="h-3.5 w-3.5" /> {t("conn.active")}
                    </Badge>
                  ) : (
                    <Badge className="gap-1.5 border-amber-400 bg-amber-50 text-amber-700 dark:border-amber-600 dark:bg-amber-950/50 dark:text-amber-300">
                      <WifiOff className="h-3.5 w-3.5" /> {t("conn.noKey")}
                    </Badge>
                  )}
                  {status.hasKey && status.keyPreview && (
                    <code className="rounded-md bg-background/80 px-2 py-1 font-mono text-xs font-semibold">
                      {status.keyPreview}
                    </code>
                  )}
                  {status.hasKey && status.source && (
                    <Badge variant="outline" className="gap-1 text-[11px]">
                      {status.source === "pool" ? (
                        <>
                          <Layers className="h-3 w-3" /> {t("conn.sourcePool")}
                        </>
                      ) : (
                        <>
                          <KeyRound className="h-3 w-3" /> {t("conn.sourceLegacy")}
                        </>
                      )}
                    </Badge>
                  )}
                  {status.unreadable && (
                    <span className="flex items-center gap-1.5 text-xs font-medium text-destructive">
                      <ShieldAlert className="h-3.5 w-3.5" /> {t("conn.unreadable")}
                    </span>
                  )}
                  {status.backup?.available && (
                    <Badge className="gap-1.5 bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      {t("conn.backupOn", { name: status.backup.name })}
                    </Badge>
                  )}
                </div>
                {status.backup?.available && (
                  <p className="text-xs leading-relaxed text-muted-foreground">{t("conn.backupHint")}</p>
                )}

                {/* পুল সারসংক্ষেপ (লগইন ইউজার) */}
                {status.pool && status.pool.total > 0 && (
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {[
                      { label: t("conn.poolTotal"), value: status.pool.total, cls: "text-foreground" },
                      { label: t("conn.poolHealthy"), value: status.pool.healthy, cls: "text-emerald-600 dark:text-emerald-400" },
                      { label: t("conn.poolCooldown"), value: status.pool.cooldown, cls: "text-amber-600 dark:text-amber-400" },
                      { label: t("conn.poolFailures"), value: status.pool.failures, cls: "text-muted-foreground" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-border/50 bg-background/60 p-3 text-center">
                        <p className={`text-lg font-bold leading-none ${s.cls}`}>{s.value}</p>
                        <p className="mt-1 text-[11px] font-medium text-muted-foreground">{s.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* লাইভ প্রোব */}
                <div className="rounded-xl border border-border/60 bg-muted/40 p-3.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Button
                      onClick={runProbe}
                      disabled={probing}
                      className="min-h-11 gap-1.5 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-md shadow-violet-500/25 hover:from-violet-600 hover:to-purple-700 sm:min-h-10"
                    >
                      {probing ? (
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      ) : (
                        <Gauge className="h-4 w-4" aria-hidden />
                      )}
                      {probing ? t("conn.probing") : t("conn.probe")}
                    </Button>
                    <p className="text-xs text-muted-foreground">{t("conn.probeHint")}</p>
                  </div>

                  {probe && (
                    <div
                      className={`mt-3 space-y-2.5 rounded-lg border p-3 ${
                        probe.ok
                          ? "border-emerald-300/70 bg-emerald-50/70 dark:border-emerald-800 dark:bg-emerald-950/40"
                          : "border-destructive/40 bg-destructive/5"
                      }`}
                      role="status"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        {probe.ok ? (
                          <Badge className="gap-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                            <ShieldCheck className="h-3.5 w-3.5" /> {t("conn.probeOk")}
                          </Badge>
                        ) : (
                          <Badge variant="destructive" className="gap-1">
                            <ShieldAlert className="h-3.5 w-3.5" /> {t("conn.probeFail")}
                          </Badge>
                        )}
                        {probe.ok && (
                          <>
                            <span className="text-xs font-medium text-foreground/80">
                              {t("conn.latency")}:{" "}
                              <strong className="font-mono">{probe.latencyMs} ms</strong>
                            </span>
                            {probe.model && (
                              <span className="text-xs font-medium text-foreground/80">
                                {t("conn.model")}: <strong className="font-mono">{probe.model}</strong>
                              </span>
                            )}
                          </>
                        )}
                      </div>
                      {!probe.ok && probeFailText(probe) && (
                        <p className="text-xs leading-relaxed text-muted-foreground">{probeFailText(probe)}</p>
                      )}
                      {probe.ok && probe.models && probe.models.length > 0 && (
                        <div>
                          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                            {t("conn.models")}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {probe.models.map((m) => (
                              <Badge
                                key={m}
                                variant="outline"
                                className={`font-mono text-[10px] ${m === probe.model ? "border-emerald-400 text-emerald-700 dark:border-emerald-600 dark:text-emerald-300" : ""}`}
                              >
                                {m}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* ব্যাকআপ AI প্রোব ফলাফল */}
                  {zaiProbe && (
                    <div
                      className={`mt-3 flex flex-wrap items-center gap-2 rounded-lg border p-3 ${
                        zaiProbe.ok
                          ? "border-teal-300/70 bg-teal-50/70 dark:border-teal-800 dark:bg-teal-950/40"
                          : "border-destructive/40 bg-destructive/5"
                      }`}
                      role="status"
                    >
                      {zaiProbe.ok ? (
                        <Badge className="gap-1 bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                          <ShieldCheck className="h-3.5 w-3.5" /> {t("conn.backupProbeOk")}
                        </Badge>
                      ) : (
                        <Badge variant="destructive" className="gap-1">
                          <ShieldAlert className="h-3.5 w-3.5" /> {t("conn.backupProbeFail")}
                        </Badge>
                      )}
                      {zaiProbe.ok && (
                        <span className="text-xs font-medium text-foreground/80">
                          {t("conn.latency")}: <strong className="font-mono">{zaiProbe.latencyMs} ms</strong>
                        </span>
                      )}
                      {!zaiProbe.ok && zaiProbe.message && (
                        <p className="text-xs leading-relaxed text-muted-foreground">{zaiProbe.message}</p>
                      )}
                    </div>
                  )}
                </div>

                {!status.hasKey && (
                  <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-amber-300/70 bg-amber-50/70 p-3 dark:border-amber-800 dark:bg-amber-950/40">
                    <p className="text-sm font-medium text-amber-900 dark:text-amber-200">
                      {t("conn.noKeyHint")}
                    </p>
                    <a
                      href="https://aistudio.google.com/apikey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-primary hover:underline sm:min-h-0"
                    >
                      {t("conn.getFreeKey")} <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>

        {/* ── 2. AI ব্যবহারের হিসাব ── */}
        <Card className="premium-card rounded-2xl border-border/60 bg-card">
          <CardHeader>
            <CardTitle className="flex flex-wrap items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/90 to-pink-600/90 text-white shadow-md shadow-fuchsia-500/30 ring-1 ring-inset ring-white/25">
                <BarChart3 className="h-4.5 w-4.5" aria-hidden />
              </span>
              {t("usage.title")}
              <div className="ml-auto flex gap-1 rounded-lg border border-border/60 bg-muted/60 p-0.5">
                {([7, 30] as const).map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDays(d)}
                    className={`min-h-9 rounded-md px-2.5 text-xs font-semibold transition-colors ${
                      days === d ? "bg-background shadow-sm" : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-pressed={days === d}
                  >
                    {d === 7 ? t("usage.days7") : t("usage.days30")}
                  </button>
                ))}
              </div>
            </CardTitle>
            <CardDescription>{t("usage.desc")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {usageErr ? (
              <p className="rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm font-medium text-destructive">
                {t("errors.loadFailed")}
              </p>
            ) : !usage ? (
              <div className="space-y-2.5">
                <Skeleton className="h-10 w-1/3 rounded-lg" />
                <Skeleton className="h-24 w-full rounded-lg" />
              </div>
            ) : usage.total === 0 ? (
              <p className="rounded-xl border border-dashed border-border/70 bg-muted/30 p-4 text-sm text-muted-foreground">
                {t("usage.empty")}
              </p>
            ) : (
              <>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold tracking-tight text-fuchsia-600 dark:text-fuchsia-400">
                    {usage.total}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">{t("usage.total")}</span>
                </div>

                {/* দিন-ভিত্তিক মিনি বার চার্ট */}
                <div>
                  <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {t("usage.byDay")}
                  </p>
                  <div
                    className="flex h-24 items-stretch gap-1 rounded-xl border border-border/50 bg-background/60 p-2"
                    role="img"
                    aria-label={t("usage.byDay")}
                  >
                    {dayBars.map((d) => (
                      <div
                        key={d.day}
                        className="group relative flex flex-1 items-end"
                        title={`${d.day}: ${d.count}`}
                      >
                        <div
                          className="w-full rounded-t-sm bg-gradient-to-t from-fuchsia-500/80 to-pink-400/80 transition-all group-hover:from-fuchsia-600 group-hover:to-pink-500"
                          style={{ height: `${Math.max(4, (d.count / maxDay) * 100)}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
                    <span>{dayBars[0]?.day.slice(5)}</span>
                    <span>{dayBars[dayBars.length - 1]?.day.slice(5)}</span>
                  </div>
                </div>

                {/* টপ ফিচার */}
                {usage.byFeature.length > 0 && (
                  <div>
                    <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      {t("usage.top")}
                    </p>
                    <div className="nice-scroll max-h-56 space-y-1.5 overflow-y-auto pr-1">
                      {usage.byFeature.slice(0, 8).map((f) => (
                        <div
                          key={f.feature}
                          className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/60 px-3 py-2"
                        >
                          <span className="min-w-0 flex-1 truncate text-sm font-medium">
                            {featureLabel(tf, f.feature)}
                          </span>
                          <Badge variant="secondary" className="shrink-0 font-mono text-[11px]">
                            {f.count} {t("usage.calls")}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>

        {/* ── 3. AI ফিচার ডিরেক্টরি ── */}
        <Card className="premium-card rounded-2xl border-border/60 bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500/90 to-emerald-600/90 text-white shadow-md shadow-teal-500/30 ring-1 ring-inset ring-white/25">
                <LayoutGrid className="h-4.5 w-4.5" aria-hidden />
              </span>
              {t("dir.title")}
            </CardTitle>
            <CardDescription>{t("dir.desc")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {AI_FEATURES.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => onNavigate(f.tab)}
                  className="group flex items-center gap-2.5 rounded-xl border border-border/60 bg-background/60 p-3 text-left transition-all hover:border-primary/40 hover:bg-accent hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-700 transition-colors group-hover:bg-violet-500 group-hover:text-white dark:bg-violet-900/50 dark:text-violet-300">
                    <Bot className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold">{featureLabel(tf, f.id)}</span>
                    <span className="block text-[11px] text-muted-foreground">
                      {t("dir.used", { n: usageFor(f.id) })}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden
                  />
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ── 4. API Key ম্যানেজমেন্ট (KeyPoolCard পুনঃব্যবহার) ── */}
        <KeyPoolCard />

        <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
          {t("privacy")}
        </p>
      </div>
    </div>
  );
}
