"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Inbox,
  RefreshCw,
  Loader2,
  AlertTriangle,
  Bug,
  Lightbulb,
  MessageSquareWarning,
  Eye,
  CheckCircle2,
  RotateCcw,
  Trash2,
  User,
  UserX,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import type { FeedbackCategory, FeedbackStatus } from "@/lib/feedback";

// Admin feedback queue (D3, ROADMAP-60). Rendered ONLY for admins
// (SettingsSection gates it); the API re-verifies the role server-side —
// the UI is convenience, the 403 is the law.
//
// Triage loop: new → seen → resolved (RotateCcw sends an item back).
// Two-step delete (tap trash → tap the red confirm) — no extra dialog
// dependency, still safe against accidental taps.

interface FeedbackItem {
  id: string;
  category: FeedbackCategory;
  message: string;
  status: FeedbackStatus;
  page: string;
  hasAccount: boolean;
  createdAt: string;
}

interface FeedbackCounts {
  new: number;
  seen: number;
  resolved: number;
  total: number;
}

type Filter = "all" | FeedbackStatus;

const CATEGORY_META: Record<
  FeedbackCategory,
  { icon: React.ComponentType<{ className?: string }>; badge: string }
> = {
  bug: {
    icon: Bug,
    badge:
      "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300",
  },
  idea: {
    icon: Lightbulb,
    badge:
      "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  },
  problem: {
    icon: MessageSquareWarning,
    badge:
      "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300",
  },
};

const STATUS_META: Record<FeedbackStatus, { dot: string; badge: string }> = {
  new: {
    dot: "bg-emerald-500",
    badge:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  },
  seen: {
    dot: "bg-amber-500",
    badge: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  },
  resolved: {
    dot: "bg-teal-600",
    badge: "bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300",
  },
};

const FILTERS: Filter[] = ["all", "new", "seen", "resolved"];

function formatWhen(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? "—"
    : d.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
}

export default function FeedbackAdminCard() {
  const t = useTranslations("feedback");
  const { toast } = useToast();
  const [items, setItems] = useState<FeedbackItem[]>([]);
  const [counts, setCounts] = useState<FeedbackCounts | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actingId, setActingId] = useState<string | null>(null);
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const confirmTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const load = useCallback(
    async (f: Filter) => {
      setLoading(true);
      setError(null);
      try {
        const qs = new URLSearchParams({ status: f, limit: "200" });
        const res = await fetch(`/api/feedback?${qs.toString()}`, { cache: "no-store" });
        const json = await res.json().catch(() => null);
        if (res.status === 403 || (json && json.ok === false)) {
          throw new Error(json?.error || "forbidden");
        }
        if (!json?.ok) throw new Error("bad payload");
        setItems(json.data as FeedbackItem[]);
        setCounts(json.counts as FeedbackCounts);
      } catch (e) {
        setError(e instanceof Error ? e.message : "error");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    load(filter);
  }, [load, filter]);

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

  const patchStatus = async (id: string, status: FeedbackStatus) => {
    setActingId(id);
    try {
      const res = await fetch("/api/feedback", {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      const json = await res.json().catch(() => null);
      if (res.ok && json?.ok) {
        toast({ title: t("statusUpdated") });
        await load(filter); // single source of truth: counts + filtered list
      } else {
        toast({ title: t("actionFailed"), variant: "destructive" });
      }
    } catch {
      toast({ title: t("actionFailed"), variant: "destructive" });
    } finally {
      setActingId(null);
    }
  };

  const remove = async (id: string) => {
    setActingId(id);
    setConfirmId(null);
    try {
      const res = await fetch("/api/feedback", {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const json = await res.json().catch(() => null);
      if (res.ok && json?.ok) {
        toast({ title: t("deleted") });
        await load(filter);
      } else {
        toast({ title: t("actionFailed"), variant: "destructive" });
      }
    } catch {
      toast({ title: t("actionFailed"), variant: "destructive" });
    } finally {
      setActingId(null);
    }
  };

  const countOf = (f: Filter) =>
    !counts
      ? undefined
      : f === "all"
        ? counts.total
        : counts[f];

  return (
    <Card className="premium-card border-border/70 rounded-2xl bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500/90 to-emerald-600/90 text-white shadow-md shadow-teal-500/30 ring-1 ring-inset ring-white/25">
            <Inbox className="h-4.5 w-4.5" aria-hidden />
          </span>
          <span className="flex min-w-0 flex-wrap items-center gap-2">
            <span>{t("adminTitle")}</span>
            <Badge
              variant="secondary"
              className="bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300"
            >
              {t("adminBadge")}
            </Badge>
          </span>
        </CardTitle>
        <CardDescription>{t("adminDesc")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Filter pills double as live status counters */}
        <div className="flex flex-wrap gap-2" role="group" aria-label={t("filterLabel")}>
          {FILTERS.map((f) => {
            const n = countOf(f);
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={active}
                className={cn(
                  "flex min-h-9 items-center gap-1.5 rounded-full border border-border/70 px-3 py-1.5 text-xs font-semibold transition-colors",
                  active
                    ? "border-transparent bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-sm"
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {t(`filter_${f}`)}
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.5 text-[10px] tabular-nums",
                    active ? "bg-white/20" : "bg-muted"
                  )}
                >
                  {n ?? "…"}
                </span>
              </button>
            );
          })}
        </div>

        {loading && (
          <div className="flex min-h-32 items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            {t("loading")}
          </div>
        )}

        {!loading && error && (
          <div className="flex min-h-32 flex-col items-center justify-center gap-3 text-center">
            <AlertTriangle className="h-6 w-6 text-amber-500" aria-hidden />
            <p className="text-sm text-muted-foreground">{t("loadError")}</p>
            <Button size="sm" variant="outline" onClick={() => load(filter)} className="min-h-11">
              <RefreshCw className="h-4 w-4" />
              {t("retry")}
            </Button>
          </div>
        )}

        {!loading && !error && items.length === 0 && (
          <p className="min-h-32 pt-10 text-center text-sm text-muted-foreground">
            {t("adminEmpty")}
          </p>
        )}

        {!loading && !error && items.length > 0 && (
          <div className="nice-scroll max-h-96 space-y-3 overflow-y-auto pr-1">
            {items.map((item) => {
              const catMeta = CATEGORY_META[item.category] ?? CATEGORY_META.problem;
              const CatIcon = catMeta.icon;
              const statusMeta = STATUS_META[item.status] ?? STATUS_META.new;
              const acting = actingId === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-xl border border-border/60 p-3.5 transition-shadow hover:shadow-sm"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className={cn("gap-1", catMeta.badge)}>
                      <CatIcon className="h-3 w-3" aria-hidden />
                      {t(`cat_${item.category}`)}
                    </Badge>
                    <Badge variant="secondary" className={cn("gap-1.5", statusMeta.badge)}>
                      <span className={cn("h-1.5 w-1.5 rounded-full", statusMeta.dot)} aria-hidden />
                      {t(`status_${item.status}`)}
                    </Badge>
                    <span className="ml-auto text-[11px] text-muted-foreground">
                      {formatWhen(item.createdAt)}
                    </span>
                  </div>

                  <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-relaxed">
                    {item.message}
                  </p>

                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
                    {item.page && (
                      <span className="max-w-48 truncate font-mono">{item.page}</span>
                    )}
                    <span className="flex items-center gap-1">
                      {item.hasAccount ? (
                        <>
                          <User className="h-3 w-3" aria-hidden />
                          {t("withAccount")}
                        </>
                      ) : (
                        <>
                          <UserX className="h-3 w-3" aria-hidden />
                          {t("guest")}
                        </>
                      )}
                    </span>
                  </div>

                  <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                    {item.status !== "seen" && (
                      <Button
                        size="sm"
                        variant="outline"
                        disabled={acting}
                        onClick={() => patchStatus(item.id, "seen")}
                        className="min-h-9 gap-1 px-2.5 text-xs"
                      >
                        {acting ? (
                          <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
                        ) : (
                          <Eye className="h-3.5 w-3.5" aria-hidden />
                        )}
                        {t("markSeen")}
                      </Button>
                    )}
                    {item.status !== "resolved" && (
                      <Button
                        size="sm"
                        variant="outline"
                        disabled={acting}
                        onClick={() => patchStatus(item.id, "resolved")}
                        className="min-h-9 gap-1 px-2.5 text-xs"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                        {t("markResolved")}
                      </Button>
                    )}
                    {item.status !== "new" && (
                      <Button
                        size="sm"
                        variant="ghost"
                        disabled={acting}
                        onClick={() => patchStatus(item.id, "new")}
                        className="min-h-9 gap-1 px-2.5 text-xs"
                      >
                        <RotateCcw className="h-3.5 w-3.5" aria-hidden />
                        {t("backToNew")}
                      </Button>
                    )}
                    <span className="flex-1" />
                    {confirmId === item.id ? (
                      <Button
                        size="sm"
                        variant="destructive"
                        disabled={acting}
                        onClick={() => remove(item.id)}
                        className="min-h-9 gap-1 px-2.5 text-xs"
                      >
                        <Trash2 className="h-3.5 w-3.5" aria-hidden />
                        {t("confirmDelete")}
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="ghost"
                        disabled={acting}
                        onClick={() => armDelete(item.id)}
                        aria-label={t("delete")}
                        className="min-h-9 gap-1 px-2.5 text-xs text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-3.5 w-3.5" aria-hidden />
                        {t("delete")}
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
