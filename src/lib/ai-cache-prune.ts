import { db } from "@/lib/db";

// AiCache keeps AI-generated content so repeat requests cost zero API calls.
// Unbounded, it would eventually eat the free Turso quota (5 GB) — this pruner
// caps total cached bytes (LRU: oldest rows evicted first) so the database can
// never overflow because of the cache.

const DEFAULT_MAX_BYTES = 128 * 1024 * 1024; // 128 MB

export function aiCacheMaxBytes(): number {
  const v = Number(process.env.AI_CACHE_MAX_BYTES || 0);
  return v > 0 ? v : DEFAULT_MAX_BYTES;
}

/** Sum of cached bytes + row count (cheap enough for SQLite/Turso). */
export async function aiCacheStats(): Promise<{
  rows: number;
  bytes: number;
  maxBytes: number;
}> {
  const rows = await db.aiCache.aggregate({ _count: { id: true } });
  let bytes = 0;
  // length() on the TEXT column — SQLite returns byte length for UTF-8
  const size = await db.$queryRaw<{ total: number | null }[]>`
    SELECT SUM(LENGTH(response)) AS total FROM AiCache`;
  bytes = Number(size[0]?.total ?? 0);
  return { rows: rows._count.id, bytes, maxBytes: aiCacheMaxBytes() };
}

/** Evict oldest cache rows until total size <= cap. Cheap no-op when under. */
export async function pruneAiCache(): Promise<void> {
  try {
    const max = aiCacheMaxBytes();
    const stats = await aiCacheStats();
    if (stats.bytes <= max) return;
    // Walk oldest-first, collect ids until we're under the cap, delete once.
    const rows = await db.$queryRaw<{ id: string; len: number }[]>`
      SELECT id, LENGTH(response) AS len FROM AiCache ORDER BY createdAt ASC`;
    let running = stats.bytes;
    const kill: string[] = [];
    for (const r of rows) {
      if (running <= max) break;
      running -= Number(r.len ?? 0);
      kill.push(r.id);
    }
    if (kill.length > 0) {
      await db.aiCache.deleteMany({ where: { id: { in: kill } } });
    }
  } catch {
    // pruning must never break the main request
  }
}

/** Row counts per table for the admin storage dashboard (bytes come from aiCacheStats for AiCache). */
export async function dbTableStats(): Promise<
  { model: string; rows: number; bytes: number }[]
> {
  const models = [
    "User",
    "UserConfig",
    "AiCache",
    "DailyVocab",
    "WordBookItem",
    "SpeakingSession",
    "PracticeLog",
    "CallRoom",
    "SignalMessage",
    "StorageAccount",
    "StorageObject",
  ];
  const out: { model: string; rows: number; bytes: number }[] = [];
  for (const m of models) {
    try {
      const c = await db.$queryRawUnsafe<{ n: number }[]>(
        `SELECT COUNT(*) AS n FROM "${m}"`
      );
      out.push({ model: m, rows: Number(c[0]?.n ?? 0), bytes: 0 });
    } catch {
      out.push({ model: m, rows: -1, bytes: 0 });
    }
  }
  return out;
}
