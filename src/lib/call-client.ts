// HTTP-polling signaling client for the video-call module.
// Talks to /api/call/{join,send,poll,leave} — no WebSocket server needed,
// so it works identically on Vercel serverless. Media still flows
// peer-to-peer via WebRTC; only tiny signaling rows hit the database.

export interface JoinOpts {
  deviceId: string;
  name: string;
  intent: "one" | "group";
  mode: "quick" | "private" | "code";
  code?: string;
}

export interface JoinResult {
  roomId: string;
  code: string;
  peerId: string;
  peers: { peerId: string; name: string }[];
}

export type SignalType = "offer" | "answer" | "ice" | "chat" | "caption";
export type IncomingType = SignalType | "bye";

export interface IncomingMessage {
  from: string;
  type: IncomingType;
  payload: unknown;
}

export interface PeerInfo {
  peerId: string;
  name: string;
}

interface PollMessage {
  id: number;
  from: string;
  type: string;
  payload: unknown;
}

interface PollData {
  closed?: boolean;
  seq?: number;
  peers?: PeerInfo[];
  messages?: PollMessage[];
}

const POLL_INTERVAL_MS = 1200;
const POLL_TIMEOUT_MS = 15_000;
const RETRY_1_MS = 2000;
const RETRY_2_MS = 4000; // cap — keep going forever while the room is open

interface CallClientOptions {
  /** Base URL for tests (bun/node). Browser always uses relative paths. */
  baseUrl?: string;
}

export class CallClient {
  readonly roomId: string;
  readonly code: string;
  readonly peerId: string;

  private baseUrl: string;
  private alive = false;
  private left = false;
  private beaconBound = false;
  private tick = 0;
  private since = 0;
  private failures = 0;
  private warmup = true;
  private lastPeersJson = "";
  private loopTimer: ReturnType<typeof setTimeout> | null = null;
  private pollCtrl: AbortController | null = null;

  private messageCb: ((m: IncomingMessage) => void) | null = null;
  private peersCb: ((peers: PeerInfo[]) => void) | null = null;
  private closedCb: (() => void) | null = null;
  private issueCb: ((issue: boolean) => void) | null = null;

  constructor(result: JoinResult, opts: CallClientOptions = {}) {
    this.roomId = result.roomId;
    this.code = result.code;
    this.peerId = result.peerId;
    this.baseUrl = opts.baseUrl ?? "";
    this.lastPeersJson = JSON.stringify(result.peers ?? []);
    this.alive = true;
    this.bindUnloadBeaconOnce();
    void this.loop();
  }

