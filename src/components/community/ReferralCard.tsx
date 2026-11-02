"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Check, Copy, Gift, RefreshCw, UserPlus, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { apiGet } from "@/lib/client-api";
import { useAuth, useAuthInit, useAuthValue } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { captureRefFromUrl } from "./referral-shared";

// ─── Referral card (D41, ROADMAP-60) — Community section ────────────────────
// Two faces, one card:
//   • INVITE (signed in): the derived invite code + one-tap copy of the full
//     `?ref=` link, joined/XP chips and the last 5 invitees.
//   • CLAIM: a stored `bolo_ref` (captured app-wide by referral-shared) shows
//     a personalized invite banner for signed-out visitors. The CLAIM POST
//     itself lives in RefCapture (AppShell) so it fires the moment a session
//     exists — no Community visit required; this card only DISPLAYS state.
// Emerald/teal palette to match the community family. No auth dialog is
// opened from here — there is no global open-auth channel in the app, so the
// banner's button explains that the reward lands automatically after login.

interface ReferralInfo {
  code: string;
  invited: number;
  xpEarned: number;
  recent: { name: string; createdAt: string; xp: number }[];
}

export default function ReferralCard() {
  const t = useTranslations("referral");
  const locale = useLocale();
  const dateLocale = locale === "bn" ? "bn-BD" : locale === "hi" ? "hi-IN" : "en-US";
  const { toast } = useToast();

  useAuthInit(); // no-op when the header already fetched /api/auth/me
  const authUser = useAuthValue((s) => s.user, null);
  const authLoaded = useAuthValue((s) => s.loaded, false);

  const [info, setInfo] = useState<ReferralInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [networkGone, setNetworkGone] = useState(false); // offline → hide the card
  const [inviteCode, setInviteCode] = useState<string | null>(null); // pending ?ref=
  const [inviterName, setInviterName] = useState(""); // "" → generic banner
  const [copied, setCopied] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  /* ── pending ref (captured app-wide by referral-shared) ─────────────────── */
  useEffect(() => {
    const code = captureRefFromUrl();
    if (code) setInviteCode(code);
  }, []);

  /* ── invite dashboard data (signed in only) ─────────────────────────────── */
  const load = useCallback(async () => {
    setLoading(true);
    setFailed(false);
    try {
      const d = await apiGet<ReferralInfo>("/api/referral");
      if (mounted.current) setInfo(d);
    } catch (e) {
      if (!mounted.current) return;
      // apiGet throws TypeError on network failure, Error (localized) when
      // the server answered with an error status.
      if (e instanceof TypeError) setNetworkGone(true); // hide gracefully
      else setFailed(true); // 5xx etc. → stay visible with a retry
    } finally {
      if (mounted.current) setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!authLoaded) return; // wait for /api/auth/me — never flash the wrong face
    if (!authUser) {
      setInfo(null);
      setLoading(false);
      return;
    }
    void load();
    // Claims from OTHER cards grant XP mid-session — keep the numbers fresh.
    // Live store read (not the hook) so the listener never goes stale.
    const bump = () => {
      if (useAuth.getState().user) void load();
    };
    window.addEventListener("bolo_xp_bump", bump);
    return () => window.removeEventListener("bolo_xp_bump", bump);
  }, [authLoaded, authUser, load]);

  /* ── who invited me? (public lookup, signed-out banner) ────────────────── */
  useEffect(() => {
    if (!inviteCode || authUser) return;
    let dead = false;
    setInviterName("");
    apiGet<{ valid: boolean; name?: string }>(
      `/api/referral/lookup?code=${encodeURIComponent(inviteCode)}`
    )
      .then((d) => {
        if (!dead) setInviterName(d.valid && d.name ? d.name : "");
      })
      .catch(() => {
        if (!dead) setInviterName(""); // unreachable → generic banner
      });
    return () => {
      dead = true;
    };
  }, [inviteCode, authUser]);

  const copyLink = async () => {
    if (!info) return;
    const link = `${window.location.origin}/?ref=${info.code}`;
    let ok = false;
    try {
      await navigator.clipboard.writeText(link);
      ok = true;
    } catch {
      // Clipboard API blocked → legacy textarea fallback
      try {
        const ta = document.createElement("textarea");
        ta.value = link;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand("copy");
        ta.remove();
      } catch {
        ok = false;
      }
    }
    if (ok) {
      setCopied(true);
      toast({ title: t("copied") });
      window.setTimeout(() => setCopied(false), 2000);
    } else {
      toast({ title: t("copyFailed"), variant: "destructive" });
    }
  };

  const fmtDate = (iso: string) => {
    try {
      return new Intl.DateTimeFormat(dateLocale, { day: "numeric", month: "short" }).format(
        new Date(iso)
      );
    } catch {
      return "";
    }
  };

  /* ── offline: hide the card gracefully ── */
  if (networkGone) return null;

  const showSkeleton = !authLoaded || (authUser !== null && loading && !info);

  return (
    <Card className="premium-card animate-fade-in-up rounded-2xl border-border/70 bg-card" aria-label={t("aria")}>
      <CardContent className="space-y-4 p-4 sm:p-6">
        {/* header */}
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/90 to-teal-600/90 text-white shadow-md shadow-emerald-500/30">
            <Users className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h3 className="text-sm font-bold sm:text-base">{t("title")}</h3>
            <p className="text-xs text-muted-foreground">{t("subtitle")}</p>
          </div>
        </div>

        {showSkeleton ? (
          /* loading — skeleton face */
          <div className="space-y-3" aria-busy="true">
            <Skeleton className="h-16 w-full rounded-xl" />
            <div className="flex gap-2">
              <Skeleton className="h-8 w-28 rounded-lg" />
              <Skeleton className="h-8 w-28 rounded-lg" />
            </div>
            <Skeleton className="h-20 w-full rounded-xl" />
          </div>
        ) : failed ? (
          /* server error — visible with retry */
          <div className="flex items-center justify-between gap-3 rounded-xl border border-dashed border-border/80 px-4 py-3">
            <p className="text-sm text-muted-foreground">{t("loadFailed")}</p>
            <Button
              size="sm"
              variant="outline"
              className="min-h-9 shrink-0 gap-1.5 rounded-xl"
              onClick={() => void load()}
            >
              <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
              {t("retry")}
            </Button>
          </div>
        ) : !authUser ? (
          /* signed out — invite banner (claim later) or passive teaser */
          inviteCode ? (
            <div className="space-y-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 dark:border-emerald-400/30">
              <div className="flex items-start gap-3">
                <Gift className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-sm font-bold text-emerald-800 dark:text-emerald-200">
                    {inviterName ? t("invitedYou", { name: inviterName }) : t("invitedYouGeneric")}
                  </p>
                  <p className="mt-0.5 text-xs text-emerald-700/90 dark:text-emerald-300/90">
                    {t("rewardNote")}
                  </p>
                </div>
              </div>
              {/* No global open-auth channel exists — the toast explains that
                  the reward lands automatically right after login/register. */}
              <Button
                size="sm"
                className="min-h-9 w-full gap-1.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 sm:w-auto"
                onClick={() => toast({ title: t("claimHint") })}
              >
                <UserPlus className="h-4 w-4" aria-hidden="true" />
                {t("claimLogin")}
              </Button>
            </div>
          ) : (
            <div className="flex items-start gap-3 rounded-xl border border-dashed border-emerald-500/40 bg-emerald-500/5 p-4">
              <Gift className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <div className="min-w-0">
                <p className="text-sm font-bold">{t("loginTitle")}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{t("loginPrompt")}</p>
              </div>
            </div>
          )
        ) : info ? (
          /* signed in — the invite face */
          <>
            {/* invite link / code */}
            <div className="space-y-2 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3 dark:border-emerald-400/25">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                {t("inviteLink")}
              </p>
              <div className="flex items-center justify-between gap-2">
                <p className="min-w-0 truncate font-mono text-base font-bold tracking-[0.2em] text-emerald-700 dark:text-emerald-300 sm:text-lg">
                  {info.code}
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="min-h-9 shrink-0 gap-1.5 rounded-xl border-emerald-500/40 hover:bg-emerald-500/10"
                  onClick={() => void copyLink()}
                  aria-label={t("copyLink")}
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                  ) : (
                    <Copy className="h-4 w-4" aria-hidden="true" />
                  )}
                  <span className="text-xs font-semibold">{t("copyLink")}</span>
                </Button>
              </div>
            </div>

            {/* stats chips */}
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 rounded-lg bg-muted/50 px-3 py-1.5 text-xs font-semibold">
                <Users className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                {t("joined")}: <span className="tabular-nums">{info.invited}</span>
              </span>
              <span className="flex items-center gap-1.5 rounded-lg bg-muted/50 px-3 py-1.5 text-xs font-semibold">
                <Gift className="h-3.5 w-3.5 text-amber-500" aria-hidden="true" />
                {t("xpEarned")}: <span className="tabular-nums">{info.xpEarned}</span>
              </span>
            </div>

            {/* recent invitees */}
            {info.recent.length === 0 ? (
              <p className="rounded-xl border border-dashed border-border/80 bg-card/50 px-4 py-6 text-center text-sm text-muted-foreground">
                {t("empty")}
              </p>
            ) : (
              <div className="space-y-1.5">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {t("recentTitle")}
                </p>
                <ul className="nice-scroll max-h-40 space-y-1.5 overflow-y-auto pr-1">
                  {info.recent.map((r, i) => (
                    <li
                      key={`${r.createdAt}-${i}`}
                      className="flex items-center gap-2 rounded-lg bg-muted/30 px-3 py-2"
                    >
                      <span className="min-w-0 flex-1 truncate text-sm font-medium">
                        {r.name || t("aFriend")}
                      </span>
                      <span className="shrink-0 text-[11px] text-muted-foreground">
                        {fmtDate(r.createdAt)}
                      </span>
                      <span className="shrink-0 rounded-md bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-bold tabular-nums text-emerald-700 dark:text-emerald-300">
                        {t("xpBadge", { n: r.xp })}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* reward explainer */}
            <p className="flex items-start gap-1.5 text-[11px] leading-relaxed text-muted-foreground">
              <Gift className="mt-0.5 h-3 w-3 shrink-0 text-emerald-500" aria-hidden="true" />
              {t("rewardNote")}
            </p>
          </>
        ) : null}
      </CardContent>
    </Card>
  );
}
