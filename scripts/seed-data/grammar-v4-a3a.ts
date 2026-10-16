// ─── Grammar seeds v4: ADVANCED batch A3a (2 lessons) ───
// Task 10-C18 — point-form roadmap upgrade. Source: grammar-v3-a3.ts →
// "Nominalisation & Academic Style" (sortOrder 10) and "Ellipsis & Substitution"
// (sortOrder 11), both advanced. Every paragraph body became lead + 4-8 crisp
// points (split, never dropped); the suffix factory, the preposition pairs, the
// 15 academic verb→noun pairs and the substitute overview became small tables;
// formula boxes carry the rule-of-thumb lines. Special briefs honoured:
// verb/adjective → noun transformation table (Nominalisation) and the
// ellipsis-vs-substitution comparison table (one/ones, do so, neither/either/so).
// title/intro/tips/quiz/examples copied UNCHANGED from the v3 source; body omitted.
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_A3A: SeedGrammarV4Entry[] = [
  /* ── 1. Nominalisation & Academic Style ──────────────────────────────── */
  {
    topic: "Nominalisation & Academic Style",
    level: "advanced",
    title: "Nominalisation & Academic Style",
    unit: 0,
    sortOrder: 10,
    data: {
      title: {
        bn: "নমিনালাইজেশন ও একাডেমিক স্টাইল",
        en: "Nominalisation & Academic Style",
        hi: "नॉमिनलाइज़ेशन और अकादेमिक शैली",
      },
      intro: {
        bn: "নমিনালাইজেশন মানে ক্রিয়া বা বিশেষণকে বিশেষ্যে বদলে ফেলা — decide → decision, poor → poverty, quickly decide → quick decision। এই একটা হাতিয়ারই সাধারণ লেখাকে একাডেমিক, রিপোর্টের মতো গাম্ভীর্যপূর্ণ লেখায় নিয়ে যায় — IELTS-এ band 7+ যে ভঙ্গি চায়। তবে অতিরিক্ত হলে লেখা 'zombie'-এর মতো হয়ে যায় — কর্তা হারায়, পড়তে ক্লান্তি লাগে। শুরুর আগে অনুগ্রহ করে Passive Voice — All Tenses আর Relative Clauses পাঠগুলো শেষ করে নিন — এখানের রূপান্তরগুলো সেগুলোর পায়ে দাঁড়িয়েই হয়। এটা C1-এর পাঠ: শুধু নিয়ম নয়, কখন বিশেষ্য আর কখন ক্রিয়া — এই বিচারশক্তিই আসল শিক্ষা।",
        en: "Nominalisation means turning a verb or adjective into a noun — decide → decision, poor → poverty, quickly decide → quick decision. This single tool lifts ordinary writing into academic, report-like prose — the register IELTS band 7+ rewards. Overused, however, it turns writing into 'zombie' prose that loses its agent and tires the reader. Before starting, please finish the lessons on Passive Voice — All Tenses and Relative Clauses; the transformations here stand on them. This is a C1 lesson: the real skill is judging when to choose a noun and when to keep a verb.",
        hi: "नॉमिनलाइज़ेशन का अर्थ है क्रिया या विशेषण को संज्ञा में बदलना — decide → decision, poor → poverty, quickly decide → quick decision। यही एक उपकरण साधारण लेखन को एकेडेमिक, रिपोर्ट-सदृश्य गद्य में उठा देता है — जैसी शैली IELTS band 7+ चाहता है। पर अधिक इस्तेमाल से लेखन 'zombie' बन जाता है — कर्ता खो जाता है, पढ़ना थकान देता है। शुरू करने से पहले Passive Voice — All Tenses और Relative Clauses पाठ पूरे करें; यहाँ के रूपांतर उन्हीं पर खड़े हैं। यह C1 पाठ है: असली कौशल है यह तय करना कि कब संज्ञा, कब क्रिया।",
      },
      roadmap: [
        { bn: "🎯 কখন লেখায় ক্রিয়াকে বিশেষ্য বানাতে হয়", en: "🎯 When writing turns verbs into nouns", hi: "🎯 कब लेखन में क्रिया संज्ञा बनती है" },
        { bn: "🏗️ প্রত্যয়-ছাঁচের পূর্ণ টেবিল: -tion, -ment, -ness, -ity", en: "🏗️ The full suffix table: -tion, -ment, -ness, -ity", hi: "🏗️ पूरी प्रत्यय-तालिका: -tion, -ment, -ness, -ity" },
        { bn: "🚦 নমিনালাইজড বাক্য চেনার তিন আভাস ও দুই পরীক্ষা", en: "🚦 Three signals and two tests for nominalised sentences", hi: "🚦 नॉमिनलाइज़्ड वाक्य पहचानने के तीन संकेत, दो परीक्षण" },
        { bn: "🔁 চার ধাপে ক্রিয়া-বাক্য → বিশেষ্য-বাক্য রূপান্তর", en: "🔁 Verb-sentence → noun-sentence in four steps", hi: "🔁 चार क़दम में क्रिया-वाक्य → संज्ञा-वाक्य" },
        { bn: "📚 essay-র ১৫টা verb-noun জোড়া ও তাদের জায়গা", en: "📚 Fifteen essay verb-noun pairs and where they sit", hi: "📚 निबंध के 15 verb-noun जोड़े और उनकी जगह" },
        { bn: "🧟 zombie noun চেনা আর লেখা হালকা করা", en: "🧟 Spotting zombie nouns and slimming your prose", hi: "🧟 zombie संज्ञा पहचानें, गद्य हल्का करें" },
        { bn: "⚠️ C1 পর্যায়ের পাঁচ সূক্ষ্ম ভুল এড়ানো", en: "⚠️ Avoiding five subtle C1-level errors", hi: "⚠️ C1 स्तर की पाँच सूक्ष्म चूकें टालें" },
        { bn: "📖 গবেষণা-অনুচ্ছেদে nominalisation জীবন্ত দেখা", en: "📖 Nominalisation alive in a research paragraph", hi: "📖 शोध-अनुच्छेद में nominalisation जीवंत" },
        { bn: "🧮 পুরো পাঠ ছয় সূত্রে এক কার্ডে", en: "🧮 The whole lesson as six rules on one card", hi: "🧮 पूरा पाठ छह सूत्रों में एक कार्ड पर" },
      ],
      sections: [
        /* ── 1. When to use it ── */
        {
          heading: {
            bn: "🎯 কখন ব্যবহার হয়: লেখায় ক্রিয়াকে বিশেষ্য বানানোর মুহূর্ত",
            en: "🎯 When to use it: the moments verbs become nouns",
            hi: "🎯 कब इस्तेमाल होता है: जब क्रिया संज्ञा बनती है",
          },
          lead: {
            bn: "একাডেমিক লেখার প্রথম অস্ত্র — ক্রিয়া-বিশেষণকে বিশেষ্য বানিয়ে বাক্যে আনুষ্ঠানিক দূরত্ব আনা।",
            en: "The first tool of academic writing — turn verbs and adjectives into nouns to add formal distance.",
            hi: "एकेडेमिक लेखन का पहला हथियार — क्रिया-विशेषण को संज्ञा बनाकर वाक्य में औपचारिक दूरी लाना।",
          },
          formula: {
            bn: "ভাব ও দূরত্ব চাইলে বিশেষ্য · মানুষ ও ঘটনা চাইলে ক্রিয়া",
            en: "Nouns for abstraction and distance · verbs for people and events",
            hi: "विचार और दूरी के लिए संज्ञा · व्यक्ति और घटना के लिए क्रिया",
          },
          points: [
            { bn: "**Nominalisation** — ক্রিয়া বা বিশেষণকে বিশেষ্যে বদলে ফেলা: the government's decision, the increase in prices, a decline in the quality of education।", en: "**Nominalisation** — turning a verb or adjective into a noun: the government's decision, the increase in prices, a decline in the quality of education.", hi: "**Nominalisation** — क्रिया या विशेषण को संज्ञा में बदलना: the government's decision, the increase in prices, a decline in the quality of education।" },
            { bn: "বাংলা স্বভাবতই বিশেষ্য-ভারী — 'সরকারের সিদ্ধান্ত', 'দামের বৃদ্ধি', 'শিক্ষার মান হ্রাস'।", en: "Bengali speech is naturally noun-heavy — 'the government's decision', 'the rise in prices'.", hi: "बांग्ला बोली स्वाभाविक रूप से संज्ञा-भारी है — 'सरकार का निर्णय', 'कीमतों में वृद्धि'।" },
            { bn: "একাডেমিক রচনা, গবেষণা-সারসংক্ষেপ, অফিস রিপোর্ট, IELTS Writing — আনুষ্ঠানিক দূরত্ব দরকার যেখানেই, সেখানেই এটি প্রথম অস্ত্র।", en: "Academic essays, research abstracts, office reports, IELTS Writing — wherever formal distance is needed, this is the first tool.", hi: "एकेडेमिक निबंध, शोध-सार, ऑफिस रिपोर्ट, IELTS Writing — जहाँ औपचारिक दूरी चाहिए, वहीं यह पहला हथियार।" },
            { bn: "বিশেষ্য subject বাক্যকে মানুষ-নিরপেক্ষ শোনায় — examiner তখনই বোঝেন লেখক formal register নিয়ন্ত্রণ করছেন।", en: "A noun subject makes the sentence sound impersonal — the examiner then reads control of formal register.", hi: "संज्ञा-subject वाक्य को निरपेक्ष बनाता है — examiner तभी समझता है कि लेखक formal register पर नियंत्रण रखता है।" },
            { bn: "**কাজে লাগে এক** — কর্তা গুরুত্বহীন বা অজানা: the implementation of the new policy — কে বাস্তবায়ন করল, বলার দরকার নেই।", en: "**Use one** — the agent is unimportant or unknown: the implementation of the new policy says nothing about who did it.", hi: "**काम एक** — कर्ता तुच्छ या अज्ञात: the implementation of the new policy — किसने किया, कहना ज़रूरी नहीं।" },
            { bn: "**কাজে লাগে দুই** — সংযোগ: The committee discussed the plan → পরের বাক্যে সেই discussion-ই subject — The discussion revealed three problems...।", en: "**Use two** — cohesion: The committee discussed the plan → then the discussion itself becomes the subject — The discussion revealed three problems...", hi: "**काम दो** — संबद्धता: The committee discussed the plan → अगले वाक्य में वही discussion subject — The discussion revealed three problems..." },
            { bn: "**কাজে লাগে তিন** — তথ্য সংকুচিত করা: the rapid growth of Dhaka — দুটো পূর্ণ বাক্যের ভার এক phrase-এ।", en: "**Use three** — compressing information: the rapid growth of Dhaka packs two full sentences into one phrase.", hi: "**काम तीन** — जानकारी संकुचित करना: the rapid growth of Dhaka — दो पूरे वाक्य का भार एक phrase में।" },
            { bn: "গল্প, চিঠি, কথোপকথন, ব্লগে বাদ — সেখানে বিশেষ্য-ভার শুকনো, 'কর্পোরেট' শোনায়; বন্ধুকে বলুন they cancelled the match — the cancellation of the match by the organisers নয়।", en: "Stories, letters, conversation, blogs — there noun-heavy prose sounds dry and corporate; tell a friend 'they cancelled the match', not 'the cancellation of the match by the organisers'.", hi: "कहानी, पत्र, बातचीत, ब्लॉग — वहाँ संज्ञा-भार सूखा, 'कॉर्पोरेट' लगता है; दोस्त से कहें 'they cancelled the match', 'the cancellation of the match by the organisers' नहीं।" },
          ],
          examples: [
            {
              wrong: "In this essay I will talk about why the price of fuel is going up and why people are angry.",
              right: "This essay examines the causes of the recent fuel price rise and the resulting public anger.",
              note: {
                bn: "রচনার ভাষায় 'I will talk about'-এর বদলে examines, 'going up'-এর বদলে বিশেষ্য rise — ক্রিয়া-ভিত্তিক কথ্য ভঙ্গি বিশেষ্য-ভিত্তিক একাডেমিক ভঙ্গিতে বদলাল, এটাই nominalisation-এর প্রথম প্রয়োগ।",
                en: "In essay language, 'I will talk about' becomes 'examines' and 'going up' becomes the noun 'rise' — spoken verb style turns into noun-driven academic style, the core use of nominalisation.",
                hi: "निबंध-भाषा में 'I will talk about' की जगह 'examines', 'going up' की जगह संज्ञा 'rise' — क्रिया-प्रधान बोलचाल संज्ञा-प्रधान एकेडेमिक शैली में बदला।",
              },
            },
            {
              wrong: "The report says that someone should repair the roads quickly.",
              right: "The report calls for the rapid repair of the roads.",
              note: {
                bn: "কর্তা 'someone' অস্পষ্ট — এমন জায়গায় ক্রিয়া repair-এর বিশেষ্য রূপ দিয়ে 'the rapid repair of the roads' বানালে কর্তা লুকিয়ে যায়, বাক্য আনুষ্ঠানিক হয়।",
                en: "The agent 'someone' is vague — nominalising 'repair' into 'the rapid repair of the roads' hides the agent and formalises the sentence.",
                hi: "कर्ता 'someone' अस्पष्ट है — 'repair' को संज्ञा बनाकर 'the rapid repair of the roads' कर्ता छिपा देता है और वाक्य औपचारिक हो जाता है।",
              },
            },
            {
              wrong: "We did an analysis of the data and did a comparison between the two groups.",
              right: "We analysed the data and compared the two groups.",
              note: {
                bn: "উল্টো দিকের শিক্ষা: সাধারণ লেখা বা বক্তৃতায় did an analysis of-এর মতো ভারী গুচ্ছ নয় — ক্রিয়া analysed, compared-ই ঝরঝরে। ভালো লেখক দুই মোডেই লিখতে পারেন।",
                en: "The reverse lesson: in ordinary writing or speech, avoid heavy chunks like 'did an analysis of' — the plain verbs 'analysed' and 'compared' are cleaner. Good writers work in both modes.",
                hi: "उलटा सबक: साधारण लेखन में 'did an analysis of' जैसे भारी गुच्छ नहीं — 'analysed', 'compared' जैसी साफ़ क्रियाएँ बेहतर। अच्छे लेखक दोनों ढंग में लिखते हैं।",
              },
            },
            {
              wrong: "Sorry yaar, the cancellation of the match has caused the non-attendance of my presence.",
              right: "Sorry, they cancelled the match, so I'm not coming.",
              note: {
                bn: "বন্ধুর চ্যাটে স্তূপ-করা বিশেষ্য হাস্যকর ও অপ্রাকৃত শোনায়; কথ্য ভাষা ক্রিয়ায় বাঁচে — প্রতিটা প্রসঙ্গের নিজের সুর আছে।",
                en: "In a friend's chat, piled-up nouns sound absurd — spoken English lives on verbs; every context has its own music.",
                hi: "दोस्त की चैट में संज्ञाओं का ढेर हास्यास्पद लगता है — बोलचाल की अंग्रेज़ी क्रियाओं पर चलती है; हर संदर्भ की अपनी धुन होती है।",
              },
            },
          ],
        },
        /* ── 2. Formation: the suffix factory ── */
        {
          heading: {
            bn: "🏗️ গঠন: ক্রিয়া-বিশেষণ থেকে বিশেষ্য বানানোর ছাঁচগুলো",
            en: "🏗️ Formation: the verb/adjective → noun patterns",
            hi: "🏗️ गठन: क्रिया/विशेषण से संज्ञा बनाने के ढाँचे",
          },
          lead: {
            bn: "কোন প্রত্যয় কোন ক্রিয়ার সাথে লাগে — কারখানার ছাঁচগুলো এক টেবিলে।",
            en: "Which suffix attaches to which verb — the factory's patterns in one table.",
            hi: "कौन-सा प्रत्यय किस क्रिया से जुड़ता है — कारख़ाने के ढाँचे एक तालिका में।",
          },
          table: {
            head: [
              { bn: "ছাঁচ", en: "Pattern", hi: "ढाँचा" },
              { bn: "উদাহরণ", en: "Examples", hi: "उदाहरण" },
            ],
            rows: [
              [{ bn: "-tion / -sion", en: "-tion / -sion", hi: "-tion / -sion" }, { bn: "decide→decision, inform→information, discuss→discussion, permit→permission, educate→education, connect→connection, reduce→reduction, contribute→contribution", en: "decide→decision, inform→information, discuss→discussion, permit→permission, educate→education, connect→connection, reduce→reduction, contribute→contribution", hi: "decide→decision, inform→information, discuss→discussion, permit→permission, reduce→reduction, contribute→contribution" }],
              [{ bn: "-ment", en: "-ment", hi: "-ment" }, { bn: "develop→development, improve→improvement, invest→investment, agree→agreement, argue→argument (e পড়ে যায়!)", en: "develop→development, improve→improvement, invest→investment, agree→agreement, argue→argument (the e disappears!)", hi: "develop→development, invest→investment, argue→argument (e गिर जाता है!)" }],
              [{ bn: "-ance / -ence", en: "-ance / -ence", hi: "-ance / -ence" }, { bn: "perform→performance, exist→existence, prefer→preference, maintain→maintenance (উচ্চারণ পুরো বদলে যায়!)", en: "perform→performance, exist→existence, prefer→preference, maintain→maintenance (pronunciation changes completely!)", hi: "perform→performance, exist→existence, prefer→preference, maintain→maintenance (उच्चारण पूरा बदलता है!)" }],
              [{ bn: "-al", en: "-al", hi: "-al" }, { bn: "refuse→refusal, propose→proposal, arrive→arrival, approve→approval, survive→survival", en: "refuse→refusal, propose→proposal, arrive→arrival, approve→approval, survive→survival", hi: "refuse→refusal, propose→proposal, arrive→arrival, approve→approval" }],
              [{ bn: "-ure / -age", en: "-ure / -age", hi: "-ure / -age" }, { bn: "fail→failure, press→pressure, mix→mixture, marry→marriage", en: "fail→failure, press→pressure, mix→mixture, marry→marriage", hi: "fail→failure, press→pressure, mix→mixture" }],
              [{ bn: "-ness (বিশেষণ থেকে)", en: "-ness (from adjectives)", hi: "-ness (विशेषण से)" }, { bn: "happy→happiness, kind→kindness, aware→awareness", en: "happy→happiness, kind→kindness, aware→awareness", hi: "happy→happiness, aware→awareness" }],
              [{ bn: "-ity (বিশেষণ থেকে)", en: "-ity (from adjectives)", hi: "-ity (विशेषण से)" }, { bn: "similar→similarity, able→ability, pure→purity, secure→security", en: "similar→similarity, able→ability, pure→purity, secure→security", hi: "able→ability, secure→security" }],
              [{ bn: "-cy (বিশেষণ থেকে)", en: "-cy (from adjectives)", hi: "-cy (विशेषण से)" }, { bn: "fluent→fluency, accurate→accuracy, private→privacy", en: "fluent→fluency, accurate→accuracy, private→privacy", hi: "fluent→fluency, accurate→accuracy" }],
              [{ bn: "-th (বিশেষণ থেকে)", en: "-th (from adjectives)", hi: "-th (विशेषण से)" }, { bn: "strong→strength, long→length, deep→depth, wide→width", en: "strong→strength, long→length, deep→depth, wide→width", hi: "strong→strength, long→length, deep→depth" }],
              [{ bn: "ছাঁচের বাইরে — মুখস্থ", en: "Beyond patterns — memorise", hi: "ढाँचे के बाहर — कंठस्थ" }, { bn: "poor→poverty, wise→wisdom, free→freedom, high→height, destroy→destruction", en: "poor→poverty, wise→wisdom, free→freedom, high→height, destroy→destruction", hi: "poor→poverty, wise→wisdom, free→freedom, high→height, destroy→destruction" }],
            ],
          },
          points: [
            { bn: "**-tion/-sion** — সবচেয়ে বড় পরিবার: decide→decision, inform→information, discuss→discussion, permit→permission।", en: "**-tion/-sion** — the biggest family: decide→decision, inform→information, discuss→discussion, permit→permission.", hi: "**-tion/-sion** — सबसे बड़ा परिवार: decide→decision, inform→information, discuss→discussion, permit→permission।" },
            { bn: "**-ment**-এর বানান-ফাঁদ: argue→argument — e পড়ে যায়, arguement নয়।", en: "**-ment** has a spelling trap: argue→argument — the e disappears, never 'arguement'.", hi: "**-ment** की वर्तनी-जाल: argue→argument — e गिर जाता है, 'arguement' नहीं।" },
            { bn: "**-ance না -ence** — perform→performance, কিন্তু exist→existence; জোড়া করে পাশাপাশি মুখস্থ করুন।", en: "**-ance or -ence** — perform→performance but exist→existence; memorise such pairs side by side.", hi: "**-ance या -ence** — perform→performance, पर exist→existence; ऐसे जोड़े साथ-साथ याद करें।" },
            { bn: "**maintain→maintenance** — বানান কাছাকাছি দেখলেও উচ্চারণ পুরো বদলে যায়, খেয়াল করুন।", en: "**maintain→maintenance** — the spelling looks close, but the pronunciation changes completely.", hi: "**maintain→maintenance** — वर्तनी पास दिखती है, पर उच्चारण पूरा बदल जाता है।" },
            { bn: "বিশেষণ থেকেও বিশেষ্য হয়: happy→happiness (-ness), similar→similarity (-ity), fluent→fluency (-cy), strong→strength (-th)।", en: "Adjectives become nouns too: happy→happiness (-ness), similar→similarity (-ity), fluent→fluency (-cy), strong→strength (-th).", hi: "विशेषण से भी संज्ञा बनती है: happy→happiness (-ness), similar→similarity (-ity), fluent→fluency (-cy), strong→strength (-th)।" },
            { bn: "ছাঁচে না বসা ক'টা মুখস্থই করতে হবে: poor→poverty, wise→wisdom, free→freedom, high→height, destroy→destruction।", en: "The ones no pattern catches must be memorised: poor→poverty, wise→wisdom, free→freedom, high→height, destroy→destruction.", hi: "बिना नियम वाले कंठस्थ करने ही होंगे: poor→poverty, wise→wisdom, free→freedom, high→height, destroy→destruction।" },
          ],
          examples: [
            {
              wrong: "The pronounce of this word is difficult for beginners.",
              right: "The pronunciation of this word is difficult for beginners.",
              note: {
                bn: "pronounce→pronunciation — মাঝের স্বর বদলে যায়; maintain→maintenance-ও একই ফাঁদ।",
                en: "'Pronounce' becomes 'pronunciation' with a vowel shift — 'maintain → maintenance' hides the same trap.",
                hi: "'pronounce' से 'pronunciation' — स्वर बदल जाता है; 'maintain → maintenance' में भी वैसा ही जाल है।",
              },
            },
            {
              wrong: "Poorness is not shameful, but the refuse to learn is.",
              right: "Poverty is not shameful, but the refusal to learn is.",
              note: {
                bn: "poor→poverty কোনো ছাঁচে বসে না, irregular; refuse ক্রিয়ার বিশেষ্য refusal (-al)।",
                en: "'Poor' does not follow any pattern — it becomes 'poverty'; the noun of the verb 'refuse' is 'refusal'.",
                hi: "'poor' किसी ढाँचे में नहीं बैठता — 'poverty' होता है; 'refuse' क्रिया की संज्ञा 'refusal'।",
              },
            },
            {
              wrong: "The explaination in the manual was confusing.",
              right: "The explanation in the manual was confusing.",
              note: {
                bn: "explain→explanation — explaination বানান নেই; -tion অনুমান করে বাংলাভাষীরা এই ভুল প্রায়ই করেন।",
                en: "'Explain' becomes 'explanation' — 'explaination' is not a word; guessing '-tion' produces this common error.",
                hi: "'explain' से 'explanation' — 'explaination' कोई शब्द नहीं; '-tion' अनुमान से यह भूल होती है।",
              },
            },
            {
              wrong: "Their performence in the final was outstanding.",
              right: "Their performance in the final was outstanding.",
              note: {
                bn: "perform→performance — -ance, কিন্তু exist→existence-এ -ence; এই জোড়া পাশাপাশি মুখস্থ করুন।",
                en: "'Perform' gives 'performance' (-ance), but 'exist' gives 'existence' (-ence) — memorise such pairs side by side.",
                hi: "'perform' से 'performance' (-ance), पर 'exist' से 'existence' (-ence) — ऐसे जोड़े साथ-साथ याद करें।",
              },
            },
            {
              wrong: "The company is spending more on the developement of new software.",
              right: "The company is spending more on software development.",
              note: {
                bn: "develop→development (developement নয়); আর জেনেরিক ধারণা 'software development'-এর আগে the-ও লাগে না।",
                en: "'Develop' becomes 'development' (never 'developement'); and the generic idea 'software development' takes no 'the'.",
                hi: "'develop' से 'development' ('developement' नहीं); और सामान्य धारणा 'software development' के आगे 'the' नहीं आता।",
              },
            },
          ],
        },
        /* ── 3. Signals and patterns ── */
        {
          heading: {
            bn: "🚦 আভাস ও প্যাটার্ন: নমিনালাইজড লেখা চেনা আর বানানো",
            en: "🚦 Signals and patterns: spotting and building nominalised prose",
            hi: "🚦 संकेत और पैटर्न: नॉमिनलाइज़्ड गद्य पहचानना और बनाना",
          },
          lead: {
            bn: "নমিনালাইজড লেখা চেনার তিন আভাস, আর বানানোর আগে দুই পরীক্ষা।",
            en: "Three signals to spot nominalised prose, and two tests before you build one.",
            hi: "नॉमिनलाइज़्ड गद्य पहचानने के तीन संकेत, और बनाने से पहले दो परीक्षण।",
          },
          table: {
            head: [
              { bn: "বিশেষ্য", en: "Noun", hi: "संज्ञा" },
              { bn: "সঠিক জুটি", en: "Correct pair", hi: "सही जोड़ी" },
              { bn: "মনে রাখুন", en: "Watch out", hi: "ध्यान दें" },
            ],
            rows: [
              [{ bn: "increase / decrease", en: "increase / decrease", hi: "increase / decrease" }, { bn: "in", en: "in", hi: "in" }, { bn: "of নয়", en: "not of", hi: "of नहीं" }],
              [{ bn: "effect", en: "effect", hi: "effect" }, { bn: "on", en: "on", hi: "on" }, { bn: "to নয়", en: "not to", hi: "to नहीं" }],
              [{ bn: "discussion", en: "discussion", hi: "discussion" }, { bn: "of / on", en: "of / on", hi: "of / on" }, { bn: "—", en: "—", hi: "—" }],
              [{ bn: "proposal", en: "proposal", hi: "proposal" }, { bn: "for", en: "for", hi: "for" }, { bn: "—", en: "—", hi: "—" }],
              [{ bn: "contribution", en: "contribution", hi: "contribution" }, { bn: "to", en: "to", hi: "to" }, { bn: "—", en: "—", hi: "—" }],
            ],
          },
          points: [
            { bn: "**আভাস এক** — subject-এ বড় abstract noun + of-chain: the failure of the company to meet the deadline, the refusal of the union to negotiate।", en: "**Signal one** — a big abstract noun + of-chain as subject: the failure of the company to meet the deadline, the refusal of the union to negotiate.", hi: "**संकेत एक** — subject में बड़ी अमूर्त संज्ञा + of-शृंखला: the failure of the company to meet the deadline, the refusal of the union to negotiate।" },
            { bn: "**আভাস দুই** — দুর্বল ক্রিয়ার অবতারণা: cause, lead to, result in, contribute to, involve, take place, have an effect on — মূল কাজটা বিশেষ্যের পেটে লুকায় (the delay caused a loss)।", en: "**Signal two** — weak verb openers: cause, lead to, result in, contribute to, involve, take place, have an effect on — the real action hides inside a noun (the delay caused a loss).", hi: "**संकेत दो** — कमज़ोर क्रियाएँ: cause, lead to, result in, contribute to, involve, take place, have an effect on — असली कार्य संज्ञा के पेट में (the delay caused a loss)।" },
            { bn: "**আভাস তিন** — বিশেষণ + বিশেষ্য যেখানে আসলে ক্রিয়া + ক্রিয়াবিশেষণ লুকানো: a quick decision = (someone) decided quickly; a sharp increase = prices increased sharply।", en: "**Signal three** — an adjective sitting with a noun where a verb + adverb hides: a quick decision = (someone) decided quickly; a sharp increase = prices increased sharply.", hi: "**संकेत तीन** — संज्ञा के साथ विशेषण जहाँ क्रिया + क्रिया-विशेषण छिपा: a quick decision = (someone) decided quickly; a sharp increase = prices increased sharply।" },
            { bn: "**পরীক্ষা এক** — এই বিশেষ্যটার পেছনে নিজস্ব ক্রিয়া আছে কি? decision ← decide আছে, তাই চাইলে ক্রিয়ায় ফেরা সম্ভব।", en: "**Test one** — does this noun have a verb of its own? decision ← decide exists, so you can turn back to a verb.", hi: "**परीक्षण एक** — संज्ञा के पीछे अपनी क्रिया है? decision ← decide है, चाहें तो क्रिया में लौट सकते हैं।" },
            { bn: "**পরীক্ষা দুই** — of-এর পরে যে নাউনটা আসছে তার সঠিক preposition কী — ভুল preposition নমিনালাইজড বাক্যেই সবচেয়ে বেশি ধরা পড়ে।", en: "**Test two** — which preposition the following noun takes — wrong prepositions are caught most often in nominalised sentences.", hi: "**परीक्षण दो** — बाद वाली संज्ञा के साथ सही preposition क्या — ग़लत preposition नॉमिनलाइज़्ड वाक्य में ही सबसे अधिक पकड़ी जाती है।" },
          ],
          examples: [
            {
              wrong: "The increase of prices led to a decrease of sales.",
              right: "The increase in prices led to a decrease in sales.",
              note: {
                bn: "increase/decrease-এর পরে in বসে, of নয় — নমিনালাইজড বিশেষ্যের preposition আলাদাভাবে শিখতে হয়।",
                en: "'Increase/decrease' take 'in', not 'of' — nominalised nouns need their prepositions learned separately.",
                hi: "'increase/decrease' के बाद 'in' आता है, 'of' नहीं — नॉमिनलाइज़्ड संज्ञाओं के preposition अलग से सीखने होते हैं।",
              },
            },
            {
              wrong: "The board made a discussion about the merger for two hours.",
              right: "The board held a discussion of the merger for two hours.",
              note: {
                bn: "discussion হয় have/hold করে, make দিয়ে নয়; আর discussion of/on — about আনুষ্ঠানিক লেখায় টেনে হাঁটে।",
                en: "A discussion is had/held, not made; and 'discussion of/on' — 'about' sounds casual in formal prose.",
                hi: "discussion को have/hold करते हैं, make नहीं; और 'discussion of/on' — औपचारिक गद्य में 'about' कमज़ोर लगता है।",
              },
            },
            {
              wrong: "Heavy rain resulted that the match was cancelled.",
              right: "Heavy rain resulted in the cancellation of the match.",
              note: {
                bn: "result in-এর পরে noun phrase — ক্লজ নয়; এখানেই ক্রিয়া cancel-কে cancellation করে নামাতে হয়।",
                en: "'Result in' takes a noun phrase, not a clause — that is exactly where 'cancel' must become 'cancellation'.",
                hi: "'result in' के बाद noun phrase आता है, clause नहीं — यहीं 'cancel' को 'cancellation' बनाना पड़ता है।",
              },
            },
            {
              wrong: "The sudden decided of the board surprised everyone.",
              right: "The board's sudden decision surprised everyone.",
              note: {
                bn: "decided ক্রিয়া — বিশেষ্য দরকার decision; possessive ('s) দিয়ে কর্তাকে আগে এনেছি — এটাই মসৃণ নমিনালাইজড subject।",
                en: "'Decided' is a verb — the noun needed is 'decision'; the agent moves up front as a possessive, giving a smooth nominalised subject.",
                hi: "'decided' क्रिया है — चाहिए संज्ञा 'decision'; कर्ता possessive ('s) में आगे आ जाता है — यही सहज नॉमिनलाइज़्ड subject है।",
              },
            },
          ],
        },
        /* ── 4. The transformation algorithm ── */
        {
          heading: {
            bn: "🔁 রূপান্তরের ধাপ: 'The government decided quickly' থেকে 'The government's quick decision'",
            en: "🔁 The transformation algorithm: from verb-sentence to noun-phrase",
            hi: "🔁 रूपांतरण एल्गोरिद्म: क्रिया-वाक्य से संज्ञा-वाक्यांश तक",
          },
          lead: {
            bn: "চার ধাপে ক্রিয়া-বাক্যকে বিশেষ্য-বাক্যে ঘুরিয়ে আনার হাতে-কলমে অ্যালগরিদম।",
            en: "A hands-on algorithm: four steps to turn a verb-sentence into a noun-sentence.",
            hi: "चार क़दम में क्रिया-वाक्य को संज्ञा-वाक्य में बदलने का व्यावहारिक एल्गोरिद्म।",
          },
          formula: {
            bn: "ক্রিয়া → বিশেষ্য · কর্তা → 's / of-phrase · ক্রিয়াবিশেষণ → বিশেষণ · preposition ঠিক করুন",
            en: "verb → noun · agent → 's / of-phrase · adverb → adjective · fix the preposition",
            hi: "क्रिया → संज्ञा · कर्ता → 's / of-phrase · क्रिया-विशेषण → विशेषण · preposition ठीक करें",
          },
          points: [
            { bn: "**ধাপ ১** — মূল ক্রিয়া খুঁজুন: decided; তার বিশেষ্য বানান — decision।", en: "**Step 1** — find the main verb: decided; build its noun — decision.", hi: "**क़दम १** — मुख्य क्रिया खोजें: decided; उसकी संज्ञा बनाएँ — decision।" },
            { bn: "**ধাপ ২** — কর্তাকে বিশেষ্যের সাথে জুড়ুন: সরাসরি possessive (the government's) নয়তো of-phrase (the decision of the government)।", en: "**Step 2** — attach the agent: a direct possessive (the government's) or an of-phrase (the decision of the government).", hi: "**क़दम २** — कर्ता जोड़ें: सीधा possessive (the government's) या of-phrase (the decision of the government)।" },
            { bn: "দীর্ঘ কর্তা হলে of-phrase নিরাপদ: the decision of the committee on public transport।", en: "For long agents the of-phrase is safer: the decision of the committee on public transport.", hi: "लंबे कर्ता में of-phrase सुरक्षित: the decision of the committee on public transport।" },
            { bn: "**ধাপ ৩** — ক্রিয়াবিশেষণকে বিশেষণে: quickly→quick, carefully→careful, sharply→sharp — বিশেষ্যকে বর্ণনা করে বিশেষণ, ক্রিয়াবিশেষণ নয়।", en: "**Step 3** — adverb to adjective: quickly→quick, carefully→careful, sharply→sharp — a noun is described by an adjective, not an adverb.", hi: "**क़दम ३** — क्रिया-विशेषण से विशेषण: quickly→quick, carefully→careful, sharply→sharp — संज्ञा का वर्णन विशेषण करता है, क्रिया-विशेषण नहीं।" },
            { bn: "**ধাপ ৪** — preposition ঠিক করুন: a decision on, an increase in, a ban on, investment in।", en: "**Step 4** — fix the preposition: a decision on, an increase in, a ban on, investment in.", hi: "**क़दम ४** — preposition ठीक करें: a decision on, an increase in, a ban on, investment in।" },
            { bn: "**Article** — প্রথম উল্লেখে a/an (a sharp increase in prices); নির্দিষ্ট বা আগে-বলা জিনিসে the (the sharp increase we saw last month)।", en: "**Articles** — a/an on first mention (a sharp increase in prices); the for something specific or already mentioned (the sharp increase we saw last month).", hi: "**Article** — पहले उल्लेख पर a/an (a sharp increase in prices); निर्दिष्ट या पहले बताई चीज़ पर the (the sharp increase we saw last month)।" },
            { bn: "অনুশীলনের সময় প্রতিটা ধাপ জোরে বলুন — সচেতন বিশ্লেষণ থেকে স্বতঃস্ফূর্ত রূপান্তরে যেতেই হবে।", en: "Say every step aloud while practising — you must move from conscious analysis to instant transformation.", hi: "अभ्यास में हर क़दम ज़ोर से बोलें — सचेतन विश्लेषण से तुरंत-रूपांतरण तक जाना ही है।" },
          ],
          examples: [
            {
              wrong: "The quickly decision of the government pleased investors.",
              right: "The government's quick decision pleased investors.",
              note: {
                bn: "বিশেষ্য decision-কে বর্ণনা করবে বিশেষণ quick, ক্রিয়াবিশেষণ quickly নয় — ধাপ ৩-ই ভুল হয়েছিল।",
                en: "The noun 'decision' is described by the adjective 'quick', not the adverb 'quickly' — step 3 was the slip.",
                hi: "संज्ञा 'decision' का वर्णन विशेषण 'quick' करता है, क्रिया-विशेषण 'quickly' नहीं — चूक क़दम ३ में थी।",
              },
            },
            {
              wrong: "The sharp increase prices worried small traders.",
              right: "The sharp increase in prices worried small traders.",
              note: {
                bn: "increase-এর পরে in আবশ্যক — of-phrase এখানে ভুল preposition।",
                en: "'Increase' requires 'in' — an of-phrase here is the wrong preposition.",
                hi: "'increase' के लिए 'in' आवश्यक है — यहाँ of-phrase ग़लत preposition है।",
              },
            },
            {
              wrong: "The company expanded rapid into new markets last year.",
              right: "The company's rapid expansion into new markets surprised its rivals last year.",
              note: {
                bn: "expand→expansion; expansion into — preposition-সহ পুরো প্যাকেজ একসাথে শিখুন।",
                en: "'Expand' becomes 'expansion'; 'expansion into' — learn the preposition as part of the package.",
                hi: "'expand' से 'expansion'; 'expansion into' — preposition समेत पूरा पैकेज याद करें।",
              },
            },
            {
              wrong: "Her analysis of the data carefully impressed the professor.",
              right: "Her careful analysis of the data impressed the professor.",
              note: {
                bn: "carefully বিশেষ্যের আগে বসে না; বিশেষণ careful-ই সঠিক স্থানে — ধাপ ৩-এর আরেক প্রয়োগ।",
                en: "An adverb cannot sit before the noun; the adjective 'careful' takes the right slot — another use of step 3.",
                hi: "क्रिया-विशेषण संज्ञा से पहले नहीं बैठता; विशेषण 'careful' ही सही जगह है — क़दम ३ का दूसरा प्रयोग।",
              },
            },
            {
              wrong: "The students' understand of the topic was still weak.",
              right: "The students' understanding of the topic was still weak.",
              note: {
                bn: "understand-এর বিশেষ্য রূপ understanding (-ing noun); a better understanding of এমনিতেও জনপ্রিয় collocation।",
                en: "The noun form of 'understand' is 'understanding' (-ing noun); 'a better understanding of' is a favourite collocation too.",
                hi: "'understand' की संज्ञा 'understanding' (-ing संज्ञा) है; 'a better understanding of' भी लोकप्रिय collocation है।",
              },
            },
          ],
        },
        /* ── 5. The academic bank ── */
        {
          heading: {
            bn: "📚 একাডেমিক ভান্ডার: essay-র প্রতিদিনের ক্রিয়া-বিশেষ্য জোড়া",
            en: "📚 The academic bank: everyday verb-noun pairs for essays",
            hi: "📚 एकेडेमिक भंडार: निबंध की रोज़ की क्रिया-संज्ञा जोड़ियाँ",
          },
          lead: {
            bn: "essay-র রোজকার ক্রিয়া-বিশেষ্য জোড়া, আর বাক্যে তারা কোথায় বসে।",
            en: "Everyday essay verb-noun pairs, and exactly where each one sits in a sentence.",
            hi: "निबंध की रोज़ की क्रिया-संज्ञा जोड़ियाँ, और वाक्य में कहाँ बैठती हैं।",
          },
          table: {
            head: [
              { bn: "verb", en: "verb", hi: "verb" },
              { bn: "noun", en: "noun", hi: "noun" },
            ],
            rows: [
              [{ bn: "analyse", en: "analyse", hi: "analyse" }, { bn: "analysis", en: "analysis", hi: "analysis" }],
              [{ bn: "argue", en: "argue", hi: "argue" }, { bn: "argument", en: "argument", hi: "argument" }],
              [{ bn: "conclude", en: "conclude", hi: "conclude" }, { bn: "conclusion", en: "conclusion", hi: "conclusion" }],
              [{ bn: "compare", en: "compare", hi: "compare" }, { bn: "comparison", en: "comparison", hi: "comparison" }],
              [{ bn: "suggest", en: "suggest", hi: "suggest" }, { bn: "suggestion", en: "suggestion", hi: "suggestion" }],
              [{ bn: "assume", en: "assume", hi: "assume" }, { bn: "assumption", en: "assumption", hi: "assumption" }],
              [{ bn: "differ", en: "differ", hi: "differ" }, { bn: "difference", en: "difference", hi: "difference" }],
              [{ bn: "measure", en: "measure", hi: "measure" }, { bn: "measurement", en: "measurement", hi: "measurement" }],
              [{ bn: "evaluate", en: "evaluate", hi: "evaluate" }, { bn: "evaluation", en: "evaluation", hi: "evaluation" }],
              [{ bn: "identify", en: "identify", hi: "identify" }, { bn: "identification", en: "identification", hi: "identification" }],
              [{ bn: "demonstrate", en: "demonstrate", hi: "demonstrate" }, { bn: "demonstration", en: "demonstration", hi: "demonstration" }],
              [{ bn: "establish", en: "establish", hi: "establish" }, { bn: "establishment", en: "establishment", hi: "establishment" }],
              [{ bn: "impose", en: "impose", hi: "impose" }, { bn: "imposition", en: "imposition", hi: "imposition" }],
              [{ bn: "define", en: "define", hi: "define" }, { bn: "definition", en: "definition", hi: "definition" }],
              [{ bn: "explain", en: "explain", hi: "explain" }, { bn: "explanation", en: "explanation", hi: "explanation" }],
            ],
          },
          points: [
            { bn: "essay-র রোজকার ক্রিয়াগুলোর বিশেষ্য জোড়া হাতের মুঠোয় রাখুন — নিচের টেবিলটাই ভান্ডার।", en: "Keep the noun twins of everyday essay verbs in your pocket — the table below is the bank.", hi: "निबंध की रोज़ की क्रियाओं के संज्ञा-जोड़े जेब में रखें — नीचे की तालिका ही भंडार।" },
            { bn: "**ভূমিকায়** — This essay presents an evaluation of three policy options: will talk about-এর আনুষ্ঠানিক প্রতিশব্দ।", en: "**In the introduction** — This essay presents an evaluation of three policy options: the formal twin of 'will talk about'.", hi: "**भूमिका में** — This essay presents an evaluation of three policy options: 'will talk about' का औपचारिक पर्याय।" },
            { bn: "**মূল অংশে** — The analysis reveals two patterns; A closer comparison of the data shows...।", en: "**In the body** — The analysis reveals two patterns; A closer comparison of the data shows...", hi: "**मुख्य भाग में** — The analysis reveals two patterns; A closer comparison of the data shows..." },
            { bn: "**উপসংহারে** — In conclusion, the evidence suggests...।", en: "**In the conclusion** — In conclusion, the evidence suggests...", hi: "**निष्कर्ष में** — In conclusion, the evidence suggests..." },
            { bn: "**আনুষ্ঠানিক দূরত্বে** passive + nominalisation জুটি: Careful consideration was given to the environmental impact — কে ভাবল, তা বলার দরকার নেই।", en: "**For formal distance** pair passive with nominalisation: Careful consideration was given to the environmental impact — who considered it need not be said.", hi: "**औपचारिक दूरी के लिए** passive + संज्ञा की जोड़ी: Careful consideration was given to the environmental impact — किसने विचार किया, कहना ज़रूरी नहीं।" },
            { bn: "**সতর্কতা** — প্রতিটা বাক্যে ছাঁচ চালালে লেখা নিস্তেজ; ভালো essay ক্রিয়া-বাক্য আর বিশেষ্য-বাক্যের ছন্দ মেলায় — ঘন বিশ্লেষণে বিশেষ্য, দাবি পরিষ্কারে ক্রিয়া।", en: "**Warning** — the template in every sentence goes flat; good essays alternate verb-sentences and noun-sentences — nouns for dense analysis, verbs for clear claims.", hi: "**चेतावनी** — हर वाक्य में ढाँचा चलेगा तो निबंध निथर; अच्छे निबंध क्रिया-वाक्य और संज्ञा-वाक्य की लय मिलाते हैं — घने विश्लेषण में संज्ञा, स्पष्ट दावे में क्रिया।" },
          ],
          examples: [
            {
              wrong: "In this essay, I am going to look at the data and then say what I think.",
              right: "This essay presents an analysis of the data and reaches a clear conclusion.",
              note: {
                bn: "look at→analysis, say what I think→conclusion — ভূমিকার দুটো বাক্যই আনুষ্ঠানিক রূপে বদলাল।",
                en: "'Look at' becomes 'analysis' and 'say what I think' becomes 'conclusion' — both introduction sentences move into formal dress.",
                hi: "'look at' से 'analysis', 'say what I think' से 'conclusion' — भूमिका के दोनों वाक्य औपचारिक रूप में बदले।",
              },
            },
            {
              wrong: "The writer argued good, but his prove was weak.",
              right: "The writer argued persuasively, but his evidence was weak.",
              note: {
                bn: "prove ক্রিয়া, proof বিশেষ্য — তবে প্রমাণ-অর্থে একাডেমিক শব্দ evidence; 'his prove' বাংলাভাষীদের ক্লাসিক ভুল।",
                en: "'Prove' is a verb and 'proof' the noun — but the academic word for proof is 'evidence'; 'his prove' is a classic Bengali-speaker slip.",
                hi: "'prove' क्रिया है, 'proof' संज्ञा — पर प्रमाण के लिए एकेडेमिक शब्द 'evidence' है; 'his prove' बांग्लाभाषियों की क्लासिक चूक।",
              },
            },
            {
              wrong: "The conclusion of the researcher was different than the assumption.",
              right: "The researcher's conclusion differed from the initial assumption.",
              note: {
                bn: "differ from (different than নয়); আর এখানে ক্রিয়া-রূপ differed-ই শক্তিশালী — সব কিছু বিশেষ্য করতে হবে না।",
                en: "'Differ from' (not 'different than'); and here the verb 'differed' is actually stronger — not everything must become a noun.",
                hi: "'differ from' ('different than' नहीं); और यहाँ क्रिया 'differed' ही बलवान — सब कुछ संज्ञा बनाना ज़रूरी नहीं।",
              },
            },
            {
              wrong: "The government did a reduction of the tax on electric cars.",
              right: "The government reduced the tax on electric cars.",
              note: {
                bn: "did a reduction of-এর মতো dummy-ভারী গুচ্ছ অপ্রয়োজনীয় — একটা ক্রিয়া reduced-ই কাজ শেষ করে দেয়।",
                en: "A dummy-heavy chunk like 'did a reduction of' is unnecessary — one verb, 'reduced', finishes the job.",
                hi: "'did a reduction of' जैसा dummy-भारी गुच्छ अनावश्यक है — एक क्रिया 'reduced' काम पूरा कर देती है।",
              },
            },
            {
              wrong: "The growth of economy depends on the invest in education.",
              right: "The growth of the economy depends on investment in education.",
              note: {
                bn: "economy-র আগে the; invest→investment; investment in education — preposition-সহ জোড়া।",
                en: "'The economy' takes 'the'; 'invest' becomes 'investment'; and 'investment in education' — the pair comes with its preposition.",
                hi: "'economy' के साथ 'the'; 'invest' से 'investment'; और 'investment in education' — जोड़ी preposition समेत आती है।",
              },
            },
          ],
        },
        /* ── 6. Zombie nouns ── */
        {
          heading: {
            bn: "🧟 যখন লেখা ভারী হয়ে যায়: zombie noun থেকে মুক্তি",
            en: "🧟 When prose gets heavy: escaping zombie nouns",
            hi: "🧟 जब गद्य भारी हो जाए: zombie संज्ञाओं से मुक्ति",
          },
          lead: {
            bn: "বিশেষ্যের স্তূপ লেখাকে 'zombie' বানায় — চেনার লক্ষণ আর মুক্তির তিন রাস্তা।",
            en: "Piled-up nouns turn prose 'zombie' — the symptoms, and three ways out.",
            hi: "संज्ञाओं का ढेर गद्य को 'zombie' बना देता है — लक्षण और तीन रास्ते।",
          },
          points: [
            { bn: "লেখক-সমালোচক Helen Sword এদের ডাকেন **zombie nouns** — যে বিশেষ্যেরা মূল ক্রিয়াকে খেয়ে ফেলে, কর্তাকে ঢেকে ফেলে।", en: "Editor Helen Sword calls them **zombie nouns** — nouns that eat the verb and bury the agent.", hi: "संपादक Helen Sword इन्हें **zombie nouns** कहती हैं — संज्ञाएँ जो क्रिया खा जाती हैं, कर्ता को दफ़ना देती हैं।" },
            { bn: "**লক্ষণ** — এক বাক্যে তিনটার বেশি -tion/-ment/-ance বিশেষ্য; দুর্বল ক্রিয়া: was carried out, took place, occurred; আর হারিয়ে যাওয়া মানুষ।", en: "**Symptoms** — more than three -tion/-ment/-ance nouns in one sentence; weak verbs like was carried out, took place, occurred; and missing people.", hi: "**लक्षण** — एक वाक्य में तीन से अधिक -tion/-ment/-ance संज्ञाएँ; कमज़ोर क्रियाएँ — was carried out, took place, occurred; और गायब लोग।" },
            { bn: "'The implementation of the utilisation of digital tools for the facilitation of learning was carried out by the school' — চারটা zombie এক বাক্যে; পড়ে মনে থাকে কিছুই না।", en: "'The implementation of the utilisation of digital tools for the facilitation of learning was carried out by the school' — four zombies in one sentence; what remains in the reader's mind? Nothing.", hi: "'The implementation of the utilisation of digital tools for the facilitation of learning was carried out by the school' — एक वाक्य में चार zombie; पढ़कर याद रहता कुछ नहीं।" },
            { bn: "**মুক্তি এক** — সবচেয়ে জরুরি একটা nominalisation রাখুন, বাকিদের ক্রিয়ায় ফেরান: The school used digital tools to make learning easier।", en: "**Cure one** — keep the single most important nominalisation, turn the rest back into verbs: The school used digital tools to make learning easier.", hi: "**उपचार एक** — सबसे ज़रूरी एक nominalisation रखें, बाकी क्रिया में लौटाएँ: The school used digital tools to make learning easier।" },
            { bn: "**মুক্তি দুই** — কর্তাকে ফিরিয়ে আনুন: the committee postponed — 'a decision was taken regarding the postponement'-এর চেয়ে স্বচ্ছ।", en: "**Cure two** — bring the agent back: 'the committee postponed' is clearer than 'a decision was taken regarding the postponement'.", hi: "**उपचार दो** — कर्ता वापस लाएँ: 'the committee postponed' — 'a decision was taken regarding the postponement' से साफ़।" },
            { bn: "**মুক্তি তিন** — ল্যাটিন-জাত শব্দকে সহজ শব্দে: utilise→use, facilitate→help, commence→start — একাডেমিক লেখাও ছোট হতে পারে।", en: "**Cure three** — swap Latin-born words for plain ones: utilise→use, facilitate→help, commence→start — academic prose can be short too.", hi: "**उपचार तीन** — लैटिन-जात शब्दों को सरल शब्दों से बदलें: utilise→use, facilitate→help, commence→start — एकेडेमिक गद्य भी छोटा हो सकता है।" },
            { bn: "মনে রাখবেন — নমিনালাইজেশন মশলা, খাবার নয়: ঘন একাডেমিক গদ্যে সামান্য, গল্পে প্রায় শূন্য।", en: "Remember — nominalisation is a spice, not the meal: a pinch in dense academic prose, almost none in stories.", hi: "स्मरण रहे — nominalisation मसाला है, भोजन नहीं: घने एकेडेमिक गद्य में चुटकी भर, कहानी में लगभग शून्य।" },
          ],
          examples: [
            {
              wrong: "The implementation of the utilisation of digital tools for the facilitation of learning was carried out by the school.",
              right: "The school used digital tools to make learning easier.",
              note: {
                bn: "চারটা -tion noun, দুর্বল ক্রিয়া, লুকানো কর্তা — তিনটাই zombie-এর লক্ষণ; একটা ক্রিয়া used-ই বাক্য জীবন্ত করে।",
                en: "Four -tion nouns, a weak verb, a buried agent — all three zombie symptoms; one plain verb, 'used', revives the sentence.",
                hi: "चार -tion संज्ञाएँ, कमज़ोर क्रिया, दफ़न कर्ता — तीनों zombie के लक्षण; एक सरल क्रिया 'used' वाक्य जीवंत कर देती है।",
              },
            },
            {
              wrong: "A decision was taken by the committee for the postponement of the announcement of the results.",
              right: "The committee postponed the announcement of the results.",
              note: {
                bn: "একটা nominalisation রাখুন (announcement); postponement-কে আবার ক্রিয়া postponed করে দিন।",
                en: "Keep one nominalisation ('announcement'); turn 'postponement' back into the verb 'postponed'.",
                hi: "एक nominalisation रखें ('announcement'); 'postponement' को फिर क्रिया 'postponed' बना दें।",
              },
            },
            {
              wrong: "The teacher gave an explanation of the reason for the failure of the students in the examination.",
              right: "The teacher explained why the students had failed the exam.",
              note: {
                bn: "give an explanation of = explain — of-chain ভেঙে ক্রিয়ায় ফেরালে বাক্য অর্ধেক হয়ে যায়।",
                en: "'Give an explanation of' = explain — breaking the of-chain and returning to the verb halves the sentence.",
                hi: "'give an explanation of' = explain — of-शृंखला तोड़कर क्रिया में लौटने से वाक्य आधा हो जाता है।",
              },
            },
            {
              wrong: "There was a rapid increase in the price of fuel which caused a decrease in the number of passengers on buses.",
              right: "Fuel prices rose sharply, so fewer passengers travelled by bus.",
              note: {
                bn: "সংবাদ-শিরোনামের মতো noun chain ব্লগ বা বক্তৃতায় অতিরিক্ত; ক্রিয়া-ভিত্তিক সংস্করণ প্রাণবন্ত ও সহজ।",
                en: "A headline-style noun chain is too much for a blog or a talk; the verb-driven version is lively and easy.",
                hi: "सुर्ख़ी-शैली की संज्ञा-शृंखला ब्लॉग या भाषण के लिए अतिरिक्त है; क्रिया-प्रधान रूप जीवंत और सरल है।",
              },
            },
          ],
        },
        /* ── 7. Subtle errors ── */
        {
          heading: {
            bn: "⚠️ উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "⚠️ Subtle errors of advanced learners",
            hi: "⚠️ उच्च स्तर के शिक्षार्थियों की सूक्ष्म चूकें",
          },
          lead: {
            bn: "C1-দেরও ধরে ফেলা পাঁচটা সূক্ষ্ম ভুল — একবারেই গুছিয়ে নিন।",
            en: "Five subtle errors that catch even C1 learners — settle them once for all.",
            hi: "C1 को भी पकड़ लेने वाली पाँच सूक्ष्म चूक — एक बार में ठीक कर लें।",
          },
          points: [
            { bn: "**পা এক — uncountable ফাঁদ**: বাংলা 'তথ্যগুলো', 'উপদেশগুলো'-র টানে informations, advices, researches লেখা হয় — এদের কেউ plural নয়: information, advice, research, evidence, feedback, progress, knowledge, luggage।", en: "**Stumble one — the uncountable trap**: Bengali plurals pull us into informations, advices, researches — none take a plural: information, advice, research, evidence, feedback, progress, knowledge, luggage.", hi: "**ठोकर एक — uncountable जाल**: 'जानकारियाँ', 'सलाहें' की आदत से informations, advices, researches लिख देते हैं — इनमें से कोई plural नहीं: information, advice, research, evidence, feedback, progress, knowledge, luggage।" },
            { bn: "**পা দুই — do/make গোলমাল**: make a decision, make progress, make a suggestion; do research — 'do a decision' কেউ বলে না।", en: "**Stumble two — do/make confusion**: make a decision, make progress, make a suggestion; do research — nobody says 'do a decision'.", hi: "**ठोकर दो — do/make भ्रम**: make a decision, make progress, make a suggestion; do research — 'do a decision' कोई नहीं कहता।" },
            { bn: "**পা তিন — ধার-করা বিশেষ্যে বাংলা ক্রিয়া**: 'ডিসকাশন করা', 'সার্ভে করা', 'রিপোর্ট করা' — কিন্তু ইংরেজিতে hold/have a discussion, conduct/carry out a survey, submit a report, follow up on a request।", en: "**Stumble three — borrowed nouns with Bengali verbs**: 'ডিসকাশন করা', 'সার্ভে করা', 'রিপোর্ট করা' — but English wants hold/have a discussion, conduct/carry out a survey, submit a report, follow up on a request.", hi: "**ठोकर तीन — उधार संज्ञा के साथ बांग्ला क्रिया**: 'डिसकशन करना', 'सर्वे करना', 'रिपोर्ट करना' — पर अंग्रेज़ी चाहती है hold/have a discussion, conduct/carry out a survey, submit a report, follow up on a request।" },
            { bn: "বিশেষ্যটা ধার করলে ক্রিয়া-জুটিও ধার করতে হবে — জোড়াটাই মুখস্থ করুন।", en: "When you borrow the noun, borrow the verb pair too — memorise the pair as one unit.", hi: "संज्ञा उधार ली तो क्रिया-जोड़ी भी उधार लेनी होगी — जोड़ी ही कंठस्थ करें।" },
            { bn: "**পা চার — বিশেষ্যের পরে preposition**: discussion of/on (about নয়), impact on, research on/into, contribution to, ban on, reason for।", en: "**Stumble four — prepositions after nouns**: discussion of/on (not about), impact on, research on/into, contribution to, ban on, reason for.", hi: "**ठोकर चार — संज्ञा के बाद preposition**: discussion of/on (about नहीं), impact on, research on/into, contribution to, ban on, reason for।" },
            { bn: "**পা পাঁচ — article**: প্রথমবার a/an ('a significant reduction'); নির্দিষ্ট বা আগে-বলা জিনিসে the ('the reduction we discussed'); জেনেরিক ধারণায় অনেক সময় কিছুই না।", en: "**Stumble five — articles**: a/an on first mention ('a significant reduction'); the when specific or already mentioned ('the reduction we discussed'); generic ideas often take nothing.", hi: "**ठोकर पाँच — article**: पहले उल्लेख पर a/an ('a significant reduction'); निर्दिष्ट या पहले बताई चीज़ पर the ('the reduction we discussed'); सामान्य धारणा में प्रायः कुछ नहीं।" },
            { bn: "এই পাঁচটা ঠিক করলেই লেখা তৎক্ষণাৎ native-এর মতো গোছানো লাগে।", en: "Fix these five and your prose instantly looks as tidy as a native's.", hi: "ये पाँच ठीक करते ही लेखन तुरंत native जैसा गुठित लगेगा।" },
          ],
          examples: [
            {
              wrong: "The ministry gave many informations to the press about the new policy.",
              right: "The ministry gave the press a great deal of information about the new policy.",
              note: {
                bn: "information uncountable — many informations নেই; পরিমাণ বোঝাতে a great deal of / much / a lot of।",
                en: "'Information' is uncountable — 'many informations' does not exist; use 'a great deal of / much / a lot of' for quantity.",
                hi: "'information' uncountable है — 'many informations' नहीं; मात्रा के लिए 'a great deal of / much / a lot of'।",
              },
            },
            {
              wrong: "We made a survey among 500 students and did a research about their habits.",
              right: "We conducted a survey of 500 students and did research on their habits.",
              note: {
                bn: "conduct/carry out a survey (of); do research (on/into) — make/do জুটির খেয়াল রাখুন।",
                en: "Conduct/carry out a survey (of); do research (on/into) — watch the make/do pairing.",
                hi: "conduct/carry out a survey (of); do research (on/into) — make/do की जोड़ी पर ध्यान दें।",
              },
            },
            {
              wrong: "The teacher gave us useful advices and a strong feedback.",
              right: "The teacher gave us useful advice and strong feedback.",
              note: {
                bn: "advice, feedback uncountable — plural -s নেই, a-ও নেই।",
                en: "'Advice' and 'feedback' are uncountable — no plural -s, no 'a'.",
                hi: "'advice' और 'feedback' uncountable हैं — plural -s नहीं, 'a' भी नहीं।",
              },
            },
            {
              wrong: "The principal asked us to do a discussion about the proposal and give a report to him quickly.",
              right: "The principal asked us to hold a discussion of the proposal and submit a report promptly.",
              note: {
                bn: "hold/have a discussion of; submit a report — ধার-করা বিশেষ্যের ইংরেজি ক্রিয়া-জুটি শিখে নিন।",
                en: "Hold/have a discussion of; submit a report — learn the English verb that comes with each borrowed noun.",
                hi: "hold/have a discussion of; submit a report — हर उधार संज्ञा के साथ आने वाली अंग्रेज़ी क्रिया सीखें।",
              },
            },
            {
              wrong: "Despite of the failure of the plan, the team did a good progress.",
              right: "Despite the failure of the plan, the team made good progress.",
              note: {
                bn: "despite of নেই (despite বা in spite of); make progress — do নয়।",
                en: "'Despite of' does not exist (despite or in spite of); and 'make progress', not 'do'.",
                hi: "'despite of' अस्तित्व में नहीं (despite या in spite of); और 'make progress', 'do' नहीं।",
              },
            },
          ],
        },
        /* ── 8. See it in a short passage ── */
        {
          heading: {
            bn: "📖 ছোট লেখায় দেখা যাক",
            en: "📖 See it in a short passage",
            hi: "📖 छोटे अंश में देखें",
          },
          lead: {
            bn: "একটা গবেষণা-সারসংক্ষেপের ভঙ্গিতে লেখা অনুচ্ছেদ — ছয়টা নমিনালাইজড subject একসাথে।",
            en: "A research-abstract-style paragraph — six nominalised subjects working together.",
            hi: "शोध-सार शैली में लिखा अनुच्छेद — छह नॉमिनलाइज़्ड subject एक साथ।",
          },
          points: [
            { bn: "নিচের অনুচ্ছেদটা একটা গবেষণা-সারসংক্ষেপের ভঙ্গিতে — পড়ুন, তারপর দেখুন nominalisation কোথায় কাজ করছে।", en: "The paragraph below is written like a research abstract — read it, then watch where nominalisation works.", hi: "नीचे का अनुच्छेद शोध-सार की शैली में लिखा है — पढ़ें, फिर देखें nominalisation कहाँ-कहाँ काम कर रही है।" },
            { bn: "'Urban traffic congestion in Dhaka has worsened over the last decade.'", en: "'Urban traffic congestion in Dhaka has worsened over the last decade.'", hi: "'Urban traffic congestion in Dhaka has worsened over the last decade.'" },
            { bn: "'The rapid growth of the city, combined with the failure of public transport to expand, has caused a sharp increase in travel time.'", en: "'The rapid growth of the city, combined with the failure of public transport to expand, has caused a sharp increase in travel time.'", hi: "'The rapid growth of the city, combined with the failure of public transport to expand, has caused a sharp increase in travel time.'" },
            { bn: "'A recent study by the university's transport lab offers an analysis of the problem and a proposal for improvement: the construction of dedicated bus lanes and a reduction in private-car use.'", en: "'A recent study by the university's transport lab offers an analysis of the problem and a proposal for improvement: the construction of dedicated bus lanes and a reduction in private-car use.'", hi: "'A recent study by the university's transport lab offers an analysis of the problem and a proposal for improvement: the construction of dedicated bus lanes and a reduction in private-car use.'" },
            { bn: "'The government's adoption of these recommendations would bring a significant reduction in congestion.'", en: "'The government's adoption of these recommendations would bring a significant reduction in congestion.'", hi: "'The government's adoption of these recommendations would bring a significant reduction in congestion.'" },
            { bn: "ছয়টা নমিনালাইজড subject-ই বাক্যকে সংযত, গবেষণার মতো শোনাচ্ছে; ক্রিয়া-ভিত্তিক করলে ('Dhaka has grown fast, buses did not expand, so people take more time') তথ্য থাকে, গাম্ভীর্য চলে যায়।", en: "Six nominalised subjects keep the prose measured and research-like; make it verb-driven ('Dhaka has grown fast, buses did not expand, so people take more time') and the facts survive but the gravity is gone.", hi: "छह नॉमिनलाइज़्ड subject ही गद्य को संयत, शोध-सदृश्य बनाते हैं; क्रिया-प्रधान कर दें ('Dhaka has grown fast, buses did not expand, so people take more time') तो तथ्य बचते हैं, पर गंभीरता चली जाती है।" },
          ],
          examples: [
            {
              wrong: "Traffic in Dhaka became very bad more and more in the last ten years.",
              right: "Traffic congestion in Dhaka has worsened over the last decade.",
              note: {
                bn: "has worsened + over the last decade — দুটো আনুষ্ঠানিক পছন্দই গবেষণা-ভঙ্গি দেয়।",
                en: "'Has worsened' + 'over the last decade' — both formal choices create the research tone.",
                hi: "'has worsened' + 'over the last decade' — दोनों औपचारिक चुनाव शोध-शैली देते हैं।",
              },
            },
            {
              wrong: "The study did an analysis about the problem and gave a proposal of improvement.",
              right: "The study offers an analysis of the problem and a proposal for improvement.",
              note: {
                bn: "offer an analysis of; a proposal for — analysis about/proposal of-এর preposition ভুল।",
                en: "'Offer an analysis of'; 'a proposal for' — 'analysis about' and 'proposal of' use the wrong prepositions.",
                hi: "'offer an analysis of'; 'a proposal for' — 'analysis about' और 'proposal of' में preposition ग़लत है।",
              },
            },
            {
              wrong: "If the government adopt these recommendations, congestion will reduce significantly.",
              right: "The government's adoption of these recommendations would bring a significant reduction in congestion.",
              note: {
                bn: "subject-এ বিশেষ্য (adoption) ধরলে বাক্য আনুষ্ঠানিক ও ভবিষ্যদ্বাণী-সুরের হয়; report-ভঙ্গিতে would bring + reduction বেশি মানানসই।",
                en: "Making the noun 'adoption' the subject gives the sentence a formal, predictive tone; in report style 'would bring + reduction' fits better.",
                hi: "संज्ञा 'adoption' को subject बनाने से वाक्य औपचारिक और भविष्यवाणी-सुर में हो जाता है; रिपोर्ट-शैली में 'would bring + reduction' बेहतर।",
              },
            },
          ],
        },
        /* ── 9. At a glance ── */
        {
          heading: {
            bn: "🧮 এক নজরে: পুরো পাঠের সার",
            en: "🧮 At a glance: the whole lesson on one card",
            hi: "🧮 एक नज़र में: पूरा पाठ",
          },
          lead: {
            bn: "পুরো পাঠের ছয় সূত্র — পরীক্ষার আগে এই কার্ডটাই দেখুন।",
            en: "Six rules of the whole lesson — this is the card to scan before the exam.",
            hi: "पूरे पाठ के छह सूत्र — परीक्षा से पहले बस यही कार्ड देखें।",
          },
          formula: {
            bn: "ক্রিয়া→বিশেষ্য · ক্রিয়াবিশেষণ→বিশেষণ · কর্তা→'s/of · preposition-জুটি মুখস্থ",
            en: "verb→noun · adverb→adjective · agent→'s/of · learn the preposition pairs",
            hi: "क्रिया→संज्ञा · क्रिया-विशेषण→विशेषण · कर्ता→'s/of · preposition-जोड़े कंठस्थ",
          },
          points: [
            { bn: "**ক্রিয়া → বিশেষ্য**: decide→decision, increase→the increase in...।", en: "**Verb → noun**: decide→decision, increase→the increase in...", hi: "**क्रिया → संज्ञा**: decide→decision, increase→the increase in..." },
            { bn: "**ক্রিয়াবিশেষণ → বিশেষণ**: quickly→quick decision।", en: "**Adverb → adjective**: quickly→quick decision.", hi: "**क्रिया-विशेषण → विशेषण**: quickly→quick decision।" },
            { bn: "**কর্তা** possessive ('s) বা of-phrase-এ উঠে আসে।", en: "**The agent** moves up as a possessive ('s) or an of-phrase.", hi: "**कर्ता** possessive ('s) या of-phrase में आ जाता है।" },
            { bn: "**Preposition-জুটি**: increase in, effect on, proposal for, contribution to।", en: "**Preposition pairs**: increase in, effect on, proposal for, contribution to.", hi: "**Preposition-जोड़े**: increase in, effect on, proposal for, contribution to।" },
            { bn: "**Uncountable** — plural নয়: information, research, advice, evidence, progress।", en: "**Uncountables** — never plural: information, research, advice, evidence, progress.", hi: "**Uncountable** — plural नहीं: information, research, advice, evidence, progress।" },
            { bn: "এক বাক্যে ৩+ -tion noun দেখলেই **zombie সতর্কবার্তা** — একটা রেখে বাকিগুলো ক্রিয়ায় ফেরান।", en: "Three or more -tion nouns in one sentence is the **zombie alert** — keep one, turn the rest back into verbs.", hi: "एक वाक्य में ३+ -tion संज्ञा देखते ही **zombie चेतावनी** — एक रखें, बाकी क्रिया में लौटाएँ।" },
          ],
          examples: [],
        },
      ],
      tips: [
        { bn: "প্রতিদিন পাঁচটা ক্রিয়া বিশেষ্যে বদলান: decide, inform, explain, discuss, analyse, reduce — তারপর উল্টো দিকেও।", en: "Turn five verbs into nouns daily: decide, inform, explain, discuss, analyse, reduce — then back again.", hi: "रोज़ पाँच क्रियाएँ संज्ञा में बदलें: decide, inform, explain, discuss, analyse, reduce — फिर उलटी दिशा में भी।" },
        { bn: "Essay-তে will talk about→examines, look at→an analysis of, say what I think→a conclusion — ভূমিকার ছাঁচ মুখস্থ করুন।", en: "In essays: will talk about→examines, look at→an analysis of, say what I think→a conclusion — memorise the introduction template.", hi: "निबंध में: will talk about→examines, look at→an analysis of, say what I think→a conclusion — भूमिका का ढाँचा कंठस्थ करें।" },
        { bn: "ক্রিয়াবিশেষণ→বিশেষণ নিয়ম বারবার মনে করুন: quickly→quick decision, carefully→careful analysis।", en: "Repeat the adverb→adjective rule: quickly→quick decision, carefully→careful analysis.", hi: "क्रिया-विशेषण→विशेषण नियम दोहराएँ: quickly→quick decision, carefully→careful analysis।" },
        { bn: "Uncountable তালিকা মুখস্থ: information, advice, research, evidence, feedback, progress, knowledge — কোনোটাই plural নয়।", en: "Memorise the uncountables: information, advice, research, evidence, feedback, progress, knowledge — none take a plural.", hi: "uncountable तालिका कंठस्थ करें: information, advice, research, evidence, feedback, progress, knowledge — कोई plural नहीं।" },
        { bn: "ক্রিয়া-জুটি শিখুন: make a decision/progress, do research, conduct a survey, hold a discussion, submit a report, reach a conclusion।", en: "Learn the verb pairs: make a decision/progress, do research, conduct a survey, hold a discussion, submit a report, reach a conclusion.", hi: "क्रिया-जोड़ियाँ सीखें: make a decision/progress, do research, conduct a survey, hold a discussion, submit a report, reach a conclusion।" },
        { bn: "Preposition-জুটি: increase in, effect on, discussion of, proposal for, contribution to, ban on।", en: "Preposition pairs: increase in, effect on, discussion of, proposal for, contribution to, ban on.", hi: "preposition-जोड़े: increase in, effect on, discussion of, proposal for, contribution to, ban on।" },
        { bn: "Zombie পরীক্ষা: এক বাক্যে তিনটার বেশি -tion/-ment থাকলে একটা রেখে বাকিগুলো ক্রিয়ায় ফেরান।", en: "Zombie test: more than three -tion/-ment nouns in a sentence — keep one, turn the rest back into verbs.", hi: "zombie परीक्षण: एक वाक्य में तीन से अधिक -tion/-ment — एक रखें, बाकी क्रिया में लौटाएँ।" },
        { bn: "সংবাদ-শিরোনাম পড়ুন: 'Sharp rise in fuel prices' — শিরোনামই সংকুচিত nominalisation।", en: "Read news headlines: 'Sharp rise in fuel prices' — a headline is compressed nominalisation.", hi: "समाचार-शीर्षक पढ़ें: 'Sharp rise in fuel prices' — शीर्षक ही संकुचित nominalisation है।" },
        { bn: "IELTS-এ ছন্দ মেলান: এক বাক্য ক্রিয়া-ভিত্তিক, পরের বাক্য বিশেষ্য subject — cohesion examiner-এর চোখেই পড়ে।", en: "In IELTS, alternate the rhythm: one verb-driven sentence, then a noun-subject sentence — examiners notice the cohesion.", hi: "IELTS में लय मिलाएँ: एक क्रिया-प्रधान वाक्य, फिर संज्ञा-subject वाक्य — examiner संबद्धता देख लेता है।" },
      ],
      quiz: [
        {
          question: "Which sentence correctly nominalises 'The government decided quickly'?",
          options: ["The quickly decision of the government", "The government's quick decision", "The government quick decision quickly", "The decision of quickly government"],
          answer: 1,
          explanation: { bn: "ক্রিয়াবিশেষণ quickly বিশেষণ quick হয়ে বিশেষ্য decision-কে বর্ণনা করে; কর্তা possessive রূপে (the government's) আগে আসে।", en: "The adverb becomes the adjective 'quick' describing the noun 'decision'; the agent appears as a possessive.", hi: "क्रिया-विशेषण 'quick' विशेषण बनकर संज्ञा 'decision' का वर्णन करता है; कर्ता possessive रूप में आता है।" },
        },
        {
          question: "Choose the correct pair of nouns.",
          options: ["Poorness / refuse", "Poverty / refusal", "Poverty / refusion", "Poorment / refusal"],
          answer: 1,
          explanation: { bn: "poor→poverty irregular; refuse ক্রিয়ার বিশেষ্য refusal — 'poorness' বা 'refusion' কোনোটাই শব্দ নয়।", en: "'Poor' becomes the irregular 'poverty'; the noun of 'refuse' is 'refusal' — 'poorness' and 'refusion' are not words.", hi: "'poor' से अनियमित 'poverty'; 'refuse' की संज्ञा 'refusal' — 'poorness' और 'refusion' शब्द ही नहीं।" },
        },
        {
          question: "The committee postponed ___ the results.",
          options: ["the announce of", "the announcement of", "announcing of", "the announce for"],
          answer: 1,
          explanation: { bn: "announce ক্রিয়ার বিশেষ্য announcement; 'postpone the announcement of the results' — of-phrase-সহ জোড়া।", en: "The noun of 'announce' is 'announcement'; the fixed pattern is 'postpone the announcement of the results'.", hi: "'announce' क्रिया की संज्ञा 'announcement'; नियत रूप है 'postpone the announcement of the results'।" },
        },
        {
          question: "Which is correct in formal writing?",
          options: ["many informations", "several informations", "a great deal of information", "many information"],
          answer: 2,
          explanation: { bn: "information uncountable — plural নেই, many-ও নয়; পরিমাণে a great deal of / much / a lot of।", en: "'Information' is uncountable — no plural and no 'many'; quantity takes 'a great deal of / much / a lot of'.", hi: "'information' uncountable है — plural नहीं, 'many' भी नहीं; मात्रा के लिए 'a great deal of / much / a lot of'।" },
        },
        {
          question: "Heavy rain resulted ___ the cancellation of the match.",
          options: ["to", "of", "in", "for"],
          answer: 2,
          explanation: { bn: "result in + noun phrase — এই কারণেই ক্রিয়া cancel বিশেষ্য cancellation হয়েছে।", en: "'Result in' takes a noun phrase — which is exactly why 'cancel' had to become 'cancellation'.", hi: "'result in' के बाद noun phrase — इसीलिए 'cancel' को 'cancellation' बनना पड़ा।" },
        },
        {
          question: "Which sentence fits casual conversation best?",
          options: ["The implementation of the rescheduling of the event has occurred.", "They rescheduled the event.", "The event's rescheduling was implemented.", "Rescheduling of the event has taken place."],
          answer: 1,
          explanation: { bn: "কথোপকথনে ক্রিয়া-ভিত্তিক, কর্তা-সহ সহজ বাক্যই স্বাভাবিক — বিশেষ্যের স্তূপ রোবটিক শোনায়।", en: "In conversation, a simple verb-driven sentence with a clear agent is natural — piles of nouns sound robotic.", hi: "बातचीत में क्रिया-प्रधान, स्पष्ट कर्ता वाला सरल वाक्य स्वाभाविक है — संज्ञाओं का ढेर रोबॉटिक लगता है।" },
        },
        {
          question: "Pick the correct spelling.",
          options: ["Explaination", "Explanation", "Explanasion", "Explamesion"],
          answer: 1,
          explanation: { bn: "explain→explanation — explaination বানান নেই; এই জাতীয় বানান-বদলের তালিকা নোট করুন।", en: "'Explain' → 'explanation' — 'explaination' is a misspelling; note down such spelling shifts.", hi: "'explain' → 'explanation' — 'explaination' गलत वर्तनी है; ऐसे वर्तनी-बदल नोट करें।" },
        },
        {
          question: "The board held a ___ of the merger.",
          options: ["discussion", "discuss", "discussing", "discussive"],
          answer: 0,
          explanation: { bn: "hold a discussion — discussion বিশেষ্য; discuss ক্রিয়া, এখানে article a-র পরে বিশেষ্যই লাগবে।", en: "'Hold a discussion' — 'discussion' is the noun; 'discuss' is a verb, and after the article 'a' a noun is needed.", hi: "'hold a discussion' — 'discussion' संज्ञा है; 'discuss' क्रिया है, article 'a' के बाद संज्ञा चाहिए।" },
        },
        {
          question: "Best report version of 'Fuel prices went up fast, so bus travel dropped.'?",
          options: ["Sharp increase in fuel prices was there and bus travel dropped", "The sharp increase in fuel prices led to a decline in bus travel", "Fuel prices increased fast and buses became less", "Prices went up sharply and less people used buses"],
          answer: 1,
          explanation: { bn: "lead to + noun phrase (a decline in...) — প্রতিবেদনের সুর; 'less people' ভুল (fewer people)।", en: "'Lead to' + noun phrase ('a decline in...') gives the report tone; 'less people' is wrong (fewer people).", hi: "'lead to' + noun phrase ('a decline in...') रिपोर्ट-सुर देता है; 'less people' ग़लत है (fewer people)।" },
        },
      ],
    },
  },
  /* ── 2. Ellipsis & Substitution ──────────────────────────────────────── */
  {
    topic: "Ellipsis & Substitution",
    level: "advanced",
    title: "Ellipsis & Substitution",
    unit: 0,
    sortOrder: 11,
    data: {
      title: {
        bn: "এলিপসিস ও সাবস্টিটিউশন (শব্দ বাদ ও প্রতিস্থাপন)",
        en: "Ellipsis & Substitution",
        hi: "एलिप्सिस और सब्स्टिट्यूशन (शब्द हटाना और प्रतिस्थापन)",
      },
      intro: {
        bn: "একই কথা দুইবার বলা ইংরেজির কাছে অপরাধ নয়, কিন্তু অশোভন — শ্রোতা যা আগেই জানে, সেটা ফেরত দেওয়া তাকে ছোট করে দেখায়। এই পাঠে দুই কৌশল শিখব: ellipsis — পুনরাবৃত্ত শব্দ একেবারে বাদ দেওয়া ('She can sing and dance') — আর substitution — ছোট শব্দ দিয়ে জায়গা ভরাট (do, one, so, that of)। আগে Linking Words & Connectors আর Reported Speech Basics পাঠ শেষ করে নিন — clause-জোড়া আর auxiliary-নিয়ম এখানে বারবার কাজে লাগবে। একটা সতর্কতা আগেই: বাংলায় কর্তা বাদ যায় ('গেছি'), কিন্তু ইংরেজিতে বাদ যায় পুনরাবৃত্ত ক্রিয়া-গুচ্ছ, কর্তা নয় — এই পার্থক্যটাই এই পাঠের কেন্দ্র।",
        en: "Repeating yourself is not a crime in English, but it is poor style — giving the listener back what they already know talks down to them. In this lesson you learn two devices: ellipsis — leaving repeated words out entirely ('She can sing and dance') — and substitution — filling the slot with a small word (do, one, so, that of). Please finish Linking Words & Connectors and Reported Speech Basics first; clause-joining and auxiliary rules will be used throughout. One warning up front: Bengali drops subjects ('গেছি'), but English drops repeated verb phrases, not subjects — that difference is the heart of this lesson.",
        hi: "एक ही बात दोहराना अंग्रेज़ी में अपराध नहीं, पर खराब शैली है — श्रोता जो पहले से जानता है वह लौटाना उसे छोटा समझाना है। इस पाठ में दो तकनीकें सीखेंगे: ellipsis — दोहराए गए शब्द पूरी तरह हटाना ('She can sing and dance') — और substitution — छोटे शब्द से जगह भरना (do, one, so, that of)। पहले Linking Words & Connectors और Reported Speech Basics पूरे करें; clause-जोड़ना और auxiliary नियम यहाँ बार-बार काम आएँगे। एक चेतावनी पहले ही: बांग्ला में कर्ता हट जाता है ('गेछि'), पर अंग्रेज़ी में दोहराया क्रिया-समूह हटता है, कर्ता नहीं — यही फ़र्क़ इस पाठ का केंद्र है।",
      },
      roadmap: [
        { bn: "🎯 একই কথা দুবার না বলার দুই কৌশল", en: "🎯 Two devices for not saying things twice", hi: "🎯 एक बात दो बार न कहने के दो तरीक़े" },
        { bn: "🏗️ বাদ-দেওয়ার পাঁচ ঘর: coordination থেকে উত্তর-ellipsis", en: "🏗️ Five rooms of omission: coordination to answer ellipsis", hi: "🏗️ हटाने के पाँच कमरे: coordination से answer-ellipsis तक" },
        { bn: "🚦 recovery test — কখন বাদ দেওয়া নিরাপদ", en: "🚦 The recovery test — when omission is safe", hi: "🚦 recovery test — हटाना कब सुरक्षित" },
        { bn: "🔁 do/does/did — শর্ট আনসার আর সম্মতির জাদু", en: "🔁 do/does/did — the magic of short answers and agreement", hi: "🔁 do/does/did — छोटे उत्तर और सहमति का जादू" },
        { bn: "🧩 one/ones আর so/not — বিশেষ্য ও ভাবের বদলি", en: "🧩 one/ones and so/not — substitutes for nouns and ideas", hi: "🧩 one/ones और so/not — संज्ञा और भाव के प्रतिनिधि" },
        { bn: "🎭 ইকো-প্রশ্ন থেকে that of — এগিয়ে-পিছিয়ের হাতিয়ার", en: "🎭 Echo questions to that of — the further devices", hi: "🎭 echo-प्रश्नों से that of तक — आगे के औज़ार" },
        { bn: "⚠️ over-answering আর me too-র ফাঁদ এড়ানো", en: "⚠️ Dodging the over-answering and me too traps", hi: "⚠️ over-answering और me too के जाल से बचें" },
        { bn: "📖 আট লাইনের সংলাপে সব ঘর একসাথে", en: "📖 Every room at once in an eight-line dialogue", hi: "📖 आठ पंक्तियों के संवाद में सारे कमरे" },
        { bn: "🧮 substitute-সারণি আর সাত সূত্র", en: "🧮 The substitute table and seven rules", hi: "🧮 substitute तालिका और सात सूत्र" },
      ],
      sections: [
        /* ── 1. When to use it ── */
        {
          heading: {
            bn: "🎯 কখন ব্যবহার হয়: একই কথা দুবার না বলার বিদ্যা",
            en: "🎯 When to use it: the art of not saying things twice",
            hi: "🎯 कब इस्तेमाल होता है: एक ही बात दो बार न कहने की विद्या",
          },
          lead: {
            bn: "যা শ্রোতা ফিরিয়ে আনতে পারে, তা বলা বাহুল্য — বাদ দেওয়া বা ছোট শব্দে ভরাট করা।",
            en: "What the listener can already recover needs no repeating — drop it, or fill the slot with a small word.",
            hi: "जो श्रोता पहले से जानता है उसे दोहराना बाहुल्य है — हटाइए या छोटे शब्द से भरिए।",
          },
          points: [
            { bn: "ভাষার মূল নিয়ম — **যা শ্রোতা আগে থেকেই জানে, তা আবার বলতে হয় না**।", en: "A core law of language — what the listener can already recover, you need not say again.", hi: "भाषा का मूल नियम — जो श्रोता पहले से जान लेता है, वह दोबारा नहीं कहना होता।" },
            { bn: "'She can sing and she can dance' — দ্বিতীয় she can অনুমেয়, তাই মুখের ভাষায় ঝরে পড়ে: 'She can sing and dance'।", en: "'She can sing and she can dance' — the second 'she can' is perfectly predictable, so speech drops it: 'She can sing and dance'.", hi: "'She can sing and she can dance' — दूसरा 'she can' अनुमेय है, बोलचाल में गिर जाता है: 'She can sing and dance'।" },
            { bn: "**Ellipsis** — পুনরাবৃত্ত শব্দ একেবারে বাদ দেওয়া; **substitution** — ছোট শব্দ (do, one, so) দিয়ে জায়গা ভরাট।", en: "**Ellipsis** — leaving repeated words out entirely; **substitution** — filling the slot with a small word (do, one, so).", hi: "**Ellipsis** — दोहराए गए शब्द पूरी तरह हटाना; **substitution** — छोटे शब्द (do, one, so) से जगह भरना।" },
            { bn: "কথোপকথনে এরা ছন্দ তৈরি করে — শর্ট আনসার, ইকো-প্রশ্ন, 'Me too', 'Why not?'।", en: "In conversation these devices create rhythm — short answers, echo questions, 'Me too', 'Why not?'.", hi: "बातचीत में ये लय बनाते हैं — छोटे उत्तर, echo-प्रश्न, 'Me too', 'Why not?'।" },
            { bn: "লেখায় এরা পুনরাবৃত্তি কমিয়ে সংযম আনে — essay-তে একই noun phrase পাঁচবার ফেরত এলে লেখা কর্কশ হয়ে যায়।", en: "In writing they cut repetition and add dignity — repeating the same noun phrase five times in an essay grates.", hi: "लेखन में ये पुनरावृत्ति घटाकर संयम लाते हैं — निबंध में एक ही noun phrase पाँच बार आए तो लेखन कर्कश होता है।" },
            { bn: "বাংলায় কর্তা-সর্বনাম বাদ যায় ('গেছি', 'খাব', 'ভালো আছি') — ইংরেজিতে সেই স্বাধীনতা নেই; ইংরেজি বাদ দেয় পুনরাবৃত্ত **ক্রিয়া-গুচ্ছ**, কর্তা নয়।", en: "Bengali drops subject pronouns ('গেছি', 'খাব', 'ভালো আছি') — English has no such freedom; English drops the repeated **verb phrase**, not the subject.", hi: "बांग्ला में कर्ता-सर्वनाम गिर जाता है ('गेछि') — अंग्रेज़ी को वह स्वतंत्रता नहीं; अंग्रेज़ी दोहराया **क्रिया-समूह** छोड़ती है, कर्ता नहीं।" },
            { bn: "'Went', 'Is fine', 'Did homework' — এগুলো ellipsis নয়, ভাঙা বাক্য।", en: "'Went', 'Is fine', 'Did homework' — these are not ellipsis, they are broken sentences.", hi: "'Went', 'Is fine', 'Did homework' — ये ellipsis नहीं, टूटे वाक्य हैं।" },
            { bn: "সীমা — বাদ যাওয়া শব্দ অবশ্যই ঠিক আশপাশের বাক্যে হুবহু পাওয়া যেতে হবে; শ্রোতা ফিরিয়ে আনতে না পারলে বাদ-দেওয়াই ভুল।", en: "The boundary — the omitted words must be recoverable word-for-word from the immediate context; if the listener cannot rebuild them, the omission itself is the error.", hi: "सीमा — हटे शब्द तुरंत पास के वाक्य में हूबहू मिलने चाहिए; श्रोता फिर न बना सके तो हटाना ही भूल है।" },
          ],
          examples: [
            {
              wrong: "She can sing and she can dance and she can act also.",
              right: "She can sing, dance and act.",
              note: {
                bn: "একই কর্তা + auxiliary তালিকায় একবারই — বাকিরা comma-য় শোঁকে যায়; এটা coordination-ellipsis।",
                en: "The same subject + auxiliary appears once in a list — the rest sink into the commas; this is coordination ellipsis.",
                hi: "एक ही कर्ता + auxiliary सूची में एक बार ही — बाकी comma में उतर जाते हैं; यही coordination-ellipsis है।",
              },
            },
            {
              wrong: "A: Did you go to the class? B: Went.",
              right: "A: Did you go to the class? B: Yes, I did.",
              note: {
                bn: "বাংলার 'গেছি'-র টানে ক্রিয়া একা ঝাড়িয়ে দেওয়া; ইংরেজি শর্ট আনসার = subject + auxiliary।",
                en: "Pulled by the Bengali 'গেছি', the verb is thrown out alone; the English short answer = subject + auxiliary.",
                hi: "बांग्ला 'गेछि' की खिंचाव में क्रिया अकेली फेंक दी जाती है; अंग्रेज़ी का छोटा उत्तर = कर्ता + auxiliary।",
              },
            },
            {
              wrong: "She is taller than I am tall.",
              right: "She is taller than I am.",
              note: {
                bn: "than-এর পরে পুনরাবৃত্ত adjective tall বাদ — বাকি সব বুঝে নেওয়া যায়।",
                en: "The repeated adjective 'tall' drops after 'than' — the rest is understood.",
                hi: "'than' के बाद दोहराया विशेषण 'tall' गिर जाता है — बाकी समझ लिया जाता है।",
              },
            },
            {
              wrong: "I have finished my essay, and my brother also has finished his essay.",
              right: "I have finished my essay, and so has my brother.",
              note: {
                bn: "so + inverted auxiliary — পুরো verb phrase-এর substitute; has finished-হিস-essay সব চাপা পড়ে যায়।",
                en: "'So' + inverted auxiliary — a substitute for the whole verb phrase; 'has finished his essay' all disappears beneath it.",
                hi: "'so' + inverted auxiliary — पूरे क्रिया-समूह का प्रतिनिधि; 'has finished his essay' उसके नीचे सब समा जाता है।",
              },
            },
          ],
        },
        /* ── 2. Formation: five rooms ── */
        {
          heading: {
            bn: "🏗️ গঠন: কোথায় বাদ যায় — পাঁচটা ঘর",
            en: "🏗️ Formation: five rooms where words drop",
            hi: "🏗️ गठन: पाँच कमरे जहाँ शब्द गिरते हैं",
          },
          lead: {
            bn: "ellipsis-এর পাঁচটা পরিচিত ঘর — কোথায় কোন শব্দ ঝরে পড়ে।",
            en: "Five familiar rooms of ellipsis — where which words fall away.",
            hi: "ellipsis के पाँच परिचित कमरे — कहाँ कौन-से शब्द गिरते हैं।",
          },
          formula: {
            bn: "বাদ যাওয়া অংশ আগের clause-এ হুবহু আছে? থাকলে বাদ দিন — না থাকলে substitution।",
            en: "Are the dropped words in the previous clause word for word? If yes, drop — if no, substitute.",
            hi: "गिरे शब्द पिछले clause में हूबहू हैं? हाँ तो हटाएँ — नहीं तो substitution।",
          },
          points: [
            { bn: "**ঘর এক — coordination**: and/but/or-এর পরে হুবহু এক শব্দ ফেরত এলে বাদ যায় — I will buy the ticket and pay the fee ([I will] বাদ); She speaks English fluently but writes it slowly।", en: "**Room one — coordination**: after and/but/or, words that return word-for-word may drop — I will buy the ticket and pay the fee ([I will] dropped); She speaks English fluently but writes it slowly.", hi: "**कमरा एक — coordination**: and/but/or के बाद हूबहू लौटने वाले शब्द गिरते हैं — I will buy the ticket and pay the fee ([I will] गया); She speaks English fluently but writes it slowly।" },
            { bn: "**ঘর দুই — subordination**: than, as, while, when, if, because, though-এর পরে clause ছোট হয় — He arrived earlier than expected ([he was] বাদ); If necessary, call me ([it is] বাদ); While in Dhaka, visit Lalbagh ([you are] বাদ)।", en: "**Room two — subordination**: after than, as, while, when, if, because, though the clause shrinks — He arrived earlier than expected ([he was] dropped); If necessary, call me ([it is] dropped); While in Dhaka, visit Lalbagh ([you are] dropped).", hi: "**कमरा दो — subordination**: than, as, while, when, if, because, though के बाद उपवाक्य सिकुड़ता है — He arrived earlier than expected ([he was] गया); If necessary, call me ([it is] गया); While in Dhaka, visit Lalbagh ([you are] गया)।" },
            { bn: "**ঘর তিন — gapping**: দুই clause-এ ক্রিয়া এক হলে মাঝের ক্রিয়া কমা দিয়ে ঝরে পড়ে — Some students chose physics; others, chemistry।", en: "**Room three — gapping**: when two clauses share one verb, the middle verb falls away with a comma — Some students chose physics; others, chemistry.", hi: "**कमरा तीन — gapping**: दो उपवाक्य में क्रिया एक हो तो बीच की क्रिया कॉमा सहित गिरती है — Some students chose physics; others, chemistry।" },
            { bn: "**ঘর চার — infinitive-ellipsis**: to-র পরে পুরো verb phrase বাদ — I wanted to help, but I couldn't; 'Why don't you come?' — 'I'd love to'।", en: "**Room four — infinitive ellipsis**: everything after 'to' drops — I wanted to help, but I couldn't; 'Why don't you come?' — 'I'd love to'.", hi: "**कमरा चार — infinitive-ellipsis**: 'to' के बाद पूरा क्रिया-समूह गिरता है — I wanted to help, but I couldn't; 'I'd love to'।" },
            { bn: "**ঘর পাঁচ — উত্তর-ellipsis**: উত্তর প্রশ্নের ছায়া মাত্র — 'Who took my pen?' — 'Rahim' / 'Rahim did'।", en: "**Room five — answer ellipsis**: the answer is a shadow of the question — 'Who took my pen?' — 'Rahim' / 'Rahim did'.", hi: "**कमरा पाँच — उत्तर-ellipsis**: उत्तर प्रश्न की छाया भर — 'Who took my pen?' — 'Rahim' / 'Rahim did'।" },
            { bn: "প্রতিটা ঘরের নিয়ম এক — বাদ যাওয়া অংশ কি হুবহু আগের clause-এ আছে? থাকলে বাদ দিন; না থাকলে substitution-এর পালা।", en: "The rule of every room is one — are the dropped words present, word for word, in the previous clause? If yes, drop; if no, it is time for substitution.", hi: "हर कमरे का नियम एक — गिरे शब्द पिछले clause में हूबहू हैं? हाँ तो हटाएँ; नहीं तो substitution की बारी।" },
          ],
          examples: [
            {
              wrong: "He arrived more early than what was expected.",
              right: "He arrived earlier than expected.",
              note: {
                bn: "than expected — পুরো [he was] expected চাপা পড়ে; 'more early' নয়, earlier; 'than what' বাংলা-ভঙ্গি।",
                en: "'Than expected' swallows the whole [he was] expected; not 'more early' but 'earlier'; 'than what' is a Bengali-transfer tic.",
                hi: "'than expected' पूरा [he was] expected निगल जाता है; 'more early' नहीं, 'earlier'; 'than what' बांग्ला-स्थानांतरण की आदत है।",
              },
            },
            {
              wrong: "While I was in Dhaka, I visited Lalbagh, and while I was in Sonargaon, I visited the museum.",
              right: "While in Dhaka, I visited Lalbagh; while in Sonargaon, the museum.",
              note: {
                bn: "while + জায়গা মাত্রই clause ছোট হয়ে যায় ([I was] বাদ); দ্বিতীয়টায় visited-ও gapping-এ বাদ।",
                en: "'While' + place alone shrinks the clause ([I was] dropped); in the second, even 'visited' drops by gapping.",
                hi: "'while' + स्थान भर से उपवाक्य सिकुड़ जाता है ([I was] गया); दूसरे में 'visited' भी gapping से गिरती है।",
              },
            },
            {
              wrong: "I want to go, but I am not able to go.",
              right: "I want to go, but I'm not able to.",
              note: {
                bn: "to-র পরে go বাদ — infinitive-ellipsis; ব্রিটিশ ইংরেজিতে to থাকে, মার্কিন ইংরেজিতে মাঝে মাঝে to-ও ঝরে যায়।",
                en: "'Go' drops after 'to' — infinitive ellipsis; British English keeps the 'to', American English sometimes drops even that.",
                hi: "'to' के बाद 'go' गिरता है — infinitive-ellipsis; ब्रिटिश अंग्रेज़ी में 'to' रहता है, अमेरिकी में कभी-कभी वह भी गिरता है।",
              },
            },
            {
              wrong: "A: Who broke the window? B: Rahim broke the window.",
              right: "A: Who broke the window? B: Rahim did.",
              note: {
                bn: "উত্তরে subject + did — ক্রিয়া-গুচ্ছের substitute; পুরো clause ফেরত দিলে রোবটিক শোনায়।",
                en: "In the answer, subject + 'did' — the verb-phrase substitute; returning the full clause sounds robotic.",
                hi: "उत्तर में कर्ता + 'did' — क्रिया-समूह का प्रतिनिधि; पूरा उपवाक्य लौटाना रोबॉटिक लगता है।",
              },
            },
            {
              wrong: "When you are ready, we will start, and if you are not ready, we will wait.",
              right: "When you're ready, we'll start; if not, we'll wait.",
              note: {
                bn: "if not — নেতিবাচক শর্তের সবচেয়ে ছোট রূপ; পুরো clause-এর পরিবর্তে।",
                en: "'If not' — the smallest form of a negative condition, instead of the whole clause.",
                hi: "'if not' — नकारात्मक शर्त का सबसे छोटा रूप, पूरे उपवाक्य के बदले।",
              },
            },
          ],
        },
        /* ── 3. Signals: safe omission ── */
        {
          heading: {
            bn: "🚦 আভাস: কখন বাদ দেওয়া নিরাপদ, কখন বিপদ",
            en: "🚦 Signals: when omission is safe and when it is a hazard",
            hi: "🚦 संकेत: हटाना कब सुरक्षित, कब ख़तरा",
          },
          lead: {
            bn: "দুটো প্রশ্নই সিদ্ধান্ত দেয় — recovery test আর 'বাদ যাচ্ছে কী?'।",
            en: "Two questions settle it — the recovery test, and 'what is dropping?'.",
            hi: "दो प्रश्न फ़ैसला करते हैं — recovery test और 'क्या गिर रहा है?'।",
          },
          formula: {
            bn: "বাংলা কর্তা লুকায় · ইংরেজি ক্রিয়া-গুচ্ছ লুকায়",
            en: "Bengali hides the subject · English hides the verb phrase",
            hi: "बांग्ला कर्ता छुपाता है · अंग्रेज़ी क्रिया-समूह छुपाती है",
          },
          points: [
            { bn: "**প্রশ্ন এক — recovery test**: বাদ যাওয়া শব্দগুলো কি ঠিক আশপাশের clause-এ হুবহু আছে? 'She can sing and dance' — can আছে আগেই, তাই নিরাপদ।", en: "**Question one — the recovery test**: are the dropped words present, word for word, in the neighbouring clause? 'She can sing and dance' — 'can' is there before, so it is safe.", hi: "**प्रश्न एक — recovery test**: गिरे शब्द पास के clause में हूबहू हैं? 'She can sing and dance' — 'can' पहले है, सुरक्षित।" },
            { bn: "'I like tea and my brother does too' — এখানে **does না বললে ভুল**: likes হুবহু বাদ দিলে দ্বিতীয় clause-এ কোনো ক্রিয়াই থাকে না, তাই substitution দরকার।", en: "'I like tea and my brother does too' — here **'does' is compulsory**: simply dropping 'likes' leaves the second clause with no verb at all, so substitution is needed.", hi: "'I like tea and my brother does too' — यहाँ **'does' अनिवार्य**: 'likes' गिराते ही दूसरे clause में कोई क्रिया नहीं रहती, इसलिए substitution चाहिए।" },
            { bn: "**প্রশ্ন দুই — বাদ যাচ্ছে কী?** ইংরেজিতে বাদ যেতে পারে: ক্রিয়া-গুচ্ছ, auxiliary, adjective, object, পুরো clause।", en: "**Question two — what is dropping?** In English, verb phrases, auxiliaries, adjectives, objects and whole clauses may drop.", hi: "**प्रश्न दो — क्या गिरता है?** अंग्रेज़ी में क्रिया-समूह, auxiliary, विशेषण, कर्म और पूरे clause गिर सकते हैं।" },
            { bn: "**বাদ যেতে পারে না**: কর্তা-সর্বনাম, dummy it/there, নতুন তথ্য — একমাত্র imperatives-এ ('Sit down') কর্তা থাকেই না।", en: "**What may not drop**: subject pronouns, dummy it/there, new information — only imperatives ('Sit down') lack a subject from birth.", hi: "**जो गिर नहीं सकते**: कर्ता-सर्वनाम, dummy it/there, नई जानकारी — केवल imperatives ('Sit down') में कर्ता जन्म से नहीं होता।" },
            { bn: "বাংলা-ভঙ্গির চেনা বিপদ — 'Yesterday went to market', 'Is fine', 'Will come tomorrow': কর্তা-বাদ বাংলার pro-drop, ইংরেজির ellipsis নয়; এগুলো অসম্পূর্ণ বাক্য।", en: "The familiar Bengali-transfer danger — 'Yesterday went to market', 'Is fine', 'Will come tomorrow': dropping the subject is Bengali pro-drop, not English ellipsis; these are incomplete sentences.", hi: "बांग्ला-स्थानांतरण का जाना-पहचाना ख़तरा — 'Yesterday went to market', 'Is fine': कर्ता गिराना बांग्ला pro-drop है, अंग्रेज़ी ellipsis नहीं; ये अधूरे वाक्य।" },
          ],
          examples: [
            {
              wrong: "Yesterday went to the market and bought fish.",
              right: "Yesterday I went to the market and bought some fish.",
              note: {
                bn: "কর্তা I বাদ দেওয়া যায় না — এটা বাংলা pro-drop-এর প্রভাব, ellipsis নয়।",
                en: "The subject 'I' cannot drop — this is Bengali pro-drop at work, not ellipsis.",
                hi: "कर्ता 'I' नहीं गिर सकता — यह बांग्ला pro-drop का असर है, ellipsis नहीं।",
              },
            },
            {
              wrong: "Is raining heavily today.",
              right: "It's raining heavily today.",
              note: {
                bn: "weather-it ও কর্তা — dummy হলেও অপরিহার্য; 'Is fine' → 'It's fine'।",
                en: "Weather-'it' is also a subject — dummy or not, it is essential; 'Is fine' → 'It's fine'.",
                hi: "मौसम का 'it' भी कर्ता है — dummy होकर भी अनिवार्य; 'Is fine' → 'It's fine'।",
              },
            },
            {
              wrong: "She likes coffee and likes tea too.",
              right: "She likes coffee and tea too.",
              note: {
                bn: "কর্তা এক হলে দ্বিতীয় clause না বানিয়ে তালিকা করুন; ক্রিয়া রাখলে কর্তাও রাখতে হয়।",
                en: "With one subject, make a list instead of a second clause; if you keep the verb, you must keep the subject too.",
                hi: "एक ही कर्ता हो तो दूसरा उपवाक्य न बनाकर सूची बनाएँ; क्रिया रखेंगे तो कर्ता भी रखना होगा।",
              },
            },
            {
              wrong: "My brother is a doctor and my sister is a teacher and my father is a farmer.",
              right: "My brother is a doctor, my sister a teacher and my father a farmer.",
              note: {
                bn: "gapping — মাঝের is-গুলো বাদ; এই ছন্দ লেখায় সাহিত্যিক, কথায় is রাখলেও ভুল নয়।",
                en: "Gapping — the middle 'is' forms drop; this rhythm is literary in writing, and keeping 'is' in speech is not wrong either.",
                hi: "gapping — बीच के 'is' गिरते हैं; यह लय लेखन में साहित्यिक है, बोलचाल में 'is' रखना भी गलत नहीं।",
              },
            },
          ],
        },
        /* ── 4. The magic of do ── */
        {
          heading: {
            bn: "🔁 do-র জাদু: ক্রিয়া-গুচ্ছের substitute ও শর্ট আনসার",
            en: "🔁 The magic of do: verb-phrase substitute and short answers",
            hi: "🔁 do का जादू: क्रिया-समूह का प्रतिनिधि और छोटे उत्तर",
          },
          lead: {
            bn: "ellipsis অসম্ভব হলে do/does/did-ই পুরো ক্রিয়া-গুচ্ছের প্রতিনিধি।",
            en: "When ellipsis is impossible, do/does/did stand in for the whole verb phrase.",
            hi: "ellipsis असंभव हो तो do/does/did ही पूरे क्रिया-समूह के प्रतिनिधि।",
          },
          formula: {
            bn: "শর্ট আনসার = subject + auxiliary — Yes, I do · No, they didn't",
            en: "Short answer = subject + auxiliary — Yes, I do · No, they didn't",
            hi: "छोटा उत्तर = कर्ता + auxiliary — Yes, I do · No, they didn't",
          },
          points: [
            { bn: "ellipsis সম্ভব না হলে do/does/did হাতের কাছে দাঁড়িয়ে — **এরা পুরো ক্রিয়া-গুচ্ছের প্রতিনিধি**।", en: "When ellipsis is impossible, do/does/did stand ready — **they represent the whole verb phrase**.", hi: "ellipsis असंभव हो तो do/does/did तैयार खड़े रहते हैं — **ये पूरे क्रिया-समूह के प्रतिनिधि**।" },
            { bn: "**প্রয়োগ এক — শর্ট আনসার**: 'Do you play chess?' — 'Yes, I do' (play ফেরত নয়); 'Did they call?' — 'No, they didn't'।", en: "**Use one — short answers**: 'Do you play chess?' — 'Yes, I do' (no 'play'); 'Did they call?' — 'No, they didn't'.", hi: "**प्रयोग एक — छोटे उत्तर**: 'Do you play chess?' — 'Yes, I do' ('play' नहीं); 'Did they call?' — 'No, they didn't'।" },
            { bn: "**প্রয়োগ দুই — তুলনা ও সম্মতি**: I like biryani and my brother does too; He doesn't drive, but I do।", en: "**Use two — comparison and agreement**: I like biryani and my brother does too; He doesn't drive, but I do.", hi: "**प्रयोग दो — तुलना और सहमति**: I like biryani and my brother does too; He doesn't drive, but I do।" },
            { bn: "**So do I / Neither do I** — মনে রাখুন, so-র পরে inversion (So do I, So has he); নেতিবাচকে neither/nor।", en: "**So do I / Neither do I** — remember, 'so' takes inversion (So do I, So has he); negatives take neither/nor.", hi: "**So do I / Neither do I** — स्मरण रहे, 'so' के बाद inversion (So do I, So has he); नकारात्मक में neither/nor।" },
            { bn: "**প্রয়োগ তিন — formal do so / do it**: He was asked to sign the form, and he did so immediately — কাগজে-কলমে আনুষ্ঠানিক; কথায় did it।", en: "**Use three — formal do so / do it**: He was asked to sign the form, and he did so immediately — paper-perfect; in speech, did it.", hi: "**प्रयोग तीन — औपचारिक do so / do it**: He was asked to sign the form, and he did so immediately — काग़ज़ पर योग्य; बोलचाल में did it।" },
            { bn: "সূক্ষ্মতা — main verb হিসেবে do-এর সাথেও do আসে: 'Do you do yoga?' — 'Yes, I do'।", en: "A fine point — when 'do' itself is the main verb, 'do' still substitutes: 'Do you do yoga?' — 'Yes, I do'.", hi: "सूक्ष्म बात — 'do' स्वयं मुख्य क्रिया हो तब भी 'do' ही प्रतिनिधि: 'Do you do yoga?' — 'Yes, I do'।" },
            { bn: "অতীতে 'Yes, I did' — auxiliary-ই যথেষ্ট; ক্রিয়া ফেরত দিলে উত্তর মোটা ও পরীক্ষার মুখস্থ শোনায়।", en: "In the past, 'Yes, I did' — the auxiliary alone is enough; returning the full verb makes the answer bulky and exam-memorised.", hi: "भूतकाल में 'Yes, I did' — auxiliary अकेला पर्याप्त; पूरी क्रिया लौटाने से उत्तर भारी और रटा-रटाया लगता है।" },
          ],
          examples: [
            {
              wrong: "A: Do you play chess? B: Yes, I play.",
              right: "A: Do you play chess? B: Yes, I do.",
              note: {
                bn: "শর্ট আনসারে মূল ক্রিয়া ফেরত আসে না — do-ই substitute।",
                en: "In a short answer the main verb does not come back — 'do' is the substitute.",
                hi: "छोटे उत्तर में मुख्य क्रिया वापस नहीं आती — 'do' ही प्रतिनिधि है।",
              },
            },
            {
              wrong: "I like biryani and my brother likes too.",
              right: "I like biryani and my brother does too.",
              note: {
                bn: "likes-এর পরে কিছু না থাকলে does লাগবেই; 'likes too' অসম্পূর্ণ।",
                en: "If nothing follows 'likes', 'does' is compulsory; 'likes too' is incomplete.",
                hi: "'likes' के बाद कुछ न हो तो 'does' अनिवार्य; 'likes too' अधूरा है।",
              },
            },
            {
              wrong: "I have never been to Sylhet. — Me too.",
              right: "I have never been to Sylhet. — Me neither. / Neither have I.",
              note: {
                bn: "নেতিবাচক বাক্যের পরে me too নয় — me neither বা neither + inversion।",
                en: "After a negative sentence, not 'me too' — 'me neither' or 'neither' + inversion.",
                hi: "नकारात्मक वाक्य के बाद 'me too' नहीं — 'me neither' या 'neither' + inversion।",
              },
            },
            {
              wrong: "So I like it.",
              right: "So do I.",
              note: {
                bn: "so-এর পরে inversion বাধ্যতামূলক — So do I, So does she, So has he।",
                en: "After 'so', inversion is compulsory — So do I, So does she, So has he.",
                hi: "'so' के बाद inversion अनिवार्य — So do I, So does she, So has he।",
              },
            },
            {
              wrong: "The manager asked him to submit the file, and he submitted so.",
              right: "The manager asked him to submit the file, and he did so immediately.",
              note: {
                bn: "do so — substitute + উল্লিখিত কাজ; formal লেখায় মানানসই, কথায় did it।",
                en: "'Do so' — the substitute plus the mentioned action; right for formal writing, 'did it' for speech.",
                hi: "'do so' — प्रतिनिधि + उल्लिखित कार्य; औपचारिक लेखन के लिए ठीक, बोलचाल में 'did it'।",
              },
            },
          ],
        },
        /* ── 5. one/ones and so/not ── */
        {
          heading: {
            bn: "🧩 one/ones আর so/not: বিশেষ্য ও ভাবের substitute",
            en: "🧩 one/ones and so/not: substitutes for nouns and ideas",
            hi: "🧩 one/ones और so/not: संज्ञा और भाव के प्रतिनिधि",
          },
          lead: {
            bn: "বিশেষ্যের বদলি one/ones, ভাবের বদলি so/not — আর one বনাম it-র পরীক্ষা।",
            en: "one/ones stand in for nouns, so/not for ideas — plus the one vs it test.",
            hi: "संज्ञा के बदली one/ones, भाव के बदली so/not — और one बनाम it परीक्षण।",
          },
          formula: {
            bn: "one = একই জাতের অন্যটা · it = হুবহু সেটাই · so = হ্যাঁ-ধারণা · not = না-ধারণা",
            en: "one = another of the same kind · it = that very one · so = the yes-idea · not = the no-idea",
            hi: "one = उसी जाति का दूसरा · it = वही वस्तु · so = हाँ-भाव · not = ना-भाव",
          },
          points: [
            { bn: "বিশেষ্যের substitute **one/ones** — একই জাতের অন্য একটা বোঝায়: 'Which shirt?' — 'The red one'; 'These cups are cracked. Bring two new ones'।", en: "For nouns the substitute is **one/ones** — a different one of the same kind: 'Which shirt?' — 'The red one'; 'These cups are cracked. Bring two new ones'.", hi: "संज्ञा के प्रतिनिधि **one/ones** — उसी जाति का दूसरा: 'Which shirt?' — 'The red one'; 'These cups are cracked. Bring two new ones'।" },
            { bn: "one-এর আগে সাধারণত a/an/the/this/that/adjective থাকে; কিন্তু possessive-এর পরে one ঝরে যায় — 'my one' নয়, mine; 'your one' নয়, yours।", en: "'One' usually follows a/an/the/this/that or an adjective; but after possessives it drops — not 'my one' but mine, not 'your one' but yours.", hi: "'one' प्रायः a/an/the/this/that या विशेषण के बाद आता है; पर possessive के बाद गिरता है — 'my one' नहीं, mine; 'your one' नहीं, yours।" },
            { bn: "সবচেয়ে পরীক্ষিত পার্থক্য — **one বনাম it**: one = একই জাতের অন্যটা; it = সেই একটাই।", en: "The most examined contrast — **one vs it**: 'one' = another item of the same kind; 'it' = that very item.", hi: "सबसे परखा अंतर — **one बनाम it**: one = उसी जाति का दूसरा; it = वही वस्तु।" },
            { bn: "'Where's my pen?' — 'You're writing with it' (সেই কলমটাই), কিন্তু 'I lost my pen, so I bought one' (নতুন একটা)।", en: "'Where's my pen?' — 'You're writing with it' (that very pen), but 'I lost my pen, so I bought one' (a new one).", hi: "'Where's my pen?' — 'You're writing with it' (वही कलम), पर 'I lost my pen, so I bought one' (नई)।" },
            { bn: "ভাবের substitute **so/not** — think, believe, hope, expect, suppose, guess, seem, appear, afraid-এর পরে বসে: 'Will it rain?' — 'I think so'; 'I hope not'; 'I'm afraid so'; 'It seems so'।", en: "For ideas the substitutes are **so/not** — after think, believe, hope, expect, suppose, guess, seem, appear, afraid: 'Will it rain?' — 'I think so'; 'I hope not'; 'I'm afraid so'; 'It seems so'.", hi: "भाव के प्रतिनिधि **so/not** — think, believe, hope, expect, suppose, guess, seem, appear, afraid के बाद: 'Will it rain?' — 'I think so'; 'I hope not'; 'I'm afraid so'; 'It seems so'।" },
            { bn: "'I don't think so' — I think not-এর চেয়ে প্রচলিত; আর 'say so'-ও আছে: 'If he is lying, say so to his face'।", en: "'I don't think so' is more common than 'I think not'; and there is 'say so' — 'If he is lying, say so to his face'.", hi: "'I don't think so' — 'I think not' से अधिक प्रचलित; और 'say so' भी है: 'If he is lying, say so to his face'।" },
          ],
          examples: [
            {
              wrong: "Which bag do you want? — I want green.",
              right: "Which bag do you want? — The green one.",
              note: {
                bn: "বিশেষণ একা বিশেষ্যের কাজ করে না — one দরকার।",
                en: "An adjective cannot work as a noun alone — 'one' is needed.",
                hi: "विशेषण अकेला संज्ञा का काम नहीं कर सकता — 'one' चाहिए।",
              },
            },
            {
              wrong: "Where is my pen? — You are writing with one.",
              right: "Where is my pen? — You are writing with it.",
              note: {
                bn: "one = একই জাতের অন্যটা; সেই নির্দিষ্ট কলম = it।",
                en: "'One' = another of the same kind; that very pen = 'it'.",
                hi: "'one' = उसी जाति का दूसरा; वही निश्चित कलम = 'it'।",
              },
            },
            {
              wrong: "I lost my umbrella, so I borrowed it from my cousin.",
              right: "I lost my umbrella, so I borrowed one from my cousin.",
              note: {
                bn: "নতুন/অন্য ছাতা — one; 'borrowed it' বললে নিজের হারানো ছাতাটাই ধার নেওয়ার অর্থ দাঁড়ায়!",
                en: "A new/different umbrella — 'one'; 'borrowed it' would mean borrowing your own lost umbrella!",
                hi: "नई/दूसरी छाता — 'one'; 'borrowed it' कहने का अर्थ होता अपनी ही खोई छाता उधार लेना!",
              },
            },
            {
              wrong: "Will the results come today? — I hope so not.",
              right: "Will the results come today? — I hope not.",
              note: {
                bn: "নেতিবাচক substitute শুধু not — hope not, afraid not, suppose not; positive-তে so।",
                en: "The negative substitute is just 'not' — hope not, afraid not, suppose not; 'so' for the positive.",
                hi: "नकारात्मक प्रतिनिधि केवल 'not' — hope not, afraid not, suppose not; positive में 'so'।",
              },
            },
            {
              wrong: "It will rain? — I think.",
              right: "It will rain? — I think so.",
              note: {
                bn: "so ছাড়া think শেষ হলে অর্থ অসম্পূর্ণ — so-ই আগের ভাবটা বয়ে আনে।",
                en: "'Think' without 'so' leaves the meaning hanging — 'so' carries the earlier idea.",
                hi: "'so' के बिना 'think' अधूरा रह जाता है — 'so' ही पिछला भाव ले आता है।",
              },
            },
          ],
        },
        /* ── 6. Speech rhythm and written elegance ── */
        {
          heading: {
            bn: "🎭 কথার ছন্দ আর লেখার সৌন্দর্য: এগিয়ে-পিছিয়ে",
            en: "🎭 Speech rhythm and written elegance: further devices",
            hi: "🎭 बोलचाल की लय और लेखन की शोभा: और औज़ार",
          },
          lead: {
            bn: "ইকো-প্রশ্নের ছন্দ থেকে essay-র that of — এগিয়ে-পিছিয়ের হাতিয়ার।",
            en: "From the rhythm of echo questions to essay-grade that of — the further devices.",
            hi: "echo-प्रश्नों की लय से निबंध-स्तर के that of तक — आगे के औज़ार।",
          },
          points: [
            { bn: "**ইকো-প্রশ্ন** — 'I'm moving to Canada.' — 'Are you?'; 'He failed the test.' — 'Did he?' — পুরো clause-এর দুই-শব্দের ছায়া।", en: "**Echo questions** — 'I'm moving to Canada.' — 'Are you?'; 'He failed the test.' — 'Did he?' — a two-word shadow of a full clause.", hi: "**echo-प्रश्न** — 'I'm moving to Canada.' — 'Are you?'; 'He failed the test.' — 'Did he?' — पूरे उपवाक्य की दो-शब्दों की छाया।" },
            { bn: "'I can't come tomorrow.' — 'Why not?' — প্রতিটাই native-দের ছন্দ; যত ছোট follow-up, কথা তত জীবন্ত।", en: "'I can't come tomorrow.' — 'Why not?' — this is the native rhythm; the smaller the follow-up, the livelier the talk.", hi: "'I can't come tomorrow.' — 'Why not?' — यही native लय है; follow-up जितना छोटा, बातचीत उतनी जीवंत।" },
            { bn: "**the former... the latter** — দুই বস্তুর প্রথম/দ্বিতীয়: Tea and coffee both sell well here, but the latter brings more profit।", en: "**The former / the latter** — the first/second of two: Tea and coffee both sell well here, but the latter brings more profit.", hi: "**the former / the latter** — दो में से पहला/दूसरा: Tea and coffee both sell well here, but the latter brings more profit।" },
            { bn: "**that of / those of** — তুলনায় পুনরাবৃত্ত noun বাঁচায়: The climate of Dhaka is warmer than that of London।", en: "**That of / those of** — saves a repeated noun in comparisons: The climate of Dhaka is warmer than that of London.", hi: "**that of / those of** — तुलना में दोहराई संज्ञा बचाते हैं: The climate of Dhaka is warmer than that of London।" },
            { bn: "**such + noun** — We faced delays; such delays cost us clients।", en: "**Such + noun** — We faced delays; such delays cost us clients.", hi: "**such + संज्ञा** — We faced delays; such delays cost us clients।" },
            { bn: "**this/these + সারাংশ-শব্দ** — The government raised taxes. This move angered farmers — move-ই আগের পুরো ঘটনার substitute।", en: "**This/these + a summary noun** — The government raised taxes. This move angered farmers — 'move' substitutes for the whole event.", hi: "**this/these + सार-संज्ञा** — The government raised taxes. This move angered farmers — 'move' ही पूरी घटना का प्रतिनिधि।" },
            { bn: "দীর্ঘ নাম ফেরত না এনে বদলে বলাও substitution-এর ভাই — Professor Rahman... The professor argued...।", en: "Varying a long name instead of dragging it back is substitution's cousin too — Professor Rahman... The professor argued...", hi: "लंबा नाम लौटाने की बजाय बदल देना भी substitution का चचेरा भाई — Professor Rahman... The professor argued..." },
          ],
          examples: [
            {
              wrong: "The climate of Dhaka is warmer than London.",
              right: "The climate of Dhaka is warmer than that of London.",
              note: {
                bn: "তুলনা হচ্ছে climate-এর সাথে climate-এর — London-এর climate নয়; that of দিয়ে মেলান।",
                en: "The comparison is climate-with-climate, not with London itself; match them with 'that of'.",
                hi: "तुलना climate से climate की है, London से नहीं; 'that of' से मिलाएँ।",
              },
            },
            {
              wrong: "Between a laptop and a tablet, I bought the later.",
              right: "Between a laptop and a tablet, I bought the latter.",
              note: {
                bn: "latter = দ্বিতীয়টা; later = পরে — বানানে ফারাক, অর্থে আকাশ-পাতাল।",
                en: "'Latter' = the second one; 'later' = afterwards — one letter apart, worlds apart in meaning.",
                hi: "'latter' = दूसरा; 'later' = बाद में — वर्तनी में एक अक्षर, अर्थ में आसमान-ज़मीन।",
              },
            },
            {
              wrong: "He apologised, which I appreciated it.",
              right: "He apologised, which I appreciated.",
              note: {
                bn: "relative which নিজেই object-এর substitute — ভেতরে it আর দিলে দ্বিগুণ হয়ে যায়।",
                en: "The relative 'which' is itself the object's substitute — adding 'it' inside doubles it up.",
                hi: "relative 'which' स्वयं कर्म का प्रतिनिधि है — भीतर 'it' जोड़ने से दोहरा हो जाता है।",
              },
            },
            {
              wrong: "A: I can't come tomorrow. B: Why you can't come tomorrow?",
              right: "A: I can't come tomorrow. B: Why not?",
              note: {
                bn: "follow-up প্রশ্ন যত ছোট, কথা তত জীবন্ত।",
                en: "The smaller the follow-up question, the livelier the conversation.",
                hi: "follow-up प्रश्न जितना छोटा, बातचीत उतनी जीवंत।",
              },
            },
            {
              wrong: "The exam was difficult, and the interview was difficult too.",
              right: "The exam was difficult, and so was the interview.",
              note: {
                bn: "so + was — adjective-সহ পুরো predicate-এর substitute, inversion-সহ।",
                en: "'So' + 'was' — a substitute for the whole predicate including the adjective, with inversion.",
                hi: "'so' + 'was' — विशेषण समेत पूरे predicate का प्रतिनिधि, inversion सहित।",
              },
            },
          ],
        },
        /* ── 7. Subtle errors ── */
        {
          heading: {
            bn: "⚠️ উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "⚠️ Subtle errors of advanced learners",
            hi: "⚠️ उच्च स्तर के शिक्षार्थियों की सूक्ष्म चूकें",
          },
          lead: {
            bn: "C1-দেরও ধরে ফেলা পাঁচটা পা — বিশেষ করে over-answering আর me too।",
            en: "Five stumbles that catch even C1 learners — especially over-answering and me too.",
            hi: "C1 को भी पकड़ने वाली पाँच ठोकर — विशेषकर over-answering और me too।",
          },
          points: [
            { bn: "**পা এক — over-answering**: প্রশ্নের পুরো ছায়া ফেরত দেওয়া — 'Yes, I have eaten my dinner' নয়, 'Yes, I have'; মুখস্থ-পরীক্ষার অভ্যাস কথায় মেশে না।", en: "**Stumble one — over-answering**: returning the full shadow of the question — 'Yes, I have', not 'Yes, I have eaten my dinner'; the exam-memorised habit does not belong in speech.", hi: "**ठोकर एक — over-answering**: प्रश्न की पूरी छाया लौटाना — 'Yes, I have eaten my dinner' नहीं, 'Yes, I have'; रटने की आदत बोलचाल में नहीं घुसती।" },
            { bn: "**পা দুই — নেতিবাচক সম্মতিতে me too**: 'I'm not hungry' — 'Me too' ভুল; বলুন me neither / Neither am I।", en: "**Stumble two — me too after negatives**: 'I'm not hungry' — 'Me too' is wrong; say me neither / Neither am I.", hi: "**ठोकर दो — नकारात्मक के बाद me too**: 'I'm not hungry' — 'Me too' ग़लत; कहें me neither / Neither am I।" },
            { bn: "**পা তিন — one কে uncountable-এর সাথে চালানো**: 'Give me one water', 'I need one information' — water uncountable (some water), information uncountable (a piece of information)।", en: "**Stumble three — one with uncountables**: 'Give me one water', 'I need one information' — water takes 'some water', information takes 'a piece of information'.", hi: "**ठोकर तीन — uncountable के साथ one**: 'Give me one water', 'I need one information' — water के लिए 'some water', information के लिए 'a piece of information'।" },
            { bn: "'One tea, please' দোকানে চলে — তখন one = এক কাপ/প্যাকেট।", en: "'One tea, please' works in a shop — there 'one' means one cup/packet.", hi: "दुकान पर 'One tea, please' चलता है — वहाँ one = एक कप/पैकेट।" },
            { bn: "**পা চার — than-এর পরে what**: 'better than what I expected' — বাংলা 'যা আমি ভেবেছিলাম'-এর সরাসরি অনুবাদ; ইংরেজিতে than I expected।", en: "**Stumble four — what after than**: 'better than what I expected' — a direct translation of the Bengali 'যা আমি ভেবেছিলাম'; English says than I expected.", hi: "**ठोकर चार — than के बाद what**: 'better than what I expected' — बांग्ला का सीधा अनुवाद; अंग्रेज़ी कहती है than I expected।" },
            { bn: "**পা পাঁচ — essay-তে পুনরাবৃত্তি**: 'the increasing number of vehicles' পাঁচবার — এর বদলে this trend, such growth, the latter, that of, নয়তো প্রতিশব্দ; examiner-এর চোখে repetition মানেই দুর্বল fluency।", en: "**Stumble five — repetition in essays**: 'the increasing number of vehicles' five times — switch to this trend, such growth, the latter, that of, or a synonym; to an examiner, repetition reads as weak fluency.", hi: "**ठोकर पाँच — निबंध में पुनरावृत्ति**: 'the increasing number of vehicles' पाँच बार — इसे this trend, such growth, the latter, that of या समानार्थी से बदलें; examiner की नज़र में पुनरावृत्ति = कमज़ोर fluency।" },
          ],
          examples: [
            {
              wrong: "A: Have you had dinner? B: Yes, I have had my dinner.",
              right: "A: Have you had dinner? B: Yes, I have.",
              note: {
                bn: "পুরো ছায়া ফেরত দেওয়া over-answering — শর্ট আনসারই স্বাভাবিক।",
                en: "Returning the full shadow is over-answering — the short answer is what sounds natural.",
                hi: "पूरी छाया लौटाना over-answering है — छोटा उत्तर ही स्वाभाविक है।",
              },
            },
            {
              wrong: "I'm not hungry. — Me too.",
              right: "I'm not hungry. — Me neither. / I'm not either.",
              note: {
                bn: "নেতিবাচক-সম্মতিতে too নয় — neither/either।",
                en: "Agreeing with a negative takes neither/either, not 'too'.",
                hi: "नकारात्मक से सहमति में neither/either, 'too' नहीं।",
              },
            },
            {
              wrong: "Please give me one information about the course.",
              right: "Please give me some information about the course.",
              note: {
                bn: "information uncountable — one নয়; গোনার দরকার হলে a piece of information।",
                en: "'Information' is uncountable — not 'one'; if you must count, 'a piece of information'.",
                hi: "'information' uncountable है — 'one' नहीं; गिनना हो तो 'a piece of information'।",
              },
            },
            {
              wrong: "The results were better than what we expected.",
              right: "The results were better than we expected.",
              note: {
                bn: "than-এর পরে what বাংলা-ভঙ্গি; সরাসরি subject + verb।",
                en: "'What' after 'than' is a Bengali-transfer tic; go straight to subject + verb.",
                hi: "'than' के बाद 'what' बांग्ला-स्थानांतरण की आदत है; सीधे कर्ता + क्रिया।",
              },
            },
            {
              wrong: "In my essay, the phrase 'the increasing number of vehicles' came five times, which made the paragraph boring.",
              right: "In my essay I varied the phrase: 'the growing number of vehicles', 'this trend', 'such growth' — no repetition.",
              note: {
                bn: "substitution-শব্দ (this trend, such growth) পুনরাবৃত্তির কাঁটা বাঁচায় — examiner-এর চোখে সুর বদলানো সাহসী লেখকের লক্ষণ।",
                en: "Substitution words (this trend, such growth) save you from the repetition trap — varying the music reads as a confident writer.",
                hi: "substitution-शब्द (this trend, such growth) पुनरावृत्ति के जाल से बचाते हैं — धुन बदलना आत्मविश्वासी लेखक की पहचान है।",
              },
            },
          ],
        },
        /* ── 8. See it in a short dialogue ── */
        {
          heading: {
            bn: "📖 ছোট কথোপকথনে দেখা যাক",
            en: "📖 See it in a short dialogue",
            hi: "📖 छोटे संवाद में देखें",
          },
          lead: {
            bn: "আট লাইনের সংলাপ — ellipsis আর substitution-এর সব ঘর একসাথে।",
            en: "An eight-line dialogue — every room of ellipsis and substitution at once.",
            hi: "आठ पंक्तियों का संवाद — ellipsis और substitution के सारे कमरे एक साथ।",
          },
          points: [
            { bn: "নিচের সংলাপে ellipsis আর substitution-এর সব ঘর একসাথে — পড়ুন, তারপর সহপাঠীর সাথে অভিনয় করে দেখুন।", en: "The dialogue below uses every room of ellipsis and substitution at once — read it, then act it out with a partner.", hi: "नीचे के संवाद में ellipsis और substitution के सारे कमरे एक साथ — पढ़ें, फिर साथी से अभिनय करें।" },
            { bn: "'A: Are you coming to the match tomorrow? B: I'd love to, but I can't.'", en: "'A: Are you coming to the match tomorrow? B: I'd love to, but I can't.'", hi: "'A: Are you coming to the match tomorrow? B: I'd love to, but I can't.'" },
            { bn: "'A: Why not? B: My exam's on Monday, and my parents won't let me out until it's over.'", en: "'A: Why not? B: My exam's on Monday, and my parents won't let me out until it's over.'", hi: "'A: Why not? B: My exam's on Monday, and my parents won't let me out until it's over.'" },
            { bn: "'A: I see. If you finish early, call me — we might still catch the second half. B: Will do. A: Hope so!'", en: "'A: I see. If you finish early, call me — we might still catch the second half. B: Will do. A: Hope so!'", hi: "'A: I see. If you finish early, call me — we might still catch the second half. B: Will do. A: Hope so!'" },
            { bn: "'I'd love to, but I can't' — **to-র পরে পুরো infinitive বাদ**।", en: "'I'd love to, but I can't' — the whole infinitive after 'to' drops.", hi: "'I'd love to, but I can't' — 'to' के बाद पूरा infinitive गिरता है।" },
            { bn: "'Why not?' — **পুরো clause-এর দুই শব্দ**।", en: "'Why not?' — a full clause in two words.", hi: "'Why not?' — पूरा clause दो शब्दों में।" },
            { bn: "'Will do' — **ক্রিয়া-গুচ্ছের substitute**; প্রতিশ্রুতির মুখের ভঙ্গি।", en: "'Will do' — the verb-phrase substitute; a promise made with the mouth.", hi: "'Will do' — क्रिया-समूह का प्रतिनिधि; मुँह से किया वादा।" },
            { bn: "'Hope so' — **so = আগের প্রত্যাশা**।", en: "'Hope so' — 'so' carries the earlier expectation.", hi: "'Hope so' — 'so' पिछली आशा साथ लाता है।" },
          ],
          examples: [
            {
              wrong: "B: I'd love to come, but I can't come.",
              right: "B: I'd love to, but I can't.",
              note: {
                bn: "to-র পরে come দুইবার — কথার ছন্দ ভাঙে; প্রথম come-ই দ্বিতীয়টাকে বাদ দেয়।",
                en: "'Come' twice after 'to' breaks the spoken rhythm; the first 'come' banishes the second.",
                hi: "'to' के बाद 'come' दो बार — बोलचाल की लय टूटती है; पहली 'come' दूसरी को हटा देती है।",
              },
            },
            {
              wrong: "A: Will you call me? B: Yes, I will call you.",
              right: "A: Will you call me? B: Yes, I will. / Will do.",
              note: {
                bn: "প্রতিশ্রুতিতেও শর্ট রূপই স্বাভাবিক; Will do মুখের ইডিয়ম — লেখায় I'll do it।",
                en: "Even promises prefer the short form; 'Will do' is a spoken idiom — 'I'll do it' in writing.",
                hi: "वादे में भी छोटा रूप ही स्वाभाविक; 'Will do' मुँह का मुहावरा है — लेखन में 'I'll do it'।",
              },
            },
            {
              wrong: "A: Hope you will come. B: I hope so too, but I am not sure that I will be able to come.",
              right: "A: Hope you can come. B: I hope so — we'll see.",
              note: {
                bn: "'we'll see'-র মতো ছোট রূপই কথায় চলে; সন্দেহ প্রকাশে পুরো clause দরকার নেই।",
                en: "Small forms like 'we'll see' carry doubt in speech; no full clause is needed to hedge.",
                hi: "'we'll see' जैसे छोटे रूप बोलचाल में संदेह बताते हैं; बचाव के लिए पूरा उपवाक्य ज़रूरी नहीं।",
              },
            },
          ],
        },
        /* ── 9. At a glance: substitute table ── */
        {
          heading: {
            bn: "🧮 এক নজরে: substitute-সারণি ও সাত সূত্র",
            en: "🧮 At a glance: the substitute table and seven rules",
            hi: "🧮 एक नज़र में: substitute तालिका और सात सूत्र",
          },
          lead: {
            bn: "কোন substitute কীসের বদলি — সারণি আর সাত সূত্রে পুরো পাঠ।",
            en: "Which substitute stands for what — the whole lesson in one table and seven rules.",
            hi: "कौन-सा substitute किसका बदली — एक तालिका और सात सूत्रों में पूरा पाठ।",
          },
          table: {
            head: [
              { bn: "substitute", en: "Substitute", hi: "प्रतिनिधि" },
              { bn: "কীসের বদলি", en: "Stands for", hi: "किसका बदली" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [{ bn: "do / does / did", en: "do / does / did", hi: "do / does / did" }, { bn: "পুরো verb phrase", en: "the whole verb phrase", hi: "पूरा क्रिया-समूह" }, { bn: "Yes, I do", en: "Yes, I do", hi: "Yes, I do" }],
              [{ bn: "So do I / Neither do I", en: "So do I / Neither do I", hi: "So do I / Neither do I" }, { bn: "একই অভিমত (inversion-সহ)", en: "the same view (with inversion)", hi: "वही राय (inversion सहित)" }, { bn: "So do I; Neither do I", en: "So do I; Neither do I", hi: "So do I; Neither do I" }],
              [{ bn: "do so / do it", en: "do so / do it", hi: "do so / do it" }, { bn: "উল্লিখিত কাজ", en: "the mentioned action", hi: "उल्लिखित कार्य" }, { bn: "he did so immediately", en: "he did so immediately", hi: "he did so immediately" }],
              [{ bn: "one / ones", en: "one / ones", hi: "one / ones" }, { bn: "একই জাতের অন্য noun", en: "another noun of the same kind", hi: "उसी जाति का दूसरा" }, { bn: "the red one", en: "the red one", hi: "the red one" }],
              [{ bn: "it", en: "it", hi: "it" }, { bn: "হুবহু সেইটা", en: "that very one", hi: "हूबहू वही" }, { bn: "writing with it", en: "writing with it", hi: "writing with it" }],
              [{ bn: "so / not", en: "so / not", hi: "so / not" }, { bn: "আগের clause বা ভাব", en: "the earlier clause or idea", hi: "पिछला clause या भाव" }, { bn: "I think so; I hope not", en: "I think so; I hope not", hi: "I think so; I hope not" }],
              [{ bn: "that of / those of", en: "that of / those of", hi: "that of / those of" }, { bn: "তুলনার পুনরাবৃত্ত noun", en: "a repeated noun in comparisons", hi: "तुलना की दोहराई संज्ञा" }, { bn: "than that of London", en: "than that of London", hi: "than that of London" }],
              [{ bn: "the former / the latter", en: "the former / the latter", hi: "the former / the latter" }, { bn: "দুটোর প্রথম/দ্বিতীয়", en: "the first/second of two", hi: "दो में से पहला/दूसरा" }, { bn: "the latter brings more profit", en: "the latter brings more profit", hi: "the latter brings more profit" }],
            ],
          },
          points: [
            { bn: "তালিকায় পুনরাবৃত্ত **কর্তা + auxiliary** একবারই — বাকিরা ঝরে যায়।", en: "In lists, the repeated **subject + auxiliary** appears once — the rest falls away.", hi: "सूची में दोहराया **कर्ता + auxiliary** एक ही बार — बाकी गिर जाता है।" },
            { bn: "**শর্ট আনসার** = subject + auxiliary (Yes, I did)।", en: "**Short answer** = subject + auxiliary (Yes, I did).", hi: "**छोटा उत्तर** = कर्ता + auxiliary (Yes, I did)।" },
            { bn: "**So do I / Neither do I** — inversion-সহ সম্মতি।", en: "**So do I / Neither do I** — agreement with inversion.", hi: "**So do I / Neither do I** — inversion सहित सहमति।" },
            { bn: "**one বনাম it** — one = একই জাতের অন্যটা, it = সেটাই।", en: "**One vs it** — 'one' is another of the same kind, 'it' is that very one.", hi: "**one बनाम it** — one = उसी जाति का दूसरा, it = वही।" },
            { bn: "**so/not substitute** — think so / hope not।", en: "**So/not substitutes** — think so / hope not.", hi: "**so/not प्रतिनिधि** — think so / hope not।" },
            { bn: "**লেখার হাতিয়ার** — than that of, the latter।", en: "**Writing tools** — than that of, the latter.", hi: "**लेखन औज़ार** — than that of, the latter।" },
            { bn: "**মূল নিয়ম** — কর্তা বাদ নয়, ক্রিয়া-গুচ্ছই বাদ।", en: "**The cardinal rule** — drop the verb phrase, never the subject.", hi: "**मूल नियम** — कर्ता नहीं, क्रिया-समूह ही गिरता है।" },
          ],
          examples: [],
        },
      ],
      tips: [
        { bn: "শর্ট-আনসার ড্রিল: যেকোনো প্রশ্নের উত্তর প্রথম দুই শব্দে (Yes, I do / No, she didn't) — মুখস্থ ভঙ্গি ছাড়ুন।", en: "Short-answer drill: answer any question in the first two words (Yes, I do / No, she didn't) — break the memorised habit.", hi: "छोटे-उत्तर अभ्यास: किसी भी प्रश्न का उत्तर पहले दो शब्दों में (Yes, I do / No, she didn't) — रटने की आदत छोड़ें।" },
        { bn: "Me too নাকি Me neither — আগে দেখুন আগের বাক্য ধনাত্মক না ঋণাত্মক।", en: "Me too or Me neither — first check whether the previous sentence is positive or negative.", hi: "Me too या Me neither — पहले देखें पिछला वाक्य positive है या negative।" },
        { bn: "one বনাম it-এর পরীক্ষা: একই জাতের অন্যটা = one; হুবহু সেটা = it।", en: "The one vs it test: another of the same kind = one; that very one = it.", hi: "one बनाम it परीक्षण: उसी जाति का दूसरा = one; वही वस्तु = it।" },
        { bn: "So do I, So has he — so-র পরে inversion লিখে অভ্যাস করুন।", en: "So do I, So has he — practise writing the inversion after 'so'.", hi: "So do I, So has he — 'so' के बाद inversion लिखकर अभ्यास करें।" },
        { bn: "নোটে think so / hope not / afraid so-এর তালিকা রাখুন — কথায় প্রতিদিন লাগবে।", en: "Keep a list of think so / hope not / afraid so in your notebook — you will use it daily.", hi: "नोट में think so / hope not / afraid so की सूची रखें — रोज़ काम आएँगे।" },
        { bn: "Essay-তে একই noun phrase দুইবারের বেশি এলে this trend / such growth / the latter-এ বদলান।", en: "If the same noun phrase appears more than twice in an essay, switch to this trend / such growth / the latter.", hi: "निबंध में वही noun phrase दो बार से अधिक आए तो this trend / such growth / the latter पर जाएँ।" },
        { bn: "তুলনায় that of / those of — 'The climate of X is warmer than that of Y' ছাঁচ মুখস্থ।", en: "In comparisons use that of / those of — memorise the template 'The climate of X is warmer than that of Y'.", hi: "तुलना में that of / those of — 'The climate of X is warmer than that of Y' ढाँचा कंठस्थ करें।" },
        { bn: "বাংলা কর্তা লুকায়, ইংরেজি ক্রিয়া-গুচ্ছ লুকায় — নোটে বড় করে লিখে রাখুন।", en: "Bengali hides the subject; English hides the verb phrase — write it big on your note.", hi: "बांग्ला कर्ता छुपाता है, अंग्रेज़ी क्रिया-समूह — नोट पर बड़े अक्षरों में लिखें।" },
        { bn: "ইকো-প্রশ্ন শিখুন: 'Are you?' 'Did he?' 'Why not?' — দুই শব্দে আগ্রহ দেখানোর native ছন্দ।", en: "Learn echo questions: 'Are you?' 'Did he?' 'Why not?' — the native rhythm of showing interest in two words.", hi: "echo-प्रश्न सीखें: 'Are you?' 'Did he?' 'Why not?' — दो शब्दों में रुचि दिखाने की native लय।" },
      ],
      quiz: [
        {
          question: "A: Did you finish the report? B: Yes, ___.",
          options: ["I finished", "I did", "I do", "did I"],
          answer: 1,
          explanation: { bn: "শর্ট আনসার = subject + auxiliary; অতীত প্রশ্নের উত্তর Yes, I did — মূল ক্রিয়া ফেরত আসে না।", en: "Short answer = subject + auxiliary; for a past question, 'Yes, I did' — the main verb does not return.", hi: "छोटा उत्तर = कर्ता + auxiliary; भूतकाल के प्रश्न का उत्तर 'Yes, I did' — मुख्य क्रिया वापस नहीं आती।" },
        },
        {
          question: "I love cricket, and ___ does my father.",
          options: ["so", "also", "too", "as well"],
          answer: 0,
          explanation: { bn: "so + inversion (so does my father) — একই পছন্দের সম্মতি; also/too এই জায়গায় inversion-ছাঁচে বসে না।", en: "'So' + inversion (so does my father) expresses the same preference; also/too do not fit this inverted template.", hi: "'so' + inversion (so does my father) वही पसंद बताता है; also/too इस inverted ढाँचे में नहीं बैठते।" },
        },
        {
          question: "I haven't seen that film. — ___",
          options: ["Me too", "Me neither", "I also", "So do I"],
          answer: 1,
          explanation: { bn: "নেতিবাচক বাক্যের পরে সম্মতি me neither / Neither have I — me too শুধু ধনাত্মকে।", en: "After a negative, agreement is 'Me neither' / 'Neither have I'; 'me too' is only for positives.", hi: "नकारात्मक वाक्य के बाद सहमति 'Me neither' / 'Neither have I'; 'me too' केवल positive के लिए।" },
        },
        {
          question: "Which shirt do you want? — ___",
          options: ["I want red", "I want the red one", "I want one red", "I want a red"],
          answer: 1,
          explanation: { bn: "বিশেষণ একা বিশেষ্য হতে পারে না — the red one; one = লাল জাতের সেইটাই।", en: "An adjective alone cannot be a noun — 'the red one'; 'one' stands for that red shirt.", hi: "विशेषण अकेला संज्ञा नहीं बन सकता — 'the red one'; 'one' उसी लाल शर्ट के लिए।" },
        },
        {
          question: "Where is my charger? — You are using ___.",
          options: ["one", "it", "a one", "ones"],
          answer: 1,
          explanation: { bn: "সেই নির্দিষ্ট চার্জার = it; one বললে অন্য একটা চার্জার বোঝাত।", en: "That very charger = 'it'; 'one' would imply a different charger.", hi: "वही चार्जर = 'it'; 'one' कहते तो दूसरा चार्जर समझ आता।" },
        },
        {
          question: "Will the exam be hard? — I hope ___.",
          options: ["so not", "not", "no", "don't"],
          answer: 1,
          explanation: { bn: "নেতিবাচক substitute শুধু not — I hope not; ধনাত্মকে I hope so।", en: "The negative substitute is just 'not' — I hope not; the positive is I hope so.", hi: "नकारात्मक प्रतिनिधि केवल 'not' — I hope not; positive में I hope so।" },
        },
        {
          question: "The economy of Japan is stronger than ___ of Bangladesh.",
          options: ["that", "those", "it", "one"],
          answer: 0,
          explanation: { bn: "economy (singular) — that of; plural হলে those of; তুলনায় দুই economy মেলাতে হয়।", en: "'Economy' is singular — 'that of'; for a plural noun, 'those of'; the two economies must match in the comparison.", hi: "'economy' singular है — 'that of'; plural होता तो 'those of'; तुलना में दोनों economy मिलाना है।" },
        },
        {
          question: "Between tea and coffee, I prefer the ___.",
          options: ["later", "latter", "last", "latest"],
          answer: 1,
          explanation: { bn: "দুইটার মধ্যে দ্বিতীয়টা = the latter; later মানে পরে — বানানে গুলিয়ে ফেলবেন না।", en: "The second of two = 'the latter'; 'later' means afterwards — do not mix up the spellings.", hi: "दो में से दूसरा = 'the latter'; 'later' यानी बाद में — वर्तनी न गलाएँ।" },
        },
        {
          question: "He arrived earlier than ___.",
          options: ["what was expected", "expected", "it expected", "what expected"],
          answer: 1,
          explanation: { bn: "than expected — [he was] expected সব বাদ; 'than what' বাংলা-ভঙ্গি, ইংরেজিতে নেই।", en: "'Than expected' — the whole [he was] expected drops; 'than what' is a Bengali-transfer tic, absent in English.", hi: "'than expected' — पूरा [he was] expected गिर जाता है; 'than what' बांग्ला-स्थानांतरण है, अंग्रेज़ी में नहीं।" },
        },
      ],
    },
  },
];

export default SEED_GRAMMAR_V4_A3A;
