"use client";

import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

// Shared premium section header: gradient icon chip + title + subtitle.
// Every section starts with this for a consistent, polished look.

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  tint?: "emerald" | "amber" | "rose" | "teal" | "orange" | "violet";
  children?: React.ReactNode; // right-side actions
}

const TINTS: Record<
  string,
  { chip: string; glow: string; titleAccent?: string }
> = {
  emerald: {
    chip: "from-emerald-500/90 to-teal-600/90 text-white",
    glow: "from-emerald-500/20 to-teal-600/12",
  },
  amber: {
    chip: "from-amber-500/90 to-orange-600/90 text-white",
    glow: "from-amber-500/20 to-orange-600/12",
  },
  rose: {
    chip: "from-rose-500/90 to-pink-600/90 text-white",
    glow: "from-rose-500/20 to-pink-600/12",
  },
  teal: {
    chip: "from-teal-500/90 to-emerald-600/90 text-white",
    glow: "from-teal-500/20 to-emerald-600/12",
  },
  orange: {
    chip: "from-orange-500/90 to-amber-600/90 text-white",
    glow: "from-orange-500/20 to-amber-600/12",
  },
  violet: {
    chip: "from-violet-500/90 to-purple-600/90 text-white",
    glow: "from-violet-500/20 to-purple-600/12",
  },
};

export default function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  tint = "emerald",
  children,
}: SectionHeaderProps) {
  const t = TINTS[tint] ?? TINTS.emerald;
  return (
    <div className="animate-fade-in-up mb-5">
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-48 max-w-3xl bg-gradient-to-b to-transparent blur-2xl",
          t.glow
        )}
      />
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br shadow-md ring-1 ring-inset ring-white/30",
              t.chip
            )}
          >
            <Icon className="h-5.5 w-5.5 drop-shadow-sm" />
          </span>
          <div>
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">{title}</h1>
            {subtitle && (
              <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
        </div>
        {children && <div className="flex shrink-0 items-center gap-2">{children}</div>}
      </div>
    </div>
  );
}
