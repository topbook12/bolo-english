"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  MessageSquareText,
  PhoneOff,
  Copy,
  Check,
  Users,
  Timer,
  WifiOff,
  SendHorizontal,
  Loader2,
  Share2,
  Captions,
  SignalHigh,
  SignalMedium,
  SignalLow,
  Gauge,
  LayoutGrid,
  PictureInPicture2,
  Maximize,
  Minimize,
  ArrowLeftRight,
  MonitorUp,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CallAvatar, { VoiceEq } from "@/components/speaking/CallAvatar";
import type { RemotePeer } from "@/hooks/use-webrtc";
import { isSpeechRecognitionSupported } from "@/hooks/use-speech-recognition";
import { useDevice } from "@/hooks/use-device";
import { useToast } from "@/hooks/use-toast";

/* Layout preference persistence (Task 18) — WhatsApp-style stack vs grid */
const LAYOUT_STORAGE_KEY = "bolo_call_layout";

/* ── push-to-talk (Task 27-m) constants ──
 * For browsers WITHOUT the Web Speech API (iPhone Safari): press-and-hold
 * records the mic via MediaRecorder, release transcribes through /api/stt. */
const PTT_MIN_HOLD_MS = 400; // shorter holds are accidental taps → ignore
const PTT_MAX_HOLD_MS = 20_000; // hard cap per hold — auto-stop and transcribe
// Recording mime preference: webm/opus everywhere it exists, else let the
// browser pick its default (iOS Safari → audio/mp4). The server sniffs the
// container itself, so the label is informational only.
const PTT_MIME_CANDIDATES = [
  "audio/webm;codecs=opus",
  "audio/webm",
  "audio/ogg;codecs=opus",
  "audio/mp4",
];

/** Blob → raw base64 (no data: prefix) via FileReader. */
function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("ptt-read-failed"));
    reader.onload = () => {
      const url = String(reader.result ?? "");
      const comma = url.indexOf(",");
      resolve(comma >= 0 ? url.slice(comma + 1) : url);
    };
    reader.readAsDataURL(blob);
  });
}

/* ── Task 29: client-side WAV transcode for the push-to-talk pipeline ──
 * Gemini accepts wav/mp3/ogg/aac/flac but NOT audio/webm (what Chrome's
 * MediaRecorder produces). decodeAudioData can always decode a container the
 * same browser just recorded, so: decode → mono downmix → resample to 16kHz
 * (OfflineAudioContext, full-rate fallback) → 16-bit PCM WAV. Returns null
 * when transcoding is impossible — the caller then sends the original blob
 * and lets the server surface Google's error. */
