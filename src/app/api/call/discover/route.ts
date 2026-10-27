import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { reqLocale } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { parseParticipants, pruneStaleRooms } from "@/lib/signaling";

export const dynamic = "force-dynamic";

// GET /api/call/discover  (D20 — ROADMAP-60)
// → { ok, data: { live: RoomCard[], upcoming: RoomCard[] } }
//
// Public room discovery for the Speak section:
//   live     — open, PUBLIC, group rooms with free seats (quick-match rooms
//              AND topic rooms already started), freshest activity first
//   upcoming — scheduled topic rooms not started yet, soonest first
//
// Privacy: only public rooms are listed, only display names + learner counts
// + user-typed (bounded) topics are exposed. Codes are included because the
// rooms are PUBLIC by design — that's the whole point of discovery.

const STALE_MS = 90 * 1000; // matches signaling STALE_ROOM_MS
const MAX_LIST = 8;

export interface DiscoverRoom {
  code: string;
  topic: string;
  learners: number;
  maxPeers: number;
  host: string;
  scheduledFor: string | null;
}

export async function GET(req: NextRequest) {
  reqLocale(req); // kept for parity; lists are language-neutral data
  if (!checkIpLimit(req, "call-discover", 60)) {
    return NextResponse.json({ ok: false, error: "rate limited" }, { status: 429 });
  }
  await pruneStaleRooms();

  const fresh = new Date(Date.now() - STALE_MS);

  const liveRows = await db.callRoom.findMany({
    where: {
      status: "open",
      visibility: "public",
      intent: "group",
      updatedAt: { gt: fresh },
    },
    orderBy: { updatedAt: "desc" },
    take: 24,
  });
  const live = liveRows
    .map((r) => roomCard(r))
    // A seat must be free. Quick-match shells (0 learners) stay hidden —
    // their host is always inside, so 0 means a dead row. TOPIC rooms created
    // by /api/call/schedule start with 0 learners on purpose: they must be
    // visible so the FIRST joiner can start the conversation.
    .filter((r) => r.learners < r.maxPeers && (r.learners > 0 || r.topic !== ""))
    .slice(0, MAX_LIST);

  const upcomingRows = await db.callRoom.findMany({
    where: {
      status: "scheduled",
      visibility: "public",
      intent: "group",
      scheduledFor: { gt: new Date() },
    },
    orderBy: { scheduledFor: "asc" },
    take: MAX_LIST,
  });
  const upcoming = upcomingRows.map((r) => roomCard(r));

  return NextResponse.json({ ok: true, data: { live, upcoming } });
}

function roomCard(r: {
  code: string;
  topic: string;
  maxPeers: number;
  scheduledFor: Date | null;
  participants: string;
}): DiscoverRoom {
  const parts = parseParticipants(r.participants);
  return {
    code: r.code,
    topic: r.topic,
    learners: parts.length,
    maxPeers: r.maxPeers,
    host: parts[0]?.name ?? "",
    scheduledFor: r.scheduledFor ? r.scheduledFor.toISOString() : null,
  };
}
