// ─── Leaderboard helpers (D30, ROADMAP-60) — PURE, no db ────────────────────
// Privacy-safe naming + league math for the community leaderboard.

export type League = "wood" | "silver" | "gold";

/** Weekly-XP thresholds (last 7 Dhaka days) for the three leagues.
 *  Tunable here only: gold = serious week, silver = steady week, wood = started. */
export const LEAGUE_THRESHOLDS: Record<League, number> = {
  wood: 0,
  silver: 100,
  gold: 250,
};

export function leagueFor(weekXp: number): League {
  if (weekXp >= LEAGUE_THRESHOLDS.gold) return "gold";
  if (weekXp >= LEAGUE_THRESHOLDS.silver) return "silver";
  return "wood";
}

/**
 * Privacy-safe leaderboard name: FIRST name + last initial ("Topu B.").
 * Deliberately NEVER the full name, email or device id. Empty/legacy-no-name
 * rows fall back to the caller's localized "Learner" word.
 */
export function privacyName(raw: string | null | undefined, fallback: string): string {
  const name = (raw ?? "").trim();
  if (!name) return fallback;
  const parts = name.split(/\s+/).slice(0, 2);
  if (parts.length === 1) return parts[0].slice(0, 14);
  const initial = parts[1]!.charAt(0).toUpperCase();
  return `${parts[0].slice(0, 14)} ${initial}.`;
}

/** Rank sort: XP desc, then name asc (stable, deterministic for tests). */
export function rankSort(a: { xp: number; name: string }, b: { xp: number; name: string }): number {
  if (b.xp !== a.xp) return b.xp - a.xp;
  return a.name.localeCompare(b.name);
}
