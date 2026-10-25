"use client";

import { useState, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { Gauge, Star, Ban, RotateCcw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NpsForm from "@/components/rating/NpsForm";
import {
  getNpsServerSnapshot,
  getNpsSnapshot,
  isNpsDue,
  subscribeNps,
  writeNpsState,
} from "@/components/rating/NpsPrompt";

// "Rate us" settings card (D4, ROADMAP-60) — visible to EVERYONE. Gives a
// manual entry point to the weekly NPS pulse: rate right now, silence the
// floating prompt forever, or re-enable it. The roadmap's "skippable from
// Settings" requirement lives here.
//
// State comes from the tiny external store (localStorage `bolo_nps`) via
// useSyncExternalStore — hydration-safe, and flips here propagate both ways
// (the floating prompt reacts to mute/re-enable instantly).

type NpsMode = "hidden" | "open";

export default function RatingOptCard() {
  const t = useTranslations("rating");
  const [mode, setMode] = useState<NpsMode>("hidden");
  const state = useSyncExternalStore(subscribeNps, getNpsSnapshot, getNpsServerSnapshot);
  const never = state.never;
  const due = state.first !== 0 && isNpsDue(state);

  const toggleNever = () => {
    writeNpsState({ never: !never });
  };

  return (
    <Card className="premium-card border-border/70 rounded-2xl bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/90 to-purple-600/90 text-white shadow-md shadow-violet-500/30 ring-1 ring-inset ring-white/25">
            <Star className="h-4.5 w-4.5" aria-hidden />
          </span>
          <span>{t("opt.title")}</span>
        </CardTitle>
        <CardDescription>{t("opt.desc")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {mode === "open" ? (
          <NpsForm onDone={() => setMode("hidden")} />
        ) : (
          <>
            {due && (
              <p className="rounded-lg bg-violet-50 px-3 py-2 text-xs font-medium text-violet-800 dark:bg-violet-950/40 dark:text-violet-300">
                {t("opt.dueNote")}
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                onClick={() => setMode("open")}
                className="min-h-11 gap-1.5 bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-sm hover:from-violet-600 hover:to-purple-700"
              >
                <Gauge className="h-4 w-4" aria-hidden />
                {t("opt.rateNow")}
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={toggleNever}
                className="min-h-11 gap-1.5"
              >
                {never ? (
                  <>
                    <RotateCcw className="h-4 w-4" aria-hidden />
                    {t("opt.reEnable")}
                  </>
                ) : (
                  <>
                    <Ban className="h-4 w-4" aria-hidden />
                    {t("opt.mute")}
                  </>
                )}
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
