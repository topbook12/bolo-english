"use client";

import { Check, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Premium bullet lists — check chips for tips, numbered gradient circles
// for steps. Replaces plain dash/point lists everywhere.

interface PointListProps {
  items: React.ReactNode[];
  variant?: "check" | "number";
  className?: string;
  itemClassName?: string;
  /** 2 = two-column grid on sm+ screens (premium desktop layout) */
  columns?: 1 | 2;
}

export default function PointList({
  items,
  variant = "check",
  className,
  itemClassName,
  columns = 1,
}: PointListProps) {
  return (
    <ul
      className={cn(
        columns === 2
          ? "grid gap-2.5 sm:grid-cols-2 sm:gap-x-8"
          : "space-y-2.5",
        className
      )}
    >
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          {variant === "check" ? (
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950">
              <Check className="h-3 w-3 text-emerald-700 dark:text-emerald-300" strokeWidth={3} />
            </span>
          ) : (
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-[10px] font-bold text-white">
              {i + 1}
            </span>
          )}
          <span className={cn("min-w-0 flex-1 text-sm leading-relaxed", itemClassName)}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Small arrow-bullet row for compact lists (links, jump actions) */
export function ArrowPoint({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors hover:bg-accent",
        className
      )}
    >
      <ChevronRight className="h-4 w-4 shrink-0 text-primary" />
      <span className="min-w-0 flex-1">{children}</span>
    </button>
  );
}
