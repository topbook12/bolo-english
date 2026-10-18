"use client";

import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

// Compact stat card: gradient icon chip + big gradient value + label.
// Gradient chips match SectionHeader so stats feel part of the same system;
// each metric gets a soft matching tint wash + colored tile glow.

interface TintSpec {
  chip: string;
  /** soft card wash (overrides bg-card — premium-card sets border only) */
  wash: string;
  /** gradient number class (see globals.css SITE-WIDE POLISH) */
  value: string;
  /** colored glow on the icon tile */
  glow: string;
}

const TINTS: Record<string, TintSpec> = {
  emerald: {
    chip: "from-emerald-500/90 to-teal-600/90 text-white",
    wash: "bg-emerald-50/70 dark:bg-emerald-950/25",
    value: "text-gradient",
    glow: "shadow-md shadow-emerald-500/30 dark:shadow-emerald-500/20",
  },
  amber: {
    chip: "from-amber-500/90 to-orange-600/90 text-white",
    wash: "bg-amber-50/70 dark:bg-amber-950/25",
    value: "text-gradient-amber",
    glow: "shadow-md shadow-amber-500/30 dark:shadow-amber-500/20",
  },
  rose: {
    chip: "from-rose-500/90 to-pink-600/90 text-white",
    wash: "bg-rose-50/70 dark:bg-rose-950/25",
    value: "text-gradient-rose",
    glow: "shadow-md shadow-rose-500/30 dark:shadow-rose-500/20",
  },
  teal: {
    chip: "from-teal-500/90 to-emerald-600/90 text-white",
    wash: "bg-teal-50/70 dark:bg-teal-950/25",
    value: "text-gradient-teal",
    glow: "shadow-md shadow-teal-500/30 dark:shadow-teal-500/20",
  },
  orange: {
    chip: "from-orange-500/90 to-amber-600/90 text-white",
    wash: "bg-orange-50/70 dark:bg-orange-950/25",
    value: "text-gradient-orange",
    glow: "shadow-md shadow-orange-500/30 dark:shadow-orange-500/20",
  },
  violet: {
    chip: "from-violet-500/90 to-purple-600/90 text-white",
    wash: "bg-violet-50/70 dark:bg-violet-950/25",
    value: "text-gradient-violet",
    glow: "shadow-md shadow-violet-500/30 dark:shadow-violet-500/20",
  },
};

interface StatCardProps {
  icon: LucideIcon;
  value: React.ReactNode;
  label: string;
  tint?: keyof typeof TINTS | string;
  className?: string;
}

export default function StatCard({
  icon: Icon,
  value,
  label,
  tint = "emerald",
  className,
}: StatCardProps) {
  const spec = TINTS[tint] ?? TINTS.emerald;
  return (
    <div
      className={cn(
        "premium-card flex items-center gap-3 rounded-2xl bg-card p-4",
        spec.wash,
        className
      )}
    >
      <span
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm ring-1 ring-inset ring-white/25",
          spec.chip,
          spec.glow
        )}
      >
        <Icon className="h-5 w-5 drop-shadow-sm" />
      </span>
      <div className="min-w-0">
        <p className={cn("truncate text-lg font-extrabold leading-tight", spec.value)}>{value}</p>
        <p className="truncate text-xs text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
