"use client";

import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  LineChart,
  Flame,
  Clock3,
  Trophy,
  Library,
  MessagesSquare,
  AlertTriangle,
  Lightbulb,
  BookOpen,
  Sparkles,
  PenLine,
  Users,
  Video,
  Bot,
  ChevronDown,
  KeyRound,
  Check,
  BrainCircuit,
  Award,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip as ReTooltip,
} from "recharts";
import { useDevice } from "@/hooks/use-device";
import { apiGet } from "@/lib/client-api";
import SectionHeader from "@/components/shared/SectionHeader";
import StatCard from "@/components/shared/StatCard";
import EmptyState from "@/components/shared/EmptyState";
import type { CallAnalysis, TranscriptLine } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  getLearnedWordsServerSnapshot,
  getLearnedWordsSnapshot,
  subscribeLearnedWords,
} from "@/components/vocab/learned-store";
import {
  countDue,
  countMastered,
  getReviewMapServerSnapshot,
  getReviewMapSnapshot,
  subscribeReviewMap,
} from "@/components/vocab/review-store";

interface SessionRow {
  id: string;
  type: string;
  partnerCount: number;
  durationSec: number;
  score: number;
  analysis: CallAnalysis;
  transcript: TranscriptLine[];
  createdAt: string;
}

interface ProgressData {
  totalSessions: number;
  totalSeconds: number;
  totalMinutes: number;
  avgScore: number;
  streak: number;
  wordCount: number;
  trend: { name: string; score: number }[];
  practiceByKind: Record<string, { count: number; correct: number; total: number }>;
}

const TYPE_ICON: Record<string, typeof Users> = {
  "one-to-one": Users,
  group: Video,
  "ai-partner": Bot,
};

const TYPE_TINT: Record<string, string> = {
  "one-to-one": "bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300",
  group: "bg-orange-50 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300",
  "ai-partner": "bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300",
};

const KIND_TINT: Record<string, string> = {
  // Practice kinds are tinted by their MODULE identity (grammar=orange,
  // vocab=emerald, listening=teal, reading=amber); review keeps the warm
  // amber/orange memory brand. No blue/indigo anywhere.
  "grammar-quiz":
    "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300",
  "vocab-quiz":
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  "listening-quiz":
    "bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300",
  "reading-quiz":
    "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  "vocab-review":
    "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300",
};

const BEST_STREAK_KEY = "bolo_best_streak";
const YOU_SPEAKERS = new Set(["You", "আপনি", "आप", "you"]);
const KNOWN_TYPES = new Set(["one-to-one", "group", "ai-partner"]);
const KNOWN_KINDS = new Set([
  "grammar-quiz",
  "vocab-quiz",
  "listening-quiz",
  "reading-quiz",
  "vocab-review",
]);

function scoreTint(score: number): string {
  if (score >= 80) return "text-emerald-600 dark:text-emerald-400";
  if (score >= 60) return "text-amber-600 dark:text-amber-400";
  return "text-rose-600 dark:text-rose-400";
}

function scoreRingBg(score: number): string {
  if (score >= 80) return "#10b981"; // emerald-500
  if (score >= 60) return "#f59e0b"; // amber-500
  return "#f43f5e"; // rose-500
}

