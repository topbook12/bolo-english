"use client";

import { useEffect, useRef } from "react";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { RemotePeer } from "@/hooks/use-webrtc";

function VideoTile({
  stream,
  name,
  muted,
  mirrored,
  isSelf,
  selfSuffix,
  connectingLabel,
  isConnecting,
}: {
  stream: MediaStream | null;
  name: string;
  muted?: boolean;
  mirrored?: boolean;
  isSelf?: boolean;
  selfSuffix: string;
  connectingLabel: string;
  isConnecting?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !stream) return;
    el.srcObject = stream;
    // Remote video is unmuted, so browsers may block autoplay until the first
    // user gesture. Retry playback on the next interaction instead of leaving
    // a permanently black tile.
    let playing = false;
    const onInteract = () => {
      if (playing) return;
      el.play().then(
        () => {
          playing = true;
          detach();
        },
        () => undefined // still blocked — retry on next interaction
      );
    };
    const detach = () => {
      document.removeEventListener("click", onInteract);
      document.removeEventListener("touchstart", onInteract);
      document.removeEventListener("keydown", onInteract);
    };
    document.addEventListener("click", onInteract);
    document.addEventListener("touchstart", onInteract);
    document.addEventListener("keydown", onInteract);
    onInteract();
    return detach;
  }, [stream]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-black/85 shadow-lg ring-1 ring-black/5">
      <video
        ref={ref}
        autoPlay
        playsInline
        muted={muted}
        aria-label={isSelf ? `${name} · ${selfSuffix}` : name}
        className={`aspect-video h-full w-full object-cover ${mirrored ? "scale-x-[-1]" : ""}`}
      />
      {/* gradient name chip — emerald glass */}
      <span className="absolute bottom-2.5 left-2.5 flex max-w-[85%] items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-600/90 to-teal-600/90 px-2.5 py-1 text-[11px] font-semibold text-white shadow-md backdrop-blur-sm">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300 live-dot" />
        <span className="truncate">
          {name}
          {isSelf ? ` · ${selfSuffix}` : ""}
        </span>
      </span>
      {/* connecting overlay */}
      {isConnecting && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/65 backdrop-blur-[2px]">
          <Loader2 className="h-7 w-7 animate-spin text-emerald-300" />
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
  onToggleMic: () => void;
  onToggleCam: () => void;
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
  onToggleMic,
  onToggleCam,
  onToggleChat,
  onLeave,
  onSendChat,
  children,
}: CallRoomProps) {
  const t = useTranslations("call");
  const chatInputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

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
  const peerCount = remotePeers.length + 1;
  const gridCols =
    remotePeers.length <= 1
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="space-y-3">
      {/* status strip */}
      <div className="flex flex-wrap items-center gap-1.5">
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
        <div className="flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50/80 px-3 py-2 text-xs text-amber-800 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-300">
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

      {/* video grid */}
      <div className="relative">
        <div className={cn("grid gap-3", gridCols)}>
          <div className={remotePeers.length === 0 ? "sm:col-span-2" : ""}>
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
          {remotePeers.map((p) => (
            <VideoTile
              key={p.id}
              stream={p.stream}
              name={p.name}
              selfSuffix={t("selfSuffix")}
              connectingLabel={t("connecting")}
              isConnecting={p.connectionState !== "connected"}
            />
          ))}
        </div>
        {/* live caption overlay (text-shadow via .caption-text) */}
        {captionsOpen && lastCaption && (
          <div className="pointer-events-none absolute inset-x-4 bottom-4 z-10">
            <p className="caption-text mx-auto max-w-lg rounded-xl bg-black/65 px-4 py-2 text-center text-sm font-medium text-white backdrop-blur-sm">
              <span className="font-semibold text-emerald-300">{lastCaption.speaker}: </span>
              {lastCaption.text}
            </p>
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

      {/* chat drawer */}
      {chatOpen && (
        <div className="flex h-72 flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
          <div className="nice-scroll flex-1 space-y-2.5 overflow-y-auto p-3">
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
                        ? "rounded-2xl rounded-br-md bg-gradient-to-br from-emerald-500 to-teal-600 text-white"
                        : "rounded-2xl rounded-bl-md bg-muted text-foreground"
                    )}
                  >
                    {!m.mine && (
                      <span className="mb-0.5 block text-[10px] font-semibold text-emerald-700 dark:text-emerald-400">
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
          <div className="flex items-center gap-2 border-t bg-background/60 p-2">
            <input
              ref={chatInputRef}
              className="h-11 min-w-0 flex-1 rounded-xl border bg-transparent px-3 text-sm outline-none focus:ring-1 focus:ring-ring"
              placeholder={t("chatPlaceholder")}
              onKeyDown={(e) => e.key === "Enter" && submitChat()}
              aria-label={t("chat")}
            />
            <Button
              size="icon"
              className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
              onClick={submitChat}
              aria-label={t("chat")}
            >
              <SendHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
