import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { parseParticipants } from "@/lib/signaling";
import { checkIpLimitStrict } from "@/lib/rate-limit";
import {
  iceFromPool,
  iceFromEnv,
  type IceServer,
} from "@/lib/turn-pool";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/call/ice?roomId=…&peerId=… → { ok, data: { iceServers, source } }
//
// WebRTC ICE configuration served at call time so TURN secrets never live in
// the client bundle. Chain, best first:
//   1. DB TURN pool (Cloudflare Realtime keys, 1 TB/month free each) —
//      short-lived credentials minted server-side, auto-failover across keys
//   2. Single Cloudflare key via env: CF_TURN_KEY_ID + CF_TURN_API_TOKEN
//   3. Static TURN via env: TURN_URLS + TURN_USERNAME + TURN_CREDENTIAL
//   4. STUN-only
//
// SECURITY (audit Task 15): TURN relays are money (bandwidth). The endpoint
//   • no longer ships any hardcoded credential — env or pool only
//   • mints pool credentials ONLY for callers that are actually inside the
//     room (roomId + peerId must be in the roster) — a join-ticket proof
//   • is rate-limited per IP
// Anonymous callers (and stale peers) get Google STUN, which still connects
// most home networks; only hard NATs need the relay.

const STUN: IceServer = {
  urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302"],
};

/** Proof that peerId is (still) a participant of roomId. */
async function isInRoom(roomId: string, peerId: string): Promise<boolean> {
  if (!/^[\w-]{6,80}$/.test(roomId) || !/^[A-Za-z0-9_-]{6,40}$/.test(peerId)) return false;
  try {
    const room = await db.callRoom.findUnique({ where: { id: roomId } });
    if (!room || room.status !== "open") return false;
    return parseParticipants(room.participants).some((p) => p.peerId === peerId);
  } catch {
    return false;
  }
}

export async function GET(req: NextRequest) {
  // 10/min/IP — a browser needs 1 per call; 10 absorbs retries + relogins.
  if (!checkIpLimitStrict(req, "ice", 10)) {
    return NextResponse.json(
      { ok: false, error: "rate limited" },
      { status: 429, headers: { "Cache-Control": "no-store" } }
    );
  }

  const iceServers: IceServer[] = [STUN];
  let source = "stun-only";

  const roomId = req.nextUrl.searchParams.get("roomId") ?? "";
  const peerId = req.nextUrl.searchParams.get("peerId") ?? "";
  const joined = await isInRoom(roomId, peerId);

  if (joined) {
    // 1 + 2: Cloudflare Realtime TURN (DB pool first, then env single key)
    const cf = (await iceFromPool()) ?? (await iceFromEnv());
    if (cf) {
      iceServers.push(...cf);
      source = "cloudflare";
    } else {
      // 3: static credentials via env
      const urls = (process.env.TURN_URLS ?? "")
        .split(",")
        .map((u) => u.trim())
        .filter(Boolean);
      if (urls.length > 0 && process.env.TURN_USERNAME && process.env.TURN_CREDENTIAL) {
        iceServers.push({
          urls,
          username: process.env.TURN_USERNAME,
          credential: process.env.TURN_CREDENTIAL,
        });
        source = "static-env";
      }
    }
  }

  return NextResponse.json(
    { ok: true, data: { iceServers, source } },
    { headers: { "Cache-Control": "no-store" } }
  );
}
