// ─── Grammar seeds v4: BEGINNER batch B2b — point-form roadmap lessons (2) ───
// Task 10 (10-C5R). Source: grammar-v3-b2b.ts. v4 = owner-mandated UX upgrade:
// paragraph bodies become scannable points + lesson roadmap + emoji headings +
// lead lines + formula boxes + small tables. title / intro / tips / quiz /
// examples are copied UNCHANGED from the v3 source; body paragraphs are OMITTED.
// Conditionals: every conditional type (0/1/2/3) is its own section with its own
// formula box (owner request) + a conditional-types comparison table.
// Passive: formula per tense structure + active→passive transformation aids.
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_B2B: SeedGrammarV4Entry[] = [
  /* ── 1. Conditionals (Beginner) — sortOrder 6 ─────────────────────────── */
  {
    topic: "Conditionals",
    level: "beginner",
    title: "Conditionals (Beginner)",
    unit: 0,
    sortOrder: 6,
    data: {
      title: {
        bn: "শর্তের বাক্য — Conditionals (বিগিনার)",
        en: "Conditionals (Beginner)",
        hi: "शर्त वाले वाक्य — Conditionals (बिगिनर)",
      },
      intro: {
        bn: "এই পাঠে শিখব শর্ত বলার ভাষা — 'যদি বৃষ্টি হয়, তাহলে আমরা থাকব' জাতীয় বাক্য ইংরেজিতে কীভাবে বানায়। শর্তের ইংরেজি নাম conditional — if শব্দটাই এর হৃদয়। শুরু করার আগে টেন্সের বেসিক — present, past আর will — হাতে কলমে চলা মানের দরকার, কারণ শর্তের বাক্য এই তিনটের উপরেই দাঁড়িয়ে আছে। বাংলায় বলি 'যদি সে আসবে, তাহলে আমি বলব' — দুই অংশেই ভবিষ্যতের রূপ চলে যায়; কিন্তু ইংরেজিতে if-এর পরে will ঢুকলেই বাক্য ভুল — এই একটা ফারাকই বাঙালি শিক্ষার্থীদের সবচেয়ে চেনা ভুল 'If I will go'-র জন্ম দেয়। এই পাঠে শর্তের তিন ধরন — Type 0 (সবসময় সত্য), Type 1 (বাস্তব ভবিষ্যৎ), Type 2 (এখনকার কল্পনা) — কখন বসে, কীভাবে গঠিত হয়, কোন শব্দ কোন ধরনের আভাস দেয়, কমা কোথায় বসে — সব ধাপে ধাপে শিখব।",
        en: "In this lesson we learn the language of conditions — how English builds sentences like 'If it rains, we will stay home'. The English name is conditional, and the word if is its heart. Before starting you need the tense basics — present, past and will — working comfortably in your hand, because conditional sentences stand on those three. In Bengali we say 'jodi she ashbe, tahole ami bolbo' — future forms travel into both halves; but in English the moment a will enters after if the sentence breaks — and this one gap produces the most familiar Bengali-speaker error, 'If I will go'. In this lesson we learn, step by step, the three conditionals — Type 0 (always true), Type 1 (real future) and Type 2 (unreal now) — when each is used, how each is built, which words signal which type, and where the comma sits.",
        hi: "इस पाठ में हम शर्त बताने की भाषा सीखेंगे — 'If it rains, we will stay home' जैसे वाक्य अंग्रेज़ी में कैसे बनते हैं। इसका अंग्रेज़ी नाम conditional है, और if शब्द इसका दिल है। शुरू करने से पहले टेंस की बुनियाद — present, past और will — हाथ में आराम से चलने लायक होनी चाहिए, क्योंकि conditional वाक्य इन्हीं तीन पर खड़े होते हैं। बांग्ला में हम कहते हैं 'যদি সে আসবে, তাহলে আমি বলব' — दोनों हिस्सों में भविष्य का रूप चला जाता है; पर अंग्रेज़ी में if के बाद will घुसते ही वाक्य गलत हो जाता है — और इसी एक फ़र्क़ से बांग्लाभाषी छात्रों की सबसे जानी-पहचानी गलती 'If I will go' बनती है। इस पाठ में हम कदम-दर-कदम सीखेंगे: तीन प्रकार — Type 0 (सदा सत्य), Type 1 (वास्तविक भविष्य), Type 2 (अभी की कल्पना) — कब आते हैं, कैसे बनते हैं, कौन-से शब्द किस प्रकार का संकेत देते हैं, और कॉमा कहाँ बैठता है।",
      },
      roadmap: [
        { bn: "🧭 শর্ত + ফল — প্রতিটা শর্তের বাক্যের দুই অংশ", en: "🧭 Condition + result — the two halves of every conditional", hi: "🧭 शर्त + परिणाम — हर conditional वाक्य के दो हिस्से" },
        { bn: "🗺️ তিন জগতের শর্ত — Type 0, 1, 2, 3 এক নজরে", en: "🗺️ Three worlds of conditions — Type 0, 1, 2, 3 at a glance", hi: "🗺️ शर्त की तीन दुनिया — Type 0, 1, 2, 3 एक नज़र में" },
        { bn: "🏗️ গঠনের খুঁটিনাটি — V1, কমা, জোড়া মেলানো", en: "🏗️ Structure details — V1, the comma, matching pairs", hi: "🏗️ गठन के छोटे नियम — V1, कॉमा, जोड़ी मिलान" },
        { bn: "🚦 আভাস শব্দ — কোন ধরন বুঝবেন যেভাবে", en: "🚦 Signal words — how to tell the types apart", hi: "🚦 संकेत शब्द — कौन-सा प्रकार, पहचानने का तरीका" },
        { bn: "⚗️ Type 0 — সবসময় সত্য: বিজ্ঞান, নিয়ম, অভ্যাস", en: "⚗️ Type 0 — always true: science, rules, habits", hi: "⚗️ Type 0 — सदा सत्य: विज्ञान, नियम, आदत" },
        { bn: "🔮 Type 1 — বাস্তব ভবিষ্যৎ: শর্তে present, ফলে will", en: "🔮 Type 1 — real future: present in the condition, will in the result", hi: "🔮 Type 1 — वास्तविक भविष्य: शर्त में present, परिणाम में will" },
        { bn: "🦋 Type 2 — এখনকার কল্পনা: past রূপ + would", en: "🦋 Type 2 — unreal now: past form + would", hi: "🦋 Type 2 — अभी की कल्पना: past रूप + would" },
        { bn: "🕰️ Type 3 — অতীতের আফসোস, পরের লেভেলের ঝলক", en: "🕰️ Type 3 — past regrets, a glimpse of the next level", hi: "🕰️ Type 3 — अतीत का अफ़सोस, अगले स्तर की झलक" },
        { bn: "⚠️ বাঙালি শিক্ষার্থীদের সবচেয়ে চেনা ভুলগুলো", en: "⚠️ The most familiar Bengali-speaker mistakes", hi: "⚠️ बांग्लाभाषी छात्रों की सबसे जानी-पहचानी गलतियाँ" },
        { bn: "📖 রিমা-ইমরানের পিকনিকের গল্পে রিক্যাপ", en: "📖 Recap through Rima and Imran's picnic story", hi: "📖 रिमा-इमरान की पिकनिक-कहानी में रिकैप" },
      ],
      sections: [
        {
          heading: {
            bn: "🧭 কখন ব্যবহার হয় — শর্ত + ফল, যদি...তাহলে",
            en: "🧭 When to use them — condition + result, jodi...tahole",
            hi: "🧭 कब इस्तेमाल करें — शर्त + परिणाम, यदि...तो",
          },
          lead: {
            bn: "প্রতিটা শর্তের বাক্যের নকশা এক — আগে শর্ত, পরে ফল। নকশাটাই আগে হাতে নিন।",
            en: "Every conditional shares one blueprint — condition first, result after. Take that blueprint in hand first.",
            hi: "हर conditional का नक्शा एक — पहले शर्त, फिर परिणाम। पहले वही नक्शा हाथ में लीजिए।",
          },
          points: [
            { bn: "শর্তের বাক্যের দুটো অংশ — প্রথমে **শর্ত** (if-অংশ), তারপর ফল: If it rains, we will stay home।", en: "A conditional has two halves — first the **condition** (the if-part), then the result: If it rains, we will stay home.", hi: "Conditional वाक्य के दो हिस्से — पहले **शर्त** (if-वाला हिस्सा), फिर परिणाम: If it rains, we will stay home।" },
            { bn: "বাক্যে শর্ত 'বৃষ্টি হওয়া', ফল 'থাকা' — বাংলার যদি...তাহলে জোড়ার ঠিক এই জায়গা।", en: "Here the condition is 'raining', the result 'staying' — exactly the seat of the Bengali jodi...tahole pair.", hi: "यहाँ शर्त 'बारिश होना', परिणाम 'ठहरना' — बांग्ला यদি...ताहले जोड़ी की ठीक यही जगह।" },
            { bn: "তিন রকম অবস্থা হলেও নিয়ম এক দিকে তাক — will বসে শুধু ফলাফলের অংশে, if-অংশে নয়।", en: "Three kinds of situation, but the rule aims one way — will sits only in the result half, never in the if-part.", hi: "तीन तरह की हालतें, पर नियम एक ही ओर — will केवल परिणाम में बैठता है, if-भाग में नहीं।" },
            { bn: "বাংলায় দুই অংশেই ভবিষ্যৎ চলে যায় — 'যদি তুমি আসবে, তাহলে আমরা শুরু করব'; এখান থেকেই 'If I will go'-র জন্ম।", en: "In Bengali both halves take the future — 'jodi tumi ashbe, tahole amra shuru korbo'; from this habit 'If I will go' is born.", hi: "बांग्ला में दोनों हिस्सों में भविष्य चला जाता है — 'যদি তুমি আসবে, তাহলে আমরা শুরু করব'; इसी से 'If I will go' जन्म लेता है।" },
            { bn: "আজকের পাঠের মূলমন্ত্র — শর্তের অংশে সাধারণ রূপ (present বা past), ফলাফলের অংশে will/would।", en: "Today's mantra — plain forms (present or past) in the condition, will/would in the result.", hi: "आज का मूल मंत्र — शर्त में साधारण रूप (present या past), परिणाम में will/would।" },
          ],
          examples: [
            { wrong: "If you will come tomorrow, we will start the project.", right: "If you come tomorrow, we will start the project.", note: { bn: "বাংলা 'যদি তুমি আসবে...শুরু করব' — দুই ভবিষ্যৎ; ইংরেজি নিয়ম: if-অংশে বর্তমান (come), ফলে will।", en: "The Bengali 'jodi tumi ashbe...shuru korbo' has two futures; the English rule: present (come) in the if-part, will in the result.", hi: "बांग्ला 'যদি তুমি আসবে...শুরু করব' — दो भविष्य; नियम: if-भाग में present (come), परिणाम में will।" } },
            { wrong: "If he will call me, I will tell him the news.", right: "If he calls me, I will tell him the news.", note: { bn: "will একবারই — ফলাফলের অংশে; শর্তে সে যা করে তার সাধারণ রূপ calls।", en: "Only one will — in the result half; the condition takes the plain form calls.", hi: "will एक ही बार — परिणाम में; शर्त में साधारण रूप calls।" } },
            { wrong: "If it rains tomorrow, we stayed home.", right: "If it rains tomorrow, we will stay home.", note: { bn: "শর্ত ভবিষ্যতের (tomorrow) — ফলও ভবিষ্যতে will stay; stayed অতীতের রূপ, এখানে আসে না।", en: "The condition is future (tomorrow) — so the result is future too: will stay; the past form stayed cannot sit here.", hi: "शर्त भविष्य की (tomorrow) — परिणाम भी भविष्य में will stay; stayed अतीत है, यहाँ नहीं चलेगा।" } },
          ],
        },
        {
          heading: {
            bn: "🗺️ শর্তের তিন জগৎ — কোন অবস্থায় কোন ধরন",
            en: "🗺️ The three worlds of conditions — which type fits which situation",
            hi: "🗺️ शर्त की तीन दुनिया — कौन-सी हालत, कौन-सा प्रकार",
          },
          lead: {
            bn: "কোন শর্ত কোন ধরনের — এই তিন জগৎ চিনলে সূত্র নিজেই দাবিয়ে আসবে।",
            en: "Know which world your condition lives in, and the formula comes running to you.",
            hi: "कौन-सी शर्त किस प्रकार की — तीनों दुनिया पहचान लीजिए, सूत्र खुद आ जाएगा।",
          },
          points: [
            { bn: "সব শর্ত এক জাতের নয় — তিন রকম অবস্থা, আর প্রতিটার জন্য ইংরেজির আলাদা রূপ।", en: "Not all conditions are of one kind — three kinds of situation, and English gives each its own form.", hi: "सभी शर्तें एक जैसी नहीं — तीन तरह की हालतें, और हर एक के लिए अंग्रेज़ी का अलग रूप।" },
            { bn: "**Type 0** — সবসময় যা ঘটে: বিজ্ঞান, নিয়ম, অভ্যাস: If you heat ice, it melts।", en: "**Type 0** — what always happens: science, rules, habits: If you heat ice, it melts.", hi: "**Type 0** — जो हमेशा घटित होता है: विज्ञान, नियम, आदत: If you heat ice, it melts।" },
            { bn: "**Type 1** — বাস্তবে ঘটতে পারে এমন ভবিষ্যৎ: If you study, you will pass।", en: "**Type 1** — a future that can really happen: If you study, you will pass.", hi: "**Type 1** — वह भविष्य जो सच में घट सकता है: If you study, you will pass।" },
            { bn: "**Type 2** — এখন সত্য নয়, শুধু কল্পনা: If I had a million taka, I would buy a house।", en: "**Type 2** — not true now, only imagined: If I had a million taka, I would buy a house.", hi: "**Type 2** — अभी सत्य नहीं, केवल कल्पना: If I had a million taka, I would buy a house।" },
            { bn: "বাংলার 'যদি...তাহলে' তিনটাতেই প্রায় একই মেজাজে চলে — এই অভ্যাসই রূপ মিশিয়ে দেয়।", en: "Bengali's 'jodi...tahole' runs on almost the same mood for all three — that habit is what blurs the forms.", hi: "बांग्ला 'यदि...ताहले' तीनों में लगभग एक ही मनोदशा में चलता है — यही आदत रूप मिला देती है।" },
          ],
          table: {
            head: [
              { bn: "ধরন", en: "Type", hi: "प्रकार" },
              { bn: "কখন বসে", en: "When it fits", hi: "कब बैठता है" },
              { bn: "সূত্র", en: "Formula", hi: "सूत्र" },
            ],
            rows: [
              [{ bn: "Type 0", en: "Type 0", hi: "Type 0" }, { bn: "সবসময় সত্য", en: "always true", hi: "सदा सत्य" }, { bn: "If + present, ... present", en: "If + present, ... present", hi: "If + present, ... present" }],
              [{ bn: "Type 1", en: "Type 1", hi: "Type 1" }, { bn: "বাস্তব ভবিষ্যৎ", en: "real future", hi: "वास्तविक भविष्य" }, { bn: "If + present, ... will + V1", en: "If + present, ... will + V1", hi: "If + present, ... will + V1" }],
              [{ bn: "Type 2", en: "Type 2", hi: "Type 2" }, { bn: "এখনকার কল্পনা", en: "unreal now", hi: "अभी की कल्पना" }, { bn: "If + past রূপ, ... would + V1", en: "If + past form, ... would + V1", hi: "If + past रूप, ... would + V1" }],
              [{ bn: "Type 3", en: "Type 3", hi: "Type 3" }, { bn: "অতীতের অসত্য (পরের লেভেল)", en: "unreal past (next level)", hi: "अतीत की असत्यता (अगला स्तर)" }, { bn: "If + had + V3, ... would have + V3", en: "If + had + V3, ... would have + V3", hi: "If + had + V3, ... would have + V3" }],
            ],
          },
          examples: [
            { wrong: "If you heat water, it boiled.", right: "If you heat water, it boils.", note: { bn: "চিরন্তন সত্য — দুই অংশেই বর্তমান; boiled অতীতে গেলে 'সবসময় সত্য' ভাবটাই মিলিয়ে যায়।", en: "A timeless truth — present in both halves; sending the result to boiled (past) kills the 'always true' meaning.", hi: "सदा सत्य — दोनों भागों में present; boiled अतीत चला जाए तो 'हमेशा सत्य' भाव ही मिट जाता है।" } },
          ],
        },
        {
          heading: {
            bn: "🏗️ গঠনের খুঁটিনাটি — V1, কমা, জোড়া মেলানো",
            en: "🏗️ Structure details — V1, the comma, matching pairs",
            hi: "🏗️ गठन के छोटे नियम — V1, कॉमा, जोड़ी मिलान",
          },
          lead: {
            bn: "সূত্রগুলো তো সারণিতে দেখলেন — এখন ছোট ছোট নিয়ম, যা বাক্যকে টিকিয়ে রাখে।",
            en: "The formulas are on the table — now the small rules that hold the sentence together.",
            hi: "सूत्र तो सारणी में देख लिए — अब छोटे-छोटे नियम जो वाक्य को थामे रखते हैं।",
          },
          formula: {
            bn: "শর্তে plain form (present/past), ফলে will/would + V1",
            en: "Plain form (present/past) in the condition, will/would + V1 in the result",
            hi: "शर्त में plain form (present/past), परिणाम में will/would + V1",
          },
          points: [
            { bn: "ফলাফলের অংশে will/would-এর পরে সবসময় V1 — will goes বা would went কখনো নয়।", en: "After will/would the result always keeps V1 — never will goes, never would went.", hi: "परिणाम में will/would के बाद सदा V1 — will goes या would went कभी नहीं।" },
            { bn: "if-অংশ বাক্যের শুরুতে হলে শর্ত শেষে কমা: If it rains, we will stay home।", en: "When the if-part opens the sentence, a comma closes the condition: If it rains, we will stay home.", hi: "if-भाग वाक्य की शुरुआत में हो तो शर्त के अंत में कॉमा: If it rains, we will stay home।" },
            { bn: "ফলাফলের অংশ আগে হলে কমা লাগে না: We will stay home if it rains।", en: "When the result half comes first, no comma: We will stay home if it rains.", hi: "परिणाम पहले हो तो कॉमा नहीं: We will stay home if it rains।" },
            { bn: "মনে রাখার সহজ কৌশল — if দিয়ে শুরু হলে মাঝে কমা, মাঝে if হলে কমা নেই।", en: "Easy memory trick — sentence starts with if: comma in the middle; if sits in the middle: no comma.", hi: "आसान तरकीब — if से शुरू हो तो बीच में कॉमा, बीच में if हो तो कॉमा नहीं।" },
            { bn: "শর্ত-ফলের জোড়া মিলিয়ে রাখুন — had...would, didn't...wouldn't, present...will; মিশলেই বাক্য ভাঙে।", en: "Keep the condition-result pairs matched — had...would, didn't...wouldn't, present...will; the sentence breaks the moment they blur.", hi: "शर्त-परिणाम की जोड़ी मिलाकर रखें — had...would, didn't...wouldn't, present...will; मिले तो वाक्य टूट जाता है।" },
          ],
          examples: [
            { wrong: "If you study hard you will pass the exam.", right: "If you study hard, you will pass the exam.", note: { bn: "if-অংশ শুরুতে — শর্তটা শেষ হলেই কমা; কমা ছাড়া বাক্য দুই অংশের সীমানা হারিয়ে ফেলে।", en: "The if-part opens the sentence — a comma closes the condition; without it the two halves lose their boundary.", hi: "if-भाग शुरुआत में — शर्त खत्म होते ही कॉमा; कॉमा के बिना दोनों हिस्सों की सीमा मिट जाती है।" } },
            { wrong: "We will stay home, if it rains.", right: "We will stay home if it rains.", note: { bn: "ফল আগে, if মাঝে — তখন কমা নেই; মনে রাখুন: if মাঝে হলে কমা পড়েই না।", en: "Result first, if in the middle — then no comma; remember: if in the middle, no comma at all.", hi: "परिणाम पहले, if बीच में — तब कॉमा नहीं; याद रखें: if बीच में हो तो कॉमा नहीं।" } },
            { wrong: "If I had a million taka, I will buy a house.", right: "If I had a million taka, I would buy a house.", note: { bn: "শর্তে had (past রূপ) হলে ফলে would — জোড়া মিলাতে হয়: had...would, নয়তো মিশ্র বাক্য।", en: "With had (past form) in the condition, the result takes would — the pair must match: had...would, not a mixed sentence.", hi: "शर्त में had (past रूप) हो तो परिणाम में would — जोड़ी मिलानी होगी: had...would, नहीं तो मिश्रित वाक्य।" } },
            { wrong: "If she was the captain, she will change the plan.", right: "If she were the captain, she would change the plan.", note: { bn: "এখনকার কল্পনা — দুই অংশ মেলান: were...would; will-এর সঙ্গে মিশলে Type 2-এর অর্থই নষ্ট।", en: "An unreal-now condition — match the halves: were...would; mixing in will spoils the Type 2 meaning.", hi: "अभी की कल्पना — दोनों भाग मिलाएँ: were...would; will मिला देने से Type 2 का अर्थ ही बिगड़ जाता है।" } },
            { wrong: "If water boils, it turn into steam.", right: "If water boils, it turns into steam.", note: { bn: "Type 0 দুই অংশেই present simple — water = it, তাই ক্রিয়ায় s: turns।", en: "Type 0 keeps present simple in both halves — water = it, so the verb takes s: turns.", hi: "Type 0 दोनों भागों में present simple — water = it, इसलिए क्रिया में s: turns।" } },
          ],
        },
        {
          heading: {
            bn: "🚦 আভাস শব্দ — কোন ধরনটা, বুঝবেন যেভাবে",
            en: "🚦 Signal words — how to tell the types apart",
            hi: "🚦 संकेत शब्द — प्रकार पहचानने का तरीका",
          },
          lead: {
            bn: "বাক্যের ভেতরের শব্দগুলোই বলে দেয় কোন ধরন লাগবে — সেগুলোই চিনুন।",
            en: "The words inside the sentence tell you which type you need — learn to spot them.",
            hi: "वाक्य के अंदर के शब्द ही बताते हैं कौन-सा प्रकार चाहिए — उन्हें पहचानिए।",
          },
          points: [
            { bn: "**Type 0**-এর আভাস — always, every time, never, generally, আর বিজ্ঞান বা নিয়মের কথা: If you press this button, the fan turns on।", en: "**Type 0** signals — always, every time, never, generally, and talk of science or rules: If you press this button, the fan turns on.", hi: "**Type 0** के संकेत — always, every time, never, generally, और विज्ञान या नियम की बात: If you press this button, the fan turns on।" },
            { bn: "Type 0-তে if-এর জায়গায় when-ও বসে, অর্থ এক।", en: "In Type 0, when can sit where if sits, with the same meaning.", hi: "Type 0 में if की जगह when भी बैठ जाता है, अर्थ एक।" },
            { bn: "**Type 1**-এর আভাস — tomorrow, tonight, next week, later, probably, maybe — বাস্তব প্ল্যান আর সম্ভাবনা।", en: "**Type 1** signals — tomorrow, tonight, next week, later, probably, maybe — real plans and possibilities.", hi: "**Type 1** के संकेत — tomorrow, tonight, next week, later, probably, maybe — वास्तविक योजना और संभावना।" },
            { bn: "Type 1-এর মুখে বাস্তব সম্ভাবনা: If it rains tomorrow, we will cancel the picnic।", en: "On Type 1's face sits a real possibility: If it rains tomorrow, we will cancel the picnic.", hi: "Type 1 में वास्तविक संभावना: If it rains tomorrow, we will cancel the picnic।" },
            { bn: "**Type 2**-এর আভাস — if I were you, imagine, suppose।", en: "**Type 2** signals — if I were you, imagine, suppose.", hi: "**Type 2** के संकेत — if I were you, imagine, suppose।" },
            { bn: "Type 2 মানে 'এখন আসলে নেই' — টাকা নেই, গাড়ি নেই, সময় নেই, তবু কল্পনা: If I had more time, I would learn the guitar।", en: "Type 2 means 'actually not there now' — no money, no car, no time, yet you imagine: If I had more time, I would learn the guitar.", hi: "Type 2 यानी 'अभी वास्तव में नहीं' — पैसे नहीं, गाड़ी नहीं, समय नहीं, फिर भी कल्पना: If I had more time, I would learn the guitar।" },
            { bn: "নিজেকে একটাই প্রশ্ন — শর্তটা কি সত্যিই ঘটতে পারে? পারলে Type 1, সবসময় ঘটে থাকলে Type 0, মনের খেলা হলে Type 2।", en: "Ask yourself one question — can this condition really happen? If yes, Type 1; if it always happens, Type 0; if it is a mind-game, Type 2.", hi: "खुद से एक ही सवाल — क्या शर्त सच में घट सकती है? हाँ तो Type 1, हमेशा घटती हो तो Type 0, मन का खेल हो तो Type 2।" },
            { bn: "প্রশ্নটার উত্তর ঠিক থাকলে রূপটাও আপনিই ঠিক করে ফেলবেন।", en: "Once the question is answered right, the form picks itself.", hi: "सवाल का जवाब सही हुआ तो रूप भी आप ही सही कर लेंगे।" },
          ],
          table: {
            head: [
              { bn: "ধরন", en: "Type", hi: "प्रकार" },
              { bn: "আভাস শব্দ", en: "Signal words", hi: "संकेत शब्द" },
            ],
            rows: [
              [{ bn: "Type 0", en: "Type 0", hi: "Type 0" }, { bn: "always, every time, never, generally, when", en: "always, every time, never, generally, when", hi: "always, every time, never, generally, when" }],
              [{ bn: "Type 1", en: "Type 1", hi: "Type 1" }, { bn: "tomorrow, tonight, next week, later, probably, maybe", en: "tomorrow, tonight, next week, later, probably, maybe", hi: "tomorrow, tonight, next week, later, probably, maybe" }],
              [{ bn: "Type 2", en: "Type 2", hi: "Type 2" }, { bn: "if I were you, imagine, suppose", en: "if I were you, imagine, suppose", hi: "if I were you, imagine, suppose" }],
            ],
          },
          examples: [
            { wrong: "If it rains tomorrow, we would cancel the match.", right: "If it rains tomorrow, we will cancel the match.", note: { bn: "tomorrow = বাস্তব সম্ভাবনা → Type 1 → ফলে will; would শুধু কল্পনার জগতের।", en: "'Tomorrow' means a real possibility — Type 1 — so will in the result; would belongs to the world of imagination.", hi: "'tomorrow' = वास्तविक संभावना → Type 1 → परिणाम में will; would केवल कल्पना की दुनिया में।" } },
            { wrong: "If I have time tonight, I watched the movie.", right: "If I have time tonight, I will watch the movie.", note: { bn: "tonight = বাস্তব ভবিষ্যৎ → Type 1 → ফলে will watch; watched অতীত, বাক্যের সময়ের সঙ্গে যায় না।", en: "'Tonight' is a real future — Type 1 — so will watch; watched is past and cannot join this sentence's time.", hi: "'tonight' = वास्तविक भविष्य → Type 1 → परिणाम में will watch; watched अतीत है, वाक्य के समय से मेल नहीं खाता।" } },
            { wrong: "If I am the captain, I would change the batting order.", right: "If I were the captain, I would change the batting order.", note: { bn: "আমি ক্যাপ্টেন নই — কল্পনা → Type 2: were...would; অসম্ভব শর্তের সংকেতই এই জোড়া।", en: "I am not the captain — imagination → Type 2: were...would; that pair is itself the signal of an unreal condition.", hi: "मैं कप्तान नहीं हूँ — कल्पना → Type 2: were...would; असंभव शर्त का संकेत ही यह जोड़ी है।" } },
            { wrong: "If you mix red and blue, you got purple.", right: "If you mix red and blue, you get purple.", note: { bn: "রং-মিশ্রণ সবসময় সত্য → Type 0 → দুই অংশেই present: mix...get।", en: "Mixing colours is always true → Type 0 → present in both halves: mix...get.", hi: "रंग मिलाना सदा सत्य → Type 0 → दोनों भागों में present: mix...get." } },
          ],
        },
        {
          heading: {
            bn: "⚗️ Type 0 — সবসময় সত্য: বিজ্ঞান, নিয়ম, অভ্যাস",
            en: "⚗️ Type 0 — always true: science, rules, habits",
            hi: "⚗️ Type 0 — सदा सत्य: विज्ञान, नियम, आदत",
          },
          lead: {
            bn: "সবচেয়ে সহজ ধরন — বাংলার 'হলে' এখানে হুবহু মেলে, তাই ভুলও কম।",
            en: "The easiest type — Bengali's 'hole' maps onto it exactly, so mistakes are few.",
            hi: "सबसे आसान प्रकार — बांग्ला 'हले' यहाँ हूबहू बैठता है, गलतियाँ भी कम।",
          },
          formula: {
            bn: "If + বর্তমান (present), ... বর্তমান (present) — দুই অংশেই present simple",
            en: "If + present, ... present — present simple in both halves",
            hi: "If + present, ... present — दोनों हिस्सों में present simple",
          },
          points: [
            { bn: "Type 0 বলে এমন শর্ত, যেখানে শর্ত পূরণ হলেই ফল সবসময় আসে — আগেও আসত, আগামীকালও আসবে।", en: "Type 0 covers conditions where the result always follows — it followed before and will follow tomorrow.", hi: "Type 0 वे शर्तें बताता है जहाँ शर्त पूरी होते ही परिणाम सदा आता है — पहले भी आता था, कल भी आएगा।" },
            { bn: "If you heat ice, it melts; If plants don't get water, they die; If babies are hungry, they cry।", en: "If you heat ice, it melts; If plants don't get water, they die; If babies are hungry, they cry.", hi: "If you heat ice, it melts; If plants don't get water, they die; If babies are hungry, they cry।" },
            { bn: "গঠন সবচেয়ে সহজ — দুই অংশেই present simple; he/she/it-এ ক্রিয়ায় s, নেগেটিভে don't/doesn't।", en: "The formation is the easiest — present simple in both halves; s on he/she/it verbs, don't/doesn't in negatives.", hi: "बनावट सबसे आसान — दोनों हिस्सों में present simple; he/she/it पर क्रिया में s, निषेध में don't/doesn't।" },
            { bn: "বাংলার 'হলে' এখানে হুবহু বসে — 'বরফ গরম করলে গলে যায়'; বাংলাও দুই অংশেই বর্তমান, তাই এই ধরনে ভুল কম।", en: "Bengali 'hole' fits exactly here — 'baraf gorm korle golo jay'; Bengali too keeps the present in both halves, so this type produces the fewest errors.", hi: "बांग्ला 'हले' यहाँ हूबहू बैठता है — 'বরফ গরম করলে গলে যায়'; बांग्ला भी दोनों हिस्सों में present रखता है, इसलिए इस प्रकार में गलती कम।" },
            { bn: "বোনাস — এই ধরনে if-এর জায়গায় when-ও চলে, অর্থ প্রায় এক: When you heat ice, it melts।", en: "A bonus — in this type when can sit where if sits, meaning nearly the same: When you heat ice, it melts.", hi: "बोनस — इस प्रकार में if की जगह when भी चलता है, अर्थ लगभग एक: When you heat ice, it melts।" },
            { bn: "কারণটা সহজ — সত্যিটা ঘটতেই ঘটে, শর্ত নামের দরকারই পড়ে না।", en: "The reason is simple — the truth keeps happening, it hardly needs the name of a condition.", hi: "कारण सरल है — सत्य घटित ही होता रहता है, शर्त का नाम भी दरकार नहीं पड़ता।" },
            { bn: "ব্যবহারের জায়গা — বিজ্ঞানের কথা, মেশিনের নিয়ম, নিজের অভ্যাসের ফল: If I drink tea at night, I don't sleep well।", en: "Where you use it — science talk, machine rules, the fruits of your own habits: If I drink tea at night, I don't sleep well.", hi: "इस्तेमाल की जगह — विज्ञान की बात, मशीन के नियम, अपनी आदतों का परिणाम: If I drink tea at night, I don't sleep well।" },
          ],
          examples: [
            { wrong: "If you will heat ice, it melts.", right: "If you heat ice, it melts.", note: { bn: "Type 0-তেও নিয়ম এক — if-অংশে will নয়, সাধারণ present: heat।", en: "Even in Type 0 the rule holds — no will in the if-part, plain present: heat.", hi: "Type 0 में भी नियम वही — if-भाग में will नहीं, साधारण present: heat।" } },
            { wrong: "If my father have time, he cooks dinner himself.", right: "If my father has time, he cooks dinner himself.", note: { bn: "দুই অংশেই present — আর my father = he, তাই has; Type 0-তেও s-চিহ্ন খুঁটিয়ে রাখতে হয়।", en: "Both halves stay present — and my father = he, so has; even Type 0 demands careful s-marks.", hi: "दोनों भाग present में — और my father = he, इसलिए has; Type 0 में भी s-चिह्न का ध्यान रखना पड़ता है।" } },
            { wrong: "If plants don't get water, they died.", right: "If plants don't get water, they die.", note: { bn: "চিরন্তন ফল — die; died হলে বক্তব্য দাঁড়ায় 'অতীতে মারা গিয়েছিল', নিয়মটা হারিয়ে যায়।", en: "The timeless fruit — die; with died the claim becomes 'died in the past', and the rule is lost.", hi: "सदा-स्थायी परिणाम — die; died कर देने से बात बन जाती है 'अतीत में मर गए', नियम खो जाता है।" } },
            { wrong: "If babies is hungry, they cry.", right: "If babies are hungry, they cry.", note: { bn: "বহুবচন babies → are; Type 0-এর শর্ত-অংশেও be-verb মেলাতে হয়।", en: "Plural babies → are; even the condition half of Type 0 needs its be-verb matched.", hi: "बहुवचन babies → are; Type 0 के शर्त-भाग में भी be-verb मिलाना ज़रूरी।" } },
            { wrong: "If I will drink tea at night, I don't sleep well.", right: "If I drink tea at night, I don't sleep well.", note: { bn: "নিজের অভ্যাসের ফলও Type 0 — শর্তে present (drink), ফলে present (don't sleep); will-এর দরকার নেই।", en: "The fruit of your own habit is Type 0 too — present in the condition (drink), present in the result (don't sleep); no will needed.", hi: "अपनी आदत का परिणाम भी Type 0 — शर्त में present (drink), परिणाम में present (don't sleep); will की दरकार नहीं।" } },
          ],
        },
        {
          heading: {
            bn: "🔮 Type 1 — বাস্তব ভবিষ্যৎ: শর্তে present, ফলে will",
            en: "🔮 Type 1 — real future: present in the condition, will in the result",
            hi: "🔮 Type 1 — वास्तविक भविष्य: शर्त में present, परिणाम में will",
          },
          lead: {
            bn: "বাস্তব প্ল্যান, প্রমিজ, হুমকি — সব এখানে; আর এখানেই ১ নম্বর ভুল।",
            en: "Real plans, promises, warnings — all live here, and so does mistake number one.",
            hi: "असली योजना, वादा, चेतावनी — सब यहीं; और नंबर-एक गलती भी यहीं।",
          },
          formula: {
            bn: "If + বর্তমান (present), ... will + V1",
            en: "If + present, ... will + V1",
            hi: "If + present, ... will + V1",
          },
          points: [
            { bn: "Type 1 বলে এমন শর্ত যা সত্যিই ঘটতে পারে — আজ, কাল, সপ্তাহে।", en: "Type 1 covers conditions that can really happen — today, tomorrow, this week.", hi: "Type 1 वे शर्तें बताता है जो सच में घट सकती हैं — आज, कल, इस हफ़्ते।" },
            { bn: "If you study, you will pass; If it rains, we will stay home; If she doesn't hurry, she will miss the bus।", en: "If you study, you will pass; If it rains, we will stay home; If she doesn't hurry, she will miss the bus.", hi: "If you study, you will pass; If it rains, we will stay home; If she doesn't hurry, she will miss the bus।" },
            { bn: "গঠন — if-অংশে present simple (অর্থ ভবিষ্যতের হলেও), ফলে will + V1।", en: "Formation — present simple in the if-part (even though the meaning is future), will + V1 in the result.", hi: "बनावट — if-भाग में present simple (अर्थ भविष्य का होने पर भी), परिणाम में will + V1।" },
            { bn: "১ নম্বর ভুল — 'যদি তুমি পড়বে' শুনে If you will study লেখা; মনে রাখুন, শর্তের ভবিষ্যৎ বোঝায় বর্তমান কাল।", en: "Mistake number one — hearing 'jodi tumi porbe' and writing If you will study; remember, English shows the condition's future with the present tense.", hi: "नंबर-एक गलती — 'यदি তুমি পড়বে' सुनकर If you will study लिखना; याद रखें, शर्त का भविष्य present काल से बताया जाता है।" },
            { bn: "ফলাফলে সবসময় will লাগবে না — can/may-ও চলে: If you finish early, you can watch TV।", en: "The result does not always need will — can/may work too: If you finish early, you can watch TV.", hi: "परिणाम में हमेशा will ज़रूरी नहीं — can/may भी चलते हैं: If you finish early, you can watch TV।" },
            { bn: "নির্দেশ-অনুরোধে ফলটা হয় খালি আদেশ: If Rima comes, tell her to call me।", en: "For instructions and requests the result may be a bare command: If Rima comes, tell her to call me.", hi: "निर्देश-निवेदन में परिणाम खाली आदेश हो सकता है: If Rima comes, tell her to call me।" },
            { bn: "নেগেটিভ শর্তে don't/doesn't: If he doesn't call, I will ask Mina।", en: "Negatives in the condition take don't/doesn't: If he doesn't call, I will ask Mina.", hi: "शर्त के निषेध में don't/doesn't: If he doesn't call, I will ask Mina।" },
          ],
          examples: [
            { wrong: "If she will pass the exam, her father will buy her a phone.", right: "If she passes the exam, her father will buy her a phone.", note: { bn: "দুই will-এর প্রলোভন — শর্ত passes (present), ফল will buy; will এক বাক্যে একবারই।", en: "Resist the pull of two wills — condition passes (present), result will buy; will appears once per sentence.", hi: "दो will के लोभ से बचें — शर्त passes (present), परिणाम will buy; will एक वाक्य में एक बार ही।" } },
            { wrong: "If you not hurry, you will miss the bus.", right: "If you don't hurry, you will miss the bus.", note: { bn: "শর্তের নেগেটিভ present-এ don't/doesn't + V1 — don't hurry; will-এর জায়গা শুধু ফলে।", en: "The condition's negative takes don't/doesn't + V1 — don't hurry; will's seat is only in the result.", hi: "शर्त का निषेध don't/doesn't + V1 लेता है — don't hurry; will की जगह केवल परिणाम में।" } },
            { wrong: "If the rain stops, we will going to the field.", right: "If the rain stops, we will go to the field.", note: { bn: "will-এর পরে V1 — will go; will going-এর মতো জোড়া ইংরেজিতে নেই।", en: "After will comes V1 — will go; no pairing like 'will going' exists in English.", hi: "will के बाद V1 — will go; 'will going' जैसी जोड़ी अंग्रेज़ी में नहीं।" } },
            { wrong: "If Rima will come, please tell her to call me.", right: "If Rima comes, please tell her to call me.", note: { bn: "ফল আদেশ হলেও নিয়ম এক — শর্ত present (comes); আদেশ বসে ফলাফলের চেয়ারে।", en: "Even when the result is an order, the rule holds — condition in the present (comes); the command sits in the result's chair.", hi: "परिणाम आदेश होने पर भी नियम वही — शर्त present (comes); आदेश परिणाम की कुर्सी पर बैठता है।" } },
            { wrong: "We will start the match if the ground will be dry.", right: "We will start the match if the ground is dry.", note: { bn: "if মাঝে হলেও if-অংশের ভেতরে ভবিষ্যৎ ঢোকে না — is; will be বাদ।", en: "Even with if in the middle, no future enters the if-part — is; drop will be.", hi: "if बीच में होने पर भी if-भाग में भविष्य नहीं घुसता — is; will be हटाइए।" } },
          ],
        },
        {
          heading: {
            bn: "🦋 Type 2 — এখনকার কল্পনা: শর্তে past রূপ, ফলে would",
            en: "🦋 Type 2 — unreal now: past form in the condition, would in the result",
            hi: "🦋 Type 2 — अभी की कल्पना: शर्त में past रूप, परिणाम में would",
          },
          lead: {
            bn: "স্বপ্ন দেখার ভাষা — ক্রিয়া past রূপে যায়, অর্থ থাকে বর্তমানেই।",
            en: "The language of dreams — the verb wears its past form while the meaning stays in the present.",
            hi: "सपने देखने की भाषा — क्रिया past रूप में, अर्थ वर्तमान में ही।",
          },
          formula: {
            bn: "If + past রূপ (V2), ... would + V1",
            en: "If + past form (V2), ... would + V1",
            hi: "If + past रूप (V2), ... would + V1",
          },
          points: [
            { bn: "Type 2 বলে এমন শর্ত যা এখন সত্য নয় — স্বপ্ন, আক্ষেপ, মনের খেলা।", en: "Type 2 covers conditions that are not true now — dreams, regrets, mind-games.", hi: "Type 2 वे शर्तें बताता है जो अभी सत्य नहीं — सपने, अफ़सोस, मन का खेल।" },
            { bn: "If I had a million taka, I would open a library; If I had wings, I would fly to Cox's Bazar।", en: "If I had a million taka, I would open a library; If I had wings, I would fly to Cox's Bazar.", hi: "If I had a million taka, I would open a library; If I had wings, I would fly to Cox's Bazar।" },
            { bn: "গঠন — if-অংশে ক্রিয়ার past রূপ (V2), ফলে would + V1।", en: "Formation — the past form (V2) in the if-part, would + V1 in the result.", hi: "बनावट — if-भाग में क्रिया का past रूप (V2), परिणाम में would + V1।" },
            { bn: "সবচেয়ে গুরুত্বপূর্ণ — past রূপ বসলেও অর্থ অতীতের নয়, বর্তমানের: 'গাড়ি থাকত' মানে গাড়িটা এখন নেই।", en: "The most important point — although the verb wears its past form, the meaning is not past but present: 'the car were here' means the car is not here now.", hi: "सबसे ज़रूरी बात — क्रिया past रूप में जाती है पर अर्थ अतीत का नहीं, वर्तमान का: 'गাড़ি থাকত' का मतलब गाड़ी अभी नहीं है।" },
            { bn: "বাংলায় কল্পনার চিহ্ন ক্রিয়ার -ত: থাকত, কিনতাম, করতাম — ইংরেজির past রূপ ঠিক ওই চেয়ারে বসে।", en: "Bengali marks imagination with the -t ending on the verb: thakto, kintam, kortam — English's past form sits exactly in that chair.", hi: "बांग्ला में कल्पना का चिह्न क्रिया का -त है: থাকত, কিনতাম, করতাম — अंग्रेज़ी का past रूप ठीक उसी की कुर्सी पर बैठता है।" },
            { bn: "কল্পনার জগতে সব কর্তার সঙ্গে were — If I were you, I would say sorry first; If he were taller, he would join the army।", en: "In the imagined world every subject takes were — If I were you, I would say sorry first; If he were taller, he would join the army.", hi: "कल्पना की दुनिया में हर कर्ता के साथ were — If I were you, I would say sorry first; If he were taller, he would join the army।" },
            { bn: "নেগেটিভ: If I didn't have exams, I would join the tour; জোড়া মিলান — had...would, didn't...wouldn't।", en: "Negatives: If I didn't have exams, I would join the tour; match the pairs — had...would, didn't...wouldn't.", hi: "निषेध: If I didn't have exams, I would join the tour; जोड़ी मिलाएँ — had...would, didn't...wouldn't।" },
          ],
          examples: [
            { wrong: "If I have a million taka, I would open a library.", right: "If I had a million taka, I would open a library.", note: { bn: "কোটি টাকা এখন নেই — কল্পনা → Type 2; শর্তে had, ফলে would — জোড়া মিলল।", en: "You do not have a million taka now — imagination → Type 2; had in the condition, would in the result — the pair matches.", hi: "करोड़ टाका अभी नहीं है — कल्पना → Type 2; शर्त में had, परिणाम में would — जोड़ी मिल गई।" } },
            { wrong: "If I was you, I would apologise first.", right: "If I were you, I would apologise first.", note: { bn: "If I were you মুখস্থ জোড়া — কল্পনার জগতে was নয়, were; এই একটা বাক্য মুখস্থ থাকলেই অর্ধেক ভুল বন্ধ।", en: "'If I were you' is a set pair — in the imagined world not was but were; memorising this one sentence stops half the errors.", hi: "'If I were you' एक पक्की जोड़ी है — कल्पना की दुनिया में was नहीं, were; यह एक वाक्य रट लेने से आधी गलतियाँ रुक जाती हैं।" } },
            { wrong: "If he know her number, he would call her now.", right: "If he knew her number, he would call her now.", note: { bn: "নম্বরটা জানে না — কল্পনা → শর্তে past রূপ knew; know থাকলে Type 1-এর ছায়া পড়ে অর্থ বদলে যায়।", en: "He does not know the number — imagination → past form knew; with know the sentence drifts toward Type 1 and the meaning shifts.", hi: "नंबर जानता नहीं — कल्पना → शर्त में past रूप knew; know रहने पर वाक्य Type 1 की ओर झुककर अर्थ बदल देता है।" } },
            { wrong: "If we lived in Dhaka, we don't spend so much on the bus.", right: "If we lived in Dhaka, we wouldn't spend so much on the bus.", note: { bn: "ঢাকায় থাকি না — কল্পনার ফলে would-পরিবার: wouldn't spend; don't spend Type 0-এর চেয়ার।", en: "You do not live in Dhaka — the imagined result takes the would-family: wouldn't spend; don't spend belongs to Type 0's chair.", hi: "ঢাকায় नहीं रहते — कल्पना का परिणाम would-परिवार लेता है: wouldn't spend; don't spend Type 0 की कुर्सी है।" } },
            { wrong: "If I had wings, I will fly to Cox's Bazar.", right: "If I had wings, I would fly to Cox's Bazar.", note: { bn: "ডানা নেই — কল্পনার ফল will নয়, would; had-এর জুটি সবসময় would।", en: "You have no wings — the imagined result takes not will but would; the partner of had is always would.", hi: "पंख नहीं हैं — कल्पना का परिणाम will नहीं, would; had का जोड़ीदार सदा would।" } },
          ],
        },
        {
          heading: {
            bn: "🕰️ Type 3 — অতীতের আফসোস, পরের লেভেলের ঝলক",
            en: "🕰️ Type 3 — past regrets, a glimpse of the next level",
            hi: "🕰️ Type 3 — अतीत का अफ़सोस, अगले स्तर की झलक",
          },
          lead: {
            bn: "বিগিনার পাঠ শেষ — তবু জেনে রাখুন, অতীতের শর্তেরও একটা ধরন আছে।",
            en: "The beginner lesson ends here — but know that the past has its own conditional too.",
            hi: "बिगिनर पाठ यहीं खत्म — पर जान लीजिए, अतीत की शर्त का भी एक प्रकार है।",
          },
          formula: {
            bn: "If + had + V3, ... would have + V3",
            en: "If + had + V3, ... would have + V3",
            hi: "If + had + V3, ... would have + V3",
          },
          points: [
            { bn: "Type 3 বলে এমন শর্ত যা অতীতে ঘটেনি — এখন আর বদলানো যায় না: If I had studied, I would have passed।", en: "Type 3 covers conditions that did not happen in the past — nothing can change them now: If I had studied, I would have passed.", hi: "Type 3 वे शर्तें बताता है जो अतीत में घटी ही नहीं — अब बदलना असंभव: If I had studied, I would have passed।" },
            { bn: "গঠন — if-অংশে had + V3, ফলে would have + V3।", en: "Formation — had + V3 in the if-part, would have + V3 in the result.", hi: "बनावट — if-भाग में had + V3, परिणाम में would have + V3।" },
            { bn: "এই ধরন বিগিনার পাঠের বাইরে — পরের লেভেলের পাঠে বিস্তারিত শিখবেন।", en: "This type lies beyond the beginner lesson — you will learn it in detail at the next level.", hi: "यह प्रकार बिगिनर पाठ से बाहर है — अगले स्तर के पाठ में विस्तार से सीखेंगे।" },
            { bn: "আপাতত চেনা-জানাই যথেষ্ট — অতীতের আফসোস শোনলেই had + V3...would have + V3 বুঝবেন।", en: "For now, recognition is enough — whenever you hear a past regret, read it as had + V3...would have + V3.", hi: "फिलहाल पहचानना ही काफ़ी — अतीत का अफ़सोस सुनते ही had + V3...would have + V3 समझिए।" },
          ],
          examples: [
            { wrong: "If I studied medicine, I would become a doctor.", right: "If I had studied medicine, I would have become a doctor.", note: { bn: "অতীতে পড়েননি — অতীতের কল্পনা → Type 3: had studied...would have become; Type 2 (studied...would become) বললে অর্থ দাঁড়ায় 'এখন'।", en: "You did not study medicine — an unreal past → Type 3: had studied...would have become; a Type 2 shape would shift the meaning to 'now'.", hi: "अतीत में पढ़ा नहीं — अतीत की कल्पना → Type 3: had studied...would have become; Type 2 कहा तो अर्थ 'अभी' हो जाता।" } },
            { wrong: "If she had left earlier, she will catch the train.", right: "If she had left earlier, she would have caught the train.", note: { bn: "had + V3-এর জুটি would have + V3 — will নয়; ট্রেন তো চলে গেছে।", en: "The partner of had + V3 is would have + V3 — not will; the train is already gone.", hi: "had + V3 का जोड़ीदार would have + V3 — will नहीं; ट्रेन जा चुकी है।" } },
          ],
        },
        {
          heading: {
            bn: "⚠️ বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "⚠️ Common mistakes by Bengali speakers",
            hi: "⚠️ बांग्लाभाषी छात्रों की आम गलतियाँ",
          },
          lead: {
            bn: "এই ভুলগুলো ক্লাসরুম-চ্যাট-ইন্টারভিউ সবখানেই — প্রতিটার পেছনে বাংলার একটা অভ্যাস।",
            en: "These mistakes fill classrooms, chats and interviews — behind each sits a Bengali habit.",
            hi: "ये गलतियाँ क्लासरूम-चैट-इंटरव्यू हर जगह — हर एक के पीछे बांग्ला की एक आदत।",
          },
          points: [
            { bn: "এই ভুলগুলো ক্লাসরুমে, চ্যাটে, ইন্টারভিউতে সবচেয়ে বেশি দেখা যায়।", en: "These mistakes are the most common in our classrooms, chats and interviews.", hi: "ये गलतियाँ हमारे क्लासरूम, चैट और इंटरव्यू में सबसे ज़्यादा दिखती हैं।" },
            { bn: "প্রতিটার পেছনে 'যদি...তাহলে'-এর অভ্যাস — দুই অংশেই সময়ের রূপ বসানো, বা কল্পনা-বাস্তবের সীমানা মেশানো।", en: "Behind every one sits the 'jodi...tahole' habit — putting a time form in both halves, or blurring the border between imagination and reality.", hi: "हर एक के पीछे 'यদি...ताहले' की आदत — दोनों हिस्सों में समय का रूप बिठाना, या कल्पना-वास्तव की सीमा मिला देना।" },
            { bn: "দোষ আপনার নয়, দুই ভাষার প্যাটার্নের ফারাকের।", en: "The fault is not yours; it is the gap between two languages' patterns.", hi: "दोष आपका नहीं, दोनों भाषाओं के पैटर्न का फ़र्क़ है।" },
            { bn: "ভুলটা ধরুন বাংলা বাক্যটা চিনে — তারপর ঠিক বাক্যটা জোরে তিনবার বলে নিন।", en: "Catch the Bengali sentence behind each error, then say the correct sentence aloud three times.", hi: "हर गलती के पीछे का बांग्ला वाक्य पकड़ें, फिर सही वाक्य तीन बार ज़ोर से बोलें।" },
            { bn: "কানে গেঁথে গেলেই বলার সময় আর ভুল বেরোয় না।", en: "Once it is rooted in the ear, it stops coming out wrong.", hi: "कान में बैठ गया तो बोलते समय गलती निकलेगी ही नहीं।" },
          ],
          examples: [
            { wrong: "If I will go to Dhaka next week, I will visit Lalbagh.", right: "If I go to Dhaka next week, I will visit Lalbagh.", note: { bn: "বাংলা 'যদি যাব...দেখব' — দুই ভবিষ্যৎ; ইংরেজিতে ভবিষ্যৎ একবার, ফলের অংশে: will visit।", en: "Bengali 'jodi jabo...dekhbo' has two futures; English allows the future once, in the result half: will visit.", hi: "बांग्ला 'যদি যাব...দেখব' — दो भविष्य; अंग्रेज़ी में भविष्य एक बार, परिणाम में: will visit।" } },
            { wrong: "If I would have more time, I would learn the guitar.", right: "If I had more time, I would learn the guitar.", note: { bn: "if-অংশে would ঢোকে না — শর্তে past রূপ had; would-এর সিংহাসন ফলের অংশে।", en: "No would enters the if-part — the condition takes the past form had; would's throne is in the result half.", hi: "if-भाग में would नहीं घुसता — शर्त में past रूप had; would का सिंहासन परिणाम में।" } },
            { wrong: "If she was the manager, she will change the office timings.", right: "If she were the manager, she would change the office timings.", note: { bn: "সে ম্যানেজার নন — কল্পনা; মিশ্র বাক্য দুই জগতের টানাপোড়েন — were...would মিলিয়ে নিন।", en: "She is not the manager — imagination; a mixed sentence is a tug-of-war between two worlds — match were...would.", hi: "वे मैनेजर नहीं हैं — कल्पना; मिश्रित वाक्य दो दुनिया का रस्साकशी है — were...would मिला लें।" } },
            { wrong: "If he don't call me tonight, I will ask Mina.", right: "If he doesn't call me tonight, I will ask Mina.", note: { bn: "শর্ত present simple-এ চলে — he → doesn't; Type 1-এর ভেতরেও don't/doesn't-এর ভাগ মানতে হয়।", en: "The condition runs on present simple — he → doesn't; even inside Type 1 the don't/doesn't split must be honoured.", hi: "शर्त present simple में चलती है — he → doesn't; Type 1 के भीतर भी don't/doesn't का विभाजन मानना होगा।" } },
            { wrong: "If it rains today, we wouldn't play.", right: "If it rains today, we won't play.", note: { bn: "শর্ত present (rains) মানে Type 1 — ফলে will-পরিবার: won't; wouldn't শুধু past-রূপ শর্তের জুটি।", en: "A present condition (rains) means Type 1 — the result takes the will-family: won't; wouldn't pairs only with a past-form condition.", hi: "शर्त present (rains) है तो Type 1 — परिणाम will-परिवार: won't; wouldn't केवल past-रूप शर्त का जोड़ीदार।" } },
            { wrong: "If I am a bird, I would fly away.", right: "If I were a bird, I would fly away.", note: { bn: "পাখি তো নন — কল্পনা → were...would; 'If I am' শুনলেই বুঝবেন Type 2 ভেঙে পড়েছে।", en: "You are no bird — imagination → were...would; the moment you hear 'If I am', you know Type 2 has collapsed.", hi: "आप पक्षी नहीं — कल्पना → were...would; 'If I am' सुनते ही समझिए Type 2 टूट गया।" } },
          ],
        },
        {
          heading: {
            bn: "📖 ছোট গল্পে দেখা যাক",
            en: "📖 See it in a mini story",
            hi: "📖 एक छोटी कहानी में देखें",
          },
          lead: {
            bn: "রিমা-ইমরানের পিকনিকের কথাতেই তিন ধরন জীবন্ত — শেষে পুরো পাঠ এক নজরে।",
            en: "Rima and Imran's picnic talk brings all three types alive — then the whole lesson at a glance.",
            hi: "रिमा-इमरान की पिकनिक-बातचीत में तीनों प्रकार जीवंत — फिर पूरा पाठ एक नज़र में।",
          },
          points: [
            { bn: "রিমা আর ইমরান পিকনিক নিয়ে কথা বলছে — ইমরান: If it rains tomorrow, we will move the picnic to Friday।", en: "Rima and Imran are talking about the school picnic — Imran: If it rains tomorrow, we will move the picnic to Friday.", hi: "রিমা और ইমরান पिकनिक पर बात कर रहे हैं — ইমরান: If it rains tomorrow, we will move the picnic to Friday।" },
            { bn: "রিমার শুক্রবার পরীক্ষা: If I miss it, my mother will be angry — আর স্বপ্ন: if I were the headmistress, I would cancel exams forever!", en: "Rima's Friday exam: If I miss it, my mother will be angry — and the dream: if I were the headmistress, I would cancel exams forever!", hi: "রিমা की शुक्रবार की परीक्षा: If I miss it, my mother will be angry — ঔর স্বপ্ন: if I were the headmistress, I would cancel exams forever!" },
            { bn: "ইমরান: If I get time tonight, I will make a new plan on paper — রিমা: if the bus doesn't come by eight, we will walk to the market।", en: "Imran: If I get time tonight, I will make a new plan on paper — Rima: if the bus doesn't come by eight, we will walk to the market.", hi: "ইমরান: If I get time tonight, I will make a new plan on paper — রিমা: if the bus doesn't come by eight, we will walk to the market।" },
            { bn: "খেয়াল করুন — বাস্তব প্ল্যানে Type 1 (rains...will move, get...will make, doesn't come...will walk), স্বপ্নে Type 2 (were...would cancel)।", en: "Notice — real plans take Type 1 (rains...will move, get...will make, doesn't come...will walk), the dream takes Type 2 (were...would cancel).", hi: "ध्यान दें — वास्तविक योजना में Type 1 (rains...will move, get...will make, doesn't come...will walk), सपने में Type 2 (were...would cancel)।" },
            { bn: "এক নজরে — Type 0: দুই অংশেই present, If you heat ice, it melts।", en: "At a glance — Type 0: present in both halves, If you heat ice, it melts.", hi: "एक नज़र में — Type 0: दोनों भागों में present, If you heat ice, it melts।" },
            { bn: "এক নজরে — Type 1: if + present → will + V1 — If it rains, we will stay home।", en: "At a glance — Type 1: if + present → will + V1 — If it rains, we will stay home.", hi: "एक नज़र में — Type 1: if + present → will + V1 — If it rains, we will stay home।" },
            { bn: "এক নজরে — Type 2: if + past রূপ → would + V1 — If I had wings, I would fly।", en: "At a glance — Type 2: if + past form → would + V1 — If I had wings, I would fly.", hi: "एक नज़र में — Type 2: if + past रूप → would + V1 — If I had wings, I would fly।" },
            { bn: "মনে রাখুন — if-এর পরে will/would কখনো নয়; if-অংশ আগে হলে কমা, মাঝে হলে কমা নেই।", en: "Remember — never will/would right after if; comma after the if-part when it comes first, no comma when if sits in the middle.", hi: "याद रखें — if के बाद will/would कभी नहीं; if-भाग पहले हो तो कॉमा, बीच में हो तो कॉमा नहीं।" },
          ],
          examples: [
            { wrong: "If Imran will miss the bus, he will walk.", right: "If Imran misses the bus, he will walk.", note: { bn: "গল্পের বাস্তব প্ল্যানও Type 1 — শর্ত misses (present), ফল will walk।", en: "Even the story's real plan is Type 1 — condition misses (present), result will walk.", hi: "कहानी की वास्तविक योजना भी Type 1 — शर्त misses (present), परिणाम will walk।" } },
            { wrong: "If Rima is taller, she would join the basketball team.", right: "If Rima were taller, she would join the basketball team.", note: { bn: "রিমা লম্বা নন — কল্পনা → were; would-এর আগে অবশ্যই past-রূপ শর্ত।", en: "Rima is not tall — imagination → were; before would the condition must wear a past form.", hi: "রিমা লম্বी नहीं — कल्पना → were; would से पहले शर्त past रूप में होनी चाहिए।" } },
            { wrong: "If the picnic moved to Friday, we will need more food.", right: "If the picnic moves to Friday, we will need more food.", note: { bn: "পিকনিক সত্যিই সরতে পারে — Type 1 → moves...will need; moved বললে কল্পনার জগৎ ধরে নেওয়া হয়।", en: "The picnic really can shift — Type 1 → moves...will need; saying moved treats it as imagination.", hi: "पिकनिक सच में टल सकता है — Type 1 → moves...will need; moved कहने पर वह कल्पना मान ली जाती है।" } },
            { wrong: "If you won't book the bus now, we won't get seats.", right: "If you don't book the bus now, we won't get seats.", note: { bn: "শর্তের নেগেটিভ present-এ don't; won't দুইবার বসালে শর্ত-ফলের সীমানাই মুছে যায়।", en: "The condition's negative stays present — don't; placing won't in both halves erases the condition-result boundary itself.", hi: "शर्त का निषेध present में don't; दोनों जगह won't बिठा देने से शर्त-परिणाम की सीमा ही मिट जाती है।" } },
          ],
        },
      ],
      tips: [
        {
          bn: "if-এর পরে will/would কখনো নয় — শর্তের অংশে সাধারণ রূপ (present বা past), will/would থাকে শুধু ফলাফলের অংশে।",
          en: "Never will/would right after if — the condition takes a plain form (present or past); will/would live only in the result half.",
          hi: "if के बाद will/would कभी नहीं — शर्त में साधारण रूप (present या past); will/would केवल परिणाम के हिस्से में।",
        },
        {
          bn: "বাক্য বানানোর আগে একটা প্রশ্ন করুন: শর্তটা কি সত্যিই ঘটতে পারে? পারলে Type 1 (will), সবসময় ঘটে থাকলে Type 0, কল্পনা হলে Type 2 (would)।",
          en: "Before building a sentence, ask one question: can the condition really happen? If yes, Type 1 (will); if it always happens, Type 0; if it is imagination, Type 2 (would).",
          hi: "वाक्य बनाने से पहले एक सवाल पूछें: क्या शर्त सच में घट सकती है? घट सकती है तो Type 1 (will); हमेशा घटती हो तो Type 0; कल्पना हो तो Type 2 (would)।",
        },
        {
          bn: "Type 0-এর চিহ্ন — always, every time, never আর বিজ্ঞান/নিয়মের কথা; দুই অংশেই present simple।",
          en: "Type 0's marks — always, every time, never and talk of science or rules; present simple in both halves.",
          hi: "Type 0 के चिह्न — always, every time, never और विज्ञान/नियम की बात; दोनों भागों में present simple।",
        },
        {
          bn: "Type 2-এর past রূপ (had, knew, lived) মানে অতীত নয় — এখনকার অসত্য; বাংলার 'থাকত, করতাম'-এর -ত-ই ওই চেয়ারে বসে।",
          en: "Type 2's past forms (had, knew, lived) mean not the past but an unreal now; Bengali's 'thakto, kortam' -t ending sits in exactly that chair.",
          hi: "Type 2 के past रूप (had, knew, lived) का मतलब अतीत नहीं — अभी की असत्यता; बांग्ला 'थाकত, করতাম' का -त ठीक वहीं बैठता है।",
        },
        {
          bn: "If I were you জোড়াটা মুখস্থ করুন — কল্পনার জগতে সব কর্তার সঙ্গে were, was নয়।",
          en: "Memorise the pair 'If I were you' — in the imagined world every subject takes were, not was.",
          hi: "'If I were you' जोड़ी रट लें — कल्पना की दुनिया में हर कर्ता के साथ were, was नहीं।",
        },
        {
          bn: "কমার নিয়ম: If it rains, we will stay home — কমা; We will stay home if it rains — কমা নেই। if দিয়ে শুরু হলে মাঝে কমা।",
          en: "Comma rule: If it rains, we will stay home — comma; We will stay home if it rains — no comma. Sentence starting with if gets a mid-comma.",
          hi: "कॉमा नियम: If it rains, we will stay home — कॉमा; We will stay home if it rains — कॉमा नहीं। if से शुरू हो तो बीच में कॉमा।",
        },
        {
          bn: "ফলাফলের অংশে সবসময় will লাগবে না — can, may বা খালি আদেশও চলে: If you finish early, you can go; If he calls, tell him the truth।",
          en: "The result half does not always need will — can, may or a bare command work too: If you finish early, you can go; If he calls, tell him the truth.",
          hi: "परिणाम में हमेशा will ज़रूरी नहीं — can, may या खाली आदेश भी चलते हैं: If you finish early, you can go; If he calls, tell him the truth।",
        },
        {
          bn: "বাংলা 'যদি সে আসবে' শুনে ঘাবড়াবেন না — ইংরেজিতে ওই ভাবটা আসে সাধারণ বর্তমান দিয়ে: If he comes।",
          en: "Do not panic when Bengali says 'jodi she ashbe' — that meaning enters English through the plain present: If he comes.",
          hi: "बांग्ला 'যদি সে আসবে' सुनकर घबराएँ नहीं — अंग्रेज़ी में वह भाव साधारण present से आता है: If he comes।",
        },
        {
          bn: "জোড়া মিলিয়ে রাখুন: present...will, past...would, present...present — শর্ত-ফলের রূপ মিশে গেলেই বাক্য ভেঙে পড়ে।",
          en: "Keep the pairs matched: present...will, past...would, present...present — the sentence breaks the moment condition and result forms blur.",
          hi: "जोड़ियाँ मिलाकर रखें: present...will, past...would, present...present — शर्त-परिणाम के रूप मिलते ही वाक्य टूट जाता है।",
        },
        {
          bn: "রোজ নিজের জীবন থেকে ৫টা করে বাক্য: একটা Type 0 (অভ্যাস), তিনটা Type 1 (কালকের প্ল্যান), একটা Type 2 (স্বপ্ন) — If I get time, I will... দিয়ে শুরু করুন।",
          en: "Five sentences a day from your own life: one Type 0 (a habit), three Type 1 (tomorrow's plans), one Type 2 (a dream) — start with 'If I get time, I will...'.",
          hi: "रोज़ अपने जीवन से ५-५ वाक्य: एक Type 0 (आदत), तीन Type 1 (कल की योजना), एक Type 2 (सपना) — 'If I get time, I will...' से शुरू करें।",
        },
      ],
      quiz: [
        {
          question: "If you ___ me, I will help you.",
          options: ["will ask", "ask", "asked", "would ask"],
          answer: 1,
          explanation: {
            bn: "বাস্তব শর্ত (Type 1) — if-অংশে present: ask; ফলে will help।",
            en: "A real condition (Type 1) — present in the if-part: ask; will help in the result.",
            hi: "वास्तविक शर्त (Type 1) — if-भाग में present: ask; परिणाम में will help।",
          },
        },
        {
          question: "If it ___ tomorrow, we will stay home.",
          options: ["rained", "will rain", "rains", "would rain"],
          answer: 2,
          explanation: {
            bn: "Type 1 — শর্তে সাধারণ বর্তমান rains; tomorrow থাকলেও if-অংশে will নয়।",
            en: "Type 1 — plain present rains in the condition; even with tomorrow, no will in the if-part.",
            hi: "Type 1 — शर्त में साधारण present rains; tomorrow होने पर भी if-भाग में will नहीं।",
          },
        },
        {
          question: "If I ___ a million taka, I would buy a house.",
          options: ["had", "have", "will have", "am having"],
          answer: 0,
          explanation: {
            bn: "would-এর জুটি past রূপ — had; কোটি টাকা এখন নেই, তাই Type 2-এর শর্ত।",
            en: "The partner of would is the past form — had; you have no million taka now, so Type 2's condition.",
            hi: "would का जोड़ीदार past रूप — had; अभी करोड़ टाका नहीं, इसलिए Type 2 की शर्त।",
          },
        },
        {
          question: "Which sentence is correct?",
          options: [
            "If he will come, I will tell him.",
            "If he comes, I will tell him.",
            "If he comes, I would tell him.",
            "If he would come, I will tell him.",
          ],
          answer: 1,
          explanation: {
            bn: "বাস্তব ভবিষ্যৎ — শর্তে present (comes), ফলে will (will tell); will/would if-এর পরে নয়।",
            en: "A real future — present in the condition (comes), will in the result (will tell); no will/would right after if.",
            hi: "वास्तविक भविष्य — शर्त में present (comes), परिणाम में will (will tell); if के बाद will/would नहीं।",
          },
        },
        {
          question: "If I ___ you, I would say sorry first.",
          options: ["am", "was", "were", "be"],
          answer: 2,
          explanation: {
            bn: "কল্পনার জগতে সব কর্তার সঙ্গে were — If I were you মুখস্থ জোড়া।",
            en: "In the imagined world every subject takes were — 'If I were you' is the set pair.",
            hi: "कल्पना की दुनिया में सब कर्ताओं के साथ were — 'If I were you' पक्की जोड़ी।",
          },
        },
        {
          question: "If you heat ice, it ___.",
          options: ["melt", "melts", "melted", "will melted"],
          answer: 1,
          explanation: {
            bn: "Type 0 — দুই অংশেই present; ice = it, তাই melts।",
            en: "Type 0 — present in both halves; ice = it, so melts.",
            hi: "Type 0 — दोनों भागों में present; ice = it, इसलिए melts।",
          },
        },
        {
          question: "If she doesn't hurry, she ___ the train.",
          options: ["misses", "will miss", "missed", "would miss"],
          answer: 1,
          explanation: {
            bn: "শর্ত present (doesn't hurry) → Type 1 — ফলে will miss; won't/would miss-এর জুটি নয়।",
            en: "A present condition (doesn't hurry) → Type 1 — will miss in the result; not the would-family.",
            hi: "शर्त present (doesn't hurry) → Type 1 — परिणाम में will miss; would-परिवार नहीं।",
          },
        },
        {
          question: "If we ___ in Dhaka, we would visit the museum often.",
          options: ["live", "lives", "lived", "will live"],
          answer: 2,
          explanation: {
            bn: "would-এর আগে শর্ত past রূপে — lived; ঢাকায় থাকি না, তাই কল্পনা (Type 2)।",
            en: "Before would the condition takes the past form — lived; you do not live in Dhaka, so it is imagination (Type 2).",
            hi: "would से पहले शर्त past रूप में — lived; ढाका में नहीं रहते, इसलिए कल्पना (Type 2)।",
          },
        },
        {
          question: "Which sentence has the comma in the right place?",
          options: [
            "If it rains we, will stay home.",
            "If, it rains we will stay home.",
            "We will stay home, if it rains.",
            "If it rains, we will stay home.",
          ],
          answer: 3,
          explanation: {
            bn: "if-অংশ শুরুতে হলে শর্ত শেষে কমা — If it rains, we will stay home; if মাঝে হলে কমা নেই।",
            en: "When the if-part opens the sentence, the comma closes the condition — If it rains, we will stay home; no comma when if sits in the middle.",
            hi: "if-भाग शुरुआत में हो तो शर्त के अंत में कॉमा — If it rains, we will stay home; if बीच में हो तो कॉमा नहीं।",
          },
        },
        {
          question: "If he ___ the lottery, he would travel the world.",
          options: ["wins", "won", "will win", "is winning"],
          answer: 1,
          explanation: {
            bn: "would-এর শর্ত past রূপ — won; লটারি এখনো জেতা হয়নি, তাই Type 2-এর কল্পনা।",
            en: "The condition before would takes the past form — won; the lottery is not won yet, so Type 2 imagination.",
            hi: "would से पहले शर्त past रूप में — won; लॉटरी अभी जीती नहीं, इसलिए Type 2 की कल्पना।",
          },
        },
      ],
    },
  },
  /* ── 2. Passive Voice (Beginner) — sortOrder 7 ───────────────────────── */
  {
    topic: "Passive Voice",
    level: "beginner",
    title: "Passive Voice (Beginner)",
    unit: 0,
    sortOrder: 7,
    data: {
      title: {
        bn: "প্যাসিভ ভয়েস — কাজ মুখ্য, কর্তা গৌণ (বিগিনার)",
        en: "Passive Voice — the action first, the doer second (Beginner)",
        hi: "पैसिव वॉइस — काम मुख्य, कर्ता गौण (बिगिनर)",
      },
      intro: {
        bn: "এই পাঠে শিখব passive voice — এমন বাক্য যেখানে কাজটা মুখ্য, কর্তা গৌণ: The thief was caught, English is spoken here। বাংলা কথার ভাষায় passive কম — আমরা বলি 'আমি লিখেছি', 'সে ভেঙেছে'; তাই বাঙালি শিক্ষার্থীরা ইংরেজিতেও passive এড়িয়ে চলেন, অথচ খবর, নোটিশ, নির্দেশ, রেসিপি — সব জায়গায় ওটাই ঘরের ভাষা। মজার কথা, বাংলা লেখ্য ভাষাতেও passive আছে — 'জনৈক আটক হয়েছে', 'অনুষ্ঠান করা হবে' — ইংরেজি এগুলোকেই বলে passive। শুরু করার আগে am/is/are/was/were-এর ব্যবহার হাতে কলমে চলা মানের দরকার; ক্রিয়ার তৃতীয় রূপ V3 (written, done, made, caught) নতুন মনে হলে ভয় নেই — পাঠের ভেতরেই দরকারি রূপগুলো দেখিয়ে দেব। এই পাঠে কর্ম কীভাবে কর্তার চেয়ারে বসে, be-verb কীভাবে কাল বহন করে, কর্তা কখন by-phrase-এ পড়ে আর কখন বাদ পড়ে — সব ধাপে ধাপে শিখব।",
        en: "In this lesson we learn the passive voice — sentences where the action matters and the doer steps back: The thief was caught, English is spoken here. Spoken Bengali rarely uses the passive — we say 'ami likhechhi', 'she bhengechhe' — so Bengali learners avoid it in English too, even though news, notices, instructions and recipes are its home ground. The fun part: written Bengali has the passive as well — 'জনৈক আটক হয়েছে', 'অনুষ্ঠান করা হবে' — and English calls exactly that the passive. Before starting you need am/is/are/was/were working comfortably in your hand; if the third verb form V3 (written, done, made, caught) feels new, no fear — the lesson itself will show you the forms you need. In this lesson we learn, step by step, how the object takes the subject's chair, how the be-verb carries the tense, and when the doer sits in a by-phrase and when it drops out.",
        hi: "इस पाठ में हम passive voice सीखेंगे — ऐसे वाक्य जहाँ काम मुख्य है और कर्ता पीछे हट जाता है: The thief was caught, English is spoken here। बांग्ला की बोलचाल में passive कम है — हम कहते हैं 'আমি লিখেছি', 'সে ভেঙেছে'; इसलिए बांग्लाभाषी छात्र अंग्रेज़ी में भी passive से बचते हैं, हालाँकि खबर, नोटिस, निर्देश, रेसिपी — सब जगह वही घर की भाषा है। मज़ेदार बात, बांग्ला लिखित भाषा में भी passive है — 'জনৈক আটক হয়েছে', 'অনুষ্ঠান করা হবে' — अंग्रेज़ी इन्हीं को passive कहती है। शुरू करने से पहले am/is/are/was/were का इस्तेमाल हाथ में आराम से चलना चाहिए; क्रिया का तीसरा रूप V3 (written, done, made, caught) नया लगे तो डर नहीं — पाठ के भीतर ही ज़रूरी रूप दिखा दिए जाएँगे। इस पाठ में हम कदम-दर-कदम सीखेंगे: कर्म कैसे कर्ता की कुर्सी पर बैठता है, be-verb काल कैसे ढोता है, और कर्ता कब by-phrase में बैठता है और कब निकल जाता है।",
      },
      roadmap: [
        { bn: "🎯 কখন passive — কাজ বড় কথা, কর্তা নয়", en: "🎯 When the passive — the action is the news, not the doer", hi: "🎯 कब passive — काम मुख्य, कर्ता नहीं" },
        { bn: "🏗️ গঠনের তিন ধাপ আর V3-এর ভাণ্ডার", en: "🏗️ The three formation steps and the V3 stock", hi: "🏗️ बनावट के तीन कदम और V3-भंडार" },
        { bn: "🚦 passive চেনা ও বানানোর সংকেত — এক সারণিতে", en: "🚦 Signals for spotting and building the passive — one table", hi: "🚦 passive पहचानने और बनाने के संकेत — एक सारणी में" },
        { bn: "🎭 by-phrase — কর্তা কখন বলবেন, কখন বাদ", en: "🎭 The by-phrase — when to name the doer, when to drop it", hi: "🎭 by-phrase — कर्ता कब कहें, कब छोड़ें" },
        { bn: "⏰ তিন কাল, এক সূত্র — কাল বদলায় শুধু be-verb", en: "⏰ Three tenses, one pattern — only the be-verb carries the tense", hi: "⏰ तीन काल, एक सूत्र — काल बदलता है केवल be-verb" },
        { bn: "🧩 সব ক্রিয়ায় passive হয় না — transitive-এর ঘর", en: "🧩 Not every verb goes passive — only transitive verbs", hi: "🧩 हर क्रिया passive नहीं होती — केवल transitive" },
        { bn: "⚠️ বাঙালি শিক্ষার্থীদের চেনা ভুলগুলো", en: "⚠️ The familiar Bengali-speaker mistakes", hi: "⚠️ बांग्लाभाषी छात्रों की जानी-पहचानी गलतियाँ" },
        { bn: "📖 মিনার নোটিশ-বোর্ডের গল্পে রিক্যাপ", en: "📖 Recap through Mina's notice-board story", hi: "📖 मीना की नोटिस-बोर्ड कहानी में रिकैप" },
      ],
      sections: [
        {
          heading: {
            bn: "🎯 কখন ব্যবহার হয় — কাজ বড় কথা, কর্তা নয়",
            en: "🎯 When to use it — the action is the news, not the doer",
            hi: "🎯 कब इस्तेमाल करें — काम ही खबर है, कर्ता नहीं",
          },
          lead: {
            bn: "কর্তার চেয়ার কখন খালি পড়ে — তিনটা অবস্থা চিনলেই passive বুঝবেন।",
            en: "When does the doer's chair sit empty? Recognise the three situations and the passive is yours.",
            hi: "कर्ता की कुर्सी कब खाली रहती है — तीन हालतें पहचानिए, passive समझ आ जाएगा।",
          },
          points: [
            { bn: "**Passive** — এমন বাক্য যেখানে কাজটা বা কাজের ফল বড় কথা, কর্তা নয়।", en: "**Passive** — the kind of sentence where the action or its result is the point, not the doer.", hi: "**Passive** — ऐसा वाक्य जहाँ काम या उसका परिणाम बड़ी बात है, कर्ता नहीं।" },
            { bn: "কর্তা **অজানা** — My umbrella was stolen: কে চুরি করল, জানি না।", en: "Doer **unknown** — My umbrella was stolen: who stole it, nobody knows.", hi: "कर्ता **अज्ञात** — My umbrella was stolen: किसने चुराया, पता नहीं।" },
            { bn: "কর্তা **স্পষ্ট** — The thief was caught: ধরবে পুলিশই, বলার দরকার নেই।", en: "Doer **obvious** — The thief was caught: the police catch thieves, no need to say.", hi: "कर्ता **स्पष्ट** — The thief was caught: पकड़ेगी पुलिस ही, कहने की ज़रूरत नहीं।" },
            { bn: "কর্তা **অপ্রাসঙ্গিক** — This bridge was built in 1982: কে বানাল নয়, কবে বানাল তা-ই খবর।", en: "Doer **irrelevant** — This bridge was built in 1982: not who built it, when is the news.", hi: "कर्ता **अप्रासंगिक** — This bridge was built in 1982: किसने बनाया नहीं, कब बनाया वही खबर।" },
            { bn: "খবর, নোটিশ-বোর্ড, রান্নার রেসিপি, বিজ্ঞানের বই — এই জায়গায় passive-ই ঘরের ভাষা: Sold out, Closed on Mondays, The rice is cooked for twenty minutes।", en: "Newspapers, notice-boards, recipes, science books — these are the passive's home ground: Sold out, Closed on Mondays, The rice is cooked for twenty minutes.", hi: "अख़बार, नोटिस-बोर्ड, रेसिपी, विज्ञान की किताबें — यहीं passive ही घर की भाषा: Sold out, Closed on Mondays, The rice is cooked for twenty minutes।" },
            { bn: "বাংলা কথায় passive কম, তাই ইংরেজিতেও এড়িয়ে চলেন; অথচ বাংলা খবরেই লেখে 'আটক হয়েছে', 'দেওয়া হয়েছে', 'করা হবে' — ওই রূপগুলোর ইংরেজি নামই passive।", en: "Spoken Bengali rarely goes passive, so we avoid it in English too; yet Bengali news itself writes 'আটক হয়েছে', 'দেওয়া হয়েছে', 'করা হবে' — the English name of exactly those forms is the passive.", hi: "बांग्ला बोलचाल में passive कम, इसलिए अंग्रेज़ी में भी बचते हैं; पर बांग्ला खबर में लिखते हैं 'আটক হয়েছে', 'দেওয়া হয়েছে', 'করা হবে' — इन्हीं रूपों का अंग्रेज़ी नाम passive है।" },
            { bn: "এক লাইনে মনে রাখুন — কর্তা বলতে ইচ্ছে করছেন না বা পারছেন না, বাক্যটা passive-এ যাবেই।", en: "One-line rule — if you do not want to say the doer or cannot, the sentence goes passive.", hi: "एक लाइन में याद रखें — कर्ता कहने का मन नहीं या नहीं कर सकते, वाक्य passive में ही जाएगा।" },
          ],
          examples: [
            { wrong: "The thief caught last night near the market.", right: "The thief was caught last night near the market.", note: { bn: "খবরের ভাষা — কে ধরল বলার দরকার নেই, তাই কর্তা হারিয়ে গেলে be-verb লাগবেই: was caught।", en: "News language — who caught him needs no saying, so once the doer is gone the be-verb is a must: was caught.", hi: "खबर की भाषा — किसने पकड़ा, कहने की ज़रूरत नहीं; कर्ता हटते ही be-verb लाज़मी: was caught।" } },
            { wrong: "My umbrella stolen from the stand yesterday.", right: "My umbrella was stolen from the stand yesterday.", note: { bn: "চুরিকারী অজানা — passive-এর ক্লাসিক জায়গা; কিন্তু be-verb ছাড়া passive হয় না: was stolen।", en: "The thief is unknown — the classic passive territory; but no passive without its be-verb: was stolen.", hi: "चोर अज्ञात — passive की क्लासिक जगह; पर be-verb के बिना passive नहीं: was stolen।" } },
            { wrong: "They build this bridge in 1982.", right: "This bridge was built in 1982.", note: { bn: "কে বানাল (they?) বলাই অসম্ভব — কাল অতীত (1982), তাই was built; কর্ম bridge সামনে এল।", en: "Saying who built it ('they'?) is impossible — the time is past (1982), so was built; the object bridge steps to the front.", hi: "किसने बनाया ('they'?) कहना असंभव — काल अतीत (1982), इसलिए was built; कर्म bridge आगे आ गया।" } },
            { wrong: "English speak in many countries.", right: "English is spoken in many countries.", note: { bn: "কে বলে — কোটি মানুষ, বলার নাম নেই; কর্ম English সামনে, ক্রিয়ায় be + V3: is spoken।", en: "Who speaks it — millions, nameless; the object English comes forward and the verb takes be + V3: is spoken.", hi: "कौन बोलता है — करोड़ों लोग, नाम नहीं; कर्म English आगे, क्रिया में be + V3: is spoken।" } },
          ],
        },
        {
          heading: {
            bn: "🏗️ গঠন — কর্ম সামনে, be-verb + V3",
            en: "🏗️ Formation — the object moves up, then be-verb + V3",
            hi: "🏗️ बनावट — कर्म आगे, फिर be-verb + V3",
          },
          lead: {
            bn: "Active থেকে passive-এর রাস্তা মাত্র তিন ধাপ — আর একটা V3-ভাণ্ডার।",
            en: "The road from active to passive is just three steps — plus one stock of V3 forms.",
            hi: "active से passive का रास्ता सिर्फ़ तीन कदम — और एक V3-भंडार।",
          },
          formula: {
            bn: "কর্ম + be-verb + V3 (+ by কর্তা)",
            en: "Object + be-verb + V3 (+ by doer)",
            hi: "कर्म + be-verb + V3 (+ by कर्ता)",
          },
          points: [
            { bn: "Active থেকে passive — ধাপ ১: কর্মটাকে বাক্যের শুরুতে আনুন: Ram writes a letter → A letter...।", en: "From active to passive — step 1: bring the object to the front: Ram writes a letter → A letter...", hi: "active से passive — कदम 1: कर्म को वाक्य की शुरुआत में लाइए: Ram writes a letter → A letter..." },
            { bn: "ধাপ ২: কালের মতো be-verb বসান — present হলে is/are, past হলে was/were, ভবিষ্যতে will be।", en: "Step 2: set the be-verb according to the tense — is/are for present, was/were for past, will be for future.", hi: "कदम 2: काल के मुताबिक be-verb बिठाइए — present में is/are, past में was/were, भविष्य में will be।" },
            { bn: "ধাপ ৩: ক্রিয়ার তৃতীয় রূপ (V3) বসান — A letter is written by Ram।", en: "Step 3: add the third verb form (V3) — A letter is written by Ram.", hi: "कदम 3: क्रिया का तीसरा रूप (V3) जोड़िए — A letter is written by Ram।" },
            { bn: "মূল কর্তা বলতে চাইলে শেষে by-এর পরে পড়ে; বলতে না চাইলে বাদ দিন।", en: "If you want the original subject, it falls at the end after by; if not, drop it.", hi: "असल कर्ता कहना हो तो वह आख़िर में by के बाद आता है; न कहना हो तो छोड़ दीजिए।" },
            { bn: "কাল বদলায় শুধু be-verb — is written, was written, will be written; বাংলার 'করা হয় / করা হয়েছে / করা হবে' পরিবারের সঙ্গে চমৎকার মিল।", en: "Only the be-verb changes with the tense — is written, was written, will be written; a beautiful match with the Bengali 'করা হয় / করা হয়েছে / করা হবে' family.", hi: "काल बदलता है केवल be-verb — is written, was written, will be written; बांग्ला 'করা হয় / করা হয়েছে / করা হবে' परिवार से शानदार मेल।" },
            { bn: "নিচের সারণির V3-রূপগুলো মুখে চলে আসার দিনই passive লেখা হাতের লেখা হয়ে যাবে।", en: "The day the V3 forms in the table below roll off your tongue, writing passives becomes handwriting.", hi: "नीचे सारणी के V3-रूप ज़ुबान पर चलने लगेंगे, उसी दिन passive लिखना हाथ की लिखावट हो जाएगा।" },
          ],
          table: {
            head: [
              { bn: "ক্রিয়া (V1)", en: "Verb (V1)", hi: "क्रिया (V1)" },
              { bn: "তৃতীয় রূপ (V3)", en: "Third form (V3)", hi: "तीसरा रूप (V3)" },
            ],
            rows: [
              [{ bn: "write", en: "write", hi: "write" }, { bn: "written", en: "written", hi: "written" }],
              [{ bn: "make", en: "make", hi: "make" }, { bn: "made", en: "made", hi: "made" }],
              [{ bn: "do", en: "do", hi: "do" }, { bn: "done", en: "done", hi: "done" }],
              [{ bn: "catch", en: "catch", hi: "catch" }, { bn: "caught", en: "caught", hi: "caught" }],
              [{ bn: "sell", en: "sell", hi: "sell" }, { bn: "sold", en: "sold", hi: "sold" }],
              [{ bn: "build", en: "build", hi: "build" }, { bn: "built", en: "built", hi: "built" }],
              [{ bn: "give", en: "give", hi: "give" }, { bn: "given", en: "given", hi: "given" }],
              [{ bn: "find", en: "find", hi: "find" }, { bn: "found", en: "found", hi: "found" }],
            ],
          },
          examples: [
            { wrong: "The letter is written by me yesterday.", right: "The letter was written by me yesterday.", note: { bn: "কাল বদলায় শুধু be-verb — yesterday মানে অতীত, তাই is নয়, was; V3 (written) স্থির থাকে।", en: "Only the be-verb carries the tense — yesterday means past, so not is but was; the V3 (written) stays still.", hi: "काल बदलता है केवल be-verb — yesterday यानी अतीत, इसलिए is नहीं, was; V3 (written) स्थिर रहता है।" } },
            { wrong: "The rooms is cleaned every morning.", right: "The rooms are cleaned every morning.", note: { bn: "be-verb নতুন কর্তার সঙ্গে মেলে — rooms বহুবচন → are; একবচন room হলে is।", en: "The be-verb matches the new subject — rooms is plural → are; with singular room it would be is.", hi: "be-verb नए कर्ता से मेल खाता है — rooms बहुवचन → are; एकवचन room होता तो is।" } },
            { wrong: "This watch will repaired tomorrow.", right: "This watch will be repaired tomorrow.", note: { bn: "ভবিষ্যতের passive = will be + V3; be-verb ছাড়া will repaired-এ কালের চেয়ারই খালি।", en: "The future passive = will be + V3; without the be-verb, 'will repaired' leaves the tense's chair empty.", hi: "भविष्य का passive = will be + V3; be-verb के बिना 'will repaired' में काल की कुर्सी ही खाली।" } },
            { wrong: "The gate opened at six every day.", right: "The gate is opened at six every day.", note: { bn: "কর্ম gate সামনে এলেই passive-এর সূচনা — be-verb ছাড়া শুধু V2 বসালে অর্থ এলোমেলো।", en: "Once the object gate moves up, the passive begins — placing a bare V2 without the be-verb scrambles the meaning.", hi: "कर्म gate आगे आते ही passive की शुरुआत — be-verb के बिना केवल V2 बिठाने से अर्थ बिगड़ जाता है।" } },
            { wrong: "The homework was did by Rafiq.", right: "The homework was done by Rafiq.", note: { bn: "do-র তিন রূপ — do, did, done; be-verb-এর পরে সবসময় তৃতীয় রূপ done।", en: "The three forms of do — do, did, done; after the be-verb always the third form, done.", hi: "do के तीन रूप — do, did, done; be-verb के बाद सदा तीसरा रूप done।" } },
          ],
        },
        {
          heading: {
            bn: "🚦 আভাস শব্দ — passive চেনার ও বানানোর সংকেত",
            en: "🚦 Signal words — spotting and building the passive",
            hi: "🚦 संकेत शब्द — passive पहचानने और बनाने के सुराग",
          },
          lead: {
            bn: "চেনার তিন সংকেত, বানানোর তিন সংকেত — সব এক সারণিতে, সঙ্গে বাংলা-ইংরেজির সেতু।",
            en: "Three signals to spot it, three to build it — all in one table, plus the Bengali-English bridge.",
            hi: "पहचानने के तीन संकेत, बनाने के तीन — सब एक सारणी में, साथ में बांग्ला-अंग्रेज़ी सेतु।",
          },
          points: [
            { bn: "নিচের সারণিতে passive চেনার তিন সংকেত আর বানানোর তিন সংকেত — পাশাপাশি।", en: "The table below puts the three spotting signals and the three building signals side by side.", hi: "नीचे सारणी में passive पहचानने के तीन संकेत और बनाने के तीन — साथ-साथ।" },
            { bn: "পড়তে পড়তে is/are/was/were-এর পরে তৃতীয় রূপ (V3) দেখলেই ডেকে বলুন — এটা passive।", en: "While reading English, whenever you see a third verb form (V3) right after is/are/was/were — point and say: that is a passive.", hi: "पढ़ते-पढ़ते is/are/was/were के तुरंत बाद क्रिया का तीसरा रूप (V3) दिखे — इशारा करके कहिए, यह passive है।" },
            { bn: "বাংলা পাঠে 'আটক হয়েছে', 'করা হয়েছে', 'দেওয়া হবে', 'বলা হয়' দেখলেই বুঝবেন — ইংরেজি অনুবাদে passive আসবে।", en: "In a Bengali text, the forms 'আটক হয়েছে', 'করা হয়েছে', 'দেওয়া হবে', 'বলা হয়' tell you the English translation will be passive.", hi: "बांग्ला पाठ में 'आटক হয়েছে', 'করা হয়েছে', 'দেওয়া হবে', 'বলা হয়' देखते ही समझ जाइए — अंग्रेज़ी अनुवाद में passive आएगा।" },
            { bn: "নোটিশ-বোর্ডের Sold out, Closed, No entry — প্রতিটাই ছোট্ট passive পাঠ।", en: "A notice-board's Sold out, Closed, No entry — each one is a tiny passive lesson.", hi: "नोटिस-बोर्ड का Sold out, Closed, No entry — हर एक छोटा passive पाठ है।" },
          ],
          table: {
            head: [
              { bn: "কাজ", en: "Job", hi: "काम" },
              { bn: "সংকেত", en: "Signal", hi: "संकेत" },
            ],
            rows: [
              [{ bn: "চেনা", en: "spotting", hi: "पहचान" }, { bn: "কর্ম সামনে: A letter...", en: "object up front: A letter...", hi: "कर्म आगे: A letter..." }],
              [{ bn: "চেনা", en: "spotting", hi: "पहचान" }, { bn: "be + V3 জোড়া: is written, was stolen", en: "be + V3 pair: is written, was stolen", hi: "be + V3 जोड़ी: is written, was stolen" }],
              [{ bn: "চেনা", en: "spotting", hi: "पहचान" }, { bn: "মাঝে মাঝে by...: by Ram, by the police", en: "now and then by...: by Ram, by the police", hi: "कभी-कभी by...: by Ram, by the police" }],
              [{ bn: "বানানো", en: "building", hi: "बनाना" }, { bn: "খবর, নোটিশ, নিয়ম, রেসিপি, নির্দেশ", en: "news, notices, rules, recipes, instructions", hi: "खबर, नोटिस, नियम, रेसिपी, निर्देश" }],
              [{ bn: "বানানো", en: "building", hi: "बनाना" }, { bn: "কর্তার নাম নেই বা দরকার নেই", en: "the doer has no name or needs none", hi: "कर्ता का नाम नहीं या ज़रूरत नहीं" }],
              [{ bn: "বানানো", en: "building", hi: "बनाना" }, { bn: "কাজের ফলই বড় কথা", en: "the result is the point", hi: "काम का परिणाम ही बड़ी बात" }],
            ],
          },
          examples: [
            { wrong: "Sweets sell in this shop by the shopkeeper.", right: "Sweets are sold in this shop.", note: { bn: "বিক্রির খবরে কর্তা বাড়তি — Sweets are sold; by-phrase বাদ দিলেই বাক্য নোটিশের মতো হালকা।", en: "In a selling notice the doer is extra — Sweets are sold; drop the by-phrase and the sentence lightens like a notice.", hi: "बिक्री की खबर में कर्ता अतिरिक्त — Sweets are sold; by-phrase हटाइए, वाक्य नोटिस जैसा हल्का हो जाएगा।" } },
            { wrong: "The fish fries in mustard oil for five minutes.", right: "The fish is fried in mustard oil for five minutes.", note: { bn: "রেসিপির ভাষা — কে ভাজবে জিজ্ঞেস হয় না; কর্ম fish সামনে, ক্রিয়ায় is fried।", en: "Recipe language — nobody asks who fries it; the object fish comes up front and the verb becomes is fried.", hi: "रेसिपी की भाषा — कौन तलेगा, यह सवाल नहीं उठता; कर्म fish आगे, क्रिया is fried।" } },
            { wrong: "Every year give prizes to the best students.", right: "Every year prizes are given to the best students.", note: { bn: "কে দেয়? স্কুলই — অজানা কর্তার জায়গায় কর্ম prizes সামনে: are given।", en: "Who gives? The school — with the doer unnamed, the object prizes moves up front: are given.", hi: "कौन देता है? स्कूल — कर्ता बेनाम, कर्म prizes आगे: are given।" } },
            { wrong: "This temple build in the 1800s.", right: "This temple was built in the 1800s.", note: { bn: "নির্মাতা সম্ভবত অজানা — অতীতের কাল (1800s) + অজানা কর্তা = was built; be-verb ভুলে গেলেই বাক্য ভেঙে পড়ে।", en: "The builder is probably unknown — past time (1800s) + unknown doer = was built; forgetting the be-verb is what breaks the sentence.", hi: "निर्माता संभवतः अज्ञात — अतीत काल (1800s) + अज्ञात कर्ता = was built; be-verb भूलने से ही वाक्य टूटता है।" } },
          ],
        },
        {
          heading: {
            bn: "🎭 by-phrase কখন পড়ে, কখন বাদ — কর্তা বলা কি দরকার?",
            en: "🎭 Keep or drop the by-phrase — do you need to name the doer?",
            hi: "🎭 by-phrase कब रहे, कब जाए — कर्ता बताना ज़रूरी है?",
          },
          lead: {
            bn: "কর্তা বলা ঐচ্ছিক — কখন বলবেন, কখন চুপ থাকবেন, এই সিদ্ধান্তই বাক্যকে স্বাভাবিক করে।",
            en: "Naming the doer is optional — deciding when to speak and when to stay silent makes the sentence natural.",
            hi: "कर्ता बताना वैकल्पिक — कब कहें, कब चुप रहें, यही फ़ैसला वाक्य को स्वाभाविक बनाता है।",
          },
          points: [
            { bn: "Passive-এর সৌন্দর্য এই যে কর্তা বলাটা **ঐচ্ছিক**।", en: "The beauty of the passive is that naming the doer is **optional**.", hi: "Passive की खूबसूरती यह है कि कर्ता बताना **वैकल्पिक** है।" },
            { bn: "কর্তা অজানা — by-phrase বাদ: My bike was stolen (কে চুরি করল, জানেন না)।", en: "Doer unknown — drop the by-phrase: My bike was stolen (you do not know who took it).", hi: "कर्ता अज्ञात — by-phrase छोड़ दें: My bike was stolen (किसने लिया, पता नहीं)।" },
            { bn: "কর্তা স্পষ্ট — বাদ: The thief was arrested (ধরবে পুলিশই); The letters are delivered twice a day (পৌঁছাবে ডাক-ব্যবস্থাই)।", en: "Doer obvious — drop it: The thief was arrested (the police arrest); The letters are delivered twice a day (the postal system delivers).", hi: "कर्ता स्पष्ट — छोड़ दें: The thief was arrested (पकड़ेगी पुलिस ही); The letters are delivered twice a day (पहुँचाएगा डाक-तंत्र ही)।" },
            { bn: "কর্তা অপ্রাসঙ্গিক — বাদ: This school was built in 1995 (বিল্ডারের নাম কার জানার? খবরটা তো কবে হল সেটা)।", en: "Doer irrelevant — drop it: This school was built in 1995 (who cares for the builder's name; the news is when).", hi: "कर्ता अप्रासंगिक — छोड़ दें: This school was built in 1995 (बिल्डर का नाम किसे जानना है; खबर तो कब हुआ यह है)।" },
            { bn: "কিন্তু কর্তাই যদি নতুন তথ্য হয়, by-phrase বাধ্যতামূলক: Hamlet was written by Shakespeare; The Taj Mahal was built by Shah Jahan।", en: "But when the doer itself is the new information, the by-phrase is compulsory: Hamlet was written by Shakespeare; The Taj Mahal was built by Shah Jahan.", hi: "पर कर्ता ही नई जानकारी हो तो by-phrase अनिवार्य: Hamlet was written by Shakespeare; The Taj Mahal was built by Shah Jahan।" },
            { bn: "শুধু Hamlet was written বললে গল্পের অর্ধেক মিলিয়ে যায়।", en: "Saying only Hamlet was written loses half the story.", hi: "केवल Hamlet was written कहने से कहानी का आधा हिस्सा मिट जाता है।" },
            { bn: "বাঙালি অভ্যাস — নিয়ম মিলিয়ে সব জায়গায় by me, by him জুড়ে বাক্য ভারী করা; বাংলায় কি 'আমার দ্বারা লেখা হয়েছে' বলেন? কর্তা বাড়তি হলে বাদ দিন।", en: "The Bengali-speaker habit — blindly pasting by me, by him everywhere and weighing the sentence down; do you say 'আমার দ্বারা লেখা হয়েছে' in Bengali? When the doer is extra, drop it.", hi: "बांग्लाभाषी आदत — बिना सोचे हर जगह by me, by him जोड़कर वाक्य भारी करना; बांग्ला में 'আমার দ্বারা লেখা হয়েছে' कहते हैं? कर्ता अतिरिक्त हो तो छोड़ दें।" },
          ],
          examples: [
            { wrong: "The thief was caught by the police last night.", right: "The thief was caught last night.", note: { bn: "by the police বলা বাড়তি — চোর ধরাই পুলিশের কাজ; বাক্য খবরের মতো হালকা হল।", en: "'By the police' is extra — catching thieves is what police do; the sentence now flows like news.", hi: "'by the police' बताना अतिरिक्त — चोर पकड़ना पुलिस का ही काम; वाक्य खबर जैसा हल्का हो गया।" } },
            { wrong: "This school was built in 1995 by the builders.", right: "This school was built in 1995.", note: { bn: "বিল্ডার বিল্ডারই তো — by the builders-এ কোনো নতুন তথ্য নেই; কবে বানানো হল সেটাই খবর।", en: "A builder builds, obviously — 'by the builders' adds no new information; when it was built is the news.", hi: "बिल्डर ही बिल्डर है — 'by the builders' में कोई नई जानकारी नहीं; कब बना, वही खबर।" } },
            { wrong: "Hamlet was written in about 1600.", right: "Hamlet was written by Shakespeare in about 1600.", note: { bn: "এখানে কর্তাই নতুন তথ্য — Shakespeare ছাড়া বাক্যের প্রাণ নেই; তাই by-phrase বাধ্যতামূলক।", en: "Here the doer is the new information — without Shakespeare the sentence has no soul; the by-phrase is compulsory.", hi: "यहाँ कर्ता ही नई जानकारी — Shakespeare के बिना वाक्य प्राणहीन; इसलिए by-phrase अनिवार्य।" } },
            { wrong: "Our house is painted by us every year before Durga Puja.", right: "Our house is painted every year before Durga Puja.", note: { bn: "নিজের বাড়ি নিজেরাই রং করেন — by us স্পষ্ট; বাংলায় 'আমাদের দ্বারা' বলেন তো? ইংরেজিতেও না।", en: "We paint our own house — 'by us' is obvious; do you say 'আমাদের দ্বারা' in Bengali? Nor in English.", hi: "अपना घर हम ही रंगते हैं — 'by us' स्पष्ट; बांग्ला में 'আমাদের দ্বারা' कहते हैं? अंग्रेज़ी में भी नहीं।" } },
          ],
        },
        {
          heading: {
            bn: "⏰ কাল বদলায় শুধু be-verb — passive-এর তিন কাল",
            en: "⏰ Only the be-verb carries the tense — the three tenses of the passive",
            hi: "⏰ काल बदलता है केवल be-verb — passive के तीन काल",
          },
          lead: {
            bn: "সময়ের পুরো বোঝা be-verb-এর কাঁধে — তিন কালের সূত্র এক সারণিতে।",
            en: "The whole weight of time rides on the be-verb — three tense formulas in one table.",
            hi: "समय का पूरा बोझ be-verb के कंधे पर — तीन काल के सूत्र एक सारणी में।",
          },
          formula: {
            bn: "বর্তমান is/are + V3 · অতীত was/were + V3 · ভবিষ্যৎ will be + V3",
            en: "Present is/are + V3 · Past was/were + V3 · Future will be + V3",
            hi: "वर्तमान is/are + V3 · अतीत was/were + V3 · भविष्य will be + V3",
          },
          points: [
            { bn: "Passive-এর কাল-হিসাব এক জায়গায় জমে — বর্তমানে is/are + V3: The shop is opened at nine।", en: "The passive's tense-account settles in one place — present: is/are + V3, The shop is opened at nine.", hi: "Passive का काल-हिसाब एक ही जगह जमा होता है — वर्तमान में is/are + V3: The shop is opened at nine।" },
            { bn: "অতীতে was/were + V3: The shop was opened at nine yesterday।", en: "Past: was/were + V3 — The shop was opened at nine yesterday.", hi: "अतीत में was/were + V3: The shop was opened at nine yesterday।" },
            { bn: "ভবিষ্যতে will be + V3: The shop will be opened at nine tomorrow।", en: "Future: will be + V3 — The shop will be opened at nine tomorrow.", hi: "भविष्य में will be + V3: The shop will be opened at nine tomorrow।" },
            { bn: "মূল কথা — সময়ের সব দায় be-verb-এর; V3 কখনো কাল বদলায় না।", en: "The core point — every duty of the time sits on the be-verb; the V3 never changes its tense.", hi: "मूल बात — समय का सारा बोझ be-verb पर; V3 कभी काल नहीं बदलता।" },
            { bn: "চেনা মিশ্রণ — The letter is written by me yesterday: yesterday অতীতের সংকেত, অথচ is বর্তমানে; শুধরে was করুন।", en: "The familiar mixture — The letter is written by me yesterday: yesterday signals the past while is sits in the present; correct it to was.", hi: "जानी-पहचानी मिश्रण — The letter is written by me yesterday: yesterday अतीत का संकेत, पर is वर्तमान में; उसे was कर दीजिए।" },
            { bn: "আরেকটা সহজ কৌশল — সামনে যে কর্ম বসল, তার সঙ্গেই be-verb মেলান: the gate → is/was, the gates → are/were।", en: "Another easy trick — match the be-verb to whatever object sits at the front: the gate → is/was, the gates → are/were.", hi: "एक और आसान तरकीब — सामने जो कर्म बैठे, उसी से be-verb मिलाइए: the gate → is/was, the gates → are/were।" },
            { bn: "নেগেটিভ: The gate isn't locked; প্রশ্ন: Is the gate locked? — প্রশ্নে be-verb সামনে চলে আসে, V3 পেছনেই থাকে।", en: "Negative: The gate isn't locked; question: Is the gate locked? — in questions the be-verb steps to the front while the V3 stays behind.", hi: "निषेध: The gate isn't locked; प्रश्न: Is the gate locked? — प्रश्न में be-verb आगे आ जाता है, V3 पीछे ही रहता है।" },
          ],
          table: {
            head: [
              { bn: "কাল", en: "Tense", hi: "काल" },
              { bn: "সূত্র", en: "Formula", hi: "सूत्र" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [{ bn: "বর্তমান", en: "present", hi: "वर्तमान" }, { bn: "is/are + V3", en: "is/are + V3", hi: "is/are + V3" }, { bn: "The shop is opened at nine", en: "The shop is opened at nine", hi: "The shop is opened at nine" }],
              [{ bn: "অতীত", en: "past", hi: "अतीत" }, { bn: "was/were + V3", en: "was/were + V3", hi: "was/were + V3" }, { bn: "The shop was opened at nine yesterday", en: "The shop was opened at nine yesterday", hi: "The shop was opened at nine yesterday" }],
              [{ bn: "ভবিষ্যৎ", en: "future", hi: "भविष्य" }, { bn: "will be + V3", en: "will be + V3", hi: "will be + V3" }, { bn: "The shop will be opened at nine tomorrow", en: "The shop will be opened at nine tomorrow", hi: "The shop will be opened at nine tomorrow" }],
            ],
          },
          examples: [
            { wrong: "The match is cancelled last Friday.", right: "The match was cancelled last Friday.", note: { bn: "last Friday = অতীত → was; is বসিয়ে রাখলে কালের মিশ্রণ, খবরের বাক্যই ভুল হয়ে যায়।", en: "'Last Friday' = past → was; keeping is mixes the tenses and the news sentence itself goes wrong.", hi: "'last Friday' = अतीत → was; is रखने से काल मिश्रित, खबर वाला वाक्य ही गलत हो जाता है।" } },
            { wrong: "The results will announced next week.", right: "The results will be announced next week.", note: { bn: "ভবিষ্যতের passive-এর সূত্র will be + V3 — বাদ পড়া be-verb-ই এই ভুলের মূল।", en: "The future passive formula is will be + V3 — the dropped be-verb is the root of this error.", hi: "भविष्य के passive का सूत्र will be + V3 — छूटा हुआ be-verb ही इस गलती की जड़।" } },
            { wrong: "The dishes was washed by Mina.", right: "The dishes were washed by Mina.", note: { bn: "কর্ম dishes বহুবচন — be-verb নতুন কর্তার সঙ্গে মিলবে: were; বাংলায় 'ধোয়া হলো' কর্তা-নিরপেক্ষ, ইংরেজিতে নয়।", en: "The object dishes is plural — the be-verb must match the new subject: were; Bengali 'ধোয়া হলো' is subject-neutral, English is not.", hi: "कर्म dishes बहुवचन — be-verb नए कर्ता से मिलेगा: were; बांग्ला 'ধোয়া হলো' कर्ता-निरपेक्ष, अंग्रेज़ी नहीं।" } },
            { wrong: "The office not open on Sundays.", right: "The office is not open on Sundays.", note: { bn: "নোটিশের ভাষাতেও be-verb বাদ যায় না — is not open; খালি ক্রিয়া-কর্ম জুড়লে বাক্য দাঁড়ায় না।", en: "Even notice language keeps its be-verb — is not open; stitching verb and object with nothing between them leaves no sentence at all.", hi: "नोटिस की भाषा में भी be-verb नहीं छूटता — is not open; केवल क्रिया-कर्म जोड़ने से वाक्य बनता ही नहीं।" } },
            { wrong: "The door is locked?", right: "Is the door locked?", note: { bn: "প্রশ্নে be-verb সামনে — Is the door...; শুধু প্রশ্নবোধক দাগ টানলেই প্রশ্ন হয় না।", en: "In questions the be-verb steps forward — Is the door...; a question mark alone does not make a question.", hi: "प्रश्न में be-verb आगे — Is the door...; केवल प्रश्नवाचक चिह्न लगाने से प्रश्न नहीं बनता।" } },
          ],
        },
        {
          heading: {
            bn: "🧩 সব ক্রিয়ায় passive হয় না — transitive-এর ঘর",
            en: "🧩 Not every verb goes passive — only transitive verbs",
            hi: "🧩 हर क्रिया passive नहीं होती — केवल transitive",
          },
          lead: {
            bn: "was/were যুক্ত করার আগে একবার ভাবুন — ক্রিয়াটার কি কর্ম আছে?",
            en: "Before you attach was/were, ask once — does this verb take an object?",
            hi: "was/were जोड़ने से पहले एक बार पूछें — क्या इस क्रिया का कर्म है?",
          },
          points: [
            { bn: "Passive হয় শুধু এমন ক্রিয়ায় যার একটা কর্ম দরকার — **transitive verb**।", en: "The passive is built only from verbs that need an object — **transitive verbs**.", hi: "Passive केवल उन क्रियाओं से बनता है जिन्हें कर्म चाहिए — **transitive verb**।" },
            { bn: "Transitive-দের পেছনে সবসময় 'কী?'-র উত্তর বসে: write, eat, make, break, sell, find, clean, catch, build, give — wrote a letter, caught the thief, built a bridge।", en: "Behind transitive verbs the answer to 'what?' always sits: write, eat, make, break, sell, find, clean, catch, build, give — wrote a letter, caught the thief, built a bridge.", hi: "transitive के पीछे हमेशा 'क्या?' का उत्तर बैठता है: write, eat, make, break, sell, find, clean, catch, build, give — wrote a letter, caught the thief, built a bridge।" },
            { bn: "কর্ম আছে মানে কর্মকে সামনে এনে be + V3 বসানোর উপায় আছে।", en: "An object means there is something to bring forward and attach be + V3 to.", hi: "कर्म है तो कर्म को आगे लाकर be + V3 बिठाने का रास्ता है।" },
            { bn: "কর্মহীন ক্রিয়া — **intransitive**: sleep, go, come, arrive, die, laugh, cry — 'কী?'-র উত্তর নেই: went, slept, died — শুধুই শেষ।", en: "Object-less verbs — **intransitive**: sleep, go, come, arrive, die, laugh, cry — 'what?' gets no answer: went, slept, died — and that is all.", hi: "बिना कर्म वाली क्रियाएँ — **intransitive**: sleep, go, come, arrive, die, laugh, cry — 'क्या?' का उत्तर नहीं: went, slept, died — बस खत्म।" },
            { bn: "কর্ম নেই মানে passive-এ পাঠানোর কিছুই নেই — He was arrived ভুল; বলতে হবে He died last year।", en: "No object means nothing to send into the passive — He was arrived is wrong; you must say He died last year.", hi: "कर्म नहीं तो passive में भेजने को कुछ है ही नहीं — He was arrived गलत है; कहना होगा He died last year।" },
            { bn: "চেনা ভুল — was/were-কে অতীতের প্রতীক ভেবে যেকোনো ক্রিয়ার আগে বসানো: was went, was came।", en: "The familiar error — treating was/were as a symbol of the past and parking it before any verb: was went, was came.", hi: "जानी-पहचानी गलती — was/were को अतीत का प्रतीक मानकर किसी भी क्रिया से पहले बिठा देना: was went, was came।" },
            { bn: "মনে রাখুন: was/were কখনো একা অতীত বোঝায় না — এরা কেবল passive-এর চেয়ারে বা be-verb-বাক্যে বসে।", en: "Remember: was/were never means past on its own — these two sit only in the passive's chair or in be-verb sentences.", hi: "याद रखें: was/were कभी अकेले अतीत नहीं बताता — ये केवल passive की कुर्सी या be-verb वाले वाक्य में बैठते हैं।" },
          ],
          examples: [
            { wrong: "He was arrived late last night.", right: "He arrived late last night.", note: { bn: "arrive কর্মহীন — কী arrived? উত্তর নেই; তাই passive অসম্ভব, খালি past: arrived।", en: "Arrive takes no object — arrived what? No answer; so the passive is impossible, plain past: arrived.", hi: "arrive कर्महीन — arrived क्या? उत्तर नहीं; इसलिए passive असंभव, खाली past: arrived।" } },
            { wrong: "The baby was slept all afternoon.", right: "The baby slept all afternoon.", note: { bn: "sleep-এর পেছনে 'কী slept?' প্রশ্নই চলে না — কর্ম নেই, passive-এর চেয়ার খালি।", en: "Behind sleep the question 'slept what?' never arises — no object, so the passive's chair stays empty.", hi: "sleep के पीछे 'क्या slept?' सवाल ही नहीं उठता — कर्म नहीं, passive की कुर्सी खाली।" } },
            { wrong: "We were went to the market.", right: "We went to the market.", note: { bn: "was/were + V2-র জোড়া ইংরেজিতে নেই — অতীত বোঝাতে শুধুই went; was/were নিজে থেকে অতীত নয়।", en: "No pairing of was/were + V2 exists in English — for the past it is simply went; was/were is not past by itself.", hi: "was/were + V2 की जोड़ी अंग्रेज़ी में नहीं — अतीत के लिए केवल went; was/were अपने-आप अतीत नहीं।" } },
            { wrong: "This song was sang by our grandmother.", right: "This song was sung by our grandmother.", note: { bn: "be-verb-এর পরে তৃতীয় রূপ — sing, sang, sung; passive খায় sung-কেই।", en: "After the be-verb comes the third form — sing, sang, sung; the passive eats only sung.", hi: "be-verb के बाद तीसरा रूप — sing, sang, sung; passive केवल sung लेता है।" } },
            { wrong: "The thief was catch by the police.", right: "The thief was caught by the police.", note: { bn: "catch, caught, caught — be-verb-এর পরে caught; প্রথম রূপ catch প্যাসিভে ঢোকে না।", en: "Catch, caught, caught — after the be-verb it is caught; the base form catch never enters the passive.", hi: "catch, caught, caught — be-verb के बाद caught; पहला रूप catch passive में नहीं घुसता।" } },
          ],
        },
        {
          heading: {
            bn: "⚠️ বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "⚠️ Common mistakes by Bengali speakers",
            hi: "⚠️ बांग्लाभाषी छात्रों की आम गलतियाँ",
          },
          lead: {
            bn: "এই ভুলগুলো ক্লাসরুম-চ্যাট-ইন্টারভিউ সবখানেই — প্রতিটার পেছনে একটা বাংলা অভ্যাস।",
            en: "These mistakes fill classrooms, chats and interviews — behind each sits one Bengali habit.",
            hi: "ये गलतियाँ क्लासरूम-चैट-इंटरव्यू हर जगह — हर एक के पीछे एक बांग्ला आदत।",
          },
          points: [
            { bn: "এই ভুলগুলো ক্লাসরুমে, চ্যাটে, ইন্টারভিউতে সবচেয়ে বেশি দেখা যায়।", en: "These mistakes are the most common in our classrooms, chats and interviews.", hi: "ये गलतियाँ हमारे क्लासरूम, चैट और इंटरव्यू में सबसे ज़्यादा दिखती हैं।" },
            { bn: "পেছনের বাংলা অভ্যাস তিন রকম — passive এড়িয়ে যাওয়া, V3-এর বদলে V1/V2 বসিয়ে দেওয়া, be-verb হারিয়ে ফেলা।", en: "The Bengali habit behind them takes three shapes — dodging the passive, parking V1/V2 where V3 belongs, or losing the be-verb.", hi: "पीछे की बांग्ला आदत तीन रूप में — passive से बचना, V3 की जगह V1/V2 बिठा देना, be-verb खो देना।" },
            { bn: "দোষ আপনার নয়, দুই ভাষার প্যাটার্নের ফারাকের।", en: "The fault is not yours; it is the gap between two languages' patterns.", hi: "दोष आपका नहीं, दोनों भाषाओं के पैटर्न का फ़र्क़ है।" },
            { bn: "ভুলটা ধরুন বাংলা বাক্যটা চিনে — তারপর ঠিক বাক্যটা জোরে তিনবার বলে নিন।", en: "Catch the Bengali sentence behind each error, then say the correct sentence aloud three times.", hi: "हर गलती के पीछे का बांग्ला वाक्य पकड़ें, फिर सही वाक्य तीन बार ज़ोर से बोलें।" },
            { bn: "কানে গেঁথে গেলেই বলার সময় আর ভুল বেরোয় না।", en: "Once it is rooted in the ear, it stops coming out wrong.", hi: "कान में बैठ गया तो बोलते समय गलती निकलेगी ही नहीं।" },
          ],
          examples: [
            { wrong: "The work is do by the workers.", right: "The work is done by the workers.", note: { bn: "be-verb-এর পরে V1 (do) ঢোকে না — তৃতীয় রূপ done; passive-এর প্রাণই V3।", en: "No V1 (do) can follow the be-verb — the third form done; V3 is the very life of the passive.", hi: "be-verb के बाद V1 (do) नहीं घुसता — तीसरा रूप done; passive की जान ही V3 है।" } },
            { wrong: "My phone was steal in the bus.", right: "My phone was stolen on the bus.", note: { bn: "steal, stole, stolen — was-এর পরে তৃতীয় রূপ stolen; V2 (stole) passive-এ আসে না।", en: "Steal, stole, stolen — after was comes the third form stolen; the V2 (stole) never enters the passive.", hi: "steal, stole, stolen — was के बाद तीसरा रूप stolen; V2 (stole) passive में नहीं आता।" } },
            { wrong: "The letter written by me.", right: "The letter was written by me.", note: { bn: "be-verb হারিয়ে গেলে বাক্যে কালই থাকে না — অতীত হলে was, বর্তমানে is; be + V3 জোড়া আটকে রাখুন।", en: "Once the be-verb is lost, the sentence has no tense at all — was for past, is for present; keep the be + V3 pair locked together.", hi: "be-verb खो गया तो वाक्य में काल ही नहीं — अतीत में was, वर्तमान में is; be + V3 जोड़ी साथ रखें।" } },
            { wrong: "The books is kept on the table.", right: "The books are kept on the table.", note: { bn: "be-verb সামনের কর্মের সঙ্গে মেলে — books বহুবচন → are; বাংলা 'রাখা হয়েছে' সংখ্যা বোঝে না, ইংরেজি বোঝে।", en: "The be-verb matches the front object — books is plural → are; Bengali 'রাখা হয়েছে' ignores number, English does not.", hi: "be-verb आगे वाले कर्म से मेल खाता है — books बहुवचन → are; बांग्ला 'রাখা হয়েছে' संख्या नहीं देखता, अंग्रेज़ी देखती है।" } },
            { wrong: "English is speaking here.", right: "English is spoken here.", note: { bn: "be + -ing মানে 'এখন চলছে' (active); passive-এ be + V3 — spoken; ভাষা নিজে বলে না, বলা হয়।", en: "Be + -ing means 'happening right now' (active); the passive takes be + V3 — spoken; the language does not speak, it is spoken.", hi: "be + -ing यानी 'अभी चल रहा है' (active); passive में be + V3 — spoken; भाषा खुद नहीं बोलती, बोली जाती है।" } },
            { wrong: "He was died last year.", right: "He died last year.", note: { bn: "'was died' ভারতীয় উপমহাদেশের চেনা ভুল — die কর্মহীন, passive হয় না; খালি past: died।", en: "'Was died' is the subcontinent's familiar fossil — die takes no object and cannot go passive; plain past: died.", hi: "'was died' उपमहाद्वीप की जानी-पहचानी गलती — die कर्महीन, passive नहीं होता; खाली past: died।" } },
          ],
        },
        {
          heading: {
            bn: "📖 ছোট গল্পে দেখা যাক",
            en: "📖 See it in a mini story",
            hi: "📖 एक छोटी कहानी में देखें",
          },
          lead: {
            bn: "মিনার নোটিশ-বোর্ড আর খবরের কাগজেই passive জীবন্ত — শেষে পুরো পাঠ এক নজরে।",
            en: "Mina's notice-board and a newspaper line bring the passive alive — then the whole lesson at a glance.",
            hi: "मीना का नोटिस-बोर्ड और अख़बार की पंक्ति में passive जीवंत — फिर पूरा पाठ एक नज़र में।",
          },
          points: [
            { bn: "মিনা নোটিশ-বোর্ড পড়ছে: The school gate is locked at 10 a.m. The annual sports will be held next month. Prizes are given to the winners by the committee।", en: "Mina is reading the notice-board: The school gate is locked at 10 a.m. The annual sports will be held next month. Prizes are given to the winners by the committee.", hi: "मीना नोटिस-बोर्ड पढ़ रही है: The school gate is locked at 10 a.m. The annual sports will be held next month. Prizes are given to the winners by the committee।" },
            { bn: "পাশে খবরের কাগজের সারি: A young cricketer was selected for the district team. He was trained by a local coach in Rajshahi।", en: "Beside it a line from the newspaper: A young cricketer was selected for the district team. He was trained by a local coach in Rajshahi.", hi: "बग़ल में अख़बार की पंक्ति: A young cricketer was selected for the district team. He was trained by a local coach in Rajshahi।" },
            { bn: "রিমা জিজ্ঞেস করে, Who selected him? মিনা হাসে: The team was chosen by the district committee — কর্তাটাই নতুন তথ্য, তাই by-phrase রাখা হল।", en: "Rima asks, Who selected him? Mina smiles: The team was chosen by the district committee — the doer is the new information, so the by-phrase stays.", hi: "রিমा पूछती है, Who selected him? मीना मुस्कुराती है: The team was chosen by the district committee — कर्ता ही नई जानकारी, इसलिए by-phrase रखा गया।" },
            { bn: "খেয়াল করুন — নোটিশে কর্তা স্পষ্ট (is locked, are given); খবরে নির্মাতা-প্রশিক্ষকই তথ্য (was trained by a local coach)।", en: "Notice — in the notice the doer is obvious (is locked, are given); in the news the maker and trainer are the information (was trained by a local coach).", hi: "ध्यान दें — नोटिस में कर्ता स्पष्ट (is locked, are given); खबर में निर्माता-प्रशिक्षक ही जानकारी (was trained by a local coach)।" },
            { bn: "এক নজরে — passive = কর্ম সামনে + be-verb (কাল বহন করে) + V3।", en: "At a glance — passive = object at the front + be-verb (carrying the tense) + V3.", hi: "एक नज़र में — passive = कर्म आगे + be-verb (काल ढोता है) + V3।" },
            { bn: "কাল: is/are written → was/were written → will be written; কর্তা অজানা/স্পষ্ট/অপ্রাসঙ্গিক হলে by-phrase বাদ, নতুন তথ্য হলে রাখুন।", en: "Tenses: is/are written → was/were written → will be written; drop the by-phrase when the doer is unknown, obvious or irrelevant, keep it when the doer is the news.", hi: "काल: is/are written → was/were written → will be written; कर्ता अज्ञात/स्पष्ट/अप्रासंगिक हो तो by-phrase हटाइए, नई जानकारी हो तो रखिए।" },
            { bn: "আর মনে রাখুন — শুধু transitive ক্রিয়ার passive হয়; বাংলা খবরের 'করা হয়েছে'-ই ইংরেজির passive।", en: "And remember — only transitive verbs go passive; Bengali news's 'করা হয়েছে' is exactly English's passive.", hi: "और याद रखें — केवल transitive क्रिया का passive होता है; बांग्ला खबर का 'করা হয়েছে' ही अंग्रेज़ी का passive है।" },
          ],
          examples: [
            { wrong: "The annual sports will held next month.", right: "The annual sports will be held next month.", note: { bn: "নোটিশের ভবিষ্যৎ passive — will be held; be-verb ছাড়া নোটিশ অধরা।", en: "The notice's future passive — will be held; without the be-verb the notice stays half-finished.", hi: "नोटिस का भविष्य passive — will be held; be-verb के बिना नोटिस अधूरा।" } },
            { wrong: "Prizes are give to the winners.", right: "Prizes are given to the winners.", note: { bn: "give, gave, given — be-verb-এর পরে তৃতীয় রূপ given; V1 প্যাসিভে ঢোকে না।", en: "Give, gave, given — after the be-verb comes the third form given; V1 never enters the passive.", hi: "give, gave, given — be-verb के बाद तीसरा रूप given; V1 passive में नहीं घुसता।" } },
            { wrong: "The team chosen by the district committee last Tuesday.", right: "The team was chosen by the district committee last Tuesday.", note: { bn: "by-phrase থাকলেও be-verb বাধ্যতামূলক — অতীতের খবর was chosen।", en: "Even with a by-phrase, the be-verb is compulsory — last Tuesday's news takes was chosen.", hi: "by-phrase होने पर भी be-verb अनिवार्य — मंगलवार की खबर was chosen।" } },
            { wrong: "The gate is lock at 10 a.m.", right: "The gate is locked at 10 a.m.", note: { bn: "is-এর পরে তৃতীয় রূপ locked — নোটিশের ছোট্ট বাক্যেও be + V3 নিয়ম এক।", en: "After is comes the third form locked — even in the notice's tiny sentence, the be + V3 rule is the same.", hi: "is के बाद तीसरा रूप locked — नोटिस के छोटे वाक्य में भी be + V3 नियम एक।" } },
          ],
        },
      ],
      tips: [
        {
          bn: "এক লাইনের সূত্র মুখস্থ রাখুন: কর্ম + be-verb + V3 (+ by কর্তা) — The letter was written by me।",
          en: "Memorise the one-line formula: object + be-verb + V3 (+ by doer) — The letter was written by me.",
          hi: "एक लाइन का सूत्र रट लें: कर्म + be-verb + V3 (+ by कर्ता) — The letter was written by me।",
        },
        {
          bn: "কাজ বড় কথা, কর্তা নয় — এই ভাবনাটা মাথায় থাকলেই passive কখন আসবে বুঝবেন; খবর, নোটিশ, রেসিপি প্যাসিভের ঘর।",
          en: "The action is the point, the doer is not — with that thought you will know when the passive arrives; news, notices and recipes are its home.",
          hi: "काम मुख्य, कर्ता नहीं — यह भाव मन में रहे तो passive कब आएगा समझ जाएँगे; खबर, नोटिस, रेसिपी इसका घर।",
        },
        {
          bn: "কাল বদলায় শুধু be-verb: is/are → was/were → will be; V3 স্থির থাকে — এই ভাগ একবার বুঝলেই অর্ধেক ভুল শেষ।",
          en: "Only the be-verb changes with tense: is/are → was/were → will be; the V3 stays still — grasp this split once and half the errors end.",
          hi: "काल बदलता है केवल be-verb: is/are → was/were → will be; V3 स्थिर रहता है — यह विभाजन एक बार समझ गए तो आधी गलतियाँ खत्म।",
        },
        {
          bn: "yesterday, last night, in 2015 দেখলে is/are নয়, was/were — 'is written yesterday' জাতীয় মিশ্রণ বাঙালিদের চেনা ভুল।",
          en: "On seeing yesterday, last night, in 2015, take was/were not is/are — mixtures like 'is written yesterday' are the Bengali-speaker's signature error.",
          hi: "yesterday, last night, in 2015 देखते ही is/are नहीं, was/were — 'is written yesterday' जैसा मिश्रण बांग्लाभाषियों की पहचानी गलती।",
        },
        {
          bn: "V3-এর ছোট ভাণ্ডার রোজ জোরে বলুন: written, done, made, caught, sold, built, given, found, stolen, held — passive এই রূপগুলোই খায়।",
          en: "Say the small V3 stock aloud daily: written, done, made, caught, sold, built, given, found, stolen, held — the passive feeds only on these forms.",
          hi: "V3 का छोटा भंडार रोज़ ज़ोर से बोलें: written, done, made, caught, sold, built, given, found, stolen, held — passive इन्हीं रूपों पर जीता है।",
        },
        {
          bn: "কর্তা অজানা/স্পষ্ট/অপ্রাসঙ্গিক হলে by-phrase বাদ — বাক্য হালকা ও স্বাভাবিক শোনায়; কর্তাই নতুন তথ্য হলে রাখুন।",
          en: "Drop the by-phrase when the doer is unknown, obvious or irrelevant — the sentence sounds light and natural; keep it when the doer is the new information.",
          hi: "कर्ता अज्ञात/स्पष्ट/अप्रासंगिक हो तो by-phrase हटाइए — वाक्य हल्का और स्वाभाविक लगता है; कर्ता ही नई जानकारी हो तो रखिए।",
        },
        {
          bn: "sleep, go, come, arrive, die, laugh — কর্মহীন ক্রিয়ার passive নেই; He arrived, He died — এতেই শেষ, was জুড়বেন না।",
          en: "Sleep, go, come, arrive, die, laugh — object-less verbs have no passive; He arrived, He died — and that finishes it, never add was.",
          hi: "sleep, go, come, arrive, die, laugh — कर्महीन क्रियाओं का passive नहीं; He arrived, He died — इतना ही, was न जोड़ें।",
        },
        {
          bn: "be-verb সামনের নতুন কর্মের সঙ্গে মেলে — the gate is/was, the gates are/were; বাংলার 'রাখা হয়েছে' সংখ্যা বোঝে না, ইংরেজি বোঝে।",
          en: "The be-verb matches the object now sitting at the front — the gate is/was, the gates are/were; Bengali 'রাখা হয়েছে' ignores number, English does not.",
          hi: "be-verb आगे बैठे कर्म से मिलता है — the gate is/was, the gates are/were; बांग्ला 'राखा হয়েছে' संख्या नहीं देखता, अंग्रेज़ी देखती है।",
        },
        {
          bn: "বাংলা খবরে 'আটক হয়েছে / করা হবে / দেওয়া হয়েছে' দেখলে ইংরেজি অনুবাদে passive ভাবুন — বাংলা লেখ্য ভাষাও passive চেনে।",
          en: "When Bengali news shows 'আটক হয়েছে / করা হবে / দেওয়া হয়েছে', think passive in the English translation — written Bengali knows the passive too.",
          hi: "बांग्ला खबर में 'आटক হয়েছে / করা হবে / দেওয়া হয়েছে' देखें तो अंग्रेज़ी अनुवाद में passive सोचें — बांग्ला लिखित भाषा भी passive जानती है।",
        },
        {
          bn: "নোটিশ-বোর্ড পড়ুন: Sold out, Closed on Mondays, No entry, English is spoken here — বাস্তব জগতের passive-এর ফ্রি পাঠশালা।",
          en: "Read notice-boards: Sold out, Closed on Mondays, No entry, English is spoken here — the real world's free school of the passive.",
          hi: "नोटिस-बोर्ड पढ़ें: Sold out, Closed on Mondays, No entry, English is spoken here — असली दुनिया का passive का फ्री स्कूल।",
        },
      ],
      quiz: [
        {
          question: "The classroom ___ every morning.",
          options: ["clean", "cleans", "is cleaned", "cleaned"],
          answer: 2,
          explanation: {
            bn: "কর্ম classroom সামনে + বর্তমান কাল → is + V3: is cleaned; কে পরিষ্কার করে তা বলার দরকার নেই।",
            en: "The object classroom at the front + present tense → is + V3: is cleaned; who cleans it needs no saying.",
            hi: "कर्म classroom आगे + वर्तमान काल → is + V3: is cleaned; कौन साफ़ करता है, कहने की ज़रूरत नहीं।",
          },
        },
        {
          question: "The Taj Mahal was ___ by Shah Jahan.",
          options: ["build", "built", "building", "builds"],
          answer: 1,
          explanation: {
            bn: "be-verb-এর পরে তৃতীয় রূপ — build, built, built; কর্তাই নতুন তথ্য, তাই by-phrase রাখা হয়েছে।",
            en: "After the be-verb comes the third form — build, built, built; the doer is the new information, so the by-phrase stays.",
            hi: "be-verb के बाद तीसरा रूप — build, built, built; कर्ता ही नई जानकारी, इसलिए by-phrase रखा।",
          },
        },
        {
          question: "The letter ___ by me yesterday.",
          options: ["is written", "was written", "will be written", "writes"],
          answer: 1,
          explanation: {
            bn: "yesterday = অতীত → was written; কাল বদলায় শুধু be-verb, V3 (written) স্থির।",
            en: "'Yesterday' = past → was written; only the be-verb carries the tense, the V3 (written) stays still.",
            hi: "'yesterday' = अतीत → was written; काल ढोता है केवल be-verb, V3 (written) स्थिर।",
          },
        },
        {
          question: "My umbrella ___ from the stand.",
          options: ["steal", "stole", "was stolen", "was steal"],
          answer: 2,
          explanation: {
            bn: "চুরিকারী অজানা → passive; steal-এর তৃতীয় রূপ stolen — was stolen।",
            en: "The thief is unknown → passive; the third form of steal is stolen — was stolen.",
            hi: "चोर अज्ञात → passive; steal का तीसरा रूप stolen — was stolen।",
          },
        },
        {
          question: "Which sentence is correct?",
          options: [
            "He was arrived late last night.",
            "He was arrive late last night.",
            "He arrived late last night.",
            "He did arrived late last night.",
          ],
          answer: 2,
          explanation: {
            bn: "arrive কর্মহীন — passive অসম্ভব; খালি past: arrived; was/were এখানে ঢোকে না।",
            en: "Arrive takes no object — the passive is impossible; plain past: arrived; no was/were enters here.",
            hi: "arrive कर्महीन — passive असंभव; खाली past: arrived; यहाँ was/were नहीं घुसता।",
          },
        },
        {
          question: "The results ___ next week.",
          options: ["will announce", "will be announced", "will announced", "are announce"],
          answer: 1,
          explanation: {
            bn: "ভবিষ্যতের passive = will be + V3 — will be announced; be-verb বাদ পড়লেই ভুল।",
            en: "The future passive = will be + V3 — will be announced; dropping the be-verb is the error itself.",
            hi: "भविष्य का passive = will be + V3 — will be announced; be-verb छूटना ही गलती।",
          },
        },
        {
          question: "The books ___ on the shelf.",
          options: ["is kept", "was kept", "are kept", "keep"],
          answer: 2,
          explanation: {
            bn: "বহুবচন কর্ম books → are + V3: are kept; be-verb সামনের কর্মের সঙ্গে মেলে।",
            en: "The plural object books → are + V3: are kept; the be-verb matches the object at the front.",
            hi: "बहुवचन कर्म books → are + V3: are kept; be-verb आगे के कर्म से मेल खाता है।",
          },
        },
        {
          question: "Prizes ___ to the winners every year.",
          options: ["give", "gives", "are given", "giving"],
          answer: 2,
          explanation: {
            bn: "খবর/অনুষ্ঠানের ভাষা — কর্তা স্পষ্ট; কর্ম prizes সামনে → are given।",
            en: "News-and-ceremony language — the doer is obvious; the object prizes comes forward → are given.",
            hi: "खबर-समारोह की भाषा — कर्ता स्पष्ट; कर्म prizes आगे → are given।",
          },
        },
        {
          question: "Which sentence is correct?",
          options: [
            "This song was sang by our grandmother.",
            "This song sung by our grandmother.",
            "This song was sung by our grandmother.",
            "This song is sing by our grandmother.",
          ],
          answer: 2,
          explanation: {
            bn: "be-verb-এর পরে তৃতীয় রূপ sung — was sung; sang (V2) আর be-verb ছাড়া বাক্য — দুটোই ভুল।",
            en: "After the be-verb comes the third form sung — was sung; sang (V2) or a be-verb-less sentence — both are wrong.",
            hi: "be-verb के बाद तीसरा रूप sung — was sung; sang (V2) या be-verb-रहित वाक्य — दोनों गलत।",
          },
        },
        {
          question: "Our house ___ every year before Durga Puja.",
          options: ["paint", "is paint", "is painted", "painted"],
          answer: 2,
          explanation: {
            bn: "কর্তা (আমরা) স্পষ্ট — by-phrase বাদ; বর্তমান অভ্যাস → is + V3: is painted।",
            en: "The doer (we) is obvious — the by-phrase drops; a present habit → is + V3: is painted.",
            hi: "कर्ता (हम) स्पष्ट — by-phrase छोड़ें; वर्तमान आदत → is + V3: is painted।",
          },
        },
      ],
    },
  },
];

export default SEED_GRAMMAR_V4_B2B;
