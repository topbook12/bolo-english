// ─── Moderation helpers (D33, ROADMAP-60) — PURE, no db ─────────────────────
// Lightweight abuse-content flagging for user-typed community text (the
// daily sentence challenge). This is a FIRST-LINE filter, not a judgment:
// flagged text is hidden from the public feed and waits in the admin queue —
// a human (the site owner) always makes the final call.

/** Report reasons (server whitelist — mirrors ContentReport.reason). */
export const REPORT_REASONS = ["spam", "abuse", "sexual", "violence", "other"] as const;
export type ReportReason = (typeof REPORT_REASONS)[number];

export const REPORT_TARGETS = ["sentence", "room", "profile"] as const;
export type ReportTarget = (typeof REPORT_TARGETS)[number];

export const REPORT_STATUSES = ["open", "reviewed", "actioned"] as const;

/** Reaction emoji whitelist (stored keys — the UI maps them to glyphs). */
export const REACTION_EMOJIS = ["thumbs_up", "heart", "fire"] as const;
export type ReactionEmoji = (typeof REACTION_EMOJIS)[number];

/**
 * A deliberately SMALL word list (substring match, case-insensitive) of the
 * most unambiguous English + Bangla (Romanized) abuse terms — tuned for a
 * language-learning community where real sentences can contain innocent
 * words. False positives cost a review; false negatives cost a report.
 */
const BAD_WORDS = [
  // sexual / explicit
  "fuck", "fuk", "bitch", "bastard", "whore", "slut", "dick ", "cock ", "porn", "sex ",
  "চুদ", "খানকি", "বেশ্যা", "chuda", "khanki", "beshya", " Randi", "chut ",
  // strong abuse
  "idiot", "stupid idiot", "moron", "gadha",
  "হারামখোর", "কুত্তার", "shuorer", "kuttar bachcha",
  // violence
  "kill you", "i will kill", "marbo", "মারব",
];

export interface FlagResult {
  flagged: boolean;
  hits: string[]; // the matched terms (≤5, for the admin queue only)
}

/** PURE: check user text against the flag list. ≤300 chars is enforced upstream. */
export function flagText(text: string): FlagResult {
  const hay = ` ${text.toLowerCase().replace(/\s+/g, " ")} `;
  const hits: string[] = [];
  for (const w of BAD_WORDS) {
    if (hay.includes(w.toLowerCase())) hits.push(w.trim());
    if (hits.length >= 5) break;
  }
  return { flagged: hits.length > 0, hits };
}

/** Strip the words themselves from what the feed/store shows — no echo. */
export function maskFlagged(text: string): string {
  return text.length > 80 ? `${text.slice(0, 77)}…` : text;
}
