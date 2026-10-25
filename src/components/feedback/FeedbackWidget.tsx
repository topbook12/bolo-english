"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Bug,
  Lightbulb,
  MessageSquareWarning,
  MessageSquarePlus,
  Loader2,
  ShieldCheck,
  Send,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { getDeviceId } from "@/hooks/use-device";
import { track } from "@/lib/track";
import {
  FEEDBACK_CATEGORIES,
  MAX_MESSAGE_LEN,
  type FeedbackCategory,
} from "@/lib/feedback";
import { cn } from "@/lib/utils";

// Floating feedback widget (D3, ROADMAP-60). Available on every tab, for
// signed-out users too (deviceId-only). The dialog is fully controlled by a
// plain button trigger (no Radix Trigger mounted while closed) so hydration
// can never diverge — same armor pattern as the mobile nav Sheet.
//
// Privacy note surfaced in the dialog: nothing is auto-attached — no email,
// no IP. The page path (query stripped server-side) tells the owner WHERE
// the feedback came from, nothing more.

const CATEGORY_META: Record<
  FeedbackCategory,
  { icon: React.ComponentType<{ className?: string }>; tint: string; ring: string }
> = {
  bug: {
    icon: Bug,
    tint: "bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300",
    ring: "ring-rose-500 bg-rose-50 dark:bg-rose-950/80",
  },
  idea: {
    icon: Lightbulb,
    tint: "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300",
    ring: "ring-amber-500 bg-amber-50 dark:bg-amber-950/80",
  },
  problem: {
    icon: MessageSquareWarning,
    tint: "bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300",
    ring: "ring-orange-500 bg-orange-50 dark:bg-orange-950/80",
  },
};

export default function FeedbackWidget() {
  const t = useTranslations("feedback");
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState<FeedbackCategory | null>(null);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const trimmed = message.trim();
  const canSubmit = !!category && trimmed.length >= 3 && !busy;

  const onOpenChange = (next: boolean) => {
    setOpen(next);
    if (next) {
      setError(null);
    }
  };

  const submit = async () => {
    if (!category || trimmed.length < 3 || busy) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          deviceId: getDeviceId(),
          category,
          message: trimmed,
          page: window.location.pathname,
        }),
      });
      const json = await res.json().catch(() => null);
      if (res.ok && json?.ok) {
        // Analytics: anonymous demand signal (cat is enum-ish, sanitized
        // upstream by the /api/track whitelist).
        track("feedback_sent", { cat: category });
        toast({ title: t("successTitle"), description: t("successBody") });
        setOpen(false);
        setMessage("");
        setCategory(null);
      } else {
        setError(json?.error === "rate_limited" ? t("rateLimited") : t("error"));
      }
    } catch {
      setError(t("error"));
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <Button
        size="icon"
        onClick={() => setOpen(true)}
        aria-label={t("fabLabel")}
        title={t("fabLabel")}
        className="fixed bottom-24 right-4 z-40 h-12 w-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/40 ring-1 ring-inset ring-white/25 transition-transform hover:scale-105 active:scale-95 md:bottom-6 md:right-6"
      >
        <MessageSquarePlus className="h-5 w-5" aria-hidden />
      </Button>

      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-sm">
                <MessageSquarePlus className="h-4 w-4" aria-hidden />
              </span>
              {t("title")}
            </DialogTitle>
            <DialogDescription>{t("desc")}</DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Category picker */}
            <div className="grid grid-cols-3 gap-2" role="group" aria-label={t("categoryLabel")}>
              {FEEDBACK_CATEGORIES.map((c) => {
                const meta = CATEGORY_META[c];
                const Icon = meta.icon;
                const active = category === c;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    aria-pressed={active}
                    className={cn(
                      "flex min-h-[72px] flex-col items-center justify-center gap-1.5 rounded-xl border border-border/70 p-2 text-xs font-semibold transition-all",
                      active
                        ? `ring-2 ${meta.ring} shadow-sm`
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-lg",
                        meta.tint
                      )}
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    {t(`cat_${c}`)}
                  </button>
                );
              })}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="feedback-message" className="text-sm font-semibold">
                {t("messageLabel")}
              </label>
              <Textarea
                id="feedback-message"
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, MAX_MESSAGE_LEN))}
                placeholder={t("placeholder")}
                rows={4}
                maxLength={MAX_MESSAGE_LEN}
                className="resize-none"
              />
              <div className="flex items-center justify-between gap-2">
                {error ? (
                  <p className="text-xs font-medium text-destructive" role="alert">
                    {error}
                  </p>
                ) : (
                  <p className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <ShieldCheck className="h-3 w-3 shrink-0" aria-hidden />
                    {t("privacyNote")}
                  </p>
                )}
                <span className="shrink-0 text-[11px] tabular-nums text-muted-foreground">
                  {trimmed.length}/{MAX_MESSAGE_LEN}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2">
              <Button
                variant="ghost"
                onClick={() => setOpen(false)}
                disabled={busy}
                className="min-h-11 sm:min-h-9"
              >
                {t("cancel")}
              </Button>
              <Button
                onClick={submit}
                disabled={!canSubmit}
                className="min-h-11 gap-1.5 bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-md shadow-violet-500/30 sm:min-h-9"
              >
                {busy ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                ) : (
                  <Send className="h-4 w-4" aria-hidden />
                )}
                {busy ? t("sending") : t("submit")}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
