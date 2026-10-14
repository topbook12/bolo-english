"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  MessagesSquare,
  BookOpenText,
  Headphones,
  LibraryBig,
  LineChart,
  Flame,
  Clock3,
  Trophy,
  Library,
  ChevronRight,
  ArrowRight,
  KeyRound,
  Target,
  Lightbulb,
  Sparkles,
  Volume2,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import StatCard from "@/components/shared/StatCard";
import PointList from "@/components/shared/PointList";
import EmptyState from "@/components/shared/EmptyState";
import { useDeviceValue } from "@/hooks/use-device";
import { useMounted } from "@/hooks/use-mounted";
import { apiGet } from "@/lib/client-api";
import type { DailyWord } from "@/lib/types";
import type { TabId } from "@/components/layout/AppShell";
import { isNoName } from "@/lib/no-name";

interface ProgressData {
  totalSessions: number;
  totalMinutes: number;
  avgScore: number;
  streak: number;
  wordCount: number;
}

// Data-only module registry: titles/descs come from the "home" namespace.
const MODULES: {
  id: TabId;
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
  illustration: string;
  chip: string;
}[] = [
  {
    id: "grammar",
    titleKey: "quick.grammar",
    descKey: "quick.grammarDesc",
    icon: BookOpenText,
    illustration: "/illustrations/ill-grammar.webp",
    chip: "from-amber-500/90 to-orange-500/90 text-white",
  },
  {
    id: "vocab",
    titleKey: "quick.vocab",
    descKey: "quick.vocabDesc",
    icon: LibraryBig,
    illustration: "/illustrations/ill-vocab.webp",
    chip: "from-rose-500/90 to-pink-500/90 text-white",
  },
  {
    id: "listening",
    titleKey: "quick.listening",
    descKey: "quick.listeningDesc",
    icon: Headphones,
    illustration: "/illustrations/ill-listening.webp",
    chip: "from-teal-500/90 to-cyan-600/90 text-white",
  },
  {
    id: "progress",
    titleKey: "quick.progress",
    descKey: "quick.progressDesc",
    icon: LineChart,
    illustration: "/illustrations/ill-progress.webp",
    chip: "from-orange-500/90 to-amber-500/90 text-white",
  },
];

