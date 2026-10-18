"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Loader2,
  Wand2,
  Sparkles,
  Mic,
  PhoneMissed,
  PhoneOff,
  CameraOff,
  RefreshCw,
  ShieldCheck,
  WifiOff,
  Lightbulb,
  TriangleAlert,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useDevice } from "@/hooks/use-device";
import { useWebRTC } from "@/hooks/use-webrtc";
import { useSpeechRecognition, type FinalLine } from "@/hooks/use-speech-recognition";
import { useToast } from "@/hooks/use-toast";
import { callAi } from "@/lib/client-api";
import { CallClient } from "@/lib/call-client";
import CallRoom from "@/components/speaking/CallRoom";
import CallAvatar from "@/components/speaking/CallAvatar";
import CallAnalysisView from "@/components/speaking/CallAnalysisView";
import type { CallAnalysis, RealtimeCorrections, TranscriptLine } from "@/lib/types";

// CallFlow owns the whole video-call experience:
// quick match → waiting → live call (captions/chat/corrections) → ended → AI analysis.
// Signaling rides on the HTTP-polling CallClient (Vercel-serverless friendly);
// media flows peer-to-peer via useWebRTC. Parent (SpeakingSection) only picks the entry intent.

export type CallIntent = "one" | "group" | "group-code";

interface CallFlowProps {
  intent: CallIntent;
  code?: string;
  onExit: () => void;
}

type Mode = "matching" | "call" | "ended";

interface CaptionItem {
  speaker: string;
  text: string;
  mine: boolean;
  final: boolean;
  at: number;
}

