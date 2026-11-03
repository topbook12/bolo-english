// D47 guide — english-vocabulary-memory-hacks. Trilingual SEO article (bn/en/hi).
// Topic: seven science-backed tricks to remember English words, for Bangla speakers.
// Sections end with a cta that points at vocab, reading or speaking practice in-app.
import type { Guide } from "../types";

export const guide: Guide = {
  slug: "english-vocabulary-memory-hacks",
  emoji: "🧠",
  publishedAt: "2026-11-03",
  updatedAt: "2026-11-03",
  title: {
    bn: "ইংরেজি শব্দ মনে রাখার ৭টি প্রমাণিত কৌশল",
    en: "7 Proven Techniques to Remember English Words",
    hi: "इंग्लिश शब्द याद रखने के 7 प्रमाणित तरीक़े",
  },
  excerpt: {
    bn: "তালিকা মুখস্থ করে শব্দ আর থাকে না — মনে রাখার বিজ্ঞানসম্মত ৭ কৌশল ও দৈনিক ১০ শব্দের সিস্টেম।",
    en: "Word lists fade within days — here are seven science-backed techniques and a daily ten-word system that actually lasts.",
    hi: "सूची रटकर शब्द देर-सबेर भूल जाते हैं — यहाँ हैं विज्ञान-समर्थित सात तरीक़े और रोज़ाना दस शब्दों का सिस्टम।",
  },
  keywords: [
    "ইংরেজি শব্দ মনে রাখার উপায়",
    "vocabulary bangla",
    "ইংরেজি ভোকাবুলারি শেখা",
    "english word meaning bangla",
    "ইংরেজি শব্দভাণ্ডার বাড়ানো",
    "vocabulary learning tips bangla",
  ],
  // ছয়টি সেকশন — প্রথমে কারণ, তারপর ৭ কৌশল, শেষে দৈনিক সিস্টেম।
  sections: [
    // ১ — শব্দ ভুলে যাওয়া কেন স্বাভাবিক
    {
      heading: {
        bn: "শব্দ ভুলে যাওয়া কেন স্বাভাবিক",
        en: "Why Forgetting Words Is Normal",
        hi: "शब्द भूलना क्यों स्वाभाविक है",
      },
      paragraphs: [
        {
          bn: "গতকাল যে শব্দটা মুখস্থ করেছিলেন, আজ ভুলে গেছেন — এটা আপনার দোষ না, মস্তিষ্কের ডিজাইন। জার্মান বিজ্ঞানী এবিংহাউস একশো বছর আগেই দেখিয়েছিলেন: নতুন জিনিস শেখার পরদিনই তার অর্ধেকের বেশি মুছে যায়। একে forgetting curve বলে। মস্তিষ্ক কঠোর হিসাবি — যেটা বারবার ব্যবহার হয় না, সেটাকে ও জায়গা বাঁচাতে মুছে দেয়। তাই রাত জেগে তালিকা মুখস্থ করলেও কয়েক দিনে ঘরটা আবার খালি হয়ে যায়।",
          en: "The word you memorized yesterday is gone today — that is not your fault, it is the design of the brain. The German scientist Ebbinghaus showed over a hundred years ago that more than half of anything new fades within a day of learning it. This slope is called the forgetting curve. The brain is a strict accountant: anything you do not use repeatedly gets deleted to save space. That is why all-night list-cramming leaves you with empty word-shelves within days.",
          hi: "कल जो शब्द रटा था, आज भूल गए — यह आपकी ग़लती नहीं, दिमाग़ का डिज़ाइन है। जर्मन वैज्ञानिक एबिंगहाउस ने सौ बरस पहले ही दिखाया था: नई चीज़ सीखने के अगले ही दिन उसका आधे से ज़्यादा मिट जाता है। इसी ढलान को forgetting curve कहते हैं। दिमाग़ कड़ा हिसाबी है — जो बार-बार इस्तेमाल न हो, उसे जगह बचाने के लिए मिटा देता है। इसलिए रात भर सूची रटकर भी कुछ दिनों में शब्द-अलमारी फिर ख़ाली हो जाती है।",
        },

        {
          bn: "সুখবর হলো — এই কার্ভকে ভাঙা যায়। যে শব্দটাকে ভুলে যাওয়ার ঠিক আগে ফিরে দেখেন, মস্তিষ্ক তাকে নতুন করে বাঁচার সনদ দেয়, আর সেটা এবার অনেক দিন টেকে। প্রতিবার রিভিউয়ের পর ঢেউটা আরও ঢালু হয়। মানে ভুলে যাওয়া শত্রু নয় — সে বরং সংকেত: এখন রিভিউ করার সময়। সামনের সাত কৌশল আসলে এই একটা সত্যকে কাজে লাগানোর সাত রকম উপায়। হাল না ছেড়ে সিস্টেম বানান, ইচ্ছাশক্তির ভর নয়।",
          en: "The good news: the curve can be broken. When you meet a word again just before it would have slipped away, the brain grants it a fresh lease on life — and this time it lasts much longer. Each review flattens the drop a little more. So forgetting is not the enemy; it is a signal that says review now. The seven techniques ahead are really seven ways of putting that single truth to work. Build a system, not a heroic willpower streak.",
          hi: "अच्छी खबर: इस कर्व को तोड़ा जा सकता है। जिस शब्द को भूलने से ठीक पहले दोबारा देख लें, दिमाग़ उसे नई ज़िंदगी दे देता है — और इस बार वह काफ़ी लंबा टिकता है। हर दोहराव पर गिरावट का ढलान और आराम होता है। यानी भूलना दुश्मन नहीं — वह संकेत है: अभी दोहराने का समय। आगे के सात तरीक़े दरअसल इसी एक सच को काम में लगाने के सात रास्ते हैं। सिस्टम बनाइए, इच्छाशक्ति के सहारे नहीं।",
        },
      ],
      cta: "vocab",
    },

    // ২ — কৌশল ১–২: Spaced repetition ও প্রসঙ্গে শেখা
    {
      heading: {
        bn: "কৌশল ১–২: Spaced repetition ও প্রসঙ্গে শেখা",
        en: "Tricks 1–2: Spaced Repetition and Learning in Context",
        hi: "तरीक़ा 1–2: स्पेस्ड रिपिटिशन और संदर्भ में सीखना",
      },
      paragraphs: [
        {
          bn: "প্রথম কৌশলটাই সবচেয়ে শক্তিশালী: spaced repetition বা ফাঁকা ফাঁকা রিভিউ। নিয়ম সরল — শব্দটা শেখার পরদিন দেখুন, তারপর ৩ দিন পর, তারপর ৭ দিন পর, তারপর ২১ দিন পর। প্রতিবার মনে আনতে কষ্ট বাড়ে, আর এই কষ্টই শব্দটাকে দীর্ঘমেয়াদি ঘরে বসায়। Anki-র মতো অ্যাপ এই চক্র নিজে থেকে সামলায়; না পারলে খাতার পাতায় তারিখ লিখেও চলে। মূল কথা: মনে পড়ার মুহূর্তেই সবচেয়ে ভালো শেখা হয়।",
          en: "The first trick is the most powerful one: spaced repetition. The rule is simple — meet the word the day after you learn it, then after three days, then after seven, then after twenty-one. Each recall takes a little more effort, and that effort is exactly what moves the word into long-term storage. Apps like Anki run this cycle for you; if you prefer paper, just write the next review date beside the word. The core idea: the moment of almost-forgetting is the best moment of learning.",
          hi: "पहला तरीक़ा सबसे ताक़तवर है: spaced repetition, यानी फ़ासलों वाला दोहराव। नियम सरल है — शब्द सीखने के अगले दिन देखिए, फिर 3 दिन बाद, फिर 7 दिन बाद, फिर 21 दिन बाद। हर बार याद करने में मेहनत बढ़ती है, और यही मेहनत शब्द को लंबे समय के डिब्बे में रख देती है। Anki जैसे ऐप यह चक्र अपने आप संभाल लेते हैं; नहीं तो कॉपी में शब्द के पास अगली तारीख़ लिख लीजिए। मूल बात: भूलने के ठीक पहले वाला पल ही सबसे अच्छा सीखने का पल है।",
        },

        {
          bn: "দ্বিতীয় কৌশল: শব্দকে কখনো একা মনে রাখবেন না। abandoned মানে ‘পরিত্যক্ত’ মুখস্থ করে লাভ নেই; মনে রাখুন বাক্যটা — The old house looked abandoned. প্রসঙ্গ শব্দের জন্য যা, মাছের জন্য পানি। খালি অনুবাদের তালিকা দুই ভাষার ট্যাগ; বাক্যের ভেতরের শব্দ একটা জীবন্ত ছবি। তাই নতুন শব্দ পেলেই নিজের জীবন থেকে একটা বাক্য বানান — যতটা ছোট হোক। বাক্যটা যত নিজের, শব্দটা তত আপনার।",
          en: "The second trick: never keep a word alone. Memorizing that abandoned means ‘left empty’ buys you little; remember the sentence instead — The old house looked abandoned. Context is to a word what water is to fish. A bare translation list is just a pair of tags in two languages, while a word inside a sentence is a living picture. So the moment you pick up a new word, build one sentence from your own life — as small as you like. The more the sentence is yours, the more the word is yours.",
          hi: "दूसरा तरीक़ा: शब्द को कभी अकेला न रखिए। abandoned का मतलब ‘ख़ाली पड़ा’ रटकर फ़ायदा नहीं; वाक्य याद रखिए — The old house looked abandoned। संदर्भ शब्द के लिए वही है, जो पानी मछली के लिए। ख़ाली अनुवाद की सूची दो भाषाओं के टैग हैं; वाक्य के अंदर का शब्द जीता-जागता चित्र। इसलिए नया शब्द हाथ लगते ही अपनी ज़िंदगी से एक वाक्य बनाइए — छोटा सा ही सही। वाक्य जितना अपना, शब्द उतना आपका।",
        },
      ],
      cta: "vocab",
    },

    // ৩ — কৌশল ৩–৪: Word family ও Collocation
    {
      heading: {
        bn: "কৌশল ৩–৪: Word family ও Collocation",
        en: "Tricks 3–4: Word Families and Collocations",
        hi: "तरीक़ा 3–4: वर्ड फ़ैमिली और कोलोकेशन",
      },
      paragraphs: [
        {
          bn: "তৃতীয় কৌশল: একটা শব্দ শিখলে তার পুরো পরিবার শিখুন। decide শিখলেন? সাথে নিন decision, decisive, indecisive — চারটা শব্দ এক ঢিলে। একই মূল থেকে জন্ম নেওয়া শব্দগুলো মস্তিষ্ক একটা গুচ্ছে বেঁধে রাখে, তাই একটা মনে থাকলে বাকিগুলো টেনে আসে। কেন দশটা আলাদা শব্দ রটবেন, যখন একটা পরিবারই সেই কাজটা করে দেয়? শব্দভাণ্ডার এভাবে দ্বিগুণ হয়, মেহনত আধা। নোটবুকে শব্দটার পাশেই পরিবারটা লিখে রাখুন।",
          en: "The third trick: when you learn one word, take its whole family. Learned decide? Bring decision, decisive and indecisive along — four words for the price of one. The brain stores words from the same root as one cluster, so recalling one drags the rest with it. Why memorize ten separate items when a single family does the job? Vocabulary doubles this way at half the effort. Keep the family written beside the word in your notebook, every single time.",
          hi: "तीसरा तरीक़ा: एक शब्द सीखें तो उसका पूरा परिवार सीखिए। decide सीखा? साथ में decision, decisive और indecisive लीजिए — एक ईंट में चार शब्द। एक ही जड़ से निकले शब्दों को दिमाग़ एक गुच्छे में बाँधकर रखता है, इसलिए एक याद आते ही बाक़ी भी खिंचे चले आते हैं। दस अलग-अलग शब्द क्यों रटिए, जब एक परिवार वही काम कर दे? शब्द-भंडार इस तरह आधी मेहनत में दोगुना होता है। नोटबुक में शब्द के पास ही पूरा परिवार लिखते जाइए।",
        },

        {
          bn: "চতুর্থ কৌশলটা কথোপকথনের রুচি বদলে দেয় — collocation, মানে শব্দের জোড়া-সঙ্গী। ইংরেজিতে শব্দ একা চলে না, নির্দিষ্ট সঙ্গী চায়: বলতে হয় make a decision, ‘take a decision’ নয়; fast food, ‘quick food’ নয়; heavy rain, ‘strong rain’ নয়। শব্দ+সঙ্গী একসাথে মুখস্থ করলে বাক্য বানাতে গিয়ে বাংলা থেকে অনুবাদ করার ফাঁদে পড়তে হয় না। আসল কথার জাদু এই জোড়াগুলোতেই লুকিয়ে। প্রতিদিন একটা জোড়া শিখুন, মাসে ত্রিশটা।",
          en: "The fourth trick transforms how natural you sound — collocations, the words that travel in pairs. In English, words want fixed partners: you make a decision, not ‘take a decision’ in everyday talk; it is fast food, not ‘quick food’; heavy rain, not ‘strong rain’. Learning word plus partner together saves you from translating from Bangla mid-sentence, which is where most awkward English is born. Learn one pair a day and you own thirty natural-sounding phrases a month.",
          hi: "चौथा तरीक़ा आपकी बोली का स्वाद बदल देता है — collocation, यानी शब्दों के जोड़ीदार। अंग्रेज़ी में शब्द अकेले नहीं चलते, तय साथी माँगते हैं: कहते हैं make a decision, ‘take a decision’ नहीं; fast food, ‘quick food’ नहीं; heavy rain, ‘strong rain’ नहीं। शब्द और उसका साथी एक साथ याद करेंगे तो वाक्य बनाते वक़्त बांग्ला से अनुवाद के जाल में नहीं फँसेंगे — अजीब इंग्लिश यहीं से जन्म लेती है। रोज़ एक जोड़ा सीखिए, महीने में तीस नए स्वाभाविक मुहावरे आपके।",
        },
      ],
      cta: "vocab",
    },

    // ৪ — কৌশল ৫–৬: ছবি-গল্প ও পড়ায় শিকার
    {
      heading: {
        bn: "কৌশল ৫–৬: ছবি-গল্প ও পড়ায় শিকার",
        en: "Tricks 5–6: Picture-Stories and Word-Hunting While Reading",
        hi: "तरीक़ा 5–6: चित्र-कहानी और पढ़ाई में शिकार",
      },
      paragraphs: [
        {
          bn: "পঞ্চম কৌশল: শব্দকে ছবি দিয়ে বেঁধে ফেলুন। মস্তিষ্ক ছবি মনে রাখে শব্দের চেয়ে বহুগুণ ভালো। bulky মানে চিন্তা করবেন না — একটা স্থূল, ফোলা ব্যাগ কল্পনা করুন, যেটা দরজায় আটকে যাচ্ছে। যত অদ্ভুত, হাস্যকর বা বাড়াবাড়ি ছবি, তত গাঢ় দাগ। আরও মজার পথ: শিখতে চাওয়া পাঁচ-ছয়টা শব্দ দিয়ে একটা আজগুবিদা গল্প বানান — যত বোকা গল্প, তত বেশি দিন থাকে। ছবিটা চোখ বন্ধ করে একবার দেখে নিন।",
          en: "The fifth trick: tie every new word to a picture. The brain stores images many times better than it stores strings of letters. For bulky, do not think of a definition — picture a fat, bulging bag stuck in a doorway. The stranger, funnier or more exaggerated the image, the deeper the mark. Even better: take five or six words you want to learn and weave them into one absurd story — the sillier the story, the longer it survives. Close your eyes and watch the picture once.",
          hi: "पाँचवाँ तरीक़ा: हर नए शब्द को तस्वीर से बाँध दीजिए। दिमाग़ अक्षरों की डोर से सौ गुना बेहतर चित्र याद रखता है। bulky की परिभाषा मत सोचिए — एक फूला हुआ, भारी-भरकम बैग सोचिए जो दरवाज़े में फँस रहा है। तस्वीर जितनी अजीब, मज़ेदार या मुग़लती, निशान उतना गहरा। और मज़ेदार रास्ता: पाँच-छह शब्द उठाकर एक बेतुकी कहानी गाँथिए — कहानी जितनी बचकानी, उतने दिन टिकती है। आँख मूँदकर तस्वीर एक बार देख लीजिए।",
        },

        {
          bn: "ষষ্ঠ কৌশল: পড়তে পড়তে শব্দের শিকার। যে শব্দ আপনি নিজে খুঁজে পেয়েছেন, সে অন্য শব্দের চেয়ে সহজে বাঁচে — আবিষ্কারের মজা মনে গাঁথে। পড়ার সময় অচেনা শব্দ দেখলে প্রথমে আশেপাশের বাক্য থেকে মানেটা অনুমান করার চেষ্টা করুন, তারপর অভিধানে মেলান। এই অনুমান-প্রশিক্ষণই পরীক্ষার হলে সবচেয়ে কাজের সঙ্গী। শিকার করা প্রতিটা শব্দ নোটবুকে ঢুকবে — তারিখসহ, প্রসঙ্গের বাক্যটাসহ। সপ্তাহে একবার শিকারি-তালিকা ঘাঁটুন।",
          en: "The sixth trick: hunt words while reading. A word you discovered yourself survives far better than a word handed to you — the thrill of finding things out is what locks memory. When an unknown word appears, first try to guess its meaning from the sentence around it, then check the dictionary. That guessing practice becomes your best friend in the exam hall. Every hunted word goes into the notebook — with its date, and with the very sentence where you met it. Revisit the hunt list once a week.",
          hi: "छठा तरीक़ा: पढ़ते हुए शब्दों का शिकार कीजिए। जो शब्द आपने ख़ुद ढूँढा, वह औरों के दिए शब्द से बहुत लंबा जीता है — खोज का रोमांच याद को गाँथ देता है। पढ़ते समय अनजान शब्द दिखे तो पहले आस-पास के वाक्य से मतलब का अंदाज़ा लगाइए, फिर शब्दकोश से मिलाइए। यही अंदाज़ा-तालीम परीक्षा हॉल में सबसे काम आती है। हर शिकार किया शब्द नोटबुक में जाएगा — तारीख़ के साथ, और उसी वाक्य के साथ जहाँ आपने उसे देखा। हफ़्ते में एक बार शिकार-सूची खंगालिए।",
        },
      ],
      cta: "reading",
    },

    // ৫ — কৌশল ৭: বলতে বলতে শেখা
    {
      heading: {
        bn: "কৌশল ৭: বলতে বলতে শেখা",
        en: "Trick 7: Learn by Saying It Out Loud",
        hi: "तरीक़ा 7: बोलते हुए सीखना",
      },
      paragraphs: [
        {
          bn: "সাত নম্বর কৌশলটা সবচেয়ে সরল, কিন্তু সবচেয়ে বেশি এড়িয়ে যাওয়া: নতুন শব্দটা সেদিনই একটা বাক্যে মুখে বলা। কেন জরুরি? কারণ ইনপুট ছাড়া আউটপুট ফিরে আসে না — পড়া শব্দ চোখের সাম্রাজ্যে থেকে যায়, বলা শব্দ জিভের সাম্রাজ্যে ঢোকে। অর্ধেক মিনিট লাগে: I finally finished my report. এই একটা বাক্যে finally কার্যত আপনার হয়ে গেল। স্পিকিং প্র্যাকটিসে যান, নতুন শব্দগুলো কথায় গুঁজুন।",
          en: "The seventh trick is the simplest of all, and the one most often skipped: use the new word in one spoken sentence the same day. Why does it matter? Because output is what turns input into ownership — a word you have only read lives in the empire of the eyes; a word you have said enters the empire of the tongue. It takes half a minute: I finally finished my report. With that one sentence, finally practically becomes yours. Then take the new words into real speaking practice.",
          hi: "सातवाँ तरीक़ा सबसे सीधा है, पर सबसे ज़्यादा टाला भी जाता है: नया शब्द उसी दिन एक वाक्य में बोल डालिए। ज़रूरी क्यों? क्योंकि बिना आउटपुट के इनपुट वापस नहीं आता — पढ़ा हुआ शब्द आँखों के साम्राज्य में रहता है, बोला हुआ शब्द ज़ुबान के साम्राज्य में घुसता है। आधा मिनट लगता है: I finally finished my report। इस एक वाक्य से finally व्यावहारिक रूप से आपका हो गया। अब नए शब्दों को असली स्पीकिंग प्रैक्टिस में घुसा दीजिए।",
        },

        {
          bn: "আউটপুটের আরেকটা সুবিধা: ভুল ধরা পড়ে। শুধু পড়লে আপনি ভাবেন শব্দটা জানেন; বলার সময় ধরা পড়ে — উচ্চারণ আটকাচ্ছে নাকি বাক্যে জায়গা মেলাচ্ছে না। যেদিন আয়নার সামনে দাঁড়িয়ে আজকের দশটা শব্দ দিয়ে দশটা বাক্য বলবেন, সেদিনই শব্দগুলো অর্ধেক পথ পেরিয়ে স্থায়ী-জোনে ঢুকবে। ভয় পাবেন না — কেউ শুনছে না, শুনলেও কী হয়েছে? জোরে বলুন, ফিসফিসিয়ে নয় — জিভকে শ্রম দিতে হবে। বলাই একমাত্র পথ।",
          en: "Output has a second gift: it exposes the truth. Only reading, you believe you know the word; speaking reveals whether pronunciation trips you or the word refuses to fit the sentence. Stand in front of the mirror and say ten sentences using today’s ten words — that very day they cross half the road into permanent territory. Do not worry about being heard; nobody is listening, and even if they are, so what? Speak loudly, not in whispers — the tongue needs the workout. Saying it remains the only road.",
          hi: "आउटपुट का एक और तोहफ़ा: ग़लती पकड़ में आ जाती है। सिर्फ़ पढ़ने पर लगता है शब्द जानते हैं; बोलते समय खुलता है — उच्चारण अटक रहा है या शब्द वाक्य में बैठ नहीं रहा। आईने के सामने खड़े होकर आज के दस शब्दों से दस वाक्य बोलिए — उसी दिन वे आधे रास्ते पार करके स्थायी इलाक़े में दाख़िल हो जाएँगे। भीड़ की चिंता न कीजिए — कोई सुन नहीं रहा, और सुन भी रहा हो तो क्या? ज़ोर से बोलिए, फुसफुसाहट में नहीं — ज़ुबान को मेहनत करनी ही पड़ेगी। बोलना ही एकमात्र रास्ता है।",
        },
      ],
      cta: "speaking",
    },

    // ৬ — দৈনিক ১০ শব্দের সিস্টেম
    {
      heading: {
        bn: "দৈনিক ১০ শব্দের সিস্টেম",
        en: "The Daily Ten-Word System",
        hi: "रोज़ाना दस शब्दों का सिस्टम",
      },
      paragraphs: [
        {
          bn: "এখন সব কৌশল এক সিস্টেমে গাঁথা যাক। নিয়ম: দিনে ১০টি নতুন শব্দ — বেশি নয়, কম নয়। ১০টা মানে মাসে ৩০০, তিন মাসে ৯০০ শব্দ; রিভিউ ধরে রাখলে ৯০ দিনে ৭০০-এর মতো শব্দ সক্রিয় থাকে — দৈনন্দিন কথোপকথনের জন্য এর চেয়ে বড় পুঁজি আর দরকার নেই। প্রতিটা শব্দে প্রয়োগ করুন আজকের সাত কৌশল: প্রসঙ্গ, পরিবার, জোড়া, ছবি, রিভিউ-তারিখ, আর মুখে বলা। সিস্টেমের জাদু সেখানেই — সে কৌশলগুলোকে অভ্যাসে বদলে দেয়।",
          en: "Now let us tie all seven tricks into one system. The rule: ten new words a day — not more, not less. Ten means three hundred a month, nine hundred in three months; with reviews kept alive, around seven hundred of them stay active after ninety days — for daily conversation there is hardly a bigger treasure. Apply the whole toolkit to each word: context, family, partner-word, picture, review date, and saying it out loud. That is where the magic of a system lies — it turns tricks into habits.",
          hi: "अब सातों तरीक़ों को एक सिस्टम में बाँध लीजिए। नियम: दिन में 10 नए शब्द — न ज़्यादा, न कम। 10 का मतलब महीने के 300, तीन महीने में 900; दोहराव ज़िंदा रखेंगे तो 90 दिन बाद भी क़रीब 700 शब्द सक्रिय रहेंगे — रोज़ की बातचीत के लिए इससे बड़ा ख़ज़ाना क्या होगा? हर शब्द पर सातों तरीक़े लगाइए: संदर्भ, परिवार, जोड़ीदार, तस्वीर, दोहराव की तारीख़ और बोल डालना। सिस्टम का जादू यही है — वह तरीक़ों को आदत बना देता है।",
        },

        {
          bn: "মূলমন্ত্র মনে রাখুন: ছোট ডোজ, নিয়মিত রিভিউ, প্রতিদিনের ব্যবহার। ২০টা শব্দ একদিন করে তিন দিনে শেষ করার চেয়ে ১০টা করে নব্বই দিন চালানো শতগুণ বেশি ফলদায়ী — কারণ পুরোনো শব্দের রিভিউ চলতেই থাকে। হাতিয়ার খুব সামান্য: একটা নোটবুক বা একটা স্পেসড-রিপিটিশন অ্যাপ, আর দিনে মোটে আধা ঘণ্টা। ছবি-গল্প মজা দেবে, রিভিউ-চক্র ধরে রাখবে, বলা শব্দগুলোকে করে দেবে সত্যিকারের আপনার। আজই শুরু করুন — প্রথম দশটা শব্দ বেছে নিন।",
          en: "Remember the mantra: small dose, regular review, daily use. Finishing twenty words a day for three straight days loses, badly, to ten words a day for ninety days — because the review of older words never stops in between. The toolkit is tiny: one notebook or one spaced-repetition app, and about half an hour a day. Picture-stories make it fun, the review cycle makes it stick, and speaking makes the words truly yours. Start today — pick your first ten words.",
          hi: "मंत्र याद रखिए: छोटी खुराक, नियमित दोहराव, रोज़ का इस्तेमाल। तीन दिन में रोज़ 20 शब्द करके मुक़ाम पाने से नब्बे दिन रोज़ 10 शब्द चलाना सौ गुना बेहतर है — क्योंकि बीच में पुराने शब्दों का दोहराव रुकता ही नहीं। औज़ार बहुत छोटा: एक नोटबुक या एक स्पेस्ड-रिपिटिशन ऐप, और दिन के आधे घंटे भर। चित्र-कहानी मज़ा देगी, दोहराव-चक्र चिपकाएगा, और बोला हुआ शब्द सच में आपका बना देगा। आज ही शुरू कीजिए — पहले दस शब्द चुन लीजिए।",
        },
      ],
      // সিস্টেমটা পাঁচ ধাপে — সারা দিনের ছন্দ:
      steps: [
        {
          bn: "সকালে ১০ মিনিট: ১০টি নতুন শব্দ বেছে নিন — প্রতিটার সাথে একটা বাক্য, শব্দ-পরিবার আর জোড়া-সঙ্গী নোট করুন।",
          en: "Morning, ten minutes: pick ten new words — note a sentence, the word family and a partner-word for each.",
          hi: "सुबह, दस मिनट: दस नए शब्द चुनिए — हर एक के साथ एक वाक्य, शब्द-परिवार और जोड़ीदार नोट कीजिए।",
        },
        {
          bn: "দুপুরে ৫ মিনিট: প্রতিটা শব্দকে একটা অদ্ভুত ছবি বা ছোট্ট গল্পে বাঁধুন — চোখ বন্ধ করে একবার দেখুন।",
          en: "Midday, five minutes: tie each word to one strange picture or mini-story — watch it once with your eyes closed.",
          hi: "दोपहर, पाँच मिनट: हर शब्द को एक अजीब तस्वीर या छोटी कहानी से बाँधिए — आँख मूँदकर एक बार देखिए।",
        },
        {
          bn: "সন্ধ্যায় ১০ মিনিট: ১০টি শব্দ দিয়ে ১০টি বাক্য বানিয়ে জোরে বলুন — আয়নার সামনে দাঁড়িয়ে চলবে।",
          en: "Evening, ten minutes: build ten sentences with the ten words and say them aloud — standing before a mirror works fine.",
          hi: "शाम, दस मिनट: दस शब्दों से दस वाक्य बनाकर ज़ोर से बोलिए — आईने के सामने खड़े होकर भी चलेगा।",
        },
        {
          bn: "রাতে ৫ মিনিট: আজ ও আগের রিভিউ-তারিখে পড়া শব্দগুলো নিজের বাক্যে মনে করার চেষ্টা করুন।",
          en: "Night, five minutes: recall the words due today and the past review dates by using them in your own sentences.",
          hi: "रात, पाँच मिनट: आज और पुरानी दोहराव-तारीख़ों के शब्द अपने वाक्यों में याद करने की कोशिश कीजिए।",
        },
        {
          bn: "রবিবার ২০ মিনিট: সপ্তাহের সব শব্দের মিনি-কুইজ নিন; যেটা ধরা খেলো, তার রিভিউ-চক্র নতুন করে শুরু।",
          en: "Sunday, twenty minutes: run a mini-quiz over the week’s words; anything missed restarts its review cycle.",
          hi: "रविवार, बीस मिनट: हफ़्ते के शब्दों का मिनी-क्विज़ लीजिए; जो छूट गया, उसका दोहराव-चक्र फिर से शुरू।",
        },
      ],
      cta: "vocab",
    },
  ],
  // চারটি প্রশ্নোত্তর — সার্চের ফিচার বক্সে ভালো কাজ করে।
  faqs: [
    {
      q: {
        bn: "দিনে কত শব্দ শেখা উচিত?",
        en: "How many words should I learn per day?",
        hi: "दिन में कितने शब्द सीखने चाहिए?",
      },
      a: {
        bn: "বেশিরভাগ শিক্ষার্থীর জন্য ১০টি সবচেয়ে ভারসাম্যপূর্ণ — নতুন শব্দের ভাগ ও পুরোনো শব্দের রিভিউ দুটোই ধরে রাখা যায়। ৩০–৫০টা শোনায় চমকপ্রদ, কিন্তু এক সপ্তাহেই ভুলে যাওয়া শব্দের পাহাড় তৈরি হয়। পরীক্ষার প্রস্তুতি চললে ১৫–২০-তে উঠতে পারেন, তবে রিভিউয়ের সময়ও দ্বিগুণ করুন। মনে রাখুন: যে সংখ্যাটা আপনি ৯০ দিন টানতে পারবেন, সেটাই আপনার সঠিক সংখ্যা — একদিনের বীরত্ব নয়।",
        en: "For most learners, ten is the sweet spot — enough to grow while still keeping the review of older words alive. Thirty to fifty sounds impressive, but within a week you are carrying a mountain of forgotten words. If you are preparing for an exam, going up to fifteen or twenty is fine, as long as you double the review time too. Remember: the number you can sustain for ninety days is the right number for you. One-day heroics do not build vocabulary; quiet consistency does.",
        hi: "ज़्यादातर सीखने वालों के लिए 10 सबसे संतुलित संख्या है — नए शब्द का हिस्सा और पुराने शब्दों का दोहराव, दोनों साथ चल पाते हैं। 30–50 शानदार लगते हैं, पर एक हफ़्ते में भुलाए हुए शब्दों का पहाड़ बन जाता है। परीक्षा की तैयारी चल रही हो तो 15–20 तक जा सकते हैं, बशर्ते दोहराव का समय भी दोगुना कीजिए। याद रखिए: जो संख्या आप 90 दिन तक खींच सकते हैं, वही आपके लिए सही संख्या है — एक दिन की बहादुरी शब्द-भंडार नहीं बनाती।",
      },
    },

    {
      q: {
        bn: "শব্দ মুখস্থ করার সেরা অ্যাপ কোনটি?",
        en: "What is the best app for memorizing words?",
        hi: "शब्द याद करने का सबसे अच्छा ऐप कौन-सा है?",
      },
      a: {
        bn: "কোনো অ্যাপই জাদুর লাঠি নয় — সে শুধু রিভিউ-সময়টা গুছিয়ে ধরে রাখে। spaced repetition-এর জন্য Anki-র মতো অ্যাপ চক্রটা নিজে সামলায়, খুব কাজের। গেম-স্টাইল অ্যাপ শুরু করার মজা দেয়; খাতা-পেন্সিলও একেবারে চলে। আসল কথা: যে টুলেই কাজ করেন, তাতে শব্দ একা নয় — বাক্যে, ছবিতে, জোড়ায় থাকতে হবে। টুল বদলানোর চেয়ে রোজ খুলে দেখার অভ্যাসই শতগুণ দামি।",
        en: "No app is a magic wand — it only keeps your review schedule tidy, and that is the honest truth. For spaced repetition, apps like Anki run the whole cycle for you and are extremely useful. Game-style apps give beginners a fun push, and good old paper works perfectly fine too. What really matters: whichever tool you use, the words must not sit alone — they need sentences, pictures and partner-words. Switching tools matters a hundred times less than simply opening your tool every day.",
        hi: "कोई ऐप जादुई छड़ी नहीं — वह बस आपका दोहराव-शेड्यूल सँभालता है, यही सच्चाई है। spaced repetition के लिए Anki जैसे ऐप पूरा चक्र अपने आप चलाते हैं और बहुत काम के हैं। गेम-स्टाइल ऐप शुरुआत में मज़ा देते हैं, और काग़ज़-पेंसिल भी पूरी तरह चलती है। असली बात: जो भी औज़ार इस्तेमाल करें, शब्द अकेले न रहें — उन्हें वाक्य, तस्वीर और जोड़ीदार चाहिए। औज़ार बदलने से सौ गुना ज़रूरी है रोज़ उसे खोलने की आदत।",
      },
    },

    {
      q: {
        bn: "meaning জানি কিন্তু ব্যবহার করতে পারি না কেন?",
        en: "Why do I know a word’s meaning but cannot use it?",
        hi: "मतलब तो पता है पर इस्तेमाल क्यों नहीं कर पाता?",
      },
      a: {
        bn: "এটা ‘passive’ আর ‘active’ শব্দভাণ্ডারের পার্থক্য। পড়ে-শুনে জানা শব্দ চিনতে পারে, কিন্তু বলতে গেলে মনে হয় মুখে তালা। কারণ চেনা আর বানানো দুই রকম দক্ষতা — দ্বিতীয়টা শুধু ব্যবহারেই জন্মায়। সমাধান সোজা: যেসব শব্দ জানি বলে আফসোস করছেন, সেগুলোকে আজই বাক্যে বসান, জোরে বলুন, কাল আবার বলুন। প্রতি সপ্তাহে পাঁচটা passive শব্দকে active করুন — তিন মাসে হাজারের ঘরে সক্রিয় শব্দ হাতে।",
        en: "This is the gap between passive and active vocabulary. Words you met through reading and listening can be recognized, but when you try to say them, your mouth feels locked. Recognizing and producing are two different skills — and the second grows only through use. The fix is simple: take the words you regret knowing and put them into sentences today, say them aloud, repeat tomorrow. Turn five passive words active every week, and within three months you will have several hundred words ready for real conversation.",
        hi: "यह passive और active शब्द-भंडार का फ़र्क़ है। पढ़कर-सुनकर मिले शब्द पहचाने जा सकते हैं, पर बोलने की कोशिश में मुँह ताले में लगता है। पहचानना और बनाना दो अलग हुनर हैं — और दूसरा सिर्फ़ इस्तेमाल से पैदा होता है। इलाज सीधा है: जिन शब्दों के लिए पछताते हैं कि जानते हैं पर काम में नहीं ला पाते, उन्हें आज ही वाक्यों में बिठाइए, ज़ोर से बोलिए, कल फिर बोलिए। हर हफ़्ते पाँच passive शब्द active कीजिए — तीन महीने में सैकड़ों शब्द बातचीत के लिए तैयार।",
      },
    },

    {
      q: {
        bn: "পুরোনো শব্দ ভুলে যাচ্ছি, সমাধান কী?",
        en: "I keep forgetting old words. What is the fix?",
        hi: "पुराने शब्द याद नहीं रहते, इलाज क्या है?",
      },
      a: {
        bn: "ভুলে যাওয়া মানে সিস্টেম নেই — মানে শুধু নতুন শব্দ আসছে, পুরোনোগুলোর রিভিউ বন্ধ হয়ে গেছে। সমাধান একটাই: রিভিউ-চক্র ফিরিয়ে আনুন। যেসব শব্দ হাতছাড়া হচ্ছে, ওগুলোকে নতুন শব্দের মতোই আবার চক্রে ঢুকিয়ে দিন — পরদিন, ৩ দিন, ৭ দিন, ২১ দিন। আর ওগুলোকে মুখে বলুন; ব্যবহার না হওয়া শব্দ কোনো অ্যাপেও টেকে না। মনে রাখবেন, ভুলে যাওয়া ব্যর্থতা নয় — রিভিউ না করাই একমাত্র ভুল।",
        en: "Forgetting old words means the system is missing — new words keep arriving while the review of the older ones has quietly stopped. The fix is one thing: bring the review cycle back. Put the slipping words through the same cycle as fresh words — next day, three days, seven days, twenty-one days. And say them out loud; words that are never used will not survive in any app. Remember, forgetting is not failure — skipping the review is the only real mistake you can make here.",
        hi: "पुराने शब्द भूलने का मतलब है कि सिस्टम ग़ायब है — नए शब्द आते जा रहे हैं और पुरानों का दोहराव चुपचाप रुक गया है। इलाज एक ही: दोहराव-चक्र वापस लाइए। जो शब्द फिसल रहे हैं, उन्हें नए शब्दों की तरह फिर चक्र में डालिए — अगले दिन, 3 दिन, 7 दिन, 21 दिन। और उन्हें बोलिए भी; इस्तेमाल न होने वाले शब्द किसी ऐप में भी टिकते नहीं। याद रखिए, भूलना असफलता नहीं — दोहराव न करना यहाँ एकमात्र असली ग़लती है।",
      },
    },
  ],
};
