"use client";

// Theme switcher (platform polish pass): light / dark / system.
// - ThemeMenuItems   → inside the account dropdown menu (quick switch)
// - ThemeSegmented   → Settings → চেহারা card (big tappable buttons)
// Both guard with `mounted` because next-themes only knows the active theme
// after hydration; rendering the real value earlier would mismatch SSR.

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { Sun, Moon, Monitor, Check, Palette } from "lucide-react";
import { DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const OPTS = ["light", "dark", "system"] as const;
type Opt = (typeof OPTS)[number];

const OPT_ICON: Record<Opt, React.ComponentType<{ className?: string }>> = {
  light: Sun,
  dark: Moon,
  system: Monitor,
};

function useMountedTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // setTimeout keeps the setState out of the effect body (no cascading
    // renders — same lint-friendly pattern PathSection/OnboardingDialog use).
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);
  return { theme, setTheme, mounted };
}

/** Radio-style items for a DropdownMenu. */
export function ThemeMenuItems() {
  const t = useTranslations("settings");
  const { theme, setTheme, mounted } = useMountedTheme();
  if (!mounted) return null;
  return (
    <>
      <DropdownMenuSeparator />
      <DropdownMenuLabel className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
        {t("appearance.menuLabel")}
      </DropdownMenuLabel>
      {OPTS.map((opt) => {
        const Icon = OPT_ICON[opt];
        const active = theme === opt;
        return (
          <DropdownMenuItem
            key={opt}
            onClick={() => setTheme(opt)}
            className="gap-2.5 rounded-lg py-2.5"
            aria-checked={active}
            role="menuitemradio"
          >
            <Icon className="h-4 w-4 text-primary" aria-hidden />
            <span className="flex-1 text-sm font-medium">{t(`appearance.${opt}`)}</span>
            {active && <Check className="h-4 w-4 text-primary" aria-hidden />}
          </DropdownMenuItem>
        );
      })}
    </>
  );
}

/** Segmented control for the Settings appearance card. */
export function ThemeSegmented() {
  const t = useTranslations("settings");
  const { theme, setTheme, mounted } = useMountedTheme();
  return (
    <div
      className={cn("grid grid-cols-3 gap-2", !mounted && "opacity-60")}
      role="radiogroup"
      aria-label={t("appearance.menuLabel")}
    >
      {OPTS.map((opt) => {
        const Icon = OPT_ICON[opt];
        const active = mounted && theme === opt;
        return (
          <button
            key={opt}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setTheme(opt)}
            disabled={!mounted}
            className={cn(
              "flex min-h-16 flex-col items-center justify-center gap-1 rounded-xl border px-2 py-2 text-xs font-semibold transition-all",
              active
                ? "border-transparent bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white shadow-sm"
                : "border-border/60 bg-background hover:bg-accent"
            )}
          >
            <Icon className="h-4.5 w-4.5" aria-hidden />
            {t(`appearance.${opt}`)}
          </button>
        );
      })}
    </div>
  );
}

/** Header icon for the Settings appearance card. */
export function AppearanceIcon({ className }: { className?: string }) {
  return <Palette className={className} aria-hidden />;
}
