import { db } from "@/lib/db";
import { SEED_VOCAB } from "../../scripts/seed-data/vocab-data";
import { SEED_LISTENING } from "../../scripts/seed-data/listening-data";
import { SEED_VOCAB_V2_BEGINNER } from "../../scripts/seed-data/vocab-v2-beginner";
import { SEED_VOCAB_V2_INTERMEDIATE } from "../../scripts/seed-data/vocab-v2-intermediate";
import { SEED_VOCAB_V2_ADVANCED } from "../../scripts/seed-data/vocab-v2-advanced";
// v4 — the point-form ROADMAP upgrade (Task 10, owner mandate): every one of
// the 50 grammar lessons rebuilt as scannable bullet points with a visible
// lesson roadmap, emoji step headings, formula boxes and comparison tables.
// One TriText row covers bn/en/hi; sortOrder is EXPLICIT per entry.
import { SEED_GRAMMAR_V4_B1A } from "../../scripts/seed-data/grammar-v4-b1a";
import { SEED_GRAMMAR_V4_B1B } from "../../scripts/seed-data/grammar-v4-b1b";
import { SEED_GRAMMAR_V4_B1C } from "../../scripts/seed-data/grammar-v4-b1c";
import { SEED_GRAMMAR_V4_B2A } from "../../scripts/seed-data/grammar-v4-b2a";
import { SEED_GRAMMAR_V4_B2B } from "../../scripts/seed-data/grammar-v4-b2b";
import { SEED_GRAMMAR_V4_B3A } from "../../scripts/seed-data/grammar-v4-b3a";
import { SEED_GRAMMAR_V4_B3B } from "../../scripts/seed-data/grammar-v4-b3b";
import { SEED_GRAMMAR_V4_A1A } from "../../scripts/seed-data/grammar-v4-a1a";
import { SEED_GRAMMAR_V4_A1B } from "../../scripts/seed-data/grammar-v4-a1b";
import { SEED_GRAMMAR_V4_A1C } from "../../scripts/seed-data/grammar-v4-a1c";
import { SEED_GRAMMAR_V4_A2A } from "../../scripts/seed-data/grammar-v4-a2a";
import { SEED_GRAMMAR_V4_A2B } from "../../scripts/seed-data/grammar-v4-a2b";
import { SEED_GRAMMAR_V4_A2C } from "../../scripts/seed-data/grammar-v4-a2c";
import { SEED_GRAMMAR_V4_A3A } from "../../scripts/seed-data/grammar-v4-a3a";
import { SEED_GRAMMAR_V4_A3B } from "../../scripts/seed-data/grammar-v4-a3b";
import { SEED_GRAMMAR_V4_I1A } from "../../scripts/seed-data/grammar-v4-i1a";
import { SEED_GRAMMAR_V4_I1B } from "../../scripts/seed-data/grammar-v4-i1b";
import { SEED_GRAMMAR_V4_I2A } from "../../scripts/seed-data/grammar-v4-i2a";
import { SEED_GRAMMAR_V4_I2B } from "../../scripts/seed-data/grammar-v4-i2b";
import { SEED_GRAMMAR_V4_I3 } from "../../scripts/seed-data/grammar-v4-i3";
import { SEED_GRAMMAR_V4_I4 } from "../../scripts/seed-data/grammar-v4-i4";
import { SEED_GRAMMAR_V4_V2A1 } from "../../scripts/seed-data/grammar-v4-v2a1";
import { SEED_GRAMMAR_V4_V2A2 } from "../../scripts/seed-data/grammar-v4-v2a2";
import { SEED_GRAMMAR_V4_V2B1 } from "../../scripts/seed-data/grammar-v4-v2b1";
import { SEED_GRAMMAR_V4_V2B2 } from "../../scripts/seed-data/grammar-v4-v2b2";
import { SEED_LISTENING_V2_BEGINNER } from "../../scripts/seed-data/listening-v2-beginner";
import { SEED_LISTENING_V2_INTERMEDIATE } from "../../scripts/seed-data/listening-v2-intermediate";
import { SEED_LISTENING_V2_ADVANCED } from "../../scripts/seed-data/listening-v2-advanced";
import type { LibraryLevel } from "./library-types";

