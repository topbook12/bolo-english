"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Users, Copy, PhoneCall, Ban, Loader2, ShieldCheck, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { apiGet, apiPost } from "@/lib/client-api";
import { useToast } from "@/hooks/use-toast";
import { useDevice } from "@/hooks/use-device";
import { track } from "@/lib/track";
import { cn } from "@/lib/utils";

// ─── Practice-partner matching (D31, ROADMAP-60) ────────────────────────────
// OPT-IN matching on level + goal + recent activity (timezone is never
// stored — "active" is the honest proxy). One tap creates a PRIVATE call
// room: the 6-char code doubles as the invite (share it anywhere).

interface Partner {
  deviceId: string;
  name: string;
  level: string;
  goal: string;
  avatar: string;
  lastActive: "today" | "yesterday" | "earlier";
  xpWeek: number;
  score: number;
}

interface PartnersData {
  me: { optIn: boolean; level: string; goal: string };
  partners: Partner[];
  totalOptIn: number;
}

const ACTIVE_KEY = ["activeToday", "activeYesterday", "activeEarlier"] as const;

export default function PartnerMatchCard({ onNavigate }: { onNavigate: (tab: "speaking") => void }) {
  const t = useTranslations("community.partners");
  const { deviceId, refresh } = useDevice();
  const { toast } = useToast();
  const [data, setData] = useState<PartnersData | null>(null);
  const [loading, setLoading] = useState(true);
  const [optIn, setOptIn] = useState(false);
  const [savingOptIn, setSavingOptIn] = useState(false);
  const [invite, setInvite] = useState<{ code: string } | null>(null);
  const [inviteBusy, setInviteBusy] = useState<string | null>(null);
  const [blockTarget, setBlockTarget] = useState<Partner | null>(null);

  const load = useCallback(async () => {
    if (!deviceId) return;
    try {
      const d = await apiGet<PartnersData>(`/api/partners?deviceId=${encodeURIComponent(deviceId)}`);
      setData(d);
      setOptIn(d.me.optIn);
    } catch {
      setData({ me: { optIn: false, level: "beginner", goal: "general" }, partners: [], totalOptIn: 0 });
    } finally {
      setLoading(false);
    }
  }, [deviceId]);

  useEffect(() => {
    void load();
  }, [load]);

  const toggleOptIn = async (next: boolean) => {
    if (!deviceId || savingOptIn) return;
    setSavingOptIn(true);
    setOptIn(next); // optimistic — the switch must feel instant
    try {
      await apiPost("/api/config", { deviceId, partnerOptIn: next });
      await refresh();
      await load();
    } catch (e) {
      setOptIn(!next);
      toast({ title: (e as Error).message, variant: "destructive" });
    } finally {
      setSavingOptIn(false);
    }
  };

  const invitePartner = async (p: Partner) => {
    if (!deviceId || inviteBusy) return;
    setInviteBusy(p.deviceId);
    try {
      // One tap → private one-to-one room; the code IS the invite.
      const res = await apiPost<{ roomId: string; code: string }>("/api/call/join", {
        deviceId,
        name: p.name,
        intent: "one",
        mode: "private",
      });
      track("partner_invited");
      setInvite({ code: res.code });
      // Handoff: the Speaking tab picks this up on mount and joins the room.
      try {
        localStorage.setItem("bolo_call_handoff", JSON.stringify({ intent: "group-code", code: res.code }));
      } catch {
        /* private mode — the dialog shows the code anyway */
      }
    } catch (e) {
      toast({ title: (e as Error).message, variant: "destructive" });
    } finally {
      setInviteBusy(null);
    }
  };

  const blockPartner = async (p: Partner) => {
    if (!deviceId) return;
    try {
      await apiPost("/api/block", { deviceId, blockedDeviceId: p.deviceId, block: true });
      setBlockTarget(null);
      toast({ title: t("blockedToast") });
      await load();
    } catch (e) {
      toast({ title: (e as Error).message, variant: "destructive" });
    }
  };

  const copyCode = async () => {
    if (!invite) return;
    try {
      await navigator.clipboard.writeText(invite.code);
      toast({ title: t("inviteCopied") });
    } catch {
      /* clipboard unavailable — the code is visible in the dialog */
    }
  };

  const goCall = () => {
    setInvite(null);
    onNavigate("speaking");
  };

  return (
    <Card className="premium-card animate-fade-in-up rounded-2xl border-border/70 bg-card">
      <CardContent className="space-y-4 p-4 sm:p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500/90 to-pink-600/90 text-white shadow-md shadow-rose-500/30">
            <Users className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-sm font-bold sm:text-base">{t("title")}</h3>
            <p className="text-xs text-muted-foreground">{t("subtitle")}</p>
          </div>
        </div>

        {/* opt-in switch */}
        <div className="flex items-start justify-between gap-3 rounded-xl border border-border/70 bg-muted/20 p-3">
          <div className="min-w-0">
            <label htmlFor="partner-optin" className="text-sm font-semibold">
              {t("optInLabel")}
            </label>
            <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{t("optInHint")}</p>
          </div>
          <Switch
            id="partner-optin"
            checked={optIn}
            onCheckedChange={(v) => void toggleOptIn(v)}
            disabled={savingOptIn || !deviceId}
            className="mt-1 shrink-0"
          />
        </div>

        {loading ? (
          <div className="space-y-2" aria-busy="true">
            {[0, 1, 2].map((i) => (
              <Skeleton key={i} className="h-14 w-full rounded-xl" />
            ))}
          </div>
        ) : !optIn ? null : !data || data.partners.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border/80 bg-card/50 px-4 py-5 text-center text-sm text-muted-foreground">
            {t("empty")}
          </p>
        ) : (
          <ul className="space-y-2">
            {data.partners.map((p) => {
              const scoreLabel = p.score >= 4 ? t("matchHigh") : p.score >= 2 ? t("matchMid") : t("matchLow");
              return (
                <li key={p.deviceId} className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-3">
                  <span aria-hidden="true" className="text-xl">{p.avatar}</span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{p.name}</p>
                    <p className="mt-0.5 flex flex-wrap items-center gap-1 text-[11px] text-muted-foreground">
                      <span className="rounded bg-muted px-1.5 py-0.5 font-semibold">
                        {t(`levelNames.${p.level}` as Parameters<typeof t>[0])}
                      </span>
                      <span className="rounded bg-muted px-1.5 py-0.5 font-semibold">
                        {t(`goalNames.${p.goal}` as Parameters<typeof t>[0])}
                      </span>
                      <span>{t(ACTIVE_KEY[p.lastActive === "today" ? 0 : p.lastActive === "yesterday" ? 1 : 2])}</span>
                    </p>
                  </div>
                  <span
                    className={cn(
                      "hidden shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold sm:block",
                      p.score >= 4
                        ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {scoreLabel}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => void invitePartner(p)}
                    disabled={inviteBusy === p.deviceId}
                    className="h-9 shrink-0 gap-1.5 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-md shadow-rose-500/25"
                  >
                    {inviteBusy === p.deviceId ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
                    ) : (
                      <PhoneCall className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                    <span className="hidden sm:inline">{t("invite")}</span>
                  </Button>
                  <button
                    onClick={() => setBlockTarget(p)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    aria-label={t("block")}
                  >
                    <Ban className="h-4 w-4" aria-hidden="true" />
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        <p className="flex items-start gap-1.5 text-[11px] leading-relaxed text-muted-foreground">
          <ShieldCheck className="mt-0.5 h-3 w-3 shrink-0" aria-hidden="true" />
          {t("privacyNote")}
        </p>

        {/* invite dialog — the code IS the invite */}
        <Dialog open={Boolean(invite)} onOpenChange={(o) => !o && setInvite(null)}>
          <DialogContent className="max-w-sm rounded-2xl">
            <DialogHeader>
              <DialogTitle>{t("inviteTitle")}</DialogTitle>
              <DialogDescription>{t("inviteDesc")}</DialogDescription>
            </DialogHeader>
            <div className="space-y-3">
              <button
                onClick={() => void copyCode()}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-dashed border-rose-500/40 bg-rose-500/5 px-4 py-4 transition-colors hover:bg-rose-500/10"
                aria-label={t("inviteCopied")}
              >
                <span className="font-mono text-2xl font-black tracking-[0.3em] text-rose-600 dark:text-rose-300">
                  {invite?.code}
                </span>
                <Copy className="h-4 w-4 text-rose-500" aria-hidden="true" />
              </button>
              <Button onClick={goCall} className="h-11 w-full gap-2 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white">
                {t("inviteGo")} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* block confirm */}
        <AlertDialog open={Boolean(blockTarget)} onOpenChange={(o) => !o && setBlockTarget(null)}>
          <AlertDialogContent className="max-w-sm rounded-2xl">
            <AlertDialogHeader>
              <AlertDialogTitle>{t("blockConfirmTitle")}</AlertDialogTitle>
              <AlertDialogDescription>{t("blockConfirmDesc")}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="rounded-xl">✕</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => blockTarget && void blockPartner(blockTarget)}
                className="rounded-xl bg-destructive text-white hover:bg-destructive/90"
              >
                {t("block")}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardContent>
    </Card>
  );
}
