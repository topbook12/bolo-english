// Task 17 — signaling concurrency stress test (run: bun scripts/call-stress-test.mjs)
// Requires the dev server on :3000. Cleans CallRoom tables before/after.
import { Database } from "bun:sqlite";

const BASE = "http://localhost:3000";
let pass = 0, fail = 0;
const ok = (name, cond, extra = "") => {
  if (cond) { pass++; console.log(`  ✅ ${name}${extra ? " — " + extra : ""}`); }
  else { fail++; console.log(`  ❌ ${name}${extra ? " — " + extra : ""}`); }
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const cleanDb = () => {
  const db = new Database("db/custom.db");
  db.run("DELETE FROM CallRoom");
  db.run("DELETE FROM SignalMessage");
  db.close();
};

async function join(body) {
  const res = await fetch(`${BASE}/api/call/join`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return { status: res.status, json: await res.json().catch(() => null) };
}
async function poll(roomId, peerId, since = 0, hb = false) {
  const res = await fetch(
    `${BASE}/api/call/poll?roomId=${roomId}&peerId=${peerId}&since=${since}${hb ? "&hb=1" : ""}`
  );
  return (await res.json())?.data;
}
async function send(roomId, peerId, type, payload, to) {
  const res = await fetch(`${BASE}/api/call/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ roomId, peerId, type, payload, to }),
  });
  return res.status;
}
async function leave(roomId, peerId) {
  await fetch(`${BASE}/api/call/leave`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ roomId, peerId }),
  });
}
const rosterHas = (data, peerId) => (data?.peers ?? []).some((p) => p.peerId === peerId);

cleanDb();
await sleep(300);

/* ── Test 1: 6 concurrent quick-match 1:1 joins — nobody lost ── */
console.log("\n[1] 6 concurrent quick-match joins (CAS integrity)");
const joiners = Array.from({ length: 6 }, (_, i) => ({
  deviceId: `stress-dev-${i}-${Date.now()}`,
  name: `S${i}`,
  intent: "one",
  mode: "quick",
}));
const results = await Promise.all(joiners.map((j) => join(j)));
ok("all joins succeeded", results.every((r) => r.status === 200 && r.json?.ok), results.map((r) => r.status).join(","));
const rooms = {};
for (let i = 0; i < 6; i++) {
  const d = results[i].json?.data;
  if (!d) continue;
  (rooms[d.roomId] ??= []).push({ i, peerId: d.peerId });
}
let rosterOk = true;
for (const [roomId, members] of Object.entries(rooms)) {
  for (const m of members) {
    const d = await poll(roomId, m.peerId, 0, true);
    if (!d || d.closed || !rosterHas(d, m.peerId)) rosterOk = false;
  }
}
ok("every joiner present in roster (no CAS losses)", rosterOk,
  `${Object.keys(rooms).length} rooms from true-simultaneous arrivals`);

/* ── Test 2: staggered joiner lands in the OLDEST open room ── */
console.log("\n[2] staggered quick-match pairing");
const roomIds = Object.keys(rooms).sort();
const joined2 = await join({ deviceId: `stagger-${Date.now()}`, name: "STG", intent: "one", mode: "quick" });
const target = joined2.json?.data?.roomId;
ok("staggered joiner paired into an existing room", roomIds.includes(target), `target=${target?.slice(-6)}`);
const dTarget = await poll(target, joined2.json.data.peerId, 0, true);
ok("roster now 2 in the joined room", dTarget?.peers?.length === 2, `roster=${dTarget?.peers?.length}`);

/* ── Test 3: join vs rapid-poll race (code-join for determinism) ── */
console.log("\n[3] join vs rapid-poll race (CAS protects joiner)");
const hostCode = results[0].json.data.code;
const hostRoom = results[0].json.data.roomId;
const hostPeer = results[0].json.data.peerId;
const pollHammer = (async () => {
  for (let i = 0; i < 25; i++) {
    await poll(hostRoom, hostPeer, 0, i % 5 === 0);
    await sleep(40);
  }
})();
await sleep(200);
const devB = `raceB-${Date.now()}`;
const rB = await join({ deviceId: devB, name: "B", intent: "one", mode: "code", code: hostCode });
const peerB = rB.json?.data?.peerId;
if (rB.status !== 200) console.log(`  [debug] code-join status=${rB.status} body=${JSON.stringify(rB.json)}`);
await pollHammer;
const finalHost = await poll(hostRoom, hostPeer, 0, true);
const finalB = await poll(hostRoom, peerB, 0, true);
ok("B joined host room by code", rB.status === 200 && rB.json?.data?.roomId === hostRoom);
ok("B survived host's poll hammer", rosterHas(finalHost, peerB));
ok("host visible in B's roster", rosterHas(finalB, hostPeer));

/* ── Test 4: signal delivery + seq cursor ── */
console.log("\n[4] signal delivery offer→ice→answer");
await send(hostRoom, peerB, "offer", { offer: { type: "offer", sdp: "v=0 stress" } }, hostPeer);
await send(hostRoom, peerB, "ice", { ice: { candidate: "candidate:1" } }, hostPeer);
await send(hostRoom, peerB, "answer", { answer: { type: "answer", sdp: "v=0 ans" } }, hostPeer);
const dHost = await poll(hostRoom, hostPeer, 0, true);
const types = (dHost?.messages ?? []).filter((m) => m.from === peerB).map((m) => m.type);
ok("host received offer+ice+answer in order", JSON.stringify(types) === JSON.stringify(["offer", "ice", "answer"]), types.join(","));
const seq = dHost?.seq ?? 0;
const dHost2 = await poll(hostRoom, hostPeer, seq, true);
ok("seq cursor: no replay after cursor", (dHost2?.messages ?? []).length === 0);

/* ── Test 5: same-device rejoin replaces ghost (no lockout) ── */
console.log("\n[5] same-device rejoin replaces ghost instantly");
const reB2 = await join({ deviceId: devB, name: "B2b", intent: "one", mode: "code", code: hostCode });
const newPeerB = reB2.json?.data?.peerId;
ok("rejoin returns 200 (no 409 lockout)", reB2.status === 200 && reB2.json?.ok, `status=${reB2.status}`);
const rosterAfter = await poll(hostRoom, hostPeer, 0, true);
const bCount = (rosterAfter?.peers ?? []).length;
ok("roster converged to 2 (host + newest B)", bCount === 2, `roster=${bCount}`);
const oldBpoll = await poll(hostRoom, peerB, 0, false);
ok("old B session invalidated (closed)", oldBpoll?.closed === true);
const newBpoll = await poll(hostRoom, newPeerB, 0, true);
ok("newest B session alive", newBpoll?.closed === false);

/* ── Test 6: leave vs rapid-poll (no resurrection) ── */
console.log("\n[6] leave vs rapid-poll race");
const hammer2 = (async () => {
  for (let i = 0; i < 20; i++) {
    await poll(hostRoom, hostPeer, 999999, i % 4 === 0);
    await sleep(30);
  }
})();
await sleep(100);
await leave(hostRoom, newPeerB);
await hammer2;
const afterLeave = await poll(hostRoom, hostPeer, 0, true);
ok("leaver gone after poll hammer", !rosterHas(afterLeave, newPeerB), `roster=${afterLeave?.peers?.length}`);

/* ── Test 7: empty room cleanup ── */
console.log("\n[7] empty room cleanup");
await leave(hostRoom, hostPeer);
const gone = await poll(hostRoom, hostPeer, 0, false).catch(() => null);
ok("room deleted once empty", gone === null || gone?.closed === true);

cleanDb();
console.log(`\n═══ RESULT: ${pass} passed, ${fail} failed ═══`);
process.exit(fail === 0 ? 0 : 1);
