// ─── Learning-path grammar seeds v3: BEGINNER batch B3 (4 deep lessons) ───
// Part of Task 9.3 (owner mandate: every topic developed to FULL depth so the
// learner can master it from this lesson alone). TriText = { bn, en, hi } —
// Bengali is the PRIMARY explanation language; quiz included (8-10 questions).
import type { LibraryGrammarData, LibraryLevel } from "../../src/lib/library-types";

export interface SeedGrammarV3Entry {
  topic: string; // canonical topic id (stable, unique vs static bank topics)
  level: LibraryLevel;
  title: string;
  unit: number; // 1-5 = on the learning path; 0 = extra library lesson
  data: LibraryGrammarData;
}

export const SEED_GRAMMAR_V3_B3: SeedGrammarV3Entry[] = [
  /* ── 1. Modals (can/should/must) ───────────────────────────────────── */
  {
    topic: "Modals (can/should/must)",
    level: "beginner",
    title: "Modals can/should/must (Beginner)",
    unit: 0,
    data: {
      title: {
        bn: "মোডাল ক্রিয়া: can, should, must (বিগিনার)",
        en: "Modals can/should/must (Beginner)",
        hi: "मोडल क्रियाएँ: can, should, must (बिगिनर)",
      },
      intro: {
        bn: "বাংলায় 'পারা', 'উচিত', 'অবশ্যই করতে হবে' — এই তিন ভাব আলাদা শব্দে চলে; ইংরেজিতে এদের জায়গা ভরে দেয় তিনটা ছোট্ট সহায়ক ক্রিয়া: can, should, must। এই পাঠ ধরে নিচ্ছে আপনি আগের পাঠগুলোতে present simple আর subject-verb agreement শিখে ফেলেছেন — সেগুলোই এই পাঠের ভিত। এখানে দেখব: কোন মুহূর্তে can, কখন should, কখন must; modal-এর পরে 'to' আসে না, '-s'-ও আসে না; প্রশ্নে do/does-ও লাগে না। সাথে বাঙালিরা যে 'can able to', 'will can', 'I must to go' ঘরানার ভুল করে — সবগুলো ধরে ধরে ঠিক করব। পাঠ শেষে সামর্থ্য, পরামর্শ আর নিয়ম — তিনটাই নিজের ভাষায় বলতে পারবেন।",
        en: "In Bengali, ability, advice and obligation travel in three different words ('পারা', 'উচিত', 'অবশ্যই করতে হবে'); in English three little helper verbs do all that work: can, should, must. This lesson assumes you have already covered present simple and subject-verb agreement in the earlier path lessons — they are its foundation. Here you will learn exactly when to use can, when should, and when must; that no 'to' and no '-s' ever follows a modal; and that do/does never appears in modal questions. We will also fix the classic Bengali-speaker errors 'can able to', 'will can' and 'I must to go'. By the end you will be able to talk about ability, advice and rules in your own words.",
        hi: "बांग्ला में क्षमता, सलाह और बाध्यता तीन अलग शब्दों में चलती हैं ('पारा', 'उचित', 'अवश्य करना होगा'); अंग्रेज़ी में यह काम तीन छोटी helper verbs करती हैं: can, should, must। यह पाठ मानता है कि आप पिछले पाठों में present simple और subject-verb agreement सीख चुके हैं — वही इसकी नींव है। यहाँ सीखेंगे: can/should/must कब इस्तेमाल होता है; modal के बाद 'to' और '-s' कभी नहीं आता; प्रश्न में do/does भी नहीं। 'can able to', 'will can', 'I must to go' जैसी क्लासिक गलतियाँ भी ठीक करेंगे।",
      },
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয়: can = পারা, should = উচিত, must = অবশ্যই",
            en: "When to use them: can = ability, should = advice, must = strong obligation",
            hi: "कब इस्तेमाल होता है: can = क्षमता, should = सलाह, must = दृढ़ बाध्यता",
          },
          body: {
            bn: "can মানে 'পারা' — এমন কাজ যা করতে আপনি সক্ষম: I can swim, She can drive, They can speak English। কিন্তু can শুধু সামর্থ্য নয় — অনুমতি চাইতেও can ব্যবহার হয়: Can I sit here? (এখানে বসতে পারি?), আর অনুরোধ করতেও: Can you help me? (সাহায্য করবেন?)। বাংলায় এই তিন ভাবের জন্য তিন রকম বলা হয় ('পারি', 'পারি তো', 'একটু করবেন'), ইংরেজিতে সবখানে can-ই।\n\nshould মানে 'উচিত' — পরামর্শ, ভালো সুপারিশ বা দুর্বল দায়িত্ব: You should rest, He should study more, We should leave now। should বলা মানে বাধ্য করা নয় — করলে ভালো হয়, তবে না-ও করতে পারেন। বাংলার 'তোমার এটা করা উচিত' বাক্যের সবচেয়ে কাছের ইংরেজি এটাই।\n\nmust মানে 'অবশ্যই করতে হবে' — সবচেয়ে শক্ত বাধ্যবাধকতা: আইন, স্কুলের নিয়ম, সাইনবোর্ড, বা নিজের দৃঢ় সংকল্প: You must wear a helmet, Students must submit homework, I must finish this today। must বললে অন্য পথ নেই — করতেই হবে।",
            en: "'Can' first means ability — something you are capable of: I can swim, She can drive, They can speak English. But can is not only ability — it also asks for permission: Can I sit here? And it makes a request: Can you help me? Bengali uses different expressions for these three ideas ('পারি', 'পারি তো', 'একটু করবেন'), but English happily uses can for all of them.\n\n'Should' means advice — a good idea or a mild duty: You should rest, He should study more, We should leave now. Should never forces; it says 'this is the wise thing', and you may still choose otherwise. It is the closest English to the Bengali '...করা উচিত'.\n\n'Must' is the strongest — real obligation: a law, a school rule, a signboard, or your own firm decision: You must wear a helmet, Students must submit homework, I must finish this today. With must there is no way out — it has to happen.",
            hi: "'Can' पहले क्षमता दर्शाता है — जो कर सकते हैं: I can swim, She can drive, They can speak English। पर can केवल क्षमता नहीं — अनुमति भी माँगता है: Can I sit here? और अनुरोध भी करता है: Can you help me? बांग्ला में इन तीन भावों के लिए अलग-अलग बातें होती हैं, पर अंग्रेज़ी में सब में can।\n\n'Should' का अर्थ सलाह — अच्छा सुझाव या हल्का कर्तव्य: You should rest, He should study more, We should leave now। should कभी ज़बरदस्ती नहीं करता — यह कहता है 'यह समझदारी का काम है'।\n\n'Must' सबसे मज़बूत — असली बाध्यता: क़ानून, स्कूल का नियम, साइनबोर्ड या अपना दृढ़ संकल्प: You must wear a helmet, Students must submit homework, I must finish this today। must कहा तो बचने का रास्ता नहीं।",
          },
          examples: [
            {
              wrong: "I can to swim very well.",
              right: "I can swim very well.",
              note: {
                bn: "can-এর পরে to আসে না — modal-এর পরে সরাসরি verb-এর base form বসে; 'পারি' বললেই যথেষ্ট।",
                en: "'Can' is followed directly by the base verb — no 'to' ever comes after a modal.",
                hi: "can के बाद 'to' नहीं आता — modal के तुरंत बाद base verb आता है।",
              },
            },
            {
              wrong: "He shoulds study more.",
              right: "He should study more.",
              note: {
                bn: "modal কখনো -s নেয় না — should সব subject-এর সাথে একই থাকে; বদলায় শুধু পরের verb নয়, পরের verb-ও রূপ বদলায় না।",
                en: "A modal never takes '-s' — should stays the same with every subject, and the verb after it stays base too.",
                hi: "modal कभी '-s' नहीं लेता — should हर subject के साथ वही रहता है।",
              },
            },
            {
              wrong: "You musts wear the uniform.",
              right: "You must wear the uniform.",
              note: {
                bn: "must-ও কোনো রূপ বদলায় না — কর্তা I হোক বা they, must-ই থাকে; নিয়ম বোঝাতে must সবচেয়ে শক্ত শব্দ।",
                en: "'Must' never changes form either — I must, they must; and it is the strongest word for a rule.",
                hi: "'must' भी रूप नहीं बदलता — I must, they must; नियम के लिए यह सबसे मज़बूत शब्द है।",
              },
            },
            {
              wrong: "Can I borrowing your pen?",
              right: "Can I borrow your pen?",
              note: {
                bn: "can-এর পরে -ing রূপ নয়, base form — অনুরোধের প্রশ্নও একই ছাঁচে: Can I + verb।",
                en: "After can comes the base form, never the -ing form — even in a request: Can I + verb.",
                hi: "can के बाद -ing नहीं, base form आता है — अनुरोध में भी: Can I + verb।",
              },
            },
            {
              wrong: "You mustn't to be late.",
              right: "You mustn't be late.",
              note: {
                bn: "নেগেটিভ mustn't-এর পরেও to নেই — modal পরিবারে to-র কোনো জায়গা নেই, ইতিবাচক হোক বা নেতিবাচক।",
                en: "Even the negative mustn't takes no 'to' — in the modal family there is no room for 'to', positive or negative.",
                hi: "नकारात्मक mustn't के बाद भी 'to' नहीं — modal परिवार में 'to' के लिए जगह नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "গঠন: modal + verb — তিনটাই এক ছাঁচে",
            en: "Formation: one mould for all three — modal + base verb",
            hi: "गठन: तीनों एक ही ढाँचे में — modal + base verb",
          },
          body: {
            bn: "গঠন চারটা শব্দে: Subject + modal + verb (base form)। এই ছাঁচে ব্যতিক্রম নেই: I can drive, He can drive, They can drive — কর্তা যাই হোক, modal বদলায় না, verb-ও বদলায় না। মনে রাখুন তিনটা 'না': (১) modal-এর পরে to নেই — I must go, 'I must to go' নয়; (২) modal-এ কখনো -s বসে না — She can, 'She cans' নয়; (৩) modal-এর পরের verb-এও -s বসে না — She can speak, 'She can speaks' নয়।\n\nনেগেটিভে modal-এর ঠিক পরে not বসে: cannot/can't, should not/shouldn't, must not/mustn't — I can't hear you, You shouldn't worry, You mustn't touch it। আর প্রশ্ন বানাতে modal-কে subject-এর আগে উল্টে দিন — do/does/did আসার কোনো সুযোগই নেই: Can you swim? Should I call him? Must we go now? কারণ modal নিজেই সাহায্যকারী — সাহায্যকারীর সাহায্যকারী লাগে না।",
            en: "The mould is four words: Subject + modal + base verb. No exceptions: I can drive, He can drive, They can drive — whoever the subject is, the modal never changes and neither does the verb. Remember three 'no's: (1) no 'to' after a modal — I must go, not 'I must to go'; (2) no '-s' on the modal — She can, not 'She cans'; (3) no '-s' on the verb after the modal — She can speak, not 'She can speaks'.\n\nFor the negative, put not right after the modal: cannot/can't, should not/shouldn't, must not/mustn't — I can't hear you, You shouldn't worry, You mustn't touch it. For questions, flip the modal in front of the subject — there is no room for do/does/did: Can you swim? Should I call him? Must we go now? A modal is already a helper; a helper needs no other helper.",
            hi: "ढाँचा चार शब्दों का है: Subject + modal + base verb। कोई अपवाद नहीं: I can drive, He can drive — subject चाहे कोई हो, modal नहीं बदलता, verb भी नहीं। तीन 'नहीं' याद रखें: (1) modal के बाद 'to' नहीं — I must go; (2) modal पर '-s' नहीं — She can; (3) modal के बाद verb पर भी '-s' नहीं — She can speak।\n\nनकारात्मक में modal के ठीक बाद not: can't, shouldn't, mustn't — I can't hear you, You mustn't touch it। प्रश्न में modal को subject से पहले उलटें — do/does/did की जगह ही नहीं: Can you swim? Should I call him? Must we go now?",
          },
          examples: [
            {
              wrong: "She cans speak English.",
              right: "She can speak English.",
              note: {
                bn: "modal-এ -s নেই — can সব কর্তার সাথে একই; -s নেবে শুধু সাধারণ ক্রিয়া (She speaks)।",
                en: "No '-s' on the modal — can stays the same for all subjects; only ordinary verbs take '-s' (She speaks).",
                hi: "modal पर '-s' नहीं — can सब subjects के साथ वही; '-s' केवल साधारण क्रिया लेती है।",
              },
            },
            {
              wrong: "I must to go now.",
              right: "I must go now.",
              note: {
                bn: "must-এর পরে to নেই — বাংলার 'যেতে হবে'-র 'তে' হাত থেকে to ঢুকে পড়ে, সাবধান।",
                en: "No 'to' after must — the Bengali 'যেতে হবে' smuggles a to in; watch out.",
                hi: "must के बाद 'to' नहीं — बांग्ला 'যেতে হবে' से to घुस जाता है, सावधान।",
              },
            },
            {
              wrong: "Do you can help me?",
              right: "Can you help me?",
              note: {
                bn: "modal থাকলে do-প্রশ্ন হয় না — modal নিজেই subject-এর আগে উল্টে আসে।",
                en: "With a modal there is no do-question — the modal itself flips in front of the subject.",
                hi: "modal हो तो do-प्रश्न नहीं — modal ख़ुद subject से पहले आता है।",
              },
            },
            {
              wrong: "He should studies tonight.",
              right: "He should study tonight.",
              note: {
                bn: "modal-এর পরের verb-এও -s নেই — ছাঁচটা মনে রাখুন: should + study, can + go, must + finish।",
                en: "No '-s' on the verb after the modal either — remember the mould: should + study, can + go, must + finish.",
                hi: "modal के बाद verb पर भी '-s' नहीं — ढाँचा याद रखें: should + study, can + go।",
              },
            },
            {
              wrong: "You shouldn't worrying so much.",
              right: "You shouldn't worry so much.",
              note: {
                bn: "not-এর পরেও base form — নেগেটিভে ছাঁচ বদলায় না: shouldn't + worry।",
                en: "Even after not the verb stays base — the mould does not change in negatives: shouldn't + worry.",
                hi: "not के बाद भी base form — नकारात्मक में ढाँचा नहीं बदलता: shouldn't + worry।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "আভাস চেনার উপায়: কোন শব্দ দেখলে কোন modal",
            en: "Pattern recognition: signal words for each modal",
            hi: "पैटर्न पहचान: हर modal के संकेत-शब्द",
          },
          body: {
            bn: "can-এর আভা: সামর্থ্যের শব্দ — languages, drive, swim, cook, sing — আর অনুমতি/অনুরোধের পরিবেশ: 'Can I...?', 'Can you...?' মনে মনে বাংলা বাক্য বানিয়ে দেখুন: 'পারব কি?' বা 'একটু করবেন কি?' — এই দুই জিজ্ঞেসার জবাবেই ইংরেজিতে Can...?\n\nshould-এর আভা: পরামর্শের পরিবেশ — 'You look tired', 'I have an exam', 'What should I do?', আর নরম করার শব্দ 'I think...', 'Maybe...' — এদের কাছাকাছি থাকলে should। বাংলায় 'করা উচিত' বা 'ভালো হয় যদি' বলতে চাইলে should মনে রাখুন।\n\nmust-এর আভা: নিয়ম আর জরুরি প্রয়োজন — সাইনবোর্ড, আইন, নিয়ম-কানুন, শেষ সময়, নিজের দৃঢ় সংকল্প: 'You must wear...', 'I must finish...'। আর নিষেধ দেখলে (No smoking, Do not enter) সেটা বাক্যে must not হয়ে আসে — পরের অংশে বিস্তারিত।",
            en: "Can-signals: ability words — languages, drive, swim, cook, sing — and the permission/request settings: 'Can I...?', 'Can you...?' Build the Bengali sentence in your head: 'পারব কি?' or 'একটু করবেন কি?' — English answers both with Can...?\n\nShould-signals: advice settings — 'You look tired', 'I have an exam', 'What should I do?', plus the softeners 'I think...' and 'Maybe...'. Whenever you would say 'করা উচিত' or 'ভালো হয় যদি' in Bangla, reach for should.\n\nMust-signals: rules and urgency — signboards, laws, deadlines, firm personal decisions: 'You must wear...', 'I must finish...'. And every prohibition sign (No smoking, Do not enter) becomes must not in sentence form — details in the next section.",
            hi: "Can-संकेत: क्षमता वाले शब्द — languages, drive, swim, cook, sing — और अनुमति/अनुरोध: 'Can I...?', 'Can you...?' मन में बांग्ला वाक्य बनाएँ: 'पाऊँ क्या?' या 'ज़रा कर देंगे?' — दोनों का जवाब Can...?\n\nShould-संकेत: सलाह का माहौल — 'You look tired', 'I have an exam', 'What should I do?', और नरम करने वाले 'I think...', 'Maybe...'। बांग्ला 'उचित' बोलने का मन हो तो should।\n\nMust-संकेत: नियम और तात्कालिकता — साइनबोर्ड, क़ानून, डेडलाइन, दृढ़ संकल्प: 'You must wear...', 'I must finish...'। प्रतिबंध चिह्न (No smoking) वाक्य में must not बनता है।",
          },
          examples: [
            {
              wrong: "I am can cook rice and curry.",
              right: "I can cook rice and curry.",
              note: {
                bn: "can-এর আগে be-verb আসে না — modal নিজেই ক্রিয়ার আসন নেয়; 'পারি' বললেই হলো।",
                en: "No be-verb before a modal — the modal takes the verb slot by itself.",
                hi: "can से पहले be-verb नहीं — modal ख़ुद क्रिया-स्थान ले लेता है।",
              },
            },
            {
              wrong: "You look tired. You should to rest.",
              right: "You look tired. You should rest.",
              note: {
                bn: "'You look tired' শুনলেই should-এর ঘ্রাণ — পরামর্শের পরিবেশ; আর should-এর পরে to নেই।",
                en: "'You look tired' is a should-signal — an advice setting; and no 'to' follows should.",
                hi: "'You look tired' सुनते ही should की ख़ुशबू — सलाह का माहौल; और should के बाद 'to' नहीं।",
              },
            },
            {
              wrong: "I must going to the bank today.",
              right: "I must go to the bank today.",
              note: {
                bn: "must-এর পরে -ing নয়, base form — 'আজই করতেই হবে' জাতীয় দৃঢ়তায় must।",
                en: "After must comes the base form, not -ing; use must for firm 'it has to happen today' energy.",
                hi: "must के बाद -ing नहीं, base form — 'आज ही करना है' के लिए must।",
              },
            },
            {
              wrong: "Can you telling me the time?",
              right: "Can you tell me the time?",
              note: {
                bn: "অনুরোধের জন্য Can you + base verb — -ing রূপ এখানে আসে না।",
                en: "For requests it is Can you + base verb — the -ing form never appears here.",
                hi: "अनुरोध के लिए Can you + base verb — -ing रूप यहाँ नहीं आता।",
              },
            },
            {
              wrong: "Students should submit homework anytime they like.",
              right: "Students must submit homework on time.",
              note: {
                bn: "স্কুলের নিয়ম বোঝাতে should দুর্বল পড়ে — নিয়ম মানে must; আর 'যখন খুশি' থাকলে সেটা must-ই হতে পারে না।",
                en: "A school rule reads stronger with must — should is only advice; and 'anytime they like' contradicts a rule anyway.",
                hi: "स्कूल के नियम के लिए should कमज़ोर पड़ता है — नियम = must; 'जब चाहें' नियम के विरोध में है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "must not নাকি don't have to? — সবচেয়ে বড় গোলমাল",
            en: "must not vs don't have to — the biggest mix-up",
            hi: "must not बनाम don't have to — सबसे बड़ी उलझन",
          },
          body: {
            bn: "এই দুটো বাংলায় প্রায় একই শোনায় ('লাগবে না', 'করা যাবে না'), কিন্তু ইংরেজিতে অর্থ উল্টোদিকে ঘোরে। must not / mustn't মানে নিষেধ — করা যাবে না, বিপদ বা নিয়ম ভাঙা: You mustn't smoke in the hospital, You mustn't tell anyone।\n\ndon't have to মানে দরকার নেই — করলেও ভুল নয়, কিন্তু বাধ্যবাধকতা নেই: You don't have to come early (আগে আসার দরকার নেই — সময়মতো এলেই হবে), I don't have to work on Friday (শুক্রবার কাজ নেই)। মনে রাখার সহজ কৌশল: বেড়ি জড়ানো হলে must not, স্বাধীনতা হলে don't have to। এই একটা জিনিস গুলিয়ে বললে অর্থ উল্টে যায় — 'You don't have to pay' বললে বিল মাফ, আর 'You mustn't pay' বললে টাকা দেওয়াই নিষেধ!",
            en: "In Bengali these two sound almost the same ('লাগবে না', 'করা যাবে না'), but in English they point in opposite directions. must not / mustn't is a prohibition — forbidden, dangerous or rule-breaking: You mustn't smoke in the hospital, You mustn't tell anyone.\n\ndon't have to means there is no need — you may do it, but it is not required: You don't have to come early (coming on time is enough), I don't have to work on Friday. Easy trick: chains = must not; freedom = don't have to. Mixing them up flips the meaning — 'You don't have to pay' waives the bill, while 'You mustn't pay' forbids paying!",
            hi: "बांग्ला में दोनों लगभग एक जैसे सुनाई देते हैं ('लगबे না' जैसा), पर अंग्रेज़ी में अर्थ विपरीत है। must not / mustn't = प्रतिबंध — मना, ख़तरनाक या नियम-भंग: You mustn't smoke in the hospital, You mustn't tell anyone।\n\ndon't have to = ज़रूरत नहीं — कर भी सकते हैं, पर आवश्यक नहीं: You don't have to come early, I don't have to work on Friday। आसान तरकीब: बेड़ी हो तो must not, आज़ादी हो तो don't have to। उलझाया तो अर्थ पलट जाएगा — 'You don't have to pay' = बिल माफ़, 'You mustn't pay' = भुगतान मना!",
          },
          examples: [
            {
              wrong: "You don't have to smoke here, it's a hospital.",
              right: "You mustn't smoke here, it's a hospital.",
              note: {
                bn: "হাসপাতালে ধূমপান 'দরকার নেই' নয় — এটা নিষেধ; তাই mustn't।",
                en: "Smoking in a hospital is not 'unnecessary' — it is forbidden; so mustn't.",
                hi: "अस्पताल में धूम्रपान 'ज़रूरत नहीं' नहीं — यह प्रतिबंध है; इसलिए mustn't।",
              },
            },
            {
              wrong: "You mustn't bring any food, we have plenty.",
              right: "You don't have to bring any food, we have plenty.",
              note: {
                bn: "খাবার আনা নিষেধ নয়, দরকার নেই — মানুষ আনলে দোষ দেব না; তাই don't have to।",
                en: "Bringing food is not forbidden, just unnecessary — nobody will blame you for bringing some; so don't have to.",
                hi: "खाना लाना मना नहीं, बस ज़रूरत नहीं — इसलिए don't have to।",
              },
            },
            {
              wrong: "Tomorrow is Friday, you mustn't come to the office.",
              right: "Tomorrow is Friday, you don't have to come to the office.",
              note: {
                bn: "ছুটির দিনে আসা নিষেধ নয় — আসার দরকার নেই; mustn't বললে শুনতে হয় আসা যাবে না।",
                en: "Coming on a holiday is not banned — it is simply not required; mustn't would sound like 'coming is forbidden'.",
                hi: "छुट्टी के दिन आना मना नहीं — बस ज़रूरी नहीं; mustn't बोला तो 'आना मना है' लगेगा।",
              },
            },
            {
              wrong: "You can skip the meeting — you mustn't attend.",
              right: "You can skip the meeting — you don't have to attend.",
              note: {
                bn: "স্বেচ্ছার জিনিসে mustn't নয় — 'হাজিরা নিষিদ্ধ' বোঝায় যাবে; দরকার নেই = don't have to।",
                en: "For something optional, never mustn't — it would mean attendance is banned; no need = don't have to.",
                hi: "वैकल्पिक चीज़ के लिए mustn't नहीं — 'उपस्थिति प्रतिबंधित' लगेगा; ज़रूरत नहीं = don't have to।",
              },
            },
            {
              wrong: "This door is locked — you don't have to enter.",
              right: "This door is locked — you mustn't enter.",
              note: {
                bn: "বন্ধ দরজা মানে প্রবেশ নিষেধ — 'দরকার নেই' নয়; নিষেধে সবসময় mustn't।",
                en: "A locked door means entry is forbidden — not 'unnecessary'; prohibitions always take mustn't.",
                hi: "बंद दरवाज़ा = प्रवेश प्रतिबंध — 'ज़रूरत नहीं' नहीं; प्रतिबंध में हमेशा mustn't।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "can দিয়ে অনুমতি-অনুরোধ, should দিয়ে পরামর্শ-মতামত",
            en: "Can for permission and requests, should for opinions",
            hi: "can से अनुमति-अनुरोध, should से राय",
          },
          body: {
            bn: "রেস্টুরেন্ট, অফিস, রাস্তা — যেখানেই মানুষের কাছে কিছু চাইবেন, can-ই প্রথম প্যাঁচা: Can I have the menu? Can you say that again, please? Can I borrow your phone? আরেকটু ভদ্র করতে চাইলে could ব্যবহার হয় (Could you open the window?) — অর্থ একই, শুধু স্বর নরম হয়; বিগিনার পর্যায়ে can যথেষ্ট।\n\nপরামর্শের দুই দিক আছে: নিজে জিজ্ঞেস করা — Should I apologize to her? — আর অন্যকে পরামর্শ দেওয়া — You should apologize। পরামর্শ নরম রাখতে সামনে যোগ করুন I think বা maybe: I think you should talk to him, Maybe we should take a taxi। আর খুব ভালো কিছুর জোরালো সুপারিশে must-ও চলে: You must watch this movie — এটা বাধ্যবাধকতা নয়, উত্সাহ।",
            en: "At a restaurant, office or on the street — whenever you want something from someone, can is your first move: Can I have the menu? Can you say that again, please? Can I borrow your phone? To sound a little softer, use could (Could you open the window?) — same meaning, gentler tone; at beginner level can is enough.\n\nAdvice has two directions: asking — Should I apologize to her? — and giving — You should apologize. To keep advice gentle, put I think or maybe in front: I think you should talk to him, Maybe we should take a taxi. And for an enthusiastic strong recommendation, must also works: You must watch this movie — not an obligation, just excitement.",
            hi: "रेस्तराँ, ऑफ़िस, सड़क — किसी से कुछ चाहिए तो can ही पहला क़दम: Can I have the menu? Can you say that again, please? Can I borrow your phone? और नरम करने के लिए could (Could you open the window?) — अर्थ वही, सुर नरम; बिगिनर स्तर पर can ही काफ़ी है।\n\nसलाह दो तरफ़ की होती है: पूछना — Should I apologize to her? — और देना — You should apologize। सलाह नरम रखने के लिए आगे I think या maybe जोड़ें: I think you should talk to him। और ज़ोरदार सिफ़ारिश में must भी चलता है: You must watch this movie — यह बाध्यता नहीं, जोश है।",
          },
          examples: [
            {
              wrong: "I can sit here?",
              right: "Can I sit here?",
              note: {
                bn: "গলার স্বর তুলে প্রশ্ন হয় না — অনুমতি চাইতে modal subject-এর আগে উল্টে আসবেই: Can I...?",
                en: "Rising intonation does not make a question — for permission the modal flips in front: Can I...?",
                hi: "स्वर उठाने से प्रश्न नहीं बनता — अनुमति के लिए modal आगे आएगा: Can I...?",
              },
            },
            {
              wrong: "You should talking to your teacher.",
              right: "You should talk to your teacher.",
              note: {
                bn: "should + -ing নয় — পরামর্শ দেওয়ার ছাঁচ: should + base verb।",
                en: "Not should + -ing — the advice mould is should + base verb.",
                hi: "should + -ing नहीं — सलाह का ढाँचा: should + base verb।",
              },
            },
            {
              wrong: "You can give me your pen?",
              right: "Can you give me your pen, please?",
              note: {
                bn: "অনুরোধে Can you...? দিয়ে শুরু করুন, শেষে please — তখন কথাটা ভদ্র আর স্পষ্ট হয়।",
                en: "Start requests with Can you...? and end with please — then it sounds polite and clear.",
                hi: "अनुरोध Can you...? से शुरू करें, अंत में please — तब विनम्र और साफ़ लगेगा।",
              },
            },
            {
              wrong: "Maybe you should to take an umbrella.",
              right: "Maybe you should take an umbrella.",
              note: {
                bn: "maybe + should চমৎকার জুটি, কিন্তু to চলে আসবে না — modal-এর পরে সবসময় base verb।",
                en: "maybe + should is a lovely pair, but no 'to' — a modal is always followed by the base verb.",
                hi: "maybe + should अच्छी जोड़ी है, पर 'to' नहीं — modal के बाद हमेशा base verb।",
              },
            },
            {
              wrong: "We must take a taxi, it's just a thought.",
              right: "Maybe we should take a taxi.",
              note: {
                bn: "'শুধু একটা ভাবনা' হলে must অতিরঞ্জিত শোনায় — হালকা সাজেস্টে should-ই যথেষ্ট।",
                en: "'Just a thought' with must sounds overdramatic — for a light suggestion should is enough.",
                hi: "'बस एक विचार' के साथ must अतिशयोक्ति लगती है — हल्के सुझाव के लिए should ही काफ़ी।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "প্রশ্ন ও ছোট উত্তর: modal-ই সবার আগে, modal-ই ফেরত আসে",
            en: "Questions and short answers: modal first, modal back",
            hi: "प्रश्न और लघु उत्तर: modal सबसे पहले, modal ही लौटता है",
          },
          body: {
            bn: "modal প্রশ্নের নিয়ম এক লাইনে: modal সবার আগে, subject পরে, তারপর base verb। Can you swim? Should we wait? Must I wear this? যেখানে প্রশ্নবোধক শব্দ আছে (what, where, why, when), সেটা modal-এর আরও আগে: What should I do? Where can I buy books? Why must we leave? বাংলা ক্রম অনুবাদ করবেন না — 'কী করব আমি?' নয়, What should I do?\n\nজবাবে পুরো বাক্য বলার দরকার নেই — modal-টাই ফেরত আসে: Can you swim? — Yes, I can. / No, I can't. Should I call him? — Yes, you should. Must I pay now? — No, you don't have to. খেয়াল করুন জবাবে do/does আসে না — Yes, I can, কখনোই Yes, I do নয়।",
            en: "One line covers modal questions: modal first, then subject, then base verb. Can you swim? Should we wait? Must I wear this? When a question word exists (what, where, why, when), it goes even before the modal: What should I do? Where can I buy books? Why must we leave? Do not translate the Bengali order — 'কী করব আমি?' becomes What should I do?, never a word-for-word copy.\n\nIn answers you need no full sentence — the modal comes back: Can you swim? — Yes, I can. / No, I can't. Should I call him? — Yes, you should. Must I pay now? — No, you don't have to. Notice that do/does never appears in the reply — Yes, I can, never Yes, I do.",
            hi: "modal प्रश्न का नियम एक पंक्ति में: modal पहले, फिर subject, फिर base verb। Can you swim? Should we wait? Must I wear this? प्रश्नवाचक शब्द (what, where, why) modal से भी पहले: What should I do? Where can I buy books? बांग्ला क्रम अनुवाद न करें।\n\nउत्तर में पूरा वाक्य ज़रूरी नहीं — modal वापस आता है: Yes, I can. / No, I can't. / Yes, you should. / No, you don't have to। ध्यान दें — उत्तर में do/does कभी नहीं आता: Yes, I can, कभी 'Yes, I do' नहीं।",
          },
          examples: [
            {
              wrong: "What I should do now?",
              right: "What should I do now?",
              note: {
                bn: "প্রশ্নবোধক শব্দের পরে সরাসরি modal — তারপর subject: What + should + I + do।",
                en: "Right after the question word comes the modal, then the subject: What + should + I + do.",
                hi: "प्रश्नवाचक शब्द के तुरंत बाद modal, फिर subject: What + should + I + do।",
              },
            },
            {
              wrong: "Do you can drive?",
              right: "Can you drive?",
              note: {
                bn: "modal-প্রশ্নে do-এর জায়গা নেই — modal নিজেই প্রশ্ন বানায়।",
                en: "In a modal question there is no room for do — the modal alone makes the question.",
                hi: "modal-प्रश्न में do की जगह नहीं — modal अकेले प्रश्न बनाता है।",
              },
            },
            {
              wrong: "Where I can buy the ticket?",
              right: "Where can I buy the ticket?",
              note: {
                bn: "wh-শব্দ → modal → subject — বাংলা ক্রম ('কোথায় আমি কিনব') সরাসরি আনবেন না।",
                en: "wh-word → modal → subject — do not carry over the Bengali order.",
                hi: "wh-शब्द → modal → subject — बांग्ला क्रम सीधे मत लाओ।",
              },
            },
            {
              wrong: "Can you swim? — Yes, I do.",
              right: "Can you swim? — Yes, I can.",
              note: {
                bn: "ছোট উত্তরে প্রশ্নের modal-ই ফেরত আসে — can-এর প্রশ্নের জবাব can-ই।",
                en: "The short answer returns the modal from the question — a can-question is answered with can.",
                hi: "लघु उत्तर में प्रश्न का modal ही लौटता है — can-प्रश्न का उत्तर can।",
              },
            },
            {
              wrong: "Must I come early? — No, you mustn't.",
              right: "Must I come early? — No, you don't have to.",
              note: {
                bn: "মানে যদি হয় 'দরকার নেই', জবাবে mustn't নয় — সেটা নিষেধ; দরকার নেই = you don't have to।",
                en: "If the meaning is 'no need', never answer with mustn't — that is a prohibition; no need = you don't have to.",
                hi: "अगर अर्थ 'ज़रूरत नहीं' है, तो mustn't नहीं — वह प्रतिबंध है; ज़रूरत नहीं = you don't have to।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "বাঙালি শিক্ষার্থীদের কমন ভুল: modal-পরিবারের পাঁচ ফাঁদ",
            en: "Common mistakes by Bengali speakers: five modal traps",
            hi: "बांग्लाभाषी शिक्षार्थियों की आम गलतियाँ: modal के पाँच जाल",
          },
          body: {
            bn: "এই পাঁচটা ভুল প্রায় প্রতিটা বাঙালি শিক্ষার্থী এক না এক বার করে। (১) 'can able to' — can-ই যেখানে সামর্থ্য বোঝায়, able to আলাদা প্যাটার্ন (I am able to swim) — দুটো একসাথে আসে না। (২) 'will can' — ভবিষ্যতে সামর্থ্য বোঝাতে চাইলে will be able to, তবে বেশিরভাগ বাক্যে প্রসঙ্গেই স্পষ্ট হয়ে যায়, can-ই চলে: Tomorrow I can come early। (৩) modal-এর পরে to — বাংলার 'করতে পারব', 'করতে হবে' শব্দে 'তে' আছে বলে হাত থেকে to চলে আসে। (৪) third person-এ modal-এ -s যোগ করা — She cans। (৫) 'I am can' — be-verb + modal একসাথে আসে না; modal নিজেই verb-এর আসন নেয়।\n\nপ্রতিটা ভুলের পেছনে বাংলা প্যাটার্ন আছে: 'পারতে', 'করতে হবে', 'সে পারে' — বাংলা ক্রিয়া রূপ বদলায়, তাই ইংরেজিতেও বদলাতে ইচ্ছে করে। কিন্তু modal পরিবারে রূপ বদল নেই — এই একটা নিয়ম পাকা হলে পাঁচ ফাঁদের চারটাই পার হয়ে যায়।",
            en: "Almost every Bengali learner falls into these five traps. (1) 'can able to' — can already expresses ability while able to is a separate pattern (I am able to swim); the two never team up. (2) 'will can' — for future ability use will be able to, though in most sentences the context makes plain can work: Tomorrow I can come early. (3) 'to' after the modal — Bengali 'করতে পারব'/'করতে হবে' smuggles in a to. (4) adding -s to the modal for the third person — She cans. (5) 'I am can' — a be-verb and a modal never appear together; the modal takes the verb slot by itself.\n\nBehind every trap stands a Bengali pattern: the Bengali verb changes shape ('পারতে', 'সে পারে'), so the hand wants to change the English too. But the modal family never changes shape — nail this one rule and four of the five traps disappear.",
            hi: "लगभग हर बांग्लाभाषी शिक्षार्थी इन पाँच जालों में गिरता है। (1) 'can able to' — can ही क्षमता बताता है, able to अलग पैटर्न है (I am able to swim) — दोनों साथ नहीं। (2) 'will can' — भविष्य के लिए will be able to, पर ज़्यादातर वाक्यों में can ही चलता है: Tomorrow I can come early। (3) modal के बाद 'to' — बांग्ला 'করতে' से to घुसता है। (4) third person में modal पर -s — She cans। (5) 'I am can' — be-verb और modal कभी साथ नहीं आते।\n\nहर जाल के पीछे बांग्ला पैटर्न है — बांग्ला क्रिया रूप बदलती है, इसलिए हाथ अंग्रेज़ी में भी बदलने चलती है। पर modal परिवार रूप नहीं बदलता — एक नियम पक्का करें, चार जाल ख़त्म।",
          },
          examples: [
            {
              wrong: "I can able to drive a car.",
              right: "I can drive a car.",
              note: {
                bn: "can + able একসাথে আসে না — হয় I can drive, নয় I am able to drive।",
                en: "can and able never team up — either I can drive or I am able to drive.",
                hi: "can और able साथ नहीं आते — या I can drive, या I am able to drive।",
              },
            },
            {
              wrong: "After the exam, I will can relax.",
              right: "After the exam, I can relax. / I will be able to relax.",
              note: {
                bn: "will + can কখনো একসাথে নয় — ভবিষ্যৎ সামর্থ্যে will be able to, বা প্রসঙ্গে can।",
                en: "will and can never appear together — future ability takes will be able to, or plain can with context.",
                hi: "will और can कभी साथ नहीं — भविष्य की क्षमता के लिए will be able to, या context में can।",
              },
            },
            {
              wrong: "She cans sing beautifully.",
              right: "She can sing beautifully.",
              note: {
                bn: "third person-এও modal-এ -s নেই — বাংলা 'সে পারে'-র 'ে' এখানে কাজ করে না।",
                en: "Even in the third person the modal takes no '-s' — the Bengali ending does not transfer.",
                hi: "third person में भी modal पर '-s' नहीं — बांग्ला प्रत्यय यहाँ काम नहीं करता।",
              },
            },
            {
              wrong: "We must to finish the report today.",
              right: "We must finish the report today.",
              note: {
                bn: "must-এর পরে to নেই — 'শেষ করতেই হবে'-র 'তে' বাদ দিন।",
                en: "No 'to' after must — drop the Bengali 'করতেই হবে' ending.",
                hi: "must के बाद 'to' नहीं — बांग्ला प्रत्यय छोड़ दें।",
              },
            },
            {
              wrong: "He is can solve this problem.",
              right: "He can solve this problem.",
              note: {
                bn: "be-verb + modal একসাথে আসে না — modal-ই ক্রিয়ার আসন নেয়, তার আগে is/am/are নয়।",
                en: "A be-verb and a modal never appear together — the modal takes the verb slot, no is/am/are before it.",
                hi: "be-verb और modal साथ नहीं आते — modal ख़ुद क्रिया-स्थान लेता है, उससे पहले is/am/are नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "ছোট গল্পে দেখা যাক: প্রথম দিন জিমে",
            en: "A mini story: Rahim's first day at the gym",
            hi: "छोटी कहानी: जिम में पहला दिन",
          },
          body: {
            bn: "রাহিম প্রথমবার জিমে গেল। প্রশিক্ষক বলল, 'You must warm up first' — আগে ওয়ার্ম-আপ করতেই হবে, এটা নিয়ম। রাহিম জিজ্ঞেস করল, 'Can I start with the treadmill?' — ট্রেডমিল দিয়ে শুরু করতে পারি? প্রশিক্ষক হাসল, 'Yes, you can. But remember — You shouldn't lift heavy weights on day one' — প্রথম দিনে ভারী ওজন তোলা উচিত নয়। রাহিম আবার জিজ্ঞেস করল, 'Must I come every day?' — প্রতিদিন আসতেই হবে? প্রশিক্ষক বলল, 'No, you don't have to — দরকার নেই, সপ্তাহে তিন দিন এলেই চলবে। কিন্তু You mustn't skip warm-up' — ওয়ার্ম-আপ বাদ দেওয়া কিন্তু নিষেধ!\n\nএক নজরে: (১) modal-এর পরে সবসময় base verb — can go, should rest, must finish; to নেই, -s নেই। (২) প্রশ্নে modal সবার আগে — Can I...? Should we...? What should I do? (৩) নেগেটিভ ও ছোট উত্তরে modal-ই কাজ করে — I can't, Yes, you should। (৪) নিষেধ = mustn't, দরকার নেই = don't have to — এই দুটো কখনো বদলাবেন না। (৫) 'can able to', 'will can', 'I am can' — এই তিনটা বাক্য ইংরেজিতে নেই।",
            en: "Rahim went to the gym for the first time. The trainer said, 'You must warm up first' — that is the rule. Rahim asked, 'Can I start with the treadmill?' 'Yes, you can. But remember — You shouldn't lift heavy weights on day one.' Rahim asked again, 'Must I come every day?' The trainer replied, 'No, you don't have to — three days a week is fine. But You mustn't skip warm-up' — skipping it is forbidden!\n\nIn a nutshell: (1) always a base verb after the modal — can go, should rest, must finish; no 'to', no '-s'. (2) In questions the modal goes first — Can I...? Should we...? What should I do? (3) Negatives and short answers work with the modal itself — I can't, Yes, you should. (4) Prohibition = mustn't, no need = don't have to — never swap them. (5) 'can able to', 'will can', 'I am can' — these sentences do not exist in English.",
            hi: "राहिम पहली बार जिम गया। ट्रेनर ने कहा, 'You must warm up first' — यह नियम है। राहिम ने पूछा, 'Can I start with the treadmill?' 'Yes, you can. But remember — You shouldn't lift heavy weights on day one।' राहिम ने फिर पूछा, 'Must I come every day?' ट्रेनर ने कहा, 'No, you don't have to — हफ़्ते में तीन दिन काफ़ी है। पर You mustn't skip warm-up' — वर्म-अप छोड़ना प्रतिबंधित है!\n\nएक नज़र में: (1) modal के बाद हमेशा base verb — can go, should rest, must finish; 'to' नहीं, '-s' नहीं। (2) प्रश्न में modal पहले — Can I...? What should I do? (3) नकारात्मक और लघु उत्तर में modal ही काम करता है — I can't, Yes, you should। (4) प्रतिबंध = mustn't, ज़रूरत नहीं = don't have to — कभी न बदलें। (5) 'can able to', 'will can', 'I am can' — ये वाक्य अंग्रेज़ी में नहीं हैं।",
          },
          examples: [
            {
              wrong: "You must warming up first.",
              right: "You must warm up first.",
              note: {
                bn: "must + base verb — নিয়ম বোঝাতে must, পরে -ing নয়।",
                en: "must + base verb — for a rule, and never -ing after it.",
                hi: "must + base verb — नियम के लिए must, उसके बाद -ing नहीं।",
              },
            },
            {
              wrong: "Can I to start with the treadmill?",
              right: "Can I start with the treadmill?",
              note: {
                bn: "অনুমতির প্রশ্ন: Can I + base verb — to বাদ।",
                en: "Permission question: Can I + base verb — no 'to'.",
                hi: "अनुमति प्रश्न: Can I + base verb — 'to' नहीं।",
              },
            },
            {
              wrong: "You shouldn't lifted heavy weights.",
              right: "You shouldn't lift heavy weights.",
              note: {
                bn: "shouldn't-এর পরে past form নয় — base verb: shouldn't lift।",
                en: "No past form after shouldn't — base verb only: shouldn't lift.",
                hi: "shouldn't के बाद past रूप नहीं — केवल base verb: shouldn't lift।",
              },
            },
            {
              wrong: "No, you mustn't come every day (meaning: no need).",
              right: "No, you don't have to come every day.",
              note: {
                bn: "'দরকার নেই' জবাবে mustn't নয় — সেটা শুনতে হয় 'আসা নিষেধ'; don't have to ব্যবহার করুন।",
                en: "For 'no need', never mustn't — it sounds like coming is banned; use don't have to.",
                hi: "'ज़रूरत नहीं' के जवाब में mustn't नहीं — वह 'आना मना है' लगता है; don't have to इस्तेमाल करें।",
              },
            },
            {
              wrong: "You mustn't skipping warm-up.",
              right: "You mustn't skip warm-up.",
              note: {
                bn: "নিষেধের ছাঁচ: mustn't + base verb — skipping নয়, skip।",
                en: "Prohibition mould: mustn't + base verb — skip, not skipping.",
                hi: "प्रतिबंध का ढाँचा: mustn't + base verb — skip, skipping नहीं।",
              },
            },
          ],
        },
      ],
      tips: [
        { bn: "মুখস্থ ছন্দটা জপুন: can go, should go, must go — modal-এর পরে to নেই, -s নেই, কোনো রূপ বদল নেই।", en: "Chant the mould: can go, should go, must go — no 'to', no '-s', no change of form after a modal.", hi: "ढाँचा दोहराएँ: can go, should go, must go — modal के बाद 'to' नहीं, '-s' नहीं, कोई रूप-बदल नहीं।" },
        { bn: "সরাসরি 'You should...' দিয়ে পরামর্শ শুরু করলে কড়া শোনায় — নরম করুন: I think you should..., Maybe you should...", en: "Bare 'You should...' sounds stern — soften it: I think you should..., Maybe you should...", hi: "सीधे 'You should...' कड़क लगता है — नरम करें: I think you should..., Maybe you should..." },
        { bn: "রাস্তার সাইনবোর্ড পড়ার অভ্যাস করুন — No smoking = You mustn't smoke; Staff only = You mustn't enter / only staff can enter।", en: "Practise reading signboards — No smoking = You mustn't smoke; Staff only = You mustn't enter / only staff can enter.", hi: "साइनबोर्ड पढ़ने का अभ्यास करें — No smoking = You mustn't smoke; Staff only = You mustn't enter।" },
        { bn: "mustn't আর don't have to-র ফারাক বোঝতে প্রতিদিন দুটো বাক্য লিখুন — একটা নিষেধ, একটা 'দরকার নেই'।", en: "To feel the mustn't vs don't have to gap, write two sentences daily — one prohibition, one 'no need'.", hi: "mustn't और don't have to का फ़र्क़ महसूस करने को रोज़ दो वाक्य लिखें — एक प्रतिबंध, एक 'ज़रूरत नहीं'।" },
        { bn: "প্রশ্নের ক্রম মুখস্থ করুন: প্রশ্নবোধক শব্দ → modal → subject → base verb (Where can I sit?)।", en: "Memorise question order: question word → modal → subject → base verb (Where can I sit?).", hi: "प्रश्न क्रम याद रखें: प्रश्नवाचक → modal → subject → base verb (Where can I sit?)।" },
        { bn: "ছোট উত্তরে modal-ই ফেরত আসে: Yes, I can / No, I can't — Yes, I do নয়।", en: "Short answers return the modal: Yes, I can / No, I can't — never Yes, I do.", hi: "लघु उत्तर में modal लौटता है: Yes, I can / No, I can't — कभी Yes, I do नहीं।" },
        { bn: "can শুধু 'পারা' নয় — অনুমতি আর অনুরোধেও can; রেস্তরায় Can I have...? দিয়ে শুরু করুন।", en: "Can is not only 'ability' — it is permission and requests too; start with Can I have...? at a restaurant.", hi: "can केवल 'क्षमता' नहीं — अनुमति और अनुरोध भी; रेस्तराँ में Can I have...? से शुरू करें।" },
        { bn: "ভবিষ্যৎ সামর্থ্যে will can নয় — will be able to, বা প্রসঙ্গ স্পষ্ট থাকলে শুধু can।", en: "For future ability never will can — use will be able to, or plain can when context is clear.", hi: "भविष्य की क्षमता के लिए will can नहीं — will be able to, या संदर्भ स्पष्ट हो तो केवल can।" },
        { bn: "must-কে ভয় পাবেন না — নিজের প্রতিশ্রুতিতেও must চলে: I must call my mother tonight।", en: "Do not fear must — it works for your own promises too: I must call my mother tonight.", hi: "must से न डरें — अपने वादों में भी must चलता है: I must call my mother tonight।" },
        { bn: "রোজ তিন লাইনের ডায়েরি লিখুন: Today I can..., Today I should..., Today I must... — তিন modal হাতে-নাতে পাকা হবে।", en: "Keep a three-line daily diary: Today I can..., Today I should..., Today I must... — three modals, learned by hand.", hi: "रोज़ तीन पंक्ति की डायरी लिखें: Today I can..., Today I should..., Today I must... — तीनों modal हाथ से पक्के होंगे।" },
      ],
      quiz: [
        {
          question: "She ___ three languages.",
          options: ["can to speak", "cans speak", "can speaks", "can speak"],
          answer: 3,
          explanation: { bn: "modal-এর পরে base verb — to নেই, -s নেই, কর্তা যাই হোক can-ই।", en: "After a modal comes the base verb — no 'to', no '-s'; can stays can for every subject.", hi: "modal के बाद base verb — 'to' नहीं, '-s' नहीं; हर subject के साथ can।" },
        },
        {
          question: "I ___ finish this report today — it is the deadline.",
          options: ["must", "must to", "musts", "am must"],
          answer: 0,
          explanation: { bn: "ডেডলাইন মানে শক্ত বাধ্যবাধকতা — must + base verb; to/-s/be-verb কিছুই লাগবে না।", en: "A deadline means strong obligation — must + base verb; no 'to', no '-s', no be-verb.", hi: "डेडलाइन = दृढ़ बाध्यता — must + base verb; 'to', '-s', be-verb कुछ नहीं।" },
        },
        {
          question: "You look very tired. You ___ take a rest.",
          options: ["mustn't", "don't have to", "should", "can't"],
          answer: 2,
          explanation: { bn: "'ক্লান্ত দেখাচ্ছে' মানে পরামর্শের পরিবেশ — should; নিষেধ বা 'দরকার নেই' এখানে নয়।", en: "'You look tired' is an advice setting — should; it is neither a ban nor 'no need'.", hi: "'थके लग रहे हो' = सलाह का माहौल — should; यहाँ प्रतिबंध या 'ज़रूरत नहीं' नहीं।" },
        },
        {
          question: "This is a hospital — you ___ smoke here.",
          options: ["don't have to", "should", "can", "mustn't"],
          answer: 3,
          explanation: { bn: "হাসপাতালে ধূমপান নিষেধ — mustn't; 'দরকার নেই' (don't have to) নয়।", en: "Smoking in a hospital is forbidden — mustn't; it is not 'unnecessary' (don't have to).", hi: "अस्पताल में धूम्रपान प्रतिबंधित — mustn't; 'ज़रूरत नहीं' नहीं।" },
        },
        {
          question: "Tomorrow is Friday. I ___ wake up early.",
          options: ["don't have to", "mustn't", "can't", "shouldn't"],
          answer: 0,
          explanation: { bn: "ছুটির দিনে ওঠা 'দরকার নেই' — don't have to; mustn't মানে হতো ওঠা নিষেধ।", en: "On a holiday, waking early is simply not needed — don't have to; mustn't would mean waking is banned.", hi: "छुट्टी के दिन जल्दी उठना बस ज़रूरी नहीं — don't have to; mustn't का मतलब होता उठना मना।" },
        },
        {
          question: "___ you help me with this bag, please?",
          options: ["Do", "Are", "Can", "Does"],
          answer: 2,
          explanation: { bn: "অনুরোধের প্রশ্ন Can you...? দিয়ে — do/does মোডাল-প্রশ্নে আসে না, be-verb-ও নয়।", en: "Requests use Can you...? — do/does never appears in modal questions, nor do be-verbs.", hi: "अनुरोध Can you...? से — modal-प्रश्न में do/does या be-verb नहीं आते।" },
        },
        {
          question: "Which sentence is correct?",
          options: ["She cans dance well.", "She can dance well.", "She can to dance well.", "She can dances well."],
          answer: 1,
          explanation: { bn: "modal-এ -s নেই, পরের verb-এও -s নেই, to-ও নেই — She can dance well।", en: "No '-s' on the modal, none on the verb after it, and no 'to' — She can dance well.", hi: "modal पर '-s' नहीं, verb पर भी नहीं, 'to' भी नहीं — She can dance well।" },
        },
        {
          question: "What ___ I do to improve my English?",
          options: ["should", "am", "do", "will can"],
          answer: 0,
          explanation: { bn: "উপায় জানতে চাওয়া = পরামর্শের প্রশ্ন — What + should + I + do; am/do/will can এখানে অসম্ভব।", en: "Asking for a way forward is an advice question — What + should + I + do; am/do/will can are impossible here.", hi: "तरीका पूछना = सलाह का प्रश्न — What + should + I + do; am/do/will can यहाँ असंभव।" },
        },
        {
          question: "Can you drive? — Yes, I ___.",
          options: ["do", "am", "can to", "can"],
          answer: 3,
          explanation: { bn: "ছোট উত্তরে প্রশ্নের modal-ই ফেরত আসে — Yes, I can; do/am/to কিছুই লাগে না।", en: "The short answer returns the modal from the question — Yes, I can; no do, no am, no 'to'.", hi: "लघु उत्तर में प्रश्न का modal लौटता है — Yes, I can; do/am/to कुछ नहीं।" },
        },
        {
          question: "Which sentence is correct?",
          options: ["I can swim.", "I can able to swim.", "I will can swim.", "I am can swim."],
          answer: 0,
          explanation: { bn: "can একাই সামর্থ্য বোঝায় — able to, will, be-verb কোনোটাই সাথে আসবে না।", en: "can alone expresses ability — able to, will and be-verbs never join it.", hi: "can अकेला ही क्षमता बताता है — able to, will, be-verb कोई साथ नहीं आता।" },
        },
      ],
    },
  },
  /* ── 2. Phrasal Verbs ──────────────────────────────────────────────── */
  {
    topic: "Phrasal Verbs",
    level: "beginner",
    title: "Phrasal Verbs (Beginner)",
    unit: 0,
    data: {
      title: {
        bn: "ফ্রেজাল ভার্ব: ক্রিয়া + ছোট শব্দের জাদু (বিগিনার)",
        en: "Phrasal Verbs (Beginner)",
        hi: "फ्रेज़ल वर्ब्स: क्रिया + छोटे शब्द का जादू (बिगिनर)",
      },
      intro: {
        bn: "বাংলায় আমরা এক ক্রিয়া বা জোড়া-ক্রিয়ায় ('উঠে পড়া', 'নেমে আসা', 'ছেড়ে দেওয়া') অনেক অর্থ প্যাক করি; ইংরেজি কথ্য ভাষায় সেই কাজ করে verb + ছোট শব্দ — অর্থাৎ phrasal verb: get up, look for, give up, turn on। এই পাঠ ধরে নিচ্ছে আপনি রোজকার ক্রিয়াগুলো (eat, go, come, take, put) আর present simple আগের পাঠগুলো থেকে জানেন। এখানে শিখবেন: phrasal verb আসলে কী, রুটিনের সবচেয়ে দরকারি আটটা, এক verb-এর অনেক অর্থ, separable/inseparable-এর সহজ নিয়ম, আর বাংলা থেকে শব্দে-শব্দে অনুবাদ করে যে ভুলগুলো হয়। নাটক, ইউটিউব, অফিস-আড্ডা — সবখানে এদেরই দেখবেন।",
        en: "In Bengali we pack many meanings into one verb or a verb-pair ('উঠে পড়া', 'নেমে আসা', 'ছেড়ে দেওয়া'); in spoken English that job belongs to verb + small word — a phrasal verb: get up, look for, give up, turn on. This lesson assumes you already know the everyday verbs (eat, go, come, take, put) and present simple from the earlier lessons. You will learn what phrasal verbs really are, the eight most useful routine ones, how one verb takes many meanings, the easy rule for separable vs inseparable, and the mistakes that come from translating Bengali word by word. Films, YouTube, office chat — phrasal verbs are everywhere.",
        hi: "बांग्ला में हम एक क्रिया या जोड़ी-क्रिया में बहुत अर्थ भर देते हैं ('উঠে পড়া', 'ছেড়ে দেওয়ा'); अंग्रेज़ी की बोलचाल में वह काम करता है verb + छोटा शब्द — यानी phrasal verb: get up, look for, give up, turn on। यह पाठ मानता है कि आप रोज़मर्रा की क्रियाएँ (eat, go, come, take, put) और present simple पिछले पाठों से जानते हैं। यहाँ सीखेंगे: phrasal verb वाकई क्या है, रूटीन के आठ सबसे ज़रूरी, एक verb के कई अर्थ, separable/inseparable का आसान नियम, और शब्द-दर-शब्द अनुवाद से होने वाली गलतियाँ। फ़िल्म, YouTube, ऑफ़िस — हर जगह यही मिलेंगे।",
      },
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয়: ইংরেজির কথ্য ভাষার প্রাণ",
            en: "When to use them: the lifeblood of spoken English",
            hi: "कब इस्तेमाल होते हैं: बोलचाल की अंग्रेज़ी की जान",
          },
          body: {
            bn: "phrasal verb = ক্রিয়া + ছোট শব্দ (particle), আর জুটিটা মিলে এমন অর্থ বানায় যা অংশ দুটো থেকে অনুমান করা যায় না: give up মানে হাল ছাড়া — 'দান করে উপরে' নয়; find out মানে খুঁজে বের করা; get up মানে বিছানা থেকে উঠা। বাংলায় এই অর্থ এক ক্রিয়ায় বা জোড়া-ক্রিয়ায় চলে আসে, তাই প্রতিটা জুটি মুখস্থ করতে হয় — হিসেব করে বানানো যায় না।\n\nকেন জরুরি? কারণ সিনেমা, নাটক, দুই বন্ধুর আড্ডা — সব স্বাভাবিক কথ্য ইংরেজিতে বইয়ের ভারী শব্দের চেয়ে phrasal verb-ই প্রথম পছন্দ: 'I will call you back' (আমি ফিরিয়ে ফোন করব), 'We ran out of milk' (দুধ শেষ হয়ে গেছে)। দৈনন্দিন রুটিন, ফোন-আলাপ, নির্দেশনা — এসব পরিস্থিতিতে phrasal verb ছাড়া নেটিভদের মতো কথা বলা যায় না। লেখার ভাষায় (খবর, একাডেমিক প্যারা) এক-শব্দের verb বেশি আসে, তবে বিগিনারের জন্য কথ্য প্রথম।",
            en: "A phrasal verb = verb + particle (a small adverb or preposition), and the pair creates a meaning you cannot guess from the parts: give up means stop trying — not 'donate upward'; find out means discover; get up means leave the bed. Bengali packs these meanings into one verb or a verb-pair, so every pair has to be memorised — it cannot be engineered.\n\nWhy does it matter? In every natural conversation — films, dramas, two friends chatting — phrasal verbs beat the heavy bookish words: 'I will call you back' (আমি ফিরিয়ে ফোন করব), 'We ran out of milk' (দুধ শেষ হয়ে গেছে). Daily routines, phone calls, instructions — you cannot sound natural without them. Formal writing (news, academic paragraphs) leans on single-word verbs, but for beginners speech comes first.",
            hi: "Phrasal verb = क्रिया + particle (छोटा adverb या preposition), और जोड़ी का अर्थ हिस्सों से अनुमान नहीं लगता: give up = हार मानना — 'ऊपर दान करना' नहीं; find out = पता लगाना; get up = बिस्तर से उठना। बांग्ला यह अर्थ एक क्रिया में ले लेती है, इसलिए हर जोड़ी याद करनी पड़ती है।\n\nक्यों ज़रूरी? फ़िल्में, नाटक, दोस्तों की बातचीत — हर स्वाभाविक बातचीत में किताबी भारी शब्दों से पहले phrasal verbs: 'I will call you back', 'We ran out of milk'। रूटीन, फ़ोन, निर्देश — इनके बिना natural नहीं लगता। औपचारिक लेखन में एक-शब्द verb ज़्यादा, पर बिगिनर के लिए बोलचाल पहले।",
          },
          examples: [
            {
              wrong: "Please on the fan.",
              right: "Please turn on the fan.",
              note: {
                bn: "বাংলায় 'অন করা' এক ক্রিয়ার মতো চলে, কিন্তু ইংরেজিতে on একা ক্রিয়া নয় — turn on জুটিটা লাগবেই।",
                en: "In Bangla 'অন করা' works as one verb, but in English on can never act alone — you need the pair turn on.",
                hi: "बांग्ला 'ऑन करना' एक क्रिया जैसा चलता है, पर अंग्रेज़ी में on अकेला क्रिया नहीं — turn on जोड़ी चाहिए।",
              },
            },
            {
              wrong: "He gave the exam yesterday.",
              right: "He took the exam yesterday.",
              note: {
                bn: "বাংলা 'পরীক্ষা দেওয়া'-র 'দেওয়া' থেকে give চলে আসে, কিন্তু ইংরেজিতে পরীক্ষা take করা হয় — take an exam।",
                en: "Bengali 'পরীক্ষা দেওয়া' suggests give, but in English exams are taken — take an exam.",
                hi: "बांग्ला 'পরীক্ষা দেওয়া' से give आता है, पर अंग्रेज़ी में परीक्षा take होती है — take an exam।",
              },
            },
            {
              wrong: "Our milk finished yesterday.",
              right: "We ran out of milk yesterday.",
              note: {
                bn: "'শেষ হয়ে যাওয়া' কথ্য ইংরেজিতে run out of — এটাই নেটিভদের প্রথম পছন্দ।",
                en: "'To be used up' in spoken English is run out of — the native first choice.",
                hi: "'ख़त्म हो जाना' बोलचाल में run out of — नेटिव की पहली पसंद यही है।",
              },
            },
            {
              wrong: "She wears her uniform at 7 every morning.",
              right: "She puts on her uniform at 7 every morning.",
              note: {
                bn: "'পরা' এক মুহূর্তের কাজ — put on; wear বোঝায় অবস্থা (পরে আছে)। সকালের অ্যাকশনে put on।",
                en: "'Dressing' is a moment of action — put on; wear describes a state (having it on). Morning action takes put on.",
                hi: "'पहनना' क्षणभर का काम — put on; wear अवस्था बताता है। सुबह की क्रिया put on।",
              },
            },
            {
              wrong: "I am searching my mobile everywhere.",
              right: "I am looking for my mobile everywhere.",
              note: {
                bn: "'খোঁজা' কথ্য ইংরেজিতে look for — search শুধু আনুষ্ঠানিক বা পুলিশ-জাতীয় প্রসঙ্গে স্বাভাবিক।",
                en: "'To search for something in daily life' is look for — search sounds formal or police-like here.",
                hi: "रोज़मर्रा की 'खोज' look for — search यहाँ औपचारिक या पुलिस-जैसा लगता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "গঠন: verb + particle — দুই ধরনের জুটি",
            en: "Formation: verb + particle — two kinds of pairs",
            hi: "गठन: verb + particle — दो तरह की जोड़ियाँ",
          },
          body: {
            bn: "গঠন সহজ: verb + particle। particle দুই রকম — adverb-particle (up, off, on, out, back) আর preposition (for, after, at, into)। পার্থক্যটা একটা জায়গায় কাজ করে: বস্তু (object) কোথায় বসবে। adverb-particle-ওয়ালা জুটিতে বস্তু particle-এর আগে-পরে দুই জায়গায়ই বসতে পারে: turn on the light = turn the light on। preposition-ওয়ালা জুটিতে বস্তু preposition-এর পরেই বসতে হয়: look for my keys — কখনো 'look my keys for' নয়।\n\nআরেকটা মৌলিক ব্যাপার: কিছু phrasal verb-এর বস্তুই থাকে না — get up (উঠা), wake up (জাগা), go out (বাইরে যাওয়া), come back (ফেরা) — এরা একা দাঁড়ায়। আর কারো বস্তু লাগে — turn on something, look for something, look after someone। প্রথমে প্রতিটা জুটিকে একটা বাক্যে মুখস্থ করুন — 'I get up at seven', 'She looks after her grandmother' — তাহলে নিয়মগুলো নিজেই চোখে পড়বে।",
            en: "The formation is simple: verb + particle. The particle is of two kinds — an adverb particle (up, off, on, out, back) and a preposition (for, after, at, into). The difference matters in exactly one place: where the object sits. With an adverb particle the object can go before or after it: turn on the light = turn the light on. With a preposition the object must follow it: look for my keys — never 'look my keys for'.\n\nOne more basic fact: some phrasal verbs take no object at all — get up, wake up, go out, come back — they stand alone. Others need one: turn on something, look for something, look after someone. Memorise each pair inside one sentence — 'I get up at seven', 'She looks after her grandmother' — and the rules will reveal themselves.",
            hi: "गठन सरल: verb + particle। particle दो क़िस्म के — adverb particle (up, off, on, out, back) और preposition (for, after, at)। फ़र्क़ सिर्फ़ एक जगह दिखता है — object की सीट। adverb particle के साथ object आगे-पीछे दोनों जगह बैठ सकता है: turn on the light = turn the light on। preposition के साथ उसके बाद ही: look for my keys — 'look my keys for' कभी नहीं।\n\nएक और बुनियादी बात: कुछ phrasal verbs का object ही नहीं होता — get up, wake up, go out, come back। कुछ को चाहिए — turn on something, look after someone। हर जोड़ी एक वाक्य में याद करें, नियम ख़ुद दिखेंगे।",
          },
          examples: [
            {
              wrong: "She looks her grandmother after.",
              right: "She looks after her grandmother.",
              note: {
                bn: "preposition-জুটিতে বস্তু preposition-এর পরেই বসে — after-এর আগে নয়।",
                en: "In a preposition pair the object follows the preposition — it cannot jump before 'after'.",
                hi: "preposition-जोड़ी में object preposition के बाद बैठता है — 'after' से पहले नहीं।",
              },
            },
            {
              wrong: "Turn off it, please.",
              right: "Turn it off, please.",
              note: {
                bn: "সংক্ষিপ্ত pronoun (it, them) separable জুটিতে মাঝখানে বসে — Turn it off; 'Turn off it' নয়।",
                en: "A short pronoun (it, them) sits in the middle of a separable pair — Turn it off, never 'Turn off it'.",
                hi: "छोटा pronoun (it, them) separable जोड़ी में बीच में बैठता है — Turn it off, 'Turn off it' नहीं।",
              },
            },
            {
              wrong: "I get up the bed at 7.",
              right: "I get up at 7.",
              note: {
                bn: "get up-এর বস্তু নেই — 'বিছানা থেকে উঠা' পুরো ভাবটাই get up এক শব্দে নেয় নেয়।",
                en: "get up takes no object — the whole idea 'leave the bed' is already inside it.",
                hi: "get up का object नहीं होता — 'बिस्तर छोड़ना' पूरा भाव इसी शब्द में है।",
              },
            },
            {
              wrong: "He is looking his keys.",
              right: "He is looking for his keys.",
              note: {
                bn: "for ছাড়া look মানে শুধু 'দেখানো'; 'খোঁজা' বোঝাতে for লাগবেই — look for।",
                en: "Without for, look only means 'direct your eyes'; searching needs for — look for.",
                hi: "for के बिना look केवल 'देखना'; खोजने के लिए for ज़रूरी — look for।",
              },
            },
            {
              wrong: "Please put off your shoes at the door.",
              right: "Please take off your shoes at the door.",
              note: {
                bn: "'জুতা-পোশাক খোলা' = take off; put off মানে স্থগিত করা — অর্থ একদম আলাদা।",
                en: "'Removing shoes/clothes' = take off; put off means postpone — a totally different meaning.",
                hi: "'जूते/कपड़े उतारना' = take off; put off का अर्थ टालना — अर्थ बिल्कुल अलग।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "আভাস চেনার উপায়: ছোট শব্দগুলোর কম্পাস",
            en: "Pattern recognition: the little words as a compass",
            hi: "पैटर्न पहचान: छोटे शब्दों का कंपास",
          },
          body: {
            bn: "particle-গুলোর নিজস্ব আভা আছে — একদম নিখুঁত নয়, কিন্তু অনুমানে সাহায্য করে। up প্রায়ই বোঝায় উঠা/জাগা/বাড়ানো/শেষ করা: wake up, get up, eat up (সব শেষ করে খাওয়া), speak up (জোরে বলা)। off বোঝায় বিচ্ছিন্ন/খোলা/চলে যাওয়া: turn off, take off, get off (বাস থেকে নামা)। on বোঝায় জোড়া/চালু: turn on, put on, try on (পরে দেখা)। out বোঝায় বাইরে/ধরা পড়া/শেষ: go out, find out, run out of।\n\nআরেকটা প্যাটার্ন: বাংলায় এক ক্রিয়া অনেক অর্থে চলে, তাই বাংলা থেকে বের হলে ভুল verb ধরা পড়ে। 'খোঁজা' থেকে সাধারণত find মনে আসে, কিন্তু find মানে 'খুঁজে পাওয়া' (ফলাফল), চলমান খোঁজা = look for। 'দেওয়া' থেকে give আসে, কিন্তু পরীক্ষা দেওয়া = take an exam। তাই প্রতিটা phrasal verb-কে অনুবাদ নয়, একটা গোটা শব্দের মতো শিখুন — কার্ডে লিখুন: give up = হাল ছাড়া।",
            en: "Each particle carries its own hint — not perfect, but useful for guessing. up often signals rising, waking, increasing or finishing: wake up, get up, eat up (finish eating), speak up (speak louder). off signals separation or leaving: turn off, take off, get off (leave the bus). on signals connecting or starting: turn on, put on, try on (test by wearing). out signals exiting, discovering or running empty: go out, find out, run out of.\n\nAnother pattern: one Bengali verb covers many meanings, so coming from Bengali picks the wrong verb. 'খোঁজা' suggests find, but find is the RESULT (খুঁজে পাওয়া) while the ongoing search is look for. 'দেওয়া' suggests give, but an exam is 'taken' — take an exam. So learn each phrasal verb not as a translation but as a whole word — write it on a card: give up = stop trying.",
            hi: "हर particle का अपना संकेत है — पूर्ण नहीं, पर अनुमान में मदद करता है। up = ऊपर/जागना/बढ़ाना/ख़त्म (wake up, get up, eat up, speak up)। off = अलग/खोलना/निकलना (turn off, take off, get off)। on = जोड़ना/चालू (turn on, put on, try on)। out = बाहर/खोज निकालना/ख़त्म (go out, find out, run out of)।\n\nएक और पैटर्न: बांग्ला की एक क्रिया कई अर्थ रखती है, इसलिए अनुवाद से ग़लत verb चुन लिया जाता है। 'खोजना' से find सोचते हैं, पर find = फल (मिल जाना), चलती-फिरती खोज = look for। 'देना' से give, पर परीक्षा = take an exam। इसलिए हर phrasal verb को अनुवाद नहीं, पूरे शब्द की तरह सीखें — कार्ड पर लिखें: give up = हार मानना।",
          },
          examples: [
            {
              wrong: "I found my keys for two hours, but nothing.",
              right: "I looked for my keys for two hours, but found nothing.",
              note: {
                bn: "চলমান খোঁজা = look for, ফলাফল = find — এক বাক্যে দুটোই ব্যবহার করা যায়।",
                en: "Ongoing search = look for, result = find — one sentence can use both.",
                hi: "चलती खोज = look for, परिणाम = find — एक वाक्य में दोनों चलते हैं।",
              },
            },
            {
              wrong: "He gave the exam last week.",
              right: "He took the exam last week.",
              note: {
                bn: "particle-জাদুর আগে verb-বাছাই: 'পরীক্ষা দেওয়া' ইংরেজিতে take an exam — give নয়।",
                en: "Before particle-magic, choose the verb right: an exam is 'taken', never 'given'.",
                hi: "particle-जादू से पहले verb सही चुनें: परीक्षा 'take' होती है, 'give' नहीं।",
              },
            },
            {
              wrong: "Please take off the fan, it's cold.",
              right: "Please turn off the fan, it's cold.",
              note: {
                bn: "off সবখানে এক নয় — যন্ত্র বন্ধ = turn off, পোশাক খোলা = take off; অর্থ particle-সহ জুটিতে নির্ধারিত।",
                en: "off is not one meaning everywhere — devices switch off = turn off, clothes come off = take off; the pair fixes the meaning.",
                hi: "off हर जगह एक अर्थ नहीं — मशीन बंद = turn off, कपड़े उतारना = take off; जोड़ी ही अर्थ तय करती है।",
              },
            },
            {
              wrong: "Can I try this shoes?",
              right: "Can I try on these shoes?",
              note: {
                bn: "পরে দেখা/মাপা = try on — on-এর আভা: জোড়া যোগ করে দেখা।",
                en: "Testing by wearing = try on — the hint of on: connect it to your body to check.",
                hi: "पहनकर देखना = try on — on का संकेत: जोड़कर देखना।",
              },
            },
            {
              wrong: "Please speak loud, I can't hear.",
              right: "Please speak up, I can't hear.",
              note: {
                bn: "'জোরে বলো' কথ্য ইংরেজিতে speak up — up-এর আভা: আওয়াজ বাড়ানো।",
                en: "'Speak louder' in spoken English is speak up — up hints at raising the volume.",
                hi: "'ज़ोर से बोलो' बोलचाल में speak up — up का संकेत: आवाज़ बढ़ाना।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "রুটিনের ৮ প্রয়োজনীয় phrasal verb",
            en: "Eight essential routine phrasal verbs",
            hi: "रूटीन के ८ ज़रूरी phrasal verbs",
          },
          body: {
            bn: "এই আটটা প্রতিদিন কম-বেশি সবাই ব্যবহার করে — এগুলো আগে হাতে নিন: wake up (ঘুম ভাঙা — চোখ খোলা), get up (বিছানা থেকে উঠা), put on (পোশাক পরা), take off (পোশাক-জুতা খোলা), turn on (চালু করা — লাইট, ফ্যান, টিভি), turn off (বন্ধ করা), come back (ফেরা), go out (বাইরে যাওয়া)।\n\nখেয়াল করুন wake up আর get up এক নয়: ঘুম ভেঙেছে কিন্তু এখনো বিছানায় লুটিয়ে আছেন? আপনি woke up, কিন্তু এখনো get up করেননি — 'I woke up at six but got up at seven'। আবার put on এক মুহূর্তের কাজ, wear অবস্থা: 'She put on her scarf and wore it all day'। প্রতিটা জুটির সাথে বাংলা মান লিখে রাখুন, প্রতিদিনের নিজের রুটিন এই আটটা দিয়ে বলার চেষ্টা করুন।",
            en: "Start with these eight — almost everyone uses them daily: wake up (stop sleeping), get up (leave the bed), put on (dress yourself), take off (remove clothes/shoes), turn on (start a device), turn off (stop a device), come back (return), go out (leave home for an activity).\n\nNote that wake up and get up are not the same: eyes open but still lying down? You woke up, but you have not got up yet — 'I woke up at six but got up at seven.' Similarly put on is a moment of action while wear is a state: 'She put on her scarf and wore it all day.' Write the Bengali meaning beside each pair and try narrating your own day with these eight.",
            hi: "इन आठ से शुरू करें — लगभग सब रोज़ इस्तेमाल करते हैं: wake up (नींद टूटना), get up (बिस्तर से उठना), put on (कपड़े पहनना), take off (उतारना), turn on (चालू करना), turn off (बंद करना), come back (लौटना), go out (बाहर जाना)।\n\nwake up और get up एक नहीं: आँख खुली पर अब भी लेटे हैं? आप woke up, पर अभी get up नहीं किया — 'I woke up at six but got up at seven'। put on क्षणभर का काम, wear अवस्था: 'She put on her scarf and wore it all day'। हर जोड़ी के साथ बांग्ला अर्थ लिखें और अपने दिन की कहानी इन आठ से बोलें।",
          },
          examples: [
            {
              wrong: "I wake up at 7 and leave the bed at 7:30.",
              right: "I wake up at 7 and get up at 7:30.",
              note: {
                bn: "বিছানা ছাড়া = get up — 'leave the bed' বলার দরকার নেই, এক শব্দেই চলে।",
                en: "Leaving the bed = get up — no need for 'leave the bed', one word does it.",
                hi: "बिस्तर छोड़ना = get up — 'leave the bed' कहने की ज़रूरत नहीं।",
              },
            },
            {
              wrong: "She put on her shoes all day.",
              right: "She wore her shoes all day.",
              note: {
                bn: "অবস্থা বোঝাতে wear, মুহূর্তের অ্যাকশনে put on — সারাদিন পরে থাকা = wore।",
                en: "A state takes wear, a moment's action takes put on — having them on all day = wore.",
                hi: "अवस्था के लिए wear, क्षण-क्रिया के लिए put on — सारा दिन पहने रहना = wore।",
              },
            },
            {
              wrong: "Please turn off the TV — I want to watch!",
              right: "Please turn on the TV — I want to watch!",
              note: {
                bn: "চালু করা = turn on, বন্ধ করা = turn off — যে অর্থ চাইছেন সেটা particle-ই ঠিক করে।",
                en: "Start = turn on, stop = turn off — the particle decides which one you mean.",
                hi: "चालू = turn on, बंद = turn off — आपका अर्थ particle तय करता है।",
              },
            },
            {
              wrong: "When will you return back home?",
              right: "When will you come back home?",
              note: {
                bn: "'ফেরা' কথ্য ভাষায় come back; আর return-এ back লাগেই না — দুই ভুল একসাথে এড়িয়ে যান।",
                en: "'Returning' in speech is come back; and return needs no back at all — dodge both errors at once.",
                hi: "'लौटना' बोलचाल में come back; और return के साथ back नहीं आता — दोनों ग़लती एक साथ बचें।",
              },
            },
            {
              wrong: "We go out at dinner every Friday.",
              right: "We go out for dinner every Friday.",
              note: {
                bn: "go out-এর পরে উদ্দেশ্য বোঝাতে for — go out for dinner/lunch/a walk।",
                en: "After go out, the purpose takes for — go out for dinner / lunch / a walk.",
                hi: "go out के बाद उद्देश्य के लिए for — go out for dinner / lunch / a walk।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "এক ক্রিয়া, অনেক অর্থ: look-পরিবার ও give-পরিবার",
            en: "One verb, many meanings: the look family and the give family",
            hi: "एक क्रिया, कई अर्थ: look-परिवार और give-परिवार",
          },
          body: {
            bn: "একই verb-এর সাথে ভিন্ন particle জুড়লে অর্থ মার খায় — এটাই phrasal verb-এর মজা আর বিপদ। look-পরিবার দেখুন: look for = খোঁজা (I am looking for my umbrella), look after = দেখভাল করা (She looks after her grandmother), look at = দিকে তাকানো (Look at this photo), look out = সাবধান (Look out! A car!)।\n\ngive-পরিবার: give up = হাল ছাড়া (Never give up), give back = ফেরত দেওয়া (Give me my pen back), give away = বিলিয়ে দেওয়া। আর put-পরিবার: put on = পরা, put off = স্থগিত করা (Don't put off the meeting), put down = নামিয়ে রাখা। কায়দা এক: প্রতিটা জুটির নিজের অর্থ আছে, particle-কে আলাদা করে ভাববেন না। নিজের জীবনের বাক্য বানিয়ে অনুশীলন করুন — 'আমি আমার ছোট বোনকে দেখভাল করি' = I look after my little sister।",
            en: "Change the particle and the meaning shifts — that is both the fun and the danger of phrasal verbs. The look family: look for = search (I am looking for my umbrella), look after = take care of (She looks after her grandmother), look at = direct your eyes (Look at this photo), look out = beware (Look out! A car!).\n\nThe give family: give up = stop trying (Never give up), give back = return (Give me my pen back), give away = donate. And the put family: put on = dress, put off = postpone (Don't put off the meeting), put down = place down. The rule is one: every pair owns its own meaning — never split the pair mentally. Practise with sentences from your own life: 'আমি আমার ছোট বোনকে দেখভাল করি' = I look after my little sister.",
            hi: "particle बदलो, अर्थ बदलता है — phrasal verb का मज़ा और ख़तरा दोनों। look-परिवार: look for = खोजना (I am looking for my umbrella), look after = देखभाल करना (She looks after her grandmother), look at = देखना (Look at this photo), look out = सावधान (Look out! A car!)।\n\ngive-परिवार: give up = हार मानना (Never give up), give back = वापस देना (Give me my pen back), give away = बाँटना। put-परिवार: put on = पहनना, put off = टालना (Don't put off the meeting), put down = नीचे रखना। नियम एक: हर जोड़ी का अपना अर्थ — जोड़ी मत तोड़ें। अपने जीवन के वाक्यों से अभ्यास करें: 'ছोटी बहन का ध्यान रखना' = I look after my little sister।",
          },
          examples: [
            {
              wrong: "I am looking at my pen everywhere.",
              right: "I am looking for my pen everywhere.",
              note: {
                bn: "খোঁজা = look for; look at মানে শুধু তাকানো — 'everywhere' সহ আসলে অর্থটা ফাঁস করে দেয়।",
                en: "Searching = look for; look at only means gazing — 'everywhere' gives the real meaning away.",
                hi: "खोजना = look for; look at केवल देखना — 'everywhere' असली अर्थ बता देता है।",
              },
            },
            {
              wrong: "She looks for her grandmother.",
              right: "She looks after her grandmother.",
              note: {
                bn: "দেখভাল করা = look after; look for লিখলে মানে হয় 'দাদি হারিয়ে গেছে, খুঁজছে'!",
                en: "Caring for = look after; look for would mean grandma is lost and being searched for!",
                hi: "देखभाल = look after; look for लिखा तो मतलब 'दादी खो गईं, ढूँढ रही है'!",
              },
            },
            {
              wrong: "Never give back hope.",
              right: "Never give up hope.",
              note: {
                bn: "হাল ছাড়া = give up; give back মানে ফেরত দেওয়া — আশা ফেরত দেওয়ার প্রসঙ্গ নেই এখানে।",
                en: "Quitting = give up; give back means return — nobody returns hope here.",
                hi: "हार मानना = give up; give back = वापस देना — यहाँ आशा वापस देने का प्रसंग नहीं।",
              },
            },
            {
              wrong: "We put off our coats inside the room.",
              right: "We put on our coats inside the room.",
              note: {
                bn: "ঠান্ডা ঘরে ঢুকে কোট 'পরা' = put on; put off মানে স্থগিত — অর্থ উল্টে যায়।",
                en: "Entering a cold room you put on your coat; put off means postpone — the meaning flips.",
                hi: "ठंडे कमरे में कोट 'पहनना' = put on; put off = टालना — अर्थ पलट जाता है।",
              },
            },
            {
              wrong: "Look out my new phone!",
              right: "Look at my new phone!",
              note: {
                bn: "দেখাতে চাইলে look at; look out বললে শোনার মানুষটা ভয়ে লাফ দেবে — অর্থ 'সাবধান!'",
                en: "To show something say look at; look out will make your listener jump — it means 'danger!'",
                hi: "दिखाने के लिए look at; look out बोला तो सुनने वाला छलाँग मारेगा — अर्थ 'सावधान!'",
              },
            },
          ],
        },
        {
          heading: {
            bn: "Separable vs inseparable: pronoun-এর আসন",
            en: "Separable vs inseparable: where the pronoun sits",
            hi: "Separable बनाम inseparable: pronoun की सीट",
          },
          body: {
            bn: "দুই শ্রেণি মনে রাখার সহজ নিয়ম: adverb-particle জুড়লে (turn on/off, put on, take off, give up) জুটিটা separable — বস্তু মাঝে ঢুকতে পারে: turn the light on = turn on the light। কিন্তু বস্তু যদি pronoun হয় (it, them, him, me), তাহলে pronoun বাধ্যতামূলকভাবে মাঝখানে বসবে: Turn it on — 'Turn on it' বলা যায় না। Take them off, Put it on, Give it up।\n\npreposition জুড়লে (look for, look after, listen to, wait for) জুটি inseparable — বস্তু প্রতিবার পরে: Look for it ('Look it for' নয়), Wait for me, Listen to her। সহজ কৌশল: নিশ্চিত না হলে pronoun-কে preposition-ওয়ালা জুটিতে সবসময় পরে রাখুন — এটাই নিরাপদ রাস্তা।",
            en: "One easy rule covers the two classes: with an adverb particle (turn on/off, put on, take off, give up) the pair is separable — the object may slip into the middle: turn the light on = turn on the light. But if the object is a pronoun (it, them, him, me), the pronoun must sit in the middle: Turn it on — never 'Turn on it'. Take them off, Put it on, Give it up.\n\nWith a preposition (look for, look after, listen to, wait for) the pair is inseparable — the object always follows: Look for it — never 'Look it for' — Wait for me, Listen to her. Quick rule of thumb: when unsure, pronouns always go at the end after preposition pairs — that is the safe route.",
            hi: "दो वर्गों का आसान नियम: adverb particle वाली जोड़ी (turn on/off, put on, take off, give up) separable है — object बीच में जा सकता है: turn the light on = turn on the light। पर object pronoun हो (it, them, him) तो pronoun बीच में ही बैठेगा: Turn it on — 'Turn on it' नहीं। Take them off, Put it on, Give it up।\n\npreposition वाली जोड़ी (look for, look after, listen to, wait for) inseparable — object हमेशा बाद में: Look for it, Wait for me, Listen to her। संदेह हो तो pronoun को preposition के बाद रखें — सुरक्षित रास्ता।",
          },
          examples: [
            {
              wrong: "Turn on it, please.",
              right: "Turn it on, please.",
              note: {
                bn: "separable জুটিতে pronoun মাঝে বাধ্যতামূলক — verb + pronoun + particle।",
                en: "In a separable pair the pronoun is forced into the middle — verb + pronoun + particle.",
                hi: "separable जोड़ी में pronoun बीच में अनिवार्य — verb + pronoun + particle।",
              },
            },
            {
              wrong: "I will look it for.",
              right: "I will look for it.",
              note: {
                bn: "look for inseparable — pronoun for-এর পরেই বসবে, মাঝে ঢুকবে না।",
                en: "look for is inseparable — the pronoun stays after for and never slips inside.",
                hi: "look for inseparable है — pronoun for के बाद रहेगा, बीच में नहीं जाएगा।",
              },
            },
            {
              wrong: "Take off them before you enter.",
              right: "Take them off before you enter.",
              note: {
                bn: "them ছোট pronoun — take off-এর মাঝে বসবে; 'Take off them' ভুল।",
                en: "them is a short pronoun — it sits between take and off; 'Take off them' is wrong.",
                hi: "them छोटा pronoun — take और off के बीच बैठेगा; 'Take off them' ग़लत।",
              },
            },
            {
              wrong: "Give up it — it's too hard.",
              right: "Give it up — it's too hard.",
              note: {
                bn: "give up-ও separable — Give it up; কখনো 'Give up it' নয়।",
                en: "give up is separable too — Give it up, never 'Give up it'.",
                hi: "give up भी separable है — Give it up, कभी 'Give up it' नहीं।",
              },
            },
            {
              wrong: "Wait me here, I am coming.",
              right: "Wait for me here, I am coming.",
              note: {
                bn: "'অপেক্ষা করা' = wait for someone — for ছাড়া wait অসম্পূর্ণ শোনায়।",
                en: "'To wait' = wait for someone — without for, wait sounds incomplete.",
                hi: "'इंतज़ार करना' = wait for someone — for के बिना wait अधूरा लगता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "বাঙালি শিক্ষার্থীদের কমন ভুল: শব্দে-শব্দে অনুবাদের ধস",
            en: "Common mistakes by Bengali speakers: the word-by-word landslide",
            hi: "बांग्लाभाषी शिक्षार्थियों की आम गलतियाँ: शब्द-दर-शब्द अनुवाद का भूस्खलन",
          },
          body: {
            bn: "বাংলা থেকে শব্দে-শব্দে অনুবাদ করলে phrasal verb-পরিবারে এই ভুলগুলো হয়: 'Please on the fan' — বাংলায় 'অন করা' এক ক্রিয়া, ইংরেজিতে on একা ক্রিয়া নয়; 'I gave the exam' — 'পরীক্ষা দেওয়া'-র দেওয়া থেকে give, কিন্তু ইংরেজিতে take an exam; 'I am finding my phone' — find মানে খুঁজে পাওয়া (ফল), খোঁজা = look for; 'Please off the light' — বন্ধ করা = turn off।\n\nআরেকটা প্যাটার্ন: বাংলায় 'ঘুম ভাঙা' আর 'বিছানা ছাড়া' আলাদা কথা, কিন্তু নতুনরা sleep/get গুলিয়ে ফেলে — 'I sleep at 11' বললে মানে হয় ১১টায় ঘুমাচ্ছি, ঘুম ভাঙছি না; সঠিক: I go to bed at 11 / I wake up at 6। এবং pronoun-জাত ভুল: 'Turn on it' নয় — Turn it on। সমাধান একটাই: বাংলা বাক্য ভাঙতে না গিয়ে পুরো ভাবটাকে ইংরেজি phrasal verb হিসেবে চিনে নিন।",
            en: "Word-by-word translation from Bengali produces these classic errors in the phrasal-verb family: 'Please on the fan' — in Bangla 'অন করা' works as one verb, but in English on is never a verb alone; 'I gave the exam' — from 'পরীক্ষা দেওয়া', but English takes an exam; 'I am finding my phone' — find is the result, the search is look for; 'Please off the light' — switching off is turn off.\n\nAnother pattern: Bengali separates 'ঘুম ভাঙা' and 'বিছানা ছাড়া', but beginners mix sleep and get — 'I sleep at 11' means you are sleeping at 11, not waking; say I go to bed at 11 or I wake up at 6. And the pronoun trap: not 'Turn on it' but Turn it on. The only fix: stop breaking the Bengali sentence apart — recognise the whole idea as one English phrasal verb.",
            hi: "बांग्ला से शब्द-दर-शब्द अनुवाद से ये क्लासिक ग़लतियाँ होती हैं: 'Please on the fan' — बांग्ला 'ऑन करना' एक क्रिया, अंग्रेज़ी में on अकेला क्रिया नहीं; 'I gave the exam' — अंग्रेज़ी में take an exam; 'I am finding my phone' — find = फल, खोज = look for; 'Please off the light' — बंद करना = turn off।\n\nऔर एक पैटर्न: 'I sleep at 11' का मतलब बनता है ११ बजे सो रहा हूँ, जाग नहीं रहा — कहें I go to bed at 11 / I wake up at 6। pronoun-जाल: 'Turn on it' नहीं — Turn it on। इलाज एक: बांग्ला वाक्य तोड़ें नहीं, पूरे भाव को एक phrasal verb की तरह पहचानें।",
          },
          examples: [
            {
              wrong: "Please off the AC.",
              right: "Please turn off the AC.",
              note: {
                bn: "বন্ধ করা = turn off — off একা দাঁড়াতে পারে না, verb ছাড়া শুধু particle বলা যায় না।",
                en: "Switching off = turn off — a particle cannot stand alone without its verb.",
                hi: "बंद करना = turn off — particle अकेला खड़ा नहीं हो सकता, verb चाहिए।",
              },
            },
            {
              wrong: "I am finding my slippers.",
              right: "I am looking for my slippers.",
              note: {
                bn: "চলমান খোঁজা = look for; find শুধু ফলাফল — 'খুঁজে পেয়েছি' জাতীয় বাক্যে।",
                en: "An ongoing search = look for; find is only the result — 'I found them'.",
                hi: "चलती खोज = look for; find केवल परिणाम — 'मिल गया' वाले वाक्य में।",
              },
            },
            {
              wrong: "I gave the IELTS exam last month.",
              right: "I took the IELTS exam last month.",
              note: {
                bn: "পরীক্ষা 'দেওয়া' ইংরেজিতে take — বাংলার 'দেওয়া' এখানে give হয় না।",
                en: "An exam is 'taken' in English — the Bengali 'দেওয়া' does not become give here.",
                hi: "परीक्षा अंग्रेज़ी में 'take' होती है — बांग्ला 'देना' यहाँ give नहीं बनता।",
              },
            },
            {
              wrong: "I sleep up at 6 every morning.",
              right: "I wake up at 6 every morning.",
              note: {
                bn: "ঘুম ভাঙা = wake up — sleep up নামে কোনো phrasal verb নেই।",
                en: "Stop sleeping = wake up — there is no phrasal verb called 'sleep up'.",
                hi: "नींद टूटना = wake up — 'sleep up' नाम का कोई phrasal verb नहीं।",
              },
            },
            {
              wrong: "He turned on it and started cooking.",
              right: "He turned it on and started cooking.",
              note: {
                bn: "pronoun separable জুটিতে মাঝে — turned it on; শব্দে-শব্দে অনুবাদে এই আসন-ভুল হয়।",
                en: "A pronoun sits in the middle of a separable pair — turned it on; word-by-word translation causes exactly this seat error.",
                hi: "pronoun separable जोड़ी में बीच में — turned it on; शब्द-दर-शब्द अनुवाद से यही सीट-ग़लती होती है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "ছোট গল্পে দেখা যাক: শনিবারের সকাল",
            en: "A mini story: Nabil's Saturday morning",
            hi: "छोटी कहानी: नबील की शनिवार सुबह",
          },
          body: {
            bn: "শনিবার সকালে নবীলের ঘুম ভাঙল সাতটায় — He woke up at seven, but he didn't get up at once। একটু লুটিয়ে থেকে উঠে স্কুলের ড্রেস পরল — He put on his school uniform। নাস্তার আগে চায়ের কেটলি চালু করল — He turned on the kettle। তারপর খেয়াল করল, চাবি নেই! He looked for his keys everywhere — সোফার নিচে, ব্যাগে, টেবিলে। হাল ছাড়ার প্রায় সময় — He almost gave up — তখনই মা হেসে বলল, 'Check your pocket!' পকেটে চাবি পেয়ে নবীল জুতা পরে বাইরে চলল — He put on his shoes and went out। বিকেলে ফিরে এলো — He came back at five।\n\nএক নজরে: (১) phrasal verb = verb + particle; অর্থ অংশ থেকে অনুমান নয় — জুটিটা মুখস্থ। (২) রুটিনের আটটা: wake up, get up, put on, take off, turn on, turn off, come back, go out। (৩) wake up = ঘুম ভাঙা, get up = বিছানা ছাড়া — এক নয়। (৪) pronoun separable জুটিতে মাঝে: Turn it on; preposition-জুটিতে পরে: look for it। (৫) শব্দে-শব্দে অনুবাদ নয় — 'পরীক্ষা দেওয়া' = take an exam, 'খোঁজা' = look for।",
            en: "On Saturday morning Nabil woke up at seven — He woke up at seven, but he didn't get up at once. After a little more lying around he got up and dressed for school — He put on his school uniform. Before breakfast he started the kettle — He turned on the kettle. Then he noticed: no keys! He looked for his keys everywhere — under the sofa, in the bag, on the table. He almost gave up when his mother smiled and said, 'Check your pocket!' Finding the keys, he put on his shoes and went out. He came back at five.\n\nIn a nutshell: (1) a phrasal verb = verb + particle; the meaning is not guessed from the parts — memorise the pair. (2) The routine eight: wake up, get up, put on, take off, turn on, turn off, come back, go out. (3) wake up = open your eyes, get up = leave the bed — not the same. (4) Pronouns sit in the middle of separable pairs: Turn it on; after prepositions: look for it. (5) No word-by-word translation — 'পরীক্ষা দেওয়া' = take an exam, 'খোঁজা' = look for.",
            hi: "शनिवार सुबह नबील की नींद सात बजे खुली — He woke up at seven, but he didn't get up at once। थोड़ा लेटने के बाद उठा और स्कूल की वर्दी पहनी — He put on his school uniform। नाश्ते से पहले केतली चालू की — He turned on the kettle। फिर ध्यान आया — चाबियाँ नहीं! He looked for his keys everywhere — सोफ़े के नीचे, बैग में, मेज़ पर। हार मानने ही वाला था — He almost gave up — तभी माँ हँसकर बोली, 'Check your pocket!' चाबी मिलते ही जूते पहनकर बाहर निकला — He put on his shoes and went out। पाँच बजे लौट आया — He came back at five।\n\nएक नज़र में: (1) phrasal verb = verb + particle; अर्थ हिस्सों से अनुमान नहीं — जोड़ी याद करें। (2) रूटीन के आठ: wake up, get up, put on, take off, turn on, turn off, come back, go out। (3) wake up = नींद टूटना, get up = बिस्तर छोड़ना — एक नहीं। (4) pronoun separable जोड़ी में बीच में: Turn it on; preposition के बाद: look for it। (5) शब्द-दर-शब्द अनुवाद नहीं — परीक्षा = take an exam, खोज = look for।",
          },
          examples: [
            {
              wrong: "He woke up and immediately left the bed.",
              right: "He woke up and immediately got up.",
              note: {
                bn: "বিছানা ছাড়া = get up — 'left the bed' নয়, কথ্য ইংরেজির স্বাভাবিক জুটি get up।",
                en: "Leaving the bed = get up — not 'left the bed'; get up is the natural spoken pair.",
                hi: "बिस्तर छोड़ना = get up — 'left the bed' नहीं; बोलचाल की स्वाभाविक जोड़ी get up।",
              },
            },
            {
              wrong: "He put his uniform and went to school.",
              right: "He put on his uniform and went to school.",
              note: {
                bn: "'পরা' = put on — on ছাড়া put মানে রাখা, অর্থ অসম্পূর্ণ।",
                en: "'To dress' = put on — without on, put means place, and the meaning stays unfinished.",
                hi: "'पहनना' = put on — on के बिना put का अर्थ रखना, अर्थ अधूरा।",
              },
            },
            {
              wrong: "He looked his keys everywhere but gave up them.",
              right: "He looked for his keys everywhere but gave them up.",
              note: {
                bn: "দুই নিয়ম একসাথে: খোঁজা = look for (for বাধ্যতামূলক), আর pronoun মাঝে — gave them up।",
                en: "Two rules at once: searching = look for (for is compulsory), and the pronoun sits in the middle — gave them up.",
                hi: "दो नियम एक साथ: खोज = look for (for अनिवार्य), और pronoun बीच में — gave them up।",
              },
            },
            {
              wrong: "He turned off the kettle to boil water.",
              right: "He turned on the kettle to boil water.",
              note: {
                bn: "পানি ফুটাতে কেটলি 'চালু' — on; off দিলে অর্থ উল্টে যায়।",
                en: "To boil water the kettle is switched ON — off flips the meaning.",
                hi: "पानी उबालने के लिए केतली 'चालू' — on; off डाला तो अर्थ पलट जाएगा।",
              },
            },
            {
              wrong: "He came back to home at five.",
              right: "He came back home at five.",
              note: {
                bn: "home-এর আগে to বসে না — come back home; 'ঘরে ফেরা' এক শব্দের জুটিতে আঁটে।",
                en: "No to before home — come back home; 'returning home' fits inside one phrasal pair.",
                hi: "home से पहले to नहीं — come back home; 'घर लौटना' एक जोड़ी में आ जाता है।",
              },
            },
          ],
        },
      ],
      tips: [
        { bn: "phrasal verb মুখস্থ করুন এক গোটা শব্দের মতো — give up, look for — অংশ ধরে ভাববেন না।", en: "Memorise a phrasal verb as one whole word — give up, look for — never think in parts.", hi: "phrasal verb को पूरे शब्द की तरह याद करें — give up, look for — हिस्सों में न सोचें।" },
        { bn: "নতুন জুটি শিখলে সাথে একটা নিজের বাক্য লিখুন: 'I look after my sister' — নিজের জীবনের বাক্য বেশি দিন টেকে।", en: "When you learn a new pair, write one sentence of your own with it: 'I look after my sister' — personal sentences last longest.", hi: "नई जोड़ी सीखें तो एक अपना वाक्य लिखें: 'I look after my sister' — निजी वाक्य सबसे देर तक टिकते हैं।" },
        { bn: "particle-এর আভা মনে রাখুন: on = চালু, off = বন্ধ/খোলা, up = উঠা/শেষ, out = বাইরে/ধরা, back = ফেরা।", en: "Keep the particle hints: on = start/connect, off = stop/remove, up = rise/finish, out = exit/discover, back = return.", hi: "particle संकेत याद रखें: on = चालू, off = बंद/खोलना, up = उठना/ख़त्म, out = बाहर/पता लगना, back = लौटना।" },
        { bn: "pronoun থাকলে separable জুটিতে মাঝে বসান: Turn it on, Take them off; preposition-জুটিতে পরে: look for it।", en: "With a pronoun, put it in the middle of separable pairs: Turn it on, Take them off; after prepositions: look for it.", hi: "pronoun हो तो separable जोड़ी में बीच में रखें: Turn it on; preposition के बाद: look for it।" },
        { bn: "look for (খোঁজা) আর find (খুঁজে পাওয়া) আলাদা — খোঁজা চলমান প্রক্রিয়া, find ফলাফল।", en: "look for (searching) and find (finding) are different — the search is a process, find is the result.", hi: "look for (खोजना) और find (मिलना) अलग — खोज प्रक्रिया है, find परिणाम।" },
        { bn: "'পরীক্ষা দেওয়া' বললে হাত give-এর দিকে যায় — থামুন, take an exam লিখুন।", en: "When 'পরীক্ষা দেওয়া' pushes your hand toward give — stop, write take an exam.", hi: "'परीक्षा देना' हाथ को give की ओर खींचता है — रुकें, take an exam लिखें।" },
        { bn: "wake up আর get up আলাদা: ঘুম ভাঙা আর বিছানা ছাড়া — প্রতিদিন দুটো দিয়েই একটা করে বাক্য বলুন।", en: "wake up and get up differ: opening your eyes vs leaving the bed — use both in one sentence daily.", hi: "wake up और get up अलग: नींद टूटना और बिस्तर छोड़ना — रोज़ दोनों से एक-एक वाक्य बोलें।" },
        { bn: "কথ্য ইংরেজি খেয়াল করে শুনুন — প্রতি মিনিটে phrasal verb পড়বে; শোনা জুটি সহজে মনে থাকে।", en: "Listen to spoken English carefully — phrasal verbs fall on your ear every minute; heard pairs stick best.", hi: "बोलचाल की अंग्रेज़ी ध्यान से सुनें — हर मिनट phrasal verbs आएँगे; सुनी हुई जोड़ियाँ जल्दी याद रहती हैं।" },
        { bn: "একই verb-এর পরিবার একসাথে শিখুন: look for / look after / look at — পাশাপাশি থাকলে ফারাক স্পষ্ট হয়।", en: "Learn one verb's family together: look for / look after / look at — side by side, the differences become clear.", hi: "एक verb का पूरा परिवार साथ सीखें: look for / look after / look at — पास-पास होने से फ़र्क़ साफ़ होता है।" },
        { bn: "সকালে নিজের রুটিন পাঁচটা phrasal verb দিয়ে গুঙিয়ে বলুন — আয়নার সামনেও চলবে।", en: "Every morning murmur your routine using five phrasal verbs — in front of the mirror works too.", hi: "हर सुबह अपनी रूटीन पाँच phrasal verbs से धीरे-धीरे बोलें — आईने के सामने भी चलेगा।" },
      ],
      quiz: [
        {
          question: "Please ___ the light — it is getting dark.",
          options: ["turn on", "turn off", "put on", "take off"],
          answer: 0,
          explanation: { bn: "অন্ধকার হচ্ছে মানে লাইট 'চালু' চাই — turn on; off/put on/take off সব ভুল প্রসঙ্গে।", en: "It is getting dark, so the light must be switched ON — turn on; the others are the wrong context.", hi: "अँधेरा हो रहा है, लाइट 'चालू' चाहिए — turn on; बाकी सभी ग़लत संदर्भ।" },
        },
        {
          question: "My grandmother is old, so my mother ___ her every day.",
          options: ["looks for", "looks at", "looks after", "gives up"],
          answer: 2,
          explanation: { bn: "বয়স্ক মানুষের দেখভাল = look after; look for মানে খোঁজা, look at মানে তাকানো।", en: "Caring for an elderly person = look after; look for means searching, look at means gazing.", hi: "बुज़ुर्ग की देखभाल = look after; look for = खोजना, look at = देखना।" },
        },
        {
          question: "I cannot find my keys. I have been ___ them for an hour.",
          options: ["looking after", "looking for", "looking at", "looking up"],
          answer: 1,
          explanation: { bn: "চলমান খোঁজা = look for — 'an hour ধরে খুঁজছি' প্রসঙ্গেই এটা বসে।", en: "An ongoing search = look for — 'searching for an hour' is exactly this context.", hi: "चलती खोज = look for — 'एक घंटे से ढूँढ रहा हूँ' यही संदर्भ।" },
        },
        {
          question: "Which sentence is correct?",
          options: ["Turn on it, please.", "Please on the TV.", "Turn it on, please.", "Turn on them, please."],
          answer: 2,
          explanation: { bn: "separable জুটিতে pronoun মাঝে বসে — Turn it on; particle একা ক্রিয়া হয় না।", en: "In a separable pair the pronoun sits in the middle — Turn it on; a particle alone is never a verb.", hi: "separable जोड़ी में pronoun बीच में — Turn it on; particle अकेला क्रिया नहीं।" },
        },
        {
          question: "I woke up at six, but I ___ at seven.",
          options: ["got up", "put on", "gave up", "woke up"],
          answer: 0,
          explanation: { bn: "ঘুম ভাঙা (woke up) আর বিছানা ছাড়া (got up) আলাদা — এখানে দ্বিতীয়টা দরকার।", en: "Opening your eyes (woke up) and leaving the bed (got up) differ — the second one is needed here.", hi: "नींद टूटना (woke up) और बिस्तर छोड़ना (got up) अलग — यहाँ दूसरा चाहिए।" },
        },
        {
          question: "In Bangladesh, students ___ the HSC exam after class twelve.",
          options: ["give", "take", "make", "do"],
          answer: 1,
          explanation: { bn: "বাংলা 'পরীক্ষা দেওয়া' সত্ত্বেও ইংরেজিতে take an exam — give নয়।", en: "Despite Bengali 'পরীক্ষা দেওয়া', in English it is take an exam — never give.", hi: "बांग्ला 'परीक्षा देना' के बावजूद अंग्रेज़ी में take an exam — give नहीं।" },
        },
        {
          question: "Never ___ — try again tomorrow.",
          options: ["give back", "give away", "put off", "give up"],
          answer: 3,
          explanation: { bn: "'আবার চেষ্টা করো' বোঝাতে হাল ছাড়ার কথা — give up; give back = ফেরত দেওয়া।", en: "'Try again tomorrow' warns against quitting — give up; give back means return.", hi: "'कल फिर कोशिश करो' हार न मानने की बात — give up; give back = वापस देना।" },
        },
        {
          question: "We ___ sugar, so I went to the shop.",
          options: ["ran out of", "looked after", "turned on", "took off"],
          answer: 0,
          explanation: { bn: "'শেষ হয়ে গেছে' = run out of — চিনি ফুরাতেই দোকানে যাওয়া।", en: "'To be used up' = run out of — the sugar finished, hence the shop trip.", hi: "'ख़त्म हो जाना' = run out of — चीनी ख़त्म होने पर दुकान गया।" },
        },
        {
          question: "Your shoes are muddy — please ___ them ___ before you enter.",
          options: ["put / on", "take / off", "turn / on", "give / up"],
          answer: 1,
          explanation: { bn: "কাদা জুতা ঘরে ঢুকে 'খোলা' — take them off; pronoun মাঝে বসে মনে রাখুন।", en: "Muddy shoes come OFF before entering — take them off; note the pronoun in the middle.", hi: "कीचड़ वाले जूते अंदर आने से पहले 'उतारो' — take them off; pronoun बीच में।" },
        },
        {
          question: "Which sentence is correct?",
          options: ["I am finding my mobile.", "I am looking for my mobile.", "I am looking my mobile.", "I find my mobile now."],
          answer: 1,
          explanation: { bn: "চলমান খোঁজা = am looking for — find শুধু ফলাফলে, for বাধ্যতামূলক।", en: "The ongoing search = am looking for — find is only for results, and for is compulsory.", hi: "चलती खोज = am looking for — find केवल परिणाम में, for अनिवार्य।" },
        },
      ],
    },
  },
  /* ── 3. Since vs For ───────────────────────────────────────────────── */
  {
    topic: "Since vs For",
    level: "beginner",
    title: "Since vs For (Beginner)",
    unit: 0,
    data: {
      title: {
        bn: "Since নাকি For? — 'থেকে'-র দুই মুখ (বিগিনার)",
        en: "Since vs For (Beginner)",
        hi: "Since या For? — 'থেকে' के दो रूप (बिगिनर)",
      },
      intro: {
        bn: "বাংলার 'থেকে' দুই কাজ করে — শুরুর সময় বলে ('২০২০ থেকে এখানে আছি') আর সময়ের দৈর্ঘ্য বলে ('তিন বছর ধরে এখানে আছি'); কিন্তু ইংরেজিতে এই দুই কাজের জন্য দুটো আলাদা শব্দ — since (শুরুর বিন্দু) আর for (দৈর্ঘ্য)। এই পাঠ ধরে নিচ্ছে আপনি আগের পাঠে present perfect-এর সাথে পরিচয় পেয়েছেন (have/has + verb-এর past participle) — কারণ since/for বেশিরভাগ সময় এই tense-এর সাথেই বসে। শিখবেন: কোনটায় কোন শব্দ, পারফেক্ট tense-এর জুটি, since-এর পরে পূর্ণ বাক্য, আর বাঙালিদের 'I am here since morning' জাতীয় ভুল শুধরে নেওয়া।",
        en: "The Bengali word 'থেকে' does two jobs — it names the starting point ('আছি since 2020') and it measures a length ('আছি for three years'); English splits these two jobs into two words — since (the starting point) and for (the length). This lesson assumes you met the present perfect in an earlier lesson (have/has + past participle), because since/for mostly live in that tense. You will learn which word goes where, the perfect-tense pairing, full clauses after since, and how to fix the classic Bengali mistake 'I am here since morning'.",
        hi: "बांग्ला का 'थেके' दो काम करता है — शुरुआती समय बताना ('२०२० থেকे यहाँ हूँ') और समय की लंबाई ('तीन साल से यहाँ हूँ'); अंग्रेज़ी में इन दो कामों के लिए दो अलग शब्द हैं — since (शुरुआती बिंदु) और for (लंबाई)। यह पाठ मानता है कि आपने पिछले पाठ में present perfect (have/has + past participle) देखा है — क्योंकि since/for ज़्यादातर इसी tense में बैठते हैं। सीखेंगे: कहाँ कौन-सा शब्द, perfect-tense जोड़ी, since के बाद पूरा वाक्य, और 'I am here since morning' जैसी क्लासिक गलती ठीक करना।",
      },
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয়: since = শুরুর বিন্দু, for = দৈর্ঘ্য",
            en: "When to use them: since = starting point, for = duration",
            hi: "कब इस्तेमाल होता है: since = शुरुआती बिंदु, for = अवधि",
          },
          body: {
            bn: "since মানে 'কোন সময় থেকে শুরু হয়ে এখনো চলছে' — এটা একটা বিন্দু, একটা শুরুর ঠিকানা: since 2020, since Monday, since morning, since my childhood। বাক্যে অর্থ দাঁড়ায় 'তখন থেকে এখন পর্যন্ত': I have lived in Dhaka since 2020 — ২০২০-তে এসেছি, এখনো আছি।\n\nfor মানে 'কতদিন ধরে' — সময়ের রেলিং, দৈর্ঘ্য: for three years, for two hours, for a week, for a long time। এখানে শুরু কবে হয়েছে বলা হয় না, বলা হয় কতটা সময় গড়িয়েছে: I have lived in Dhaka for three years।\n\nদুটোই একই অবস্থার দুই দিক: '২০২০ থেকে' বললে since 2020, 'তিন বছর ধরে' বললে for three years। খেয়াল করুন দুটোই অতীতকে এখনের সাথে জোড়ে — তাই এদের প্রধান ঠিকানা পারফেক্ট tense।",
            en: "since means 'from that point in time up to now' — a point, a starting address: since 2020, since Monday, since morning, since my childhood. The sentence carries the sense 'from then till now': I have lived in Dhaka since 2020 — I came in 2020 and I am still here.\n\nfor measures the length — a ruler over time: for three years, for two hours, for a week, for a long time. Nobody says when it started, only how much time has passed: I have lived in Dhaka for three years.\n\nThe two are two faces of one situation: '২০২০ থেকে' becomes since 2020, 'তিন বছর ধরে' becomes for three years. Note that both join past to present — which is why their main home is the perfect tense.",
            hi: "since का अर्थ 'उस समय से अब तक' — एक बिंदु, शुरुआत का पता: since 2020, since Monday, since morning, since my childhood। वाक्य का भाव बनता है 'तब से अब तक': I have lived in Dhaka since 2020 — २०२० में आया, अब भी हूँ।\n\nfor समय की लंबाई मापता है — रूलर की तरह: for three years, for two hours, for a week, for a long time। यहाँ कब शुरू हुआ नहीं कहा जाता, बस कितना समय बीता: I have lived in Dhaka for three years।\n\nदोनों एक ही स्थिति के दो पहलू हैं: '२०२০ थেকे' = since 2020, 'तीन साल से' = for three years। दोनों अतीत को वर्तमान से जोड़ते हैं — इसलिए इनका मुख्य घर perfect tense है।",
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
                hi: "बांग्ला 'सकाल থেকে' from की याद दिलाता है, पर शुरुआती बिंदु के लिए since — from यहाँ नहीं आता।",
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
            bn: "গঠন: দুটো সূত্র আর একটা সহজ পরীক্ষা",
            en: "Formation: two formulas and one easy test",
            hi: "गठन: दो सूत्र और एक आसान परीक्षा",
          },
          body: {
            bn: "সূত্র দুটি: since + শুরুর বিন্দু — বিন্দু হতে পারে (ক) সাল: since 2015; (খ) দিন: since Monday, since 5th March; (গ) ঘড়ার সময়: since 9 o'clock; (ঘ) দিনের অংশ: since morning, since evening; (ঙ) ঘটনা-ক্লজ: since I came to Dhaka। আর for + দৈর্ঘ্য — সংখ্যা + সময়ের একক: for two years, for three weeks, for ten minutes, for ages (অনেককাল ধরে — কথ্য ভাষায়)।\n\nবাক্যের ছাঁচ: Subject + have/has + (been) + verb + since/for + ...। যেমন I have worked here for five years, She has been ill since Tuesday। সহজ পরীক্ষা: পরের অংশটা 'কখন থেকে?'-র উত্তর দিলে since; 'কতদিন ধরে?'-র উত্তর দিলে for।",
            en: "Two formulas: since + starting point — the point can be (a) a year: since 2015; (b) a day: since Monday, since 5th March; (c) clock time: since 9 o'clock; (d) part of a day: since morning, since evening; (e) an event clause: since I came to Dhaka. And for + duration — a number + a time unit: for two years, for three weeks, for ten minutes, for ages (spoken English for 'a very long time').\n\nSentence mould: Subject + have/has + (been) + verb + since/for + ... — I have worked here for five years, She has been ill since Tuesday. Easy test: if the next part answers 'from when?', use since; if it answers 'how long?', use for.",
            hi: "दो सूत्र: since + शुरुआती बिंदु — बिंदु हो सकता है (a) साल: since 2015; (b) दिन: since Monday, since 5th March; (c) घड़ी का समय: since 9 o'clock; (d) दिन का हिस्सा: since morning, since evening; (e) घटना-वाक्य: since I came to Dhaka। और for + अवधि — संख्या + समय इकाई: for two years, for ten minutes, for ages।\n\nवाक्य-ढाँचा: Subject + have/has + (been) + verb + since/for + ... — I have worked here for five years, She has been ill since Tuesday। आसान परीक्षा: अगला हिस्सा 'कब से?' का उत्तर दे तो since; 'कितने समय से?' का उत्तर दे तो for।",
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
            bn: "আভাস চেনার উপায়: since-প্যাক আর for-প্যাক",
            en: "Pattern recognition: the since-pack and the for-pack",
            hi: "पैटर्न पहचान: since-पैक और for-पैक",
          },
          body: {
            bn: "আভাস-শব্দ চিনে নিন। since-প্যাক: since morning, since yesterday (সাবধান — 'গতকাল' একটা বিন্দু), since last week, since last Eid, since my birthday, since the accident — 'last/this/that + সময়' আর ঘটনার নাম সব since-এর প্যাকে। for-প্যাক: for a moment, for a minute, for an hour, for a day, for a week, for a month, for years, for ages, for a long time — সামনে a/an বা সংখ্যা থাকলে প্রায় সবসময় for।\n\nসোনার নিয়ম: 'এককের আগে সংখ্যা' দেখলে for; 'নির্দিষ্ট কবে' দেখলে since। বাংলা থেকে ভাবুন: 'তিন বছর ধরে' (ধরে = দৈর্ঘ্য) → for; 'গত ঈদ থেকে' (থেকে = শুরু) → since। নিজের মাথার বাংলা বাক্যে 'ধরে' বা 'থেকে' ধরা পড়লেই উত্তর প্রায় তৈরি।",
            en: "Learn the signal words. The since-pack: since morning, since yesterday (careful — 'yesterday' is a point), since last week, since last Eid, since my birthday, since the accident — 'last/this/that + time' and the names of events all belong to since. The for-pack: for a moment, for a minute, for an hour, for a day, for a week, for a month, for years, for ages, for a long time — with a/an or a number in front, it is almost always for.\n\nA golden rule: a number before a unit means for; a named moment means since. Think from Bengali: 'তিন বছর ধরে' (ধরে = duration) → for; 'গত ঈদ থেকে' (থেকে = start) → since. When 'ধরে' or 'থেকে' appears in the Bengali sentence in your head, the answer is nearly ready.",
            hi: "संकेत-शब्द पहचानें। since-पैक: since morning, since yesterday (सावधान — 'कल' एक बिंदु है), since last week, since last Eid, since the accident — 'last/this/that + समय' और घटनाएँ सब since में। for-पैक: for a moment, for a minute, for an hour, for a week, for years, for ages, for a long time — आगे a/an या संख्या हो तो लगभग हमेशा for।\n\nसुनहरा नियम: इकाई से पहले संख्या = for; नाम-गिना क्षण = since। बांग्ला से सोचें: 'तीन बছর ধরে' (ধরে = अवधि) → for; 'गत ঈद থেকে' (থেকे = शुरुआत) → since। मन के बांग्ला वाक्य में 'ধরে' या 'थেকे' दिखे तो उत्तर लगभग तैयार।",
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
                hi: "'स्कूल-जीवন से' — शुरुआत का पता, इसलिए since; साथ ही स्वाभाविक वाक्य में our आता है।",
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
            bn: "পারফেক্ট tense-এর জুটি: have/has (been) + verb",
            en: "The perfect-tense pairing: have/has (been) + verb",
            hi: "perfect-tense की जोड़ी: have/has (been) + verb",
          },
          body: {
            bn: "since/for-এর প্রধান বাসা পারফেক্ট tense — কারণ দুটোই 'অতীত থেকে এখন পর্যন্ত' বোঝায়, আর ইংরেজি সেই সেতু দেখাতে চায়। তিনটা জনপ্রিয় ছাঁচ: (১) present perfect — have/has + past participle: I have lived here since 2018, We have known each other for ten years। (২) present perfect continuous — have/has been + verb-ing: I have been learning English for two years, He has been sleeping since noon। (৩) past perfect অতীতের অতীতে: She had worked there for five years before she moved।\n\nসবচেয়ে কমন ভুল: বাংলার মতো সাধারণ বর্তমান কাল ব্যবহার করা — 'I am living here since 2020' বা 'I am here since morning'। ইংরেজি চায় পারফেক্ট: I have been living here since 2020, I have been here since morning। মনে রাখুন: অতীতের একটা বিন্দু থেকে এখন পর্যন্ত টেকে থাকা অবস্থা ইংরেজিতে সাধারণ present-এ বলা যায় না — পারফেক্ট-ই সেই সেতু।",
            en: "The main home of since/for is the perfect tense — both mean 'from a past point until now', and English insists on showing that bridge. Three popular moulds: (1) present perfect — have/has + past participle: I have lived here since 2018, We have known each other for ten years. (2) present perfect continuous — have/has been + verb-ing: I have been learning English for two years, He has been sleeping since noon. (3) past perfect for the past of the past: She had worked there for five years before she moved.\n\nThe most common mistake is using a plain present like Bengali does — 'I am living here since 2020' or 'I am here since morning'. English wants the perfect: I have been living here since 2020, I have been here since morning. Remember: a state holding from a past point until now cannot be said in the simple present — the perfect is that bridge.",
            hi: "since/for का मुख्य घर perfect tense है — दोनों का अर्थ 'अतीत के बिंदु से अब तक', और अंग्रेज़ी वह पुल दिखाना चाहती है। तीन लोकप्रिय ढाँचे: (1) present perfect — have/has + past participle: I have lived here since 2018, We have known each other for ten years। (2) present perfect continuous — have/has been + verb-ing: I have been learning English for two years, He has been sleeping since noon। (3) past perfect अतीत के अतीत में: She had worked there for five years before she moved।\n\nसबसे आम गलती: बांग्ला की तरह साधारण वर्तमान काल — 'I am living here since 2020' या 'I am here since morning'। अंग्रेज़ी perfect चाहती है: I have been living here since 2020, I have been here since morning। याद रखें: अतीत से अब तक टिकी अवस्था साधारण present में नहीं कही जाती — perfect ही वह पुल है।",
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
            bn: "since-এর পরে পূর্ণ বাক্য: since I came here",
            en: "A full clause after since: since I came here",
            hi: "since के बाद पूरा वाक्य: since I came here",
          },
          body: {
            bn: "since-এর পরে শুধু সময়ের নাম নয় — পুরো বাক্যও বসতে পারে, আর সেই বাক্য বলে দেয় শুরুটা কোন ঘটনা: I have known Rima since we were in school। He has changed a lot since he got the job। We haven't met since she moved to Chattogram। খেয়াল করুন since-ক্লজের ভেতরের ক্রিয়া সাধারণত past simple (were, got, moved) — শুরুর ঘটনাটা অতীতে ঘটেছে; আর বাইরের ক্রিয়া পারফেক্ট — ফল এখনো চলছে।\n\nবাংলায় আমরা বলি 'স্কুল-জীবন থেকেই রিমাকে চিনি' — ঘটনাটা গুটিয়ে এক শব্দে; ইংরেজিতে ঘটনা বলতে চাইলে পূর্ণ ক্লজ লাগবেই: since we were in school। আরেকটা কমন ভুল: since-ক্লজে present perfect ঢোকানো — 'since I have come here' নয়, since I came here। শুরুর ঘটনা একবারের ঘটনা — তাই সহজ past।",
            en: "After since you can put not only a time word but a whole clause — and that clause names the event that started it all: I have known Rima since we were in school. He has changed a lot since he got the job. We haven't met since she moved to Chattogram. Notice that the verb inside the since-clause is usually past simple (were, got, moved) — the starting event happened in the past — while the outer verb is perfect, because the result continues now.\n\nBengali folds the event into one word — 'স্কুল-জীবন থেকেই চিনি' — but English needs the full clause to name the event: since we were in school. One more common slip: putting a present perfect inside the since-clause — not 'since I have come here' but since I came here. The starting event happened once, so plain past is enough.",
            hi: "since के बाद केवल समय-शब्द नहीं — पूरा वाक्य भी आ सकता है, और वह वाक्य बताता है शुरुआत कौन-सी घटना से हुई: I have known Rima since we were in school। He has changed a lot since he got the job। We haven't met since she moved to Chattogram। ध्यान दें — since-क्लॉज़ के अंदर की क्रिया आमतौर पर past simple (were, got, moved) होती है; बाहर की क्रिया perfect — परिणाम अब भी चल रहा है।\n\nबांग्ला घटना को एक शब्द में मोड़ देता है, पर अंग्रेज़ी को पूरा क्लॉज़ चाहिए: since we were in school। एक और आम चूक: since-क्लॉज़ में present perfect — 'since I have come here' नहीं, since I came here। शुरुआती घटना एक बार हुई — साधारण past काफ़ी।",
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
            bn: "বাঙালি শিক্ষার্থীদের কমন ভুল: 'থেকে'-র পাঁচ ফাঁদ",
            en: "Common mistakes by Bengali speakers: five 'থেকে' traps",
            hi: "बांग्लाभाषी शिक्षार्थियों की आम गलतियाँ: 'থেকে' के पाँच जाल",
          },
          body: {
            bn: "এই পাঠের সবচেয়ে ঘনঘন দেখা পাঁচটা ভুল: (১) 'from' দিয়ে চলমান সময় বোঝানো — I live here from 2020 ✗; বাংলার 'থেকে' মনে করিয়ে দেয় from, কিন্তু চলমান সময়ের শুরু বোঝাতে since: I have lived here since 2020। from আসে অন্য প্রসঙ্গে — The shop is open from 9 to 5 (ঘণ্টার হিসেব, অতীত-এখন সংযোগ নেই)। (২) পারফেক্ট বাদ দিয়ে সাধারণ বর্তমান: I am here since morning ✗ → I have been here since morning। (৩) since আর for জায়গা বদল করা — সোনার নিয়ম মনে রাখুন: সংখ্যা = for, নাম-ঘোষিত বিন্দু = since। (৪) দৈর্ঘ্যে বহুবচন বাদ: for five years — years-এ -s লাগবেই; আর since 2020-তে কোনো the নেই। (৫) since-ক্লজে past simple-এর বদলে present perfect — since I have come ✗ → since I came।\n\nসব ভুলের মূল একটাই: বাংলার 'থেকে'-কে একটা ইংরেজি শব্দে ভান করা। 'থেকে' শুনলে প্রথম প্রশ্ন করুন — শুরুর বিন্দু না দৈর্ঘ্য? তারপর tense যাচাই করুন — পারফেক্ট আছে তো?",
            en: "The five most frequent mistakes in this lesson: (1) using 'from' for ongoing time — I live here from 2020 ✗; Bengali 'থেকে' whispers from, but the start of ongoing time is since: I have lived here since 2020. from belongs to other contexts — The shop is open from 9 to 5 (clock ranges, no past-to-now bridge). (2) dropping the perfect and staying in the plain present: I am here since morning ✗ → I have been here since morning. (3) swapping the two — for where since belongs and vice versa; recall the golden rule: a number = for, a named point = since. (4) missing the plural in durations: for five years — years needs its -s; and since 2020 takes no 'the'. (5) present perfect inside the since-clause — since I have come ✗ → since I came.\n\nAll the errors share one root: disguising Bengali 'থেকে' as one English word. When you hear 'থেকে', first ask — a starting point or a duration? Then check the tense — is the perfect there?",
            hi: "इस पाठ की पाँच सबसे बार-बार दिखने वाली गलतियाँ: (1) चलते समय के लिए 'from' — I live here from 2020 ✗; बांग्ला 'थেके' from की याद दिलाता है, पर चलते समय की शुरुआत = since: I have lived here since 2020। from दूसरे संदर्भ में — The shop is open from 9 to 5। (2) perfect छोड़कर साधारण present: I am here since morning ✗ → I have been here since morning। (3) since और for की अदला-बदली — सुनहरा नियम: संख्या = for, नाम-गिना बिंदु = since। (4) अवधि में plural छूट जाना: for five years — years पर -s; और since 2020 में 'the' नहीं। (5) since-क्लॉज़ में present perfect — since I have come ✗ → since I came।\n\nसब गलतियों की जड़ एक: बांग्ला 'थेके' को एक अंग्रेज़ी शब्द में ढालना। 'थेके' सुनते ही पहला सवाल — शुरुआती बिंदु या अवधि? फिर tense जाँचें — perfect है या नहीं?",
          },
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
            bn: "ছোট গল্পে দেখা যাক: মিতার ব্যাংক-জীবন",
            en: "A mini story: Mita's bank life",
            hi: "छोटी कहानी: मीता की बैंक-ज़िंदगी",
          },
          body: {
            bn: "মিতা চাকরি পেয়েছিল ২০১৯-এ, এখনো সেই ব্যাংকে — Mita has worked at the bank since 2019। মানে পাঁচ বছর ধরে — She has worked there for five years। প্রতিদিন সকালে নয়টা থেকে ব্যস্ত — She has been busy since 9 o'clock। বিকেলে বন্ধু রিয়া ফোন করল: 'I haven't seen you since last Eid!' — গত ঈদের পর থেকে তো দেখিনি! মিতা হাসল, 'I have been waiting for this call for two months!' — দুই মাস ধরে এই ফোনের অপেক্ষা! রিয়া বলল, 'You look tired.' — 'Yes, I have been standing since morning' — সকাল থেকে দাঁড়িয়ে আছি। শনিবারে দেখা করার কথা ঠিক হলো — since last Eid-এর অপেক্ষা শেষ হবে।\n\nএক নজরে: (১) since = শুরুর বিন্দু (since 2019, since morning, since last Eid), for = দৈর্ঘ্য (for five years, for two hours)। (২) পরীক্ষা: 'কখন থেকে?' → since; 'কতদিন ধরে?' → for। (৩) দুটোই পারফেক্ট tense-এর সাথী: have/has (been) + verb। (৪) 'I am here since morning' নয় — I have been here since morning। (৫) since-এর পরে পূর্ণ ক্লজও চলে, ভেতরে past simple: since I came here। (৬) ঘণ্টার রেঞ্জ (9 to 5) বোঝাতে from...to — since নয়।",
            en: "Mita got her job in 2019 and is still at that bank — Mita has worked at the bank since 2019. In other words, five years — She has worked there for five years. Busy from nine every morning — She has been busy since 9 o'clock. In the afternoon her friend Ria called: 'I haven't seen you since last Eid!' Mita laughed, 'I have been waiting for this call for two months!' Ria said, 'You look tired.' — 'Yes, I have been standing since morning.' They fixed a Saturday meeting — the since-last-Eid wait would finally end.\n\nIn a nutshell: (1) since = starting point (since 2019, since morning, since last Eid), for = duration (for five years, for two hours). (2) The test: 'from when?' → since; 'how long?' → for. (3) Both pair with the perfect tense: have/has (been) + verb. (4) Not 'I am here since morning' — I have been here since morning. (5) A full clause works after since, past simple inside: since I came here. (6) Clock ranges (9 to 5) take from...to — not since.",
            hi: "मीता को नौकरी २०१९ में मिली थी, अब भी उसी बैंक में — Mita has worked at the bank since 2019। यानी पाँच साल — She has worked there for five years। रोज़ सुबह नौ से व्यस्त — She has been busy since 9 o'clock। दोपहर में दोस्त रिया का फ़ोन: 'I haven't seen you since last Eid!' मीता हँसी, 'I have been waiting for this call for two months!' रिया ने कहा, 'You look tired.' — 'Yes, I have been standing since morning'। शनिवार मिलने का प्लान तय हुआ — since last Eid वाली प्रतीक्षा ख़त्म होगी।\n\nएक नज़र में: (1) since = शुरुआती बिंदु, for = अवधि। (2) परीक्षा: 'कब से?' → since; 'कितने समय से?' → for। (3) दोनों perfect tense के साथी: have/has (been) + verb। (4) 'I am here since morning' नहीं — I have been here since morning। (5) since के बाद पूरा क्लॉज़ चलता है, अंदर past simple: since I came here। (6) घंटों की रेंज (9 to 5) के लिए from...to — since नहीं।",
          },
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
      ],
      tips: [
        { bn: "দুটো শব্দ বাংলায় অনুবাদ করে রাখুন: since = 'থেকে' (শুরু), for = 'ধরে' (দৈর্ঘ্য) — মাথার বাংলা বাক্যে কোনটা আছে দেখুন।", en: "Anchor the two words in Bengali: since = 'থেকে' (start), for = 'ধরে' (duration) — check which one your mental Bengali sentence carries.", hi: "दोनों शब्द बांग्ला में जमा करें: since = 'थेके' (शुरुआत), for = 'ধরे' (अवधि) — देखें मन के बांग्ला वाक्य में कौन है।" },
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

  /* ── 4. Common Mistakes by Bengali Speakers ────────────────────────── */
  {
    topic: "Common Mistakes by Bengali Speakers",
    level: "beginner",
    title: "Common Mistakes by Bengali Speakers (Beginner)",
    unit: 0,
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
      sections: [
        {
          heading: {
            bn: "কখন, কোথায় ভুল হয়? — তাড়া, চ্যাট আর পরীক্ষার খাতা",
            en: "When and where mistakes happen — hurry, chat and the exam paper",
            hi: "गलतियाँ कब, कहाँ होती हैं — जल्दबाज़ी, चैट और परीक्षा",
          },
          body: {
            bn: "ভুলের মৌসুম ঠিক আছে: ক্লাসে হাত তুলে দ্রুত উত্তর দিতে হয়, ইন্টারভিউয়ে নার্ভস, চ্যাটে টাইপিং-এর দৌড়, পরীক্ষার খাতায় সময় কম — এই মুহূর্তগুলোতেই মগজ শর্টকাট নেয়। ধীরে লিখলে বাক্য ঠিকই আসে; তাড়ায় প্রথমে বাংলা বাক্যটা মাথায় এঁকে ফেলা হয়, তারপর তার উপর ইংরেজি শব্দ বসানো হয়। আরেকটা বিষয় মনে রাখুন: ভুল করা দুর্বলতা নয় — প্রতিটা ভাষা-শেখার মধ্যপথ। কিন্তু একই ভুল বারবার হলে সেটা অভ্যাস হয়ে বসে যায়, আর শ্রোতার কানে 'গন্ধ' হয়ে থেকে যায় — মানে বোঝা গেলেও বাক্যটা 'সঠিক' শোনায় না। তাই উপায় দুটো: প্যাটার্ন চেনা, আর বলার/লেখার আগে দুই সেকেন্ডের একটা চেক। নিচের উদাহরণগুলো তিনটে আসল জায়গা থেকে — মুখের কথা, চ্যাট, আর খাতা।",
            en: "Mistakes have a season: raising your hand and answering fast in class, interview nerves, the race of typing on chat, less time in the exam hall — in exactly these moments the mind takes its shortcut. Written slowly, the sentence comes out fine; in a hurry, the Bengali sentence is drawn in the head first and English words are then placed on top of it. Notice something else: making mistakes is not weakness — it is the middle of every language journey. But the same mistake repeated becomes habit, and it leaves a 'smell' in the listener's ear — even when the meaning lands, the sentence does not sound right. So there are two remedies: know the patterns, and run a two-second check before speaking or writing. The examples below come from three real places — speech, chat, and the notebook.",
            hi: "गलती का मौसम तय है: कक्षा में जल्दी उत्तर देना, इंटरव्यू की घबराहट, चैट में टाइपिंग की दौड़, परीक्षा में समय की कमी — इन्हीं लम्हों में दिमाग़ शॉर्टकट लेता है। धीरे लिखें तो वाक्य ठीक निकलता है; जल्दी में पहले बांग्ला वाक्य दिमाग़ में बनता है, फिर उस पर अंग्रेज़ी शब्द बैठाए जाते हैं। एक बात और — गलती करना कमज़ोरी नहीं, हर भाषा-सीख के बीच का रास्ता है। पर वही गलती बार-बार हो तो आदत बन जाती है और सुनने वाले के कान में एक 'गंध' छोड़ जाती है — मतलब समझ आ जाए तब भी वाक्य 'सही' नहीं लगता। इलाज दो: पैटर्न पहचानना और बोलने/लिखने से पहले दो-सेकंड की जाँच। नीचे के उदाहरण तीन असली जगहों से हैं — बोलचाल, चैट और कॉपी।",
          },
          examples: [
            {
              wrong: "I will go to home now.",
              right: "I will go home now.",
              note: {
                bn: "'বাড়িতে'-র 'তে' থেকে to চলে আসে; কিন্তু home, here, there-এর আগে to লাগে না — go home, come here। তাড়ায় কথা বলতে গিয়ে এই ভুল সবচেয়ে বেশি হয়।",
                en: "The 'তে' of 'বাড়িতে' pulls in a to; but home, here and there take no to — go home, come here. This error happens most when speaking in a hurry.",
                hi: "'বাড়িতे' के 'ते' से to आ जाता है; पर home, here, there से पहले to नहीं लगता — go home, come here। जल्दी में बोलते समय यह सबसे आम है।",
              },
            },
            {
              wrong: "My all friends are coming to the party.",
              right: "All my friends are coming to the party.",
              note: {
                bn: "বাংলা ক্রম 'আমার সব বন্ধুরা' সরাসরি ক্যাল্ক; ইংরেজি চায় all + my — All my friends, All my books।",
                en: "A straight calque of the Bengali order 'আমার সব বন্ধুরা'; English wants all + my — All my friends, All my books.",
                hi: "बांग्ला क्रम 'আমার সব বন্ধুরা' का सीधा calque; अंग्रेज़ी चाहती है all + my — All my friends, All my books।",
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
            bn: "ভুলের মূল প্যাটার্ন: শব্দে-শব্দে অনুবাদের ছায়া",
            en: "The root pattern: the shadow of word-by-word translation",
            hi: "गलती का मूल पैटर्न: शब्द-दर-शब्द अनुवाद की परछाई",
          },
          body: {
            bn: "প্রায় সব বাঙালি-ভুলের পেছনে চারটা প্যাটার্ন কাজ করে। (১) দ্বিগুণ জোর: বাংলা 'আরও ভালো' ভাবটা দুই শব্দে চলে, তাই more better বেরিয়ে আসে; ইংরেজিতে তুলনা একবারই হয় — better। (২) জোড়া জুড়ে ফেলা: 'ফিরে আসা' দুই ভাবের নাম, তাই return back; কিন্তু return-এর ভেতরেই 'ফেরা' বসে আছে। (৩) বাংলা বাক্য-ক্রম: 'কেন তুমি কাঁদছ?' → Why you are crying?; ইংরেজি প্রশ্নে ক্রম উল্টে যায় — Why + are + you + crying? (৪) সব নামে -s: 'তথ্যগুলো', 'আসবাবগুলো' — '-গুলো' থেকে -s; কিন্তু information, furniture-এর মতো নাম কখনো বহুবচন হয় না। মনে রাখুন — ভুলের মুহূর্তে আপনি আসলে বাংলায় ভাবছিলেন; এটা দোষ নয়, স্বাভাবিক। সমাধান একটাই: ইংরেজি বাক্যকে গোটা ছাঁচ হিসেবে শেখা, শব্দে ভাঙা নয়।",
            en: "Four patterns drive almost every Bengali-speaker error. (1) Double emphasis: the Bengali idea 'আরও ভালো' travels in two words, so more better slips out; in English the comparison is marked once — better. (2) Pair-joining: 'ফিরে আসা' names two ideas, so return back appears; but return already holds 'coming back' inside it. (3) Bengali sentence order: 'কেন তুমি কাঁদছ?' → Why you are crying?; an English question flips the order — Why + are + you + crying? (4) -s on every noun: 'তথ্যগুলো', 'আসবাবগুলো' — the '-গুলো' becomes -s; but nouns like information and furniture never take a plural. Remember — in the moment of the mistake you were actually thinking in Bengali; that is not a fault, it is natural. The fix is one: learn English sentences as whole templates, not word-by-word puzzles.",
            hi: "लगभग हर बांग्ला-भाषी गलती के पीछे चार पैटर्न काम करते हैं। (1) दोहरा ज़ोर: बांग्ला 'আরও ভালো' भाव दो शब्दों में चलता है, इसलिए more better निकल आता है; अंग्रेज़ी में तुलना एक बार ही होती है — better। (2) जोड़ी जोड़ना: 'ফিরে আসা' दो भावों का नाम, इसलिए return back; पर return के भीतर 'लौटना' पहले से है। (3) बांग्ला वाक्य-क्रम: 'কেন তুমি কাঁদছ?' → Why you are crying?; अंग्रेज़ी प्रश्न में क्रम पलट जाता है — Why + are + you + crying? (4) हर नाम पर -s: 'তথ্যগুলো', 'আসবাবগুলো' — '-গুলো' से -s; पर information, furniture जैसे नाम कभी बहुवचन नहीं होते। याद रखें — गलती के क्षण में आप असल में बांग्ला में सोच रहे थे; यह दोष नहीं, स्वाभाविक है। इलाज एक है: अंग्रेज़ी वाक्य को पूरे टेम्पलेट की तरह सीखें, शब्द-दर-शब्द नहीं।",
          },
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
            bn: "ভুল-পরিবার ১: ক্রিয়ার ভুল — 'I am agree', 'didn't went', 'She go'",
            en: "Mistake family 1: verbs — 'I am agree', 'didn't went', 'She go'",
            hi: "गलती-परिवार 1: क्रिया — 'I am agree', 'didn't went', 'She go'",
          },
          body: {
            bn: "এই পরিবারে তিন ফাঁদ। ফাঁদ ১ — be-verb + 'একমত'জাত ক্রিয়া: বাংলায় বলি 'আমি একমত আছি' — 'আছি' থেকে am চলে আসে; কিন্তু agree নিজেই পূর্ণ ক্রিয়া, একাই যথেষ্ট — I agree। একই গ্রুপে understand, know, want: 'I am understand' নয় — I understand। ফাঁদ ২ — didn't-এর পরে অতীত রূপ: অতীতের দাগ didn't নিজেই বহন করে, তাই পরের verb base রূপে ফেরে — didn't go, didn't eat; বাংলায় 'গেল না', 'খেল না' — ক্রিয়াটাই অতীত হয়ে যায়, তাই হাত থেকে went চলে আসে। ফাঁদ ৩ — he/she/it-এ -s: প্রতিদিনের রুটিনের বাক্যে তৃতীয় পুরুষ একবচনে verb-এ -s — She goes, He plays; বাংলা ক্রিয়া কর্তা বদলালেও প্রায় বদলায় না ('আমি যাই, সে যায়' — খুব অল্প), তাই এই -s প্রতিবার হাত থেকে পড়ে যায়।",
            en: "This family has three traps. Trap 1 — be-verb + 'agreement' verbs: in Bengali we say 'আমি একমত আছি' — the 'আছি' pulls in an am; but agree is already a full verb and works alone — I agree. The same group holds understand, know, want: not 'I am understand' but I understand. Trap 2 — past form after didn't: didn't itself carries the past mark, so the verb returns to its base form — didn't go, didn't eat; in Bengali the verb itself goes past ('গেল না', 'খেল না'), which is why went keeps escaping. Trap 3 — -s with he/she/it: in daily-routine sentences the third person singular takes -s — She goes, He plays; Bengali verbs barely change with the subject ('আমি যাই, সে যায়' — almost the same), so this -s keeps falling off.",
            hi: "इस परिवार में तीन जाल हैं। जाल 1 — be-verb + 'सहमति' क्रियाएँ: बांग्ला में कहते हैं 'আমি একমত আছি' — 'আছি' से am आ जाता है; पर agree पहले से पूर्ण क्रिया है, अकेले काफ़ी — I agree। वही समूह: understand, know, want — 'I am understand' नहीं, I understand। जाल 2 — didn't के बाद भूत रूप: भूत का निशान didn't स्वयं रखता है, इसलिए क्रिया base रूप में लौटती है — didn't go, didn't eat; बांग्ला में 'गেল না', 'খেল না' — क्रिया ही भूत हो जाती है, इसलिए went फिसल जाता है। जाल 3 — he/she/it पर -s: रोज़मर्रा की रुटीन वाले वाक्यों में तृतीय पुरुष एकवचन के साथ क्रिया पर -s — She goes, He plays; बांग्ला क्रिया कर्ता बदलने पर भी लगभग नहीं बदलती ('আমি যাই, সে যায়' — लगभग वही), इसलिए यह -s बार-बार छूट जाती है।",
          },
          examples: [
            {
              wrong: "I am agree with your opinion.",
              right: "I agree with your opinion.",
              note: {
                bn: "agree একা ক্রিয়া — 'একমত আছি'-র 'আছি' থেকে am এলে দুই ক্রিয়া একসাথে বসে যায়; ইংরেজিতে I agree-ই পূর্ণ বাক্য।",
                en: "agree is a full verb; the 'আছি' of 'একমত আছি' adds an am, parking two verbs together — I agree alone is the complete sentence.",
                hi: "agree पूर्ण क्रिया है; 'একমত আছি' का 'আছি' am ले आता है और दो क्रियाएँ जमा हो जाती हैं — I agree अकेला ही पूर्ण वाक्य है।",
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
            bn: "ভুল-পরিবার ২: article আর গোনা-না-যাওয়া নাম — 'I read book', 'furnitures'",
            en: "Mistake family 2: articles and uncountables — 'I read book', 'furnitures'",
            hi: "गलती-परिवार 2: article और गिनती-बाहर नाम — 'I read book', 'furnitures'",
          },
          body: {
            bn: "দুই দিকের ভুল। দিক ১ — article হারানো: বাংলায় a/an/the-এর মতো শব্দ নেই, তাই 'আমি বই পড়ি' সরাসরি I read book হয়ে যায়; কিন্তু ইংরেজিতে একবচন গণনাযোগ্য নাম কখনো একা দাঁড়ায় না — সামনে a, an বা the লাগবেই: I read a book, She is a teacher। দিক ২ — যে নাম কখনো বহুবচন হয় না: information, furniture, advice, news — এদের সাথে -s আসবে না, many-ও আসবে না; হিসাব চাইলে ছাঁচ মুখস্থ করুন — a piece of information, a piece of furniture, a piece of advice, a piece of news। খেয়াল করুন, এই নামগুলোর সাথে সবসময় একবচন verb-ই চলে: The news is good, The furniture is new।",
            en: "Errors on two sides. Side 1 — lost articles: Bengali has no words like a/an/the, so 'আমি বই পড়ি' becomes a bare I read book; but in English a singular countable noun never stands alone — a, an or the must come first: I read a book, She is a teacher. Side 2 — nouns that never go plural: information, furniture, advice, news — no -s with them, and no many either; when counting is needed, memorise the template — a piece of information, a piece of furniture, a piece of advice, a piece of news. Notice that these nouns always take a singular verb: The news is good, The furniture is new.",
            hi: "दो तरफ़ की गलतियाँ। पहली — article खो जाना: बांग्ला में a/an/the जैसे शब्द नहीं, इसलिए 'আমি বই পড়ি' सीधे I read book बन जाता है; पर अंग्रेज़ी में एकवचन गिनती-योग्य नाम कभी अकेला नहीं खड़ा रहता — a, an या the ज़रूरी: I read a book, She is a teacher। दूसरी — कभी बहुवचन न होने वाले नाम: information, furniture, advice, news — इनके साथ -s भी नहीं, many भी नहीं; गिनना हो तो टेम्पलेट याद करें — a piece of information, a piece of furniture, a piece of advice, a piece of news। ध्यान दें, इन नामों के साथ हमेशा एकवचन क्रिया चलती है: The news is good, The furniture is new।",
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
            bn: "ভুল-পরিবার ৩: preposition ও ক্রমের ক্যাল্ক — 'discuss about', 'married with', 'listen music'",
            en: "Mistake family 3: preposition and order calques — 'discuss about', 'married with', 'listen music'",
            hi: "गलती-परिवार 3: preposition और क्रम का calque — 'discuss about', 'married with', 'listen music'",
          },
          body: {
            bn: "preposition দুই দিকেই ভুল ধরে — অতিরিক্তও লাগে, অনুপস্থিতও থাকে। অতিরিক্ত: বাংলা 'পরিকল্পনা নিয়ে আলোচনা করা' — 'নিয়ে' থেকে discuss about; কিন্তু discuss-এর ভেতরেই 'নিয়ে' আছে — discuss the plan। 'কারো সাথে বিবাহ' — 'সাথে' থেকে married with; ইংরেজি চায় married to। অনুপস্থিত: বাংলা 'গান শোনা' এক ক্রিয়া, তাই listen music; ইংরেজিতে listen আলাদা ক্রিয়া, কান কোথায় পড়বে বোঝাতে to লাগে — listen to music। আর ক্রমের ক্যাল্ক: 'আমি এটা খুব পছন্দ করি' → I very like it; ইংরেজিতে very শেষের দিকে যায় — I like it very much। 'আমাকে বুঝিয়ে দিল' → explained me the sum; ইংরেজি ছাঁচ explain something to someone। কায়দা একটাই: বাংলা ক্রিয়া-জুটি ভাঙতে যাবেন না; প্রতিটা ইংরেজি ক্রিয়াকে তার নিজের preposition-সহ মুখস্থ করুন।",
            en: "Prepositions go wrong in both directions — an extra one appears, or a needed one vanishes. Extra: Bengali 'পরিকল্পনা নিয়ে আলোচনা করা' — the 'নিয়ে' produces discuss about; but discuss already contains 'about' — discuss the plan. 'কারো সাথে বিবাহ' — the 'সাথে' produces married with; English wants married to. Missing: Bengali 'গান শোনা' is one verb, so listen music; but listen is a separate verb that needs to to aim the ear — listen to music. And order calques: 'আমি এটা খুব পছন্দ করি' → I very like it; in English very moves towards the end — I like it very much. 'আমাকে বুঝিয়ে দিল' → explained me the sum; the English template is explain something to someone. The habit is one: do not dismantle Bengali verb-pairs; memorise each English verb together with its own preposition.",
            hi: "preposition दो दिशाओं में गलत होता है — कभी अतिरिक्त आता है, कभी ज़रूरी छूट जाता है। अतिरिक्त: बांग्ला 'পরিকল্পনা নিয়ে আলোচনা করা' — 'নিয়ে' से discuss about; पर discuss के भीतर ही 'बारे में' है — discuss the plan। 'किसी के साथ विवाह' — 'সাথে' से married with; अंग्रेज़ी चाहती है married to। अनुपस्थित: बांग्ला 'গান শোনা' एक क्रिया है, इसलिए listen music; पर listen अलग क्रिया है, कान कहाँ लगेगा यह to बताता है — listen to music। और क्रम का calque: 'আমি এটা খুব পছন্দ করি' → I very like it; अंग्रेज़ी में very पीछे चला जाता है — I like it very much। 'আমাকে বুঝিয়ে দিল' → explained me the sum; अंग्रेज़ी टेम्पलेट explain something to someone। आदत एक ही: बांग्ला क्रिया-जोड़ियाँ न तोड़ें; हर अंग्रेज़ी क्रिया अपने preposition के साथ याद करें।",
          },
          examples: [
            {
              wrong: "I very like this song.",
              right: "I like this song very much.",
              note: {
                bn: "বাংলা ক্রম 'খুব পছন্দ করি' থেকে very মাঝে চলে আসে; ইংরেজিতে like + বস্তু + very much।",
                en: "The Bengali order 'খুব পছন্দ করি' drags very into the middle; English runs like + object + very much.",
                hi: "बांग्ला क्रम 'খুব পছন্দ করি' से very बीच में आ जाता है; अंग्रेज़ी में like + वस्तु + very much।",
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
                hi: "listen स्वतंत्र क्रिया है, कान कहाँ लगेगा यह to बताता है — listen to music, listen to me; 'শোনা' एक क्रिया होने से to छूट जाता है।",
              },
            },
            {
              wrong: "The teacher explained me the sum.",
              right: "The teacher explained the sum to me.",
              note: {
                bn: "'আমাকে বুঝিয়ে দিল' ক্রম থেকে explained me the sum; ইংরেজি ছাঁচ: explain something to someone।",
                en: "From the Bengali order 'আমাকে বুঝিয়ে দিল' comes explained me the sum; the English template is explain something to someone.",
                hi: "'আমাকে বুঝিয়ে দিল' क्रम से explained me the sum बनता है; अंग्रेज़ी टेम्पलेट है explain something to someone।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "ভুল-পরিবার ৪: ছোট শব্দের বড় ফাঁদ — 'more taller', 'repeat again', 'bery', 'sip'",
            en: "Mistake family 4: small words, big traps — 'more taller', 'repeat again', 'bery', 'sip'",
            hi: "गलती-परिवार 4: छोटे शब्द, बड़े जाल — 'more taller', 'repeat again', 'bery', 'sip'",
          },
          body: {
            bn: "শেষ পরিবারের ফাঁদগুলো ছোট, কিন্তু প্রতিদিনের। দ্বিগুণ তুলনা: তুলনার দাগ একবারই — more taller নয়, taller; more better নয়, better। বাড়তি জোড়া: repeat-এর ভেতরেই 'আবার' — repeat again নয়, Could you repeat that?; return-এর ভেতরেই 'ফেরা' — return back নয়। তারপর উচ্চারণ-বানানের ফাঁদ। বাংলায় v-এর দাঁত-ঠোঁট-জোড়া শব্দ নেই, তাই very 'bery', van 'ban', vet 'bet' হয়ে যায় — v বলার সময় উপরের দাঁত নিচের ঠোঁটে রাখুন, ঠোঁট বন্ধ করবেন না। আর s/sh: বাংলায় স-শ আলাদা অক্ষর, ইংরেজিতেও তা-ই — sip (এক ঢোক চুমুক) আর ship (জাহাজ) মাঝে মাত্র এক অক্ষর, কিন্তু অর্থ আকাশ-পাতাল। বানান দেখে উচ্চারণ মনে রাখুন — শব্দ মুখস্থ করলে তার শব্দটাও মুখস্থ করুন।",
            en: "The traps of the last family are tiny but daily. Double comparison: the comparative mark happens once — not more taller but taller, not more better but better. Extra pairs: repeat already holds 'again' inside — not repeat again but Could you repeat that?; return already holds 'back' — never return back. Then the pronunciation-spelling traps. Bengali has no v sound (teeth on lip), so very becomes 'bery', van becomes 'ban', vet becomes 'bet' — for v rest your upper teeth on your lower lip, do not close the lips. And s/sh: Bengali keeps স and শ as separate letters and so does English — between sip (one gulp) and ship (a big boat) there is just one letter, but the meanings are worlds apart. Match pronunciation to spelling — when you memorise a word, memorise its sound too.",
            hi: "अंतिम परिवार के जाल छोटे हैं, पर रोज़ के। दोहरी तुलना: तुलना का निशान एक बार ही — more taller नहीं, taller; more better नहीं, better। अतिरिक्त जोड़ी: repeat के भीतर ही 'फिर' है — repeat again नहीं, Could you repeat that?; return के भीतर ही 'वापसी' है — return back नहीं। फिर उच्चारण-वर्तनी के जाल। बांग्ला में v की दाँत-ोंठ ध्वनि नहीं, इसलिए very 'bery', van 'ban', vet 'bet' बन जाता है — v बोलते समय ऊपरी दाँत निचले होंठ पर रखें, होंठ बंद न करें। और s/sh: बांग्ला में स-श अलग अक्षर हैं, अंग्रेज़ी में भी — sip (एक घूँट) और ship (जहाज़) के बीच बस एक अक्षर, पर अर्थ ज़मीन-आसमान का अंतर। वर्तनी देखकर उच्चारण जोड़ें — शब्द याद करें तो उसकी ध्वनि भी याद करें।",
          },
          examples: [
            {
              wrong: "My new phone is more faster than yours.",
              right: "My new phone is faster than yours.",
              note: {
                bn: "faster নিজেই তুলনা — more জুড়লে দাগ দুইবার; বাংলা 'আরও দ্রুত' দুই শব্দের ছায়া।",
                en: "faster is already a comparison — adding more marks it twice; the shadow of two-word Bengali 'আরও দ্রুত'.",
                hi: "faster पहले से तुलना है — more जोड़ने पर निशान दो बार; बांग्ला 'आरও দ্রুত' के दो शब्दों की परछाई।",
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
                hi: "s = 'স', sh = 'श' — sip (घूँट) और ship (जहाज़) एक अक्षर के अंतर पर ज़मीन-आसमान; उच्चारण से सावधान रहें।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "বাঙালি শিক্ষার্থীদের কমন ভুল: যা প্রতিদিন শোনা যায়",
            en: "Common mistakes by Bengali speakers: what you hear every day",
            hi: "बांग्ला स्पीकर्स की आम गलतियाँ: जो रोज़ सुनाई देती हैं",
          },
          body: {
            bn: "পাঁচটা ভুল যা প্রায় প্রতিটা বাঙালি শিক্ষার্থী এক না একবার করে। (১) পরিচয়ে 'Myself Rahim' — বাংলা 'আমি নিজে রহিম বলছি' ক্যাল্ক; ইংরেজিতে I am Rahim বা This is Rahim। (২) 'He don't know' — he/she/it-এর জুটি doesn't; don't-এর ভেতরে do+not লুকানো, সেই do-এর -s-টাই হারিয়ে যায়। (৩) 'two persons' — person-এর সাধারণ বহুবচন people; persons শুধু আইনি-সাইনবোর্ড ভাষায় বেঁচে আছে। (৪) 'cousin brother/sister' — বাংলা 'কাজিন ভাই/বোন' ক্যাল্ক; ইংরেজিতে শুধুই cousin — ছেলে না মেয়ে, প্রসঙ্গই বলে দেয়। (৫) 'Yesterday I have gone to the market' — গতকালের মতো নির্দিষ্ট, শেষ হয়ে যাওয়া অতীতে past simple: Yesterday I went। এই পাঁচটা ঠিক হলে আপনার ইংরেজির 'গন্ধ' এক নিঃশ্বাসে বদলে যাবে — কারণ শ্রোতার কান সবার আগে এদেরই ধরে।",
            en: "Five mistakes almost every Bengali learner makes at least once. (1) Introducing yourself with 'Myself Rahim' — a calque of Bengali 'আমি নিজে রহিম বলছি'; English says I am Rahim or This is Rahim. (2) 'He don't know' — he/she/it pairs with doesn't; inside don't hides do+not, and that do's -s is exactly what goes missing. (3) 'two persons' — the everyday plural of person is people; persons survives only in legal-signboard language. (4) 'cousin brother/sister' — a calque of Bengali 'কাজিন ভাই/বোন'; English uses just cousin — context tells whether he or she. (5) 'Yesterday I have gone to the market' — for a finished, dated past like yesterday use the past simple: Yesterday I went. Fix these five and the 'flavour' of your English changes in one breath — because ears catch these first of all.",
            hi: "पाँच गलतियाँ जो लगभग हर बांग्ला शिक्षार्थी एक बार तो करता ही है। (1) परिचय में 'Myself Rahim' — बांग्ला 'আমি নিজে রহিম বলছি' का calque; अंग्रेज़ी में I am Rahim या This is Rahim। (2) 'He don't know' — he/she/it की जोड़ी doesn't है; don't के भीतर do+not छिपा है, और उसी do का -s ही खो जाता है। (3) 'two persons' — person का रोज़मर्रा बहुवचन people है; persons केवल क़ानूनी-साइनबोर्ड भाषा में बचा है। (4) 'cousin brother/sister' — बांग्ला 'কাজিন ভাই/বোন' का calque; अंग्रेज़ी में बस cousin — लड़का या लड़की, संदर्भ बता देता है। (5) 'Yesterday I have gone to the market' — कल जैसे तय, ख़त्म हो चुके भूत में past simple: Yesterday I went। ये पाँच ठीक हो जाएँ तो आपकी अंग्रेज़ी की 'महक' एक साँस में बदल जाएगी — क्योंकि कान सबसे पहले इन्हीं को पकड़ते हैं।",
          },
          examples: [
            {
              wrong: "Myself Rahim, I am from Sylhet.",
              right: "I am Rahim, and I am from Sylhet.",
              note: {
                bn: "'নিজে' থেকে myself এসে পরিচয়ের ক্রিয়া হয়ে যায়; পরিচয় দিতে I am / This is — myself শুধু আত্মবাচক বস্তু (I hurt myself)।",
                en: "'নিজে' turns myself into the introducing verb; introductions use I am / This is — myself is only a reflexive object (I hurt myself).",
                hi: "'নিজে' से myself आकर परिचय की क्रिया बन जाती है; परिचय में I am / This is — myself केवल reflexive वस्तु है (I hurt myself)।",
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
                hi: "'কাজিন ভাই' का सीधा अनुवाद; अंग्रेज़ी cousin तटस्थ है — लड़का/लड़की का पता नाम या संदर्भ से चलता है।",
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
            bn: "ছোট গল্পে দেখা যাক: রাহিমের প্রথম ক্লায়েন্ট-কল",
            en: "A short story: Rahim's first client call",
            hi: "एक छोटी कहानी: राहिम का पहला क्लाइंट-कॉल",
          },
          body: {
            bn: "রাহিম জীবনে প্রথমবার বিদেশি ক্লায়েন্টের সাথে অফিসে কথা বলল। শুরুতেই বলে ফেলল, 'I am agree with you, sir' — তারপরই মনে পড়ল: agree একা ক্রিয়া, am-এর দরকার নেই; নিজেই ঠিক করে বলল — I agree with you, sir। ক্লায়েন্ট জিজ্ঞেস করল, ডিজাইন-ফাইল পাঠানো হয়েছে কি না। রাহিম বলল, 'Yesterday I have sent you the file' — মগজে বাজ পড়ল: 'গতকাল' মানে শেষ হয়ে যাওয়া অতীত, past simple — I sent you the file yesterday। এবার পরিকল্পনার পালা; মুখ ফসকে বলল, 'I will discuss about the plan' — থামল; discuss-এর পরে about নেই — I will discuss the plan with my manager and come back to you। কল শেষে ক্লায়েন্ট হেসে বলল, 'Your English is very good!' — রাহিম খুশি হলো; এবার সে 'bery' নয়, ঠিক 'very'-ই বলেছিল। ভুল করা প্রগতির অংশ — নিজের ভুল নিজে ধরতে পারাই আসল জয়।\n\nএক নজরে: (১) agree, understand একা ক্রিয়া — আগে am/is/are লাগে না। (২) didn't-এর পরে সবসময় base verb — didn't go, didn't eat। (৩) he/she/it + প্রতিদিনের কাজ = verb + -s — goes, plays। (৪) একবচন গণনাযোগ্য নাম একা থাকে না — a book, a teacher; information/furniture/advice/news কখনো -s নেয় না। (৫) তুলনা একবারই — better, taller; return back-এ back নেই, repeat again-এ again নেই, discuss-এর পরে about নেই, married TO someone। (৬) প্রশ্নে ক্রম — Why are you crying?; v-তে দাঁত ঠোঁটে (very, vet), s আর sh আলাদা (sip/ship)।",
            en: "For the first time in his life, Rahim spoke to a foreign client at the office. He opened with 'I am agree with you, sir' — then remembered: agree is a verb on its own, no am needed; he corrected himself — I agree with you, sir. The client asked whether the design file had been sent. Rahim said, 'Yesterday I have sent you the file' — a bell rang in his head: 'গতকাল' means a finished past, past simple — I sent you the file yesterday. Then came the plan; it slipped out, 'I will discuss about the plan' — he stopped; no about after discuss — I will discuss the plan with my manager and come back to you. When the call ended the client smiled, 'Your English is very good!' — Rahim was delighted; this time he had said 'very', not 'bery'. Making mistakes is part of progress — catching your own is the real win.\n\nAt a glance: (1) agree, understand are verbs on their own — no am/is/are before them. (2) After didn't always the base verb — didn't go, didn't eat. (3) he/she/it + daily routine = verb + -s — goes, plays. (4) A singular countable noun never stands alone — a book, a teacher; information/furniture/advice/news never take -s. (5) Comparison happens once — better, taller; no back in return back, no again in repeat again, no about after discuss, married TO someone. (6) Question order — Why are you crying?; teeth on the lip for v (very, vet), and s vs sh stay apart (sip/ship).",
            hi: "ज़िंदगी में पहली बार राहिम दफ़्तर में विदेशी क्लाइंट से बात करने बैठा। शुरू में ही निकल गया, 'I am agree with you, sir' — फिर याद आया: agree अकेली क्रिया है, am की ज़रूरत नहीं; ख़ुद ही सुधरकर बोला — I agree with you, sir। क्लाइंट ने पूछा, डिज़ाइन-फ़ाइल भेजी या नहीं। राहिम बोला, 'Yesterday I have sent you the file' — दिमाग़ में घंटी बजी: 'গতকাল' यानी ख़त्म हुआ भूत, past simple — I sent you the file yesterday। फिर योजना की बारी; मुँह से निकल गया, 'I will discuss about the plan' — रुक गया; discuss के बाद about नहीं — I will discuss the plan with my manager and come back to you। कॉल के अंत में क्लाइंट हँसकर बोला, 'Your English is very good!' — राहिम खुश हुआ; इस बार वह 'bery' नहीं, सही 'very' बोला था। गलती करना प्रगति का हिस्सा है — अपनी गलती ख़ुद पकड़ पाना असली जीत है।\n\nएक नज़र में: (1) agree, understand अपने आप में क्रिया हैं — आगे am/is/are नहीं। (2) didn't के बाद सदा base क्रिया — didn't go, didn't eat। (3) he/she/it + रोज़ का काम = क्रिया + -s — goes, plays। (4) एकवचन गिनती-योग्य नाम अकेला नहीं रहता — a book, a teacher; information/furniture/advice/news कभी -s नहीं लेते। (5) तुलना एक बार — better, taller; return back में back नहीं, repeat again में again नहीं, discuss के बाद about नहीं, married TO someone। (6) प्रश्न क्रम — Why are you crying?; v के लिए दाँत होंठ पर (very, vet), s और sh अलग (sip/ship)।",
          },
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
