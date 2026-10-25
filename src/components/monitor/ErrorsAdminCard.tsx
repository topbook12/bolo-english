"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  ShieldAlert,
  RefreshCw,
  Loader2,
  AlertTriangle,
  Trash2,
  Eraser,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Admin client-error monitor (D5, ROADMAP-60). Rendered ONLY for admins
// (SettingsSection gates it); the API re-verifies server-side.
// Shows last-24h / total counts and the 50 most recent reports; clear-all
// after triage. Minimal by design — errors are for noticing, not analytics.

interface ErrorRow {
  id: string;
  message: string;
  digest: string;
  path: string;
  source: string;
  createdAt: string;
}

interface ErrorAgg {
  ok: boolean;
  recent: ErrorRow[];
  last24h: number;
  total: number;
}

const SOURCE_BADGE: Record<string, string> = {
  boundary:
    "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300",
  window:
    "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  rejection:
    "bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300",
};

function formatWhen(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? "—"
    : d.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
}

export default function ErrorsAdminCard() {
  const t = useTranslations("monitor");
  const { toast } = useToast();
  const [agg, setAgg] = useState<ErrorAgg | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [confirmClear, setConfirmClear] = useState(false);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/client-error", { cache: "no-store" });
      const json = await res.json().catch(() => null);
      if (res.status === 403 || (json && json.ok === false)) {
        throw new Error(json?.error || "forbidden");
      }
      if (!json?.ok) throw new Error("bad payload");
      setAgg(json as ErrorAgg);
    } catch (e) {
      setError(e instanceof Error ? e.message : "error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const clearAll = async () => {
    setBusy(true);
    setConfirmClear(false);
    try {
      const res = await fetch("/api/client-error", {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ all: true }),
      });
      const json = await res.json().catch(() => null);
      if (res.ok && json?.ok) {
        toast({ title: t("admin.cleared") });
        await load();
      } else {
        toast({ title: t("admin.actionFailed"), variant: "destructive" });
      }
    } catch {
      toast({ title: t("admin.actionFailed"), variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card className="premium-card border-border/70 rounded-2xl bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-600/90 to-slate-800/90 text-white shadow-md shadow-slate-500/30 ring-1 ring-inset ring-white/25">
            <ShieldAlert className="h-4.5 w-4.5" aria-hidden />
          </span>
          <span className="flex min-w-0 flex-wrap items-center gap-2">
            <span>{t("admin.title")}</span>
            <Badge
              variant="secondary"
              className="bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-300"
            >
              {t("admin.badge")}
            </Badge>
          </span>
        </CardTitle>
        <CardDescription>{t("admin.desc")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {loading && (
          <div className="flex min-h-24 items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            {t("admin.loading")}
          </div>
        )}

        {!loading && error && (
          <div className="flex min-h-24 flex-col items-center justify-center gap-3 text-center">
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
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border/60 p-4">
                <p className="text-xs font-medium text-muted-foreground">{t("admin.last24h")}</p>
                <p className={cn(
                  "mt-1 text-3xl font-bold tabular-nums",
                  agg.last24h > 0 ? "text-rose-600 dark:text-rose-400" : "text-emerald-600 dark:text-emerald-400"
                )}>
                  {agg.last24h}
                </p>
              </div>
              <div className="rounded-xl border border-border/60 p-4">
                <p className="text-xs font-medium text-muted-foreground">{t("admin.total")}</p>
                <p className="mt-1 text-3xl font-bold tabular-nums">{agg.total}</p>
              </div>
            </div>

            {agg.recent.length === 0 ? (
              <p className="py-4 text-center text-sm text-muted-foreground">
                {t("admin.empty")}
              </p>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{t("admin.recent")}</p>
                  <div className="flex gap-1.5">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => void load()}
                      className="min-h-9 gap-1.5 text-xs"
                    >
                      <RefreshCw className="h-3.5 w-3.5" aria-hidden />
                      {t("admin.refresh")}
                    </Button>
                    {confirmClear ? (
                      <Button
                        size="sm"
                        variant="destructive"
                        disabled={busy}
                        onClick={() => void clearAll()}
                        className="min-h-9 gap-1 text-xs"
                      >
                        <Eraser className="h-3.5 w-3.5" aria-hidden />
                        {t("admin.confirmClear")}
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setConfirmClear(true)}
                        className="min-h-9 gap-1 text-xs text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-3.5 w-3.5" aria-hidden />
                        {t("admin.clearAll")}
                      </Button>
                    )}
                  </div>
                </div>
                <div className="nice-scroll max-h-96 space-y-2 overflow-y-auto pr-1">
                  {agg.recent.map((row) => (
                    <div
                      key={row.id}
                      className="rounded-xl border border-border/60 p-3 transition-shadow hover:shadow-sm"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge
                          variant="secondary"
                          className={cn("text-[11px]", SOURCE_BADGE[row.source] ?? SOURCE_BADGE.window)}
                        >
                          {t(`admin.source_${row.source}`)}
                        </Badge>
                        {row.path && (
                          <span className="max-w-44 truncate font-mono text-[11px] text-muted-foreground">
                            {row.path}
                          </span>
                        )}
                        {row.digest && (
                          <span className="max-w-24 truncate font-mono text-[10px] text-muted-foreground">
                            {row.digest}
                          </span>
                        )}
                        <span className="ml-auto text-[11px] text-muted-foreground">
                          {formatWhen(row.createdAt)}
                        </span>
                      </div>
                      <p className="mt-1.5 break-words font-mono text-xs leading-relaxed">
                        {row.message}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
