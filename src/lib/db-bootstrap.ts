import { db } from "@/lib/db";
import { SEED_VOCAB } from "../../scripts/seed-data/vocab-data";
import { SEED_GRAMMAR } from "../../scripts/seed-data/grammar-data";
import { SEED_LISTENING } from "../../scripts/seed-data/listening-data";
import { SEED_VOCAB_V2_BEGINNER } from "../../scripts/seed-data/vocab-v2-beginner";
import { SEED_VOCAB_V2_INTERMEDIATE } from "../../scripts/seed-data/vocab-v2-intermediate";
import { SEED_VOCAB_V2_ADVANCED } from "../../scripts/seed-data/vocab-v2-advanced";
import { SEED_GRAMMAR_V2_A1 } from "../../scripts/seed-data/grammar-v2-a1";
import { SEED_GRAMMAR_V2_A2 } from "../../scripts/seed-data/grammar-v2-a2";
import { SEED_GRAMMAR_V2_B } from "../../scripts/seed-data/grammar-v2-b";
// v3 — the comprehensive "develop every topic properly" upgrade (Task 9.3):
// deep multi-section lessons for ALL 12 beginner + 14 advanced topics and the
// 8 missing intermediate topics. One TriText row covers bn/en/hi.
import { SEED_GRAMMAR_V3_B1 } from "../../scripts/seed-data/grammar-v3-b1";
import { SEED_GRAMMAR_V3_B2A } from "../../scripts/seed-data/grammar-v3-b2a";
import { SEED_GRAMMAR_V3_B2B } from "../../scripts/seed-data/grammar-v3-b2b";
import { SEED_GRAMMAR_V3_B3 } from "../../scripts/seed-data/grammar-v3-b3";
import { SEED_GRAMMAR_V3_I1A } from "../../scripts/seed-data/grammar-v3-i1a";
import { SEED_GRAMMAR_V3_I1B } from "../../scripts/seed-data/grammar-v3-i1b";
import { SEED_GRAMMAR_V3_I2 } from "../../scripts/seed-data/grammar-v3-i2";
import { SEED_GRAMMAR_V3_I3 } from "../../scripts/seed-data/grammar-v3-i3";
import { SEED_GRAMMAR_V3_I4 } from "../../scripts/seed-data/grammar-v3-i4";
import { SEED_GRAMMAR_V3_A1 } from "../../scripts/seed-data/grammar-v3-a1";
import { SEED_GRAMMAR_V3_A2A } from "../../scripts/seed-data/grammar-v3-a2a";
import { SEED_GRAMMAR_V3_A2B } from "../../scripts/seed-data/grammar-v3-a2b";
import { SEED_GRAMMAR_V3_A2C } from "../../scripts/seed-data/grammar-v3-a2c";
import { SEED_GRAMMAR_V3_A3 } from "../../scripts/seed-data/grammar-v3-a3";
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
  grammar: "grammar_v3", // v3 = the deep per-topic content upgrade
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

const V1_GRAMMAR_UNITS: Record<string, number> = {
  "Tense basics": 1,
  "Articles (a/an/the)": 2,
  "Prepositions (in/on/at)": 3,
  Conditionals: 4,
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
  data: unknown;
}

const V1_GRAMMAR: GrammarSeedEntry[] = SEED_GRAMMAR.map((e) => ({
  topic: e.topic,
  level: e.level,
  title: e.title,
  unit: V1_GRAMMAR_UNITS[e.topic] ?? 0,
  data: e.data,
}));

const V2_GRAMMAR: GrammarSeedEntry[] = [
  ...SEED_GRAMMAR_V2_A1,
  ...SEED_GRAMMAR_V2_A2,
  ...SEED_GRAMMAR_V2_B,
];

/* v3 — deep per-topic upgrade, authored in course order per level:
 *   beginner  → 12 lessons (path anchors u1-u5 first, then extras)
 *   advanced  → 14 lessons (path anchors u1-u5 first, then extras)
 *   intermediate → 8 gap-filling lessons (v1/v2 rows keep sortOrder 0-15)
 * v3 rows are a deliberate CONTENT upgrade mandated by the owner: unlike
 * v1/v2, the `data` payload is overwritten on every (re)seed run. */
const V3_GRAMMAR: GrammarSeedEntry[] = [
  // beginner — course order
  ...SEED_GRAMMAR_V3_B1,
  ...SEED_GRAMMAR_V3_B2A,
  ...SEED_GRAMMAR_V3_B2B,
  ...SEED_GRAMMAR_V3_B3,
  // advanced — course order
  ...SEED_GRAMMAR_V3_A1,
  ...SEED_GRAMMAR_V3_A2A,
  ...SEED_GRAMMAR_V3_A2B,
  ...SEED_GRAMMAR_V3_A2C,
  ...SEED_GRAMMAR_V3_A3,
  // intermediate — fills the 8 gaps left by v1/v2, then REPLACES the four
  // thin v1 anchor lessons with the full-depth versions (same topic strings,
  // same path units 1-4, same sortOrder slots 0-3)
  ...SEED_GRAMMAR_V3_I1A,
  ...SEED_GRAMMAR_V3_I1B,
  ...SEED_GRAMMAR_V3_I2,
  ...SEED_GRAMMAR_V3_I3,
  ...SEED_GRAMMAR_V3_I4,
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

  for (let i = 0; i < V1_GRAMMAR.length; i++) {
    const e = V1_GRAMMAR[i];
    try {
      await db.libraryGrammar.upsert({
        where: { topic_level: { topic: e.topic, level: e.level } },
        create: {
          topic: e.topic,
          level: e.level,
          title: e.title,
          data: JSON.stringify(e.data),
          unit: e.unit,
          sortOrder: i,
        },
        update: { unit: e.unit, sortOrder: i },
      });
    } catch {
      fails++;
    }
  }

  const perLevelSeen = new Map<string, number>();
  for (let i = 0; i < V2_GRAMMAR.length; i++) {
    const e = V2_GRAMMAR[i];
    const seen = perLevelSeen.get(e.level) ?? 4; // v1 intermediate occupies 0-3
    perLevelSeen.set(e.level, seen + 1);
    try {
      await db.libraryGrammar.upsert({
        where: { topic_level: { topic: e.topic, level: e.level } },
        create: {
          topic: e.topic,
          level: e.level,
          title: e.title,
          data: JSON.stringify(e.data),
          unit: e.unit,
          sortOrder: seen,
        },
        update: { unit: e.unit, sortOrder: seen },
      });
    } catch {
      fails++;
    }
  }

  // v3 — deep per-topic upgrade: CREATE or OVERWRITE data (owner-mandated
  // content upgrade). Path anchors (unit 1-5) keep sortOrder = unit-1 so
  // they stay in their v1 slots; extras continue after v1/v2 per level.
  const v3Seen = new Map<string, number>();
  for (let i = 0; i < V3_GRAMMAR.length; i++) {
    const e = V3_GRAMMAR[i];
    const base = e.level === "intermediate" ? 16 : 0;
    const seen = (v3Seen.get(e.level) ?? base - 1) + 1;
    v3Seen.set(e.level, seen);
    const sortOrder = e.unit >= 1 && e.unit <= 5 ? e.unit - 1 : seen;
    try {
      await db.libraryGrammar.upsert({
        where: { topic_level: { topic: e.topic, level: e.level } },
        create: {
          topic: e.topic,
          level: e.level,
          title: e.title,
          data: JSON.stringify(e.data),
          unit: e.unit,
          sortOrder: seen,
        },
        update: {
          title: e.title,
          data: JSON.stringify(e.data),
          unit: e.unit,
          sortOrder: seen,
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
