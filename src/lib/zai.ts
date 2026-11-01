import "server-only";
import ZAI from "z-ai-web-dev-sdk";
import { GeminiError, extractAndParseJson } from "./gemini";

/* ── Z.ai backup provider (owner requirement) ───────────────────────────────
 * The platform's built-in AI (z-ai-web-dev-sdk) as an AUTOMATIC fallback
 * behind the user's own Gemini key (BYOK). When Gemini is unavailable —
 * no key saved, invalid/pending key, quota exhausted on every pool key,
 * Google 5xx/network failure, junk output — src/lib/ai-gateway.ts retries
 * the SAME prompt here, so no AI feature ever dead-ends.
 *
 * Contract notes:
 *  - Errors are thrown as GeminiError with the shared machine codes so every
 *    existing route keeps translating them through api-i18n unchanged.
 *  - JSON calls reuse gemini.ts's layered extractAndParseJson repair, so a
 *    backup answer honors the identical parsing contract as a primary one.
 *  - `safety` blocks are NOT retried here (the gateway decides) — content
 *    one provider's policy refused is not laundered through another.
 *  - The SDK instance is created once and reused across requests. */

type ZaiClient = Awaited<ReturnType<typeof ZAI.create>>;

let clientPromise: Promise<ZaiClient> | null = null;

function zai(): Promise<ZaiClient> {
  if (!clientPromise) {
    clientPromise = ZAI.create().catch((e: unknown) => {
      // Don't cache a failed creation — the next call retries (transient
      // config/env issues self-heal instead of poisoning the singleton).
      clientPromise = null;
      throw e;
    });
  }
  return clientPromise;
}

const CALL_TIMEOUT_MS = 45_000;

async function withTimeout<R>(p: Promise<R>, what: string): Promise<R> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      p,
      new Promise<never>((_, rej) => {
        timer = setTimeout(
          () => rej(new GeminiError("ব্যাকআপ AI-এর উত্তরে দেরি হচ্ছে — আবার চেষ্টা করুন।", 504, "aiNetwork")),
          CALL_TIMEOUT_MS
        );
      }),
    ]);
  } catch (e) {
    if (e instanceof GeminiError) throw e;
    // SDK errors arrive as plain Error/strings — normalize into the shared
    // code contract so routes keep their existing i18n mapping.
    const msg = e instanceof Error ? e.message : String(e);
    throw new GeminiError(`Z.ai backup failed (${what}).`, 502, "aiFailed", msg.slice(0, 200));
  } finally {
    if (timer) clearTimeout(timer);
  }
}

export interface ZaiOptions {
  systemPrompt?: string;
  /** Feature name for observability logs. */
  label?: string;
}

/** Plain-text completion through the platform's built-in AI. */
export async function zaiText(prompt: string, opts: ZaiOptions = {}): Promise<string> {
  const client = await zai();
  const messages: { role: "system" | "user"; content: string }[] = [];
  if (opts.systemPrompt) messages.push({ role: "system", content: opts.systemPrompt });
  messages.push({ role: "user", content: prompt });

  const completion = (await withTimeout(
    client.chat.completions.create({
      messages,
      thinking: { type: "disabled" },
    }),
    "text"
  )) as { choices?: { message?: { content?: string } }[] };

  const text = completion?.choices?.[0]?.message?.content ?? "";
  if (!text.trim()) {
    throw new GeminiError("AI খালি উত্তর দিয়েছে, আবার চেষ্টা করুন।", 502, "empty");
  }
  if (opts.label) {
    console.log(`[zai] ${opts.label} text ok (${text.length} chars)`);
  }
  return text;
}

const JSON_ONLY_NUDGE =
  "\n\nCRITICAL: Respond with ONLY the raw JSON value. No markdown, no code fences, no explanation — nothing before or after the JSON.";

/** JSON completion through the backup provider. One plain retry on a
 * format failure — truncation/junk is usually clean on the second pass. */
export async function zaiJson<T>(prompt: string, opts: ZaiOptions = {}): Promise<T> {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const text = await zaiText(prompt + JSON_ONLY_NUDGE, opts);
      return extractAndParseJson<T>(text);
    } catch (e) {
      // A badFormat from OUR parser means the model answered but the shape
      // was off — retry once. Anything else (network/empty) propagates.
      const isFormat = e instanceof GeminiError && e.code === "badFormat";
      if (!isFormat || attempt === 1) throw e;
      console.warn(`[zai] ${opts.label ?? "json"} format retry (${attempt + 1}/2)`);
    }
  }
  throw new GeminiError("AI কল ব্যর্থ হয়েছে।", 500, "aiFailed");
}

/** Speech-to-text through the platform's ASR — the STT route's backup when
 * the learner's Gemini key can't transcribe (no key / quota / Google down).
 * Accepts the same base64 audio the route already receives (wav/mp3…). */
export async function zaiStt(audioBase64: string, label = "stt"): Promise<string> {
  const client = await zai();
  const res = (await withTimeout(
    client.audio.asr.create({ file_base64: audioBase64 }),
    label
  )) as { text?: string };
  const text = typeof res?.text === "string" ? res.text.trim() : "";
  if (label) {
    console.log(`[zai] ${label} asr ok (${text.length} chars)`);
  }
  // Empty text = silence/noise — the route maps that to "" exactly like
  // Gemini's "#" sentinel, so the caller contract is unchanged.
  return text;
}

export interface ZaiProbeResult {
  ok: boolean;
  latencyMs: number;
  /** Raw provider reason on failure (diagnostics only). */
  message?: string;
}

/** Tiny live round-trip for the AI Hub's backup test — never throws. */
export async function probeZai(): Promise<ZaiProbeResult> {
  const started = Date.now();
  try {
    await zaiText("Reply with exactly: OK", { label: "probe-backup" });
    return { ok: true, latencyMs: Date.now() - started };
  } catch (e) {
    return {
      ok: false,
      latencyMs: Date.now() - started,
      message: (e instanceof Error ? e.message : String(e)).slice(0, 200),
    };
  }
}
