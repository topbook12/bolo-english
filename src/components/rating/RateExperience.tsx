"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Angry,
  Frown,
  Meh,
  Smile,
  Laugh,
  Loader2,
  Heart,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { getDeviceId } from "@/hooks/use-device";
import { track } from "@/lib/track";
import { MAX_COMMENT_LEN } from "@/lib/rating";
import { cn } from "@/lib/utils";

// Inline "How was it?" card (D4, ROADMAP-60) — dropped onto the surfaces a
// session ENDS on: the speaking call-ended screen and quiz score screens.
// 1-5 faces + optional comment; skippable, never blocking (renders null
// once dismissed/submitted-collapsed).
//
// Privacy mirrors /api/rating: only kind/score/comment/context leave the
// device; no IP/UA/email is ever attached.

const FACES = [
  { score: 1, Icon: Angry, color: "text-rose-500" },
  { score: 2, Icon: Frown, color: "text-orange-500" },
  { score: 3, Icon: Meh, color: "text-amber-500" },
  { score: 4, Icon: Smile, color: "text-lime-600" },
  { score: 5, Icon: Laugh, color: "text-emerald-500" },
] as const;

interface RateExperienceProps {
  kind: "speaking" | "quiz";
  /** Path-only or topic-key tag, e.g. "/speaking", "tenses". */
  context?: string;
}

export default function RateExperience({ kind, context }: RateExperienceProps) {
  const t = useTranslations("rating");
  const { toast } = useToast();
  const [score, setScore] = useState<number | null>(null);
  const [comment, setComment] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  const submit = async () => {
    if (score === null || busy) return;
    setBusy(true);
    try {
      const res = await fetch("/api/rating", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          deviceId: getDeviceId(),
          kind,
          score,
          comment: comment.trim(),
          context: context ?? "",
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      track("rating_sent", { kind });
      setDone(true);
      toast({ title: t("thanks") });
    } catch {
      toast({ title: t("submitFailed"), variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  if (done) {
    return (
      <Card className="border-emerald-200/70 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-950/30">
        <CardContent className="flex items-center justify-center gap-2 p-3.5 text-sm font-medium text-emerald-800 dark:text-emerald-300">
          <Heart className="h-4 w-4" aria-hidden />
          {t("thanksFull")}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border/70 bg-card/80">
      <CardContent className="space-y-3 p-4">
        <p className="text-sm font-semibold">{t("rate.title")}</p>

        <div className="flex items-center justify-center gap-2.5" role="group" aria-label={t("rate.title")}>
          {FACES.map(({ score: s, Icon, color }) => {
            const active = score === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => setScore(s)}
                aria-pressed={active}
                aria-label={t(`rate.face_${s}`)}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full border transition-all",
                  active
                    ? "border-transparent bg-primary/10 scale-110 shadow-sm"
                    : "border-border/60 hover:bg-accent hover:scale-105"
                )}
              >
                <Icon className={cn("h-6 w-6", color)} aria-hidden />
              </button>
            );
          })}
        </div>

        {score !== null && (
          <div className="space-y-2.5 animate-fade-in-up">
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value.slice(0, MAX_COMMENT_LEN))}
              placeholder={t("rate.commentPlaceholder")}
              rows={2}
              maxLength={MAX_COMMENT_LEN}
              className="min-h-11 text-sm"
              aria-label={t("rate.commentPlaceholder")}
            />
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                onClick={() => void submit()}
                disabled={busy}
                className="min-h-9 flex-1 gap-1.5 bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-sm hover:from-emerald-600 hover:to-teal-700"
              >
                {busy ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                ) : (
                  <Star className="h-4 w-4" aria-hidden />
                )}
                {t("rate.submit")}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setHidden(true)}
                className="min-h-9 text-xs text-muted-foreground"
              >
                {t("skip")}
              </Button>
            </div>
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              {t("privacyNote")}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