  /** POST /api/call/join — throws Error with a user-friendly (Bengali) message on failure. */
  static async join(opts: JoinOpts, baseUrl = ""): Promise<JoinResult> {
    let res: Response;
    try {
      res = await fetch(`${baseUrl}/api/call/join`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(opts),
      });
    } catch {
      throw new Error("সার্ভারে পৌঁছানো যাচ্ছে না — ইন্টারনেট সংযোগ চেক করুন।");
    }
    const json = (await res.json().catch(() => null)) as
      | { ok?: boolean; data?: JoinResult; error?: string }
      | null;
    if (!res.ok || !json?.ok || !json.data) {
      throw new Error(json?.error || `রুমে যোগ দেওয়া যায়নি (${res.status})`);
    }
    return json.data;
  }

  /* ── callbacks ── */
  onMessage(cb: (m: IncomingMessage) => void): void {
    this.messageCb = cb;
  }
  onPeers(cb: (peers: PeerInfo[]) => void): void {
    this.peersCb = cb;
  }
  onClosed(cb: () => void): void {
    this.closedCb = cb;
  }
  /** Fired with true when the poll loop hits network trouble, false when recovered. */
  onConnectionIssue(cb: (issue: boolean) => void): void {
    this.issueCb = cb;
  }

  /** Fire-and-forget signaling send — never throws.
   *  offer/answer are call-critical: if they silently drop (flaky mobile
   *  network), the call hangs forever, so they are retried once on network
   *  failure or 5xx. Definitive 4xx answers (room gone, invalid) are not. */
  send(type: SignalType, payload: unknown, to?: string): void {
    if (this.left) return;
    const post = () =>
      fetch(`${this.baseUrl}/api/call/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ roomId: this.roomId, peerId: this.peerId, to, type, payload }),
        keepalive: true,
      });
    if (type !== "offer" && type !== "answer") {
      void post().catch(() => null);
      return;
    }
    void (async () => {
      try {
        const res = await post();
        if (res.ok || res.status < 500) return;
        throw new Error(`send failed: ${res.status}`);
      } catch {
        await new Promise((r) => setTimeout(r, 700));
        if (this.left) return;
        await post().catch(() => null);
      }
    })();
  }

  /** Leave the room (server notifies others with a "bye" message) and stop polling. */
  leave(): void {
    if (this.left) return;
    this.left = true;
    this.stopLoop();
    void fetch(`${this.baseUrl}/api/call/leave`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomId: this.roomId, peerId: this.peerId }),
      keepalive: true,
    }).catch(() => null);
  }

  /* ── internals ── */

  private stopLoop(): void {
    this.alive = false;
    if (this.loopTimer) {
      clearTimeout(this.loopTimer);
      this.loopTimer = null;
    }
    this.pollCtrl?.abort();
    this.pollCtrl = null;
  }

  /** Tab close / navigation fallback so the server learns we're gone even
   *  if leave() never runs. Registered exactly once. */
  private bindUnloadBeaconOnce(): void {
    if (this.beaconBound) return;
    if (typeof window === "undefined" || typeof navigator === "undefined") return;
    this.beaconBound = true;
    const beacon = () => {
      if (this.left) return;
      this.left = true;
      this.stopLoop();
      try {
        const blob = new Blob(
          [JSON.stringify({ roomId: this.roomId, peerId: this.peerId })],
          { type: "application/json" }
        );
        navigator.sendBeacon("/api/call/leave", blob);
      } catch {
        /* noop */
      }
    };
    window.addEventListener("pagehide", beacon);
    window.addEventListener("beforeunload", beacon);
  }

  private async loop(): Promise<void> {
    while (this.alive) {
      this.tick += 1;
      const hb = this.tick % 4 === 0; // heartbeat every 4th poll keeps the room alive
      const ok = await this.pollOnce(hb);
      if (!this.alive) return;
      if (ok) {
        await this.sleep(POLL_INTERVAL_MS);
      } else {
        this.failures += 1;
        this.issueCb?.(true);
        await this.sleep(this.failures === 1 ? RETRY_1_MS : RETRY_2_MS);
      }
    }
  }

  private async pollOnce(hb: boolean): Promise<boolean> {
    const ctrl = new AbortController();
    this.pollCtrl = ctrl;
    const timeout = setTimeout(() => ctrl.abort(), POLL_TIMEOUT_MS);
    try {
      const url =
        `${this.baseUrl}/api/call/poll?roomId=${encodeURIComponent(this.roomId)}` +
        `&peerId=${encodeURIComponent(this.peerId)}&since=${this.since}${hb ? "&hb=1" : ""}`;
      const res = await fetch(url, { cache: "no-store", signal: ctrl.signal });
      if (!res.ok) return false;
      const json = (await res.json().catch(() => null)) as
        | { ok?: boolean; data?: PollData }
        | null;
      const data = json?.data;
      if (!data) return false;

      if (data.closed) {
        // room gone or we were removed
        this.stopLoop();
        this.closedCb?.();
        return true;
      }

      // peers — emit only when the roster actually changes
      const peers = Array.isArray(data.peers) ? data.peers : [];
      const pj = JSON.stringify(peers);
      if (pj !== this.lastPeersJson) {
        this.lastPeersJson = pj;
        this.peersCb?.(peers);
      }

      // messages — deduped by the seq cursor (id > since)
      const msgs = Array.isArray(data.messages) ? data.messages : [];
      for (const m of msgs) {
        if (typeof m?.id !== "number" || m.id <= this.since) continue;
        this.since = m.id;
        // First poll after joining: skip old chat/caption chatter that was
        // broadcast before we existed (keeps transcript clean for analysis).
        // Signals (offer/answer/ice/bye) are always delivered.
        if (this.warmup && (m.type === "chat" || m.type === "caption")) continue;
        this.messageCb?.({ from: m.from, type: m.type as IncomingType, payload: m.payload });
      }
      this.warmup = false;

      if (this.failures > 0) {
        this.failures = 0;
        this.issueCb?.(false);
      }
      return true;
    } catch {
      return false; // caller applies backoff and keeps polling
    } finally {
      clearTimeout(timeout);
      if (this.pollCtrl === ctrl) this.pollCtrl = null;
    }
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => {
      this.loopTimer = setTimeout(resolve, ms);
    });
  }
}