/* ─── Database self-bootstrap (zero-config production) ──────────────────────
 * The owner should NEVER have to run db:push or a seed script against the
 * production database. When a schema area is touched for the first time:
 *
 *   1. Missing tables are created (CREATE TABLE IF NOT EXISTS matches the
 *      Prisma schema exactly, so a future db:push stays a no-op).
 *   2. Missing columns are added in place (e.g. the v2 learning-path `unit`
 *      column) — safe, idempotent ALTERs guarded by PRAGMA probes.
 *   3. Seeds content ONCE per seed version. A marker row in AiCache
 *      (feature="library_bootstrap") records completion, so seeding never
 *      re-runs.
 *
 * v2 seeding rules (owner-edit safe):
 *   • v1 rows that already exist are NOT rewritten — only their `unit` /
 *     `sortOrder` path metadata is corrected via updateMany. Rows the owner
 *     deleted stay deleted; data the owner edited stays edited.
 *   • v2 entries are created if missing; if present, only `unit`/`sortOrder`
 *     metadata is refreshed (never `data`).
 *
 * Everything is idempotent and safe to race (unique-key upserts + marker
 * guards). Failures are logged and swallowed — the calling API keeps its
 * own error handling; the next request simply retries the bootstrap.
 * ──────────────────────────────────────────────────────────────────────── */

export type LibraryKind = "vocab" | "grammar" | "listening";

