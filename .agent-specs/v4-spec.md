# Grammar v4 content spec — point-form roadmap lessons (Task 10)

## Context

Bolo English (this repo) is a FREE English-learning platform for Bengali speakers.
Grammar lessons are stored as DB seed files in `scripts/seed-data/` (TriText = `{ bn, en, hi }`,
Bengali is the PRIMARY language; English example sentences always stay English).

**Owner feedback (translated):** "You are writing too much inside one paragraph. Design it in
POINT form. Divide each lesson into as many parts as needed — like a follow-up / ROADMAP of how
we will learn in this lesson. Use beautiful graphics, color, card views, emojis so users FEEL
like studying. For Tenses, separate each tense (like Present) into its own part — the way the
Present tense is separated is good; do that everywhere."

So v4 transforms every lesson from **paragraph explanations** into **scannable bullet points
with a lesson roadmap, emoji, formula boxes and small tables**.

## Data contract (already updated in src/lib/library-types.ts)

```ts
interface LibraryGrammarSection {
  heading: TriText;        // REQUIRED — must start with ONE distinct emoji + space
  lead?: TriText;          // NEW — one line (≤ 18 words) framing the section
  points?: TriText[];      // NEW — 4-8 crisp bullets; REPLACES the old body paragraph
  formula?: TriText;       // NEW — one compact pattern line in a highlighted box (optional)
  table?: {                // NEW — small comparison table (optional)
    head: TriText[];       //   2-3 columns
    rows: TriText[][];
  };
  body?: TriText;          // v4 lessons OMIT this field entirely
  examples: LibraryGrammarExample[]; // { wrong, right, note } — copy from source UNCHANGED
}
interface LibraryGrammarData {
  title: TriText;          // copy from source UNCHANGED
  intro: TriText;          // copy from source UNCHANGED
  roadmap?: TriText[];     // NEW — one item per section, same order, each starts with the
                           //   SAME emoji as its section heading
  sections: LibraryGrammarSection[];
  tips: TriText[];         // copy from source UNCHANGED
  quiz?: ...;              // copy from source UNCHANGED if present; omit if absent
}
```

## Your exact job

1. Read the SOURCE lesson(s) assigned to you (file + topic names given in your task prompt).
2. Transform each lesson into the v4 shape (rules below). Copy `topic`, `level`, `title`,
   `unit` EXACTLY from the source entry; add the `sortOrder` given in your prompt.
3. Write ONE new seed file (name + export name given in your task prompt).
4. Append your work record to `/home/z/my-project/worklog.md` (template at the bottom).
5. Do NOT modify any other file. Do NOT run the dev server. Do NOT run git.

## Transformation rules (per lesson)

### Roadmap
- `roadmap` = array of TriText, ONE item per section, SAME order as `sections`.
- Each item: the section's emoji + a short phrase (≤ 12 words) saying what that step teaches.
- Bengali example: `"🌉 রোজকার চার connector: and, but, so, because"`.
- This is the learner's visible "এই লেসনে যা শিখব" map — make each item enticing and concrete.

### Sections
- `heading`: prepend ONE distinct emoji + a space. Use a DIFFERENT emoji for every section
  (and the same emoji in bn/en/hi). Pick semantically: ⏰ tense, 🏗️ structure, 🚦 signal words,
  ⚠️ mistakes, 🎯 usage, 🧠 memory tricks, 📊 table/overview, 🗣️ speaking, ✍️ writing,
  💬 conversation, 🌉 connectors, 🧩 pieces, 🔁 transformation, 📖 story/recap.
- `lead`: ONE short line (≤ 18 words) that frames why this section matters. Write bn first,
  naturally — then en, then hi as faithful (not literal) translations.
- `points`: convert the ENTIRE `body` paragraph into 4-8 bullets:
  - Each bullet = ONE idea, ≤ ~22 words (bn), standalone-readable.
  - Two ideas in one sentence → two bullets. NEVER drop a fact: every rule, contrast, and
    English snippet embedded in the body must survive into some bullet.
  - Start definitional bullets with the bolded key term: `"**in** — চারপাশে ঘেরা জায়গা: in Dhaka, in the room"`।
  - Use `**bold**` Markdown sparingly — at most one bold span per bullet (the key term).
  - Keep English snippets inline after a colon; English stays English.
  - If a section would yield more than 8 points, SPLIT the section into two (update the
    roadmap accordingly). If a section covers two clearly distinct sub-topics, split it.
  - Aim: a learner scanning ONLY the bullets gets the complete topic — no hidden content.
- `formula`: where the section teaches a structure, one compact pattern line, e.g.
  `"কর্তা + have/has + ক্রিয়ার ৩য় রূপ (V3)"` — TriText. At least 3 sections per lesson
  should have a formula OR a table.
- `table`: where the body enumerates 3+ parallel items (signal words, forms, pairs), build a
  2-3 column table. Cell text short. English words stay English in all three locales.
- `examples`: copy the source array EXACTLY (every example, all three languages of `note`).
- `body`: OMIT — do not carry the paragraph over.
- `tips` / `quiz` / `intro` / `title`: copy from source EXACTLY (all languages).

### Style bar (Bengali)
- Natural, warm, direct — address the learner as "আপনি". No translationese.
- bn is written FIRST as the original; en and hi are faithful translations of the bn.
- No blue/indigo styling talk (UI handles colors). No emojis INSIDE point text except the
  one bolded-term style above (emoji only lives in heading + roadmap).

