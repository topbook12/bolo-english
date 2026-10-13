"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Loader2,
  Wand2,
  Sparkles,
  Mic,
  Timer,
  PhoneMissed,
  CameraOff,
  RefreshCw,
  WifiOff,
  Lightbulb,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useDevice } from "@/hooks/use-device";
import { useWebRTC } from "@/hooks/use-webrtc";
import { useSpeechRecognition, type FinalLine } from "@/hooks/use-speech-recognition";
import { useToast } from "@/hooks/use-toast";
import { callAi } from "@/lib/client-api";
import { CallClient } from "@/lib/call-client";
import CallRoom from "@/components/speaking/CallRoom";
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
  });

  // captions + transcript
  const [captions, setCaptions] = useState<CaptionItem[]>([]);
  const [captionsOpen, setCaptionsOpen] = useState(true);
  const transcriptRef = useRef<TranscriptLine[]>([]);
  const [transcriptCount, setTranscriptCount] = useState(0);
  const myLinesRef = useRef<string[]>([]);

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

  const recStopRef = useRef<() => void>(() => null);
  const cleanupRef = useRef<() => void>(() => null);
  cleanupRef.current = webrtc.cleanup;

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
    setTranscriptCount(0);
    setAnalysis(null);
    setMode("call");
    recStartRef.current();
  }, []);

  /* ── speech recognition → transcript + caption broadcast ── */
  const onFinalLine = useCallback(
    (line: FinalLine) => {
      const speaker = nameRef.current || tc("you");
      transcriptRef.current = [...transcriptRef.current, { speaker, text: line.text, at: line.at }];
      myLinesRef.current = [...myLinesRef.current, line.text];
      setTranscriptCount(transcriptRef.current.length);
      setCaptions((prev) =>
        [...prev, { speaker, text: line.text, mine: true, final: true, at: line.at }].slice(-60)
      );
      clientRef.current?.send("caption", { text: line.text, speaker });
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
      peerNamesRef.current = new Map(result.peers.map((p) => [p.peerId, p.name]));

      client.onPeers((peers) => {
        peerNamesRef.current = new Map(peers.map((p) => [p.peerId, p.name]));
        webrtc.handleRoomState(peers.map((p) => ({ id: p.peerId, name: p.name })));
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
          const p = m.payload as { text?: unknown; speaker?: unknown };
          const text = typeof p?.text === "string" ? p.text : "";
          if (text) {
            const speaker = typeof p.speaker === "string" && p.speaker ? p.speaker : tc("partner");
            setCaptions((prev) =>
              [...prev, { speaker, text, mine: false, final: true, at: Date.now() }].slice(-60)
            );
            transcriptRef.current = [...transcriptRef.current, { speaker, text, at: Date.now() }];
            setTranscriptCount(transcriptRef.current.length);
          }
          return;
        }
        if (m.type === "chat") {
          const p = m.payload as { text?: unknown; speaker?: unknown };
          const text = typeof p?.text === "string" ? p.text : "";
          if (text) {
            const speaker = typeof p.speaker === "string" && p.speaker ? p.speaker : tc("partner");
            setChatMessages((prev) => [...prev, { speaker, text, mine: false }]);
            if (!chatOpenRef.current) setUnreadChat((u) => u + 1);
          }
          return;
        }
        // offer | answer | ice → payload is the {offer|answer|ice} envelope
        void webrtc.handleSignal(m.from, m.payload);
      });

      client.onClosed(() => {
        toast({ title: t("roomClosedTitle"), description: t("roomClosedDesc"), variant: "destructive" });
        recStopRef.current();
        clientRef.current = null;
        cleanupRef.current();
        onExit();
      });

      client.onConnectionIssue((issue) => setConnectionIssue(issue));

      // seed the roster with what the server already knows
      webrtc.handleRoomState(result.peers.map((p) => ({ id: p.peerId, name: p.name })));

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
  }, [intent, code, webrtc, enterCall, toast, t, tc, onExit]);

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

  /* ── live AI correction loop (first check @12s, then every 30s) ── */
  useEffect(() => {
    if (!liveCorrection || mode !== "call" || !hasKey) return;
    const run = async () => {
      const lines = myLinesRef.current.slice(-14);
      if (lines.length < 2 || !deviceIdRef.current) return;
      setChecking(true);
      try {
        const res = await callAi<RealtimeCorrections>(deviceIdRef.current, "realtime-correction", {
          lines,
        });
        if (res.corrections?.length) {
          setCorrections((prev) => [{ ...res, at: Date.now() }, ...prev].slice(0, 5));
        }
      } catch {
        /* silent — live correction is best-effort */
      } finally {
        setChecking(false);
      }
    };
    const iv = setInterval(run, 30_000);
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
        myName,
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
    setChatMessages((prev) => [...prev, { speaker: myName, text, mine: true }]);
    clientRef.current?.send("chat", { text, speaker: myName });
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
      <div className="mx-auto flex max-w-md flex-col items-center gap-6 py-16 text-center">
        <div className="relative">
          <Loader2 className={`h-16 w-16 animate-spin text-primary ${joining ? "opacity-100" : "opacity-90"}`} />
          <Mic className="absolute -right-1 -top-1 h-6 w-6 live-dot text-amber-500" />
        </div>
        <div>
          <h2 className="text-xl font-bold">
            {joining ? t("joining") : intent === "one" ? t("waitingTitle") : t("waitingTitle")}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{t("waitingDesc")}</p>
          {connectionIssue && (
            <Badge className="mt-3 animate-pulse gap-1 border-transparent bg-amber-500/15 text-amber-700 dark:text-amber-400">
              <WifiOff className="h-3 w-3" /> {t("reconnecting")}
            </Badge>
          )}
        </div>

        {/* camera-denied friendly alert with retry */}
        {webrtc.mediaError && (
          <Alert className="w-full border-amber-200 bg-amber-50/70 text-left dark:border-amber-900 dark:bg-amber-950/30">
            <CameraOff className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle>{t("cameraTitle")}</AlertTitle>
            <AlertDescription>
              <p>{webrtc.mediaError || t("cameraDesc")}</p>
              <Button
                size="sm"
                onClick={retryMedia}
                className="mt-2 min-h-11 gap-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 px-4 text-white hover:from-emerald-600 hover:to-teal-700"
              >
                <RefreshCw className="h-3.5 w-3.5" /> {tc("retry")}
              </Button>
            </AlertDescription>
          </Alert>
        )}

        <Card className="w-full bg-muted/50">
          <CardContent className="p-4 text-left text-sm text-muted-foreground">
            <p className="flex items-center gap-1.5 font-medium text-foreground">
              <Lightbulb className="h-4 w-4 text-amber-500" /> {t("tipsTitle")}
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>{t("tip1")}</li>
              <li>{t("tip2")}</li>
              <li>{t("tip3")}</li>
            </ul>
          </CardContent>
        </Card>
        <Button variant="destructive" onClick={cancelMatching} className="min-h-11 px-6">
          {t("cancelMatching")}
        </Button>
      </div>
    );
  }

  if (mode === "call") {
    return (
      <div className="mx-auto max-w-3xl space-y-3">
        <CallRoom
          localStream={webrtc.localStream}
          remotePeers={webrtc.remotePeers}
          displayName={myName}
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
          onToggleChat={toggleChat}
          onLeave={leaveCall}
          onSendChat={sendChat}
        >
          {/* live correction toggle slot */}
          <div className="flex h-12 items-center gap-2 rounded-full bg-secondary px-3.5">
            <Wand2 className={`h-4 w-4 ${liveCorrection ? "text-primary" : "text-muted-foreground"}`} />
            <Switch
              checked={liveCorrection}
              onCheckedChange={setLiveCorrection}
              aria-label={t("liveCorrection")}
            />
          </div>
        </CallRoom>

        {/* interim own caption */}
        {rec.listening && rec.interim && (
          <p className="caption-text mx-auto max-w-lg rounded-lg bg-black/70 px-3 py-1.5 text-center text-sm text-white">
            {rec.interim}
          </p>
        )}
        {rec.error && <p className="text-center text-xs text-destructive">{rec.error}</p>}

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
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-500/10 text-rose-500">
            <PhoneMissed className="h-7 w-7" />
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
              className="min-h-11 w-full gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700"
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
