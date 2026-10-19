// ─── Grammar seeds v4: Advanced grammar batch A1B (2 lessons) ───
// Task 10 — point-form roadmap upgrade. Source: grammar-v3-a1.ts.
// Lessons: Participle Clauses (Unit 2), Cleft Sentences (Unit 3).
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_A1B: SeedGrammarV4Entry[] = [
  /* ── 1. Participle Clauses (Unit 2) ───────────────────────────────── */
  {
    topic: "Participle Clauses",
    level: "advanced",
    title: "Participle Clauses",
    unit: 2,
    sortOrder: 1,
    data: {
      title: {
        bn: "পার্টিসিপল ক্লজ: -ing দিয়ে বাক্য চেপে লেখা",
        en: "Participle Clauses",
        hi: "पार्टिसिपल क्लॉज़: -ing से वाक्य संकुचित करना",
      },
      intro: {
        bn: "Learning Path-এর advanced স্তরের এটি দ্বিতীয় পাঠ (Unit 2)। এটি ভালোভাবে বোঝার জন্য আগের ইউনিটের Advanced Tense & Aspect Nuances-এর সঙ্গে intermediate স্তরের Relative Clauses ও Passive Voice পাঠ দুটো শেষ করে নিন — participle clause আসলে এই দুটোর সংকুচিত (compressed) রূপ। বাংলায় আমরা অবিচ্ছিন্ন কৃদন্ত দিয়ে অবশ্যই এ কাজ করি — 'হেঁটে বাড়ি ফিরছিলাম, একটা দুর্ঘটনা দেখলাম', 'কাজ শেষ করে সে চলে গেল' — অর্থাৎ কাঠামোটা চেনা চেনা। কিন্তু ইংরেজিতে এর নিজস্ব স্ব-অর্থ নিয়ম আছে: কর্তা এক হতে হবে, আগের কাজে having + V3, আর কর্তা-বিহীন participle হলে বাক্য মজা করে অন্য কাউকে দোষ দেয় (dangling modifier)। এই পাঠে চার রকম participle clause, তাদের গঠন, dangling ধরার কৌশল আর লেখায় সুন্দরভাবে ব্যবহারের নিয়ম শিখব।",
        en: "This is the second lesson of the advanced Learning Path (Unit 2). To follow it well, first finish Unit 1 (Advanced Tense & Aspect Nuances) plus the intermediate lessons on Relative Clauses and Passive Voice — a participle clause is simply a compressed form of both. Bengali does the same job with conjunctive participles — 'হেঁটে বাড়ি ফিরছিলাম, একটা দুর্ঘটনা দেখলাম', 'কাজ শেষ করে সে চলে গেল' — so the structure feels familiar. English, however, has its own strict rules: the subject must be shared, an earlier action needs having + V3, and a participle with no owner commits the famous dangling-modifier crime. In this lesson we cover the four participle clause types, their formation, how to catch danglers, and how to use them elegantly in writing.",
        hi: "यह एडवांस्ड Learning Path का दूसरा पाठ (Unit 2) है। इसे अच्छी तरह समझने के लिए पहले Unit 1 (Advanced Tense & Aspect Nuances) और intermediate स्तर के Relative Clauses व Passive Voice पाठ पूरे करें — participle clause दरअसल दोनों का संकुचित रूप है। हिंदी में हम द्वंद्व-समास/कृदंत से यही काम करते हैं — 'घर लौटते हुए मैंने एक दुर्घटना देखी', 'काम करके वह चला गया' — ढाँचा परिचित लगता है। पर अंग्रेज़ी में इसके सख़्त नियम हैं: subject साझा होना चाहिए, पहले का काम having + V3 लेता है, और बेमालिक participle प्रसिद्ध dangling-modifier ग़लती कर बैठता है। इस पाठ में चारों प्रकार, गठन, dangling पकड़ने की तरकीब और लेखन में सुंदर प्रयोग सीखेंगे।",
      },
      roadmap: [
        { bn: "🎯 পুরো clause না লিখে কাজের কথা — participle clause-এর দুই কাজ", en: "🎯 Saying it without a full clause — the two jobs of a participle clause", hi: "🎯 पूरा clause लिखे बिना कहना — participle clause के दो काम" },
        { bn: "🏗️ চার রকম participle clause — V-ing, having + V3, V3, being + V3", en: "🏗️ Four kinds of participle clause — V-ing, having + V3, V3, being + V3", hi: "🏗️ चार प्रकार के participle clause — V-ing, having + V3, V3, being + V3" },
        { bn: "🚦 তিন প্রশ্নে সঠিক participle বাছাই — আর ভেঙে-দেখার পরীক্ষা", en: "🚦 Three questions to pick the right participle — plus the expansion test", hi: "🚦 तीन सवालों में सही participle का चुनाव — और खोलकर-देखने का परीक्षण" },
        { bn: "🔁 having + V3 — 'করে' বনাম 'করেই'-এর ফারাক", en: "🔁 having + V3 — the difference between 'doing' and 'having done'", hi: "🔁 having + V3 — 'करके' बनाम 'करके ही' का फ़र्क़" },
        { bn: "🚨 Dangling modifier ধরার ৩ ধাপ, মেরামতের ৩ রাস্তা", en: "🚨 Catching danglers in 3 steps, repairing them in 3 ways", hi: "🚨 Dangling पकड़ने के 3 चरण, मरम्मत के 3 रास्ते" },
        { bn: "✍️ নিষ্ক্রিয় participle — V3 দিয়ে শুরু: Built in 1990 গড়ন", en: "✍️ Passive participles — opening with V3: the Built in 1990 frame", hi: "✍️ निष्क्रिय participle — V3 से शुरुआत: Built in 1990 ढाँचा" },
        { bn: "🧩 Reduced relative ও absolute construction — লেখার ছুরি", en: "🧩 Reduced relatives and absolute constructions — the writer's knife", hi: "🧩 Reduced relatives और absolute constructions — लेखक की छुरी" },
        { bn: "⚠️ উচ্চ স্তরের সূক্ষ্ম ভুল — ভুল সূচনা, কমা, আর idiom-participle", en: "⚠️ Subtle advanced errors — wrong openers, commas, idiom-participles", hi: "⚠️ एडवांस्ड सूक्ष्म गलतियाँ — ग़लत आरंभ, कॉमा, idiom-participle" },
        { bn: "📖 ছোট গল্পে পাঁচ রং — প্রতিটা clause মনে মনে ভেঙে দেখা", en: "📖 Five shades in one short story — expanding every clause mentally", hi: "📖 छोटी कहानी में पाँच रंग — हर clause मन में खोलना" },
        { bn: "📋 এক নজরে — পুরো পাঠের ৬-সূত্র রিক্যাপ আর অনুশীলন", en: "📋 At a glance — a six-rule recap of the whole lesson and practice", hi: "📋 एक नज़र में — पूरे पाठ का 6-नियम रिकैप और अभ्यास" },
      ],
      sections: [
        {
          heading: {
            bn: "🎯 কখন ব্যবহার হয় — পুরো clause না লিখে কাজের কথা",
            en: "🎯 When to use them — saying it without a full clause",
            hi: "🎯 कब इस्तेमाल होते हैं — पूरा clause लिखे बिना कहना",
          },
          lead: {
            bn: "লেখাকে টানটান করার প্রথম হাতিয়ার — বাক্য ছোট হয়, অর্থ অটুট থাকে।",
            en: "The first tool for tightening written English — shorter sentences with the meaning fully intact.",
            hi: "लिखित अंग्रेज़ी कसने का पहला औज़ार — छोटे वाक्य, अर्थ पूरा बरक़रार।",
          },
          points: [
            { bn: "**Participle clause** — পূর্ণ clause-এর সংকুচিত রূপ: কর্তা আর সহায়ক verb ফেলে শুধু participle রাখলেই বাক্য ছোট হয়।", en: "**Participle clause** — a compressed full clause: drop the subject and helping verb, keep the participle, and the sentence shrinks.", hi: "**Participle clause** — पूर्ण clause का संकुचित रूप: subject और सहायक verb हटाकर केवल participle रखें, वाक्य छोटा हो जाता है।" },
            { bn: "'While I was walking home, I saw an accident' → 'Walking home, I saw an accident'; 'Because he had finished the report, he left' → 'Having finished the report, he left'।", en: "'While I was walking home, I saw an accident' becomes 'Walking home, I saw an accident'; 'Because he had finished the report, he left' becomes 'Having finished the report, he left'.", hi: "'While I was walking home, I saw an accident' बनता है 'Walking home, I saw an accident'; 'Because he had finished the report, he left' बनता है 'Having finished the report, he left'।" },
            { bn: "**কাজ ১** — সময়, কারণ বা পরিস্থিতি বোঝানো: Walking along the road, I noticed a strange house।", en: "**Job 1** — expressing time, reason or circumstance: Walking along the road, I noticed a strange house.", hi: "**काम 1** — समय, कारण या परिस्थिति बताना: Walking along the road, I noticed a strange house।" },
            { bn: "**কাজ ২** — relative clause সংকুচিত করা: the man who is standing at the door → the man standing at the door।", en: "**Job 2** — compressing a relative clause: the man who is standing at the door → the man standing at the door.", hi: "**काम 2** — relative clause को सिकोड़ना: the man who is standing at the door → the man standing at the door।" },
            { bn: "সংবাদের প্রথম লাইনে এরাই রাজা: Caught in heavy traffic, ministers arrived late।", en: "News openers are full of them: Caught in heavy traffic, ministers arrived late.", hi: "समाचार की पहली पंक्तियों में यही छाए रहते हैं: Caught in heavy traffic, ministers arrived late।" },
            { bn: "ছবি-ক্যাপশনে (A boy flying a kite on the rooftop), উপন্যাসের বর্ণনায় আর টানটান formal লেখায় এদেরই বেশি দেখবেন।", en: "You will meet them most in photo captions (A boy flying a kite on the rooftop), novelistic description and tight formal writing.", hi: "फ़ोटो-कैप्शन (A boy flying a kite on the rooftop), कथा-वर्णन और तने हुए औपचारिक लेखन में ये सबसे ज़्यादा मिलेंगे।" },
            { bn: "কথ্য ভাষায় মানুষ পুরো clause বলে; লেখায় লেখকের জাদুর লাঠি এই participle clause-ই।", en: "In speech people say the full clause; in writing the participle is the writer's wand.", hi: "बोलचाल में लोग पूरा clause बोलते हैं; लेखन में participle ही लेखक की जादूई छड़ी है।" },
            { bn: "শর্ত একটাই: participle-এর অন্তর্নিহিত কর্তা আর মূল বাক্যের কর্তা এক হতে হবে — পরের সব নিয়মের ভিত্তি এটাই।", en: "One condition: the implied subject of the participle and the subject of the main clause must be the same — this underpins everything ahead.", hi: "शर्त एक ही: participle का अन्तर्निहित subject और मुख्य वाक्य का subject एक हों — यही आगे के सब नियमों की नींव है।" },
          ],
          examples: [
            { wrong: "While I was walking home, while I was thinking about the exam, I saw an accident.", right: "Walking home, thinking about the exam, I saw an accident.", note: { bn: "একই কর্তার দুটো সমকালীন কাজ — দুটো while-clause-এর বদলে দুটো participle clause পাশাপাশি বসিয়ে বাক্য তাজা শোনায়।", en: "Two simultaneous actions with one subject — replace both while-clauses with two participle clauses side by side; the sentence breathes.", hi: "एक subject के दो समकालीन काम — दोनों while-clauses की जगह दो participle clauses क्रम से रखें; वाक्य ताज़ा लगता है।" } },
            { wrong: "The man who is standing at the door is our new manager.", right: "The man standing at the door is our new manager.", note: { bn: "relative clause-এর কর্তা who + be verb হলে দুটোই ফেলে দিয়ে শুধু -ing রাখা যায় — এটাই reduced relative clause।", en: "When a relative clause is subject + be, drop both and keep the -ing — that is a reduced relative clause.", hi: "relative clause अगर who + be हो, तो दोनों हटाकर केवल -ing रखें — यही reduced relative clause है।" } },
            { wrong: "Because she was tired after the long shift, she slept on the bus.", right: "Tired after the long shift, she slept on the bus.", note: { bn: "কারণ-বোঝাতে be + adjective থাকলে adjective-ই participle clause হয়ে যায় — Being শব্দটা বাদ দিলে আরও পরিপাটি।", en: "For a reason with be + adjective, the adjective itself becomes the participle clause — dropping 'Being' is even tighter.", hi: "कारण बताने में be + adjective हो तो adjective ही participle clause बन जाता है — 'Being' हटाने पर और भी सहज।" } },
            { wrong: "Having saw the signal, the driver slowed down.", right: "Having seen the signal, the driver slowed down.", note: { bn: "having-এর পরে সবসময় V3 (seen, done, written) — having + V2 নয়; এই মিশ্রণ প্রায়ই দেখা যায়।", en: "having always takes V3 (seen, done, written) — never having + V2; this mix-up appears surprisingly often.", hi: "having के बाद हमेशा V3 (seen, done, written) — having + V2 कभी नहीं; यह मिलावट अक्सर दिखती है।" } },
          ],
        },
        {
          heading: {
            bn: "🏗️ গঠন — চার রকম participle clause",
            en: "🏗️ Formation — four kinds of participle clause",
            hi: "🏗️ गठन — चार प्रकार के participle clause",
          },
          lead: {
            bn: "চার গড়ন এক টেবিলে — সক্রিয়, নিষ্ক্রিয়, আগের কাজ; মুখস্থ করলেই বাক্য চেপে লেখা মজার খেলা।",
            en: "All four shapes in one table — active, passive, earlier action; memorise it and compression becomes a game.",
            hi: "चारों ढाँचे एक तालिका में — सक्रिय, निष्क्रिय, पहले का काम; याद कर लीजिए, वाक्य सिकोड़ना खेल बन जाएगा।",
          },
          table: {
            head: [
              { bn: "গড়ন", en: "Form", hi: "गठन" },
              { bn: "কখন বসে", en: "When it fits", hi: "कब बैठता है" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [{ bn: "V-ing", en: "V-ing", hi: "V-ing" }, { bn: "সক্রিয় + একই সময়", en: "active + same time", hi: "सक्रिय + उसी समय" }, { bn: "Walking home, I met Karim", en: "Walking home, I met Karim", hi: "Walking home, I met Karim" }],
              [{ bn: "having + V3", en: "having + V3", hi: "having + V3" }, { bn: "সক্রিয় + আগের কাজ", en: "active + earlier action", hi: "सक्रिय + पहले का काम" }, { bn: "Having finished the report, he left", en: "Having finished the report, he left", hi: "Having finished the report, he left" }],
              [{ bn: "V3", en: "V3", hi: "V3" }, { bn: "নিষ্ক্রিয়", en: "passive", hi: "निष्क्रिय" }, { bn: "Built in 1990, the bridge still stands", en: "Built in 1990, the bridge still stands", hi: "Built in 1990, the bridge still stands" }],
              [{ bn: "being + V3", en: "being + V3", hi: "being + V3" }, { bn: "নিষ্ক্রিয় + কারণ/চলমান", en: "passive + reason/ongoing", hi: "निष्क्रिय + कारण/चलता" }, { bn: "Being written in simple English, the guide suits beginners", en: "Being written in simple English, the guide suits beginners", hi: "Being written in simple English, the guide suits beginners" }],
            ],
          },
          points: [
            { bn: "**Negative** — not + participle: Not knowing the answer, he stayed quiet।", en: "**Negative** — not + participle: Not knowing the answer, he stayed quiet.", hi: "**Negative** — not + participle: Not knowing the answer, he stayed quiet।" },
            { bn: "**Absolute construction** — participle-এর নিজের কর্তা থাকে: The sun having set, we lit the lanterns।", en: "**Absolute construction** — the participle owns its subject: The sun having set, we lit the lanterns.", hi: "**Absolute construction** — participle का अपना subject: The sun having set, we lit the lanterns।" },
            { bn: "মূল বাক্যের কর্তা আলাদা হলে participle-এর সামনে নিজের কর্তা বসে — এটাই absolute গড়নের শর্ত।", en: "When the main subject differs, the participle takes its own subject in front — that is the absolute construction's condition.", hi: "मुख्य subject अलग हो तो participle के पहले उसका subject बैठता है — यही absolute रूप की शर्त है।" },
            { bn: "**জায়গা** — participle clause মূল বাক্যের আগেও বসে, পরেও বসে।", en: "**Position** — a participle clause sits before or after the main clause.", hi: "**स्थान** — participle clause मुख्य वाक्य से पहले भी बैठता है, बाद में भी।" },
            { bn: "শুরুতে বসলে পরে কমা বাধ্যতামূলক: Having opened the gate, the guard waved at us।", en: "Before the main clause, a comma is compulsory: Having opened the gate, the guard waved at us.", hi: "शुरुआत में हो तो बाद में कॉमा अनिवार्य: Having opened the gate, the guard waved at us।" },
            { bn: "পরে বসলে কমা প্রায়ই দেওয়া হয়, বিশেষত কারণ-অর্থে: He left early, feeling unwell।", en: "After the main clause a comma is usual, especially for a reason: He left early, feeling unwell.", hi: "बाद में हो तो कॉमा आमतौर पर देते हैं, विशेषतः कारण-अर्थ में: He left early, feeling unwell।" },
          ],
          examples: [
            { wrong: "Finish the report, he left the office.", right: "Having finished the report, he left the office.", note: { bn: "V1 দিয়ে clause শুরু করা যায় না; আগের কাজ বোঝাতে having + V3 — কমা পরে।", en: "A clause cannot open with V1; for the earlier action use having + V3 — followed by a comma.", hi: "Clause V1 से नहीं शुरू होता; पहले का काम having + V3 लेता है — उसके बाद कॉमा।" } },
            { wrong: "Not known the answer, he stayed quiet.", right: "Not knowing the answer, he stayed quiet.", note: { bn: "negative participle = not + V-ing যখন কর্তা সক্রিয়; V3 (known) বসলে অর্থ হয়ে যায় 'উত্তরটা জানা না-হওয়ায়'।", en: "A negative participle = not + V-ing when the subject is active; putting V3 (known) flips the meaning to 'as the answer was not known'.", hi: "Negative participle = not + V-ing जब subject सक्रिय है; V3 (known) रखने से अर्थ बदल जाता है 'जवाब न जाने जाने से'।" } },
            { wrong: "The sun having set, we lit the lanterns, and we lit a fire also.", right: "The sun having set, we lit the lanterns.", note: { bn: "absolute construction-এ participle-এর নিজের কর্তা (the sun) আছে, তাই কর্তা-মিলের নিয়ম ভাঙে না — কিন্তু বাড়তি বাক্য জোড়ার দরকার নেই।", en: "In an absolute construction the participle owns its subject (the sun), so the shared-subject rule does not apply — but do not tack on extra clauses.", hi: "Absolute construction में participle का अपना subject (the sun) है, इसलिए साझा-subject नियम नहीं टूटता — पर फ़ालतू clause जोड़ने की ज़रूरत नहीं।" } },
            { wrong: "Walking home I met Karim and we talked about the match.", right: "Walking home, I met Karim and we talked about the match.", note: { bn: "বাক্যের শুরুর participle clause-এর পরে কমা বাধ্যতামূলক — পাঠককে জানায় clause এখানেই শেষ।", en: "A sentence-initial participle clause must be closed with a comma — it tells the reader where the clause ends.", hi: "वाक्य-प्रारंभिक participle clause के बाद कॉमा अनिवार्य — पाठक को बताता है कि clause यहीं ख़त्म।" } },
            { wrong: "Being the bridge built in 1990, it still stands strong.", right: "Built in 1990, the bridge still stands strong.", note: { bn: "নিষ্ক্রিয় অর্থে শুধু V3-ই যথেষ্ট — Built in 1990, the bridge...; Being + গোলমেলে কর্তা-গোছানো অপ্রয়োজনীয়।", en: "For passive meaning, plain V3 is enough — Built in 1990, the bridge...; piling Being on top muddles the structure.", hi: "निष्क्रिय अर्थ के लिए सादा V3 ही काफ़ी है — Built in 1990, the bridge...; Being जोड़ने से ढाँचा उलझ जाता है।" } },
          ],
        },
        {
          heading: {
            bn: "🚦 আভাস ও প্যাটার্ন — কোনটা কখন বসবে",
            en: "🚦 Signals — choosing the right participle",
            hi: "🚦 संकेत — कौन-सा participle कब बैठेगा",
          },
          lead: {
            bn: "তিন প্রশ্নেই সিদ্ধান্ত — কে করছে, কখন, কাকে বর্ণনা করছে; ভেঙে দেখার পরীক্ষায় উত্তর যাচাই।",
            en: "Three questions settle it — who acts, when, and what is being described; the expansion test verifies.",
            hi: "तीन सवालों में फ़ैसला — कौन करता है, कब, किसे वर्णित करता है; खोलकर-देखने के परीक्षण से जाँच।",
          },
          formula: {
            bn: "সক্রিয় + একই সময় → V-ing | সক্রিয় + আগের কাজ → having + V3 | নিষ্ক্রিয় → V3",
            en: "active + same time → V-ing | active + earlier action → having + V3 | passive → V3",
            hi: "सक्रिय + उसी समय → V-ing | सक्रिय + पहले का काम → having + V3 | निष्क्रिय → V3",
          },
          points: [
            { bn: "**প্রশ্ন ১ — কাজ কে করছে?** মূল কর্তা নিজে করলে V-ing বা having + V3; কর্তা কাজটা 'পেয়েছে' (নিষ্ক্রিয়) হলে V3।", en: "**Question 1 — who performs the action?** The main subject performing takes V-ing or having + V3; a subject that receives it (passive) takes V3.", hi: "**सवाल 1 — काम कौन कर रहा है?** मुख्य subject स्वयं करे तो V-ing या having + V3; subject काम 'पाए' (निष्क्रिय) तो V3।" },
            { bn: "**প্রশ্ন ২ — সময় কেমন?** একসঙ্গে ঘটলে V-ing: Opening the door, she smiled।", en: "**Question 2 — what is the timing?** Simultaneous actions take V-ing: Opening the door, she smiled.", hi: "**सवाल 2 — समय कैसा?** एक साथ हों तो V-ing: Opening the door, she smiled।" },
            { bn: "আগে-পরে স্পষ্ট হলে having + V3: Having opened the door, she walked in।", en: "A clear first-then sequence takes having + V3: Having opened the door, she walked in.", hi: "पहले-बाद स्पष्ट हो तो having + V3: Having opened the door, she walked in।" },
            { bn: "**প্রশ্ন ৩ — clause কাকে বর্ণনা করছে?** মূল কর্তা নয়, পাশের noun-কে হলে সেটা reduced relative: the girl standing by the window।", en: "**Question 3 — what is the clause describing?** A nearby noun, not the main subject, means a reduced relative: the girl standing by the window.", hi: "**सवाल 3 — clause किसे वर्णित कर रहा है?** मुख्य subject नहीं, नज़दीकी noun हो तो वह reduced relative है: the girl standing by the window।" },
            { bn: "**পরীক্ষা** — participle clause-টা পুরো clause-এ ভেঙে দেখুন: Walking home, I met Karim → While I was walking home, I met Karim (ঠিক)।", en: "**Test** — expand the participle clause into a full clause: Walking home, I met Karim → While I was walking home, I met Karim (works).", hi: "**परीक्षण** — participle clause को पूरे clause में खोलें: Walking home, I met Karim → While I was walking home, I met Karim (ठीक)।" },
            { bn: "Built in 1990, the bridge stands → Because it was built in 1990... (ঠিক) — ভাঙলে অর্থ আর কর্তা সংগত থাকলে participle সঠিক।", en: "Built in 1990, the bridge stands → Because it was built in 1990... (works) — if expansion keeps both meaning and subject sensible, the participle is right.", hi: "Built in 1990, the bridge stands → Because it was built in 1990... (ठीक) — खोलने पर अर्थ और subject संगत रहें तो participle सही।" },
            { bn: "ভাঙলে কর্তা গায়েব হয়ে গেলে বা বদলে গেলে সেটা dangling — পরের-পরের সেকশনের বিষয়।", en: "If the subject vanishes or changes on expansion — that is a dangler, the business of the sections ahead.", hi: "खोलने पर subject ग़ायब या बदल जाए — तो वह dangling है, आगे के भागों का विषय।" },
          ],
          examples: [
            { wrong: "Opened in 1990, the engineer still remembers the ceremony.", right: "Built in 1990, the bridge is a city landmark. / Having opened in 1990, the bridge still carries traffic.", note: { bn: "bridge 'খোলা হয়েছে' — কিন্তু মূল কর্তা engineer; কর্তা-অমিল। হয় কর্তা বদলান (the bridge), নয়তো বর্ণনার বিষয় বদলান।", en: "The bridge was opened, but the main subject is the engineer — a subject mismatch. Either change the subject (the bridge) or change what is being described.", hi: "Bridge खोला गया था, पर मुख्य subject engineer है — subject-असंगति। या तो subject बदलें (the bridge), या वर्णन का विषय बदलें।" } },
            { wrong: "Opening the letter, she started to cry, and after opening it she read it twice.", right: "Opening the letter, she started to cry, then read it twice.", note: { bn: "একই participle clause দুবার লেখা অপ্রয়োজনীয় — একবার বললেই চলে; তারপরের কাজ মূল verb-এ চলে যায়।", en: "Repeating the same participle clause twice is redundant — say it once; later actions ride on the main verbs.", hi: "एक ही participle clause दो बार लिखना बेमतलब — एक बार कहें; बाद के काम मुख्य verbs पर चलते हैं।" } },
            { wrong: "The girl who standing by the window is my cousin.", right: "The girl standing by the window is my cousin.", note: { bn: "reduced relative-এ who/that + be দুটোই বাদ — শুধু -ing রাখুন; who + কাঁচা verb বসানো উচ্চ স্তরেও হয়।", en: "In a reduced relative, drop who/that + be together — keep only the -ing; leaving a bare verb after who still happens at advanced level.", hi: "Reduced relative में who/that + be दोनों हटाएँ — केवल -ing रखें; who के बाद कच्चा verb छूट जाना एडवांस्ड स्तर पर भी होता है।" } },
            { wrong: "Having finished the report, the report was sent to the client.", right: "Having finished the report, she sent it to the client.", note: { bn: "report নিজে নিজের রিপোর্ট শেষ করতে পারে না — কর্তা হতে হবে কাজ করা মানুষ; মূল কর্তায় she বসালে বাক্য সোজা।", en: "A report cannot finish its own report — the subject must be the person doing the action; putting she in the main clause straightens the sentence.", hi: "रिपोर्ट अपनी ही रिपोर्ट पूरी नहीं कर सकती — subject काम करने वाला व्यक्ति होना चाहिए; मुख्य subject she करने पर वाक्य सीधा हो जाता है।" } },
          ],
        },
        {
          heading: {
            bn: "🔁 having + V3 — 'করেই' দিয়ে আগের কাজ",
            en: "🔁 having + V3 — marking the earlier action",
            hi: "🔁 having + V3 — पहले हुए काम की निशानी",
          },
          lead: {
            bn: "বাংলার 'খুলে', 'করে', 'শেষ করেই' কৃদন্তের ইংরেজি রূপ — দুই কাজের আগে-পরে এটাই ঠিক করে।",
            en: "The English twin of Bengali's conjunctive participles — it fixes which of two actions came first.",
            hi: "हिंदी/बांग्ला के कृदंत का अंग्रेज़ी रूप — दो कामों का क्रम यही तय करता है।",
          },
          formula: {
            bn: "Having + V3 + কমা + কর্তা + মূল verb — আগের কাজ চিহ্নিত",
            en: "Having + V3 + comma + subject + main verb — marks the earlier action",
            hi: "Having + V3 + कॉमा + subject + मुख्य verb — पहले का काम चिह्नित",
          },
          points: [
            { bn: "দুটো কাজের মধ্যে **আগেরটাকে** চিহ্নিত করে having + V3।", en: "having + V3 flags the **earlier** of two actions.", hi: "having + V3 दो कामों में **पहले** को चिह्नित करता है।" },
            { bn: "Opening the gate, the guard waved at us — খোলার সঙ্গে সঙ্গেই হাত নাড়লেন, একই সময়।", en: "Opening the gate, the guard waved at us — waving at the same time as opening.", hi: "Opening the gate, the guard waved at us — खोलते ही हाथ हिलाया, एक ही समय।" },
            { bn: "Having opened the gate, the guard checked our passes — আগে খোলা, পরে পাস দেখা।", en: "Having opened the gate, the guard checked our passes — opened first, then checked.", hi: "Having opened the gate, the guard checked our passes — पहले खोला, फिर पास देखा।" },
            { bn: "ফারাকটা চোখে আঙুল দিয়ে দেখানোর মতো, তবু শিক্ষার্থীরা প্রায়ই দুটোর জায়গা অদল-বদল করেন।", en: "The difference is as clear as daylight, yet learners keep swapping the two.", hi: "फ़र्क़ साफ़ है, फिर भी शिक्षार्थी दोनों की जगह अक्सर बदल देते हैं।" },
            { bn: "having + V3 বনাম after + -ing — দুটোই সঠিক: Having finished the exam, she walked out = After finishing the exam, she walked out।", en: "having + V3 vs after + -ing — both correct: Having finished the exam, she walked out = After finishing the exam, she walked out.", hi: "having + V3 बनाम after + -ing — दोनों सही: Having finished the exam, she walked out = After finishing the exam, she walked out।" },
            { bn: "লেখার ভাষায় having + V3 বেশি আনুষ্ঠানিক ও ঘন; কথ্য ভাষায় after/before + -ing বেশি চলে।", en: "Formal writing prefers the tight having + V3; speech prefers after/before + -ing.", hi: "औपचारिक लेखन having + V3 की तनी बनावट पसंद करता है; बोलचाल after/before + -ing पसंद करता है।" },
            { bn: "আগের কাজটা মূল কর্তার হলেই having + V3 — কর্তা আলাদা হলে পুরো clause লিখুন।", en: "having + V3 works only when the earlier action belongs to the main subject — with a different subject, write the full clause.", hi: "having + V3 तभी जब पहला काम मुख्य subject का हो — subject अलग हो तो पूरा clause लिखें।" },
            { bn: "After the guests had left, we washed the dishes — অতিথিরা আর আমরা এক নই, তাই having + V3 নয়।", en: "After the guests had left, we washed the dishes — the guests and we are not one, so no having + V3.", hi: "After the guests had left, we washed the dishes — मेहमान और हम एक नहीं, इसलिए having + V3 नहीं।" },
          ],
          examples: [
            { wrong: "Finishing the exam, she walked out of the hall.", right: "Having finished the exam, she walked out of the hall.", note: { bn: "পরীক্ষা শেষ হওয়া আগে, হল থেকে বেরোনো পরে — ক্রম স্পষ্ট হলে having + V3; শুধু -ing হলে মনে হয় শেষ করছিল বেরোনোর সময়।", en: "Finishing came first, leaving second — with a clear sequence use having + V3; plain -ing suggests the finishing was still going on as she left.", hi: "परीक्षा पहले ख़त्म हुई, निकलना बाद में — स्पष्ट क्रम में having + V3; केवल -ing होता तो लगता कि निकलते वक़्त परीक्षा अभी ख़त्म हो रही थी।" } },
            { wrong: "Having cooked dinner, the phone rang.", right: "Having cooked dinner, she sat down to eat. / She was cooking dinner when the phone rang.", note: { bn: "ফোন রান্না করে না — dangling; হয় মূল কর্তায় রাঁধুনি (she), নয়তো when-clause দিয়ে সময় বোঝান।", en: "The phone does not cook — a dangler; either make the cook the main subject (she), or show the timing with a when-clause.", hi: "फ़ोन खाना नहीं बनाता — dangling; या तो रसोइए को मुख्य subject बनाएँ (she), या when-clause से समय दिखाएँ।" } },
            { wrong: "After the guests had left, having washed the dishes, we watched TV.", right: "After the guests had left, we washed the dishes and watched TV.", note: { bn: "কর্তা আলাদা হলে (guests ≠ we) having + V3 চলে না — পুরো clause লিখুন; আর বাক্য টানটান রাখতে অতিরিক্ত participle এড়িয়ে চলুন।", en: "With a different subject (guests ≠ we), having + V3 is out — write the full clause; and skip extra participles to keep the sentence tight.", hi: "Subject अलग हो (guests ≠ we) तो having + V3 नहीं चलेगा — पूरा clause लिखें; और वाक्य तना रखने के लिए अतिरिक्त participles टालें।" } },
            { wrong: "Having been finished the report, she emailed it.", right: "Having finished the report, she emailed it.", note: { bn: "কর্তা নিজেই কাজ করেছে (সক্রিয়) — having + V3-ই যথেষ্ট; Having been finished নিষ্ক্রিয় রূপ, অর্থ উল্টে যায়।", en: "The subject did the finishing (active) — having + V3 is enough; Having been finished is the passive shape and reverses the meaning.", hi: "Subject ने स्वयं काम पूरा किया (सक्रिय) — having + V3 ही काफ़ी; Having been finished निष्क्रिय रूप है और अर्थ उलट देता है।" } },
          ],
        },
        {
          heading: {
            bn: "🚨 Dangling modifiers — participle কাকে বর্ণনা করছে?",
            en: "🚨 Dangling modifiers — who is the participle describing?",
            hi: "🚨 Dangling modifiers — participle किसे वर्णित कर रहा है?",
          },
          lead: {
            bn: "সংবাদপত্র পড়তে পড়তে নিজে একবার dangling ধরতে পারলে দক্ষতা স্থায়ী — ধরার কৌশল আর মেরামতের রাস্তা এখানেই।",
            en: "Catch one dangler yourself in a newspaper and the skill is permanent — here are the detection routine and the repairs.",
            hi: "अख़बार में ख़ुद एक dangler पकड़ लेना यानी कौशल स्थायी — पकड़ने की विधि और मरम्मत के रास्ते यहीं।",
          },
          points: [
            { bn: "'Walking home, the rain started' — ব্যাকরণ কান পেতে বসে: কে হেঁটেছিল? গড়ন অনুযায়ী উত্তর the rain — বৃষ্টি হেঁটেছে!", en: "'Walking home, the rain started' — grammar pricks up its ears: who walked? By structure the answer becomes the rain — the rain walked!", hi: "'Walking home, the rain started' — व्याकरण कान खड़ा करता है: कौन चला? ढाँचे के हिसाब से जवाब the rain — बारिश चली!" },
            { bn: "এটাই **dangling modifier** — participle-এর অন্তর্নিহিত কর্তা মূল কর্তার সঙ্গে না মিলে হাস্যকর বা অসংগত অর্থ তৈরি করে।", en: "That is a **dangling modifier** — the participle's implied subject fails to match the main subject, producing comic or incoherent meaning.", hi: "यही **dangling modifier** है — participle का अन्तर्निहित subject मुख्य subject से न मिलकर हास्यास्पद या असंगत अर्थ बनाता है।" },
            { bn: "পাঠ্যবইয়ের বিখ্যাত ক্যাল্ক ভুল: 'Being a rainy day, we stayed home' — দিন আমরা নই; সঠিক: It being a rainy day, we stayed home।", en: "The famous textbook calque: 'Being a rainy day, we stayed home' — the day is not us; correct: It being a rainy day, we stayed home.", hi: "पाठ्यपुस्तकों की प्रसिद्ध कॉपी-ग़लती: 'Being a rainy day, we stayed home' — दिन हम नहीं; सही: It being a rainy day, we stayed home।" },
            { bn: "বিকল্প সঠিক রূপ: Because it was a rainy day, we stayed home।", en: "The alternative correct form: Because it was a rainy day, we stayed home.", hi: "वैकल्पिक सही रूप: Because it was a rainy day, we stayed home।" },
            { bn: "**ধরার ৩ ধাপ** — participle-এর সামনে মনে মনে কর্তা বসান: Walking home, [I] saw...।", en: "**Detection, 3 steps** — mentally place a subject before the participle: Walking home, [I] saw...", hi: "**पकड़ने के 3 चरण** — participle से पहले मन में subject रखें: Walking home, [I] saw..." },
            { bn: "সেই মনগড়া কর্তা কি মূল বাক্যের কর্তারই রূপ? না হলেই ভুল।", en: "Is that imagined subject the same as the main-clause subject? If not, it is wrong.", hi: "क्या वह काल्पनिक subject मुख्य वाक्य के subject जैसा है? नहीं तो ग़लत।" },
            { bn: "**মেরামত ১ ও ২** — মূল কর্তা বদলান: Walking home, I got caught in the rain; বা পুরো clause লিখুন: While I was walking home, it started raining।", en: "**Repairs 1 and 2** — change the main subject: Walking home, I got caught in the rain; or write the full clause: While I was walking home, it started raining.", hi: "**मरम्मत 1 और 2** — मुख्य subject बदलें: Walking home, I got caught in the rain; या पूरा clause लिखें: While I was walking home, it started raining।" },
            { bn: "**মেরামত ৩** — participle-কে নিজের কর্তা দিন: The sky being dark, we turned back।", en: "**Repair 3** — give the participle its own subject: The sky being dark, we turned back.", hi: "**मरम्मत 3** — participle को अपना subject दें: The sky being dark, we turned back।" },
          ],
          examples: [
            { wrong: "Walking home, the rain started.", right: "Walking home, I got caught in the rain. / While I was walking home, it started raining.", note: { bn: "বৃষ্টি হাঁটে না — কর্তা-অমিল; হয় মূল কর্তায় 'আমি', নয়তো while-clause-এ বৃষ্টির নিজের কর্তা।", en: "Rain does not walk — a subject mismatch; either make 'I' the main subject, or give the rain its own while-clause.", hi: "बारिश नहीं चलती — subject-असंगति; या तो मुख्य subject 'I' करें, या बारिश को अपना while-clause दें।" } },
            { wrong: "Being a rainy day, we stayed home.", right: "It being a rainy day, we stayed home. / Because it was a rainy day, we stayed home.", note: { bn: "'বৃষ্টির দিন হওয়ায়' বাংলা গড়নের সরাসরি অনুবাদ — ইংরেজিতে দিনের নিজের কর্তা (it) লাগবে বা পুরো clause।", en: "A direct translation of the Bengali 'বৃষ্টির দিন হওয়ায়' — English needs the day's own subject (it) or a full clause.", hi: "बांग्ला 'बारिश का दिन होने से' का सीधा अनुवाद — अंग्रेज़ी में दिन का अपना subject (it) चाहिए या पूरा clause।" } },
            { wrong: "Having entered the room, the light was switched on.", right: "Having entered the room, she switched on the light.", note: { bn: "আলো ঘরে ঢোকে না — ঢোকা মানুষটাই মূল কর্তা হবে; প্রশ্ন করুন: কে ঢুকল, কে জ্বালাল?", en: "The light does not enter the room — the person who entered must be the subject; ask: who entered, who switched on?", hi: "रोशनी कमरे में नहीं घुसती — घुसने वाला ही subject होगा; पूछें: कौन घुसा, किसने जलाया?" } },
            { wrong: "Standing on the balcony, the view is amazing.", right: "Standing on the balcony, we enjoyed an amazing view.", note: { bn: "view বারান্দায় দাঁড়ায় না — দাঁড়ানো মানুষটাই কর্তা; বাংলা 'বারান্দায় দাঁড়ালে দৃশ্য দারুণ লাগে' গড়নটাই এই ভুল করায়।", en: "The view does not stand on the balcony — the standing person is the subject; the Bengali framing 'বারান্দায় দাঁড়ালে দৃশ্য দারুণ লাগে' invites this error.", hi: "नज़ारा बालकनी पर नहीं खड़ा होता — खड़ा होने वाला ही subject है; 'बालकनी पर खड़े होकर नज़ारा शानदार लगता है' ढाँचा यही ग़लती कराता है।" } },
          ],
        },
        {
          heading: {
            bn: "✍️ নিষ্ক্রিয় participle — V3 দিয়ে শুরু",
            en: "✍️ Passive participles — opening with V3",
            hi: "✍️ निष्क्रिय participles — V3 से शुरुआत",
          },
          lead: {
            bn: "বাংলার '১৯৯০ সালে নির্মিত'-এর '-মিত' প্রত্যয়টাই V3-এর হুবহু প্রতিবিম্ব — গড়নটা বাঙালি পাঠকের চোখে চেনা।",
            en: "The Bengali '-মিত' suffix in '১৯৯০ সালে নির্মিত' mirrors V3 exactly — the shape looks instantly familiar.",
            hi: "बांग्ला '1990 साले निर्मित' का '-मित' प्रत्यय V3 का हूबहू प्रतिबिंब है — यह रूप तुरंत परिचित लगता है।",
          },
          formula: {
            bn: "V3 (Built / Written / Kept) + বাকি অংশ + কমা + কর্তা + মূল verb",
            en: "V3 (Built / Written / Kept) + rest + comma + subject + main verb",
            hi: "V3 (Built / Written / Kept) + बाकी + कॉमा + subject + मुख्य verb",
          },
          points: [
            { bn: "মূল কর্তা কাজটা না করে কাজের উপরে ঘটে — তখন clause শুরু হয় **V3** দিয়ে।", en: "When the main subject undergoes rather than performs the action, the clause opens with **V3**.", hi: "मुख्य subject काम करता नहीं, काम उस पर होता है — तब clause **V3** से शुरू होता है।" },
            { bn: "Built in 1990, the bridge is still the busiest in town — পুরো অর্থ: which was built।", en: "Built in 1990, the bridge is still the busiest in town — full meaning: which was built.", hi: "Built in 1990, the bridge is still the busiest in town — पूरा अर्थ: which was built।" },
            { bn: "Written in simple English, the guide helps beginners — (= which is written)।", en: "Written in simple English, the guide helps beginners — (= which is written).", hi: "Written in simple English, the guide helps beginners — (= which is written)।" },
            { bn: "Kept in a cool place, this medicine lasts two years — শর্ত-অর্থেও চলে (= if it is kept)।", en: "Kept in a cool place, this medicine lasts two years — works as a condition too (= if it is kept).", hi: "Kept in a cool place, this medicine lasts two years — शर्त-अर्थ में भी चलता है (= if it is kept)।" },
            { bn: "চলমান নিষ্ক্রিয় অর্থে being + V3: Being repaired, the lift is out of service (= as it is being repaired)।", en: "For an ongoing passive, being + V3: Being repaired, the lift is out of service (= as it is being repaired).", hi: "चलते निष्क्रिय अर्थ के लिए being + V3: Being repaired, the lift is out of service (= as it is being repaired)।" },
          ],
          examples: [
            { wrong: "The bridge which was built in 1990 is still the busiest in town.", right: "Built in 1990, the bridge is still the busiest in town.", note: { bn: "which was built-এর সংকুচিত রূপ Built in 1990 — কমা দিয়ে শুরুতে সরিয়ে লেখা তৎক্ষণাৎ পেশাদার দেখায়।", en: "Built in 1990 compresses which was built — moved to the front with a comma, the sentence instantly reads professional.", hi: "Built in 1990, which was built को सिकोड़ता है — कॉमा सहित शुरू में रखते ही वाक्य पेशेवर लगता है।" } },
            { wrong: "The lift is out of service, because it is repaired now.", right: "Being repaired, the lift is out of service.", note: { bn: "'এই মুহূর্তে মেরামত হচ্ছে' — চলমান নিষ্ক্রিয় → being + V3; because-clause না লিখেও কারণ বোঝানো যায়।", en: "'Repair is happening right now' — ongoing passive → being + V3; the reason survives without a because-clause.", hi: "'अभी मरम्मत चल रही है' — चलता निष्क्रिय → being + V3; because-clause के बिना भी कारण बनता है।" } },
          ],
        },
        {
          heading: {
            bn: "🧩 Reduced relative ও absolute construction — লেখার ছুরি",
            en: "🧩 Reduced relatives and absolute constructions — the writer's knife",
            hi: "🧩 Reduced relatives और absolute constructions — लेखक की छुरी",
          },
          lead: {
            bn: "লেখকের সবচেয়ে কাজের হাতিয়ার দুটো — relative clause সিকোড়া আর participle-কে নিজের কর্তা দেওয়া।",
            en: "The writer's two sharpest tools — squeezing relative clauses and giving the participle its own subject.",
            hi: "लेखक के दो सबसे तेज़ औज़ार — relative clause सिकोड़ना और participle को अपना subject देना।",
          },
          formula: {
            bn: "noun + who/which/that + be → noun + participle (the man who is waiting → the man waiting)",
            en: "noun + who/which/that + be → noun + participle (the man who is waiting → the man waiting)",
            hi: "noun + who/which/that + be → noun + participle (the man who is waiting → the man waiting)",
          },
          points: [
            { bn: "লেখার সবচেয়ে কাজের হাতিয়ার **reduced relative** — noun-এর পরে who/which/that + be ফেলে দিয়ে participle বসানো।", en: "The writer's sharpest tool is the **reduced relative** — after a noun, drop who/which/that + be and keep the participle.", hi: "लेखक का सबसे तेज़ औज़ार **reduced relative** — noun के बाद who/which/that + be हटाकर participle रखना।" },
            { bn: "the parcel that was delivered yesterday → the parcel delivered yesterday।", en: "the parcel that was delivered yesterday → the parcel delivered yesterday.", hi: "the parcel that was delivered yesterday → the parcel delivered yesterday।" },
            { bn: "students who wish to apply → students wishing to apply।", en: "students who wish to apply → students wishing to apply.", hi: "students who wish to apply → students wishing to apply।" },
            { bn: "a house which is being built → a house being built।", en: "a house which is being built → a house being built.", hi: "a house which is being built → a house being built।" },
            { bn: "উঁচু স্তরের রত্ন **absolute construction** — মূল বাক্যের কর্তা আলাদা হলে participle-এর সামনে কর্তা বসে।", en: "One advanced gem, the **absolute construction** — when the main subject differs, a subject is placed before the participle.", hi: "एडवांस्ड रत्न **absolute construction** — मुख्य subject अलग हो तो participle के पहले subject रखते हैं।" },
            { bn: "He stood at the door, his eyes fixed on the clock — 'eyes'-এর নিজের কর্তা আছে।", en: "He stood at the door, his eyes fixed on the clock — 'eyes' carries its own subject.", hi: "He stood at the door, his eyes fixed on the clock — 'eyes' का अपना subject है।" },
            { bn: "The exams being over, the hostel emptied out — সাহিত্য আর সংবাদ উভয়েই এই গড়নে ভরা।", en: "The exams being over, the hostel emptied out — both fiction and news are full of this shape.", hi: "The exams being over, the hostel emptied out — कहानी और ख़बर दोनों इसी रूप से भरे हैं।" },
          ],
          examples: [
            { wrong: "The parcel which delivered yesterday has not arrived.", right: "The parcel delivered yesterday has not arrived.", note: { bn: "parcel 'পৌঁছে দেওয়া হয়েছে' — নিষ্ক্রিয়; which was delivered → delivered; which + V2 গড়নটা ভুল।", en: "The parcel was delivered (passive) — which was delivered → delivered; a which + V2 shape is wrong.", hi: "Parcel 'पहुँचाया गया' — निष्क्रिय; which was delivered → delivered; which + V2 वाला रूप ग़लत है।" } },
            { wrong: "He stood at the door and his eyes were fixed on the clock and he waited.", right: "He stood at the door, his eyes fixed on the clock, and waited.", note: { bn: "absolute construction — his eyes fixed on the clock-এ 'eyes'-এর নিজের কর্তা আছে; and...and শৃঙ্খল ভেঙে লেখা টানটান হয়।", en: "An absolute construction — his eyes fixed on the clock carries its own subject; breaking the and...and chain tightens the writing.", hi: "Absolute construction — his eyes fixed on the clock का अपना subject है; and...and की श्रृंखला तोड़ने से लेखन तना रहता है।" } },
          ],
        },
        {
          heading: {
            bn: "⚠️ উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "⚠️ Subtle errors made by advanced learners",
            hi: "⚠️ एडवांस्ड शिक्षार्थियों की सूक्ष्म गलतियाँ",
          },
          lead: {
            bn: "advanced স্তরে ভুল তিন জায়গায় লুকায় — সূচনা, কমা, আর সবচেয়ে মজার: ঠিক participle-কে ভুল ধরে মেরামত।",
            en: "At advanced level, errors hide in three places — the opener, the comma, and the funniest one: 'fixing' participles that were already right.",
            hi: "एडवांस्ड स्तर पर ग़लतियाँ तीन जगह छिपती हैं — आरंभ-शब्द, कॉमा, और सबसे रोचक: सही participle को ग़लत समझकर मरम्मत।",
          },
          points: [
            { bn: "**ভুল ১ — সূচনার শব্দ**: After finished my work চলে না; after-এর পরে -ing বা পূর্ণ clause, V1/V2 নয়।", en: "**Error 1 — the opener**: After finished my work is out; after takes -ing or a full clause, never V1/V2.", hi: "**ग़लती 1 — आरंभ-शब्द**: After finished my work नहीं चलेगा; after के बाद -ing या पूर्ण clause, V1/V2 नहीं।" },
            { bn: "সঠিক রূপ: After finishing my work, I went out বা Having finished my work, I went out।", en: "Correct: After finishing my work, I went out or Having finished my work, I went out.", hi: "सही: After finishing my work, I went out या Having finished my work, I went out।" },
            { bn: "**ভুল ২ — কমার অনুপস্থিতি**: Walking home I saw a dog-এ কমা ছাড়া হাঁটা আর দেখার সীমানা মিলিয়ে যায়।", en: "**Error 2 — the missing comma**: in Walking home I saw a dog, walking and seeing blur together.", hi: "**ग़लती 2 — कॉमा की कमी**: Walking home I saw a dog में कॉमा रहित चलना और देखना मिल जाते हैं।" },
            { bn: "**ভুল ৩ — সবচেয়ে মজার দল**: ঠিক participle-কে ভুল ধরে মেরামত করা।", en: "**Error 3 — the funniest group**: repairing participles that were actually right.", hi: "**ग़लती 3 — सबसे रोचक समूह**: सही participle को ग़लत समझकर मरम्मत कर देना।" },
            { bn: "Considering the weather, we cancelled the trip — considering fixed idiom (যেমন regarding, judging by); কর্তা-মিল লাগে না, তাই dangling নয়।", en: "Considering the weather, we cancelled the trip — considering is a fixed idiom (like regarding, judging by); it needs no subject match, so it is not a dangler.", hi: "Considering the weather, we cancelled the trip — considering एक स्थिर मुहावरा (जैसे regarding, judging by); subject-मेल नहीं चाहिए, इसलिए dangling नहीं।" },
            { bn: "একইভাবে Seen from the hill, the city looks beautiful সঠিক — শহরই দেখা যাচ্ছে (নিষ্ক্রিয়)।", en: "Likewise Seen from the hill, the city looks beautiful is correct — the city is what is seen (passive).", hi: "इसी तरह Seen from the hill, the city looks beautiful सही है — शहर ही दिख रहा है (निष्क्रिय)।" },
            { bn: "উঁচু স্তরের শিক্ষার্থীরা প্রায়ই এ দুটোকে dangling ভেবে ভাঙা মেরামত করেন — লেখা খামখেয়ালি হয়ে যায়।", en: "Advanced learners often mistake both for danglers and 'fix' them — the writing turns erratic.", hi: "एडवांस्ड शिक्षार्थी दोनों को dangling समझकर 'सुधार' देते हैं — लेखन बिगड़ जाता है।" },
            { bn: "নিয়ম: নিষ্ক্রিয় অর্থ স্পষ্ট হলে V3-clause থাকুক, আর idiom-participle-এ হাত দেবেন না।", en: "The rule: if the passive meaning is clear, keep the V3 clause, and never touch idiom-participles.", hi: "नियम: निष्क्रिय अर्थ स्पष्ट हो तो V3-clause रखें, और idiom-participle को हाथ न लगाएँ।" },
          ],
          examples: [
            { wrong: "After finished my work, I went out for a walk.", right: "Having finished my work, I went out for a walk. / After finishing my work, I went out for a walk.", note: { bn: "After-এর পরে V1 (finished-এর নaked রূপ) আসে না — হয় after + -ing, নয়তো having + V3।", en: "After is never followed by V1 — use after + -ing or having + V3.", hi: "After के बाद V1 नहीं आता — after + -ing या having + V3 लगाएँ।" } },
            { wrong: "Walking home I saw a snake and I froze.", right: "Walking home, I saw a snake and froze.", note: { bn: "সূচনা-participle-এর পরে কমা আবশ্যক; আর দ্বিতীয় I বাদ দিয়ে froze-ই যথেষ্ট — বাক্য টানটান হয়।", en: "A comma after the opening participle is compulsory; and dropping the second I keeps the sentence taut.", hi: "शुरुआती participle के बाद कॉमा अनिवार्य; और दूसरा I हटाकर froze ही काफ़ी — वाक्य तना रहता है।" } },
            { wrong: "Considered the weather, we cancelled the trip.", right: "Considering the weather, we cancelled the trip.", note: { bn: "considering fixed idiom — 'ভেবে দেখে'; V3 (considered) দিলে অর্থ হয় 'আমরা বিবেচিত হয়ে...' — বাজে।", en: "considering is a fixed idiom — 'taking into account'; V3 (considered) would absurdly mean 'as we were considered'.", hi: "considering स्थिर मुहावरा है — 'ध्यान में रखते हुए'; V3 (considered) लिखने से बेतुका अर्थ बनता है।" } },
            { wrong: "Seen from the hill, we thought the city looked beautiful. (intended: the city looks beautiful)", right: "Seen from the hill, the city looks beautiful.", note: { bn: "এখানে V3-clause সঠিক — শহরই দেখা যাচ্ছে; মেরামতের নামে 'we thought' ঢুকিয়ে দিলে শক্তিশালী গড়নটা নরম হয়ে যায়।", en: "Here the V3 clause is already right — the city is what is seen; 'fixing' it by inserting we thought only weakens a strong shape.", hi: "यहाँ V3-clause पहले से सही है — शहर ही दिख रहा है; 'सुधार' के नाम पर we thought जोड़ने से ताक़तवर रूप कमज़ोर हो जाता है।" } },
          ],
        },
        {
          heading: {
            bn: "📖 ছোট গল্পে দেখা যাক",
            en: "📖 Seen in a short story",
            hi: "📖 छोटी कहानी में देखिए",
          },
          lead: {
            bn: "এক প্যারায় পাঁচ রং — পড়ুন, আর প্রতিটা participle clause-এর নিচে মনে মনে পুরো clause খুলে দেখুন।",
            en: "Five shades in one paragraph — read it and mentally expand every participle clause underneath.",
            hi: "एक पैराग्राफ़ में पाँच रंग — पढ़ें और हर participle clause के नीचे मन में पूरा clause खोलें।",
          },
          points: [
            { bn: "'Built in 1971, the old library still stands at the corner of the campus. Having climbed the creaky stairs, I found the reading room almost empty.'", en: "'Built in 1971, the old library still stands at the corner of the campus. Having climbed the creaky stairs, I found the reading room almost empty.'", hi: "'Built in 1971, the old library still stands at the corner of the campus. Having climbed the creaky stairs, I found the reading room almost empty.'" },
            { bn: "'Sunlight streamed through the tall windows, falling on rows of dusty shelves. Not wanting to disturb the librarian, I tip-toed to the history section.'", en: "'Sunlight streamed through the tall windows, falling on rows of dusty shelves. Not wanting to disturb the librarian, I tip-toed to the history section.'", hi: "'Sunlight streamed through the tall windows, falling on rows of dusty shelves. Not wanting to disturb the librarian, I tip-toed to the history section.'" },
            { bn: "'An old map, drawn by a colonial surveyor, hung beside the door. Standing there, I felt time slow down.'", en: "'An old map, drawn by a colonial surveyor, hung beside the door. Standing there, I felt time slow down.'", hi: "'An old map, drawn by a colonial surveyor, hung beside the door. Standing there, I felt time slow down.'" },
            { bn: "'Having spent an hour among those books, I left with two new friends tucked under my arm.'", en: "'Having spent an hour among those books, I left with two new friends tucked under my arm.'", hi: "'Having spent an hour among those books, I left with two new friends tucked under my arm.'" },
            { bn: "দেখুন — সক্রিয়, নিষ্ক্রিয়, perfect, negative, absolute: পাঁচ রকম রং এক প্যারায়।", en: "Notice — active, passive, perfect, negative, absolute: five shades in one paragraph.", hi: "देखिए — सक्रिय, निष्क्रिय, perfect, negative, absolute: एक पैराग्राफ़ में पाँच रंग।" },
            { bn: "অনুশীলন: নিজের দিনের ব্যাপার্টা লিখুন, প্রতি বাক্যে একটা করে participle clause ঢোকান।", en: "Practice: write an account of your day, slipping one participle clause into each sentence.", hi: "अभ्यास: अपने दिन का ब्योरा लिखें, हर वाक्य में एक participle clause घुसाएँ।" },
          ],
          examples: [
            { wrong: "Built in 1971, I love the old library.", right: "Built in 1971, the old library still stands at the corner of the campus.", note: { bn: "লাইব্রেরি ১৯৭১-এ নির্মিত, আমি নই — মূল কর্তা অবশ্যই নির্মিত জিনিসটা হবে।", en: "The library was built in 1971, not I — the main subject must be the thing built.", hi: "लाइब्रेरी 1971 में बनी, मैं नहीं — मुख्य subject वही बनी चीज़ होनी चाहिए।" } },
            { wrong: "Sunlight streamed through the windows, it fell on the shelves.", right: "Sunlight streamed through the windows, falling on the shelves.", note: { bn: "দ্বিতীয় কাজটা একই কর্তার, একই সময়ের — নতুন বাক্যের বদলে -ing clause; কমা + falling-ই যথেষ্ট।", en: "The second action belongs to the same subject at the same time — use an -ing clause instead of a new sentence; a comma + falling is enough.", hi: "दूसरा काम उसी subject का उसी समय का है — नए वाक्य की जगह -ing clause; कॉमा + falling ही काफ़ी।" } },
            { wrong: "Having spent an hour among the books, the door closed behind me.", right: "Having spent an hour among the books, I left, the door closing behind me.", note: { bn: "প্রথম clause-এর কর্তা 'আমি' — তাই মূল কর্তাও আমি; the door closing behind me আলাদা absolute construction হিসেবে বসে।", en: "The first clause's subject is 'I' — so the main subject stays I; the door closing behind me sits as a separate absolute construction.", hi: "पहले clause का subject 'I' है — इसलिए मुख्य subject भी I; the door closing behind me अलग absolute construction के रूप में बैठता है।" } },
            { wrong: "An old map, drew by a colonial surveyor, hung beside the door.", right: "An old map, drawn by a colonial surveyor, hung beside the door.", note: { bn: "মানচিত্র 'আঁকা হয়েছিল' — নিষ্ক্রিয় অর্থে V3 (drawn); V2 (drew) নয়। মাঝে-বাইরে দুটো কমাও absolute গড়নের পরিচয়।", en: "The map 'was drawn' — passive meaning takes V3 (drawn), never V2 (drew); the paired commas mark the absolute shape.", hi: "नक़्शा 'बनाया गया था' — निष्क्रिय अर्थ V3 (drawn) लेता है, V2 (drew) नहीं; दोनों ओर के कॉमा absolute रूप की पहचान हैं।" } },
          ],
        },
        {
          heading: {
            bn: "📋 এক নজরে — পুরো পাঠের রিক্যাপ",
            en: "📋 At a glance — the lesson recap",
            hi: "📋 एक नज़र में — पूरे पाठ का रिकैप",
          },
          lead: {
            bn: "ছয় সূত্রে পুরো পাঠ — লেখার আগে একবার চোখ বুলিয়ে নিলেই dangling-শিকারি তৈরি।",
            en: "The whole lesson in six rules — one sweep before writing turns you into a dangler-hunter.",
            hi: "छह नियमों में पूरा पाठ — लिखने से पहले एक निगाह, और dangler-शिकारी तैयार।",
          },
          points: [
            { bn: "**কর্তা এক হতে হবে** — অমিল হলেই dangling।", en: "**The subject must be shared** — any mismatch is a dangler.", hi: "**Subject साझा होना चाहिए** — असंगति यानी dangling।" },
            { bn: "একসঙ্গের কাজ → V-ing; আগের কাজ → having + V3।", en: "Simultaneous action → V-ing; earlier action → having + V3.", hi: "समकालीन काम → V-ing; पहले का काम → having + V3।" },
            { bn: "নিষ্ক্রিয় অর্থ → V3 বা being + V3।", en: "Passive meaning → V3 or being + V3.", hi: "निष्क्रिय अर्थ → V3 या being + V3।" },
            { bn: "বাক্যের শুরুর clause-এর পরে কমা বাধ্যতামূলক।", en: "A comma is compulsory after a sentence-initial clause.", hi: "वाक्य-प्रारंभिक clause के बाद कॉमा अनिवार्य।" },
            { bn: "relative clause সংকুচিত করতে who/which + be ফেলুন।", en: "Compress relative clauses by dropping who/which + be.", hi: "relative clause सिकोड़ने के लिए who/which + be हटाएँ।" },
            { bn: "considering/regarding-এর মতো idiom-participle-এ হাত দেবেন না।", en: "Leave idiom-participles like considering/regarding untouched.", hi: "considering/regarding जैसे idiom-participle को हाथ न लगाएँ।" },
            { bn: "তারপর লেখা পড়ুন dangling-এর জন্য শিকারির মতো — এই অভ্যাসই দক্ষতা স্থায়ী করে।", en: "Then read your writing like a hunter after danglers — that habit makes the skill permanent.", hi: "फिर अपना लेखन danglers के शिकारी की तरह पढ़ें — यही आदत कौशल स्थायी करती है।" },
          ],
          examples: [],
        },
      ],
      tips: [
        { bn: "participle clause লেখার আগে মনে মনে পুরো clause বানান (While I was.../Because he had...), তারপর কর্তা+সহায়ক verb ফেলে ছোট করুন — উল্টো করে করলে dangling হয়।", en: "Before writing a participle clause, build the full clause in your head (While I was.../Because he had...), then cut subject + helping verb — doing it backwards invites danglers.", hi: "Participle clause लिखने से पहले मन में पूरा clause बनाएँ (While I was.../Because he had...), फिर subject + सहायक verb हटाएँ — उलटा करने से dangling बनता है।" },
        { bn: "দুটো কাজ একসঙ্গে হলে V-ing; একটা আগে হলে having + V3 — 'করে' বনাম 'করেই' ফারাকটা মনে রাখুন।", en: "Simultaneous actions take V-ing; a first-then pair takes having + V3 — remember the 'করে' vs 'করেই' difference.", hi: "एक साथ के काम V-ing लेते हैं; पहले-बाद की जोड़ी having + V3 — 'करके' बनाम 'करके ही' का फ़र्क़ याद रखें।" },
        { bn: "মূল কর্তা কাজ পেয়েছে (নিষ্ক্রিয়) বোঝালে V3-দিয়ে শুরু করুন — Built in 1990, Written in simple English।", en: "When the main subject undergoes the action (passive), open with V3 — Built in 1990, Written in simple English.", hi: "मुख्य subject काम का ग्रहीता हो (निष्क्रिय) तो V3 से शुरू करें — Built in 1990, Written in simple English।" },
        { bn: "বাক্যের শুরুর participle clause-এর পরে কমা বাধ্যতামূলক — পাঠকের প্রথম পড়া এখানেই থামে।", en: "A sentence-initial participle clause must be followed by a comma — that is where the reader's first breath falls.", hi: "वाक्य-प्रारंभिक participle clause के बाद कॉमा अनिवार्य — पाठक की पहली साँस यहीं रुकती है।" },
        { bn: "dangling ধরতে participle-এর সামনে মনে মনে কর্তা বসান; সে মূল বাক্যের কর্তা না হলে ভুল।", en: "To catch danglers, imagine a subject before the participle; if it is not the main-clause subject, the sentence is wrong.", hi: "Danglers पकड़ने के लिए participle से पहले मन में subject रखें; वह मुख्य वाक्य का subject न हो तो वाक्य ग़लत।" },
        { bn: "relative clause সংকুচিত করতে who/which/that + be একসঙ্গে ফেলুন — the man who is waiting → the man waiting।", en: "To compress a relative clause drop who/which/that + be together — the man who is waiting → the man waiting.", hi: "Relative clause सिकोड़ने के लिए who/which/that + be एक साथ हटाएँ — the man who is waiting → the man waiting।" },
        { bn: "considering, regarding, judging by, speaking of — এই idiom-participle-গুলোর কর্তা-মিল লাগে না; এদের ভুল dangling ভাববেন না।", en: "considering, regarding, judging by, speaking of — these idiom-participles need no subject match; do not mistake them for danglers.", hi: "considering, regarding, judging by, speaking of — इन idiom-participles को subject-मेल नहीं चाहिए; इन्हें dangling न समझें।" },
        { bn: "কর্তা আলাদা হলে হয় পুরো clause লিখুন, নয়তো absolute construction: The exams being over, we relaxed।", en: "With a different subject, either write the full clause or use an absolute construction: The exams being over, we relaxed.", hi: "Subject अलग हो तो या पूरा clause लिखें, या absolute construction: The exams being over, we relaxed।" },
        { bn: "সংবাদের প্রথম প্যারা পড়ুন আর participle clause গুনুন — প্রতিদিন দশটা দেখলে গড়নটা চোখের অভ্যাস হয়ে যায়।", en: "Read news lead paragraphs and count participle clauses — ten a day turns the shape into a visual habit.", hi: "ख़बरों का पहला पैराग्राफ़ पढ़ें और participle clauses गिनें — रोज़ दस देखने से आकार आँख की आदत बन जाता है।" },
      ],
      quiz: [
        { question: "______ down the street, I ran into an old friend.", options: ["Walked", "Walking", "Being walked", "Walk"], answer: 1, explanation: { bn: "আমি নিজেই হেটেছি, বন্ধু দেখা একই সময়ে — সক্রিয় + সমকালীন → V-ing: Walking।", en: "I did the walking, and the meeting happened at the same time — active + simultaneous → V-ing: Walking.", hi: "मैंने ही चला, मुलाक़ात उसी समय — सक्रिय + समकालीन → V-ing: Walking।" } },
        { question: "______ the documents, the clerk left for the day.", options: ["Finished", "Finishing", "Having finished", "Finish"], answer: 2, explanation: { bn: "দলিল শেষ করা আগে, চলে যাওয়া পরে — ক্রম স্পষ্ট → having + V3: Having finished।", en: "Finishing came first, leaving second — a clear sequence → having + V3: Having finished.", hi: "काग़ज़ात पहले ख़त्म, फिर जाना — स्पष्ट क्रम → having + V3: Having finished।" } },
        { question: "______ in 1857, this college is one of the oldest in Asia.", options: ["Establishing", "Established", "Establish", "Having established"], answer: 1, explanation: { bn: "কলেজ 'প্রতিষ্ঠিত হয়েছে' — নিষ্ক্রিয় অর্থ → V3: Established; which was established-এর সংকুচিত রূপ।", en: "The college 'was established' — passive meaning → V3: Established; a compression of which was established.", hi: "कॉलेज 'स्थापित हुआ' — निष्क्रिय अर्थ → V3: Established; which was established का संकुचित रूप।" } },
        { question: "Which sentence has NO dangling modifier?", options: ["Walking through the park, the flowers looked beautiful.", "Walking through the park, I noticed the flowers.", "Walking through the park, it started to rain.", "Walking through the park, my phone rang."], answer: 1, explanation: { bn: "'Walking'-এর কর্তা হতে হবে মানুষ — শুধু 'I noticed the flowers'-এই কর্তা মিলেছে; ফুল, বৃষ্টি বা ফোন হাঁটে না।", en: "The walker must be the main subject — only 'I noticed the flowers' matches; flowers, rain and phones do not walk.", hi: "चलने वाला ही मुख्य subject होना चाहिए — केवल 'I noticed the flowers' मेल खाता है; फूल, बारिश या फ़ोन नहीं चलते।" } },
        { question: "Not ______ the address, I had to ask a policeman.", options: ["known", "knowing", "knew", "know"], answer: 1, explanation: { bn: "negative participle সক্রিয় কর্তায় not + V-ing: not knowing; known হলে অর্থ নিষ্ক্রিয় হয়ে যায়।", en: "A negative participle with an active subject is not + V-ing: not knowing; known would turn the meaning passive.", hi: "सक्रिय subject के साथ negative participle है not + V-ing: not knowing; known अर्थ को निष्क्रिय कर देगा।" } },
        { question: "The woman ______ at the reception desk is our new manager.", options: ["stands", "standing", "stood", "is standing"], answer: 1, explanation: { bn: "who is standing-এর reduced রূপ standing — who/that + be ফেলে দিয়ে V-ing থাকে।", en: "standing compresses who is standing — drop who/that + be and keep the V-ing.", hi: "standing, who is standing का संकुचित रूप है — who/that + be हटाकर V-ing रखें।" } },
        { question: "Why is 'Having lost the key, the door had to be broken open' wrong?", options: ["having + V3 is never correct", "The implied subject (the person) does not match the main subject (the door)", "The past perfect is missing", "The comma is missing"], answer: 1, explanation: { bn: "কী হারায় মানুষ, দরজা নয় — কর্তা-অমিল; ঠিক হবে Having lost the key, he had to break the door open।", en: "A person loses the key, not the door — subject mismatch; correct is Having lost the key, he had to break the door open.", hi: "चाबी आदमी खोता है, दरवाज़ा नहीं — subject-असंगति; सही है Having lost the key, he had to break the door open।" } },
        { question: "______ in a cool place, this medicine lasts two years.", options: ["Keeping", "Kept", "Keep", "Having kept"], answer: 1, explanation: { bn: "ওষুধ 'রাখা হয়' — নিষ্ক্রিয় → V3: Kept (= if it is kept); keeping হলে ওষুধ নিজে রাখছে ভাবতে হয়।", en: "The medicine 'is kept' — passive → V3: Kept (= if it is kept); keeping would make the medicine the keeper.", hi: "दवा 'रखी जाती है' — निष्क्रिय → V3: Kept (= if it is kept); keeping होता तो दवा ही रखने वाली बन जाती।" } },
        { question: "Which pair correctly shows the difference in timing?", options: ["Opening the door, she waved = she waved first; Having opened the door, she waved = same time", "Opening the door, she waved = same time; Having opened the door, she waved = she opened first", "Both mean the same", "Both are wrong"], answer: 1, explanation: { bn: "V-ing = সমকালীন; having + V3 = আগের কাজ — দরজা আগে খোলা, পরে ওঠা বা হাত নাড়া।", en: "V-ing = simultaneous; having + V3 = the earlier action — the door opened first, then the wave.", hi: "V-ing = समकालीन; having + V3 = पहले का काम — दरवाज़ा पहले खुला, फिर हाथ हिलाया।" } },
        { question: "He was found ______ on the kitchen floor.", options: ["lie", "lying", "lay", "lain"], answer: 1, explanation: { bn: "নিষ্ক্রিয় অর্থে reduced relative: who was lying → lying; lie-এর -ing রূপ lying (ie → y)।", en: "A reduced relative in passive context: who was lying → lying; the -ing form of lie is lying (ie → y).", hi: "निष्क्रिय संदर्भ में reduced relative: who was lying → lying; lie का -ing रूप lying (ie → y) है।" } },
      ],
    },
  },

  /* ── 2. Cleft Sentences (Unit 3) ──────────────────────────────────── */
  {
    topic: "Cleft Sentences",
    level: "advanced",
    title: "Cleft Sentences",
    unit: 3,
    sortOrder: 2,
    data: {
      title: {
        bn: "ক্লেফট সেনটেন্স: বাক্য ভেঙে জোর দেওয়া",
        en: "Cleft Sentences",
        hi: "क्लेफ़्ट सेंटेंस: वाक्य तोड़कर ज़ोर देना",
      },
      intro: {
        bn: "Learning Path-এর advanced স্তরের এটি তৃতীয় পাঠ (Unit 3)। আগের ইউনিটের Participle Clauses-এর সঙ্গে intermediate স্তরের Relative Clauses পাঠটা ঝালিয়ে নিন — it-cleft-এর মেরুদণ্ডই হলো who/that/which-clause। বাংলায় জোর দেওয়ার হাতিয়ার তিনটা: শব্দকে বাক্যের সামনে টেনে আনা ('ফোনটা রীনাই করেছিল'), 'ই'-কার যোগ করা ('রীনাই করেছিল'), আর কণ্ঠস্বরে চাপ। ইংরেজিতে লেখার কাগজে কণ্ঠস্বর নেই, আর শব্দ সরালে ব্যাকরণ ভাঙে — তাই জোর দেওয়ার জন্য বাক্যটাকে দুই ভাগে ফেটে (cleft মানেই ফাটা) নতুন গড়নে সাজানো হয়: It was Rina who called / What I need is time / All I want is peace। এই পাঠে it-cleft, wh-cleft, reversed wh-cleft, all-cleft আর reason-cleft — পাঁচটা গড়ন, কোনটা কখন, আর কোথায় না-লিখলেই বা কোথায় লিখলে ভুল — সব বিস্তারিত শিখব।",
        en: "This is the third lesson of the advanced Learning Path (Unit 3). Refresh the intermediate lesson on Relative Clauses alongside Unit 2 (Participle Clauses) — the backbone of an it-cleft is a who/that/which-clause. Bengali has three emphasis tools: pulling a word to the front ('ফোনটা রীনাই করেছিল'), adding the '-ই' particle ('রীনাই করেছিল'), and vocal stress. Written English has no voice, and moving words breaks the grammar — so instead, the sentence is split (cleft literally means split) into two parts and rebuilt for emphasis: It was Rina who called / What I need is time / All I want is peace. In this lesson we cover five shapes — it-cleft, wh-cleft, reversed wh-cleft, all-cleft and reason-cleft — when to use each, and exactly where mistakes live.",
        hi: "यह एडवांस्ड Learning Path का तीसरा पाठ (Unit 3) है। Unit 2 (Participle Clauses) के साथ intermediate स्तर का Relative Clauses पाठ दोहरा लें — it-cleft की रीढ़ who/that/which-clause ही है। हिंदी/बांग्ला में ज़ोर देने के तीन औज़ार: शब्द को वाक्य के सामने खींचना ('फ़ोन रीना ही ने किया था'), 'ही' कण जोड़ना, और आवाज़ का ज़ोर। लिखी हुई अंग्रेज़ी में आवाज़ नहीं है, और शब्द हिलाने से व्याकरण टूटता है — इसलिए वाक्य को दो भागों में फाड़कर (cleft = split) नई बनावट दी जाती है: It was Rina who called / What I need is time / All I want is peace। इस पाठ में पाँच रूप — it-cleft, wh-cleft, reversed wh-cleft, all-cleft और reason-cleft — कब कौन-सा, और ग़लतियाँ कहाँ छिपती हैं, सब विस्तार से।",
      },
      roadmap: [
        { bn: "🎯 বাক্য ভেঙে জোর — cleft কখন ও কেন দরকার", en: "🎯 Splitting a sentence for emphasis — when and why clefts are needed", hi: "🎯 वाक्य तोड़कर ज़ोर — cleft कब और क्यों चाहिए" },
        { bn: "🧊 It-cleft গড়ন: It + be + ফোকাস + who/that + বাকি", en: "🧊 The it-cleft frame: It + be + focus + who/that + rest", hi: "🧊 It-cleft ढाँचा: It + be + फ़ोकस + who/that + बाकी" },
        { bn: "❓ Wh-cleft (pseudo-cleft) গড়ন: What + বাকি + be + ফোকাস", en: "❓ The wh-cleft (pseudo-cleft) frame: What + rest + be + focus", hi: "❓ Wh-cleft (pseudo-cleft) ढाँचा: What + बाकी + be + फ़ोकस" },
        { bn: "🔄 Reversed wh-cleft — ফোকাস + be + what-clause", en: "🔄 The reversed wh-cleft — focus + be + what-clause", hi: "🔄 Reversed wh-cleft — फ़ोकस + be + what-clause" },
        { bn: "🤲 All-cleft — 'শুধু এটুকুই' বলার গড়ন", en: "🤲 The all-cleft — the 'nothing but this' frame", hi: "🤲 All-cleft — 'बस इतना ही' का ढाँचा" },
        { bn: "🧭 Reason-cleft: The reason (why)... is that...", en: "🧭 The reason-cleft: The reason (why)... is that...", hi: "🧭 Reason-cleft: The reason (why)... is that..." },
        { bn: "🚦 দেশি পরীক্ষা — 'ই'-কার কোথায় বসে, cleft সেখানেই", en: "🚦 The home-grown test — wherever the '-ই' particle falls, there is your cleft", hi: "🚦 देसी परीक्षण — 'ही' कण कहाँ बैठे, cleft वहीं" },
        { bn: "🔬 It-cleft গভীরে — who/that, tense, বহুবচন ফোকাস", en: "🔬 The it-cleft in depth — who/that, tense, plural focus", hi: "🔬 It-cleft गहराई में — who/that, tense, बहुवचन फ़ोकस" },
        { bn: "🔮 Wh-cleft গভীরে — What, All, The thing, The person", en: "🔮 The wh-cleft in depth — What, All, The thing, The person", hi: "🔮 Wh-cleft गहराई में — What, All, The thing, The person" },
        { bn: "⚖️ ভারসাম্য — কথায় stress, লেখায় cleft, অনুচ্ছেদে এক-দুটো", en: "⚖️ Balance — stress in speech, clefts in writing, one or two per paragraph", hi: "⚖️ संतुलन — बोलने में stress, लेखन में cleft, हर अनुच्छेद में एक-दो" },
        { bn: "⚠️ ছয় দল সূক্ষ্ম ভুল — পরীক্ষার আগে এক-মিনিট চেক", en: "⚠️ Six groups of subtle errors — a one-minute check before exams", hi: "⚠️ छह समूह सूक्ष्म गलतियाँ — परीक्षा से पहले एक-मिनट जाँच" },
        { bn: "📖 ছোট গল্পে পাঁচ cleft + পুরো পাঠের এক নজরে", en: "📖 Five clefts in a mini-story + the whole lesson at a glance", hi: "📖 छोटी कहानी में पाँच cleft + पूरे पाठ का एक नज़र" },
      ],
      sections: [
        {
          heading: {
            bn: "🎯 কখন ব্যবহার হয় — বাক্যকে স্পটলাইট দেওয়া",
            en: "🎯 When to use them — putting a sentence in the spotlight",
            hi: "🎯 कब इस्तेमाल होते हैं — वाक्य पर स्पॉटलाइट डालना",
          },
          lead: {
            bn: "সাধারণ বাক্যে সব তথ্য সমান ওজনে; cleft এক টুকরোকে স্পটলাইটে তুলে বাকিটা ছায়ায় ফেলে দেয়।",
            en: "A plain sentence weighs everything equally; a cleft lifts one piece into the spotlight and casts the rest into shadow.",
            hi: "सादे वाक्य में सब जानकारी बराबर वज़न की; cleft एक टुकड़े को स्पॉटलाइट में उठाकर बाकी को छाया में धकेल देता है।",
          },
          points: [
            { bn: "সাধারণ বাক্য Rina called yesterday পাঁচটা তথ্য সমান ওজনে বহন করে; cleft এক টুকরোকে **স্পটলাইটে** তোলে, বাকিটা ছায়ায় ফেলে।", en: "A plain sentence like Rina called yesterday carries five pieces of information with equal weight; a cleft lifts one piece into the **spotlight** and pushes the rest into shadow.", hi: "सादा वाक्य Rina called yesterday पाँच जानकारियाँ बराबर वज़न से ले जाता है; cleft एक टुकड़े को **स्पॉटलाइट** में उठाता है, बाकी छाया में।" },
            { bn: "**ভুল ধারণা শোধরাতে** — 'মিনা ফোন করেছিল?' — No, it was Rina who called।", en: "**To correct a misunderstanding** — 'Mina called?' — No, it was Rina who called.", hi: "**ग़लतफ़हमी दूर करने को** — 'मीना ने फ़ोन किया?' — No, it was Rina who called।" },
            { bn: "**অভিযোগ নরম করতে** — It was not my fault that the file got deleted।", en: "**To soften a complaint** — It was not my fault that the file got deleted.", hi: "**शिकायत नरम करने को** — It was not my fault that the file got deleted।" },
            { bn: "**লেখায় কাঠামো-জোরে** — রচনার মূল প্রতিবাদী বাক্যে: What matters most is not talent but practice।", en: "**For structural stress in writing** — an essay's key rebuttal: What matters most is not talent but practice.", hi: "**लेखन में ढाँचे-ज़ोर** — निबंध के मुख्य प्रतिवाद में: What matters most is not talent but practice।" },
            { bn: "**তথ্যের ধারা মসৃণ রাখতে** — পুরোনো তথ্য আগে, নতুন তথ্য শেষে (end-focus)।", en: "**To keep information flowing smoothly** — old information first, new information last (end-focus).", hi: "**जानकारी का प्रवाह सहज रखने को** — पुरानी जानकारी पहले, नई अंत में (end-focus)।" },
            { bn: "উঁচু স্তরের লেখক cleft-কে মসলার মতো খান — অনুচ্ছেদে এক-দুটো, ঠিক যেখানে পাঠকের চোখ আটকাতে চান।", en: "Advanced writers use clefts like a spice — one or two per paragraph, exactly where they want the reader's eye to snag.", hi: "एडवांस्ड लेखक cleft को मसाले की तरह खाते हैं — हर अनुच्छेद में एक-दो, ठीक जहाँ पाठक की नज़र रुकनी चाहिए।" },
            { bn: "IELTS/TOEFL-এর লেখায় একটা সঠিক wh-cleft (What the data shows is...) পরীক্ষকের চোখে লেভেল উঁচিয়ে দেয়।", en: "In IELTS/TOEFL writing, a correct wh-cleft (What the data shows is...) visibly lifts the level in an examiner's eyes.", hi: "IELTS/TOEFL लेखन में सही wh-cleft (What the data shows is...) परीक्षक की नज़र में स्तर ऊँचा दिखाता है।" },
            { bn: "তবে সব বাক্যই জোর দিলে কোনোটাই জোর পায় না — cleft-এর শক্তি তার বিরলতায়।", en: "But if every sentence is emphasised, nothing is — the power of a cleft lies in its rarity.", hi: "पर हर वाक्य ज़ोर दे तो कुछ भी ज़ोरदार नहीं रहता — cleft की ताक़त उसकी दुर्लभता में है।" },
          ],
          examples: [
            { wrong: "No, Mina called you yesterday. (replying to: Was it Mina who called me?)", right: "No, it was Rina who called you yesterday.", note: { bn: "ভুল ধারণা শোধরাতে ঠিক সেই অংশটা (রীনা) স্পটলাইটে — it was Rina who called; বাংলার 'রীনাই'-এর ইংরেজি রূপ এটাই।", en: "To correct the misunderstanding, the exact piece (Rina) goes into the spotlight — it was Rina who called; this is English for Bengali 'রীনাই'.", hi: "ग़लतफ़हमी दूर करने को ठीक वही टुकड़ा (रीना) स्पॉटलाइट में — it was Rina who called; यही 'रीना ही' का अंग्रेज़ी रूप है।" } },
            { wrong: "The file got deleted and this is not my fault.", right: "It was not my fault that the file got deleted.", note: { bn: "অভিযোগ নরম করতে প্রতিরক্ষাটা (my fault) আগে স্পটলাইটে — দুটো বাক্যের বদলে এক সুন্দর it-cleft।", en: "To soften the complaint, the defence (my fault) takes the spotlight first — one elegant it-cleft instead of two flat sentences.", hi: "शिकायत नरम रखने को बचाव (my fault) पहले स्पॉटलाइट में — दो सपाट वाक्यों की जगह एक सुंदर it-cleft।" } },
            { wrong: "Practice is important and talent is also important.", right: "What matters most is not talent but practice.", note: { bn: "রচনার মূল বক্তব্যে দুই সমান বাক্যের বদলে একটা তুলনামূলক wh-cleft — লেভেল তৎক্ষণাৎ উঁচু শোনায়।", en: "In an essay's key claim, one contrastive wh-cleft beats two equal sentences — the level instantly sounds higher.", hi: "निबंध के मुख्य दावे में दो बराबर वाक्यों की जगह एक तुलनात्मक wh-cleft — स्तर तुरंत ऊँचा लगता है।" } },
            { wrong: "The surprise was his honesty. His honesty was the surprise.", right: "What surprised me was his honesty.", note: { bn: "একই তথ্য দুবার ফেরানো নয় — wh-cleft দিয়ে একবারেই নতুন তথ্যকে শেষে বসিয়ে দিন (end-focus)।", en: "Do not loop the same information twice — one wh-cleft places the new information at the end (end-focus).", hi: "एक ही जानकारी दो बार घुमाना नहीं — एक wh-cleft नई जानकारी को अंत में बिठा देता है (end-focus)।" } },
          ],
        },
        {
          heading: {
            bn: "🧊 It-cleft — It + be + ফোকাস + who/that + বাকি",
            en: "🧊 The it-cleft — It + be + focus + who/that + rest",
            hi: "🧊 It-cleft — It + be + फ़ोकस + who/that + बाकी",
          },
          lead: {
            bn: "ফোকাস সামনে, বাকি বাক্য who/that-এর পরে — বাঙালি 'ই'-কারের সবচেয়ে সরাসরি ইংরেজি রূপ।",
            en: "Focus first, the rest after who/that — the most direct English equivalent of the Bengali '-ই' particle.",
            hi: "फ़ोकस पहले, बाकी who/that के बाद — बांग्ला 'ही' कण का सबसे सीधा अंग्रेज़ी रूप।",
          },
          formula: {
            bn: "It + be (is/was) + জোর দেওয়ার অংশ + who/that + বাকি বাক্য",
            en: "It + be (is/was) + the focus + who/that + the rest of the sentence",
            hi: "It + be (is/was) + ज़ोर देने का अंश + who/that + बाकी वाक्य",
          },
          points: [
            { bn: "It was the noise that woke me / It was Karim who fixed it — দুটোই এই এক গড়নের নমুনা।", en: "It was the noise that woke me / It was Karim who fixed it — two samples of the same frame.", hi: "It was the noise that woke me / It was Karim who fixed it — दोनों इसी ढाँचे के नमूने।" },
            { bn: "ফোকাস **মানুষ** হলে who — It was Rina who called; জিনিস বা ঘটনা হলে that — It was the noise that woke me।", en: "When the focus is a **person**, use who — It was Rina who called; for things or events, that — It was the noise that woke me.", hi: "फ़ोकस **व्यक्ति** हो तो who — It was Rina who called; वस्तु/घटना हो तो that — It was the noise that woke me।" },
            { bn: "আরও আনুষ্ঠানিক লেখায় জিনিসের জন্য which-ও চলে — It was the treaty which changed the border।", en: "In more formal writing, which is also possible for things — It was the treaty which changed the border.", hi: "और अधिक औपचारिक लेखन में वस्तु के लिए which भी चलता है — It was the treaty which changed the border।" },
            { bn: "জোর দেওয়ার অংশটা It was-এর ঠিক পরে বসে; বাকি বাক্য who/that-এর পরে ছায়ায় থাকে।", en: "The focus sits right after It was; the rest of the sentence stays in the shadow after who/that.", hi: "ज़ोर देने का अंश It was के ठीक बाद बैठता है; बाकी वाक्य who/that के बाद छाया में रहता है।" },
          ],
          examples: [
            { wrong: "It was Karim which fixed the projector.", right: "It was Karim who fixed the projector.", note: { bn: "it-cleft-এ ফোকাস মানুষ হলে who — which শুধু জিনিসের জন্য; এই ভুল it-cleft-এর সবচেয়ে পরিচিত ফাঁদ।", en: "In an it-cleft a person takes who — which is only for things; this is the most familiar trap of the it-cleft.", hi: "it-cleft में व्यक्ति के लिए who — which केवल वस्तु के लिए; यह it-cleft का सबसे जाना-पहचाना जाल है।" } },
          ],
        },
        {
          heading: {
            bn: "❓ Wh-cleft (pseudo-cleft) — What + বাকি + be + ফোকাস",
            en: "❓ The wh-cleft (pseudo-cleft) — What + rest + be + focus",
            hi: "❓ Wh-cleft (pseudo-cleft) — What + बाकी + be + फ़ोकस",
          },
          lead: {
            bn: "জোর দেওয়ার অংশ শেষে বসে — পাঠক যা মনে রাখবে, সেটাই শেষ শব্দ।",
            en: "The focus lands at the end — the last word is what the reader remembers.",
            hi: "ज़ोर देने का अंश अंत में बैठता है — आख़िरी शब्द ही पाठक को याद रहेगा।",
          },
          formula: {
            bn: "What + বাকি বাক্য + be + জোর দেওয়ার অংশ",
            en: "What + the rest of the sentence + be + the focus",
            hi: "What + बाकी वाक्य + be + ज़ोर देने का अंश",
          },
          points: [
            { bn: "What woke me was the noise / What I need is time — what-clause আগে, জোর দেওয়ার অংশ শেষে।", en: "What woke me was the noise / What I need is time — the what-clause first, the focus last.", hi: "What woke me was the noise / What I need is time — what-clause पहले, ज़ोर देने का अंश अंत में।" },
            { bn: "ফোকাস বাক্যের **শেষে** বসে — পাঠক যা মনে রাখবে সেটাই শেষ শব্দ (end-focus)।", en: "The focus sits at the **end** of the sentence — the last word is what the reader keeps (end-focus).", hi: "फ़ोकस वाक्य के **अंत** में बैठता है — आख़िरी शब्द ही पाठक याद रखेगा (end-focus)।" },
            { bn: "wh-cleft-কে pseudo-cleft-ও বলে — দুই নাম, একই গড়ন।", en: "A wh-cleft is also called a pseudo-cleft — two names, one frame.", hi: "wh-cleft को pseudo-cleft भी कहते हैं — दो नाम, एक ही ढाँचा।" },
            { bn: "বাংলার 'যা দরকার, তা হলো সময়' গড়নেরই ইংরেজি — কিন্তু 'তা' বলে ফিরে আসা (that/it) যাবে না।", en: "It is English for the Bengali frame 'যা দরকার, তা হলো সময়' — but no resumptive 'that/it' may follow.", hi: "बांग्ला 'जो चाहिए, वह है समय' ढाँचे का ही अंग्रेज़ी — पर 'वह' दोहराना (that/it) नहीं चलेगा।" },
          ],
          examples: [
            { wrong: "What I need, that is time.", right: "What I need is time.", note: { bn: "বাংলার 'যা দরকার, সেটা হলো সময়' — সেটা (that) পুনরাবৃত্তি ইংরেজি গড়নে চলে না; What + clause + is + ফোকাস — শেষ।", en: "The Bengali resumption 'যা দরকার, সেটা হলো সময়' cannot repeat in the English frame; What + clause + is + focus — and stop.", hi: "बांग्ला 'जो चाहिए, वह है समय' का दोहराव अंग्रेज़ी ढाँचे में नहीं चलता; What + clause + is + फ़ोकस — बस।" } },
          ],
        },
        {
          heading: {
            bn: "🔄 Reversed wh-cleft — ফোকাস + be + what-clause",
            en: "🔄 The reversed wh-cleft — focus + be + what-clause",
            hi: "🔄 Reversed wh-cleft — फ़ोकस + be + what-clause",
          },
          lead: {
            bn: "ফোকাসকে শিরোনামের মতো সামনে তুলে দেয় — উপসংহার আর প্রতিবাদে ঝলমলে।",
            en: "It hoists the focus to the front like a headline — it shines in conclusions and rebuttals.",
            hi: "फ़ोकस को सुर्ख़ी की तरह सामने उठा देता है — निष्कर्ष और प्रतिवाद में चमकता है।",
          },
          formula: {
            bn: "জোর দেওয়ার অংশ + be + what-clause",
            en: "the focus + be + what-clause",
            hi: "ज़ोर देने का अंश + be + what-clause",
          },
          points: [
            { bn: "Time is what I need / The noise was what woke me — wh-cleft-কে উল্টে দেওয়া রূপ।", en: "Time is what I need / The noise was what woke me — the wh-cleft turned around.", hi: "Time is what I need / The noise was what woke me — wh-cleft का उल्टा रूप।" },
            { bn: "wh-cleft-এ ফোকাস শেষে থাকে; reversed রূপে সেটাকে **শুরুতে** তুলে নেওয়া হয় — শিরোনাম-ধাঁচের জোর চাইলে।", en: "In a wh-cleft the focus sits at the end; the reversed form lifts it to the **front** — for a headline-like punch.", hi: "wh-cleft में फ़ोकस अंत में होता है; reversed रूप में उसे **शुरू** में उठा लिया जाता है — सुर्ख़ी-जैसा ज़ोर चाहिए तो।" },
            { bn: "শব্দ কেউ বদলায় না, শুধু অর্ডার বদলায় — what-clause পিছিয়ে যায়, ফোকাস এগিয়ে আসে।", en: "Not a single word changes, only the order — the what-clause slides back, the focus steps forward.", hi: "एक शब्द भी नहीं बदलता, सिर्फ़ क्रम बदलता है — what-clause पीछे खिसकता है, फ़ोकस आगे आता है।" },
            { bn: "উপসংহার আর প্রতিবাদে এই গড়ন ঝলমল করে — বাকিটা wh-cleft-গভীরে সেকশনে।", en: "This shape glitters in conclusions and rebuttals — more in the wh-cleft deep-dive ahead.", hi: "निष्कर्ष और प्रतिवाद में यह रूप चमकता है — बाकी wh-cleft गहराई वाले भाग में।" },
          ],
          examples: [
            { wrong: "Time is which I need most.", right: "Time is what I need most.", note: { bn: "wh-cleft সবসময় what ধারণ করে (reversed রূপেও) — which নয়; গড়ন: ফোকাস + is + what-clause।", en: "A wh-cleft always runs on what (even reversed) — not which; frame: focus + is + what-clause.", hi: "wh-cleft हमेशा what पर चलता है (उलटे रूप में भी) — which नहीं; ढाँचा: फ़ोकस + is + what-clause।" } },
          ],
        },
        {
          heading: {
            bn: "🤲 All-cleft — All (that) + বাকি + be + ফোকাস",
            en: "🤲 The all-cleft — All (that) + rest + be + focus",
            hi: "🤲 All-cleft — All (that) + बाकी + be + फ़ोकस",
          },
          lead: {
            bn: "'শুধু এটুকুই' বলে চাওয়া ছোট করে জোর — সীমিত চাওয়া আর অভিযোগের আপন গড়ন।",
            en: "It shrinks the wish to 'nothing but this' — the native frame of limited wants and complaints.",
            hi: "'बस इतना ही' कहकर चाहत छोटी कर देता है — सीमित चाहत और शिकायत का अपना ढाँचा।",
          },
          formula: {
            bn: "All (that) + বাকি বাক্য + be + জোর দেওয়ার অংশ",
            en: "All (that) + the rest of the sentence + be + the focus",
            hi: "All (that) + बाकी वाक्य + be + ज़ोर देने का अंश",
          },
          points: [
            { bn: "All (that) I want is a little peace — all মানে 'শুধু এটুকুই', সীমিত চাওয়ার জোর।", en: "All (that) I want is a little peace — all means 'nothing but this', the stress of a limited wish.", hi: "All (that) I want is a little peace — all यानी 'बस इतना ही', सीमित चाहत का ज़ोर।" },
            { bn: "(that) বন্ধনীর মানে: চাইলে All that I want, চাইলে শুধু All I want — দুটোই সঠিক।", en: "The bracketed (that) means: All that I want or plain All I want — both are correct.", hi: "(that) ब्रैकेट का मतलब: All that I want या बस All I want — दोनों सही।" },
            { bn: "কিন্তু all-এর পরে what কখনো আসে না — All what I want ভুল, বাংলা 'যা কিছু চাই'-এর ছায়া।", en: "But what never follows all — All what I want is wrong, a shadow of the Bengali 'যা কিছু চাই'.", hi: "पर all के बाद what कभी नहीं — All what I want ग़लत, बांग्ला 'जो कुछ चाहिए' की छाया।" },
            { bn: "be-verb ছাড়া cleft দাঁড়ায় না — All I want **is** a little peace; ড্যাশ দিয়ে is-এর কাজ চলে না।", en: "A cleft cannot stand without its be-verb — All I want **is** a little peace; a dash cannot do is's job.", hi: "be-verb के बिना cleft खड़ा नहीं होता — All I want **is** a little peace; डैश से is का काम नहीं चलता।" },
          ],
          examples: [
            { wrong: "All I want — a little peace.", right: "All I want is a little peace.", note: { bn: "cleft গড়নে be-verb ছাড়া বাক্য দাঁড়ায় না — All/What + clause-এর পরে is/was বাধ্যতামূলক।", en: "A cleft cannot stand without its be-verb — after All/What + clause, is/was is compulsory.", hi: "cleft ढाँचे में be-verb के बिना वाक्य खड़ा नहीं होता — All/What + clause के बाद is/was अनिवार्य।" } },
          ],
        },
        {
          heading: {
            bn: "🧭 Reason-cleft — The reason (why)... is that...",
            en: "🧭 The reason-cleft — The reason (why)... is that...",
            hi: "🧭 Reason-cleft — The reason (why)... is that...",
          },
          lead: {
            bn: "কারণকেই মঞ্চে তোলা — ব্যাখ্যার বাক্যে লেখাকে গোছানো দেখায়।",
            en: "It puts the reason itself on stage — it makes explanatory sentences look tidy.",
            hi: "कारण को ही मंच पर लाता है — व्याख्या के वाक्य को सुव्यवस्थित दिखाता है।",
          },
          formula: {
            bn: "The reason (why) + বাকি বাক্য + is + that + কারণ",
            en: "The reason (why) + the rest + is + that + the cause",
            hi: "The reason (why) + बाकी वाक्य + is + that + कारण",
          },
          points: [
            { bn: "The reason (why) I called is that I need advice — reason-এর পরে why-clause, be-verb-এর পরে that-clause।", en: "The reason (why) I called is that I need advice — a why-clause after reason, a that-clause after the be-verb.", hi: "The reason (why) I called is that I need advice — reason के बाद why-clause, be-verb के बाद that-clause।" },
            { bn: "লেখায় the reason is **that** — 'the reason is because' কথ্য রঙ।", en: "In writing prefer the reason is **that** — 'the reason is because' is casual colour.", hi: "लेखन में the reason is **that** — 'the reason is because' बोलचाल का रंग है।" },
            { bn: "reason শব্দের ভেতরেই because-এর অর্থ আছে — দুবার বলা বাড়তি।", en: "The word 'reason' already contains the because-meaning — saying it twice is surplus.", hi: "'reason' शब्द में because का अर्थ पहले से है — दो बार कहना फ़ालतू।" },
            { bn: "ব্যাখ্যা-বাক্যে এই গড়নই formal লেখাকে গোছানো দেখায়।", en: "In explanatory sentences this frame is what makes formal writing look organised.", hi: "व्याख्या-वाक्यों में यही ढाँचा औपचारिक लेखन को सुव्यवस्थित दिखाता है।" },
          ],
          examples: [
            { wrong: "The reason why I called is because I need advice.", right: "The reason why I called is that I need advice.", note: { bn: "'the reason is because' কথ্য ভাষায় শোনা যায়, কিন্তু লেখায় the reason is that — reason-এর ভেতরেই because-এর অর্থ আছে, দুবার বলা বাড়তি।", en: "'The reason is because' is heard in speech, but in writing prefer the reason is that — 'reason' already contains the because-meaning.", hi: "'The reason is because' बोलचाल में सुनाई देता है, पर लेखन में the reason is that — 'reason' में because का अर्थ पहले से है।" } },
          ],
        },
        {
          heading: {
            bn: "🚦 আভাস ও প্যাটার্ন — বাঙালি 'ই'-কার পরীক্ষা",
            en: "🚦 Signals — the Bengali '-ই' particle test",
            hi: "🚦 संकेत — बांग्ला 'ही' कण का परीक्षण",
          },
          lead: {
            bn: "বাক্যটা বাংলায় বলুন — 'ই'-কার কোথায় বসে, cleft-এর ফোকাস সেখানেই; টেবিলে চার জোড়া।",
            en: "Say the sentence in Bengali — wherever the '-ই' particle falls, there is the cleft's focus; the table shows four pairs.",
            hi: "वाक्य को बांग्ला/हिंदी में बोलें — 'ही' कण जहाँ बैठे, cleft का फ़ोकस वहीं; तालिका में चार जोड़ी।",
          },
          table: {
            head: [
              { bn: "বাংলা জোর", en: "Bengali emphasis", hi: "बांग्ला/हिंदी ज़ोर" },
              { bn: "cleft গড়ন", en: "Cleft frame", hi: "cleft ढाँचा" },
            ],
            rows: [
              [{ bn: "রীনাই ফোন করেছিল", en: "রীনাই ফোন করেছিল (Rina herself called)", hi: "रीना ही ने फ़ोन किया" }, { bn: "it-cleft — It was Rina who called", en: "it-cleft — It was Rina who called", hi: "it-cleft — It was Rina who called" }],
              [{ bn: "আমার যা দরকার তা হলো সময়", en: "আমার যা দরকার তা হলো সময় (what I need is time)", hi: "मुझे जो चाहिए वह है समय" }, { bn: "wh-cleft — What I need is time", en: "wh-cleft — What I need is time", hi: "wh-cleft — What I need is time" }],
              [{ bn: "আমি শুধু একটু শান্তি চাই", en: "আমি শুধু একটু শান্তি চাই (I want nothing but peace)", hi: "मैं बस थोड़ी शांति चाहता हूँ" }, { bn: "all-cleft — All I want is a little peace", en: "all-cleft — All I want is a little peace", hi: "all-cleft — All I want is a little peace" }],
              [{ bn: "ডাকার কারণ হলো পরামর্শ", en: "ডাকার কারণ হলো পরামর্শ (the reason for calling is advice)", hi: "बुलाने का कारण है सलाह" }, { bn: "reason-cleft — The reason I called is that...", en: "reason-cleft — The reason I called is that...", hi: "reason-cleft — The reason I called is that..." }],
            ],
          },
          points: [
            { bn: "দেশি পরীক্ষা — ইংরেজি বাক্যটা বাংলায় বলুন; '**ই**'-কার কোথায় বসে, cleft-এর ফোকাস সেখানেই।", en: "The home-grown test — say the English sentence in Bengali; wherever the '**-ই**' particle falls, there is the cleft's focus.", hi: "देसी परीक्षण — अंग्रेज़ी वाक्य को हिंदी/बांग्ला में बोलें; '**ही**' कण जहाँ बैठे, cleft का फ़ोकस वहीं।" },
            { bn: "এই অনুবাদ-পরীক্ষা সেই জোরটাকেই ধরে, যা বাঙালি কণ্ঠস্বরে স্বাভাবিক।", en: "This translation test captures exactly the emphasis a Bengali voice carries naturally.", hi: "यह अनुवाद-परीक्षण वही ज़ोर पकड़ता है जो बोली में सहज होता है।" },
            { bn: "প্যাটার্ন-সংকেত: সংলাপে সংশোধন-পরিচয়ে it-cleft (It was not me, sir); লেখার সিদ্ধান্ত-বাক্যে wh-cleft (What we need now is action, not words)।", en: "Pattern signals: it-clefts dominate dialogue — corrections and identifications (It was not me, sir); wh-clefts live in written conclusions (What we need now is action, not words).", hi: "पैटर्न-संकेत: संवाद में संशोधन-पहचान में it-cleft (It was not me, sir); लिखे निष्कर्ष-वाक्य में wh-cleft (What we need now is action, not words)।" },
            { bn: "all-cleft অভিযোগ ও আবেগে (All she did was smile); reason-cleft ব্যাখ্যায়।", en: "All-clefts carry complaint and emotion (All she did was smile); reason-clefts explain.", hi: "all-cleft शिकायत और भावना में (All she did was smile); reason-cleft व्याख्या में।" },
            { bn: "বিপরীত-জোড় (not X but Y) দেখলে cleft-এর সম্ভাবনা বাড়ে: It is not the price that worries me — it is the delay।", en: "When you see a contrast pair (not X but Y), the odds of a cleft rise: It is not the price that worries me — it is the delay.", hi: "विरोध-जोड़ी (not X but Y) दिखते ही cleft की संभावना बढ़ती है: It is not the price that worries me — it is the delay।" },
          ],
          examples: [
            { wrong: "Was Mina who called you? No, it was not me.", right: "Was it Mina who called you? No, it was not me.", note: { bn: "প্রশ্ন-রূপেও it + be আগে আসে — Was it Mina who...?; it-cleft-এর it বাদ দিলে বাক্য ভেঙে পড়ে।", en: "Even in the question form it + be comes first — Was it Mina who...?; dropping the it of the cleft collapses the frame.", hi: "प्रश्न-रूप में भी it + be पहले आता है — Was it Mina who...?; cleft का it हटाने से ढाँचा ढह जाता है।" } },
            { wrong: "It was not me, sir. I am not the one broke the vase.", right: "It was not me, sir. I am not the one who broke the vase.", note: { bn: "the one/it-এর পরে relative শব্দ (who) বাধ্যতামূলক — cleft-পরিবারের বাক্যগুলো প্রায়ই who/that ছাড়া অচল।", en: "After the one / it a relative word (who) is compulsory — cleft-family sentences usually collapse without who/that.", hi: "the one / it के बाद relative शब्द (who) अनिवार्य — cleft-परिवार के वाक्य who/that के बिना प्रायः टूट जाते हैं।" } },
            { wrong: "What we need now is action, not words, and what we need also is patience.", right: "What we need now is action, not words. What we need next is patience.", note: { bn: "এক বাক্যে দুটো cleft চাপা দেওয়া নয় — cleft একবার, তারপর স্বচ্ছ নতুন বাক্য; ঘন cleft পাঠককে ক্লান্ত করে।", en: "Do not cram two clefts into one sentence — one cleft, then a clean new sentence; dense clefts exhaust the reader.", hi: "एक वाक्य में दो cleft ठूँसना नहीं — एक cleft, फिर साफ़ नया वाक्य; घने cleft पाठक को थका देते हैं।" } },
            { wrong: "It is not the price worries me, it is the delay.", right: "It is not the price that worries me — it is the delay.", note: { bn: "it-cleft-এ ফোকাসের পরে that + verb বাধ্যতামূলক — that worries me ছাড়া গড়ন অসম্পূর্ণ; বিপরীত-জোড়ে ড্যাশ বা কমা ভালো খাপ খায়।", en: "In an it-cleft the focus must be followed by that + verb — without that worries me the frame is incomplete; a dash or comma fits the contrast pair well.", hi: "it-cleft में फ़ोकस के बाद that + verb अनिवार्य — that worries me के बिना ढाँचा अधूरा; विरोध-जोड़ी में डैश या कॉमा सुखद बैठता है।" } },
          ],
        },
        {
          heading: {
            bn: "🔬 It-cleft গভীরে — who/that, tense, বহুবচন ফোকাস",
            en: "🔬 The it-cleft in depth — who/that, tense, plural focus",
            hi: "🔬 It-cleft गहराई में — who/that, tense, बहुवचन फ़ोकस",
          },
          lead: {
            bn: "who না that, It is না It was, বহুবচন ফোকাস — তিন সূক্ষ্ম স্তর এক নজরে।",
            en: "Who or that, It is or It was, plural focus — three subtle layers at a glance.",
            hi: "who या that, It is या It was, बहुवचन फ़ोकस — तीन सूक्ष्म परतें एक नज़र में।",
          },
          formula: {
            bn: "It + be + ফোকাস + who/that + verb — verb ফোকাসের সাথে মিলবে",
            en: "It + be + focus + who/that + verb — the verb agrees with the focus",
            hi: "It + be + फ़ोकस + who/that + verb — verb फ़ोकस से मिलेगा",
          },
          points: [
            { bn: "ফোকাস মানুষ → who সবচেয়ে স্বাভাবিক: It was Rina who called।", en: "A person as focus → who is most natural: It was Rina who called.", hi: "फ़ोकस व्यक्ति → who सबसे सहज: It was Rina who called।" },
            { bn: "ফোকাস জিনিস/ঘটনা → that: It was the noise that woke me; আনুষ্ঠানিক লেখায় জিনিসের জন্য which-ও চলে (It was the treaty which changed the border)।", en: "A thing/event as focus → that: It was the noise that woke me; formal writing also allows which for things (It was the treaty which changed the border).", hi: "फ़ोकस वस्तु/घटना → that: It was the noise that woke me; औपचारिक लेखन में वस्तु के लिए which भी (It was the treaty which changed the border)।" },
            { bn: "মূল ঘটনা বিগত → It was (It was Karim who fixed it yesterday); স্থায়ী সত্য → It is (It is the children who suffer most)।", en: "A finished event takes It was (It was Karim who fixed it yesterday); a standing truth takes It is (It is the children who suffer most).", hi: "बीती घटना पर It was (It was Karim who fixed it yesterday); स्थायी सत्य पर It is (It is the children who suffer most)।" },
            { bn: "ফোকাস বহুবচন হলেও গড়ন একই: It was my friends who solved the problem।", en: "The frame stays the same with a plural focus: It was my friends who solved the problem.", hi: "फ़ोकस बहुवचन हो तो भी ढाँचा वही: It was my friends who solved the problem।" },
            { bn: "who-এর পরে verb তার আসল কর্তা friends-কে মেনে বহুবচন (solved) — cleft-এর it ছদ্ম-কর্তা মাত্র।", en: "The verb after who takes its real subject, friends, in the plural (solved) — the it of the cleft is only a dummy.", hi: "who के बाद की verb उसके असली subject friends से बहुवचन (solved) है — cleft का it मात्र dummy है।" },
            { bn: "Negative + contrastive: It is not what you said but how you said it that hurt her — দুটো what-phrase জুড়ি, শেষে একবারই that + verb।", en: "Negative + contrastive: It is not what you said but how you said it that hurt her — two what-phrases form the pair, closed by that + verb exactly once.", hi: "Negative + contrastive: It is not what you said but how you said it that hurt her — दो what-phrases की जोड़ी, अंत में ठीक एक बार that + verb।" },
            { bn: "প্রশ্ন-রূপও চলে: Was it you who left the window open? — অভিযোগ নরম জিজ্ঞাসায় বদলে যায়।", en: "The question form works too: Was it you who left the window open? — it turns an accusation into a soft enquiry.", hi: "प्रश्न-रूप भी चलता है: Was it you who left the window open? — दोष लगाना नरम पूछताछ बन जाता है।" },
            { bn: "সংবাদ আর রচনায় এই গড়ন প্রতিদিন — পড়ার সময় ফোকাসটা আঙুল দিয়ে চিহ্নিত করুন।", en: "You will meet these shapes daily in news and essays — while reading, point a finger at the focus.", hi: "समाचार और निबंधों में ये रूप रोज़ मिलेंगे — पढ़ते समय फ़ोकस पर उँगली रखें।" },
          ],
          examples: [
            { wrong: "It is Karim who fixed the projector yesterday.", right: "It was Karim who fixed the projector yesterday.", note: { bn: "আগেরকালের কাজ — cleft-এর be-verb-ও অতীতে যাবে: It was; It is শুধু চলমান/স্থায়ী সত্যে।", en: "The fixing happened yesterday — the cleft's be-verb also goes past: It was; It is only for ongoing or standing truths.", hi: "काम बीते कल का — cleft का be-verb भी अतीत में जाएगा: It was; It is केवल चलते/स्थायी सत्य पर।" } },
            { wrong: "It was my friends who solves the problem.", right: "It was my friends who solved the problem.", note: { bn: "who-এর পরের verb-এর কর্তা friends — বহুবচন solved; cleft-এর It ছদ্ম-কর্তা মাত্র, verb-অমিল এখানেই ধরা পড়ে।", en: "The verb after who agrees with friends — plural solved; the it of the cleft is only a dummy, and verb agreement slips exactly here.", hi: "who के बाद की verb friends से मिलती है — बहुवचन solved; cleft का it मात्र dummy है, verb-असंगति यहीं पकड़ी जाती है।" } },
            { wrong: "It was not what he said what hurt her.", right: "It is not what he said but how he said it that hurt her.", note: { bn: "এক it-cleft-এ দুটো what/that চলে না — ফোকাস-জুড়ির শেষে একবারই that + verb আসে; বিপরীত not... but... জোড়া ফোকাস বহন করে।", en: "One it-cleft cannot hold two whats — after the focus pair, that + verb comes exactly once; the not... but... pair carries the focus.", hi: "एक it-cleft में दो what नहीं चलते — फ़ोकस-जोड़ी के बाद that + verb ठीक एक बार; not... but... जोड़ी फ़ोकस ले जाती है।" } },
            { wrong: "It was the treaty who changed the border.", right: "It was the treaty that changed the border.", note: { bn: "ফোকাস জিনিস (treaty) — that (formal-এ which); who শুধু মানুষের জন্য।", en: "The focus is a thing (treaty) — that (or formal which); who is for people only.", hi: "फ़ोकस वस्तु (treaty) है — that (औपचारिक में which); who केवल व्यक्तियों के लिए।" } },
          ],
        },
        {
          heading: {
            bn: "🔮 Wh-cleft গভীরে — What, All, The thing, The person",
            en: "🔮 The wh-cleft in depth — What, All, The thing, The person",
            hi: "🔮 Wh-cleft गहराई में — What, All, The thing, The person",
          },
          lead: {
            bn: "wh-cleft-এর পরিবার What-এর চেয়ে বড় — ঘটনা, চাওয়া, thing, person, place, day।",
            en: "The wh-cleft family is bigger than What — events, wishes, thing, person, place, day.",
            hi: "wh-cleft परिवार What से बड़ा है — घटना, चाहत, thing, person, place, day।",
          },
          formula: {
            bn: "What/All/The thing + বাকি বাক্য + be (একবচন) + ফোকাস",
            en: "What/All/The thing + the rest + be (singular) + the focus",
            hi: "What/All/The thing + बाकी वाक्य + be (एकवचन) + फ़ोकस",
          },
          points: [
            { bn: "What I need is time — চাওয়ার বিষয়টাই ফোকাসে।", en: "What I need is time — the wanted thing sits in focus.", hi: "What I need is time — माँगी हुई चीज़ फ़ोकस में।" },
            { bn: "ঘটনা-বর্ণনায়: What happened was (that) the bus broke down — what-clause-এর পরে that চাইলে যোগ হয়, না দিলেও চলে।", en: "For narrating events: What happened was (that) the bus broke down — an optional that may follow the what-clause.", hi: "घटना-वर्णन में: What happened was (that) the bus broke down — what-clause के बाद that चाहें तो जोड़ें।" },
            { bn: "All (that) I want is a little peace — সীমিত চাওয়ার জোর; all মানে 'শুধু এটুকুই'।", en: "All (that) I want is a little peace — stressing a limited wish; all means 'nothing but this'.", hi: "All (that) I want is a little peace — सीमित चाहत का ज़ोर; all यानी 'बस इतना ही'।" },
            { bn: "The thing (that) I like most is the ending — thing-এর জায়গায় noun বেছে ফোকাসের জাত ঠিক করুন।", en: "The thing (that) I like most is the ending — swap thing for a chosen noun to fix the type of focus.", hi: "The thing (that) I like most is the ending — thing की जगह noun चुनकर फ़ोकस की जाति तय करें।" },
            { bn: "person: The person who helped me was Karim; place: The place where we met was the old library; day: The day when it rained was my wedding day।", en: "person: The person who helped me was Karim; place: The place where we met was the old library; day: The day when it rained was my wedding day.", hi: "person: The person who helped me was Karim; place: The place where we met was the old library; day: The day when it rained was my wedding day।" },
            { bn: "what-clause সবসময় **একবচন** verb নেয় — What I need IS time; পরীক্ষায় একবচনই নিরাপদ।", en: "A what-clause normally takes a **singular** verb — What I need IS time; in exams the singular is the safe choice.", hi: "what-clause सामान्यतः **एकवचन** verb लेता है — What I need IS time; परीक्षा में एकवचन ही सुरक्षित।" },
            { bn: "ফোকাস বহুবচন হলে আধুনিক লেখায় বহুবচন verb-ও শোনা যায় (What we need are better tools) — তবু পরীক্ষায় একবচন।", en: "When the focus is plural, modern writing sometimes allows a plural verb (What we need are better tools) — still, the singular for exams.", hi: "फ़ोकस बहुवचन होने पर आधुनिक लेखन में बहुवचन verb भी सुनाई देता है (What we need are better tools) — फिर भी परीक्षा में एकवचन।" },
            { bn: "Reversed রূপে ফোকাস সামনে: Time is what I need; The truth is what matters — শিরোনাম, উপসংহার, প্রতিবাদে ঝলমল করে।", en: "In the reversed form the focus moves to the front: Time is what I need; The truth is what matters — these glitter in headlines, conclusions and rebuttals.", hi: "Reversed रूप में फ़ोकस सामने: Time is what I need; The truth is what matters — सुर्ख़ियों, निष्कर्षों और प्रतिवादों में चमकते हैं।" },
          ],
          examples: [
            { wrong: "What I need are time and patience. (in an exam answer)", right: "What I need is time and patience.", note: { bn: "পরীক্ষার উত্তরে নিরাপদ নিয়ম — what-clause একবচন verb: is; বহুবচন verb (are) বিতর্কিত ক্ষেত্র।", en: "The safe exam rule — a what-clause takes a singular verb: is; the plural verb (are) is a debated case.", hi: "परीक्षा का सुरक्षित नियम — what-clause एकवचन verb लेता है: is; बहुवचन verb (are) विवादित क्षेत्र है।" } },
            { wrong: "What happened, the bus broke down on the bridge.", right: "What happened was that the bus broke down on the bridge.", note: { bn: "what-clause-এর পরে be-verb বাধ্যতামূলক — What happened was (that)...; কমা দিয়ে বাক্য ভাঙলে cleft গড়ন মরে যায়।", en: "A be-verb must follow the what-clause — What happened was (that)...; breaking the sentence with a comma kills the cleft frame.", hi: "what-clause के बाद be-verb अनिवार्य — What happened was (that)...; कॉमा से वाक्य तोड़ने से cleft ढाँचा मर जाता है।" } },
            { wrong: "All what I want is a little peace.", right: "All (that) I want is a little peace.", note: { bn: "all-এর পরে what আসে না — হয় all (that), নয়তো শুধু all; 'all what' বাংলা 'যা কিছু চাই'-এর ছায়া।", en: "what never follows all — either all (that) or plain all; 'all what' is a shadow of the Bengali 'যা কিছু চাই'.", hi: "all के बाद what कभी नहीं — या all (that), या केवल all; 'all what' बांग्ला 'जो कुछ चाहिए' की छाया है।" } },
            { wrong: "The person who helped me was Karim, and the person also was polite.", right: "The person who helped me was Karim. He was unfailingly polite.", note: { bn: "person/place/day-cleft-এ এক ফোকাস, এক বাক্য; দ্বিতীয় তথ্যটা নতুন স্পষ্ট বাক্যে — He দিয়ে শুরু করলে ধারাটা মসৃণ।", en: "One focus per sentence in person/place/day-clefts; park the second fact in a fresh clear sentence — starting it with He keeps the flow.", hi: "person/place/day-cleft में एक वाक्य, एक फ़ोकस; दूसरी जानकारी नए साफ़ वाक्य में — He से शुरू करने से धार सहज रहती है।" } },
          ],
        },
        {
          heading: {
            bn: "⚖️ জোর দেওয়ার ভারসাম্য — কথায় stress, লেখায় cleft",
            en: "⚖️ Balancing emphasis — stress in speech, clefts in writing",
            hi: "⚖️ ज़ोर का संतुलन — बोलने में stress, लेखन में cleft",
          },
          lead: {
            bn: "একই বাক্য, দুই মাধ্যমে দুই যন্ত্র — কথায় চাপ, লেখায় cleft; সীমা টানার নিয়মও এখানেই।",
            en: "One sentence, two media, two machines — stress in speech, cleft in writing; the rules of restraint are here too.",
            hi: "एक वाक्य, दो माध्यम, दो यंत्र — बोलने में चाप, लेखन में cleft; संयम के नियम भी यहीं।",
          },
          points: [
            { bn: "কথায় জোর মানে শব্দে চাপ — 'I did not say HE stole it'।", en: "In speech, emphasis simply means stressing a word — 'I did not say HE stole it'.", hi: "बोलने में ज़ोर यानी शब्द पर चाप — 'I did not say HE stole it'।" },
            { bn: "লেখায় সেই চাপ ফেটে যায় cleft-এ: It was not him I accused — it was his assistant।", en: "In writing that stress bursts into a cleft: It was not him I accused — it was his assistant.", hi: "लेखन में वही चाप cleft में फटता है: It was not him I accused — it was his assistant।" },
            { bn: "cleft মানে লেখার কাগজে কণ্ঠ-জোরের যন্ত্র; CAPS আর বিস্ময়চিহ্নে জোর ঢোকানো আনুষ্ঠানিক লেখায় অপরিপক্ব দেখায়।", en: "A cleft is writing's machine for vocal stress; carrying emphasis via CAPS and exclamation marks looks immature in formal prose.", hi: "cleft यानी लिखित ज़ोर का यंत्र; CAPS और विस्मय-चिह्न से ज़ोर ढोना औपचारिक गद्य में अपरिपक्व लगता है।" },
            { bn: "**সীমা** — এক অনুচ্ছেদে একটা, সর্বোচ্চ দুটো cleft; cleft-শৃঙ্খল পাঠককে ক্লান্ত করে, জোরের পাহাড় সমতল হয়ে যায়।", en: "**Restraint** — one cleft per paragraph, two at most; chains of clefts tire the reader and flatten emphasis into noise.", hi: "**संयम** — हर अनुच्छेद में एक, अधिकतम दो cleft; cleft की माला पाठक को थका देती है, ज़ोर का पहाड़ मैदान बन जाता है।" },
            { bn: "wh-cleft তথ্য-প্রবাহের পরিবেশক — পুরোনো তথ্য what-clause-এ, নতুন তথ্য শেষে।", en: "A wh-cleft is a courier of information flow — old information in the what-clause, new information at the end.", hi: "wh-cleft जानकारी-प्रवाह का दूत है — पुरानी जानकारी what-clause में, नई अंत में।" },
            { bn: "তাই wh-cleft বাক্য-শুরুর চেয়ে মাঝ-শেষে সবচেয়ে কাজের।", en: "It therefore works best mid-to-late in a paragraph rather than as an opener.", hi: "इसलिए यह वाक्य-आरंभ से ज़्यादा मध्य-अंत में सबसे काम का है।" },
            { bn: "সংবাদের উপসংহার আর IELTS-এর শেষ প্যারা পড়লে দেখবেন — লেখকরা cleft বসান ঠিক শেষ চাপের জায়গায়।", en: "Read news conclusions and final IELTS paragraphs and you will see — writers plant clefts exactly at the point of final push.", hi: "समाचार के निष्कर्ष और IELTS का आख़िरी पैराग्राफ़ पढ़ें — लेखक cleft को ठीक अंतिम ठेलाव पर बिठाते हैं।" },
          ],
          examples: [
            { wrong: "I DID NOT SAY HE STOLE IT!!!", right: "It was not him that I accused of theft — it was his assistant.", note: { bn: "CAPS আর বিস্ময়চিহ্ন কথার চাপের দুর্বল ছায়া — cleft গড়নেই লেখার জোর; আনুষ্ঠানিক প্রতিবাদ এভাবেই লেখা হয়।", en: "CAPS and exclamations are weak shadows of vocal stress — the cleft frame is written emphasis; formal rebuttals are built this way.", hi: "CAPS और विस्मय-चिह्न आवाज़ी ज़ोर की कमज़ोर छाया हैं — लिखित ज़ोर cleft ढाँचे में ही; औपचारिक प्रतिवाद इसी से बनता है।" } },
            { wrong: "What I need is time. What you need is time. What we need is time.", right: "What I need is time. You, on the other hand, need rest.", note: { bn: "এক প্যারায় cleft-শৃঙ্খল জোরকে সমতল করে ফেলে — একটা cleft, বাকিগুলো সাধারণ গড়নে; বৈচিত্র্যই শক্তি।", en: "A chain of clefts in one paragraph flattens emphasis — keep one, return the rest to plain frames; variety is the power.", hi: "एक पैराग्राफ़ में cleft की माला ज़ोर को समतल कर देती है — एक रखें, बाकी सादे ढाँचे में; विविधता ही शक्ति है।" } },
            { wrong: "Time is what I need is what matters.", right: "Time is what I need. And what matters is patience.", note: { bn: "দুটো cleft এক বাক্যে জোড়া যায় না — ভেঙে দুই বাক্য; দ্বিতীয়টায় wh-cleft সাধারণ রূপে ফিরে আসে।", en: "Two clefts cannot be welded into one sentence — split into two; the second returns to the plain wh-cleft form.", hi: "दो cleft एक वाक्य में वेल्ड नहीं होते — दो वाक्यों में बाँटें; दूसरा साधारण wh-cleft रूप में लौटता है।" } },
            { wrong: "The manager shouted, 'IT WAS KARIM WHO FIXED IT.'", right: "The manager made it clear that it was Karim who had fixed the projector.", note: { bn: "reported লেখায় চিৎকার-চিহ্নের বদলে cleft-কে বিবৃতির ভেতরে ঢোকান — tense-ও এক ধাপ পিছায় (had fixed)।", en: "In reported writing fold the cleft inside the statement instead of shouting — and the tense steps back one (had fixed).", hi: "reported लेखन में चिल्लाने की जगह cleft को कथन के भीतर मोड़ें — और tense एक क़दम पीछे (had fixed)।" } },
          ],
        },
        {
          heading: {
            bn: "⚠️ উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "⚠️ Subtle errors made by advanced learners",
            hi: "⚠️ एडवांस्ड शिक्षार्थियों की सूक्ष्म गलतियाँ",
          },
          lead: {
            bn: "ছয় দল সূক্ষ্ম ভুল বাক্যের দেহ ঠিক রেখে হাড়ে গর্ত করে — লিস্টটা মুখস্থ।",
            en: "Six groups of subtle errors hollow out a healthy sentence — memorise this list.",
            hi: "छह समूह की सूक्ष्म गलतियाँ सेहतमंद वाक्य को भीतर से खोखला कर देती हैं — यह सूची याद करें।",
          },
          points: [
            { bn: "**দল ১ — পুনরাবৃত্ত সর্বনাম**: বাংলা 'যা দরকার, সেটা হলো'-র ছায়ায় What I need, that is time লেখা হয়; what-clause শেষ হলে সরাসরি is।", en: "**Group 1 — resumptive pronouns**: under the shadow of Bengali 'যা দরকার, সেটা হলো', learners write What I need, that is time; when the what-clause ends, is follows directly.", hi: "**समूह 1 — पुनरुक्ति-सर्वनाम**: बांग्ला/हिंदी 'जो चाहिए, वह है' की छाया में What I need, that is time लिख दिया जाता है; what-clause ख़त्म, फिर सीधे is।" },
            { bn: "**দল ২ — ফোকাস-পুনরাবৃত্তি**: It was Rina who she called; who-ই কর্তা, she বাড়তি।", en: "**Group 2 — focus duplication**: It was Rina who she called; who is already the subject, so she is extra.", hi: "**समूह 2 — फ़ोकस-दोहराव**: It was Rina who she called; who ही subject है, she फ़ालतू।" },
            { bn: "**দল ৩ — verb-অমিল**: What surprises me IS his patience (একবচন); অনেকে are বসান।", en: "**Group 3 — agreement**: What surprises me IS his patience (singular); many write are.", hi: "**समूह 3 — verb-असंगति**: What surprises me IS his patience (एकवचन); कई are लिखते हैं।" },
            { bn: "**দল ৪ — tense-অসংগতি**: বিগত ঘটনায় It was, অথচ অভ্যাসে লেখা হয় It is Karim who fixed it yesterday।", en: "**Group 4 — tense mismatch**: finished events take It was, yet habit writes It is Karim who fixed it yesterday.", hi: "**समूह 4 — tense-असंगति**: बीती घटना पर It was, फिर भी आदत से It is Karim who fixed it yesterday लिख दिया जाता है।" },
            { bn: "**দল ৫ — be-verb গায়েব**: All I want — peace; ড্যাশ is-এর কাজ নেয় না।", en: "**Group 5 — the missing be-verb**: All I want — peace; a dash cannot do is's job.", hi: "**समूह 5 — be-verb ग़ायब**: All I want — peace; डैश is का काम नहीं ले सकता।" },
            { bn: "**দল ৬ — the reason is because**: লেখায় the reason is that।", en: "**Group 6 — the reason is because**: in writing prefer the reason is that.", hi: "**समूह 6 — the reason is because**: लेखन में the reason is that पसंद करें।" },
            { bn: "প্রতিটা দল পরীক্ষার উত্তরে বারবার ফিরে আসে।", en: "Every group returns again and again in exam answers.", hi: "हर समूह परीक्षा-उत्तरों में बार-बार लौटता है।" },
            { bn: "নিজের লেখায় cleft দেখা মাত্র এই তালিকাটা চোখে বুলিয়ে নিন — এক মিনিটের পরীক্ষায় আধা দরকার।", en: "The moment a cleft appears in your writing, run your eyes down this list — a one-minute check that pays half the marks.", hi: "अपने लेखन में cleft दिखते ही यह सूची आँखों से बुलवा लें — एक मिनट की जाँच आधे अंक बचा लेती है।" },
          ],
          examples: [
            { wrong: "What I need, it is more practice.", right: "What I need is more practice.", note: { bn: "বাংলা 'যা দরকার, সেটা হলো...' — resumptive it/that ইংরেজি cleft-এ নিষিদ্ধ; what-clause + is + ফোকাস, শেষ।", en: "The Bengali 'যা দরকার, সেটা হলো...' habit — resumptive it/that is banned in English clefts; what-clause + is + focus, full stop.", hi: "बांग्ला 'जो चाहिए, वह है...' आदत — resumptive it/that अंग्रेज़ी cleft में वर्जित; what-clause + is + फ़ोकस, बस।" } },
            { wrong: "It was Rina who she called me.", right: "It was Rina who called me.", note: { bn: "who-clause-এর কর্তা who-ই — she দুবার গোছানো; ফোকাস (Rina) একবার, কর্তা-দায়িত্ব who-এর।", en: "The subject of the who-clause is who itself — she doubles the job; the focus (Rina) appears once, and who carries the subject role.", hi: "who-clause का subject who स्वयं है — she काम दोहराती है; फ़ोकस (रीना) एक बार, subject-जिम्मेदारी who की।" } },
            { wrong: "What surprise me is his patience.", right: "What surprises me is his patience.", note: { bn: "what-clause-এর ভেতরের verb-ও একবচন: surprises; পুরো what-clause-টাই বাক্যের একক কর্তা।", en: "Even the verb inside the what-clause is singular: surprises; the whole what-clause is the single subject of the sentence.", hi: "what-clause के भीतर की verb भी एकवचन: surprises; पूरा what-clause ही वाक्य का एकमात्र subject है।" } },
            { wrong: "All I did was to asking a question.", right: "All I did was ask a question.", note: { bn: "All/What + did-বিশিষ্ট cleft-এর পরে bare infinitive: was ask; to-ও বাদ দেওয়া যায়, V-ing নয়।", en: "After an All/What + did cleft use the bare infinitive: was ask; the to is optional at best, and V-ing is wrong.", hi: "All/What + did वाले cleft के बाद bare infinitive: was ask; to वैकल्पिक, V-ing ग़लत।" } },
            { wrong: "The reason he resigned is because the workload doubled.", right: "The reason he resigned is that the workload doubled.", note: { bn: "the reason is that — লেখার ভাষার পছন্দ; is because কথ্য রঙ, পরীক্ষার রচনায় ফাঁকি মনে হয়।", en: "the reason is that — the written-language choice; is because is casual colour and reads as a shortcut in exam essays.", hi: "the reason is that — लिखित भाषा का पसंदीदा रूप; is because बोलचाल का रंग है, परीक्षा-निबंध में शॉर्टकट लगता है।" } },
          ],
        },
        {
          heading: {
            bn: "📖 ছোট গল্পে দেখা যাক + এক নজরে",
            en: "📖 Seen in a short story + at a glance",
            hi: "📖 छोटी कहानी में देखिए + एक नज़र में",
          },
          lead: {
            bn: "এক সংলাপে পাঁচ cleft — সংশোধন, বিস্ময়, বিনয়, শিক্ষা, কারণ; শেষে পুরো পাঠের সাত-সূত্র রিক্যাপ।",
            en: "Five clefts in one dialogue — correction, wonder, modesty, lesson, reason; then a seven-rule recap.",
            hi: "एक संवाद में पाँच cleft — संशोधन, आश्चर्य, विनम्रता, सीख, कारण; अंत में सात-नियम रिकैप।",
          },
          points: [
            { bn: "সংলাপ-অংশটা পড়ুন — প্রতিটা cleft চিহ্নিত করুন, ভাবুন লেখক কী স্পটলাইট দিচ্ছেন।", en: "Read the dialogue — mark every cleft and ask what the writer is spotlighting.", hi: "संवाद-अंश पढ़ें — हर cleft चिह्नित करें, सोचें लेखक किस पर स्पॉटलाइट डाल रहा है।" },
            { bn: "'It was Karim who fixed the projector before the client arrived — nobody else even touched it. What surprised us was how calmly he handled the crisis.'", en: "'It was Karim who fixed the projector before the client arrived — nobody else even touched it. What surprised us was how calmly he handled the crisis.'", hi: "'It was Karim who fixed the projector before the client arrived — nobody else even touched it. What surprised us was how calmly he handled the crisis.'" },
            { bn: "'All I did was restart it, he laughed. But the manager knew better: it is not the hours you give that matter; it is the attention you pay.'", en: "'All I did was restart it, he laughed. But the manager knew better: it is not the hours you give that matter; it is the attention you pay.'", hi: "'All I did was restart it, he laughed. But the manager knew better: it is not the hours you give that matter; it is the attention you pay.'" },
            { bn: "'The reason he stayed till ten was that the demo had to be perfect. A week later, when the client praised the training, it was Karim's preparation they mentioned first.'", en: "'The reason he stayed till ten was that the demo had to be perfect. A week later, when the client praised the training, it was Karim's preparation they mentioned first.'", hi: "'The reason he stayed till ten was that the demo had to be perfect. A week later, when the client praised the training, it was Karim's preparation they mentioned first.'" },
            { bn: "পাঁচ ধরনের cleft, পাঁচ জায়গায় — সংশোধন, বিস্ময়, বিনয়, শিক্ষা, কারণ।", en: "Five cleft types in five places — correction, wonder, modesty, lesson, reason.", hi: "पाँच प्रकार के cleft, पाँच जगहों पर — संशोधन, आश्चर्य, विनम्रता, सीख, कारण।" },
            { bn: "**এক নজরে** — it-cleft = 'ই'-কারের ইংরেজি: ফোকাস আগে, who/that + বাকি; wh-cleft = ফোকাস শেষে, what-clause আগে।", en: "**At a glance** — it-cleft = English for the '-ই' particle: focus first, who/that + rest; wh-cleft = focus at the end, what-clause first.", hi: "**एक नज़र में** — it-cleft = 'ही' कण की अंग्रेज़ी: फ़ोकस पहले, who/that + बाकी; wh-cleft = फ़ोकस अंत में, what-clause पहले।" },
            { bn: "reversed wh-cleft = ফোকাস শিরোনামের মতো সামনে; all-cleft = 'শুধু এটুকুই'; the reason... is that... = কারণ-জোর।", en: "reversed wh-cleft = focus pulled front like a headline; all-cleft = 'nothing but this'; the reason... is that... = reason emphasis.", hi: "reversed wh-cleft = फ़ोकस सुर्ख़ी की तरह सामने; all-cleft = 'बस इतना ही'; the reason... is that... = कारण-ज़ोर।" },
            { bn: "এক অনুচ্ছেদে এক-দুটোই; tense ও verb-অমিল পরীক্ষা করুন; অনুশীলন: আজকের এক ঘটনা তিন ভাবে বলুন — it-cleft, wh-cleft, all-cleft — ফোকাস বদলায় দেখুন।", en: "One or two clefts per paragraph at most; always check tense and verb agreement; practice: retell one incident of today three ways — it-cleft, wh-cleft, all-cleft — and watch the focus move.", hi: "हर अनुच्छेद में अधिकतम एक-दो; tense और verb-असंगति जाँचें; अभ्यास: आज की एक घटना तीन तरह से कहें — it-cleft, wh-cleft, all-cleft — फ़ोकस कैसे खिसकता है देखें।" },
          ],
          examples: [
            { wrong: "What surprised us was how calmly he handled the crisis, was it not?", right: "What surprised us was how calmly he handled the crisis.", note: { bn: "wh-cleft-এর পরে tag-question জুড়তে হয় না — গড়নটাই সম্পূর্ণ; tag চাইলে সাধারণ বাক্যে যান।", en: "A wh-cleft needs no tag-question — the frame is complete; if you want a tag, move to a plain sentence.", hi: "wh-cleft के बाद tag-question नहीं जोड़ते — ढाँचा पूरा है; tag चाहिए तो सादे वाक्य पर आएँ।" } },
            { wrong: "All he did was restarting the projector.", right: "All he did was restart the projector.", note: { bn: "All + did-cleft-এর পরে bare infinitive (restart) — restarting নয়; did-এর ছায়ায় verb নগ্ন রূপে ফেরে।", en: "After an All + did cleft comes the bare infinitive (restart) — not restarting; in the shadow of did the verb returns naked.", hi: "All + did cleft के बाद bare infinitive (restart) — restarting नहीं; did की छाया में verb नंगे रूप में लौटता है।" } },
            { wrong: "It was Karim's preparation what they mentioned first.", right: "It was Karim's preparation that they mentioned first.", note: { bn: "it-cleft-এর দ্বিতীয় ভাগে that (বা who) — what শুধু wh-cleft-এর মাথায়; দুই পরিবারের শব্দ অদল-বদল হয় না।", en: "The second half of an it-cleft takes that (or who) — what belongs only at the head of a wh-cleft; the two families do not swap words.", hi: "it-cleft का दूसरा हिस्सा that (या who) लेता है — what केवल wh-cleft के सिर पर; दो परिवार के शब्द आपस में नहीं बदलते।" } },
            { wrong: "The reason he stayed till ten was that the demo had to be perfect, and the reason also was his pride.", right: "The reason he stayed till ten was that the demo had to be perfect. Pride, of course, played its part too.", note: { bn: "দুটো reason-cleft এক সারিতে নয় — প্রথমটা cleft, দ্বিতীয়টা সাধারণ বাক্যে; reason-cleft একবারেই শক্তিশালী।", en: "Two reason-clefts do not share one line — the first stays a cleft, the second drops to a plain sentence; one reason-cleft is strong enough.", hi: "दो reason-cleft एक पंक्ति में नहीं — पहला cleft रहता है, दूसरा सादे वाक्य में उतर जाता है; एक reason-cleft पर्याप्त है।" } },
          ],
        },
      ],
      tips: [
        { bn: "ইংরেজি বাক্যটা মনে মনে বাংলায় বলুন — 'ই'-কার কোথায় বসে, সেখানেই cleft-এর ফোকাস।", en: "Say the English sentence to yourself in Bengali — wherever the '-ই' particle falls, that is the focus of your cleft.", hi: "अंग्रेज़ी वाक्य मन में हिंदी/बांग्ला में बोलें — 'ही' कण जहाँ बैठे, वही cleft का फ़ोकस है।" },
        { bn: "it-cleft = It + be + ফোকাস + who/that + বাকি; wh-cleft = What + বাকি + is + ফোকাস — দুই সূত্র মুখস্থ রাখুন।", en: "it-cleft = It + be + focus + who/that + rest; wh-cleft = What + rest + is + focus — memorise both formulas.", hi: "it-cleft = It + be + फ़ोकस + who/that + बाकी; wh-cleft = What + बाकी + is + फ़ोकस — दोनों सूत्र याद रखें।" },
        { bn: "মানুষ → who, জিনিস/ঘটনা → that (formal লেখায় which); who/that-এর পরে verb-এর কর্তা ফোকাস, তাই অমিল যাবে না।", en: "People → who; things/events → that (which in formal writing); the verb after who/that agrees with the focus — no mismatch allowed.", hi: "व्यक्ति → who; वस्तु/घटना → that (औपचारिक लेखन में which); who/that के बाद की verb फ़ोकस से मिले — असंगति नहीं।" },
        { bn: "বিগত ঘটনার cleft-এ It was; স্থায়ী সত্যে It is — সময় মেলানো ভুলে যাবেন না।", en: "Finished events take It was; standing truths take It is — never forget to match the time.", hi: "बीती घटना पर It was; स्थायी सत्य पर It is — समय मिलाना न भूलें।" },
        { bn: "What-clause একবচন verb নেয় — What I need IS time; পরীক্ষায় একবচনই নিরাপদ।", en: "A what-clause takes a singular verb — What I need IS time; in exams the singular is the safe bet.", hi: "what-clause एकवचन verb लेता है — What I need IS time; परीक्षा में एकवचन ही सुरक्षित।" },
        { bn: "All + did-cleft-এর পরে bare infinitive — All she did was smile; to বা -ing নয়।", en: "After an All + did cleft use the bare infinitive — All she did was smile; no to, no -ing.", hi: "All + did cleft के बाद bare infinitive — All she did was smile; न to, न -ing।" },
        { bn: "বাংলা 'সেটা হলো' ছায়ায় resumptive it/that আসবে — What I need, that is time ✗; what-clause শেষ হলে সরাসরি is।", en: "Under the Bengali 'সেটা হলো' shadow a resumptive it/that will creep in — What I need, that is time is wrong; after the what-clause, is follows directly.", hi: "बांग्ला/हिंदी 'वह है' की छाया में resumptive it/that घुसेगा — What I need, that is time ग़लत; what-clause के बाद सीधे is।" },
        { bn: "এক অনুচ্ছেদে এক-দুটো cleft-ই যথেষ্ট — সব জোর দিলে কিছুই জোরদার থাকে না।", en: "One or two clefts per paragraph are enough — when everything is emphasised, nothing is.", hi: "हर अनुच्छेद में एक-दो cleft ही काफ़ी — सब पर ज़ोर हो तो कुछ भी ज़ोरदार नहीं।" },
        { bn: "রচনার উপসংহারে একটা wh-cleft বসান — What this shows is... — পরীক্ষকের চোখে স্তর উঁচিয়ে দেয়।", en: "Plant one wh-cleft in your essay's conclusion — What this shows is... — it visibly lifts the level in an examiner's eyes.", hi: "निबंध के निष्कर्ष में एक wh-cleft रखें — What this shows is... — परीक्षक की नज़र में स्तर ऊँचा दिखता है।" },
      ],
      quiz: [
        { question: "______ was Karim who solved the puzzle.", options: ["That", "It", "This", "What"], answer: 1, explanation: { bn: "it-cleft-এর সূত্র It + be + ফোকাস + who + বাকি — It was Karim who solved the puzzle।", en: "The it-cleft formula is It + be + focus + who + rest — It was Karim who solved the puzzle.", hi: "it-cleft सूत्र है It + be + फ़ोकस + who + बाकी — It was Karim who solved the puzzle।" } },
        { question: "What I need right now ______ a long holiday.", options: ["are", "were", "is", "be"], answer: 2, explanation: { bn: "what-clause একবচন verb নেয় — What I need IS a long holiday; পরীক্ষার নিরাপদ নিয়ম।", en: "A what-clause takes a singular verb — What I need IS a long holiday; the safe exam rule.", hi: "what-clause एकवचन verb लेता है — What I need IS a long holiday; परीक्षा का सुरक्षित नियम।" } },
        { question: "It was the noise ______ woke the baby.", options: ["who", "what", "that", "which of"], answer: 2, explanation: { bn: "ফোকাস জিনিস (the noise) — that; who মানুষের জন্য, what wh-cleft-এর মাথায়।", en: "The focus is a thing (the noise) — that; who is for people, what heads only wh-clefts.", hi: "फ़ोकस वस्तु (the noise) है — that; who व्यक्तियों के लिए, what केवल wh-cleft के सिर पर।" } },
        { question: "______ I want is a little peace and quiet.", options: ["Everything what", "All", "That all", "Which"], answer: 1, explanation: { bn: "all-cleft: All (that) I want is... — all-এর পরে what আসে না।", en: "The all-cleft: All (that) I want is... — what never follows all.", hi: "all-cleft: All (that) I want is... — all के बाद what नहीं आता।" } },
        { question: "The reason ______ I called is that the server is down.", options: ["because", "why", "that why", "for"], answer: 1, explanation: { bn: "The reason why I called is that... — reason-এর পরে why-clause, আর be-verb-এর পরে that-clause (because নয়)।", en: "The reason why I called is that... — a why-clause after reason, and a that-clause after the be-verb (not because).", hi: "The reason why I called is that... — reason के बाद why-clause, और be-verb के बाद that-clause (because नहीं)।" } },
        { question: "Which sentence best corrects someone who thinks Rahim gave the gift?", options: ["Rahim she gave the gift.", "It was Mina who gave the gift.", "It was Mina which gave the gift.", "What Mina gave was the gift."], answer: 1, explanation: { bn: "ব্যক্তিকে শোধরাতে it-cleft + who: It was Mina who gave the gift; তৃতীয়টায় which ভুল, চতুর্থটা ফোকাস জিনিসে সরিয়ে দেয়।", en: "To correct a person, use the it-cleft with who: It was Mina who gave the gift; the third takes wrong which, the fourth shifts focus to the thing.", hi: "व्यक्ति शोधरने के लिए it-cleft + who: It was Mina who gave the gift; तीसरे में which ग़लत, चौथा फ़ोकस वस्तु पर खिसका देता है।" } },
        { question: "Which cleft shifts the focus to the OBJECT of the sentence 'Rahim gave me a pen yesterday'?", options: ["It was Rahim who gave me a pen.", "What Rahim gave me was a pen.", "It was yesterday that Rahim gave me a pen.", "Rahim did give me a pen."], answer: 1, explanation: { bn: "wh-cleft-এ ফোকাস শেষে — What Rahim gave me was A PEN; সংলাপের বাকিটা ছায়ায়।", en: "In a wh-cleft the focus sits at the end — What Rahim gave me was A PEN; the rest of the sentence fades.", hi: "wh-cleft में फ़ोकस अंत में — What Rahim gave me was A PEN; बाकी वाक्य छाया में।" } },
        { question: "What surprises me ______ his endless patience.", options: ["are", "were", "is", "have been"], answer: 2, explanation: { bn: "পুরো what-clause একক কর্তা — একবচন is; এছাড়া ভেতরের verb-ও একবচন: What surprises me।", en: "The whole what-clause is one subject — singular is; the verb inside is singular too: What surprises me.", hi: "पूरा what-clause एक ही subject है — एकवचन is; भीतर की verb भी एकवचन: What surprises me।" } },
        { question: "All she did was ______ the address on a sticky note.", options: ["writing", "to writing", "write", "wrote"], answer: 2, explanation: { bn: "All + did-cleft-এর পরে bare infinitive — was write; to ঐচ্ছিক, -ing ভুল।", en: "After an All + did cleft comes the bare infinitive — was write; to is optional, -ing is wrong.", hi: "All + did cleft के बाद bare infinitive — was write; to वैकल्पिक, -ing ग़लत।" } },
        { question: "Why is 'What I need, that is time' considered wrong in written English?", options: ["what-clauses never need a be-verb", "English clefts take no resumptive pronoun after the what-clause", "that is never used in clefts", "the comma is unnecessary"], answer: 1, explanation: { bn: "বাংলা 'সেটা হলো'-র ছায়ায় that/it পুনরাবৃত্তি — ইংরেজি cleft-এ what-clause শেষ হলে সরাসরি is: What I need is time।", en: "The Bengali 'সেটা হলো' shadow adds a resumptive that/it — English clefts go straight to is: What I need is time.", hi: "बांग्ला 'वह है' की छाया that/it दोहराती है — अंग्रेज़ी cleft में सीधे is: What I need is time।" } },
      ],
    },
  },
];

export default SEED_GRAMMAR_V4_A1B;
