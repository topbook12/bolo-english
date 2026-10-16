// ─── Grammar seeds v4: ADVANCED batch A2A (2 lessons) ───
// Task 10-C13 — point-form roadmap upgrade. Source: grammar-v3-a2a.ts →
// "Inversion & Emphasis Structures" (sortOrder 5) + "Mixed & Inverted
// Conditionals" (sortOrder 6). Inversion: every trigger family gets its own
// section + formula box. Conditionals: mixed types (past→present, present→past)
// separated from inverted (Had/Were/Should) with time-referent mapping tables.
// title/intro/tips/quiz/examples copied UNCHANGED from the v3 source.
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_A2A: SeedGrammarV4Entry[] = [
  /* ── 1. Inversion & Emphasis Structures ───────────────────────────── */
  {
    topic: "Inversion & Emphasis Structures",
    level: "advanced",
    title: "Inversion & Emphasis Structures",
    unit: 0,
    sortOrder: 5,
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
      roadmap: [
        { bn: "🤔 ইনভার্শন কী — সাধারণ ক্রম উল্টে জোর দেওয়ার যন্ত্র", en: "🤔 What inversion is — the flip-the-order emphasis machine", hi: "🤔 inversion क्या है — क्रम उलटकर ज़ोर देने की मशीन" },
        { bn: "⚡ নেগেটিভ পরিবার: never, rarely, seldom, hardly, little, nowhere", en: "⚡ The negative family: never, rarely, seldom, hardly, little, nowhere", hi: "⚡ नकारात्मक परिवार: never, rarely, seldom, hardly, little, nowhere" },
        { bn: "⏱️ only-পরিবার: only then, only after, only when — মূল বাক্য উল্টে", en: "⏱️ The only-family: only then, only after, only when — main clause inverts", hi: "⏱️ only-परिवार: only then, only after, only when — मुख्य वाक्य उलटता है" },
        { bn: "🔗 Not only ... but also — প্রথম clause উল্টে, দ্বিতীয়টা সাধারণ", en: "🔗 Not only ... but also — first clause inverts, second stays plain", hi: "🔗 Not only ... but also — पहला clause उलटा, दूसरा सामान्य" },
        { bn: "📣 so/such কাঠামো: So loud was the music, Such was his anger", en: "📣 The so/such pattern: So loud was the music, Such was his anger", hi: "📣 so/such ढाँचा: So loud was the music, Such was his anger" },
        { bn: "⏳ no sooner...than আর hardly...when — দুই সময়-জুটি আলাদা করুন", en: "⏳ no sooner...than and hardly...when — keep the two pairs apart", hi: "⏳ no sooner...than और hardly...when — दोनों जोड़ियाँ अलग रखें" },
        { bn: "🚪 নিষেধের সীমানা: Nobody came, কথ্য ভাষা, not-এর সাধারণ জায়গা", en: "🚪 The limits: Nobody came, casual speech, plain not", hi: "🚪 सीमाएँ: Nobody came, बोलचाल, not की सामान्य जगह" },
        { bn: "🧰 কোন auxiliary বসবে — টেন্স অনুযায়ী ছক মিলান", en: "🧰 Picking the auxiliary — match it by tense", hi: "🧰 कौन सा auxiliary बैठेगा — tense के अनुसार तालिका" },
        { bn: "✍️ রচনা, বক্তৃতা, নোটিশ — কবে ঝকঝকে লাগে", en: "✍️ Essays, speeches, notices — when it shines", hi: "✍️ निबंध, भाषण, सूचना — कब चमकता है" },
        { bn: "🌉 if ছাড়া শর্তবাচক: Had I known — পরের পাঠের সেতু", en: "🌉 Conditionals without if: Had I known — a bridge to the next lesson", hi: "🌉 if के बिना conditional: Had I known — अगले पाठ का सेतु" },
        { bn: "⚠️ বাঙালি শিক্ষার্থীদের ৪টা সূক্ষ্ম ভুল আর প্রতিকার-মন্ত্র", en: "⚠️ Four subtle Bengali-speaker mistakes and the fix-mantra", hi: "⚠️ बांग्लाभाषी छात्रों की 4 सूक्ष्म गलतियाँ और उपाय-मंत्र" },
        { bn: "📖 ছোট প্যারায় ইনভার্শনের আসল কাজ", en: "📖 A short passage — inversion's real job", hi: "📖 छोटे अनुच्छेद में inversion का असली काम" },
        { bn: "📊 এক নজরে: মনে রাখার তালিকা আর অনুশীলন-সূত্র", en: "📊 At a glance: the keep-list and the drill", hi: "📊 एक नज़र में: याद रखने की सूची और अभ्यास-सूत्र" },
      ],
      sections: [
        {
          heading: { bn: "🤔 ইনভার্শন আসলে কী — আর কেন লাগে", en: "🤔 What inversion really is — and why it exists", hi: "🤔 इनवर्शन आसल में क्या है — और क्यों चाहिए" },
          lead: {
            bn: "সাধারণ বাক্যের ক্রম উল্টে জোর দেওয়ার ইংরেজি যন্ত্র — মূলমন্ত্রটা এখানেই।",
            en: "English's flip-the-order emphasis machine — the core mantra starts here.",
            hi: "क्रम उलटकर ज़ोर देने की अंग्रेज़ी मशीन — मूल मंत्र यहीं है।",
          },
          formula: {
            bn: "Trigger (never/rarely/hardly...) + auxiliary + কর্তা + মূল ক্রিয়া",
            en: "Trigger (never/rarely/hardly...) + auxiliary + subject + main verb",
            hi: "Trigger (never/rarely/hardly...) + auxiliary + कर्ता + मुख्य क्रिया",
          },
          points: [
            { bn: "**সাধারণ ক্রম** — Subject + auxiliary + main verb: I have never seen such a view।", en: "**Normal order** — Subject + auxiliary + main verb: I have never seen such a view.", hi: "**सामान्य क्रम** — Subject + auxiliary + main verb: I have never seen such a view।" },
            { bn: "**শুরুতে নেগেটিভ/সীমাবদ্ধকারী** (never, rarely, seldom, hardly, little, not only, nowhere) বসলে auxiliary কর্তার সামনে।", en: "**Front a negative/restrictive word** (never, rarely, seldom, hardly, little, not only, nowhere) and the auxiliary moves before the subject.", hi: "**शुरुआत में नकारात्मक/सीमितकर्ता** (never, rarely, seldom, hardly, little, not only, nowhere) आए तो auxiliary कर्ता से पहले आता है।" },
            { bn: "ফলে বাক্যটা হয়: Never have I seen such a view — অর্থ আগেরটাই, জোর অনেক বেশি।", en: "The result: Never have I seen such a view — same meaning, far stronger emphasis.", hi: "परिणाम: Never have I seen such a view — अर्थ वही, ज़ोर बहुत अधिक।" },
            { bn: "এটা ব্যাকরণের খেলা নয় — **ভাষার জোর-দেওয়ার অভ্যাস**: শুরুতে অস্বাভাবিক কিছু বসলে শ্রোতার কান খাড়া হয়।", en: "This is not grammar for its own sake — **it is an emphasis habit**: something unusual at the start makes ears perk up.", hi: "यह व्याकरण का खेल नहीं — **भाषा की ज़ोर-देने की आदत** है: शुरुआत में असामान्य चीज़ सुननेवाले के कान खड़े हो जाते हैं।" },
            { bn: "**inversion মানেই প্রশ্ন নয়** — auxiliary প্রশ্নের মতোই বসে, কিন্তু শেষে বিন্দু (.), প্রশ্নবোধক (?) নয়।", en: "**Inversion is not a question** — the auxiliary sits as in a question, but the sentence ends with a full stop (.), never a question mark.", hi: "**inversion का मतलब प्रश्न नहीं** — auxiliary प्रश्न जैसा ही बैठता है, पर अंत में बिंदु (.), प्रश्नचिह्न (?) नहीं।" },
          ],
          examples: [
            { wrong: "Never I have seen such a beautiful sunset.", right: "Never have I seen such a beautiful sunset.", note: { bn: "never শুরুতে এলেই have কর্তার (I) সামনে চলে যাবে — এটাই inversion-এর মূল নিয়ম।", en: "A front-placed never forces have before the subject — that is the core inversion rule.", hi: "शुरुआत में never आते ही have कर्ता (I) से पहले चला जाता है — यही inversion का मूल नियम।" } },
            { wrong: "Rarely she misses her morning walk.", right: "Rarely does she miss her morning walk.", note: { bn: "present simple-এর বাক্যে কোনো auxiliary থাকে না, তাই do/does/did ডেকে আনতে হয়: does she miss।", en: "Present-simple sentences have no auxiliary of their own, so do/does/did must be borrowed: does she miss.", hi: "present simple में auxiliary नहीं होता, इसलिए do/does/did लाना पड़ता है: does she miss।" } },
            { wrong: "Hardly I had reached the station when the train left.", right: "Hardly had I reached the station when the train left.", note: { bn: "hardly ... when জুটিতে প্রথম clause-এ past perfect থাকে, আর শুরুতে hardly এলে had কর্তার সামনে।", en: "In the hardly ... when pair the first clause is past perfect, and a front-placed hardly puts had before the subject.", hi: "hardly ... when जोड़ी में पहला clause past perfect होता है, और शुरुआत में hardly हो तो had कर्ता से पहले।" } },
            { wrong: "Little they knew that the plan had failed.", right: "Little did they know that the plan had failed.", note: { bn: "little (অল্পই) নেগেটিভ আভাস দেয়, তাই did they know — এটা এক জনপ্রিয় সাহিত্যিক কাঠামো।", en: "'Little' is restrictive, so little did they know — a favourite literary pattern.", hi: "'little' सीमित करने वाला है, इसलिए little did they know — प्रिय साहित्यिक ढाँचा।" } },
            { wrong: "Never have I went to Cox's Bazar.", right: "Never have I been to Cox's Bazar.", note: { bn: "inversion হলেও মূল টেন্স বদলায় না — have-এর পরে V3 (been), V2 (went) নয়।", en: "Inversion changes the order, never the tense — after have comes V3 (been), not V2 (went).", hi: "inversion होने पर भी tense नहीं बदलता — have के बाद V3 (been), V2 (went) नहीं।" } },
          ],
        },
        {
          heading: { bn: "⚡ নেগেটিভ পরিবার: never, rarely, seldom, hardly, little, nowhere", en: "⚡ The negative family: never, rarely, seldom, hardly, little, nowhere", hi: "⚡ नकारात्मक परिवार: never, rarely, seldom, hardly, little, nowhere" },
          lead: {
            bn: "সবচেয়ে বড় ট্রিগার পরিবার — শুরুতে এলেই auxiliary কর্তার সামনে চলে আসবে।",
            en: "The biggest trigger family — front one of these and the auxiliary jumps before the subject.",
            hi: "सबसे बड़ा ट्रिगर परिवार — शुरुआत में आते ही auxiliary कर्ता से पहले चला आएगा।",
          },
          formula: {
            bn: "Never/Seldom/Little/Nowhere + auxiliary + কর্তা + মূল ক্রিয়া",
            en: "Never/Seldom/Little/Nowhere + auxiliary + subject + main verb",
            hi: "Never/Seldom/Little/Nowhere + auxiliary + कर्ता + मुख्य क्रिया",
          },
          points: [
            { bn: "**পরিসংখ্যান-জাতীয় নেগেটিভ** — never, rarely, seldom, hardly (ever), scarcely (ever), little।", en: "**Frequency-type negatives** — never, rarely, seldom, hardly (ever), scarcely (ever), little.", hi: "**परिसंख्यान-प्रकार के नकारात्मक** — never, rarely, seldom, hardly (ever), scarcely (ever), little।" },
            { bn: "**nowhere**-ও এই পরিবারের — স্থানের পূর্ণ নেতিবাচক: Nowhere could I find my passport।", en: "**Nowhere** belongs here too — a full negative of place: Nowhere could I find my passport.", hi: "**nowhere** भी इसी परिवार का है — स्थान का पूर्ण नकारात्मक: Nowhere could I find my passport।" },
            { bn: "**নেগেটিভ ফ্রেজ** — at no time, in no way, under no circumstances, on no account: শুরুতে এলে তাও উল্টে।", en: "**Negative phrases** — at no time, in no way, under no circumstances, on no account: fronted, they invert too.", hi: "**नकारात्मक वाक्यांश** — at no time, in no way, under no circumstances, on no account: शुरुआत में आएं तो ये भी उलटते हैं।" },
            { bn: "এই পরিবার শুরুতে বসলেই inversion বাধ্যতামূলক — Never have I seen..., Under no circumstances should you...।", en: "Fronted, this family makes inversion compulsory — Never have I seen..., Under no circumstances should you....", hi: "यह परिवार शुरुआत में आए तो inversion अनिवार्य — Never have I seen..., Under no circumstances should you...।" },
            { bn: "মাঝে থাকলে সাধারণ ক্রমই — I have never seen such a view যেমন আছে তেমনই থাকে।", en: "Mid-position keeps the plain order — I have never seen such a view stays exactly as it is.", hi: "बीच में हो तो सामान्य क्रम ही — I have never seen such a view जैसा है वैसा ही रहता है।" },
          ],
          examples: [
            { wrong: "Under no circumstances you should share your PIN.", right: "Under no circumstances should you share your PIN.", note: { bn: "প্রি-পোজিশনাল ফ্রেজ (under no circumstances) শুরুতে এলেও auxiliary (should) কর্তার সামনে — ব্যাংক-পত্রে এই কাঠামোই দেখবেন।", en: "Even a fronted prepositional phrase (under no circumstances) triggers should you — the standard formal-notice pattern.", hi: "शुरुआत में under no circumstances जैसा वाक्यांश हो तो भी should कर्ता से पहले आता है।" } },
            { wrong: "Nowhere I could find my passport.", right: "Nowhere could I find my passport.", note: { bn: "nowhere-ও নেগেটিভ পরিবারের — শুরুতে এলে could I find।", en: "Nowhere belongs to the negative family: nowhere could I find...", hi: "nowhere नकारात्मक परिवार का है: nowhere could I find..." } },
          ],
        },
        {
          heading: { bn: "⏱️ only-পরিবার: only then, only after, only when, only later", en: "⏱️ The only-family: only then, only after, only when, only later", hi: "⏱️ only-परिवार: only then, only after, only when, only later" },
          lead: {
            bn: "শুরুতে only এলে উপবাক্য নয় — মূল clause-টাই উল্টে যায়।",
            en: "With only up front, the MAIN clause inverts — never the subordinate one.",
            hi: "शुरुआत में only आए तो उपवाक्य नहीं — मुख्य clause ही उलटता है।",
          },
          formula: {
            bn: "Only + সময়/বাক্যাংশ + auxiliary + কর্তা + মূল ক্রিয়া",
            en: "Only + time/phrase + auxiliary + subject + main verb",
            hi: "Only + समय/वाक्यांश + auxiliary + कर्ता + मुख्य क्रिया",
          },
          points: [
            { bn: "**only then, only later, only in this way, only rarely** — ছোট বাক্যাংশ শুরুতে এলেই inversion।", en: "**Only then, only later, only in this way, only rarely** — front these short phrases and inversion follows.", hi: "**only then, only later, only in this way, only rarely** — छोटे वाक्यांश शुरुआत में आएं तो inversion।" },
            { bn: "**only after / only when + উপবাক্য** — শুরুতে এলে মূল clause উল্টে: Only after the rain stopped did we leave।", en: "**Only after / only when + clause** — fronted, the main clause inverts: Only after the rain stopped did we leave.", hi: "**only after / only when + उपवाक्य** — शुरुआत में आए तो मुख्य clause उलटता है: Only after the rain stopped did we leave।" },
            { bn: "উল্টবে **মূল clause-টাই** — only-উপবাক্য নয়: did we leave, উপবাক্যে নয়।", en: "It is the **main clause** that inverts — not the only-clause: did we leave, not the time part.", hi: "उलटता है **मुख्य clause** — only-उपवाक्य नहीं: did we leave, उपवाक्य में नहीं।" },
            { bn: "**only + স্থান-বাক্যাংশ**-ও চলে: Only in Dhaka can you find this street food।", en: "**Only + place phrase** works too: Only in Dhaka can you find this street food.", hi: "**only + स्थान-वाक्यांश** भी चलता है: Only in Dhaka can you find this street food।" },
            { bn: "উপদেশমূলক লেখায় দুর্দান্ত: Only when you practice every day does fluency come।", en: "Brilliant in advice-writing: Only when you practice every day does fluency come.", hi: "सलाह-लेखन में शानदार: Only when you practice every day does fluency come।" },
          ],
          examples: [
            { wrong: "Only after the meeting I understood the problem.", right: "Only after the meeting did I understand the problem.", note: { bn: "only + সময়-বাক্যাংশ শুরুতে থাকলে মূল clause-এ did I understand — উপবাক্য নয়, প্রধান বাক্য উল্টে।", en: "Only + time phrase fronts the main clause inversion: did I understand (not the subordinate clause).", hi: "only + समय-वाक्यांश शुरुआत में हो तो मुख्य clause उलटता है: did I understand।" } },
            { wrong: "Only in Dhaka you can find this street food.", right: "Only in Dhaka can you find this street food.", note: { bn: "only + স্থান-বাক্যাংশও উল্টায়: can you find। 'you can find' রাখলে জোরটাই হারিয়ে যায়।", en: "Only + place phrase also inverts: only in Dhaka can you find...", hi: "only + स्थान-वाक्यांश भी उलटता है: only in Dhaka can you find..." } },
            { wrong: "Only when you practice every day, fluency comes.", right: "Only when you practice every day does fluency come.", note: { bn: "only-উপবাক্যের পরে মূল বাক্য উল্টে: does fluency come — এই কাঠামো উপদেশমূলক লেখায় দুর্দান্ত।", en: "After an only-clause the main clause inverts: only when you practice every day does fluency come.", hi: "only-उपवाक्य के बाद मुख्य वाक्य उलटता है: does fluency come।" } },
          ],
        },
        {
          heading: { bn: "🔗 Not only ... but also — প্যারা-জোড়ার উল্টানো", en: "🔗 Not only ... but also — the paragraph-joiner", hi: "🔗 Not only ... but also — अनुच्छेद-जोड़ने वाला" },
          lead: {
            bn: "দুই clause জোড়ার জোরদার যন্ত্র — প্রথমটা উল্টে, দ্বিতীয়টা সাধারণ সুরে।",
            en: "The emphasis joiner for two clauses — invert the first, keep the second plain.",
            hi: "दो clauses जोड़ने वाला ज़ोर-यंत्र — पहला उलटा, दूसरा साधारण सुर में।",
          },
          formula: {
            bn: "Not only + auxiliary + কর্তা + মূল ক্রিয়া, but + কর্তা + also + ...",
            en: "Not only + auxiliary + subject + main verb, but + subject + also + ...",
            hi: "Not only + auxiliary + कर्ता + मुख्य क्रिया, but + कर्ता + also + ...",
          },
          points: [
            { bn: "**Not only ... but also** — দুই পূর্ণ clause জোড়ার জোরদার যন্ত্র (প্যারা-জোড়া)।", en: "**Not only ... but also** — the emphasis joiner for two full clauses (the paragraph-pair).", hi: "**Not only ... but also** — दो पूर्ण clauses जोड़ने वाला ज़ोर-यंत्र (अनुच्छेद-जोड़ी)।" },
            { bn: "**প্রথম clause উল্টে** — Not only had he lost his keys; but also-র পরে সাধারণ ক্রম।", en: "**The first clause inverts** — Not only had he lost his keys; the but also part stays plain.", hi: "**पहला clause उलटता है** — Not only had he lost his keys; but also के बाद सामान्य क्रम।" },
            { bn: "but also-র ভিতরে **also-এর জায়গা কর্তার পরে** — but he had also lost his phone।", en: "Inside but also, **also sits after the subject** — but he had also lost his phone.", hi: "but also के भीतर **also की जगह कर्ता के बाद** — but he had also lost his phone।" },
            { bn: "Not only কখনো একা থাকে না — **but also / ...but ... as well** জুটি সম্পূর্ণ করতেই হয়।", en: "Not only never travels alone — you must complete the pair with **but also / ...but ... as well**.", hi: "Not only कभी अकेला नहीं आता — **but also / ...but ... as well** से जोड़ी पूरी करनी ही होगी।" },
          ],
          examples: [
            { wrong: "Not only he lost his keys, but he also lost his phone.", right: "Not only had he lost his keys, but he had also lost his phone.", note: { bn: "Not only-র পরেই প্রথম clause উল্টবে: had he lost; but also-র পরে সাধারণ ক্রম।", en: "Not only inverts the FIRST clause: not only had he lost..., but he had also lost...", hi: "Not only के बाद पहला clause उलटता है: not only had he lost..., but he had also lost..." } },
            { wrong: "Not only she sings well, but she dances also.", right: "Not only does she sing well, but she also dances beautifully.", note: { bn: "Not only-র পরে does she sing (উল্টানো + মূল রূপ); but also-র ভিতরে also-এর অবস্থান subject-এর পরে।", en: "Not only does she sing..., but she also dances... — first clause inverted, also tucked after the subject.", hi: "Not only does she sing..., but she also dances... — पहला clause उलटा, also कर्ता के बाद।" } },
          ],
        },
        {
          heading: { bn: "📣 so/such কাঠামো: So loud was the music...", en: "📣 The so/such pattern: So loud was the music...", hi: "📣 so/such ढाँचा: So loud was the music..." },
          lead: {
            bn: "so আর such শুরুতে এলে বিশেষণ/ক্রিয়া প্রথমে, কর্তা পরে।",
            en: "Fronted so and such put the adjective/verb first and the subject after.",
            hi: "शुरुआत में so और such आएं तो विशेषण/क्रिया पहले, कर्ता बाद में।",
          },
          formula: {
            bn: "So + adjective + be-verb + কর্তা + that ... | Such + be-verb + কর্তা + that ...",
            en: "So + adjective + be + subject + that ... | Such + be + subject + that ...",
            hi: "So + विशेषण + be + कर्ता + that ... | Such + be + कर्ता + that ...",
          },
          points: [
            { bn: "**so + adjective** শুরুতে এলে adjective-টা so-এর সাথে উপরে ওঠে: So loud was the music that...।", en: "**Fronted so + adjective** takes the adjective up with it: So loud was the music that....", hi: "**so + विशेषण** शुरुआत में आए तो विशेषण so के साथ ऊपर उठता है: So loud was the music that...।" },
            { bn: "ভিতরের ক্রম **adjective + be-verb + কর্তা** — So bad was the weather that we stayed home।", en: "The inner order is **adjective + be-verb + subject** — So bad was the weather that we stayed home.", hi: "भीतरी क्रम **विशेषण + be-verb + कर्ता** — So bad was the weather that we stayed home।" },
            { bn: "**such**-কাঠামো: Such + was/were + কর্তা + that ... — Such was his anger that...।", en: "The **such**-pattern: Such + was/were + subject + that ... — Such was his anger that....", hi: "**such**-ढाँचा: Such + was/were + कर्ता + that ... — Such was his anger that...।" },
            { bn: "দুই কাঠামোতেই ফলাফলটা **that-ক্লজে** থাকে — জোর শুরুতে, ফল শেষে।", en: "In both patterns the outcome lives in the **that-clause** — emphasis up front, result at the end.", hi: "दोनों ढाँचे में परिणाम **that-क्लॉज़** में रहता है — ज़ोर शुरुआत में, परिणाम अंत में।" },
          ],
          examples: [
            { wrong: "So the weather was bad that we stayed home.", right: "So bad was the weather that we stayed home.", note: { bn: "so + বিশেষণ শুরুতে এলে বিশেষণটাও so-এর সাথে উপরে ওঠে: So bad was the weather — এই কাঠামোতে adjective-টা so-এর ঠিক পরে বসে।", en: "With fronted so + adjective, the adjective travels with so: So bad was the weather that...", hi: "so + विशेषण शुरुआत में हो तो विशेषण so के साथ ऊपर आता है: So bad was the weather that..." } },
            { wrong: "So beautiful the place was that everyone took photos.", right: "So beautiful was the place that everyone took photos.", note: { bn: "so + adjective-কাঠামোয় adjective সবার আগে, তারপর verb, তারপর কর্তা — একবার মুখস্থ করলেই নমুনা চোখে পড়বে।", en: "In the so + adjective pattern the order is adjective + verb + subject: so beautiful was the place that...", hi: "so + विशेषण ढाँचे में क्रम: विशेषण + क्रिया + कर्ता — so beautiful was the place that..." } },
            { wrong: "Such the situation was that we called the police.", right: "Such was the situation that we called the police.", note: { bn: "such-কাঠামো: Such + was/were + কর্তা + that ... — such সবার আগে, তারপর ক্রিয়া।", en: "The such-pattern: Such + was/were + subject + that ... — such leads, verb follows.", hi: "such-ढाँचा: Such + was/were + कर्ता + that ... — such पहले, फिर क्रिया।" } },
          ],
        },
        {
          heading: { bn: "⏳ no sooner...than আর hardly...when — দুই জুটি", en: "⏳ no sooner...than and hardly...when — two pairs", hi: "⏳ no sooner...than और hardly...when — दो जोड़ियाँ" },
          lead: {
            bn: "ঘটনা ঘটতেই ঘটল এই বোঝাতে দুটো সময়-জুটি — গুলিয়ে ফেলবেন না।",
            en: "Two time-pairs that say the event happened instantly — never mix them.",
            hi: "घटना तुरंत घटित होने की दो समय-जोड़ियाँ — न मिलाएँ।",
          },
          formula: {
            bn: "No sooner/Hardly + had + কর্তা + V3 ... than/when + অতীত simple",
            en: "No sooner/Hardly + had + subject + V3 ... than/when + past simple",
            hi: "No sooner/Hardly + had + कर्ता + V3 ... than/when + भूतकाल simple",
          },
          points: [
            { bn: "**No sooner ... than** — No sooner had we sat down than the phone rang।", en: "**No sooner ... than** — No sooner had we sat down than the phone rang.", hi: "**No sooner ... than** — No sooner had we sat down than the phone rang।" },
            { bn: "**Hardly ... when** — Hardly had we started when it began to rain।", en: "**Hardly ... when** — Hardly had we started when it began to rain.", hi: "**Hardly ... when** — Hardly had we started when it began to rain।" },
            { bn: "প্রথম clause-এ **past perfect (had + V3)**, দ্বিতীয়তে অতীত simple।", en: "The first clause takes **past perfect (had + V3)**, the second past simple.", hi: "पहले clause में **past perfect (had + V3)**, दूसरे में भूतकाल simple।" },
            { bn: "শুরুতে no sooner/hardly এলেই **had কর্তার সামনে**।", en: "Fronted no sooner/hardly always lifts **had before the subject**.", hi: "शुरुआत में no sooner/hardly आए तो **had कर्ता से पहले**।" },
            { bn: "জুটি গুলিয়ে ফেলবেন না — **hardly-র সাথে when**, than-এর সাথে no sooner।", en: "Never mix the pairs — **hardly goes with when**, than goes with no sooner.", hi: "जोड़ियाँ न मिलाएँ — **hardly की जोड़ी when**, than की जोड़ी no sooner।" },
          ],
          examples: [
            { wrong: "Hardly had we started than it began to rain.", right: "Hardly had we started when it began to rain.", note: { bn: "hardly-র জুটি when; than-এর জুটি no sooner: 'No sooner had we started than it began to rain.' দুই জুটি গুলিয়ে ফেলবেন না।", en: "Hardly pairs with when; than pairs with no sooner: 'No sooner had we started than...'. Keep the pairs straight.", hi: "hardly की जोड़ी when है; than की जोड़ी no sooner से है। दोनों जोड़ियाँ न मिलाएँ।" } },
            { wrong: "No sooner we had sat down than the phone rang.", right: "No sooner had we sat down than the phone rang.", note: { bn: "no sooner-ও শুরুতে এলে উল্টে: had we sat down ... than। পরের অংশে than + অতীত simple।", en: "Fronted no sooner also inverts: no sooner had we sat down than... (than + past simple).", hi: "शुरुआत में no sooner हो तो भी उलटता है: no sooner had we sat down than... (than + भूतकाल)।" } },
            { wrong: "Hardly the show started when the power went out.", right: "Hardly had the show started when the power went out.", note: { bn: "hardly-ক্লজে past perfect (had started) + পরের ক্লজে অতীত simple (went out) — সময়ের স্তরমিল জরুরি।", en: "The hardly-clause takes past perfect (had started) and the when-clause past simple (went out).", hi: "hardly-वाक्यांश में past perfect (had started) और when-वाक्यांश में भूतकाल (went out)।" } },
          ],
        },
        {
          heading: { bn: "🚪 কোথায় ইনভার্শন করবেন না — নিষেধের সীমানা", en: "🚪 Where inversion is wrong", hi: "🚪 कहाँ inversion ग़लत है" },
          lead: {
            bn: "প্রতিটি 'শুরুতে নেগেটিভ' বাক্য উল্টে না — সীমানাগুলো জেনে নিন।",
            en: "Not every fronted negative inverts — learn the boundary lines.",
            hi: "हर 'शुरुआत में नकारात्मक' वाक्य नहीं उलटता — सीमाएँ जान लें।",
          },
          points: [
            { bn: "প্রতিটি 'শুরুতে নেগেটিভ' বাক্য উল্টে না — উল্টায় শুধু যখন শব্দটা **পুরো clause-কে modify** করে।", en: "Not every fronted negative inverts — only when the word **modifies the whole clause**.", hi: "हर 'शुरुआत में नकारात्मक' वाक्य नहीं उलटता — तभी जब शब्द **पूरे clause को modify** करे।" },
            { bn: "**কর্তার অংশ হিসেবে নেগেটিভ** (Nobody came, Nothing happened) সাধারণ ক্রমেই — 'Nobody did come' ভুল।", en: "**Negatives inside the subject** (Nobody came, Nothing happened) keep plain order — 'Nobody did come' is wrong.", hi: "**कर्ता के रूप में नकारात्मक** (Nobody came, Nothing happened) सामान्य क्रम में — 'Nobody did come' ग़लत।" },
            { bn: "**not-এর সাধারণ অবস্থান** (I do not like it) কখনো উল্টায় না।", en: "**The normal position of not** (I do not like it) never inverts.", hi: "**not की सामान्य स्थिति** (I do not like it) कभी नहीं उलटती।" },
            { bn: "**কথ্য ভাষায় inversion বিরল** — চায়ের দোকানে 'I rarely drink tea' বলুন, 'Rarely do I drink tea' নয়।", en: "**In casual speech inversion is rare** — at the tea stall say 'I rarely drink tea', not 'Rarely do I drink tea'.", hi: "**बोलचाल में inversion दुर्लभ** — चाय की दुकान पर 'I rarely drink tea' कहें, 'Rarely do I drink tea' नहीं।" },
            { bn: "inversion আসলে **লেখা, বক্তৃতা, formal notice**-এর অস্ত্র।", en: "Inversion is really the weapon of **writing, speeches and formal notices**.", hi: "inversion असल में **लेखन, भाषण, formal notice** का हथियार है।" },
          ],
          examples: [
            { wrong: "Nobody did come to the meeting.", right: "Nobody came to the meeting.", note: { bn: "Nobody/Nothing/No one কর্তার জায়গায় থাকলে বাক্য উল্টে না — সাধারণ ক্রমই শুদ্ধ।", en: "Negatives as the subject (Nobody/Nothing/No one) never invert — plain order is correct.", hi: "कर्ता के रूप में Nobody/Nothing आए तो वाक्य नहीं उलटता — सामान्य क्रम सही।" } },
            { wrong: "Never I like coffee. (everyday chat)", right: "I never like coffee. (everyday chat) / Never have I liked coffee. (formal)", note: { bn: "সাধারণ কথাবার্তায় সাধারণ ক্রমই স্বাভাবিক; inversion বেছে নিলে বক্তব্য নাটকীয়/আনুষ্ঠানিক হয়ে যায় — প্রসঙ্গ বেছে নিন।", en: "In casual talk the plain order is natural; choosing inversion makes it theatrical/formal — pick by context.", hi: "आम बातचीत में सामान्य क्रम ही स्वाभाविक है; inversion चुनने से भाषा औपचारिक हो जाती है।" } },
            { wrong: "I never have seen this movie, never have I.", right: "I have never seen this movie.", note: { bn: "have-এর পরে never-ই স্বাভাবিক জায়গা; দুইবার never/inversion জুড়লে বাক্য ভারী ও ভুল হয়।", en: "Mid-position never (have never seen) is the normal choice; stacking double inversion muddles the sentence.", hi: "have never seen (मध्य स्थिति) ही सामान्य है; दोहरा inversion वाक्य बिगाड़ देता है।" } },
            { wrong: "Never he told me about it. (in writing, aiming at emphasis)", right: "Never did he tell me about it.", note: { bn: "অতীত simple + শুরুতে never = did he tell; খালি 'Never he told' লিখলে নিয়ম ভাঙে — পরীক্ষা/লেখায় নাম্বার কাটে।", en: "Past simple + fronted never = never did he tell; 'Never he told' breaks the rule and costs marks in exams.", hi: "भूतकाल + शुरुआत में never = never did he tell; 'Never he told' नियम तोड़ता है।" } },
          ],
        },
        {
          heading: { bn: "🧰 কোন auxiliary বসবে — টেন্স অনুযায়ী বাছাই", en: "🧰 Choosing the right auxiliary", hi: "🧰 कौन सा auxiliary बैठेगा — tense के अनुसार" },
          lead: {
            bn: "auxiliary বাছাই প্রশ্ন-বাক্যের মতোই — টেন্স যা, auxiliary তাই।",
            en: "Choose the auxiliary exactly as in a question — the tense decides.",
            hi: "auxiliary चुनना प्रश्न-वाक्य जैसा ही है — tense जो, auxiliary वही।",
          },
          formula: {
            bn: "টেন্সের auxiliary + কর্তা + মূল ক্রিয়া (প্রশ্নের auxiliary-ই সামনে)",
            en: "the tense's auxiliary + subject + main verb (borrow the question's auxiliary)",
            hi: "tense का auxiliary + कर्ता + मुख्य क्रिया (प्रश्न का auxiliary आगे)",
          },
          points: [
            { bn: "auxiliary বাছাই **একদম প্রশ্ন-বাক্যের মতো** — বাক্যের টেন্স যা, auxiliary তাই।", en: "Pick the auxiliary **exactly as in a question** — the sentence's tense decides.", hi: "auxiliary चुनना **बिल्कुल प्रश्न-वाक्य जैसा** — वाक्य का tense तय करता है।" },
            { bn: "**বর্তমান simple → do/does** — Never does he complain।", en: "**Present simple → do/does** — Never does he complain.", hi: "**वर्तमान simple → do/does** — Never does he complain।" },
            { bn: "**অতীত simple → did** — Never did he complain।", en: "**Past simple → did** — Never did he complain.", hi: "**भूतकाल simple → did** — Never did he complain।" },
            { bn: "**present perfect → have/has** (Rarely has she smiled), **past perfect → had** (Hardly had we begun)।", en: "**Present perfect → have/has** (Rarely has she smiled), **past perfect → had** (Hardly had we begun).", hi: "**present perfect → have/has** (Rarely has she smiled), **past perfect → had** (Hardly had we begun)।" },
            { bn: "**be-verb থাকলে be-ই উঠে আসে** — Never was he aware; **modal থাকলে modal-ই** — Under no circumstances must you panic।", en: "**With a be-verb, be itself rises** — Never was he aware; **with a modal, the modal rises** — Under no circumstances must you panic.", hi: "**be-verb हो तो be स्वयं ऊपर** — Never was he aware; **modal हो तो modal स्वयं** — Under no circumstances must you panic।" },
            { bn: "সবচেয়ে কমন ভুল **টেন্স-বেমেল** — 'Rarely has he came' ভুল → 'Rarely has he come' শুদ্ধ।", en: "The most common error is a **tense mismatch** — 'Rarely has he came' is wrong → 'Rarely has he come' is right.", hi: "सबसे आम गलती **tense-बेमेल** — 'Rarely has he came' ग़लत → 'Rarely has he come' शुद्ध।" },
          ],
          table: {
            head: [{ bn: "টেন্স", en: "Tense", hi: "Tense" }, { bn: "auxiliary", en: "auxiliary", hi: "auxiliary" }, { bn: "নমুনা", en: "Sample", hi: "नमूना" }],
            rows: [
              [{ bn: "present simple", en: "present simple", hi: "present simple" }, { bn: "do / does", en: "do / does", hi: "do / does" }, { bn: "Never does he complain", en: "Never does he complain", hi: "Never does he complain" }],
              [{ bn: "past simple", en: "past simple", hi: "past simple" }, { bn: "did", en: "did", hi: "did" }, { bn: "Never did he complain", en: "Never did he complain", hi: "Never did he complain" }],
              [{ bn: "present perfect", en: "present perfect", hi: "present perfect" }, { bn: "have / has", en: "have / has", hi: "have / has" }, { bn: "Rarely has she smiled", en: "Rarely has she smiled", hi: "Rarely has she smiled" }],
              [{ bn: "past perfect", en: "past perfect", hi: "past perfect" }, { bn: "had", en: "had", hi: "had" }, { bn: "Hardly had we begun", en: "Hardly had we begun", hi: "Hardly had we begun" }],
              [{ bn: "be-verb", en: "be-verb", hi: "be-verb" }, { bn: "be নিজেই", en: "be itself", hi: "be स्वयं" }, { bn: "Never was he aware", en: "Never was he aware", hi: "Never was he aware" }],
              [{ bn: "modal", en: "modal", hi: "modal" }, { bn: "modal নিজেই", en: "the modal itself", hi: "modal स्वयं" }, { bn: "Under no circumstances must you panic", en: "Under no circumstances must you panic", hi: "Under no circumstances must you panic" }],
            ],
          },
          examples: [
            { wrong: "Seldom he is late for class.", right: "Seldom is he late for class.", note: { bn: "be-verb নিজেই auxiliary-এর কাজ করে — is সরাসরি কর্তার সামনে, নতুন do লাগে না।", en: "Be is its own auxiliary — is moves in front, no extra do needed.", hi: "be-verb स्वयं auxiliary का काम करता है — is सीधे कर्ता से पहले, do की ज़रूरत नहीं।" } },
            { wrong: "Rarely has he came on time.", right: "Rarely has he come on time.", note: { bn: "has থাকলে মূল ক্রিয়া V3 (come) — অতীত রূপ (came) has-এর সাথে কখনো যায় না।", en: "With has, the main verb stays V3 (come) — V2 (came) never pairs with has.", hi: "has के साथ मुख्य क्रिया V3 (come) — V2 (came) has के साथ कभी नहीं जाता।" } },
            { wrong: "Never did she knew the answer.", right: "Never did she know the answer.", note: { bn: "did বসলে মূল ক্রিয়া মূল রূপে (know) ফিরে আসে — did-এর অতীত ভার তখন did-ই বহন করে।", en: "After did, the main verb returns to base form (know) — did carries the past all by itself.", hi: "did के बाद मुख्य क्रिया मूल रूप में (know) — did अकेला ही भूतकाल वहन करता है।" } },
          ],
        },
        {
          heading: { bn: "✍️ লেখায় ব্যবহার — কবে ঝকঝকে লাগে", en: "✍️ Using inversion in real writing", hi: "✍️ लेखन में प्रयोग — कब चमकता है" },
          lead: {
            bn: "তিন জায়গায় inversion সবচেয়ে ঝকঝকে — আর প্যারা-প্রতি একটাই যথেষ্ট।",
            en: "Three places where inversion shines — and one per paragraph is plenty.",
            hi: "तीन जगह जहाँ inversion चमकता है — और प्रति अनुच्छेद एक ही काफ़ी।",
          },
          points: [
            { bn: "**রচনা/প্রবন্ধের শুরু** — Never before have students had so much free content: প্রথম বাক্যে বসলে পুরো প্যারা গুরুত্বপূর্ণ হয়ে ওঠে।", en: "**Essay openings** — Never before have students had so much free content: in the first sentence it lifts the whole paragraph.", hi: "**निबंध की शुरुआत** — Never before have students had so much free content: पहले वाक्य में हो तो पूरा अनुच्छेद महत्वपूर्ण हो उठता है।" },
            { bn: "**বক্তৃতার শেষ-জোর** — Not only will this save time, but it will also save money।", en: "**Speech closers** — Not only will this save time, but it will also save money.", hi: "**भाषण का समापन-ज़ोर** — Not only will this save time, but it will also save money।" },
            { bn: "**আনুষ্ঠানিক নোটিশ** — Under no circumstances is smoking allowed।", en: "**Formal notices** — Under no circumstances is smoking allowed.", hi: "**औपचारिक सूचना** — Under no circumstances is smoking allowed।" },
            { bn: "প্যারা-প্রতি একটার বেশি inversion লেখা ভারী করে — **মসলার মতো: অল্পে ঝোল**।", en: "More than one inversion per paragraph weighs the writing down — **use it like spice: a little goes far**.", hi: "प्रति अनुच्छेद एक से अधिक inversion लेखन भारी कर देता है — **मसाले की तरह: थोड़ा ही काफ़ी**।" },
          ],
          examples: [
            { wrong: "Inversion is useful. It is useful for essays. It is useful for speeches.", right: "Not only is inversion useful in essays, but it also shines in speeches.", note: { bn: "তিন ছোট বাক্য এক Not only ... but also-তে গুটিয়ে গাম্ভীর্য বেড়েছে — আর প্রথম clause উল্টে গেছে (is inversion useful)।", en: "Three choppy sentences fold into one not only ... but also — with the first clause inverted (is inversion useful).", hi: "तीन छोटे वाक्य एक not only ... but also में सिमट गए — पहला clause उलटा (is inversion useful)।" } },
            { wrong: "Rarely we see such dedication in new learners.", right: "Rarely do we see such dedication in new learners.", note: { bn: "শিক্ষক/সম্পাদকীয় সুরের বাক্য — rarely + do we see: প্রশংসাকে ওজনদার করে।", en: "An editorial tone: rarely do we see... gives the praise real weight.", hi: "संपादकीय सुर: rarely do we see... प्रशंसा को वज़न देता है।" } },
          ],
        },
        {
          heading: { bn: "🌉 ষষ্ঠ পরিবার: if ছাড়া শর্তবাচক বাক্য", en: "🌉 The sixth family: conditionals without if", hi: "🌉 छठा परिवार: if के बिना conditional" },
          lead: {
            bn: "ষষ্ঠ ট্রিগার পরিবার — শর্তবাচক বাক্যে if মুছে had/were/should সামনে।",
            en: "The sixth trigger family — conditionals drop if and lift had/were/should.",
            hi: "छठा ट्रिगर परिवार — conditional में if गिरता है, had/were/should आगे आते हैं।",
          },
          formula: {
            bn: "Had/Were/Should + কর্তা ... (= If + কর্তা ...)",
            en: "Had/Were/Should + subject ... (= If + subject ...)",
            hi: "Had/Were/Should + कर्ता ... (= If + कर्ता ...)",
          },
          points: [
            { bn: "ষষ্ঠ ট্রিগার পরিবার — **শর্তবাচক বাক্য if ছাড়া**: Had I known..., Were I you..., Should you need...।", en: "The sixth trigger family — **conditionals without if**: Had I known..., Were I you..., Should you need....", hi: "छठा ट्रिगर परिवार — **if के बिना conditional**: Had I known..., Were I you..., Should you need...।" },
            { bn: "had/were/should কর্তার সামনে উঠে আসে, if মুছে যায় — **অর্থ একই, সুর আরও আনুষ্ঠানিক**।", en: "had/were/should move before the subject and if disappears — **same meaning, a more formal tone**.", hi: "had/were/should कर्ता से पहले आ जाते हैं, if मिट जाता है — **अर्थ वही, सुर और औपचारिक**।" },
            { bn: "এই কাঠামোর পূর্ণ ব্যাকরণ **পরের পাঠে** (Mixed & Inverted Conditionals) — সেখানে ছক মিলিয়ে শিখবেন।", en: "The full grammar of this pattern comes in the **next lesson** (Mixed & Inverted Conditionals) — grids included.", hi: "इस ढाँचे का पूरा व्याकरण **अगले पाठ में** (Mixed & Inverted Conditionals) — वहीं ग्रिड से सीखेंगे।" },
          ],
          examples: [],
        },
        {
          heading: { bn: "⚠️ বাঙালি শিক্ষার্থীদের সূক্ষ্ম ভুল", en: "⚠️ Subtle mistakes Bengali speakers make", hi: "⚠️ बांग्लाभाषी शिक्षार्थियों की सूक्ष्म गलतियाँ" },
          lead: {
            bn: "চারটা প্যাটার্ন বারবার ফিরে আসে — চিনলেই বাঁচা।",
            en: "Four patterns keep coming back — spotting them saves you.",
            hi: "चार पैटर्न बार-बार लौटते हैं — पहचान लें तो सुरक्षित।",
          },
          formula: {
            bn: "সাধারণ বাক্য → শুধু ক্রম উল্টে → টেন্স/রূপ অপরিবর্তিত",
            en: "plain sentence → swap only the order → tense/form untouched",
            hi: "सामान्य वाक्य → केवल क्रम उलटें → tense/रूप अपरिवर्तित",
          },
          points: [
            { bn: "**অর্ধেক উল্টানো** — 'Never did I went': did বসিয়েও ক্রিয়া অতীত রেখে দেওয়া।", en: "**Half-inversion** — 'Never did I went': did is placed but the verb stays past.", hi: "**अधूरा उलटाव** — 'Never did I went': did तो लगाया, पर क्रिया भूतकाल में छोड़ दी।" },
            { bn: "**প্রশ্ন-সুর দিয়ে শেষ করা** — উল্টানো বাক্য বিবৃতি; শেষে ডট বসবে, '?' নয়।", en: "**Ending with a question tone** — an inverted sentence is a statement; it takes a full stop, not '?'.", hi: "**प्रश्न-सुर से खत्म करना** — उलटा वाक्य कथन है; अंत में बिंदु, '?' नहीं।" },
            { bn: "**কর্তার সাথে মিল ভাঙা** — 'Rarely do he come' নয়, 'Rarely does he come'।", en: "**Broken agreement** — not 'Rarely do he come' but 'Rarely does he come'.", hi: "**कर्ता से मेल टूटना** — 'Rarely do he come' नहीं, 'Rarely does he come'।" },
            { bn: "**Not only-র পরে উপবাক্য না উল্টে** পুরো বাক্য একরকম রেখে দেওয়া।", en: "**Forgetting that Not only inverts its own clause** — leaving the whole sentence with plain order.", hi: "**Not only के बाद clause न उलटाकर** पूरा वाक्य एक सा छोड़ देना।" },
            { bn: "প্রতিকারের মন্ত্র: আগে সাধারণ বাক্য শুদ্ধভাবে ভাবুন (I have never seen), তারপর **শুধু ক্রম উল্টে দিন** (Never have I seen) — টেন্স, ক্রিয়ারূপ, সব অপরিবর্তিত।", en: "The fix-mantra: build the plain sentence first (I have never seen), then **swap only the order** (Never have I seen) — tense and verb form untouched.", hi: "उपाय-मंत्र: पहले सामान्य वाक्य सही बनाएँ (I have never seen), फिर **केवल क्रम उलटें** (Never have I seen) — tense, क्रिया रूप सब अपरिवर्तित।" },
          ],
          examples: [
            { wrong: "Never did I went there alone.", right: "Never did I go there alone.", note: { bn: "did-এর ভিতরেই অতীত লুকানো — did বসলে go মূল রূপে; 'went' লিখলে দ্বিগুণ অতীত হয়ে যায়।", en: "did already carries the past — after did the verb goes back to go; writing went doubles the past.", hi: "did में ही भूतकाल छिपा है — did के बाद go; 'went' लिखने से दोहरा भूतकाल हो जाता है।" } },
            { wrong: "Never have I seen such chaos?", right: "Never have I seen such chaos.", note: { bn: "উল্টানো বাক্যের অভিব্যক্তি নাটকীয় হলেও তা প্রশ্ন নয় — শেষে পূর্ণচ্ছেদ।", en: "Dramatic as it sounds, inverted sentences are statements — end with a full stop.", hi: "नाटकीय लगे, पर उलटे वाक्य कथन हैं — अंत में पूर्णविराम।" } },
            { wrong: "Rarely do he admit his mistakes.", right: "Rarely does he admit his mistakes.", note: { bn: "কর্তা he → does; উল্টে গেলেও কর্তা-ক্রিয়ার মিল অটুট থাকে।", en: "Subject he takes does — agreement survives inversion.", hi: "कर्ता he के लिए does — उलटने पर भी agreement बना रहता है।" } },
            { wrong: "Never in my life I forget this day.", right: "Never in my life will I forget this day.", note: { bn: "ভবিষ্যৎ অর্থ বোঝাতে will I forget — 'in my life' যোগ হলেও inversion-এর নিয়ম একই।", en: "For future meaning use will I forget — the addition of 'in my life' does not change the rule.", hi: "भविष्यत् अर्थ के लिए will I forget — 'in my life' जोड़ने से नियम नहीं बदलता।" } },
          ],
        },
        {
          heading: { bn: "📖 ছোট লেখায় দেখা যাক", en: "📖 A short passage", hi: "📖 छोटे लेख में देखें" },
          lead: {
            bn: "একটা প্যারা, ভিতরে উল্টানো বাক্যগুলো — লেখা ওজনদার হয়ে ওঠে।",
            en: "One paragraph with inversions inside — the writing gains real weight.",
            hi: "एक अनुच्छेद, भीतर उलटे वाक्य — लेखन वज़नदार हो उठता है।",
          },
          points: [
            { bn: "Never have our streets been this crowded — প্যারার প্রথম বাক্যেই **সবচেয়ে জোরালো**।", en: "Never have our streets been this crowded — the strongest punch lands in the opening line.", hi: "Never have our streets been this crowded — पहली पंक्ति में ही सबसे ज़ोर।" },
            { bn: "Rarely does a city grow so fast that its people cannot keep pace।", en: "Rarely does a city grow so fast that its people cannot keep pace.", hi: "Rarely does a city grow so fast that its people cannot keep pace।" },
            { bn: "Not only is the population rising, but the jobs are also changing shape।", en: "Not only is the population rising, but the jobs are also changing shape.", hi: "Not only is the population rising, but the jobs are also changing shape।" },
            { bn: "Only when we plan ahead can we turn this rush into progress।", en: "Only when we plan ahead can we turn this rush into progress.", hi: "Only when we plan ahead can we turn this rush into progress।" },
            { bn: "প্রতিটি উল্টানো বাক্যই একটা **বড় দাবি শুরু** করছে — এটাই inversion-এর আসল কাজ।", en: "Each inverted sentence opens **a big claim** — that is inversion's real job.", hi: "हर उलटा वाक्य एक **बड़ा दावा** शुरू करता है — यही inversion का असली काम।" },
          ],
          examples: [
            { wrong: "Our streets have never been this crowded. (in an essay opening, wanting punch)", right: "Never have our streets been this crowded.", note: { bn: "রচনার শুরুতে একই কথার inversion-রূপটাই পাঞ্চ দেয় — প্রথম বাক্যে ব্যবহারের সেরা জায়গা।", en: "In an essay opening the inverted twin of the same sentence delivers the punch — the best spot for it.", hi: "निबंध की शुरुआत में उसी वाक्य का inversion रूप ही ज़ोर देता है — सबसे अच्छी जगह।" } },
            { wrong: "Only when we plan ahead, we turn this rush into progress.", right: "Only when we plan ahead can we turn this rush into progress.", note: { bn: "only-ক্লজের পরে can we — এই ছোট উল্টোটাই উপদেশটাকে দর্শনে বদলে দেয়।", en: "After the only-clause comes can we — that small flip turns advice into principle.", hi: "only-वाक्यांश के बाद can we — यह छोटा उलटाव सलाह को सिद्धांत बना देता है।" } },
            { wrong: "Not only the population is rising.", right: "Not only is the population rising, but the jobs are also changing shape.", note: { bn: "Not only কখনো একা থাকে না — জুটি but also; প্রথম অংশ উল্টে, দ্বিতীয় অংশ সাধারণ।", en: "Not only never travels alone — pair it with but also; invert the first part, keep the second plain.", hi: "Not only कभी अकेला नहीं आता — but also के साथ; पहला भाग उलटा, दूसरा सामान्य।" } },
            { wrong: "Rarely a city grows so fast. (essay tone)", right: "Rarely does a city grow so fast that its people cannot keep pace.", note: { bn: "rarely + does + মূল রূপ; সাথে so ... that-ক্লজ যোগ করলে বাক্য পূর্ণ যুক্তি হয়।", en: "rarely + does + base form; adding a so ... that clause completes the argument.", hi: "rarely + does + मूल रूप; so ... that वाक्यांश जोड़ने से तर्क पूरा होता है।" } },
            { wrong: "Never have our streets been so crowd.", right: "Never have our streets been so crowded.", note: { bn: "be-verb-এর পরে বিশেষণ (crowded) — বিশেষ্য (crowd) নয়; inversion নয়, এটা শব্দ-বাছাইয়ের ভুল।", en: "After be comes the adjective (crowded), not the noun (crowd) — a word-choice slip, not an inversion one.", hi: "be के बाद विशेषण (crowded), संज्ञा (crowd) नहीं — यह शब्द-चयन की गलती है।" } },
          ],
        },
        {
          heading: { bn: "📊 এক নজরে", en: "📊 At a glance", hi: "📊 एक नज़र में" },
          lead: {
            bn: "পুরো পাঠের মনে-রাখার তালিকা — স্ক্যান করলেই সারমর্ম পাবেন।",
            en: "The whole lesson's keep-list — one scan and you have the essence.",
            hi: "पूरे पाठ की याद-सूची — एक बार स्कैन, सार आपका।",
          },
          points: [
            { bn: "**শুরুতে ট্রিগার** — never, rarely, hardly, little, nowhere, no sooner, not only, only + ফ্রেজ, so + adjective → auxiliary কর্তার সামনে।", en: "**Fronted triggers** — never, rarely, hardly, little, nowhere, no sooner, not only, only + phrase, so + adjective → auxiliary before the subject.", hi: "**शुरुआत में ट्रिगर** — never, rarely, hardly, little, nowhere, no sooner, not only, only + वाक्यांश, so + विशेषण → auxiliary कर्ता से पहले।" },
            { bn: "**auxiliary বাছাই = প্রশ্নের auxiliary** — do/does/did, have/has/had, be, modal।", en: "**Auxiliary choice = the question auxiliary** — do/does/did, have/has/had, be, modal.", hi: "**auxiliary चुनाव = प्रश्न का auxiliary** — do/does/did, have/has/had, be, modal।" },
            { bn: "**did বসলে** মূল ক্রিয়া মূল রূপে; শেষে ডট, প্রশ্নবোধক নয়।", en: "**After did** the verb goes base-form; end with a full stop, never a question mark.", hi: "**did लगे तो** मुख्य क्रिया मूल रूप में; अंत में बिंदु, प्रश्नचिह्न नहीं।" },
            { bn: "**কর্তা-ক্রিয়ার মিল অটুট**; কর্তা-রূপে নেগেটিভ (Nobody came) উল্টে না।", en: "**Agreement survives**; negatives in subject position (Nobody came) never invert.", hi: "**कर्ता-क्रिया मेल बना रहे**; कर्ता-रूप नकारात्मक (Nobody came) नहीं उलटता।" },
            { bn: "প্যারা-প্রতি সর্বোচ্চ একটি — **মসলার মতো**।", en: "At most one per paragraph — **like spice**.", hi: "प्रति अनुच्छेद अधिकतम एक — **मसाले की तरह**।" },
            { bn: "অনুশীলনের সূত্র: **সাধারণ বাক্য ভাবুন → ক্রম উল্টে দিন → বাকি সব একই রাখুন**।", en: "The drill: **think the plain sentence → swap the order → change nothing else**.", hi: "अभ्यास-सूत्र: **सामान्य वाक्य सोचें → क्रम उलटें → बाकी सब वैसा रखें**।" },
          ],
          examples: [
            { wrong: "Hardly I know what to say. (present meaning)", right: "Hardly do I know what to say.", note: { bn: "বর্তমান অর্থে do I know; অতীত অর্থ হলে did I know — অর্থের সময় আগে ঠিক করুন, পরে উল্টান।", en: "Present meaning takes do I know; past meaning did I know — fix the time first, then invert.", hi: "वर्तमान अर्थ के लिए do I know; भूतकाल के लिए did I know — पहले समय तय करें, फिर उलटें।" } },
            { wrong: "Only later I realized my mistake.", right: "Only later did I realize my mistake.", note: { bn: "only later-ও উল্টায় — এই ছোট বাক্যটা গল্প-লেখায় খুব কাজে লাগে।", en: "Only later also inverts — a tiny pattern that does a lot of work in storytelling.", hi: "only later भी उलटता है — कहानी-लेखन में बहुत काम आने वाला छोटा ढाँचा।" } },
            { wrong: "Never I had imagined such hospitality. (intended: past perfect inversion)", right: "Never had I imagined such hospitality.", note: { bn: "past perfect হলে had সামনে — Never had I imagined; উল্টানোর সময় had-কে পেছনে ফেলে দেবেন না।", en: "With past perfect, had moves up: never had I imagined — don't leave had behind when you invert.", hi: "past perfect में had आगे आता है: never had I imagined — उलटते समय had पीछे न छोड़ें।" } },
            { wrong: "On no account you must open the door. (notice tone)", right: "On no account must you open the door.", note: { bn: "আনুষ্ঠানিক নোটিশে on no account + must you — নিরাপত্তা-নির্দেশে এই কাঠামোই প্রচলিত।", en: "Formal notices use on no account + must you — the standard safety-instruction frame.", hi: "औपचारिक सूचना में on no account + must you — सुरक्षा-निर्देश का मानक ढाँचा।" } },
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
    sortOrder: 6,
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
      roadmap: [
        { bn: "🧭 সময়রেখা আগে — দুই ক্লজের সময় মিলিয়ে mixed চেনা", en: "🧭 Timeline first — spot the mixed by comparing clause times", hi: "🧭 पहले समय-रेखा — clause का समय मिलाकर mixed पहचानें" },
        { bn: "🔀 মিশ্রণ এক: অতীত শর্ত (had + V3) → বর্তমান ফল (would + V1)", en: "🔀 Mix one: past condition (had + V3) → present result (would + V1)", hi: "🔀 मिश्रण एक: भूतकाल शर्त (had + V3) → वर्तमान परिणाम (would + V1)" },
        { bn: "↩️ মিশ্রণ দুই: বর্তমান শর্ত (were) → অতীত ফল (would have + V3)", en: "↩️ Mix two: present condition (were) → past result (would have + V3)", hi: "↩️ मिश्रण दो: वर्तमान शर्त (were) → भूतकाल परिणाम (would have + V3)" },
        { bn: "🏗️ if বাদ: Had I known, Were I you, Should you need — তিন রূপ", en: "🏗️ Dropping if: Had I known, Were I you, Should you need — three forms", hi: "🏗️ if हटाना: Had I known, Were I you, Should you need — तीन रूप" },
        { bn: "🧩 mixed + inverted একসাথে — তিন যাচাই এক বাক্যে", en: "🧩 Mixed + inverted together — three checks in one sentence", hi: "🧩 mixed + inverted साथ — एक वाक्य में तीन जाँच" },
        { bn: "⚠️ বাঙালি শিক্ষার্থীদের ৪টা সূক্ষ্ম ভুল", en: "⚠️ Four subtle Bengali-speaker mistakes", hi: "⚠️ बांग्लाभाषी छात्रों की 4 सूक्ष्म गलतियाँ" },
        { bn: "📖 রেজাল্ট-দিবসের প্যারায় সব কাঠামো একসাথে", en: "📖 A results-day paragraph with every structure together", hi: "📖 रिज़ल्ट-डे अनुच्छेद में सारे ढाँचे साथ" },
        { bn: "📊 এক নজরে: মিশ্রণ-ছক, নিয়ম আর অনুশীলন-সূত্র", en: "📊 At a glance: the mix-grid, rules and drill", hi: "📊 एक नज़र में: मिश्रण-ग्रिड, नियम और अभ्यास-सूत्र" },
      ],
      sections: [
        {
          heading: { bn: "🧭 সময়রেখা আগে, বাক্য পরে", en: "🧭 Timeline first, sentence second", hi: "🧭 पहले समय-रेखा, फिर वाक्य" },
          lead: {
            bn: "দুই clause-এর সময় আলাদা কি না — এই এক প্রশ্নেই mixed ধরা পড়ে।",
            en: "Do the two clauses live in different times? — that one question exposes the mixed.",
            hi: "दोनों clauses का समय अलग है या नहीं — यही एक सवाल mixed को पकड़ता है।",
          },
          formula: {
            bn: "if-ক্লজের সময় ≠ মূল ক্লজের সময় → mixed conditional",
            en: "if-clause time ≠ main-clause time → mixed conditional",
            hi: "if-क्लॉज़ का समय ≠ मुख्य क्लॉज़ का समय → mixed conditional",
          },
          points: [
            { bn: "সব রহস্য এক জায়গায়: **দুই clause-এর সময় আলাদা** — mixed conditional-এর মূল চিহ্ন।", en: "The whole secret in one line: **the two clauses live in different times** — the core sign of a mixed conditional.", hi: "सारा रहस्य एक जगह: **दोनों clauses का समय अलग** — mixed conditional की मूल पहचान।" },
            { bn: "প্রশ্ন করুন — **if-ক্লজের ঘটনাটা কোন সময়ের? মূল ক্লজের ফলটা কোন সময়ের?**", en: "Ask — **when is the if-clause event? when is the main-clause result?**", hi: "पूछें — **if-क्लॉज़ की घटना कब की? मुख्य क्लॉज़ का परिणाम कब का?**" },
            { bn: "সময় **মিললে** সাধারণ conditional — দুই অতীত হলে Type 3, দুই বর্তমান হলে Type 2।", en: "**Same time** → ordinary conditional — both past = Type 3, both present = Type 2.", hi: "समय **मिले तो** साधारण conditional — दोनों भूतकाल = Type 3, दोनों वर्तमान = Type 2।" },
            { bn: "সময় **না মিললে** mixed — অতীতের শর্ত → বর্তমানের ফল, বা বর্তমানের শর্ত → অতীতের ফল।", en: "**Different times** → mixed — past condition → present result, or present condition → past result.", hi: "समय **अलग हो तो** mixed — भूतकाल शर्त → वर्तमान परिणाम, या वर्तमान शर्त → भूतकाल परिणाम।" },
            { bn: "বাক্য লেখার আগে খাতায় **সময়রেখা টানুন** — অতীত-বর্তমান ভুলের ৯০% ওখানেই ধরা পড়ে।", en: "Sketch the **timeline in your notebook before writing** — 90% of past-present errors die there.", hi: "लिखने से पहले कॉपी में **समय-रेखा बनाएँ** — भूत-वर्तमान गलतियों का 90% वहीं पकड़ में आता है।" },
          ],
          examples: [
            { wrong: "If I had studied medicine, I will be a doctor now.", right: "If I had studied medicine, I would be a doctor now.", note: { bn: "অতীত-শর্তের বাক্যে মূল ক্লজে will আসে না — would/be-ই বর্তমান ফলের যান।", en: "A past-condition sentence never takes will in the main clause — would/be carries the present result.", hi: "भूतकाल-शर्त वाक्य में मुख्य clause में will नहीं आता — would/be ही वर्तमान परिणाम लाता है।" } },
            { wrong: "If he didn't waste his youth, he would have a degree today.", right: "If he hadn't wasted his youth, he would have a degree today.", note: { bn: "শর্তটা অতীতের ঘটনা (যৌবন নষ্ট করা শেষ হয়ে গেছে) — তাই past perfect hadn't wasted; ফল today-তে।", en: "The condition is a finished past act (wasting his youth), so past perfect hadn't wasted; the result lives today.", hi: "शर्त पूर्ण भूतकाल की घटना है (यौवन बर्बाद करना खत्म) — इसलिए hadn't wasted; परिणाम आज है।" } },
            { wrong: "If I were you, I would told the truth.", right: "If I were you, I would tell the truth. / I would have told the truth. (past result)", note: { bn: "would-এর পরে মূল রূপ tell; ফল অতীতে টানতে চাইলে would have told — দুই রূপের মাঝে 'would told' নেই।", en: "After would comes the base form tell; for a past result would have told — there is no middle form 'would told'.", hi: "would के बाद मूल रूप tell; भूतकाल परिणाम के लिए would have told — 'would told' जैसा कुछ नहीं।" } },
          ],
        },
        {
          heading: { bn: "🔀 মিশ্রণ এক: অতীত শর্ত → বর্তমান ফল", en: "🔀 Mix one: past condition → present result", hi: "🔀 मिश्रण एक: भूतकाल शर्त → वर्तमान परिणाम" },
          lead: {
            bn: "অতীতের এক সিদ্ধান্ত আজকের বাস্তবতা বদলে দিয়েছে — Type 3→2-এর ঘর।",
            en: "One past decision changed today's reality — home of Type 3→2.",
            hi: "अतीत का एक निर्णय आज की वास्तविकता बदल देता है — Type 3→2 का घर।",
          },
          formula: {
            bn: "If + had + V3, would + V1 (+ now / today)",
            en: "If + had + V3, would + V1 (+ now / today)",
            hi: "If + had + V3, would + V1 (+ now / today)",
          },
          points: [
            { bn: "**অতীতের শর্ত, বর্তমানের ফল** — প্রচলিত নাম Type 3→2।", en: "**Past condition, present result** — the usual name is Type 3→2.", hi: "**भूतकाल शर्त, वर्तमान परिणाम** — प्रचलित नाम Type 3→2।" },
            { bn: "গঠন: **If + had + V3, would + V1 (+ now/today)**।", en: "Form: **If + had + V3, would + V1 (+ now/today)**.", hi: "ढाँचा: **If + had + V3, would + V1 (+ now/today)**।" },
            { bn: "শর্তটা **শেষ হয়ে যাওয়া অতীত ঘটনা**; ফলটা এখনকার।", en: "The condition is a **finished past event**; the result is current.", hi: "शर्त **खत्म हुई भूतकाल की घटना** है; परिणाम अभी का है।" },
            { bn: "উদাহরণ: 'If we had planted trees ten years ago, the village would be cooler today.'", en: "Example: 'If we had planted trees ten years ago, the village would be cooler today.'", hi: "उदाहरण: 'If we had planted trees ten years ago, the village would be cooler today.'" },
            { bn: "**সময়বাচক চিহ্ন** — ago, last year, then শর্তকে অতীতে বাঁধে; now/today ফলকে বর্তমানে।", en: "**Time cues** — ago, last year, then pin the condition to the past; now/today pin the result to the present.", hi: "**समय-संकेत** — ago, last year, then शर्त को भूतकाल में बाँधते हैं; now/today परिणाम को वर्तमान में।" },
          ],
          table: {
            head: [{ bn: "অংশ", en: "Part", hi: "हिस्सा" }, { bn: "সময়", en: "Time", hi: "समय" }, { bn: "গঠন", en: "Form", hi: "रूप" }],
            rows: [
              [{ bn: "if-ক্লজ", en: "if-clause", hi: "if-क्लॉज़" }, { bn: "অতীত", en: "past", hi: "भूतकाल" }, { bn: "If + had + V3", en: "If + had + V3", hi: "If + had + V3" }],
              [{ bn: "মূল ক্লজ", en: "main clause", hi: "मुख्य क्लॉज़" }, { bn: "বর্তমান", en: "present", hi: "वर्तमान" }, { bn: "would + V1 (+ now/today)", en: "would + V1 (+ now/today)", hi: "would + V1 (+ now/today)" }],
            ],
          },
          examples: [
            { wrong: "If I had taken that job, I would have been rich now.", right: "If I had taken that job, I would be rich now.", note: { bn: "now শব্দটাই সংকেত — ফলটা বর্তমানে, তাই would be; would have been মানে ফলও অতীতে, যা now-এর সাথে লড়াই করে।", en: "The word now is the signal — the result is present, so would be; would have been puts the result in the past, clashing with now.", hi: "now शब्द ही संकेत है — परिणाम वर्तमान में है, इसलिए would be; would have been परिणाम को भूतकाल में धकेल देगा।" } },
            { wrong: "If we had planted trees ten years ago, the village would have been cooler today.", right: "If we had planted trees ten years ago, the village would be cooler today.", note: { bn: "'ago' শর্তকে অতীতে বসায়, 'today' ফলকে বর্তমানে — ফল বর্তমান বলে would be।", en: "'Ago' pins the condition to the past, 'today' pins the result to the present — hence would be.", hi: "'ago' शर्त को भूतकाल में बाँधता है, 'today' परिणाम को वर्तमान में — इसलिए would be।" } },
            { wrong: "If he had listened to our advice, he wouldn't be in debt yesterday.", right: "If he had listened to our advice, he wouldn't be in debt now.", note: { bn: "অতীত-শর্তের বর্তমান-ফলে সময়বাচক now/today-ই থাকবে; yesterday বসালে ফলও অতীতে যায় (তখন দুটোই অতীত = সাধারণ Type 3)।", en: "Past-condition → present-result takes now/today; putting yesterday pushes the result into the past (making it plain Type 3).", hi: "भूतकाल-शर्त → वर्तमान-परिणाम में now/today रहता है; yesterday डालने पर यह साधारण Type 3 बन जाता है।" } },
            { wrong: "If they had built the bridge, the town would connect to the highway. (intended: present result is wrong form)", right: "If they had built the bridge, the town would be connected to the highway.", note: { bn: "ফল বর্তমানে হলেও অর্থ অনুযায়ী রূপ লাগবে — সংযুক্ত হওয়া অবস্থা, তাই be connected; খালি connect করলে অর্থ 'নিজে সংযোগ করবে' দাঁড়ায়।", en: "A present result still needs the right form — a state of being connected, so would be connected; bare would connect changes the meaning.", hi: "वर्तमान परिणाम के लिए भी सही रूप चाहिए — जुड़े रहने की अवस्था, इसलिए would be connected।" } },
          ],
        },
        {
          heading: { bn: "↩️ মিশ্রণ দুই: বর্তমান শর্ত → অতীত ফল", en: "↩️ Mix two: present condition → past result", hi: "↩️ मिश्रण दो: वर्तमान शर्त → भूतकाल परिणाम" },
          lead: {
            bn: "উল্টো পথ — আজকের অবস্থা গতকালের ফল বদলে দিতো।",
            en: "The reverse path — today's state would have changed yesterday's outcome.",
            hi: "उलटा रास्ता — आज की स्थिति कल का परिणाम बदल देती।",
          },
          formula: {
            bn: "If + past simple (were), would have + V3 (+ yesterday / last week)",
            en: "If + past simple (were), would have + V3 (+ yesterday / last week)",
            hi: "If + past simple (were), would have + V3 (+ yesterday / last week)",
          },
          points: [
            { bn: "**বর্তমানের শর্ত, অতীতের ফল** — প্রচলিত নাম Type 2→3।", en: "**Present condition, past result** — the usual name is Type 2→3.", hi: "**वर्तमान शर्त, भूतकाल परिणाम** — प्रचलित नाम Type 2→3।" },
            { bn: "গঠন: **If + past simple, would have + V3** (+ yesterday/last week)।", en: "Form: **If + past simple, would have + V3** (+ yesterday/last week).", hi: "ढाँचा: **If + past simple, would have + V3** (+ yesterday/last week)।" },
            { bn: "শর্তটা **এখনকার অবাস্তব অবস্থা** (were); ফলটা শেষ হয়ে যাওয়া অতীত।", en: "The condition is an **unreal present state** (were); the result is a finished past.", hi: "शर्त **अभी की अवास्तविक अवस्था** (were); परिणाम खत्म हुआ भूतकाल।" },
            { bn: "উদাহরণ: 'If she were more careful, she wouldn't have lost the files last week.'", en: "Example: 'If she were more careful, she wouldn't have lost the files last week.'", hi: "उदाहरण: 'If she were more careful, she wouldn't have lost the files last week.'" },
            { bn: "unreal বর্তমান-শর্তে **were-ই নিয়ম** (am/is/are নয়) — মিশ্রণেও একই।", en: "Unreal present conditions take **were** (never am/is/are) — the rule survives inside the mix.", hi: "अवास्तविक वर्तमान शर्त में **were ही नियम** (am/is/are नहीं) — मिश्रण में भी वही।" },
          ],
          table: {
            head: [{ bn: "অংশ", en: "Part", hi: "हिस्सा" }, { bn: "সময়", en: "Time", hi: "समय" }, { bn: "গঠন", en: "Form", hi: "रूप" }],
            rows: [
              [{ bn: "if-ক্লজ", en: "if-clause", hi: "if-क्लॉज़" }, { bn: "বর্তমান", en: "present", hi: "वर्तमान" }, { bn: "If + past simple (were)", en: "If + past simple (were)", hi: "If + past simple (were)" }],
              [{ bn: "মূল ক্লজ", en: "main clause", hi: "मुख्य क्लॉज़" }, { bn: "অতীত", en: "past", hi: "भूतकाल" }, { bn: "would have + V3 (+ yesterday/last week)", en: "would have + V3 (+ yesterday/last week)", hi: "would have + V3 (+ yesterday/last week)" }],
            ],
          },
          examples: [
            { wrong: "If she is taller, she would have joined the team.", right: "If she were taller, she would have joined the team.", note: { bn: "উল্টো মিশ্রণ: শর্ত বর্তমানে (were), ফল অতীতে (would have joined) — বাস্কেটবল ট্রায়াল গতকাল ছিল।", en: "The reverse blend: present condition (were), past result (would have joined) — the trial happened yesterday.", hi: "उलटा मिश्रण: वर्तमान शर्त (were), भूतकाल परिणाम (would have joined) — ट्रायल कल था।" } },
            { wrong: "If she were more careful, she wouldn't lose the files last week.", right: "If she were more careful, she wouldn't have lost the files last week.", note: { bn: "'last week' ফলটাকে অতীতে রাখে — তাই wouldn't have lost; wouldn't lose মানে ফলও বর্তমানে, যা last week-এর সাথে মেলে না।", en: "'Last week' pins the result to the past — hence wouldn't have lost; plain wouldn't lose would drag the result into the present.", hi: "'last week' परिणाम को भूतकाल में रखता है — इसलिए wouldn't have lost।" } },
            { wrong: "If I am more organised, I would have finished the thesis.", right: "If I were more organised, I would have finished the thesis.", note: { bn: "বর্তমান-শর্তের unreal বাক্যে am/is/are-এর জায়গায় were — মিশ্রণেও এই নিয়ম একই।", en: "Unreal present conditions take were (not am/is/are) — the rule survives inside a mixed conditional.", hi: "अवास्तविक वर्तमान शर्त में were (am/is/are नहीं) — मिश्रण में भी यही नियम।" } },
          ],
        },
        {
          heading: { bn: "🏗️ if বাদ দিয়ে উল্টানো — inverted conditional", en: "🏗️ Dropping if — the inverted conditional", hi: "🏗️ if हटाकर उलटना — inverted conditional" },
          lead: {
            bn: "আনুষ্ঠানিক লেখার সূক্ষ্ম রূপ — if মুছে had/were/should কর্তার সামনে।",
            en: "Formal writing's finer form — if drops and had/were/should move in front.",
            hi: "औपचारिक लेखन का परिष्कृत रूप — if गिरता है, had/were/should आगे आते हैं।",
          },
          formula: {
            bn: "Had/Were/Should + কর্তা ... (= If + কর্তা ...)",
            en: "Had/Were/Should + subject ... (= If + subject ...)",
            hi: "Had/Were/Should + कर्ता ... (= If + कर्ता ...)",
          },
          points: [
            { bn: "if মুছে **had/were/should কর্তার সামনে**: Had I known, I would have called. (= If I had known...)", en: "If drops and **had/were/should move before the subject**: Had I known, I would have called. (= If I had known...)", hi: "if मिटकर **had/were/should कर्ता से पहले**: Had I known, I would have called. (= If I had known...)" },
            { bn: "**Were I you, I would apologise.** (= If I were you...)", en: "**Were I you, I would apologise.** (= If I were you...)", hi: "**Were I you, I would apologise.** (= If I were you...)" },
            { bn: "**Should you need help, call me.** (= If you should need help...)", en: "**Should you need help, call me.** (= If you should need help...)", hi: "**Should you need help, call me.** (= If you should need help...)" },
            { bn: "নেগেটিভে **not কর্তার পরে** — Had I not seen it, I would never have believed it (didn't have নয়!)।", en: "Negatives keep **not after the subject** — Had I not seen it, I would never have believed it (never didn't have!).", hi: "नकारात्मक में **not कर्ता के बाद** — Had I not seen it, I would never have believed it (didn't have नहीं!)।" },
            { bn: "এই রূপ **শুধু শর্ত-ক্লজে**; মূল ক্লজ সাধারণ থাকে।", en: "The pattern belongs to the **if-clause only**; the main clause stays normal.", hi: "यह रूप **केवल शर्त-क्लॉज़ में**; मुख्य क्लॉज़ सामान्य रहता है।" },
            { bn: "**কথ্য ভাষায় if-ই প্রিয়**; inverted রূপ রচনা, চিঠি, বক্তৃতার।", en: "**Casual speech prefers if**; the inverted form belongs to essays, letters and speeches.", hi: "**बोलचाल में if ही प्रिय**; inverted रूप निबंध, पत्र, भाषण का है।" },
          ],
          table: {
            head: [{ bn: "if-যুক্ত রূপ", en: "with if", hi: "if के साथ" }, { bn: "inverted রূপ", en: "inverted form", hi: "inverted रूप" }],
            rows: [
              [{ bn: "If I had known...", en: "If I had known...", hi: "If I had known..." }, { bn: "Had I known...", en: "Had I known...", hi: "Had I known..." }],
              [{ bn: "If I were you...", en: "If I were you...", hi: "If I were you..." }, { bn: "Were I you...", en: "Were I you...", hi: "Were I you..." }],
              [{ bn: "If you should need...", en: "If you should need...", hi: "If you should need..." }, { bn: "Should you need...", en: "Should you need...", hi: "Should you need..." }],
            ],
          },
          examples: [
            { wrong: "Had I known your number, I would have called you. (marked wrong by style checkers? No — but note the formal tone)", right: "Had I known your number, I would have called you. (= If I had known your number...)", note: { bn: "এই রূপ একদম শুদ্ধ — শুধু মনে রাখুন এটা if-বাক্যের আনুষ্ঠানিক জোড়া; গল্পের সংলাপে if-ই বেশি স্বাভাবিক।", en: "This form is perfectly correct — just remember it is the formal twin of an if-sentence; in casual dialogue if itself sounds natural.", hi: "यह रूप एकदम सही है — बस याद रखें यह if-वाक्य का औपचारिक रूप है; रोज़मर्रा बातचीत में if ही स्वाभाविक है।" } },
            { wrong: "Had not I seen the warning, I would have touched the wire.", right: "Had I not seen the warning, I would have touched the wire.", note: { bn: "নেগেটিভ ইনভার্শনে had আগে, not পরে: Had I not seen — 'Had not I' পুরোনো নাটকীয় সুর ছাড়া ভুল।", en: "In negative inversion had leads and not follows: Had I not seen — 'Had not I' is wrong outside archaic style.", hi: "नकारात्मक inversion में had पहले, not बाद में: Had I not seen — 'Had not I' ग़लत है।" } },
            { wrong: "Were you me, what would you do? (acceptable, but learn the classic)", right: "Were I you, what would you do? / If I were you, what would I do?", note: { bn: "'Were I you' ধ্রুপদী রূপ; কর্তা বদলালে were-এর সাথে মিল রাখুন: Were he/Were she/Were they।", en: "'Were I you' is the classic; keep were agreement for other subjects: Were he / Were she / Were they.", hi: "'Were I you' शास्त्रीय रूप है; अन्य कर्ताओं के साथ were रखें: Were he / Were she / Were they।" } },
            { wrong: "Should you will need any help, please call.", right: "Should you need any help, please call.", note: { bn: "should-ইনভার্শনে should-এর পরে মূল রূপ, দ্বিতীয় will নিষিদ্ধ — should নিজেই ভবিষ্যৎ-সুর দেয়।", en: "In should-inversion the verb stays base and no second will appears — should itself carries the future flavour.", hi: "should-inversion में क्रिया मूल रूप में, दूसरा will नहीं — should ही भविष्यत् सुर देता है।" } },
            { wrong: "Had they arrived earlier, they would catch the train.", right: "Had they arrived earlier, they would have caught the train.", note: { bn: "if-ক্লজ উল্টে গেলেও মূল ক্লজের টেন্স বদলায় না — অতীত ফলে would have caught।", en: "Inverting the if-clause never changes the main clause's tense — a past result needs would have caught.", hi: "if-वाक्यांश उलटने से मुख्य clause का tense नहीं बदलता — भूतकाल परिणाम के लिए would have caught।" } },
          ],
        },
        {
          heading: { bn: "🧩 mixed + inverted একসাথে — উচ্চ স্তরের সমন্বয়", en: "🧩 Mixing mixed with inverted", hi: "🧩 mixed और inverted का संयोजन" },
          lead: {
            bn: "দুই যন্ত্র একসাথে — মিক্সড শর্তকে উল্টে লেখা, C1-এর পরিণত রূপ।",
            en: "Both machines at once — inverting a mixed condition, the C1 signature.",
            hi: "दोनों यंत्र एक साथ — mixed शर्त को उलटकर लिखना, C1 की पहचान।",
          },
          formula: {
            bn: "Had + কর্তা + V3, would + V1 + today (অতীত শর্ত + বর্তমান ফল)",
            en: "Had + subject + V3, would + V1 + today (past condition + present result)",
            hi: "Had + कर्ता + V3, would + V1 + today (भूतकाल शर्त + वर्तमान परिणाम)",
          },
          points: [
            { bn: "সবচেয়ে পরিণত রূপ — **মিক্সড শর্তকে উল্টে লেখা**: Had the company invested earlier, its app would be the market leader today।", en: "The most mature form — **invert a mixed condition**: Had the company invested earlier, its app would be the market leader today.", hi: "सबसे परिपक्व रूप — **mixed शर्त को उलटकर लिखना**: Had the company invested earlier, its app would be the market leader today।" },
            { bn: "যাচাই এক — **শর্ত-ক্লজের সময়**: had + V3 = অতীত; were + বিশেষণ = বর্তমান।", en: "Check one — **the if-time**: had + V3 = past; were + adjective = present.", hi: "जाँच एक — **शर्त-क्लॉज़ का समय**: had + V3 = भूतकाल; were + विशेषण = वर्तमान।" },
            { bn: "যাচাই দুই — **মূল-ক্লজের সময়**: would + V1 = বর্তমান; would have + V3 = অতীত।", en: "Check two — **the result-time**: would + V1 = present; would have + V3 = past.", hi: "जाँच दो — **मुख्य-क्लॉज़ का समय**: would + V1 = वर्तमान; would have + V3 = भूतकाल।" },
            { bn: "যাচাই তিন — **সময়বাচক শব্দ** (now, today, then, last year) কোন ক্লজকে বাঁধছে।", en: "Check three — **which clause the time words** (now, today, then, last year) **bind**.", hi: "जाँच तीन — **समय-शब्द** (now, today, then, last year) किसे बाँध रहे हैं।" },
            { bn: "তিনটা মিললেই **বাক্য শুদ্ধ**।", en: "When all three match, **the sentence is correct**.", hi: "तीनों मिलें तो **वाक्य शुद्ध**।" },
          ],
          examples: [
            { wrong: "Had the company invested earlier, its app would have been the market leader today.", right: "Had the company invested earlier, its app would be the market leader today.", note: { bn: "'today' ফলকে বর্তমানে ধরে — would be; would have been অতীত ফল বোঝায়, today-র সাথে বাধা।", en: "'Today' pins the result to the present — would be; would have been points the result backward, clashing with today.", hi: "'today' परिणाम को वर्तमान में बाँधता है — would be; would have been टकराव करेगा।" } },
            { wrong: "Were the system not so slow, the launch didn't fail last month.", right: "Were the system not so slow, the launch wouldn't have failed last month.", note: { bn: "বর্তমান শর্ত (were) + অতীত ফল (wouldn't have failed); খালি didn't fail মিশ্রণের যান নয়।", en: "Present condition (were) + past result (wouldn't have failed); plain didn't fail is not the mixed vehicle.", hi: "वर्तमान शर्त (were) + भूतकाल परिणाम (wouldn't have failed); खाला didn't fail नहीं।" } },
            { wrong: "Had I saved more money, I will buy the flat next year.", right: "Had I saved more money, I would be buying the flat next year.", note: { bn: "অতীত-শর্তের ভবিষ্যৎ-ফলে would be buying — will আসবে না; এটা মিক্সডের তৃতীয় স্বাদ: অতীত → ভবিষ্যৎ।", en: "Past condition → future result takes would be buying — never will; a third mixed flavour: past → future.", hi: "भूतकाल शर्त → भविष्यत् परिणाम के लिए would be buying — will नहीं; मिक्स्ड का तीसरा स्वाद।" } },
            { wrong: "Were she a bit more patient, she would be succeeded. (form check)", right: "Were she a bit more patient, she would succeed. / she would have succeeded.", note: { bn: "would-এর পরে মূল রূপ বা would have + V3 — 'would be succeeded' দ্বিগুণ সহায়ক ক্রিয়া, ভুল।", en: "After would: base form or would have + V3 — 'would be succeeded' doubles the auxiliaries and is wrong.", hi: "would के बाद मूल रूप या would have + V3 — 'would be succeeded' ग़लत।" } },
            { wrong: "Should the plan fail, we would have lost everything. (timeline slip)", right: "Should the plan fail, we would lose everything. (future risk)", note: { bn: "should-শর্ত ভবিষ্যৎ-ঝুঁকি বোঝায়, তাই ফলও ভবিষ্যৎ: would lose; would have lost অতীত-ফল, যা should-শর্তের সাথে সময়ে মেলে না।", en: "A should-condition signals a future risk, so the result is future: would lose; would have lost is a past result that mismatches.", hi: "should-शर्त भविष्यत् जोखिम दर्शाती है, इसलिए परिणाम भी भविष्यत्: would lose।" } },
          ],
        },
        {
          heading: { bn: "⚠️ বাঙালি শিক্ষার্থীদের সূক্ষ্ম ভুল", en: "⚠️ Subtle mistakes Bengali speakers make", hi: "⚠️ बांग्लाभाषी शिक्षार्थियों की सूक्ष्म गलतियाँ" },
          lead: {
            bn: "চারটা ফিসলন-জায়গা আর এক লাইনের প্রতিকার।",
            en: "Four slippery spots and a one-line remedy.",
            hi: "चार फिसलन भरी जगहें और एक पंक्ति का उपाय।",
          },
          points: [
            { bn: "বাংলার **'হলে' সব সময়ের জায়গায় বসে** — তাই ইংরেজিতে সময়-চিহ্ন ভুল হয়; now/last year/tomorrow কোন ক্লজে বসছে দেখুন।", en: "Bengali **'hole' fits every time** — so time markers drift; watch where now/last year/tomorrow sit.", hi: "बांग्ला का **'होले' हर समय पर चलता है** — इसलिए समय-संकेत फिसल जाते हैं; now/last year/tomorrow किस क्लॉज़ में हैं देखें।" },
            { bn: "'যদি আমি তোমার জায়গায় হতাম' কে **'If I was you'** লেখা — unreal সুরে **were-ই নিয়ম**।", en: "Rendering 'আমি তোমার জায়গায় হতাম' as **'If I was you'** — unreal meaning takes **were**.", hi: "'अगर मैं तुम्हारी जगह होता' को **'If I was you'** लिखना — अवास्तविक अर्थ में **were ही नियम**।" },
            { bn: "would have-কে 'হত' ভেবে **বর্তমান-ফলেও বসানো** — ফলের সময় দেখে would be / would have বাছুন।", en: "Reading would have as Bengali 'hoto' and **using it for present results too** — pick would be / would have by the result's time.", hi: "would have को 'होतो' समझकर **वर्तमान-परिणाम में भी बिठाना** — परिणाम का समय देखकर would be / would have चुनें।" },
            { bn: "inverted রূপে **দ্বিতীয় সহায়ক ঢোকানো** — 'Had he came' নয়, had come।", en: "A **second auxiliary sneaking into inversions** — 'Had he came' is wrong, had come is right.", hi: "inverted रूप में **दूसरा auxiliary घुसाना** — 'Had he came' नहीं, had come।" },
            { bn: "প্রতিকার: বাক্যের আগে দুই শব্দে লিখুন — **condition: past, result: present** — তারপর ছক মেলান।", en: "Remedy: write two words before the sentence — **condition: past, result: present** — then match the grid.", hi: "उपाय: वाक्य से पहले दो शब्द लिखें — **condition: past, result: present** — फिर ग्रिड मिलाएँ।" },
          ],
          examples: [
            { wrong: "If I was the captain, I would have changed the batting order.", right: "If I were the captain, I would have changed the batting order.", note: { bn: "unreal বর্তমান-শর্তে were — রচনা/পরীক্ষায় was লিখলে নম্বর কাটা যায়।", en: "Unreal present conditions take were — in essays and exams was costs marks.", hi: "अवास्तविक वर्तमान शर्त में were — परीक्षा में was नम्बर काटता है।" } },
            { wrong: "If I had got the scholarship, my parents will stop worrying. (past→future mix)", right: "If I had got the scholarship, my parents would stop worrying.", note: { bn: "অতীত-শর্তের সাথে কখনো will নয় — would stop (বর্তমান/ভবিষ্যৎ ফল)।", en: "A past condition never pairs with will — would stop carries the present/future result.", hi: "भूतकाल शर्त के साथ will कभी नहीं — would stop।" } },
            { wrong: "If you should get lost, you would call us immediately, right? (mixed-up frame)", right: "Should you get lost, call us immediately.", note: { bn: "should-শর্ত নির্দেশ/পরামর্শে ব্যবহৃত হলে মূল ক্লজ imperative হয় — 'call us' — would-বাক্য নয়।", en: "A should-condition in advice pairs with an imperative main clause — 'call us' — not a would-clause.", hi: "should-शर्त सलाह में मुख्य clause imperative होता है — 'call us' — would-वाक्य नहीं।" } },
            { wrong: "Had he came home earlier, the argument would never happen.", right: "Had he come home earlier, the argument would never have happened.", note: { bn: "had-এর পরে V3 (come); ফলও অতীতে (যুক্তি রাতের ঘটনা) — would never have happened।", en: "After had comes V3 (come); the result is also past (that night) — would never have happened.", hi: "had के बाद V3 (come); परिणाम भी भूतकाल में — would never have happened।" } },
            { wrong: "If the rain had stopped, we would go out yesterday.", right: "If the rain had stopped, we would have gone out yesterday.", note: { bn: "yesterday ফলকে অতীতে বাঁধলে would have gone — দুই ক্লজই অতীত হলে সেটা সাধারণ Type 3, মিক্সড নয়।", en: "'Yesterday' pins the result to the past — would have gone; with both clauses past it is plain Type 3, not mixed.", hi: "'yesterday' परिणाम को भूतकाल में बाँधता है — would have gone; दोनों भूतकाल हों तो साधारण Type 3।" } },
          ],
        },
        {
          heading: { bn: "📖 ছোট লেখায় দেখা যাক", en: "📖 A short passage", hi: "📖 छोटे लेख में देखें" },
          lead: {
            bn: "এক প্যারায় তিন inverted শর্ত আর এক mixed ফল — সব একসাথে।",
            en: "One paragraph, three inverted conditions and a mixed result — all together.",
            hi: "एक अनुच्छेद में तीन inverted शर्तें और एक mixed परिणाम — सब साथ।",
          },
          points: [
            { bn: "**Had Nadia revised the last chapter, she would be calmer now.** — অতীত শর্ত + বর্তমান ফল (মিক্সড + inverted)।", en: "**Had Nadia revised the last chapter, she would be calmer now.** — past condition + present result (mixed + inverted).", hi: "**Had Nadia revised the last chapter, she would be calmer now.** — भूतकाल शर्त + वर्तमान परिणाम (mixed + inverted)।" },
            { bn: "**...and were she to cry about it, nothing would change.** — were she to + মূল রূপ শর্ত।", en: "**...and were she to cry about it, nothing would change.** — were she to + base form is the condition.", hi: "**...and were she to cry about it, nothing would change.** — were she to + मूल रूप शर्त है।" },
            { bn: "**Should she choose to retake the paper in autumn, she would have three full months** — if she starts today।", en: "**Should she choose to retake the paper in autumn, she would have three full months** — if she starts today.", hi: "**Should she choose to retake the paper in autumn, she would have three full months** — if she starts today।" },
            { bn: "তিন ধরনের inverted শর্ত আর একটা মিক্সড ফল একসাথে — প্রতিটি বাক্য **সময় বদলে নতুন অর্থ** তৈরি করছে।", en: "Three kinds of inverted condition plus a mixed result together — every sentence **bends time to build new meaning**.", hi: "तीन तरह की inverted शर्त और एक mixed परिणाम साथ — हर वाक्य **समय बदलकर नया अर्थ** बनाता है।" },
            { bn: "এই ব্যবহারই **C1-এর চিহ্ন**।", en: "This flexibility **is the C1 signature**.", hi: "यही बहुलता **C1 की पहचान** है।" },
          ],
          examples: [
            { wrong: "If Nadia had revised the last chapter, she is calmer now.", right: "Had Nadia revised the last chapter, she would be calmer now.", note: { bn: "মিক্সড বাক্যে মূল ক্লজে is নয় — would be; চাইলে উল্টে আরও গাম্ভীর্য যোগ করুন।", en: "A mixed result takes would be, never is — and inverting the if-clause adds gravity.", hi: "mixed परिणाम में would be, is नहीं — inversion से गंभीरता भी जुड़ती है।" } },
            { wrong: "Were she to cry about it, nothing will change.", right: "Were she to cry about it, nothing would change.", note: { bn: "were she to + মূল রূপ শর্ত; ফলে would — দুই ক্লজের সুর মিলতে হয়।", en: "were she to + base form is the condition; the result takes would — the two clauses must rhyme.", hi: "were she to + मूल रूप शर्त है; परिणाम में would — दोनों clauses का सुर मिलना चाहिए।" } },
            { wrong: "Should she retake the paper, she would have three months yesterday.", right: "Should she retake the paper, she would have three full months.", note: { bn: "should-শর্ত ভবিষ্যৎ-পরিকল্পনা; অতীত-সময়বাচক (yesterday) এখানে বাক্য ভাঙে — সময়বাচক বাদ দিন বা সুর মেলান।", en: "A should-condition plans the future; a past time word (yesterday) wrecks it — drop it or move it.", hi: "should-शर्त भविष्यत् योजना है; भूतकाल शब्द (yesterday) इसे तोड़ देता है।" } },
            { wrong: "Had she started today, she would had three months.", right: "Had she started today, she would have three months.", note: { bn: "'would had' নেই — would have (মালিকানা বর্তমানে)। had-শর্ত আর would have-ফলের ভারসাম্য রাখুন।", en: "'Would had' does not exist — would have (present possession). Balance the had-condition with a would-have-free result.", hi: "'would had' अस्तित्व में नहीं — would have। had-शर्त और परिणाम का संतुलन रखें।" } },
            { wrong: "If she starts today, she would have three months.", right: "If she starts today, she will have three months. / If she started today, she would have three months.", note: { bn: "সাধারণ শর্তে সুর মেলান: বর্তমান-শর্ত + will, বা অতীত-রূপ-শর্ত + would — এক ক্লজ বাস্তব, এক ক্লজ কল্পনা থাকতে পারে না।", en: "Match the tones in plain conditionals: present + will, or past-form + would — one clause cannot be real while the other is imaginary.", hi: "सामान्य शर्त में सुर मिलाएँ: वर्तमान + will, या भूत रूप + would — एक clause वास्तविक, दूसरा काल्पनिक नहीं रह सकता।" } },
          ],
        },
        {
          heading: { bn: "📊 এক নজরে", en: "📊 At a glance", hi: "📊 एक नज़र में" },
          lead: {
            bn: "পুরো পাঠের ছক, নিয়ম আর অনুশীলন-সূত্র এক জায়গায়।",
            en: "The lesson's grid, rules and drill in one place.",
            hi: "पाठ का ग्रिड, नियम और अभ्यास-सूत्र एक जगह।",
          },
          points: [
            { bn: "দুই ক্লজের সময় আলাদা হলে **mixed** — ছক নিচে।", en: "Different clause times → **mixed** — the grid is below.", hi: "दोनों clauses का समय अलग → **mixed** — ग्रिड नीचे।" },
            { bn: "**সময়বাচক শব্দ** (now, today, last year) যে ক্লজে বসছে, সেটাই সেই ক্লজের সময় ঠিক করে।", en: "**Time words** (now, today, last year) fix the time of whichever clause they sit in.", hi: "**समय-शब्द** (now, today, last year) जिस क्लॉज़ में बैठते हैं, उसी का समय तय करते हैं।" },
            { bn: "**unreal বর্তমান-শর্তে were**।", en: "**Unreal present conditions take were**.", hi: "**अवास्तविक वर्तमान शर्त में were**।" },
            { bn: "**inverted রূপ**: Had/Were/Should + কর্তা; নেগেটিভে not কর্তার পরে (Had I not...)।", en: "**Inverted forms**: Had/Were/Should + subject; negatives keep not after the subject (Had I not...).", hi: "**inverted रूप**: Had/Were/Should + कर्ता; नकारात्मक में not कर्ता के बाद (Had I not...)।" },
            { bn: "উল্টে গেলেও **টেন্স বদলায় না** — ফল-ক্লজের সময় অনুযায়ী would be / would have।", en: "Inversion never changes **tense** — would be / would have by the result-clause's time.", hi: "उलटने पर भी **tense नहीं बदलता** — परिणाम-क्लॉज़ के समय अनुसार would be / would have।" },
            { bn: "**should-শর্ত = ভবিষ্যৎ ঝুঁকি** — ফল ভবিষ্যৎ বা imperative।", en: "**A should-condition = future risk** — the result is future or imperative.", hi: "**should-शर्त = भविष्यत् जोखिम** — परिणाम भविष्यत् या imperative।" },
            { bn: "অনুশীলন-সূত্র: আগে **'শর্ত: ?, ফল: ?'** লিখুন, পরে ছক মেলান।", en: "Drill: write **'condition: ?, result: ?'** first, then match the grid.", hi: "अभ्यास-सूत्र: पहले **'शर्त: ?, परिणाम: ?'** लिखें, फिर ग्रिड मिलाएँ।" },
          ],
          table: {
            head: [{ bn: "মিশ্রণ", en: "Mix", hi: "मिश्रण" }, { bn: "শর্ত-ক্লজ", en: "if-clause", hi: "शर्त-क्लॉज़" }, { bn: "ফল-ক্লজ", en: "result clause", hi: "परिणाम-क्लॉज़" }],
            rows: [
              [{ bn: "অতীত → বর্তমান (3→2)", en: "past → present (3→2)", hi: "भूतकाल → वर्तमान (3→2)" }, { bn: "had + V3", en: "had + V3", hi: "had + V3" }, { bn: "would + V1", en: "would + V1", hi: "would + V1" }],
              [{ bn: "বর্তমান → অতীত (2→3)", en: "present → past (2→3)", hi: "वर्तमान → भूतकाल (2→3)" }, { bn: "past simple", en: "past simple", hi: "past simple" }, { bn: "would have + V3", en: "would have + V3", hi: "would have + V3" }],
            ],
          },
          examples: [
            { wrong: "If I had known about the flood, I would donate money now.", right: "If I had known about the flood, I would be donating money now. / I would donate money now. (result present)", note: { bn: "বর্তমান-ফলে would + V1 চলে, চলমান ভাব দিতে would be donating — will/would have নয়।", en: "A present result takes would + V1 (or would be donating for the ongoing feel) — never will or would have.", hi: "वर्तमान परिणाम में would + V1 (या would be donating) — will या would have नहीं।" } },
            { wrong: "Were it not for your help, I will fail.", right: "Were it not for your help, I would have failed.", note: { bn: "'Were it not for...' ফ্রেজ অতীতের ঋণ বোঝালে ফল অতীতে: would have failed; বর্তমান-সুর চাইলে I would be failing।", en: "'Were it not for...' with a past debt takes a past result: would have failed (present flavour: I would be failing).", hi: "'Were it not for...' के साथ भूतकाल ऋण हो तो would have failed।" } },
            { wrong: "Had the train not been late, we caught the flight.", right: "Had the train not been late, we would have caught the flight.", note: { bn: "শর্ত উল্টে গেলেও ফল-ক্লজে would have লাগবেই — খালি অতীত (caught) কল্পনার অর্থ হারায়।", en: "Even with an inverted condition, the result clause needs would have — plain caught loses the unreal meaning.", hi: "शर्त उलटने पर भी परिणाम में would have चाहिए — खाला caught अवास्तविक अर्थ खो देता है।" } },
            { wrong: "Should you change your mind, you would inform us.", right: "Should you change your mind, please inform us. / you can inform us.", note: { bn: "should-শর্তে ফল সাধারণত imperative বা can/will-সুরের — would inform ভারী ও অতীত-সুরের লাগে।", en: "A should-condition usually pairs with an imperative or can/will result — would inform sounds heavy and past-flavoured.", hi: "should-शर्त के साथ imperative या can/will परिणाम — would inform भारी लगता है।" } },
            { wrong: "If he had been more careful, he would not lose his wallet last week.", right: "If he had been more careful, he would not have lost his wallet last week.", note: { bn: "last week ফলকে অতীতে বাঁধে — would not have lost; দুই ক্লজ অতীত = সাধারণ Type 3।", en: "'Last week' pins the result to the past — would not have lost; both clauses past = plain Type 3.", hi: "'last week' परिणाम को भूतकाल में बाँधता है — would not have lost; दोनों भूतकाल = साधारण Type 3।" } },
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

export default SEED_GRAMMAR_V4_A2A;
