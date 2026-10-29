"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Gem, Check, Info } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useDevice } from "@/hooks/use-device";

// ─── Plan & entitlements (D36) ───────────────────────────────────────────────
// Visible to EVERYONE — guests get the free baseline from /api/plan. Shows the
// current plan, the granted feature chips and a calm "coming soon" teaser for
// the paid tiers. NO buy button, NO paywall: payments are D38-39. When the
// server storage is down (503) the card hides itself — a free feature must
// never greet its user with a scary error box.

type PlanUpgrade = {
  key: string;
  name: string;
  priceBdt: number;
  durationDays: number;
};

// Local shape of the frozen GET /api/plan contract (typed here, not imported,
// so the client never depends on mid-flight backend files).
type PlanData = {
  plan: string;
  planName: string;
  source: string;
  expiresAt: string | null;
  daysLeft: number | null;
  features: string[];
  upgrades: PlanUpgrade[];
};

// Feature keys the backend grants today — anything newer falls back to the
// raw key until the i18n files catch up (same pattern as ModerationCard).
const FEATURE_KEYS = [
  "core_learning",
  "community",
  "cv_studio",
  "platform_ai",
  "unlimited_analysis",
  "certificate",
  "priority_support",
] as const;

export default function PlanCard() {
  const t = useTranslations("plan");
  const deviceId = useDevice((s) => s.deviceId);
  const [data, setData] = useState<PlanData | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!deviceId) return; // device id hydrates one tick after mount
    let alive = true;
    (async () => {
      try {
        const res = await fetch(`/api/plan?deviceId=${encodeURIComponent(deviceId)}`, {
          cache: "no-store",
        });
        const json = await res.json().catch(() => null);
        if (!alive) return;
        if (!res.ok || !json?.ok || !json.data) throw new Error("plan unavailable");
        setData(json.data as PlanData);
      } catch {
        if (alive) setFailed(true); // honest-hide (503 / network) — never a scary error box
      }
    })();
    return () => {
      alive = false;
    };
  }, [deviceId]);

  if (failed) return null;

  const isFree = (data?.plan ?? "free") === "free";
  const daysLeft = typeof data?.daysLeft === "number" ? data.daysLeft : null;
  const showDaysLeft = daysLeft !== null && daysLeft >= 0; // never show negative numbers
  const features = data?.features ?? [];
  const upgrades = data?.upgrades ?? [];

  const featureLabel = (key: string) =>
    (FEATURE_KEYS as readonly string[]).includes(key) ? t(`feature.${key}`) : key;

  return (
    <Card className="premium-card border-border/70 rounded-2xl bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/90 to-fuchsia-600/90 text-white shadow-md shadow-violet-500/30 ring-1 ring-inset ring-white/25 dark:shadow-violet-500/20">
            <Gem className="h-4.5 w-4.5" aria-hidden />
          </span>
          {t("title")}
        </CardTitle>
        <CardDescription>{t("subtitle")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!data ? (
          // Subtle loading lines — keeps the card's height stable while /api/plan answers
          <div className="space-y-3" aria-busy="true">
            <Skeleton className="h-7 w-28 rounded-full" />
            <div className="flex flex-wrap gap-2">
              {[0, 1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-7 w-24 rounded-full" />
              ))}
            </div>
            <Skeleton className="h-4 w-3/4 rounded-full" />
          </div>
        ) : (
          <>
            {/* plan header row — emerald for the free baseline, gem-stone gradient for premium */}
            <div className="flex flex-wrap items-center gap-2.5">
              {isFree ? (
                <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  {data.planName}
                </Badge>
              ) : (
                <Badge className="bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white shadow-sm shadow-violet-500/30">
                  <Gem className="mr-1 h-3 w-3" aria-hidden /> {data.planName}
                </Badge>
              )}
              {showDaysLeft && (
                <span className="text-xs text-muted-foreground">
                  {t("daysLeft", { n: daysLeft })}
                </span>
              )}
            </div>

            {/* granted features as small rounded chips */}
            {features.length > 0 ? (
              <ul role="list" aria-label={t("title")} className="flex flex-wrap gap-2">
                {features.map((f) => (
                  <li
                    key={f}
                    role="listitem"
                    className="flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/50 px-2.5 py-1 text-xs font-medium"
                  >
                    <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden />
                    {featureLabel(f)}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs italic text-muted-foreground">{t("freeNote")}</p>
            )}

            {/* calm, non-pushy note — the core platform stays free forever (roadmap principle 3) */}
            {features.length > 0 && (
              <p className="flex items-start gap-2 text-xs text-muted-foreground">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                {t("freeNote")}
              </p>
            )}

            {/* coming-soon teaser rows — prices are informational only, payments land in D38-39 */}
            {upgrades.length > 0 && (
              <div className="space-y-2.5 border-t border-border/60 pt-3.5">
                {upgrades.map((u) => (
                  <div key={u.key} className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold">{u.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {u.priceBdt > 0 ? t("priceBdt", { n: u.priceBdt }) : t("priceSoon")}
                    </span>
                    {u.durationDays > 0 && (
                      <span className="text-xs text-muted-foreground">
                        · {t("perDays", { n: u.durationDays })}
                      </span>
                    )}
                    <Badge
                      variant="outline"
                      className="ml-auto rounded-full px-2 py-0 text-[10px] text-muted-foreground"
                    >
                      {t("comingSoon")}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
