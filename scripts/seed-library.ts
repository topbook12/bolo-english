/**
 * Seed the owner-authored Library with starter content.
 *
 * Usage:
 *   bun scripts/seed-library.ts
 *
 * Idempotent — safe to run again (upserts). Content lives in
 * scripts/seed-data/ (authored trilingually: bn primary, en, hi).
 * Learners browse all of it with ZERO API keys; AI is only used when a
 * learner asks a question or checks a sentence.
 */
import { db } from "../src/lib/db";
import { SEED_VOCAB } from "./seed-data/vocab-data";
import { SEED_GRAMMAR } from "./seed-data/grammar-data";
import { SEED_LISTENING } from "./seed-data/listening-data";

async function main() {
  console.log("── Seeding owner Library ──");

  /* ── Vocabulary ── */
  let vOk = 0;
  for (let i = 0; i < SEED_VOCAB.length; i++) {
    const e = SEED_VOCAB[i];
    // sortOrder = index within its level (array is grouped by level)
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
        update: { category: e.category || "general", data: JSON.stringify(e.data), sortOrder: levelIdx },
      });
      vOk++;
      console.log(`  vocab ✓ ${e.word} (${e.level})`);
    } catch (err) {
      console.error(`  vocab ✗ ${e.word}: ${(err as Error).message}`);
    }
  }

  /* ── Grammar lessons ── */
  let gOk = 0;
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
      gOk++;
      console.log(`  grammar ✓ ${e.topic} (${e.level})`);
    } catch (err) {
      console.error(`  grammar ✗ ${e.topic}: ${(err as Error).message}`);
    }
  }

  /* ── Listening stories ── */
  let lOk = 0;
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
        update: { level: e.level, category: e.category, minutes: e.minutes, data: JSON.stringify(e.data), sortOrder: i },
      });
      lOk++;
      console.log(`  listening ✓ ${e.slug} (${e.level}/${e.category})`);
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
    `seeded ok: vocab ${vOk}/${SEED_VOCAB.length}, grammar ${gOk}/${SEED_GRAMMAR.length}, listening ${lOk}/${SEED_LISTENING.length}`
  );
  console.log(`db totals: vocab ${vCount}, grammar ${gCount}, listening ${lCount}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
  });