function encodeWav16(samples: Float32Array, sampleRate: number): ArrayBuffer {
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

async function transcodeToWavBlob(blob: Blob): Promise<Blob | null> {
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

/* ── talking indicator (Web Audio, best-effort) ──
 * Per remote stream: AudioContext → AnalyserNode, RMS sampled every ~200ms.
 * Cleanup runs on unmount / roster change; browsers without AudioContext or
 * audio-only-less streams simply never light up. Decorative only. */
function useTalkingPeers(peers: RemotePeer[]): Set<string> {
  const [talking, setTalking] = useState<Set<string>>(() => new Set<string>());

  useEffect(() => {
    const w = window as unknown as {
      AudioContext?: typeof AudioContext;
      webkitAudioContext?: typeof AudioContext;
    };
    const AC = w.AudioContext ?? w.webkitAudioContext;
    let ctx: AudioContext | null = null;
    try {
      if (AC && peers.length > 0) ctx = new AC();
    } catch {
      ctx = null; // no Web Audio — everyone just never glows
    }
    if (ctx) void ctx.resume().catch(() => undefined); // may start suspended; harmless if so

    const nodes: { src: MediaStreamAudioSourceNode; analyser: AnalyserNode }[] = [];
    const analysers: { id: string; analyser: AnalyserNode; data: Uint8Array<ArrayBuffer> }[] = [];
    if (ctx) {
      for (const p of peers) {
        if (!p.stream || p.stream.getAudioTracks().length === 0) continue;
        try {
          const src = ctx.createMediaStreamSource(p.stream);
          const analyser = ctx.createAnalyser();
          analyser.fftSize = 512;
          analyser.smoothingTimeConstant = 0.55;
          src.connect(analyser);
          nodes.push({ src, analyser });
          analysers.push({ id: p.id, analyser, data: new Uint8Array(analyser.frequencyBinCount) });
        } catch {
          /* stream in an unusable state — that peer just never glows */
        }
      }
    }

    let stopped = false;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const tick = () => {
      if (stopped) return;
      if (analysers.length === 0) {
        // nothing to monitor (no peers / no Web Audio / audio-less streams) —
        // clear once asynchronously and stop the loop
        setTalking((prev) => (prev.size === 0 ? prev : new Set<string>()));
        return;
      }
      const next = new Set<string>();
      for (const a of analysers) {
        a.analyser.getByteTimeDomainData(a.data);
        let sum = 0;
        for (let i = 0; i < a.data.length; i++) {
          const v = (a.data[i] - 128) / 128;
          sum += v * v;
        }
        if (Math.sqrt(sum / a.data.length) > 0.045) next.add(a.id);
      }
      setTalking((prev) => {
        if (prev.size === next.size) {
          let same = true;
          for (const id of prev) {
            if (!next.has(id)) {
              same = false;
              break;
            }
          }
          if (same) return prev; // no churn → no re-render
        }
        return next;
      });
      timer = setTimeout(tick, 200);
    };
    // First sample async — keeps setState out of the effect body.
    timer = setTimeout(tick, 0);

    return () => {
      stopped = true;
      if (timer) clearTimeout(timer);
      for (const n of nodes) {
        try {
          n.src.disconnect();
        } catch {
          /* noop */
        }
        try {
          n.analyser.disconnect();
        } catch {
          /* noop */
        }
      }
      if (ctx) void ctx.close().catch(() => undefined);
    };
  }, [peers]);

  return talking;
}

function VideoTile({
  stream,
  name,
  muted,
  mirrored,
  isSelf,
  selfSuffix,
  connectingLabel,
  isConnecting,
  speaking,
  speakingLabel,
  contain,
  videoOff,
  micOff,
  quality,
  badgeLeft,
  avatarSize,
  sharing,
  onStopShare,
}: {
  stream: MediaStream | null;
  name: string;
  muted?: boolean;
  mirrored?: boolean;
  isSelf?: boolean;
  selfSuffix: string;
  connectingLabel: string;
  isConnecting?: boolean;
  speaking?: boolean;
  speakingLabel?: string;
  contain?: boolean;
  /** Camera is off (or no video yet) — show the native-dialer avatar instead
   *  of a dead black frame. Always on for a missing stream; for the self tile
   *  the parent wires it to !camOn. */
  videoOff?: boolean;
  /** Self tile only: little mic-off glyph inside the name chip. */
  micOff?: boolean;
  /** getStats link quality — shows the signal badge for remote peers. */
  quality?: "good" | "fair" | "poor";
  /** Stack mode: the floating PiP / film-strip column sits top-RIGHT, so the
   *  main tile moves its quality badge to the top-LEFT to stay visible. */
  badgeLeft?: boolean;
  /** Avatar diameter for the no-video fallback — smaller inside PiP tiles. */
  avatarSize?: number;
  /** THIS user is sharing their screen — the tile shows the screen preview
   *  and gets the localized "sharing" pill (Task 26-c). */
  sharing?: boolean;
  /** Stops the live screen share from the pill's ✕ control. */
  onStopShare?: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const t = useTranslations("call");

  // While screen sharing the tile shows the SCREEN: never mirror it and never
  // hide it behind the avatar fallback — even when the camera toggle is off.
  const showAvatar = videoOff && !sharing;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!stream) {
      el.srcObject = null;
      return;
    }
    el.srcObject = stream;

    // Autoplay policy, solved properly:
    // A REMOTE video that starts unmuted is rejected by Chrome/Safari's
    // autoplay rules — that was leaving a fully-connected call with a
    // permanently BLACK remote tile. The reliable pattern is:
    //   1. start muted (muted autoplay is ALWAYS allowed → video renders)
    //   2. unmute on the `playing` event (audio then flows normally)
    //   3. keep a periodic + on-interaction retry as belt & braces
    let playing = false;
    let retryTimer: ReturnType<typeof setTimeout> | null = null;

    const attemptPlay = () => {
      if (playing) return;
      if (!muted) el.muted = true; // muted autoplay always permitted
      el.play().then(
        () => undefined,
        () => undefined // still blocked — retried below / on interaction
      );
    };

    const onPlaying = () => {
      playing = true;
      if (retryTimer) {
        clearTimeout(retryTimer);
        retryTimer = null;
      }
      if (!muted) el.muted = false; // unmute once real playback started
      detach();
    };

    const onInteract = () => {
      if (playing) return;
      el.play().then(() => undefined, () => undefined);
    };

    // Permanent re-arm (audit P2-12): an OS audio interruption (incoming
    // call, Siri) or a background/foreground cycle can stall the element
    // AFTER the first `playing` fired — the old retry loop had stopped by
    // then, leaving a frozen/black tile with audio dead. If the element is
    // ever paused again, just try to play it; also retry when the page
    // becomes visible. Idempotent and harmless when playback is healthy.
    const rearm = () => {
      if (el.paused) el.play().then(() => undefined, () => undefined);
    };
    const onVisible = () => {
      if (document.visibilityState === "visible") rearm();
    };
    el.addEventListener("pause", rearm);
    document.addEventListener("visibilitychange", onVisible);

    const detach = () => {
      if (retryTimer) {
        clearTimeout(retryTimer);
        retryTimer = null;
      }
      document.removeEventListener("click", onInteract);
      document.removeEventListener("touchstart", onInteract);
      document.removeEventListener("keydown", onInteract);
    };

    el.addEventListener("playing", onPlaying);
    document.addEventListener("click", onInteract);
    document.addEventListener("touchstart", onInteract);
    document.addEventListener("keydown", onInteract);
    attemptPlay();
    // Periodic retry until `playing` fires — covers browsers that delay
    // media flow right after ICE connects (black tile with audio flowing).
    const startRetry = () => {
      if (playing || retryTimer) return;
      retryTimer = setTimeout(() => {
        retryTimer = null;
        attemptPlay();
        startRetry();
      }, 1500);
    };
    startRetry();

    return () => {
      el.removeEventListener("playing", onPlaying);
      el.removeEventListener("pause", rearm);
      document.removeEventListener("visibilitychange", onVisible);
      detach();
    };
  }, [stream, muted, isConnecting]); // isConnecting: re-arm when the peer connects

  return (
    <div
      className={cn(
        // h-full: stretches to whatever wrapper the parent gives (grid row,
        // absolute-fill spotlight, or the small PiP tile) — Task 18 layouts.
        "relative h-full w-full overflow-hidden rounded-2xl border shadow-lg transition-shadow duration-300",
        // Remote feeds use a soft dark radial backdrop so portrait phone video
        // (object-contain) never shows hard letterbox edges.
        contain
          ? "border-white/12 bg-[radial-gradient(ellipse_at_top,rgba(13,148,136,0.16),rgba(2,8,14,0.96))]"
          : "border-white/12 bg-black/85",
        speaking && "border-rose-400/70 shadow-[0_0_22px_rgba(244,63,94,0.35)] ring-2 ring-rose-400/90"
      )}
    >
      <video
        ref={ref}
        autoPlay
        playsInline
        // React manages the attribute only for the muted (local) tile; the
        // remote tile's muted state is driven imperatively in the effect.
        muted={muted === true ? true : undefined}
        aria-label={isSelf ? `${name} · ${selfSuffix}` : name}
        className={cn(
          "aspect-video h-full w-full",
          contain ? "object-contain" : "object-cover",
          mirrored && !sharing && "scale-x-[-1]",
          showAvatar && "opacity-0"
        )}
      />
      {/* native-dialer avatar when there is no picture to show */}
      {showAvatar && (
        <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_center,rgba(16,68,72,0.55),rgba(4,12,16,0.98))]">
          <div className="flex flex-col items-center gap-2.5">
            <CallAvatar name={name} size={avatarSize ?? 84} />
          </div>
        </div>
      )}
      {/* link-quality badge (audit P2-2) — the loose-connection radar */}
      {quality && !isSelf && (
        <span
          title={
            quality === "good"
              ? t("netGood")
              : quality === "fair"
                ? t("netFair")
                : t("netPoor")
          }
          className={cn(
            "absolute inline-flex items-center gap-1 rounded-full bg-black/55 px-2 py-1 text-[10px] font-semibold ring-1 ring-white/15 backdrop-blur-md",
            badgeLeft ? "left-2 top-2" : "right-2 top-2",
            quality === "good" && "text-emerald-300",
            quality === "fair" && "text-amber-300",
            quality === "poor" && "animate-pulse text-rose-300"
          )}
        >
          {quality === "good" ? (
            <SignalHigh className="h-3.5 w-3.5" aria-hidden />
          ) : quality === "fair" ? (
            <SignalMedium className="h-3.5 w-3.5" aria-hidden />
          ) : (
            <SignalLow className="h-3.5 w-3.5" aria-hidden />
          )}
          <span className="sr-only">
            {quality === "good"
              ? t("netGood")
              : quality === "fair"
                ? t("netFair")
                : t("netPoor")}
          </span>
        </span>
      )}
      {/* screen-share badge (Task 26-c) — lives while THIS user shares; the ✕ stops it.
          A span-with-role (not a <button>) so it stays valid inside the stack mode's
          tile-as-<button> wrapper; clicks are stopped from reaching the swap action. */}
      {sharing && (
        <span className="absolute left-1/2 top-2 z-10 -translate-x-1/2">
          <span className="flex max-w-[calc(100%-0.5rem)] items-center gap-1.5 rounded-full bg-emerald-600/90 px-2.5 py-1 text-[10px] font-semibold text-white shadow-md ring-1 ring-white/25 backdrop-blur-md">
            <MonitorUp className="h-3 w-3 shrink-0" aria-hidden />
            <span className="truncate">{t("screenShareBadge")}</span>
            {onStopShare && (
              <span
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  onStopShare();
                }}
                onPointerDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.stopPropagation();
                    e.preventDefault();
                    onStopShare();
                  }
                }}
                className="relative -mr-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15 transition-colors after:absolute after:-inset-1.5 after:content-[''] hover:bg-white/30"
                aria-label={t("screenShareStop")}
                title={t("screenShareStop")}
              >
                <X className="h-3 w-3" aria-hidden />
              </span>
            )}
          </span>
        </span>
      )}
      {/* glass name chip — dark frosted; glows + voice bars while that peer speaks */}
      <span
        className={cn(
          "absolute bottom-2.5 left-2.5 flex max-w-[85%] items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white shadow-md ring-1 ring-white/15 backdrop-blur-md transition-shadow duration-300",
          speaking && "ring-rose-300/80 shadow-[0_0_12px_rgba(244,63,94,0.7)]"
        )}
      >
        {speaking ? (
          <VoiceEq className="text-rose-300" />
        ) : (
          <span className="live-dot h-1.5 w-1.5 shrink-0 rounded-full bg-rose-300" />
        )}
        {micOff && <MicOff className="h-3 w-3 shrink-0 text-amber-300" aria-hidden />}
        <span className="truncate">
          {name}
          {isSelf ? ` · ${selfSuffix}` : ""}
        </span>
        {speaking && speakingLabel && <span className="sr-only">{speakingLabel}</span>}
      </span>
      {/* connecting overlay */}
      {isConnecting && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/65 backdrop-blur-[2px]">
          <Loader2 className="h-7 w-7 animate-spin text-rose-300" />
          <span className="text-sm font-medium text-white">{connectingLabel}</span>
        </div>
      )}
    </div>
  );
}

