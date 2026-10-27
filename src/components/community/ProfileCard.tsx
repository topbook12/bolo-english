"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  UserRound,
  Share2,
  PhoneCall,
  Flame,
  BookMarked,
  ListChecks,
  Sparkles,
  GraduationCap,
  MessageCircleHeart,
  Loader2,
  Check,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { apiGet, apiPost } from "@/lib/client-api";
import { useToast } from "@/hooks/use-toast";
import { useDevice } from "@/hooks/use-device";
import { track } from "@/lib/track";
import { todayLocalDay } from "@/lib/streak-days";
import { AVATARS, AVATAR_EMOJI, BADGES, type BadgeProgress } from "@/lib/badges";
import { cn } from "@/lib/utils";

// ─── Profile card (D34, ROADMAP-60) ─────────────────────────────────────────
// Avatar (emoji, no uploads), streak, XP and SERVER-COMPUTED badges. Share
// uses the Web Share API with a clipboard fallback — stats only, no personal
// data beyond what the learner already chose to show.

interface ProfileData {
  name: string;
  avatar: string; // rendered emoji
  avatarKey: string;
  level: string;
  goal: string;
  xp: { total: number; week: number };
  streak: { current: number; longest: number; last7: ("1" | "0")[]; todayDone: boolean };
  badges: BadgeProgress[];
}

const BADGE_ICON: Record<string, React.ComponentType<{ className?: string }>> = {
  "phone-call": PhoneCall,
  flame: Flame,
  "book-marked": BookMarked,
  "list-checks": ListChecks,
  sparkles: Sparkles,
  "graduation-cap": GraduationCap,
  "message-circle-heart": MessageCircleHeart,
  target: Sparkles,
};

