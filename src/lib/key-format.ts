// Gemini API key helpers — safe to import from BOTH client and server code
// (no node:crypto here; the AES layer lives in lib/crypto.ts).

/**
 * Clean a pasted Gemini API key. Mobile copy/share flows frequently wrap the
 * key with invisible characters that made perfectly valid keys fail the
 * format check ("কী-এর ফরম্যাট ঠিক দেখাচ্ছে না"):
 *  - zero-width chars (U+200B–U+200D, U+2060) and BOM (U+FEFF) picked up
 *    when copying through chat apps
 *  - all whitespace, including newlines/nbsp added by wrapped text fields
 *  - surrounding straight/curly quotes from formatted messages
 * Real keys never contain any of these, so stripping is always safe.
 */
export function sanitizeApiKey(input: string): string {
  const cleaned = input
    .replace(/[\u200B-\u200D\u2060\uFEFF]/g, "")
    .replace(/^[\s"'“”‘’]+|[\s"'“”‘’]+$/g, "")
    .replace(/\s+/g, "");
  // Auto-extract: users often copy the key WITH surrounding text ("Key:
  // AIza…", a trailing period/dari, the next line of a chat message). A
  // complete key embedded inside longer text is recovered here, so a correct
  // key no longer fails the format check because of junk it arrived with.
  // For an already-clean key the match returns the identical string — zero
  // behavior change.
  //  - Legacy standard keys: "AIza" + 35 key chars (39 total, no dot).
  //  - New auth keys (AI Studio default since May 2026): "AQ." + an opaque
  //    token (~50 chars). The dot is PART of the key — never strip it.
  const legacy = cleaned.match(/AIza[0-9A-Za-z_\-]{35}/);
  if (legacy) return legacy[0];
  const auth = cleaned.match(/AQ\.[A-Za-z0-9_\-]{20,}/);
  if (auth) return auth[0];
  return cleaned;
}

/** Structural check after sanitizing: legacy AIza… keys or new AQ.… auth keys. */
export function isValidGeminiKeyFormat(key: string): boolean {
  // Legacy standard key: "AIza" + 35 chars (all covered by [A-Za-z0-9_-]).
  if (/^AIza[0-9A-Za-z_\-]{35}$/.test(key)) return true;
  // New auth key: "AQ." + opaque token (the dot is part of the key).
  if (/^AQ\.[A-Za-z0-9_\-]{20,}$/.test(key)) return true;
  return false;
}

/** New-format Google auth key (AQ.…) — needs its own handling while Google
 * rolls the format out (some fresh keys are refused with the known
 * ACCESS_TOKEN_TYPE_UNSUPPORTED transition error). */
export function isAuthKeyFormat(key: string): boolean {
  return /^AQ\.[A-Za-z0-9_\-]{20,}$/.test(key);
}
