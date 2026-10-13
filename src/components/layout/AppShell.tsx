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
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import PwaRegister from "@/components/pwa/PwaRegister";
import InstallPrompt from "@/components/pwa/InstallPrompt";
import LocaleSwitcher from "@/i18n/LocaleSwitcher";
import AuthButton from "@/components/auth/AuthButton";
import { useDeviceInit, useDeviceValue } from "@/hooks/use-device";
import HomeSection from "@/components/sections/HomeSection";
import SpeakingSection from "@/components/sections/SpeakingSection";
import GrammarSection from "@/components/sections/GrammarSection";
import ListeningSection from "@/components/sections/ListeningSection";
import VocabSection from "@/components/sections/VocabSection";
import ProgressSection from "@/components/sections/ProgressSection";
import SettingsSection from "@/components/sections/SettingsSection";

export type TabId =
  | "home"
  | "speaking"
  | "grammar"
  | "listening"
  | "vocab"
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
  { id: "speaking", labelKey: "speaking", icon: MessagesSquare, descKey: "speakingDesc" },
  { id: "grammar", labelKey: "grammar", icon: BookOpenText, descKey: "grammarDesc" },
  { id: "listening", labelKey: "listening", icon: Headphones, descKey: "listeningDesc" },
  { id: "vocab", labelKey: "vocab", icon: LibraryBig, descKey: "vocabDesc" },
  { id: "progress", labelKey: "progress", icon: LineChart, descKey: "progressDesc" },
  { id: "settings", labelKey: "settings", icon: Settings, descKey: "settingsDesc" },
];

const BOTTOM_TABS: TabId[] = ["home", "speaking", "grammar", "vocab"];
const MORE_TABS: TabId[] = ["listening", "progress", "settings"];

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
      case "speaking":
        return <SpeakingSection />;
      case "grammar":
        return <GrammarSection />;
      case "listening":
        return <ListeningSection />;
      case "vocab":
        return <VocabSection />;
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
        className={`flex min-h-11 w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
          isActive
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        }`}
        aria-current={isActive ? "page" : undefined}
      >
        <Icon className="h-4.5 w-4.5 shrink-0" />
        <span className="min-w-0 text-left leading-tight">
          <span className="block">{t(`nav.${item.labelKey}`)}</span>
          {showDesc && (
            <span
              className={`block truncate text-[11px] font-normal ${
                isActive ? "text-primary-foreground/75" : "text-muted-foreground/75"
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
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-secondary/60 to-background">
      <PwaRegister />
      <InstallPrompt />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-2 px-4">
          <button
            className="flex items-center gap-2"
            onClick={() => setTab("home")}
            aria-label={`Bolo English — ${t("nav.home")}`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-teal-600 text-primary-foreground shadow-md">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="text-left leading-tight">
              <span className="block text-base font-bold tracking-tight">Bolo English</span>
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
            <LocaleSwitcher compact />
            <AuthButton onOpenSettings={() => setTab("settings")} />
            {/* mobile "more" trigger */}
            <div className="md:hidden">
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
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-5xl flex-1 gap-6 px-0 md:px-4">
        {/* Desktop sidebar */}
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 flex-col py-4 md:flex">
          <nav className="flex flex-col gap-1" aria-label={t("nav.mainMenu")}>
            {TABS.map((item) => (
              <NavItem key={item.id} id={item.id} showDesc />
            ))}
          </nav>
          <p className="mt-auto px-3 text-[11px] leading-relaxed text-muted-foreground">
            {t("common.free")} · {t("common.poweredByYou")}
            <br />
            {t("common.encrypted")}
          </p>
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1 px-4 pb-24 pt-4 md:px-0 md:pb-6">{renderSection()}</main>
      </div>

      {/* Desktop footer — sticks to bottom via flex column + mt-auto */}
      <footer className="mt-auto hidden border-t border-border/70 py-4 text-center text-xs text-muted-foreground md:block">
        Bolo English — {t("footer.line")}
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
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className={`h-5 w-5 ${isActive ? "scale-110" : ""} transition-transform`} />
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