export interface ChatMessage {
  speaker: string;
  text: string;
  mine: boolean;
}

interface CallRoomProps {
  localStream: MediaStream | null;
  remotePeers: RemotePeer[];
  displayName: string;
  micOn: boolean;
  camOn: boolean;
  chatOpen: boolean;
  unreadChat?: number;
  chatMessages: ChatMessage[];
  roomCode: string | null;
  onCopyCode: () => void;
  codeCopied: boolean;
  durationLabel: string;
  transcriptCount: number;
  reconnecting?: boolean;
  /** My OWN link is metered-slow (NetworkInformation API) — amber chip so the
   *  user knows stutters come from THEIR side, not the partner's. */
  netSlow?: boolean;
  /** Camera could not be opened (mic fine) — the call continues audio-only;
   *  shows the amber note chip and forces the avatar fallback on our tile. */
  audioOnly?: boolean;
  showShareHint?: boolean;
  captions: { speaker: string; text: string; mine: boolean; final: boolean }[];
  captionsOpen: boolean;
  /** My own in-progress sentence — shown inside the caption overlay so it
   *  never shifts the call layout (replaces the old in-flow paragraph). */
  interimText?: string;
  /** Live screen-capture stream (Task 26-c) — while sharing, the self tile
   *  previews THIS stream instead of the camera feed. */
  screenStream?: MediaStream | null;
  /** Screen share is live — self tile shows the screen, sharing pill on, control lit. */
  sharingScreen?: boolean;
  onToggleMic: () => void;
  onToggleCam: () => void;
  onToggleScreenShare?: () => void;
  onToggleCaptions: () => void;
  onToggleChat: () => void;
  onLeave: () => void;
  onSendChat: (text: string) => void;
  /** Task 27-m: result of a push-to-talk hold (browsers without the Web
   *  Speech API). Routed by the parent into the SAME final-line plumbing as
   *  recognition finals — transcript + captions + peer broadcast — so the
   *  end-of-call analysis keeps working on mobile. */
  onPushToTalkFinal?: (text: string) => void;
  children?: React.ReactNode; // controls row extras (correction toggle etc.)
}

