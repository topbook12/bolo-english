// ─── Learning-path grammar seeds v3: BEGINNER batch B2b (2 deep lessons) ───
// Task 9.3-W3, completed + verified in retry 9.3-W7. Owner mandate: every topic fully developed so ONE lesson can
// teach the whole topic — 8 sections per lesson (usage → formation → signal
// words → 3 topic-specific deep sections → common Bengali-speaker mistakes →
// mini story + recap), 4-5 wrong→right examples per section, 10 tips and a
// 10-question quiz. TriText = { bn, en, hi }: Bengali PRIMARY, en + hi are
// full faithful translations. English example sentences always stay English.
import type { LibraryGrammarData, LibraryLevel } from "../../src/lib/library-types";

export interface SeedGrammarV3Entry {
  topic: string;
  level: LibraryLevel;
  title: string;
  unit: number;
  data: LibraryGrammarData;
}

export const SEED_GRAMMAR_V3_B2B: SeedGrammarV3Entry[] = [
  /* ── 1. Conditionals (Beginner) ─────────────────────────────────────── */
  {
    topic: "Conditionals",
    level: "beginner",
    title: "Conditionals (Beginner)",
    unit: 0,
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
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয় — শর্ত + ফল, যদি...তাহলে",
            en: "When to use them — condition + result, jodi...tahole",
            hi: "कब इस्तेमाल करें — शर्त + परिणाम, यदि...तो",
          },
          body: {
            bn: "শর্তের বাক্যের দুটো অংশ — প্রথমে শর্ত (if-অংশ), তারপর ফল (ফলাফলের অংশ): If it rains, we will stay home — শর্ত 'বৃষ্টি হওয়া', ফল 'থাকা'। বাংলার যদি...তাহলে জোড়ার ঠিক এই জায়গা। কিন্তু সব শর্ত এক জাতের নয় — তিন রকম অবস্থা আছে: (১) সবসময় যা ঘটে — বিজ্ঞান, নিয়ম, অভ্যাস (If you heat ice, it melts); (২) বাস্তবে ঘটতে পারে এমন ভবিষ্যৎ (If you study, you will pass); (৩) এখন সত্য নয়, শুধু কল্পনা (If I had a million taka, I would buy a house)। তিন অবস্থার জন্য ইংরেজির তিন আলাদা রূপ — আর বাংলায় 'যদি...তাহলে' সবগুলোতেই প্রায় একই মেজাজে চলে। এই অভ্যাস থেকেই জন্মায় দ্বিগুণ-চিহ্নের ভুল: বাংলায় 'যদি তুমি আসবে, তাহলে আমরা শুরু করব' — দুই অংশেই ভবিষ্যৎ; ইংরেজিতে ভবিষ্যতের চিহ্ন (will) থাকতে পারে শুধু ফলাফলের অংশে, if-অংশে নয়। আজকের পাঠের মূলমন্ত্র এটাই: শর্তের অংশে সাধারণ রূপ (present বা past), ফলাফলের অংশে will/would।",
            en: "A conditional sentence has two halves — first the condition (the if-part), then the result: If it rains, we will stay home — the condition is 'raining', the result is 'staying'. This is exactly the seat of the Bengali jodi...tahole pair. But not all conditions are of one kind — there are three situations: (1) what always happens — science, rules, habits (If you heat ice, it melts); (2) a future that can really happen (If you study, you will pass); (3) something not true now, only imagined (If I had a million taka, I would buy a house). English gives each situation its own form — while Bengali 'jodi...tahole' runs on almost the same mood for all three. That habit produces the double-marking error: Bengali 'যদি তুমি আসবে, তাহলে আমরা শুরু করব' puts a future form in both halves; in English the future marker (will) may sit only in the result half, never in the if-part. That is today's mantra: plain forms (present or past) in the condition, will/would in the result.",
            hi: "Conditional वाक्य के दो हिस्से होते हैं — पहले शर्त (if-वाला हिस्सा), फिर परिणाम: If it rains, we will stay home — शर्त 'बारिश होना', परिणाम 'ठहरना'। यही बांग्ला 'যদি...তাহলে' की जोड़ी की जगह है। पर सभी शर्तें एक जैसी नहीं — तीन हालतें हैं: (1) जो हमेशा घटित होता है — विज्ञान, नियम, आदत (If you heat ice, it melts); (2) वह भविष्य जो सच में घट सकता है (If you study, you will pass); (3) जो अभी सत्य नहीं, केवल कल्पना (If I had a million taka, I would buy a house)। तीनों हालतों के लिए अंग्रेज़ी के तीन अलग रूप हैं — जबकि बांग्ला 'যদি...তাহলে' तीनों में लगभग एक ही मनोदशा में चलता है। इसी आदत से दोहरे-चिह्न की गलती बनती है: बांग्ला 'যদি তুমি আসবে, তাহলে আমরা শুরু করব' — दोनों हिस्सों में भविष्य; अंग्रेज़ी में भविष्य का चिह्न (will) केवल परिणाम वाले हिस्से में बैठ सकता है, if-वाले हिस्से में नहीं। आज का मूल मंत्र यही है: शर्त में साधारण रूप (present या past), परिणाम में will/would.",
          },
          examples: [
            {
              wrong: "If you will come tomorrow, we will start the project.",
              right: "If you come tomorrow, we will start the project.",
              note: {
                bn: "বাংলা 'যদি তুমি আসবে...শুরু করব' — দুই ভবিষ্যৎ; ইংরেজি নিয়ম: if-অংশে বর্তমান (come), ফলে will।",
                en: "The Bengali 'jodi tumi ashbe...shuru korbo' has two futures; the English rule: present (come) in the if-part, will in the result.",
                hi: "बांग्ला 'যদি তুমি আসবে...শুরু করব' — दो भविष्य; नियम: if-भाग में present (come), परिणाम में will।",
              },
            },
            {
              wrong: "If he will call me, I will tell him the news.",
              right: "If he calls me, I will tell him the news.",
              note: {
                bn: "will একবারই — ফলাফলের অংশে; শর্তে সে যা করে তার সাধারণ রূপ calls।",
                en: "Only one will — in the result half; the condition takes the plain form calls.",
                hi: "will एक ही बार — परिणाम में; शर्त में साधारण रूप calls।",
              },
            },
            {
              wrong: "If it rains tomorrow, we stayed home.",
              right: "If it rains tomorrow, we will stay home.",
              note: {
                bn: "শর্ত ভবিষ্যতের (tomorrow) — ফলও ভবিষ্যতে will stay; stayed অতীতের রূপ, এখানে আসে না।",
                en: "The condition is future (tomorrow) — so the result is future too: will stay; the past form stayed cannot sit here.",
                hi: "शर्त भविष्य की (tomorrow) — परिणाम भी भविष्य में will stay; stayed अतीत है, यहाँ नहीं चलेगा।",
              },
            },
            {
              wrong: "If you heat water, it boiled.",
              right: "If you heat water, it boils.",
              note: {
                bn: "চিরন্তন সত্য — দুই অংশেই বর্তমান; boiled অতীতে গেলে 'সবসময় সত্য' ভাবটাই মিলিয়ে যায়।",
                en: "A timeless truth — present in both halves; sending the result to boiled (past) kills the 'always true' meaning.",
                hi: "सदा सत्य — दोनों भागों में present; boiled अतीत चला जाए तो 'हमेशा सत्य' भाव ही मिट जाता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "গঠন — তিন ধরনের শর্ত, তিন সূত্র",
            en: "Formation — three conditionals, three formulas",
            hi: "बनावट — तीन प्रकार, तीन सूत्र",
          },
          body: {
            bn: "Type 0-এর সূত্র: If + present, present — If you heat ice, it melts; দুই অংশেই present simple, কারণ কথাটা সবসময় সত্য। Type 1-এর সূত্র: If + present, will + V1 — If you study, you will pass; শর্তের অংশে present বসলেও অর্থ ভবিষ্যতের — ইংরেজির কড়া নিয়ম এটাই। Type 2-এর সূত্র: If + past রূপ (V2), would + V1 — If I had a bike, I would ride to college; ক্রিয়া অতীত রূপে গেলেও অর্থ বর্তমানের — এখন সত্য নয় বলেই অতীত রূপ বসে, এটা ইংরেজির মজার খেলা। ফলাফলের অংশ will/would-এর সঙ্গে V1 থাকে — never will goes, never would went। কমার নিয়ম: if-অংশ বাক্যের শুরুতে হলে শর্ত শেষে কমা — If it rains, we will stay home; ফলাফলের অংশ আগে হলে কমা লাগে না — We will stay home if it rains। মনে রাখার সহজ কৌশল: if দিয়ে শুরু হলে মাঝে কমা, মাঝে if হলে কমা নেই।",
            en: "Type 0 formula: If + present, present — If you heat ice, it melts; present simple in both halves, because the statement is always true. Type 1 formula: If + present, will + V1 — If you study, you will pass; the condition half sits in the present even though the meaning is future — that is English's strict rule. Type 2 formula: If + past form (V2), would + V1 — If I had a bike, I would ride to college; the verb wears its past form while the meaning stays in the present — the past form appears precisely because it is not true now, a curious game of English. The result half keeps V1 after will/would — never will goes, never would went. Comma rule: when the if-part opens the sentence, put a comma at the end of the condition — If it rains, we will stay home; when the result half comes first, no comma — We will stay home if it rains. Easy memory trick: sentence starts with if — comma in the middle; if sits in the middle — no comma.",
            hi: "Type 0 का सूत्र: If + present, present — If you heat ice, it melts; दोनों हिस्सों में present simple, क्योंकि बात सदा सत्य है। Type 1 का सूत्र: If + present, will + V1 — If you study, you will pass; शर्त के हिस्से में present बैठता है हालाँकि अर्थ भविष्य का है — यही अंग्रेज़ी का कड़ा नियम है। Type 2 का सूत्र: If + past रूप (V2), would + V1 — If I had a bike, I would ride to college; क्रिया अतीत रूप में जाती है पर अर्थ वर्तमान का रहता है — अभी सत्य न होने के कारण ही अतीत रूप बैठता है, अंग्रेज़ी का मज़ेदार खेल। परिणाम में will/would के साथ V1 रहता है — कभी will goes नहीं, कभी would went नहीं। कॉमा नियम: if-भाग वाक्य की शुरुआत में हो तो शर्त के अंत में कॉमा — If it rains, we will stay home; परिणाम पहले हो तो कॉमा नहीं — We will stay home if it rains. आसान तरकीब: if से शुरू हो तो बीच में कॉमा, बीच में if हो तो कॉमा नहीं।",
          },
          examples: [
            {
              wrong: "If you study hard you will pass the exam.",
              right: "If you study hard, you will pass the exam.",
              note: {
                bn: "if-অংশ শুরুতে — শর্তটা শেষ হলেই কমা; কমা ছাড়া বাক্য দুই অংশের সীমানা হারিয়ে ফেলে।",
                en: "The if-part opens the sentence — a comma closes the condition; without it the two halves lose their boundary.",
                hi: "if-भाग शुरुआत में — शर्त खत्म होते ही कॉमा; कॉमा के बिना दोनों हिस्सों की सीमा मिट जाती है।",
              },
            },
            {
              wrong: "We will stay home, if it rains.",
              right: "We will stay home if it rains.",
              note: {
                bn: "ফল আগে, if মাঝে — তখন কমা নেই; মনে রাখুন: if মাঝে হলে কমা পড়েই না।",
                en: "Result first, if in the middle — then no comma; remember: if in the middle, no comma at all.",
                hi: "परिणाम पहले, if बीच में — तब कॉमा नहीं; याद रखें: if बीच में हो तो कॉमा नहीं।",
              },
            },
            {
              wrong: "If I had a million taka, I will buy a house.",
              right: "If I had a million taka, I would buy a house.",
              note: {
                bn: "শর্তে had (past রূপ) হলে ফলে would — জোড়া মিলাতে হয়: had...would, নয়তো মিশ্র বাক্য।",
                en: "With had (past form) in the condition, the result takes would — the pair must match: had...would, not a mixed sentence.",
                hi: "शर्त में had (past रूप) हो तो परिणाम में would — जोड़ी मिलानी होगी: had...would, नहीं तो मिश्रित वाक्य।",
              },
            },
            {
              wrong: "If she was the captain, she will change the plan.",
              right: "If she were the captain, she would change the plan.",
              note: {
                bn: "এখনকার কল্পনা — দুই অংশ মেলান: were...would; will-এর সঙ্গে মিশলে Type 2-এর অর্থই নষ্ট।",
                en: "An unreal-now condition — match the halves: were...would; mixing in will spoils the Type 2 meaning.",
                hi: "अभी की कल्पना — दोनों भाग मिलाएँ: were...would; will मिला देने से Type 2 का अर्थ ही बिगड़ जाता है।",
              },
            },
            {
              wrong: "If water boils, it turn into steam.",
              right: "If water boils, it turns into steam.",
              note: {
                bn: "Type 0 দুই অংশেই present simple — water = it, তাই ক্রিয়ায় s: turns।",
                en: "Type 0 keeps present simple in both halves — water = it, so the verb takes s: turns.",
                hi: "Type 0 दोनों भागों में present simple — water = it, इसलिए क्रिया में s: turns।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "আভাস শব্দ — কোন ধরনটা, বুঝবেন যেভাবে",
            en: "Signal words — how to tell the types apart",
            hi: "संकेत शब्द — प्रकार पहचानने का तरीका",
          },
          body: {
            bn: "তিনটের ভেতরে কোনটা — এটা ঠিক করার সংকেত: Type 0-এর আভাস: always, every time, never, generally — আর বিজ্ঞান বা নিয়মের কথা: If you press this button, the fan turns on; অনেক সময় if-এর জায়গায় when-ও বসে, অর্থ এক। Type 1-এর আভাস: tomorrow, tonight, next week, later, probably, maybe — বাস্তব প্ল্যান আর সম্ভাবনা: If it rains tomorrow, we will cancel the picnic। Type 2-এর আভাস: if I were you, imagine, suppose — আর 'এখন আসলে নেই' এমন অবস্থা: টাকা নেই, গাড়ি নেই, সময় নেই — তবু কল্পনা করছেন: If I had more time, I would learn the guitar। নিজেকে একটাই প্রশ্ন করুন — এই শর্ত কি সত্যিই ঘটতে পারে? ঘটতে পারলে Type 1; সবসময় ঘটে থাকলে Type 0; এখন সত্য নয়, শুধু মনের খেলা হলে Type 2। প্রশ্নটা ঠিক থাকলে রূপ আপনিই ঠিক হয়ে যাবে।",
            en: "Signals decide which of the three you need: Type 0 signals: always, every time, never, generally — and talk of science or rules: If you press this button, the fan turns on; very often when sits where if could, with the same meaning. Type 1 signals: tomorrow, tonight, next week, later, probably, maybe — real plans and possibilities: If it rains tomorrow, we will cancel the picnic. Type 2 signals: if I were you, imagine, suppose — and states that are 'actually not there now': no money, no car, no time — yet you are imagining: If I had more time, I would learn the guitar. Ask yourself just one question — can this condition really happen? If it can, Type 1; if it always happens, Type 0; if it is not true now and only a mind-game, Type 2. Once the question is answered, the form picks itself.",
            hi: "तीन में से कौन-सा — यह तय करने के संकेत: Type 0 के संकेत: always, every time, never, generally — और विज्ञान या नियम की बात: If you press this button, the fan turns on; कई बार if की जगह when भी बैठ जाता है, अर्थ एक। Type 1 के संकेत: tomorrow, tonight, next week, later, probably, maybe — वास्तविक योजना और संभावना: If it rains tomorrow, we will cancel the picnic। Type 2 के संकेत: if I were you, imagine, suppose — और 'अभी वास्तव में नहीं' वाली स्थिति: पैसे नहीं, गाड़ी नहीं, समय नहीं — फिर भी कल्पना कर रहे हैं: If I had more time, I would learn the guitar। खुद से एक ही सवाल पूछें — क्या यह शर्त सच में घट सकती है? घट सकती है तो Type 1; हमेशा घटती हो तो Type 0; अभी सत्य नहीं, केवल मन का खेल हो तो Type 2। सवाल सही हुआ तो रूप अपने-आप सही हो जाएगा।",
          },
          examples: [
            {
              wrong: "If it rains tomorrow, we would cancel the match.",
              right: "If it rains tomorrow, we will cancel the match.",
              note: {
                bn: "tomorrow = বাস্তব সম্ভাবনা → Type 1 → ফলে will; would শুধু কল্পনার জগতের।",
                en: "'Tomorrow' means a real possibility — Type 1 — so will in the result; would belongs to the world of imagination.",
                hi: "'tomorrow' = वास्तविक संभावना → Type 1 → परिणाम में will; would केवल कल्पना की दुनिया में।",
              },
            },
            {
              wrong: "If I have time tonight, I watched the movie.",
              right: "If I have time tonight, I will watch the movie.",
              note: {
                bn: "tonight = বাস্তব ভবিষ্যৎ → Type 1 → ফলে will watch; watched অতীত, বাক্যের সময়ের সঙ্গে যায় না।",
                en: "'Tonight' is a real future — Type 1 — so will watch; watched is past and cannot join this sentence's time.",
                hi: "'tonight' = वास्तविक भविष्य → Type 1 → परिणाम में will watch; watched अतीत है, वाक्य के समय से मेल नहीं खाता।",
              },
            },
            {
              wrong: "If I am the captain, I would change the batting order.",
              right: "If I were the captain, I would change the batting order.",
              note: {
                bn: "আমি ক্যাপ্টেন নই — কল্পনা → Type 2: were...would; অসম্ভব শর্তের সংকেতই এই জোড়া।",
                en: "I am not the captain — imagination → Type 2: were...would; that pair is itself the signal of an unreal condition.",
                hi: "मैं कप्तान नहीं हूँ — कल्पना → Type 2: were...would; असंभव शर्त का संकेत ही यह जोड़ी है।",
              },
            },
            {
              wrong: "If you mix red and blue, you got purple.",
              right: "If you mix red and blue, you get purple.",
              note: {
                bn: "রং-মিশ্রণ সবসময় সত্য → Type 0 → দুই অংশেই present: mix...get।",
                en: "Mixing colours is always true → Type 0 → present in both halves: mix...get.",
                hi: "रंग मिलाना सदा सत्य → Type 0 → दोनों भागों में present: mix...get.",
              },
            },
          ],
        },
        {
          heading: {
            bn: "Type 0 — সবসময় সত্য: বিজ্ঞান, নিয়ম, অভ্যাস",
            en: "Type 0 — always true: science, rules, habits",
            hi: "Type 0 — सदा सत्य: विज्ञान, नियम, आदत",
          },
          body: {
            bn: "Type 0 বলে এমন শর্ত যেখানে শর্ত পূরণ হলেই ফল সবসময় আসে — আগেও আসত, আগামীকালও আসবে: If you heat ice, it melts; If plants don't get water, they die; If babies are hungry, they cry। গঠন সবচেয়ে সহজ — দুই অংশেই present simple, he/she/it-এ ক্রিয়ায় s, নেগেটিভে don't/doesn't। বাংলার 'হলে' এখানে হুবহু বসে: 'বরফ গরম করলে গলে যায়' — বাংলাও দুই অংশেই বর্তমান, তাই এই ধরনে ভুল কম। একটা বোনাস: এই ধরনে if-এর জায়গায় when-ও চলে, অর্থ প্রায় এক — When you heat ice, it melts; কারণ সত্যিটা ঘটতেই ঘটতেই ঘটে, শর্ত নামের দরকারই পড়ে না। ব্যবহারের জায়গা: বিজ্ঞানের কথা, মেশিনের নিয়ম, নিজের অভ্যাসের ফল — If I drink tea at night, I don't sleep well।",
            en: "Type 0 covers conditions where the result always follows — it followed before and will follow tomorrow: If you heat ice, it melts; If plants don't get water, they die; If babies are hungry, they cry. The formation is the easiest — present simple in both halves, s on he/she/it verbs, don't/doesn't in negatives. Bengali 'hole' fits exactly here: 'বরফ গরম করলে গলে যায়' — Bengali too keeps the present in both halves, so this type produces the fewest errors. One bonus: in this type when can sit where if sits, meaning nearly the same — When you heat ice, it melts; because the truth keeps happening, it hardly needs the name of a condition. Where you use it: science talk, machine rules, the fruits of your own habits — If I drink tea at night, I don't sleep well.",
            hi: "Type 0 वे शर्तें बताता है जहाँ शर्त पूरी होते ही परिणाम सदा आता है — पहले भी आता था, कल भी आएगा: If you heat ice, it melts; If plants don't get water, they die; If babies are hungry, they cry। बनावट सबसे आसान — दोनों हिस्सों में present simple, he/she/it पर क्रिया में s, निषेध में don't/doesn't। बांग्ला 'হলে' यहाँ हूबहू बैठता है: 'বরফ গরম করলে গলে যায়' — बांग्ला भी दोनों हिस्सों में present रखता है, इसलिए इस प्रकार में गलती कम। एक बोनस: इस प्रकार में if की जगह when भी चलता है, अर्थ लगभग एक — When you heat ice, it melts; क्योंकि सत्य घटित ही होता रहता है, शर्त का नाम भी दरकार नहीं पड़ता। इस्तेमाल की जगह: विज्ञान की बात, मशीन के नियम, अपनी आदतों का परिणाम — If I drink tea at night, I don't sleep well।",
          },
          examples: [
            {
              wrong: "If you will heat ice, it melts.",
              right: "If you heat ice, it melts.",
              note: {
                bn: "Type 0-তেও নিয়ম এক — if-অংশে will নয়, সাধারণ present: heat।",
                en: "Even in Type 0 the rule holds — no will in the if-part, plain present: heat.",
                hi: "Type 0 में भी नियम वही — if-भाग में will नहीं, साधारण present: heat।",
              },
            },
            {
              wrong: "If my father have time, he cooks dinner himself.",
              right: "If my father has time, he cooks dinner himself.",
              note: {
                bn: "দুই অংশেই present — আর my father = he, তাই has; Type 0-তেও s-চিহ্ন খুঁটিয়ে রাখতে হয়।",
                en: "Both halves stay present — and my father = he, so has; even Type 0 demands careful s-marks.",
                hi: "दोनों भाग present में — और my father = he, इसलिए has; Type 0 में भी s-चिह्न का ध्यान रखना पड़ता है।",
              },
            },
            {
              wrong: "If plants don't get water, they died.",
              right: "If plants don't get water, they die.",
              note: {
                bn: "চিরন্তন ফল — die; died হলে বক্তব্য দাঁড়ায় 'অতীতে মারা গিয়েছিল', নিয়মটা হারিয়ে যায়।",
                en: "The timeless fruit — die; with died the claim becomes 'died in the past', and the rule is lost.",
                hi: "सदा-स्थायी परिणाम — die; died कर देने से बात बन जाती है 'अतीत में मर गए', नियम खो जाता है।",
              },
            },
            {
              wrong: "If babies is hungry, they cry.",
              right: "If babies are hungry, they cry.",
              note: {
                bn: "বহুবচন babies → are; Type 0-এর শর্ত-অংশেও be-verb মেলাতে হয়।",
                en: "Plural babies → are; even the condition half of Type 0 needs its be-verb matched.",
                hi: "बहुवचन babies → are; Type 0 के शर्त-भाग में भी be-verb मिलाना ज़रूरी।",
              },
            },
            {
              wrong: "If I will drink tea at night, I don't sleep well.",
              right: "If I drink tea at night, I don't sleep well.",
              note: {
                bn: "নিজের অভ্যাসের ফলও Type 0 — শর্তে present (drink), ফলে present (don't sleep); will-এর দরকার নেই।",
                en: "The fruit of your own habit is Type 0 too — present in the condition (drink), present in the result (don't sleep); no will needed.",
                hi: "अपनी आदत का परिणाम भी Type 0 — शर्त में present (drink), परिणाम में present (don't sleep); will की दरकार नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "Type 1 — বাস্তব ভবিষ্যৎ: শর্তে present, ফলে will",
            en: "Type 1 — real future: present in the condition, will in the result",
            hi: "Type 1 — वास्तविक भविष्य: शर्त में present, परिणाम में will",
          },
          body: {
            bn: "Type 1 বলে এমন শর্ত যা সত্যিই ঘটতে পারে — আজ, কাল, সপ্তাহে: If you study, you will pass; If it rains, we will stay home; If she doesn't hurry, she will miss the bus। গঠন: if-অংশে present simple (এমনকি অর্থ ভবিষ্যতের হলেও), ফলে will + V1। এখানেই বাঙালি শিক্ষার্থীদের ১ নম্বর ভুল — if-অংশে will ঢোকানো: 'যদি তুমি পড়বে...পাস করবে' শুনে If you will study লিখে ফেলেন; মনে রাখুন — ইংরেজিতে শর্তের ভবিষ্যৎ বোঝায় বর্তমান কাল। ফলাফলের অংশে সবসময় will লাগবে না — can/may-ও চলে: If you finish early, you can watch TV; নির্দেশ-অনুরোধে ফলটা হয় তো খালি আদেশ: If Rima comes, tell her to call me। আরেকটা মনে রাখার বিন্দু: নেগেটিভ শর্তে don't/doesn't — If he doesn't call, I will ask Mina।",
            en: "Type 1 covers conditions that can really happen — today, tomorrow, this week: If you study, you will pass; If it rains, we will stay home; If she doesn't hurry, she will miss the bus. Formation: present simple in the if-part (even though the meaning is future), will + V1 in the result. Here sits the number-one Bengali-speaker error — pushing will into the if-part: hearing 'যদি তুমি পড়বে...পাস করবে', learners write If you will study; remember — in English the condition's future is shown by the present tense. The result half does not always need will — can/may work too: If you finish early, you can watch TV; for instructions the result may be a bare command: If Rima comes, tell her to call me. One more point: negatives in the condition take don't/doesn't — If he doesn't call, I will ask Mina.",
            hi: "Type 1 वे शर्तें बताता है जो सच में घट सकती हैं — आज, कल, इस हफ़्ते: If you study, you will pass; If it rains, we will stay home; If she doesn't hurry, she will miss the bus। बनावट: if-भाग में present simple (अर्थ भविष्य का होने पर भी), परिणाम में will + V1। यहीं बांग्लाभाषी छात्रों की नंबर-एक गलती — if-भाग में will घुसाना: 'যদি তুমি পড়বে...পাস করবে' सुनकर If you will study लिख देते हैं; याद रखें — अंग्रेज़ी में शर्त का भविष्य present काल से बताया जाता है। परिणाम के हिस्से में हमेशा will ज़रूरी नहीं — can/may भी चलते हैं: If you finish early, you can watch TV; निर्देश-निवेदन में परिणाम खाली आदेश भी हो सकता है: If Rima comes, tell her to call me। एक और बिंदु: शर्त के निषेध में don't/doesn't — If he doesn't call, I will ask Mina।",
          },
          examples: [
            {
              wrong: "If she will pass the exam, her father will buy her a phone.",
              right: "If she passes the exam, her father will buy her a phone.",
              note: {
                bn: "দুই will-এর প্রলোভন — শর্ত passes (present), ফল will buy; will এক বাক্যে একবারই।",
                en: "Resist the pull of two wills — condition passes (present), result will buy; will appears once per sentence.",
                hi: "दो will के लोभ से बचें — शर्त passes (present), परिणाम will buy; will एक वाक्य में एक बार ही।",
              },
            },
            {
              wrong: "If you not hurry, you will miss the bus.",
              right: "If you don't hurry, you will miss the bus.",
              note: {
                bn: "শর্তের নেগেটিভ present-এ don't/doesn't + V1 — don't hurry; will-এর জায়গা শুধু ফলে।",
                en: "The condition's negative takes don't/doesn't + V1 — don't hurry; will's seat is only in the result.",
                hi: "शर्त का निषेध don't/doesn't + V1 लेता है — don't hurry; will की जगह केवल परिणाम में।",
              },
            },
            {
              wrong: "If the rain stops, we will going to the field.",
              right: "If the rain stops, we will go to the field.",
              note: {
                bn: "will-এর পরে V1 — will go; will going-এর মতো জোড়া ইংরেজিতে নেই।",
                en: "After will comes V1 — will go; no pairing like 'will going' exists in English.",
                hi: "will के बाद V1 — will go; 'will going' जैसी जोड़ी अंग्रेज़ी में नहीं।",
              },
            },
            {
              wrong: "If Rima will come, please tell her to call me.",
              right: "If Rima comes, please tell her to call me.",
              note: {
                bn: "ফল আদেশ হলেও নিয়ম এক — শর্ত present (comes); আদেশ বসে ফলাফলের চেয়ারে।",
                en: "Even when the result is an order, the rule holds — condition in the present (comes); the command sits in the result's chair.",
                hi: "परिणाम आदेश होने पर भी नियम वही — शर्त present (comes); आदेश परिणाम की कुर्सी पर बैठता है।",
              },
            },
            {
              wrong: "We will start the match if the ground will be dry.",
              right: "We will start the match if the ground is dry.",
              note: {
                bn: "if মাঝে হলেও if-অংশের ভেতরে ভবিষ্যৎ ঢোকে না — is; will be বাদ।",
                en: "Even with if in the middle, no future enters the if-part — is; drop will be.",
                hi: "if बीच में होने पर भी if-भाग में भविष्य नहीं घुसता — is; will be हटाइए।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "Type 2 — এখনকার কল্পনা: শর্তে past রূপ, ফলে would",
            en: "Type 2 — unreal now: past form in the condition, would in the result",
            hi: "Type 2 — अभी की कल्पना: शर्त में past रूप, परिणाम में would",
          },
          body: {
            bn: "Type 2 বলে এমন শর্ত যা এখন সত্য নয় — স্বপ্ন, আক্ষেপ, মনের খেলা: If I had a million taka, I would open a library; If I had wings, I would fly to Cox's Bazar। গঠন: if-অংশে ক্রিয়ার past রূপ (V2), ফলে would + V1। সবচেয়ে গুরুত্বপূর্ণ কথা — past রূপ বসলেও অর্থ অতীতের নয়, বর্তমানের: 'যদি আমার গাড়ি থাকত' মানে গাড়িটা এখন নেই। বাংলায় কল্পনার চিহ্ন ক্রিয়ার -ত: থাকত, কিনতাম, করতাম — ইংরেজির past রূপ ঠিক ওই -ত-এর চেয়ারে বসে। বিশেষ নিয়ম: If I were you — কল্পনার জগতে সব কর্তার সঙ্গে were: If I were you, I would say sorry first; If he were taller, he would join the army। নেগেটিভ: If I didn't have exams, I would join the tour। আর জোড়া মিলাতে ভুলবেন না: had...would, didn't...wouldn't।",
            en: "Type 2 covers conditions that are not true now — dreams, regrets, mind-games: If I had a million taka, I would open a library; If I had wings, I would fly to Cox's Bazar. Formation: the past form (V2) in the if-part, would + V1 in the result. The most important point — although the verb wears its past form, the meaning is not past but present: 'যদি আমার গাড়ি থাকত' means the car is not here now. Bengali marks imagination with the -t ending on the verb: thakto, kintam, kortam — English's past form sits exactly in that chair. Special rule: If I were you — in the imagined world every subject takes were: If I were you, I would say sorry first; If he were taller, he would join the army. Negatives: If I didn't have exams, I would join the tour. And do not forget to match the pair: had...would, didn't...wouldn't.",
            hi: "Type 2 वे शर्तें बताता है जो अभी सत्य नहीं — सपने, अफ़सोस, मन का खेल: If I had a million taka, I would open a library; If I had wings, I would fly to Cox's Bazar। बनावट: if-भाग में क्रिया का past रूप (V2), परिणाम में would + V1। सबसे ज़रूरी बात — क्रिया past रूप में जाती है पर अर्थ अतीत का नहीं, वर्तमान का होता है: 'যদি আমার গাড়ি থাকত' का मतलब गाड़ी अभी नहीं है। बांग्ला में कल्पना का चिह्न क्रिया का -त है: থাকত, কিনতাম, করতাম — अंग्रेज़ी का past रूप ठीक उसी की कुर्सी पर बैठता है। विशेष नियम: If I were you — कल्पना की दुनिया में हर कर्ता के साथ were: If I were you, I would say sorry first; If he were taller, he would join the army। निषेध: If I didn't have exams, I would join the tour। और जोड़ी मिलाना न भूलें: had...would, didn't...wouldn't.",
          },
          examples: [
            {
              wrong: "If I have a million taka, I would open a library.",
              right: "If I had a million taka, I would open a library.",
              note: {
                bn: "কোটি টাকা এখন নেই — কল্পনা → Type 2; শর্তে had, ফলে would — জোড়া মিলল।",
                en: "You do not have a million taka now — imagination → Type 2; had in the condition, would in the result — the pair matches.",
                hi: "करोड़ टाका अभी नहीं है — कल्पना → Type 2; शर्त में had, परिणाम में would — जोड़ी मिल गई।",
              },
            },
            {
              wrong: "If I was you, I would apologise first.",
              right: "If I were you, I would apologise first.",
              note: {
                bn: "If I were you মুখস্থ জোড়া — কল্পনার জগতে was নয়, were; এই একটা বাক্য মুখস্থ থাকলেই অর্ধেক ভুল বন্ধ।",
                en: "'If I were you' is a set pair — in the imagined world not was but were; memorising this one sentence stops half the errors.",
                hi: "'If I were you' एक पक्की जोड़ी है — कल्पना की दुनिया में was नहीं, were; यह एक वाक्य रट लेने से आधी गलतियाँ रुक जाती हैं।",
              },
            },
            {
              wrong: "If he know her number, he would call her now.",
              right: "If he knew her number, he would call her now.",
              note: {
                bn: "নম্বরটা জানে না — কল্পনা → শর্তে past রূপ knew; know থাকলে Type 1-এর ছায়া পড়ে অর্থ বদলে যায়।",
                en: "He does not know the number — imagination → past form knew; with know the sentence drifts toward Type 1 and the meaning shifts.",
                hi: "नंबर जानता नहीं — कल्पना → शर्त में past रूप knew; know रहने पर वाक्य Type 1 की ओर झुककर अर्थ बदल देता है।",
              },
            },
            {
              wrong: "If we lived in Dhaka, we don't spend so much on the bus.",
              right: "If we lived in Dhaka, we wouldn't spend so much on the bus.",
              note: {
                bn: "ঢাকায় থাকি না — কল্পনার ফলে would-পরিবার: wouldn't spend; don't spend Type 0-এর চেয়ার।",
                en: "You do not live in Dhaka — the imagined result takes the would-family: wouldn't spend; don't spend belongs to Type 0's chair.",
                hi: "ঢাকায় नहीं रहते — कल्पना का परिणाम would-परिवार लेता है: wouldn't spend; don't spend Type 0 की कुर्सी है।",
              },
            },
            {
              wrong: "If I had wings, I will fly to Cox's Bazar.",
              right: "If I had wings, I would fly to Cox's Bazar.",
              note: {
                bn: "ডানা নেই — কল্পনার ফল will নয়, would; had-এর জুটি সবসময় would।",
                en: "You have no wings — the imagined result takes not will but would; the partner of had is always would.",
                hi: "पंख नहीं हैं — कल्पना का परिणाम will नहीं, would; had का जोड़ीदार सदा would।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "Common mistakes by Bengali speakers",
            hi: "बांग्लाभाषी छात्रों की आम गलतियाँ",
          },
          body: {
            bn: "নিচের ভুলগুলো আমাদের ক্লাসরুমে, চ্যাটে, ইন্টারভিউতে সবচেয়ে বেশি দেখা যায় — আর প্রতিটার পেছনে বাংলা 'যদি...তাহলে'-এর একটা অভ্যাস কাজ করছে: দুই অংশেই সময়ের রূপ বসিয়ে দেওয়া, বা কল্পনা-বাস্তবের সীমানা মিশিয়ে ফেলা। দোষ আপনার নয়, দুই ভাষার প্যাটার্নের ফারাকের; তাই ভুলটা বাংলা বাক্যটা চিনে ধরুন, তারপর ডানের ঠিক বাক্যটা জোরে তিনবার বলে নিন — কানে গেঁথে গেলেই বলার সময় আর ভুল বেরোয় না।",
            en: "The mistakes below are the most common in our classrooms, chats and interviews — and behind every one sits a Bengali 'jodi...tahole' habit: putting a time form in both halves, or blurring the border between imagination and reality. The fault is not yours; it is the gap between two languages' patterns. Catch the Bengali sentence behind each error, then say the correct sentence on the right aloud three times — once it is rooted in the ear, it stops coming out wrong.",
            hi: "नीचे की गलतियाँ हमारे क्लासरूम, चैट और इंटरव्यू में सबसे ज़्यादा दिखती हैं — और हर एक के पीछे बांग्ला 'যদি...তাহলে' की एक आदत काम करती है: दोनों हिस्सों में समय का रूप बिठा देना, या कल्पना-वास्तव की सीमा मिला देना। दोष आपका नहीं, दोनों भाषाओं के पैटर्न का फ़र्क़ है; हर गलती के पीछे का बांग्ला वाक्य पकड़ें, फिर दाईं ओर का सही वाक्य तीन बार ज़ोर से बोलें — कान में बैठ गया तो बोलते समय गलती निकलेगी ही नहीं।",
          },
          examples: [
            {
              wrong: "If I will go to Dhaka next week, I will visit Lalbagh.",
              right: "If I go to Dhaka next week, I will visit Lalbagh.",
              note: {
                bn: "বাংলা 'যদি যাব...দেখব' — দুই ভবিষ্যৎ; ইংরেজিতে ভবিষ্যৎ একবার, ফলের অংশে: will visit।",
                en: "Bengali 'jodi jabo...dekhbo' has two futures; English allows the future once, in the result half: will visit.",
                hi: "बांग्ला 'যদি যাব...দেখব' — दो भविष्य; अंग्रेज़ी में भविष्य एक बार, परिणाम में: will visit।",
              },
            },
            {
              wrong: "If I would have more time, I would learn the guitar.",
              right: "If I had more time, I would learn the guitar.",
              note: {
                bn: "if-অংশে would ঢোকে না — শর্তে past রূপ had; would-এর সিংহাসন ফলের অংশে।",
                en: "No would enters the if-part — the condition takes the past form had; would's throne is in the result half.",
                hi: "if-भाग में would नहीं घुसता — शर्त में past रूप had; would का सिंहासन परिणाम में।",
              },
            },
            {
              wrong: "If she was the manager, she will change the office timings.",
              right: "If she were the manager, she would change the office timings.",
              note: {
                bn: "সে ম্যানেজার নন — কল্পনা; মিশ্র বাক্য দুই জগতের টানাপোড়েন — were...would মিলিয়ে নিন।",
                en: "She is not the manager — imagination; a mixed sentence is a tug-of-war between two worlds — match were...would.",
                hi: "वे मैनेजर नहीं हैं — कल्पना; मिश्रित वाक्य दो दुनिया का रस्साकशी है — were...would मिला लें।",
              },
            },
            {
              wrong: "If he don't call me tonight, I will ask Mina.",
              right: "If he doesn't call me tonight, I will ask Mina.",
              note: {
                bn: "শর্ত present simple-এ চলে — he → doesn't; Type 1-এর ভেতরেও don't/doesn't-এর ভাগ মানতে হয়।",
                en: "The condition runs on present simple — he → doesn't; even inside Type 1 the don't/doesn't split must be honoured.",
                hi: "शर्त present simple में चलती है — he → doesn't; Type 1 के भीतर भी don't/doesn't का विभाजन मानना होगा।",
              },
            },
            {
              wrong: "If it rains today, we wouldn't play.",
              right: "If it rains today, we won't play.",
              note: {
                bn: "শর্ত present (rains) মানে Type 1 — ফলে will-পরিবার: won't; wouldn't শুধু past-রূপ শর্তের জুটি।",
                en: "A present condition (rains) means Type 1 — the result takes the will-family: won't; wouldn't pairs only with a past-form condition.",
                hi: "शर्त present (rains) है तो Type 1 — परिणाम will-परिवार: won't; wouldn't केवल past-रूप शर्त का जोड़ीदार।",
              },
            },
            {
              wrong: "If I am a bird, I would fly away.",
              right: "If I were a bird, I would fly away.",
              note: {
                bn: "পাখি তো নন — কল্পনা → were...would; 'If I am' শুনলেই বুঝবেন Type 2 ভেঙে পড়েছে।",
                en: "You are no bird — imagination → were...would; the moment you hear 'If I am', you know Type 2 has collapsed.",
                hi: "आप पक्षी नहीं — कल्पना → were...would; 'If I am' सुनते ही समझिए Type 2 टूट गया।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "ছোট গল্পে দেখা যাক",
            en: "See it in a mini story",
            hi: "एक छोटी कहानी में देखें",
          },
          body: {
            bn: "রিমা আর ইমরান স্কুলের পিকনিক নিয়ে কথা বলছে। ইমরান বলে, 'If it rains tomorrow, we will move the picnic to Friday.' রিমা দীর্ঘশ্বাস ফেলে বলে, 'Good plan, but I have an exam on Friday. If I miss it, my mother will be angry — and if I were the headmistress, I would cancel exams forever!' ইমরান হাসে, 'You always dream big. If I get time tonight, I will make a new plan on paper.' রিমা হেসে বলে, 'Do that. And remember — if the bus doesn't come by eight, we will walk to the market.' খেয়াল করুন — বাস্তব প্ল্যানে Type 1 (rains...will move, get...will make, doesn't come...will walk), আর হেডমিস্ট্রেস হওয়ার স্বপ্নে Type 2 (were...would cancel)। এক নজরে — তিন শর্ত: (১) Type 0 = সবসময় সত্য, দুই অংশেই present — If you heat ice, it melts; (২) Type 1 = বাস্তব ভবিষ্যৎ, if+present → will+V1 — If it rains, we will stay home; (৩) Type 2 = এখনকার কল্পনা, if+past রূপ → would+V1 — If I had wings, I would fly; if-এর পরে will/would কখনো নয়; if-অংশ আগে হলে কমা, মাঝে হলে কমা নেই।",
            en: "Rima and Imran are talking about the school picnic. Imran says, 'If it rains tomorrow, we will move the picnic to Friday.' Rima sighs, 'Good plan, but I have an exam on Friday. If I miss it, my mother will be angry — and if I were the headmistress, I would cancel exams forever!' Imran laughs, 'You always dream big. If I get time tonight, I will make a new plan on paper.' Rima smiles, 'Do that. And remember — if the bus doesn't come by eight, we will walk to the market.' Notice — real plans take Type 1 (rains...will move, get...will make, doesn't come...will walk), while the dream of being headmistress takes Type 2 (were...would cancel). In a nutshell — three conditions: (1) Type 0 = always true, present in both halves — If you heat ice, it melts; (2) Type 1 = real future, if + present → will + V1 — If it rains, we will stay home; (3) Type 2 = unreal now, if + past form → would + V1 — If I had wings, I would fly; never will/would right after if; comma after the if-part when it comes first, no comma when if sits in the middle.",
            hi: "রিমা और ইমরান स्कूल के पिकनिक पर बात कर रहे हैं। ইमরान कहता है, 'If it rains tomorrow, we will move the picnic to Friday।' রিমा আह ভरकर कहती है, 'Good plan, but I have an exam on Friday। If I miss it, my mother will be angry — এবং if I were the headmistress, I would cancel exams forever!' ইমरान हँसता है, 'You always dream big। If I get time tonight, I will make a new plan on paper।' রিমा मुस्कुराकर कहती है, 'Do that। और remember — if the bus doesn't come by eight, we will walk to the market।' ध्यान दें — वास्तविक योजना में Type 1 (rains...will move, get...will make, doesn't come...will walk), ঔর हेडमिस्ट्रेस बनने के सपने में Type 2 (were...would cancel)। एक नज़र में — तीन शर्त: (1) Type 0 = सदा सत्य, दोनों भागों में present — If you heat ice, it melts; (2) Type 1 = वास्तविक भविष्य, if+present → will+V1 — If it rains, we will stay home; (3) Type 2 = अभी की कल्पना, if+past রूप → would+V1 — If I had wings, I would fly; if के बाद will/would कभी नहीं; if-भाग पहले हो तो कॉमा, बीच में हो तो कॉमा नहीं।",
          },
          examples: [
            {
              wrong: "If Imran will miss the bus, he will walk.",
              right: "If Imran misses the bus, he will walk.",
              note: {
                bn: "গল্পের বাস্তব প্ল্যানও Type 1 — শর্ত misses (present), ফল will walk।",
                en: "Even the story's real plan is Type 1 — condition misses (present), result will walk.",
                hi: "कहानी की वास्तविक योजना भी Type 1 — शर्त misses (present), परिणाम will walk।",
              },
            },
            {
              wrong: "If Rima is taller, she would join the basketball team.",
              right: "If Rima were taller, she would join the basketball team.",
              note: {
                bn: "রিমা লম্বা নন — কল্পনা → were; would-এর আগে অবশ্যই past-রূপ শর্ত।",
                en: "Rima is not tall — imagination → were; before would the condition must wear a past form.",
                hi: "রিমা লম্বी नहीं — कल्पना → were; would से पहले शर्त past रूप में होनी चाहिए।",
              },
            },
            {
              wrong: "If the picnic moved to Friday, we will need more food.",
              right: "If the picnic moves to Friday, we will need more food.",
              note: {
                bn: "পিকনিক সত্যিই সরতে পারে — Type 1 → moves...will need; moved বললে কল্পনার জগৎ ধরে নেওয়া হয়।",
                en: "The picnic really can shift — Type 1 → moves...will need; saying moved treats it as imagination.",
                hi: "पिकनिक सच में टल सकता है — Type 1 → moves...will need; moved कहने पर वह कल्पना मान ली जाती है।",
              },
            },
            {
              wrong: "If you won't book the bus now, we won't get seats.",
              right: "If you don't book the bus now, we won't get seats.",
              note: {
                bn: "শর্তের নেগেটিভ present-এ don't; won't দুইবার বসালে শর্ত-ফলের সীমানাই মুছে যায়।",
                en: "The condition's negative stays present — don't; placing won't in both halves erases the condition-result boundary itself.",
                hi: "शर्त का निषेध present में don't; दोनों जगह won't बिठा देने से शर्त-परिणाम की सीमा ही मिट जाती है।",
              },
            },
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
          hi: "Type 2 के past रूप (had, knew, lived) का मतलब अतीत नहीं — अभी की असत्यता; बांग्ला 'থাকত, করতাম' का -त ठीक वहीं बैठता है।",
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
  /* ── 2. Passive Voice (Beginner) ────────────────────────────────────── */
  {
    topic: "Passive Voice",
    level: "beginner",
    title: "Passive Voice (Beginner)",
    unit: 0,
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
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয় — কাজ বড় কথা, কর্তা নয়",
            en: "When to use it — the action is the news, not the doer",
            hi: "कब इस्तेमाल करें — काम ही खबर है, कर्ता नहीं",
          },
          body: {
            bn: "Passive বসে যখন কাজটা বা কাজের ফলটা বড় কথা, কর্তা নয় — তিন অবস্থায়: (১) কর্তা অজানা — My umbrella was stolen (কে চুরি করল জানি না); (২) কর্তা স্পষ্ট — The thief was caught (ধরবে পুলিশই, বলার দরকার নেই); (৩) কর্তা অপ্রাসঙ্গিক — This bridge was built in 1982 (কে বানাল নয়, কবে বানাল তা-ই খবর)। এই কারণে খবরের কাগজ, নোটিশ-বোর্ড, রান্নার রেসিপি, বিজ্ঞানের বইয়ে passive-ই ঘরের ভাষা: Sold out, Closed on Mondays, The rice is cooked for twenty minutes। বাংলা কথায় passive কম হওয়ায় আমরা ইংরেজিতেও এড়িয়ে চলি — কিন্তু বাংলা খবরে লিখে 'আটক হয়েছে', 'দেওয়া হয়েছে', 'করা হবে'; ওই রূপগুলোর ইংরেজি নামই passive। এক লাইনে মনে রাখুন: কর্তা বলতে ইচ্ছে করছেন না বা পারছেন না — বাক্যটা passive-এ যাবেই।",
            en: "The passive is used when the action or its result is the point, not the doer — in three situations: (1) the doer is unknown — My umbrella was stolen (who stole it, nobody knows); (2) the doer is obvious — The thief was caught (the police catch thieves — no need to say); (3) the doer is irrelevant — This bridge was built in 1982 (not who built it but when is the news). That is why newspapers, notice-boards, recipes and science books speak passive by birth: Sold out, Closed on Mondays, The rice is cooked for twenty minutes. Because spoken Bengali rarely goes passive, we avoid it in English too — but Bengali news itself writes 'আটক হয়েছে', 'দেওয়া হয়েছে', 'করা হবে'; the English name of exactly those forms is the passive. One-line rule: if you do not want to say the doer or cannot — the sentence goes passive.",
            hi: "Passive तब बैठता है जब काम या उसका परिणाम बड़ी बात हो, कर्ता नहीं — तीन हालतें: (1) कर्ता अज्ञात — My umbrella was stolen (किसने चुराया, पता नहीं); (2) कर्ता स्पष्ट — The thief was caught (पुलिस ही पकड़ेगी, कहने की ज़रूरत नहीं); (3) कर्ता अप्रासंगिक — This bridge was built in 1982 (किसने बनाया नहीं, कब बनाया वही खबर)। इसीलिए अख़बार, नोटिस-बोर्ड, रेसिपी, विज्ञान की किताबों में passive ही घर की भाषा: Sold out, Closed on Mondays, The rice is cooked for twenty minutes। बांग्ला बोलचाल में passive कम होने से हम अंग्रेज़ी में भी बचते हैं — पर बांग्ला खबर में लिखते हैं 'আটক হয়েছে', 'দেওয়া হয়েছে', 'করা হবে'; इन्हीं रूपों का अंग्रेज़ी नाम passive है। एक लाइन में याद रखें: कर्ता कहने का मन नहीं या नहीं कर सकते — वाक्य passive में ही जाएगा।",
          },
          examples: [
            {
              wrong: "The thief caught last night near the market.",
              right: "The thief was caught last night near the market.",
              note: {
                bn: "খবরের ভাষা — কে ধরল বলার দরকার নেই, তাই কর্তা হারিয়ে গেলে be-verb লাগবেই: was caught।",
                en: "News language — who caught him needs no saying, so once the doer is gone the be-verb is a must: was caught.",
                hi: "खबर की भाषा — किसने पकड़ा, कहने की ज़रूरत नहीं; कर्ता हटते ही be-verb लाज़मी: was caught।",
              },
            },
            {
              wrong: "My umbrella stolen from the stand yesterday.",
              right: "My umbrella was stolen from the stand yesterday.",
              note: {
                bn: "চুরিকারী অজানা — passive-এর ক্লাসিক জায়গা; কিন্তু be-verb ছাড়া passive হয় না: was stolen।",
                en: "The thief is unknown — the classic passive territory; but no passive without its be-verb: was stolen.",
                hi: "चोर अज्ञात — passive की क्लासिक जगह; पर be-verb के बिना passive नहीं: was stolen।",
              },
            },
            {
              wrong: "They build this bridge in 1982.",
              right: "This bridge was built in 1982.",
              note: {
                bn: "কে বানাল (they?) বলাই অসম্ভব — কাল অতীত (1982), তাই was built; কর্ম bridge সামনে এল।",
                en: "Saying who built it ('they'?) is impossible — the time is past (1982), so was built; the object bridge steps to the front.",
                hi: "किसने बनाया ('they'?) कहना असंभव — काल अतीत (1982), इसलिए was built; कर्म bridge आगे आ गया।",
              },
            },
            {
              wrong: "English speak in many countries.",
              right: "English is spoken in many countries.",
              note: {
                bn: "কে বলে — কোটি মানুষ, বলার নাম নেই; কর্ম English সামনে, ক্রিয়ায় be + V3: is spoken।",
                en: "Who speaks it — millions, nameless; the object English comes forward and the verb takes be + V3: is spoken.",
                hi: "कौन बोलता है — करोड़ों लोग, नाम नहीं; कर्म English आगे, क्रिया में be + V3: is spoken।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "গঠন — কর্ম সামনে, be-verb + V3",
            en: "Formation — the object moves up, then be-verb + V3",
            hi: "बनावट — कर्म आगे, फिर be-verb + V3",
          },
          body: {
            bn: "Active থেকে passive বানানোর তিন ধাপ: (১) কর্মটাকে বাক্যের শুরুতে আনুন — Ram writes a letter → A letter...; (২) কালের মতো be-verb বসান — present হলে is/are, past হলে was/were, ভবিষ্যতে will be; (৩) ক্রিয়ার তৃতীয় রূপ (V3) বসান — A letter is written by Ram। মূল কর্তা বলতে চাইলে শেষে by-এর পরে পড়ে; বলতে না চাইলে বাদ। মনে রাখুন — কাল বদলায় শুধু be-verb: লেখা হয় (is written), লেখা হয়েছিল (was written), লেখা হবে (will be written); বাংলার 'করা হয় / করা হয়েছে / করা হবে' পরিবারের সঙ্গে চমৎকার মিল। V3-এর ভাণ্ডার এখনই মুখস্থ করুন: write-written, make-made, do-done, catch-caught, sell-sold, build-built, give-given, find-found। যেদিন এই রূপগুলো মুখে চলে আসবে, passive লেখা হাতের লেখা হয়ে যাবে।",
            en: "Building the passive from the active takes three steps: (1) bring the object to the front — Ram writes a letter → A letter...; (2) set the be-verb according to the tense — is/are for present, was/were for past, will be for future; (3) add the third verb form (V3) — A letter is written by Ram. If you want the original subject, it falls at the end after by; if not, drop it. Remember — only the be-verb changes with the tense: is written, was written, will be written — a beautiful match with the Bengali 'করা হয় / করা হয়েছে / করা হবে' family. Start memorising the V3 stock now: write-written, make-made, do-done, catch-caught, sell-sold, build-built, give-given, find-found. The day these forms roll off your tongue, writing passives becomes handwriting.",
            hi: "Active से passive बनाने के तीन कदम: (1) कर्म को वाक्य की शुरुआत में लाइए — Ram writes a letter → A letter...; (2) काल के मुताबिक be-verb बिठाइए — present में is/are, past में was/were, भविष्य में will be; (3) क्रिया का तीसरा रूप (V3) जोड़िए — A letter is written by Ram। असल कर्ता कहना हो तो वह आख़िर में by के बाद आता है; न कहना हो तो छोड़ दीजिए। याद रखें — काल बदलता है केवल be-verb: is written, was written, will be written — बांग्ला 'করা হয় / করা হয়েছে / করা হবে' परिवार से शानदार मेल। V3 का भंडार अभी रट लीजिए: write-written, make-made, do-done, catch-caught, sell-sold, build-built, give-given, find-found। जिस दिन ये रूप ज़ुबान पर चलने लगेंगे, passive लिखना हाथ की लिखावट हो जाएगा।",
          },
          examples: [
            {
              wrong: "The letter is written by me yesterday.",
              right: "The letter was written by me yesterday.",
              note: {
                bn: "কাল বদলায় শুধু be-verb — yesterday মানে অতীত, তাই is নয়, was; V3 (written) স্থির থাকে।",
                en: "Only the be-verb carries the tense — yesterday means past, so not is but was; the V3 (written) stays still.",
                hi: "काल बदलता है केवल be-verb — yesterday यानी अतीत, इसलिए is नहीं, was; V3 (written) स्थिर रहता है।",
              },
            },
            {
              wrong: "The rooms is cleaned every morning.",
              right: "The rooms are cleaned every morning.",
              note: {
                bn: "be-verb নতুন কর্তার সঙ্গে মেলে — rooms বহুবচন → are; একবচন room হলে is।",
                en: "The be-verb matches the new subject — rooms is plural → are; with singular room it would be is.",
                hi: "be-verb नए कर्ता से मेल खाता है — rooms बहुवचन → are; एकवचन room होता तो is।",
              },
            },
            {
              wrong: "This watch will repaired tomorrow.",
              right: "This watch will be repaired tomorrow.",
              note: {
                bn: "ভবিষ্যতের passive = will be + V3; be-verb ছাড়া will repaired-এ কালের চেয়ারই খালি।",
                en: "The future passive = will be + V3; without the be-verb, 'will repaired' leaves the tense's chair empty.",
                hi: "भविष्य का passive = will be + V3; be-verb के बिना 'will repaired' में काल की कुर्सी ही खाली।",
              },
            },
            {
              wrong: "The gate opened at six every day.",
              right: "The gate is opened at six every day.",
              note: {
                bn: "কর্ম gate সামনে এলেই passive-এর সূচনা — be-verb ছাড়া শুধু V2 বসালে অর্থ এলোমেলো।",
                en: "Once the object gate moves up, the passive begins — placing a bare V2 without the be-verb scrambles the meaning.",
                hi: "कर्म gate आगे आते ही passive की शुरुआत — be-verb के बिना केवल V2 बिठाने से अर्थ बिगड़ जाता है।",
              },
            },
            {
              wrong: "The homework was did by Rafiq.",
              right: "The homework was done by Rafiq.",
              note: {
                bn: "do-র তিন রূপ — do, did, done; be-verb-এর পরে সবসময় তৃতীয় রূপ done।",
                en: "The three forms of do — do, did, done; after the be-verb always the third form, done.",
                hi: "do के तीन रूप — do, did, done; be-verb के बाद सदा तीसरा रूप done।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "আভাস শব্দ — passive চেনার ও বানানোর সংকেত",
            en: "Signal words — spotting and building the passive",
            hi: "संकेत शब्द — passive पहचानने और बनाने के सुराग",
          },
          body: {
            bn: "Passive চেনার সংকেত তিনটে — বাক্যের শুরুতে কর্ম (A letter...), ক্রিয়ায় be-verb + V3 জোড়া (is written, was stolen), আর মাঝে মাঝে by... (by Ram, by the police)। বানানোর সংকেতও তিনটে: (১) বাক্যটা খবর, নোটিশ, নিয়ম, রেসিপি বা নির্দেশের — Prizes are given every year; (২) কর্তার নাম নেই বা বলার দরকার নেই — The shop is closed on Mondays; (৩) কাজের ফল বড় কথা — The letters are delivered twice a day। বাংলা পাঠে 'আটক হয়েছে', 'করা হয়েছে', 'দেওয়া হবে', 'বলা হয়' — এই রূপগুলো দেখলেই বুঝবেন ইংরেজি অনুবাদে passive আসবে; নোটিশ-বোর্ডের 'Sold out', 'Closed', 'No entry' — প্রতিটা ছোট্ট passive পাঠ। আর ইংরেজি পড়তে পড়তে is/are/was/were-এর পরে এমন কোনো শব্দ দেখলে যেটা ক্রিয়ার তৃতীয় রূপ — ডেকে বলুন, এটা passive।",
            en: "Three signals reveal a passive — an object at the front (A letter...), a be-verb + V3 pair in the verb (is written, was stolen), and now and then a by... (by Ram, by the police). Three signals tell you to build one: (1) the sentence belongs to news, notices, rules, recipes or instructions — Prizes are given every year; (2) the doer has no name or needs none — The shop is closed on Mondays; (3) the result is the point — The letters are delivered twice a day. In a Bengali text, the forms 'আটক হয়েছে', 'করা হয়েছে', 'দেওয়া হবে', 'বলা হয়' tell you the English translation will be passive; a notice-board's 'Sold out', 'Closed', 'No entry' — each one is a tiny passive lesson. And while reading English, whenever you see a third verb form right after is/are/was/were — point and say: that is a passive.",
            hi: "Passive पहचानने के तीन संकेत — वाक्य की शुरुआत में कर्म (A letter...), क्रिया में be-verb + V3 की जोड़ी (is written, was stolen), और कभी-कभी by... (by Ram, by the police)। बनाने के तीन संकेत: (1) वाक्य खबर, नोटिस, नियम, रेसिपी या निर्देश का है — Prizes are given every year; (2) कर्ता का नाम नहीं या कहने की ज़रूरत नहीं — The shop is closed on Mondays; (3) काम का परिणाम बड़ी बात — The letters are delivered twice a day। बांग्ला पाठ में 'আটক হয়েছে', 'করা হয়েছে', 'দেওয়া হবে', 'বলা হয়' — ये रूप देखते ही समझ जाइए कि अंग्रेज़ी अनुवाद में passive आएगा; नोटिस-बोर्ड का 'Sold out', 'Closed', 'No entry' — हर एक छोटा passive पाठ है। और अंग्रेज़ी पढ़ते-पढ़ते is/are/was/were के तुरंत बाद क्रिया का तीसरा रूप दिखे — इशारा करके कहिए, यह passive है।",
          },
          examples: [
            {
              wrong: "Sweets sell in this shop by the shopkeeper.",
              right: "Sweets are sold in this shop.",
              note: {
                bn: "বিক্রির খবরে কর্তা বাড়তি — Sweets are sold; by-phrase বাদ দিলেই বাক্য নোটিশের মতো হালকা।",
                en: "In a selling notice the doer is extra — Sweets are sold; drop the by-phrase and the sentence lightens like a notice.",
                hi: "बिक्री की खबर में कर्ता अतिरिक्त — Sweets are sold; by-phrase हटाइए, वाक्य नोटिस जैसा हल्का हो जाएगा।",
              },
            },
            {
              wrong: "The fish fries in mustard oil for five minutes.",
              right: "The fish is fried in mustard oil for five minutes.",
              note: {
                bn: "রেসিপির ভাষা — কে ভাজবে জিজ্ঞেস হয় না; কর্ম fish সামনে, ক্রিয়ায় is fried।",
                en: "Recipe language — nobody asks who fries it; the object fish comes up front and the verb becomes is fried.",
                hi: "रेसिपी की भाषा — कौन तलेगा, यह सवाल नहीं उठता; कर्म fish आगे, क्रिया is fried।",
              },
            },
            {
              wrong: "Every year give prizes to the best students.",
              right: "Every year prizes are given to the best students.",
              note: {
                bn: "কে দেয়? স্কুলই — অজানা কর্তার জায়গায় কর্ম prizes সামনে: are given।",
                en: "Who gives? The school — with the doer unnamed, the object prizes moves up front: are given.",
                hi: "कौन देता है? स्कूल — कर्ता बेनाम, कर्म prizes आगे: are given।",
              },
            },
            {
              wrong: "This temple build in the 1800s.",
              right: "This temple was built in the 1800s.",
              note: {
                bn: "নির্মাতা সম্ভবত অজানা — অতীতের কাল (1800s) + অজানা কর্তা = was built; be-verb ভুলে গেলেই বাক্য ভেঙে পড়ে।",
                en: "The builder is probably unknown — past time (1800s) + unknown doer = was built; forgetting the be-verb is what breaks the sentence.",
                hi: "निर्माता संभवतः अज्ञात — अतीत काल (1800s) + अज्ञात कर्ता = was built; be-verb भूलने से ही वाक्य टूटता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "by-phrase কখন পড়ে, কখন বাদ — কর্তা বলা কি দরকার?",
            en: "Keep or drop the by-phrase — do you need to name the doer?",
            hi: "by-phrase कब रहे, कब जाए — कर्ता बताना ज़रूरी है?",
          },
          body: {
            bn: "Passive-এর সৌন্দর্য এই যে কর্তা বলাটা ঐচ্ছিক। তিন শর্তে by-phrase বাদ দিন: কর্তা অজানা (My bike was stolen — কে চুরি করল জানেন না), কর্তা স্পষ্ট (The thief was arrested — ধরবে পুলিশই; The letters are delivered twice a day — পৌঁছাবে ডাক-ব্যবস্থাই), কর্তা অপ্রাসঙ্গিক (This school was built in 1995 — বিল্ডারের নাম কার জানার? খবরটা তো কবে হল সেটা)। কিন্তু কর্তাই যদি নতুন তথ্য হয়, by-phrase বাধ্যতামূলক: Hamlet was written by Shakespeare; The Taj Mahal was built by Shah Jahan; এখানে শুধু Hamlet was written বললে গল্পের অর্ধেক মিলিয়ে যায়। বাঙালি শিক্ষার্থীদের অভ্যাস — নিয়ম মিলিয়ে সব জায়গায় by me, by him জুড়ে বাক্য ভারী করা; বাংলায় 'আমার দ্বারা লেখা হয়েছে' কতবার বলেন? সেই মেজাজই ইংরেজিতেও রাখুন — কর্তা বাড়তি হলে বাদ দিন।",
            en: "The beauty of the passive is that naming the doer is optional. Drop the by-phrase in three cases: the doer is unknown (My bike was stolen — you do not know who took it), the doer is obvious (The thief was arrested — the police arrest; The letters are delivered twice a day — the postal system delivers), the doer is irrelevant (This school was built in 1995 — who cares for the builder's name; the news is when). But when the doer itself is the new information, the by-phrase is compulsory: Hamlet was written by Shakespeare; The Taj Mahal was built by Shah Jahan; saying only Hamlet was written loses half the story. The Bengali-speaker habit — blindly pasting by me, by him everywhere and weighing the sentence down; how often do you say 'আমার দ্বারা লেখা হয়েছে' in Bengali? Keep that same feel in English — when the doer is extra, drop it.",
            hi: "Passive की खूबसूरती यह है कि कर्ता बताना वैकल्पिक है। तीन हालतों में by-phrase छोड़ दें: कर्ता अज्ञात (My bike was stolen — किसने लिया, पता नहीं), कर्ता स्पष्ट (The thief was arrested — पकड़ेगी पुलिस ही; The letters are delivered twice a day — पहुँचाएगा डाक-तंत्र ही), कर्ता अप्रासंगिक (This school was built in 1995 — बिल्डर का नाम किसे जानना है; खबर तो कब हुआ यह है)। पर कर्ता ही नई जानकारी हो तो by-phrase अनिवार्य: Hamlet was written by Shakespeare; The Taj Mahal was built by Shah Jahan; केवल Hamlet was written कहने से कहानी का आधा हिस्सा मिट जाता है। बांग्लाभाषी छात्रों की आदत — बिना सोचे हर जगह by me, by him जोड़कर वाक्य भारी करना; बांग्ला में 'আমার দ্বারা লেখা হয়েছে' कितनी बार कहते हैं? वही मनोदशा अंग्रेज़ी में भी रखें — कर्ता अतिरिक्त हो तो छोड़ दें।",
          },
          examples: [
            {
              wrong: "The thief was caught by the police last night.",
              right: "The thief was caught last night.",
              note: {
                bn: "by the police বলা বাড়তি — চোর ধরাই পুলিশের কাজ; বাক্য খবরের মতো হালকা হল।",
                en: "'By the police' is extra — catching thieves is what police do; the sentence now flows like news.",
                hi: "'by the police' बताना अतिरिक्त — चोर पकड़ना पुलिस का ही काम; वाक्य खबर जैसा हल्का हो गया।",
              },
            },
            {
              wrong: "This school was built in 1995 by the builders.",
              right: "This school was built in 1995.",
              note: {
                bn: "বিল্ডার বিল্ডারই তো — by the builders-এ কোনো নতুন তথ্য নেই; কবে বানানো হল সেটাই খবর।",
                en: "A builder builds, obviously — 'by the builders' adds no new information; when it was built is the news.",
                hi: "बिल्डर ही बिल्डर है — 'by the builders' में कोई नई जानकारी नहीं; कब बना, वही खबर।",
              },
            },
            {
              wrong: "Hamlet was written in about 1600.",
              right: "Hamlet was written by Shakespeare in about 1600.",
              note: {
                bn: "এখানে কর্তাই নতুন তথ্য — Shakespeare ছাড়া বাক্যের প্রাণ নেই; তাই by-phrase বাধ্যতামূলক।",
                en: "Here the doer is the new information — without Shakespeare the sentence has no soul; the by-phrase is compulsory.",
                hi: "यहाँ कर्ता ही नई जानकारी — Shakespeare के बिना वाक्य प्राणहीन; इसलिए by-phrase अनिवार्य।",
              },
            },
            {
              wrong: "Our house is painted by us every year before Durga Puja.",
              right: "Our house is painted every year before Durga Puja.",
              note: {
                bn: "নিজের বাড়ি নিজেরাই রং করেন — by us স্পষ্ট; বাংলায় 'আমাদের দ্বারা' বলেন তো? ইংরেজিতেও না।",
                en: "We paint our own house — 'by us' is obvious; do you say 'আমাদের দ্বারা' in Bengali? Nor in English.",
                hi: "अपना घर हम ही रंगते हैं — 'by us' स्पष्ट; बांग्ला में 'আমাদের দ্বারা' कहते हैं? अंग्रेज़ी में भी नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "কাল বদলায় শুধু be-verb — passive-এর তিন কাল",
            en: "Only the be-verb carries the tense — the three tenses of the passive",
            hi: "काल बदलता है केवल be-verb — passive के तीन काल",
          },
          body: {
            bn: "Passive-এর কাল-হিসাব এক জায়গায় জমে: বর্তমানে is/are + V3 — The shop is opened at nine; অতীতে was/were + V3 — The shop was opened at nine yesterday; ভবিষ্যতে will be + V3 — The shop will be opened at nine tomorrow। মূল কথা — সময়ের সব দায় be-verb-এর, V3 কখনো কাল বদলায় না। তাই বাঙালি শিক্ষার্থীদের চেনা মিশ্রণ: The letter is written by me yesterday — yesterday অতীতের সংকেত, অথচ is বর্তমানে বসে আছে; শুধরে was করুন। আরেকটা সহজ কৌশল: passive-এ বাক্যের শুরুতে যে কর্মটা বসল, তার সঙ্গেই be-verb মেলাতে হয় — একবচন the gate → is/was; বহুবচন the gates → are/were। নেগেটিভ: The gate isn't locked; প্রশ্ন: Is the gate locked? — প্রশ্নে be-verb সামনে চলে আসে, V3 পেছনেই থাকে।",
            en: "The passive's tense-account settles in one place: present is/are + V3 — The shop is opened at nine; past was/were + V3 — The shop was opened at nine yesterday; future will be + V3 — The shop will be opened at nine tomorrow. The core point — every duty of the time sits on the be-verb; the V3 never changes its tense. Hence the familiar Bengali-speaker mixture: The letter is written by me yesterday — yesterday signals the past while is sits in the present; correct it to was. Another easy trick: whatever object now sits at the front of the sentence, the be-verb must match it — singular the gate → is/was; plural the gates → are/were. Negative: The gate isn't locked; question: Is the gate locked? — in questions the be-verb steps to the front while the V3 stays behind.",
            hi: "Passive का काल-हिसाब एक ही जगह जमा होता है: वर्तमान में is/are + V3 — The shop is opened at nine; अतीत में was/were + V3 — The shop was opened at nine yesterday; भविष्य में will be + V3 — The shop will be opened at nine tomorrow। मूल बात — समय का सारा बोझ be-verb पर, V3 कभी काल नहीं बदलता। इसीलिए बांग्लाभाषी छात्रों की जानी-पहचानी मिश्रण: The letter is written by me yesterday — yesterday अतीत का संकेत, पर is वर्तमान में बैठा है; उसे was कर दीजिए। एक और आसान तरकीब: passive में वाक्य की शुरुआत में जो कर्म बैठा, उसी से be-verb मिलाइए — एकवचन the gate → is/was; बहुवचन the gates → are/were। निषेध: The gate isn't locked; प्रश्न: Is the gate locked? — प्रश्न में be-verb आगे आ जाता है, V3 पीछे ही रहता है।",
          },
          examples: [
            {
              wrong: "The match is cancelled last Friday.",
              right: "The match was cancelled last Friday.",
              note: {
                bn: "last Friday = অতীত → was; is বসিয়ে রাখলে কালের মিশ্রণ, খবরের বাক্যই ভুল হয়ে যায়।",
                en: "'Last Friday' = past → was; keeping is mixes the tenses and the news sentence itself goes wrong.",
                hi: "'last Friday' = अतीत → was; is रखने से काल मिश्रित, खबर वाला वाक्य ही गलत हो जाता है।",
              },
            },
            {
              wrong: "The results will announced next week.",
              right: "The results will be announced next week.",
              note: {
                bn: "ভবিষ্যতের passive-এর সূত্র will be + V3 — বাদ পড়া be-verb-ই এই ভুলের মূল।",
                en: "The future passive formula is will be + V3 — the dropped be-verb is the root of this error.",
                hi: "भविष्य के passive का सूत्र will be + V3 — छूटा हुआ be-verb ही इस गलती की जड़।",
              },
            },
            {
              wrong: "The dishes was washed by Mina.",
              right: "The dishes were washed by Mina.",
              note: {
                bn: "কর্ম dishes বহুবচন — be-verb নতুন কর্তার সঙ্গে মিলবে: were; বাংলায় 'ধোয়া হলো' কর্তা-নিরপেক্ষ, ইংরেজিতে নয়।",
                en: "The object dishes is plural — the be-verb must match the new subject: were; Bengali 'ধোয়া হলো' is subject-neutral, English is not.",
                hi: "कर्म dishes बहुवचन — be-verb नए कर्ता से मिलेगा: were; बांग्ला 'ধোয়া হলো' कर्ता-निरपेक्ष, अंग्रेज़ी नहीं।",
              },
            },
            {
              wrong: "The office not open on Sundays.",
              right: "The office is not open on Sundays.",
              note: {
                bn: "নোটিশের ভাষাতেও be-verb বাদ যায় না — is not open; খালি ক্রিয়া-কর্ম জুড়লে বাক্য দাঁড়ায় না।",
                en: "Even notice language keeps its be-verb — is not open; stitching verb and object with nothing between them leaves no sentence at all.",
                hi: "नोटिस की भाषा में भी be-verb नहीं छूटता — is not open; केवल क्रिया-कर्म जोड़ने से वाक्य बनता ही नहीं।",
              },
            },
            {
              wrong: "The door is locked?",
              right: "Is the door locked?",
              note: {
                bn: "প্রশ্নে be-verb সামনে — Is the door...; শুধু প্রশ্নবোধক দাগ টানলেই প্রশ্ন হয় না।",
                en: "In questions the be-verb steps forward — Is the door...; a question mark alone does not make a question.",
                hi: "प्रश्न में be-verb आगे — Is the door...; केवल प्रश्नवाचक चिह्न लगाने से प्रश्न नहीं बनता।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "সব ক্রিয়ায় passive হয় না — transitive-এর ঘর",
            en: "Not every verb goes passive — only transitive verbs",
            hi: "हर क्रिया passive नहीं होती — केवल transitive",
          },
          body: {
            bn: "Passive হয় শুধু এমন ক্রিয়ায় যার একটা কর্ম দরকার (transitive verb): write, eat, make, break, sell, find, clean, catch, build, give — এদের পেছনে সবসময় 'কী?'-র উত্তর বসে: wrote a letter, caught the thief, built a bridge। কর্ম আছে মানে কর্মকে সামনে এনে be + V3 বসানোর উপায় আছে। কিন্তু কর্মহীন ক্রিয়া (intransitive): sleep, go, come, arrive, die, laugh, cry — এদের পেছনে 'কী?'-র উত্তর নেই: went, slept, died — শুধুই শেষ; কর্ম নেই মানে passive-এ পাঠানোর কিছুই নেই। তাই He was arrived ❌, He died last year — এতেই শেষ। বাঙালি শিক্ষার্থীরা অনেক সময় was/were-কে অতীতের প্রতীক ভেবে যেকোনো ক্রিয়ার আগে বসিয়ে ফেলেন — was went, was came; মনে রাখুন: was/were কখনো একা অতীত বোঝায় না — এরা কেবল passive-এর চেয়ারে বা be-verb-বাক্যে বসে।",
            en: "The passive is built only from verbs that need an object (transitive verbs): write, eat, make, break, sell, find, clean, catch, build, give — behind each, the answer to 'what?' always sits: wrote a letter, caught the thief, built a bridge. An object means there is something to bring forward and attach be + V3 to. But object-less verbs (intransitive): sleep, go, come, arrive, die, laugh, cry — behind them the question 'what?' gets no answer: went, slept, died — and that is all; no object means nothing to send into the passive. So He was arrived ❌; He died last year — and that is the whole story. Bengali learners often treat was/were as a symbol of the past and park it before any verb — was went, was came; remember: was/were never means past on its own — these two sit only in the passive's chair or in be-verb sentences.",
            hi: "Passive केवल उन क्रियाओं से बनता है जिन्हें कर्म चाहिए (transitive verb): write, eat, make, break, sell, find, clean, catch, build, give — इनके पीछे हमेशा 'क्या?' का उत्तर बैठता है: wrote a letter, caught the thief, built a bridge। कर्म है तो कर्म को आगे लाकर be + V3 बिठाने का रास्ता है। पर बिना कर्म वाली क्रियाएँ (intransitive): sleep, go, come, arrive, die, laugh, cry — इनके पीछे 'क्या?' का उत्तर नहीं: went, slept, died — बस खत्म; कर्म नहीं तो passive में भेजने को कुछ है ही नहीं। इसलिए He was arrived ❌; He died last year — इतने में ही बात पूरी। बांग्लाभाषी छात्र अक्सर was/were को अतीत का प्रतीक मानकर किसी भी क्रिया से पहले बिठा देते हैं — was went, was came; याद रखें: was/were कभी अकेले अतीत नहीं बताता — ये केवल passive की कुर्सी या be-verb वाले वाक्य में बैठते हैं।",
          },
          examples: [
            {
              wrong: "He was arrived late last night.",
              right: "He arrived late last night.",
              note: {
                bn: "arrive কর্মহীন — কী arrived? উত্তর নেই; তাই passive অসম্ভব, খালি past: arrived।",
                en: "Arrive takes no object — arrived what? No answer; so the passive is impossible, plain past: arrived.",
                hi: "arrive कर्महीन — arrived क्या? उत्तर नहीं; इसलिए passive असंभव, खाली past: arrived।",
              },
            },
            {
              wrong: "The baby was slept all afternoon.",
              right: "The baby slept all afternoon.",
              note: {
                bn: "sleep-এর পেছনে 'কী slept?' প্রশ্নই চলে না — কর্ম নেই, passive-এর চেয়ার খালি।",
                en: "Behind sleep the question 'slept what?' never arises — no object, so the passive's chair stays empty.",
                hi: "sleep के पीछे 'क्या slept?' सवाल ही नहीं उठता — कर्म नहीं, passive की कुर्सी खाली।",
              },
            },
            {
              wrong: "We were went to the market.",
              right: "We went to the market.",
              note: {
                bn: "was/were + V2-র জোড়া ইংরেজিতে নেই — অতীত বোঝাতে শুধুই went; was/were নিজে থেকে অতীত নয়।",
                en: "No pairing of was/were + V2 exists in English — for the past it is simply went; was/were is not past by itself.",
                hi: "was/were + V2 की जोड़ी अंग्रेज़ी में नहीं — अतीत के लिए केवल went; was/were अपने-आप अतीत नहीं।",
              },
            },
            {
              wrong: "This song was sang by our grandmother.",
              right: "This song was sung by our grandmother.",
              note: {
                bn: "be-verb-এর পরে তৃতীয় রূপ — sing, sang, sung; passive খায় sung-কেই।",
                en: "After the be-verb comes the third form — sing, sang, sung; the passive eats only sung.",
                hi: "be-verb के बाद तीसरा रूप — sing, sang, sung; passive केवल sung लेता है।",
              },
            },
            {
              wrong: "The thief was catch by the police.",
              right: "The thief was caught by the police.",
              note: {
                bn: "catch, caught, caught — be-verb-এর পরে caught; প্রথম রূপ catch প্যাসিভে ঢোকে না।",
                en: "Catch, caught, caught — after the be-verb it is caught; the base form catch never enters the passive.",
                hi: "catch, caught, caught — be-verb के बाद caught; पहला रूप catch passive में नहीं घुसता।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "Common mistakes by Bengali speakers",
            hi: "बांग्लाभाषी छात्रों की आम गलतियाँ",
          },
          body: {
            bn: "নিচের ভুলগুলো আমাদের ক্লাসরুমে, চ্যাটে, ইন্টারভিউতে সবচেয়ে বেশি দেখা যায় — আর প্রতিটার পেছনে একটা বাংলা অভ্যাস কাজ করছে: হয় passive এড়িয়ে যাওয়া, নয় V3-এর বদলে V1/V2 বসিয়ে দেওয়া, নয় be-verb হারিয়ে ফেলা। দোষ আপনার নয়, দুই ভাষার প্যাটার্নের ফারাকের; তাই ভুলটা বাংলা বাক্যটা চিনে ধরুন, তারপর ডানের ঠিক বাক্যটা জোরে তিনবার বলে নিন — কানে গেঁথে গেলেই বলার সময় আর ভুল বেরোয় না।",
            en: "The mistakes below are the most common in our classrooms, chats and interviews — and behind every one sits a Bengali habit: either dodging the passive, or parking V1/V2 where V3 belongs, or losing the be-verb. The fault is not yours; it is the gap between two languages' patterns. Catch the Bengali sentence behind each error, then say the correct sentence on the right aloud three times — once it is rooted in the ear, it stops coming out wrong.",
            hi: "नीचे की गलतियाँ हमारे क्लासरूम, चैट और इंटरव्यू में सबसे ज़्यादा दिखती हैं — और हर एक के पीछे एक बांग्ला आदत काम करती है: या तो passive से बचना, या V3 की जगह V1/V2 बिठा देना, या be-verb खो देना। दोष आपका नहीं, दोनों भाषाओं के पैटर्न का फ़र्क़ है; हर गलती के पीछे का बांग्ला वाक्य पकड़ें, फिर दाईं ओर का सही वाक्य तीन बार ज़ोर से बोलें — कान में बैठ गया तो बोलते समय गलती निकलेगी ही नहीं।",
          },
          examples: [
            {
              wrong: "The work is do by the workers.",
              right: "The work is done by the workers.",
              note: {
                bn: "be-verb-এর পরে V1 (do) ঢোকে না — তৃতীয় রূপ done; passive-এর প্রাণই V3।",
                en: "No V1 (do) can follow the be-verb — the third form done; V3 is the very life of the passive.",
                hi: "be-verb के बाद V1 (do) नहीं घुसता — तीसरा रूप done; passive की जान ही V3 है।",
              },
            },
            {
              wrong: "My phone was steal in the bus.",
              right: "My phone was stolen on the bus.",
              note: {
                bn: "steal, stole, stolen — was-এর পরে তৃতীয় রূপ stolen; V2 (stole) passive-এ আসে না।",
                en: "Steal, stole, stolen — after was comes the third form stolen; the V2 (stole) never enters the passive.",
                hi: "steal, stole, stolen — was के बाद तीसरा रूप stolen; V2 (stole) passive में नहीं आता।",
              },
            },
            {
              wrong: "The letter written by me.",
              right: "The letter was written by me.",
              note: {
                bn: "be-verb হারিয়ে গেলে বাক্যে কালই থাকে না — অতীত হলে was, বর্তমানে is; be + V3 জোড়া আটকে রাখুন।",
                en: "Once the be-verb is lost, the sentence has no tense at all — was for past, is for present; keep the be + V3 pair locked together.",
                hi: "be-verb खो गया तो वाक्य में काल ही नहीं — अतीत में was, वर्तमान में is; be + V3 जोड़ी साथ रखें।",
              },
            },
            {
              wrong: "The books is kept on the table.",
              right: "The books are kept on the table.",
              note: {
                bn: "be-verb সামনের কর্মের সঙ্গে মেলে — books বহুবচন → are; বাংলা 'রাখা হয়েছে' সংখ্যা বোঝে না, ইংরেজি বোঝে।",
                en: "The be-verb matches the front object — books is plural → are; Bengali 'রাখা হয়েছে' ignores number, English does not.",
                hi: "be-verb आगे वाले कर्म से मेल खाता है — books बहुवचन → are; बांग्ला 'রাখা হয়েছে' संख्या नहीं देखता, अंग्रेज़ी देखती है।",
              },
            },
            {
              wrong: "English is speaking here.",
              right: "English is spoken here.",
              note: {
                bn: "be + -ing মানে 'এখন চলছে' (active); passive-এ be + V3 — spoken; ভাষা নিজে বলে না, বলা হয়।",
                en: "Be + -ing means 'happening right now' (active); the passive takes be + V3 — spoken; the language does not speak, it is spoken.",
                hi: "be + -ing यानी 'अभी चल रहा है' (active); passive में be + V3 — spoken; भाषा खुद नहीं बोलती, बोली जाती है।",
              },
            },
            {
              wrong: "He was died last year.",
              right: "He died last year.",
              note: {
                bn: "'was died' ভারতীয় উপমহাদেশের চেনা ভুল — die কর্মহীন, passive হয় না; খালি past: died।",
                en: "'Was died' is the subcontinent's familiar fossil — die takes no object and cannot go passive; plain past: died.",
                hi: "'was died' उपमहाद्वीप की जानी-पहचानी गलती — die कर्महीन, passive नहीं होता; खाली past: died।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "ছোট গল্পে দেখা যাক",
            en: "See it in a mini story",
            hi: "एक छोटी कहानी में देखें",
          },
          body: {
            bn: "মিনা স্কুলের নোটিশ-বোর্ডের সামনে দাঁড়িয়ে পড়ছে: 'The school gate is locked at 10 a.m. The annual sports will be held next month. Prizes are given to the winners by the committee.' পাশে খবরের কাগজের সারি: 'A young cricketer was selected for the district team. He was trained by a local coach in Rajshahi.' রিমা জিজ্ঞেস করে, 'Who selected him?' মিনা হাসে, 'The team was chosen by the district committee — কর্তাটা এখানেই নতুন তথ্য, তাই by-phrase রাখা হল।' খেয়াল করুন — নোটিশে কর্তা স্পষ্ট (is locked, are given), খবরে নির্মাতা-প্রশিক্ষকই তথ্য (was trained by a local coach)। এক নজরে — passive = কর্ম সামনে + be-verb (কাল বহন করে) + V3; কাল: is/are written → was/were written → will be written; কর্তা অজানা/স্পষ্ট/অপ্রাসঙ্গিক হলে by-phrase বাদ, নতুন তথ্য হলে রাখুন; শুধু transitive ক্রিয়ার passive হয়; বাংলা খবরের 'করা হয়েছে'-ই ইংরেজির passive।",
            en: "Mina stands before the school notice-board and reads: 'The school gate is locked at 10 a.m. The annual sports will be held next month. Prizes are given to the winners by the committee.' Beside it a line from the newspaper: 'A young cricketer was selected for the district team. He was trained by a local coach in Rajshahi.' Rima asks, 'Who selected him?' Mina smiles, 'The team was chosen by the district committee — the doer is the new information here, so the by-phrase stays.' Notice — in the notice the doer is obvious (is locked, are given), while in the news the maker and trainer are the information (was trained by a local coach). In a nutshell — passive = object at the front + be-verb (carrying the tense) + V3; the tenses: is/are written → was/were written → will be written; drop the by-phrase when the doer is unknown, obvious or irrelevant, keep it when the doer is the news; only transitive verbs go passive; and Bengali news's 'করা হয়েছে' is exactly English's passive.",
            hi: "মিনা स्कूल के नोटिस-बोर्ड के सामने खड़ी होकर पढ़ रही है: 'The school gate is locked at 10 a.m. The annual sports will be held next month. Prizes are given to the winners by the committee।' बग़ल में अख़बार की पंक्ति: 'A young cricketer was selected for the district team. He was trained by a local coach in Rajshahi।' রিমा पूछती है, 'Who selected him?' মিনा मुस्कुराती है, 'The team was chosen by the district committee — কর্তा যहाँ नई जानकारी है, इसलिए by-phrase रखा गया।' ध्यान दें — नोटिस में कर्ता स्पष्ट (is locked, are given), खबर में निर्माता-प्रशिक्षक ही जानकारी (was trained by a local coach)। एक नज़र में — passive = कर्म आगे + be-verb (काल ढोता है) + V3; काल: is/are written → was/were written → will be written; कर्ता अज्ञात/स्पष्ट/अप्रासंगिक हो तो by-phrase हटाइए, नई जानकारी हो तो रखिए; केवल transitive क्रिया का passive होता है; और बांग्ला खबर का 'করা হয়েছে' ही अंग्रेज़ी का passive है।",
          },
          examples: [
            {
              wrong: "The annual sports will held next month.",
              right: "The annual sports will be held next month.",
              note: {
                bn: "নোটিশের ভবিষ্যৎ passive — will be held; be-verb ছাড়া নোটিশ অধরা।",
                en: "The notice's future passive — will be held; without the be-verb the notice stays half-finished.",
                hi: "नोटिस का भविष्य passive — will be held; be-verb के बिना नोटिस अधूरा।",
              },
            },
            {
              wrong: "Prizes are give to the winners.",
              right: "Prizes are given to the winners.",
              note: {
                bn: "give, gave, given — be-verb-এর পরে তৃতীয় রূপ given; V1 প্যাসিভে ঢোকে না।",
                en: "Give, gave, given — after the be-verb comes the third form given; V1 never enters the passive.",
                hi: "give, gave, given — be-verb के बाद तीसरा रूप given; V1 passive में नहीं घुसता।",
              },
            },
            {
              wrong: "The team chosen by the district committee last Tuesday.",
              right: "The team was chosen by the district committee last Tuesday.",
              note: {
                bn: "by-phrase থাকলেও be-verb বাধ্যতামূলক — অতীতের খবর was chosen।",
                en: "Even with a by-phrase, the be-verb is compulsory — last Tuesday's news takes was chosen.",
                hi: "by-phrase होने पर भी be-verb अनिवार्य — मंगलवार की खबर was chosen।",
              },
            },
            {
              wrong: "The gate is lock at 10 a.m.",
              right: "The gate is locked at 10 a.m.",
              note: {
                bn: "is-এর পরে তৃতীয় রূপ locked — নোটিশের ছোট্ট বাক্যেও be + V3 নিয়ম এক।",
                en: "After is comes the third form locked — even in the notice's tiny sentence, the be + V3 rule is the same.",
                hi: "is के बाद तीसरा रूप locked — नोटिस के छोटे वाक्य में भी be + V3 नियम एक।",
              },
            },
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
          hi: "be-verb आगे बैठे कर्म से मिलता है — the gate is/was, the gates are/were; बांग्ला 'রাখা হয়েছে' संख्या नहीं देखता, अंग्रेज़ी देखती है।",
        },
        {
          bn: "বাংলা খবরে 'আটক হয়েছে / করা হবে / দেওয়া হয়েছে' দেখলে ইংরেজি অনুবাদে passive ভাবুন — বাংলা লেখ্য ভাষাও passive চেনে।",
          en: "When Bengali news shows 'আটক হয়েছে / করা হবে / দেওয়া হয়েছে', think passive in the English translation — written Bengali knows the passive too.",
          hi: "बांग्ला खबर में 'আটক হয়েছে / করা হবে / দেওয়া হয়েছে' देखें तो अंग्रेज़ी अनुवाद में passive सोचें — बांग्ला लिखित भाषा भी passive जानती है।",
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
