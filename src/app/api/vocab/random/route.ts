import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { isLibraryLevel } from "@/lib/library-types";
import { ensureLibrary } from "@/lib/db-bootstrap";

export const runtime = "nodejs";

/* ── Random Word Practice API ────────────────────────────────────────────
 * GET /api/vocab/random?level=&exclude=&count=
 *   → 1..N random word(s) from the owner-authored Vocabulary Library.
 * Public + zero-key (same as /api/library): single-click practice for
 * everyone. `exclude` (comma-separated ids, max 120) keeps the recent
 * words from repeating inside a session; when the pool is exhausted the
 * filter is dropped so the learner always gets a word.
 * Rate-limited per IP (60/min) — the button is one-tap, no AI cost.
 * ─────────────────────────────────────────────────────────────────────── */

const MAX_EXCLUDE = 120;
const MAX_COUNT = 10;

function jsonOk(data: unknown) {
  return NextResponse.json({ ok: true, data });
}
function jsonErr(message: string, status = 500) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  if (!checkIpLimit(req, "vocab-random", 60)) {
    return jsonErr(apiMsg(locale, "rateLimited"), 429);
  }

  const levelRaw = req.nextUrl.searchParams.get("level");
  const level = levelRaw && isLibraryLevel(levelRaw) ? levelRaw : undefined;
  const countRaw = Math.floor(Number(req.nextUrl.searchParams.get("count") ?? 1));
  const count = Number.isFinite(countRaw) ? Math.min(MAX_COUNT, Math.max(1, countRaw)) : 1;
  const exclude = (req.nextUrl.searchParams.get("exclude") ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, MAX_EXCLUDE);

  await ensureLibrary("vocab");

  try {
    // Pool of candidate ids — select only ids (564 rows → a few KB, cheap),
    // filter recent ids out in JS, then Fisher–Yates-pick the winners.
    const pool = await db.libraryVocab.findMany({
      where: level ? { level } : undefined,
      select: { id: true },
    });
    if (pool.length === 0) return jsonOk({ items: [] });

    const excluded = new Set(exclude);
    let candidates = pool.filter((p) => !excluded.has(p.id));
    if (candidates.length === 0) candidates = pool; // everything seen → recycle the full pool

    for (let i = candidates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
    }
    const picked = candidates.slice(0, Math.min(count, candidates.length)).map((p) => p.id);

    const rows = await db.libraryVocab.findMany({
      where: { id: { in: picked } },
    });
    const byId = new Map(rows.map((r) => [r.id, r]));
    const items = picked
      .map((id) => byId.get(id))
      .filter((r): r is NonNullable<typeof r> => !!r)
      .map((r) => {
        let data: unknown = {};
        try {
          data = JSON.parse(r.data);
        } catch {
          /* malformed row → empty data, UI falls back */
        }
        return {
          id: r.id,
          word: r.word,
          level: r.level,
          category: r.category,
          unit: r.unit,
          data,
        };
      });

    return jsonOk({ items });
  } catch {
    return jsonErr(apiMsg(locale, "dbConnectFailed"), 503);
  }
}
