import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { appendSignalMessage, parseParticipants, serializeParticipants } from "@/lib/signaling";
import { reqLocale, apiMsg } from "@/lib/api-i18n";

// POST /api/call/leave  { roomId, peerId }
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const roomId = typeof body?.roomId === "string" ? body.roomId : "";
  const peerId = typeof body?.peerId === "string" ? body.peerId : "";
  if (!roomId || !peerId) {
    return NextResponse.json(
      { ok: false, error: apiMsg(reqLocale(req), "paramsRequired") },
      { status: 400 }
    );
  }

  try {
    await db.$transaction(async (tx) => {
      const room = await tx.callRoom.findUnique({ where: { id: roomId } });
      if (!room) return;
      const participants = parseParticipants(room.participants).filter(
        (p) => p.peerId !== peerId
      );
      if (participants.length === 0) {
        await tx.callRoom.delete({ where: { id: roomId } });
      } else {
        await tx.callRoom.update({
          where: { id: roomId },
          data: { participants: serializeParticipants(participants) },
        });
        // tell the others immediately
        await appendSignalMessage(roomId, peerId, null, "bye", { peerId });
      }
    });
  } catch {
    /* leave is best-effort; the heartbeat pruner will clean the room up */
  }
  return NextResponse.json({ ok: true });
}