export default function ProfileCard() {
  const t = useTranslations("community.profile");
  const { deviceId, refresh } = useDevice();
  const { toast } = useToast();
  const [data, setData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [savingAvatar, setSavingAvatar] = useState(false);

  const load = useCallback(async () => {
    if (!deviceId) return;
    try {
      const d = await apiGet<ProfileData>(
        `/api/profile?deviceId=${encodeURIComponent(deviceId)}&today=${todayLocalDay()}`
      );
      setData(d);
    } catch {
      /* offline — skeleton stays */
    } finally {
      setLoading(false);
    }
  }, [deviceId]);

  useEffect(() => {
    void load();
    // Challenge submissions grant XP mid-session — refetch so the numbers
    // never sit stale while the learner is right here.
    const bump = () => void load();
    window.addEventListener("bolo_xp_bump", bump);
    return () => window.removeEventListener("bolo_xp_bump", bump);
  }, [load]);

  const pickAvatar = async (key: string) => {
    if (!deviceId || savingAvatar || data?.avatarKey === key) return;
    setSavingAvatar(true);
    try {
      await apiPost("/api/config", { deviceId, avatar: key });
      await refresh();
      await load();
      toast({ title: t("avatarSaved") });
    } catch (e) {
      toast({ title: (e as Error).message, variant: "destructive" });
    } finally {
      setSavingAvatar(false);
    }
  };

  const share = async () => {
    if (!data) return;
    const text = t("shareText", { xp: data.xp.total, streak: Math.max(data.streak.current, 1) });
    try {
      if (typeof navigator.share === "function") {
        await navigator.share({ title: "Bolo English", text });
      } else {
        await navigator.clipboard.writeText(text);
      }
      track("profile_shared");
      toast({ title: t("shared") });
    } catch {
      /* user closed the share sheet — not an error */
    }
  };

  if (loading) {
    return (
      <Card className="premium-card rounded-2xl border-border/70 bg-card">
        <CardContent className="space-y-3 p-4 sm:p-6" aria-busy="true">
          <Skeleton className="h-16 w-full rounded-xl" />
          <Skeleton className="h-20 w-full rounded-xl" />
        </CardContent>
      </Card>
    );
  }
  if (!data) return null;

  const earned = data.badges.filter((b) => b.earned).length;

  return (
    <Card className="premium-card animate-fade-in-up rounded-2xl border-border/70 bg-card">
      <CardContent className="space-y-4 p-4 sm:p-6">
        {/* identity row */}
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/90 to-teal-600/90 text-white shadow-md shadow-emerald-500/30">
            <UserRound className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-bold sm:text-base">{t("title")}</h3>
            <p className="text-xs text-muted-foreground">{t("subtitle")}</p>
          </div>
          <Button variant="outline" size="sm" className="h-9 shrink-0 gap-1.5 rounded-xl" onClick={() => void share()}>
            <Share2 className="h-3.5 w-3.5" aria-hidden="true" />
            {t("share")}
          </Button>
        </div>

        {/* avatar + stats */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <span
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-2 border-border/60 bg-gradient-to-br from-teal-50 to-emerald-50 text-4xl shadow-inner dark:from-teal-950/40 dark:to-emerald-950/30"
            role="img"
            aria-label={`${t("avatarLabel")}: ${data.name}`}
          >
            {data.avatar}
          </span>
          <div className="grid min-w-0 flex-1 grid-cols-3 gap-2 text-center">
            <div className="rounded-xl bg-muted/40 px-2 py-3">
              <p className="text-lg font-black tabular-nums leading-none">{data.xp.total}</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{t("xpTotal")}</p>
            </div>
            <div className="rounded-xl bg-muted/40 px-2 py-3">
              <p className="text-lg font-black tabular-nums leading-none">{data.xp.week}</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                {t("xpWeek", { n: data.xp.week })}
              </p>
            </div>
            <div className="rounded-xl bg-muted/40 px-2 py-3">
              <p className="flex items-center justify-center gap-1 text-lg font-black tabular-nums leading-none">
                {data.streak.current}
                <Flame className="h-4 w-4 text-orange-500" aria-hidden="true" />
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                {t("streakDays", { n: data.streak.current })}
              </p>
            </div>
          </div>
        </div>

        {/* avatar picker */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t("avatarLabel")}</p>
          <div className="flex flex-wrap gap-1.5">
            {AVATARS.map((key) => (
              <button
                key={key}
                onClick={() => void pickAvatar(key)}
                disabled={savingAvatar}
                aria-pressed={data.avatarKey === key}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-xl border text-xl transition-all",
                  data.avatarKey === key
                    ? "border-emerald-500/60 bg-emerald-500/10 shadow-sm"
                    : "border-border/60 bg-card hover:bg-muted"
                )}
              >
                {AVATAR_EMOJI[key]}
              </button>
            ))}
            {savingAvatar && <Loader2 className="h-4 w-4 self-center animate-spin text-muted-foreground" aria-hidden="true" />}
          </div>
        </div>

        {/* badges */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t("badgesTitle")}</p>
            <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
              {t("badgesEarned", { earned, n: data.badges.length })}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {data.badges.map((b) => {
              const iconKey = BADGES.find((d) => d.id === b.id)?.icon ?? "sparkles";
              const Icon = BADGE_ICON[iconKey] ?? Sparkles;
              return (
                <div
                  key={b.id}
                  title={b.earned ? t(`badges.${b.id}.desc` as Parameters<typeof t>[0]) : t("badgeLocked", { value: b.value, target: b.target })}
                  className={cn(
                    "flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center transition-colors",
                    b.earned
                      ? "border-emerald-500/40 bg-gradient-to-b from-emerald-500/10 to-teal-500/5"
                      : "border-border/60 bg-muted/20 opacity-70"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-full",
                      b.earned
                        ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-sm"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {b.earned ? <Icon className="h-4 w-4" aria-hidden="true" /> : <Check className="h-4 w-4 opacity-40" aria-hidden="true" />}
                  </span>
                  <p className="text-[11px] font-bold leading-tight">{t(`badges.${b.id}.name` as Parameters<typeof t>[0])}</p>
                  <p className="text-[10px] leading-tight text-muted-foreground">
                    {b.earned ? t(`badges.${b.id}.desc` as Parameters<typeof t>[0]) : `${b.value}/${b.target}`}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
