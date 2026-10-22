"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import {
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
import { useDevice } from "@/hooks/use-device";
import { useWebRTC } from "@/hooks/use-webrtc";
import { useSpeechRecognition, type FinalLine } from "@/hooks/use-speech-recognition";
import { useToast } from "@/hooks/use-toast";
import { callAi } from "@/lib/client-api";
import { CallClient } from "@/lib/call-client";
import CallRoom from "@/components/speaking/CallRoom";
import CallAvatar from "@/components/speaking/CallAvatar";
import CallAnalysisView from "@/components/speaking/CallAnalysisView";
import type { CallAnalysis, TranscriptLine } from "@/lib/types";

// CallFlow owns the whole video-call experience:
// quick match → waiting → live call (captions/chat) → ended → AI analysis.
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
  /* Recovery rejoin in flight (network death / screen-lock prune). Tracked in
   * BOTH a ref (synchronous checks inside timers) and state (the 1:1 auto-end
   * effect must re-evaluate when the rejoin settles) — Task 17. */
  const [rejoining, setRejoining] = useState(false);
  const rejoiningRef = useRef(false);
  const setRejoinBoth = useCallback((v: boolean) => {
    rejoiningRef.current = v;
    setRejoining(v);
  }, []);
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
    // Task 26-c: when a screen share ends by ANY path (button, the browser's
    // native "Stop sharing" bar, teardown), the hook restores the camera
    // track's exact pre-share state — mirror it into the UI toggle.
    onScreenShareStopped: (cameraOn) => setCamOn(cameraOn),
  });

  // captions + transcript
  const [captions, setCaptions] = useState<CaptionItem[]>([]);
  const [captionsOpen, setCaptionsOpen] = useState(true);
  const transcriptRef = useRef<TranscriptLine[]>([]);
  const [transcriptCount, setTranscriptCount] = useState(0);

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
  // How many peers are currently in MY roster (me included). Drives the
  // quick-match re-roll: 1 = still waiting alone. Updated from the join
  // result and every roster change.
  const peersCountRef = useRef(1);
  // Names of EVERY peer ever seen in this room. The roster map above is
  // rebuilt on every roster change — a "bye" processed in the same poll as
  // the departure used to find no name and silently skip the
  // "{name} left the call" toast. This cache never prunes, so the goodbye
  // always knows who left.
  const peerNamesEverRef = useRef<Map<string, string>>(new Map());
  // Every peerId that was ever MINE — quick-match re-rolls and recovery
  // rejoins each get a fresh server-assigned id, so the "ever seen" roster
  // above accumulates my own past identities. partnerCount must only count
  // REAL partners (progress fix: a 1:1 call used to record 3 partners).
  const myPeerIdsRef = useRef<Set<string>>(new Set());
  const partnersEverRef = useRef<Set<string>>(new Set());
  const enteredRef = useRef(false);

  // ended / analysis
  const [endedInfo, setEndedInfo] = useState<{ durationSec: number; partnerCount: number; type: "one-to-one" | "group" } | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<CallAnalysis | null>(null);
  /* Progress fix (user report: কলের মিনিট/প্রগ্রেস আপডেট হচ্ছে না):
   * the session is now auto-saved the MOMENT the call ends, so minutes and
   * progress never depend on the optional AI analysis. This ref holds the id
   * of that auto-saved record; runAnalysis() PATCHes its analysis onto it. */
  const savedSessionRef = useRef<string | null>(null);

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
    setChatMessages([]);
    setUnreadChat(0);
    transcriptRef.current = [];
    setTranscriptCount(0);
    setAnalysis(null);
    savedSessionRef.current = null; // fresh call → fresh session record
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
      myPeerIdsRef.current.add(result.peerId); // every id that was ever me
      // build the current-roster name map AND remember every name forever
      const buildNames = (peers: { peerId: string; name: string }[]) => {
        const m = new Map(peers.map((p) => [p.peerId, peerDisplayName(p.peerId, p.name)]));
        for (const [k, v] of m) {
          peerNamesEverRef.current.set(k, v);
          if (!myPeerIdsRef.current.has(k)) partnersEverRef.current.add(k);
        }
        return m;
      };
      peerNamesRef.current = buildNames(result.peers);
      peersCountRef.current = result.peers.length;

      client.onPeers((peers) => {
        peerNamesRef.current = buildNames(peers);
        peersCountRef.current = peers.length;
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
          const nm =
            peerNamesRef.current.get(m.from) ?? peerNamesEverRef.current.get(m.from);
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
        // pruned server-side and surfaces as poll {closed:true}. ONE silent
        // rejoin attempt keeps a live conversation alive (PCs are torn down
        // via an empty roster — local media is kept so the camera light stays
        // honest). Task 17: this now covers 1:1 quick-match too — a pruned
        // caller re-enters the SAME room while the partner is still waiting
        // (the partner's roster shows us leave, then return with a new peer
        // id, and the WebRTC mesh rebuilds automatically). If the partner is
        // really gone, the rejoin lands us in an empty call and the 1:1
        // auto-end sweep below ends it cleanly on the ended screen.
        if (!rejoinedRef.current) {
          rejoinedRef.current = true;
          webrtc.handleRoomState([]); // close PCs, keep local media
          toast({ title: t("reconnecting") });
          setRejoinBoth(true);
          void joinRoom()
            .then(() => {
              if (modeRef.current === "call") recStartRef.current();
            })
            .finally(() => setRejoinBoth(false));
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

  /* ── simultaneous-arrival re-roll (quick match only) ──
   * REAL concurrency stress-test finding (Task 17): several people tapping
   * Quick Match in the same instant each find no room to join and each
   * CREATE their own — everyone then waits alone forever (signaling never
   * introduces two waiting hosts to each other). While matching on a 1:1
   * quick room with no partner yet, silently leave the empty room and
   * re-match: leaving deletes an empty room, and a fresh join always lands
   * in the OLDEST open room (server: orderBy createdAt asc), so waiting
   * hosts converge into pairs deterministically. Group/code hosts keep
   * their room — friends join by code — and never re-roll. */
  useEffect(() => {
    if (intent !== "one") return;
    const iv = setInterval(() => {
      if (modeRef.current !== "matching") return;
      if (joiningRef.current) return; // a join/re-roll is already in flight
      if (peersCountRef.current >= 2) return; // partner arrived — nothing to do
      const client = clientRef.current;
      if (!client) return;
      client.leave(); // empty room → server deletes it
      clientRef.current = null;
      void joinRoom(); // fresh quick-match — lands in the oldest open room
    }, 8_000);
    return () => clearInterval(iv);
  }, [intent, joinRoom]);

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

  /* ── auto-save the call session the moment it ends ──
   * Fire-and-forget: duration/transcript/partners land in the DB right here,
   * so “কত মিনিট কথা বলেছে” + progress ALWAYS update — even with no API key,
   * a failed AI analysis, or a user who skips the analysis screen. Used to
   * be coupled to runAnalysis(): no key / AI error / early exit meant the
   * entire call was never recorded. runAnalysis() PATCHes the analysis onto
   * this record afterwards. */
  const saveCallSession = useCallback((partnerCount: number) => {
    const deviceId = deviceIdRef.current;
    if (!deviceId || savedSessionRef.current) return;
    const durationSec = durationRef.current;
    const transcript = transcriptRef.current;
    // a <5s silent call carries nothing worth recording — skip junk rows
    if (durationSec < 5 && transcript.length === 0) return;
    const body = JSON.stringify({
      deviceId,
      type: callTypeRef.current,
      // everyone who EVER joined the room counts — a partner who spoke and
      // left before I hung up still talked with me (my own past ids from
      // re-rolls/rejoins are excluded via partnersEverRef)
      partnerCount: Math.max(partnerCount, partnersEverRef.current.size, 0),
      durationSec,
      transcript,
      analysis: {},
    });
    void fetch("/api/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    })
      .then((r) => r.json().catch(() => null))
      .then((j) => {
        if (j?.ok && j.data?.id) savedSessionRef.current = String(j.data.id);
      })
      .catch(() => null);
  }, []);

  const leaveCall = () => {
    recStopRef.current();
    releaseWakeLock();
    const partnerCount = webrtc.remotePeers.length;
    saveCallSession(partnerCount); // progress fix: save BEFORE anything else
    clientRef.current?.leave();
    clientRef.current = null;
    webrtc.cleanup();
    setEndedInfo({ durationSec: duration, partnerCount, type: callTypeRef.current });
    setMode("ended");
  };

  /* ── unmount cleanup: leave + media teardown ──
   * Progress fix: switching tabs / closing the page MID-call used to tear
   * everything down silently — the minutes vanished. The save fires only
   * while a call is actually live, and the savedSessionRef guard makes it
   * a no-op when the call already ended normally. */
  const saveCallRef = useRef(saveCallSession);
  saveCallRef.current = saveCallSession;
  useEffect(() => {
    return () => {
      disposedRef.current = true;
      if (modeRef.current === "call") {
        saveCallRef.current(partnersEverRef.current.size);
      }
      clientRef.current?.leave();
      clientRef.current = null;
      cleanupRef.current();
    };
  }, []);

  /* ── peer connection experience (user request: "একজনের সাথে আরেকজনের
   * কানেকশন এর বিষয়গুলো ভালোভাবে লক্ষ্য করুন") ──
   * 1. The FIRST remote peer to reach "connected" gets a spoken-feel
   *    confirmation toast — the dialer's "call connected" moment.
   * 2. A peer whose sampled quality degrades to "poor" raises ONE toast per
   *    poor-episode ("Rahim-এর নেটওয়ার্ক দুর্বল…"), and a recovery toast
   *    when their link returns to fair/good. The tiny signal badge on the
   *    tile stays as the permanent indicator; toasts only mark transitions. */
  const peerPoorRef = useRef<Map<string, boolean>>(new Map());
  const connectedToastRef = useRef(false);
  useEffect(() => {
    for (const p of webrtc.remotePeers) {
      // first successful peer link of this call → "connected" moment
      if (
        p.connectionState === "connected" &&
        !connectedToastRef.current &&
        modeRef.current === "call"
      ) {
        connectedToastRef.current = true;
        toast({ title: t("peerConnected") });
      }
      // quality transitions → one toast per episode, never spam
      if (p.quality === "poor" && !peerPoorRef.current.get(p.id)) {
        peerPoorRef.current.set(p.id, true);
        toast({ title: t("peerNetPoor", { name: p.name }) });
      } else if (
        (p.quality === "good" || p.quality === "fair") &&
        peerPoorRef.current.get(p.id)
      ) {
        peerPoorRef.current.set(p.id, false);
        toast({ title: t("peerNetOk", { name: p.name }) });
      }
    }
  }, [webrtc.remotePeers, toast, t]);

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
   * at an empty "live" room. Group calls keep the room open for the host.
   * Task 17: NEVER fire while a recovery rejoin is in flight — the empty
   * roster right after a prune is EXPECTED, and killing the call here used
   * to race the rejoin and turn a recoverable 1:1 call into "call ended".
   * When the rejoin settles alone (partner truly gone), the effect re-runs
   * (rejoining is a dependency) and the timer fires normally. */
  useEffect(() => {
    if (mode !== "call" || !oneToOneRef.current) return;
    if (webrtc.remotePeers.length > 0) return;
    if (rejoiningRef.current) return;
    const timer = setTimeout(() => {
      if (modeRef.current !== "call") return;
      if (rejoiningRef.current) return;
      recStopRef.current();
      // progress fix: the partner spoke with us and left — record the call
      // with the number of real partners who were ever here
      saveCallSession(partnersEverRef.current.size);
      clientRef.current?.leave();
      clientRef.current = null;
      cleanupRef.current();
      setEndedInfo({
        durationSec: durationRef.current,
        partnerCount: partnersEverRef.current.size,
        type: callTypeRef.current,
      });
      setMode("ended");
    }, 3_000);
    return () => clearTimeout(timer);
  }, [mode, webrtc.remotePeers.length, rejoining, saveCallSession]);

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
      // progress fix: the call is already auto-saved at end — attach the
      // analysis to THAT record instead of creating a duplicate. If the
      // auto-save never completed (404), fall back to a full POST.
      let attached = false;
      if (savedSessionRef.current) {
        try {
          const patch = await fetch(`/api/sessions/${savedSessionRef.current}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ deviceId, analysis: result }),
          });
          if (patch.ok) attached = true;
        } catch {
          /* fall through to the POST below */
        }
      }
      if (!attached) {
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
      }
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

  /* ── screen share toggle (Task 26-c) ──
   * The hook owns tracks/senders (replaceTrack, 'ended' listener, cleanup);
   * here we only surface failures as friendly localized toasts — a share
   * failure never disturbs the ongoing call. */
  const toggleScreenShare = async () => {
    if (webrtc.sharingScreen) {
      webrtc.stopScreenShare();
      return;
    }
    const res = await webrtc.startScreenShare();
    if (!res.ok) {
      toast({
        title: t(
          res.reason === "unsupported"
            ? "screenShareUnsupported"
            : res.reason === "denied"
              ? "screenShareDenied"
              : "screenShareFailed"
        ),
        variant: "destructive",
      });
    }
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
          netSlow={webrtc.selfNet === "slow"}
          audioOnly={webrtc.audioOnly}
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
          onToggleScreenShare={toggleScreenShare}
          screenStream={webrtc.screenStream}
          sharingScreen={webrtc.sharingScreen}
          onToggleCaptions={() => setCaptionsOpen((v) => !v)}
          onToggleChat={toggleChat}
          onLeave={leaveCall}
          onSendChat={sendChat}
          // Task 27-m: push-to-talk results (browsers without speech
          // recognition) flow through the SAME final-line path as recognition
          // finals — transcript + captions + peer broadcast — so end-of-call
          // analysis keeps working on mobile.
          onPushToTalkFinal={(text) => onFinalLine({ text, at: Date.now() })}
        />

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
          (rec.error || rec.failed) && (
            <p className="rounded-xl border border-amber-200 bg-amber-50/70 px-3 py-2 text-center text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-300">
              {rec.error ?? t("captionsWatchdogFailed")}
            </p>
          )
        )}
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
            {/* progress fix: a 23s call is not "0 min" — short calls show seconds */}
            {(endedInfo?.durationSec ?? 0) < 60
              ? t("endedSummarySec", {
                  seconds: endedInfo?.durationSec ?? 0,
                  count: transcriptCount,
                })
              : t("endedSummary", {
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
