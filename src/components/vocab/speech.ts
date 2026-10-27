"use client";

// English text-to-speech via window.speechSynthesis (free, on-device).
// Handles async voice loading (Chrome/Safari populate getVoices() late).

export function speakEnglish(text: string): void {
  speakEnglishAt(text, 0.9);
}

/**
 * Rate-controlled English TTS (D18 shadowing: slow 0.6 / normal 0.95) with an
 * optional onend callback so callers know when the utterance finishes.
 * Free, on-device — no API cost for listening practice.
 */
export function speakEnglishAt(text: string, rate: number, onend?: () => void): void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    onend?.();
    return;
  }
  const synth = window.speechSynthesis;

  // Chrome loads voices asynchronously — nudge + listen once so getVoices() is ready.
  const voices = synth.getVoices();
  if (voices.length === 0) {
    synth.addEventListener?.(
      "voiceschanged",
      () => {
        synth.getVoices();
      },
      { once: true }
    );
  }

  synth.cancel(); // stop any previous utterance before speaking
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  utter.rate = Math.min(1.4, Math.max(0.4, rate));
  if (onend) utter.onend = () => onend();

  const list = synth.getVoices();
  const enUs = list.find((v) => v.lang?.toLowerCase() === "en-us");
  const en = list.find((v) => v.lang?.toLowerCase().startsWith("en"));
  if (enUs) utter.voice = enUs;
  else if (en) utter.voice = en;

  synth.speak(utter);
}

export function cancelSpeech(): void {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}
