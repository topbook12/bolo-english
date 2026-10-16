// ─── Learning-path grammar seeds v3: INTERMEDIATE batch I2 (4 deep lessons) ───
// Part of Task 9.3 (intermediate gap-filling). TriText = { bn, en, hi } — Bengali
// is the PRIMARY explanation language; en + hi are complete faithful translations.
// English example sentences stay English; wrong/right pairs capture realistic
// Bengali-speaker errors. quiz included (8-10 items per lesson, reserved schema).
import type { LibraryGrammarData, LibraryLevel } from "../../src/lib/library-types";

export interface SeedGrammarV3Entry {
  topic: string; // canonical topic id (stable, unique vs static bank topics)
  level: LibraryLevel;
  title: string;
  unit: number; // 1-5 = on the learning path; 0 = extra library lesson
  data: LibraryGrammarData;
}

export const SEED_GRAMMAR_V3_I2: SeedGrammarV3Entry[] = [
  /* ── 1. Modals (can/should/must) ───────────────────────────────────── */
  {
    topic: "Modals (can/should/must)",
    level: "intermediate",
    title: "Modals can/should/must (Intermediate)",
    unit: 0,
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
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয় — মোডালের চার কাজ ও বাধ্যবাধকতার সিঁড়ি",
            en: "When to use them — the four jobs of modals and the obligation ladder",
            hi: "कब इस्तेमाल होते हैं — मोडल के चार काम और बाध्यता की सीढ़ी",
          },
          body: {
            bn: "মোডাল হলো সাহায্যকারী ক্রিয়া যা মূল ক্রিয়ার আগে বসে বক্তার মনোভাব যোগ করে। চারটা বড় কাজ: (১) সামর্থ্য — can (বর্তমান), could (অতীত): 'I can drive', 'I could swim when I was five'। (২) অনুমতি — Can I...? / Could I...? / May I...? (৩) পরামর্শ-উপদেশ — should, ought to। (৪) বাধ্যবাধকতা ও নিষেধ — must, have to, mustn't। এর বাইরে অনুমানেও মোডাল চলে: 'The lights are on — they must be home' (নিশ্চয়ই বাড়িতে আছে)। একই ঘটনা, কিন্তু মোডাল বদলালে বক্তার দৃষ্টিভঙ্গি বদলে যায় — এটাই মোডালের আসল শক্তি।",
            en: "A modal is a helping verb that sits before the main verb and adds the speaker's attitude. Four big jobs: (1) ability — can (present), could (past): 'I can drive', 'I could swim when I was five'. (2) permission — Can I...? / Could I...? / May I...? (3) advice — should, ought to. (4) obligation and prohibition — must, have to, mustn't. Beyond these, modals also express deduction: 'The lights are on — they must be home'. Same event, but change the modal and the speaker's stance changes — that is the real power of modals.",
            hi: "मोडल सहायक क्रिया है जो मुख्य क्रिया से पहले बैठकर बोलने वाले का दृष्टिकोण जोड़ती है। चार बड़े काम: (1) क्षमता — can (वर्तमान), could (अतीत): 'I can drive', 'I could swim when I was five'। (2) अनुमति — Can I...? / Could I...? / May I...? (3) सलाह — should, ought to। (4) बाध्यता और निषेध — must, have to, mustn't। इसके अलावा अनुमान में भी मोडल चलते हैं: 'The lights are on — they must be home'। वही घटना, पर मोडल बदलते ही बोलने वाले का रुख़ बदल जाता है — यही मोडल की असली ताकत है।",
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
            bn: "গঠন — মোডালের পরে কী বসে, কী বসে না",
            en: "Formation — what follows a modal and what never does",
            hi: "गठन — मोडल के बाद क्या आता है, क्या कभी नहीं",
          },
          body: {
            bn: "মূল সূত্র তিনটে: (১) মোডালের পরে verb-এর base রূপ — to নয়, -ing নয়: can swim, should go, must leave। (২) মোডালে কোনো -s যোগ হয় না — he can, she must; কর্তা যা-ই হোক। (৩) প্রশ্ন-নেগেটিভে do/does/did আসে না — মোডাল নিজেই subject-এর সামনে চলে আসে: Can you help me? You shouldn't worry। তাই 'Do you can help me?' আর 'He musts go' — দুটোই ইংরেজিতে অসম্ভব বাক্য।",
            en: "Three core rules: (1) after a modal comes the base verb — no to, no -ing: can swim, should go, must leave. (2) A modal never takes -s — he can, she must, whatever the subject. (3) No do/does/did in questions or negatives — the modal itself moves in front: Can you help me? You shouldn't worry. So 'Do you can help me?' and 'He musts go' are impossible sentences in English.",
            hi: "तीन मूल नियम: (1) मोडल के बाद base verb — to नहीं, -ing नहीं: can swim, should go, must leave। (2) मोडल पर कभी -s नहीं लगता — he can, she must। (3) प्रश्न-नकारात्मक में do/does/did नहीं आता — मोडल खुद आगे चला आता है: Can you help me? You shouldn't worry। इसलिए 'Do you can help me?' और 'He musts go' — दोनों असंभव वाक्य हैं।",
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
            bn: "আভাস ও প্যাটার্ন — কোন মোডাল বেছে নেবেন",
            en: "Cues and patterns — choosing the right modal",
            hi: "संकेत और पैटर्न — सही मोडल का चुनाव",
          },
          body: {
            bn: "মুখ খোলার আগে নিজেকে তিনটা প্রশ্ন করুন। প্রথম: এটা কি নিয়ম, নাকি পরামর্শ? নিয়ম হলে must/have to; পরামর্শ হলে should। দ্বিতীয়: কথাটা কি নিষেধ, নাকি 'দরকার নেই'? নিষেধ হলে mustn't; দরকার নেই হলে don't have to — এই দুইয়ের ফারাক পরের অংশে বিস্তারিত। তৃতীয়: কথাটা কি বর্তমান সম্পর্কে, নাকি অতীত? অতীতে গেলেই মোডাল + have + V3 বসবে (should have gone, must have seen), আর must-এর অতীত হয় had to।",
            en: "Ask yourself three questions before you speak. First: is it a rule or advice? Rule → must/have to; advice → should. Second: is the sentence a prohibition or 'not necessary'? Prohibition → mustn't; not necessary → don't have to (the difference comes in the next part). Third: is it about now or the past? The past always needs modal + have + V3 (should have gone, must have seen), and the past of 'must' is 'had to'.",
            hi: "बोलने से पहले खुद से तीन सवाल पूछें। पहला: यह नियम है या सलाह? नियम → must/have to; सलाह → should। दूसरा: वाक्य निषेध है या 'ज़रूरी नहीं'? निषेध → mustn't; ज़रूरी नहीं → don't have to। तीसरा: बात वर्तमान की है या अतीत की? अतीत में हमेशा मोडल + have + V3 (should have gone, must have seen), और must का अतीत had to है।",
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
            bn: "mustn't বনাম don't have to — সবচেয়ে বিপজ্জনক ফারাক",
            en: "mustn't vs don't have to — the most dangerous difference",
            hi: "mustn't बनाम don't have to — सबसे ख़तरनाक फर्क",
          },
          body: {
            bn: "এই দুইয়ের ফারাক না বুঝলে মারাত্মক গোলমাল হতে পারে। mustn't = নিষেধ — করবেই না, করা ভুল/বিপজ্জনক/নিষিদ্ধ। don't have to = বাধ্য নও — চাইলে করতে পারো, কিন্তু প্রয়োজন নেই। বাংলায় দুটোই আমরা এক মুখে 'করতে হবে না' বলে ফেলি — সেখানেই ফাঁদ। 'You mustn't tell anyone' মানে কাউকে বলবেই না; 'You don't have to tell me' মানে বলা জরুরি নয়, চাইলে বলো।",
            en: "Mixing these two up can cause real trouble. mustn't = prohibited — do NOT do it; it is wrong, dangerous or forbidden. don't have to = not obliged — you may do it, but there is no need. Bengali says both as 'করতে হবে না', and that is the trap. 'You mustn't tell anyone' means keep it secret; 'You don't have to tell me' means it is optional.",
            hi: "इन दोनों का फर्क न समझने पर बड़ी उलझन हो सकती है। mustn't = निषेध — करें ही नहीं; यह गलत/ख़तरनाक/मना है। don't have to = बाध्य नहीं — चाहें तो कर सकते हैं, पर ज़रूरत नहीं। हिंदी में दोनों को 'करना नहीं है' कह देने से उलझन होती है। 'You mustn't tell anyone' का अर्थ किसी को बिल्कुल न बताएँ; 'You don't have to tell me' का अर्थ बताना ज़रूरी नहीं।",
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
            bn: "অতীতের আফসোস ও অনুমান — should have / must have / can't have + V3",
            en: "Past regret and deduction — should have / must have / can't have + V3",
            hi: "अतीत का पछतावा और अनुमान — should have / must have / can't have + V3",
          },
          body: {
            bn: "should have + V3 (তৃতীয় রূপ) বলে অতীতে যা হওয়া উচিত ছিল কিন্তু হয়নি — আফসোস বা দোষারোপ: 'You should have called me' (ফোন করা উচিত ছিল, করোনি — আমি মন খারাপ করেছি)। উল্টোটা shouldn't have + V3 — অতীতে যা করেছি তার আফসোস: 'I shouldn't have said that' (বলা উচিত হয়নি)। মনে রাখুন — বাংলায় 'উচিত ছিল' বললেই ইংরেজিতে শুধু should নয়, অতীতের কাজ হলে should have + V3 লাগবেই।",
            en: "should have + V3 (past participle) expresses what should have happened in the past but did not — regret or blame: 'You should have called me'. The opposite, shouldn't have + V3, regrets something you did do: 'I shouldn't have said that'. Remember — Bengali 'উচিত ছিল' about a past action needs should have + V3 in English, not bare should.",
            hi: "should have + V3 (तीसरा रूप) बताता है कि अतीत में क्या होना चाहिए था पर नहीं हुआ — पछतावा या दोषारोपण: 'You should have called me'। इसका उल्टा shouldn't have + V3 — जो किया उसका पछतावा: 'I shouldn't have said that'। याद रखें — हिंदी का 'चाहिए था' अतीत के काम पर should have + V3 चाहता है, केवल should नहीं।",
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
            bn: "সেমি-মোডাল: have to, need to, ought to",
            en: "Semi-modals: have to, need to, ought to",
            hi: "सेमी-मोडल: have to, need to, ought to",
          },
          body: {
            bn: "have to হলো 'বাইরের নিয়মের' মোডাল — বসের নির্দেশ, স্কুলের রুল, ট্রেনের সময়সূচি। must-এর সাথে সূক্ষ্ম ফারাক: 'I must stop smoking' — সিদ্ধান্ত আমার নিজের, ভেতর থেকে; 'I have to stop smoking' — ডাক্তার বলেছেন, বাইরে থেকে। আর must-এর বিশেষ সুবিধা নেই: এর past, future, question — সব have to দিয়েই হয় (had to, will have to, Do you have to...?)। অর্থাৎ must শুধু বর্তমানে, তাও আনুষ্ঠানিক বা জোরালো অর্থে।",
            en: "have to is the modal of external rules — the boss's order, the school rule, the timetable. The fine difference from must: 'I must stop smoking' — my own inner decision; 'I have to stop smoking' — the doctor says so. And 'must' has no special powers: its past, future and questions all go through have to (had to, will have to, Do you have to...?). So must lives only in the present, in formal or emphatic use.",
            hi: "have to बाहरी नियमों का मोडल है — बॉस का आदेश, स्कूल का नियम, समय-सारणी। must से सूक्ष्म फर्क: 'I must stop smoking' — निर्णय मेरा अपना, भीतर से; 'I have to stop smoking' — डॉक्टर ने कहा है, बाहर से। must के पास कोई विशेषाधिकार नहीं: इसका past, future, प्रश्न — सब have to से होते हैं (had to, will have to, Do you have to...?)।",
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
            bn: "বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "Common mistakes by Bengali speakers",
            hi: "बांग्लाभाषी विद्यार्थियों की सामान्य गलतियाँ",
          },
          body: {
            bn: "বাংলার 'করতে পারা', 'করা উচিত', 'করতে হবে' — এই গঠনগুলোতেই infinitive ('করতে') ঢুকে থাকে, তাই শিক্ষার্থীরা স্বয়ংক্রিয়ভাবে can to, should to, must to বসিয়ে ফেলেন। আর 'অবশ্যই' শব্দের অতি-ব্যবহার থেকে সব জায়গায় must চলে আসে — অথচ ইংরেজিতে অপরিচিতের সাথে must দিয়ে অনুরোধ করলে সেটা রুক্ষ হুকুম শোনায়। সমাধান: অনুরোধে Could/Would you...?, পরামর্শে should, কঠোর নিয়মেই শুধু must।",
            en: "The Bengali patterns 'করতে পারা', 'করা উচিত', 'করতে হবে' all contain an infinitive ('করতে'), so learners automatically produce can to, should to, must to. And overusing the Bengali word for 'certainly' pushes 'must' into every request — but in English, must with a stranger sounds like a harsh order. The fix: requests take Could/Would you...?, advice takes should, and must is reserved for hard rules.",
            hi: "हिंदी/बांग्ला के 'करना', 'चाहिए', 'होगा' पैटर्न से learners स्वतः can to, should to, must to लगा देते हैं। और 'अवश्य' के अति-उपयोग से हर अनुरोध में must आ जाता है — पर अंग्रेज़ी में अजनबी से must कहना कठोर आदेश लगता है। समाधान: अनुरोध में Could/Would you...?, सलाह में should, और must केवल कठोर नियमों के लिए।",
          },
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
            bn: "ছোট গল্পে দেখা যাক",
            en: "A short story to see it all",
            hi: "एक छोटी कहानी में सब देखें",
          },
          body: {
            bn: "রবিবার রাতে রুমি ভাবল, 'I must finish this report tonight — it is my own deadline.' সোমবার সকালে বস বললেন, 'You have to sign this form before noon — it is a company rule.' সহকর্মী পরামর্শ দিল, 'You should take a short break; you look tired.' রুমি হাসল, 'You don't have to worry about me.' হঠাৎ সে কিচেনের দিকে ধোঁয়া দেখল আর চিৎকার করল, 'The stove is on! You mustn't leave it unattended!' পরে ভাবল, 'Someone must have been cooking and gone out. He can't have heard me from the meeting room.' — পাঁচ মিনিটেই পাঁচ রকম মোডাল!",
            en: "On Sunday night Rumi thought, 'I must finish this report tonight — it is my own deadline.' On Monday morning the boss said, 'You have to sign this form before noon — it is a company rule.' A colleague advised, 'You should take a short break; you look tired.' Rumi smiled, 'You don't have to worry about me.' Suddenly he saw smoke in the kitchen and shouted, 'The stove is on! You mustn't leave it unattended!' Later he thought, 'Someone must have been cooking and gone out. He can't have heard me from the meeting room.' — five kinds of modal in five minutes!",
            hi: "रविवार रात रुमी ने सोचा, 'I must finish this report tonight — it is my own deadline.' सोमवार सुबह बॉस ने कहा, 'You have to sign this form before noon — it is a company rule.' एक सहकर्मी ने सलाह दी, 'You should take a short break; you look tired.' रुमी मुस्कुराया, 'You don't have to worry about me.' अचानक उसने रसोई में धुआँ देखा और चिल्लाया, 'The stove is on! You mustn't leave it unattended!' बाद में सोचा, 'Someone must have been cooking and gone out. He can't have heard me from the meeting room.' — पाँच मिनट में पाँच तरह के मोडल!",
          },
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
        { bn: "প্রতিদিন নিজের দিনের তিনটা বাক্য মোডাল দিয়ে বলুন: I have to..., I should..., I can... — সিঁড়িটা হাতে-কলমে নামুন।", en: "Each day say three sentences of your own day with modals: I have to..., I should..., I can... — climb the ladder hands-on.", hi: "रोज़ अपने दिन के तीन वाक्य मोडल से बोलें: I have to..., I should..., I can... — सीढ़ी प्रत्यक्ष चढ़ें।" },
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
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয় — নেটিভ কথাবার্তার মূল উপকরণ",
            en: "When to use them — the backbone of native conversation",
            hi: "कब इस्तेमाल होते हैं — नेटिव बातचीत की रीढ़",
          },
          body: {
            bn: "Phrasal verb = একটা ক্রিয়া + ছোট particle (on, off, up, out, after...) — জুটিটা মিলে এমন অর্থ বানায় যা অংশ ধরে অনুমান করা যায় না: give up = হাল ছাড়া ('দান করে উপরে' নয়!), find out = খুঁজে বের করা, get up = বিছানা থেকে ওঠা, come across = হুট করে পেয়ে যাওয়া। নেটিভ স্পিকারের দৈনন্দিন কথায় এরাই প্রথম পছন্দ — চলচ্চিত্র-নাটক-অফিসের আড্ডায় 'postpone' নয়, 'put off' শোনা যায়; 'discover' নয়, 'find out'।",
            en: "A phrasal verb = one verb + a small particle (on, off, up, out, after...) — the pair makes a meaning you cannot guess from the parts: give up = stop trying (not 'donate upward'!), find out = discover, get up = leave the bed, come across = stumble upon. In native daily talk these are the first choice — films, dramas and office chatter say put off, not postpone; find out, not discover.",
            hi: "Phrasal verb = एक क्रिया + छोटा particle (on, off, up, out, after...) — जोड़ी मिलकर ऐसा अर्थ बनाती है जो हिस्सों से अनुमान नहीं होता: give up = हार मानना, find out = पता लगाना, get up = बिस्तर से उठना, come across = अचानक मिलना। नेटिव की रोज़मर्रा की बात में यही पहली पसंद हैं — फ़िल्म-ऑफिस में postpone नहीं, put off; discover नहीं, find out सुनाई देता है।",
          },
          examples: [
            { wrong: "Please on the fan.", right: "Please turn on the fan.", note: { bn: "বাংলায় 'অন করা' এক ক্রিয়ার মতো চলে; ইংরেজিতে particle (on) একা ক্রিয়া নয় — turn on / switch on জুটি লাগবে।", en: "In Bangla 'অন করা' works as one verb, but the particle 'on' can never act alone — you need turn on / switch on.", hi: "बांग्ला में 'ऑन करना' एक क्रिया जैसा चलता है, पर 'on' अकेले क्रिया नहीं — turn on / switch on जोड़ी चाहिए।" } },
            { wrong: "Our sugar finished yesterday.", right: "We ran out of sugar yesterday.", note: { bn: "'ফুরিয়ে গেছে' বোঝাতে run out of; 'finished' বললে মনে হয় চিনি নিজে কাজ শেষ করেছে!", en: "For 'we have none left' use run out of; 'finished' makes it sound as if the sugar completed a job!", hi: "'खत्म हो गया' के लिए run out of; 'finished' कहने पर चीनी खुद काम करके थक गई लगती है!" } },
            { wrong: "Every morning I arise from my bed at six.", right: "Every morning I get up at six.", note: { bn: "দৈনন্দিন কথায় বিছানা ছাড়ার ক্রিয়া get up; arise সাহিত্যিক/আনুষ্ঠানিক — 'সমস্যা উদ্ভূত হওয়া' অর্থে চলে।", en: "Everyday English uses get up for leaving the bed; arise is literary/formal (a problem arose).", hi: "रोज़मर्रा की बात में बिस्तर छोड़ने के लिए get up; arise साहित्यिक/औपचारिक है (a problem arose)।" } },
            { wrong: "The meeting was cancelled, so we will do it next week.", right: "The meeting was put off until next week.", note: { bn: "'মুলতবি' কথায় put off; postpone ঠিক কিন্তু আনুষ্ঠানিক শোনায় — until দিয়ে কখন পর্যন্ত তা-ও বলুন।", en: "For postponing, speech prefers put off; postpone is correct but formal. Add 'until' + time.", hi: "स्थगित करने के लिए बोलचाल में put off; postpone सही पर औपचारिक है — 'until' + समय जोड़ें।" } },
          ],
        },
        {
          heading: {
            bn: "গঠন — তিন ধরন: separable, inseparable, three-word",
            en: "Formation — three types: separable, inseparable, three-word",
            hi: "गठन — तीन प्रकार: separable, inseparable, three-word",
          },
          body: {
            bn: "ধরন তিনটা। (১) Separable: object মাঝখানে বা শেষে দুই জায়গাতেই যেতে পারে — turn on the light / turn the light on। কিন্তু object pronoun (it, him, her, them) হলে মাঝখানেই বাধ্যতামূলক: turn it on — 'turn on it' কখনো নয়। (২) Inseparable: ক্রিয়া-particle পাশাপাশি আটকে থাকে — look after the baby / look after her; 'look her after' ভুল। (৩) Three-word (verb + adverb + preposition): run out of, put up with, look forward to, get along with — এরাও inseparable: 'ran out of milk', কখনো 'ran of milk out' নয়।",
            en: "Three types. (1) Separable: the object can sit in the middle or at the end — turn on the light / turn the light on; but a pronoun object (it, him, her, them) MUST go in the middle: turn it on, never 'turn on it'. (2) Inseparable: verb and particle stay glued — look after the baby / look after her; 'look her after' is wrong. (3) Three-word (verb + adverb + preposition): run out of, put up with, look forward to, get along with — also inseparable: 'ran out of milk', never 'ran of milk out'.",
            hi: "तीन प्रकार। (1) Separable: object बीच में या अंत में दोनों जगह जा सकता है — turn on the light / turn the light on; पर pronoun (it, him, her, them) हमेशा बीच में: turn it on, कभी 'turn on it' नहीं। (2) Inseparable: क्रिया-particle चिपके रहते हैं — look after the baby / look after her; 'look her after' गलत। (3) Three-word: run out of, put up with, look forward to, get along with — ये भी inseparable: 'ran out of milk', कभी 'ran of milk out' नहीं।",
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
            bn: "আভাস ও প্যাটার্ন — particle-এর মেজাজ চিনুন",
            en: "Cues and patterns — read the mood of each particle",
            hi: "संकेत और पैटर्न — particle का मिज़ाज पहचानें",
          },
          body: {
            bn: "particle-গুলোর নিজস্ব 'মেজাজ' আছে — এটা চিনলে অজানা phrasal verb-এর অর্থও আঁচ করা যায়। up মানে প্রায়ই 'পুরোপুরি শেষ/সম্পূর্ণ' — eat up, use up, clean up। off = বিচ্ছিন্ন/বন্ধ — turn off, call off (বাতিল), put off (মুলতবি)। on = সংযোগ/চালু — turn on, put on (পরা), try on (মেপে দেখা)। out = বাইরে/জেনে ফেলা — find out, figure out, point out। নতুন জুটি শুনলে particle-এর এই মেজাজ মিলিয়ে অর্থের আন্দাজ করুন, তারপর ডিকশনারিতে মিলিয়ে নিন।",
            en: "Each particle has its own 'mood' — recognise it and you can guess unfamiliar phrasal verbs. up often means 'completely/finished' — eat up, use up, clean up. off = disconnected/cancelled — turn off, call off (cancel), put off (postpone). on = connection/activated — turn on, put on (wear), try on (test clothes). out = outward/into knowledge — find out, figure out, point out. When you hear a new pair, use the particle's mood to predict the meaning, then confirm in a dictionary.",
            hi: "हर particle का अपना 'मिज़ाज' है — पहचान लें तो नए phrasal verb का अर्थ भी अंदाज़ा हो जाता है। up अक्सर 'पूरी तरह/समाप्त' — eat up, use up, clean up। off = अलग/रद्द — turn off, call off, put off। on = जुड़ाव/चालू — turn on, put on, try on। out = बाहर/पता लगाना — find out, figure out, point out। नई जोड़ी सुनते ही particle का मिज़ाज मिलाकर अर्थ अनुमान करें, फिर शब्दकोश से मिलाएँ।",
          },
          examples: [
            { wrong: "Please pick up it from the floor.", right: "Please pick it up from the floor.", note: { bn: "pronoun মাঝে; 'pick up it' কানে ভুল লাগে — এই ড্রিল প্রতিদিন করুন।", en: "The pronoun goes in the middle; 'pick up it' sounds off — drill this daily.", hi: "pronoun बीच में; 'pick up it' गलत सुनाई देता है — यह ड्रिल रोज़ करें।" } },
            { wrong: "The plane will take after at noon.", right: "The plane will take off at noon.", note: { bn: "বিমান ওড়া = take off; take after মানে চেহারা-স্বভাবে কারো মতো হওয়া — পুরো ভিন্ন অর্থ।", en: "A plane takes off; take after means to resemble someone — entirely different meanings.", hi: "विमान take off होता है; take after का अर्थ किसी जैसा दिखना — पूरी तरह अलग।" } },
            { wrong: "He takes up his father — both are very calm.", right: "He takes after his father — both are very calm.", note: { bn: "চেহারা-স্বভাবে মিল = take after; take up মানে নতুন শখ/কাজ শুরু করা।", en: "Resembling someone = take after; take up means to start a hobby or activity.", hi: "किसी जैसा होना = take after; take up का अर्थ नया शौक/काम शुरू करना।" } },
            { wrong: "I used my savings all last year.", right: "I used up all my savings last year.", note: { bn: "'নিঃশেষ করা' = use up; up এখানে সম্পূর্ণতা বোঝায় — use একা মানে সাধারণ ব্যবহার।", en: "To exhaust something = use up; 'up' adds completeness — plain 'use' just means to employ.", hi: "'निःशेष करना' = use up; up यहाँ पूर्णता दर्शाता है — अकेला use सिर्फ़ उपयोग करना है।" } },
          ],
        },
        {
          heading: {
            bn: "এক ক্রিয়া, অনেক particle — take ও get পরিবার",
            en: "One verb, many particles — the take and get families",
            hi: "एक क्रिया, अनेक particle — take और get परिवार",
          },
          body: {
            bn: "take পরিবার: take off — (ক) পোশাক/জুতা খোলা ('Take off your shoes'), (খ) বিমান ওড়া ('The plane took off on time'); take after — কারো চেহারা/স্বভাব উত্তরাধিকারসূত্রে আসা ('She takes after her mother'); take up — নতুন কিছু শুরু করা ('He took up photography'); take in — মনে গেঁথে নেওয়া বা ঠকে যাওয়া ('I couldn't take in the whole lecture'); take back — কথা/জিনিস ফিরিয়ে নেওয়া ('I take back what I said')।",
            en: "The take family: take off — (a) remove clothes/shoes ('Take off your shoes'), (b) a plane leaves the ground ('The plane took off on time'); take after — inherit someone's looks or nature ('She takes after her mother'); take up — start something new ('He took up photography'); take in — absorb, or be deceived ('I couldn't take in the whole lecture'); take back — withdraw words or return a thing ('I take back what I said').",
            hi: "take परिवार: take off — (क) कपड़े/जूते उतारना, (ख) विमान उड़ना; take after — किसी का रूप-स्वभाव विरासत में आना ('She takes after her mother'); take up — कुछ नया शुरू करना ('He took up photography'); take in — मन में उतारना या ठगा जाना; take back — कही बात/चीज़ वापस लेना ('I take back what I said')।",
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
            bn: "রোজকার শীর্ষ জুটি — ক্লাস্টারে শেখা",
            en: "The everyday top pairs — learn in clusters",
            hi: "रोज़मर्रा की शीर्ष जोड़ियाँ — समूह में सीखें",
          },
          body: {
            bn: "তালিকা মুখস্থের বদলে জীবনের বিভাজনে শিখুন। সকাল: wake up (ঘুম ভাঙা), get up (উঠে পড়া), get dressed, put on (পরা), take off (খোলা)। কাজ-পড়া: put off (মুলতবি), give up (হাল ছাড়া), find out (জেনে নেওয়া), hand in (জমা দেওয়া), fill in (ফর্ম পূরণ), look forward to (আগ্রহে অপেক্ষা), carry on (চালিয়ে যাওয়া), set up (স্থাপন/গোছানো)। ঘর-বাজার: turn on/off, clean up, pick up (কুড়ানো; কাউকে গাড়িতে তোলাও!), run out of (ফুরানো), come across (হুট করে পাওয়া), sort out (গুছিয়ে ফেলা)।",
            en: "Skip lists; learn by life-clusters. Morning: wake up, get up, get dressed, put on, take off. Work-study: put off, give up, find out, hand in, fill in, look forward to, carry on, set up. Home-market: turn on/off, clean up, pick up (lift from the floor; also collect someone by car!), run out of, come across, sort out.",
            hi: "सूची रटने के बजाय जीवन के समूहों में सीखें। सुबह: wake up, get up, get dressed, put on, take off। काम-पढ़ाई: put off, give up, find out, hand in, fill in, look forward to, carry on, set up। घर-बाज़ार: turn on/off, clean up, pick up, run out of, come across, sort out।",
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
            bn: "আনুষ্ঠানিক নাকি কথ্য? — রেজিস্টার ও বাংলা ম্যাপিং",
            en: "Formal or informal? — register and Bengali mapping",
            hi: "औपचारिक या बोलचाल? — register और बांग्ला मैपिंग",
          },
          body: {
            bn: "একই অর্থের দুই দল শব্দ: কথ্য phrasal verb আর আনুষ্ঠানিক একক শব্দ। find out = discover, put off = postpone, put up with = tolerate, look into = investigate, call off = cancel, give up = abandon, sort out = resolve, bring up = raise (বিষয়)। কথায়-ইমেইলে phrasal verb স্বাভাবিক; সরকারি রিপোর্ট-একাডেমিক লেখায় একক আনুষ্ঠানিক শব্দ ভালো শোনায়। দুই দলই শিখুন — শোনার সময় phrasal, লেখার সময় formal-এ সুইচ করতে পারবেন।",
            en: "One meaning, two word-families: everyday phrasal verbs vs formal single words. find out = discover, put off = postpone, put up with = tolerate, look into = investigate, call off = cancel, give up = abandon, sort out = resolve, bring up = raise (a topic). In speech and emails, phrasal verbs are natural; in official reports and academic writing, the formal single word reads better. Learn both so you can switch — phrasal when listening, formal when writing.",
            hi: "एक ही अर्थ, दो शब्द-परिवार: रोज़मर्रा के phrasal verbs और औपचारिक एकल शब्द। find out = discover, put off = postpone, put up with = tolerate, look into = investigate, call off = cancel, sort out = resolve। बातचीत-ईमेल में phrasal स्वाभाविक; सरकारी रिपोर्ट-शोध लेखन में औपचारिक शब्द बेहतर — दोनों सीखें।",
          },
          examples: [
            { wrong: "Please discover the train time for me.", right: "Please find out the train time for me.", note: { bn: "তথ্য জেনে নেওয়া কথায় find out; discover এখানে আনুষ্ঠানিক-বিদঘুটে শোনায়।", en: "For getting information, speech uses find out; discover sounds formal and odd here.", hi: "जानकारी निकालने के लिए find out; discover यहाँ अटपटा लगेगा।" } },
            { wrong: "I grew in Chattogram.", right: "I grew up in Chattogram.", note: { bn: "কোথায় বড় হয়ে উঠেছ = grow up; up ছাড়া grow মানে লম্বা-চওড়া হওয়া বা চাষ করা।", en: "Being raised somewhere = grow up; plain grow means to increase or cultivate.", hi: "कहाँ बड़े हुए = grow up; अकेला grow का अर्थ बढ़ना या उगाना।" } },
            { wrong: "She called to her mother last night.", right: "She called her mother last night.", note: { bn: "ফোন করা = call someone — to লাগে না; 'চিৎকার করে ডাকা' বোঝালে call out to।", en: "Phoning = call someone — no 'to'; 'call out to' is for shouting to get attention.", hi: "फ़ोन करना = call someone — to नहीं; 'call out to' चिल्लाकर बुलाना है।" } },
            { wrong: "We discussed about the new plan.", right: "We discussed the new plan.", note: { bn: "discuss ট্রানজিটিভ — object সরাসরি; 'discuss about' বাংলা 'আলোচনা সম্পর্কে'-র ক্যালক।", en: "Discuss is transitive — a direct object; 'discuss about' is a Bengali calque.", hi: "discuss transitive है — सीधा object; 'discuss about' अनुवाद-जाल है।" } },
          ],
        },
        {
          heading: {
            bn: "বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "Common mistakes by Bengali speakers",
            hi: "बांग्लाभाषी विद्यार्थियों की सामान्य गलतियाँ",
          },
          body: {
            bn: "সবচেয়ে কমন ভুল তিনটে: (১) particle-কে একা ক্রিয়া বানানো — 'on the fan', 'off the TV'; (২) pronoun শেষে রাখা — 'turn off it', 'pick up it'; (৩) তিন-অংশের জুটি ভাঙা — 'put up his behaviour' (with ছাড়া), 'looking forward to meet' (to-র পরে base verb)। এই তিনটা ঠিক করলে উচ্চারণের চেয়েও বড় একটা 'ভাষার গন্ধ' মিলিয়ে যায়। আরেক দল ভুল আসে বাংলা ক্রিয়ার সরাসরি অনুবাদ থেকে: 'চিনি শেষ' → 'Our sugar finished', 'গাড়ি থেকে নামা' → 'come down from the car'।",
            en: "The three most common errors: (1) using the particle as a verb alone — 'on the fan', 'off the TV'; (2) leaving the pronoun at the end — 'turn off it', 'pick up it'; (3) breaking three-part pairs — 'put up his behaviour' (no with), 'looking forward to meet' (base verb after to). Fix these three and a big layer of 'foreigner smell' disappears. Another batch comes from translating Bengali verbs directly: 'চিনি শেষ' → 'Our sugar finished', 'গাড়ি থেকে নামা' → 'come down from the car'.",
            hi: "तीन सबसे सामान्य गलतियाँ: (1) particle को अकेला क्रिया बनाना — 'on the fan', 'off the TV'; (2) pronoun को अंत में रखना — 'turn off it', 'pick up it'; (3) तीन-भाग की जोड़ी तोड़ना — 'put up his behaviour', 'looking forward to meet'। ये तीन ठीक करते ही 'विदेशी स्वाद' की परत मिट जाती है। दूसरा समूह सीधे अनुवाद से आता है: 'चीनी खत्म' → 'Our sugar finished', 'गाड़ी से उतरना' → 'come down from the car'।",
          },
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
            bn: "ছোট গল্পে দেখা যাক",
            en: "A short story to see it all",
            hi: "एक छोटी कहानी में सब देखें",
          },
          body: {
            bn: "সোহেলের সকাল: 'I woke up late because my alarm didn't go off. I got dressed quickly, picked up my bag and hurried out. On the way the car ran out of petrol! I called up my cousin, and he showed up in twenty minutes.' অফিসে ম্যানেজার জানালেন, ক্লায়েন্ট মিটিং call off হয়ে গেছে — 'The meeting was called off.' সোহেল হাসতে হাসতে ভাবল, সারারাত স্লাইড বানাতে গিয়ে সে stayed up করেছে! সহকর্মী বলল, 'Don't worry — you can use them next week. By the way, can you look after my desk while I'm on leave?' সোহেল রাজি হলো: 'Sure — I get along with your plants too!'",
            en: "Sohel's morning: 'I woke up late because my alarm didn't go off. I got dressed quickly, picked up my bag and hurried out. On the way the car ran out of petrol! I called up my cousin, and he showed up in twenty minutes.' At the office the manager announced the client meeting had been called off. Sohel smiled — he had stayed up all night making slides! A colleague said, 'Don't worry — you can use them next week. By the way, can you look after my desk while I'm on leave?' Sohel agreed: 'Sure — I get along with your plants too!'",
            hi: "सोहेल की सुबह: 'I woke up late because my alarm didn't go off. I got dressed quickly, picked up my bag and hurried out. On the way the car ran out of petrol! I called up my cousin, and he showed up in twenty minutes.' ऑफिस में मैनेजर ने बताया कि क्लाइंट मीटिंग call off हो गई। सोहेल मुस्कुराया — वह सारी रात स्लाइड्स बनाते हुए stayed up किए था! सहकर्मी ने कहा, 'Don't worry — you can use them next week. By the way, can you look after my desk while I'm on leave?' सोहेल ने हामी भरी: 'Sure — I get along with your plants too!'",
          },
          examples: [
            { wrong: "My alarm didn't ring off, so I woke up late.", right: "My alarm didn't go off, so I woke up late.", note: { bn: "অ্যালার্ম বাজা = go off; ring off মানে ফোনের কথা শেষ করে রাখা।", en: "An alarm goes off; ring off means to end a phone call.", hi: "अलार्म go off होता है; ring off का अर्थ फ़ोन पर बात खत्म करना।" } },
            { wrong: "He showed in twenty minutes and picked the files up for me." , right: "He showed up in twenty minutes and picked up the files for me.", note: { bn: "হাজির = show up; আর full noun object (the files) শেষে-মাঝে দুই জায়গাতেই চলে।", en: "To arrive = show up; a full noun object (the files) may sit in the middle or at the end.", hi: "पहुँचना = show up; पूरा noun object (the files) बीच में या अंत में दोनों जगह चलता है।" } },
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
        { question: "I ___ an old classmate at the market yesterday.", options: ["came across", "came up", "came off", "came out"], answer: 0, explanation: { bn: "হুট করে দেখা/পাওয়া = come across — inseparable জুটি।", en: "To meet or find by chance = come across — an inseparable pair.", hi: "अचानक मिलना/मिलना = come across — inseparable जोड़ी।" } },
        { question: "The school picnic was ___ because of the storm.", options: ["called off", "called on", "called up", "called for"], answer: 0, explanation: { bn: "বাতিল = call off; called up মানে ফোন করা, called on মানে আহ্বান করা।", en: "Cancelled = called off; called up means phoned, called on means appealed to.", hi: "रद्द = called off; called up फ़ोन करना, called on अपील करना।" } },
      ],
    },
  },

  /* ── 3. Common Mistakes by Bengali Speakers ────────────────────────── */
  {
    topic: "Common Mistakes by Bengali Speakers",
    level: "intermediate",
    title: "Common Mistakes by Bengali Speakers (Intermediate)",
    unit: 0,
    data: {
      title: {
        bn: "বাঙালিদের কমন ইংরেজি ভুল (মধ্যম স্তর)",
        en: "Common Mistakes by Bengali Speakers (Intermediate)",
        hi: "बांग्लाभाषियों की सामान्य अंग्रेज़ी गलतियाँ (मध्यम स्तर)",
      },
      intro: {
        bn: "এই পাঠ হাতে নেওয়ার আগে present perfect, basic prepositions আর মোডালের মূল গঠন জানা থাকা ভালো — আগের পাঠগুলো (Linking Words, Modals, Since vs For) শেষ করে এলে এখানের প্যাটার্নগুলো তৎক্ষণাৎ চেনা যাবে। বিষয়বস্তু: ক্রিয়া-প্রি-পজিশন কলোকেশন (depend ON, married TO), 'I am agree'-জাতীয় ক্রিয়া-ভুল, uncountable noun-এর ফাঁদ (informations, furnitures), শব্দক্রম-ক্যালক, suggest-প্যাটার্ন, ভারতীয়-ইংরেজি ফ্রেজ আর উচ্চারণ-ফাঁদ (v/b, s/sh) — প্রতিটার পেছনের বাংলা-উৎস চিনে চিরতরে শোধরানো।",
        en: "Before taking on this lesson, it helps to know the present perfect, basic prepositions and core modal forms — finishing the earlier lessons (Linking Words, Modals, Since vs For) will let you recognise these patterns instantly. Contents: verb-preposition collocations (depend ON, married TO), verb-form errors like 'I am agree', uncountable-noun traps (informations, furnitures), word-order calques, the suggest pattern, Indian-English phrases and pronunciation traps (v/b, s/sh) — fixing each by spotting the Bengali source underneath.",
        hi: "इस पाठ से पहले present perfect, basic prepositions और मोडल के मूल रूप जानना अच्छा है — पिछले पाठ (Linking Words, Modals, Since vs For) पूरे करके आएँगे तो यहाँ के पैटर्न तुरंत पहचानेंगे। विषय: क्रिया-preposition कोलोकेशन (depend ON, married TO), 'I am agree' जैसी क्रिया-गलतियाँ, uncountable noun के जाल (informations, furnitures), शब्द-क्रम के अनुवाद, suggest पैटर्न, भारतीय-अंग्रेज़ी वाक्यांश और उच्चारण-जाल (v/b, s/sh) — हर गलती का बांग्ला-स्रोत पहचानकर स्थायी सुधार।",
      },
      sections: [
        {
          heading: {
            bn: "ভুল কোথা থেকে আসে — কখন, কেন",
            en: "Where the mistakes come from — when and why",
            hi: "गलतियाँ कहाँ से आती हैं — कब, क्यों",
          },
          body: {
            bn: "বাংলাভাষীদের ইংরেজি ভুলের বেশিরভাগই 'অনুবাদ-ছায়া' — মাথায় আগে বাংলা বাক্য আসে, তারপর শব্দে শব্দে রূপান্তর। ফলে প্রি-পজিশন গুলিয়ে যায় (depend on → 'depend of'), অগণনযোগ্য noun-এ -s বসে ('informations'), আর বাংলার ক্রিয়া-গঠন সরাসরি কপি হয় ('I am agree')। ভারত-বাংলাদেশের পুরনো অফিস-ইংরেজির কিছু বাক্যও প্রজন্মের পর প্রজন্ম চলে আসছে — 'do the needful', 'kindly revert', 'pass out' — যেগুলো আন্তর্জাতিক ইংরেজিতে হয় অন্য অর্থ দেয়, হয় একেবারেই অচল।",
            en: "Most Bengali-speaker errors in English are 'translation shadows' — the Bengali sentence comes first in the head, then gets converted word by word. So prepositions get mixed up (depend on → 'depend of'), uncountable nouns take -s ('informations'), and Bengali verb structures are copied directly ('I am agree'). Some old office-English phrases of the subcontinent also travel down generations — 'do the needful', 'kindly revert', 'pass out' — which in international English either mean something else or nothing at all.",
            hi: "बांग्लाभाषियों की अंग्रेज़ी गलतियों का बड़ा हिस्सा 'अनुवाद-छाया' है — मस्तिष्क में पहले बांग्ला वाक्य आता है, फिर शब्द-दर-शब्द बदला जाता है। इससे prepositions उलझ जाते हैं (depend on → 'depend of'), uncountable nouns पर -s लग जाता है ('informations'), और क्रिया-संरचना सीधे कॉपी हो जाती है ('I am agree')। पुराने ऑफिस-इंग्लिश के कुछ वाक्यांश भी पीढ़ी-दर-पीढ़ी चले आ रहे हैं — 'do the needful', 'kindly revert', 'pass out' — जो अंतरराष्ट्रीय अंग्रेज़ी में या तो कुछ और मतलब देते हैं या कुछ भी नहीं।",
          },
          examples: [
            { wrong: "Myself Rafi, and I am from Chattogram.", right: "I'm Rafi, and I'm from Chattogram.", note: { bn: "'Myself X' দিয়ে পরিচয় দেওয়া ভারতীয় ইংরেজি; নেটিভ ইংরেজিতে myself শুধু জোর দেওয়ার শব্দ (I did it myself)।", en: "Introducing yourself as 'Myself X' is Indian English; in native English myself only adds emphasis (I did it myself).", hi: "'Myself X' से परिचय भारतीय अंग्रेज़ी है; नेटिव अंग्रेज़ी में myself केवल बल देता है (I did it myself)।" } },
            { wrong: "Kindly do the needful and revert back to me.", right: "Please take the necessary action and reply to me.", note: { bn: "do the needful / revert back পুরনো অফিস-ইংরেজি; revert মানে ফিরে যাওয়া — উত্তর দেওয়া নয়, back তো দূরের কথা।", en: "do the needful / revert back are legacy office-English; revert means to go back — replying is 'reply', and 'back' doubles it.", hi: "do the needful / revert back पुरानी ऑफिस-इंग्लिश; revert का अर्थ वापस जाना — जवाब देना 'reply', और back तो दोहराव।" } },
            { wrong: "He passed out from Dhaka University in 2020.", right: "He graduated from Dhaka University in 2020.", note: { bn: "আন্তর্জাতিক ইংরেজিতে pass out = অজ্ঞান হওয়া! পাস করে বের হওয়া = graduate।", en: "In international English pass out = faint! Completing a course = graduate.", hi: "अंतरराष्ट्रीय अंग्रेज़ी में pass out = बेहोश होना! पाठ्यक्रम पूरा करना = graduate।" } },
            { wrong: "I am having two brothers and one sister.", right: "I have two brothers and one sister.", note: { bn: "মালিকানা-সম্পর্ক বোঝাতে have; 'am having' মানে এখন গ্রহণ করছি (I am having lunch)।", en: "Possession takes have; 'am having' means consuming/receiving right now (I am having lunch).", hi: "संबंध/अधिकार के लिए have; 'am having' का अर्थ अभी ग्रहण कर रहा हूँ (I am having lunch)।" } },
          ],
        },
        {
          heading: {
            bn: "গঠন — শব্দক্রম ও বাক্যের কঙ্কাল",
            en: "Formation — word order and the sentence skeleton",
            hi: "गठन — शब्द-क्रम और वाक्य की कंकाल",
          },
          body: {
            bn: "বাংলা বাক্যের গড়ন Subject + Object + Verb ('আমি বইটা পড়ি'), ইংরেজি Subject + Verb + Object ('I read the book')। এই ফারাকটাই শব্দক্রমের ভুল তৈরি করে। আরেকটা প্যাটার্ন: প্রশ্নে সাহায্যকারী verb subject-এর আগে যায় — 'What you are doing?' নয়, 'What are you doing?' আর ভদ্রতার নিয়ম: 'I and my brother' নয় — 'My brother and I'। তুলনামূলক ডিগ্রিতে দ্বিগুণ তুলনা বাংলা-প্যাটার্ন: 'more better' নয় — better একাই তুলনা বোঝায়।",
            en: "Bengali builds sentences Subject + Object + Verb ('আমি বইটা পড়ি'); English builds Subject + Verb + Object ('I read the book'). That gap creates the word-order errors. Another pattern: in questions the auxiliary moves before the subject — not 'What you are doing?' but 'What are you doing?'. And the courtesy rule: not 'I and my brother' but 'My brother and I'. In comparison, no doubling: not 'more better' — better alone compares.",
            hi: "बांग्ला वाक्य की बनावट Subject + Object + Verb ('আমি বইটা পড়ি'); अंग्रेज़ी की Subject + Verb + Object ('I read the book')। यही अंतर शब्द-क्रम की गलतियाँ बनाता है। दूसरा पैटर्न: प्रश्न में auxiliary subject से पहले जाता है — 'What you are doing?' नहीं, 'What are you doing?'। और विनम्रता का नियम: 'I and my brother' नहीं — 'My brother and I'। तुलना में दोहराव नहीं: 'more better' नहीं — better अकेला तुलना करता है।",
          },
          examples: [
            { wrong: "What you are doing now?", right: "What are you doing now?", note: { bn: "প্রশ্নে auxiliary (are) subject-এর আগে; বাংলা ক্রম সরাসরি কপি করা যায় না।", en: "In questions the auxiliary (are) moves before the subject; the Bengali order cannot be copied.", hi: "प्रश्न में auxiliary (are) subject से पहले; बांग्ला क्रम सीधा कॉपी नहीं होता।" } },
            { wrong: "I and my cousin went to Cox's Bazar.", right: "My cousin and I went to Cox's Bazar.", note: { bn: "ভদ্রতার নিয়ম — নিজের নাম শেষে: my cousin and I।", en: "Courtesy order — your own name comes last: my cousin and I.", hi: "विनम्रता का नियम — अपना नाम अंत में: my cousin and I।" } },
            { wrong: "This phone is more better than mine.", right: "This phone is better than mine.", note: { bn: "better-ই তুলনা; more যোগ করলে দ্বিগুণ তুলনা হয়ে যায়।", en: "Better already compares; adding more doubles the comparison.", hi: "better खुद तुलना करता है; more जोड़ने पर दोहरी तुलना हो जाती है।" } },
            { wrong: "He gave to me the keys yesterday.", right: "He gave me the keys yesterday.", note: { bn: "give me the keys / give the keys to me — দুই প্যাটার্নের মিশ্রণ চলে না।", en: "Either give me the keys or give the keys to me — never a blend of both patterns.", hi: "give me the keys या give the keys to me — दोनों पैटर्न का मिश्रण नहीं।" } },
          ],
        },
        {
          heading: {
            bn: "আভাস ও প্যাটার্ন — নিজের লেখা নিজে শোধরানোর চেকলিস্ট",
            en: "Cues and patterns — a self-editing checklist",
            hi: "संकेत और पैटर्न — खुद के लेखन का चेकलिस्ट",
          },
          body: {
            bn: "লেখা শেষ করে চার ধাপে চোখ বুলান। ধাপ ১ — ক্রিয়া: agree, discuss, reach, enter, resemble, marry এই পরিবারের আশেপাশে বাড়তি প্রি-পজিশন বা 'am/is' আছে কি না দেখুন। ধাপ ২ — noun: information, furniture, advice, luggage, equipment, news — এই দলের কোনোটার সাথে -s বা 'a' আছে কি না খুঁজুন। ধাপ ৩ — কাল: didn't + V1, since/for + perfect — সময়ের শব্দ দেখে কাল মিলান। ধাপ ৪ — শব্দক্রম: প্রশ্নে auxiliary সামনে, বর্ণনাশব্দ noun-এর আগে।",
            en: "After writing, sweep your eyes in four passes. Pass 1 — verbs: around the agree, discuss, reach, enter, resemble, marry family, check for extra prepositions or a stray 'am/is'. Pass 2 — nouns: search for -s or 'a' beside information, furniture, advice, luggage, equipment, news. Pass 3 — tenses: didn't + V1, since/for + perfect — match the tense to the time words. Pass 4 — order: auxiliary first in questions, descriptors before nouns.",
            hi: "लिखने के बाद चार चरण में जाँचें। चरण 1 — क्रिया: agree, discuss, reach, enter, resemble, marry परिवार के आसपास बाहरी preposition या 'am/is' तो नहीं। चरण 2 — noun: information, furniture, advice, luggage, equipment, news के साथ -s या 'a' तो नहीं। चरण 3 — काल: didn't + V1, since/for + perfect — समय शब्द देखकर काल मिलाएँ। चरण 4 — क्रम: प्रश्न में auxiliary पहले, वर्णन शब्द noun से पहले।",
          },
          examples: [
            { wrong: "Please listen my problem first.", right: "Please listen to my problem first.", note: { bn: "listen TO, wait FOR, depend ON — ক্রিয়া-প্রি-পজিশন জুটিতে মুখস্থ করুন।", en: "listen TO, wait FOR, depend ON — memorise verb-preposition pairs together.", hi: "listen TO, wait FOR, depend ON — क्रिया-preposition जोड़ी साथ रटें।" } },
            { wrong: "We reached to the station before the train left.", right: "We reached the station before the train left.", note: { bn: "reach ট্রানজিটিভ — object সরাসরি; 'reach to' বাংলা 'পৌঁছানোতে'-র ছায়া।", en: "Reach is transitive — direct object; 'reach to' shadows the Bengali verb form.", hi: "reach transitive है — सीधा object; 'reach to' अनुवाद-छाया है।" } },
            { wrong: "She told that she was busy.", right: "She said that she was busy.", note: { bn: "tell-এর সাথে ব্যক্তি লাগে (tell me), say-র সাথে কথা (say that)।", en: "Tell needs a person (tell me); say takes the words (say that).", hi: "tell के साथ व्यक्ति (tell me), say के साथ बात (say that)।" } },
            { wrong: "He is my cousin brother.", right: "He is my cousin.", note: { bn: "cousin নিজেই পুরুষ/মহিলা দুটোই বোঝায় — brother/sister যোগ করা ভারতীয় ইংরেজির বাড়তি।", en: "Covers male and female alike — adding brother/sister is an Indian-English extra.", hi: "cousin स्वयं पुरुष/महिला दोनों दर्शाता है — brother/sister जोड़ना भारतीय अंग्रेज़ी की बाड़।" } },
          ],
        },
        {
          heading: {
            bn: "প্রি-পজিশন কলোকেশন — কোন ক্রিয়ার সাথে কোনটা",
            en: "Preposition collocations — which one goes with which verb",
            hi: "Preposition कोलोकेशन — कौन-सी क्रिया के साथ कौन-सा",
          },
          body: {
            bn: "প্রি-পজিশন কোনো যুক্তি মানে না — জোড়া হিসেবে মুখস্থ করতেই হয়। সবচেয়ে দরকারি দল: depend ON (নির্ভর করা), listen TO (শোনা), wait FOR (অপেক্ষা), married TO (বিবাহিত), arrive AT (ছোট জায়গা)/IN (বড় শহর-দেশ), belong TO (অন্তর্ভুক্ত), congratulate ON (অভিনন্দন), complain ABOUT (অভিযোগ), apologize FOR (ক্ষমা চাওয়া), believe IN (বিশ্বাস করা)।",
            en: "Prepositions follow no logic — you memorise them as pairs. The most useful set: depend ON, listen TO, wait FOR, married TO, arrive AT (a place)/IN (a city-country), belong TO, congratulate ON, complain ABOUT, apologize FOR, believe IN.",
            hi: "Prepositions कोई तर्क नहीं मानते — जोड़ी के रूप में रटना ही पड़ता है। सबसे उपयोगी सेट: depend ON, listen TO, wait FOR, married TO, arrive AT (स्थान)/IN (शहर-देश), belong TO, congratulate ON, complain ABOUT, apologize FOR, believe IN।",
          },
          examples: [
            { wrong: "It depends of the weather.", right: "It depends on the weather.", note: { bn: "depend ON — of/with নয়।", en: "depend ON — not of or with.", hi: "depend ON — of/with नहीं।" } },
            { wrong: "I am married with a doctor.", right: "I am married to a doctor.", note: { bn: "married TO; তবে ক্রিয়া হিসেবে 'She married a doctor' — প্রি-পজিশন ছাড়া।", en: "married TO; as a verb, 'She married a doctor' takes no preposition.", hi: "married TO; क्रिया के रूप में 'She married a doctor' — preposition नहीं।" } },
            { wrong: "We arrived to Cox's Bazar at night.", right: "We arrived in Cox's Bazar at night.", note: { bn: "শহর-দেশে IN, স্টেশন-এয়ারপোর্টের মতো নির্দিষ্ট স্থানে AT — 'arrive to' বলে কিছু নেই।", en: "IN for cities and countries, AT for specific spots like stations and airports — 'arrive to' does not exist.", hi: "शहर-देश के लिए IN, स्टेशन-एयरपोर्ट जैसे स्थान के लिए AT — 'arrive to' कुछ नहीं।" } },
            { wrong: "He entered into the room quietly.", right: "He entered the room quietly.", note: { bn: "enter + object; enter into শুধু চুক্তি-আলোচনার অর্থে (enter into an agreement)।", en: "enter + object; enter into survives only in agreements and discussions (enter into an agreement).", hi: "enter + object; enter into केवल अनुबंध-विचार-विमर्श के अर्थ में (enter into an agreement)।" } },
            { wrong: "They congratulated him for his success.", right: "They congratulated him on his success.", note: { bn: "congratulate someone ON something — for নয়।", en: "congratulate someone ON something — not for.", hi: "congratulate someone ON something — for नहीं।" } },
          ],
        },
        {
          heading: {
            bn: "'I am agree' থেকে 'didn't went' — ক্রিয়া-রূপের ফাঁদ",
            en: "From 'I am agree' to 'didn't went' — verb-form traps",
            hi: "'I am agree' से 'didn't went' — क्रिया-रूप के जाल",
          },
          body: {
            bn: "'আমি সম্মত' → I agree — agree নিজেই ক্রিয়া, তাই 'I am agree' দ্বি-ক্রিয়া ভুল। একই পরিবার: 'I am belong to...' নয় — belong ক্রিয়া। আরেক ফাঁদ দ্বি-অতীত: বাংলায় 'যাইনি' এক শব্দে অতীত-নেগেটিভ, তাই শিক্ষার্থীরা didn't + অতীত দুটোই বসিয়ে দেন — 'I didn't went'। নিয়ম: didn't-এর পরে V1 — didn't go, didn't eat, didn't come। স্টেটিভ ক্রিয়ার (know, believe, understand, love) continuous রূপও বাংলা-ট্র্যাপ: 'I am knowing' নয় — simple কালেই থাকে।",
            en: "'আমি সম্মত' → I agree — agree is already a verb, so 'I am agree' doubles it. Same family: not 'I am belong to...' — belong is a verb. Another trap is the double past: Bengali packs past and negative into one word, so learners write didn't + past — 'I didn't went'. Rule: after didn't comes V1 — didn't go, didn't eat, didn't come. Stative verbs (know, believe, understand, love) resist continuous too: not 'I am knowing' — they stay simple.",
            hi: "'मैं सहमत' → I agree — agree खुद क्रिया है, इसलिए 'I am agree' दोहरी क्रिया। वही परिवार: 'I am belong to...' नहीं — belong क्रिया है। दूसरा जाल दोहरा अतीत: स्थानीय भाषा अतीत-नकार एक शब्द में कर देती है, इसलिए didn't + past लिख दिया जाता है — 'I didn't went'। नियम: didn't के बाद V1 — didn't go, didn't eat, didn't come। स्टेटिव क्रियाएँ (know, believe, understand, love) continuous लेती नहीं: 'I am knowing' नहीं।",
          },
          examples: [
            { wrong: "I am agree with your opinion.", right: "I agree with your opinion.", note: { bn: "agree ক্রিয়া — সামনে am লাগে না; 'সম্মত আছি' শুনলেও ইংরেজিতে এক ক্রিয়াই যথেষ্ট।", en: "Agree is a verb — no am in front; even though it feels like a state, one verb suffices.", hi: "agree क्रिया है — आगे am नहीं; 'सहमत हूँ' सुनने पर भी एक क्रिया काफ़ी।" } },
            { wrong: "I didn't went to the class yesterday.", right: "I didn't go to the class yesterday.", note: { bn: "didn't নিজেই অতীত বোঝায় — পরে সবসময় V1।", en: "didn't already carries the past — V1 always follows.", hi: "didn't खुद अतीत दर्शाता है — बाद में हमेशा V1।" } },
            { wrong: "She is knowing the answer.", right: "She knows the answer.", note: { bn: "know/believe/understand-এর মতো স্টেটিভ ক্রিয়া continuous হয় না।", en: "Stative verbs like know, believe and understand do not take continuous forms.", hi: "know, believe, understand जैसी स्टेटिव क्रियाएँ continuous नहीं लेतीं।" } },
            { wrong: "One of my friend lives in Sylhet.", right: "One of my friends lives in Sylhet.", note: { bn: "one of + বহুবচন noun — বন্ধুদের একজন; verb থাকবে singular (lives)।", en: "one of + plural noun — one among the friends; the verb stays singular (lives).", hi: "one of + बहुवचन noun — दोस्तों में एक; क्रिया singular (lives)।" } },
            { wrong: "He didn't came and didn't called anyone.", right: "He didn't come and didn't call anyone.", note: { bn: "প্রতিটা didn't-এর পরেই V1 — প্যাটার্নটা পুরো বাক্যে ধরে রাখুন।", en: "V1 follows every didn't — keep the pattern across the whole sentence.", hi: "हर didn't के बाद V1 — पैटर्न पूरे वाक्य में बनाए रखें।" } },
          ],
        },
        {
          heading: {
            bn: "অগণনযোগ্য noun — informations নয়!",
            en: "Uncountable nouns — never informations!",
            hi: "अगणनीय noun — informations कभी नहीं!",
          },
          body: {
            bn: "ইংরেজিতে কিছু noun কখনো বহুবচন হয় না: information, furniture, advice, luggage, baggage, equipment, news, homework, machinery, traffic, money, progress, research, hair (মাথার চুল সামগ্রিকভাবে)। এদের পরে singular verb বসে — 'The information is useful', 'The furniture looks new'। বাংলায় 'তথ্যগুলো', 'ফার্নিচারগুলো' বলি বলে -s-এর টান পড়ে — কিন্তু ইংরেজিতে এই ধারণাগুলো 'অবিভাজ্য পিণ্ড'। পরিমাণ বোঝাতে পরিমাপ-শব্দ যোগ করুন: a piece of information/advice/news, an item of furniture/luggage।",
            en: "Some English nouns never go plural: information, furniture, advice, luggage, baggage, equipment, news, homework, machinery, traffic, money, progress, research, hair (hair of the head as a whole). They take singular verbs — 'The information is useful', 'The furniture looks new'. Bengali says 'তথ্যগুলো', 'ফার্নিচারগুলো', which drags in -s — but English treats these as indivisible masses. To show quantity, add measure words: a piece of information/advice/news, an item of furniture/luggage.",
            hi: "कुछ अंग्रेज़ी nouns कभी बहुवचन नहीं होते: information, furniture, advice, luggage, baggage, equipment, news, homework, machinery, traffic, money, progress, research, hair। इनके बाद singular क्रिया — 'The information is useful', 'The furniture looks new'। मात्रा दिखाने के लिए माप-शब्द जोड़ें: a piece of information/advice/news, an item of furniture/luggage।",
          },
          examples: [
            { wrong: "He gave me many informations about the scholarship.", right: "He gave me a lot of information about the scholarship.", note: { bn: "information অগণনযোগ্য — many informations অসম্ভব; পরিমাণে a lot of/much।", en: "Information is uncountable — many informations is impossible; quantity takes a lot of / much.", hi: "information अगणनीय — many informations असंभव; मात्रा के लिए a lot of / much।" } },
            { wrong: "The room has no furnitures.", right: "The room has no furniture.", note: { bn: "furniture সবসময় singular রূপে — আসবাবের সেট বোঝাতে pieces of furniture।", en: "Furniture stays in singular form — for sets, say pieces of furniture.", hi: "furniture सदैव singular — सेट के लिए pieces of furniture।" } },
            { wrong: "My luggages are still at the airport.", right: "My luggage is still at the airport.", note: { bn: "luggage/baggage অগণনযোগ্য — singular verb is।", en: "luggage/baggage are uncountable — singular verb is.", hi: "luggage/baggage अगणनीय — singular क्रिया is।" } },
            { wrong: "She gave me three good advices.", right: "She gave me three good pieces of advice.", note: { bn: "গুনতে হলে piece of advice-এর মতো পরিমাপ-শব্দ লাগবে।", en: "To count, you need a measure word like piece of advice.", hi: "गिनने के लिए piece of advice जैसा माप-शब्द चाहिए।" } },
            { wrong: "The news are really shocking today.", right: "The news is really shocking today.", note: { bn: "news দেখতে বহুবচন, বাস্তবে singular — the news is।", en: "News looks plural but is singular — the news is.", hi: "news देखने में बहुवचन, वास्तव में singular — the news is।" } },
          ],
        },
        {
          heading: {
            bn: "suggest-প্যাটার্ন, false friend ও উচ্চারণ-ফাঁদ",
            en: "The suggest pattern, false friends and pronunciation traps",
            hi: "suggest पैटर्न, false friends और उच्चारण-जाल",
          },
          body: {
            bn: "'তাকে যেতে বললাম' অনুবাদে বাঙালিরা লেখেন 'I suggested him to go' — কিন্তু suggest-এর গঠন দুটোই: suggest + -ing (He suggested going) অথবা suggest that + subject + verb (He suggested that I go)। suggest somebody to do — এমন গঠন ইংরেজিতে নেই। ব্যক্তিকে + to চাইলে advise ব্যবহার করুন: 'He advised me to go'। একই পরিবার: recommend, insist, propose।",
            en: "Translating 'তাকে যেতে বললাম', Bengali speakers write 'I suggested him to go' — but suggest has only two structures: suggest + -ing (He suggested going) or suggest that + subject + verb (He suggested that I go). There is no 'suggest somebody to do' in English. When you need a person + to, use advise: 'He advised me to go'. The same family: recommend, insist, propose.",
            hi: "'उसे जाने के लिए कहा' के अनुवाद में लिख दिया जाता है 'I suggested him to go' — पर suggest की दो ही संरचनाएँ: suggest + -ing (He suggested going) या suggest that + subject + verb (He suggested that I go)। 'suggest somebody to do' अंग्रेज़ी में नहीं है। व्यक्ति + to चाहिए तो advise लें: 'He advised me to go'। वही परिवार: recommend, insist, propose।",
          },
          examples: [
            { wrong: "The doctor suggested me to take rest.", right: "The doctor suggested that I take rest.", note: { bn: "suggest + that + subject (+ base verb); ব্যক্তি + to চাইলে advise ব্যবহার করুন — 'advised me to take rest'।", en: "suggest + that + subject (+ base verb); for person + to, use advise — 'advised me to take rest'.", hi: "suggest + that + subject (+ base verb); व्यक्ति + to के लिए advise — 'advised me to take rest'।" } },
            { wrong: "He suggested to postpone the meeting.", right: "He suggested postponing the meeting.", note: { bn: "suggest-এর পরে সরাসরি কাজ বোঝালে -ing রূপ — suggest doing।", en: "After suggest, a direct action takes the -ing form — suggest doing.", hi: "suggest के बाद सीधा काम -ing रूप में — suggest doing।" } },
            { wrong: "They insisted me to join the dinner.", right: "They insisted that I join the dinner.", note: { bn: "insist-ও suggest-পরিবার — that + subject; 'insist somebody to' নেই।", en: "Insist belongs to the same family — that + subject; 'insist somebody to' does not exist.", hi: "insist भी वही परिवार — that + subject; 'insist somebody to' नहीं।" } },
            { wrong: "He bought a 'bery' expensive watch.", right: "He bought a very expensive watch.", note: { bn: "বাংলায় v-ধ্বনি নেই বলে very-কে 'বেরি/ব্যারি' উচ্চারণ হয় — ঠোঁটের নিচের দাঁতে ঠোঁট লাগিয়ে v; berry ≠ very।", en: "Bengali has no /v/ sound, so very becomes 'bery/bhery' — rest the lip on the lower teeth for v; berry ≠ very.", hi: "स्थानीय भाषाओं में /v/ ध्वनि नहीं, इसलिए very 'bery' हो जाता है — v के लिए होंठ निचले दाँत पर रखें; berry ≠ very।" } },
            { wrong: "She is wearing a beautiful 'sirt'.", right: "She is wearing a beautiful shirt.", note: { bn: "s আর sh ইংরেজিতে আলাদা ধ্বনি — shirt-এ sh; 'সার্ট' বললে অর্থ অন্য কিছু হয়ে যায়।", en: "s and sh are separate English sounds — shirt takes sh; saying 'sirt' changes the meaning.", hi: "s और sh अंग्रेज़ी में अलग ध्वनि — shirt में sh; 'sirt' कहने पर अर्थ बदल जाता है।" } },
          ],
        },
        {
          heading: {
            bn: "ছোট গল্পে দেখা যাক",
            en: "A short story to see it all",
            hi: "एक छोटी कहानी में सब देखें",
          },
          body: {
            bn: "নাদিয়া প্রথম আন্তর্জাতিক ইমেইল লিখল দলনেতাকে: 'Dear Ms. Brown, I am agree with your plan and I want to discuss about it. Kindly do the needful and revert back. Myself Nadia, one of your new team member.' কোচিং সেন্টারে শেখার পর আবার লিখল: 'Dear Ms. Brown, I agree with your plan and would like to discuss it. Could we meet on Friday? Best regards, Nadia — one of the new members of your team.' উত্তর এলো দুই ঘণ্টায়: 'Delighted to hear from you!'",
            en: "Nadia wrote her first international email to the team lead: 'Dear Ms. Brown, I am agree with your plan and I want to discuss about it. Kindly do the needful and revert back. Myself Nadia, one of your new team member.' After coaching, she rewrote it: 'Dear Ms. Brown, I agree with your plan and would like to discuss it. Could we meet on Friday? Best regards, Nadia — one of the new members of your team.' The reply came in two hours: 'Delighted to hear from you!'",
            hi: "नादिया ने टीम-लीड को पहला अंतरराष्ट्रीय ईमेल लिखा: 'Dear Ms. Brown, I am agree with your plan and I want to discuss about it. Kindly do the needful and revert back. Myself Nadia, one of your new team member.' कोचिंग के बाद दोबारा लिखा: 'Dear Ms. Brown, I agree with your plan and would like to discuss it. Could we meet on Friday? Best regards, Nadia — one of the new members of your team.' जवाब दो घंटे में आया: 'Delighted to hear from you!'",
          },
          examples: [
            { wrong: "I am agree with your plan and want to discuss about it.", right: "I agree with your plan and want to discuss it.", note: { bn: "দুই কমন ভুল একসাথে — agree-র আগে am নেই, discuss-এর পরে about নেই।", en: "Two common errors in one line — no am before agree, no about after discuss.", hi: "एक लाइन में दो सामान्य गलती — agree से पहले am नहीं, discuss के बाद about नहीं।" } },
            { wrong: "Myself Nadia, one of your new team member.", right: "I'm Nadia, one of your new team members.", note: { bn: "পরিচয় দিতে I'm/my name is; one of + বহুবচন।", en: "Introduce yourself with I'm / my name is; one of + plural.", hi: "परिचय के लिए I'm / my name is; one of + बहुवचन।" } },
            { wrong: "Kindly revert back with your informations.", right: "Please reply with the details.", note: { bn: "revert back দ্বি-পুনরাবৃত্তি, informations অসম্ভব — দুটোই ঠিক করে reply with the details।", en: "revert back is doubled, informations impossible — fix both with reply with the details.", hi: "revert back दोहराव है, informations असंभव — दोनों सुधारकर reply with the details।" } },
            { wrong: "She suggested me to apply for the scholarship.", right: "She suggested that I apply for the scholarship.", note: { bn: "suggest-এ 'ব্যক্তি + to' চলে না; that-ক্লজ, নয়তো advise-এর to-প্যাটার্ন।", en: "suggest takes no 'person + to'; use a that-clause, or advise for the to-pattern.", hi: "suggest में 'व्यक्ति + to' नहीं चलता; that-clause या advise का to-पैटर्न।" } },
          ],
        },
      ],
      tips: [
        { bn: "'মাথায় বাংলা → মুখে ইংরেজি' পাইপলাইনই ভুলের উৎস — জটিল বাক্যে আগে ইংরেজি কঙ্কাল (S-V-O) ভাবুন।", en: "The 'Bengali in the head → English in the mouth' pipeline is the source — think the English skeleton (S-V-O) first for complex sentences.", hi: "'दिमाग में बांग्ला → मुँह में अंग्रेज़ी' पाइपलाइन ही जड़ है — जटिल वाक्य में पहले अंग्रेज़ी कंकाल (S-V-O) सोचें।" },
        { bn: "ক্রিয়া-প্রি-পজিশন জোড়া মুখস্থ: depend ON, listen TO, wait FOR, married TO, arrive AT/IN, belong TO।", en: "Memorise verb-preposition pairs: depend ON, listen TO, wait FOR, married TO, arrive AT/IN, belong TO.", hi: "क्रिया-preposition जोड़ी रटें: depend ON, listen TO, wait FOR, married TO, arrive AT/IN, belong TO।" },
        { bn: "এই ক্রিয়াগুলোর পরে প্রি-পজিশন নেই: discuss, reach, enter, marry, resemble, accompany, answer।", en: "These verbs take no preposition: discuss, reach, enter, marry, resemble, accompany, answer.", hi: "इन क्रियाओं के बाद preposition नहीं: discuss, reach, enter, marry, resemble, accompany, answer।" },
        { bn: "I agree — am নেই; I didn't go — went নয়; She knows — is knowing নয়।", en: "I agree — no am; I didn't go — not went; She knows — not is knowing.", hi: "I agree — am नहीं; I didn't go — went नहीं; She knows — is knowing नहीं।" },
        { bn: "informations/furnitures/advices/luggages অসম্ভব — পরিমাপ চাইলে a piece of / an item of।", en: "informations/furnitures/advices/luggages are impossible — measure with a piece of / an item of.", hi: "informations/furnitures/advices/luggages असंभव — मापने के लिए a piece of / an item of।" },
        { bn: "He suggested that I go / suggested going — 'suggested me to go' ইংরেজিতে নেই; ব্যক্তি + to চাইলে advised।", en: "He suggested that I go / suggested going — 'suggested me to go' does not exist; use advised for person + to.", hi: "He suggested that I go / suggested going — 'suggested me to go' अंग्रेज़ी में नहीं; व्यक्ति + to के लिए advised।" },
        { bn: "'Myself Rafi', 'do the needful', 'revert back', 'pass out', 'cousin brother' — আন্তর্জাতিক ইংরেজিতে এড়িয়ে চলুন।", en: "Avoid 'Myself Rafi', 'do the needful', 'revert back', 'pass out', 'cousin brother' in international English.", hi: "'Myself Rafi', 'do the needful', 'revert back', 'pass out', 'cousin brother' — अंतरराष्ट्रीय अंग्रेज़ी में टालें।" },
        { bn: "উচ্চারণ-ফাঁদ: very/berry-র v, shirt/sir-এর sh, Wednesday-island-listen-এর নীরব অক্ষর।", en: "Pronunciation traps: the v of very/berry, the sh of shirt vs sir, silent letters in Wednesday, island, listen.", hi: "उच्चारण-जाल: very/berry का v, shirt/sir का sh, Wednesday-island-listen की मौन अक्षरें।" },
        { bn: "প্রতিটা ধরা পড়া ভুলের পাশে বাংলা উৎস-বাক্যটা নোট করুন — উৎস বন্ধ হলে ভুলও বন্ধ হয়।", en: "Next to every caught error, note the Bengali source sentence — stop the source and the error stops too.", hi: "हर पकड़ी गई गलती के पास बांग्ला स्रोत-वाक्य नोट करें — स्रोत बंद हुआ तो गलती भी बंद।" },
      ],
      quiz: [
        { question: "It depends ___ the weather.", options: ["on", "of", "for", "at"], answer: 0, explanation: { bn: "depend ON — নির্ভর করা; of/for/at কোনোটাই নয়।", en: "depend ON — to rely on; never of, for or at.", hi: "depend ON — निर्भर करना; of/for/at कुछ नहीं।" } },
        { question: "Which sentence is correct?", options: ["I am agree with you.", "I agree with you.", "I am agreeing with you.", "I agreeing with you."], answer: 1, explanation: { bn: "agree নিজেই ক্রিয়া — am/is লাগে না, continuous-ও হয় না।", en: "Agree is itself a verb — no am/is and no continuous.", hi: "agree स्वयं क्रिया है — am/is नहीं, continuous भी नहीं।" } },
        { question: "She has been married ___ Rahim for five years.", options: ["with", "to", "of", "by"], answer: 1, explanation: { bn: "married TO someone — with নয়; ক্রিয়া হিসেবে married-এ কিছুই লাগে না।", en: "married TO someone — not with; as a plain verb, marry takes nothing.", hi: "married TO someone — with नहीं; क्रिया के रूप में marry के साथ कुछ नहीं।" } },
        { question: "The report contains a lot of useful ___.", options: ["informations", "information", "pieces of informations", "an information"], answer: 1, explanation: { bn: "information অগণনযোগ্য — বহুবচন বা 'an' অসম্ভব।", en: "Information is uncountable — no plural and no 'an'.", hi: "information अगणनीय — बहुवचन या 'an' असंभव।" } },
        { question: "He suggested ___ the meeting to Monday.", options: ["me to move", "moving", "that me move", "for moving"], answer: 1, explanation: { bn: "suggest + -ing; 'suggest me to' গঠন ইংরেজিতে নেই।", en: "suggest + -ing; the structure 'suggest me to' does not exist in English.", hi: "suggest + -ing; 'suggest me to' संरचना अंग्रेज़ी में नहीं।" } },
        { question: "I didn't ___ to school yesterday.", options: ["went", "gone", "go", "going"], answer: 2, explanation: { bn: "didn't-এর পরে V1 — didn't go; দ্বি-অতীত নয়।", en: "V1 follows didn't — didn't go; no double past.", hi: "didn't के बाद V1 — didn't go; दोहरा अतीत नहीं।" } },
        { question: "Which sentence is correct?", options: ["We discussed about it.", "We discussed it.", "We discussed on it.", "We discussed for it."], answer: 1, explanation: { bn: "discuss ট্রানজিটিভ — object সরাসরি, প্রি-পজিশন ছাড়া।", en: "Discuss is transitive — a direct object, no preposition.", hi: "discuss transitive है — सीधा object, बिना preposition।" } },
        { question: "One of my ___ lives in Sylhet.", options: ["friend", "friends", "friend's", "friendships"], answer: 1, explanation: { bn: "one of + বহুবচন noun — one of my friends; মূল verb থাকে singular (lives)।", en: "one of + plural noun — one of my friends; the main verb stays singular (lives).", hi: "one of + बहुवचन noun — one of my friends; मुख्य क्रिया singular (lives)।" } },
        { question: "In standard English, 'He passed out' means he ___.", options: ["graduated", "fainted", "passed the exam", "left the job"], answer: 1, explanation: { bn: "আন্তর্জাতিক ইংরেজিতে pass out = অজ্ঞান হওয়া; পাস করে বের হওয়া = graduate।", en: "In standard English pass out = faint; completing a course = graduate.", hi: "मानक अंग्रेज़ी में pass out = बेहोश होना; पाठ्यक्रम पूरा करना = graduate।" } },
        { question: "Which sentence is correct?", options: ["My luggages are heavy.", "My luggage is heavy.", "My luggage are heavy.", "My luggages is heavy."], answer: 1, explanation: { bn: "luggage অগণনযোগ্য — singular রূপ, singular verb is।", en: "Luggage is uncountable — singular form, singular verb is.", hi: "luggage अगणनीय — singular रूप, singular क्रिया is।" } },
      ],
    },
  },

  /* ── 4. Since vs For ───────────────────────────────────────────────── */
  {
    topic: "Since vs For",
    level: "intermediate",
    title: "Since vs For (Intermediate)",
    unit: 0,
    data: {
      title: {
        bn: "Since বনাম For (মধ্যম স্তর)",
        en: "Since vs For (Intermediate)",
        hi: "Since बनाम For (मध्यम स्तर)",
      },
      intro: {
        bn: "এই পাঠের প্রয়োজনীয় পূর্বশর্ত: present perfect (have/has + V3) আর present perfect continuous (have been + -ing) — এই দুই কাল জানা ছাড়া since/for-এর নিয়ম বোঝা যায় না; আগে ওই কালের পাঠগুলো শেষ করুন। এখানে শিখব: since + শুরুর বিন্দু বনাম for + দৈর্ঘ্যের মাপ, বাংলার 'থেকে/ধরে'র দুই-মুখো ফাঁদ, since বনাম from, 'It's been two years since we met'-জাতীয় কাঠামো, perfect continuous-এর জোড়া, আর 'I am here since 2020'-এর মতো ক্লাসিক ভুলের চিরতরে শোধরানো।",
        en: "The required prerequisites for this lesson: the present perfect (have/has + V3) and the present perfect continuous (have been + -ing) — without these two tenses the rules of since/for make no sense, so finish those lessons first. Here you will learn: since + starting point vs for + duration, the two-faced trap of Bengali 'থেকে/ধরে', since vs from, structures like 'It's been two years since we met', the perfect-continuous pairing, and a permanent fix for classic errors like 'I am here since 2020'.",
        hi: "इस पाठ की आवश्यक पूर्व-शर्तें: present perfect (have/has + V3) और present perfect continuous (have been + -ing) — इन दो कालों के बिना since/for के नियम समझ नहीं आते, पहले वे पाठ पूरे करें। यहाँ सीखेंगे: since + शुरुआती बिंदु बनाम for + अवधि, 'थे/धरे' जैसी दो-मुखी जाल, since बनाम from, 'It's been two years since we met' जैसी संरचनाएँ, perfect continuous की जोड़ी, और 'I am here since 2020' जैसी क्लासिक गलतियों का स्थायी सुधार।",
      },
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয় — বিন্দু নাকি দূরত্ব",
            en: "When to use them — point or distance",
            hi: "कब इस्तेमाल होते हैं — बिंदु या दूरी",
          },
          body: {
            bn: "মূল সূত্র এক লাইনে: since = শুরুর বিন্দু (কখন থেকে), for = সময়ের দৈর্ঘ্য (কতক্ষণ ধরে)। 'I have lived in Dhaka since 2020' — ২০২০ নামটা শুরুর বিন্দু; 'I have lived in Dhaka for five years' — পাঁচ বছর মাপা দূরত্ব। দুটোই মূলত present perfect আর present perfect continuous-এর সঙ্গী — এই কালগুলো অতীত থেকে এখন পর্যন্ত টানটান অবস্থা বোঝায়, তাই ওদের সময়ের দড়িও দুই ধরনের: অতীতের বিন্দু, বা মাপা দৈর্ঘ্য।",
            en: "The core rule in one line: since = the starting point (since when), for = the length of time (how long). 'I have lived in Dhaka since 2020' — 2020 names the start point; 'I have lived in Dhaka for five years' — five years is a measured span. Both ride mainly with the present perfect and the present perfect continuous — tenses that express a stretched state from the past until now, so their time-ropes come in two kinds: a past point, or a measured length.",
            hi: "मूल नियम एक लाइन में: since = शुरुआती बिंदु (कब से), for = समय की दूरी (कितने समय से)। 'I have lived in Dhaka since 2020' — 2020 शुरुआती बिंदु; 'I have lived in Dhaka for five years' — पाँच वर्ष मापी दूरी। दोनों मुख्यतः present perfect और present perfect continuous के साथी हैं — ये काल अतीत से अब तक खिंचाव दर्शाते हैं, इसलिए उनकी समय-रस्सी भी दो प्रकार की: अतीत का बिंदु, या मापी दूरी।",
          },
          examples: [
            { wrong: "I live in Dhaka since 2020.", right: "I have lived in Dhaka since 2020.", note: { bn: "since/for বসলেই কাল হবে present perfect — simple present নয়।", en: "When since/for appear, the tense must be present perfect — not simple present.", hi: "since/for आते ही काल present perfect होगा — simple present नहीं।" } },
            { wrong: "She is waiting here for two hours.", right: "She has been waiting here for two hours.", note: { bn: "চলমান অবস্থা + সময়ের মাপ → present perfect continuous।", en: "An ongoing state + a measured time → present perfect continuous.", hi: "चलती स्थिति + मापा समय → present perfect continuous।" } },
            { wrong: "I know him since ten years.", right: "I have known him for ten years.", note: { bn: "দুটো ভুল একসাথে — know + since/for-এর জন্য present perfect লাগবে, আর 'ten years' দৈর্ঘ্য → for।", en: "Two errors at once — know + since/for needs the present perfect, and 'ten years' is a duration → for.", hi: "एक साथ दो गलती — know + since/for के लिए present perfect, और 'ten years' अवधि → for।" } },
            { wrong: "We are friends since our childhood.", right: "We have been friends since childhood.", note: { bn: "'শৈশব থেকে' শুরুর বিন্দু → since; বন্ধুত্ব এখনো আছে → present perfect।", en: "'Since childhood' is a starting point → since; the friendship continues → present perfect.", hi: "'बचपन से' शुरुआती बिंदु → since; दोस्ती अब भी है → present perfect।" } },
          ],
        },
        {
          heading: {
            bn: "গঠন — since + বিন্দু, for + মাপ",
            en: "Formation — since + point, for + span",
            hi: "गठन — since + बिंदु, for + अवधि",
          },
          body: {
            bn: "since + শুরুর বিন্দু — সময়ের নাম বা ঘড়ার কাঁটা: since Monday, since 2015, since morning, since childhood, since my birthday, since I came here (গোটা clause-ও বিন্দুই)। for + দৈর্ঘ্যের মাপ — গুনতে পারা সময়: for five days, for two hours, for three months, for ages, for a long time। সূত্রটা মুখস্থ: ঘড়ি-ক্যালেন্ডারে চিহ্নিত নাম → since; রুলার দিয়ে মাপা স্প্যান → for।",
            en: "since + a starting point — a named time or a clock mark: since Monday, since 2015, since morning, since childhood, since my birthday, since I came here (a whole clause still counts as a point). for + a measured span — countable time: for five days, for two hours, for three months, for ages, for a long time. Memorise the formula: a name marked on clocks and calendars → since; a span measured by a ruler → for.",
            hi: "since + शुरुआती बिंदु — समय का नाम या घड़ी की निशानी: since Monday, since 2015, since morning, since childhood, since I came here (पूरा clause भी बिंदु ही है)। for + मापी अवधि — गिनती का समय: for five days, for two hours, for three months, for ages। सूत्र रटें: घड़ी-कैलेंडर पर अंकित नाम → since; रूलर से मापा स्पैन → for।",
          },
          examples: [
            { wrong: "I have been here since five years.", right: "I have been here for five years.", note: { bn: "'পাঁচ বছর' মাপ — for; since শুধু নাম-ঘড়ার বিন্দু নেয়।", en: "'Five years' is a measure — for; since only takes named clock-calendar points.", hi: "'पाँच वर्ष' माप है — for; since केवल नाम-घड़ी के बिंदु लेता है।" } },
            { wrong: "He has been ill since three days.", right: "He has been ill for three days.", note: { bn: "'তিন দিন ধরে' দৈর্ঘ্য → for; 'সোমবার থেকে' হলে since Monday।", en: "'Three days' is a duration → for; from a named day it would be since Monday.", hi: "'तीन दिन' अवधि → for; नाम वाले दिन से होता तो since Monday।" } },
            { wrong: "Since morning I am studying for the exam.", right: "I have been studying for the exam since morning.", note: { bn: "since/for-যুক্ত কাল হবে present perfect continuous; since-বাক্যাংশ বাক্যের শেষেও যেতে পারে।", en: "With since/for the tense must be present perfect continuous; the since-phrase can also sit at the end.", hi: "since/for के साथ काल present perfect continuous; since-वाक्यांश अंत में भी जा सकता है।" } },
            { wrong: "How long are you waiting for the bus?", right: "How long have you been waiting for the bus?", note: { bn: "'কতক্ষণ ধরে' প্রশ্ন → present perfect continuous; simple present নয়।", en: "A 'how long' question → present perfect continuous; not simple present.", hi: "'कितने समय से' प्रश्न → present perfect continuous; simple present नहीं।" } },
          ],
        },
        {
          heading: {
            bn: "আভাস ও প্যাটার্ন — দ্রুত পরীক্ষা তিনটা",
            en: "Cues and patterns — three quick tests",
            hi: "संकेत और पैटर्न — तीन त्वरित जाँच",
          },
          body: {
            bn: "পরীক্ষা ১ — গুনতে পারছেন? 'পাঁচ দিন', 'তিন ঘণ্টা', 'দুই সপ্তাহ' — সংখ্যা জোড়া যাচ্ছে → for। 'সোমবার', '২০২০', 'ভোররাত', 'শৈশব' — নাম/চিহ্ন, সংখ্যা নয় → since। পরীক্ষা ২ — বাক্যটা 'কোন বছর/দিন থেকে' দিয়ে শুরু হতে পারে কি? পারলে since; 'কতদিন ধরে' দিয়ে? পারলে for। পরীক্ষা ৩ — since/for-এর পাশের কাল দেখুন: simple present/past হলে প্রায় সবসময় ভুল — দরকার present perfect পরিবার।",
            en: "Test 1 — can you count it? 'five days', 'three hours', 'two weeks' — a number attaches → for. 'Monday', '2020', 'dawn', 'childhood' — a name or mark, not a number → since. Test 2 — could the sentence start with 'since when (which year/day)'? Yes → since; with 'how long'? Yes → for. Test 3 — look at the neighbouring tense: simple present/past is almost always wrong here — you need the present perfect family.",
            hi: "जाँच 1 — गिन सकते हैं? 'पाँच दिन', 'तीन घंटे' — संख्या जुड़ रही → for। 'सोमवार', '2020', 'भोर', 'बचपन' — नाम/निशानी, संख्या नहीं → since। जाँच 2 — वाक्य 'किस वर्ष/दिन से' से शुरू हो सकता है? हाँ → since; 'कितने समय से'? हाँ → for। जाँच 3 — आस-पास का काल देखें: simple present/past लगभग सदा गलत — present perfect परिवार चाहिए।",
          },
          examples: [
            { wrong: "The office is open since 9 a.m.", right: "The office is open from 9 a.m.", note: { bn: "রুটিন/টাইমটেবিলের সময় বলতে from; since শুধু perfect কালের শুরুর বিন্দু।", en: "Timetables and routines take from; since is only the start point of perfect tenses.", hi: "समय-सारणी और दिनचर्या के लिए from; since केवल perfect कालों का शुरुआती बिंदु।" } },
            { wrong: "I have been working here from January.", right: "I have been working here since January.", note: { bn: "perfect কালে শুরুর বিন্দু হলে from নয় — since।", en: "In a perfect tense, a start point takes since, not from.", hi: "perfect काल में शुरुआती बिंदु के लिए from नहीं — since।" } },
            { wrong: "The class will start since 10 o'clock.", right: "The class will start at 10 o'clock.", note: { bn: "একক ভবিষ্যৎ ঘটনার সময় → at; since কখনো একক ঘটনার সময় নয়।", en: "A single future event takes at; since never times a single event.", hi: "एकल भविष्य की घटना का समय → at; since कभी एकल घटना का समय नहीं।" } },
            { wrong: "I have been waiting since 9 a.m., so it's three hours now.", right: "I have been waiting since 9 a.m., so it has been three hours now.", note: { bn: "একই সময় দুইভাবে — বিন্দু since, মাপ for; দ্বিতীয় ক্লজেও perfect লাগবে।", en: "The same time two ways — point since, span for; the second clause needs a perfect too.", hi: "एक ही समय दो रूपों में — बिंदु since, अवधि for; दूसरे clause में भी perfect चाहिए।" } },
          ],
        },
        {
          heading: {
            bn: "since বনাম from — 'থেকে'-র দুই ভাই",
            en: "since vs from — the two brothers of 'from'",
            hi: "since बनाम from — 'से' के दो भाई",
          },
          body: {
            bn: "বাংলার 'থেকে' দুই ইংরেজি শব্দে ভাগ হয়: perfect কালের সাথে since, বাকি কালে from। 'I have been here since Monday' (perfect) — কিন্তু 'I stayed there from Monday to Friday' (past), 'The shop is open from 9 to 5' (রুটিন), 'From tomorrow, I will get up early' (ভবিষ্যৎ)। from-এর সাথে সাধারণত to/until জোড়া থাকে — শুরু আর শেষ দুই প্রান্তই বলা হয়; since নিজেই বলে 'এখন পর্যন্ত চলছে'।",
            en: "Bengali 'থেকে' splits into two English words: since with perfect tenses, from with the rest. 'I have been here since Monday' (perfect) — but 'I stayed there from Monday to Friday' (past), 'The shop is open from 9 to 5' (routine), 'From tomorrow, I will get up early' (future). From usually teams with to/until — both ends are named; since itself declares 'continuing until now'.",
            hi: "स्थानीय 'से' दो अंग्रेज़ी शब्दों में बँटता है: perfect कालों के साथ since, बाकी में from। 'I have been here since Monday' (perfect) — पर 'I stayed there from Monday to Friday' (past), 'The shop is open from 9 to 5' (दिनचर्या), 'From tomorrow, I will get up early' (भविष्य)। from आमतौर पर to/until के साथ — दोनों सिरे बताए जाते हैं; since खुद घोषणा करता है 'अब तक जारी'।",
          },
          examples: [
            { wrong: "I studied there since 2010 to 2015.", right: "I studied there from 2010 to 2015.", note: { bn: "শুরু-শেষ দুই প্রান্ত + past কাল → from...to; since-এর সাথে to আসে না।", en: "Both ends + past tense → from...to; since never pairs with to.", hi: "दोनों सिरे + past काल → from...to; since के साथ to नहीं।" } },
            { wrong: "The shop remains open since 9 to 9.", right: "The shop remains open from 9 to 9.", note: { bn: "রুটিন সময়সূচি → from...to।", en: "A routine timetable → from...to.", hi: "दिनचर्या की समय-सारणी → from...to।" } },
            { wrong: "From last week I am unwell.", right: "I have been unwell since last week.", note: { bn: "'অতীত বিন্দু থেকে এখন পর্যন্ত' → since + present perfect; from এখানে চলে না।", en: "'From a past point until now' → since + present perfect; from does not fit here.", hi: "'अतीत बिंदु से अब तक' → since + present perfect; from यहाँ नहीं चलेगा।" } },
            { wrong: "We will stay in Sylhet since Friday.", right: "We will stay in Sylhet from Friday.", note: { bn: "ভবিষ্যৎ পরিকল্পনার শুরুর তারিখ → from; since শুধু perfect-এর বিন্দু।", en: "The start date of a future plan → from; since is only for perfect tenses.", hi: "भविष्य योजना की शुरुआती तारीख → from; since केवल perfect कालों के लिए।" } },
          ],
        },
        {
          heading: {
            bn: "'It's been two years since we met' — since-ক্লজের গঠন",
            en: "'It's been two years since we met' — building since-clauses",
            hi: "'It's been two years since we met' — since-clause की संरचना",
          },
          body: {
            bn: "একটা জনপ্রিয় কাঠামো: It is / It has been + সময়ের মাপ + since + past simple ক্লজ — 'It has been two years since we met' (দেখা হওয়ার দুই বছর পেরিয়েছে)। মনে রাখুন দুটো নিয়ম: (১) since-এর পরের ক্লজে past simple বসে — 'since we have met' নয়; (২) মূল বাক্যে present perfect — কথ্যে 'It is two years since...' চললেও লেখায় 'It has been...' নিরাপদ। নেগেটিভেও একই সূত্র: 'since I didn't see her' নয় — 'since I saw her last'।",
            en: "One popular structure: It is / It has been + a time span + since + a past simple clause — 'It has been two years since we met'. Two rules to keep: (1) the clause after since takes past simple — not 'since we have met'; (2) the main clause takes a present perfect — 'It is two years since...' survives in speech, but 'It has been...' is safer in writing. Negatives obey the same law: not 'since I didn't see her' — 'since I saw her last'.",
            hi: "एक लोकप्रिय संरचना: It is / It has been + समय की अवधि + since + past simple clause — 'It has been two years since we met'। दो नियम: (1) since के बाद के clause में past simple — 'since we have met' नहीं; (2) मुख्य वाक्य में present perfect — बोलचाल में 'It is two years since...' चलता है, लेखन में 'It has been...' सुरक्षित। नकारात्मक में भी वही नियम: 'since I didn't see her' नहीं — 'since I saw her last'।",
          },
          examples: [
            { wrong: "It's been two years since we have met.", right: "It's been two years since we met.", note: { bn: "since-ক্লজে past simple — met; have met নয়।", en: "The since-clause takes past simple — met, not have met.", hi: "since-clause में past simple — met; have met नहीं।" } },
            { wrong: "It is a long time since I don't see her.", right: "It has been a long time since I saw her last.", note: { bn: "'শেষ দেখা'-র পর থেকে এখন — past simple + last; 'don't see' নয়।", en: "Since the last meeting until now — past simple + last; not 'don't see'.", hi: "आख़िरी मुलाक़ात से अब तक — past simple + last; 'don't see' नहीं।" } },
            { wrong: "Two years passed since we last talked.", right: "Two years have passed since we last talked.", note: { bn: "since-এর সাথে ফল এখনো বোঝাতে present perfect — have passed।", en: "With since, a present-day result takes the present perfect — have passed.", hi: "since के साथ वर्तमान परिणाम के लिए present perfect — have passed।" } },
            { wrong: "Since I have come to this city, I made many friends.", right: "Since I came to this city, I have made many friends.", note: { bn: "since-ক্লজ পাস্ট (came), মূল অংশ perfect (have made) — দুই অংশের কাল উল্টে যায় না।", en: "The since-clause is past (came), the main clause perfect (have made) — the tenses never swap.", hi: "since-clause past (came), मुख्य भाग perfect (have made) — दोनों काल आपस में नहीं बदलते।" } },
          ],
        },
        {
          heading: {
            bn: "perfect continuous-এর জোড়া — চলমান সময়কে মাপা",
            en: "The perfect continuous pairing — measuring ongoing time",
            hi: "perfect continuous की जोड़ी — चलते समय को मापना",
          },
          body: {
            bn: "কাজটা যদি এখনো চলছে — অপেক্ষা, পড়াশোনা, বৃষ্টি, কাজ — তাহলে present perfect continuous-ই সবচেয়ে স্বাভাবিক: 'I have been waiting for an hour', 'It has been raining since morning', 'We have been working on this project for six months'। গঠন: have/has been + verb-ing + for/since-বাক্যাংশ। এই কালটা বক্তার ক্লান্তি-ধৈর্যও বোঝায় — 'I have been calling you since noon!' — তাই অভিযোগ-আবেগের বাক্যে নেটিভরা এটাই বেছে নেন।",
            en: "If the action is still running — waiting, studying, raining, working — the present perfect continuous is the most natural: 'I have been waiting for an hour', 'It has been raining since morning', 'We have been working on this project for six months'. Structure: have/has been + verb-ing + a for/since phrase. This tense also colours the speaker's fatigue or patience — 'I have been calling you since noon!' — which is why natives pick it for complaints and feelings.",
            hi: "यदि काम अभी भी चल रहा है — इंतज़ार, पढ़ाई, बारिश, काम — तो present perfect continuous सबसे स्वाभाविक: 'I have been waiting for an hour', 'It has been raining since morning', 'We have been working on this project for six months'। संरचना: have/has been + verb-ing + for/since वाक्यांश। यह काल बोलने वाले की थकान-धैर्य भी दर्शाता है — 'I have been calling you since noon!' — इसीलिए शिकायत-भावना में नेटिव इसी को चुनते हैं।",
          },
          examples: [
            { wrong: "I am working in this company since 2019.", right: "I have been working in this company since 2019.", note: { bn: "২০১৯ থেকে এখনো চলছে → present perfect continuous + since।", en: "Running since 2019 until now → present perfect continuous + since.", hi: "2019 से अब तक चल रहा → present perfect continuous + since।" } },
            { wrong: "It is raining since morning.", right: "It has been raining since morning.", note: { bn: "'সকাল থেকে বৃষ্টি' চলমান — is raining একা পর্যাপ্ত নয়।", en: "Raining since morning is ongoing — is raining alone is not enough.", hi: "सुबह से बारिश जारी — अकेला is raining अपर्याप्त।" } },
            { wrong: "How long do you know Rahim?", right: "How long have you known Rahim?", note: { bn: "know স্টেটিভ — continuous নয়, তাই have known (perfect simple)।", en: "Know is stative — no continuous, so have known (perfect simple).", hi: "know स्टेटिव है — continuous नहीं, इसलिए have known (perfect simple)।" } },
            { wrong: "We have been waiting here since two hours.", right: "We have been waiting here for two hours.", note: { bn: "কাঠামো ঠিক ছিল, শুধু since/for উল্টে গেছে — 'দুই ঘণ্টা' মাপ → for।", en: "The structure was right; only since/for flipped — 'two hours' is a span → for.", hi: "संरचना सही थी, केवल since/for पलट गया — 'दो घंटे' अवधि → for।" } },
          ],
        },
        {
          heading: {
            bn: "বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "Common mistakes by Bengali speakers",
            hi: "बांग्लाभाषी विद्यार्थियों की सामान्य गलतियाँ",
          },
          body: {
            bn: "সবচেয়ে কমন চার ভুল: (১) simple present + since — 'I am here since 2020', 'He lives here since birth' — কাল হবে present perfect; (২) মাপের সাথে since — 'since two years', 'since three hours' — মাপ মানেই for; (৩) বাংলা 'থেকে'-র জোরে perfect কালেও from — 'I am working here from January'; (৪) since-ক্লজে present perfect — 'since I have joined' — হবে 'since I joined'। শোধরানোর অভ্যাস: 'থেকে' শুনলে ভাবুন — শুরুর নাম নাকি মাপ? 'ধরে' শুনলে সরাসরি for।",
            en: "The four most common errors: (1) simple present + since — 'I am here since 2020', 'He lives here since birth' — the tense must be present perfect; (2) since with a measure — 'since two years', 'since three hours' — a measure means for; (3) from dragged into perfect tenses by the Bengali 'থেকে' — 'I am working here from January'; (4) present perfect inside the since-clause — 'since I have joined' should be 'since I joined'. Habit fix: on hearing 'থেকে' ask — a named start or a measure? On 'ধরে', go straight to for.",
            hi: "चार सबसे सामान्य गलतियाँ: (1) simple present + since — 'I am here since 2020' — काल present perfect होगा; (2) माप के साथ since — 'since two years' — माप का अर्थ for; (3) 'से' के दबाव में perfect काल में from — 'I am working here from January'; (4) since-clause में present perfect — 'since I have joined' होगा 'since I joined'। सुधार-अभ्यास: 'से' सुनते ही पूछें — नामित शुरुआत या माप? 'धरे' सुनते ही सीधे for।",
          },
          examples: [
            { wrong: "I am in this school since 2020.", right: "I have been in this school since 2020.", note: { bn: "'২০২০ থেকে এখনো' → present perfect; simple present বাংলা-ছায়া।", en: "'From 2020 until now' → present perfect; simple present is a Bengali shadow.", hi: "'2020 से अब तक' → present perfect; simple present अनुवाद-छाया।" } },
            { wrong: "He knows me since we are children.", right: "He has known me since we were children.", note: { bn: "since-ক্লজে অতীত (were), মূল বাক্যে perfect (has known) — দুই জায়গাতেই কাল ঠিক করতে হবে।", en: "The since-clause goes past (were), the main clause perfect (has known) — fix the tense on both sides.", hi: "since-clause में past (were), मुख्य वाक्य में perfect (has known) — दोनों ओर काल ठीक करें।" } },
            { wrong: "I am living in this flat since ten years.", right: "I have been living in this flat for ten years.", note: { bn: "দুই সমস্যা — 'দশ বছর' মাপ → for, আর কাল → present perfect continuous।", en: "Two problems — 'ten years' is a measure → for, and the tense → present perfect continuous.", hi: "दो समस्या — 'दस वर्ष' माप → for, और काल → present perfect continuous।" } },
            { wrong: "We are waiting since one hour.", right: "We have been waiting for an hour.", note: { bn: "'এক ঘণ্টা ধরে' → for an hour; কাল → have been waiting।", en: "'One hour' → for an hour; the tense → have been waiting.", hi: "'एक घंटे से' → for an hour; काल → have been waiting।" } },
          ],
        },
        {
          heading: {
            bn: "ছোট গল্পে দেখা যাক",
            en: "A short story to see it all",
            hi: "एक छोटी कहानी में सब देखें",
          },
          body: {
            bn: "কলেজ-রিইউনিয়নে দুই বন্ধু: রিনা: 'How long have you been in this city?' রাফি: 'Since 2018 — so, for almost seven years now.' রিনা: 'Wow! We haven't met since our final exams!' রাফি: 'Yes — it's been twelve years since we graduated. I have been looking for your number for months!' রিনা হাসল: 'I have had this number since college — you never called!' রাফি: 'From tomorrow, I will call you every week!' — ছোট্ট কথাতেই since, for, from, it's been... since — চার প্যাটার্ন!",
            en: "Two friends at a college reunion: Rina: 'How long have you been in this city?' Rafi: 'Since 2018 — so, for almost seven years now.' Rina: 'Wow! We haven't met since our final exams!' Rafi: 'Yes — it's been twelve years since we graduated. I have been looking for your number for months!' Rina laughed: 'I have had this number since college — you never called!' Rafi: 'From tomorrow, I will call you every week!' — one short chat with all four patterns: since, for, from, it's been... since!",
            hi: "कॉलेज-रियूनियन में दो दोस्त: रीना: 'How long have you been in this city?' राफ़ी: 'Since 2018 — so, for almost seven years now.' रीना: 'Wow! We haven't met since our final exams!' राफ़ी: 'Yes — it's been twelve years since we graduated. I have been looking for your number for months!' रीना हँसी: 'I have had this number since college — you never called!' राफ़ी: 'From tomorrow, I will call you every week!' — छोटी बातचीत में ही चार पैटर्न: since, for, from, it's been... since!",
          },
          examples: [
            { wrong: "We haven't met from our final exams.", right: "We haven't met since our final exams.", note: { bn: "perfect কালে শুরুর বিন্দু → since; from এখানে আসে না।", en: "A start point in a perfect tense → since; from does not fit here.", hi: "perfect काल में शुरुआती बिंदु → since; from यहाँ नहीं।" } },
            { wrong: "It's been twelve years since we have graduated.", right: "It's been twelve years since we graduated.", note: { bn: "since-ক্লজে past simple — graduated।", en: "The since-clause takes past simple — graduated.", hi: "since-clause में past simple — graduated।" } },
            { wrong: "I have had this number from college.", right: "I have had this number since college.", note: { bn: "কলেজ-নাম — বিন্দু → since।", en: "College is a named point → since.", hi: "college नामित बिंदु है → since।" } },
            { wrong: "From tomorrow I am calling you every week!", right: "From tomorrow, I will call you every week!", note: { bn: "ভবিষ্যৎ প্রতিশ্রুতি — from + will; from এখানে শুরুর তারিখ (perfect নয়)।", en: "A future promise — from + will; here from marks a start date (no perfect involved).", hi: "भविष्य का वादा — from + will; यहाँ from शुरुआती तारीख है (perfect नहीं)।" } },
          ],
        },
      ],
      tips: [
        { bn: "এক লাইনের সূত্র: since = শুরুর বিন্দু, for = দূরত্ব/মাপ।", en: "The one-line formula: since = starting point, for = distance/span.", hi: "एक-लाइन सूत्र: since = शुरुआती बिंदु, for = दूरी/अवधि।" },
        { bn: "since/for দেখলেই কাল-চেক: present perfect বা perfect continuous আছে কি? না হলে বাক্য ঠিক করুন।", en: "On seeing since/for, check the tense: is there a present perfect or perfect continuous? If not, repair the sentence.", hi: "since/for देखते ही काल-जाँच: present perfect या perfect continuous है? नहीं तो वाक्य सुधारें।" },
        { bn: "বাংলা 'ধরে' শুনলে for; 'থেকে' শুনলে প্রথমে ভাবুন — বিন্দু নাকি perfect কাল? তারপর since/from বাছুন।", en: "Hear 'ধরে' → for; hear 'থেকে' → first decide: a point or a perfect tense? Then pick since/from.", hi: "'धरे' सुनें → for; 'से' सुनें → पहले तय करें: बिंदु या perfect काल? फिर since/from चुनें।" },
        { bn: "from...to/until = দুই প্রান্ত (রুটিন, ভবিষ্যৎ, past বিবরণ); since = শুধু শুরু, এখন পর্যন্ত চলছে।", en: "from...to/until = both ends (routines, futures, past narratives); since = only the start, running until now.", hi: "from...to/until = दोनों सिरे (दिनचर्या, भविष्य, past विवरण); since = केवल शुरुआत, अब तक जारी।" },
        { bn: "It has been + মাপ + since + past simple — 'It's been ages since we talked'।", en: "It has been + span + since + past simple — 'It's been ages since we talked'.", hi: "It has been + अवधि + since + past simple — 'It's been ages since we talked'।" },
        { bn: "since-ক্লজে সবসময় past simple — 'since I joined', 'since she left'; 'since I have joined' নয়।", en: "The since-clause always takes past simple — 'since I joined', 'since she left'; not 'since I have joined'.", hi: "since-clause में सदैव past simple — 'since I joined', 'since she left'; 'since I have joined' नहीं।" },
        { bn: "'since two years', 'since three hours' কখনো নয় — মাপ মানেই for।", en: "Never 'since two years', 'since three hours' — a measure always means for.", hi: "'since two years', 'since three hours' कभी नहीं — माप का अर्थ सदा for।" },
        { bn: "দিনে একবার 'How long have you been...?' প্রশ্নে অভ্যাস করুন — উত্তরে since/for আসামাত্র দুটোই পাকা হবে।", en: "Practise one 'How long have you been...?' question a day — answering with since/for will set both for good.", hi: "रोज़ एक 'How long have you been...?' प्रश्न का अभ्यास करें — उत्तर में since/for आने से दोनों पक्के होंगे।" },
        { bn: "একই সময় দুইভাবে: since 9 a.m. = for three hours (এখন ১২টা হলে) — বিন্দু-মাপের রূপান্তরটা বুঝলে বিষয়টা পুরো পরিষ্কার।", en: "One time, two ways: since 9 a.m. = for three hours (if it is 12 now) — grasp this point-span conversion and the whole topic clicks.", hi: "एक समय, दो रूप: since 9 a.m. = for three hours (अभी 12 बजे हैं तो) — यह बिंदु-अवधि रूपांतरण समझते ही विषय साफ़।" },
      ],
      quiz: [
        { question: "I have lived in Chattogram ___ 2015.", options: ["for", "since", "from", "at"], answer: 1, explanation: { bn: "২০১৫ শুরুর বিন্দু — since 2015; for হলে মাপ লাগত (for ten years)।", en: "2015 is a start point — since 2015; for would need a span (for ten years).", hi: "2015 शुरुआती बिंदु है — since 2015; for के लिए अवधि चाहिए (for ten years)।" } },
        { question: "We have been waiting ___ three hours.", options: ["since", "for", "from", "during"], answer: 1, explanation: { bn: "'তিন ঘণ্টা' মাপ → for three hours।", en: "'Three hours' is a span → for three hours.", hi: "'तीन घंटे' अवधि → for three hours।" } },
        { question: "She has known him ___ they were children.", options: ["for", "since", "from", "during"], answer: 1, explanation: { bn: "since + পূর্ণ clause ('they were children') — শুরুর বিন্দু।", en: "since + a full clause ('they were children') — the starting point.", hi: "since + पूरा clause ('they were children') — शुरुआती बिंदु।" } },
        { question: "Which sentence is correct?", options: ["I am here since Monday.", "I have been here since Monday.", "I am here from Monday.", "I was here since Monday."], answer: 1, explanation: { bn: "since বসলে কাল হবে present perfect — I have been here since Monday।", en: "With since, the tense must be present perfect — I have been here since Monday.", hi: "since के साथ काल present perfect होगा — I have been here since Monday।" } },
        { question: "The shop is open ___ 9 a.m. to 9 p.m.", options: ["since", "for", "from", "during"], answer: 2, explanation: { bn: "দুই প্রান্ত (9 to 9) + রুটিন → from...to।", en: "Both ends (9 to 9) + routine → from...to.", hi: "दोनों सिरे (9 to 9) + दिनचर्या → from...to।" } },
        { question: "It's been a long time ___ we last met.", options: ["since", "for", "from", "when"], answer: 0, explanation: { bn: "It has been + মাপ + since + past simple (met) — since-কাঠামো।", en: "It has been + span + since + past simple (met) — the since-structure.", hi: "It has been + अवधि + since + past simple (met) — since-संरचना।" } },
        { question: "Which sentence is correct?", options: ["I have been working here since five years.", "I am working here for five years.", "I have been working here for five years.", "I work here since five years."], answer: 2, explanation: { bn: "'পাঁচ বছর' মাপ → for, আর কাল → present perfect continuous — দুটোই ঠিক থাকলে বাক্য শুদ্ধ।", en: "'Five years' is a span → for, and the tense → present perfect continuous — both fixed makes the sentence correct.", hi: "'पाँच वर्ष' अवधि → for, और काल → present perfect continuous — दोनों ठीक तो वाक्य शुद्ध।" } },
        { question: "How long ___ you been learning English?", options: ["did", "have", "are", "were"], answer: 1, explanation: { bn: "'কতদিন ধরে' প্রশ্ন → present perfect continuous: How long have you been...?", en: "A 'how long' question → present perfect continuous: How long have you been...?", hi: "'कितने समय से' प्रश्न → present perfect continuous: How long have you been...?" } },
        { question: "He has been ill ___ Friday.", options: ["for", "since", "from", "until"], answer: 1, explanation: { bn: "Friday নাম-বিন্দু → since; for হলে হতো for two days।", en: "Friday is a named point → since; for would need a span like for two days.", hi: "Friday नामित बिंदु → since; for होता तो for two days जैसी अवधि चाहिए।" } },
        { question: "Which sentence is correct?", options: ["It has been raining since morning.", "It is raining since morning.", "It rains since morning.", "It has been raining for morning."], answer: 0, explanation: { bn: "চলমান বৃষ্টি + 'সকাল থেকে' → present perfect continuous + since; morning নাম-বিন্দু, মাপ নয়।", en: "Ongoing rain + 'since morning' → present perfect continuous + since; morning is a named point, not a span.", hi: "चलती बारिश + 'सुबह से' → present perfect continuous + since; morning नामित बिंदु है, अवधि नहीं।" } },
      ],
    },
  },
];
