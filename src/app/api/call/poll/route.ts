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
   * happens) to keep the write rate low. */
  const now = Date.now();
  const staleCutoff = now - STALE_PARTICIPANT_MS;
  const dropped = participants.filter(
    (p) => p.peerId !== peerId && participantLastSeen(p) < staleCutoff
  );
  let roster = participants;
  const markSeen = (list: typeof participants) =>
    list.map((p) => (p.peerId === peerId ? { ...p, lastSeenAt: now } : p));

  if (dropped.length > 0) {
    roster = participants.filter(
      (p) => p.peerId === peerId || participantLastSeen(p) >= staleCutoff
    );
    for (const d of dropped) {
      await appendSignalMessage(roomId, d.peerId, null, "bye", { peerId: d.peerId }).catch(() => null);
    }
  }

  if (dropped.length > 0 || now - participantLastSeen(me) > 20_000) {
    await db.callRoom
      .update({ where: { id: roomId }, data: { participants: serializeParticipants(markSeen(roster)) } })
      .catch(() => null);
  }

  // heartbeat + opportunistic pruning
  if (hb) {
    await db.callRoom.update({ where: { id: roomId }, data: { updatedAt: new Date() } }).catch(() => null);
    if (Math.random() < 0.1) void pruneOldMessages(roomId);
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
