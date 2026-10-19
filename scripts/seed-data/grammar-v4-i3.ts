// ─── Grammar seeds v4: INTERMEDIATE anchor batch I3 (2 lessons) ───
// Task 10-C24 — point-form roadmap upgrade. Source: grammar-v3-i3.ts →
// "Tense basics" (unit 1) + "Articles (a/an/the)" (unit 2), both intermediate
// learning-path anchors (units kept EXACTLY as 1 and 2). v4 shape: roadmap +
// emoji headings + lead + points (body omitted) + formula boxes + tables.
// title/intro/tips/quiz/examples copied UNCHANGED from the v3 source.
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_I3: SeedGrammarV4Entry[] = [
  /* ── 1. Tense basics (Intermediate) ────────────────────────────────── */
  {
    topic: "Tense basics",
    level: "intermediate",
    title: "Tense basics (Intermediate)",
    unit: 1,
    sortOrder: 0,
    data: {
      title: {
        bn: "টেন্সের বেসিক (মধ্যম স্তর)",
        en: "Tense basics (Intermediate)",
        hi: "टेंस बेसिक (मध्यम स्तर)",
      },
      intro: {
        bn: "বিগিনার স্তরের Tense basics পাঠে আমরা তিন মূল কাল চিনেছিলাম, আর intermediate-এর Present Perfect vs Past Simple পাঠে পারফেক্টের খুঁটিনাটি। এবার পুরো মানচিত্রটা এক ক্যানভাসে: তিন সময় × চার aspect = বারো কাল-পরিবার — কোনটা কখন, আর কোন আভাস-শব্দ কোনটার ঘণ্টা বাজায়। সাথে মধ্যম স্তরের তিনটে গভীর-ডাইভ: state বনাম action ক্রিয়া, অনুচ্ছেদে কালের ধারাবাহিকতা, আর বাংলা করি/করছি/করেছি/করব-এর aspect-ম্যাপ সহ future-in-the-past ('যাওয়ার কথা ছিল' = was going to)। শর্ত: বিগিনার Tense basics পাঠটা পাকা থাকা দরকার — এখানে আমরা সেই ভিতের ওপরেই দ্রুত গতিতে উঠব।",
        en: "The beginner Tense basics lesson introduced the three main tenses, and the intermediate Present Perfect vs Past Simple lesson went deep into the perfect. Now we draw the whole map on one canvas: three times × four aspects = twelve tense families — which one is used when, and which signal word rings which family's bell. Alongside come three intermediate deep-dives: state vs action verbs, tense consistency inside paragraphs, and the Bengali করি/করছি/করেছি/করব aspect-mapping together with future-in-the-past ('was going to'). Condition: the beginner Tense basics lesson must be solid — we will climb fast on that foundation.",
        hi: "बिगिनर स्तर के Tense basics पाठ में हमने तीन मूल काल देखे थे, और intermediate के Present Perfect vs Past Simple पाठ में perfect की बारीकियाँ। अब पूरा नक्शा एक कैनवास पर: तीन समय × चार aspects = बारह काल-परिवार — कौन-सा कब, और कौन-सा संकेत-शब्द किसकी घंटी बजाता है। साथ में मध्यम स्तर के तीन गहरे-डाइव: state बनाम action क्रियाएँ, अनुच्छेद में काल की निरंतरता, और बांग्ला करि/करछि/करेछि/करब की aspect-मैपिंग सहित future-in-the-past ('was going to')। शर्त: बिगिनर Tense basics पाठ पक्का होना चाहिए — हम उसी नींव पर तेज़ी से चढ़ेंगे।",
      },
      roadmap: [
        { bn: "📊 তিন সময় × চার aspect = বারো পরিবারের মানচিত্র", en: "📊 The full map: three times × four aspects = twelve families", hi: "📊 पूरा नक्शा: तीन समय × चार aspects = बारह परिवार" },
        { bn: "⏰ Present সারি — এখনকার চার পরিবার", en: "⏰ The present row — the four families of now", hi: "⏰ Present पंक्ति — 'अभी' के चार परिवार" },
        { bn: "⏳ Past সারি — অতীতের চার পরিবার", en: "⏳ The past row — the four families of then", hi: "⏳ Past पंक्ति — 'तब' के चार परिवार" },
        { bn: "🔮 Future সারি — আগামীর চার পরিবার", en: "🔮 The future row — the four families of tomorrow", hi: "🔮 Future पंक्ति — 'कल' के चार परिवार" },
        { bn: "🏗️ এক ক্রিয়াকে (eat) বারো রূপে পরান", en: "🏗️ Dressing one verb (eat) in all twelve forms", hi: "🏗️ एक क्रिया (eat) को बारह रूपों में" },
        { bn: "🔐 প্রশ্ন-নেগেটিভ — সহায়কই চাবি", en: "🔐 Questions and negatives — the helper holds the key", hi: "🔐 प्रश्न-नकार — सहायक ही चाबी" },
        { bn: "🚦 আভাস শব্দের ঘণ্টা-ছক — শব্দ শুনে পরিবার চেনা", en: "🚦 The signal-word bell table — hear the word, name the family", hi: "🚦 संकेत-शब्द घंटी-तालिका — शब्द सुनो, परिवार पहचानो" },
        { bn: "🧠 State বনাম action ক্রিয়া — যেগুলো -ing পায় না", en: "🧠 State vs action verbs — the ones that refuse -ing", hi: "🧠 State बनाम action क्रियाएँ — जो -ing नहीं लेतीं" },
        { bn: "🔀 দ্বি-অর্থ ক্রিয়া — অর্থ বদলালে জাত বদলায়", en: "🔀 Double-meaning verbs — new meaning, new class", hi: "🔀 दोहरे-अर्थ क्रियाएँ — अर्थ बदला तो वर्ग बदला" },
        { bn: "✍️ অনুচ্ছেদে কাল-নোঙর — সুর এক রাখার নিয়ম", en: "✍️ The paragraph anchor — keeping one tense key", hi: "✍️ अनुच्छेद का लंगर — एक सुर रखने के नियम" },
        { bn: "🌉 বাংলা ম্যাপ: করি/করছি/করেছি/করব কোন aspect-এ", en: "🌉 The Bengali map: করি/করছি/করেছি/করব onto the aspects", hi: "🌉 बांग्ला नक्शा: करि/करछि/करेछि/करब कौन-से aspect में" },
        { bn: "🔁 বর্ধিত ম্যাপ ও future-in-the-past — 'যাওয়ার কথা ছিল'", en: "🔁 The extended map and future-in-the-past — 'was going to'", hi: "🔁 विस्तारित नक्शा और future-in-the-past — 'जाने की बात थी'" },
        { bn: "⚠️ বাঙালি শিক্ষার্থীদের ৩টা ফাঁদ + since/for-বোনাস", en: "⚠️ Three Bengali-speaker traps + the since/for bonus", hi: "⚠️ बांग्लाभाषियों के 3 जाल + since/for बोनस" },
        { bn: "📖 রাফির এক দিনের গল্পে ছয় পরিবার", en: "📖 Six families in one day of Rafi's story", hi: "📖 राफ़ी के एक दिन में छह परिवार" },
        { bn: "🧾 এক নজরে recap — পুরো পাঠ পাঁচ লাইনে", en: "🧾 At a glance — the whole lesson in five lines", hi: "🧾 एक नज़र में — पूरा पाठ पाँच पंक्तियों में" },
      ],
      sections: [
        {
          heading: {
            bn: "📊 পুরো মানচিত্র — তিন সময় × চার aspect = বারো কাল-পরিবার",
            en: "📊 The full map — three times × four aspects = twelve tense families",
            hi: "📊 पूरा नक्शा — तीन समय × चार aspects = बारह काल-परिवार",
          },
          lead: {
            bn: "ইংরেজির কাল একটা জাল — তিন সময়ের সঙ্গে চার রূপ মিলে বারো পরিবার; দুটো প্রশ্নেই ঠিক ঘর মেলে।",
            en: "English tenses are a net — three times crossed with four forms make twelve families; two questions find the right family.",
            hi: "अंग्रेज़ी काल एक जाल है — तीन समय × चार रूप = बारह परिवार; दो सवालों में सही डिब्बा मिलता है।",
          },
          points: [
            { bn: "**তিন সময় × চার aspect** — past/present/future জুড়ুন simple, continuous, perfect, perfect continuous-এর সঙ্গে: ৩ × ৪ = ১২ পরিবার।", en: "**Three times × four aspects** — cross past/present/future with simple, continuous, perfect, perfect continuous: 3 × 4 = 12 families.", hi: "**तीन समय × चार aspects** — past/present/future को simple, continuous, perfect, perfect continuous से मिलाइए: 3 × 4 = 12 परिवार।" },
            { bn: "**simple** — বাক্সবন্দি এক তথ্য: I work in a bank।", en: "**simple** — one boxed fact: I work in a bank.", hi: "**simple** — बंद डिब्बे का एक तथ्य: I work in a bank।" },
            { bn: "**continuous** — ক্যামেরার সামনে চলছে: I am working।", en: "**continuous** — running in front of the camera: I am working.", hi: "**continuous** — कैमरे के सामने चल रहा: I am working।" },
            { bn: "**perfect** — ফল এখনো সাথে: I have worked here for five years।", en: "**perfect** — the result is still attached: I have worked here for five years.", hi: "**perfect** — नतीजा अब भी साथ: I have worked here for five years।" },
            { bn: "**perfect continuous** — কতক্ষণ ধরে চলছে — এরা সময়-মাপ চায়: I have been working since 2020।", en: "**perfect continuous** — running for how long — it asks for a duration: I have been working since 2020.", hi: "**perfect continuous** — कितने समय से चल रहा — अवधि माँगता है: I have been working since 2020।" },
            { bn: "বাক্য বাঁধার আগে দুটো প্রশ্ন: কোন সময়ে? আর দর্শক কোথা থেকে দেখছে — বাক্সের বাইরে, চলন্ত ক্যামেরায়, না ফলের হিসাবে?", en: "Before building a sentence ask two questions: which time? And where is the viewer standing — outside the box, inside the running scene, or counting the result?", hi: "वाक्य बनाने से पहले दो सवाल: कौन-सा समय? और दर्शक कहाँ खड़ा है — डिब्बे के बाहर, चलते दृश्य में, या नतीजे की गिनती में?" },
          ],
          table: {
            head: [{ bn: "পরিবার", en: "Family", hi: "परिवार" }, { bn: "মানে", en: "Meaning", hi: "अर्थ" }, { bn: "নমুনা", en: "Sample", hi: "नमूना" }],
            rows: [
              [{ bn: "present simple", en: "present simple", hi: "present simple" }, { bn: "অভ্যাস বা সত্য", en: "habit or truth", hi: "आदत या सत्य" }, { bn: "I work in a bank", en: "I work in a bank", hi: "I work in a bank" }],
              [{ bn: "present continuous", en: "present continuous", hi: "present continuous" }, { bn: "এখন চলছে", en: "running now", hi: "अभी चल रहा" }, { bn: "I am working", en: "I am working", hi: "I am working" }],
              [{ bn: "present perfect", en: "present perfect", hi: "present perfect" }, { bn: "এখন পর্যন্ত ফল", en: "result up to now", hi: "अब तक का नतीजा" }, { bn: "I have worked here for five years", en: "I have worked here for five years", hi: "I have worked here for five years" }],
              [{ bn: "present perfect continuous", en: "present perfect continuous", hi: "present perfect continuous" }, { bn: "কতদিন ধরে", en: "for how long", hi: "कब से" }, { bn: "I have been working since 2020", en: "I have been working since 2020", hi: "I have been working since 2020" }],
              [{ bn: "past simple", en: "past simple", hi: "past simple" }, { bn: "শেষ হওয়া ঘটনা", en: "finished event", hi: "खत्म हुई घटना" }, { bn: "I worked there", en: "I worked there", hi: "I worked there" }],
              [{ bn: "past continuous", en: "past continuous", hi: "past continuous" }, { bn: "অতীতে চলছিল", en: "was running then", hi: "तब चल रहा था" }, { bn: "I was working at nine", en: "I was working at nine", hi: "I was working at nine" }],
              [{ bn: "past perfect", en: "past perfect", hi: "past perfect" }, { bn: "এক অতীতের আগের অতীত", en: "the earlier of two pasts", hi: "दो अतीतों में पहला" }, { bn: "I had worked there before they came", en: "I had worked there before they came", hi: "I had worked there before they came" }],
              [{ bn: "past perfect continuous", en: "past perfect continuous", hi: "past perfect continuous" }, { bn: "অতীত-বিন্দু পর্যন্ত ধরে", en: "up to a past point", hi: "अतीत-बिंदु तक" }, { bn: "I had been working for two hours when the power went", en: "I had been working for two hours when the power went", hi: "I had been working for two hours when the power went" }],
              [{ bn: "future simple", en: "future simple", hi: "future simple" }, { bn: "ভবিষ্যতের তথ্য/সিদ্ধান্ত", en: "future fact/decision", hi: "भविष्य का तथ्य/निर्णय" }, { bn: "I will work tomorrow", en: "I will work tomorrow", hi: "I will work tomorrow" }],
              [{ bn: "future continuous", en: "future continuous", hi: "future continuous" }, { bn: "ভবিষ্যতে চলবে", en: "running at a future time", hi: "भविष्य में चलेगा" }, { bn: "I will be working at noon", en: "I will be working at noon", hi: "I will be working at noon" }],
              [{ bn: "future perfect", en: "future perfect", hi: "future perfect" }, { bn: "ভবিষ্যৎ-বিন্দুর আগেই শেষ", en: "done before a future point", hi: "भविष्य-बिंदु से पहले खत्म" }, { bn: "I will have finished by six", en: "I will have finished by six", hi: "I will have finished by six" }],
              [{ bn: "future perfect continuous", en: "future perfect continuous", hi: "future perfect continuous" }, { bn: "ভবিষ্যৎ-বিন্দু পর্যন্ত মাপ", en: "up to a future point", hi: "भविष्य-बिंदु तक की अवधि" }, { bn: "I will have been working for ten years by 2030", en: "I will have been working for ten years by 2030", hi: "I will have been working for ten years by 2030" }],
            ],
          },
          examples: [
            { wrong: "I work in Chittagong right now — only for this project.", right: "I am working in Chittagong right now — only for this project.", note: { bn: "'right now' = ক্যামেরার সামনে চলছে → present continuous; simple বললে স্থায়ী অভ্যাস শোনায়।", en: "'Right now' = running before the camera → present continuous; the simple would sound like a permanent habit.", hi: "'right now' = कैमरे के सामने चल रहा → present continuous; simple कहने पर स्थायी आदत लगेगी।" } },
            { wrong: "When the phone rang, I cooked.", right: "When the phone rang, I was cooking.", note: { bn: "ফোন পড়ার সময় রান্না চলছিল — অতীতের চলমান পটভূমি → past continuous।", en: "The cooking was in progress when the phone rang — a running past backdrop → past continuous.", hi: "फोन बजने के समय खाना बन रहा था — अतीत की चलती पृष्ठभूमि → past continuous।" } },
            { wrong: "She had finished the report yesterday.", right: "She finished the report yesterday.", note: { bn: "past perfect চায় দুই অতীত-ধাপ; yesterday একটাই অতীত → past simple।", en: "The past perfect needs two past steps; yesterday is a single past → past simple.", hi: "past perfect को दो अतीत-चरण चाहिए; yesterday एक ही अतीत → past simple।" } },
            { wrong: "Tomorrow at this time I will sleep.", right: "Tomorrow at this time I will be sleeping.", note: { bn: "ভবিষ্যতের নির্দিষ্ট সময়ে চলমান দৃশ্য → future continuous।", en: "A scene running at a fixed future time → future continuous.", hi: "भविष्य के निश्चित समय पर चलता दृश्य → future continuous।" } },
            { wrong: "By next June I will teach here for ten years.", right: "By next June I will have been teaching here for ten years.", note: { bn: "by + ভবিষ্যৎ-বিন্দু + সময়-মাপ → future perfect continuous; মাপের জোর continuous-এই।", en: "By + a future point + a duration → future perfect continuous; the duration emphasis lives in the continuous.", hi: "by + भविष्य-बिंदु + अवधि → future perfect continuous; अवधि का ज़ोर continuous में।" } },
          ],
        },
        {
          heading: {
            bn: "⏰ Present সারি — এখনকার চার পরিবার",
            en: "⏰ The present row — the four families of now",
            hi: "⏰ Present पंक्ति — 'अभी' के चार परिवार",
          },
          lead: {
            bn: "এখনকার জগৎটা চার ভাগে দেখা যায় — অভ্যাস, চলছে, ফল সাথে, আর কতক্ষণ ধরে।",
            en: "The world of now splits four ways — habit, running, result attached, and for how long.",
            hi: "'अभी' की दुनिया चार हिस्सों में दिखती है — आदत, चल रहा, नतीजा साथ, और कितने समय से।",
          },
          formula: {
            bn: "simple: do/does + V1 · continuous: am/is/are + -ing · perfect: have/has + V3 · perfect continuous: have/has been + -ing",
            en: "simple: do/does + V1 · continuous: am/is/are + -ing · perfect: have/has + V3 · perfect continuous: have/has been + -ing",
            hi: "simple: do/does + V1 · continuous: am/is/are + -ing · perfect: have/has + V3 · perfect continuous: have/has been + -ing",
          },
          points: [
            { bn: "**present simple** — অভ্যাস বা সত্য: I work in a bank।", en: "**present simple** — habits or facts: I work in a bank.", hi: "**present simple** — आदत या सत्य: I work in a bank।" },
            { bn: "**present continuous** — এই মুহূর্তে চলছে: I am working।", en: "**present continuous** — running this very moment: I am working.", hi: "**present continuous** — इस क्षण चल रहा: I am working।" },
            { bn: "**present perfect** — এখন পর্যন্ত ফল জমা: I have worked here for five years।", en: "**present perfect** — result stored up to now: I have worked here for five years.", hi: "**present perfect** — अब तक जमा नतीजा: I have worked here for five years।" },
            { bn: "**present perfect continuous** — কতদিন ধরে চলছে: I have been working since 2020।", en: "**present perfect continuous** — running for how long: I have been working since 2020.", hi: "**present perfect continuous** — कब से चल रहा: I have been working since 2020।" },
            { bn: "সহায়ক-সারি present-এই থাকে — বদলায় শুধু দরজা: do/does → am/is/are → have/has → have/has been।", en: "All four helpers stay in the present — only the door changes: do/does → am/is/are → have/has → have/has been.", hi: "चारों सहायक present में ही रहते हैं — बदलता केवल दरवाज़ा: do/does → am/is/are → have/has → have/has been।" },
          ],
          examples: [
            { wrong: "I work in Chittagong right now — only for this project.", right: "I am working in Chittagong right now — only for this project.", note: { bn: "'right now' = ক্যামেরার সামনে চলছে → present continuous; simple বললে স্থায়ী অভ্যাস শোনায়।", en: "'Right now' = running before the camera → present continuous; the simple would sound like a permanent habit.", hi: "'right now' = कैमरे के सामने चल रहा → present continuous; simple कहने पर स्थायी आदत लगेगी।" } },
          ],
        },
        {
          heading: {
            bn: "⏳ Past সারি — অতীতের চার পরিবার",
            en: "⏳ The past row — the four families of then",
            hi: "⏳ Past पंक्ति — 'तब' के चार परिवार",
          },
          lead: {
            bn: "অতীতের ছবিটাও চার ভাগে — শেষ হওয়া ঘটনা, তখন চলছিল, আগের অতীত, আর অতীত-বিন্দু পর্যন্ত মাপ।",
            en: "The past picture splits four ways too — finished event, running then, the earlier past, and a span up to a past point.",
            hi: "अतीत का चित्र भी चार हिस्सों में — खत्म घटना, तब चल रहा, पहले का अतीत, और अतीत-बिंदु तक की अवधि।",
          },
          formula: {
            bn: "simple: V2 · continuous: was/were + -ing · perfect: had + V3 · perfect continuous: had been + -ing",
            en: "simple: V2 · continuous: was/were + -ing · perfect: had + V3 · perfect continuous: had been + -ing",
            hi: "simple: V2 · continuous: was/were + -ing · perfect: had + V3 · perfect continuous: had been + -ing",
          },
          points: [
            { bn: "**past simple** — শেষ হওয়া ঘটনা: I worked there।", en: "**past simple** — a finished event: I worked there.", hi: "**past simple** — खत्म हुई घटना: I worked there।" },
            { bn: "**past continuous** — অতীতের কোনো মুহূর্তে চলছিল: I was working at nine।", en: "**past continuous** — running at some past moment: I was working at nine.", hi: "**past continuous** — अतीत के किसी क्षण में चल रहा था: I was working at nine।" },
            { bn: "**past perfect** — এক অতীতের আগের অতীত: I had worked there before they came।", en: "**past perfect** — the earlier of two pasts: I had worked there before they came.", hi: "**past perfect** — दो अतीतों में पहला: I had worked there before they came।" },
            { bn: "**past perfect continuous** — অতীত-বিন্দু পর্যন্ত ধরে: I had been working for two hours when the power went।", en: "**past perfect continuous** — a span up to a past point: I had been working for two hours when the power went.", hi: "**past perfect continuous** — अतीत-बिंदु तक की अवधि: I had been working for two hours when the power went।" },
            { bn: "সহায়ক-সারি past-এ পিছায়: do/did → was/were → had → had been।", en: "The helper row steps back into the past: do/did → was/were → had → had been.", hi: "सहायक-पंक्ति past में पीछे जाती है: do/did → was/were → had → had been।" },
          ],
          examples: [
            { wrong: "When the phone rang, I cooked.", right: "When the phone rang, I was cooking.", note: { bn: "ফোন পড়ার সময় রান্না চলছিল — অতীতের চলমান পটভূমি → past continuous।", en: "The cooking was in progress when the phone rang — a running past backdrop → past continuous.", hi: "फोन बजने के समय खाना बन रहा था — अतीत की चलती पृष्ठभूमि → past continuous।" } },
            { wrong: "She had finished the report yesterday.", right: "She finished the report yesterday.", note: { bn: "past perfect চায় দুই অতীত-ধাপ; yesterday একটাই অতীত → past simple।", en: "The past perfect needs two past steps; yesterday is a single past → past simple.", hi: "past perfect को दो अतीत-चरण चाहिए; yesterday एक ही अतीत → past simple।" } },
          ],
        },
        {
          heading: {
            bn: "🔮 Future সারি — আগামীর চার পরিবার",
            en: "🔮 The future row — the four families of tomorrow",
            hi: "🔮 Future पंक्ति — 'कल' के चार परिवार",
          },
          lead: {
            bn: "ভবিষ্যতের চার দরজাও একই ছকে — তথ্য, চলবে, আগেই শেষ, আর বিন্দু পর্যন্ত মাপ।",
            en: "The future opens the same four doors — a fact, running then, finished before a point, and a span up to it.",
            hi: "भविष्य के भी वही चार दरवाज़े — तथ्य, चलेगा, बिंदु से पहले खत्म, और बिंदु तक की अवधि।",
          },
          formula: {
            bn: "simple: will + V1 · continuous: will be + -ing · perfect: will have + V3 · perfect continuous: will have been + -ing",
            en: "simple: will + V1 · continuous: will be + -ing · perfect: will have + V3 · perfect continuous: will have been + -ing",
            hi: "simple: will + V1 · continuous: will be + -ing · perfect: will have + V3 · perfect continuous: will have been + -ing",
          },
          points: [
            { bn: "**future simple** — ভবিষ্যতের তথ্য বা সিদ্ধান্ত: I will work tomorrow।", en: "**future simple** — a future fact or decision: I will work tomorrow.", hi: "**future simple** — भविष्य का तथ्य या निर्णय: I will work tomorrow।" },
            { bn: "**future continuous** — ভবিষ্যতের কোনো সময়ে চলবে: I will be working at noon।", en: "**future continuous** — running at some future time: I will be working at noon.", hi: "**future continuous** — भविष्य के किसी समय चलेगा: I will be working at noon।" },
            { bn: "**future perfect** — ভবিষ্যৎ-বিন্দুর আগেই শেষ: I will have finished by six।", en: "**future perfect** — done before a future point: I will have finished by six.", hi: "**future perfect** — भविष्य-बिंदु से पहले ही खत्म: I will have finished by six।" },
            { bn: "**future perfect continuous** — ভবিষ্যৎ-বিন্দু পর্যন্ত মাপ: I will have been working for ten years by 2030।", en: "**future perfect continuous** — a span up to a future point: I will have been working for ten years by 2030.", hi: "**future perfect continuous** — भविष्य-बिंदु तक की अवधि: I will have been working for ten years by 2030।" },
            { bn: "future-এর সব দরজার চাবি একটাই — will সামনে, পেছনে রূপ বদলায় না।", en: "Every future door opens with one key — will leads, and nothing behind it changes form.", hi: "भविष्य के हर दरवाज़े की चाबी एक ही — will आगे, पीछे कुछ भी रूप नहीं बदलता।" },
          ],
          examples: [
            { wrong: "Tomorrow at this time I will sleep.", right: "Tomorrow at this time I will be sleeping.", note: { bn: "ভবিষ্যতের নির্দিষ্ট সময়ে চলমান দৃশ্য → future continuous।", en: "A scene running at a fixed future time → future continuous.", hi: "भविष्य के निश्चित समय पर चलता दृश्य → future continuous।" } },
            { wrong: "By next June I will teach here for ten years.", right: "By next June I will have been teaching here for ten years.", note: { bn: "by + ভবিষ্যৎ-বিন্দু + সময়-মাপ → future perfect continuous; মাপের জোর continuous-এই।", en: "By + a future point + a duration → future perfect continuous; the duration emphasis lives in the continuous.", hi: "by + भविष्य-बिंदु + अवधि → future perfect continuous; अवधि का ज़ोर continuous में।" } },
          ],
        },
        {
          heading: {
            bn: "🏗️ গঠন — এক ক্রিয়াকে (eat) বারো রূপে পরান",
            en: "🏗️ Formation — dressing one verb (eat) in twelve forms",
            hi: "🏗️ गठन — एक क्रिया (eat) को बारह रूपों में",
          },
          lead: {
            bn: "একটা ক্রিয়া ধরুন, বারো রূপ লিখে ফেলুন — মানচিত্রটা তখন হাতের মুঠোয়।",
            en: "Take one verb and write all twelve forms — the map then fits in your fist.",
            hi: "एक क्रिया लीजिए, बारह रूप लिख डालिए — नक्शा फिर मुट्ठी में।",
          },
          formula: {
            bn: "continuous = যথাযথ কালের be + -ing; perfect = যথাযথ কালের have + V3; perfect continuous = যথাযথ কালের have been + -ing",
            en: "continuous = right-tense be + -ing; perfect = right-tense have + V3; perfect continuous = right-tense have been + -ing",
            hi: "continuous = सही काल का be + -ing; perfect = सही काल का have + V3; perfect continuous = सही काल का have been + -ing",
          },
          points: [
            { bn: "এক ক্রিয়া (eat) দিয়েই বারোটা রূপ লেখা যায় — নিচের ছকে তিন সময়ের চারটা করে ধাপ।", en: "One verb (eat) is enough to write all twelve forms — the table below shows four steps for each time.", hi: "एक क्रिया (eat) से ही बारहों रूप लिखे जा सकते हैं — नीचे तालिका में हर समय के चार चरण।" },
            { bn: "বদলায় শুধু সহায়কের কাল-রূপ: am/is/are → was/were → will be; have/has → had → will have।", en: "Only the helper's tense changes: am/is/are → was/were → will be; have/has → had → will have.", hi: "बदलता केवल सहायक का काल: am/is/are → was/were → will be; have/has → had → will have।" },
            { bn: "মূল ক্রিয়া কখনো রূপ বদলায় না — এই একটা লাইন মনে রাখলেই বারোটা রূপ হাতের মুঠোয়।", en: "The main verb never changes form — keep this one line and all twelve forms fit in your fist.", hi: "मुख्य क्रिया कभी रूप नहीं बदलती — यही एक पंक्ति याद रखें, बारहों रूप मुट्ठी में।" },
          ],
          table: {
            head: [{ bn: "সময়", en: "Time", hi: "समय" }, { bn: "eat-এর চার রূপ", en: "The four forms of eat", hi: "eat के चार रूप" }],
            rows: [
              [{ bn: "Present", en: "Present", hi: "Present" }, { bn: "I eat / I am eating / I have eaten / I have been eating", en: "I eat / I am eating / I have eaten / I have been eating", hi: "I eat / I am eating / I have eaten / I have been eating" }],
              [{ bn: "Past", en: "Past", hi: "Past" }, { bn: "I ate / I was eating / I had eaten / I had been eating", en: "I ate / I was eating / I had eaten / I had been eating", hi: "I ate / I was eating / I had eaten / I had been eating" }],
              [{ bn: "Future", en: "Future", hi: "Future" }, { bn: "I will eat / I will be eating / I will have eaten / I will have been eating", en: "I will eat / I will be eating / I will have eaten / I will have been eating", hi: "I will eat / I will be eating / I will have eaten / I will have been eating" }],
            ],
          },
          examples: [
            { wrong: "He will goes to school tomorrow.", right: "He will go to school tomorrow.", note: { bn: "will-এর পরে base verb; -s শুধু simple present-এর তৃতীয় পুরুষ একবচনে।", en: "After will comes the base verb; -s belongs only to the third-person singular of the simple present.", hi: "will के बाद base verb; -s केवल simple present के तृतीय-पुरुष एकवचन में।" } },
            { wrong: "She has ate already.", right: "She has eaten already.", note: { bn: "perfect মানেই have + V3 — eaten; ate একা past simple-এ বসে।", en: "Perfect = have + V3 — eaten; ate stands alone in the past simple.", hi: "perfect = have + V3 — eaten; ate अकेला past simple में आता है।" } },
            { wrong: "I didn't went there.", right: "I didn't go there.", note: { bn: "did নিজেই অতীত বহন করে — তার পরে base form go; went দ্বিতীয়বার অসম্ভব।", en: "did already carries the past — after it the base form go; a second went is impossible.", hi: "did अतीत पहले से ले जाता है — उसके बाद base form go; दूसरा went असंभव।" } },
            { wrong: "He is live in Dhaka.", right: "He lives in Dhaka. (বা He is living in Dhaka.)", note: { bn: "am/is/are আর base verb একসাথে বসে না; হয় simple (lives), নয় continuous (is living)।", en: "am/is/are never pairs with the base verb; choose the simple (lives) or the continuous (is living).", hi: "am/is/are base verb के साथ नहीं आता; या simple (lives), या continuous (is living)।" } },
            { wrong: "I was work when he came.", right: "I was working when he came.", note: { bn: "past continuous = was/were + -ing; be-এর পরে base verb বসে না।", en: "Past continuous = was/were + -ing; no base verb after be.", hi: "past continuous = was/were + -ing; be के बाद base verb नहीं।" } },
          ],
        },
        {
          heading: {
            bn: "🔐 প্রশ্ন-নেগেটিভ — সহায়কই চাবি",
            en: "🔐 Questions and negatives — the helper holds the key",
            hi: "🔐 प्रश्न-नकार — सहायक ही चाबी",
          },
          lead: {
            bn: "প্রশ্নে সহায়ক সামনে, নেগেটিভে not-এর পাশে — মূল ক্রিয়া ছোঁয়াই যাবে না।",
            en: "In questions the helper moves to the front, in negatives beside not — the main verb is never touched.",
            hi: "प्रश्न में सहायक आगे, नकार में not के पास — मुख्य क्रिया छुई भी नहीं।",
          },
          formula: {
            bn: "প্রশ্ন: সহায়ক + কর্তা + ...; নেগেটিভ: কর্তা + সহায়ক + not + ...",
            en: "Question: helper + subject + ...; negative: subject + helper + not + ...",
            hi: "प्रश्न: सहायक + कर्ता + ...; नकार: कर्ता + सहायक + not + ...",
          },
          points: [
            { bn: "**প্রশ্ন** — সহায়ক কর্তার সামনে: Do you eat? Are you eating? Have you eaten? Will you eat?", en: "**Questions** — the helper moves in front of the subject: Do you eat? Are you eating? Have you eaten? Will you eat?", hi: "**प्रश्न** — सहायक कर्ता से आगे: Do you eat? Are you eating? Have you eaten? Will you eat?" },
            { bn: "**নেগেটিভ** — not সহায়কের পাশে: I don't eat; I'm not eating; I haven't eaten; I won't eat।", en: "**Negatives** — not sits beside the helper: I don't eat; I'm not eating; I haven't eaten; I won't eat.", hi: "**नकार** — not सहायक के पास: I don't eat; I'm not eating; I haven't eaten; I won't eat।" },
            { bn: "সহাযক না থাকলে do/does/did ডেকে আনুন — তারপর মূল ক্রিয়া মূল রূপে থাকবে।", en: "No helper? Call do/does/did — then the main verb stays in its base form.", hi: "सहायक नहीं है तो do/does/did बुलाइए — फिर मुख्य क्रिया मूल रूप में रहेगी।" },
            { bn: "মূল ক্রিয়া কখনো রূপ বদলায় না — বদলায় শুধু সহায়কটা।", en: "The main verb never changes form — only the helper does.", hi: "मुख्य क्रिया कभी रूप नहीं बदलती — केवल सहायक बदलता है।" },
          ],
          examples: [],
        },
        {
          heading: {
            bn: "🚦 আভাস শব্দ — কোন শব্দ কোন পরিবারের ঘণ্টা বাজায়",
            en: "🚦 Signal words — which word rings which family's bell",
            hi: "🚦 संकेत शब्द — कौन-सा शब्द किस परिवार की घंटी बजाता है",
          },
          lead: {
            bn: "প্রতিটা পরিবারের নিজস্ব ঘণ্টা — শব্দ শুনলেই হাত সেই পরিবারে চলে যাবে।",
            en: "Every family has its own bell — hear the word and your hand reaches for that family.",
            hi: "हर परिवार की अपनी घंटी — शब्द सुनते ही हाथ उसी परिवार की ओर चला जाएगा।",
          },
          points: [
            { bn: "ঘণ্টা-শব্দ বাক্যের ভেতরেই থাকে — লেখার আগে খুঁজুন, কাল তারপর বাছুন।", en: "The bell-word already sits inside the sentence — find it first, pick the tense after.", hi: "घंटी-शब्द वाक्य के भीतर ही होता है — पहले ढूँढ़िए, काल बाद में चुनिए।" },
            { bn: "একই শব্দ নতুন প্রেক্ষাপটে অন্য ঘণ্টা বাজাতে পারে — **for two hours** এখন চললে present perfect continuous, অতীত-বিন্দুর আগে চললে past perfect continuous।", en: "The same word can ring a different bell in a new context — **for two hours** running now is present perfect continuous, running before a past point is past perfect continuous.", hi: "वही शब्द नए संदर्भ में दूसरी घंटी बजा सकता है — **for two hours** अब चल रहा हो तो present perfect continuous, अतीत-बिंदु से पहले हो तो past perfect continuous।" },
            { bn: "নিচের ছকটা মুখস্থ করলে কাল-বাছাই আর অনুমান থাকে না — ঘণ্টা শুনেই সিদ্ধান্ত।", en: "Memorise the table below and tense-choice stops being guesswork — you decide by the bell.", hi: "नीचे की तालिका कंठस्थ हो तो काल-चुनाव अंदाज़ा नहीं — घंटी सुनकर ही फ़ैसला।" },
          ],
          table: {
            head: [{ bn: "আভাস শব্দ", en: "Signal words", hi: "संकेत शब्द" }, { bn: "যে ঘণ্টা বাজায়", en: "Which bell it rings", hi: "कौन-सी घंटी बजाता है" }],
            rows: [
              [{ bn: "yesterday, ago, last week, in 2019", en: "yesterday, ago, last week, in 2019", hi: "yesterday, ago, last week, in 2019" }, { bn: "past simple", en: "past simple", hi: "past simple" }],
              [{ bn: "now, right now, at the moment, Look!", en: "now, right now, at the moment, Look!", hi: "now, right now, at the moment, Look!" }, { bn: "present continuous", en: "present continuous", hi: "present continuous" }],
              [{ bn: "already, just, yet, ever, never, so far, recently", en: "already, just, yet, ever, never, so far, recently", hi: "already, just, yet, ever, never, so far, recently" }, { bn: "present perfect", en: "present perfect", hi: "present perfect" }],
              [{ bn: "since 2020, for two hours (এখনো চলছে), all day", en: "since 2020, for two hours (still running), all day", hi: "since 2020, for two hours (अब भी चल रहा), all day" }, { bn: "present perfect continuous", en: "present perfect continuous", hi: "present perfect continuous" }],
              [{ bn: "at nine last night, while, those days", en: "at nine last night, while, those days", hi: "at nine last night, while, those days" }, { bn: "past continuous", en: "past continuous", hi: "past continuous" }],
              [{ bn: "by the time we reached, before he came", en: "by the time we reached, before he came", hi: "by the time we reached, before he came" }, { bn: "past perfect (দুই অতীতের আগেরটা)", en: "past perfect (the earlier of two pasts)", hi: "past perfect (दो अतीतों में पहला)" }],
              [{ bn: "tomorrow, next week, in an hour", en: "tomorrow, next week, in an hour", hi: "tomorrow, next week, in an hour" }, { bn: "future simple", en: "future simple", hi: "future simple" }],
              [{ bn: "this time tomorrow, at five tomorrow", en: "this time tomorrow, at five tomorrow", hi: "this time tomorrow, at five tomorrow" }, { bn: "future continuous", en: "future continuous", hi: "future continuous" }],
              [{ bn: "by next June, by the time he arrives", en: "by next June, by the time he arrives", hi: "by next June, by the time he arrives" }, { bn: "future perfect (ভবিষ্যৎ-বিন্দুর আগে শেষ)", en: "future perfect (done before a future point)", hi: "future perfect (भविष्य-बिंदु से पहले खत्म)" }],
            ],
          },
          examples: [
            { wrong: "Look! The bus comes.", right: "Look! The bus is coming.", note: { bn: "Look!/now = চোখের সামনে চলছে → present continuous; simple মানে নিয়মিত আসা।", en: "Look!/now = running before your eyes → present continuous; the simple means a regular arrival.", hi: "Look!/now = आँखों के सामने चल रहा → present continuous; simple का अर्थ नियमित आगमन।" } },
            { wrong: "At nine last night I watched TV.", right: "At nine last night I was watching TV.", note: { bn: "অতীতের নির্দিষ্ট সময়ে চলছিল → past continuous; watched শোনায় ঠিক নয়টায় টিভি অন করাটাই কাজ ছিল।", en: "In progress at a fixed past time → past continuous; watched would suggest switching the TV on at nine was the task.", hi: "अतीत के निश्चित समय पर चल रहा था → past continuous; watched कहने पर नौ बजे टीवी चालू करना ही काम लगेगा।" } },
            { wrong: "The guests came after I finished cooking.", right: "The guests came after I had finished cooking.", note: { bn: "দুই অতীতের আগে-পরে — আগের ঘটনাটা past perfect-এ।", en: "Two pasts in sequence — the earlier one takes the past perfect.", hi: "दो अतीत क्रम में — पहली घटना past perfect में।" } },
            { wrong: "This time tomorrow I travel to Sylhet.", right: "This time tomorrow I will be travelling to Sylhet.", note: { bn: "this time tomorrow = ভবিষ্যতের নির্দিষ্ট মুহূর্তে চলবে → future continuous।", en: "This time tomorrow = running at a fixed future moment → future continuous.", hi: "this time tomorrow = भविष्य के निश्चित क्षण पर चलेगा → future continuous।" } },
            { wrong: "She is working here since January.", right: "She has been working here since January.", note: { bn: "since/for + এখনো চলছে → present perfect continuous; present continuous এই মাপ বহন করে না।", en: "since/for + still running → present perfect continuous; the present continuous cannot carry that span.", hi: "since/for + अब भी चल रहा → present perfect continuous; present continuous यह अवधि नहीं उठा सकता।" } },
          ],
        },
        {
          heading: {
            bn: "🧠 State বনাম action ক্রিয়া — যেগুলো -ing পায় না",
            en: "🧠 State vs action verbs — the ones that refuse -ing",
            hi: "🧠 State बनाम action क्रियाएँ — जो -ing नहीं लेतीं",
          },
          lead: {
            bn: "ক্রিয়া দুই জাত — কোনোটা করা হয়, কোনোটা শুধু থাকে; থাকা-জাত continuous পায় না।",
            en: "Verbs come in two kinds — some are done, some are just held; the held kind refuses the continuous.",
            hi: "क्रियाएँ दो प्रकार की — कुछ की जाती हैं, कुछ बस रहती हैं; रहने वाली continuous नहीं लेतीं।",
          },
          points: [
            { bn: "**Action ক্রিয়া** (run, eat, write, build) করা হয় — চলমান দেখাতে continuous নেয়: I am writing।", en: "**Action verbs** (run, eat, write, build) are done — they take the continuous to show progress: I am writing.", hi: "**Action क्रियाएँ** (run, eat, write, build) की जाती हैं — चलता दिखाने को continuous लेती हैं: I am writing।" },
            { bn: "**State ক্রিয়া** অবস্থা, মন-মজুরি, সম্পর্ক — know, understand, believe, remember, mean, want, need, prefer, love, hate, like।", en: "**State verbs** are conditions, states of mind, relationships — know, understand, believe, remember, mean, want, need, prefer, love, hate, like.", hi: "**State क्रियाएँ** अवस्था, मन-स्थिति, संबंध — know, understand, believe, remember, mean, want, need, prefer, love, hate, like।" },
            { bn: "আরও state: seem, look (মনে হওয়া), sound, belong, own, contain, cost, matter।", en: "More state verbs: seem, look (meaning 'seem'), sound, belong, own, contain, cost, matter.", hi: "और भी state: seem, look (प्रतीत), sound, belong, own, contain, cost, matter।" },
            { bn: "এরা সাধারণত continuous পায় না: I know (নয় I am knowing), This book belongs to Rina।", en: "They normally refuse the continuous: I know (not I am knowing), This book belongs to Rina.", hi: "ये सामान्यतः continuous नहीं लेतीं: I know (नहीं I am knowing), This book belongs to Rina।" },
            { bn: "কারণ সহজ — জানা-বোঝা-চাওয়া প্রক্রিয়া নয়, এক অবস্থা: নদীর মতো বয়ে না গিয়ে পাহাড়ের মতো দাঁড়িয়ে থাকে।", en: "The reason is simple — knowing-understanding-wanting is not a process but a state: they stand like a mountain, not flow like a river.", hi: "कारण सरल — जानना-समझना-चाहना प्रक्रिया नहीं, अवस्था है: नदी की तरह बहती नहीं, पहाड़ की तरह खड़ी रहती है।" },
          ],
          examples: [
            { wrong: "I am knowing her very well.", right: "I know her very well.", note: { bn: "know = state — চলছে না, আছে; continuous নেয় না।", en: "know is a state — not running, just held; no continuous.", hi: "know = state — चलता नहीं, रहता है; continuous नहीं।" } },
            { wrong: "This bag is costing five hundred takas.", right: "This bag costs five hundred takas.", note: { bn: "দাম-অবস্থা বোঝাতে cost state; এটা 'চলমান দাম' নয়।", en: "cost as a price is a state; it is not 'a price in progress'.", hi: "कीमत बताने वाला cost state है; यह 'चलती कीमत' नहीं।" } },
            { wrong: "This soup is tasting salty.", right: "This soup tastes salty.", note: { bn: "স্বাদ-অনুভূতি state; -ing দিলে অর্থ হয় 'স্বাদ নিচ্ছে'।", en: "Taste-perception is a state; -ing would turn it into 'sampling the flavour'.", hi: "स्वाद-बोध state है; -ing देने पर अर्थ होगा 'चख रहा है'।" } },
            { wrong: "Why are you not understanding me?", right: "Why don't you understand me?", note: { bn: "understand state — প্রশ্ন-নেগেটিভে do নেয়, continuous নয়।", en: "understand is a state — questions and negatives take do, not the continuous.", hi: "understand state है — प्रश्न-नकार में do लेता है, continuous नहीं।" } },
          ],
        },
        {
          heading: {
            bn: "🔀 দ্বি-অর্থ ক্রিয়া — অর্থ বদলালে জাত বদলায়",
            en: "🔀 Double-meaning verbs — new meaning, new class",
            hi: "🔀 दोहरे-अर्थ क्रियाएँ — अर्थ बदला तो वर्ग बदला",
          },
          lead: {
            bn: "কিছু ক্রিয়া দুই মুখো — এক অর্থে state, আরেক অর্থে action; সিদ্ধান্ত দেয় অর্থই।",
            en: "Some verbs wear two faces — state in one sense, action in the other; the meaning decides.",
            hi: "कुछ क्रियाएँ दो-मुखी हैं — एक अर्थ में state, दूसरे में action; फ़ैसला अर्थ का।",
          },
          points: [
            { bn: "**have** — মালিকানা হলে state (We have two cows), অভিজ্ঞতা হলে action (We are having dinner)।", en: "**have** — ownership is a state (We have two cows), experience is an action (We are having dinner).", hi: "**have** — स्वामित्व state (We have two cows), अनुभव action (We are having dinner)।" },
            { bn: "**think** — মত হলে state (I think it's fine), ভাবার প্রক্রিয়া হলে action (I'm thinking about it)।", en: "**think** — opinion is a state (I think it's fine), the process of thinking is an action (I'm thinking about it).", hi: "**think** — राय state (I think it's fine), सोचने की प्रक्रिया action (I'm thinking about it)।" },
            { bn: "**see** — চোখে দেখা state (I see the kite), দেখা করা action (I'm seeing the doctor tomorrow)।", en: "**see** — perceiving is a state (I see the kite), meeting is an action (I'm seeing the doctor tomorrow).", hi: "**see** — दिखना state (I see the kite), मिलना action (I'm seeing the doctor tomorrow)।" },
            { bn: "**taste/feel/appear**-ও একই রকম দ্বৈত — স্বাদ/অনুভূতি state, স্বাদ-নেওয়ার প্রক্রিয়া action।", en: "**taste/feel/appear** behave the same way — perception is a state, sampling is an action.", hi: "**taste/feel/appear** भी ऐसे ही द्वैत — बोध state, चखने की प्रक्रिया action।" },
            { bn: "চাবি-কথা: অর্থ বদলালে জাত বদলায় — বাক্যের মানেই বলে দেবে continuous নেবে কি না।", en: "The key: when the meaning changes, the class changes — the sentence's own sense tells you whether the continuous fits.", hi: "कुंजी: अर्थ बदले तो वर्ग बदले — वाक्य का अपना अर्थ ही बता देगा continuous लेना है या नहीं।" },
          ],
          table: {
            head: [{ bn: "ক্রিয়া", en: "Verb", hi: "क्रिया" }, { bn: "state অর্থে", en: "state sense", hi: "state अर्थ" }, { bn: "action অর্থে", en: "action sense", hi: "action अर्थ" }],
            rows: [
              [{ bn: "have", en: "have", hi: "have" }, { bn: "মালিকানা: We have two cows", en: "ownership: We have two cows", hi: "स्वामित्व: We have two cows" }, { bn: "অভিজ্ঞতা: We are having dinner", en: "experience: We are having dinner", hi: "अनुभव: We are having dinner" }],
              [{ bn: "think", en: "think", hi: "think" }, { bn: "মত: I think it's fine", en: "opinion: I think it's fine", hi: "राय: I think it's fine" }, { bn: "ভাবার প্রক্রিয়া: I'm thinking about it", en: "thinking process: I'm thinking about it", hi: "सोचने की प्रक्रिया: I'm thinking about it" }],
              [{ bn: "see", en: "see", hi: "see" }, { bn: "চোখে দেখা: I see the kite", en: "perceive: I see the kite", hi: "दिखना: I see the kite" }, { bn: "দেখা করা: I'm seeing the doctor tomorrow", en: "meet: I'm seeing the doctor tomorrow", hi: "मिलना: I'm seeing the doctor tomorrow" }],
            ],
          },
          examples: [
            { wrong: "I am having two brothers.", right: "I have two brothers.", note: { bn: "মালিকানা-অর্থে have state; তবে অভিজ্ঞতা-অর্থে action — I'm having lunch ঠিক।", en: "Ownership-have is a state; experience-have is an action — I'm having lunch is fine.", hi: "स्वामित्व-अर्थ में have state; अनुभव-अर्थ में action — I'm having lunch ठीक।" } },
          ],
        },
        {
          heading: {
            bn: "✍️ অনুচ্ছেদে কালের ধারাবাহিকতা — কাহিনির সুর এক রাখা",
            en: "✍️ Tense consistency in paragraphs — keeping the story's key",
            hi: "✍️ अनुच्छेद में काल की निरंतरता — कहानी का सुर एक रखना",
          },
          lead: {
            bn: "গল্প একটা মূল কালে দাঁড়িয়ে থাকে — এই নোঙর ছাড়া প্যারা কাঁপে।",
            en: "A story stands on one main tense — without this anchor the paragraph wobbles.",
            hi: "कहानी एक मुख्य काल पर खड़ी रहती है — इस लंगर के बिना अनुच्छेद डगमगाता है।",
          },
          formula: {
            bn: "পটভূমি: past continuous + বিঘ্ন: past simple — I was reading when the lights went out",
            en: "Backdrop: past continuous + interruption: past simple — I was reading when the lights went out",
            hi: "पृष्ठभूमि: past continuous + बाधा: past simple — I was reading when the lights went out",
          },
          points: [
            { bn: "**কাল-নোঙর** — গল্প বা বর্ণনা এক মূল কালে দাঁড়িয়ে থাকে; past-এ শুরু করলেন, পুরো বর্ণনা past-এই থাকবে।", en: "**The anchor tense** — a story or description stands on one main tense; open in the past and the whole narration stays past.", hi: "**काल-लंगर** — कहानी एक मुख्य काल में खड़ी रहती है; past में खोली, तो पूरा वर्णन past में ही रहेगा।" },
            { bn: "মাঝপথে হঠাৎ present-এ পা ফেলা বাংলা-চিন্তার পিছুধাবন — বাংলায় 'করে', 'করেছিল', 'করছিল' গল্পে মিশে যায়।", en: "Slipping into the present midway is a Bengali-thought reflex — Bengali verb forms blur together inside a story.", hi: "बीच में अचानक present पर पैर रखना बांग्ला-सोच की झलक है — वहाँ क्रिया-रूप कहानी में मिल जाते हैं।" },
            { bn: "**ভাঙার কারণ ১: চিরসত্য** — The teacher said that the earth goes round the sun (প্রমাণ হয়েছিল অতীতে, সত্য আজও)।", en: "**Break 1: universal truth** — The teacher said that the earth goes round the sun (proven in the past, still true).", hi: "**टूट का कारण 1: सनातन सत्य** — The teacher said that the earth goes round the sun (अतीत में सिद्ध, आज भी सत्य)।" },
            { bn: "**ভাঙার কারণ ২: এখনও টেকসই অবস্থা** — She told me she is allergic to peanuts (অ্যালার্জি এখনো আছে)।", en: "**Break 2: a state that still holds** — She told me she is allergic to peanuts (the allergy remains).", hi: "**टूट का कारण 2: अब भी बनी स्थिति** — She told me she is allergic to peanuts (एलर्जी अब भी है)।" },
            { bn: "**ভাঙার কারণ ৩: সরাসরি উদ্ধৃতি** — ভেতরে যা বলা হয়েছিল তাই-ই: He said, 'I will come.'।", en: "**Break 3: direct quotation** — inside it, exactly what was said: He said, 'I will come.'", hi: "**टूट का कारण 3: सीधा कथन** — भीतर वही जो कहा गया था: He said, 'I will come.'।" },
            { bn: "পরোক্ষে সেখানে এক ধাপ পিছানো হয়: He said (that) he would come।", en: "In indirect speech that steps one tense back: He said (that) he would come.", hi: "अप्रत्यक्ष में वहाँ एक कदम पीछे: He said (that) he would come।" },
            { bn: "**পটভূমি+বিঘ্ন জুটি** — চলমান কাজ past continuous-এ, বিঘ্ন past simple-এ: I was reading when the lights went out।", en: "**The backdrop-plus-interruption pair** — the running action in the past continuous, the interruption in the past simple: I was reading when the lights went out.", hi: "**पृष्ठभूमि+बाधा जोड़ी** — चलता काम past continuous में, बाधा past simple में: I was reading when the lights went out।" },
            { bn: "অনুচ্ছেদ শেষ করার আগে একবার ঝাঁকি দিন — নোঙর কোন কালে, আর ভাঙার প্রতিটা জায়গার পেছনে তিন কারণের কোনো একটা আছে কি না।", en: "Before finishing a paragraph, glance back — which tense is my anchor, and does every break carry one of the three reasons?", hi: "अनुच्छेद पूरा करने से पहले एक नज़र डालिए — लंगर कौन-से काल में, और हर टूट के पीछे तीन कारणों में कोई एक है?" },
          ],
          examples: [
            { wrong: "Yesterday I go to the market and buy two kilos of fish.", right: "Yesterday I went to the market and bought two kilos of fish.", note: { bn: "গল্পের নোঙর past — দুই ক্রিয়াই অতীতে থাকবে।", en: "The story's anchor is past — both verbs stay in the past.", hi: "कहानी का लंगर past है — दोनों क्रियाएँ अतीत में।" } },
            { wrong: "Our teacher told us that the Ganges was the longest river in India.", right: "Our teacher told us that the Ganges is the longest river in India.", note: { bn: "চিরসত্য — কাল পিছাবে না; আজও সত্য বলে is-ই থাকে।", en: "A universal truth — no backshift; is stays because it is still true.", hi: "सनातन सत्य — काल पीछे नहीं हटेगा; आज भी सत्य होने से is रहेगा।" } },
            { wrong: "He said he will call me tomorrow.", right: "He said he would call me the next day.", note: { bn: "said-এর পরোক্ষ বাক্যে কাল এক ধাপ পিছায় — will → would, tomorrow → the next day।", en: "In reported speech after said the tense steps back — will → would, tomorrow → the next day.", hi: "said के बाद अप्रत्यक्ष वाक्य में काल एक कदम पीछे — will → would, tomorrow → the next day।" } },
            { wrong: "I cooked dinner when the doorbell rang.", right: "I was cooking dinner when the doorbell rang.", note: { bn: "চলমান পটভূমি past continuous, বিঘ্ন past simple — জোড়টা মুখস্থ রাখুন।", en: "Running backdrop in the past continuous, interruption in the past simple — keep the pair by heart.", hi: "चलती पृष्ठभूमि past continuous, बाधा past simple — जोड़ी कंठस्थ रखें।" } },
            { wrong: "Last week we are in Sylhet and visit my grandmother.", right: "Last week we were in Sylhet and visited my grandmother.", note: { bn: "last week নোঙর past; থাকা আর ঘোরা দুটোই অতীতে।", en: "Last week anchors the past; both staying and visiting go to the past.", hi: "last week लंगर past; रहना और मिलना दोनों अतीत में।" } },
          ],
        },
        {
          heading: {
            bn: "🌉 বাংলা মূল ম্যাপ — করি/করছি/করেছি/করব কোন aspect-এ",
            en: "🌉 The Bengali core map — করি/করছি/করেছি/করব onto the four aspects",
            hi: "🌉 बांग्ला मूल नक्शा — करि/करछि/करेछि/करब कौन-से aspect में",
          },
          lead: {
            bn: "বাংলা ক্রিয়ার চার রূপ ইংরেজির চার aspect-এর প্রায় হুবহু প্রতিচ্ছবি — ম্যাপটা আয়নার মতো।",
            en: "The four core Bengali forms mirror the four English aspects almost exactly — the map works like a mirror.",
            hi: "बांग्ला क्रिया के चार रूप अंग्रेज़ी के चार aspects के लगभग हूबहू प्रतिबिंब — नक्शा आईने जैसा।",
          },
          formula: {
            bn: "করি → do | করছি → am doing | করেছি → have done | করব → will do",
            en: "করি → do | করছি → am doing | করেছি → have done | করব → will do",
            hi: "करि → do | करछि → am doing | करेछि → have done | करब → will do",
          },
          points: [
            { bn: "**করি** → simple present — রোজ প্রার্থনা করি = I pray every day।", en: "**করি** → simple present — I pray every day.", hi: "**करि** → simple present — रोज़ प्रार्थना करता हूँ = I pray every day।" },
            { bn: "**করছি** → present continuous — এখন পড়ছি = I am reading now।", en: "**করছি** → present continuous — I am reading now.", hi: "**करछि** → present continuous — अब पढ़ रहा हूँ = I am reading now।" },
            { bn: "**করেছি** → present perfect — করে ফেলেছি = I have done it।", en: "**করেছি** → present perfect — I have done it.", hi: "**करेछि** → present perfect — कर दिया है = I have done it।" },
            { bn: "**করব** → future — কাল করব = I will do it tomorrow।", en: "**করব** → future — I will do it tomorrow.", hi: "**करब** → future — कल करूँगा = I will do it tomorrow।" },
            { bn: "সবচেয়ে বড় ফাঁদ **করেছি**-র: শেষ-হয়েছে বোঝালেও 'এখনের সংযোগসহ' শেষ।", en: "The biggest trap hides in **করেছি**: it reports a finished act, but finished 'with a line to now'.", hi: "सबसे बड़ा जाल **करेछि** में: पूर्ण बताता है पर 'अब से जुड़कर पूर्ण'।" },
            { bn: "কাটা সময়ের শব্দ জুড়লেই past simple — কাল করেছি = I did it yesterday (নয় I have done it yesterday)।", en: "Add a closed-time word and English demands the past simple — I did it yesterday (not I have done it yesterday).", hi: "बंद-समय का शब्द जुड़ते ही past simple — I did it yesterday (नहीं I have done it yesterday)।" },
          ],
          table: {
            head: [{ bn: "বাংলা রূপ", en: "Bengali form", hi: "बांग्ला रूप" }, { bn: "ইংরেজি aspect", en: "English aspect", hi: "अंग्रेज़ी aspect" }, { bn: "নমুনা", en: "Sample", hi: "नमूना" }],
            rows: [
              [{ bn: "করি", en: "করি", hi: "करि" }, { bn: "simple present", en: "simple present", hi: "simple present" }, { bn: "I pray every day", en: "I pray every day", hi: "I pray every day" }],
              [{ bn: "করছি", en: "করছি", hi: "करछि" }, { bn: "present continuous", en: "present continuous", hi: "present continuous" }, { bn: "I am reading now", en: "I am reading now", hi: "I am reading now" }],
              [{ bn: "করেছি", en: "করেছি", hi: "करेछि" }, { bn: "present perfect", en: "present perfect", hi: "present perfect" }, { bn: "I have done it", en: "I have done it", hi: "I have done it" }],
              [{ bn: "করব", en: "করব", hi: "करब" }, { bn: "future", en: "future", hi: "future" }, { bn: "I will do it tomorrow", en: "I will do it tomorrow", hi: "I will do it tomorrow" }],
            ],
          },
          examples: [
            { wrong: "I have finished the assignment yesterday.", right: "I finished the assignment yesterday.", note: { bn: "বাংলা 'করেছি' শুনে perfect আসে, কিন্তু yesterday কাটা সময় → past simple।", en: "Bengali 'করেছি' tempts the perfect, but yesterday is closed time → past simple.", hi: "बांग्ला 'करेछि' सुनकर perfect आता है, पर yesterday बंद समय → past simple।" } },
            { wrong: "Every morning I am going for a walk.", right: "Every morning I go for a walk.", note: { bn: "রোজকার অভ্যাস = বাংলা 'যাই' → simple present; continuous মানে এখন/সাময়িক।", en: "A daily habit = Bengali 'যাই' → simple present; the continuous means now/temporary.", hi: "रोज़ की आदत = बांग्ला 'याइ' → simple present; continuous का अर्थ अभी/अस्थायी।" } },
          ],
        },
        {
          heading: {
            bn: "🔁 বর্ধিত ম্যাপ ও future-in-the-past — 'যাওয়ার কথা ছিল'",
            en: "🔁 The extended map and future-in-the-past — 'was going to'",
            hi: "🔁 विस्तारित नक्शा और future-in-the-past — 'जाने की बात थी'",
          },
          lead: {
            bn: "ম্যাপ আরও প্রসারিত হয় অতীত-রূপে, আর 'যাওয়ার কথা ছিল' খুলে যায় future-in-the-past-এ।",
            en: "The map stretches into past forms, and 'was planning to' opens into future-in-the-past.",
            hi: "नक्शा अतीत-रूपों में और फैलता है, और 'जाने की बात थी' future-in-the-past में खुलती है।",
          },
          formula: {
            bn: "'যাওয়ার কথা ছিল' = was/were going to · was about to · was supposed to",
            en: "'Was planning to' = was/were going to · was about to · was supposed to",
            hi: "'जाने की बात थी' = was/were going to · was about to · was supposed to",
          },
          points: [
            { bn: "**করছিলাম** → past continuous — তখন পড়ছিলাম = I was reading then।", en: "**করছিলাম** → past continuous — I was reading then.", hi: "**करछिलाम** → past continuous — तब पढ़ रहा था = I was reading then।" },
            { bn: "**করেছিলাম** → past simple — গতকাল খেয়েছিলাম = I ate yesterday।", en: "**করেছিলাম** → past simple — I ate yesterday.", hi: "**करेछिलाम** → past simple — कल खाया था = I ate yesterday।" },
            { bn: "ধাপ-বোঝাতে (আগের অতীত) past perfect — আর **করে ফেলব** → will have done।", en: "For the earlier step use the past perfect — and করে ফেলব → will have done.", hi: "पिछला चरण बताने को past perfect — और कर दूँगा → will have done।" },
            { bn: "বাংলার 'যাওয়ার কথা ছিল / যেতে যাচ্ছিলাম / প্রায় চলেই যাচ্ছিল' — এই ভাবটাই ইংরেজির **future-in-the-past**।", en: "The Bengali feeling of 'was about to go' is English **future-in-the-past**.", hi: "बांग्ला का 'जाने की बात थी / लगभग जा ही रहा था' — यही अंग्रेज़ी का **future-in-the-past** है।" },
            { bn: "তখনকার ভবিষ্যৎ, যা প্রায়ই ঘটেনি: I was going to call you, but the network died।", en: "A future seen from the past, often one that never happened: I was going to call you, but the network died.", hi: "उस समय से देखा गया भविष्य, जो अक्सर घटा नहीं: I was going to call you, but the network died।" },
            { bn: "প্রায়-ঘটবে ভাবে: The train was about to leave when I reached the platform।", en: "The almost-happening sense: The train was about to leave when I reached the platform.", hi: "लगभग-होने वाले भाव में: The train was about to leave when I reached the platform।" },
          ],
          examples: [
            { wrong: "I am going to call you yesterday.", right: "I was going to call you yesterday.", note: { bn: "অতীতের পরিকল্পনা → was going to; 'কল করার কথা ছিল'।", en: "A past plan → was going to; 'the call was on my mind yesterday'.", hi: "अतीत की योजना → was going to; 'कॉल करने की बात थी'।" } },
            { wrong: "The train will leave when I reached the platform.", right: "The train was about to leave when I reached the platform.", note: { bn: "অতীতে প্রায়-ঘটবে ভাব → was about to; will অতীত বহন করে না।", en: "An almost-happening in the past → was about to; will cannot carry the past.", hi: "अतीत में लगभग-होने वाला → was about to; will अतीत नहीं उठाता।" } },
            { wrong: "Rina said she has lost her keys.", right: "Rina said she had lost her keys.", note: { bn: "said-এর আগের ঘটনা → এক ধাপ পিছায় has → had।", en: "A loss before the saying → one step back: has → had.", hi: "कहने से पहले की घटना → एक कदम पीछे: has → had।" } },
          ],
        },
        {
          heading: {
            bn: "⚠️ বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "⚠️ Common mistakes by Bengali speakers",
            hi: "⚠️ बांग्लाभाषी विद्यार्थियों की सामान्य गलतियाँ",
          },
          lead: {
            bn: "ফাঁদ তিনটে, আর একটা since/for-বোনাস — চিনে রাখলেই অর্ধেক ভুল ঝরে পড়বে।",
            en: "Three traps and one since/for bonus — spot them and half the errors fall away.",
            hi: "तीन जाल और एक since/for बोनस — पहचान लें तो आधी गलतियाँ झड़ती जाएँगी।",
          },
          points: [
            { bn: "**ফাঁদ ১ — দুমুখো 'কাল'** — বাংলার কাল আগামীকাল আর গতকাল দুটোই; ইংরেজিতে একটা tomorrow, আরেকটা yesterday।", en: "**Trap 1 — two-faced 'কাল'** — Bengali কাল covers both tomorrow and yesterday; English splits them into tomorrow and yesterday.", hi: "**जाल 1 — दोमुखा 'काल'** — बांग्ला काल दोनों के लिए; अंग्रेज़ी में एक tomorrow, दूसरा yesterday।" },
            { bn: "কালের পতাকা আগে ঠিক করুন, তারপর কাল বাছুন — নইলে 'Yesterday I will meet the doctor' জাতীয় অসম্ভব বাক্য জন্মায়।", en: "Fix the time-flag first, then choose the tense — otherwise impossible sentences like 'Yesterday I will meet the doctor' are born.", hi: "पहले समय-झंडा तय कीजिए, फिर काल चुनिए — वरना 'Yesterday I will meet the doctor' जैसे असंभव वाक्य जन्म लेते हैं।" },
            { bn: "**ফাঁদ ২ — অভ্যাস আর এখন-চলমানের মিশে** — 'I am go to office every day'; হয় I go (রোজ), নয় I am going (এই মুহূর্তে/সাময়িক দিনগুলোতে)।", en: "**Trap 2 — habit blurred with now** — 'I am go to office every day'; either I go (every day) or I am going (right now / these temporary days).", hi: "**जाल 2 — आदत और अभी-चलता का मिश्रण** — 'I am go to office every day'; या I go (रोज़), या I am going (इस क्षण/ये अस्थायी दिन)।" },
            { bn: "**ফাঁদ ৩ — perfect-ঘৃণা বা perfect-লোভ** — সব অতীতে ফেলা, বা উল্টো সব কিছুতে perfect।", en: "**Trap 3 — dodging or flooding the perfect** — pushing everything into the past, or the opposite, pouring the perfect over everything.", hi: "**जाल 3 — perfect से बचना या perfect की बाढ़** — सब past में ढालना, या उलटा हर जगह perfect।" },
            { bn: "ফল এখনো হাতে থাকলে I have done my homework; সময় বললেই কাটা অতীত — I did it last night।", en: "Result in hand now → I have done my homework; name the time and it is closed past → I did it last night.", hi: "नतीजा अभी हाथ में → I have done my homework; समय बता दिया → I did it last night।" },
            { bn: "**বোনাস** — since/for-এর সঙ্গে বর্তমান-সাধারণ বা continuous চলে না: I have lived here since 2019 (নয় I live / I am living here since 2019)।", en: "**Bonus** — since/for refuses the plain present and the present continuous: I have lived here since 2019 (not I live / I am living here since 2019).", hi: "**बोनस** — since/for के साथ सादा वर्तमान या continuous नहीं चलता: I have lived here since 2019 (नहीं I live / I am living here since 2019)।" },
          ],
          examples: [
            { wrong: "Yesterday I will meet the doctor.", right: "Yesterday I met the doctor.", note: { bn: "বাংলা 'কাল' দুমুখো; yesterday বসলেই অতীত — will অসম্ভব।", en: "Bengali 'কাল' is two-faced; with yesterday it is the past — will is impossible.", hi: "बांग्ला 'काल' दोमुखा; yesterday आते ही अतीत — will असंभव।" } },
            { wrong: "Tomorrow I met my cousin.", right: "Tomorrow I will meet my cousin.", note: { bn: "উল্টো দিকটাও — tomorrow মানেই future।", en: "The mirror trap too — tomorrow means the future.", hi: "उलटा जाल भी — tomorrow का अर्थ भविष्य।" } },
            { wrong: "I am go to office every day.", right: "I go to office every day.", note: { bn: "অভ্যাসে simple present; am + base verb অসম্ভব জুটি।", en: "Habits take the simple present; am + base verb is an impossible pair.", hi: "आदत में simple present; am + base verb असंभव जोड़ी।" } },
            { wrong: "Have you eaten? Yes, I have eaten it last night.", right: "Have you eaten? Yes, I ate last night.", note: { bn: "উত্তরে সময় বললেই কাটা অতীত → past simple।", en: "Once the answer names a time, the past is closed → past simple.", hi: "उत्तर में समय बताते ही बंद अतीत → past simple।" } },
            { wrong: "I live in Khulna since 2019.", right: "I have lived in Khulna since 2019.", note: { bn: "since-এর সঙ্গে এখনো-চলছে ভাব perfect-ই নেয়।", en: "The still-running sense of since belongs to the perfect.", hi: "since के साथ अब-भी-चल रहा भाव perfect ही लेता है।" } },
          ],
        },
        {
          heading: {
            bn: "📖 ছোট গল্পে দেখা যাক — রাফির এক দিনে ছয় পরিবার",
            en: "📖 A short story to see it all — six families in Rafi's one day",
            hi: "📖 एक छोटी कहानी में सब देखें — राफ़ी के एक दिन में छह परिवार",
          },
          lead: {
            bn: "এক দিনের সাক্ষাৎকার-গল্পেই ছয়টা কাল-পরিবার কাজ করতে দেখুন।",
            en: "Watch six tense families at work inside one interview day.",
            hi: "एक इंटरव्यू-दिन में छह काल-परिवार काम करते देखिए।",
          },
          points: [
            { bn: "সকালে রাফির ভাই জিজ্ঞেস করল, 'Are you ready? You have been preparing for this interview for two months!' — present perfect continuous।", en: "In the morning Rafi's brother asked, 'Are you ready? You have been preparing for this interview for two months!' — present perfect continuous.", hi: "सुबह राफ़ी के भाई ने पूछा, 'Are you ready? You have been preparing for this interview for two months!' — present perfect continuous।" },
            { bn: "রাফি বলল, 'I know — and I have just had my breakfast. I was going to take the bus, but it is raining, so I'm taking a rickshaw.' — perfect + future-in-the-past + চলমান সিদ্ধান্ত।", en: "Rafi said, 'I know — and I have just had my breakfast. I was going to take the bus, but it is raining, so I'm taking a rickshaw.' — perfect, future-in-the-past and a running decision.", hi: "राफ़ी ने कहा, 'I know — and I have just had my breakfast. I was going to take the bus, but it is raining, so I'm taking a rickshaw.' — perfect + future-in-the-past + चलता निर्णय।" },
            { bn: "পথে সে নিশ্চিন্ত ছিল: 'I have visited this office before; I know where it is.' — perfect আর state ক্রিয়া know।", en: "On the way he felt calm: 'I have visited this office before; I know where it is.' — the perfect and the state verb know.", hi: "रास्ते में वह निश्चिंत था: 'I have visited this office before; I know where it is.' — perfect और state क्रिया know।" },
            { bn: "পৌঁছে দেখল সাক্ষাৎকারকারী already ব্যস্ত — 'He had already started reading my CV when I entered.' — past perfect।", en: "On arrival the interviewer was already busy — 'He had already started reading my CV when I entered.' — past perfect.", hi: "पहुँचकर देखा interviewer पहले से व्यस्त — 'He had already started reading my CV when I entered.' — past perfect।" },
            { bn: "শেষে বন্ধুকে ফোন: 'It went well! While I was answering the last question, they were taking notes. Tomorrow I will be travelling to their head office for the final round — they asked, and I was about to refuse, but I said yes!' — past continuous জুটি + future continuous + was about to।", en: "Finally he phoned a friend: 'It went well! While I was answering the last question, they were taking notes. Tomorrow I will be travelling to their head office for the final round — they asked, and I was about to refuse, but I said yes!' — the past continuous pair + future continuous + was about to.", hi: "अंत में दोस्त को फोन: 'It went well! While I was answering the last question, they were taking notes. Tomorrow I will be travelling to their head office for the final round — they asked, and I was about to refuse, but I said yes!' — past continuous जोड़ी + future continuous + was about to।" },
          ],
          examples: [
            { wrong: "He has started reading my CV when I entered.", right: "He had already started reading my CV when I entered.", note: { bn: "entered-এর আগেই ঘটেছে → past perfect; দুই অতীতের আগেরটা।", en: "It happened before entered → past perfect; the earlier of two pasts.", hi: "entered से पहले हुआ → past perfect; दो अतीतों में पहला।" } },
            { wrong: "While I answered the last question, they wrote notes.", right: "While I was answering the last question, they were taking notes.", note: { bn: "while-এর দুই পাশই চলমান → past continuous।", en: "Both sides of while are in progress → past continuous.", hi: "while के दोनों ओर चल रहा → past continuous।" } },
            { wrong: "I was going to take the bus, but I take a rickshaw.", right: "I was going to take the bus, but I took a rickshaw.", note: { bn: "পরিকল্পনা অতীতে (was going to), বাস্তব সিদ্ধান্তও অতীতে (took)।", en: "The plan is past (was going to), and so is the real decision (took).", hi: "योजना अतीत में (was going to), वास्तविक निर्णय भी अतीत में (took)।" } },
            { wrong: "I am knowing where it is.", right: "I know where it is.", note: { bn: "state ক্রিয়া know — continuous নয়।", en: "know is a state verb — no continuous.", hi: "know state क्रिया है — continuous नहीं।" } },
          ],
        },
        {
          heading: {
            bn: "🧾 এক নজরে — পুরো পাঠ পাঁচ লাইনে",
            en: "🧾 At a glance — the whole lesson in five lines",
            hi: "🧾 एक नज़र में — पूरा पाठ पाँच पंक्तियों में",
          },
          lead: {
            bn: "স্ক্রল করার আগে পাঁচ লাইনে পুরো মানচিত্র চোখে বসিয়ে নিন।",
            en: "Before you scroll on, take in the whole map in five lines.",
            hi: "आगे बढ़ने से पहले पाँच पंक्तियों में पूरा नक्शा आँखों में बिठा लीजिए।",
          },
          points: [
            { bn: "তিন সময় × চার aspect = বারো পরিবার — simple = তথ্য, continuous = চলছে, perfect = ফল সাথে, perfect continuous = কতক্ষণ ধরে।", en: "Three times × four aspects = twelve families — simple = fact, continuous = running, perfect = result attached, perfect continuous = for how long.", hi: "तीन समय × चार aspects = बारह परिवार — simple = तथ्य, continuous = चल रहा, perfect = नतीजा साथ, perfect continuous = कितने समय से।" },
            { bn: "আভাস-শব্দ ঘণ্টা — yesterday/ago, now, already/yet/just/ever, since/for, by + সময়, while, by the time, this time tomorrow।", en: "Signal words are bells — yesterday/ago, now, already/yet/just/ever, since/for, by + time, while, by the time, this time tomorrow.", hi: "संकेत-शब्द घंटी हैं — yesterday/ago, now, already/yet/just/ever, since/for, by + समय, while, by the time, this time tomorrow।" },
            { bn: "know/have/cost-র মতো state ক্রিয়া continuous এড়ায় — অর্থ বদলালে জাত বদলায়।", en: "State verbs like know/have/cost refuse the continuous — when the meaning changes, the class changes.", hi: "know/have/cost जैसी state क्रियाएँ continuous से बचती हैं — अर्थ बदले तो वर्ग बदले।" },
            { bn: "গল্পের নোঙর এক কালে; ভাঙবেন শুধু চিরসত্য, সরাসরি উদ্ধৃতি বা এখনো-সত্য অবস্থায়; said-এর পরে এক ধাপ পিছান।", en: "A paragraph stands on one anchor tense; break it only for universal truths, direct quotes, or still-true states; after said, step one tense back.", hi: "अनुच्छेद एक लंगर-काल पर खड़ा रहे; तोड़ें केवल सनातन सत्य, सीधे कथन या अब-भी-सत्य अवस्था में; said के बाद एक कदम पीछे।" },
            { bn: "বাংলা ম্যাপ: করি→do, করছি→am doing, করেছি→have done (কাল জুড়লে did), করব→will do; আর 'যাওয়ার কথা ছিল' = was going to / was about to।", en: "The Bengali map: করি→do, করছি→am doing, করেছি→have done (with a time word, did), করব→will do; and 'was planning to' = was going to / was about to.", hi: "बांग्ला नक्शा: करि→do, करछि→am doing, करेछि→have done (समय-शब्द के साथ did), करब→will do; और 'जाने की बात थी' = was going to / was about to।" },
          ],
          examples: [],
        },
      ],
      tips: [
        { bn: "মানচিত্র মুখস্ত: simple = বাক্সবন্দি তথ্য, continuous = ক্যামেরার সামনে চলছে, perfect = ফল এখনো সাথে, perfect continuous = কতক্ষণ ধরে।", en: "Memorise the map: simple = a boxed fact, continuous = running before the camera, perfect = result still attached, perfect continuous = for how long.", hi: "नक्शा रटें: simple = बंद डिब्बे का तथ्य, continuous = कैमरे के सामने चल रहा, perfect = नतीजा साथ, perfect continuous = कितने समय से।" },
        { bn: "আভাস-শব্দ তালিকা: yesterday/ago/last → past simple; now → present continuous; already/yet/just/ever → present perfect; since/for → present perfect continuous; by + সময় → perfect পরিবার।", en: "The signal list: yesterday/ago/last → past simple; now → present continuous; already/yet/just/ever → present perfect; since/for → present perfect continuous; by + time → the perfect family.", hi: "संकेत-सूची: yesterday/ago/last → past simple; now → present continuous; already/yet/just/ever → present perfect; since/for → present perfect continuous; by + समय → perfect परिवार।" },
        { bn: "গঠন-সূত্র: continuous = যথাযথ কালের be + -ing; perfect = যথাযথ কালের have + V3; perfect continuous = যথাযথ কালের have been + -ing।", en: "Formation formulas: continuous = right-tense be + -ing; perfect = right-tense have + V3; perfect continuous = right-tense have been + -ing.", hi: "गठन-सूत्र: continuous = सही काल का be + -ing; perfect = सही काल का have + V3; perfect continuous = सही काल का have been + -ing।" },
        { bn: "প্রশ্ন-নেগেটিভে সহায়কই চাবি — Do/Did/Have/Will সামনে বা not-এর পাশে; মূল ক্রিয়া কখনো রূপ বদলায় না।", en: "In questions and negatives the helper is the key — Do/Did/Have/Will moves forward or beside not; the main verb never changes form.", hi: "प्रश्न-नकार में सहायक ही कुंजी — Do/Did/Have/Will आगे या not के पास; मुख्य क्रिया रूप नहीं बदलती।" },
        { bn: "State ক্রিয়া তালিকা: know, want, need, believe, belong, cost, seem, love, prefer... — continuous নয়; তবে have/think/see দ্বি-অর্থ, অর্থ বদলালে জাত বদলায়।", en: "State-verb list: know, want, need, believe, belong, cost, seem, love, prefer... — no continuous; but have/think/see are double-faced — meaning decides the class.", hi: "State क्रिया-सूची: know, want, need, believe, belong, cost, seem, love, prefer... — continuous नहीं; पर have/think/see दोमुखे — अर्थ वर्ग तय करता है।" },
        { bn: "এক অনুচ্ছেদ এক মূল কালে; ভাঙার তিন স্বীকৃত কারণ — চিরসত্য, সরাসরি উদ্ধৃতি, এখনো-সত্য অবস্থা।", en: "One paragraph, one main tense; three accepted breaks — universal truth, direct quotation, still-true state.", hi: "एक अनुच्छेद, एक मुख्य काल; तीन स्वीकृत टूट — सनातन सत्य, सीधा कथन, अब-भी-सत्य अवस्था।" },
        { bn: "পরোক্ষ বক্তব্যে এক ধাপ পিছান: will→would, is→was, have→had; তবে চিরসত্য পিছায় না।", en: "In reported speech step one tense back: will→would, is→was, have→had; but universal truths do not shift.", hi: "अप्रत्यक्ष कथन में एक कदम पीछे: will→would, is→was, have→had; पर सनातन सत्य नहीं हटता।" },
        { bn: "পটভূমি+বিঘ্ন জোড়া: while/when → past continuous + past simple — I was reading when the lights went out।", en: "The backdrop-plus-interruption pair: while/when → past continuous + past simple — I was reading when the lights went out.", hi: "पृष्ठभूमि+बाधा जोड़ी: while/when → past continuous + past simple — I was reading when the lights went out।" },
        { bn: "বাংলা ম্যাপ: করি→do, করছি→am doing, করেছি→have done (কিন্তু কাল জুড়লে did), করব→will do; করছিলাম→was doing।", en: "The Bengali map: করি→do, করছি→am doing, করেছি→have done (but with a time word, did), করব→will do; করছিলাম→was doing.", hi: "बांग्ला नक्शा: करि→do, करछि→am doing, करेछि→have done (पर समय-शब्द के साथ did), करब→will do; करछिलाम→was doing।" },
        { bn: "'যাওয়ার কথা ছিল / প্রায় চলেই যাচ্ছিল' = was going to / was about to — অতীত থেকে দেখা ভবিষ্যৎ, যা প্রায়ই ঘটেনি।", en: "'Was planning to / was on the verge of' = was going to / was about to — a future seen from the past, often one that never happened.", hi: "'जाने की बात थी / लगभग जा ही रहा था' = was going to / was about to — अतीत से देखा भविष्य, जो अक्सर घटा नहीं।" },
      ],
      quiz: [
        { question: "Right now Rehana ___ dinner in the kitchen.", options: ["cooks", "is cooking", "has cooked", "will cook"], answer: 1, explanation: { bn: "'right now' = এখন চলছে → present continuous।", en: "'Right now' = running now → present continuous.", hi: "'right now' = अभी चल रहा → present continuous।" } },
        { question: "I ___ this watch from my grandfather in 2010.", options: ["receive", "received", "have received", "was receiving"], answer: 1, explanation: { bn: "in 2010 = কাটা সময় → past simple।", en: "In 2010 = closed time → past simple.", hi: "in 2010 = बंद समय → past simple।" } },
        { question: "When I called, she ___ the Quran.", options: ["reads", "was reading", "has read", "will read"], answer: 1, explanation: { bn: "ফোন বেজে দিল চলমান পড়ার মাঝে → past continuous।", en: "The call interrupted an ongoing reading → past continuous.", hi: "कॉल चलती पढ़ाई के बीच आया → past continuous।" } },
        { question: "By the time we reached the hall, the speaker ___.", options: ["starts", "started", "had started", "has started"], answer: 2, explanation: { bn: "reached-এর আগেই শুরু → past perfect (had started)।", en: "It began before we reached → past perfect (had started).", hi: "पहुँचने से पहले शुरू हो चुका था → past perfect (had started)।" } },
        { question: "By December, we ___ the whole syllabus.", options: ["will finish", "will have finished", "have finished", "finish"], answer: 1, explanation: { bn: "by + ভবিষ্যৎ-বিন্দুর আগে শেষ → future perfect।", en: "Done before a future point (by December) → future perfect.", hi: "भविष्य-बिंदु (by December) से पहले खत्म → future perfect।" } },
        { question: "Which sentence is correct?", options: ["I am knowing him well.", "I know him well.", "I am know him well.", "He is knowing the answer."], answer: 1, explanation: { bn: "know = state ক্রিয়া — continuous নেয় না; simple present-ই ঠিক।", en: "know is a state verb — no continuous; the simple present is right.", hi: "know state क्रिया है — continuous नहीं; simple present ही ठीक।" } },
        { question: "She ___ two sisters and ___ lunch now.", options: ["is having, has", "has, is having", "has, has", "is having, is having"], answer: 1, explanation: { bn: "মালিকানা-have state (has), খাওয়া-have action (is having) — অর্থ জাত ঠিক করে।", en: "Ownership-have is a state (has), eating-have is an action (is having) — meaning picks the class.", hi: "स्वामित्व-have state (has), भोजन-have action (is having) — अर्थ वर्ग चुनता है।" } },
        { question: "Our teacher said that water ___ at 100°C.", options: ["boiled", "boils", "will boil", "was boiling"], answer: 1, explanation: { bn: "চিরসত্য — কাল পিছায় না; boils থাকে।", en: "A universal truth — no backshift; boils stays.", hi: "सनातन सत्य — काल पीछे नहीं हटता; boils रहेगा।" } },
        { question: "Which English tense usually matches Bengali 'করেছি' (with no time word)?", options: ["Past simple", "Present perfect", "Present continuous", "Future simple"], answer: 1, explanation: { bn: "'করেছি' = এখনের সংযোগসহ শেষ → present perfect; তবে কাল-শব্দ জুড়লে past simple।", en: "'করেছি' = finished with a line to now → present perfect; with a time word it turns to the past simple.", hi: "'करेछि' = अब से जुड़ा पूर्ण → present perfect; समय-शब्द जुड़े तो past simple।" } },
        { question: "I ___ to tell you, but your phone was off.", options: ["am going", "was going", "will go", "go"], answer: 1, explanation: { bn: "অতীতের পরিকল্পনা → future-in-the-past: was going to।", en: "A past plan → future-in-the-past: was going to.", hi: "अतीत की योजना → future-in-the-past: was going to।" } },
      ],
    },
  },

  /* ── 2. Articles a/an/the (Intermediate) ───────────────────────────── */
  {
    topic: "Articles (a/an/the)",
    level: "intermediate",
    title: "Articles (a/an/the) (Intermediate)",
    unit: 2,
    sortOrder: 1,
    data: {
      title: {
        bn: "আর্টিকেল a/an/the (মধ্যম স্তর)",
        en: "Articles (a/an/the) (Intermediate)",
        hi: "आर्टिकल a/an/the (मध्यम स्तर)",
      },
      intro: {
        bn: "বিগিনার স্তরের Articles পাঠে a/an/the-এর প্রাথমিক নিয়ম শিখেছেন — এবার পূর্ণ সিদ্ধান্ত-বৃক্ষ: a/an/the/শূন্য — কোন প্রশ্ন করলে কোনটা বসবে; the-এর চার শক্তি (দ্বিতীয় উল্লেখ, superlative, অনন্য, of-বাক্যাংশ); জিরো আর্টিকেলের রাজ্য (প্রতিষ্ঠান, খাবার, ভাষা, বিমূর্ত, নাম); অগণনের সাথে আর্টিকেল (a coffee = এক কাপ); সাধারণী অর্থে The tiger vs A tiger; আর বাংলার 'কোনো আর্টিকেল নেই' ফাঁদ থেকে বাঁচার B1-স্তরের কৌশল। শর্ত: বিগিনার Articles পাঠ পাকা থাকা দরকার, আর countable/uncountable ধারণাটা এখানে বারবার কাজে লাগবে।",
        en: "The beginner Articles lesson taught the first rules — now comes the full decision tree: a/an/the/zero, and which question picks which article; the four powers of the (second mention, superlatives, unique things, of-phrases); the zero-article kingdom (institutions, meals, languages, abstract nouns, names); articles with uncountables (a coffee = a cup); generic meaning — The tiger vs A tiger; and B1-level tactics for escaping the Bengali 'no article' trap. Condition: the beginner Articles lesson should be solid, and the countable/uncountable idea will keep coming back.",
        hi: "बिगिनर स्तर के Articles पाठ में पहले नियम सीखे थे — अब पूरा निर्णय-वृक्ष: a/an/the/शून्य, और कौन-सा सवाल कौन-सा आर्टिकल चुनता है; the की चार शक्तियाँ (दूसरा उल्लेख, superlative, अद्वितीय वस्तुएँ, of-वाक्यांश); zero-article का साम्राज्य (संस्थाएँ, भोजन, भाषाएँ, भाववाचक, नाम); अगणन के साथ आर्टिकल (a coffee = एक कप); सामान्य अर्थ में The tiger vs A tiger; और बांग्ला 'no article' जाल से बचने की B1-स्तरीय रणनीति। शर्त: बिगिनर Articles पाठ पक्का हो, और countable/uncountable धारणा बार-बार काम आएगी।",
      },
      roadmap: [
        { bn: "🧭 তিন প্রশ্নের ফানেল — a/an/the/শূন্য কোনটা কখন", en: "🧭 The three-question funnel — a/an/the/zero, which one when", hi: "🧭 तीन-सवाल फ़नल — a/an/the/शून्य, कौन-सा कब" },
        { bn: "🔤 a না an — বানান নয়, প্রথম ধ্বনি; সাথে জায়গা-ক্রম", en: "🔤 a or an — the first sound, not spelling; plus placement", hi: "🔤 a या an — वर्तनी नहीं, पहली ध्वनि; साथ में क्रम" },
        { bn: "🚦 the-ডাকা সংকেত বনাম a/an-এর সংকেত", en: "🚦 What calls for the versus what calls for a/an", hi: "🚦 the के संकेत बनाम a/an के संकेत" },
        { bn: "🏛️ শূন্যের রাজ্য — প্রতিষ্ঠান, খাবার, ভাষা, বিমূর্ত, নাম", en: "🏛️ The zero kingdom — institutions, meals, languages, abstracts, names", hi: "🏛️ शून्य का साम्राज्य — संस्थाएँ, भोजन, भाषाएँ, भाववाचक, नाम" },
        { bn: "☕ অগণনের মোড়ক — a coffee আসলে এক কাপ", en: "☕ Uncountable wrappers — a coffee is really a cup", hi: "☕ अगणन के मोड़क — a coffee दरअसल एक कप" },
        { bn: "🐅 সাধারণী অর্থ — The tiger, A tiger, Tigers", en: "🐅 Generic meaning — The tiger, A tiger, Tigers", hi: "🐅 सामान्य अर्थ — The tiger, A tiger, Tigers" },
        { bn: "⚠️ বাঙালি শিক্ষার্থীদের তিন ফাঁদ", en: "⚠️ Three traps for Bengali speakers", hi: "⚠️ बांग्लाभाषियों के तीन जाल" },
        { bn: "📖 মিতুর এক সকালের গল্পে সব নিয়ম", en: "📖 Every rule at work in Mithu's one morning", hi: "📖 मितु की एक सुबह में सभी नियम" },
        { bn: "🧾 এক নজরে — পুরো পাঠ পাঁচ ভাগে", en: "🧾 At a glance — the whole lesson in five parts", hi: "🧾 एक नज़र में — पूरा पाठ पाँच भागों में" },
      ],
      sections: [
        {
          heading: {
            bn: "🧭 কখন ব্যবহার হয় — a/an/the/শূন্য: পূর্ণ সিদ্ধান্ত-বৃক্ষ",
            en: "🧭 When to use them — a/an/the/zero: the full decision tree",
            hi: "🧭 कब इस्तेमाल होते हैं — a/an/the/शून्य: पूरा निर्णय-वृक्ष",
          },
          lead: {
            bn: "বাক্যে বসানোর আগে তিন প্রশ্নের ফানেল — এই তিন প্রশ্নই ৯০% আর্টিকেল-সিদ্ধান্ত সাজায়।",
            en: "Before placing anything, run the three-question funnel — it settles 90% of article decisions.",
            hi: "रखने से पहले तीन-सवाल का फ़नल — यही 90% आर्टिकल-निर्णय तय करता है।",
          },
          formula: {
            bn: "গোনা যায় এমন একটা → a/an/the · শ্রোতা জানে → the · সাধারণ বহুবচন/অগণন → শূন্য",
            en: "one countable item → a/an/the · listener knows which → the · generic plural/uncountable → zero",
            hi: "गिनने योग्य एक वस्तु → a/an/the · सुनने वाला जानता है → the · सामान्य बहुवचन/अगणन → शून्य",
          },
          points: [
            { bn: "**প্রশ্ন ১ — singular countable?** হলে a/an বা the, শূন্য-জায়গা নেই: I bought a book / the book।", en: "**Question 1 — singular countable?** Then a/an or the, no zero slot: I bought a book / the book.", hi: "**सवाल 1 — singular countable?** तो a/an या the, शून्य का स्थान नहीं: I bought a book / the book।" },
            { bn: "'I bought book' ইংরেজিতে অসম্ভব — singular countable কখনো একা দাঁড়ায় না।", en: "'I bought book' is impossible in English — a singular countable never stands alone.", hi: "'I bought book' अंग्रेज़ी में असंभव — singular countable कभी अकेला नहीं रहता।" },
            { bn: "**প্রশ্ন ২ — শ্রোতা কি জানে কোনটা?** না জানলে a/an — প্রথম উল্লেখ, যেকোনো একটা: I saw a dog।", en: "**Question 2 — does the listener know which one?** If not, a/an — first mention, any one of them: I saw a dog.", hi: "**सवाल 2 — सुनने वाला जानता है?** नहीं जानता तो a/an — पहला उल्लेख, कोई एक: I saw a dog।" },
            { bn: "জানলে the — দ্বিতীয় উল্লেখ, দুজনেরই চেনা, প্রেক্ষাপটে একমাত্র: The dog was barking at the gate।", en: "If yes, the — second mention, shared knowledge, the only one in the scene: The dog was barking at the gate.", hi: "जानता है तो the — दूसरा उल्लेख, दोनों की जानी, दृश्य की अकेली: The dog was barking at the gate।" },
            { bn: "**প্রশ্ন ৩ — বহুবচন/অগণন, সাধারণ-ভাবে?** তাহলে কিছুই বসে না (zero article): Dogs are loyal, Water is precious, Information travels fast।", en: "**Question 3 — plural or uncountable, in general?** Then nothing sits there (zero article): Dogs are loyal, Water is precious, Information travels fast.", hi: "**सवाल 3 — बहुवचन/अगणन, सामान्य-भाव?** तो कुछ नहीं बैठेगा (zero article): Dogs are loyal, Water is precious, Information travels fast।" },
            { bn: "তবে নির্দিষ্ট হলে বহুবচন-অগণনও the নেয়: the dogs in our street, the water in this bottle।", en: "But specific plurals and uncountables still take the: the dogs in our street, the water in this bottle.", hi: "पर विशिष्ट हों तो बहुवचन-अगणन भी the लेते हैं: the dogs in our street, the water in this bottle।" },
            { bn: "এই তিন প্রশ্নের ঝাঁকুনিতেই ৯০% আর্টিকেল-সিদ্ধান্ত সাজান — বাকিটা পরের গভীর নিয়মগুলোর।", en: "Shaking every choice through these three questions settles 90% of decisions — the rest belongs to the deeper rules ahead.", hi: "इन तीन सवालों की झटके में ही 90% निर्णय तय — बाकी आगे के गहरे नियमों का काम।" },
          ],
          table: {
            head: [{ bn: "প্রশ্ন", en: "Question", hi: "सवाल" }, { bn: "উত্তর", en: "Answer", hi: "जवाब" }, { bn: "নমুনা", en: "Sample", hi: "नमूना" }],
            rows: [
              [{ bn: "গোনা যায় এমন একটা?", en: "one countable item?", hi: "गिनने योग्य एक वस्तु?" }, { bn: "a/an বা the — শূন্য নয়", en: "a/an or the — never zero", hi: "a/an या the — शून्य नहीं" }, { bn: "I bought a book", en: "I bought a book", hi: "I bought a book" }],
              [{ bn: "শ্রোতা কোনটা জানে?", en: "listener knows which?", hi: "सुनने वाला जानता है?" }, { bn: "না জানলে a/an, জানলে the", en: "unknown → a/an, known → the", hi: "अनजान → a/an, जाना → the" }, { bn: "I saw a dog → The dog was barking", en: "I saw a dog → The dog was barking", hi: "I saw a dog → The dog was barking" }],
              [{ bn: "সাধারণ বহুবচন/অগণন?", en: "generic plural/uncountable?", hi: "सामान्य बहुवचन/अगणन?" }, { bn: "শূন্য (zero article)", en: "zero article", hi: "शून्य (zero article)" }, { bn: "Dogs are loyal", en: "Dogs are loyal", hi: "Dogs are loyal" }],
            ],
          },
          examples: [
            { wrong: "I saw dog in the garden.", right: "I saw a dog in the garden.", note: { bn: "singular countable একা থাকতে পারে না; গল্পে প্রথম উল্লেখ → a।", en: "A singular countable never stands alone; first mention in the story → a.", hi: "singular countable अकेला नहीं रहता; कहानी में पहला उल्लेख → a।" } },
            { wrong: "I read a book you gave me.", right: "I read the book you gave me.", note: { bn: "'you gave me' দিয়ে বিশেষভাবে চেনা বই → the।", en: "'You gave me' pins down exactly which book → the.", hi: "'you gave me' से वही किताब निश्चित → the।" } },
            { wrong: "The dogs are loyal animals.", right: "Dogs are loyal animals.", note: { bn: "সাধারণী বহুবচন — zero article; the বসালে 'ওই চেনা কুকুরগুলো' হয়ে যায়।", en: "A generic plural — zero article; the would turn it into 'those particular dogs'.", hi: "सामान्य बहुवचन — zero article; the देने पर 'वही खास कुत्ते' बन जाएँगे।" } },
            { wrong: "I need a water.", right: "I need water. (বা a glass of water)", note: { bn: "অগণন — a বসে না; মাপ/মোড়ক চাইলে a glass of water।", en: "Uncountable — no a; ask for the container with a glass of water.", hi: "अगणन — a नहीं बैठेगा; माप चाहिए तो a glass of water।" } },
            { wrong: "An engineer is talking to the my father.", right: "An engineer is talking to my father.", note: { bn: "এক noun-phrase-এ একটাই determiner — the আর my একসাথে নয়।", en: "One noun phrase takes one determiner — the and my never pair.", hi: "एक noun-phrase में एक ही determiner — the और my साथ नहीं।" } },
          ],
        },
        {
          heading: {
            bn: "🔤 গঠন — a না an: বানান নয়, প্রথম ধ্বনি; আর জায়গা-ক্রমের নিয়ম",
            en: "🔤 Formation — a or an: the first sound, not the spelling; plus placement rules",
            hi: "🔤 गठन — a या an: पहला ध्वनि, न कि वर्तनी; और स्थान-क्रम के नियम",
          },
          lead: {
            bn: "a না an ঠিক হয় উচ্চারণে, বানানে নয় — আর article-ই phrase-এর সবার আগে।",
            en: "a or an is decided by pronunciation, not spelling — and the article always leads the phrase.",
            hi: "a या an उच्चारण से तय होता है, वर्तनी से नहीं — और article सदा वाक्यांश के सबसे आगे।",
          },
          points: [
            { bn: "**a/an উচ্চারণে ঠিক হয়, বানানে নয়** — শব্দের প্রথম ধ্বনিই দরজা খোলে।", en: "**a/an follows pronunciation, not spelling** — the word's first sound opens the door.", hi: "**a/an उच्चारण से तय, वर्तनी से नहीं** — शब्द की पहली ध्वनि दरवाज़ा खोलती है।" },
            { bn: "প্রথম ধ্বনি স্বরধ্বনি হলে **an**: an apple, an egg, an hour (h নীরব), an honest man, an M.A., an X-ray।", en: "If the first sound is a vowel, use **an**: an apple, an egg, an hour (silent h), an honest man, an M.A., an X-ray.", hi: "पहली ध्वनि स्वर हो तो **an**: an apple, an egg, an hour (h मौन), an honest man, an M.A., an X-ray।" },
            { bn: "প্রথম ধ্বনি ব্যঞ্জনধ্বনি হলে **a**: a book, a university ('ইউ'), a European, a one-rupee coin ('ওয়ান'), a UNESCO seat।", en: "If the first sound is a consonant, use **a**: a book, a university ('yu'), a European, a one-rupee coin ('wun'), a UNESCO seat.", hi: "पहली ध्वनि व्यंजन हो तो **a**: a book, a university ('यू'), a European, a one-rupee coin ('वन'), a UNESCO seat।" },
            { bn: "**জায়গা-ক্রম**: article + adjective + noun — a big red car, an old wooden door।", en: "**Placement order**: article + adjective + noun — a big red car, an old wooden door.", hi: "**क्रम**: article + adjective + noun — a big red car, an old wooden door।" },
            { bn: "article-ই phrase-এর সবার আগে: a really big car।", en: "The article always leads the phrase: a really big car.", hi: "article ही वाक्यांश के सबसे आगे: a really big car।" },
            { bn: "এক noun-phrase-এ একটাই article/determiner — the my book নয়; the book বা my book।", en: "One noun phrase takes one article/determiner — not the my book; either the book or my book.", hi: "एक noun-phrase में एक ही article/determiner — the my book नहीं; the book या my book।" },
            { bn: "চটজলদি জোড়া: such a nice day (বহুবচনে such nice days), what a pity, half an hour।", en: "Quick pairs: such a nice day (plural such nice days), what a pity, half an hour.", hi: "तुरंत जोड़े: such a nice day (बहुवचन में such nice days), what a pity, half an hour।" },
            { bn: "পরিমাণ-জোড়া: a few chairs (কয়েকটা চেয়ার), a little milk (একটু দুধ), many a student (আনুষ্ঠানিক)।", en: "Quantity pairs: a few chairs (a small number), a little milk (a small amount), many a student (formal).", hi: "मात्रा-जोड़े: a few chairs (कुछ कुर्सियाँ), a little milk (थोड़ा दूध), many a student (औपचारिक)।" },
          ],
          table: {
            head: [{ bn: "শব্দ", en: "Word", hi: "शब्द" }, { bn: "আর্টিকেল", en: "Article", hi: "आर्टिकल" }, { bn: "কারণ", en: "Why", hi: "कारण" }],
            rows: [
              [{ bn: "hour, honest man, M.A., X-ray", en: "hour, honest man, M.A., X-ray", hi: "hour, honest man, M.A., X-ray" }, { bn: "an", en: "an", hi: "an" }, { bn: "h নীরব — স্বর-ধ্বনিতে শুরু", en: "silent h — vowel sound start", hi: "h मौन — स्वर-ध्वनि से शुरू" }],
              [{ bn: "apple, egg", en: "apple, egg", hi: "apple, egg" }, { bn: "an", en: "an", hi: "an" }, { bn: "স্বর-ধ্বনিতে শুরু", en: "vowel sound start", hi: "स्वर-ध्वनि से शुरू" }],
              [{ bn: "university, European, UNESCO", en: "university, European, UNESCO", hi: "university, European, UNESCO" }, { bn: "a", en: "a", hi: "a" }, { bn: "u/Eu = 'ইউ' — ব্যঞ্জন-ধ্বনি", en: "u/Eu = 'yu' — consonant sound", hi: "u/Eu = 'यू' — व्यंजन ध्वनि" }],
              [{ bn: "one-rupee coin", en: "one-rupee coin", hi: "one-rupee coin" }, { bn: "a", en: "a", hi: "a" }, { bn: "one = 'ওয়ান' — ব্যঞ্জন-ধ্বনি", en: "one = 'wun' — consonant sound", hi: "one = 'वन' — व्यंजन ध्वनि" }],
            ],
          },
          examples: [
            { wrong: "He waited a hour.", right: "He waited an hour.", note: { bn: "hour-এ h নীরব — প্রথম ধ্বনি স্বর → an।", en: "The h in hour is silent — the first sound is a vowel → an.", hi: "hour में h मौन — पहली ध्वनि स्वर → an।" } },
            { wrong: "She is an university student.", right: "She is a university student.", note: { bn: "university 'ইউ'-ধ্বনিতে শুরু — ব্যঞ্জনধ্বনি → a।", en: "university starts with the 'yu' sound — a consonant sound → a.", hi: "university 'यू'-ध्वनि से शुरू — व्यंजन ध्वनि → a।" } },
            { wrong: "I have a great news for you.", right: "I have great news for you. (বা a piece of great news)", note: { bn: "news অগণন — a বসে না; মোড়ক চাইলে a piece of।", en: "news is uncountable — no a; wrap it as a piece of great news.", hi: "news अगणन — a नहीं; मोड़ना हो तो a piece of great news।" } },
            { wrong: "She bought the a beautiful saree.", right: "She bought a beautiful saree.", note: { bn: "এক সময়ে একটাই article; ক্রম article + adjective + noun।", en: "One article at a time; the order is article + adjective + noun.", hi: "एक बार में एक ही article; क्रम article + adjective + noun।" } },
            { wrong: "It was such nice day.", right: "It was such a nice day.", note: { bn: "singular countable-এর আগে such a; বহুবচনে such nice days।", en: "A singular countable takes such a; plurals take such nice days.", hi: "singular countable के साथ such a; बहुवचन में such nice days।" } },
          ],
        },
        {
          heading: {
            bn: "🚦 আভাস শব্দ — the ডাকার সংকেত আর a/an-এর সংকেত",
            en: "🚦 Signal words — what calls for the, and what calls for a/an",
            hi: "🚦 संकेत शब्द — the के संकेत और a/an के संकेत",
          },
          lead: {
            bn: "কোন শব্দ-ঘটনা the ডাকে, কোনটা a/an — আর কোথায় কিছুই বসে না।",
            en: "Which words and situations summon the, which call for a/an — and where nothing sits at all.",
            hi: "कौन-से शब्द the बुलाते हैं, कौन a/an — और कहाँ कुछ नहीं बैठता।",
          },
          points: [
            { bn: "**দ্বিতীয় উল্লেখ** the ডাকে: I bought a shirt. The shirt is blue।", en: "**Second mention** calls the: I bought a shirt. The shirt is blue.", hi: "**दूसरा उल्लेख** the बुलाता है: I bought a shirt. The shirt is blue।" },
            { bn: "**superlative/ordinal/only/same** — সবাই the ডাকে: the best player, the first day, the only option, the same bus।", en: "**Superlative/ordinal/only/same** — all call the: the best player, the first day, the only option, the same bus.", hi: "**superlative/ordinal/only/same** — सब the बुलाते हैं: the best player, the first day, the only option, the same bus।" },
            { bn: "**অনন্য বস্তু** the নেয়: the sun, the moon, the sky, the sea।", en: "**Unique things** take the: the sun, the moon, the sky, the sea.", hi: "**अद्वितीय वस्तुएँ** the लेती हैं: the sun, the moon, the sky, the sea।" },
            { bn: "**of-বাক্যাংশ** the ডাকে: the roof of the house, the city of Dhaka।", en: "**Of-phrases** call the: the roof of the house, the city of Dhaka.", hi: "**of-वाक्यांश** the बुलाता है: the roof of the house, the city of Dhaka।" },
            { bn: "প্রেক্ষাপটের একমাত্রও the — ঘরে বললে the door মানেই আমাদের দরজা।", en: "The scene's only one takes the too — said at home, the door means our door.", hi: "दृश्य की अकेली वस्तु भी the — घर पर कहें तो the door अर्थात् हमारा दरवाज़ा।" },
            { bn: "**a/an-এর সংকেত**: প্রথম উল্লেখ; পেশা (She is a doctor); যেকোনো-একটা (Give me a pen — any pen)।", en: "**Signals for a/an**: first mention; professions (She is a doctor); any-one-of-them (Give me a pen — any pen).", hi: "**a/an के संकेत**: पहला उल्लेख; पेशा (She is a doctor); कोई-भी-एक (Give me a pen — any pen)।" },
            { bn: "'প্রতি'-ভাব a/an: sixty takas a kilo, twice a week; অজানা কেউ: A Mr. Rahman called।", en: "'Per' takes a/an: sixty takas a kilo, twice a week; an unknown person: A Mr. Rahman called.", hi: "'प्रति'-भाव a/an: sixty takas a kilo, twice a week; अनजान व्यक्ति: A Mr. Rahman called।" },
            { bn: "**শূন্যের সংকেত**: সাধারণ বহুবচন/অগণন, খাবার (have breakfast), ভাষা, খেলা, বেশিরভাগ নাম।", en: "**Signals for zero**: general plurals/uncountables, meals (have breakfast), languages, games, most names.", hi: "**शून्य के संकेत**: सामान्य बहुवचन/अगणन, भोजन (have breakfast), भाषाएँ, खेल, अधिकांश नाम।" },
          ],
          table: {
            head: [{ bn: "the ডাকে", en: "calls the", hi: "the बुलाता है" }, { bn: "a/an ডাকে", en: "calls a/an", hi: "a/an बुलाता है" }, { bn: "শূন্য থাকে", en: "stays zero", hi: "शून्य रहता है" }],
            rows: [
              [{ bn: "দ্বিতীয় উল্লেখ — The shirt is blue", en: "second mention — The shirt is blue", hi: "दूसरा उल्लेख — The shirt is blue" }, { bn: "প্রথম উল্লেখ — I saw a dog", en: "first mention — I saw a dog", hi: "पहला उल्लेख — I saw a dog" }, { bn: "সাধারণ বহুবচন — Dogs are loyal", en: "generic plural — Dogs are loyal", hi: "सामान्य बहुवचन — Dogs are loyal" }],
              [{ bn: "superlative/ordinal — the best player, the first day", en: "superlative/ordinal — the best player, the first day", hi: "superlative/ordinal — the best player, the first day" }, { bn: "পেশা — She is a doctor", en: "profession — She is a doctor", hi: "पेशा — She is a doctor" }, { bn: "খাবার — have breakfast", en: "meals — have breakfast", hi: "भोजन — have breakfast" }],
              [{ bn: "only/same — the only option, the same bus", en: "only/same — the only option, the same bus", hi: "only/same — the only option, the same bus" }, { bn: "'প্রতি' — twice a week", en: "'per' — twice a week", hi: "'प्रति' — twice a week" }, { bn: "ভাষা — speak Bengali", en: "languages — speak Bengali", hi: "भाषाएँ — speak Bengali" }],
              [{ bn: "অনন্য — the sun, the sea", en: "unique things — the sun, the sea", hi: "अद्वितीय — the sun, the sea" }, { bn: "অজানা কেউ — A Mr. Rahman called", en: "unknown person — A Mr. Rahman called", hi: "अनजान व्यक्ति — A Mr. Rahman called" }, { bn: "খেলা — play football", en: "games — play football", hi: "खेल — play football" }],
              [{ bn: "of-বাক্যাংশ — the roof of the house", en: "of-phrase — the roof of the house", hi: "of-वाक्यांश — the roof of the house" }, { bn: "যেকোনো একটা — Give me a pen", en: "any one — Give me a pen", hi: "कोई भी एक — Give me a pen" }, { bn: "বেশিরভাগ নাম — Dhaka", en: "most names — Dhaka", hi: "अधिकांश नाम — Dhaka" }],
            ],
          },
          examples: [
            { wrong: "Everest is highest mountain in the world.", right: "Everest is the highest mountain in the world.", note: { bn: "superlative সবসময় the ডাকে — highest → the highest।", en: "A superlative always calls for the — highest → the highest.", hi: "superlative सदा the बुलाता है — highest → the highest।" } },
            { wrong: "We go to cinema twice week.", right: "We go to the cinema twice a week.", note: { bn: "প্রথাগত জুড়ি the + cinema; 'প্রতি সপ্তাহে দুইবার' → twice a week।", en: "The fixed pair is the + cinema; 'per week two times' → twice a week.", hi: "प्रचलित जोड़ी the + cinema; 'प्रति सप्ताह दो बार' → twice a week।" } },
            { wrong: "Sun rises in east.", right: "The sun rises in the east.", note: { bn: "অনন্য বস্তু ও দিক — দুজনেই the নেয়।", en: "Unique things and directions both take the.", hi: "अद्वितीय वस्तु और दिशा — दोनों the लेते हैं।" } },
            { wrong: "A doctor who treated me was very kind.", right: "The doctor who treated me was very kind.", note: { bn: "'who treated me' দিয়ে চেনা-সাজানো ব্যক্তি → the; a দিলে 'যেকোনো এক ডাক্তার' শোনায়।", en: "'Who treated me' identifies the person → the; a would sound like 'some random doctor'.", hi: "'who treated me' से व्यक्ति निश्चित → the; a कहने पर 'कोई भी डॉक्टर' लगेगा।" } },
            { wrong: "Mr. Karim is best teacher of our school.", right: "Mr. Karim is the best teacher in our school.", note: { bn: "best = superlative → the; আর প্রচলিত ক্রম 'the best teacher in our school'।", en: "best is a superlative → the; and the natural phrasing is 'the best teacher in our school'.", hi: "best = superlative → the; और स्वाभाविक क्रम 'the best teacher in our school'।" } },
          ],
        },
        {
          heading: {
            bn: "🏛️ শূন্য আর্টিকেলের রাজ্য — প্রতিষ্ঠান, খাবার, ভাষা, বিমূর্ত, নাম",
            en: "🏛️ The zero-article kingdom — institutions, meals, languages, abstract nouns, names",
            hi: "🏛️ शून्य-आर्टिकल का साम्राज्य — संस्थाएँ, भोजन, भाषाएँ, भाववाचक, नाम",
          },
          lead: {
            bn: "ইংরেজিতে 'কিছুই না বসা'-ও নিয়ম — শূন্য আর্টিকেলের নিজস্ব পাঁচ রাজ্য আছে।",
            en: "In English, placing nothing is also a rule — the zero article rules five kingdoms of its own.",
            hi: "अंग्रेज़ी में 'कुछ न रखना' भी नियम है — zero-article के अपने पाँच साम्राज्य हैं।",
          },
          points: [
            { bn: "**প্রতিষ্ঠান-ভাবে শূন্য**: go to school (ছাত্র হয়ে পড়তে), be in hospital (রোগী হয়ে — ব্রিটিশ ইংরেজি), go to bed (ঘুমাতে), go to prison (দোষী হয়ে), at university (পড়াশোনার ধাপে)।", en: "**Institution-sense takes zero**: go to school (as a pupil), be in hospital (as a patient — British English), go to bed (to sleep), go to prison (as an offender), at university (as a student).", hi: "**संस्था-भाव में शून्य**: go to school (छात्र बनकर), be in hospital (रोगी बनकर — ब्रिटिश अंग्रेज़ी), go to bed (सोने को), go to prison (अपराधी बनकर), at university (पढ़ाई के चरण में)।" },
            { bn: "ভবন/বস্তু মানলে the ঢোকে: My mother went to the school to meet the teacher; He visited her at the hospital।", en: "The building/object sense pulls in the: My mother went to the school to meet the teacher; He visited her at the hospital.", hi: "भवन/वस्तु-अर्थ में the घुस जाता है: My mother went to the school to meet the teacher; He visited her at the hospital।" },
            { bn: "**খাবার শূন্য**: have breakfast/lunch/dinner; বর্ণনা জুড়লে a ফেরে: a big breakfast, the dinner we had at Rina's।", en: "**Meals take zero**: have breakfast/lunch/dinner; add a description and a returns: a big breakfast, the dinner we had at Rina's.", hi: "**भोजन शून्य**: have breakfast/lunch/dinner; विशेषण जुड़े तो a लौटता है: a big breakfast, the dinner we had at Rina's।" },
            { bn: "**ভাষা শূন্য**: speak Bengali, learn English; তবে the Bengali language, the English of Shakespeare।", en: "**Languages take zero**: speak Bengali, learn English; but the Bengali language, the English of Shakespeare.", hi: "**भाषाएँ शून्य**: speak Bengali, learn English; पर the Bengali language, the English of Shakespeare।" },
            { bn: "**বিমূর্ত সাধারণ-ভাবে শূন্য**: happiness, love, information, advice, progress; নির্দিষ্ট হলে the: the happiness of childhood।", en: "**Abstract nouns take zero in general**: happiness, love, information, advice, progress; when made specific, the: the happiness of childhood.", hi: "**भाववाचक सामान्य-भाव में शून्य**: happiness, love, information, advice, progress; विशिष्ट हों तो the: the happiness of childhood।" },
            { bn: "**নামের নিয়ম**: মানুষের নাম, শহর, বেশিরভাগ দেশ শূন্য — Dhaka, Bangladesh।", en: "**Name rules**: people's names, cities and most countries take zero — Dhaka, Bangladesh.", hi: "**नामों का नियम**: व्यक्ति-नाम, शहर, अधिकांश देश शून्य — Dhaka, Bangladesh।" },
            { bn: "নদী-জলসীমা-পর্বতশ্রেণি the নেয়: the Padma, the Bay of Bengal, the Himalayas; একক পর্বত শূন্য: Mount Everest।", en: "Rivers, seas and mountain ranges take the: the Padma, the Bay of Bengal, the Himalayas; single peaks stay zero: Mount Everest.", hi: "नदी-सागर-पर्वत श्रेणी the लेती हैं: the Padma, the Bay of Bengal, the Himalayas; अकेली चोटी शून्य: Mount Everest।" },
          ],
          table: {
            head: [{ bn: "শূন্য থাকে", en: "takes zero", hi: "शून्य रहता है" }, { bn: "the ঢোকে যখন", en: "the moves in when", hi: "the घुसता है जब" }],
            rows: [
              [{ bn: "প্রতিষ্ঠান: go to school, in hospital", en: "institution: go to school, in hospital", hi: "संस्था: go to school, in hospital" }, { bn: "ভবন-বস্তু: the school, the hospital", en: "building/object: the school, the hospital", hi: "भवन-वस्तु: the school, the hospital" }],
              [{ bn: "খাবার: have breakfast", en: "meals: have breakfast", hi: "भोजन: have breakfast" }, { bn: "বর্ণনা-জুড়লে: a big breakfast", en: "with a description: a big breakfast", hi: "वर्णन के साथ: a big breakfast" }],
              [{ bn: "ভাষা: speak Bengali", en: "languages: speak Bengali", hi: "भाषाएँ: speak Bengali" }, { bn: "নির্দিষ্ট: the Bengali language", en: "specific: the Bengali language", hi: "विशिष्ट: the Bengali language" }],
              [{ bn: "বিমূর্ত: happiness, advice", en: "abstract: happiness, advice", hi: "भाववाचक: happiness, advice" }, { bn: "নির্দিষ্ট: the happiness of childhood", en: "specific: the happiness of childhood", hi: "विशिष्ट: the happiness of childhood" }],
              [{ bn: "নাম: Dhaka, Mount Everest", en: "names: Dhaka, Mount Everest", hi: "नाम: Dhaka, Mount Everest" }, { bn: "নদী-সাগর-শ্রেণি: the Padma, the Himalayas", en: "rivers-seas-ranges: the Padma, the Himalayas", hi: "नदी-सागर-श्रेणी: the Padma, the Himalayas" }],
            ],
          },
          examples: [
            { wrong: "My son goes to the school by bus.", right: "My son goes to school by bus.", note: { bn: "ছাত্র হয়ে পড়তে যাওয়া = প্রতিষ্ঠান-ভাব → শূন্য; the school মানে ভবনটা।", en: "Attending as a pupil = the institution sense → zero; the school means the building.", hi: "छात्र बनकर पढ़ने जाना = संस्था-भाव → शून्य; the school अर्थात् भवन।" } },
            { wrong: "After dinner, children go to the bed at nine.", right: "After dinner, children go to bed at nine.", note: { bn: "ঘুমানোর উদ্দেশ্যে যাওয়া → go to bed শূন্য; the bed মানে ওই খাটটা।", en: "Going for the purpose of sleeping → go to bed with zero; the bed means that piece of furniture.", hi: "सोने के उद्देश्य से जाना → go to bed शून्य; the bed अर्थात् वही खाट।" } },
            { wrong: "We had the breakfast at seven.", right: "We had breakfast at seven.", note: { bn: "নিয়মিত খাবার শূন্য; বিশেষ বর্ণনায় হতো a lovely breakfast।", en: "A routine meal takes zero; a described one would be a lovely breakfast.", hi: "नियमित भोजन शून्य; वर्णित भोजन होता a lovely breakfast।" } },
            { wrong: "She is learning the English.", right: "She is learning English.", note: { bn: "ভাষার নাম শূন্য; the English বললে মানুষ-জাতি শোনায়।", en: "Language names take zero; the English would sound like the people.", hi: "भाषा-नाम शून्य; the English कहने पर लोग-समुदाय लगेगा।" } },
            { wrong: "Padma is one of the biggest rivers.", right: "The Padma is one of the biggest rivers.", note: { bn: "নদীর নামে the — the Padma, the Meghna; তবে Mount Everest শূন্য।", en: "River names take the — the Padma, the Meghna; but Mount Everest stays zero.", hi: "नदी-नाम the लेते हैं — the Padma, the Meghna; पर Mount Everest शून्य।" } },
          ],
        },
        {
          heading: {
            bn: "☕ অগণনের সাথে আর্টিকেল — a coffee আসলে এক কাপ",
            en: "☕ Articles with uncountables — a coffee is really a cup",
            hi: "☕ अगणन के साथ आर्टिकल — a coffee दरअसल एक कप",
          },
          lead: {
            bn: "অগণন সাধারণভাবে শূন্য — কিন্তু পাত্রে ঢোকামাত্র গোনা যায়, আর বিশেষণ জুড়লে a ফেরে।",
            en: "Uncountables stay zero in general — but pour them into a container and they count; add an adjective and a returns.",
            hi: "अगणन सामान्य-भाव में शून्य — पर पात्र में ढलते ही गिने जाते हैं, और विशेषण जुड़े तो a लौटता है।",
          },
          formula: {
            bn: "অগণন গোনতে: a/an/some + মোড়ক + of + অগণন → a glass of water, a piece of advice",
            en: "to count an uncountable: a/an/some + container + of + noun → a glass of water, a piece of advice",
            hi: "अगणन गिनने के लिए: a/an/some + मोड़क + of + अगणन → a glass of water, a piece of advice",
          },
          points: [
            { bn: "**অগণন সাধারণ-ভাবে শূন্য** — water, rice, advice, information, furniture, luggage: Water boils at 100°C, I need information।", en: "**Uncountables stay zero in general** — water, rice, advice, information, furniture, luggage: Water boils at 100°C, I need information.", hi: "**अगणन सामान्य-भाव में शून्य** — water, rice, advice, information, furniture, luggage: Water boils at 100°C, I need information।" },
            { bn: "রেস্তোরাঁ-দোকানে মোড়কে পড়লেই গোনা যায়: a coffee = এক কাপ কফি, two teas = দুই কাপ চা, a water = এক বোতল, an ice cream = একটা কোন।", en: "Inside a café-shop container they count: a coffee = one cup, two teas = two cups, a water = a bottle, an ice cream = one cone.", hi: "कैफ़े-दुकान के मोड़क में बंद होते ही गिने जाते हैं: a coffee = एक कप, two teas = दो कप, a water = एक बोतल, an ice cream = एक कोन।" },
            { bn: "**বিশেষণ জুড়লে বিমূর্তও a নেয়**: a good knowledge of English, a deep sleep, a heavy rain, a great time, a basic education।", en: "**With an adjective, even abstract nouns take a**: a good knowledge of English, a deep sleep, a heavy rain, a great time, a basic education.", hi: "**विशेषण जुड़े तो भाववाचक भी a लेते हैं**: a good knowledge of English, a deep sleep, a heavy rain, a great time, a basic education।" },
            { bn: "তুলনা করুন: Knowledge is power (সাধারণ, শূন্য) — A good knowledge of English helps (বিশেষ ধরনের জ্ঞান, a)।", en: "Compare: Knowledge is power (general, zero) — A good knowledge of English helps (a particular kind, a).", hi: "तुलना कीजिए: Knowledge is power (सामान्य, शून्य) — A good knowledge of English helps (विशेष प्रकार, a)।" },
            { bn: "**some/any** অগণন-বহুবচনের অনির্দিষ্ট মোড়ক: I need some water, Did you buy any rice?", en: "**some/any** is the non-specific wrapper for uncountables and plurals: I need some water, Did you buy any rice?", hi: "**some/any** अगणन-बहुवचन का अनिश्चित मोड़क: I need some water, Did you buy any rice?" },
            { bn: "**রূপ-বদল** মনে রাখুন: paper (কাগজ) / a paper (একটা পত্রিকা), hair (চুল) / a hair (একটা সুতো), time (সময়) / a time (একবার)।", en: "**Shape-shifters** to remember: paper (material) / a paper (a newspaper), hair (the whole head) / a hair (one strand), time (duration) / a time (an occasion).", hi: "**रूप-बदल** याद रखें: paper (कागज़) / a paper (एक अख़बार), hair (संपूर्ण बाल) / a hair (एक तिनका), time (समय) / a time (एक अवसर)।" },
          ],
          table: {
            head: [{ bn: "শূন্য — সাধারণ ভাব", en: "zero — general sense", hi: "शून्य — सामान्य भाव" }, { bn: "a/an — মোড়কে পড়লে", en: "a/an — inside a wrapper", hi: "a/an — मोड़क में" }],
            rows: [
              [{ bn: "coffee — কফি", en: "coffee — the drink", hi: "coffee — कॉफ़ी" }, { bn: "a coffee — এক কাপ কফি", en: "a coffee — one cup", hi: "a coffee — एक कप कॉफ़ी" }],
              [{ bn: "paper — কাগজ", en: "paper — the material", hi: "paper — कागज़" }, { bn: "a paper — একটা পত্রিকা", en: "a paper — one newspaper", hi: "a paper — एक अख़बार" }],
              [{ bn: "hair — চুল (সামগ্রিক)", en: "hair — the whole head", hi: "hair — संपूर्ण बाल" }, { bn: "a hair — একটা সুতো", en: "a hair — one strand", hi: "a hair — एक तिनका" }],
              [{ bn: "time — সময়", en: "time — duration", hi: "time — समय" }, { bn: "a time — একবার, একটা সময়কাল", en: "a time — an occasion", hi: "a time — एक अवसर" }],
              [{ bn: "Knowledge is power", en: "Knowledge is power", hi: "Knowledge is power" }, { bn: "A good knowledge of English helps", en: "A good knowledge of English helps", hi: "A good knowledge of English helps" }],
            ],
          },
          examples: [
            { wrong: "I drank two coffee.", right: "I drank two coffees. (two cups of coffee)", note: { bn: "মোড়কে পড়লে গোনা যায় — two coffees = দুই কাপ।", en: "Inside a container they count — two coffees = two cups.", hi: "पैकेट में बंद होते ही गिनती होती है — two coffees = दो कप।" } },
            { wrong: "She has very good knowledge of English.", right: "She has a very good knowledge of English.", note: { bn: "বিশেষণসহ বিমূর্ত → a; 'জ্ঞান' সাধারণভাবে হলে শূন্য (Knowledge is power)।", en: "An abstract noun with an adjective takes a; in the general sense it stays zero (Knowledge is power).", hi: "विशेषण के साथ भाववाचक → a; सामान्य-भाव में शून्य (Knowledge is power)।" } },
            { wrong: "I need an advice from you.", right: "I need advice from you. (বা a piece of advice)", note: { bn: "advice অগণন — a নয়; মোড়ক চাইলে a piece of advice।", en: "advice is uncountable — no a; wrap it as a piece of advice.", hi: "advice अगणन — a नहीं; मोड़ना हो तो a piece of advice।" } },
            { wrong: "Please give me a information about the train.", right: "Please give me some information about the train.", note: { bn: "information অগণন — a নয়, some/any মোড়ক।", en: "information is uncountable — not a, but the some/any wrapper.", hi: "information अगणन — a नहीं, some/any मोड़क।" } },
            { wrong: "He bought a furniture for the new flat.", right: "He bought some furniture for the new flat. (বা a piece of furniture)", note: { bn: "furniture অগণন — some বা a piece of; a সরাসরি বসে না।", en: "furniture is uncountable — some or a piece of; a cannot sit directly.", hi: "furniture अगणन — some या a piece of; a सीधे नहीं बैठता।" } },
          ],
        },
        {
          heading: {
            bn: "🐅 সাধারণী অর্থে the, a/an আর বহুবচন — The tiger, A tiger, Tigers",
            en: "🐅 Generic meaning with the, a/an and plurals — The tiger, A tiger, Tigers",
            hi: "🐅 सामान्य अर्थ में the, a/an और बहुवचन — The tiger, A tiger, Tigers",
          },
          lead: {
            bn: "'পুরো প্রজাতি' বোঝাতে ইংরেজির তিন রাস্তা — সুর আলাদা, অর্থ এক।",
            en: "Three roads for 'the whole species' — different tones, one meaning.",
            hi: "'पूरी प्रजाति' के लिए तीन रास्ते — सुर अलग, अर्थ एक।",
          },
          formula: {
            bn: "প্রজাতি-সাধারণী: The tiger is endangered = Tigers are endangered ('A tiger is endangered' দুর্বল শোনায়)",
            en: "species-generic: The tiger is endangered = Tigers are endangered ('A tiger is endangered' sounds weak)",
            hi: "प्रजाति-सामान्य: The tiger is endangered = Tigers are endangered ('A tiger is endangered' कमज़ोर लगेगा)",
          },
          points: [
            { bn: "'পুরো প্রজাতি/শ্রেণি' বোঝাতে ইংরেজি তিন রাস্তা দেয় — the + একবচন, a/an + একবচন, বহুবচন।", en: "For 'the whole species/class' English offers three roads — the + singular, a/an + singular, and the plural.", hi: "'पूरी प्रजाति/वर्ग' के लिए अंग्रेज़ी तीन रास्ते देती है — the + एकवचन, a/an + एकवचन, बहुवचन।" },
            { bn: "**the + একবচন** — বিজ্ঞান-প্রকৃতি-আবিষ্কারের ঘোষণায় প্রজাতি-সাধারণী: The tiger is endangered, The computer has changed our lives।", en: "**the + singular** — the species-generic of science, nature and inventions: The tiger is endangered, The computer has changed our lives.", hi: "**the + एकवचन** — विज्ञान-प्रकृति-आविष्कार की घोषणाओं में प्रजाति-सामान्य: The tiger is endangered, The computer has changed our lives।" },
            { bn: "**a/an + একবচন** — 'যেকোনো একটা, সাধারণত যা হয়': A tiger can swim, A child needs love।", en: "**a/an + singular** — 'any one of them, as they usually are': A tiger can swim, A child needs love.", hi: "**a/an + एकवचन** — 'कोई भी एक, जैसा साधारणतया होता है': A tiger can swim, A child needs love।" },
            { bn: "**বহুবচন** — সবচেয়ে প্রচলিত সাধারণী: Tigers are endangered, Children need love।", en: "**The plural** — the most common generic: Tigers are endangered, Children need love.", hi: "**बहुवचन** — सबसे प्रचलित सामान्य: Tigers are endangered, Children need love।" },
            { bn: "সাবধান-খুঁটি: 'A tiger is endangered' শোনায় 'যেকোনো একটা বাঘ বিপন্ন' — প্রজাতি-সংকটের ঘোষণায় the + একবচন বা বহুবচনই স্বাভাবিক।", en: "Caution peg: 'A tiger is endangered' sounds like 'any single tiger is endangered' — for a species-crisis announcement, the + singular or the plural is natural.", hi: "सावधानी-कील: 'A tiger is endangered' सुनाई देगा 'कोई भी एक बाघ खतरे में' — प्रजाति-संकट की घोषणा में the + एकवचन या बहुवचन ही स्वाभाविक।" },
            { bn: "একই the-পরিবার: বাদ্যযন্ত্র I play the guitar (যন্ত্র হিসেবে), কিন্তু খেলা শূন্য — I play football।", en: "The same the-family: instruments take the — I play the guitar; but games stay zero — I play football.", hi: "वही the-परिवार: वाद्ययंत्र I play the guitar (यंत्र के रूप में), पर खेल शून्य — I play football।" },
          ],
          table: {
            head: [{ bn: "রাস্তা", en: "Road", hi: "रास्ता" }, { bn: "সুর", en: "Tone", hi: "सुर" }, { bn: "নমুনা", en: "Sample", hi: "नमूना" }],
            rows: [
              [{ bn: "the + একবচন", en: "the + singular", hi: "the + एकवचन" }, { bn: "ভারী, আনুষ্ঠানিক — বিজ্ঞান/আবিষ্কার", en: "heavy, formal — science/inventions", hi: "भारी, औपचारिक — विज्ञान/आविष्कार" }, { bn: "The tiger is endangered", en: "The tiger is endangered", hi: "The tiger is endangered" }],
              [{ bn: "a/an + একবচন", en: "a/an + singular", hi: "a/an + एकवचन" }, { bn: "দৈনন্দিন, ব্যক্তিগত", en: "everyday, personal", hi: "रोज़मर्रा, व्यक्तिगत" }, { bn: "A tiger can swim", en: "A tiger can swim", hi: "A tiger can swim" }],
              [{ bn: "বহুবচন", en: "the plural", hi: "बहुवचन" }, { bn: "সবচেয়ে প্রচলিত", en: "the most common", hi: "सबसे प्रचलित" }, { bn: "Tigers are endangered", en: "Tigers are endangered", hi: "Tigers are endangered" }],
            ],
          },
          examples: [
            { wrong: "Tiger is endangered animal.", right: "The tiger is an endangered animal.", note: { bn: "প্রজাতি-সাধারণী the + একবচন; 'একটা বিপন্ন প্রাণী' ভাবে an endangered animal।", en: "Species-generic takes the + singular; 'an endangered animal' is one countable item of that kind.", hi: "प्रजाति-सामान्य the + एकवचन; 'एक खतरे वाला प्राणी' के लिए an endangered animal।" } },
            { wrong: "A computer has changed our lives.", right: "The computer has changed our lives.", note: { bn: "আবিষ্কার-শ্রেণির ঐতিহাসিক ভাব → the + একবচন।", en: "The historic claim about an invention-class → the + singular.", hi: "आविष्कार-वर्ग का ऐतिहासिक दावा → the + एकवचन।" } },
            { wrong: "The children need love.", right: "Children need love.", note: { bn: "সাধারণী বহুবচন — শূন্য; the বসালে নির্দিষ্ট বাচ্চারা হয়ে যায়।", en: "A generic plural — zero; the would pick out particular children.", hi: "सामान्य बहुवचन — शून्य; the देने पर खास बच्चे बन जाएँगे।" } },
            { wrong: "She plays the football.", right: "She plays football.", note: { bn: "খেলা শূন্য; বাদ্যযন্ত্রে the — She plays the guitar।", en: "Games take zero; instruments take the — She plays the guitar.", hi: "खेल शून्य; वाद्ययंत्र the — She plays the guitar।" } },
            { wrong: "I like the mangoes.", right: "I like mangoes.", note: { bn: "সাধারণ পছন্দ → শূন্য বহুবচন; the mangoes মানে ওই চেনা আমগুলো।", en: "A general liking → zero plural; the mangoes means those particular mangoes.", hi: "सामान्य पसंद → शून्य बहुवचन; the mangoes अर्थात् वही जानी आमें।" } },
          ],
        },
        {
          heading: {
            bn: "⚠️ বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "⚠️ Common mistakes by Bengali speakers",
            hi: "⚠️ बांग्लाभाषी विद्यार्थियों की सामान्य गलतियाँ",
          },
          lead: {
            bn: "বাংলায় আর্টিকেল নেই বলেই দুই দিকে পা পিছলে যায় — কমও হয়, বেশিও।",
            en: "Because Bengali has no articles, learners slip both ways — too few and too many.",
            hi: "बांग्ला में आर्टिकल नहीं, इसलिए दोनों ओर लड़खड़ाना — कम भी, ज़्यादा भी।",
          },
          formula: {
            bn: "singular countable দেখলেই → a/an/the/my — কোনো না কোনো determiner বাধ্যতামূলক",
            en: "the moment you see a singular countable → a/an/the/my — some determiner is mandatory",
            hi: "singular countable देखते ही → a/an/the/my — कोई न कोई determiner अनिवार्य",
          },
          points: [
            { bn: "মূল শত্রু একজন: বাংলায় আর্টিকেল নেই — 'ছেলেটা'-র 'টা' আর্টিকেল নয়, 'একটা ছেলে'-র 'একটা' সংখ্যা-শব্দ।", en: "The single enemy: Bengali has no articles — the 'টা' in 'ছেলেটা' is not an article, and the 'একটা' in 'একটা ছেলে' is a numeral.", hi: "एकमात्र शत्रु: बांग्ला में आर्टिकल नहीं — 'ছেলেটा' का 'टा' article नहीं, 'एकটा ছেলে' का 'एकটा' संख्या-शब्द।" },
            { bn: "**ভুল ১ — আর্টিকেল-হীন বাক্য**: I read book, He is best player, She is teacher।", en: "**Mistake 1 — article-less sentences**: I read book, He is best player, She is teacher.", hi: "**गलती 1 — बिना-आर्टिकल वाक्य**: I read book, He is best player, She is teacher।" },
            { bn: "সমাধান: singular countable দেখলেই হাত স্বয়ংক্রিয়ভাবে a/an/the/my-র দিকে যাবে — কোনো না কোনো determiner লাগবেই।", en: "The fix: the moment you see a singular countable, your hand reaches for a/an/the/my — some determiner must sit there.", hi: "समाधान: singular countable देखते ही हाथ a/an/the/my की ओर — कोई न कोई determiner बैठेगा ही।" },
            { bn: "**ভুল ২ — উল্টো অতিরিক্ত**: নামের আগে the (the Dhaka, the Rina) বা দুই determiner (the my book)।", en: "**Mistake 2 — the opposite excess**: the before names (the Dhaka, the Rina) or double determiners (the my book).", hi: "**गलती 2 — उलटा अतिरिक्त**: नामों से पहले the (the Dhaka, the Rina) या दो determiner (the my book)।" },
            { bn: "**ভুল ৩ — B1-স্তরে মুখস্থ প্রতিষ্ঠান-বাক্যাংশ ভাঙা**: in hospital (রোগী হয়ে), at university (ছাত্র হয়ে), on TV (সম্প্রচারে), by bus (যাতায়াতে), in bed (ঘুমে/অসুস্থতায়)।", en: "**Mistake 3 — breaking fixed B1 institution phrases**: in hospital (as a patient), at university (as a student), on TV (on broadcast), by bus (for travel), in bed (sleeping/ill).", hi: "**गलती 3 — B1-स्तर के कंठस्थ संस्था-वाक्यांश टूटना**: in hospital (रोगी बनकर), at university (छात्र बनकर), on TV (प्रसारण पर), by bus (यात्रा में), in bed (नींद/बीमारी में)।" },
            { bn: "এগুলোর the-বিহীন রূপই স্বাভাবিক — the ঢুকলে অর্থ ভবন/বস্তুর দিকে পাল্টে যায়।", en: "Their the-less forms are the normal ones — adding the flips the meaning to the building/object.", hi: "इनका the-रहित रूप ही सामान्य — the जोड़ने पर अर्थ भवन/वस्तु में बदल जाता है।" },
          ],
          examples: [
            { wrong: "I am reading book.", right: "I am reading a book.", note: { bn: "singular countable একা অসম্ভব — a/the/my কিছু একটা লাগবেই।", en: "A singular countable cannot stand alone — a/the/my, some determiner is required.", hi: "singular countable अकेला असंभव — a/the/my, कोई determiner चाहिए ही।" } },
            { wrong: "She is best student in the class.", right: "She is the best student in the class.", note: { bn: "superlative → the; বাংলায় 'সেরা ছাত্রী' শুনে the ভুলে যাওয়া হয়।", en: "Superlative → the; Bengali 'সেরা ছাত্রী' tempts you to forget it.", hi: "superlative → the; बांग्ला 'सेरा छात्री' सुनकर the भूल जाते हैं।" } },
            { wrong: "I watched the news on the TV last night.", right: "I watched the news on TV last night.", note: { bn: "সম্প্রচার-মাধ্যম ভাবে on TV শূন্য; the TV মানে সেটটা।", en: "As a broadcast medium, on TV is zero; the TV means the set itself.", hi: "प्रसारण-माध्यम के भाव में on TV शून्य; the TV अर्थात् सेट।" } },
            { wrong: "Every day she goes to office by the bus.", right: "Every day she goes to office by bus.", note: { bn: "যাতায়াত-মাধ্যম by + শূন্য — by bus/train/walk; the bus মানে নির্দিষ্ট বাসটা।", en: "Travel means by + zero — by bus/train/walk; the bus would be one particular bus.", hi: "यातायात by + शून्य — by bus/train/walk; the bus अर्थात् वही खास बस।" } },
            { wrong: "He has been in the bed all morning — he is sick.", right: "He has been in bed all morning — he is sick.", note: { bn: "অসুস্থ-ঘুমের ভাবে in bed শূন্য; in the bed মানে বিছানার ওপর বস্তুগতভাবে।", en: "The asleep/ill sense takes in bed with zero; in the bed is about being on the furniture.", hi: "बीमार/सोए भाव में in bed शून्य; in the bed अर्थात् बिस्तर पर वस्तुगत रूप से।" } },
          ],
        },
        {
          heading: {
            bn: "📖 ছোট গল্পে দেখা যাক — মিতুর হাসপাতাল-সকাল",
            en: "📖 A short story to see it all — Mithu's hospital morning",
            hi: "📖 एक छोटी कहानी में सब देखें — मितु का अस्पताल-सुबह",
          },
          lead: {
            bn: "মিতুর এক সকালেই পাঠের প্রায় সব নিয়ম কাজ করতে দেখুন।",
            en: "Watch nearly every rule of the lesson at work in Mithu's one morning.",
            hi: "मितु की एक ही सुबह में पाठ के लगभग सभी नियम काम करते देखिए।",
          },
          points: [
            { bn: "সকালে মিতুর মা বলল, 'Hurry up! Your grandfather is in hospital — take the 9 o'clock bus।' — প্রতিষ্ঠান-ভাবে in hospital শূন্য, প্রেক্ষাপটের বাস the।", en: "In the morning Mithu's mother said, 'Hurry up! Your grandfather is in hospital — take the 9 o'clock bus.' — institution-sense in hospital is zero, the scene's bus takes the.", hi: "सुबह मितु की माँ ने कहा, 'Hurry up! Your grandfather is in hospital — take the 9 o'clock bus।' — संस्था-भाव में in hospital शून्य, प्रसंग की बस the।" },
            { bn: "মিতু breakfast ছাড়াই ব্যাগ নিল — খাবার শূন্য; ভেতরে a letter আর an old photo — প্রথম উল্লেখ।", en: "Mithu grabbed her bag without breakfast — meals take zero; inside were a letter and an old photo — first mentions.", hi: "मितु ने breakfast के बिना ही बैग उठाया — भोजन शून्य; भीतर a letter और an old photo — पहला उल्लेख।" },
            { bn: "the letter ছিল দাদুর হাতের লেখা, the photo-তে দাদু Mount Everest-এর সামনে — দ্বিতীয় উল্লেখে the।", en: "the letter was in her grandfather's hand, and in the photo he stood before Mount Everest — second mentions take the.", hi: "the letter दादाजी के हाथ का लिखा था, the photo में वे Mount Everest के सामने — दूसरे उल्लेख में the।" },
            { bn: "পেছনে the Himalayas — পর্বতশ্রেণি the নেয়; কিন্তু Mount Everest একক পর্বত — শূন্য।", en: "Behind him stood the Himalayas — ranges take the; but Mount Everest, a single peak, stays zero.", hi: "पीछे the Himalayas — पर्वत श्रेणी the लेती है; पर Mount Everest अकेली चोटी — शून्य।" },
            { bn: "বাস মিস করে ফোনে বলল, 'I missed the bus, so I'll come by rickshaw' — প্রেক্ষাপটে নির্দিষ্ট বাস the, যাতায়াতে by rickshaw শূন্য।", en: "Missing the bus she phoned, 'I missed the bus, so I'll come by rickshaw' — the scene fixes the bus, travel means by rickshaw with zero.", hi: "बस छूटने पर फोन पर बोली, 'I missed the bus, so I'll come by rickshaw' — प्रसंग में निश्चित बस the, यात्रा में by rickshaw शून्य।" },
            { bn: "হাসপাতালে নার্স হাসল, 'He is the happiest man today — his grandson... sorry, granddaughter has come!' — superlative the happiest।", en: "At the hospital the nurse smiled, 'He is the happiest man today — his grandson... sorry, granddaughter has come!' — the superlative the happiest.", hi: "अस्पताल में नर्स हँसी, 'He is the happiest man today — his grandson... sorry, granddaughter has come!' — superlative the happiest।" },
            { bn: "ক্যান্টিন থেকে চা: 'A tea for me, and the tea he likes — with ginger' — a tea = এক কাপ, নির্দিষ্ট চা the।", en: "Tea from the canteen: 'A tea for me, and the tea he likes — with ginger' — a tea = one cup, the particular tea takes the.", hi: "कैंटीन से चाय: 'A tea for me, and the tea he likes — with ginger' — a tea = एक कप, खास चाय the।" },
            { bn: "বেরোনোর সময় দাদু বলল, 'Doctors say I need rest, but I'm already planning the next trip to the mountains।' — the mountains অনন্য-শ্রেণির ভাব।", en: "On leaving her grandfather said, 'Doctors say I need rest, but I'm already planning the next trip to the mountains.' — the mountains carries the unique-range sense.", hi: "जाते समय दादाजी ने कहा, 'Doctors say I need rest, but I'm already planning the next trip to the mountains।' — the mountains अद्वितीय-श्रेणी का भाव।" },
          ],
          examples: [
            { wrong: "My grandmother is in the hospital. She is a patient.", right: "My grandmother is in hospital. She is a patient.", note: { bn: "রোগী-ভাবে in hospital শূন্য (ব্রিটিশ ইংরেজি); the hospital মানে ভবনটা।", en: "As a patient, in hospital is zero (British English); the hospital means the building.", hi: "रोगी-भाव में in hospital शून्य (ब्रिटिश अंग्रेज़ी); the hospital अर्थात् भवन।" } },
            { wrong: "I missed a bus this morning.", right: "I missed the bus this morning.", note: { bn: "প্রেক্ষাপটে নির্দিষ্ট বাস (the 9 o'clock bus) → the।", en: "The scene fixes which bus (the 9 o'clock bus) → the.", hi: "प्रसंग में निश्चित बस (the 9 o'clock bus) → the।" } },
            { wrong: "He is happiest man today.", right: "He is the happiest man today.", note: { bn: "superlative কখনো একা থাকে না — the happiest।", en: "A superlative never travels alone — the happiest.", hi: "superlative कभी अकेला नहीं — the happiest।" } },
            { wrong: "We saw the Mount Everest from the plane.", right: "We saw Mount Everest from the plane.", note: { bn: "একক পর্বত-নাম শূন্য; শ্রেণি the — the Himalayas।", en: "A single peak takes zero; the range takes the — the Himalayas.", hi: "अकेली चोटी शून्य; श्रेणी the — the Himalayas।" } },
          ],
        },
        {
          heading: {
            bn: "🧾 এক নজরে — পুরো পাঠ পাঁচ ভাগে",
            en: "🧾 At a glance — the whole lesson in five parts",
            hi: "🧾 एक नज़र में — पूरा पाठ पाँच भागों में",
          },
          lead: {
            bn: "স্ক্রল শেষে পুরো পাঠটা পাঁচ লাইনে চোখে বসিয়ে নিন।",
            en: "Before you leave, take in the whole lesson in five lines.",
            hi: "जाने से पहले पूरा पाठ पाँच पंक्तियों में आँखों में बिठा लीजिए।",
          },
          points: [
            { bn: "**তিন প্রশ্নের ফানেল** — গোনা যায়? শ্রোতা জানে? সাধারণ ভাব?", en: "**The three-question funnel** — countable? Does the listener know which? Generic sense?", hi: "**तीन-सवाल फ़नल** — गिने जाते हैं? सुनने वाला जानता है? सामान्य भाव?" },
            { bn: "the-ডাকা: দ্বিতীয় উল্লেখ, superlative/ordinal/only/same, অনন্য (the sun), of-বাক্যাংশ।", en: "What calls the: second mention, superlative/ordinal/only/same, unique things (the sun), of-phrases.", hi: "the के संकेत: दूसरा उल्लेख, superlative/ordinal/only/same, अद्वितीय (the sun), of-वाक्यांश।" },
            { bn: "শূন্যের রাজ্য: প্রতিষ্ঠান (go to school, in hospital), খাবার, ভাষা, সাধারণ বহুবচন-অগণন, by bus/on TV/at university/in bed।", en: "The zero kingdom: institutions (go to school, in hospital), meals, languages, general plurals/uncountables, by bus/on TV/at university/in bed.", hi: "शून्य का साम्राज्य: संस्थाएँ (go to school, in hospital), भोजन, भाषाएँ, सामान्य बहुवचन-अगणन, by bus/on TV/at university/in bed।" },
            { bn: "অগণনে মোড়ক: a coffee = এক কাপ, a good knowledge of English, some advice; বিশেষণ জুড়লে বিমূর্তও a নেয়।", en: "Uncountable wrappers: a coffee = one cup, a good knowledge of English, some advice; with an adjective even abstracts take a.", hi: "अगणन के मोड़क: a coffee = एक कप, a good knowledge of English, some advice; विशेषण जुड़े तो भाववाचक भी a लेते हैं।" },
            { bn: "প্রজাতি-সাধারণী: The tiger is endangered = Tigers are endangered; যন্ত্রে the guitar, খেলায় শূন্য।", en: "Species-generic: The tiger is endangered = Tigers are endangered; instruments take the guitar, games take zero.", hi: "प्रजाति-सामान्य: The tiger is endangered = Tigers are endangered; वाद्य the guitar, खेल शून्य।" },
          ],
          examples: [],
        },
      ],
      tips: [
        { bn: "তিন প্রশ্নের ফানেল: singular countable → a/an/the (শূন্য নয়); শ্রোতা জানে → the; সাধারণ বহুবচন/অগণন → শূন্য।", en: "The three-question funnel: singular countable → a/an/the (never zero); the listener knows which → the; generic plural/uncountable → zero.", hi: "तीन-सवाल फ़नल: singular countable → a/an/the (शून्य नहीं); सुनने वाला जानता है → the; सामान्य बहुवचन/अगणन → शून्य।" },
        { bn: "a/an ধ্বনির নিয়ম: an hour, an honest man, an M.A., an X-ray; a university, a European, a one-eyed man — বানান নয়, প্রথম ধ্বনি।", en: "The a/an sound rule: an hour, an honest man, an M.A., an X-ray; a university, a European, a one-eyed man — the first sound, not the spelling.", hi: "a/an ध्वनि-नियम: an hour, an honest man, an M.A., an X-ray; a university, a European, a one-eyed man — वर्तनी नहीं, पहली ध्वनि।" },
        { bn: "the-ডাকা সংকেত: দ্বিতীয় উল্লেখ, superlative/ordinal/only/same, অনন্য (the sun, the sea), of-বাক্যাংশ (the roof of the house)।", en: "Signals for the: second mention, superlative/ordinal/only/same, unique things (the sun, the sea), of-phrases (the roof of the house).", hi: "the के संकेत: दूसरा उल्लेख, superlative/ordinal/only/same, अद्वितीय (the sun, the sea), of-वाक्यांश (the roof of the house)।" },
        { bn: "এক noun-phrase-এ একটাই determiner — the my book নয়; the book বা my book।", en: "One noun phrase, one determiner — not the my book; either the book or my book.", hi: "एक noun-phrase में एक determiner — the my book नहीं; the book या my book।" },
        { bn: "প্রতিষ্ঠান-জোড়া মুখস্থ: go to school / be in hospital / go to bed / go to prison / at university — উদ্দেশ্য-ভাবে শূন্য; ভবন-বস্তুতে the।", en: "Keep the institution pairs: go to school / be in hospital / go to bed / go to prison / at university — zero in the purpose sense; the for the building/object.", hi: "संस्था-जोड़े कंठस्थ: go to school / be in hospital / go to bed / go to prison / at university — उद्देश्य-भाव में शून्य; भवन-वस्तु में the।" },
        { bn: "খাবার শূন্য: have breakfast/lunch/dinner; বর্ণনা জুড়লে a — a big breakfast, a lovely dinner।", en: "Meals take zero: have breakfast/lunch/dinner; with a description, a returns — a big breakfast, a lovely dinner.", hi: "भोजन शून्य: have breakfast/lunch/dinner; विशेषण जुड़े तो a — a big breakfast, a lovely dinner।" },
        { bn: "অগণনে মোড়ক: a coffee = এক কাপ, a glass of water, a piece of advice, some information; সরাসরি a/an বসে না।", en: "Uncountable wrappers: a coffee = one cup, a glass of water, a piece of advice, some information; bare a/an never sits.", hi: "अगणन के मोड़क: a coffee = एक कप, a glass of water, a piece of advice, some information; सीधा a/an नहीं बैठता।" },
        { bn: "বিশেষণ জুড়লে বিমূর্তও a নেয়: a good knowledge of English, a deep sleep, a heavy rain, a great time।", en: "With an adjective, even abstracts take a: a good knowledge of English, a deep sleep, a heavy rain, a great time.", hi: "विशेषण जुड़े तो भाववाचक भी a लेते हैं: a good knowledge of English, a deep sleep, a heavy rain, a great time।" },
        { bn: "প্রজাতি-সাধারণী: The tiger is endangered = Tigers are endangered; 'A tiger is endangered' দুর্বল শোনায়।", en: "Species-generic: The tiger is endangered = Tigers are endangered; 'A tiger is endangered' sounds weak.", hi: "प्रजाति-सामान्य: The tiger is endangered = Tigers are endangered; 'A tiger is endangered' कमज़ोर लगेगा।" },
        { bn: "যন্ত্রে the, খেলায় শূন্য: She plays the guitar / She plays football; আর নামের নিয়ম — Dhaka শূন্য, কিন্তু the Padma, the Himalayas।", en: "Instruments take the, games take zero: She plays the guitar / She plays football; and names — Dhaka zero, but the Padma, the Himalayas.", hi: "वाद्य the, खेल शून्य: She plays the guitar / She plays football; नामों का नियम — Dhaka शून्य, पर the Padma, the Himalayas।" },
      ],
      quiz: [
        { question: "She is ___ honest woman.", options: ["a", "an", "the", "— (nothing)"], answer: 1, explanation: { bn: "honest-এ h নীরব — প্রথম ধ্বনি স্বর → an।", en: "The h in honest is silent — the first sound is a vowel → an.", hi: "honest में h मौन — पहली ध्वनि स्वर → an।" } },
        { question: "I bought ___ shirt yesterday. ___ shirt is blue.", options: ["a, The", "the, A", "a, A", "the, The"], answer: 0, explanation: { bn: "প্রথম উল্লেখ a, দ্বিতীয় উল্লেখ the — দ্বিতীয় উল্লেখে the-এর শক্তি।", en: "First mention a, second mention the — the power of the second mention.", hi: "पहला उल्लेख a, दूसरा the — दूसरे उल्लेख की शक्ति।" } },
        { question: "Which sentence is natural for a species announcement?", options: ["The tiger is endangered.", "A tiger is endangered.", "Tiger is endangered.", "The tigers is endangered."], answer: 0, explanation: { bn: "প্রজাতি-সাধারণী ঘোষণায় the + একবচন; 'Tigers are endangered'-ও চলে, 'A tiger...' দুর্বল।", en: "A species announcement takes the + singular; 'Tigers are endangered' also works, 'A tiger...' is weak.", hi: "प्रजाति-घोषणा में the + एकवचन; 'Tigers are endangered' भी चलेगा, 'A tiger...' कमज़ोर।" } },
        { question: "My son goes to ___ school by bus.", options: ["a", "the", "— (nothing)", "an"], answer: 2, explanation: { bn: "ছাত্র হয়ে পড়তে যাওয়া = প্রতিষ্ঠান-ভাব → শূন্য।", en: "Attending as a pupil = the institution sense → zero.", hi: "छात्र बनकर पढ़ने जाना = संस्था-भाव → शून्य।" } },
        { question: "We had ___ lovely dinner at Rina's.", options: ["a", "the", "— (nothing)", "an"], answer: 0, explanation: { bn: "বিশেষণসহ খাবার a নেয় — a lovely dinner; সাধারণ have dinner শূন্য।", en: "A described meal takes a — a lovely dinner; plain have dinner is zero.", hi: "विशेषण वाला भोजन a लेता है — a lovely dinner; सादा have dinner शून्य।" } },
        { question: "She gave me ___ useful advice.", options: ["a", "an", "some", "many"], answer: 2, explanation: { bn: "advice অগণন — a/an নয়, some (বা a piece of) মোড়ক।", en: "advice is uncountable — not a/an but some (or a piece of).", hi: "advice अगणन — a/an नहीं, some (या a piece of)।" } },
        { question: "He plays ___ guitar but not ___ chess.", options: ["the, the", "the, — (nothing)", "— (nothing), the", "— (nothing), — (nothing)"], answer: 1, explanation: { bn: "বাদ্যযন্ত্রে the, খেলায় শূন্য — the guitar, কিন্তু chess শূন্য।", en: "Instruments take the, games take zero — the guitar, but chess zero.", hi: "वाद्ययंत्र the, खेल शून्य — the guitar, पर chess शून्य।" } },
        { question: "I saw ___ one-eyed man near the mosque.", options: ["a", "an", "the", "— (nothing)"], answer: 0, explanation: { bn: "one = 'ওয়ান' — ব্যঞ্জনধ্বনি দিয়ে শুরু → a।", en: "one starts with the 'wun' sound — a consonant sound → a.", hi: "one = 'वन' — व्यंजन ध्वनि से शुरू → a।" } },
        { question: "___ Himalayas are in ___ Asia.", options: ["The, — (nothing)", "— (nothing), the", "The, the", "— (nothing), — (nothing)"], answer: 0, explanation: { bn: "পর্বতশ্রেণি the নেয় — the Himalayas; মহাদেশের নাম শূন্য — Asia।", en: "Mountain ranges take the — the Himalayas; continents take zero — Asia.", hi: "पर्वत श्रेणी the लेती है — the Himalayas; महाद्वीप शून्य — Asia।" } },
        { question: "My uncle is ___ university teacher.", options: ["an", "a", "the", "— (nothing)"], answer: 1, explanation: { bn: "university 'ইউ'-ধ্বনিতে শুরু — ব্যঞ্জনধ্বনি → a।", en: "university starts with the 'yu' sound — a consonant sound → a.", hi: "university 'यू'-ध्वनि से शुरू — व्यंजन ध्वनि → a।" } },
      ],
    },
  },
];

export default SEED_GRAMMAR_V4_I3;
