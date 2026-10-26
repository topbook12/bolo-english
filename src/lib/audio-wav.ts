"use client";

// ─── Shared browser audio helpers (extracted from CallRoom, D15) ────────────
// Used by the call room's push-to-talk AND the pronunciation practice:
// MediaRecorder produces audio/webm (Chrome) which Gemini rejects, so every
// BYOK-STT caller transcodes to 16kHz mono WAV client-side first.

/** Encode Float32 PCM samples as a 16-bit mono WAV ArrayBuffer. */
export function encodeWav16(samples: Float32Array, sampleRate: number): ArrayBuffer {
  const bytes = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(bytes);
  const str = (off: number, s: string) => {
    for (let i = 0; i < s.length; i++) view.setUint8(off + i, s.charCodeAt(i));
  };
  str(0, "RIFF");
  view.setUint32(4, 36 + samples.length * 2, true);
  str(8, "WAVE");
  str(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, 1, true); // mono
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  str(36, "data");
  view.setUint32(40, samples.length * 2, true);
  let off = 44;
  for (let i = 0; i < samples.length; i++, off += 2) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(off, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
  return bytes;
}

/**
 * Decode any browser-recordable container → mono 16kHz 16-bit WAV blob.
 * decodeAudioData can always decode a container the same browser just
 * recorded. Returns null when transcoding is impossible — the caller then
 * sends the original blob and lets the server surface Google's error.
 */
export async function transcodeToWavBlob(blob: Blob): Promise<Blob | null> {
  try {
    const w = window as unknown as {
      AudioContext?: typeof AudioContext;
      webkitAudioContext?: typeof AudioContext;
      OfflineAudioContext?: typeof OfflineAudioContext;
      webkitOfflineAudioContext?: typeof OfflineAudioContext;
    };
    const Ctx = w.AudioContext || w.webkitAudioContext;
    if (!Ctx) return null;
    const ctx = new Ctx();
    let rendered: AudioBuffer;
    try {
      const decoded = await ctx.decodeAudioData(await blob.arrayBuffer());
      // mono downmix
      const len = decoded.length;
      const mono = new Float32Array(len);
      for (let c = 0; c < decoded.numberOfChannels; c++) {
        const ch = decoded.getChannelData(c);
        for (let i = 0; i < len; i++) mono[i] += ch[i] / decoded.numberOfChannels;
      }
      const targetRate = 16000;
      const OCtx = w.OfflineAudioContext || w.webkitOfflineAudioContext;
      if (OCtx) {
        // resample mono → 16 kHz
        const offline = new OCtx(
          1,
          Math.max(1, Math.ceil((len * targetRate) / decoded.sampleRate)),
          targetRate
        );
        const src = offline.createBufferSource();
        const monoBuf = offline.createBuffer(1, len, decoded.sampleRate);
        monoBuf.copyToChannel(mono, 0);
        src.buffer = monoBuf;
        src.connect(offline.destination);
        src.start();
        rendered = await offline.startRendering();
      } else {
        const full = ctx.createBuffer(1, len, decoded.sampleRate);
        full.copyToChannel(mono, 0);
        rendered = full;
      }
    } finally {
      void ctx.close();
    }
    return new Blob([encodeWav16(rendered.getChannelData(0), rendered.sampleRate)], {
      type: "audio/wav",
    });
  } catch {
    return null;
  }
}

/** Blob → base64 (no data: prefix) for the /api/stt JSON body. */
export function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("read_failed"));
    reader.onload = () => {
      const result = String(reader.result || "");
      const comma = result.indexOf(",");
      resolve(comma >= 0 ? result.slice(comma + 1) : result);
    };
    reader.readAsDataURL(blob);
  });
}
