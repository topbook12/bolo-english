// ─── In-app feedback: shared validation contract (D3, ROADMAP-60.md) ────────
// PURE module — imported by the /api/feedback routes (server) and the client
// widget. No db, no server-only.
//
// Privacy rules (mirrors the analytics contract, relaxed for the one field
// that MUST be free text — the message the user typed themselves):
//   • category is a closed whitelist (bug | idea | problem)
//   • message is user-typed free text capped at 1000 chars; the server never
//     auto-attaches email / IP / user-agent next to it
//   • `page` is path-only (query + hash stripped) so tokens/PII can't ride
//     in via URLs
//   • userId is attached server-side from the session cookie, never by the
//     client

export const FEEDBACK_CATEGORIES = ["bug", "idea", "problem"] as const;
export type FeedbackCategory = (typeof FEEDBACK_CATEGORIES)[number];

export const FEEDBACK_STATUSES = ["new", "seen", "resolved"] as const;
export type FeedbackStatus = (typeof FEEDBACK_STATUSES)[number];

const CATEGORY_SET: ReadonlySet<string> = new Set(FEEDBACK_CATEGORIES);
const STATUS_SET: ReadonlySet<string> = new Set(FEEDBACK_STATUSES);

export const MAX_MESSAGE_LEN = 1000;
export const MIN_MESSAGE_LEN = 3;
const MAX_PAGE_LEN = 120;

export function isCategory(v: unknown): v is FeedbackCategory {
  return typeof v === "string" && CATEGORY_SET.has(v);
}

export function isStatus(v: unknown): v is FeedbackStatus {
  return typeof v === "string" && STATUS_SET.has(v);
}

/** User-typed message: strip control chars (keep newlines), trim, cap. */
export function cleanMessage(v: unknown): string {
  if (typeof v !== "string") return "";
  const s = v
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
    .trim();
  return s.slice(0, MAX_MESSAGE_LEN);
}

/** Path-only page tag: keep "/a/b", drop query+hash, cap 120. */
export function cleanPage(v: unknown): string {
  if (typeof v !== "string") return "";
  const noQuery = (v.split("?")[0] ?? "").split("#")[0] ?? "";
  const s = noQuery.trim();
  if (!s.startsWith("/") || s.length > MAX_PAGE_LEN) return "";
  return s;
}
