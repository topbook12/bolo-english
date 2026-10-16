// ─── Learning-path grammar seeds v3: ADVANCED batch A2a (2 deep lessons) ───
// Written directly by the main agent (Task 9.3 final gap-fill) after two
// agent attempts timed out. Same TriText contract as every v3 batch:
// bn primary, en + hi complete; English example sentences stay English.
import type { LibraryGrammarData, LibraryLevel } from "../../src/lib/library-types";

export interface SeedGrammarV3Entry {
  topic: string;
  level: LibraryLevel;
  title: string;
  unit: number;
  data: LibraryGrammarData;
}

export const SEED_GRAMMAR_V3_A2A: SeedGrammarV3Entry[] = [
  /* ── 1. Inversion & Emphasis Structures ───────────────────────────── */
  {
    topic: "Inversion & Emphasis Structures",
    level: "advanced",
    title: "Inversion & Emphasis Structures",
    unit: 0,
    data: {
      title: {
        bn: "ইনভার্শন ও জোর দেওয়ার কাঠামো (উচ্চ স্তর)",
        en: "Inversion & Emphasis Structures (Advanced)",
        hi: "इनवर्शन और ज़ोर देने की संरचनाएँ (उच्च स्तर)",
      },
      intro: {
        bn: "বাংলায় জোর দিতে গল্পের সুর, শব্দের দৈর্ঘ্য আর বাক্যের শেষে চাপ ব্যবহার করি — কিন্তু ইংরেজিতে আছে এক আলাদা যন্ত্র: সাহায্যকারী ক্রিয়াকে কর্তার সামনে নিয়ে যাওয়া, অর্থাৎ inversion। 'Never have I seen...' জাতীয় বাক্য লিখলে লেখা একবারে পরিণত, প্রফেশনাল আর চোখে লাগে এমন হয়ে ওঠে। এই পাঠে কখন উল্টাতে হয়, কীভাবে উল্টাতে হয় আর কোথায় উল্টানো ভুল — সব ধাপে ধাপে দেখব। আগের পাঠগুলোর (Tense & Aspect, Participle Clauses) টেন্স-জ্ঞান এখানে কাজে লাগবে।",
        en: "English has a dedicated emphasis machine that Bengali lacks: auxiliary inversion. 'Never have I seen...' sounds mature and professional in essays and speeches. This lesson covers when to invert, how to invert, and where inversion becomes an error — step by step. It builds on Advanced Tense & Aspect Nuances and Participle Clauses.",
        hi: "अंग्रेज़ी में ज़ोर देने का एक अलग तरीका है: auxiliary inversion। 'Never have I seen...' जैसे वाक्य लेखन को परिपक्व और प्रोफेशनल बनाते हैं। इस पाठ में कब उलटें, कैसे उलटें और कहाँ उलटना ग़लत है — सब सीखेंगे।",
      },
      sections: [
        {
          heading: {
            bn: "ইনভার্শন আসলে কী — আর কেন লাগে",
            en: "What inversion really is — and why it exists",
            hi: "इनवर्शन आसल में क्या है — और क्यों चाहिए",
          },
          body: {
            bn: "সাধারণ বাক্যের ক্রম হলো Subject + auxiliary + main verb: 'I have never seen such a view.' কিন্তু বাক্যের শুরুতে নেগেটিভ বা সীমাবদ্ধকারী শব্দ (never, rarely, seldom, hardly, little, not only, nowhere) বসালে ইংরেজি নিয়ম বলে — auxiliary-টাকে কর্তার সামনে আনতে হবে: 'Never have I seen such a view.' এটা ব্যাকরণের খেলা নয়, ভাষার এক জোর-দেওয়ার অভ্যাস: শুরুতে অস্বাভাবিক কিছু বসালে শ্রোতার কান খাড়া হয়। মনে রাখুন — inversion মানেই প্রশ্ন নয়; প্রশ্নে auxiliary বসে, এখানেও auxiliary বসে, কিন্তু শেষে বিন্দু (.) থাকে, প্রশ্নবোধক (?) নয়।",
            en: "Normal order is Subject + auxiliary + main verb. When a negative or restrictive adverb starts the sentence (never, rarely, seldom, hardly, little, not only, nowhere), English requires the auxiliary before the subject: 'Never have I seen such a view.' Inversion is a stress device, not a question — the sentence still ends with a full stop.",
            hi: "सामान्य क्रम Subject + auxiliary + main verb है। नकारात्मक या सीमित करने वाला शब्द (never, rarely, hardly, not only) वाक्य के शुरू में आए तो auxiliary कर्ता से पहले आता है: 'Never have I seen such a view।' यह विस्मयादिबोधक ज़ोर है, प्रश्न नहीं।",
          },
          examples: [
            {
              wrong: "Never I have seen such a beautiful sunset.",
              right: "Never have I seen such a beautiful sunset.",
              note: {
                bn: "never শুরুতে এলেই have কর্তার (I) সামনে চলে যাবে — এটাই inversion-এর মূল নিয়ম।",
                en: "A front-placed never forces have before the subject — that is the core inversion rule.",
                hi: "शुरुआत में never आते ही have कर्ता (I) से पहले चला जाता है — यही inversion का मूल नियम।",
              },
            },
            {
              wrong: "Rarely she misses her morning walk.",
              right: "Rarely does she miss her morning walk.",
              note: {
                bn: "present simple-এর বাক্যে কোনো auxiliary থাকে না, তাই do/does/did ডেকে আনতে হয়: does she miss।",
                en: "Present-simple sentences have no auxiliary of their own, so do/does/did must be borrowed: does she miss.",
                hi: "present simple में auxiliary नहीं होता, इसलिए do/does/did लाना पड़ता है: does she miss।",
              },
            },
            {
              wrong: "Hardly I had reached the station when the train left.",
              right: "Hardly had I reached the station when the train left.",
              note: {
                bn: "hardly ... when জুটিতে প্রথম clause-এ past perfect থাকে, আর শুরুতে hardly এলে had কর্তার সামনে।",
                en: "In the hardly ... when pair the first clause is past perfect, and a front-placed hardly puts had before the subject.",
                hi: "hardly ... when जोड़ी में पहला clause past perfect होता है, और शुरुआत में hardly हो तो had कर्ता से पहले।",
              },
            },
            {
              wrong: "Little they knew that the plan had failed.",
              right: "Little did they know that the plan had failed.",
              note: {
                bn: "little (অল্পই) নেগেটিভ আভাস দেয়, তাই did they know — এটা এক জনপ্রিয় সাহিত্যিক কাঠামো।",
                en: "'Little' is restrictive, so little did they know — a favourite literary pattern.",
                hi: "'little' सीमित करने वाला है, इसलिए little did they know — प्रिय साहित्यिक ढाँचा।",
              },
            },
            {
              wrong: "Never have I went to Cox's Bazar.",
              right: "Never have I been to Cox's Bazar.",
              note: {
                bn: "inversion হলেও মূল টেন্স বদলায় না — have-এর পরে V3 (been), V2 (went) নয়।",
                en: "Inversion changes the order, never the tense — after have comes V3 (been), not V2 (went).",
                hi: "inversion होने पर भी tense नहीं बदलता — have के बाद V3 (been), V2 (went) नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "কোন শব্দগুলো উল্টে দেয় — পূর্ণ তালিকা",
            en: "The full trigger list",
            hi: "कौन से शब्द उलट देते हैं — पूरी सूची",
          },
          body: {
            bn: "তিন পরিবারের শব্দ শুরুতে এলে inversion বাধ্যতামূলক। এক: পরিসংখ্যান-জাতীয় নেগেটিভ — never, rarely, seldom, hardly (ever), scarcely (ever), little, nowhere, at no time, in no way, under no circumstances, on no account। দুই: only-জাতীয় — only then, only after, only when, only later, only in this way, only rarely; খেয়াল রাখুন, only + সময়-বাক্যাংশ শুরুতে এলেও মূল clause-টাই উল্টে: 'Only after the rain stopped did we leave.' তিন: so/such-জাতীয় — 'So loud was the music that...' 'Such was his anger that...'। আর প্যারাগ্রাফ-জোড়ার জন্য: Not only ... but also — দুই clause জোড়ে, প্রথমটা উল্টে, দ্বিতীয়টা সাধারণ।",
            en: "Three families force inversion when fronted: (1) negative-restrictive adverbs — never, rarely, seldom, hardly, scarcely, little, nowhere, at no time, under no circumstances; (2) only-phrases — only then, only after, only when, only in this way — the MAIN clause inverts: 'Only after the rain stopped did we leave.'; (3) so/such — 'So loud was the music that...'. For paragraphs: Not only ... but also inverts the first clause only.",
            hi: "तीन परिवार inversion मजबूर करते हैं: (1) नकारात्मक क्रिया-विशेषण — never, rarely, hardly, little, under no circumstances; (2) only-वाक्यांश — only then, only after (मुख्य clause उलटता है); (3) so/such — 'So loud was the music that...'. Not only ... but also में केवल पहला clause उलटता है।",
          },
          examples: [
            {
              wrong: "Only after the meeting I understood the problem.",
              right: "Only after the meeting did I understand the problem.",
              note: {
                bn: "only + সময়-বাক্যাংশ শুরুতে থাকলে মূল clause-এ did I understand — উপবাক্য নয়, প্রধান বাক্য উল্টে।",
                en: "Only + time phrase fronts the main clause inversion: did I understand (not the subordinate clause).",
                hi: "only + समय-वाक्यांश शुरुआत में हो तो मुख्य clause उलटता है: did I understand।",
              },
            },
            {
              wrong: "Not only he lost his keys, but he also lost his phone.",
              right: "Not only had he lost his keys, but he had also lost his phone.",
              note: {
                bn: "Not only-র পরেই প্রথম clause উল্টবে: had he lost; but also-র পরে সাধারণ ক্রম।",
                en: "Not only inverts the FIRST clause: not only had he lost..., but he had also lost...",
                hi: "Not only के बाद पहला clause उलटता है: not only had he lost..., but he had also lost...",
              },
            },
            {
              wrong: "Under no circumstances you should share your PIN.",
              right: "Under no circumstances should you share your PIN.",
              note: {
                bn: "প্রি-পোজিশনাল ফ্রেজ (under no circumstances) শুরুতে এলেও auxiliary (should) কর্তার সামনে — ব্যাংক-পত্রে এই কাঠামোই দেখবেন।",
                en: "Even a fronted prepositional phrase (under no circumstances) triggers should you — the standard formal-notice pattern.",
                hi: "शुरुआत में under no circumstances जैसा वाक्यांश हो तो भी should कर्ता से पहले आता है।",
              },
            },
            {
              wrong: "So the weather was bad that we stayed home.",
              right: "So bad was the weather that we stayed home.",
              note: {
                bn: "so + বিশেষণ শুরুতে এলে বিশেষণটাও so-এর সাথে উপরে ওঠে: So bad was the weather — এই কাঠামোতে adjective-টা so-এর ঠিক পরে বসে।",
                en: "With fronted so + adjective, the adjective travels with so: So bad was the weather that...",
                hi: "so + विशेषण शुरुआत में हो तो विशेषण so के साथ ऊपर आता है: So bad was the weather that...",
              },
            },
            {
              wrong: "Nowhere I could find my passport.",
              right: "Nowhere could I find my passport.",
              note: {
                bn: "nowhere-ও নেগেটিভ পরিবারের — শুরুতে এলে could I find।",
                en: "Nowhere belongs to the negative family: nowhere could I find...",
                hi: "nowhere नकारात्मक परिवार का है: nowhere could I find...",
              },
            },
          ],
        },
        {
          heading: {
            bn: "কোন auxiliary বসবে — টেন্স অনুযায়ী বাছাই",
            en: "Choosing the right auxiliary",
            hi: "कौन सा auxiliary बैठेगा — tense के अनुसार",
          },
          body: {
            bn: "Inversion-এ auxiliary বাছাই একদম প্রশ্ন-বাক্যের মতো: বাক্যের টেন্স যা, auxiliary তাই। বর্তমান simple → do/does ('Never does he complain')। অতীত simple → did ('Never did he complain')। present perfect → have/has ('Rarely has she smiled')। past perfect → had ('Hardly had we begun')। be-verb থাকলে be-ই উঠে আসে ('Never was he aware')। modal থাকলে modal-ই ('Under no circumstances must you panic')। সবচেয়ে কমন ভুল: টেন্স অতীত কিন্তু auxiliary বর্তমান — 'Rarely has he came' (ভুল) → 'Rarely has he come' (শুদ্ধ)।",
            en: "Pick the auxiliary exactly as in a question: present simple → do/does; past simple → did; present perfect → have/has; past perfect → had; be → be-form; modal → modal. The classic error is a tense mismatch: 'Rarely has he came' → 'Rarely has he come'.",
            hi: "auxiliary चुनना प्रश्न-वाक्य जैसा ही है: present simple → do/does; past simple → did; present perfect → have/has; past perfect → had। सबसे आम गलती tense का बेमेल है: 'Rarely has he came' → 'Rarely has he come'।",
          },
          examples: [
            {
              wrong: "Seldom he is late for class.",
              right: "Seldom is he late for class.",
              note: {
                bn: "be-verb নিজেই auxiliary-এর কাজ করে — is সরাসরি কর্তার সামনে, নতুন do লাগে না।",
                en: "Be is its own auxiliary — is moves in front, no extra do needed.",
                hi: "be-verb स्वयं auxiliary का काम करता है — is सीधे कर्ता से पहले, do की ज़रूरत नहीं।",
              },
            },
            {
              wrong: "Rarely has he came on time.",
              right: "Rarely has he come on time.",
              note: {
                bn: "has থাকলে মূল ক্রিয়া V3 (come) — অতীত রূপ (came) has-এর সাথে কখনো যায় না।",
                en: "With has, the main verb stays V3 (come) — V2 (came) never pairs with has.",
                hi: "has के साथ मुख्य क्रिया V3 (come) — V2 (came) has के साथ कभी नहीं जाता।",
              },
            },
            {
              wrong: "Never did she knew the answer.",
              right: "Never did she know the answer.",
              note: {
                bn: "did বসলে মূল ক্রিয়া মূল রূপে (know) ফিরে আসে — did-এর অতীত ভার তখন did-ই বহন করে।",
                en: "After did, the main verb returns to base form (know) — did carries the past all by itself.",
                hi: "did के बाद मुख्य क्रिया मूल रूप में (know) — did अकेला ही भूतकाल वहन करता है।",
              },
            },
            {
              wrong: "Hardly had we started than it began to rain.",
              right: "Hardly had we started when it began to rain.",
              note: {
                bn: "hardly-র জুটি when; than-এর জুটি no sooner: 'No sooner had we started than it began to rain.' দুই জুটি গুলিয়ে ফেলবেন না।",
                en: "Hardly pairs with when; than pairs with no sooner: 'No sooner had we started than...'. Keep the pairs straight.",
                hi: "hardly की जोड़ी when है; than की जोड़ी no sooner से है। दोनों जोड़ियाँ न मिलाएँ।",
              },
            },
            {
              wrong: "No sooner we had sat down than the phone rang.",
              right: "No sooner had we sat down than the phone rang.",
              note: {
                bn: "no sooner-ও শুরুতে এলে উল্টে: had we sat down ... than। পরের অংশে than + অতীত simple।",
                en: "Fronted no sooner also inverts: no sooner had we sat down than... (than + past simple).",
                hi: "शुरुआत में no sooner हो तो भी उलटता है: no sooner had we sat down than... (than + भूतकाल)।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "কোথায় ইনভার্শন করবেন না — নিষেধের সীমানা",
            en: "Where inversion is wrong",
            hi: "कहाँ inversion ग़लत है",
          },
          body: {
            bn: "প্রতিটি 'শুরুতে নেগেটিভ' বাক্য উল্টে যায় না। নিয়মটা মনে রাখুন: উল্টানো হয় শুধু যখন নেগেটিভ শব্দটা পুরো clause-কে modify করে। কিন্তু subject-এর অংশ হিসেবে নেগেটিভ এলে ('Nobody came', 'Nothing happened') সাধারণ ক্রমেই থাকে — 'Nobody did come' ভুল। একইভাবে not-এর সাধারণ অবস্থান ('I do not like it') কখনো উল্টায় না। আর everyday কথায় inversion বিরল — এটা লেখা, বক্তৃতা, formal notice-এর অস্ত্র; চায়ের দোকানে 'Rarely do I drink tea' বললে বরং অস্বাভাবিক শোনাবে — সেখানে 'I rarely drink tea' বলুন।",
            en: "Not every fronted negative inverts. Inversion applies when the adverb modifies the whole clause. Negatives inside the subject (Nobody came, Nothing happened) keep normal order — 'Nobody did come' is wrong. And inversion belongs to writing, speeches and formal notices; in casual speech 'I rarely drink tea' beats 'Rarely do I drink tea'.",
            hi: "हर शुरुआती नकारात्मक वाक्य नहीं उलटता। inversion तभी जब क्रिया-विशेषण पूरे clause को modify करे। कर्ता के भाग के रूप में (Nobody came) सामान्य क्रम रहता है। और रोज़मर्रा बोलचाल में 'I rarely drink tea' ही बेहतर है।",
          },
          examples: [
            {
              wrong: "Nobody did come to the meeting.",
              right: "Nobody came to the meeting.",
              note: {
                bn: "Nobody/Nothing/No one কর্তার জায়গায় থাকলে বাক্য উল্টে না — সাধারণ ক্রমই শুদ্ধ।",
                en: "Negatives as the subject (Nobody/Nothing/No one) never invert — plain order is correct.",
                hi: "कर्ता के रूप में Nobody/Nothing आए तो वाक्य नहीं उलटता — सामान्य क्रम सही।",
              },
            },
            {
              wrong: "Never I like coffee. (everyday chat)",
              right: "I never like coffee. (everyday chat) / Never have I liked coffee. (formal)",
              note: {
                bn: "সাধারণ কথাবার্তায় সাধারণ ক্রমই স্বাভাবিক; inversion বেছে নিলে বক্তব্য নাটকীয়/আনুষ্ঠানিক হয়ে যায় — প্রসঙ্গ বেছে নিন।",
                en: "In casual talk the plain order is natural; choosing inversion makes it theatrical/formal — pick by context.",
                hi: "आम बातचीत में सामान्य क्रम ही स्वाभाविक है; inversion चुनने से भाषा औपचारिक हो जाती है।",
              },
            },
            {
              wrong: "I never have seen this movie, never have I.",
              right: "I have never seen this movie.",
              note: {
                bn: "have-এর পরে never-ই স্বাভাবিক জায়গা; দুইবার never/inversion জুড়লে বাক্য ভারী ও ভুল হয়।",
                en: "Mid-position never (have never seen) is the normal choice; stacking double inversion muddles the sentence.",
                hi: "have never seen (मध्य स्थिति) ही सामान्य है; दोहरा inversion वाक्य बिगाड़ देता है।",
              },
            },
            {
              wrong: "Only in Dhaka you can find this street food.",
              right: "Only in Dhaka can you find this street food.",
              note: {
                bn: "only + স্থান-বাক্যাংশও উল্টায়: can you find। 'you can find' রাখলে জোরটাই হারিয়ে যায়।",
                en: "Only + place phrase also inverts: only in Dhaka can you find...",
                hi: "only + स्थान-वाक्यांश भी उलटता है: only in Dhaka can you find...",
              },
            },
            {
              wrong: "Never he told me about it. (in writing, aiming at emphasis)",
              right: "Never did he tell me about it.",
              note: {
                bn: "অতীত simple + শুরুতে never = did he tell; খালি 'Never he told' লিখলে নিয়ম ভাঙে — পরীক্ষা/লেখায় নাম্বার কাটে।",
                en: "Past simple + fronted never = never did he tell; 'Never he told' breaks the rule and costs marks in exams.",
                hi: "भूतकाल + शुरुआत में never = never did he tell; 'Never he told' नियम तोड़ता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "লেখায় ব্যবহার — কবে ঝকঝকে লাগে",
            en: "Using inversion in real writing",
            hi: "लेखन में प्रयोग — कब चमकता है",
          },
          body: {
            bn: "Inversion-এর সবচেয়ে সুন্দর ব্যবহার তিন জায়গায়: (১) রচনা/প্রবন্ধের শুরু — 'Never before have students had so much free content.' প্যারার প্রথম বাক্যে বসলে পুরো প্যারা গুরুত্বপূর্ণ হয়ে ওঠে। (২) বক্তৃতার শেষ-জোর — 'Not only will this save time, but it will also save money.' (৩) আনুষ্ঠানিক নোটিশ — 'Under no circumstances is smoking allowed.' মনে রাখুন, প্যারা-প্রতি একটার বেশি inversion দিলে লেখা ভারী লাগে — এটা মসলার মতো: অল্পে ঝোল।",
            en: "Inversion shines in three places: (1) essay openings — 'Never before have students had so much free content.'; (2) speech closers — 'Not only will this save time, but it will also save money.'; (3) formal notices — 'Under no circumstances is smoking allowed.' Use it sparingly — at most once per paragraph.",
            hi: "inversion तीन जगह चमकता है: (1) निबंध की शुरुआत, (2) भाषण का समापन, (3) औपचारिक सूचना। संयम से प्रयोग करें — हर अनुच्छेद में अधिकतम एक बार।",
          },
          examples: [
            {
              wrong: "Inversion is useful. It is useful for essays. It is useful for speeches.",
              right: "Not only is inversion useful in essays, but it also shines in speeches.",
              note: {
                bn: "তিন ছোট বাক্য এক Not only ... but also-তে গুটিয়ে গাম্ভীর্য বেড়েছে — আর প্রথম clause উল্টে গেছে (is inversion useful)।",
                en: "Three choppy sentences fold into one not only ... but also — with the first clause inverted (is inversion useful).",
                hi: "तीन छोटे वाक्य एक not only ... but also में सिमट गए — पहला clause उलटा (is inversion useful)।",
              },
            },
            {
              wrong: "Only when you practice every day, fluency comes.",
              right: "Only when you practice every day does fluency come.",
              note: {
                bn: "only-উপবাক্যের পরে মূল বাক্য উল্টে: does fluency come — এই কাঠামো উপদেশমূলক লেখায় দুর্দান্ত।",
                en: "After an only-clause the main clause inverts: only when you practice every day does fluency come.",
                hi: "only-उपवाक्य के बाद मुख्य वाक्य उलटता है: does fluency come।",
              },
            },
            {
              wrong: "Rarely we see such dedication in new learners.",
              right: "Rarely do we see such dedication in new learners.",
              note: {
                bn: "শিক্ষক/সম্পাদকীয় সুরের বাক্য — rarely + do we see: প্রশংসাকে ওজনদার করে।",
                en: "An editorial tone: rarely do we see... gives the praise real weight.",
                hi: "संपादकीय सुर: rarely do we see... प्रशंसा को वज़न देता है।",
              },
            },
            {
              wrong: "Hardly the show started when the power went out.",
              right: "Hardly had the show started when the power went out.",
              note: {
                bn: "hardly-ক্লজে past perfect (had started) + পরের ক্লজে অতীত simple (went out) — সময়ের স্তরমিল জরুরি।",
                en: "The hardly-clause takes past perfect (had started) and the when-clause past simple (went out).",
                hi: "hardly-वाक्यांश में past perfect (had started) और when-वाक्यांश में भूतकाल (went out)।",
              },
            },
            {
              wrong: "So beautiful the place was that everyone took photos.",
              right: "So beautiful was the place that everyone took photos.",
              note: {
                bn: "so + adjective-কাঠামোয় adjective সবার আগে, তারপর verb, তারপর কর্তা — একবার মুখস্থ করলেই নমুনা চোখে পড়বে।",
                en: "In the so + adjective pattern the order is adjective + verb + subject: so beautiful was the place that...",
                hi: "so + विशेषण ढाँचे में क्रम: विशेषण + क्रिया + कर्ता — so beautiful was the place that...",
              },
            },
          ],
        },
        {
          heading: {
            bn: "বাঙালি শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "Subtle mistakes Bengali speakers make",
            hi: "बांग्लाभाषी शिक्षार्थियों की सूक्ष्म गलतियाँ",
          },
          body: {
            bn: "চারটা প্যাটার্ন বারবার ফিরে আসে। এক: উল্টানো ভুলে অর্ধেক উল্টানো — 'Never did I went' (did বসিয়েও ক্রিয়া অতীত রেখে দেওয়া)। দুই: প্রশ্ন-সুর দিয়ে শেষ করা — উল্টানো বাক্য বিবৃতি, শেষে ডট বসবে, '?' নয়। তিন: কর্তার সাথে মিল ভাঙা — 'Rarely do he come' নয়, 'Rarely does he come'। চার: Not only-র পরে উপবাক্য না উল্টে পুরো বাক্য একরকম রেখে দেওয়া। প্রতিটা ভুল ঠিক করার একটাই মন্ত্র: প্রথমে সাধারণ বাক্যটা শুদ্ধভাবে ভাবুন (I have never seen), তারপর শুধু ক্রমটা উল্টে দিন (Never have I seen) — টেন্স, ক্রিয়ারূপ, সব অপরিবর্তিত।",
            en: "Four patterns recur: half-inversion ('Never did I went'), a question mark on a statement, agreement slips ('Rarely do he come'), and forgetting that Not only inverts its own clause. One mantra fixes all: build the plain sentence first (I have never seen), then swap the order (Never have I seen) — nothing else changes.",
            hi: "चार पैटर्न बार-बार आते हैं: अधूरा inversion ('Never did I went'), बयान पर प्रश्नचिह्न, agreement की चूक ('Rarely do he come'), और Not only में उलटना भूलना। मंत्र एक: पहले सामान्य वाक्य बनाएँ, फिर केवल क्रम बदलें।",
          },
          examples: [
            {
              wrong: "Never did I went there alone.",
              right: "Never did I go there alone.",
              note: {
                bn: "did-এর ভিতরেই অতীত লুকানো — did বসলে go মূল রূপে; 'went' লিখলে দ্বিগুণ অতীত হয়ে যায়।",
                en: "did already carries the past — after did the verb goes back to go; writing went doubles the past.",
                hi: "did में ही भूतकाल छिपा है — did के बाद go; 'went' लिखने से दोहरा भूतकाल हो जाता है।",
              },
            },
            {
              wrong: "Never have I seen such chaos?",
              right: "Never have I seen such chaos.",
              note: {
                bn: "উল্টানো বাক্যের অভিব্যক্তি নাটকীয় হলেও তা প্রশ্ন নয় — শেষে পূর্ণচ্ছেদ।",
                en: "Dramatic as it sounds, inverted sentences are statements — end with a full stop.",
                hi: "नाटकीय लगे, पर उलटे वाक्य कथन हैं — अंत में पूर्णविराम।",
              },
            },
            {
              wrong: "Rarely do he admit his mistakes.",
              right: "Rarely does he admit his mistakes.",
              note: {
                bn: "কর্তা he → does; উল্টে গেলেও কর্তা-ক্রিয়ার মিল অটুট থাকে।",
                en: "Subject he takes does — agreement survives inversion.",
                hi: "कर्ता he के लिए does — उलटने पर भी agreement बना रहता है।",
              },
            },
            {
              wrong: "Not only she sings well, but she dances also.",
              right: "Not only does she sing well, but she also dances beautifully.",
              note: {
                bn: "Not only-র পরে does she sing (উল্টানো + মূল রূপ); but also-র ভিতরে also-এর অবস্থান subject-এর পরে।",
                en: "Not only does she sing..., but she also dances... — first clause inverted, also tucked after the subject.",
                hi: "Not only does she sing..., but she also dances... — पहला clause उलटा, also कर्ता के बाद।",
              },
            },
            {
              wrong: "Never in my life I forget this day.",
              right: "Never in my life will I forget this day.",
              note: {
                bn: "ভবিষ্যৎ অর্থ বোঝাতে will I forget — 'in my life' যোগ হলেও inversion-এর নিয়ম একই।",
                en: "For future meaning use will I forget — the addition of 'in my life' does not change the rule.",
                hi: "भविष्यत् अर्थ के लिए will I forget — 'in my life' जोड़ने से नियम नहीं बदलता।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "ছোট লেখায় দেখা যাক",
            en: "A short passage",
            hi: "छोटे लेख में देखें",
          },
          body: {
            bn: "নিচের প্যারাটা পড়ুন — তিনটি ইনভার্শন বাক্যকে খেয়াল করুন, আর দেখুন কীভাবে তা লেখাকে ওজনদার করে: 'Never have our streets been this crowded. Rarely does a city grow so fast that its people cannot keep pace. Not only is the population rising, but the jobs are also changing shape. Only when we plan ahead can we turn this rush into progress.' দেখুন — প্রতিটি উল্টানো বাক্যই একটা বড় দাবি শুরু করছে; এটাই inversion-এর আসল কাজ।",
            en: "Read this paragraph and watch three inversions carry its weight: 'Never have our streets been this crowded. Rarely does a city grow so fast that its people cannot keep pace. Not only is the population rising, but the jobs are also changing shape. Only when we plan ahead can we turn this rush into progress.' Each inversion opens a big claim — that is its real job.",
            hi: "इस अनुच्छेद को पढ़ें — तीन inversions इसका वज़न उठा रहे हैं: 'Never have our streets been this crowded...' हर inversion एक बड़ा दावा शुरू करता है — यही इसका असली काम है।",
          },
          examples: [
            {
              wrong: "Our streets have never been this crowded. (in an essay opening, wanting punch)",
              right: "Never have our streets been this crowded.",
              note: {
                bn: "রচনার শুরুতে একই কথার inversion-রূপটাই পাঞ্চ দেয় — প্রথম বাক্যে ব্যবহারের সেরা জায়গা।",
                en: "In an essay opening the inverted twin of the same sentence delivers the punch — the best spot for it.",
                hi: "निबंध की शुरुआत में उसी वाक्य का inversion रूप ही ज़ोर देता है — सबसे अच्छी जगह।",
              },
            },
            {
              wrong: "Only when we plan ahead, we turn this rush into progress.",
              right: "Only when we plan ahead can we turn this rush into progress.",
              note: {
                bn: "only-ক্লজের পরে can we — এই ছোট উল্টোটাই উপদেশটাকে দর্শনে বদলে দেয়।",
                en: "After the only-clause comes can we — that small flip turns advice into principle.",
                hi: "only-वाक्यांश के बाद can we — यह छोटा उलटाव सलाह को सिद्धांत बना देता है।",
              },
            },
            {
              wrong: "Not only the population is rising.",
              right: "Not only is the population rising, but the jobs are also changing shape.",
              note: {
                bn: "Not only কখনো একা থাকে না — জুটি but also; প্রথম অংশ উল্টে, দ্বিতীয় অংশ সাধারণ।",
                en: "Not only never travels alone — pair it with but also; invert the first part, keep the second plain.",
                hi: "Not only कभी अकेला नहीं आता — but also के साथ; पहला भाग उलटा, दूसरा सामान्य।",
              },
            },
            {
              wrong: "Rarely a city grows so fast. (essay tone)",
              right: "Rarely does a city grow so fast that its people cannot keep pace.",
              note: {
                bn: "rarely + does + মূল রূপ; সাথে so ... that-ক্লজ যোগ করলে বাক্য পূর্ণ যুক্তি হয়।",
                en: "rarely + does + base form; adding a so ... that clause completes the argument.",
                hi: "rarely + does + मूल रूप; so ... that वाक्यांश जोड़ने से तर्क पूरा होता है।",
              },
            },
            {
              wrong: "Never have our streets been so crowd.",
              right: "Never have our streets been so crowded.",
              note: {
                bn: "be-verb-এর পরে বিশেষণ (crowded) — বিশেষ্য (crowd) নয়; inversion নয়, এটা শব্দ-বাছাইয়ের ভুল।",
                en: "After be comes the adjective (crowded), not the noun (crowd) — a word-choice slip, not an inversion one.",
                hi: "be के बाद विशेषण (crowded), संज्ञा (crowd) नहीं — यह शब्द-चयन की गलती है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "এক নজরে",
            en: "At a glance",
            hi: "एक नज़र में",
          },
          body: {
            bn: "মনে রাখার তালিকা: (১) শুরুতে নেগেটিভ/সীমাবদ্ধকারী (never, rarely, hardly, little, nowhere, under no circumstances, no sooner, not only, only + ফ্রেজ, so + adjective) → auxiliary কর্তার সামনে। (২) auxiliary বাছাই = প্রশ্নের auxiliary: do/does/did, have/has/had, be, modal। (৩) did বসলে মূল ক্রিয়া মূল রূপে। (৪) শেষে ডট, প্রশ্নবোধক নয়। (৫) কর্তা-ক্রিয়ার মিল অটুট। (৬) কর্তা-রূপে নেগেটিভ (Nobody came) উল্টে না। (৭) প্যারা-প্রতি সর্বোচ্চ একটি — মসলার মতো। অনুশীলনের সূত্র: সাধারণ বাক্য ভাবুন → ক্রম উল্টে দিন → বাকি সব একই রাখুন।",
            en: "Keep-list: (1) fronted negatives/restrictives force the auxiliary before the subject; (2) choose the auxiliary as in a question; (3) after did the verb goes base-form; (4) full stop, not a question mark; (5) agreement survives; (6) subject-negatives (Nobody came) never invert; (7) at most one per paragraph. Drill: plain sentence → swap order → change nothing else.",
            hi: "सूची: (1) शुरुआती नकारात्मक शब्द auxiliary को कर्ता से पहले ले जाते हैं; (2) auxiliary वही जो प्रश्न में; (3) did के बाद मूल रूप; (4) पूर्णविराम; (5) agreement बना रहे; (6) कर्ता-रूप नकारात्मक नहीं उलटता; (7) प्रति अनुच्छेद अधिकतम एक। अभ्यास: सामान्य वाक्य → क्रम बदलें → और कुछ नहीं।",
          },
          examples: [
            {
              wrong: "Hardly I know what to say. (present meaning)",
              right: "Hardly do I know what to say.",
              note: {
                bn: "বর্তমান অর্থে do I know; অতীত অর্থ হলে did I know — অর্থের সময় আগে ঠিক করুন, পরে উল্টান।",
                en: "Present meaning takes do I know; past meaning did I know — fix the time first, then invert.",
                hi: "वर्तमान अर्थ के लिए do I know; भूतकाल के लिए did I know — पहले समय तय करें, फिर उलटें।",
              },
            },
            {
              wrong: "Only later I realized my mistake.",
              right: "Only later did I realize my mistake.",
              note: {
                bn: "only later-ও উল্টায় — এই ছোট বাক্যটা গল্প-লেখায় খুব কাজে লাগে।",
                en: "Only later also inverts — a tiny pattern that does a lot of work in storytelling.",
                hi: "only later भी उलटता है — कहानी-लेखन में बहुत काम आने वाला छोटा ढाँचा।",
              },
            },
            {
              wrong: "Such the situation was that we called the police.",
              right: "Such was the situation that we called the police.",
              note: {
                bn: "such-কাঠামো: Such + was/were + কর্তা + that ... — such সবার আগে, তারপর ক্রিয়া।",
                en: "The such-pattern: Such + was/were + subject + that ... — such leads, verb follows.",
                hi: "such-ढाँचा: Such + was/were + कर्ता + that ... — such पहले, फिर क्रिया।",
              },
            },
            {
              wrong: "Never I had imagined such hospitality. (intended: past perfect inversion)",
              right: "Never had I imagined such hospitality.",
              note: {
                bn: "past perfect হলে had সামনে — Never had I imagined; উল্টানোর সময় had-কে পেছনে ফেলে দেবেন না।",
                en: "With past perfect, had moves up: never had I imagined — don't leave had behind when you invert.",
                hi: "past perfect में had आगे आता है: never had I imagined — उलटते समय had पीछे न छोड़ें।",
              },
            },
            {
              wrong: "On no account you must open the door. (notice tone)",
              right: "On no account must you open the door.",
              note: {
                bn: "আনুষ্ঠানিক নোটিশে on no account + must you — নিরাপত্তা-নির্দেশে এই কাঠামোই প্রচলিত।",
                en: "Formal notices use on no account + must you — the standard safety-instruction frame.",
                hi: "औपचारिक सूचना में on no account + must you — सुरक्षा-निर्देश का मानक ढाँचा।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "সূত্র: প্রথমে সাধারণ বাক্য শুদ্ধ করুন, তারপর শুধু auxiliary-কে কর্তার সামনে আনুন — টেন্স/ক্রিয়ারূপ বদলাবেন না।",
          en: "Mantra: build the plain correct sentence first, then only move the auxiliary in front of the subject — never touch tense or verb form.",
          hi: "मंत्र: पहले सामान्य सही वाक्य बनाएँ, फिर केवल auxiliary कर्ता से पहले लाएँ — tense/क्रिया रूप न बदलें।",
        },
        {
          bn: "ট্রিগার-তালিকা মুখস্থ করুন: never, rarely, seldom, hardly, scarcely, little, nowhere, no sooner, not only, under no circumstances, only + ফ্রেজ, so + adjective, such।",
          en: "Memorise the trigger list: never, rarely, seldom, hardly, scarcely, little, nowhere, no sooner, not only, under no circumstances, only + phrase, so + adjective, such.",
          hi: "ट्रिगर सूची याद करें: never, rarely, seldom, hardly, little, nowhere, no sooner, not only, under no circumstances, only + वाक्यांश, so + विशेषण, such।",
        },
        {
          bn: "present/past simple-এ নিজস্ব auxiliary নেই — তাই do/does/did আনতেই হয়, আর did-এর পরে ক্রিয়া মূল রূপে।",
          en: "Simple tenses carry no auxiliary, so borrow do/does/did — and after did the verb returns to base form.",
          hi: "simple tense में auxiliary नहीं होता — do/does/did लाएँ, और did के बाद क्रिया मूल रूप में।",
        },
        {
          bn: "hardly ... when, no sooner ... than — দুই জুটি আলাদা; মেশাবেন না।",
          en: "hardly ... when and no sooner ... than are separate pairs — never mix them.",
          hi: "hardly ... when और no sooner ... than अलग जोड़ियाँ हैं — न मिलाएँ।",
        },
        {
          bn: "Not only-এর পরে অবশ্যই but also/…but … as well — একা ছেড়ে দেবেন না।",
          en: "Always complete not only with but also (or ... but ... as well) — never leave it stranded.",
          hi: "not only के साथ हमेशा but also पूरा करें — अकेला न छोड़ें।",
        },
        {
          bn: "উল্টানো বাক্য বিবৃতি — শেষে পূর্ণচ্ছেদ; সুর নাটকীয় হলেও '?' বসবে না।",
          en: "Inverted sentences are statements — full stop at the end, never a question mark however dramatic the tone.",
          hi: "उलटे वाक्य कथन हैं — अंत में पूर्णविराम, प्रश्नचिह्न नहीं।",
        },
        {
          bn: "কর্তার জায়গায় নেগেটিভ (Nobody, Nothing) এলে সাধারণ ক্রমই — উল্টাবেন না।",
          en: "Negatives in subject position (Nobody, Nothing) keep normal order — do not invert.",
          hi: "कर्ता की जगह नकारात्मक (Nobody, Nothing) हो तो सामान्य क्रम — उलटें नहीं।",
        },
        {
          bn: "কথায় কথায় inversion নয় — রচনা, বক্তৃতা, নোটিশ, গল্পের নাটকীয় মুহূর্তে ব্যবহার করুন।",
          en: "Skip inversion in casual chat — reserve it for essays, speeches, notices and dramatic story moments.",
          hi: "आम बातचीत में inversion नहीं — निबंध, भाषण, सूचना और कहानी के नाटकीय क्षणों में प्रयोग करें।",
        },
        {
          bn: "প্যারা-প্রতি একটির বেশি inversion লেখা ভারী করে — মসলার মতো সামান্য দিন।",
          en: "More than one inversion per paragraph weighs the writing down — use it like spice.",
          hi: "प्रति अनुच्छेद एक से अधिक inversion लेखन भारी कर देता है — मसाले की तरह थोड़ा।",
        },
        {
          bn: "পরীক্ষায় inversion-বাক্য লিখলে দ্বিগুণ যাচাই করুন: auxiliary ঠিক? ক্রিয়ার রূপ ঠিক? মিল ঠিক?",
          en: "In exams, double-check every inversion: right auxiliary? right verb form? right agreement?",
          hi: "परीक्षा में inversion लिखें तो दो बार जाँचें: auxiliary सही? क्रिया रूप सही? agreement सही?",
        },
      ],
      quiz: [
        {
          question: "Never ___ such a mess in this office.",
          options: ["I have seen", "have I seen", "I saw", "did I saw"],
          answer: 1,
          explanation: {
            bn: "শুরুতে never এলে have কর্তার সামনে: Never have I seen।",
            en: "A fronted never puts have before the subject: Never have I seen.",
            hi: "शुरुआत में never हो तो have कर्ता से पहले: Never have I seen।",
          },
        },
        {
          question: "Rarely ___ his homework on time.",
          options: ["he does", "does he do", "he does do", "does he"],
          answer: 1,
          explanation: {
            bn: "present simple-এ does he do — do/does এনে উল্টাতে হয়, মূল ক্রিয়া মূল রূপে।",
            en: "Present simple needs borrowed does: does he do (base form).",
            hi: "present simple में does लाकर उलटें: does he do (मूल रूप)।",
          },
        },
        {
          question: "No sooner ___ the exam than the fire alarm rang.",
          options: ["we had finished", "had we finished", "we finished", "did we finished"],
          answer: 1,
          explanation: {
            bn: "no sooner শুরুতে এলে had সামনে: No sooner had we finished ... than।",
            en: "Fronted no sooner lifts had: No sooner had we finished ... than.",
            hi: "शुरुआत में no sooner हो तो had आगे: No sooner had we finished ... than।",
          },
        },
        {
          question: "Under no circumstances ___ your password.",
          options: ["you must share", "must you share", "you should share", "must you to share"],
          answer: 1,
          explanation: {
            bn: "on/under no circumstances + must you — নোটিশ-সুরের মানক কাঠামো।",
            en: "On/under no circumstances + must you — the standard notice frame.",
            hi: "on/under no circumstances + must you — सूचना का मानक ढाँचा।",
          },
        },
        {
          question: "Not only ___ the tickets, but she also booked the hotel.",
          options: ["she bought", "did she buy", "she did buy", "bought she"],
          answer: 1,
          explanation: {
            bn: "Not only-র পরে প্রথম clause উল্টে: did she buy; but also-র পরে সাধারণ।",
            en: "Not only inverts the first clause: did she buy; the second stays plain.",
            hi: "Not only के बाद पहला clause उलटता है: did she buy; दूसरा सामान्य।",
          },
        },
        {
          question: "Little ___ that the interview was cancelled.",
          options: ["we knew", "did we know", "we did know", "knew we"],
          answer: 1,
          explanation: {
            bn: "little (অল্পই) শুরুতে এলে did we know — বহুল ব্যবহৃত সাহিত্যিক কাঠামো।",
            en: "Fronted little takes did we know — a classic literary frame.",
            hi: "शुरुआत में little हो तो did we know — प्रसिद्ध साहित्यिक ढाँचा।",
          },
        },
        {
          question: "So loud ___ that neighbours complained.",
          options: ["the music was", "was the music", "the music is", "is the music"],
          answer: 1,
          explanation: {
            bn: "so + adjective শুরুতে: So loud was the music that ... — অতীত বলে was।",
            en: "so + adjective fronts as: So loud was the music that ... (past → was).",
            hi: "so + विशेषण शुरुआत में: So loud was the music that ... (भूतकाल → was)।",
          },
        },
        {
          question: "Hardly ___ when it started to rain.",
          options: ["we had left", "had we left", "we left", "did we left"],
          answer: 1,
          explanation: {
            bn: "hardly ... when-জুটিতে প্রথম ক্লজ past perfect + উল্টানো: had we left।",
            en: "In hardly ... when the first clause is past perfect and inverted: had we left.",
            hi: "hardly ... when में पहला clause past perfect और उलटा: had we left।",
          },
        },
        {
          question: "Only after midnight ___ allowed to enter.",
          options: ["we were", "were we", "we are", "did we"],
          answer: 1,
          explanation: {
            bn: "only + সময়-ফ্রেজের পরে মূল ক্লজ উল্টে: were we allowed (be-verb নিজেই উঠে আসে)।",
            en: "After only + time phrase the main clause inverts: were we allowed (be moves itself).",
            hi: "only + समय-वाक्यांश के बाद मुख्य वाक्य उलटता है: were we allowed (be स्वयं आगे)।",
          },
        },
        {
          question: "Choose the CORRECT sentence.",
          options: [
            "Never I have felt so proud.",
            "Never have I felt so proud.",
            "Never did I felt so proud.",
            "Never I felt so proud.",
          ],
          answer: 1,
          explanation: {
            bn: "Never have I felt — auxiliary সামনে, মূল ক্রিয়া V3 (felt); বাকিগুলো ক্রম বা রূপে ভুল।",
            en: "Never have I felt — auxiliary fronted, main verb V3 (felt); the others break order or form.",
            hi: "Never have I felt — auxiliary आगे, मुख्य क्रिया V3 (felt); बाकी क्रम या रूप में ग़लत।",
          },
        },
      ],
    },
  },

  /* ── 2. Mixed & Inverted Conditionals ─────────────────────────────── */
  {
    topic: "Mixed & Inverted Conditionals",
    level: "advanced",
    title: "Mixed & Inverted Conditionals",
    unit: 0,
    data: {
      title: {
        bn: "মিক্সড ও ইনভার্টেড কন্ডিশনাল (উচ্চ স্তর)",
        en: "Mixed & Inverted Conditionals (Advanced)",
        hi: "मिक्स्ड और इनवर्टेड कंडीशनल (उच्च स्तर)",
      },
      intro: {
        bn: "সাধারণ কন্ডিশনালে if-ক্লজ আর মূল ক্লজ একই সময়ের কথা বলে। কিন্তু জীবন তো এমন নয় — অতীতের এক ভুল আজকের বাস্তবতা বদলে দিয়েছে: 'If I had studied medicine, I would be a doctor now.' এই অতীত-বর্তমান মেশানো কাঠামোই mixed conditional। আর if বাদ দিয়ে Had I known... দিয়ে শুরু করা সূক্ষ্ম, আনুষ্ঠানিক রূপটা inverted conditional। দুটোই C1 লেখার প্রাণ — প্রবন্ধ, সাক্ষাৎকার, পরীক্ষার রচনায় এগুলো থাকলে ভাষা একবারে পরিণত শোনায়। আগের পাঠ (Conditionals, Inversion) এখানে ভিত্তি।",
        en: "In ordinary conditionals both clauses live in the same time. Life is messier: one past mistake shapes today — 'If I had studied medicine, I would be a doctor now.' That past-to-present blend is the mixed conditional, and dropping if for 'Had I known...' gives the inverted conditional. Both are the heart of C1 writing. They build on the Conditionals and Inversion lessons.",
        hi: "सामान्य कंडीशनल में दोनों clauses एक ही समय में रहते हैं। ज़िंदगी उलटी है: एक भूतकाल की गलती आज की वास्तविकता बदल देती है — 'If I had studied medicine, I would be a doctor now।' यही mixed conditional है, और if हटाकर 'Had I known...' बनाना inverted conditional। दोनों C1 लेखन का हृदय हैं।",
      },
      sections: [
        {
          heading: {
            bn: "সময়রেখা আগে, বাক্য পরে",
            en: "Timeline first, sentence second",
            hi: "पहले समय-रेखा, फिर वाक्य",
          },
          body: {
            bn: "Mixed conditional-এর সব রহস্য এক জায়গায়: দুই clause-এর সময় আলাদা। প্রশ্ন করুন — if-ক্লজের ঘটনাটা কোন সময়ের? মূল ক্লজের ফলটা কোন সময়ের? উত্তরের সময় মিললে সাধারণ conditional (দুই অতীত হলে Type 3, দুই বর্তমান হলে Type 2)। সময় না মিললে mixed: (ক) অতীতের শর্ত → বর্তমানের ফল: If + past perfect, would + V1 + now। (খ) বর্তমানের শর্ত → অতীতের ফল: If + past simple, would have + V3। বাক্য লেখার আগে খাতায় সময়রেখা টানুন — অতীত-বর্তমান ভুলের ৯০% ওখানেই ধরা পড়ে।",
            en: "The whole secret of mixed conditionals is that the two clauses live in different times. Ask: when is the if-event? when is the result? Same time → ordinary conditional. Different times → mixed: (a) past condition → present result: If + past perfect, would + V1 + now; (b) present condition → past result: If + past simple, would have + V3. Sketch the timeline before writing — most errors die there.",
            hi: "mixed conditional का पूरा रहस्य: दोनों clauses अलग समय में हैं। पूछें — if-घटना कब की? परिणाम कब का? समय एक हो तो सामान्य conditional; अलग हो तो mixed: (a) भूतकाल की शर्त → वर्तमान परिणाम; (b) वर्तमान शर्त → भूतकाल परिणाम। लिखने से पहले समय-रेखा बनाएँ।",
          },
          examples: [
            {
              wrong: "If I had taken that job, I would have been rich now.",
              right: "If I had taken that job, I would be rich now.",
              note: {
                bn: "now শব্দটাই সংকেত — ফলটা বর্তমানে, তাই would be; would have been মানে ফলও অতীতে, যা now-এর সাথে লড়াই করে।",
                en: "The word now is the signal — the result is present, so would be; would have been puts the result in the past, clashing with now.",
                hi: "now शब्द ही संकेत है — परिणाम वर्तमान में है, इसलिए would be; would have been परिणाम को भूतकाल में धकेल देगा।",
              },
            },
            {
              wrong: "If she is taller, she would have joined the team.",
              right: "If she were taller, she would have joined the team.",
              note: {
                bn: "উল্টো মিশ্রণ: শর্ত বর্তমানে (were), ফল অতীতে (would have joined) — বাস্কেটবল ট্রায়াল গতকাল ছিল।",
                en: "The reverse blend: present condition (were), past result (would have joined) — the trial happened yesterday.",
                hi: "उलटा मिश्रण: वर्तमान शर्त (were), भूतकाल परिणाम (would have joined) — ट्रायल कल था।",
              },
            },
            {
              wrong: "If I had studied medicine, I will be a doctor now.",
              right: "If I had studied medicine, I would be a doctor now.",
              note: {
                bn: "অতীত-শর্তের বাক্যে মূল ক্লজে will আসে না — would/be-ই বর্তমান ফলের যান।",
                en: "A past-condition sentence never takes will in the main clause — would/be carries the present result.",
                hi: "भूतकाल-शर्त वाक्य में मुख्य clause में will नहीं आता — would/be ही वर्तमान परिणाम लाता है।",
              },
            },
            {
              wrong: "If he didn't waste his youth, he would have a degree today.",
              right: "If he hadn't wasted his youth, he would have a degree today.",
              note: {
                bn: "শর্তটা অতীতের ঘটনা (যৌবন নষ্ট করা শেষ হয়ে গেছে) — তাই past perfect hadn't wasted; ফল today-তে।",
                en: "The condition is a finished past act (wasting his youth), so past perfect hadn't wasted; the result lives today.",
                hi: "शर्त पूर्ण भूतकाल की घटना है (यौवन बर्बाद करना खत्म) — इसलिए hadn't wasted; परिणाम आज है।",
              },
            },
            {
              wrong: "If I were you, I would told the truth.",
              right: "If I were you, I would tell the truth. / I would have told the truth. (past result)",
              note: {
                bn: "would-এর পরে মূল রূপ tell; ফল অতীতে টানতে চাইলে would have told — দুই রূপের মাঝে 'would told' নেই।",
                en: "After would comes the base form tell; for a past result would have told — there is no middle form 'would told'.",
                hi: "would के बाद मूल रूप tell; भूतकाल परिणाम के लिए would have told — 'would told' जैसा कुछ नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "দুই মিশ্রণ — ছকে ফেলুন",
            en: "The two mixes — memorise the grid",
            hi: "दो मिश्रण — ग्रिड याद करें",
          },
          body: {
            bn: "ছক এক — অতীতের শর্ত, বর্তমানের ফল (প্রচলিত নাম Type 3→2): If + had + V3, would + V1 (+ now/today)। উদাহরণ: 'If we had planted trees ten years ago, the village would be cooler today.' ছক দুই — বর্তমানের শর্ত, অতীতের ফল (Type 2→3): If + past simple, would have + V3। উদাহরণ: 'If she were more careful, she wouldn't have lost the files last week.' চেনার সূত্র: if-ক্লজে অতীত-নির্দেশক সময়বাচক (ago, last year, then, অতীতের ঘটনা) থাকলে সেটা নির্ধারণ করবে কোন মিশ্রণ — আর মূল ক্লজের now/today/yesterday-ই ফলের সময় জানিয়ে দেবে।",
            en: "Grid one — past condition, present result (3→2): If + had + V3, would + V1 (+ now/today): 'If we had planted trees ten years ago, the village would be cooler today.' Grid two — present condition, past result (2→3): If + past simple, would have + V3: 'If she were more careful, she wouldn't have lost the files last week.' Cue: time markers in each clause fix the mix.",
            hi: "ग्रिड एक — भूतकाल शर्त, वर्तमान परिणाम (3→2): If + had + V3, would + V1 (+ now/today)। ग्रिड दो — वर्तमान शर्त, भूतकाल परिणाम (2→3): If + past simple, would have + V3। संकेत: प्रत्येक clause के समय-शब्द मिश्रण तय करते हैं।",
          },
          examples: [
            {
              wrong: "If we had planted trees ten years ago, the village would have been cooler today.",
              right: "If we had planted trees ten years ago, the village would be cooler today.",
              note: {
                bn: "'ago' শর্তকে অতীতে বসায়, 'today' ফলকে বর্তমানে — ফল বর্তমান বলে would be।",
                en: "'Ago' pins the condition to the past, 'today' pins the result to the present — hence would be.",
                hi: "'ago' शर्त को भूतकाल में बाँधता है, 'today' परिणाम को वर्तमान में — इसलिए would be।",
              },
            },
            {
              wrong: "If she were more careful, she wouldn't lose the files last week.",
              right: "If she were more careful, she wouldn't have lost the files last week.",
              note: {
                bn: "'last week' ফলটাকে অতীতে রাখে — তাই wouldn't have lost; wouldn't lose মানে ফলও বর্তমানে, যা last week-এর সাথে মেলে না।",
                en: "'Last week' pins the result to the past — hence wouldn't have lost; plain wouldn't lose would drag the result into the present.",
                hi: "'last week' परिणाम को भूतकाल में रखता है — इसलिए wouldn't have lost।",
              },
            },
            {
              wrong: "If he had listened to our advice, he wouldn't be in debt yesterday.",
              right: "If he had listened to our advice, he wouldn't be in debt now.",
              note: {
                bn: "অতীত-শর্তের বর্তমান-ফলে সময়বাচক now/today-ই থাকবে; yesterday বসালে ফলও অতীতে যায় (তখন দুটোই অতীত = সাধারণ Type 3)।",
                en: "Past-condition → present-result takes now/today; putting yesterday pushes the result into the past (making it plain Type 3).",
                hi: "भूतकाल-शर्त → वर्तमान-परिणाम में now/today रहता है; yesterday डालने पर यह साधारण Type 3 बन जाता है।",
              },
            },
            {
              wrong: "If I am more organised, I would have finished the thesis.",
              right: "If I were more organised, I would have finished the thesis.",
              note: {
                bn: "বর্তমান-শর্তের unreal বাক্যে am/is/are-এর জায়গায় were — মিশ্রণেও এই নিয়ম একই।",
                en: "Unreal present conditions take were (not am/is/are) — the rule survives inside a mixed conditional.",
                hi: "अवास्तविक वर्तमान शर्त में were (am/is/are नहीं) — मिश्रण में भी यही नियम।",
              },
            },
            {
              wrong: "If they had built the bridge, the town would connect to the highway. (intended: present result is wrong form)",
              right: "If they had built the bridge, the town would be connected to the highway.",
              note: {
                bn: "ফল বর্তমানে হলেও অর্থ অনুযায়ী রূপ লাগবে — সংযুক্ত হওয়া অবস্থা, তাই be connected; খালি connect করলে অর্থ 'নিজে সংযোগ করবে' দাঁড়ায়।",
                en: "A present result still needs the right form — a state of being connected, so would be connected; bare would connect changes the meaning.",
                hi: "वर्तमान परिणाम के लिए भी सही रूप चाहिए — जुड़े रहने की अवस्था, इसलिए would be connected।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "if বাদ দিয়ে উল্টানো — inverted conditional",
            en: "Dropping if — the inverted conditional",
            hi: "if हटाकर उलटना — inverted conditional",
          },
          body: {
            bn: "আনুষ্ঠানিক লেখায় if প্রায়ই মুছে যায়, আর had/were/should কর্তার সামনে চলে আসে: 'Had I known, I would have called.' (= If I had known...) 'Were I you, I would apologise.' (= If I were you...) 'Should you need help, call me.' (= If you should need help...) নিয়ম তিনটা: (১) শুধু had/were/should-ই উপরে ওঠে — নেগেটিভ থাকলে not কর্তার পরে: 'Had I not seen it, I would never have believed it.' (didn't have নয়!) (২) এই রূপ শুধু শর্ত-ক্লজে; মূল ক্লজ সাধারণ থাকে। (৩) কথ্য ভাষায় if-ই প্রিয়; inverted রূপ রচনা, চিঠি, বক্তৃতার।",
            en: "Formal writing often drops if and lifts had/were/should in front of the subject: 'Had I known, I would have called.' 'Were I you, I would apologise.' 'Should you need help, call me.' Three rules: only had/were/should rise; a negative keeps not AFTER the subject ('Had I not seen it...'); and the pattern belongs to the if-clause only — the main clause stays normal.",
            hi: "औपचारिक लेखन में if गिर जाता है और had/were/should कर्ता से पहले आते हैं: 'Had I known, I would have called।' तीन नियम: केवल had/were/should ऊपर उठते हैं; नकारात्मक में not कर्ता के बाद ('Had I not seen it...'); यह ढाँचा केवल शर्त-वाक्यांश में।",
          },
          examples: [
            {
              wrong: "Had I known your number, I would have called you. (marked wrong by style checkers? No — but note the formal tone)",
              right: "Had I known your number, I would have called you. (= If I had known your number...)",
              note: {
                bn: "এই রূপ একদম শুদ্ধ — শুধু মনে রাখুন এটা if-বাক্যের আনুষ্ঠানিক জোড়া; গল্পের সংলাপে if-ই বেশি স্বাভাবিক।",
                en: "This form is perfectly correct — just remember it is the formal twin of an if-sentence; in casual dialogue if itself sounds natural.",
                hi: "यह रूप एकदम सही है — बस याद रखें यह if-वाक्य का औपचारिक रूप है; रोज़मर्रा बातचीत में if ही स्वाभाविक है।",
              },
            },
            {
              wrong: "Had not I seen the warning, I would have touched the wire.",
              right: "Had I not seen the warning, I would have touched the wire.",
              note: {
                bn: "নেগেটিভ ইনভার্শনে had আগে, not পরে: Had I not seen — 'Had not I' পুরোনো নাটকীয় সুর ছাড়া ভুল।",
                en: "In negative inversion had leads and not follows: Had I not seen — 'Had not I' is wrong outside archaic style.",
                hi: "नकारात्मक inversion में had पहले, not बाद में: Had I not seen — 'Had not I' ग़लत है।",
              },
            },
            {
              wrong: "Were you me, what would you do? (acceptable, but learn the classic)",
              right: "Were I you, what would you do? / If I were you, what would I do?",
              note: {
                bn: "'Were I you' ধ্রুপদী রূপ; কর্তা বদলালে were-এর সাথে মিল রাখুন: Were he/Were she/Were they।",
                en: "'Were I you' is the classic; keep were agreement for other subjects: Were he / Were she / Were they.",
                hi: "'Were I you' शास्त्रीय रूप है; अन्य कर्ताओं के साथ were रखें: Were he / Were she / Were they।",
              },
            },
            {
              wrong: "Should you will need any help, please call.",
              right: "Should you need any help, please call.",
              note: {
                bn: "should-ইনভার্শনে should-এর পরে মূল রূপ, দ্বিতীয় will নিষিদ্ধ — should নিজেই ভবিষ্যৎ-সুর দেয়।",
                en: "In should-inversion the verb stays base and no second will appears — should itself carries the future flavour.",
                hi: "should-inversion में क्रिया मूल रूप में, दूसरा will नहीं — should ही भविष्यत् सुर देता है।",
              },
            },
            {
              wrong: "Had they arrived earlier, they would catch the train.",
              right: "Had they arrived earlier, they would have caught the train.",
              note: {
                bn: "if-ক্লজ উল্টে গেলেও মূল ক্লজের টেন্স বদলায় না — অতীত ফলে would have caught।",
                en: "Inverting the if-clause never changes the main clause's tense — a past result needs would have caught.",
                hi: "if-वाक्यांश उलटने से मुख्य clause का tense नहीं बदलता — भूतकाल परिणाम के लिए would have caught।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "mixed + inverted একসাথে — উচ্চ স্তরের সমন্বয়",
            en: "Mixing mixed with inverted",
            hi: "mixed और inverted का संयोजन",
          },
          body: {
            bn: "সবচেয়ে পরিণত রূপ — মিক্সড শর্তকে উল্টে লেখা: 'Had the company invested earlier, its app would be the market leader today.' (অতীত শর্ত + বর্তমান ফল, উভয় যুক্তিই এক বাক্যে)। লেখার সময় তিনটি জিনিস একসাথে যাচাই করুন: (১) শর্ত-ক্লজের সময় (had + V3 = অতীত; were + বিশেষণ = বর্তমান), (২) মূল-ক্লজের সময় (would + V1 = বর্তমান; would have + V3 = অতীত), (৩) সময়বাচক শব্দ (now, today, then, last year) কোন ক্লজকে বাঁধছে। তিনটা মিললে বাক্য শুদ্ধ।",
            en: "The most mature form mixes and inverts at once: 'Had the company invested earlier, its app would be the market leader today.' Verify three things together: the if-time (had + V3 = past; were + adjective = present), the result-time (would + V1 = present; would have + V3 = past), and which clause the time words bind.",
            hi: "सबसे परिपक्व रूप — mixed शर्त को उलटकर लिखना: 'Had the company invested earlier, its app would be the market leader today।' तीन बातें एक साथ जाँचें: शर्त का समय, परिणाम का समय, और समय-शब्द किसे बाँध रहे हैं।",
          },
          examples: [
            {
              wrong: "Had the company invested earlier, its app would have been the market leader today.",
              right: "Had the company invested earlier, its app would be the market leader today.",
              note: {
                bn: "'today' ফলকে বর্তমানে ধরে — would be; would have been অতীত ফল বোঝায়, today-র সাথে বাধা।",
                en: "'Today' pins the result to the present — would be; would have been points the result backward, clashing with today.",
                hi: "'today' परिणाम को वर्तमान में बाँधता है — would be; would have been टकराव करेगा।",
              },
            },
            {
              wrong: "Were the system not so slow, the launch didn't fail last month.",
              right: "Were the system not so slow, the launch wouldn't have failed last month.",
              note: {
                bn: "বর্তমান শর্ত (were) + অতীত ফল (wouldn't have failed); খালি didn't fail মিশ্রণের যান নয়।",
                en: "Present condition (were) + past result (wouldn't have failed); plain didn't fail is not the mixed vehicle.",
                hi: "वर्तमान शर्त (were) + भूतकाल परिणाम (wouldn't have failed); खाला didn't fail नहीं।",
              },
            },
            {
              wrong: "Had I saved more money, I will buy the flat next year.",
              right: "Had I saved more money, I would be buying the flat next year.",
              note: {
                bn: "অতীত-শর্তের ভবিষ্যৎ-ফলে would be buying — will আসবে না; এটা মিক্সডের তৃতীয় স্বাদ: অতীত → ভবিষ্যৎ।",
                en: "Past condition → future result takes would be buying — never will; a third mixed flavour: past → future.",
                hi: "भूतकाल शर्त → भविष्यत् परिणाम के लिए would be buying — will नहीं; मिक्स्ड का तीसरा स्वाद।",
              },
            },
            {
              wrong: "Were she a bit more patient, she would be succeeded. (form check)",
              right: "Were she a bit more patient, she would succeed. / she would have succeeded.",
              note: {
                bn: "would-এর পরে মূল রূপ বা would have + V3 — 'would be succeeded' দ্বিগুণ সহায়ক ক্রিয়া, ভুল।",
                en: "After would: base form or would have + V3 — 'would be succeeded' doubles the auxiliaries and is wrong.",
                hi: "would के बाद मूल रूप या would have + V3 — 'would be succeeded' ग़लत।",
              },
            },
            {
              wrong: "Should the plan fail, we would have lost everything. (timeline slip)",
              right: "Should the plan fail, we would lose everything. (future risk)",
              note: {
                bn: "should-শর্ত ভবিষ্যৎ-ঝুঁকি বোঝায়, তাই ফলও ভবিষ্যৎ: would lose; would have lost অতীত-ফল, যা should-শর্তের সাথে সময়ে মেলে না।",
                en: "A should-condition signals a future risk, so the result is future: would lose; would have lost is a past result that mismatches.",
                hi: "should-शर्त भविष्यत् जोखिम दर्शाती है, इसलिए परिणाम भी भविष्यत्: would lose।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "বাঙালি শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "Subtle mistakes Bengali speakers make",
            hi: "बांग्लाभाषी शिक्षार्थियों की सूक्ष्म गलतियाँ",
          },
          body: {
            bn: "চারটা জায়গায় পা পিছলে যায়। এক: বাংলার 'হলে' সব সময়ের জায়গায় বসে, তাই ইংরেজিতে সময়-চিহ্ন ভুল হয় — now/last year/tomorrow কোন ক্লজে বসছে দেখুন। দুই: 'যদি আমি তোমার জায়গায় হতাম' কে 'If I was you' লেখা — unreal সুরে were-ই নিয়ম। তিন: would have-কে 'হত' ভেবে বর্তমান-ফলেও বসানো — ফলের সময় দেখে would be / would have বাছুন। চার: inverted রূপে দ্বিতীয় সহায়ক ঢোকানো ('Had he came' → had come)। প্রতিকার একটাই: বাক্য লেখার আগে দুই ক্লজের সময় দুই শব্দে লিখুন — 'condition: past, result: present' — তারপর ছক মেলান।",
            en: "Four slippery spots: (1) Bengali 'hole' works for every time, so time markers drift — watch where now/last year/tomorrow sit; (2) 'If I was you' — unreal meaning needs were; (3) past Bengali 'hoto' tempting would have for present results — pick would be / would have by the result's time; (4) a second auxiliary sneaking into inversions ('Had he came'). Remedy: write 'condition: past, result: present' before the sentence, then match the grid.",
            hi: "चार फिसलन भरी जगहें: (1) समय-शब्द इधर-उधर; (2) 'If I was you' — अवास्तविक अर्थ में were; (3) वर्तमान परिणाम में would have; (4) inversion में दूसरा auxiliary ('Had he came')। उपाय: वाक्य से पहले 'शर्त: भूतकाल, परिणाम: वर्तमान' लिखें, फिर ग्रिड मिलाएँ।",
          },
          examples: [
            {
              wrong: "If I was the captain, I would have changed the batting order.",
              right: "If I were the captain, I would have changed the batting order.",
              note: {
                bn: "unreal বর্তমান-শর্তে were — রচনা/পরীক্ষায় was লিখলে নম্বর কাটা যায়।",
                en: "Unreal present conditions take were — in essays and exams was costs marks.",
                hi: "अवास्तविक वर्तमान शर्त में were — परीक्षा में was नम्बर काटता है।",
              },
            },
            {
              wrong: "If I had got the scholarship, my parents will stop worrying. (past→future mix)",
              right: "If I had got the scholarship, my parents would stop worrying.",
              note: {
                bn: "অতীত-শর্তের সাথে কখনো will নয় — would stop (বর্তমান/ভবিষ্যৎ ফল)।",
                en: "A past condition never pairs with will — would stop carries the present/future result.",
                hi: "भूतकाल शर्त के साथ will कभी नहीं — would stop।",
              },
            },
            {
              wrong: "If you should get lost, you would call us immediately, right? (mixed-up frame)",
              right: "Should you get lost, call us immediately.",
              note: {
                bn: "should-শর্ত নির্দেশ/পরামর্শে ব্যবহৃত হলে মূল ক্লজ imperative হয় — 'call us' — would-বাক্য নয়।",
                en: "A should-condition in advice pairs with an imperative main clause — 'call us' — not a would-clause.",
                hi: "should-शर्त सलाह में मुख्य clause imperative होता है — 'call us' — would-वाक्य नहीं।",
              },
            },
            {
              wrong: "Had he came home earlier, the argument would never happen.",
              right: "Had he come home earlier, the argument would never have happened.",
              note: {
                bn: "had-এর পরে V3 (come); ফলও অতীতে (যুক্তি রাতের ঘটনা) — would never have happened।",
                en: "After had comes V3 (come); the result is also past (that night) — would never have happened.",
                hi: "had के बाद V3 (come); परिणाम भी भूतकाल में — would never have happened।",
              },
            },
            {
              wrong: "If the rain had stopped, we would go out yesterday.",
              right: "If the rain had stopped, we would have gone out yesterday.",
              note: {
                bn: "yesterday ফলকে অতীতে বাঁধলে would have gone — দুই ক্লজই অতীত হলে সেটা সাধারণ Type 3, মিক্সড নয়।",
                en: "'Yesterday' pins the result to the past — would have gone; with both clauses past it is plain Type 3, not mixed.",
                hi: "'yesterday' परिणाम को भूतकाल में बाँधता है — would have gone; दोनों भूतकाल हों तो साधारण Type 3।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "ছোট লেখায় দেখা যাক",
            en: "A short passage",
            hi: "छोटे लेख में देखें",
          },
          body: {
            bn: "একটা রেজাল্ট-দিবসের অনুচ্ছেদ: 'Had Nadia revised the last chapter, she would be calmer now. She knows the marks are already printed, and were she to cry about it, nothing would change. Should she choose to retake the paper in autumn, she would have three full months — if she starts today.' দেখুন — তিন ধরনের inverted শর্ত আর একটা মিক্সড ফল একসাথে কাজ করছে; প্রতিটি বাক্য সময় বদলে নতুন অর্থ তৈরি করছে। এই ব্যবহারই C1-এর চিহ্ন।",
            en: "A results-day paragraph: 'Had Nadia revised the last chapter, she would be calmer now. She knows the marks are already printed, and were she to cry about it, nothing would change. Should she choose to retake the paper in autumn, she would have three full months — if she starts today.' Three inverted conditionals plus a mixed result, all cooperating across times — that flexibility is the C1 signature.",
            hi: "रिज़ल्ट-डे का अनुच्छेद: 'Had Nadia revised the last chapter, she would be calmer now...' तीन inverted शर्तें और एक mixed परिणाम — यही C1 की पहचान है।",
          },
          examples: [
            {
              wrong: "If Nadia had revised the last chapter, she is calmer now.",
              right: "Had Nadia revised the last chapter, she would be calmer now.",
              note: {
                bn: "মিক্সড বাক্যে মূল ক্লজে is নয় — would be; চাইলে উল্টে আরও গাম্ভীর্য যোগ করুন।",
                en: "A mixed result takes would be, never is — and inverting the if-clause adds gravity.",
                hi: "mixed परिणाम में would be, is नहीं — inversion से गंभीरता भी जुड़ती है।",
              },
            },
            {
              wrong: "Were she to cry about it, nothing will change.",
              right: "Were she to cry about it, nothing would change.",
              note: {
                bn: "were she to + মূল রূপ শর্ত; ফলে would — দুই ক্লজের সুর মিলতে হয়।",
                en: "were she to + base form is the condition; the result takes would — the two clauses must rhyme.",
                hi: "were she to + मूल रूप शर्त है; परिणाम में would — दोनों clauses का सुर मिलना चाहिए।",
              },
            },
            {
              wrong: "Should she retake the paper, she would have three months yesterday.",
              right: "Should she retake the paper, she would have three full months.",
              note: {
                bn: "should-শর্ত ভবিষ্যৎ-পরিকল্পনা; অতীত-সময়বাচক (yesterday) এখানে বাক্য ভাঙে — সময়বাচক বাদ দিন বা সুর মেলান।",
                en: "A should-condition plans the future; a past time word (yesterday) wrecks it — drop it or move it.",
                hi: "should-शर्त भविष्यत् योजना है; भूतकाल शब्द (yesterday) इसे तोड़ देता है।",
              },
            },
            {
              wrong: "Had she started today, she would had three months.",
              right: "Had she started today, she would have three months.",
              note: {
                bn: "'would had' নেই — would have (মালিকানা বর্তমানে)। had-শর্ত আর would have-ফলের ভারসাম্য রাখুন।",
                en: "'Would had' does not exist — would have (present possession). Balance the had-condition with a would-have-free result.",
                hi: "'would had' अस्तित्व में नहीं — would have। had-शर्त और परिणाम का संतुलन रखें।",
              },
            },
            {
              wrong: "If she starts today, she would have three months.",
              right: "If she starts today, she will have three months. / If she started today, she would have three months.",
              note: {
                bn: "সাধারণ শর্তে সুর মেলান: বর্তমান-শর্ত + will, বা অতীত-রূপ-শর্ত + would — এক ক্লজ বাস্তব, এক ক্লজ কল্পনা থাকতে পারে না।",
                en: "Match the tones in plain conditionals: present + will, or past-form + would — one clause cannot be real while the other is imaginary.",
                hi: "सामान्य शर्त में सुर मिलाएँ: वर्तमान + will, या भूत रूप + would — एक clause वास्तविक, दूसरा काल्पनिक नहीं रह सकता।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "এক নজরে",
            en: "At a glance",
            hi: "एक नज़र में",
          },
          body: {
            bn: "মনে রাখার তালিকা: (১) দুই ক্লজের সময় আলাদা হলে mixed — ছক: অতীত-শর্ত+বর্তমান-ফল (had V3 + would V1), বর্তমান-শর্ত+অতীত-ফল (past simple + would have V3)। (২) সময়বাচক শব্দ (now, today, last year) কোন ক্লজে বসছে — সেটাই সেই ক্লজের সময় ঠিক করে। (৩) unreal বর্তমান-শর্তে were। (৪) inverted রূপ: Had/Were/Should + কর্তা; নেগেটিভে not কর্তার পরে (Had I not...)। (৫) উল্টে গেলেও টেন্স বদলায় না — ফল-ক্লজের সময় অনুযায়ী would be / would have। (৬) should-শর্ত = ভবিষ্যৎ ঝুঁকি, ফল ভবিষ্যৎ বা imperative। অনুশীলন-সূত্র: আগে 'শর্ত: ?, ফল: ?' লিখুন, পরে ছক মেলান।",
            en: "Keep-list: (1) different clause times → mixed (past+present: had V3 + would V1; present+past: past simple + would have V3); (2) time words decide each clause's time; (3) unreal present = were; (4) inverted forms lift Had/Were/Should, negatives keep not after the subject; (5) inversion never changes tense; (6) should = future risk (future or imperative result). Drill: write 'condition: ?, result: ?' first, then match.",
            hi: "सूची: (1) अलग समय → mixed (भूत+वर्तमान: had V3 + would V1; वर्तमान+भूत: past simple + would have V3); (2) समय-शब्द ही समय तय करते हैं; (3) अवास्तविक वर्तमान = were; (4) inversion में Had/Were/Should ऊपर, not कर्ता के बाद; (5) inversion से tense नहीं बदलता; (6) should = भविष्यत् जोखिम। अभ्यास: पहले 'शर्त: ?, परिणाम: ?' लिखें।",
          },
          examples: [
            {
              wrong: "If I had known about the flood, I would donate money now.",
              right: "If I had known about the flood, I would be donating money now. / I would donate money now. (result present)",
              note: {
                bn: "বর্তমান-ফলে would + V1 চলে, চলমান ভাব দিতে would be donating — will/would have নয়।",
                en: "A present result takes would + V1 (or would be donating for the ongoing feel) — never will or would have.",
                hi: "वर्तमान परिणाम में would + V1 (या would be donating) — will या would have नहीं।",
              },
            },
            {
              wrong: "Were it not for your help, I will fail.",
              right: "Were it not for your help, I would have failed.",
              note: {
                bn: "'Were it not for...' ফ্রেজ অতীতের ঋণ বোঝালে ফল অতীতে: would have failed; বর্তমান-সুর চাইলে I would be failing।",
                en: "'Were it not for...' with a past debt takes a past result: would have failed (present flavour: I would be failing).",
                hi: "'Were it not for...' के साथ भूतकाल ऋण हो तो would have failed।",
              },
            },
            {
              wrong: "Had the train not been late, we caught the flight.",
              right: "Had the train not been late, we would have caught the flight.",
              note: {
                bn: "শর্ত উল্টে গেলেও ফল-ক্লজে would have লাগবেই — খালি অতীত (caught) কল্পনার অর্থ হারায়।",
                en: "Even with an inverted condition, the result clause needs would have — plain caught loses the unreal meaning.",
                hi: "शर्त उलटने पर भी परिणाम में would have चाहिए — खाला caught अवास्तविक अर्थ खो देता है।",
              },
            },
            {
              wrong: "Should you change your mind, you would inform us.",
              right: "Should you change your mind, please inform us. / you can inform us.",
              note: {
                bn: "should-শর্তে ফল সাধারণত imperative বা can/will-সুরের — would inform ভারী ও অতীত-সুরের লাগে।",
                en: "A should-condition usually pairs with an imperative or can/will result — would inform sounds heavy and past-flavoured.",
                hi: "should-शर्त के साथ imperative या can/will परिणाम — would inform भारी लगता है।",
              },
            },
            {
              wrong: "If he had been more careful, he would not lose his wallet last week.",
              right: "If he had been more careful, he would not have lost his wallet last week.",
              note: {
                bn: "last week ফলকে অতীতে বাঁধে — would not have lost; দুই ক্লজ অতীত = সাধারণ Type 3।",
                en: "'Last week' pins the result to the past — would not have lost; both clauses past = plain Type 3.",
                hi: "'last week' परिणाम को भूतकाल में बाँधता है — would not have lost; दोनों भूतकाल = साधारण Type 3।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "বাক্য লেখার আগে খাতায় লিখুন: শর্ত কোন সময়ের? ফল কোন সময়ের? — উত্তর মিলিয়ে ছক বাছুন।",
          en: "Before writing, note on paper: when is the condition? when is the result? — then pick the grid.",
          hi: "लिखने से पहले लिखें: शर्त कब की? परिणाम कब का? — फिर ग्रिड चुनें।",
        },
        {
          bn: "now/today/yesterday/tomorrow/last year — এই শব্দগুলো কোন ক্লজে বসছে দেখুন; সেটাই সেই ক্লজের সময় জানিয়ে দেয়।",
          en: "Watch where now/today/yesterday/tomorrow/last year sit — they announce that clause's time.",
          hi: "देखें now/today/yesterday/tomorrow/last year किस clause में हैं — वे उसी का समय बताते हैं।",
        },
        {
          bn: "unreal বর্তমান-শর্তে সবসময় were (If I were, Were she) — রচনায় was ঝুঁকিপূর্ণ।",
          en: "Unreal present conditions take were (If I were, Were she) — was is risky in writing.",
          hi: "अवास्तविक वर्तमान शर्त में हमेशा were — लेखन में was जोखिम भरा है।",
        },
        {
          bn: "inverted রূপে শুধু had/were/should ওঠে; নেগেটিভে not কর্তার পরে — Had I not, Were it not, কখনো 'Had not I' নয়।",
          en: "Only had/were/should rise in inversions; negatives keep not after the subject — Had I not, Were it not, never 'Had not I'.",
          hi: "inversion में केवल had/were/should ऊपर; not कर्ता के बाद — 'Had not I' कभी नहीं।",
        },
        {
          bn: "inversion টেন্স বদলায় না — Had he come (V3), Were she to go (মূল রূপ), Should you need (মূল রূপ)।",
          en: "Inversion never changes tense — Had he come (V3), Were she to go (base), Should you need (base).",
          hi: "inversion से tense नहीं बदलता — Had he come (V3), Were she to go (मूल रूप)।",
        },
        {
          bn: "would have + V3 = অতীতের ফল; would + V1 = বর্তমান/সাধারণ ফল — এই দুই যান গুলিয়ে ফেলবেন না।",
          en: "would have + V3 = past result; would + V1 = present/general result — never swap the two vehicles.",
          hi: "would have + V3 = भूतकाल परिणाम; would + V1 = वर्तमान परिणाम — दोनों न मिलाएँ।",
        },
        {
          bn: "should-শর্ত (Should you need...) নম্র আমন্ত্রণ/পরামর্শে দুর্দান্ত; ফল imperative বা will/can হয়।",
          en: "should-conditions (Should you need...) are perfect for polite invitations/advice; the result is imperative or will/can.",
          hi: "should-शर्त (Should you need...) विनम्र निमंत्रण/सलाह के लिए उत्तम; परिणाम imperative या will/can।",
        },
        {
          bn: "মিক্সড বাক্য পড়ার সময় দুই ক্লজ আলাদা করে অনুবাদ করুন — বাংলা 'হলে/হত তবে' এক শব্দে সব সময় ঢেকে দেয়, ফাঁদ ওখানেই।",
          en: "When reading mixed conditionals, translate each clause separately — Bengali 'hole/hoto' covers every time, and that is the trap.",
          hi: "mixed conditional पढ़ते समय हर clause अलग अनुवाद करें — बंगाली 'होले/होतो' हर समय ढक लेता है, जाल वहीं है।",
        },
        {
          bn: "রচনায় এক প্যারায় একটি inverted conditional-ই যথেষ্ট — বেশি হলে অতিনাটকীয় লাগে।",
          en: "One inverted conditional per paragraph is plenty in an essay — more feels over-dramatic.",
          hi: "एक अनुच्छेद में एक inverted conditional पर्याप्त है — अधिक नाटकीय लगता है।",
        },
        {
          bn: "পরীক্ষার উত্তরে mixed/inverted বাক্য লিখলে দুবার পড়ুন: সময়? রূপ? সুর-মিল? — তিনটা মিললে পূর্ণ নম্বর।",
          en: "In exams, read every mixed/inverted answer twice: time? form? tone-match? — three checks, full marks.",
          hi: "परीक्षा में दो बार पढ़ें: समय? रूप? सुर-मेल? — तीनों मिलें तो पूरे अंक।",
        },
      ],
      quiz: [
        {
          question: "If I had taken that flight, I ___ at the wedding now.",
          options: ["would have been", "would be", "will be", "am"],
          answer: 1,
          explanation: {
            bn: "now ফলটা বর্তমানে ধরে — অতীত-শর্ত + বর্তমান-ফল = would be (মিক্সড)।",
            en: "'Now' pins the result to the present — past condition + present result = would be (mixed).",
            hi: "now परिणाम को वर्तमान में बाँधता है — भूत शर्त + वर्तमान परिणाम = would be (मिक्स्ड)।",
          },
        },
        {
          question: "If she were more careful, she ___ the files last week.",
          options: ["wouldn't lose", "wouldn't have lost", "didn't lose", "won't lose"],
          answer: 1,
          explanation: {
            bn: "last week ফলকে অতীতে বাঁধে — বর্তমান-শর্ত + অতীত-ফল = wouldn't have lost (মিক্সড)।",
            en: "'Last week' pins the result to the past — present condition + past result = wouldn't have lost (mixed).",
            hi: "'last week' परिणाम को भूतकाल में बाँधता है — wouldn't have lost (मिक्स्ड)।",
          },
        },
        {
          question: "___ I known your number, I would have called you.",
          options: ["If", "Had", "Were", "Should"],
          answer: 1,
          explanation: {
            bn: "if বাদ দিয়ে had কর্তার সামনে: Had I known — inverted Type 3।",
            en: "Drop if and lift had: Had I known — inverted Type 3.",
            hi: "if हटाकर had आगे: Had I known — inverted Type 3।",
          },
        },
        {
          question: "Had I not seen the warning, I ___ the wet paint.",
          options: ["would touch", "would have touched", "will touch", "had touched"],
          answer: 1,
          explanation: {
            bn: "শর্ত অতীত (had not seen), ফলও অতীত — would have touched; not কর্তার পরেই থাকে।",
            en: "Past condition (had not seen) and past result — would have touched; not stays after the subject.",
            hi: "शर्त भूतकाल, परिणाम भी भूतकाल — would have touched; not कर्ता के बाद।",
          },
        },
        {
          question: "Were she to apologise, he ___ forgive her.",
          options: ["will", "would", "had", "is"],
          answer: 1,
          explanation: {
            bn: "were she to + মূল রূপ = unreal শর্ত, ফলে would forgive।",
            en: "were she to + base form is an unreal condition; the result takes would forgive.",
            hi: "were she to + मूल रूप अवास्तविक शर्त है; परिणाम would forgive।",
          },
        },
        {
          question: "Should you ___ any questions, feel free to email me.",
          options: ["will have", "have", "had", "would have"],
          answer: 1,
          explanation: {
            bn: "should-ইনভার্শনে should-এর পরে মূল রূপ: Should you have — দ্বিতীয় will/would নিষিদ্ধ।",
            en: "In should-inversion the verb stays base: Should you have — no second will/would.",
            hi: "should-inversion में क्रिया मूल रूप में: Should you have — दूसरा will/would नहीं।",
          },
        },
        {
          question: "If we had planted trees ten years ago, the air ___ cleaner today.",
          options: ["would have been", "would be", "will be", "had been"],
          answer: 1,
          explanation: {
            bn: "ten years ago শর্তকে অতীতে, today ফলকে বর্তমানে বাঁধে — would be (মিক্সড)।",
            en: "'Ten years ago' pins the condition to the past, 'today' the result to the present — would be (mixed).",
            hi: "'ten years ago' शर्त भूतकाल में, 'today' परिणाम वर्तमान में — would be (मिक्स्ड)।",
          },
        },
        {
          question: "Choose the CORRECT inverted conditional.",
          options: [
            "Had not I studied, I would fail.",
            "Had I not studied, I would have failed.",
            "Had I not studied, I would failed.",
            "If not had I studied, I would have failed.",
          ],
          answer: 1,
          explanation: {
            bn: "নেগেটিভ ইনভার্শন: Had I not studied (not কর্তার পরে) + অতীত ফল would have failed।",
            en: "Negative inversion: Had I not studied (not after the subject) + past result would have failed.",
            hi: "नकारात्मक inversion: Had I not studied + भूतकाल परिणाम would have failed।",
          },
        },
        {
          question: "Were it not for the scholarship, Rina ___ university last year.",
          options: ["will not enter", "would not have entered", "would not enter", "had not entered"],
          answer: 1,
          explanation: {
            bn: "last year ফলকে অতীতে রাখে — বর্তমান-শর্ত + অতীত-ফল = would not have entered (মিক্সড)।",
            en: "'Last year' pins the result to the past — present condition + past result = would not have entered (mixed).",
            hi: "'last year' परिणाम को भूतकाल में रखता है — would not have entered (मिक्स्ड)।",
          },
        },
        {
          question: "Which sentence mixes past condition with present result CORRECTLY?",
          options: [
            "If he had saved money, he would have a house now.",
            "If he saved money, he would have had a house now.",
            "If he had saved money, he will have a house now.",
            "If he would have saved money, he has a house now.",
          ],
          answer: 0,
          explanation: {
            bn: "had saved (অতীত শর্ত) + would have (বর্তমান ফল) + now — শুদ্ধ মিক্সড কাঠামো; বাকিগুলো সময়/রূপে ভুল।",
            en: "had saved (past condition) + would have (present result) + now — the correct mixed frame; the others clash in time or form.",
            hi: "had saved (भूत शर्त) + would have (वर्तमान परिणाम) + now — सही मिक्स्ड ढाँचा; बाकी समय/रूप में ग़लत।",
          },
        },
      ],
    },
  },
];
