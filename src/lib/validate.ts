// Shared input validation for routes that trust client-supplied deviceId /
// free-text payloads. Defensive caps keep the free Turso tier (5 GB) safe
// from bulk-writes and keep prompts/cache keys bounded.

export const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/**
 * deviceId gate: must be a UUID (crypto.randomUUID output, possibly
 * zero-padded legacy). Returns a sliced fallback-safe string — empty when
 * clearly invalid so routes can 400.
 */
export function cleanDeviceId(v: unknown, max = 64): string {
  if (typeof v !== "string") return "";
  const s = v.trim().slice(0, max);
  if (!s) return "";
  // Real device ids are UUIDs; accept them as-is. Anything else is either
  // legacy (allowed, length-capped) or junk/flood (very long, control chars).
  if (s.length > max / 2 && !UUID_RE.test(s)) return "";
  if (/[\u0000-\u001f\u007f]/.test(s)) return "";
  return s;
}

/** Bounded string for prompt/log/JSON-stringify surfaces. */
export function cleanStr(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

/** Bounded transcript line. */
export function cleanLine(v: unknown, maxText = 1000, maxSpeaker = 48) {
  if (typeof v !== "object" || v === null) return null;
  const o = v as Record<string, unknown>;
  const text = typeof o.text === "string" ? o.text.trim().slice(0, maxText) : "";
  if (!text) return null;
  const speaker = typeof o.speaker === "string" ? o.speaker.trim().slice(0, maxSpeaker) : "?";
  const peerId = typeof o.peerId === "string" ? o.peerId.slice(0, 40) : undefined;
  return peerId ? { speaker, text, peerId } : { speaker, text };
}