// Small premium subsection heading (icon chip + title) — hero owns the h1.
function SectionTitle({
  icon: Icon,
  title,
  chip = "from-emerald-500/90 to-teal-500/90",
}: {
  icon: LucideIcon;
  title: string;
  chip?: string;
}) {
  return (
    <h2 className="flex items-center gap-2.5 text-base font-semibold tracking-tight sm:text-lg">
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br shadow-sm ${chip}`}
      >
        <Icon className="h-4 w-4" />
      </span>
      {title}
    </h2>
  );
}

export default function HomeSection({ onNavigate }: { onNavigate: (t: TabId) => void }) {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");
  // Hydration-safe reads (see useDeviceValue): during hydration these return
  // exactly what the server rendered, then swap to live values after mount.
  const deviceId = useDeviceValue((s) => s.deviceId, "");
  const hasKey = useDeviceValue((s) => s.hasKey, false);
  const displayName = useDeviceValue((s) => s.displayName, null);
  const loaded = useDeviceValue((s) => s.loaded, false);
  const [progress, setProgress] = useState<ProgressData | null>(null);
  const [dailyWords, setDailyWords] = useState<DailyWord[] | null>(null);
  const [dailyError, setDailyError] = useState<string | null>(null);
  // Mount-gated time values: `new Date()` differs between the server (UTC)
  // and the client (user's timezone), which caused hydration mismatches
  // ("Good morning" vs "Good afternoon"). useMounted() returns the server
  // snapshot (false) during SSR *and* the hydration pass, so the generic
  // welcome/tip render byte-identically on both sides, then swap after mount
  // — without any setState-in-effect (cascading render) at all.
  const mounted = useMounted();
  const greetKey = mounted
    ? (() => {
        const h = new Date().getHours();
        return h < 12 ? "morning" : h < 16 ? "noon" : h < 19 ? "afternoon" : "evening";
      })()
    : null;

  useEffect(() => {
    if (!deviceId) return;
    apiGet<ProgressData>(`/api/progress?deviceId=${deviceId}`)
      .then(setProgress)
      .catch(() => setProgress(null));
  }, [deviceId]);

  const loadDaily = () => {
    // Daily words come from the site's own static trilingual bank — no API
    // key needed (only deviceId so the server can read the saved level).
    if (!deviceId) return;
    apiGet<{ words: DailyWord[] }>(`/api/vocab/daily?deviceId=${deviceId}`)
      .then((d) => {
        setDailyWords(d.words);
        setDailyError(null);
      })
      .catch((e) => setDailyError(e.message));
  };

  useEffect(() => {
    loadDaily();
  }, [deviceId]);

  const tips = (t.raw("tips") as string[] | undefined) ?? [];
  // Tip of the day: mount-gated Asia/Dhaka (UTC+6) day index — see the note
  // above; Date.now()-in-render would make SSR and the client disagree.
  const todayTip =
    mounted && tips.length > 0
      ? tips[Math.floor((Date.now() + 6 * 3_600_000) / 86_400_000) % tips.length]
      : "";
  const studentName = isNoName(displayName) ? tCommon("student") : (displayName as string).trim();

  return (
    <div className="space-y-6">
      {/* Hero */}
      <section
        aria-label={t("hero.alt")}
        className="bg-hero-gradient relative overflow-hidden rounded-3xl border border-border/70"
      >
        <div className="bg-dots pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative flex items-center gap-4 p-5 sm:gap-6 sm:p-6 md:p-8">
          <div className="min-w-0 flex-1">
            <span className="animate-fade-in-up inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              <Sparkles className="h-3 w-3" />
              {t("hero.badge")}
            </span>
            <h1 className="animate-fade-in-up-1 mt-2.5 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
              {greetKey
                ? t("hero.welcome", { greet: t(`hero.greet.${greetKey}`), name: studentName })
                : t("hero.welcomeGeneric", { name: studentName })}
            </h1>
            <p className="animate-fade-in-up-2 mt-2 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t("hero.subtitle")}
            </p>
            <div className="animate-fade-in-up-3 mt-4 flex flex-wrap gap-2.5">
              <Button
                onClick={() => onNavigate("speaking")}
                className="btn-shine min-h-11 gap-2 rounded-xl px-5 shadow-md"
              >
                <MessagesSquare className="h-4.5 w-4.5" />
                {t("hero.ctaStart")}
              </Button>
              <Button
                variant="outline"
                onClick={() => onNavigate("vocab")}
                className="min-h-11 gap-2 rounded-xl border-border/70 bg-card/80"
              >
                {t("hero.ctaWords")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Image
            src="/illustrations/hero-speaking.webp"
            alt={t("hero.alt")}
            width={960}
            height={549}
            priority
            sizes="(max-width: 640px) 0px, 220px"
            className="animate-float hidden w-44 shrink-0 object-contain drop-shadow-md sm:block md:w-52 lg:w-56"
          />
        </div>
      </section>

      {/* Stats row */}
      <section aria-label={t("stats.title")} className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard
          icon={Flame}
          tint="amber"
          label={t("stats.streak")}
          value={progress ? `${progress.streak} ${t("stats.days")}` : "—"}
          className="animate-fade-in-up"
        />
        <StatCard
          icon={Clock3}
          tint="emerald"
          label={t("stats.spoken")}
          value={progress ? `${progress.totalMinutes} ${t("stats.minutes")}` : "—"}
          className="animate-fade-in-up-1"
        />
        <StatCard
          icon={Trophy}
          tint="rose"
          label={t("stats.avgScore")}
          value={progress ? `${progress.avgScore}` : "—"}
          className="animate-fade-in-up-2"
        />
        <StatCard
          icon={Library}
          tint="teal"
          label={t("stats.words")}
          value={progress ? `${progress.wordCount}` : "—"}
          className="animate-fade-in-up-3"
        />
      </section>

      {/* API key notice */}
      {loaded && !hasKey && (
        <Card className="animate-fade-in-up border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/40">
          <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/90 to-orange-500/90 text-white shadow-sm">
              <KeyRound className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">
                {t("apiKey.title")}
              </p>
              <p className="mt-0.5 text-xs text-amber-700/80 dark:text-amber-400/80">
                {t("apiKey.desc")}
              </p>
            </div>
            <Button
              size="sm"
              onClick={() => onNavigate("settings")}
              className="btn-shine min-h-11 rounded-xl bg-amber-600 hover:bg-amber-700 sm:min-h-9"
            >
              {t("apiKey.cta")}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Quick actions — 5 module cards, speaking featured */}
      <section aria-label={t("quick.title")} className="space-y-3">
        <SectionTitle icon={Sparkles} title={t("quick.title")} />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {/* Flagship: speaking */}
          <button
            onClick={() => onNavigate("speaking")}
            className="group col-span-2 text-left"
            aria-label={t("quick.open", { name: t("quick.speakingTitle") })}
          >
            <Card className="premium-card relative h-full overflow-hidden rounded-2xl bg-card">
              <CardContent className="flex h-full items-center gap-4 p-5 sm:p-6">
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="inline-flex items-center gap-2">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/90 to-teal-500/90 text-white shadow-sm">
                      <MessagesSquare className="h-5 w-5" />
                    </span>
                    <span className="text-lg font-bold tracking-tight sm:text-xl">
                      {t("quick.speakingTitle")}
                    </span>
                  </span>
                  <span className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {t("quick.speakingDesc")}
                  </span>
                  <span className="mt-3 inline-flex min-h-9 items-center gap-1.5 text-sm font-semibold text-primary">
                    {t("quick.speakingCta")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
                <Image
                  src="/illustrations/ill-speaking.webp"
                  alt={t("hero.alt")}
                  width={512}
                  height={512}
                  sizes="(max-width: 640px) 96px, 128px"
                  className="animate-float h-24 w-24 shrink-0 object-contain drop-shadow-sm sm:h-28 sm:w-28 md:h-32 md:w-32"
                />
              </CardContent>
            </Card>
          </button>

          {MODULES.map((m) => (
            <button
              key={m.id}
              onClick={() => onNavigate(m.id)}
              className="group text-left"
              aria-label={t("quick.open", { name: t(m.titleKey) })}
            >
              <Card className="premium-card h-full rounded-2xl bg-card">
                <CardContent className="flex h-full flex-col gap-2.5 p-4">
                  <span className="flex items-start justify-between gap-2">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm ${m.chip}`}
                    >
                      <m.icon className="h-5 w-5" />
                    </span>
                    <Image
                      src={m.illustration}
                      alt=""
                      width={512}
                      height={512}
                      sizes="56px"
                      className="h-14 w-14 object-contain opacity-90 transition-transform duration-200 group-hover:scale-105"
                    />
                  </span>
                  <span className="mt-auto">
                    <span className="block font-semibold">{t(m.titleKey)}</span>
                    <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-muted-foreground">
                      {t(m.descKey)}
                    </span>
                  </span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </CardContent>
              </Card>
            </button>
          ))}
        </div>
      </section>

      {/* Daily goal & tip */}
      {progress && (
        <section aria-label={t("goal.title")} className="animate-fade-in-up">
          <Card className="premium-card rounded-2xl bg-card">
            <CardContent className="p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <SectionTitle icon={Target} title={t("goal.title")} />
                <Badge
                  variant="secondary"
                  className="gap-1 bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
                >
                  <Flame className="h-3.5 w-3.5" />
                  {t("stats.streak")} {progress.streak}
                </Badge>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <PointList
                  variant="check"
                  items={[
                    t("goal.speakItem", { minutes: 5 }),
                    t("goal.streakItem", { days: progress.streak }),
                    t("goal.wordItem"),
                  ]}
                />
                <div className="flex items-start gap-3 rounded-xl border border-amber-200/70 bg-amber-50/70 p-3.5 dark:border-amber-900 dark:bg-amber-950/30">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500/90 to-orange-500/90 text-white shadow-sm">
                    <Lightbulb className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">
                      💡 {t("stats.tipTitle")}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-amber-900/90 dark:text-amber-200/90">
                      {todayTip}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Daily vocabulary preview */}
      <section aria-label={t("daily.title")} className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <SectionTitle icon={LibraryBig} title={t("daily.title")} chip="from-rose-500/90 to-pink-500/90" />
          <Button
            variant="ghost"
            size="sm"
            className="min-h-11 gap-1 text-primary sm:min-h-9"
            onClick={() => onNavigate("vocab")}
            aria-label={t("daily.viewAll")}
          >
            {t("daily.viewAll")}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        {!deviceId ? (
          <div className="grid gap-3 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-28 rounded-xl" />
            ))}
          </div>
        ) : dailyError ? (
          <Card className="premium-card rounded-2xl bg-card">
            <CardContent className="p-4 text-sm text-destructive">{dailyError}</CardContent>
          </Card>
        ) : dailyWords ? (
          <div className="grid gap-3 sm:grid-cols-3">
            {dailyWords.map((w) => (
              <Card key={w.word} className="premium-card rounded-2xl bg-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-lg font-bold">{w.word}</span>
                    <Badge variant="secondary" className="text-[10px]">
                      {w.partOfSpeech}
                    </Badge>
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{w.pronunciation}</p>
                  <p className="mt-1.5 line-clamp-2 text-sm font-medium text-primary">
                    {w.banglaMeaning}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{w.examples[0]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-3" aria-busy="true">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-28 rounded-xl" />
            ))}
          </div>
        )}
      </section>

      {/* How it works */}
      <section aria-label={t("how.title")} className="space-y-3">
        <SectionTitle icon={Volume2} title={t("how.title")} chip="from-teal-500/90 to-cyan-600/90" />
        <Card className="premium-card rounded-2xl bg-card">
          <CardContent className="p-5 sm:p-6">
            <p className="mb-3 text-sm text-muted-foreground">{t("how.subtitle")}</p>
            <PointList variant="number" items={(t.raw("how.items") as string[] | undefined) ?? []} />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
