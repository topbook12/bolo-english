"use client";

import { useEffect, useRef, useState } from "react";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CallAvatar, { VoiceEq } from "@/components/speaking/CallAvatar";
import type { RemotePeer } from "@/hooks/use-webrtc";

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
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const t = useTranslations("call");

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
        "relative overflow-hidden rounded-2xl border shadow-lg transition-shadow duration-300",
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
          mirrored && "scale-x-[-1]",
          videoOff && "opacity-0"
        )}
      />
      {/* native-dialer avatar when there is no picture to show */}
      {videoOff && (
        <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_center,rgba(16,68,72,0.55),rgba(4,12,16,0.98))]">
          <div className="flex flex-col items-center gap-2.5">
            <CallAvatar name={name} size={84} />
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
            "absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-black/55 px-2 py-1 text-[10px] font-semibold ring-1 ring-white/15 backdrop-blur-md",
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
  /** Camera could not be opened (mic fine) — the call continues audio-only;
   *  shows the amber note chip and forces the avatar fallback on our tile. */
  audioOnly?: boolean;
  showShareHint?: boolean;
  captions: { speaker: string; text: string; mine: boolean; final: boolean }[];
  captionsOpen: boolean;
  /** My own in-progress sentence — shown inside the caption overlay so it
   *  never shifts the call layout (replaces the old in-flow paragraph). */
  interimText?: string;
  onToggleMic: () => void;
  onToggleCam: () => void;
  onToggleCaptions: () => void;
  onToggleChat: () => void;
  onLeave: () => void;
  onSendChat: (text: string) => void;
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
  audioOnly,
  showShareHint,
  captions,
  captionsOpen,
  interimText = "",
  onToggleMic,
  onToggleCam,
  onToggleCaptions,
  onToggleChat,
  onLeave,
  onSendChat,
  children,
}: CallRoomProps) {
  const t = useTranslations("call");
  const chatInputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const talking = useTalkingPeers(remotePeers);

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

  return (
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
            {audioOnly && (
              <span
                className="call-glass inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold text-amber-200"
                title={t("audioOnlyNote")}
              >
                <VideoOff className="h-3 w-3" /> {t("audioOnlyNote")}
              </span>
            )}
          </div>

          {/* video grid + caption overlays */}
          <div className="relative z-10">
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
                  stream={localStream}
                  name={displayName}
                  muted
                  mirrored
                  isSelf
                  selfSuffix={t("selfSuffix")}
                  connectingLabel={t("connecting")}
                  videoOff={!camOn || audioOnly}
                  micOff={!micOn}
                />
              </div>
            </div>
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

          {/* controls — floating frosted-glass bar, native dialer layout */}
          <div className="call-glass relative z-10 mt-3 flex flex-wrap items-center justify-center gap-2.5 rounded-2xl p-2.5">
            <button
              type="button"
              className={cn("call-btn h-12 w-12", !micOn && "call-btn-off")}
              onClick={onToggleMic}
              aria-label={micOn ? t("micMute") : t("micUnmute")}
              aria-pressed={!micOn}
            >
              {micOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
            </button>
            <button
              type="button"
              className={cn("call-btn h-12 w-12", !camOn && "call-btn-off")}
              onClick={onToggleCam}
              aria-label={camOn ? t("camOff") : t("camOn")}
              aria-pressed={!camOn}
            >
              {camOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
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
}
