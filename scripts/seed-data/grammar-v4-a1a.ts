// ─── Grammar seeds v4: ADVANCED batch A1a (1 lesson) ───
// Task 10 — point-form roadmap upgrade. Source: scripts/seed-data/grammar-v3-a1.ts
// (lesson "Advanced Tense & Aspect Nuances" — v3 body paragraphs → bullet points;
// each aspect (simple / continuous / perfect / perfect continuous, state vs action
// verbs) gets its OWN section + formula box; aspect-comparison tables added;
// roadmap + leads added; title/intro/tips/examples/quiz copied EXACTLY from source).
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_A1A: SeedGrammarV4Entry[] = [
  /* ── 1. Advanced Tense & Aspect Nuances (advanced, unit 1, sortOrder 0) ─ */
  {
    topic: "Advanced Tense & Aspect Nuances",
    level: "advanced",
    title: "Advanced Tense & Aspect Nuances",
    unit: 1,
    sortOrder: 0,
    data: {
      title: {
        bn: "অ্যাডভান্সড টেন্স ও অ্যাসপেক্ট: সূক্ষ্ম পার্থক্য",
        en: "Advanced Tense & Aspect Nuances",
        hi: "एडवांस्ड टेंस और एस्पेक्ट: सूक्ष्म अंतर",
      },
      intro: {
        bn: "Learning Path-এর advanced স্তরের এটি প্রথম পাঠ (Unit 1)। শুরু করার আগে intermediate স্তরের Present Perfect Continuous, Passive Voice — All Tenses এবং Reported Speech পাঠগুলো শেষ করে নিন — এই পাঠ সেগুলোর উপরেই দাঁড়িয়ে আছে। ইংরেজি tense আসলে দুটো জিনিসের মিশ্রণ: time (কখন) + aspect (দৃষ্টিভঙ্গি — কাজটা চলছে, শেষ হয়েছে, নাকি সাধারণ সত্য)। বাংলায় 'করছি', 'করেছি', 'করি' — এই তিন রূপেই aspect বোঝাই, তবে ম্যাপিং হুবহু নয়: 'আমি কাল যাব' বাক্যে ইংরেজি চার রকম ভবিষ্যতের যে-কোনো একটা বেছে নিতে পারে (I will go / I am going to go / I am going / I go)। এই পাঠে সেই সূক্ষ্ম পছন্দগুলো — সময়সূচির present simple, future continuous বনাম future perfect, state verb-এর কথ্য continuous, আর past perfect-এর সঠিক জায়গা — ধাপে ধাপে গুছিয়ে শিখব।",
        en: "This is the first lesson of the advanced Learning Path (Unit 1). Before starting, finish the intermediate lessons on Present Perfect Continuous, Passive Voice — All Tenses and Reported Speech — this lesson builds directly on them. An English tense is really two things combined: time (when) + aspect (viewpoint — is the action in progress, complete, or a general fact?). Bengali marks aspect with 'করছি', 'করেছি', 'করি', but the mapping is not one-to-one: the Bengali sentence 'আমি কাল যাব' can become four different English futures (I will go / I am going to go / I am going / I go). In this lesson we sort out exactly those fine choices: the present simple of schedules, future continuous vs future perfect, continuous forms of state verbs, and the correct home of the past perfect.",
        hi: "यह एडवांस्ड Learning Path का पहला पाठ (Unit 1) है। शुरू करने से पहले intermediate स्तर के Present Perfect Continuous, Passive Voice — All Tenses और Reported Speech पाठ पूरे कर लें — यह पाठ उन्हीं पर खड़ा है। अंग्रेज़ी tense दो चीज़ों का मिश्रण है: time (कब) + aspect (दृष्टिकोण — काम चल रहा है, पूरा हो चुका है, या सामान्य सत्य है)। हिंदी में 'कर रहा हूँ', 'कर चुका हूँ', 'करता हूँ' से aspect बनता है, पर मैपिंग सीधी नहीं: 'मैं कल जाऊँगा' अंग्रेज़ी के चार अलग future बन सकता है (I will go / I am going to go / I am going / I go)। इस पाठ में यही सूक्ष्म चुनाव सीखेंगे — समय-सारणी का present simple, future continuous बनाम future perfect, state verbs का continuous, और past perfect की सही जगह।",
      },
      roadmap: [
        { bn: "🧠 Tense মানে শুধু সময় নয় — aspect-ই আসল খেলা", en: "🧠 A tense is not just time — aspect is the real game", hi: "🧠 Tense सिर्फ़ समय नहीं — aspect ही असली खेल" },
        { bn: "🗺️ ভবিষ্যতের বাক্যে রূপ বেছে নেওয়ার চার ধাপ", en: "🗺️ The four decision steps for any future sentence", hi: "🗺️ future वाक्य के लिए चार निर्णय-चरण" },
        { bn: "⏰ Simple aspect — সাধারণ সত্য, অভ্যাস আর সময়সূচি", en: "⏰ Simple aspect — general truths, habits and timetables", hi: "⏰ Simple aspect — सामान्य सत्य, आदतें और सारणी" },
        { bn: "🏃 Continuous aspect — চলমান কাজ আর ব্যক্তিগত arrangement", en: "🏃 Continuous aspect — actions in progress and arrangements", hi: "🏃 Continuous aspect — चलता काम और arrangement" },
        { bn: "🏁 Perfect aspect — নির্দিষ্ট সময়ের আগেই সম্পূর্ণ", en: "🏁 Perfect aspect — finished before a certain point", hi: "🏁 Perfect aspect — किसी बिंदु से पहले पूरा" },
        { bn: "🌊 Perfect continuous — since/for-এর বয়ে চলা কাজ", en: "🌊 Perfect continuous — actions flowing since/for", hi: "🌊 Perfect continuous — since/for की बहती धारा" },
        { bn: "🏗️ সাতটা প্যাটার্ন, এক টেবিলে", en: "🏗️ All seven patterns in one table", hi: "🏗️ सातों पैटर्न एक तालिका में" },
        { bn: "🚦 সংকেত শব্দ — কোন শব্দ কোন tense ডাকে", en: "🚦 Signal words — which word calls which tense", hi: "🚦 संकेत-शब्द — कौन सा शब्द कौन-सा tense बुलाता है" },
        { bn: "🎯 ভবিষ্যতের চার মুখ — will, going to, continuous, simple", en: "🎯 The four faces of the future and their colours", hi: "🎯 भविष्य के चार रूप और उनके रंग" },
        { bn: "📸 Future continuous — ওই মুহূর্তে কাজ চলছে", en: "📸 Future continuous — in progress at that moment", hi: "📸 Future continuous — उस क्षण काम चल रहा है" },
        { bn: "✅ Future perfect — ওই সময়ের মধ্যে কাজ শেষ", en: "✅ Future perfect — finished by that time", hi: "✅ Future perfect — उस समय तक काम पूरा" },
        { bn: "🧊 State verb — continuous কখন চলে, কখন চলে না", en: "🧊 State verbs — when the continuous works, when it fails", hi: "🧊 State verbs — continuous कब चलता है, कब नहीं" },
        { bn: "🎭 think, have, see — অর্থ বদলালে রূপ বদলায়", en: "🎭 think, have, see — change the meaning, change the form", hi: "🎭 think, have, see — अर्थ बदले तो रूप बदले" },
        { bn: "⚠️ উচ্চ স্তরের সূক্ষ্ম ভুলগুলো চেনা ও শোধরানো", en: "⚠️ Spotting and fixing the subtle advanced errors", hi: "⚠️ एडवांस्ड सूक्ष्म गलतियाँ पहचानना और सुधारना" },
        { bn: "📖 ছোট গল্পে সব প্যাটার্ন একসঙ্গে", en: "📖 All the patterns together in a short story", hi: "📖 छोटी कहानी में सारे पैटर्न एक साथ" },
        { bn: "📊 এক নজরের ম্যাপ আর অনুশীলন", en: "📊 The one-glance map and your practice task", hi: "📊 एक नज़र का मैप और अभ्यास" },
      ],
      sections: [
        {
          heading: {
            bn: "🧠 কখন ব্যবহার হয় — tense মানেই শুধু সময় নয়",
            en: "🧠 When to use what — tense is not just time",
            hi: "🧠 कब क्या इस्तेमाल होता है — tense सिर्फ़ समय नहीं है",
          },
          lead: {
            bn: "Tense মানে শুধু সময় নয় — বক্তার দৃষ্টিভঙ্গিই aspect, আর aspect-ই এই পাঠের আসল খেলা।",
            en: "A tense is not just time — the speaker's viewpoint is the aspect, and aspect is this lesson's real game.",
            hi: "Tense सिर्फ़ समय नहीं — बोलने वाला काम को किस नज़रिए से देख रहा है, यही aspect है।",
          },
          points: [
            { bn: "**Aspect** মানে দৃষ্টিভঙ্গি — কাজটা চলছে, শেষ হয়েছে, নাকি সাধারণ সত্য, সেটাই বলে দেয়।", en: "**Aspect** means viewpoint — it says whether the action is in progress, complete, or a general fact.", hi: "**Aspect** यानी दृष्टिकोण — काम चल रहा है, पूरा हुआ है, या सामान्य सत्य है, यही बताता है।" },
            { bn: "**Simple** form কাজটাকে দেখে সম্পূর্ণ বা সাধারণ সত্য হিসেবে: She writes reports।", en: "The **simple** form presents the action as complete or generally true: She writes reports.", hi: "**Simple** form काम को पूर्ण या सामान्य सत्य दिखाता है: She writes reports।" },
            { bn: "**Continuous** form কাজটাকে দেখে চলমান প্রক্রিয়া হিসেবে: She is writing a report।", en: "The **continuous** form presents it as an ongoing process: She is writing a report.", hi: "**Continuous** form उसे चलती हुई प्रक्रिया दिखाता है: She is writing a report।" },
            { bn: "**Perfect** form কাজটাকে দেখে নির্দিষ্ট সময়ের আগেই সম্পূর্ণ হিসেবে: She has written the report।", en: "The **perfect** form presents it as finished before a certain point: She has written the report.", hi: "**Perfect** form उसे किसी बिंदु से पहले पूरा बताता है: She has written the report।" },
            { bn: "বাঙালি শিক্ষার্থীরা tense শুধু 'কখন'-এর চশমায় দেখে — তাই ভবিষ্যতের সব বাক্য will দিয়ে ঢেকে ফেলে।", en: "Bengali-speaking learners look at tense only through 'when' — so they cover every future sentence with will.", hi: "बांग्लाभाषी शिक्षार्थी tense को सिर्फ़ 'कब' के चश्मे से देखते हैं — इसलिए हर future वाक्य will से ढक देते हैं।" },
            { bn: "Advanced স্তরের প্রথম প্রশ্ন: বক্তা কাজটাকে কোন দৃষ্টিতে দেখছে?", en: "The first question at advanced level: from which viewpoint is the speaker looking at the action?", hi: "एडवांस्ड स्तर का पहला सवाल: बोलने वाला काम को किस नज़रिए से देख रहा है?" },
          ],
          formula: {
            bn: "Tense = time (কখন) + aspect (কোন দৃষ্টিতে)",
            en: "Tense = time (when) + aspect (which viewpoint)",
            hi: "Tense = time (कब) + aspect (किस नज़रिए से)",
          },
          table: {
            head: [
              { bn: "Aspect", en: "Aspect", hi: "Aspect" },
              { bn: "দৃষ্টি", en: "Viewpoint", hi: "दृष्टिकोण" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [
                { bn: "Simple", en: "Simple", hi: "Simple" },
                { bn: "কাজ সম্পূর্ণ বা সাধারণ সত্য", en: "complete or generally true", hi: "काम पूर्ण या सामान्य सत्य" },
                { bn: "She writes reports", en: "She writes reports", hi: "She writes reports" },
              ],
              [
                { bn: "Continuous", en: "Continuous", hi: "Continuous" },
                { bn: "কাজ চলমান প্রক্রিয়া", en: "an ongoing process", hi: "चलती हुई प्रक्रिया" },
                { bn: "She is writing a report", en: "She is writing a report", hi: "She is writing a report" },
              ],
              [
                { bn: "Perfect", en: "Perfect", hi: "Perfect" },
                { bn: "নির্দিষ্ট সময়ের আগেই সম্পূর্ণ", en: "finished before a certain point", hi: "किसी बिंदु से पहले ही पूरा" },
                { bn: "She has written the report", en: "She has written the report", hi: "She has written the report" },
              ],
            ],
          },
          examples: [],
        },
        {
          heading: {
            bn: "🗺️ সিদ্ধান্তের ধাপ — ভবিষ্যতের বাক্যে কোন রূপ",
            en: "🗺️ The decision steps — which form in a future sentence",
            hi: "🗺️ निर्णय के चरण — future वाक्य में कौन-सा रूप",
          },
          lead: {
            bn: "চারটা প্রশ্ন করলেই ভবিষ্যতের বাক্যের রূপ ঠিক হয়ে যায় — ধাপে ধাপে শিখুন।",
            en: "Four quick questions settle the form of any future sentence — learn them step by step.",
            hi: "चार सवाल पूछें, future वाक्य का रूप तय — धाप दर धाप सीखें।",
          },
          points: [
            { bn: "ধাপ ১: ঘটনাটা কি নির্ধারিত সময়সূচির অংশ — train, bus, class, exam, show? তাহলে ভবিষ্যতের জন্যও **present simple**: The train leaves at 6।", en: "Step 1: is the event part of a fixed timetable — train, bus, class, exam, show? Then **present simple** even for the future: The train leaves at 6.", hi: "चरण 1: क्या घटना तय समय-सारणी का हिस्सा है — train, bus, class, exam, show? तो future के लिए भी **present simple**: The train leaves at 6।" },
            { bn: "ধাপ ২: ব্যক্তিগত ব্যবস্থা — ডাক্তার দেখানো, বন্ধুর সঙ্গে দেখা, বিয়ের ভেন্যু বুকিং? তাহলে **present continuous**: I am seeing Rina tomorrow।", en: "Step 2: a personal arrangement — the doctor, meeting a friend, a booked wedding venue? Then **present continuous**: I am seeing Rina tomorrow.", hi: "चरण 2: निजी arrangement — डॉक्टर, दोस्त से मुलाक़ात, बुक्ड वेन्यू? तो **present continuous**: I am seeing Rina tomorrow।" },
            { bn: "ধাপ ৩: বলার মুহূর্তেই নেওয়া সিদ্ধান্ত? তাহলে **will**: OK, I will help you।", en: "Step 3: a decision made at the moment of speaking? Then **will**: OK, I will help you.", hi: "चरण 3: बोलते ही लिया गया निर्णय? तो **will**: OK, I will help you।" },
            { bn: "ধাপ ৪: আগে থেকে নেওয়া অভিপ্রায় বা চোখে দেখা প্রমাণ? তাহলে **be going to**: It is going to rain।", en: "Step 4: a prior intention or visible evidence? Then **be going to**: It is going to rain.", hi: "चरण 4: पहले से इरादा या दिखने वाला सबूत? तो **be going to**: It is going to rain।" },
            { bn: "এরপর উচ্চ স্তরের জোড়া — ভবিষ্যতের নির্দিষ্ট মুহূর্তে কাজ চলমান থাকবে বোঝাতে **future continuous** (will be doing)।", en: "Then the advanced pair — an action in progress at a specific future moment takes the **future continuous** (will be doing).", hi: "फिर एडवांस्ड जोड़ी — भविष्य के ठीक क्षण पर चलता काम **future continuous** (will be doing) लेता है।" },
            { bn: "নির্দিষ্ট ভবিষ্যৎ সময়ের মধ্যে কাজ শেষ হয়ে যাবে বোঝাতে **future perfect** (will have done)।", en: "An action finished by a specific future time takes the **future perfect** (will have done).", hi: "तय भविष्य-समय तक पूरा हो चुका काम **future perfect** (will have done) लेता है।" },
            { bn: "অতীতের গল্পে দুটো ঘটনার মধ্যে আগেরটা চিহ্নিত করতে **past perfect** (had done)।", en: "In past narration, the earlier of two past events takes the **past perfect** (had done).", hi: "अतीत की कहानी में दो घटनाओं में पहली **past perfect** (had done) लेती है।" },
            { bn: "এই ছয়টা জায়গাতেই এই পাঠের মূল মনোযোগ।", en: "These are the six areas this lesson focuses on.", hi: "इन्हीं क्षेत्रों पर इस पाठ का मूल ध्यान है।" },
          ],
          examples: [],
        },
        {
          heading: {
            bn: "⏰ Simple aspect — সম্পূর্ণ কাজ আর সাধারণ সত্য",
            en: "⏰ Simple aspect — complete actions and general truths",
            hi: "⏰ Simple aspect — पूर्ण काम और सामान्य सत्य",
          },
          lead: {
            bn: "সাধারণ সত্য, অভ্যাস আর সময়সূচি — সব simple form-এই থাকে, ভবিষ্যতের বাক্যেও।",
            en: "General truths, habits and timetables — all stay in the simple form, even about the future.",
            hi: "सामान्य सत्य, आदतें और सारणी — सब simple form में, future वाक्यों में भी।",
          },
          points: [
            { bn: "**Simple** form কাজটাকে দেখে সম্পূর্ণ ঘটনা বা সাধারণ সত্য হিসেবে: She writes reports।", en: "The **simple** form sees the action as a complete event or a general truth: She writes reports.", hi: "**Simple** form काम को पूर्ण घटना या सामान्य सत्य दिखाता है: She writes reports।" },
            { bn: "সময়সূচিতে বাঁধা ঘটনা ভবিষ্যতের হলেও simple-এই থাকে: The train leaves at 6, The match starts at 5।", en: "Events bound to a timetable stay in the simple even about the future: The train leaves at 6, The match starts at 5.", hi: "सारणी में बँधे कार्यक्रम future होते हुए भी simple में रहते हैं: The train leaves at 6, The match starts at 5।" },
            { bn: "রোজকার নিয়মিত সময়সূচি — every শব্দটাই আভাস: The Dhaka flight leaves at 7 every morning।", en: "A daily, repeated schedule — the word every is the signal: The Dhaka flight leaves at 7 every morning.", hi: "रोज़ की नियमित सारणी — every शब्द ही संकेत: The Dhaka flight leaves at 7 every morning।" },
            { bn: "সংকেত: ঘড়ির সময় + train, bus, flight, class, exam, show, match — দেখলেই present simple বসান।", en: "Signal: clock time + train, bus, flight, class, exam, show, match — seeing them, plant the present simple.", hi: "संकेत: घड़ी का समय + train, bus, flight, class, exam, show, match — देखते ही present simple लगाएँ।" },
          ],
          formula: {
            bn: "কর্তা + V1 (-s/-es) + সময় → The train leaves at 6",
            en: "subject + V1 (-s/-es) + time → The train leaves at 6",
            hi: "कर्ता + V1 (-s/-es) + समय → The train leaves at 6",
          },
          examples: [
            {
              wrong: "The meeting will start at 9 tomorrow; it is in the company calendar.",
              right: "The meeting starts at 9 tomorrow; it is in the company calendar.",
              note: {
                bn: "ক্যালেন্ডারে বাঁধা সময়সূচির ঘটনায় ভবিষ্যতের জন্যও present simple চলে — will লাগবে না; বাংলা 'হবে' রূপের টানে will বসিয়ে দেওয়া হয়।",
                en: "An event fixed in a timetable takes the present simple even for the future — no 'will'; Bengali 'হবে' tempts learners to add will.",
                hi: "कैलेंडर में तय घटना के लिए भी present simple चलता है — 'will' नहीं; हिंदी 'होगा' के चलते will घुस जाता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🏃 Continuous aspect — চলমান প্রক্রিয়া আর ব্যক্তিগত arrangement",
            en: "🏃 Continuous aspect — ongoing processes and personal arrangements",
            hi: "🏃 Continuous aspect — चलती प्रक्रिया और निजी arrangement",
          },
          lead: {
            bn: "কাজ চোখের সামনে চলছে — বা আগেই ঠিক হয়ে যাওয়া ব্যক্তিগত প্ল্যান? দুটোতেই continuous।",
            en: "The action is unfolding before your eyes — or a personal plan already fixed? Both take the continuous.",
            hi: "काम आँखों के सामने चल रहा है — या पहले से तय निजी प्लान? दोनों में continuous।",
          },
          points: [
            { bn: "**Continuous** form কাজটাকে দেখে চলমান প্রক্রিয়া হিসেবে: She is writing a report।", en: "The **continuous** form sees the action as an ongoing process: She is writing a report.", hi: "**Continuous** form काम को चलती हुई प्रक्रिया दिखाता है: She is writing a report।" },
            { bn: "আগে থেকে ঠিক হয়ে যাওয়া ব্যক্তিগত arrangement-ও continuous-এ বসে: I am seeing Rina tomorrow।", en: "A personal arrangement fixed in advance also sits in the continuous: I am seeing Rina tomorrow.", hi: "पहले से तय निजी arrangement भी continuous में बैठता है: I am seeing Rina tomorrow।" },
            { bn: "বুকিং, টিকিট, ভেন্যু — প্রমাণ গড়ে গেলেই ব্যক্তিগত ভবিষ্যৎ present continuous।", en: "Bookings, tickets, a venue — once the evidence piles up, the personal future takes the present continuous.", hi: "बुकिंग, टिकट, वेन्यू — सबूत जुट जाए तो निजी भविष्य present continuous लेता है।" },
            { bn: "সংকেত: ব্যক্তি + সময় + পরিকল্পনা — I am meeting Rina on Sunday।", en: "Signal: person + time + plan — I am meeting Rina on Sunday.", hi: "संकेत: व्यक्ति + समय + योजना — I am meeting Rina on Sunday।" },
            { bn: "will শুনলে মনে হয় এইমাত্র সিদ্ধান্ত নিলেন — আগে থেকে ঠিক arrangement বোঝাতে continuous-ই স্বাভাবিক।", en: "Will sounds like a decision made just now — a pre-fixed arrangement is most natural in the continuous.", hi: "will सुनने पर लगता है अभी फ़ैसला लिया — पहले से तय arrangement के लिए continuous ही सहज है।" },
          ],
          formula: {
            bn: "কর্তা + am/is/are + V-ing (+ সময়) → I am seeing Rina tomorrow",
            en: "subject + am/is/are + V-ing (+ time) → I am seeing Rina tomorrow",
            hi: "कर्ता + am/is/are + V-ing (+ समय) → I am seeing Rina tomorrow",
          },
          examples: [
            {
              wrong: "I will meet the dentist at 5 — I booked it last week.",
              right: "I am meeting the dentist at 5 — I booked it last week.",
              note: {
                bn: "আগে থেকে করা ব্যক্তিগত arrangement (বুকিং হয়ে গেছে) বোঝাতে present continuous সবচেয়ে স্বাভাবিক; will শুনলে মনে হয় এইমাত্র ঠিক করলেন।",
                en: "A pre-arranged personal appointment (already booked) is most natural in the present continuous; 'will' sounds like a decision made just now.",
                hi: "पहले से तय व्यक्तिगत appointment (बुकिंग हो चुकी) के लिए present continuous सबसे सहज है; 'will' बोलते ही लगता है अभी फ़ैसला लिया।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🏁 Perfect aspect — নির্দিষ্ট সময়ের আগেই সম্পূর্ণ",
            en: "🏁 Perfect aspect — complete before a certain point",
            hi: "🏁 Perfect aspect — किसी बिंदु से पहले ही पूरा",
          },
          lead: {
            bn: "কাজটা ওই সময়ের আগেই শেষ — perfect-এর এই এক ভাবনাই সব perfect-নিয়মের মূল।",
            en: "The action is already done before that moment — this one idea powers every perfect rule.",
            hi: "काम उस समय से पहले ही पूरा — perfect का यही एक विचार हर perfect-नियम की जड़ है।",
          },
          points: [
            { bn: "**Perfect** form কাজটাকে দেখে নির্দিষ্ট সময়ের আগেই সম্পূর্ণ হিসেবে: She has written the report।", en: "The **perfect** form sees the action as finished before a certain point: She has written the report.", hi: "**Perfect** form काम को किसी बिंदु से पहले ही पूरा दिखाता है: She has written the report।" },
            { bn: "এই দৃষ্টিতে সময় নয়, সম্পূর্ণতা আগে আসে — প্রশ্নটা 'ওই সময়ের আগেই শেষ কি না'।", en: "Here completion comes before time — the question is 'is it finished before that point or not'.", hi: "यहाँ समय से पहले पूर्णता आती है — सवाल यह है 'उस बिंदु से पहले ख़त्म है या नहीं'।" },
            { bn: "already, just, never, yet — শুধু 'এখন পর্যন্ত' বোঝালে এরা present perfect ডাকে।", en: "already, just, never, yet — when they mean only 'up to now', they call the present perfect.", hi: "already, just, never, yet — केवल 'अब तक' बताते हैं तो present perfect बुलाते हैं।" },
            { bn: "সঙ্গে অতীতের দুই ধাপ থাকলে একই শব্দগুচ্ছ past perfect ডাকে — ক্রমটা মনে রাখুন।", en: "With two past steps alongside, the same words call the past perfect — remember the order.", hi: "साथ में अतीत के दो चरण हों तो वही शब्द past perfect बुलाते हैं — क्रम याद रखें।" },
          ],
          formula: {
            bn: "কর্তা + have/has + V3 → She has written the report",
            en: "subject + have/has + V3 → She has written the report",
            hi: "कर्ता + have/has + V3 → She has written the report",
          },
          examples: [],
        },
        {
          heading: {
            bn: "🌊 Perfect continuous aspect — since/for-এর বয়ে চলা ধারা",
            en: "🌊 Perfect continuous aspect — the flowing stream of since/for",
            hi: "🌊 Perfect continuous aspect — since/for की बहती धारा",
          },
          lead: {
            bn: "কাজটা কখনো এক সময়ে শুরু হয়ে এখনও বয়ে চলেছে — এটাই perfect continuous-এর জায়গা।",
            en: "The action started at some point and is still flowing — that is the perfect continuous zone.",
            hi: "काम किसी समय शुरू होकर अब भी बह रहा है — यही perfect continuous की जगह है।",
          },
          points: [
            { bn: "**Perfect continuous** মানে কাজটা কখনো এক সময়ে শুরু হয়ে এখনও চলছে — শুরু আর চলমান, দুটোই একসঙ্গে।", en: "**Perfect continuous** means the action started at some point and is still going on — a start and an ongoing stretch, both together.", hi: "**Perfect continuous** यानी काम किसी समय शुरू होकर अब भी चल रहा है — शुरुआत और चलता अंश, दोनों एक साथ।" },
            { bn: "since/for দেখলে প্রশ্ন করুন: কাজটা এখনও চলছে? হ্যাঁ হলে **have/has been + -ing**।", en: "On seeing since/for ask: is the action still going on? If yes, use **have/has been + -ing**.", hi: "since/for देखकर पूछें: काम अब भी चल रहा है? हाँ हो तो **have/has been + -ing**।" },
            { bn: "বাংলা '২০১৯ থেকে থাকি' — বর্তমান-কালের রূপ ধরে অনেকে লেখেন I am living here since 2019।", en: "The Bengali 'I live here since 2019' — the present-tense form makes many write I am living here since 2019.", hi: "हिंदी '2019 से रहता हूँ' — वर्तमान-काल का रूप कई लोगों को I am living here since 2019 लिखवा देता है।" },
            { bn: "সঠিক রূপ: I have been living in Chattogram since 2019 — শুরুর বিন্দু + এখনও চলছে।", en: "The right form: I have been living in Chattogram since 2019 — a starting point + still in progress.", hi: "सही रूप: I have been living in Chattogram since 2019 — शुरुआत का बिंदु + अब भी चल रहा।" },
            { bn: "এখানে present simple বা present continuous কোনোটাই চলে না — শুধু present perfect continuous।", en: "Neither the present simple nor the present continuous works here — only the present perfect continuous.", hi: "यहाँ present simple या present continuous कुछ नहीं चलता — केवल present perfect continuous।" },
          ],
          formula: {
            bn: "কর্তা + have/has been + V-ing (+ since/for) → I have been living here since 2019",
            en: "subject + have/has been + V-ing (+ since/for) → I have been living here since 2019",
            hi: "कर्ता + have/has been + V-ing (+ since/for) → I have been living here since 2019",
          },
          examples: [
            {
              wrong: "I am living in Chattogram since 2019.",
              right: "I have been living in Chattogram since 2019.",
              note: {
                bn: "since/for + এখনও চলমান কাজ → present perfect continuous; বাংলা '২০১৯ থেকে থাকি' — বর্তমান-কালের রূপ ধরে present continuous বসিয়ে দেয়।",
                en: "since/for + an action still in progress → present perfect continuous; the Bengali present-tense form 'থাকি' pulls learners into the present continuous.",
                hi: "since/for + अब भी चल रहा काम → present perfect continuous; हिंदी '2019 से रहता हूँ' — वर्तमान-काल का रूप continuous में खींच लेता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🏗️ গঠন — সাতটা প্যাটার্ন এক নজরে",
            en: "🏗️ Formation — seven patterns at a glance",
            hi: "🏗️ गठन — सात पैटर्न एक नज़र में",
          },
          lead: {
            bn: "পাঠের সাতটা প্যাটার্ন এক টেবিলে — প্যাটার্ন, কখন, আর উদাহরণ চোখের সামনে।",
            en: "All seven patterns in one table — pattern, situation and example side by side.",
            hi: "सातों पैटर्न एक तालिका में — पैटर्न, स्थिति और उदाहरण साथ-साथ।",
          },
          points: [
            { bn: "টেবিলটা প্রসার-টেবিলের মতো পড়ুন — প্রতিটা সারিতে আগে প্যাটার্ন, তারপর উদাহরণ।", en: "Read the table row by row like a prose table — the pattern first, then the example.", hi: "तालिका को गद्य-तालिका जैसा पढ़ें — हर पंक्ति में पहले पैटर्न, फिर उदाहरण।" },
            { bn: "টেবিলের চাবি দুটো শব্দ — **by** মানে 'ওই সময়ের মধ্যে অবধি', সম্পূর্ণতার শব্দ; তাই সঙ্গী will have + V3।", en: "The table's first key word — **by** means 'no later than that time', a completeness word; so it pairs with will have + V3.", hi: "तालिका की पहली कुंजी — **by** यानी 'उस समय तक', पूर्णता का शब्द; साथ will have + V3।" },
            { bn: "আরেক চাবি — **at / this time** মানে 'ওই মুহূর্তে', চলমানের শব্দ; তাই সঙ্গী will be + V-ing।", en: "The other key — **at / this time** means 'at that very moment', a progress word; so it pairs with will be + V-ing.", hi: "दूसरी कुंजी — **at / this time** यानी 'उसी क्षण', चलते काम का शब्द; साथ will be + V-ing।" },
            { bn: "বাক্যে এই দুটোর একটা চোখে পড়লেই অর্ধেক কাজ শেষ।", en: "Spot one of these two in a sentence and half the work is done.", hi: "वाक्य में इन दोनों में से कोई एक दिख जाए तो आधा काम हो गया।" },
          ],
          table: {
            head: [
              { bn: "কাজ", en: "Job", hi: "काम" },
              { bn: "প্যাটার্ন", en: "Pattern", hi: "पैटर्न" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [
                { bn: "নির্ধারিত সময়সূচি", en: "fixed timetable", hi: "तय समय-सारणी" },
                { bn: "Subject + V-s + সময়", en: "Subject + V-s + time", hi: "Subject + V-s + समय" },
                { bn: "The train leaves at 6.", en: "The train leaves at 6.", hi: "The train leaves at 6." },
              ],
              [
                { bn: "ব্যক্তিগত arrangement", en: "personal arrangement", hi: "निजी arrangement" },
                { bn: "Subject + am/is/are + V-ing + সময়", en: "Subject + am/is/are + V-ing + time", hi: "Subject + am/is/are + V-ing + समय" },
                { bn: "I am seeing the dentist at 5.", en: "I am seeing the dentist at 5.", hi: "I am seeing the dentist at 5." },
              ],
              [
                { bn: "তৎক্ষণাৎ সিদ্ধান্ত বা প্রতিশ্রুতি", en: "on-the-spot decision or promise", hi: "तुरंत लिया निर्णय या वादा" },
                { bn: "Subject + will + V1", en: "Subject + will + V1", hi: "Subject + will + V1" },
                { bn: "I will carry that bag for you.", en: "I will carry that bag for you.", hi: "I will carry that bag for you." },
              ],
              [
                { bn: "আগের অভিপ্রায় বা প্রমাণ-ভিত্তিক ভবিষ্যদ্বাণী", en: "prior intention or evidence-based prediction", hi: "पहले से इरादा या सबूत-आधारित भविष्यवाणी" },
                { bn: "Subject + am/is/are going to + V1", en: "Subject + am/is/are going to + V1", hi: "Subject + am/is/are going to + V1" },
                { bn: "It is going to rain.", en: "It is going to rain.", hi: "It is going to rain." },
              ],
              [
                { bn: "ভবিষ্যতের নির্দিষ্ট মুহূর্তে চলমান", en: "in progress at a specific future moment", hi: "भविष्य के ठीक क्षण पर चलता काम" },
                { bn: "Subject + will be + V-ing", en: "Subject + will be + V-ing", hi: "Subject + will be + V-ing" },
                { bn: "At 8 tonight I will be cooking.", en: "At 8 tonight I will be cooking.", hi: "At 8 tonight I will be cooking." },
              ],
              [
                { bn: "ভবিষ্যতের নির্দিষ্ট সময়ের মধ্যে সম্পূর্ণ", en: "finished by a specific future time", hi: "तय भविष्य-समय तक पूरा" },
                { bn: "Subject + will have + V3 (+ by + সময়)", en: "Subject + will have + V3 (+ by + time)", hi: "Subject + will have + V3 (+ by + समय)" },
                { bn: "By Sunday I will have finished the report.", en: "By Sunday I will have finished the report.", hi: "By Sunday I will have finished the report." },
              ],
              [
                { bn: "দুই অতীতের আগেরটা", en: "the earlier of two past events", hi: "दो अतीत घटनाओं में पहली" },
                { bn: "Subject + had + V3", en: "Subject + had + V3", hi: "Subject + had + V3" },
                { bn: "The train had left when we arrived.", en: "The train had left when we arrived.", hi: "The train had left when we arrived." },
              ],
            ],
          },
          examples: [
            {
              wrong: "I will finishing the report by Friday.",
              right: "I will have finished the report by Friday.",
              note: {
                bn: "will-এর পরে সরাসরি V-ing আসে না; by + ভবিষ্যৎ সময় মানে কাজ সম্পূর্ণ — তাই will have + V3।",
                en: "'Will' is never followed directly by V-ing; by + future time signals completion — will have + V3.",
                hi: "'Will' के बाद सीधे V-ing नहीं आता; by + भविष्य-समय पूर्णता दिखाता है — will have + V3।",
              },
            },
            {
              wrong: "We will have dinner at 9 tonight, so please do not call then.",
              right: "We will be having dinner at 9 tonight, so please do not call then.",
              note: {
                bn: "৯টার সময়ে ডিনার তখন চলছে — ওই মুহূর্তের চলমান কাজ বোঝাতে will be + V-ing; will have হলে মানে দাঁড়ায় '৯টার মধ্যে ডিনার শেষ'।",
                en: "At 9 the dinner will be in progress — a future-moment activity takes will be + V-ing; will have would mean 'dinner finished by 9'.",
                hi: "9 बजे डिनर चल रहा होगा — उस क्षण का चलता काम will be + V-ing लेता है; will have होता तो मतलब '9 तक डिनर ख़त्म'।",
              },
            },
            {
              wrong: "The Dhaka flight will leave at 7 every morning.",
              right: "The Dhaka flight leaves at 7 every morning.",
              note: {
                bn: "প্রতিদিনের নিয়মিত সময়সূচি — ভবিষ্যৎ হলেও present simple-ই সঠিক; every শব্দটাই আভাস।",
                en: "A daily, repeated schedule stays in the present simple even about the future; the word 'every' is the signal.",
                hi: "रोज़ की नियमित सारणी — future होते हुए भी present simple ही सही; 'every' शब्द ही संकेत है।",
              },
            },
            {
              wrong: "When I will get home, I will call you.",
              right: "When I get home, I will call you.",
              note: {
                bn: "when/before/after/until/as soon as-clause-এ ভবিষ্যৎ বোঝালেও present form চলে — মূল বাক্যেই শুধু will।",
                en: "In when/before/after/until/as soon as clauses use the present form even for future meaning — will appears only in the main clause.",
                hi: "when/before/after/until/as soon as clause में भविष्य के लिए भी present form — will केवल मुख्य वाक्य में।",
              },
            },
            {
              wrong: "She had went out before I arrived.",
              right: "She had gone out before I arrived.",
              note: {
                bn: "past perfect-এর গঠন had + V3 — had-এর সঙ্গে V2 (went) মেশানো একটা পুরোনো অভ্যাস; উচ্চ স্তরেও মাঝে মাঝে ফিরে আসে।",
                en: "Past perfect is had + V3; mixing had with V2 (went) is an old habit that resurfaces even at advanced level.",
                hi: "Past perfect है had + V3; had के साथ V2 (went) मिलाना पुरानी आदत है जो एडवांस्ड स्तर पर भी लौट आती है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🚦 আভাস ও প্যাটার্ন — কোন শব্দ কোন tense ডাকে",
            en: "🚦 Signals — which words call which tense",
            hi: "🚦 संकेत — कौन-सा शब्द कौन-सा tense बुलाता है",
          },
          lead: {
            bn: "বাক্যের ভেতরের সংকেত শব্দ চিনলেই tense-সিদ্ধান্তের অর্ধেক কাজ শেষ।",
            en: "Spot the signal words inside the sentence and half the tense decision is done.",
            hi: "वाक्य के भीतर संकेत-शब्द पहचानते ही tense-निर्णय का आधा काम पूरा।",
          },
          points: [
            { bn: "Advanced দক্ষতা মানে বাক্যের ভেতরের সংকেত শব্দগুলো তৎক্ষণাৎ চিনে ফেলা — টেবিলের ছয়টা সারি চোখের সামনে রাখুন।", en: "Advanced skill means instantly spotting the signal words inside a sentence — keep the table's six rows in view.", hi: "एडवांस्ड कौशल है वाक्य के भीतर संकेत-शब्द तुरंत पकड़ना — तालिका की छह पंक्तियाँ आँखों के सामने रखें।" },
            { bn: "সোনার নিয়ম: when, before, after, until, as soon as দিয়ে শুরু হওয়া clause ভবিষ্যতের হলেও **present form** বসে।", en: "Golden rule: clauses beginning with when, before, after, until, as soon as take the **present form** even for the future.", hi: "सुनहरा नियम: when, before, after, until, as soon as से शुरू clause भविष्य की बात करते हुए भी **present form** लेते हैं।" },
            { bn: "will সেই clause-এ ঢোকে না — মূল বাক্যেই শুধু বসে।", en: "Will never sneaks into that clause — it stays only in the main clause.", hi: "will उस clause में घुसता नहीं — केवल मुख्य वाक्य में बैठता है।" },
            { bn: "সংকেত চিনলে tense-সিদ্ধান্তের অর্ধেক কাজ শেষ।", en: "Spotting the signals does half the tense decision.", hi: "संकेत पहचान लें तो tense-निर्णय का आधा काम पूरा।" },
            { bn: "বাকি অর্ধেক aspect-এর প্রশ্ন — কাজটা চলছে, নাকি শেষ?", en: "The other half is the aspect question — is the action in progress or complete?", hi: "बाकी आधा aspect का सवाल — काम चल रहा है या पूरा?" },
          ],
          table: {
            head: [
              { bn: "সংকেত", en: "Signal", hi: "संकेत" },
              { bn: "ডাকে যে রূপ", en: "The form it calls", hi: "जो रूप बुलाता है" },
            ],
            rows: [
              [
                { bn: "by + ভবিষ্যৎ সময় (by Friday, by 2030, by the time you arrive)", en: "by + future time (by Friday, by 2030, by the time you arrive)", hi: "by + भविष्य-समय (by Friday, by 2030, by the time you arrive)" },
                { bn: "future perfect", en: "future perfect", hi: "future perfect" },
              ],
              [
                { bn: "this time tomorrow / at 8 tonight / this day next week", en: "this time tomorrow / at 8 tonight / this day next week", hi: "this time tomorrow / at 8 tonight / this day next week" },
                { bn: "future continuous", en: "future continuous", hi: "future continuous" },
              ],
              [
                { bn: "ঘড়ির সময় + train, bus, flight, class, exam, show, match", en: "clock time + train, bus, flight, class, exam, show, match", hi: "घड़ी का समय + train, bus, flight, class, exam, show, match" },
                { bn: "present simple (ভবিষ্যৎ অর্থে)", en: "present simple (future meaning)", hi: "present simple (भविष्य अर्थ में)" },
              ],
              [
                { bn: "ব্যক্তি + সময় + পরিকল্পনা (I am meeting Rina on Sunday)", en: "person + time + plan (I am meeting Rina on Sunday)", hi: "व्यक्ति + समय + योजना (I am meeting Rina on Sunday)" },
                { bn: "present continuous", en: "present continuous", hi: "present continuous" },
              ],
              [
                { bn: "already, just, never, yet + অতীতের দুই ধাপ", en: "already, just, never, yet + two past steps", hi: "already, just, never, yet + दो अतीत-चरण" },
                { bn: "past perfect", en: "past perfect", hi: "past perfect" },
              ],
              [
                { bn: "already, just, never, yet + শুধু 'এখন পর্যন্ত'", en: "already, just, never, yet + only 'up to now'", hi: "already, just, never, yet + केवल 'अब तक'" },
                { bn: "present perfect", en: "present perfect", hi: "present perfect" },
              ],
            ],
          },
          examples: [
            {
              wrong: "By next March they will open the new campus.",
              right: "By next March they will have opened the new campus.",
              note: {
                bn: "by + ভবিষ্যৎ সময় = 'ওই সময়ের মধ্যে শেষ' — completion-এর সংকেত, তাই future perfect।",
                en: "by + future time = 'finished no later than that time' — a completion signal, hence the future perfect.",
                hi: "by + भविष्य-समय = 'उस समय तक पूरा' — पूर्णता का संकेत, इसलिए future perfect।",
              },
            },
            {
              wrong: "Do not phone me at 9 — I will watch my favourite serial.",
              right: "Do not phone me at 9 — I will be watching my favourite serial.",
              note: {
                bn: "৯টার সময় সিরিয়াল দেখা তখন চলছে — নির্দিষ্ট ভবিষ্যৎ মুহূর্তের চলমান দৃশ্য → future continuous।",
                en: "At 9 the watching will be in progress — a scene in progress at a specific future moment → future continuous.",
                hi: "9 बजे सीरियल देखना चल रहा होगा — तय भविष्य-क्षण में चलता दृश्य → future continuous।",
              },
            },
            {
              wrong: "The class will begin at 10 sharp; the schedule says so.",
              right: "The class begins at 10 sharp; the schedule says so.",
              note: {
                bn: "schedule শব্দটাই ঘোষণা করে দিচ্ছে — নির্ধারিত সময়সূচি বোঝাতে present simple।",
                en: "The word 'schedule' gives it away — fixed timetables take the present simple.",
                hi: "'schedule' शब्द ही बता दे रहा है — तय समय-सारणी present simple लेती है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🎯 ভবিষ্যতের চার মুখ — will, going to, present continuous, present simple",
            en: "🎯 Four faces of the future — will, going to, present continuous, present simple",
            hi: "🎯 भविष्य के चार रूप — will, going to, present continuous, present simple",
          },
          lead: {
            bn: "একই 'কাল যাব' — ইংরেজিতে চার রকম রং; প্রতিটার নিজের জায়গা আছে।",
            en: "One Bengali 'I'll go tomorrow' — four English colours, each with its own home.",
            hi: "एक ही 'कल जाऊँगा' — अंग्रेज़ी में चार रंग; हर एक की अपनी जगह।",
          },
          points: [
            { bn: "বাংলায় 'কাল যাব', 'কাল যাচ্ছি' — এক-আধ রূপেই সব ভবিষ্যৎ চলে যায়, তাই শিক্ষার্থীরা will-কে default বানিয়ে ফেলে।", en: "In Bengali 'I'll go', 'I'm going tomorrow' — one or two forms cover every future, so learners make will the default.", hi: "हिंदी में 'कल जाऊँगा', 'कल जा रहा हूँ' — एक-आध रूप हर future ढक लेते हैं, इसलिए शिक्षार्थी will को default बना देते हैं।" },
            { bn: "একই ঘটনা, চার রকম রং — 'I will visit grandma': এই কথা বলতে বলতেই সিদ্ধান্ত নিলাম।", en: "One event, four colours — 'I will visit grandma': deciding as I speak.", hi: "एक घटना, चार रंग — 'I will visit grandma': बोलते ही तय किया।" },
            { bn: "'I am going to visit grandma' — দিন দুয়েক ধরে প্ল্যান করছি।", en: "'I am going to visit grandma' — planning it for days.", hi: "'I am going to visit grandma' — दिनों से प्लान कर रहा हूँ।" },
            { bn: "'I am visiting grandma tomorrow' — ট্রেনের টিকিট কেটে ফেলেছি।", en: "'I am visiting grandma tomorrow' — the train ticket is already bought.", hi: "'I am visiting grandma tomorrow' — ट्रेन की टिकट कट गई है।" },
            { bn: "'The train leaves at 6' — সময়সূচি নির্ধারিত, আমার প্ল্যান নয়।", en: "'The train leaves at 6' — the official timetable, not my plan.", hi: "'The train leaves at 6' — आधिकारिक सारणी, मेरा प्लान नहीं।" },
            { bn: "বাক্য লেখার আগে জিজ্ঞেস করুন — এটা কি সিদ্ধান্ত, অভিপ্রায়, arrangement, নাকি schedule? উত্তরই রূপটা বেছে দেবে।", en: "Before writing, ask yourself — is this a decision, an intention, an arrangement, or a schedule? The answer chooses the form.", hi: "लिखने से पहले पूछें — यह निर्णय, इरादा, arrangement या schedule? जवाब ही रूप चुनेगा।" },
          ],
          table: {
            head: [
              { bn: "রূপ", en: "Form", hi: "रूप" },
              { bn: "কখন বসে", en: "When it sits", hi: "कब बैठता है" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [
                { bn: "will", en: "will", hi: "will" },
                { bn: "বলার মুহূর্তে নেওয়া সিদ্ধান্ত, প্রতিশ্রুতি, অনুমাননির্ভর ভবিষ্যদ্বাণী", en: "decision made while speaking, a promise, an opinion-based prediction", hi: "बोलते ही लिया निर्णय, वादा, राय-आधारित भविष्यवाणी" },
                { bn: "I think United will win", en: "I think United will win", hi: "I think United will win" },
              ],
              [
                { bn: "be going to", en: "be going to", hi: "be going to" },
                { bn: "আগে থেকে নেওয়া অভিপ্রায়, চোখে দেখা প্রমাণের ভবিষ্যদ্বাণী", en: "a prior intention, a prediction from visible evidence", hi: "पहले से इरादा, दिख रहे सबूत से भविष्यवाणी" },
                { bn: "Look at those clouds — it is going to rain", en: "Look at those clouds — it is going to rain", hi: "Look at those clouds — it is going to rain" },
              ],
              [
                { bn: "present continuous", en: "present continuous", hi: "present continuous" },
                { bn: "বুকিং-টিকিটসহ আগে থেকে ঠিক করা ব্যক্তিগত arrangement", en: "a personal arrangement fixed in advance, with bookings and tickets", hi: "बुकिंग-टिकट सहित पहले से तय निजी arrangement" },
                { bn: "I am meeting Rina tomorrow", en: "I am meeting Rina tomorrow", hi: "I am meeting Rina tomorrow" },
              ],
              [
                { bn: "present simple", en: "present simple", hi: "present simple" },
                { bn: "সময়সূচিতে বাঁধা ঘটনা", en: "an event bound to a timetable", hi: "सारणी में बँधा कार्यक्रम" },
                { bn: "The match starts at 5", en: "The match starts at 5", hi: "The match starts at 5" },
              ],
            ],
          },
          examples: [
            {
              wrong: "A: The phone is ringing. B: OK, I am going to answer it.",
              right: "A: The phone is ringing. B: OK, I will answer it.",
              note: {
                bn: "ফোন বাজা দেখে মুহূর্তে সিদ্ধান্ত নেওয়া হলো — তৎক্ষণাৎ সিদ্ধান্তে will; going to বলতে হলে আগে থেকেই প্ল্যান থাকতে হবে।",
                en: "The ringing phone triggers an instant decision — on-the-spot decisions take will; going to needs a plan made earlier.",
                hi: "घंटी देखकर तुरंत निर्णय — ऐसे फ़ैसले will लेते हैं; going to के लिए पहले से बना प्लान चाहिए।",
              },
            },
            {
              wrong: "Look at those black clouds! It will rain.",
              right: "Look at those black clouds! It is going to rain.",
              note: {
                bn: "চোখে দেখা প্রমাণ (কালো মেঘ) থেকে ভবিষ্যদ্বাণী — এটা going to-এর ক্লাসিক জায়গা; will শুধু অনুমান, প্রমাণ নয়।",
                en: "A prediction from visible evidence (black clouds) is the classic home of going to; will is mere opinion.",
                hi: "दिख रहे सबूत (काले बादल) से भविष्यवाणी — यह going to की क्लासिक जगह है; will महज़ अंदाज़ा है।",
              },
            },
            {
              wrong: "We will get married in December; the hall is already booked.",
              right: "We are getting married in December; the hall is already booked.",
              note: {
                bn: "হল বুকড, কার্ড ছাপা — এটা arrangement; আগে থেকে ঠিক করা ব্যক্তিগত ভবিষ্যৎ present continuous-এ বসে।",
                en: "The hall is booked, the cards are printed — this is an arrangement; a pre-fixed personal future takes the present continuous.",
                hi: "हॉल बुक, कार्ड छपे — यह arrangement है; पहले से तय निजी भविष्य present continuous में आता है।",
              },
            },
            {
              wrong: "My IELTS exam will begin at 10 on Sunday.",
              right: "My IELTS exam begins at 10 on Sunday.",
              note: {
                bn: "পরীক্ষার সময় আগেই ঘোষিত সময়সূচির অংশ — ঘড়ির সময় + exam শুনে present simple বসান।",
                en: "The exam time is part of a published schedule — clock time + exam is a present-simple signal.",
                hi: "परीक्षा का समय घोषित सारणी का हिस्सा है — समय + exam देखकर present simple लगाएँ।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "📸 Future continuous — ওই মুহূর্তে কাজ চলছে",
            en: "📸 Future continuous — the action in progress at that moment",
            hi: "📸 Future continuous — उस क्षण काम चल रहा है",
          },
          lead: {
            bn: "will be doing ভাবুন ক্যামেরার ফ্রেম — ভবিষ্যতের এক মুহূর্তে তোলা ছবিতে কাজ চলছে।",
            en: "Picture will be doing as a camera frame — in the photo of a future moment, the action is running.",
            hi: "will be doing को कैमरे का फ्रेम समझें — भविष्य के क्षण की तस्वीर में काम चल रहा है।",
          },
          points: [
            { bn: "ভবিষ্যতের এক নির্দিষ্ট মুহূর্তে কাজ তখন **চলমান থাকবে** — This time tomorrow I will be flying to Dubai।", en: "At a specific future moment the action will still be **in progress** — This time tomorrow I will be flying to Dubai.", hi: "भविष्य के ठीक क्षण पर काम तब **चल रहा होगा** — This time tomorrow I will be flying to Dubai।" },
            { bn: "বাড়তি কাজ ১ — **polite জিজ্ঞাসা**: Will you be using the laptop tonight? অনুমতি না চেয়ে পরিকল্পনা জানতে চাওয়া, বাঙালি ভদ্রতার সঙ্গে মানানসই।", en: "Extra job 1 — **polite enquiry**: Will you be using the laptop tonight? Asking about plans instead of demanding permission — it suits Bengali politeness well.", hi: "अतिरिक्त काम 1 — **विनम्र प्रश्न**: Will you be using the laptop tonight? अनुमति माँगने के बजाय योजना पूछना — भारतीय-बांग्ला शिष्टता से मेल खाता है।" },
            { bn: "বাড়তি কাজ ২ — 'কাজটা তবু ঘটবেই': I will be passing the market anyway; shall I buy some eggs?", en: "Extra job 2 — 'it will happen anyway': I will be passing the market anyway; shall I buy some eggs?", hi: "अतिरिक्त काम 2 — 'फिर भी होगा ही': I will be passing the market anyway; shall I buy some eggs?" },
            { bn: "সরাসরি will you use জিজ্ঞাসা আদেশ-জাতীয় কড়া শোনায় — will be + V-ing নরম, polite।", en: "A bare will you use question sounds abrupt — will be + V-ing sounds soft and polite.", hi: "सीधा will you use सवाल रूखा लगता है — will be + V-ing नरम, विनम्र लगता है।" },
          ],
          formula: {
            bn: "কর্তা + will be + V-ing → This time tomorrow I will be flying to Dubai",
            en: "subject + will be + V-ing → This time tomorrow I will be flying to Dubai",
            hi: "कर्ता + will be + V-ing → This time tomorrow I will be flying to Dubai",
          },
          examples: [
            {
              wrong: "This time tomorrow we will fly to Dhaka.",
              right: "This time tomorrow we will be flying to Dhaka.",
              note: {
                bn: "'আগামীকাল এই সময়ে' — ওই নির্দিষ্ট মুহূর্তে উড়ানটা তখনও চলছে, তাই future continuous: will be + V-ing।",
                en: "'This time tomorrow' — at that exact moment the flight is still in progress, so the future continuous fits: will be + V-ing.",
                hi: "'कल इसी समय' — उस क्षण उड़ान अब भी चल रही होगी, इसलिए future continuous: will be + V-ing।",
              },
            },
            {
              wrong: "Do not call me at 10; I will sleep.",
              right: "Do not call me at 10; I will be sleeping.",
              note: {
                bn: "১০টায় ঘুম তখন চলমান অবস্থা — চলমান দৃশ্য বোঝাতে will be sleeping; will sleep মানে দাঁড়ায় '১০টায় ঘুমাতে শুরু করব'।",
                en: "At 10 the sleeping will be in progress — the in-progress view takes will be sleeping; will sleep would mean 'I start sleeping at 10'.",
                hi: "10 बजे नींद चल रही होगी — चलते दृश्य के लिए will be sleeping; will sleep का मतलब बनेगा '10 बजे सोना शुरू करूँगा'।",
              },
            },
            {
              wrong: "Will you use the office printer this evening? I need it too.",
              right: "Will you be using the office printer this evening? I need it too.",
              note: {
                bn: "অন্যের পরিকল্পনা জানতে চাওয়া — will be + V-ing নরম, polite শোনায়; সরাসরি will you use আদেশ-জাতীয় কড়া গোছা হয়ে যায়।",
                en: "Asking about someone's plan — will be + V-ing sounds soft and polite; a bare will you use comes across as abrupt.",
                hi: "दूसरे की योजना पूछना — will be + V-ing नरम, विनम्र लगता है; सीधा will you use रूखा लगता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "✅ Future perfect — ওই সময়ের মধ্যে কাজ শেষ",
            en: "✅ Future perfect — the action finished by that time",
            hi: "✅ Future perfect — उस समय तक काम पूरा",
          },
          lead: {
            bn: "will have done হলে টাইমলাইনের টিক-চিহ্ন — নির্দিষ্ট সময়ের আগেই কাজ সম্পূর্ণ।",
            en: "will have done is a tick on the timeline — the job is done before that fixed time.",
            hi: "will have done टाइमलाइन का टिक है — तय समय से पहले ही काम पूरा।",
          },
          points: [
            { bn: "নির্দিষ্ট ভবিষ্যৎ সময়ের **আগেই কাজ সম্পূর্ণ** — By December I will have saved enough money।", en: "The action is **complete before** a specific future time — By December I will have saved enough money.", hi: "तय भविष्य-समय से **पहले ही काम पूरा** — By December I will have saved enough money।" },
            { bn: "দুটো একসঙ্গেও আসে: By 6 I will have reached home, and I will be cooking dinner — পৌঁছে যাওয়া সম্পূর্ণ, রান্না চলছে।", en: "They can appear together: By 6 I will have reached home, and I will be cooking dinner — arrival complete, cooking in progress.", hi: "दोनों साथ भी आ सकते हैं: By 6 I will have reached home, and I will be cooking dinner — पहुँचना पूरा, खाना चल रहा।" },
            { bn: "ফারাক মনে রাখার সহজ কথা: by + সময় = শেষ; at / this time + সময় = চলছে।", en: "The easy summary: by + time = finished; at / this time + time = in progress.", hi: "आसान सारांश: by + समय = पूरा; at / this time + समय = चल रहा।" },
            { bn: "before-clause-এ ভবিষ্যতের অর্থেও will আসে না — The show will have started before we reach the hall।", en: "A before-clause never takes will even for future meaning — The show will have started before we reach the hall.", hi: "before-clause में भविष्य के अर्थ पर भी will नहीं आता — The show will have started before we reach the hall।" },
          ],
          formula: {
            bn: "কর্তা + will have + V3 (+ by + সময়) → By December I will have saved enough money",
            en: "subject + will have + V3 (+ by + time) → By December I will have saved enough money",
            hi: "कर्ता + will have + V3 (+ by + समय) → By December I will have saved enough money",
          },
          table: {
            head: [
              { bn: "বিষয়", en: "Point", hi: "बात" },
              { bn: "Future continuous", en: "Future continuous", hi: "Future continuous" },
              { bn: "Future perfect", en: "Future perfect", hi: "Future perfect" },
            ],
            rows: [
              [
                { bn: "অর্থ", en: "Meaning", hi: "अर्थ" },
                { bn: "ওই মুহূর্তে কাজ চলছে", en: "in progress at that moment", hi: "उस क्षण काम चल रहा है" },
                { bn: "ওই সময়ের মধ্যে কাজ শেষ", en: "finished by that time", hi: "उस समय तक काम पूरा" },
              ],
              [
                { bn: "রূপ", en: "Form", hi: "रूप" },
                { bn: "will be + V-ing", en: "will be + V-ing", hi: "will be + V-ing" },
                { bn: "will have + V3", en: "will have + V3", hi: "will have + V3" },
              ],
              [
                { bn: "সংকেত", en: "Signal", hi: "संकेत" },
                { bn: "at 9, this time tomorrow", en: "at 9, this time tomorrow", hi: "at 9, this time tomorrow" },
                { bn: "by 6, by December, by the time you arrive", en: "by 6, by December, by the time you arrive", hi: "by 6, by December, by the time you arrive" },
              ],
            ],
          },
          examples: [
            {
              wrong: "The show will start before we will reach the hall.",
              right: "The show will have started before we reach the hall.",
              note: {
                bn: "পৌঁছানোর আগেই শো শুরু — আগের ঘটনায় future perfect, আর before-clause-এ will আসে না; দুই ভুল একসঙ্গে ঠিক হলো।",
                en: "The show finishes first — that earlier action takes the future perfect, and a before-clause never takes will; two fixes in one.",
                hi: "हॉल पहुँचने से पहले ही शो शुरू — पहली घटना future perfect लेती है, और before-clause में will नहीं आता; दो सुधार एक साथ।",
              },
            },
            {
              wrong: "By the time you come back, I will cook dinner.",
              right: "By the time you come back, I will have cooked dinner.",
              note: {
                bn: "by the time = 'তুমি ফিরার আগেই' — আগে শেষ হওয়া কাজ, তাই future perfect; by-শব্দটা দেখলেই এই সিদ্ধান্ত নেবেন।",
                en: "by the time = 'before you return' — the earlier-finished action takes the future perfect; the word by should trigger this choice.",
                hi: "by the time = 'तुम्हारे लौटने से पहले' — पहले पूरा हुआ काम future perfect लेता है; by शब्द देखते ही यही चुनाव करें।",
              },
            },
            {
              wrong: "By next year I will be completing my degree.",
              right: "By next year I will have completed my degree.",
              note: {
                bn: "by + ভবিষ্যৎ সময় সম্পূর্ণতা বোঝায় — ডিগ্রি তখন শেষ; চলমান নয়, তাই will have + V3।",
                en: "by + future time expresses completion — the degree will be done, not ongoing; hence will have + V3.",
                hi: "by + भविष्य-समय पूर्णता दिखाता है — डिग्री तब ख़त्म होगी, चल रही नहीं; इसलिए will have + V3।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🧊 State verb-এর continuous — 'I am loving it' কখন চলে, কখন চলে না",
            en: "🧊 Continuous with state verbs — when 'I am loving it' works",
            hi: "🧊 State verbs के साथ continuous — 'I am loving it' कब चलता है",
          },
          lead: {
            bn: "know, own, believe — এরা কাজ নয়, অবস্থা; অবস্থা কখনো 'চলছে' হয় না।",
            en: "know, own, believe — conditions, not actions; a condition is never 'in progress'.",
            hi: "know, own, believe — ये काम नहीं, अवस्था हैं; अवस्था कभी 'चल रही' नहीं होती।",
          },
          points: [
            { bn: "**State verb** মানে অবস্থা বোঝানো verb — know, own, believe, contain, understand, prefer।", en: "A **state verb** describes a condition — know, own, believe, contain, understand, prefer.", hi: "**State verb** अवस्था बताते हैं — know, own, believe, contain, understand, prefer।" },
            { bn: "অবস্থার কোনো 'চলমান প্রক্রিয়া' নেই — তাই এরা সাধারণত continuous-এ যায় না: I am knowing him ভুল, I know him ঠিক।", en: "A condition has no 'ongoing process' — so these verbs normally reject the continuous: I am knowing him is wrong, I know him is right.", hi: "अवस्था की कोई 'चलती प्रक्रिया' नहीं होती — इसलिए ये सामान्यतः continuous नहीं लेते: I am knowing him गलत, I know him सही।" },
            { bn: "কথ্য ইংরেজি আর বিজ্ঞাপন এক গুচ্ছের নিয়ম নমনীয় করেছে — love, like, enjoy, hope, wonder মুহূর্তের অনুভূতি হিসেবে continuous-এ শোনা যায়: I am loving this weather, I am hoping you can join us।", en: "Modern spoken English and advertising have bent the rule for one group — love, like, enjoy, hope, wonder can be heard in the continuous as momentary feelings: I am loving this weather, I am hoping you can join us.", hi: "आधुनिक बोलचाल और विज्ञापन-भाषा एक समूह के लिए नियम झुका देती है — love, like, enjoy, hope, wonder क्षणिक भावना के रूप में continuous में सुना जा सकता है: I am loving this weather, I am hoping you can join us।" },
            { bn: "এটা কথ্য রং — পরীক্ষার লেখা বা রিপোর্টে I love / I hope-ই লিখুন।", en: "This is casual colour — in exam answers and reports write I love / I hope.", hi: "यह केवल बोलचाल का रंग है — परीक्षा और रिपोर्ट में I love / I hope ही लिखें।" },
            { bn: "negative-তেও state অপরিবর্তিত — I am not understanding ভুল, I do not understand ঠিক।", en: "The state stays unchanged in negatives — I am not understanding is wrong, I do not understand is right.", hi: "negative में भी state अपरिवर्तित — I am not understanding गलत, I do not understand सही।" },
          ],
          formula: {
            bn: "কর্তা + state verb (simple form) → I know him; continuous নয় — I am knowing him ভুল",
            en: "subject + state verb (simple form) → I know him; not continuous — I am knowing him is wrong",
            hi: "कर्ता + state verb (simple form) → I know him; continuous नहीं — I am knowing him गलत",
          },
          examples: [
            {
              wrong: "I am knowing his brother very well.",
              right: "I know his brother very well.",
              note: {
                bn: "know, believe, own, contain — এদের মতো state verb চলমান প্রক্রিয়া নয়, তাই continuous হয় না; কথ্য ভাষাতেও know-এর continuous অচল।",
                en: "State verbs such as know, believe, own, contain are not ongoing processes, so they reject the continuous — even in casual speech 'I am knowing' stays wrong.",
                hi: "know, believe, own, contain जैसे state verbs चलती प्रक्रिया नहीं हैं, इसलिए continuous नहीं लेते — बोलचाल में भी 'I am knowing' गलत ही है।",
              },
            },
            {
              wrong: "I am loving this biryani! (in an exam essay)",
              right: "I love this biryani! (in an exam essay)",
              note: {
                bn: "পরীক্ষার উত্তরপত্রে state verb-এর continuous এড়িয়ে চলুন; I am loving it কেবল কথ্য, বিজ্ঞাপনি রঙে চলে — মুহূর্তের আনন্দ বোঝাতে।",
                en: "Avoid continuous state verbs in exam writing; I am loving it belongs to casual, advertising-flavoured speech for a moment's delight.",
                hi: "परीक्षा-लेखन में state verbs का continuous टालें; I am loving it केवल बोलचाल, विज्ञापनी रंग की बात है।",
              },
            },
            {
              wrong: "Sorry, I am not understanding the last part.",
              right: "Sorry, I do not understand the last part.",
              note: {
                bn: "understand প্রায় সব প্রসঙ্গে state — negative-তেও continuous অচল; বাংলা 'বুঝতে পারছি না' রূপটাই এই ভুলের উৎস।",
                en: "understand is a state verb in nearly every context — the continuous fails even in negatives; Bengali 'বুঝতে পারছি না' is the source of this error.",
                hi: "understand लगभग हर संदर्भ में state verb है — negative में भी continuous नहीं चलता; हिंदी 'समझ नहीं पा रहा' ही इस गलती का स्रोत है।",
              },
            },
            {
              wrong: "She is owning two houses in Dhaka.",
              right: "She owns two houses in Dhaka.",
              note: {
                bn: "own = মালিকানার state — কথ্য ভাষাতেও কখনও continuous হয় না; ব্যতিক্রমহীন নিয়ম।",
                en: "own is a pure ownership state — it never takes the continuous, even in casual speech; this rule has no exceptions.",
                hi: "own शुद्ध स्वामित्व की अवस्था है — बोलचाल में भी कभी continuous नहीं होता; यह नियम अपवादरहित है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🎭 দ্বৈত verb — think, have, see-এর দুই চরিত্র",
            en: "🎭 Dual verbs — the two faces of think, have, see",
            hi: "🎭 दोहरे verbs — think, have, see के दो चेहरे",
          },
          lead: {
            bn: "একই verb কখনো state, কখনো কাজ — অর্থ বদলালে রূপও বদলায়।",
            en: "The same verb can be a state or an action — change the meaning, change the form.",
            hi: "एक ही verb कभी state, कभी काम — अर्थ बदले तो रूप भी बदले।",
          },
          points: [
            { bn: "কিছু verb **state ও dynamic** — দুই চরিত্রেই চলে, আর অর্থ বদলে যায়।", en: "Some verbs are **both state and dynamic** — they work in both roles, and the meaning shifts.", hi: "कुछ verbs **state और dynamic दोनों** — दोनों रूप में चलते हैं, और अर्थ बदल जाता है।" },
            { bn: "প্রশ্নটা 'verb-টা state কি' নয় — প্রশ্নটা 'এই বাক্যে verb-টা state অর্থে ব্যবহৃত কি'।", en: "The question is not 'is this verb a state verb' — it is 'is it used in its state sense in this sentence'.", hi: "सवाल यह नहीं कि 'verb state है कि नहीं' — सवाल यह है कि 'इस वाक्य में verb state-अर्थ में है कि नहीं'।" },
            { bn: "**think** — মতামত হলে simple: I think he is right; মাথা চালালে continuous: I am thinking about it।", en: "**think** — opinion takes the simple: I think he is right; deliberating takes the continuous: I am thinking about it.", hi: "**think** — राय हो तो simple: I think he is right; सोचना चल रहा हो तो continuous: I am thinking about it।" },
            { bn: "**have** — মালিকানা হলে simple: I have a car; খাওয়া বা অনুভব হলে continuous: I am having lunch, I am having second thoughts।", en: "**have** — ownership takes the simple: I have a car; eating or feeling takes the continuous: I am having lunch, I am having second thoughts.", hi: "**have** — स्वामित्व हो तो simple: I have a car; खाना या अनुभव हो तो continuous: I am having lunch, I am having second thoughts।" },
            { bn: "**see** — বোঝা হলে simple: I see what you mean; দেখা করা হলে continuous: I am seeing the doctor tomorrow।", en: "**see** — understanding takes the simple: I see what you mean; meeting takes the continuous: I am seeing the doctor tomorrow.", hi: "**see** — समझना हो तो simple: I see what you mean; मिलना हो तो continuous: I am seeing the doctor tomorrow।" },
          ],
          examples: [
            {
              wrong: "I have second thoughts about the deal.",
              right: "I am having second thoughts about the deal.",
              note: {
                bn: "এখানে have = 'অনুভব করছি' — dynamic ব্যবহার, তাই continuous বৈধ; মালিকানার have (I have a car) continuous হয় না।",
                en: "Here have = 'experiencing' — a dynamic use, so the continuous is valid; ownership have (I have a car) never takes it.",
                hi: "यहाँ have = 'अनुभव कर रहा हूँ' — dynamic उपयोग, इसलिए continuous मान्य; स्वामित्ववाला have (I have a car) कभी continuous नहीं लेता।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "⚠️ উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "⚠️ Subtle errors made by advanced learners",
            hi: "⚠️ एडवांस्ड शिक्षार्थियों की सूक्ष्म गलतियाँ",
          },
          lead: {
            bn: "গড়ন ঠিক, তবু ভুল — উচ্চ স্তরের ভুলগুলো চোখে পড়ে না, খুঁজে বের করতে হয়।",
            en: "Well-formed yet wrong — advanced errors hide from a quick read; hunt them down.",
            hi: "ढाँचा सही, फिर भी गलत — एडवांस्ड गलतियाँ झलकती नहीं, खोजनी पड़ती हैं।",
          },
          points: [
            { bn: "**Perfect-হারানো** — since/for + এখনও চলমান কাজ মানে have/has been + -ing; বাংলা 'থাকি' রূপের টানে অনেকে লেখেন I am living here since 2019।", en: "**Misplacing the perfect** — since/for with an ongoing action means have/has been + -ing; the pull of the Bengali 'I live' form makes many write I am living here since 2019.", hi: "**perfect की गलत जगह** — since/for + अब भी चलता काम यानी have/has been + -ing; हिंदी 'रहता हूँ' के खिंचाव से कई लिख देते हैं I am living here since 2019।" },
            { bn: "**Time clause-এ will** — when he will come; when/until/as soon as-clause-এ will কখনো নয়।", en: "**Will in time clauses** — when he will come; will never enters when/until/as soon as clauses.", hi: "**time clause में will** — when he will come; when/until/as soon as clause में will कभी नहीं।" },
            { bn: "**by + সময়** দেখেও future perfect না বসানো — by-কে দেখেই ঘড়ির কাঁটা সামনে বসান।", en: "**Seeing by + time** and still not choosing the future perfect — let every by pull your timeline forward.", hi: "**by + समय** देखकर भी future perfect न लगाना — by देखते ही टाइमलाइन आगे बढ़ाएँ।" },
            { bn: "**Past perfect-এর অতি-ব্যবহার** — After I had eaten dinner, I had watched TV; শুধু আগের ঘটনাতেই had, পরেরটায় সাধারণ past।", en: "**Past perfect over-use** — After I had eaten dinner, I had watched TV; only the earlier event takes had, the later one plain past.", hi: "**past perfect का अति-प्रयोग** — After I had eaten dinner, I had watched TV; केवल पहली घटना पर had, बाद वाली पर साधारण past।" },
            { bn: "প্রতিটা past বাক্যে had ছড়িয়ে দিলে গল্প ভারী, জাদুঘরের নোটের মতো শোনায়।", en: "Sprinkling had into every past sentence makes a story heavy, like a museum label.", hi: "हर past वाक्य में had बिखेर देने से कहानी भारी, संग्रहालय-पट्टिका जैसी लगने लगती है।" },
            { bn: "**wish/if only-এর backshift** — বর্তমান পরিস্থিতির আফসোসেও অতীত রূপ বসে: I wish I had more time।", en: "**The backshift after wish/if only** — even a present regret takes a past form: I wish I had more time.", hi: "**wish/if only का backshift** — वर्तमान पछतावे पर भी past रूप बैठता है: I wish I had more time।" },
            { bn: "এই ভুলগুলো বাক্যের গড়ন ঠিক রেখেই ঘটে, তাই পড়তে গিয়ে ধরা পড়ে না — মাঝে মাঝে নিজের লেখায় খুঁজে দেখুন।", en: "These errors happen inside well-formed sentences, so they slip past a quick read — scan your own writing from time to time.", hi: "ये गलतियाँ व्यवस्थित वाक्यों के भीतर घटती हैं, इसलिए पढ़ते हुए पकड़ में नहीं आतीं — समय-समय पर अपने लेखन में खोजें।" },
          ],
          examples: [
            {
              wrong: "When he will arrive, we will start the meeting.",
              right: "When he arrives, we will start the meeting.",
              note: {
                bn: "when/until/as soon as-clause ভবিষ্যতের হলেও present form — will শুধু মূল বাক্যে; বাংলা 'যখন আসবে' রূপটা will টেনে আনে।",
                en: "when/until/as soon as clauses use the present form even about the future — will only in the main clause; the Bengali 'যখন আসবে' drags will in.",
                hi: "when/until/as soon as clause भविष्य की बात पर भी present form लेते हैं — will केवल मुख्य वाक्य में; हिंदी 'जब आएगा' will खींच लाता है।",
              },
            },
            {
              wrong: "After I had finished dinner, I had watched the news.",
              right: "After I had finished dinner, I watched the news.",
              note: {
                bn: "দুই ঘটনার ক্রম একবারই চিহ্নিত করতে হয় — আগেরটায় had, পরেরটায় সাধারণ past; দুবার had লিখলে দুটোই আরও আগের ঘটনা মনে হয়।",
                en: "Mark the order once — the earlier event takes had, the later one plain past; doubling had makes both sound like even earlier events.",
                hi: "क्रम एक बार ही चिह्नित करें — पहली घटना पर had, बाद वाली पर साधारण past; दोनों पर had लिखने से दोनों और पुरानी लगने लगती हैं।",
              },
            },
            {
              wrong: "I wish I have more time to practise.",
              right: "I wish I had more time to practise.",
              note: {
                bn: "wish-এর পরে বাস্তবের বিপরীত কল্পনা — tense এক ধাপ পিছিয়ে যায় (backshift); বর্তমান সমস্যাতেও had।",
                en: "After wish the tense steps one step back (backshift) — even a present problem takes had.",
                hi: "wish के बाद tense एक क़दम पीछे खिसकता है (backshift) — वर्तमान समस्या पर भी had।",
              },
            },
            {
              wrong: "By the time the project ends, the team will spend a crore.",
              right: "By the time the project ends, the team will have spent a crore.",
              note: {
                bn: "by the time + ভবিষ্যৎ = ওই আগেই খরচ শেষ — সম্পূর্ণতার দৃষ্টি, তাই future perfect; by-কে দেখেই ঘড়ির কাঁটা সামনে বসান।",
                en: "by the time + future = the spending is over before that point — the completion viewpoint, hence the future perfect; let every by pull your timeline forward.",
                hi: "by the time + भविष्य = उससे पहले ही ख़र्च पूरा — पूर्णता की दृष्टि, इसलिए future perfect; by देखते ही टाइमलाइन आगे बढ़ाएँ।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "📖 ছোট গল্পে দেখা যাক",
            en: "📖 Seen in a short story",
            hi: "📖 छोटी कहानी में देखिए",
          },
          lead: {
            bn: "একটা ছোট ভ্রমণ-গল্প — এই পাঠের প্রতিটা প্যাটার্ন একসঙ্গে কাজ করছে।",
            en: "One short travel story — every pattern of this lesson working together.",
            hi: "एक छोटी यात्रा-कहानी — पाठ के सारे पैटर्न एक साथ काम कर रहे हैं।",
          },
          points: [
            { bn: "'The 6 o'clock ferry leaves from Sadarghat, and by 7 we will be crossing the Buriganga' — সময়সূচির ঘটনা, তারপর ওই মুহূর্তে চলমান দৃশ্য।", en: "'The 6 o'clock ferry leaves from Sadarghat, and by 7 we will be crossing the Buriganga' — a timetable event, then a scene in progress at that moment.", hi: "'The 6 o'clock ferry leaves from Sadarghat, and by 7 we will be crossing the Buriganga' — सारणी की घटना, फिर उस क्षण चलता दृश्य।" },
            { bn: "'Rina is joining us — she booked the tickets last week' — বুকিং হয়ে যাওয়া arrangement, তাই present continuous।", en: "'Rina is joining us — she booked the tickets last week' — a booked arrangement, hence the present continuous.", hi: "'Rina is joining us — she booked the tickets last week' — बुक हो चुका arrangement, इसलिए present continuous।" },
            { bn: "'By the time the office bus reaches Gabtoli, we will have finished breakfast' — by the time + ভবিষ্যৎ, সম্পূর্ণতার দৃষ্টি।", en: "'By the time the office bus reaches Gabtoli, we will have finished breakfast' — by the time + future, the completion viewpoint.", hi: "'By the time the office bus reaches Gabtoli, we will have finished breakfast' — by the time + भविष्य, पूर्णता की दृष्टि।" },
            { bn: "'This time tomorrow I will be sitting in the Chittagong workshop, and honestly, I am loving the idea of a work trip' — নির্দিষ্ট মুহূর্তে চলমান + কথ্য রঙের state continuous।", en: "'This time tomorrow I will be sitting in the Chittagong workshop, and honestly, I am loving the idea of a work trip' — in progress at a specific moment + a casual state continuous.", hi: "'This time tomorrow I will be sitting in the Chittagong workshop, and honestly, I am loving the idea of a work trip' — ठीक क्षण पर चलता काम + बोलचाल रंग का state continuous।" },
            { bn: "'The manager had promised us this visit months before the project even started' — project started-এর আগের প্রতিশ্রুতি, তাই past perfect।", en: "'The manager had promised us this visit months before the project even started' — a promise made before 'the project started', hence the past perfect.", hi: "'The manager had promised us this visit months before the project even started' — 'project started' से पहले का वादा, इसलिए past perfect।" },
            { bn: "প্রতিটা বাক্যে জিজ্ঞেস করুন: বক্তা কাজটাকে কোন দৃষ্টিতে দেখছে — সময়সূচি, চলমান, সম্পূর্ণ, নাকি মুহূর্তের অনুভূতি?", en: "Ask of each sentence: from which viewpoint is the speaker seeing the action — schedule, in progress, complete, or a moment's feeling?", hi: "हर वाक्य में पूछें: बोलने वाला काम को किस नज़रिए से देख रहा है — सारणी, चल रहा, पूरा, या क्षणिक भावना?" },
          ],
          examples: [
            {
              wrong: "The ferry will leave from Sadarghat at 6; it is on the official timetable.",
              right: "The ferry leaves from Sadarghat at 6; it is on the official timetable.",
              note: {
                bn: "official timetable — শব্দটাই সিদ্ধান্ত বদলে দেয়: নির্ধারিত সময়সূচি present simple-এই থাকে।",
                en: "official timetable — the phrase itself settles it: fixed schedules stay in the present simple.",
                hi: "official timetable — यही शब्द निर्णय बदल देता है: तय सारणी present simple में रहती है।",
              },
            },
            {
              wrong: "By 7 we will cross the Buriganga. (meaning: at 7, we will be mid-river)",
              right: "By 7 we will be crossing the Buriganga. (meaning: at 7, we will be mid-river)",
              note: {
                bn: "'৭টার সময় নদীর মাঝখানে থাকব' — চলমান দৃশ্য → will be crossing; '৭টার মধ্যে পার হয়ে যাব' বোঝালে will have crossed।",
                en: "'At 7 we will be mid-river' — a scene in progress → will be crossing; 'we will be over by 7' would be will have crossed.",
                hi: "'7 बजे नदी के बीच होंगे' — चलता दृश्य → will be crossing; '7 तक पार कर लेंगे' होता तो will have crossed।",
              },
            },
            {
              wrong: "The manager has promised us this visit months before the project started.",
              right: "The manager had promised us this visit months before the project started.",
              note: {
                bn: "'project started'-এর আগের প্রতিশ্রুতি → past perfect; বাংলা 'করেছিলেন' রূপ শুনে has বসিয়ে দেওয়া হয়, কিন্তু রেফারেন্স-বিন্দুটা অতীত।",
                en: "A promise made before 'the project started' → past perfect; the Bengali 'করেছিলেন' tempts learners into has, but the reference point is past.",
                hi: "'project started' से पहले किया वादा → past perfect; हिंदी 'कर चुके थे' सुनकर has लग जाता है, पर संदर्भ-बिंदु अतीत है।",
              },
            },
            {
              wrong: "This time tomorrow I will sit in the workshop.",
              right: "This time tomorrow I will be sitting in the workshop.",
              note: {
                bn: "'আগামীকাল এই সময়ে' ওই মুহূর্তে বসে থাকার অবস্থা চলমান — future continuous; will sit মানে ওই সময়ে বসা শুরু করা।",
                en: "'This time tomorrow' the sitting will be ongoing — future continuous; will sit would mean the sitting starts at that moment.",
                hi: "'कल इसी समय' बैठना चल रहा होगा — future continuous; will sit का मतलब होगा उसी क्षण बैठना शुरू।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "📊 এক নজরে + অনুশীলন",
            en: "📊 At a glance + practice",
            hi: "📊 एक नज़र में + अभ्यास",
          },
          lead: {
            bn: "ছয়টা ম্যাপিং আর একটা অনুশীলন — পুরো পাঠ পকেটে নেওয়ার মতো ছোট।",
            en: "Six mappings and one exercise — small enough to carry the whole lesson in your pocket.",
            hi: "छह मैपिंग और एक अभ्यास — पूरा पाठ जेब में रखने लायक छोटा।",
          },
          points: [
            { bn: "এই ছয়টা ম্যাপিং — পুরো পাঠের এক নজরে সার; মাঝে মাঝে ফিরে মিলিয়ে নিন।", en: "These six mappings are the whole lesson at a glance — come back and check them now and then.", hi: "ये छह मैपिंग — पूरे पाठ का एक नज़र का सार; समय-समय पर मिलान करें।" },
            { bn: "পাঠের বাইরের অনুশীলন — নিজের আগামীকালের প্ল্যান তিন বাক্যে লিখুন।", en: "Practice beyond the lesson — write tomorrow's plan in three sentences.", hi: "पाठ से बाहर अभ्यास — कल की अपनी योजना तीन वाक्यों में लिखें।" },
            { bn: "ইচ্ছা করে চার রকম ভবিষ্যৎ-রূপ ফিট করুন — will, going to, present continuous, present simple।", en: "Deliberately fit in all four future forms — will, going to, present continuous, present simple.", hi: "जानबूझकर चारों future रूप फिट करें — will, going to, present continuous, present simple।" },
            { bn: "আর প্রশ্নটা সবসময় এক — বক্তা কাজটাকে কোন দৃষ্টিতে দেখছে?", en: "And the question never changes — from which viewpoint is the speaker seeing the action?", hi: "और सवाल हमेशा एक — बोलने वाला काम को किस नज़रिए से देख रहा है?" },
          ],
          table: {
            head: [
              { bn: "পরিস্থিতি", en: "Situation", hi: "स्थिति" },
              { bn: "সঠিক রূপ", en: "The right form", hi: "सही रूप" },
            ],
            rows: [
              [
                { bn: "সময়সূচির ঘটনা", en: "a timetable event", hi: "सारणी की घटना" },
                { bn: "present simple", en: "present simple", hi: "present simple" },
              ],
              [
                { bn: "ব্যক্তিগত arrangement", en: "a personal arrangement", hi: "निजी arrangement" },
                { bn: "present continuous", en: "present continuous", hi: "present continuous" },
              ],
              [
                { bn: "ভবিষ্যতের নির্দিষ্ট মুহূর্তে চলমান", en: "in progress at a specific future moment", hi: "भविष्य के ठीक क्षण पर चलता काम" },
                { bn: "will be doing", en: "will be doing", hi: "will be doing" },
              ],
              [
                { bn: "by + ভবিষ্যৎ সময়", en: "by + future time", hi: "by + भविष्य-समय" },
                { bn: "will have done", en: "will have done", hi: "will have done" },
              ],
              [
                { bn: "দুই অতীতের আগেরটা", en: "the earlier of two pasts", hi: "दो अतीतों में पहली" },
                { bn: "had + V3", en: "had + V3", hi: "had + V3" },
              ],
              [
                { bn: "কথ্য রঙে state verb", en: "a state verb in casual colour", hi: "बोलचाल रंग में state verb" },
                { bn: "am loving / am hoping", en: "am loving / am hoping", hi: "am loving / am hoping" },
              ],
            ],
          },
          examples: [],
        },
      ],
      tips: [
        {
          bn: "by + সময় দেখলে চোখ বন্ধ করে future perfect বসান; this time বা at + সময় + চলমান দৃশ্য দেখলে future continuous।",
          en: "When you see by + time, choose the future perfect; when you see this time or at + time with a scene in progress, choose the future continuous.",
          hi: "by + समय देखते ही future perfect लगाएँ; this time या at + समय + चलता दृश्य देखें तो future continuous।",
        },
        {
          bn: "train, bus, flight, class, exam, show — এই শব্দগুলোর সঙ্গে ঘড়ির সময় থাকলে ভবিষ্যতের বাক্যেও present simple।",
          en: "With train, bus, flight, class, exam, show and clock time, use the present simple even in a future sentence.",
          hi: "train, bus, flight, class, exam, show के साथ घड़ी का समय हो तो भविष्य-वाक्य में भी present simple।",
        },
        {
          bn: "when, before, after, until, as soon as-clause-এ will কখনও নয় — ভবিষ্যৎ অর্থেও present form বসান।",
          en: "Never put will in when/before/after/until/as soon as clauses — use the present form even for future meaning.",
          hi: "when, before, after, until, as soon as clause में will कभी नहीं — भविष्य के लिए भी present form लगाएँ।",
        },
        {
          bn: "since/for দেখলে প্রশ্ন করুন: কাজটা এখনও চলছে? হ্যাঁ হলে have/has been + -ing।",
          en: "On seeing since/for ask: is the action still going on? If yes, use have/has been + -ing.",
          hi: "since/for देखकर पूछें: काम अब भी चल रहा है? हाँ हो तो have/has been + -ing।",
        },
        {
          bn: "wish/if only-এর পরে tense সবসময় এক ধাপ পিছিয়ে যায় — বর্তমান আফসোসেও অতীত রূপ।",
          en: "After wish/if only the tense always steps back one — even present regrets take a past form.",
          hi: "wish/if only के बाद tense हमेशा एक क़दम पीछे — वर्तमान पछतावे पर भी past रूप।",
        },
        {
          bn: "past perfect গল্পে মসলার মতো — দুটো অতীত ঘটনার ক্রম স্পষ্ট করতেই শুধু দিন, প্রতি বাক্যে নয়।",
          en: "Use the past perfect like a spice — only to order two past events, not in every sentence.",
          hi: "past perfect मसाले जैसा है — केवल दो अतीत घटनाओं का क्रम साफ़ करने के लिए, हर वाक्य में नहीं।",
        },
        {
          bn: "I am loving / I am hoping কথ্য ভাষার রং; রিপোর্ট, ইমেইল বা পরীক্ষার উত্তরে I love / I hope লিখুন।",
          en: "I am loving / I am hoping is casual colour; in reports, emails or exam answers write I love / I hope.",
          hi: "I am loving / I am hoping बोलचाल का रंग है; रिपोर्ट, ईमेल या परीक्षा में I love / I hope लिखें।",
        },
        {
          bn: "বাংলা থেকে অনুবাদের আগে জিজ্ঞেস করুন: এটা schedule, arrangement, অভিপ্রায়, নাকি মুহূর্তের সিদ্ধান্ত? — উত্তরই ভবিষ্যৎ-রূপ ঠিক করবে।",
          en: "Before translating from Bengali ask: is this a schedule, an arrangement, an intention, or a decision made now? — the answer picks the future form.",
          hi: "हिंदी/बांग्ला से अनुवाद से पहले पूछें: यह schedule, arrangement, इरादा, या अभी का निर्णय? — जवाब ही future-रूप चुनेगा।",
        },
        {
          bn: "রাতে ঘুমানোর আগে দিনের ঘটনাগুলো মুখে বলুন — আগে ঘটা ঘটনায় had, পরেরগুলোতে সাধারণ past; এভাবেই past perfect-এর নিয়ন্ত্রণ আসে।",
          en: "Retell the day's events aloud before bed — had on the earlier events, plain past on the rest; that is how past perfect control grows.",
          hi: "सोने से पहले दिन की घटनाएँ बोलकर दोहराएँ — पहली घटनाओं पर had, बाकी पर साधारण past; इसी से past perfect का नियंत्रण आता है।",
        },
      ],
      quiz: [
        {
          question: "The Dhaka train ______ at 6 tomorrow morning; it is on the official timetable.",
          options: ["will leave", "leaves", "is leaving", "leave"],
          answer: 1,
          explanation: {
            bn: "নির্ধারিত সময়সূচির ঘটনা (train + ঘড়ির সময়) — ভবিষ্যতের জন্যও present simple: leaves।",
            en: "A fixed timetable event (train + clock time) takes the present simple even for the future: leaves.",
            hi: "तय समय-सारणी की घटना (train + समय) — भविष्य के लिए भी present simple: leaves।",
          },
        },
        {
          question: "This time next Sunday I ______ on the beach in Cox's Bazar.",
          options: ["will lie", "will be lying", "am lying", "lie"],
          answer: 1,
          explanation: {
            bn: "'আগামী রবিবার এই সময়ে' — ওই মুহূর্তে শুয়ে থাকা চলমান → future continuous: will be lying।",
            en: "'This time next Sunday' — at that moment the lying-down is in progress → future continuous: will be lying.",
            hi: "'अगले रविवार इसी समय' — उस क्षण लेटना चल रहा होगा → future continuous: will be lying।",
          },
        },
        {
          question: "By December we ______ the whole syllabus.",
          options: ["will finish", "are finishing", "will have finished", "finish"],
          answer: 2,
          explanation: {
            bn: "by + ভবিষ্যৎ সময় = ওই সময়ের মধ্যে সম্পূর্ণ → future perfect: will have finished।",
            en: "by + future time = complete no later than that time → future perfect: will have finished.",
            hi: "by + भविष्य-समय = उस समय तक पूरा → future perfect: will have finished।",
          },
        },
        {
          question: "______ you ______ the office car tonight? I might need it later.",
          options: ["Will — use", "Do — use", "Will — be using", "Are — using"],
          answer: 2,
          explanation: {
            bn: "অন্যের পরিকল্পনা জানার polite জিজ্ঞাসা → future continuous: Will you be using...? সরাসরি will you use কড়া শোনায়।",
            en: "A polite enquiry about someone's plans → future continuous: Will you be using...? A bare will you use sounds abrupt.",
            hi: "किसी की योजना जानने का विनम्र प्रश्न → future continuous: Will you be using...? सीधा will you use रूखा लगता है।",
          },
        },
        {
          question: "When she ______, call me immediately.",
          options: ["will arrive", "arrives", "is arriving", "arrive"],
          answer: 1,
          explanation: {
            bn: "when-clause-এ ভবিষ্যৎ অর্থেও present form: arrives — will কেবল মূল বাক্যে।",
            en: "A when-clause takes the present form even for future meaning: arrives — will only in the main clause.",
            hi: "when-clause भविष्य के लिए भी present form लेता है: arrives — will केवल मुख्य वाक्य में।",
          },
        },
        {
          question: "I ______ in this city since 2019.",
          options: ["am living", "live", "have been living", "lived"],
          answer: 2,
          explanation: {
            bn: "since + এখনও চলমান কাজ → present perfect continuous: have been living; present simple/continuous অচল।",
            en: "since + an action still in progress → present perfect continuous: have been living; the simple or continuous present fails here.",
            hi: "since + अब भी चल रहा काम → present perfect continuous: have been living; present simple/continuous यहाँ नहीं चलता।",
          },
        },
        {
          question: "I wish I ______ more free time these days.",
          options: ["have", "had", "will have", "am having"],
          answer: 1,
          explanation: {
            bn: "wish-এর পরে backshift — বর্তমান পরিস্থিতির আফসোসেও অতীত রূপ: had।",
            en: "After wish the tense backshifts — even a present regret takes the past form: had.",
            hi: "wish के बाद backshift — वर्तमान पछतावे पर भी past रूप: had।",
          },
        },
        {
          question: "Why is 'I am loving this weather!' acceptable in casual speech?",
          options: [
            "Because love is always a state verb",
            "Because in casual English love can express a momentary feeling",
            "Because all verbs take the continuous in speech",
            "Because it is a question",
          ],
          answer: 1,
          explanation: {
            bn: "কথ্য ইংরেজিতে love মুহূর্তের আনন্দ বোঝাতে continuous নিতে পারে; তবে এটা কথ্য রং — লেখায় I love বসান।",
            en: "In casual English love can take the continuous to express a momentary delight; still, in writing prefer I love.",
            hi: "बोलचाल की अंग्रेज़ी में love क्षणिक आनंद के लिए continuous ले सकता है; लेखन में I love ही रखें।",
          },
        },
        {
          question: "The show ______ by the time we reached the hall.",
          options: ["already started", "had already started", "has already started", "already starts"],
          answer: 1,
          explanation: {
            bn: "'reached'-এর আগেই শো শুরু — দুই অতীতের আগেরটা → past perfect: had already started।",
            en: "The show began before 'we reached' — the earlier of two past events → past perfect: had already started.",
            hi: "'पहुँचने' से पहले ही शो शुरू — दो अतीतों में पहली → past perfect: had already started।",
          },
        },
        {
          question: "By the time you arrive tonight, I ______ dinner, so we can eat at once.",
          options: ["will cook", "will be cooking", "will have cooked", "cook"],
          answer: 2,
          explanation: {
            bn: "'তুমি আসার আগেই রান্না শেষ, তাই একসঙ্গে খেতে পারব' — by the time-এ সম্পূর্ণতা → future perfect: will have cooked।",
            en: "The cooking must be OVER before you arrive, so we can eat together — completion with by the time → future perfect: will have cooked.",
            hi: "'तुम्हारे आने से पहले खाना बन चुका होगा, ताकि साथ खा सकें' — by the time के साथ पूर्णता → future perfect: will have cooked।",
          },
        },
      ],
    },
  },
];

export default SEED_GRAMMAR_V4_A1A;