## Worked example (one section, before → after)

BEFORE (v3):
```ts
{
  heading: { bn: "চার প্রতিবেশী: and, but, so, because", en: "The everyday four: and, but, so, because", hi: "रोज़मर्रा के चार: and, but, so, because" },
  body: {
    bn: "এই চারটা শব্দ দুটো পূর্ণ clause-কে এক বাক্যে জোড়ে: and (আর/এবং — যোগ), but (কিন্তু — বিপরীত), so (তাই — ফলাফল), because (কারণ)। বাংলায় আমরা 'যেহেতু... সেহেতু', 'যদিও... তবু' — জোড়া মিলিয়ে বলি, কিন্তু ইংরেজিতে এক সম্পর্কে একটাই connector বসে: because বললে so আসবে না, although বললে but আসবে না। আরেকটা নিয়ম মনে রাখুন: দুটো পূর্ণ বাক্য শুধু কমা দিয়ে জোড়া যায় না (comma splice) — মাঝে and/but/so/because-এর মতো সংযোগ শব্দ লাগবেই।",
    en: "…(same info in English)…",
    hi: "…(same info in Hindi)…",
  },
  examples: [ /* keep exactly */ ],
}
```

AFTER (v4):
```ts
{
  heading: { bn: "🌉 চার প্রতিবেশী: and, but, so, because", en: "🌉 The everyday four: and, but, so, because", hi: "🌉 रोज़मर्रा के चार: and, but, so, because" },
  lead: {
    bn: "দুটো বাক্য জোড়া দেওয়ার চারটা রোজকার শব্দ — আর বাঙালি শিক্ষার্থীদের সবচেয়ে চেনা ফাঁদ।",
    en: "The four everyday words that join two sentences — and the traps Bengali speakers know best.",
    hi: "दो वाक्य जोड़ने वाले चार रोज़मर्रा के शब्द — और बंगाली वक्ताओं की सबसे जानी-पहचानी गलतियाँ।",
  },
  points: [
    { bn: "**and** — যোগ বোঝায় (আর/এবং): I play cricket **and** he plays football।", en: "**and** — adds information: I play cricket and he plays football.", hi: "**and** — जोड़ बताता है: I play cricket and he plays football." },
    { bn: "**but** — বিপরীত বোঝায় (কিন্তু): He is poor **but** honest।", en: "**but** — shows contrast: He is poor but honest.", hi: "**but** — विरोध बताता है: He is poor but honest." },
    { bn: "**so** — ফলাফল বোঝায় (তাই): It rained, **so** we stayed home।", en: "**so** — shows result: It rained, so we stayed home.", hi: "**so** — परिणाम बताता है: It rained, so we stayed home." },
    { bn: "**because** — কারণ বোঝায়: We stayed home **because** it rained।", en: "**because** — gives the reason: We stayed home because it rained.", hi: "**because** — कारण बताता है: We stayed home because it rained." },
    { bn: "এক সম্পর্কে একটাই connector — because থাকলে so বাদ, although থাকলে but বাদ।", en: "One relationship takes ONE connector — drop so when because is there, drop but when although is there.", hi: "एक संबंध के लिए एक ही connector — because है तो so नहीं, although है तो but नहीं।" },
    { bn: "বাংলার 'যেহেতু... সেহেতু', 'যদিও... তবু' জোড়া ইংরেজিতে কখনো চলে না।", en: "The Bengali pairs 'since... therefore' and 'although... but' never work in English.", hi: "बांग्ला की 'जबकि... इसलिए', 'यद्यपि... लेकिन' जोड़ी अंग्रेज़ी में कभी नहीं चलती।" },
    { bn: "দুটো পূর্ণ বাক্য শুধু কমায় জোড়া যায় না — এটা comma splice; মাঝে conjunction লাগবেই।", en: "Two full sentences never join with only a comma — that is a comma splice; a conjunction is required.", hi: "दो पूर्ण वाक्य केवल कॉमा से नहीं जुड़ते — यह comma splice है; conjunction ज़रूरी है।" },
  ],
  examples: [ /* copied EXACTLY from source */ ],
}
```

## File template

```ts
// ─── Grammar seeds v4: <BATCH TITLE> (<N> lessons) ───
// Task 10 — point-form roadmap upgrade. Source: <source file>.
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_<EXPORT>: SeedGrammarV4Entry[] = [
  /* ── 1. <Topic name> ────── */
  {
    topic: "...",          // EXACT source string
    level: "...",          // EXACT source string
    title: "...",          // EXACT source string
    unit: <source unit>,
    sortOrder: <given in your prompt>,
    data: {
      title: { /* EXACT source */ },
      intro: { /* EXACT source */ },
      roadmap: [ /* one TriText per section */ ],
      sections: [ /* v4 sections */ ],
      tips: [ /* EXACT source */ ],
      quiz: [ /* EXACT source, only if present in source */ ],
    },
  },
];

export default SEED_GRAMMAR_V4_<EXPORT>;
```

The file MUST be valid TypeScript importing only from `./grammar-v4-types` (type-only).
It gets compiled and JSON-stringified by the seeder — no function values, no undefined.

## Worklog (MANDATORY, append only)

Append to the END of `/home/z/my-project/worklog.md`:

```markdown
---
Task ID: <your task id>
Agent: v4-content-agent
Task: <one line — which lessons>

Work Log:
- <concrete steps>

Stage Summary:
- <file written, lessons covered, section/point counts>
```
