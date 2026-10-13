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
}

export type OutgoingSignalType = "offer" | "answer" | "ice";

export interface UseWebRTCOpts {
  /** Transport bridge — wire payload is the raw data; CallFlow wraps it into
   *  the {offer|answer|ice} envelope via CallClient.send(type, …). */
  onSendSignal: (type: OutgoingSignalType, data: unknown, to: string) => void;
  /** Returns my current peer id (CallClient.peerId). Used to filter self out
   *  of the roster and pick the deterministic offer initiator (lower id offers). */
  getMyId?: () => string;
}

const ICE_SERVERS: RTCIceServer[] = [
  { urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302"] },
  // Free TURN (metered.ca — the OpenRelay successor). The original
  // openrelay.metered.ca now resolves to a black-hole (100::1) and its ports
  // are dead, so with STUN alone the call silently never connected on
  // symmetric-NAT / carrier-CGNAT networks (the norm on mobile data in
  // Bangladesh): both peers joined the room, ICE never found a path, and the
  // partner tile sat on "connecting…" with no face. Verified live: 80/443/3478
  // reachable on standard.relay.metered.ca.
  {
    urls: [
      "turn:standard.relay.metered.ca:80",
      "turn:standard.relay.metered.ca:80?transport=tcp",
      "turn:standard.relay.metered.ca:443",
      "turn:standard.relay.metered.ca:443?transport=tcp",
    ],
    username: "e8dd651bbe22f4a616b1c04f",
    credential: "MakTy9FvEZjSyZ2o",
  },
];

// How long a peer may sit in "connecting" before we try to recover (ms)
const STUCK_CONNECT_MS = 12_000;
// How long "disconnected" may persist before we restart ICE (ms)
const DISCONNECT_RECOVER_MS = 10_000;
// Minimum gap between recovery attempts on the same peer (ms)
const RECOVERY_THROTTLE_MS = 8_000;

export function useWebRTC({ onSendSignal, getMyId }: UseWebRTCOpts) {
  const t = useTranslations("call");
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remotePeers, setRemotePeers] = useState<RemotePeer[]>([]);
  const [mediaError, setMediaError] = useState<string | null>(null);

  const localStreamRef = useRef<MediaStream | null>(null);
  // In-flight getUserMedia promise — initLocal is safe to call concurrently
  // (two PCs created at once must never open the camera twice).
  const mediaInitRef = useRef<Promise<MediaStream> | null>(null);
  const pcsRef = useRef<Map<string, RTCPeerConnection>>(new Map());
  const pendingIceRef = useRef<Map<string, RTCIceCandidateInit[]>>(new Map());
  // Exotic browsers deliver ontrack without e.streams — merge those tracks
  // per peer so the tile keeps BOTH audio and video (last event used to win,
  // which could leave an audio-only black tile).
  const streamlessRef = useRef<Map<string, MediaStream>>(new Map());
  const namesRef = useRef<Map<string, string>>(new Map());
  const myIdRef = useRef<string>("");
  // watchdog bookkeeping
  const pcCreatedRef = useRef<Map<string, number>>(new Map());
  const disconnectedAtRef = useRef<Map<string, number>>(new Map());
  const lastRecoveryRef = useRef<Map<string, number>>(new Map());

  const sendRef = useRef(onSendSignal);
  const getMyIdRef = useRef(getMyId);
  useEffect(() => {
    sendRef.current = onSendSignal;
    getMyIdRef.current = getMyId;
  });

  /* ── local media ── */
  const initLocal = useCallback(async () => {
    if (localStreamRef.current) return localStreamRef.current;
    if (!mediaInitRef.current) {
      mediaInitRef.current = (async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user", width: { ideal: 640 }, height: { ideal: 480 } },
          audio: { echoCancellation: true, noiseSuppression: true },
        });
        localStreamRef.current = stream;
        setLocalStream(stream);
        setMediaError(null);
        return stream;
      })().catch((e) => {
        mediaInitRef.current = null; // allow a retry after the error
        const msg =
          (e as Error).name === "NotAllowedError"
            ? t("mediaDenied")
            : t("mediaMissing");
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
        const next = [...prev];
        next[idx] = { ...next[idx], ...patch };
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
            // our original offer probably never arrived — resend it
            sendRef.current(
              "offer",
              { type: pc.localDescription.type, sdp: pc.localDescription.sdp },
              peerId
            );
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

  const ensurePC = useCallback(
    async (peerId: string): Promise<RTCPeerConnection> => {
      const existing = pcsRef.current.get(peerId);
      if (existing) return existing;

      const pc = new RTCPeerConnection({ iceServers: ICE_SERVERS });
      pcsRef.current.set(peerId, pc);
      pcCreatedRef.current.set(peerId, Date.now());
      disconnectedAtRef.current.delete(peerId);
      lastRecoveryRef.current.delete(peerId);

      // add local tracks — never create a trackless PC: if media isn't ready
      // yet, wait for it (a PC without our tracks would answer with empty SDP
      // and the partner would stare at a black tile forever).
      const stream = await initLocal();
      for (const track of stream.getTracks()) pc.addTrack(track, stream);

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
    setLocalStream(null);
    setRemotePeers([]);
  }, [closePC]);

  useEffect(() => cleanup, [cleanup]);

  return {
    localStream,
    remotePeers,
    mediaError,
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
