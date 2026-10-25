// ─── Product analytics: shared event contract (D1, ROADMAP-60.md) ──────────
// PURE module — imported by both the client tracker (src/lib/track.ts) and
// server routes. No db, no server-only.
//
// Privacy-first design (the promise that ships with the feature):
//   • Event names are a CLOSED whitelist — unknown names are rejected.
//   • Props are flat objects (≤6 keys), keys [a-zA-Z0-9_]{1,24}, values
//     short strings (≤80 chars) / finite numbers / booleans. No emails,
//     no free text, no nested objects that could smuggle PII.
//   • The client NEVER sends an IP/user-agent — the server doesn't store
//     them either. userId is attached server-side from the session cookie.

/** The only event names /api/track will ever accept. */
export const TRACK_EVENTS = [
  "section_view", // {section}
  "session_start", // {locale}
  "session_end", // {durationSec}
  "quiz_complete", // {kind, score, total}  (server-derived from /api/practice)
  "speaking_session", // {type, durationSec, partnerCount} (server-derived from /api/sessions)
  "ai_call", // {feature}  (server-derived from /api/ai)
  "cv_export", // {}
  "app_install", // {}
  "feedback_sent", // {cat}  (client-fired by the D3 feedback widget on success)
  "rating_sent", // {kind}  (client-fired by the D4 rating widgets on success)
  "placement_done", // {level} (client-fired by the D8 placement test on success)
] as const;

export type TrackEventName = (typeof TRACK_EVENTS)[number];

const NAME_SET: ReadonlySet<string> = new Set(TRACK_EVENTS);
const MAX_PROPS_KEYS = 6;
const MAX_VALUE_LEN = 80;
const MAX_EVENTS_PER_BATCH = 20;

function cleanValue(v: unknown): string | number | boolean | undefined {
  if (typeof v === "boolean") return v;
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string") {
    const s = v.trim();
    // Drop anything that looks like it could carry identity data.
    if (!s || s.length > MAX_VALUE_LEN) return undefined;
    if (s.includes("@")) return undefined;
    return s;
  }
  return undefined;
}

/** Sanitize a props object → bounded flat object (or undefined when empty). */
export function sanitizeProps(
  raw: unknown
): Record<string, string | number | boolean> | undefined {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return undefined;
  const out: Record<string, string | number | boolean> = {};
  for (const [k, v] of Object.entries(raw as Record<string, unknown>)) {
    if (Object.keys(out).length >= MAX_PROPS_KEYS) break;
    if (!/^[a-zA-Z0-9_]{1,24}$/.test(k)) continue;
    const val = cleanValue(v);
    if (val !== undefined) out[k] = val;
  }
  return Object.keys(out).length ? out : undefined;
}

export interface ParsedTrackEvent {
  name: TrackEventName;
  props: string; // sanitized JSON string ({} when none)
}

/**
 * Validate a client-supplied batch. Returns ONLY the well-formed events
 * (bad entries are silently dropped — analytics must never error the UX).
 */
export function parseTrackBatch(raw: unknown): ParsedTrackEvent[] {
  if (!Array.isArray(raw)) return [];
  const out: ParsedTrackEvent[] = [];
  for (const item of raw.slice(0, MAX_EVENTS_PER_BATCH)) {
    if (!item || typeof item !== "object") continue;
    const name = (item as { name?: unknown }).name;
    if (typeof name !== "string" || !NAME_SET.has(name)) continue;
    const props = sanitizeProps((item as { props?: unknown }).props);
    out.push({ name: name as TrackEventName, props: JSON.stringify(props ?? {}) });
  }
  return out;
}
