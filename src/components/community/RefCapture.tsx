"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Gift } from "lucide-react";
import { apiGet } from "@/lib/client-api";
import { getDeviceId } from "@/hooks/use-device";
import { useAuthInit, useAuthValue } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { captureRefFromUrl, claimPendingRef } from "./referral-shared";

/* ─── RefCapture (D41 fix) — global referral claim + login-gate banner ───────
 * Two exported pieces, both rendered app-wide so the `?ref=` funnel never
 * depends on the Community section being visited:
 *
 *  <RefCapture mode="claim" />   → AppShell. Captures the URL code and, the
 *    moment a session exists, fires the ONE claim POST (welcome XP toast).
 *    Covers: arriving signed-in via an invite link, and registering from the
 *    gate (the refresh re-renders AppShell → claim fires immediately).
 *
 *  <RefCapture mode="capture" /> → AppShell too (claim already covers it,
 *    kept explicit) — same effect without the claim step.
 *
 * The LoginGate uses <RefGateBanner /> below: it captures the code for
 * signed-out visitors and shows the personalized invite banner right on the
 * signup card — the friend sees WHO invited them before creating an account. */

export default function RefCapture({ mode }: { mode: "capture" | "claim" }) {
  const { toast } = useToast();
  const t = useTranslations("referral");
  useAuthInit();
  const authUser = useAuthValue((s) => s.user, null);
  const authLoaded = useAuthValue((s) => s.loaded, false);

  useEffect(() => {
    captureRefFromUrl(); // idempotent — also reads a previously stored code
  }, []);

  useEffect(() => {
    if (mode !== "claim" || !authLoaded || !authUser) return;
    void (async () => {
      const outcome = await claimPendingRef(getDeviceId());
      if (outcome?.claimed) {
        toast({ title: t("welcomeToast") });
        // Nudge the XP-reading cards (profile/progress/community).
        window.dispatchEvent(new Event("bolo_xp_bump"));
      }
    })();
  }, [mode, authLoaded, authUser, toast, t]);

  return null;
}

/** Personalized invite banner for the LOGIN GATE (signed-out visitors). */
export function RefGateBanner() {
  const t = useTranslations("referral");
  const [inviterName, setInviterName] = useState("");
  const [hasCode, setHasCode] = useState(false);

  useEffect(() => {
    let dead = false;
    queueMicrotask(() => {
      const code = captureRefFromUrl();
      if (dead || !code) return;
      setHasCode(true);
      apiGet<{ valid: boolean; name?: string }>(
        `/api/referral/lookup?code=${encodeURIComponent(code)}`
      )
        .then((d) => {
          if (!dead && d.valid && d.name) setInviterName(d.name);
        })
        .catch(() => {
          /* unreachable → generic banner text */
        });
    });
    return () => {
      dead = true;
    };
  }, []);

  if (!hasCode) return null;

  return (
    <div
      className="mx-5 mt-4 flex items-start gap-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 sm:mx-6"
      role="status"
    >
      <Gift className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden />
      <div className="min-w-0">
        <p className="text-sm font-bold text-emerald-800 dark:text-emerald-200">
          {inviterName ? t("invitedYou", { name: inviterName }) : t("invitedYouGeneric")}
        </p>
        <p className="mt-0.5 text-xs text-emerald-700/90 dark:text-emerald-300/90">
          {t("rewardNote")}
        </p>
      </div>
    </div>
  );
}
