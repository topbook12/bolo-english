// ─── Grammar seeds v4: ADVANCED batch A2c (1 lesson) ───
// Task 10-C15 — point-form roadmap upgrade. Source: grammar-v3-a2c.ts →
// "Advanced Reported Speech" (advanced). The 12-row backshift (modal) table
// and the 5-row reporting-verb family table (reporting verb | pattern |
// example) are built out; every reporting-verb family and every speech act
// (statements, questions, commands/requests, suggestions) gets its OWN
// section. title/intro/tips/quiz/examples copied UNCHANGED from the v3
// source; bodies became lead + points (+ formula/table); body omitted.
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_A2C: SeedGrammarV4Entry[] = [
  /* ── 1. Advanced Reported Speech ─────────────────────────────────────── */
  {
    topic: "Advanced Reported Speech",
    level: "advanced",
    title: "Advanced Reported Speech",
    unit: 0,
    sortOrder: 9,
    data: {
      title: {
        bn: "অ্যাডভান্সড রিপোর্টেড স্পিচ: backshift, রিপোর্টিং verb ও প্রশ্ন-আদেশ",
        en: "Advanced Reported Speech: backshift, reporting verbs, questions and commands",
        hi: "एडवांस्ड रिपोर्टेड स्पीच: backshift, रिपोर्टिंग verbs और प्रश्न-आदेश",
      },
      intro: {
        bn: "Learning Path-এর advanced স্তরের এটি Unit 0 পাঠ — Reported Speech-এর গভীর সফর। শুরু করার আগে intermediate স্তরের Reported Speech ও Past Perfect পাঠগুলো শেষ করে নিন — এই পাঠ ঠিক সেগুলোর উপরেই দাঁড়িয়ে আছে। অফিসে মিটিং-এর হিসাব, সংবাদ পড়া, ইন্টারভিউ-সংলাপ লেখা, এমনকি গসিপ করা — প্রতিটা জায়গায় আমরা অন্যের কথা হুবহু উদ্ধৃত না করে রিপোর্ট করি: 'স্যার বললেন রিপোর্টটা কাল লাগবে'। ইংরেজিতে এই কাজটা তিনটা হাতিয়ারে হয়: tense-এর এক ধাপ পিছোনো (backshift), রিপোর্টিং verb-এর সূক্ষ্ম প্যাটার্ন (admit doing, promise to do, suggest that...), আর প্রশ্ন-আদেশের বাক্য-গড়ন সোজা করে ফেলা। বাংলায় কোনো backshift নেই — 'সে বলল সে আসবে' বাক্যেই ভবিষ্যৎ থেকে যায়, তাই বাঙালি শিক্ষার্থীরা বারবার 'He said he will come' লিখে ফেলেন। এই পাঠে backshift-ও তার ব্যতিক্রমগুলো, রিপোর্টিং verb-এর পরিবার, reported question ও command, আর time/place শব্দের সরে-যাওয়া — সব একসঙ্গে গুছিয়ে শিখব।",
        en: "This is a Unit 0 lesson of the advanced track — a deep tour of Reported Speech. Before starting, finish the intermediate lessons on Reported Speech and the Past Perfect; this lesson stands directly on them. Summing up meetings, reading news reports, writing interview transcripts, even gossiping — everywhere we relay other people's words without quoting them: 'Sir said the report would be needed tomorrow'. English does this with three tools: stepping the tense back (backshift), delicate reporting-verb patterns (admit doing, promise to do, suggest that...), and straightening out the word order of questions and commands. Bengali has no backshift — 'সে বলল সে আসবে' keeps its future form — so Bengali-speaking learners keep writing 'He said he will come'. In this lesson we organise the whole system: backshift and its exceptions, the reporting-verb families, reported questions and commands, and the shifts of time and place words.",
        hi: "यह advanced ट्रैक का Unit 0 पाठ है — Reported Speech की गहरी यात्रा। शुरू करने से पहले intermediate स्तर के Reported Speech और Past Perfect पाठ पूरे करें; यह पाठ ठीक उन्हीं पर खड़ा है। मीटिंग का हिसाब, समाचार पढ़ना, इंटरव्यू-संवाद लिखना, यहाँ तक कि गप्पें — हर जगह हम किसी के कहे को सीधे उद्धृत किए बिना रिपोर्ट करते हैं: 'सर ने कहा रिपोर्ट कल चाहिए'। अंग्रेज़ी यह काम तीन उपकरणों से करती है: tense एक क़दम पीछे खिसकाना (backshift), रिपोर्टिंग verbs के बारीक पैटर्न (admit doing, promise to do, suggest that...), और प्रश्न-आदेश की वाक्य-रचना सीधी कर देना। हिंदी में backshift नहीं होता — 'उसने कहा वह आएगा' में भविष्यत् बना रहता है — इसलिए शिक्षार्थी बार-बार 'He said he will come' लिख देते हैं। इस पाठ में backshift और उसके अपवाद, रिपोर्टिंग verb परिवार, reported question और command, तथा time/place शब्दों के खिसकने का पूरा ढाँचा सीखेंगे।",
      },
      roadmap: [
        { bn: "🗣️ কখন অন্যের কথা হুবহু না বলে রিপোর্ট করা হয়", en: "🗣️ When we report words without quoting them", hi: "🗣️ कब दूसरे के कहे बिना उद्धृत किए रिपोर्ट होते हैं" },
        { bn: "🧭 দুই ভিত্তি-নিয়ম: backshift-প্রিভিউ আর say/tell ভাগ", en: "🧭 Two foundations: backshift preview and the say/tell split", hi: "🧭 दो आधार-नियम: backshift झलक और say/tell फ़र्क़" },
        { bn: "🔁 Backshift-এর পূর্ণ টেবিল: ১২টা রূপান্তর এক নজরে", en: "🔁 The full backshift table: twelve transformations at a glance", hi: "🔁 पूरी backshift तालिका: बारह रूपांतर एक नज़र में" },
        { bn: "🚦 আভাস চেনা: প্রশ্ন, আদেশ, বিবৃতি — তিন রাস্তা", en: "🚦 Reading the signals: question, command, statement — three roads", hi: "🚦 संकेत पढ़ना: प्रश्न, आदेश, कथन — तीन रास्ते" },
        { bn: "🧊 Backshift-এর ৩টা বড় ব্যতিক্রম", en: "🧊 Three big exceptions to the backshift", hi: "🧊 Backshift के 3 बड़े अपवाद" },
        { bn: "🗺️ রিপোর্টিং verb-এর ৫ পরিবারের ম্যাপ", en: "🗺️ A map of the five reporting-verb families", hi: "🗺️ रिपोर्टिंग verb के 5 परिवारों का नक्शा" },
        { bn: "🎭 -ing পরিবার: admit, deny, mention, apologise", en: "🎭 The -ing family: admit, deny, mention, apologise", hi: "🎭 -ing परिवार: admit, deny, mention, apologise" },
        { bn: "🎯 to-infinitive পরিবার: promise, agree, refuse, offer", en: "🎯 The to-infinitive family: promise, agree, refuse, offer", hi: "🎯 to-infinitive परिवार: promise, agree, refuse, offer" },
        { bn: "💡 suggest-এর আলাদা নিয়ম: object + to অসম্ভব", en: "💡 suggest's own rule: object + to is impossible", hi: "💡 suggest का अलग नियम: object + to असंभव" },
        { bn: "👥 ব্যক্তি + to পরিবার: advise, remind, warn, tell, ask", en: "👥 The person + to family: advise, remind, warn, tell, ask", hi: "👥 व्यक्ति + to परिवार: advise, remind, warn, tell, ask" },
        { bn: "❓ Reported question: প্রশ্ন রিপোর্টের তিন ধাপ", en: "❓ Reported questions: three steps to report a question", hi: "❓ Reported question: प्रश्न रिपोर्ट करने के तीन चरण" },
        { bn: "📢 আদেশ-অনুরোধ-নিষেধ রিপোর্ট করার প্যাটার্ন", en: "📢 Reporting commands, requests and prohibitions", hi: "📢 आदेश-अनुरोध-निषेध रिपोर्ट करने का पैटर्न" },
        { bn: "🕰️ সময়-জায়গার শব্দের ১২ জোড়া সরে-যাওয়া", en: "🕰️ Twelve shifting pairs of time and place words", hi: "🕰️ समय-स्थान शब्दों के 12 खिसकने वाले जोड़े" },
        { bn: "⚠️ Advanced শিক্ষার্থীদের ৫ দলের সূক্ষ্ম ভুল", en: "⚠️ Five groups of subtle advanced-learner errors", hi: "⚠️ एडवांस्ड शिक्षार्थियों के 5 समूहों की सूक्ष्म गलतियाँ" },
        { bn: "📖 সংবাদ-অনুচ্ছেদে সব প্যাটার্ন একসঙ্গে", en: "📖 Every pattern at work in one news paragraph", hi: "📖 एक समाचार-अनुच्छेद में सारे पैटर्न एक साथ" },
        { bn: "🧮 পুরো পাঠ ৭ সূত্রে + অনুশীলন", en: "🧮 The whole lesson in seven rules + practice", hi: "🧮 पूरा पाठ 7 सूत्रों में + अभ्यास" },
      ],
      sections: [
        /* ── 1. When to use reported speech ── */
        {
          heading: {
            bn: "🗣️ কখন রিপোর্টেড স্পিচ — অন্যের কথা হুবহু না বলে জানানো",
            en: "🗣️ When to use reported speech — relaying words without quoting them",
            hi: "🗣️ Reported speech कब — दूसरे के कहे बिना उद्धृत किए बताना",
          },
          lead: {
            bn: "সংবাদ, মিনিট, ফোনের বার্তা — দৈনন্দিন কথা-লেখার ৯০ শতাংশই অন্যের কথা রিপোর্ট করে।",
            en: "News, minutes, phone messages — ninety per cent of daily talk and writing reports other people's words.",
            hi: "समाचार, मिनट्स, फ़ोन-संदेश — रोज़मर्रा की बातचीत-लेखन का नब्बे प्रतिशत दूसरों के कहे की रिपोर्ट है।",
          },
          points: [
            { bn: "**রিপোর্টেড স্পিচ (indirect speech)** — হুবহু শব্দ নয়, বক্তার ভাবটা জানানোর হাতিয়ার।", en: "**Reported speech (indirect speech)** — the tool for passing on the message, not the exact words.", hi: "**Reported speech (indirect speech)** — शब्द-शः नहीं, बक्ता का भाव बताने का उपकरण।" },
            { bn: "সংবাদপত্রে 'the minister said that...', অফিসের মিনিটে 'the manager told us to...' — দুই জায়গাতেই রিপোর্টেড রূপ।", en: "News reports run 'the minister said that...', meeting minutes run 'the manager told us to...' — the reported form in both.", hi: "समाचार में 'the minister said that...', मीटिंग-मिनट्स में 'the manager told us to...' — दोनों जगह reported रूप।" },
            { bn: "ফোনের বার্তা 'he said he would call back', বন্ধুর সঙ্গে 'she told me she was tired' — রোজকার কথাবার্তাও একই ঘরে।", en: "Phone messages ('he said he would call back') and conversation ('she told me she was tired') live in the same house.", hi: "फ़ोन-संदेश 'he said he would call back', बातचीत में 'she told me she was tired' — ये भी उसी घर में।" },
            { bn: "সরাসরি উদ্ধৃতি (direct speech) নাটক ও সাংবাদিকতার পাঞ্জ — দৈনন্দিন কথা-লেখার ৯০ শতাংশ রিপোর্টেড রূপে চলে।", en: "Direct quotation is the gear of drama and journalism, yet ninety per cent of daily talk and writing runs on the reported form.", hi: "सीधा उद्धरण (direct speech) नाटक-पत्रकारिता की चीज़ — रोज़मर्रा की बातचीत-लेखन का नब्बे प्रतिशत reported रूप में चलता है।" },
          ],
          examples: [
            {
              wrong: "In the minutes: The director said, 'We are reviewing the policy.'",
              right: "In the minutes: The director said that the policy was being reviewed.",
              note: {
                bn: "মিনিট-রিপোর্টের লেখ্য-রীতিতে উদ্ধৃতি-চিহ্ন সরিয়ে reported form-ই প্রথাগত; tense-ও backshift হয় (are reviewing → was being reviewed)।",
                en: "Minutes and reports conventionally drop quotation marks for the reported form; the tense backshifts too (are reviewing → was being reviewed).",
                hi: "मिनट्स-रिपोर्ट की लेखन-शैली में उद्धरण-चिह्न हटाकर reported form ही रीति है; tense भी backshift होता है (are reviewing → was being reviewed)।",
              },
            },
            {
              wrong: "He said yesterday he will help me move the furniture.",
              right: "He said yesterday that he would help me move the furniture.",
              note: {
                bn: "রিপোর্টিং verb said (অতীত) → ভেতরের will-ও would-এ পিছোয়; অতীতে বলা প্রতিশ্রুতি অতীত-রূপেই রিপোর্ট হয়।",
                en: "The past reporting verb said pulls will back to would; a promise made in the past is reported in a past form.",
                hi: "अतीत रिपोर्टिंग verb said भीतर के will को would में खींचता है; अतीत में दिया वादा अतीत-रूप में ही रिपोर्ट होता है।",
              },
            },
            {
              wrong: "The receptionist said that Mr Rahman will see you now.",
              right: "The receptionist said that Mr Rahman would see me then.",
              note: {
                bn: "will → would-এর সঙ্গে now-ও then-এ সরে; রিপোর্ট করার মুহূর্তে 'এখন' আর বক্তার 'এখন' এক জায়গা নয়।",
                en: "Along with will → would, now slides to then; 'now' at reporting time and the speaker's 'now' are not the same moment.",
                hi: "will → would के साथ now भी then में खिसकता है; रिपोर्ट के समय का 'अभी' और बोलने वाले का 'अभी' एक क्षण नहीं।",
              },
            },
          ],
        },
        /* ── 2. Two foundation rules ── */
        {
          heading: {
            bn: "🧭 দুই ভিত্তি-নিয়ম — backshift-প্রিভিউ আর say/tell ভাগ",
            en: "🧭 Two foundation rules — backshift preview and the say/tell split",
            hi: "🧭 दो आधार-नियम — backshift झलक और say/tell फ़र्क़",
          },
          lead: {
            bn: "গোটা পাঠ দাঁড়িয়ে আছে দুটো ভিত্তির উপর — backshift-এর প্রিভিউ আর say/tell-এর ভাগ।",
            en: "The whole lesson stands on two foundations — a preview of the backshift and the say/tell split.",
            hi: "पूरा पाठ दो नींव पर खड़ा है — backshift की झलक और say/tell का फ़र्क़।",
          },
          formula: {
            bn: "told + ব্যক্তি ✓ · said to + ব্যক্তি ✓ · said + ব্যক্তি ✗",
            en: "tell + person ✓ · said to + person ✓ · said + person ✗",
            hi: "tell + व्यक्ति ✓ · said to + व्यक्ति ✓ · said + व्यक्ति ✗",
          },
          points: [
            { bn: "**নিয়ম এক — backshift** — রিপোর্টিং verb অতীত (said, told, asked) হলে ভেতরের clause-এর tense সাধারণত এক ধাপ পিছিয়ে যায়।", en: "**Rule one — backshift** — when the reporting verb is past (said, told, asked), the tense inside usually steps one back.", hi: "**नियम एक — backshift** — रिपोर्टिंग verb अतीत (said, told, asked) हो तो भीतरी clause का tense साधारणतः एक क़दम पीछे जाता है।" },
            { bn: "**নিয়ম দুই — say/tell ভাগ** — say-এর সঙ্গে শোনার ব্যক্তি লাগলে to লাগে: said to me।", en: "**Rule two — the say/tell split** — say takes 'to' before the listener: said to me.", hi: "**नियम दो — say/tell फ़र्क़** — say के साथ सुनने वाले से पहले to आता है: said to me।" },
            { bn: "**tell সরাসরি ব্যক্তি নেয়** — told me; 'He said me' বাক্য ইংরেজিতে নেই।", en: "**tell takes the person directly** — told me; 'He said me' is not English.", hi: "**tell सीधे व्यक्ति लेता है** — told me; 'He said me' अंग्रेज़ी में नहीं है।" },
            { bn: "বাংলা 'বললাম তাকে' রূপটাই এই ভুলের মূল — বাংলায় ক্রিয়া একটাই, ইংরেজিতে দুই ক্রিয়ার ভূমিকা ভাগ হয়ে যায়।", en: "The Bengali 'বললাম তাকে' shape is the root of this error — Bengali has one verb where English splits the job between two.", hi: "हिंदी 'मैंने उसे बताया' रूप इस गलती की जड़ — हिंदी में एक क्रिया, अंग्रेज़ी में काम दो क्रियाओं में बँटता है।" },
          ],
          examples: [
            {
              wrong: "He said me that he was busy with the audit.",
              right: "He told me that he was busy with the audit.",
              note: {
                bn: "say-এর পরে সরাসরি ব্যক্তি আসে না — told me; বাংলা 'বলল আমাকে' রূপটাই 'said me' বানিয়ে ফেলে।",
                en: "say never takes the person directly — told me; the Bengali 'বলল আমাকে' shape manufactures 'said me'.",
                hi: "say के बाद सीधे व्यक्ति नहीं आता — told me; हिंदी 'उसे बोला' रूप ही 'said me' बना देता है।",
              },
            },
            {
              wrong: "My colleague told, 'The client is angry.'",
              right: "My colleague said, 'The client is angry.'",
              note: {
                bn: "উদ্ধৃতির আগে ব্যক্তি ছাড়া tell চলে না — say, '...' বা told me, '...'; tell-এর ব্যক্তি তালিকাভুক্ত হলে বাক্য ভেঙে পড়ে।",
                en: "Without a person, tell cannot introduce a quote — say, '...' or told me, '...'; a person-less tell collapses the sentence.",
                hi: "व्यक्ति के बिना tell उद्धरण नहीं खोल सकता — say, '...' या told me, '...'; बिना व्यक्ति के tell वाक्य तोड़ देता है।",
              },
            },
          ],
        },
        /* ── 3. The backshift table ── */
        {
          heading: {
            bn: "🔁 Backshift-এর প্রসার-টেবিল — ১২টা রূপান্তর এক নজরে",
            en: "🔁 The backshift table — twelve transformations at a glance",
            hi: "🔁 Backshift की तालिका — बारह रूपांतर एक नज़र में",
          },
          lead: {
            bn: "রিপোর্টিং verb অতীত হলেই tense এক ধাপ পিছোয় — বারোটা রূপান্তরের পূর্ণ ম্যাপ এখানে।",
            en: "A past reporting verb pulls the tense one step back — here is the full map of twelve transformations.",
            hi: "अतीत रिपोर्टिंग verb tense को एक क़दम पीछे खींचता है — बारह रूपांतरों का पूरा नक्शा यहाँ।",
          },
          formula: {
            bn: "রিপোর্টিং verb অতীত (said/told/asked) + (that) + clause — ভেতরের tense এক ধাপ পিছানো",
            en: "past reporting verb (said/told/asked) + (that) + clause — inner tense one step back",
            hi: "अतीत रिपोर्टिंग verb (said/told/asked) + (that) + clause — भीतरी tense एक क़दम पीछे",
          },
          table: {
            head: [
              { bn: "সরাসরি বাক্যে", en: "Direct", hi: "सीधे वाक्य में" },
              { bn: "রিপোর্টে", en: "Reported", hi: "रिपोर्ट में" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [{ bn: "am / is", en: "am / is", hi: "am / is" }, { bn: "was", en: "was", hi: "was" }, { bn: "'I am ready' → He said he was ready", en: "'I am ready' → He said he was ready", hi: "'I am ready' → He said he was ready" }],
              [{ bn: "are", en: "are", hi: "are" }, { bn: "were", en: "were", hi: "were" }, { bn: "'They are outside' → She said they were outside", en: "'They are outside' → She said they were outside", hi: "'They are outside' → She said they were outside" }],
              [{ bn: "present simple", en: "present simple", hi: "present simple" }, { bn: "past simple", en: "past simple", hi: "past simple" }, { bn: "'I work here' → He said he worked there", en: "'I work here' → He said he worked there", hi: "'I work here' → He said he worked there" }],
              [{ bn: "present continuous", en: "present continuous", hi: "present continuous" }, { bn: "past continuous", en: "past continuous", hi: "past continuous" }, { bn: "'We are watching the match' → They said they were watching the match", en: "'We are watching the match' → They said they were watching the match", hi: "'We are watching the match' → They said they were watching the match" }],
              [{ bn: "present perfect", en: "present perfect", hi: "present perfect" }, { bn: "past perfect", en: "past perfect", hi: "past perfect" }, { bn: "'I have lost the file' → She said she had lost the file", en: "'I have lost the file' → She said she had lost the file", hi: "'I have lost the file' → She said she had lost the file" }],
              [{ bn: "past simple", en: "past simple", hi: "past simple" }, { bn: "past perfect", en: "past perfect", hi: "past perfect" }, { bn: "'I saw him at the office' → She said she had seen him at the office", en: "'I saw him at the office' → She said she had seen him at the office", hi: "'I saw him at the office' → She said she had seen him at the office" }],
              [{ bn: "will", en: "will", hi: "will" }, { bn: "would", en: "would", hi: "would" }, { bn: "'I will call' → He said he would call", en: "'I will call' → He said he would call", hi: "'I will call' → He said he would call" }],
              [{ bn: "can", en: "can", hi: "can" }, { bn: "could", en: "could", hi: "could" }, { bn: "'I can drive' → She said she could drive", en: "'I can drive' → She said she could drive", hi: "'I can drive' → She said she could drive" }],
              [{ bn: "may", en: "may", hi: "may" }, { bn: "might", en: "might", hi: "might" }, { bn: "'I may be late' → He said he might be late", en: "'I may be late' → He said he might be late", hi: "'I may be late' → He said he might be late" }],
              [{ bn: "must", en: "must", hi: "must" }, { bn: "had to", en: "had to", hi: "had to" }, { bn: "'I must finish the audit' → He said he had to finish the audit", en: "'I must finish the audit' → He said he had to finish the audit", hi: "'I must finish the audit' → He said he had to finish the audit" }],
              [{ bn: "shall", en: "shall", hi: "shall" }, { bn: "should", en: "should", hi: "should" }, { bn: "'I shall return' → He said he should return", en: "'I shall return' → He said he should return", hi: "'I shall return' → He said he should return" }],
              [{ bn: "have to", en: "have to", hi: "have to" }, { bn: "had to", en: "had to", hi: "had to" }, { bn: "'We have to leave' → They said they had to leave", en: "'We have to leave' → They said they had to leave", hi: "'We have to leave' → They said they had to leave" }],
            ],
          },
          points: [
            { bn: "টেবিলের প্রতিটা সারি একই নিয়মের নমুনা — ভেতরের tense ঠিক এক ধাপ পিছিয়ে যায়।", en: "Every row of the table is the same rule at work — the inner tense steps back exactly one step.", hi: "तालिका की हर पंक्ति एक ही नियम का नमूना — भीतरी tense ठीक एक क़दम पीछे जाता है।" },
            { bn: "**Pronoun-ও সরে** — I → he/she, my → his/her; প্রসঙ্গ অনুযায়ী সঙ্গে-সঙ্গে বদলায়।", en: "**Pronouns travel too** — I → he/she, my → his/her; they change with the context.", hi: "**Pronoun भी खिसकते हैं** — I → he/she, my → his/her; संदर्भ के साथ बदलते हैं।" },
            { bn: "that-clause কথ্য ভাষায় প্রায়ই বাদ যায় — He said (that) he was ready।", en: "The that-clause often drops in speech — He said (that) he was ready.", hi: "that-clause बोलचाल में अक्सर गिर जाता है — He said (that) he was ready।" },
            { bn: "backshift মানে সময় বদলানো নয় — বক্তার মুহূর্ত আর আমাদের রিপোর্টের মুহূর্তের দূরত্বই tense-এ গায়ে ধরে।", en: "Backshift does not change time itself — it dresses the distance between the speaker's moment and our reporting moment in tense.", hi: "backshift समय नहीं बदलता — बोलने के क्षण और रिपोर्ट करने के क्षण की दूरी ही tense में उतरती है।" },
            { bn: "ব্যতিক্রমগুলো পরের পর্বে আসছে — আগে বারো সারির টেবিলটা হাতের মুঠোয় আনুন।", en: "The exceptions arrive in the next part — first get the twelve-row table into your pocket.", hi: "अपवाद अगले भाग में आ रहे हैं — पहले बारह-पंक्ति की तालिका मुट्ठी में बाँध लें।" },
          ],
          examples: [
            {
              wrong: "She said she is writing the proposal.",
              right: "She said she was writing the proposal.",
              note: {
                bn: "present continuous → past continuous; রিপোর্টিং said অতীত, তাই ভেতরের রূপও এক ধাপ পিছোয়।",
                en: "present continuous → past continuous; the past reporting said drags the inner form one step back too.",
                hi: "present continuous → past continuous; अतीत said भीतर का रूप भी एक क़दम पीछे खींचता है।",
              },
            },
            {
              wrong: "He said he has lost the office keys.",
              right: "He said he had lost the office keys.",
              note: {
                bn: "present perfect → past perfect (have lost → had lost); 'হারিয়েছে' শুনে has থেকে যাওয়া বাংলাভাষীর চিরচেনা ফাঁদ।",
                en: "present perfect → past perfect (have lost → had lost); keeping has after 'হারিয়েছে' is a classic Bengali-speaker trap.",
                hi: "present perfect → past perfect (have lost → had lost); 'खो दिया है' सुनकर has छोड़ देना पुरानी चूक है।",
              },
            },
            {
              wrong: "The courier said the parcel will arrive by Monday.",
              right: "The courier said the parcel would arrive by Monday.",
              note: {
                bn: "will → would — ভবিষ্যৎ-অঙ্গীকারও অতীত রিপোর্টে would ধার করে; 'He said he will' কথ্য ভাষায় শোনা গেলেও লেখ্য ইংরেজিতে ভুল।",
                en: "will → would — even a future promise borrows would in a past report; 'He said he will' may pass in speech but is wrong in writing.",
                hi: "will → would — भविष्यत्-वादा भी अतीत रिपोर्ट में would लेता है; 'He said he will' बोलचाल में सुनाई दे भी सकता है पर लिखित अंग्रेज़ी में ग़लत।",
              },
            },
            {
              wrong: "She said she can finish the translation by Friday.",
              right: "She said she could finish the translation by Friday.",
              note: {
                bn: "can → could; রিপোর্টের সময় সক্ষমতাটা বক্তার মুখে অতীত ছিল, তাই could।",
                en: "can → could; at reporting time the ability claim lives in the speaker's past, so could.",
                hi: "can → could; रिपोर्ट के समय योग्यता का दावा बोलने वाले के अतीत में था, इसलिए could।",
              },
            },
            {
              wrong: "The auditor said he must see the vouchers that afternoon.",
              right: "The auditor said he had to see the vouchers that afternoon.",
              note: {
                bn: "must → had to; অতীতের বাধ্যবাধকতা must-এই থেকে যায় না — রিপোর্টে had to-ই প্রমিত রূপ।",
                en: "must → had to; a past obligation does not stay as must — had to is the standard reported form.",
                hi: "must → had to; अतीत की बाध्यता must रूप में नहीं रहती — रिपोर्ट में had to ही प्रमित रूप।",
              },
            },
          ],
        },
        /* ── 4. Signals ── */
        {
          heading: {
            bn: "🚦 আভাস ও প্যাটার্ন — কোন শব্দ কোন রূপান্তর ডাকে",
            en: "🚦 Signals — which words call which transformation",
            hi: "🚦 संकेत — कौन-सा शब्द कौन-सा रूपांतर बुलाता है",
          },
          lead: {
            bn: "বাক্যের যতিচিহ্ন আর শুরুর শব্দই বলে দেয় কোন রূপান্তর বসবে — সংকেত পড়তে শিখুন।",
            en: "The punctuation and the opening word decide the transformation — learn to read the signals.",
            hi: "विराम-चिह्न और पहला शब्द ही रूपांतर तय करते हैं — संकेत पढ़ना सीखें।",
          },
          formula: {
            bn: "প্রশ্ন → সোজা গড়ন + backshift · আদেশ → to-infinitive · বিবৃতি → that-clause",
            en: "question → straight order + backshift · command → to-infinitive · statement → that-clause",
            hi: "प्रश्न → सीधा क्रम + backshift · आदेश → to-infinitive · कथन → that-clause",
          },
          points: [
            { bn: "**রিপোর্টিং verb অতীত** (said, told, asked, warned, explained) → backshift চালু।", en: "**Past reporting verb** (said, told, asked, warned, explained) → backshift on.", hi: "**अतीत रिपोर्टिंग verb** (said, told, asked, warned, explained) → backshift चालू।" },
            { bn: "**বাক্যে প্রশ্ন** (? বা wh-word/auxiliary দিয়ে শুরু) → উল্টো গড়ন সোজা হয়, do/does/did মুছে যায়, প্রশ্নবোধক চিহ্ন উঠে যায়।", en: "**A question inside** (starting with a wh-word or an auxiliary) → the inverted order straightens, do/does/did vanish, the question mark disappears.", hi: "**भीतर प्रश्न** (? या wh-word/auxiliary से शुरू) → उलटी रचना सीधी, do/does/did मिटते हैं, प्रश्न-चिह्न गिरता है।" },
            { bn: "হ্যাঁ/না-প্রশ্ন হলে শুরুতে if/whether বসে।", en: "Yes/no questions open with if/whether.", hi: "हाँ/ना-प्रश्न हो तो शुरुआत if/whether से होती है।" },
            { bn: "**আদেশ-নিষেধ** → told/ordered + ব্যক্তি + to-infinitive; নিষেধে not to।", en: "**A command or prohibition** → told/ordered + person + to-infinitive; prohibitions take not to.", hi: "**आदेश-निषेध** → told/ordered + व्यक्ति + to-infinitive; निषेध में not to।" },
            { bn: "অনুরোধ হলে একই ঢঙে asked + ব্যক্তি + to-infinitive।", en: "Requests follow the same slope: asked + person + to-infinitive.", hi: "अनुरोध हो तो उसी ढंग से asked + व्यक्ति + to-infinitive।" },
            { bn: "**time/place শব্দ** দেখলে → সেগুলোও এক ধাপ দূরে সরে (now→then, here→there)।", en: "**Time and place words** → they shift one step away too (now→then, here→there).", hi: "**time/place शब्द** दिखें → वे भी एक क़दम दूर जाते हैं (now→then, here→there)।" },
            { bn: "**রিপোর্টিং verb-এর সঙ্গী-প্যাটার্ন** (admit, deny, suggest, promise, offer) → পরিবার অনুযায়ী -ing বা to-infinitive।", en: "**The reporting verb's own partner pattern** (admit, deny, suggest, promise, offer) → -ing or to-infinitive according to the verb's family.", hi: "**रिपोर्टिंग verb का संगी-पैटर्न** (admit, deny, suggest, promise, offer) → परिवार के अनुसार -ing या to-infinitive।" },
            { bn: "**সোনার পরীক্ষা** — সরাসরি বাক্যটা প্রশ্ন ছিল, আদেশ ছিল, নাকি বিবৃতি? যতিচিহ্ন আর শুরুর শব্দই রাস্তা বলে দেয়।", en: "**The golden test** — was the direct sentence a question, a command, or a statement? The punctuation and the opening word tell you the road.", hi: "**सुनहरा परीक्षण** — सीधा वाक्य प्रश्न था, आदेश था, या कथन? विराम-चिह्न और पहला शब्द रास्ता बताते हैं।" },
          ],
          examples: [
            {
              wrong: "She asked me where do I work.",
              right: "She asked me where I worked.",
              note: {
                bn: "reported question-এ বিবৃতির গড়ন: where + I worked; do মুছে যায়, প্রশ্নবোধক চিহ্নও — বাংলা 'কোথায় কাজ করো?' রূপের ছায়া এখানেই পড়ে।",
                en: "A reported question takes statement order: where + I worked; do and the question mark both vanish — the shadow of the Bengali direct question falls right here.",
                hi: "reported question में कथन-क्रम: where + I worked; do और प्रश्न-चिह्न दोनों मिटते हैं — हिंदी सीधे प्रश्न की छाया यहीं पड़ती है।",
              },
            },
            {
              wrong: "He asked me do I like filter coffee.",
              right: "He asked me if I liked filter coffee.",
              note: {
                bn: "হ্যাঁ/না-প্রশ্নে শুরু হয় if/whether দিয়ে, তারপর সোজা গড়ন; do/does/did-এর কোনো জায়গা নেই।",
                en: "Yes/no questions open with if/whether, then straight order; there is no room for do/does/did.",
                hi: "हाँ/ना-प्रश्न if/whether से खुलता है, फिर सीधा क्रम; do/does/did को कोई जगह नहीं।",
              },
            },
            {
              wrong: "The coach told to the players run faster.",
              right: "The coach told the players to run faster.",
              note: {
                bn: "আদেশের রিপোর্ট: told + ব্যক্তি + to-infinitive; to এবং ব্যক্তি — দুটোর কোনোটাই বাদ গেলে বাক্য ভেঙে পড়ে।",
                en: "Reporting a command: told + person + to-infinitive; drop either the person or to and the sentence collapses.",
                hi: "आदेश की रिपोर्ट: told + व्यक्ति + to-infinitive; व्यक्ति या to में से कोई एक गिरा तो वाक्य टूट जाता है।",
              },
            },
            {
              wrong: "He said he will meet me here tomorrow.",
              right: "He said he would meet me there the next day.",
              note: {
                bn: "একসঙ্গে তিন সরে-যাওয়া: will → would, here → there, tomorrow → the next day; বক্তার সময়-জায়গা থেকে রিপোর্টারের সময়-জায়গায় দূরত্বই এই শব্দগুলোর যাত্রা।",
                en: "Three shifts at once: will → would, here → there, tomorrow → the next day; these words travel the distance from the speaker's time-place to the reporter's.",
                hi: "एक साथ तीन खिसकन: will → would, here → there, tomorrow → the next day; ये शब्द बोलने वाले के समय-स्थान से रिपोर्टर के समय-स्थान तक की दूरी तय करते हैं।",
              },
            },
            {
              wrong: "She asked what is the price of the ticket.",
              right: "She asked what the price of the ticket was.",
              note: {
                bn: "wh-word থাকলেও গড়ন বিবৃতির মতো: what + the price ... was; is-ও অতীত হয়ে was হয়।",
                en: "Even with a wh-word the order is statement-like: what + the price ... was; is itself becomes was.",
                hi: "wh-word होते हुए भी क्रम कथन-सा: what + the price ... was; is खुद होकर was हो जाता है।",
              },
            },
          ],
        },
        /* ── 5. Exceptions to the backshift ── */
        {
          heading: {
            bn: "🧊 Backshift-এর ব্যতিক্রম — যখন tense পিছোয় না",
            en: "🧊 Exceptions to the backshift — when the tense stays",
            hi: "🧊 Backshift के अपवाद — जब tense नहीं खिसकता",
          },
          lead: {
            bn: "backshift যান্ত্রিক নিয়ম নয় — তিনটা বড় ব্যতিক্রম C1 পরীক্ষার প্রিয় প্রশ্ন।",
            en: "The backshift is not mechanical — three big exceptions are C1 exam favourites.",
            hi: "backshift यांत्रिक नियम नहीं — तीन बड़े अपवाद C1 परीक्षा के प्रिय प्रश्न।",
          },
          points: [
            { bn: "**চিরন্তন সত্য ও বৈজ্ঞানিক তথ্য** — The teacher said that water boils at 100 degrees; সত্যটা আজও সত্য, তাই present-ই থাকে।", en: "**Universal truths and scientific facts** — The teacher said that water boils at 100 degrees; the truth still holds, so the present stays.", hi: "**शाश्वत सत्य और वैज्ञानिक तथ्य** — The teacher said that water boils at 100 degrees; सत्य आज भी सत्य, इसलिए present ही रहता है।" },
            { bn: "পৃথিবী ঘোরে, ঢাকা বাংলাদেশের রাজধানী — এসব বিবৃতিতেও tense পিছোয় না।", en: "The earth revolves, Dhaka is the capital of Bangladesh — no tense shift in such statements either.", hi: "पृथ्वी घूमती है, ढाका बांग्लादेश की राजधानी — ऐसे कथनों में भी tense नहीं खिसकता।" },
            { bn: "**এখনও সত্যি অবস্থা** — She said she lives in Uttara বৈধ, যদি এখনও উত্তরাতেই থাকেন; She said she loves rabindra-sangeet — ভালোবাসাটা চলছে।", en: "**Conditions still holding** — She said she lives in Uttara is valid if she still lives there; She said she loves rabindra-sangeet — the love continues.", hi: "**अब भी सही स्थिति** — She said she lives in Uttara वैध है, अगर अब भी उत्तरा में रहते हैं; She said she loves rabindra-sangeet — प्रेम चालू है।" },
            { bn: "বক্তা ইচ্ছা করে বেছে নেন: তথ্যটা কি 'তখনকার দাবি', নাকি 'আজকের বাস্তবতা'?", en: "The speaker chooses deliberately: is the claim 'a claim of that moment' or 'today's reality'?", hi: "बोलने वाला जानबूझकर चुनता है: दावा 'उस क्षण का' था या 'आज की वास्तविकता' है?" },
            { bn: "**রিপোর্টিং verb বর্তমান** — He says he is tired; The anchor reports that the team is chasing 280।", en: "**Present reporting verb** — He says he is tired; The anchor reports that the team is chasing 280.", hi: "**रिपोर्टिंग verb वर्तमान** — He says he is tired; The anchor reports that the team is chasing 280।" },
            { bn: "লাইভ কমেন্ট্রি ও সদ্য-প্রাপ্ত সংবাদে says/reports/is reporting-এর সঙ্গে backshift হয় না।", en: "In live commentary and breaking news, says/reports/is reporting takes no backshift.", hi: "लाइव कमेंट्री और ताज़ा ख़बर में says/reports/is reporting के साथ backshift नहीं होता।" },
            { bn: "খুব তাৎক্ষণিক রিপোর্টে ('I am tired,' he said → He said he is tired) ব্রিটিশ কথ্য ইংরেজি backshift ছেড়ে দিতে পারে।", en: "In very immediate reports ('I am tired,' he said → He said he is tired) British casual speech may skip the backshift.", hi: "बहुत तात्कालिक रिपोर्ट में ('I am tired,' he said → He said he is tired) ब्रिटिश बोलचाल backshift छोड़ भी सकता है।" },
            { bn: "তবে লেখ্য-পরীক্ষায় নিরাপদ পথ ব্যাকশিফট। সিদ্ধান্তের প্রশ্ন একটাই: রিপোর্টের এই মুহূর্তে কথাটা কি এখনও সত্যি?", en: "Yet in written exams the safe road is the backshift. The deciding question is single: is the statement still true at the moment of reporting?", hi: "पर लिखित परीक्षा में सुरक्षित रास्ता backshift है। निर्णायक सवाल एक ही: रिपोर्ट के इस क्षण कथन अब भी सच है?" },
          ],
          examples: [
            {
              wrong: "The teacher said that water boiled at 100 degrees Celsius.",
              right: "The teacher said that water boils at 100 degrees Celsius.",
              note: {
                bn: "বৈজ্ঞানিক চিরন্তন সত্য — backshift নয়; সত্যটা রিপোর্টের মুহূর্তেও অটুট, তাই present simple থাকে।",
                en: "A universal scientific truth — no backshift; the fact still holds at reporting time, so the present simple stays.",
                hi: "वैज्ञानिक शाश्वत सत्य — backshift नहीं; तथ्य रिपोर्ट के क्षण भी अटल है, इसलिए present simple रहता है।",
              },
            },
            {
              wrong: "My uncle said that Dhaka was the capital of Bangladesh.",
              right: "My uncle said that Dhaka is the capital of Bangladesh.",
              note: {
                bn: "রাজধানী আজও ঢাকা — এখনও সত্যি তথ্যে backshift ঐচ্ছিক, বরং present-ই স্বাভাবিক; was লিখলে মনে হয় রাজধানী একসময় অন্যত্র ছিল।",
                en: "Dhaka is still the capital — for facts that still hold, skipping the backshift is natural; was would imply the capital once sat elsewhere.",
                hi: "राजधानी आज भी ढाका — अब भी सही तथ्य पर backshift छोड़ना स्वाभाविक; was लिखेंगे तो लगेगा कभी राजधानी और थी।",
              },
            },
            {
              wrong: "Rina said that she liked mangoes, so I bought her a crate — she still adores them.",
              right: "Rina said that she likes mangoes, so I bought her a crate — she still adores them.",
              note: {
                bn: "স্বাদটা এখনও চলছে (she still adores them) — still-true অবস্থায় present রাখা বৈধ ও অর্থবহ; liked লিখলে মনে হয় এখন আর পছন্দ নয়।",
                en: "The liking is still alive (she still adores them) — in still-true situations keeping the present is valid and meaningful; liked would suggest the taste has ended.",
                hi: "पसंद अब भी जीवित है (she still adores them) — still-true स्थिति में present रखना वैध और अर्थपूर्ण; liked कहने से लगेगा अब पसंद नहीं।",
              },
            },
            {
              wrong: "The commentator said that Bangladesh was chasing 280 with ten overs left.",
              right: "The commentator says that Bangladesh is chasing 280 with ten overs left.",
              note: {
                bn: "লাইভ কমেন্ট্রি বলছেই যে ঘটছে — রিপোর্টিং verb বর্তমান (says), তাই ভেতরেও present; সম্প্রচারের ভাষায় এটাই রীতি।",
                en: "Live commentary reports what is happening now — the reporting verb is present (says), so the inside stays present too; this is the broadcast convention.",
                hi: "लाइव कमेंट्री वही बता रही है जो अभी हो रहा है — रिपोर्टिंग verb वर्तमान (says), इसलिए भीतर भी present; प्रसारण-भाषा की यही रीति है।",
              },
            },
            {
              wrong: "She said the express train would leave at 7 every morning — and the timetable has not changed at all.",
              right: "She said the express train leaves at 7 every morning — and the timetable has not changed at all.",
              note: {
                bn: "সময়সূচি এখনও প্রযোজ্য — নিয়মিত schedule-এর কথা still-true হিসেবে present simple-এই থাকে; would বললে সময়সূচিটা অতীতের বলে ধরে নেওয়া হয়।",
                en: "The schedule still applies — a regular timetable stays in the present simple as a still-true fact; would would treat the timetable as a thing of the past.",
                hi: "सारणी अब भी लागू है — नियमित schedule अब-भी-सत्य के रूप में present simple में रहता है; would कहने से सारणी अतीत मान ली जाएगी।",
              },
            },
          ],
        },
        /* ── 6. Reporting-verb family map ── */
        {
          heading: {
            bn: "🗺️ রিপোর্টিং verb-এর পরিবার — পাঁচ প্যাটার্নের ম্যাপ",
            en: "🗺️ The reporting-verb families — a map of five patterns",
            hi: "🗺️ रिपोर्टिंग verb के परिवार — पाँच पैटर्न का नक्शा",
          },
          lead: {
            bn: "said-কে বিদায় দিয়ে সঠিক রিপোর্টিং verb — এটাই C1 লেখার রসদ; আগে ম্যাপটা দেখুন।",
            en: "Retiring said for the precise reporting verb — that is the staple of C1 writing; see the map first.",
            hi: "said को विदा देकर सही रिपोर्टिंग verb — यही C1 लेखन का आहार है; पहले नक्शा देखें।",
          },
          table: {
            head: [
              { bn: "রিপোর্টিং verb", en: "Reporting verb", hi: "रिपोर्टिंग verb" },
              { bn: "প্যাটার্ন", en: "Pattern", hi: "पैटर्न" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [{ bn: "admit / deny / mention", en: "admit / deny / mention", hi: "admit / deny / mention" }, { bn: "+ -ing", en: "+ -ing", hi: "+ -ing" }, { bn: "He admitted leaking the file", en: "He admitted leaking the file", hi: "He admitted leaking the file" }],
              [{ bn: "promise / agree / refuse / offer", en: "promise / agree / refuse / offer", hi: "promise / agree / refuse / offer" }, { bn: "+ to-infinitive", en: "+ to-infinitive", hi: "+ to-infinitive" }, { bn: "He promised to help", en: "He promised to help", hi: "He promised to help" }],
              [{ bn: "suggest", en: "suggest", hi: "suggest" }, { bn: "+ -ing / that-clause", en: "+ -ing / that-clause", hi: "+ -ing / that-clause" }, { bn: "She suggested taking a taxi", en: "She suggested taking a taxi", hi: "She suggested taking a taxi" }],
              [{ bn: "apologise", en: "apologise", hi: "apologise" }, { bn: "for + -ing", en: "for + -ing", hi: "for + -ing" }, { bn: "He apologised for being late", en: "He apologised for being late", hi: "He apologised for being late" }],
              [{ bn: "advise / encourage / remind / warn / tell / ask", en: "advise / encourage / remind / warn / tell / ask", hi: "advise / encourage / remind / warn / tell / ask" }, { bn: "+ ব্যক্তি + to-infinitive", en: "+ person + to-infinitive", hi: "+ व्यक्ति + to-infinitive" }, { bn: "The doctor advised me to rest", en: "The doctor advised me to rest", hi: "The doctor advised me to rest" }],
            ],
          },
          points: [
            { bn: "C1 লেখার রসদ — said-কে বিদায় দিয়ে অর্থমতো রিপোর্টিং verb বেছে নেওয়া; তবে প্রতিটার নিজের প্যাটার্ন আছে।", en: "The staple of C1 writing is retiring said for the precise reporting verb — but each has its own pattern.", hi: "C1 लेखन का आहार — said को विदा देकर अर्थपूर्ण रिपोर्टिंग verb चुनना; पर हर एक का अपना पैटर्न है।" },
            { bn: "পরিবার মুখস্থ হলে বাক্য দুই ধাপ পেশাদার হয়: 'He said he did not take it' → 'He denied taking it'।", en: "Once the families are memorised, sentences rise two steps in professionalism: 'He said he did not take it' → 'He denied taking it'.", hi: "परिवार रट जाएँ तो वाक्य दो पायदान पेशेवर: 'He said he did not take it' → 'He denied taking it'।" },
            { bn: "এক ক্রিয়ায় অস্বীকারের পুরো জোর এসে যায় — deny-র সঙ্গে that...not জুড়তে হয় না।", en: "One verb carries the whole force of denial — deny never pairs with that...not.", hi: "एक क्रिया में इनकार की पूरी ताक़त आ जाती है — deny के साथ that...not नहीं जोड़ा जाता।" },
            { bn: "অস্বীকারটা deny-র ভেতরেই বাস করে — নিচের অংশগুলোতে পাঁচ পরিবার একে একে।", en: "The denial already lives inside deny — the next parts walk through the five families one by one.", hi: "इनकार deny के भीतर ही रहता है — अगले भागों में पाँचों परिवार एक-एक करके।" },
          ],
          examples: [
            {
              wrong: "He denied that he did not take the money.",
              right: "He denied taking the money.",
              note: {
                bn: "deny-র ভেতরেই অস্বীকার আছে — that he did not জুড়লে দ্বিগুণ নেগেশনে অর্থ উল্টে যায়; প্রমিত রূপ deny + -ing।",
                en: "The denial already lives inside deny — adding that he did not doubles the negation and flips the meaning; the standard form is deny + -ing.",
                hi: "इनकार deny के भीतर है — that he did not जोड़ने से दोहरा नेगेशन अर्थ पलट देता है; प्रमित रूप deny + -ing।",
              },
            },
          ],
        },
        /* ── 7. The -ing family ── */
        {
          heading: {
            bn: "🎭 -ing পরিবার — admit, deny, mention, apologise",
            en: "🎭 The -ing family — admit, deny, mention, apologise",
            hi: "🎭 -ing परिवार — admit, deny, mention, apologise",
          },
          lead: {
            bn: "অস্বীকার, স্বীকারোক্তি, উল্লেখ, ক্ষমা — এই চার ক্রিয়ার পরে -ing-ই বসে।",
            en: "Denial, admission, mention, apology — these four verbs are followed by -ing.",
            hi: "इनकार, स्वीकारोक्ति, उल्लेख, माफ़ी — इन चार क्रियाओं के बाद -ing ही बैठता है।",
          },
          points: [
            { bn: "**admit + -ing** — He admitted leaking the file।", en: "**admit + -ing** — He admitted leaking the file.", hi: "**admit + -ing** — He admitted leaking the file।" },
            { bn: "**deny + -ing** — She denied taking the money।", en: "**deny + -ing** — She denied taking the money.", hi: "**deny + -ing** — She denied taking the money।" },
            { bn: "**mention + -ing** — He mentioned meeting her in Cox's Bazar।", en: "**mention + -ing** — He mentioned meeting her in Cox's Bazar.", hi: "**mention + -ing** — He mentioned meeting her in Cox's Bazar।" },
            { bn: "**apologise for + -ing** — He apologised for being late; ক্ষমার বিষয়টা for-এর পিছনে বসে।", en: "**apologise for + -ing** — He apologised for being late; the thing apologised for sits behind for.", hi: "**apologise for + -ing** — He apologised for being late; माफ़ी का काम for के पीछे बैठता है।" },
            { bn: "এই পরিবারে ক্রিয়ার পরে সরাসরি -ing-ই চলে — to-infinitive-এর চাবি এখানে খোলে না।", en: "In this family the verb goes straight into -ing — the to-infinitive key does not open this door.", hi: "इस परिवार में क्रिया के बाद सीधा -ing — to-infinitive की चाबी यहाँ नहीं खुलती।" },
          ],
          examples: [
            {
              wrong: "The minister admitted to leak the report.",
              right: "The minister admitted leaking the report.",
              note: {
                bn: "admit + -ing; 'admitted to leaking' কথ্য ভাষায় শোনা গেলেও admit + to-infinitive প্রমিত নয় — সরাসরি -ing সবচেয়ে নিরাপদ।",
                en: "admit + -ing; 'admitted to leaking' may be heard in speech, but admit + to-infinitive is not standard — bare -ing is the safest choice.",
                hi: "admit + -ing; 'admitted to leaking' बोलचाल में सुनाई दे भी सकता है, पर admit + to-infinitive प्रमित नहीं — सीधा -ing सबसे सुरक्षित।",
              },
            },
            {
              wrong: "He apologised to be late again.",
              right: "He apologised for being late again.",
              note: {
                bn: "apologise for + -ing — ক্ষমা চাওয়ার বিষয়টা for-এর পিছনে -ing রূপে বসে; to be নয়।",
                en: "apologise for + -ing — the thing apologised for sits behind for as an -ing form; never to be.",
                hi: "apologise for + -ing — माफ़ी माँगे जाने वाला काम for के पीछे -ing रूप में बैठता है; to be नहीं।",
              },
            },
          ],
        },
        /* ── 8. The to-infinitive family ── */
        {
          heading: {
            bn: "🎯 to-infinitive পরিবার — promise, agree, refuse, offer",
            en: "🎯 The to-infinitive family — promise, agree, refuse, offer",
            hi: "🎯 to-infinitive परिवार — promise, agree, refuse, offer",
          },
          lead: {
            bn: "প্রতিশ্রুতি, সম্মতি, অস্বীকৃতি, প্রস্তাব — সামনের কাজের কথা বললে to-infinitive-ই সঙ্গী।",
            en: "Promises, agreements, refusals, offers — a forward action always takes the to-infinitive.",
            hi: "वादा, सहमति, इनकार, पेशकश — आगे के काम की बात है तो to-infinitive ही साथी।",
          },
          points: [
            { bn: "**promise + to** — He promised to help।", en: "**promise + to** — He promised to help.", hi: "**promise + to** — He promised to help।" },
            { bn: "**agree + to** — They agreed to fund the project।", en: "**agree + to** — They agreed to fund the project.", hi: "**agree + to** — They agreed to fund the project।" },
            { bn: "**refuse + to** — She refused to sign।", en: "**refuse + to** — She refused to sign.", hi: "**refuse + to** — She refused to sign।" },
            { bn: "**offer + to** — He offered to drive me home।", en: "**offer + to** — He offered to drive me home.", hi: "**offer + to** — He offered to drive me home।" },
            { bn: "এই চার ভাইয়ার সঙ্গী to — সবাই সামনের কোনো কাজের কথা রিপোর্ট করে।", en: "to is the partner of these four — all of them report a forward action.", hi: "इन चार भाइयों का साथी to — चारों आगे के काम की रिपोर्ट करते हैं।" },
          ],
          examples: [
            {
              wrong: "They agreed starting the project in January.",
              right: "They agreed to start the project in January.",
              note: {
                bn: "agree + to-infinitive — সম্মতি সামনের কাজের প্রতিশ্রুতি, তাই to; agree on a date (দর-কষাকষি) আলাদা প্যাটার্ন।",
                en: "agree + to-infinitive — agreement is a promise about a forward action, hence to; agree on a date (negotiation) is a different pattern.",
                hi: "agree + to-infinitive — सहमति आगे के काम का वादा है, इसलिए to; agree on a date (मोल-भाव) अलग पैटर्न है।",
              },
            },
            {
              wrong: "He promised helping me with the visa papers.",
              right: "He promised to help me with the visa papers.",
              note: {
                bn: "promise + to-infinitive; -ing জুড়লে প্রতিশ্রুতির প্রতিশ্রুতিবদ্ধতাটাই হারায় — promise-এর সাথী to।",
                en: "promise + to-infinitive; attaching -ing strips the commitment out of the promise — to is promise's partner.",
                hi: "promise + to-infinitive; -ing जोड़ने से वादे की प्रतिबद्धता ही छूट जाती है — promise का साथी to है।",
              },
            },
          ],
        },
        /* ── 9. suggest's own rule ── */
        {
          heading: {
            bn: "💡 suggest-এর আলাদা নিয়ম — object + to অসম্ভব",
            en: "💡 suggest's own rule — object + to is impossible",
            hi: "💡 suggest का अलग नियम — object + to असंभव",
          },
          lead: {
            bn: "suggest-এর দুই পথ খোলা, কিন্তু object + to-র তৃতীয় পথটা বন্ধ।",
            en: "suggest opens two roads, but the third road — object + to — stays closed.",
            hi: "suggest के दो रास्ते खुले हैं, पर तीसरा रास्ता — object + to — बंद।",
          },
          formula: {
            bn: "suggest + -ing · suggest that + subject + V1 — suggest + ব্যক্তি + to ✗",
            en: "suggest + -ing · suggest that + subject + V1 — never suggest + person + to",
            hi: "suggest + -ing · suggest that + subject + V1 — suggest + व्यक्ति + to ✗",
          },
          points: [
            { bn: "**suggest + -ing** — She suggested taking a taxi।", en: "**suggest + -ing** — She suggested taking a taxi.", hi: "**suggest + -ing** — She suggested taking a taxi।" },
            { bn: "**suggest that + সোজা গড়ন** — She suggested that we take a taxi।", en: "**suggest that + straight order** — She suggested that we take a taxi.", hi: "**suggest that + सीधा क्रम** — She suggested that we take a taxi।" },
            { bn: "**object + to-infinitive অসম্ভব** — 'suggested me to take' বাক্য ইংরেজিতে নেই।", en: "**object + to-infinitive is impossible** — 'suggested me to take' does not exist in English.", hi: "**object + to-infinitive असंभव** — 'suggested me to take' अंग्रेज़ी में नहीं है।" },
            { bn: "দুই পথ খোলা — -ing আর that-clause; তৃতীয় পথটা (ব্যক্তি + to) বন্ধ।", en: "Two roads are open — -ing and the that-clause; the third road (person + to) stays closed.", hi: "दो रास्ते खुले — -ing और that-clause; तीसरा रास्ता (व्यक्ति + to) बंद।" },
          ],
          examples: [
            {
              wrong: "She suggested me to try the new café near Gulshan.",
              right: "She suggested that I try the new café near Gulshan. / She suggested trying the new café near Gulshan.",
              note: {
                bn: "suggest-এর সঙ্গে object + to-infinitive অসম্ভব — হয় suggest + -ing, নয় suggest that + সোজা গড়ন; বাংলা 'আমাকে পরামর্শ দিল' রূপটা এই ভুলের উৎস।",
                en: "suggest never takes object + to-infinitive — either suggest + -ing or suggest that + straight order; the Bengali 'আমাকে পরামর্শ দিল' shape is the source of this error.",
                hi: "suggest के साथ object + to-infinitive असंभव — या suggest + -ing, या suggest that + सीधा क्रम; हिंदी 'मुझे सुझाव दिया' रूप इस गलती का स्रोत।",
              },
            },
          ],
        },
        /* ── 10. The person + to family ── */
        {
          heading: {
            bn: "👥 ব্যক্তি + to পরিবার — advise, encourage, remind, warn, tell, ask",
            en: "👥 The person + to family — advise, encourage, remind, warn, tell, ask",
            hi: "👥 व्यक्ति + to परिवार — advise, encourage, remind, warn, tell, ask",
          },
          lead: {
            bn: "পরামর্শ, উৎসাহ, স্মরণ, সতর্কতা, আদেশ, অনুরোধ — এই পরিবারে ব্যক্তিটা প্যাটার্নের অংশ।",
            en: "Advice, encouragement, reminders, warnings, commands, requests — here the person is part of the pattern.",
            hi: "सलाह, हौसला, याद दिलाना, चेतावनी, आदेश, अनुरोध — यहाँ व्यक्ति पैटर्न का हिस्सा है।",
          },
          formula: {
            bn: "advise / encourage / remind / warn / tell / ask + ব্যক্তি + (not) to + V1",
            en: "advise / encourage / remind / warn / tell / ask + person + (not) to + V1",
            hi: "advise / encourage / remind / warn / tell / ask + व्यक्ति + (not) to + V1",
          },
          points: [
            { bn: "**advise + ব্যক্তি + to** — The doctor advised me to rest।", en: "**advise + person + to** — The doctor advised me to rest.", hi: "**advise + व्यक्ति + to** — The doctor advised me to rest।" },
            { bn: "**encourage + ব্যক্তি + to** — উৎসাহ দেওয়ার রিপোর্টও এই প্যাটার্নে।", en: "**encourage + person + to** — reports of encouragement follow the same pattern.", hi: "**encourage + व्यक्ति + to** — हौसला देने की रिपोर्ट भी यही पैटर्न।" },
            { bn: "**remind + ব্যক্তি + to** — She reminded us to bring ID।", en: "**remind + person + to** — She reminded us to bring ID.", hi: "**remind + व्यक्ति + to** — She reminded us to bring ID।" },
            { bn: "**warn + ব্যক্তি + not to** — He warned them not to touch the wire।", en: "**warn + person + not to** — He warned them not to touch the wire.", hi: "**warn + व्यक्ति + not to** — He warned them not to touch the wire।" },
            { bn: "**tell/ask + ব্যক্তি + to** — আদেশে told, অনুরোধে asked; নিষেধে not to।", en: "**tell/ask + person + to** — told for commands, asked for requests; not to for prohibitions.", hi: "**tell/ask + व्यक्ति + to** — आदेश में told, अनुरोध में asked; निषेध में not to।" },
            { bn: "প্যাটার্নেই ব্যক্তি লেখা — এই পরিবারে object ছাড়া বাক্য চলে না; suggest-এর ঠিক উল্টো।", en: "The person is written into the pattern — no sentence without an object here; the exact opposite of suggest.", hi: "पैटर्न में ही व्यक्ति लिखा है — यहाँ object के बिना वाक्य नहीं चलता; suggest के ठीक उलट।" },
          ],
          examples: [],
        },
        /* ── 11. Reported questions ── */
        {
          heading: {
            bn: "❓ Reported question — প্রশ্ন রিপোর্টের তিন ধাপ",
            en: "❓ Reported questions — three steps to report a question",
            hi: "❓ Reported question — प्रश्न रिपोर्ट करने के तीन चरण",
          },
          lead: {
            bn: "প্রশ্ন রিপোর্টে এলে তিন কাজ — শব্দ রাখা, গড়ন সোজা করা, tense পিছানো।",
            en: "A reported question takes three jobs — keep the wh-word, straighten the order, shift the tense.",
            hi: "reported question में तीन काम — प्रश्न-शब्द रखना, क्रम सीधा करना, tense पीछे खिसकाना।",
          },
          formula: {
            bn: "wh-word / if-whether + subject + verb (সোজা গড়ন) — do/does/did ✗, '?' ✗",
            en: "wh-word / if-whether + subject + verb (straight order) — no do/does/did, no '?'",
            hi: "wh-word / if-whether + subject + verb (सीधा क्रम) — do/does/did ✗, '?' ✗",
          },
          points: [
            { bn: "**ধাপ ১ — প্রশ্ন-শব্দ থেকে যায়** — where, what, when, why, how; হ্যাঁ/না-প্রশ্নে if/whether বসে।", en: "**Step 1 — the wh-word stays** — where, what, when, why, how; yes/no questions take if/whether.", hi: "**चरण 1 — प्रश्न-शब्द बना रहता है** — where, what, when, why, how; हाँ/ना-प्रश्न में if/whether बैठता है।" },
            { bn: "**ধাপ ২ — গড়ন বিবৃতির মতো সোজা** — সহায়ক ক্রিয়া subject-এর আগে যায় না।", en: "**Step 2 — the order straightens like a statement** — the auxiliary never goes before the subject.", hi: "**चरण 2 — क्रम कथन-सा सीधा** — सहायक क्रिया subject से पहले नहीं जाती।" },
            { bn: "do/does/did মুছে যায়, প্রশ্নবোধক চিহ্ন পরিণত হয় দাঁড়িতে।", en: "do/does/did are deleted, and the question mark matures into a full stop.", hi: "do/does/did मिटते हैं, प्रश्न-चिह्न पूर्ण विराम में बदल जाता है।" },
            { bn: "**ধাপ ৩ — tense ব্যাকশিফট হয়** — asked অতীত, তাই ভেতরের tense-ও পিছোয়।", en: "**Step 3 — the tense backshifts** — asked is past, so the inner tense steps back too.", hi: "**चरण 3 — tense backshift होता है** — asked अतीत है, इसलिए भीतरी tense भी पीछे।" },
            { bn: "Direct: 'Where do you live?' → She asked where I lived।", en: "Direct: 'Where do you live?' → She asked where I lived.", hi: "Direct: 'Where do you live?' → She asked where I lived।" },
            { bn: "Direct: 'Do you know the manager?' → He asked whether I knew the manager।", en: "Direct: 'Do you know the manager?' → He asked whether I knew the manager.", hi: "Direct: 'Do you know the manager?' → He asked whether I knew the manager।" },
          ],
          examples: [
            {
              wrong: "She asked me what was my expected salary.",
              right: "She asked me what my expected salary was.",
              note: {
                bn: "reported question-এ wh-word-এর পরে subject আগে, ক্রিয়া পরে — what my expected salary was; ইন্টারভিউ-সংলাপে এই উল্টো-গড়ন সবচেয়ে ঘন ঘন ভুল।",
                en: "In a reported question the subject comes before the verb after the wh-word — what my expected salary was; this inverted order is the most frequent interview-transcript error.",
                hi: "reported question में wh-word के बाद subject पहले, क्रिया बाद — what my expected salary was; इंटरव्यू-संवाद में यह उलटा क्रम सबसे घना गलती है।",
              },
            },
            {
              wrong: "The tourist asked the policeman does the bus stop at the museum.",
              right: "The tourist asked the policeman if the bus stopped at the museum.",
              note: {
                bn: "হ্যাঁ/না-প্রশ্নে if + সোজা গড়ন + ব্যাকশিফট; does মুছে যায়, stop → stopped।",
                en: "Yes/no questions take if + straight order + backshift; does vanishes and stop becomes stopped.",
                hi: "हाँ/ना-प्रश्न में if + सीधा क्रम + backshift; does मिटता है, stop हो जाता है stopped।",
              },
            },
          ],
        },
        /* ── 12. Commands, requests, prohibitions ── */
        {
          heading: {
            bn: "📢 আদেশ, অনুরোধ, নিষেধ — to-infinitive-এ ঢালা",
            en: "📢 Commands, requests, prohibitions — into the to-infinitive",
            hi: "📢 आदेश, अनुरोध, निषेध — to-infinitive की ढलान",
          },
          lead: {
            bn: "আদেশ-অনুরোধ-নিষেধ তিনটারই গন্তব্য এক — ব্যক্তি + (not) to + V1।",
            en: "Commands, requests and prohibitions share one destination — person + (not) to + V1.",
            hi: "आदेश, अनुरोध, निषेध — तीनों की मंज़िल एक — व्यक्ति + (not) to + V1।",
          },
          formula: {
            bn: "told / ordered / asked + ব্যক্তি + (not) to + V1",
            en: "told / ordered / asked + person + (not) to + V1",
            hi: "told / ordered / asked + व्यक्ति + (not) to + V1",
          },
          points: [
            { bn: "**আদেশ** — told/ordered/commanded + ব্যক্তি + to-infinitive।", en: "**Commands** — told/ordered/commanded + person + to-infinitive.", hi: "**आदेश** — told/ordered/commanded + व्यक्ति + to-infinitive।" },
            { bn: "**অনুরোধ** — asked + ব্যক্তি + to-infinitive।", en: "**Requests** — asked + person + to-infinitive.", hi: "**अनुरोध** — asked + व्यक्ति + to-infinitive।" },
            { bn: "**নিষেধ** — not to: Mother told me not to touch the wet paint।", en: "**Prohibitions** — not to: Mother told me not to touch the wet paint.", hi: "**निषेध** — not to: Mother told me not to touch the wet paint।" },
            { bn: "Direct: 'Please wait outside.' → The nurse asked me to wait outside।", en: "Direct: 'Please wait outside.' → The nurse asked me to wait outside.", hi: "Direct: 'Please wait outside.' → The nurse asked me to wait outside।" },
            { bn: "Direct: 'Don't be late.' → The coach ordered us not to be late।", en: "Direct: 'Don't be late.' → The coach ordered us not to be late.", hi: "Direct: 'Don't be late.' → The coach ordered us not to be late।" },
            { bn: "Don't-এর do রিপোর্টে বাঁচে না — নিষেধের চিহ্ন শুধু not to।", en: "The do of Don't never survives the report — the only mark of prohibition is not to.", hi: "Don't का do रिपोर्ट में नहीं बचता — निषेध की एक ही निशानी not to।" },
          ],
          examples: [
            {
              wrong: "The manager said me to submit the revised budget.",
              right: "The manager told me to submit the revised budget.",
              note: {
                bn: "আদেশ রিপোর্টে said নয় — told/ordered + ব্যক্তি + to; said me-র মিশ্রণটা 'বলল আমাকে'-র সরাসরি ছায়া।",
                en: "Commands are not reported with said — told/ordered + person + to; the said me mixture is a direct shadow of 'বলল আমাকে'.",
                hi: "आदेश की रिपोर्ट said से नहीं — told/ordered + व्यक्ति + to; said me का मिश्रण 'उसे बोला' की सीधी छाया है।",
              },
            },
            {
              wrong: "Mother told me do not touch the wet paint.",
              right: "Mother told me not to touch the wet paint.",
              note: {
                bn: "নিষেধের রিপোর্ট not to — do not-এর do রিপোর্টে টিকে থাকে না; সূত্র: told + ব্যক্তি + not to + V1।",
                en: "Prohibitions take not to — the do of do not never survives the report; formula: told + person + not to + V1.",
                hi: "निषेध की रिपोर्ट not to — do not का do रिपोर्ट में नहीं बचता; सूत्र: told + व्यक्ति + not to + V1।",
              },
            },
          ],
        },
        /* ── 13. Time and place words ── */
        {
          heading: {
            bn: "🕰️ সময়-জায়গার শব্দের যাত্রা — ১২ জোড়া সরে-যাওয়া",
            en: "🕰️ The journey of time and place words — twelve shifting pairs",
            hi: "🕰️ समय-स्थान शब्दों की यात्रा — बारह खिसकने वाले जोड़े",
          },
          lead: {
            bn: "tense পিছোলে শব্দও সরে — বক্তার ঘড়ি-মানচিত্র থেকে রিপোর্টারের ঘড়ি-মানচিত্রে ঠিকানা।",
            en: "When the tense steps back, words travel too — from the speaker's clock-and-map to the reporter's.",
            hi: "tense पीछे जाए तो शब्द भी खिसकते हैं — बोलने वाले के घड़ी-नक्शे से रिपोर्टर के घड़ी-नक्शे तक।",
          },
          formula: {
            bn: "বক্তার 'এখন-এখানে' → রিপোর্টারের 'তখন-সেখানে'",
            en: "the speaker's 'now-here' → the reporter's 'then-there'",
            hi: "बोलने वाले का 'अभी-यहाँ' → रिपोर्टर का 'तब-वहाँ'",
          },
          table: {
            head: [
              { bn: "মূল শব্দ", en: "Direct word", hi: "मूल शब्द" },
              { bn: "রিপোর্টে", en: "In the report", hi: "रिपोर्ट में" },
            ],
            rows: [
              [{ bn: "now", en: "now", hi: "now" }, { bn: "then", en: "then", hi: "then" }],
              [{ bn: "today", en: "today", hi: "today" }, { bn: "that day", en: "that day", hi: "that day" }],
              [{ bn: "tonight", en: "tonight", hi: "tonight" }, { bn: "that night", en: "that night", hi: "that night" }],
              [{ bn: "yesterday", en: "yesterday", hi: "yesterday" }, { bn: "the day before / the previous day", en: "the day before / the previous day", hi: "the day before / the previous day" }],
              [{ bn: "tomorrow", en: "tomorrow", hi: "tomorrow" }, { bn: "the next day / the following day", en: "the next day / the following day", hi: "the next day / the following day" }],
              [{ bn: "ago", en: "ago", hi: "ago" }, { bn: "before", en: "before", hi: "before" }],
              [{ bn: "next week", en: "next week", hi: "next week" }, { bn: "the following week", en: "the following week", hi: "the following week" }],
              [{ bn: "last week", en: "last week", hi: "last week" }, { bn: "the week before", en: "the week before", hi: "the week before" }],
              [{ bn: "here", en: "here", hi: "here" }, { bn: "there", en: "there", hi: "there" }],
              [{ bn: "this", en: "this", hi: "this" }, { bn: "that", en: "that", hi: "that" }],
              [{ bn: "these", en: "these", hi: "these" }, { bn: "those", en: "those", hi: "those" }],
              [{ bn: "come", en: "come", hi: "come" }, { bn: "go", en: "go", hi: "go" }],
            ],
          },
          points: [
            { bn: "**মূল সূত্র** — ঠিকানা বদলায়: বক্তার ঘড়ি-মানচিত্র থেকে রিপোর্টারের ঘড়ি-মানচিত্রে।", en: "**The core idea** — the address changes from the speaker's clock-and-map to the reporter's clock-and-map.", hi: "**मूल सूत्र** — पता बदलता है: बोलने वाले की घड़ी-नक्शे से रिपोर्टर की घड़ी-नक्शे तक।" },
            { bn: "**সময়-শব্দ সরে** — now→then, today→that day, yesterday→the day before, tomorrow→the next day, ago→before।", en: "**Time words shift** — now→then, today→that day, yesterday→the day before, tomorrow→the next day, ago→before.", hi: "**समय-शब्द खिसकते हैं** — now→then, today→that day, yesterday→the day before, tomorrow→the next day, ago→before।" },
            { bn: "**সপ্তাহ-জোড়া** — next week→the following week, last week→the week before।", en: "**Week pairs** — next week→the following week, last week→the week before.", hi: "**सप्ताह-जोड़े** — next week→the following week, last week→the week before।" },
            { bn: "**জায়গা-নির্দেশ সরে** — here→there, this→that, these→those, come→go।", en: "**Place words shift** — here→there, this→that, these→those, come→go.", hi: "**स्थान-शब्द खिसकते हैं** — here→there, this→that, these→those, come→go।" },
            { bn: "tense পিছোলেই এই শব্দগুলোও এক ধাপ দূরে — backshift আর শব্দ-যাত্রা হাতে হাতে চলে।", en: "When the tense steps back, these words step away too — the backshift and the word-journey travel hand in hand.", hi: "tense पीछे जाए तो ये शब्द भी एक क़दम दूर — backshift और शब्द-यात्रा साथ-साथ चलती हैं।" },
          ],
          examples: [
            {
              wrong: "He said he had met the ambassador here two days ago.",
              right: "He said he had met the ambassador there two days before.",
              note: {
                bn: "here → there আর ago → before — সাক্ষাৎটা বক্তার জায়গা-সময়ে ঘটেছিল, রিপোর্টে ঠিকানা এক ধাপ দূরে।",
                en: "here → there and ago → before — the meeting happened in the speaker's place-time; in the report the address steps one away.",
                hi: "here → there और ago → before — भेंट बोलने वाले के स्थान-समय में हुई थी; रिपोर्ट में पता एक क़दम दूर।",
              },
            },
            {
              wrong: "She said she would submit the assignment yesterday.",
              right: "She said she had submitted the assignment the day before.",
              note: {
                bn: "yesterday → the day before; আর কাজটা বলার আগেই শেষ ছিল, তাই would submit নয় — had submitted (past perfect)।",
                en: "yesterday → the day before; and the submission was finished before the speaking, so not would submit — had submitted (past perfect).",
                hi: "yesterday → the day before; और काम बोलने से पहले ही पूरा था, इसलिए would submit नहीं — had submitted (past perfect)।",
              },
            },
          ],
        },
        /* ── 14. Subtle advanced errors ── */
        {
          heading: {
            bn: "⚠️ উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "⚠️ Subtle errors made by advanced learners",
            hi: "⚠️ एडवांस्ड शिक्षार्थियों की सूक्ष्म गलतियाँ",
          },
          lead: {
            bn: "ভুলগুলো গড়ন ঠিক রেখেই ঘটে, তাই পড়তে গিয়ে ধরা পড়ে না — পাঁচ দল চিনে রাখুন।",
            en: "These errors hide inside well-formed sentences — learn the five groups that escape a quick read.",
            hi: "ये गलतियाँ ढाँचा सही रखकर होती हैं, पढ़ते हुए पकड़ नहीं आतीं — पाँच समूह पहचानें।",
          },
          points: [
            { bn: "**দল ১ — ব্যক্তি ছাড়া tell** — 'The teacher told that...' — tell-এর ব্যক্তি ছাড়া অস্তিত্ব নেই।", en: "**Group 1 — tell without a person** — 'The teacher told that...' — tell cannot exist without its person.", hi: "**समूह 1 — बिना व्यक्ति tell** — 'The teacher told that...' — tell बिना व्यक्ति रह नहीं सकता।" },
            { bn: "'explained us the rules' — explain/describe/suggest দুই object নেয় না; এরাও একই double-object ফাঁদ।", en: "'explained us the rules' — explain/describe/suggest take no two objects; the same double-object trap.", hi: "'explained us the rules' — explain/describe/suggest दो objects नहीं लेते; यही double-object जाल।" },
            { bn: "**দল ২ — auxiliary-ছায়া** — reported question-এ প্রশ্নের গড়ন ফিরে আসে: 'asked me whether did I know'।", en: "**Group 2 — auxiliary shadows** — the question order sneaks back into a reported question: 'asked me whether did I know'.", hi: "**समूह 2 — auxiliary-छाया** — reported question में प्रश्न-क्रम लौट आता है: 'asked me whether did I know'।" },
            { bn: "**দল ৩ — দীর্ঘ বাক্যে ব্যাকশিফট ঝরে পড়া** — প্রথম clause-এ had/would ঠিক থাকে, শেষ প্রান্তে has/will ফিরে আসে।", en: "**Group 3 — the backshift dripping away in long sentences** — had/would hold in the first clause, but has/will sneak back at the far end.", hi: "**समूह 3 — लंबे वाक्य में backshift टपकना** — पहले clause में had/would सही, दूर छोर पर has/will लौट आते हैं।" },
            { bn: "**দল ৪ — আদেশে said...to** — 'She said me to wait' → She told me to wait।", en: "**Group 4 — said...to for commands** — 'She said me to wait' → She told me to wait.", hi: "**समूह 4 — आदेश में said...to** — 'She said me to wait' → She told me to wait।" },
            { bn: "**দল ৫ — চিরন্তন সত্যেও ব্যাকশিফট** — 'The professor said the earth revolved around the sun' — ভুল না হলেও অর্থ বদলে যায়।", en: "**Group 5 — backshifting even universal truths** — 'The professor said the earth revolved around the sun' — not ungrammatical, but the meaning shifts.", hi: "**समूह 5 — शाश्वत सत्य का भी backshift** — 'The professor said the earth revolved around the sun' — अव्याकरणिक नहीं, पर अर्थ बदल जाता है।" },
            { bn: "revolved লিখলে মনে হয় পৃথিবী একসময় ঘুরত, এখন আর নয়!", en: "revolved sounds as if the earth once revolved and has now stopped!", hi: "revolved लिखने से लगता है पृथ्वी कभी घूमती थी, अब नहीं!" },
            { bn: "এই পাঁচ দল নিজের লেখায় মাঝে মাঝে খুঁজে দেখুন — সংবাদ-অনুচ্ছেদ বা মিটিং-নোট লিখতেই এরা ফিরে আসে।", en: "Scan your own writing for these five groups now and then — they return the moment you draft a news paragraph or meeting notes.", hi: "अपने लेखन में इन पाँच समूहों को समय-समय पर खोजें — अंग्रेज़ी में समाचार-अनुच्छेद या मीटिंग-नोट लिखते ही ये लौट आते हैं।" },
          ],
          examples: [
            {
              wrong: "The teacher told that the results would be out on Sunday.",
              right: "The teacher said that the results would be out on Sunday. / The teacher told us that the results would be out on Sunday.",
              note: {
                bn: "tell-এর ব্যক্তি ছাড়া অস্তিত্ব নেই — হয় said (that)..., নয় told us that...; ব্যক্তি উল্লেখ না থাকলে said-ই নিরাপদ।",
                en: "tell cannot exist without its person — either said (that)... or told us that...; when no listener is named, said is the safe road.",
                hi: "tell बिना व्यक्ति के रह ही नहीं सकता — या said (that)..., या told us that...; श्रोता न हो तो said ही सुरक्षित।",
              },
            },
            {
              wrong: "He asked me whether did I know the answer to the riddle.",
              right: "He asked me whether I knew the answer to the riddle.",
              note: {
                bn: "whether/if-এর পরেও গড়ন বিবৃতির মতো — did মুছে যায়, know → knew; প্রশ্ন-ছায়া দুইবার ঢুকে গেল।",
                en: "Even after whether/if the order is statement-like — did is deleted and know becomes knew; the question-shadow crept in twice.",
                hi: "whether/if के बाद भी क्रम कथन-सा — did मिटता है, know होता है knew; प्रश्न-छाया दो बार घुस गई।",
              },
            },
            {
              wrong: "She said me to wait outside the chamber.",
              right: "She told me to wait outside the chamber.",
              note: {
                bn: "আদেশ-অনুরোধের রিপোর্ট told/asked + ব্যক্তি + to; said me to — দুই ভুলের জোড়া (said me + said to do)।",
                en: "Commands and requests take told/asked + person + to; said me to is a pair of errors in one (said me + said to do).",
                hi: "आदेश-अनुरोध की रिपोर्ट told/asked + व्यक्ति + to; said me to — एक साथ दो गलतियाँ (said me + said to do)।",
              },
            },
            {
              wrong: "The guide explained us the history of the fort in detail.",
              right: "The guide explained the history of the fort to us in detail.",
              note: {
                bn: "explain, describe, suggest — এরা দুই object নেয় না; শোনার ব্যক্তিকে to-এর পিছনে পাঠান — explained the history TO us।",
                en: "explain, describe, suggest — none takes two objects; send the listener behind to — explained the history TO us.",
                hi: "explain, describe, suggest — ये दो objects नहीं लेते; सुनने वाले को to के पीछे भेजें — explained the history TO us।",
              },
            },
            {
              wrong: "He said that since he has finished the training, he will apply for the offshore post.",
              right: "He said that since he had finished the training, he would apply for the offshore post.",
              note: {
                bn: "দীর্ঘ reported বাক্যের দূর-প্রান্তে ব্যাকশিফট ঝরে পড়ে — has → had, will → would; পুরো that-clause-টা একই অতীত জগতে থাকে।",
                en: "In long reported sentences the backshift drips away at the far end — has → had, will → would; the whole that-clause lives in one past world.",
                hi: "लंबे reported वाक्य के दूर छोर पर backshift टपक जाता है — has → had, will → would; पूरा that-clause एक ही अतीत-जगत में रहता है।",
              },
            },
          ],
        },
        /* ── 15. All patterns in one news paragraph ── */
        {
          heading: {
            bn: "📖 ছোট লেখায় দেখা যাক — সংবাদ-অনুচ্ছেদে সব প্যাটার্ন",
            en: "📖 Seen in a short piece of writing — every pattern in one news paragraph",
            hi: "📖 छोटे लेखन में देखिए — एक समाचार-अनुच्छेद में सारे पैटर्न",
          },
          lead: {
            bn: "এক সংবাদ-অনুচ্ছেদ — এই পাঠের সব প্যাটার্ন একসঙ্গে কাজ করছে, চোখ বুলিয়ে দেখুন।",
            en: "One news paragraph — every pattern of the lesson at work; sweep your eyes over it.",
            hi: "एक समाचार-अनुच्छेद — पाठ के सारे पैटर्न एक साथ काम कर रहे हैं; नज़र दौड़ाइए।",
          },
          points: [
            { bn: "সংবাদ-অনুচ্ছেদটা পড়ুন — এই পাঠের সব প্যাটার্ন একসঙ্গে কাজ করছে।", en: "Read the news paragraph — every pattern of the lesson is at work together.", hi: "समाचार-अनुच्छेद पढ़ें — पाठ के सारे पैटर्न एक साथ काम कर रहे हैं।" },
            { bn: "'The spokesperson told reporters that the minister had cancelled the Dhaka tour.' — told + reporters + that, ভেতরে had cancelled।", en: "'The spokesperson told reporters that the minister had cancelled the Dhaka tour.' — told + reporters + that, with had cancelled inside.", hi: "'The spokesperson told reporters that the minister had cancelled the Dhaka tour.' — told + reporters + that, भीतर had cancelled।" },
            { bn: "'He admitted meeting the contractor in March, but he denied taking any money.' — admitted meeting, denied taking: -ing পরিবার।", en: "'He admitted meeting the contractor in March, but he denied taking any money.' — admitted meeting, denied taking: the -ing family.", hi: "'He admitted meeting the contractor in March, but he denied taking any money.' — admitted meeting, denied taking: -ing परिवार।" },
            { bn: "'He promised to investigate the matter within a week and asked the public not to believe the rumours.' — promised to + asked not to।", en: "'He promised to investigate the matter within a week and asked the public not to believe the rumours.' — promised to + asked not to.", hi: "'He promised to investigate the matter within a week and asked the public not to believe the rumours.' — promised to + asked not to।" },
            { bn: "'He warned that the situation could worsen, and he explained the new rules to the press in detail.' — warned that + explained ... to।", en: "'He warned that the situation could worsen, and he explained the new rules to the press in detail.' — warned that + explained ... to.", hi: "'He warned that the situation could worsen, and he explained the new rules to the press in detail.' — warned that + explained ... to।" },
            { bn: "'He added that he would visit the site the next day, and he apologised for keeping everyone waiting so long.' — would visit the next day + apologised for keeping।", en: "'He added that he would visit the site the next day, and he apologised for keeping everyone waiting so long.' — would visit the next day + apologised for keeping.", hi: "'He added that he would visit the site the next day, and he apologised for keeping everyone waiting so long.' — would visit the next day + apologised for keeping।" },
            { bn: "প্রতিটা ক্রিয়ার প্যাটার্ন চিনুন — told reporters that, admitted meeting, denied taking, promised to investigate, asked the public not to, warned that, explained ... to, apologised for keeping।", en: "Recognise each verb's pattern — told reporters that, admitted meeting, denied taking, promised to investigate, asked the public not to, warned that, explained ... to, apologised for keeping.", hi: "हर क्रिया का पैटर्न पहचानें — told reporters that, admitted meeting, denied taking, promised to investigate, asked the public not to, warned that, explained ... to, apologised for keeping।" },
          ],
          examples: [
            {
              wrong: "He denied that he did not take any money from the contractor.",
              right: "He denied taking any money from the contractor.",
              note: {
                bn: "denied + -ing — অস্বীকারটা deny-র ভেতরেই; that he did not জুড়লে অর্থ উল্টে 'কিছু নেয়নি যে' থেকে 'নেয়নি এমন কথা অস্বীকার করল' হয়ে যায়।",
                en: "denied + -ing — the denial sits inside deny; adding that he did not inverts the sense into 'he denied that he took nothing'.",
                hi: "denied + -ing — इनकार deny के भीतर; that he did not जोड़ने पर अर्थ पलटकर 'उसने कुछ नहीं लिया — यह इनकार किया' जैसा हो जाता है।",
              },
            },
            {
              wrong: "He promised investigating the matter within a week.",
              right: "He promised to investigate the matter within a week.",
              note: {
                bn: "promise + to-infinitive; investigating লিখলে প্রতিশ্রুতির জায়গায় বর্ণনা দাঁড়িয়ে যায় — promise-এর সঙ্গী to।",
                en: "promise + to-infinitive; writing investigating turns the pledge into a description — to is promise's partner.",
                hi: "promise + to-infinitive; investigating लिखने से वादा वर्णन बन जाता है — promise का साथी to है।",
              },
            },
            {
              wrong: "He asked the public do not believe the rumours.",
              right: "He asked the public not to believe the rumours.",
              note: {
                bn: "অনুরোধ-নিষেধের রিপোর্ট asked + ব্যক্তি + not to; do not-এর do রিপোর্টে বাঁচে না।",
                en: "Requests and prohibitions take asked + person + not to; the do of do not never survives the report.",
                hi: "अनुरोध-निषेध की रिपोर्ट asked + व्यक्ति + not to; do not का do रिपोर्ट में जीवित नहीं रहता।",
              },
            },
            {
              wrong: "He added that he would visit the site here tomorrow.",
              right: "He added that he would visit the site there the next day.",
              note: {
                bn: "রিপোর্টের ঠিকানা রিপোর্টারের — তাই here → there, tomorrow → the next day; would-এর সঙ্গে এই শব্দ-যাত্রাও জরুরি।",
                en: "The report's address belongs to the reporter — hence here → there, tomorrow → the next day; these words must travel along with would.",
                hi: "रिपोर्ट का पता रिपोर्टर का है — इसलिए here → there, tomorrow → the next day; would के साथ इन शब्दों की यात्रा भी ज़रूरी।",
              },
            },
          ],
        },
        /* ── 16. At a glance + practice ── */
        {
          heading: {
            bn: "🧮 এক নজরে — পুরো পাঠ ৭ সূত্রে + অনুশীলন",
            en: "🧮 At a glance — the whole lesson in seven rules + practice",
            hi: "🧮 एक नज़र में — पूरा पाठ सात सूत्रों में + अभ्यास",
          },
          lead: {
            bn: "সাতটা সূত্রে গোটা পাঠ — স্ক্যান করে নিন, তারপর অনুশীলনে নামুন।",
            en: "The whole lesson in seven rules — scan them, then dive into the practice.",
            hi: "सात सूत्रों में पूरा पाठ — स्कैन करें, फिर अभ्यास में उतरें।",
          },
          points: [
            { bn: "**১** — said + ব্যক্তি নয়; told + ব্যক্তি + that; ব্যক্তি না থাকলে said that।", en: "**1** — no said + person; told + person + that; without a person, said that.", hi: "**1** — said + व्यक्ति नहीं; told + व्यक्ति + that; व्यक्ति न हो तो said that।" },
            { bn: "**২** — রিপোর্টিং verb অতীত → ভেতরের tense এক ধাপ পিছোয় (backshift)।", en: "**2** — past reporting verb → the inner tense steps one back (backshift).", hi: "**2** — अतीत रिपोर्टिंग verb → भीतरी tense एक क़दम पीछे (backshift)।" },
            { bn: "**৩** — চিরন্তন সত্য, এখনও-সত্যি অবস্থা, বর্তমান রিপোর্টিং verb — এই তিন ক্ষেত্রে ব্যাকশিফট নেই।", en: "**3** — universal truths, still-true situations and present reporting verbs — no backshift in these three fields.", hi: "**3** — शाश्वत सत्य, अब-भी-सत्य स्थिति, वर्तमान रिपोर्टिंग verb — इन तीन क्षेत्रों में backshift नहीं।" },
            { bn: "**৪** — admit/deny/mention + -ing; promise/agree/refuse/offer + to; suggest + -ing বা that-clause; apologise for + -ing।", en: "**4** — admit/deny/mention + -ing; promise/agree/refuse/offer + to; suggest + -ing or a that-clause; apologise for + -ing.", hi: "**4** — admit/deny/mention + -ing; promise/agree/refuse/offer + to; suggest + -ing या that-clause; apologise for + -ing।" },
            { bn: "**৫** — advise/remind/warn/tell/ask + ব্যক্তি + to; নিষেধে not to।", en: "**5** — advise/remind/warn/tell/ask + person + to; prohibitions take not to.", hi: "**5** — advise/remind/warn/tell/ask + व्यक्ति + to; निषेध में not to।" },
            { bn: "**৬** — reported question: সোজা গড়ন, do/does/did নেই, if/whether হ্যাঁ-না প্রশ্নে।", en: "**6** — reported questions: straight order, no do/does/did, if/whether for yes/no questions.", hi: "**6** — reported question: सीधा क्रम, do/does/did नहीं, हाँ-ना प्रश्न में if/whether।" },
            { bn: "**৭** — সময়-জায়গার শব্দ সরে: now→then, today→that day, here→there, tomorrow→the next day, ago→before।", en: "**7** — time-place words shift: now→then, today→that day, here→there, tomorrow→the next day, ago→before.", hi: "**7** — समय-स्थान शब्द खिसकते हैं: now→then, today→that day, here→there, tomorrow→the next day, ago→before।" },
            { bn: "**অনুশীলন** — আজকের কোনো সংবাদ পড়ে তার তিনটা বাক্য reported রূপে লিখুন; প্রতিটায় আলাদা রিপোর্টিং verb ব্যবহার করুন।", en: "**Practice** — take today's news and rewrite three of its sentences in reported form; use a different reporting verb in each.", hi: "**अभ्यास** — आज की कोई ख़बर पढ़कर उसके तीन वाक्य reported रूप में लिखें; हर एक में अलग रिपोर्टिंग verb लगाएँ।" },
          ],
          examples: [],
        },
      ],
      tips: [
        {
          bn: "said me ইংরেজিতে নেই — told me; অথবা said TO me। উদ্ধৃতির আগে ব্যক্তি থাকলে say, ব্যক্তি-সহ রিপোর্টে tell।",
          en: "There is no said me in English — told me, or said TO me. A bare quote follows say; a reported message to a person follows tell.",
          hi: "अंग्रेज़ी में said me नहीं है — told me, या said TO me। खाली उद्धरण say लेता है; व्यक्ति को रिपोर्ट tell करता है।",
        },
        {
          bn: "রিপোর্টিং verb অতীত দেখলেই backshift চালু করুন — তবে আগে প্রশ্ন করুন: কথাটা কি এখনও সত্যি? চিরন্তন সত্যে present থাকে।",
          en: "On seeing a past reporting verb, switch the backshift on — but first ask: is the statement still true? Universal truths keep the present.",
          hi: "अतीत रिपोर्टिंग verb देखते ही backshift चालू करें — पर पहले पूछें: कथन अब भी सच है? शाश्वत सत्य में present रहता है।",
        },
        {
          bn: "reported question-এ তিন মুছে-ফেলা: উল্টো গড়ন, do/does/did, প্রশ্নবোধক চিহ্ন — সব বিবৃতির গড়নে বদলে যায়।",
          en: "In a reported question three things vanish: inverted order, do/does/did, and the question mark — everything straightens into statement order.",
          hi: "reported question में तीन चीज़ें मिटती हैं: उलटा क्रम, do/does/did, प्रश्न-चिह्न — सब कथन-क्रम में बदल जाता है।",
        },
        {
          bn: "হ্যাঁ/না-প্রশ্নে if/whether + সোজা গড়ন; দুটোই চলে, তবে whether নির্দ্বিধায় আনুষ্ঠানিক লেখায় ভালো শোনায়।",
          en: "Yes/no questions take if/whether + straight order; both work, though whether sounds better in formal writing.",
          hi: "हाँ/ना-प्रश्न में if/whether + सीधा क्रम; दोनों चलते हैं, पर whether औपचारिक लेखन में बेहतर लगता है।",
        },
        {
          bn: "আদেশ told/ordered + ব্যক্তি + to; অনুরোধ asked + ব্যক্তি + to; নিষেধ not to — do-র কোনো চিহ্ন রিপোর্টে বাঁচে না।",
          en: "Commands: told/ordered + person + to; requests: asked + person + to; prohibitions: not to — no trace of do survives the report.",
          hi: "आदेश: told/ordered + व्यक्ति + to; अनुरोध: asked + व्यक्ति + to; निषेध: not to — do का कोई निशान रिपोर्ट में नहीं बचता।",
        },
        {
          bn: "verb-পরিবার মুখস্থ: admit/deny/mention + -ing; promise/agree/refuse/offer + to; suggest + -ing বা that; apologise for + -ing।",
          en: "Memorise the verb families: admit/deny/mention + -ing; promise/agree/refuse/offer + to; suggest + -ing or that; apologise for + -ing.",
          hi: "verb-परिवार रटें: admit/deny/mention + -ing; promise/agree/refuse/offer + to; suggest + -ing या that; apologise for + -ing।",
        },
        {
          bn: "explain/describe/suggest দুই object নেয় না — explained the rules TO us; ব্যক্তিকে to-এর পিছনে পাঠান।",
          en: "explain/describe/suggest take no double object — explained the rules TO us; send the listener behind to.",
          hi: "explain/describe/suggest दो objects नहीं लेते — explained the rules TO us; श्रोता को to के पीछे भेजें।",
        },
        {
          bn: "সময়-জায়গার শব্দ সরাতে ভুলবেন না: now→then, today→that day, yesterday→the day before, tomorrow→the next day, ago→before, here→there, this→that।",
          en: "Do not forget to shift the time-place words: now→then, today→that day, yesterday→the day before, tomorrow→the next day, ago→before, here→there, this→that.",
          hi: "समय-स्थान शब्द खिसकाना न भूलें: now→then, today→that day, yesterday→the day before, tomorrow→the next day, ago→before, here→there, this→that।",
        },
        {
          bn: "দীর্ঘ that-clause-এর শেষ-প্রান্তে ব্যাকশিফট ঝরে পড়ে — লেখা শেষে পুরো clause-এ একবার চোখ বুলান: has/will লুকিয়ে আছে কি?",
          en: "The backshift drips away at the end of long that-clauses — after writing, sweep the whole clause once: are has/will hiding there?",
          hi: "लंबे that-clause के छोर पर backshift टपक जाता है — लिखने के बाद पूरे clause पर एक नज़र डालें: has/will छिपे तो नहीं?",
        },
        {
          bn: "সংবাদ পড়তে পড়তেই রিপোর্টেড স্পিচ পাকা হয় — 'the minister admitted...', 'officials warned that...' ফ্রেমগুলো চোখে পড়ামাত্র প্যাটার্ন মিলিয়ে নিন।",
          en: "Reported speech ripens through news reading — the moment you see 'the minister admitted...' or 'officials warned that...', match the pattern against the families you know.",
          hi: "समाचार पढ़ते-पढ़ते ही reported speech पक्का होता है — 'the minister admitted...', 'officials warned that...' देखते ही पैटर्न अपने परिवारों से मिलाएँ।",
        },
      ],
      quiz: [
        {
          question: "He ______ me that he was busy with the audit.",
          options: ["said", "told", "spoke", "announced"],
          answer: 1,
          explanation: {
            bn: "ব্যক্তি-সহ রিপোর্টে tell — told me that...; said-এর সঙ্গে সরাসরি ব্যক্তি আসে না।",
            en: "A report to a person takes tell — told me that...; say never takes the person directly.",
            hi: "व्यक्ति को रिपोर्ट tell से — told me that...; say के साथ सीधे व्यक्ति नहीं आता।",
          },
        },
        {
          question: "She asked me where I ______.",
          options: ["do live", "did live", "lived", "live"],
          answer: 2,
          explanation: {
            bn: "reported question-এ সোজা গড়ন + ব্যাকশিফট — where I lived; do/did নেই, বর্তমান থাকলে live-ও হতো না।",
            en: "A reported question takes straight order + backshift — where I lived; no do/did, and even a present meaning would not keep live here.",
            hi: "reported question में सीधा क्रम + backshift — where I lived; do/did नहीं, और वर्तमान-अर्थ में भी live नहीं रहता।",
          },
        },
        {
          question: "The teacher said that water ______ at 100 degrees Celsius.",
          options: ["boiled", "had boiled", "boils", "was boiling"],
          answer: 2,
          explanation: {
            bn: "চিরন্তন বৈজ্ঞানিক সত্য — ব্যাকশিফট হয় না, present simple থাকে: boils।",
            en: "A universal scientific truth — no backshift; the present simple stays: boils.",
            hi: "शाश्वत वैज्ञानिक सत्य — backshift नहीं, present simple रहता है: boils।",
          },
        },
        {
          question: "He denied ______ the money from the drawer.",
          options: ["to take", "taking", "that he not took", "take"],
          answer: 1,
          explanation: {
            bn: "deny + -ing — He denied taking; অস্বীকার deny-র ভেতরেই, that...not জোড়ার দরকার নেই।",
            en: "deny + -ing — He denied taking; the negation lives inside deny, so no that...not is needed.",
            hi: "deny + -ing — He denied taking; इनकार deny के भीतर है, that...not की ज़रूरत नहीं।",
          },
        },
        {
          question: "The witness refused ______ any questions.",
          options: ["answering", "answer", "to answering", "to answer"],
          answer: 3,
          explanation: {
            bn: "refuse + to-infinitive — refused to answer; -ing পরিবারে refuse নেই।",
            en: "refuse + to-infinitive — refused to answer; refuse does not belong to the -ing family.",
            hi: "refuse + to-infinitive — refused to answer; refuse -ing परिवार में नहीं है।",
          },
        },
        {
          question: "She suggested ______ a taxi instead of walking in the rain.",
          options: ["to take", "taking", "that taking", "we taking"],
          answer: 1,
          explanation: {
            bn: "suggest + -ing বা suggest that + সোজা গড়ন — এখানে taking; suggest + object + to-infinitive অসম্ভব।",
            en: "suggest + -ing or suggest that + straight order — here taking; suggest + object + to-infinitive is impossible.",
            hi: "suggest + -ing या suggest that + सीधा क्रम — यहाँ taking; suggest + object + to-infinitive असंभव।",
          },
        },
        {
          question: "The manager told me ______ the revised report immediately.",
          options: ["that submit", "to submit", "submitting", "submit"],
          answer: 1,
          explanation: {
            bn: "আদেশের রিপোর্ট told + ব্যক্তি + to-infinitive — told me to submit।",
            en: "A command is reported as told + person + to-infinitive — told me to submit.",
            hi: "आदेश की रिपोर्ट told + व्यक्ति + to-infinitive — told me to submit।",
          },
        },
        {
          question: "He asked me ______ I had seen his keys anywhere.",
          options: ["that", "what", "if", "do"],
          answer: 2,
          explanation: {
            bn: "হ্যাঁ/না-প্রশ্নের রিপোর্ট if/whether + সোজা গড়ন — asked me if I had seen।",
            en: "A yes/no question is reported with if/whether + straight order — asked me if I had seen.",
            hi: "हाँ/ना-प्रश्न की रिपोर्ट if/whether + सीधा क्रम — asked me if I had seen।",
          },
        },
        {
          question: "Direct: 'I am leaving today.' — Reported: She said she was leaving ______.",
          options: ["today", "that day", "the day before", "tomorrow"],
          answer: 1,
          explanation: {
            bn: "সময়-শব্দও এক ধাপ সরে — today → that day; the day before হলো yesterday-র রূপান্তর।",
            en: "Time words step one away too — today → that day; the day before is the shift for yesterday.",
            hi: "समय-शब्द भी एक क़दम खिसकते हैं — today → that day; the day before yesterday का रूपांतर है।",
          },
        },
        {
          question: "Mother told me ______ the wet paint on the door.",
          options: ["do not touch", "not to touch", "to not touch", "don't touch"],
          answer: 1,
          explanation: {
            bn: "নিষেধের রিপোর্ট told + ব্যক্তি + not to + V1 — not to touch; do-র চিহ্ন রিপোর্টে বাঁচে না।",
            en: "A prohibition is reported as told + person + not to + V1 — not to touch; no trace of do survives.",
            hi: "निषेध की रिपोर्ट told + व्यक्ति + not to + V1 — not to touch; do का निशान नहीं बचता।",
          },
        },
      ],
    },
  },
];

export default SEED_GRAMMAR_V4_A2C;
