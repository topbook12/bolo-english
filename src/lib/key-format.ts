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
  // complete Gemini key (AIza + 35 key chars = exactly 39) embedded inside
  // longer text is recovered here, so a correct key no longer fails the
  // format check because of junk it arrived with. For an already-clean key
  // the match returns the identical string — zero behavior change.
  const embedded = cleaned.match(/AIza[0-9A-Za-z_\-]{35}/);
  return embedded ? embedded[0] : cleaned;
}

/** Loose structural check after sanitizing (keys are `AIza…` ~39 chars). */
export function isValidGeminiKeyFormat(key: string): boolean {
  return /^[A-Za-z0-9_\-]{20,}$/.test(key);
}
