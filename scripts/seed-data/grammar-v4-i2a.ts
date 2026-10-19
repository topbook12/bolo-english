// ─── Grammar seeds v4: INTERMEDIATE batch I2A (2 lessons) ───
// Task 10-C22 — point-form roadmap upgrade. Source: grammar-v3-i2.ts →
// "Modals (can/should/must)" (sortOrder 20) + "Phrasal Verbs" (sortOrder 21).
// Modals: modal-meaning matrix table (modal | অর্থ/কাজ | উদাহরণ) +
// mustn't vs don't have to comparison table. Phrasal Verbs: separable vs
// inseparable comparison table + high-frequency phrasal table + register table.
// title/intro/tips/quiz/examples copied UNCHANGED from the v3 source; body
// paragraphs converted to roadmap + lead + points per the v4 spec.
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_I2A: SeedGrammarV4Entry[] = [
  /* ── 1. Modals (can/should/must) ───────────────────────────────────── */
  {
    topic: "Modals (can/should/must)",
    level: "intermediate",
    title: "Modals can/should/must (Intermediate)",
    unit: 0,
    sortOrder: 20,
    data: {
      title: {
        bn: "মোডাল অক্সিলিয়ারি: can, should, must (মধ্যম স্তর)",
        en: "Modals can/should/must (Intermediate)",
        hi: "मोडल ऑक्सिलियरी: can, should, must (मध्यम स्तर)",
      },
      intro: {
        bn: "can, should, must — এই তিনটা ছোট শব্দ বাক্যের পুরো মেজাজ বদলে দেয়: সামর্থ্য, অনুমতি, পরামর্শ, বাধ্যবাধকতা, এমনকি অনুমানও। এই পাঠে ঢোকার আগে present simple, past simple আর মৌলিক প্রশ্ন-নেগেটিভ গঠন (beginner স্তরের Ability, Simple Past ও Simple Future পাঠগুলো) পরিষ্কার থাকা দরকার — নইলে মোডালের নিয়মগুলো ভেসে যাবে। এখানে আমরা বাধ্যবাধকতার সিঁড়ি (must > have to > should), mustn't আর don't have to-র কাটাকাটি, অতীতের আফসোস (should have + V3), অনুমানের মোডাল (must have / can't have), সেমি-মোডাল (have to, need to, ought to) আর ভদ্রতার সিঁড়ি (Can I...? Could I...? Would you mind...?) — সব ধাপে ধাপে, উদাহরণে উদাহরণে শিখব।",
        en: "can, should and must are small words that change the whole mood of a sentence: ability, permission, advice, obligation — even deduction. Before entering this lesson, make sure your present simple, past simple and basic question/negative forms are solid (the beginner lessons on Ability, Simple Past and Simple Future) — otherwise these modal rules will not stick. Here we climb the obligation ladder (must > have to > should), untangle mustn't vs don't have to, express past regret with should have + V3, make deductions with must have / can't have, handle the semi-modals (have to, need to, ought to) and climb the politeness ladder (Can I...? Could I...? Would you mind...?) — step by step, example by example.",
        hi: "can, should, must — ये तीन छोटे शब्द वाक्य का पूरा मिज़ाज बदल देते हैं: क्षमता, अनुमति, सलाह, बाध्यता, यहाँ तक कि अनुमान भी। इस पाठ से पहले present simple, past simple और मूल प्रश्न-नकारात्मक रूप (beginner स्तर के Ability, Simple Past और Simple Future पाठ) स्पष्ट होने चाहिए — वरना मोडल के नियम तैर जाएँगे। यहाँ हम बाध्यता की सीढ़ी (must > have to > should), mustn't बनाम don't have to का फर्क, अतीत का पछतावा (should have + V3), अनुमान के मोडल (must have / can't have), सेमी-मोडल (have to, need to, ought to) और विनम्रता की सीढ़ी (Can I...? Could I...? Would you mind...?) — सब क्रमशः सीखेंगे।",
      },
      roadmap: [
        { bn: "📊 মোডালের চার কাজ ও বাধ্যবাধকতার সিঁড়ি — ম্যাট্রিক্সে এক নজরে", en: "📊 The four jobs of modals and the obligation ladder — one glance", hi: "📊 मोडल के चार काम और बाध्यता की सीढ़ी — एक नज़र में" },
        { bn: "🏗️ মোডালের পরে base verb — to, -s, -ing, do সব নিষিদ্ধ", en: "🏗️ Base verb after a modal — no to, -s, -ing or do", hi: "🏗️ मोडल के बाद base verb — to, -s, -ing, do सब वर्जित" },
        { bn: "🚦 মোডাল বাছাইয়ের তিন প্রশ্ন — নিয়ম? নিষেধ? অতীত?", en: "🚦 Three questions to pick the modal — rule? ban? past?", hi: "🚦 मोडल चुनने के तीन सवाल — नियम? निषेध? अतीत?" },
        { bn: "⛔ mustn't বনাম don't have to — নিষেধ আর দরকার-নেই-র ফারাক", en: "⛔ mustn't vs don't have to — prohibition or no need", hi: "⛔ mustn't बनाम don't have to — निषेध बनाम ज़रूरी नहीं" },
        { bn: "🔁 অতীতের আফসোস ও অনুমান — should have / must have + V3", en: "🔁 Past regret and deduction — should have / must have + V3", hi: "🔁 अतीत का पछतावा और अनुमान — should have / must have + V3" },
        { bn: "🧩 সেমি-মোডাল — have to, need to, ought to ও must-এর সীমা", en: "🧩 Semi-modals — have to, need to, ought to and must's limits", hi: "🧩 सेमी-मोडल — have to, need to, ought to और must की सीमा" },
        { bn: "⚠️ বাঙালি শিক্ষার্থীদের চেনা ভুল — can to, must to, সব জায়গায় must", en: "⚠️ Familiar Bengali-speaker errors — can to, must to, must everywhere", hi: "⚠️ बांग्लाभाषी छात्रों की जानी गलतियाँ — can to, must to, हर जगह must" },
        { bn: "📖 রুমির পাঁচ মিনিটে পাঁচ মোডাল — পুরো পাঠ গল্পে", en: "📖 Five modals in Rumi's five minutes — the lesson as a story", hi: "📖 रुमी के पाँच मिनट में पाँच मोडल — पाठ एक कहानी में" },
      ],
      sections: [
        {
          heading: {
            bn: "📊 কখন ব্যবহার হয় — মোডালের চার কাজ ও বাধ্যবাধকতার সিঁড়ি",
            en: "📊 When to use them — the four jobs of modals and the obligation ladder",
            hi: "📊 कब इस्तेमाल होते हैं — मोडल के चार काम और बाध्यता की सीढ़ी",
          },
          lead: {
            bn: "মোডাল মূল ক্রিয়ার মেজাজ বদলায় — সামর্থ্য, অনুমতি, পরামর্শ, বাধ্যবাধকতা, এমনকি অনুমানও।",
            en: "Modals change the mood of the main verb — ability, permission, advice, obligation, even deduction.",
            hi: "मोडल मुख्य क्रिया का मिज़ाज बदलते हैं — क्षमता, अनुमति, सलाह, बाध्यता, यहाँ तक अनुमान भी।",
          },
          points: [
            { bn: "**মোডাল** = মূল ক্রিয়ার আগে বসা সাহায্যকারী ক্রিয়া — বক্তার মনোভাব যোগ করে।", en: "**A modal** is a helping verb that sits before the main verb — it adds the speaker's attitude.", hi: "**मोडल** = मुख्य क्रिया से पहले बैठने वाली सहायक क्रिया — बोलने वाले का दृष्टिकोण जोड़ती है।" },
            { bn: "**সামর্থ্য** — can (বর্তমান), could (অতীত): I can drive, I could swim when I was five।", en: "**Ability** — can (present), could (past): I can drive, I could swim when I was five.", hi: "**क्षमता** — can (वर्तमान), could (अतीत): I can drive, I could swim when I was five।" },
            { bn: "**অনুমতি** — Can I...? / Could I...? / May I...?", en: "**Permission** — Can I...? / Could I...? / May I...?", hi: "**अनुमति** — Can I...? / Could I...? / May I...?" },
            { bn: "**পরামর্শ-উপদেশ** — should, ought to।", en: "**Advice** — should, ought to.", hi: "**सलाह** — should, ought to।" },
            { bn: "**বাধ্যবাধকতা ও নিষেধ** — must, have to, mustn't।", en: "**Obligation and prohibition** — must, have to, mustn't.", hi: "**बाध्यता और निषेध** — must, have to, mustn't।" },
            { bn: "অনুমানেও মোডাল চলে: The lights are on — they must be home (নিশ্চয়ই বাড়িতে আছে)।", en: "Modals also express deduction: The lights are on — they must be home.", hi: "अनुमान में भी मोडल चलते हैं: The lights are on — they must be home (पक्का घर पर हैं)।" },
            { bn: "একই ঘটনা, মোডাল বদলালে বক্তার দৃষ্টিভঙ্গি বদলে যায় — এটাই মোডালের আসল শক্তি।", en: "Same event, but change the modal and the speaker's stance changes — that is the real power of modals.", hi: "वही घटना, मोडल बदलते ही बोलने वाले का रुख़ बदल जाता है — यही मोडल की असली ताकत है।" },
          ],
          table: {
            head: [
              { bn: "মোডাল", en: "Modal", hi: "मोडल" },
              { bn: "অর্থ/কাজ", en: "Meaning / job", hi: "अर्थ/काम" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [{ bn: "can", en: "can", hi: "can" }, { bn: "সামর্থ্য (বর্তমান)", en: "ability (present)", hi: "क्षमता (वर्तमान)" }, { bn: "I can drive", en: "I can drive", hi: "I can drive" }],
              [{ bn: "could", en: "could", hi: "could" }, { bn: "সামর্থ্য (অতীত)", en: "ability (past)", hi: "क्षमता (अतीत)" }, { bn: "I could swim when I was five", en: "I could swim when I was five", hi: "I could swim when I was five" }],
              [{ bn: "Can I...? / Could I...? / May I...?", en: "Can I...? / Could I...? / May I...?", hi: "Can I...? / Could I...? / May I...?" }, { bn: "অনুমতি চাওয়া", en: "asking permission", hi: "अनुमति माँगना" }, { bn: "May I come in?", en: "May I come in?", hi: "May I come in?" }],
              [{ bn: "should / ought to", en: "should / ought to", hi: "should / ought to" }, { bn: "পরামর্শ", en: "advice", hi: "सलाह" }, { bn: "You should rest", en: "You should rest", hi: "You should rest" }],
              [{ bn: "must / have to", en: "must / have to", hi: "must / have to" }, { bn: "বাধ্যবাধকতা", en: "obligation", hi: "बाध्यता" }, { bn: "I have to go now", en: "I have to go now", hi: "I have to go now" }],
              [{ bn: "mustn't", en: "mustn't", hi: "mustn't" }, { bn: "নিষেধ", en: "prohibition", hi: "निषेध" }, { bn: "You mustn't smoke here", en: "You mustn't smoke here", hi: "You mustn't smoke here" }],
              [{ bn: "must", en: "must", hi: "must" }, { bn: "নিশ্চিত অনুমান", en: "confident deduction", hi: "पक्का अनुमान" }, { bn: "They must be home", en: "They must be home", hi: "They must be home" }],
            ],
          },
          examples: [
            { wrong: "At the airport you should show your passport at the gate.", right: "At the airport you must show your passport at the gate.", note: { bn: "এয়ারপোর্টের নিয়ম — মানতেই হবে; এ ধরনের কঠোর নিয়মে should খুব দুর্বল শোনায়, must বা have to চাই।", en: "An airport rule is a hard obligation; should sounds far too soft — use must or have to.", hi: "एयरपोर्ट का नियम कठोर बाध्यता है; should बहुत कोमल लगेगा — must या have to कहें।" } },
            { wrong: "You must eat more vegetables and sleep early, my son.", right: "You should eat more vegetables and sleep early, my son.", note: { bn: "মায়ের স্নেহভরা উপদেশ — must বললে হুকুম-আরবি শোনায়; পরামর্শের মেজাজে should।", en: "A mother's caring advice — 'must' sounds like an order; the advisory mood needs 'should'.", hi: "माँ की स्नेहभरी सलाह — must कहने पर आदेश लगेगा; सलाह के लिए should।" } },
            { wrong: "I can swim when I was five years old.", right: "I could swim when I was five years old.", note: { bn: "অতীতের সামর্থ্য → could; can শুধু বর্তমান বা সাধারণ সত্যে চলে।", en: "Past ability takes 'could'; 'can' stays in the present.", hi: "अतीत की क्षमता के लिए could; can केवल वर्तमान में चलता है।" } },
            { wrong: "The lights are on, so they mustn't be home.", right: "The lights are on, so they must be home.", note: { bn: "নিশ্চিত অনুমানে must — mustn't মানে নিষেধ; অনুমানের অস্বীকার করতে can't বসে, এটা পরের অংশে আবার আসবে।", en: "Confident deduction takes 'must'; 'mustn't' means prohibition — the negative of deduction is 'can't'.", hi: "पक्के अनुमान के लिए must; mustn't का अर्थ निषेध — अनुमान का नकारात्मक रूप can't है।" } },
          ],
        },
        {
          heading: {
            bn: "🏗️ গঠন — মোডালের পরে কী বসে, কী বসে না",
            en: "🏗️ Formation — what follows a modal and what never does",
            hi: "🏗️ गठन — मोडल के बाद क्या आता है, क्या कभी नहीं",
          },
          lead: {
            bn: "মোডালের সাথে ইংরেজির অন্য নিয়ম চলে না — তিনটে নিষেধ মনে রাখলেই অর্ধেক ভুল বন্ধ।",
            en: "Modals follow their own rules — three bans and half your mistakes disappear.",
            hi: "मोडल के साथ अंग्रेज़ी के आम नियम नहीं चलते — तीन मनाही याद रखें, आधी गलतियाँ रुक जाएँगी।",
          },
          points: [
            { bn: "**মোডালের পরে verb-এর base রূপ** — to নয়, -ing নয়: can swim, should go, must leave।", en: "**After a modal comes the base verb** — no to, no -ing: can swim, should go, must leave.", hi: "**मोडल के बाद verb का base रूप** — to नहीं, -ing नहीं: can swim, should go, must leave।" },
            { bn: "**মোডালে কোনো -s যোগ হয় না** — he can, she must; কর্তা যা-ই হোক।", en: "**A modal never takes -s** — he can, she must, whatever the subject.", hi: "**मोडल पर कभी -s नहीं लगता** — he can, she must, कर्ता जो भी हो।" },
            { bn: "**প্রশ্ন-নেগেটিভে do/does/did আসে না** — মোডাল নিজেই subject-এর সামনে চলে আসে: Can you help me? You shouldn't worry।", en: "**No do/does/did in questions or negatives** — the modal itself moves in front: Can you help me? You shouldn't worry.", hi: "**प्रश्न-नकारात्मक में do/does/did नहीं** — मोडल खुद subject के सामने आ जाता है: Can you help me? You shouldn't worry।" },
            { bn: "তাই Do you can help me? আর He musts go — দুটোই ইংরেজিতে অসম্ভব বাক্য।", en: "So Do you can help me? and He musts go are both impossible sentences in English.", hi: "इसलिए Do you can help me? और He musts go — दोनों अंग्रेज़ी में असंभव वाक्य।" },
          ],
          formula: {
            bn: "কর্তা + মোডাল + base verb — to নয়, -s নয়, -ing নয়, do নয়",
            en: "subject + modal + base verb — no to, no -s, no -ing, no do",
            hi: "कर्ता + मोडल + base verb — to नहीं, -s नहीं, -ing नहीं, do नहीं",
          },
          examples: [
            { wrong: "Do you can help me with this bag?", right: "Can you help me with this bag?", note: { bn: "প্রশ্নে do আসে না; মোডাল নিজেই subject-এর আগে বসে প্রশ্ন বানায়।", en: "No 'do' in modal questions — the modal itself moves before the subject.", hi: "मोडल प्रश्न में do नहीं आता; मोडल खुद subject से पहले आता है।" } },
            { wrong: "She musts finish the report today.", right: "She must finish the report today.", note: { bn: "মোডালে কখনো -s যোগ হয় না — কর্তা তৃতীয় পুরুষ একবচন হলেও নয়।", en: "A modal never takes -s — not even with a third-person singular subject.", hi: "मोडल पर कभी -s नहीं आता — subject तीसरा पुरुष होने पर भी नहीं।" } },
            { wrong: "You should to see a doctor.", right: "You should see a doctor.", note: { bn: "should/can/must-এর পরে to আসে না; to শুধু ought to আর have to-তে থাকে।", en: "No 'to' after should/can/must; 'to' belongs only to ought to and have to.", hi: "should/can/must के बाद to नहीं; to केवल ought to और have to में रहता है।" } },
            { wrong: "He can plays the guitar.", right: "He can play the guitar.", note: { bn: "মোডালের পরে base verb — play, plays নয়; -s থাকলে দ্বিগুণ ভুল জমে যায়।", en: "After a modal use the base verb — 'play', not 'plays'.", hi: "मोडल के बाद base verb — play, plays नहीं।" } },
          ],
        },
        {
          heading: {
            bn: "🚦 আভাস ও প্যাটার্ন — কোন মোডাল বেছে নেবেন",
            en: "🚦 Cues and patterns — choosing the right modal",
            hi: "🚦 संकेत और पैटर्न — सही मोडल का चुनाव",
          },
          lead: {
            bn: "মুখ খোলার আগে তিনটা প্রশ্ন — উত্তরই ঠিক মোডালটা বেছে দেবে।",
            en: "Three questions before you speak — the answers pick the right modal for you.",
            hi: "बोलने से पहले तीन सवाल — जवाब ही सही मोडल चुन देगा।",
          },
          points: [
            { bn: "**নিয়ম না পরামর্শ?** নিয়ম হলে must/have to; পরামর্শ হলে should।", en: "**A rule or advice?** A rule takes must/have to; advice takes should.", hi: "**नियम या सलाह?** नियम हो तो must/have to; सलाह हो तो should।" },
            { bn: "**নিষেধ না 'দরকার নেই'?** নিষেধ হলে mustn't; দরকার নেই হলে don't have to — এই দুইয়ের ফারাক পরের অংশে বিস্তারিত।", en: "**A prohibition or 'not necessary'?** Prohibition takes mustn't; no need takes don't have to — the difference comes in the next part.", hi: "**निषेध या 'ज़रूरी नहीं'?** निषेध हो तो mustn't; ज़रूरी नहीं हो तो don't have to — फ़र्क़ अगले हिस्से में।" },
            { bn: "**বর্তমান না অতীত?** অতীতে গেলেই মোডাল + have + V3 বসবে: should have gone, must have seen।", en: "**Now or the past?** The past always needs modal + have + V3: should have gone, must have seen.", hi: "**वर्तमान या अतीत?** अतीत में हमेशा मोडल + have + V3: should have gone, must have seen।" },
            { bn: "must-এর অতীত হয় had to — must-এর নিজস্ব past রূপ নেই।", en: "The past of must is had to — must has no past form of its own.", hi: "must का अतीत had to होता है — must का अपना past रूप नहीं।" },
          ],
          formula: {
            bn: "নিয়ম? → must/have to · পরামর্শ? → should · নিষেধ? → mustn't · দরকার নেই? → don't have to",
            en: "rule? → must/have to · advice? → should · ban? → mustn't · no need? → don't have to",
            hi: "नियम? → must/have to · सलाह? → should · निषेध? → mustn't · ज़रूरी नहीं? → don't have to",
          },
          examples: [
            { wrong: "Would you mind to open the window?", right: "Would you mind opening the window?", note: { bn: "Would you mind-এর পরে সবসময় verb + -ing — ভদ্র অনুরোধের সবচেয়ে জনপ্রিয় প্যাটার্নটাই এই।", en: "After 'Would you mind' the verb always takes -ing — the classic polite-request pattern.", hi: "'Would you mind' के बाद हमेशा verb + -ing — सबसे विनम्र अनुरोध का पैटर्न।" } },
            { wrong: "Give me the file.", right: "Could you pass me the file, please?", note: { bn: "ইংরেজিতে সরাসরি হুকুম অভদ্র শোনায়; কাজ করাতে হলে ভদ্র প্রশ্ন — Could/Would you...? please।", en: "A bare command sounds rude in English; requests need polite modal questions — Could/Would you...? please.", hi: "अंग्रेज़ी में सीधा आदेश अशिष्ट लगता है; अनुरोध के लिए Could/Would you...? please कहें।" } },
            { wrong: "I must go home early yesterday.", right: "I had to go home early yesterday.", note: { bn: "must-এর কোনো past রূপ নেই — অতীতের বাধ্যবাধকতা হলে had to।", en: "'Must' has no past form — past obligation takes 'had to'.", hi: "must का कोई past रूप नहीं — अतीत की बाध्यता के लिए had to।" } },
            { wrong: "You should following the rules.", right: "You should follow the rules.", note: { bn: "মোডালের পরে base verb — -ing আসে না (be + -ing আলাদা প্যাটার্ন: You should be following...)।", en: "After a modal use the base verb, not -ing (the -ing only appears in be + -ing: You should be following...).", hi: "मोडल के बाद base verb, -ing नहीं (-ing केवल be + -ing में: You should be following...)।" } },
          ],
        },
        {
          heading: {
            bn: "⛔ mustn't বনাম don't have to — সবচেয়ে বিপজ্জনক ফারাক",
            en: "⛔ mustn't vs don't have to — the most dangerous difference",
            hi: "⛔ mustn't बनाम don't have to — सबसे ख़तरनाक फर्क",
          },
          lead: {
            bn: "এই দুটো বাংলায় একই শোনায়, কিন্তু ইংরেজিতে অর্থ সম্পূর্ণ উল্টো — সাবধান।",
            en: "The two sound identical in Bangla, yet mean opposite things in English — beware.",
            hi: "दोनों बांग्ला-हिंदी में एक जैसे सुनाई देते हैं, पर अंग्रेज़ी में अर्थ उल्टा — सावधान।",
          },
          points: [
            { bn: "**mustn't = নিষেধ** — করবেই না; করা ভুল, বিপজ্জনক বা নিষিদ্ধ।", en: "**mustn't = prohibited** — do NOT do it; it is wrong, dangerous or forbidden.", hi: "**mustn't = निषेध** — करें ही नहीं; यह गलत, ख़तरनाक या मना है।" },
            { bn: "**don't have to = বাধ্য নও** — চাইলে করতে পারেন, কিন্তু প্রয়োজন নেই।", en: "**don't have to = not obliged** — you may do it, but there is no need.", hi: "**don't have to = बाध्य नहीं** — चाहें तो कर सकते हैं, पर ज़रूरत नहीं।" },
            { bn: "বাংলায় দুটোই আমরা এক মুখে 'করতে হবে না' বলে ফেলি — সেখানেই ফাঁদ।", en: "Bengali says both as 'করতে হবে না' (must not / need not) — and that is the trap.", hi: "दोनों को हम 'करना नहीं है' कह देते हैं — यहीं जाल है।" },
            { bn: "You mustn't tell anyone মানে কাউকে বলবেনই না — গোপন রাখুন।", en: "You mustn't tell anyone means keep it secret — tell nobody.", hi: "You mustn't tell anyone का अर्थ किसी को बिल्कुल न बताएँ — गोपनीय रखें।" },
            { bn: "You don't have to tell me মানে বলা জরুরি নয় — চাইলে বলেন।", en: "You don't have to tell me means it is optional — tell me if you like.", hi: "You don't have to tell me का अर्थ बताना ज़रूरी नहीं — चाहें तो बताएँ।" },
          ],
          table: {
            head: [
              { bn: "মোডাল", en: "Modal", hi: "मोडल" },
              { bn: "মানে", en: "Meaning", hi: "अर्थ" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [{ bn: "mustn't", en: "mustn't", hi: "mustn't" }, { bn: "নিষেধ — করবেনই না", en: "prohibited — do NOT do it", hi: "निषेध — करें ही नहीं" }, { bn: "You mustn't touch the live wire", en: "You mustn't touch the live wire", hi: "You mustn't touch the live wire" }],
              [{ bn: "don't have to", en: "don't have to", hi: "don't have to" }, { bn: "দরকার নেই — চাইলে করুন", en: "no need — do it if you like", hi: "ज़रूरी नहीं — चाहें तो करें" }, { bn: "You don't have to pay", en: "You don't have to pay", hi: "You don't have to pay" }],
            ],
          },
          examples: [
            { wrong: "This wire is live — you don't have to touch it!", right: "This wire is live — you mustn't touch it!", note: { bn: "জীবন-মরণ নিষেধ → mustn't; don't have to বললে শুনে মনে হবে ছোঁয়া ঐচ্ছিক!", en: "A life-or-death ban takes mustn't; 'don't have to' would make touching sound optional!", hi: "जान-माल का निषेध → mustn't; don't have to कहने पर छूना वैकल्पिक लगेगा!" } },
            { wrong: "Tomorrow is a holiday, so you mustn't come to the office.", right: "Tomorrow is a holiday, so you don't have to come to the office.", note: { bn: "আসা জরুরি নয় — নিষেধ নয়; তাই don't have to।", en: "Coming is not required — it is not forbidden — so don't have to.", hi: "आना ज़रूरी नहीं — निषेध नहीं; इसलिए don't have to।" } },
            { wrong: "The course is free, so you mustn't pay anything.", right: "The course is free, so you don't have to pay anything.", note: { bn: "'দেওয়ার দরকার নেই' — don't have to; mustn't বললে অর্থ দাঁড়ায় 'টাকা দেওয়া নিষিদ্ধ'।", en: "Paying is unnecessary, not banned — don't have to; mustn't would mean payment is forbidden.", hi: "देना ज़रूरी नहीं, मना नहीं — don't have to; mustn't कहने पर भुगतान वर्जित लगेगा।" } },
            { wrong: "Students don't have to cheat in the exam.", right: "Students mustn't cheat in the exam.", note: { bn: "প্রতারণা নিষিদ্ধ — mustn't; don't have to বললে মজা হয়ে যায়: চাইলে কপি করতে পারো!", en: "Cheating is forbidden — mustn't; 'don't have to' comically makes cheating optional!", hi: "नकल वर्जित है — mustn't; don't have to कहने पर नकल वैकल्पिक लग जाएगी!" } },
          ],
        },
        {
          heading: {
            bn: "🔁 অতীতের আফসোস ও অনুমান — should have / must have / can't have + V3",
            en: "🔁 Past regret and deduction — should have / must have / can't have + V3",
            hi: "🔁 अतीत का पछतावा और अनुमान — should have / must have / can't have + V3",
          },
          lead: {
            bn: "অতীতের কথায় শুধু মোডাল চলে না — have + V3 জুড়ে নিতেই হয়।",
            en: "For the past, a bare modal is not enough — you must add have + V3.",
            hi: "अतीत की बात में केवल मोडल काफ़ी नहीं — have + V3 जुड़ना ही ज़रूरी है।",
          },
          points: [
            { bn: "**should have + V3** (তৃতীয় রূপ) — অতীতে যা হওয়া উচিত ছিল কিন্তু হয়নি; আফসোস বা দোষারোপ: You should have called me।", en: "**should have + V3** (past participle) — what should have happened in the past but did not; regret or blame: You should have called me.", hi: "**should have + V3** (तीसरा रूप) — अतीत में जो होना चाहिए था पर नहीं हुआ; पछतावा या दोषारोपण: You should have called me।" },
            { bn: "**shouldn't have + V3** — উল্টোটা: অতীতে যা করে ফেলেছি তার আফসোস: I shouldn't have said that।", en: "**shouldn't have + V3** — the opposite: regret over something you did do: I shouldn't have said that.", hi: "**shouldn't have + V3** — इसका उल्टा: जो किया उसका पछतावा: I shouldn't have said that।" },
            { bn: "বাংলায় 'উচিত ছিল' অতীতের কাজে বললে ইংরেজিতে শুধু should নয় — should have + V3 লাগবেই।", en: "Bengali 'উচিত ছিল' about a past action needs should have + V3 in English, not bare should.", hi: "हिंदी-बांग्ला का 'चाहिए था' अतीत के काम पर should have + V3 चाहता है, केवल should नहीं।" },
            { bn: "একই সূত্রে অনুমানও — must have + V3 (নিশ্চিত অনুমান), can't have + V3 (অসম্ভব)।", en: "The same formula works for deduction — must have + V3 (confident guess), can't have + V3 (impossible).", hi: "यही सूत्र अनुमान में भी — must have + V3 (पक्का अनुमान), can't have + V3 (असंभव)।" },
          ],
          formula: {
            bn: "কর্তা + should/must/can't + have + V3 — অতীতের আফসোস ও অনুমান",
            en: "subject + should/must/can't + have + V3 — past regret and deduction",
            hi: "कर्ता + should/must/can't + have + V3 — अतीत का पछतावा और अनुमान",
          },
          examples: [
            { wrong: "You should call me yesterday — I waited all day.", right: "You should have called me yesterday — I waited all day.", note: { bn: "অতীতের আফসোসে should + have + V3; yesterday দেখামাত্র এই প্যাটার্ন মনে করুন।", en: "Past regret takes should + have + V3; 'yesterday' is the trigger word.", hi: "अतीत के पछतावे में should + have + V3; 'yesterday' देखते ही यह पैटर्न याद करें।" } },
            { wrong: "The ground is wet, so it must rained last night.", right: "The ground is wet, so it must have rained last night.", note: { bn: "অতীত সম্পর্কে অনুমানে must-এর পরে have + V3 — 'must rained' অসম্ভব গঠন।", en: "Past deduction needs must + have + V3 — 'must rained' is impossible.", hi: "अतीत के अनुमान में must + have + V3 — 'must rained' असंभव है।" } },
            { wrong: "She can't have finish the project so fast.", right: "She can't have finished the project so fast.", note: { bn: "can't have-এর পরেও V3 — finish নয়, finished।", en: "After can't have comes V3 — 'finished', not 'finish'.", hi: "can't have के बाद भी V3 — finish नहीं, finished।" } },
            { wrong: "His car isn't here — he mustn't be at home.", right: "His car isn't here — he can't be at home.", note: { bn: "অনুমানের অস্বীকার কখনো mustn't নয় — can't; mustn't মানে নিষেধ।", en: "The negative of deduction is never mustn't — it is can't; mustn't means prohibition.", hi: "अनुमान का नकारात्मक कभी mustn't नहीं — can't है; mustn't का अर्थ निषेध।" } },
          ],
        },
        {
          heading: {
            bn: "🧩 সেমি-মোডাল: have to, need to, ought to",
            en: "🧩 Semi-modals: have to, need to, ought to",
            hi: "🧩 सेमी-मोडल: have to, need to, ought to",
          },
          lead: {
            bn: "must সব জায়গায় ধরে না — past, future, প্রশ্নে সেমি-মোডালই আসল নায়ক।",
            en: "must cannot do every job — for past, future and questions the semi-modals take over.",
            hi: "must हर जगह काम नहीं आता — past, future, प्रश्न में सेमी-मोडल ही हीरो हैं।",
          },
          points: [
            { bn: "**have to** হলো 'বাইরের নিয়মের' মোডাল — বসের নির্দেশ, স্কুলের রুল, ট্রেনের সময়সূচি।", en: "**have to** is the modal of external rules — the boss's order, the school rule, the timetable.", hi: "**have to** बाहरी नियमों का मोडल है — बॉस का आदेश, स्कूल का नियम, समय-सारणी।" },
            { bn: "**I must stop smoking** — সিদ্ধান্ত আমার নিজের, ভেতর থেকে।", en: "**I must stop smoking** — my own inner decision.", hi: "**I must stop smoking** — निर्णय मेरा अपना, भीतर से।" },
            { bn: "**I have to stop smoking** — ডাক্তার বলেছেন, চাপ বাইরে থেকে।", en: "**I have to stop smoking** — the doctor says so, the pressure is external.", hi: "**I have to stop smoking** — डॉक्टर ने कहा है, दबाव बाहर से।" },
            { bn: "must-এর কোনো বিশেষ সুবিধা নেই — past, future, question সব have to দিয়েই হয়।", en: "must has no special powers — its past, future and questions all go through have to.", hi: "must के पास कोई विशेषाधिकार नहीं — इसका past, future, प्रश्न सब have to से होते हैं।" },
            { bn: "অর্থাৎ had to (অতীত), will have to (ভবিষ্যৎ), Do you have to...? (প্রশ্ন)।", en: "That is: had to (past), will have to (future), Do you have to...? (question).", hi: "यानी had to (अतीत), will have to (भविष्य), Do you have to...? (प्रश्न)।" },
            { bn: "must শুধু বর্তমানে বসে — তাও আনুষ্ঠানিক বা জোরালো অর্থে।", en: "must lives only in the present — in formal or emphatic use.", hi: "must केवल वर्तमान में बैठता है — वह भी औपचारिक या ज़ोरदार अर्थ में।" },
          ],
          formula: {
            bn: "must-এর অতীত/ভবিষ্যৎ/প্রশ্ন = had to / will have to / Do you have to...?",
            en: "must's past/future/question = had to / will have to / Do you have to...?",
            hi: "must का अतीत/भविष्य/प्रश्न = had to / will have to / Do you have to...?",
          },
          examples: [
            { wrong: "Yesterday I must work till ten at night.", right: "Yesterday I had to work till ten at night.", note: { bn: "অতীতে বাধ্যবাধকতা → had to; must-এর past রূপ নেই।", en: "Past obligation takes had to; must has no past form.", hi: "अतीत की बाध्यता → had to; must का past रूप नहीं है।" } },
            { wrong: "He have to submit the form today.", right: "He has to submit the form today.", note: { bn: "have to সাধারণ ক্রিয়ার মতো আচরণ করে — তৃতীয় পুরুষ একবচনে has to।", en: "have to behaves like a normal verb — third-person singular takes has to.", hi: "have to साधारण क्रिया जैसा व्यवहार करता है — तीसरे पुरुष एकवचन में has to।" } },
            { wrong: "You ought apologize to her.", right: "You ought to apologize to her.", note: { bn: "ought-এর পরে to বাধ্যতামূলক — এইটাই একমাত্র 'মোডাল + to'।", en: "'To' after ought is mandatory — this is the only 'modal + to'.", hi: "ought के बाद to अनिवार्य — यही एकमात्र 'मोडल + to' है।" } },
            { wrong: "Do you must wear a uniform at school?", right: "Do you have to wear a uniform at school?", note: { bn: "must-এর সাথে do আসে না; নিয়ম-বাধ্যবাধকতার প্রশ্ন সবসময় have to দিয়ে — Do you have to...?", en: "'Do' never pairs with must; rule-based questions always use have to — Do you have to...?", hi: "must के साथ do नहीं आता; नियम संबंधी प्रश्न हमेशा have to से — Do you have to...?" } },
          ],
        },
        {
          heading: {
            bn: "⚠️ বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "⚠️ Common mistakes by Bengali speakers",
            hi: "⚠️ बांग्लाभाषी विद्यार्थियों की सामान्य गलतियाँ",
          },
          lead: {
            bn: "বাংলার গঠন ইংরেজিতে টেনে আনলে এই ভুলগুলোই হয় — চিনলেই এড়ানো সহজ।",
            en: "Dragging Bangla structures into English produces exactly these errors — spot them and they are easy to avoid.",
            hi: "बांग्ला गठन अंग्रेज़ी में खींचने से यही गलतियाँ होती हैं — पहचानिए, बचना आसान।",
          },
          points: [
            { bn: "**can to, should to, must to** — বাংলার 'করতে পারা', 'করা উচিত', 'করতে হবে' সব কটাতেই infinitive ('করতে') ঢুকে থাকে, তাই শিক্ষার্থীরা স্বয়ংক্রিয়ভাবে এই ভুল করেন।", en: "**can to, should to, must to** — the Bengali patterns 'করতে পারা', 'করা উচিত', 'করতে হবে' all contain an infinitive, so learners produce these automatically.", hi: "**can to, should to, must to** — 'करना', 'चाहिए', 'होगा' पैटर्नों में infinitive छिपा है, इसलिए छात्र यह गलती अपने-आप कर देते हैं।" },
            { bn: "'অবশ্যই' শব্দের অতি-ব্যবহার থেকে সব জায়গায় must চলে আসে — অথচ অপরিচিতের সাথে must দিয়ে অনুরোধ রুক্ষ হুকুম শোনায়।", en: "Overusing the Bengali word for 'certainly' pushes must into every request — but must with a stranger sounds like a harsh order.", hi: "'अवश्य' के अति-उपयोग से हर अनुरोध में must आ जाता है — पर अजनबी से must कहना कठोर आदेश लगता है।" },
            { bn: "সমাধান: অনুরোধে Could/Would you...? — ভদ্র ও স্বাভাবিক।", en: "The fix: requests take Could/Would you...? — polite and natural.", hi: "समाधान: अनुरोध में Could/Would you...? — विनम्र और स्वाभाविक।" },
            { bn: "সমাধান: পরামর্শে should; must রাখুন শুধু কঠোর নিয়ম-আইনের জন্য।", en: "The fix: advice takes should; reserve must for hard rules and laws.", hi: "समाधान: सलाह में should; must रखें केवल कठोर नियम-कानून के लिए।" },
          ],
          examples: [
            { wrong: "I can to speak three languages.", right: "I can speak three languages.", note: { bn: "বাংলার 'করতে পারি'-র 'করতে' টেনে can to ভুল; মোডালের পরে to নেই।", en: "The Bengali infinitive drags 'to' after can; no to follows a modal.", hi: "स्थानीय पैटर्न 'to' को can के बाद खींच लाता है; मोडल के बाद to नहीं।" } },
            { wrong: "You don't must worry about the result.", right: "You mustn't worry about the result.", note: { bn: "don't/doesn't কখনো মোডালের আগে বসে না; মোডালের নিজস্ব নেগেটিভ আছে (অর্থ 'দরকার নেই' হলে don't have to worry)।", en: "don't/doesn't never precedes a modal; modals carry their own negatives (or don't have to worry for 'no need').", hi: "don't/doesn't कभी मोडल से पहले नहीं आता; मोडल का अपना नकारात्मक रूप है (या don't have to worry)।" } },
            { wrong: "It's urgent, so you must help me right now!", right: "Could you please help me? It's urgent.", note: { bn: "অপরিচিতের সাথে must = হুকুম; অনুরোধে Could/Would you please — ভদ্র ও স্বাভাবিক।", en: "must with a stranger = an order; polite requests use Could/Would you please.", hi: "अजनबी के साथ must = आदेश; विनम्र अनुरोध में Could/Would you please।" } },
            { wrong: "He doesn't can drive a car.", right: "He can't drive a car.", note: { bn: "does + can অসম্ভব; can-এর নেগেটিভ can't/cannot।", en: "does + can is impossible; the negative of can is can't/cannot.", hi: "does + can असंभव; can का नकारात्मक can't/cannot है।" } },
            { wrong: "You must to attend the class.", right: "You must attend the class.", note: { bn: "'করতে হবে' অনুবাদে must to ঢুকে পড়ে; must-এর পরে সরাসরি base verb।", en: "'হবে' translations sneak in must to; after must comes the bare base verb.", hi: "'होगा' के अनुवाद में must to घुस जाता है; must के बाद सीधा base verb।" } },
          ],
        },
        {
          heading: {
            bn: "📖 ছোট গল্পে দেখা যাক",
            en: "📖 A short story to see it all",
            hi: "📖 एक छोटी कहानी में सब देखें",
          },
          lead: {
            bn: "রুমির একটা সকাল-সন্ধ্যায়ই পাঠের সব মোডাল — গল্পে গল্পে দেখুন।",
            en: "Rumi's single day carries every modal of the lesson — watch them work in a story.",
            hi: "रुमी के एक ही दिन में पाठ के सारे मोडल — कहानी में देखिए।",
          },
          points: [
            { bn: "রবিবার রাতে রুমি ভাবল, 'I must finish this report tonight — it is my own deadline.' — নিজের সিদ্ধান্ত।", en: "On Sunday night Rumi thought, 'I must finish this report tonight — it is my own deadline.' — his own decision.", hi: "रविवार रात रुमी ने सोचा, 'I must finish this report tonight — it is my own deadline.' — अपना निर्णय।" },
            { bn: "সোমবার সকালে বস বললেন, 'You have to sign this form before noon — it is a company rule.' — বাইরের নিয়ম।", en: "On Monday morning the boss said, 'You have to sign this form before noon — it is a company rule.' — an external rule.", hi: "सोमवार सुबह बॉस ने कहा, 'You have to sign this form before noon — it is a company rule.' — बाहरी नियम।" },
            { bn: "সহকর্মী পরামর্শ দিল, 'You should take a short break; you look tired.'", en: "A colleague advised, 'You should take a short break; you look tired.'", hi: "एक सहकर्मी ने सलाह दी, 'You should take a short break; you look tired.'" },
            { bn: "রুমি হাসল, 'You don't have to worry about me.' — দরকার নেই।", en: "Rumi smiled, 'You don't have to worry about me.' — no need.", hi: "रुमी मुस्कुराया, 'You don't have to worry about me.' — ज़रूरी नहीं।" },
            { bn: "হঠাৎ কিচেনে ধোঁয়া দেখে চিৎকার, 'The stove is on! You mustn't leave it unattended!' — নিষেধ।", en: "Suddenly he saw smoke in the kitchen and shouted, 'The stove is on! You mustn't leave it unattended!' — a ban.", hi: "अचानक रसोई में धुआँ देखकर चिल्लाया, 'The stove is on! You mustn't leave it unattended!' — निषेध।" },
            { bn: "পরে ভাবল, 'Someone must have been cooking and gone out. He can't have heard me from the meeting room.' — অতীতের অনুমান।", en: "Later he thought, 'Someone must have been cooking and gone out. He can't have heard me from the meeting room.' — past deduction.", hi: "बाद में सोचा, 'Someone must have been cooking and gone out. He can't have heard me from the meeting room.' — अतीत का अनुमान।" },
            { bn: "পাঁচ মিনিটেই পাঁচ রকম মোডাল — must, have to, should, don't have to, mustn't, আর must have / can't have!", en: "Five kinds of modal in five minutes — must, have to, should, don't have to, mustn't, plus must have / can't have!", hi: "पाँच मिनट में पाँच तरह के मोडल — must, have to, should, don't have to, mustn't, और must have / can't have!" },
          ],
          examples: [
            { wrong: "Rumi must finished the report last night.", right: "Rumi must have finished the report last night.", note: { bn: "অতীতের কাজ সম্পর্কে অনুমান → must have + V3।", en: "Deduction about a past action → must have + V3.", hi: "अतीत के काम का अनुमान → must have + V3।" } },
            { wrong: "You don't have to leave the stove on!", right: "You mustn't leave the stove on!", note: { bn: "বিপদ-নিষেধ → mustn't; don't have to বললে 'রেখে দেওয়া জরুরি নয়' শোনায়।", en: "A danger ban → mustn't; don't have to would sound like 'leaving it on is optional'.", hi: "ख़तरे का निषेध → mustn't; don't have to कहने पर 'छोड़ना वैकल्पिक' लगेगा।" } },
            { wrong: "The boss said we must to sign the form.", right: "The boss said we have to sign the form.", note: { bn: "বসের নির্দেশ = বাইরের নিয়ম → have to; আর must-এর পরে to আসেই না।", en: "The boss's order = an external rule → have to; and no to ever follows must.", hi: "बॉस का आदेश = बाहरी नियम → have to; और must के बाद to नहीं आता।" } },
            { wrong: "He can't heard me from the meeting room.", right: "He can't have heard me from the meeting room.", note: { bn: "অতীতে শোনার অসম্ভবতা → can't have + V3।", en: "Past impossibility of hearing → can't have + V3.", hi: "अतीत में सुनने की असंभावना → can't have + V3।" } },
          ],
        },
      ],
      tips: [
        { bn: "মোডালের পরে base verb — can go, should go, must go; to নয়, -s নয়, -ing নয়।", en: "After a modal use the base verb — can go, should go, must go; no to, no -s, no -ing.", hi: "मोडल के बाद base verb — can go, should go, must go; to नहीं, -s नहीं, -ing नहीं।" },
        { bn: "প্রশ্ন-নেগেটিভে do আসে না: Can you...?, You mustn't...; একমাত্র ব্যতিক্রম সেমি-মোডাল have to — Do you have to...?", en: "No do in modal questions or negatives: Can you...?, You mustn't...; the only exception is the semi-modal have to — Do you have to...?", hi: "मोडल प्रश्न-नकार में do नहीं: Can you...?, You mustn't...; एकमात्र अपवाद have to — Do you have to...?" },
        { bn: "mustn't = নিষেধ; don't have to = দরকার নেই। সাইনবোর্ডে No smoking = You mustn't smoke here।", en: "mustn't = prohibited; don't have to = not required. A No smoking sign = You mustn't smoke here.", hi: "mustn't = निषेध; don't have to = ज़रूरी नहीं। No smoking का बोर्ड = You mustn't smoke here।" },
        { bn: "অতীতের বাধ্যবাধকতা had to; অতীতের আফসোস should have + V3; অতীত সম্পর্কে অনুমান must have + V3।", en: "Past obligation: had to; past regret: should have + V3; past deduction: must have + V3.", hi: "अतीत की बाध्यता: had to; अतीत का पछतावा: should have + V3; अतीत का अनुमान: must have + V3।" },
        { bn: "অনুমানের অস্বীকার কখনো mustn't নয় — can't be (বর্তমান), can't have + V3 (অতীত)।", en: "Never negate a deduction with mustn't — use can't be (present) or can't have + V3 (past).", hi: "अनुमान का नकारात्मक कभी mustn't नहीं — can't be (वर्तमान), can't have + V3 (अतीत)।" },
        { bn: "ভদ্রতার সিঁড়ি: Can I...? → Could I...? → May I...? → Would you mind + -ing...? — যত উপরে, তত ভদ্র।", en: "Politeness ladder: Can I...? → Could I...? → May I...? → Would you mind + -ing...? — the higher, the politer.", hi: "विनम्रता की सीढ़ी: Can I...? → Could I...? → May I...? → Would you mind + -ing...? — जितना ऊपर, उतना विनम्र।" },
        { bn: "অপরিচিতের সাথে অনুরোধে must নয় — Could/Would you please...?; must রাখুন নিয়ম-আইনের জন্য।", en: "With strangers, request with Could/Would you please...? — reserve must for rules and laws.", hi: "अजनबियों से अनुरोध में must नहीं — Could/Would you please...?; must नियम-कानून के लिए रखें।" },
        { bn: "বাক্য বলার আগে নিজেকে প্রশ্ন করুন: নিয়ম না পরামর্শ? নিয়ম হলে must/have to, পরামর্শ হলে should।", en: "Before speaking ask yourself: rule or advice? Rule → must/have to; advice → should.", hi: "बोलने से पहले पूछें: नियम या सलाह? नियम → must/have to; सलाह → should।" },
        { bn: "প্রতিদিন নিজের দিনের তিনটা বাক্য মোডাল দিয়ে বলুন: I have to..., I should..., I can... — সিঁড়িটা হাতে-কলমে নামুন।", en: "Each day, say three sentences about your own day with modals: I have to..., I should..., I can... — climb the ladder hands-on.", hi: "रोज़ अपने दिन के तीन वाक्य मोडल से बोलें: I have to..., I should..., I can... — सीढ़ी प्रत्यक्ष चढ़ें।" },
      ],
      quiz: [
        { question: "You ___ smoke in the hospital. It's strictly forbidden.", options: ["mustn't", "don't have to", "shouldn't have", "couldn't"], answer: 0, explanation: { bn: "নিষেধ বোঝাতে mustn't — হাসপাতালে ধূমপান নিষিদ্ধ; don't have to মানে হতো 'প্রয়োজন নেই', অর্থ উল্টে যেত।", en: "Prohibition takes mustn't — smoking is forbidden; don't have to would mean it is optional.", hi: "निषेध के लिए mustn't — धूम्रपान वर्जित है; don't have to का अर्थ होता वैकल्पिक।" } },
        { question: "Tomorrow is a holiday, so I ___ get up early.", options: ["mustn't", "don't have to", "must", "can't"], answer: 1, explanation: { bn: "ছুটি = বাধ্যবাধকতা নেই → don't have to; mustn't বললে অর্থ হতো 'সকালে ওঠা নিষেধ'।", en: "A holiday = no obligation → don't have to; mustn't would mean getting up early is forbidden.", hi: "छुट्टी = बाध्यता नहीं → don't have to; mustn't का अर्थ होता जल्दी उठना वर्जित।" } },
        { question: "I can't find my keys anywhere. I ___ them at the office.", options: ["must leave", "must have left", "should leave", "had to leave"], answer: 1, explanation: { bn: "অতীত সম্পর্কে নিশ্চিত অনুমান → must have + V3 (must have left)।", en: "A confident guess about the past → must have + V3 (must have left).", hi: "अतीत के बारे में पक्का अनुमान → must have + V3 (must have left)।" } },
        { question: "You look exhausted. You ___ go to bed early tonight.", options: ["should", "mustn't", "can't", "don't have to"], answer: 0, explanation: { bn: "বন্ধুর পরামর্শ → should; এটা নিয়ম বা নিষেধ নয়।", en: "Friendly advice → should; it is neither a rule nor a ban.", hi: "दोस्त की सलाह → should; यह न नियम है न निषेध।" } },
        { question: "___ you mind opening the window? It's hot in here.", options: ["Would", "Could", "Should", "Must"], answer: 0, explanation: { bn: "Would you mind + -ing — সবচেয়ে ভদ্র অনুরোধ-প্যাটার্ন; mind-এর পরে opening।", en: "Would you mind + -ing is the most polite request pattern — 'opening' after mind.", hi: "Would you mind + -ing — सबसे विनम्र अनुरोध; mind के बाद opening।" } },
        { question: "She ___ swim across the river when she was ten.", options: ["can", "could", "should", "must"], answer: 1, explanation: { bn: "অতীতের সামর্থ্য → could; can শুধু বর্তমানে।", en: "Past ability → could; can stays in the present.", hi: "अतीत की क्षमता → could; can केवल वर्तमान में।" } },
        { question: "Rahim isn't answering his phone. He ___ be at home.", options: ["mustn't", "can't", "shouldn't", "doesn't have to"], answer: 1, explanation: { bn: "অনুমানের অস্বীকার → can't; mustn't মানে নিষেধ, অনুমানের অস্বীকার নয়।", en: "The negative of deduction → can't; mustn't means prohibition, not doubt.", hi: "अनुमान का नकारात्मक → can't; mustn't का अर्थ निषेध, संदेह नहीं।" } },
        { question: "You ___ told me about the meeting — I completely forgot it!", options: ["should have", "mustn't have", "don't have to", "can't have"], answer: 0, explanation: { bn: "অতীতের আফসোস-দোষারোপ → should have + V3 (should have told)।", en: "Past regret/blame → should have + V3 (should have told).", hi: "अतीत का पछतावा/दोष → should have + V3 (should have told)।" } },
        { question: "Which sentence is correct?", options: ["He must to study tonight.", "He musts study tonight.", "He must study tonight.", "He must studying tonight."], answer: 2, explanation: { bn: "মোডালের পরে base verb — to/-s/-ing কোনোটাই নয়: must study।", en: "After a modal comes the base verb — no to, -s or -ing: must study.", hi: "मोडल के बाद base verb — to/-s/-ing कुछ नहीं: must study।" } },
        { question: "In our company, all employees ___ wear ID badges. It's a rule.", options: ["should", "have to", "could", "don't have to"], answer: 1, explanation: { bn: "প্রাতিষ্ঠানিক নিয়ম → have to; should দুর্বল, could অসম্ভব, don't have to উল্টো অর্থ।", en: "An institutional rule → have to; should is too weak, could is impossible, don't have to reverses the meaning.", hi: "संस्थागत नियम → have to; should कमज़ोर, could असंभव, don't have to उल्टा अर्थ।" } },
      ],
    },
  },

  /* ── 2. Phrasal Verbs ──────────────────────────────────────────────── */
  {
    topic: "Phrasal Verbs",
    level: "intermediate",
    title: "Phrasal Verbs (Intermediate)",
    unit: 0,
    sortOrder: 21,
    data: {
      title: {
        bn: "ফ্রেজাল ভার্ব (মধ্যম স্তর)",
        en: "Phrasal Verbs (Intermediate)",
        hi: "फ्रेज़ल वर्ब (मध्यम स्तर)",
      },
      intro: {
        bn: "বাংলাভাষী শিক্ষার্থীরা সাধারণত বড় আনুষ্ঠানিক শব্দ (postpone, discover, arise) মুখস্থ করেন, কিন্তু নেটিভ স্পিকারের দৈনন্দিন কথা ভরা phrasal verb-এ: get up, turn on, put off, look after, run out of। এই পাঠে ঢোকার আগে basic verb + object কাঠামো আর সাধারণ preposition (in, on, at, for, with) জানা থাকা চাই — intermediate স্তরের Linking Words পাঠটাও সাহায্য করবে। এখানে শিখব: separable/inseparable/three-word তিন ধরন, pronoun-এর জায়গা, এক ক্রিয়ার বিভিন্ন particle-পরিবার, রোজকার শীর্ষ জুটিগুলো, আর বাংলার এক-ক্রিয়া ম্যাপিংয়ের ফাঁদ।",
        en: "Bengali-speaking learners usually memorise big formal words (postpone, discover, arise), but native daily talk is full of phrasal verbs: get up, turn on, put off, look after, run out of. Before entering this lesson you need basic verb + object structure and common prepositions (in, on, at, for, with) — the intermediate Linking Words lesson will also help. Here you will learn: the three types (separable / inseparable / three-word), pronoun placement, one-verb particle families, the everyday top pairs, and the trap of Bengali one-verb mapping.",
        hi: "बांग्लाभाषी विद्यार्थी आमतौर पर बड़े औपचारिक शब्द (postpone, discover, arise) रटते हैं, पर नेटिव की रोज़मर्रा की बात phrasal verbs से भरी है: get up, turn on, put off, look after, run out of। इस पाठ से पहले basic verb + object संरचना और सामान्य prepositions जानना ज़रूरी है — Linking Words पाठ भी मदद करेगा। यहाँ सीखेंगे: तीन प्रकार (separable / inseparable / three-word), pronoun की जगह, एक क्रिया के particle-परिवार, रोज़मर्रा की शीर्ष जोड़ियाँ, और एक-क्रिया मैपिंग का जाल।",
      },
      roadmap: [
        { bn: "🗣️ phrasal verb কী — নেটিভরা কেন এটাই বলে", en: "🗣️ What a phrasal verb is — why natives prefer them", hi: "🗣️ phrasal verb क्या — नेटिव इसे क्यों बोलते हैं" },
        { bn: "🏗️ separable, inseparable, three-word — তিন ধরনের নিয়ম", en: "🏗️ Separable, inseparable, three-word — the three types", hi: "🏗️ separable, inseparable, three-word — तीन प्रकार के नियम" },
        { bn: "🚦 particle-এর মেজাজ — up, off, on, out দিয়ে অর্থ আঁচ করা", en: "🚦 Particle moods — guessing meaning from up, off, on, out", hi: "🚦 particle का मिज़ाज — up, off, on, out से अर्थ अनुमान" },
        { bn: "🧩 take ও get পরিবার — এক ক্রিয়া, অনেক অর্থ", en: "🧩 The take and get families — one verb, many meanings", hi: "🧩 take और get परिवार — एक क्रिया, अनेक अर्थ" },
        { bn: "🏙️ রোজকার শীর্ষ জুটি — সকাল, কাজ-পড়া, ঘর-বাজার ক্লাস্টার", en: "🏙️ The everyday top pairs — morning, work, home clusters", hi: "🏙️ रोज़ की शीर्ष जोड़ियाँ — सुबह, काम, घर के समूह" },
        { bn: "⚖️ কথ্য phrasal বনাম আনুষ্ঠানিক শব্দ — রেজিস্টার বদলানো", en: "⚖️ Casual phrasal vs formal single words — switching register", hi: "⚖️ बोलचाल का phrasal बनाम औपचारिक शब्द — register बदलना" },
        { bn: "⚠️ বাঙালি শিক্ষার্থীদের তিন চেনা ভুল", en: "⚠️ Three familiar Bengali-speaker mistakes", hi: "⚠️ बांग्लाभाषी छात्रों की तीन जानी गलतियाँ" },
        { bn: "📖 সোহেলের একটা সকাল — গল্পে বাঁধা phrasal verb", en: "📖 One morning of Sohel's — phrasal verbs in a story", hi: "📖 सोहेल की एक सुबह — कहानी में बँधे phrasal verbs" },
      ],
      sections: [
        {
          heading: {
            bn: "🗣️ কখন ব্যবহার হয় — নেটিভ কথাবার্তার মূল উপকরণ",
            en: "🗣️ When to use them — the backbone of native conversation",
            hi: "🗣️ कब इस्तेमाल होते हैं — नेटिव बातचीत की रीढ़",
          },
          lead: {
            bn: "phrasal verb = ক্রিয়া + particle — নেটিভ কথার প্রথম পছন্দ, অংশ মিলিয়ে অর্থ বোঝা যায় না।",
            en: "A phrasal verb is a verb + particle — the native's first choice, and its meaning defies the parts.",
            hi: "phrasal verb = क्रिया + particle — नेटिव की पहली पसंद, हिस्सों से अर्थ नहीं मिलता।",
          },
          points: [
            { bn: "**Phrasal verb = একটা ক্রিয়া + ছোট particle** (on, off, up, out, after...) — জুটিটা মিলে এমন অর্থ বানায় যা অংশ ধরে অনুমান করা যায় না।", en: "**A phrasal verb = one verb + a small particle** (on, off, up, out, after...) — the pair makes a meaning you cannot guess from the parts.", hi: "**Phrasal verb = एक क्रिया + छोटा particle** (on, off, up, out, after...) — जोड़ी मिलकर ऐसा अर्थ बनाती है जो हिस्सों से अनुमान नहीं होता।" },
            { bn: "**give up** = হাল ছাড়া ('দান করে উপরে' নয়!), find out = খুঁজে বের করা, get up = বিছানা থেকে ওঠা, come across = হুট করে পেয়ে যাওয়া।", en: "**give up** = stop trying (not 'donate upward'!), find out = discover, get up = leave the bed, come across = stumble upon.", hi: "**give up** = हार मानना ('दान करके ऊपर' नहीं!), find out = पता लगाना, get up = बिस्तर से उठना, come across = अचानक मिलना।" },
            { bn: "নেটিভ স্পিকারের দৈনন্দিন কথায় এরাই প্রথম পছন্দ।", en: "In native daily talk these are the first choice.", hi: "नेटिव की रोज़मर्रा की बात में यही पहली पसंद हैं।" },
            { bn: "চলচ্চিত্র-নাটক-অফিসের আড্ডায় postpone নয়, put off শোনা যায়; discover নয়, find out।", en: "Films, dramas and office chatter say put off, not postpone; find out, not discover.", hi: "फ़िल्म-ड्रामा-ऑफिस की बातचीत में postpone नहीं, put off सुनाई देता है; discover नहीं, find out।" },
          ],
          examples: [
            { wrong: "Please on the fan.", right: "Please turn on the fan.", note: { bn: "বাংলায় 'অন করা' এক ক্রিয়ার মতো চলে; ইংরেজিতে particle (on) একা ক্রিয়া নয় — turn on / switch on জুটি লাগবে।", en: "In Bangla 'অন করা' works as one verb, but the particle 'on' can never act alone — you need turn on / switch on.", hi: "बांग्ला में 'ऑन करना' एक क्रिया जैसा चलता है, पर 'on' अकेले क्रिया नहीं — turn on / switch on जोड़ी चाहिए।" } },
            { wrong: "Our sugar finished yesterday.", right: "We ran out of sugar yesterday.", note: { bn: "'ফুরিয়ে গেছে' বোঝাতে run out of; 'finished' বললে মনে হয় চিনি নিজে কাজ শেষ করেছে!", en: "For 'we have none left' use run out of; 'finished' makes it sound as if the sugar completed a job!", hi: "'खत्म हो गया' के लिए run out of; 'finished' कहने पर चीनी खुद काम करके थक गई लगती है!" } },
            { wrong: "Every morning I arise from my bed at six.", right: "Every morning I get up at six.", note: { bn: "দৈনন্দিন কথায় বিছানা ছাড়ার ক্রিয়া get up; arise সাহিত্যিক/আনুষ্ঠানিক — 'সমস্যা উদ্ভূত হওয়া' অর্থে চলে।", en: "Everyday English uses get up for getting out of bed; arise is literary/formal (a problem arose).", hi: "रोज़मर्रा की बात में बिस्तर छोड़ने के लिए get up; arise साहित्यिक/औपचारिक है (a problem arose)।" } },
            { wrong: "The meeting was cancelled, so we will do it next week.", right: "The meeting was put off until next week.", note: { bn: "'মুলতবি' কথায় put off; postpone ঠিক কিন্তু আনুষ্ঠানিক শোনায় — until দিয়ে কখন পর্যন্ত তা-ও বলুন।", en: "For postponing, speech prefers put off; postpone is correct but formal. Add 'until' + time.", hi: "स्थगित करने के लिए बोलचाल में put off; postpone सही पर औपचारिक है — 'until' + समय जोड़ें।" } },
          ],
        },
        {
          heading: {
            bn: "🏗️ গঠন — তিন ধরন: separable, inseparable, three-word",
            en: "🏗️ Formation — three types: separable, inseparable, three-word",
            hi: "🏗️ गठन — तीन प्रकार: separable, inseparable, three-word",
          },
          lead: {
            bn: "একই জুটি, তিন আচরণ — object আর pronoun কোথায় বসবে, সেটাই আসল পরীক্ষা।",
            en: "Same pairing, three behaviours — where the object and its pronoun go is the real test.",
            hi: "एक ही जोड़ी, तीन व्यवहार — object और pronoun कहाँ बैठेगा, यही असली परीक्षा।",
          },
          points: [
            { bn: "**Separable**: object মাঝখানে বা শেষে — দুই জায়গাতেই যেতে পারে: turn on the light / turn the light on।", en: "**Separable**: the object can sit in the middle or at the end — turn on the light / turn the light on.", hi: "**Separable**: object बीच में या अंत में — दोनों जगह जा सकता है: turn on the light / turn the light on।" },
            { bn: "কিন্তু object pronoun (it, him, her, them) হলে মাঝখানেই বাধ্যতামূলক: turn it on — 'turn on it' কখনো নয়।", en: "But a pronoun object (it, him, her, them) MUST go in the middle: turn it on, never 'turn on it'.", hi: "पर pronoun object (it, him, her, them) हमेशा बीच में: turn it on, कभी 'turn on it' नहीं।" },
            { bn: "**Inseparable**: ক্রিয়া-particle পাশাপাশি আটকে থাকে — look after the baby / look after her; 'look her after' ভুল।", en: "**Inseparable**: verb and particle stay glued — look after the baby / look after her; 'look her after' is wrong.", hi: "**Inseparable**: क्रिया-particle चिपके रहते हैं — look after the baby / look after her; 'look her after' गलत।" },
            { bn: "**Three-word** (verb + adverb + preposition): run out of, put up with, look forward to, get along with — এরাও inseparable।", en: "**Three-word** (verb + adverb + preposition): run out of, put up with, look forward to, get along with — also inseparable.", hi: "**Three-word** (verb + adverb + preposition): run out of, put up with, look forward to, get along with — ये भी inseparable।" },
            { bn: "এরা কখনো ভাঙে না — ran out of milk ঠিক; 'ran of milk out' অসম্ভব।", en: "They never break — ran out of milk is right; 'ran of milk out' is impossible.", hi: "ये कभी नहीं टूटते — ran out of milk सही; 'ran of milk out' असंभव।" },
          ],
          table: {
            head: [
              { bn: "ধরন", en: "Type", hi: "प्रकार" },
              { bn: "object-এর জায়গা", en: "Object position", hi: "object की जगह" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [{ bn: "Separable", en: "Separable", hi: "Separable" }, { bn: "মাঝে বা শেষে; pronoun হলে মাঝেই", en: "middle or end; pronoun always in the middle", hi: "बीच या अंत में; pronoun हमेशा बीच में" }, { bn: "turn on the light / turn it on", en: "turn on the light / turn it on", hi: "turn on the light / turn it on" }],
              [{ bn: "Inseparable", en: "Inseparable", hi: "Inseparable" }, { bn: "সবসময় পুরো জুটির পরে", en: "always after the whole pair", hi: "हमेशा पूरी जोड़ी के बाद" }, { bn: "look after the baby / look after her", en: "look after the baby / look after her", hi: "look after the baby / look after her" }],
              [{ bn: "Three-word", en: "Three-word", hi: "Three-word" }, { bn: "জুটি ভাঙে না — একসাথেই থাকে", en: "the pair never splits — it stays whole", hi: "जोड़ी नहीं टूटती — साथ ही रहती है" }, { bn: "ran out of milk", en: "ran out of milk", hi: "ran out of milk" }],
            ],
          },
          examples: [
            { wrong: "It's cold in here. Turn on it, please.", right: "It's cold in here. Turn it on, please.", note: { bn: "separable জুটির object pronoun হলে মাঝখানে — 'it' সবসময় turn আর on-এর ভেতরে।", en: "With a separable pair, a pronoun object sits in the middle — 'it' always goes between 'turn' and 'on'.", hi: "separable जोड़ी में pronoun object बीच में — 'it' हमेशा 'turn' और 'on' के बीच।" } },
            { wrong: "Can you look my dog after this weekend?", right: "Can you look after my dog this weekend?", note: { bn: "look after inseparable — particle কোনোভাবেই আলাদা হয় না; object পুরো জুটির পরে।", en: "Look after is inseparable — the particle never splits; the object follows the whole pair.", hi: "look after inseparable है — particle कभी अलग नहीं होता; object पूरी जोड़ी के बाद।" } },
            { wrong: "I am really looking forward to meet you.", right: "I am really looking forward to meeting you.", note: { bn: "three-word জুটির to আসল preposition — তাই পরে verb + -ing; 'to meet' নয়।", en: "In this three-word pair, 'to' is a real preposition — so verb + -ing follows, not 'to meet'.", hi: "इस three-word जोड़ी का to असली preposition है — इसलिए verb + -ing, 'to meet' नहीं।" } },
            { wrong: "We ran of milk this morning.", right: "We ran out of milk this morning.", note: { bn: "তিন-অংশের জুটি একসাথেই থাকে — run out of; মাঝের অংশ বাদ দেওয়া যায় না।", en: "A three-part pair stays whole — run out of; the middle part cannot be dropped.", hi: "तीन-भाग की जोड़ी एक साथ रहती है — run out of; बीच का हिस्सा नहीं छूट सकता।" } },
          ],
        },
        {
          heading: {
            bn: "🚦 আভাস ও প্যাটার্ন — particle-এর মেজাজ চিনুন",
            en: "🚦 Cues and patterns — read the mood of each particle",
            hi: "🚦 संकेत और पैटर्न — particle का मिज़ाज पहचानें",
          },
          lead: {
            bn: "particle-এর মেজাজ চিনলে অজানা জুটির অর্থও আঁচ করা যায়।",
            en: "Know each particle's mood and you can guess even unfamiliar pairs.",
            hi: "particle का मिज़ाज पहचान लें तो अनजान जोड़ी का अर्थ भी अंदाज़ा हो जाता है।",
          },
          points: [
            { bn: "particle-গুলোর নিজস্ব 'মেজাজ' আছে — এটা চিনলে অজানা phrasal verb-এর অর্থও আঁচ করা যায়।", en: "Each particle has its own 'mood' — recognise it and you can guess unfamiliar phrasal verbs.", hi: "हर particle का अपना 'मिज़ाज' है — पहचान लें तो नए phrasal verb का अर्थ भी अंदाज़ा हो जाता है।" },
            { bn: "**up** মানে প্রায়ই 'পুরোপুরি শেষ/সম্পূর্ণ' — eat up, use up, clean up।", en: "**up** often means 'completely/finished' — eat up, use up, clean up.", hi: "**up** अक्सर 'पूरी तरह/समाप्त' — eat up, use up, clean up।" },
            { bn: "**off** = বিচ্ছিন্ন/বন্ধ — turn off, call off (বাতিল), put off (মুলতবি)।", en: "**off** = disconnected/cancelled — turn off, call off (cancel), put off (postpone).", hi: "**off** = अलग/रद्द — turn off, call off (रद्द), put off (टालना)।" },
            { bn: "**on** = সংযোগ/চালু — turn on, put on (পরা), try on (মেপে দেখা)।", en: "**on** = connection/activated — turn on, put on (wear), try on (test clothes).", hi: "**on** = जुड़ाव/चालू — turn on, put on (पहनना), try on (मेप देखना)।" },
            { bn: "**out** = বাইরে/জেনে ফেলা — find out, figure out, point out।", en: "**out** = outward/into knowledge — find out, figure out, point out.", hi: "**out** = बाहर/पता लगाना — find out, figure out, point out।" },
            { bn: "নতুন জুটি শুনলে particle-এর মেজাজ মিলিয়ে অর্থের আন্দাজ করুন, তারপর ডিকশনারিতে মিলিয়ে নিন।", en: "When you hear a new pair, use the particle's mood to predict the meaning, then confirm in a dictionary.", hi: "नई जोड़ी सुनते ही particle का मिज़ाज मिलाकर अर्थ अनुमान करें, फिर शब्दकोश से मिलाएँ।" },
          ],
          examples: [
            { wrong: "Please pick up it from the floor.", right: "Please pick it up from the floor.", note: { bn: "pronoun মাঝে; 'pick up it' কানে ভুল লাগে — এই ড্রিল প্রতিদিন করুন।", en: "The pronoun goes in the middle; 'pick up it' sounds off — drill this daily.", hi: "pronoun बीच में; 'pick up it' गलत सुनाई देता है — यह ड्रिल रोज़ करें।" } },
            { wrong: "The plane will take after at noon.", right: "The plane will take off at noon.", note: { bn: "বিমান ওড়া = take off; take after মানে চেহারা-স্বভাবে কারো মতো হওয়া — পুরো ভিন্ন অর্থ।", en: "A plane takes off; take after means to resemble someone — entirely different meanings.", hi: "विमान take off होता है; take after का अर्थ किसी जैसा दिखना — पूरी तरह अलग।" } },
            { wrong: "He takes up his father — both are very calm.", right: "He takes after his father — both are very calm.", note: { bn: "চেহারা-স্বভাবে মিল = take after; take up মানে নতুন শখ/কাজ শুরু করা।", en: "Resembling someone = take after; take up means to start a hobby or activity.", hi: "किसी जैसा होना = take after; take up का अर्थ नया शौक/काम शुरू करना।" } },
            { wrong: "I used my savings all last year.", right: "I used up all my savings last year.", note: { bn: "'নিঃশেষ করা' = use up; up এখানে সম্পূর্ণতা বোঝায় — use একা মানে সাধারণ ব্যবহার।", en: "To exhaust something = use up; 'up' adds completeness — plain 'use' just means to employ.", hi: "'निःशेष करना' = use up; up यहाँ पूर्णता दर्शाता है — अकेला use सिर्फ़ उपयोग करना है।" } },
          ],
        },
        {
          heading: {
            bn: "🧩 এক ক্রিয়া, অনেক particle — take ও get পরিবার",
            en: "🧩 One verb, many particles — the take and get families",
            hi: "🧩 एक क्रिया, अनेक particle — take और get परिवार",
          },
          lead: {
            bn: "একটাই ক্রিয়া, particle বদলালেই অর্থে পাহাড়-সমান ফারাক — take আর get দেখুন।",
            en: "One verb, a new particle, a mountain of difference — watch take and get.",
            hi: "एक ही क्रिया, particle बदलते ही अर्थ में पहाड़-सा फ़र्क़ — take और get देखिए।",
          },
          points: [
            { bn: "**take off** — (ক) পোশাক/জুতা খোলা: Take off your shoes; (খ) বিমান ওড়া: The plane took off on time।", en: "**take off** — (a) remove clothes/shoes: Take off your shoes; (b) a plane leaves the ground: The plane took off on time.", hi: "**take off** — (क) कपड़े/जूते उतारना: Take off your shoes; (ख) विमान उड़ना: The plane took off on time।" },
            { bn: "**take after** — কারো চেহারা/স্বভাব উত্তরাধিকারসূত্রে আসা: She takes after her mother।", en: "**take after** — inherit someone's looks or nature: She takes after her mother.", hi: "**take after** — किसी का रूप-स्वभाव विरासत में आना: She takes after her mother।" },
            { bn: "**take up** — নতুন কিছু শুরু করা: He took up photography।", en: "**take up** — start something new: He took up photography.", hi: "**take up** — कुछ नया शुरू करना: He took up photography।" },
            { bn: "**take in** — মনে গেঁথে নেওয়া বা ঠকে যাওয়া: I couldn't take in the whole lecture।", en: "**take in** — absorb, or be deceived: I couldn't take in the whole lecture.", hi: "**take in** — मन में उतारना या ठगा जाना: I couldn't take in the whole lecture।" },
            { bn: "**take back** — কথা/জিনিস ফিরিয়ে নেওয়া: I take back what I said।", en: "**take back** — withdraw words or return a thing: I take back what I said.", hi: "**take back** — कही बात/चीज़ वापस लेना: I take back what I said।" },
            { bn: "get পরিবারও একই খেলা — get on/off (যানে ওঠা/নামা), get over (অসুখ-কষ্ট পার হওয়া), get along with (মানানসই), get rid of (ঝাড়াই)।", en: "The get family plays the same game — get on/off (board/leave a vehicle), get over (recover), get along with (get on well), get rid of (discard).", hi: "get परिवार भी वही खेल — get on/off (वाहन में चढ़ना/उतरना), get over (बीमारी से उबरना), get along with (अच्छे संबंध), get rid of (छुटकारा)।" },
          ],
          formula: {
            bn: "take + off / after / up / in / back — particle বদলালেই অর্থ বদলে যায়",
            en: "take + off / after / up / in / back — change the particle, change the meaning",
            hi: "take + off / after / up / in / back — particle बदलते ही अर्थ बदल जाता है",
          },
          examples: [
            { wrong: "I couldn't get over the bus, so I was late.", right: "I couldn't get on the bus, so I was late.", note: { bn: "যানবাহনে ওঠা get on, নামা get off; get over মানে অসুখ-কষ্ট পার করা।", en: "You get on a vehicle and get off it; get over means to recover from illness or grief.", hi: "वाहन पर चढ़ना get on, उतरना get off; get over का अर्थ बीमारी/दुख से उबरना।" } },
            { wrong: "She got up from fever in a week.", right: "She got over the fever in a week.", note: { bn: "অসুখ পার হওয়া = get over; get up শুধু বিছানা থেকে ওঠা।", en: "Recovering from an illness = get over; get up only means rising from bed.", hi: "बीमारी से उबरना = get over; get up केवल बिस्तर से उठना है।" } },
            { wrong: "We get along our new neighbour very well.", right: "We get along with our new neighbour very well.", note: { bn: "মানানসই সম্পর্ক = get along WITH / get on WITH — with বাদ দেওয়া যায় না।", en: "A friendly relationship = get along WITH / get on WITH — 'with' cannot be dropped.", hi: "अच्छे संबंध = get along WITH / get on WITH — with नहीं छूट सकता।" } },
            { wrong: "You should get rid this old sofa.", right: "You should get rid of this old sofa.", note: { bn: "get rid of — of সহ তিন-অংশের জুটি; of ছাড়া অসম্পূর্ণ।", en: "get rid of — a three-part pair; without 'of' it is incomplete.", hi: "get rid of — of सहित तीन-भाग की जोड़ी; of के बिना अधूरी।" } },
          ],
        },
        {
          heading: {
            bn: "🏙️ রোজকার শীর্ষ জুটি — ক্লাস্টারে শেখা",
            en: "🏙️ The everyday top pairs — learn in clusters",
            hi: "🏙️ रोज़मर्रा की शीर्ष जोड़ियाँ — समूह में सीखें",
          },
          lead: {
            bn: "তালিকা নয়, জীবনের ক্লাস্টারে শিখুন — সকাল, কাজ-পড়া, ঘর-বাজার।",
            en: "Not lists but life-clusters: morning, work-study, home-market.",
            hi: "सूची नहीं, जीवन के समूह — सुबह, काम-पढ़ाई, घर-बाज़ार।",
          },
          points: [
            { bn: "তালিকা মুখস্থের বদলে জীবনের বিভাজনে শিখুন — সকাল, কাজ-পড়া, ঘর-বাজার তিন ক্লাস্টার।", en: "Skip memorised lists; learn by life-clusters — morning, work-study, home-market.", hi: "सूची रटने के बजाय जीवन के समूहों में सीखें — सुबह, काम-पढ़ाई, घर-बाज़ार।" },
            { bn: "**সকাল**: wake up (ঘুম ভাঙা), get up (উঠে পড়া), get dressed, put on (পরা), take off (খোলা)।", en: "**Morning**: wake up, get up, get dressed, put on (wear), take off (remove).", hi: "**सुबह**: wake up (नींद खुलना), get up (उठना), get dressed, put on (पहनना), take off (उतारना)।" },
            { bn: "**কাজ-পড়া**: put off (মুলতবি), give up (হাল ছাড়া), find out (জেনে নেওয়া), hand in (জমা দেওয়া), fill in (ফর্ম পূরণ)।", en: "**Work-study**: put off (postpone), give up (quit), find out (learn), hand in (submit), fill in (complete a form).", hi: "**काम-पढ़ाई**: put off (टालना), give up (हार मानना), find out (पता लगाना), hand in (जमा करना), fill in (फ़ॉर्म भरना)।" },
            { bn: "**কাজ-পড়ার বাকি জুটি**: look forward to (আগ্রহে অপেক্ষা), carry on (চালিয়ে যাওয়া), set up (স্থাপন/গোছানো)।", en: "**More work-study pairs**: look forward to (await eagerly), carry on (continue), set up (establish/arrange).", hi: "**काम-पढ़ाई की बाकी जोड़ियाँ**: look forward to (उत्साह से प्रतीक्षा), carry on (जारी रखना), set up (स्थापित/व्यवस्थित करना)।" },
            { bn: "**ঘর-বাজার**: turn on/off, clean up, pick up (কুড়ানো; কাউকে গাড়িতে তোলাও!), run out of (ফুরানো)।", en: "**Home-market**: turn on/off, clean up, pick up (lift from the floor; also collect someone by car!), run out of (be used up).", hi: "**घर-बाज़ार**: turn on/off, clean up, pick up (उठाना; किसी को गाड़ी से लेना भी!), run out of (खत्म होना)।" },
            { bn: "**ঘর-বাজারের বাকি জুটি**: come across (হুট করে পাওয়া), sort out (গুছিয়ে ফেলা)।", en: "**More home-market pairs**: come across (stumble upon), sort out (resolve/organise).", hi: "**घर-बाज़ार की बाकी जोड़ियाँ**: come across (अचानक मिलना), sort out (सुलझाना)।" },
          ],
          table: {
            head: [
              { bn: "Phrasal verb", en: "Phrasal verb", hi: "Phrasal verb" },
              { bn: "অর্থ", en: "Meaning", hi: "अर्थ" },
              { bn: "ক্লাস্টার", en: "Cluster", hi: "समूह" },
            ],
            rows: [
              [{ bn: "wake up", en: "wake up", hi: "wake up" }, { bn: "ঘুম ভাঙা", en: "wake from sleep", hi: "नींद खुलना" }, { bn: "সকাল", en: "morning", hi: "सुबह" }],
              [{ bn: "get up", en: "get up", hi: "get up" }, { bn: "বিছানা থেকে ওঠা", en: "rise from bed", hi: "बिस्तर से उठना" }, { bn: "সকাল", en: "morning", hi: "सुबह" }],
              [{ bn: "put on", en: "put on", hi: "put on" }, { bn: "(পোশাক) পরা", en: "wear / dress in", hi: "(कपड़े) पहनना" }, { bn: "সকাল", en: "morning", hi: "सुबह" }],
              [{ bn: "take off", en: "take off", hi: "take off" }, { bn: "খোলা", en: "remove", hi: "उतारना" }, { bn: "সকাল", en: "morning", hi: "सुबह" }],
              [{ bn: "put off", en: "put off", hi: "put off" }, { bn: "মুলতবি রাখা", en: "postpone", hi: "टालना" }, { bn: "কাজ-পড়া", en: "work-study", hi: "काम-पढ़ाई" }],
              [{ bn: "give up", en: "give up", hi: "give up" }, { bn: "হাল ছাড়া", en: "stop trying", hi: "हार मानना" }, { bn: "কাজ-পড়া", en: "work-study", hi: "काम-पढ़ाई" }],
              [{ bn: "find out", en: "find out", hi: "find out" }, { bn: "জেনে নেওয়া", en: "discover", hi: "पता लगाना" }, { bn: "কাজ-পড়া", en: "work-study", hi: "काम-पढ़ाई" }],
              [{ bn: "hand in", en: "hand in", hi: "hand in" }, { bn: "জমা দেওয়া", en: "submit", hi: "जमा करना" }, { bn: "কাজ-পড়া", en: "work-study", hi: "काम-पढ़ाई" }],
              [{ bn: "look forward to", en: "look forward to", hi: "look forward to" }, { bn: "আগ্রহে অপেক্ষা", en: "await eagerly", hi: "उत्साह से प्रतीक्षा" }, { bn: "কাজ-পড়া", en: "work-study", hi: "काम-पढ़ाई" }],
              [{ bn: "turn on/off", en: "turn on/off", hi: "turn on/off" }, { bn: "চালু/বন্ধ", en: "activate/switch off", hi: "चालू/बंद" }, { bn: "ঘর-বাজার", en: "home-market", hi: "घर-बाज़ार" }],
              [{ bn: "pick up", en: "pick up", hi: "pick up" }, { bn: "কুড়ানো; গাড়িতে তোলা", en: "lift; collect by car", hi: "उठाना; गाड़ी से लेना" }, { bn: "ঘর-বাজার", en: "home-market", hi: "घर-बाज़ार" }],
              [{ bn: "run out of", en: "run out of", hi: "run out of" }, { bn: "ফুরানো", en: "have none left", hi: "खत्म होना" }, { bn: "ঘর-বাজার", en: "home-market", hi: "घर-बाज़ार" }],
              [{ bn: "come across", en: "come across", hi: "come across" }, { bn: "হুট করে পাওয়া", en: "stumble upon", hi: "अचानक मिलना" }, { bn: "ঘর-বাজার", en: "home-market", hi: "घर-बाज़ार" }],
              [{ bn: "sort out", en: "sort out", hi: "sort out" }, { bn: "গুছিয়ে ফেলা", en: "resolve/organise", hi: "सुलझाना" }, { bn: "ঘর-বাজার", en: "home-market", hi: "घर-बाज़ार" }],
            ],
          },
          examples: [
            { wrong: "I can't put up his rude behaviour any more.", right: "I can't put up with his rude behaviour any more.", note: { bn: "সহ্য করা = put up WITH — with ছাড়া জুটি অসম্পূর্ণ।", en: "To tolerate = put up WITH — the pair is incomplete without 'with'.", hi: "सहन करना = put up WITH — with के बिना जोड़ी अधूरी।" } },
            { wrong: "He showed off at the party very late.", right: "He showed up at the party very late.", note: { bn: "হাজির হওয়া = show up; show off মানে দেখাসাজি — ভুল হলে অর্থ হাস্যকর হয়ে যায়!", en: "To arrive = show up; show off means to boast — the mix-up turns the meaning comic!", hi: "पहुँचना = show up; show off का अर्थ अपनी डिंग-हाँकी — गलती हास्यास्पद बना देगी!" } },
            { wrong: "Please fill up this form and give it to the office.", right: "Please fill in this form and hand it in to the office.", note: { bn: "ফর্ম পূরণ = fill in/out — 'fill up' ভারতীয় ইংরেজি; জমা দেওয়া = hand in।", en: "Completing a form = fill in/out — 'fill up' is Indian English; submitting = hand in.", hi: "फ़ॉर्म भरना = fill in/out — 'fill up' भारतीय अंग्रेज़ी; जमा करना = hand in।" } },
            { wrong: "They called the picnic because of the storm.", right: "They called off the picnic because of the storm.", note: { bn: "বাতিল = call off; off বাদ দিলে অর্থই থাকে না।", en: "To cancel = call off; without 'off' the meaning collapses.", hi: "रद्द करना = call off; off हटाते ही अर्थ गायब।" } },
          ],
        },
        {
          heading: {
            bn: "⚖️ আনুষ্ঠানিক নাকি কথ্য? — রেজিস্টার ও বাংলা ম্যাপিং",
            en: "⚖️ Formal or informal? — register and Bengali mapping",
            hi: "⚖️ औपचारिक या बोलचाल? — register और बांग्ला मैपिंग",
          },
          lead: {
            bn: "একই অর্থের দুই দল — কথায় phrasal, লেখায় formal; দুটোই জানা চাই।",
            en: "One meaning, two families — phrasal in speech, formal in writing; you need both.",
            hi: "एक अर्थ, दो परिवार — बोलचाल में phrasal, लेखन में formal; दोनों ज़रूरी।",
          },
          points: [
            { bn: "একই অর্থের দুই দল শব্দ — কথ্য phrasal verb আর আনুষ্ঠানিক একক শব্দ।", en: "One meaning, two word-families — everyday phrasal verbs vs formal single words.", hi: "एक ही अर्थ के दो शब्द-परिवार — रोज़मर्रा के phrasal verbs और औपचारिक एकल शब्द।" },
            { bn: "কথায়-ইমেইলে phrasal verb স্বাভাবিক।", en: "In speech and emails, phrasal verbs are natural.", hi: "बातचीत-ईमेल में phrasal verbs स्वाभाविक हैं।" },
            { bn: "সরকারি রিপোর্ট-একাডেমিক লেখায় একক আনুষ্ঠানিক শব্দ ভালো শোনায়।", en: "In official reports and academic writing, the formal single word reads better.", hi: "सरकारी रिपोर्ट-शोध लेखन में औपचारिक एकल शब्द बेहतर लगता है।" },
            { bn: "দুই দলই শিখুন — শোনার সময় phrasal, লেখার সময় formal-এ সুইচ করতে পারবেন।", en: "Learn both so you can switch — phrasal when listening, formal when writing.", hi: "दोनों सीखें ताकि बदल सकें — सुनते समय phrasal, लिखते समय formal।" },
          ],
          table: {
            head: [
              { bn: "কথ্য phrasal verb", en: "Casual phrasal verb", hi: "बोलचाल का phrasal verb" },
              { bn: "আনুষ্ঠানিক শব্দ", en: "Formal single word", hi: "औपचारिक शब्द" },
            ],
            rows: [
              [{ bn: "find out", en: "find out", hi: "find out" }, { bn: "discover", en: "discover", hi: "discover" }],
              [{ bn: "put off", en: "put off", hi: "put off" }, { bn: "postpone", en: "postpone", hi: "postpone" }],
              [{ bn: "put up with", en: "put up with", hi: "put up with" }, { bn: "tolerate", en: "tolerate", hi: "tolerate" }],
              [{ bn: "look into", en: "look into", hi: "look into" }, { bn: "investigate", en: "investigate", hi: "investigate" }],
              [{ bn: "call off", en: "call off", hi: "call off" }, { bn: "cancel", en: "cancel", hi: "cancel" }],
              [{ bn: "give up", en: "give up", hi: "give up" }, { bn: "abandon", en: "abandon", hi: "abandon" }],
              [{ bn: "sort out", en: "sort out", hi: "sort out" }, { bn: "resolve", en: "resolve", hi: "resolve" }],
              [{ bn: "bring up", en: "bring up", hi: "bring up" }, { bn: "raise (a topic)", en: "raise (a topic)", hi: "raise (a topic)" }],
            ],
          },
          examples: [
            { wrong: "Please discover the train time for me.", right: "Please find out the train time for me.", note: { bn: "তথ্য জেনে নেওয়া কথায় find out; discover এখানে আনুষ্ঠানিক-বিদঘুটে শোনায়।", en: "For getting information, speech uses find out; discover sounds formal and odd here.", hi: "जानकारी निकालने के लिए find out; discover यहाँ अटपटा लगेगा।" } },
            { wrong: "I grew in Chattogram.", right: "I grew up in Chattogram.", note: { bn: "কোথায় বড় হয়ে উঠেছ = grow up; up ছাড়া grow মানে লম্বা-চওড়া হওয়া বা চাষ করা।", en: "Being raised somewhere = grow up; plain grow means to increase or cultivate.", hi: "कहाँ बड़े हुए = grow up; अकेला grow का अर्थ बढ़ना या उगाना।" } },
            { wrong: "She called to her mother last night.", right: "She called her mother last night.", note: { bn: "ফোন করা = call someone — to লাগে না; 'চিৎকার করে ডাকা' বোঝালে call out to।", en: "Phoning = call someone — no 'to'; 'call out to' is for shouting to get attention.", hi: "फ़ोन करना = call someone — to नहीं; 'call out to' चिल्लाकर बुलाना है।" } },
            { wrong: "We discussed about the new plan.", right: "We discussed the new plan.", note: { bn: "discuss ট্রানজিটিভ — object সরাসরি; 'discuss about' বাংলা 'আলোচনা সম্পর্কে'-র ক্যালক।", en: "Discuss is transitive — it takes a direct object; 'discuss about' is a Bengali calque.", hi: "discuss transitive है — सीधा object; 'discuss about' अनुवाद-जाल है।" } },
          ],
        },
        {
          heading: {
            bn: "⚠️ বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "⚠️ Common mistakes by Bengali speakers",
            hi: "⚠️ बांग्लाभाषी विद्यार्थियों की सामान्य गलतियाँ",
          },
          lead: {
            bn: "তিনটে চেনা ভুলেই বেশিরভাগ 'ফরেনার গন্ধ' — ঠিক করলেই নেটিভের কাছাকাছি শোনাবেন।",
            en: "Three familiar slips create most of the 'foreigner smell' — fix them and you sound close to native.",
            hi: "तीन जानी-पहचानी गलतियों में ज़्यादातर 'विदेशी स्वाद' छिपा है — ठीक करें, नेटिव के क़रीब लगेंगे।",
          },
          points: [
            { bn: "**particle-কে একা ক্রিয়া বানানো** — 'on the fan', 'off the TV'; particle একা ক্রিয়া হতে পারে না।", en: "**Using the particle as a verb alone** — 'on the fan', 'off the TV'; a particle can never be the verb by itself.", hi: "**particle को अकेला क्रिया बनाना** — 'on the fan', 'off the TV'; particle अकेले क्रिया नहीं हो सकता।" },
            { bn: "**pronoun শেষে রাখা** — 'turn off it', 'pick up it'; pronoun মাঝেই যাবে।", en: "**Leaving the pronoun at the end** — 'turn off it', 'pick up it'; the pronoun belongs in the middle.", hi: "**pronoun को अंत में रखना** — 'turn off it', 'pick up it'; pronoun बीच में जाएगा।" },
            { bn: "**তিন-অংশের জুটি ভাঙা** — 'put up his behaviour' (with ছাড়া), 'looking forward to meet' (to-র পরে base verb)।", en: "**Breaking three-part pairs** — 'put up his behaviour' (no with), 'looking forward to meet' (base verb after to).", hi: "**तीन-भाग की जोड़ी तोड़ना** — 'put up his behaviour' (with रहित), 'looking forward to meet' (to के बाद base verb)।" },
            { bn: "এই তিনটা ঠিক করলে উচ্চারণের চেয়েও বড় একটা 'ভাষার গন্ধ' মিলিয়ে যায়।", en: "Fix these three and a big layer of 'foreigner smell' disappears — bigger than accent.", hi: "ये तीन ठीक करते ही उच्चारण से भी बड़ी 'विदेशी स्वाद' की परत मिट जाती है।" },
            { bn: "বাংলা ক্রিয়ার সরাসরি অনুবাদেও ভুল আসে — 'চিনি শেষ' → Our sugar finished।", en: "Another batch comes from translating Bengali verbs directly — 'চিনি শেষ' → Our sugar finished.", hi: "सीधे अनुवाद से भी गलतियाँ आती हैं — 'चीनी खत्म' → Our sugar finished।" },
            { bn: "'গাড়ি থেকে নামা' → come down from the car — দুটোই ভুল; ঠিক রূপ পরের উদাহরণে।", en: "'গাড়ি থেকে নামা' → come down from the car — both wrong; the right forms follow in the examples.", hi: "'गाड़ी से उतरना' → come down from the car — दोनों गलत; सही रूप उदाहरणों में।" },
          ],
          examples: [
            { wrong: "Can you off the TV? I am studying.", right: "Can you turn off the TV? I'm studying.", note: { bn: "off একা ক্রিয়া নয়; turn off / switch off জুটি লাগবেই।", en: "'Off' is never a verb alone; the pair turn off / switch off is required.", hi: "off अकेला क्रिया नहीं; turn off / switch off जोड़ी चाहिए।" } },
            { wrong: "She is looking her grandmother after.", right: "She is looking after her grandmother.", note: { bn: "inseparable জুটির পরেই object; particle শেষে ঝুলিয়ে রাখা যায় না।", en: "The object follows an inseparable pair; the particle cannot dangle at the end.", hi: "inseparable जोड़ी के बाद object; particle अंत में लटकता नहीं।" } },
            { wrong: "He got down from the car and walked in.", right: "He got out of the car and walked in.", note: { bn: "গাড়ি-ট্যাক্সি থেকে নামা = get out of; get down মানে উঁচু জায়গা থেকে নামা।", en: "Leaving a car/taxi = get out of; get down means descending from a height.", hi: "गाड़ी से उतरना = get out of; get down का अर्थ ऊँची जगह से नीचे आना।" } },
            { wrong: "We are looking forward to see you soon.", right: "We are looking forward to seeing you soon.", note: { bn: "look forward to-র to আসল preposition — পরে -ing।", en: "The 'to' of look forward to is a real preposition — -ing follows.", hi: "look forward to का to असली preposition है — बाद में -ing।" } },
            { wrong: "I have to admit my father in hospital tomorrow.", right: "I have to get my father admitted to hospital tomorrow.", note: { bn: "'ভর্তি করানো' = get someone admitted to — admit in বাংলা-ক্যালক।", en: "To have someone admitted = get someone admitted to; 'admit in' is a Bengali calque.", hi: "'भर्ती कराना' = get someone admitted to; 'admit in' अनुवाद-जाल है।" } },
          ],
        },
        {
          heading: {
            bn: "📖 ছোট গল্পে দেখা যাক",
            en: "📖 A short story to see it all",
            hi: "📖 एक छोटी कहानी में सब देखें",
          },
          lead: {
            bn: "সোহেলের একটা সকালেই পাঠের প্রায় সব জুটি — গল্পে বাঁধলে আর ভোলে না।",
            en: "One morning of Sohel's carries nearly every pair — bound in a story, they never slip away.",
            hi: "सोहेल की एक ही सुबह में पाठ की लगभग सारी जोड़ियाँ — कहानी में बँधी रहती हैं तो भूलती नहीं।",
          },
          points: [
            { bn: "সোহেলের সকাল: 'I woke up late because my alarm didn't go off.' — অ্যালার্ম বাজেনি।", en: "Sohel's morning: 'I woke up late because my alarm didn't go off.' — the alarm never sounded.", hi: "सोहेल की सुबह: 'I woke up late because my alarm didn't go off.' — अलार्म बजा ही नहीं।" },
            { bn: "'I got dressed quickly, picked up my bag and hurried out.'", en: "'I got dressed quickly, picked up my bag and hurried out.'", hi: "'I got dressed quickly, picked up my bag and hurried out.'" },
            { bn: "পথে গাড়ির পেট্রোল ফুরাল — 'the car ran out of petrol!'", en: "On the way the petrol gave out — 'the car ran out of petrol!'", hi: "रास्ते में गाड़ी का पेट्रोल खत्म — 'the car ran out of petrol!'" },
            { bn: "ফোন করল কাজিনকে — 'I called up my cousin, and he showed up in twenty minutes.'", en: "He phoned his cousin — 'I called up my cousin, and he showed up in twenty minutes.'", hi: "कज़िन को फ़ोन किया — 'I called up my cousin, and he showed up in twenty minutes.'" },
            { bn: "অফিসে ম্যানেজার জানালেন — 'The meeting was called off.' (বাতিল)।", en: "At the office the manager announced — 'The meeting was called off.' (cancelled).", hi: "ऑफिस में मैनेजर ने बताया — 'The meeting was called off.' (रद्द)।" },
            { bn: "সোহেল হাসতে হাসতে ভাবল — সারারাত স্লাইড বানাতে গিয়ে সে stayed up করেছে!", en: "Sohel smiled to himself — he had stayed up all night making those slides!", hi: "सोहेल मुस्कुराते हुए सोचा — सारी रात स्लाइड्स बनाते हुए वह stayed up रहा था!" },
            { bn: "সহকর্মীর অনুরোধ: 'can you look after my desk while I'm on leave?' সোহেল রাজি: 'Sure — I get along with your plants too!'", en: "A colleague asked: 'can you look after my desk while I'm on leave?' Sohel agreed: 'Sure — I get along with your plants too!'", hi: "सहकर्मी का अनुरोध: 'can you look after my desk while I'm on leave?' सोहेल ने हामी भरी: 'Sure — I get along with your plants too!'" },
            { bn: "একটা সকালেই হাতছাড়া হয়ে যায় এতগুলো phrasal verb — গল্পে বাঁধলে আর ভোলে না।", en: "A single morning sweeps so many phrasal verbs past you — bound in a story, you never forget them.", hi: "एक ही सुबह में इतने phrasal verbs निकल जाते हैं — कहानी में बँधे तो भूलते नहीं।" },
          ],
          examples: [
            { wrong: "My alarm didn't ring off, so I woke up late.", right: "My alarm didn't go off, so I woke up late.", note: { bn: "অ্যালার্ম বাজা = go off; ring off মানে ফোনের কথা শেষ করে রাখা।", en: "An alarm goes off; ring off means to end a phone call.", hi: "अलार्म go off होता है; ring off का अर्थ फ़ोन पर बात खत्म करना।" } },
            { wrong: "He showed in twenty minutes and picked the files up for me.", right: "He showed up in twenty minutes and picked up the files for me.", note: { bn: "হাজির = show up; আর full noun object (the files) শেষে-মাঝে দুই জায়গাতেই চলে।", en: "To arrive = show up; a full noun object (the files) may sit in the middle or at the end.", hi: "पहुँचना = show up; पूरा noun object (the files) बीच में या अंत में दोनों जगह चलता है।" } },
            { wrong: "The meeting was called — I stayed up all night for nothing.", right: "The meeting was called off — I stayed up all night for nothing.", note: { bn: "বাতিল = call off; 'called' একা মানে 'ডাকা হয়েছে'।", en: "Cancelled = called off; plain 'called' means summoned.", hi: "रद्द = called off; अकेला 'called' का अर्थ बुलाया गया।" } },
            { wrong: "Can you look after my desk while I will be on leave?", right: "Can you look after my desk while I'm on leave?", note: { bn: "ছোট বোনাস নিয়ম — while-এর পরে ভবিষ্যৎ অর্থেও বর্তমান কাল চলে।", en: "Bonus rule — after 'while', the present tense covers future meaning.", hi: "छोटा बोनस नियम — 'while' के बाद भविष्य के अर्थ में भी वर्तमान काल चलता है।" } },
          ],
        },
      ],
      tips: [
        { bn: "প্রতিটা phrasal verb একক শব্দের মতো শিখুন — 'give up = হাল ছাড়া' পুরোটা একসাথে; give আর up আলাদা অর্থে নয়।", en: "Learn each phrasal verb as a single unit — 'give up = quit' as one whole; not give plus up separately.", hi: "हर phrasal verb एक इकाई की तरह सीखें — 'give up = हार मानना' पूरा एक साथ; अलग-अलग अर्थ से नहीं।" },
        { bn: "Pronoun-placement ড্রিল: separable জুটিতে it/him/them মাঝে — turn it on, pick them up; 'turn on it' কখনো নয়।", en: "Pronoun-placement drill: in separable pairs it/him/them go in the middle — turn it on, pick them up; never 'turn on it'.", hi: "Pronoun-placement ड्रिल: separable जोड़ी में it/him/them बीच में — turn it on, pick them up; कभी 'turn on it' नहीं।" },
        { bn: "particle-এর মেজাজ: up = সম্পূর্ণ (eat up), off = বিচ্ছিন্ন/বাতিল (call off), on = সংযোগ (put on), out = জেনে ফেলা (find out)।", en: "Particle moods: up = complete (eat up), off = severed/cancelled (call off), on = connected (put on), out = discovered (find out).", hi: "particle का मिज़ाज: up = पूर्ण (eat up), off = अलग/रद्द (call off), on = जुड़ा (put on), out = पता लगाना (find out)।" },
        { bn: "এক ক্রিয়ার পরিবার একসাথে শিখুন — take off/after/up/in/back পাশাপাশি থাকলে পার্থক্য মনে থাকে।", en: "Learn one verb's family together — take off/after/up/in/back side by side keeps the differences clear.", hi: "एक क्रिया का परिवार साथ सीखें — take off/after/up/in/back साथ रखने से फर्क याद रहता है।" },
        { bn: "নিজের দিনের কাজে মিলিয়ে শিখুন: get up, put on, pick up, run out of — তালিকা নয়, গল্পে বসান।", en: "Learn through your own day: get up, put on, pick up, run out of — place them in stories, not lists.", hi: "अपने दिन के कामों से सीखें: get up, put on, pick up, run out of — सूची नहीं, कहानी में बिठाएँ।" },
        { bn: "কথায় phrasal (put off, find out), লেখায় formal (postpone, discover) — দুই দলই জানলে রেজিস্টার বদলাতে পারবেন।", en: "Speech prefers phrasal (put off, find out); writing prefers formal (postpone, discover) — know both to switch register.", hi: "बोलचाल में phrasal (put off, find out), लेखन में formal (postpone, discover) — दोनों जानें तो register बदल सकेंगे।" },
        { bn: "'fill up the form' ভারতীয় ইংরেজি — নেটিভরা বলে fill in / fill out।", en: "'Fill up the form' is Indian English — natives say fill in / fill out.", hi: "'fill up the form' भारतीय अंग्रेज़ी है — नेटिव कहते हैं fill in / fill out।" },
        { bn: "তিন-অংশের জুটির শেষ শব্দ (with, of, to) বাদ দেবেন না: put up WITH, run out OF, look forward TO + -ing।", en: "Never drop the final word of three-part pairs: put up WITH, run out OF, look forward TO + -ing.", hi: "तीन-भाग की जोड़ी का अंतिम शब्द (with, of, to) न छोड़ें: put up WITH, run out OF, look forward TO + -ing।" },
        { bn: "নাটক-ভিডিওতে phrasal verb শুনলে পজ করে নোট করুন — particle সহ পুরো বাক্য; সপ্তাহে পাঁচটা নতুন জুটিই যথেষ্ট।", en: "When you hear a phrasal verb in shows or videos, pause and note the whole sentence with its particle; five new pairs a week is plenty.", hi: "शो-वीडियो में phrasal verb सुनते ही रोककर पूरा वाक्य particle सहित नोट करें; हफ़्ते में पाँच नई जोड़ियाँ काफ़ी हैं।" },
      ],
      quiz: [
        { question: "Please turn ___ the volume — the baby is sleeping.", options: ["down", "of", "into", "for"], answer: 0, explanation: { bn: "আওয়াজ কমানো = turn down; down এখানে 'কমানো' বোঝায়।", en: "To lower the volume = turn down; 'down' here signals reduction.", hi: "आवाज़ कम करना = turn down; down यहाँ घटाना दर्शाता है।" } },
        { question: "I can't ___ his rude behaviour any longer.", options: ["put up with", "put on", "put off", "put out"], answer: 0, explanation: { bn: "সহ্য করা = put up with — তিন-অংশের inseparable জুটি।", en: "To tolerate = put up with — a three-part inseparable pair.", hi: "सहन करना = put up with — तीन-भाग की inseparable जोड़ी।" } },
        { question: "I'm really looking forward ___ you again.", options: ["to see", "to seeing", "seeing", "see"], answer: 1, explanation: { bn: "look forward to-র to আসল preposition — তাই to seeing; 'to see' ভুল।", en: "The 'to' of look forward to is a real preposition — to seeing, not 'to see'.", hi: "look forward to का to असली preposition — to seeing, 'to see' नहीं।" } },
        { question: "My alarm didn't ___, so I woke up late.", options: ["go off", "go on", "go out", "go up"], answer: 0, explanation: { bn: "অ্যালার্ম বাজা = go off; off এখানে 'শব্দ ছোড়া'।", en: "An alarm goes off; 'off' here means to fire/sound.", hi: "अलार्म go off होता है; off यहाँ बजना दर्शाता है।" } },
        { question: "Everyone says she ___ her grandmother — same smile, same patience.", options: ["takes after", "takes off", "takes up", "takes in"], answer: 0, explanation: { bn: "চেহারা-স্বভাবে মিল = take after; অন্যগুলো অর্থ ভিন্ন।", en: "Resembling someone = take after; the others mean entirely different things.", hi: "किसी जैसा होना = take after; बाकी के अर्थ बिल्कुल अलग।" } },
        { question: "Which sentence is correct?", options: ["Turn off it.", "Turn it off.", "Turn of it.", "It turn off."], answer: 1, explanation: { bn: "separable জুটি + pronoun → pronoun মাঝে: turn it off।", en: "Separable pair + pronoun → the pronoun goes in the middle: turn it off.", hi: "separable जोड़ी + pronoun → pronoun बीच में: turn it off।" } },
        { question: "We've ___ milk — could you buy some on your way home?", options: ["run out of", "run into", "run over", "run after"], answer: 0, explanation: { bn: "ফুরানো = run out of; run into মানে হুট করে দেখা, run over মানে চাপা দেওয়া!", en: "To have none left = run out of; run into means to bump into, run over means to hit with a car!", hi: "खत्म होना = run out of; run into अचानक मिलना, run over का अर्थ गाड़ी से कुचलना!" } },
        { question: "The manager ___ the meeting until Friday.", options: ["put off", "put on", "put up", "put in"], answer: 0, explanation: { bn: "মুলতবি রাখা = put off; until-এর সাথে সময় বলুন।", en: "To postpone = put off; add the time with 'until'.", hi: "टालना = put off; समय 'until' के साथ बताएँ।" } },
        { question: "I ___ an old classmate at the market yesterday.", options: ["came across", "came up", "came off", "came out"], answer: 0, explanation: { bn: "হুট করে দেখা/পাওয়া = come across — inseparable জুটি।", en: "To meet or find by chance = come across — an inseparable pair.", hi: "अचानक मिलना = come across — inseparable जोड़ी।" } },
        { question: "The school picnic was ___ because of the storm.", options: ["called off", "called on", "called up", "called for"], answer: 0, explanation: { bn: "বাতিল = call off; called up মানে ফোন করা, called on মানে আহ্বান করা।", en: "Cancelled = called off; called up means phoned, called on means appealed to.", hi: "रद्द = called off; called up फ़ोन करना, called on अपील करना।" } },
      ],
    },
  },
];

export default SEED_GRAMMAR_V4_I2A;
