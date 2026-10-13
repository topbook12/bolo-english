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
  { urls: "stun:stun.l.google.com:19302" },
  { urls: "stun:stun1.l.google.com:19302" },
];

export function useWebRTC({ onSendSignal, getMyId }: UseWebRTCOpts) {
  const t = useTranslations("call");
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remotePeers, setRemotePeers] = useState<RemotePeer[]>([]);
  const [mediaError, setMediaError] = useState<string | null>(null);

  const localStreamRef = useRef<MediaStream | null>(null);
  const pcsRef = useRef<Map<string, RTCPeerConnection>>(new Map());
  const pendingIceRef = useRef<Map<string, RTCIceCandidateInit[]>>(new Map());
  const namesRef = useRef<Map<string, string>>(new Map());
  const myIdRef = useRef<string>("");

  const sendRef = useRef(onSendSignal);
  const getMyIdRef = useRef(getMyId);
  useEffect(() => {
    sendRef.current = onSendSignal;
    getMyIdRef.current = getMyId;
  });

  /* ── local media ── */
  const initLocal = useCallback(async () => {
    if (localStreamRef.current) return localStreamRef.current;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 640 }, height: { ideal: 480 } },
        audio: { echoCancellation: true, noiseSuppression: true },
      });
      localStreamRef.current = stream;
      setLocalStream(stream);
      setMediaError(null);
      return stream;
    } catch (e) {
      const msg =
        (e as Error).name === "NotAllowedError"
          ? t("mediaDenied")
          : t("mediaMissing");
      setMediaError(msg);
      throw e;
    }
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

  const ensurePC = useCallback(
    async (peerId: string): Promise<RTCPeerConnection> => {
      const existing = pcsRef.current.get(peerId);
      if (existing) return existing;

      const pc = new RTCPeerConnection({ iceServers: ICE_SERVERS });
      pcsRef.current.set(peerId, pc);

      // add local tracks
      const stream = localStreamRef.current;
      if (stream) {
        for (const track of stream.getTracks()) pc.addTrack(track, stream);
      }

      pc.onicecandidate = (e) => {
        if (e.candidate) sendRef.current("ice", e.candidate.toJSON(), peerId);
      };

      pc.ontrack = (e) => {
        const remote = e.streams[0] ?? new MediaStream([e.track]);
        updatePeer(peerId, { stream: remote });
      };

      pc.onconnectionstatechange = () => {
        updatePeer(peerId, { connectionState: pc.connectionState });
        if (pc.connectionState === "failed") {
          // real recovery: flag ICE restart and re-negotiate from stable state
          void (async () => {
            try {
              pc.restartIce();
              if (pc.signalingState === "stable") {
                const offer = await pc.createOffer();
                await pc.setLocalDescription(offer);
                sendRef.current("offer", offer, peerId);
              }
            } catch {
              /* give up silently — user can still rejoin */
            }
          })();
        }
      };

      return pc;
    },
    [updatePeer]
  );

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

  /* ── signal handling (payload = {offer|answer|ice} envelope, like the old socket handler) ── */
  const handleSignal = useCallback(
    async (from: string, data: unknown) => {
      const d = (data ?? {}) as {
        offer?: RTCSessionDescriptionInit;
        answer?: RTCSessionDescriptionInit;
        ice?: RTCIceCandidateInit;
      };
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
