import "server-only";
import {
  GeminiError,
  geminiJson,
  geminiText,
  getUserApiKeyWithMeta,
  type GeminiErrCode,
  type GeminiOptions,
} from "./gemini";
import { zaiJson, zaiStt, zaiText } from "./zai";

/* ── AI provider gateway: BYOK Gemini primary → Z.ai backup ────────────────
 * One call site for every AI feature. Resolution order:
 *   1. The learner's own Gemini key (pool → legacy) with the full model
 *      fallback chain + pool rotation (src/lib/gemini.ts).
 *   2. On a PROVIDER-LEVEL failure the whole call transparently re-runs on
 *      the platform's built-in Z.ai AI — no feature ever dead-ends on a
 *      missing/broken/exhausted key.
 *
 * Fallback eligibility (code → reason):
 *   noKey/keyUnreadable    — nothing saved / unreadable ciphertext
 *   badKey/authKeyPending  — key invalid or Google's new AQ. rollout refusal
 *   quota                  — every pool key exhausted (rotation already ran)
 *   geminiServer/aiNetwork — Google 5xx / network / timeout
 *   modelIneligible        — no model usable for this key
 *   aiFailed/empty/badFormat — provider answered but the output is junk
 * Explicitly NOT eligible: `safety` — content one provider's policy refused
 * is never laundered through another provider. Audio calls fall back to the
 * platform ASR (zaiStt) rather than a chat model, which cannot hear audio. */

const FALLBACK_CODES: ReadonlySet<GeminiErrCode> = new Set([
  "noKey",
  "keyUnreadable",
  "badKey",
  "authKeyPending",
  "quota",
  "geminiServer",
  "aiNetwork",
  "modelIneligible",
  "aiFailed",
  "empty",
  "badFormat",
]);

function fallbackEligible(e: unknown): e is GeminiError {
  return e instanceof GeminiError && !!e.code && FALLBACK_CODES.has(e.code);
}

/** Structured JSON call: Gemini (BYOK) first, Z.ai backup on failure. */
export async function aiJson<T>(deviceId: string, prompt: string, opts: GeminiOptions = {}): Promise<T> {
  try {
    const { apiKey } = await getUserApiKeyWithMeta(deviceId);
    return await geminiJson<T>(apiKey, prompt, opts);
  } catch (e) {
    if (fallbackEligible(e)) {
      console.log(`[ai-gateway] ${opts.label ?? "json"}: Gemini unavailable (${e.code}) → Z.ai backup`);
      return zaiJson<T>(prompt, { systemPrompt: opts.systemPrompt, label: opts.label });
    }
    throw e;
  }
}

/** Plain-text call: Gemini (BYOK) first, Z.ai backup on failure. */
export async function aiText(deviceId: string, prompt: string, opts: GeminiOptions = {}): Promise<string> {
  try {
    const { apiKey } = await getUserApiKeyWithMeta(deviceId);
    return await geminiText(apiKey, prompt, opts);
  } catch (e) {
    if (fallbackEligible(e)) {
      console.log(`[ai-gateway] ${opts.label ?? "text"}: Gemini unavailable (${e.code}) → Z.ai backup`);
      return zaiText(prompt, { systemPrompt: opts.systemPrompt, label: opts.label });
    }
    throw e;
  }
}

/** Audio transcription: the learner's Gemini key first; on provider failure
 * the platform's ASR. Returns "" for silence — same sentinel contract as the
 * STT route's "#" handling. */
export async function aiStt(
  deviceId: string,
  audioBase64: string,
  mime: string,
  label = "stt"
): Promise<string> {
  try {
    const { apiKey } = await getUserApiKeyWithMeta(deviceId);
    return await geminiText(
      apiKey,
      [
        "Transcribe the speech in this audio recording EXACTLY as spoken.",
        "The speaker may speak English (or mix in a little of their own language) — write what is actually said.",
        "Reply with ONLY the transcription text on a single line — no labels, no quotes, no commentary.",
        "If the audio is silent, noise-only or unintelligible, reply with exactly: #",
      ].join(" "),
      { temperature: 0, audio: { data: audioBase64, mime }, label }
    );
  } catch (e) {
    if (fallbackEligible(e)) {
      console.log(`[ai-gateway] ${label}: Gemini unavailable (${e.code}) → Z.ai ASR backup`);
      const text = await zaiStt(audioBase64, label);
      // Map silence to Gemini's "#" sentinel so the caller's cleanup is identical.
      return text === "" ? "#" : text;
    }
    throw e;
  }
}
