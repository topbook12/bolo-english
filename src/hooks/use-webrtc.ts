"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

// Peer-to-peer video call mesh (Google STUN, free). Signaling is delivered by
// the caller via callbacks (HTTP polling CallClient); media flows directly
// between users — zero server cost.

export interface RemotePeer {
  id: string;
  name: string;
  stream: MediaStream | null;
  connectionState: string;
  /** getStats-derived link quality for the tile's signal badge.
   *  undefined = not sampled yet (badge hidden). */
  quality?: "good" | "fair" | "poor";
}

export type OutgoingSignalType = "offer" | "answer" | "ice";

/** My OWN link health, from the NetworkInformation API (+ offline/online).
 *  "good" = fine/unknown — "slow"/"offline" shows an amber chip on the
 *  call stage while it lasts. */
export type SelfNetState = "good" | "slow" | "offline";

export interface UseWebRTCOpts {
  /** Transport bridge — wire payload is the raw data; CallFlow wraps it into
   *  the {offer|answer|ice} envelope via CallClient.send(type, …). */
  onSendSignal: (type: OutgoingSignalType, data: unknown, to: string) => void;
  /** Returns my current peer id (CallClient.peerId). Used to filter self out
   *  of the roster and pick the deterministic offer initiator (lower id offers). */
  getMyId?: () => string;
  /** Current room context — lets /api/call/ice prove we are inside the room
   *  before it mints TURN credentials (server-side anti-harvest check). */
  getIceContext?: () => { roomId: string; peerId: string } | null;
}

