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
    /* The transaction does ONLY the roster change. Appending the "bye" used
     * to run INSIDE the transaction on the global Prisma client while the
     * transaction itself held the SQLite write lock — a self-deadlock that
     * timed out, rolled back the participant removal (leaver stayed in the
     * roster forever) yet still wrote the bye on the outer connection. That
     * kept a frozen video tile on every remaining caller's screen. */
    let byePending = false;
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
        byePending = true;
      }
    });
    // After commit — the write lock is released, so this insert cannot
    // deadlock. The poll-route staleness prune is the safety net if the
    // process dies before it runs.
    if (byePending) {
      await appendSignalMessage(roomId, peerId, null, "bye", { peerId });
    }
  } catch {
    /* leave is best-effort; the poll-route staleness prune cleans the roster up */
  }
  return NextResponse.json({ ok: true });
}