export default function ProgressSection() {
  const t = useTranslations("progress");
  const locale = useLocale();
  const dateLocale = locale === "bn" ? "bn-BD" : locale === "hi" ? "hi-IN" : "en-US";
  const { deviceId, hasKey } = useDevice();
  const [data, setData] = useState<ProgressData | null>(null);
  const [sessions, setSessions] = useState<SessionRow[]>([]);
  const [selected, setSelected] = useState<SessionRow | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [bestStreak, setBestStreak] = useState(0);
  const [loading, setLoading] = useState(true);

  /* ── review visibility (was invisible in Progress — connectivity fix) ──
   * Same external-store + hydration-safe pattern the Learning Path uses:
   * time-dependent counts are computed after mount via queueMicrotask. */
  const learned = useSyncExternalStore(
    subscribeLearnedWords,
    getLearnedWordsSnapshot,
    getLearnedWordsServerSnapshot
  );
  const reviewMap = useSyncExternalStore(
    subscribeReviewMap,
    getReviewMapSnapshot,
    getReviewMapServerSnapshot
  );
  const [dueCount, setDueCount] = useState(0);
  const [masteredCount, setMasteredCount] = useState(0);
  const refreshReviewCounts = useCallback(() => {
    setDueCount(countDue(learned));
    setMasteredCount(countMastered(learned));
  }, [learned]);
  useEffect(() => {
    queueMicrotask(refreshReviewCounts);
  }, [refreshReviewCounts, reviewMap]);

  useEffect(() => {
    if (!deviceId) return;
    Promise.all([
      apiGet<ProgressData>(`/api/progress?deviceId=${deviceId}`),
      apiGet<SessionRow[]>(`/api/sessions?deviceId=${deviceId}&limit=30`),
    ])
      .then(([p, s]) => {
        setData(p);
        setSessions(s);
        // Best streak is kept client-side (per device) — API reports current only
        try {
          const stored = Number(window.localStorage.getItem(BEST_STREAK_KEY) || 0);
          const best = Math.max(p?.streak ?? 0, stored, 0);
          window.localStorage.setItem(BEST_STREAK_KEY, String(best));
          setBestStreak(best);
        } catch {
          setBestStreak(p?.streak ?? 0);
        }
      })
      .catch(() => null)
      .finally(() => setLoading(false));
  }, [deviceId]);

  const trendData = useMemo(() => data?.trend ?? [], [data]);
  const practiceEntries = useMemo(
    () => Object.entries(data?.practiceByKind ?? {}),
    [data]
  );

  if (loading) {
    return (
      <div className="mx-auto max-w-5xl">
        <SectionHeader icon={LineChart} title={t("title")} subtitle={t("subtitle")} tint="emerald" />
        <div className="space-y-4">
          <Skeleton className="h-28 rounded-2xl" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-20 rounded-2xl" />
            ))}
          </div>
          <Skeleton className="h-64 rounded-2xl" />
        </div>
      </div>
    );
  }

  const streak = data?.streak ?? 0;

  return (
    <div className="mx-auto max-w-5xl">
      <SectionHeader icon={LineChart} title={t("title")} subtitle={t("subtitle")} tint="emerald" />

      <div className="space-y-5">
        {/* ── streak hero ── */}
        <Card
          className={cn(
            "premium-card rounded-2xl border p-0",
            streak > 0
              ? "border-orange-200/80! bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 dark:border-orange-900! dark:from-orange-950/50 dark:via-amber-950/30 dark:to-orange-950/40"
              : "border-border/70 bg-card"
          )}
        >
          <CardContent className="flex items-center gap-4 p-4 sm:p-5">
            <span
              className={cn(
                "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br shadow-md",
                streak > 0
                  ? "from-amber-500 to-orange-600 text-white"
                  : "from-muted-foreground/20 to-muted-foreground/10 text-muted-foreground"
              )}
            >
              <Flame className="h-7 w-7" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              {streak > 0 ? (
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-gradient text-4xl font-extrabold leading-none">
                    {streak}
                  </span>
                  <span className="text-lg font-bold text-orange-900 dark:text-orange-200">
                    {t("streak.active")}
                  </span>
                  <span className="sr-only">{t("streak.activeAria", { n: streak })}</span>
                </div>
              ) : (
                <div>
                  <p className="text-base font-bold">{t("streak.start")}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{t("streak.startDesc")}</p>
                </div>
              )}
              <p
                className={cn(
                  "mt-1 text-xs",
                  streak > 0
                    ? "text-orange-700/80 dark:text-orange-300/80"
                    : "text-muted-foreground"
                )}
              >
                {t("streak.note")}
              </p>
            </div>
            {bestStreak > 0 && (
              <Badge className="shrink-0 gap-1 bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                <Trophy className="h-3 w-3" aria-hidden />
                {t("streak.best", { n: bestStreak })}
              </Badge>
            )}
          </CardContent>
        </Card>

        {/* ── stats row ── */}
        <div className="stagger-grid grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCard icon={MessagesSquare} value={data?.totalSessions ?? 0} label={t("stats.sessions")} tint="teal" />
          {/* short sessions (<60s) show seconds — a 40s call is not "0 min" */}
          <StatCard
            icon={Clock3}
            value={
              (data?.totalSeconds ?? 0) < 60
                ? t("stats.secondsValue", { n: data?.totalSeconds ?? 0 })
                : t("stats.minutesValue", { n: data?.totalMinutes ?? 0 })
            }
            label={t("stats.minutes")}
            tint="teal"
          />
          <StatCard icon={Trophy} value={data?.avgScore ?? 0} label={t("stats.avgScore")} tint="amber" />
          <StatCard icon={Library} value={data?.wordCount ?? 0} label={t("stats.words")} tint="emerald" />
        </div>

        {/* ── review stats — spaced-repetition visibility (Leitner boxes) ── */}
        {learned.length > 0 && (
          <div className="stagger-grid grid grid-cols-2 gap-3">
            <StatCard
              icon={BrainCircuit}
              value={dueCount}
              label={t("stats.reviewDue")}
              tint="orange"
              className="animate-fade-in-up"
            />
            <StatCard
              icon={Award}
              value={masteredCount}
              label={t("stats.reviewMastered")}
              tint="emerald"
              className="animate-fade-in-up-1"
            />
          </div>
        )}

        {/* ── insights: score trend + practice stats — 2 columns on desktop ── */}
        <div className="grid gap-5 lg:grid-cols-2 lg:items-start">
        {trendData.length > 0 && (
          <Card className="premium-card rounded-2xl border-border/70 bg-card">
            <CardHeader className="pb-0">
              <CardTitle className="flex items-center gap-2 text-base">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/90 to-teal-600/90 text-white shadow-md shadow-emerald-500/30 ring-1 ring-inset ring-white/25 dark:shadow-emerald-500/20">
                  <LineChart className="h-4 w-4" aria-hidden />
                </span>
                {t("trend.title")}
              </CardTitle>
              <p className="text-xs text-muted-foreground">{t("trend.desc")}</p>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-48 w-full sm:h-56" role="img" aria-label={t("trend.ariaLabel")}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trendData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="scoreFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="#10b981" stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="name"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 10, fill: "currentColor" }}
                      className="text-muted-foreground"
                      interval="preserveStartEnd"
                      minTickGap={24}
                    />
                    <YAxis domain={[0, 100]} hide />
                    <ReTooltip
                      cursor={{ stroke: "#f59e0b", strokeWidth: 1.5, strokeDasharray: "4 4" }}
                      content={({ active, payload, label }) => {
                        if (!active || !payload?.length) return null;
                        const score = Number(payload[0]?.value ?? 0);
                        return (
                          <div className="rounded-xl border border-border/70 bg-popover px-3 py-2 text-xs shadow-md">
                            <p className="font-semibold text-foreground">
                              {t("trend.session", { n: label ?? "", score })}
                            </p>
                          </div>
                        );
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="score"
                      stroke="#10b981"
                      strokeWidth={2.5}
                      fill="url(#scoreFill)"
                      dot={{ r: 3, fill: "#fff", stroke: "#10b981", strokeWidth: 2 }}
                      activeDot={{ r: 5, fill: "#f59e0b", stroke: "#fff", strokeWidth: 2 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        )}

        {/* ── practice stats ── */}
        {practiceEntries.length > 0 && (
          <Card className="premium-card rounded-2xl border-border/70 bg-card">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/90 to-teal-600/90 text-white shadow-md shadow-emerald-500/30 ring-1 ring-inset ring-white/25 dark:shadow-emerald-500/20">
                  <PenLine className="h-4 w-4" aria-hidden />
                </span>
                {t("practice.title")}
              </CardTitle>
              <p className="text-xs text-muted-foreground">{t("practice.desc")}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {practiceEntries.map(([kind, v]) => (
                <div key={kind}>
                  <div className="mb-1.5 flex items-center justify-between gap-2 text-sm">
                    <Badge className={cn("gap-1 border-transparent font-semibold", KIND_TINT[kind])}>
                      {KNOWN_KINDS.has(kind) ? t(`practice.${kind}`) : kind}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {t("practice.correctOf", { correct: v.correct, total: v.total, count: v.count })}
                    </span>
                  </div>
                  <Progress value={v.total ? (v.correct / v.total) * 100 : 0} className="h-2" aria-label={KNOWN_KINDS.has(kind) ? t(`practice.${kind}`) : kind} />
                </div>
              ))}
            </CardContent>
          </Card>
        )}
        </div>

        {/* ── speaking history — visible to everyone (sessions live server-side);
              only the AI-detail extras stay behind the key (kept minimal) ── */}
        <section className="space-y-3">
          <h2 className="text-base font-semibold">{t("history.title")}</h2>
          {!hasKey && (
            <p className="flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
              <KeyRound className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" aria-hidden />
              {t("history.needKey")}
            </p>
          )}
          {sessions.length === 0 ? (
            <EmptyState
              illustration="/illustrations/ill-progress.webp"
              title={t("history.emptyTitle")}
              description={t("history.emptyDesc")}
            />
          ) : (
            <div className="nice-scroll max-h-96 space-y-3 overflow-y-auto pr-1">
              {sessions.map((s) => {
                const Icon = TYPE_ICON[s.type] ?? MessagesSquare;
                const tint = TYPE_TINT[s.type] ?? TYPE_TINT["ai-partner"];
                const typeLabel = KNOWN_TYPES.has(s.type)
                  ? t(`history.type.${s.type}`)
                  : s.type;
                const expanded = expandedId === s.id;
                const mistakes = s.analysis?.mistakes ?? [];
                return (
                  <Collapsible
                    key={s.id}
                    open={expanded}
                    onOpenChange={(o) => setExpandedId(o ? s.id : null)}
                  >
                    <div className="premium-card rounded-2xl border border-border/70 bg-card transition-shadow hover:shadow-md">
                      <CollapsibleTrigger
                        className="flex w-full items-center gap-3 p-4 text-left"
                        aria-expanded={expanded}
                        aria-label={t("history.transcriptAria")}
                      >
                        <span className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-xl", tint)}>
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                            <span className="text-sm font-semibold">
                              {typeLabel}
                            </span>
                            <Badge variant="secondary" className="text-[10px]">
                              {t("history.partners", { n: s.partnerCount })}
                            </Badge>
                          </div>
                          <p className="mt-0.5 truncate text-xs text-muted-foreground">
                            {s.analysis?.summary || t("history.noAnalysis")}
                          </p>
                          <p className="mt-0.5 text-[11px] text-muted-foreground">
                            {t("history.minutes", { n: Math.round(s.durationSec / 60) })} ·{" "}
                            {new Date(s.createdAt).toLocaleDateString(dateLocale)}
                          </p>
                        </div>
                        <div className="flex shrink-0 flex-col items-center gap-1">
                          <span
                            className="relative flex h-11 w-11 items-center justify-center rounded-full"
                            style={{
                              background: `conic-gradient(${scoreRingBg(s.score)} ${Math.max(s.score, 2) * 3.6}deg, transparent 0)`,
                            }}
                            aria-label={`${t("history.score")}: ${s.score}`}
                            role="img"
                          >
                            <span className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-card">
                              <span className={cn("text-sm font-bold", scoreTint(s.score))}>
                                {s.score}
                              </span>
                            </span>
                          </span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 text-muted-foreground transition-transform duration-200",
                              expanded && "rotate-180"
                            )}
                            aria-hidden
                          />
                        </div>
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <div className="space-y-3 border-t border-border/60 px-4 pb-4 pt-3">
                          {/* mistakes summary */}
                          {mistakes.length > 0 && (
                            <div className="space-y-2">
                              <h3 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                <AlertTriangle className="h-3.5 w-3.5 text-amber-500" aria-hidden />
                                {t("history.mistakesTitle")}
                              </h3>
                              {mistakes.slice(0, 2).map((m, i) => (
                                <div key={i} className="rounded-xl border border-border/60 bg-muted/40 p-2.5 text-xs">
                                  <p className="text-destructive line-through decoration-destructive/50">
                                    {m.original}
                                  </p>
                                  <p className="mt-0.5 flex items-center gap-1 font-medium text-emerald-600 dark:text-emerald-400">
                                    <Check className="h-3 w-3" aria-hidden /> {m.corrected}
                                  </p>
                                </div>
                              ))}
                              {mistakes.length > 2 && (
                                <p className="text-[11px] text-muted-foreground">
                                  +{mistakes.length - 2}…
                                </p>
                              )}
                            </div>
                          )}

                          {/* transcript bubbles */}
                          {s.transcript?.length > 0 && (
                            <div className="space-y-2">
                              <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                {t("history.transcriptTitle")}
                              </h3>
                              <div className="nice-scroll max-h-72 space-y-2 overflow-y-auto rounded-xl bg-muted/40 p-3">
                                {s.transcript.map((line, i) => {
                                  const mine = YOU_SPEAKERS.has(line.speaker.trim());
                                  return (
                                    <div
                                      key={i}
                                      className={cn("flex flex-col", mine ? "items-end" : "items-start")}
                                    >
                                      <span className="mb-0.5 px-1 text-[10px] font-semibold text-muted-foreground">
                                        {line.speaker}
                                      </span>
                                      <p
                                        className={cn(
                                          "max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed",
                                          mine
                                            ? "rounded-br-sm bg-emerald-600 text-white"
                                            : "rounded-bl-sm border border-border/60 bg-card text-foreground"
                                        )}
                                      >
                                        {line.text}
                                      </p>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {/* AI detail is the only key-gated extra — the session
                              list itself (transcript, mistakes, score) stays free */}
                          {hasKey && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setSelected(s)}
                              className="min-h-11 gap-1.5 rounded-xl text-xs font-semibold"
                            >
                              <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
                              {t("history.fullAnalysis")}
                            </Button>
                          )}
                        </div>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                );
              })}
            </div>
          )}
        </section>
      </div>

      {/* ── full analysis dialog ── */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-hidden rounded-2xl p-0">
          {selected && (
            <div className="flex flex-col">
              <DialogHeader className="px-6 pt-6">
                <DialogTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Sparkles className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                  {t("detail.title", {
                    type: KNOWN_TYPES.has(selected.type)
                      ? t(`history.type.${selected.type}`)
                      : selected.type,
                    score: selected.score,
                  })}
                </DialogTitle>
                <DialogDescription>{selected.analysis?.summary}</DialogDescription>
              </DialogHeader>
              <ScrollArea className="nice-scroll max-h-[60vh] px-6 pb-6">
                <div className="space-y-4">
                  {/* scores */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: t("detail.fluency"), v: selected.analysis?.fluencyScore },
                      { label: t("detail.grammar"), v: selected.analysis?.grammarScore },
                      { label: t("detail.vocabulary"), v: selected.analysis?.vocabularyScore },
                    ].map((x) => (
                      <div key={x.label} className="rounded-xl border border-border/60 p-3 text-center">
                        <p className={cn("text-xl font-bold", scoreTint(x.v ?? 0))}>{x.v ?? 0}</p>
                        <p className="text-[11px] text-muted-foreground">{x.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* mistakes */}
                  {selected.analysis?.mistakes?.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="flex items-center gap-1.5 text-sm font-semibold">
                        <AlertTriangle className="h-4 w-4 text-amber-500" aria-hidden />
                        {t("detail.mistakesTitle")}
                      </h3>
                      {selected.analysis.mistakes.map((m, i) => (
                        <div key={i} className="rounded-xl border border-border/60 p-3 text-sm">
                          <p className="text-destructive line-through decoration-destructive/50">
                            {m.original}
                          </p>
                          <p className="font-medium text-emerald-600 dark:text-emerald-400">
                            ✓ {m.corrected}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">{m.explanation}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* better dialogue */}
                  {selected.analysis?.betterDialogue?.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="flex items-center gap-1.5 text-sm font-semibold">
                        <BookOpen className="h-4 w-4 text-primary" aria-hidden />
                        {t("detail.betterTitle")}
                      </h3>
                      {selected.analysis.betterDialogue.map((d, i) => (
                        <div key={i} className="rounded-xl bg-muted/60 p-3 text-sm">
                          <p className="text-muted-foreground">{d.original}</p>
                          <p className="mt-1 font-medium">{d.improved}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* gaps */}
                  {selected.analysis?.grammarGaps?.length > 0 && (
                    <>
                      <Separator />
                      <div className="space-y-1.5">
                        <h3 className="text-sm font-semibold">{t("detail.gapsTitle")}</h3>
                        <div className="flex flex-wrap gap-1.5">
                          {selected.analysis.grammarGaps.map((g, i) => (
                            <Badge key={i} variant="outline" className="font-normal">
                              {g}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {selected.analysis?.vocabularyGaps?.length > 0 && (
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-semibold">{t("detail.vocabGapsTitle")}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {selected.analysis.vocabularyGaps.map((v, i) => (
                          <Badge key={i} variant="secondary" className="font-normal">
                            {v.word} — {v.meaning}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* suggestions */}
                  {selected.analysis?.suggestions?.length > 0 && (
                    <div className="space-y-1.5">
                      <h3 className="flex items-center gap-1.5 text-sm font-semibold">
                        <Lightbulb className="h-4 w-4 text-amber-500" aria-hidden />
                        {t("detail.suggestionsTitle")}
                      </h3>
                      <ul className="space-y-1">
                        {selected.analysis.suggestions.map((s, i) => (
                          <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary">•</span> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* transcript */}
                  {selected.transcript?.length > 0 && (
                    <>
                      <Separator />
                      <div className="space-y-1.5">
                        <h3 className="text-sm font-semibold">{t("detail.transcriptTitle")}</h3>
                        <div className="rounded-xl border border-border/60 p-3">
                          {selected.transcript.map((line, i) => (
                            <p key={i} className="text-sm">
                              <span className="font-semibold text-primary">{line.speaker}: </span>
                              {line.text}
                            </p>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </ScrollArea>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
