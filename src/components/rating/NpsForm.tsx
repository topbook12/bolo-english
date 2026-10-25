"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { getDeviceId } from "@/hooks/use-device";
import { track } from "@/lib/track";
import { MAX_COMMENT_LEN, NPS_MAX, NPS_MIN } from "@/lib/rating";
import { cn } from "@/lib/utils";

// The 0-10 NPS scale form (D4) — shared by the weekly floating prompt and
// the Settings "rate us" card. Standard Net Promoter Score: 0-10, promoters
// 9-10, passives 7-8, detractors 0-6 (scoring happens server-side).

export default function NpsForm({ onDone }: { onDone?: () => void }) {
  const t = useTranslations("rating");
  const { toast } = useToast();
  const [score, setScore] = useState<number | null>(null);
  const [comment, setComment] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    if (score === null || busy) return;
    setBusy(true);
    try {
      const res = await fetch("/api/rating", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          deviceId: getDeviceId(),
          kind: "nps",
          score,
          comment: comment.trim(),
          context: "",
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      track("rating_sent", { kind: "nps" });
      toast({ title: t("thanks") });
      onDone?.();
    } catch {
      toast({ title: t("submitFailed"), variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-2.5">
      <div
        className="grid grid-cols-6 gap-1.5"
        role="group"
        aria-label={t("nps.title")}
      >
        {Array.from({ length: NPS_MAX - NPS_MIN + 1 }, (_, i) => i).map((n) => {
          const active = score === n;
          return (
            <button
              key={n}
              type="button"
              onClick={() => setScore(n)}
              aria-pressed={active}
              aria-label={String(n)}
              className={cn(
                "flex h-10 items-center justify-center rounded-lg border text-sm font-semibold tabular-nums transition-all",
                active
                  ? "border-transparent bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-sm"
                  : "border-border/60 hover:bg-accent"
              )}
            >
              {n}
            </button>
          );
        })}
      </div>
      <div className="flex justify-between text-[11px] text-muted-foreground">
        <span>{t("nps.low")}</span>
        <span>{t("nps.high")}</span>
      </div>

      {score !== null && (
        <div className="space-y-2 animate-fade-in-up">
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value.slice(0, MAX_COMMENT_LEN))}
            placeholder={t("nps.commentPlaceholder")}
            rows={2}
            maxLength={MAX_COMMENT_LEN}
            className="min-h-11 text-sm"
            aria-label={t("nps.commentPlaceholder")}
          />
          <Button
            size="sm"
            onClick={() => void submit()}
            disabled={busy}
            className="min-h-9 w-full gap-1.5 bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-sm hover:from-violet-600 hover:to-purple-700"
          >
            {busy ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            ) : (
              <Send className="h-4 w-4" aria-hidden />
            )}
            {t("rate.submit")}
          </Button>
          <p className="text-[11px] leading-relaxed text-muted-foreground">
            {t("privacyNote")}
          </p>
        </div>
      )}
    </div>
  );
}
