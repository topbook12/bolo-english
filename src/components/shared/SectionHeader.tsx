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

const TINTS: Record<string, { chip: string; glow: string }> = {
  emerald: {
    chip: "from-emerald-500/90 to-teal-500/90 text-white",
    glow: "from-emerald-500/15 to-teal-500/10",
  },
  amber: {
    chip: "from-amber-500/90 to-orange-500/90 text-white",
    glow: "from-amber-500/15 to-orange-500/10",
  },
  rose: {
    chip: "from-rose-500/90 to-pink-500/90 text-white",
    glow: "from-rose-500/15 to-pink-500/10",
  },
  teal: {
    chip: "from-teal-500/90 to-cyan-600/90 text-white",
    glow: "from-teal-500/15 to-cyan-600/10",
  },
  orange: {
    chip: "from-orange-500/90 to-amber-500/90 text-white",
    glow: "from-orange-500/15 to-amber-500/10",
  },
  violet: {
    chip: "from-violet-500/90 to-purple-500/90 text-white",
    glow: "from-violet-500/15 to-purple-500/10",
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
          "pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-40 max-w-3xl bg-gradient-to-b to-transparent blur-2xl",
          t.glow
        )}
      />
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br shadow-md",
              t.chip
            )}
          >
            <Icon className="h-5.5 w-5.5" />
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
