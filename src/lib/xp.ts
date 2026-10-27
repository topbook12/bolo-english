// ─── XP engine — rules + PURE math (D29, ROADMAP-60) ────────────────────────
// One XP table for the whole product. Server-side code maps a verified
// activity to XP here; the client can NEVER name a number (it can only ask
// for a whitelisted kind, and even that is day-deduped + capped).
//
// Anti-abuse model (enforced in xp-server.ts before any row is written):
//   • per-kind daily caps (events for flat grants, XP for calls)
//   • one GLOBAL daily cap per device
//   • the client kind "lesson" is additionally deduped per (kind, refId, day)
//     so re-clicking "mark done" can never farm XP.
// Day bucketing: Asia/Dhaka calendar day (the product's home timezone).

/** XP grant kinds (stored in XpEvent.kind). */
export type XpKind =
  | "quiz"
  | "reading"
  | "dictation"
  | "review"
  | "call"
  | "lesson"
  | "challenge";

export interface XpFlatRule {
  type: "flat";
  xp: number; // XP per event
  dailyEvents: number; // max events per device per day
}

export interface XpCallRule {
  type: "call";
  xpPerMinute: number;
  minSeconds: number; // shorter calls grant 0 (a 20s dial is not practice)
  maxPerCall: number;
  dailyXp: number;
}

export type XpRule = XpFlatRule | XpCallRule;

/** The one table — tune amounts here only. */
export const XP_RULES: Record<XpKind, XpRule> = {
  // Any graded quiz from the practice log (grammar/vocab/listening/adaptive).
  quiz: { type: "flat", xp: 10, dailyEvents: 8 },
  // Reading comprehension quiz (D27 funnel).
  reading: { type: "flat", xp: 10, dailyEvents: 4 },
  // Listening dictation session (D26).
  dictation: { type: "flat", xp: 8, dailyEvents: 6 },
  // SRS review session (D22 ReviewDialog → practice kind "vocab-review").
  review: { type: "flat", xp: 4, dailyEvents: 10 },
  // Speaking call (AI partner / room / 1:1) — minute-based.
  call: { type: "call", xpPerMinute: 5, minSeconds: 30, maxPerCall: 40, dailyXp: 100 },
  // Grammar lesson marked done (client asks; server day-dedupes by refId).
  lesson: { type: "flat", xp: 6, dailyEvents: 4 },
  // Daily sentence challenge submission (D32) — one per day (DB unique),
  // so the cap mostly documents intent; the route awards directly.
  challenge: { type: "flat", xp: 12, dailyEvents: 1 },
};

/** Hard ceiling for one device per day — nothing can exceed this. */
export const XP_DAILY_GLOBAL_CAP = 500;

/** Map a /api/practice `kind` to its XP kind. null = that practice earns no XP. */
export function practiceToXpKind(practiceKind: string): XpKind | null {
  switch (practiceKind) {
    case "grammar-quiz":
    case "vocab-quiz":
    case "listening-quiz":
    case "grammar-adaptive":
      return "quiz";
    case "reading-quiz":
      return "reading";
    case "dictation":
      return "dictation";
    case "vocab-review":
      return "review";
    default:
      return null;
  }
}

/** XP for one speaking call. 0 below minSeconds; else minutes (≥1) × rate, capped. */
export function callXp(durationSec: number): number {
  const rule = XP_RULES.call as XpCallRule;
  const sec = Math.max(0, Math.floor(durationSec || 0));
  if (sec < rule.minSeconds) return 0;
  const minutes = Math.max(1, Math.round(sec / 60));
  return Math.min(rule.maxPerCall, minutes * rule.xpPerMinute);
}

/**Asia/Dhaka (UTC+6) calendar day for the given instant — "2026-11-02". */
export function xpDay(now: Date = new Date()): string {
  return new Date(now.getTime() + 6 * 3_600_000).toISOString().slice(0, 10);
}

export interface CapInput {
  earned: number;
  kind: XpKind;
  kindXpToday: number; // XP already granted for this kind today
  kindEventsToday: number; // events already granted for this kind today
  dayXpToday: number; // global XP already granted today
}

export interface CapResult {
  xp: number; // what may be granted (0 = skip the row entirely)
  capped: boolean; // true when the grant was shrunk or skipped
}

/** PURE: apply the per-kind + global caps to an earned amount. */
export function applyCaps(input: CapInput): CapResult {
  const rule = XP_RULES[input.kind];
  if (input.earned <= 0) return { xp: 0, capped: false };

  let allowed = input.earned;
  if (rule.type === "flat") {
    allowed = Math.min(allowed, (rule.dailyEvents - input.kindEventsToday) * rule.xp);
  } else {
    allowed = Math.min(allowed, rule.dailyXp - input.kindXpToday);
  }
  allowed = Math.min(allowed, XP_DAILY_GLOBAL_CAP - input.dayXpToday);
  allowed = Math.max(0, Math.min(input.earned, allowed));
  return { xp: allowed, capped: allowed < input.earned };
}

/** Day bucket for "7 days ago … today" charts (oldest first). */
export function lastNDays(n: number, today = xpDay()): string[] {
  const base = new Date(`${today}T00:00:00.000Z`).getTime();
  const out: string[] = [];
  for (let i = n - 1; i >= 0; i--) out.push(new Date(base - i * 86_400_000).toISOString().slice(0, 10));
  return out;
}
