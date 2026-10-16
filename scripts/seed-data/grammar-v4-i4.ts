// ─── Grammar seeds v4: INTERMEDIATE learning-path anchors I4 (2 lessons) ───
// Task 10 — point-form roadmap upgrade. Source: scripts/seed-data/grammar-v3-i4.ts
// (v3 paragraph bodies → bullet points; roadmap + leads + formula boxes + tables added;
// title/intro/tips/examples/quiz copied EXACTLY; units 3 & 4 kept — learning-path anchors).
// Prepositions: place/time/transport table (in/on/at per dimension) + fixed-pair table.
// Conditionals: Type 0/1/2/3 + mixed each get their own section with a formula box,
// plus a types-comparison table in the overview section.
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_I4: SeedGrammarV4Entry[] = [
  /* ── 1. Prepositions (in/on/at) (unit 3 → sortOrder 2) ─────────────── */
  {
    topic: "Prepositions (in/on/at)",
    level: "intermediate",
    title: "Prepositions (in/on/at) (Intermediate)",
    unit: 3,
    sortOrder: 2,
    data: {
      title: {
        bn: "প্রিপজিশন in/on/at: জুটি বেঁধে শেখা (মধ্যম স্তর)",
        en: "Prepositions in/on/at: learning them as pairs (Intermediate)",
        hi: "प्रिपॉज़िशन in/on/at: जोड़े बनाकर सीखना (मध्यम स्तर)",
      },
      intro: {
        bn: "বিগিনার স্তরে in = ভেতরে, on = পৃষ্ঠে, at = বিন্দু — মোটামুটি চলে যায়। কিন্তু intermediate স্তরে দেওয়ালে বাজা শোনায় 'good in English', 'married with', 'depends of'-এর মতো বাক্য নয়, বরং নিজের বানানো যুক্তি: বাংলায় যেখানে প্রত্যয় (ঘরে, ঢাকায়) সব শব্দে একই রকম লেগে থাকে, ইংরেজি প্রিপজিশন শব্দভেদে বদলে যায়। এই পাঠে ঢোকার আগে বিগিনার স্তরের Prepositions পাঠের জায়গা-সময়-মূলক নিয়ম আর বিশেষণ-ক্রিয়ার মৌলিক চেনা-জানা পাকা থাকা দরকার। এখানে শিখব: প্রিপজিশন যুক্তি নয় প্রথা — কলোকেশন জুটি (interested in, good at, afraid of), ক্রিয়া+প্রিপজিশন ও prepositional বনাম phrasal verb-এর ফারাক, রিলেটিভ ক্লজ-প্রশ্নের শেষে প্রিপজিশন (the house I live in), বিশেষণ+প্রিপজিশনের প্যাটার্ন (proud of, similar to, different from), ফিক্সড ফ্রেজের ফাঁদ (in time/on time, at the end/in the end), আর বাংলা প্রত্যয়-প্রণালীর হস্তক্ষেপ।",
        en: "At beginner level, in = inside, on = surface, at = point gets you by. At intermediate level the wall appears not in sentences like 'good in English' or 'married with' but in self-made logic: where Bengali attaches one suffix (ঘরে, ঢাকায়) to every noun, the English preposition changes from word to word. Before entering this lesson, make sure the beginner Prepositions lesson (place, time, point) is solid. Here you will learn: prepositions are convention, not logic — collocation pairs (interested in, good at, afraid of), verb + preposition and the difference between prepositional and phrasal verbs, prepositions at the end of relative clauses and questions (the house I live in), adjective + preposition patterns (proud of, similar to, different from), fixed-phrase traps (in time/on time, at the end/in the end), and Bengali suffix interference.",
        hi: "बिगिनर स्तर पर in = अंदर, on = सतह पर, at = बिंदु — चल जाता है। मध्यम स्तर पर दीवार तब दिखती है जब 'good in English', 'married with', 'depends of' जैसे खुद-गढ़े तर्क आते हैं: जहाँ हिंदी/बांग्ला में एक ही प्रत्यय (घर में, ढाका में) हर संज्ञा से जुड़ता है, वहीं अंग्रेज़ी प्रिपॉज़िशन शब्द-दर-शब्द बदलता है। इस पाठ से पहले बिगिनर स्तर का Prepositions पाठ (स्थान, समय, बिंदु) पक्का हो। यहाँ सीखेंगे: प्रिपॉज़िशन तर्क नहीं, परंपरा है — कॉलोकेशन जोड़े (interested in, good at, afraid of), क्रिया + प्रिपॉज़िशन और prepositional बनाम phrasal verb का फर्क, relative क्लॉज़ और प्रश्नों के अंत में प्रिपॉज़िशन (the house I live in), विशेषण + प्रिपॉज़िशन पैटर्न (proud of, similar to, different from), फिक्स्ड फ्रेज़ के जाल (in time/on time, at the end/in the end), और बांग्ला प्रत्यय-प्रणाली का हस्तक्षेप।",
      },
      roadmap: [
        { bn: "📍 রিফ্রেশ — জায়গা, সময়, যাত্রায় in/on/at এক ছকে", en: "📍 Refresh — in/on/at for place, time, travel in one chart", hi: "📍 रिफ्रेश — जगह, समय, यात्रा में in/on/at एक चार्ट में" },
        { bn: "🎯 প্রিপজিশন যুক্তি নয় প্রথা — জুটি হিসেবে মুখস্থ", en: "🎯 Prepositions are convention, not logic — memorise whole pairs", hi: "🎯 प्रिपॉज़िशन तर्क नहीं परंपरा — पूरे जोड़े रटें" },
        { bn: "🧩 প্রিপজিশনের পরে কী বসে — বিশেষ্য, V-ing, object pronoun", en: "🧩 What follows a preposition — noun, V-ing, object pronoun", hi: "🧩 प्रिपॉज़िशन के बाद क्या — संज्ञा, V-ing, object pronoun" },
        { bn: "📊 বিশেষণ + প্রিপজিশন — পাঁচ ব্যাচের জুটি-ছক", en: "📊 Adjective + preposition — the five-batch pair chart", hi: "📊 विशेषण + प्रिपॉज़िशन — पाँच बैच का जोड़ा-चार्ट" },
        { bn: "🚦 ক্রিয়া + প্রিপজিশন — agree with/to/on-এর তিন ফারাক", en: "🚦 Verb + preposition — the three-way split of agree with/to/on", hi: "🚦 क्रिया + प्रिपॉज़िशन — agree with/to/on का तीन-तरफ़ा फ़र्क़" },
        { bn: "🔁 প্রশ্ন-রিলেটিভ ক্লজের শেষে প্রিপজিশন — the house I live in", en: "🔁 End-position prepositions — the house I live in", hi: "🔁 अंत-प्रिपॉज़िशन — the house I live in" },
        { bn: "⚠️ ফিক্সড ফ্রেজের ফাঁদ — in time/on time, at the end/in the end", en: "⚠️ Fixed-phrase traps — in time/on time, at the end/in the end", hi: "⚠️ फिक्स्ड फ्रेज़ के जाल — in time/on time, at the end/in the end" },
        { bn: "🧠 বাঙালি শিক্ষার্থীদের তিন ফাঁদ — হাতে-কলমে সমাধানসহ", en: "🧠 Bengali speakers' three traps — with hands-on fixes", hi: "🧠 बांग्लाभाषी छात्रों के तीन जाल — व्यावहारिक इलाज सहित" },
        { bn: "🗣️ নাদিয়ার ইন্টারভিউ-সকাল — সব জুটি একসঙ্গে", en: "🗣️ Nadia's interview morning — every pair at work together", hi: "🗣️ नादिया का इंटरव्यू-सुबह — सारे जोड़े एक साथ" },
        { bn: "📖 এক নজরে — পুরো পাঠ পাঁচ সূত্রে", en: "📖 At a glance — the whole lesson in five formulas", hi: "📖 एक नज़र में — पूरा पाठ पाँच सूत्रों में" },
      ],
      sections: [
        {
          heading: {
            bn: "📍 রিফ্রেশ — জায়গা, সময় আর যাত্রায় in/on/at",
            en: "📍 Refresh — in/on/at for place, time and travel",
            hi: "📍 रिफ्रेश — जगह, समय और यात्रा में in/on/at",
          },
          lead: {
            bn: "বিগিনার স্তরের তিন নিয়ম একবার ঝাড়াই দিয়ে নিন — এক ছকে তিন মাত্রা।",
            en: "One clean pass over the three beginner rules — three dimensions in one chart.",
            hi: "बिगिनर स्तर के तीन नियम एक बार झाड़ लें — एक चार्ट में तीन आयाम।",
          },
          points: [
            { bn: "**in** — বন্ধ জায়গা ও বড় এলাকা: in the room, in Dhaka।", en: "**in** — enclosed spaces and large areas: in the room, in Dhaka.", hi: "**in** — बंद जगह और बड़े क्षेत्र: in the room, in Dhaka।" },
            { bn: "**in** — মাস, বছর, মৌসুম: in July, in 2025।", en: "**in** — months, years, seasons: in July, in 2025.", hi: "**in** — महीने, साल, मौसम: in July, in 2025।" },
            { bn: "**on** — পৃষ্ঠ আর দিন-তারিখ: on the table, on Monday।", en: "**on** — surfaces and days-dates: on the table, on Monday.", hi: "**on** — सतह और दिन-तारीख़: on the table, on Monday।" },
            { bn: "**at** — নির্দিষ্ট বিন্দু: at the door, at 6 pm, at the bus stop।", en: "**at** — a precise point: at the door, at 6 pm, at the bus stop.", hi: "**at** — सटीक बिंदु: at the door, at 6 pm, at the bus stop।" },
            { bn: "দিনের নাম জুড়ে গেলে on জেতে — একা in the morning, কিন্তু on Monday morning।", en: "Once a day name joins, on wins — alone it is in the morning, but on Monday morning.", hi: "दिन का नाम जुड़ते ही on जीतता है — अकेला in the morning, पर on Monday morning।" },
            { bn: "নম্বরসহ ঠিকানা = বিন্দু → at 42 Green Road; রাস্তার নাম একা হলে on Green Road।", en: "A numbered address is a point → at 42 Green Road; a bare street name takes on Green Road.", hi: "नंबर वाला पता = बिंदु → at 42 Green Road; अकेली गली का नाम on Green Road।" },
            { bn: "এয়ারপোর্ট-স্টেশন = যাত্রার পয়েন্ট → at; শহর-দেশ বড় জায়গা → in।", en: "Airports and stations are journey points → at; cities and countries are large areas → in.", hi: "एयरपोर्ट-स्टेशन = यात्रा बिंदु → at; शहर-देश बड़े क्षेत्र → in।" },
          ],
          table: {
            head: [
              { bn: "মাত্রা", en: "Dimension", hi: "आयाम" },
              { bn: "in", en: "in", hi: "in" },
              { bn: "on", en: "on", hi: "on" },
              { bn: "at", en: "at", hi: "at" },
            ],
            rows: [
              [
                { bn: "জায়গা", en: "place", hi: "जगह" },
                { bn: "in the room, in Dhaka", en: "in the room, in Dhaka", hi: "in the room, in Dhaka" },
                { bn: "on the table", en: "on the table", hi: "on the table" },
                { bn: "at the door, at the bus stop", en: "at the door, at the bus stop", hi: "at the door, at the bus stop" },
              ],
              [
                { bn: "সময়", en: "time", hi: "समय" },
                { bn: "in July, in 2025", en: "in July, in 2025", hi: "in July, in 2025" },
                { bn: "on Monday", en: "on Monday", hi: "on Monday" },
                { bn: "at 6 pm", en: "at 6 pm", hi: "at 6 pm" },
              ],
              [
                { bn: "যাত্রা", en: "travel", hi: "यात्रा" },
                { bn: "in a car, in a taxi", en: "in a car, in a taxi", hi: "in a car, in a taxi" },
                { bn: "on a bus, on a train, on a bike", en: "on a bus, on a train, on a bike", hi: "on a bus, on a train, on a bike" },
                { bn: "—", en: "—", hi: "—" },
              ],
            ],
          },
          examples: [
            { wrong: "See you in Monday morning.", right: "See you on Monday morning.", note: { bn: "দিনের নাম জুড়ে গেলে on জেতে; শুধু in the morning — দিনের নাম থাকলে on Monday morning।", en: "Once a day name is attached, on wins; alone it is in the morning — with a day, on Monday morning.", hi: "दिन का नाम जुड़ते ही on जीतता है; अकेला in the morning — दिन के साथ on Monday morning।" } },
            { wrong: "He lives in 42 Green Road.", right: "He lives at 42 Green Road.", note: { bn: "নম্বরসহ ঠিকানা = নির্দিষ্ট বিন্দু → at; রাস্তার নাম একা হলে on Green Road।", en: "A numbered address is a precise point → at; a bare street name takes on Green Road.", hi: "नंबर वाला पता = सटीक बिंदु → at; अकेली गली का नाम on Green Road।" } },
            { wrong: "I arrived in the airport at six.", right: "I arrived at the airport at six.", note: { bn: "এয়ারপোর্ট-স্টেশন = যাত্রার পয়েন্ট → at; শহর-দেশ বড় জায়গা → in।", en: "Airports and stations are journey points → at; cities and countries are large areas → in.", hi: "एयरपोर्ट-स्टेशन = यात्रा बिंदु → at; शहर-देश बड़े क्षेत्र → in।" } },
          ],
        },
        {
          heading: {
            bn: "🎯 প্রিপজিশন যুক্তি নয়, প্রথা — জুটি হিসেবে শিখুন",
            en: "🎯 Prepositions are convention, not logic — learn them as pairs",
            hi: "🎯 प्रिपॉज़िशन तर्क नहीं, परंपरा है — जोड़े के रूप में सीखें",
          },
          lead: {
            bn: "তিন নিয়ম শেষ — এরপরের ইংরেজি পুরোটাই জুটির খেলা, যুক্তিতে বের করার জায়গা নেই।",
            en: "The three rules end fast — after that, English is a game of pairs you cannot reason out.",
            hi: "तीन नियम जल्दी खत्म — उसके बाद की अंग्रेज़ी जोड़ों का खेल है, तर्क से नहीं निकलेगी।",
          },
          points: [
            { bn: "এই তিন নিয়ম একবারই শেষ — এরপরের ইংরেজি জুটির খেলা: interested in, afraid of, good at, married to, proud of।", en: "Those three rules end after one round — the rest of English is a game of pairs: interested in, afraid of, good at, married to, proud of.", hi: "ये तीन नियम एक बार में खत्म — उसके बाद की अंग्रेज़ी जोड़ों का खेल है: interested in, afraid of, good at, married to, proud of।" },
            { bn: "এখানে in/on/at/of/to-র কোনো **জ্যামিতি মানে না** — প্রতিটা বিশেষণ তার নিজের প্রিপজিশন নিয়েই জন্মায়।", en: "Here in/on/at/of/to carry no **geometry** — every adjective is born with its own preposition attached.", hi: "यहाँ in/on/at/of/to का कोई **ज्यामिति-अर्थ नहीं** — हर विशेषण अपना प्रिपॉज़िशन लेकर पैदा होता है।" },
            { bn: "বাংলায় বিশেষ্যের গায়ে **একই প্রত্যয়** বসে: ঘরে, টেবিলে, ঢাকায় — প্রায় সব শব্দে।", en: "In Bengali the **same suffix** sits on almost every noun: ঘরে, টেবিলে, ঢাকায়.", hi: "बांग्ला में संज्ञा पर **वही प्रत्यय** बैठता है: ঘরে, টেবিলে, ঢাকায় — लगभग हर शब्द पर।" },
            { bn: "তাই মনে হয় ইংরেজি প্রিপজিশনও যুক্তিতে বের হবে — **উল্টোটাই সত্য**।", en: "So it feels as if the English preposition can be worked out logically — **the opposite is true**.", hi: "इसलिए लगता है अंग्रेज़ी प्रिपॉज़िशन भी तर्क से निकल जाएगा — **उलटा ही सच है**।" },
            { bn: "প্রিপজিশন বিশেষ্যের আগে আসে, আর প্রতিটা শব্দ নিজের **আলাদা প্রথা** মানে।", en: "The preposition comes before the noun, and each word keeps its own **separate convention**.", hi: "प्रिपॉज़िशन संज्ञा से पहले आता है, और हर शब्द अपनी **अलग परंपरा** रखता है।" },
            { bn: "শিখুন **পুরো ফ্রেজ হিসেবে** — 'good at something', 'married to someone'; আলাদা প্রিপজিশন নয়।", en: "Learn **whole phrases** — 'good at something', 'married to someone' — never lone prepositions.", hi: "सीखें **पूरे फ्रेज़ के रूप में** — 'good at something', 'married to someone' — अकेला प्रिपॉज़िशन नहीं।" },
          ],
          formula: {
            bn: "বিশেষণ/ক্রিয়া + তার নিজের প্রিপজিশন = এক প্যাকেট — পুরো জুটি মুখস্থ করুন",
            en: "adjective/verb + its own preposition = one packet — memorise the whole pair",
            hi: "विशेषण/क्रिया + उसका अपना प्रिपॉज़िशन = एक पैकेट — पूरा जोड़ा रटें",
          },
          examples: [
            { wrong: "I am interested to cricket.", right: "I am interested in cricket.", note: { bn: "interested-এর সঙ্গী in — 'to' বা 'for' যুক্তি দিয়ে বের হয় না, জুটিটাই মুখস্থ।", en: "interested partners with in — 'to' or 'for' cannot be reasoned out; the pair itself is memorised.", hi: "interested का साथी in — 'to' या 'for' तर्क से नहीं निकलेगा; जोड़ा रटना ही है।" } },
            { wrong: "She is married with a doctor.", right: "She is married to a doctor.", note: { bn: "'সাথে বিয়ে' ভাবনা থেকে with আসে; প্রথা বলে married to।", en: "The 'with someone' idea tempts with; convention says married to.", hi: "'के साथ शादी' के भाव से with आता है; परंपरा कहती है married to।" } },
          ],
        },
        {
          heading: {
            bn: "🧩 গঠন — প্রিপজিশনের পরে কী বসে: বিশেষ্য, V-ing, object pronoun",
            en: "🧩 Formation — what follows a preposition: noun, V-ing, object pronoun",
            hi: "🧩 गठन — प्रिपॉज़िशन के बाद क्या आता है: संज्ञा, V-ing, object pronoun",
          },
          lead: {
            bn: "প্রিপজিশনের পরে বসতে পারে মাত্র তিনটা জিনিস — বাকি সব কড়া নিষেধ।",
            en: "Only three things can follow a preposition — everything else is strictly banned.",
            hi: "प्रिपॉज़िशन के बाद केवल तीन चीज़ें आ सकती हैं — बाकी सब सख़्त मना।",
          },
          points: [
            { bn: "প্রথম বসতে পারে **বিশেষ্য**: in the room, for lunch।", en: "First, a **noun** can follow: in the room, for lunch.", hi: "पहला विकल्प **संज्ञा**: in the room, for lunch।" },
            { bn: "দ্বিতীয় — ক্রিয়ার **-ing রূপ**: before leaving, without asking, for coming।", en: "Second — the **-ing form** of a verb: before leaving, without asking, for coming.", hi: "दूसरा — क्रिया का **-ing रूप**: before leaving, without asking, for coming।" },
            { bn: "তৃতীয় — প্রনামের **object রূপ**: for me, with him, to us।", en: "Third — the **object form** of a pronoun: for me, with him, to us.", hi: "तीसरा — सर्वनाम का **object रूप**: for me, with him, to us।" },
            { bn: "**base verb** কখনো নয় — thank you for come ভুল।", en: "Never a **base verb** — thank you for come is wrong.", hi: "**base verb** कभी नहीं — thank you for come गलत।" },
            { bn: "**to-ইনফিনিটিভ** কখনো নয় — without to say ভুল।", en: "Never a **to-infinitive** — without to say is wrong.", hi: "**to-इनफिनिटिव** कभी नहीं — without to say गलत।" },
            { bn: "**subject pronoun** কখনো নয় — for I, with he ভুল।", en: "Never a **subject pronoun** — for I, with he are wrong.", hi: "**subject pronoun** कभी नहीं — for I, with he गलत।" },
            { bn: "বাংলায় 'আসার জন্য ধন্যবাদ' থেকে for come ধরা হয় — ইংরেজি চায় **for coming**।", en: "Bengali 'আসার জন্য ধন্যবাদ' makes learners reach for for come — English wants **for coming**.", hi: "बांग्ला 'आसার জন্য ধন্যবাদ' से for come पकड़ लिया जाता है — अंग्रेज़ी चाहती है **for coming**।" },
            { bn: "একটা নিয়ম পাকা হলেই হাত ঠিক হয়: thinking to change → thinking of changing, instead to complain → instead of complaining।", en: "Nail this one rule and your hand straightens everywhere: thinking to change → thinking of changing, instead to complain → instead of complaining.", hi: "यह एक नियम पक्का हो जाए तो हाथ सुधर जाता है: thinking to change → thinking of changing, instead to complain → instead of complaining।" },
          ],
          formula: {
            bn: "প্রিপজিশন + বিশেষ্য | V-ing | object pronoun — base verb, to-ইনফিনিটিভ, subject pronoun কখনো নয়",
            en: "preposition + noun | V-ing | object pronoun — never a base verb, to-infinitive, or subject pronoun",
            hi: "प्रिपॉज़िशन + संज्ञा | V-ing | object pronoun — base verb, to-इनफिनिटिव, subject pronoun कभी नहीं",
          },
          examples: [
            { wrong: "Thank you for come.", right: "Thank you for coming.", note: { bn: "প্রিপজিশন (for) + ক্রিয়া = V-ing; base form আসে না।", en: "Preposition (for) + verb = V-ing; the base form never appears.", hi: "प्रिपॉज़िशन (for) + क्रिया = V-ing; base form नहीं आता।" } },
            { wrong: "He left without to say goodbye.", right: "He left without saying goodbye.", note: { bn: "without-ও প্রিপজিশন — তাই without saying; to-ইনফিনিটিভ নয়।", en: "without is also a preposition — so without saying; no to-infinitive.", hi: "without भी प्रिपॉज़िशन है — इसलिए without saying; to-इनफिनिटिव नहीं।" } },
            { wrong: "I am thinking to change my job.", right: "I am thinking of changing my job.", note: { bn: "think of/about + V-ing; 'to change' নয় — বাংলা 'বদলাতে ভাবছি' ইনফিনিটিভ-জাল।", en: "think of/about + V-ing; not 'to change' — the Bengali infinitive habit is the trap.", hi: "think of/about + V-ing; 'to change' नहीं — इनफिनिटिव का जाल।" } },
            { wrong: "This gift is for I.", right: "This gift is for me.", note: { bn: "প্রিপজিশনের পরে object pronoun — me/him/her/us/them; subject রূপ (I/he) নয়।", en: "After a preposition comes the object pronoun — me/him/her/us/them; never the subject form (I/he).", hi: "प्रिपॉज़िशन के बाद object pronoun — me/him/her/us/them; subject रूप (I/he) नहीं।" } },
            { wrong: "Instead to complain, start doing.", right: "Instead of complaining, start doing.", note: { bn: "instead of — of ছাড়া অসম্পূর্ণ; of-এর পরে V-ing।", en: "instead of — incomplete without of; after of comes V-ing.", hi: "instead of — of के बिना अधूरा; of के बाद V-ing।" } },
          ],
        },
        {
          heading: {
            bn: "📊 বিশেষণ + প্রিপজিশন — পাঁচ ব্যাচের জুটি-ছক",
            en: "📊 Adjective + preposition — the five-batch pair chart",
            hi: "📊 विशेषण + प्रिपॉज़िशन — पाँच बैच का जोड़ा-चार्ट",
          },
          lead: {
            bn: "বিশেষণ চোখে পড়লেই তার প্রিপজিশন মনে করুন — ছকের পাঁচ ব্যাচ মুখস্থ করলেই হলো।",
            en: "See the adjective, recall its preposition — memorise the chart's five batches and you are set.",
            hi: "विशेषण दिखे तो उसका प्रिपॉज़िशन याद करें — चार्ट के पाँच बैच रट लें, बस हो गया।",
          },
          points: [
            { bn: "বিশেষণ আর প্রিপজিশন **এক প্যাকেট** — আলাদা শব্দ নয়, একসঙ্গে মুখস্থ হবে।", en: "The adjective and its preposition travel as **one packet** — not separate words, memorised together.", hi: "विशेषण और प्रिपॉज़िशन **एक पैकेट** — अलग शब्द नहीं, साथ में रटेंगे।" },
            { bn: "**of-দল**: afraid of, fond of, proud of, aware of, tired of।", en: "**The of-family**: afraid of, fond of, proud of, aware of, tired of.", hi: "**of-दल**: afraid of, fond of, proud of, aware of, tired of।" },
            { bn: "**at-দল**: good at, bad at, skilled at।", en: "**The at-family**: good at, bad at, skilled at.", hi: "**at-दल**: good at, bad at, skilled at।" },
            { bn: "**about/with-দল**: worried about; angry about (কাজ) / angry with (মানুষ); sorry about (পরিস্থিতি) / sorry for (অন্যের জন্য অনুতাপ)।", en: "**The about/with-family**: worried about; angry about (a thing) / angry with (a person); sorry about (a situation) / sorry for (feeling sorry for someone).", hi: "**about/with-दल**: worried about; angry about (चीज़) / angry with (व्यक्ति); sorry about (स्थिति) / sorry for (किसी के लिए अफ़सोस)।" },
            { bn: "**to-দল**: married to, similar to, kind to, used to।", en: "**The to-family**: married to, similar to, kind to, used to.", hi: "**to-दल**: married to, similar to, kind to, used to।" },
            { bn: "**মিশ্র দল**: different from, dependent on, keen on, famous for, responsible for; grateful to (মানুষ) for (কাজ)।", en: "**The mixed batch**: different from, dependent on, keen on, famous for, responsible for; grateful to (a person) for (a thing).", hi: "**मिश्रित दल**: different from, dependent on, keen on, famous for, responsible for; grateful to (व्यक्ति) for (काम)।" },
            { bn: "বাংলায় সব ভাবনায় একটাই প্রত্যয় ('তে', 'এর') — ইংরেজিতে বিশেষণ বদলালেই প্রিপজিশন লাফায়: afraid of থেকে worried about।", en: "Bengali manages all these ideas with one suffix ('তে', 'এর') — in English the preposition leaps as soon as the adjective changes: afraid of becomes worried about.", hi: "बांग्ला इन सब भावों में एक ही प्रत्यय चलाता है — अंग्रेज़ी में विशेषण बदलते ही प्रिपॉज़िशन कूद जाता है: afraid of से worried about।" },
          ],
          table: {
            head: [
              { bn: "দল", en: "Batch", hi: "दल" },
              { bn: "বিশেষণ + প্রিপজিশন", en: "Adjective + preposition", hi: "विशेषण + प्रिपॉज़िशन" },
            ],
            rows: [
              [
                { bn: "of-দল", en: "of-family", hi: "of-दल" },
                { bn: "afraid of, fond of, proud of, aware of, tired of", en: "afraid of, fond of, proud of, aware of, tired of", hi: "afraid of, fond of, proud of, aware of, tired of" },
              ],
              [
                { bn: "at-দল", en: "at-family", hi: "at-दल" },
                { bn: "good at, bad at, skilled at", en: "good at, bad at, skilled at", hi: "good at, bad at, skilled at" },
              ],
              [
                { bn: "about/with-দল", en: "about/with-family", hi: "about/with-दल" },
                { bn: "worried about; angry about (কাজ) / angry with (মানুষ)", en: "worried about; angry about (a thing) / angry with (a person)", hi: "worried about; angry about (चीज़) / angry with (व्यक्ति)" },
              ],
              [
                { bn: "to-দল", en: "to-family", hi: "to-दल" },
                { bn: "married to, similar to, kind to, used to", en: "married to, similar to, kind to, used to", hi: "married to, similar to, kind to, used to" },
              ],
              [
                { bn: "মিশ্র দল", en: "mixed batch", hi: "मिश्रित दल" },
                { bn: "different from, dependent on, keen on, famous for, responsible for", en: "different from, dependent on, keen on, famous for, responsible for", hi: "different from, dependent on, keen on, famous for, responsible for" },
              ],
            ],
          },
          examples: [
            { wrong: "I am afraid from dogs.", right: "I am afraid of dogs.", note: { bn: "'থেকে ভয়' ভাবনা থেকে from আসে; প্রথা বলে afraid of।", en: "The 'fear from' idea suggests from; convention says afraid of.", hi: "'डर से' के भाव से from आता है; परंपरा कहती है afraid of।" } },
            { wrong: "My phone is similar with yours.", right: "My phone is similar to yours.", note: { bn: "similar সবসময় to-এর সাথে — similar with নেই।", en: "similar always takes to — there is no 'similar with'.", hi: "similar सदा to लेता है — 'similar with' नहीं होता।" } },
            { wrong: "This year's result is very different than last year.", right: "This year's result is very different from last year's.", note: { bn: "লেখার ভাষায় different from নিরাপদ; 'than' তুলনা-জাল।", en: "In writing, different from is the safe choice; 'than' is the comparison trap.", hi: "लिखित भाषा में different from सुरक्षित; 'than' तुलना का जाल।" } },
            { wrong: "Why are you angry on me?", right: "Why are you angry with me?", note: { bn: "মানুষের প্রতি রাগ → angry with; কাজ-ঘটনার প্রতি → angry about।", en: "Anger at a person → angry with; at a thing or event → angry about.", hi: "व्यक्ति पर ग़ुस्सा → angry with; चीज़-घटना पर → angry about।" } },
            { wrong: "She is proud for her daughter.", right: "She is proud of her daughter.", note: { bn: "proud of — 'গর্ব করে' ভাবনায় for-এর টান ভুল।", en: "proud of — the pull of 'for' in 'feels proud for' is wrong.", hi: "proud of — 'के लिए गर्व' की for-खिंचाव गलत है।" } },
          ],
        },
        {
          heading: {
            bn: "🚦 ক্রিয়া + প্রিপজিশন — agree with/to/on আর phrasal verb-এর ফারাক",
            en: "🚦 Verb + preposition — agree with/to/on and the phrasal verb gap",
            hi: "🚦 क्रिया + प्रिपॉज़िशन — agree with/to/on और phrasal verb का फ़र्क़",
          },
          lead: {
            bn: "ক্রিয়ারাও জুটি চায় — আর agree-এর তিন মুখ পরীক্ষার নিয়মিত প্রশ্ন।",
            en: "Verbs keep partners too — and agree's three faces are a regular exam question.",
            hi: "क्रियाएँ भी साथी चाहती हैं — और agree के तीन रूप परीक्षा का नियमित सवाल हैं।",
          },
          points: [
            { bn: "**depend on** — depend of ইংরেজিতে নেই; একই সুরে listen to, wait for, belong to, look at।", en: "**depend on** — 'depend of' does not exist; same tune: listen to, wait for, belong to, look at.", hi: "**depend on** — 'depend of' अंग्रेज़ी में नहीं; वैसे ही listen to, wait for, belong to, look at।" },
            { bn: "complain **about** (কাজ) / **to** (মানুষ); borrow from; apologise to (মানুষ) for (কাজ)।", en: "complain **about** (a thing) / **to** (a person); borrow from; apologise to (a person) for (a thing).", hi: "complain **about** (चीज़) / **to** (व्यक्ति); borrow from; apologise to (व्यक्ति) for (काम)।" },
            { bn: "arrive **in** (শহর-দেশ) / **at** (বিল্ডিং-স্টেশন)।", en: "arrive **in** (a city-country) / **at** (a building-station).", hi: "arrive **in** (शहर-देश) / **at** (इमारत-स्टेशन)।" },
            { bn: "**agree with** a person/an idea — মানুষ বা মতের সাথে দোষারোপহীন একমত।", en: "**agree with** a person/an idea — agreeing with someone without blame.", hi: "**agree with** a person/an idea — व्यक्ति या राय से सहमत।" },
            { bn: "**agree to** a plan/an offer — প্রস্তাব-পরিকল্পনা-শর্তে সম্মতি দেওয়া।", en: "**agree to** a plan/an offer — consenting to a proposal or plan.", hi: "**agree to** a plan/an offer — प्रस्ताव-योजना को मंज़ूरी।" },
            { bn: "**agree on** a price/a date — শর্ত-বিস্তারিত নিয়ে দুই পক্ষ মিটে যাওয়া।", en: "**agree on** a price/a date — two sides settling a detail.", hi: "**agree on** a price/a date — दो पक्षों का शर्त पर समझौता।" },
            { bn: "**prepositional verb** — প্রিপজিশন অর্থ ধরে রাখে, object টানে: listen to music।", en: "**A prepositional verb** keeps the preposition's meaning and takes an object: listen to music.", hi: "**prepositional verb** — प्रिपॉज़िशन अर्थ रखता है, object लेता है: listen to music।" },
            { bn: "**phrasal verb** — দুই-তিন শব্দ মিলে নতুন অর্থ: give up = ছেড়ে দেওয়া, look after = দেখভাল করা।", en: "**A phrasal verb** — two-three words fuse into a new meaning: give up = quit, look after = take care of.", hi: "**phrasal verb** — दो-तीन शब्द मिलकर नया अर्थ: give up = छोड़ देना, look after = देखभाल।" },
          ],
          table: {
            head: [
              { bn: "জুটি", en: "Pair", hi: "जोड़ी" },
              { bn: "কখন", en: "When", hi: "कब" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [
                { bn: "agree with", en: "agree with", hi: "agree with" },
                { bn: "মানুষ/মতের সাথে একমত", en: "agreement with a person or view", hi: "व्यक्ति/राय से सहमति" },
                { bn: "agree with you", en: "agree with you", hi: "agree with you" },
              ],
              [
                { bn: "agree to", en: "agree to", hi: "agree to" },
                { bn: "প্রস্তাব-পরিকল্পনায় সম্মতি", en: "consent to a proposal or plan", hi: "प्रस्ताव-योजना की मंज़ूरी" },
                { bn: "agree to a plan", en: "agree to a plan", hi: "agree to a plan" },
              ],
              [
                { bn: "agree on", en: "agree on", hi: "agree on" },
                { bn: "শর্তে দুই পক্ষ মিটে যাওয়া", en: "two sides settling a detail", hi: "दो पक्षों का समझौता" },
                { bn: "agree on a price", en: "agree on a price", hi: "agree on a price" },
              ],
            ],
          },
          formula: {
            bn: "ক্রিয়া + প্রিপজিশন + বিশেষ্য — depend on it, listen to me, wait for the bus",
            en: "verb + preposition + noun — depend on it, listen to me, wait for the bus",
            hi: "क्रिया + प्रिपॉज़िशन + संज्ञा — depend on it, listen to me, wait for the bus",
          },
          examples: [
            { wrong: "It depends of the weather.", right: "It depends on the weather.", note: { bn: "depend on — depend of ইংরেজিতে নেই; বাংলা 'ওপর নির্ভর' থেকে of-এর জাল।", en: "depend on — 'depend of' does not exist; the Bengali 'depends over' idea sets the of-trap.", hi: "depend on — 'depend of' अंग्रेज़ी में नहीं है।" } },
            { wrong: "I completely agree to you.", right: "I completely agree with you.", note: { bn: "মানুষের সাথে মতৈক্য → agree with; to দিলে শোনায় সম্মতি-অনুমোদন।", en: "Agreement with a person's view → agree with; to would sound like granting consent.", hi: "व्यक्ति से सहमति → agree with; to देने पर अनुमति देने जैसा लगेगा।" } },
            { wrong: "The board agreed with the new plan.", right: "The board agreed to the new plan.", note: { bn: "পরিকল্পনা-প্রস্তাবে সম্মতি → agree to; 'with the plan' মতের সাথে একমত বোঝায়।", en: "Consent to a plan or proposal → agree to; 'with the plan' would mean sharing an opinion.", hi: "योजना-प्रस्ताव की मंज़ूरी → agree to; 'with the plan' मतलब राय में एकमत।" } },
            { wrong: "Please listen me carefully.", right: "Please listen to me carefully.", note: { bn: "listen একা দাঁড়ায় না — listen to + object; 'শোনো' এক ক্রিয়া নয় ইংরেজিতে।", en: "listen cannot stand alone — listen to + object; 'listen' is not a one-word verb in English.", hi: "listen अकेला नहीं चलता — listen to + object।" } },
            { wrong: "I am waiting the bus since ten minutes.", right: "I have been waiting for the bus for ten minutes.", note: { bn: "wait for + object; আর 'দশ মিনিট ধরে' → present perfect continuous + for।", en: "wait for + object; and 'for ten minutes now' → present perfect continuous + for.", hi: "wait for + object; और 'दस मिनट से' → present perfect continuous + for।" } },
          ],
        },
        {
          heading: {
            bn: "🔁 প্রশ্ন ও রিলেটিভ ক্লজের শেষে প্রিপজিশন — the house I live in",
            en: "🔁 Prepositions at the end of questions and relative clauses — the house I live in",
            hi: "🔁 प्रश्न और relative क्लॉज़ के अंत में प्रिपॉज़िशन — the house I live in",
          },
          lead: {
            bn: "কথার ইংরেজিতে প্রিপজিশন বাক্যের শেষে থাকাই স্বাভাবিক — ভয়ের কিছু নেই।",
            en: "In spoken English a preposition at the end is the normal shape — nothing to fear.",
            hi: "बोलचाल की अंग्रेज़ी में प्रिपॉज़िशन का अंत में रहना ही स्वाभाविक है — डर की कोई बात नहीं।",
          },
          points: [
            { bn: "ইংরেজি প্রশ্ন-রিলেটিভ ক্লজে প্রিপজিশন **শেষে ফেলে রাখতে দেয়** — What are you looking at? Who did you go with?", en: "English lets questions and relative clauses **strand the preposition at the end** — What are you looking at? Who did you go with?", hi: "अंग्रेज़ी प्रश्न-रिलेटिव क्लॉज़ में प्रिपॉज़िशन **अंत में छूट सकता है** — What are you looking at? Who did you go with?" },
            { bn: "**This is the house I live in** — কথায় এটাই স্বাভাবিক রূপ।", en: "**This is the house I live in** — in speech this is the normal shape.", hi: "**This is the house I live in** — बोलचाल में यही सामान्य रूप।" },
            { bn: "ফরমাল লেখায় প্রিপজিশন সামনে আসে: the house in which I live, to whom I spoke, at which point।", en: "In formal writing the preposition moves forward: the house in which I live, to whom I spoke, at which point.", hi: "औपचारिक लेखन में प्रिपॉज़िशन आगे आ जाता है: the house in which I live, to whom I spoke, at which point।" },
            { bn: "দুটোই সঠিক — শুধু **স্তর আলাদা**: কথায় শেষে, লেখায় সামনে।", en: "Both are correct — only the **register differs**: end position in speech, front position in writing.", hi: "दोनों सही हैं — केवल **स्तर अलग**: बोलचाल में अंत में, लेखन में आगे।" },
            { bn: "ফাঁদ ১: শেষে-প্রিপজিশন 'ভাঙা' শুনে ছেঁটে ফেলা — the film I was talking **about** না বলে the film I was talking।", en: "Trap one: the end preposition sounds 'broken', so it gets clipped — the film I was talking instead of the film I was talking **about**.", hi: "जाल १: अंत-वाला प्रिपॉज़िशन 'टूटा' लगकर काट दिया जाता है — the film I was talking **about** की जगह the film I was talking।" },
            { bn: "ফাঁদ ২: পুরনো pronoun পেছনে রয়ে যাওয়া — the pen I write with **it**; which/that টানলে it লাগে না।", en: "Trap two: the old pronoun stays behind — the pen I write with **it**; once which/that carries the preposition, no it is needed.", hi: "जाल २: पुराना pronoun पीछे रह जाता है — the pen I write with **it**; which/that ले ले तो it की ज़रूरत नहीं।" },
            { bn: "সামনে in which/for whom নিলে শেষে আবার প্রিপজিশন বসানো **দ্বিগুণ-চিহ্নিত ভুল**।", en: "If you choose in which/for whom up front, adding the preposition again at the end is **double-marking**.", hi: "आगे in which/for whom चुना हो तो अंत में फिर प्रिपॉज़िशन **दोहरा-चिह्नित गलती** है।" },
          ],
          formula: {
            bn: "প্রশ্ন/রিলেটিভ ক্লজ ... + প্রিপজিশন (শেষে) — What are you looking at?",
            en: "question/relative clause ... + preposition (at the end) — What are you looking at?",
            hi: "प्रश्न/relative क्लॉज़ ... + प्रिपॉज़िशन (अंत में) — What are you looking at?",
          },
          examples: [
            { wrong: "This is the house which I live.", right: "This is the house which I live in. (বা where I live)", note: { bn: "live-এর সাথী প্রিপজিশনটা ক্লজের শেষে বেঁচে থাকতে হয়।", en: "The preposition live needs must survive at the end of the clause.", hi: "live का प्रिपॉज़िशन क्लॉज़ के अंत तक बचना चाहिए।" } },
            { wrong: "The pen I write with it is new.", right: "The pen I write with is new.", note: { bn: "which/that প্রিপজিশন টানলে it আর নয় — দোষী pronoun বাড়তি।", en: "Once which/that carries the preposition, drop it — the extra pronoun is surplus.", hi: "which/that प्रिपॉज़िशन ले ले तो it हटा दो — अतिरिक्त pronoun बेकार।" } },
            { wrong: "About what are you talking?", right: "What are you talking about?", note: { bn: "কথায় প্রিপজিশন শেষে থাকে; সামনে টেনে আনা অযৌক্তিকভাবে ফরমাল।", en: "In speech the preposition stays at the end; dragging it forward is unnaturally formal.", hi: "बोलचाल में प्रिपॉज़िशन अंत में रहता है; आगे खींचना अनावश्यक रूप से औपचारिक है।" } },
            { wrong: "Tell me for what you are waiting.", right: "Tell me what you are waiting for.", note: { bn: "indirect প্রশ্নেও শেষে-প্রিপজিশনই স্বাভাবিক রূপ।", en: "Even in indirect questions the end-position preposition is the natural shape.", hi: "indirect प्रश्न में भी अंत-वाला प्रिपॉज़िशन ही स्वाभाविक रूप है।" } },
            { wrong: "That is the flat in which I live in.", right: "That is the flat in which I live.", note: { bn: "সামনে in which নিলে শেষে in আর নয় — এক প্রিপজিশন, এক জায়গায়।", en: "If in which leads, no second in at the end — one preposition, one position.", hi: "आगे in which लिया तो अंत में दूसरा in नहीं — एक प्रिपॉज़िशन, एक जगह।" } },
          ],
        },
        {
          heading: {
            bn: "⚠️ ফিক্সড ফ্রেজের ফাঁদ — in time/on time, at the end/in the end",
            en: "⚠️ Fixed-phrase traps — in time/on time, at the end/in the end",
            hi: "⚠️ फिक्स्ड फ्रेज़ के जाल — in time/on time, at the end/in the end",
          },
          lead: {
            bn: "একই প্রিপজিশন বদলালেই অর্থ সরে যায় — এই জুটিগুলো পরীক্ষার নিয়মিত ফাঁদ।",
            en: "Swap one preposition and the meaning slides — these pairs trap exams and daily talk alike.",
            hi: "एक प्रिपॉज़िशन बदलो और अर्थ खिसक जाता है — ये जोड़े परीक्षा और रोज़मर्रा दोनों में जाल बिछाते हैं।",
          },
          points: [
            { bn: "**in time** = ঠিক সময়ের মধ্যে পৌঁছে কাজে লাগা: We reached in time to catch the train।", en: "**in time** = arriving early enough to be useful: We reached in time to catch the train.", hi: "**in time** = समय रहते पहुँच काम आना: We reached in time to catch the train।" },
            { bn: "**on time** = নির্ঘষ্ট সময়ে, সময়সূচি মেনে: The train arrived on time।", en: "**on time** = at the scheduled moment: The train arrived on time.", hi: "**on time** = तय समय पर, अनुसूची के अनुसार: The train arrived on time।" },
            { bn: "**at the end (of)** = কোনো কিছুর শেষ প্রান্তে: at the end of the film, at the end of the road।", en: "**at the end (of)** = the final part of something: at the end of the film, at the end of the road.", hi: "**at the end (of)** = किसी चीज़ का अंतिम हिस्सा: at the end of the film, at the end of the road।" },
            { bn: "**in the end** = অবশেষে, সব ঘটনার পরে ফলাফল: We argued, but in the end we agreed।", en: "**in the end** = finally, the result after everything: We argued, but in the end we agreed.", hi: "**in the end** = अंततः, सब कुछ होने के बाद नतीजा: We argued, but in the end we agreed।" },
            { bn: "একই সুরে: **at the beginning (of)** = শুরুর প্রান্তে; **in the beginning** = প্রথম দিকে।", en: "Same tune: **at the beginning (of)** = at the start point; **in the beginning** = at first.", hi: "वैसे ही: **at the beginning (of)** = आरंभ पर; **in the beginning** = शुरुआत में।" },
            { bn: "**on the way** = পথে; **in the way** = পথ আটকে দিচ্ছে।", en: "**on the way** = en route; **in the way** = blocking the path.", hi: "**on the way** = रास्ते में; **in the way** = रास्ता रोक रहा है।" },
            { bn: "যাতায়াতে: গাড়ি-ট্যাকসির ভেতরে **in a car/in a taxi**; বাস-ট্রেন-বাইক-নৌকা-বিমানে **on**।", en: "In transport: inside a car/taxi it is **in a car/in a taxi**; a bus/train/bike/boat/plane takes **on**.", hi: "यातायात में: गाड़ी-टैक्सी के अंदर **in a car/in a taxi**; बस-ट्रेन-बाइक-नाव-विमान पर **on**।" },
          ],
          table: {
            head: [
              { bn: "জোড়া", en: "Pair", hi: "जोड़ी" },
              { bn: "প্রথমটার অর্থ", en: "First one means", hi: "पहले का अर्थ" },
              { bn: "দ্বিতীয়টার অর্থ", en: "Second one means", hi: "दूसरे का अर्थ" },
            ],
            rows: [
              [
                { bn: "in time / on time", en: "in time / on time", hi: "in time / on time" },
                { bn: "in time = সময়ে কাজে লাগা", en: "in time = early enough to be useful", hi: "in time = समय रहते काम आना" },
                { bn: "on time = নির্ঘষ্ট সময়ে", en: "on time = as scheduled", hi: "on time = तय समय पर" },
              ],
              [
                { bn: "at the end / in the end", en: "at the end / in the end", hi: "at the end / in the end" },
                { bn: "at the end of = শেষ প্রান্তে", en: "at the end of = the final part of", hi: "at the end of = अंतिम हिस्से में" },
                { bn: "in the end = অবশেষে", en: "in the end = finally", hi: "in the end = अंततः" },
              ],
              [
                { bn: "at the beginning / in the beginning", en: "at the beginning / in the beginning", hi: "at the beginning / in the beginning" },
                { bn: "at the beginning of = শুরুর প্রান্তে", en: "at the beginning of = the start point of", hi: "at the beginning of = आरंभ पर" },
                { bn: "in the beginning = প্রথম দিকে", en: "in the beginning = at first", hi: "in the beginning = शुरुआत में" },
              ],
              [
                { bn: "on the way / in the way", en: "on the way / in the way", hi: "on the way / in the way" },
                { bn: "on the way = পথে", en: "on the way = en route", hi: "on the way = रास्ते में" },
                { bn: "in the way = পথ আটকে", en: "in the way = blocking the path", hi: "in the way = रास्ता रोकते हुए" },
              ],
              [
                { bn: "in a car / on a bus", en: "in a car / on a bus", hi: "in a car / on a bus" },
                { bn: "in = গাড়ি-ট্যাকসির ভেতরে", en: "in = inside a car/taxi", hi: "in = गाड़ी-टैक्सी के अंदर" },
                { bn: "on = বাস-ট্রেন-বাইক-নৌকা-বিমানে", en: "on = on a bus/train/bike/boat/plane", hi: "on = बस-ट्रेन-बाइक-नाव-विमान पर" },
              ],
            ],
          },
          examples: [
            { wrong: "The flight took off exactly in time.", right: "The flight took off exactly on time.", note: { bn: "সময়সূচি মেনে ওঠা → on time; in time বললে 'কাজে লাগার মতো' ভাব আসে।", en: "Departing per the schedule → on time; in time would suggest 'early enough to be useful'.", hi: "अनुसूची के अनुसार उड़ान → on time; in time कहने पर 'समय रहते' भाव आ जाएगा।" } },
            { wrong: "We reached the station on time to catch the last train.", right: "We reached the station in time to catch the last train.", note: { bn: "ট্রেন ছাড়ার আগে পৌঁছে কাজ সারা → in time; on time মানে তালিকার সময়ে।", en: "Arriving early enough to use the train → in time; on time means at the scheduled moment.", hi: "ट्रेन पकड़ने लायक समय पर पहुँचना → in time; on time अर्थात निर्धारित क्षण पर।" } },
            { wrong: "In the end of the film, everyone cried.", right: "At the end of the film, everyone cried.", note: { bn: "ছবির শেষ প্রান্ত = at the end of; in the end এখানে বসে না।", en: "The final part of the film = at the end of; in the end does not sit here.", hi: "फ़िल्म का अंतिम हिस्सा = at the end of; in the end यहाँ नहीं बैठता।" } },
            { wrong: "We argued for hours, but at the end we agreed.", right: "We argued for hours, but in the end we agreed.", note: { bn: "অবশেষে-ফলাফল ভাব → in the end; at the end চায় of + বিশেষ্য।", en: "The finally-result feeling → in the end; at the end wants of + a noun.", hi: "अंततः-नतीजे का भाव → in the end; at the end को of + संज्ञा चाहिए।" } },
            { wrong: "I go to office on my own car.", right: "I go to office in my own car.", note: { bn: "গাড়িতে বসলে in; বাস-ট্রেন-বাইকে on — যাত্রী-ভরে রাস্তা পার হয়।", en: "Sit inside a car → in; a bus/train/bike takes on — you ride it along the road.", hi: "गाड़ी के अंदर → in; बस-ट्रेन-बाइक पर on।" } },
          ],
        },
        {
          heading: {
            bn: "🧠 বাঙালি শিক্ষার্থীদের কমন ভুল — তিন ফাঁদ, তিন সমাধান",
            en: "🧠 Common mistakes by Bengali speakers — three traps, three fixes",
            hi: "🧠 बांग्लाभाषी विद्यार्थियों की आम गलतियाँ — तीन जाल, तीन इलाज",
          },
          lead: {
            bn: "বাংলা প্রত্যয়, ইনফিনিটিভ-অভ্যাস আর শেষে-প্রিপজিশনের ভয় — তিনটাই এক অভ্যাসে ঠিক হয়।",
            en: "The Bengali suffix, the infinitive habit and end-preposition fear — one habit fixes all three.",
            hi: "बांग्ला प्रत्यय, इनफिनिटिव-आदत और अंत-प्रिपॉज़िशन का डर — एक आदत में तीनों का इलाज।",
          },
          points: [
            { bn: "ফাঁদ ১ — **বাংলা প্রত্যয়-প্রণালী**: ঘরে, টেবিলে, ঢাকায়; প্রত্যয় প্রায় সব শব্দে একই রকম, তাই শিক্ষার্থীরা ইংরেজিতেও যুক্তি দিয়ে বানায়: good in singing, married with, depend of।", en: "Trap one — the **Bengali suffix system**: ঘরে, টেবিলে, ঢাকায়; the suffix works almost identically everywhere, so learners build English prepositions by logic too: good in singing, married with, depend of.", hi: "जाल १ — **बांग्ला प्रत्यय-प्रणाली**: ঘরে, টেবিলে, ঢাকায়; प्रत्यय लगभग हर शब्द पर वैसा ही, इसलिए विद्यार्थी अंग्रेज़ी में भी तर्क से गढ़ते हैं: good in singing, married with, depend of।" },
            { bn: "সমাধান — নোট-খাতায় **পুরো জুটি** লিখুন: 'good at something', 'married to someone'।", en: "The fix — write **whole pairs** in your notebook: 'good at something', 'married to someone'.", hi: "इलाज — नोटबुक में **पूरी जोड़ी** लिखें: 'good at something', 'married to someone'।" },
            { bn: "ফাঁদ ২ — বাংলায় উদ্দেশ্য-ভাব **ইনফিনিটিভে** ('শেখাতে আগ্রহী', 'যেতে ভাবছি'): তাই interested to learn, thinking to change।", en: "Trap two — Bengali puts purpose in the **infinitive** ('interested to learn', 'thinking to go'): so learners say interested to learn, thinking to change.", hi: "जाल २ — बांग्ला में उद्देश्य **इनफिनिटिव में** ('सीखने के लिए उत्सुक'): इसलिए interested to learn, thinking to change।" },
            { bn: "ইংরেজি চায় **প্রিপজিশন + V-ing**: interested in learning, thinking of changing।", en: "English wants **preposition + V-ing**: interested in learning, thinking of changing.", hi: "अंग्रेज़ी चाहती है **प्रिपॉज़िशन + V-ing**: interested in learning, thinking of changing।" },
            { bn: "ফাঁদ ৩ — বাংলা কোথাও প্রিপজিশন **ফেরত আনে না**, তাই শেষে-প্রিপজিশন অসম্পূর্ণ শোনায়: What are you looking at? দেখে ভাব হয় 'at কোথায় বসল?'।", en: "Trap three — Bengali never **returns a preposition**, so an end-position one sounds incomplete: What are you looking at? makes one wonder 'where did at land?'", hi: "जाल ३ — बांग्ला कहीं प्रिपॉज़िशन **वापस नहीं लाता**, इसलिए अंत-वाला अधूरा लगता है: What are you looking at? देखकर लगता है 'at कहाँ बैठा?'।" },
            { bn: "কথার ইংরেজিতে শেষে-প্রিপজিশনই **আদর্শ রূপ** — ভয়ের কিছু নেই।", en: "In spoken English the end-position preposition **is the standard form** — nothing is missing.", hi: "बोली जाने वाली अंग्रेज़ी में अंत-वाला प्रिपॉज़िशन **मानक रूप है** — कुछ कमी नहीं।" },
          ],
          examples: [
            { wrong: "She is good in singing.", right: "She is good at singing.", note: { bn: "'সিং-এ ভালো' যুক্তির টানে in; প্রথা বলে good at।", en: "The 'good in singing' logic pulls in; convention says good at.", hi: "'good in singing' का तर्क in खींचता है; परंपरा कहती है good at।" } },
            { wrong: "I am interested to learn Chinese.", right: "I am interested in learning Chinese.", note: { bn: "ইনফিনিটিভ-ভাবনার ফাঁদ; interested in + V-ing।", en: "The infinitive-habit trap; interested in + V-ing.", hi: "इनफिनिटिव-आदत का जाल; interested in + V-ing।" } },
            { wrong: "I am listening music.", right: "I am listening to music.", note: { bn: "'শুনছি' ইংরেজিতে এক ক্রিয়া নয় — listen সবসময় to চায়।", en: "'Listening' is not a one-word verb in English — listen always asks for to.", hi: "'सुन रहा हूँ' अंग्रेज़ी में एक-शब्द क्रिया नहीं — listen हमेशा to माँगता है।" } },
            { wrong: "He is waiting his result.", right: "He is waiting for his result.", note: { bn: "wait for + object — 'অপেক্ষা করছে' ভাবনায় for ছেঁটে ফেলা ভুল।", en: "wait for + object — clipping for out of 'waiting' is wrong.", hi: "wait for + object — 'इंतज़ार' से for काट देना गलत।" } },
            { wrong: "Congratulations in your promotion!", right: "Congratulations on your promotion!", note: { bn: "congratulations on — অভিনন্দনের প্রথাগত জুটি; in নয়।", en: "congratulations on — the fixed congratulation pair; never in.", hi: "congratulations on — बधाई की निश्चित जोड़ी; in नहीं।" } },
          ],
        },
        {
          heading: {
            bn: "🗣️ ছোট গল্পে দেখা যাক — নাদিয়ার ইন্টারভিউ-সকাল",
            en: "🗣️ A short story to see it all — Nadia's interview morning",
            hi: "🗣️ एक छोटी कहानी में सब देखें — नादिया का इंटरव्यू-सुबह",
          },
          lead: {
            bn: "এক ইন্টারভিউ-সকালে পাঠের প্রায় সব জুটি কাজ করছে — গল্পে চোখ বুলান।",
            en: "Almost every pair from the lesson works in one interview morning — read the story.",
            hi: "एक इंटरव्यू-सुबह में पाठ के लगभग सारे जोड़े काम कर रहे हैं — कहानी पढ़ें।",
          },
          points: [
            { bn: "নাদিয়ার ইন্টারভিউ-সকাল — HR-এর প্রথম প্রশ্ন: **Are you interested in this role?**", en: "Nadia's interview morning — the HR opens: **Are you interested in this role?**", hi: "नादिया का इंटरव्यू-सुबह — HR का पहला सवाल: **Are you interested in this role?**" },
            { bn: "নাদিয়া শান্ত গলায়: Very much. I am **good at** data analysis and I am not **afraid of** deadlines।", en: "Nadia answers calmly: Very much. I am **good at** data analysis and I am not **afraid of** deadlines.", hi: "नादिया शांत स्वर में: Very much. I am **good at** data analysis and I am not **afraid of** deadlines।" },
            { bn: "ম্যানেজার CV ঘাঁটলেন: Your skills are **similar to** our last hire's. Why did you leave?", en: "The manager studies the CV: Your skills are **similar to** our last hire's. Why did you leave?", hi: "मैनेजर ने CV देखा: Your skills are **similar to** our last hire's. Why did you leave?" },
            { bn: "উত্তর: I **waited for** a promotion for two years, but everything **depended on** the new director, so I **agreed to** look elsewhere।", en: "The answer: I **waited for** a promotion for two years, but everything **depended on** the new director, so I **agreed to** look elsewhere.", hi: "उत्तर: I **waited for** a promotion for two years, but everything **depended on** the new director, so I **agreed to** look elsewhere।" },
            { bn: "ঠিকানা-স্তর: The office is **at** 42 Park Street, **on** the third floor — join on 1 May at 10 am।", en: "The address ladder: The office is **at** 42 Park Street, **on** the third floor — join on 1 May at 10 am.", hi: "पता-सीढ़ी: The office is **at** 42 Park Street, **on** the third floor — join on 1 May at 10 am।" },
            { bn: "নাদিয়ার ধার: I will be there **in time**, not just on time!", en: "Nadia's quip: I will be there **in time**, not just on time!", hi: "नादिया का जवाब: I will be there **in time**, not just on time!" },
            { bn: "বেরিয়ে বন্ধুকে ফোনে হাসলেন: congratulations **on** my new job!", en: "Walking out she laughs on the phone: congratulations **on** my new job!", hi: "बाहर निकलकर फ़ोन पर हँसी: congratulations **on** my new job!" },
            { bn: "দেখুন — প্রতিটা বিশেষণ-ক্রিয়া তার প্রিপজিশন নিয়েই এসেছে; ঠিকানা-তলা-শহরে at/on/in-এর স্তর।", en: "Notice — every adjective and verb arrived with its own preposition; and the address-floor-city ladder of at/on/in.", hi: "देखें — हर विशेषण-क्रिया अपना प्रिपॉज़िशन लेकर आई; पता-फ़्लोर-शहर में at/on/in की सीढ़ी।" },
          ],
          examples: [
            { wrong: "I am interested to this role.", right: "I am interested in this role.", note: { bn: "interested in — ইন্টারভিউয়ের প্রথম পরীক্ষাই এই জুটি।", en: "interested in — the interview's first test is this very pair.", hi: "interested in — इंटरव्यू की पहली परीक्षा यही जोड़ी है।" } },
            { wrong: "I am good in data analysis.", right: "I am good at data analysis.", note: { bn: "good at + দক্ষতা — 'in' নয়।", en: "good at + a skill — not 'in'.", hi: "good at + कौशल — 'in' नहीं।" } },
            { wrong: "The office is in 42 Park Street.", right: "The office is at 42 Park Street.", note: { bn: "নম্বর-ঠিকানা = বিন্দু → at; তলা on the third floor, শহর in Kolkata।", en: "A numbered address is a point → at; the floor on the third floor, the city in Kolkata.", hi: "नंबर वाला पता = बिंदु → at; फ़्लोर on the third floor, शहर in Kolkata।" } },
            { wrong: "Everything depended of the new director.", right: "Everything depended on the new director.", note: { bn: "depend on — of-এর জাল আবার।", en: "depend on — the of-trap again.", hi: "depend on — of वाला जाल फिर।" } },
          ],
        },
        {
          heading: {
            bn: "📖 এক নজরে — পুরো পাঠ পাঁচ সূত্রে",
            en: "📖 At a glance — the whole lesson in five formulas",
            hi: "📖 एक नज़र में — पूरा पाठ पाँच सूत्रों में",
          },
          lead: {
            bn: "স্ক্যান করার জন্য সাজানো সারমর্ম — অনুশীলনের আগে পাঁচ লাইনে ফেরত পড়ুন।",
            en: "An essence built for scanning — five lines to re-read before practice.",
            hi: "स्कैन के लिए सजा सार — अभ्यास से पहले पाँच पंक्तियाँ दोहरा लें।",
          },
          points: [
            { bn: "**প্রথা, যুক্তি নয়** — interested in, afraid of, good at, married to, proud of, similar to, different from, angry with, worried about, famous for — জুটি হিসেবে মুখস্থ।", en: "**Convention, not logic** — interested in, afraid of, good at, married to, proud of, similar to, different from, angry with, worried about, famous for — memorised as pairs.", hi: "**परंपरा, तर्क नहीं** — interested in, afraid of, good at, married to, proud of, similar to, different from, angry with, worried about, famous for — जोड़े के रूप में रटें।" },
            { bn: "প্রিপজিশনের পরে **বিশেষ্য, object pronoun (for me) বা V-ing (before leaving)** — base verb, to-ইনফিনিটিভ, subject pronoun কখনো নয়।", en: "After a preposition: **a noun, an object pronoun (for me), or V-ing (before leaving)** — never a base verb, to-infinitive, or subject pronoun.", hi: "प्रिपॉज़िशन के बाद **संज्ञा, object pronoun (for me) या V-ing (before leaving)** — base verb, to-इनफिनिटिव, subject pronoun कभी नहीं।" },
            { bn: "**ক্রিয়া+প্রিপজিশন**: depend on, listen to, wait for, belong to, look at; agree with (মানুষ) / agree to (পরিকল্পনা) / agree on (শর্ত)।", en: "**Verb + preposition**: depend on, listen to, wait for, belong to, look at; agree with (a person) / agree to (a plan) / agree on (terms).", hi: "**क्रिया+प्रिपॉज़िशन**: depend on, listen to, wait for, belong to, look at; agree with (व्यक्ति) / agree to (योजना) / agree on (शर्त)।" },
            { bn: "**শেষে-প্রিপজিশন বৈধ** — What are you looking at? / the house I live in; তবে in which নিলে শেষে আর নয়, it/পুরনো pronoun বাড়িয়ে নয়।", en: "**End-position prepositions are valid** — What are you looking at? / the house I live in; but with in which, none at the end, and no extra it/old pronoun.", hi: "**अंत-प्रिपॉज़िशन वैध** — What are you looking at? / the house I live in; पर in which लिया तो अंत में नहीं, अतिरिक्त it/पुराना pronoun नहीं।" },
            { bn: "**ফিক্সড ফ্রেজ**: in time (সময়ে কাজে লাগা) বনাম on time (নির্ঘষ্ট সময়ে), at the end of (শেষ প্রান্তে) বনাম in the end (অবশেষে), in a car বনাম on a bus।", en: "**Fixed phrases**: in time (early enough to work) vs on time (as scheduled), at the end of (final part of) vs in the end (finally), in a car vs on a bus.", hi: "**फिक्स्ड फ्रेज़**: in time (समय रहते काम आना) बनाम on time (तय समय पर), at the end of (अंतिम हिस्सा) बनाम in the end (अंततः), in a car बनाम on a bus।" },
          ],
          examples: [
            { wrong: "It depends of you.", right: "It depends on you.", note: { bn: "depend on — প্রথম সূত্রের জুটি।", en: "depend on — the pair from formula one.", hi: "depend on — पहले सूत्र की जोड़ी।" } },
            { wrong: "Who are you waiting?", right: "Who are you waiting for?", note: { bn: "শেষে-প্রিপজিশন বৈধ — ছেঁটে দেওয়া ভুল।", en: "The end-position preposition is valid — clipping it is the error.", hi: "अंत-वाला प्रिपॉज़िशन वैध — काट देना ही गलती।" } },
            { wrong: "The class starts in 9 am.", right: "The class starts at 9 am.", note: { bn: "ঘড়ির সময় = বিন্দু → at।", en: "Clock time is a point → at.", hi: "घड़ी का समय = बिंदु → at।" } },
            { wrong: "Don't be angry on me.", right: "Don't be angry with me.", note: { bn: "মানুষের প্রতি রাগ → angry with।", en: "Anger at a person → angry with.", hi: "व्यक्ति पर ग़ुस्सा → angry with।" } },
          ],
        },
      ],
      tips: [
        { bn: "বিশেষণ-জুটি তালিকা মুখস্থ: interested in, afraid of, good/bad at, proud of, aware of, tired of, married to, similar to, different from, angry with/about, worried about, famous for, dependent on।", en: "Memorise the adjective pairs: interested in, afraid of, good/bad at, proud of, aware of, tired of, married to, similar to, different from, angry with/about, worried about, famous for, dependent on.", hi: "विशेषण-जोड़ी रटें: interested in, afraid of, good/bad at, proud of, aware of, tired of, married to, similar to, different from, angry with/about, worried about, famous for, dependent on।" },
        { bn: "ক্রিয়া-জুটি: depend on, listen to, wait for, belong to, look at, complain about/to, borrow from, apologise to...for — প্রিপজিশনসহ পুরো ফ্রেজ নোট করো।", en: "Verb pairs: depend on, listen to, wait for, belong to, look at, complain about/to, borrow from, apologise to...for — note the whole phrase with its preposition.", hi: "क्रिया-जोड़ी: depend on, listen to, wait for, belong to, look at, complain about/to, borrow from, apologise to...for — पूरा फ्रेज़ प्रिपॉज़िशन सहित नोट करो।" },
        { bn: "agree with (মানুষ/মত), agree to (প্রস্তাব/পরিকল্পনা), agree on (শর্ত/তারিখ) — এই তিন ফারাক পরীক্ষার নিয়মিত প্রশ্ন।", en: "agree with (a person/idea), agree to (a proposal/plan), agree on (terms/a date) — this three-way split is a regular exam question.", hi: "agree with (व्यक्ति/राय), agree to (प्रस्ताव/योजना), agree on (शर्त/तारीख़) — तीन-तरफ़ा फर्क परीक्षा का नियमित प्रश्न।" },
        { bn: "প্রিপজিশনের পরে ক্রিয়া এলে V-ing — before leaving, without asking, thank you for coming; to-ইনফিনিটিভ কখনো নয়।", en: "After a preposition, a verb takes V-ing — before leaving, without asking, thank you for coming; never a to-infinitive.", hi: "प्रिपॉज़िशन के बाद क्रिया V-ing में — before leaving, without asking, thank you for coming; to-इनफिनिटिव कभी नहीं।" },
        { bn: "প্রিপজিশনের পরে object pronoun — for me, with him, to us; for I / with he ইংরেজিতে নেই।", en: "After a preposition use the object pronoun — for me, with him, to us; 'for I / with he' does not exist in English.", hi: "प्रिपॉज़िशन के बाद object pronoun — for me, with him, to us; 'for I / with he' अंग्रेज़ी में नहीं।" },
        { bn: "প্রশ্ন-রিলেটিভ ক্লজের শেষে প্রিপজিশন ভুল নয় — What are you looking at? / the flat I live in; কিন্তু in which নিলে শেষে আর নয়।", en: "A preposition at the end of a question or relative clause is correct — What are you looking at? / the flat I live in; but if you choose in which, do not repeat it at the end.", hi: "प्रश्न-रिलेटिव क्लॉज़ के अंत में प्रिपॉज़िशन सही है — What are you looking at? / the flat I live in; पर in which लिया तो अंत में दोबारा नहीं।" },
        { bn: "in time = সময়ে কাজে লাগা; on time = নির্ঘষ্ট সময়ে। at the end of = শেষ প্রান্তে; in the end = অবশেষে।", en: "in time = early enough to work; on time = as scheduled. at the end of = the final part of; in the end = finally.", hi: "in time = समय रहते काम आना; on time = तय समय पर। at the end of = अंतिम हिस्से में; in the end = अंततः।" },
        { bn: "গাড়ি-ট্যাক্সিতে in, বাস-ট্রেন-বাইক-নৌকা-বিমানে on; নম্বর-ঠিকানা ও পয়েন্টে at, শহর-দেশ-মাসে in, দিন-তারিখে on।", en: "In a car/taxi; on a bus/train/bike/boat/plane; at numbered addresses and points; in cities-countries-months; on days-dates.", hi: "गाड़ी-टैक्सी में in; बस-ट्रेन-बाइक-नाव-विमान पर on; नंबर-पता और बिंदु पर at; शहर-देश-महीनों में in; दिन-तारीख़ पर on।" },
        { bn: "prepositional verb অর্থ ধরে রাখে (listen to music); phrasal verb নতুন অর্থ বানায় (give up, look after) — দুটো এক নয়।", en: "A prepositional verb keeps the literal meaning (listen to music); a phrasal verb builds a new meaning (give up, look after) — the two are not the same.", hi: "prepositional verb शब्दार्थ रखता है (listen to music); phrasal verb नया अर्थ बनाता है (give up, look after) — दोनों एक नहीं।" },
        { bn: "বাংলা প্রত্যয় (ঘরে/ঢাকায়) সব শব্দে এক রকম; ইংরেজি প্রিপজিশন শব্দভেদে বদলায় — তাই শব্দ নয়, পুরো জুটি মুখস্থ করো।", en: "The Bengali suffix (ঘরে/ঢাকায়) is uniform across words; the English preposition changes word by word — so memorise whole pairs, not lone words.", hi: "बांग्ला प्रत्यय (घर में/ढाका में) हर शब्द पर एक जैसा; अंग्रेज़ी प्रिपॉज़िशन शब्द-दर-शब्द बदलता है — इसलिए शब्द नहीं, पूरी जोड़ी रटो।" },
      ],
      quiz: [
        { question: "She is very interested ___ modern art.", options: ["on", "in", "at", "for"], answer: 1, explanation: { bn: "interested in — বিশেষণের নিজস্ব সঙ্গী।", en: "interested in — the adjective's own partner.", hi: "interested in — विशेषण का अपना साथी।" } },
        { question: "It all depends ___ your effort.", options: ["of", "at", "on", "from"], answer: 2, explanation: { bn: "depend on — depend of ইংরেজিতে নেই।", en: "depend on — 'depend of' does not exist in English.", hi: "depend on — 'depend of' अंग्रेज़ी में नहीं।" } },
        { question: "We finally agreed ___ the proposal.", options: ["with", "to", "for", "at"], answer: 1, explanation: { bn: "প্রস্তাবে সম্মতি → agree to; মানুষের সাথে হলে agree with।", en: "Consent to a proposal → agree to; with a person it would be agree with.", hi: "प्रस्ताव की मंज़ूरी → agree to; व्यक्ति के साथ agree with।" } },
        { question: "Are you afraid ___ speaking in public?", options: ["of", "from", "with", "at"], answer: 0, explanation: { bn: "afraid of — 'থেকে ভয়' ভাবনা থেকে from আসে, প্রথা বলে of।", en: "afraid of — the 'from-fear' logic suggests from, convention says of.", hi: "afraid of — 'डर से' से from आता है, परंपरा कहती है of।" } },
        { question: "Thank you for ___ with my luggage.", options: ["help", "to help", "helping", "helped"], answer: 2, explanation: { bn: "প্রিপজিশনের পরে V-ing — for helping।", en: "After a preposition comes V-ing — for helping.", hi: "प्रिपॉज़िशन के बाद V-ing — for helping।" } },
        { question: "This is the song I was listening ___ last night.", options: ["for", "to", "at", "on"], answer: 1, explanation: { bn: "listen to — ক্লজের শেষে প্রিপজিশন বেঁচে থাকে।", en: "listen to — the preposition survives at the end of the clause.", hi: "listen to — प्रिपॉज़िशन क्लॉज़ के अंत तक बचता है।" } },
        { question: "What are you waiting ___? The shop opens at ten.", options: ["for", "at", "to", "on"], answer: 0, explanation: { bn: "wait for — প্রশ্নের শেষে for।", en: "wait for — for ends the question.", hi: "wait for — प्रश्न के अंत में for।" } },
        { question: "The bus arrived ___ time — 8:05, exactly as the timetable said.", options: ["in", "at", "on", "by"], answer: 2, explanation: { bn: "সময়সূচি মেনে → on time; in time মানে সময়ের মধ্যে কাজে লাগা।", en: "As the schedule says → on time; in time means early enough to be useful.", hi: "अनुसूची के अनुसार → on time; in time यानी समय रहते काम आना।" } },
        { question: "We tried three routes, but ___ the end we walked.", options: ["at", "on", "in", "to"], answer: 2, explanation: { bn: "অবশেষে-ফলাফল → in the end; at the end চায় of + বিশেষ্য।", en: "The finally-result → in the end; at the end wants of + a noun.", hi: "अंततः-नतीजा → in the end; at the end को of + संज्ञा चाहिए।" } },
        { question: "Which sentence is correct?", options: ["She is married with an engineer.", "She is married to an engineer.", "She is married of an engineer.", "She is married from an engineer."], answer: 1, explanation: { bn: "married to — প্রথাগত জুটি; with/of/from সব ভুল।", en: "married to — the fixed pair; with/of/from are all wrong.", hi: "married to — निश्चित जोड़ी; with/of/from सब गलत।" } },
      ],
    },
  },

  /* ── 2. Conditionals (unit 4 → sortOrder 3) ────────────────────────── */
  {
    topic: "Conditionals",
    level: "intermediate",
    title: "Conditionals (Intermediate)",
    unit: 4,
    sortOrder: 3,
    data: {
      title: {
        bn: "কন্ডিশনাল বাক্য: শর্ত ও ফল (মধ্যম স্তর)",
        en: "Conditional sentences: condition and result (Intermediate)",
        hi: "कंडीशनल वाक्य: शर्त और परिणाम (मध्यम स्तर)",
      },
      intro: {
        bn: "'যদি বৃষ্টি হয়, তাহলে আমরা থাকব' — বাংলায় যদি...তাহলে জুটি সব শর্তে একই রকম চলে, কিন্তু ইংরেজি চারটে আলাদা দরজা খোলে: কোন শর্ত বাস্তব, কোনটা কল্পনা, কোনটা না-ঘটা অতীত — প্রতিটার জন্য ক্রিয়া-সূত্র আলাদা। এই পাঠে ঢোকার আগে present simple, past simple আর past participle (V3) রূপগুলো (বিগিনার স্তরের Tense পাঠগুলো) পাকা থাকা দরকার; would-এর মৌলিক ব্যবহারও চেনা থাকলে ভালো। এখানে শিখব: 0/1/2/3 — চার ধরনের কন্ডিশনাল গভীরে, mixed-এর পরিচয়, if-এর বিকল্প (unless, as long as, provided that, in case), wish + past/past perfect-এ আফসোস, I wish I were, would rather, implied conditionals (without, otherwise), if so/if not — আর বাংলা যদি...তাহলে অভ্যাসের ফাঁদ।",
        en: "'If it rains, we will stay' — the Bengali যদি...তাহলে pair runs the same way in every condition, but English opens four different doors: which condition is real, which is imagined, which is an unfulfilled past — each takes its own verb formula. Before entering this lesson, make sure your present simple, past simple and past participle (V3) forms are solid (the beginner tense lessons); knowing the basic uses of would will help too. Here you will learn: the four conditional types (0/1/2/3) in depth, an introduction to mixed conditionals, the alternatives to if (unless, as long as, provided that, in case), regret with wish + past/past perfect, I wish I were, would rather, implied conditionals (without, otherwise), if so/if not — and the traps of the Bengali যদি...তাহলে habit.",
        hi: "'अगर बारिश हुई तो हम रुकेंगे' — बांग्ला का यदि...তাহলे जोड़ा हर शर्त में एक जैसा चलता है, पर अंग्रेज़ी चार अलग दरवाज़े खोलती है: कौन-सी शर्त वास्तविक है, कौन-सी कल्पना, कौन-सी अधूरा अतीत — हर एक का अपना क्रिया-सूत्र है। इस पाठ से पहले present simple, past simple और past participle (V3) रूप पक्के हों (बिगिनर स्तर के Tense पाठ); would का मूल उपयोग भी जाना हो तो अच्छा। यहाँ सीखेंगे: 0/1/2/3 — चार प्रकार के कंडीशनल गहराई से, mixed का परिचय, if के विकल्प (unless, as long as, provided that, in case), अफ़सोस के लिए wish + past/past perfect, I wish I were, would rather, implied conditionals (without, otherwise), if so/if not — और बांग्ला यदि...ताहले आदत के जाल।",
      },
      roadmap: [
        { bn: "🚪 চার দরজা — কোন শর্তে কোন Type, এক ছকে", en: "🚪 The four doors — which Type for which condition, in one chart", hi: "🚪 चार दरवाज़े — कौन-सी शर्त पर कौन-सा Type, एक चार्ट में" },
        { bn: "🧊 Type 0 — সবসময় সত্য: present + present", en: "🧊 Type 0 — always true: present + present", hi: "🧊 Type 0 — हमेशा सत्य: present + present" },
        { bn: "🌧️ Type 1 — ভবিষ্যতে সম্ভাব্য: present + will", en: "🌧️ Type 1 — possible in the future: present + will", hi: "🌧️ Type 1 — भविष्य में संभव: present + will" },
        { bn: "🪽 Type 2 — কল্পনা: past + would, সবার জন্য were", en: "🪽 Type 2 — imagining: past + would, were for every person", hi: "🪽 Type 2 — कल्पना: past + would, सभी के लिए were" },
        { bn: "🕰️ Type 3 — না-ঘটা অতীত: had + V3 + would have + V3", en: "🕰️ Type 3 — an unfulfilled past: had + V3 + would have + V3", hi: "🕰️ Type 3 — अधूरा अतीत: had + V3 + would have + V3" },
        { bn: "🔀 Mixed — অতীতের শর্ত, এখনের ফল", en: "🔀 Mixed — a past condition with a present result", hi: "🔀 Mixed — अतीत की शर्त, अभी का नतीजा" },
        { bn: "🚦 if-এর চাচাতো ভাই — unless, as long as, provided that, in case", en: "🚦 if's cousins — unless, as long as, provided that, in case", hi: "🚦 if के चचेरे भाई — unless, as long as, provided that, in case" },
        { bn: "🧭 চার ভাইয়ের সূক্ষ্ম ফারাক — in case ≠ if", en: "🧭 The fine gaps between the four — in case ≠ if", hi: "🧭 चारों के सूक्ष्म फ़र्क़ — in case ≠ if" },
        { bn: "🪞 wish + past/past perfect — আফসোসের ব্যাকরণ আর would rather", en: "🪞 wish + past/past perfect — the grammar of regret, and would rather", hi: "🪞 wish + past/past perfect — अफ़सोस का व्याकरण और would rather" },
        { bn: "🕳️ গোপন শর্ত — without, otherwise, if so/if not", en: "🕳️ Hidden conditions — without, otherwise, if so/if not", hi: "🕳️ छिपी शर्तें — without, otherwise, if so/if not" },
        { bn: "⚠️ বাঙালি শিক্ষার্থীদের তিন ফাঁদ — হাতে-কলমে সমাধানসহ", en: "⚠️ Bengali speakers' three traps — with hands-on fixes", hi: "⚠️ बांग्लाभाषी छात्रों के तीन जाल — व्यावहारिक इलाज सहित" },
        { bn: "🗣️ রাফির ইন্টারভিউ-সকাল — সাত রূপ এক সকালে", en: "🗣️ Rafi's interview morning — seven forms in one morning", hi: "🗣️ राफ़ी का इंटरव्यू-सुबह — सात रूप एक सुबह में" },
        { bn: "📖 এক নজরে — পুরো পাঠ পাঁচ সূত্রে", en: "📖 At a glance — the whole lesson in five formulas", hi: "📖 एक नज़र में — पूरा पाठ पाँच सूत्रों में" },
      ],
      sections: [
        {
          heading: {
            bn: "🚪 কখন ব্যবহার হয় — চারটে দরজা: সত্যতা আর দূরত্বের মাপ",
            en: "🚪 When to use them — four doors: reality and distance",
            hi: "🚪 कब इस्तेमाल होते हैं — चार दरवाज़े: वास्तविकता और दूरी की माप",
          },
          lead: {
            bn: "কোন Type বসবে ঠিক করে ক্রিয়া নয় — শর্তটাকে নিয়ে বক্তার বিশ্বাস।",
            en: "What decides the Type is not the verb but the speaker's belief about the condition.",
            hi: "कौन-सा Type बैठेगा यह क्रिया नहीं — शर्त के बारे में बोलने वाले का विश्वास तय करता है।",
          },
          points: [
            { bn: "**if-বাক্য দুই অর্ধের**: শর্ত (if-clause) + ফল (main clause) — If it rains, we will stay in।", en: "An **if-sentence has two halves**: the condition (if-clause) + the result (main clause) — If it rains, we will stay in.", hi: "**if-वाक्य दो हिस्सों का**: शर्त (if-clause) + परिणाम (main clause) — If it rains, we will stay in।" },
            { bn: "কোন কাল বসবে ঠিক করে **বক্তার বিশ্বাস** — শর্তটা কি সবসময় সত্য? → Type 0 (If you heat ice, it melts)।", en: "What decides the tense is **the speaker's belief** — is the condition always true? → Type 0 (If you heat ice, it melts).", hi: "कौन-सा काल बैठेगा यह **बोलने वाले का विश्वास** तय करता है — शर्त हमेशा सच है? → Type 0 (If you heat ice, it melts)।" },
            { bn: "ভবিষ্যতে সত্যি হতে পারে? → **Type 1** (If it rains tomorrow, we will stay in)।", en: "Could it come true in the future? → **Type 1** (If it rains tomorrow, we will stay in).", hi: "भविष्य में सच हो सकती है? → **Type 1** (If it rains tomorrow, we will stay in)।" },
            { bn: "বর্তমানে বাস্তব নয় — কল্পনা? → **Type 2** (If I had wings, I would fly)।", en: "Not real in the present — an imagining? → **Type 2** (If I had wings, I would fly).", hi: "वर्तमान में असली नहीं — कल्पना? → **Type 2** (If I had wings, I would fly)।" },
            { bn: "অতীতে ঘটেনি — আফসোস? → **Type 3** (If you had asked, I would have helped)।", en: "Never happened in the past — a regret? → **Type 3** (If you had asked, I would have helped).", hi: "अतीत में नहीं हुआ — अफ़सोस? → **Type 3** (If you had asked, I would have helped)।" },
            { bn: "ফারাকটা খেয়াল করুন: If I had time (এখন সময় নেই — Type 2), কিন্তু If I had had time (তখন সময় ছিল না — Type 3)।", en: "Feel the contrast: If I had time (no time now — Type 2), but If I had had time (no time back then — Type 3).", hi: "फ़र्क़ देखें: If I had time (अब समय नहीं — Type 2), पर If I had had time (तब समय नहीं था — Type 3)।" },
            { bn: "একই **'যদি'** শব্দ — অথচ দূরত্ব বদলে কাল বদলে যায়।", en: "The same word **'if'** — yet distance changes the tense.", hi: "वही **'if'** शब्द — फिर भी दूरी बदलने से काल बदल जाता है।" },
          ],
          table: {
            head: [
              { bn: "Type", en: "Type", hi: "Type" },
              { bn: "শর্ত-অর্ধ", en: "Condition half", hi: "शर्त-हिस्सा" },
              { bn: "ফল-অর্ধ", en: "Result half", hi: "नतीजा-हिस्सा" },
            ],
            rows: [
              [
                { bn: "Type 0 — সবসময় সত্য", en: "Type 0 — always true", hi: "Type 0 — हमेशा सत्य" },
                { bn: "present simple", en: "present simple", hi: "present simple" },
                { bn: "present simple", en: "present simple", hi: "present simple" },
              ],
              [
                { bn: "Type 1 — ভবিষ্যতে সম্ভাব্য", en: "Type 1 — possible in the future", hi: "Type 1 — भविष्य में संभव" },
                { bn: "present simple", en: "present simple", hi: "present simple" },
                { bn: "will + V1", en: "will + V1", hi: "will + V1" },
              ],
              [
                { bn: "Type 2 — এখন বাস্তব নয় (কল্পনা)", en: "Type 2 — unreal now (imagining)", hi: "Type 2 — अभी असली नहीं (कल्पना)" },
                { bn: "past simple", en: "past simple", hi: "past simple" },
                { bn: "would + V1", en: "would + V1", hi: "would + V1" },
              ],
              [
                { bn: "Type 3 — না-ঘটা অতীত", en: "Type 3 — an unfulfilled past", hi: "Type 3 — अधूरा अतीत" },
                { bn: "had + V3", en: "had + V3", hi: "had + V3" },
                { bn: "would have + V3", en: "would have + V3", hi: "would have + V3" },
              ],
              [
                { bn: "Mixed — অতীত শর্ত + এখন ফল", en: "Mixed — past condition, present result", hi: "Mixed — अतीत शर्त + अभी नतीजा" },
                { bn: "had + V3", en: "had + V3", hi: "had + V3" },
                { bn: "would + V1", en: "would + V1", hi: "would + V1" },
              ],
            ],
          },
          examples: [],
        },
        {
          heading: {
            bn: "🧊 Type 0 — সবসময় সত্য: present + present",
            en: "🧊 Type 0 — always true: present + present",
            hi: "🧊 Type 0 — हमेशा सत्य: present + present",
          },
          lead: {
            bn: "সাধারণ সত্য, বিজ্ঞান, রোজকার নিয়ম — শর্ত আর ফল দুটোই present-এ।",
            en: "General truths, science, everyday rules — both halves sit in the present.",
            hi: "सामान्य सत्य, विज्ञान, रोज़मर्रा के नियम — शर्त और नतीजा दोनों present में।",
          },
          points: [
            { bn: "শর্তটা **সবসময় সত্য** — সাধারণ সত্য, বিজ্ঞান, প্রবাদ: If you heat ice, it melts।", en: "The condition is **always true** — general truth, science, proverbs: If you heat ice, it melts.", hi: "शर्त **हमेशा सत्य** — सामान्य सत्य, विज्ञान, कहावत: If you heat ice, it melts।" },
            { bn: "দুই অর্ধেই **present simple** — আলাদা কাল লাগে না।", en: "**Present simple** in both halves — no extra tense is needed.", hi: "दोनों हिस्सों में **present simple** — अलग काल नहीं चाहिए।" },
            { bn: "if-ক্লজে **will ঢোকে না** — If you will heat ice ভুল।", en: "No **will enters the if-clause** — If you will heat ice is wrong.", hi: "if-क्लॉज़ में **will नहीं घुसता** — If you will heat ice गलत।" },
            { bn: "রোজকার নিয়মেও এই দরজা: If you press this button, the light comes on।", en: "Everyday rules use this door too: If you press this button, the light comes on.", hi: "रोज़मर्रा के नियम भी इसी दरवाज़े से: If you press this button, the light comes on।" },
            { bn: "এটাই একমাত্র Type যেখানে শর্ত-অর্ধ আর ফল-অর্ধের কাল **সমান**।", en: "It is the only Type where the condition and result tenses are **equal**.", hi: "यही एकमात्र Type है जहाँ शर्त और नतीजे का काल **बराबर** है।" },
          ],
          formula: {
            bn: "If + present simple, present simple — If you heat ice, it melts",
            en: "If + present simple, present simple — If you heat ice, it melts",
            hi: "If + present simple, present simple — If you heat ice, it melts",
          },
          examples: [
            { wrong: "If you will heat ice, it melts.", right: "If you heat ice, it melts.", note: { bn: "সবসময়-সত্য → Type 0: শর্তে present simple; if-ক্লজে will নয়।", en: "Always-true → Type 0: present simple in the condition; no will in the if-clause.", hi: "हमेशा-सत्य → Type 0: शर्त में present simple; if-क्लॉज़ में will नहीं।" } },
          ],
        },
        {
          heading: {
            bn: "🌧️ Type 1 — ভবিষ্যতে সম্ভাব্য: present + will",
            en: "🌧️ Type 1 — possible in the future: present + will",
            hi: "🌧️ Type 1 — भविष्य में संभव: present + will",
          },
          lead: {
            bn: "ভবিষ্যতে ঘটতে পারে এমন বাস্তব শর্ত — ইংরেজি এক দিকেই ভবিষ্যৎ-চিহ্ন দেয়।",
            en: "A real condition that could come true — English marks the future on one side only.",
            hi: "भविष्य में घट सकने वाली वास्तविक शर्त — अंग्रेज़ी भविष्य-चिह्न एक ही ओर लगाती है।",
          },
          points: [
            { bn: "শর্তটা ভবিষ্যতে **সত্যি হওয়া সম্ভব** — সম্ভাবনা আছে: If it rains tomorrow, we will stay in।", en: "The condition **could genuinely come true** — there is a real chance: If it rains tomorrow, we will stay in.", hi: "शर्त भविष्य में **सच हो सकती है** — संभावना है: If it rains tomorrow, we will stay in।" },
            { bn: "সূত্র: শর্ত-অর্ধে **present simple**, ফল-অর্ধে will + V1।", en: "Formula: **present simple** in the condition, will + V1 in the result.", hi: "सूत्र: शर्त-हिस्से में **present simple**, नतीजे में will + V1।" },
            { bn: "will **শুধু ফল-অর্ধে** — If I will get the job ভুল, সঠিক If I get the job।", en: "**Will only in the result half** — If I will get the job is wrong; the correct one is If I get the job.", hi: "will **केवल नतीजे-हिस्से में** — If I will get the job गलत, सही If I get the job।" },
            { bn: "ফল-অর্ধেও কাল লাগবেই — If the bus comes late, we missed the movie নয়, we will miss।", en: "The result half needs its own tense — not If the bus comes late, we missed the movie, but we will miss.", hi: "नतीजे-हिस्से में भी काल चाहिए — If the bus comes late, we missed the movie नहीं, बल्कि we will miss।" },
            { bn: "বাংলা 'যদি...তাহলে' দুই দিকে ভবিষ্যৎ-চিহ্ন দেয় — ইংরেজি **এক দিকেই**; 'then'-ও বাদ।", en: "The Bengali 'যদি...তাহলে' marks both halves with future signs — English marks **only one side**; and 'then' drops out.", hi: "बांग्ला 'यदि...তाहले' दोनों ओर भविष्य-चिह्न लगाता है — अंग्रेज़ी **एक ही ओर**; 'then' भी गिरता है।" },
          ],
          formula: {
            bn: "If + present simple, will + V1 — If you call me, I will come",
            en: "If + present simple, will + V1 — If you call me, I will come",
            hi: "If + present simple, will + V1 — If you call me, I will come",
          },
          examples: [
            { wrong: "If I will get the job, I will buy a laptop.", right: "If I get the job, I will buy a laptop.", note: { bn: "Type 1 — শর্তে present simple, will শুধু ফল-অর্ধে।", en: "Type 1 — present simple in the condition; will only in the result half.", hi: "Type 1 — शर्त में present simple, will केवल नतीजे में।" } },
            { wrong: "If it will rain tomorrow, we will cancel the picnic.", right: "If it rains tomorrow, we will cancel the picnic.", note: { bn: "'যদি...তাহলে' জুটির অভ্যাস will-কে শর্ত-অর্ধেও ঢুকিয়ে দেয় — Type 1-এ শর্তে present।", en: "The যদি...তাহলে habit sneaks will into the condition half — Type 1 keeps the condition in the present.", hi: "यदि...ताहले की आदत will को शर्त-हिस्से में भी घुसा देती है — Type 1 में शर्त present में।" } },
            { wrong: "If the bus comes late, we missed the movie.", right: "If the bus comes late, we will miss the movie.", note: { bn: "Type 1 — ফল-অর্ধেও কাল লাগবেই: will + V1; past (missed) এখানে আসে না।", en: "Type 1 — the result half needs its own tense: will + V1; a past (missed) cannot sit there.", hi: "Type 1 — नतीजे-हिस्से में भी काल चाहिए: will + V1; past (missed) वहाँ नहीं आता।" } },
          ],
        },
        {
          heading: {
            bn: "🪽 Type 2 — কল্পনা: past + would, সবার জন্য were",
            en: "🪽 Type 2 — imagining: past + would, were for every person",
            hi: "🪽 Type 2 — कल्पना: past + would, सभी के लिए were",
          },
          lead: {
            bn: "এখন বাস্তব নয় এমন কল্পনা — শর্ত past রূপে, ফল would-এ।",
            en: "An imagining that is not real now — the condition in past form, the result with would.",
            hi: "अभी असली न होने वाली कल्पना — शर्त past रूप में, नतीजा would में।",
          },
          points: [
            { bn: "বর্তমানে শর্তটা **বাস্তব নয়** — কল্পনা-ইচ্ছা: If I had wings, I would fly।", en: "The condition is **not real in the present** — an imagining or wish: If I had wings, I would fly.", hi: "वर्तमान में शर्त **असली नहीं** — कल्पना-इच्छा: If I had wings, I would fly।" },
            { bn: "সূত্র: শর্ত-অর্ধে **past simple**, ফল-অর্ধে would + V1।", en: "Formula: **past simple** in the condition, would + V1 in the result.", hi: "सूत्र: शर्त-हिस्से में **past simple**, नतीजे में would + V1।" },
            { bn: "কল্পনায় সব ব্যক্তির জন্য **were** প্রথা: If I were a bird, I would fly to Cox's Bazar।", en: "In an imagining, **were** is the convention for every person: If I were a bird, I would fly to Cox's Bazar.", hi: "कल्पना में सभी persons के लिए **were** ही परंपरा: If I were a bird, I would fly to Cox's Bazar।" },
            { bn: "would শর্ত-অর্ধে ঢোকে না — If I would know ভুল, সঠিক **If I knew**।", en: "Would never enters the condition — If I would know is wrong; the correct one is **If I knew**.", hi: "would शर्त-हिस्से में नहीं घुसता — If I would know गलत, सही **If I knew**।" },
            { bn: "বাংলা 'যদি থাকতাম'-এর অনুবাদে শর্তে would বসিয়ে দেওয়াই সবচেয়ে চেনা ভুল।", en: "Translating the Bengali 'যদি থাকতাম' and parking would in the condition is the commonest slip.", hi: "बांग्ला 'यदि থাকতাম' अनुवाद में शर्त में would बिठा देना ही सबसे जाना-पहचाना भूल है।" },
            { bn: "মনে রাখুন: **If I had time** = এখন সময় নেই, তবু কল্পনা করছি।", en: "Remember: **If I had time** = no time now, yet I am imagining it.", hi: "याद रखें: **If I had time** = अब समय नहीं, फिर भी कल्पना कर रहा हूँ।" },
          ],
          formula: {
            bn: "If + past simple, would + V1 — If I had time, I would read more",
            en: "If + past simple, would + V1 — If I had time, I would read more",
            hi: "If + past simple, would + V1 — If I had time, I would read more",
          },
          examples: [
            { wrong: "If I had wings, I will fly.", right: "If I had wings, I would fly.", note: { bn: "কল্পনা → Type 2: শর্তে past, ফলে would + V1।", en: "An imagining → Type 2: past in the condition, would + V1 in the result.", hi: "कल्पना → Type 2: शर्त में past, नतीजे में would + V1।" } },
            { wrong: "If I was a bird, I would fly to Cox's Bazar.", right: "If I were a bird, I would fly to Cox's Bazar.", note: { bn: "Type 2-এর কল্পনায় সব ব্যক্তির জন্য were প্রথা।", en: "In Type 2 imagination, were is the convention for all persons.", hi: "Type 2 की कल्पना में सभी persons के लिए were ही परंपरा।" } },
            { wrong: "If I would know his number, I would call him.", right: "If I knew his number, I would call him.", note: { bn: "Type 2 — শর্ত-অর্ধ past simple (knew); would সেখানে ঢোকে না।", en: "Type 2 — the condition takes past simple (knew); would never enters there.", hi: "Type 2 — शर्त में past simple (knew); would वहाँ नहीं घुसता।" } },
          ],
        },
        {
          heading: {
            bn: "🕰️ Type 3 — না-ঘটা অতীত: had + V3 + would have + V3",
            en: "🕰️ Type 3 — an unfulfilled past: had + V3 + would have + V3",
            hi: "🕰️ Type 3 — अधूरा अतीत: had + V3 + would have + V3",
          },
          lead: {
            bn: "অতীতে ঘটেনি এমন শর্ত — আফসোসের দরজা, দুই অর্ধেই অতীত-সূত্র।",
            en: "A condition that never happened — the door of regret, with past formulas in both halves.",
            hi: "अतीत में न हुई शर्त — अफ़सोस का दरवाज़ा, दोनों हिस्सों में अतीत-सूत्र।",
          },
          points: [
            { bn: "শর্তটা অতীতে **ঘটেনি** — না-ঘটা অতীত, আফসোস: If you had asked, I would have helped।", en: "The condition **never happened** — an unfulfilled past, a regret: If you had asked, I would have helped.", hi: "शर्त अतीत में **नहीं हुई** — अधूरा अतीत, अफ़सोस: If you had asked, I would have helped।" },
            { bn: "সূত্র: শর্ত-অর্ধে **had + V3**, ফল-অর্ধে would have + V3।", en: "Formula: **had + V3** in the condition, would have + V3 in the result.", hi: "सूत्र: शर्त-हिस्से में **had + V3**, नतीजे में would have + V3।" },
            { bn: "ফল-অর্ধের **have ছাঁটা যায় না** — she would enjoyed ভুল, সঠিক she would have enjoyed।", en: "The result's **have cannot be clipped** — she would enjoyed is wrong; the correct one is she would have enjoyed.", hi: "नतीजे का **have काटा नहीं जा सकता** — she would enjoyed गलत, सही she would have enjoyed।" },
            { bn: "শর্ত অতীতের হলে ফলও অতীতের — If you had asked me (অতীত) হলে ফল I would have helped, will help নয়।", en: "A past condition demands a past result — If you had asked me (past) takes I would have helped, not will help.", hi: "शर्त अतीत की है तो नतीजा भी अतीत का — If you had asked me (अतीत) के साथ I would have helped, will help नहीं।" },
            { bn: "yesterday-সহ না-ঘটা শর্তও এই দরজাতেই: If it hadn't rained yesterday, we would have gone।", en: "An unfulfilled condition with yesterday uses this door too: If it hadn't rained yesterday, we would have gone.", hi: "yesterday के साथ अधूरी शर्त भी इसी दरवाज़े से: If it hadn't rained yesterday, we would have gone।" },
            { bn: "ফারাক মনে রাখুন: Type 2-এ past, Type 3-এ **had + V3** — দূরত্ব বদলায় কাল বদলায়।", en: "Keep the gap in mind: Type 2 takes past, Type 3 takes **had + V3** — distance changes the tense.", hi: "फ़र्क़ याद रखें: Type 2 में past, Type 3 में **had + V3** — दूरी बदलने से काल बदलता है।" },
          ],
          formula: {
            bn: "If + had + V3, would have + V3 — If you had asked, I would have helped",
            en: "If + had + V3, would have + V3 — If you had asked, I would have helped",
            hi: "If + had + V3, would have + V3 — If you had asked, I would have helped",
          },
          examples: [
            { wrong: "If she studied harder, she would have passed last year.", right: "If she had studied harder, she would have passed last year.", note: { bn: "অতীতে না-ঘটা শর্ত → Type 3: শর্তে had + V3।", en: "An unfulfilled past condition → Type 3: had + V3 in the condition.", hi: "अतीत की अधूरी शर्त → Type 3: शर्त में had + V3।" } },
            { wrong: "If she had come, she would enjoyed the show.", right: "If she had come, she would have enjoyed the show.", note: { bn: "Type 3-এর ফল = would have + V3; have ছাড়া অসম্পূর্ণ।", en: "A Type 3 result = would have + V3; incomplete without have.", hi: "Type 3 का नतीजा = would have + V3; have के बिना अधूरा।" } },
            { wrong: "If you had asked me, I will help you.", right: "If you had asked me, I would have helped you.", note: { bn: "শর্ত অতীতের (had asked) হলে ফলও অতীতের — would have + V3।", en: "A past condition (had asked) demands a past result — would have + V3.", hi: "शर्त अतीत की (had asked) है तो नतीजा भी अतीत का — would have + V3।" } },
            { wrong: "If it didn't rain yesterday, we would go to the stadium.", right: "If it hadn't rained yesterday, we would have gone to the stadium.", note: { bn: "yesterday সহ না-ঘটা শর্ত → Type 3: hadn't + V3 শর্তে, would have + V3 ফলে।", en: "An unfulfilled condition with yesterday → Type 3: hadn't + V3 in the condition, would have + V3 in the result.", hi: "yesterday के साथ अधूरी शर्त → Type 3: शर्त में hadn't + V3, नतीजे में would have + V3।" } },
          ],
        },
        {
          heading: {
            bn: "🔀 Mixed কন্ডিশনাল — অতীতের শর্ত, এখনের ফল",
            en: "🔀 Mixed conditionals — a past condition with a present result",
            hi: "🔀 Mixed कंडीशनल — अतीत की शर्त, अभी का नतीजा",
          },
          lead: {
            bn: "দুই Type-এর মেশানো বাক্য — শর্ত অতীতে ঘটেনি, ফল আজও চলছে।",
            en: "Two Types fused in one sentence — the condition never happened, the result still runs today.",
            hi: "दो Type का मिश्रित वाक्य — शर्त अतीत में नहीं हुई, नतीजा आज भी चल रहा है।",
          },
          points: [
            { bn: "**mixed conditional** — শর্ত অতীতে, ফল এখন: If I had taken that job, I would be in Dubai today।", en: "**A mixed conditional** — the condition in the past, the result now: If I had taken that job, I would be in Dubai today.", hi: "**mixed conditional** — शर्त अतीत में, नतीजा अभी: If I had taken that job, I would be in Dubai today।" },
            { bn: "সূত্র: শর্ত-অর্ধে Type 3-এর **had + V3**, ফল-অর্ধে Type 2-এর would + V1।", en: "Formula: Type 3's **had + V3** in the condition, Type 2's would + V1 in the result.", hi: "सूत्र: शर्त में Type 3 का **had + V3**, नतीजे में Type 2 का would + V1।" },
            { bn: "**now, today, this year**-এর মতো শব্দ সংকেত — এখনের ফল বোঝায়।", en: "Words like **now, today, this year** are signals — they mark a present result.", hi: "**now, today, this year** जैसे शब्द संकेत हैं — अभी का नतीजा बताते हैं।" },
            { bn: "এখনের ফলে would have + V3 বসানো ভুল — ওটা অতীতের ফলের সূত্র।", en: "Would have + V3 in a present result is wrong — that is the formula for a past result.", hi: "अभी के नतीजे में would have + V3 गलत — वह अतीत के नतीजे का सूत्र है।" },
          ],
          formula: {
            bn: "If + had + V3, would + V1 — If I had studied engineering, I would be a software engineer now",
            en: "If + had + V3, would + V1 — If I had studied engineering, I would be a software engineer now",
            hi: "If + had + V3, would + V1 — If I had studied engineering, I would be a software engineer now",
          },
          examples: [
            { wrong: "If I had studied engineering, I would have been a software engineer now.", right: "If I had studied engineering, I would be a software engineer now.", note: { bn: "অতীত-শর্ত + এখনের ফল = mixed — ফল-অর্ধে would + V1; now শব্দটাই সংকেত।", en: "Past condition + present result = mixed — would + V1 in the result; the word now is the signal.", hi: "अतीत-शर्त + अभी का नतीजा = mixed — नतीजे में would + V1; 'now' शब्द ही संकेत।" } },
          ],
        },
        {
          heading: {
            bn: "🚦 if-এর চাচাতো ভাই — unless, as long as, provided that, in case",
            en: "🚦 if's cousins — unless, as long as, provided that, in case",
            hi: "🚦 if के चचेरे भाई — unless, as long as, provided that, in case",
          },
          lead: {
            bn: "ইংরেজি প্রতি শর্তে 'if' বলে না — চার চাচাতো ভাই আর সংক্ষিপ্ত জবাবের জুটি।",
            en: "English does not say 'if' for every condition — four cousins, plus the short-answer pair.",
            hi: "अंग्रेज़ी हर शर्त पर 'if' नहीं कहती — चार चचेरे भाई, और संक्षिप्त जवाब की जोड़ी।",
          },
          points: [
            { bn: "**unless** = if not (না হলে): Unless you hurry, we will miss the bus = If you don't hurry...।", en: "**unless** = if not: Unless you hurry, we will miss the bus = If you don't hurry...", hi: "**unless** = if not (नहीं तो): Unless you hurry, we will miss the bus = If you don't hurry...।" },
            { bn: "**as long as** = যতক্ষণ/শুধুমাত্র যদি শর্ত পালিত হয়: You can stay here as long as you keep quiet।", en: "**as long as** = on the sole condition that, for as long as: You can stay here as long as you keep quiet.", hi: "**as long as** = जब तक/केवल इस शर्त पर: You can stay here as long as you keep quiet।" },
            { bn: "**provided that / providing that** = যদি এই শর্তে — লেখা-আলোচনায় বেশি: You may leave early provided that you finish the report।", en: "**provided that / providing that** = on the condition that — commoner in writing and discussion: You may leave early provided that you finish the report.", hi: "**provided that / providing that** = इस शर्त पर कि — लेखन-विमर्श में अधिक: You may leave early provided that you finish the report।" },
            { bn: "**in case** = পূর্বপ্রস্তুতি — কিছু ঘটলে যেন কাজে লাগে: Take an umbrella in case it rains।", en: "**in case** = as a precaution, so it helps if something happens: Take an umbrella in case it rains.", hi: "**in case** = पूर्व-तैयारी — कुछ हो जाए तो काम आए: Take an umbrella in case it rains।" },
            { bn: "সংক্ষিপ্ত উত্তরের জুটি: **if so** (হলে) / **if not** (না হলে)।", en: "The short-answer pair: **if so** / **if not**.", hi: "संक्षिप्त उत्तर की जोड़ी: **if so** (हो तो) / **if not** (न हो तो)।" },
            { bn: "সবগুলোর ক্লজেই একই কাল-নিয়ম — শর্ত-অর্ধে will নয়; ভবিষ্যতের শর্তে present।", en: "One tense rule runs through all of them — no will in the condition half; present for future conditions.", hi: "सबके क्लॉज़ में वही काल-नियम — शर्त-हिस्से में will नहीं; भविष्य की शर्त में present।" },
          ],
          table: {
            head: [
              { bn: "শব্দ", en: "Word", hi: "शब्द" },
              { bn: "অর্থ", en: "Meaning", hi: "अर्थ" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [
                { bn: "unless", en: "unless", hi: "unless" },
                { bn: "if not — না হলে", en: "if not", hi: "if not — नहीं तो" },
                { bn: "Unless you hurry, we will miss the bus", en: "Unless you hurry, we will miss the bus", hi: "Unless you hurry, we will miss the bus" },
              ],
              [
                { bn: "as long as", en: "as long as", hi: "as long as" },
                { bn: "যতক্ষণ শর্ত পালিত হচ্ছে", en: "while the condition holds", hi: "जब तक शर्त पालित है" },
                { bn: "You can stay as long as you keep quiet", en: "You can stay as long as you keep quiet", hi: "You can stay as long as you keep quiet" },
              ],
              [
                { bn: "provided that", en: "provided that", hi: "provided that" },
                { bn: "যদি এই শর্তে (আনুষ্ঠানিক)", en: "on the condition that (formal)", hi: "इस शर्त पर कि (औपचारिक)" },
                { bn: "You may leave early provided that you finish the report", en: "You may leave early provided that you finish the report", hi: "You may leave early provided that you finish the report" },
              ],
              [
                { bn: "in case", en: "in case", hi: "in case" },
                { bn: "আগে প্রস্তুতি — if নয়", en: "preparation first — not if", hi: "पहले तैयारी — if नहीं" },
                { bn: "Take an umbrella in case it rains", en: "Take an umbrella in case it rains", hi: "Take an umbrella in case it rains" },
              ],
            ],
          },
          examples: [
            { wrong: "Unless you don't hurry, we will miss the train.", right: "Unless you hurry, we will miss the train.", note: { bn: "unless-এর ভেতরেই not বসে আছে; আর একটা don't অর্থ উল্টে দেয়।", en: "unless already carries not inside it; an extra don't flips the meaning.", hi: "unless के भीतर ही not है; अतिरिक्त don't अर्थ उलट देता है।" } },
            { wrong: "Take a jacket unless it gets cold.", right: "Take a jacket in case it gets cold.", note: { bn: "পূর্বপ্রস্তুতি → in case; unless বললে অর্থ দাঁড়ায় 'শীত না হলে জ্যাকেট নাও'।", en: "Precaution → in case; unless would mean 'take a jacket if it does NOT get cold'.", hi: "पूर्व-तैयारी → in case; unless कहने पर अर्थ होगा 'ठंड न हो तो जैकेट लो'।" } },
            { wrong: "You can keep the book as long you return it.", right: "You can keep the book as long as you return it.", note: { bn: "as long as — as দুবারই লাগবে।", en: "as long as — the second as is compulsory.", hi: "as long as — दूसरा as भी ज़रूरी।" } },
            { wrong: "You may leave early provided that you will finish the report tomorrow.", right: "You may leave early provided that you finish the report tomorrow.", note: { bn: "শর্ত-ক্লজে কাল এক ধাপ সাধারণ — ভবিষ্যতের শর্তে present; will নয়।", en: "The condition clause stays one step plainer — present for a future condition; no will.", hi: "शर्त-क्लॉज़ का काल एक कदम सादा रहता है — भविष्य की शर्त में present; will नहीं।" } },
            { wrong: "Is the office open? If yes, I will drop the file.", right: "Is the office open? If so, I will drop the file.", note: { bn: "'if yes' বেমানান — হলে/না হলে = if so / if not।", en: "'If yes' is not idiomatic — 'if so' covers it, paired with 'if not'.", hi: "'if yes' अप्रचलित है — 'if so' कहें, साथ में 'if not'।" } },
          ],
        },
        {
          heading: {
            bn: "🧭 চার ভাইয়ের সূক্ষ্ম ফারাক — unless, as long as, provided that, in case গভীরে",
            en: "🧭 The fine gaps between the four — unless, as long as, provided that, in case in depth",
            hi: "🧭 चारों भाइयों के सूक्ष्म फ़र्क़ — unless, as long as, provided that, in case गहराई में",
          },
          lead: {
            bn: "চার ভাইয়ের আসল চরিত্র — কোথায় নেগেটিভ নিষেধ, কোথায় কাল বদলায়।",
            en: "The cousins' real characters — where negatives are banned and where the tense shifts.",
            hi: "चारों भाइयों का असली स्वभाव — कहाँ नकार मना है, कहाँ काल बदलता है।",
          },
          points: [
            { bn: "unless কার্যত সবসময় **পজিটিভ ক্রিয়া** চায় — হুমকি-সতর্কবার্তায় ঘন: You won't pass unless you revise the chapters।", en: "unless practically always takes a **positive verb** — it thrives in warnings: You won't pass unless you revise the chapters.", hi: "unless लगभग सदा **सकारात्मक क्रिया** लेता है — चेतावनियों में घना: You won't pass unless you revise the chapters।" },
            { bn: "unless-ক্লজে **will/would বসে না** — শর্ত-অর্ধ বাকি if-বাক্যের মতোই কাল মানে।", en: "**No will/would sits inside an unless-clause** — the condition half follows the same tense rules as if.", hi: "unless-क्लॉज़ में **will/would नहीं बैठता** — शर्त-हिस्सा if-वाक्य जैसे ही काल मानता है।" },
            { bn: "**as long as** শর্ত-পালনের সময়সীমা বোঝায় — শর্ত ভাঙলে অনুমতিও ভাঙে: You can borrow my bike as long as you bring it back by Sunday।", en: "**as long as** carries the time-span of the condition — break the condition and the permission breaks too: You can borrow my bike as long as you bring it back by Sunday.", hi: "**as long as** शर्त-पालन की समय-सीमा बताता है — शर्त टूटी तो अनुमति भी टूटती है: You can borrow my bike as long as you bring it back by Sunday।" },
            { bn: "ভবিষ্যতের বাস্তব শর্ত হলে ফল-অর্ধ **will-ঘরানার** — would কল্পনা বানিয়ে ফেলে।", en: "With a real future condition the result half belongs to the **will-family** — would would paint it imaginary.", hi: "वास्तविक भविष्य-शर्त हो तो नतीजा **will-परिवार** का — would कल्पना बना देगा।" },
            { bn: "**provided that + পূর্ণ ক্লজ** — to-ইনফিনিটিভ নয়: provided that you return it।", en: "**provided that + a full clause** — never a to-infinitive: provided that you return it.", hi: "**provided that + पूरा क्लॉज़** — to-इनफिनिटिव नहीं: provided that you return it।" },
            { bn: "**in case**-এর দুই ফর্ম: ভবিষ্যতের প্রস্তুতিতে present (I will note the address in case I forget), অতীতের প্রস্তুতিতে past (I took a map in case I got lost)।", en: "**in case** has two shapes: present for future preparation (I will note the address in case I forget), past for past preparation (I took a map in case I got lost).", hi: "**in case** के दो रूप: भविष्य की तैयारी में present (I will note the address in case I forget), अतीत की तैयारी में past (I took a map in case I got lost)।" },
            { bn: "সবচেয়ে জরুরি ফারাক: **in case ≠ if** — in case আগে প্রস্তুতি, if পরে ফল: I will buy insurance in case I fall ill বনাম If I fall ill, I will see a doctor।", en: "The sharpest line: **in case ≠ if** — in case is preparation first, if is consequence later: I will buy insurance in case I fall ill vs If I fall ill, I will see a doctor.", hi: "सबसे तेज़ फ़र्क़: **in case ≠ if** — in case पहले तैयारी, if बाद में परिणाम: I will buy insurance in case I fall ill बनाम If I fall ill, I will see a doctor।" },
          ],
          formula: {
            bn: "in case = আগে প্রস্তুতি • if = ঘটলে তবে ফল — দুটো বিনিময়যোগ্য নয়",
            en: "in case = preparation first • if = consequence later — they are not interchangeable",
            hi: "in case = पहले तैयारी • if = बाद में परिणाम — दोनों आदान-प्रदान योग्य नहीं",
          },
          examples: [
            { wrong: "You will not pass unless you will revise the chapters.", right: "You will not pass unless you revise the chapters.", note: { bn: "unless-ক্লজে will নয় — শর্ত-অর্ধ বাকি if-বাক্যের মতোই কাল মানে।", en: "No will inside an unless-clause — the condition half follows the same tense rules as if.", hi: "unless-क्लॉज़ में will नहीं — शर्त-हिस्सा if-वाक्य जैसे ही काल मानता है।" } },
            { wrong: "I took the receipt in case I will need it.", right: "I took the receipt in case I needed it.", note: { bn: "অতীতের প্রস্তুতি → in case + past; 'will need' ভবিষ্যৎ-চিহ্ন এখানে আসে না।", en: "Past preparation → in case + past; 'will need' cannot mark the future here.", hi: "अतीत की तैयारी → in case + past; 'will need' यहाँ भविष्य-चिह्न नहीं।" } },
            { wrong: "As long as it doesn't rain tomorrow, we would have the match outdoors.", right: "As long as it doesn't rain tomorrow, we will have the match outdoors.", note: { bn: "ভবিষ্যতের বাস্তব শর্ত → Type 1-ঘরানার ফল: will; would কল্পনা বোঝায়।", en: "A real future condition → a Type 1 result: will; would would paint it imaginary.", hi: "वास्तविक भविष्य-शर्त → Type 1 जैसा नतीजा: will; would कल्पना बताएगा।" } },
            { wrong: "Bring the charger unless your phone dies.", right: "Bring the charger in case your phone dies.", note: { bn: "অর্থটা 'ফোন মরে গেলে যেন কাজে লাগে' → in case; unless অর্থ উল্টে দেয়।", en: "The meaning is 'so it helps if the phone dies' → in case; unless reverses it.", hi: "अर्थ है 'फ़ोन मर जाए तो काम आए' → in case; unless अर्थ पलट देगा।" } },
            { wrong: "You can borrow my pen provided to return it.", right: "You can borrow my pen provided that you return it.", note: { bn: "provided that + পূর্ণ ক্লজ; 'to return' ইনফিনিটিভ এখানে বসে না।", en: "provided that + a full clause; a to-infinitive cannot sit here.", hi: "provided that + पूरा क्लॉज़; 'to return' इनफिनिटिव यहाँ नहीं बैठता।" } },
          ],
        },
        {
          heading: {
            bn: "🪞 wish + past / past perfect — আফসোসের ব্যাকরণ, আর would rather",
            en: "🪞 wish + past / past perfect — the grammar of regret, and would rather",
            hi: "🪞 wish + past / past perfect — अफ़सोस का व्याकरण, और would rather",
          },
          lead: {
            bn: "wish মানে বাস্তবের বিপরীত ইচ্ছা — ভেতরের কাল বাস্তব থেকে এক ধাপ পিছিয়ে।",
            en: "wish means a wish against reality — its tense sits one step back from the real world.",
            hi: "wish का मतलब वास्तविकता के विरुद्ध इच्छा — भीतर का काल असल दुनिया से एक कदम पीछे।",
          },
          points: [
            { bn: "**wish** = বাস্তবের বিপরীত ইচ্ছা — ভেতরের কাল বাস্তবের চেয়ে সবসময় এক ধাপ পিছিয়ে।", en: "**wish** = a wish against reality — its inner tense always sits one step back from reality.", hi: "**wish** = वास्तविकता के विरुद्ध इच्छा — भीतर का काल वास्तविकता से सदा एक कदम पीछे।" },
            { bn: "এখনের আফসোস → **wish + past simple**: I wish I had a camera (এখন নেই), I wish I knew the answer (জানি না)।", en: "Regret about now → **wish + past simple**: I wish I had a camera (no camera now), I wish I knew the answer (I don't).", hi: "अभी का अफ़सोस → **wish + past simple**: I wish I had a camera (अभी नहीं है), I wish I knew the answer (नहीं जानता)।" },
            { bn: "অতীত আফসোস → **wish + past perfect**: I wish I had studied medicine (পড়িনি), I wish I had known the answer yesterday।", en: "Regret about the past → **wish + past perfect**: I wish I had studied medicine (I didn't), I wish I had known the answer yesterday.", hi: "अतीत का अफ़सोस → **wish + past perfect**: I wish I had studied medicine (नहीं पढ़ा), I wish I had known the answer yesterday।" },
            { bn: "সব ব্যক্তির জন্য **were**: I wish I were taller, I wish he were here।", en: "**were** for every person: I wish I were taller, I wish he were here.", hi: "सभी persons के लिए **were**: I wish I were taller, I wish he were here।" },
            { bn: "অন্যের আচরণ বদলাতে চাইলে **wish + subject + would**: I wish my brother would stop smoking।", en: "To wish someone else's behaviour would change → **wish + subject + would**: I wish my brother would stop smoking.", hi: "दूसरे का व्यवहार बदलने की इच्छा → **wish + subject + would**: I wish my brother would stop smoking।" },
            { bn: "নিজের পছন্দে **would rather + V1**: I would rather stay home tonight — to stay নয়।", en: "For your own preference, **would rather + V1**: I would rather stay home tonight — not to stay.", hi: "अपनी पसंद के लिए **would rather + V1**: I would rather stay home tonight — to stay नहीं।" },
            { bn: "অন্যের আচরণের পছন্দে **would rather + subject + past**: I would rather you didn't tell anyone — রূপ অতীত, ভাব এখনের।", en: "For someone else's behaviour, **would rather + subject + past**: I would rather you didn't tell anyone — past in form, present in feeling.", hi: "दूसरे के व्यवहार की पसंद में **would rather + subject + past**: I would rather you didn't tell anyone — रूप past, भाव अभी का।" },
          ],
          table: {
            head: [
              { bn: "ভাব", en: "Meaning", hi: "भाव" },
              { bn: "গঠন", en: "Structure", hi: "गठन" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [
                { bn: "এখনের আফসোস", en: "regret about now", hi: "अभी का अफ़सोस" },
                { bn: "wish + past simple", en: "wish + past simple", hi: "wish + past simple" },
                { bn: "I wish I had a camera", en: "I wish I had a camera", hi: "I wish I had a camera" },
              ],
              [
                { bn: "অতীতের আফসোস", en: "regret about the past", hi: "अतीत का अफ़सोस" },
                { bn: "wish + past perfect", en: "wish + past perfect", hi: "wish + past perfect" },
                { bn: "I wish I had studied medicine", en: "I wish I had studied medicine", hi: "I wish I had studied medicine" },
              ],
              [
                { bn: "কল্পনার were", en: "unreal were", hi: "कल्पना का were" },
                { bn: "wish + were (সব ব্যক্তি)", en: "wish + were (every person)", hi: "wish + were (सभी persons)" },
                { bn: "I wish I were taller", en: "I wish I were taller", hi: "I wish I were taller" },
              ],
              [
                { bn: "অন্যের আচরণ বদলাক", en: "others' behaviour changing", hi: "दूसरे का व्यवहार बदले" },
                { bn: "wish + subject + would", en: "wish + subject + would", hi: "wish + subject + would" },
                { bn: "I wish my brother would stop smoking", en: "I wish my brother would stop smoking", hi: "I wish my brother would stop smoking" },
              ],
              [
                { bn: "নিজের পছন্দ", en: "your own preference", hi: "अपनी पसंद" },
                { bn: "would rather + V1", en: "would rather + V1", hi: "would rather + V1" },
                { bn: "I would rather stay home tonight", en: "I would rather stay home tonight", hi: "I would rather stay home tonight" },
              ],
              [
                { bn: "অন্যের আচরণের পছন্দ", en: "preference about others' behaviour", hi: "दूसरे के व्यवहार की पसंद" },
                { bn: "would rather + subject + past", en: "would rather + subject + past", hi: "would rather + subject + past" },
                { bn: "I would rather you didn't tell anyone", en: "I would rather you didn't tell anyone", hi: "I would rather you didn't tell anyone" },
              ],
            ],
          },
          formula: {
            bn: "wish + past (এখনের আফসোস) • wish + past perfect (অতীতের আফসোস) • wish + would (অন্যের আচরণ)",
            en: "wish + past (regret now) • wish + past perfect (regret about the past) • wish + would (others' behaviour)",
            hi: "wish + past (अभी का अफ़सोस) • wish + past perfect (अतीत का अफ़सोस) • wish + would (दूसरे का व्यवहार)",
          },
          examples: [
            { wrong: "I wish I have a better phone.", right: "I wish I had a better phone.", note: { bn: "বর্তমান আফসোস → wish + past; বাংলা 'থাকল ভালো হত'-এর অতীত-ভাবই সূত্র।", en: "Regret about now → wish + past; the past-flavour of 'had it been' IS the formula.", hi: "अभी का अफ़सोस → wish + past; 'होता तो अच्छा' का अतीत-भाव ही सूत्र है।" } },
            { wrong: "I wish I studied harder when I was in college.", right: "I wish I had studied harder when I was in college.", note: { bn: "অতীত আফসোস → wish + past perfect; 'পড়িনি' মানে had studied।", en: "Past regret → wish + past perfect; 'didn't study' becomes had studied.", hi: "अतीत का अफ़सोस → wish + past perfect; 'पढ़ा नहीं' बनेगा had studied।" } },
            { wrong: "I wish I was tall.", right: "I wish I were tall.", note: { bn: "wish-এর পরে were সব ব্যক্তির জন্য — লেখার ভাষায় প্রথা।", en: "After wish, were serves every person — the standard in writing.", hi: "wish के बाद were सभी persons के लिए — लिखित भाषा का मानक।" } },
            { wrong: "I wish my neighbour will turn down the music.", right: "I wish my neighbour would turn down the music.", note: { bn: "অন্যের আচরণ বদলানোর ইচ্ছা → wish + would; will আসে না।", en: "Wishing someone else's behaviour would change → wish + would; will never enters.", hi: "दूसरे का व्यवहार बदलने की इच्छा → wish + would; will नहीं आता।" } },
            { wrong: "I would rather to walk than take the bus.", right: "I would rather walk than take the bus.", note: { bn: "would rather + V1 (base); 'to walk' নয়।", en: "would rather + V1 (the base form); not 'to walk'.", hi: "would rather + V1 (base form); 'to walk' नहीं।" } },
          ],
        },
        {
          heading: {
            bn: "🕳️ গোপন শর্ত — without, otherwise, if so/if not",
            en: "🕳️ Hidden conditions — without, otherwise, if so/if not",
            hi: "🕳️ छिपी हुई शर्तें — without, otherwise, if so/if not",
          },
          lead: {
            bn: "if শব্দ নেই, অথচ শর্ত-ইঞ্জিন জ্বলছে — implied conditional-এর পৃথিবী।",
            en: "No if in sight, yet the condition-engine burns — the world of implied conditionals.",
            hi: "if शब्द नहीं, फिर भी शर्त-इंजन जल रहा है — implied conditional की दुनिया।",
          },
          points: [
            { bn: "**without + noun** = if there were/had been no...: Without your help, I would have failed = If you hadn't helped me...।", en: "**without + noun** = if there were/had been no...: Without your help, I would have failed = If you hadn't helped me...", hi: "**without + संज्ञा** = if there were/had been no...: Without your help, I would have failed = If you hadn't helped me...।" },
            { bn: "ক্রিয়া সময় দেখে: বর্তমান শর্তে **would** — Without air, we would die।", en: "The verb follows the time: **would** for a present condition — Without air, we would die.", hi: "क्रिया समय के अनुसार: वर्तमान शर्त में **would** — Without air, we would die।" },
            { bn: "অতীত শর্তে **would have + V3** — Without the map you gave us, we would have lost our way।", en: "**would have + V3** for a past condition — Without the map you gave us, we would have lost our way.", hi: "अतीत शर्त में **would have + V3** — Without the map you gave us, we would have lost our way।" },
            { bn: "**otherwise** = নাহলে/না হলে: Hurry up; otherwise you will miss the bus।", en: "**otherwise** = or else: Hurry up; otherwise you will miss the bus.", hi: "**otherwise** = नहीं तो: Hurry up; otherwise you will miss the bus।" },
            { bn: "অতীতে: I was busy; otherwise **I would have come**।", en: "In the past: I was busy; otherwise **I would have come**.", hi: "अतीत में: I was busy; otherwise **I would have come**।" },
            { bn: "সংক্ষিপ্ত জবাবে **if so / if not**: It may rain tonight. If so, we will stay in; if not, we will walk to the market।", en: "The short-answer pair **if so / if not**: It may rain tonight. If so, we will stay in; if not, we will walk to the market.", hi: "संक्षिप्त जवाब में **if so / if not**: It may rain tonight. If so, we will stay in; if not, we will walk to the market।" },
          ],
          formula: {
            bn: "without/otherwise → would (এখনের শর্ত) • would have + V3 (অতীতের শর্ত)",
            en: "without/otherwise → would (present condition) • would have + V3 (past condition)",
            hi: "without/otherwise → would (वर्तमान शर्त) • would have + V3 (अतीत शर्त)",
          },
          examples: [
            { wrong: "I was ill yesterday; otherwise I will attend the meeting.", right: "I was ill yesterday; otherwise I would have attended the meeting.", note: { bn: "অতীতের গোপন শর্ত → would have + V3; will ভবিষ্যতের সঙ্গী, অতীতের নয়।", en: "A hidden past condition → would have + V3; will belongs to the future, not the past.", hi: "अतीत की छिपी शर्त → would have + V3; will भविष्य का साथी, अतीत का नहीं।" } },
            { wrong: "Without the map you gave us, we would lose our way that night.", right: "Without the map you gave us, we would have lost our way that night.", note: { bn: "without + noun অতীতের শর্ত বোঝালে ফলও অতীতের — would have + V3।", en: "If without + noun paints a past condition, the result goes past too — would have + V3.", hi: "without + संज्ञा अतीत की शर्त दिखाए तो नतीजा भी अतीत का — would have + V3।" } },
            { wrong: "It might snow tonight. If yes, the road will close.", right: "It might snow tonight. If so, the road will close.", note: { bn: "if so / if not — 'if yes' ইংরেজিতে নেই।", en: "if so / if not — 'if yes' does not exist in English.", hi: "if so / if not — 'if yes' अंग्रेज़ी में नहीं।" } },
          ],
        },
        {
          heading: {
            bn: "⚠️ বাঙালি শিক্ষার্থীদের কমন ভুল — তিন ফাঁদ, তিন সমাধান",
            en: "⚠️ Common mistakes by Bengali speakers — three traps, three fixes",
            hi: "⚠️ बांग्लाभाषी विद्यार्थियों की आम गलतियाँ — तीन जाल, तीन इलाज",
          },
          lead: {
            bn: "বাংলা যদি...তাহলে অভ্যাসের তিন ফাঁদ — আর প্রতিটার হাতে-কলমে সমাধান।",
            en: "Three traps of the Bengali যদি...তাহলে habit — each with a hands-on fix.",
            hi: "बांग्ला यदि...ताहले आदत के तीन जाल — हर एक का व्यावहारिक इलाज।",
          },
          points: [
            { bn: "ফাঁদ ১ — বাংলা **যদি...তাহলে দুই-দিক-চিহ্নিত** জুটি: দুই অর্ধেই ভবিষ্যৎ-চিহ্ন বসে; শিক্ষার্থীরা বানায় If you will come, then I will go।", en: "Trap one — the Bengali **যদি...তাহলে pair marks both halves** with future signs; learners build If you will come, then I will go.", hi: "जाल १ — बांग्ला **यदि...তাহলे दोनों ओर चिह्नित**: दोनों हिस्सों में भविष्य-चिह्न; विद्यार्थी बनाते हैं If you will come, then I will go।" },
            { bn: "ইংরেজি এক দিকেই চিহ্ন দেয় — শর্ত-অর্ধ **present**, ফল-অর্ধ will; 'then'-ও বাদ।", en: "English marks only one side — the condition half stays **present**, the result takes will, and 'then' drops out.", hi: "अंग्रेज़ी एक ही ओर चिह्न देती है — शर्त-हिस्सा **present**, नतीजा will लेता है; 'then' भी गिरता है।" },
            { bn: "ফাঁদ ২ — **কাল-ড্রিফট**: বাংলা অর্থ ('যদি থাকতাম') অনুবাদে শর্তে would বসিয়ে দেয় — If I would have time।", en: "Trap two — **tense drift**: the Bengali sense ('যদি থাকতাম') parks would in the condition — If I would have time.", hi: "जाल २ — **काल-खिसकाव**: बांग्ला अर्थ ('यदि থাকতাম') अनुवाद में शर्त में would बिठा देता है — If I would have time।" },
            { bn: "উল্টো দিকেও ড্রিফট — ফল-অর্ধ বর্তমানে আটকে থাকে: If I had money, I buy a car।", en: "The drift runs the other way too — the result strands in the present: If I had money, I buy a car.", hi: "खिसकाव दूसरी ओर भी — नतीजा वर्तमान में अटक जाता है: If I had money, I buy a car।" },
            { bn: "সমাধান: শর্ত-অর্ধ চিনে নিন — ওখানে **কখনো will/would আসে না**।", en: "The fix: identify the condition half — **will/would never enter it**.", hi: "इलाज: शर्त-हिस्सा पहचानें — वहाँ **कभी will/would नहीं आता**।" },
            { bn: "ফাঁদ ৩ — বাংলা অর্থের কাল wish-এর ভেতরে ঢুকে পড়ে: 'ইচ্ছে করছি থাকত' → I wish I have।", en: "Trap three — the Bengali meaning smuggles its tense into wish: 'ইচ্ছে করছি থাকত' → I wish I have.", hi: "जाल ३ — बांग्ला अर्थ का काल wish के भीतर घुस जाता है: 'ইচ্ছে করছি থাকত' → I wish I have।" },
            { bn: "মনে রাখুন: wish-এর ভেতরের কাল বাস্তবের চেয়ে সবসময় **এক ধাপ পিছিয়ে** — থাকা চাইলেও had।", en: "Remember: the tense inside wish always sits **one step behind reality** — even for having, say had.", hi: "याद रखें: wish के भीतर का काल वास्तविकता से सदा **एक कदम पीछे** — रखने की इच्छा में भी had।" },
          ],
          examples: [
            { wrong: "If you will come to Dhaka, then I will pick you up.", right: "If you come to Dhaka, I will pick you up.", note: { bn: "শর্তে will নয়; 'then'ও অযথা — এক দিকেই ভবিষ্যৎ-চিহ্ন।", en: "No will in the condition; 'then' is dead weight — only one half carries the future sign.", hi: "शर्त में will नहीं; 'then' भी फ़ालतू — केवल एक हिस्से पर भविष्य-चिह्न।" } },
            { wrong: "If I would have time, I would visit you.", right: "If I had time, I would visit you.", note: { bn: "শর্ত-অর্ধ past simple; would শুধু ফল-অর্ধে।", en: "The condition takes past simple; would lives only in the result.", hi: "शर्त-हिस्सा past simple; would केवल नतीजे में।" } },
            { wrong: "If I had money, I buy a car.", right: "If I had money, I would buy a car.", note: { bn: "কল্পনা → ফল-অর্ধ would + V1; বর্তমান (buy) আটকে থাকা ভুল।", en: "An imagining → would + V1 in the result; stranding it in the present (buy) is the error.", hi: "कल्पना → नतीजे में would + V1; वर्तमान (buy) में अटकाना गलती।" } },
            { wrong: "I wish I have a laptop.", right: "I wish I had a laptop.", note: { bn: "wish + past — 'have' নয়; বাস্তব থেকে এক ধাপ পিছিয়ে।", en: "wish + past — not 'have'; one step behind reality.", hi: "wish + past — 'have' नहीं; वास्तविकता से एक कदम पीछे।" } },
            { wrong: "If he had come, I would give him the book.", right: "If he had come, I would have given him the book.", note: { bn: "শর্ত অতীতে (had come) → ফলও অতীতের: would have + V3।", en: "A past condition (had come) → a past result: would have + V3.", hi: "शर्त अतीत में (had come) → नतीजा भी अतीत का: would have + V3।" } },
          ],
        },
        {
          heading: {
            bn: "🗣️ ছোট গল্পে দেখা যাক — রাফির ইন্টারভিউ-সকাল",
            en: "🗣️ A short story to see it all — Rafi's interview morning",
            hi: "🗣️ एक छोटी कहानी में सब देखें — राफ़ी का इंटरव्यू-सुबह",
          },
          lead: {
            bn: "এক ইন্টারভিউ-সকালে পাঠের সাত রূপ কাজ করছে — গল্পে চোখ বুলান।",
            en: "Seven forms of the lesson at work in one interview morning — read the story.",
            hi: "एक इंटरव्यू-सुबह में पाठ के सात रूप काम कर रहे हैं — कहानी पढ़ें।",
          },
          points: [
            { bn: "মা রান্নাঘর থেকে: **If the interview goes well, we will order biryani tonight!** — Type 1।", en: "From the kitchen his mother calls: **If the interview goes well, we will order biryani tonight!** — Type 1.", hi: "रसोई से माँ ने कहा: **If the interview goes well, we will order biryani tonight!** — Type 1।" },
            { bn: "আয়নার সামনে রাফি: I wish **I had revised** the company profile last night — অতীত আফসোস।", en: "Standing at the mirror, Rafi thinks: I wish **I had revised** the company profile last night — a past regret.", hi: "आईने के सामने राफ़ी: I wish **I had revised** the company profile last night — अतीत अफ़सोस।" },
            { bn: "আরও: If I had prepared better, I would not be this nervous **now** — mixed (অতীত শর্ত, এখনের ফল)।", en: "And: If I had prepared better, I would not be this nervous **now** — mixed (past condition, present result).", hi: "और: If I had prepared better, I would not be this nervous **now** — mixed (अतीत शर्त, अभी का नतीजा)।" },
            { bn: "ব্যাগে ছাতা ভরতে ভরতে মা: Take the metro **in case** the roads are jammed — পূর্বপ্রস্তুতি।", en: "Stuffing an umbrella into his bag, his mother adds: Take the metro **in case** the roads are jammed — precaution.", hi: "बैग में छाता ठूँसते हुए माँ: Take the metro **in case** the roads are jammed — पूर्व-तैयारी।" },
            { bn: "দরজায় রাফি: **Unless** they call me by noon, I will assume it is a no — না হলে।", en: "At the door Rafi muses: **Unless** they call me by noon, I will assume it is a no — if not.", hi: "दरवाज़े पर राफ़ी: **Unless** they call me by noon, I will assume it is a no — नहीं तो।" },
            { bn: "বোর্ডের প্রশ্ন: Would you relocate if the team needed you in Delhi? — **Provided that** the package matches, I would।", en: "The board asks: Would you relocate if the team needed you in Delhi? — **Provided that** the package matches, I would.", hi: "बोर्ड का सवाल: Would you relocate if the team needed you in Delhi? — **Provided that** the package matches, I would।" },
            { bn: "সন্ধ্যায় বন্ধুকে: If I get this job, I will treat you. **Otherwise**, coffee on me anyway!", en: "In the evening he texts a friend: If I get this job, I will treat you. **Otherwise**, coffee on me anyway!", hi: "शाम को दोस्त को लिखा: If I get this job, I will treat you. **Otherwise**, coffee on me anyway!" },
            { bn: "দেখুন — Type 1, wish, mixed, in case, unless, provided that, otherwise: সাত রূপ এক সকালে।", en: "Notice — Type 1, wish, mixed, in case, unless, provided that, otherwise: seven forms in one morning.", hi: "देखें — Type 1, wish, mixed, in case, unless, provided that, otherwise: सात रूप एक सुबह में।" },
          ],
          examples: [
            { wrong: "If the interview will go well, we will order biryani.", right: "If the interview goes well, we will order biryani.", note: { bn: "Type 1 — শর্তে present, ফলে will।", en: "Type 1 — present in the condition, will in the result.", hi: "Type 1 — शर्त में present, नतीजे में will।" } },
            { wrong: "I wish I revised the profile last night.", right: "I wish I had revised the profile last night.", note: { bn: "অতীত আফসোস → wish + past perfect; শুধু past (revised) নয়।", en: "A past regret → wish + past perfect; plain past (revised) is not enough.", hi: "अतीत का अफ़सोस → wish + past perfect; सादा past (revised) नहीं चलेगा।" } },
            { wrong: "Take the metro unless the roads are jammed.", right: "Take the metro in case the roads are jammed.", note: { bn: "পূর্বপ্রস্তুতি → in case; unless অর্থ উল্টে 'জ্যাম না হলে নাও' করে দেয়।", en: "Precaution → in case; unless would twist it into 'take it if the roads are NOT jammed'.", hi: "पूर्व-तैयारी → in case; unless अर्थ पलटकर 'जैम न हो तो लो' कर देगा।" } },
            { wrong: "If I get this job, I treat you.", right: "If I get this job, I will treat you.", note: { bn: "Type 1-এর ফল-অর্ধে কাল লাগবেই — will + V1।", en: "A Type 1 result needs its own tense — will + V1.", hi: "Type 1 के नतीजे-हिस्से में काल चाहिए — will + V1।" } },
          ],
        },
        {
          heading: {
            bn: "📖 এক নজরে — পুরো পাঠ পাঁচ সূত্রে",
            en: "📖 At a glance — the whole lesson in five formulas",
            hi: "📖 एक नज़र में — पूरा पाठ पाँच सूत्रों में",
          },
          lead: {
            bn: "স্ক্যান করার জন্য সাজানো সারমর্ম — অনুশীলনের আগে পাঁচ লাইনে ফেরত পড়ুন।",
            en: "An essence built for scanning — five lines to re-read before practice.",
            hi: "स्कैन के लिए सजा सार — अभ्यास से पहले पाँच पंक्तियाँ दोहरा लें।",
          },
          points: [
            { bn: "**চার দরজা**: Type 0 = present + present (সবসময় সত্য); Type 1 = present + will (ভবিষ্যতে সম্ভাব্য); Type 2 = past + would (কল্পনা); Type 3 = had + V3 + would have + V3 (না-ঘটা অতীত)।", en: "**Four doors**: Type 0 = present + present (always true); Type 1 = present + will (possible in the future); Type 2 = past + would (imagining); Type 3 = had + V3 + would have + V3 (an unfulfilled past).", hi: "**चार दरवाज़े**: Type 0 = present + present (हमेशा सत्य); Type 1 = present + will (भविष्य में संभव); Type 2 = past + would (कल्पना); Type 3 = had + V3 + would have + V3 (अधूरा अतीत)।" },
            { bn: "শর্ত-অর্ধে **will/would কখনো নয়** — বাংলা যদি...তাহলে দুই দিকে চিহ্ন দেয়, ইংরেজি এক দিকে।", en: "**No will/would in the condition half** — the Bengali যদি...তাহলে marks both sides; English marks one.", hi: "शर्त-हिस्से में **will/would कभी नहीं** — बांग्ला यदि...তাহले दोनों ओर चिह्न देता है, अंग्रेज़ी एक ओर।" },
            { bn: "**if-বিকল্প**: unless (if not — ভেতরে আর নেগেটিভ নয়), as long as (যতক্ষণ শর্ত পালিত), provided that (যদি এই শর্তে), in case (আগে প্রস্তুতি — if নয়)।", en: "**Alternatives to if**: unless (if not — no extra negative inside), as long as (while the condition holds), provided that (on the condition that), in case (preparation first — not if).", hi: "**if के विकल्प**: unless (if not — भीतर और नकार नहीं), as long as (जब तक शर्त पालित), provided that (इस शर्त पर कि), in case (पहले तैयारी — if नहीं)।" },
            { bn: "**wish** + past = এখনের আফসোস; wish + past perfect = অতীতের আফসোস; সব ব্যক্তির জন্য were; অন্যের আচরণে wish + would।", en: "**wish** + past = regret about now; wish + past perfect = regret about the past; were for every person; wish + would for others' behaviour.", hi: "**wish** + past = अभी का अफ़सोस; wish + past perfect = अतीत का अफ़सोस; सभी persons के लिए were; दूसरों के व्यवहार पर wish + would।" },
            { bn: "পছন্দে **would rather + V1**; অন্যের আচরণে would rather + subject + past।", en: "For preference, **would rather + V1**; for someone else's behaviour, would rather + subject + past.", hi: "पसंद में **would rather + V1**; दूसरे के व्यवहार पर would rather + subject + past।" },
            { bn: "**গোপন শর্ত**: without আর otherwise চায় would (এখন) / would have + V3 (অতীত); অতীত-শর্ত + এখন-ফল = mixed; সংক্ষেপে if so / if not।", en: "**Hidden conditions**: without and otherwise demand would (now) / would have + V3 (past); a past condition with a present result = mixed; in short answers, if so / if not.", hi: "**छिपी शर्तें**: without और otherwise would (अभी) / would have + V3 (अतीत) माँगते हैं; अतीत-शर्त + अभी-नतीजा = mixed; संक्षेप में if so / if not।" },
          ],
          examples: [
            { wrong: "If it will snow, the match stops.", right: "If it snows, the match stops.", note: { bn: "শর্ত-অর্ধে will নয় — Type 1।", en: "No will in the condition half — Type 1.", hi: "शर्त-हिस्से में will नहीं — Type 1।" } },
            { wrong: "Unless you don't pay the fee, you cannot sit for the exam.", right: "Unless you pay the fee, you cannot sit for the exam.", note: { bn: "unless-এর ভেতরেই not — দ্বিগুণ নেগেটিভ অর্থ উল্টে দেয়।", en: "not already lives inside unless — a second negative flips the meaning.", hi: "not पहले से unless के भीतर है — दूसरा नकार अर्थ पलट देता है।" } },
            { wrong: "I wish I knew the answer yesterday.", right: "I wish I had known the answer yesterday.", note: { bn: "yesterday = অতীত আফসোস → wish + past perfect।", en: "yesterday = a past regret → wish + past perfect.", hi: "yesterday = अतीत का अफ़सोस → wish + past perfect।" } },
            { wrong: "I was free; otherwise I won't join you.", right: "I was free; otherwise I would not have joined you.", note: { bn: "অতীতের গোপন শর্ত → otherwise + would have + V3।", en: "A hidden past condition → otherwise + would have + V3.", hi: "अतीत की छिपी शर्त → otherwise + would have + V3।" } },
          ],
        },
      ],
      tips: [
        { bn: "চার সূত্র মুঠোয়: Type 0 = present + present; Type 1 = present + will; Type 2 = past + would; Type 3 = had + V3 + would have + V3।", en: "Four formulas in your fist: Type 0 = present + present; Type 1 = present + will; Type 2 = past + would; Type 3 = had + V3 + would have + V3.", hi: "चार सूत्र मुट्ठी में: Type 0 = present + present; Type 1 = present + will; Type 2 = past + would; Type 3 = had + V3 + would have + V3।" },
        { bn: "if/unless/as long as/provided that-ক্লজে will/would আসে না — বাংলা 'যদি...তাহলে' দুই দিকে চিহ্ন দেয়, ইংরেজি এক দিকে।", en: "No will/would inside if/unless/as long as/provided that clauses — the Bengali 'যদি...তাহলে' marks both sides; English marks one.", hi: "if/unless/as long as/provided that-क्लॉज़ में will/would नहीं — बांग्ला 'यदि...তाहले' दोनों ओर चिह्न देता है, अंग्रेज़ी एक ओर।" },
        { bn: "unless = if not; unless-ক্লজে আর don't/doesn't বসাবেন না — Unless you hurry (নয় Unless you don't hurry)।", en: "unless = if not; never add don't/doesn't inside an unless-clause — Unless you hurry (not Unless you don't hurry).", hi: "unless = if not; unless-क्लॉज़ में don't/doesn't फिर न लगाएँ — Unless you hurry (Unless you don't hurry नहीं)।" },
        { bn: "as long as = যতক্ষণ শর্ত পালিত হচ্ছে; provided that = যদি এই শর্তে (আনুষ্ঠানিক); দুটোর পরেই পূর্ণ ক্লজ।", en: "as long as = while the condition holds; provided that = on the condition that (formal); both take a full clause.", hi: "as long as = जब तक शर्त पालित है; provided that = इस शर्त पर कि (औपचारिक); दोनों के बाद पूरा क्लॉज़।" },
        { bn: "in case = আগে প্রস্তুতি (Take an umbrella in case it rains), if = ঘটলে তবে ফল — দুটো বিনিময়যোগ্য নয়।", en: "in case = preparation first (Take an umbrella in case it rains); if = consequence later — they are not interchangeable.", hi: "in case = पहले तैयारी (Take an umbrella in case it rains); if = बाद में परिणाम — दोनों आदान-प्रदान योग्य नहीं।" },
        { bn: "wish + past = এখনের আফসোস (I wish I had a camera); wish + past perfect = অতীতের আফসোস (I wish I had studied); সব ব্যক্তির জন্য were।", en: "wish + past = regret about now (I wish I had a camera); wish + past perfect = regret about the past (I wish I had studied); were for every person.", hi: "wish + past = अभी का अफ़सोस (I wish I had a camera); wish + past perfect = अतीत का अफ़सोस (I wish I had studied); सभी persons के लिए were।" },
        { bn: "অন্যের আচরণ বদলাতে wish + subject + would (I wish he would listen); পছন্দে would rather + V1, অন্যের আচরণে would rather + subject + past (I'd rather you didn't tell anyone)।", en: "For others' behaviour, wish + subject + would (I wish he would listen); for preference, would rather + V1, and would rather + subject + past for someone else's behaviour (I'd rather you didn't tell anyone).", hi: "दूसरों के व्यवहार के लिए wish + subject + would (I wish he would listen); पसंद के लिए would rather + V1, और दूसरे के व्यवहार पर would rather + subject + past (I'd rather you didn't tell anyone)।" },
        { bn: "without + noun আর otherwise গোপন if — ক্রিয়া নেবে would (এখনের শর্ত) বা would have + V3 (অতীতের শর্ত)।", en: "without + noun and otherwise are hidden ifs — the verb takes would (present condition) or would have + V3 (past condition).", hi: "without + संज्ञा और otherwise छिपे हुए if हैं — क्रिया would (वर्तमान शर्त) या would have + V3 (अतीत शर्त) लेगी।" },
        { bn: "অতীত-শর্ত + এখন-ফল = mixed কন্ডিশনাল: If I had taken the job, I would be in Dubai now — now/this year-এর মতো শব্দ সংকেত।", en: "A past condition with a present result = a mixed conditional: If I had taken the job, I would be in Dubai now — words like now/this year are the signal.", hi: "अतीत-शर्त + अभी-नतीजा = mixed कंडीशनल: If I had taken the job, I would be in Dubai now — now/this year जैसे शब्द संकेत हैं।" },
        { bn: "সংক্ষিপ্ত জবাবে if so (হলে) / if not (না হলে) — 'if yes' ইংরেজিতে নেই।", en: "In short answers, if so / if not — 'if yes' does not exist in English.", hi: "संक्षिप्त जवाब में if so / if not — 'if yes' अंग्रेज़ी में नहीं।" },
      ],
      quiz: [
        { question: "If it ___ tomorrow, we will stay home.", options: ["will rain", "rains", "rained", "would rain"], answer: 1, explanation: { bn: "Type 1 — শর্তে present simple; will শুধু ফল-অর্ধে।", en: "Type 1 — present simple in the condition; will only in the result half.", hi: "Type 1 — शर्त में present simple; will केवल नतीजे में।" } },
        { question: "If I ___ you, I would take the job.", options: ["am", "was", "were", "had been"], answer: 2, explanation: { bn: "Type 2-এর কল্পনায় সব ব্যক্তির জন্য were।", en: "In a Type 2 imagining, were serves every person.", hi: "Type 2 की कल्पना में सभी persons के लिए were।" } },
        { question: "Ice ___ if you cool it to 0°C.", options: ["would melt", "melts", "will melt", "melted"], answer: 1, explanation: { bn: "সবসময়-সত্য → Type 0: শর্তে present, ফলেও present।", en: "Always-true → Type 0: present in the condition and in the result.", hi: "हमेशा-सत्य → Type 0: शर्त में और नतीजे में present।" } },
        { question: "___ you book now, the seats will be gone.", options: ["Unless", "If", "As long as", "Provided that"], answer: 0, explanation: { bn: "অর্থটা 'না বুক করলে আসন শেষ' → unless = if not।", en: "The meaning is 'if you do NOT book now' → unless = if not.", hi: "अर्थ है 'अभी बुक नहीं किया तो सीटें निकल जाएँगी' → unless = if not।" } },
        { question: "Take an umbrella ___ it rains on the way.", options: ["unless", "if not", "in case", "otherwise"], answer: 2, explanation: { bn: "পূর্বপ্রস্তুতি → in case; unless/if not অর্থ উল্টে দেয়।", en: "Precaution → in case; unless/if not would reverse the meaning.", hi: "पूर्व-तैयारी → in case; unless/if not अर्थ उलट देंगे।" } },
        { question: "I wish I ___ more when I was younger.", options: ["study", "studied", "had studied", "would study"], answer: 2, explanation: { bn: "অতীত আফসোস → wish + past perfect (had studied)।", en: "A past regret → wish + past perfect (had studied).", hi: "अतीत का अफ़सोस → wish + past perfect (had studied)।" } },
        { question: "I wish my neighbour ___ stop playing music at midnight.", options: ["will", "would", "would have", "had"], answer: 1, explanation: { bn: "অন্যের আচরণ বদলানোর ইচ্ছা → wish + would।", en: "Wishing someone else's behaviour would change → wish + would.", hi: "दूसरे के व्यवहार को बदलने की इच्छा → wish + would।" } },
        { question: "I would rather ___ at home than go out tonight.", options: ["to stay", "staying", "stay", "stayed"], answer: 2, explanation: { bn: "would rather + V1 (base form) — to নয়।", en: "would rather + V1 (the base form) — no to.", hi: "would rather + V1 (base form) — to नहीं।" } },
        { question: "If I had accepted that offer, I ___ in Singapore today.", options: ["would have been", "would be", "will be", "am"], answer: 1, explanation: { bn: "অতীত-শর্ত + এখনের ফল (today) = mixed — ফলে would + V1।", en: "A past condition with a present result (today) = mixed — would + V1 in the result.", hi: "अतीत-शर्त + अभी का नतीजा (today) = mixed — नतीजे में would + V1।" } },
        { question: "I had no money left; otherwise I ___ the ticket.", options: ["will buy", "would buy", "had bought", "would have bought"], answer: 3, explanation: { bn: "অতীতের গোপন শর্ত → otherwise + would have + V3।", en: "A hidden past condition → otherwise + would have + V3.", hi: "अतीत की छिपी शर्त → otherwise + would have + V3।" } },
      ],
    },
  },
];

export default SEED_GRAMMAR_V4_I4;
