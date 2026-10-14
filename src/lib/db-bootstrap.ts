import { db } from "@/lib/db";
import { SEED_VOCAB } from "../../scripts/seed-data/vocab-data";
import { SEED_GRAMMAR } from "../../scripts/seed-data/grammar-data";
import { SEED_LISTENING } from "../../scripts/seed-data/listening-data";

/* ─── Database self-bootstrap (zero-config production) ──────────────────────
 * The owner should NEVER have to run db:push or a seed script against the
 * production database. When a schema area is touched for the first time:
 *
 *   1. Missing tables are created (CREATE TABLE IF NOT EXISTS matches the
 *      Prisma schema exactly, so a future db:push stays a no-op). This
 *      covers the production Turso DB that predates the Storage pool,
 *      TURN pool and Library models.
 *   2. Seeds the owner's starter content ONCE per kind. A marker row in
 *      AiCache (feature="library_bootstrap") records completion, so owner
 *      edits and deletions are never overwritten and seeding never re-runs.
 *
 * Everything is idempotent and safe to race (unique-key upserts + marker
 * guards). Failures are logged and swallowed — the calling API keeps its
 * own error handling; the next request simply retries the bootstrap.
 * ──────────────────────────────────────────────────────────────────────── */

export type LibraryKind = "vocab" | "grammar" | "listening";

const MARKER_FEATURE = "library_bootstrap";
const MARKERS: Record<LibraryKind, string> = {
  vocab: "vocab_v1",
  grammar: "grammar_v1",
  listening: "listening_v1",
};

/** Single-flight per kind so parallel requests share one bootstrap. */
const inFlight = new Map<LibraryKind, Promise<void>>();

/* Prisma-shaped SQLite DDL (libsql is SQLite-compatible). Mirrors
 * prisma/schema.prisma so `prisma db push` later sees no drift. */
const DDL: string[] = [
  `CREATE TABLE IF NOT EXISTS "AiCache" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "feature" TEXT NOT NULL,
    "cacheKey" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "AiCache_feature_cacheKey_key"
    ON "AiCache"("feature" ASC, "cacheKey" ASC)`,
  `CREATE TABLE IF NOT EXISTS "LibraryVocab" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "word" TEXT NOT NULL,
    "level" TEXT NOT NULL DEFAULT 'beginner',
    "category" TEXT NOT NULL DEFAULT 'general',
    "data" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "LibraryVocab_word_level_key"
    ON "LibraryVocab"("word" ASC, "level" ASC)`,
  `CREATE INDEX IF NOT EXISTS "LibraryVocab_level_idx" ON "LibraryVocab"("level" ASC)`,
  `CREATE TABLE IF NOT EXISTS "LibraryGrammar" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "topic" TEXT NOT NULL,
    "level" TEXT NOT NULL DEFAULT 'beginner',
    "title" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "LibraryGrammar_topic_level_key"
    ON "LibraryGrammar"("topic" ASC, "level" ASC)`,
  `CREATE INDEX IF NOT EXISTS "LibraryGrammar_level_idx" ON "LibraryGrammar"("level" ASC)`,
  `CREATE TABLE IF NOT EXISTS "LibraryListening" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "level" TEXT NOT NULL DEFAULT 'beginner',
    "category" TEXT NOT NULL DEFAULT 'daily',
    "minutes" INTEGER NOT NULL DEFAULT 2,
    "data" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "LibraryListening_slug_key" ON "LibraryListening"("slug" ASC)`,
  `CREATE INDEX IF NOT EXISTS "LibraryListening_level_idx" ON "LibraryListening"("level" ASC)`,
  /* Zero-cost storage pool + TURN pool tables — production Turso predates
   * these models too (they shipped after the last db:push), which made
   * /api/storage 500 on production. */
  `CREATE TABLE IF NOT EXISTS "StorageAccount" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL,
    "provider" TEXT NOT NULL DEFAULT 's3',
    "endpoint" TEXT NOT NULL,
    "region" TEXT NOT NULL DEFAULT 'auto',
    "bucket" TEXT NOT NULL,
    "accessKeyEnc" TEXT NOT NULL,
    "secretKeyEnc" TEXT NOT NULL,
    "publicBaseUrl" TEXT NOT NULL,
    "limitBytes" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'active',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS "StorageObject" (
    "key" TEXT NOT NULL PRIMARY KEY,
    "accountId" TEXT NOT NULL,
    "sizeBytes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE TABLE IF NOT EXISTS "TurnKey" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL,
    "keyId" TEXT NOT NULL,
    "apiTokenEnc" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
  )`,
];

