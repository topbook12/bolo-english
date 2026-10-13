import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { parseParticipants, pruneOldMessages } from "@/lib/signaling";

export const dynamic = "force-dynamic";

// GET /api/call/poll?roomId=&peerId=&since=&hb=1
// → { seq, peers: [{peerId, name}], messages: [{id, from, type, payload}] }
export async function GET(req: NextRequest) {
  const roomId = req.nextUrl.searchParams.get("roomId") ?? "";
  const peerId = req.nextUrl.searchParams.get("peerId") ?? "";
  const since = Number(req.nextUrl.searchParams.get("since") ?? "0") || 0;
  const hb = req.nextUrl.searchParams.get("hb") === "1";
  if (!roomId || !peerId) {
    return NextResponse.json({ ok: false, error: "roomId & peerId required" }, { status: 400 });
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
      peers: participants.map((p) => ({ peerId: p.peerId, name: p.name })),
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
