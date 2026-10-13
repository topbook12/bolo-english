"use client";

import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

// Compact stat card: icon chip + big value + label, tinted background.

const TINTS: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300",
  amber: "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300",
  rose: "bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300",
  teal: "bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300",
  orange: "bg-orange-50 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300",
  violet: "bg-violet-50 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300",
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
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
          TINTS[tint] ?? TINTS.emerald
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="truncate text-lg font-bold leading-tight">{value}</p>
        <p className="truncate text-xs text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
