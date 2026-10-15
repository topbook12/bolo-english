// ─── Learning-path grammar seeds: INTERMEDIATE batch A1 (3 lessons) ───
// Part of Task 9 (library enrichment). TriText = { bn, en, hi } — Bengali is
// the PRIMARY explanation language. quiz omitted (reserved for future).
import type { LibraryGrammarData, LibraryLevel } from "../../src/lib/library-types";

export interface SeedGrammarV2Entry {
  topic: string;
  level: LibraryLevel;
  title: string;
  unit: number; // 1-5 = on the learning path; 0 = extra library lesson
  data: LibraryGrammarData;
}

export const SEED_GRAMMAR_V2_A1: SeedGrammarV2Entry[] = [
  /* ── 1. Comparatives & Superlatives (unit 5) ────────────────────────── */
  {
    topic: "Comparatives & Superlatives",
    level: "intermediate",
    title: "Comparatives & Superlatives (Intermediate)",
    unit: 5,
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
      sections: [
        {
          heading: {
            bn: "ছোট adjective-এ -er/-est, বড়টায় more/most",
            en: "Short adjectives take -er/-est, long ones take more/most",
            hi: "छोटे adjectives में -er/-est, लंबे में more/most",
          },
          body: {
            bn: "এক syllable-এর ছোট adjective (tall, old, big) আর -y-তে শেষ হওয়া দুই syllable-এর শব্দ (happy, easy) -er/-est নেয়: taller, the tallest; happier, the happiest। বানানে খেয়াল রাখুন: ছোট শব্দের শেষে এক consonant + এক vowel থাকলে শেষ consonant ডাবল হয় (big→bigger, hot→hottest), আর -y-এর আগের y হয়ে যায় i (easy→easier)। তিন syllable-এর বা লম্বা adjective (beautiful, expensive, interesting) আর অধিকাংশ দুই syllable-এর শব্দ (careful, famous) more/most নেয়: more expensive, the most famous। মনে রাখুন — এক তুলনায় একটাই চিহ্ন: more আর -er কখনো একসাথে আসবে না।",
            en: "One-syllable adjectives (tall, old, big) and two-syllable ones ending in -y (happy, easy) take -er/-est: taller, the tallest; happier, the happiest. Watch the spelling: a short word ending consonant-vowel-consonant doubles the last letter (big→bigger, hot→hottest), and y turns to i (easy→easier). Longer adjectives — three syllables, and most two-syllable ones like careful, famous — take more/most: more beautiful, the most famous. One comparison, one marker: more and -er never appear together.",
            hi: "एक syllable वाले adjectives (tall, old, big) और -y पर ख़त्म होने वाले दो-syllable शब्द (happy, easy) -er/-est लेते हैं: taller, the tallest; happier, the happiest। लंबे adjectives — तीन syllables और ज़्यादातर दो-syllable शब्द (careful, famous) — more/most लेते हैं: more beautiful, the most famous। एक तुलना, एक ही चिह्न: more और -er कभी साथ नहीं आते।",
          },
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
          heading: {
            bn: "অনিয়মিত রূপ: better, worse, further, elder",
            en: "Irregular forms: better, worse, further, elder",
            hi: "अनियमित रूप: better, worse, further, elder",
          },
          body: {
            bn: "কিছু adjective-এর তুলনা নিয়ম মানে না, মুখস্থ রাখতে হয়: good→better→best, bad→worse→worst, far→further/farther→furthest/farthest, little→less→least, many/much→more→most। এদের সাথে কখনো more বা -er জুড়বেন না — 'more better' ভুল, 'better'-ই সম্পূর্ণ। পরিবারের সদস্যদের বয়সে elder/eldest চলে (my elder brother), কিন্তু সেটা শুধু noun-এর আগে; 'than'-সহ তুলনায় older ব্যবহার হয়: He is older than me। আর মনে রাখুন — দুজনের তুলনায় comparative বসে (the elder of the two), তিন বা তার বেশিতে superlative (the eldest of the three)।",
            en: "A few adjectives refuse the rules and must be memorised: good→better→best, bad→worse→worst, far→further/farther→furthest/farthest, little→less→least, many/much→more→most. Never attach more or -er to them — 'better' is already complete. For family members, elder/eldest works only before the noun (my elder brother); with 'than' you must switch to older: He is older than me. And exactly two people take the comparative (the elder of the two), while three or more take the superlative (the eldest of the three).",
            hi: "कुछ adjectives नियम नहीं मानते, रटना पड़ता है: good→better→best, bad→worse→worst, far→further→furthest, little→less→least, many/much→more→most। इनके साथ more या -er कभी न जोड़ें — 'better' पहले से पूरा है। परिवार के सदस्यों के लिए elder/eldest केवल noun से पहले चलता है; 'than' वाली तुलना में older लगेगा: He is older than me। दो लोगों में comparative (the elder of the two), तीन या अधिक में superlative (the eldest of the three)।",
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
          heading: {
            bn: "সমান তুলনা: as ... as আর not as ... as",
            en: "Equal comparisons: as ... as and not as ... as",
            hi: "बराबरी की तुलना: as ... as और not as ... as",
          },
          body: {
            bn: "দুটো জিনিস সমান হলে as + adjective + as ব্যবহার হয়: He is as tall as his father (সে তার বাবার মতোই লম্বা)। কম বোঝাতে হলে not as ... as: This car is not as expensive as that one। খেয়াল রাখুন — as ... as-এর ভিতরে adjective সবসময় base রূপে থাকে: taller, more expensive কিছুই ঢুকবে না। পরিমাণ বোঝাতে আগে twice/half বসতে পারে: This room is twice as big as mine। আর as ... as কখনো than নেয় না — than-এর ব্যাপারটা শুধু comparative-এর।",
            en: "When two things are equal, use as + adjective + as: He is as tall as his father. For 'less than' comparisons use not as ... as: This car is not as expensive as that one. The adjective inside stays in its base form — no -er, no more. You can scale it with twice or half (twice as big as), and remember: as...as never teams up with 'than' — that belongs to comparatives.",
            hi: "दो चीज़ें बराबर हों तो as + adjective + as: He is as tall as his father। 'कम' दिखाने के लिए not as ... as: This car is not as expensive as that one। as ... as के अंदर adjective सामान्य रूप में रहता है — -er या more नहीं। twice/half जोड़कर पैमाना बदल सकते हैं (twice as big as), और याद रखें: as...as के साथ 'than' कभी नहीं आता।",
          },
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
          heading: {
            bn: "ক্লাসিক ভুল: more better, than বনাম then",
            en: "Classic mistakes: more better, than vs then",
            hi: "क्लासिक गलतियाँ: more better, than बनाम then",
          },
          body: {
            bn: "উচ্চারণে than আর then প্রায় একই শোনায়, তাই লিখতে গিয়ে বাংলাভাষীরা প্রায়ই গুলিয়ে ফেলেন — মনে রাখুন: than = 'চেয়ে' (তুলনা), then = 'তারপর' (সময়)। better, worse-এর মতো irregular comparative-এ জোর দিতে চাইলে much/far বসান — much better, far worse; more বসালে দ্বিগুণ হয়ে যায়। superlative-এর আগে the লাগবেই: the best player, the most expensive। আর তুলনার দুই পাশ মিলিয়ে সাজান — This room is bigger than that one; কোনো জটিল গোছানোর দরকার নেই।",
            en: "Because 'than' and 'then' sound almost identical, Bengali writers swap them constantly: than = comparison ('চেয়ে'), then = time ('তারপর'). To intensify an irregular comparative, use much or far — much better, far worse — never more. Superlatives always carry 'the': the best player, the most expensive. And keep the two sides of a comparison clean and parallel: This room is bigger than that one.",
            hi: "'Than' और 'then' की आवाज़ लगभग एक जैसी है, इसलिए लिखते समय उलझन होती है — than = तुलना ('से'), then = समय ('तब/फिर')। irregular comparative पर ज़ोर देने के लिए much/far लगाएँ — much better, far worse — more कभी नहीं। superlative के पहले हमेशा 'the': the best player, the most expensive।",
          },
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

  /* ── 2. Passive Voice — All Tenses (unit 0) ─────────────────────────── */
  {
    topic: "Passive Voice — All Tenses",
    level: "intermediate",
    title: "Passive Voice — All Tenses (Intermediate)",
    unit: 0,
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
      sections: [
        {
          heading: {
            bn: "মূল কাঠামো: be + V3, tense থাকে be-এর ভিতরে",
            en: "The core form: be + V3, and the tense lives inside be",
            hi: "मूल रूप: be + V3, tense be के अंदर बैठता है",
          },
          body: {
            bn: "Passive-এর সূত্র একটাই: object উঠে subject-এর চেয়ারে বসে, be-verb tense বহন করে, আর মূল verb হয়ে যায় past participle (V3)। Simple present-এ is/are + V3: The shop is closed every Sunday; Rice is grown here। Simple past-এ was/were + V3: The letter was posted yesterday। Simple future-এ will be + V3: The results will be announced tomorrow। সবচেয়ে কমন ভুল — tense-টা V3-এর ভিতরে ঢুকিয়ে দেওয়া বা be-টা ফেলে দেওয়া: 'This house built in 1990' লিখলে বাক্যটা verb-হীন হয়ে পড়ে।",
            en: "The recipe is always the same: the object moves into the subject's chair, the be verb carries the tense, and the main verb becomes the past participle (V3). Simple present: is/are + V3 (The shop is closed every Sunday; Rice is grown here). Simple past: was/were + V3 (The letter was posted yesterday). Simple future: will be + V3 (The results will be announced tomorrow). The most common mistake is pushing the tense into the participle or dropping be entirely — 'This house built in 1990' has no real verb.",
            hi: "सूत्र एक ही है: object subject की कुर्सी पर आ जाता है, be verb tense ले जाता है, और मुख्य verb past participle (V3) बन जाता है। Simple present: is/are + V3 (Rice is grown here)। Simple past: was/were + V3 (The letter was posted yesterday)। Simple future: will be + V3 (The results will be announced tomorrow)। सबसे आम गलती — tense को V3 में ठूँसना या be हटा देना: 'This house built in 1990' में कोई verb ही नहीं रह जाता।",
          },
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
                en: "Rice doesn't grow itself — people grow it; with the doer left out, the present passive is is + grown.",
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
          heading: {
            bn: "Continuous ও perfect passive: is being built / has been built",
            en: "Continuous & perfect passives: is being built / has been built",
            hi: "Continuous और perfect passive: is being built / has been built",
          },
          body: {
            bn: "চলমান কাজের passive-এ be-এর পরে being বসে: is/are being + V3 — The bridge is being built (এখন নির্মাণ চলছে)। অতীতে ছিল: was/were being + V3 — The road was being repaired when we passed। Perfect tense-এর passive-এ been বসে: has/have been + V3 — The tickets have been booked; অতীতের আগে বোঝাতে had been + V3। মনে রাখুন: being-এর ভিতরেই 'চলছে' বোঝায়, been-এর ভিতরেই 'হয়ে গেছে' — বাংলা 'হচ্ছে' আর 'হয়েছে'-র পার্থক্যটা এখানেই বসে। এই দুটো শব্দ ফেলে দিলে বাক্য অন্য অর্থে চলে যায়।",
            en: "For ongoing actions, being slides in after be: is/are being + V3 — The bridge is being built (construction is happening now); in the past, was/were being + V3. For perfect tenses, been takes over: has/have been + V3 (The tickets have been booked), and had been + V3 for the past perfect. 'Being' carries the 'going on now' meaning and 'been' carries the 'already finished' meaning — exactly the হচ্ছে vs হয়েছে line. Drop either word and the sentence slips into another meaning.",
            hi: "चल रहे काम के लिए be के बाद being आता है: is/are being + V3 — The bridge is being built; past में was/were being + V3। perfect tenses में been आता है: has/have been + V3 (The tickets have been booked), past perfect के लिए had been + V3। 'being' = 'हो रहा है', 'been' = 'हो चुका है' — यही फ़र्क़ काम की जगह बैठता है। इनमें से कोई शब्द छोड़ दें तो मतलब बदल जाता है।",
          },
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
          heading: {
            bn: "কখন passive-ই স্বাভাবিক: খবর, প্রক্রিয়া, অজানা কর্তা",
            en: "When passive is natural: news, processes, unknown doers",
            hi: "कब passive स्वाभाविक है: ख़बरें, प्रक्रिया, अज्ञात कर्ता",
          },
          body: {
            bn: "তিনটা জায়গায় passive বাংলাভাষীর মুখেও স্বাভাবিক: খবরে (The thief was arrested last night — কে গ্রেপ্তার করেছে তা বলার দরকার নেই), প্রক্রিয়া ব্যাখ্যায় (The tea leaves are picked, then they are dried in the sun), আর কর্তা অজানা বা অপ্রাসঙ্গিক হলে (My bike was stolen)। বাংলাতেও আমরা বলি 'পাতা তোলা হয়', 'শুকানো হয়' — ভাষার এই মিলটা কাজে লাগান। তবে এক বর্ণনায় ভয়েস মেশাবেন না: প্রক্রিয়া passive দিয়ে শুরু করলেন, শেষ পর্যন্ত passive-এই থাকুন। আর যেখানে কর্তা জানা, গুরুত্বপূর্ণ এবং সক্রিয় — সেখানে active বাক্যই ছোট ও স্পষ্ট।",
            en: "Passive is the natural choice in three places: news (The thief was arrested last night — who arrested him doesn't matter), process explanations (The tea leaves are picked, then they are dried in the sun), and unknown or unimportant doers (My bike was stolen). Bengali does the same thing — 'পাতা তোলা হয়', 'শুকানো হয়' — so lean on that shared instinct. Just don't switch voices mid-description: if a process starts passive, stay passive to the end. And when the doer is known, important and active, the shorter active sentence wins.",
            hi: "तीन जगहों पर passive स्वाभाविक है: ख़बरों में (The thief was arrested last night), प्रक्रिया समझाते वक़्त (The tea leaves are picked, then they are dried in the sun), और कर्ता अज्ञात हो तो (My bike was stolen)। बांग्ला में भी हम ऐसा ही कहते हैं — इस साझी प्रवृत्ति का फ़ायदा उठाएँ। बस बीच में voice न बदलें: प्रक्रिया passive से शुरू हुई तो passive में ही ख़त्म करें। और जहाँ कर्ता जानकार और ज़रूरी हो — वहाँ छोटा active वाक्य बेहतर है।",
          },
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
          heading: {
            bn: "by-phrase আর দুই-object এর verb: was given a book",
            en: "By-phrases and two-object verbs: was given a book",
            hi: "by-phrase और दो-object वाली verbs: was given a book",
          },
          body: {
            bn: "by + কর্তা তখনই লিখুন, যখন সেই তথ্য সত্যিই দরকারি: The novel was written by Sarat Chandra। কর্তা যদি 'someone', 'people'-এর মতো ফাঁকা শব্দ হয়, by-phrase বাদই দিন — এটাই passive-এর মূল সুবিধা। আর যন্ত্র বা উপকরণ বোঝাতে by নয়, with: cut with a knife, written with a pen। give, send, show, offer, tell-এর মতো verb-এ দুটো object থাকে, তাই দুই রকম passive চলে: I was given a book (মানুষটা সামনে) আর A book was given to me (বইটা সামনে)। জিনিস সামনে রাখলে মানুষের আগে to বাধ্যতামূলক — 'A book was given me' ভুল।",
            en: "Write by + doer only when that information truly matters: The novel was written by Sarat Chandra. If the doer is a vague 'someone/people', drop the by-phrase — that is passive's whole point. For instruments use with, not by: cut with a knife, written with a pen. Verbs like give, send, show, offer, tell take two objects, so two passives are possible: I was given a book (person first) and A book was given to me (thing first). With the thing first, 'to' before the person is compulsory — 'A book was given me' is wrong.",
            hi: "by + कर्ता तभी लिखें जब वह जानकारी सच में ज़रूरी हो: The novel was written by Sarat Chandra। कर्ता अस्पष्ट हो ('someone', 'people') तो by-phrase छोड़ दें — passive का मूल फ़ायदा यही है। औज़ार के लिए by नहीं, with: cut with a knife। give, send, show, offer, tell जैसी verbs के दो objects होते हैं, इसलिए दो passive बनते हैं: I was given a book और A book was given to me। चीज़ पहले आए तो व्यक्ति से पहले 'to' अनिवार्य।",
          },
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

  /* ── 3. Reported Speech Basics (unit 0) ─────────────────────────────── */
  {
    topic: "Reported Speech Basics",
    level: "intermediate",
    title: "Reported Speech Basics (Intermediate)",
    unit: 0,
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
      sections: [
        {
          heading: {
            bn: "বিবৃতি: say বনাম tell + backshift",
            en: "Statements: say vs tell + backshift",
            hi: "कथन: say बनाम tell + backshift",
          },
          body: {
            bn: "দুটো verb-এই মানুষের কথা জানানো যায়, কিন্তু tell-এর পরে শ্রোতা লাগেই: told me, told us; আর say-এর পরে শ্রোতা হলে to লাগে: said to me — শ্রোতা না থাকলে একা say: He said (that) he was busy। Backshift-এর নিয়ম সহজ: present হয়ে যায় past (am→was, work→worked), past হয়ে যায় past perfect (saw→had seen), আবার will→would, can→could, may→might। বাংলায় 'সে বলল, সে ব্যস্ত' — tense বদলায় না, তাই আমরা ভুলে He said he is busy লিখে ফেলি; ইংরেজিতে রিপোর্ট করার মুহূর্ত অনুযায়ী এক ধাপ পিছিয়ে যাওয়াই নিরাপদ।",
            en: "Both verbs report speech, but tell must have a listener: told me, told us, while say takes 'to' before a listener (said to me) or stands alone (He said he was busy). Backshift is simple: present steps to past (am→was, work→worked), past steps to past perfect (saw→had seen), and will→would, can→could, may→might. Bengali keeps the original tense when reporting ('সে বলল, সে ব্যস্ত'), so learners slip into He said he is busy — in English, stepping one tense back is the safe rule.",
            hi: "दोनों verbs बात बताते हैं, पर tell के बाद श्रोता ज़रूरी: told me, told us; say के साथ श्रोता हो तो to लगता है (said to me), न हो तो अकेला say: He said he was busy। backshift आसान है: present→past (am→was, work→worked), past→past perfect (saw→had seen), और will→would, can→could। बांग्ला रिपोर्ट करते वक़्त tense नहीं बदलता, इसलिए लोग He said he is busy लिख देते हैं — अंग्रेज़ी में एक क़दम पीछे जाना ही सुरक्षित नियम है।",
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
          heading: {
            bn: "রিপোর্টেড প্রশ্ন: গোছানো ক্রম, প্রশ্নবোধক ছাড়া",
            en: "Reported questions: statement order, no question mark",
            hi: "रिपोर्टेड प्रश्न: कथन-क्रम, प्रश्नचिह्न नहीं",
          },
          body: {
            bn: "প্রশ্ন রিপোর্ট করলে সেটা আর প্রশ্ন থাকে না — statement-এর মতো subject + verb ক্রমে বসে, প্রশ্নবোধক চিহ্নও মুছে যায়। Yes/no প্রশ্নে asked + if/whether: She asked if I liked coffee। Wh-প্রশ্নে wh-word + গোছানো ক্রম: He asked where I lived। do/does/did-এর চাকরি রিপোর্টে শেষ — সেগুলো ফেলে দিয়ে verb-কে backshift করুন: 'Where do you live?' → He asked where I lived। বাংলায় প্রশ্ন রিপোর্টেও প্রশ্নের ছাঁদ রয়ে যায় না, তাই 'He asked where was I going' জাতীয় ভুল খুব কমন।",
            en: "A reported question stops being a question: it falls back into subject + verb order, and the question mark disappears. Yes/no questions take asked + if/whether: She asked if I liked coffee. Wh-questions keep the wh-word and then statement order: He asked where I lived. Do/does/did lose their jobs in reporting — drop them and backshift the verb: 'Where do you live?' → He asked where I lived. Bengali never keeps the question frame in a report either, so mistakes like 'He asked where was I going' are very common.",
            hi: "रिपोर्ट होते ही प्रश्न प्रश्न नहीं रहता — subject + verb क्रम में आ जाता है, प्रश्नचिह्न भी मिट जाता है। yes/no प्रश्न में asked + if/whether: She asked if I liked coffee। wh-प्रश्न में wh-word + कथन-क्रम: He asked where I lived। do/does/did का काम ख़त्म — हटा दें और verb backshift करें: 'Where do you live?' → He asked where I lived।",
          },
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
          heading: {
            bn: "রিপোর্টেড নির্দেশ: told/asked + to + verb",
            en: "Reported commands: told/asked + to + verb",
            hi: "रिपोर्टेड आदेश: told/asked + to + verb",
          },
          body: {
            bn: "আদেশ বা অনুরোধ রিপোর্ট করতে told/ordered + person + to + base verb হয়: The teacher told us to open our books। নরম অনুরোধে asked + person + to: She asked me to help her। নেতিবাচক আদেশে to-র আগে not বসে: Mother told me not to watch TV। মনে রাখুন — said-এর পরে সরাসরি শ্রোতা আসে না, তাই আদেশে said us to... ভুল; told বা asked বেছে নিন। আর to-র পরে imperative-এর verb base রূপেই থাকে — sit, open, help।",
            en: "To report a command or request, use told/ordered + person + to + base verb: The teacher told us to open our books. Softer requests take asked + person + to: She asked me to help her. Negative commands put 'not' before to: Mother told me not to watch TV. Remember — 'said' never takes a listener directly, so said us to... is out; choose told or asked, and the verb after to stays in base form (sit, open, help).",
            hi: "आदेश या अनुरोध बताने के लिए told/ordered + व्यक्ति + to + base verb: The teacher told us to open our books। नरम अनुरोध में asked + व्यक्ति + to: She asked me to help her। नकारात्मक आदेश में to से पहले not: Mother told me not to watch TV। याद रखें — 'said' के बाद सीधा श्रोता नहीं आता, इसलिए said us to... गलत है; told या asked चुनें।",
          },
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
          heading: {
            bn: "সময় ও স্থানের শব্দ সরে: yesterday → the day before",
            en: "Time & place words shift: yesterday → the day before",
            hi: "समय और स्थान शब्द खिसकते हैं: yesterday → the day before",
          },
          body: {
            bn: "যে মানুষটা কথাগুলো বলেছিল, সে অন্য সময়ে অন্য জায়গায় দাঁড়িয়ে ছিল — আমরা এখন অন্য দৃষ্টিকোণ থেকে রিপোর্ট করছি, তাই নির্দেশক শব্দগুলোও এক ধাপ পিছিয়ে যায়: now→then, today→that day, yesterday→the day before (বা the previous day), tomorrow→the next day (বা the following day), ago→before। স্থানে here→there, this→that, these→those, আর come প্রায়ই go হয়ে যায়। 'I will call you tomorrow' বলা মানুষটা আজ আর বলছে না — রিপোর্টকারীর দিন থেকে the next day-ই সঠিক। তবে একই দিনে, একই জায়গায় রিপোর্ট করলে শব্দ বদলায় না — সরাটা দৃষ্টিকোণের বদল, কোনো জাদুর নিয়ম নয়।",
            en: "We report from a later time or a different place than the speaker stood, so pointing words step back too: now→then, today→that day, yesterday→the day before (or the previous day), tomorrow→the next day (or the following day), ago→before. Place moves here→there, this→that, these→those, and come often turns into go. The person who said 'I will call you tomorrow' is not speaking today — from the reporter's day, the next day is exact. But if you report on the same day, in the same place, the words stay — the shifting reflects the changed viewpoint, not a magic rule.",
            hi: "हम बोलने वाले के समय या स्थान से अलग जगह से रिपोर्ट करते हैं, इसलिए संकेत-शब्द भी एक क़दम पीछे जाते हैं: now→then, today→that day, yesterday→the day before, tomorrow→the next day, ago→before। स्थान में here→there, this→that, और come अक्सर go बन जाता है। 'I will call you tomorrow' कहने वाला आज बोल नहीं रहा — रिपोर्ट करने वाले के दिन से the next day सही है। पर उसी दिन, उसी जगह रिपोर्ट करें तो शब्द वही रहते हैं — बदलाव दृष्टिकोण का है, कोई जादू नहीं।",
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