const ICE_SERVERS: RTCIceServer[] = [
  { urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302"] },
];

// TURN credentials must not be baked into the client bundle: the live list
// (STUN + TURN) is served by /api/call/ice at call time. The server only
// mints TURN for callers that prove they are inside the room (roomId+peerId),
// so we pass the current room context along.
// Cache policy (audit fix — one failed fetch used to poison the WHOLE browser
// session with STUN-only): successful responses are kept for 10 minutes;
// failures are NEVER cached — the very next ensurePC retries the fetch.
const ICE_CACHE_MS = 10 * 60 * 1000;
let iceCache: { servers: RTCIceServer[]; expires: number } | null = null;

async function getIceServers(
  ctx: { roomId: string; peerId: string } | null
): Promise<RTCIceServer[]> {
  if (iceCache && iceCache.expires > Date.now()) return iceCache.servers;
  try {
    const q = ctx
      ? `?roomId=${encodeURIComponent(ctx.roomId)}&peerId=${encodeURIComponent(ctx.peerId)}`
      : "";
    const res = await fetch(`/api/call/ice${q}`, { cache: "no-store" });
    const json = await res.json().catch(() => null);
    const list = json?.data?.iceServers;
    if (Array.isArray(list) && list.length > 0) {
      iceCache = { servers: list as RTCIceServer[], expires: Date.now() + ICE_CACHE_MS };
      return iceCache.servers;
    }
  } catch {
    /* offline / endpoint missing — STUN-only below still applies */
  }
  return ICE_SERVERS;
}

// How long a peer may sit in "connecting" before we try to recover (ms)
const STUCK_CONNECT_MS = 12_000;
// How long "disconnected" may persist before we restart ICE (ms)
const DISCONNECT_RECOVER_MS = 10_000;
// Minimum gap between recovery attempts on the same peer (ms)
const RECOVERY_THROTTLE_MS = 8_000;

/* ── network quality sampling (audit P2-2 — the "loose connection" radar) ──
 * connectionState alone cannot see heavy packet loss / rising RTT that keeps
 * the PC "connected". Every 4s we sample the nominated candidate pair (RTT)
 * and the video inbound stream (packet-loss DELTA since the previous sample):
 *   good  — RTT ≤ 350ms and loss < 4%
 *   fair  — RTT ≤ 700ms and loss < 10%
 *   poor  — anything worse
 * Sustained poor (3 samples ≈ 12s) escalates into the ICE-restart recovery
 * ladder (throttled by RECOVERY_THROTTLE_MS). */
type QualityLevel = "good" | "fair" | "poor";
const QUALITY_SAMPLE_MS = 4_000;
const POOR_ESCALATE_STREAK = 3;

interface QualitySample {
  level: QualityLevel;
  poorStreak: number;
  lastLost: number;
  lastRecv: number;
  hasData: boolean;
}

export function useWebRTC({ onSendSignal, getMyId, getIceContext }: UseWebRTCOpts) {
  const t = useTranslations("call");
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remotePeers, setRemotePeers] = useState<RemotePeer[]>([]);
  const [mediaError, setMediaError] = useState<string | null>(null);
  /** Camera could not be opened but the mic works — the call continues
   *  audio-only (audit P2-9) instead of blocking the conversation. */
  const [audioOnly, setAudioOnly] = useState(false);
  /** My own link health — drives the amber "your network is slow" chip. */
  const [selfNet, setSelfNet] = useState<SelfNetState>("good");

  const localStreamRef = useRef<MediaStream | null>(null);
  // In-flight getUserMedia promise — initLocal is safe to call concurrently
  // (two PCs created at once must never open the camera twice).
  const mediaInitRef = useRef<Promise<MediaStream> | null>(null);
  const pcsRef = useRef<Map<string, RTCPeerConnection>>(new Map());
  // In-flight PC constructions — ensurePC must never build two PCs for the
  // same peer (two concurrent triggers used to both pass the `existing` check
  // during the ICE-config await and orphan a live PeerConnection).
  const pendingPCRef = useRef<Map<string, Promise<RTCPeerConnection>>>(new Map());
  const pendingIceRef = useRef<Map<string, RTCIceCandidateInit[]>>(new Map());
  // Exotic browsers deliver ontrack without e.streams — merge those tracks
  // per peer so the tile keeps BOTH audio and video (last event used to win,
  // which could leave an audio-only black tile).
  const streamlessRef = useRef<Map<string, MediaStream>>(new Map());
  const namesRef = useRef<Map<string, string>>(new Map());
  const myIdRef = useRef<string>("");
  // quality sampler bookkeeping (audit P2-2)
  const qualityRef = useRef<Map<string, QualitySample>>(new Map());
  // watchdog bookkeeping
  const pcCreatedRef = useRef<Map<string, number>>(new Map());
  const disconnectedAtRef = useRef<Map<string, number>>(new Map());
  const lastRecoveryRef = useRef<Map<string, number>>(new Map());

  const sendRef = useRef(onSendSignal);
  const getMyIdRef = useRef(getMyId);
  const getIceContextRef = useRef(getIceContext);
  useEffect(() => {
    sendRef.current = onSendSignal;
    getMyIdRef.current = getMyId;
    getIceContextRef.current = getIceContext;
  });

  /* ── my own link health (NetworkInformation API, best-effort) ──
   * The quality badge watches the REMOTE side of each link; this watches MY
   * side (the user asked to see connection trouble from both ends). 2G class
   * links, tiny downlink, huge RTT, or a dropped connection all surface as
   * "slow"/"offline" instantly — no 4s sampler wait needed. */
  const readNet = useCallback((): SelfNetState => {
    if (typeof navigator === "undefined") return "good";
    if (navigator.onLine === false) return "offline";
    const conn = (navigator as Navigator & {
      connection?: { effectiveType?: string; downlink?: number; rtt?: number };
    }).connection;
    if (conn) {
      if (conn.effectiveType === "slow-2g" || conn.effectiveType === "2g") return "slow";
      if (typeof conn.downlink === "number" && conn.downlink > 0 && conn.downlink < 0.5) return "slow";
      if (typeof conn.rtt === "number" && conn.rtt > 900) return "slow";
    }
    return "good";
  }, []);

  useEffect(() => {
    const apply = () => setSelfNet(readNet());
    apply();
    window.addEventListener("online", apply);
    window.addEventListener("offline", apply);
    const conn = (navigator as Navigator & {
      connection?: EventTarget;
    }).connection;
    conn?.addEventListener?.("change", apply);
    return () => {
      window.removeEventListener("online", apply);
      window.removeEventListener("offline", apply);
      conn?.removeEventListener?.("change", apply);
    };
  }, [readNet]);

  /* ── local media ── */
  const initLocal = useCallback(async () => {
    if (localStreamRef.current) return localStreamRef.current;
    if (!mediaInitRef.current) {
      mediaInitRef.current = (async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
          // 720p ideal: on laptop/desktop the call tiles are large, so 640×480
          // looked soft. Chrome's bandwidth estimation downscales the sender
          // automatically on weak mobile links, so this stays safe there too.
          video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: { echoCancellation: true, noiseSuppression: true },
        });
        localStreamRef.current = stream;
        setLocalStream(stream);
        setMediaError(null);
        return stream;
      })().catch(async (e) => {
        // Camera busy/absent/broken (audit P2-9): degrade to an audio-only
        // call rather than blocking the whole conversation. A permission
        // denial (NotAllowedError) never falls back — the mic would fail too.
        const name = (e as Error).name;
        if (
          name === "NotReadableError" ||
          name === "OverconstrainedError" ||
          name === "NotFoundError" ||
          name === "TrackStartError"
        ) {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({
              audio: { echoCancellation: true, noiseSuppression: true },
              video: false,
            });
            localStreamRef.current = stream;
            setLocalStream(stream);
            setAudioOnly(true);
            setMediaError(null);
            return stream;
          } catch {
            /* mic unusable too — surface the original error below */
          }
        }
        mediaInitRef.current = null; // allow a retry after the error
        const msg =
          name === "NotAllowedError" ? t("mediaDenied") : t("mediaMissing");
        setMediaError(msg);
        throw e;
      });
    }
    return mediaInitRef.current;
  }, [t]);

  /* ── peer connection helpers ── */
  const updatePeer = useCallback(
    (id: string, patch: Partial<RemotePeer>) => {
      setRemotePeers((prev) => {
        const idx = prev.findIndex((p) => p.id === id);
        if (idx === -1) {
          return [
            ...prev,
            {
              id,
              name: namesRef.current.get(id) ?? t("partnerFallback"),
              stream: null,
              connectionState: "new",
              ...patch,
            },
          ];
        }
        // no-churn guard: a patch that changes nothing must not re-render
        // (the quality sampler runs every 4s for every connected peer)
        const cur = prev[idx];
        let changed = false;
        for (const k of Object.keys(patch) as (keyof RemotePeer)[]) {
          if (cur[k] !== patch[k]) {
            changed = true;
            break;
          }
        }
        if (!changed) return prev;
        const next = [...prev];
        next[idx] = { ...cur, ...patch };
        return next;
      });
    },
    [t]
  );

  const drainIce = useCallback(async (pc: RTCPeerConnection, id: string) => {
    const list = pendingIceRef.current.get(id);
    if (!list) return;
    for (const c of list) {
      try {
        await pc.addIceCandidate(c);
      } catch {
        /* ignore */
      }
    }
    pendingIceRef.current.delete(id);
  }, []);

  /* ── recovery: re-send our offer or restart ICE ──
   * A dropped offer/answer (silent send failure on a flaky link) leaves the
   * PC hanging in have-local-offer/stable forever — "failed" never fires.
   * recoverPeer covers both: re-send the pending offer, or restart ICE and
   * re-offer from stable. Glare is resolved by the rollback logic in
   * handleSignal (lower peer id wins). */
  const recoverPeer = useCallback(
    (peerId: string, pc: RTCPeerConnection) => {
      const now = Date.now();
      const last = lastRecoveryRef.current.get(peerId) ?? 0;
      if (now - last < RECOVERY_THROTTLE_MS) return;
      lastRecoveryRef.current.set(peerId, now);
      void (async () => {
        try {
          if (pc.signalingState === "have-local-offer" && pc.localDescription) {
            // our original offer probably never arrived. Resend it, but ALSO
            // re-create the offer with iceRestart so a genuinely half-dead
            // ICE agent gets fresh credentials (a bare resend could loop
            // forever when the first offer DID arrive and the network died
            // before the answer).
            try {
              const restartOffer = await pc.createOffer({ iceRestart: true });
              await pc.setLocalDescription(restartOffer);
              sendRef.current("offer", restartOffer, peerId);
              return;
            } catch {
              /* older engines: fall back to a plain resend */
              sendRef.current(
                "offer",
                { type: pc.localDescription.type, sdp: pc.localDescription.sdp },
                peerId
              );
            }
          } else if (pc.signalingState === "stable") {
            // Offer even without a remote description: if the other side's
            // offer never arrived, both peers used to wait for each other
            // forever. Glare (both offer at once) is resolved by the rollback
            // logic in handleSignal (lower peer id wins).
            pc.restartIce();
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);
            sendRef.current("offer", offer, peerId);
          }
        } catch {
          /* next tick / user can rejoin */
        }
      })();
    },
    []
  );

  /* ── network came back → recover every ailing link NOW ──
   * The watchdog nudges stuck peers every 4s, but when the user's own wifi
   * drops and returns, every PC sits "failed"/"disconnected" — waiting for
   * the next tick wastes seconds. The online event fires the recovery ladder
   * immediately (it stays throttled per peer, so double-firing is safe). */
  useEffect(() => {
    const onOnline = () => {
      for (const [peerId, pc] of Array.from(pcsRef.current.entries())) {
        if (pc.connectionState === "failed" || pc.connectionState === "disconnected") {
          recoverPeer(peerId, pc);
        }
      }
    };
    window.addEventListener("online", onOnline);
    return () => window.removeEventListener("online", onOnline);
  }, [recoverPeer]);

  const ensurePC = useCallback(
    async (peerId: string): Promise<RTCPeerConnection> => {
      const existing = pcsRef.current.get(peerId);
      if (existing) return existing;

      // Reserve the slot SYNCHRONOUSLY (before any await): concurrent callers
      // now share one construction promise instead of duplicating the PC.
      const pending = pendingPCRef.current.get(peerId);
      if (pending) return pending;

      const creating = (async () => {
        const iceServers = await getIceServers(getIceContextRef.current?.() ?? null).catch(
          () => ICE_SERVERS
        );
        const pc = new RTCPeerConnection({ iceServers });
        pcsRef.current.set(peerId, pc);
        pcCreatedRef.current.set(peerId, Date.now());
        disconnectedAtRef.current.delete(peerId);
        lastRecoveryRef.current.delete(peerId);

        // add local tracks — never create a trackless PC: if media isn't ready
        // yet, wait for it (a PC without our tracks would answer with empty SDP
        // and the partner would stare at a black tile forever).
        const stream = await initLocal();
        for (const track of stream.getTracks()) pc.addTrack(track, stream);

        // Sender tuning (audit P2-11) — cheap wins on weak mobile links:
        // content hints tell the encoder what matters (speech vs motion) and
        // explicit bitrate caps stop one peer from starving the mesh.
        for (const sender of pc.getSenders()) {
          const kind = sender.track?.kind;
          if (kind) {
            try {
              sender.track.contentHint = kind === "video" ? "motion" : "speech";
            } catch {
              /* engine without contentHint — harmless */
            }
          }
          try {
            const p = sender.getParameters();
            if (!p.encodings || p.encodings.length === 0) p.encodings = [{}];
            p.encodings[0].maxBitrate = kind === "video" ? 800_000 : 40_000;
            void sender.setParameters(p).catch(() => undefined);
          } catch {
            /* engine without encodings — auto bitrate stays */
          }
        }

        pc.onicecandidate = (e) => {
          if (e.candidate) sendRef.current("ice", e.candidate.toJSON(), peerId);
        };

        pc.ontrack = (e) => {
          const incoming = e.streams[0];
          if (incoming) {
            updatePeer(peerId, { stream: incoming });
            return;
          }
          const merged = streamlessRef.current.get(peerId) ?? new MediaStream();
          if (!merged.getTracks().includes(e.track)) merged.addTrack(e.track);
          streamlessRef.current.set(peerId, merged);
          updatePeer(peerId, { stream: new MediaStream(merged.getTracks()) });
        };

        pc.onconnectionstatechange = () => {
          updatePeer(peerId, { connectionState: pc.connectionState });
          if (pc.connectionState === "disconnected") {
            if (!disconnectedAtRef.current.has(peerId)) {
              disconnectedAtRef.current.set(peerId, Date.now());
            }
          } else {
            disconnectedAtRef.current.delete(peerId);
          }
          if (pc.connectionState === "failed") {
            // real recovery: flag ICE restart and re-negotiate from stable state
            void recoverPeer(peerId, pc);
          }
        };

        return pc;
      })();

      pendingPCRef.current.set(peerId, creating);
      try {
        return await creating;
      } catch (e) {
        // allow a retry on the next trigger
        pcsRef.current.delete(peerId);
        throw e;
      } finally {
        pendingPCRef.current.delete(peerId);
      }
    },
    [updatePeer, recoverPeer, initLocal]
  );

  /* ── stuck-connection watchdog ──
   * On CGNAT/flaky networks a PC can sit in "new"/"connecting" forever, or
   * silently flap to "disconnected" without ever failing. Nudge those peers
   * periodically until media actually connects. */
  useEffect(() => {
    const iv = setInterval(() => {
      const now = Date.now();
      for (const [peerId, pc] of Array.from(pcsRef.current.entries())) {
        const state = pc.connectionState;
        const discAt = disconnectedAtRef.current.get(peerId);
        const stuckConnecting =
          (state === "new" || state === "connecting") &&
          now - (pcCreatedRef.current.get(peerId) ?? now) > STUCK_CONNECT_MS;
        const stuckDisconnected =
          state === "disconnected" &&
          discAt !== undefined &&
          now - discAt > DISCONNECT_RECOVER_MS;
        if (stuckConnecting || stuckDisconnected) {
          recoverPeer(peerId, pc);
        }
      }
    }, 4_000);
    return () => clearInterval(iv);
  }, [recoverPeer]);

  /* ── quality sampler (audit P2-2) — RTT + packet-loss delta per peer ── */
  const samplePeerQuality = useCallback(
    async (peerId: string, pc: RTCPeerConnection) => {
      if (pc.connectionState !== "connected") {
        // link is down — reset the streak; the recovery ladder owns reconnection
        const prev = qualityRef.current.get(peerId);
        if (prev && (prev.poorStreak > 0 || prev.hasData)) {
          qualityRef.current.set(peerId, {
            ...prev,
            poorStreak: 0,
            lastLost: -1,
            lastRecv: -1,
            hasData: false,
          });
          updatePeer(peerId, { quality: undefined });
        }
        return;
      }
      try {
        const stats = await pc.getStats();
        let rtt: number | undefined;
        let lost = 0;
        let recv = 0;
        stats.forEach((r) => {
          if (
            r.type === "candidate-pair" &&
            r.state === "succeeded" &&
            (r.nominated || r.selected)
          ) {
            const v = (r as { currentRoundTripTime?: number }).currentRoundTripTime;
            if (typeof v === "number") rtt = v;
          }
          if (r.type === "inbound-rtp" && (r as { kind?: string }).kind === "video") {
            const l = (r as { packetsLost?: number }).packetsLost;
            const p = (r as { packetsReceived?: number }).packetsReceived;
            lost += typeof l === "number" && l > 0 ? l : 0;
            recv += typeof p === "number" ? p : 0;
          }
        });
        const prev =
          qualityRef.current.get(peerId) ??
          { level: "good" as QualityLevel, poorStreak: 0, lastLost: -1, lastRecv: -1, hasData: false };
        // loss ratio within this sample window (deltas, not lifetime averages)
        let lossPct = 0;
        if (prev.hasData && recv >= prev.lastRecv && lost >= prev.lastLost) {
          const dLost = lost - prev.lastLost;
          const dRecv = recv - prev.lastRecv;
          if (dLost + dRecv > 20) lossPct = dLost / (dLost + dRecv);
        }
        let level: QualityLevel = "good";
        if ((rtt !== undefined && rtt > 0.7) || lossPct >= 0.1) level = "poor";
        else if ((rtt !== undefined && rtt > 0.35) || lossPct >= 0.04) level = "fair";
        const hasData = prev.hasData || recv > 0;
        const next: QualitySample = {
          level,
          poorStreak: level === "poor" ? prev.poorStreak + 1 : 0,
          lastLost: lost,
          lastRecv: recv,
          hasData,
        };
        qualityRef.current.set(peerId, next);
        // sustained degradation → real recovery (throttled internally)
        if (level === "poor" && next.poorStreak >= POOR_ESCALATE_STREAK) {
          recoverPeer(peerId, pc);
        }
        // only surface the badge once there is inbound data to judge
        updatePeer(peerId, { quality: hasData ? level : undefined });
      } catch {
        /* getStats unavailable — badge just stays hidden */
      }
    },
    [recoverPeer, updatePeer]
  );

  useEffect(() => {
    const iv = setInterval(() => {
      for (const [peerId, pc] of Array.from(pcsRef.current.entries())) {
        void samplePeerQuality(peerId, pc);
      }
    }, QUALITY_SAMPLE_MS);
    return () => clearInterval(iv);
  }, [samplePeerQuality]);

  const closePC = useCallback(
    (peerId: string) => {
      const pc = pcsRef.current.get(peerId);
      if (pc) {
        pc.onicecandidate = null;
        pc.ontrack = null;
        pc.onconnectionstatechange = null;
        try {
          pc.close();
        } catch {
          /* noop */
        }
      }
      pcsRef.current.delete(peerId);
      pendingIceRef.current.delete(peerId);
      streamlessRef.current.delete(peerId);
      pcCreatedRef.current.delete(peerId);
      disconnectedAtRef.current.delete(peerId);
      lastRecoveryRef.current.delete(peerId);
      qualityRef.current.delete(peerId);
      setRemotePeers((prev) => prev.filter((p) => p.id !== peerId));
    },
    []
  );

  /* ── roster changes (from CallClient.onPeers) ── */
  const handleRoomState = useCallback(
    (peers: { id: string; name: string }[]) => {
      const myId = getMyIdRef.current?.() ?? myIdRef.current;
      myIdRef.current = myId;
      const theirIds = peers.map((p) => p.id).filter((id) => id && id !== myId);
      namesRef.current = new Map(peers.map((p) => [p.id, p.name]));

      // remove stale peers
      for (const id of Array.from(pcsRef.current.keys())) {
        if (!theirIds.includes(id)) closePC(id);
      }
      setRemotePeers((prev) => prev.filter((p) => theirIds.includes(p.id)));

      theirIds.forEach((id) => {
        if (!pcsRef.current.has(id)) {
          updatePeer(id, { name: namesRef.current.get(id) });
          // deterministic initiator: lower peer id offers (avoids glare)
          if (myId && myId < id) {
            void (async () => {
              try {
                const pc = await ensurePC(id);
                if (pc.signalingState !== "stable") return;
                const offer = await pc.createOffer();
                await pc.setLocalDescription(offer);
                sendRef.current("offer", offer, id);
              } catch {
                /* retry on next roster update */
              }
            })();
          } else {
            // will answer when their offer arrives
            void ensurePC(id).catch(() => null);
          }
        } else {
          updatePeer(id, { name: namesRef.current.get(id) });
        }
      });
    },
    [ensurePC, closePC, updatePeer]
  );

  /* ── signal handling (payload = {offer|answer|ice} envelope) ──
   * Defensive: also accepts BARE payloads ({type:"offer",sdp} / candidate) —
   * a sender that skips the envelope bridge used to be swallowed SILENTLY
   * here ("connected" call, permanently black remote tile). */
  const handleSignal = useCallback(
    async (from: string, data: unknown) => {
      const raw = (data ?? {}) as {
        offer?: RTCSessionDescriptionInit;
        answer?: RTCSessionDescriptionInit;
        ice?: RTCIceCandidateInit;
        type?: string;
        sdp?: string;
        candidate?: string;
      };
      const d = {
        offer:
          raw.offer ?? (raw.type === "offer" && raw.sdp ? (raw as RTCSessionDescriptionInit) : undefined),
        answer:
          raw.answer ?? (raw.type === "answer" && raw.sdp ? (raw as RTCSessionDescriptionInit) : undefined),
        ice: raw.ice ?? (raw.candidate ? (raw as RTCIceCandidateInit) : undefined),
      };
      if (!d.offer && !d.answer && !d.ice) {
        console.warn("unrecognized call signal dropped", typeof data);
        return;
      }
      try {
        if (d.offer) {
          const pc = await ensurePC(from);
          // If we also made an offer (glare), rollback to answer — unless ours wins
          if (pc.signalingState !== "stable") {
            if (myIdRef.current && myIdRef.current < from) return; // our offer wins
            try {
              await pc.setLocalDescription({ type: "rollback" } as RTCSessionDescriptionInit);
            } catch {
              /* noop */
            }
          }
          await pc.setRemoteDescription(d.offer);
          await drainIce(pc, from);
          const answer = await pc.createAnswer();
          await pc.setLocalDescription(answer);
          sendRef.current("answer", answer, from);
        } else if (d.answer) {
          const pc = pcsRef.current.get(from);
          if (pc && pc.signalingState === "have-local-offer") {
            await pc.setRemoteDescription(d.answer);
            await drainIce(pc, from);
          }
        } else if (d.ice) {
          const pc = pcsRef.current.get(from);
          if (pc && pc.remoteDescription) {
            try {
              await pc.addIceCandidate(d.ice);
            } catch {
              /* ignore */
            }
          } else {
            const list = pendingIceRef.current.get(from) ?? [];
            list.push(d.ice);
            pendingIceRef.current.set(from, list);
          }
        }
      } catch (e) {
        console.warn("signal error", e);
      }
    },
    [ensurePC, drainIce]
  );

  /* ── a peer left the call ── */
  const handleBye = useCallback(
    (peerId: string) => {
      closePC(peerId);
    },
    [closePC]
  );

  /* ── controls ── */
  const toggleMic = useCallback((on: boolean) => {
    localStreamRef.current?.getAudioTracks().forEach((t) => (t.enabled = on));
  }, []);
  const toggleCam = useCallback((on: boolean) => {
    localStreamRef.current?.getVideoTracks().forEach((t) => (t.enabled = on));
  }, []);

  const cleanup = useCallback(() => {
    for (const id of Array.from(pcsRef.current.keys())) closePC(id);
    localStreamRef.current?.getTracks().forEach((t) => t.stop());
    localStreamRef.current = null;
    mediaInitRef.current = null;
    qualityRef.current.clear();
    setLocalStream(null);
    setRemotePeers([]);
    setAudioOnly(false);
  }, [closePC]);

  useEffect(() => cleanup, [cleanup]);

  return {
    localStream,
    remotePeers,
    mediaError,
    audioOnly,
    selfNet,
    initLocal,
    handleRoomState,
    handleSignal,
    handleBye,
    toggleMic,
    toggleCam,
    cleanup,
    hasRemote: remotePeers.length > 0,
  };
}
