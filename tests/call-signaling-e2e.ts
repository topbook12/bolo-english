// E2E test for the HTTP-polling call signaling API (+ CallClient).
// Run: bun tests/call-signaling-e2e.ts   (dev server on :3000 must be up)
//
// Flow: peer A quick-matches a group room → peer B joins the same room →
// both see each other in the roster → offer/answer/ice relay both ways →
// caption broadcast → A leaves → B gets "bye" + roster update.

import { CallClient, type IncomingMessage, type PeerInfo } from "../src/lib/call-client";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const STEP_TIMEOUT_MS = 20_000;

let failed = false;

function ok(label: string, cond: boolean, extra = "") {
  if (cond) {
    console.log(`PASS: ${label}${extra ? ` — ${extra}` : ""}`);
  } else {
    failed = true;
    console.error(`FAIL: ${label}${extra ? ` — ${extra}` : ""}`);
  }
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitFor<T>(
  label: string,
  fn: () => T | undefined | null | false,
  timeoutMs = STEP_TIMEOUT_MS
): Promise<T> {
  const deadline = Date.now() + timeoutMs;
  let last: T | undefined | null | false = null;
  while (Date.now() < deadline) {
    last = fn();
    if (last) return last;
    await sleep(120);
  }
  throw new Error(`timeout waiting for: ${label} (last=${JSON.stringify(last)})`);
}

interface PeerBox {
  client: CallClient;
  peerId: string;
  peers: PeerInfo[];
  messages: IncomingMessage[];
  closed: boolean;
}

function makeBox(result: { roomId: string; code: string; peerId: string; peers: PeerInfo[] }): PeerBox {
  const box: PeerBox = {
    client: null as unknown as CallClient,
    peerId: result.peerId,
    peers: [...result.peers], // roster at join time — onPeers only fires on CHANGE
    messages: [],
    closed: false,
  };
  const client = new CallClient(result, { baseUrl: BASE });
  box.client = client;
  client.onPeers((peers) => {
    box.peers = peers;
  });
  client.onMessage((m) => {
    box.messages.push(m);
  });
  client.onClosed(() => {
    box.closed = true;
  });
  return box;
}

const stamp = Date.now().toString(36);
const run = async () => {
  console.log(`# call-signaling e2e against ${BASE}`);

  /* 1) A quick-matches a group room, B joins the same way */
  const resA = await CallClient.join(
    { deviceId: `e2e-a-${stamp}`, name: "আমিনা", intent: "group", mode: "quick" },
    BASE
  );
  ok("A joined (peerId + code issued)", !!resA.peerId && !!resA.code, `room=${resA.roomId} code=${resA.code}`);

  const resB = await CallClient.join(
    { deviceId: `e2e-b-${stamp}`, name: "রাকিব", intent: "group", mode: "quick" },
    BASE
  );
  ok("B joined", !!resB.peerId && !!resB.code, `room=${resB.roomId} code=${resB.code}`);
  ok("same room", resA.roomId === resB.roomId);
  ok("A's roster contains A initially", resA.peers.some((p) => p.peerId === resA.peerId));

  const a = makeBox(resA);
  const b = makeBox(resB);

  /* 2) both rosters converge and contain each other */
  await waitFor("A sees B in peers", () => (a.peers.some((p) => p.peerId === b.peerId) ? a.peers : null));
  await waitFor("B sees A in peers", () => (b.peers.some((p) => p.peerId === a.peerId) ? b.peers : null));
  ok(
    "A & B see each other in peers",
    a.peers.some((p) => p.peerId === b.peerId) && b.peers.some((p) => p.peerId === a.peerId),
    a.peers.map((p) => p.name).join(", ")
  );

  /* 3) offer: A → B */
  const fakeOffer = { type: "offer", sdp: `v=0\r\no=e2e-a ${stamp}\r\ns=-\r\n` };
  a.client.send("offer", { offer: fakeOffer }, b.peerId);
  const offerAtB = await waitFor(
    "offer A→B",
    () => b.messages.find((m) => m.from === a.peerId && m.type === "offer") ?? null
  );
  ok(
    "offer payload intact",
    JSON.stringify((offerAtB.payload as { offer: unknown }).offer) === JSON.stringify(fakeOffer)
  );

  /* 4) answer: B → A */
  const fakeAnswer = { type: "answer", sdp: `v=0\r\no=e2e-b ${stamp}\r\ns=-\r\n` };
  b.client.send("answer", { answer: fakeAnswer }, a.peerId);
  const answerAtA = await waitFor(
    "answer B→A",
    () => a.messages.find((m) => m.from === b.peerId && m.type === "answer") ?? null
  );
  ok(
    "answer payload intact",
    JSON.stringify((answerAtA.payload as { answer: unknown }).answer) === JSON.stringify(fakeAnswer)
  );

  /* 5) ICE candidates both ways */
  a.client.send("ice", { ice: { candidate: "candidate:1 1 UDP 1 10.0.0.1 50001 typ host", sdpMid: "0" } }, b.peerId);
  b.client.send("ice", { ice: { candidate: "candidate:2 1 UDP 1 10.0.0.2 50002 typ host", sdpMid: "0" } }, a.peerId);
  const iceAtB = await waitFor(
    "ice A→B",
    () => b.messages.find((m) => m.from === a.peerId && m.type === "ice") ?? null
  );
  const iceAtA = await waitFor(
    "ice B→A",
    () => a.messages.find((m) => m.from === b.peerId && m.type === "ice") ?? null
  );
  ok("ice payloads intact", !!iceAtB.payload && !!iceAtA.payload);

  /* 6) caption broadcast (no `to` — must reach everyone except sender) */
  a.client.send("caption", { text: "Hello, I am practicing English", speaker: "আমিনা" });
  const capAtB = await waitFor(
    "caption broadcast A→B",
    () => b.messages.find((m) => m.from === a.peerId && m.type === "caption") ?? null
  );
  ok(
    "caption text intact",
    (capAtB.payload as { text: string }).text === "Hello, I am practicing English"
  );

  /* 7) A leaves → B receives bye + roster update */
  a.client.leave();
  const byeAtB = await waitFor(
    "bye B←A",
    () => b.messages.find((m) => m.from === a.peerId && m.type === "bye") ?? null
  );
  ok("bye received", !!byeAtB);
  await waitFor("B roster drops A", () => (!b.peers.some((p) => p.peerId === a.peerId) ? b.peers : null));
  ok("B no longer sees A in peers", !b.peers.some((p) => p.peerId === a.peerId));

  /* 8) cleanup */
  b.client.leave();
  await sleep(300);

  if (failed) {
    console.error("CALL SIGNALING E2E: FAILURES ❌");
    process.exit(1);
  }
  console.log("CALL SIGNALING E2E: ALL PASS ✅");
  process.exit(0);
};

run().catch((e) => {
  console.error("CALL SIGNALING E2E: ERROR ❌ —", (e as Error).message);
  process.exit(1);
});
