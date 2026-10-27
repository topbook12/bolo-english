"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { ShieldAlert, RefreshCw, Loader2, EyeOff, Eye, CheckCircle2, MessageSquare, Video, UserRound } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiGet, apiPost } from "@/lib/client-api";
import { cn } from "@/lib/utils";

// ─── Admin moderation queue (D33, ROADMAP-60) ───────────────────────────────
// Rendered ONLY for admins (SettingsSection gates it); /api/admin/moderation
// re-verifies server-side — the UI is convenience, the 403 is the law.
//
// Two tabs: REPORTS (community reports with a content preview) and FLAGGED
// (word-list auto-hidden sentences with no report yet). Actions: mark
// reviewed · hide (sentence hidden / room closed) · unhide (restore).

interface ReportRow {
  id: string;
  targetType: "sentence" | "room" | "profile";
  targetId: string;
  reason: string;
  note: string;
  createdAt: string;
  sentence: { id: string; text: string; hidden: boolean; flagged: boolean; day: string } | null;
  room: { id: string; topic: string; status: string; visibility: string } | null;
}

interface FlaggedRow {
  id: string;
  text: string;
  day: string;
  createdAt: string;
}

interface ModData {
  reports: ReportRow[];
  flagged: FlaggedRow[];
}

const TARGET_ICON = {
  sentence: MessageSquare,
  room: Video,
  profile: UserRound,
} as const;

const REASON_KEY: Record<string, string> = {
  spam: "reasonSpam",
  abuse: "reasonAbuse",
  sexual: "reasonSexual",
  violence: "reasonViolence",
  other: "reasonOther",
};

export default function ModerationCard() {
  const t = useTranslations("moderation");
  const { toast } = useToast();
  const [data, setData] = useState<ModData | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState<string | null>(null);
  const [tab, setTab] = useState<"reports" | "flagged">("reports");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      setData(await apiGet<ModData>("/api/admin/moderation"));
    } catch (e) {
      toast({ title: (e as Error).message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    void load();
  }, [load]);

  const act = async (body: Record<string, string>) => {
    const key = body.reportId ?? body.submissionId ?? "";
    setBusy(key);
    try {
      await apiPost("/api/admin/moderation", body);
      await load();
    } catch (e) {
      toast({ title: (e as Error).message, variant: "destructive" });
    } finally {
      setBusy(null);
    }
  };

  const reports = data?.reports ?? [];
  const flagged = data?.flagged ?? [];

  return (
    <Card className="premium-card rounded-2xl border-border/70 bg-card">
      <CardContent className="space-y-4 p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500/90 to-red-600/90 text-white shadow-md shadow-rose-500/30">
              <ShieldAlert className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-sm font-bold sm:text-base">{t("title")}</h3>
              <p className="text-xs text-muted-foreground">{t("subtitle")}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex rounded-xl border border-border/70 bg-muted/40 p-1">
              {(["reports", "flagged"] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setTab(r)}
                  aria-pressed={tab === r}
                  className={cn(
                    "min-h-9 rounded-lg px-3 text-xs font-semibold transition-colors",
                    tab === r ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {r === "reports" ? t("reportsTab", { n: reports.length }) : t("flaggedTab", { n: flagged.length })}
                </button>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="h-9 w-9 rounded-lg p-0" onClick={() => void load()} aria-label={t("refresh")}>
              <RefreshCw className={cn("h-4 w-4", loading && "animate-spin")} aria-hidden="true" />
            </Button>
          </div>
        </div>

        {loading && !data ? (
          <p className="py-6 text-center text-sm text-muted-foreground" aria-busy="true">
            <Loader2 className="mx-auto h-5 w-5 animate-spin" aria-hidden="true" />
          </p>
        ) : tab === "reports" ? (
          reports.length === 0 ? (
            <p className="rounded-xl border border-dashed border-border/80 bg-card/50 px-4 py-6 text-center text-sm text-muted-foreground">
              {t("empty")}
            </p>
          ) : (
            <ul className="max-h-96 space-y-2 overflow-y-auto pr-1">
              {reports.map((r) => {
                const Icon = TARGET_ICON[r.targetType] ?? MessageSquare;
                return (
                  <li key={r.id} className="rounded-xl border border-border/60 bg-card p-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <Icon className="h-4 w-4 shrink-0 text-rose-500" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase text-muted-foreground">
                        {r.targetType === "sentence" ? t("targetSentence") : r.targetType === "room" ? t("targetRoom") : t("targetProfile")}
                      </span>
                      <Badge variant="destructive" className="rounded-md px-1.5 py-0 text-[10px]">
                        {t(REASON_KEY[r.reason] ?? "reasonOther")}
                      </Badge>
                      {r.sentence && (
                        <Badge variant="outline" className="rounded-md px-1.5 py-0 text-[10px]">
                          {r.sentence.hidden ? t("hiddenBadge") : t("liveBadge")}
                        </Badge>
                      )}
                      <span className="ml-auto text-[10px] text-muted-foreground">
                        {new Date(r.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="mt-2 line-clamp-2 rounded-lg bg-muted/40 px-3 py-2 text-sm leading-relaxed">
                      {r.sentence?.text ?? (r.room ? `${r.room.topic || "—"} · ${r.room.status}` : t("noRoom"))}
                    </p>
                    {r.note && (
                      <p className="mt-1.5 text-xs italic text-muted-foreground">
                        {t("noteLabel")}: {r.note}
                      </p>
                    )}
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 rounded-lg"
                        disabled={busy === r.id}
                        onClick={() => void act({ reportId: r.id, action: "reviewed" })}
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                        {t("actionReview")}
                      </Button>
                      {r.targetType === "sentence" && r.sentence && !r.sentence.hidden && (
                        <Button
                          size="sm"
                          className="h-8 rounded-lg bg-rose-500 text-white hover:bg-rose-600"
                          disabled={busy === r.id}
                          onClick={() => void act({ reportId: r.id, action: "hide" })}
                        >
                          <EyeOff className="h-3.5 w-3.5" aria-hidden="true" />
                          {t("actionHide")}
                        </Button>
                      )}
                      {r.targetType === "sentence" && r.sentence?.hidden && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 rounded-lg"
                          disabled={busy === r.id}
                          onClick={() => void act({ reportId: r.id, action: "unhide" })}
                        >
                          <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                          {t("actionUnhide")}
                        </Button>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          )
        ) : flagged.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border/80 bg-card/50 px-4 py-6 text-center text-sm text-muted-foreground">
            {t("empty")}
          </p>
        ) : (
          <ul className="max-h-96 space-y-2 overflow-y-auto pr-1">
            {flagged.map((f) => (
              <li key={f.id} className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-3">
                <p className="line-clamp-2 text-sm leading-relaxed">{f.text}</p>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <span className="text-[10px] text-muted-foreground">{f.day}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 rounded-lg"
                    disabled={busy === f.id}
                    onClick={() => void act({ submissionId: f.id, action: "unhide" })}
                  >
                    <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                    {t("actionUnhide")}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
