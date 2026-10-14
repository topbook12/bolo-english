// ─── Library seed data: GRAMMAR (intermediate) ─────────────────────────────
// Contract: LibraryGrammarEntry in src/lib/library-types.ts
// TriText = { bn, en, hi } — Bengali is the PRIMARY explanation language.
// Ordering: array position is the sort order (0-3); LibraryGrammarMeta has
// no sortOrder field, so the seed script should use the array index.
// NOTE: quiz is intentionally omitted (optional field, reserved for future).

import type { LibraryGrammarEntry } from "../../src/lib/library-types";

export const SEED_GRAMMAR: LibraryGrammarEntry[] = [
  /* ── 0. Tense basics ─────────────────────────────────────────────────── */
  {
    id: "",
    topic: "Tense basics",
    level: "intermediate",
    title: "Tense Basics (Intermediate)",
    data: {
      title: {
        bn: "টেন্স — ক্রিয়ার কাল (মধ্যম স্তর)",
        en: "Tense Basics (Intermediate)",
        hi: "टेंस — क्रिया का काल (मध्यम स्तर)",
      },
      intro: {
        bn: "ইংরেজি বাক্য ঠিক রাখার মূল চাবিকাঠি হলো ক্রিয়ার কাল, অর্থাৎ tense। বাংলায় আমরা ক্রিয়ার শেষে 'ছি', 'ছিলাম', 'বো' জোড়া দিয়ে কাল বোঝাই — যেমন 'আমি লিখছি', 'আমি লিখেছিলাম' — কিন্তু ইংরেজিতে verb-এর রূপ আর সাহায্যকারী শব্দ (have, will, was) বদলে কাল বোঝাতে হয়। Intermediate স্তরে সবচেয়ে বেশি ভুল হয় present perfect আর past simple গুলিয়ে ফেলে, আর ভবিষ্যতের কথা বলতে গিয়ে will না going to — কোনটা বলবেন জানা না থাকলে। এই পাঠে এই গুলিয়ে ফেলার জায়গাগুলো সহজ উদাহরণ দিয়ে পরিষ্কার করব।",
        en: "Tense is the backbone of every English sentence. Bangla adds endings to the verb to show time, but English changes the verb form and its helpers instead. At intermediate level the biggest traps are present perfect vs past simple, simple vs continuous, and choosing the right future form — this lesson clears them up with simple examples.",
        hi: "टेंस हर अंग्रेज़ी वाक्य की रीढ़ है। बांग्ला क्रिया के अंत में प्रत्यय जोड़कर समय दिखाता है, लेकिन अंग्रेज़ी क्रिया रूप और सहायक शब्द बदलती है। Intermediate स्तर पर सबसे बड़ी दिक्कतें हैं: present perfect बनाम past simple, simple बनाम continuous, और सही future रूप — इस पाठ में सरल उदाहरणों से यह स्पष्ट होगा।",
      },
      sections: [
        {
          heading: {
            bn: "Present Perfect নাকি Past Simple — কখন কোনটা?",
            en: "Present Perfect vs Past Simple",
            hi: "Present Perfect बनाम Past Simple",
          },
          body: {
            bn: "বাংলায় 'আমি ঢাকায় গেছি' আর 'আমি গতকাল ঢাকায় গিয়েছিলাম' — দুটো বাক্যেই 'গে' অংশটা প্রায় এক, শুধু সময়ের কথা আলাদা করে বলা হয়। কিন্তু ইংরেজিতে সময় উল্লেখ না থাকলে বা ফলাফল এখনও গুরুত্বপূর্ণ হলে have/has + verb-এর তৃতীয় রূপ (V3) বসে — 'I have visited Dhaka'। অথচ সাথে নির্দিষ্ট অতীত সময় (yesterday, last year, in 2020, two days ago) বলা হলে past simple লাগবে — 'I visited Dhaka last year'। মনে রাখার সংকেত: 'ever, never, just, already, yet, so far' থাকলে সাধারণত present perfect, আর 'ago, yesterday, last week, in 2015' থাকলে past simple। এটাই বাংলাভাষীদের সবচেয়ে পরিচিত ভুল, কারণ বাংলা ক্রিয়ায় এই দুই কালের ফারাক ইংরেজির মতো এত স্পষ্টভাবে ফুটে ওঠে না।",
            en: "Use the present perfect (have/has + past participle) when the exact time is not mentioned or the result still matters now: 'I have visited Dhaka.' Use the past simple when a finished past time is stated: 'I visited Dhaka last year.' Signal words help: just, never, already, yet, so far point to the present perfect; ago, yesterday, last week, in 2015 point to the past simple. This is the most common tense mistake for Bengali speakers, because Bangla verbs do not show the difference this sharply.",
            hi: "जब समय स्पष्ट न हो या प्रभाव अभी भी मायने रखे, तो present perfect (have/has + V3): 'I have visited Dhaka.' जब पूर्ण अतीत का समय बताया जाए, तो past simple: 'I visited Dhaka last year.' संकेत शब्द: just, never, already, yet → present perfect; ago, yesterday, last week → past simple। यही बांग्लाभाषियों की सबसे आम गलती है, क्योंकि बांग्ला क्रिया में यह अंतर इतना स्पष्ट नहीं होता।",
          },
          examples: [
            {
              wrong: "I have seen that movie yesterday.",
              right: "I saw that movie yesterday.",
              note: {
                bn: "'yesterday' একটা নির্দিষ্ট, শেষ হয়ে যাওয়া অতীত সময় — তাই present perfect চলবে না, past simple লাগবে।",
                en: "'Yesterday' is a finished past time, so the past simple is required, not the present perfect.",
                hi: "'Yesterday' पूर्ण अतीत का समय है, इसलिए past simple ही होगा, present perfect नहीं।",
              },
            },
            {
              wrong: "I am working here since 2019.",
              right: "I have been working here since 2019.",
              note: {
                bn: "'since' দিয়ে শুরুর সময় বোঝালে present perfect বা perfect continuous লাগে — শুধু continuous চলবে না।",
                en: "With 'since' you need the present perfect (or perfect continuous), not the plain continuous.",
                hi: "'since' के साथ present perfect (या perfect continuous) चाहिए, साधारण continuous नहीं।",
              },
            },
            {
              wrong: "Did you ever go to London?",
              right: "Have you ever been to London?",
              note: {
                bn: "'ever' দিয়ে জীবনের অভিজ্ঞতা জিজ্ঞেস করা হয় — নির্দিষ্ট সময় বলা হয় না, তাই present perfect-ই স্বাভাবিক।",
                en: "'Ever' asks about life experience with no specific time, so the present perfect is natural.",
                hi: "'ever' जीवन के अनुभव के बारे में पूछता है, समय अनिर्दिष्ट है, इसलिए present perfect स्वाभाविक है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "Simple নাকি Continuous — এবং 'like, know' জাতীয় verb",
            en: "Simple vs Continuous — and stative verbs",
            hi: "Simple बनाम Continuous — और stative verbs",
          },
          body: {
            bn: "এখন চলছে এমন কাজ বোঝাতে am/is/are + verb-ing লাগে — 'I am studying now'। আর অভ্যাস বা সত্য ঘটনা বোঝাতে simple present লাগে, আর he/she/it-এর সাথে verb-এ s বসে — 'She studies every night'। বাংলাভাষীদের একটা প্রাণঘাতী ভুল হলো অভ্যাসের কথা বলতে গিয়ে 'I am go to university' বলা — অভ্যাস বোঝালে continuous চলবে না, হবে 'I go to university'। উল্টো দিকে, 'আমি এখন খাচ্ছি' বলার সময় 'I eat now' বললে ভুল — হবে 'I am eating now'। আরেকটা ধরা খাওয়ার জায়গা: like, love, know, want, need, understand জাতীয় verb মনের অবস্থা বোঝায় — এগুলো stative verb, তাই এদের সাথে -ing ফর্ম বানানো যায় না; 'I am knowing him' নয়, 'I know him'।",
            en: "Use am/is/are + verb-ing for actions happening now: 'I am studying now.' Use the simple present for habits and facts, adding -s after he/she/it: 'She studies every night.' Two classic traps for Bengali speakers: saying 'I am go to university' for a habit (it should be 'I go'), and 'I eat now' for an action in progress (it should be 'I am eating now'). Also remember the stative verbs — know, like, love, want, need, understand — they describe states of mind and stay simple: 'I know him', never 'I am knowing him'.",
            hi: "अभी चल रहे काम के लिए am/is/are + verb-ing: 'I am studying now.' आदत या तथ्य के लिए simple present, he/she/it के साथ -s: 'She studies every night.' दो आम गलतियाँ: आदत के लिए 'I am go' (सही: 'I go') और चल रहे काम के लिए 'I eat now' (सही: 'I am eating now')। याद रखें: know, like, want, understand जैसे stative verbs के साथ -ing नहीं — 'I know him' सही, 'I am knowing him' गलत।",
          },
          examples: [
            {
              wrong: "I am go to the gym every morning.",
              right: "I go to the gym every morning.",
              note: {
                bn: "'every morning' অভ্যাস বোঝায় — অভ্যাসে simple present লাগে, continuous নয়।",
                en: "'Every morning' shows a habit, so the simple present is required.",
                hi: "'Every morning' आदत दर्शाता है, इसलिए simple present होगा।",
              },
            },
            {
              wrong: "She don't like tea.",
              right: "She doesn't like tea.",
              note: {
                bn: "he/she/it-এর সাথে negative-এ doesn't বসে, don't নয় — s মূল verb-এ নয়, সাহায্যকারী verb-এ যায়।",
                en: "With he/she/it the negative helper is 'doesn't'; the -s moves to the helper, not the main verb.",
                hi: "he/she/it के साथ 'doesn't' आता है, 'don't' नहीं; -s helper क्रिया के साथ जाता है।",
              },
            },
            {
              wrong: "I am understanding the lesson now.",
              right: "I understand the lesson now.",
              note: {
                bn: "'understand' একটা stative verb — মনের অবস্থা বোঝায়, তাই continuous ফর্ম চলে না।",
                en: "'Understand' is a stative verb, so it is not used in the continuous form.",
                hi: "'understand' एक stative verb है, इसका continuous रूप नहीं चलता।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "ভবিষ্যৎ: will, going to নাকি present continuous?",
            en: "Future: will, going to, or present continuous?",
            hi: "भविष्य: will, going to या present continuous?",
          },
          body: {
            bn: "ইংরেজিতে ভবিষ্যৎ বোঝানোর তিনটা প্রধান পথ আছে, আর তিনটার মানে সামান্য আলাদা। will দিয়ে মুহূর্তের মধ্যে নেওয়া সিদ্ধান্ত, প্রতিশ্রুতি বা আন্দাজি ভবিষ্যদ্বাণী বোঝায় — 'I will help you with the bags' (এইমাত্র সিদ্ধান্ত নিলাম)। going to দিয়ে আগে থেকে করা পরিকল্পনা বা চোখে দেখা প্রমাণসহ ভবিষ্যদ্বাণী বোঝায় — 'I am going to study abroad next year' (পরিকল্পনা আগেই করেছি)। আর এমন ব্যবস্থা যেখানে সময়-স্থান ঠিক করা হয়ে গেছে, সেখানে present continuous-ও চলে — 'I am meeting the manager at 5 pm'। বাংলায় আমরা সব ক্ষেত্রেই 'করব' বলি, তাই তিনটার পার্থক্য ধরা প্রথমে কঠিন লাগে — কিন্তু নিয়মটা সহজ: আগে-ভাবা প্ল্যান = going to, তাৎক্ষণিক সিদ্ধান্ত = will।",
            en: "English has three main future forms with slightly different meanings. Use will for decisions made at the moment of speaking, promises, and predictions: 'I will help you with the bags.' Use be going to for plans made earlier or predictions based on evidence: 'I am going to study abroad next year.' Use the present continuous for fixed arrangements with a time and place: 'I am meeting the manager at 5 pm.' In Bangla all of these are just 'korbo', so keep the rule simple: earlier plan = going to, on-the-spot decision = will.",
            hi: "अंग्रेज़ी में भविष्य के तीन मुख्य रूप हैं, अर्थ हल्का-सा अलग। will — बोलते समय लिया गया निर्णय, वादा या भविष्यवाणी: 'I will help you with the bags.' going to — पहले से बनी योजना या प्रमाण-आधारित भविष्यवाणी: 'I am going to study abroad next year.' present continuous — तय समय-स्थान वाली व्यवस्था: 'I am meeting the manager at 5 pm.' नियम सरल है: पहले से योजना = going to, तुरंत निर्णय = will।",
          },
          examples: [
            {
              wrong: "The phone is ringing — I am going to answer it.",
              right: "The phone is ringing — I will answer it.",
              note: {
                bn: "ফোন বাজা দেখে ওই মুহূর্তে সিদ্ধান্ত নেওয়া হলো — তাৎক্ষণিক সিদ্ধান্তে will ব্যবহৃত হয়, going to নয়।",
                en: "The decision is made at the moment of speaking, so 'will' is the right choice.",
                hi: "बोलते ही निर्णय लिया गया, इसलिए 'will' सही है।",
              },
            },
            {
              wrong: "Look at those dark clouds — it will rain.",
              right: "Look at those dark clouds — it is going to rain.",
              note: {
                bn: "মেঘ দেখে ভবিষ্যদ্বাণী করা হচ্ছে, অর্থাৎ চোখে দেখা প্রমাণ আছে — এমন ক্ষেত্রে going to-ই প্রকৃত শোনায়।",
                en: "The prediction is based on present evidence, so 'be going to' sounds natural.",
                hi: "प्रमाण देखकर भविष्यवाणी हो रही है, इसलिए 'going to' बेहतर है।",
              },
            },
            {
              wrong: "We will meet the client tomorrow at 10 — I booked the room yesterday.",
              right: "We are meeting the client tomorrow at 10 — I booked the room yesterday.",
              note: {
                bn: "সময়-স্থান ঠিক করা ব্যবস্থাপনা বোঝাতে present continuous বেশি স্বাভাবিক।",
                en: "A fixed arrangement with a time and place usually takes the present continuous.",
                hi: "तय समय-स्थान वाली व्यवस्था के लिए present continuous स्वाभाविक है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "Past Continuous আর for/since — ছোট কিন্তু জরুরি",
            en: "Past Continuous and for/since",
            hi: "Past Continuous और for/since",
          },
          body: {
            bn: "অতীতের কোনো নির্দিষ্ট মুহূর্তে চলমান কাজ বোঝাতে was/were + verb-ing লাগে — 'At 9 pm I was cooking dinner'। এটা বাংলার '-ছিলাম' এর সাথে মিলে যায়: 'আমি পড়ছিলাম' = 'I was reading'। অন্যদিকে, কত দিন ধরে বোঝাতে for (সময়ের পরিমাণ: for two years, for a week) আর কোন সময় থেকে বোঝাতে since (শুরুর বিন্দু: since 2020, since Monday) লাগে — দুটোই present perfect-এর সাথে চলে: 'I have lived here for five years'। বাংলাভাষীরা প্রায়ই 'from' ব্যবহার করেন — 'I am living here from 2020' — এটা ভুল; বাংলার 'থেকে'-র এই প্রসঙ্গে ইংরেজি প্রতিশব্দ from নয়, since। আর was/were গুলিয়ে ফেলবেন না: I/he/she/it-এ was, you/we/they-তে were।",
            en: "Use was/were + verb-ing for an action in progress at a past moment: 'At 9 pm I was cooking dinner.' Use for with a length of time (for two years) and since with a starting point (since 2020), both inside the present perfect: 'I have lived here for five years.' Bengali speakers often say 'from 2020' — the right word here is since, not from. And keep was/were straight: was with I/he/she/it, were with you/we/they.",
            hi: "अतीत के किसी क्षण में चल रहे काम के लिए was/were + verb-ing: 'At 9 pm I was cooking dinner.' अवधि के लिए for (for two years), शुरुआती बिंदु के लिए since (since 2020) — दोनों present perfect के साथ: 'I have lived here for five years.' 'from 2020' नहीं, 'since 2020' कहें। was I/he/she/it के साथ, were you/we/they के साथ।",
          },
          examples: [
            {
              wrong: "Yesterday at 8 pm I cooked, so I did not hear the phone.",
              right: "Yesterday at 8 pm I was cooking, so I did not hear the phone.",
              note: {
                bn: "ওই নির্দিষ্ট মুহূর্তে কাজটা চলমান ছিল — তাই past continuous (was cooking) দরকার।",
                en: "The action was in progress at that moment, so the past continuous is needed.",
                hi: "उस क्षण काम चल रहा था, इसलिए past continuous ज़रूरी है।",
              },
            },
            {
              wrong: "I have been working in this company from 2021.",
              right: "I have been working in this company since 2021.",
              note: {
                bn: "শুরুর সময়ের বিন্দু বোঝাতে since; 'from' এখানে চলে না।",
                en: "Use 'since' for a starting point in time, not 'from'.",
                hi: "शुरुआती बिंदु के लिए 'since' आता है, 'from' नहीं।",
              },
            },
            {
              wrong: "They was waiting outside.",
              right: "They were waiting outside.",
              note: {
                bn: "they-র সাথে were বসে, was নয় — was শুধু I/he/she/it-এর সাথে হয়।",
                en: "'They' takes 'were'; 'was' only goes with I/he/she/it.",
                hi: "'they' के साथ 'were' आता है; 'was' केवल I/he/she/it के साथ।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "প্রতিদিন একটা কাল বেছে নিয়ে নিজের জীবনের ঘটনা দিয়ে ৫টা বাক্য লিখুন — tense শেখার সবচেয়ে কার্যকর উপায় নিয়ম রটা নয়, রোজ একটু লেখা।",
          en: "Pick one tense each day and write five sentences about your own life with it — daily writing beats memorizing rules.",
          hi: "हर दिन एक tense चुनकर अपने जीवन की घटनाओं पर पाँच वाक्य लिखें — नियम रटने से रोज़ लिखना बेहतर है।",
        },
        {
          bn: "সংকেত শব্দ মুখস্থ করুন: 'yesterday, ago, last' দেখলে past simple, আর 'since, just, ever, yet' দেখলে present perfect — অর্ধেক ভুল এখানেই শেষ।",
          en: "Memorize the signal words: yesterday/ago/last → past simple; since/just/ever/yet → present perfect.",
          hi: "संकेत शब्द याद रखें: yesterday/ago/last → past simple; since/just/ever/yet → present perfect।",
        },
        {
          bn: "কথা বলার আগে নিজেকে জিজ্ঞেস করুন: 'এটা কি এই মুহূর্তে চলছে?' — হ্যাঁ হলে be + verb-ing, না হলে simple — এই একটা প্রশ্নেই continuous জাতীয় ভুল প্রায় কমে যায়।",
          en: "Before speaking, ask yourself: is it happening right now? If yes, use be + verb-ing; if not, use the simple form.",
          hi: "बोलने से पहले सोचें: क्या यह इसी क्षण हो रहा है? हाँ तो be + verb-ing, वरना simple रूप।",
        },
        {
          bn: "বাংলা থেকে শব্দে শব্দে অনুবাদ না করে আগে ভাবুন 'কাজটা কখন ঘটেছে' — সময়টা ধরে কাল বাছলে অনুবাদজনিত ভুল অনেকটাই কমে যায়।",
          en: "Do not translate word by word from Bangla; first think when the action happened, then choose the tense.",
          hi: "बांग्ला से शब्दशः अनुवाद न करें; पहले सोचें काम कब हुआ, फिर tense चुनें।",
        },
      ],
    },
  },

  /* ── 1. Prepositions (in/on/at) ──────────────────────────────────────── */
  {
    id: "",
    topic: "Prepositions (in/on/at)",
    level: "intermediate",
    title: "Prepositions — in / on / at (Intermediate)",
    data: {
      title: {
        bn: "প্রিপজিশন — in / on / at (মধ্যম স্তর)",
        en: "Prepositions — in / on / at (Intermediate)",
        hi: "प्रेपोज़िशन — in / on / at (मध्यम स्तर)",
      },
      intro: {
        bn: "in, on, at — এই তিনটা ছোট শব্দের ভুল ইংরেজি বাক্যের মান সবচেয়ে বেশি বদলে দেয়। বাংলায় একটাই প্রত্যয় 'তে/এ/য়' সব কাজ করে — 'ঢাকায়', 'টেবিলে', 'সকাল ৮টায়' — কিন্তু ইংরেজিতে জায়গা আর সময়ের 'দানা' মোটা না সরু, সেটা দেখে শব্দ বদলাতে হয়। মোটা দাঁতের নিয়মটা হলো: বড় জায়গা-সময় = in, পৃষ্ঠ-নির্দিষ্ট দিন = on, সরু বিন্দু = at। এই পাঠ শেষে কোনটা কোথায় বসে সেটা তালিকা মুখস্থ না করেও অনুমান করতে পারবেন।",
        en: "In, on and at are small words with a big job. Bangla uses one ending for all of them, but English changes the word depending on how large the place or time is: large space/time = in, surface/day = on, exact point = at. This lesson gives you the system, not just a list to memorize.",
        hi: "in, on, at छोटे शब्द हैं पर असर बड़ा। बांग्ला एक ही प्रत्यय से सब दिखाता है, लेकिन अंग्रेज़ी में स्थान/समय की 'माप' देखकर शब्द बदलता है: बड़ा स्थान/समय = in, सतह/दिन = on, सटीक बिंदु = at। यह पाठ रटने की सूची नहीं, पूरा सिस्टम सिखाता है।",
      },
      sections: [
        {
          heading: {
            bn: "'in' — বড় জায়গা ও লম্বা সময়",
            en: "'in' for large spaces and longer periods",
            hi: "'in' — बड़े स्थान और लंबी अवधि",
          },
          body: {
            bn: "কোনো জায়গার ভেতরে বা 'সীমানার মধ্যে' কিছু থাকলে in বসে — in a room, in Dhaka, in Bangladesh, in the kitchen। সময়ের ক্ষেত্রেও লম্বা অংশে in লাগে: বছর (in 2025), মাস (in March), ঋতু (in winter), আর দিনের অংশ (in the morning, in the evening)। সহজ টেকনিক: বাংলায় যেখানে 'ভিতরে' বা 'অংশে' ভাবতে পারেন, সেখানে in — যেমন 'মার্চ মাসে' মানে মার্চের ভেতরের কোনো সময়। একটা প্রতারক জায়গা মনে রাখুন: 'in the night' নয়, 'at night' — এই ব্যতিক্রমটা আলাদা করে মুখস্থ করতে হবে।",
            en: "Use in for spaces with boundaries — in a room, in Dhaka, in the kitchen — and for longer time periods: years (in 2025), months (in March), seasons (in winter) and parts of the day (in the morning). A handy trick: if you can think 'inside' or 'part of', choose in. One famous exception to memorize: at night, not 'in the night'.",
            hi: "सीमा वाले स्थान के लिए in — in a room, in Dhaka, in the kitchen; लंबी अवधि के लिए भी in: in 2025, in March, in winter, in the morning। आसान सूत्र: 'अंदर' या 'के भीतर' सोच सकें तो in। एक प्रसिद्ध अपवाद याद रखें: 'at night' होता है, 'in the night' नहीं।",
          },
          examples: [
            {
              wrong: "I was born on March.",
              right: "I was born in March.",
              note: {
                bn: "মাসের নামে in বসে; 'on' শুধু নির্দিষ্ট দিন-তারিখে।",
                en: "Months take 'in'; 'on' is only for specific days and dates.",
                hi: "महीनों के साथ 'in' आता है; 'on' केवल निश्चित दिन-तारीख़ के लिए।",
              },
            },
            {
              wrong: "He is waiting on the classroom.",
              right: "He is waiting in the classroom.",
              note: {
                bn: "ক্লাসরুমের ভেতর — সীমানাবদ্ধ স্থান, তাই in; 'on' পৃষ্ঠের উপর বোঝায়।",
                en: "Inside a bounded space takes 'in'; 'on' means on a surface.",
                hi: "सीमाबद्ध स्थान के लिए 'in'; 'on' सतह दर्शाता है।",
              },
            },
            {
              wrong: "I study in the night.",
              right: "I study at night.",
              note: {
                bn: "'রাতে' বোঝাতে স্থায়ী প্রয়োগ at night — in the night ইংরেজিতে চলে না।",
                en: "The fixed expression is 'at night', not 'in the night'.",
                hi: "स्थायी मुहावरा 'at night' है, 'in the night' नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "'on' — দিন, তারিখ আর পৃষ্ঠ",
            en: "'on' for days, dates and surfaces",
            hi: "'on' — दिन, तारीख़ और सतह",
          },
          body: {
            bn: "নির্দিষ্ট দিন বা তারিখে on বসে: on Friday, on 26 March, on my birthday, on Eid day। মাসের ভেতরের দিনও দিনই — 'in March' কিন্তু 'on 15 March' — দানা যত সরু হয়, on/at-এর দিকে যেতে হয়। জায়গার ক্ষেত্রে কোনো কিছুর উপরে বা পৃষ্ঠে ছুঁয়ে থাকলে on: on the table, on the wall, on the floor। আরেকটা গুরুত্বপূর্ণ ব্যবহার যোগাযোগ-মাধ্যম: on TV, on the radio, on the internet, on WhatsApp, on my phone — এগুলো সব on। বাংলাভাষীরা প্রায়ই 'in Friday' বা 'in the table' বলে ফেলেন — মনে রাখুন, দিন আর পৃষ্ঠ দুটোই on-এর এলাকা।",
            en: "Use on for specific days and dates: on Friday, on 26 March, on my birthday — even inside a month, once a day is named it takes on ('in March' but 'on 15 March'). For places, on means touching a surface: on the table, on the wall. Media also takes on: on TV, on the radio, on the internet, on WhatsApp. Remember: days and surfaces both belong to on.",
            hi: "निश्चित दिन-तारीख़ के लिए on: on Friday, on 26 March, on my birthday — महीने के भीतर का दिन भी on लेता है ('in March' पर 'on 15 March')। सतह पर रखी चीज़ के लिए भी on: on the table, on the wall। मीडिया भी on लेता है: on TV, on the radio, on WhatsApp। याद रखें: दिन और सतह — दोनों 'on' के क्षेत्र।",
          },
          examples: [
            {
              wrong: "We have a meeting in Monday.",
              right: "We have a meeting on Monday.",
              note: {
                bn: "সপ্তাহের দিনে on বসে, in নয়।",
                en: "Days of the week take 'on', never 'in'.",
                hi: "सप्ताह के दिनों के साथ 'on' आता है, 'in' नहीं।",
              },
            },
            {
              wrong: "Your keys are in the table.",
              right: "Your keys are on the table.",
              note: {
                bn: "টেবিলের উপরে — পৃষ্ঠে ছুঁয়ে থাকা, তাই on; 'in' বললে টেবিলের ভেতরে বোঝাবে।",
                en: "On top of a surface takes 'on'; 'in' would mean inside it.",
                hi: "सतह पर रखी चीज़ के लिए 'on'; 'in' का मतलब अंदर होता है।",
              },
            },
            {
              wrong: "I saw the news in TV last night.",
              right: "I saw the news on TV last night.",
              note: {
                bn: "মাধ্যমে প্রচারিত জিনিস on TV / on the radio / on the internet — মাধ্যম মানেই on।",
                en: "Media takes 'on': on TV, on the radio, on the internet.",
                hi: "मीडिया के साथ 'on' आता है: on TV, on the internet।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "'at' — সরু বিন্দু: সময়, স্থান আর ইভেন্ট",
            en: "'at' for exact points: times, places and events",
            hi: "'at' — सटीक बिंदु: समय, स्थान और आयोजन",
          },
          body: {
            bn: "সবচেয়ে সরু বিন্দুতে at বসে। সময়ে: ঘণ্টা-মিনিটে at 8 o'clock, at 6:30 pm; পূর্ণ রাত-দুপুরে at midnight, at noon। স্থানে বিন্দু বোঝালে at: at the door, at the bus stop, at the traffic light — যেখানে 'ঠিক কোন বিন্দুতে' তা-ই গুরুত্বপূর্ণ। ইভেন্ট আর প্রতিষ্ঠানেও at: at a wedding, at the meeting, at university, at work। বাংলার 'সকাল ৮টায় দেখা হবে' = 'See you at 8' — ঘড়ার সময়ের সাথে কখনো in বা on চলবে না। একটা সূক্ষ্মতা: প্রতিষ্ঠান মোটামুটি বোঝাতে at university, কিন্তু ভবনের ভেতরে নির্দিষ্ট করতে in the university library — একই জায়গায় দুই প্রিপজিশন সম্ভব, দৃষ্টিভঙ্গি বদলালে শব্দ বদলায়।",
            en: "Use at for the narrowest points. Time: at 8 o'clock, at 6:30 pm, at midnight, at noon. Place: at the door, at the bus stop, at the traffic light — when the exact point matters. Also at events and institutions: at a wedding, at the meeting, at university, at work. 'See you at 8' — never in or on with clock times. A subtle point: 'at university' treats it as an institution, while 'in the university library' treats it as a building — same place, different point of view.",
            hi: "सबसे सटीक बिंदु पर at। समय: at 8 o'clock, at 6:30 pm, at midnight, at noon। स्थान: at the door, at the bus stop, at the traffic light — जहाँ सटीक बिंदु मायने रखता है। आयोजन/संस्थान: at a wedding, at the meeting, at university, at work। घड़ी के समय के साथ कभी in/on नहीं: 'See you at 8'। 'at university' संस्थान, 'in the university library' भवन — नज़रिया बदलता है तो शब्द बदलता है।",
          },
          examples: [
            {
              wrong: "The class starts in 9 am.",
              right: "The class starts at 9 am.",
              note: {
                bn: "ঘড়ার সময়ে সবসময় at — 'in 9 am' বাক্য ইংরেজিতে চলেই না।",
                en: "Clock times always take 'at'.",
                hi: "घड़ी के समय के साथ सदा 'at' आता है।",
              },
            },
            {
              wrong: "I will meet you on the bus stop.",
              right: "I will meet you at the bus stop.",
              note: {
                bn: "বাস স্টপ একটা বিন্দু-জায়গা — 'ওই পয়েন্টে দেখা' বোঝাতে at।",
                en: "A bus stop is a point on a route, so use 'at'.",
                hi: "बस स्टॉप एक बिंदु है, इसलिए 'at'।",
              },
            },
            {
              wrong: "She is in work right now.",
              right: "She is at work right now.",
              note: {
                bn: "'কর্মরত অবস্থায়' বোঝাতে স্থায়ী প্রয়োগ at work / at school — in নয়।",
                en: "The fixed expression is 'at work' (or 'at school'), not 'in work'.",
                hi: "स्थायी प्रयोग 'at work' है, 'in work' नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "স্থায়ী প্রয়োগ: যানবাহন আর verb-এর সঙ্গে জোড়া প্রিপজিশন",
            en: "Fixed uses: transport and verbs that carry prepositions",
            hi: "स्थायी प्रयोग: वाहन और क्रिया से जुड़े प्रेपोज़िशन",
          },
          body: {
            bn: "কিছু প্রয়োগ নিয়মের বাইরে মুখস্থ করতে হয়। যানবাহনে: গাড়ি-ট্যাক্সিতে in (in a car, in a taxi), কিন্তু বাস-ট্রেন-প্লেন-বাইকে on (on the bus, on the train, on a plane, on my bike) — যে যানের ভেতরে হেঁটে চলা যায়, সেখানে on। কিছু adjective আর verb নির্দিষ্ট প্রিপজিশন টেনে আনে: good at math (in নয়), married to someone (with নয়), depend on someone, listen to music; আবার arrive in Dhaka (শহরে) কিন্তু arrive at the station (স্টেশনে)। বাংলাভাষীদের সবচেয়ে প্রিয় ভুল 'discuss about the matter' — discuss-এর সাথে about লাগে না, ঠিক বাক্য 'discuss the matter'। এই জোড়াগুলো আলাদা নোটবুকে লিখে রাখুন, কারণ এগুলো সবসময় যুক্তি দিয়ে বোঝানো যায় না।",
            en: "Some uses must simply be memorized. Transport: in a car, in a taxi, but on the bus, on the train, on a plane — larger vehicles you can walk around in take on. Many verbs and adjectives carry a fixed preposition: good at math, married to someone, depend on someone, listen to music; also arrive in Dhaka (city) but arrive at the station. The classic Bengali-speaker mistake is 'discuss about the matter' — discuss takes no preposition: 'discuss the matter'. Keep these pairs in a notebook; they do not always follow logic.",
            hi: "कुछ प्रयोग रटने ही होंगे। वाहन: in a car, in a taxi, पर on the bus, on the train, on a plane — बड़े वाहन 'on' लेते हैं। कुछ शब्द निश्चित प्रेपोज़िशन लेते हैं: good at math, married to someone, depend on someone, listen to music; और arrive in Dhaka (शहर) पर arrive at the station। आम गलती 'discuss about the matter' है — 'discuss' के साथ 'about' नहीं: 'discuss the matter'। इन जोड़ों को नोटबुक में लिखें।",
          },
          examples: [
            {
              wrong: "We travelled to Sylhet on a private car.",
              right: "We travelled to Sylhet in a private car.",
              note: {
                bn: "গাড়ি-ট্যাক্সিতে in; on শুধু বাস-ট্রেন-প্লেন-বাইকের মতো বড় যানে।",
                en: "Cars and taxis take 'in'; 'on' is for buses, trains, planes and bikes.",
                hi: "कार-टैक्सी के साथ 'in'; 'on' बस-ट्रेन-विमान-बाइक के लिए।",
              },
            },
            {
              wrong: "She is married with a doctor.",
              right: "She is married to a doctor.",
              note: {
                bn: "married-এর পরে to বসে, with নয় — বাংলার 'সাথে' ভাবলেই বহু মানুষ with-এর ফাঁদে পড়ে যান।",
                en: "'Married' takes 'to', not 'with' — a trap because Bangla uses 'shathe' (with).",
                hi: "'married' के साथ 'to' आता है, 'with' नहीं।",
              },
            },
            {
              wrong: "Let us discuss about the plan tomorrow.",
              right: "Let us discuss the plan tomorrow.",
              note: {
                bn: "'discuss' নিজেই 'সম্পর্কে আলোচনা করা' বোঝায়, তাই সাথে about লাগবে না।",
                en: "'Discuss' already includes the idea of 'about', so no preposition follows it.",
                hi: "'discuss' में 'about' का भाव निहित है, अतः अलग से 'about' नहीं।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "দানার ছবি কল্পনা করুন: সময়-জায়গা যত বড়, শব্দ তত 'in'; সরু বিন্দু হলে 'at'; মাঝে দিন-পৃষ্ঠে 'on' — এই এক লাইনেই বেশিরভাগ প্রশ্ন মিটে যায়।",
          en: "Picture size: big space/time = in, day/surface = on, exact point = at. One line covers most cases.",
          hi: "आकार की कल्पना कीजिए: बड़ा = in, दिन/सतह = on, बिंदु = at। एक पंक्ति में बहुत कुछ सुलझ जाता है।",
        },
        {
          bn: "ফোনে মেসেজ লেখার সময় ইচ্ছা করে লিখুন 'on WhatsApp', 'at 9 pm', 'in the morning' — লিখতে লিখতে এগুলো হাতের অভ্যাস হয়ে যায়।",
          en: "While texting, deliberately write 'on WhatsApp', 'at 9 pm', 'in the morning' — habit forms through use.",
          hi: "मैसेज लिखते समय जान-बूझकर 'on WhatsApp', 'at 9 pm', 'in the morning' लिखें — अभ्यास से आदत बनती है।",
        },
        {
          bn: "নাটক-ভিডিও শুনে প্যাটার্ন ধরুন: native কোন প্রিপজিশন ব্যবহার করে, পুরো ফ্রেজটা কপি করুন — 'at night', 'on time', 'in a hurry' একক শব্দ নয়, জোড়া হিসেবে মুখস্থ হোক।",
          en: "Copy whole phrases from shows, not single words — memorize 'at night', 'on time', 'in a hurry' as units.",
          hi: "शो से पूरे फ़्रेज़ कॉपी करें, अलग शब्द नहीं — 'at night', 'on time', 'in a hurry' इकाई के रूप में याद करें।",
        },
        {
          bn: "সন্দেহ হলে ছোট প্রশ্ন করুন: 'ভেতরে, উপরে, নাকি বিন্দুতে?' — উত্তরটাই প্রিপজিশন বেছে দেবে।",
          en: "When unsure, ask: inside, on a surface, or an exact point? The answer picks the preposition.",
          hi: "संदेह हो तो पूछें: अंदर, सतह पर या बिंदु पर? उत्तर ही प्रेपोज़िशन चुन देगा।",
        },
      ],
    },
  },

  /* ── 2. Articles (a/an/the) ──────────────────────────────────────────── */
  {
    id: "",
    topic: "Articles (a/an/the)",
    level: "intermediate",
    title: "Articles — a / an / the (Intermediate)",
    data: {
      title: {
        bn: "আর্টিকেল — a / an / the (মধ্যম স্তর)",
        en: "Articles — a / an / the (Intermediate)",
        hi: "आर्टिकल — a / an / the (मध्यम स्तर)",
      },
      intro: {
        bn: "বাংলা ভাষায় a, an, the-র মতো কোনো শব্দ নেই — তাই বাংলাভাষীদের জন্য আর্টিকেলই ইংরেজি ব্যাকরণের সবচেয়ে অচেনা জিনিস। 'I am reading book' বা 'He is best player' — এই ভুলগুলো শুধু আর্টিকেল বাদ পড়ায় হয়। ভালো খবর হলো, বাছাইটা কয়েকটা সহজ প্রশ্নে নামিয়ে আনা যায়: শ্রোতা কি জানে আমি কোনটার কথা বলছি? একক গোনা যায় এমন জিনিস তো? এই পাঠে সেই প্রশ্নগুলো দিয়েই a, an, the আর 'কিছুই না' — চারটা পথ শিখবেন।",
        en: "Bangla has no articles, so a, an and the are the most unfamiliar part of English grammar for Bengali speakers. Sentences like 'I am reading book' or 'He is best player' go wrong only because an article is missing. The good news: choosing the article comes down to one question — does the listener already know which one I mean? This lesson turns that question into a habit.",
        hi: "बांग्ला में आर्टिकल नहीं होते, इसलिए a, an, the बांग्लाभाषियों के लिए सबसे अजनबी हैं। 'I am reading book' या 'He is best player' जैसी गलतियाँ सिर्फ़ आर्टिकल के गायब होने से होती हैं। असली सवाल एक ही है: श्रोता जानता है मैं किसकी बात कर रहा हूँ? यही पाठ उस सवाल को आदत बना देगा।",
      },
      sections: [
        {
          heading: {
            bn: "a নাকি an — অক্ষর নয়, উচ্চারণের আওয়াজ ঠিক করে",
            en: "a or an — the sound, not the letter, decides",
            hi: "a या an — अक्षर नहीं, ध्वनि तय करती है",
          },
          body: {
            bn: "সাধারণ ভুল ধারণা হলো, a-e-i-o-u অক্ষর দিয়ে শুরু হলে an বসে। আসল নিয়ম হলো উচ্চারণ: শব্দের প্রথম আওয়াজ স্বরধ্বনি হলে an, ব্যঞ্জনধ্বনি হলে a। তাই 'an hour' (h আওয়াজ হয় না), কিন্তু 'a university' (u-এর উচ্চারণ 'ইউ' — য-আওয়াজ), 'a European country'। সংক্ষিপ্ত রূপেও আওয়াজ কাজ করে: 'an MBA' (শুরু 'এম'-আওয়াজ) কিন্তু 'a BSc' (শুরু ব্-আওয়াজ)। একইভাবে 'an honest man' কিন্তু 'a hotel' (h উচ্চারিত)। টেকনিক সহজ: শব্দটা জোরে বলে দেখুন, প্রথম আওয়াজ কী আসে — স্বরধ্বনির আওয়াজ হলে an।",
            en: "The common myth is that an goes before the letters a, e, i, o, u. The real rule is sound: if the word starts with a vowel sound, use an; if it starts with a consonant sound, use a. That is why we say 'an hour' (the h is silent) but 'a university' (u sounds like 'you') and 'a European country'. Acronyms follow sound too: 'an MBA' (starts with /em/) but 'a BSc'. Say the word aloud — if the first sound is a vowel sound, choose an.",
            hi: "आम भ्रम: a-e-i-o-u अक्षर से शुरू होने पर an। असली नियम ध्वनि का है: स्वर-ध्वनि से शुरू हो तो an — 'an hour', 'an MBA'; व्यंजन-ध्वनि हो तो a — 'a university', 'a BSc'। इसी तरह 'an honest man' पर 'a hotel' (h उच्चारित)। शब्द बोलकर सुनिए, पहली ध्वनि ही तय करेगी।",
          },
          examples: [
            {
              wrong: "He returned after a hour.",
              right: "He returned after an hour.",
              note: {
                bn: "'hour'-এর h উচ্চারিত হয় না — প্রথম আওয়াজ স্বরধ্বনি, তাই an।",
                en: "The h in 'hour' is silent, so the first sound is a vowel — use 'an'.",
                hi: "'hour' में h अनुच्चारित है, पहली ध्वनि स्वर है, इसलिए 'an'।",
              },
            },
            {
              wrong: "She studies at an university in Rajshahi.",
              right: "She studies at a university in Rajshahi.",
              note: {
                bn: "'university'-র প্রথম আওয়াজ 'ইউ' — ব্যঞ্জনধ্বনির মতো, তাই a।",
                en: "'University' starts with a /y/ sound, so it takes 'a'.",
                hi: "'university' की पहली ध्वनि /y/ है, इसलिए 'a'।",
              },
            },
            {
              wrong: "He gave me an useful tip.",
              right: "He gave me a useful tip.",
              note: {
                bn: "'useful'-এর প্রথম আওয়াজ 'ইউ' — a হবে; অক্ষর দেখে নয়, আওয়াজ দেখে আর্টিকেল বাছুন।",
                en: "'Useful' starts with /y/, so 'a' is correct — go by sound, not spelling.",
                hi: "'useful' की पहली ध्वनि /y/ है, इसलिए 'a'; वर्तनी नहीं, ध्वनि देखें।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "'the' — যখন কথার দুই প্রান্তেই 'কোনটা' পরিষ্কার",
            en: "'the' — when both sides know which one",
            hi: "'the' — जब दोनों को पता हो कि कौन-सा",
          },
          body: {
            bn: "the ব্যবহার হয় যখন শ্রোতা বুঝতে পারে আপনি কোনটার কথা বলছেন। তিনটা প্রধান ক্ষেত্র: (১) দ্বিতীয় উল্লেখ — প্রথমবার 'a dog' বললেন, পরের বার সেই কুকুরটাই 'the dog'। (২) পরিস্থিতি থেকে স্পষ্ট — ঘরে ঢুকে 'close the door' বললেন, দরজা একাধিক থাকলেও সবাই জানে কোন দরজা। (৩) অনন্য বা শ্রেষ্ঠ জিনিস — the sun, the moon, the internet, আর superlative-এর আগে: the best player, the tallest building। বাংলাভাষীদের ভুল দুই দিকে হয়: 'He is best player' (the বাদ পড়ে গেল), আবার দরকার নেই সেখানে the ঢোকানো — 'the Bangladesh' নয়, শুধু 'Bangladesh'।",
            en: "Use the when the listener knows exactly which one you mean. Three main cases: second mention (first 'a dog', then 'the dog'), context makes it obvious ('close the door' in a room), and unique or superlative things (the sun, the internet, the best player, the tallest building). The typical Bengali-speaker mistakes go both ways: dropping the — 'He is best player' — and adding it where it does not belong — not 'the Bangladesh', just 'Bangladesh'.",
            hi: "the तब जब श्रोता जानता हो आप किसकी बात कर रहे हैं। तीन मुख्य स्थिति: दूसरा उल्लेख ('a dog' → 'the dog'), संदर्भ से स्पष्ट ('close the door'), और अनोखी या उत्कृष्ट चीज़ें (the sun, the internet, the best player)। गलतियाँ दो तरफ़ होती हैं: 'He is best player' (the छूट गया) और 'the Bangladesh' (the ज़रूरी नहीं)।",
          },
          examples: [
            {
              wrong: "I bought a shirt yesterday. A shirt is blue.",
              right: "I bought a shirt yesterday. The shirt is blue.",
              note: {
                bn: "দ্বিতীয়বার বলার সময় শ্রোতা জানে কোন শার্ট — তাই the shirt।",
                en: "On the second mention the listener knows which shirt, so use 'the'.",
                hi: "दूसरे उल्लेख पर श्रोता जानता है कौन-सी शर्ट, इसलिए 'the'।",
              },
            },
            {
              wrong: "Mount Everest is highest mountain in the world.",
              right: "Mount Everest is the highest mountain in the world.",
              note: {
                bn: "superlative (highest, best, tallest)-এর আগে the আবশ্যক।",
                en: "Superlatives always take 'the'.",
                hi: "superlative के साथ 'the' अनिवार्य है।",
              },
            },
            {
              wrong: "The Bangladesh is a beautiful country.",
              right: "Bangladesh is a beautiful country.",
              note: {
                bn: "বেশিরভাগ দেশের নামের আগে the বসে না — the USA, the UK জাতীয় ব্যতিক্রম ছাড়া।",
                en: "Most country names take no article (exceptions: the USA, the UK).",
                hi: "अधिकांश देशों के नाम से पहले 'the' नहीं आता (अपवाद: the USA, the UK)।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "কখন আর্টিকেল লাগবেই না — zero article",
            en: "When to use no article at all",
            hi: "कब आर्टिकल नहीं लगता — zero article",
          },
          body: {
            bn: "সাধারণভাবে কোনো জিনিসের পুরো জাত বোঝালে বহুবচন বা অগণন বিশেষ্যের আগে কোনো আর্টিকেল লাগে না: 'Dogs are loyal', 'Water is life', 'Rice grows in Bangladesh'। ভোজের নামেও আর্টিকেল নেই — have breakfast, have lunch, at dinner — তবে নির্দিষ্ট কোনো ভোজ বোঝালে the চলে: 'The lunch my mother cooked was amazing'। ভাষা, খেলা আর পড়ার বিষয়েও কিছু নয়: English, football, physics — 'the English' বললে সেটা ইংরেজ 'জাতি' বোঝায়, ভাষা নয়। বাংলাভাষীদের আরেক প্রিয় ভুল: 'I play the cricket' — খেলার নামে আর্টিকেল নেই, ঠিক বাক্য 'I play cricket'।",
            en: "No article is needed for general plurals and uncountable nouns: 'Dogs are loyal', 'Water is life', 'Rice grows in Bangladesh'. Meals also go bare — have breakfast, at dinner — unless a specific meal is meant ('The lunch my mother cooked was amazing'). Languages, sports and subjects take nothing: English, football, physics ('the English' means the people, not the language). Another classic Bengali-speaker slip is 'I play the cricket' — sports take no article: 'I play cricket'.",
            hi: "सामान्य बहुवचन और अगणन संज्ञा में आर्टिकल नहीं: 'Dogs are loyal', 'Water is life'। भोजन में भी नहीं: have breakfast, at dinner — विशिष्ट भोजन हो तो the चलेगा। भाषा-खेल-विषय में भी नहीं: English, football, physics ('the English' = लोग, भाषा नहीं)। 'I play the cricket' गलत — सही है 'I play cricket'।",
          },
          examples: [
            {
              wrong: "The honesty is the best policy.",
              right: "Honesty is the best policy.",
              note: {
                bn: "প্রথম 'honesty' অগণন বিশেষ্যের সাধারণ উল্লেখ — আর্টিকেল চলবে না; 'best policy'-র আগে the দরকার, কিন্তু honesty-র আগে নয়।",
                en: "The first 'honesty' is an uncountable noun used in general — no article; only 'best policy' takes 'the'.",
                hi: "पहला 'honesty' अगणन सामान्य उल्लेख है — बिना आर्टिकल; केवल 'best policy' के साथ 'the'।",
              },
            },
            {
              wrong: "I had the breakfast at 8 and went to the office.",
              right: "I had breakfast at 8 and went to the office.",
              note: {
                bn: "ভোজের সাধারণ উল্লেখে আর্টিকেল নেই — have breakfast / have lunch / have dinner।",
                en: "General meals take no article: have breakfast, have dinner.",
                hi: "भोजन के सामान्य उल्लेख में आर्टिकल नहीं: have breakfast।",
              },
            },
            {
              wrong: "My sister is learning the English these days.",
              right: "My sister is learning English these days.",
              note: {
                bn: "ভাষার নামে আর্টিকেল লাগে না; 'the English' বললে ইংরেজ জাতি বোঝায়।",
                en: "Language names take no article; 'the English' means the English people.",
                hi: "भाषाओं के साथ आर्टिकल नहीं; 'the English' का अर्थ अंग्रेज़ लोग है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "বাংলাভাষীর জন্য দ্রুত চেকলিস্ট",
            en: "A quick checklist for Bengali speakers",
            hi: "बांग्लाभाषी के लिए त्वरित चेकलिस्ट",
          },
          body: {
            bn: "যেহেতু বাংলায় আর্টিকেল নেই, লেখা শেষে প্রতিটা বিশেষ্যের সামনে দাঁড়িয়ে তিনটা প্রশ্ন করুন। এক: এটা কি একক, গোনা যায় এমন জিনিস? হলে a/an বা the — দুটোর একটা লাগবেই, খালি রাখা যাবে না ('I bought car' ভুল)। দুই: শ্রোতা কি জানে কোনটার কথা বলছি? জানলে the, প্রথম উল্লেখ হলে a/an। তিন: জিনিসটা কি সাধারণ বহুবচন, অগণন, খেলা, ভাষা বা ভোজ? হলে খালি। প্র্যাকটিক্যাল ট্রিক: নিজের প্যারাগ্রাফ পড়ে এমন সব singular countable noun খুঁজুন যার সামনে কোনো আর্টিকেল বা my/some/this নেই — শতকরা ৯০ ভাগ ক্ষেত্রে সেখানেই ভুল লুকিয়ে থাকে।",
            en: "Since Bangla has no articles, check every noun after writing. One: is it a single countable thing? Then it must take a/an or the — 'I bought car' is wrong. Two: does the listener know which one? Then the; if it is the first mention, a/an. Three: is it a general plural, uncountable, sport, language or meal? Then leave it bare. A practical trick: read your paragraph and underline every singular countable noun with no article and no my/some/this in front — that is where 90 percent of article mistakes live.",
            hi: "लेखन के बाद हर संज्ञा पर तीन सवाल: (१) एक गिनने योग्य चीज़? तो a/an या the अनिवार्य — 'I bought car' गलत। (२) श्रोता जानता है कौन-सी? तो the; पहला उल्लेख हो तो a/an। (३) सामान्य बहुवचन/अगणन/खेल/भाषा/भोजन? तो खाली। ट्रिक: अपने पैराग्राफ में बिना आर्टिकल वाले singular countable noun रेखांकित करें — ९०% गलतियाँ वहीं होती हैं।",
          },
          examples: [
            {
              wrong: "I am reading book about history of Bengal.",
              right: "I am reading a book about the history of Bengal.",
              note: {
                bn: "একটা বই — a book; বাংলার নির্দিষ্ট ইতিহাস — the history; এক বাক্যেই দুই নিয়মের প্রয়োগ।",
                en: "One book = 'a book'; the specific history = 'the history of Bengal'.",
                hi: "एक किताब = 'a book'; विशिष्ट इतिहास = 'the history of Bengal'।",
              },
            },
            {
              wrong: "We watched movie last night.",
              right: "We watched a movie last night.",
              note: {
                bn: "'movie' গোনা যায় এবং শ্রোতা এখনো জানে না কোন সিনেমা — তাই a।",
                en: "'Movie' is countable and the listener does not know which one yet, so 'a'.",
                hi: "'movie' गणनीय है और श्रोता नहीं जानता कौन-सी, इसलिए 'a'।",
              },
            },
            {
              wrong: "Bangladesh government has announced new plan.",
              right: "The Bangladesh government has announced a new plan.",
              note: {
                bn: "নির্দিষ্ট সরকার — the Bangladesh government; প্রথম উল্লেখের পরিকল্পনা — a new plan; দুটোই চেকলিস্টের প্রশ্ন দুইয়ের উত্তর।",
                en: "A specific government takes 'the'; a first-mention plan takes 'a'.",
                hi: "विशिष्ट सरकार = 'the'; पहला उल्लेख = 'a'।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "পড়ার সময় প্রতিটা the/a/an দাগিয়ে পড়ুন — native লেখক কোথায় the বসান আর কোথায় কিছুই বসান না, চোখে দেখা প্যাটার্নই সবচেয়ে ভালো শিক্ষক।",
          en: "While reading, highlight every article — noticing where native writers put 'the' and where they put nothing is the best teacher.",
          hi: "पढ़ते समय हर आर्टिकल हाइलाइट करें — native लेखक कहाँ 'the' लगाते हैं और कहाँ कुछ नहीं, यही सबसे अच्छा शिक्षक है।",
        },
        {
          bn: "superlative (best, tallest) আর 'of'-জোড়া নির্দিষ্ট বাক্যে the-এর জায়গা প্রায় নিশ্চিত — এই দুই সংকেত মুখস্থ রাখুন।",
          en: "Superlatives and 'of'-phrases almost always need 'the' — memorize these two signals.",
          hi: "superlative और 'of' वाले वाक्यांश में लगभग सदा 'the' आता है — ये दो संकेत याद रखें।",
        },
        {
          bn: "কথা বলার সময় একক গোনা যায় এমন প্রতিটা শব্দের আগে এক সেকেন্ড থামুন — এই থামাটাই মুখকে a/an/the অটোমেটিক বসাতে শেখায়।",
          en: "Before each singular countable noun, pause for a second — the pause trains your mouth to add a/an/the automatically.",
          hi: "हर singular countable संज्ञा से पहले एक पल रुकें — यह ठहराव a/an/the को स्वाभाविक बना देगा।",
        },
        {
          bn: "নিজের লেখা পুরনো প্যারাগ্রাফ খুঁজে বের করুন, শুধু আর্টিকেলের ভুল ঠিক করুন — নিজের ভুল নিজের চোখে দেখলে এক সপ্তাহেই ভুল অর্ধেক নেমে আসে।",
          en: "Take an old paragraph you wrote and fix only the articles — spotting your own mistakes halves them within a week.",
          hi: "अपना पुराना पैराग्राफ निकालें और केवल आर्टिकल सुधारें — अपनी गलतियाँ देखने से एक सप्ताह में आधी कम हो जाती हैं।",
        },
      ],
    },
  },

  /* ── 3. Conditionals ─────────────────────────────────────────────────── */
  {
    id: "",
    topic: "Conditionals",
    level: "intermediate",
    title: "Conditionals (Intermediate)",
    data: {
      title: {
        bn: "কন্ডিশনাল — if-বাক্য (মধ্যম স্তর)",
        en: "Conditionals (Intermediate)",
        hi: "कन्डिशनल — if वाक्य (मध्यम स्तर)",
      },
      intro: {
        bn: "আমাদের কথায় প্রতিদিন 'যদি' শব্দটা লাগে — 'যদি বৃষ্টি হয়, তাহলে যাব না', 'যদি টাকা থাকত, কিনতাম'। ইংরেজিতে এই 'যদি' বাক্যগুলো ঠিক কতটুকু বাস্তব বা সম্ভাবনার কথা বলছে, সেই অনুযায়ী verb-এর রূপ বদলায় — আর এখানেই বাংলাভাষীদের সবচেয়ে বড় ধাক্কা। কারণ বাংলায় 'করত', 'করলে' একটাই রূপ প্রায় সব কাল্পনিক বাক্যে চলে যায়, কিন্তু ইংরেজিতে চারটা আলাদা ফর্মুলা আছে — zero, first, second, third conditional। এই পাঠে চারটা ফর্মুলাই দৈনন্দিন জীবনের উদাহরণে শিখবেন।",
        en: "We use 'if' sentences every day, and English changes the verb form depending on how real the situation is. This is the hardest jump for Bengali speakers, because Bangla uses one form for almost all imaginary situations. English has four main formulas — zero, first, second and third conditionals — and this lesson covers all four with everyday examples.",
        hi: "हर रोज़ हम 'if' वाले वाक्य बोलते हैं, और अंग्रेज़ी स्थिति कितनी वास्तविक है, उसके अनुसार क्रिया रूप बदलती है। यहीं बांग्लाभाषियों को सबसे कठिनाई होती है, क्योंकि बांग्ला में कल्पना के लिए लगभग एक ही रूप चलता है। अंग्रेज़ी के चार मुख्य फ़ॉर्मूले हैं — zero, first, second, third conditional।",
      },
      sections: [
        {
          heading: {
            bn: "Zero আর First conditional — বাস্তব শর্ত",
            en: "Zero and First conditional — real conditions",
            hi: "Zero और First conditional — वास्तविक शर्तें",
          },
          body: {
            bn: "Zero conditional বোঝায় সবসময় সত্য ঘটনা বা নিয়ম — দুই অংশেই simple present বসে: 'If you heat ice, it melts'। বাংলার 'গরম করলে বরফ গলে'-র হুবহু ভাবানুবাদ। First conditional বোঝায় ভবিষ্যতে সত্যিই ঘটতে পারে এমন শর্ত — if-অংশে present simple, ফলাফল-অংশে will + verb: 'If it rains tomorrow, I will stay home'। এখানে বাংলাভাষীদের সবচেয়ে প্রিয় ভুল 'If it will rain' — মনে রাখবেন, if-এর পরে will আসবে না, যদিও কথাটা ভবিষ্যৎ সম্পর্কে; ভবিষ্যৎটা ফলাফল অংশের will-এই চলে আসে।",
            en: "The zero conditional states facts and rules: simple present in both parts — 'If you heat ice, it melts.' The first conditional is for real future possibilities: present simple after if, will + verb in the result — 'If it rains tomorrow, I will stay home.' The most common Bengali-speaker mistake here is 'If it will rain' — never put will in the if-part; the future already lives in the result clause.",
            hi: "Zero conditional — सदा सत्य बातें या नियम, दोनों भागों में simple present: 'If you heat ice, it melts.' First conditional — भविष्य में वास्तव में संभव शर्त: if के बाद present simple, परिणाम में will + verb: 'If it rains tomorrow, I will stay home.' सबसे आम गलती 'If it will rain' है — if-भाग में will कभी न लगाएँ।",
          },
          examples: [
            {
              wrong: "If you will study hard, you will pass the exam.",
              right: "If you study hard, you will pass the exam.",
              note: {
                bn: "if-অংশে present simple, will শুধু ফলাফলে — দুই জায়গায় will বসে না।",
                en: "Present simple goes after 'if'; 'will' belongs only in the result.",
                hi: "if के बाद present simple; 'will' केवल परिणाम में।",
              },
            },
            {
              wrong: "If water reaches 100 degrees, it would boil.",
              right: "If water reaches 100 degrees, it boils.",
              note: {
                bn: "বৈজ্ঞানিক সত্য বোঝালে zero conditional — দুই অংশেই present; would কাল্পনিক বাক্যের শব্দ।",
                en: "A scientific fact takes the zero conditional; 'would' is for imaginary situations.",
                hi: "वैज्ञानिक सत्य के लिए zero conditional; 'would' कल्पना के लिए।",
              },
            },
            {
              wrong: "If I will finish early, I call you.",
              right: "If I finish early, I will call you.",
              note: {
                bn: "একই বাক্যে দুই ভুল: if-এ will বসে গেছে, আর ফলাফলের will বাদ পড়েছে — দুই অংশের ভূমিকা উল্টে গেছে।",
                en: "Two errors in one sentence: 'will' in the if-part and a bare present in the result — the roles are swapped.",
                hi: "एक ही वाक्य में दो गलतियाँ: if-भाग में will और परिणाम में will का अभाव — दोनों उलट गए हैं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "Second conditional — এখন যা সত্য নয়, কল্পনা",
            en: "Second conditional — imagining the unreal present",
            hi: "Second conditional — वर्तमान की काल्पनिक स्थिति",
          },
          body: {
            bn: "এমন কথা বলতে যা এখন বাস্তব নয় — 'যদি আমার কোটি টাকা থাকত, একটা লাইব্রেরি বানাতাম' — সেখানে if-অংশে past simple, ফলাফলে would + verb: 'If I had a million taka, I would build a library'। এখানে past tense মানে অতীত সময় নয় — এটা বাস্তবতা থেকে 'দূরত্ব' বোঝায়। আরেকটা সূক্ষ্মতা: be-verb হলে সব subject-এর সাথে were ব্যবহার করা আদর্শ — 'If I were you, I would take the job'। বাংলায় 'থাকলে/করলে' একটাই ফর্ম চলে, তাই বহু শিক্ষার্থী 'If I had money, I buy a phone' বলে ফেলেন — কল্পনার বাক্যের ফলাফলে would বাদ দেওয়া যায় না, এটাই মনে রাখতে হবে।",
            en: "To talk about what is not true now — 'If I had a million taka, I would build a library' — use past simple after if and would + verb in the result. The past here does not mean past time; it means distance from reality. Another fine point: for be-verbs, 'were' is preferred with every subject — 'If I were you, I would take the job.' Because Bangla uses one form for all of this, learners often say 'If I had money, I buy a phone' — never drop 'would' in the result of an imaginary sentence.",
            hi: "जो अभी सच नहीं — 'If I had a million taka, I would build a library' — के लिए if के बाद past simple, परिणाम में would + verb। यहाँ past का अर्थ भूतकाल नहीं, वास्तविकता से दूरी है। be-verb के साथ सभी कर्ता के लिए 'were' बेहतर: 'If I were you, I would take the job.' कल्पना के वाक्य में परिणाम से would न छोड़ें — यही याद रखने वाली बात है।",
          },
          examples: [
            {
              wrong: "If I was rich, I will travel the world.",
              right: "If I were rich, I would travel the world.",
              note: {
                bn: "দুই জায়গায় ঠিক করতে হবে: কল্পনার if-অংশে were (was নয়), ফলাফলে would (will নয়)।",
                en: "Two fixes: 'were' in the imaginary if-part and 'would' in the result.",
                hi: "दो सुधार: कल्पना में 'were' और परिणाम में 'would'।",
              },
            },
            {
              wrong: "If she knew his number, she calls him.",
              right: "If she knew his number, she would call him.",
              note: {
                bn: "কল্পনার শর্তের ফলাফলে would + verb লাগবে — খালি present চলবে না।",
                en: "An imaginary condition needs 'would + verb' in the result.",
                hi: "काल्पनिक शर्त में परिणाम में 'would + verb' ज़रूरी है।",
              },
            },
            {
              wrong: "If I would have more time, I would learn guitar.",
              right: "If I had more time, I would learn guitar.",
              note: {
                bn: "if-অংশে would চলে না — second conditional-এ সেখানে past simple বসে।",
                en: "'Would' never goes in the if-part of a second conditional.",
                hi: "second conditional के if-भाग में 'would' नहीं आता।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "Third conditional — অতীতের না-ঘটা সুযোগ",
            en: "Third conditional — the unreal past",
            hi: "Third conditional — बीता हुआ जो नहीं हुआ",
          },
          body: {
            bn: "অতীতে যা ঘটেনি সে নিয়ে অফসোস বা ভাবনা বোঝাতে third conditional: if + had + V3, ফলাফলে would have + V3 — 'If I had studied harder, I would have passed' (পড়িনি, তাই পাস হইনি — এখন শুধু ভাবা যায়)। বাংলার 'পড়লে পাস করতাম' বাক্যটারই ঠিক এই অনুবাদ। এই ফর্মুলাটা সবচেয়ে দীর্ঘ, তাই ভুলও সবচেয়ে বেশি হয় এখানেই — মানুষ 'would have'-কে if-অংশে ঢুকিয়ে দেন ('If I would have studied')। মনে রাখার সহজ কায়দা: if-এর পরে সবসময় had + V3, অন্য অংশে সবসময় would have + V3। কথায় সংক্ষিপ্ত রূপও শুনবেন — 'If I had studied, I would have passed' বাক্যটাই কথায় ছোট হয়ে গিয়ে I'd আর would've হয়ে যায় — মানে I had = I'd, would have = would've; কিন্তু লেখায় পূর্ণ রূপই লিখুন।",
            en: "To talk about a past that did not happen, use the third conditional: if + had + past participle, then would have + past participle — 'If I had studied harder, I would have passed.' It is the longest formula, so it collects the most mistakes: people push 'would have' into the if-part ('If I would have studied'). Easy memory rule: had + V3 after if, would have + V3 in the result. In speech you will hear the contractions (I had → I'd, would have → would've), but write the full forms.",
            hi: "न हुए अतीत की बात के लिए third conditional: if + had + V3, फिर would have + V3 — 'If I had studied harder, I would have passed.' यह सबसे लंबा फ़ॉर्मूला है, इसलिए गलतियाँ भी यहीं सबसे ज़्यादा होती हैं — 'would have' को if-भाग में न डालें ('If I would have studied' गलत)। सरल नियम: if के बाद had + V3, परिणाम में would have + V3। बोलचाल में I'd, would've सुनाई देगा, पर लिखते समय पूरा रूप लिखें।",
          },
          examples: [
            {
              wrong: "If I would have known, I would have come.",
              right: "If I had known, I would have come.",
              note: {
                bn: "if-অংশে 'would have' নয় — সেখানে 'had + V3' বসবে।",
                en: "The if-part takes 'had + V3', never 'would have'.",
                hi: "if-भाग में 'had + V3' होगा, 'would have' नहीं।",
              },
            },
            {
              wrong: "If she had caught the bus, she will be here now.",
              right: "If she had caught the bus, she would be here now.",
              note: {
                bn: "অতীতের শর্তের ফল এখনো বর্তমানে টেনে থাকলে ফলাফলে would + verb — will চলবে না (mixed conditional)।",
                en: "When a past condition has a present result, the result takes 'would + verb' (a mixed conditional).",
                hi: "अतीत की शर्त का प्रभाव वर्तमान में हो तो परिणाम में 'would + verb' (mixed conditional)।",
              },
            },
            {
              wrong: "If we practiced more, we would have won the match.",
              right: "If we had practiced more, we would have won the match.",
              note: {
                bn: "অতীতের না-ঘটা শর্ত বোঝাতে if-অংশে 'had + V3' — খালি past (practiced) এখানে অপ্রতুল।",
                en: "For an unreal past condition, the if-part needs 'had + V3', not plain past.",
                hi: "न हुए अतीत के लिए if-भाग में 'had + V3' चाहिए, साधारण past नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "কোন কন্ডিশনাল কখন — দ্রুত বাছাইয়ের কৌশল",
            en: "Which conditional when — a quick chooser",
            hi: "कौन-सा conditional कब — चुनने की त्वरित विधि",
          },
          body: {
            bn: "বাছাইয়ের আগে একটাই প্রশ্ন করুন: শর্তটা কতটা বাস্তব? সবসময় সত্য হলে zero (present + present)। ভবিষ্যতে ঘটার সম্ভাবনা আছে হলে first (present + will)। এখন সত্য নয় কিন্তু কল্পনা করা যায় হলে second (past + would)। অতীতে ঘটেনি এবং এখন আর বদলানো যাবে না হলে third (had + V3 + would have)। এরপর mixed conditional: অতীতের কারণ, বর্তমানের ফল — 'If I had taken that job, I would be in Dubai now' — if-অংশ third-এর, ফলাফল second-এর। আর একটা জিনিস খেয়াল করুন: 'If I get the scholarship' বললেন মানে সম্ভাবনা আছে, 'If I got the scholarship' বললেন মানে সম্ভাবনা কম বা কল্পনা — শুধু tense বদলেই মানে বদলে যায়, এটা ধরতে পারলে ভিত্তি গেঁথে যাবে।",
            en: "Ask one question: how real is the condition? Always true → zero (present + present). Possible in the future → first (present + will). Not true now but imaginable → second (past + would). A past that cannot change → third (had + V3 + would have). Then mixed conditionals: a past cause with a present result — 'If I had taken that job, I would be in Dubai now.' Also notice how tense alone shifts meaning: 'If I get the scholarship' sees a real chance, 'If I got the scholarship' treats it as unlikely — one tense change, one meaning change.",
            hi: "एक सवाल पूछें: शर्त कितनी वास्तविक है? सदा सत्य → zero (present + present)। भविष्य में संभव → first (present + will)। अभी काल्पनिक → second (past + would)। न बदल सकने वाला अतीत → third (had + V3 + would have)। फिर mixed: 'If I had taken that job, I would be in Dubai now।' ध्यान दें: 'If I get the scholarship' में वास्तविक संभावना, 'If I got' में कम संभावना — केवल tense से अर्थ बदलता है।",
          },
          examples: [
            {
              wrong: "If I had wings, I will fly to Cox's Bazar.",
              right: "If I had wings, I would fly to Cox's Bazar.",
              note: {
                bn: "ডানা থাকা এখন অসম্ভব — কল্পনার বাক্য, তাই second conditional; ফলাফলে will নয়, would।",
                en: "Having wings is impossible now, so it is a second conditional — 'would', not 'will'.",
                hi: "डैन होना अभी असंभव है, इसलिए second conditional — 'will' नहीं, 'would'।",
              },
            },
            {
              wrong: "If you mix red and blue, you would get purple.",
              right: "If you mix red and blue, you get purple.",
              note: {
                bn: "রং মেশানোর ফল সবসময় সত্য — zero conditional, ফলাফলে simple present।",
                en: "An always-true result takes the zero conditional with simple present.",
                hi: "सदा सत्य परिणाम के लिए zero conditional और simple present।",
              },
            },
            {
              wrong: "If he had left earlier, he catches the train.",
              right: "If he had left earlier, he would have caught the train.",
              note: {
                bn: "third conditional-এর ফলাফল-অংশে 'would have + V3' — খালি present বসানো যায় না।",
                en: "The third conditional result needs 'would have + V3'.",
                hi: "third conditional के परिणाम में 'would have + V3' चाहिए।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "নিজের জীবনের একটা সত্যি 'যদি' বাক্য তিন রকমে বদলে বলুন — 'If I get the job, I will move' → 'If I got the job, I would move' → 'If I had got the job, I would have moved' — মুখে মুখে পার্থক্যগুলো বসে যাবে।",
          en: "Take one real 'if' sentence and say it in all three forms — first, second, third. Saying the shift aloud locks it in.",
          hi: "एक ही 'if' वाक्य तीन रूपों में बोलिए — first, second, third — अंतर बोलते ही याद हो जाएगा।",
        },
        {
          bn: "সোনার নিয়ম: if-এর ঠিক পরে will বা would কখনো বসবে না (দুর্লভ ভদ্র প্রয়োগ 'If you will wait here' ছাড়া)।",
          en: "Golden rule: no will/would right after if (except rare polite uses like 'If you will wait here').",
          hi: "सुनहरा नियम: if के तुरंत बाद will/would नहीं (दुर्लभ विनम्र रूपों को छोड़कर)।",
        },
        {
          bn: "অফসোস প্র্যাকটিস করুন: রাতে ঘুমানোর আগে দিনের একটা ভুল নিয়ে 'If I had..., I would have...' বাক্য বানান — third conditional এভাবেই সবচেয়ে দ্রুত হাতে আসে।",
          en: "Practice regrets: before bed, make one 'If I had..., I would have...' sentence about your day — it is the fastest way to own the third conditional.",
          hi: "पछतावे का अभ्यास करें: सोने से पहले अपने दिन पर 'If I had..., I would have...' वाक्य बनाएँ — third conditional इसी से जल्दी आता है।",
        },
        {
          bn: "গান আর সিনেমার ডায়ালগে conditional খুঁজুন — 'If I were a boy', 'If I ruled the world' — জনপ্রিয় লাইন মুখস্থ থাকলে ফর্মুলাগুলোও মনে থাকে।",
          en: "Hunt for conditionals in songs and films — 'If I were a boy' — famous lines make the formulas easy to remember.",
          hi: "गानों और फ़िल्मों में conditional खोजें — 'If I were a boy' — मशहूर पंक्तियाँ फ़ॉर्मूले याद रखने में मदद करती हैं।",
        },
      ],
    },
  },
];
