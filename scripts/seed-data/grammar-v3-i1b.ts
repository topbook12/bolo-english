// ─── Learning-path grammar seeds v3: INTERMEDIATE batch I1b (2 deep lessons) ───
// Part of Task 9.3 (intermediate gap-filling). TriText = { bn, en, hi } — Bengali
// is the PRIMARY explanation language; en + hi are complete faithful translations.
// English example sentences stay English; wrong/right pairs capture realistic
// Bengali-speaker errors. quiz included (8-10 items per lesson, reserved schema).
// Sibling batches: I1a (perfect vs past, agreement), b1/b2/b3 (beginner), I2 (advanced).
import type { LibraryGrammarData, LibraryLevel } from "../../src/lib/library-types";

export interface SeedGrammarV3Entry {
  topic: string; // canonical topic id (stable, unique per topic+level vs static bank topics)
  level: LibraryLevel;
  title: string;
  unit: number; // 1-5 = on the learning path; 0 = extra library lesson
  data: LibraryGrammarData;
}

export const SEED_GRAMMAR_V3_I1B: SeedGrammarV3Entry[] = [
  /* ── 1. Question Formation ─────────────────────────────────────────── */
  {
    topic: "Question Formation",
    level: "intermediate",
    title: "Question Formation (Intermediate)",
    unit: 0,
    data: {
      title: {
        bn: "প্রশ্ন গঠন: কোয়েশ্চেন ফরমেশন (মধ্যম স্তর)",
        en: "Question Formation (Intermediate)",
        hi: "प्रश्न गठन: क्वेश्चन फॉर्मेशन (मध्यम स्तर)",
      },
      intro: {
        bn: "'Where is the station?' বলা চলে, কিন্তু 'Can you tell me where is the station?' বলা চলে না — প্রশ্ন মোড়ার মুহূর্তেই নিয়ম উল্টে যায়, আর এই উল্টো-পাল্টাটাই মধ্যম স্তরের সবচেয়ে বড় পরীক্ষা। এই পাঠে ঢোকার আগে সোজা প্রশ্নে do/does/did-এর ব্যবহার আর wh-শব্দগুলোর পরিচয় (beginner স্তরের Question Formation পাঠ) পাকা থাকা দরকার। এখানে শিখব: indirect বা embedded প্রশ্ন — বাক্যের ভেতরে প্রশ্ন স্টেটমেন্ট হয়ে যাওয়ার নিয়ম, yes/no-র জন্য if/whether, বিস্ময়-নেগেটিভ প্রশ্ন (Don't you like it?) আর তার yes/no-ফাঁদ, সহায়ক-ক্রিয়া ছাড়া subject প্রশ্ন (Who called you?), প্রশ্নের শেষে বসা প্রিপজিশন (What are you looking at?), আর ভদ্রতার সিঁড়ি — Can you…? থেকে I was wondering if you could… পর্যন্ত।",
        en: "'Where is the station?' is fine, but 'Can you tell me where is the station?' is not — the moment a question gets wrapped inside another sentence, the rules flip, and that flip is the biggest test at the intermediate level. Before entering this lesson, make sure your do/does/did questions and wh-words are solid (the beginner Question Formation lesson). Here you will learn: indirect or embedded questions — how a question turns into a statement inside a sentence, if/whether for yes/no questions, surprised negative questions (Don't you like it?) and their yes/no trap, subject questions without an auxiliary (Who called you?), prepositions stranded at the end (What are you looking at?), and the politeness ladder from Can you…? up to I was wondering if you could….",
        hi: "'Where is the station?' ठीक है, पर 'Can you tell me where is the station?' नहीं — प्रश्न जैसे ही दूसरे वाक्य के भीतर लिपटता है, नियम पलट जाते हैं, और यही पलट मध्यम स्तर की सबसे बड़ी परीक्षा है। इस पाठ से पहले सीधे प्रश्नों में do/does/did और wh-शब्दों की समझ (beginner का Question Formation पाठ) पक्की होनी चाहिए। यहाँ सीखेंगे: indirect/embedded प्रश्न — वाक्य के भीतर प्रश्न का statement बन जाना, yes/no के लिए if/whether, आश्चर्य-नकारात्मक प्रश्न (Don't you like it?) और उसका yes/no-जाल, सहायक-क्रिया रहित subject प्रश्न (Who called you?), प्रश्न के अंत में रहने वाला preposition (What are you looking at?), और विनम्रता की सीढ़ी — Can you…? से I was wondering if you could… तक।",
      },
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয় — সোজা প্রশ্ন না মোড়কে মোড়া প্রশ্ন",
            en: "When to use each — direct questions vs wrapped (indirect) questions",
            hi: "कब क्या — सीधे प्रश्न बनाम लिपटे (indirect) प्रश्न",
          },
          body: {
            bn: "ইংরেজিতে প্রশ্ন দুই পরিবারের। সোজা (direct) প্রশ্নে auxiliary কর্তার আগে ওঠে: Where is the station? Do you like tea? — বন্ধু-পরিচিতের সাথে, তাৎক্ষণিক কথায় এটাই স্বাভাবিক। মোড়া (indirect/embedded) প্রশ্নে প্রশ্নটা আরেকটা বাক্যের ভেতরে বসে — Can you tell me…, Do you know…, I wonder… — এবং তখন ভেতরের অংশ স্টেটমেন্টের ক্রমে চলে যায়: Can you tell me where the station is। মোড়া প্রশ্ন তিন কাজে আসে: ভদ্রতা (রাস্তায় অপরিচিতকে জিজ্ঞেস করা), অনিশ্চয়তা জানানো (I'm not sure what he meant), আর অন্যের কথা রিপোর্ট করা (He asked where I lived)। সূত্র একটাই: বাক্যের বাইরে প্রশ্ন হলে auxiliary আগে; ভেতরে ঢুকলেই প্রশ্ন স্টেটমেন্ট।",
            en: "English questions come in two families. In a direct question the auxiliary jumps in front of the subject: Where is the station? Do you like tea? — natural among friends and in quick exchanges. In an indirect (embedded) question the question sits inside another sentence — Can you tell me…, Do you know…, I wonder… — and the inner part then falls into statement order: Can you tell me where the station is. Wrapped questions serve three jobs: politeness (asking a stranger in the street), uncertainty (I'm not sure what he meant), and reporting someone (He asked where I lived). One formula: outside the sentence, the auxiliary goes first; once the question moves inside, it becomes a statement.",
            hi: "अंग्रेज़ी में प्रश्न दो परिवार के हैं। सीधे प्रश्न में auxiliary subject से पहले आता है: Where is the station? Do you like tea? — दोस्तों में, तुरंत बातचीत में यही स्वाभाविक। लिपटे (indirect/embedded) प्रश्न में प्रश्न दूसरे वाक्य के भीतर बैठता है — Can you tell me…, Do you know…, I wonder… — और भीतर का हिस्सा statement-क्रम में चला जाता है: Can you tell me where the station is। लिपटे प्रश्न तीन काम करते हैं: विनम्रता (रास्ते में अनजान से पूछना), अनिश्चय बताना (I'm not sure what he meant), और किसी की बात रिपोर्ट करना (He asked where I lived)। एक सूत्र: वाक्य के बाहर प्रश्न हो तो auxiliary पहले; भीतर घुसते ही प्रश्न statement बन जाता है।",
          },
          examples: [
            { wrong: "Do you know where is the nearest ATM?", right: "Do you know where the nearest ATM is?", note: { bn: "Do you know… = মোড়া প্রশ্ন → ভেতরে স্টেটমেন্ট-ক্রম; is শেষে।", en: "Do you know… = a wrapped question → statement order inside; is goes last.", hi: "Do you know… = लिपटा प्रश्न → भीतर statement-क्रम; is अंत में।" } },
            { wrong: "Tell me what time is it.", right: "Tell me what time it is.", note: { bn: "Tell me-র পরেও একই নিয়ম — ভেতরে inversion নেই, প্রশ্ন-চিহ্নও নেই।", en: "Same rule after Tell me — no inversion inside, and no question mark.", hi: "Tell me के बाद भी वही नियम — भीतर inversion नहीं, प्रश्न-चिह्न भी नहीं।" } },
            { wrong: "Could you tell me when does the shop open?", right: "Could you tell me when the shop opens?", note: { bn: "ভেতরে do/does আসে না; opens-এই third-person -s আছে।", en: "No do/does inside; opens already carries the third-person -s.", hi: "भीतर do/does नहीं; opens में ही third-person -s है।" } },
            { wrong: "I wonder if he can come or not?", right: "I wonder whether he can come or not.", note: { bn: "or not-এর জুটি whether; আর মোড়া স্টেটমেন্টে শেষে প্রশ্ন-চিহ্ন পড়ে না।", en: "or not pairs with whether; and a wrapped statement takes no final question mark.", hi: "or not की जोड़ी whether है; और लिपटे statement में अंत में प्रश्न-चिह्न नहीं।" } },
            { wrong: "Who you talked to at the party?", right: "Who did you talk to at the party?", note: { bn: "সোজা প্রশ্নে did + base রূপ, আর প্রিপজিশন to শেষে থাকে।", en: "In a direct question: did + base form, and the preposition to stays at the end.", hi: "सीधे प्रश्न में did + base रूप, और preposition to अंत में रहता है।" } },
          ],
        },
        {
          heading: {
            bn: "গঠন — দুই যন্ত্র পাশাপাশি: auxiliary-আগে বনাম স্টেটমেন্ট-ক্রম",
            en: "Formation — the two machines side by side: auxiliary-first vs statement order",
            hi: "गठन — दो मशीन साथ-साथ: auxiliary-पहले बनाम statement-क्रम",
          },
          body: {
            bn: "সোজা প্রশ্নের যন্ত্র: (wh) + auxiliary + subject + verb — Where do you live? Is she coming? Did he call? মূল ক্রিয়ার নিজের auxiliary না থাকলে do/does/did নামিয়ে আনতে হয়: What do you want? She doesn't smoke। মোড়া প্রশ্নের যন্ত্র: চাবিফ্রেজ + (wh/if) + subject + verb — ভেতরে do/does/did নেই, কাল দরকার হলে মূল ক্রিয়া নিজেই বদলে যায়: Do you know what this word means? I wonder where he went। yes/no প্রশ্ন মোড়া হলে if বা whether বসে: Can you tell me if she is at home? whether…or not-জুটি জোর দেয় 'আসবে-ই-আসবে কি না'। দুই যন্ত্র আলাদা করে চিনতে পারলেই প্রশ্নের অর্ধেক ভুল শেষ।",
            en: "The direct-question machine: (wh) + auxiliary + subject + verb — Where do you live? Is she coming? Did he call? If the main verb has no auxiliary of its own, pull in do/does/did: What do you want? She doesn't smoke. The wrapped-question machine: key phrase + (wh/if) + subject + verb — no do/does/did inside; when tense is needed the main verb itself changes: Do you know what this word means? I wonder where he went. A wrapped yes/no question takes if or whether: Can you tell me if she is at home? The whether…or not pair stresses 'will he come or not'. Recognise the two machines separately and half your question mistakes are over.",
            hi: "सीधे प्रश्न की मशीन: (wh) + auxiliary + subject + verb — Where do you live? Is she coming? Did he call? मुख्य क्रिया की अपनी auxiliary न हो तो do/does/did बुलाना पड़ता है: What do you want? She doesn't smoke। लिपटे प्रश्न की मशीन: चाबी-वाक्यांश + (wh/if) + subject + verb — भीतर do/does/did नहीं; काल चाहिए तो मुख्य क्रिया खुद बदलती है: Do you know what this word means? I wonder where he went। लिपटा yes/no प्रश्न if या whether लेता है: Can you tell me if she is at home? whether…or not जोड़ी 'आएगा-ही-आएगा या नहीं' का बल देती है। दोनों मशीनें अलग-अलग पहचान लो — आधी प्रश्न-गलतियाँ खत्म।",
          },
          examples: [
            { wrong: "Can you tell me where is the station?", right: "Can you tell me where the station is?", note: { bn: "মোড়া প্রশ্নে ভেতরের is কর্তার পরেই থাকে — উপরে ওঠে না।", en: "In a wrapped question the inner is stays after the subject — it does not climb up.", hi: "लिपटे प्रश्न में भीतर का is subject के बाद ही रहता है — ऊपर नहीं चढ़ता।" } },
            { wrong: "Do you know what does this word mean?", right: "Do you know what this word means?", note: { bn: "ভেতরের প্রশ্নে do নেই; ক্রিয়া means-এ নিজেই -s বসে।", en: "No do inside the inner question; the verb itself takes -s in means.", hi: "भीतरी प्रश्न में do नहीं; क्रिया means में ही -s बैठती है।" } },
            { wrong: "I wonder where did he go last night.", right: "I wonder where he went last night.", note: { bn: "did-এর অতীত-কাজ went একাই করে দেয়; ভেতরে দ্বিগুণ প্রশ্ন-যন্ত্র হয় না।", en: "went does the past work alone; no double question machinery inside.", hi: "went अकेला ही अतीत का काम कर देता है; भीतर दोहरी प्रश्न-मशीन नहीं।" } },
            { wrong: "Can you tell me she is at home?", right: "Can you tell me if she is at home?", note: { bn: "yes/no প্রশ্ন মোড়া হলে if/whether লাগবেই — নইলে দুই স্টেটমেন্ট জুড়ে অর্থ ভেঙে যায়।", en: "A wrapped yes/no question needs if/whether — otherwise the two statements clash.", hi: "लिपटे yes/no प्रश्न में if/whether ज़रूरी — वरना दो statements टकराते हैं।" } },
            { wrong: "Where you are going?", right: "Where are you going?", note: { bn: "এটা সোজা প্রশ্ন — auxiliary are কর্তার আগে; বাংলা ক্রম 'তুমি কোথায় যাচ্ছ' এখানে ফাঁদ।", en: "This is a direct question — auxiliary are goes before you; the Bengali word order is the trap.", hi: "यह सीधा प्रश्न है — auxiliary are subject से पहले; हिंदी/बांग्ला क्रम यहाँ जाल है।" } },
          ],
        },
        {
          heading: {
            bn: "আভাস শব্দ — মোড়া প্রশ্নের চাবিফ্রেজ মুখস্থ",
            en: "Signal words — memorise the key phrases of wrapped questions",
            hi: "संकेत शब्द — लिपटे प्रश्नों के चाबी-वाक्यांश याद करें",
          },
          body: {
            bn: "এই ফ্রেজগুলো দেখলেই ভেতরের অংশ স্টেটমেন্ট-ক্রমে যাবে — রিফ্লেক্স বানিয়ে ফেলুন: Can/Could you tell me…, Do you know…, I wonder…, I'm not sure…, I don't know…, Do you have any idea…, Could I ask…, I'd like to know…, Tell me…, Nobody knows…। যেমন: Do you know when the train leaves? I'm not sure why she left. I'd like to know how much it costs। দুটো সূক্ষ্ম বিষয়: (১) whether-কে or not-এর সাথে জোড়া লাগানো যায় — I wonder whether he will come or not (if…or not কথ্যে চললেও লেখায় whether নিরাপদ); (২) মোড়া অংশ স্টেটমেন্টে পরিণত হলে বাক্য শেষে প্রশ্ন-চিহ্ন পড়ে না — I wonder where he lives. — বিন্দু দিয়ে শেষ, কারণ পুরো বাক্যটাই স্টেটমেন্ট।",
            en: "See any of these phrases and the inner part drops into statement order — build the reflex: Can/Could you tell me…, Do you know…, I wonder…, I'm not sure…, I don't know…, Do you have any idea…, Could I ask…, I'd like to know…, Tell me…, Nobody knows…. For example: Do you know when the train leaves? I'm not sure why she left. I'd like to know how much it costs. Two fine points: (1) whether can pair with or not — I wonder whether he will come or not (if…or not passes in speech, but whether is safer in writing); (2) once the wrapped part becomes a statement, the sentence ends with a full stop — I wonder where he lives. — a dot, because the whole sentence is a statement.",
            hi: "इन वाक्यांशों को देखते ही भीतर का हिस्सा statement-क्रम में चला जाएगा — reflex बना लें: Can/Could you tell me…, Do you know…, I wonder…, I'm not sure…, I don't know…, Do you have any idea…, Could I ask…, I'd like to know…, Tell me…, Nobody knows…। जैसे: Do you know when the train leaves? I'm not sure why she left. I'd like to know how much it costs। दो सूक्ष्म बातें: (1) whether को or not के साथ जोड़ा जा सकता है — I wonder whether he will come or not (if…or not बोलचाल में चलता है, पर लिखित में whether सुरक्षित); (2) लिपटा हिस्सा statement बन जाए तो वाक्य पूर्ण-विराम पर खत्म — I wonder where he lives. — क्योंकि पूरा वाक्य statement है।",
          },
          examples: [
            { wrong: "Tell me where do you live.", right: "Tell me where you live.", note: { bn: "Tell me-ও মোড়া প্রশ্নের চাবিফ্রেজ — ভেতরে do বাদ।", en: "Tell me is also a wrapped-question key phrase — no do inside.", hi: "Tell me भी लिपटे प्रश्न का चाबी-वाक्यांश है — भीतर do नहीं।" } },
            { wrong: "I'm not sure how much does it cost.", right: "I'm not sure how much it costs.", note: { bn: "I'm not sure = অনিশ্চয়তার চাবি → ভেতরে স্টেটমেন্ট-ক্রম।", en: "I'm not sure is an uncertainty key → statement order inside.", hi: "I'm not sure = अनिश्चय की चाबी → भीतर statement-क्रम।" } },
            { wrong: "Do you have any idea when will he arrive?", right: "Do you have any idea when he will arrive?", note: { bn: "will ভেতরে কর্তার পরেই বসে — উপরে ওঠে না।", en: "will stays after the subject inside — it does not climb.", hi: "will भीतर subject के बाद ही रहता है — ऊपर नहीं चढ़ता।" } },
            { wrong: "I wonder he will come or not.", right: "I wonder whether he will come or not.", note: { bn: "or not-এর সঙ্গী whether — if লিখিত ভাষায় or not-এর আগে বসে না।", en: "or not needs whether as its partner — if does not sit before or not in writing.", hi: "or not का साथी whether है — लिखित भाषा में if, or not से पहले नहीं आता।" } },
            { wrong: "He asked me what time is it.", right: "He asked me what time it was.", note: { bn: "রিপোর্ট করা প্রশ্নেও স্টেটমেন্ট-ক্রম, আর কাল এক ধাপ পিছিয়ে যায় — is → was।", en: "Reported questions keep statement order, and the tense steps back — is → was.", hi: "रिपोर्ट किए प्रश्नों में भी statement-क्रम, और काल एक कदम पीछे — is → was।" } },
          ],
        },
        {
          heading: {
            bn: "নেগেটিভ প্রশ্ন — Don't you like it? আর yes/no-র ফাঁদ",
            en: "Negative questions — Don't you like it? and the yes/no trap",
            hi: "नकारात्मक प्रश्न — Don't you like it? और yes/no का जाल",
          },
          body: {
            bn: "auxiliary-র সাথে not জুড়লে প্রশ্ন নেগেটিভ হয়, আর দুই মেজাজে ওঠে: বিস্ময় বা নিশ্চিত করা — Oh, don't you like biryani? (সত্যিই নাকি!), আর প্রস্তাব-আমন্ত্রণ — Why don't we take a taxi? Won't you sit down?। আসল পরীক্ষা উত্তরে: ইংরেজিতে yes/no মানে তোমার সম্মতি-অসম্মতি, প্রশ্নের সত্য-মিথ্যা নয়। Don't you like it? — পছন্দ করলে বলবেন Yes, I do; পছন্দ না করলে No, I don't। বাংলার 'হ্যাঁ, পছন্দ করি না'-এর ভাবে বললে (No, I do) ইংরেজিভাষী উল্টো অর্থ নেবে। সূত্র: যেটা সত্যি সেটাই yes/no-এর জায়গায়, তারপর ক্রিয়া মিলান — yes-এর সাথে পজিটিভ, no-এর সাথে নেগেটিভ ক্রিয়া।",
            en: "Join not to the auxiliary and the question turns negative, in two moods: surprise or confirmation — Oh, don't you like biryani? (really, you don't?), and offers or suggestions — Why don't we take a taxi? Won't you sit down? The real test is the answer: in English yes/no expresses your agreement, not the truth of the question. Don't you like it? — if you do like it, say Yes, I do; if you don't, say No, I don't. Answering with the Bengali 'yes, I don't like it' feeling (No, I do) will be read as the opposite. Formula: put the truth in the yes/no slot, then match the verb — a positive verb with yes, a negative verb with no.",
            hi: "auxiliary के साथ not जोड़ो तो प्रश्न नकारात्मक बन जाता है, दो मूड में: आश्चर्य या पुष्टि — Oh, don't you like biryani? (सच में नहीं?), और प्रस्ताव-निमंत्रण — Why don't we take a taxi? Won't you sit down?। असली परीक्षा उत्तर में: अंग्रेज़ी में yes/no आपकी सहमति बताता है, प्रश्न का सत्य-असत्य नहीं। Don't you like it? — पसंद है तो Yes, I do; पसंद नहीं तो No, I don't। हिंदी/बांग्ला के 'हाँ, पसंद नहीं' वाले भाव से (No, I do) अंग्रेज़ी-भाषी उलटा अर्थ लेगा। सूत्र: जो सच है वही yes/no की जगह पर, फिर क्रिया मिलाओ — yes के साथ positive, no के साथ negative क्रिया।",
          },
          examples: [
            { wrong: "Don't you like coffee? — No, I do.", right: "Don't you like coffee? — Yes, I do.", note: { bn: "'পছন্দ করি' সত্যি হলে yes; no-এর পরে do বসলে দুই অর্ধ টক্কর খায়।", en: "If 'I like it' is the truth, the answer is yes; no followed by do clashes with itself.", hi: "'पसंद करता हूँ' सच है तो yes; no के बाद do आने पर दोनों हिस्से टकराते हैं।" } },
            { wrong: "Isn't you coming with us?", right: "Aren't you coming with us?", note: { bn: "you-র সাথে are → aren't; isn't শুধু he/she/it।", en: "With you the be-form is are → aren't; isn't only goes with he/she/it.", hi: "you के साथ be-form are है → aren't; isn't केवल he/she/it के साथ।" } },
            { wrong: "Why you didn't call me?", right: "Why didn't you call me?", note: { bn: "সোজা wh-প্রশ্নে ক্রম wh + auxiliary + subject — didn't আগে।", en: "A direct wh-question runs wh + auxiliary + subject — didn't comes first.", hi: "सीधे wh-प्रश्न का क्रम wh + auxiliary + subject — didn't पहले।" } },
            { wrong: "Doesn't he likes tea?", right: "Doesn't he like tea?", note: { bn: "does/doesn't-এর পরে ক্রিয়া base রূপ — like; -s নেই।", en: "After does/doesn't the verb stays in its base form — like, with no -s.", hi: "does/doesn't के बाद क्रिया base रूप में — like, -s नहीं।" } },
            { wrong: "Haven't you finish your work yet?", right: "Haven't you finished your work yet?", note: { bn: "have/haven't-এর পরে V3 — finished; নেগেটিভ প্রশ্নেও গঠন এক।", en: "After have/haven't comes V3 — finished; the structure is the same in negative questions.", hi: "have/haven't के बाद V3 — finished; नकारात्मक प्रश्न में भी ढाँचा वही।" } },
          ],
        },
        {
          heading: {
            bn: "Subject প্রশ্ন — Who called you? auxiliary-হীন প্রশ্ন",
            en: "Subject questions — Who called you? Questions without an auxiliary",
            hi: "Subject प्रश्न — Who called you? auxiliary-रहित प्रश्न",
          },
          body: {
            bn: "যখন wh-শব্দ নিজেই কর্তা, auxiliary লাগে না — প্রশ্নটা স্টেটমেন্টের মতোই সোজা: Who called you? What happened? Which team won? How many people came? তুলনা করুন: Who did you call? — এখানে who কর্তা নয়, কর্ম (তুমি কাকে ডাকলে); কর্তা you, তাই did দরকার। পরীক্ষা একটাই: wh-শব্দের জায়গায় কর্তা বসিয়ে বাক্যটা পড়ুন — He called you সোজা খাড়া হলে প্রশ্ন Who called you?; You called him হলে প্রশ্নটা কর্ম-প্রশ্ন Who did you call?। What happened to you?-জাতীয় প্রশ্নে did ঢুকিয়ে দেওয়াই মধ্যম স্তরের সবচেয়ে পরিচিত ভুল — মনে রাখুন, কর্তা-প্রশ্ন বাংলার 'কে ডাকল?'-এর মতোই সোজা।",
            en: "When the wh-word is itself the subject, no auxiliary is needed — the question stands as straight as a statement: Who called you? What happened? Which team won? How many people came? Compare: Who did you call? — here who is not the subject but the object (whom did you call); the subject is you, so did is needed. One test: put a subject in the wh-slot and read the sentence — if He called you stands straight, the question is Who called you?; if You called him, the question is the object question Who did you call?. Pushing did into What happened to you?-type questions is the classic intermediate mistake — remember, subject questions are as bare as the Bengali 'কে ডাকল?'.",
            hi: "जब wh-शब्द खुद subject हो, auxiliary नहीं लगता — प्रश्न statement जैसा सीधा खड़ा होता है: Who called you? What happened? Which team won? How many people came? तुलना करें: Who did you call? — यहाँ who subject नहीं, object है (आपने किसे बुलाया); subject you है, इसलिए did चाहिए। एक परीक्षा: wh-जगह पर subject रखकर वाक्य पढ़ें — He called you सीधा खड़ा हो जाए तो प्रश्न Who called you?; You called him हो तो प्रश्न object-प्रश्न Who did you call?। What happened to you?-जैसे प्रश्नों में did घुसेड़ना मध्यम स्तर की सबसे जानी-पहचानी गलती है — याद रखें, subject-प्रश्न हिंदी के 'किसने बुलाया?' जितना ही सीधा है।",
          },
          examples: [
            { wrong: "Who did call you last night?", right: "Who called you last night?", note: { bn: "who কর্তা → auxiliary নেই; 'Who did call…?' কেবল জোর-দেওয়ার বিরল রূপ।", en: "who is the subject → no auxiliary; 'Who did call…?' is a rare emphatic form only.", hi: "who subject है → auxiliary नहीं; 'Who did call…?' केवल दुर्लभ ज़ोर देने का रूप।" } },
            { wrong: "Who you met at the fair?", right: "Who did you meet at the fair?", note: { bn: "এখানে who কর্ম — কর্তা you, তাই did + base রূপ meet।", en: "Here who is the object — the subject is you, so did + base form meet.", hi: "यहाँ who object है — subject you, इसलिए did + base रूप meet।" } },
            { wrong: "What did happen to your phone?", right: "What happened to your phone?", note: { bn: "what কর্তা → happened একাই; did বসালে 'সত্যিই কী ঘটল!' জোর-প্রশ্ন শোনায়।", en: "what is the subject → happened alone; adding did sounds like an indignant 'what DID happen!'.", hi: "what subject है → happened अकेला; did जोड़ने पर गुस्से वाला 'आख़िर हुआ क्या!' लगता है।" } },
            { wrong: "Which team did win the match?", right: "Which team won the match?", note: { bn: "which team নিজেই কর্তা → সোজা V2 — won।", en: "which team is itself the subject → plain V2 — won.", hi: "which team खुद subject है → सीधा V2 — won।" } },
            { wrong: "How many students did come to class today?", right: "How many students came to class today?", note: { bn: "how many students = গোটা কর্তা-গোছানো অংশ → auxiliary লাগে না।", en: "how many students is the whole subject phrase → no auxiliary.", hi: "how many students पूरा subject-वाक्यांश है → auxiliary नहीं लगता।" } },
          ],
        },
        {
          heading: {
            bn: "প্রশ্নের শেষে প্রিপজিশন আর ভদ্রতার সিঁড়ি",
            en: "Prepositions at the end of questions, and the politeness ladder",
            hi: "प्रश्न के अंत में preposition और विनम्रता की सीढ़ी",
          },
          body: {
            bn: "কথ্য ইংরেজিতে প্রিপজিশন প্রশ্নের একদম শেষে বসে — What are you looking at? Who did you talk to? Where do you come from? What is this made of? — এটাই স্বাভাবিক ভাষা; 'At what are you looking?'-এর মতো সামনে তোলা বইয়ের পুরনো ভাষা, কথায় আজীবন অদ্ভুত শোনায়। ভদ্রতার সিঁড়ি নিচ থেকে উপরে ক্রমেই খাড়া হয়: Can you help me? → Could you help me? → Would you mind helping me? (mind-এর পরে -ing!) → Do you think you could help me? → I was wondering if you could help me.। অফিসের ইমেইলে Could you… আর Would you mind… দুটোই নিরাপদ ডিফল্ট; অপরিচিতকে রাস্তায় কিছু জিজ্ঞেস করতে Excuse me + Could you tell me… সবচেয়ে মানানসই।",
            en: "In spoken English the preposition sits right at the end of the question — What are you looking at? Who did you talk to? Where do you come from? What is this made of? — that is normal language; pushing it up front (At what are you looking?) is bookish old style and sounds odd in speech for life. The politeness ladder climbs steeper from bottom to top: Can you help me? → Could you help me? → Would you mind helping me? (-ing after mind!) → Do you think you could help me? → I was wondering if you could help me. In office email, Could you… and Would you mind… are both safe defaults; to a stranger in the street, Excuse me + Could you tell me… fits best.",
            hi: "बोलचाल की अंग्रेज़ी में preposition प्रश्न के एकदम अंत में बैठता है — What are you looking at? Who did you talk to? Where do you come from? What is this made of? — यही स्वाभाविक भाषा है; इसे आगे खींचना (At what are you looking?) किताबी पुराना अंदाज़ है, बोली में हमेशा अजीब लगता है। विनम्रता की सीढ़ी नीचे से ऊपर और खड़ी होती जाती है: Can you help me? → Could you help me? → Would you mind helping me? (mind के बाद -ing!) → Do you think you could help me? → I was wondering if you could help me.। ऑफिस ईमेल में Could you… और Would you mind… दोनों सुरक्षित default; रास्ते में अनजान से पूछना हो तो Excuse me + Could you tell me… सबसे उपयुक्त।",
          },
          examples: [
            { wrong: "About what are you talking?", right: "What are you talking about?", note: { bn: "কথ্য ইংরেজিতে প্রিপজিশন শেষে; সামনে তোলা অতি-পুরনো ভাষা।", en: "In spoken English the preposition goes last; fronting it is very old-fashioned.", hi: "बोलचाल में preposition अंत में; आगे लाना बहुत पुराना अंदाज़।" } },
            { wrong: "For what you are waiting?", right: "What are you waiting for?", note: { bn: "দুই ভুল একসাথে — প্রশ্নে auxiliary আগে (are you), আর প্রিপজিশন শেষে।", en: "Two fixes at once — auxiliary first in the question (are you), preposition last.", hi: "एक साथ दो सुधार — प्रश्न में auxiliary पहले (are you), preposition अंत में।" } },
            { wrong: "Would you mind to open the window?", right: "Would you mind opening the window?", note: { bn: "mind-এর পরে সবসময় -ing — to-infinitive নয়।", en: "After mind always comes -ing — never a to-infinitive.", hi: "mind के बाद हमेशा -ing — to-infinitive कभी नहीं।" } },
            { wrong: "Can you tell me from where did you buy this?", right: "Can you tell me where you bought this?", note: { bn: "মোড়া প্রশ্নে প্রিপজিশন উঠিয়ে আনাও নয়, did-ও নয় — সোজা where you bought this।", en: "In a wrapped question neither lift the preposition nor add did — plain where you bought this.", hi: "लिपटे प्रश्न में preposition ऊपर नहीं, did भी नहीं — सीधा where you bought this।" } },
            { wrong: "Give me your pen.", right: "Could I borrow your pen, please?", note: { bn: "হুকুম নয়, নম্র অনুরোধ — Could I borrow…? ইংরেজির প্রিয় প্যাটার্ন।", en: "Not a command but a polite request — Could I borrow…? is the natural English pattern.", hi: "आदेश नहीं, नम्र अनुरोध — Could I borrow…? अंग्रेज़ी का स्वाभाविक पैटर्न।" } },
          ],
        },
        {
          heading: {
            bn: "বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "Common mistakes by Bengali speakers",
            hi: "बांग्लाभाषी विद्यार्थियों की सामान्य गलतियाँ",
          },
          body: {
            bn: "ফাঁদ তিনটে। এক: বাংলা প্রশ্নে wh-শব্দ প্রায়ই মাঝখানে থাকে — 'তুমি কোথায় যাবে?', 'সে কী চায়?' — তাই শিক্ষার্থীরা সোজা প্রশ্নেও কর্তা আগে রেখে দেন: 'Where you are going?', 'What you want?' — সোজা প্রশ্নে ক্রম wh + auxiliary + subject মনে রাখুন। দুই: বাংলার 'কি'-এর ভাব — 'তুমি জানো কি সে আসবে?' — মোড়া প্রশ্নে if/whether হয়, আর ভেতরে স্টেটমেন্ট-ক্রম; 'Do you know will he come?' নয়। তিন: 'What is your good name?' — ইংরেজিতে good name নামক কিছু নেই; বাংলা 'ভালো নাম'-এর হুবহু অনুবাদ এই বিখ্যাত ভুল।",
            en: "Three traps. One: Bengali often keeps the wh-word mid-sentence — 'তুমি কোথায় যাবে?', 'সে কী চায়?' — so learners leave the subject first even in direct questions: 'Where you are going?', 'What you want?' — in direct questions keep the order wh + auxiliary + subject. Two: the Bengali 'কি' feeling — 'তুমি জানো কি সে আসবে?' — becomes if/whether in a wrapped question, with statement order inside; not 'Do you know will he come?'. Three: 'What is your good name?' — there is no such thing as a good name in English; it is a word-for-word translation of the Bengali 'ভালো নাম'.",
            hi: "तीन जाल। एक: हिंदी/बांग्ला प्रश्नों में wh-शब्द अक्सर बीच में रहता है — 'तुम कहाँ जाओगे?', 'वह क्या चाहता है?' — इसलिए विद्यार्थी सीधे प्रश्न में भी subject पहले छोड़ देते हैं: 'Where you are going?', 'What you want?' — सीधे प्रश्न में क्रम wh + auxiliary + subject रखें। दो: हिंदी के 'क्या' का भाव — 'क्या तुम्हें पता है वह आएगा?' — लिपटे प्रश्न में if/whether बनता है, और भीतर statement-क्रम; 'Do you know will he come?' नहीं। तीन: 'What is your good name?' — अंग्रेज़ी में good name नाम की कोई चीज़ नहीं; यह 'शुभ नाम' का शब्दशः अनुवाद है।",
          },
          examples: [
            { wrong: "What you want to eat?", right: "What do you want to eat?", note: { bn: "সোজা প্রশ্ন → do লাগবেই; বাংলা ক্রম 'কী খেতে চাও' হুবহু টানলে এই ভুল।", en: "A direct question → do is compulsory; pulling the Bengali order across creates this error.", hi: "सीधा प्रश्न → do ज़रूरी; हिंदी क्रम खींचने से यही गलती।" } },
            { wrong: "Where you live?", right: "Where do you live?", note: { bn: "present simple প্রশ্নে do/does; 'Where you live' স্টেটমেন্ট-ক্রম।", en: "Present-simple questions need do/does; 'Where you live' is statement order.", hi: "present simple प्रश्न में do/does; 'Where you live' statement-क्रम है।" } },
            { wrong: "Do you know where does he work?", right: "Do you know where he works?", note: { bn: "মোড়া প্রশ্নে does বাদ — works-এই -s আছে।", en: "Drop does in the wrapped question — works already carries the -s.", hi: "लिपटे प्रश्न में does हटाओ — works में ही -s है।" } },
            { wrong: "What is your good name, please?", right: "What is your name, please?", note: { bn: "'good name' বাংলা-ইংরেজি; ইংরেজিভাষীর কাছে অর্থহীন শোনায়।", en: "'Good name' is Bengali-English; to a native speaker it sounds meaningless.", hi: "'good name' बांग्ला-अंग्रेज़ी है; native को अर्थहीन लगती है।" } },
            { wrong: "You are coming to the party?", right: "Are you coming to the party?", note: { bn: "সুর দিয়ে প্রশ্ন করা কথায় চললেও লিখিত-পরীক্ষায় inversion বাধ্যতামূলক।", en: "Rising-intonation questions pass in speech, but writing and exams demand the inversion.", hi: "सुर से पूछना बोलचाल में चलता है, पर लिखित-परीक्षा में inversion अनिवार्य।" } },
          ],
        },
        {
          heading: {
            bn: "ছোট গল্পে দেখা যাক",
            en: "A short story to see it all",
            hi: "एक छोटी कहानी में सब देखें",
          },
          body: {
            bn: "প্রথমবার লন্ডনে, টিউব স্টেশনে রিয়া এক কর্মীর কাছে গিয়ে বলল, 'Excuse me, could you tell me where the Northern line is?' কর্মী হাসলেন, 'Of course — do you know which platform you need?' রিয়া মাথা নাড়ল না: 'That's the problem, I don't. And I'm not sure how the Oyster card works either. Could you tell me where I can buy one?' — 'The machine over there. Don't worry, everyone gets lost on their first day!' পাশে দাঁড়ানো কিশোর বন্ধুকে জিজ্ঞেস করল, 'Who won the match last night? I fell asleep.' — খেয়াল করুন: মোড়া প্রশ্নে স্টেটমেন্ট-ক্রম (where the Northern line is, which platform you need, how the Oyster card works, where I can buy one), ভদ্রতার সিঁড়ি (Excuse me, could you tell me…), নেগেটিভ স্টেটমেন্ট (I don't), আর subject প্রশ্নে auxiliary-নেই (Who won the match?)। এক নজরে: (১) ভেতরের প্রশ্ন = স্টেটমেন্ট-ক্রম, do/does/did নেই; (২) yes/no মোড়া হলে if/whether; (৩) নেগেটিভ প্রশ্নের উত্তরে yes/no = সম্মতি-অসম্মতি, ক্রিয়া মিলবে; (৪) wh = কর্তা হলে auxiliary নেই; (৫) প্রিপজিশন প্রশ্নের শেষে; (৬) ভদ্রতা: Can → Could → Would you mind + -ing → I was wondering if…।",
            en: "For the first time in London, at a tube station, Riya walked up to a member of staff and said, 'Excuse me, could you tell me where the Northern line is?' The staff member smiled, 'Of course — do you know which platform you need?' Riya shook her head: 'That's the problem, I don't. And I'm not sure how the Oyster card works either. Could you tell me where I can buy one?' — 'The machine over there. Don't worry, everyone gets lost on their first day!' A teenager standing nearby asked his friend, 'Who won the match last night? I fell asleep.' — notice: statement order inside wrapped questions (where the Northern line is, which platform you need, how the Oyster card works, where I can buy one), the politeness ladder (Excuse me, could you tell me…), a negative statement (I don't), and the auxiliary-free subject question (Who won the match?). At a glance: (1) an inner question = statement order, no do/does/did; (2) a wrapped yes/no takes if/whether; (3) yes/no answers to negative questions follow your agreement, with a matching verb; (4) if the wh-word is the subject, no auxiliary; (5) prepositions stay at the end; (6) politeness: Can → Could → Would you mind + -ing → I was wondering if….",
            hi: "लंदन में पहली बार, ट्यूब स्टेशन पर रिया एक कर्मचारी के पास गई, 'Excuse me, could you tell me where the Northern line is?' कर्मचारी मुस्कुराए, 'Of course — do you know which platform you need?' रिया ने सिर हिलाया: 'That's the problem, I don't. And I'm not sure how the Oyster card works either. Could you tell me where I can buy one?' — 'The machine over there. Don't worry, everyone gets lost on their first day!' पास खड़ा किशोर दोस्त से पूछा, 'Who won the match last night? I fell asleep.' — देखें: लिपटे प्रश्नों में statement-क्रम (where the Northern line is, which platform you need, how the Oyster card works, where I can buy one), विनम्रता की सीढ़ी (Excuse me, could you tell me…), नकारात्मक statement (I don't), और auxiliary-रहित subject प्रश्न (Who won the match?)। एक नज़र में: (1) भीतरी प्रश्न = statement-क्रम, do/does/did नहीं; (2) लिपटा yes/no → if/whether; (3) नकारात्मक प्रश्न के उत्तर में yes/no = सहमति, क्रिया मेल खाएगी; (4) wh = subject हो तो auxiliary नहीं; (5) preposition अंत में; (6) विनम्रता: Can → Could → Would you mind + -ing → I was wondering if…।",
          },
          examples: [
            { wrong: "Could you tell me where is the Northern line?", right: "Could you tell me where the Northern line is?", note: { bn: "মোড়া প্রশ্নে ভেতরের is শেষে।", en: "In a wrapped question the inner is goes last.", hi: "लिपटे प्रश्न में भीतर का is अंत में।" } },
            { wrong: "Do you know which platform do I need?", right: "Do you know which platform I need?", note: { bn: "ভেতরে do আসে না — স্টেটমেন্ট-ক্রম।", en: "No do inside — statement order.", hi: "भीतर do नहीं — statement-क्रम।" } },
            { wrong: "Who did win the match?", right: "Who won the match?", note: { bn: "who কর্তা → auxiliary নেই।", en: "who is the subject → no auxiliary.", hi: "who subject है → auxiliary नहीं।" } },
            { wrong: "I'm not sure how does the Oyster card work.", right: "I'm not sure how the Oyster card works.", note: { bn: "I'm not sure-এর পরে স্টেটমেন্ট-ক্রম + third-person -s (works)।", en: "After I'm not sure: statement order plus the third-person -s (works).", hi: "I'm not sure के बाद statement-क्रम + third-person -s (works)।" } },
          ],
        },
      ],
      tips: [
        { bn: "সোজা প্রশ্নের ক্রম: wh + auxiliary + subject + verb — Where do you live?", en: "Direct-question order: wh + auxiliary + subject + verb — Where do you live?", hi: "सीधे प्रश्न का क्रम: wh + auxiliary + subject + verb — Where do you live?" },
        { bn: "মোড়া প্রশ্নের ক্রম: চাবিফ্রেজ + wh/if + subject + verb — Do you know where he lives? ভেতরে do/does/did নেই।", en: "Wrapped-question order: key phrase + wh/if + subject + verb — Do you know where he lives? No do/does/did inside.", hi: "लिपटे प्रश्न का क्रम: चाबी-वाक्यांश + wh/if + subject + verb — Do you know where he lives? भीतर do/does/did नहीं।" },
        { bn: "চাবিফ্রেজ মুখস্থ: Can you tell me…, Do you know…, I wonder…, I'm not sure…, I'd like to know…, Nobody knows…", en: "Memorise the key phrases: Can you tell me…, Do you know…, I wonder…, I'm not sure…, I'd like to know…, Nobody knows…", hi: "चाबी-वाक्यांश याद करें: Can you tell me…, Do you know…, I wonder…, I'm not sure…, I'd like to know…, Nobody knows…" },
        { bn: "yes/no প্রশ্ন মোড়া হলে if/whether; or not-এর জুটি whether।", en: "A wrapped yes/no question takes if/whether; or not pairs with whether.", hi: "लिपटा yes/no प्रश्न if/whether लेता है; or not की जोड़ी whether।" },
        { bn: "নেগেটিভ প্রশ্নের উত্তর: সত্যি হলে Yes + পজিটিভ ক্রিয়া, মিথ্যা হলে No + নেগেটিভ ক্রিয়া।", en: "Answering negative questions: true → Yes + positive verb, false → No + negative verb.", hi: "नकारात्मक प्रश्न का उत्तर: सच → Yes + positive क्रिया, असत्य → No + negative क्रिया।" },
        { bn: "Who/What/Which কর্তা হলে auxiliary নেই — Who called you?; কর্ম হলে did আসবে — Who did you call?", en: "If Who/What/Which is the subject there is no auxiliary — Who called you?; as an object did appears — Who did you call?", hi: "Who/What/Which subject हो तो auxiliary नहीं — Who called you?; object हो तो did आता है — Who did you call?" },
        { bn: "প্রিপজিশন প্রশ্নের শেষে — What are you looking at? Who did you talk to?", en: "Prepositions stay at the end of questions — What are you looking at? Who did you talk to?", hi: "preposition प्रश्न के अंत में — What are you looking at? Who did you talk to?" },
        { bn: "Would you mind + -ing — mind-এর পরে to নয়।", en: "Would you mind + -ing — never to after mind.", hi: "Would you mind + -ing — mind के बाद to नहीं।" },
        { bn: "ভদ্রতার সিঁড়ি: Can → Could → Would you mind → I was wondering if you could।", en: "The politeness ladder: Can → Could → Would you mind → I was wondering if you could.", hi: "विनम्रता की सीढ़ी: Can → Could → Would you mind → I was wondering if you could।" },
        { bn: "ইংরেজিতে 'good name' নেই; আর লিখিত প্রশ্নে 'You are coming?'-স্টাইল নয় — inversion লাগবেই।", en: "There is no 'good name' in English; and in writing never 'You are coming?' — the inversion is compulsory.", hi: "अंग्रेज़ी में 'good name' नहीं; और लिखित प्रश्न में 'You are coming?' नहीं — inversion अनिवार्य।" },
      ],
      quiz: [
        { question: "Can you tell me where ___?", options: ["the station is", "is the station", "does the station be", "the station does be"], answer: 0, explanation: { bn: "মোড়া প্রশ্নে ভেতরে স্টেটমেন্ট-ক্রম — the station is।", en: "Inside a wrapped question the order is statement — the station is.", hi: "लिपटे प्रश्न में भीतर statement-क्रम — the station is।" } },
        { question: "Do you know what ___?", options: ["does it mean", "it means", "means it", "is meaning it"], answer: 1, explanation: { bn: "ভেতরে do নেই, inversion নেই — it means।", en: "No do and no inversion inside — it means.", hi: "भीतर do नहीं, inversion नहीं — it means।" } },
        { question: "___ called you last night?", options: ["Who did", "Whom did", "Who", "Who does"], answer: 2, explanation: { bn: "who কর্তা → auxiliary ছাড়াই ক্রিয়া — Who called you?", en: "who is the subject → the verb stands without an auxiliary — Who called you?", hi: "who subject है → auxiliary के बिना क्रिया — Who called you?" } },
        { question: "Who ___ at the party? — Rina. I met her near the stage.", options: ["you met", "did you meet", "met you", "you did meet"], answer: 1, explanation: { bn: "who এখানে কর্ম, কর্তা you → did + meet।", en: "Here who is the object and you the subject → did + meet.", hi: "यहाँ who object, subject you → did + meet।" } },
        { question: "What are you looking ___?", options: ["at", "for at", "on", "about"], answer: 0, explanation: { bn: "look at ফ্রেজ-ক্রিয়া — প্রিপজিশন প্রশ্নের শেষে।", en: "look at is a phrasal verb — the preposition ends the question.", hi: "look at phrasal verb है — preposition प्रश्न के अंत में।" } },
        { question: "Don't you like mangoes? — ___", options: ["Yes, I don't.", "No, I do.", "Yes, I do.", "No, I like."], answer: 2, explanation: { bn: "পছন্দ করলে Yes + পজিটিভ ক্রিয়া (Yes, I do); yes-এর সাথে নেগেটিভ ক্রিয়া টক্কর খায়।", en: "If you like them: Yes + positive verb (Yes, I do); yes with a negative verb clashes.", hi: "पसंद हैं तो Yes + positive क्रिया (Yes, I do); yes के साथ negative क्रिया टकराती है।" } },
        { question: "I wonder if ___ help me with this form.", options: ["could you", "you could", "you can could", "could"], answer: 1, explanation: { bn: "if-এর পরে স্টেটমেন্ট-ক্রম — you could।", en: "After if comes statement order — you could.", hi: "if के बाद statement-क्रम — you could।" } },
        { question: "___ you mind opening the window?", options: ["Do", "Would", "Are", "Could"], answer: 1, explanation: { bn: "ভদ্র অনুরোধের প্যাটার্ন Would you mind + -ing।", en: "The polite request pattern is Would you mind + -ing.", hi: "विनम्र अनुरोध का पैटर्न Would you mind + -ing।" } },
        { question: "Which sentence is correct?", options: ["He asked me where did I live.", "He asked me where I lived.", "He asked me where do I live.", "He asked me where I do live."], answer: 1, explanation: { bn: "রিপোর্ট করা প্রশ্নে স্টেটমেন্ট-ক্রম + কাল পিছায় (do → did → lived)।", en: "Reported questions take statement order and a stepped-back tense (do → did → lived).", hi: "रिपोर्टेड प्रश्न में statement-क्रम और काल पीछे (do → did → lived)।" } },
        { question: "Why ___ so late today?", options: ["you are", "you were being", "are you", "do you are"], answer: 2, explanation: { bn: "সোজা wh-প্রশ্নে wh + auxiliary + subject — Why are you…?", en: "A direct wh-question runs wh + auxiliary + subject — Why are you…?", hi: "सीधे wh-प्रश्न में wh + auxiliary + subject — Why are you…?" } },
      ],
    },
  },

  /* ── 2. Passive Voice ──────────────────────────────────────────────── */
  {
    topic: "Passive Voice",
    level: "intermediate",
    title: "Passive Voice (Intermediate)",
    unit: 0,
    data: {
      title: {
        bn: "কর্ম-বাচ্য: প্যাসিভ ভয়েস (মধ্যম স্তর)",
        en: "Passive Voice (Intermediate)",
        hi: "कर्म वाच्य: पैसिव वॉइस (मध्यम स्तर)",
      },
      intro: {
        bn: "কে করল তা জানা দরকার নেই, শুধু কী হলো সেটাই মুখ্য — এখান থেকেই প্যাসিভের জন্ম। এই পাঠে ঢোকার আগে be-ক্রিয়ার রূপ (am/is/are, was/were, being, been) আর V1/V2/V3-এর ধারণা (beginner পাঠগুলো) পাকা থাকা দরকার; শুরু-স্তরের Passive Voice পাঠে তিন কালের বেসিক প্যাসিভ শেখা থাকলে এখানকার পুরো কাল-মানচিত্র সহজ লাগবে। এখানে শিখব: আট রূপের প্যাসিভ (is done, was done, is being done, was being done, has been done, had been done, will be done, can be done), by + কর্তা কখন থাকবে কখন বাদ, কোন ক্রিয়া প্যাসিভ হয় না, দুই-কর্মের ক্রিয়ার প্যাসিভ (I was given…), get-প্যাসিভ, আর It is said that…-ধাঁচের impersonal প্যাসিভ।",
        en: "When who did it does not matter — only what happened does — the passive is born. Before entering this lesson, make sure your be-forms (am/is/are, was/were, being, been) and the V1/V2/V3 idea are solid (the beginner lessons); if the beginner Passive Voice lesson taught you three basic tenses, the full tense map here will feel easy. Here you will learn: the passive in eight shapes (is done, was done, is being done, was being done, has been done, had been done, will be done, can be done), when by + agent stays and when it goes, which verbs refuse the passive, passives of two-object verbs (I was given…), the get-passive, and impersonal passives like It is said that….",
        hi: "जिसने किया यह जानना ज़रूरी न हो, सिर्फ़ क्या हुआ वह मायने रखे — यहीं से पैसिव का जन्म होता है। इस पाठ से पहले be-रूप (am/is/are, was/were, being, been) और V1/V2/V3 की समझ (beginner पाठ) पक्की होनी चाहिए; beginner का Passive Voice पाठ पढ़ा हो — तीन कालों का basic पैसिव — तो यहाँ का पूरा काल-नक्शा आसान लगेगा। यहाँ सीखेंगे: आठ रूपों का पैसिव (is done, was done, is being done, was being done, has been done, had been done, will be done, can be done), by + कर्ता कब रहेगा कब हटेगा, कौन-सी क्रिया पैसिव नहीं होती, दो-कर्म वाली क्रियाओं का पैसिव (I was given…), get-पैसिव, और It is said that… जैसा impersonal पैसिव।",
      },
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয় — কাজ মুখ্য, কর্তা নয়",
            en: "When to use it — the action matters, not the doer",
            hi: "कब इस्तेमाल होता है — काम मायने रखता है, कर्ता नहीं",
          },
          body: {
            bn: "প্যাসিভ চার জায়গায় বাধ্যতামূলক ভাব নেয়: (১) কর্তা অজানা — My bike was stolen (কে চুরি করল জানি না); (২) কর্তা স্পষ্ট বা গুরুত্বহীন — The thief was arrested (পুলিশই ধরবে); (৩) কাজটাই খবর, কর্তা নয় — The medicine should be taken twice a day; The bridge was opened in 2015; (৪) নোটিশ-সংবাদ-বিজ্ঞান-আনুষ্ঠানিক লেখা — You are fired! Smoking is not allowed। বাংলাতেও 'কাজটা করা হলো', 'নির্মাণ হচ্ছে' ধাঁচের কর্ম-প্রধান বাক্য আছে বলে ভাবটা নতুন নয় — নতুন শুধু ইংরেজি যন্ত্র: কর্ম কর্তার চেয়ারে বসে, আর be + V3 কাল বহন করে।",
            en: "The passive feels obligatory in four situations: (1) the doer is unknown — My bike was stolen (who stole it, nobody knows); (2) the doer is obvious or unimportant — The thief was arrested (the police would be the ones); (3) the action itself is the news, not the doer — The medicine should be taken twice a day; The bridge was opened in 2015; (4) notices, news, science and formal writing — You are fired! Smoking is not allowed. Bengali has doer-less shapes too ('কাজটা করা হলো', 'নির্মাণ হচ্ছে'), so the idea is not new — only the English machine is: the object takes the subject's chair, and be + V3 carries the tense.",
            hi: "पैसिव चार जगह अनिवार्य-सा लगता है: (1) कर्ता अज्ञात — My bike was stolen (किसने चुराया, पता नहीं); (2) कर्ता स्पष्ट या तुच्छ — The thief was arrested (पुलिस ही पकड़ेगी); (3) काम ही खबर है, कर्ता नहीं — The medicine should be taken twice a day; The bridge was opened in 2015; (4) नोटिस-खबर-विज्ञान-औपचारिक लेखन — You are fired! Smoking is not allowed। हिंदी/बांग्ला में भी 'काम कर लिया गया', 'निर्माण हो रहा है' जैसे कर्म-प्रधान वाक्य हैं, इसलिए भाव नया नहीं — नया सिर्फ़ अंग्रेज़ी मशीन है: कर्म subject की कुर्सी पर बैठता है, और be + V3 काल उठाता है।",
          },
          examples: [
            { wrong: "Somebody broke the window last night. Somebody broke it.", right: "The window was broken last night.", note: { bn: "কর্তা অজানা → প্যাসিভে কর্তা-মুছে-ফেলা; কাজটাই বক্তব্য।", en: "Unknown doer → the passive deletes the doer; the action is the message.", hi: "कर्ता अज्ञात → पैसिव कर्ता मिटा देता है; काम ही बात है।" } },
            { wrong: "Take the medicine two times in a day by you.", right: "The medicine should be taken twice a day.", note: { bn: "নির্দেশ-নিয়মে কর্তা গুরুত্বহীন → প্যাসিভই স্বাভাবিক; 'by you' অপ্রয়োজনীয়।", en: "In rules and instructions the doer is unimportant → the passive is natural; 'by you' is dead weight.", hi: "निर्देश-नियम में कर्ता मायने नहीं रखता → पैसिव स्वाभाविक; 'by you' फ़ालतू।" } },
            { wrong: "They will announce the results tomorrow, but we don't know when exactly.", right: "The results will be announced tomorrow.", note: { bn: "ঘোষণার খবরে কর্তা they নিরীহ — প্যাসিভে খবরটাই সামনে আসে।", en: "In announcement news the doer they is empty — the passive puts the news first.", hi: "घोषणा की खबर में कर्ता they खोखला — पैसिव खबर को आगे लाता है।" } },
            { wrong: "People grow tea in Sylhet.", right: "Tea is grown in Sylhet.", note: { bn: "সাধারণ কর্তা (people) প্যাসিভে মুছে যায়; ভূগোল-তথ্যে প্যাসিভই চলন।", en: "A general doer (people) disappears in the passive; geography facts prefer it.", hi: "सामान्य कर्ता (people) पैसिव में मिट जाता है; भूगोल-तथ्यों में पैसिव ही चलन।" } },
            { wrong: "In the lab the experiment did by the students.", right: "The experiment was done in the lab.", note: { bn: "প্যাসিভের যন্ত্র ভুলে did বসে যায়; সঠিক যন্ত্র was + V3, কর্তা বাদ।", en: "Learners slip did in and lose the passive machine; the right machine is was + V3, doer dropped.", hi: "पैसिव मशीन भूलकर did बैठ जाता है; सही मशीन was + V3, कर्ता हटा।" } },
          ],
        },
        {
          heading: {
            bn: "গঠন — সঠিক কালের be + V3: আটটা রূপ",
            en: "Formation — be (right tense) + V3: the eight shapes",
            hi: "गठन — सही काल का be + V3: आठ रूप",
          },
          body: {
            bn: "মূল সূত্র: কর্ম → কর্তার চেয়ারে, তারপর be-এর সঠিক কাল + V3। আটটা রূপ মুখস্থ: present — is/are done (The shop is closed on Sundays); past — was/were done (The letter was sent yesterday); present perfect — has/have been done (The work has been finished); past perfect — had been done (The work had been finished before he came); future — will be done (The bill will be paid); present continuous — is/are being done (The road is being repaired); past continuous — was/were being done (The road was being repaired when I passed); modal — can/must/should be done (The form must be signed)। ভুলের মূল জায়গা দুটো: continuous-এ being বাদ পড়ে যাওয়া, আর V3-র জায়গায় V2 বসে যাওয়া।",
            en: "The core formula: the object moves into the subject's chair, then the right-tense be + V3. Memorise eight shapes: present — is/are done (The shop is closed on Sundays); past — was/were done (The letter was sent yesterday); present perfect — has/have been done (The work has been finished); past perfect — had been done (The work had been finished before he came); future — will be done (The bill will be paid); present continuous — is/are being done (The road is being repaired); past continuous — was/were being done (The road was being repaired when I passed); modal — can/must/should be done (The form must be signed). The two root errors: losing being in the continuous, and putting V2 where V3 belongs.",
            hi: "मूल सूत्र: कर्म subject की कुर्सी पर, फिर सही काल का be + V3। आठ रूप याद करें: present — is/are done (The shop is closed on Sundays); past — was/were done (The letter was sent yesterday); present perfect — has/have been done (The work has been finished); past perfect — had been done (The work had been finished before he came); future — will be done (The bill will be paid); present continuous — is/are being done (The road is being repaired); past continuous — was/were being done (The road was being repaired when I passed); modal — can/must/should be done (The form must be signed)। दो मूल गलतियाँ: continuous में being छूट जाना, और V3 की जगह V2 बैठ जाना।",
          },
          examples: [
            { wrong: "The work is doing.", right: "The work is being done.", note: { bn: "'কাজ হচ্ছে' — চলমান প্যাসিভ = is being + V3; be ছাড়া প্যাসিভ নেই।", en: "'The work is going on' — a running passive = is being + V3; no passive without be.", hi: "'काम हो रहा है' — चलता पैसिव = is being + V3; be के बिना पैसिव नहीं।" } },
            { wrong: "This house is build in 1990.", right: "This house was built in 1990.", note: { bn: "in 1990 = কাটা সময় → was; আর V3 — built।", en: "in 1990 is closed time → was; and V3 — built.", hi: "in 1990 = बंद समय → was; और V3 — built।" } },
            { wrong: "The letters have been wrote.", right: "The letters have been written.", note: { bn: "been-এর পরেও V3 — written; wrote হলো V2।", en: "After been too comes V3 — written; wrote is V2.", hi: "been के बाद भी V3 — written; wrote V2 है।" } },
            { wrong: "The rice will being cooked tonight.", right: "The rice will be cooked tonight.", note: { bn: "will-এর পরে be; being শুধু continuous-এর সম্পত্তি।", en: "After will comes be; being belongs only to the continuous.", hi: "will के बाद be; being केवल continuous की चीज़।" } },
            { wrong: "The thief has catch by the police.", right: "The thief was caught by the police.", note: { bn: "প্যাসিভে V3 (caught), আর কাল মিলাতে হবে — একটাই ঘটনা → was।", en: "The passive needs V3 (caught) and a matching tense — one single event → was.", hi: "पैसिव में V3 (caught) और मिलता काल — एक ही घटना → was।" } },
          ],
        },
        {
          heading: {
            bn: "আভাস শব্দ — প্যাসিভ-এলাকার চিহ্ন",
            en: "Signal words — signs you are in passive territory",
            hi: "संकेत शब्द — पैसिव-इलाके की निशानियाँ",
          },
          body: {
            bn: "এই চিহ্ন দেখলেই প্যাসিভ আশা করুন: কর্তা না বলা বা বলার দরকার নেই; বাক্যে by + কর্তা থাকা; নোটিশ-সাইন — Sold out, Closed for renovation, No entry, Reserved (সবগুলোই সংক্ষিপ্ত প্যাসিভ); খবরের শিরোনাম-রিপোর্ট; It is said/believed/reported that…; আর কথ্য ইংরেজির get + V3 — He got hired, She got paid। উল্টো দিকেও সাবধান: কর্তা জানা থাকলে অনেক সময় active-ই ভালো — প্রতিটা বাক্য প্যাসিভ করে লেখা শুরু করলে ভাষা দমবন্ধ হয়ে যায়; active ডিফল্ট, প্যাসিভের পেছনে উদ্দেশ্য থাকে।",
            en: "See any of these and expect a passive: no doer named or worth naming; by + agent sitting in the sentence; notice signs — Sold out, Closed for renovation, No entry, Reserved (all of them short passives); news headlines and reports; It is said/believed/reported that…; and spoken English's get + V3 — He got hired, She got paid. A warning in the other direction too: even when the doer is known, active is often better — turning every sentence passive suffocates the language; active is the default, the passive needs a reason.",
            hi: "ये चिह्न दिखें तो पैसिव की उम्मीद करें: कर्ता न बताया जाना या बताने की ज़रूरत न रहना; वाक्य में by + कर्ता का बैठना; नोटिस-साइन — Sold out, Closed for renovation, No entry, Reserved (सब छोटे पैसिव); खबरों की सुर्खियाँ-रिपोर्ट; It is said/believed/reported that…; और बोलचाल का get + V3 — He got hired, She got paid। उलटी दिशा में भी चेतावनी: कर्ता ज्ञात हो तो अक्सर active ही बेहतर — हर वाक्य पैसिव कर देने से भाषा घुटने लगती है; active default है, पैसिव के पीछे कारण होता है।",
          },
          examples: [
            { wrong: "My phone stole yesterday.", right: "My phone was stolen yesterday.", note: { bn: "চুরি হওয়া = কর্ম-বাচ্য; কে চুরি করল জানি না, তাই by-ফ্রেজও নেই।", en: "Being stolen is a passive event; the thief is unknown, so no by-phrase either.", hi: "चोरी होना = कर्म वाच्य; चोर अज्ञात, इसलिए by-वाक्यांश भी नहीं।" } },
            { wrong: "The bridge repairing — please use the other road.", right: "The bridge is being repaired — please use the other road.", note: { bn: "নোটিশ-ভাষা ছোট হলেও প্যাসিভের যন্ত্র পূর্ণ থাকে — is being repaired।", en: "Even notice language keeps the full passive machinery — is being repaired.", hi: "नोटिस-भाषा छोटी होते हुए भी पैसिव मशीन पूरी रखती है — is being repaired।" } },
            { wrong: "He got promote last month.", right: "He got promoted last month.", note: { bn: "get-প্যাসিভেও V3 — promoted; কথ্যে was promoted-এর বদলে খুব প্রচলিত।", en: "The get-passive also takes V3 — promoted; very common in speech instead of was promoted.", hi: "get-पैसिव में भी V3 — promoted; बोलचाल में was promoted की जगह बहुत चलता है।" } },
            { wrong: "It says that leopards live in these hills.", right: "It is said that leopards live in these hills.", note: { bn: "'বলা হয়' = impersonal প্যাসিভ — It is said that…।", en: "'People say' becomes the impersonal passive — It is said that….", hi: "'कहा जाता है' = impersonal पैसिव — It is said that…।" } },
            { wrong: "The meeting will hold tomorrow.", right: "The meeting will be held tomorrow.", note: { bn: "মিটিং নিজে ধরে না — ধরা হয়; hold-এর V3 held।", en: "A meeting cannot hold itself — it is held; V3 of hold is held.", hi: "मीटिंग खुद को नहीं रखती — रखी जाती है; hold का V3 held।" } },
          ],
        },
        {
          heading: {
            bn: "by + কর্তা — কখন রাখবেন, কখন ফেলে দেবেন",
            en: "by + agent — when to keep it, when to drop it",
            hi: "by + कर्ता — कब रखें, कब छोड़ें",
          },
          body: {
            bn: "প্যাসিভের আসল শক্তি কর্তা-মুছে-ফেলা। by + কর্তা রাখুন শুধু যখন কর্তাটাই তথ্য: Romeo and Juliet was written by Shakespeare (কে লিখল — এটাই খবর); The window was broken by my little brother (দোষী কে — দরকারি তথ্য)। ফেলে দিন যখন কর্তা অজানা (My wallet was stolen), স্পষ্ট-নিরীহ (The thief was arrested), বা সাধারণ (English is spoken all over the world)। আরেকটা সূক্ষ্মতা: কর্তা আর সময় একসাথে — The novel was written by Tagore in 1910 — কর্তার by, সময়ের in; দুই by মেশানো যায় না।",
            en: "The passive's real power is deleting the doer. Keep by + agent only when the agent itself is the information: Romeo and Juliet was written by Shakespeare (who wrote it — that is the news); The window was broken by my little brother (who is to blame — needed information). Drop it when the doer is unknown (My wallet was stolen), obvious and empty (The thief was arrested), or general (English is spoken all over the world). One more subtlety: agent and time together — The novel was written by Tagore in 1910 — by for the agent, in for the time; the two by's never mix.",
            hi: "पैसिव की असली ताकत कर्ता-मिटाना है। by + कर्ता तभी रखें जब कर्ता ही जानकारी हो: Romeo and Juliet was written by Shakespeare (किसने लिखा — यही खबर है); The window was broken by my little brother (दोषी कौन — ज़रूरी जानकारी)। छोड़ दें जब कर्ता अज्ञात (My wallet was stolen), स्पष्ट-खोखला (The thief was arrested), या सामान्य (English is spoken all over the world)। एक सूक्ष्मता और: कर्ता और समय साथ-साथ — The novel was written by Tagore in 1910 — कर्ता के लिए by, समय के लिए in; दो by कभी नहीं मिलते।",
          },
          examples: [
            { wrong: "The thief was arrested by the police.", right: "The thief was arrested.", note: { bn: "পুলিশই গ্রেপ্তার করে — বলা-না-বলা সমান; by-ফ্রেজ বাড়তি বোঝা।", en: "The police are the only ones who arrest — saying it or not makes no difference; the by-phrase is dead weight.", hi: "गिरफ़्तारी पुलिस ही करती है — कहा हो या न हो, बात वही; by-वाक्यांश फ़ालतू बोझ।" } },
            { wrong: "Hamlet was written.", right: "Hamlet was written by Shakespeare.", note: { bn: "কে লিখল সেটাই মূল তথ্য — এখানে by-ফ্রেজ বাধ্যতামূলক।", en: "Who wrote it is the whole point — here the by-phrase is compulsory.", hi: "किसने लिखा, यही मूल जानकारी है — यहाँ by-वाक्यांश अनिवार्य।" } },
            { wrong: "This saree was bought by me by my mother.", right: "This saree was bought by my mother.", note: { bn: "কেনাটা মায়ের করা — কর্তা একজনই; দুই by দিয়ে দুই কর্তা হয় না।", en: "The buying was mother's doing — one agent only; two by's cannot make two agents.", hi: "ख़रीद माँ ने की — कर्ता एक ही; दो by से दो कर्ता नहीं बनते।" } },
            { wrong: "The kitchen is cleaned by someone every day.", right: "The kitchen is cleaned every day.", note: { bn: "someone/somebody কর্তা হলে সাধারণত বাদই — অর্থ ওটাই ধরে নেয়।", en: "When the doer is someone/somebody, it usually drops — the meaning already implies it.", hi: "कर्ता someone/somebody हो तो सामान्यतः हट जाता है — अर्थ वैसे भी वही लेता है।" } },
            { wrong: "The novel was written from Tagore in 1910.", right: "The novel was written by Tagore in 1910.", note: { bn: "কর্তা বোঝাতে by — from নয়; আর সময়ের সঙ্গী in।", en: "The agent takes by — not from; and time pairs with in.", hi: "कर्ता के लिए by — from नहीं; और समय का साथी in।" } },
          ],
        },
        {
          heading: {
            bn: "সব ক্রিয়া প্যাসিভ হয় না — কর্ম ছাড়া প্যাসিভ নেই",
            en: "Not every verb has a passive — no object, no passive",
            hi: "हर क्रिया पैसिव नहीं होती — कर्म नहीं तो पैसिव नहीं",
          },
          body: {
            bn: "প্যাসিভ হতে হলে ক্রিয়ার কর্ম থাকতে হবে (transitive)। intransitive ক্রিয়া — happen, occur, rise, arrive, come, go, sleep, die, laugh — কর্ম নেই, তাই প্যাসিভ অসম্ভব: The accident happened (was happened ইংরেজিতে নেই)। একই ফাঁদে পড়ে স্টেটিভ ক্রিয়ারা — have, lack, resemble, fit, suit, cost, belong — দেখতে কর্ম আছে, কিন্তু এরা সম্পর্ক-ক্রিয়া, কাজ-ক্রিয়া নয়; তাই প্যাসিভ হয় না: This land belonged to my grandfather, He resembles his father। শর্টকাট: কর্তা-কর্ম অদল-বদল করে অর্থ টেকে না এমন ক্রিয়া প্যাসিভ হবেই না।",
            en: "A passive needs an object (a transitive verb). Intransitive verbs — happen, occur, rise, arrive, come, go, sleep, die, laugh — have no object, so the passive is impossible: The accident happened ('was happened' does not exist in English). Stative verbs fall into the same trap — have, lack, resemble, fit, suit, cost, belong: they look like they take objects, but they are relationship verbs, not action verbs, so they refuse the passive: This land belonged to my grandfather, He resembles his father. A shortcut: if swapping subject and object breaks or changes the meaning, the verb will never go passive.",
            hi: "पैसिव के लिए क्रिया का कर्म चाहिए (transitive)। intransitive क्रियाएँ — happen, occur, rise, arrive, come, go, sleep, die, laugh — कर्महीन हैं, इसलिए पैसिव असंभव: The accident happened ('was happened' अंग्रेज़ी में नहीं है)। वही जाल stative क्रियाओं का है — have, lack, resemble, fit, suit, cost, belong: देखने में कर्म लेती हैं, पर ये संबंध-क्रियाएँ हैं, काम-क्रियाएँ नहीं; इसलिए पैसिव नहीं होतीं: This land belonged to my grandfather, He resembles his father। शॉर्टकट: subject-object अदला-बदली से अर्थ टूट जाए या बदल जाए, वह क्रिया पैसिव कभी नहीं होगी।",
          },
          examples: [
            { wrong: "The accident was happened at midnight.", right: "The accident happened at midnight.", note: { bn: "happen intransitive — প্যাসিভ রূপই নেই।", en: "happen is intransitive — it has no passive form at all.", hi: "happen intransitive है — इसका पैसिव रूप ही नहीं।" } },
            { wrong: "This land is belonged to my grandfather.", right: "This land belonged to my grandfather.", note: { bn: "belong-এর প্যাসিভ নেই; মালিকানা সোজা active-এই।", en: "belong has no passive; ownership stays in the plain active.", hi: "belong का पैसिव नहीं होता; स्वामित्व सीधे active में।" } },
            { wrong: "Rimi is resembled by her mother.", right: "Rimi resembles her mother.", note: { bn: "resemble প্যাসিভ হয় না — সাদৃশ্য একমুখী সম্পর্ক, অদল-বদল করা যায় না।", en: "resemble refuses the passive — likeness is a one-way relation that cannot be swapped.", hi: "resemble पैसिव नहीं होती — समानता एक-तरफ़ा संबंध, अदला-बदली नहीं।" } },
            { wrong: "A new car was had by my uncle.", right: "My uncle has a new car.", note: { bn: "have দিয়ে প্যাসিভ বাক্য হয় না — মালিকানা বোঝাতে active।", en: "No passive sentence with have — ownership is said in the active.", hi: "have से पैसिव वाक्य नहीं — स्वामित्व active में कहें।" } },
            { wrong: "This dress was cost five thousand rupees.", right: "This dress cost five thousand rupees.", note: { bn: "cost নিজেই দাম বোঝায় — প্যাসিভ অপ্রয়োজনীয় ও ভুল।", en: "cost already carries the price — a passive is both needless and wrong.", hi: "cost खुद दाम बताती है — पैसिव न ज़रूरी, न सही।" } },
          ],
        },
        {
          heading: {
            bn: "দুই কর্মের ক্রিয়া, get-প্যাসিভ আর It is said that…",
            en: "Two-object verbs, the get-passive, and It is said that…",
            hi: "दो-कर्म क्रियाएँ, get-पैसिव और It is said that…",
          },
          body: {
            bn: "give, send, show, offer, teach, tell, buy, make — এদের দুটো কর্ম (মানুষ + জিনিস)। দুই রূপেই প্যাসিভ হয়: She gave me a pen → I was given a pen (মানুষটা কর্তার চেয়ারে — কথ্যে এটাই প্রিয়) / A pen was given to me (জিনিসটা কর্তায় — একটু আনুষ্ঠানিক; মানুষের আগে to লাগবে)। Impersonal প্যাসিভ খবরের ভাষা: People say that he is rich → It is said that he is rich / He is said to be rich। আর কথ্য ইংরেজির get-প্যাসিভ — be + V3-এর অনানুষ্ঠানিক বন্ধু: He got promoted, She got hurt, I got paid yesterday — প্রায়ই 'নিজের ভাগ্যে ঘটে যাওয়া' ভাব বহন করে।",
            en: "give, send, show, offer, teach, tell, buy, make — these take two objects (a person + a thing). Both can go passive: She gave me a pen → I was given a pen (the person takes the subject chair — the favourite in speech) / A pen was given to me (the thing is the subject — a bit more formal; add to before the person). Impersonal passives are news language: People say that he is rich → It is said that he is rich / He is said to be rich. And spoken English's get-passive — the informal friend of be + V3: He got promoted, She got hurt, I got paid yesterday — it often carries a 'happened to me' flavour.",
            hi: "give, send, show, offer, teach, tell, buy, make — इनके दो कर्म (इंसान + चीज़)। दोनों पैसिव हो सकते हैं: She gave me a pen → I was given a pen (इंसान subject की कुर्सी पर — बोलचाल का पसंदीदा) / A pen was given to me (चीज़ subject — थोड़ा औपचारिक; इंसान से पहले to लगेगा)। impersonal पैसिव खबरों की भाषा है: People say that he is rich → It is said that he is rich / He is said to be rich। और बोलचाल का get-पैसिव — be + V3 का अनौपचारिक दोस्त: He got promoted, She got hurt, I got paid yesterday — अक्सर 'मेरे सिर पर घट गया' वाला भाव।",
          },
          examples: [
            { wrong: "He was given me a book.", right: "I was given a book (by him). / He gave me a book.", note: { bn: "মানুষ-কর্ম আগে থাকলে মানুষটাই প্যাসিভ কর্তা — I was given; 'He was given me' অর্থহীন।", en: "With the person-object first, the person becomes the passive subject — I was given; 'He was given me' is meaningless.", hi: "इंसान-कर्म पहले हो तो इंसान ही पैसिव subject — I was given; 'He was given me' अर्थहीन।" } },
            { wrong: "A book was given me.", right: "A book was given to me.", note: { bn: "জিনিস-কর্ম কর্তা হলে মানুষের আগে to লাগবে।", en: "When the thing-object becomes the subject, to goes before the person.", hi: "चीज़-कर्म subject बने तो इंसान से पहले to लगेगा।" } },
            { wrong: "People say that he is a genius.", right: "It is said that he is a genius. / He is said to be a genius.", note: { bn: "খবরের impersonal প্যাসিভ — people-কে মুছে It is said / He is said to be।", en: "News-style impersonal passive — wipe out people: It is said / He is said to be.", hi: "खबरों का impersonal पैसिव — people मिटाओ: It is said / He is said to be।" } },
            { wrong: "She got invite to the wedding.", right: "She got invited to the wedding.", note: { bn: "get-প্যাসিভেও V3 লাগবেই; কথ্যে was invited-এর বদলে খুব প্রচলিত।", en: "The get-passive also needs V3; in speech it is very common instead of was invited.", hi: "get-पैसिव में भी V3 लगेगा; बोलचाल में was invited की जगह बहुत चलता है।" } },
            { wrong: "It is said him to be honest.", right: "He is said to be honest.", note: { bn: "X is said to be… প্যাটার্নে ব্যক্তিটাই কর্তা; It is said-এর পরে পূর্ণ ক্লজ (that he is honest) চায়।", en: "In the X is said to be… pattern the person is the subject; It is said wants a full clause (that he is honest).", hi: "X is said to be… पैटर्न में इंसान ही subject; It is said के बाद पूरा क्लज़ चाहिए (that he is honest)।" } },
          ],
        },
        {
          heading: {
            bn: "বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "Common mistakes by Bengali speakers",
            hi: "बांग्लाभाषी विद्यार्थियों की सामान्य गलतियाँ",
          },
          body: {
            bn: "ফাঁদ তিনটে। এক: বাংলার 'কাজটা করা হচ্ছে' শুনে শিক্ষার্থীরা is doing লেখেন — বাংলার কর্ম-প্রধান বাক্য ইংরেজিতে being-সহ প্যাসিভ: is being done, is being repaired, is being built। দুই: V3 বাদ পড়ে যাওয়া — is build, was wrote, has been finish। প্যাসিভের হৃদয় V3; be-এর পরে V1/V2 দেখলেই থামুন। তিন: intransitive বা স্টেটিভ ক্রিয়ায় জোর করে প্যাসিভ — was happened, was occurred, is belonged। এই তিন ফাঁদ পার হলেই প্যাসিভের ৮০% ভুল শেষ।",
            en: "Three traps. One: hearing the Bengali doer-less 'কাজটা করা হচ্ছে', learners write is doing — the Bengali object-led sentence is the English passive with being: is being done, is being repaired, is being built. Two: the V3 falls out — is build, was wrote, has been finish. The heart of the passive is V3; if you see V1/V2 after be, stop. Three: forcing the passive onto intransitive or stative verbs — was happened, was occurred, is belonged. Cross these three traps and eighty per cent of passive errors are gone.",
            hi: "तीन जाल। एक: हिंदी/बांग्ला का 'काम किया जा रहा है' सुनकर विद्यार्थी is doing लिख देते हैं — कर्म-प्रधान वाक्य अंग्रेज़ी में being वाला पैसिव है: is being done, is being repaired, is being built। दो: V3 छूट जाना — is build, was wrote, has been finish। पैसिव का दिल V3 है; be के बाद V1/V2 दिखे तो रुक जाओ। तीन: intransitive या stative क्रियाओं पर ज़बरदस्ती पैसिव — was happened, was occurred, is belonged। इन तीन जालों को पार करते ही पैसिव की 80% गलतियाँ खत्म।",
          },
          examples: [
            { wrong: "The road is repairing.", right: "The road is being repaired.", note: { bn: "'রাস্তা মেরামত হচ্ছে' — চলমান প্যাসিভ is being + V3।", en: "'The road is under repair' — the running passive is is being + V3.", hi: "'सड़क की मरम्मत हो रही है' — चलता पैसिव is being + V3।" } },
            { wrong: "A new mall is establishing here.", right: "A new mall is being established here.", note: { bn: "এখন চলছে → is being established; being বাদ গেলে অর্থই ভেঙে পড়ে।", en: "Happening now → is being established; drop being and the meaning collapses.", hi: "अभी चल रहा है → is being established; being गिरा तो अर्थ टूट जाएगा।" } },
            { wrong: "When the guests arrived, the food was already finished to cook.", right: "When the guests arrived, the food had already been cooked.", note: { bn: "অতীতের আগে-অতীত → past perfect প্যাসিভ had been + V3।", en: "Past before the past → the past-perfect passive had been + V3.", hi: "अतीत से पहले का अतीत → past perfect पैसिव had been + V3।" } },
            { wrong: "The results were announced yesterday by the principal at 5 pm by notice.", right: "The results were announced by the principal yesterday at 5 pm.", note: { bn: "একটাই কর্তা; বিবরণ এলোমেলো করে দুই by-জাল বানিয়ে ফেলা কমন ভুল।", en: "One agent only; scrambling the details into two by-traps is the common error.", hi: "एक ही कर्ता; विवरण उलझाकर दो by-जाल बुनना आम गलती।" } },
            { wrong: "The problem was occurred again.", right: "The problem occurred again.", note: { bn: "occur intransitive — প্যাসিভ নেই; happened/occurred-ই শেষ কথা।", en: "occur is intransitive — no passive; happened/occurred is the whole story.", hi: "occur intransitive है — पैसिव नहीं; happened/occurred ही अंतिम रूप।" } },
          ],
        },
        {
          heading: {
            bn: "ছোট গল্পে দেখা যাক",
            en: "A short story to see it all",
            hi: "एक छोटी कहानी में सब देखें",
          },
          body: {
            bn: "স্কুলের বার্ষিক পত্রিকার খবর: 'Last week the new library was opened by the education minister. It had been planned for five years, and the building was finally completed in March. Books are still being arranged on the shelves, and the reading room can be booked online from Monday. It is said that more than two thousand books were donated by former students. The head boy, who got selected for the national quiz, cut the ribbon.' — এক প্যারায় সব: was opened, had been planned, was completed, are being arranged, can be booked, were donated — ছয় রূপের প্যাসিভ; by-ফ্রেজ শুধু যেখানে তথ্য (minister, former students); impersonal It is said that; আর get-প্যাসিভ got selected। এক নজরে: (১) মূল সূত্র সঠিক কালের be + V3; (২) আট রূপ — is/was done, is/was being done, has/had been done, will/can be done; (৩) by + কর্তা শুধু নতুন তথ্য বহন করলে; (৪) happen/belong/resemble/have-র প্যাসিভ নেই; (৫) দুই-কর্মের ক্রিয়ায় মানুষ-কর্তা প্যাসিভ প্রিয় (I was given a pen); (৬) খবরে It is said that / He is said to be; (৭) কথ্যে get + V3।",
            en: "A piece from the school magazine: 'Last week the new library was opened by the education minister. It had been planned for five years, and the building was finally completed in March. Books are still being arranged on the shelves, and the reading room can be booked online from Monday. It is said that more than two thousand books were donated by former students. The head boy, who got selected for the national quiz, cut the ribbon.' — everything in one paragraph: was opened, had been planned, was completed, are being arranged, can be booked, were donated — six shapes of the passive; by-phrases only where they inform (minister, former students); the impersonal It is said that; and the get-passive got selected. At a glance: (1) the core formula be (right tense) + V3; (2) the eight shapes — is/was done, is/was being done, has/had been done, will/can be done; (3) by + agent only when it adds news; (4) happen/belong/resemble/have have no passive; (5) with two-object verbs the person-subject passive is the favourite (I was given a pen); (6) news language: It is said that / He is said to be; (7) in speech, get + V3.",
            hi: "स्कूल मैगज़ीन की खबर: 'Last week the new library was opened by the education minister. It had been planned for five years, and the building was finally completed in March. Books are still being arranged on the shelves, and the reading room can be booked online from Monday. It is said that more than two thousand books were donated by former students. The head boy, who got selected for the national quiz, cut the ribbon.' — एक पैराग्राफ में सब: was opened, had been planned, was completed, are being arranged, can be booked, were donated — पैसिव के छह रूप; by-वाक्यांश केवल जानकारी जहाँ (minister, former students); impersonal It is said that; और get-पैसिव got selected। एक नज़र में: (1) मूल सूत्र सही काल का be + V3; (2) आठ रूप — is/was done, is/was being done, has/had been done, will/can be done; (3) by + कर्ता केवल नई जानकारी हो तो; (4) happen/belong/resemble/have का पैसिव नहीं; (5) दो-कर्म क्रियाओं में इंसान-subject पैसिव पसंदीदा (I was given a pen); (6) खबरों में It is said that / He is said to be; (7) बोलचाल में get + V3।",
          },
          examples: [
            { wrong: "The library was opened from the minister.", right: "The library was opened by the education minister.", note: { bn: "কর্তা বোঝাতে by — from নয়।", en: "The agent takes by — not from.", hi: "कर्ता के लिए by — from नहीं।" } },
            { wrong: "Books are still arranging on the shelves.", right: "Books are still being arranged on the shelves.", note: { bn: "চলমান প্যাসিভে being বাধ্যতামূলক।", en: "The running passive cannot lose being.", hi: "चलते पैसिव में being ज़रूरी।" } },
            { wrong: "Two thousand books donated by former students.", right: "Two thousand books were donated by former students.", note: { bn: "শিরোনাম-স্টাইল বাক্যেও be-ক্রিয়া থাকবে — were donated।", en: "Even headline-style sentences keep the be-verb — were donated.", hi: "सुर्ख़ी-शैली के वाक्य में भी be-क्रिया रहेगी — were donated।" } },
            { wrong: "It is said the library that it is the best in the district.", right: "It is said that the library is the best in the district.", note: { bn: "It is said-এর পরে that + পূর্ণ ক্লজ।", en: "After It is said comes that + a full clause.", hi: "It is said के बाद that + पूरा क्लज़।" } },
          ],
        },
      ],
      tips: [
        { bn: "মূল সূত্র: সঠিক কালের be + V3 — কর্ম কর্তার চেয়ারে, কাল be-এর কাঁধে।", en: "The core formula: right-tense be + V3 — the object sits in the subject's chair, the tense rides on be.", hi: "मूल सूत्र: सही काल का be + V3 — कर्म subject की कुर्सी पर, काल be के कंधे पर।" },
        { bn: "আট রূপের তালিকা মুখস্থ: is/are done, was/were done, has/have been done, had been done, will be done, is/are being done, was/were being done, can/must be done।", en: "Memorise the eight-shape list: is/are done, was/were done, has/have been done, had been done, will be done, is/are being done, was/were being done, can/must be done.", hi: "आठ रूपों की सूची याद करें: is/are done, was/were done, has/have been done, had been done, will be done, is/are being done, was/were being done, can/must be done।" },
        { bn: "continuous প্যাসিভে being বাদ পড়াই সবচেয়ে কমন ভুল — is being done, নয় is doing।", en: "Losing being in the continuous passive is the commonest error — is being done, not is doing.", hi: "continuous पैसिव में being छूटना ही सबसे आम गलती — is being done, is doing नहीं।" },
        { bn: "by + কর্তা শুধু তখনই, যখন কর্তাটাই নতুন তথ্য — Shakespeare by-ফ্রেজ পায়, police নয়।", en: "by + agent only when the agent is fresh information — Shakespeare earns the by-phrase, police does not.", hi: "by + कर्ता केवल तब, जब कर्ता ही नई जानकारी हो — Shakespeare by-वाक्यांश पाता है, police नहीं।" },
        { bn: "happen, occur, rise, arrive, die, belong, resemble, have, cost — এদের প্যাসিভ নেই।", en: "happen, occur, rise, arrive, die, belong, resemble, have, cost — these have no passive.", hi: "happen, occur, rise, arrive, die, belong, resemble, have, cost — इनका पैसिव नहीं।" },
        { bn: "দুই-কর্মের ক্রিয়ায় মানুষ-কর্ম কর্তা হলে সোজা — I was given a pen; জিনিস কর্তা হলে to লাগবে।", en: "With two-object verbs, the person-object makes the natural subject — I was given a pen; the thing-subject needs to.", hi: "दो-कर्म क्रिया में इंसान-कर्म subject बने तो सीधा — I was given a pen; चीज़-subject को to चाहिए।" },
        { bn: "খবরের ভাষায় It is said that… / He is said to be…।", en: "News language uses It is said that… / He is said to be….", hi: "खबरों की भाषा It is said that… / He is said to be…।" },
        { bn: "কথ্যে get + V3 — He got promoted; লিখিত-আনুষ্ঠানিকে was promoted।", en: "In speech get + V3 — He got promoted; in formal writing was promoted.", hi: "बोलचाल में get + V3 — He got promoted; औपचारिक लेखन में was promoted।" },
        { bn: "নোটিশ-সাইনগুলোও সংক্ষিপ্ত প্যাসিভ — Sold out, Closed, Reserved, No entry।", en: "Notice signs are short passives — Sold out, Closed, Reserved, No entry.", hi: "नोटिस-साइन भी छोटे पैसिव — Sold out, Closed, Reserved, No entry।" },
        { bn: "কাটা-সময় শব্দ (in 1990, yesterday) থাকলে প্যাসিভের কালও পাল্টায় — was built, not is built।", en: "Closed-time words (in 1990, yesterday) flip the passive tense too — was built, not is built.", hi: "बंद-समय शब्द (in 1990, yesterday) पैसिव का काल भी पलट देते हैं — was built, is built नहीं।" },
      ],
      quiz: [
        { question: "The road ___ at the moment.", options: ["is repairing", "is being repaired", "repairs", "has repairing"], answer: 1, explanation: { bn: "এই মুহূর্তে চলছে → চলমান প্যাসিভ is being + V3।", en: "Happening right now → the running passive is being + V3.", hi: "इस समय हो रहा → चलता पैसिव is being + V3।" } },
        { question: "English ___ all over the world.", options: ["speaks", "is spoken", "is speaking", "has spoken"], answer: 1, explanation: { bn: "সাধারণ কর্তা মুছে যায় → is spoken।", en: "The general doer drops out → is spoken.", hi: "सामान्य कर्ता मिट जाता है → is spoken।" } },
        { question: "The accident ___ last night.", options: ["was happened", "happened", "is happened", "did happened"], answer: 1, explanation: { bn: "happen intransitive — প্যাসিভ রূপই নেই → happened।", en: "happen is intransitive — it has no passive → happened.", hi: "happen intransitive है — पैसिव रूप ही नहीं → happened।" } },
        { question: "The letter ___ before I reached home.", options: ["was already sent", "had already been sent", "has already sent", "is already sent"], answer: 1, explanation: { bn: "অতীতের আগে-অতীত → past perfect প্যাসিভ had been sent।", en: "Past before the past → the past-perfect passive had been sent.", hi: "अतीत से पहले का अतीत → past perfect पैसिव had been sent।" } },
        { question: "I was ___ a beautiful gift on my birthday.", options: ["given", "gave", "giving", "give"], answer: 0, explanation: { bn: "দুই-কর্মের ক্রিয়া give — মানুষ-কর্তা প্যাসিভ I was given…।", en: "give takes two objects — with the person as subject: I was given….", hi: "give दो कर्म लेती है — इंसान subject हो तो I was given…।" } },
        { question: "It ___ that the minister will resign soon.", options: ["is said", "says", "is saying", "said"], answer: 0, explanation: { bn: "impersonal প্যাসিভ — It is said that…।", en: "The impersonal passive — It is said that….", hi: "impersonal पैसिव — It is said that…।" } },
        { question: "He ___ last month — he told me himself.", options: ["got promoted", "got promote", "was got promoted", "get promoted"], answer: 0, explanation: { bn: "কথ্য ইংরেজির get-প্যাসিভ — got + V3।", en: "Spoken English's get-passive — got + V3.", hi: "बोलचाल का get-पैसिव — got + V3।" } },
        { question: "Which sentence is correct?", options: ["The thief was caught by the police.", "The thief was caught from the police.", "The thief caught by the police.", "The thief was catch by the police."], answer: 0, explanation: { bn: "কর্তা বোঝাতে by, আর V3 — caught।", en: "The agent takes by, and V3 — caught.", hi: "कर्ता के लिए by, और V3 — caught।" } },
        { question: "This bridge ___ in 1943.", options: ["is built", "was built", "is being built", "builds"], answer: 1, explanation: { bn: "in 1943 = কাটা সময় → was built।", en: "in 1943 is closed time → was built.", hi: "in 1943 = बंद समय → was built।" } },
        { question: "Which verb CANNOT be made passive?", options: ["write", "resemble", "send", "break"], answer: 1, explanation: { bn: "resemble স্টেটিভ সম্পর্ক-ক্রিয়া — প্যাসিভ হয় না; বাকি তিনটি ট্রানজিটিভ।", en: "resemble is a stative relationship verb — it refuses the passive; the other three are transitive.", hi: "resemble stative संबंध-क्रिया है — पैसिव नहीं होती; बाकी तीन transitive हैं।" } },
      ],
    },
  },
];
