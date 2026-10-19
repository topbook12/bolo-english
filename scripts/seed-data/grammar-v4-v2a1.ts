// ─── Grammar seeds v4: INTERMEDIATE batch v2-A1 (3 lessons) ───
// Task 10 — point-form roadmap upgrade. Source: scripts/seed-data/grammar-v2-a1.ts
// (v2 body paragraphs → bullet points, roadmap + leads + formula boxes + tables added;
// title/intro/tips/examples copied EXACTLY; quiz omitted — source had none).
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_V2A1: SeedGrammarV4Entry[] = [
  /* ── 1. Comparatives & Superlatives (unit 5 → sortOrder 4) ───────────── */
  {
    topic: "Comparatives & Superlatives",
    level: "intermediate",
    title: "Comparatives & Superlatives (Intermediate)",
    unit: 5,
    sortOrder: 4,
    data: {
      title: {
        bn: "তুলনা: Comparative ও Superlative (মধ্যম স্তর)",
        en: "Comparatives & Superlatives (Intermediate)",
        hi: "तुलना: कम्पैरेटिव और सुपरलेटिव (मध्यम स्तर)",
      },
      intro: {
        bn: "তুলনা করতে গেলেই বাংলাভাষীরা 'more taller', 'most best'-এর মতো দ্বিগুণ শব্দ বসিয়ে ফেলেন, আবার than-এর জায়গায় then লিখে বসেন! ইংরেজিতে এক তুলনায় একটাই চিহ্ন চলে: হয় -er/-est, নয়তো more/most — কখনো দুটো একসাথে নয়। এই পাঠে ছোট-বড় adjective-এর নিয়ম, irregular রূপ, as...as তুলনা আর ক্লাসিক ভুলগুলো একে একে মিলিয়ে দেখব।",
        en: "English gives you two roads for comparing: short adjectives take -er/-est, long ones take more/most — never both at once. Add the irregulars (better, worse, further, elder), the as...as pattern for equal things, and the classic traps (more better, than vs then) and you have this lesson. By the end, every comparison you make will come out clean.",
        hi: "तुलना करते वक़्त बांग्लाभाषी अक्सर 'more taller', 'most best' जैसे दोहरे शब्द लगा देते हैं, और than की जगह then लिख देते हैं! अंग्रेज़ी में एक तुलना के लिए एक ही चिह्न: या -er/-est, या more/most — दोनों कभी साथ नहीं। इस पाठ में छोटे-बड़े adjectives के नियम, irregular रूप, as...as तुलना और क्लासिक गलतियाँ सीखेंगे।",
      },
      roadmap: [
        { bn: "🏗️ কোন adjective-এ -er/-est, কোনটায় more/most — বানানের খুঁটিনাটি সহ", en: "🏗️ Which adjectives take -er/-est and which take more/most — spelling included", hi: "🏗️ कौन सा adjective -er/-est लेता है, कौन more/most — spelling समेत" },
        { bn: "🧠 better, worse-সহ পাঁচটা irregular — এক ছকে মুখস্থ", en: "🧠 The five irregulars including better and worse — memorised in one table", hi: "🧠 better, worse समेत पाँच irregular — एक टेबल में याद करें" },
        { bn: "🔁 as...as দিয়ে সমান তুলনা, not as...as দিয়ে কম", en: "🔁 as...as for equal things, not as...as for less", hi: "🔁 as...as से बराबरी की तुलना, not as...as से कम" },
        { bn: "⚠️ than বনাম then, more better, the-হীন superlative — ফাঁদগুলো", en: "⚠️ than vs then, more better, bare superlatives — the classic traps", hi: "⚠️ than बनाम then, more better, 'the' के बिना superlative — जाल समेत" },
      ],
      sections: [
        {
          heading: { bn: "🏗️ ছোট adjective-এ -er/-est, বড়টায় more/most", en: "🏗️ Short adjectives take -er/-est, long ones take more/most", hi: "🏗️ छोटे adjectives में -er/-est, लंबे में more/most" },
          lead: {
            bn: "তুলনার প্রথম সিদ্ধান্ত — কোন adjective নেবে -er/-est, আর কোনটা নেবে more/most।",
            en: "The first decision of every comparison — which adjectives take -er/-est, and which take more/most.",
            hi: "हर तुलना का पहला फ़ैसला — कौन सा adjective -er/-est लेता है, और कौन more/most।",
          },
          points: [
            { bn: "**এক syllable**-এর ছোট adjective — tall, old, big — নেয় -er/-est: taller, the tallest।", en: "**One-syllable** short adjectives — tall, old, big — take -er/-est: taller, the tallest.", hi: "**एक syllable** के छोटे adjectives — tall, old, big — -er/-est लेते हैं: taller, the tallest।" },
            { bn: "**-y**-তে শেষ হওয়া দুই-syllable শব্দও -er/-est নেয়: happy→happier, the happiest।", en: "**Two-syllable** words ending in -y also take -er/-est: happy→happier, the happiest.", hi: "**-y** पर ख़त्म होने वाले दो-syllable शब्द भी -er/-est लेते हैं: happy→happier, the happiest।" },
            { bn: "ছোট শব্দের শেষে এক consonant + এক vowel থাকলে শেষ consonant **ডাবল** হয়: big→bigger, hot→hottest।", en: "A short word ending in consonant-vowel-consonant doubles the last consonant: big→bigger, hot→hottest.", hi: "छोटे शब्द के अंत में consonant + vowel हो तो अंतिम consonant **डबल** हो जाता है: big→bigger, hot→hottest।" },
            { bn: "-y-এর বানানেও খেয়াল — y হয়ে যায় **i**: easy→easier।", en: "Watch the -y spelling too — y turns to **i**: easy→easier.", hi: "-y की spelling में भी ध्यान दें — y बदलकर **i** हो जाता है: easy→easier।" },
            { bn: "**তিন syllable**-এর বা লম্বা adjective — beautiful, expensive, interesting — নেয় more/most: more expensive, the most famous।", en: "**Three-syllable** or longer adjectives — beautiful, expensive, interesting — take more/most: more expensive, the most famous.", hi: "**तीन syllable** या लंबे adjectives — beautiful, expensive, interesting — more/most लेते हैं: more expensive, the most famous।" },
            { bn: "বেশিরভাগ **দুই-syllable** শব্দও (careful, famous) more/most-ই নেয়।", en: "Most **two-syllable** words (careful, famous) also take more/most.", hi: "ज़्यादातर **दो-syllable** शब्द (careful, famous) भी more/most ही लेते हैं।" },
            { bn: "এক তুলনায় **একটাই চিহ্ন** — more আর -er কখনো একসাথে আসবে না।", en: "One comparison, one marker — more and -er never appear together.", hi: "एक तुलना में **एक ही चिह्न** — more और -er कभी साथ नहीं आते।" },
          ],
          formula: { bn: "ছোট adjective + er/est (taller, tallest) • লম্বা adjective-এর আগে more/most (more beautiful)", en: "short adjective + er/est (taller, tallest) • long adjective → more/most first (more beautiful)", hi: "छोटा adjective + er/est (taller, tallest) • लंबा adjective से पहले more/most (more beautiful)" },
          examples: [
            {
              wrong: "She is more taller than her sister.",
              right: "She is taller than her sister.",
              note: {
                bn: "taller নিজেই comparative; বাংলা 'আরও লম্বা' হুবহু অনুবাদ করলে more বসে যায় — ইংরেজিতে তখন দ্বিগুণ তুলনা হয়ে যায়, তাই more বাদ।",
                en: "'Taller' is already a comparative; adding 'more' doubles it — a literal translation of 'আরও লম্বা'.",
                hi: "'Taller' पहले से comparative है; 'more' जोड़ने से दोगुना हो जाता है — 'और लंबा' का शब्दशः अनुवाद मत करें।",
              },
            },
            {
              wrong: "This book is interestinger than that one.",
              right: "This book is more interesting than that one.",
              note: {
                bn: "interesting তিন syllable-এর বড় adjective — এটা কখনো -er নেবে না; এর তুলনা হয় more দিয়ে।",
                en: "'Interesting' is a long (three-syllable) adjective, so it never takes -er; use 'more'.",
                hi: "'Interesting' लंबा (तीन-syllable) adjective है — यह -er नहीं लेता; 'more' इस्तेमाल करें।",
              },
            },
            {
              wrong: "He is the most smartest boy in the class.",
              right: "He is the smartest boy in the class.",
              note: {
                bn: "most আর -est একসাথে দ্বিগুণ superlative বানায়; একটাই যথেষ্ট — smartest-ই থাক।",
                en: "'Most' and '-est' together make a double superlative; one marker is enough.",
                hi: "'Most' और '-est' साथ में दोहरा superlative बनाते हैं; एक ही काफ़ी है।",
              },
            },
          ],
        },
        {
          heading: { bn: "🧠 অনিয়মিত রূপ: better, worse, further, elder", en: "🧠 Irregular forms: better, worse, further, elder", hi: "🧠 अनियमित रूप: better, worse, further, elder" },
          lead: {
            bn: "নিয়মের বাইরে যারা — এই পাঁচটা রূপ মুখস্থ ছাড়া উপায় নেই, ছকে একবারেই গেঁথে নিন।",
            en: "The rule-breakers — these five forms simply must be memorised; the table makes it one pass.",
            hi: "नियम से बाहर वाले — इन पाँच रूपों को रटना ही होगा, टेबल से एक बार में याद करें।",
          },
          points: [
            { bn: "কিছু adjective নিয়ম মানে না — নিচের ছকের তালিকাটা **মুখস্থ** করতেই হবে।", en: "Some adjectives refuse the rules — the list in the table below must be **memorised**.", hi: "कुछ adjectives नियम नहीं मानते — नीचे टेबल की सूची **रटनी** ही होगी।" },
            { bn: "এদের সাথে more বা -er কখনো জুড়বেন না — **better**-ই সম্পূর্ণ, 'more better' ভুল।", en: "Never attach more or -er to them — **better** is already complete; 'more better' is wrong.", hi: "इनके साथ more या -er कभी न जोड़ें — **better** पहले से पूरा है; 'more better' ग़लत।" },
            { bn: "**elder/eldest** চলে শুধু পরিবারের সদস্যের আগে: my elder brother।", en: "**Elder/eldest** works only before a family member: my elder brother.", hi: "**elder/eldest** केवल परिवार के सदस्य से पहले चलता है: my elder brother।" },
            { bn: "'than'-সহ তুলনায় বা বয়সের অন্তরে **older**-ই ব্যবহার হয়: He is older than me।", en: "Any comparison with 'than' (or an age gap) takes **older**: He is older than me.", hi: "'than' वाली तुलना या उम्र के अंतर में **older** ही लगेगा: He is older than me।" },
            { bn: "ঠিক **দুজনের** তুলনায় comparative বসে: the elder of the two।", en: "Exactly **two** people take the comparative: the elder of the two.", hi: "ठीक **दो** लोगों की तुलना में comparative आता है: the elder of the two।" },
            { bn: "**তিন বা তার বেশি** মানুষ হলে superlative: the eldest of the three।", en: "With **three or more** people, use the superlative: the eldest of the three.", hi: "**तीन या अधिक** लोगों में superlative आता है: the eldest of the three।" },
          ],
          table: {
            head: [
              { bn: "Adjective", en: "Adjective", hi: "Adjective" },
              { bn: "Comparative", en: "Comparative", hi: "Comparative" },
              { bn: "Superlative", en: "Superlative", hi: "Superlative" },
            ],
            rows: [
              [{ bn: "good (ভালো)", en: "good", hi: "good (अच्छा)" }, { bn: "better", en: "better", hi: "better" }, { bn: "best", en: "best", hi: "best" }],
              [{ bn: "bad (খারাপ)", en: "bad", hi: "bad (बुरा)" }, { bn: "worse", en: "worse", hi: "worse" }, { bn: "worst", en: "worst", hi: "worst" }],
              [{ bn: "far (দূরে)", en: "far", hi: "far (दूर)" }, { bn: "further/farther", en: "further/farther", hi: "further/farther" }, { bn: "furthest/farthest", en: "furthest/farthest", hi: "furthest/farthest" }],
              [{ bn: "little (অল্প)", en: "little", hi: "little (थोड़ा)" }, { bn: "less", en: "less", hi: "less" }, { bn: "least", en: "least", hi: "least" }],
              [{ bn: "many/much (বেশি)", en: "many/much", hi: "many/much (अधिक)" }, { bn: "more", en: "more", hi: "more" }, { bn: "most", en: "most", hi: "most" }],
            ],
          },
          examples: [
            {
              wrong: "My handwriting is more bad than yours.",
              right: "My handwriting is worse than yours.",
              note: {
                bn: "bad-এর comparative worse, superlative worst — এর কোনো 'more bad' বা 'badder' রূপ নেই।",
                en: "The comparative of 'bad' is 'worse' and the superlative is 'worst' — no 'more bad', no 'badder'.",
                hi: "'Bad' का comparative 'worse' और superlative 'worst' है — 'more bad' या 'badder' कुछ नहीं होता।",
              },
            },
            {
              wrong: "She is the eldest of the two sisters.",
              right: "She is the elder of the two sisters.",
              note: {
                bn: "দুজনের তুলনায় comparative বসে — the elder of the two; eldest তখনই, যখন তিন বা তার বেশি মানুষ।",
                en: "Comparing exactly two people takes the comparative: 'the elder of the two'; 'eldest' needs three or more.",
                hi: "दो लोगों की तुलना में comparative आता है — 'the elder of the two'; 'eldest' तीन या अधिक के लिए।",
              },
            },
            {
              wrong: "My elder brother is three years elder than me.",
              right: "My elder brother is three years older than me.",
              note: {
                bn: "elder শুধু noun-এর আগে বসে (elder brother); 'than'-সহ তুলনায় বা বয়সের অন্তর বলতে older-ই লাগবে।",
                en: "'Elder' sits only before a family noun; any comparison with 'than' (or a number of years) needs 'older'.",
                hi: "'Elder' केवल family noun से पहले बैठता है; 'than' वाली तुलना या उम्र का अंतर बताने के लिए 'older' ही लगेगा।",
              },
            },
          ],
        },
        {
          heading: { bn: "🔁 সমান তুলনা: as ... as আর not as ... as", en: "🔁 Equal comparisons: as ... as and not as ... as", hi: "🔁 बराबरी की तुलना: as ... as और not as ... as" },
          lead: {
            bn: "-er/-est ছাড়াই তুলনা হয় — দুটো জিনিস সমান হলে বা কম হলে এই দুটো ছাঁদই কাজ করে।",
            en: "Comparison without -er/-est — when two things are equal (or one is less), these two frames do the job.",
            hi: "-er/-est के बिना भी तुलना होती है — दो चीज़ें बराबर या कम हों तो यही दो ढाँचे काम आते हैं।",
          },
          points: [
            { bn: "দুটো জিনিস **সমান** হলে as + adjective + as: He is as tall as his father।", en: "When two things are **equal**, use as + adjective + as: He is as tall as his father.", hi: "दो चीज़ें **बराबर** हों तो as + adjective + as: He is as tall as his father।" },
            { bn: "**কম** বোঝাতে উল্টে not as ... as: This car is not as expensive as that one।", en: "For **less**, flip it with not as ... as: This car is not as expensive as that one.", hi: "**कम** बताने के लिए उलटा not as ... as: This car is not as expensive as that one।" },
            { bn: "as...as-এর ভিতরে adjective সবসময় **base রূপে** — taller, more expensive কিছুই ঢুকবে না।", en: "The adjective inside as...as stays in its **base form** — no taller, no more expensive.", hi: "as...as के बीच का adjective हमेशा **base रूप** में — taller, more expensive कुछ भी घुसेगा नहीं।" },
            { bn: "পরিমাণ মাপতে আগে **twice/half** বসতে পারে: This room is twice as big as mine।", en: "Scale it by putting **twice/half** in front: This room is twice as big as mine.", hi: "परिमाण बताने के लिए आगे **twice/half** बैठ सकता है: This room is twice as big as mine।" },
            { bn: "as ... as কখনো **than** নেয় না — than-এর ব্যাপারটা শুধু comparative-এর।", en: "as ... as never teams up with **than** — that word belongs to comparatives only.", hi: "as ... as के साथ **than** कभी नहीं आता — than केवल comparative का साथी है।" },
          ],
          formula: { bn: "as + adjective (base) + as — সমান • not as + adjective + as — কম", en: "as + adjective (base) + as — equal • not as + adjective + as — less than", hi: "as + adjective (base) + as — बराबर • not as + adjective + as — कम" },
          examples: [
            {
              wrong: "He is as taller as his father.",
              right: "He is as tall as his father.",
              note: {
                bn: "as ... as-এর দুই দেয়ালের মাঝে adjective base রূপেই থাকে — তুলনা তো সমান, -er-এর দরকারই নেই।",
                en: "Inside as...as the adjective stays in its base form — the comparison is equal, so no -er.",
                hi: "as ... as के बीच adjective अपने सामान्य रूप में रहता है — बराबरी की तुलना है, -er की ज़रूरत नहीं।",
              },
            },
            {
              wrong: "This phone is not more expensive as that one.",
              right: "This phone is not as expensive as that one.",
              note: {
                bn: "কম-বেশির তুলনার জোড়া হলো not as ... as; more-এর সাথে as মেলানো যায় না।",
                en: "The 'less than' pattern is not as ... as — 'more' never pairs with 'as'.",
                hi: "'कम' दिखाने का पैटर्न not as ... as है — 'more' कभी 'as' के साथ नहीं जुड़ता।",
              },
            },
            {
              wrong: "Rahim is as strong than Karim.",
              right: "Rahim is as strong as Karim.",
              note: {
                bn: "as ... as নিজেই তুলনা সেরে দেয়, than লাগে না; than শুধু -er/more-যুক্ত comparative-এর সঙ্গী।",
                en: "'As ... as' completes the comparison on its own; 'than' only belongs to -er/more comparatives.",
                hi: "'As ... as' अपने आप में तुलना पूरी कर देता है; 'than' केवल -er/more वाले comparative के साथ आता है।",
              },
            },
          ],
        },
        {
          heading: { bn: "⚠️ ক্লাসিক ভুল: more better, than বনাম then", en: "⚠️ Classic mistakes: more better, than vs then", hi: "⚠️ क्लासिक गलतियाँ: more better, than बनाम then" },
          lead: {
            bn: "উচ্চারণে এক, অর্থে আলাদা — than/then-সহ বাঙালি শিক্ষার্থীদের চেনা চারটা ফাঁদ।",
            en: "Same sound, different job — four classic traps for Bengali learners, starting with than/then.",
            hi: "उच्चारण एक, काम अलग — than/then समेत बांग्लाभाषी learners के चार जाने-पहचाने जाल।",
          },
          points: [
            { bn: "**than** = 'চেয়ে' (তুলনা), then = 'তারপর' (সময়) — উচ্চারণ কাছাকাছি, কাজ সম্পূর্ণ আলাদা।", en: "**Than** = comparison ('চেয়ে'), then = time ('তারপর') — near-identical sounds, completely different jobs.", hi: "**than** = तुलना ('से'), then = समय ('तब/फिर') — आवाज़ मिलती है, काम बिल्कुल अलग।" },
            { bn: "better, worse-এর মতো irregular comparative-এ জোর দিতে **much/far** বসান — much better, far worse; more বসালেই দ্বিগুণ হয়ে যায়।", en: "To intensify an irregular comparative like better or worse, use **much/far** — much better, far worse; more doubles the marker.", hi: "better, worse जैसे irregular comparative पर ज़ोर के लिए **much/far** लगाएँ — much better, far worse; more लगाया तो दोहराव।" },
            { bn: "superlative-এর আগে **the** লাগবেই: the best player, the most expensive।", en: "A superlative must carry **the**: the best player, the most expensive.", hi: "superlative से पहले **the** ज़रूरी: the best player, the most expensive।" },
            { bn: "তুলনার দুই পাশ পাল্লা মিলিয়ে সাজান: This room is bigger than that one — জটিল গোছানোর দরকার নেই।", en: "Keep the two sides of a comparison parallel and clean: This room is bigger than that one — no fancy arranging needed.", hi: "तुलना के दोनों पक्ष तराज़ू मिलाकर साफ़ रखें: This room is bigger than that one — उलझाने की ज़रूरत नहीं।" },
          ],
          examples: [
            {
              wrong: "This road is wider then that road.",
              right: "This road is wider than that road.",
              note: {
                bn: "তুলনার জোড়া-শব্দ than ('চেয়ে'); then মানে 'তারপর' — সময়ের কথা বললেই কেবল then।",
                en: "Comparisons take 'than' ('চেয়ে'); 'then' means 'after that' and belongs to time only.",
                hi: "तुलना के लिए 'than' ('से'); 'then' का मतलब 'फिर/तब' — केवल समय के लिए।",
              },
            },
            {
              wrong: "After the medicine I felt more better.",
              right: "After the medicine I felt much better.",
              note: {
                bn: "better নিজেই comparative; জোর দিতে much/far — more বসালে 'more better' দ্বিগুণ হয়ে যায়।",
                en: "'Better' is already comparative; intensify with much/far — 'more better' doubles the marker.",
                hi: "'Better' पहले से comparative है; ज़ोर के लिए much/far — 'more better' दोहराव बन जाता है।",
              },
            },
            {
              wrong: "Dhaka is noisiest city in Bangladesh.",
              right: "Dhaka is the noisiest city in Bangladesh.",
              note: {
                bn: "superlative (-est/most) একা দাঁড়ায় না, তার আগে the বাধ্যতামূলক — the noisiest, the best।",
                en: "A superlative never stands bare — 'the' must come before it: the noisiest, the best.",
                hi: "superlative कभी अकेला नहीं आता — उसके पहले 'the' अनिवार्य: the noisiest, the best।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "এক তুলনায় একটাই চিহ্ন: taller নাকি more tall — যেকোনো একটাই, কখনো দুটো একসাথে নয়।",
          en: "One comparison, one marker: 'taller' or 'more tall' — pick one, never both.",
          hi: "एक तुलना, एक चिह्न: 'taller' या 'more tall' — कोई एक चुनें, दोनों कभी नहीं।",
        },
        {
          bn: "than মানে 'চেয়ে', then মানে 'তারপর' — তুলনার বাক্যে হাত থেকে then লেখা হলেই থেমে যান।",
          en: "Than = comparison, then = time — whenever your hand writes 'then' in a comparison, pause and check.",
          hi: "than = तुलना, then = समय — तुलना वाले वाक्य में 'then' लिखने से पहले एक बार रुकें।",
        },
        {
          bn: "as ... as-এর ভিতরের adjective সবসময় base রূপে: as tall as, as expensive as — -er বা more ঢুকবে না।",
          en: "Keep the adjective between as...as in its base form: as tall as, as expensive as.",
          hi: "as ... as के बीच का adjective सामान्य रूप में: as tall as, as expensive as।",
        },
        {
          bn: "superlative-এর সঙ্গী 'the': the best, the worst, the most beautiful — the ছাড়া superlative অসম্পূর্ণ।",
          en: "Superlatives travel with 'the': the best, the worst, the most beautiful.",
          hi: "superlative के साथ 'the' ज़रूरी: the best, the worst, the most beautiful।",
        },
      ],
    },
  },

  /* ── 2. Passive Voice — All Tenses (unit 0 → sortOrder 5) ────────────── */
  {
    topic: "Passive Voice — All Tenses",
    level: "intermediate",
    title: "Passive Voice — All Tenses (Intermediate)",
    unit: 0,
    sortOrder: 5,
    data: {
      title: {
        bn: "Passive Voice — সব Tense-এ (মধ্যম স্তর)",
        en: "Passive Voice — All Tenses (Intermediate)",
        hi: "पैसिव वॉइस — सभी Tense में (मध्यम स्तर)",
      },
      intro: {
        bn: "'খাবার রান্না হয়ে গেছে', 'চিঠিটা পাঠানো হয়েছিল' — বাংলায় আমরা প্রতিদিনই passive-ঘেঁষা বাক্য বলি, কিন্তু ইংরেজিতে লিখতে গেলে be + V3-এর কাঠামোটা হাত ছুটে যায়। Passive voice-এ কাজের ফল সামনে চলে আসে, আর কর্তা পেছনে সরে যায় বা অদৃশ্য হয়ে যায়। এই পাঠে সব tense-এর passive গঠন, কখন passive-ই স্বাভাবিক শোনায়, আর by-phrase ও দুই-object এর verb-এর ভুলগুলো দেখব।",
        en: "English passive = be + past participle: the result of the action moves to the front, and the doer steps back or disappears. Bengali speakers know the idea well but often drop the be verb ('This house built in 1990') or lose the being in continuous passives. This lesson covers every tense, shows when passive sounds natural, and untangles the by-phrase and two-object traps.",
        hi: "अंग्रेज़ी passive = be + past participle: काम का नतीजा आगे आ जाता है, और करने वाला पीछे चला जाता है या गायब हो जाता है। बांग्लाभाषी अक्सर be verb छोड़ देते हैं ('This house built in 1990') या continuous में being भूल जाते हैं। इस पाठ में हर tense का passive, कब passive स्वाभाविक है, और by-phrase व दो-object वाली गलतियाँ सीखेंगे।",
      },
      roadmap: [
        { bn: "🏗️ মূল সূত্র: object উঠে বসে subject-এর চেয়ারে, tense থাকে be-এর ভিতরে", en: "🏗️ The core formula: the object takes the subject's chair, the tense lives inside be", hi: "🏗️ मूल सूत्र: object subject की कुर्सी पर, tense be के अंदर बैठता है" },
        { bn: "⏰ চলমান কাজে being, সম্পন্ন কাজে been — দুটোই বাধ্যতামূলক", en: "⏰ being for ongoing work, been for finished work — both compulsory", hi: "⏰ चल रहे काम में being, पूरे हुए में been — दोनों अनिवार्य" },
        { bn: "🎯 খবর, প্রক্রিয়া, অজানা কর্তা — passive-এর নিজের জায়গা", en: "🎯 News, processes, unknown doers — where passive sounds natural", hi: "🎯 ख़बरें, प्रक्रिया, अज्ञात कर्ता — passive का असली इलाक़ा" },
        { bn: "🧩 by না with? দুই-object verb-এর দুই রকম passive", en: "🧩 by or with? The two passives of two-object verbs", hi: "🧩 by या with? दो-object वाली verbs के दो passive" },
        { bn: "📊 সাত tense-এর passive এক ছকে — স্ক্যান করে মুখস্থ", en: "📊 Seven tenses of the passive in one table — scan and memorise", hi: "📊 सात tense का passive एक टेबल में — स्कैन करके याद करें" },
      ],
      sections: [
        {
          heading: { bn: "🏗️ মূল কাঠামো: be + V3, tense থাকে be-এর ভিতরে", en: "🏗️ The core form: be + V3, and the tense lives inside be", hi: "🏗️ मूल रूप: be + V3, tense be के अंदर बैठता है" },
          lead: {
            bn: "Passive-এর পুরো খেলা একটাই সূত্রে — আগে সূত্রটা পরিষ্কার করে নিন।",
            en: "The whole game of the passive is one formula — get the formula straight first.",
            hi: "Passive का पूरा खेल एक ही सूत्र में — पहले सूत्र साफ़ कर लें।",
          },
          points: [
            { bn: "Passive-এর সূত্র: **object** উঠে subject-এর চেয়ারে বসে, আসল কর্তা পেছনে সরে বা মুছে যায়।", en: "The passive recipe: the **object** moves into the subject's chair, and the real doer steps back or disappears.", hi: "Passive का सूत्र: **object** subject की कुर्सी पर बैठ जाता है, और असली कर्ता पीछे हट जाता है या गायब हो जाता है।" },
            { bn: "**be-verb** tense-এর পুরো ভার বহন করে, আর মূল verb হয়ে যায় V3 (past participle)।", en: "The **be verb** carries the whole tense, while the main verb becomes V3 (past participle).", hi: "**be verb** tense का पूरा बोझ उठाता है, और मुख्य verb V3 (past participle) बन जाता है।" },
            { bn: "Simple present-এ **is/are** + V3: The shop is closed every Sunday; Rice is grown here।", en: "Simple present takes **is/are** + V3: The shop is closed every Sunday; Rice is grown here.", hi: "Simple present में **is/are** + V3: The shop is closed every Sunday; Rice is grown here।" },
            { bn: "Simple past-এ **was/were** + V3: The letter was posted yesterday।", en: "Simple past takes **was/were** + V3: The letter was posted yesterday.", hi: "Simple past में **was/were** + V3: The letter was posted yesterday।" },
            { bn: "Simple future-এ **will be** + V3: The results will be announced tomorrow।", en: "Simple future takes **will be** + V3: The results will be announced tomorrow.", hi: "Simple future में **will be** + V3: The results will be announced tomorrow।" },
            { bn: "সবচেয়ে কমন ভুল — be ফেলে দেওয়া: 'This house built in 1990' বাক্যটা **verb-হীন** হয়ে পড়ে।", en: "The most common mistake — dropping be: 'This house built in 1990' ends up **verbless**.", hi: "सबसे आम गलती — be हटा देना: 'This house built in 1990' वाक्य **verb-रहित** रह जाता है।" },
          ],
          formula: { bn: "object + be (tense এখানেই) + V3 — is/are, was/were, will be + V3", en: "object + be (the tense lives here) + V3 — is/are, was/were, will be + V3", hi: "object + be (tense यहीं बैठता है) + V3 — is/are, was/were, will be + V3" },
          examples: [
            {
              wrong: "This house built in 1990.",
              right: "This house was built in 1990.",
              note: {
                bn: "passive-এ tense be-verb-এর ভিতরে থাকে — বাড়ি নিজে কিছু build করে না, তাই was + built (V3) লাগবেই।",
                en: "In a passive the past tense lives in 'was', not in 'built'; without be the sentence has no verb.",
                hi: "passive में past tense 'was' में बैठता है, 'built' में नहीं; be के बिना वाक्य में verb ही नहीं रहता।",
              },
            },
            {
              wrong: "Rice grow in many districts.",
              right: "Rice is grown in many districts.",
              note: {
                bn: "ধান নিজে grow করে না, মানুষ grow করে — কর্তা বাদ দিলে present passive লাগবে: is + grown (V3)।",
                en: "Rice doesn't grow itself — people grow it; with the doer left out, the present passive is: is + grown.",
                hi: "धान खुद grow नहीं करता — करने वाले को हटाने पर present passive बनेगा: is + grown।",
              },
            },
            {
              wrong: "The results will announce tomorrow.",
              right: "The results will be announced tomorrow.",
              note: {
                bn: "will-এর পরে passive হলে be + V3 ঢোকাতে হয় — results তো নিজেরা নিজেদের announce করে না।",
                en: "After 'will', a passive needs be + V3: will be announced — results can't announce themselves.",
                hi: "'will' के बाद passive में be + V3 चाहिए: will be announced — results खुद announce नहीं कर सकते।",
              },
            },
          ],
        },
        {
          heading: { bn: "⏰ Continuous ও perfect passive: is being built / has been built", en: "⏰ Continuous & perfect passives: is being built / has been built", hi: "⏰ Continuous और perfect passive: is being built / has been built" },
          lead: {
            bn: "বাংলা 'হচ্ছে' আর 'হয়েছে'-র পার্থক্যটাই ইংরেজি passive-এ being বনাম been।",
            en: "The difference between 'going on now' and 'already done' is exactly being vs been in the English passive.",
            hi: "'हो रहा है' और 'हो चुका है' का फ़र्क़ ही अंग्रेज़ी passive में being बनाम been है।",
          },
          points: [
            { bn: "চলমান কাজের passive-এ be-এর পরে **being** বসে: is/are being + V3 — The bridge is being built।", en: "For ongoing actions **being** slides in after be: is/are being + V3 — The bridge is being built.", hi: "चल रहे काम के passive में be के बाद **being** आता है: is/are being + V3 — The bridge is being built।" },
            { bn: "অতীতে চলছিল বোঝাতে **was/were being** + V3: The road was being repaired when we passed।", en: "For actions ongoing in the past, **was/were being** + V3: The road was being repaired when we passed.", hi: "अतीत में चल रहा काम बताने के लिए **was/were being** + V3: The road was being repaired when we passed।" },
            { bn: "Perfect tense-এর passive-এ **been** বসে: has/have been + V3 — The tickets have been booked।", en: "Perfect tenses take **been**: has/have been + V3 — The tickets have been booked.", hi: "Perfect tense के passive में **been** आता है: has/have been + V3 — The tickets have been booked।" },
            { bn: "অতীতের আগে বোঝাতে **had been** + V3 — past perfect-এর passive এটাই।", en: "For before-the-past, use **had been** + V3 — that is the past perfect passive.", hi: "अतीत से पहले की बात के लिए **had been** + V3 — past perfect का passive यही है।" },
            { bn: "**being** = 'হচ্ছে', been = 'হয়েছে' — কোনো একটা ফেলে দিলে বাক্য অন্য অর্থে চলে যায়।", en: "**Being** = in progress, been = completed — drop either word and the sentence slips into another meaning.", hi: "**being** = 'हो रहा है', been = 'हो चुका है' — इनमें से कोई एक भी छोड़ें तो मतलब बदल जाता है।" },
          ],
          formula: { bn: "চলমান → be + being + V3 • সম্পন্ন → be + been + V3", en: "ongoing → be + being + V3 • completed → be + been + V3", hi: "चल रहा → be + being + V3 • पूरा हुआ → be + been + V3" },
          examples: [
            {
              wrong: "The road is repairing.",
              right: "The road is being repaired.",
              note: {
                bn: "রাস্তা নিজে repair করছে না — চলমান কাজের passive-এ being বাধ্যতামূলক: is being repaired।",
                en: "The road isn't repairing itself — an ongoing passive must include being: is being repaired.",
                hi: "सड़क खुद repair नहीं हो रही — चालू passive में being ज़रूरी है: is being repaired।",
              },
            },
            {
              wrong: "The tickets have already booked.",
              right: "The tickets have already been booked.",
              note: {
                bn: "perfect-এর passive = have/has + been + V3; been বাদ দিলে passive-এর বানানটাই অসম্পূর্ণ থেকে যায়।",
                en: "A perfect passive = have/has + been + V3; drop 'been' and the participle structure falls apart.",
                hi: "perfect passive = have/has + been + V3; 'been' हटाते ही बनावट अधूरी हो जाती है।",
              },
            },
            {
              wrong: "The report has written by the manager.",
              right: "The report has been written by the manager.",
              note: {
                bn: "written থাকলেও been ছাড়া perfect passive হয় না — has been written; by-phrase তার পরে বসে।",
                en: "Even with 'written', a perfect passive still needs been: has been written; the by-phrase comes after.",
                hi: "'written' होते हुए भी perfect passive में been चाहिए: has been written; by-phrase उसके बाद आता है।",
              },
            },
          ],
        },
        {
          heading: { bn: "🎯 কখন passive-ই স্বাভাবিক: খবর, প্রক্রিয়া, অজানা কর্তা", en: "🎯 When passive is natural: news, processes, unknown doers", hi: "🎯 कब passive स्वाभाविक है: ख़बरें, प्रक्रिया, अज्ञात कर्ता" },
          lead: {
            bn: "তিনটা জায়গায় passive বাংলাভাষীর মুখেও স্বাভাবিক — ভাষার মিলটা কাজে লাগান।",
            en: "In three places passive sounds natural even to Bengali speakers — lean on that shared instinct.",
            hi: "तीन जगहों पर passive बांग्लाभाषी की ज़ुबान पर भी सहज लगता है — इस साझी आदत का फ़ायदा उठाएँ।",
          },
          points: [
            { bn: "**খবরে** passive-ই স্বাভাবিক: The thief was arrested last night — কে গ্রেপ্তার করেছে, বলার দরকার নেই।", en: "In **news reports** passive is the norm: The thief was arrested last night — who arrested him doesn't matter.", hi: "**ख़बरों** में passive ही सहज: The thief was arrested last night — किसने गिरफ़्तार किया, बताना ज़रूरी नहीं।" },
            { bn: "**প্রক্রিয়া** ব্যাখ্যায় ধাপে ধাপে passive চলে: The tea leaves are picked, then they are dried in the sun।", en: "In **process explanations** every step stays passive: The tea leaves are picked, then they are dried in the sun.", hi: "**प्रक्रिया** समझाते वक़्त हर क़दम passive में: The tea leaves are picked, then they are dried in the sun।" },
            { bn: "কর্তা **অজানা বা অপ্রাসঙ্গিক** হলে passive এসে হাজির: My bike was stolen।", en: "When the doer is **unknown or unimportant**, passive steps in: My bike was stolen.", hi: "कर्ता **अज्ञात या ग़ैर-ज़रूरी** हो तो passive आ जाता है: My bike was stolen।" },
            { bn: "বাংলাতেও আমরা বলি 'পাতা তোলা হয়', 'শুকানো হয়' — ভাষার এই **মিলটা** কাজে লাগান।", en: "Bengali does the same thing — 'পাতা তোলা হয়', 'শুকানো হয়' — so lean on this **shared instinct**.", hi: "हम अपनी भाषा में भी कर्ता छिपाकर बोलते हैं — भाषाओं की यह **मिलती-जुलती आदत** काम आएगी।" },
            { bn: "এক বর্ণনায় **ভয়েস মেশাবেন না** — passive দিয়ে শুরু করলেন, শেষ ধাপ পর্যন্ত passive-ই থাকুন।", en: "Don't mix voices inside one description — once a process starts passive, stay passive to the last step.", hi: "एक विवरण में **voice न मिलाएँ** — passive से शुरू किया तो आख़िरी क़दम तक passive में रहें।" },
            { bn: "কর্তা জানা, গুরুত্বপূর্ণ ও সক্রিয় হলে **active** বাক্যই ছোট ও স্পষ্ট।", en: "When the doer is known, important and active, the shorter **active** sentence wins.", hi: "कर्ता जानकार, ज़रूरी और सक्रिय हो तो छोटा **active** वाक्य ही बेहतर है।" },
          ],
          examples: [
            {
              wrong: "They build this temple in 1850.",
              right: "This temple was built in 1850.",
              note: {
                bn: "'they' এখানে কারো নাম না — অজানা কর্তার চেয়ে তারিখটাই গুরুত্বপূর্ণ; তাই ইতিহাস-বর্ণনায় past passive: was built।",
                en: "'They' here names nobody — the date matters, the builder doesn't; historical notes prefer the past passive: was built.",
                hi: "यहाँ 'they' किसी का नाम नहीं — तारीख़ ज़रूरी है, बनाने वाला नहीं; इतिहास की जानकारी में past passive बेहतर: was built।",
              },
            },
            {
              wrong: "The thief arrested last night.",
              right: "The thief was arrested last night.",
              note: {
                bn: "খবরের ভাষাও passive হলে be ছাড়া চলে না — was arrested; শুধু 'arrested' একা adjective-এর মতো শোনায়।",
                en: "Even headline-style passives need be: was arrested; 'arrested' alone reads like an adjective.",
                hi: "ख़बरी अंदाज़ के passive में भी be चाहिए: was arrested; अकेला 'arrested' विशेषण जैसा लगता है।",
              },
            },
            {
              wrong: "First, you mix the flour and water. Then the dough is kneaded.",
              right: "First, the flour and water are mixed. Then the dough is kneaded.",
              note: {
                bn: "প্রক্রিয়ার বর্ণনায় ভয়েস মেশানো ঠিক নয় — একবার passive শুরু করলে সব ধাপ passive-এই থাকবে: are mixed, is kneaded।",
                en: "Don't switch voice inside a process — once you start passive, every step stays passive: are mixed, is kneaded.",
                hi: "प्रक्रिया में बीच में voice न बदलें — passive शुरू किया तो हर क़दम passive में: are mixed, is kneaded।",
              },
            },
          ],
        },
        {
          heading: { bn: "🧩 by-phrase আর দুই-object এর verb: was given a book", en: "🧩 By-phrases and two-object verbs: was given a book", hi: "🧩 by-phrase और दो-object वाली verbs: was given a book" },
          lead: {
            bn: "by কখন লিখবেন, যন্ত্রে with কেন, আর দুই-object verb-এর দুই রকম passive — সূক্ষ্ম নিয়মগুলো।",
            en: "When to write by, why tools take with, and the double passive of two-object verbs — the fine rules.",
            hi: "by कब लिखें, औज़ार के साथ with क्यों, और दो-object verb के दो passive — बारीक नियम।",
          },
          points: [
            { bn: "**by** + কর্তা লিখুন শুধু তথ্যটা সত্যিই দরকারি হলে: The novel was written by Sarat Chandra।", en: "Write **by** + doer only when that information truly matters: The novel was written by Sarat Chandra.", hi: "**by** + कर्ता तभी लिखें जब वह जानकारी सच में ज़रूरी हो: The novel was written by Sarat Chandra।" },
            { bn: "কর্তা 'someone', 'people'-এর মতো ফাঁকা শব্দ হলে **by-phrase বাদ** — এটাই passive-এর মূল সুবিধা।", en: "If the doer is a vague 'someone/people', drop the **by-phrase** — that is passive's whole point.", hi: "कर्ता 'someone', 'people' जैसा खोखला शब्द हो तो **by-phrase छोड़ दें** — passive का मूल फ़ायदा यही है।" },
            { bn: "যন্ত্র বা উপকরণ বোঝাতে by নয়, **with**: cut with a knife, written with a pen।", en: "For tools and instruments use **with**, not by: cut with a knife, written with a pen.", hi: "औज़ार या सामग्री के लिए by नहीं, **with**: cut with a knife, written with a pen।" },
            { bn: "give, send, show, offer, tell-এর মতো verb-এ **দুটো object** থাকে — তাই দুই রকম passive চলে।", en: "Verbs like give, send, show, offer, tell take **two objects** — so two passives are possible.", hi: "give, send, show, offer, tell जैसी verbs के **दो objects** होते हैं — इसलिए दो तरह का passive बनता है।" },
            { bn: "মানুষ সামনে: **I was given a book**; জিনিস সামনে: A book was given to me।", en: "Person first: **I was given a book**; thing first: A book was given to me.", hi: "व्यक्ति पहले: **I was given a book**; चीज़ पहले: A book was given to me।" },
            { bn: "জিনিস সামনে থাকলে মানুষের আগে **to** বাধ্যতামূলক — 'A book was given me' ভুল।", en: "With the thing first, **to** before the person is compulsory — 'A book was given me' is wrong.", hi: "चीज़ पहले हो तो व्यक्ति से पहले **to** अनिवार्य — 'A book was given me' ग़लत है।" },
          ],
          examples: [
            {
              wrong: "The cake was cut by a knife.",
              right: "The cake was cut with a knife.",
              note: {
                bn: "by = সচেতন কর্তা (সাধারণত মানুষ); যন্ত্র বা উপকরণ বোঝালে with — cut with a knife।",
                en: "'By' introduces the doer; tools and instruments take 'with': cut with a knife.",
                hi: "'by' करने वाले के लिए है; औज़ार के लिए 'with': cut with a knife।",
              },
            },
            {
              wrong: "I was gave a free ticket.",
              right: "I was given a free ticket.",
              note: {
                bn: "passive-এ সবসময় V3 — gave হলো past simple; be + given-ই সঠিক জোড়া।",
                en: "A passive always uses V3 — 'gave' is past simple; be + given is the correct pair.",
                hi: "passive में हमेशा V3 — 'gave' past simple है; be + given ही सही जोड़ी है।",
              },
            },
            {
              wrong: "A story was told me by my grandmother.",
              right: "A story was told to me by my grandmother.",
              note: {
                bn: "জিনিস সামনে, মানুষ পেছনে হলে to লাগবেই — told to me; চাইলে উল্টে মানুষ সামনে: I was told a story।",
                en: "When the thing comes first, 'to' must appear before the person: told to me — or flip it: I was told a story.",
                hi: "चीज़ पहले, व्यक्ति बाद में हो तो 'to' लाज़मी — told to me; चाहें तो उलटें: I was told a story।",
              },
            },
          ],
        },
        {
          heading: { bn: "📊 সব tense-এর passive এক নজরে", en: "📊 All tenses of the passive at a glance", hi: "📊 सभी tense का passive एक नज़र में" },
          lead: {
            bn: "আগের দুই অংশের সাতটা tense এক ছকে — বারবার স্ক্যান করলেই মুখস্থ হয়ে যায়।",
            en: "The seven tenses from the previous sections in one table — a few scans and it sticks.",
            hi: "पिछले दो हिस्सों के सात tense एक टेबल में — कुछ बार स्कैन करें, याद हो जाएगा।",
          },
          points: [
            { bn: "সাত tense, কাঠামো একটাই — **be + V3**; বদলায় শুধু be-এর রূপ।", en: "Seven tenses, one structure — **be + V3**; only the form of be changes.", hi: "सात tense, ढाँचा एक ही — **be + V3**; सिर्फ़ be का रूप बदलता है।" },
            { bn: "Simple tense-গুলোতে be = is/are, was/were, **will be**।", en: "In the simple tenses be = is/are, was/were, **will be**.", hi: "Simple tense में be = is/are, was/were, **will be**।" },
            { bn: "Continuous সারিতে **being**, perfect সারিতে **been** — ছকে দেখলেই নজরে আসে।", en: "The continuous rows carry **being**, the perfect rows **been** — visible at a glance.", hi: "Continuous वाली पंक्तियों में **being**, perfect में **been** — टेबल में साफ़ दिखता है।" },
            { bn: "মূল verb কখনো বদলায় না (written-ই থাকে) — tense বসে যায় **be-এর ভিতরে**।", en: "The main verb never changes (written stays written) — the tense sits **inside be**.", hi: "मुख्य verb कभी नहीं बदलता (written ही रहता है) — tense **be के अंदर** बैठता है।" },
          ],
          table: {
            head: [
              { bn: "Tense", en: "Tense", hi: "Tense" },
              { bn: "Active", en: "Active", hi: "Active" },
              { bn: "Passive", en: "Passive", hi: "Passive" },
            ],
            rows: [
              [{ bn: "Simple Present", en: "Simple Present", hi: "Simple Present" }, { bn: "She writes a letter", en: "She writes a letter", hi: "She writes a letter" }, { bn: "A letter is written", en: "A letter is written", hi: "A letter is written" }],
              [{ bn: "Simple Past", en: "Simple Past", hi: "Simple Past" }, { bn: "She wrote a letter", en: "She wrote a letter", hi: "She wrote a letter" }, { bn: "A letter was written", en: "A letter was written", hi: "A letter was written" }],
              [{ bn: "Simple Future", en: "Simple Future", hi: "Simple Future" }, { bn: "She will write a letter", en: "She will write a letter", hi: "She will write a letter" }, { bn: "A letter will be written", en: "A letter will be written", hi: "A letter will be written" }],
              [{ bn: "Present Continuous", en: "Present Continuous", hi: "Present Continuous" }, { bn: "She is writing a letter", en: "She is writing a letter", hi: "She is writing a letter" }, { bn: "A letter is being written", en: "A letter is being written", hi: "A letter is being written" }],
              [{ bn: "Past Continuous", en: "Past Continuous", hi: "Past Continuous" }, { bn: "She was writing a letter", en: "She was writing a letter", hi: "She was writing a letter" }, { bn: "A letter was being written", en: "A letter was being written", hi: "A letter was being written" }],
              [{ bn: "Present Perfect", en: "Present Perfect", hi: "Present Perfect" }, { bn: "She has written a letter", en: "She has written a letter", hi: "She has written a letter" }, { bn: "A letter has been written", en: "A letter has been written", hi: "A letter has been written" }],
              [{ bn: "Past Perfect", en: "Past Perfect", hi: "Past Perfect" }, { bn: "She had written a letter", en: "She had written a letter", hi: "She had written a letter" }, { bn: "A letter had been written", en: "A letter had been written", hi: "A letter had been written" }],
            ],
          },
          examples: [],
        },
      ],
      tips: [
        {
          bn: "Passive-এ tense be-verb-এর ভিতরে বাস করে — V3 একা কখনো কাল বোঝায় না।",
          en: "In a passive, the tense lives inside the be verb — a V3 never shows time by itself.",
          hi: "passive में tense be verb के अंदर रहता है — V3 अकेले समय नहीं दिखाता।",
        },
        {
          bn: "কর্তা অজানা বা অপ্রাসঙ্গিক হলে by-phrase বাদ দিন — 'by someone' লিখলে passive-এর সৌন্দর্য নষ্ট হয়।",
          en: "Drop the by-phrase when the doer is unknown or unimportant — 'by someone' ruins the effect.",
          hi: "कर्ता अज्ञात/अप्रासंगिक हो तो by-phrase छोड़ दें — 'by someone' लिखने से असर बिगड़ जाता है।",
        },
        {
          bn: "being = হচ্ছে, been = হয়েছে — continuous passive-এ being, perfect passive-এ been, দুটোই বাধ্যতামূলক।",
          en: "being = in progress, been = completed — being for continuous passives, been for perfects; both are compulsory.",
          hi: "being = हो रहा है, been = हो चुका है — continuous में being, perfect में been; दोनों अनिवार्य।",
        },
        {
          bn: "খবর আর প্রক্রিয়া-বর্ণনায় প্রথম থেকেই passive ভাবুন — আর পুরো বর্ণনায় একই ভয়েস ধরে রাখুন।",
          en: "Think passive from the start in news reports and process descriptions — and keep one voice throughout.",
          hi: "ख़बरों और प्रक्रिया में शुरू से passive सोचें — और पूरे विवरण में एक ही voice रखें।",
        },
      ],
    },
  },

  /* ── 3. Reported Speech Basics (unit 0 → sortOrder 6) ────────────────── */
  {
    topic: "Reported Speech Basics",
    level: "intermediate",
    title: "Reported Speech Basics (Intermediate)",
    unit: 0,
    sortOrder: 6,
    data: {
      title: {
        bn: "রিপোর্টেড স্পিচ — বেসিক (মধ্যম স্তর)",
        en: "Reported Speech Basics (Intermediate)",
        hi: "रिपोर्टेड स्पीच — बेसिक्स (मध्यम स्तर)",
      },
      intro: {
        bn: "কারো কথা অন্যকে বলে দিতে গেলে ইংরেজি সরাসরি উদ্ধৃতির tense এক ধাপ পেছনে সরিয়ে নেয় — এটাই backshift, আর বাংলাভাষীদের কাছে সবচেয়ে বড় ধরা খাওয়ার জায়গা, কারণ বাংলা রিপোর্টেও tense ধরে রাখে। সাথে say/tell-এর পার্থক্য, প্রশ্নের গোছানো ক্রম, নির্দেশ জানানোর to-র নিয়ম, আর কাল-স্থান শব্দের স্থানান্তর — চার ধাপে পুরো বেসিকটা ধরি।",
        en: "When you report someone's words, English shifts the tense one step back — the famous backshift — and Bengali speakers miss it constantly, because Bengali reporting keeps the original tense. Add the say vs tell split, the flattened word order of reported questions, the to of reported commands, and the time-and-place word shifts, and that is the whole basic toolkit.",
        hi: "किसी की बात दूसरों को बताते वक़्त अंग्रेज़ी tense को एक क़दम पीछे खिसका देती है — यही backshift है, और बांग्लाभाषी इसे सबसे ज़्यादा भूलते हैं, क्योंकि बांग्ला रिपोर्ट में tense वही रहता है। साथ में say बनाम tell का फ़र्क़, प्रश्नों में सीधा शब्द-क्रम, आदेश के लिए to, और समय-स्थान शब्दों की स्थानांतरण — चार क़दम में पूरी बुनियाद।",
      },
      roadmap: [
        { bn: "💬 say না tell — শ্রোতার নিয়ম, তারপর backshift-এর ছক", en: "💬 say or tell — the listener rule, then the backshift table", hi: "💬 say या tell — श्रोता का नियम, फिर backshift टेबल" },
        { bn: "❓ রিপোর্টেড প্রশ্ন: গোছানো ক্রম, if/whether, do/did নেই", en: "❓ Reported questions: statement order, if/whether, no do/did", hi: "❓ रिपोर्टेड प्रश्न: कथन-क्रम, if/whether, do/did नहीं" },
        { bn: "🗣️ আদেশ রিপোর্ট: told/asked + to + verb, নেতিবাচকে not to", en: "🗣️ Reported commands: told/asked + to + verb, not to for negatives", hi: "🗣️ आदेश की रिपोर्ट: told/asked + to + verb, नकारात्मक में not to" },
        { bn: "⏳ yesterday, tomorrow, here — কোন শব্দ কোথায় সরে", en: "⏳ yesterday, tomorrow, here — which words shift where", hi: "⏳ yesterday, tomorrow, here — कौन सा शब्द कहाँ खिसकता है" },
      ],
      sections: [
        {
          heading: { bn: "💬 বিবৃতি: say বনাম tell + backshift", en: "💬 Statements: say vs tell + backshift", hi: "💬 कथन: say बनाम tell + backshift" },
          lead: {
            bn: "শ্রোতা সাথে tell, ছাড়া say — তারপর tense এক ধাপ পেছনে, এটাই পুরো ফর্মুলা।",
            en: "tell with a listener, say without — then step the tense one back; that is the whole formula.",
            hi: "श्रोता के साथ tell, बिना say — फिर tense एक क़दम पीछे; बस यही पूरा फ़ॉर्मूला है।",
          },
          points: [
            { bn: "**tell**-এর পরে শ্রোতা লাগেই: told me, told us — to ছাড়াই।", en: "**Tell** must be followed by a listener: told me, told us — no to.", hi: "**tell** के बाद श्रोता ज़रूरी: told me, told us — to के बिना।" },
            { bn: "**say**-এর পরে শ্রোতা থাকলে to লাগে: said to me; না থাকলে একা say: He said (that) he was busy।", en: "**Say** takes to before a listener: said to me; with no listener it stands alone: He said (that) he was busy.", hi: "**say** के साथ श्रोता हो तो to लगता है: said to me; न हो तो अकेला say: He said (that) he was busy।" },
            { bn: "**Backshift**-এর প্রথম ধাপ: present হয়ে যায় past — am→was, work→worked।", en: "Backshift step one: present steps to past — am→was, work→worked.", hi: "Backshift का पहला क़दम: present बनता है past — am→was, work→worked।" },
            { bn: "দ্বিতীয় ধাপ: past হয়ে যায় **past perfect** — saw→had seen।", en: "Step two: past steps to **past perfect** — saw→had seen.", hi: "दूसरा क़दम: past बनता है **past perfect** — saw→had seen।" },
            { bn: "সহায়ক verb-ও পিছায়: **will→would**, can→could, may→might।", en: "Helping verbs step back too: **will→would**, can→could, may→might.", hi: "सहायक verbs भी पीछे जाते हैं: **will→would**, can→could, may→might।" },
            { bn: "বাংলায় 'সে বলল, সে ব্যস্ত' — রিপোর্টে tense ধরে রাখে; তাই ভুলে He said he is busy লেখা হয়।", en: "Bengali keeps the original tense when reporting ('সে বলল, সে ব্যস্ত') — so learners slip into He said he is busy.", hi: "बांग्ला रिपोर्ट में tense वही रहता है — इसलिए ग़लती से He said he is busy लिख दिया जाता है।" },
            { bn: "ইংরেজিতে রিপোর্ট করার মুহূর্ত অনুযায়ী tense **এক ধাপ পিছিয়ে** যাওয়াই নিরাপদ নিয়ম।", en: "In English, stepping the tense **one back** at the moment of reporting is the safe rule.", hi: "अंग्रेज़ी में रिपोर्ट के मौक़े के हिसाब से tense **एक क़दम पीछे** जाना ही सुरक्षित नियम है।" },
          ],
          formula: { bn: "say + to + শ্রোতা • tell + শ্রোতা • tense এক ধাপ পেছনে (backshift)", en: "say + to + listener • tell + listener • tense steps one back (backshift)", hi: "say + to + श्रोता • tell + श्रोता • tense एक क़दम पीछे (backshift)" },
          table: {
            head: [
              { bn: "বক্তার ভাষা (Direct)", en: "Direct", hi: "बोलने वाले की भाषा (Direct)" },
              { bn: "রিপোর্টে (Reported)", en: "Reported", hi: "रिपोर्ट में (Reported)" },
            ],
            rows: [
              [{ bn: "am / is", en: "am / is", hi: "am / is" }, { bn: "was", en: "was", hi: "was" }],
              [{ bn: "work", en: "work", hi: "work" }, { bn: "worked", en: "worked", hi: "worked" }],
              [{ bn: "saw", en: "saw", hi: "saw" }, { bn: "had seen", en: "had seen", hi: "had seen" }],
              [{ bn: "will", en: "will", hi: "will" }, { bn: "would", en: "would", hi: "would" }],
              [{ bn: "can", en: "can", hi: "can" }, { bn: "could", en: "could", hi: "could" }],
              [{ bn: "may", en: "may", hi: "may" }, { bn: "might", en: "might", hi: "might" }],
            ],
          },
          examples: [
            {
              wrong: "She told to me that she was tired.",
              right: "She told me that she was tired.",
              note: {
                bn: "tell-এর সাথে to আসে না — শ্রোতা সরাসরি বসে: told me; to চাইলে say-এর সাথে: said to me।",
                en: "'Tell' takes the listener directly — told me; only 'say' needs 'to': said to me.",
                hi: "'tell' के साथ 'to' नहीं आता — श्रोता सीधा बैठता है: told me; 'to' केवल 'say' के साथ: said to me।",
              },
            },
            {
              wrong: "He said that he will come tomorrow.",
              right: "He said that he would come the next day.",
              note: {
                bn: "রিপোর্ট করলে will পিছিয়ে would হয়, আর tomorrow-ও সরে (the next day) — tense আর সময়-শব্দ দুটোই একসাথে বদলায়।",
                en: "Reporting pushes will back to would — and tomorrow shifts too (the next day); tense and time words move together.",
                hi: "रिपोर्ट करने पर will→would हो जाता है, और tomorrow भी खिसकता है (the next day) — tense और समय शब्द साथ-साथ बदलते हैं।",
              },
            },
            {
              wrong: "My boss said me the meeting was cancelled.",
              right: "My boss told me the meeting was cancelled.",
              note: {
                bn: "said-এর পরে সরাসরি শ্রোতা বসে না — said me ভুল; শ্রোতা থাকলে told me, না থাকলে said (that)...",
                en: "'Said' can't take a listener directly — said me is wrong; with a listener use told me, without one use said (that)...",
                hi: "'said' के बाद सीधा श्रोता नहीं बैठता — said me गलत; श्रोता हो तो told me, न हो तो said (that)...",
              },
            },
          ],
        },
        {
          heading: { bn: "❓ রিপোর্টেড প্রশ্ন: গোছানো ক্রম, প্রশ্নবোধক ছাড়া", en: "❓ Reported questions: statement order, no question mark", hi: "❓ रिपोर्टेड प्रश्न: कथन-क्रम, प्रश्नचिह्न नहीं" },
          lead: {
            bn: "রিপোর্ট হতেই প্রশ্ন statement হয়ে যায় — ক্রম গোছানো, প্রশ্নবোধক চিহ্ন নেই।",
            en: "The moment you report it, a question becomes a statement — straight order, no question mark.",
            hi: "रिपोर्ट होते ही प्रश्न कथन बन जाता है — सीधा क्रम, प्रश्नचिह्न नहीं।",
          },
          points: [
            { bn: "রিপোর্টেড প্রশ্ন আর প্রশ্ন থাকে না — **statement-এর মতো** subject + verb ক্রমে বসে।", en: "A reported question stops being a question — it sits in **statement order**: subject + verb.", hi: "रिपोर्टेड प्रश्न प्रश्न नहीं रहता — **कथन की तरह** subject + verb क्रम में बैठता है।" },
            { bn: "প্রশ্নবোধক চিহ্নও **মুছে যায়** — বাক্যটা এখন সাধারণ বিবৃতি।", en: "The question mark **disappears** too — the sentence is now an ordinary statement.", hi: "प्रश्नचिह्न भी **मिट जाता है** — वाक्य अब साधारण कथन है।" },
            { bn: "Yes/no প্রশ্নে **asked + if/whether**: She asked if I liked coffee।", en: "Yes/no questions take **asked + if/whether**: She asked if I liked coffee.", hi: "Yes/no प्रश्न में **asked + if/whether**: She asked if I liked coffee।" },
            { bn: "Wh-প্রশ্নে wh-word থাকে, তারপর **গোছানো ক্রম**: He asked where I lived।", en: "Wh-questions keep the wh-word, then **statement order**: He asked where I lived.", hi: "Wh-प्रश्न में wh-word रहता है, फिर **कथन-क्रम**: He asked where I lived।" },
            { bn: "রিপোর্টে **do/does/did-এর চাকরি শেষ** — ফেলে দিয়ে verb backshift করুন: 'Where do you live?' → He asked where I lived।", en: "In reporting, **do/does/did lose their jobs** — drop them and backshift the verb: 'Where do you live?' → He asked where I lived.", hi: "रिपोर्ट में **do/does/did का काम ख़त्म** — हटा दें और verb backshift करें: 'Where do you live?' → He asked where I lived।" },
            { bn: "বাংলাতেও রিপোর্টে প্রশ্নের ছাঁদ রয়ে যায় না — তবু 'He asked where was I going' জাতীয় ভুল **খুব কমন**।", en: "Bengali never keeps the question frame in a report either — yet mistakes like 'He asked where was I going' are **very common**.", hi: "बांग्ला में भी रिपोर्ट में प्रश्न का ढाँचा नहीं रहता — फिर भी 'He asked where was I going' जैसी गलतियाँ **बहुत आम** हैं।" },
          ],
          formula: { bn: "wh-word/if + subject + verb — do/did নেই, '?' নেই", en: "wh-word/if + subject + verb — no do/did, no '?'", hi: "wh-word/if + subject + verb — do/did नहीं, '?' नहीं" },
          examples: [
            {
              wrong: "He asked where was I going.",
              right: "He asked where I was going.",
              note: {
                bn: "wh-word-এর পরে প্রশ্নের ক্রম নয়, statement-এর ক্রম — subject (I) আগে, verb (was) পরে।",
                en: "After the wh-word use statement order — subject (I) first, verb (was) after — not question order.",
                hi: "wh-word के बाद प्रश्न-क्रम नहीं, कथन-क्रम — subject (I) पहले, verb (was) बाद में।",
              },
            },
            {
              wrong: "She asked me that I liked tea.",
              right: "She asked me if I liked tea.",
              note: {
                bn: "yes/no প্রশ্ন রিপোর্টে if/whether ছাড়া চলে না; that শুধু বিবৃতির সঙ্গী।",
                en: "Reported yes/no questions need if/whether; 'that' only introduces statements.",
                hi: "yes/no प्रश्न की रिपोर्ट में if/whether ज़रूरी; 'that' केवल कथन के लिए।",
              },
            },
            {
              wrong: "The teacher asked us what time does the class start.",
              right: "The teacher asked us what time the class started.",
              note: {
                bn: "রিপোর্টে does/did বাদ — verb নিজেই backshift হয়ে started হয়ে যায়; প্রশ্নবোধক চিহ্নও মুছে যায়।",
                en: "In reported questions do/does/did vanish and the verb backshifts: started — the question mark goes too.",
                hi: "रिपोर्टेड प्रश्न में do/does/did हट जाते हैं और verb backshift होकर started बन जाता है — प्रश्नचिह्न भी मिट जाता है।",
              },
            },
          ],
        },
        {
          heading: { bn: "🗣️ রিপোর্টেড নির্দেশ: told/asked + to + verb", en: "🗣️ Reported commands: told/asked + to + verb", hi: "🗣️ रिपोर्टेड आदेश: told/asked + to + verb" },
          lead: {
            bn: "আদেশ আর অনুরোধের রিপোর্টে সুত্র একটাই — person + to + base verb।",
            en: "Commands and requests are reported with one formula — person + to + base verb.",
            hi: "आदेश और अनुरोध की रिपोर्ट का एक ही सूत्र — person + to + base verb।",
          },
          points: [
            { bn: "আদেশ রিপোর্ট করতে **told/ordered + person + to + base verb**: The teacher told us to open our books।", en: "Report a command with **told/ordered + person + to + base verb**: The teacher told us to open our books.", hi: "आदेश की रिपोर्ट **told/ordered + व्यक्ति + to + base verb** से करें: The teacher told us to open our books।" },
            { bn: "নরম অনুরোধে **asked + person + to**: She asked me to help her।", en: "Softer requests take **asked + person + to**: She asked me to help her.", hi: "नरम अनुरोध में **asked + व्यक्ति + to**: She asked me to help her।" },
            { bn: "নেতিবাচক আদেশে to-র আগে **not** বসে: Mother told me not to watch TV।", en: "Negative commands put **not** before to: Mother told me not to watch TV.", hi: "नकारात्मक आदेश में to से पहले **not** बैठता है: Mother told me not to watch TV।" },
            { bn: "**said**-এর পরে সরাসরি শ্রোতা আসে না — said us to... ভুল; told বা asked বেছে নিন।", en: "**Said** never takes a listener directly — said us to... is out; choose told or asked.", hi: "**said** के बाद सीधा श्रोता नहीं आता — said us to... ग़लत है; told या asked चुनें।" },
            { bn: "to-র পরের verb **base রূপেই** থাকে — sit, open, help।", en: "The verb after to stays **in base form** — sit, open, help.", hi: "to के बाद का verb **base रूप में ही** रहता है — sit, open, help।" },
          ],
          formula: { bn: "told/asked + person + to + base verb • নেতিবাচক: not to + verb", en: "told/asked + person + to + base verb • negative: not to + verb", hi: "told/asked + व्यक्ति + to + base verb • नकारात्मक: not to + verb" },
          examples: [
            {
              wrong: "The teacher said us to open our books.",
              right: "The teacher told us to open our books.",
              note: {
                bn: "আদেশ জানাতে said-এর জায়গায় told/ordered — said-এর পরে শ্রোতা + to + verb চলে না।",
                en: "Commands need told/ordered — 'said' can't be followed by a listener + to + verb.",
                hi: "आदेश के लिए told/ordered — 'said' के बाद श्रोता + to + verb नहीं चलता।",
              },
            },
            {
              wrong: "Mother told me don't watch TV.",
              right: "Mother told me not to watch TV.",
              note: {
                bn: "রিপোর্টেড নেতিবাচক আদেশে don't-এর জায়গায় not to — told me not to watch।",
                en: "Negative commands turn don't into not to: told me not to watch.",
                hi: "नकारात्मक आदेश में don't की जगह not to आता है: told me not to watch।",
              },
            },
            {
              wrong: "She asked to me help her.",
              right: "She asked me to help her.",
              note: {
                bn: "asked-এর পরে শ্রোতা সরাসরি (asked me), তারপর to + verb; মানুষের আগে to বসালে verb টানা যায় না।",
                en: "'Asked' takes the person directly (asked me) and then to + verb — no 'to' before the person.",
                hi: "'asked' के बाद व्यक्ति सीधे आता है (asked me), फिर to + verb — व्यक्ति से पहले 'to' नहीं।",
              },
            },
          ],
        },
        {
          heading: { bn: "⏳ সময় ও স্থানের শব্দ সরে: yesterday → the day before", en: "⏳ Time & place words shift: yesterday → the day before", hi: "⏳ समय और स्थान शब्द खिसकते हैं: yesterday → the day before" },
          lead: {
            bn: "রিপোর্ট হয় অন্য সময়ে, অন্য জায়গা থেকে — তাই নির্দেশক শব্দগুলোও পিছায়।",
            en: "Reporting happens later, from elsewhere — so the pointing words step back too.",
            hi: "रिपोर्ट बाद में, दूसरी जगह से होती है — इसलिए संकेत-शब्द भी पीछे खिसकते हैं।",
          },
          points: [
            { bn: "বক্তা দাঁড়িয়ে ছিল অন্য সময়ে, অন্য জায়গায় — দৃষ্টিকোণ বদলায়, তাই **নির্দেশক শব্দও** এক ধাপ পিছায়।", en: "The speaker stood at another time, in another place — the viewpoint changes, so **the pointing words** step back too.", hi: "बोलने वाला दूसरे समय, दूसरी जगह पर खड़ा था — दृष्टिकोण बदलता है, इसलिए **संकेत-शब्द भी** एक क़दम पीछे जाते हैं।" },
            { bn: "ছকের সরানোগুলো মনে গেঁথে নিন: **now→then**, yesterday→the day before, tomorrow→the next day, ago→before।", en: "Anchor the shifts from the table: **now→then**, yesterday→the day before, tomorrow→the next day, ago→before.", hi: "टेबल के बदलाव याद कर लें: **now→then**, yesterday→the day before, tomorrow→the next day, ago→before।" },
            { bn: "স্থানে **here→there**, this→that, these→those — আর come প্রায়ই go হয়ে যায়।", en: "For place, **here→there**, this→that, these→those — and come often turns into go.", hi: "स्थान में **here→there**, this→that, these→those — और come अक्सर go बन जाता है।" },
            { bn: "'I will call you tomorrow' বলা মানুষটা আজ আর বলছে না — রিপোর্টকারীর দিন থেকে **the next day**-ই সঠিক।", en: "The person who said 'I will call you tomorrow' isn't speaking today — from the reporter's day, **the next day** is exact.", hi: "'I will call you tomorrow' कहने वाला आज बोल नहीं रहा — रिपोर्टकर्ता के दिन से **the next day** ही सही है।" },
            { bn: "একই দিনে, একই জায়গায় রিপোর্ট করলে শব্দ বদলায় না — সরাটা **দৃষ্টিকোণের বদল**, জাদুর নিয়ম নয়।", en: "Reported the same day, in the same place, the words stay — the shifting is a **change of viewpoint**, not a magic rule.", hi: "उसी दिन, उसी जगह रिपोर्ट करें तो शब्द वही रहते हैं — बदलाव **दृष्टिकोण का** है, जादू का नियम नहीं।" },
          ],
          table: {
            head: [
              { bn: "বক্তার ভাষা (Direct)", en: "Direct", hi: "बोलने वाले की भाषा (Direct)" },
              { bn: "রিপোর্টে (Reported)", en: "Reported", hi: "रिपोर्ट में (Reported)" },
            ],
            rows: [
              [{ bn: "now", en: "now", hi: "now" }, { bn: "then", en: "then", hi: "then" }],
              [{ bn: "today", en: "today", hi: "today" }, { bn: "that day", en: "that day", hi: "that day" }],
              [{ bn: "yesterday", en: "yesterday", hi: "yesterday" }, { bn: "the day before (the previous day)", en: "the day before (the previous day)", hi: "the day before (the previous day)" }],
              [{ bn: "tomorrow", en: "tomorrow", hi: "tomorrow" }, { bn: "the next day (the following day)", en: "the next day (the following day)", hi: "the next day (the following day)" }],
              [{ bn: "ago", en: "ago", hi: "ago" }, { bn: "before", en: "before", hi: "before" }],
              [{ bn: "here", en: "here", hi: "here" }, { bn: "there", en: "there", hi: "there" }],
              [{ bn: "this", en: "this", hi: "this" }, { bn: "that", en: "that", hi: "that" }],
              [{ bn: "these", en: "these", hi: "these" }, { bn: "those", en: "those", hi: "those" }],
              [{ bn: "come", en: "come", hi: "come" }, { bn: "go", en: "go", hi: "go" }],
            ],
          },
          examples: [
            {
              wrong: "She said she will call me tomorrow.",
              right: "She said she would call me the next day.",
              note: {
                bn: "পরের দিন রিপোর্ট করলে will→would এবং tomorrow→the next day — দুটোই একসাথে সরবে।",
                en: "Reported the next day: will→would and tomorrow→the next day — both shift together.",
                hi: "अगले दिन रिपोर्ट करें तो will→would और tomorrow→the next day — दोनों साथ खिसकते हैं।",
              },
            },
            {
              wrong: "He said he had met her yesterday.",
              right: "He said he had met her the day before.",
              note: {
                bn: "had met পর্যন্ত backshift হয়েছে, কিন্তু yesterday রয়ে গেছে — বক্তার 'yesterday' আর রিপোর্টকারীর 'yesterday' এক নয়; the day before লিখুন।",
                en: "The verb backshifted to had met but 'yesterday' stayed — the speaker's yesterday isn't the reporter's; write the day before.",
                hi: "verb had met तक खिसका पर 'yesterday' छूट गया — बोलने वाले का yesterday रिपोर्टकर्ता का नहीं होता; the day before लिखें।",
              },
            },
            {
              wrong: "'I live here,' she said. → She said she lived here.",
              right: "She said she lived there.",
              note: {
                bn: "রিপোর্ট অন্য জায়গা থেকে হলে here→there, this→that — স্থানের নির্দেশকও দৃষ্টিকোণ বদলের সাথে সরে।",
                en: "Reported from elsewhere, here→there (and this→that) — place pointers move with the new viewpoint.",
                hi: "दूसरी जगह से रिपोर्ट करने पर here→there (और this→that) — स्थान-संकेत भी नई दृष्टि के साथ खिसकते हैं।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "শ্রোতা সাথে থাকলে tell (told me), না থাকলে say (said to me / said that...) — এই এক লাইনেই অর্ধেক ভুল শেষ।",
          en: "Listener present → tell (told me); no listener → say (said to me / said that...) — that one line kills half the mistakes.",
          hi: "श्रोता साथ हो तो tell (told me), न हो तो say (said to me / said that...) — एक पंक्ति में आधी गलतियाँ ख़त्म।",
        },
        {
          bn: "রিপোর্টেড প্রশ্নে ক্রম গোছানো: He asked where I lived — do/did নেই, প্রশ্নবোধকও নেই।",
          en: "Reported questions keep statement order: He asked where I lived — no do/did, no question mark.",
          hi: "रिपोर्टेड प्रश्न में क्रम सीधा: He asked where I lived — do/did नहीं, प्रश्नचिह्न नहीं।",
        },
        {
          bn: "Backshift-কেই নিরাপদ ভাবুন: is→was, will→would, can→could — কথাটা এখনও সত্যি হলে casual কথায় ব্যতিক্রম চলে, কিন্তু লেখায় backshift-ই জিতে।",
          en: "Treat backshift as the safe default: is→was, will→would, can→could — casual speech allows exceptions for still-true facts, but in writing backshift always wins.",
          hi: "backshift को ही सुरक्षित मानें: is→was, will→would, can→could — casual बातचीत में अपवाद चलता है, पर लेखन में backshift ही जीतता है।",
        },
        {
          bn: "Tense বদলালেই কাজ শেষ নয় — tomorrow, yesterday, here, this-ও নতুন দৃষ্টিকোণ অনুযায়ী সরে: the next day, the day before, there, that।",
          en: "Shifting the tense isn't the whole job — tomorrow, yesterday, here and this also move with the new viewpoint: the next day, the day before, there, that.",
          hi: "tense बदलना ही काफ़ी नहीं — tomorrow, yesterday, here, this भी नई दृष्टि के अनुसार खिसकते हैं: the next day, the day before, there, that।",
        },
      ],
    },
  },
];

export default SEED_GRAMMAR_V4_V2A1;
