import { NextRequest, NextResponse } from "next/server";
import { checkIpLimit } from "@/lib/rate-limit";
import { reqLocale, apiMsg, type ApiLocale } from "@/lib/api-i18n";
import { GeminiError } from "@/lib/gemini";
import { aiStt } from "@/lib/ai-gateway";

// Server speech-to-text fallback (Task 27-m, re-built in Task 29) for browsers
// WITHOUT the Web Speech API — iPhone Safari has no recognition at all. The
// call room records a push-to-talk hold with MediaRecorder, transcodes it to
// WAV client-side (Gemini does not accept audio/webm), base64-encodes it and
// POSTs it here. Transcription runs on the LEARNER'S OWN Gemini key first
// (BYOK — same key-pool resolution as every other AI feature); when that is
// unavailable (no key / quota / Google down) the platform's Z.ai ASR serves
// the SAME audio as an automatic backup (aiStt), so mobile captions and the
// end-of-call analysis never dead-end on a missing key.

export const maxDuration = 60;

/* ── limits ── */
const MAX_AUDIO_BYTES = 8 * 1024 * 1024; // ~8MB decoded audio (a 20s hold is ≪ 1MB)
// Strict allow-list: "audio/<subtype>" plus an optional codecs parameter, and
// nothing else — no paths, no parameters we don't understand. The container
// is passed through honestly; the client is responsible for transcoding webm
// to wav (Gemini does not accept audio/webm).
const MIME_RE = /^audio\/[\w.+-]{1,60}(;\s*codecs=[\w.+-]{1,60})?$/;
// Used only when the client sends no mime at all (shouldn't happen — the
// call room always tags its recording).
const DEFAULT_MIME = "audio/wav";
// Base64 body only (the client strips the data: URL prefix). Whitespace is
// tolerated — some runtimes wrap long base64.
const B64_RE = /^[A-Za-z0-9+/=\s]+$/;

function jsonOk(data: unknown) {
  return NextResponse.json({ ok: true, data });
}

function jsonErr(message: string, status = 500) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

/** Translate a thrown error into the user's UI language via error codes
 * (same contract as POST /api/ai). */
function geminiErrMsg(locale: ApiLocale, e: unknown): string {
  if (e instanceof GeminiError && e.code) {
    if (e.code === "aiFailed") {
      return apiMsg(locale, "aiFailedReason", { reason: e.message.slice(0, 140) });
    }
    return apiMsg(locale, e.code);
  }
  return (e as Error)?.message || apiMsg(locale, "aiFailed");
}

export async function POST(req: NextRequest) {
  const locale = reqLocale(req);

  // Per-IP shield (30 holds/min is far more than a real conversation needs);
  // it catches loops and key-drain bots on top of the key's own quota.
  if (!checkIpLimit(req, "stt", 30)) {
    return jsonErr(apiMsg(locale, "rateLimited"), 429);
  }

  let body: { deviceId?: unknown; audio?: unknown; mime?: unknown };
  try {
    body = await req.json();
  } catch {
    return jsonErr(apiMsg(locale, "paramsRequired"), 400);
  }

  const deviceId =
    typeof body.deviceId === "string" ? body.deviceId.trim().slice(0, 80) : "";
  const audio = typeof body.audio === "string" ? body.audio : "";
  if (!deviceId || !audio || !B64_RE.test(audio)) {
    return jsonErr(apiMsg(locale, "paramsRequired"), 400);
  }

  // decoded size ≈ base64 length × 3/4 (padding slop ignored — close enough)
  const approxBytes = Math.floor((audio.length * 3) / 4);
  if (approxBytes > MAX_AUDIO_BYTES) {
    return jsonErr(apiMsg(locale, "audioTooLarge"), 413);
  }

  const rawMime = typeof body.mime === "string" ? body.mime : "";
  let mime = DEFAULT_MIME;
  if (MIME_RE.test(rawMime)) {
    // Pass the container through honestly — supported types go straight to
    // Gemini; an unsupported one (e.g. legacy webm) fails fast with Google's
    // clear error instead of a mislabeled wav.
    mime = rawMime.split(";")[0].trim().toLowerCase();
  }

  // aiStt: the learner's Gemini key (single or pool) first, then the
  // platform's ASR as the automatic backup — missing key is NOT an error
  // anymore. Both paths use the same "#" silence sentinel.
  try {
    const text = (await aiStt(deviceId, audio, mime, "stt")).trim();

    const clean = text === "#" ? "" : text.replace(/^["'\s]+|["'\s]+$/g, "").slice(0, 4000);
    return jsonOk({ text: clean });
  } catch (e) {
    if (e instanceof GeminiError && (e.status === 429 || e.status === 401)) {
      // quota / key-level refusal — the model chain already surfaced the best
      // message; pass the localized code through.
      return jsonErr(geminiErrMsg(locale, e), e.status);
    }
    console.error("[stt] transcription failed:", e);
    return jsonErr(apiMsg(locale, "serverProblem", { status: 502 }), 502);
  }
}
