// ─── Session rating + NPS: shared validation contract (D4, ROADMAP-60.md) ───
// PURE module — imported by the /api/rating route (server) and the client
// rating components. No db, no server-only. Mirrors src/lib/feedback.ts.
//
// Kinds:
//   • "speaking" — 1-5, shown after a call ends (CallFlow ended screen)
//   • "quiz"     — 1-5, shown on quiz score screens (grammar/vocab/listening)
//   • "nps"      — 0-10, weekly prompt (standard Net Promoter Score scale)
//
// Privacy rules (mirrors the feedback contract):
//   • kind is a closed whitelist; score is range-checked per kind
//   • comment is user-typed free text capped at 500 chars; the server never
//     auto-attaches email / IP / user-agent next to it
//   • `context` is a path-only or topic-key tag (sanitized charset, ≤120) so
//     tokens/PII can't ride in — same spirit as feedback's cleanPage
//   • userId is attached server-side from the session cookie, never by the
//     client

export const RATING_KINDS = ["speaking", "quiz", "nps"] as const;
export type RatingKind = (typeof RATING_KINDS)[number];

const KIND_SET: ReadonlySet<string> = new Set(RATING_KINDS);

export const MAX_COMMENT_LEN = 500;
export const MAX_CONTEXT_LEN = 120;

/** NPS scale bounds; session kinds are 1-5. */
export const NPS_MIN = 0;
export const NPS_MAX = 10;
export const SESSION_RATING_MIN = 1;
export const SESSION_RATING_MAX = 5;

/** Lowest score considered "promoter" on the NPS scale (9-10). */
export const NPS_PROMOTER_MIN = 9;
/** Passive band: 7-8. Detractors: 0-6. */
export const NPS_PASSIVE_MIN = 7;

export function isKind(v: unknown): v is RatingKind {
  return typeof v === "string" && KIND_SET.has(v);
}

/** Range-check a score for the given kind. Integers only. */
export function isValidScore(kind: RatingKind, v: unknown): v is number {
  if (typeof v !== "number" || !Number.isInteger(v)) return false;
  if (kind === "nps") return v >= NPS_MIN && v <= NPS_MAX;
  return v >= SESSION_RATING_MIN && v <= SESSION_RATING_MAX;
}

/** User-typed comment: strip control chars (keep newlines), trim, cap. */
export function cleanComment(v: unknown): string {
  if (typeof v !== "string") return "";
  const s = v
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
    .trim();
  return s.slice(0, MAX_COMMENT_LEN);
}

/**
 * Context tag: "/speaking", "/grammar", "tenses", "vocab-review"…
 * Keep a safe charset (paths + topic keys), cap at 120. Empty → "".
 */
export function cleanContext(v: unknown): string {
  if (typeof v !== "string") return "";
  const s = v
    .replace(/[^a-zA-Z0-9_\-/. ]/g, "")
    .trim()
    .slice(0, MAX_CONTEXT_LEN);
  return s;
}
