"use client";

// VOCABULARY JOURNEY — shared visual identity (design tokens).
//
// A coherent colour walk across the whole journey: the five units of a level
// share one colour family, and the families themselves advance from fresh
// greens (beginner) through warm ambers (intermediate) to deep violets and
// roses (advanced) — so "moving forward" is something you can SEE before you
// read a single word. No blues/indigos anywhere (project colour rule).

import type { LibraryLevel } from "@/lib/library-types";

/* ───────────────────────── Unit identity ───────────────────────── */

/** Emoji + gradient + soft tint for one of the 15 path units. */
export interface UnitVisual {
  emoji: string;
  /** Bold gradient for banners/badges (bg-gradient-to-br …). */
  gradient: string;
  /** Soft background + text pair for chips and card accents. */
  soft: string;
  /** Solid text colour (e.g. for progress rings). */
  text: string;
  /** Ring/track stroke colour used inside SVG (hex). */
  stroke: string;
}

export const UNIT_VISUALS: Record<LibraryLevel, UnitVisual[]> = {
  // Beginner — fresh growth: emerald → lime → teal (spring greens)
  beginner: [
    { emoji: "🌱", gradient: "from-emerald-500 to-teal-500", soft: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300", text: "text-emerald-600 dark:text-emerald-400", stroke: "#10b981" },
    { emoji: "👨‍👩‍👧", gradient: "from-teal-500 to-emerald-600", soft: "bg-teal-500/10 text-teal-700 dark:text-teal-300", text: "text-teal-600 dark:text-teal-400", stroke: "#14b8a6" },
    { emoji: "🏠", gradient: "from-lime-500 to-emerald-600", soft: "bg-lime-500/10 text-lime-700 dark:text-lime-300", text: "text-lime-600 dark:text-lime-400", stroke: "#84cc16" },
    { emoji: "🌤", gradient: "from-green-500 to-teal-600", soft: "bg-green-500/10 text-green-700 dark:text-green-300", text: "text-green-600 dark:text-green-400", stroke: "#22c55e" },
    { emoji: "🌦", gradient: "from-teal-600 to-green-500", soft: "bg-teal-500/10 text-teal-700 dark:text-teal-300", text: "text-teal-600 dark:text-teal-400", stroke: "#0d9488" },
  ],
  // Intermediate — rising energy: amber → orange → rose sparks
  intermediate: [
    { emoji: "💬", gradient: "from-amber-500 to-orange-500", soft: "bg-amber-500/10 text-amber-700 dark:text-amber-300", text: "text-amber-600 dark:text-amber-400", stroke: "#f59e0b" },
    { emoji: "💼", gradient: "from-orange-500 to-amber-600", soft: "bg-orange-500/10 text-orange-700 dark:text-orange-300", text: "text-orange-600 dark:text-orange-400", stroke: "#f97316" },
    { emoji: "🧭", gradient: "from-amber-400 to-orange-600", soft: "bg-amber-500/10 text-amber-700 dark:text-amber-300", text: "text-amber-600 dark:text-amber-400", stroke: "#fbbf24" },
    { emoji: "🎭", gradient: "from-orange-500 to-rose-500", soft: "bg-orange-500/10 text-orange-700 dark:text-orange-300", text: "text-orange-600 dark:text-orange-400", stroke: "#fb923c" },
    { emoji: "🎯", gradient: "from-amber-500 to-orange-500", soft: "bg-amber-500/10 text-amber-700 dark:text-amber-300", text: "text-amber-600 dark:text-amber-400", stroke: "#f59e0b" },
  ],
  // Advanced — mastery depth: violet → fuchsia → rose
  advanced: [
    { emoji: "🧠", gradient: "from-violet-500 to-purple-600", soft: "bg-violet-500/10 text-violet-700 dark:text-violet-300", text: "text-violet-600 dark:text-violet-400", stroke: "#8b5cf6" },
    { emoji: "🏛", gradient: "from-purple-500 to-fuchsia-600", soft: "bg-purple-500/10 text-purple-700 dark:text-purple-300", text: "text-purple-600 dark:text-purple-400", stroke: "#a855f7" },
    { emoji: "🤝", gradient: "from-fuchsia-500 to-rose-500", soft: "bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300", text: "text-fuchsia-600 dark:text-fuchsia-400", stroke: "#d946ef" },
    { emoji: "🔬", gradient: "from-rose-500 to-pink-600", soft: "bg-rose-500/10 text-rose-700 dark:text-rose-300", text: "text-rose-600 dark:text-rose-400", stroke: "#f43f5e" },
    { emoji: "🌟", gradient: "from-violet-600 to-fuchsia-500", soft: "bg-violet-500/10 text-violet-700 dark:text-violet-300", text: "text-violet-600 dark:text-violet-400", stroke: "#7c3aed" },
  ],
};

/** Unit visual for a level+unit (unit 0 "extras" falls back to the last slot). */
export function unitVisual(level: LibraryLevel, unit: number): UnitVisual {
  const list = UNIT_VISUALS[level];
  const idx = unit >= 1 && unit <= 5 ? unit - 1 : 0;
  return list[idx] ?? list[0];
}

/** Unit extras (unit 0) — a quiet slate identity. */
export const EXTRA_UNIT_VISUAL: UnitVisual = {
  emoji: "★",
  gradient: "from-slate-500 to-slate-600",
  soft: "bg-slate-500/10 text-slate-700 dark:text-slate-300",
  text: "text-slate-600 dark:text-slate-400",
  stroke: "#64748b",
};

/* ───────────────────────── Category identity ───────────────────────── */

/** Emoji + chip tint for a word's category (general | daily | work | travel | academic). */
export const CATEGORY_META: Record<string, { emoji: string; chip: string }> = {
  general: { emoji: "📖", chip: "bg-stone-500/10 text-stone-700 dark:text-stone-300" },
  daily: { emoji: "🌤", chip: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" },
  work: { emoji: "💼", chip: "bg-amber-500/10 text-amber-700 dark:text-amber-300" },
  travel: { emoji: "🧭", chip: "bg-orange-500/10 text-orange-700 dark:text-orange-300" },
  academic: { emoji: "🎓", chip: "bg-violet-500/10 text-violet-700 dark:text-violet-300" },
};

export function categoryMeta(cat: string | undefined): { emoji: string; chip: string } {
  return (cat && CATEGORY_META[cat]) || CATEGORY_META.general;
}

/* ───────────────────────── Level journey ───────────────────────── */

export interface LevelVisual {
  emoji: string;
  /** Journey station gradient. */
  gradient: string;
  /** Soft chip tint. */
  soft: string;
  /** SVG stroke for the completion ring. */
  stroke: string;
}

export const LEVEL_VISUALS: Record<LibraryLevel, LevelVisual> = {
  beginner: { emoji: "🌱", gradient: "from-emerald-500 to-teal-600", soft: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300", stroke: "#10b981" },
  intermediate: { emoji: "🚀", gradient: "from-amber-500 to-orange-600", soft: "bg-amber-500/10 text-amber-700 dark:text-amber-300", stroke: "#f59e0b" },
  advanced: { emoji: "🏔", gradient: "from-violet-500 to-fuchsia-600", soft: "bg-violet-500/10 text-violet-700 dark:text-violet-300", stroke: "#8b5cf6" },
};

/** Ordered walk of the journey (beginner → advanced). */
export const JOURNEY_ORDER: LibraryLevel[] = ["beginner", "intermediate", "advanced"];

/* ───────────────────────── Part-of-speech chips ───────────────────────── */

const POS_CHIP_POOL = [
  "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  "bg-amber-500/10 text-amber-700 dark:text-amber-300",
  "bg-rose-500/10 text-rose-700 dark:text-rose-300",
  "bg-violet-500/10 text-violet-700 dark:text-violet-300",
  "bg-teal-500/10 text-teal-700 dark:text-teal-300",
  "bg-orange-500/10 text-orange-700 dark:text-orange-300",
];

/** Deterministic soft chip tint for any part-of-speech string. */
export function posChip(pos: string | undefined): string {
  if (!pos) return "bg-muted text-muted-foreground";
  let h = 0;
  for (let i = 0; i < pos.length; i++) h = (h * 31 + pos.charCodeAt(i)) | 0;
  return POS_CHIP_POOL[Math.abs(h) % POS_CHIP_POOL.length];
}
