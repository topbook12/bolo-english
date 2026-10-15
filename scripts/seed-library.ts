/**
 * Seed the owner-authored Library with starter content.
 *
 * Usage:
 *   bun scripts/seed-library.ts
 *
 * Idempotent — safe to run again (upserts). Content lives in
 * scripts/seed-data/ (authored trilingually: bn primary, en, hi).
 * Mirrors src/lib/db-bootstrap.ts v2 semantics: v1 rows only get their
 * learning-path unit/sortOrder metadata refreshed (owner data edits and
 * deletions are preserved), v2 entries are created if missing.
 *
 * Learners browse all of it with ZERO API keys; AI is only used when a
 * learner asks a question or checks a sentence.
 */
import { db } from "../src/lib/db";
import { SEED_VOCAB } from "./seed-data/vocab-data";
import { SEED_GRAMMAR } from "./seed-data/grammar-data";
import { SEED_LISTENING } from "./seed-data/listening-data";
import { SEED_VOCAB_V2_BEGINNER } from "./seed-data/vocab-v2-beginner";
import { SEED_VOCAB_V2_INTERMEDIATE } from "./seed-data/vocab-v2-intermediate";
import { SEED_VOCAB_V2_ADVANCED } from "./seed-data/vocab-v2-advanced";
import { SEED_GRAMMAR_V2_A1 } from "./seed-data/grammar-v2-a1";
import { SEED_GRAMMAR_V2_A2 } from "./seed-data/grammar-v2-a2";
import { SEED_GRAMMAR_V2_B } from "./seed-data/grammar-v2-b";
import { SEED_LISTENING_V2_BEGINNER } from "./seed-data/listening-v2-beginner";
import { SEED_LISTENING_V2_INTERMEDIATE } from "./seed-data/listening-v2-intermediate";
import { SEED_LISTENING_V2_ADVANCED } from "./seed-data/listening-v2-advanced";
import type { LibraryLevel } from "../src/lib/library-types";