/** Cheap probe — a missing sentinel table means the DDL batch must run. */
async function tablesExist(): Promise<boolean> {
  try {
    await db.$queryRawUnsafe(`SELECT 1 FROM "TurnKey" LIMIT 1`);
    await db.$queryRawUnsafe(`SELECT 1 FROM "LibraryVocab" LIMIT 1`);
    return true;
  } catch {
    return false;
  }
}

async function ensureTables(): Promise<void> {
  if (await tablesExist()) return;
  for (const stmt of DDL) {
    await db.$executeRawUnsafe(stmt);
  }
}

async function markerExists(cacheKey: string): Promise<boolean> {
  const row = await db.aiCache
    .findUnique({
      where: { feature_cacheKey: { feature: MARKER_FEATURE, cacheKey } },
      select: { id: true },
    })
    .catch(() => null);
  return Boolean(row);
}

async function setMarker(cacheKey: string): Promise<void> {
  await db.aiCache
    .create({ data: { feature: MARKER_FEATURE, cacheKey, response: "seeded" } })
    .catch(() => undefined);
}

/* ── Seeders (mirror scripts/seed-library.ts; identical upsert keys) ── */

async function seedVocab(): Promise<number> {
  let fails = 0;
  for (let i = 0; i < SEED_VOCAB.length; i++) {
    const e = SEED_VOCAB[i];
    const levelIdx = SEED_VOCAB.filter((x, j) => j < i && x.level === e.level).length;
    try {
      await db.libraryVocab.upsert({
        where: { word_level: { word: e.word, level: e.level } },
        create: {
          word: e.word,
          level: e.level,
          category: e.category || "general",
          data: JSON.stringify(e.data),
          sortOrder: levelIdx,
        },
        update: {
          category: e.category || "general",
          data: JSON.stringify(e.data),
          sortOrder: levelIdx,
        },
      });
    } catch {
      fails++;
    }
  }
  return fails;
}

async function seedGrammar(): Promise<number> {
  let fails = 0;
  for (let i = 0; i < SEED_GRAMMAR.length; i++) {
    const e = SEED_GRAMMAR[i];
    try {
      await db.libraryGrammar.upsert({
        where: { topic_level: { topic: e.topic, level: e.level } },
        create: {
          topic: e.topic,
          level: e.level,
          title: e.title,
          data: JSON.stringify(e.data),
          sortOrder: i,
        },
        update: { title: e.title, data: JSON.stringify(e.data), sortOrder: i },
      });
    } catch {
      fails++;
    }
  }
  return fails;
}

async function seedListening(): Promise<number> {
  let fails = 0;
  for (let i = 0; i < SEED_LISTENING.length; i++) {
    const e = SEED_LISTENING[i];
    try {
      await db.libraryListening.upsert({
        where: { slug: e.slug },
        create: {
          slug: e.slug,
          level: e.level,
          category: e.category,
          minutes: e.minutes,
          data: JSON.stringify(e.data),
          sortOrder: i,
        },
        update: {
          level: e.level,
          category: e.category,
          minutes: e.minutes,
          data: JSON.stringify(e.data),
          sortOrder: i,
        },
      });
    } catch {
      fails++;
    }
  }
  return fails;
}

async function runBootstrap(kind: LibraryKind): Promise<void> {
  try {
    if (await markerExists(MARKERS[kind])) return; // already done (owner may have edited since)
    await ensureTables();

    let fails: number;
    if (kind === "vocab") fails = await seedVocab();
    else if (kind === "grammar") fails = await seedGrammar();
    else fails = await seedListening();

    // Marker only on a clean run so a broken batch retries on the next hit.
    if (fails === 0) await setMarker(MARKERS[kind]);
    else console.warn(`[library-bootstrap] ${kind}: ${fails} upserts failed — will retry`);
  } catch (err) {
    console.error(`[library-bootstrap] ${kind} failed:`, err);
  }
}

/**
 * Schema-only bootstrap for non-Library routes (/api/storage, /api/turn):
 * creates any missing tables once, no seeding. Cheap after the first run
 * (two one-row probes). Safe to call on every request.
 */
export async function ensureDbTables(): Promise<void> {
  try {
    await ensureTables();
  } catch (err) {
    console.error("[db-bootstrap] DDL failed:", err);
  }
}

/**
 * Call at the top of every /api/library handler. Returns when the requested
 * kind is present in the DB (or bootstrap failed — callers proceed either
 * way and surface their own errors).
 */
export async function ensureLibrary(kind: LibraryKind): Promise<void> {
  const existing = inFlight.get(kind);
  if (existing) return existing;

  const task = runBootstrap(kind).finally(() => inFlight.delete(kind));
  inFlight.set(kind, task);
  return task;
}