export default function CallRoom({
  localStream,
  remotePeers,
  displayName,
  micOn,
  camOn,
  chatOpen,
  unreadChat = 0,
  chatMessages,
  roomCode,
  onCopyCode,
  codeCopied,
  durationLabel,
  transcriptCount,
  reconnecting,
  netSlow,
  audioOnly,
  showShareHint,
  captions,
  captionsOpen,
  interimText = "",
  screenStream = null,
  sharingScreen = false,
  onToggleMic,
  onToggleCam,
  onToggleScreenShare,
  onToggleCaptions,
  onToggleChat,
  onLeave,
  onSendChat,
  onPushToTalkFinal,
  children,
}: CallRoomProps) {
  const t = useTranslations("call");
  const { toast } = useToast();
  const chatInputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const talking = useTalkingPeers(remotePeers);

  /* ── Task 27-m: push-to-talk fallback (browsers WITHOUT the Web Speech API) ──
   * iPhone Safari has no SpeechRecognition at all → no captions → the
   * end-of-call analysis refuses (needs learner lines). Instead of live
   * recognition this records press-and-hold mic audio, and on release sends
   * it to /api/stt; the returned text goes through onPushToTalkFinal — the
   * parent's exact recognition-final path (transcript + captions + peer
   * broadcast). Every failure path is a localized toast; the call itself
   * never breaks. */
  const [pttRecording, setPttRecording] = useState(false);
  const [pttBusy, setPttBusy] = useState(false); // transcribing after release
  const pttRecorderRef = useRef<MediaRecorder | null>(null);
  const pttChunksRef = useRef<Blob[]>([]);
  const pttStartRef = useRef(0);
  const pttMaxTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pttIgnoreRef = useRef(false); // tap-too-short / aborted hold
  const onPttFinalRef = useRef(onPushToTalkFinal);
  useEffect(() => {
    onPttFinalRef.current = onPushToTalkFinal;
  }, [onPushToTalkFinal]);

  // Hydration-safe capability probe (server render says "supported" so the
  // fallback UI only appears after mount, on the browsers that need it).
  const [recogSupported, setRecogSupported] = useState(false);
  useEffect(() => {
    setRecogSupported(isSpeechRecognitionSupported());
  }, []);

  const hasPttAudio = !!localStream && localStream.getAudioTracks().length > 0;

  const clearPttTimer = useCallback(() => {
    if (pttMaxTimerRef.current) {
      clearTimeout(pttMaxTimerRef.current);
      pttMaxTimerRef.current = null;
    }
  }, []);

  /* release → transcode to WAV → POST /api/stt (BYOK Gemini) → parent's final-line plumbing */
  const finishPtt = useCallback(async () => {
    const recorder = pttRecorderRef.current;
    pttRecorderRef.current = null;
    clearPttTimer();
    setPttRecording(false);
    const chunks = pttChunksRef.current;
    pttChunksRef.current = [];
    if (!recorder || pttIgnoreRef.current || chunks.length === 0) {
      pttIgnoreRef.current = false;
      return;
    }
    const deviceId = useDevice.getState().deviceId;
    if (!deviceId) {
      toast({ title: t("sttFailed") });
      return;
    }
    setPttBusy(true);
    try {
      const original = new Blob(chunks, {
        type: recorder.mimeType || "audio/webm",
      });
      if (original.size === 0) {
        toast({ title: t("sttNoSpeech") });
        return;
      }
      // Gemini rejects audio/webm → transcode to 16kHz mono WAV when the
      // browser can decode its own recording (it always can); otherwise send
      // the original container and let the server surface Google's error.
      const wav = await transcodeToWavBlob(original);
      const send = wav ?? original;
      const audio = await blobToBase64(send);
      const mime = wav ? "audio/wav" : (recorder.mimeType || "audio/webm");
      const res = await fetch("/api/stt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deviceId, audio, mime }),
      });
      if (res.status === 429) {
        toast({ title: t("sttRateLimited") });
        return;
      }
      const json = (await res.json().catch(() => null)) as {
        ok?: boolean;
        data?: { text?: unknown };
        error?: unknown;
      } | null;
      if (!res.ok || !json?.ok) {
        // The server sends localized guidance (missing key, quota, too-large…)
        // — surface it directly instead of a generic failure.
        const msg = typeof json?.error === "string" ? json.error : "";
        toast({ title: msg || t("sttFailed") });
        return;
      }
      const text = typeof json.data?.text === "string" ? json.data.text.trim() : "";
      if (!text) {
        toast({ title: t("sttNoSpeech") });
        return;
      }
      onPttFinalRef.current?.(text);
    } catch {
      toast({ title: t("sttFailed") });
    } finally {
      setPttBusy(false);
    }
  }, [clearPttTimer, t, toast]);

  /* press-and-hold start */
  const startPtt = useCallback(() => {
    if (pttRecorderRef.current || pttBusy || !micOn) return;
    if (!localStream || localStream.getAudioTracks().length === 0) return;
    if (typeof MediaRecorder === "undefined") {
      toast({ title: t("sttFailed") });
      return;
    }
    pttIgnoreRef.current = false;
    pttChunksRef.current = [];
    pttStartRef.current = Date.now();
    let recorder: MediaRecorder;
    try {
      const mimeType = PTT_MIME_CANDIDATES.find((m) => {
        try {
          return MediaRecorder.isTypeSupported(m);
        } catch {
          return false;
        }
      });
      recorder = mimeType
        ? new MediaRecorder(localStream, { mimeType })
        : new MediaRecorder(localStream);
    } catch {
      // construction failure is virtually always a permission/capture problem
      toast({ title: t("sttMicDenied") });
      return;
    }
    pttRecorderRef.current = recorder;
    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) pttChunksRef.current.push(e.data);
    };
    recorder.onerror = () => {
      pttIgnoreRef.current = true;
      try {
        recorder.stop();
      } catch {
        /* noop */
      }
    };
    recorder.onstop = () => {
      void finishPtt();
    };
    try {
      recorder.start(250); // timeslice — chunks flow during long holds
    } catch {
      pttRecorderRef.current = null;
      toast({ title: t("sttFailed") });
      return;
    }
    setPttRecording(true);
    clearPttTimer();
    pttMaxTimerRef.current = setTimeout(() => {
      pttMaxTimerRef.current = null;
      if (!pttRecorderRef.current) return;
      toast({ title: t("pttTooLong") }); // still transcribes what was captured
      try {
        pttRecorderRef.current.stop();
      } catch {
        /* noop */
      }
    }, PTT_MAX_HOLD_MS);
  }, [clearPttTimer, finishPtt, localStream, micOn, pttBusy, t, toast]);

  /* release (or cancel) — <400ms holds are ignored entirely */
  const stopPtt = useCallback(() => {
    if (!pttRecorderRef.current) return;
    if (Date.now() - pttStartRef.current < PTT_MIN_HOLD_MS) pttIgnoreRef.current = true;
    clearPttTimer();
    try {
      pttRecorderRef.current.stop();
    } catch {
      /* noop */
    }
  }, [clearPttTimer]);

  // Release-anywhere safety net: if pointer capture fails (some mobile
  // browsers), a pointerup/pointercancel ANYWHERE still ends the hold.
  useEffect(() => {
    if (!pttRecording) return;
    const onUp = () => stopPtt();
    document.addEventListener("pointerup", onUp);
    document.addEventListener("pointercancel", onUp);
    return () => {
      document.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointercancel", onUp);
    };
  }, [pttRecording, stopPtt]);

  // Unmount mid-hold: stop recording, never POST.
  useEffect(() => {
    return () => {
      pttIgnoreRef.current = true;
      if (pttMaxTimerRef.current) {
        clearTimeout(pttMaxTimerRef.current);
        pttMaxTimerRef.current = null;
      }
      try {
        pttRecorderRef.current?.stop();
      } catch {
        /* noop */
      }
      pttRecorderRef.current = null;
    };
  }, []);

  /* ── Task 18: call layout system ─────────────────────────────────────
   * "grid"  → classic tiled grid (every participant side-by-side)
   * "stack" → WhatsApp-style: ONE big video + the others stacked on top of
   *           it as a floating column / PiP; tap a small tile to swap it
   *           into the big view.
   * Phones default to the WhatsApp-style stack, larger screens to the grid;
   * an explicit user choice persists across calls in localStorage. */
  const [layout, setLayout] = useState<"grid" | "stack">(() => {
    if (typeof window === "undefined") return "grid";
    try {
      const saved = window.localStorage.getItem(LAYOUT_STORAGE_KEY);
      if (saved === "grid" || saved === "stack") return saved;
    } catch {
      /* private mode */
    }
    return window.matchMedia("(max-width: 639px)").matches ? "stack" : "grid";
  });
  const toggleLayout = () => {
    setLayout((v) => {
      const next = v === "grid" ? "stack" : "grid";
      try {
        window.localStorage.setItem(LAYOUT_STORAGE_KEY, next);
      } catch {
        /* private mode */
      }
      return next;
    });
  };

  /* ── Task 18: Zoom-style full-screen (immersive) mode ────────────────
   * The whole CallRoom portals to <body> as a fixed full-viewport overlay
   * (works on iOS Safari too, where element fullscreen is unsupported);
   * native Fullscreen API is ALSO requested where available so browser
   * chrome disappears on desktop/Android. Esc / the chip exits both. */
  const [immersive, setImmersive] = useState(false);
  const immersiveRef = useRef(false);
  useEffect(() => {
    immersiveRef.current = immersive;
  }, [immersive]);
  const portalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!immersive) return;
    // portal is mounted now — request real fullscreen (best-effort)
    const el = portalRef.current;
    if (el && document.fullscreenEnabled && !document.fullscreenElement) {
      void el.requestFullscreen?.().catch(() => undefined);
    }
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
      if (document.fullscreenElement) {
        void document.exitFullscreen?.().catch(() => undefined);
      }
    };
  }, [immersive]);

  // Esc (or anything that drops native fullscreen) also leaves immersive.
  useEffect(() => {
    const onFsChange = () => {
      if (immersiveRef.current && !document.fullscreenElement) setImmersive(false);
    };
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  // Esc fallback for contexts where the native API is unavailable (preview
  // iframes without allow="fullscreen", iOS): the keydown itself exits.
  useEffect(() => {
    if (!immersive) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setImmersive(false);
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [immersive]);

  /* ── Task 18: which video fills the big slot in stack mode ────────── */
  const [pinnedPeerId, setPinnedPeerId] = useState<string | null>(null);
  const [selfInMain, setSelfInMain] = useState(false);
  // No reset effect needed: the derivation below already falls back to the
  // default spotlight when a pinned peer leaves (find → first remote → self).
  const mainPeer =
    remotePeers.find((p) => p.id === pinnedPeerId) ?? remotePeers[0] ?? null;
  const mainIsSelf = selfInMain || !mainPeer;
  const sideTiles: {
    key: string;
    name: string;
    stream: MediaStream | null;
    isSelf: boolean;
    peerId?: string;
    connectionState?: string;
  }[] =
    mainIsSelf
      ? remotePeers.map((p) => ({
          key: p.id,
          name: p.name,
          stream: p.stream,
          isSelf: false,
          peerId: p.id,
          connectionState: p.connectionState,
        }))
      : [
          { key: "self", name: displayName, stream: localStream, isSelf: true },
          ...remotePeers
            .filter((p) => p.id !== mainPeer?.id)
            .map((p) => ({
              key: p.id,
              name: p.name,
              stream: p.stream,
              isSelf: false,
              peerId: p.id,
              connectionState: p.connectionState,
            })),
        ];
  const focusSideTile = (tile: (typeof sideTiles)[number]) => {
    if (tile.isSelf) {
      setSelfInMain(true);
    } else {
      setSelfInMain(false);
      setPinnedPeerId(tile.peerId ?? null);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages.length, chatOpen]);

  const submitChat = () => {
    const text = chatInputRef.current?.value.trim();
    if (!text) return;
    onSendChat(text);
    if (chatInputRef.current) chatInputRef.current.value = "";
  };

  const lastCaption = captions.length > 0 ? captions[captions.length - 1] : null;
  const interim = interimText.trim();
  const totalTiles = remotePeers.length + 1;
  const peerCount = totalTiles;

  /* Balanced grid by TOTAL tiles (local + remotes):
   * 1 → single full-width · 2 → side-by-side · 3 → 3-across on laptop
   * 4 → 2×2 on laptop (never the unbalanced 3+1 row). */
  const gridCols =
    totalTiles <= 1
      ? "grid-cols-1"
      : totalTiles === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : totalTiles === 3
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          : totalTiles === 4
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  const captionsButtonLabel = captionsOpen ? t("captionsHide") : t("captionsShow");

  const roomContent = (
    <div
      className={cn(
        "space-y-3",
        chatOpen && "lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-3 lg:space-y-0"
      )}
    >
      {/* share hint for group hosts (kept outside the dark stage for readability) */}
      {showShareHint && roomCode && (
        <div
          className={cn(
            "flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50/80 px-3 py-2 text-xs text-amber-800 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-300",
            chatOpen && "lg:col-span-2"
          )}
        >
          <Share2 className="h-4 w-4 shrink-0" />
          <span className="min-w-0 flex-1">{t("shareBanner")}</span>
          <span className="rounded-md bg-amber-100 px-2 py-0.5 font-mono font-bold tracking-widest dark:bg-amber-900/60">
            {roomCode}
          </span>
          <button
            onClick={onCopyCode}
            className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors after:absolute after:-inset-2 after:content-[''] hover:bg-amber-100 dark:hover:bg-amber-900/60"
            aria-label={t("copyCode")}
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* ── the call stage — native-dialer immersive panel ── */}
      <div className="min-w-0">
        <div className="call-backdrop relative overflow-hidden rounded-3xl p-3 shadow-2xl ring-1 ring-black/30 sm:p-4">
          {/* ambient glow orbs */}
          <span
            className="call-orb call-orb-a -right-16 -top-16 h-52 w-52 bg-teal-500/20"
            aria-hidden
          />
          <span
            className="call-orb call-orb-b -left-20 bottom-6 h-56 w-56 bg-emerald-500/15"
            aria-hidden
          />

          {/* status chips — frosted glass, floating on the stage */}
          <div className="relative z-10 mb-3 flex flex-wrap items-center gap-1.5">
            <span className="call-glass inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-rose-400" /> {t("live")}
            </span>
            <span className="call-glass inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold text-white">
              <Timer className="h-3 w-3" /> {durationLabel}
            </span>
            <span className="call-glass inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white">
              <Users className="h-3 w-3" /> {t("peerCount", { count: peerCount })}
            </span>
            {roomCode && (
              <span className="call-glass inline-flex items-center gap-0.5 rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold tracking-widest text-white">
                {roomCode}
                <button
                  onClick={onCopyCode}
                  className="relative ml-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full transition-colors after:absolute after:-inset-2 after:content-[''] hover:bg-white/15"
                  aria-label={t("copyCode")}
                  title={t("copyCode")}
                >
                  {codeCopied ? (
                    <Check className="h-3.5 w-3.5 text-emerald-300" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </span>
            )}
            <span className="call-glass ml-auto hidden rounded-full px-2.5 py-1 text-[11px] font-medium text-white/80 sm:inline-flex">
              {t("sentences", { count: transcriptCount })}
            </span>
            {reconnecting && (
              <span className="call-glass inline-flex animate-pulse items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold text-amber-200">
                <WifiOff className="h-3 w-3" /> {t("reconnecting")}
              </span>
            )}
            {netSlow && (
              <span
                className="call-glass inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold text-amber-200"
                title={t("selfNetSlow")}
              >
                <Gauge className="h-3 w-3 shrink-0" aria-hidden /> {t("selfNetSlow")}
              </span>
            )}
            {audioOnly && (
              <span
                className="call-glass inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold text-amber-200"
                title={t("audioOnlyNote")}
              >
                <VideoOff className="h-3 w-3" /> {t("audioOnlyNote")}
              </span>
            )}
            {/* Zoom-style: while full-screen, this chip is the visible way out
                besides the controls button and the Esc key (Task 18) */}
            {immersive && (
              <button
                type="button"
                onClick={() => setImmersive(false)}
                className="call-glass ml-auto inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white sm:ml-0"
                title={t("immersiveHint")}
                aria-label={t("fullscreenExit")}
              >
                <Minimize className="h-3 w-3" />
                <span className="hidden sm:inline">{t("fullscreenExit")}</span>
              </button>
            )}
          </div>

          {/* video grid/stack + caption overlays */}
          <div className="relative z-10">
            {layout === "grid" ? (
            <div className={cn("grid min-h-0 gap-3", gridCols)}>
              {remotePeers.map((p) => (
                <div key={p.id} className="min-h-0">
                  <VideoTile
                    stream={p.stream}
                    name={p.name}
                    selfSuffix={t("selfSuffix")}
                    connectingLabel={
                      p.connectionState === "new" || p.connectionState === "connecting"
                        ? t("connecting")
                        : t("reconnecting")
                    }
                    isConnecting={p.connectionState !== "connected"}
                    speaking={talking.has(p.id)}
                    speakingLabel={t("speakingNow")}
                    contain
                    videoOff={!p.stream || p.stream.getVideoTracks().length === 0}
                    quality={p.quality}
                  />
                </div>
              ))}
              <div className="min-h-0">
                <VideoTile
                  stream={sharingScreen && screenStream ? screenStream : localStream}
                  name={displayName}
                  muted
                  mirrored
                  isSelf
                  selfSuffix={t("selfSuffix")}
                  connectingLabel={t("connecting")}
                  sharing={sharingScreen}
                  onStopShare={onToggleScreenShare}
                  videoOff={(!camOn || audioOnly) && !sharingScreen}
                  micOff={!micOn}
                />
              </div>
            </div>
            ) : (
            /* WhatsApp-style stack (Task 18): ONE big video with every other
               participant floating on top as small tiles — tap a small tile
               (or the big self view) to swap it into the spotlight. */
            <div
              className={cn(
                "relative min-h-[320px] overflow-hidden rounded-2xl border border-white/12 bg-black/85",
                immersive ? "h-[72svh]" : "h-[62svh] max-h-[620px] sm:h-[66svh]"
              )}
            >
              {/* spotlight tile */}
              <div className="absolute inset-0">
                {mainIsSelf ? (
                  <button
                    type="button"
                    onClick={() => remotePeers.length > 0 && setSelfInMain(false)}
                    disabled={remotePeers.length === 0}
                    className="block h-full w-full rounded-2xl text-left focus-visible:outline-2 focus-visible:outline-emerald-300 disabled:cursor-default"
                    title={remotePeers.length > 0 ? t("swapViews") : undefined}
                    aria-label={remotePeers.length > 0 ? t("swapViews") : undefined}
                  >
                    <VideoTile
                      stream={sharingScreen && screenStream ? screenStream : localStream}
                      name={displayName}
                      muted
                      mirrored
                      isSelf
                      selfSuffix={t("selfSuffix")}
                      connectingLabel={t("connecting")}
                      sharing={sharingScreen}
                      onStopShare={onToggleScreenShare}
                      videoOff={(!camOn || audioOnly) && !sharingScreen}
                      micOff={!micOn}
                    />
                  </button>
                ) : (
                  <VideoTile
                    stream={mainPeer.stream}
                    name={mainPeer.name}
                    selfSuffix={t("selfSuffix")}
                    connectingLabel={
                      mainPeer.connectionState === "new" || mainPeer.connectionState === "connecting"
                        ? t("connecting")
                        : t("reconnecting")
                    }
                    isConnecting={mainPeer.connectionState !== "connected"}
                    speaking={talking.has(mainPeer.id)}
                    speakingLabel={t("speakingNow")}
                    contain
                    videoOff={!mainPeer.stream || mainPeer.stream.getVideoTracks().length === 0}
                    quality={mainPeer.quality}
                    badgeLeft
                  />
                )}
              </div>
              {/* floating PiP / film-strip column (top-right, WhatsApp style) */}
              {sideTiles.length > 0 && (
                <div className="nice-scroll absolute right-2 top-2 z-10 flex max-h-[calc(100%-1rem)] w-[88px] flex-col gap-2 overflow-y-auto sm:w-28">
                  {sideTiles.map((tile) => (
                    <button
                      key={tile.key}
                      type="button"
                      onClick={() => focusSideTile(tile)}
                      className="relative aspect-[3/4] w-full shrink-0 overflow-hidden rounded-xl border border-white/20 shadow-lg transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-emerald-300"
                      title={t("swapViews")}
                      aria-label={`${tile.name} · ${t("swapViews")}`}
                    >
                      <VideoTile
                        stream={
                          tile.isSelf && sharingScreen && screenStream ? screenStream : tile.stream
                        }
                        name={tile.name}
                        muted={tile.isSelf || undefined}
                        mirrored={tile.isSelf}
                        isSelf={tile.isSelf}
                        selfSuffix={t("selfSuffix")}
                        connectingLabel={
                          tile.connectionState === "new" || tile.connectionState === "connecting"
                            ? t("connecting")
                            : t("reconnecting")
                        }
                        isConnecting={tile.peerId ? tile.connectionState !== "connected" : undefined}
                        sharing={tile.isSelf ? sharingScreen : undefined}
                        onStopShare={tile.isSelf ? onToggleScreenShare : undefined}
                        videoOff={
                          tile.isSelf
                            ? (!camOn || audioOnly) && !sharingScreen
                            : !tile.stream || tile.stream.getVideoTracks().length === 0
                        }
                        micOff={tile.isSelf ? !micOn : undefined}
                        avatarSize={44}
                      />
                      {/* swap affordance */}
                      <span className="pointer-events-none absolute bottom-1 right-1 grid h-5 w-5 place-items-center rounded-full bg-black/55 text-white ring-1 ring-white/20">
                        <ArrowLeftRight className="h-3 w-3" aria-hidden />
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            )}
            {/* live caption overlay (text-shadow via .caption-text) — final line
                plus my in-progress sentence, responsive and clamped so it can
                never cover the call on small screens */}
            {captionsOpen && (interim || lastCaption) && (
              <div className="pointer-events-none absolute inset-x-2 bottom-3 z-10 sm:inset-x-4 sm:bottom-4">
                {interim ? (
                  <p className="caption-text line-clamp-3 mx-auto max-h-24 max-w-lg overflow-hidden rounded-xl bg-black/65 px-4 py-2 text-center text-xs font-medium italic text-white/80 backdrop-blur-sm sm:text-sm lg:max-w-2xl lg:text-base">
                    {interim}
                    <span aria-hidden className="not-italic text-white/60">
                      {" "}
                      …
                    </span>
                  </p>
                ) : (
                  <p className="caption-text line-clamp-3 mx-auto max-h-24 max-w-lg overflow-hidden rounded-xl bg-black/65 px-4 py-2 text-center text-xs font-medium text-white backdrop-blur-sm sm:text-sm lg:max-w-2xl lg:text-base">
                    <span className="font-semibold text-emerald-300">{lastCaption?.speaker}: </span>
                    {lastCaption?.text}
                  </p>
                )}
              </div>
            )}
            {/* small hint when subtitles are switched off */}
            {!captionsOpen && (
              <div className="pointer-events-none absolute bottom-3 right-3 z-10 sm:bottom-4 sm:right-4">
                <span className="rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/70 backdrop-blur-sm">
                  CC · {t("captionsOffBadge")}
                </span>
              </div>
            )}
          </div>

          {/* Task 27-m: small non-blaming hint when THIS browser can't do live
              subtitles — the hold-to-talk button below is the workaround. */}
          {!recogSupported && (
            <p className="relative z-10 mt-1.5 flex items-center justify-center gap-1.5 text-center text-[11px] font-medium text-white/70">
              <Captions className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {t("captionsUnsupportedNotice")}
            </p>
          )}

          {/* controls — floating frosted-glass bar, native dialer layout */}
          <div className="call-glass relative z-10 mt-3 flex flex-wrap items-center justify-center gap-2.5 rounded-2xl p-2.5">
            {/* push-to-talk live status chip (Task 27-m) */}
            {(pttRecording || pttBusy) && (
              <div className="pointer-events-none absolute -top-10 left-1/2 z-20 -translate-x-1/2">
                <span className="flex items-center gap-1.5 rounded-full bg-rose-600/90 px-3 py-1 text-[11px] font-semibold text-white shadow-lg ring-1 ring-white/25 backdrop-blur-md">
                  <span
                    className="h-2 w-2 animate-pulse rounded-full bg-rose-200"
                    aria-hidden
                  />
                  {pttRecording ? t("pttRecording") : t("pttProcessing")}
                </span>
              </div>
            )}
            <button
              type="button"
              className={cn("call-btn h-12 w-12", !micOn && "call-btn-off")}
              onClick={onToggleMic}
              aria-label={micOn ? t("micMute") : t("micUnmute")}
              aria-pressed={!micOn}
            >
              {micOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
            </button>
            {/* push-to-talk (Task 27-m) — ONLY for browsers without the Web
                Speech API (iPhone Safari etc.): hold to record, release →
                /api/stt → the text lands as a final caption line. Recording
                taps the call's own mic stream (no second permission prompt);
                muted mic disables it (a muted track would record silence). */}
            {!recogSupported && hasPttAudio && (
              <button
                type="button"
                className={cn(
                  "call-btn h-12 w-12 select-none touch-none",
                  (pttRecording || pttBusy) &&
                    "border-rose-400/80 bg-rose-600/85 text-white ring-2 ring-rose-400/70",
                  pttRecording && "animate-pulse",
                  !micOn && "opacity-40"
                )}
                disabled={!micOn || pttBusy}
                onPointerDown={startPtt}
                onPointerUp={stopPtt}
                onPointerCancel={stopPtt}
                onLostPointerCapture={stopPtt}
                onContextMenu={(e) => e.preventDefault()}
                aria-label={t("pttHint")}
                title={t("pttHint")}
              >
                {pttBusy ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : pttRecording ? (
                  <span className="h-3.5 w-3.5 rounded-full bg-rose-300" aria-hidden />
                ) : (
                  <Mic className="h-5 w-5" />
                )}
              </button>
            )}
            <button
              type="button"
              className={cn("call-btn h-12 w-12", !camOn && "call-btn-off")}
              onClick={onToggleCam}
              aria-label={camOn ? t("camOff") : t("camOn")}
              aria-pressed={!camOn}
            >
              {camOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
            </button>
            {/* screen share (Task 26-c) — swaps the outgoing camera track for
                the screen; same WebRTC transceivers, the call never renegotiates */}
            <button
              type="button"
              className={cn("call-btn h-12 w-12", sharingScreen && "call-btn-on")}
              onClick={onToggleScreenShare}
              aria-pressed={sharingScreen}
              aria-label={sharingScreen ? t("screenShareStopAria") : t("screenShareStartAria")}
              title={sharingScreen ? t("screenShareStop") : t("screenShareStart")}
            >
              <MonitorUp className="h-5 w-5" />
            </button>
            {/* layout switch — grid ⇄ WhatsApp-style stack (Task 18) */}
            <button
              type="button"
              className={cn("call-btn h-12 w-12", layout === "stack" && "call-btn-on")}
              onClick={toggleLayout}
              aria-pressed={layout === "stack"}
              aria-label={layout === "grid" ? t("layoutStack") : t("layoutGrid")}
              title={layout === "grid" ? t("layoutStack") : t("layoutGrid")}
            >
              {layout === "grid" ? (
                <PictureInPicture2 className="h-5 w-5" />
              ) : (
                <LayoutGrid className="h-5 w-5" />
              )}
            </button>
            <button
              type="button"
              className={cn("call-btn h-12 w-12", captionsOpen && "call-btn-on")}
              onClick={onToggleCaptions}
              aria-pressed={captionsOpen}
              aria-label={captionsButtonLabel}
              title={captionsButtonLabel}
            >
              <Captions className="h-5 w-5" />
            </button>
            {children}
            {/* Zoom-style full screen (Task 18) */}
            <button
              type="button"
              className="call-btn h-12 w-12"
              onClick={() => setImmersive((v) => !v)}
              aria-pressed={immersive}
              aria-label={immersive ? t("fullscreenExit") : t("fullscreenEnter")}
              title={immersive ? t("fullscreenExit") : t("fullscreenEnter")}
            >
              {immersive ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
            </button>
            <div className="relative">
              <button
                type="button"
                className="call-btn h-12 w-12"
                onClick={onToggleChat}
                aria-label={t("chat")}
              >
                <MessageSquareText className="h-5 w-5" />
              </button>
              {!chatOpen && unreadChat > 0 && (
                <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-amber-500 px-1 text-[10px] font-bold text-white shadow">
                  {unreadChat > 9 ? "9+" : unreadChat}
                </span>
              )}
            </div>
            <button
              type="button"
              className="call-btn call-btn-end h-12 w-12"
              onClick={onLeave}
              aria-label={t("endCall")}
            >
              <PhoneOff className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* chat — bottom drawer below lg, right-side column beside the stage on lg;
          carries its own dark stage background so it stays readable on the light
          page (call-glass alone is transparent by design) */}
      {chatOpen && (
        <aside
          className="relative flex h-72 min-h-0 flex-col overflow-hidden rounded-2xl border border-white/12 text-white shadow-xl lg:sticky lg:top-4 lg:h-auto lg:max-h-[70vh]"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.23 0.03 178), oklch(0.15 0.02 195))",
          }}
        >
          <p className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-white/70">
            <MessageSquareText className="h-3.5 w-3.5" aria-hidden /> {t("chat")}
          </p>
          <div className="nice-scroll min-h-0 flex-1 space-y-2.5 overflow-y-auto p-3">
            {chatMessages.length === 0 ? (
              <p className="pt-10 text-center text-xs text-white/60">
                {t("chatEmpty")}
              </p>
            ) : (
              chatMessages.map((m, i) => (
                <div key={i} className={cn("flex", m.mine ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[80%] px-3 py-2 text-sm shadow-sm",
                      m.mine
                        ? "rounded-2xl rounded-br-md bg-gradient-to-br from-rose-500 to-pink-600 text-white"
                        : "rounded-2xl rounded-bl-md bg-white/10 text-white ring-1 ring-white/10"
                    )}
                  >
                    {!m.mine && (
                      <span className="mb-0.5 block text-[10px] font-semibold text-rose-300">
                        {m.speaker}
                      </span>
                    )}
                    {m.text}
                  </div>
                </div>
              ))
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="flex items-center gap-2 border-t border-white/10 bg-black/25 p-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)]">
            <input
              ref={chatInputRef}
              className="h-11 min-w-0 flex-1 rounded-xl border border-white/15 bg-white/10 px-3 text-sm text-white outline-none placeholder:text-white/45 focus:ring-1 focus:ring-white/40"
              placeholder={t("chatPlaceholder")}
              onKeyDown={(e) => e.key === "Enter" && submitChat()}
              aria-label={t("chat")}
            />
            <Button
              size="icon"
              className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-md shadow-rose-500/25 hover:from-rose-600 hover:to-pink-700"
              onClick={submitChat}
              aria-label={t("chat")}
            >
              <SendHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </aside>
      )}
    </div>
  );

  /* Zoom-style full screen (Task 18): portal the whole room to <body> as a
   * fixed full-viewport overlay — covers everything on any device, including
   * iOS Safari where the native Fullscreen API is unavailable. On desktop /
   * Android the native API is requested on top (hides the browser chrome);
   * Esc drops both via the fullscreenchange listener. */
  if (immersive && typeof document !== "undefined") {
    return createPortal(
      <div
        ref={portalRef}
        className="call-backdrop fixed inset-0 z-[70] flex flex-col overflow-y-auto overscroll-contain p-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] sm:p-4"
      >
        <div className="m-auto w-full">{roomContent}</div>
      </div>,
      document.body
    );
  }
  return roomContent;
}
