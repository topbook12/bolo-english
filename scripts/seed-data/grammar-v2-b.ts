// ─── Learning-path grammar seeds: INTERMEDIATE batch B (6 lessons) ───
// Part of Task 9 (library enrichment). TriText = { bn, en, hi } — Bengali is
// the PRIMARY explanation language. quiz omitted (reserved for future).
import type { LibraryGrammarData, LibraryLevel } from "../../src/lib/library-types";

export interface SeedGrammarV2Entry {
  topic: string; // canonical topic id (stable, unique vs static bank topics)
  level: LibraryLevel;
  title: string;
  unit: number; // 1-5 = on the learning path; 0 = extra library lesson
  data: LibraryGrammarData;
}

export const SEED_GRAMMAR_V2_B: SeedGrammarV2Entry[] = [
  /* ── 1. Linking Words & Connectors ─────────────────────────────────── */
  {
    topic: "Linking Words & Connectors",
    level: "intermediate",
    title: "Linking Words & Connectors (Intermediate)",
    unit: 0,
    data: {
      title: {
        bn: "লিংকিং ওয়ার্ডস ও কানেক্টর (মধ্যম স্তর)",
        en: "Linking Words & Connectors (Intermediate)",
        hi: "लिंकिंग वर्ड्स और कनेक्टर (मध्यम स्तर)",
      },
      intro: {
        bn: "বাংলায় বাক্য জোড়া দিতে 'আর', 'কিন্তু', 'তাই', 'কারণ' — এই চার শব্দেই সারাজীবন চলে যায়, আবার 'যদিও... কিন্তু', 'কারণ... তাই' — জোড়া মিলিয়েও বলি। ইংরেজিতে নিয়ম আলাদা: এক সংযোগে এক শব্দ, আর however, therefore, although-এর মতো আনুষ্ঠানিক কানেক্টর ব্যবহার করলে কমা-ডটের নিয়মও মানতে হয়। এই পাঠে বাংলাভাষীদের সবচেয়ে পরিচিত ভুলগুলো একে একে ধরে ঠিক করব।",
        en: "In English, linking words glue your ideas together smoothly. Bengali speakers often overuse 'and', double up connectors ('although... but'), or drop the comma that however/therefore need. This lesson gives you the everyday four, the formal connectors, despite vs although, and ways to break the 'and' habit.",
        hi: "इंग्लिश में लिंकिंग वर्ड्स विचारों को जोड़ते हैं। बांग्लाभाषी अक्सर 'and' बहुत ज़्यादा इस्तेमाल करते हैं, 'although... but' जैसे दोहरे कनेक्टर लगाते हैं, या however/therefore के साथ कॉमा भूल जाते हैं। इस पाठ में चारों रोज़मर्रा के कनेक्टर, औपचारिक कनेक्टर, despite बनाम although और 'and' की आदत तोड़ने के उपाय सीखेंगे।",
      },
      sections: [
        {
          heading: {
            bn: "চার প্রতিবেশী: and, but, so, because",
            en: "The everyday four: and, but, so, because",
            hi: "रोज़मर्रा के चार: and, but, so, because",
          },
          body: {
            bn: "এই চারটা শব্দ দুটো পূর্ণ clause-কে এক বাক্যে জোড়ে: and (আর/এবং — যোগ), but (কিন্তু — বিপরীত), so (তাই — ফলাফল), because (কারণ)। বাংলায় আমরা 'যেহেতু... সেহেতু', 'যদিও... তবু' — জোড়া মিলিয়ে বলি, কিন্তু ইংরেজিতে এক সম্পর্কে একটাই connector বসে: because বললে so আসবে না, although বললে but আসবে না। আরেকটা নিয়ম মনে রাখুন: দুটো পূর্ণ বাক্য শুধু কমা দিয়ে জোড়া যায় না (comma splice) — মাঝে and/but/so/because-এর মতো সংযোগ শব্দ লাগবেই।",
            en: "These four words join two full clauses inside one sentence: and (addition), but (contrast), so (result), because (reason). English allows only ONE connector per relationship — no 'because... so', no 'although... but' — and two full sentences can never be joined by a comma alone (that is a comma splice); you need a real conjunction.",
            hi: "ये चार शब्द दो पूर्ण clause को एक वाक्य में जोड़ते हैं: and (जोड़), but (विरोध), so (परिणाम), because (कारण)। अंग्रेज़ी में एक संबंध के लिए केवल एक connector — 'because... so' या 'although... but' नहीं चलता, और दो पूर्ण वाक्य केवल कॉमा से नहीं जुड़ते।",
          },
          examples: [
            {
              wrong: "Because he was ill, so he stayed at home.",
              right: "Because he was ill, he stayed at home.",
              note: {
                bn: "বাংলায় 'কারণ... তাই' দুটোই বলি, কিন্তু ইংরেজিতে এক সম্পর্কে একটাই শব্দ: because থাকলে so বাদ, so থাকলে because বাদ।",
                en: "Bengali uses both 'because' and 'so', but English takes only one connector per relationship: drop 'so' when 'because' is already there.",
                hi: "बांग्ला में 'कारण... इसलिए' दोनों आते हैं, पर अंग्रेज़ी में एक ही connector: because है तो so नहीं।",
              },
            },
            {
              wrong: "Although it was raining, but we went out.",
              right: "Although it was raining, we went out.",
              note: {
                bn: "'যদিও... কিন্তু' জোড়া বাংলার প্যাটার্ন; although-ই but-এর কাজ করে নেয়, তাই but রাখলে দ্বিগুণ সংযোগ হয়ে যায়।",
                en: "'Although' already means 'but', so adding 'but' doubles the contrast marker — keep only one.",
                hi: "'Although' में 'but' का अर्थ पहले से है — दोनों साथ नहीं चलते, केवल एक रखें।",
              },
            },
            {
              wrong: "I called her many times, she didn't answer.",
              right: "I called her many times, but she didn't answer.",
              note: {
                bn: "দুটো পূর্ণ বাক্য একটা কমা দিয়ে জোড়া যায় না — এটা comma splice; সম্পর্ক অনুযায়ী but/so/because/and বসাতে হবে।",
                en: "Joining two full sentences with only a comma is a comma splice — insert a conjunction such as 'but', 'so' or 'because'.",
                hi: "दो पूर्ण वाक्य केवल कॉमा से नहीं जुड़ते (comma splice) — but/so/because जैसा conjunction चाहिए।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "আনুষ্ঠানিক কানেক্টর: however, therefore, although",
            en: "Formal connectors: however, therefore, although",
            hi: "औपचारिक कनेक्टर: however, therefore, although",
          },
          body: {
            bn: "however হলো but-এর আনুষ্ঠানিক রূপ, therefore হলো so-এর — কিন্তু এরা conjunction নয়, adverb। তাই এরা দুই clause জোড়তে পারে না; নতুন বাক্য শুরু করে পরে কমা নেয়: 'I was tired. However, I kept working.' চাইলে সেমিকোলন দিয়েও জোড়া যায়: 'I was tired; however, I kept working.' বাক্যের শুরুতে however/therefore/moreover-এর পরে কমা বাধ্যতামূলক — এটা বাদ দিলে লেখা তৎক্ষণাৎ লাফিয়ে আসে। সহজ রাস্তা: কথ্য ভাষায় but/so-ই যথেষ্ট, আনুষ্ঠানিক লেখায় however/therefore।",
            en: "'However' and 'therefore' are the formal equivalents of 'but' and 'so' — but they are adverbs, not conjunctions. They start a NEW sentence and take a comma after them: 'I was tired. However, I kept working.' (or after a semicolon). A comma is mandatory after a sentence-initial however/therefore/moreover. In everyday speech, but/so are perfectly fine; keep however/therefore for formal writing.",
            hi: "'However' और 'therefore' क्रमशः 'but' और 'so' के औपचारिक रूप हैं — पर ये adverb हैं, conjunction नहीं। नया वाक्य शुरू करके उनके बाद कॉमा लगाएँ: 'I was tired. However, I kept working.' रोज़मर्रा की बोलचाल में but/so ही काफ़ी हैं।",
          },
          examples: [
            {
              wrong: "I was tired, however I kept working.",
              right: "I was tired. However, I kept working.",
              note: {
                bn: "however কনজাংশন নয় — কমা দিয়ে দুই clause জোড়তে পারে না; নতুন বাক্য শুরু করুন আর however-এর পরে কমা দিন।",
                en: "'However' cannot join clauses with just a comma — end the sentence, then start a new one with 'However,' .",
                hi: "'However' केवल कॉमा से clause नहीं जोड़ सकता — वाक्य खत्म करके नया शुरू करें और कॉमा लगाएँ।",
              },
            },
            {
              wrong: "However I don't agree with you.",
              right: "However, I don't agree with you.",
              note: {
                bn: "বাক্যের শুরুতে however/therefore/moreover-এর পরে কমা আবশ্যক — এটা connector-দের পরিচিতি চিহ্ন।",
                en: "A sentence-initial linking adverb always takes a comma after it — it marks the connector as a signal word.",
                hi: "वाक्य-प्रारंभिक linking adverb के बाद कॉमा अनिवार्य है।",
              },
            },
            {
              wrong: "It rained heavily, therefore the match was cancelled.",
              right: "It rained heavily. Therefore, the match was cancelled.",
              note: {
                bn: "therefore-ও however-এর মতো adverb — কমা-জোড়া চলবে না; নতুন বাক্য + কমা, নয়তো সহজ করে so ব্যবহার করুন।",
                en: "'Therefore' behaves like 'however' — new sentence plus comma (or use the simple conjunction 'so').",
                hi: "'Therefore' भी 'however' जैसा ही व्यवहार करता है — नया वाक्य + कॉमा, या सरल 'so' इस्तेमाल करें।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "despite নাকি although — এক অর্থ, আলাদা ব্যাকরণ",
            en: "Despite vs although — same meaning, different grammar",
            hi: "despite बनाम although — अर्थ वही, व्याकरण अलग",
          },
          body: {
            bn: "দুটোর অর্থই 'সত্ত্বেও', কিন্তু পরে যা বসে তাতে ফারাক: although-এর পরে পূর্ণ clause (subject + verb) লাগে — 'Although it rained, we played'; despite / in spite of-এর পরে লাগে noun, pronoun বা -ing রূপ — 'Despite the rain, we played', 'Despite being tired, he smiled'। আরেকটা ক্লাসিক ভুল: 'despite of' — এমন কিছু নেই; হয় despite (of ছাড়া), নয় in spite of (of সহ)।",
            en: "Both mean 'not prevented by', but what follows differs: although takes a full clause (subject + verb) — 'Although it rained, we played'; despite / in spite of takes a noun, pronoun or -ing form — 'Despite the rain, we played', 'Despite being tired, he smiled'. And there is no 'despite of' — either despite (no of) or in spite of (with of).",
            hi: "दोनों का अर्थ 'के बावजूद', पर जो बाद में आता है वह अलग: although के बाद पूर्ण clause (subject + verb); despite / in spite of के बाद noun या -ing। 'despite of' अस्तित्व में नहीं है — या तो despite, या in spite of।",
          },
          examples: [
            {
              wrong: "Despite he was poor, he was honest.",
              right: "Despite being poor, he was honest.",
              note: {
                bn: "despite-এর পরে subject + verb আসে না; noun বা -ing লাগবে — অথবা পুরো clause চাইলে although ব্যবহার করুন।",
                en: "'Despite' cannot be followed by a clause — use a noun or -ing form, or switch to 'although' for the full clause.",
                hi: "'Despite' के बाद clause नहीं आता — noun या -ing रूप लगाएँ, या 'although' इस्तेमाल करें।",
              },
            },
            {
              wrong: "Despite of the rain, we played on.",
              right: "In spite of the rain, we played on.",
              note: {
                bn: "'despite of' নেই — of রাখলে in spite of হবে, of বাদ দিলে শুধু despite।",
                en: "'Despite of' does not exist — write either 'despite' or 'in spite of'.",
                hi: "'Despite of' गलत है — या तो 'despite' लिखें, या 'in spite of'।",
              },
            },
            {
              wrong: "Although of his illness, he came to class.",
              right: "Despite his illness, he came to class.",
              note: {
                bn: "although শুধু পূর্ণ clause ধরে; শুধু noun থাকলে (of সহ বা ছাড়া) despite/in spite of বসে।",
                en: "'Although' must govern a whole clause; when only a noun is available, use despite / in spite of.",
                hi: "'Although' केवल पूर्ण clause लेता है; केवल noun हो तो despite / in spite of इस्तेमाल करें।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "'and'-এর অতিরিক্ত ব্যবহার কমান",
            en: "Break the 'and' habit",
            hi: "'and' की आदत तोड़ें",
          },
          body: {
            bn: "বাংলা গল্পে পরপর বাক্য 'আর' দিয়ে জোড়া হয় — সেই অভ্যাস ইংরেজিতে নিয়ে গেলে প্রতিটা বাক্য and-এ চলে যায়, আর লেখা শিশুসুলভ শোনায়। সমাধান তিনটা: (১) একই কর্তার কাজগুলো কমা-তালিকায় ভাগ করুন; (২) যোগ বোঝাতে also, too, as well, in addition; সময়ধারায় then, after that, later; কারণে because/since/as ব্যবহার করুন; (৩) লম্বা and-শৃঙ্খল ভেঙে দুটো ছোট বাক্য করুন — ছোট বাক্যও শক্তিশালী হয়।",
            en: "Bengali chains sentences with 'আর', so English sentences end up joined by 'and... and... and', which sounds childish. Three fixes: (1) put a list of actions of the same subject into a comma series; (2) vary your connectors — also/too/as well for addition, then/after that/later for sequence, because/since/as for reason; (3) split long and-chains into two short sentences — short sentences are powerful too.",
            hi: "बांग्ला वाक्य 'और' से जुड़ते हैं, जिससे अंग्रेज़ी में 'and... and... and' की श्रृंखला बनती है — जो बच्चों जैसा लगता है। तीन उपाय: (1) एक ही subject के कामों को कॉमा-सूची में लिखें; (2) connectors बदलें — also/too, then/after that, because/since; (3) लंबी श्रृंखला तोड़कर छोटे वाक्य बनाएँ।",
          },
          examples: [
            {
              wrong: "I woke up and I brushed my teeth and I had breakfast and I went to office.",
              right: "I woke up, brushed my teeth, had breakfast and went to the office.",
              note: {
                bn: "একই কর্তার ধারাবাহিক কাজগুলো কমা-তালিকায় পড়ে; শেষ দুই আইটেমের মাঝেই and বসে — বাকি and-গুলো মুছে যায়।",
                en: "Actions of the same subject become a comma series; 'and' appears only once, before the last item.",
                hi: "एक ही subject के क्रमिक काम कॉमा-सूची बनते हैं; 'and' केवल अंतिम आइटम से पहले आता है।",
              },
            },
            {
              wrong: "He is smart and he is honest and he is hardworking.",
              right: "He is smart, honest and hardworking.",
              note: {
                bn: "একই কর্তাকে বর্ণনা করা adjective-গুলো পাশাপাশি বসে, and একবারই — প্রতিটার আগে he is দোহরাতে হয় না।",
                en: "Adjectives describing the same subject share one verb phrase; repeat 'he is' only once at the start.",
                hi: "एक ही subject के विशेषण एक साथ बैठते हैं; 'and' केवल एक बार।",
              },
            },
            {
              wrong: "I bought a new phone and my old one was slow.",
              right: "I bought a new phone because my old one was slow.",
              note: {
                bn: "and শুধু যোগ বোঝায়; কারণ-সম্পর্ক বোঝালে because/since/as লাগবে — নইলে অর্থ আবছা হয়ে থাকে।",
                en: "'And' only adds; when the second clause explains WHY, use because / since / as.",
                hi: "'And' केवल जोड़ता है; कारण बताने के लिए because / since / as चाहिए।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "লেখার পরে প্রতিটা বাক্যে and কতবার এলো গুনুন; প্রতি বাক্যে একবারের বেশি and হলে বাক্য ভাগ করুন বা অন্য connector বসান।",
          en: "After writing, count the 'and's in each sentence; more than one means you should split the sentence or switch connectors.",
          hi: "लिखने के बाद हर वाक्य में 'and' गिनें; एक से अधिक हो तो वाक्य तोड़ें या connector बदलें।",
        },
        {
          bn: "'যদিও... কিন্তু', 'কারণ... তাই' জোড়া ইংরেজিতে আসবেই না — although/because লেখামাত্র অন্যটা মুছে দিন।",
          en: "Never translate the Bengali pairs 'although... but' or 'because... so' — write one connector and delete the other.",
          hi: "'although... but' या 'because... so' जोड़ी अंग्रेज़ी में न लाएँ — एक connector लिखें, दूसरा मिटाएँ।",
        },
        {
          bn: "however/therefore বসালে আগের বাক্য ডট দিয়ে শেষ করুন, নতুন বাক্যে শুরু করুন, আর পরে কমা দিন — তিন ধাপ মনে রাখুন।",
          en: "For however/therefore remember three steps: full stop, new sentence, comma after the connector.",
          hi: "however/therefore के लिए तीन कदम याद रखें: फुल स्टॉप, नया वाक्य, connector के बाद कॉमा।",
        },
        {
          bn: "প্রতিদিন এক প্যারা লিখুন, তারপর সেটার আনুষ্ঠানিক সংস্করণ বানান — so→therefore, but→however, although-এর জায়গায় despite + noun; এটাই সেরা connector-অনুশীলন।",
          en: "Each day rewrite a paragraph formally — so→therefore, but→however, although→despite + noun; that is the best connector workout.",
          hi: "रोज़ एक पैराग्राफ का औपचारिक रूप लिखें — so→therefore, but→however, although→despite + noun; यही सबसे अच्छा अभ्यास है।",
        },
      ],
    },
  },

  /* ── 2. Phrasal Verbs in Daily Talk ────────────────────────────────── */
  {
    topic: "Phrasal Verbs in Daily Talk",
    level: "intermediate",
    title: "Phrasal Verbs in Daily Talk (Intermediate)",
    unit: 0,
    data: {
      title: {
        bn: "ফ্রেজাল ভার্ব — দৈনন্দিন কথায় (মধ্যম স্তর)",
        en: "Phrasal Verbs in Daily Talk (Intermediate)",
        hi: "फ्रेज़ल वर्ब — दैनिक बातचीत में (मध्यम स्तर)",
      },
      intro: {
        bn: "বাংলাভাষী শিক্ষার্থীরা সাধারণত বড় বড় আনুষ্ঠানিক শব্দ (postpone, illuminate, arise) মুখস্থ করেন, কিন্তু নেটিভ স্পিকারের দৈনন্দিন কথায় ভরা phrasal verb-এ: get up, turn on, put off, look after, run out of। 'ফ্যান অন করো' বলতে গিয়ে 'Please on the fan' — এই ধরনের ভুলও এখান থেকেই আসে। এই পাঠে phrasal verb-এর প্রকৃতি, separable/inseparable নিয়ম আর দৈনন্দিন ক্লাস্টার শিখব।",
        en: "Native speakers fill daily talk with phrasal verbs — verb + little particle — instead of formal Latinate words: get up, turn on, put off, look after, run out of. This lesson covers what phrasal verbs are, the separable vs inseparable rule (turn it on, never turn on it), everyday clusters, and the traps Bengali speakers fall into.",
        hi: "नेटिव स्पीकर रोज़मर्रा की बात में औपचारिक शब्दों की बजाय phrasal verbs का इस्तेमाल करते हैं: get up, turn on, put off, look after, run out of। इस पाठ में phrasal verbs का स्वभाव, separable/inseparable नियम (turn it on, कभी turn on it नहीं), रोज़मर्रा के समूह और सामान्य गलतियाँ सीखेंगे।",
      },
      sections: [
        {
          heading: {
            bn: "Phrasal verb কী ও কেন জরুরি",
            en: "What a phrasal verb is — and why you need them",
            hi: "Phrasal verb क्या है — और क्यों ज़रूरी है",
          },
          body: {
            bn: "Phrasal verb = verb + ছোট preposition/adverb (particle), আর পুরো জুটিটা মিলে এমন অর্থ বানায় যা আলাদা শব্দ দুটো থেকে অনুমান করা যায় না: give up (হাল ছাড়া — 'দান করে উপরে' নয়!), find out (খুঁজে বের করা), get up (বিছানা থেকে ওঠা)। বাংলায় এই অর্থগুলো এক ক্রিয়ায় চলে আসে ('উঠে পড়া', 'ছেড়ে দেওয়া'), তাই অনুবাদ করতে গিয়ে ক্রিয়া-particle জুটি ভেঙে যায়। মনে রাখুন: phrasal verb-কে একক শব্দের মতো মুখস্থ করুন, অংশ ধরে নয়। নাটক, YouTube, অফিসের আড্ডা — সব জায়গায় এরাই প্রথম পছন্দ।",
            en: "A phrasal verb = verb + particle (a small adverb or preposition), and the pair makes a new meaning you cannot guess from the parts: give up (stop trying), find out (discover), get up (leave the bed). Because Bangla often packs the same meaning into one verb ('উঠে পড়া'), learners translate word by word and the pair breaks. Learn each phrasal verb as a single unit. In films, YouTube and office chatter, phrasal verbs are the default choice.",
            hi: "Phrasal verb = verb + particle, और पूरी जोड़ी का नया अर्थ होता है जिसे अलग-अलग हिस्सों से अनुमान नहीं लगाया जा सकता: give up (हार मानना), find out (पता लगाना), get up (बिस्तर से उठना)। हर phrasal verb को एक इकाई की तरह याद करें। फ़िल्म, YouTube और ऑफिस की बातचीत में यही पहली पसंद हैं।",
          },
          examples: [
            {
              wrong: "Please on the fan.",
              right: "Please turn on the fan.",
              note: {
                bn: "বাংলায় 'অন করা' এক ক্রিয়ার মতো ব্যবহৃত হয়; ইংরেজিতে particle (on) একা ক্রিয়া হয় না — turn on / switch on জুটিটা লাগবে।",
                en: "In Bangla 'অন করা' works as one verb, but in English the particle 'on' can never act alone — you need the pair turn on / switch on.",
                hi: "बांग्ला में 'ऑन करना' एक क्रिया जैसा चलता है, पर अंग्रेज़ी में 'on' अकेले क्रिया नहीं है — turn on / switch on जोड़ी चाहिए।",
              },
            },
            {
              wrong: "Every morning I arise from my bed at six.",
              right: "Every morning I get up at six.",
              note: {
                bn: "দৈনন্দিন কথায় 'ওঠা' বোঝাতে নেটিভরা get up বলেন; arise সাহিত্যিক/আনুষ্ঠানিক (সমস্যা উদ্ভূত হওয়া) অর্থে চলে।",
                en: "For leaving the bed, everyday English uses get up; 'arise' is literary/formal (a problem arose).",
                hi: "बिस्तर छोड़ने के लिए रोज़मर्रा की अंग्रेज़ी में get up बोलते हैं; 'arise' साहित्यिक/औपचारिक है।",
              },
            },
            {
              wrong: "The meeting was cancelled, so we will do it next week.",
              right: "The meeting was put off until next week.",
              note: {
                bn: "'মুলতবি রাখা' বোঝাতে কথায় put off বেশি চলে; postpone ঠিক কিন্তু আনুষ্ঠানিক শোনায়। put off until + সময় — কখন পর্যন্ত তা-ও বলুন।",
                en: "In speech, put off is the natural choice for postponing; postpone sounds formal. Add 'until' + time to say how long it is pushed.",
                hi: "बोलचाल में स्थगित करने के लिए put off स्वाभाविक है; postpone औपचारिक लगता है। 'until' + समय जोड़ें।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "আলগা নাকি আটকে থাকা? Separable vs inseparable",
            en: "Separable vs inseparable — where does the object go?",
            hi: "Separable बनाम inseparable — object कहाँ जाए?",
          },
          body: {
            bn: "Separable phrasal verb-এ object মাঝখানে বা শেষে দুই জায়গাতেই যেতে পারে: turn on the light / turn the light on। কিন্তু object যদি pronoun হয় (it, him, her, them), তাহলে মাঝখানেই বাধ্যতামূলক: turn it on — কখনো 'turn on it' নয়। Inseparable phrasal verb-এ ক্রিয়া-particle সবসময় পাশাপাশি থাকে: look after the baby / look after her — 'look her after' ভুল। তিন অংশের phrasal verb (verb + adverb + preposition) যেমন run out of, put up with, look forward to — এরাও inseparable: 'ran out of milk', কখনো 'ran of milk out' নয়।",
            en: "With SEPARABLE phrasal verbs the object can sit in the middle or at the end: turn on the light / turn the light on — but a pronoun object MUST go in the middle: turn it on, never 'turn on it'. With INSEPARABLE ones the verb and particle always stay together: look after the baby / look after her, never 'look her after'. Three-part phrasal verbs (verb + adverb + preposition) like run out of, put up with, look forward to are also inseparable.",
            hi: "SEPARABLE phrasal verbs में object बीच में या अंत में दोनों जगह जा सकता है: turn on the light / turn the light on — पर pronoun object हमेशा बीच में: turn it on, कभी 'turn on it' नहीं। INSEPARABLE में क्रिया-particle साथ रहते हैं: look after her, कभी 'look her after' नहीं। तीन-भाग वाले (run out of, look forward to) भी inseparable हैं।",
          },
          examples: [
            {
              wrong: "It's cold in here. Turn on it, please.",
              right: "It's cold in here. Turn it on, please.",
              note: {
                bn: "Separable phrasal verb-এর object pronoun হলে মাঝখানেই বসে — 'it' সবসময় turn আর on-এর মাঝে; এটা ইংরেজিতে অনড় নিয়ম।",
                en: "With a separable phrasal verb, a pronoun object must sit in the middle — 'it' always goes between 'turn' and 'on'.",
                hi: "Separable phrasal verb में pronoun object बीच में ही बैठता है — 'it' हमेशा 'turn' और 'on' के बीच।",
              },
            },
            {
              wrong: "Can you look my dog after this weekend?",
              right: "Can you look after my dog this weekend?",
              note: {
                bn: "look after inseparable — after কে কোনোভাবেই আলাদা করা যায় না; object সবসময় পুরো জুটির পরে।",
                en: "'Look after' is inseparable — the particle never splits from the verb, and the object always follows the whole pair.",
                hi: "'Look after' inseparable है — particle कभी अलग नहीं होता, object पूरी जोड़ी के बाद आता है।",
              },
            },
            {
              wrong: "Our sugar finished yesterday.",
              right: "We ran out of sugar yesterday.",
              note: {
                bn: "'ফুরিয়ে গেছে' বোঝাতে run out of — তিন অংশ একসাথেই থাকে; বাংলার 'শেষ হওয়া' অনুবাদ করে 'finished' বললে অর্থ গুলিয়ে যায়।",
                en: "For 'we have none left', English runs out of something — the three parts stay together; translating 'শেষ হওয়া' as 'finished' confuses the meaning.",
                hi: "'खत्म हो जाना' के लिए run out of — तीनों भाग साथ रहते हैं; 'finished' कहने पर अर्थ उलझ जाता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "দৈনন্দিন জীবনের ক্লাস্টার",
            en: "Daily-life clusters",
            hi: "दैनिक जीवन के समूह",
          },
          body: {
            bn: "তালিকা ধরে না শিখে জীবনের সময়-বিভাজন ধরে শিখুন। সকাল: wake up (ঘুম ভাঙা), get up (উঠে পড়া), get dressed, put on (পরা), take off (খোলা)। কাজ-পড়াশোনা: put off (মুলতবি), give up (হাল ছাড়া), find out (জেনে নেওয়া), look forward to (আগ্রহে অপেক্ষা করা)। ঘর-বাজার: turn on/off, clean up, pick up (কুড়ানো; আর কাউকে গাড়িতে তোলাও!)। প্রতিদিন একটা ক্লাস্টার নিজের দিনের বর্ণনায় বসিয়ে দেখুন — প্রসঙ্গে শেখা phrasal verb মুখেই চলে আসে।",
            en: "Learn phrasal verbs in life-clusters, not word lists. Morning: wake up, get up, get dressed, put on, take off. Work and study: put off, give up, find out, look forward to. Home: turn on/off, clean up, pick up (lift from the floor — or collect someone by car!). Each day, drop one cluster into a description of your own day; phrasal verbs learned in context come out naturally.",
            hi: "सूची नहीं, जीवन-समूह से सीखें। सुबह: wake up, get up, get dressed, put on, take off। काम-पढ़ाई: put off, give up, find out, look forward to। घर: turn on/off, clean up, pick up। रोज़ एक समूह अपने दिन के वर्णन में लगाएँ; संदर्भ में सीखे phrasal verbs स्वाभाविक रूप से मुँह पर आते हैं।",
          },
          examples: [
            {
              wrong: "After waking up, I wear my uniform.",
              right: "After getting up, I put on my uniform.",
              note: {
                bn: "'পরার মুহূর্ত' বোঝাতে put on (কাজ হিসেবে); wear বোঝায় 'পরা অবস্থায় আছি' — 'আমি নীল শার্ট পরে আছি' = I am wearing a blue shirt।",
                en: "The moment of dressing is put on (an action); 'wear' describes the state of having it on — 'I am wearing a blue shirt'.",
                hi: "पहनने के क्षण के लिए put on (क्रिया); 'wear' पहने रहने की अवस्था बताता है — 'I am wearing a blue shirt'।",
              },
            },
            {
              wrong: "I am waiting for my exam results with excitement.",
              right: "I am looking forward to my exam results.",
              note: {
                bn: "'উটকো খেয়ে অপেক্ষা' = look forward to; পরে noun বা -ing বসে — 'I'm looking forward to seeing you'।",
                en: "Excited waiting is look forward to, followed by a noun or -ing form — 'I'm looking forward to seeing you'.",
                hi: "उत्साह से प्रतीक्षा = look forward to; इसके बाद noun या -ing आता है — 'I'm looking forward to seeing you'।",
              },
            },
            {
              wrong: "I always delay my homework to tomorrow.",
              right: "I always put off my homework until tomorrow.",
              note: {
                bn: "মুলতবি করার জন্য put off — সঙ্গে until/until tomorrow জোড়া স্বাভাবিক; 'delay to' এমন কাঠামো নেই।",
                en: "Postponing is put off, naturally paired with 'until tomorrow'; the pattern 'delay to' does not exist.",
                hi: "टालने के लिए put off, जो 'until tomorrow' के साथ स्वाभाविक है; 'delay to' जैसा पैटर्न नहीं है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "সাধারণ ফাঁদ: অতিরিক্ত preposition আর অনুবাদ",
            en: "Common traps: extra prepositions and translation",
            hi: "सामान्य फँदे: अतिरिक्त preposition और अनुवाद",
          },
          body: {
            bn: "বাংলার preposition অনুসরণ করলে বাড়তি preposition ঢুকে পড়ে: 'discuss about' (ভুল — discuss alone), 'enter into the room' (ভুল — enter the room), 'marry with' (ভুল — marry someone)। উল্টো ফাঁদও আছে: 'listen me' বললে to হারিয়ে যায়, অথচ listen to ছাড়া বাক্য অসম্পূর্ণ। আরেকটা সূক্ষ্ম জায়গা: look forward to-র to preposition, তাই পরে -ing বসে — 'look forward to seeing you', 'to see' নয়। নিয়ম হলো: প্রতিটা phrasal verb-এর নিজের কাঠামো আছে; বাংলার সাথে মেলাতে যাবেন না।",
            en: "Following Bangla prepositions sneaks extras into English: 'discuss about' (wrong — discuss alone), 'enter into the room' (wrong — enter the room), 'marry with' (wrong — marry someone). The reverse trap exists too: 'listen me' loses the compulsory 'to'. And in look forward to, the 'to' is a preposition, so it takes -ing: 'look forward to seeing you', not 'to see'. Rule: every phrasal verb has its own pattern — do not map it onto Bangla.",
            hi: "बांग्ला preposition का अनुसरण करने से अंग्रेज़ी में अतिरिक्त preposition घुस जाता है: 'discuss about' (गलत), 'enter into the room' (गलत), 'marry with' (गलत)। उलटा फँदा भी है: 'listen me' में अनिवार्य 'to' छूट जाता है। look forward to में 'to' preposition है, इसलिए -ing लगता है: 'look forward to seeing you'।",
          },
          examples: [
            {
              wrong: "Please listen me carefully.",
              right: "Please listen to me carefully.",
              note: {
                bn: "বাংলায় 'শোনো আমাকে' — to-এর দরকার বোঝা যায় না; ইংরেজিতে listen-এর পরে to আবশ্যক।",
                en: "Bangla says 'শোনো আমাকে' with no preposition, but English 'listen' always needs 'to' before its object.",
                hi: "बांग्ला में 'सुनो मुझे' — preposition नहीं, पर अंग्रेज़ी में listen के बाद to आवश्यक है।",
              },
            },
            {
              wrong: "He entered into the classroom quietly.",
              right: "He entered the classroom quietly.",
              note: {
                bn: "ঘরে ঢোকা = enter the room; enter into চলে শুধু আলংকারিক অর্থে (enter into an agreement) — শারীরিক প্রবেশে নয়।",
                en: "Walking in is 'enter the room'; 'enter into' survives only in figurative uses (enter into an agreement).",
                hi: "कमरे में प्रवेश = 'enter the room'; 'enter into' केवल लाक्षणिक अर्थ में चलता है (enter into an agreement)।",
              },
            },
            {
              wrong: "I am looking forward to see you soon.",
              right: "I am looking forward to seeing you soon.",
              note: {
                bn: "এখানে to প্রত্যয় ( infinitive-এর to) নয়, preposition — preposition-এর পরে ক্রিয়া হলে -ing রূপ বসে।",
                en: "This 'to' is a preposition, not the infinitive marker — so the verb after it takes the -ing form.",
                hi: "यहाँ 'to' infinitive-चिह्न नहीं, preposition है — इसलिए उसके बाद क्रिया का -ing रूप आता है।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "প্রতিদিন ৫টা phrasal verb নিজের কাজে বসিয়ে বলুন — 'I'm putting off this call', 'Let me turn off the light' — প্রসঙ্গ ছাড়া শেখা মনে থাকে না।",
          en: "Use five phrasal verbs daily about your own tasks — 'I'm putting off this call', 'Let me turn off the light' — context is what makes them stick.",
          hi: "रोज़ पाँच phrasal verbs अपने कामों में बोलें — 'I'm putting off this call', 'Let me turn off the light' — संदर्भ ही उन्हें याद रखाता है।",
        },
        {
          bn: "নতুন phrasal verb শিখলে pronoun-টেস্ট করুন: 'turn it on' চলে? separable। 'look after it'-ই একমাত্র রূপ? inseparable — নোটের পাশে লিখে রাখুন।",
          en: "Test every new phrasal verb with a pronoun: does 'verb it particle' work? Separable. Is only 'verb particle it' possible? Inseparable — note it down.",
          hi: "हर नए phrasal verb का pronoun-टेस्ट करें: 'verb it particle' चलता है? Separable। केवल 'verb particle it'? Inseparable — नोट कर लें।",
        },
        {
          bn: "নাটক-ভিডিওতে শোনা phrasal verb সঙ্গে সঙ্গে একটা বাস্তব বাক্যে ব্যবহার করুন; সাবটাইটেল পড়লে দুটো বাস্তব উদাহরণ নোট করুন।",
          en: "When you hear a phrasal verb in a show, instantly use it in a real sentence about your life; note two authentic examples from the subtitles.",
          hi: "शो में सुना phrasal verb तुरंत अपनी असली वाक्य में इस्तेमाल करें; सबटाइटल से दो असली उदाहरण नोट करें।",
        },
        {
          bn: "নিজের দিনকে তিন ক্লাস্টারে বলুন: সকাল (get up, put on), কাজ (find out, put off), রাত (turn off, pick up) — ক্লাস্টার-প্র্যাকটিসেই মুখে চলে আসে।",
          en: "Describe your day in three clusters: morning (get up, put on), work (find out, put off), night (turn off, pick up) — cluster practice puts them on your tongue.",
          hi: "अपना दिन तीन समूहों में बोलें: सुबह (get up, put on), काम (find out, put off), रात (turn off, pick up) — समूह-अभ्यास से ही मुँह पर आते हैं।",
        },
      ],
    },
  },

  /* ── 3. Present Perfect Continuous ─────────────────────────────────── */
  {
    topic: "Present Perfect Continuous",
    level: "intermediate",
    title: "Present Perfect Continuous (Intermediate)",
    unit: 0,
    data: {
      title: {
        bn: "প্রেজেন্ট পারফেক্ট কন্টিনিউয়াস (মধ্যম স্তর)",
        en: "Present Perfect Continuous (Intermediate)",
        hi: "प्रेज़ेंट परफेक्ट कंटिन्यूअस (मध्यम स्तर)",
      },
      intro: {
        bn: "'আমি ২০১৯ সাল থেকে এখানে কাজ করছি' — ইংরেজিতে এর জন্য লাগে have been + -ing: I have been working here since 2019। কিন্তু বাংলার 'করছি' শুনে বেশিরভাগ শিক্ষার্থীই বলেন 'I am working here since 2019' — এটাই মধ্যম স্তরের সবচেয়ে কমন ভুল। এই পাঠে কখন have been -ing, কখন শুধু have + V3, আর for/since-এর পার্থক্য পরিষ্কার হয়ে যাবে।",
        en: "'I have been working here since 2019' — the present perfect continuous shows an action that started in the past and is still running. Bengali's 'করছি' ending tempts learners to say 'I am working here since 2019', which is wrong. This lesson covers the form, for vs since, present perfect simple vs continuous, and the stative-verb exceptions.",
        hi: "'I have been working here since 2019' — present perfect continuous वह क्रिया दिखाता है जो अतीत में शुरू होकर अभी भी चल रही है। 'कर रहा हूँ' सुनकर शिक्षार्थी 'I am working here since 2019' कह देते हैं, जो गलत है। इस पाठ में रूप, for बनाम since, perfect simple बनाम continuous और stative-verb अपवाद सीखेंगे।",
      },
      sections: [
        {
          heading: {
            bn: "গঠন ও অর্থ: অতীতে শুরু, এখনও চলছে",
            en: "Form and meaning: started in the past, still going",
            hi: "रूप और अर्थ: अतीत में शुरुआत, अभी भी जारी",
          },
          body: {
            bn: "গঠন: have/has been + verb-ing। অর্থ: কাজটা অতীতের কোনো বিন্দুতে শুরু হয়ে এখনও চলছে, অথবা সম্প্রতি থেমেছে কিন্তু তার প্রভাব দেখা যাচ্ছে। 'I am teaching at this school' বলে বোঝায় এখন ক্লাস নিচ্ছি; আর 'I have been teaching at this school since 2020' বোঝায় ২০২০ থেকে এই স্কুলেই শিক্ষকতা করছি — সময়কাল যুক্ত হলেই গঠন বদলায়। সংকেত শব্দ: since, for, how long, all day, lately — এদের দেখলেই perfect continuous ভাবুন।",
            en: "Form: have/has been + verb-ing. Meaning: the action began at some point in the past and is still running (or has just stopped, leaving visible evidence). 'I am teaching at this school' means right now; 'I have been teaching at this school since 2020' stretches back to 2020 — add a duration and the structure changes. Signal words: since, for, how long, all day, lately — when you see them, think perfect continuous.",
            hi: "रूप: have/has been + verb-ing। अर्थ: कार्य अतीत में शुरू होकर अभी भी चल रहा है (या अभी-अभी रुका है, उसका असर दिख रहा है)। 'I am teaching' का मतलब अभी; 'I have been teaching since 2020' का मतलब 2020 से अब तक — अवधि जुड़ते ही रचना बदल जाती है। संकेत-शब्द: since, for, how long, all day, lately।",
          },
          examples: [
            {
              wrong: "I am working here since 2019.",
              right: "I have been working here since 2019.",
              note: {
                bn: "বাংলার 'করছি' শুনে plain continuous বসে যায়, কিন্তু since/for-সহ সময়কাল থাকলে have been + -ing বাধ্যতামূলক।",
                en: "The Bangla 'করছি' ending tempts a plain continuous, but a duration with since/for demands have been + -ing.",
                hi: "'कर रहा हूँ' सुनकर साधारण continuous बैठ जाता है, पर since/for के साथ have been + -ing अनिवार्य है।",
              },
            },
            {
              wrong: "She is learning English for two years.",
              right: "She has been learning English for two years.",
              note: {
                bn: "'দুই বছর ধরে' = সময়কাল; বর্তমান continuous শুধু এই মুহূর্তের কাজ বোঝায়, ধারাবাহিকতা নয়।",
                en: "'For two years' is a duration; the plain continuous covers only this moment, not the stretch of time.",
                hi: "'दो साल से' अवधि है; साधारण continuous केवल इस क्षण का काम बताता है, समय-विस्तार नहीं।",
              },
            },
            {
              wrong: "How long do you wait for the bus?",
              right: "How long have you been waiting for the bus?",
              note: {
                bn: "'কতক্ষণ ধরে' জিজ্ঞেস করলে How long + have/has been -ing — শুরুর সময় থেকে এই মুহূর্ত পর্যন্ত পুরো অপেক্ষাটাই প্রশ্নের ভেতরে।",
                en: "'How long...' asks about the stretch from the start until now — that needs have/has been + -ing.",
                hi: "'कितनी देर से' पूछने के लिए How long + have/has been + -ing — शुरुआत से अब तक की पूरी प्रतीक्षा प्रश्न में है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "for নাকি since",
            en: "for or since?",
            hi: "for या since?",
          },
          body: {
            bn: "for + সময়ের দৈর্ঘ্য: for two hours, for ten years, for a long time। since + শুরুর বিন্দু: since 2019, since Monday, since I was a child। বাংলায় দুটোই 'থেকে/ধরে' হয়ে যায়, তাই গোলমাল হয়। সূত্রটা এই: ঘড়ির কাঁটা মেপে বললে for, শুরুর তারিখ/মুহূর্ত বললে since। আর since-এর পরে কখনো সময়ের পরিমাণ আসে না — 'since three years' ভুল, 'for three years' ঠিক।",
            en: "for + a length of time: for two hours, for ten years, for a long time. since + the starting point: since 2019, since Monday, since I was a child. Both translate as 'থেকে/ধরে' in Bangla, which causes the mix-up. Shortcut: measure the clock → for; name the start → since. And 'since' is never followed by an amount of time — 'since three years' is wrong.",
            hi: "for + समय की लंबाई: for two hours, for ten years। since + शुरुआत का बिंदु: since 2019, since Monday। दोनों का हिंदी/बांग्ला अनुवाद 'से' होने से गड़बड़ होती है। शॉर्टकट: समय मापें → for; शुरुआत बताएँ → since। 'since three years' गलत है।",
          },
          examples: [
            {
              wrong: "I have been living here since three years.",
              right: "I have been living here for three years.",
              note: {
                bn: "পরিমাণ (three years) মানে দৈর্ঘ্য — for; since-এর পরে বসে শুরুর বিন্দু, মাপ নয়।",
                en: "An amount of time is a length — use 'for'; 'since' introduces the starting point, not a measurement.",
                hi: "समय की मात्रा अवधि है — 'for'; 'since' शुरुआती बिंदु बताता है, माप नहीं।",
              },
            },
            {
              wrong: "He has been working here for 2020.",
              right: "He has been working here since 2020.",
              note: {
                bn: "নির্দিষ্ট শুরুর বছর (2020) = বিন্দু → since; for-এর পরে বিন্দু নয়, ব্যবধান বসে।",
                en: "A specific starting year is a point in time → 'since'; 'for' takes a span, not a point.",
                hi: "निश्चित शुरुआती वर्ष = बिंदु → 'since'; 'for' के बाद अवधि आती है, बिंदु नहीं।",
              },
            },
            {
              wrong: "I know him since our school days.",
              right: "I have known him since our school days.",
              note: {
                bn: "since-এর সাথে অন্তত একটা perfect রূপ দরকার; know stative তাই perfect simple — শুধু 'I know' বললে বাক্যে সময়টা ঝুলে থাকে।",
                en: "A 'since' phrase needs a perfect form; 'know' is stative, so the perfect simple fills it — a bare 'I know' leaves the time dangling.",
                hi: "'since' के साथ perfect रूप चाहिए; know stative है, इसलिए perfect simple — केवल 'I know' पर समय अधूरा लटकता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "Present perfect simple বনাম continuous",
            en: "Present perfect simple vs continuous",
            hi: "Present perfect simple बनाम continuous",
          },
          body: {
            bn: "ফোকাসের ফারাক: continuous বলে 'কাজটা চলছিল/চলছে' — প্রক্রিয়া আর সময়কাল গুরুত্বপূর্ণ (I have been painting the door — সারাদিন রং করার কর্মকাণ্ড); simple বলে 'কাজ শেষ, ফল তৈরি' বা কতটা/কতবার (I have painted the door — এখন নতুন রঙের দরজা দেখা যাচ্ছে)। সংখ্যা বা পরিমাণ বললে সাধারণত simple: I have written three emails। আর সম্প্রতি শেষ হওয়া কাজের চিহ্ন দেখিয়ে অনুমান করতেও continuous চলে: লাল চোখ? — Have you been crying?",
            en: "The difference is focus: the continuous highlights the ACTIVITY and its duration (I have been painting the door — the messy afternoon of work); the simple highlights the RESULT or the amount/number (I have painted the door — now look at the fresh coat; I have written three emails). With numbers or quantities, prefer the simple. The continuous also explains present evidence of a recent activity: red eyes? — Have you been crying?",
            hi: "अंतर फ़ोकस का है: continuous गतिविधि और उसकी अवधि पर ज़ोर देता है (I have been painting the door); simple परिणाम या मात्रा/संख्या पर (I have painted the door; I have written three emails)। संख्या/मात्रा के साथ simple बेहतर। हालिया गतिविधि के प्रमाण समझाने में भी continuous: लाल आँखें? — Have you been crying?",
          },
          examples: [
            {
              wrong: "I have been writing three emails this morning.",
              right: "I have written three emails this morning.",
              note: {
                bn: "সংখ্যা (three) সম্পন্ন কাজের ফল মাপে — perfect simple; continuous-এর ভেতরে গণনা বসে না।",
                en: "A count (three) measures completed results — perfect simple; the continuous does not carry numbers.",
                hi: "संख्या (three) पूर्ण परिणाम मापती है — perfect simple; continuous में गिनती नहीं आती।",
              },
            },
            {
              wrong: "Why are your eyes red? Did you cry?",
              right: "Why are your eyes red? Have you been crying?",
              note: {
                bn: "চোখের লাল ভাব = সম্প্রতি কান্নার চলমান প্রমাণ — এমন অনুমানে perfect continuous-ই স্বাভাবিক; প্রশ্নটা কি আজ কাঁদলেন, এমন নির্দিষ্ট নয়।",
                en: "Red eyes are fresh evidence of ongoing crying — the natural guess is the perfect continuous, not a finished 'did you cry'.",
                hi: "लाल आँखें हालिया रोने का ताज़ा सबूत हैं — ऐसे अनुमान के लिए perfect continuous ही स्वाभाविक है।",
              },
            },
            {
              wrong: "They are playing football for an hour.",
              right: "They have been playing football for an hour.",
              note: {
                bn: "'এক ঘণ্টা ধরে খেলছে' = শুরু থেকে এখন পর্যন্ত ধারাবাহিক কাজ — বর্তমান continuous নয়, perfect continuous।",
                en: "'For an hour' stretches from the past into now — that stretch belongs to the perfect continuous, not the plain continuous.",
                hi: "'एक घंटे से खेल रहे हैं' = अतीत से अब तक की निरंतरता — साधारण continuous नहीं, perfect continuous।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "Stative verb-এর ব্যতিক্রম",
            en: "The stative-verb exceptions",
            hi: "Stative-verb अपवाद",
          },
          body: {
            bn: "know, like, love, want, need, believe, understand, own, have (মালিকানা) — এরা মনের অবস্থা বা মালিকানা বোঝায়, চলমান কর্ম নয়; তাই এদের -ing রূপ হয় না, সময়কাল থাকলেও perfect simple বসে: I have known her for ten years। একই সূত্র বর্তমান continuous-এও খাটে — 'I am knowing him' ঠিক যতটা 'I have been knowing him'। মনে রাখুন: 'অবস্থা বোঝায় এমন ক্রিয়া + সময়কাল = perfect simple'।",
            en: "know, like, love, want, need, believe, understand, own, have (possession) — these describe states of mind or ownership, not actions, so they never take -ing, even with a duration: I have known her for ten years. The same rule holds in the plain continuous — 'I am knowing him' is just as wrong as 'I have been knowing him'. Remember: stative verb + duration = perfect simple.",
            hi: "know, like, love, want, need, believe, understand, own, have (स्वामित्व) — ये मन की अवस्था या स्वामित्व बताते हैं, क्रिया नहीं; इसलिए -ing रूप नहीं लेते, अवधि होने पर भी perfect simple: I have known her for ten years। 'I am knowing him' भी उतना ही गलत है।",
          },
          examples: [
            {
              wrong: "I have been knowing him for five years.",
              right: "I have known him for five years.",
              note: {
                bn: "know stative — continuous রূপ নেই; পাঁচ বছরের সম্পর্ক এক অবস্থা, চলমান কর্ম নয়।",
                en: "'Know' is stative and has no continuous form; a five-year acquaintance is a state, not an activity.",
                hi: "know stative है — continuous रूप नहीं लेता; पाँच साल की जान-पहचान अवस्था है, गतिविधि नहीं।",
              },
            },
            {
              wrong: "How long have you been having this car?",
              right: "How long have you had this car?",
              note: {
                bn: "মালিকানার have stative — 'কতদিন ধরে আছে' বোঝাতে perfect simple: have had।",
                en: "Possessive 'have' is stative — asking about ownership over time uses the perfect simple 'have had'.",
                hi: "स्वामित्व दर्शाने वाला 'have' stative है — समय के साथ perfect simple 'have had' आता है।",
              },
            },
            {
              wrong: "I am wanting to talk to you since yesterday.",
              right: "I have wanted to talk to you since yesterday.",
              note: {
                bn: "want stative + since → perfect simple: have wanted; 'am wanting' এবং 'since'-এর জুটি দুটোই এখানে ভুল।",
                en: "'Want' is stative and 'since' needs a perfect form — together they demand 'have wanted', not 'am wanting'.",
                hi: "'want' stative है और 'since' के साथ perfect चाहिए — दोनों मिलकर 'have wanted' माँगते हैं, 'am wanting' नहीं।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "since বা for শোনামাত্র সিদ্ধান্ত নিন: চলমান কাজ হলে have been -ing, অবস্থা হলে have + V3 — দুই সেকেন্ডের মানসিক চেক।",
          en: "The moment you hear since or for, decide: ongoing action → have been -ing; state → have + V3. A two-second mental check.",
          hi: "since या for सुनते ही तय करें: चलती क्रिया → have been -ing; अवस्था → have + V3। दो सेकंड की मानसिक जाँच।",
        },
        {
          bn: "প্রতিদিন নিজের জীবনের একটা 'How long have I been...?' প্রশ্ন করে উত্তর দিন — চাকরি, বাসা, পড়াশোনা, এই ফোন।",
          en: "Daily, ask yourself one 'How long have I been...?' question and answer it aloud — job, home, studies, even this phone.",
          hi: "रोज़ खुद से एक 'How long have I been...?' सवाल पूछें और ज़ोर से उत्तर दें — नौकरी, घर, पढ़ाई, यह फोन।",
        },
        {
          bn: "বাংলা 'করছি' সব সময় -ing নয় — '২০১৯ থেকে করছি' জাতীয় বাক্যে মনে করুন: have been + -ing, কখনো 'am + -ing' নয়।",
          en: "Bangla 'করছি' is not always English -ing: whenever a starting point or duration joins the sentence, reach for have been + -ing, never 'am + -ing'.",
          hi: "बांग्ला 'कर रहा हूँ' हमेशा -ing नहीं: जब भी शुरुआत या अवधि जुड़े, have been + -ing लें, कभी 'am + -ing' नहीं।",
        },
        {
          bn: "প্রমাণ দেখিয়ে অনুমান-খেলা খেলুন: 'His bag is muddy — he has been playing football', 'Your eyes are red — you have been crying' — প্রতিদিন দুটো বানান।",
          en: "Play the evidence game daily: 'His bag is muddy — he has been playing football', 'Your eyes are red — you have been crying' — build two a day.",
          hi: "सबूत-खेल रोज़ खेलें: 'His bag is muddy — he has been playing football' जैसे दो वाक्य बनाएँ।",
        },
      ],
    },
  },

  /* ── 4. Used to & Would ────────────────────────────────────────────── */
  {
    topic: "Used to & Would",
    level: "intermediate",
    title: "Used to & Would (Intermediate)",
    unit: 0,
    data: {
      title: {
        bn: "Used to ও Would — অতীতের অভ্যাস (মধ্যম স্তর)",
        en: "Used to & Would (Intermediate)",
        hi: "Used to और Would — अतीत की आदतें (मध्यम स्तर)",
      },
      intro: {
        bn: "'আমি আগে প্রতিদিন ক্রিকেট খেলতাম' — ইংরেজিতে এর জন্য আলাদা গঠন আছে: I used to play cricket every day। আর 'অভ্যস্ত থাকা' বোঝাতে হয় I am used to getting up early — দেখতে প্রায় এক, অর্থ আকাশ-পাতাল আলাদা। এই দুই জায়গার গোলমালেই মধ্যম স্তরের শিক্ষার্থীরা সবচেয়ে বেশি ধরা পড়েন। চলুন পরিষ্কার করি।",
        en: "'I used to play cricket every day' talks about a past habit that is over; 'I am used to getting up early' means you are accustomed to it. The two look almost identical but mean completely different things — and this is exactly where intermediate learners stumble. This lesson sorts out used to, would, and the be/get used to confusion.",
        hi: "'I used to play cricket every day' बताता है बीती हुई आदत; 'I am used to getting up early' का अर्थ अभ्यस्त होना। दोनों लगभग एक जैसे दिखते हैं पर अर्थ बिल्कुल अलग — यहीं मध्यम स्तर के शिक्षार्थी ठोकर खाते हैं। इस पाठ में used to, would और be/get used to का भ्रम दूर करेंगे।",
      },
      sections: [
        {
          heading: {
            bn: "used to + verb: অতীতের অভ্যাস ও অবস্থা",
            en: "used to + verb: past habits and states",
            hi: "used to + verb: अतीत की आदतें और अवस्थाएँ",
          },
          body: {
            bn: "used to + verb-এর মূল রূপ বোঝায় অতীতে নিয়মিত হতো, এখন আর হয় না: I used to play cricket। অবস্থার জন্যও চলে: I used to live in Chattogram। না-বোধক ও প্রশ্নে did বসে, আর তখন 'd' পড়ে যায়: I didn't use to like coffee; Did you use to play? দুটো সতর্কতা: বর্তমান অভ্যাসে used to নয় (তখন usually + simple present), আর একবারের অতীত ঘটনায় used to নয় (তখন past simple)।",
            en: "used to + base verb describes a past habit that is now finished: I used to play cricket. It also covers past states: I used to live in Chattogram. Negatives and questions take 'did', and the 'd' of used drops: I didn't use to like coffee; Did you use to play? Two cautions: not for present habits (use 'usually' + simple present) and not for one-off past events (use the past simple).",
            hi: "used to + verb मूल रूप में बीती हुई आदत बताता है: I used to play cricket। अवस्था के लिए भी: I used to live in Chattogram। नकारात्मक और प्रश्न में 'did' आता है और used का 'd' गिर जाता है: I didn't use to like coffee। दो सावधानियाँ: वर्तमान आदत के लिए नहीं (usually + simple present), और एक बार की घटना के लिए नहीं (past simple)।",
          },
          examples: [
            {
              wrong: "I use to play cricket when I was young.",
              right: "I used to play cricket when I was young.",
              note: {
                bn: "ইতিবাচক বাক্যে সবসময় used (d সহ); 'use to' শুধু did-এর পরে আসে — উচ্চারণে দুটো এক হলেও বানানে নয়।",
                en: "In affirmative sentences it is always 'used' with the d; 'use to' appears only after did — same sound, different spelling.",
                hi: "सकारात्मक वाक्य में हमेशा 'used' (d सहित); 'use to' केवल did के बाद — उच्चारण वही, वर्तनी अलग।",
              },
            },
            {
              wrong: "I didn't used to like fish.",
              right: "I didn't use to like fish.",
              note: {
                bn: "did থাকলে পরের ক্রিয়ায় অতীত-চিহ্ন আর থাকে না — যেমন 'didn't played' ভুল, তেমনি 'didn't used to' ভুল।",
                en: "After 'did' the past mark disappears — just as 'didn't played' is wrong, so is 'didn't used to'.",
                hi: "'did' के बाद अतीत-चिह्न गायब हो जाता है — जैसे 'didn't played' गलत, वैसे ही 'didn't used to' गलत।",
              },
            },
            {
              wrong: "I am going to school by bus when I was a child.",
              right: "I used to go to school by bus when I was a child.",
              note: {
                bn: "শৈশবের নিয়মিত অভ্যাসের জন্য বর্তমান-কালের গঠন আসে না; 'আগে যেতাম' = used to + base verb।",
                en: "A childhood routine cannot be framed in a present form; 'আগে যেতাম' is used to + base verb.",
                hi: "बचपन की नियमित आदत वर्तमान रूप में नहीं बनती; 'पहले जाता था' = used to + मूल क्रिया।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "would: গল্প বলার অতীত অভ্যাস",
            en: "would: the storyteller's past habit",
            hi: "would: कहानीकार की अतीत आदत",
          },
          body: {
            bn: "would + verb-ও অতীতে বারবার-হওয়া কাজ বোঝায়, বিশেষত স্মৃতি বা গল্প বলার ঢঙে: Every summer, we would visit our grandmother; My father would tell us stories at night। কিন্তু would কখনো অবস্থা ধরতে পারে না — be, have, live, like, know জাতীয় ক্রিয়ার সাথে শুধু used to চলে। আর একবারের ঘটনার জন্য দুটোরই জায়গা নেই, তখন past simple।",
            en: "would + verb also expresses repeated past actions, especially in reminiscences and stories: Every summer, we would visit our grandmother; My father would tell us stories at night. But 'would' can never describe a state — with be, have, live, like, know only 'used to' works. And for one-off events neither fits; the past simple takes over.",
            hi: "would + verb भी अतीत की दोहराई गई क्रियाएँ बताता है, विशेष रूप से यादों और कहानियों में: Every summer, we would visit our grandmother। पर 'would' कभी अवस्था नहीं दर्शाता — be, have, live, like, know के साथ केवल 'used to'। एक बार की घटना के लिए दोनों नहीं — past simple।",
          },
          examples: [
            {
              wrong: "We would have a bicycle when we were kids.",
              right: "We used to have a bicycle when we were kids.",
              note: {
                bn: "এখানে have মালিকানা = অবস্থা; would শুধু কর্ম ধরে, অবস্থা নয় — তাই used to-ই একমাত্র পথ।",
                en: "Here 'have' means possession — a state; 'would' covers only actions, so 'used to' is the only option.",
                hi: "यहाँ 'have' स्वामित्व = अवस्था; 'would' केवल क्रियाएँ लेता है — इसलिए 'used to' ही विकल्प।",
              },
            },
            {
              wrong: "Every winter my grandfather would be the first to wake up.",
              right: "Every winter my grandfather used to be the first to wake up.",
              note: {
                bn: "be-ও অবস্থা-ক্রিয়া — would be এখানে চলবে না; অভ্যাসগত অবস্থা বোঝাতে used to be।",
                en: "'Be' is a state verb too — 'would be' cannot carry a habitual state; 'used to be' is required.",
                hi: "'be' भी अवस्था-क्रिया है — 'would be' यहाँ नहीं चलेगा; 'used to be' चाहिए।",
              },
            },
            {
              wrong: "Last year I would go to Sylhet once.",
              right: "Last year I went to Sylhet once.",
              note: {
                bn: "একবারের নির্দিষ্ট ঘটনার জন্য used to বা would দুটোই নয় — used to মানেই বারবার, তাই past simple।",
                en: "A single specific event fits neither 'used to' nor 'would' — both imply repetition — so the past simple is the answer.",
                hi: "एक बार की निश्चित घटना के लिए 'used to' या 'would' कोई नहीं — दोनों का अर्थ ही दोहराव है — इसलिए past simple।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "used to নাকি would — সিদ্ধান্তের নিয়ম",
            en: "used to or would — how to decide",
            hi: "used to या would — कैसे तय करें",
          },
          body: {
            bn: "তিনটা প্রশ্ন করুন: (১) ঘটনাটা কি একবারের? হলে past simple। (২) কি অবস্থা, মালিকানা বা অনুভূতি? হলে used to (would চলবে না)। (৩) বারবার-হওয়া কাজ কি গল্পের ঢঙে বলছেন? হলে would সবচেয়ে স্বাভাবিক, used to-ও চলে। নেটিভদের গল্পে একটা প্যাটার্ন দেখবেন: দৃশ্য-বর্ণনা used to দিয়ে শুরু, তারপরের কর্মগুলো would দিয়ে বয়ে যায়।",
            en: "Ask three questions: (1) Did it happen once? Use the past simple. (2) Is it a state, possession or feeling? Use used to — 'would' is impossible. (3) Is it a repeated action told in a storytelling tone? Then 'would' sounds most natural, though 'used to' also works. Native stories follow a pattern: set the scene with used to, then let the actions flow with would.",
            hi: "तीन प्रश्न पूछें: (1) एक बार की घटना? past simple। (2) अवस्था, स्वामित्व या भावना? used to — 'would' असंभव। (3) कहानी के अंदाज़ में दोहराई गई क्रिया? 'would' सबसे स्वाभाविक, 'used to' भी चलेगा। नेटिव कहानियों में: दृश्य 'used to' से, आगे की क्रियाएँ 'would' से बहती हैं।",
          },
          examples: [
            {
              wrong: "I would live in Khulna as a child.",
              right: "I used to live in Khulna as a child.",
              note: {
                bn: "live এখানে বসবাসের অবস্থা — would অবস্থা ধরতে পারে না; used to-ই নিয়ম।",
                en: "'Live' here is a state of residence — 'would' cannot govern states, so 'used to' is the rule.",
                hi: "'live' यहाँ रहने की अवस्था है — 'would' अवस्था नहीं ले सकता; 'used to' ही सही।",
              },
            },
            {
              wrong: "I used to meet him last Friday.",
              right: "I met him last Friday.",
              note: {
                bn: "নির্দিষ্ট এক ঘটনা (last Friday) → past simple; used to-র ভেতরে তারিখ বসে না, কারণ তার অর্থই 'প্রতিবার'।",
                en: "A dated single event takes the past simple; 'used to' never teams up with a specific date because it means 'repeatedly'.",
                hi: "तारीख वाली एक घटना past simple लेती है; 'used to' का अर्थ ही 'बार-बार' है, तिथि के साथ नहीं चलता।",
              },
            },
            {
              wrong: "As a boy, I would be very shy and I would hide behind my mother.",
              right: "As a boy, I used to be very shy and I would hide behind my mother.",
              note: {
                bn: "একই গল্পে দুই ধরনের অংশ: অবস্থা (be shy) → used to; কাজ (hide) → would — এই মিশ্রণই নেটিভ-ঢঙ।",
                en: "One story, two parts: the state (be shy) takes 'used to', the action (hide) takes 'would' — this mix is the native rhythm.",
                hi: "एक कहानी, दो हिस्से: अवस्था (be shy) → 'used to'; क्रिया (hide) → 'would' — यही मिश्रण नेटिव लहजा है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "সবচেয়ে বড় ফাঁদ: be used to doing",
            en: "The biggest trap: be used to doing",
            hi: "सबसे बड़ा फँदा: be used to doing",
          },
          body: {
            bn: "be used to + noun/-ing = 'অভ্যস্ত থাকা' — এটা বর্তমান, অতীত বা ভবিষ্যৎ কালের হতে পারে: I am used to spicy food; She is used to working at night। get used to = 'অভ্যস্ত হয়ে ওঠার প্রক্রিয়া': You will get used to the weather। এখানে to-এর পরে -ing বসে কারণ এই to প্রত্যয় নয়, preposition। 'used to play' (আগে খেলতাম) আর 'am used to playing' (খেলতে অভ্যস্ত) — শুনতে কাছাকাছি, অর্থে সম্পূর্ণ আলাদা; পার্থক্যের সূত্র: be/get থাকলে অভ্যস্ত, না থাকলে অতীত অভ্যাস।",
            en: "be used to + noun/-ing = 'accustomed to' — and it works in any tense: I am used to spicy food; She is used to working at night. get used to = the process of becoming accustomed: You will get used to the weather. The -ing appears because this 'to' is a preposition, not the infinitive marker. 'I used to play' (past habit) vs 'I am used to playing' (accustomed) sound close but mean different worlds; shortcut: be/get present → accustomed; absent → past habit.",
            hi: "be used to + noun/-ing = 'अभ्यस्त' — और यह किसी भी काल में चलता है: I am used to spicy food; She is used to working at night। get used to = अभ्यस्त होने की प्रक्रिया: You will get used to the weather। यहाँ 'to' preposition है, इसलिए -ing आता है। 'used to play' (पुरानी आदत) बनाम 'am used to playing' (अभ्यस्त) — अर्थ के संसार अलग हैं।",
          },
          examples: [
            {
              wrong: "I am used to wake up early.",
              right: "I am used to waking up early.",
              note: {
                bn: "be used to-এর পরে -ing — কারণ এই to preposition; 'অভ্যস্ত' বোঝালে ক্রিয়ার -ing রূপ বাধ্যতামূলক।",
                en: "After 'be used to' comes the -ing form, because this 'to' is a preposition — 'accustomed to' always takes -ing.",
                hi: "'be used to' के बाद -ing रूप — क्योंकि यह 'to' preposition है; 'अभ्यस्त' के अर्थ में -ing अनिवार्य।",
              },
            },
            {
              wrong: "I used to getting up early, but now I am lazy.",
              right: "I used to get up early, but now I am lazy.",
              note: {
                bn: "এখানে অর্থ অতীত অভ্যাস ('আগে উঠতাম') — be/get নেই, তাই base verb: used to get।",
                en: "The meaning here is the past habit ('আগে উঠতাম') with no be/get — so the base verb follows: used to get.",
                hi: "यहाँ अर्थ पुरानी आदत है ('पहले जल्दी उठता था') — be/get नहीं, इसलिए मूल क्रिया: used to get।",
              },
            },
            {
              wrong: "It took me a month to used to the new schedule.",
              right: "It took me a month to get used to the new schedule.",
              note: {
                bn: "'অভ্যস্ত হয়ে ওঠার প্রক্রিয়া' বোঝাতে get দরকার — শুধু used to কালের বদল বোঝাতে পারে না; কাঠামোটা get used to + noun/-ing।",
                en: "The process of becoming accustomed needs 'get' — bare 'used to' cannot express change over time; the frame is get used to + noun/-ing.",
                hi: "अभ्यस्त होने की प्रक्रिया के लिए 'get' चाहिए — केवल 'used to' समय के साथ बदलाव नहीं बताता; ढाँचा get used to + noun/-ing।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "নিজের শৈশব নিয়ে ৫টা বাক্য বলুন প্রতিদিন: ৩টা used to (একটা অবস্থাসহ), ২টা would (কাজ) — স্মৃতি থেকে শেখা সবচেয়ে টেকসই।",
          en: "Say five sentences about your childhood daily: three with used to (one a state), two with would (actions) — memory-based learning lasts longest.",
          hi: "रोज़ बचपन पर पाँच वाक्य बोलें: तीन 'used to' (एक अवस्था), दो 'would' (क्रिया) — यादों से सीखा सबसे टिकाऊ।",
        },
        {
          bn: "'I am used to ___ing' কাঠামোয় নিজের ৩টা অভ্যাস লিখুন — বাংলা 'অভ্যস্ত' মনে পড়লেই এই কাঠামো মনে করুন।",
          en: "Write three of your habits in the 'I am used to ___ing' frame — whenever Bangla 'অভ্যস্ত' comes to mind, recall this frame.",
          hi: "'I am used to ___ing' ढाँचे में अपनी तीन आदतें लिखें — 'अभ्यस्त' याद आते ही यह ढाँचा याद करें।",
        },
        {
          bn: "পুরনো ছবি দেখে গল্প বলুন: দৃশ্য বর্ণনায় used to, কর্মের ধারায় would — ফোনের গ্যালারিই আপনার প্র্যাকটিস-বই।",
          en: "Tell stories from old photos: set the scene with used to, run the actions with would — your phone gallery is the practice book.",
          hi: "पुरानी तस्वीरें देखकर कहानियाँ सुनाएँ: दृश्य 'used to' से, क्रियाएँ 'would' से — आपकी गैलरी ही अभ्यास-पुस्तक है।",
        },
        {
          bn: "did-প্রশ্নে বানানে 'd' পড়ে যায় — লিখতে সতর্ক থাকুন: Did you use to...? / I didn't use to...; ইতিবাচক বাক্যেই শুধু used।",
          en: "Watch the spelling after did — the d drops: Did you use to...? / I didn't use to...; 'used' with d appears only in affirmative sentences.",
          hi: "did के बाद वर्तनी पर ध्यान दें — d गिरता है: Did you use to...?; d-सहित 'used' केवल सकारात्मक वाक्य में।",
        },
      ],
    },
  },

  /* ── 5. Quantifiers: much/many/few/little ──────────────────────────── */
  {
    topic: "Quantifiers: much/many/few/little",
    level: "intermediate",
    title: "Quantifiers: much, many, few & little (Intermediate)",
    unit: 0,
    data: {
      title: {
        bn: "কোয়ান্টিফায়ার — much, many, few, little (মধ্যম স্তর)",
        en: "Quantifiers: much, many, few & little (Intermediate)",
        hi: "क्वांटिफ़ायर — much, many, few, little (मध्यम स्तर)",
      },
      intro: {
        bn: "'অনেক তথ্য' বলতে গিয়ে many informations, 'কয়েকটা উপদেশ' বলতে few advices — এই ভুলগুলোর মূলে একটাই বিষয়: ইংরেজিতে সব নাম গোনা যায় না। কোন নাম countable, কোনটা uncountable বুঝলে much/many, few/little, some/any — পুরো পরিবার একসাথে পরিষ্কার হয়ে যায়। এই পাঠ সেই ভিত্তি থেকেই শুরু হবে।",
        en: "Saying 'many informations' or 'few advices' comes from one root problem: not every English noun can be counted. Once you can tell countable from uncountable, the whole quantifier family — much/many, few/little, some/any — falls into place. This lesson starts from that foundation and climbs to the subtle a few vs few distinction.",
        hi: "'many informations' या 'few advices' कहने की जड़ एक ही समस्या है: हर अंग्रेज़ी संज्ञा गिनी नहीं जा सकती। countable और uncountable में फ़र्क़ समझते ही पूरा quantifier परिवार — much/many, few/little, some/any — अपने आप व्यवस्थित हो जाता है। यह पाठ उसी नींव से शुरू होता है।",
      },
      sections: [
        {
          heading: {
            bn: "গোনা যায় নাকি যায় না — ভিত্তি",
            en: "Countable or uncountable — the foundation",
            hi: "गिनने योग्य या नहीं — नींव",
          },
          body: {
            bn: "Countable noun: books, cars, friends — এক, দুই করে গোনা যায়, plural রূপ নেয়। Uncountable noun: water, money, information, advice, furniture, luggage, news, hair — এদের মাপা হয়, গোনা হয় না; plural s নেই, ক্রিয়া একবচন (The news is good)। বাংলায় 'তথ্যগুলো', 'উপদেশগুলো' plural-এর মতো শোনায়, তাই বাংলাভাষীরা informations, advices, furnitures বলে ধরা পড়েন। গুনতে হলে পরিমাপ-শব্দ লাগবে: two pieces of advice, a piece of furniture, three items of luggage।",
            en: "Countable nouns (books, cars, friends) can be counted one by one and take plurals. Uncountable nouns (water, money, information, advice, furniture, luggage, news, hair) are measured, not counted: no plural -s, singular verbs (The news is good). Bangla says 'তথ্যগুলো/উপদেশগুলো' like plurals, which is why Bengali speakers slip into informations, advices, furnitures. To count them, add a measure word: two pieces of advice, a piece of furniture, three items of luggage.",
            hi: "Countable संज्ञाएँ (books, cars, friends) एक-एक गिनी जा सकती हैं और plural लेती हैं। Uncountable (water, money, information, advice, furniture, luggage, news, hair) मापी जाती हैं, गिनी नहीं: plural -s नहीं, क्रिया एकवचन (The news is good)। गिनने के लिए माप-शब्द चाहिए: two pieces of advice, a piece of furniture।",
          },
          examples: [
            {
              wrong: "She gave me many useful informations.",
              right: "She gave me a lot of useful information.",
              note: {
                bn: "information uncountable — s নেই, many নয়; 'অনেক' বোঝাতে a lot of / much information (আনুষ্ঠানিক লেখায়)।",
                en: "'Information' is uncountable — no plural s, no 'many'; say a lot of information (or much in formal writing).",
                hi: "'information' uncountable — plural s नहीं, many नहीं; 'बहुत' के लिए a lot of information।",
              },
            },
            {
              wrong: "My hairs are getting long.",
              right: "My hair is getting long.",
              note: {
                bn: "সাধারণ অর্থে hair uncountable — একবচন; 'hairs' শুধু আলাদা আলাদা গোনা যায় এমন রোমের অর্থে (There are two hairs in my soup)।",
                en: "In general senses 'hair' is uncountable and singular; 'hairs' survives only for countable individual strands (two hairs in my soup).",
                hi: "सामान्य अर्थ में 'hair' uncountable — एकवचन; 'hairs' केवल गिनने योग्य अलग तिनकों के लिए।",
              },
            },
            {
              wrong: "I have three luggages.",
              right: "I have three pieces of luggage.",
              note: {
                bn: "luggage uncountable — সরাসরি সংখ্যা বসানো যায় না; গুনতে piece/bag/item ব্যবহার করুন: three bags of luggage।",
                en: "'Luggage' is uncountable — numbers cannot attach to it directly; count with piece/bag/item: three bags of luggage.",
                hi: "'luggage' uncountable — संख्या सीधे नहीं जुड़ती; गिनने के लिए piece/bag/item लगाएँ।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "much ও many: প্রশ্ন আর অস্বীকারের জায়গা",
            en: "much and many: home in questions and negatives",
            hi: "much और many: प्रश्न और नकारात्मक वाक्यों में",
          },
          body: {
            bn: "many + countable plural (many friends), much + uncountable (much time)। কিন্তু ইতিবাচক বিবৃতিতে much/many জোরালো-আনুষ্ঠানিক শোনায়; এদের ঘর হলো প্রশ্ন আর অস্বীকার: Do you have many friends? / I don't have much time। সাধারণ ইতিবাচক বাক্যে a lot of / lots of — countable ও uncountable দুটোতেই চলে: I have a lot of work। প্রশ্ন করার জুটি: How much (অর্থ/পরিমাণ), How many (গণনা)।",
            en: "many + countable plural (many friends); much + uncountable (much time). But in positive statements they sound heavy and formal; their natural home is questions and negatives: Do you have many friends? / I don't have much time. Everyday positive sentences prefer a lot of / lots of, which work with both kinds: I have a lot of work. For asking: How much (money/amount), How many (count).",
            hi: "many + countable plural (many friends); much + uncountable (much time)। पर सकारात्मक कथन में ये भारी-औपचारिक लगते हैं; इनका घर प्रश्न और नकारात्मक वाक्य: Do you have many friends? / I don't have much time। रोज़मर्रा के सकारात्मक वाक्यों में a lot of / lots of — दोनों प्रकार के साथ चलते हैं। पूछने के लिए: How much (मात्रा), How many (गिनती)।",
          },
          examples: [
            {
              wrong: "I have much friends here.",
              right: "I have a lot of friends here.",
              note: {
                bn: "friends countable + ইতিবাচক বাক্য → a lot of; আনুষ্ঠানিক লেখায় many friends হবে, much কখনো নয়।",
                en: "'Friends' is countable and the sentence is positive → a lot of (or 'many' in formal writing); 'much' never fits a countable noun.",
                hi: "'friends' countable और वाक्य सकारात्मक → a lot of (औपचारिक लेखन में many); 'much' countable के साथ कभी नहीं।",
              },
            },
            {
              wrong: "How many money do you need?",
              right: "How much money do you need?",
              note: {
                bn: "money uncountable → how much; নিয়মটা মনে রাখুন: গুনলে how many, মাপলে how much।",
                en: "'Money' is uncountable → how much; remember: count it → how many, measure it → how much.",
                hi: "'money' uncountable → how much; नियम: गिनना → how many, मापना → how much।",
              },
            },
            {
              wrong: "I don't have many time today.",
              right: "I don't have much time today.",
              note: {
                bn: "time এখানে uncountable ('সময়' সাধারণ অর্থে) → অস্বীকারেও much; many বসে শুধু গোনা যায় এমন জিনিসে।",
                en: "'Time' in the general sense is uncountable, so even in negatives it takes 'much'; 'many' needs a countable noun.",
                hi: "'time' यहाँ uncountable है, इसलिए नकारात्मक में भी 'much'; 'many' केवल गिनने योग्य संज्ञा के साथ।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "a few বনাম few, a little বনাম little",
            en: "a few vs few, a little vs little",
            hi: "a few बनाम few, a little बनाम little",
          },
          body: {
            bn: "এই জোড়ার ফারাক অর্থের নয়, মনোভাবের। a few (কয়েকটা — যথেষ্ট, খুশির সুর) + countable: I have a few friends here = বেশ কয়েকজন বন্ধু আছে। few (প্রায় কোনোটাই নেই — হতাশার সুর) + countable: I have few friends here = বন্ধু বলে প্রায় কেউ নেই। একইভাবে a little (একটু — যথেষ্ট) + uncountable: We have a little time; আর little (অপর্যাপ্ত) + uncountable: We have little time — মানে সময় বলে প্রায় নেই, উদ্বেগের সুর।",
            en: "The difference is attitude, not arithmetic. a few (some — a positive tone) + countable: I have a few friends here. few (hardly any — a negative tone) + countable: I have few friends here. In the same way, a little (some — enough) + uncountable: We have a little time; little (not enough) + uncountable: We have little time — which worries the listener. Shortcut: with 'a' you smile; without 'a' you sigh.",
            hi: "अंतर गणित का नहीं, भाव का है। a few (कुछ — सकारात्मक सुर) + countable: I have a few friends here। few (लगभग कोई नहीं — नकारात्मक सुर) + countable: I have few friends here। वैसे ही a little (थोड़ा — पर्याप्त) + uncountable: We have a little time; little (अपर्याप्त) + uncountable: We have little time। शॉर्टकट: 'a' हो तो मुस्कान, न हो तो आह।",
          },
          examples: [
            {
              wrong: "Don't worry, we have little time before the train.",
              right: "Don't worry, we have a little time before the train.",
              note: {
                bn: "আশ্বাস দিচ্ছেন, অর্থাৎ অল্প হলেও যথেষ্ট — a little; little বললে বাক্যটা ভয় দেখানো হয়ে যায় ('সময় বলে প্রায় নেই')।",
                en: "You are reassuring someone, so the amount is enough — a little; 'little time' would actually scare them (almost no time).",
                hi: "आप आश्वासन दे रहे हैं, इसलिए थोड़ा ही काफ़ी है — a little; 'little time' कहते ही डर लग जाएगा।",
              },
            },
            {
              wrong: "The question was hard, so a few students passed.",
              right: "The question was hard, so few students passed.",
              note: {
                bn: "কঠিন প্রশ্নে নেতিবাচক ফল — প্রায় কেউ পাস করেনি → few; a few বললে বোঝায় 'বেশ কয়েকজন পাস করেছে', অর্থ উল্টে যায়।",
                en: "A hard question gives a negative outcome — hardly anyone passed → few; 'a few passed' would claim quite a few did, reversing the meaning.",
                hi: "कठिन प्रश्न का नकारात्मक नतीजा — लगभग कोई पास नहीं हुआ → few; 'a few' कहते ही अर्थ उलट जाएगा।",
              },
            },
            {
              wrong: "Give me few minutes to finish.",
              right: "Give me a few minutes to finish.",
              note: {
                bn: "'কয়েক মিনিট দিন' = a few minutes; few minutes বললে অর্থ দাঁড়ায় 'প্রায় কোনো মিনিট নেই' — অনুরোধে সবসময় a few।",
                en: "The request means 'some minutes' — a few minutes; 'few minutes' claims there are almost none, so requests always take a few.",
                hi: "अनुरोध का अर्थ 'कुछ मिनट' — a few minutes; 'few minutes' कहते ही लगभग कुछ नहीं बन जाएगा।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "some আর any",
            en: "some and any",
            hi: "some और any",
          },
          body: {
            bn: "some সাধারণত ইতিবাচক বাক্যে: I have some questions; any অস্বীকার ও প্রশ্নে: I don't have any money; Do you have any questions? ব্যতিক্রম দুটো: (১) অফার বা অনুরোধে some — উত্তর 'হ্যাঁ' আশা করছি: Would you like some tea? (২) 'যেকোনো' অর্থে any ইতিবাচক বাক্যেও চলে: You can come at any time। something/anyone/nowhere জাতীয় শব্দেও একই নিয়ম খাটে।",
            en: "some normally appears in positive sentences: I have some questions; any in negatives and questions: I don't have any money; Do you have any questions? Two exceptions: (1) offers and requests take some, because a yes is expected: Would you like some tea? (2) 'any' meaning 'it doesn't matter which' works in positives: You can come at any time. The same rules govern compounds like something/anyone/nowhere.",
            hi: "some सामान्यतः सकारात्मक वाक्य में: I have some questions; any नकारात्मक और प्रश्न में: I don't have any money; Do you have any questions? दो अपवाद: (1) पेशकश/अनुरोध में some — 'हाँ' की आशा में: Would you like some tea? (2) 'कोई भी' अर्थ में any सकारात्मक में भी: You can come at any time। something/anyone/nowhere में भी वही नियम।",
          },
          examples: [
            {
              wrong: "I don't have some money with me.",
              right: "I don't have any money with me.",
              note: {
                bn: "অস্বীকারে some-এর জায়গা নেই — any বসে; এটা some/any-এর সবচেয়ে বেশি ভুল হওয়া নিয়ম।",
                en: "Negatives swap some for any — this is the most frequently broken rule in the some/any pair.",
                hi: "नकारात्मक वाक्य में some की जगह any — यही सबसे अधिक टूटने वाला नियम है।",
              },
            },
            {
              wrong: "Would you like any coffee?",
              right: "Would you like some coffee?",
              note: {
                bn: "অফার করলে some — কারণ আপনি চান উত্তর 'হ্যাঁ' হোক; any দিলে প্রশ্নটা উদাসীন শোনায়।",
                en: "Offers take some because you hope for a yes; 'any coffee' makes the offer sound indifferent.",
                hi: "पेशकश में some — क्योंकि 'हाँ' की उम्मीद है; 'any coffee' कहते ही पेशकश उदासीन लगती है।",
              },
            },
            {
              wrong: "Any students were late today.",
              right: "Some students were late today.",
              note: {
                bn: "সাধারণ ইতিবাচক বিবৃতিতে some; any বসালে অর্থ দাঁড়ায় 'যেকোনো শিক্ষার্থী' — বাক্য অর্থহীন হয়ে যায়।",
                en: "A plain positive statement takes some; 'any students' would mean 'whichever students you like', which breaks the sentence.",
                hi: "साधारण सकारात्मक कथन में some; 'any students' का अर्थ 'कोई भी छात्र' हो जाएगा, वाक्य अर्थहीन हो जाएगा।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "দিনে একবার ঘরের জিনিস দুই কলামে ভাগ করুন: countable / uncountable — furniture, information, advice, news, luggage যাবে ডান কলামে।",
          en: "Once a day, split the things around you into two columns: countable / uncountable — furniture, information, advice, news, luggage go right.",
          hi: "रोज़ एक बार आसपास की चीज़ें दो कॉलम में बाँटें: countable / uncountable — furniture, information, advice, news, luggage दाएँ।",
        },
        {
          bn: "বাজার-হোটেলের বাক্যে প্র্যাকটিস করুন: Could I have some...? / How much...? / How many...? — quantifier সবচেয়ে দ্রুত শেখা যায় অর্ডার দিতে দিতে।",
          en: "Practise with shopping and restaurant lines: Could I have some...? / How much...? / How many...? — quantifiers stick fastest while ordering.",
          hi: "बाज़ार-रेस्तराँ के वाक्यों में अभ्यास करें: Could I have some...? / How much...? / How many...? — quantifier ऑर्डर करते हुए सबसे तेज़ सीखे जाते हैं।",
        },
        {
          bn: "a few/few-এর শর্টকাট: 'a' আছে = মুখে হাসি, 'a' নেই = মুখে হতাশা — বলার সময় সেই অনুযায়ী সুরও দিন।",
          en: "Shortcut for a few/few: with 'a' you smile, without 'a' you sigh — match your tone to it when speaking.",
          hi: "a few/few का शॉर्टकट: 'a' हो तो मुस्कान, न हो तो आह — बोलते समय लहजा भी मिलाएँ।",
        },
        {
          bn: "প্রতিদিন একটা Is there any...? প্রশ্ন আর দুই উত্তর লিখুন: Yes, there's some... / No, there isn't any... — তিন লাইনেই some/any কাঁধে নেমে আসে।",
          en: "Daily, write one Is there any...? question with both answers: Yes, there's some... / No, there isn't any... — three lines and some/any settles in.",
          hi: "रोज़ एक Is there any...? प्रश्न और दोनों उत्तर लिखें: Yes, there's some... / No, there isn't any... — तीन पंक्तियों में some/any बैठ जाता है।",
        },
      ],
    },
  },

  /* ── 6. Question Tags & Short Answers ─────────────────────────────── */
  {
    topic: "Question Tags & Short Answers",
    level: "intermediate",
    title: "Question Tags & Short Answers (Intermediate)",
    unit: 0,
    data: {
      title: {
        bn: "কোয়েশ্চেন ট্যাগ ও শর্ট আনসার (মধ্যম স্তর)",
        en: "Question Tags & Short Answers (Intermediate)",
        hi: "क्वेश्चन टैग और शॉर्ट आंसर (मध्यम स्तर)",
      },
      intro: {
        bn: "'তুমি আসবে, তাই না?' — এই ছোট্ট 'তাই না'-র ইংরেজি রূপ বদলে যায় বাক্য অনুযায়ী: aren't you? / won't you? / do you?। আর উত্তর দিতে গিয়ে 'Yes, I like' বলা বাংলাভাষীদের ক্লাসিক ভুল — ইংরেজি শর্ট আনসার সাহায্যকারী ক্রিয়া দিয়ে চলে। কথোপকথনে এই দুটোই প্রতিনিয়ত লাগে, তাই এখানে নিখুঁত হওয়া জরুরি।",
        en: "'তাই না?' changes shape in English: aren't you? / won't you? / do you? — the tag mirrors the verb of the sentence. And answering with 'Yes, I like' is the classic Bengali-speaker slip: short answers run on auxiliary verbs. Both come up constantly in conversation, so this lesson drills the tag rule, the special cases, short answers and the meaning of tag intonation.",
        hi: "'है न?' अंग्रेज़ी में बदलता रहता है: aren't you? / won't you? / do you? — टैग वाक्य की क्रिया का प्रतिबिंब है। और 'Yes, I like' कहना बांग्लाभाषियों की क्लासिक चूक है — शॉर्ट आंसर सहायक क्रिया से चलते हैं। दोनों बातचीत में रोज़ लगते हैं।",
      },
      sections: [
        {
          heading: {
            bn: "মূল নিয়ম: positive হলে negative ট্যাগ",
            en: "The core rule: positive statement, negative tag",
            hi: "मूल नियम: सकारात्मक वाक्य, नकारात्मक टैग",
          },
          body: {
            bn: "ইতিবাচক বাক্যের পরে ঋণাত্মক ট্যাগ, ঋণাত্মক বাক্যের পরে ইতিবাচক: You are tired, aren't you? / You aren't tired, are you? ট্যাগের ক্রিয়া = মূল বাক্যের প্রথম সাহায্যকারী (is/are/have/will/can); সাহায্যকারী না থাকলে do/does/did আসে: She works here, doesn't she? কর্তাও বদলে pronoun হয়: The weather is nice, isn't it? আর কাল বদলায় না: You went there, didn't you?",
            en: "A positive statement takes a negative tag, a negative statement a positive tag: You are tired, aren't you? / You aren't tired, are you? The tag verb mirrors the statement's first auxiliary (is/are/have/will/can); if there is none, do/does/did steps in: She works here, doesn't she? The subject always turns into a pronoun: The weather is nice, isn't it? And the tense never changes: You went there, didn't you?",
            hi: "सकारात्मक वाक्य के बाद नकारात्मक टैग, नकारात्मक के बाद सकारात्मक: You are tired, aren't you? / You aren't tired, are you? टैग की क्रिया वाक्य की पहली सहायक क्रिया की प्रतिलिपि है; सहायक न हो तो do/does/did आता है: She works here, doesn't she? कर्ता सदैव pronoun बनता है: The weather is nice, isn't it? काल नहीं बदलता।",
          },
          examples: [
            {
              wrong: "You like tea, isn't it?",
              right: "You like tea, don't you?",
              note: {
                bn: "দুটো ভুল একসাথে: মূল বাক্যে সাহায্যকারী নেই, তাই do জাতীয় ট্যাগ (don't you); আর ট্যাগ কর্তার pronoun নেয় — you, 'it' নয়।",
                en: "Two errors at once: the statement has no auxiliary, so the tag needs do (don't you); and the tag takes the subject's pronoun — 'you', never 'it'.",
                hi: "दो गलतियाँ एक साथ: वाक्य में सहायक क्रिया नहीं, इसलिए do-टैग (don't you); और टैग कर्ता का pronoun लेता है — 'you', 'it' नहीं।",
              },
            },
            {
              wrong: "She didn't call, didn't she?",
              right: "She didn't call, did she?",
              note: {
                bn: "ঋণাত্মক বাক্যের পরে ইতিবাচক ট্যাগ — did she; দুটো negative পাশাপাশি আসে না।",
                en: "A negative statement flips to a positive tag — did she; two negatives never sit side by side.",
                hi: "नकारात्मक वाक्य के बाद सकारात्मक टैग — did she; दो negatives साथ नहीं बैठते।",
              },
            },
            {
              wrong: "They have arrived, isn't it?",
              right: "They have arrived, haven't they?",
              note: {
                bn: "মূল বাক্যের সাহায্যকারী (have) ট্যাগেই ফিরে আসে, কর্তা হয়ে যায় they — 'isn't it' এখানে কোনো ভূমিকাই রাখে না।",
                en: "The statement's own auxiliary (have) returns as the tag, and the subject becomes they — 'isn't it' has no role here.",
                hi: "वाक्य की अपनी सहायक क्रिया (have) ही टैग बनती है, कर्ता 'they' हो जाता है — 'isn't it' का यहाँ कोई स्थान नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "বিশেষ ক্ষেত্র: I am, Let's, imperative",
            en: "Special cases: I am, Let's, imperatives",
            hi: "विशेष स्थितियाँ: I am, Let's, आदेश",
          },
          body: {
            bn: "কয়েকটা ট্যাগ নিয়মের বাইরে, মুখস্থ করতে হয়: I am late, aren't I? — ইংরেজিতে 'amn't I' নেই। Let's দিয়ে শুরু হলে জোড়াটা shall we?: Let's start, shall we? আদেশ/অনুরোধে will you? (নম্র সুরে won't you? বা would you?): Open the door, will you? there is/are বাক্যে there-ই ট্যাগে থাকে: There's a problem, isn't there? আর everyone/everybody/nobody-র ট্যাগ সবসময় they: Everyone came, didn't they?",
            en: "A few tags break the pattern and must be memorised: I am late, aren't I? — 'amn't I' does not exist. Sentences starting with Let's pair with shall we?: Let's start, shall we? Orders/requests take will you? (softer: won't you? / would you?): Open the door, will you? With there is/are, 'there' stays in the tag: There's a problem, isn't there? And everyone/everybody/nobody always take they: Everyone came, didn't they?",
            hi: "कुछ टैग नियम से बाहर हैं, रटने होंगे: I am late, aren't I? — 'amn't I' अंग्रेज़ी में नहीं है। Let's से शुरू वाक्य की जोड़ी shall we?: Let's start, shall we? आदेश/अनुरोध में will you? (कोमल सुर में won't you? / would you?)। there is/are में 'there' टैग में रहता है: There's a problem, isn't there? everyone/everybody/nobody हमेशा they लेते हैं।",
          },
          examples: [
            {
              wrong: "I am in your group, amn't I?",
              right: "I am in your group, aren't I?",
              note: {
                bn: "'amn't I' শব্দটাই ইংরেজিতে নেই — I am-বাক্যের প্রচলিত ট্যাগ aren't I; এটা একমাত্র ব্যতিক্রম যেখানে aren't কর্তা I-এর সাথে বসে।",
                en: "'Amn't I' simply does not exist — the standard tag for 'I am' is aren't I, the one case where aren't pairs with I.",
                hi: "'amn't I' शब्द ही अंग्रेज़ी में नहीं — 'I am' का मानक टैग aren't I ही है, यही एकमात्र स्थिति जहाँ aren't के साथ I बैठता है।",
              },
            },
            {
              wrong: "Let's start the meeting, will we?",
              right: "Let's start the meeting, shall we?",
              note: {
                bn: "Let's মানেই প্রস্তাব — প্রস্তাবের ট্যাগ shall we; will we এখানে অনবিচ্ছিন্ন বিদেশি শোনায়।",
                en: "'Let's' is a proposal, and proposals pair with shall we; 'will we' sounds distinctly foreign here.",
                hi: "'Let's' का अर्थ ही प्रस्ताव है — प्रस्ताव की जोड़ी shall we; 'will we' यहाँ विदेशी लगता है।",
              },
            },
            {
              wrong: "Nobody phoned, did he?",
              right: "Nobody phoned, did they?",
              note: {
                bn: "nobody/everyone জাতীয় শব্দের নির্দিষ্ট লিঙ্গ নেই, তাই ট্যাগে নিরপেক্ষ they বসে — he/she নয়।",
                en: "Words like nobody/everyone have no fixed gender, so the tag takes neutral they — not he or she.",
                hi: "nobody/everyone जैसे शब्दों का निश्चित लिंग नहीं — टैग में तटस्थ they आता है, he/she नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "শর্ট আনসার: Yes/No + সাহায্যকারী",
            en: "Short answers: Yes/No + the auxiliary",
            hi: "शॉर्ट आंसर: Yes/No + सहायक क्रिया",
          },
          body: {
            bn: "সংক্ষিপ্ত উত্তর = Yes/No + সেই সাহায্যকারী + কর্তা-pronoun: Yes, I do / No, I don't; Yes, she has / No, she hasn't। মূল ক্রিয়া এখানে আসে না — 'Yes, I like' ভুল, 'Yes, I do' ঠিক। আর ঋণাত্মক প্রশ্নের উত্তর ইংরেজিতে সত্যের সাথে মেলে, প্রশ্নের ঢঙের সাথে নয়: Don't you like tea? — পছন্দ হলে Yes, I do; না হলে No, I don't। বাংলার 'হ্যাঁ, পছন্দ করি না' অনুবাদ করলে এখানেই ফাঁদে পড়বেন।",
            en: "A short answer = Yes/No + the same auxiliary + a subject pronoun: Yes, I do / No, I don't; Yes, she has / No, she hasn't. The main verb never enters — 'Yes, I like' is wrong, 'Yes, I do' is right. And answers to negative questions agree with the FACT, not with the question's wording: Don't you like tea? — if you like it: Yes, I do; if not: No, I don't. Translating Bangla's 'হ্যাঁ, পছন্দ করি না' word for word is exactly where the trap snaps shut.",
            hi: "शॉर्ट आंसर = Yes/No + वही सहायक क्रिया + कर्ता-pronoun: Yes, I do / No, I don't; Yes, she has / No, she hasn't। मुख्य क्रिया कभी नहीं आती — 'Yes, I like' गलत, 'Yes, I do' सही। नकारात्मक प्रश्न का उत्तर तथ्य से मेल खाता है, प्रश्न की भाषा से नहीं: Don't you like tea? — पसंद है तो Yes, I do; नहीं तो No, I don't।",
          },
          examples: [
            {
              wrong: "Do you play cricket? — Yes, I play.",
              right: "Do you play cricket? — Yes, I do.",
              note: {
                bn: "শর্ট আনসারে মূল ক্রিয়া নয়, সাহায্যকারী বসে — do-প্রশ্নের উত্তর do; ক্রিয়া দোহরানোই বাংলা অভ্যাসের টান।",
                en: "Short answers run on the auxiliary, not the main verb — a do-question answers with do; repeating the verb is the Bangla habit pulling you back.",
                hi: "शॉर्ट आंसर में मुख्य क्रिया नहीं, सहायक क्रिया बैठती है — do-प्रश्न का उत्तर do; क्रिया दोहराना बांग्ला आदत का खिंचाव है।",
              },
            },
            {
              wrong: "Don't you like this song? — Yes, I don't.",
              right: "Don't you like this song? — No, I don't.",
              note: {
                bn: "অপছন্দ বোঝালে উত্তর No — ইংরেজি উত্তর সত্যের সাথে মেলে, প্রশ্নের রূপের সাথে নয়; বাংলার 'হ্যাঁ' এখানে ধোঁকা দেয়।",
                en: "If the dislike is true, the answer is No — English answers agree with the fact, not the question's form; Bangla's 'হ্যাঁ' misleads here.",
                hi: "नापसंद सच है तो उत्तर No — अंग्रेज़ी उत्तर तथ्य से मेल खाता है, प्रश्न के रूप से नहीं; यहाँ 'हाँ' धोखा देता है।",
              },
            },
            {
              wrong: "Can you swim? — Yes, I can to swim.",
              right: "Can you swim? — Yes, I can.",
              note: {
                bn: "শর্ট আনসার সাহায্যকারীতেই শেষ — can-এর পরে আর কিছু যোগ হয় না; বাকি বিশদ বলতে চাইলে নতুন বাক্য শুরু করুন।",
                en: "A short answer ends at the auxiliary — nothing follows 'can'; add detail only by starting a new sentence.",
                hi: "शॉर्ट आंसर सहायक क्रिया पर ही खत्म होता है — 'can' के बाद कुछ नहीं जुड़ता; विवरण चाहिए तो नया वाक्य शुरू करें।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "সুরের খেলা: falling নাকি rising",
            en: "The music of tags: falling or rising",
            hi: "टैग का संगीत: falling या rising",
          },
          body: {
            bn: "একই ট্যাগ, সুর বদলালে অর্থ বদলায়। গলা নামলে (falling) = আমি প্রায় নিশ্চিত, শুধু আপনার সম্মতি চাইছি: It's a beautiful day, isn't it?↘ — ছোট গল্প শুরু করার ক্লাসিক ঢঙ। গলা উঠলে (rising) = সত্যিই জানতে চাইছি, উত্তর জরুরি: You haven't seen my keys, have you?↗ শর্ট আনসারেও সুর কাজ করে: Yes, I do-তে do-তে জোর দিলে উৎসাহ, দ্রুত সমতলে বললে সাধারণ সম্মতি। নেটিভদের কথা শুনে এই দুই সুর আলাদা করতে পারলেই আপনার ইংরেজি স্বাভাবিক শোনাবে।",
            en: "Same tag, different melody, different meaning. A falling tone = I am almost sure, I just want your agreement: It's a beautiful day, isn't it?↘ — the classic small-talk opener. A rising tone = I genuinely need the answer: You haven't seen my keys, have you?↗ Short answers carry music too: stressing 'do' in Yes, I do adds enthusiasm; a flat quick delivery is plain agreement. Separating these two melodies in native speech is what makes your English sound natural.",
            hi: "एक ही टैग, अलग सुर, अलग अर्थ। गिरता सुर (falling) = मुझे लगभग यकीन है, केवल आपकी सहमति चाहिए: It's a beautiful day, isn't it?↘ — छोटी बातचीत का क्लासिक उद्घाटन। उठता सुर (rising) = मुझे सचमुच उत्तर चाहिए: You haven't seen my keys, have you?↗ शॉर्ट आंसर में भी सुर: Yes, I do में 'do' पर ज़ोर उत्साह जोड़ता है।",
          },
          examples: [
            {
              wrong: "It's a lovely day, is it?",
              right: "It's a lovely day, isn't it?",
              note: {
                bn: "ইতিবাচক বাক্যের ট্যাগ ঋণাত্মক — আর গল্প শুরু করতে সুরটা নামবে (falling), যাতে কথাটা সম্মতির আমন্ত্রণ মনে হয়; 'is it?' বললে সন্দেহ শোনায়।",
                en: "A positive statement takes a negative tag, and small talk lets the tone fall — an invitation to agree; 'is it?' sounds doubtful.",
                hi: "सकारात्मक वाक्य का टैग नकारात्मक — और छोटी बातचीत में सुर गिरता है, सहमति का निमंत्रण; 'is it?' संदेह जैसा लगता है।",
              },
            },
            {
              wrong: "You didn't tell anyone, didn't you?",
              right: "You didn't tell anyone, did you?",
              note: {
                bn: "ঋণাত্মক বাক্য → ইতিবাচক ট্যাগ; আর যেহেতু সত্যিই জানতে চাইছেন, সুরটা উঠবে (rising) — উত্তর এখানে আসল কাজ।",
                en: "Negative statement → positive tag; and since you genuinely need to know, the tone rises — the answer is the real business here.",
                hi: "नकारात्मक वाक्य → सकारात्मक टैग; और जहाँ उत्तर सचमुच चाहिए, वहाँ सुर ऊपर उठता है (rising)।",
              },
            },
            {
              wrong: "You will help me, isn't it?",
              right: "You will help me, won't you?",
              note: {
                bn: "will-এর ঋণাত্মক রূপ won't — ট্যাগ হয় won't you; অনুরোধে সুর নামলে আস্থা, উঠলে কিছুটা সন্দেহ শোনায়।",
                en: "The negative of will is won't — the tag is won't you; a falling tone there sounds trusting, a rising one slightly doubtful.",
                hi: "will का नकारात्मक रूप won't — टैग won't you; गिरता सुर भरोसा, उठता सुर थोड़ा संदेह दर्शाता है।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "প্রতিদিন ৫টা বাক্য বলুন ট্যাগ দিয়ে — পরিবার নিয়েই হোক: 'Baba is home, isn't he?', 'You had dinner, didn't you?' — খেলার মতো অভ্যাস।",
          en: "Say five tagged sentences daily, even about family: 'Baba is home, isn't he?', 'You had dinner, didn't you?' — a game-like habit.",
          hi: "रोज़ पाँच वाक्य टैग के साथ बोलें — परिवार पर भी: 'Baba is home, isn't he?', 'You had dinner, didn't you?'",
        },
        {
          bn: "শর্ট আনসার-ড্রিল: প্রশ্ন শুনে প্রথম দুই শব্দই বলুন (Yes, I do / No, I can't) — আগে সাহায্যকারী, পরে আর কিছুই নয়।",
          en: "Short-answer drill: on hearing a question, say only the first two words (Yes, I do / No, I can't) — auxiliary first, nothing else.",
          hi: "शॉर्ट-आंसर ड्रिल: प्रश्न सुनते ही केवल पहले दो शब्द बोलें (Yes, I do / No, I can't) — पहले सहायक, फिर कुछ नहीं।",
        },
        {
          bn: "ঋণাত্মক প্রশ্নের নিয়ম নোটে লিখে রাখুন: সত্য হলে Yes, মিথ্যা হলে No — প্রশ্নের ঢঙ দেখার দরকার নেই।",
          en: "Write the negative-question rule on a note: true → Yes, false → No — regardless of how the question is phrased.",
          hi: "नकारात्मक प्रश्न का नियम नोट करें: सच → Yes, झूठ → No — प्रश्न की भाषा देखने की ज़रूरत नहीं।",
        },
        {
          bn: "নাটক-পডকাস্টে ট্যাগের সুর শুনুন: falling = সম্মতি চাওয়া, rising = সত্যিকারের প্রশ্ন — দিনে অন্তত দুটো উদাহরণ চিনে নোট করুন।",
          en: "Listen for tag melodies in shows and podcasts: falling = seeking agreement, rising = a real question — spot and note two examples a day.",
          hi: "शो-पॉडकास्ट में टैग का सुर सुनें: falling = सहमति, rising = असली प्रश्न — रोज़ दो उदाहरण पहचानकर नोट करें।",
        },
      ],
    },
  },
];
