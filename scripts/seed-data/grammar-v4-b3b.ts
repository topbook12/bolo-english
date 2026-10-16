// ─── Grammar seeds v4: BEGINNER batch B3b — Since vs For + Common Mistakes (2 lessons) ───
// Task 10 — point-form roadmap upgrade. Source: scripts/seed-data/grammar-v3-b3.ts (lessons 3-4).
// v4 shape: roadmap + emoji sections + lead + points (+ formula/table); body OMITTED.
// title/intro/tips/quiz/examples copied EXACTLY from source. TriText = { bn, en, hi }.
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_B3B: SeedGrammarV4Entry[] = [
  /* ── 1. Since vs For ─────────────────────────────────────────────────── */
  {
    topic: "Since vs For", // EXACT source string
    level: "beginner", // EXACT source string
    title: "Since vs For (Beginner)", // EXACT source string
    unit: 0, // EXACT source unit
    sortOrder: 10,
    data: {
      title: {
        bn: "Since নাকি For? — 'থেকে'-র দুই মুখ (বিগিনার)",
        en: "Since vs For (Beginner)",
        hi: "Since या For? — 'থেকे' के दो रूप (बिगिनर)",
      },
      intro: {
        bn: "বাংলার 'থেকে' দুই কাজ করে — শুরুর সময় বলে ('২০২০ থেকে এখানে আছি') আর সময়ের দৈর্ঘ্য বলে ('তিন বছর ধরে এখানে আছি'); কিন্তু ইংরেজিতে এই দুই কাজের জন্য দুটো আলাদা শব্দ — since (শুরুর বিন্দু) আর for (দৈর্ঘ্য)। এই পাঠ ধরে নিচ্ছে আপনি আগের পাঠে present perfect-এর সাথে পরিচয় পেয়েছেন (have/has + verb-এর past participle) — কারণ since/for বেশিরভাগ সময় এই tense-এর সাথেই বসে। শিখবেন: কোনটায় কোন শব্দ, পারফেক্ট tense-এর জুটি, since-এর পরে পূর্ণ বাক্য, আর বাঙালিদের 'I am here since morning' জাতীয় ভুল শুধরে নেওয়া।",
        en: "The Bengali word 'থেকে' does two jobs — it names the starting point ('আছি since 2020') and it measures a length ('আছি for three years'); English splits these two jobs into two words — since (the starting point) and for (the length). This lesson assumes you met the present perfect in an earlier lesson (have/has + past participle), because since/for mostly live in that tense. You will learn which word goes where, the perfect-tense pairing, full clauses after since, and how to fix the classic Bengali mistake 'I am here since morning'.",
        hi: "बांग्ला का 'থেকे' दो काम करता है — शुरुआती समय बताना ('२०२০ থেকे यहाँ हूँ') और समय की लंबाई ('तीन साल से यहाँ हूँ'); अंग्रेज़ी में इन दो कामों के लिए दो अलग शब्द हैं — since (शुरुआती बिंदु) और for (लंबाई)। यह पाठ मानता है कि आपने पिछले पाठ में present perfect (have/has + past participle) देखा है — क्योंकि since/for ज़्यादातर इसी tense में बैठते हैं। सीखेंगे: कहाँ कौन-सा शब्द, perfect-tense जोड़ी, since के बाद पूरा वाक्य, और 'I am here since morning' जैसी क्लासिक गलती ठीक करना।",
      },
      roadmap: [
        { bn: "🎯 since = শুরুর বিন্দু, for = দৈর্ঘ্য — মূল পার্থক্য এক টেবিলে", en: "🎯 since = starting point, for = duration — the core contrast in one table", hi: "🎯 since = शुरुआती बिंदु, for = अवधि — मूल अंतर एक तालिका में" },
        { bn: "🏗️ দুটো সূত্র, বাক্যের ছাঁচ আর 'কখন থেকে না কতদিন' পরীক্ষা", en: "🏗️ Two formulas, the sentence mould and the 'from when or how long' test", hi: "🏗️ दो सूत्र, वाक्य-ढाँचा और 'कब से या कितने समय से' परीक्षा" },
        { bn: "🚦 since-প্যাক আর for-প্যাক — আভাস-শব্দ চেনার সোনার নিয়ম", en: "🚦 The since-pack and the for-pack — the golden rule of signal words", hi: "🚦 since-पैक और for-पैक — संकेत-शब्द का सुनहरा नियम" },
        { bn: "⏰ have/has (been) + verb — পারফেক্ট tense-এর তিন ছাঁচ", en: "⏰ have/has (been) + verb — three moulds of the perfect tense", hi: "⏰ have/has (been) + verb — perfect tense के तीन ढाँचे" },
        { bn: "🧩 since-এর পরে পূর্ণ বাক্য: since I came here", en: "🧩 A full clause after since: since I came here", hi: "🧩 since के बाद पूरा वाक्य: since I came here" },
        { bn: "⚠️ 'থেকে'-র পাঁচ ফাঁদ — from, tense, since-for বিভ্রান্তি", en: "⚠️ Five 'থেকে' traps — from, tense, and since/for confusion", hi: "⚠️ 'थेके' के पाँच जाल — from, tense और since-for भ्रम" },
        { bn: "📖 মিতার ব্যাংক-জীবনের গল্পে শব্দদুটো জীবন্ত", en: "📖 Mita's bank life — the two words alive in a story", hi: "📖 मीता की बैंक-ज़िंदगी — कहानी में जीवंत दोनों शब्द" },
        { bn: "🧠 এক নজরে ছয় দফা — চোখের সামনে রাখার সারাংশ", en: "🧠 Six points at a glance — a summary to keep close", hi: "🧠 एक नज़र में छह बिंदु — पास रखने लायक़ सारांश" },
      ],
      sections: [
        {
          heading: {
            bn: "🎯 কখন ব্যবহার হয়: since = শুরুর বিন্দু, for = দৈর্ঘ্য",
            en: "🎯 When to use them: since = starting point, for = duration",
            hi: "🎯 कब इस्तेमाल होता है: since = शुरुआती बिंदु, for = अवधि",
          },
          lead: {
            bn: "একটাই 'থেকে', কিন্তু ইংরেজিতে দুই শব্দ — শুরুর বিন্দু আর সময়ের দৈর্ঘ্য গুলিয়ে ফেলবেন না।",
            en: "One Bengali word, two English words — do not mix up the starting point and the duration.",
            hi: "एक ही 'थेके', पर अंग्रेज़ी में दो शब्द — शुरुआती बिंदु और अवधि को न गलाएँ।",
          },
          points: [
            { bn: "**since** — 'কোন সময় থেকে শুরু হয়ে এখনো চলছে'; এটা একটা বিন্দু, একটা শুরুর ঠিকানা: since 2020, since Monday, since morning, since my childhood।", en: "**since** — 'from that moment up to now'; it is a point, a starting address: since 2020, since Monday, since morning, since my childhood.", hi: "**since** — 'उस समय से अब तक'; यह एक बिंदु है, शुरुआत का पता: since 2020, since Monday, since morning, since my childhood।" },
            { bn: "since-বাক্যের অর্থ দাঁড়ায় 'তখন থেকে এখন পর্যন্ত': I have lived in Dhaka since 2020 — ২০২০-তে এসেছি, এখনো আছি।", en: "A since-sentence means 'from then till now': I have lived in Dhaka since 2020 — I came in 2020 and I am still here.", hi: "since-वाक्य का अर्थ 'तब से अब तक': I have lived in Dhaka since 2020 — २०२० में आया, अब भी हूँ।" },
            { bn: "**for** — 'কতদিন ধরে'; সময়ের রেলিং, দৈর্ঘ্য: for three years, for two hours, for a week, for a long time।", en: "**for** — 'for how long'; a ruler over time, a duration: for three years, for two hours, for a week, for a long time.", hi: "**for** — 'कितने समय से'; समय की रूलर, अवधि: for three years, for two hours, for a week, for a long time।" },
            { bn: "for-বাক্যে শুরু কবে হয়েছে বলা হয় না — বলা হয় কতটা সময় গড়িয়েছে: I have lived in Dhaka for three years।", en: "A for-sentence never says when it started — only how much time has passed: I have lived in Dhaka for three years.", hi: "for-वाक्य में शुरुआत कब हुई यह नहीं कहा जाता — सिर्फ़ कितना समय बीता: I have lived in Dhaka for three years।" },
            { bn: "দুটোই একই অবস্থার দুই দিক: '২০২০ থেকে' বললে since 2020, 'তিন বছর ধরে' বললে for three years।", en: "The two are two faces of one situation: 'from 2020' becomes since 2020, 'for three years' stays for three years.", hi: "दोनों एक ही स्थिति के दो पहलू: '२०२০ थेके' = since 2020, 'तीन साल धरे' = for three years।" },
            { bn: "খেয়াল করুন — দুটোই অতীতকে এখনের সাথে জোড়ে, তাই এদের প্রধান ঠিকানা পারফেক্ট tense।", en: "Notice — both join the past to the present, which is why their main home is the perfect tense.", hi: "ध्यान दें — दोनों अतीत को वर्तमान से जोड़ते हैं, इसलिए इनका मुख्य घर perfect tense है।" },
          ],
          table: {
            head: [
              { bn: "শব্দ", en: "Word", hi: "शब्द" },
              { bn: "বোঝায়", en: "It means", hi: "अर्थ" },
              { bn: "উদাহরণ", en: "Examples", hi: "उदाहरण" },
            ],
            rows: [
              [
                { bn: "since", en: "since", hi: "since" },
                { bn: "শুরুর বিন্দু — 'কখন থেকে'", en: "a starting point — 'from when'", hi: "शुरुआती बिंदु — 'कब से'" },
                { bn: "since 2020, since morning, since my childhood", en: "since 2020, since morning, since my childhood", hi: "since 2020, since morning, since my childhood" },
              ],
              [
                { bn: "for", en: "for", hi: "for" },
                { bn: "দৈর্ঘ্য — 'কতদিন ধরে'", en: "a duration — 'how long'", hi: "अवधि — 'कितने समय से'" },
                { bn: "for three years, for two hours", en: "for three years, for two hours", hi: "for three years, for two hours" },
              ],
            ],
          },
          examples: [
            {
              wrong: "I live here since 2020.",
              right: "I have lived here since 2020.",
              note: {
                bn: "since-জুটি পারফেক্ট tense-এ বসে — অতীতের বিন্দু থেকে এখন পর্যন্ত সেতু টানতে have lived দরকার।",
                en: "since pairs with the perfect tense — to bridge a past point to now you need have lived.",
                hi: "since perfect tense के साथ बैठता है — अतीत से अब तक का पुल बनाने को have lived चाहिए।",
              },
            },
            {
              wrong: "I have known him since three years.",
              right: "I have known him for three years.",
              note: {
                bn: "'three years' একটা দৈর্ঘ্য, শুরুর বিন্দু নয় — তাই for।",
                en: "'three years' is a duration, not a starting point — so for.",
                hi: "'three years' अवधि है, शुरुआती बिंदु नहीं — इसलिए for।",
              },
            },
            {
              wrong: "She has been crying from morning.",
              right: "She has been crying since morning.",
              note: {
                bn: "বাংলা 'সকাল থেকে' মনে করিয়ে দেয় from, কিন্তু শুরুর বিন্দু বোঝাতে since — from এখানে আসে না।",
                en: "Bengali 'সকাল থেকে' whispers from, but a starting point takes since — from does not appear here.",
                hi: "बांग्ला 'सकाल थेके' from की याद दिलाता है, पर शुरुआती बिंदु के लिए since — from यहाँ नहीं आता।",
              },
            },
            {
              wrong: "We have waited for 9 o'clock.",
              right: "We have been waiting since 9 o'clock.",
              note: {
                bn: "ঘড়ার সময় একটা শুরুর বিন্দু — '৯টা থেকে' = since 9 o'clock; for-এর পরে ঘড়ার সময় বসে না।",
                en: "Clock time is a starting point — 'since 9 o'clock'; for never takes a clock time after it.",
                hi: "घड़ी का समय शुरुआती बिंदु है — 'since 9 o'clock'; for के बाद घड़ी का समय नहीं आता।",
              },
            },
            {
              wrong: "I have studied English since six months.",
              right: "I have studied English for six months.",
              note: {
                bn: "সংখ্যা + সময়ের একক = দৈর্ঘ্য = for — 'six months' দেখলেই for মনে রাখুন।",
                en: "A number + a time unit = duration = for — on seeing 'six months', think for.",
                hi: "संख्या + समय इकाई = अवधि = for — 'six months' देखते ही for सोचें।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🏗️ গঠন: দুটো সূত্র আর একটা সহজ পরীক্ষা",
            en: "🏗️ Formation: two formulas and one easy test",
            hi: "🏗️ गठन: दो सूत्र और एक आसान परीक्षा",
          },
          lead: {
            bn: "দুটো সূত্র আর একটা সহজ পরীক্ষা — যেকোনো বাক্যে সঠিক শব্দ বেছে নেওয়ার কৌশল।",
            en: "Two formulas and one easy test — the way to pick the right word in any sentence.",
            hi: "दो सूत्र और एक आसान परीक्षा — किसी भी वाक्य में सही शब्द चुनने का तरीका।",
          },
          points: [
            { bn: "**সূত্র ১: since + শুরুর বিন্দু** — সাল (since 2015), দিন (since Monday, since 5th March), ঘড়ার সময় (since 9 o'clock), দিনের অংশ (since morning, since evening)।", en: "**Formula 1: since + starting point** — a year (since 2015), a day (since Monday, since 5th March), clock time (since 9 o'clock), part of a day (since morning, since evening).", hi: "**सूत्र 1: since + शुरुआती बिंदु** — साल (since 2015), दिन (since Monday, since 5th March), घड़ी का समय (since 9 o'clock), दिन का हिस्सा (since morning, since evening)।" },
            { bn: "বিন্দু ঘটনাও হতে পারে — পূর্ণ ক্লজ বসে: since I came to Dhaka।", en: "The point can also be an event — a full clause fits: since I came to Dhaka.", hi: "बिंदु घटना भी हो सकता है — पूरा क्लॉज़ बैठता है: since I came to Dhaka।" },
            { bn: "**সূত্র ২: for + সংখ্যা + সময়ের একক** — for two years, for three weeks, for ten minutes।", en: "**Formula 2: for + number + time unit** — for two years, for three weeks, for ten minutes.", hi: "**सूत्र 2: for + संख्या + समय इकाई** — for two years, for three weeks, for ten minutes।" },
            { bn: "কথ্য ভাষায় for ages মানে 'অনেককাল ধরে'।", en: "In spoken English for ages means 'a very long time'.", hi: "कहने में for ages का अर्थ 'बहुत लंबे समय से'।" },
            { bn: "ছাঁচে বসান: I have worked here for five years, She has been ill since Tuesday।", en: "Place them in the mould: I have worked here for five years, She has been ill since Tuesday.", hi: "ढाँचे में बिठाइए: I have worked here for five years, She has been ill since Tuesday।" },
            { bn: "**সহজ পরীক্ষা** — পরের অংশটা 'কখন থেকে?'-র উত্তর দিলে since; 'কতদিন ধরে?'-র উত্তর দিলে for।", en: "**The easy test** — if the next part answers 'from when?', use since; if it answers 'how long?', use for.", hi: "**आसान परीक्षा** — अगला हिस्सा 'कब से?' का उत्तर दे तो since; 'कितने समय से?' का उत्तर दे तो for।" },
          ],
          formula: {
            bn: "কর্তা + have/has + (been) + verb + since/for + ...",
            en: "Subject + have/has + (been) + verb + since/for + ...",
            hi: "कर्ता + have/has + (been) + verb + since/for + ...",
          },
          table: {
            head: [
              { bn: "since + শুরুর বিন্দু", en: "since + starting point", hi: "since + शुरुआती बिंदु" },
              { bn: "for + দৈর্ঘ্য", en: "for + duration", hi: "for + अवधि" },
            ],
            rows: [
              [
                { bn: "since 2015 (সাল)", en: "since 2015 (a year)", hi: "since 2015 (साल)" },
                { bn: "for two years", en: "for two years", hi: "for two years" },
              ],
              [
                { bn: "since Monday, since 5th March (দিন)", en: "since Monday, since 5th March (a day)", hi: "since Monday, since 5th March (दिन)" },
                { bn: "for three weeks", en: "for three weeks", hi: "for three weeks" },
              ],
              [
                { bn: "since 9 o'clock (ঘড়ার সময়)", en: "since 9 o'clock (clock time)", hi: "since 9 o'clock (घड़ी का समय)" },
                { bn: "for ten minutes", en: "for ten minutes", hi: "for ten minutes" },
              ],
              [
                { bn: "since morning, since evening (দিনের অংশ)", en: "since morning, since evening (part of a day)", hi: "since morning, since evening (दिन का हिस्सा)" },
                { bn: "for ages (কথ্য ভাষায়)", en: "for ages (spoken English)", hi: "for ages (कथ्य भाषा)" },
              ],
              [
                { bn: "since I came to Dhaka (ঘটনা-ক্লজ)", en: "since I came to Dhaka (an event clause)", hi: "since I came to Dhaka (घटना-वाक्य)" },
                { bn: "—", en: "—", hi: "—" },
              ],
            ],
          },
          examples: [
            {
              wrong: "I have been here since two hours.",
              right: "I have been here for two hours.",
              note: {
                bn: "'two hours' দৈর্ঘ্য — since নয়, for বসবে।",
                en: "'two hours' is a duration — it takes for, not since.",
                hi: "'two hours' अवधि है — since नहीं, for बैठेगा।",
              },
            },
            {
              wrong: "He has lived here for 2019.",
              right: "He has lived here since 2019.",
              note: {
                bn: "সাল একটা শুরুর বিন্দু — তাই since 2019; for-এর পরে সাল আসে না।",
                en: "A year is a starting point — so since 2019; for never takes a year after it.",
                hi: "साल शुरुआती बिंदु है — इसलिए since 2019; for के बाद साल नहीं आता।",
              },
            },
            {
              wrong: "They have been friends for childhood.",
              right: "They have been friends since childhood.",
              note: {
                bn: "childhood শুরুর ঠিকানা — 'শৈশব থেকে' = since childhood।",
                en: "childhood is a starting address — 'since childhood' = from childhood till now.",
                hi: "childhood शुरुआत का पता है — 'बचपन से' = since childhood।",
              },
            },
            {
              wrong: "I have known her for we met in college.",
              right: "I have known her since we met in college.",
              note: {
                bn: "for-এর পরে পূর্ণ বাক্য আসে না; ঘটনা বোঝালে since বসে — since we met।",
                en: "for cannot take a full clause; an event after it means since — since we met.",
                hi: "for के बाद पूरा वाक्य नहीं आता; घटना के लिए since — since we met।",
              },
            },
            {
              wrong: "She has worked there since five years.",
              right: "She has worked there for five years.",
              note: {
                bn: "'five years' = সংখ্যা + একক = দৈর্ঘ্য — for-এর আসন।",
                en: "'five years' = number + unit = duration — for's seat.",
                hi: "'five years' = संख्या + इकाई = अवधि — for की सीट।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🚦 আভাস চেনার উপায়: since-প্যাক আর for-প্যাক",
            en: "🚦 Pattern recognition: the since-pack and the for-pack",
            hi: "🚦 पैटर्न पहचान: since-पैक और for-पैक",
          },
          lead: {
            bn: "আভাস-শব্দ চিনলেই খেলা শেষ — since-প্যাক আর for-প্যাক মুখস্থ করে ফেলুন।",
            en: "Spot the signal words and the game is over — memorise the since-pack and the for-pack.",
            hi: "संकेत-शब्द पहचानते ही खेल ख़त्म — since-पैक और for-पैक याद कर लें।",
          },
          points: [
            { bn: "**since-প্যাক** — since morning, since yesterday (সাবধান — 'গতকাল'-ও একটা বিন্দু), since last week, since last Eid, since my birthday, since the accident।", en: "**The since-pack** — since morning, since yesterday (careful — 'yesterday' is a point too), since last week, since last Eid, since my birthday, since the accident.", hi: "**since-पैक** — since morning, since yesterday (सावधान — 'कल' भी एक बिंदु), since last week, since last Eid, since the accident।" },
            { bn: "'last/this/that + সময়' আর ঘটনার নাম — সব since-এর প্যাকে।", en: "'last/this/that + time' and the names of events — all belong to the since-pack.", hi: "'last/this/that + समय' और घटनाओं के नाम — सब since-पैक में।" },
            { bn: "**for-প্যাক** — for a moment, for a minute, for an hour, for a day, for a week, for a month, for years, for ages, for a long time।", en: "**The for-pack** — for a moment, for a minute, for an hour, for a day, for a week, for a month, for years, for ages, for a long time.", hi: "**for-पैक** — for a moment, for a minute, for an hour, for a week, for years, for ages, for a long time।" },
            { bn: "সামনে a/an বা সংখ্যা থাকলে প্রায় সবসময় for।", en: "With a/an or a number in front, it is almost always for.", hi: "आगे a/an या संख्या हो तो लगभग हमेशा for।" },
            { bn: "**সোনার নিয়ম** — 'এককের আগে সংখ্যা' দেখলে for; 'নির্দিষ্ট কবে' দেখলে since।", en: "**The golden rule** — a number before a unit means for; a named moment means since.", hi: "**सुनहरा नियम** — इकाई से पहले संख्या = for; नाम-गिना क्षण = since।" },
            { bn: "বাংলা থেকে ভাবুন: 'তিন বছর ধরে' (ধরে = দৈর্ঘ্য) → for; 'গত ঈদ থেকে' (থেকে = শুরু) → since।", en: "Think from Bengali: 'তিন বছর ধরে' (ধরে = duration) → for; 'গত ঈদ থেকে' (থেকে = start) → since.", hi: "बांग्ला से सोचें: 'तीन साल धरे' (धरे = अवधि) → for; 'पिछली ईद थेके' (थेके = शुरुआत) → since।" },
            { bn: "নিজের মাথার বাংলা বাক্যে 'ধরে' বা 'থেকে' ধরা পড়লেই উত্তর প্রায় তৈরি।", en: "When 'ধরে' or 'থেকে' appears in the Bengali sentence in your head, the answer is nearly ready.", hi: "मन के बांग्ला वाक्य में 'धरे' या 'थेके' दिखे तो उत्तर लगभग तैयार।" },
          ],
          formula: {
            bn: "এককের আগে সংখ্যা → for | নির্দিষ্ট কবে (নাম-ঘোষিত বিন্দু) → since",
            en: "A number before a unit → for | a named moment → since",
            hi: "इकाई से पहले संख्या → for | नाम-गिना क्षण → since",
          },
          examples: [
            {
              wrong: "I haven't seen him for last Ramadan.",
              right: "I haven't seen him since last Ramadan.",
              note: {
                bn: "'last + সময়' (last Ramadan, last week) শুরুর বিন্দু — since-প্যাক।",
                en: "'last + time' (last Ramadan, last week) marks a starting point — the since-pack.",
                hi: "'last + समय' (last Ramadan, last week) शुरुआती बिंदु — since-पैक।",
              },
            },
            {
              wrong: "She has been waiting since an hour.",
              right: "She has been waiting for an hour.",
              note: {
                bn: "'an hour' = a/an + একক — এটা দৈর্ঘ্য, for-প্যাক।",
                en: "'an hour' = a/an + unit — that is a duration, the for-pack.",
                hi: "'an hour' = a/an + इकाई — यह अवधि है, for-पैक।",
              },
            },
            {
              wrong: "We have been friends for school days.",
              right: "We have been friends since our school days.",
              note: {
                bn: "'স্কুল-জীবন থেকে' — শুরুর ঠিকানা, তাই since; এছাড়া স্বাভাবিক বাক্যে our লাগে।",
                en: "'From our school days' — a starting address, so since; and natural English adds our.",
                hi: "'स्कूल-जीवन से' — शुरुआत का पता, इसलिए since; साथ ही स्वाभाविक वाक्य में our आता है।",
              },
            },
            {
              wrong: "He has been ill for Monday.",
              right: "He has been ill since Monday.",
              note: {
                bn: "দিনের নাম (Monday, Tuesday) একটা বিন্দু — since।",
                en: "A day name (Monday, Tuesday) is a point — since.",
                hi: "दिन का नाम (Monday, Tuesday) एक बिंदु है — since।",
              },
            },
            {
              wrong: "I have loved cricket since twenty years.",
              right: "I have loved cricket for twenty years.",
              note: {
                bn: "সংখ্যা ('twenty') আছে মানে দৈর্ঘ্য — for।",
                en: "A number ('twenty') present means duration — for.",
                hi: "संख्या ('twenty') मौजूद है, यानी अवधि — for।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "⏰ পারফেক্ট tense-এর জুটি: have/has (been) + verb",
            en: "⏰ The perfect-tense pairing: have/has (been) + verb",
            hi: "⏰ perfect-tense की जोड़ी: have/has (been) + verb",
          },
          lead: {
            bn: "since/for প্রায় সবসময় পারফেক্ট tense-এ বসে — অতীত থেকে এখন পর্যন্ত সেতু এখানেই তৈরি হয়।",
            en: "since/for mostly live in the perfect tense — this is where the past-to-now bridge is built.",
            hi: "since/for ज़्यादातर perfect tense में बैठते हैं — अतीत से अब तक का पुल यहीं बनता है।",
          },
          points: [
            { bn: "since/for-এর প্রধান বাসা পারফেক্ট tense — দুটোই 'অতীত থেকে এখন পর্যন্ত' বোঝায়, আর ইংরেজি সেই সেতু দেখাতে চায়।", en: "The main home of since/for is the perfect tense — both mean 'from a past point until now', and English insists on showing that bridge.", hi: "since/for का मुख्य घर perfect tense है — दोनों का अर्थ 'अतीत के बिंदु से अब तक', और अंग्रेज़ी वह पुल दिखाना चाहती है।" },
            { bn: "**ছাঁচ ১: present perfect** — have/has + past participle: I have lived here since 2018, We have known each other for ten years।", en: "**Mould 1: present perfect** — have/has + past participle: I have lived here since 2018, We have known each other for ten years.", hi: "**ढाँचा 1: present perfect** — have/has + past participle: I have lived here since 2018, We have known each other for ten years।" },
            { bn: "**ছাঁচ ২: present perfect continuous** — have/has been + verb-ing: I have been learning English for two years, He has been sleeping since noon।", en: "**Mould 2: present perfect continuous** — have/has been + verb-ing: I have been learning English for two years, He has been sleeping since noon.", hi: "**ढाँचा 2: present perfect continuous** — have/has been + verb-ing: I have been learning English for two years, He has been sleeping since noon।" },
            { bn: "**ছাঁচ ৩: past perfect** — অতীতের অতীতে: She had worked there for five years before she moved।", en: "**Mould 3: past perfect** — for the past of the past: She had worked there for five years before she moved.", hi: "**ढाँचा 3: past perfect** — अतीत के अतीत में: She had worked there for five years before she moved।" },
            { bn: "সবচেয়ে কমন ভুল: বাংলার মতো সাধারণ বর্তমান কাল ব্যবহার করা — 'I am living here since 2020' বা 'I am here since morning'।", en: "The most common mistake: using a plain present like Bengali does — 'I am living here since 2020' or 'I am here since morning'.", hi: "सबसे आम गलती: बांग्ला की तरह साधारण वर्तमान काल — 'I am living here since 2020' या 'I am here since morning'।" },
            { bn: "ইংরেজি চায় পারফেক্ট: I have been living here since 2020, I have been here since morning।", en: "English wants the perfect: I have been living here since 2020, I have been here since morning.", hi: "अंग्रेज़ी perfect चाहती है: I have been living here since 2020, I have been here since morning।" },
            { bn: "অতীতের একটা বিন্দু থেকে এখন পর্যন্ত টেকে থাকা অবস্থা সাধারণ present-এ বলা যায় না — পারফেক্ট-ই সেই সেতু।", en: "A state holding from a past point until now cannot be said in the simple present — the perfect is that bridge.", hi: "अतीत के बिंदु से अब तक टिकी अवस्था साधारण present में नहीं कही जाती — perfect ही वह पुल है।" },
          ],
          formula: {
            bn: "কর্তা + have/has + V3 | কর্তা + have/has been + V-ing",
            en: "Subject + have/has + V3 | Subject + have/has been + V-ing",
            hi: "कर्ता + have/has + V3 | कर्ता + have/has been + V-ing",
          },
          examples: [
            {
              wrong: "I am living here since 2020.",
              right: "I have been living here since 2020.",
              note: {
                bn: "বর্তমানে চলা অবস্থা + শুরুর বিন্দু = present perfect continuous — have been living।",
                en: "An ongoing present state + a starting point = present perfect continuous — have been living.",
                hi: "वर्तमान में चल रही अवस्था + शुरुआती बिंदु = present perfect continuous — have been living।",
              },
            },
            {
              wrong: "I am here since morning.",
              right: "I have been here since morning.",
              note: {
                bn: "'সকাল থেকে এখানে আছি' — অতীত থেকে এখন পর্যন্ত, তাই have been here; শুধু am here নয়।",
                en: "'Here since morning' stretches from past to now — have been here, not plain am here.",
                hi: "'सुबह से यहाँ हूँ' — अतीत से अब तक, इसलिए have been here; केवल am here नहीं।",
              },
            },
            {
              wrong: "He works in this bank for ten years.",
              right: "He has worked in this bank for ten years.",
              note: {
                bn: "এখনো চলছে বোঝাতে present perfect — has worked; সাধারণ works মানে সাধারণ সত্য, ধারাবাহিকতা নয়।",
                en: "Still going on takes the present perfect — has worked; plain works reads as a general fact, not a continuing stretch.",
                hi: "अब भी चल रहा है = present perfect — has worked; साधारण works सामान्य सत्य बन जाता है।",
              },
            },
            {
              wrong: "She is waiting since two hours.",
              right: "She has been waiting for two hours.",
              note: {
                bn: "দুই ভুল একসাথে: tense (is → has been) আর since/for (two hours = দৈর্ঘ্য → for)।",
                en: "Two errors together: the tense (is → has been) and since/for (two hours = duration → for).",
                hi: "दो ग़लती एक साथ: tense (is → has been) और since/for (two hours = अवधि → for)।",
              },
            },
            {
              wrong: "We are friends since 2015.",
              right: "We have been friends since 2015.",
              note: {
                bn: "বন্ধুত্ব ২০১৫-তে শুরু, এখনো চলছে — সেতু দরকার: have been friends।",
                en: "The friendship began in 2015 and still holds — you need the bridge: have been friends.",
                hi: "दोस्ती २०१५ में शुरू, अब भी चल रही — पुल चाहिए: have been friends।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🧩 since-এর পরে পূর্ণ বাক্য: since I came here",
            en: "🧩 A full clause after since: since I came here",
            hi: "🧩 since के बाद पूरा वाक्य: since I came here",
          },
          lead: {
            bn: "শুধু 'থেকে ২০২০' নয় — 'যেদিন এসেছি থেকে'-ও বলা যায়; since-এর পরে পূর্ণ বাক্যের জাদু।",
            en: "Not just 'since 2020' — you can name the whole event: the magic of a full clause after since.",
            hi: "सिर्फ़ 'since 2020' नहीं — पूरी घटना भी कह सकते हैं: since के बाद पूरे वाक्य का जादू।",
          },
          points: [
            { bn: "since-এর পরে শুধু সময়ের নাম নয় — পুরো বাক্যও বসতে পারে, আর সেই বাক্য বলে দেয় শুরুটা কোন ঘটনা।", en: "After since you can put not only a time word but a whole clause — and it names the event that started it all.", hi: "since के बाद सिर्फ़ समय-शब्द नहीं — पूरा वाक्य भी आ सकता है, और वह बताता है शुरुआत कौन-सी घटना।" },
            { bn: "I have known Rima since we were in school — 'স্কুল-জীবন থেকেই রিমাকে চিনি'।", en: "I have known Rima since we were in school — the clause names where it all began.", hi: "I have known Rima since we were in school — 'स्कूल-जीवन थेके ही जानता हूँ'।" },
            { bn: "He has changed a lot since he got the job। We haven't met since she moved to Chattogram।", en: "He has changed a lot since he got the job. We haven't met since she moved to Chattogram.", hi: "He has changed a lot since he got the job। We haven't met since she moved to Chattogram।" },
            { bn: "**ভেতরের ক্রিয়া past simple** (were, got, moved) — শুরুর ঘটনাটা অতীতে ঘটেছে; বাইরের ক্রিয়া পারফেক্ট — ফল এখনো চলছে।", en: "**The verb inside is past simple** (were, got, moved) — the starting event happened in the past; the outer verb is perfect — the result continues now.", hi: "**अंदर की क्रिया past simple** (were, got, moved) — शुरुआती घटना अतीत में; बाहर की क्रिया perfect — नतीजा अब भी चल रहा है।" },
            { bn: "বাংলায় ঘটনাটা গুটিয়ে এক শব্দে বলা যায় ('স্কুল-জীবন থেকেই চিনি'); ইংরেজিতে ঘটনা বলতে চাইলে পূর্ণ ক্লজ লাগবেই: since we were in school।", en: "Bengali folds the event into one word ('স্কুল-জীবন থেকেই চিনি'); English needs the full clause to name the event: since we were in school.", hi: "बांग्ला घटना को एक शब्द में मोड़ देता है ('स्कूल-जीवन थेके'); अंग्रेज़ी में घटना कहने को पूरा क्लॉज़ चाहिए: since we were in school।" },
            { bn: "**কমন ভুল** — since-ক্লজে present perfect ঢোকানো: 'since I have come here' নয়, since I came here।", en: "**A common slip** — putting a present perfect inside the since-clause: not 'since I have come here' but since I came here.", hi: "**आम चूक** — since-क्लॉज़ में present perfect घुसाना: 'since I have come here' नहीं, since I came here।" },
            { bn: "শুরুর ঘটনা একবারের ঘটনা — তাই সহজ past।", en: "The starting event happened once — so plain past is enough.", hi: "शुरुआती घटना एक बार हुई — इसलिए साधारण past काफ़ी।" },
          ],
          formula: {
            bn: "কর্তা + have/has + verb + since + কর্তা + past verb",
            en: "Subject + have/has + verb + since + subject + past verb",
            hi: "कर्ता + have/has + verb + since + कर्ता + past verb",
          },
          examples: [
            {
              wrong: "I know him since we are children.",
              right: "I have known him since we were children.",
              note: {
                bn: "ভেতরের ক্লজ past simple — since we were children; আর বাইরে have known।",
                en: "The inner clause takes past simple — since we were children; the outer verb is have known.",
                hi: "अंदर का क्लॉज़ past simple — since we were children; बाहर have known।",
              },
            },
            {
              wrong: "She has been sad since her husband has died.",
              right: "She has been sad since her husband died.",
              note: {
                bn: "শুরুর ঘটনা একবারের — died (past); 'has died' এখানে দ্বিগুণ পারফেক্ট হয়ে যায়।",
                en: "The starting event happened once — died (past); 'has died' would double the perfects.",
                hi: "शुरुआती घटना एक बार हुई — died (past); 'has died' दो perfect बना देगा।",
              },
            },
            {
              wrong: "He hasn't called since he has left for Dubai.",
              right: "He hasn't called since he left for Dubai.",
              note: {
                bn: "একই নিয়ম — ক্লজের ভেতরে past simple: since he left।",
                en: "Same rule — past simple inside the clause: since he left.",
                hi: "वही नियम — क्लॉज़ के अंदर past simple: since he left।",
              },
            },
            {
              wrong: "I have been working here since I have finished my degree.",
              right: "I have been working here since I finished my degree.",
              note: {
                bn: "ডিগ্রি শেষ হওয়া = একবারের ঘটনা — finished; পারফেক্ট নয়।",
                en: "Finishing the degree is a one-time event — finished; not a perfect.",
                hi: "डिग्री पूरा होना एक बार की घटना — finished; perfect नहीं।",
              },
            },
            {
              wrong: "Things are better since I change my job.",
              right: "Things have been better since I changed my job.",
              note: {
                bn: "বাইরের ক্রিয়াও পারফেক্ট চায় — have been better; ভেতরে changed (past)।",
                en: "The outer verb also needs the perfect — have been better; inside, changed (past).",
                hi: "बाहर की क्रिया भी perfect चाहती है — have been better; अंदर changed (past)।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "⚠️ বাঙালি শিক্ষার্থীদের কমন ভুল: 'থেকে'-র পাঁচ ফাঁদ",
            en: "⚠️ Common mistakes by Bengali speakers: five 'থেকে' traps",
            hi: "⚠️ बांग्लाभाषी शिक्षार्थियों की आम गलतियाँ: 'थेके' के पाँच जाल",
          },
          lead: {
            bn: "'থেকে' শুনলে বাঙালি মগজ পাঁচ জায়গায় পা ফেলে — পাঁচটা ফাঁদ আগে থেকেই চিনে নিন।",
            en: "Hearing 'থেকে', the Bengali mind stumbles in five places — recognise the five traps in advance.",
            hi: "'थेके' सुनते ही बांग्ला दिमाग़ पाँच जगह ठोकर खाता है — पाँच जाल पहले से पहचान लें।",
          },
          points: [
            { bn: "**ফাঁদ ১: from দিয়ে চলমান সময়** — 'I live here from 2020' নয়; চলমান সময়ের শুরু বোঝাতে since: I have lived here since 2020।", en: "**Trap 1: from for ongoing time** — not 'I live here from 2020'; the start of ongoing time takes since: I have lived here since 2020.", hi: "**जाल 1: चलते समय के लिए from** — 'I live here from 2020' नहीं; चलते समय की शुरुआत = since: I have lived here since 2020।" },
            { bn: "from আসে অন্য প্রসঙ্গে — ঘণ্টার হিসেবে: The shop is open from 9 to 5 (অতীত-এখন সংযোগ নেই)।", en: "from belongs to other contexts — clock ranges: The shop is open from 9 to 5 (no past-to-now bridge).", hi: "from दूसरे संदर्भ में — घंटों की गिनती: The shop is open from 9 to 5 (अतीत-वर्तमान पुल नहीं)।" },
            { bn: "**ফাঁদ ২: পারফেক্ট বাদ দিয়ে সাধারণ বর্তমান** — 'I am here since morning' নয় → I have been here since morning।", en: "**Trap 2: dropping the perfect for a plain present** — not 'I am here since morning' → I have been here since morning.", hi: "**जाल 2: perfect छोड़कर साधारण present** — 'I am here since morning' नहीं → I have been here since morning।" },
            { bn: "**ফাঁদ ৩: since আর for জায়গা বদল করা** — সোনার নিয়ম মনে রাখুন: সংখ্যা = for, নাম-ঘোষিত বিন্দু = since।", en: "**Trap 3: swapping the two** — recall the golden rule: a number = for, a named point = since.", hi: "**जाल 3: since और for की अदला-बदली** — सुनहरा नियम: संख्या = for, नाम-गिना बिंदु = since।" },
            { bn: "**ফাঁদ ৪: দৈর্ঘ্যে বহুবচন বাদ** — for five years: years-এ -s লাগবেই; আর since 2020-তে কোনো the নেই।", en: "**Trap 4: missing the plural in durations** — for five years: years needs its -s; and since 2020 takes no 'the'.", hi: "**जाल 4: अवधि में plural छूटना** — for five years: years पर -s ज़रूरी; और since 2020 में कोई 'the' नहीं।" },
            { bn: "**ফাঁদ ৫: since-ক্লজে past simple-এর বদলে present perfect** — 'since I have come' নয় → since I came।", en: "**Trap 5: present perfect instead of past simple in the since-clause** — not 'since I have come' → since I came.", hi: "**जाल 5: since-क्लॉज़ में past simple की जगह present perfect** — 'since I have come' नहीं → since I came।" },
            { bn: "সব ভুলের মূল একটাই: বাংলার 'থেকে'-কে একটা ইংরেজি শব্দে ভান করা।", en: "All the errors share one root: disguising Bengali 'থেকে' as one English word.", hi: "सब गलतियों की जड़ एक: बांग्ला 'थेके' को एक अंग्रेज़ी शब्द में ढालना।" },
            { bn: "'থেকে' শুনলে প্রথম প্রশ্ন করুন — শুরুর বিন্দু না দৈর্ঘ্য? তারপর tense যাচাই করুন — পারফেক্ট আছে তো?", en: "When you hear 'থেকে', first ask — a starting point or a duration? Then check the tense — is the perfect there?", hi: "'थेके' सुनते ही पहला सवाल — शुरुआती बिंदु या अवधि? फिर tense जाँचें — perfect है या नहीं?" },
          ],
          examples: [
            {
              wrong: "I am working here from 2021.",
              right: "I have been working here since 2021.",
              note: {
                bn: "চলমান কাজের শুরু = since + perfect; from এখানে আসে না।",
                en: "The start of ongoing work = since + perfect; from never appears here.",
                hi: "चलते काम की शुरुआत = since + perfect; from यहाँ नहीं आता।",
              },
            },
            {
              wrong: "The shop is open since 9 to 5.",
              right: "The shop is open from 9 to 5.",
              note: {
                bn: "ঘণ্টার রেঞ্জ বোঝাতে from...to — since/for নয়; এখানে অতীত-এখন সংযোগ নেই।",
                en: "Clock ranges take from...to — not since/for; there is no past-to-now bridge here.",
                hi: "घंटों की रेंज के लिए from...to — since/for नहीं; यहाँ अतीत-वर्तमान पुल नहीं।",
              },
            },
            {
              wrong: "I know him since 2018.",
              right: "I have known him since 2018.",
              note: {
                bn: "পরিচয় এখনো চলছে — present perfect বাধ্যতামূলক: have known।",
                en: "The acquaintance still holds — the present perfect is compulsory: have known.",
                hi: "परिचय अब भी चल रहा है — present perfect अनिवार्य: have known।",
              },
            },
            {
              wrong: "We have lived here since 10 years.",
              right: "We have lived here for 10 years.",
              note: {
                bn: "সংখ্যা ('10') আছে মানে দৈর্ঘ্য — for; since-এর পরে সংখ্যা+একক আসে না।",
                en: "A number ('10') present means duration — for; a number + unit never follows since.",
                hi: "संख्या ('10') मौजूद = अवधि — for; since के बाद संख्या+इकाई नहीं आती।",
              },
            },
            {
              wrong: "He has been playing for afternoon.",
              right: "He has been playing since afternoon.",
              note: {
                bn: "'বিকেল থেকে' — দিনের অংশ একটা শুরুর বিন্দু, তাই since।",
                en: "'Since afternoon' — a part of the day is a starting point, so since.",
                hi: "'दोपहर से' — दिन का हिस्सा शुरुआती बिंदु है, इसलिए since।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "📖 ছোট গল্পে দেখা যাক: মিতার ব্যাংক-জীবন",
            en: "📖 A mini story: Mita's bank life",
            hi: "📖 छोटी कहानी: मीता की बैंक-ज़िंदगी",
          },
          lead: {
            bn: "মিতার একটা অফিস-দিন — যেখানে since আর for বারবার এসে নিজেদের পরিচয় দেয়।",
            en: "One day of Mita's office life — where since and for keep showing up to introduce themselves.",
            hi: "मीता का एक ऑफिस-दिन — जहाँ since और for बार-बार आकर अपना परिचय देते हैं।",
          },
          points: [
            { bn: "মিতা চাকরি পেয়েছিল ২০১৯-এ, এখনো সেই ব্যাংকে: Mita has worked at the bank **since** 2019।", en: "Mita got her job in 2019 and is still at that bank: Mita has worked at the bank since 2019.", hi: "मीता को नौकरी २०१९ में मिली थी, अब भी उसी बैंक में: Mita has worked at the bank since 2019।" },
            { bn: "মানে পাঁচ বছর ধরে: She has worked there **for** five years।", en: "In other words, five years: She has worked there for five years.", hi: "यानी पाँच साल: She has worked there for five years।" },
            { bn: "প্রতিদিন সকালে নয়টা থেকে ব্যস্ত: She has been busy **since** 9 o'clock।", en: "Busy from nine every morning: She has been busy since 9 o'clock.", hi: "रोज़ सुबह नौ से व्यस्त: She has been busy since 9 o'clock।" },
            { bn: "বিকেলে বন্ধু রিয়া ফোন করল: 'I haven't seen you **since** last Eid!' — গত ঈদের পর থেকে তো দেখিনি!", en: "In the afternoon her friend Ria called: 'I haven't seen you since last Eid!' — not since the last Eid!", hi: "दोपहर में दोस्त रिया का फ़ोन: 'I haven't seen you since last Eid!' — पिछली ईद के बाद से नहीं देखा!" },
            { bn: "মিতা হাসল: 'I have been waiting for this call **for** two months!' — দুই মাস ধরে এই ফোনের অপেক্ষা!", en: "Mita laughed: 'I have been waiting for this call for two months!' — two months of waiting for this call!", hi: "मीता हँसी: 'I have been waiting for this call for two months!' — दो महीने से इस फ़ोन की प्रतीक्षा!" },
            { bn: "রিয়া বলল, 'You look tired.' — 'Yes, I have been standing **since** morning' — সকাল থেকে দাঁড়িয়ে আছি।", en: "Ria said, 'You look tired.' — 'Yes, I have been standing since morning' — standing since morning.", hi: "रिया ने कहा, 'You look tired.' — 'Yes, I have been standing since morning' — सुबह से खड़ी हूँ।" },
            { bn: "শনিবারে দেখা করার কথা ঠিক হলো — **since** last Eid-এর অপেক্ষা শেষ হবে।", en: "They fixed a Saturday meeting — the since-last-Eid wait would finally end.", hi: "शनिवार मिलने का प्लान तय हुआ — since last Eid वाली प्रतीक्षा ख़त्म होगी।" },
          ],
          examples: [
            {
              wrong: "Mita works at the bank since 2019.",
              right: "Mita has worked at the bank since 2019.",
              note: {
                bn: "২০১৯ থেকে এখন পর্যন্ত — present perfect + since।",
                en: "From 2019 until now — present perfect + since.",
                hi: "२०१९ से अब तक — present perfect + since।",
              },
            },
            {
              wrong: "She has worked there since five years.",
              right: "She has worked there for five years.",
              note: {
                bn: "'five years' দৈর্ঘ্য — for; সংখ্যা দেখলেই for মনে রাখুন।",
                en: "'five years' is a duration — for; a number always signals for.",
                hi: "'five years' अवधि — for; संख्या देखते ही for।",
              },
            },
            {
              wrong: "I haven't seen you for last Eid.",
              right: "I haven't seen you since last Eid.",
              note: {
                bn: "'last Eid' শুরুর বিন্দু — since-প্যাক; for আসবে না।",
                en: "'last Eid' is a starting point — since-pack; no for.",
                hi: "'last Eid' शुरुआती बिंदु — since-पैक; for नहीं।",
              },
            },
            {
              wrong: "I am standing since morning.",
              right: "I have been standing since morning.",
              note: {
                bn: "সকাল থেকে চলা অবস্থা — present perfect continuous: have been standing।",
                en: "A state running since morning — present perfect continuous: have been standing.",
                hi: "सुबह से चली आ रही अवस्था — present perfect continuous: have been standing।",
              },
            },
            {
              wrong: "The bank is open since 9 to 5.",
              right: "The bank is open from 9 to 5.",
              note: {
                bn: "ঘণ্টার রেঞ্জ = from...to — অতীত থেকে এখন পর্যন্ত সংযোগ এখানে নেই।",
                en: "A clock range = from...to — no past-to-now bridge here.",
                hi: "घंटों की रेंज = from...to — यहाँ अतीत-वर्तमान पुल नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🧠 এক নজরে: since-for মনে রাখার ছয় দফা",
            en: "🧠 In a nutshell: six points to remember",
            hi: "🧠 एक नज़र में: याद रखने के छह बिंदु",
          },
          lead: {
            bn: "পুরো পাঠ ছয় লাইনে — ফোনের স্ক্রিনে চোখের সামনে রাখার মতো সারাংশ।",
            en: "The whole lesson in six lines — a summary to keep in front of your eyes.",
            hi: "पूरा पाठ छह पंक्तियों में — आँख के सामने रखने लायक़ सारांश।",
          },
          points: [
            { bn: "**since = শুরুর বিন্দু, for = দৈর্ঘ্য** — since 2019, since morning, since last Eid; for five years, for two hours।", en: "**since = starting point, for = duration** — since 2019, since morning, since last Eid; for five years, for two hours.", hi: "**since = शुरुआती बिंदु, for = अवधि** — since 2019, since morning, since last Eid; for five years, for two hours।" },
            { bn: "পরীক্ষা: 'কখন থেকে?' → since; 'কতদিন ধরে?' → for।", en: "The test: 'from when?' → since; 'how long?' → for.", hi: "परीक्षा: 'कब से?' → since; 'कितने समय से?' → for।" },
            { bn: "দুটোই পারফেক্ট tense-এর সাথী: have/has (been) + verb।", en: "Both pair with the perfect tense: have/has (been) + verb.", hi: "दोनों perfect tense के साथी: have/has (been) + verb।" },
            { bn: "'I am here since morning' নয় — I have been here since morning।", en: "Not 'I am here since morning' — I have been here since morning.", hi: "'I am here since morning' नहीं — I have been here since morning।" },
            { bn: "since-এর পরে পূর্ণ ক্লজও চলে, ভেতরে past simple: since I came here।", en: "A full clause works after since, past simple inside: since I came here.", hi: "since के बाद पूरा क्लॉज़ चलता है, अंदर past simple: since I came here।" },
            { bn: "ঘণ্টার রেঞ্জ (9 to 5) বোঝাতে from...to — since নয়।", en: "Clock ranges (9 to 5) take from...to — not since.", hi: "घंटों की रेंज (9 to 5) के लिए from...to — since नहीं।" },
          ],
          examples: [],
        },
      ],
      tips: [
        { bn: "দুটো শব্দ বাংলায় অনুবাদ করে রাখুন: since = 'থেকে' (শুরু), for = 'ধরে' (দৈর্ঘ্য) — মাথার বাংলা বাক্যে কোনটা আছে দেখুন।", en: "Anchor the two words in Bengali: since = 'থেকে' (start), for = 'ধরে' (duration) — check which one your mental Bengali sentence carries.", hi: "दोनों शब्द बांग्ला में जमा करें: since = 'थेके' (शुरुआत), for = 'धरे' (अवधि) — देखें मन के बांग्ला वाक्य में कौन है।" },
        { bn: "সংখ্যা + সময়ের একক দেখলে for — এই নিয়মের প্রায় কোনো ব্যতিক্রম নেই।", en: "A number + a time unit means for — this rule has almost no exceptions.", hi: "संख्या + समय इकाई देखें तो for — इस नियम का लगभग कोई अपवाद नहीं।" },
        { bn: "'last/this/that + সময়', সাল, দিনের নাম, ঘড়ার সময় — সব since-এর প্যাক।", en: "'last/this/that + time', years, day names, clock times — all belong to the since-pack.", hi: "'last/this/that + समय', साल, दिन के नाम, घड़ी का समय — सब since-पैक में।" },
        { bn: "since/for লেখার আগে tense যাচাই করুন — বেশিরভাগ সময় have/has + verb চাই।", en: "Before writing since/for, check the tense — most of the time have/has + verb is required.", hi: "since/for लिखने से पहले tense जाँचें — ज़्यादातर समय have/has + verb चाहिए।" },
        { bn: "'I am here since...' শোনামাত্র নিজেকে থামান — have been বসান।", en: "The moment you hear yourself saying 'I am here since...' — stop and insert have been.", hi: "'I am here since...' बोलते ही ख़ुद को रोकें — have been जोड़ें।" },
        { bn: "since-ক্লজের (since I came) ভেতরে past simple — present perfect নয়।", en: "Inside a since-clause (since I came) use past simple — not present perfect.", hi: "since-क्लॉज़ (since I came) के अंदर past simple — present perfect नहीं।" },
        { bn: "দোকানের সময়সূচি জাতীয় রেঞ্জে from...to — since/for নয়।", en: "For schedule ranges like shop hours use from...to — not since/for.", hi: "दुकान के समय जैसी रेंज के लिए from...to — since/for नहीं।" },
        { bn: "রোজ নিজের জীবন থেকে দুটো বাক্য লিখুন — একটা since দিয়ে, একটা for দিয়ে।", en: "Write two sentences from your own life daily — one with since, one with for.", hi: "रोज़ अपने जीवन से दो वाक्य लिखें — एक since से, एक for से।" },
        { bn: "প্রিয় মানুষের সাথে বন্ধুত্বের বয়স হিসেব করুন: I have known ___ for ___ years — সংখ্যাগুলো নিজে থেকেই মুখস্থ হয়ে যাবে।", en: "Count how long you have known your favourite people: I have known ___ for ___ years — the numbers will memorise themselves.", hi: "अपने क़रीबी लोगों को जाने कितने साल हुए, गिनें: I have known ___ for ___ years — संख्याएँ ख़ुद याद हो जाएँगी।" },
        { bn: "নাটক দেখার সময় 'since' শুনলে পরের অংশটা বিন্দু কিনা খেয়াল করুন — শোনা-প্রশিক্ষণ নিয়ম পাকা করে।", en: "While watching dramas, when you hear since, check whether the next part is a point — listening training cements the rule.", hi: "नाटक में since सुनते ही देखें अगला हिस्सा बिंदु है या नहीं — सुनने का अभ्यास नियम पक्का करता है।" },
      ],
      quiz: [
        {
          question: "I have lived in Dhaka ___ 2019.",
          options: ["for", "from", "since", "at"],
          answer: 2,
          explanation: { bn: "২০১৯ শুরুর বিন্দু (সাল) — since 2019; for-এর পরে সাল আসে না।", en: "2019 is a starting point (a year) — since 2019; for never takes a year.", hi: "२०१९ शुरुआती बिंदु (साल) — since 2019; for के बाद साल नहीं आता।" },
        },
        {
          question: "She has studied English ___ three years.",
          options: ["since", "for", "from", "during"],
          answer: 1,
          explanation: { bn: "'three years' = সংখ্যা + একক = দৈর্ঘ্য — for three years।", en: "'three years' = number + unit = duration — for three years.", hi: "'three years' = संख्या + इकाई = अवधि — for three years।" },
        },
        {
          question: "He has been sleeping ___ noon.",
          options: ["for", "from", "in", "since"],
          answer: 3,
          explanation: { bn: "'দুপুর থেকে' — ঘড়ার সময়/দিনের অংশ শুরুর বিন্দু — since noon।", en: "'From noon onward' — clock time / part of day is a starting point — since noon.", hi: "'दोपहर से' — घड़ी का समय/दिन का हिस्सा शुरुआती बिंदु — since noon।" },
        },
        {
          question: "We have been friends ___ ten years.",
          options: ["for", "since", "from", "during"],
          answer: 0,
          explanation: { bn: "'ten years' দৈর্ঘ্য — for ten years; since-এর পরে সংখ্যা+একক আসে না।", en: "'ten years' is a duration — for ten years; a number + unit never follows since.", hi: "'ten years' अवधि — for ten years; since के बाद संख्या+इकाई नहीं।" },
        },
        {
          question: "Which sentence is correct?",
          options: ["I am here since morning.", "I have been here since morning.", "I am here from morning.", "I have been here from morning."],
          answer: 1,
          explanation: { bn: "সকাল থেকে এখন পর্যন্ত = present perfect + since — have been here since morning।", en: "From morning until now = present perfect + since — have been here since morning.", hi: "सुबह से अब तक = present perfect + since — have been here since morning।" },
        },
        {
          question: "They have known each other ___ they were students.",
          options: ["for", "since", "from", "during"],
          answer: 1,
          explanation: { bn: "for-এর পরে পূর্ণ বাক্য আসে না; ঘটনা-ক্লজ = since they were students।", en: "for cannot take a full clause; an event clause takes since — since they were students.", hi: "for के बाद पूरा वाक्य नहीं; घटना-क्लॉज़ = since they were students।" },
        },
        {
          question: "My shop is open ___ 9 a.m. to 8 p.m.",
          options: ["since", "for", "from", "during"],
          answer: 2,
          explanation: { bn: "ঘণ্টার রেঞ্জ = from...to — অতীত-এখন সংযোগ নেই, তাই since/for নয়।", en: "A clock range = from...to — no past-to-now bridge, so not since/for.", hi: "घंटों की रेंज = from...to — अतीत-वर्तमान पुल नहीं, इसलिए since/for नहीं।" },
        },
        {
          question: "Which sentence is correct?",
          options: ["I have been waiting since two hours.", "I am waiting since two hours.", "I have been waiting for two hours.", "I wait here since two hours."],
          answer: 2,
          explanation: { bn: "'two hours' দৈর্ঘ্য + চলমান অবস্থা — have been waiting for two hours।", en: "'two hours' is a duration + an ongoing state — have been waiting for two hours.", hi: "'two hours' अवधि + चलती अवस्था — have been waiting for two hours।" },
        },
        {
          question: "She has not visited us ___ last December.",
          options: ["for", "from", "since", "at"],
          answer: 2,
          explanation: { bn: "'last December' শুরুর বিন্দু ('last + সময়' = since-প্যাক)।", en: "'last December' is a starting point ('last + time' = the since-pack).", hi: "'last December' शुरुआती बिंदु ('last + समय' = since-पैक)।" },
        },
        {
          question: "He has changed a lot ___ he got married.",
          options: ["for", "since", "from", "during"],
          answer: 1,
          explanation: { bn: "ঘটনা-ক্লজ (he got married, past simple) since-এর পরে বসে; for ক্লজ ধরে না।", en: "An event clause (he got married, past simple) follows since; for cannot hold a clause.", hi: "घटना-क्लॉज़ (he got married, past simple) since के बाद आता है; for क्लॉज़ नहीं लेता।" },
        },
      ],
    },
  },

  /* ── 2. Common Mistakes by Bengali Speakers ──────────────────────────── */
  {
    topic: "Common Mistakes by Bengali Speakers", // EXACT source string
    level: "beginner", // EXACT source string
    title: "Common Mistakes by Bengali Speakers (Beginner)", // EXACT source string
    unit: 0, // EXACT source unit
    sortOrder: 11,
    data: {
      title: {
        bn: "বাঙালি শিক্ষার্থীদের কমন ভুল (বিগিনার)",
        en: "Common Mistakes by Bengali Speakers (Beginner)",
        hi: "बंगाली स्पीकर्स की आम गलतियाँ (बिगिनर)",
      },
      intro: {
        bn: "এই পাঠ একটু আলাদা — এখানে নতুন নিয়ম শেখার বদলে আপনার মুখ থেকে বারবার বেরিয়ে আসা ভুলগুলোকে ধরে ধরে ঠিক করব। আগের পাঠগুলোতে আপনি present simple, past simple, article আর since/for শিখেছেন; নিয়ম জানা আর ব্যবহারে নামা — দুটো আলাদা দক্ষতা। কথা বলার তাড়ায়, পরীক্ষার ঘণ্টায়, চ্যাটে দ্রুত টাইপ করতে গিয়ে মগজ শব্দে-শব্দে অনুবাদের শর্টকাট নেয় — তখনই 'I am agree', 'He didn't went', 'informations' জন্ম নেয়। এই পাঠে আমরা দেখব কখন কোথায় ভুল হয়, তার মূল চার প্যাটার্ন, তারপর চারটা ভুল-পরিবার (ক্রিয়ার ভুল, article-ও গোনা-না-যাওয়া নাম, preposition-ও ক্রমের ক্যাল্ক, ছোট শব্দের ফাঁদ), এরপর টপ কমন ভুলের তালিকা আর শেষে একটা গল্পে সব মিলিয়ে নেব। পাঠ শেষে আপনার হাতে থাকবে দুই সেকেন্ডের একটা চেকলিস্ট — বলার বা লেখার আগে দ্রুত মিলিয়ে নেওয়ার।",
        en: "This lesson is a little different — instead of new rules, it hunts down the mistakes that keep escaping your mouth. In the earlier path lessons you learned present simple, past simple, articles and since/for; knowing a rule and using it under time pressure are two different skills. When you speak fast, sit an exam, or type quickly on chat, the mind takes the word-by-word translation shortcut — that is where 'I am agree', 'He didn't went' and 'informations' are born. Here we will see when and where mistakes happen, the four root patterns, then four mistake families (verb errors, articles and uncountables, preposition and order calques, small-word traps), then the top common-mistakes list, and finally a story that checks them all together. By the end you will hold a two-second checklist to run before you speak or write.",
        hi: "यह पाठ थोड़ा अलग है — नए नियम सिखाने की बजाय यह वह गलतियाँ पकड़ता है जो बार-बार आपके मुँह से निकलती हैं। पिछले पाठों में आपने present simple, past simple, articles और since/for सीखे; नियम जानना और जल्दी-जल्दी इस्तेमाल करना — दो अलग कौशल हैं। जल्दी में बोलते, परीक्षा में या चैट में टाइप करते समय दिमाग़ शब्द-दर-शब्द अनुवाद का शॉर्टकट लेता है — वहीं 'I am agree', 'He didn't went', 'informations' जन्म लेती हैं। यहाँ देखेंगे: गलतियाँ कब-कहाँ होती हैं, चार मूल पैटर्न, फिर चार गलती-परिवार (क्रिया की गलतियाँ, article और गिनती-बाहर नाम, preposition और क्रम का calque, छोटे शब्दों के जाल), फिर टॉप कॉमन मिस्टेक्स की सूची और अंत में एक कहानी में सब मिलाना। अंत में हाथ में रहेगी दो-सेकंड की चेकलिस्ट — बोलने या लिखने से पहले की जल्दी जाँच।",
      },
      roadmap: [
        { bn: "🕒 ভুলের মৌসুম — তাড়া, চ্যাট আর পরীক্ষার খাতা", en: "🕒 The season of mistakes — hurry, chat and the exam paper", hi: "🕒 गलती का मौसम — जल्दबाज़ी, चैट और परीक्षा" },
        { bn: "🧠 শব্দে-শব্দে অনুবাদের চার ছায়া — মূল প্যাটার্ন চেনা", en: "🧠 The four shadows of word-by-word translation — the root patterns", hi: "🧠 शब्द-दर-शब्द अनुवाद की चार परछाइयाँ — मूल पैटर्न" },
        { bn: "🐛 পরিবার ১: ক্রিয়ার ভুল — am agree, didn't went, She go", en: "🐛 Family 1: verb errors — am agree, didn't went, She go", hi: "🐛 परिवार 1: क्रिया की गलतियाँ — am agree, didn't went, She go" },
        { bn: "📚 পরিবার ২: article আর গোনা-না-যাওয়া নাম — a book, furnitures", en: "📚 Family 2: articles and uncountables — a book, furnitures", hi: "📚 परिवार 2: article और गिनती-बाहर नाम — a book, furnitures" },
        { bn: "🔗 পরিবার ৩: preposition ও ক্রমের ক্যাল্ক — discuss about, married with", en: "🔗 Family 3: preposition and order calques — discuss about, married with", hi: "🔗 परिवार 3: preposition और क्रम का calque — discuss about, married with" },
        { bn: "🗣️ পরিবার ৪: ছোট শব্দের ফাঁদ — more taller, bery, sip/ship", en: "🗣️ Family 4: small-word traps — more taller, bery, sip/ship", hi: "🗣️ परिवार 4: छोटे शब्दों के जाल — more taller, bery, sip/ship" },
        { bn: "⚠️ টপ কমন ভুল — Myself Rahim, He don't know, cousin brother", en: "⚠️ Top common mistakes — Myself Rahim, He don't know, cousin brother", hi: "⚠️ टॉप कॉमन मिस्टेक्स — Myself Rahim, He don't know, cousin brother" },
        { bn: "📖 রাহিমের প্রথম ক্লায়েন্ট-কল — ভুল ধরে ধরে নিজেই ঠিক", en: "📖 Rahim's first client call — catching and fixing his own mistakes", hi: "📖 राहिम का पहला क्लाइंट-कॉल — अपनी गलतियाँ ख़ुद पकड़कर ठीक" },
        { bn: "📊 এক নজরে ছয় দফা — পুরো পাঠের সারাংশ", en: "📊 Six points at a glance — the whole lesson in summary", hi: "📊 एक नज़र में छह बिंदु — पूरे पाठ का सारांश" },
      ],
      sections: [
        {
          heading: {
            bn: "🕒 কখন, কোথায় ভুল হয়? — তাড়া, চ্যাট আর পরীক্ষার খাতা",
            en: "🕒 When and where mistakes happen — hurry, chat and the exam paper",
            hi: "🕒 गलतियाँ कब, कहाँ होती हैं — जल्दबाज़ी, चैट और परीक्षा",
          },
          lead: {
            bn: "নিয়ম জানা আর তাড়ায় ব্যবহার করা আলাদা দক্ষতা — ভুলের আসল ঠিকানা এখানেই।",
            en: "Knowing a rule and using it in a hurry are different skills — this is where mistakes truly live.",
            hi: "नियम जानना और जल्दी में इस्तेमाल करना अलग कौशल है — गलती का असली पता यहीं है।",
          },
          points: [
            { bn: "ভুলের নির্দিষ্ট মৌসুম আছে — ক্লাসে হাত তুলে দ্রুত উত্তর, ইন্টারভিউয়ের নার্ভস, চ্যাটে টাইপিং-এর দৌড়, পরীক্ষার খাতায় সময় কম।", en: "Mistakes have a season — answering fast with a raised hand in class, interview nerves, the race of typing on chat, less time in the exam hall.", hi: "गलती का मौसम तय है — कक्षा में जल्दी उत्तर, इंटरव्यू की घबराहट, चैट में टाइपिंग की दौड़, परीक्षा में समय की कमी।" },
            { bn: "এই মুহূর্তগুলোতেই মগজ শর্টকাট নেয়; ধীরে লিখলে বাক্য ঠিকই আসে।", en: "In exactly these moments the mind takes its shortcut; written slowly, the sentence comes out fine.", hi: "इन्हीं लम्हों में दिमाग़ शॉर्टकट लेता है; धीरे लिखें तो वाक्य ठीक निकलता है।" },
            { bn: "তাড়ায় প্রথমে বাংলা বাক্যটা মাথায় এঁকে ফেলা হয়, তারপর তার উপর ইংরেজি শব্দ বসানো হয়।", en: "In a hurry, the Bengali sentence is drawn in the head first and English words are then placed on top of it.", hi: "जल्दी में पहले बांग्ला वाक्य दिमाग़ में बनता है, फिर उस पर अंग्रेज़ी शब्द बैठाए जाते हैं।" },
            { bn: "মনে রাখুন — ভুল করা দুর্বলতা নয়, প্রতিটা ভাষা-শেখার মধ্যপথ।", en: "Remember — making mistakes is not weakness; it is the middle of every language journey.", hi: "याद रखें — गलती करना कमज़ोरी नहीं, हर भाषा-सीख का बीच का रास्ता है।" },
            { bn: "কিন্তু একই ভুল বারবার হলে অভ্যাস হয়ে বসে যায়, আর শ্রোতার কানে 'গন্ধ' হয়ে থেকে যায়।", en: "But the same mistake repeated becomes habit, and it leaves a 'smell' in the listener's ear.", hi: "पर वही गलती बार-बार हो तो आदत बन जाती है, और सुनने वाले के कान में एक 'गंध' छोड़ जाती है।" },
            { bn: "মানে বোঝা গেলেও বাক্যটা 'সঠিক' শোনায় না।", en: "That is, even when the meaning lands, the sentence does not sound right.", hi: "यानी मतलब समझ आ जाए तब भी वाक्य 'सही' नहीं लगता।" },
            { bn: "তাই উপায় দুটো: প্যাটার্ন চেনা, আর বলার/লেখার আগে দুই সেকেন্ডের একটা চেক।", en: "So there are two remedies: know the patterns, and run a two-second check before speaking or writing.", hi: "इलाज दो: पैटर्न पहचानना, और बोलने/लिखने से पहले दो-सेकंड की जाँच।" },
            { bn: "নিচের উদাহরণগুলো তিনটে আসল জায়গা থেকে — মুখের কথা, চ্যাট, আর খাতা।", en: "The examples below come from three real places — speech, chat, and the notebook.", hi: "नीचे के उदाहरण तीन असली जगहों से हैं — बोलचाल, चैट और कॉपी।" },
          ],
          examples: [
            {
              wrong: "I will go to home now.",
              right: "I will go home now.",
              note: {
                bn: "'বাড়িতে'-র 'তে' থেকে to চলে আসে; কিন্তু home, here, there-এর আগে to লাগে না — go home, come here। তাড়ায় কথা বলতে গিয়ে এই ভুল সবচেয়ে বেশি হয়।",
                en: "The 'তে' of 'বাড়িতে' pulls in a to; but home, here and there take no to — go home, come here. This error happens most when speaking in a hurry.",
                hi: "'বাড়িতে' के 'ते' से to आ जाता है; पर home, here, there से पहले to नहीं लगता — go home, come here। जल्दी में बोलते समय यह सबसे आम है।",
              },
            },
            {
              wrong: "My all friends are coming to the party.",
              right: "All my friends are coming to the party.",
              note: {
                bn: "বাংলা ক্রম 'আমার সব বন্ধুরা' সরাসরি ক্যাল্ক; ইংরেজি চায় all + my — All my friends, All my books।",
                en: "A straight calque of the Bengali order 'আমার সব বন্ধুরা'; English wants all + my — All my friends, All my books.",
                hi: "बांग्ला क्रम 'आमार सব বন্ধুরা' का सीधा calque; अंग्रेज़ी चाहती है all + my — All my friends, All my books।",
              },
            },
            {
              wrong: "He didn't replied to my message.",
              right: "He didn't reply to my message.",
              note: {
                bn: "অতীতের দাগটা didn't-ই বহন করে, তাই পরের verb ফিরে যায় base রূপে — didn't reply। চ্যাটে এই ভুল সবচেয়ে ঘনঘন দেখা যায়।",
                en: "The past mark is carried by didn't alone, so the verb returns to its base form — didn't reply. On chat this error shows up most often.",
                hi: "भूत का निशान didn't अपने पास ही रखता है, इसलिए क्रिया base रूप में लौटती है — didn't reply। चैट में यह गलती सबसे ज़्यादा दिखती है।",
              },
            },
            {
              wrong: "Last night I saw a bad dream.",
              right: "Last night I had a bad dream.",
              note: {
                bn: "'স্বপ্ন দেখা'-র 'দেখা' থেকে saw চলে আসে; ইংরেজি ছাঁচ আলাদা — have a dream। খাতায়-চ্যাটে এই ফসিল প্রতিদিন।",
                en: "The 'দেখা' of 'স্বপ্ন দেখা' produces saw; the English template is different — have a dream. This fossil appears daily in chat and notebooks.",
                hi: "'স্বপ্ন দেখা' का 'দেখা' saw ले आता है; अंग्रेज़ी टेम्पलेट अलग है — have a dream। चैट और कॉपी में यह फ़ॉसिल रोज़ दिखता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🧠 ভুলের মূল প্যাটার্ন: শব্দে-শব্দে অনুবাদের ছায়া",
            en: "🧠 The root pattern: the shadow of word-by-word translation",
            hi: "🧠 गलती का मूल पैटर्न: शब्द-दर-शब्द अनुवाद की परछाई",
          },
          lead: {
            bn: "প্রায় প্রতিটা ভুলের পেছনে চারটা প্যাটার্ন — একবার চিনলে অর্ধেক ভুল আগেই আটকে যায়।",
            en: "Four patterns sit behind almost every mistake — spot them once and half the errors never happen.",
            hi: "लगभग हर गलती के पीछे चार पैटर्न — एक बार पहचान लें तो आधी गलती पहले ही रुक जाती है।",
          },
          points: [
            { bn: "**দ্বিগুণ জোর** — বাংলা 'আরও ভালো' ভাবটা দুই শব্দে চলে, তাই more better বেরিয়ে আসে; ইংরেজিতে তুলনা একবারই — better।", en: "**Double emphasis** — the Bengali idea 'আরও ভালো' travels in two words, so more better slips out; in English the comparison is marked once — better.", hi: "**दोहरा ज़ोर** — बांग्ला 'আরও ভালো' भाव दो शब्दों में, इसलिए more better निकल आता है; अंग्रेज़ी में तुलना एक बार — better।" },
            { bn: "**জোড়া জুড়ে ফেলা** — 'ফিরে আসা' দুই ভাবের নাম, তাই return back; কিন্তু return-এর ভেতরেই 'ফেরা' বসে আছে।", en: "**Pair-joining** — 'ফিরে আসা' names two ideas, so return back appears; but return already holds 'coming back' inside it.", hi: "**जोड़ी जोड़ना** — 'फিরे আসा' दो भावों का नाम, इसलिए return back; पर return के भीतर 'लौटना' पहले से है।" },
            { bn: "**বাংলা বাক্য-ক্রম** — 'কেন তুমি কাঁদছ?' → Why you are crying?; ইংরেজি প্রশ্নে ক্রম উল্টে যায়: Why + are + you + crying?", en: "**Bengali sentence order** — 'কেন তুমি কাঁদছ?' becomes Why you are crying?; an English question flips the order: Why + are + you + crying?", hi: "**बांग्ला वाक्य-क्रम** — 'কেন তুমি কাঁদছ?' → Why you are crying?; अंग्रेज़ी प्रश्न में क्रम पलट जाता है: Why + are + you + crying?" },
            { bn: "**সব নামে -s** — 'তথ্যগুলো', 'আসবাবগুলো' — '-গুলো' থেকে -s; কিন্তু information, furniture-এর মতো নাম কখনো বহুবচন হয় না।", en: "**-s on every noun** — 'তথ্যগুলো', 'আসবাবগুলো' — the '-গুলো' becomes -s; but nouns like information and furniture never take a plural.", hi: "**हर नाम पर -s** — 'তথ্যগুলো', 'আসবাবগুলো' — '-গুলো' से -s; पर information, furniture जैसे नाम कभी बहुवचन नहीं होते।" },
            { bn: "মনে রাখুন — ভুলের মুহূর্তে আপনি আসলে বাংলায় ভাবছিলেন; এটা দোষ নয়, স্বাভাবিক।", en: "Remember — in the moment of the mistake you were actually thinking in Bengali; that is not a fault, it is natural.", hi: "याद रखें — गलती के क्षण में आप असल में बांग्ला में सोच रहे थे; यह दोष नहीं, स्वाभाविक।" },
            { bn: "সমাধান একটাই: ইংরেজি বাক্যকে গোটা ছাঁচ হিসেবে শেখা, শব্দে ভাঙা নয়।", en: "The fix is one: learn English sentences as whole templates, not word-by-word puzzles.", hi: "इलाज एक: अंग्रेज़ी वाक्य को पूरे टेम्पलेट की तरह सीखें, शब्द-दर-शब्द नहीं।" },
          ],
          examples: [
            {
              wrong: "This road is more better than that one.",
              right: "This road is better than that one.",
              note: {
                bn: "তুলনা একবারই হয় — better নিজেই 'ভালো'-র তুলনা; তার সাথে more জুড়লে একই দাগ দুইবার।",
                en: "Comparison happens once — better is already the comparative of good; adding more marks the same thing twice.",
                hi: "तुलना एक बार ही होती है — better पहले से good का comparative है; more जोड़ने पर वही निशान दो बार।",
              },
            },
            {
              wrong: "I will return back the money tomorrow.",
              right: "I will return the money tomorrow.",
              note: {
                bn: "return-এর ভেতরেই 'ফিরিয়ে দেওয়া' আছে; back জুড়লে একই ভাব দুইবার — বাংলা 'ফিরিয়ে ফেরত' জোড়ার ছায়া।",
                en: "return already means 'give/come back'; adding back says the same idea twice — the shadow of the Bengali pair 'ফিরিয়ে ফেরত'.",
                hi: "return के भीतर ही 'वापस देना/आना' है; back जोड़ने पर वही भाव दो बार — बांग्ला जोड़ी की परछाई।",
              },
            },
            {
              wrong: "Why you are crying?",
              right: "Why are you crying?",
              note: {
                bn: "প্রশ্নে ইংরেজি ক্রম বদলে যায়: wh-শব্দ + সাহায্যকারী + কর্তা; বাংলা ক্রমে দাঁড়িয়ে থাকলে ঠিক এই ভুলই হয়।",
                en: "English questions change the order: wh-word + helper + subject; standing on the Bengali order produces exactly this error.",
                hi: "प्रश्न में अंग्रेज़ी क्रम बदल जाता है: wh-शब्द + सहायक + कर्ता; बांग्ला क्रम पर डटे रहने से यही गलती होती है।",
              },
            },
            {
              wrong: "The police collected many informations.",
              right: "The police collected a lot of information.",
              note: {
                bn: "information কখনো বহুবচন হয় না — -s আসবেই না; হিসাব লাগলে a lot of information বা a piece of information।",
                en: "information never becomes plural — no -s ever; for counting use a lot of information or a piece of information.",
                hi: "information कभी बहुवचन नहीं होता — -s आएगा ही नहीं; गिनती के लिए a lot of information या a piece of information।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🐛 ভুল-পরিবার ১: ক্রিয়ার ভুল — 'I am agree', 'didn't went', 'She go'",
            en: "🐛 Mistake family 1: verbs — 'I am agree', 'didn't went', 'She go'",
            hi: "🐛 गलती-परिवार 1: क्रिया — 'I am agree', 'didn't went', 'She go'",
          },
          lead: {
            bn: "I am agree, didn't went, She go — তিন ফাঁদের পরিবার, যা সবার মুখে ঘুরে।",
            en: "I am agree, didn't went, She go — a family of three traps on everyone's lips.",
            hi: "I am agree, didn't went, She go — तीन जालों का परिवार, जो हर ज़ुबान पर घूमता है।",
          },
          points: [
            { bn: "**be-verb + agree-জাত ক্রিয়া** — বাংলায় বলি 'আমি একমত আছি', 'আছি' থেকে am চলে আসে; কিন্তু agree নিজেই পূর্ণ ক্রিয়া — I agree।", en: "**Be-verb + 'agreement' verbs** — Bengali says 'আমি একমত আছি', the 'আছি' pulls in an am; but agree is already a full verb — I agree.", hi: "**be-verb + 'सहमति' क्रियाएँ** — बांग्ला में 'আমি একমত আছি', 'आছি' से am आ जाता है; पर agree पहले से पूर्ण क्रिया — I agree।" },
            { bn: "একই গ্রুপে understand, know, want: 'I am understand' নয় — I understand।", en: "The same group holds understand, know, want: not 'I am understand' but I understand.", hi: "वही समूह: understand, know, want — 'I am understand' नहीं, I understand।" },
            { bn: "**didn't-এর পরে অতীত রূপ** — অতীতের দাগ didn't নিজেই বহন করে, তাই পরের verb base রূপে ফেরে: didn't go, didn't eat।", en: "**Past form after didn't** — didn't itself carries the past mark, so the verb returns to its base form: didn't go, didn't eat.", hi: "**didn't के बाद भूत रूप** — भूत का निशान didn't स्वयं रखता है, इसलिए क्रिया base रूप में लौटती है: didn't go, didn't eat।" },
            { bn: "বাংলায় 'গেল না', 'খেল না' — ক্রিয়াটাই অতীত হয়ে যায়, তাই হাত থেকে went চলে আসে।", en: "In Bengali the verb itself goes past ('গেল না', 'খেল না') — which is why went keeps escaping.", hi: "बांग्ला में 'गेल নा', 'खेल নा' — क्रिया ही भूत हो जाती है, इसलिए went फिसल जाता है।" },
            { bn: "**he/she/it-এ -s বাদ** — প্রতিদিনের রুটিনের বাক্যে তৃতীয় পুরুষ একবচনে verb-এ -s: She goes, He plays।", en: "**Missing -s with he/she/it** — in daily-routine sentences the third person singular takes -s: She goes, He plays.", hi: "**he/she/it पर -s छूटना** — रोज़ की रुटीन वाले वाक्यों में तृतीय पुरुष एकवचन पर क्रिया में -s: She goes, He plays।" },
            { bn: "বাংলা ক্রিয়া কর্তা বদলালেও প্রায় বদলায় না ('আমি যাই, সে যায়' — খুব অল্প), তাই এই -s প্রতিবার হাত থেকে পড়ে যায়।", en: "Bengali verbs barely change with the subject ('আমি যাই, সে যায়' — almost the same), so this -s keeps falling off.", hi: "बांग्ला क्रिया कर्ता बदलने पर भी लगभग नहीं बदलती ('আमি यাই, সে যায়' — लगभग वही), इसलिए यह -s बार-बार छूट जाती है।" },
          ],
          formula: {
            bn: "didn't + ক্রিয়ার base রূপ (didn't go) | he/she/it + verb-s (goes)",
            en: "didn't + base verb (didn't go) | he/she/it + verb-s (goes)",
            hi: "didn't + base क्रिया (didn't go) | he/she/it + verb-s (goes)",
          },
          examples: [
            {
              wrong: "I am agree with your opinion.",
              right: "I agree with your opinion.",
              note: {
                bn: "agree একা ক্রিয়া — 'একমত আছি'-র 'আছি' থেকে am এলে দুই ক্রিয়া একসাথে বসে যায়; ইংরেজিতে I agree-ই পূর্ণ বাক্য।",
                en: "agree is a full verb; the 'আছি' of 'একমত আছি' adds an am, parking two verbs together — I agree alone is the complete sentence.",
                hi: "agree पूर्ण क्रिया है; 'एकमत আছি' का 'আছি' am ले आता है और दो क्रियाएँ जमा हो जाती हैं — I agree अकेला ही पूर्ण वाक्य है।",
              },
            },
            {
              wrong: "I am understand the lesson now.",
              right: "I understand the lesson now.",
              note: {
                bn: "understand নিজেই ক্রিয়া — আগে be-verb জুড়লে বাক্য ভেঙে যায়; 'বোঝা' একটা কাজ, অবস্থা-শব্দ নয়।",
                en: "understand is itself the verb; bolting a be-verb in front breaks the sentence — 'understanding' is an action, not a state-word.",
                hi: "understand स्वयं क्रिया है; आगे be-verb जोड़ने से वाक्य टूट जाता है — 'समझना' एक काम है, अवस्था-शब्द नहीं।",
              },
            },
            {
              wrong: "He didn't went to the office yesterday.",
              right: "He didn't go to the office yesterday.",
              note: {
                bn: "অতীতের দাগ didn't-এর ভেতরেই — পরের verb ফিরে যায় base রূপে: didn't go; didn't + went মানে অতীত দুইবার।",
                en: "The past mark lives inside didn't, so the verb returns to base: didn't go; didn't + went counts the past twice.",
                hi: "भूत का निशान didn't के भीतर है — क्रिया base रूप में लौटती है: didn't go; didn't + went भूत को दो बार गिनता है।",
              },
            },
            {
              wrong: "She go to school by rickshaw.",
              right: "She goes to school by rickshaw.",
              note: {
                bn: "he/she/it + প্রতিদিনের কাজ = verb + -s — goes, plays, watches; বাংলা ক্রিয়ায় এমন বদল নেই বলেই -s পড়ে যায়।",
                en: "he/she/it + a daily routine = verb + -s — goes, plays, watches; because Bengali verbs never change like this, the -s slips off.",
                hi: "he/she/it + रोज़ का काम = क्रिया + -s — goes, plays, watches; बांग्ला क्रिया में यह बदल न होने से ही -s छूट जाती है।",
              },
            },
            {
              wrong: "We didn't ate the lunch.",
              right: "We didn't eat the lunch.",
              note: {
                bn: "didn't-এর পরে সবসময় base verb — eat; ate শুধু একা-অতীতে চলে (We ate)।",
                en: "After didn't always the base verb — eat; ate belongs to the bare past (We ate).",
                hi: "didn't के बाद सदा base क्रिया — eat; ate केवल अकेले भूत में चलती है (We ate)।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "📚 ভুল-পরিবার ২: article আর গোনা-না-যাওয়া নাম — 'I read book', 'furnitures'",
            en: "📚 Mistake family 2: articles and uncountables — 'I read book', 'furnitures'",
            hi: "📚 गलती-परिवार 2: article और गिनती-बाहर नाम — 'I read book', 'furnitures'",
          },
          lead: {
            bn: "বাংলায় article নেই, তাই শব্দ নগ্ন হয়ে যায়; আর কিছু নাম কখনো বহুবচন হয়ই না।",
            en: "Bengali has no articles, so nouns go naked; and some nouns never take a plural at all.",
            hi: "बांग्ला में article नहीं, इसलिए नाम निर्वस्त्र हो जाते हैं; और कुछ नाम कभी बहुवचन होते ही नहीं।",
          },
          points: [
            { bn: "**article হারানো** — বাংলায় a/an/the-এর মতো শব্দ নেই, তাই 'আমি বই পড়ি' সরাসরি I read book হয়ে যায়।", en: "**Lost articles** — Bengali has no words like a/an/the, so 'আমি বই পড়ি' becomes a bare I read book.", hi: "**article खो जाना** — बांग्ला में a/an/the जैसे शब्द नहीं, इसलिए 'আমি বই পড়ি' सीधे I read book बन जाता है।" },
            { bn: "ইংরেজিতে একবচন গণনাযোগ্য নাম কখনো একা দাঁড়ায় না — সামনে a, an বা the লাগবেই: I read a book, She is a teacher।", en: "In English a singular countable noun never stands alone — a, an or the must come first: I read a book, She is a teacher.", hi: "अंग्रेज़ी में एकवचन गिनती-योग्य नाम कभी अकेला नहीं खड़ा रहता — a, an या the ज़रूरी: I read a book, She is a teacher।" },
            { bn: "**যে নাম কখনো বহুবচন হয় না** — information, furniture, advice, news: এদের সাথে -s আসবে না, many-ও আসবে না।", en: "**Nouns that never go plural** — information, furniture, advice, news: no -s with them, and no many either.", hi: "**कभी बहुवचन न होने वाले नाम** — information, furniture, advice, news: इनके साथ -s नहीं, many भी नहीं।" },
            { bn: "হিসাব চাইলে ছাঁচ মুখস্থ করুন — a piece of information, a piece of furniture, a piece of advice, a piece of news।", en: "When counting is needed, memorise the template — a piece of information, a piece of furniture, a piece of advice, a piece of news.", hi: "गिनना हो तो टेम्पलेट याद करें — a piece of information, a piece of furniture, a piece of advice, a piece of news।" },
            { bn: "খেয়াল করুন — এই নামগুলোর সাথে সবসময় একবচন verb-ই চলে: The news is good, The furniture is new।", en: "Notice — these nouns always take a singular verb: The news is good, The furniture is new.", hi: "ध्यान दें — इन नामों के साथ हमेशा एकवचन क्रिया: The news is good, The furniture is new।" },
          ],
          table: {
            head: [
              { bn: "কখনো বহুবচন নয়", en: "Never plural", hi: "कभी बहुवचन नहीं" },
              { bn: "হিসাবের ছাঁচ", en: "To count it", hi: "गिनने का टेम्पलेट" },
            ],
            rows: [
              [
                { bn: "information", en: "information", hi: "information" },
                { bn: "a piece of information", en: "a piece of information", hi: "a piece of information" },
              ],
              [
                { bn: "furniture", en: "furniture", hi: "furniture" },
                { bn: "a piece of furniture", en: "a piece of furniture", hi: "a piece of furniture" },
              ],
              [
                { bn: "advice", en: "advice", hi: "advice" },
                { bn: "a piece of advice", en: "a piece of advice", hi: "a piece of advice" },
              ],
              [
                { bn: "news", en: "news", hi: "news" },
                { bn: "a piece of news", en: "a piece of news", hi: "a piece of news" },
              ],
            ],
          },
          examples: [
            {
              wrong: "Every night I read book before sleep.",
              right: "Every night I read a book before sleep.",
              note: {
                bn: "একবচন গণনাযোগ্য নাম একা থাকে না — book-এর আগে a (বা the) লাগবেই।",
                en: "A singular countable noun never stands alone — book needs a (or the) in front.",
                hi: "एकवचन गिनती-योग्य नाम अकेला नहीं रहता — book से पहले a (या the) लगेगा ही।",
              },
            },
            {
              wrong: "My mother is teacher.",
              right: "My mother is a teacher.",
              note: {
                bn: "পেশা বোঝাতেও article লাগে — a teacher, an engineer; 'শিক্ষিকা' একা চলে না।",
                en: "Professions take an article too — a teacher, an engineer; a bare noun will not do.",
                hi: "पेशा बताते समय भी article लगता है — a teacher, an engineer; नंगा नाम नहीं चलेगा।",
              },
            },
            {
              wrong: "They bought new furnitures for the flat.",
              right: "They bought new furniture for the flat.",
              note: {
                bn: "furniture কখনো বহুবচন হয় না — furnitures ইংরেজিতে নেই; টুকরো হিসাব চাইলে a piece of furniture।",
                en: "furniture never goes plural — 'furnitures' does not exist; for pieces say a piece of furniture.",
                hi: "furniture कभी बहुवचन नहीं होता — 'furnitures' अंग्रेज़ी में नहीं है; टुकड़ों के लिए a piece of furniture कहें।",
              },
            },
            {
              wrong: "My teacher gave me many advices.",
              right: "My teacher gave me a lot of advice.",
              note: {
                bn: "advice-ও গোনা যায় না — advices নয়, many-ও নয়; a lot of advice / a piece of advice।",
                en: "advice is uncountable too — no advices, no many; use a lot of advice / a piece of advice.",
                hi: "advice भी गिनती से बाहर है — advices नहीं, many भी नहीं; a lot of advice / a piece of advice कहें।",
              },
            },
            {
              wrong: "I have a good news for you.",
              right: "I have good news for you.",
              note: {
                bn: "news দেখতে বহুবচনের মতো, কিন্তু কখনো গোনা যায় না — a news নয়; The news is good-এও একবচন verb।",
                en: "news looks plural but is never counted — no 'a news'; even The news is good keeps a singular verb.",
                hi: "news देखने में बहुवचन-सा है, पर कभी गिना नहीं जाता — 'a news' नहीं; The news is good में भी एकवचन क्रिया।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🔗 ভুল-পরিবার ৩: preposition ও ক্রমের ক্যাল্ক — 'discuss about', 'married with', 'listen music'",
            en: "🔗 Mistake family 3: preposition and order calques — 'discuss about', 'married with', 'listen music'",
            hi: "🔗 गलती-परिवार 3: preposition और क्रम का calque — 'discuss about', 'married with', 'listen music'",
          },
          lead: {
            bn: "এক preposition বাড়তি, এক অনুপস্থিত — discuss about আর listen music-এর রহস্য এখানে।",
            en: "One preposition extra, one missing — the mystery of discuss about and listen music.",
            hi: "एक preposition ज़्यादा, एक ग़ायब — discuss about और listen music का रहस्य।",
          },
          points: [
            { bn: "**বাড়তি preposition** — বাংলা 'পরিকল্পনা নিয়ে আলোচনা করা'-র 'নিয়ে' থেকে discuss about; কিন্তু discuss-এর ভেতরেই 'নিয়ে' আছে — discuss the plan।", en: "**An extra preposition** — Bengali 'পরিকল্পনা নিয়ে আলোচনা করা' produces discuss about; but discuss already contains 'about' — discuss the plan.", hi: "**फ़ालतू preposition** — बांग्ला 'परिकल্পনা नিয়ে আলোচনা করা' से discuss about; पर discuss के भीतर ही 'बारे में' है — discuss the plan।" },
            { bn: "'কারো সাথে বিবাহ' — 'সাথে' থেকে married with; ইংরেজি চায় married to।", en: "'কারো সাথে বিবাহ' — the 'সাথে' produces married with; English wants married to.", hi: "'किसी के साथ विवाह' — 'সাথे' से married with; अंग्रेज़ी चाहती है married to।" },
            { bn: "**অনুপস্থিত preposition** — বাংলা 'গান শোনা' এক ক্রিয়া, তাই listen music; ইংরেজিতে listen আলাদা ক্রিয়া, কান কোথায় পড়বে বোঝাতে to লাগে — listen to music।", en: "**A missing preposition** — Bengali 'গান শোনা' is one verb, so listen music; but listen is a separate verb that needs to to aim the ear — listen to music.", hi: "**ग़ायब preposition** — बांग्ला 'गान शोনা' एक क्रिया, इसलिए listen music; पर listen अलग क्रिया, to चाहिए — listen to music।" },
            { bn: "**ক্রমের ক্যাল্ক** — 'আমি এটা খুব পছন্দ করি' → I very like it; ইংরেজিতে very শেষের দিকে যায় — I like it very much।", en: "**Order calques** — 'আমি এটা খুব পছন্দ করি' becomes I very like it; in English very moves towards the end — I like it very much.", hi: "**क्रम का calque** — 'আমি এটা খুব পছন্দ করি' → I very like it; अंग्रेज़ी में very पीछे चला जाता है — I like it very much।" },
            { bn: "'আমাকে বুঝিয়ে দিল' → explained me the sum; ইংরেজি ছাঁচ explain something to someone।", en: "'আমাকে বুঝিয়ে দিল' becomes explained me the sum; the English template is explain something to someone.", hi: "'आমাকে বুঝিয়ে দিল' → explained me the sum; अंग्रेज़ी टेम्पलेट explain something to someone।" },
            { bn: "কায়দা একটাই: বাংলা ক্রিয়া-জুটি ভাঙতে যাবেন না; প্রতিটা ইংরেজি ক্রিয়াকে তার নিজের preposition-সহ মুখস্থ করুন।", en: "The habit is one: do not dismantle Bengali verb-pairs; memorise each English verb together with its own preposition.", hi: "आदत एक ही: बांग्ला क्रिया-जोड़ियाँ न तोड़ें; हर अंग्रेज़ी क्रिया अपने preposition के साथ याद करें।" },
          ],
          formula: {
            bn: "discuss + বিষয় | married to কাউকে | listen to কিছু | explain বিষয় to কাউকে",
            en: "discuss + thing | married to someone | listen to something | explain something to someone",
            hi: "discuss + विषय | married to कोई | listen to कुछ | explain विषय to कोई",
          },
          examples: [
            {
              wrong: "I very like this song.",
              right: "I like this song very much.",
              note: {
                bn: "বাংলা ক্রম 'খুব পছন্দ করি' থেকে very মাঝে চলে আসে; ইংরেজিতে like + বস্তু + very much।",
                en: "The Bengali order 'খুব পছন্দ করি' drags very into the middle; English runs like + object + very much.",
                hi: "बांग्ला क्रम 'खुब পছন্দ করি' से very बीच में आ जाता है; अंग्रेज़ी में like + वस्तु + very much।",
              },
            },
            {
              wrong: "We discussed about the new plan.",
              right: "We discussed the new plan.",
              note: {
                bn: "discuss-এর ভেতরেই 'নিয়ে' আছে — বস্তু সরাসরি বসে: discuss the plan; about লাগবে না।",
                en: "'About' is already inside discuss — the object follows directly: discuss the plan; no about.",
                hi: "'बारे में' discuss के भीतर है — वस्तु सीधे बैठती है: discuss the plan; about नहीं।",
              },
            },
            {
              wrong: "She is married with a lawyer.",
              right: "She is married to a lawyer.",
              note: {
                bn: "'সাথে' শুনে with আসে, কিন্তু married-এর স্থায়ী জুটি to — married to someone।",
                en: "The 'সাথে' tempts with, but married keeps a fixed partner — married to someone.",
                hi: "'साथ' सुनकर with आ जाता है, पर married की पक्की जोड़ी to है — married to someone।",
              },
            },
            {
              wrong: "I love to listen music at night.",
              right: "I love to listen to music at night.",
              note: {
                bn: "listen আলাদা ক্রিয়া, কান কোথায় পড়বে বোঝাতে to লাগে — listen to music, listen to me; 'শোনা' এক ক্রিয়া বলে to হারিয়ে যায়।",
                en: "listen is its own verb and needs to to aim the ear — listen to music, listen to me; the one-word Bengali 'শোনা' makes the to vanish.",
                hi: "listen स्वतंत्र क्रिया है, कान कहाँ लगेगा यह to बताता है — listen to music, listen to me; 'शोना' एक क्रिया होने से to छूट जाता है।",
              },
            },
            {
              wrong: "The teacher explained me the sum.",
              right: "The teacher explained the sum to me.",
              note: {
                bn: "'আমাকে বুঝিয়ে দিল' ক্রম থেকে explained me the sum; ইংরেজি ছাঁচ: explain something to someone।",
                en: "From the Bengali order 'আমাকে বুঝিয়ে দিল' comes explained me the sum; the English template is explain something to someone.",
                hi: "'आमাকে বুঝিয়ে দিল' क्रम से explained me the sum बनता है; अंग्रेज़ी टेम्पलेट है explain something to someone।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🗣️ ভুল-পরিবার ৪: ছোট শব্দের বড় ফাঁদ — 'more taller', 'repeat again', 'bery', 'sip'",
            en: "🗣️ Mistake family 4: small words, big traps — 'more taller', 'repeat again', 'bery', 'sip'",
            hi: "🗣️ गलती-परिवार 4: छोटे शब्द, बड़े जाल — 'more taller', 'repeat again', 'bery', 'sip'",
          },
          lead: {
            bn: "ছোট শব্দ, ছোট ভুল — কিন্তু very/sip-জাতীয় ফাঁদেই শ্রোতার কান সবার আগে ধরে ফেলে।",
            en: "Small words, small slips — but very/sip-type traps are what ears catch first of all.",
            hi: "छोटे शब्द, छोटी चूक — पर very/sip जैसे जाल ही कान सबसे पहले पकड़ते हैं।",
          },
          points: [
            { bn: "**দ্বিগুণ তুলনা** — তুলনার দাগ একবারই: more taller নয়, taller; more better নয়, better।", en: "**Double comparison** — the comparative mark happens once: not more taller but taller, not more better but better.", hi: "**दोहरी तुलना** — तुलना का निशान एक बार ही: more taller नहीं, taller; more better नहीं, better।" },
            { bn: "**বাড়তি জোড়া** — repeat-এর ভেতরেই 'আবার': repeat again নয়, Could you repeat that?; return-এর ভেতরেই 'ফেরা' — return back নয়।", en: "**Extra pairs** — repeat already holds 'again' inside: not repeat again but Could you repeat that?; return already holds 'back' — never return back.", hi: "**फ़ालतू जोड़ी** — repeat के भीतर ही 'फिर': repeat again नहीं, Could you repeat that?; return के भीतर ही 'वापसी' — return back नहीं।" },
            { bn: "**v-ফাঁদ** — বাংলায় v-এর দাঁত-ঠোঁট-জোড়া শব্দ নেই, তাই very 'bery', van 'ban', vet 'bet' হয়ে যায়।", en: "**The v-trap** — Bengali has no v sound (teeth on lip), so very becomes 'bery', van becomes 'ban', vet becomes 'bet'.", hi: "**v-जाल** — बांग्ला में v की दाँत-ोंठ ध्वनि नहीं, इसलिए very 'bery', van 'ban', vet 'bet' बन जाता है।" },
            { bn: "v বলার সময় উপরের দাঁত নিচের ঠোঁটে রাখুন, ঠোঁট বন্ধ করবেন না।", en: "For v rest your upper teeth on your lower lip, and do not close the lips.", hi: "v बोलते समय ऊपरी दाँत निचले होंठ पर रखें, होंठ बंद न करें।" },
            { bn: "**s/sh-ফাঁদ** — বাংলায় স-শ আলাদা অক্ষর, ইংরেজিতেও তা-ই: sip (এক ঢোক চুমুক) আর ship (জাহাজ) — অর্থ আকাশ-পাতাল।", en: "**The s/sh-trap** — Bengali keeps স and শ apart and so does English: sip (one gulp) and ship (a big boat) — worlds apart.", hi: "**s/sh-जाल** — बांग्ला में स-श अलग, अंग्रेज़ी में भी: sip (एक घूँट) और ship (जहाज़) — अर्थ ज़मीन-आसमान।" },
            { bn: "বানান দেখে উচ্চারণ মনে রাখুন — শব্দ মুখস্থ করলে তার শব্দটাও মুখস্থ করুন।", en: "Match pronunciation to spelling — when you memorise a word, memorise its sound too.", hi: "वर्तनी देखकर उच्चारण जोड़ें — शब्द याद करें तो उसकी ध्वनि भी याद करें।" },
          ],
          formula: {
            bn: "v = দাঁত ঠোঁটে (very, vet) | s = 'স' (sip) | sh = 'শ' (ship)",
            en: "v = teeth on lip (very, vet) | s = 'স' (sip) | sh = 'শ' (ship)",
            hi: "v = दाँत होंठ पर (very, vet) | s = 'स' (sip) | sh = 'श' (ship)",
          },
          examples: [
            {
              wrong: "My new phone is more faster than yours.",
              right: "My new phone is faster than yours.",
              note: {
                bn: "faster নিজেই তুলনা — more জুড়লে দাগ দুইবার; বাংলা 'আরও দ্রুত' দুই শব্দের ছায়া।",
                en: "faster is already a comparison — adding more marks it twice; the shadow of two-word Bengali 'আরও দ্রুত'.",
                hi: "faster पहले से तुलना है — more जोड़ने पर निशान दो बार; बांग्ला 'आरও द्रुत' के दो शब्दों की परछाई।",
              },
            },
            {
              wrong: "Sorry, please repeat again.",
              right: "Sorry, could you repeat that?",
              note: {
                bn: "repeat-এর ভেতরেই 'আবার' বসে আছে — again জুড়লে দুইবার; 'আবার বলবেন?' = Could you repeat that?",
                en: "'Again' already lives inside repeat — adding again doubles it; 'আবার বলবেন?' = Could you repeat that?",
                hi: "repeat के भीतर ही 'फिर' है — again जोड़ने पर दो बार; 'আবার বলবেন?' = Could you repeat that?",
              },
            },
            {
              wrong: "This biryani is bery tasty.",
              right: "This biryani is very tasty.",
              note: {
                bn: "v = দাঁত-ঠোঁট শব্দ; b = ঠোঁট বন্ধ। 'bery' লেখা আর বলা — দুটোই ইংরেজির গন্ধ নষ্ট করে; সঠিক very।",
                en: "v is a teeth-on-lip sound; b closes the lips. Writing and saying 'bery' both spoil the English flavour — the word is very.",
                hi: "v = दाँत-ोंठ ध्वनि; b = होंठ बंद। 'bery' लिखना और बोलना — दोनों ही अंग्रेज़ी का स्वाद बिगाड़ते हैं; शब्द है very।",
              },
            },
            {
              wrong: "I took my dog to the bet.",
              right: "I took my dog to the vet.",
              note: {
                bn: "একই v-ফাঁদ — vet (পশু-ডাক্তার) নাকি bet (বাজি)? দাঁত ঠোঁটে রাখলেই vet হবে।",
                en: "The same v-trap — vet (animal doctor) or bet (a wager)? Teeth resting on the lip gives vet.",
                hi: "वही v-जाल — vet (पशु-डॉक्टर) या bet (शर्त)? दाँत होंठ पर रखें तो vet बनेगा।",
              },
            },
            {
              wrong: "We went to Cox's Bazar by sip.",
              right: "We went to Cox's Bazar by ship.",
              note: {
                bn: "s = 'স', sh = 'শ' — sip (চুমুক) আর ship (জাহাজ) এক অক্ষরে আকাশ-পাতাল; উচ্চারণে সতর্ক থাকুন।",
                en: "s = 'স', sh = 'শ' — sip (a gulp) and ship (a boat) are one letter apart yet worlds apart; watch your pronunciation.",
                hi: "s = 'स', sh = 'श' — sip (घूँट) और ship (जहाज़) एक अक्षर के अंतर पर ज़मीन-आसमान; उच्चारण से सावधान रहें।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "⚠️ বাঙালি শিক্ষার্থীদের কমন ভুল: যা প্রতিদিন শোনা যায়",
            en: "⚠️ Common mistakes by Bengali speakers: what you hear every day",
            hi: "⚠️ बांग्ला स्पीकर्स की आम गलतियाँ: जो रोज़ सुनाई देती हैं",
          },
          lead: {
            bn: "পাঁচটা ভুল যা প্রায় প্রতিটা বাঙালি শিক্ষার্থী একবার করে — আপনি না করেই এগোন।",
            en: "Five mistakes almost every Bengali learner makes once — move ahead without ever making them.",
            hi: "पाँच गलतियाँ जो लगभग हर बांग्ला शिक्षार्थी एक बार करता है — आप बिना किए आगे बढ़ें।",
          },
          points: [
            { bn: "**Myself Rahim** — বাংলা 'আমি নিজে রহিম বলছি' ক্যাল্ক; ইংরেজিতে I am Rahim বা This is Rahim।", en: "**Myself Rahim** — a calque of Bengali 'আমি নিজে রহিম বলছি'; English says I am Rahim or This is Rahim.", hi: "**Myself Rahim** — बांग्ला 'আমি নিজে রহিম বলছি' का calque; अंग्रेज़ी में I am Rahim या This is Rahim।" },
            { bn: "**He don't know** — he/she/it-এর জুটি doesn't; don't-এর ভেতরে do+not লুকানো, সেই do-এর -s-টাই হারিয়ে যায়।", en: "**He don't know** — he/she/it pairs with doesn't; inside don't hides do+not, and that do's -s is exactly what goes missing.", hi: "**He don't know** — he/she/it की जोड़ी doesn't; don't के भीतर do+not, और उसी do का -s खो जाता है।" },
            { bn: "**two persons** — person-এর সাধারণ বহুবচন people; persons শুধু আইনি-সাইনবোর্ড ভাষায় বেঁচে আছে।", en: "**two persons** — the everyday plural of person is people; persons survives only in legal-signboard language.", hi: "**two persons** — person का रोज़मर्रा बहुवचन people; persons केवल क़ानूनी-साइनबोर्ड भाषा में।" },
            { bn: "**cousin brother/sister** — বাংলা 'কাজিন ভাই/বোন' ক্যাল্ক; ইংরেজিতে শুধুই cousin — ছেলে না মেয়ে, প্রসঙ্গই বলে দেয়।", en: "**cousin brother/sister** — a calque of Bengali 'কাজিন ভাই/বোন'; English uses just cousin — context tells whether he or she.", hi: "**cousin brother/sister** — बांग्ला 'काजिन भाइ/बोन' का calque; अंग्रेज़ी में बस cousin — संदर्भ बता देता है।" },
            { bn: "**Yesterday I have gone** — গতকালের মতো নির্দিষ্ট, শেষ হয়ে যাওয়া অতীতে past simple: Yesterday I went।", en: "**Yesterday I have gone** — for a finished, dated past like yesterday use the past simple: Yesterday I went.", hi: "**Yesterday I have gone** — बीते कल जैसे तय, ख़त्म भूत में past simple: Yesterday I went।" },
            { bn: "এই পাঁচটা ঠিক হলে আপনার ইংরেজির 'গন্ধ' এক নিঃশ্বাসে বদলে যাবে — শ্রোতার কান সবার আগে এদেরই ধরে।", en: "Fix these five and the 'flavour' of your English changes in one breath — ears catch these first of all.", hi: "ये पाँच ठीक हो जाएँ तो आपकी अंग्रेज़ी की 'महक' एक साँस में बदल जाएगी — कान सबसे पहले इन्हीं को पकड़ते हैं।" },
          ],
          examples: [
            {
              wrong: "Myself Rahim, I am from Sylhet.",
              right: "I am Rahim, and I am from Sylhet.",
              note: {
                bn: "'নিজে' থেকে myself এসে পরিচয়ের ক্রিয়া হয়ে যায়; পরিচয় দিতে I am / This is — myself শুধু আত্মবাচক বস্তু (I hurt myself)।",
                en: "'নিজে' turns myself into the introducing verb; introductions use I am / This is — myself is only a reflexive object (I hurt myself).",
                hi: "'निजे' से myself आकर परिचय की क्रिया बन जाती है; परिचय में I am / This is — myself केवल reflexive वस्तु है (I hurt myself)।",
              },
            },
            {
              wrong: "He don't know my address.",
              right: "He doesn't know my address.",
              note: {
                bn: "he/she/it + doesn't; don't শুধু I/you/we/they-র জুটি — হারানো -s টা does-এর ভেতরেই লুকানো।",
                en: "he/she/it pairs with doesn't; don't belongs to I/you/we/they — the missing -s is hiding inside does.",
                hi: "he/she/it के साथ doesn't; don't केवल I/you/we/they की जोड़ी — खोया हुआ -s does के भीतर है।",
              },
            },
            {
              wrong: "There were forty persons in the bus.",
              right: "There were forty people in the bus.",
              note: {
                bn: "person-এর বহুবচন people — forty persons শুধু পুলিশ-রিপোর্টের ভাষা; কথ্য-লেখ্য সবখানে people।",
                en: "The everyday plural of person is people — forty persons belongs to police reports; speech and writing want people.",
                hi: "person का रोज़मर्रा बहुवचन people — forty persons केवल पुलिस-रिपोर्ट की भाषा; बोलचाल-लिखावट में people।",
              },
            },
            {
              wrong: "Rahul is my cousin brother.",
              right: "Rahul is my cousin.",
              note: {
                bn: "'কাজিন ভাই'-র সরাসরি অনুবাদ; ইংরেজি cousin নিরপেক্ষ — ছেলে/মেয়ে বোঝাতে নাম বা প্রসঙ্গই যথেষ্ট।",
                en: "A straight translation of 'কাজিন ভাই'; English cousin is neutral — the name or the context tells whether he or she.",
                hi: "'काजिन भाइ' का सीधा अनुवाद; अंग्रेज़ी cousin तटस्थ है — लड़का/लड़की का पता नाम या संदर्भ से चलता है।",
              },
            },
            {
              wrong: "Yesterday I have gone to the market.",
              right: "Yesterday I went to the market.",
              note: {
                bn: "'গতকাল' নির্দিষ্ট, শেষ হয়ে যাওয়া অতীত — past simple: went; have gone মানে হবে এখনো ফেরেনি।",
                en: "'Yesterday' is a fixed, finished past — past simple: went; have gone would mean he is still not back.",
                hi: "'কাল' (बीता कल) तय, ख़त्म हुआ भूत है — past simple: went; have gone होता तो मतलब अभी तक लौटा नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "📖 ছোট গল্পে দেখা যাক: রাহিমের প্রথম ক্লায়েন্ট-কল",
            en: "📖 A short story: Rahim's first client call",
            hi: "📖 एक छोटी कहानी: राहिम का पहला क्लाइंट-कॉल",
          },
          lead: {
            bn: "রাহিমের প্রথম ক্লায়েন্ট-কল — যেখানে সে নিজের ভুল নিজেই ধরে ধরে ঠিক করে।",
            en: "Rahim's first client call — where he catches his own mistakes and fixes them one by one.",
            hi: "राहिम का पहला क्लाइंट-कॉल — जहाँ वह अपनी गलतियाँ ख़ुद पकड़कर ठीक करता है।",
          },
          points: [
            { bn: "রাহিম জীবনে প্রথমবার বিদেশি ক্লায়েন্টের সাথে অফিসে কথা বলল; শুরুতেই বলে ফেলল, 'I am agree with you, sir'।", en: "For the first time in his life, Rahim spoke to a foreign client at the office; he opened with, 'I am agree with you, sir'.", hi: "ज़िंदगी में पहली बार राहिम दफ़्तर में विदेशी क्लाइंट से बात करने बैठा; शुरू में ही निकल गया, 'I am agree with you, sir'।" },
            { bn: "তারপরই মনে পড়ল: agree একা ক্রিয়া, am-এর দরকার নেই — নিজেই ঠিক করে বলল: **I agree with you, sir**।", en: "Then he remembered: agree is a verb on its own, no am needed — he corrected himself: I agree with you, sir.", hi: "फिर याद आया: agree अकेली क्रिया, am की ज़रूरत नहीं — ख़ुद ही सुधरकर बोला: I agree with you, sir।" },
            { bn: "ক্লায়েন্ট জিজ্ঞেস করল ডিজাইন-ফাইল পাঠানো হয়েছে কি না; রাহিম বলল, 'Yesterday I have sent you the file'।", en: "The client asked whether the design file had been sent; Rahim said, 'Yesterday I have sent you the file'.", hi: "क्लाइंट ने पूछा डिज़ाइन-फ़ाइल भेजी या नहीं; राहिम बोला, 'Yesterday I have sent you the file'।" },
            { bn: "মগজে বাজ পড়ল: 'গতকাল' মানে শেষ হয়ে যাওয়া অতীত, past simple — **I sent you the file yesterday**।", en: "A bell rang in his head: 'গতকাল' means a finished past, past simple — I sent you the file yesterday.", hi: "दिमाग़ में घंटी बजी: 'গতকाल' यानी ख़त्म हुआ भूत, past simple — I sent you the file yesterday।" },
            { bn: "এবার পরিকল্পনার পালা; মুখ ফসকে বলল, 'I will discuss about the plan' — থামল: discuss-এর পরে about নেই।", en: "Then came the plan; it slipped out, 'I will discuss about the plan' — he stopped: no about after discuss.", hi: "फिर योजना की बारी; मुँह से निकल गया, 'I will discuss about the plan' — रुक गया: discuss के बाद about नहीं।" },
            { bn: "শুধরে বলল: **I will discuss the plan with my manager and come back to you**।", en: "He corrected it: I will discuss the plan with my manager and come back to you.", hi: "सुधरकर बोला: I will discuss the plan with my manager and come back to you।" },
            { bn: "কল শেষে ক্লায়েন্ট হেসে বলল, 'Your English is very good!' — রাহিম খুশি; এবার সে 'bery' নয়, ঠিক 'very'-ই বলেছিল।", en: "When the call ended the client smiled, 'Your English is very good!' — Rahim was delighted; this time he had said 'very', not 'bery'.", hi: "कॉल के अंत में क्लाइंट हँसकर बोला, 'Your English is very good!' — राहिम खुश हुआ; इस बार 'bery' नहीं, सही 'very' बोला था।" },
            { bn: "ভুল করা প্রগতির অংশ — নিজের ভুল নিজে ধরতে পারাই আসল জয়।", en: "Making mistakes is part of progress — catching your own is the real win.", hi: "गलती करना प्रगति का हिस्सा है — अपनी गलती ख़ुद पकड़ पाना असली जीत है।" },
          ],
          examples: [
            {
              wrong: "I am agree with you, sir.",
              right: "I agree with you, sir.",
              note: {
                bn: "গল্পের প্রথম ফাঁদ — agree একা ক্রিয়া; am ছাড়াই মতামত পূর্ণ হয়।",
                en: "The story's first trap — agree stands alone; without am the opinion is complete.",
                hi: "कहानी का पहला जाल — agree अकेली क्रिया है; am के बिना ही राय पूरी होती है।",
              },
            },
            {
              wrong: "Yesterday I have sent you the file.",
              right: "I sent you the file yesterday.",
              note: {
                bn: "নির্দিষ্ট অতীতের সময় (yesterday) থাকলে past simple — sent; have sent এখনো-চলছে ভাব দেয়।",
                en: "With a fixed past time (yesterday) use the past simple — sent; have sent suggests it is still open.",
                hi: "तय भूत-समय (yesterday) के साथ past simple — sent; have sent 'अभी खुला है' भाव देता है।",
              },
            },
            {
              wrong: "I will discuss about the plan with my manager.",
              right: "I will discuss the plan with my manager.",
              note: {
                bn: "discuss-এর ভেতরেই 'নিয়ে' — about বাদ; শেষে come back to you-ও জুড়া যায়।",
                en: "'About' is already inside discuss — drop it; you can then add come back to you at the end.",
                hi: "'बारे में' discuss के भीतर है — about हटाइए; आगे come back to you भी जोड़ सकते हैं।",
              },
            },
            {
              wrong: "I am understanding your problem, sir.",
              right: "I understand your problem, sir.",
              note: {
                bn: "কলের মাঝের ফাঁদ — understand একা ক্রিয়া; am জুড়লে দুই ক্রিয়া এক আসনে ঠেলে বসে।",
                en: "The mid-call trap — understand is a verb on its own; adding am pushes two verbs into one seat.",
                hi: "कॉल के बीच का जाल — understand अकेली क्रिया है; am जोड़ने पर दो क्रियाएँ एक ही आसन में धकेल दी जाती हैं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "📊 এক নজরে: ছয় দফায় পুরো পাঠ",
            en: "📊 In a nutshell: the whole lesson in six points",
            hi: "📊 एक नज़र में: छह बिंदुओं में पूरा पाठ",
          },
          lead: {
            bn: "গল্প শেষ, শিক্ষা বাকি নেই — ছয় দফার ছোট্ট তালিকায় পুরো পাঠ গুটিয়ে ফেলুন।",
            en: "Story done, nothing left unlearned — fold the whole lesson into a six-point mini list.",
            hi: "कहानी ख़त्म, कुछ भी न छूटा — छह बिंदु की छोटी सूची में पूरा पाठ समेट लें।",
          },
          points: [
            { bn: "**agree, understand একা ক্রিয়া** — আগে am/is/are লাগে না।", en: "**agree, understand are verbs on their own** — no am/is/are before them.", hi: "**agree, understand अकेली क्रियाएँ** — आगे am/is/are नहीं।" },
            { bn: "**didn't-এর পরে সবসময় base verb** — didn't go, didn't eat।", en: "**After didn't always the base verb** — didn't go, didn't eat.", hi: "**didn't के बाद सदा base क्रिया** — didn't go, didn't eat।" },
            { bn: "**he/she/it + প্রতিদিনের কাজ** = verb + -s — goes, plays।", en: "**he/she/it + a daily routine** = verb + -s — goes, plays.", hi: "**he/she/it + रोज़ का काम** = क्रिया + -s — goes, plays।" },
            { bn: "**একবচন গণনাযোগ্য নাম একা থাকে না** — a book, a teacher; information/furniture/advice/news কখনো -s নেয় না।", en: "**A singular countable noun never stands alone** — a book, a teacher; information/furniture/advice/news never take -s.", hi: "**एकवचन गिनती-योग्य नाम अकेला नहीं रहता** — a book, a teacher; information/furniture/advice/news कभी -s नहीं लेते।" },
            { bn: "**তুলনা একবারই** — better, taller; return back-এ back নেই, repeat again-এ again নেই, discuss-এর পরে about নেই, married TO someone।", en: "**Comparison happens once** — better, taller; no back in return back, no again in repeat again, no about after discuss, married TO someone.", hi: "**तुलना एक बार** — better, taller; return back में back नहीं, repeat again में again नहीं, discuss के बाद about नहीं, married TO someone।" },
            { bn: "**প্রশ্নে ক্রম** — Why are you crying?; v-তে দাঁত ঠোঁটে (very, vet), s আর sh আলাদা (sip/ship)।", en: "**Question order** — Why are you crying?; teeth on the lip for v (very, vet), and s vs sh stay apart (sip/ship).", hi: "**प्रश्न क्रम** — Why are you crying?; v के लिए दाँत होंठ पर (very, vet), s और sh अलग (sip/ship)।" },
          ],
          examples: [],
        },
      ],
      tips: [
        { bn: "agree, understand, know — এরা একা ক্রিয়া; আগে am/is/are ঢুকতে চাইলে থামুন।", en: "agree, understand, know are verbs on their own; when an am/is/are tries to sneak in front, stop.", hi: "agree, understand, know अकेली क्रियाएँ हैं; आगे am/is/are घुसने चाहे तो रुक जाइए।" },
        { bn: "didn't-এর পরে হাত স্বয়ংক্রিয়ভাবে base verb-এ যাক — didn't go, didn't eat, didn't reply।", en: "Train your hand to drop into the base verb after didn't — didn't go, didn't eat, didn't reply.", hi: "didn't के बाद हाथ स्वयं base क्रिया पर जाए — didn't go, didn't eat, didn't reply।" },
        { bn: "he/she/it আর রুটিনের বাক্য — verb-এ -s খোঁজুন: goes, plays, watches; বাকি কর্তারা খালি রূপ।", en: "With he/she/it and routine sentences, look for -s on the verb: goes, plays, watches; everyone else stays bare.", hi: "he/she/it और रुटीन वाक्यों में क्रिया पर -s खोजिए: goes, plays, watches; बाकी कर्ता खाली रूप में।" },
        { bn: "একবচন গণনাযোগ্য নাম লিখলে যাচাই করুন — a/an/the আছে তো? I read a book, She is a teacher।", en: "Whenever you write a singular countable noun, check — is a/an/the there? I read a book, She is a teacher.", hi: "एकवचन गिनती-योग्य नाम लिखते समय जाँचें — a/an/the है या नहीं? I read a book, She is a teacher।" },
        { bn: "information, furniture, advice, news — মুখস্থ তালিকা; এদের সাথে -s বা many কখনো নয়, হিসাবে a piece of।", en: "information, furniture, advice, news — memorise the list; never -s or many with them, count with a piece of.", hi: "information, furniture, advice, news — यह सूची याद कर लें; इनके साथ -s या many कभी नहीं, गिनती में a piece of।" },
        { bn: "তুলনা একবারই — more + -er কখনো নয়; better, taller, faster একা-ই যথেষ্ট।", en: "Compare once — never more + -er; better, taller, faster are enough alone.", hi: "तुलना एक बार ही — more + -er कभी नहीं; better, taller, faster अकेले काफ़ी हैं।" },
        { bn: "return, repeat, discuss — প্রত্যেকের ভেতরে বাড়তি শব্দটা আগে থেকেই বসে: back, again, about।", en: "return, repeat, discuss — each already carries the extra word inside: back, again, about.", hi: "return, repeat, discuss — हर एक के भीतर वह अतिरिक्त शब्द पहले से है: back, again, about।" },
        { bn: "ক্রিয়া-preposition জুটি একসাথে মুখস্থ করুন: married TO, listen TO, depend ON, arrive AT।", en: "Memorise verb-preposition pairs together: married TO, listen TO, depend ON, arrive AT.", hi: "क्रिया-preposition जोड़ियाँ एक साथ याद करें: married TO, listen TO, depend ON, arrive AT।" },
        { bn: "প্রশ্ন বানাতে বাংলা ক্রম ছেড়ে দিন: wh + সাহায্যকারী + কর্তা — Why are you crying?", en: "Drop the Bengali order in questions: wh + helper + subject — Why are you crying?", hi: "प्रश्न बनाते समय बांग्ला क्रम छोड़ दें: wh + सहायक + कर्ता — Why are you crying?" },
        { bn: "আয়নার সামনে উচ্চারণ যাচাই করুন — v-তে দাঁত ঠোঁটে (very, vet), s-এ দাঁত খোলা (sip), sh-এ ঠোঁট গোল (ship)।", en: "Check pronunciation in a mirror — teeth on the lip for v (very, vet), open teeth for s (sip), rounded lips for sh (ship).", hi: "आईने में उच्चारण जाँचें — v में दाँत होंठ पर (very, vet), s में दाँत खुले (sip), sh में होंठ गोल (ship)।" },
      ],
      quiz: [
        {
          question: "I ___ with your idea.",
          options: ["am agree", "agree", "am agreed", "am agreeing"],
          answer: 1,
          explanation: { bn: "agree একা ক্রিয়া — am/agreed/agreeing কোনোটাই লাগবে না: I agree with your idea।", en: "agree is a verb on its own — no am, no agreed, no agreeing: I agree with your idea.", hi: "agree अकेली क्रिया है — am/agreed/agreeing कुछ भी नहीं: I agree with your idea।" },
        },
        {
          question: "He didn't ___ to school yesterday.",
          options: ["went", "go", "gone", "goes"],
          answer: 1,
          explanation: { bn: "অতীত বহন করে didn't-ই — পরের verb base রূপে: didn't go; went/gone/goes তিনটাই এখানে ভুল।", en: "didn't alone carries the past — the verb after it stays base: didn't go; went/gone/goes are all wrong here.", hi: "भूत didn't ही ले जाता है — बाद की क्रिया base रूप में: didn't go; went/gone/goes तीनों यहाँ ग़लत।" },
        },
        {
          question: "She ___ to college every day.",
          options: ["go", "going", "goes", "is go"],
          answer: 2,
          explanation: { bn: "she + প্রতিদিনের রুটিন = goes — তৃতীয় পুরুষ একবচনে verb-এ -s।", en: "she + a daily routine = goes — third person singular takes -s on the verb.", hi: "she + रोज़ की रुटीन = goes — तृतीय पुरुष एकवचन में क्रिया पर -s।" },
        },
        {
          question: "Every night I read ___ book before bed.",
          options: ["a", "an", "much", "no word"],
          answer: 0,
          explanation: { bn: "একবচন গণনাযোগ্য নাম book একা থাকে না — a book; much শুধু গোনা-না-যাওয়া নামে চলে।", en: "The singular countable book cannot stand alone — a book; much fits only uncountables.", hi: "एकवचन गिनती-योग्य book अकेला नहीं रहता — a book; much केवल गिनती-बाहर नामों में।" },
        },
        {
          question: "The guide gave us a lot of useful ___.",
          options: ["informations", "information", "an information", "informations'"],
          answer: 1,
          explanation: { bn: "information কখনো -s নেয় না — বহুবচন অসম্ভব; হিসাবে a lot of information / a piece of information।", en: "information never takes -s — a plural is impossible; count it as a lot of information / a piece of information.", hi: "information कभी -s नहीं लेता — बहुवचन असंभव; गिनती में a lot of information / a piece of information।" },
        },
        {
          question: "Which sentence is correct?",
          options: ["This phone is more better.", "This phone is better.", "This phone is more good.", "This phone is the most better."],
          answer: 1,
          explanation: { bn: "তুলনা একবারই — better; more better আর more good দ্বিগুণ, the most better তিনবার দাগ।", en: "Compare once — better; more better and more good mark it twice, the most better three times.", hi: "तुलना एक बार — better; more better और more good दोहरा, the most better तिहरा निशान।" },
        },
        {
          question: "Last night we ___ the new plan.",
          options: ["discussed about", "discussed", "were discuss", "discussing"],
          answer: 1,
          explanation: { bn: "discuss-এর ভেতরেই 'নিয়ে' আছে — বস্তু সরাসরি: discussed the new plan; about লাগবে না।", en: "'About' already sits inside discuss — the object comes directly: discussed the new plan; no about.", hi: "'बारे में' discuss के भीतर है — वस्तु सीधे बैठती है: discussed the new plan; about नहीं।" },
        },
        {
          question: "She is married ___ an engineer.",
          options: ["with", "to", "for", "by"],
          answer: 1,
          explanation: { bn: "'সাথে' শুনে with এলে ভুল — married-এর স্থায়ী জুটি to: married to an engineer।", en: "The 'সাথে' tempts with, but married keeps a fixed partner — married to an engineer.", hi: "'साथ' सुनकर with आ जाए, लेकिन married की जोड़ी to है — married to an engineer।" },
        },
        {
          question: "Please ___ my book tomorrow.",
          options: ["return back", "return", "returned back", "returning"],
          answer: 1,
          explanation: { bn: "return-এর ভেতরেই 'ফিরিয়ে দেওয়া' — back ছাড়াই পূর্ণ: return my book।", en: "return already means 'give back' — it is complete without back: return my book.", hi: "return के भीतर ही 'वापस देना' है — back के बिना पूर्ण: return my book।" },
        },
        {
          question: "Why ___ laughing?",
          options: ["you are", "are you", "you is", "is you"],
          answer: 1,
          explanation: { bn: "প্রশ্নে ক্রম: wh + সাহায্যকারী + কর্তা — Why are you laughing?; 'Why you are...' বাংলা ক্রম।", en: "Question order: wh + helper + subject — Why are you laughing?; 'Why you are...' is the Bengali order.", hi: "प्रश्न क्रम: wh + सहायक + कर्ता — Why are you laughing?; 'Why you are...' बांग्ला क्रम है।" },
        },
      ],
    },
  },
];

export default SEED_GRAMMAR_V4_B3B;
