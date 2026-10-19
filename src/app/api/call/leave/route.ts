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
     * kept a frozen video tile on every remaining caller's screen.
     *
     * CONCURRENCY (Task 17 audit): both the roster update and the empty-room
     * delete are COMPARE-AND-SWAP writes on the participants JSON as read —
     * a join or poll-prune committing between our read and write no longer
     * gets clobbered (a blind delete used to be able to erase a room a
     * quick-match joiner had JUST been added to, instantly killing their
     * call). On contention the staleness prune is the safety net. */
    let byePending = false;
    await db.$transaction(async (tx) => {
      const room = await tx.callRoom.findUnique({ where: { id: roomId } });
      if (!room) return;
      const asRead = room.participants;
      const participants = parseParticipants(asRead).filter((p) => p.peerId !== peerId);
      if (participants.length === 0) {
        const deleted = await tx
          .$executeRawUnsafe(
            `DELETE FROM "CallRoom" WHERE "id" = ? AND "participants" = ?`,
            roomId,
            asRead
          )
          .catch(() => 0);
        byePending = deleted > 0;
      } else {
        const updated = await tx
          .$executeRawUnsafe(
            `UPDATE "CallRoom" SET "participants" = ?, "updatedAt" = ? WHERE "id" = ? AND "participants" = ?`,
            serializeParticipants(participants),
            new Date(),
            roomId,
            asRead
          )
          .catch(() => 0);
        byePending = updated > 0;
      }
    });
    // After commit — the write lock is released, so this insert cannot
    // deadlock. The poll-route staleness prune is the safety net if the
    // process dies before it runs (or if the CAS contended).
    if (byePending) {
      await appendSignalMessage(roomId, peerId, null, "bye", { peerId });
    }
  } catch {
    /* leave is best-effort; the poll-route staleness prune cleans the roster up */
  }
  return NextResponse.json({ ok: true });
}
