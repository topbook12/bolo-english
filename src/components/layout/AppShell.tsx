"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Home,
  MessagesSquare,
  BookOpenText,
  Headphones,
  LibraryBig,
  LineChart,
  Settings,
  Menu,
  KeyRound,
  Route,
  Sparkles,
  BookOpen,
  FileUser,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import PwaRegister from "@/components/pwa/PwaRegister";
import InstallPrompt from "@/components/pwa/InstallPrompt";
import AuthButton from "@/components/auth/AuthButton";
import { useMounted } from "@/hooks/use-mounted";
import { useDeviceInit, useDeviceValue } from "@/hooks/use-device";
import HomeSection from "@/components/sections/HomeSection";
import PathSection from "@/components/path/PathSection";
import SpeakingSection from "@/components/sections/SpeakingSection";
import GrammarSection from "@/components/sections/GrammarSection";
import ListeningSection from "@/components/sections/ListeningSection";
import ReadingSection from "@/components/reading/ReadingSection";
import VocabSection from "@/components/sections/VocabSection";
import CvStudio from "@/components/cv/CvStudio";
import ProgressSection from "@/components/sections/ProgressSection";
import SettingsSection from "@/components/sections/SettingsSection";

export type TabId =
  | "home"
  | "path"
  | "speaking"
  | "grammar"
  | "listening"
  | "reading"
  | "vocab"
  | "cv"
  | "progress"
  | "settings";

// Data-only tab registry: labels/descs live in core messages under "nav.*"
// and are resolved inside the component with useTranslations().
export const TABS: {
  id: TabId;
  labelKey: string;
  icon: React.ComponentType<{ className?: string }>;
  descKey: string;
}[] = [
  { id: "home", labelKey: "home", icon: Home, descKey: "homeDesc" },
  { id: "path", labelKey: "path", icon: Route, descKey: "pathDesc" },
  { id: "speaking", labelKey: "speaking", icon: MessagesSquare, descKey: "speakingDesc" },
  { id: "grammar", labelKey: "grammar", icon: BookOpenText, descKey: "grammarDesc" },
  { id: "listening", labelKey: "listening", icon: Headphones, descKey: "listeningDesc" },
  { id: "reading", labelKey: "reading", icon: BookOpen, descKey: "readingDesc" },
  { id: "vocab", labelKey: "vocab", icon: LibraryBig, descKey: "vocabDesc" },
  { id: "cv", labelKey: "cv", icon: FileUser, descKey: "cvDesc" },
  { id: "progress", labelKey: "progress", icon: LineChart, descKey: "progressDesc" },
  { id: "settings", labelKey: "settings", icon: Settings, descKey: "settingsDesc" },
];

const BOTTOM_TABS: TabId[] = ["home", "speaking", "grammar", "reading"];
const MORE_TABS: TabId[] = ["path", "listening", "vocab", "cv", "progress", "settings"];

// ─── Bolo Spectrum module accents ───
// Color = identity: each module owns one warm gradient that repeats in its
// header chip, level pills, CTAs and now the navigation itself. NO blue/indigo.
//   emerald = daily/brand (home·vocab·progress)   teal = story/journey (path·listening)
//   rose = voice (speaking)   orange = structure (grammar)   amber = books (reading)
//   violet = AI/utility (settings)
const TINT_ACTIVE: Record<TabId, string> = {
  home: "from-emerald-500 to-teal-600",
  path: "from-teal-500 to-emerald-600",
  speaking: "from-rose-500 to-pink-600",
  grammar: "from-orange-500 to-amber-600",
  listening: "from-teal-500 to-emerald-600",
  reading: "from-amber-500 to-orange-600",
  vocab: "from-emerald-500 to-teal-600",
  cv: "from-fuchsia-500 to-pink-600",
  progress: "from-emerald-500 to-teal-600",
  settings: "from-violet-500 to-purple-600",
};

const TINT_TEXT: Record<TabId, string> = {
  home: "text-emerald-600 dark:text-emerald-400",
  path: "text-teal-600 dark:text-teal-400",
  speaking: "text-rose-600 dark:text-rose-400",
  grammar: "text-orange-600 dark:text-orange-400",
  listening: "text-teal-600 dark:text-teal-400",
  reading: "text-amber-600 dark:text-amber-500",
  vocab: "text-emerald-600 dark:text-emerald-400",
  cv: "text-fuchsia-600 dark:text-fuchsia-400",
  progress: "text-emerald-600 dark:text-emerald-400",
  settings: "text-violet-600 dark:text-violet-400",
};

