"use client";

// ─── Push notifications card (D12, ROADMAP-60.md) ───────────────────────────
// Settings card for the opt-in daily reminders (today's word + streak
// danger). Fully opt-in (roadmap rule), degrades per browser/deployment:
// unsupported → hidden, VAPID-missing → "not available here", denied →
// hint with browser-settings pointer.

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Bell, BellOff, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import { useToast } from "@/hooks/use-toast";
import {
  getPushState,
  subscribeToPush,
  unsubscribeFromPush,
  type PushState,
} from "@/lib/push-client";

export default function PushCard() {
  const t = useTranslations("settings.push");
  const locale = useLocale();
  const { toast } = useToast();
  const [state, setState] = useState<PushState | null>(null);
  const [busy, setBusy] = useState(false);

  const sync = () => {
    getPushState()
      .then(setState)
      .catch(() => setState("off"));
  };
  useEffect(sync, []);

  const enable = async () => {
    setBusy(true);
    try {
      await subscribeToPush(locale);
      setState("subscribed");
      toast({ title: t("enabledTitle"), description: t("enabledDesc") });
    } catch (e) {
      const code = (e as Error).message;
      if (code === "denied") {
        toast({ title: t("deniedTitle"), description: t("deniedDesc"), variant: "destructive" });
      } else if (code === "unconfigured") {
        toast({ title: t("unavailableTitle"), description: t("unavailableDesc"), variant: "destructive" });
      } else {
        toast({ title: t("failedTitle"), description: t("failedDesc"), variant: "destructive" });
      }
    } finally {
      setBusy(false);
      sync();
    }
  };

  const disable = async () => {
    setBusy(true);
    try {
      await unsubscribeFromPush();
      toast({ title: t("disabledTitle") });
    } finally {
      setBusy(false);
      sync();
    }
  };

  // Unsupported browsers (no SW/Push/Notification API): the feature doesn't
  // exist there — hide the card entirely instead of teasing it.
  if (state === "unsupported") return null;

  return (
    <Card className="premium-card border-border/70 rounded-2xl bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/90 to-cyan-600/90 text-white shadow-md shadow-sky-500/30 ring-1 ring-inset ring-white/25 dark:shadow-sky-500/20">
            <Bell className="h-4.5 w-4.5" aria-hidden />
          </span>
          {t("title")}
        </CardTitle>
        <CardDescription>{t("desc")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-xs leading-relaxed text-muted-foreground">
          {state === "subscribed" ? t("statusOn") : state === "denied" ? t("statusDenied") : t("statusOff")}
        </p>
        <div className="flex flex-col gap-2 sm:flex-row">
          {state === "subscribed" ? (
            <Button
              variant="outline"
              onClick={disable}
              disabled={busy || state === null}
              className="min-h-11 flex-1 gap-1.5"
            >
              {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <BellOff className="h-4 w-4" aria-hidden />}
              {t("turnOff")}
            </Button>
          ) : (
            <Button
              onClick={enable}
              disabled={busy || state === null || state === "unconfigured"}
              className="min-h-11 flex-1 gap-1.5 bg-gradient-to-br from-sky-500 to-cyan-600 text-white shadow-sm hover:from-sky-600 hover:to-cyan-700"
            >
              {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Bell className="h-4 w-4" aria-hidden />}
              {t("turnOn")}
            </Button>
          )}
        </div>
        {state === "unconfigured" && (
          <p className="text-[11px] leading-relaxed text-muted-foreground">{t("unavailableDesc")}</p>
        )}
        {state === "denied" && (
          <p className="text-[11px] leading-relaxed text-muted-foreground">{t("deniedHint")}</p>
        )}
      </CardContent>
    </Card>
  );
}