/* Same unit mapping as db-bootstrap.ts — the 36 v1 words fold into units. */
const V1_VOCAB_UNITS: Record<string, number> = {
  hungry: 1, tired: 1, happy: 1,
  friend: 2,
  buy: 3, cheap: 3,
  help: 4, walk: 4, early: 4,
  rain: 5, beautiful: 5, easy: 5,
  improve: 1, suggest: 1,
  manage: 2, afford: 2, gain: 2,
  borrow: 3, rent: 3, delay: 3,
  brave: 4, confident: 4, polite: 4,
  achieve: 5,
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

interface VocabSeedEntry {
  word: string;
  level: LibraryLevel;
  category: string;
  unit: number;
  data: unknown;
  v2: boolean;
}

const ALL_VOCAB: VocabSeedEntry[] = [
  ...SEED_VOCAB.map((e) => ({
    word: e.word,
    level: e.level,
    category: e.category || "general",
    unit: V1_VOCAB_UNITS[e.word] ?? 1,
    data: e.data,
    v2: false,
  })),
  ...SEED_VOCAB_V2_BEGINNER,
  ...SEED_VOCAB_V2_INTERMEDIATE,
  ...SEED_VOCAB_V2_ADVANCED,
].map((e) => ({ ...e, v2: "v2" in e ? Boolean((e as { v2?: boolean }).v2) : true }));

interface GrammarSeedEntry {
  topic: string;
  level: LibraryLevel;
  title: string;
  unit: number;
  data: unknown;
  v2: boolean;
}

const ALL_GRAMMAR: GrammarSeedEntry[] = [
  ...SEED_GRAMMAR.map((e) => ({
    topic: e.topic,
    level: e.level,
    title: e.title,
    unit: V1_GRAMMAR_UNITS[e.topic] ?? 0,
    data: e.data,
    v2: false,
  })),
  ...SEED_GRAMMAR_V2_A1,
  ...SEED_GRAMMAR_V2_A2,
  ...SEED_GRAMMAR_V2_B,
].map((e) => ({ ...e, v2: "v2" in e ? Boolean((e as { v2?: boolean }).v2) : true }));

interface ListeningSeedEntry {
  slug: string;
  level: LibraryLevel;
  category: string;
  minutes: number;
  unit: number;
  data: unknown;
  v2: boolean;
}

const ALL_LISTENING: ListeningSeedEntry[] = [
  ...SEED_LISTENING.map((e) => ({
    slug: e.slug,
    level: e.level,
    category: e.category,
    minutes: e.minutes,
    unit: 0,
    data: e.data,
    v2: false,
  })),
  ...SEED_LISTENING_V2_BEGINNER,
  ...SEED_LISTENING_V2_INTERMEDIATE,
  ...SEED_LISTENING_V2_ADVANCED,
].map((e) => ({ ...e, v2: "v2" in e ? Boolean((e as { v2?: boolean }).v2) : true }));

async function main() {
  console.log("── Seeding owner Library (v2: learning path) ──");

  /* ── Vocabulary ── */
  let vOk = 0;
  for (let i = 0; i < ALL_VOCAB.length; i++) {
    const e = ALL_VOCAB[i];
    const levelIdx =
      ALL_VOCAB.filter((x, j) => j < i && x.level === e.level).length % 12;
    const sortOrder = e.v2 ? levelIdx + 12 : levelIdx;
    try {
      if (e.v2) {
        await db.libraryVocab.upsert({
          where: { word_level: { word: e.word, level: e.level } },
          create: {
            word: e.word,
            level: e.level,
            category: e.category,
            data: JSON.stringify(e.data),
            unit: e.unit,
            sortOrder,
          },
          update: { unit: e.unit, sortOrder },
        });
      } else {
        await db.libraryVocab.upsert({
          where: { word_level: { word: e.word, level: e.level } },
          create: {
            word: e.word,
            level: e.level,
            category: e.category,
            data: JSON.stringify(e.data),
            unit: e.unit,
            sortOrder,
          },
          update: { unit: e.unit, sortOrder },
        });
      }
      vOk++;
      console.log(`  vocab ✓ ${e.word} (${e.level} u${e.unit})`);
    } catch (err) {
      console.error(`  vocab ✗ ${e.word}: ${(err as Error).message}`);
    }
  }

  /* ── Grammar lessons ── */
  let gOk = 0;
  const seen = new Map<string, number>();
  for (const e of ALL_GRAMMAR) {
    const idx = seen.get(e.level) ?? (e.v2 ? 4 : 0);
    seen.set(e.level, idx + 1);
    try {
      if (e.v2) {
        await db.libraryGrammar.upsert({
          where: { topic_level: { topic: e.topic, level: e.level } },
          create: {
            topic: e.topic,
            level: e.level,
            title: e.title,
            data: JSON.stringify(e.data),
            unit: e.unit,
            sortOrder: idx,
          },
          update: { unit: e.unit, sortOrder: idx },
        });
      } else {
        await db.libraryGrammar.upsert({
          where: { topic_level: { topic: e.topic, level: e.level } },
          create: {
            topic: e.topic,
            level: e.level,
            title: e.title,
            data: JSON.stringify(e.data),
            unit: e.unit,
            sortOrder: idx,
          },
          update: { unit: e.unit, sortOrder: idx },
        });
      }
      gOk++;
      console.log(`  grammar ✓ ${e.topic} (${e.level} u${e.unit})`);
    } catch (err) {
      console.error(`  grammar ✗ ${e.topic}: ${(err as Error).message}`);
    }
  }

  /* ── Listening stories ── */
  let lOk = 0;
  for (let i = 0; i < ALL_LISTENING.length; i++) {
    const e = ALL_LISTENING[i];
    try {
      if (e.v2) {
        await db.libraryListening.upsert({
          where: { slug: e.slug },
          create: {
            slug: e.slug,
            level: e.level,
            category: e.category,
            minutes: e.minutes,
            data: JSON.stringify(e.data),
            unit: e.unit,
            sortOrder: i,
          },
          update: { unit: e.unit, sortOrder: i },
        });
      } else {
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
      }
      lOk++;
      console.log(`  listening ✓ ${e.slug} (${e.level} ep${e.unit})`);
    } catch (err) {
      console.error(`  listening ✗ ${e.slug}: ${(err as Error).message}`);
    }
  }

  const [vCount, gCount, lCount] = await Promise.all([
    db.libraryVocab.count(),
    db.libraryGrammar.count(),
    db.libraryListening.count(),
  ]);
  console.log("── Summary ──");
  console.log(
    `seeded ok: vocab ${vOk}/${ALL_VOCAB.length}, grammar ${gOk}/${ALL_GRAMMAR.length}, listening ${lOk}/${ALL_LISTENING.length}`
  );
  console.log(`db totals: vocab ${vCount}, grammar ${gCount}, listening ${lCount}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
  });
