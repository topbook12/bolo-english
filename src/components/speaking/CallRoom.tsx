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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
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
}) {
  const ref = useRef<HTMLVideoElement>(null);

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
      detach();
    };
  }, [stream, muted, isConnecting]); // isConnecting: re-arm when the peer connects

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border shadow-lg ring-1 ring-black/5 transition-shadow duration-300",
        // Remote feeds use a soft dark radial backdrop so portrait phone video
        // (object-contain) never shows hard letterbox edges.
        contain
          ? "border-border/60 bg-[radial-gradient(ellipse_at_top,rgba(13,148,136,0.16),rgba(2,8,14,0.96))]"
          : "border-border/60 bg-black/85",
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
          mirrored && "scale-x-[-1]"
        )}
      />
      {/* gradient name chip — rose glass; glows while that peer speaks */}
      <span
        className={cn(
          "absolute bottom-2.5 left-2.5 flex max-w-[85%] items-center gap-1.5 rounded-full bg-gradient-to-r from-rose-600/90 to-pink-600/90 px-2.5 py-1 text-[11px] font-semibold text-white shadow-md backdrop-blur-sm transition-shadow duration-300",
          speaking && "shadow-[0_0_12px_rgba(244,63,94,0.7)] ring-1 ring-rose-300/80"
        )}
      >
        <span
          className={cn(
            "h-1.5 w-1.5 shrink-0 rounded-full",
            speaking ? "bg-white live-dot" : "bg-rose-300 live-dot"
          )}
        />
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
      {/* status strip */}
      <div className={cn("flex flex-wrap items-center gap-1.5", chatOpen && "lg:col-span-2")}>
        <Badge className="gap-1.5 border-transparent bg-rose-500/10 text-rose-600 dark:text-rose-400">
          <span className="live-dot h-2 w-2 rounded-full bg-rose-500" /> {t("live")}
        </Badge>
        <Badge variant="outline" className="gap-1 font-mono">
          <Timer className="h-3 w-3" /> {durationLabel}
        </Badge>
        <Badge variant="outline" className="gap-1">
          <Users className="h-3 w-3" /> {t("peerCount", { count: peerCount })}
        </Badge>
        {roomCode && (
          <Badge variant="outline" className="gap-1 font-mono tracking-widest">
            {roomCode}
            <button
              onClick={onCopyCode}
              className="relative ml-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full transition-colors after:absolute after:-inset-2.5 after:content-[''] hover:bg-accent"
              aria-label={t("copyCode")}
              title={t("copyCode")}
            >
              {codeCopied ? (
                <Check className="h-3.5 w-3.5 text-emerald-600" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
          </Badge>
        )}
        <Badge variant="outline" className="ml-auto hidden sm:inline-flex">
          {t("sentences", { count: transcriptCount })}
        </Badge>
        {reconnecting && (
          <Badge className="animate-pulse gap-1 border-transparent bg-amber-500/15 text-amber-700 dark:text-amber-400">
            <WifiOff className="h-3 w-3" /> {t("reconnecting")}
          </Badge>
        )}
      </div>

      {/* share hint for group hosts */}
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

      {/* video + controls — left column when the chat is open on lg */}
      <div className="min-w-0 space-y-3">
        {/* video grid — remote peers FIRST so the important video is on top on
            phones; on sm+ 1:1 the two equal tiles sit side-by-side anyway */}
        <div className="relative">
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

        {/* controls bar — 48px circular targets */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 rounded-2xl border border-border/60 bg-card p-3 shadow-sm">
          <Button
            size="icon"
            variant={micOn ? "secondary" : "destructive"}
            className="h-12 w-12 rounded-full"
            onClick={onToggleMic}
            aria-label={micOn ? t("micMute") : t("micUnmute")}
          >
            {micOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
          </Button>
          <Button
            size="icon"
            variant={camOn ? "secondary" : "destructive"}
            className="h-12 w-12 rounded-full"
            onClick={onToggleCam}
            aria-label={camOn ? t("camOff") : t("camOn")}
          >
            {camOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
          </Button>
          <Button
            size="icon"
            variant={captionsOpen ? "default" : "secondary"}
            className={cn(
              "h-12 w-12 rounded-full",
              captionsOpen &&
                "bg-gradient-to-br from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700"
            )}
            onClick={onToggleCaptions}
            aria-pressed={captionsOpen}
            aria-label={captionsButtonLabel}
            title={captionsButtonLabel}
          >
            <Captions className="h-5 w-5" />
          </Button>
          {children}
          <div className="relative">
            <Button
              size="icon"
              variant={chatOpen ? "default" : "secondary"}
              className="h-12 w-12 rounded-full"
              onClick={onToggleChat}
              aria-label={t("chat")}
            >
              <MessageSquareText className="h-5 w-5" />
            </Button>
            {!chatOpen && unreadChat > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-amber-500 px-1 text-[10px] font-bold text-white shadow">
                {unreadChat > 9 ? "9+" : unreadChat}
              </span>
            )}
          </div>
          <Button
            size="icon"
            className="h-12 w-12 rounded-full bg-rose-600 hover:bg-rose-700"
            onClick={onLeave}
            aria-label={t("endCall")}
          >
            <PhoneOff className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* chat — bottom drawer below lg, right-side column beside the video on lg */}
      {chatOpen && (
        <aside className="flex h-72 min-h-0 flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm lg:sticky lg:top-4 lg:h-auto lg:max-h-[70vh]">
          <div className="nice-scroll min-h-0 flex-1 space-y-2.5 overflow-y-auto p-3">
            {chatMessages.length === 0 ? (
              <p className="pt-10 text-center text-xs text-muted-foreground">
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
                        : "rounded-2xl rounded-bl-md bg-muted text-foreground"
                    )}
                  >
                    {!m.mine && (
                      <span className="mb-0.5 block text-[10px] font-semibold text-rose-700 dark:text-rose-400">
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
          <div className="flex items-center gap-2 border-t bg-background/60 p-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)]">
            <input
              ref={chatInputRef}
              className="h-11 min-w-0 flex-1 rounded-xl border bg-transparent px-3 text-sm outline-none focus:ring-1 focus:ring-ring"
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