const MARKER_FEATURE = "library_bootstrap";
const MARKERS: Record<LibraryKind, string> = {
  vocab: "vocab_v2",
  grammar: "grammar_v4", // v4 = point-form ROADMAP upgrade (Task 10)
  listening: "listening_v2",
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
    "unit" INTEGER NOT NULL DEFAULT 1,
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
    "unit" INTEGER NOT NULL DEFAULT 1,
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
    "unit" INTEGER NOT NULL DEFAULT 0,
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

/* In-place column migrations for databases created before the learning-path
 * (v2) schema: the Library tables exist but lack the `unit` column. */
const COLUMN_MIGRATIONS: { table: string; ddl: string }[] = [
  { table: "LibraryVocab", ddl: `ALTER TABLE "LibraryVocab" ADD COLUMN "unit" INTEGER NOT NULL DEFAULT 1` },
  { table: "LibraryGrammar", ddl: `ALTER TABLE "LibraryGrammar" ADD COLUMN "unit" INTEGER NOT NULL DEFAULT 1` },
  { table: "LibraryListening", ddl: `ALTER TABLE "LibraryListening" ADD COLUMN "unit" INTEGER NOT NULL DEFAULT 0` },
];

let columnsReady = false;

/** Add any missing `unit` columns once per process (PRAGMA-probed, idempotent). */
async function ensureColumns(): Promise<void> {
  if (columnsReady) return;
  let ok = true;
  for (const t of COLUMN_MIGRATIONS) {
    try {
      const cols = await db.$queryRawUnsafe<{ name: string }[]>(
        `PRAGMA table_info("${t.table}")`
      );
      if (Array.isArray(cols) && cols.some((c) => c.name === "unit")) continue;
      await db.$executeRawUnsafe(t.ddl);
    } catch (err) {
      ok = false;
      console.warn(`[library-bootstrap] unit column on ${t.table}:`, err);
    }
  }
  if (ok) columnsReady = true;
}

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
  if (!(await tablesExist())) {
    for (const stmt of DDL) {
      await db.$executeRawUnsafe(stmt);
    }
  }
  await ensureColumns();
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

/* ── Seeders ──────────────────────────────────────────────────────────────
 * v2 merged seed model:
 *   • v1 entries: created when MISSING (fresh DBs get the full starter
 *     library); when a row already exists ONLY unit/sortOrder metadata is
 *     refreshed — owner data edits are never overwritten. Rows the owner
 *     deleted before the v2 migration are restored once (the intentional
 *     v1→v2 migration), after which the v2 marker prevents re-seeding.
 *   • v2 entries: create if missing; if present, refresh unit/sortOrder only.
 * ──────────────────────────────────────────────────────────────────────── */

interface VocabSeedEntry {
  word: string;
  level: LibraryLevel;
  category: string;
  unit: number;
  data: unknown;
}

/* Unit mapping for the 36 v1 words (they were authored before the path
 * existed; each level's 12 words fold into the 5 thematic units). */
const V1_VOCAB_UNITS: Record<string, number> = {
  // beginner
  hungry: 1, tired: 1, happy: 1,
  friend: 2,
  buy: 3, cheap: 3,
  help: 4, walk: 4, early: 4,
  rain: 5, beautiful: 5, easy: 5,
  // intermediate
  improve: 1, suggest: 1,
  manage: 2, afford: 2, gain: 2,
  borrow: 3, rent: 3, delay: 3,
  brave: 4, confident: 4, polite: 4,
  achieve: 5,
  // advanced
  acknowledge: 1, dilemma: 1,
  neglect: 2,
  negotiate: 3, feasible: 3,
  meticulous: 4, deteriorate: 4,
  reluctant: 5, overwhelmed: 5, ambitious: 5, persevere: 5, versatile: 5,
};

const V1_VOCAB: VocabSeedEntry[] = SEED_VOCAB.map((e) => ({
  word: e.word,
  level: e.level,
  category: e.category || "general",
  unit: V1_VOCAB_UNITS[e.word] ?? 1,
  data: e.data,
}));

const V2_VOCAB: VocabSeedEntry[] = [
  ...SEED_VOCAB_V2_BEGINNER,
  ...SEED_VOCAB_V2_INTERMEDIATE,
  ...SEED_VOCAB_V2_ADVANCED,
];

interface GrammarSeedEntry {
  topic: string;
  level: LibraryLevel;
  title: string;
  unit: number;
  /** Explicit deterministic grid slot (v4 — no derived counters, no drift). */
  sortOrder: number;
  data: unknown;
}

/* v4 — point-form ROADMAP upgrade, 50 lessons in course order per level.
 * sortOrder is EXPLICIT on every entry: beginner 0-11, intermediate 0-23
 * (path anchors 0-3, v2 extras 4-15, gap-fillers 16-23), advanced 0-13.
 * v4 rows OVERWRITE `data` on every (re)seed run — owner-mandated upgrade. */
const V4_GRAMMAR: GrammarSeedEntry[] = [
  // beginner — course order (path anchors units 1-5 first, then extras)
  ...SEED_GRAMMAR_V4_B1A,
  ...SEED_GRAMMAR_V4_B1B,
  ...SEED_GRAMMAR_V4_B1C,
  ...SEED_GRAMMAR_V4_B2A,
  ...SEED_GRAMMAR_V4_B2B,
  ...SEED_GRAMMAR_V4_B3A,
  ...SEED_GRAMMAR_V4_B3B,
  // advanced — course order (path anchors units 1-5 first, then extras)
  ...SEED_GRAMMAR_V4_A1A,
  ...SEED_GRAMMAR_V4_A1B,
  ...SEED_GRAMMAR_V4_A1C,
  ...SEED_GRAMMAR_V4_A2A,
  ...SEED_GRAMMAR_V4_A2B,
  ...SEED_GRAMMAR_V4_A2C,
  ...SEED_GRAMMAR_V4_A3A,
  ...SEED_GRAMMAR_V4_A3B,
  // intermediate — path anchors (units 1-4), then v2 extras, then gap-fillers
  ...SEED_GRAMMAR_V4_I3,
  ...SEED_GRAMMAR_V4_I4,
  ...SEED_GRAMMAR_V4_V2A1,
  ...SEED_GRAMMAR_V4_V2A2,
  ...SEED_GRAMMAR_V4_V2B1,
  ...SEED_GRAMMAR_V4_V2B2,
  ...SEED_GRAMMAR_V4_I1A,
  ...SEED_GRAMMAR_V4_I1B,
  ...SEED_GRAMMAR_V4_I2A,
  ...SEED_GRAMMAR_V4_I2B,
];

interface ListeningSeedEntry {
  slug: string;
  level: LibraryLevel;
  category: string;
  minutes: number;
  unit: number;
  data: unknown;
}

const V1_LISTENING: ListeningSeedEntry[] = SEED_LISTENING.map((e) => ({
  slug: e.slug,
  level: e.level,
  category: e.category,
  minutes: e.minutes,
  unit: 0, // standalone stories — extra practice off the path
  data: e.data,
}));

const V2_LISTENING: ListeningSeedEntry[] = [
  ...SEED_LISTENING_V2_BEGINNER,
  ...SEED_LISTENING_V2_INTERMEDIATE,
  ...SEED_LISTENING_V2_ADVANCED,
];

async function seedVocab(): Promise<number> {
  let fails = 0;

  // v1 rows — create-if-missing; refresh path metadata only when present.
  for (let i = 0; i < V1_VOCAB.length; i++) {
    const e = V1_VOCAB[i];
    const levelIdx = V1_VOCAB.filter((x, j) => j < i && x.level === e.level).length;
    try {
      await db.libraryVocab.upsert({
        where: { word_level: { word: e.word, level: e.level } },
        create: {
          word: e.word,
          level: e.level,
          category: e.category || "general",
          data: JSON.stringify(e.data),
          unit: e.unit,
          sortOrder: levelIdx,
        },
        update: { unit: e.unit, sortOrder: levelIdx },
      });
    } catch {
      fails++;
    }
  }

  // v2 entries — create if missing; refresh path metadata if present.
  for (let i = 0; i < V2_VOCAB.length; i++) {
    const e = V2_VOCAB[i];
    const levelIdx = V2_VOCAB.filter((x, j) => j < i && x.level === e.level).length + 12;
    try {
      await db.libraryVocab.upsert({
        where: { word_level: { word: e.word, level: e.level } },
        create: {
          word: e.word,
          level: e.level,
          category: e.category || "general",
          data: JSON.stringify(e.data),
          unit: e.unit,
          sortOrder: levelIdx,
        },
        update: { unit: e.unit, sortOrder: levelIdx },
      });
    } catch {
      fails++;
    }
  }
  return fails;
}

async function seedGrammar(): Promise<number> {
  let fails = 0;

  // v4 — point-form ROADMAP upgrade: CREATE or OVERWRITE (owner-mandated
  // content upgrade). sortOrder is EXPLICIT on every entry, which also FIXES
  // the v3 bug where intermediate anchors drifted to slots 24-27.
  for (let i = 0; i < V4_GRAMMAR.length; i++) {
    const e = V4_GRAMMAR[i];
    try {
      await db.libraryGrammar.upsert({
        where: { topic_level: { topic: e.topic, level: e.level } },
        create: {
          topic: e.topic,
          level: e.level,
          title: e.title,
          data: JSON.stringify(e.data),
          unit: e.unit,
          sortOrder: e.sortOrder,
        },
        update: {
          title: e.title,
          data: JSON.stringify(e.data),
          unit: e.unit,
          sortOrder: e.sortOrder,
        },
      });
    } catch {
      fails++;
    }
  }
  return fails;
}

async function seedListening(): Promise<number> {
  let fails = 0;

  for (let i = 0; i < V1_LISTENING.length; i++) {
    const e = V1_LISTENING[i];
    try {
      await db.libraryListening.upsert({
        where: { slug: e.slug },
        create: {
          slug: e.slug,
          level: e.level,
          category: e.category,
          minutes: e.minutes,
          data: JSON.stringify(e.data),
          unit: 0,
          sortOrder: i,
        },
        update: { unit: 0, sortOrder: i },
      });
    } catch {
      fails++;
    }
  }

  for (let i = 0; i < V2_LISTENING.length; i++) {
    const e = V2_LISTENING[i];
    try {
      await db.libraryListening.upsert({
        where: { slug: e.slug },
        create: {
          slug: e.slug,
          level: e.level,
          category: e.category,
          minutes: e.minutes,
          data: JSON.stringify(e.data),
          unit: e.unit,
          sortOrder: V1_LISTENING.length + i,
        },
        update: { unit: e.unit, sortOrder: V1_LISTENING.length + i },
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
