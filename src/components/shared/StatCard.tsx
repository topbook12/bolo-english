"use client";

import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

// Compact stat card: gradient icon chip + big value + label.
// Gradient chips match SectionHeader so stats feel part of the same system.

const TINTS: Record<string, string> = {
  emerald: "from-emerald-500/90 to-teal-600/90 text-white",
  amber: "from-amber-500/90 to-orange-600/90 text-white",
  rose: "from-rose-500/90 to-pink-600/90 text-white",
  teal: "from-teal-500/90 to-emerald-600/90 text-white",
  orange: "from-orange-500/90 to-amber-600/90 text-white",
  violet: "from-violet-500/90 to-purple-600/90 text-white",
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
  return (
    <div
      className={cn(
        "premium-card flex items-center gap-3 rounded-2xl bg-card p-4",
        className
      )}
    >
      <span
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm ring-1 ring-inset ring-white/25",
          TINTS[tint] ?? TINTS.emerald
        )}
      >
        <Icon className="h-5 w-5 drop-shadow-sm" />
      </span>
      <div className="min-w-0">
        <p className="truncate text-lg font-bold leading-tight">{value}</p>
        <p className="truncate text-xs text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
