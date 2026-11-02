// Temporary structural validation for the new reading-v2 seed files (not part of the app).
import { SEED_READING_V2_BEGINNER } from "../scripts/seed-data/reading-v2-beginner";
import { SEED_READING_V2_INTERMEDIATE } from "../scripts/seed-data/reading-v2-intermediate";
import { SEED_READING_V2_ADVANCED } from "../scripts/seed-data/reading-v2-advanced";
import { SEED_READING_V1_BEGINNER } from "../scripts/seed-data/reading-v1-beginner";
import { SEED_READING_V1_INTERMEDIATE } from "../scripts/seed-data/reading-v1-intermediate";
import { SEED_READING_V1_ADVANCED } from "../scripts/seed-data/reading-v1-advanced";
import type { SeedReadingEntry } from "../scripts/seed-data/reading-v2-beginner";

const CATS = new Set(["daily", "travel", "work", "culture", "science", "inspire"]);
const GENRES = new Set(["story", "dialog", "letter", "diary", "article", "news"]);
const LEVELS = new Set(["beginner", "intermediate", "advanced"]);

const v1slugs = new Set(
  [...SEED_READING_V1_BEGINNER, ...SEED_READING_V1_INTERMEDIATE, ...SEED_READING_V1_ADVANCED].map((e: { slug: string }) => e.slug)
);

let fails = 0;
const fail = (msg: string) => {
  fails++;
  console.error("  ✗ " + msg);
};

function check(entry: SeedReadingEntry, level: string) {
  const p = (s: string) => console.log("  · " + s);
  p(`slug=${entry.slug} cat=${entry.category} genre=${entry.data.genre} minutes=${entry.minutes} unit=${entry.unit}`);

  if (v1slugs.has(entry.slug)) fail(`${entry.slug}: slug collides with v1`);
  if (entry.level !== level) fail(`${entry.slug}: level mismatch`);
  if (!CATS.has(entry.category)) fail(`${entry.slug}: bad category`);
  if (!GENRES.has(entry.data.genre)) fail(`${entry.slug}: bad genre`);
  if (entry.unit !== 0) fail(`${entry.slug}: v2 entries must be standalone (unit 0)`);

  const d = entry.data;
  for (const [k, v] of Object.entries({ title: d.title, summary: d.summary })) {
    if (!v.bn || !v.en || !v.hi) fail(`${entry.slug}: ${k} missing a language`);
  }

  const paras = d.paragraphs;
  if (paras.length < 5) fail(`${entry.slug}: only ${paras.length} paragraphs`);
  let words = 0;
  let maxSentence = 0;
  for (const para of paras) {
    if (!para.en || !para.bn || !para.hi) fail(`${entry.slug}: paragraph missing a language`);
    words += para.en.trim().split(/\s+/).length;
    for (const s of para.en.split(/(?<=[.!?])\s+/)) {
      maxSentence = Math.max(maxSentence, s.trim().split(/\s+/).length);
    }
  }
  if (level === "beginner" && (words < 160 || words > 260)) fail(`${entry.slug}: beginner word count ${words} outside 160–260`);
  p(`paragraphs=${paras.length} enWords=${words} maxSentenceWords=${maxSentence}`);

  if (d.vocabulary.length !== 6) fail(`${entry.slug}: vocab count ${d.vocabulary.length} != 6`);
  for (const v of d.vocabulary) {
    if (!v.word || !v.example) fail(`${entry.slug}: vocab ${v.word} missing word/example`);
    if (!v.meaning.bn || !v.meaning.en || !v.meaning.hi) fail(`${entry.slug}: vocab ${v.word} missing meaning lang`);
  }

  if (d.quiz.length !== 5) fail(`${entry.slug}: quiz count ${d.quiz.length} != 5`);
  d.quiz.forEach((q, i) => {
    if (!q.question.bn || !q.question.en || !q.question.hi) fail(`${entry.slug}: q${i} question missing lang`);
    if (q.options.length !== 4) fail(`${entry.slug}: q${i} has ${q.options.length} options`);
    if (q.answer < 0 || q.answer > 3) fail(`${entry.slug}: q${i} answer out of range`);
    for (const o of q.options) if (!o.bn || !o.en || !o.hi) fail(`${entry.slug}: q${i} option missing lang`);
    if (!q.explain.bn || !q.explain.en || !q.explain.hi) fail(`${entry.slug}: q${i} explain missing lang`);
  });
}

const batches: Array<[string, SeedReadingEntry[], string, number]> = [
  ["BEGINNER", SEED_READING_V2_BEGINNER, "beginner", 4],
  ["INTERMEDIATE", SEED_READING_V2_INTERMEDIATE, "intermediate", 3],
  ["ADVANCED", SEED_READING_V2_ADVANCED, "advanced", 3],
];

for (const [label, list, level, expected] of batches) {
  console.log(`── ${label} v2 ──`);
  if (list.length !== expected) fail(`${label}: ${list.length} entries, expected ${expected}`);
  if (!LEVELS.has(level)) fail(`${label}: bad level`);
  for (const e of list) check(e, level);
}

const allV2 = [...SEED_READING_V2_BEGINNER, ...SEED_READING_V2_INTERMEDIATE, ...SEED_READING_V2_ADVANCED];
const dupe = new Set<string>();
for (const e of allV2) {
  if (dupe.has(e.slug)) fail(`duplicate v2 slug: ${e.slug}`);
  dupe.add(e.slug);
}

console.log(`── total v2 entries: ${allV2.length} (expected 10) ──`);
if (fails) {
  console.error(`FAILED with ${fails} problem(s)`);
  process.exit(1);
}
console.log("ALL CHECKS PASSED ✓");
