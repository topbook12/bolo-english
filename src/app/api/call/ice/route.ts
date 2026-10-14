import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// GET /api/call/ice → { ok, data: { iceServers, source } }
//
// WebRTC ICE configuration served at call time so TURN secrets never live in
// the client bundle. Chain, best first:
//   1. DB TURN pool (Cloudflare Realtime keys, 1 TB/month free each) —
//      short-lived credentials minted server-side, auto-failover across keys
//   2. Single Cloudflare key via env: CF_TURN_KEY_ID + CF_TURN_API_TOKEN
//   3. Static TURN via env: TURN_URLS + TURN_USERNAME + TURN_CREDENTIAL
//   4. Metered.ca OpenRelay attempt (free credential — may have lapsed,
//      harmless: ICE gathering just skips dead servers)
//   Google STUN is always included. No redeploy needed — clients fetch this
//   at every call start.

import {
  iceFromPool,
  iceFromEnv,
  type IceServer,
} from "@/lib/turn-pool";

const STUN: IceServer = {
  urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302"],
};

const FALLBACK_TURN: IceServer = {
  urls: [
    "turn:standard.relay.metered.ca:80",
    "turn:standard.relay.metered.ca:80?transport=tcp",
    "turn:standard.relay.metered.ca:443",
    "turn:standard.relay.metered.ca:443?transport=tcp",
  ],
  username: "e8dd651bbe22f4a616b1c04f",
  credential: "MakTy9FvEZjSyZ2o",
};

export async function GET() {
  const iceServers: IceServer[] = [STUN];
  let source = "stun+fallback";

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
    } else {
      // 4: best-effort free relay
      iceServers.push(FALLBACK_TURN);
    }
  }

  return NextResponse.json(
    { ok: true, data: { iceServers, source } },
    { headers: { "Cache-Control": "no-store" } }
  );
}
