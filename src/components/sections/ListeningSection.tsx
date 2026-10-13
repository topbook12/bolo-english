"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  Briefcase,
  CloudSun,
  Cpu,
  Flame,
  GraduationCap,
  Headphones,
  HeartHandshake,
  HeartPulse,
  Home,
  KeyRound,
  ListChecks,
  Plane,
  Play,
  ShoppingBag,
  Sparkles,
  Sprout,
  UtensilsCrossed,
  Volume2,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useDevice } from "@/hooks/use-device";
import SectionHeader from "@/components/shared/SectionHeader";
import StoryPlayer, {
  LISTENING_LEVELS,
  type ListeningLevel,
} from "@/components/listening/StoryPlayer";

interface Topic {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

// Label for each topic comes from i18n: listening.topics.<id>
const TOPICS: Topic[] = [
  { id: "dailyLife", icon: Home, gradient: "from-emerald-500 to-teal-500" },
  { id: "travel", icon: Plane, gradient: "from-amber-500 to-orange-500" },
  { id: "food", icon: UtensilsCrossed, gradient: "from-rose-500 to-orange-500" },
  { id: "office", icon: Briefcase, gradient: "from-teal-500 to-cyan-600" },
  { id: "school", icon: GraduationCap, gradient: "from-orange-500 to-amber-500" },
  { id: "shopping", icon: ShoppingBag, gradient: "from-rose-500 to-pink-500" },
  { id: "weather", icon: CloudSun, gradient: "from-teal-500 to-emerald-500" },
  { id: "health", icon: HeartPulse, gradient: "from-orange-500 to-rose-500" },
  { id: "technology", icon: Cpu, gradient: "from-emerald-500 to-teal-500" },
  { id: "friendship", icon: HeartHandshake, gradient: "from-rose-500 to-pink-500" },
];

// Level icons: শুরু → মাঝারি → উন্নত
const LEVEL_ICONS: Record<ListeningLevel, React.ComponentType<{ className?: string }>> = {
  beginner: Sprout,
  intermediate: Zap,
  advanced: Flame,
};

export default function ListeningSection() {
  const t = useTranslations("listening");
  const tc = useTranslations("common");
  const { deviceId, hasKey, loaded, level: deviceLevel } = useDevice();
  // ডিফল্ট = ইউজারের সেভ করা লেভেল; ম্যানুয়ালি বদলালে override জেতে
  const [levelOverride, setLevelOverride] = useState<ListeningLevel | null>(null);
  const level = levelOverride ?? deviceLevel;
  const [sel, setSel] = useState<{ topic: string; label: string } | null>(null);

  return (
    <div className="space-y-6">
      <SectionHeader icon={Headphones} title={t("title")} subtitle={t("subtitle")} tint="teal" />

      {loaded && !hasKey ? (
        // ---------- API key ছাড়া ----------
        <Card
          className="animate-fade-in-up rounded-2xl border-amber-300/70 bg-amber-50/80 shadow-sm dark:border-amber-800 dark:bg-amber-950/40"
          aria-label={t("apiKey.aria")}
        >
          <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/90 to-orange-500/90 text-white shadow-md">
              <KeyRound className="h-5 w-5" aria-hidden />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-amber-900 dark:text-amber-200">
                {t("apiKey.title")}
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-amber-800/80 dark:text-amber-300/80">
                {t("apiKey.description")}
              </p>
            </div>
          </CardContent>
        </Card>
      ) : !loaded ? (
        // ---------- কনফিগ লোড হওয়া পর্যন্ত ----------
        <div className="space-y-4" aria-busy="true">
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-11 rounded-xl" />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <Skeleton key={i} className="h-32 rounded-2xl" />
            ))}
          </div>
        </div>
      ) : sel ? (
        // ---------- স্টোরি প্লেয়ার ----------
        <StoryPlayer
          key={`${sel.topic}::${level}`}
          deviceId={deviceId}
          topic={sel.topic}
          topicLabel={sel.label}
          level={level}
          onBack={() => setSel(null)}
        />
      ) : (
        // ---------- পিকার ----------
        <>
          <section aria-label={t("steps.levelAria")} className="animate-fade-in-up space-y-2.5">
            <h2 className="text-base font-semibold">{t("steps.level")}</h2>
            <div className="grid grid-cols-3 gap-2" role="group" aria-label={t("steps.levelAria")}>
              {LISTENING_LEVELS.map((l) => {
                const Icon = LEVEL_ICONS[l.id];
                return (
                  <Button
                    key={l.id}
                    variant={level === l.id ? "default" : "outline"}
                    aria-pressed={level === l.id}
                    className="min-h-11 gap-1.5 rounded-xl px-2 text-sm"
                    onClick={() => setLevelOverride(l.id)}
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                    {tc(`level.${l.id}`)}
                  </Button>
                );
              })}
            </div>
          </section>

          <section aria-label={t("steps.topicAria")} className="animate-fade-in-up space-y-3">
            <div>
              <h2 className="text-base font-semibold">{t("steps.topic")}</h2>
              <p className="mt-0.5 text-sm text-muted-foreground">{t("steps.topicHint")}</p>
            </div>

            {/* Hero band */}
            <div className="premium-card relative overflow-hidden rounded-2xl bg-card p-4 sm:p-5">
              <div
                className="pointer-events-none absolute -right-8 -top-12 h-36 w-36 rounded-full bg-teal-500/10 blur-2xl"
                aria-hidden
              />
              <div className="flex items-center gap-4">
                <div className="min-w-0 flex-1 space-y-2">
                  <p className="text-base font-bold tracking-tight sm:text-lg">{t("hero.title")}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t("hero.subtitle")}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    <Badge variant="secondary" className="gap-1 font-medium">
                      <Sparkles className="h-3 w-3" aria-hidden /> {t("hero.badge1")}
                    </Badge>
                    <Badge variant="secondary" className="gap-1 font-medium">
                      <Volume2 className="h-3 w-3" aria-hidden /> {t("hero.badge2")}
                    </Badge>
                    <Badge variant="secondary" className="gap-1 font-medium">
                      <ListChecks className="h-3 w-3" aria-hidden /> {t("hero.badge3")}
                    </Badge>
                  </div>
                </div>
                <Image
                  src="/illustrations/ill-listening.webp"
                  alt=""
                  width={120}
                  height={120}
                  className="animate-float h-16 w-auto shrink-0 object-contain drop-shadow-sm sm:h-24"
                />
              </div>
            </div>

            {/* Topic cards */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {TOPICS.map((topic) => {
                const label = t(`topics.${topic.id}`);
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => setSel({ topic: topic.id, label })}
                    className="group text-left"
                    aria-label={t("topicAriaLabel", { topic: label })}
                  >
                    <Card className="h-full rounded-2xl border-border/70 bg-card shadow-sm transition-all group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-md group-active:translate-y-0">
                      <CardContent className="flex h-full flex-col items-center justify-center gap-2.5 p-4 text-center">
                        <span
                          className={cn(
                            "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-md transition-transform group-hover:scale-105",
                            topic.gradient
                          )}
                        >
                          <topic.icon className="h-5.5 w-5.5" aria-hidden />
                        </span>
                        <span className="text-sm font-semibold">{label}</span>
                        <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                          <Play className="h-3 w-3 fill-current" aria-hidden />
                          {t("topicCta")}
                        </span>
                      </CardContent>
                    </Card>
                  </button>
                );
              })}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
