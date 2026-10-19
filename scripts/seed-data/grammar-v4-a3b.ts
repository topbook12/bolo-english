// ─── Grammar seeds v4: ADVANCED batch A3b (2 lessons) ───
// Task 10-C19R (REDO — the original agent never wrote this file) — point-form
// roadmap upgrade. Source: grammar-v3-a3.ts → "Register: Formal vs Informal
// English" (sortOrder 12) and "Precision Articles & Quantifiers" (sortOrder 13),
// both advanced. Every paragraph body became lead + 4-8 crisp points (split,
// never dropped); the informal↔formal word-pair scale, the three arenas, the
// officialese swaps, the phrasal→Latin pairs, the three viewpoints, the
// quantifier chart, the institution-purpose grid and the few/little/less/fewer
// precision pairs became small tables; formula boxes carry the rule-of-thumb
// lines. title/intro/tips/quiz/examples copied UNCHANGED from the v3 source;
// body omitted.
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_A3B: SeedGrammarV4Entry[] = [
  /* ── 1. Register: Formal vs Informal English ─────────────────────────── */
  {
    topic: "Register: Formal vs Informal English",
    level: "advanced",
    title: "Register: Formal vs Informal English",
    unit: 0,
    sortOrder: 12,
    data: {
      title: {
        bn: "রেজিস্টার: আনুষ্ঠানিক বনাম অনানুষ্ঠানিক ইংরেজি",
        en: "Register: Formal vs Informal English",
        hi: "रजिस्टर: औपचारिक बनाम अनौपचारिक अंग्रेज़ी",
      },
      intro: {
        bn: "একই কথা বস অফিসে আর চায়ের দোকানে একভাবে বলা হয় না — বাংলায় আমরা 'আপনি' আর 'তুমি' বদলে যে দূরত্ব বোঝাই, ইংরেজি সেই দূরত্ব বোঝায় শব্দ আর গঠন বদলে: ask নাকি enquire, put off নাকি postpone, I'm নাকি I am। এই 'ভাষার পোশাক'-এর নামই register। এটা এই advanced ব্যাচের পাঠ; শুরুর আগে Nominalisation & Academic Style আর Discourse Markers & Cohesion পাঠগুলো শেষ করে নিন — আনুষ্ঠানিক লেখার অনেকটাই ওখানের হাতিয়ারেই গড়ে ওঠে। এই পাঠে জোড়া-জোড়া শব্দ শিখব (children/kids, obtain/get, inform/tell, purchase/buy, apologise/say sorry, postpone/put off, require/need), contraction আর ফ্রেজাল ভার্ব কোথায় চলে কোথায় চলে না, ইমেইল, চ্যাট আর পরীক্ষার উত্তরের আলাদা আচরণবিধি — সঙ্গে বাংলাভাষীদের সবচেয়ে পরিচিত ভুল: এক বাক্যেই দুই রেজিস্টার গুলিয়ে ফেলা।",
        en: "The same message is not said the same way in an office and at a tea stall — Bengali shows that distance by switching 'আপনি'/'তুমি' (formal/informal 'you'); English shows it by switching words and structures: ask or enquire, put off or postpone, I'm or I am. That 'language outfit' is called register. This is an advanced-path lesson; before starting, finish Nominalisation & Academic Style and Discourse Markers & Cohesion — much of formal writing is built from the tools taught there. In this lesson you will learn register pairs (children/kids, obtain/get, inform/tell, purchase/buy, apologise/say sorry, postpone/put off, require/need), where contractions and phrasal verbs belong and where they do not, the separate etiquette of email, chat and exam writing — plus the most familiar Bengali-speaker error: mixing two registers inside one sentence.",
        hi: "वही बात बॉस के ऑफिस में और चाय की दुकान पर एक तरह नहीं कही जाती — बांग्ला/हिंदी में हम 'आप' और 'तुम' बदलकर जो दूरी दिखाते हैं, अंग्रेज़ी वह दूरी शब्द और ढाँचे बदलकर दिखाती है: ask या enquire, put off या postpone, I'm या I am। इसी 'भाषा की पोशाक' का नाम register है। यह एडवांस्ड बैच का पाठ है; शुरू करने से पहले Nominalisation & Academic Style और Discourse Markers & Cohesion पाठ पूरे कर लें — औपचारिक लेखन की बहुत-कुछ नींव वहीं बनती है। इस पाठ में जोड़े-जोड़े शब्द सीखेंगे (children/kids, obtain/get, inform/tell, purchase/buy, apologise/say sorry, postpone/put off, require/need), contraction और phrasal verbs कहाँ चलते हैं और कहाँ नहीं, ईमेल, चैट और परीक्षा-लेखन की अलग-अलग शिष्टाचार-व्यवस्था — साथ में बांग्लाभाषियों की सबसे परिचित गलती: एक ही वाक्य में दो रजिस्टर मिला देना।",
      },
      roadmap: [
        { bn: "🎯 শ্রোতা বদলালেই ভাষার পোশাক বদলায় — তিন স্তর চিনুন", en: "🎯 Change the audience, change the outfit — meet the three layers", hi: "🎯 श्रोता बदले तो पोशाक बदले — तीन स्तर पहचानिए" },
        { bn: "🏗️ জোড়া-শব্দের স্কেল আর formal-এর চার যান্ত্রিক নিয়ম", en: "🏗️ The word-pair scale and the four mechanical rules of formal writing", hi: "🏗️ शब्द-जोड़ों का पैमाना और formal के चार यांत्रिक नियम" },
        { bn: "🚦 ইমেইল, চ্যাট, পরীক্ষা — তিন মাঠের আলাদা নিয়ম", en: "🚦 Email, chat, exam — three arenas, three rulebooks", hi: "🚦 ईमेल, चैट, परीक्षा — तीन मैदान, तीन नियम-पुस्तिका" },
        { bn: "✉️ আনুষ্ঠানিক ইমেইলের পাঁচ অংশ — সালাম থেকে সই", en: "✉️ The formal email's five parts — greeting to sign-off", hi: "✉️ औपचारिक ईमेल के पाँच भाग — अभिवादन से हस्ताक्षर तक" },
        { bn: "🔁 ফ্রেজাল ভার্বকে ল্যাটিন ক্রিয়ায় বদলানোর ১৩ জোড়া", en: "🔁 Thirteen pairs that turn phrasal verbs into Latin verbs", hi: "🔁 phrasal verb को लैटिन क्रिया में बदलने के 13 जोड़े" },
        { bn: "⚠️ এক বাক্যে দুই রেজিস্টার — চেনা ধরা আর তিন ধাপের সমাধান", en: "⚠️ Two registers in one sentence — the familiar trap and a three-step fix", hi: "⚠️ एक वाक्य में दो रजिस्टर — परिचित जाल और तीन चरण का समाधान" },
        { bn: "🧠 C1 শিক্ষার্থীদের পাঁচ সূক্ষ্ম ভুল আর এক প্রতিষেধক", en: "🧠 Five subtle C1 slips and their single antidote", hi: "🧠 C1 शिक्षार्थियों की पाँच सूक्ष्म गलतियाँ और एक इलाज" },
        { bn: "📖 একই খবর দুই পোশাকে — ইমেইল বনাম চ্যাট", en: "📖 One message in two outfits — email vs chat", hi: "📖 एक ही ख़बर दो पोशाकों में — ईमेल बनाम चैट" },
      ],
      sections: [
        /* ── 1. When to use which register ── */
        {
          heading: {
            bn: "🎯 কখন ব্যবহার হয়: শ্রোতা বদলালেই ভাষার পোশাক বদলায়",
            en: "🎯 When to use which register: change the audience, change the outfit",
            hi: "🎯 कब कौन-सा रजिस्टर: श्रोता बदले तो भाषा की पोशाक भी बदले",
          },
          lead: {
            bn: "রেজিস্টার মানে ভাষার পোশাক — বাংলার আপনি/তুমির মতো দূরত্ব ইংরেজিতে শব্দ বদলে বোঝায়।",
            en: "Register is the outfit of language — English shows your আপনি/তুমি distance by switching words.",
            hi: "रजिस्टर भाषा की पोशाक है — अंग्रेज़ी 'आप/तुम' की दूरी शब्द बदलकर दिखाती है।",
          },
          points: [
            { bn: "**Register** — ভাষার পোশাক: একই অর্থ বিভিন্ন পরিস্থিতিতে ভিন্ন পোশাকে পরিবেশিত হয়।", en: "**Register** — the outfit of language: the same meaning is dressed differently in different situations.", hi: "**Register** — भाषा की पोशाक: एक ही अर्थ अलग-अलग परिस्थिति में अलग पोशाक में प्रस्तुत होता है।" },
            { bn: "বাংলায় দূরত্ব বদলায় আপনি/তুমিতে; ইংরেজিতে you একটাই — বদলায় শব্দ, contraction, বাক্যের ছাঁচ।", en: "Bengali shifts distance with আপনি/তুমি; English has one 'you' — it shifts words, contractions and sentence frames.", hi: "बांग्ला/हिंदी में दूरी बदलती है आप/तुम से; अंग्रेज़ी में you एक ही — बदलते हैं शब्द, contraction, वाक्य-साँचा।" },
            { bn: "শব্দচয়ন: get নাকি obtain; contraction: I'm নাকি I am; ছাঁচ: Can you...? নাকি I would be grateful if you could...।", en: "Word choice: get or obtain; contraction: I'm or I am; frame: Can you...? or I would be grateful if you could...", hi: "शब्द-चयन: get या obtain; contraction: I'm या I am; साँचा: Can you...? या I would be grateful if you could..." },
            { bn: "রেজিস্টার তিন স্তরে ভাবুন — informal, neutral, formal; পুরো ছকটা পাশের টেবিলে।", en: "Think of register in three layers — informal, neutral, formal; the full chart sits in the table.", hi: "रजिस्टर को तीन स्तरों में सोचें — informal, neutral, formal; पूरा चार्ट तालिका में।" },
            { bn: "লেখার আগে তিনটা প্রশ্ন: পাঠক কে (বস, ক্লায়েন্ট, পরীক্ষক, বন্ধু)? মাধ্যম কী (ইমেইল, চ্যাট, রচনা)?", en: "Before writing, three questions: who is the reader (boss, client, examiner, friend)? What is the medium (email, chat, essay)?", hi: "लिखने से पहले तीन सवाल: पाठक कौन (बॉस, क्लाइंट, परीक्षक, दोस्त)? माध्यम क्या (ईमेल, चैट, निबंध)?" },
            { bn: "তৃতীয় প্রশ্ন — উদ্দেশ্য: অনুরোধ, অভিযোগ, নাকি তথ্য জানানো? এই তিন উত্তরই শব্দ বেছে দেয়।", en: "Third question — the purpose: request, complaint, or passing on information? These three answers pick the words.", hi: "तीसरा सवाल — उद्देश्य: अनुरोध, शिकायत या सूचना? यही तीन जवाब शब्द चुनते हैं।" },
            { bn: "ভুল রেজিস্টার ভুল ব্যাকরণের মতোই দৃশ্যমান — IELTS রচনায় lots of, kids, totally লিখলে band কমে।", en: "The wrong register shows as clearly as bad grammar — 'lots of', 'kids', 'totally' in an IELTS essay lower the band.", hi: "ग़लत रजिस्टर व्याकरण-गलती जितना ही दिखता है — IELTS निबंध में 'lots of', 'kids', 'totally' लिखने से band गिरता है।" },
            { bn: "উল্টো দিকে — বন্ধুর চ্যাটে 'Dear Respected Sir, I hereby request...' লিখলে অজান্তেই ব্যঙ্গ হয়।", en: "The mirror side — 'Dear Respected Sir, I hereby request...' in a friend's chat is unintentional irony.", hi: "उलटी दिशा — दोस्त की चैट में 'Dear Respected Sir, I hereby request...' लिखना अनजाने में व्यंग्य है।" },
          ],
          table: {
            head: [
              { bn: "স্তর", en: "Layer", hi: "स्तर" },
              { bn: "কোথায়", en: "Where", hi: "कहाँ" },
              { bn: "নমুনা রূপ", en: "Sample outfit", hi: "नमूना रूप" },
            ],
            rows: [
              [{ bn: "informal", en: "informal", hi: "informal" }, { bn: "চ্যাট, বন্ধু, পরিবার", en: "chat, friends, family", hi: "चैट, दोस्त, परिवार" }, { bn: "Hey! I'm, kids, totally", en: "Hey! I'm, kids, totally", hi: "Hey! I'm, kids, totally" }],
              [{ bn: "neutral", en: "neutral", hi: "neutral" }, { bn: "দৈনন্দিন অফিস-ইমেইল, ক্লাসরুম", en: "everyday office email, classroom", hi: "रोज़मर्रा के ऑफिस-ईमेल, क्लासरूम" }, { bn: "Hi Rahman, thank you for the update", en: "Hi Rahman, thank you for the update", hi: "Hi Rahman, thank you for the update" }],
              [{ bn: "formal", en: "formal", hi: "formal" }, { bn: "রিপোর্ট, আবেদন, পরীক্ষার উত্তর", en: "reports, applications, exam answers", hi: "रिपोर्ट, आवेदन, परीक्षा-उत्तर" }, { bn: "Dear Sir, I am writing to enquire about...", en: "Dear Sir, I am writing to enquire about...", hi: "Dear Sir, I am writing to enquire about..." }],
            ],
          },
          examples: [
            {
              wrong: "Hey Sir, just wanted to check if you got my invoice.",
              right: "Dear Mr Rahman, I am writing to confirm receipt of my invoice.",
              note: {
                bn: "Hey আর just wanted to check চ্যাটের রং; আনুষ্ঠানিক ইমেইলে Dear + পদবি সালাম আর I am writing to... উদ্দেশ্য-বাক্য।",
                en: "'Hey' and 'just wanted to check' are chat colour; a formal email opens with Dear + surname and an I am writing to... purpose line.",
                hi: "'Hey' और 'just wanted to check' चैट का रंग हैं; औपचारिक ईमेल Dear + उपनाम और I am writing to... उद्देश्य-वाक्य से खुलता है।",
              },
            },
            {
              wrong: "I am writing to hereby request the honour of your esteemed presence at a study group on Thursday.",
              right: "Do you want to join our study group on Thursday?",
              note: {
                bn: "উল্টো দিকের ভুল — বন্ধুর চ্যাটে বিয়ের কার্ডের ভাষা; অতি-আনুষ্ঠানিকতা কথ্য ভাষায় ব্যঙ্গ শোনায়।",
                en: "The mirror-image error — wedding-invitation language in a friend's chat; over-formality sounds ironic in speech.",
                hi: "उलटी दिशा की गलती — दोस्त की चैट में शादी-कार्ड की भाषा; अति-औपचारिकता बोलचाल में व्यंग्य लगती है।",
              },
            },
            {
              wrong: "Kindly do the needful and revert back at the earliest.",
              right: "Could you please take care of this and reply by Friday?",
              note: {
                bn: "do the needful, revert back, at the earliest — দক্ষিণ এশিয়ার পুরোনো অফিস-শব্দ; বৈশ্বিক ইংরেজিতে please + নির্দিষ্ট কাজ + নির্দিষ্ট সময়।",
                en: "'Do the needful', 'revert back', 'at the earliest' — dated South Asian officialese; global English prefers please + a specific action + a specific time.",
                hi: "'do the needful', 'revert back', 'at the earliest' — दक्षिण एशिया की पुरानी ऑफिस-भाषा; ग्लोबल अंग्रेज़ी में please + ठीक काम + ठीक समय।",
              },
            },
            {
              wrong: "Dear Sir, I can't make it to the meeting, sorry!",
              right: "Dear Mr Chowdhury, I am afraid I will be unable to attend the meeting.",
              note: {
                bn: "can't contraction আর can't make it আড্ডা-গুচ্ছ; আনুষ্ঠানিক বিকল্প I am afraid... unable to attend — একই খবরের পোশাক-বদল।",
                en: "The contraction and the idiom 'can't make it' are casual; the formal outfit is I am afraid... unable to attend — same news, different dress.",
                hi: "can't contraction और 'can't make it' मुहावरा अनौपचारिक हैं; औपचारिक पोशाक है I am afraid... unable to attend — वही ख़बर, अलग लिबास।",
              },
            },
            {
              wrong: "The results of the experiment were totally messed up.",
              right: "The results of the experiment were inconclusive.",
              note: {
                bn: "messed up আড্ডা-ক্রিয়া, totally চ্যাট-তীব্রতা; রিপোর্টের ভঙ্গি inconclusive — ফল অনির্ণেয়, সিদ্ধান্তে না-আসা।",
                en: "'Messed up' is slang, 'totally' is chat intensity; report-register says inconclusive — the results do not settle the question.",
                hi: "'messed up' गली-भाषा है, 'totally' चैट-तीव्रता; रिपोर्ट-रजिस्टर कहता है inconclusive — परिणाम निर्णायक नहीं।",
              },
            },
          ],
        },
        /* ── 2. Structure: word pairs + four mechanical rules ── */
        {
          heading: {
            bn: "🏗️ গঠন: আনুষ্ঠানিকতার স্কেল — জোড়া শব্দ আর চারটা যান্ত্রিক নিয়ম",
            en: "🏗️ Structure: the formality scale — word pairs and four mechanical rules",
            hi: "🏗️ गठन: औपचारिकता का पैमाना — शब्द-जोड़े और चार यांत्रिक नियम",
          },
          lead: {
            bn: "রেজিস্টার শেখার দ্রুততম পথ জোড়া-শব্দ — এক অর্থ, দুই পোশাক; সঙ্গে চার যান্ত্রিক নিয়ম।",
            en: "The fastest route into register is word pairs — one meaning, two outfits — plus four mechanical rules.",
            hi: "रजिस्टर सीखने का सबसे तेज़ रास्ता शब्द-जोड़े — एक अर्थ, दो पोशाक — साथ में चार यांत्रिक नियम।",
          },
          formula: {
            bn: "contraction নয় · ফ্রেজাল নয় · ফ্রেগমেন্ট নয় · I/you আবছা",
            en: "no contractions · no phrasal verbs · no fragments · depersonalised I/you",
            hi: "contraction नहीं · phrasal नहीं · टुकड़े नहीं · I/you धुँधले",
          },
          points: [
            { bn: "রেজিস্টার শেখার সবচেয়ে কার্যকর পথ জোড়া-শব্দ — এক অর্থ, দুই পোশাক; পূর্ণ তালিকা টেবিলে।", en: "The most effective way to learn register is word pairs — one meaning, two outfits; the full list sits in the table.", hi: "रजिस्टर सीखने का सबसे कारगर रास्ता शब्द-जोड़े — एक अर्थ, दो पोशाक; पूरी सूची तालिका में।" },
            { bn: "বাঁ দিকের শব্দ আড্ডার, ডান দিকের শব্দ অফিস-কাগজের — দিক ভুললে রেজিস্টার ভেঙে পড়ে।", en: "Left-column words belong to conversation, right-column words to office paper — swap the sides and the register breaks.", hi: "बाएँ स्तंभ के शब्द बातचीत के, दाएँ स्तंभ के ऑफिस-कागज़ के — दिशा पलटी तो रजिस्टर टूट जाता है।" },
            { bn: "**নিয়ম ১** — contraction নেই: don't, I'm, can't-এর জায়গায় do not, I am, cannot।", en: "**Rule one** — no contractions: do not, I am, cannot instead of don't, I'm, can't.", hi: "**नियम १** — contraction नहीं: don't, I'm, can't की जगह do not, I am, cannot।" },
            { bn: "**নিয়ম ২** — ফ্রেজাল ভার্বের জায়গায় এক-শব্দের ল্যাটিন ক্রিয়া: put off নয়, postpone।", en: "**Rule two** — a one-word Latin verb in place of the phrasal verb: postpone, not put off.", hi: "**नियम २** — phrasal verb की जगह एक-शब्द की लैटिन क्रिया: put off नहीं, postpone।" },
            { bn: "**নিয়ম ৩** — বাক্য পূর্ণ ও গাঁথা: ফ্রেগমেন্ট নয়, nominalisation (আগের পাঠে শেখা)।", en: "**Rule three** — full, connected sentences: not fragments, but nominalisation (learned in the previous lesson).", hi: "**नियम ३** — वाक्य पूर्ण और जुड़े हुए: टुकड़े नहीं, nominalisation (पिछले पाठ में सीखी)।" },
            { bn: "**নিয়ম ৪** — ব্যক্তি আবছা: It is recommended that... / Applicants are required to...।", en: "**Rule four** — depersonalisation: It is recommended that... / Applicants are required to...", hi: "**नियम ४** — व्यक्ति को धुँधला करना: It is recommended that... / Applicants are required to..." },
            { bn: "informal সরল বাক্য I আর you-কে কেন্দ্রে রাখে; formal সেই কেন্দ্র সরিয়ে দূরত্ব তৈরি করে।", en: "Informal sentences keep I and you at the centre; formal style moves that centre away to create distance.", hi: "informal वाक्य I और you को केंद्र में रखते हैं; formal शैली वह केंद्र हटाकर दूरी बनाती है।" },
          ],
          table: {
            head: [
              { bn: "আড্ডার শব্দ (informal)", en: "Chat word (informal)", hi: "बातचीत का शब्द (informal)" },
              { bn: "অফিস-কাগজের শব্দ (formal)", en: "Office-paper word (formal)", hi: "ऑफिस-कागज़ का शब्द (formal)" },
            ],
            rows: [
              [{ bn: "kids", en: "kids", hi: "kids" }, { bn: "children", en: "children", hi: "children" }],
              [{ bn: "get", en: "get", hi: "get" }, { bn: "obtain", en: "obtain", hi: "obtain" }],
              [{ bn: "buy", en: "buy", hi: "buy" }, { bn: "purchase", en: "purchase", hi: "purchase" }],
              [{ bn: "tell", en: "tell", hi: "tell" }, { bn: "inform", en: "inform", hi: "inform" }],
              [{ bn: "need", en: "need", hi: "need" }, { bn: "require", en: "require", hi: "require" }],
              [{ bn: "say sorry", en: "say sorry", hi: "say sorry" }, { bn: "apologise", en: "apologise", hi: "apologise" }],
              [{ bn: "put off", en: "put off", hi: "put off" }, { bn: "postpone", en: "postpone", hi: "postpone" }],
              [{ bn: "check", en: "check", hi: "check" }, { bn: "examine", en: "examine", hi: "examine" }],
              [{ bn: "help", en: "help", hi: "help" }, { bn: "assist", en: "assist", hi: "assist" }],
              [{ bn: "give", en: "give", hi: "give" }, { bn: "provide", en: "provide", hi: "provide" }],
              [{ bn: "show", en: "show", hi: "show" }, { bn: "demonstrate", en: "demonstrate", hi: "demonstrate" }],
              [{ bn: "a lot of", en: "a lot of", hi: "a lot of" }, { bn: "considerable / numerous", en: "considerable / numerous", hi: "considerable / numerous" }],
              [{ bn: "so", en: "so", hi: "so" }, { bn: "therefore", en: "therefore", hi: "therefore" }],
              [{ bn: "but", en: "but", hi: "but" }, { bn: "however", en: "however", hi: "however" }],
              [{ bn: "end", en: "end", hi: "end" }, { bn: "terminate", en: "terminate", hi: "terminate" }],
            ],
          },
          examples: [
            {
              wrong: "We need to put off the meeting till next week.",
              right: "The meeting has been postponed until next week.",
              note: {
                bn: "ফ্রেজাল put off + সরল সক্রিয় বাক্য informal; রিপোর্টে ল্যাটিন ক্রিয়া postpone + passive — দুই স্তরের আনুষ্ঠানিকতা একসঙ্গে।",
                en: "Phrasal put off + a simple active sentence is informal; report-style uses the Latin verb postpone + passive — two layers of formality at once.",
                hi: "phrasal put off + सरल active वाक्य informal है; रिपोर्ट में लैटिन क्रिया postpone + passive — दो स्तर की औपचारिकता एक साथ।",
              },
            },
            {
              wrong: "The company don't allow kids in the lab.",
              right: "The company does not permit children in the laboratory.",
              note: {
                bn: "contraction আর kids — দুটোই informal; আর singular company-র সঙ্গে don't মেলানো ব্যাকরণগত ভুলও।",
                en: "The contraction and 'kids' are both informal; matching singular 'company' with don't is also a grammar slip.",
                hi: "contraction और 'kids' दोनों informal हैं; एकवचन 'company' के साथ don't मिलाना व्याकरण-गलती भी है।",
              },
            },
            {
              wrong: "I'm gonna inform you about the results tomorrow.",
              right: "I will inform you about the results tomorrow.",
              note: {
                bn: "gonna শুধু মুখের ভাষা — লেখায়, এমনকি informal ইমেইলেও নয়; inform-এর পাশে gonna অমিল রেজিস্টার।",
                en: "'Gonna' is speech only — never in writing, not even in an informal email; next to 'inform' it is a register clash.",
                hi: "'gonna' केवल बोली जाने वाली भाषा है — लिखित में, informal ईमेल में भी नहीं; 'inform' के बगल में यह रजिस्टर-टकराव है।",
              },
            },
            {
              wrong: "You must say sorry to the client for the delay.",
              right: "You must apologise to the client for the delay.",
              note: {
                bn: "দুটোই সঠিক, কিন্তু রেজিস্টার আলাদা — say sorry বন্ধুর সঙ্গে, apologise আনুষ্ঠানিক ক্ষমা-পত্রে।",
                en: "Both are correct but belong to different registers — say sorry with friends, apologise in a formal letter of apology.",
                hi: "दोनों सही हैं, पर रजिस्टर अलग — say sorry दोस्तों के बीच, apologise औपचारिक क्षमा-पत्र में।",
              },
            },
            {
              wrong: "You need to submit two photos.",
              right: "Applicants are required to submit two photographs.",
              note: {
                bn: "need→require, you→applicants, photos→photographs — আবেদনপত্রের ভাষায় তিন ধাপেই রেজিস্টার উঁচু হলো।",
                en: "need→require, you→applicants, photos→photographs — three steps up the formality ladder for application language.",
                hi: "need→require, you→applicants, photos→photographs — आवेदन-भाषा में तीन सीढ़ी ऊपर।",
              },
            },
          ],
        },
        /* ── 3. Signals: email, chat, exam ── */
        {
          heading: {
            bn: "🚦 আভাস ও প্যাটার্ন: ইমেইল, চ্যাট, পরীক্ষা — তিন মাঠের আলাদা নিয়ম",
            en: "🚦 Signals and patterns: email, chat, exam — three arenas, three rulebooks",
            hi: "🚦 संकेत और पैटर्न: ईमेल, चैट, परीक्षा — तीन मैदान, तीन नियम-पुस्तिका",
          },
          lead: {
            bn: "একই খবর ইমেইলে, চ্যাটে, পরীক্ষার খাতায় তিন রকম পরিবেশিত হয় — প্রত্যেক মাঠের নিয়ম আলাদা।",
            en: "The same message dresses differently in email, chat and exam scripts — each arena has its own rules.",
            hi: "वही बात ईमेल, चैट और परीक्षा-उत्तर में तीन तरह प्रस्तुत होती है — हर मैदान के नियम अलग।",
          },
          points: [
            { bn: "**ইমেইল** (বস/ক্লায়েন্ট/অচেনা) — সালাম Dear Mr/Ms + পদবি; শুরুতে উদ্দেশ্য-বাক্য I am writing to...।", en: "**Email** (boss/client/stranger) — greet Dear Mr/Ms + surname; open with the purpose sentence I am writing to...", hi: "**ईमेल** (बॉस/क्लाइंट/अजनबी) — अभिवादन Dear Mr/Ms + उपनाम; शुरुआत में उद्देश्य-वाक्य I am writing to..." },
            { bn: "ইমেইলে contraction কম; সই Best regards / Kind regards, নিয়মতান্ত্রিক চিঠিতে Yours sincerely / Yours faithfully।", en: "Email takes few contractions; sign off Best regards / Kind regards, or Yours sincerely / Yours faithfully in rule-bound letters.", hi: "ईमेल में contraction कम; समापन Best regards / Kind regards, नियमबद्ध पत्रों में Yours sincerely / Yours faithfully।" },
            { bn: "**চ্যাট** — সালাম Hey/Hi; contraction ও ফ্রেজাল ভার্ব স্বাভাবিক; ছোট উত্তরে কর্তাও বাদ: Got it. On my way.।", en: "**Chat** — greet Hey/Hi; contractions and phrasal verbs are natural; quick replies even drop the subject: Got it. On my way.", hi: "**चैट** — अभिवादन Hey/Hi; contraction और phrasal verbs स्वाभाविक; छोटे जवाबों में subject तक गिरता है: Got it. On my way." },
            { bn: "প্রশ্নবোধক বাক্যে অনুরোধ — ইমেইল আর চ্যাট দুই জগতেরই শালীন রূপ।", en: "A request framed as a question is the polite form in both worlds — email and chat alike.", hi: "प्रश्न-रूप में अनुरोध — ईमेल और चैट दोनों दुनिया का शिष्ट रूप।" },
            { bn: "**পরীক্ষা** (IELTS/অ্যাকাডেমিক) — formal-neutral: contraction নয়, আড়াই-শব্দ নয়।", en: "**Exam** (IELTS/academic) — formal-neutral: no contractions, no slang.", hi: "**परीक्षा** (IELTS/अकादमिक) — formal-neutral: contraction नहीं, गली-शब्द नहीं।" },
            { bn: "পরীক্ষার ভঙ্গি সতর্ক — tend to, may, it appears that; বাক্য গাঁথে however, moreover, therefore।", en: "Exam style is cautious — tend to, may, it appears that; however, moreover, therefore do the joining.", hi: "परीक्षा-शैली सतर्क है — tend to, may, it appears that; जोड़ते हैं however, moreover, therefore।" },
            { bn: "অতিরিক্ত বিস্ময়চিহ্ন আর ASAP-ঘেঁষা শব্দ চ্যাটের রং; পদবি-সহ পূর্ণ সালাম ইমেইলের।", en: "Extra exclamation marks and ASAP-words are chat colour; a full greeting with a surname belongs to email.", hi: "बहुत सारे विस्मय-चिह्न और ASAP-जैसे शब्द चैट का रंग; उपनाम-सहित पूरा अभिवादन ईमेल का।" },
            { bn: "**সোনালি টেস্ট** — বাক্যটা ওই পাঠকের মুখোমুখি বলতে পারবেন? পারলে রেজিস্টার মিলছে।", en: "**The golden test** — could you say the sentence face-to-face to that reader? If yes, the register fits.", hi: "**सुनहरा टेस्ट** — क्या वह वाक्य उस पाठक के सामने बोल सकते हैं? हाँ, तो रजिस्टर ठीक है।" },
          ],
          table: {
            head: [
              { bn: "মাঠ", en: "Arena", hi: "मैदान" },
              { bn: "সালাম ও সই", en: "Greeting & sign-off", hi: "अभिवादन और समापन" },
              { bn: "ভঙ্গি", en: "Style", hi: "शैली" },
            ],
            rows: [
              [{ bn: "ইমেইল (বস/ক্লায়েন্ট/অচেনা)", en: "email (boss/client/stranger)", hi: "ईमेल (बॉस/क्लाइंट/अजनबी)" }, { bn: "Dear Mr/Ms Rahman → Kind regards / Yours sincerely", en: "Dear Mr/Ms Rahman → Kind regards / Yours sincerely", hi: "Dear Mr/Ms Rahman → Kind regards / Yours sincerely" }, { bn: "উদ্দেশ্য-বাক্য I am writing to...; contraction কম", en: "purpose line I am writing to...; few contractions", hi: "उद्देश्य-वाक्य I am writing to...; contraction कम" }],
              [{ bn: "চ্যাট (সহকর্মী/বন্ধু)", en: "chat (colleagues/friends)", hi: "चैट (सहकर्मी/दोस्त)" }, { bn: "Hey / Hi", en: "Hey / Hi", hi: "Hey / Hi" }, { bn: "contraction ও ফ্রেজাল ভার্ব স্বাভাবিক; Got it. On my way.", en: "contractions and phrasal verbs natural; Got it. On my way.", hi: "contraction और phrasal verbs स्वाभाविक; Got it. On my way." }],
              [{ bn: "পরীক্ষা (IELTS/অ্যাকাডেমিক)", en: "exam (IELTS/academic)", hi: "परीक्षा (IELTS/अकादमिक)" }, { bn: "সালাম-সই নেই", en: "no greeting or sign-off", hi: "अभिवादन-हस्ताक्षर नहीं" }, { bn: "formal-neutral; tend to, may; however, moreover; অনুচ্ছেদ বাধ্যতামূলক", en: "formal-neutral; tend to, may; however, moreover; paragraphs compulsory", hi: "formal-neutral; tend to, may; however, moreover; अनुच्छेद अनिवार्य" }],
            ],
          },
          examples: [
            {
              wrong: "Dear Mr Alam, thanks a ton for your mail! Catch you later, Rafi",
              right: "Dear Mr Alam, thank you for your email. Kind regards, Rafi",
              note: {
                bn: "thanks a ton / catch you later চ্যাট-গুচ্ছ; আনুষ্ঠানিক ইমেইলে thank you + Kind regards।",
                en: "'Thanks a ton' and 'Catch you later' are chat chunks; formal email pairs thank you with Kind regards.",
                hi: "'thanks a ton' / 'catch you later' चैट-मुहावरे हैं; औपचारिक ईमेल में thank you + Kind regards।",
              },
            },
            {
              wrong: "Good evening, respected Sir. I hope this email finds you well. 😊 free after 5?",
              right: "Hey! Free after 5?",
              note: {
                bn: "চ্যাটে ইমেইলের ভারী সালাম ব্যঙ্গ শোনায়; মাধ্যম বদলালে পোশাকও বদলায়।",
                en: "An email-weight greeting in chat reads as sarcasm; when the medium changes, the outfit changes too.",
                hi: "चैट में ईमेल-भारी अभिवादन व्यंग्य लगता है; माध्यम बदले तो पोशाक भी बदले।",
              },
            },
            {
              wrong: "Lots of people thinks smoking is bad, so government should ban it ASAP.",
              right: "Many people believe that smoking is harmful; therefore, the government should ban it.",
              note: {
                bn: "lots of→many, thinks→believe (agreement + register), ASAP আড়াই-শব্দ; therefore-ই পরীক্ষার জোড়া-বাক্যের সেতু।",
                en: "lots of→many, thinks→believe (agreement + register), ASAP is slang; therefore is the exam register's bridge between clauses.",
                hi: "lots of→many, thinks→believe (सम्मति + रजिस्टर), ASAP गली-शब्द है; therefore ही परीक्षा-शैली का सेतु है।",
              },
            },
            {
              wrong: "Hi Boss, send me the report asap.",
              right: "Hi Sir, could you please send me the report by this evening?",
              note: {
                bn: "খালি imperative আদেশ শোনায়; could you please অনুরোধ, আর asap-এর বদলে নির্দিষ্ট সময় by this evening।",
                en: "A bare imperative sounds like an order; could you please turns it into a request, and a specific 'by this evening' beats 'asap'.",
                hi: "खाली imperative आदेश लगता है; could you please इसे अनुरोध बनाता है, और 'asap' की जगह ठीक समय 'by this evening' बेहतर।",
              },
            },
            {
              wrong: "Dear Mr Khan, ... Yours faithfully",
              right: "Dear Mr Khan, ... Yours sincerely",
              note: {
                bn: "নাম ধরে সালাম হলে sincerely; Dear Sir or Madam হলে faithfully — সালাম আর সইয়ের জুটি মিলাতে হয়।",
                en: "A named greeting pairs with Yours sincerely; Dear Sir or Madam pairs with Yours faithfully — greeting and sign-off must match.",
                hi: "नाम लेकर अभिवादन हो तो Yours sincerely; Dear Sir or Madam हो तो Yours faithfully — अभिवादन और समापन की जोड़ी मिलानी होती है।",
              },
            },
          ],
        },
        /* ── 4. The full anatomy of an email ── */
        {
          heading: {
            bn: "✉️ ইমেইলের পূর্ণ নকশা: শুরুর সালাম থেকে শেষের সই",
            en: "✉️ The full anatomy of an email: from opening salutation to sign-off",
            hi: "✉️ ईमेल की पूरी संरचना: शुरुआती अभिवादन से अंतिम हस्ताक्षर तक",
          },
          lead: {
            bn: "সালাম থেকে সই — পাঁচ অংশের ছাঁচে বাঁধলেই আনুষ্ঠানিক ইমেইল পরিণত শোনায়।",
            en: "From greeting to sign-off — bind your formal email in the five-part mould and it sounds finished.",
            hi: "अभिवादन से हस्ताक्षर तक — पाँच-भाग का साँचा अपनाइए, औपचारिक ईमेल परिपक्व सुनाई देगा।",
          },
          formula: {
            bn: "সালাম → I am writing to... → অনুরোধ → বিদায়-লাইন → সই",
            en: "greeting → I am writing to... → request → closing line → sign-off",
            hi: "अभिवादन → I am writing to... → अनुरोध → विदाई-वाक्य → हस्ताक्षर",
          },
          points: [
            { bn: "**Subject line** — কাজের সারমর্ম এক লাইনে: Request for Leave on 14 April।", en: "**Subject line** — the gist in one line: Request for Leave on 14 April.", hi: "**Subject line** — काम का सार एक लाइन में: Request for Leave on 14 April." },
            { bn: "**সালাম** — নাম জানা থাকলে Dear Mr/Ms Rahman; না জানলে Dear Sir or Madam; আধা-আনুষ্ঠানিক Hello/Hi Rahman।", en: "**Greeting** — Dear Mr/Ms Rahman if you know the name; Dear Sir or Madam if you do not; semi-formal Hello/Hi Rahman.", hi: "**अभिवादन** — नाम पता हो तो Dear Mr/Ms Rahman; न पता हो तो Dear Sir or Madam; अर्ध-औपचारिक Hello/Hi Rahman।" },
            { bn: "**উদ্দেশ্য-বাক্য** — I am writing to enquire about... / I am writing with regard to...।", en: "**Purpose sentence** — I am writing to enquire about... / I am writing with regard to...", hi: "**उद्देश्य-वाक्य** — I am writing to enquire about... / I am writing with regard to..." },
            { bn: "বাংলাভাষীরা প্রায়ই এই বাক্য বাদ দিয়ে সরাসরি দাবি শুরু করেন (I want a job.) — রুক্ষ শোনায়।", en: "Bengali speakers often skip it and open with a bare demand (I want a job.) — it sounds abrupt.", hi: "बांग्लाभाषी अक्सर इसे छोड़कर सीधे फ़रमाइश से शुरू करते हैं (I want a job.) — रूखा लगता है।" },
            { bn: "**মূল অংশ** — এক অনুচ্ছেদে এক প্রসঙ্গ; অনুরোধে Could you please...? বা I would be grateful if you could...।", en: "**Body** — one topic per paragraph; for requests Could you please...? or I would be grateful if you could...", hi: "**मुख्य भाग** — एक अनुच्छेद, एक विषय; अनुरोध में Could you please...? या I would be grateful if you could..." },
            { bn: "**সংযুক্তি** — I have attached my CV. / Please find my CV attached.।", en: "**Attachment** — I have attached my CV. / Please find my CV attached.", hi: "**संलग्नक** — I have attached my CV. / Please find my CV attached." },
            { bn: "**বিদায়-লাইন ও সই** — I look forward to hearing from you. / Thank you for your time; সই Kind regards / Yours sincerely + নাম।", en: "**Closing and sign-off** — I look forward to hearing from you. / Thank you for your time; sign Kind regards / Yours sincerely + name.", hi: "**विदाई-वाक्य और हस्ताक्षर** — I look forward to hearing from you. / Thank you for your time; हस्ताक्षर Kind regards / Yours sincerely + नाम।" },
            { bn: "সাবধান — Please find attached herewith... for your kind consideration-এর মতো পুরোনো অফিস-শব্দ এখন ভারী; আধুনিক formal সংক্ষিপ্ত ও পরিষ্কার।", en: "Caution — old officialese like 'Please find attached herewith... for your kind consideration' now feels heavy; modern formal writing is short and clear.", hi: "सावधान — 'Please find attached herewith... for your kind consideration' जैसी पुरानी ऑफिस-भाषा अब भारी लगती है; आधुनिक formal छोटा और साफ़।" },
          ],
          examples: [
            {
              wrong: "I want a job in your company.",
              right: "I am writing to apply for the position of Junior Analyst advertised on your website.",
              note: {
                bn: "খালি দাবি নয় — উদ্দেশ্য + নির্দিষ্ট পদ; আবেদন-ইমেইলের প্রথম বাক্যের ছাঁচ।",
                en: "Not a bare demand — purpose + specific position; that is the mould of an application email's first sentence.",
                hi: "खाली फ़रमाइश नहीं — उद्देश्य + ठीक पद; आवेदन-ईमेल के पहले वाक्य का साँचा यही है।",
              },
            },
            {
              wrong: "Please find attached herewith my CV for your kind consideration.",
              right: "Please find my CV attached.",
              note: {
                bn: "herewith আর kind consideration পুরোনো অফিস-চট; আধুনিক আনুষ্ঠানিক রূপ সংক্ষিপ্ত।",
                en: "'Herewith' and 'for your kind consideration' are dated officialese; the modern formal version is lean.",
                hi: "'herewith' और 'for your kind consideration' पुरानी ऑफिस-चट हैं; आधुनिक औपचारिक रूप संक्षिप्त है।",
              },
            },
            {
              wrong: "I look forward to hear from you.",
              right: "I look forward to hearing from you.",
              note: {
                bn: "look forward to-এর to প্রিপজিশন — পরে V-ing বসে, ক্রিয়ার মূল রূপ নয়।",
                en: "The 'to' in look forward to is a preposition — it takes V-ing, not the base verb.",
                hi: "look forward to का 'to' प्रीपॉज़िशन है — उसके बाद V-ing आता है, base verb नहीं।",
              },
            },
            {
              wrong: "Thanks you for your cooperation.",
              right: "Thank you for your cooperation.",
              note: {
                bn: "thanks বিশেষ্য, thank ক্রিয়া — you থাকলে ক্রিয়া-রূপ Thank-ই দরকার।",
                en: "'Thanks' is the noun, 'thank' the verb — with 'you' present, the verb form Thank is required.",
                hi: "'thanks' संज्ञा है, 'thank' क्रिया — 'you' मौजूद हो तो क्रिया-रूप Thank ही चाहिए।",
              },
            },
            {
              wrong: "Dear Respected Sir, I hope you are fine. Yours lovingly, Rima",
              right: "Dear Mr Das, I hope this email finds you well. Kind regards, Rima",
              note: {
                bn: "Respected Sir আর Yours lovingly বাংলা-হিন্দি চিঠির অভ্যাস; ইংরেজি সালাম Mr/Ms + পদবি, সই নিরপেক্ষ।",
                en: "'Respected Sir' and 'Yours lovingly' are Bengali-Hindi letter habits; English greets with Mr/Ms + surname and signs off neutrally.",
                hi: "'Respected Sir' और 'Yours lovingly' बांग्ला-हिंदी पत्रों की आदत हैं; अंग्रेज़ी में अभिवादन Mr/Ms + उपनाम, और समापन तटस्थ।",
              },
            },
          ],
        },
        /* ── 5. Phrasal verbs vs Latin verbs ── */
        {
          heading: {
            bn: "🔁 ফ্রেজাল ভার্ব বনাম ল্যাটিন ক্রিয়া: একই কাজ, দুই পোশাক",
            en: "🔁 Phrasal verbs vs Latin verbs: one job, two outfits",
            hi: "🔁 फ्रेज़ल वर्ब बनाम लैटिन क्रिया: एक ही काम, दो पोशाक",
          },
          lead: {
            bn: "ফ্রেজাল ভার্ব কথ্য ইংরেজির ইঞ্জিন; আনুষ্ঠানিক কাগজ এক-শব্দের ল্যাটিন ক্রিয়া চায়।",
            en: "Phrasal verbs power spoken English; formal paper prefers one-word Latin verbs.",
            hi: "फ्रेज़ल वर्ब बोलचाल का इंजन हैं; औपचारिक कागज़ एक-शब्द की लैटिन क्रिया चाहता है।",
          },
          points: [
            { bn: "ফ্রেজাল ভার্ব কথ্য ইংরেজির ইঞ্জিন — ভুল নয়; কথায়, আধা-আনুষ্ঠানিক ইমেইলে এগুলোই স্বাভাবিক ও সহজবোধ্য।", en: "Phrasal verbs are the engine of spoken English — not wrong; in speech and semi-formal email they are the natural, clear choice.", hi: "फ्रेज़ल वर्ब बोलचाल के इंजन हैं — गलत नहीं; बोलचाल और अर्ध-औपचारिक ईमेल में यही सहज और साफ़ विकल्प।" },
            { bn: "গবেষণা-প্রতিবেদন, প্রবন্ধ, আইনি খসড়ায় এক-শব্দের ল্যাটিন ক্রিয়াই রেজিস্টার মেলায়।", en: "In research reports, essays and legal drafts it is the one-word Latin verbs that set the register.", hi: "शोध-रिपोर्ट, निबंध, कानूनी मसौदे में एक-शब्द की लैटिन क्रियाएँ ही रजिस्टर मिलाती हैं।" },
            { bn: "১৩টা ফ্রেজাল-ল্যাটিন জুটি পাশের টেবিলে — একসঙ্গে মুখস্থ করুন।", en: "The thirteen phrasal-Latin couples sit in the table — memorise them together.", hi: "13 phrasal-Latin जोड़े तालिका में — साथ रटें।" },
            { bn: "**প্রিপজিশন-ব্যাগ** — ল্যাটিন ক্রিয়ারা প্রিপজিশন নিয়ে আসে: result in, lead to, consist of, contribute to।", en: "**A preposition bag** — Latin verbs come with prepositions: result in, lead to, consist of, contribute to.", hi: "**प्रीपॉज़िशन-बैग** — लैटिन क्रियाएँ प्रीपॉज़िशन लेकर आती हैं: result in, lead to, consist of, contribute to।" },
            { bn: "ক্রিয়া আর তার প্রিপজিশন একসঙ্গেই শিখুন — জুটিটাই আসল একক।", en: "Learn the verb and its preposition together — the pair is the real unit.", hi: "क्रिया और उसका प्रीपॉज़िशन साथ सीखें — जोड़ी ही असली इकाई है।" },
            { bn: "কিছু ফ্রেজাল ভার্ব আলাদা হয় — put the meeting off ✓; কিছু হয় না — look the matter into ✗।", en: "Some phrasal verbs separate — put the meeting off ✓; some never do — look the matter into ✗.", hi: "कुछ phrasal verbs अलग होते हैं — put the meeting off ✓; कुछ कभी नहीं — look the matter into ✗।" },
            { bn: "সন্দেহ থাকলে আলাদা না করাই নিরাপদ।", en: "When in doubt, do not separate.", hi: "संदेह हो तो अलग न करना ही सुरक्षित।" },
          ],
          table: {
            head: [
              { bn: "ফ্রেজাল (আড্ডা)", en: "Phrasal (chat)", hi: "फ्रेज़ल (बातचीत)" },
              { bn: "ল্যাটিন (অফিস-কাগজ)", en: "Latin (office paper)", hi: "लैटिन (ऑफिस-कागज़)" },
            ],
            rows: [
              [{ bn: "put off", en: "put off", hi: "put off" }, { bn: "postpone", en: "postpone", hi: "postpone" }],
              [{ bn: "look into", en: "look into", hi: "look into" }, { bn: "investigate", en: "investigate", hi: "investigate" }],
              [{ bn: "carry out", en: "carry out", hi: "carry out" }, { bn: "conduct / perform", en: "conduct / perform", hi: "conduct / perform" }],
              [{ bn: "set up", en: "set up", hi: "set up" }, { bn: "establish", en: "establish", hi: "establish" }],
              [{ bn: "find out", en: "find out", hi: "find out" }, { bn: "determine / ascertain", en: "determine / ascertain", hi: "determine / ascertain" }],
              [{ bn: "go up / go down", en: "go up / go down", hi: "go up / go down" }, { bn: "increase / decrease", en: "increase / decrease", hi: "increase / decrease" }],
              [{ bn: "call off", en: "call off", hi: "call off" }, { bn: "cancel", en: "cancel", hi: "cancel" }],
              [{ bn: "bring up (প্রসঙ্গ)", en: "bring up (a topic)", hi: "bring up (विषय)" }, { bn: "raise", en: "raise", hi: "raise" }],
              [{ bn: "come up with", en: "come up with", hi: "come up with" }, { bn: "propose / devise", en: "propose / devise", hi: "propose / devise" }],
              [{ bn: "put up with", en: "put up with", hi: "put up with" }, { bn: "tolerate", en: "tolerate", hi: "tolerate" }],
              [{ bn: "get in touch with", en: "get in touch with", hi: "get in touch with" }, { bn: "contact", en: "contact", hi: "contact" }],
              [{ bn: "sort out", en: "sort out", hi: "sort out" }, { bn: "resolve", en: "resolve", hi: "resolve" }],
              [{ bn: "point out", en: "point out", hi: "point out" }, { bn: "note / indicate", en: "note / indicate", hi: "note / indicate" }],
            ],
          },
          examples: [
            {
              wrong: "The committee will look into the matter and call off the project if needed.",
              right: "The committee will investigate the matter and cancel the project if necessary.",
              note: {
                bn: "প্রতিবেদন-রেজিস্টারে investigate/cancel; needed→necessary-ও সেই একই পথে — ছোট শব্দের বদলে আনুষ্ঠানিক শব্দ।",
                en: "In report-register: investigate/cancel; needed→necessary walks the same path — a formal word replacing a small one.",
                hi: "रिपोर्ट-रजिस्टर में investigate/cancel; needed→necessary भी उसी रास्ते पर — छोटे शब्द की जगह औपचारिक शब्द।",
              },
            },
            {
              wrong: "The team is going to try out the new drug on volunteers.",
              right: "The team intends to test the new drug on volunteers.",
              note: {
                bn: "গবেষণা-সারাংশে be going to→intend to, try out→test — কথ্য-কাঠামো বদলে আনুষ্ঠানিক ক্রিয়া।",
                en: "In a research abstract, be going to→intend to and try out→test — the casual frame gives way to formal verbs.",
                hi: "शोध-सारांश में be going to→intend to, try out→test — बोलचाल-ढाँचे की जगह औपचारिक क्रियाएँ।",
              },
            },
            {
              wrong: "Please revert to my email by Monday.",
              right: "Please reply to my email by Monday.",
              note: {
                bn: "revert-এর আসল অর্থ 'আগের অবস্থায় ফেরা'; 'উত্তর দেওয়া' অর্থে revert দক্ষিণ এশিয়ার অফিস-শব্দ — বৈশ্বিক ইংরেজিতে reply/respond।",
                en: "'Revert' properly means 'to go back to a previous state'; using it for 'answer' is South Asian officialese — global English says reply/respond.",
                hi: "'revert' का असली अर्थ है 'पिछली अवस्था में लौटना'; 'जवाब देना' अर्थ में revert दक्षिण एशियाई ऑफिस-शब्द है — ग्लोबल अंग्रेज़ी कहती है reply/respond।",
              },
            },
            {
              wrong: "We will look the complaint into today.",
              right: "We will look into the complaint today.",
              note: {
                bn: "look into আলাদা হয় না; তুলনা করুন — put the meeting off চলে, কিন্তু look the matter into নয়।",
                en: "'Look into' is inseparable; compare — 'put the meeting off' is fine, but 'look the matter into' is not.",
                hi: "'look into' अलग नहीं होता; तुलना करें — 'put the meeting off' चलता है, पर 'look the matter into' नहीं।",
              },
            },
            {
              wrong: "The company setted up a new branch in Khulna last year.",
              right: "The company established a new branch in Khulna last year.",
              note: {
                bn: "set-এর অতীত set — setted নেই; আর আনুষ্ঠানিক লেখায় established এক শব্দেই কাজ সারে।",
                en: "The past of 'set' is 'set' — no 'setted'; and in formal writing 'established' does the whole job in one word.",
                hi: "'set' का भूत 'set' ही है — 'setted' नहीं; और औपचारिक लेखन में 'established' एक ही शब्द में काम निपटा देता है।",
              },
            },
          ],
        },
        /* ── 6. Two registers in one sentence ── */
        {
          heading: {
            bn: "⚠️ এক বাক্যে দুই রেজিস্টার: বাংলাভাষী লেখকদের চেনা ধরা",
            en: "⚠️ Two registers in one sentence: the familiar trap for Bengali writers",
            hi: "⚠️ एक वाक्य में दो रजिस्टर: बांग्लाभाषी लेखकों का जाना-पहचाना जाल",
          },
          lead: {
            bn: "বাংলা লেখায় স্তর মিশে যাওয়ার অভ্যাস ইংরেজিতেও পিছু নেয় — অমিল পাঠক সঙ্গে সঙ্গে টের পায়।",
            en: "Bengali's habit of mixing levels follows you into English — the reader feels every clash at once.",
            hi: "बांग्ला लेखन में स्तर मिलाने की आदत अंग्रेज़ी में भी पीछा करती है — पाठक हर टकराव तुरंत महसूस करता है।",
          },
          formula: {
            bn: "এক ডকুমেন্ট, এক রেজিস্টার",
            en: "one document, one register",
            hi: "एक दस्तावेज़, एक रजिस्टर",
          },
          points: [
            { bn: "বাংলা আনুষ্ঠানিক লেখায় সংস্কৃত-ঘেঁষা আর রোজকার শব্দ মিশে যায় — 'অনুরোধ করা হচ্ছে যে তাড়াতাড়ি জিনিসটা দেখে নিন'।", en: "Formal Bengali freely mixes Sanskritic and everyday words — 'অনুরোধ করা হচ্ছে যে তাড়াতাড়ি জিনিসটা দেখে নিন'.", hi: "औपचारिक बांग्ला में संस्कृतनिष्ठ और रोज़मर्रा के शब्द घुल-मिल जाते हैं — 'অনুরোধ করা হচ্ছে...'।" },
            { bn: "তাই বাংলাভাষী লেখক ইংরেজিতেও এক বাক্যে দুই রেজিস্টার গুলিয়ে ফেলেন — অমিল নিজের চোখে ধরা পড়ে না।", en: "So Bengali writers mix two registers inside one English sentence too — and never see the clash themselves.", hi: "इसलिए बांग्लाभाषी लेखक अंग्रेज़ी में भी एक वाक्य में दो रजिस्टर मिला देते हैं — टकराव ख़ुद देख नहीं पाते।" },
            { bn: "ইংরেজি পাঠক সঙ্গে সঙ্গে টের পায়: Dear Sir-এর পরে plz, formal কাঠামোর শেষে chill!।", en: "The English reader feels it at once: plz after Dear Sir, chill! at the tail of a formal frame.", hi: "अंग्रेज़ी पाठक तुरंत महसूस करता है: Dear Sir के बाद plz, औपचारिक ढाँचे की पूँछ पर chill!" },
            { bn: "প্রতিটা মিশ্রণ লেখকের ওপর নিয়ন্ত্রণহীনতার ছাপ ফেলে।", en: "Every mixture stamps the writer as out of control.", hi: "हर मिश्रण लेखक को नियंत्रण-रहित दिखाता है।" },
            { bn: "**ধাপ ১** — লেখার আগে পাঠক ও উদ্দেশ্য ঠিক করুন: এক ডকুমেন্টে এক রেজিস্টার।", en: "**Step one** — fix reader and purpose before writing: one document, one register.", hi: "**चरण १** — लिखने से पहले पाठक और उद्देश्य तय करें: एक दस्तावेज़, एक रजिस्टर।" },
            { bn: "**ধাপ ২** — বাক্য লেখার পর দেখুন পুরো বাক্য একই স্তরে কি না — সালাম, মূল বাক্য, সমাপ্তি সব জায়গায়।", en: "**Step two** — after writing, check the whole sentence sits at one level — greeting, body and ending alike.", hi: "**चरण २** — वाक्य लिखने के बाद देखें पूरा वाक्य एक ही स्तर पर है — अभिवादन, मुख्य भाग, समाप्ति सब जगह।" },
            { bn: "**ধাপ ৩** — দক্ষিণ এশিয়ার অফিস-চট বাদ দিন; বৈশ্বিক বিকল্পগুলো পাশের টেবিলে।", en: "**Step three** — drop South Asian officialese; the global options sit in the table.", hi: "**चरण ३** — दक्षिण एशियाई ऑफिस-चट छोड़ें; वैश्विक विकल्प तालिका में।" },
            { bn: "আনুষ্ঠানিক মানেই লম্বা নয় — সংক্ষিপ্ত, পরিষ্কার, সম্মানজনক; এটাই আধুনিক formal লেখার স্বাদ।", en: "Formal does not mean long — short, clear, respectful; that is the taste of modern formal writing.", hi: "औपचारिक का मतलब लंबा नहीं — छोटा, साफ़, सम्मानजनक; आधुनिक formal लेखन का यही स्वाद है।" },
          ],
          table: {
            head: [
              { bn: "দক্ষিণ এশিয়ার অফিস-চট", en: "South Asian officialese", hi: "दक्षिण एशियाई ऑफिस-चट" },
              { bn: "বৈশ্বিক বিকল্প", en: "Global option", hi: "वैश्विक विकल्प" },
            ],
            rows: [
              [{ bn: "kindly", en: "kindly", hi: "kindly" }, { bn: "please", en: "please", hi: "please" }],
              [{ bn: "do the needful", en: "do the needful", hi: "do the needful" }, { bn: "address this matter", en: "address this matter", hi: "address this matter" }],
              [{ bn: "revert back", en: "revert back", hi: "revert back" }, { bn: "reply", en: "reply", hi: "reply" }],
              [{ bn: "prepone", en: "prepone", hi: "prepone" }, { bn: "bring forward", en: "bring forward", hi: "bring forward" }],
            ],
          },
          examples: [
            {
              wrong: "Dear Sir, I would like to request you to kindly do the needful ASAP.",
              right: "Dear Sir, I would be grateful if you could address this matter by Thursday.",
              note: {
                bn: "এক বাক্যে তিন স্তর: আনুষ্ঠানিক কাঠামো + do the needful (অফিস-চট) + ASAP (চ্যাট); বিকল্পটা নির্দিষ্ট কাজ ও সময় বলে।",
                en: "Three levels in one sentence: a formal frame + do the needful (officialese) + ASAP (chat); the alternative names a specific action and time.",
                hi: "एक वाक्य में तीन स्तर: औपचारिक ढाँचा + do the needful (ऑफिस-चट) + ASAP (चैट); विकल्प ठीक काम और समय बताता है।",
              },
            },
            {
              wrong: "The management regrets to inform you that the office is shut tomorrow, so chill!",
              right: "The management regrets to inform you that the office will remain closed tomorrow.",
              note: {
                bn: "formal কাঠামোর লেজে slang — রেজিস্টার বাক্যের শেষ শব্দ পর্যন্ত ধরে রাখতে হয়।",
                en: "Slang at the tail of a formal frame — the register must hold to the very last word of the sentence.",
                hi: "औपचारिक ढाँचे की पूँछ पर slang — रजिस्टर वाक्य के आख़िरी शब्द तक बना रहना चाहिए।",
              },
            },
            {
              wrong: "Esteemed Sir, plz check my assignment and revert back.",
              right: "Dear Sir, could you please review my assignment and reply by Friday?",
              note: {
                bn: "plz লেখায় নিষিদ্ধ বানান-সংক্ষেপ; revert back দ্বিগুণ ভুল — revert-এ 'back' বোঝা যায়ই।",
                en: "'Plz' is a spelling shortcut banned in writing; 'revert back' doubles the fault — 'back' is already inside revert.",
                hi: "'plz' लिखित में वर्जित संक्षिप्त रूप है; 'revert back' दोहरी गलती — 'back' revert में पहले से है।",
              },
            },
            {
              wrong: "We are writing to inform that your application has been rejected. Bye!!",
              right: "We regret to inform you that your application has been unsuccessful.",
              note: {
                bn: "inform-এর পরে you আবশ্যক; Bye আর !! আনুষ্ঠানিক চিঠির সমাপ্তি নয় — rejected-এর জায়গায় unsuccessful-এর নরম শব্দও রেজিস্টারের অংশ।",
                en: "'Inform' needs 'you'; 'Bye!!' is not how formal letters end — and softening rejected to unsuccessful is part of the register.",
                hi: "'inform' के बाद 'you' ज़रूरी है; 'Bye!!' औपचारिक पत्र की समाप्ति नहीं — rejected की जगह कोमल unsuccessful भी रजिस्टर का हिस्सा है।",
              },
            },
            {
              wrong: "As per your esteemed email, please find my documents attached herewith, thx.",
              right: "As requested, I have attached the documents.",
              note: {
                bn: "এক লাইনে অফিস-চটের স্তূপ (as per, esteemed, herewith) + চ্যাটের thx; আধুনিক formal সংক্ষিপ্ত ও একস্তরের।",
                en: "One line stacks officialese (as per, esteemed, herewith) with chat 'thx'; modern formal is short and single-level.",
                hi: "एक लाइन में ऑफिस-चट का ढेर (as per, esteemed, herewith) + चैट का thx; आधुनिक formal छोटा और एक-स्तरीय होता है।",
              },
            },
          ],
        },
        /* ── 7. Subtle mistakes of advanced learners ── */
        {
          heading: {
            bn: "🧠 উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "🧠 Subtle mistakes of advanced learners",
            hi: "🧠 उच्च स्तर के शिक्षार्थियों की सूक्ष्म गलतियाँ",
          },
          lead: {
            bn: "স্তর জানা লেখকরাও পাঁচ জায়গায় ফিসলে যান — প্রতিটার প্রতিষেধক একটাই।",
            en: "Even level-aware writers slip in five places — and the antidote is the same for all.",
            hi: "स्तर जानने वाले लेखक भी पाँच जगह फिसलते हैं — और इलाज सबका एक ही है।",
          },
          formula: {
            bn: "পাঠক ঠিক করুন → পুরো বাক্য ওই স্তরে পড়ুন",
            en: "fix the reader → read the whole sentence at that level",
            hi: "पाठक तय करें → पूरा वाक्य उसी स्तर पर पढ़ें",
          },
          points: [
            { bn: "C1 স্তরের বাংলাভাষীদের সবচেয়ে ঘন ঘন পাঁচটা পা — এক এক করে চিনে নিন।", en: "The five most frequent slips of C1-level Bengali speakers — recognise them one by one.", hi: "C1 स्तर के बांग्लाभाषियों की सबसे बार-बार आने वाली पाँच फिसलनें — एक-एक कर पहचानिए।" },
            { bn: "**contraction ঢুকে পড়া** আনুষ্ঠানিক প্রবন্ধে — it's, don't, can't।", en: "**Contractions creeping into formal essays** — it's, don't, can't.", hi: "**औपचारिक निबंध में contraction घुसना** — it's, don't, can't।" },
            { bn: "**slangy intensifier** রিপোর্টে — super, totally, really big।", en: "**Slangy intensifiers in reports** — super, totally, really big.", hi: "**रिपोर्ट में गली-अंदाज़ के तीव्रता-शब्द** — super, totally, really big।" },
            { bn: "**kindly-র অতিরিক্ত ব্যবহার** — বৈশ্বিক ইংরেজিতে পুরোনো ও আঞ্চলিক ঘ্রাণ; please-ই নিরাপদ।", en: "**Overusing kindly** — it smells dated and regional in global English; please is the safe choice.", hi: "**kindly का अत्यधिक उपयोग** — ग्लोबल अंग्रेज़ी में पुराना और क्षेत्रीय लगता है; please सुरक्षित।" },
            { bn: "**চ্যাটে অতি-আনুষ্ঠানিকতা** — Dear Respected Sir, I hope you are in good health দিয়ে 'এক কাপ চা খাবে?' জিজ্ঞেস।", en: "**Over-formality in chat** — opening with Dear Respected Sir, I hope you are in good health and then asking 'এক কাপ চা খাবে?'", hi: "**चैट में अति-औपचारिकता** — Dear Respected Sir, I hope you are in good health से शुरू करके 'एक कप चाय पियोगे?' पूछना।" },
            { bn: "**সমাপ্তি-বিভ্রান্তি** — Yours lovingly, Your loving student, Bye; ইংরেজি সই নিরপেক্ষ থাকে।", en: "**Sign-off confusion** — Yours lovingly, Your loving student, Bye; English sign-offs stay neutral.", hi: "**समापन-भ्रम** — Yours lovingly, Your loving student, Bye; अंग्रेज़ी हस्ताक्षर तटस्थ रहता है।" },
            { bn: "প্রতিটার প্রতিষেধক একটাই — পাঠক নির্ধারণ করুন, তারপর পুরো বাক্য ওই স্তরে পড়ুন।", en: "The antidote to all five is one — fix the reader, then read the whole sentence at that level.", hi: "हर एक का इलाज एक है — पाठक तय करें, फिर पूरा वाक्य उसी स्तर पर पढ़ें।" },
            { bn: "প্রবন্ধে লিখুন It is widely believed...; চ্যাটে লিখুন Hey! — মিশ্রণ কোনো স্তরেই বসে না।", en: "In the essay write It is widely believed...; in chat write Hey! — no level hosts their mixture.", hi: "निबंध में लिखें It is widely believed...; चैट में लिखें Hey! — मिश्रण किसी स्तर में नहीं बैठता।" },
          ],
          examples: [
            {
              wrong: "It's widely believed that the policy is ineffective.",
              right: "It is widely believed that the policy is ineffective.",
              note: {
                bn: "অ্যাকাডেমিক প্রবন্ধে contraction নেই; চ্যাটে it's চলবে — প্রসঙ্গই আইন দেয়।",
                en: "Academic essays take no contractions; it's is fine in chat — context makes the law.",
                hi: "अकादमिक निबंध में contraction नहीं; चैट में it's चलेगा — संदर्भ ही क़ानून देता है।",
              },
            },
            {
              wrong: "The survey results were super encouraging.",
              right: "The survey results were highly encouraging.",
              note: {
                bn: "super আড্ডার তীব্রতা-শব্দ; রিপোর্টে highly / remarkably — একই উচ্ছ্বাস, ঠান্ডা শব্দে।",
                en: "'Super' is playground intensity; reports use highly / remarkably — the same enthusiasm in cool words.",
                hi: "'super' अड्डे की तीव्रता-शब्द है; रिपोर्ट में highly / remarkably — वही जोश, ठंडे शब्दों में।",
              },
            },
            {
              wrong: "Kindly revert back to me as soon as possible.",
              right: "Please reply as soon as possible.",
              note: {
                bn: "kindly + revert back — দুই স্তরের আঞ্চলিক অভ্যাস এক বাক্যে; please + reply বৈশ্বিক ও সরল।",
                en: "kindly + revert back — two layers of regional habit in one sentence; please + reply is global and simple.",
                hi: "kindly + revert back — एक वाक्य में क्षेत्रीय आदत के दो स्तर; please + reply वैश्विक और सरल है।",
              },
            },
            {
              wrong: "Hi Sir, I can't attend tomorrow's class as I am down with fever.",
              right: "Hello Sir, I am sorry but I will be unable to attend tomorrow's class as I have a fever.",
              note: {
                bn: "can't contraction আর down with fever আড্ডা-বাগাড়ম্বর; শিক্ষককে লেখা ছুটির নোটে সামান্য উঁচু স্তর মানানসই।",
                en: "The contraction and 'down with fever' are casual flourishes; a leave note to a teacher sits one level higher.",
                hi: "can't contraction और 'down with fever' अड़ड़े का अंदाज़ है; अध्यापक को लिखे छुट्टी-नोट में एक स्तर ऊपर की भाषा सही है।",
              },
            },
            {
              wrong: "Dear Sir/Madam, I wanna know about the scholarship.",
              right: "Dear Sir or Madam, I would like to enquire about the scholarship.",
              note: {
                bn: "wanna শুধু মুখে; লেখায় want to — আর জিজ্ঞাসার আনুষ্ঠানিক ক্রিয়া enquire।",
                en: "'Wanna' belongs to speech only; write want to — and the formal verb for asking is enquire.",
                hi: "'wanna' केवल मुखर भाषा का है; लिखित में want to — और पूछताछ की औपचारिक क्रिया enquire है।",
              },
            },
          ],
        },
        /* ── 8. Seen in a short piece of writing ── */
        {
          heading: {
            bn: "📖 ছোট লেখায় দেখা যাক",
            en: "📖 Seen in a short piece of writing",
            hi: "📖 छोटे लेखन में देखिए",
          },
          lead: {
            bn: "একই খবর ইমেইলে আর চ্যাটে পাশাপাশি পড়ুন — পোশাকই পাঠকের প্রথম অভিব্যক্তি।",
            en: "Read one message as email and chat side by side — the outfit is the reader's first impression.",
            hi: "एक ही ख़बर ईमेल और चैट में साथ-साथ पढ़िए — पोशाक ही पाठक का पहला अनुभव है।",
          },
          formula: {
            bn: "আগে শ্রোতা · contraction নয় · ল্যাটিন ক্রিয়া · এক ডকুমেন্ট এক রেজিস্টার",
            en: "audience first · no contractions · Latin verbs · one document, one register",
            hi: "पहले श्रोता · contraction नहीं · लैटिन क्रिया · एक दस्तावेज़, एक रजिस्टर",
          },
          points: [
            { bn: "আনুষ্ঠানিক ইমেইল: 'Dear Mr Haque, I am writing to inform you that the scheduled maintenance has been postponed to Sunday, 14 April.'", en: "Formal email: 'Dear Mr Haque, I am writing to inform you that the scheduled maintenance has been postponed to Sunday, 14 April.'", hi: "औपचारिक ईमेल: 'Dear Mr Haque, I am writing to inform you that the scheduled maintenance has been postponed to Sunday, 14 April.'" },
            { bn: "এরপর ক্ষমা ও অনুরোধ: 'We apologise for any inconvenience this may cause, and we would be grateful if you could plan accordingly. Kind regards, Systems Team.'", en: "Then apology and request: 'We apologise for any inconvenience this may cause, and we would be grateful if you could plan accordingly. Kind regards, Systems Team.'", hi: "फिर क्षमा और अनुरोध: 'We apologise for any inconvenience this may cause, and we would be grateful if you could plan accordingly. Kind regards, Systems Team.'" },
            { bn: "একই খবর দলের চ্যাটে: 'Hey all, maintenance is pushed to Sunday 14 Apr — sorry for the trouble! Plan accordingly 🙏'।", en: "The same news in the team chat: 'Hey all, maintenance is pushed to Sunday 14 Apr — sorry for the trouble! Plan accordingly 🙏'", hi: "वही ख़बर टीम-चैट में: 'Hey all, maintenance is pushed to Sunday 14 Apr — sorry for the trouble! Plan accordingly 🙏'" },
            { bn: "অর্থ এক, পোশাক আলাদা — আর পোশাকই পাঠকের প্রথম অভিব্যক্তি।", en: "One meaning, two dresses — and the dress is the reader's first impression.", hi: "अर्थ एक, पोशाक अलग — और पोशाक ही पाठक का पहला अनुभव है।" },
            { bn: "আগে শ্রোতা, পরে শব্দ — বস/পরীক্ষক হলে উঁচু স্তর, বন্ধু হলে নিচু।", en: "Audience first, words second — boss/examiner means the upper level, a friend the lower.", hi: "पहले श्रोता, बाद में शब्द — बॉस/परीक्षक हो तो ऊँचा स्तर, दोस्त हो तो नीचा।" },
            { bn: "আনুষ্ঠানিক লেখায় contraction নয় — do not, I am, cannot; ফ্রেজালের জায়গায় postpone, investigate, conduct, cancel।", en: "No contractions in formal writing — do not, I am, cannot; Latin verbs in place of phrasal ones — postpone, investigate, conduct, cancel.", hi: "औपचारिक लेखन में contraction नहीं — do not, I am, cannot; phrasal की जगह postpone, investigate, conduct, cancel।" },
            { bn: "ইমেইলের পাঁচ অংশ মনে রাখুন — সালাম → I am writing to... → অনুরোধ → বিদায়-লাইন → সই।", en: "Keep the email's five parts in mind — greeting → I am writing to... → request → closing line → sign-off.", hi: "ईमेल के पाँच भाग याद रखें — अभिवादन → I am writing to... → अनुरोध → विदाई-वाक्य → हस्ताक्षर।" },
            { bn: "এক ডকুমেন্ট এক রেজিস্টার — মাঝপথে বদল নয়; kindly, do the needful, revert back বাদ, please, address, reply চালু।", en: "One document, one register — no mid-stream switching; drop kindly, do the needful, revert back; use please, address, reply.", hi: "एक दस्तावेज़, एक रजिस्टर — बीच में बदलाव नहीं; kindly, do the needful, revert back छोड़ें, please, address, reply अपनाएँ।" },
          ],
          examples: [
            {
              wrong: "Dear Mr Haque, maintenance got postponed to Sunday, sorry for the hassle!",
              right: "Dear Mr Haque, I am writing to inform you that the maintenance has been postponed to Sunday. We apologise for any inconvenience.",
              note: {
                bn: "got-passive + sorry for the hassle চ্যাটের পোশাক; formal ইমেইলে has been postponed + apologise।",
                en: "Got-passive + 'sorry for the hassle' is chat clothing; formal email wears has been postponed + apologise.",
                hi: "got-passive + 'sorry for the hassle' चैट की पोशाक है; औपचारिक ईमेल पहनता है has been postponed + apologise।",
              },
            },
            {
              wrong: "We would be grateful if you can plan accordingly.",
              right: "We would be grateful if you could plan accordingly.",
              note: {
                bn: "would-এর জুটি could — can নয়; অনুরোধের আনুষ্ঠানিক ছাঁচের অংশ।",
                en: "'Would' pairs with 'could', not 'can' — part of the formal request mould.",
                hi: "'would' की जोड़ी 'could' के साथ है, 'can' के साथ नहीं — औपचारिक अनुरोध-साँचे का हिस्सा।",
              },
            },
            {
              wrong: "Hey team, the management regrets to inform you that the deadline has been extended.",
              right: "Hey team, good news — the deadline has been extended!",
              note: {
                bn: "চ্যাটে অফিস-সার্কুলারের গম্ভীর কাঠামো ব্যঙ্গ শোনায়; মাধ্যম অনুযায়ী ঢিলেঢালা কাঠামো নিন।",
                en: "The grave office-circular frame sounds sarcastic in chat; take the looser frame the medium invites.",
                hi: "चैट में ऑफिस-परिपत्र का गंभीर ढाँचा व्यंग्य लगता है; माध्यम के अनुसार ढीला ढाँचा लें।",
              },
            },
            {
              wrong: "Kind regards, your loving student, Rima.",
              right: "Kind regards, Rima.",
              note: {
                bn: "your loving student বাংলা চিঠির অভ্যাস; ইংরেজি সই নামমাত্র — সম্পর্ক বাক্যে বোঝান, সইয়ে নয়।",
                en: "'Your loving student' is a Bengali letter habit; the English sign-off is just the name — show the relationship in the sentence, not the signature.",
                hi: "'your loving student' बांग्ला पत्रों की आदत है; अंग्रेज़ी हस्ताक्षर बस नाम होता है — रिश्ता वाक्य में दिखाएँ, हस्ताक्षर में नहीं।",
              },
            },
            {
              wrong: "Please find attached the file. Do the needful.",
              right: "I have attached the file. Could you please review it by Monday?",
              note: {
                bn: "do the needful-এর বদলে নির্দিষ্ট অনুরোধ — আনুষ্ঠানিক লেখার প্রাণ স্পষ্টতা।",
                en: "Replace 'do the needful' with the actual request — clarity is the soul of formal writing.",
                hi: "'do the needful' की जगह ठीक अनुरोध — औपचारिक लेखन की आत्मा स्पष्टता है।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "শ্রোতা-প্রথম নিয়ম: লেখা শুরুর আগে ঠিক করুন কে পড়বে — বস, ক্লায়েন্ট, পরীক্ষক, নাকি বন্ধু; উত্তরটাই শব্দ বেছে দেবে।",
          en: "Audience first: before writing, decide who will read it — boss, client, examiner, or friend; the answer picks the words.",
          hi: "श्रोता-पहले नियम: लिखने से पहले तय करें कौन पढ़ेगा — बॉस, क्लाइंट, परीक्षक या दोस्त; यही जवाब शब्द चुनेगा।",
        },
        {
          bn: "আনুষ্ঠানিক লেখায় contraction নিষিদ্ধ: don't→do not, I'm→I am; চ্যাটে উল্টোটা — সবসময় পূর্ণরূপ লিখলে রোবট শোনায়।",
          en: "No contractions in formal writing: don't→do not, I'm→I am; in chat it is the reverse — always writing full forms sounds robotic.",
          hi: "औपचारिक लेखन में contraction वर्जित: don't→do not, I'm→I am; चैट में उल्टा — हमेशा पूरा रूप लिखना रोबोट जैसा लगता है।",
        },
        {
          bn: "ফ্রেজাল ভার্বের জোড়া মুখস্থ: put off→postpone, look into→investigate, carry out→conduct, call off→cancel, set up→establish, find out→ascertain।",
          en: "Memorise phrasal-verb pairs: put off→postpone, look into→investigate, carry out→conduct, call off→cancel, set up→establish, find out→ascertain.",
          hi: "फ्रेज़ल वर्ब की जोड़ियाँ याद करें: put off→postpone, look into→investigate, carry out→conduct, call off→cancel, set up→establish, find out→ascertain।",
        },
        {
          bn: "জোড়া-শব্দ স্কেল: kids/children, buy/purchase, get/obtain, tell/inform, need/require, say sorry/apologise — বাঁ দিকটা আড্ডা, ডান দিকটা অফিস।",
          en: "The pair scale: kids/children, buy/purchase, get/obtain, tell/inform, need/require, say sorry/apologise — left side chat, right side office.",
          hi: "जोड़ी-पैमाना: kids/children, buy/purchase, get/obtain, tell/inform, need/require, say sorry/apologise — बायाँ पक्ष चैट, दायाँ पक्ष ऑफिस।",
        },
        {
          bn: "ইমেইলের পাঁচ অংশ ছাঁচে রাখুন: সালাম → I am writing to... → অনুরোধ (Could you please... / I would be grateful if you could...) → I look forward to... → সই।",
          en: "Keep the email's five-part mould: greeting → I am writing to... → request (Could you please... / I would be grateful if you could...) → I look forward to... → sign-off.",
          hi: "ईमेल का पाँच-भाग साँचा रखें: अभिवादन → I am writing to... → अनुरोध (Could you please... / I would be grateful if you could...) → I look forward to... → हस्ताक्षर।",
        },
        {
          bn: "Yours sincerely (নাম ধরে সালাম) বনাম Yours faithfully (Dear Sir or Madam) — সালাম আর সইয়ের জুটি সবসময় মিলান।",
          en: "Yours sincerely (named greeting) vs Yours faithfully (Dear Sir or Madam) — always match the greeting and sign-off pair.",
          hi: "Yours sincerely (नाम-सहित अभिवादन) बनाम Yours faithfully (Dear Sir or Madam) — अभिवादन और समापन की जोड़ी हमेशा मिलाएँ।",
        },
        {
          bn: "দক্ষিণ এশিয়ার অফিস-শব্দ সাবধানে: kindly, do the needful, revert back, prepone — বৈশ্বিক ইংরেজিতে please, address this matter, reply, bring forward।",
          en: "Beware South Asian officialese: kindly, do the needful, revert back, prepone — global English prefers please, address this matter, reply, bring forward.",
          hi: "दक्षिण एशियाई ऑफिस-शब्दों से सावधान: kindly, do the needful, revert back, prepone — ग्लोबल अंग्रेज़ी में please, address this matter, reply, bring forward।",
        },
        {
          bn: "এক বাক্যে দুই রেজিস্টার মেশাবেন না — 'I would like to request you to kindly plz revert ASAP'-এর মতো বাক্য পড়লেই বোঝা যায় লেখক স্তর ধরতে পারেননি।",
          en: "Never mix two registers in one sentence — a sentence like 'I would like to request you to kindly plz revert ASAP' shows the writer never settled on a level.",
          hi: "एक वाक्य में दो रजिस्टर न मिलाएँ — 'I would like to request you to kindly plz revert ASAP' जैसा वाक्य दिखाता है कि लेखक ने स्तर तय ही नहीं किया।",
        },
        {
          bn: "পরীক্ষার উত্তরে totally, super, a lot of, ASAP-এর বদলে considerably, highly, many, immediately — intensifier-ও রেজিস্টার মাপে।",
          en: "In exam answers prefer considerably, highly, many, immediately over totally, super, a lot of, ASAP — even intensifiers are measured for register.",
          hi: "परीक्षा-उत्तर में totally, super, a lot of, ASAP की जगह considerably, highly, many, immediately — तीव्रता-शब्द भी रजिस्टर से तौले जाते हैं।",
        },
        {
          bn: "পাল্টা-পরীক্ষা: বাক্যটা ওই ব্যক্তির মুখোমুখি বলতে পারবেন? চ্যাটে 'Dear Respected Sir' লিখলে মানুষ হাসবে — রেজিস্টার শ্রোতার মুখেই পরীক্ষা হয়।",
          en: "The reverse test: could you say the sentence face-to-face to that person? Write 'Dear Respected Sir' in chat and people will laugh — register is examined on the reader's face.",
          hi: "उलटा टेस्ट: क्या आप वह वाक्य उस व्यक्ति के सामने बोल सकते हैं? चैट में 'Dear Respected Sir' लिखिए और लोग हँसेंगे — रजिस्टर की परीक्षा पाठक के चेहरे पर होती है।",
        },
      ],
      quiz: [
        {
          question: "You are emailing an admissions officer whose name you do not know. Which opening is correct?",
          options: ["Hey there,", "Dear Sir or Madam,", "Respected Sir,", "Hi dear,"],
          answer: 1,
          explanation: {
            bn: "নাম না জানা প্রাপকের চিঠি Dear Sir or Madam দিয়ে খোলে; Respected Sir দক্ষিণ এশিয়ার অভ্যাস, Hey চ্যাটের সালাম।",
            en: "A letter to an unknown recipient opens with Dear Sir or Madam; 'Respected Sir' is a South Asian habit, 'Hey' is a chat greeting.",
            hi: "नाम अज्ञात प्राप्तकर्ता के पत्र की शुरुआत Dear Sir or Madam से होती है; 'Respected Sir' दक्षिण एशियाई आदत, 'Hey' चैट का अभिवादन।",
          },
        },
        {
          question: "Choose the formal equivalent of 'put off'.",
          options: ["call off", "postpone", "push off", "delay off"],
          answer: 1,
          explanation: {
            bn: "put off = postpone (স্থগিত); call off-এর অর্থ cancel — আলাদা ফ্রেজাল ভার্ব; push off/delay off এমনই নেই।",
            en: "Put off = postpone (defer); call off means cancel — a different phrasal verb; 'push off'/'delay off' do not exist here.",
            hi: "put off = postpone (स्थगित); call off का अर्थ cancel — दूसरा फ्रेज़ल वर्ब; 'push off'/'delay off' यहाँ नहीं चलते।",
          },
        },
        {
          question: "Which sentence suits a formal report?",
          options: ["The results were totally messed up.", "The results didn't make sense.", "The results were inconclusive.", "The results were a total flop."],
          answer: 2,
          explanation: {
            bn: "inconclusive — রিপোর্টের ভঙ্গি; বাকিগুলো আড়াই-শব্দ বা contraction-ঘেঁষা।",
            en: "'Inconclusive' is report-register; the others are slangy or contraction-flavoured.",
            hi: "'inconclusive' — रिपोर्ट की भाषा; बाकी गली-शब्द या contraction-मिश्रित हैं।",
          },
        },
        {
          question: "Choose the correct closing after 'Dear Mr Khan,':",
          options: ["Yours faithfully,", "Yours sincerely,", "Bye bye,", "Yours lovingly,"],
          answer: 1,
          explanation: {
            bn: "নাম ধরে সালাম হলে Yours sincerely; Dear Sir or Madam হলে Yours faithfully; bye bye ও lovingly চিঠির সই নয়।",
            en: "A named greeting takes Yours sincerely; Dear Sir or Madam takes Yours faithfully; 'bye bye' and 'lovingly' are not letter sign-offs.",
            hi: "नाम-सहित अभिवादन के साथ Yours sincerely; Dear Sir or Madam के साथ Yours faithfully; 'bye bye' और 'lovingly' पत्र-समापन नहीं हैं।",
          },
        },
        {
          question: "I look forward to ______ from you.",
          options: ["hear", "hearing", "heard", "have heard"],
          answer: 1,
          explanation: {
            bn: "look forward to-এর to প্রিপজিশন — পরে V-ing: hearing।",
            en: "The 'to' in look forward to is a preposition — it takes V-ing: hearing.",
            hi: "look forward to का 'to' प्रीपॉज़िशन है — बाद में V-ing: hearing।",
          },
        },
        {
          question: "Which version fits a chat with a close teammate?",
          options: ["Dear Sir, greetings of the day. Do you wish to partake in coffee?", "Hey! Coffee?", "Esteemed colleague, I hereby invite you to coffee.", "Respected friend, kindly confirm coffee."],
          answer: 1,
          explanation: {
            bn: "চ্যাটের রেজিস্টার ছোট ও ঢিলেঢালা — Hey! Coffee?; অতি-আনুষ্ঠানিক সংস্করণগুলো কৌতুক শোনায়।",
            en: "Chat register is short and loose — Hey! Coffee?; the over-formal versions read as a joke.",
            hi: "चैट रजिस्टर छोटा और ढीला है — Hey! Coffee?; अति-औपचारिक संस्करण हास्य लगते हैं।",
          },
        },
        {
          question: "Formal rewrite: 'The profit went up fast.' → 'The profit ______ rapidly.'",
          options: ["raised", "arose", "increased", "rose up"],
          answer: 2,
          explanation: {
            bn: "went up→increased; raise সকর্মক (কেউ raise করে), arose-এর অর্থ উদ্ভূত হওয়া, rose up অপ্রয়োজনীয় up-সহ।",
            en: "went up→increased; 'raise' is transitive (someone raises something), 'arose' means emerged, and 'rose up' doubles the up.",
            hi: "went up→increased; 'raise' सकर्मक है (कोई बढ़ाता है), 'arose' का अर्थ उभरना, 'rose up' में up दोहराया गया।",
          },
        },
        {
          question: "Which sentence mixes two registers?",
          options: ["I am afraid I will be unable to attend.", "We regret to inform you that the office is shut, so chill!", "Please find my CV attached.", "Could you please clarify the deadline?"],
          answer: 1,
          explanation: {
            bn: "আনুষ্ঠানিক কাঠামোর শেষে so chill! — দুই রেজিস্টার এক বাক্যে; বাকিগুলো নিজ নিজ স্তরে ধারাবাহিক।",
            en: "The formal frame ends with 'so chill!' — two registers in one sentence; the others stay consistent at their own levels.",
            hi: "औपचारिक ढाँचा 'so chill!' पर टूटता है — एक वाक्य में दो रजिस्टर; बाकी अपने-अपने स्तर पर सुसंगत हैं।",
          },
        },
        {
          question: "In a formal report, 'We need to find out the cause' becomes:",
          options: ["We need to figure out the cause.", "The cause must be ascertained.", "We gotta find the cause.", "Let's find out the cause."],
          answer: 1,
          explanation: {
            bn: "find out→ascertain, সঙ্গে impersonal passive — রিপোর্টের দুই চিহ্ন; বাকিগুলো কথ্য স্তরে।",
            en: "find out→ascertain plus an impersonal passive — two report markers; the others sit at spoken level.",
            hi: "find out→ascertain और impersonal passive — रिपोर्ट के दो चिह्न; बाकी बोलचाल स्तर पर हैं।",
          },
        },
        {
          question: "'Please revert back at the earliest.' — the best global-English version is:",
          options: ["Please revert back soonest.", "Please reply at your earliest convenience.", "Kindly do the needful early.", "Please back-reply at earliest."],
          answer: 1,
          explanation: {
            bn: "revert/revert back আর at the earliest আঞ্চলিক অফিস-শব্দ; বৈশ্বিক রূপ reply + at your earliest convenience।",
            en: "'Revert/revert back' and 'at the earliest' are regional officialese; the global form is reply + at your earliest convenience.",
            hi: "'revert/revert back' और 'at the earliest' क्षेत्रीय ऑफिस-शब्द हैं; वैश्विक रूप reply + at your earliest convenience।",
          },
        },
      ],
    },
  },
  /* ── 2. Precision Articles & Quantifiers ─────────────────────────────── */
  {
    topic: "Precision Articles & Quantifiers",
    level: "advanced",
    title: "Precision Articles & Quantifiers",
    unit: 0,
    sortOrder: 13,
    data: {
      title: {
        bn: "নিখুঁত আর্টিকেল ও কোয়ান্টিফায়ার",
        en: "Precision Articles & Quantifiers",
        hi: "सटीक आर्टिकल और क्वांटिफ़ायर",
      },
      intro: {
        bn: "আর্টিকেল ইংরেজির সবচেয়ে ছোট শব্দ, কিন্তু সবচেয়ে প্রকাশ্য ভুলের উৎস — a, an, the, আর কোনোটাই না (zero article); সঙ্গে পরিমাণ-শব্দের দল much/many, little/few, less/fewer। বাংলায় আর্টিকেল নেই, তাই বাংলাভাষীরা হয় সবখানে the ছড়ান, নয় সব বাদ দেন — দুই দিকেই শোনা যায়। এই পাঠে নিয়ম মুখস্থের বদলে সিদ্ধান্ত-প্রক্রিয়া শিখব: কখন a (একটা, এখনো চেনা নয়), কখন the (দুজনেরই জানা), কখন কিছুই না (সাধারণ ভাব, প্রতিষ্ঠান-উদ্দেশ্য)। সঙ্গে সূক্ষ্ম জোড়া: a number of বনাম the number of, little বনাম a little, less বনাম fewer, whole বনাম all বনাম entire। শুরুর আগে intermediate স্তরের countable/uncountable বিশেষ্য ও আর্টিকেল-সংক্রান্ত পাঠ আর এই ব্যাচের Nominalisation & Academic Style পাঠটি শেষ করে নিন — IELTS Task 1 আর প্রতিবেদনে এই পাঠের জিনিসগুলোই সবচেয়ে বেশি পরীক্ষা হয়।",
        en: "Articles are the smallest words in English, yet the most public source of error — a, an, the, and no article at all (zero article); alongside them, the quantifier family: much/many, little/few, less/fewer. Bengali has no articles, so Bengali speakers either sprinkle 'the' everywhere or drop all of them — both are audible. This lesson teaches a decision process, not a rule list: when a (one of many, not yet known), when the (both of us know which one), when nothing (general idea, institution-as-purpose). Plus the fine pairs: a number of vs the number of, little vs a little, less vs fewer, whole vs all vs entire. Before starting, finish the intermediate lessons on countable/uncountable nouns and articles, and the Nominalisation & Academic Style lesson of this batch — IELTS Task 1 and reports test exactly these items.",
        hi: "आर्टिकल अंग्रेज़ी के सबसे छोटे शब्द हैं, पर गलती का सबसे खुला स्रोत — a, an, the, और कोई आर्टिकल ही नहीं (zero article); साथ में क्वांटिफ़ायर-परिवार: much/many, little/few, less/fewer। बांग्ला में आर्टिकल नहीं हैं, इसलिए बांग्लाभाषी या तो हर जगह the बिखेर देते हैं या सब छोड़ देते हैं — दोनों सुनाई देते हैं। इस पाठ में नियम-रटने की बजाय निर्णय-प्रक्रिया सीखेंगे: कब a (कोई एक, अभी अनजान), कब the (दोनों जानते हैं कौन-सा), कब कुछ नहीं (सामान्य भाव, संस्था-उद्देश्य)। साथ में बारीक जोड़े: a number of बनाम the number of, little बनाम a little, less बनाम fewer, whole बनाम all बनाम entire। शुरू करने से पहले intermediate स्तर के countable/uncountable संज्ञा और आर्टिकल-संबंधी पाठ, और इसी बैच का Nominalisation & Academic Style पाठ पूरा कर लें — IELTS Task 1 और रिपोर्ट में यही चीज़ें सबसे ज़्यादा परखी जाती हैं।",
      },
      roadmap: [
        { bn: "🎯 a, the, zero — তিন দৃষ্টিভঙ্গি আর তিন-প্রশ্ন টেস্ট", en: "🎯 a, the, zero — three viewpoints and the three-question test", hi: "🎯 a, the, zero — तीन दृष्टिकोण और तीन-प्रश्न टेस्ट" },
        { bn: "📊 কোয়ান্টিফায়ারের সারণি — কে কার সঙ্গে বসে", en: "📊 The quantifier chart — who sits with what", hi: "📊 क्वांटिफ़ायर की सारणी — कौन किसके साथ बैठता है" },
        { bn: "🚦 কোন শব্দ কোন আর্টিকেল ডাকে — পূর্ণ আভাস-তালিকা", en: "🚦 Which word calls which article — the full signal list", hi: "🚦 कौन-सा शब्द कौन-सा आर्टिकल बुलाता है — पूरी सूची" },
        { bn: "🏛️ go to school, prison, hospital — উদ্দেশ্য বদলালে আর্টিকেল বদলায়", en: "🏛️ go to school, prison, hospital — purpose changes the article", hi: "🏛️ go to school, prison, hospital — उद्देश्य बदले तो आर्टिकल बदले" },
        { bn: "👑 the-এর আধিপত্য — অনন্য জগৎ, বাদ্যযন্ত্র, the rich", en: "👑 Where 'the' rules — unique things, instruments, the rich", hi: "👑 'the' का आधिपत्य — अद्वितीय वस्तुएँ, वाद्ययंत्र, the rich" },
        { bn: "🧮 little/few, less/fewer — মেজাজ আর গণনার সূক্ষ্ম যন্ত্র", en: "🧮 little/few, less/fewer — the fine machinery of mood and count", hi: "🧮 little/few, less/fewer — भाव और गिनती की बारीक मशीन" },
        { bn: "⚠️ C1 শিক্ষার্থীদের পাঁচ সূক্ষ্ম ভুল আর uncountable তালিকা", en: "⚠️ Five subtle C1 slips and the uncountable list", hi: "⚠️ C1 शिक्षार्थियों की पाँच सूक्ष्म गलतियाँ और uncountable सूची" },
        { bn: "📖 প্রতিবেদন-অনুচ্ছেদে সব নিয়ম একসঙ্গে জীবন্ত", en: "📖 Every rule alive in one report paragraph", hi: "📖 एक रिपोर्ट-अनुच्छेद में सारे नियम जीवंत" },
      ],
      sections: [
        /* ── 1. An article is a viewpoint ── */
        {
          heading: {
            bn: "🎯 কখন ব্যবহার হয়: আর্টিকেল মানেই দৃষ্টিভঙ্গি",
            en: "🎯 When to use what: an article is a viewpoint",
            hi: "🎯 कब क्या इस्तेमाल हो: आर्टिकल एक दृष्टिकोण है",
          },
          lead: {
            bn: "আর্টিকেল ছোট শব্দ, কিন্তু প্রতিটাই একটা দৃষ্টিভঙ্গি — সিদ্ধান্তটা তিন প্রশ্নে হয়।",
            en: "Articles are tiny words, but each is a viewpoint — the decision takes three questions.",
            hi: "आर्टिकल छोटे शब्द हैं, पर हर एक एक दृष्टिकोण — निर्णय तीन सवालों में होता है।",
          },
          formula: {
            bn: "singular countable → determiner লাগবেই · শ্রোতা জানলে the · সাধারণ ভাবে zero",
            en: "singular countable → a determiner is a must · listener knows → the · general idea → zero",
            hi: "singular countable → determiner लाज़मी · श्रोता जानता है → the · सामान्य भाव → zero",
          },
          points: [
            { bn: "তিনটা আর্টিকেল আসলে তিনটা দৃষ্টিভঙ্গি — পাশের টেবিলে পাশাপাশি মিলিয়ে দেখুন।", en: "The three articles are really three viewpoints — compare them side by side in the table.", hi: "तीन आर्टिकल असल में तीन दृष्टिकोण हैं — तालिका में साथ-साथ मिलाइए।" },
            { bn: "**a/an** বলে — শ্রোতা এখনো জানে না কোনটা: I saw a dog.।", en: "**a/an** says — the listener does not yet know which one: I saw a dog.", hi: "**a/an** कहता है — सुनने वाला अभी नहीं जानता कौन-सा: I saw a dog." },
            { bn: "**the** বলে — দুজনেই জানে কোনটা: দ্বিতীয় উল্লেখ, পরিস্থিতি-জ্ঞান (Close the door.), অনন্য বস্তু (the sun)।", en: "**the** says — both of us know which one: second mention, shared situation (Close the door.), unique object (the sun).", hi: "**the** कहता है — दोनों जानते हैं कौन-सा: दूसरा उल्लेख, साझा परिस्थिति (Close the door.), अद्वितीय वस्तु (the sun)।" },
            { bn: "**zero** বলে — নির্দিষ্ট একটা নয়, পুরো শ্রেণি বা ভর: Dogs are loyal. Water boils at 100°C. Honesty is rare.।", en: "**zero** says — no particular one, the whole class or the mass: Dogs are loyal. Water boils at 100°C. Honesty is rare.", hi: "**zero** कहता है — कोई ख़ास एक नहीं, पूरी श्रेणी या भार: Dogs are loyal. Water boils at 100°C. Honesty is rare।" },
            { bn: "**প্রশ্ন ১** — বিশেষ্যটা singular countable? তবে সে কোনো না কোনো determiner দাবি করে: a/the/my/this।", en: "**Question one** — is the noun singular countable? Then it demands a determiner: a/the/my/this.", hi: "**सवाल १** — संज्ञा singular countable है? तो वह कोई न कोई determiner माँगती है: a/the/my/this।" },
            { bn: "singular countable বিশেষ্য কখনো খালি দাঁড়ায় না — খালি রাখা যায় না।", en: "A singular countable noun never stands bare — leaving it empty is impossible.", hi: "singular countable संज्ञा कभी नंगी नहीं खड़ी रहती — खाली छोड़ना असंभव।" },
            { bn: "**প্রশ্ন ২** — শ্রোতা কি জানে কোনটা? হলে the; প্রথম উল্লেখ হলে a/an।", en: "**Question two** — does the listener know which one? Then the; if it is the first mention, a/an.", hi: "**सवाल २** — क्या श्रोता जानता है कौन-सा? तो the; पहला उल्लेख हो तो a/an।" },
            { bn: "**প্রশ্ন ৩** — পুরো শ্রেণি বা সাধারণ ভাব? তবে plural/uncountable + zero: Life is beautiful, but the life of a farmer is hard।", en: "**Question three** — the whole class or a general idea? Then plural/uncountable + zero: Life is beautiful, but the life of a farmer is hard.", hi: "**सवाल ३** — पूरी श्रेणी या सामान्य भाव? तो plural/uncountable + zero: Life is beautiful, but the life of a farmer is hard।" },
          ],
          table: {
            head: [
              { bn: "আর্টিকেল", en: "Article", hi: "आर्टिकल" },
              { bn: "বার্তা", en: "Message", hi: "संदेश" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [{ bn: "a/an", en: "a/an", hi: "a/an" }, { bn: "শ্রোতা এখনো জানে না কোনটা", en: "the listener does not yet know which one", hi: "सुनने वाला अभी नहीं जानता कौन-सा" }, { bn: "I saw a dog.", en: "I saw a dog.", hi: "I saw a dog." }],
              [{ bn: "the", en: "the", hi: "the" }, { bn: "দুজনেই জানে কোনটা", en: "both of us know which one", hi: "दोनों जानते हैं कौन-सा" }, { bn: "Close the door. · the sun", en: "Close the door. · the sun", hi: "Close the door. · the sun" }],
              [{ bn: "zero", en: "zero", hi: "zero" }, { bn: "পুরো শ্রেণি বা ভর", en: "the whole class or the mass", hi: "पूरी श्रेणी या भार" }, { bn: "Dogs are loyal. · Honesty is rare.", en: "Dogs are loyal. · Honesty is rare.", hi: "Dogs are loyal. · Honesty is rare." }],
            ],
          },
          examples: [
            {
              wrong: "I bought a shirt. A shirt was quite expensive.",
              right: "I bought a shirt. The shirt was quite expensive.",
              note: {
                bn: "প্রথম উল্লেখ a, দ্বিতীয় উল্লেখ the — গল্পের সোনালি নিয়ম; পাঠক এখন জানে কোন শার্টের কথা।",
                en: "First mention a, second mention the — the golden story rule; the reader now knows which shirt.",
                hi: "पहला उल्लेख a, दूसरा the — कहानी का सुनहरा नियम; पाठक अब जानता है कौन-सी शर्ट।",
              },
            },
            {
              wrong: "I am reading book about history.",
              right: "I am reading a book about history.",
              note: {
                bn: "singular countable বিশেষ্য কখনো খালি দাঁড়ায় না — a, the, my, this-এর মতো determiner লাগবেই।",
                en: "A singular countable noun never stands bare — it demands a determiner like a, the, my, this.",
                hi: "singular countable संज्ञा कभी नंगी नहीं खड़ी रहती — a, the, my, this जैसा determiner ज़रूरी है।",
              },
            },
            {
              wrong: "The honesty is the best policy.",
              right: "Honesty is the best policy.",
              note: {
                bn: "সাধারণ ভাবের abstract বিশেষ্যে zero — Honesty; কিন্তু স্থায়ী প্রবাদের the best রয়ে যায়, superlative-এর নিয়ম।",
                en: "An abstract noun in a general statement takes zero — Honesty; but the fixed proverb keeps the best, by the superlative rule.",
                hi: "सामान्य भाव की abstract संज्ञा पर zero — Honesty; पर पक्के कहावत का the best रहता है, superlative के नियम से।",
              },
            },
            {
              wrong: "Gold is precious metal.",
              right: "Gold is a precious metal.",
              note: {
                bn: "gold সাধারণ ভাবে zero, কিন্তু metal singular countable — তার সামনে a বাধ্যতামূলক; এক বাক্যে দুই নিয়ম।",
                en: "'Gold' as an idea takes zero, but 'metal' is singular countable — it needs a; two rules in one sentence.",
                hi: "'gold' सामान्य भाव में zero लेता है, पर 'metal' singular countable है — उसके आगे a अनिवार्य; एक वाक्य में दो नियम।",
              },
            },
            {
              wrong: "The life in Dhaka is busy.",
              right: "Life in Dhaka is busy.",
              note: {
                bn: "life এখানে সাধারণ ভাব — zero; তবে the life of a rickshaw-puller বললে নির্দিষ্ট জীবন — the চলে।",
                en: "'Life' here is the general idea — zero; but 'the life of a rickshaw-puller' points to one specific life — the returns.",
                hi: "यहाँ 'life' सामान्य भाव है — zero; पर 'the life of a rickshaw-puller' एक ठोस जीवन बताता है — the वापस आता है।",
              },
            },
          ],
        },
        /* ── 2. The quantifier chart ── */
        {
          heading: {
            bn: "📊 গঠন: কোয়ান্টিফায়ারের সারণি — কে কার সঙ্গে বসে",
            en: "📊 Structure: the quantifier chart — who sits with what",
            hi: "📊 गठन: क्वांटिफ़ायर की सारणी — कौन किसके साथ बैठता है",
          },
          lead: {
            bn: "কোন কোয়ান্টিফায়ার কোন বিশেষ্যের সঙ্গী — সারণিটা একবার মুখস্থ হলেই অর্ধেক ভুল চলে যায়।",
            en: "Which quantifier partners which noun — memorise this chart once and half the errors vanish.",
            hi: "कौन-सा क्वांटिफ़ायर किस संज्ञा का साथी — यह सारणी एक बार रट लीजिए, आधी गलतियाँ गायब।",
          },
          formula: {
            bn: "a number of + plural ক্রিয়া · the number of + singular ক্রিয়া",
            en: "a number of + plural verb · the number of + singular verb",
            hi: "a number of + plural क्रिया · the number of + singular क्रिया",
          },
          points: [
            { bn: "**plural countable-এর সঙ্গে** — many, few, a few, numerous, a number of: There are a few chairs.।", en: "**With plural countables** — many, few, a few, numerous, a number of: There are a few chairs.", hi: "**plural countable के साथ** — many, few, a few, numerous, a number of: There are a few chairs." },
            { bn: "**uncountable-এর সঙ্গে** — much, little, a little, a great deal of, a large amount of: There is a little water.।", en: "**With uncountables** — much, little, a little, a great deal of, a large amount of: There is a little water.", hi: "**uncountable के साथ** — much, little, a little, a great deal of, a large amount of: There is a little water." },
            { bn: "**দুই দলেই** — a lot of, lots of, plenty of, some, any, no: a lot of money / a lot of books।", en: "**With both** — a lot of, lots of, plenty of, some, any, no: a lot of money / a lot of books.", hi: "**दोनों के साथ** — a lot of, lots of, plenty of, some, any, no: a lot of money / a lot of books।" },
            { bn: "**a number of** = 'বহু' — plural ক্রিয়া: A number of students were absent.।", en: "**a number of** = 'many' — plural verb: A number of students were absent.", hi: "**a number of** = 'बहुत सारे' — plural क्रिया: A number of students were absent." },
            { bn: "**the number of** = 'সংখ্যাটা' — singular ক্রিয়া: The number of students has doubled.।", en: "**the number of** = 'the figure' — singular verb: The number of students has doubled.", hi: "**the number of** = 'संख्या' — singular क्रिया: The number of students has doubled." },
            { bn: "একটা a/the-ই অর্থ ও ক্রিয়া দুটোই বদলে দেয়।", en: "One little a/the flips both meaning and verb.", hi: "छोटा-सा a/the अर्थ और क्रिया दोनों पलट देता है।" },
            { bn: "সমগ্র-শব্দের বিন্যাস — the whole day / all day / the entire city; বিশদ পরের অংশে।", en: "The whole-words arrangement — the whole day / all day / the entire city; details in a later section.", hi: "समग्र-शब्दों की व्यवस्था — the whole day / all day / the entire city; विस्तार बाद के खंड में।" },
          ],
          table: {
            head: [
              { bn: "বিশেষ্যের দল", en: "Noun group", hi: "संज्ञा-समूह" },
              { bn: "কোয়ান্টিফায়ার", en: "Quantifiers", hi: "क्वांटिफ़ायर" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [{ bn: "plural countable", en: "plural countable", hi: "plural countable" }, { bn: "many, few, a few, numerous, a number of", en: "many, few, a few, numerous, a number of", hi: "many, few, a few, numerous, a number of" }, { bn: "There are a few chairs.", en: "There are a few chairs.", hi: "There are a few chairs." }],
              [{ bn: "uncountable", en: "uncountable", hi: "uncountable" }, { bn: "much, little, a little, a great deal of, a large amount of", en: "much, little, a little, a great deal of, a large amount of", hi: "much, little, a little, a great deal of, a large amount of" }, { bn: "There is a little water.", en: "There is a little water.", hi: "There is a little water." }],
              [{ bn: "দুই দলেই", en: "both groups", hi: "दोनों समूह" }, { bn: "a lot of, lots of, plenty of, some, any, no", en: "a lot of, lots of, plenty of, some, any, no", hi: "a lot of, lots of, plenty of, some, any, no" }, { bn: "a lot of money / a lot of books", en: "a lot of money / a lot of books", hi: "a lot of money / a lot of books" }],
            ],
          },
          examples: [
            {
              wrong: "There are only little buses on this route.",
              right: "There are only a few buses on this route.",
              note: {
                bn: "buses plural countable — much/little পরিবার এখানে ঢোকে না; few-পরিবার লাগবে, আর ইতিবাচক ভাবে a few।",
                en: "'Buses' is plural countable — the much/little family cannot enter; you need the few family, and positive a few.",
                hi: "'buses' plural countable है — much/little परिवार यहाँ घुस नहीं सकता; few-परिवार चाहिए, और सकारात्मक a few।",
              },
            },
            {
              wrong: "She has much experience in teaching.",
              right: "She has a lot of experience in teaching.",
              note: {
                bn: "মুখের বা লেখার বিবৃতিতে much মূলত প্রশ্ন-অস্বীকারে; বিবৃতিতে a lot of, আনুষ্ঠানিক লেখায় a great deal of।",
                en: "In statements, 'much' belongs mainly to questions and negatives; statements prefer a lot of, formal writing a great deal of.",
                hi: "कथन-वाक्यों में 'much' मुख्यतः प्रश्न-निषेध का शब्द है; कथन में a lot of, औपचारिक लेखन में a great deal of।",
              },
            },
            {
              wrong: "A number of students was absent.",
              right: "A number of students were absent.",
              note: {
                bn: "a number of = 'বহু ছাত্র' — subject আসলে students, তাই plural ক্রিয়া were।",
                en: "'A number of' means 'many students' — the real subject is students, hence the plural verb were.",
                hi: "'a number of' का अर्थ 'बहुत से छात्र' — वास्तविक subject students है, इसलिए plural क्रिया were।",
              },
            },
            {
              wrong: "The number of students have increased.",
              right: "The number of students has increased.",
              note: {
                bn: "the number of = 'সংখ্যাটা' — subject সেই একক সংখ্যা, তাই singular ক্রিয়া has।",
                en: "'The number of' means 'the figure' — the subject is that single number, hence the singular verb has.",
                hi: "'the number of' का अर्थ 'संख्या' — subject वही एकल संख्या है, इसलिए singular क्रिया has।",
              },
            },
            {
              wrong: "I have less books than you.",
              right: "I have fewer books than you.",
              note: {
                bn: "books গোনা যায় — fewer; less uncountable-এর জন্য (less money)। এই জোড়া IELTS-এ প্রতিদিন পরীক্ষা হয়।",
                en: "'Books' can be counted — fewer; less is for uncountables (less money). This pair is tested daily in IELTS.",
                hi: "'books' गिने जा सकते हैं — fewer; less uncountable के लिए (less money)। यह जोड़ी IELTS में रोज़ परखी जाती है।",
              },
            },
          ],
        },
        /* ── 3. Which word calls which article ── */
        {
          heading: {
            bn: "🚦 আভাস ও প্যাটার্ন: কোন শব্দ কোন আর্টিকেল ডাকে",
            en: "🚦 Signals and patterns: which word calls which article",
            hi: "🚦 संकेत और पैटर्न: कौन-सा शब्द कौन-सा आर्टिकल बुलाता है",
          },
          lead: {
            bn: "আভাস চিনলে আর্টিকেল আর অনুমান নয় — দ্বিতীয় উল্লেখ, পেশা, খাবার, যাতায়াত সব স্পষ্ট।",
            en: "Learn the signals and articles stop being guesswork — second mention, profession, meals, transport, all clear.",
            hi: "संकेत पहचान लीजिए, आर्टिकल फिर अंदाज़ा नहीं — दूसरा उल्लेख, पेशा, भोजन, यातायात सब साफ़।",
          },
          points: [
            { bn: "**the ডাকে** — দ্বিতীয় উল্লেখ; বিশেষ্যের পরে of-phrase: the roof of the house; superlative: the best; ordinal: the first।", en: "**The is called by** — second mention; an of-phrase after the noun: the roof of the house; superlatives: the best; ordinals: the first.", hi: "**the बुलाते हैं** — दूसरा उल्लेख; संज्ञा के बाद of-phrase: the roof of the house; superlative: the best; ordinal: the first।" },
            { bn: "the-এর আরও — অনন্য বস্তু (the sun, the moon, the internet), the same, the only, অতি-পরিচিত প্রেক্ষাপট (the kitchen, the bus = আমাদের রুটের)।", en: "More the-triggers — unique objects (the sun, the moon, the internet), the same, the only, a super-familiar context (the kitchen, the bus = our route's).", hi: "the के और संकेत — अद्वितीय वस्तुएँ (the sun, the moon, the internet), the same, the only, अति-परिचित संदर्भ (the kitchen, the bus)।" },
            { bn: "**a/an ডাকে** — প্রথম উল্লেখ; পেশা: She is a doctor.; সংখ্যার আগে: a hundred।", en: "**A/an is called by** — first mention; professions: She is a doctor.; before numbers: a hundred.", hi: "**a/an बुलाते हैं** — पहला उल्लेख; पेशा: She is a doctor.; संख्या से पहले: a hundred।" },
            { bn: "**উচ্চারণ-নিয়ম** — স্বরধ্বনি-শব্দে an: an hour, an MBA; yu-ধ্বনিতে a: a university, a European।", en: "**The sound rule** — vowel sounds take an: an hour, an MBA; yoo-sounds take a: a university, a European.", hi: "**उच्चारण-नियम** — स्वर-ध्वनि पर an: an hour, an MBA; yu-ध्वनि पर a: a university, a European।" },
            { bn: "**zero ডাকে** — সাধারণ plural: Dogs are loyal.; সাধারণ uncountable: Happiness matters.।", en: "**Zero is called by** — general plurals: Dogs are loyal.; general uncountables: Happiness matters.", hi: "**zero बुलाते हैं** — सामान्य plural: Dogs are loyal.; सामान्य uncountable: Happiness matters।" },
            { bn: "zero-এর আরও — খাবার (have lunch, কিন্তু a big lunch), যাতায়াত (by bus), খেলা-ভাষা (chess, Bengali), most + বিশেষ্য (Most people)।", en: "More zero-triggers — meals (have lunch, but a big lunch), transport (by bus), games and languages (chess, Bengali), most + noun (Most people).", hi: "zero के और संकेत — भोजन (have lunch, पर a big lunch), यातायात (by bus), खेल-भाषा (chess, Bengali), most + संज्ञा (Most people)।" },
            { bn: "**সূক্ষ্ম আভাস** — বিশেষ্যের পরে of-phrase বা relative clause এলে প্রায়ই the দরকার: the history of Bengal, the book that you lent me।", en: "**A subtle signal** — an of-phrase or relative clause after the noun usually calls for the: the history of Bengal, the book that you lent me.", hi: "**सूक्ष्म संकेत** — संज्ञा के बाद of-phrase या relative clause आए तो प्रायः the चाहिए: the history of Bengal, the book that you lent me।" },
          ],
          examples: [
            {
              wrong: "She is the teacher at a primary school.",
              right: "She is a teacher at a primary school.",
              note: {
                bn: "পেশা প্রথমবার বললে a — শ্রেণিতে অনেক teacher আছে, নির্দিষ্ট একজন নয়।",
                en: "A profession on first mention takes a — there are many teachers in the category, not one particular one.",
                hi: "पेशा पहली बार कहने पर a — कक्षा में कई teacher हैं, कोई विशिष्ट एक नहीं।",
              },
            },
            {
              wrong: "He returned back after a hour.",
              right: "He returned after an hour.",
              note: {
                bn: "an বানানে নয়, উচ্চারণে আসে — hour-এ h নীরব, স্বরধ্বনি-শব্দ; আর returned back-এ back অপ্রয়োজনীয়।",
                en: "'An' follows sound, not spelling — the h in hour is silent, a vowel sound; and 'returned back' doubles the return.",
                hi: "'an' वर्तनी से नहीं, उच्चारण से आता है — hour का h मौन, स्वर-ध्वनि; और 'returned back' में back अनावश्यक।",
              },
            },
            {
              wrong: "Most of people agree with the decision.",
              right: "Most people agree with the decision.",
              note: {
                bn: "most + বিশেষ্য zero; most of-এর পরে দরকার the — most of the people (নির্দিষ্ট দল)।",
                en: "most + noun takes zero; after most of you need the — most of the people (a specific group).",
                hi: "most + संज्ञा पर zero; most of के बाद the चाहिए — most of the people (विशिष्ट समूह)।",
              },
            },
            {
              wrong: "I go to the bed at eleven.",
              right: "I go to bed at eleven.",
              note: {
                bn: "bed ঘুমানোর উদ্দেশ্যে গেলে zero; the bed মানে খাটের টুকরোটা — বসে বই পড়ছেন, হয়তো।",
                en: "'Bed' as the purpose of sleeping takes zero; the bed means the piece of furniture — maybe you sit on it reading.",
                hi: "सोने के उद्देश्य से 'bed' पर zero; the bed का मतलब फ़र्निचर का टुकड़ा — शायद बैठकर किताब पढ़ रहे हैं।",
              },
            },
            {
              wrong: "We travelled by the bus to Khulna.",
              right: "We travelled to Khulna by bus.",
              note: {
                bn: "by + যানবাহনে zero — by bus, by train, by air; কিন্তু নির্দিষ্ট বাস বোঝালে on the 6 o'clock bus।",
                en: "by + vehicle takes zero — by bus, by train, by air; but for a specific bus, on the 6 o'clock bus.",
                hi: "by + वाहन पर zero — by bus, by train, by air; पर ठोस बस हो तो on the 6 o'clock bus।",
              },
            },
          ],
        },
        /* ── 4. Institutions as purpose ── */
        {
          heading: {
            bn: "🏛️ প্রতিষ্ঠান-হিসেবে উদ্দেশ্য: go to school, prison, hospital — zero-এর সবচেয়ে সূক্ষ্ম জায়গা",
            en: "🏛️ Institutions as purpose: go to school, prison, hospital — the subtlest zero zone",
            hi: "🏛️ संस्था-रूप में उद्देश्य: go to school, prison, hospital — zero की सबसे बारीक भूमि",
          },
          lead: {
            bn: "school, prison, hospital — একই জায়গা, দুই উদ্দেশ্য, দুই আর্টিকেল; সিদ্ধান্ত মূল কাজ বলে দেয়।",
            en: "school, prison, hospital — one place, two purposes, two articles; the core function decides.",
            hi: "school, prison, hospital — एक जगह, दो उद्देश्य, दो आर्टिकल; मूल काम ही फ़ैसला करता है।",
          },
          points: [
            { bn: "school, college, university, church, prison, hospital, market, bed — আর্টিকেল নির্ভর করে উদ্দেশ্যের ওপর।", en: "school, college, university, church, prison, hospital, market, bed — the article depends on the purpose.", hi: "school, college, university, church, prison, hospital, market, bed — आर्टिकल उद्देश्य पर टिका है।" },
            { bn: "**প্রতিষ্ঠানের মূল কাজে গেলে zero** — ছাত্র পড়তে, বন্দি শাস্তি ভোগ করতে, রোগী চিকিৎসায়, উপাসক প্রার্থনায়, ঘুমাতে।", en: "**The institution's core function takes zero** — study as a pupil, serve a sentence, be treated as a patient, pray as a worshipper, sleep.", hi: "**संस्था के मूल काम पर zero** — विद्यार्थी बनकर पढ़ने, बंदी बनकर सज़ा काटने, रोगी बनकर इलाज, उपासक बनकर प्रार्थना, सोने।" },
            { bn: "রূপগুলো: go to school, be in prison, be in hospital (BrE), go to bed, go to church।", en: "The forms: go to school, be in prison, be in hospital (BrE), go to bed, go to church.", hi: "रूप: go to school, be in prison, be in hospital (BrE), go to bed, go to church।" },
            { bn: "**ভবন বা ঠিকানা হলে the** — অভিভাবক সভায়, সাংবাদিক সংবাদ নিতে, আত্মীয় দেখা করতে।", en: "**A mere building or destination takes the** — a parent to a meeting, a journalist for a story, a relative to visit.", hi: "**इमारत या ठिकाना हो तो the** — अभिभावक बैठक के लिए, पत्रकार ख़बर लेने, रिश्तेदार मिलने।" },
            { bn: "রূপগুলো: went to the school to meet the headmaster, visited the prison, visited the hospital।", en: "The forms: went to the school to meet the headmaster, visited the prison, visited the hospital.", hi: "रूप: went to the school to meet the headmaster, visited the prison, visited the hospital।" },
            { bn: "একই লজিক abstract বিশেষ্যে — সাধারণ ভাবে zero: Education changes lives, Success needs patience।", en: "The same logic runs through abstract nouns — general idea, zero: Education changes lives, Success needs patience.", hi: "वही तर्क abstract संज्ञाओं में — सामान्य भाव पर zero: Education changes lives, Success needs patience।" },
            { bn: "নির্দিষ্ট হলে the: The education he received was poor, The success of the mission surprised us।", en: "Specific takes the: The education he received was poor, The success of the mission surprised us.", hi: "विशिष्ट पर the: The education he received was poor, The success of the mission surprised us।" },
            { bn: "AmE-এ in the hospital, BrE-এ রোগী-অর্থে in hospital — পরীক্ষায় BrE ধরে নেওয়া নিরাপদ।", en: "AmE says in the hospital, BrE keeps in hospital for the patient sense — in exams, assume BrE.", hi: "AmE में in the hospital, BrE में रोगी-अर्थ में in hospital — परीक्षा में BrE मानना सुरक्षित।" },
          ],
          table: {
            head: [
              { bn: "উদ্দেশ্য", en: "Purpose", hi: "उद्देश्य" },
              { bn: "আর্টিকেল", en: "Article", hi: "आर्टिकल" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [{ bn: "প্রতিষ্ঠানের মূল কাজ", en: "the institution's core function", hi: "संस्था का मूल काम" }, { bn: "zero", en: "zero", hi: "zero" }, { bn: "go to school, be in prison, go to bed", en: "go to school, be in prison, go to bed", hi: "go to school, be in prison, go to bed" }],
              [{ bn: "ভবন বা ঠিকানা", en: "a building or destination", hi: "इमारत या ठिकाना" }, { bn: "the", en: "the", hi: "the" }, { bn: "visited the prison, went to the school for a meeting", en: "visited the prison, went to the school for a meeting", hi: "visited the prison, went to the school for a meeting" }],
              [{ bn: "abstract, সাধারণ ভাব", en: "abstract, general idea", hi: "abstract, सामान्य भाव" }, { bn: "zero", en: "zero", hi: "zero" }, { bn: "Education changes lives. Success needs patience.", en: "Education changes lives. Success needs patience.", hi: "Education changes lives. Success needs patience." }],
              [{ bn: "abstract, নির্দিষ্ট", en: "abstract, specific", hi: "abstract, विशिष्ट" }, { bn: "the", en: "the", hi: "the" }, { bn: "The education he received was poor.", en: "The education he received was poor.", hi: "The education he received was poor." }],
            ],
          },
          examples: [
            {
              wrong: "He was sent to the prison for three years.",
              right: "He was sent to prison for three years.",
              note: {
                bn: "শাস্তি ভোগ করতে যাওয়া — বন্দি-উদ্দেশ্যে zero; the prison মানে ভবনটা — সাংবাদিক visited the prison।",
                en: "Going to serve a sentence — prisoner-purpose takes zero; the prison means the building — a journalist visited the prison.",
                hi: "सज़ा काटने जाना — बंदी-उद्देश्य पर zero; the prison का मतलब इमारत — पत्रकार visited the prison।",
              },
            },
            {
              wrong: "The child goes to the school every day — he is in class three.",
              right: "The child goes to school every day — he is in class three.",
              note: {
                bn: "ছাত্র হয়ে পড়তে যাওয়া — zero; বাবা goes to the school to attend a meeting বললেই ভবন-অর্থ।",
                en: "Going as a pupil to study — zero; when the father goes to the school to attend a meeting, the building sense returns.",
                hi: "विद्यार्थी बनकर पढ़ने जाना — zero; बाप goes to the school to attend a meeting कहे तो इमारत-अर्थ लौट आता है।",
              },
            },
            {
              wrong: "After the surgery my father spent a week in the hospital, and we visited hospital every day.",
              right: "After the surgery my father spent a week in hospital, and we visited the hospital every day.",
              note: {
                bn: "BrE-এ রোগী in hospital (zero), দর্শক visited the hospital (ভবন) — এক বাক্যে দুই ভূমিকা, দুই আর্টিকেল।",
                en: "In BrE the patient is in hospital (zero), the visitor visited the hospital (the building) — two roles, two articles in one sentence.",
                hi: "BrE में रोगी in hospital (zero), मिलने वाला visited the hospital (इमारत) — एक वाक्य में दो भूमिका, दो आर्टिकल।",
              },
            },
            {
              wrong: "The education is the key to the success.",
              right: "Education is the key to success.",
              note: {
                bn: "education আর success সাধারণ ভাবে zero; the key থেকে যায় — একক, অনন্য উপায় বোঝায়।",
                en: "'Education' and 'success' as general ideas take zero; the key stays — it points to one unique means.",
                hi: "'education' और 'success' सामान्य भाव में zero लेते हैं; the key रहता है — वह एक अद्वितीय साधन दिखाता है।",
              },
            },
            {
              wrong: "We go to the church every Sunday to pray.",
              right: "We go to church every Sunday to pray.",
              note: {
                bn: "উপাসক হয়ে প্রার্থনায় — zero; পর্যটক went to the church to take photos বললে ভবন-অর্থ।",
                en: "Going as a worshipper to pray — zero; a tourist went to the church to take photos — building sense.",
                hi: "उपासक बनकर प्रार्थना करने जाना — zero; पर्यटक went to the church to take photos — इमारत-अर्थ।",
              },
            },
          ],
        },
        /* ── 5. Where 'the' rules ── */
        {
          heading: {
            bn: "👑 অনন্য জগৎ আর ব্যতিক্রম: the-এর বিশেষ আধিপত্য",
            en: "👑 The unique world and its exceptions: where 'the' rules",
            hi: "👑 अद्वितीय जगत और अपवाद: जहाँ 'the' का विशेष आधिपत्य",
          },
          lead: {
            bn: "যা একটাই তার সামনে the — সঙ্গে বাদ্যযন্ত্র, খেলা, শ্রেণি আর সময়ের ছোট ছোট আধিপত্য।",
            en: "Whatever is unique takes the — plus the small dominions of instruments, games, classes and time.",
            hi: "जो अद्वितीय है उसके आगे the — साथ में वाद्ययंत्र, खेल, श्रेणी और समय के छोटे अधिकार-क्षेत्र।",
          },
          points: [
            { bn: "**যা একটাই, তার সামনে the** — the sun, the moon, the sky, the earth, the world, the internet।", en: "**Whatever exists as one takes the** — the sun, the moon, the sky, the earth, the world, the internet.", hi: "**जो एक ही है उसके आगे the** — the sun, the moon, the sky, the earth, the world, the internet।" },
            { bn: "সঙ্গী গুচ্ছ — the same, the only, the first/last, the best/worst।", en: "The companion chunks — the same, the only, the first/last, the best/worst.", hi: "साथी गुच्छ — the same, the only, the first/last, the best/worst।" },
            { bn: "**বাদ্যযন্ত্রে the** — play the piano / play the violin।", en: "**Instruments take the** — play the piano / play the violin.", hi: "**वाद्ययंत्र पर the** — play the piano / play the violin।" },
            { bn: "**খেলায় zero** — play chess / play cricket; মাধ্যমেও ভাগ — listen to the radio, কিন্তু watch television (মাধ্যম হিসেবে)।", en: "**Games take zero** — play chess / play cricket; media split too — listen to the radio, but watch television (as a medium).", hi: "**खेल पर zero** — play chess / play cricket; माध्यम भी बँटे हैं — listen to the radio, पर watch television (माध्यम के रूप में)।" },
            { bn: "**the + বিশেষণ = পুরো শ্রেণি** — the rich, the poor, the elderly; অর্থ plural, তাই ক্রিয়াও plural।", en: "**the + adjective = a whole class** — the rich, the poor, the elderly; plural sense, so a plural verb.", hi: "**the + विशेषण = पूरी श्रेणी** — the rich, the poor, the elderly; भाव बहुवचन, इसलिए क्रिया भी बहुवचन।" },
            { bn: "একক-শ্রেণির দুই রূপই চলে: The tiger is endangered. / Tigers are endangered.।", en: "Both forms of a single class work: The tiger is endangered. / Tigers are endangered.", hi: "एकल-श्रेणी के दोनों रूप चलते हैं: The tiger is endangered. / Tigers are endangered।" },
            { bn: "**সময়-শব্দের zero সারি** — next week, last year, this morning; কিন্তু in the morning/afternoon/evening-এ the, at night-এ zero।", en: "**The time-word zero row** — next week, last year, this morning; but in the morning/afternoon/evening takes the, at night takes zero.", hi: "**समय-शब्दों की zero-पंक्ति** — next week, last year, this morning; पर in the morning/afternoon/evening में the, at night में zero।" },
            { bn: "ছোট আধিপত্য মুখস্তের একটাই পথ — বাক্য-সারি হিসেবে: on the internet, on the radio, on the way, in the end, at the same time, all over the world।", en: "One way to master these small dominions — as a sentence list: on the internet, on the radio, on the way, in the end, at the same time, all over the world.", hi: "इन छोटे अधिकार-क्षेत्रों को रटने का एक ही रास्ता — वाक्य-सूची के रूप में: on the internet, on the radio, on the way, in the end, at the same time, all over the world।" },
          ],
          examples: [
            {
              wrong: "Sun rises in the east.",
              right: "The sun rises in the east.",
              note: {
                bn: "অনন্য বস্তু — সূর্য একটাই, তাই the; দিকের সামনেও the east/west।",
                en: "Unique object — there is one sun, hence the; directions too take the: the east/west.",
                hi: "अद्वितीय वस्तु — सूरज एक ही है, इसलिए the; दिशाओं पर भी the: the east/west।",
              },
            },
            {
              wrong: "I spent the whole night on Internet.",
              right: "I spent the whole night on the internet.",
              note: {
                bn: "internet একক সেবা-জগৎ — the internet; চলন্ত গুচ্ছ on the internet।",
                en: "'The internet' is one single service-world — the internet; the running chunk is on the internet.",
                hi: "internet एक ही सेवा-जगत है — the internet; चलता गुच्छ है on the internet।",
              },
            },
            {
              wrong: "We bought same phone.",
              right: "We bought the same phone.",
              note: {
                bn: "same সবসময় the-এর সঙ্গে চেইন-বাঁধা — the same; this same আধা-সাহিত্যিক, রোজকার ভাষা the same।",
                en: "'Same' is chained to the — the same; 'this same' is literary-flavoured, everyday language says the same.",
                hi: "'same' हमेशा the की ज़ंजीर में बँधा — the same; 'this same' साहित्यिक स्वाद, रोज़मर्रा भाषा कहती है the same।",
              },
            },
            {
              wrong: "She plays the chess very well.",
              right: "She plays chess very well.",
              note: {
                bn: "খেলায় zero — play chess/cricket; বাদ্যযন্ত্রে the — play the violin; দুই পাড়ার নিয়ম আলাদা।",
                en: "Games take zero — play chess/cricket; instruments take the — play the violin; two neighbourhoods, two rules.",
                hi: "खेलों पर zero — play chess/cricket; वाद्ययंत्रों पर the — play the violin; दो मोहल्ले, दो नियम।",
              },
            },
            {
              wrong: "The rich is not always happy.",
              right: "The rich are not always happy.",
              note: {
                bn: "the + বিশেষণ = পুরো শ্রেণি — the rich মানে ধনী মানুষরা; অর্থ plural, তাই ক্রিয়া are।",
                en: "the + adjective = a whole class — the rich means rich people; the sense is plural, so the verb is are.",
                hi: "the + विशेषण = पूरी श्रेणी — the rich यानी अमीर लोग; भाव बहुवचन है, इसलिए क्रिया are।",
              },
            },
          ],
        },
        /* ── 6. The fine machinery of quantity ── */
        {
          heading: {
            bn: "🧮 পরিমাণের সূক্ষ্ম যন্ত্র: little/few, much/many, less/fewer, a number of/the number of, whole/all/entire",
            en: "🧮 The fine machinery of quantity: little/few, much/many, less/fewer, a number of/the number of, whole/all/entire",
            hi: "🧮 परिमाण की बारीक मशीन: little/few, much/many, less/fewer, a number of/the number of, whole/all/entire",
          },
          lead: {
            bn: "little-র আগে a-ই মেজাজ বদলায়, fewer-less-এর বিভাজন গণনার — চার জোড়া এক টেবিলে।",
            en: "The a before little flips the mood, fewer-vs-less is about counting — four pairs on one table.",
            hi: "little से पहले a ही भाव पलटता है, fewer-less का बँटवारा गिनती का — चार जोड़े एक तालिका में।",
          },
          formula: {
            bn: "few/little = প্রায় নেই · a few/a little = কিছু আছে · fewer + countable · less + uncountable",
            en: "few/little = hardly any · a few/a little = some · fewer + countable · less + uncountable",
            hi: "few/little = लगभग नहीं · a few/a little = कुछ है · fewer + countable · less + uncountable",
          },
          points: [
            { bn: "**আগে মেজাজ, পরে সংখ্যা** — little আর few-র আগে a না থাকলে ভাবটা হতাশার: প্রায় নেই।", en: "**Mood first, then number** — without a before little/few the mood is despair: hardly any.", hi: "**पहले भाव, फिर गिनती** — little/few से पहले a न हो तो भाव निराशा का: लगभग नहीं।" },
            { bn: "নেতিবাচক রূপ — We have little time (সময় প্রায় শেষ), He has few friends (প্রায় কেউ নেই)।", en: "The negative forms — We have little time (barely any left), He has few friends (almost nobody).", hi: "निषेधात्मक रूप — We have little time (समय लगभग ख़त्म), He has few friends (कोई-कोई ही)।" },
            { bn: "**a-থাকলে ভাব তৃপ্তির** — কিছু আছে, চলবে: a little time, a few friends।", en: "**With a, the mood is contentment** — some, enough: a little time, a few friends.", hi: "**a हो तो भाव संतोष का** — कुछ है, चल जाएगा: a little time, a few friends।" },
            { bn: "**গাণিতিক দিক** — few/a few + plural countable; little/a little + uncountable।", en: "**The arithmetic** — few/a few + plural countable; little/a little + uncountable.", hi: "**गणितीय दिशा** — few/a few + plural countable; little/a little + uncountable।" },
            { bn: "**much/many** মূলত প্রশ্ন, অস্বীকার আর so/too/how-এর সঙ্গে; বিবৃতিতে a lot of / plenty of।", en: "**much/many** belong mainly to questions, negatives and so/too/how; statements prefer a lot of / plenty of.", hi: "**much/many** मुख्यतः प्रश्न, निषेध और so/too/how के साथ; कथनों में a lot of / plenty of।" },
            { bn: "আনুষ্ঠানিক লেখায় a great deal of (uncountable) / numerous (countable)।", en: "Formal writing prefers a great deal of (uncountable) / numerous (countable).", hi: "औपचारिक लेखन में a great deal of (uncountable) / numerous (countable)।" },
            { bn: "**less/fewer-এর বিভাজন** — less + uncountable (less money), fewer + countable (fewer cars); টাকা-দূরত্ব-সময় একক পরিমাণে less চলে (less than ten dollars, less than five miles)।", en: "**The less/fewer split** — less + uncountable (less money), fewer + countable (fewer cars); but money, distance and time as single amounts take less (less than ten dollars, less than five miles).", hi: "**less/fewer का बँटवारा** — less + uncountable (less money), fewer + countable (fewer cars); पर पैसा-दूरी-समय एक सामूहिक मात्रा में less (less than ten dollars, less than five miles)।" },
            { bn: "**সমগ্র-শব্দ** — the whole day = all day; whole-এর আগে determiner (the whole city, my whole life); all-সারি আলাদা (all day, all night, all my life); entire = whole-এর শক্ত সহোদর (the entire report)।", en: "**The whole-words** — the whole day = all day; a determiner before whole (the whole city, my whole life); the all-row is separate (all day, all night, all my life); entire is whole's stronger sibling (the entire report).", hi: "**समग्र-शब्द** — the whole day = all day; whole से पहले determiner (the whole city, my whole life); all-पंक्ति अलग (all day, all night, all my life); entire = whole का बलवान भाई (the entire report)।" },
          ],
          table: {
            head: [
              { bn: "কোয়ান্টিফায়ার", en: "Quantifier", hi: "क्वांटिफ़ायर" },
              { bn: "কোথায় বসে", en: "Sits with", hi: "कहाँ बैठता है" },
              { bn: "রং ও উদাহরণ", en: "Mood & example", hi: "भाव और उदाहरण" },
            ],
            rows: [
              [{ bn: "few / a few", en: "few / a few", hi: "few / a few" }, { bn: "plural countable", en: "plural countable", hi: "plural countable" }, { bn: "few = প্রায় নেই · a few = কিছু আছে (a few chairs)", en: "few = hardly any · a few = some (a few chairs)", hi: "few = लगभग नहीं · a few = कुछ हैं (a few chairs)" }],
              [{ bn: "little / a little", en: "little / a little", hi: "little / a little" }, { bn: "uncountable", en: "uncountable", hi: "uncountable" }, { bn: "little = প্রায় নেই · a little = কিছু আছে (a little water)", en: "little = hardly any · a little = some (a little water)", hi: "little = लगभग नहीं · a little = कुछ है (a little water)" }],
              [{ bn: "fewer", en: "fewer", hi: "fewer" }, { bn: "plural countable", en: "plural countable", hi: "plural countable" }, { bn: "fewer cars, fewer students", en: "fewer cars, fewer students", hi: "fewer cars, fewer students" }],
              [{ bn: "less", en: "less", hi: "less" }, { bn: "uncountable; একক পরিমাণে less than ten dollars", en: "uncountable; single amounts take less than ten dollars", hi: "uncountable; एक सामूहिक मात्रा में less than ten dollars" }, { bn: "less money, less traffic", en: "less money, less traffic", hi: "less money, less traffic" }],
            ],
          },
          examples: [
            {
              wrong: "Hurry up, we have a little time — the train leaves in two minutes!",
              right: "Hurry up, we have little time — the train leaves in two minutes!",
              note: {
                bn: "দুই মিনিটে ট্রেন — সময় প্রায় নেই; little (a ছাড়া) = প্রায় নেই; a little বললে 'একটু আছে, আরামে চলবে' শোনায়।",
                en: "The train leaves in two minutes — time is almost gone; little (no a) = hardly any; a little would sound like 'some left, no rush'.",
                hi: "दो मिनट में ट्रेन — समय लगभग ख़त्म; little (a के बिना) = लगभग नहीं; a little कहते तो 'थोड़ा बचा है, आराम से' सुनाई देता।",
              },
            },
            {
              wrong: "Few students passed, so the teacher was pleased.",
              right: "A few students passed, so the teacher was pleased.",
              note: {
                bn: "শিক্ষক খুশি মানে কেউ-কেউ পাস করেছে — ইতিবাচক a few; few হলে 'প্রায় কেউ পাস করেনি', খুশির কারণই থাকে না।",
                en: "The teacher's pleasure means some passed — positive a few; bare few would mean 'almost none passed', leaving nothing to be pleased about.",
                hi: "अध्यापक की ख़ुशी का मतलब कुछ लोग पास हुए — सकारात्मक a few; खाली few होता तो 'लगभग कोई पास नहीं', ख़ुशी का कारण ही नहीं बचता।",
              },
            },
            {
              wrong: "The number of road accidents have doubled in a decade.",
              right: "The number of road accidents has doubled in a decade.",
              note: {
                bn: "the number of = সংখ্যাটা একটাই — singular ক্রিয়া has; প্রতিবেদন-লেখার প্রতিদিনের বাক্য।",
                en: "'The number of' is one single figure — singular verb has; a daily sentence in report writing.",
                hi: "'the number of' = वह संख्या एक ही है — singular क्रिया has; रिपोर्ट-लेखन का रोज़ का वाक्य।",
              },
            },
            {
              wrong: "There are less cars on the road today.",
              right: "There are fewer cars on the road today.",
              note: {
                bn: "cars গোনা যায় — fewer; less শুধু ভরের জিনিসে — less traffic, less noise।",
                en: "'Cars' can be counted — fewer; less is only for mass — less traffic, less noise.",
                hi: "'cars' गिने जा सकते हैं — fewer; less केवल सामूहिक वस्तुओं पर — less traffic, less noise।",
              },
            },
            {
              wrong: "I worked whole day without a break.",
              right: "I worked all day without a break.",
              note: {
                bn: "whole-এর আগে determiner লাগবেই — the whole day; নয়তো all-সারি নিন — all day, all night।",
                en: "'Whole' must carry a determiner — the whole day; otherwise take the all-row — all day, all night.",
                hi: "'whole' से पहले determiner लाज़मी है — the whole day; वरना all-पंक्ति लें — all day, all night।",
              },
            },
          ],
        },
        /* ── 7. Subtle mistakes of advanced learners ── */
        {
          heading: {
            bn: "⚠️ উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "⚠️ Subtle mistakes of advanced learners",
            hi: "⚠️ उच्च स्तर के शिक्षार्थियों की सूक्ष्म गलतियाँ",
          },
          lead: {
            bn: "informations, the most of people, the both — উঁচু স্তরেও এই পাঁচ ফিসলন ঘন ঘন আসে।",
            en: "informations, the most of people, the both — these five slips keep coming even at C1.",
            hi: "informations, the most of people, the both — ये पाँच फिसलन C1 पर भी बार-बार आती हैं।",
          },
          formula: {
            bn: "uncountable গোনতে ধার: a piece of / an item of + বিশেষ্য",
            en: "to count uncountables, borrow: a piece of / an item of + noun",
            hi: "uncountable गिनने के लिए उधार: a piece of / an item of + संज्ञा",
          },
          points: [
            { bn: "C1 পর্যায়ের বাংলাভাষীদের সবচেয়ে ঘন ঘন পাঁচটা পা — এক এক করে চিনে নিন।", en: "The five most frequent slips of C1-level Bengali speakers — recognise them one by one.", hi: "C1 स्तर के बांग्लाभाषियों की सबसे बार-बार आने वाली पाँच फिसलनें — एक-एक कर पहचानिए।" },
            { bn: "**uncountable বিশেষ্যে plural** — informations, advices, furnitures, equipments, softwares।", en: "**Plurals on uncountables** — informations, advices, furnitures, equipments, softwares.", hi: "**uncountable संज्ञाओं का बहुवचन** — informations, advices, furnitures, equipments, softwares।" },
            { bn: "**most-এর আগে the ঢোকানো** — the most of people।", en: "**A stray the before most** — the most of people.", hi: "**most से पहले the घुसना** — the most of people।" },
            { bn: "**less দিয়ে countable মাপা** — less people, less cars; IELTS Task 1-এ ঘন ঘন।", en: "**Measuring countables with less** — less people, less cars; frequent in IELTS Task 1.", hi: "**countable को less से तोलना** — less people, less cars; IELTS Task 1 में बार-बार।" },
            { bn: "**প্রতিষ্ঠান-উদ্দেশ্যে the ঢোকানো** — go to the school বলে ছাত্র-অর্থ।", en: "**A stray the in the institution-purpose** — go to the school said with a pupil's meaning.", hi: "**संस्था-उद्देश्य में the घुसना** — go to the school कहकर विद्यार्थी-अर्थ देना।" },
            { bn: "**the both** — both candidates / both the candidates চলে; the both কখনও নয়।", en: "**The both** — both candidates / both the candidates work; the both never.", hi: "**the both** — both candidates / both the candidates चलते हैं; the both कभी नहीं।" },
            { bn: "প্রতিষেধক একটা — uncountable তালিকা মুখস্থ: information, advice, furniture, equipment, software, research, evidence, feedback, progress, knowledge, luggage, homework।", en: "The antidote is one — memorise the uncountable list: information, advice, furniture, equipment, software, research, evidence, feedback, progress, knowledge, luggage, homework.", hi: "इलाज एक ही — uncountable सूची रटें: information, advice, furniture, equipment, software, research, evidence, feedback, progress, knowledge, luggage, homework।" },
            { bn: "পরিমাণ বোঝাতে ধার করুন a piece of / an item of — a piece of advice, a piece of information।", en: "To count them, borrow a piece of / an item of — a piece of advice, a piece of information.", hi: "गिनने के लिए a piece of / an item of उधार लें — a piece of advice, a piece of information।" },
          ],
          examples: [
            {
              wrong: "Thank you for the informations you sent.",
              right: "Thank you for the information you sent.",
              note: {
                bn: "information uncountable — plural -s নেই; একক বোঝাতে a piece of information।",
                en: "'Information' is uncountable — no plural -s; for one item, a piece of information.",
                hi: "'information' uncountable है — बहुवचन -s नहीं; एक टुकड़ा कहने हेतु a piece of information।",
              },
            },
            {
              wrong: "The most of people prefer tea.",
              right: "Most people prefer tea.",
              note: {
                bn: "most + বিশেষ্য zero; the most শুধু superlative-এ — the most popular drink; নির্দিষ্ট দলে most of the people।",
                en: "most + noun takes zero; the most is only for superlatives — the most popular drink; for a specific group, most of the people.",
                hi: "most + संज्ञा पर zero; the most केवल superlative में — the most popular drink; विशिष्ट समूह के लिए most of the people।",
              },
            },
            {
              wrong: "The both candidates were strong.",
              right: "Both candidates were strong.",
              note: {
                bn: "the both ইংরেজিতে নেই; both candidates বা both the candidates — দুই বিন্যাসই, the both নয়।",
                en: "'The both' does not exist in English; both candidates or both the candidates — either order, never the both.",
                hi: "'the both' अंग्रेज़ी में नहीं है; both candidates या both the candidates — दोनों क्रम चलते हैं, the both कभी नहीं।",
              },
            },
            {
              wrong: "He gave me an advice about the exam.",
              right: "He gave me some advice about the exam.",
              note: {
                bn: "advice uncountable — an নয়, plural -s নয়; একক বোঝাতে a piece of advice।",
                en: "'Advice' is uncountable — no an, no plural -s; for one item, a piece of advice.",
                hi: "'advice' uncountable है — an नहीं, बहुवचन -s नहीं; एक सलाह कहने हेतु a piece of advice।",
              },
            },
            {
              wrong: "The unemployment is a big problem in the Bangladesh.",
              right: "Unemployment is a big problem in Bangladesh.",
              note: {
                bn: "unemployment সাধারণ ভাবে zero; দেশের নামেও zero — তবে ব্যতিক্রম: the USA, the Netherlands, the UK।",
                en: "'Unemployment' as a general idea takes zero; country names too take zero — exceptions: the USA, the Netherlands, the UK.",
                hi: "'unemployment' सामान्य भाव में zero; देशों के नामों पर भी zero — अपवाद: the USA, the Netherlands, the UK।",
              },
            },
          ],
        },
        /* ── 8. Seen in a short piece of writing ── */
        {
          heading: {
            bn: "📖 ছোট লেখায় দেখা যাক",
            en: "📖 Seen in a short piece of writing",
            hi: "📖 छोटे लेखन में देखिए",
          },
          lead: {
            bn: "প্রতিবেদনের এক অনুচ্ছেদে পাঠের সব নিয়ম একসঙ্গে — প্রতিটা বিশেষ্যের সামনে থামুন।",
            en: "One report paragraph carries every rule of the lesson — pause before every noun.",
            hi: "रिपोर्ट का एक अनुच्छेद पाठ के सारे नियम एक साथ ले चलता है — हर संज्ञा से पहले रुकें।",
          },
          formula: {
            bn: "প্রথমবার a/an · দ্বিতীয়বার the · সাধারণ ভাবে zero",
            en: "first mention a/an · second mention the · general idea takes zero",
            hi: "पहला उल्लेख a/an · दूसरा the · सामान्य भाव पर zero",
          },
          points: [
            { bn: "প্রতিবেদন-ভঙ্গির অনুচ্ছেদ: 'Unemployment is a serious problem in Bangladesh. A recent survey found that the number of unemployed graduates has doubled in a decade, and few of them receive any career advice.'", en: "A report-style paragraph: 'Unemployment is a serious problem in Bangladesh. A recent survey found that the number of unemployed graduates has doubled in a decade, and few of them receive any career advice.'", hi: "रिपोर्ट-शैली का अनुच्छेद: 'Unemployment is a serious problem in Bangladesh. A recent survey found that the number of unemployed graduates has doubled in a decade, and few of them receive any career advice.'" },
            { bn: "এরপর: 'A little training, however, can change everything: graduates who spend a few months in technical programmes find work faster. Most experts agree that education, not luck, is the key to success.'", en: "Then: 'A little training, however, can change everything: graduates who spend a few months in technical programmes find work faster. Most experts agree that education, not luck, is the key to success.'", hi: "फिर: 'A little training, however, can change everything: graduates who spend a few months in technical programmes find work faster. Most experts agree that education, not luck, is the key to success.'" },
            { bn: "প্রতিটা বিশেষ্যের সামনে থামুন — কেন a, কেন the, কেন zero?", en: "Pause before every noun — why a, why the, why zero?", hi: "हर संज्ञा से पहले रुकें — क्यों a, क्यों the, क्यों zero?" },
            { bn: "singular countable বিশেষ্য কখনো খালি নয় — determiner লাগবেই।", en: "A singular countable noun never stands bare — it takes a determiner.", hi: "singular countable संज्ञा कभी नंगी नहीं — determiner लाज़मी।" },
            { bn: "দ্বিতীয় উল্লেখ, পরিচিত প্রেক্ষাপট, অনন্য বস্তু → the; সাধারণ ভাব ও প্রতিষ্ঠান-উদ্দেশ্য → zero।", en: "Second mention, familiar context, unique object → the; general idea and institution-purpose → zero.", hi: "दूसरा उल्लेख, परिचित संदर्भ, अद्वितीय वस्तु → the; सामान्य भाव और संस्था-उद्देश्य → zero।" },
            { bn: "few/little = প্রায় নেই, a few/a little = কিছু আছে।", en: "few/little = hardly any, a few/a little = some.", hi: "few/little = लगभग नहीं, a few/a little = कुछ है।" },
            { bn: "a number of + plural ক্রিয়া, the number of + singular ক্রিয়া; fewer + countable, less + uncountable।", en: "a number of + plural verb, the number of + singular verb; fewer + countable, less + uncountable.", hi: "a number of + plural क्रिया, the number of + singular क्रिया; fewer + countable, less + uncountable।" },
            { bn: "চেনা গুচ্ছ — the whole day / all day; the same, the internet, the rich (পুরো শ্রেণি)।", en: "The familiar chunks — the whole day / all day; the same, the internet, the rich (the whole class).", hi: "परिचित गुच्छ — the whole day / all day; the same, the internet, the rich (पूरी श्रेणी)।" },
          ],
          examples: [
            {
              wrong: "The unemployment is a serious problem.",
              right: "Unemployment is a serious problem.",
              note: {
                bn: "unemployment সাধারণ ভাবে zero; প্রবন্ধ-রিপোর্টে বারবার ফিরে আসা ভুল।",
                en: "'Unemployment' as a general idea takes zero — a recurring error in essays and reports.",
                hi: "'unemployment' सामान्य भाव में zero लेता है — निबंध-रिपोर्ट में बार-बार लौटने वाली गलती।",
              },
            },
            {
              wrong: "The number of unemployed graduates have doubled.",
              right: "The number of unemployed graduates has doubled.",
              note: {
                bn: "subject হলো the number (সংখ্যাটা), graduates নয় — তাই has; Task 1-এর মূল বাক্য-ছাঁচ।",
                en: "The subject is the number (the figure), not graduates — hence has; the core sentence mould of Task 1.",
                hi: "subject है the number (संख्या), graduates नहीं — इसलिए has; Task 1 का मूल वाक्य-साँचा।",
              },
            },
            {
              wrong: "A few of them receive any career advice, so the situation is hopeful.",
              right: "Few of them receive any career advice, so the situation is worrying.",
              note: {
                bn: "'worrying' অর্থে নেতিবাচক few — প্রায় কেউই পরামর্শ পায় না; a few হলে মেজাজ উল্টে যায়।",
                en: "The 'worrying' mood needs negative few — hardly any get advice; a few would flip the mood.",
                hi: "'worrying' भाव को निषेधात्मक few चाहिए — लगभग किसी को सलाह नहीं मिलती; a few होता तो भाव पलट जाता।",
              },
            },
            {
              wrong: "Little training can change everything — just a little hours a week.",
              right: "A little training can change everything — just a few hours a week.",
              note: {
                bn: "training uncountable → a little; hours countable → a few — এক বাক্যে দুই দলের সূক্ষ্ম বাছাই।",
                en: "'Training' is uncountable → a little; 'hours' is countable → a few — both groups picked finely inside one sentence.",
                hi: "'training' uncountable है → a little; 'hours' countable है → a few — एक ही वाक्य में दोनों समूहों की बारीक छँटाई।",
              },
            },
            {
              wrong: "Most of experts agree that education is a key to the success.",
              right: "Most experts agree that education is the key to success.",
              note: {
                bn: "most + বিশেষ্য zero; স্থায়ী বাক্যে the key to success — অনন্য উপায়ের the।",
                en: "most + noun takes zero; the fixed phrase is the key to success — the of a unique means.",
                hi: "most + संज्ञा पर zero; पक्का मुहावरा है the key to success — अद्वितीय साधन का the।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "তিন-প্রশ্ন টেস্ট: singular countable? শ্রোতা জানে কোনটা? সাধারণ ভাব? — উত্তরই a/the/zero ঠিক করে।",
          en: "The three-question test: singular countable? Does the listener know which one? A general idea? — the answers decide a/the/zero.",
          hi: "तीन-प्रश्न टेस्ट: singular countable? श्रोता जानता है कौन-सा? सामान्य भाव? — जवाब ही a/the/zero तय करता है।",
        },
        {
          bn: "প্রথমবার a/an, দ্বিতীয়বার the — গল্প-বলা আর রিপোর্ট, দুই জায়গাতেই এটাই মূল স্রোত।",
          en: "First mention a/an, second mention the — in storytelling and reports alike, this is the main current.",
          hi: "पहली बार a/an, दूसरी बार the — कहानी और रिपोर्ट दोनों में यही मुख्य धारा है।",
        },
        {
          bn: "an উচ্চারণের নিয়ম, বানানের নয়: an hour, an MBA, কিন্তু a university, a European, a one-day match।",
          en: "'An' follows sound, not spelling: an hour, an MBA, but a university, a European, a one-day match.",
          hi: "'an' उच्चारण का नियम है, वर्तनी का नहीं: an hour, an MBA, पर a university, a European, a one-day match।",
        },
        {
          bn: "প্রতিষ্ঠান-উদ্দেশ্যের তালিকা মুখস্থ: go to school/church/prison/hospital/college/bed — মূল কাজে গেলে zero, ভবন বোঝালে the।",
          en: "Memorise the institution-purpose list: go to school/church/prison/hospital/college/bed — core-function visits take zero, buildings take the.",
          hi: "संस्था-उद्देश्य की सूची रटें: go to school/church/prison/hospital/college/bed — मूल काम की यात्रा पर zero, इमारत पर the।",
        },
        {
          bn: "the-এর প্যাকেজ: the sun, the internet, the same, the only, the first, the best, the rich (শ্রেণি) — একসঙ্গে বাক্য-সারি হিসেবে মুখস্থ করুন।",
          en: "The 'the' package: the sun, the internet, the same, the only, the first, the best, the rich (the class) — memorise them together as a sentence list.",
          hi: "'the' का पैकेज: the sun, the internet, the same, the only, the first, the best, the rich (श्रेणी) — इन्हें वाक्य-सूची रूप में साथ रटें।",
        },
        {
          bn: "few/little = প্রায় নেই (হতাশা), a few/a little = কিছু আছে (তৃপ্তি) — 'a'-কে মেজাজ-সুইচ হিসেবে পড়ুন।",
          en: "few/little = hardly any (despair), a few/a little = some (contentment) — read 'a' as the mood switch.",
          hi: "few/little = लगभग नहीं (निराशा), a few/a little = कुछ है (संतोष) — 'a' को भाव-स्विच की तरह पढ़ें।",
        },
        {
          bn: "a number of + plural ক্রিয়া (বহু মানুষ), the number of + singular ক্রিয়া (সংখ্যাটা) — a/the-ই ক্রিয়া বদলে দেয়।",
          en: "a number of + plural verb (many people), the number of + singular verb (the figure) — the little a/the flips the verb.",
          hi: "a number of + plural क्रिया (बहुत लोग), the number of + singular क्रिया (संख्या) — छोटा a/the क्रिया पलट देता है।",
        },
        {
          bn: "fewer + countable (fewer cars), less + uncountable (less traffic); টাকা-দূরত্ব-সময় একক পরিমাণ হিসেবে less — less than ten dollars।",
          en: "fewer + countable (fewer cars), less + uncountable (less traffic); money, distance and time as single amounts take less — less than ten dollars.",
          hi: "fewer + countable (fewer cars), less + uncountable (less traffic); पैसा-दूरी-समय एक सामूहिक मात्रा के रूप में less लेते हैं — less than ten dollars।",
        },
        {
          bn: "much/many মূলত প্রশ্ন-অস্বীকারে আর so/too/how-এর সঙ্গে; বিবৃতিতে a lot of, আনুষ্ঠানিক লেখায় a great deal of / numerous।",
          en: "much/many belong to questions, negatives and so/too/how; statements prefer a lot of, formal writing a great deal of / numerous.",
          hi: "much/many मुख्यतः प्रश्न-निषेध और so/too/how के साथ; कथनों में a lot of, औपचारिक लेखन में a great deal of / numerous।",
        },
        {
          bn: "IELTS-এ less cars, informations, advices, the most of people — এই চারটা বন্ধুত্ব ভাঙে; বানান-শুদ্ধির পাশাপাশি পরিমাণ-শব্দও পরীক্ষা হয়।",
          en: "In IELTS, less cars, informations, advices, the most of people — these four are friendship-breakers; along with spelling, quantifiers are examined too.",
          hi: "IELTS में less cars, informations, advices, the most of people — ये चार दोस्ती तोड़ते हैं; वर्तनी के साथ क्वांटिफ़ायर भी परखे जाते हैं।",
        },
      ],
      quiz: [
        {
          question: "I saw ______ elephant at the zoo, and ______ elephant was eating bamboo.",
          options: ["a / The", "the / A", "an / An", "a / A"],
          answer: 0,
          explanation: {
            bn: "প্রথম উল্লেখ an (স্বরধ্বনি-শব্দ), দ্বিতীয় উল্লেখ the — পাঠক এখন জানে কোন হাতি।",
            en: "First mention an (vowel sound), second mention the — the reader now knows which elephant.",
            hi: "पहला उल्लेख an (स्वर-ध्वनि), दूसरा the — पाठक अब जानता है कौन-सा हाथी।",
          },
        },
        {
          question: "My son is in class five, so he goes to ______ every morning.",
          options: ["the school", "school", "a school", "schools"],
          answer: 1,
          explanation: {
            bn: "ছাত্র হয়ে পড়তে যাওয়া — প্রতিষ্ঠান-উদ্দেশ্যে zero: go to school।",
            en: "Going as a pupil to study — institution-purpose takes zero: go to school.",
            hi: "विद्यार्थी बनकर पढ़ने जाना — संस्था-उद्देश्य पर zero: go to school।",
          },
        },
        {
          question: "______ sun rises in ______ east.",
          options: ["The / the", "A / an", "The / a", "A / the"],
          answer: 0,
          explanation: {
            bn: "অনন্য বস্তু the sun; দিকের সামনে the — the east।",
            en: "Unique object takes the — the sun; directions take the — the east.",
            hi: "अद्वितीय वस्तु पर the — the sun; दिशाओं पर the — the east।",
          },
        },
        {
          question: "Hurry! We have ______ time — the bus leaves in one minute.",
          options: ["a little", "little", "a few", "few"],
          answer: 1,
          explanation: {
            bn: "time uncountable → little-পরিবার; এক মিনিট মানে প্রায় নেই — নেতিবাচক little (a ছাড়া)।",
            en: "'Time' is uncountable → the little family; one minute means hardly any — negative little (without a).",
            hi: "'time' uncountable है → little-परिवार; एक मिनट यानी लगभग कुछ नहीं — निषेधात्मक little (a के बिना)।",
          },
        },
        {
          question: "The number of applicants ______ rising every year.",
          options: ["are", "is", "have", "were"],
          answer: 1,
          explanation: {
            bn: "the number of = সংখ্যাটা — subject একক, তাই singular: is।",
            en: "'The number of' = the figure — a single subject, hence the singular: is.",
            hi: "'the number of' = संख्या — subject एकल है, इसलिए singular: is।",
          },
        },
        {
          question: "There are ______ cars on the road during the strike, so travel is easy.",
          options: ["less", "fewer", "little", "much"],
          answer: 1,
          explanation: {
            bn: "cars countable plural → fewer; less শুধু uncountable-এ (less traffic)।",
            en: "'Cars' is countable plural → fewer; less is only for uncountables (less traffic).",
            hi: "'cars' countable plural हैं → fewer; less केवल uncountable पर (less traffic)।",
          },
        },
        {
          question: "Which sentence is correct?",
          options: ["She gave me an advice.", "She gave me a few advices.", "She gave me some advice.", "She gave me many advices."],
          answer: 2,
          explanation: {
            bn: "advice uncountable — an নয়, plural -s নয়; পরিমাণ বোঝাতে some advice / a piece of advice।",
            en: "'Advice' is uncountable — no an, no plural -s; quantity is shown by some advice / a piece of advice.",
            hi: "'advice' uncountable है — an नहीं, बहुवचन -s नहीं; मात्रा के लिए some advice / a piece of advice।",
          },
        },
        {
          question: "After the robbery, he was sent to ______ for five years.",
          options: ["the prison", "a prison", "prison", "prisons"],
          answer: 2,
          explanation: {
            bn: "শাস্তি ভোগ করতে পাঠানো — বন্দি-উদ্দেশ্যে zero: sent to prison।",
            en: "Sent to serve a sentence — prisoner-purpose takes zero: sent to prison.",
            hi: "सज़ा काटने भेजा गया — बंदी-उद्देश्य पर zero: sent to prison।",
          },
        },
        {
          question: "I worked ______ without a break.",
          options: ["all day", "the whole day", "Both 'all day' and 'the whole day'", "whole the day"],
          answer: 2,
          explanation: {
            bn: "দুটোই সঠিক — all day (all-সারি) আর the whole day (whole-এর আগে the); whole the day ব্যবস্থাটাই ভুল।",
            en: "Both are correct — all day (the all-row) and the whole day (the before whole); 'whole the day' is the broken arrangement.",
            hi: "दोनों सही — all day (all-पंक्ति) और the whole day (whole से पहले the); 'whole the day' क्रम ही टूटा है।",
          },
        },
        {
          question: "We watched ______ last night and listened to ______ on the way home.",
          options: ["the television / the radio", "television / the radio", "the television / radio", "television / radio"],
          answer: 1,
          explanation: {
            bn: "মাধ্যম হিসেবে television zero (watch television), কিন্তু radio-তে the — listen to the radio।",
            en: "As a medium, television takes zero (watch television), but radio takes the — listen to the radio.",
            hi: "माध्यम के रूप में television पर zero (watch television), पर radio पर the — listen to the radio।",
          },
        },
      ],
    },
  },
];

export default SEED_GRAMMAR_V4_A3B;
