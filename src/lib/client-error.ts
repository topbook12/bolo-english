// ─── Client error monitoring: shared validation contract (D5, ROADMAP-60) ──
// PURE module — imported by the /api/client-error route (server) and the
// client error boundary / reporter. No db, no server-only.
//
// What may be stored about an error (deliberately short, no PII):
//   • message — first line of the error message, ≤300 chars, single line
//   • stack   — trimmed minified stack, ≤2000 chars (file URLs of our own
//     chunks only; a browser never includes user data here)
//   • digest  — Next.js production digest token, ≤64 chars
//   • path    — path-only page tag (query+hash stripped), ≤120 chars
//   • source  — closed whitelist: boundary | window | rejection

export const ERROR_SOURCES = ["boundary", "window", "rejection"] as const;
export type ErrorSource = (typeof ERROR_SOURCES)[number];

const SOURCE_SET: ReadonlySet<string> = new Set(ERROR_SOURCES);

export const MAX_ERROR_MESSAGE_LEN = 300;
export const MAX_ERROR_STACK_LEN = 2000;
export const MAX_ERROR_DIGEST_LEN = 64;
export const MAX_ERROR_PATH_LEN = 120;

export function isSource(v: unknown): v is ErrorSource {
  return typeof v === "string" && SOURCE_SET.has(v);
}

/** First line of the message: strip control chars/newlines, trim, cap. */
export function cleanErrorMessage(v: unknown): string {
  if (typeof v !== "string") return "";
  const s = v
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return s.slice(0, MAX_ERROR_MESSAGE_LEN);
}

/** Trimmed stack: strip control chars except newlines, cap at 2000. */
export function cleanErrorStack(v: unknown): string {
  if (typeof v !== "string") return "";
  const s = v
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
    .trim();
  return s.slice(0, MAX_ERROR_STACK_LEN);
}

/** Digest token: alphanumeric + dash/underscore only, cap 64. */
export function cleanErrorDigest(v: unknown): string {
  if (typeof v !== "string") return "";
  const s = v.replace(/[^a-zA-Z0-9_\-]/g, "").slice(0, MAX_ERROR_DIGEST_LEN);
  return s;
}

/** Path-only page tag: keep "/a/b", drop query+hash, cap 120. */
export function cleanErrorPath(v: unknown): string {
  if (typeof v !== "string") return "";
  const noQuery = (v.split("?")[0] ?? "").split("#")[0] ?? "";
  const s = noQuery.trim();
  if (!s.startsWith("/") || s.length > MAX_ERROR_PATH_LEN) return "";
  return s;
}