const TINT_SOFT: Record<TabId, string> = {
  home: "bg-emerald-100/80 dark:bg-emerald-900/40",
  path: "bg-teal-100/80 dark:bg-teal-900/40",
  speaking: "bg-rose-100/80 dark:bg-rose-900/40",
  grammar: "bg-orange-100/80 dark:bg-orange-900/40",
  listening: "bg-teal-100/80 dark:bg-teal-900/40",
  reading: "bg-amber-100/80 dark:bg-amber-900/40",
  vocab: "bg-emerald-100/80 dark:bg-emerald-900/40",
  cv: "bg-fuchsia-100/80 dark:bg-fuchsia-900/40",
  progress: "bg-emerald-100/80 dark:bg-emerald-900/40",
  settings: "bg-violet-100/80 dark:bg-violet-900/40",
};

export default function AppShell() {
  const t = useTranslations();
  const [tab, setTab] = useState<TabId>("home");
  const [moreOpen, setMoreOpen] = useState(false);
  useDeviceInit();
  // Hydration-safe reads: during hydration these return the same values the
  // server rendered (false), so the header structure can never diverge from
  // the SSR HTML — even if the store already holds live state at hydration
  // time. React swaps in live values right after hydration.
  const hasKey = useDeviceValue((s) => s.hasKey, false);
  const loaded = useDeviceValue((s) => s.loaded, false);
  // Hydration armor: the mobile "more" Sheet (a Radix Dialog that consumes
  // React.useId even while closed) mounts only after hydration. Before that
  // we render a plain, visually identical button — so the SSR HTML and the
  // hydration render can never disagree on Radix-generated ids.
  const mounted = useMounted();

  // remember last tab
  useEffect(() => {
    const saved = localStorage.getItem("bolo_tab") as TabId | null;
    if (saved && TABS.some((t) => t.id === saved)) {
      const t = setTimeout(() => setTab(saved), 0);
      return () => clearTimeout(t);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("bolo_tab", tab);
    window.scrollTo({ top: 0 });
  }, [tab]);

  const renderSection = () => {
    switch (tab) {
      case "home":
        return <HomeSection onNavigate={setTab} />;
      case "path":
        return <PathSection onNavigate={setTab} />;
      case "speaking":
        return <SpeakingSection />;
      case "grammar":
        return <GrammarSection />;
      case "listening":
        return <ListeningSection />;
      case "reading":
        return <ReadingSection />;
      case "vocab":
        return <VocabSection />;
      case "cv":
        return <CvStudio />;
      case "progress":
        return <ProgressSection />;
      case "settings":
        return <SettingsSection />;
    }
  };

  const NavItem = ({ id, showDesc = false }: { id: TabId; showDesc?: boolean }) => {
    const item = TABS.find((x) => x.id === id)!;
    const Icon = item.icon;
    const isActive = tab === id;
    return (
      <button
        onClick={() => {
          setTab(id);
          setMoreOpen(false);
        }}
        className={`flex min-h-11 w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 lg:px-3.5 lg:py-3 ${
          isActive
            ? `bg-gradient-to-br text-white shadow-md shadow-black/10 ${TINT_ACTIVE[id]}`
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        }`}
        aria-current={isActive ? "page" : undefined}
      >
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
            isActive
              ? "bg-white/20 ring-1 ring-inset ring-white/30"
              : ""
          }`}
        >
          <Icon className="h-4.5 w-4.5 shrink-0 lg:h-5 lg:w-5" />
        </span>
        <span className="min-w-0 text-left leading-tight">
          <span className="block">{t(`nav.${item.labelKey}`)}</span>
          {showDesc && (
            <span
              className={`block truncate text-[11px] font-normal ${
                isActive ? "text-white/80" : "text-muted-foreground/75"
              }`}
            >
              {t(`nav.${item.descKey}`)}
            </span>
          )}
        </span>
      </button>
    );
  };

  return (
    <div className="shell-bg flex min-h-screen flex-col">
      <PwaRegister />
      <InstallPrompt />

      {/* Header */}
      <header
        className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-2 px-4 md:h-16 lg:px-8">
          <button
            className="flex items-center gap-2"
            onClick={() => setTab("home")}
            aria-label={`Bolo English — ${t("nav.home")}`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-teal-600 text-primary-foreground shadow-md">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="text-left leading-tight">
              <span className="block text-base font-bold tracking-tight md:text-lg">Bolo English</span>
              <span className="hidden text-[11px] text-muted-foreground sm:block">
                {t("common.tagline")}
              </span>
            </span>
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {loaded && !hasKey && (
              <Button
                size="sm"
                variant="outline"
                className="gap-1.5 border-amber-500/60 text-amber-700 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-950"
                onClick={() => setTab("settings")}
              >
                <KeyRound className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{t("nav.addKey")}</span>
                <span className="sm:hidden">{t("nav.addKeyShort")}</span>
              </Button>
            )}
            {loaded && hasKey && (
              <Badge variant="secondary" className="gap-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                <KeyRound className="h-3 w-3" /> {t("nav.aiActive")}
              </Badge>
            )}
            {/* Locale switcher retired (Task 27-c): language is locked to the
                account — User.nativeLang chosen at signup drives the locale. */}
            <AuthButton onOpenSettings={() => setTab("settings")} />
            {/* mobile "more" trigger */}
            <div className="md:hidden">
              {mounted ? (
                <Sheet open={moreOpen} onOpenChange={setMoreOpen}>
                  <SheetTrigger asChild>
                    <Button size="icon" variant="ghost" aria-label={t("nav.more")}>
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-72">
                    <SheetHeader>
                      <SheetTitle className="text-right">{t("nav.menu")}</SheetTitle>
                    </SheetHeader>
                    <nav className="mt-2 flex flex-col gap-1" aria-label={t("nav.mobileMenu")}>
                      {MORE_TABS.map((id) => (
                        <NavItem key={id} id={id} showDesc />
                      ))}
                    </nav>
                  </SheetContent>
                </Sheet>
              ) : (
                <Button size="icon" variant="ghost" aria-label={t("nav.more")}>
                  <Menu className="h-5 w-5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-7xl flex-1 gap-6 px-0 md:px-4 lg:gap-8 lg:px-8">
        {/* Desktop sidebar — content-sized (h-fit) so it can never inflate the
            page and push the footer below the fold on short sections */}
        <aside className="nice-scroll sticky top-14 hidden h-fit max-h-[calc(100vh-3.5rem)] w-60 shrink-0 flex-col self-start overflow-y-auto py-4 md:flex md:top-16 md:max-h-[calc(100vh-4rem)] lg:w-64 lg:py-6">
          <nav className="flex flex-col gap-1" aria-label={t("nav.mainMenu")}>
            {TABS.map((item) => (
              <NavItem key={item.id} id={item.id} showDesc />
            ))}
          </nav>
          <div className="mt-4 rounded-2xl border border-border/60 bg-card/80 p-3.5 shadow-sm">
            <p className="flex items-center gap-1.5 text-xs font-bold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              {t("common.free")}
            </p>
            <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
              {t("common.poweredByYou")}
              <br />
              {t("common.encrypted")}
            </p>
          </div>
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1 px-4 pb-24 pt-4 md:px-0 md:pb-6 md:pt-6 lg:pt-8">{renderSection()}</main>
      </div>

      {/* Desktop footer — sticks to bottom via flex column + mt-auto */}
      <footer className="mt-auto hidden border-t border-border/70 py-6 md:block">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <p className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-teal-600 text-primary-foreground">
              <Sparkles className="h-3 w-3" />
            </span>
            <span className="font-semibold text-foreground">Bolo English</span>
            <span aria-hidden>·</span>
            <span>{t("footer.line")}</span>
          </p>
          <p className="flex items-center gap-1.5 font-medium text-primary">
            <Sparkles className="h-3 w-3" />
            {t("common.free")}
          </p>
        </div>
      </footer>

      {/* Mobile bottom nav */}
      <nav
        className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/95 backdrop-blur-md md:hidden"
        aria-label={t("nav.menu")}
      >
        <div className="mx-auto grid max-w-lg grid-cols-5">
          {BOTTOM_TABS.map((id) => {
            const item = TABS.find((x) => x.id === id)!;
            const Icon = item.icon;
            const isActive = tab === id;
            return (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`flex min-h-[56px] flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] font-medium transition-colors ${
                  isActive ? TINT_TEXT[id] : "text-muted-foreground"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span
                  className={`flex h-7 w-9 items-center justify-center rounded-lg transition-all ${
                    isActive
                      ? `${TINT_SOFT[id]} scale-110 shadow-sm`
                      : ""
                  }`}
                >
                  <Icon className="h-5 w-5 transition-transform" />
                </span>
                {t(`nav.${item.labelKey}`)}
              </button>
            );
          })}
          <button
            onClick={() => setMoreOpen(true)}
            className={`flex min-h-[56px] flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] font-medium transition-colors ${
              MORE_TABS.includes(tab) ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Menu className="h-5 w-5" />
            {t("nav.more")}
          </button>
        </div>
      </nav>
    </div>
  );
}
