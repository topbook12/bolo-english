import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import {
  parseParticipants,
  pruneOldMessages,
  appendSignalMessage,
  serializeParticipants,
  participantLastSeen,
  STALE_PARTICIPANT_MS,
} from "@/lib/signaling";
import { reqLocale, apiMsg } from "@/lib/api-i18n";

export const dynamic = "force-dynamic";

// GET /api/call/poll?roomId=&peerId=&since=&hb=1
// → { seq, peers: [{peerId, name}], messages: [{id, from, type, payload}] }
export async function GET(req: NextRequest) {
  const roomId = req.nextUrl.searchParams.get("roomId") ?? "";
  const peerId = req.nextUrl.searchParams.get("peerId") ?? "";
  const since = Number(req.nextUrl.searchParams.get("since") ?? "0") || 0;
  const hb = req.nextUrl.searchParams.get("hb") === "1";
  if (!roomId || !peerId) {
    return NextResponse.json(
      { ok: false, error: apiMsg(reqLocale(req), "paramsRequired") },
      { status: 400 }
    );
  }

  const room = await db.callRoom.findUnique({ where: { id: roomId } });
  if (!room || room.status !== "open") {
    return NextResponse.json({ ok: true, data: { closed: true, seq: since, peers: [], messages: [] } });
  }

  const participants = parseParticipants(room.participants);
  const me = participants.find((p) => p.peerId === peerId);

  if (!me) {
    // we were removed / room was recycled
    return NextResponse.json({ ok: true, data: { closed: true, seq: since, peers: [], messages: [] } });
  }

  /* ── liveness: prune silent participants + mark myself seen ──
   * A peer whose client died (killed tab / crash / lost network) never POSTs
   * /leave, so without this their frozen video would stay on everyone's
   * screen forever (the surviving callers' heartbeats keep the room alive).
   * Here any participant silent for STALE_PARTICIPANT_MS is dropped from the
   * roster and a "bye" is broadcast so tiles disappear immediately. My own
   * lastSeenAt is refreshed lazily (only when >20s old, or when a prune
   * happens) to keep the write rate low.
   *
   * CONCURRENCY (audit Task 17): the roster write used to be a blind
   * read-modify-write — a join/leave committing between our read and write
   * was CLOBBERED (a fresh quick-match joiner silently vanished and their
   * next poll returned closed). The write is now a compare-and-swap on the
   * exact participants JSON we read: if anything changed underneath us the
   * UPDATE matches 0 rows, we send no "bye", and the NEXT poll (1.2s later)
   * re-merges against the fresh roster. A concurrent join can never be lost. */
  const now = Date.now();
  const staleCutoff = now - STALE_PARTICIPANT_MS;
  const asRead = room.participants;
  const dropped = participants.filter(
    (p) => p.peerId !== peerId && participantLastSeen(p) < staleCutoff
  );
  let roster = participants;
  if (dropped.length > 0) {
    roster = participants.filter(
      (p) => p.peerId === peerId || participantLastSeen(p) >= staleCutoff
    );
  }
  const needSeen = now - participantLastSeen(me) > 20_000;
  let writeApplied = false;

  if (dropped.length > 0 || needSeen) {
    const marked = roster.map((p) => (p.peerId === peerId ? { ...p, lastSeenAt: now } : p));
    const updated = await db
      .$executeRawUnsafe(
        `UPDATE "CallRoom" SET "participants" = ?, "updatedAt" = ? WHERE "id" = ? AND "participants" = ?`,
        serializeParticipants(marked),
        new Date(),
        roomId,
        asRead
      )
      .catch(() => 0);
    // 0 rows = a concurrent join/leave won the race — skip the write AND the
    // "bye" broadcast; our next poll re-reads the fresh roster and re-prunes.
    writeApplied = updated > 0;
    if (writeApplied) roster = marked;
  }

  // heartbeat + opportunistic pruning (timestamp-only write — no lost-update risk)
  if (hb) {
    await db.callRoom.update({ where: { id: roomId }, data: { updatedAt: new Date() } }).catch(() => null);
    if (Math.random() < 0.1) void pruneOldMessages(roomId);
  }

  // "bye" only for a prune whose write actually committed
  if (writeApplied && dropped.length > 0) {
    for (const d of dropped) {
      await appendSignalMessage(roomId, d.peerId, null, "bye", { peerId: d.peerId }).catch(() => null);
    }
  }

  const messages = await db.signalMessage.findMany({
    where: {
      roomId,
      id: { gt: since },
      fromPeer: { not: peerId },
      OR: [{ toPeer: null }, { toPeer: peerId }],
    },
    orderBy: { id: "asc" },
    take: 120,
  });

  return NextResponse.json({
    ok: true,
    data: {
      closed: false,
      seq: messages.length > 0 ? messages[messages.length - 1].id : since,
      peers: roster.map((p) => ({ peerId: p.peerId, name: p.name })),
      messages: messages.map((m) => ({
        id: m.id,
        from: m.fromPeer,
        type: m.type,
        payload: safeParse(m.payload),
      })),
    },
  });
}

function safeParse(json: string): unknown {
  try {
    return JSON.parse(json);
  } catch {
    return {};
  }
}
