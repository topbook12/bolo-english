// ─── Learning-path grammar seeds v3: ADVANCED batch A2c (1 deep lesson) ───
// Task 9.3-W10. TriText = { bn, en, hi } — Bengali is the PRIMARY language of
// explanation; en + hi are complete faithful translations. English example
// sentences stay English. Level: advanced (CEFR C1). Unit 0 = extra library
// lesson. Quiz included (10 questions).
import type { LibraryGrammarData, LibraryLevel } from "../../src/lib/library-types";

export interface SeedGrammarV3Entry {
  topic: string;
  level: LibraryLevel;
  title: string;
  unit: number;
  data: LibraryGrammarData;
}

export const SEED_GRAMMAR_V3_A2C: SeedGrammarV3Entry[] = [
  /* ── 1. Advanced Reported Speech ─────────────────────────────────────── */
  {
    topic: "Advanced Reported Speech",
    level: "advanced",
    title: "Advanced Reported Speech",
    unit: 0,
    data: {
      title: {
        bn: "অ্যাডভান্সড রিপোর্টেড স্পিচ: backshift, রিপোর্টিং verb ও প্রশ্ন-আদেশ",
        en: "Advanced Reported Speech: backshift, reporting verbs, questions and commands",
        hi: "एडवांस्ड रिपोर्टेड स्पीच: backshift, रिपोर्टिंग verbs और प्रश्न-आदेश",
      },
      intro: {
        bn: "Learning Path-এর advanced স্তরের এটি Unit 0 পাঠ — Reported Speech-এর গভীর সফর। শুরু করার আগে intermediate স্তরের Reported Speech ও Past Perfect পাঠগুলো শেষ করে নিন — এই পাঠ ঠিক সেগুলোর উপরেই দাঁড়িয়ে আছে। অফিসে মিটিং-এর হিসাব, সংবাদ পড়া, ইন্টারভিউ-সংলাপ লেখা, এমনকি গসিপ করা — প্রতিটা জায়গায় আমরা অন্যের কথা হুবহু উদ্ধৃত না করে রিপোর্ট করি: 'স্যার বললেন রিপোর্টটা কাল লাগবে'। ইংরেজিতে এই কাজটা তিনটা হাতিয়ারে হয়: tense-এর এক ধাপ পিছোনো (backshift), রিপোর্টিং verb-এর সূক্ষ্ম প্যাটার্ন (admit doing, promise to do, suggest that...), আর প্রশ্ন-আদেশের বাক্য-গড়ন সোজা করে ফেলা। বাংলায় কোনো backshift নেই — 'সে বলল সে আসবে' বাক্যেই ভবিষ্যৎ থেকে যায়, তাই বাঙালি শিক্ষার্থীরা বারবার 'He said he will come' লিখে ফেলেন। এই পাঠে backshift-ও তার ব্যতিক্রমগুলো, রিপোর্টিং verb-এর পরিবার, reported question ও command, আর time/place শব্দের সরে-যাওয়া — সব একসঙ্গে গুছিয়ে শিখব।",
        en: "This is a Unit 0 lesson of the advanced track — a deep tour of Reported Speech. Before starting, finish the intermediate lessons on Reported Speech and the Past Perfect; this lesson stands directly on them. Summing up meetings, reading news reports, writing interview transcripts, even gossiping — everywhere we relay other people's words without quoting them: 'Sir said the report would be needed tomorrow'. English does this with three tools: stepping the tense back (backshift), delicate reporting-verb patterns (admit doing, promise to do, suggest that...), and straightening out the word order of questions and commands. Bengali has no backshift — 'সে বলল সে আসবে' keeps its future form — so Bengali-speaking learners keep writing 'He said he will come'. In this lesson we organise the whole system: backshift and its exceptions, the reporting-verb families, reported questions and commands, and the shifts of time and place words.",
        hi: "यह advanced ट्रैक का Unit 0 पाठ है — Reported Speech की गहरी यात्रा। शुरू करने से पहले intermediate स्तर के Reported Speech और Past Perfect पाठ पूरे करें; यह पाठ ठीक उन्हीं पर खड़ा है। मीटिंग का हिसाब, समाचार पढ़ना, इंटरव्यू-संवाद लिखना, यहाँ तक कि गप्पें — हर जगह हम किसी के कहे को सीधे उद्धृत किए बिना रिपोर्ट करते हैं: 'सर ने कहा रिपोर्ट कल चाहिए'। अंग्रेज़ी यह काम तीन उपकरणों से करती है: tense एक क़दम पीछे खिसकाना (backshift), रिपोर्टिंग verbs के बारीक पैटर्न (admit doing, promise to do, suggest that...), और प्रश्न-आदेश की वाक्य-रचना सीधी कर देना। हिंदी में backshift नहीं होता — 'उसने कहा वह आएगा' में भविष्यत् बना रहता है — इसलिए शिक्षार्थी बार-बार 'He said he will come' लिख देते हैं। इस पाठ में backshift और उसके अपवाद, रिपोर्टिंग verb परिवार, reported question और command, तथा time/place शब्दों के खिसकने का पूरा ढाँचा सीखेंगे।",
      },
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয়: অন্যের কথা হুবহু না বলে জানানো",
            en: "When to use it: relaying words without quoting them",
            hi: "कब इस्तेमाल होता है: दूसरे के कहे को बिना उद्धृत किए बताना",
          },
          body: {
            bn: "Reported speech (indirect speech) তখনই লাগে যখন বক্তার হুবহু শব্দ নয়, ভাবটা জানাতে হয় — সংবাদপত্রের 'the minister said that...', অফিসের মিনিটে 'the manager told us to...', ফোনের বার্তা 'he said he would call back', আর বন্ধুর সঙ্গে 'she told me she was tired'। সরাসরি উদ্ধৃতি (direct speech) নাটক ও সাংবাদিকতার পাঞ্জ হলেও দৈনন্দিন কথাবার্তা ও লেখালেখির ৯০ শতাংশই রিপোর্টেড রূপে চলে।\n\nদুটো ভিত্তি-নিয়ম আগে গোটা করে নিন। এক: রিপোর্টিং verb-এ অতীত (said, told, asked) থাকলে ভেতরের clause-এর tense সাধারণত এক ধাপ পিছিয়ে যায় — এটাই backshift, পরের অংশে বিস্তারিত। দুই: say আর tell-এর ফারাক — say-এর সঙ্গে শোনার ব্যক্তি লাগলে to লাগে (said to me), কিন্তু tell সরাসরি ব্যক্তি নেয় (told me); 'He said me' বাক্য ইংরেজিতে নেই। বাংলা 'বললাম তাকে' রূপটা এই ভুলের মূল — বাংলায় ক্রিয়া একটাই, ইংরেজিতে দুই ক্রিয়ার ভূমিকা ভাগ হয়ে যায়।",
            en: "Reported speech (indirect speech) is needed whenever we pass on the message, not the exact words — in news reports ('the minister said that...'), in meeting minutes ('the manager told us to...'), in phone messages ('he said he would call back'), and in conversation ('she told me she was tired'). Direct quotation is the gear of drama and journalism, yet ninety per cent of daily talk and writing runs on the reported form.\n\nFix two foundation rules first. One: when the reporting verb is past (said, told, asked), the tense inside usually steps one back — that is the backshift, detailed in the next section. Two: the say/tell split — say takes 'to' before the listener (said to me), but tell takes the person directly (told me); 'He said me' is not English. The Bengali 'বললাম তাকে' shape is the root of this error — Bengali has one verb where English splits the job between two.",
            hi: "Reported speech (indirect speech) तब चाहिए जब शब्द-श: नहीं, भाव बताना हो — समाचार में 'the minister said that...', मीटिंग-मिनट्स में 'the manager told us to...', फ़ोन-संदेश में 'he said he would call back', और बातचीत में 'she told me she was tired'। सीधा उद्धरण (direct speech) नाटक-पत्रकारिता की चीज़ है, पर रोज़मर्रा की बातचीत और लेखन के नब्बे प्रतिशत reported रूप में चलते हैं।\n\nपहले दो आधार-नियम गोठ में बाँध लें। एक: रिपोर्टिंग verb अतीत (said, told, asked) हो तो भीतरी clause का tense साधारणतः एक क़दम पीछे जाता है — यही backshift है, अगले भाग में विस्तार। दो: say और tell का फ़र्क़ — say के साथ सुनने वाले से पहले to आता है (said to me), पर tell सीधे व्यक्ति लेता है (told me); 'He said me' अंग्रेज़ी में नहीं है। हिंदी 'मैंने उसे बताया' रूप इस गलती की जड़ है — हिंदी में एक क्रिया, अंग्रेज़ी में काम दो क्रियाओं में बँटता है।",
          },
          examples: [
            {
              wrong: "He said me that he was busy with the audit.",
              right: "He told me that he was busy with the audit.",
              note: {
                bn: "say-এর পরে সরাসরি ব্যক্তি আসে না — told me; বাংলা 'বলল আমাকে' রূপটাই 'said me' বানিয়ে ফেলে।",
                en: "say never takes the person directly — told me; the Bengali 'বলল আমাকে' shape manufactures 'said me'.",
                hi: "say के बाद सीधे व्यक्ति नहीं आता — told me; हिंदी 'उसे बोला' रूप ही 'said me' बना देता है।",
              },
            },
            {
              wrong: "My colleague told, 'The client is angry.'",
              right: "My colleague said, 'The client is angry.'",
              note: {
                bn: "উদ্ধৃতির আগে ব্যক্তি ছাড়া tell চলে না — say, '...' বা told me, '...'; tell-এর ব্যক্তি তালিকাভুক্ত হলে বাক্য ভেঙে পড়ে।",
                en: "Without a person, tell cannot introduce a quote — say, '...' or told me, '...'; a person-less tell collapses the sentence.",
                hi: "व्यक्ति के बिना tell उद्धरण नहीं खोल सकता — say, '...' या told me, '...'; बिना व्यक्ति के tell वाक्य तोड़ देता है।",
              },
            },
            {
              wrong: "In the minutes: The director said, 'We are reviewing the policy.'",
              right: "In the minutes: The director said that the policy was being reviewed.",
              note: {
                bn: "মিনিট-রিপোর্টের লেখ্য-রীতিতে উদ্ধৃতি-চিহ্ন সরিয়ে reported form-ই প্রথাগত; tense-ও backshift হয় (are reviewing → was being reviewed)।",
                en: "Minutes and reports conventionally drop quotation marks for the reported form; the tense backshifts too (are reviewing → was being reviewed).",
                hi: "मिनट्स-रिपोर्ट की लेखन-शैली में उद्धरण-चिह्न हटाकर reported form ही रीति है; tense भी backshift होता है (are reviewing → was being reviewed)।",
              },
            },
            {
              wrong: "He said yesterday he will help me move the furniture.",
              right: "He said yesterday that he would help me move the furniture.",
              note: {
                bn: "রিপোর্টিং verb said (অতীত) → ভেতরের will-ও would-এ পিছোয়; অতীতে বলা প্রতিশ্রুতি অতীত-রূপেই রিপোর্ট হয়।",
                en: "The past reporting verb said pulls will back to would; a promise made in the past is reported in a past form.",
                hi: "अतीत रिपोर्टिंग verb said भीतर के will को would में खींचता है; अतीत में दिया वादा अतीत-रूप में ही रिपोर्ट होता है।",
              },
            },
            {
              wrong: "The receptionist said that Mr Rahman will see you now.",
              right: "The receptionist said that Mr Rahman would see me then.",
              note: {
                bn: "will → would-এর সঙ্গে now-ও then-এ সরে; রিপোর্ট করার মুহূর্তে 'এখন' আর বক্তার 'এখন' এক জায়গা নয়।",
                en: "Along with will → would, now slides to then; 'now' at reporting time and the speaker's 'now' are not the same moment.",
                hi: "will → would के साथ now भी then में खिसकता है; रिपोर्ट के समय का 'अभी' और बोलने वाले का 'अभी' एक क्षण नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "গঠন — backshift-এর প্রসার-টেবিল এক নজরে",
            en: "Formation — the backshift table at a glance",
            hi: "गठन — backshift की गद्य-तालिका एक नज़र में",
          },
          body: {
            bn: "নিচের তালিকাটা প্রসার-টেবিলের মতো পড়ুন — প্রতিটা সারিতে আগে রূপান্তর, তারপর উদাহরণ: • am/is → was — 'I am ready' → He said he was ready. • are → were — 'They are outside' → She said they were outside. • present simple → past simple — 'I work here' → He said he worked there. • present continuous → past continuous — 'We are watching the match' → They said they were watching the match. • present perfect → past perfect — 'I have lost the file' → She said she had lost the file. • past simple → past perfect — 'I saw him at the office' → She said she had seen him at the office. • will → would — 'I will call' → He said he would call. • can → could — 'I can drive' → She said she could drive. • may → might — 'I may be late' → He said he might be late. • must → had to — 'I must finish the audit' → He said he had to finish the audit. • shall → should — 'I shall return' → He said he should return. • have to → had to — 'We have to leave' → They said they had to leave.\n\nসঙ্গে প্রসঙ্গ-সরানোও চলে: I → he/she, my → his/her; that-clause কথ্য ভাষায় প্রায়ই বাদ যায় — He said (that) he was ready। মনে রাখবেন, backshift মানে সময় বদলানো নয় — বক্তার বলার মুহূর্ত আর আমাদের রিপোর্ট করার মুহূর্তের দূরত্বটাই tense-এ গায়ে ধরে; ব্যতিক্রমগুলো চার নম্বর অংশে আসছে।",
            en: "Read the list like a prose table — each row gives the transformation, then an example: • am/is → was — 'I am ready' → He said he was ready. • are → were — 'They are outside' → She said they were outside. • present simple → past simple — 'I work here' → He said he worked there. • present continuous → past continuous — 'We are watching the match' → They said they were watching the match. • present perfect → past perfect — 'I have lost the file' → She said she had lost the file. • past simple → past perfect — 'I saw him at the office' → She said she had seen him at the office. • will → would — 'I will call' → He said he would call. • can → could — 'I can drive' → She said she could drive. • may → might — 'I may be late' → He said he might be late. • must → had to — 'I must finish the audit' → He said he had to finish the audit. • shall → should — 'I shall return' → He said he should return. • have to → had to — 'We have to leave' → They said they had to leave.\n\nPronouns and context travel too: I → he/she, my → his/her; the that-clause often drops in speech — He said (that) he was ready. Remember: backshift does not change time itself — it dresses the distance between the speaker's moment and our reporting moment in tense; the exceptions arrive in section four.",
            hi: "सूची को गद्य-तालिका जैसा पढ़ें — हर पंक्ति में पहले रूपांतर, फिर उदाहरण: • am/is → was — 'I am ready' → He said he was ready. • are → were — 'They are outside' → She said they were outside. • present simple → past simple — 'I work here' → He said he worked there. • present continuous → past continuous — 'We are watching the match' → They said they were watching the match. • present perfect → past perfect — 'I have lost the file' → She said she had lost the file. • past simple → past perfect — 'I saw him at the office' → She said she had seen him at the office. • will → would — 'I will call' → He said he would call. • can → could — 'I can drive' → She said she could drive. • may → might — 'I may be late' → He said he might be late. • must → had to — 'I must finish the audit' → He said he had to finish the audit. • shall → should — 'I shall return' → He said he should return. • have to → had to — 'We have to leave' → They said they had to leave.\n\nसाथ में संदर्भ भी खिसकता है: I → he/she, my → his/her; that-clause बोलचाल में अक्सर गिर जाता है — He said (that) he was ready। याद रखें, backshift समय नहीं बदलता — बोलने के क्षण और रिपोर्ट करने के क्षण की दूरी ही tense में उतरती है; अपवाद चौथे भाग में आ रहे हैं।",
          },
          examples: [
            {
              wrong: "She said she is writing the proposal.",
              right: "She said she was writing the proposal.",
              note: {
                bn: "present continuous → past continuous; রিপোর্টিং said অতীত, তাই ভেতরের রূপও এক ধাপ পিছোয়।",
                en: "present continuous → past continuous; the past reporting said drags the inner form one step back too.",
                hi: "present continuous → past continuous; अतीत said भीतर का रूप भी एक क़दम पीछे खींचता है।",
              },
            },
            {
              wrong: "He said he has lost the office keys.",
              right: "He said he had lost the office keys.",
              note: {
                bn: "present perfect → past perfect (have lost → had lost); 'হারিয়েছে' শুনে has থেকে যাওয়া বাংলাভাষীর চিরচেনা ফাঁদ।",
                en: "present perfect → past perfect (have lost → had lost); keeping has after 'হারিয়েছে' is a classic Bengali-speaker trap.",
                hi: "present perfect → past perfect (have lost → had lost); 'खो दिया है' सुनकर has छोड़ देना पुरानी फँसी है।",
              },
            },
            {
              wrong: "The courier said the parcel will arrive by Monday.",
              right: "The courier said the parcel would arrive by Monday.",
              note: {
                bn: "will → would — ভবিষ্যৎ-অঙ্গীকারও অতীত রিপোর্টে would ধার করে; 'He said he will' কথ্য ভাষায় শোনা গেলেও লেখ্য ইংরেজিতে ভুল।",
                en: "will → would — even a future promise borrows would in a past report; 'He said he will' may pass in speech but is wrong in writing.",
                hi: "will → would — भविष्यत्-वादा भी अतीत रिपोर्ट में would लेता है; 'He said he will' बोलचाल में सुनाई दे भी सकता है पर लिखित अंग्रेज़ी में ग़लत।",
              },
            },
            {
              wrong: "She said she can finish the translation by Friday.",
              right: "She said she could finish the translation by Friday.",
              note: {
                bn: "can → could; রিপোর্টের সময় সক্ষমতাটা বক্তার মুখে অতীত ছিল, তাই could।",
                en: "can → could; at reporting time the ability claim lives in the speaker's past, so could.",
                hi: "can → could; रिपोर्ट के समय योग्यता का दावा बोलने वाले के अतीत में था, इसलिए could।",
              },
            },
            {
              wrong: "The auditor said he must see the vouchers that afternoon.",
              right: "The auditor said he had to see the vouchers that afternoon.",
              note: {
                bn: "must → had to; অতীতের বাধ্যবাধকতা must-এই থেকে যায় না — রিপোর্টে had to-ই প্রমিত রূপ।",
                en: "must → had to; a past obligation does not stay as must — had to is the standard reported form.",
                hi: "must → had to; अतीत की बाध्यता must रूप में नहीं रहती — रिपोर्ट में had to ही प्रमित रूप।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "আভাস ও প্যাটার্ন — কোন শব্দ কোন রূপান্তর ডাকে",
            en: "Signals — which words call which transformation",
            hi: "संकेत — कौन-सा शब्द कौन-सा रूपांतर बुलाता है",
          },
          body: {
            bn: "Advanced স্তরের দক্ষতা হলো বাক্যের সংকেত দেখেই রূপান্তরের ধরন ঠিক করা: • রিপোর্টিং verb অতীত (said, told, asked, warned, explained) → backshift চালু। • বাক্যে প্রশ্ন থাকলে (? বা wh-word/auxiliary দিয়ে শুরু) → প্রশ্নের উল্টো গড়ন সোজা হয়, do/does/did মুছে যায়, প্রশ্নবোধক চিহ্ন উঠে যায়; হ্যাঁ/না-প্রশ্নে if/whether বসে। • আদেশ-নিষেধ থাকলে → told/ordered + ব্যক্তি + to-infinitive; নিষেধে not to; অনুরোধে asked + ব্যক্তি + to-infinitive। • time/place শব্দ দেখলে → সেগুলোও এক ধাপ দূরে সরে (now→then, here→there)। • রিপোর্টিং verb-এর সঙ্গী-প্যাটার্ন দেখলে (admit, deny, suggest, promise, offer) → verb-এর পরিবার অনুযায়ী -ing বা to-infinitive।\n\nএকটা সোনার পরীক্ষা: সরাসরি বাক্যটা প্রশ্ন ছিল, আদেশ ছিল, নাকি বিবৃতি? প্রশ্ন হলে গড়ন সোজা করে ব্যাকশিফট, আদেশ হলে to-infinitive-এ ঢালুন, বিবৃতি হলে that-clause-এ। এই তিন রাস্তার মধ্যে যেটা সঠিক, বাক্যের যতিচিহ্ন আর শুরুর শব্দই সেটা বলে দেয়।",
            en: "Advanced skill is deciding the transformation from the signals alone: • Past reporting verb (said, told, asked, warned, explained) → backshift on. • A question inside (starting with a wh-word or an auxiliary) → the question word order straightens, do/does/did vanish, the question mark disappears; yes/no questions take if/whether. • A command or prohibition → told/ordered + person + to-infinitive; prohibitions take not to; requests take asked + person + to-infinitive. • Time and place words → they shift one step away too (now→then, here→there). • The reporting verb's own partner pattern (admit, deny, suggest, promise, offer) → -ing or to-infinitive according to the verb's family.\n\nA golden test: was the direct sentence a question, a command, or a statement? For a question, straighten the order and backshift; for a command, slope into the to-infinitive; for a statement, use a that-clause. The punctuation and the opening word tell you which of the three roads to take.",
            hi: "एडवांस्ड कौशल है संकेत देखकर रूपांतर तय करना: • अतीत रिपोर्टिंग verb (said, told, asked, warned, explained) → backshift चालू। • भीतर प्रश्न हो (wh-word या auxiliary से शुरू) → प्रश्न की उलटी रचना सीधी होती है, do/does/did मिट जाते हैं, प्रश्न-चिह्न गिर जाता है; हाँ/ना-प्रश्न में if/whether बैठता है। • आदेश-निषेध हो → told/ordered + व्यक्ति + to-infinitive; निषेध में not to; अनुरोध में asked + व्यक्ति + to-infinitive। • time/place शब्द → वे भी एक क़दम दूर जाते हैं (now→then, here→there)। • रिपोर्टिंग verb का अपना पैटर्न (admit, deny, suggest, promise, offer) → verb-परिवार के अनुसार -ing या to-infinitive।\n\nसुनहरा परीक्षण: सीधा वाक्य प्रश्न था, आदेश था, या कथन? प्रश्न हो तो रचना सीधी करके backshift, आदेश हो तो to-infinitive की ढलान, कथन हो तो that-clause। तीन रास्तों में से सही रास्ता विराम-चिह्न और पहले शब्द से ही बता देते हैं।",
          },
          examples: [
            {
              wrong: "She asked me where do I work.",
              right: "She asked me where I worked.",
              note: {
                bn: "reported question-এ বিবৃতির গড়ন: where + I worked; do মুছে যায়, প্রশ্নবোধক চিহ্নও — বাংলা 'কোথায় কাজ করো?' রূপের ছায়া এখানেই পড়ে।",
                en: "A reported question takes statement order: where + I worked; do and the question mark both vanish — the shadow of the Bengali direct question falls right here.",
                hi: "reported question में कथन-क्रम: where + I worked; do और प्रश्न-चिह्न दोनों मिटते हैं — हिंदी सीधे प्रश्न की छाया यहीं पड़ती है।",
              },
            },
            {
              wrong: "He asked me do I like filter coffee.",
              right: "He asked me if I liked filter coffee.",
              note: {
                bn: "হ্যাঁ/না-প্রশ্নে শুরু হয় if/whether দিয়ে, তারপর সোজা গড়ন; do/does/did-এর কোনো জায়গা নেই।",
                en: "Yes/no questions open with if/whether, then straight order; there is no room for do/does/did.",
                hi: "हाँ/ना-प्रश्न if/whether से खुलता है, फिर सीधा क्रम; do/does/did को कोई जगह नहीं।",
              },
            },
            {
              wrong: "The coach told to the players run faster.",
              right: "The coach told the players to run faster.",
              note: {
                bn: "আদেশের রিপোর্ট: told + ব্যক্তি + to-infinitive; to এবং ব্যক্তি — দুটোর কোনোটাই বাদ গেলে বাক্য ভেঙে পড়ে।",
                en: "Reporting a command: told + person + to-infinitive; drop either the person or to and the sentence collapses.",
                hi: "आदेश की रिपोर्ट: told + व्यक्ति + to-infinitive; व्यक्ति या to में से कोई एक गिरा तो वाक्य टूट जाता है।",
              },
            },
            {
              wrong: "He said he will meet me here tomorrow.",
              right: "He said he would meet me there the next day.",
              note: {
                bn: "একসঙ্গে তিন সরে-যাওয়া: will → would, here → there, tomorrow → the next day; বক্তার সময়-জায়গা থেকে রিপোর্টারের সময়-জায়গায় দূরত্বই এই শব্দগুলোর যাত্রা।",
                en: "Three shifts at once: will → would, here → there, tomorrow → the next day; these words travel the distance from the speaker's time-place to the reporter's.",
                hi: "एक साथ तीन खिसकन: will → would, here → there, tomorrow → the next day; ये शब्द बोलने वाले के समय-स्थान से रिपोर्टर के समय-स्थान तक की दूरी तय करते हैं।",
              },
            },
            {
              wrong: "She asked what is the price of the ticket.",
              right: "She asked what the price of the ticket was.",
              note: {
                bn: "wh-word থাকলেও গড়ন বিবৃতির মতো: what + the price ... was; is-ও অতীত হয়ে was হয়।",
                en: "Even with a wh-word the order is statement-like: what + the price ... was; is itself becomes was.",
                hi: "wh-word होते हुए भी क्रम कथन-सा: what + the price ... was; is खुद होकर was हो जाता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "Backshift-এর ব্যতিক্রম — যখন tense পিছোয় না",
            en: "Exceptions to the backshift — when the tense stays",
            hi: "Backshift के अपवाद — जब tense नहीं खिसकता",
          },
          body: {
            bn: "backshift যান্ত্রিক নিয়ম নয় — তিনটা বড় ব্যতিক্রম C1 স্তরের পরীক্ষা। প্রথম: চিরন্তন সত্য ও বৈজ্ঞানিক তথ্য — The teacher said that water boils at 100 degrees; পৃথিবী ঘোরে, ঢাকা বাংলাদেশের রাজধানী — এসব বিবৃতিতে present-ই থাকে, কারণ সত্যটা আজও সত্য। দ্বিতীয়: এখনও সত্যি অবস্থা — She said she lives in Uttara বলা বৈধ, যদি উনি এখনও উত্তরাতেই থাকেন; She said she loves rabindra-sangeet — ভালোবাসাটা এখনও চলছে। এখানে বক্তা ইচ্ছা করে বেছে নেন: তথ্যটা কি 'তখনকার দাবি', নাকি 'আজকের বাস্তবতা'?\n\nতৃতীয়: রিপোর্টিং verb নিজেই বর্তমান কালে — He says he is tired; The anchor reports that the team is chasing 280; লাইভ কমেন্ট্রি ও সদ্য-প্রাপ্ত সংবাদে says/reports/is reporting-এর সঙ্গে backshift হয় না। সঙ্গে মনে রাখুন: খুব তাৎক্ষণিক রিপোর্টে ('I am tired,' he said → He said he is tired) ব্রিটিশ কথ্য ইংরেজি ব্যাকশিফট ছেড়ে দিতে পারে — তবে লেখ্য-পরীক্ষায় নিরাপদ পথ ব্যাকশিফট। সিদ্ধান্তের প্রশ্ন একটাই: রিপোর্ট করার এই মুহূর্তে কথাটা কি এখনও সত্যি?",
            en: "The backshift is not a mechanical rule — three big exceptions matter at C1. First: universal truths and scientific facts — The teacher said that water boils at 100 degrees; the earth revolves, Dhaka is the capital of Bangladesh — such statements keep the present, because the truth is still true. Second: conditions still holding — She said she lives in Uttara is valid if she still lives there; She said she loves rabindra-sangeet — the love continues. Here the speaker chooses deliberately: is the claim 'a claim of that moment' or 'today's reality'?\n\nThird: the reporting verb itself in the present — He says he is tired; The anchor reports that the team is chasing 280; in live commentary and breaking news, says/reports/is reporting takes no backshift. Also remember: in very immediate reports ('I am tired,' he said → He said he is tired) British casual speech may skip the backshift — yet in written exams the safe road is the backshift. The deciding question is single: is the statement still true at the moment of reporting?",
            hi: "Backshift यांत्रिक नियम नहीं — तीन बड़े अपवाद C1 स्तर पर पूछे जाते हैं। पहला: शाश्वत सत्य और वैज्ञानिक तथ्य — The teacher said that water boils at 100 degrees; पृथ्वी घूमती है, ढाका बांग्लादेश की राजधानी — ऐसे कथनों में present ही रहता है, क्योंकि सत्य आज भी सत्य है। दूसरा: अब भी सही स्थिति — She said she lives in Uttara वैध है, अगर वे अब भी उत्तरा में रहते हैं; She said she loves rabindra-sangeet — प्रेम अब भी चालू। यहाँ बोलने वाला जानबूझकर चुनता है: दावा 'उस क्षण का' था या 'आज की वास्तविकता' है?\n\nतीसरा: रिपोर्टिंग verb खुद वर्तमान में — He says he is tired; The anchor reports that the team is chasing 280; लाइव कमेंट्री और ताज़ा ख़बर में says/reports/is reporting के साथ backshift नहीं होता। साथ रखें: बहुत तात्कालिक रिपोर्ट में ('I am tired,' he said → He said he is tired) ब्रिटिश बोलचाल backshift छोड़ भी सकता है — पर लिखित परीक्षा में सुरक्षित रास्ता backshift है। निर्णायक सवाल एक ही: रिपोर्ट के इस क्षण कथन अब भी सच है?",
          },
          examples: [
            {
              wrong: "The teacher said that water boiled at 100 degrees Celsius.",
              right: "The teacher said that water boils at 100 degrees Celsius.",
              note: {
                bn: "বৈজ্ঞানিক চিরন্তন সত্য — backshift নয়; সত্যটা রিপোর্টের মুহূর্তেও অটুট, তাই present simple থাকে।",
                en: "A universal scientific truth — no backshift; the fact still holds at reporting time, so the present simple stays.",
                hi: "वैज्ञानिक शाश्वत सत्य — backshift नहीं; तथ्य रिपोर्ट के क्षण भी अटल है, इसलिए present simple रहता है।",
              },
            },
            {
              wrong: "My uncle said that Dhaka was the capital of Bangladesh.",
              right: "My uncle said that Dhaka is the capital of Bangladesh.",
              note: {
                bn: "রাজধানী আজও ঢাকা — এখনও সত্যি তথ্যে backshift ঐচ্ছিক, বরং present-ই স্বাভাবিক; was লিখলে মনে হয় রাজধানী একসময় অন্যত্র ছিল।",
                en: "Dhaka is still the capital — for facts that still hold, skipping the backshift is natural; was would imply the capital once sat elsewhere.",
                hi: "राजधानी आज भी ढाका — अब भी सही तथ्य पर backshift छोड़ना स्वाभाविक; was लिखेंगे तो लगेगा कभी राजधानी और थी।",
              },
            },
            {
              wrong: "Rina said that she liked mangoes, so I bought her a crate — she still adores them.",
              right: "Rina said that she likes mangoes, so I bought her a crate — she still adores them.",
              note: {
                bn: "স্বাদটা এখনও চলছে (she still adores them) — still-true অবস্থায় present রাখা বৈধ ও অর্থবহ; liked লিখলে মনে হয় এখন আর পছন্দ নয়।",
                en: "The liking is still alive (she still adores them) — in still-true situations keeping the present is valid and meaningful; liked would suggest the taste has ended.",
                hi: "पसंद अब भी जीवित है (she still adores them) — still-true स्थिति में present रखना वैध और अर्थपूर्ण; liked कहने से लगेगा अब पसंद नहीं।",
              },
            },
            {
              wrong: "The commentator said that Bangladesh was chasing 280 with ten overs left.",
              right: "The commentator says that Bangladesh is chasing 280 with ten overs left.",
              note: {
                bn: "লাইভ কমেন্ট্রি বলছেই যে ঘটছে — রিপোর্টিং verb বর্তমান (says), তাই ভেতরেও present; সম্প্রচারের ভাষায় এটাই রীতি।",
                en: "Live commentary reports what is happening now — the reporting verb is present (says), so the inside stays present too; this is the broadcast convention.",
                hi: "लाइव कमेंट्री वही बता रही है जो अभी हो रहा है — रिपोर्टिंग verb वर्तमान (says), इसलिए भीतर भी present; प्रसारण-भाषा की यही रीति है।",
              },
            },
            {
              wrong: "She said the express train would leave at 7 every morning — and the timetable has not changed at all.",
              right: "She said the express train leaves at 7 every morning — and the timetable has not changed at all.",
              note: {
                bn: "সময়সূচি এখনও প্রযোজ্য — নিয়মিত schedule-এর কথা still-true হিসেবে present simple-এই থাকে; would বললে সময়সূচিটা অতীতের বলে ধরে নেওয়া হয়।",
                en: "The schedule still applies — a regular timetable stays in the present simple as a still-true fact; would would treat the timetable as a thing of the past.",
                hi: "सारणी अब भी लागू है — नियमित schedule अब-भी-सत्य के रूप में present simple में रहता है; would कहने से सारणी अतीत मान ली जाएगी।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "রিপোর্টিং verb-এর পরিবার — admit, deny, promise, suggest, apologise",
            en: "The reporting-verb families — admit, deny, promise, suggest, apologise",
            hi: "रिपोर्टिंग verb के परिवार — admit, deny, promise, suggest, apologise",
          },
          body: {
            bn: "C1 লেখার রসদ হলো said-কে বিদায় দিয়ে সঠিক রিপোর্টিং verb বেছে নেওয়া — তবে প্রতিটার নিজের প্যাটার্ন আছে। • -ing পরিবার: admit/deny/mention + -ing — He admitted leaking the file; She denied taking the money; He mentioned meeting her in Cox's Bazar. • to-infinitive পরিবার: promise/agree/refuse/offer + to — He promised to help; They agreed to fund the project; She refused to sign; He offered to drive me home. • suggest + -ing অথবা that-clause — She suggested taking a taxi; She suggested that we take a taxi — কিন্তু suggest-এর সঙ্গে object + to-infinitive অসম্ভব ('suggested me to take' নেই)। • apologise for + -ing — He apologised for being late. • ব্যক্তি + to-infinitive পরিবার: advise/encourage/remind/warn/tell/ask + object + to — The doctor advised me to rest; She reminded us to bring ID; He warned them not to touch the wire.\n\nএই পরিবারগুলো মুখস্থ হলে বাক্য দুই ধাপ পেশাদার হয়: 'He said he did not take it' → 'He denied taking it' — এক ক্রিয়ায় অস্বীকারের জোর এসে গেল। আর মনে রাখুন: deny-র সঙ্গে that...not জুড়তে হয় না — অস্বীকারটা deny-র ভেতরেই বাস করে।",
            en: "The food of C1 writing is retiring said and choosing the precise reporting verb — but each has its own pattern. • The -ing family: admit/deny/mention + -ing — He admitted leaking the file; She denied taking the money; He mentioned meeting her in Cox's Bazar. • The to-infinitive family: promise/agree/refuse/offer + to — He promised to help; They agreed to fund the project; She refused to sign; He offered to drive me home. • suggest + -ing or a that-clause — She suggested taking a taxi; She suggested that we take a taxi — but suggest never takes object + to-infinitive ('suggested me to take' does not exist). • apologise for + -ing — He apologised for being late. • The person + to-infinitive family: advise/encourage/remind/warn/tell/ask + object + to — The doctor advised me to rest; She reminded us to bring ID; He warned them not to touch the wire.\n\nOnce these families are memorised, sentences rise two steps in professionalism: 'He said he did not take it' → 'He denied taking it' — one verb carries the whole force of denial. And remember: deny never pairs with that...not — the denial already lives inside deny.",
            hi: "C1 लेखन का आहार है said को विदा कहकर सही रिपोर्टिंग verb चुनना — पर हर एक का अपना पैटर्न है। • -ing परिवार: admit/deny/mention + -ing — He admitted leaking the file; She denied taking the money; He mentioned meeting her in Cox's Bazar. • to-infinitive परिवार: promise/agree/refuse/offer + to — He promised to help; They agreed to fund the project; She refused to sign; He offered to drive me home. • suggest + -ing या that-clause — She suggested taking a taxi; She suggested that we take a taxi — पर suggest के साथ object + to-infinitive असंभव ('suggested me to take' नहीं होता)। • apologise for + -ing — He apologised for being late. • व्यक्ति + to-infinitive परिवार: advise/encourage/remind/warn/tell/ask + object + to — The doctor advised me to rest; She reminded us to bring ID; He warned them not to touch the wire.\n\nये परिवार रट जाएँ तो वाक्य दो पायदान पेशेवर हो जाता है: 'He said he did not take it' → 'He denied taking it' — एक क्रिया में इनकार की पूरी ताक़त आ गई। और याद रखें: deny के साथ that...not जोड़ा नहीं जाता — इनकार deny के भीतर ही रहता है।",
          },
          examples: [
            {
              wrong: "He denied that he did not take the money.",
              right: "He denied taking the money.",
              note: {
                bn: "deny-র ভেতরেই অস্বীকার আছে — that he did not জুড়লে দ্বিগুণ নেগেশনে অর্থ উল্টে যায়; প্রমিত রূপ deny + -ing।",
                en: "The denial already lives inside deny — adding that he did not doubles the negation and flips the meaning; the standard form is deny + -ing.",
                hi: "इनकार deny के भीतर है — that he did not जोड़ने से दोहरा नेगेशन अर्थ पलट देता है; प्रमित रूप deny + -ing।",
              },
            },
            {
              wrong: "The minister admitted to leak the report.",
              right: "The minister admitted leaking the report.",
              note: {
                bn: "admit + -ing; 'admitted to leaking' কথ্য ভাষায় শোনা গেলেও admit + to-infinitive প্রমিত নয় — সরাসরি -ing সবচেয়ে নিরাপদ।",
                en: "admit + -ing; 'admitted to leaking' may be heard in speech, but admit + to-infinitive is not standard — bare -ing is the safest choice.",
                hi: "admit + -ing; 'admitted to leaking' बोलचाल में सुनाई दे भी सकता है, पर admit + to-infinitive प्रमित नहीं — सीधा -ing सबसे सुरक्षित।",
              },
            },
            {
              wrong: "They agreed starting the project in January.",
              right: "They agreed to start the project in January.",
              note: {
                bn: "agree + to-infinitive — সম্মতি সামনের কাজের প্রতিশ্রুতি, তাই to; agree on a date (দর-কষাকষি) আলাদা প্যাটার্ন।",
                en: "agree + to-infinitive — agreement is a promise about a forward action, hence to; agree on a date (negotiation) is a different pattern.",
                hi: "agree + to-infinitive — सहमति आगे के काम का वादा है, इसलिए to; agree on a date (मोल-भाव) अलग पैटर्न है।",
              },
            },
            {
              wrong: "He promised helping me with the visa papers.",
              right: "He promised to help me with the visa papers.",
              note: {
                bn: "promise + to-infinitive; -ing জুড়লে প্রতিশ্রুতির প্রতিশ্রুতিবদ্ধতাটাই হারায় — promise-এর সাথী to।",
                en: "promise + to-infinitive; attaching -ing strips the commitment out of the promise — to is promise's partner.",
                hi: "promise + to-infinitive; -ing जोड़ने से वादे की प्रतिबद्धता ही छूट जाती है — promise का साथी to है।",
              },
            },
            {
              wrong: "She suggested me to try the new café near Gulshan.",
              right: "She suggested that I try the new café near Gulshan. / She suggested trying the new café near Gulshan.",
              note: {
                bn: "suggest-এর সঙ্গে object + to-infinitive অসম্ভব — হয় suggest + -ing, নয় suggest that + সোজা গড়ন; বাংলা 'আমাকে পরামর্শ দিল' রূপটা এই ভুলের উৎস।",
                en: "suggest never takes object + to-infinitive — either suggest + -ing or suggest that + straight order; the Bengali 'আমাকে পরামর্শ দিল' shape is the source of this error.",
                hi: "suggest के साथ object + to-infinitive असंभव — या suggest + -ing, या suggest that + सीधा क्रम; हिंदी 'मुझे सुझाव दिया' रूप इस गलती का स्रोत।",
              },
            },
            {
              wrong: "He apologised to be late again.",
              right: "He apologised for being late again.",
              note: {
                bn: "apologise for + -ing — ক্ষমা চাওয়ার বিষয়টা for-এর পিছনে -ing রূপে বসে; to be নয়।",
                en: "apologise for + -ing — the thing apologised for sits behind for as an -ing form; never to be.",
                hi: "apologise for + -ing — माफ़ी माँगे जाने वाला काम for के पीछे -ing रूप में बैठता है; to be नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "Reported question ও command + সময়-জায়গার শব্দের যাত্রা",
            en: "Reported questions and commands + the journey of time and place words",
            hi: "Reported questions और commands + समय-स्थान के शब्दों की यात्रा",
          },
          body: {
            bn: "প্রশ্ন রিপোর্ট করার তিনটি ধাপ: (১) wh-word থাকলে সেটাই থাকে (where, what, when, why, how), হ্যাঁ/না-প্রশ্নে if/whether বসে; (২) গড়ন বিবৃতির মতো সোজা — সহায়ক ক্রিয়া subject-এর আগে যায় না, do/does/did মুছে যায়, প্রশ্নবোধক চিহ্ন পরিণত হয় দাঁড়িতে; (৩) tense ব্যাকশিফট হয়। Direct: 'Where do you live?' → She asked where I lived. Direct: 'Do you know the manager?' → He asked whether I knew the manager.\n\nআদেশ-অনুরোধের রূপান্তর: told/ordered/commanded + ব্যক্তি + to-infinitive (আদেশ); asked + ব্যক্তি + to-infinitive (অনুরোধ); নিষেধে not to (Mother told me not to touch the wet paint)। Direct: 'Please wait outside.' → The nurse asked me to wait outside. Direct: 'Don't be late.' → The coach ordered us not to be late.\n\nসময়-জায়গার শব্দগুলোও এক ধাপ দূরে যায়: now → then; today → that day; tonight → that night; yesterday → the day before / the previous day; tomorrow → the next day / the following day; ago → before; next week → the following week; last week → the week before; here → there; this → that; these → those; come → go। মূল সূত্র: বক্তার ঘড়ি-মানচিত্র থেকে রিপোর্টারের ঘড়ি-মানচিত্রে ঠিকানা বদলায়।",
            en: "Three steps for reporting a question: (1) the wh-word stays (where, what, when, why, how); yes/no questions take if/whether; (2) the order straightens like a statement — the auxiliary never goes before the subject, do/does/did are deleted, and the question mark matures into a full stop; (3) the tense backshifts. Direct: 'Where do you live?' → She asked where I lived. Direct: 'Do you know the manager?' → He asked whether I knew the manager.\n\nTransforming commands and requests: told/ordered/commanded + person + to-infinitive (commands); asked + person + to-infinitive (requests); prohibitions take not to (Mother told me not to touch the wet paint). Direct: 'Please wait outside.' → The nurse asked me to wait outside. Direct: 'Don't be late.' → The coach ordered us not to be late.\n\nTime and place words also step one away: now → then; today → that day; tonight → that night; yesterday → the day before / the previous day; tomorrow → the next day / the following day; ago → before; next week → the following week; last week → the week before; here → there; this → that; these → those; come → go. The core idea: the address changes from the speaker's clock-and-map to the reporter's clock-and-map.",
            hi: "प्रश्न रिपोर्ट करने के तीन चरण: (1) wh-word बना रहता है (where, what, when, why, how); हाँ/ना-प्रश्न में if/whether बैठता है; (2) क्रम कथन-सा सीधा — सहायक क्रिया subject से पहले नहीं जाती, do/does/did मिटते हैं, प्रश्न-चिह्न पूर्ण विराम में बदलता है; (3) tense backshift होता है। Direct: 'Where do you live?' → She asked where I lived. Direct: 'Do you know the manager?' → He asked whether I knew the manager.\n\nआदेश-अनुरोध का रूपांतर: told/ordered/commanded + व्यक्ति + to-infinitive (आदेश); asked + व्यक्ति + to-infinitive (अनुरोध); निषेध में not to (Mother told me not to touch the wet paint)। Direct: 'Please wait outside.' → The nurse asked me to wait outside. Direct: 'Don't be late.' → The coach ordered us not to be late.\n\nसमय-स्थान के शब्द भी एक क़दम दूर जाते हैं: now → then; today → that day; tonight → that night; yesterday → the day before / the previous day; tomorrow → the next day / the following day; ago → before; next week → the following week; last week → the week before; here → there; this → that; these → those; come → go। मूल सूत्र: बोलने वाले की घड़ी-नक्शे से रिपोर्टर की घड़ी-नक्शे तक पता बदलता है।",
          },
          examples: [
            {
              wrong: "She asked me what was my expected salary.",
              right: "She asked me what my expected salary was.",
              note: {
                bn: "reported question-এ wh-word-এর পরে subject আগে, ক্রিয়া পরে — what my expected salary was; ইন্টারভিউ-সংলাপে এই উল্টো-গড়ন সবচেয়ে ঘন ঘন ভুল।",
                en: "In a reported question the subject comes before the verb after the wh-word — what my expected salary was; this inverted order is the most frequent interview-transcript error.",
                hi: "reported question में wh-word के बाद subject पहले, क्रिया बाद — what my expected salary was; इंटरव्यू-संवाद में यह उलटा क्रम सबसे घना गलती है।",
              },
            },
            {
              wrong: "The tourist asked the policeman does the bus stop at the museum.",
              right: "The tourist asked the policeman if the bus stopped at the museum.",
              note: {
                bn: "হ্যাঁ/না-প্রশ্নে if + সোজা গড়ন + ব্যাকশিফট; does মুছে যায়, stop → stopped।",
                en: "Yes/no questions take if + straight order + backshift; does vanishes and stop becomes stopped.",
                hi: "हाँ/ना-प्रश्न में if + सीधा क्रम + backshift; does मिटता है, stop हो जाता है stopped।",
              },
            },
            {
              wrong: "The manager said me to submit the revised budget.",
              right: "The manager told me to submit the revised budget.",
              note: {
                bn: "আদেশ রিপোর্টে said নয় — told/ordered + ব্যক্তি + to; said me-র মিশ্রণটা 'বলল আমাকে'-র সরাসরি ছায়া।",
                en: "Commands are not reported with said — told/ordered + person + to; the said me mixture is a direct shadow of 'বলল আমাকে'.",
                hi: "आदेश की रिपोर्ट said से नहीं — told/ordered + व्यक्ति + to; said me का मिश्रण 'उसे बोला' की सीधी छाया है।",
              },
            },
            {
              wrong: "Mother told me do not touch the wet paint.",
              right: "Mother told me not to touch the wet paint.",
              note: {
                bn: "নিষেধের রিপোর্ট not to — do not-এর do রিপোর্টে টিকে থাকে না; সূত্র: told + ব্যক্তি + not to + V1।",
                en: "Prohibitions take not to — the do of do not never survives the report; formula: told + person + not to + V1.",
                hi: "निषेध की रिपोर्ट not to — do not का do रिपोर्ट में नहीं बचता; सूत्र: told + व्यक्ति + not to + V1।",
              },
            },
            {
              wrong: "He said he had met the ambassador here two days ago.",
              right: "He said he had met the ambassador there two days before.",
              note: {
                bn: "here → there আর ago → before — সাক্ষাৎটা বক্তার জায়গা-সময়ে ঘটেছিল, রিপোর্টে ঠিকানা এক ধাপ দূরে।",
                en: "here → there and ago → before — the meeting happened in the speaker's place-time; in the report the address steps one away.",
                hi: "here → there और ago → before — भेंट बोलने वाले के स्थान-समय में हुई थी; रिपोर्ट में पता एक क़दम दूर।",
              },
            },
            {
              wrong: "She said she would submit the assignment yesterday.",
              right: "She said she had submitted the assignment the day before.",
              note: {
                bn: "yesterday → the day before; আর কাজটা বলার আগেই শেষ ছিল, তাই would submit নয় — had submitted (past perfect)।",
                en: "yesterday → the day before; and the submission was finished before the speaking, so not would submit — had submitted (past perfect).",
                hi: "yesterday → the day before; और काम बोलने से पहले ही पूरा था, इसलिए would submit नहीं — had submitted (past perfect)।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "Subtle errors made by advanced learners",
            hi: "एडवांस्ड शिक्षार्थियों की सूक्ष्म गलतियाँ",
          },
          body: {
            bn: "Advanced শিক্ষার্থীদের reported-speech-ভুল গড়ন ঠিক রেখেই ঘটে, তাই পড়তে গিয়ে ধরা পড়ে না। প্রথম দল: tell/explain/describe/suggest-এর double-object ফাঁদ — 'The teacher told that...' (ব্যক্তি ছাড়া tell), 'explained us the rules' (explain দুই object নেয় না)। দ্বিতীয় দল: reported question-এ auxiliary-ছায়া — 'asked me whether did I know'। তৃতীয় দল: দীর্ঘ বাক্যে ব্যাকশিফট ঝরে পড়া — প্রথম clause-এ had/would ঠিক আছে, কিন্তু শেষ প্রান্তে has/will ফিরে আসে: 'He said that since he has finished the course, he will apply for the job' → had finished ... would apply।\n\nচতুর্থ দল: আদেশে said...to জুড়ে দেওয়া — 'She said me to wait' → She told me to wait। পঞ্চম দল: চিরন্তন সত্যকেও ব্যাকশিফট করা — 'The professor said the earth revolved around the sun' — ভুল না হলেও অর্থ বদলে যায়, মনে হয় পৃথিবী একসময় ঘুরত, এখন আর নয়! এই পাঁচ দল নিজের লেখায় মাঝে মাঝে খুঁজে দেখুন — সংবাদ-অনুচ্ছেদ বা মিটিং-নোট ইংরেজিতে লিখতে গেলেই এরা ফিরে আসে।",
            en: "Advanced learners' reported-speech errors happen inside well-formed sentences, so they escape a quick read. Group one: the double-object trap with tell/explain/describe/suggest — 'The teacher told that...' (tell without a person), 'explained us the rules' (explain never takes two objects). Group two: auxiliary shadows in reported questions — 'asked me whether did I know'. Group three: the backshift dripping away in long sentences — the first clause keeps had/would, but has/will sneak back at the far end: 'He said that since he has finished the course, he will apply for the job' → had finished ... would apply.\n\nGroup four: stitching said...to for commands — 'She said me to wait' → She told me to wait. Group five: backshifting even universal truths — 'The professor said the earth revolved around the sun' — not ungrammatical, but the meaning shifts: it sounds as if the earth once revolved and has now stopped! Scan your own writing for these five groups now and then — they return the moment you draft a news paragraph or meeting notes in English.",
            hi: "एडवांस्ड शिक्षार्थियों की reported-speech गलतियाँ ढाँचा सही रखकर होती हैं, इसलिए पढ़ते हुए पकड़ में नहीं आतीं। पहला समूह: tell/explain/describe/suggest की double-object फँसी — 'The teacher told that...' (बिना व्यक्ति tell), 'explained us the rules' (explain दो objects नहीं लेता)। दूसरा समूह: reported question में auxiliary-छाया — 'asked me whether did I know'। तीसरा समूह: लंबे वाक्य में backshift टपक जाना — पहले clause में had/would सही, पर दूर छोर पर has/will लौट आते हैं: 'He said that since he has finished the course, he will apply for the job' → had finished ... would apply।\n\nचौथा समूह: आदेश में said...to जोड़ देना — 'She said me to wait' → She told me to wait। पाँचवाँ समूह: शाश्वत सत्य का भी backshift — 'The professor said the earth revolved around the sun' — अव्याकरणिक नहीं, पर अर्थ बदल जाता है: लगता है पृथ्वी कभी घूमती थी, अब नहीं! अपने लेखन में इन पाँच समूहों को समय-समय पर खोजें — अंग्रेज़ी में समाचार-अनुच्छेद या मीटिंग-नोट लिखते ही ये लौट आते हैं।",
          },
          examples: [
            {
              wrong: "The teacher told that the results would be out on Sunday.",
              right: "The teacher said that the results would be out on Sunday. / The teacher told us that the results would be out on Sunday.",
              note: {
                bn: "tell-এর ব্যক্তি ছাড়া অস্তিত্ব নেই — হয় said (that)..., নয় told us that...; ব্যক্তি উল্লেখ না থাকলে said-ই নিরাপদ।",
                en: "tell cannot exist without its person — either said (that)... or told us that...; when no listener is named, said is the safe road.",
                hi: "tell बिना व्यक्ति के रह ही नहीं सकता — या said (that)..., या told us that...; श्रोता न हो तो said ही सुरक्षित।",
              },
            },
            {
              wrong: "He asked me whether did I know the answer to the riddle.",
              right: "He asked me whether I knew the answer to the riddle.",
              note: {
                bn: "whether/if-এর পরেও গড়ন বিবৃতির মতো — did মুছে যায়, know → knew; প্রশ্ন-ছায়া দুইবার ঢুকে গেল।",
                en: "Even after whether/if the order is statement-like — did is deleted and know becomes knew; the question-shadow crept in twice.",
                hi: "whether/if के बाद भी क्रम कथन-सा — did मिटता है, know होता है knew; प्रश्न-छाया दो बार घुस गई।",
              },
            },
            {
              wrong: "She said me to wait outside the chamber.",
              right: "She told me to wait outside the chamber.",
              note: {
                bn: "আদেশ-অনুরোধের রিপোর্ট told/asked + ব্যক্তি + to; said me to — দুই ভুলের জোড়া (said me + said to do)।",
                en: "Commands and requests take told/asked + person + to; said me to is a pair of errors in one (said me + said to do).",
                hi: "आदेश-अनुरोध की रिपोर्ट told/asked + व्यक्ति + to; said me to — एक साथ दो गलतियाँ (said me + said to do)।",
              },
            },
            {
              wrong: "The guide explained us the history of the fort in detail.",
              right: "The guide explained the history of the fort to us in detail.",
              note: {
                bn: "explain, describe, suggest — এরা দুই object নেয় না; শোনার ব্যক্তিকে to-এর পিছনে পাঠান — explained the history TO us।",
                en: "explain, describe, suggest — none takes two objects; send the listener behind to — explained the history TO us.",
                hi: "explain, describe, suggest — ये दो objects नहीं लेते; सुनने वाले को to के पीछे भेजें — explained the history TO us।",
              },
            },
            {
              wrong: "He said that since he has finished the training, he will apply for the offshore post.",
              right: "He said that since he had finished the training, he would apply for the offshore post.",
              note: {
                bn: "দীর্ঘ reported বাক্যের দূর-প্রান্তে ব্যাকশিফট ঝরে পড়ে — has → had, will → would; পুরো that-clause-টা একই অতীত জগতে থাকে।",
                en: "In long reported sentences the backshift drips away at the far end — has → had, will → would; the whole that-clause lives in one past world.",
                hi: "लंबे reported वाक्य के दूर छोर पर backshift टपक जाता है — has → had, will → would; पूरा that-clause एक ही अतीत-जगत में रहता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "ছোট লেখায় দেখা যাক + এক নজরে",
            en: "Seen in a short piece of writing + at a glance",
            hi: "छोटे लेखन में देखिए + एक नज़र में",
          },
          body: {
            bn: "নিচের সংবাদ-অনুচ্ছেদটা পড়ুন — এই পাঠের সব প্যাটার্ন একসঙ্গে কাজ করছে: 'The spokesperson told reporters that the minister had cancelled the Dhaka tour. He admitted meeting the contractor in March, but he denied taking any money. He promised to investigate the matter within a week and asked the public not to believe the rumours. He warned that the situation could worsen, and he explained the new rules to the press in detail. He added that he would visit the site the next day, and he apologised for keeping everyone waiting so long.' প্রতিটা ক্রিয়ার প্যাটার্ন চিনুন — told reporters that, admitted meeting, denied taking, promised to investigate, asked the public not to, warned that, explained ... to, would visit the next day, apologised for keeping।\n\nএক নজরে: (১) said + ব্যক্তি নয়; told + ব্যক্তি + that; ব্যক্তি না থাকলে said that। (২) রিপোর্টিং verb অতীত → ভেতরের tense এক ধাপ পিছোয় (backshift)। (৩) চিরন্তন সত্য, এখনও-সত্যি অবস্থা, বর্তমান রিপোর্টিং verb — এই তিন ক্ষেত্রে ব্যাকশিফট নেই। (৪) admit/deny/mention + -ing; promise/agree/refuse/offer + to; suggest + -ing বা that-clause; apologise for + -ing। (৫) advise/remind/warn/tell/ask + ব্যক্তি + to; নিষেধে not to। (৬) reported question: সোজা গড়ন, do/does/did নেই, if/whether হ্যাঁ-না প্রশ্নে। (৭) সময়-জায়গার শব্দ সরে: now→then, today→that day, here→there, tomorrow→the next day, ago→before। অনুশীলন: আজকের কোনো সংবাদ পড়ে তার তিনটা বাক্য reported রূপে লিখুন — প্রতিটায় আলাদা রিপোর্টিং verb ব্যবহার করুন।",
            en: "Read this news paragraph — every pattern of the lesson is at work: 'The spokesperson told reporters that the minister had cancelled the Dhaka tour. He admitted meeting the contractor in March, but he denied taking any money. He promised to investigate the matter within a week and asked the public not to believe the rumours. He warned that the situation could worsen, and he explained the new rules to the press in detail. He added that he would visit the site the next day, and he apologised for keeping everyone waiting so long.' Recognise each verb's pattern — told reporters that, admitted meeting, denied taking, promised to investigate, asked the public not to, warned that, explained ... to, would visit the next day, apologised for keeping.\n\nAt a glance: (1) no said + person; told + person + that; without a person, said that. (2) Past reporting verb → the inner tense steps one back (backshift). (3) Universal truths, still-true situations and present reporting verbs — no backshift in these three fields. (4) admit/deny/mention + -ing; promise/agree/refuse/offer + to; suggest + -ing or a that-clause; apologise for + -ing. (5) advise/remind/warn/tell/ask + person + to; prohibitions take not to. (6) Reported questions: straight order, no do/does/did, if/whether for yes/no questions. (7) Time-place words shift: now→then, today→that day, here→there, tomorrow→the next day, ago→before. Practice: take today's news and rewrite three of its sentences in reported form — use a different reporting verb in each.",
            hi: "यह समाचार-अनुच्छेद पढ़ें — पाठ के सारे पैटर्न एक साथ काम कर रहे हैं: 'The spokesperson told reporters that the minister had cancelled the Dhaka tour. He admitted meeting the contractor in March, but he denied taking any money. He promised to investigate the matter within a week and asked the public not to believe the rumours. He warned that the situation could worsen, and he explained the new rules to the press in detail. He added that he would visit the site the next day, and he apologised for keeping everyone waiting so long.' हर क्रिया का पैटर्न पहचानें — told reporters that, admitted meeting, denied taking, promised to investigate, asked the public not to, warned that, explained ... to, would visit the next day, apologised for keeping।\n\nएक नज़र में: (1) said + व्यक्ति नहीं; told + व्यक्ति + that; व्यक्ति न हो तो said that। (2) अतीत रिपोर्टिंग verb → भीतरी tense एक क़दम पीछे (backshift)। (3) शाश्वत सत्य, अब-भी-सत्य स्थिति, वर्तमान रिपोर्टिंग verb — इन तीन क्षेत्रों में backshift नहीं। (4) admit/deny/mention + -ing; promise/agree/refuse/offer + to; suggest + -ing या that-clause; apologise for + -ing। (5) advise/remind/warn/tell/ask + व्यक्ति + to; निषेध में not to। (6) reported question: सीधा क्रम, do/does/did नहीं, हाँ-ना प्रश्न में if/whether। (7) समय-स्थान शब्द खिसकते हैं: now→then, today→that day, here→there, tomorrow→the next day, ago→before। अभ्यास: आज की कोई ख़बर पढ़कर उसके तीन वाक्य reported रूप में लिखें — हर एक में अलग रिपोर्टिंग verb लगाएँ।",
          },
          examples: [
            {
              wrong: "He denied that he did not take any money from the contractor.",
              right: "He denied taking any money from the contractor.",
              note: {
                bn: "denied + -ing — অস্বীকারটা deny-র ভেতরেই; that he did not জুড়লে অর্থ উল্টে 'কিছু নেয়নি যে' থেকে 'নেয়নি এমন কথা অস্বীকার করল' হয়ে যায়।",
                en: "denied + -ing — the denial sits inside deny; adding that he did not inverts the sense into 'he denied that he took nothing'.",
                hi: "denied + -ing — इनकार deny के भीतर; that he did not जोड़ने पर अर्थ पलटकर 'उसने कुछ नहीं लिया — यह इनकार किया' जैसा हो जाता है।",
              },
            },
            {
              wrong: "He promised investigating the matter within a week.",
              right: "He promised to investigate the matter within a week.",
              note: {
                bn: "promise + to-infinitive; investigating লিখলে প্রতিশ্রুতির জায়গায় বর্ণনা দাঁড়িয়ে যায় — promise-এর সঙ্গী to।",
                en: "promise + to-infinitive; writing investigating turns the pledge into a description — to is promise's partner.",
                hi: "promise + to-infinitive; investigating लिखने से वादा वर्णन बन जाता है — promise का साथी to है।",
              },
            },
            {
              wrong: "He asked the public do not believe the rumours.",
              right: "He asked the public not to believe the rumours.",
              note: {
                bn: "অনুরোধ-নিষেধের রিপোর্ট asked + ব্যক্তি + not to; do not-এর do রিপোর্টে বাঁচে না।",
                en: "Requests and prohibitions take asked + person + not to; the do of do not never survives the report.",
                hi: "अनुरोध-निषेध की रिपोर्ट asked + व्यक्ति + not to; do not का do रिपोर्ट में जीवित नहीं रहता।",
              },
            },
            {
              wrong: "He added that he would visit the site here tomorrow.",
              right: "He added that he would visit the site there the next day.",
              note: {
                bn: "রিপোর্টের ঠিকানা রিপোর্টারের — তাই here → there, tomorrow → the next day; would-এর সঙ্গে এই শব্দ-যাত্রাও জরুরি।",
                en: "The report's address belongs to the reporter — hence here → there, tomorrow → the next day; these words must travel along with would.",
                hi: "रिपोर्ट का पता रिपोर्टर का है — इसलिए here → there, tomorrow → the next day; would के साथ इन शब्दों की यात्रा भी ज़रूरी।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "said me ইংরেজিতে নেই — told me; অথবা said TO me। উদ্ধৃতির আগে ব্যক্তি থাকলে say, ব্যক্তি-সহ রিপোর্টে tell।",
          en: "There is no said me in English — told me, or said TO me. A bare quote follows say; a reported message to a person follows tell.",
          hi: "अंग्रेज़ी में said me नहीं है — told me, या said TO me। खाली उद्धरण say लेता है; व्यक्ति को रिपोर्ट tell करता है।",
        },
        {
          bn: "রিপোর্টিং verb অতীত দেখলেই backshift চালু করুন — তবে আগে প্রশ্ন করুন: কথাটা কি এখনও সত্যি? চিরন্তন সত্যে present থাকে।",
          en: "On seeing a past reporting verb, switch the backshift on — but first ask: is the statement still true? Universal truths keep the present.",
          hi: "अतीत रिपोर्टिंग verb देखते ही backshift चालू करें — पर पहले पूछें: कथन अब भी सच है? शाश्वत सत्य में present रहता है।",
        },
        {
          bn: "reported question-এ তিন মুছে-ফেলা: উল্টো গড়ন, do/does/did, প্রশ্নবোধক চিহ্ন — সব বিবৃতির গড়নে বদলে যায়।",
          en: "In a reported question three things vanish: inverted order, do/does/did, and the question mark — everything straightens into statement order.",
          hi: "reported question में तीन चीज़ें मिटती हैं: उलटा क्रम, do/does/did, प्रश्न-चिह्न — सब कथन-क्रम में बदल जाता है।",
        },
        {
          bn: "হ্যাঁ/না-প্রশ্নে if/whether + সোজা গড়ন; দুটোই চলে, তবে whether নির্দ্বিধায় আনুষ্ঠানিক লেখায় ভালো শোনায়।",
          en: "Yes/no questions take if/whether + straight order; both work, though whether sounds better in formal writing.",
          hi: "हाँ/ना-प्रश्न में if/whether + सीधा क्रम; दोनों चलते हैं, पर whether औपचारिक लेखन में बेहतर लगता है।",
        },
        {
          bn: "আদেশ told/ordered + ব্যক্তি + to; অনুরোধ asked + ব্যক্তি + to; নিষেধ not to — do-র কোনো চিহ্ন রিপোর্টে বাঁচে না।",
          en: "Commands: told/ordered + person + to; requests: asked + person + to; prohibitions: not to — no trace of do survives the report.",
          hi: "आदेश: told/ordered + व्यक्ति + to; अनुरोध: asked + व्यक्ति + to; निषेध: not to — do का कोई निशान रिपोर्ट में नहीं बचता।",
        },
        {
          bn: "verb-পরিবার মুখস্থ: admit/deny/mention + -ing; promise/agree/refuse/offer + to; suggest + -ing বা that; apologise for + -ing।",
          en: "Memorise the verb families: admit/deny/mention + -ing; promise/agree/refuse/offer + to; suggest + -ing or that; apologise for + -ing.",
          hi: "verb-परिवार रटें: admit/deny/mention + -ing; promise/agree/refuse/offer + to; suggest + -ing या that; apologise for + -ing।",
        },
        {
          bn: "explain/describe/suggest দুই object নেয় না — explained the rules TO us; ব্যক্তিকে to-এর পিছনে পাঠান।",
          en: "explain/describe/suggest take no double object — explained the rules TO us; send the listener behind to.",
          hi: "explain/describe/suggest दो objects नहीं लेते — explained the rules TO us; श्रोता को to के पीछे भेजें।",
        },
        {
          bn: "সময়-জায়গার শব্দ সরাতে ভুলবেন না: now→then, today→that day, yesterday→the day before, tomorrow→the next day, ago→before, here→there, this→that।",
          en: "Do not forget to shift the time-place words: now→then, today→that day, yesterday→the day before, tomorrow→the next day, ago→before, here→there, this→that.",
          hi: "समय-स्थान शब्द खिसकाना न भूलें: now→then, today→that day, yesterday→the day before, tomorrow→the next day, ago→before, here→there, this→that।",
        },
        {
          bn: "দীর্ঘ that-clause-এর শেষ-প্রান্তে ব্যাকশিফট ঝরে পড়ে — লেখা শেষে পুরো clause-এ একবার চোখ বুলান: has/will লুকিয়ে আছে কি?",
          en: "The backshift drips away at the end of long that-clauses — after writing, sweep the whole clause once: are has/will hiding there?",
          hi: "लंबे that-clause के छोर पर backshift टपक जाता है — लिखने के बाद पूरे clause पर एक नज़र डालें: has/will छिपे तो नहीं?",
        },
        {
          bn: "সংবাদ পড়তে পড়তেই রিপোর্টেড স্পিচ পাকা হয় — 'the minister admitted...', 'officials warned that...' ফ্রেমগুলো চোখে পড়ামাত্র প্যাটার্ন মিলিয়ে নিন।",
          en: "Reported speech ripens through news reading — the moment you see 'the minister admitted...' or 'officials warned that...', match the pattern against the families you know.",
          hi: "समाचार पढ़ते-पढ़ते ही reported speech पक्का होता है — 'the minister admitted...', 'officials warned that...' देखते ही पैटर्न अपने परिवारों से मिलाएँ।",
        },
      ],
      quiz: [
        {
          question: "He ______ me that he was busy with the audit.",
          options: ["said", "told", "spoke", "announced"],
          answer: 1,
          explanation: {
            bn: "ব্যক্তি-সহ রিপোর্টে tell — told me that...; said-এর সঙ্গে সরাসরি ব্যক্তি আসে না।",
            en: "A report to a person takes tell — told me that...; say never takes the person directly.",
            hi: "व्यक्ति को रिपोर्ट tell से — told me that...; say के साथ सीधे व्यक्ति नहीं आता।",
          },
        },
        {
          question: "She asked me where I ______.",
          options: ["do live", "did live", "lived", "live"],
          answer: 2,
          explanation: {
            bn: "reported question-এ সোজা গড়ন + ব্যাকশিফট — where I lived; do/did নেই, বর্তমান থাকলে live-ও হতো না।",
            en: "A reported question takes straight order + backshift — where I lived; no do/did, and even a present meaning would not keep live here.",
            hi: "reported question में सीधा क्रम + backshift — where I lived; do/did नहीं, और वर्तमान-अर्थ में भी live नहीं रहता।",
          },
        },
        {
          question: "The teacher said that water ______ at 100 degrees Celsius.",
          options: ["boiled", "had boiled", "boils", "was boiling"],
          answer: 2,
          explanation: {
            bn: "চিরন্তন বৈজ্ঞানিক সত্য — ব্যাকশিফট হয় না, present simple থাকে: boils।",
            en: "A universal scientific truth — no backshift; the present simple stays: boils.",
            hi: "शाश्वत वैज्ञानिक सत्य — backshift नहीं, present simple रहता है: boils।",
          },
        },
        {
          question: "He denied ______ the money from the drawer.",
          options: ["to take", "taking", "that he not took", "take"],
          answer: 1,
          explanation: {
            bn: "deny + -ing — He denied taking; অস্বীকার deny-র ভেতরেই, that...not জোড়ার দরকার নেই।",
            en: "deny + -ing — He denied taking; the negation lives inside deny, so no that...not is needed.",
            hi: "deny + -ing — He denied taking; इनकार deny के भीतर है, that...not की ज़रूरत नहीं।",
          },
        },
        {
          question: "The witness refused ______ any questions.",
          options: ["answering", "answer", "to answering", "to answer"],
          answer: 3,
          explanation: {
            bn: "refuse + to-infinitive — refused to answer; -ing পরিবারে refuse নেই।",
            en: "refuse + to-infinitive — refused to answer; refuse does not belong to the -ing family.",
            hi: "refuse + to-infinitive — refused to answer; refuse -ing परिवार में नहीं है।",
          },
        },
        {
          question: "She suggested ______ a taxi instead of walking in the rain.",
          options: ["to take", "taking", "that taking", "we taking"],
          answer: 1,
          explanation: {
            bn: "suggest + -ing বা suggest that + সোজা গড়ন — এখানে taking; suggest + object + to-infinitive অসম্ভব।",
            en: "suggest + -ing or suggest that + straight order — here taking; suggest + object + to-infinitive is impossible.",
            hi: "suggest + -ing या suggest that + सीधा क्रम — यहाँ taking; suggest + object + to-infinitive असंभव।",
          },
        },
        {
          question: "The manager told me ______ the revised report immediately.",
          options: ["that submit", "to submit", "submitting", "submit"],
          answer: 1,
          explanation: {
            bn: "আদেশের রিপোর্ট told + ব্যক্তি + to-infinitive — told me to submit।",
            en: "A command is reported as told + person + to-infinitive — told me to submit.",
            hi: "आदेश की रिपोर्ट told + व्यक्ति + to-infinitive — told me to submit।",
          },
        },
        {
          question: "He asked me ______ I had seen his keys anywhere.",
          options: ["that", "what", "if", "do"],
          answer: 2,
          explanation: {
            bn: "হ্যাঁ/না-প্রশ্নের রিপোর্ট if/whether + সোজা গড়ন — asked me if I had seen।",
            en: "A yes/no question is reported with if/whether + straight order — asked me if I had seen.",
            hi: "हाँ/ना-प्रश्न की रिपोर्ट if/whether + सीधा क्रम — asked me if I had seen।",
          },
        },
        {
          question: "Direct: 'I am leaving today.' — Reported: She said she was leaving ______.",
          options: ["today", "that day", "the day before", "tomorrow"],
          answer: 1,
          explanation: {
            bn: "সময়-শব্দও এক ধাপ সরে — today → that day; the day before হলো yesterday-র রূপান্তর।",
            en: "Time words step one away too — today → that day; the day before is the shift for yesterday.",
            hi: "समय-शब्द भी एक क़दम खिसकते हैं — today → that day; the day before yesterday का रूपांतर है।",
          },
        },
        {
          question: "Mother told me ______ the wet paint on the door.",
          options: ["do not touch", "not to touch", "to not touch", "don't touch"],
          answer: 1,
          explanation: {
            bn: "নিষেধের রিপোর্ট told + ব্যক্তি + not to + V1 — not to touch; do-র চিহ্ন রিপোর্টে বাঁচে না।",
            en: "A prohibition is reported as told + person + not to + V1 — not to touch; no trace of do survives.",
            hi: "निषेध की रिपोर्ट told + व्यक्ति + not to + V1 — not to touch; do का निशान नहीं बचता।",
          },
        },
      ],
    },
  },
];
