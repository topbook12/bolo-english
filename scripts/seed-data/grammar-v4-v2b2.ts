// ─── Grammar seeds v4: INTERMEDIATE batch v2-B2 (3 lessons) ───
// Task 10 — point-form roadmap upgrade. Source: scripts/seed-data/grammar-v2-b.ts
// (v2 body paragraphs → bullet points, roadmap + leads + formula boxes + tables added;
// title/intro/tips/examples copied EXACTLY; quiz omitted — source had none).
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_V2B2: SeedGrammarV4Entry[] = [
  /* ── 1. Used to & Would (unit 0 → sortOrder 13) ─────────────────────── */
  {
    topic: "Used to & Would",
    level: "intermediate",
    title: "Used to & Would (Intermediate)",
    unit: 0,
    sortOrder: 13,
    data: {
      title: {
        bn: "Used to ও Would — অতীতের অভ্যাস (মধ্যম স্তর)",
        en: "Used to & Would (Intermediate)",
        hi: "Used to और Would — अतीत की आदतें (मध्यम स्तर)",
      },
      intro: {
        bn: "'আমি আগে প্রতিদিন ক্রিকেট খেলতাম' — ইংরেজিতে এর জন্য আলাদা গঠন আছে: I used to play cricket every day। আর 'অভ্যস্ত থাকা' বোঝাতে হয় I am used to getting up early — দেখতে প্রায় এক, অর্থ আকাশ-পাতাল আলাদা। এই দুই জায়গার গোলমালেই মধ্যম স্তরের শিক্ষার্থীরা সবচেয়ে বেশি ধরা পড়েন। চলুন পরিষ্কার করি।",
        en: "'I used to play cricket every day' talks about a past habit that is over; 'I am used to getting up early' means you are accustomed to it. The two look almost identical but mean completely different things — and this is exactly where intermediate learners stumble. This lesson sorts out used to, would, and the be/get used to confusion.",
        hi: "'I used to play cricket every day' बताता है बीती हुई आदत; 'I am used to getting up early' का अर्थ अभ्यस्त होना। दोनों लगभग एक जैसे दिखते हैं पर अर्थ बिल्कुल अलग — यहीं मध्यम स्तर के शिक्षार्थी ठोकर खाते हैं। इस पाठ में used to, would और be/get used to का भ्रम दूर करेंगे।",
      },
      roadmap: [
        { bn: "⏰ used to + verb — অতীতের অভ্যাস, অবস্থা আর did-বাক্যের বানান-ফাঁদ", en: "⏰ used to + verb — past habits, states and the did-spelling trap", hi: "⏰ used to + verb — अतीत की आदतें, अवस्थाएँ और did-वाली spelling-जाल" },
        { bn: "🔁 would — গল্প-স্মৃতির অভ্যাস-ক্রিয়া, অবস্থায় একেবারেই নিষেধ", en: "🔁 would — habit actions in stories and memories, never for states", hi: "🔁 would — कहानियों की आदत-क्रियाएँ, अवस्था में पूरी तरह मना" },
        { bn: "📊 তিনটা প্রশ্নে সিদ্ধান্ত — used to বনাম would তুলনার ছক", en: "📊 Three questions to decide — the used to vs would table", hi: "📊 तीन प्रश्नों में फ़ैसला — used to बनाम would की टेबल" },
        { bn: "⚠️ be/get used to = অভ্যস্ত থাকা — বানান কাছাকাছি, অর্থ দূরে", en: "⚠️ be/get used to = accustomed — near in spelling, worlds apart in meaning", hi: "⚠️ be/get used to = अभ्यस्त — spelling पास, अर्थ दूर" },
      ],
      sections: [
        {
          heading: {
            bn: "⏰ used to + verb: অতীতের অভ্যাস ও অবস্থা",
            en: "⏰ used to + verb: past habits and states",
            hi: "⏰ used to + verb: अतीत की आदतें और अवस्थाएँ",
          },
          lead: {
            bn: "অতীতের অভ্যাস-অবস্থার সরাসরি রূপ used to — সাথে did-বাক্যের ছোট্ট বানান-ফাঁদ।",
            en: "The direct form for past habits and states — plus the small did-spelling trap.",
            hi: "अतीत की आदत-अवस्था का सीधा रूप used to — साथ में did-वाली spelling-जाल।",
          },
          points: [
            { bn: "**used to + verb** বোঝায় অতীতে নিয়মিত হতো, এখন আর হয় না: I used to play cricket।", en: "**used to + verb** means a past habit, now finished: I used to play cricket.", hi: "**used to + verb** का अर्थ — अतीत में नियमित होता था, अब नहीं: I used to play cricket।" },
            { bn: "অবস্থার জন্যও চলে: I used to live in Chattogram।", en: "Past states too: I used to live in Chattogram.", hi: "अवस्था के लिए भी: I used to live in Chattogram।" },
            { bn: "না-বোধক ও প্রশ্নে did বসে, আর used-এর 'd' পড়ে যায়: I didn't use to like coffee।", en: "Negatives and questions take did, and the d of used drops: I didn't use to like coffee.", hi: "नकारात्मक और प्रश्न में did आता है, और used का 'd' गिर जाता है: I didn't use to like coffee।" },
            { bn: "প্রশ্নেও একই নিয়ম: Did you use to play?", en: "Questions follow the same rule: Did you use to play?", hi: "प्रश्न में वही नियम: Did you use to play?" },
            { bn: "বর্তমান অভ্যাসে used to নয় — তখন usually + simple present।", en: "Not for present habits — there you need usually + the simple present.", hi: "वर्तमान आदत के लिए used to नहीं — वहाँ usually + simple present।" },
            { bn: "একবারের অতীত ঘটনায় used to নয় — তখন past simple।", en: "Not for one-off past events either — those take the past simple.", hi: "एक बार की घटना के लिए used to नहीं — वहाँ past simple।" },
          ],
          formula: {
            bn: "কর্তা + used to + verb • did-বাক্যে: didn't use to / Did ... use to?",
            en: "subject + used to + verb • with did: didn't use to / Did ... use to?",
            hi: "कर्ता + used to + verb • did वाले वाक्य में: didn't use to / Did ... use to?",
          },
          examples: [
            {
              wrong: "I use to play cricket when I was young.",
              right: "I used to play cricket when I was young.",
              note: {
                bn: "ইতিবাচক বাক্যে সবসময় used (d সহ); 'use to' শুধু did-এর পরে আসে — উচ্চারণে দুটো এক হলেও বানানে নয়।",
                en: "In affirmative sentences it is always 'used' with the d; 'use to' appears only after did — same sound, different spelling.",
                hi: "सकारात्मक वाक्य में हमेशा 'used' (d सहित); 'use to' केवल did के बाद — उच्चारण वही, वर्तनी अलग।",
              },
            },
            {
              wrong: "I didn't used to like fish.",
              right: "I didn't use to like fish.",
              note: {
                bn: "did থাকলে পরের ক্রিয়ায় অতীত-চিহ্ন আর থাকে না — যেমন 'didn't played' ভুল, তেমনি 'didn't used to' ভুল।",
                en: "After 'did' the past mark disappears — just as 'didn't played' is wrong, so is 'didn't used to'.",
                hi: "'did' के बाद अतीत-चिह्न गायब हो जाता है — जैसे 'didn't played' गलत, वैसे ही 'didn't used to' गलत।",
              },
            },
            {
              wrong: "I am going to school by bus when I was a child.",
              right: "I used to go to school by bus when I was a child.",
              note: {
                bn: "শৈশবের নিয়মিত অভ্যাসের জন্য বর্তমান-কালের গঠন আসে না; 'আগে যেতাম' = used to + base verb।",
                en: "A childhood routine cannot be framed in a present form; 'আগে যেতাম' is used to + base verb.",
                hi: "बचपन की नियमित आदत वर्तमान रूप में नहीं बनती; 'पहले जाता था' = used to + मूल क्रिया।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🔁 would: গল্প বলার অতীত অভ্যাস",
            en: "🔁 would: the storyteller's past habit",
            hi: "🔁 would: कहानीकार की अतीत आदत",
          },
          lead: {
            bn: "স্মৃতি-গল্পে অভ্যাস-ক্রিয়া বোঝাতে would — তবে অবস্থার জগতে এর প্রবেশ নিষেধ।",
            en: "For habit actions told as memories and stories — but states are strictly off-limits.",
            hi: "यादों-कहानियों में आदत-क्रिया के लिए would — पर अवस्था में प्रवेश मना।",
          },
          points: [
            { bn: "**would + verb**-ও অতীতে বারবার-হওয়া কাজ বোঝায়, বিশেষত স্মৃতি বা গল্প বলার ঢঙে।", en: "**would + verb** also marks repeated past actions, especially in reminiscences and stories.", hi: "**would + verb** भी अतीत की दोहराई गई क्रियाएँ बताता है, विशेष रूप से यादों-कहानियों में।" },
            { bn: "উদাহরণ: Every summer, we would visit our grandmother।", en: "Example: Every summer, we would visit our grandmother.", hi: "उदाहरण: Every summer, we would visit our grandmother।" },
            { bn: "গল্পের আরেকটা লাইন: My father would tell us stories at night।", en: "Another story line: My father would tell us stories at night.", hi: "कहानी की एक और पंक्ति: My father would tell us stories at night।" },
            { bn: "কিন্তু would কখনো **অবস্থা** ধরতে পারে না।", en: "But 'would' can never describe a **state**.", hi: "पर 'would' कभी **अवस्था** नहीं दर्शाता।" },
            { bn: "be, have, live, like, know জাতীয় ক্রিয়ার সাথে শুধু used to চলে।", en: "With be, have, live, like, know only 'used to' works.", hi: "be, have, live, like, know जैसी क्रियाओं के साथ केवल used to चलता है।" },
            { bn: "একবারের ঘটনার জন্য দুটোরই জায়গা নেই — তখন past simple।", en: "For one-off events neither fits — the past simple takes over.", hi: "एक बार की घटना के लिए दोनों की जगह नहीं — वहाँ past simple।" },
          ],
          formula: {
            bn: "গল্পের ঢঙ: দৃশ্য used to দিয়ে, বারবার-হওয়া কাজ would দিয়ে",
            en: "storytelling: set the scene with used to, flow the actions with would",
            hi: "कहानी के अंदाज़ में: दृश्य used to से, दोहराई क्रियाएँ would से",
          },
          examples: [
            {
              wrong: "We would have a bicycle when we were kids.",
              right: "We used to have a bicycle when we were kids.",
              note: {
                bn: "এখানে have মালিকানা = অবস্থা; would শুধু কর্ম ধরে, অবস্থা নয় — তাই used to-ই একমাত্র পথ।",
                en: "Here 'have' means possession — a state; 'would' covers only actions, so 'used to' is the only option.",
                hi: "यहाँ 'have' स्वामित्व = अवस्था; 'would' केवल क्रियाएँ लेता है — इसलिए 'used to' ही विकल्प।",
              },
            },
            {
              wrong: "Every winter my grandfather would be the first to wake up.",
              right: "Every winter my grandfather used to be the first to wake up.",
              note: {
                bn: "be-ও অবস্থা-ক্রিয়া — would be এখানে চলবে না; অভ্যাসগত অবস্থা বোঝাতে used to be।",
                en: "'Be' is a state verb too — 'would be' cannot carry a habitual state; 'used to be' is required.",
                hi: "'be' भी अवस्था-क्रिया है — 'would be' यहाँ नहीं चलेगा; 'used to be' चाहिए।",
              },
            },
            {
              wrong: "Last year I would go to Sylhet once.",
              right: "Last year I went to Sylhet once.",
              note: {
                bn: "একবারের নির্দিষ্ট ঘটনার জন্য used to বা would দুটোই নয় — used to মানেই বারবার, তাই past simple।",
                en: "A single specific event fits neither 'used to' nor 'would' — both imply repetition — so the past simple is the answer.",
                hi: "एक बार की निश्चित घटना के लिए 'used to' या 'would' कोई नहीं — दोनों का अर्थ ही दोहराव है — इसलिए past simple।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "📊 used to নাকি would — সিদ্ধান্তের নিয়ম",
            en: "📊 used to or would — how to decide",
            hi: "📊 used to या would — कैसे तय करें",
          },
          lead: {
            bn: "তিনটা প্রশ্ন করলেই সিদ্ধান্ত হয়ে যায় — আর ছকে পুরো তুলনাটা এক নজরে।",
            en: "Three questions settle it — and the table shows the whole comparison at a glance.",
            hi: "तीन प्रश्न पूछें, फ़ैसला हो जाएगा — और टेबल में पूरी तुलना एक नज़र में।",
          },
          points: [
            { bn: "প্রশ্ন এক: ঘটনাটা কি একবারের? হলে **past simple**।", en: "Question one: did it happen once? Then the **past simple**.", hi: "प्रश्न एक: घटना एक बार की है? तो **past simple**।" },
            { bn: "প্রশ্ন দুই: কি অবস্থা, মালিকানা বা অনুভূতি? হলে **used to** — would চলবে না।", en: "Question two: a state, possession or feeling? Then **used to** — would is impossible.", hi: "प्रश्न दो: अवस्था, स्वामित्व या भावना? तो **used to** — would नहीं चलेगा।" },
            { bn: "প্রশ্ন তিন: বারবার-হওয়া কাজ কি গল্পের ঢঙে বলছেন? হলে **would** সবচেয়ে স্বাভাবিক।", en: "Question three: a repeated action in a storytelling tone? Then **would** sounds most natural.", hi: "प्रश्न तीन: दोहराई क्रिया कहानी के अंदाज़ में? तो **would** सबसे स्वाभाविक।" },
            { bn: "প্রশ্ন তিনে used to-ও চলে — দুটোই ঠিক, ঢঙে ফারাক মাত্র।", en: "For question three, 'used to' also works — both are correct, only the tone differs.", hi: "तीसरे प्रश्न में used to भी चलेगा — दोनों सही, फ़र्क़ सिर्फ़ अंदाज़ का।" },
            { bn: "নেটিভদের গল্পে প্যাটার্ন দেখবেন: দৃশ্য-বর্ণনা used to দিয়ে শুরু।", en: "Native stories follow a pattern: the scene opens with used to.", hi: "नेटिव कहानियों का पैटर्न: दृश्य-वर्णन used to से शुरू।" },
            { bn: "তারপরের কর্মগুলো would দিয়ে বয়ে যায়।", en: "Then the actions flow with would.", hi: "फिर क्रियाएँ would से बहती हैं।" },
          ],
          table: {
            head: [
              { bn: "বাক্যের ধরন", en: "Sentence type", hi: "वाक्य का प्रकार" },
              { bn: "used to", en: "used to", hi: "used to" },
              { bn: "would", en: "would", hi: "would" },
            ],
            rows: [
              [{ bn: "একবারের ঘটনা", en: "One-off event", hi: "एक बार की घटना" }, { bn: "নয় — past simple", en: "no — past simple", hi: "नहीं — past simple" }, { bn: "নয় — past simple", en: "no — past simple", hi: "नहीं — past simple" }],
              [{ bn: "অবস্থা: be, have, live, like, know", en: "State: be, have, live, like, know", hi: "अवस्था: be, have, live, like, know" }, { bn: "হ্যাঁ — একমাত্র পথ", en: "yes — the only option", hi: "हाँ — एकमात्र विकल्प" }, { bn: "কখনোই নয়", en: "never", hi: "कभी नहीं" }],
              [{ bn: "বারবার-হওয়া কাজ", en: "Repeated action", hi: "दोहराई गई क्रिया" }, { bn: "হ্যাঁ, চলে", en: "yes, works", hi: "हाँ, चलता है" }, { bn: "হ্যাঁ — গল্পের ঢঙে সবচেয়ে স্বাভাবিক", en: "yes — most natural in stories", hi: "हाँ — कहानी के अंदाज़ में सबसे स्वाभाविक" }],
              [{ bn: "গল্পের দৃশ্য-বর্ণনা", en: "Story opening", hi: "कहानी का दृश्य" }, { bn: "শুরুতে সবচেয়ে স্বাভাবিক", en: "most natural at the start", hi: "शुरुआत में सबसे स्वाभाविक" }, { bn: "এরপরের কর্মের ধারায়", en: "then the actions follow", hi: "फिर क्रियाओं की धारा में" }],
            ],
          },
          examples: [
            {
              wrong: "I would live in Khulna as a child.",
              right: "I used to live in Khulna as a child.",
              note: {
                bn: "live এখানে বসবাসের অবস্থা — would অবস্থা ধরতে পারে না; used to-ই নিয়ম।",
                en: "'Live' here is a state of residence — 'would' cannot govern states, so 'used to' is the rule.",
                hi: "'live' यहाँ रहने की अवस्था है — 'would' अवस्था नहीं ले सकता; 'used to' ही सही।",
              },
            },
            {
              wrong: "I used to meet him last Friday.",
              right: "I met him last Friday.",
              note: {
                bn: "নির্দিষ্ট এক ঘটনা (last Friday) → past simple; used to-র ভেতরে তারিখ বসে না, কারণ তার অর্থই 'প্রতিবার'।",
                en: "A dated single event takes the past simple; 'used to' never teams up with a specific date because it means 'repeatedly'.",
                hi: "तारीख वाली एक घटना past simple लेती है; 'used to' का अर्थ ही 'बार-बार' है, तिथि के साथ नहीं चलता।",
              },
            },
            {
              wrong: "As a boy, I would be very shy and I would hide behind my mother.",
              right: "As a boy, I used to be very shy and I would hide behind my mother.",
              note: {
                bn: "একই গল্পে দুই ধরনের অংশ: অবস্থা (be shy) → used to; কাজ (hide) → would — এই মিশ্রণই নেটিভ-ঢঙ।",
                en: "One story, two parts: the state (be shy) takes 'used to', the action (hide) takes 'would' — this mix is the native rhythm.",
                hi: "एक कहानी, दो हिस्से: अवस्था (be shy) → 'used to'; क्रिया (hide) → 'would' — यही मिश्रण नेटिव लहजा है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "⚠️ সবচেয়ে বড় ফাঁদ: be used to doing",
            en: "⚠️ The biggest trap: be used to doing",
            hi: "⚠️ सबसे बड़ा फँदा: be used to doing",
          },
          lead: {
            bn: "দেখতে used to-র যমজ, অর্থ 'অভ্যস্ত থাকা' — মধ্যম স্তরের সবচেয়ে ধরা-পড়ার জায়গা।",
            en: "Looks like used to's twin but means 'accustomed' — the most-caught spot at intermediate level.",
            hi: "देखने में used to का जुड़वाँ, अर्थ 'अभ्यस्त' — मध्यम स्तर पर सबसे ज़्यादा पकड़े जाने वाली जगह।",
          },
          points: [
            { bn: "**be used to + noun/-ing** = 'অভ্যস্ত থাকা' — বর্তমান, অতীত বা ভবিষ্যৎ, যেকোনো কালে চলে: I am used to spicy food।", en: "**be used to + noun/-ing** = 'accustomed to' — present, past or future, any tense: I am used to spicy food.", hi: "**be used to + noun/-ing** = 'अभ्यस्त' — वर्तमान, अतीत या भविष्य, कोई भी काल: I am used to spicy food।" },
            { bn: "কাজের সাথে: She is used to working at night।", en: "With an action: She is used to working at night.", hi: "क्रिया के साथ: She is used to working at night।" },
            { bn: "**get used to** = 'অভ্যস্ত হয়ে ওঠার প্রক্রিয়া': You will get used to the weather।", en: "**get used to** = the process of becoming accustomed: You will get used to the weather.", hi: "**get used to** = 'अभ्यस्त होने की प्रक्रिया': You will get used to the weather।" },
            { bn: "এখানে to-এর পরে -ing বসে, কারণ এই to প্রত্যয় নয় — preposition।", en: "The -ing follows because this 'to' is not the infinitive marker — it is a preposition.", hi: "यहाँ to के बाद -ing आता है, क्योंकि यह to प्रत्यय नहीं — preposition है।" },
            { bn: "'used to play' (আগে খেলতাম) আর 'am used to playing' (খেলতে অভ্যস্ত) — শুনতে কাছাকাছি, অর্থে সম্পূর্ণ আলাদা।", en: "'used to play' (past habit) and 'am used to playing' (accustomed) sound close but mean completely different things.", hi: "'used to play' (पुरानी आदत) और 'am used to playing' (अभ्यस्त) — सुनने में पास, अर्थ में बिल्कुल अलग।" },
            { bn: "পার্থক্যের সূত্র: be/get থাকলে অভ্যস্ত, না থাকলে অতীত অভ্যাস।", en: "The shortcut: be/get present → accustomed; absent → past habit.", hi: "फ़र्क़ का सूत्र: be/get हो तो अभ्यस्त, न हो तो अतीत की आदत।" },
          ],
          formula: {
            bn: "be/get used to + noun/-ing = অভ্যস্ত | used to + verb = অতীত অভ্যাস",
            en: "be/get used to + noun/-ing = accustomed | used to + verb = past habit",
            hi: "be/get used to + noun/-ing = अभ्यस्त | used to + verb = अतीत की आदत",
          },
          examples: [
            {
              wrong: "I am used to wake up early.",
              right: "I am used to waking up early.",
              note: {
                bn: "be used to-এর পরে -ing — কারণ এই to preposition; 'অভ্যস্ত' বোঝালে ক্রিয়ার -ing রূপ বাধ্যতামূলক।",
                en: "After 'be used to' comes the -ing form, because this 'to' is a preposition — 'accustomed to' always takes -ing.",
                hi: "'be used to' के बाद -ing रूप — क्योंकि यह 'to' preposition है; 'अभ्यस्त' के अर्थ में -ing अनिवार्य।",
              },
            },
            {
              wrong: "I used to getting up early, but now I am lazy.",
              right: "I used to get up early, but now I am lazy.",
              note: {
                bn: "এখানে অর্থ অতীত অভ্যাস ('আগে উঠতাম') — be/get নেই, তাই base verb: used to get।",
                en: "The meaning here is the past habit ('আগে উঠতাম') with no be/get — so the base verb follows: used to get.",
                hi: "यहाँ अर्थ पुरानी आदत है ('पहले जल्दी उठता था') — be/get नहीं, इसलिए मूल क्रिया: used to get।",
              },
            },
            {
              wrong: "It took me a month to used to the new schedule.",
              right: "It took me a month to get used to the new schedule.",
              note: {
                bn: "'অভ্যস্ত হয়ে ওঠার প্রক্রিয়া' বোঝাতে get দরকার — শুধু used to কালের বদল বোঝাতে পারে না; কাঠামোটা get used to + noun/-ing।",
                en: "The process of becoming accustomed needs 'get' — bare 'used to' cannot express change over time; the frame is get used to + noun/-ing.",
                hi: "अभ्यस्त होने की प्रक्रिया के लिए 'get' चाहिए — केवल 'used to' समय के साथ बदलाव नहीं बताता; ढाँचा get used to + noun/-ing।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "নিজের শৈশব নিয়ে ৫টা বাক্য বলুন প্রতিদিন: ৩টা used to (একটা অবস্থাসহ), ২টা would (কাজ) — স্মৃতি থেকে শেখা সবচেয়ে টেকসই।",
          en: "Say five sentences about your childhood daily: three with used to (one a state), two with would (actions) — memory-based learning lasts longest.",
          hi: "रोज़ बचपन पर पाँच वाक्य बोलें: तीन 'used to' (एक अवस्था), दो 'would' (क्रिया) — यादों से सीखा सबसे टिकाऊ।",
        },
        {
          bn: "'I am used to ___ing' কাঠামোয় নিজের ৩টা অভ্যাস লিখুন — বাংলা 'অভ্যস্ত' মনে পড়লেই এই কাঠামো মনে করুন।",
          en: "Write three of your habits in the 'I am used to ___ing' frame — whenever Bangla 'অভ্যস্ত' comes to mind, recall this frame.",
          hi: "'I am used to ___ing' ढाँचे में अपनी तीन आदतें लिखें — 'अभ्यस्त' याद आते ही यह ढाँचा याद करें।",
        },
        {
          bn: "পুরনো ছবি দেখে গল্প বলুন: দৃশ্য বর্ণনায় used to, কর্মের ধারায় would — ফোনের গ্যালারিই আপনার প্র্যাকটিস-বই।",
          en: "Tell stories from old photos: set the scene with used to, run the actions with would — your phone gallery is the practice book.",
          hi: "पुरानी तस्वीरें देखकर कहानियाँ सुनाएँ: दृश्य 'used to' से, क्रियाएँ 'would' से — आपकी गैलरी ही अभ्यास-पुस्तक है।",
        },
        {
          bn: "did-প্রশ্নে বানানে 'd' পড়ে যায় — লিখতে সতর্ক থাকুন: Did you use to...? / I didn't use to...; ইতিবাচক বাক্যেই শুধু used।",
          en: "Watch the spelling after did — the d drops: Did you use to...? / I didn't use to...; 'used' with d appears only in affirmative sentences.",
          hi: "did के बाद वर्तनी पर ध्यान दें — d गिरता है: Did you use to...?; d-सहित 'used' केवल सकारात्मक वाक्य में।",
        },
      ],
    },
  },

  /* ── 2. Quantifiers: much/many/few/little (unit 0 → sortOrder 14) ───── */
  {
    topic: "Quantifiers: much/many/few/little",
    level: "intermediate",
    title: "Quantifiers: much, many, few & little (Intermediate)",
    unit: 0,
    sortOrder: 14,
    data: {
      title: {
        bn: "কোয়ান্টিফায়ার — much, many, few, little (মধ্যম স্তর)",
        en: "Quantifiers: much, many, few & little (Intermediate)",
        hi: "क्वांटिफ़ायर — much, many, few, little (मध्यम स्तर)",
      },
      intro: {
        bn: "'অনেক তথ্য' বলতে গিয়ে many informations, 'কয়েকটা উপদেশ' বলতে few advices — এই ভুলগুলোর মূলে একটাই বিষয়: ইংরেজিতে সব নাম গোনা যায় না। কোন নাম countable, কোনটা uncountable বুঝলে much/many, few/little, some/any — পুরো পরিবার একসাথে পরিষ্কার হয়ে যায়। এই পাঠ সেই ভিত্তি থেকেই শুরু হবে।",
        en: "Saying 'many informations' or 'few advices' comes from one root problem: not every English noun can be counted. Once you can tell countable from uncountable, the whole quantifier family — much/many, few/little, some/any — falls into place. This lesson starts from that foundation and climbs to the subtle a few vs few distinction.",
        hi: "'many informations' या 'few advices' कहने की जड़ एक ही समस्या है: हर अंग्रेज़ी संज्ञा गिनी नहीं जा सकती। countable और uncountable में फ़र्क़ समझते ही पूरा quantifier परिवार — much/many, few/little, some/any — अपने आप व्यवस्थित हो जाता है। यह पाठ उसी नींव से शुरू होता है।",
      },
      roadmap: [
        { bn: "🧩 countable নাকি uncountable — পুরো কোয়ান্টিফায়ার পরিবারের ভিত্তি", en: "🧩 Countable or uncountable — the base of the whole quantifier family", hi: "🧩 countable या uncountable — पूरे quantifier परिवार की नींव" },
        { bn: "🚦 much/many কোথায় বসে — প্রশ্ন-অস্বীকারের ঘর, রোজকার বাক্যে a lot of", en: "🚦 Where much/many live — questions and negatives; a lot of in everyday positives", hi: "🚦 much/many कहाँ बैठते हैं — प्रश्न-नकारात्मक का घर, रोज़मर्रा में a lot of" },
        { bn: "⚖️ a few/few, a little/little — 'a' আছে কি নেই, সুর আর অর্থ বদলে যায়", en: "⚖️ a few vs few, a little vs little — with or without 'a', tone and meaning flip", hi: "⚖️ a few/few, a little/little — 'a' है या नहीं, सुर और अर्थ बदल जाता है" },
        { bn: "🤝 some/any-র রোজকার নিয়ম — সাথে দুটো জরুরি ব্যতিক্রম", en: "🤝 The everyday some/any rules — plus two key exceptions", hi: "🤝 some/any का रोज़मर्रा नियम — साथ में दो ज़रूरी अपवाद" },
      ],
      sections: [
        {
          heading: {
            bn: "🧩 গোনা যায় নাকি যায় না — ভিত্তি",
            en: "🧩 Countable or uncountable — the foundation",
            hi: "🧩 गिनने योग्य या नहीं — नींव",
          },
          lead: {
            bn: "কোয়ান্টিফায়ারের পুরো পরিবার দাঁড়িয়ে একটাই প্রশ্নের উপর — গোনা যায়, নাকি মাপা হয়।",
            en: "The whole quantifier family rests on one question — counted, or measured?",
            hi: "पूरा quantifier परिवार एक ही सवाल पर टिका है — गिना जाता है या मापा?",
          },
          points: [
            { bn: "**Countable noun** — এক, দুই করে গোনা যায়, plural রূপ নেয়: books, cars, friends।", en: "**Countable nouns** can be counted one by one and take plurals: books, cars, friends.", hi: "**Countable noun** — एक-एक करके गिने जा सकते हैं, plural लेते हैं: books, cars, friends।" },
            { bn: "**Uncountable noun** — মাপা হয়, গোনা হয় না: water, money, information, advice, furniture, luggage, news, hair।", en: "**Uncountable nouns** are measured, not counted: water, money, information, advice, furniture, luggage, news, hair.", hi: "**Uncountable noun** — मापे जाते हैं, गिने नहीं: water, money, information, advice, furniture, luggage, news, hair।" },
            { bn: "uncountable-এ plural s নেই, ক্রিয়া একবচন: The news is good।", en: "Uncountables take no plural s and a singular verb: The news is good.", hi: "uncountable में plural s नहीं, क्रिया एकवचन: The news is good।" },
            { bn: "বাংলায় 'তথ্যগুলো', 'উপদেশগুলো' plural-এর মতো শোনায় — তাই বাংলাভাষীরা informations, advices, furnitures বলে ফেলেন।", en: "Bangla says 'তথ্যগুলো/উপদেশগুলো' like plurals — which is why Bengali speakers slip into informations, advices, furnitures.", hi: "बांग्ला में 'तथ्यगुलो', 'उपदेशगुलो' plural जैसा लगता है — इसीलिए informations, advices, furnitures निकल जाता है।" },
            { bn: "গুনতে হলে পরিমাপ-শব্দ লাগবে: two pieces of advice।", en: "To count them you need a measure word: two pieces of advice.", hi: "गिनने के लिए माप-शब्द चाहिए: two pieces of advice।" },
            { bn: "আরও দেখুন: a piece of furniture, three items of luggage।", en: "More of the same: a piece of furniture, three items of luggage.", hi: "और देखें: a piece of furniture, three items of luggage।" },
          ],
          table: {
            head: [
              { bn: "বৈশিষ্ট্য", en: "Feature", hi: "विशेषता" },
              { bn: "Countable", en: "Countable", hi: "Countable" },
              { bn: "Uncountable", en: "Uncountable", hi: "Uncountable" },
            ],
            rows: [
              [{ bn: "উদাহরণ", en: "Examples", hi: "उदाहरण" }, { bn: "books, cars, friends", en: "books, cars, friends", hi: "books, cars, friends" }, { bn: "water, money, information, advice", en: "water, money, information, advice", hi: "water, money, information, advice" }],
              [{ bn: "plural -s", en: "plural -s", hi: "plural -s" }, { bn: "নেয়", en: "yes", hi: "हाँ" }, { bn: "নেই", en: "no", hi: "नहीं" }],
              [{ bn: "ক্রিয়া", en: "Verb", hi: "क्रिया" }, { bn: "সাধারণ রূপ", en: "normal", hi: "सामान्य" }, { bn: "একবচন — The news is good", en: "singular — The news is good", hi: "एकवचन — The news is good" }],
              [{ bn: "গোনার উপায়", en: "Counting", hi: "गिनने का तरीका" }, { bn: "সরাসরি সংখ্যা: two books", en: "numbers directly: two books", hi: "सीधे संख्या: two books" }, { bn: "পরিমাপ-শব্দ: two pieces of advice", en: "measure word: two pieces of advice", hi: "माप-शब्द: two pieces of advice" }],
            ],
          },
          examples: [
            {
              wrong: "She gave me many useful informations.",
              right: "She gave me a lot of useful information.",
              note: {
                bn: "information uncountable — s নেই, many নয়; 'অনেক' বোঝাতে a lot of / much information (আনুষ্ঠানিক লেখায়)।",
                en: "'Information' is uncountable — no plural s, no 'many'; say a lot of information (or much in formal writing).",
                hi: "'information' uncountable — plural s नहीं, many नहीं; 'बहुत' के लिए a lot of information।",
              },
            },
            {
              wrong: "My hairs are getting long.",
              right: "My hair is getting long.",
              note: {
                bn: "সাধারণ অর্থে hair uncountable — একবচন; 'hairs' শুধু আলাদা আলাদা গোনা যায় এমন রোমের অর্থে (There are two hairs in my soup)।",
                en: "In general senses 'hair' is uncountable and singular; 'hairs' survives only for countable individual strands (two hairs in my soup).",
                hi: "सामान्य अर्थ में 'hair' uncountable — एकवचन; 'hairs' केवल गिनने योग्य अलग तिनकों के लिए।",
              },
            },
            {
              wrong: "I have three luggages.",
              right: "I have three pieces of luggage.",
              note: {
                bn: "luggage uncountable — সরাসরি সংখ্যা বসানো যায় না; গুনতে piece/bag/item ব্যবহার করুন: three bags of luggage।",
                en: "'Luggage' is uncountable — numbers cannot attach to it directly; count with piece/bag/item: three bags of luggage.",
                hi: "'luggage' uncountable — संख्या सीधे नहीं जुड़ती; गिनने के लिए piece/bag/item लगाएँ।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🚦 much ও many: প্রশ্ন আর অস্বীকারের জায়গা",
            en: "🚦 much and many: home in questions and negatives",
            hi: "🚦 much और many: प्रश्न और नकारात्मक वाक्यों में",
          },
          lead: {
            bn: "many গোনা যায় এমন জিনিসে, much যায় না — আর দুটোর আসল ঘর প্রশ্ন ও অস্বীকার।",
            en: "many for countables, much for uncountables — and both really live in questions and negatives.",
            hi: "many गिनने योग्य चीज़ों में, much न गिनने योग्य में — और दोनों का असली घर प्रश्न-नकारात्मक।",
          },
          points: [
            { bn: "**many** + countable plural: many friends।", en: "**many** + countable plural: many friends.", hi: "**many** + countable plural: many friends।" },
            { bn: "**much** + uncountable: much time।", en: "**much** + uncountable: much time.", hi: "**much** + uncountable: much time।" },
            { bn: "ইতিবাচক বিবৃতিতে much/many জোরালো-আনুষ্ঠানিক শোনায়; এদের ঘর প্রশ্ন আর অস্বীকার।", en: "In positive statements much/many sound heavy and formal; their natural home is questions and negatives.", hi: "सकारात्मक कथन में much/many भारी-औपचारिक लगते हैं; इनका घर प्रश्न और नकारात्मक।" },
            { bn: "প্রশ্ন-অস্বীকারের উদাহরণ: Do you have many friends? / I don't have much time।", en: "Examples: Do you have many friends? / I don't have much time.", hi: "उदाहरण: Do you have many friends? / I don't have much time।" },
            { bn: "সাধারণ ইতিবাচক বাক্যে a lot of / lots of — দুই ধরনের নামেই চলে: I have a lot of work।", en: "Everyday positives take a lot of / lots of — they work with both kinds: I have a lot of work.", hi: "साधारण सकारात्मक वाक्य में a lot of / lots of — दोनों प्रकार के साथ चलते हैं: I have a lot of work।" },
            { bn: "প্রশ্ন করার জুটি: How much (অর্থ/পরিমাণ), How many (গণনা)।", en: "The asking pair: How much (money/amount), How many (count).", hi: "पूछने की जोड़ी: How much (रक़म/मात्रा), How many (गिनती)।" },
          ],
          formula: {
            bn: "many + countable (plural) • much + uncountable — ঘর: প্রশ্ন ও অস্বীকার • ইতিবাচক বাক্যে a lot of",
            en: "many + countable (plural) • much + uncountable — home: questions & negatives • positives take a lot of",
            hi: "many + countable (plural) • much + uncountable — घर: प्रश्न व नकारात्मक • सकारात्मक में a lot of",
          },
          examples: [
            {
              wrong: "I have much friends here.",
              right: "I have a lot of friends here.",
              note: {
                bn: "friends countable + ইতিবাচক বাক্য → a lot of; আনুষ্ঠানিক লেখায় many friends হবে, much কখনো নয়।",
                en: "'Friends' is countable and the sentence is positive → a lot of (or 'many' in formal writing); 'much' never fits a countable noun.",
                hi: "'friends' countable और वाक्य सकारात्मक → a lot of (औपचारिक लेखन में many); 'much' countable के साथ कभी नहीं।",
              },
            },
            {
              wrong: "How many money do you need?",
              right: "How much money do you need?",
              note: {
                bn: "money uncountable → how much; নিয়মটা মনে রাখুন: গুনলে how many, মাপলে how much।",
                en: "'Money' is uncountable → how much; remember: count it → how many, measure it → how much.",
                hi: "'money' uncountable → how much; नियम: गिनना → how many, मापना → how much।",
              },
            },
            {
              wrong: "I don't have many time today.",
              right: "I don't have much time today.",
              note: {
                bn: "time এখানে uncountable ('সময়' সাধারণ অর্থে) → অস্বীকারেও much; many বসে শুধু গোনা যায় এমন জিনিসে।",
                en: "'Time' in the general sense is uncountable, so even in negatives it takes 'much'; 'many' needs a countable noun.",
                hi: "'time' यहाँ uncountable है, इसलिए नकारात्मक में भी 'much'; 'many' केवल गिनने योग्य संज्ञा के साथ।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "⚖️ a few বনাম few, a little বনাম little",
            en: "⚖️ a few vs few, a little vs little",
            hi: "⚖️ a few बनाम few, a little बनाम little",
          },
          lead: {
            bn: "এই জোড়ার ফারাক অর্থের নয়, মনোভাবের — ছোট্ট 'a' আছে কি নেই, সেটাই সুর ঠিক করে।",
            en: "The gap here is attitude, not arithmetic — the little 'a' sets the tone.",
            hi: "इस जोड़ी का फ़र्क़ अर्थ का नहीं, भाव का है — छोटा-सा 'a' ही सुर तय करता है।",
          },
          points: [
            { bn: "**a few** (কয়েকটা — যথেষ্ট, খুশির সুর) + countable: I have a few friends here = বেশ কয়েকজন বন্ধু আছে।", en: "**a few** (some — a positive tone) + countable: I have a few friends here.", hi: "**a few** (कुछ — खुश सुर) + countable: I have a few friends here।" },
            { bn: "**few** (প্রায় কোনোটাই নেই — হতাশার সুর) + countable: I have few friends here = বন্ধু বলে প্রায় কেউ নেই।", en: "**few** (hardly any — a negative tone) + countable: I have few friends here.", hi: "**few** (लगभग कोई नहीं — निराश सुर) + countable: I have few friends here।" },
            { bn: "**a little** (একটু — যথেষ্ট) + uncountable: We have a little time।", en: "**a little** (some — enough) + uncountable: We have a little time.", hi: "**a little** (थोड़ा — काफ़ी) + uncountable: We have a little time।" },
            { bn: "**little** (অপর্যাপ্ত) + uncountable: We have little time — সময় বলে প্রায় নেই, উদ্বেগের সুর।", en: "**little** (not enough) + uncountable: We have little time — almost no time, a worried tone.", hi: "**little** (अपर्याप्त) + uncountable: We have little time — समय लगभग नहीं, चिंता का सुर।" },
            { bn: "শর্টকাট: 'a' আছে মানে মুখে হাসি, 'a' নেই মানে মুখে হতাশা।", en: "Shortcut: with 'a' you smile; without 'a' you sigh.", hi: "शॉर्टकट: 'a' हो तो मुस्कान, 'a' न हो तो आह।" },
          ],
          formula: {
            bn: "countable-এ a few/few • uncountable-এ a little/little — 'a' থাকলে যথেষ্ট, না থাকলে অপর্যাপ্ত",
            en: "countable → a few/few • uncountable → a little/little — 'a' means enough, no 'a' means not enough",
            hi: "countable में a few/few • uncountable में a little/little — 'a' हो तो काफ़ी, न हो तो कम",
          },
          table: {
            head: [
              { bn: "কোয়ান্টিফায়ার", en: "Quantifier", hi: "Quantifier" },
              { bn: "Countable-এর সাথে", en: "with countables", hi: "countable के साथ" },
              { bn: "Uncountable-এর সাথে", en: "with uncountables", hi: "uncountable के साथ" },
            ],
            rows: [
              [{ bn: "অনেক (প্রশ্ন-অস্বীকার)", en: "a lot (questions/negatives)", hi: "बहुत (प्रश्न-नकारात्मक)" }, { bn: "many", en: "many", hi: "many" }, { bn: "much", en: "much", hi: "much" }],
              [{ bn: "অনেক (রোজকার ইতিবাচক)", en: "a lot (everyday positives)", hi: "बहुत (रोज़मर्रा सकारात्मक)" }, { bn: "a lot of", en: "a lot of", hi: "a lot of" }, { bn: "a lot of", en: "a lot of", hi: "a lot of" }],
              [{ bn: "অল্প — খুশির সুর ('a' সহ)", en: "some — positive tone (with 'a')", hi: "थोड़ा — खुश सुर ('a' सहित)" }, { bn: "a few = কয়েকটা, যথেষ্ট", en: "a few = some, enough", hi: "a few = कुछ, पर्याप्त" }, { bn: "a little = একটু, যথেষ্ট", en: "a little = some, enough", hi: "a little = थोड़ा, काफ़ी" }],
              [{ bn: "অল্প — হতাশার সুর ('a' ছাড়া)", en: "hardly any — negative tone (no 'a')", hi: "लगभग नहीं — निराश सुर ('a' रहित)" }, { bn: "few = প্রায় কোনোটাই নেই", en: "few = hardly any", hi: "few = लगभग कोई नहीं" }, { bn: "little = অপর্যাপ্ত, উদ্বেগ", en: "little = not enough, worry", hi: "little = अपर्याप्त, चिंता" }],
            ],
          },
          examples: [
            {
              wrong: "Don't worry, we have little time before the train.",
              right: "Don't worry, we have a little time before the train.",
              note: {
                bn: "আশ্বাস দিচ্ছেন, অর্থাৎ অল্প হলেও যথেষ্ট — a little; little বললে বাক্যটা ভয় দেখানো হয়ে যায় ('সময় বলে প্রায় নেই')।",
                en: "You are reassuring someone, so the amount is enough — a little; 'little time' would actually scare them (almost no time).",
                hi: "आप आश्वासन दे रहे हैं, इसलिए थोड़ा ही काफ़ी है — a little; 'little time' कहते ही डर लग जाएगा।",
              },
            },
            {
              wrong: "The question was hard, so a few students passed.",
              right: "The question was hard, so few students passed.",
              note: {
                bn: "কঠিন প্রশ্নে নেতিবাচক ফল — প্রায় কেউ পাস করেনি → few; a few বললে বোঝায় 'বেশ কয়েকজন পাস করেছে', অর্থ উল্টে যায়।",
                en: "A hard question gives a negative outcome — hardly anyone passed → few; 'a few passed' would claim quite a few did, reversing the meaning.",
                hi: "कठिन प्रश्न का नकारात्मक नतीजा — लगभग कोई पास नहीं हुआ → few; 'a few' कहते ही अर्थ उलट जाएगा।",
              },
            },
            {
              wrong: "Give me few minutes to finish.",
              right: "Give me a few minutes to finish.",
              note: {
                bn: "'কয়েক মিনিট দিন' = a few minutes; few minutes বললে অর্থ দাঁড়ায় 'প্রায় কোনো মিনিট নেই' — অনুরোধে সবসময় a few।",
                en: "The request means 'some minutes' — a few minutes; 'few minutes' claims there are almost none, so requests always take a few.",
                hi: "अनुरोध का अर्थ 'कुछ मिनट' — a few minutes; 'few minutes' कहते ही लगभग कुछ नहीं बन जाएगा।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🤝 some আর any",
            en: "🤝 some and any",
            hi: "🤝 some और any",
          },
          lead: {
            bn: "রোজকার জুটি — some ইতিবাচকে, any অস্বীকার-প্রশ্নে; দুটো ব্যতিক্রমও শিখে নিন।",
            en: "The everyday pair — some in positives, any in negatives and questions; learn the two exceptions too.",
            hi: "रोज़मर्रा की जोड़ी — some सकारात्मक में, any नकारात्मक-प्रश्न में; दो अपवाद भी सीखें।",
          },
          points: [
            { bn: "**some** সাধারণত ইতিবাচক বাক্যে: I have some questions।", en: "**some** normally appears in positives: I have some questions.", hi: "**some** सामान्यतः सकारात्मक वाक्य में: I have some questions।" },
            { bn: "**any** অস্বীকার ও প্রশ্নে: I don't have any money; Do you have any questions?", en: "**any** in negatives and questions: I don't have any money; Do you have any questions?", hi: "**any** नकारात्मक और प्रश्न में: I don't have any money; Do you have any questions?" },
            { bn: "ব্যতিক্রম এক: অফার বা অনুরোধে some — উত্তর 'হ্যাঁ' আশা করছি: Would you like some tea?", en: "Exception one: offers and requests take some — you expect a yes: Would you like some tea?", hi: "अपवाद एक: पेशकश-अनुरोध में some — 'हाँ' की आशा में: Would you like some tea?" },
            { bn: "ব্যতিক্রম দুই: 'যেকোনো' অর্থে any ইতিবাচক বাক্যেও চলে: You can come at any time।", en: "Exception two: any meaning 'it doesn't matter which' works in positives: You can come at any time.", hi: "अपवाद दो: 'कोई भी' अर्थ में any सकारात्मक में भी: You can come at any time।" },
            { bn: "something/anyone/nowhere জাতীয় শব্দেও একই নিয়ম খাটে।", en: "The same rules govern compounds like something/anyone/nowhere.", hi: "something/anyone/nowhere जैसे शब्दों में भी वही नियम चलता है।" },
          ],
          formula: {
            bn: "some → ইতিবাচক • any → অস্বীকার ও প্রশ্ন • অফার-অনুরোধে some, 'যেকোনো' অর্থে any",
            en: "some → positives • any → negatives & questions • offers take some, any = 'whichever'",
            hi: "some → सकारात्मक • any → नकारात्मक व प्रश्न • पेशकश में some, any = 'कोई भी'",
          },
          examples: [
            {
              wrong: "I don't have some money with me.",
              right: "I don't have any money with me.",
              note: {
                bn: "অস্বীকারে some-এর জায়গা নেই — any বসে; এটা some/any-এর সবচেয়ে বেশি ভুল হওয়া নিয়ম।",
                en: "Negatives swap some for any — this is the most frequently broken rule in the some/any pair.",
                hi: "नकारात्मक वाक्य में some की जगह any — यही सबसे अधिक टूटने वाला नियम है।",
              },
            },
            {
              wrong: "Would you like any coffee?",
              right: "Would you like some coffee?",
              note: {
                bn: "অফার করলে some — কারণ আপনি চান উত্তর 'হ্যাঁ' হোক; any দিলে প্রশ্নটা উদাসীন শোনায়।",
                en: "Offers take some because you hope for a yes; 'any coffee' makes the offer sound indifferent.",
                hi: "पेशकश में some — क्योंकि 'हाँ' की उम्मीद है; 'any coffee' कहते ही पेशकश उदासीन लगती है।",
              },
            },
            {
              wrong: "Any students were late today.",
              right: "Some students were late today.",
              note: {
                bn: "সাধারণ ইতিবাচক বিবৃতিতে some; any বসালে অর্থ দাঁড়ায় 'যেকোনো শিক্ষার্থী' — বাক্য অর্থহীন হয়ে যায়।",
                en: "A plain positive statement takes some; 'any students' would mean 'whichever students you like', which breaks the sentence.",
                hi: "साधारण सकारात्मक कथन में some; 'any students' का अर्थ 'कोई भी छात्र' हो जाएगा, वाक्य अर्थहीन हो जाएगा।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "দিনে একবার ঘরের জিনিস দুই কলামে ভাগ করুন: countable / uncountable — furniture, information, advice, news, luggage যাবে ডান কলামে।",
          en: "Once a day, split the things around you into two columns: countable / uncountable — furniture, information, advice, news, luggage go right.",
          hi: "रोज़ एक बार आसपास की चीज़ें दो कॉलम में बाँटें: countable / uncountable — furniture, information, advice, news, luggage दाएँ।",
        },
        {
          bn: "বাজার-হোটেলের বাক্যে প্র্যাকটিস করুন: Could I have some...? / How much...? / How many...? — quantifier সবচেয়ে দ্রুত শেখা যায় অর্ডার দিতে দিতে।",
          en: "Practise with shopping and restaurant lines: Could I have some...? / How much...? / How many...? — quantifiers stick fastest while ordering.",
          hi: "बाज़ार-रेस्तराँ के वाक्यों में अभ्यास करें: Could I have some...? / How much...? / How many...? — quantifier ऑर्डर करते हुए सबसे तेज़ सीखे जाते हैं।",
        },
        {
          bn: "a few/few-এর শর্টকাট: 'a' আছে = মুখে হাসি, 'a' নেই = মুখে হতাশা — বলার সময় সেই অনুযায়ী সুরও দিন।",
          en: "Shortcut for a few/few: with 'a' you smile, without 'a' you sigh — match your tone to it when speaking.",
          hi: "a few/few का शॉर्टकट: 'a' हो तो मुस्कान, न हो तो आह — बोलते समय लहजा भी मिलाएँ।",
        },
        {
          bn: "প্রতিদিন একটা Is there any...? প্রশ্ন আর দুই উত্তর লিখুন: Yes, there's some... / No, there isn't any... — তিন লাইনেই some/any কাঁধে নেমে আসে।",
          en: "Daily, write one Is there any...? question with both answers: Yes, there's some... / No, there isn't any... — three lines and some/any settles in.",
          hi: "रोज़ एक Is there any...? प्रश्न और दोनों उत्तर लिखें: Yes, there's some... / No, there isn't any... — तीन पंक्तियों में some/any बैठ जाता है।",
        },
      ],
    },
  },

  /* ── 3. Question Tags & Short Answers (unit 0 → sortOrder 15) ───────── */
  {
    topic: "Question Tags & Short Answers",
    level: "intermediate",
    title: "Question Tags & Short Answers (Intermediate)",
    unit: 0,
    sortOrder: 15,
    data: {
      title: {
        bn: "কোয়েশ্চেন ট্যাগ ও শর্ট আনসার (মধ্যম স্তর)",
        en: "Question Tags & Short Answers (Intermediate)",
        hi: "क्वेश्चन टैग और शॉर्ट आंसर (मध्यम स्तर)",
      },
      intro: {
        bn: "'তুমি আসবে, তাই না?' — এই ছোট্ট 'তাই না'-র ইংরেজি রূপ বদলে যায় বাক্য অনুযায়ী: aren't you? / won't you? / do you?। আর উত্তর দিতে গিয়ে 'Yes, I like' বলা বাংলাভাষীদের ক্লাসিক ভুল — ইংরেজি শর্ট আনসার সাহায্যকারী ক্রিয়া দিয়ে চলে। কথোপকথনে এই দুটোই প্রতিনিয়ত লাগে, তাই এখানে নিখুঁত হওয়া জরুরি।",
        en: "'তাই না?' changes shape in English: aren't you? / won't you? / do you? — the tag mirrors the verb of the sentence. And answering with 'Yes, I like' is the classic Bengali-speaker slip: short answers run on auxiliary verbs. Both come up constantly in conversation, so this lesson drills the tag rule, the special cases, short answers and the meaning of tag intonation.",
        hi: "'है न?' अंग्रेज़ी में बदलता रहता है: aren't you? / won't you? / do you? — टैग वाक्य की क्रिया का प्रतिबिंब है। और 'Yes, I like' कहना बांग्लाभाषियों की क्लासिक चूक है — शॉर्ट आंसर सहायक क्रिया से चलते हैं। दोनों बातचीत में रोज़ लगते हैं।",
      },
      roadmap: [
        { bn: "🔀 ট্যাগের মূল সূত্র — পজিটিভে নেগেটিভ ট্যাগ, auxiliary মেলান", en: "🔀 The core tag rule — positive gets a negative tag, match the auxiliary", hi: "🔀 टैग का मूल सूत्र — सकारात्मक पर नकारात्मक टैग, auxiliary मिलाएँ" },
        { bn: "📌 নিয়মের বাইরের ট্যাগ — I am, Let's, imperative, there, everyone", en: "📌 Tags outside the rule — I am, Let's, imperatives, there, everyone", hi: "📌 नियम से बाहर के टैग — I am, Let's, imperative, there, everyone" },
        { bn: "💬 শর্ট আনসার — Yes/No + সাহায্যকারী; উত্তর মেলে সত্যের সাথে", en: "💬 Short answers — Yes/No + auxiliary; answers agree with the truth", hi: "💬 शॉर्ट आंसर — Yes/No + सहायक; उत्तर सच से मेल खाता है" },
        { bn: "🎵 ট্যাগের সুর — falling মানে সম্মতি চাওয়া, rising মানে আসল প্রশ্ন", en: "🎵 The music of tags — falling seeks agreement, rising asks for real", hi: "🎵 टैग का संगीत — falling यानी सहमति, rising यानी असली सवाल" },
      ],
      sections: [
        {
          heading: {
            bn: "🔀 মূল নিয়ম: positive হলে negative ট্যাগ",
            en: "🔀 The core rule: positive statement, negative tag",
            hi: "🔀 मूल नियम: सकारात्मक वाक्य, नकारात्मक टैग",
          },
          lead: {
            bn: "ট্যাগ আয়নার মতো — বাক্যের উল্টো হয়, বাকি সব মিলে থাকে।",
            en: "The tag is a mirror — opposite of the statement, everything else matched.",
            hi: "टैग आईने जैसा — वाक्य का उल्टा, बाकी सब मेल।",
          },
          points: [
            { bn: "ইতিবাচক বাক্যের পরে ঋণাত্মক ট্যাগ: You are tired, aren't you?", en: "A positive statement takes a negative tag: You are tired, aren't you?", hi: "सकारात्मक वाक्य के बाद नकारात्मक टैग: You are tired, aren't you?" },
            { bn: "ঋণাত্মক বাক্যের পরে ইতিবাচক ট্যাগ: You aren't tired, are you?", en: "A negative statement takes a positive tag: You aren't tired, are you?", hi: "नकारात्मक वाक्य के बाद सकारात्मक टैग: You aren't tired, are you?" },
            { bn: "ট্যাগের ক্রিয়া = মূল বাক্যের প্রথম সাহায্যকারী (is/are/have/will/can)।", en: "The tag verb mirrors the statement's first auxiliary (is/are/have/will/can).", hi: "टैग की क्रिया = वाक्य की पहली सहायक क्रिया (is/are/have/will/can)।" },
            { bn: "সাহায্যকারী না থাকলে do/does/did আসে: She works here, doesn't she?", en: "No auxiliary? do/does/did steps in: She works here, doesn't she?", hi: "सहायक न हो तो do/does/did आता है: She works here, doesn't she?" },
            { bn: "কর্তাও বদলে pronoun হয়: The weather is nice, isn't it?", en: "The subject turns into a pronoun: The weather is nice, isn't it?", hi: "कर्ता बदलकर pronoun हो जाता है: The weather is nice, isn't it?" },
            { bn: "আর কাল বদলায় না: You went there, didn't you?", en: "And the tense never changes: You went there, didn't you?", hi: "और काल नहीं बदलता: You went there, didn't you?" },
          ],
          formula: {
            bn: "পজিটিভ বাক্য → নেগেটিভ ট্যাগ, নেগেটিভ → পজিটিভ; auxiliary মেলান, কর্তা pronoun",
            en: "positive → negative tag, negative → positive; match the auxiliary, pronoun subject",
            hi: "सकारात्मक → नकारात्मक टैग, नकारात्मक → सकारात्मक; auxiliary मिलाएँ, कर्ता pronoun",
          },
          examples: [
            {
              wrong: "You like tea, isn't it?",
              right: "You like tea, don't you?",
              note: {
                bn: "দুটো ভুল একসাথে: মূল বাক্যে সাহায্যকারী নেই, তাই do জাতীয় ট্যাগ (don't you); আর ট্যাগ কর্তার pronoun নেয় — you, 'it' নয়।",
                en: "Two errors at once: the statement has no auxiliary, so the tag needs do (don't you); and the tag takes the subject's pronoun — 'you', never 'it'.",
                hi: "दो गलतियाँ एक साथ: वाक्य में सहायक क्रिया नहीं, इसलिए do-टैग (don't you); और टैग कर्ता का pronoun लेता है — 'you', 'it' नहीं।",
              },
            },
            {
              wrong: "She didn't call, didn't she?",
              right: "She didn't call, did she?",
              note: {
                bn: "ঋণাত্মক বাক্যের পরে ইতিবাচক ট্যাগ — did she; দুটো negative পাশাপাশি আসে না।",
                en: "A negative statement flips to a positive tag — did she; two negatives never sit side by side.",
                hi: "नकारात्मक वाक्य के बाद सकारात्मक टैग — did she; दो negatives साथ नहीं बैठते।",
              },
            },
            {
              wrong: "They have arrived, isn't it?",
              right: "They have arrived, haven't they?",
              note: {
                bn: "মূল বাক্যের সাহায্যকারী (have) ট্যাগেই ফিরে আসে, কর্তা হয়ে যায় they — 'isn't it' এখানে কোনো ভূমিকাই রাখে না।",
                en: "The statement's own auxiliary (have) returns as the tag, and the subject becomes they — 'isn't it' has no role here.",
                hi: "वाक्य की अपनी सहायक क्रिया (have) ही टैग बनती है, कर्ता 'they' हो जाता है — 'isn't it' का यहाँ कोई स्थान नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "📌 বিশেষ ক্ষেত্র: I am, Let's, imperative",
            en: "📌 Special cases: I am, Let's, imperatives",
            hi: "📌 विशेष स्थितियाँ: I am, Let's, आदेश",
          },
          lead: {
            bn: "কয়েকটা ট্যাগ নিয়মের বাইরে — মুখস্থ ছাড়া উপায় নেই, ছকটা দেখুন।",
            en: "A few tags break the pattern — memorising is the only way; see the table.",
            hi: "कुछ टैग नियम से बाहर — रटने के अलावा उपाय नहीं; टेबल देखें।",
          },
          points: [
            { bn: "I am-বাক্যের ট্যাগ aren't I? — ইংরেজিতে 'amn't I' নেই: I am late, aren't I?", en: "The tag for 'I am' is aren't I? — 'amn't I' does not exist: I am late, aren't I?", hi: "'I am' वाले वाक्य का टैग aren't I? — 'amn't I' अंग्रेज़ी में नहीं: I am late, aren't I?" },
            { bn: "Let's দিয়ে শুরু হলে জোড়াটা shall we?: Let's start, shall we?", en: "Sentences starting with Let's pair with shall we?: Let's start, shall we?", hi: "Let's से शुरू वाक्य की जोड़ी shall we?: Let's start, shall we?" },
            { bn: "আদেশ/অনুরোধে will you? — নম্র সুরে won't you? বা would you?: Open the door, will you?", en: "Orders/requests take will you? — softer: won't you? / would you?: Open the door, will you?", hi: "आदेश/अनुरोध में will you? — कोमल सुर में won't you? या would you?: Open the door, will you?" },
            { bn: "there is/are বাক্যে there-ই ট্যাগে থাকে: There's a problem, isn't there?", en: "With there is/are, 'there' stays in the tag: There's a problem, isn't there?", hi: "there is/are वाले वाक्य में 'there' ही टैग में रहता है: There's a problem, isn't there?" },
            { bn: "everyone/everybody/nobody-র ট্যাগ সবসময় they: Everyone came, didn't they?", en: "everyone/everybody/nobody always take they: Everyone came, didn't they?", hi: "everyone/everybody/nobody का टैग हमेशा they: Everyone came, didn't they?" },
          ],
          table: {
            head: [
              { bn: "বাক্য দিয়ে শুরু", en: "Sentence starts", hi: "वाक्य शुरू" },
              { bn: "ট্যাগ হবে", en: "The tag", hi: "टैग" },
            ],
            rows: [
              [{ bn: "I am...", en: "I am...", hi: "I am..." }, { bn: "aren't I?", en: "aren't I?", hi: "aren't I?" }],
              [{ bn: "Let's...", en: "Let's...", hi: "Let's..." }, { bn: "shall we?", en: "shall we?", hi: "shall we?" }],
              [{ bn: "Imperative (আদেশ/অনুরোধ)", en: "Imperative (order/request)", hi: "Imperative (आदेश/अनुरोध)" }, { bn: "will you? (নম্র সুরে won't you? / would you?)", en: "will you? (softer: won't you? / would you?)", hi: "will you? (कोमल सुर में won't you? / would you?)" }],
              [{ bn: "There is/are...", en: "There is/are...", hi: "There is/are..." }, { bn: "isn't there? / aren't there?", en: "isn't there? / aren't there?", hi: "isn't there? / aren't there?" }],
              [{ bn: "Everyone/Nobody...", en: "Everyone/Nobody...", hi: "Everyone/Nobody..." }, { bn: "didn't they? — সবসময় they", en: "didn't they? — always they", hi: "didn't they? — हमेशा they" }],
            ],
          },
          examples: [
            {
              wrong: "I am in your group, amn't I?",
              right: "I am in your group, aren't I?",
              note: {
                bn: "'amn't I' শব্দটাই ইংরেজিতে নেই — I am-বাক্যের প্রচলিত ট্যাগ aren't I; এটা একমাত্র ব্যতিক্রম যেখানে aren't কর্তা I-এর সাথে বসে।",
                en: "'Amn't I' simply does not exist — the standard tag for 'I am' is aren't I, the one case where aren't pairs with I.",
                hi: "'amn't I' शब्द ही अंग्रेज़ी में नहीं — 'I am' का मानक टैग aren't I ही है, यही एकमात्र स्थिति जहाँ aren't के साथ I बैठता है।",
              },
            },
            {
              wrong: "Let's start the meeting, will we?",
              right: "Let's start the meeting, shall we?",
              note: {
                bn: "Let's মানেই প্রস্তাব — প্রস্তাবের ট্যাগ shall we; will we এখানে অনবিচ্ছিন্ন বিদেশি শোনায়।",
                en: "'Let's' is a proposal, and proposals pair with shall we; 'will we' sounds distinctly foreign here.",
                hi: "'Let's' का अर्थ ही प्रस्ताव है — प्रस्ताव की जोड़ी shall we; 'will we' यहाँ विदेशी लगता है।",
              },
            },
            {
              wrong: "Nobody phoned, did he?",
              right: "Nobody phoned, did they?",
              note: {
                bn: "nobody/everyone জাতীয় শব্দের নির্দিষ্ট লিঙ্গ নেই, তাই ট্যাগে নিরপেক্ষ they বসে — he/she নয়।",
                en: "Words like nobody/everyone have no fixed gender, so the tag takes neutral they — not he or she.",
                hi: "nobody/everyone जैसे शब्दों का निश्चित लिंग नहीं — टैग में तटस्थ they आता है, he/she नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "💬 শর্ট আনসার: Yes/No + সাহায্যকারী",
            en: "💬 Short answers: Yes/No + the auxiliary",
            hi: "💬 शॉर्ट आंसर: Yes/No + सहायक क्रिया",
          },
          lead: {
            bn: "উত্তরে মূল ক্রিয়া ঢুকবে না — শুধু Yes/No, সাহায্যকারী আর pronoun।",
            en: "The main verb stays out — only Yes/No, the auxiliary and a pronoun.",
            hi: "उत्तर में मुख्य क्रिया नहीं — केवल Yes/No, सहायक क्रिया और pronoun।",
          },
          points: [
            { bn: "**শর্ট আনসার** = Yes/No + সেই সাহায্যকারী + কর্তা-pronoun: Yes, I do / No, I don't।", en: "**Short answer** = Yes/No + the same auxiliary + a subject pronoun: Yes, I do / No, I don't.", hi: "**शॉर्ट आंसर** = Yes/No + वही सहायक + कर्ता-pronoun: Yes, I do / No, I don't।" },
            { bn: "আরও ছকের রূপ: Yes, she has / No, she hasn't।", en: "More of the pattern: Yes, she has / No, she hasn't.", hi: "और रूप: Yes, she has / No, she hasn't।" },
            { bn: "মূল ক্রিয়া এখানে আসে না — 'Yes, I like' ভুল, 'Yes, I do' ঠিক।", en: "The main verb never enters — 'Yes, I like' is wrong, 'Yes, I do' is right.", hi: "मुख्य क्रिया यहाँ नहीं आती — 'Yes, I like' गलत, 'Yes, I do' सही।" },
            { bn: "ঋণাত্মক প্রশ্নের উত্তর ইংরেজিতে সত্যের সাথে মেলে, প্রশ্নের ঢঙের সাথে নয়।", en: "Answers to negative questions agree with the FACT, not with the question's wording.", hi: "नकारात्मक प्रश्न का उत्तर सच से मेल खाता है, प्रश्न की भाषा से नहीं।" },
            { bn: "Don't you like tea? — পছন্দ হলে Yes, I do; না হলে No, I don't।", en: "Don't you like tea? — if you like it: Yes, I do; if not: No, I don't.", hi: "Don't you like tea? — पसंद है तो Yes, I do; नहीं तो No, I don't।" },
            { bn: "বাংলার 'হ্যাঁ, পছন্দ করি না' শব্দে শব্দে অনুবাদ করলে এখানেই ফাঁদে পড়বেন।", en: "Translate Bangla's 'হ্যাঁ, পছন্দ করি না' word for word and the trap snaps shut.", hi: "बांग्ला का 'হ্যাঁ, পছন্দ করি না' शब्दशः अनुवाद किया तो यहीं जाल बंद हो जाएगा।" },
          ],
          formula: {
            bn: "Yes/No + auxiliary (do, have, can, will...) + কর্তা-pronoun — মূল ক্রিয়া নয়",
            en: "Yes/No + auxiliary (do, have, can, will...) + subject pronoun — never the main verb",
            hi: "Yes/No + auxiliary (do, have, can, will...) + कर्ता-pronoun — मुख्य क्रिया नहीं",
          },
          examples: [
            {
              wrong: "Do you play cricket? — Yes, I play.",
              right: "Do you play cricket? — Yes, I do.",
              note: {
                bn: "শর্ট আনসারে মূল ক্রিয়া নয়, সাহায্যকারী বসে — do-প্রশ্নের উত্তর do; ক্রিয়া দোহরানোই বাংলা অভ্যাসের টান।",
                en: "Short answers run on the auxiliary, not the main verb — a do-question answers with do; repeating the verb is the Bangla habit pulling you back.",
                hi: "शॉर्ट आंसर में मुख्य क्रिया नहीं, सहायक क्रिया बैठती है — do-प्रश्न का उत्तर do; क्रिया दोहराना बांग्ला आदत का खिंचाव है।",
              },
            },
            {
              wrong: "Don't you like this song? — Yes, I don't.",
              right: "Don't you like this song? — No, I don't.",
              note: {
                bn: "অপছন্দ বোঝালে উত্তর No — ইংরেজি উত্তর সত্যের সাথে মেলে, প্রশ্নের রূপের সাথে নয়; বাংলার 'হ্যাঁ' এখানে ধোঁকা দেয়।",
                en: "If the dislike is true, the answer is No — English answers agree with the fact, not the question's form; Bangla's 'হ্যাঁ' misleads here.",
                hi: "नापसंद सच है तो उत्तर No — अंग्रेज़ी उत्तर तथ्य से मेल खाता है, प्रश्न के रूप से नहीं; यहाँ 'हाँ' धोखा देता है।",
              },
            },
            {
              wrong: "Can you swim? — Yes, I can to swim.",
              right: "Can you swim? — Yes, I can.",
              note: {
                bn: "শর্ট আনসার সাহায্যকারীতেই শেষ — can-এর পরে আর কিছু যোগ হয় না; বাকি বিশদ বলতে চাইলে নতুন বাক্য শুরু করুন।",
                en: "A short answer ends at the auxiliary — nothing follows 'can'; add detail only by starting a new sentence.",
                hi: "शॉर्ट आंसर सहायक क्रिया पर ही खत्म होता है — 'can' के बाद कुछ नहीं जुड़ता; विवरण चाहिए तो नया वाक्य शुरू करें।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🎵 সুরের খেলা: falling নাকি rising",
            en: "🎵 The music of tags: falling or rising",
            hi: "🎵 टैग का संगीत: falling या rising",
          },
          lead: {
            bn: "একই ট্যাগ, সুর বদলালে অর্থ বদলায় — গলা নামলে সম্মতি চাওয়া, উঠলে আসল প্রশ্ন।",
            en: "Same tag, different melody, different meaning — falling seeks agreement, rising asks for real.",
            hi: "एक ही टैग, सुर बदले तो अर्थ बदलता है — गिरता सुर सहमति, उठता सुर असली सवाल।",
          },
          points: [
            { bn: "**Falling (গলা নামা)** = আমি প্রায় নিশ্চিত, শুধু আপনার সম্মতি চাইছি: It's a beautiful day, isn't it?", en: "**Falling** = I am almost sure, I just want your agreement: It's a beautiful day, isn't it?", hi: "**Falling (गिरता सुर)** = मुझे लगभग यकीन, बस आपकी सहमति चाहिए: It's a beautiful day, isn't it?" },
            { bn: "falling-সুরই ছোট গল্প শুরু করার ক্লাসিক ঢঙ।", en: "The falling tone is the classic small-talk opener.", hi: "छोटी बातचीत शुरू करने का क्लासिक अंदाज़ यही गिरता सुर।" },
            { bn: "**Rising (গলা ওঠা)** = সত্যিই জানতে চাইছি, উত্তর জরুরি: You haven't seen my keys, have you?", en: "**Rising** = I genuinely need the answer: You haven't seen my keys, have you?", hi: "**Rising (उठता सुर)** = सचमुच उत्तर चाहिए: You haven't seen my keys, have you?" },
            { bn: "শর্ট আনসারেও সুর কাজ করে: Yes, I do-তে do-তে জোর দিলে উৎসাহ যোগ হয়।", en: "Short answers carry music too: stressing 'do' in Yes, I do adds enthusiasm.", hi: "शॉर्ट आंसर में भी सुर: Yes, I do में 'do' पर ज़ोर उत्साह जोड़ता है।" },
            { bn: "দ্রুত সমতলে বললে শোনায় সাধারণ সম্মতি।", en: "A flat, quick delivery sounds like plain agreement.", hi: "सपाट-तेज़ अंदाज़ में सुनाई देता है साधारण सहमति।" },
            { bn: "নেটিভদের কথা শুনে এই দুই সুর আলাদা করতে পারলেই আপনার ইংরেজি স্বাভাবিক শোনাবে।", en: "Separate these two melodies in native speech and your English starts sounding natural.", hi: "नेटिव बातचीत में ये दो सुर अलग कर पाएँगे तो आपकी अंग्रेज़ी स्वाभाविक लगेगी।" },
          ],
          formula: {
            bn: "falling = সম্মতি চাইছি (প্রায় নিশ্চিত) | rising = সত্যিকারের প্রশ্ন (উত্তর দরকার)",
            en: "falling = seeking agreement (almost sure) | rising = a real question (need the answer)",
            hi: "falling = सहमति चाहिए (लगभग पक्का) | rising = असली सवाल (उत्तर चाहिए)",
          },
          examples: [
            {
              wrong: "It's a lovely day, is it?",
              right: "It's a lovely day, isn't it?",
              note: {
                bn: "ইতিবাচক বাক্যের ট্যাগ ঋণাত্মক — আর গল্প শুরু করতে সুরটা নামবে (falling), যাতে কথাটা সম্মতির আমন্ত্রণ মনে হয়; 'is it?' বললে সন্দেহ শোনায়।",
                en: "A positive statement takes a negative tag, and small talk lets the tone fall — an invitation to agree; 'is it?' sounds doubtful.",
                hi: "सकारात्मक वाक्य का टैग नकारात्मक — और छोटी बातचीत में सुर गिरता है, सहमति का निमंत्रण; 'is it?' संदेह जैसा लगता है।",
              },
            },
            {
              wrong: "You didn't tell anyone, didn't you?",
              right: "You didn't tell anyone, did you?",
              note: {
                bn: "ঋণাত্মক বাক্য → ইতিবাচক ট্যাগ; আর যেহেতু সত্যিই জানতে চাইছেন, সুরটা উঠবে (rising) — উত্তর এখানে আসল কাজ।",
                en: "Negative statement → positive tag; and since you genuinely need to know, the tone rises — the answer is the real business here.",
                hi: "नकारात्मक वाक्य → सकारात्मक टैग; और जहाँ उत्तर सचमुच चाहिए, वहाँ सुर ऊपर उठता है (rising)।",
              },
            },
            {
              wrong: "You will help me, isn't it?",
              right: "You will help me, won't you?",
              note: {
                bn: "will-এর ঋণাত্মক রূপ won't — ট্যাগ হয় won't you; অনুরোধে সুর নামলে আস্থা, উঠলে কিছুটা সন্দেহ শোনায়।",
                en: "The negative of will is won't — the tag is won't you; a falling tone there sounds trusting, a rising one slightly doubtful.",
                hi: "will का नकारात्मक रूप won't — टैग won't you; गिरता सुर भरोसा, उठता सुर थोड़ा संदेह दर्शाता है।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "প্রতিদিন ৫টা বাক্য বলুন ট্যাগ দিয়ে — পরিবার নিয়েই হোক: 'Baba is home, isn't he?', 'You had dinner, didn't you?' — খেলার মতো অভ্যাস।",
          en: "Say five tagged sentences daily, even about family: 'Baba is home, isn't he?', 'You had dinner, didn't you?' — a game-like habit.",
          hi: "रोज़ पाँच वाक्य टैग के साथ बोलें — परिवार पर भी: 'Baba is home, isn't he?', 'You had dinner, didn't you?'",
        },
        {
          bn: "শর্ট আনসার-ড্রিল: প্রশ্ন শুনে প্রথম দুই শব্দই বলুন (Yes, I do / No, I can't) — আগে সাহায্যকারী, পরে আর কিছুই নয়।",
          en: "Short-answer drill: on hearing a question, say only the first two words (Yes, I do / No, I can't) — auxiliary first, nothing else.",
          hi: "शॉर्ट-आंसर ड्रिल: प्रश्न सुनते ही केवल पहले दो शब्द बोलें (Yes, I do / No, I can't) — पहले सहायक, फिर कुछ नहीं।",
        },
        {
          bn: "ঋণাত্মক প্রশ্নের নিয়ম নোটে লিখে রাখুন: সত্য হলে Yes, মিথ্যা হলে No — প্রশ্নের ঢঙ দেখার দরকার নেই।",
          en: "Write the negative-question rule on a note: true → Yes, false → No — regardless of how the question is phrased.",
          hi: "नकारात्मक प्रश्न का नियम नोट करें: सच → Yes, झूठ → No — प्रश्न की भाषा देखने की ज़रूरत नहीं।",
        },
        {
          bn: "নাটক-পডকাস্টে ট্যাগের সুর শুনুন: falling = সম্মতি চাওয়া, rising = সত্যিকারের প্রশ্ন — দিনে অন্তত দুটো উদাহরণ চিনে নোট করুন।",
          en: "Listen for tag melodies in shows and podcasts: falling = seeking agreement, rising = a real question — spot and note two examples a day.",
          hi: "शो-पॉडकास्ट में टैग का सुर सुनें: falling = सहमति, rising = असली प्रश्न — रोज़ दो उदाहरण पहचानकर नोट करें।",
        },
      ],
    },
  },
];

export default SEED_GRAMMAR_V4_V2B2;