export default function CallFlow({ intent, code, onExit }: CallFlowProps) {
  const t = useTranslations("call");
  const tc = useTranslations("common");
  const { deviceId, hasKey, displayName } = useDevice();
  // Localized name shown to peers/AI when the user hasn't set one
  const myName = displayName || tc("student");
  /* ── speaker identity ──
   * Unnamed users all broadcast the same localized fallback ("Student"),
   * which used to break transcript attribution when two of them shared a
   * call. Every participant therefore gets a short distinct suffix derived
   * from their peerId (e.g. "Student #a3"). Lines also carry the raw peerId,
   * so the AI analysis attributes them exactly; lines without a peerId keep
   * working via speaker-name fallback. */
  const genericName = tc("student");
  const [myPeerId, setMyPeerId] = useState("");
  const myPeerIdRef = useRef("");
  const shortId = useCallback((id: string) => {
    const clean = id.replace(/[^a-zA-Z0-9]/g, "");
    return (clean.slice(-2) || "x").toLowerCase();
  }, []);
  const mySpeakerName =
    myName === genericName && myPeerId ? `${myName} #${shortId(myPeerId)}` : myName;
  const speakerNameRef = useRef(mySpeakerName);
  speakerNameRef.current = mySpeakerName;
  const genericNameRef = useRef(genericName);
  genericNameRef.current = genericName;
  // Peer display names: suffix the generic fallback (or a name identical to
  // mine) with that peer's id so tiles, toasts, captions and the transcript
  // stay unique per participant.
  const peerDisplayName = useCallback(
    (pid: string, name: string) => {
      if (name === genericNameRef.current || name === speakerNameRef.current) {
        return `${name} #${shortId(pid)}`;
      }
      return name;
    },
    [shortId]
  );
  const [mode, setMode] = useState<Mode>("matching");
  const [joining, setJoining] = useState(false);
  const [roomCode, setRoomCode] = useState<string | null>(null);
  const [codeCopied, setCodeCopied] = useState(false);
  const [connectionIssue, setConnectionIssue] = useState(false);
  const clientRef = useRef<CallClient | null>(null);
  const joiningRef = useRef(false);
  const disposedRef = useRef(false);

  const webrtc = useWebRTC({
    // ⚠️ THIS is the envelope bridge: use-webrtc emits raw payloads
    // (RTCSessionDescriptionInit / RTCIceCandidateInit) — they MUST be wrapped
    // into the {offer|answer|ice} envelope that handleSignal unpacks. Passing
    // the raw object through used to make EVERY signal silently unparseable on
    // the receiving side → calls "connected" but remote video never rendered.
    onSendSignal: (type, data, to) => {
      const payload =
        type === "offer"
          ? { offer: data }
          : type === "answer"
            ? { answer: data }
            : { ice: data };
      clientRef.current?.send(type, payload, to);
    },
    getMyId: () => clientRef.current?.peerId ?? "",
    // prove room membership so /api/call/ice is allowed to mint TURN creds
    getIceContext: () => {
      const c = clientRef.current;
      return c ? { roomId: c.roomId, peerId: c.peerId } : null;
    },
  });

  // captions + transcript
  const [captions, setCaptions] = useState<CaptionItem[]>([]);
  const [captionsOpen, setCaptionsOpen] = useState(true);
  const transcriptRef = useRef<TranscriptLine[]>([]);
  const [transcriptCount, setTranscriptCount] = useState(0);
  const myLinesRef = useRef<string[]>([]);
  // Lines already sent for live correction — each tick only analyzes the NEW
  // lines, so the same sentence is never corrected twice in a row.
  const lastCorrectedCountRef = useRef(0);

  // live AI correction
  const [liveCorrection, setLiveCorrection] = useState(true);
  const [corrections, setCorrections] = useState<(RealtimeCorrections & { at: number })[]>([]);
  const [checking, setChecking] = useState(false);

  // call meta
  const [duration, setDuration] = useState(0);
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const callTypeRef = useRef<"one-to-one" | "group">(intent === "one" ? "one-to-one" : "group");
  const [chatOpen, setChatOpen] = useState(false);
  const chatOpenRef = useRef(false);
  const [unreadChat, setUnreadChat] = useState(0);
  const [chatMessages, setChatMessages] = useState<{ speaker: string; text: string; mine: boolean }[]>([]);
  const peerNamesRef = useRef<Map<string, string>>(new Map());
  const enteredRef = useRef(false);

  // ended / analysis
  const [endedInfo, setEndedInfo] = useState<{ durationSec: number; partnerCount: number; type: "one-to-one" | "group" } | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<CallAnalysis | null>(null);

  const { toast } = useToast();
  const nameRef = useRef<string>(myName);
  nameRef.current = myName;
  const deviceIdRef = useRef(deviceId);
  deviceIdRef.current = deviceId;
  const modeRef = useRef(mode);
  modeRef.current = mode;
  const durationRef = useRef(0);
  durationRef.current = duration;
  const oneToOneRef = useRef(intent === "one");
  oneToOneRef.current = intent === "one";

  const recStopRef = useRef<() => void>(() => null);
  const cleanupRef = useRef<() => void>(() => null);
  cleanupRef.current = webrtc.cleanup;

  /* ── screen wake lock (mobile resilience) ──
   * A locked phone screen suspends JS → the 45s heartbeat starves → the
   * server prunes us → "Call closed" after ~2.5 min. Holding a screen wake
   * lock during the call prevents that; it is re-acquired when the tab
   * becomes visible again and silently ignored where unsupported. */
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);
  const acquireWakeLock = useCallback(async () => {
    try {
      const nav = navigator as Navigator & {
        wakeLock?: { request: (type: "screen") => Promise<WakeLockSentinel> };
      };
      if (!nav.wakeLock || wakeLockRef.current) return;
      const sentinel = await nav.wakeLock.request("screen");
      sentinel.addEventListener("release", () => {
        wakeLockRef.current = null;
      });
      wakeLockRef.current = sentinel;
    } catch {
      /* unsupported / denied — the call still works */
    }
  }, []);
  const releaseWakeLock = useCallback(() => {
    void wakeLockRef.current?.release().catch(() => null);
    wakeLockRef.current = null;
  }, []);
  useEffect(() => {
    const onVis = () => {
      if (document.visibilityState === "visible" && modeRef.current === "call") {
        void acquireWakeLock();
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      releaseWakeLock();
    };
  }, [acquireWakeLock, releaseWakeLock]);

  /* ── one-shot auto-rejoin guard (group/code rooms) ── */
  const rejoinedRef = useRef(false);

  /* ── enter the live call UI (idempotent) ── */
  const recStartRef = useRef<() => void>(() => null);
  const enterCall = useCallback(() => {
    if (enteredRef.current) return;
    enteredRef.current = true;
    setDuration(0);
    setCaptions([]);
    setCorrections([]);
    setChatMessages([]);
    setUnreadChat(0);
    transcriptRef.current = [];
    myLinesRef.current = [];
    lastCorrectedCountRef.current = 0;
    setTranscriptCount(0);
    setAnalysis(null);
    setMode("call");
    recStartRef.current();
    void acquireWakeLock();
  }, [acquireWakeLock]);

  /* ── speech recognition → transcript + caption broadcast ── */
  const onFinalLine = useCallback(
    (line: FinalLine) => {
      const speaker = speakerNameRef.current || tc("you");
      transcriptRef.current = [
        ...transcriptRef.current,
        { speaker, text: line.text, at: line.at, peerId: myPeerIdRef.current || undefined },
      ];
      myLinesRef.current = [...myLinesRef.current, line.text];
      setTranscriptCount(transcriptRef.current.length);
      setCaptions((prev) =>
        [...prev, { speaker, text: line.text, mine: true, final: true, at: line.at }].slice(-60)
      );
      clientRef.current?.send("caption", {
        text: line.text,
        speaker,
        peerId: myPeerIdRef.current || undefined,
      });
    },
    [tc]
  );

  const rec = useSpeechRecognition(onFinalLine);
  recStartRef.current = rec.start;
  recStopRef.current = rec.stop;

  /* ── join via CallClient (after media is ready) ── */
  const joinRoom = useCallback(async () => {
    if (joiningRef.current || clientRef.current) return;
    if (!deviceIdRef.current) return; // device id not loaded yet — effect retries
    joiningRef.current = true;
    setJoining(true);
    try {
      await webrtc.initLocal(); // camera permission gate; throws → mediaError shown
    } catch {
      joiningRef.current = false;
      setJoining(false);
      return;
    }

    try {
      const result = await CallClient.join(
        intent === "one"
          ? { deviceId: deviceIdRef.current, name: nameRef.current, intent: "one", mode: "quick" }
          : intent === "group"
            ? { deviceId: deviceIdRef.current, name: nameRef.current, intent: "group", mode: "private" }
            : {
                deviceId: deviceIdRef.current,
                name: nameRef.current,
                intent: "group",
                mode: "code",
                code: (code ?? "").toUpperCase(),
              }
      );

      const client = new CallClient(result);
      if (disposedRef.current) {
        // component unmounted while we were joining — leave immediately
        client.leave();
        return;
      }
      clientRef.current = client;
      setRoomCode(result.code);
      // remember my signaling identity — captions/transcript lines carry it
      myPeerIdRef.current = result.peerId;
      setMyPeerId(result.peerId);
      peerNamesRef.current = new Map(
        result.peers.map((p) => [p.peerId, peerDisplayName(p.peerId, p.name)])
      );

      client.onPeers((peers) => {
        peerNamesRef.current = new Map(
          peers.map((p) => [p.peerId, peerDisplayName(p.peerId, p.name)])
        );
        webrtc.handleRoomState(
          peers.map((p) => ({ id: p.peerId, name: peerDisplayName(p.peerId, p.name) }))
        );
        // one-to-one quick match: the call starts the moment a 2nd peer appears
        if (intent === "one" && modeRef.current === "matching" && peers.length >= 2) {
          enterCall();
        }
      });

      client.onMessage((m) => {
        if (m.type === "bye") {
          const nm = peerNamesRef.current.get(m.from);
          if (nm) toast({ title: t("peerLeft", { name: nm }) });
          webrtc.handleBye(m.from);
          return;
        }
        if (m.type === "caption") {
          const p = m.payload as { text?: unknown; speaker?: unknown; peerId?: unknown };
          const text = typeof p?.text === "string" ? p.text : "";
          if (text) {
            const rawSpeaker =
              typeof p?.speaker === "string" && p.speaker ? p.speaker : tc("partner");
            const pid = typeof p?.peerId === "string" && p.peerId ? p.peerId : m.from;
            // disambiguate a colliding generic fallback name
            const speaker =
              rawSpeaker === genericNameRef.current
                ? `${rawSpeaker} #${shortId(pid)}`
                : rawSpeaker;
            setCaptions((prev) =>
              [...prev, { speaker, text, mine: false, final: true, at: Date.now() }].slice(-60)
            );
            transcriptRef.current = [
              ...transcriptRef.current,
              { speaker, text, at: Date.now(), peerId: pid || undefined },
            ];
            setTranscriptCount(transcriptRef.current.length);
          }
          return;
        }
        if (m.type === "chat") {
          const p = m.payload as { text?: unknown; speaker?: unknown; peerId?: unknown };
          const text = typeof p?.text === "string" ? p.text : "";
          if (text) {
            const rawSpeaker =
              typeof p?.speaker === "string" && p.speaker ? p.speaker : tc("partner");
            const pid = typeof p?.peerId === "string" && p.peerId ? p.peerId : m.from;
            const speaker =
              rawSpeaker === genericNameRef.current
                ? `${rawSpeaker} #${shortId(pid)}`
                : rawSpeaker;
            setChatMessages((prev) => [...prev, { speaker, text, mine: false }]);
            if (!chatOpenRef.current) setUnreadChat((u) => u + 1);
          }
          return;
        }
        // offer | answer | ice → payload is the {offer|answer|ice} envelope
        void webrtc.handleSignal(m.from, m.payload);
      });

      client.onClosed(() => {
        clientRef.current = null;
        recStopRef.current();
        // Mobile resilience: a screen-lock/network death gets the participant
        // pruned server-side and surfaces as poll {closed:true}. For group/
        // code rooms ONE silent rejoin attempt keeps a live conversation
        // alive (PCs are torn down via an empty roster — local media is kept
        // so the camera light stays honest). Quick-match 1:1 keeps the old
        // exit — the partner is gone anyway, matching would be empty.
        if (intent === "group" && !rejoinedRef.current) {
          rejoinedRef.current = true;
          webrtc.handleRoomState([]); // close PCs, keep local media
          toast({ title: t("reconnecting") });
          void joinRoom().then(() => {
            if (modeRef.current === "call") recStartRef.current();
          });
          return;
        }
        toast({ title: t("roomClosedTitle"), description: t("roomClosedDesc"), variant: "destructive" });
        cleanupRef.current();
        onExit();
      });

      client.onConnectionIssue((issue) => setConnectionIssue(issue));

      // seed the roster with what the server already knows
      webrtc.handleRoomState(
        result.peers.map((p) => ({ id: p.peerId, name: peerDisplayName(p.peerId, p.name) }))
      );

      if (intent === "one") {
        // wait on the matching screen until a partner shows up
        if (result.peers.length >= 2) enterCall();
      } else {
        // group: enter immediately — the code badge lets friends join
        enterCall();
        if (intent === "group") {
          toast({ title: t("roomCreatedTitle"), description: t("shareHint", { code: result.code }) });
        }
      }
    } catch (e) {
      toast({
        title: t("joinFailedTitle"),
        description: (e as Error).message,
        variant: "destructive",
      });
      onExit();
    } finally {
      joiningRef.current = false;
      setJoining(false);
    }
  }, [intent, code, webrtc, enterCall, toast, t, tc, onExit, peerDisplayName, shortId]);

  /* ── kick off join once the device id is available ── */
  const startedRef = useRef(false);
  useEffect(() => {
    if (startedRef.current || !deviceId) return;
    startedRef.current = true;
    void joinRoom();
  }, [deviceId, joinRoom]);

  const retryMedia = () => {
    void joinRoom();
  };

  const copyCode = async () => {
    if (!roomCode) return;
    try {
      await navigator.clipboard.writeText(roomCode);
      setCodeCopied(true);
      toast({ title: t("codeCopied") });
      setTimeout(() => setCodeCopied(false), 2000);
    } catch {
      toast({ title: roomCode, description: t("shareBanner") });
    }
  };

  const cancelMatching = () => {
    clientRef.current?.leave();
    clientRef.current = null;
    webrtc.cleanup();
    onExit();
  };

  const leaveCall = () => {
    recStopRef.current();
    releaseWakeLock();
    const partnerCount = webrtc.remotePeers.length;
    clientRef.current?.leave();
    clientRef.current = null;
    webrtc.cleanup();
    setEndedInfo({ durationSec: duration, partnerCount, type: callTypeRef.current });
    setMode("ended");
  };

  /* ── unmount cleanup: leave + media teardown ── */
  useEffect(() => {
    return () => {
      disposedRef.current = true;
      clientRef.current?.leave();
      clientRef.current = null;
      cleanupRef.current();
    };
  }, []);

  /* ── timers ── */
  useEffect(() => {
    if (mode !== "call") return;
    const iv = setInterval(() => setDuration((d) => d + 1), 1000);
    return () => clearInterval(iv);
  }, [mode]);

  /* ── 1:1 auto-end when the partner leaves ──
   * In a quick-match call the partner's presence is guaranteed, so an empty
   * roster mid-call means they ended the call (or their client died and the
   * server pruned them). Give signaling ~3s to settle (bye + roster update
   * can arrive a poll apart), then end the call here too — the user lands on
   * the normal ended screen with the AI analysis option instead of staring
   * at an empty "live" room. Group calls keep the room open for the host. */
  useEffect(() => {
    if (mode !== "call" || !oneToOneRef.current) return;
    if (webrtc.remotePeers.length > 0) return;
    const timer = setTimeout(() => {
      if (modeRef.current !== "call") return;
      recStopRef.current();
      clientRef.current?.leave();
      clientRef.current = null;
      cleanupRef.current();
      setEndedInfo({
        durationSec: durationRef.current,
        partnerCount: 0,
        type: callTypeRef.current,
      });
      setMode("ended");
    }, 3_000);
    return () => clearTimeout(timer);
  }, [mode, webrtc.remotePeers.length]);

  /* ── live AI correction loop (first check @12s, then every 60s) ──
   * Checkpoint-based: each tick analyzes only the lines spoken SINCE the last
   * successful check. Re-sending a sliding window used to duplicate the same
   * corrections every 30 seconds. Cadence was raised 30s→60s and the fresh-line
   * gate 2→3 (audit: live checks on an active call burned 8-12k tokens per
   * 10 min — halving the frequency halves that without hurting quality). */
  useEffect(() => {
    if (!liveCorrection || mode !== "call" || !hasKey) return;
    const run = async () => {
      if (!deviceIdRef.current) return;
      const all = myLinesRef.current;
      const fresh = all.slice(lastCorrectedCountRef.current);
      if (fresh.length < 3) return; // nothing new → skip the API call entirely
      const lines = fresh.slice(-14);
      setChecking(true);
      try {
        const res = await callAi<RealtimeCorrections>(deviceIdRef.current, "realtime-correction", {
          lines,
        });
        lastCorrectedCountRef.current = all.length; // advance checkpoint on success
        if (res.corrections?.length) {
          setCorrections((prev) => [{ ...res, at: Date.now() }, ...prev].slice(0, 5));
        }
      } catch {
        /* silent — best-effort; checkpoint stays so the tick retries */
      } finally {
        setChecking(false);
      }
    };
    const iv = setInterval(run, 60_000);
    const first = setTimeout(run, 12_000);
    return () => {
      clearInterval(iv);
      clearTimeout(first);
    };
  }, [liveCorrection, mode, hasKey]);

  /* ── manual AI check ── */
  const manualCheck = async () => {
    const lines = myLinesRef.current.slice(-14);
    if (lines.length < 1) {
      return toast({ title: t("speakFirst") });
    }
    setChecking(true);
    try {
      const res = await callAi<RealtimeCorrections>(deviceId, "realtime-correction", { lines });
      // the manual check covered the recent window — advance the auto
      // checkpoint so the loop doesn't re-analyze the same lines right after
      lastCorrectedCountRef.current = Math.max(
        lastCorrectedCountRef.current,
        myLinesRef.current.length
      );
      setCorrections((prev) => [{ ...res, at: Date.now() }, ...prev].slice(0, 5));
      if (!res.corrections?.length) {
        toast({ title: res.encouragement || t("allGood") });
      }
    } catch (e) {
      toast({ title: t("checkFailed"), description: (e as Error).message, variant: "destructive" });
    } finally {
      setChecking(false);
    }
  };

  /* ── post-call analysis ── */
  const runAnalysis = async () => {
    if (!deviceId) return;
    setAnalyzing(true);
    try {
      const result = await callAi<CallAnalysis>(deviceId, "call-analysis", {
        transcript: transcriptRef.current,
        durationSec: endedInfo?.durationSec ?? duration,
        partnerCount: endedInfo?.partnerCount ?? 1,
        myName: speakerNameRef.current,
        myPeerId: myPeerIdRef.current || undefined,
      });
      setAnalysis(result);
      await fetch("/api/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          deviceId,
          type: endedInfo?.type ?? "one-to-one",
          partnerCount: endedInfo?.partnerCount ?? 1,
          durationSec: endedInfo?.durationSec ?? duration,
          transcript: transcriptRef.current,
          analysis: result,
        }),
      });
      toast({ title: t("analysisSaved") });
    } catch (e) {
      toast({ title: t("analysisFailed"), description: (e as Error).message, variant: "destructive" });
    } finally {
      setAnalyzing(false);
    }
  };

  const sendChat = (text: string) => {
    setChatMessages((prev) => [...prev, { speaker: speakerNameRef.current, text, mine: true }]);
    clientRef.current?.send("chat", {
      text,
      speaker: speakerNameRef.current,
      peerId: myPeerIdRef.current || undefined,
    });
  };

  const toggleChat = () => {
    const next = !chatOpen;
    setChatOpen(next);
    chatOpenRef.current = next;
    if (next) setUnreadChat(0);
  };

  const mmss = `${String(Math.floor(duration / 60)).padStart(2, "0")}:${String(duration % 60).padStart(2, "0")}`;

  /* ────────────────── RENDER ────────────────── */

  if (mode === "matching") {
    return (
      /* Native dialer screen: always-dark immersive stage (theme-independent,
         exactly like the phone app), ripple-ring avatar, glass surfaces. */
      <div className="call-backdrop relative mx-auto flex max-w-lg flex-col items-center overflow-hidden rounded-3xl px-6 pb-9 pt-12 text-center text-white shadow-2xl ring-1 ring-black/30">
        {/* ambient glow orbs */}
        <span
          className="call-orb call-orb-a -left-16 top-8 h-56 w-56 bg-emerald-500/25"
          aria-hidden
        />
        <span
          className="call-orb call-orb-b -right-14 bottom-28 h-64 w-64 bg-teal-400/20"
          aria-hidden
        />
        <span
          className="call-orb call-orb-a left-1/3 top-1/2 h-40 w-40 bg-sky-500/15 [animation-delay:-6s]"
          aria-hidden
        />

        {/* caller avatar with dialer ripples */}
        <div className="relative z-10">
          <CallAvatar name={mySpeakerName || myName} size={124} ringing />
        </div>

        {/* status */}
        <div className="relative z-10 mt-7">
          <h2 className="text-xl font-bold tracking-tight">
            {joining ? t("joining") : t("waitingTitle")}
          </h2>
          <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-white/70">
            {t("waitingDesc")}
          </p>
        </div>

        {/* waiting dots */}
        <div className="call-dots relative z-10 mt-4 flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
        </div>

        {connectionIssue && (
          <span className="call-glass relative z-10 mt-4 inline-flex animate-pulse items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-amber-200">
            <WifiOff className="h-3.5 w-3.5" /> {t("reconnecting")}
          </span>
        )}

        {/* camera-denied friendly glass alert with retry */}
        {webrtc.mediaError && (
          <div className="call-glass relative z-10 mt-4 w-full rounded-2xl p-4 text-left">
            <p className="flex items-center gap-1.5 text-sm font-semibold text-amber-200">
              <CameraOff className="h-4 w-4" /> {t("cameraTitle")}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-white/75">
              {webrtc.mediaError || t("cameraDesc")}
            </p>
            <Button
              size="sm"
              onClick={retryMedia}
              className="mt-3 min-h-11 gap-1.5 bg-gradient-to-br from-rose-500 to-pink-600 px-4 text-white shadow-md shadow-rose-500/25 hover:from-rose-600 hover:to-pink-700"
            >
              <RefreshCw className="h-3.5 w-3.5" /> {tc("retry")}
            </Button>
          </div>
        )}

        {/* tips — dark glass card */}
        <div className="call-glass relative z-10 mt-6 w-full rounded-2xl p-4 text-left">
          <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
            <Lightbulb className="h-4 w-4 text-amber-300" /> {t("tipsTitle")}
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-[13px] leading-relaxed text-white/75">
            <li>{t("tip1")}</li>
            <li>{t("tip2")}</li>
            <li>{t("tip3")}</li>
          </ul>
        </div>

        {/* privacy note — the native dialer's "encrypted" line */}
        <p className="relative z-10 mt-5 flex items-center gap-1.5 text-[11px] font-medium text-white/55">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-300/80" /> {t("secureNote")}
        </p>

        {/* cancel — the native red end-button */}
        <div className="relative z-10 mt-5 flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={cancelMatching}
            className="call-btn call-btn-end h-14 w-14"
            aria-label={t("cancelMatching")}
          >
            <PhoneOff className="h-6 w-6" />
          </button>
          <span className="text-xs font-medium text-white/70">{t("cancelMatching")}</span>
        </div>
      </div>
    );
  }

  if (mode === "call") {
    return (
      <div className="mx-auto max-w-3xl space-y-3 lg:max-w-6xl">
        <CallRoom
          localStream={webrtc.localStream}
          remotePeers={webrtc.remotePeers}
          displayName={mySpeakerName}
          micOn={micOn}
          camOn={camOn}
          chatOpen={chatOpen}
          unreadChat={unreadChat}
          chatMessages={chatMessages}
          roomCode={roomCode}
          onCopyCode={copyCode}
          codeCopied={codeCopied}
          durationLabel={mmss}
          transcriptCount={transcriptCount}
          reconnecting={connectionIssue}
          showShareHint={intent !== "one"}
          captions={captions.filter((c) => c.final)}
          captionsOpen={captionsOpen}
          interimText={rec.listening ? rec.interim : ""}
          onToggleMic={() => {
            const next = !micOn;
            setMicOn(next);
            webrtc.toggleMic(next);
          }}
          onToggleCam={() => {
            const next = !camOn;
            setCamOn(next);
            webrtc.toggleCam(next);
          }}
          onToggleCaptions={() => setCaptionsOpen((v) => !v)}
          onToggleChat={toggleChat}
          onLeave={leaveCall}
          onSendChat={sendChat}
        >
          {/* live correction toggle slot — glass pill on the call stage */}
          <div className="call-glass flex h-12 items-center gap-2 rounded-full px-3.5">
            <Wand2
              className={`h-4 w-4 ${liveCorrection ? "text-emerald-300" : "text-white/60"}`}
            />
            <Switch
              checked={liveCorrection}
              onCheckedChange={setLiveCorrection}
              aria-label={t("liveCorrection")}
            />
          </div>
        </CallRoom>

        {/* speech problems — visible amber warnings, never a whisper of text */}
        {!rec.supported ? (
          <Card className="border-amber-200 bg-amber-50/80 dark:border-amber-900 dark:bg-amber-950/30">
            <CardContent className="flex items-start gap-3 p-4">
              <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-amber-900 dark:text-amber-200">
                  {t("speechUnsupportedTitle")}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-amber-800 dark:text-amber-300">
                  {t("speechUnsupportedBody")}
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          rec.error && (
            <p className="rounded-xl border border-amber-200 bg-amber-50/70 px-3 py-2 text-center text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-300">
              {rec.error}
            </p>
          )
        )}

        {/* AI corrections feed */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-1.5 text-sm font-semibold">
              <Wand2 className="h-4 w-4 text-primary" />
              {t("liveCorrection")}
              {checking && <Loader2 className="h-3.5 w-3.5 animate-spin text-muted-foreground" />}
            </h3>
            <div className="flex items-center gap-2">
              {!hasKey && <span className="text-[10px] text-muted-foreground">{t("keyNeeded")}</span>}
              <Button size="sm" variant="outline" onClick={manualCheck} disabled={checking} className="min-h-9 gap-1">
                <Sparkles className="h-3.5 w-3.5" /> {t("checkNow")}
              </Button>
            </div>
          </div>

          {corrections.length === 0 ? (
            <Card className="border-dashed">
              <CardContent className="p-3 text-center text-xs text-muted-foreground">
                {liveCorrection ? t("liveCorrectionHint") : t("liveCorrectionOff")}
              </CardContent>
            </Card>
          ) : (
            <div className="nice-scroll max-h-72 space-y-2 overflow-y-auto pr-1">
              {corrections.map((c, ci) =>
                c.corrections.map((item, i) => (
                  <Card
                    key={`${ci}-${i}`}
                    className="border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/30"
                  >
                    <CardContent className="p-3 text-sm">
                      <p className="text-destructive line-through decoration-destructive/40">{item.original}</p>
                      <p className="font-medium text-emerald-700 dark:text-emerald-400">✓ {item.corrected}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{item.explanation}</p>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // mode === "ended"
  return (
    <div className="mx-auto max-w-2xl space-y-4 py-8">
      <Card className="border-border/70">
        <CardHeader className="items-center text-center">
          <span
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg shadow-rose-500/30 ring-1 ring-rose-400/40"
            style={{ background: "linear-gradient(135deg, oklch(0.62 0.22 22), oklch(0.54 0.23 12))" }}
          >
            <PhoneMissed className="h-8 w-8" />
          </span>
          <CardTitle>{t("callEnded")}</CardTitle>
          <CardDescription>
            {t("endedSummary", {
              minutes: Math.round((endedInfo?.durationSec ?? 0) / 60),
              count: transcriptCount,
            })}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {analysis ? (
            <CallAnalysisView analysis={analysis} transcript={transcriptRef.current} />
          ) : hasKey ? (
            <Button
              onClick={runAnalysis}
              disabled={analyzing}
              className="min-h-11 w-full gap-2 bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-md shadow-rose-500/25 hover:from-rose-600 hover:to-pink-700"
              size="lg"
            >
              <Sparkles className="h-5 w-5" />
              {analyzing ? t("analyzing") : t("analyzeCta")}
            </Button>
          ) : (
            <p className="text-center text-sm text-muted-foreground">{t("keyHint")}</p>
          )}
          <div className="flex gap-2">
            <Button variant="outline" className="min-h-11 flex-1" onClick={onExit}>
              {t("callAgain")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
