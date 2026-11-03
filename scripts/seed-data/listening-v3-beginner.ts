// ─── Listening library v3 · BEGINNER — 5 standalone graded stories (D45) ───
// Story paragraphs are ALWAYS English (that is the listening skill); all
// learner-facing meta (title/summary/vocabulary meanings/quiz) is TriText
// (bn primary). Standalone (unit 0) extra practice stories.
//
// Level: CEFR A2 — present simple + past simple, sentences ≤ ~12 words,
// basic connectors (and, but, then, so, because). South-Asian settings.
// Stories: 1 rickshaw honesty · 2 river launch · 3 tea stall work ·
//          4 winter pitha festival · 5 the runner girl.
import type {
  LibraryListeningData,
  LibraryLevel,
  LibraryListeningCategory,
} from "../../src/lib/library-types";

export interface SeedListeningV3Entry {
  slug: string;
  level: LibraryLevel;
  category: LibraryListeningCategory;
  minutes: number;
  unit: number; // 0 = standalone
  data: LibraryListeningData;
}

export const SEED_LISTENING_V3_BEGINNER: SeedListeningV3Entry[] = [
  /* ── story 1 · daily · honesty of a rickshaw puller ───────────────── */
  {
    slug: "story3-b1-01",
    level: "beginner",
    category: "daily",
    minutes: 2,
    unit: 0,
    data: {
      title: {
        bn: "রিকশায় ফেলে যাওয়া ব্যাগ",
        en: "The Bag Left on the Rickshaw",
        hi: "रिक्शा में छूटा हुआ बस्ता",
      },
      summary: {
        bn: "ক্লাস ফাইভের রাহিম রিকশায় করে স্কুলে যায়। ব্যস্ত সকালে নতুন নীল ব্যাগটা রিকশার সিটেই ফেলে যায় সে। কিন্তু রিকশাচালক করিম চাচার সততার কারণেই ব্যাগটা নিরাপদে ফিরে আসে তার কাছে।",
        en: "Rahim, a class five student, goes to school by rickshaw. In the busy morning, he leaves his new blue bag on the rickshaw seat. But thanks to the honest rickshaw puller Karim, the bag comes safely back.",
        hi: "पाँचवीं कक्षा का राहिम रिक्शा से स्कूल जाता है। व्यस्त सुबह में वह अपना नया नीला बस्ता रिक्शे की सीट पर ही छोड़ आता है। लेकिन ईमानदार रिक्शा चालक करीम की वजह से बस्ता सुरक्षित लौट आता है।",
      },
      paragraphs: [
        "Rahim is twelve years old. He reads in class five. Every morning, he takes a rickshaw to school. Today he carries a new blue bag. His father gave it to him last week. Rahim loves it very much.",
        "The rickshaw runs fast on the busy road. Rahim looks at the shops. Then the school bell rings far away. \"Please go fast, chacha,\" he says. The rickshaw stops near the school gate. Rahim jumps down and runs. He forgets his bag on the seat.",
        "At ten o'clock, Rahim opens his desk. His books are not there! He looks under the chair. Then he looks behind the door. Oh no! His bag is on the rickshaw! Rahim feels cold. \"I lost my father's gift,\" he thinks. Tears come to his eyes.",
        "At break time, someone calls his name. It is the school guard. He holds the blue bag high. \"A rickshaw puller brought this,\" he says. \"He found it on his seat.\" Rahim runs and takes the bag. All the books are safe inside.",
        "After school, Rahim sees Karim chacha near the gate. Karim is the rickshaw puller. Rahim gives him a big piece of chocolate. \"Thank you, chacha,\" he says with a smile. Karim laughs. \"Good things come back, my son,\" he says. Rahim walks home happily. His bag sits safe on his back.",
      ],
      vocabulary: [
        {
          word: "rickshaw",
          meaning: {
            bn: "রিকশা — তিন চাকার ছোট যাত্রীবাহী যান",
            en: "a small three-wheeled passenger vehicle",
            hi: "रिक्शा — तीन पहियों वाली छोटी सवारी",
          },
          example: "Rahim takes a rickshaw to school every day.",
        },
        {
          word: "forget",
          meaning: {
            bn: "ভুলে যাওয়া — মনে রাখতে না পারা",
            en: "to not remember something",
            hi: "भूलना — याद न रख पाना",
          },
          example: "Do not forget your bag on the bus.",
        },
        {
          word: "seat",
          meaning: {
            bn: "সিট — বসার জায়গা",
            en: "the place where you sit",
            hi: "सीट — बैठने की जगह",
          },
          example: "The old man sits on the front seat.",
        },
        {
          word: "guard",
          meaning: {
            bn: "প্রহরী — জায়গা রক্ষা করা লোক",
            en: "a person who watches over a place",
            hi: "पहरेदार — किसी जगह की रखवाली करने वाला",
          },
          example: "The school guard opens the gate in the morning.",
        },
        {
          word: "gift",
          meaning: {
            bn: "উপহার — ভালোবাসা দিয়ে দেওয়া জিনিস",
            en: "a thing you give with love",
            hi: "उपहार — प्यार से दी गई चीज़",
          },
          example: "Father brings a small gift for Rahim.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "রাহিম তার ব্যাগটা কোথায় ফেলে যায়?",
            en: "Where does Rahim leave his bag?",
            hi: "राहिम अपना बस्ता कहाँ छोड़ देता है?",
          },
          options: [
            { bn: "স্কুলের ডেস্কে", en: "At the school desk", hi: "स्कूल की मेज़ पर" },
            { bn: "স্কুলের গেটে", en: "At the school gate", hi: "स्कूल के गेट पर" },
            { bn: "রিকশার সিটে", en: "On the rickshaw seat", hi: "रिक्शे की सीट पर" },
            { bn: "চা-দোকানে", en: "At a tea shop", hi: "चाय की दुकान पर" },
          ],
          answer: 2,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে ব্যস্ত সকালে রাহিম রিকশা থেকে নেমে দৌড়ায়, আর ব্যাগটা সিটেই ভুলে যায়।",
            en: "In the second paragraph, Rahim jumps down and runs in the busy morning, and he forgets his bag on the seat.",
            hi: "दूसरे अनुच्छेद में व्यस्त सुबह राहिम रिक्शे से कूदकर दौड़ जाता है, और बस्ता सीट पर ही भूल जाता है।",
          },
        },
        {
          question: {
            bn: "রিকশার সিট থেকে ব্যাগটা কে খুঁজে পায়?",
            en: "Who finds the bag on the rickshaw seat?",
            hi: "रिक्शे की सीट पर बस्ता किसे मिलता है?",
          },
          options: [
            { bn: "করিম চাচা, রিকশাচালক", en: "Karim, the rickshaw puller", hi: "करीम, रिक्शा चालक" },
            { bn: "রাহিমের বাবা", en: "Rahim's father", hi: "राहिम के पापा" },
            { bn: "স্কুলের প্রহরী", en: "The school guard", hi: "स्कूल का पहरेदार" },
            { bn: "রাহিমের বন্ধু", en: "Rahim's friend", hi: "राहिम का दोस्त" },
          ],
          answer: 0,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে প্রহরী বলে, 'একজন রিকশাচালক এটা নিয়ে এসেছে, সিটের ওপর পেয়েছে' — সেই চালকই করিম চাচা।",
            en: "In the fourth paragraph, the guard says, \"A rickshaw puller brought this. He found it on his seat.\" That puller is Karim.",
            hi: "चौथे अनुच्छेद में पहरेदार कहता है, 'एक रिक्शा चालक यह लाया है, उसे सीट पर मिला' — वही चालक करीम है।",
          },
        },
        {
          question: {
            bn: "স্কুল শেষে রাহিম করিম চাচাকে কী দেয়?",
            en: "What does Rahim give Karim chacha after school?",
            hi: "स्कूल के बाद राहिम करीम चाचा को क्या देता है?",
          },
          options: [
            { bn: "দশ টাকা", en: "Ten taka", hi: "दस रुपये" },
            { bn: "এক গ্লাস কোল্ড ড্রিংকস", en: "A cold drink", hi: "एक ठंडा पेय" },
            { bn: "নতুন একটা কলম", en: "A new pen", hi: "एक नई कलम" },
            { bn: "চকলেটের এক বড় টুকরো", en: "A big piece of chocolate", hi: "चॉकलेट का एक बड़ा टुकड़ा" },
          ],
          answer: 3,
          explain: {
            bn: "শেষ অনুচ্ছেদে রাহিম হাসিমুখে করিম চাচাকে চকলেটের এক বড় টুকরো উপহার দেয় আর ধন্যবাদ বলে।",
            en: "In the last paragraph, Rahim gives Karim chacha a big piece of chocolate with a smile and says thank you.",
            hi: "आख़िरी अनुच्छेद में राहिम मुस्कुराकर करीम चाचा को चॉकलेट का एक बड़ा टुकड़ा देता है और धन्यवाद कहता है।",
          },
        },
        {
          question: {
            bn: "দশটার সময় রাহিম কেন কাঁদতে চায়?",
            en: "Why does Rahim want to cry at ten o'clock?",
            hi: "दस बजे राहिम को रोना क्यों आता है?",
          },
          options: [
            { bn: "কারণ সে খুব ক্ষুধার্ত", en: "Because he is very hungry", hi: "क्योंकि वह बहुत भूखा है" },
            {
              bn: "কারণ সে মনে করে বাবার উপহারটা হারিয়েছে",
              en: "Because he thinks he lost his father's gift",
              hi: "क्योंकि उसे लगता है कि उसने पापा का उपहार खो दिया",
            },
            { bn: "কারণ সে ঘরে ফিরতে চায়", en: "Because he wants to go home", hi: "क्योंकि वह घर जाना चाहता है" },
            { bn: "কারণ সে স্কুল পছন্দ করে না", en: "Because he does not like school", hi: "क्योंकि उसे स्कूल पसंद नहीं" },
          ],
          answer: 1,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদে ব্যাগ না পেয়ে রাহিম ভাবে, 'আমি বাবার উপহারটা হারিয়ে ফেলেছি' — তখনই তার চোখে পানি আসে।",
            en: "In the third paragraph, without the bag Rahim thinks, \"I lost my father's gift.\" Then tears come to his eyes.",
            hi: "तीसरे अनुच्छेद में बस्ता न मिलने पर राहिम सोचता है, 'मैंने पापा का उपहार खो दिया' — तभी उसकी आँखों में आँसू आते हैं।",
          },
        },
      ],
    },
  },

  /* ── story 2 · travel · first launch journey to Barishal ──────────── */
  {
    slug: "story3-b1-02",
    level: "beginner",
    category: "travel",
    minutes: 2,
    unit: 0,
    data: {
      title: {
        bn: "নদীর লঞ্চযাত্রা",
        en: "A River Launch Journey",
        hi: "नदी की लॉन्च यात्रा",
      },
      summary: {
        bn: "মিতার জীবনের প্রথম লঞ্চযাত্রা — সঙ্গী নানু। সদরঘাটের ভিড়, বিশাল নদী, মাছ ধরার নৌকা আর চাঁদের আলোয় ভেজা রাত। ভোরে বরিশালে পৌঁছে মিতা বুঝে, প্রথম যাত্রাটা কত সুন্দর হতে পারে।",
        en: "Mita takes her first launch trip with her grandmother. Busy Sadar Ghat, a wide river, fishing boats, and a night washed in moonlight. When the launch reaches Barishal in the morning, Mita knows how beautiful a first journey can be.",
        hi: "मिता अपनी नानी के साथ पहली बार लॉन्च यात्रा करती है। भीड़ भरा सदरघाट, चौड़ा नदी, मछली पकड़ने की नावें और चाँदनी रात। सुबह बरिशाल पहुँचकर मिता समझती है कि पहली यात्रा कितनी सुंदर हो सकती है।",
      },
      paragraphs: [
        "Mita lives in Dhaka with her parents. Today is a happy day. She goes to Barishal with her grandmother. It is her first trip on a launch. Her small bag has biscuits, water and a red blanket. Mita holds her grandmother's hand at the busy ghat.",
        "Sadar Ghat is very busy. Big launches wait near the stairs. People carry bags and boxes. The horn of a launch sings, \"gooo!\" \"Nani, the launch is so big!\" Mita says. Grandmother smiles. They walk up the stairs and find their seats near a window.",
        "At nine o'clock, the launch leaves Dhaka. The big city moves away slowly. Mita looks at the wide river. Fishing boats dance on the water. The wind touches her face. It feels cool and sweet. Grandmother tells a story about this river.",
        "At night, they eat rice and fish on the launch. The moon shines on the black water. Small lights move far away. \"Those are other launches, Nani?\" Mita asks. \"Yes, and stars too,\" grandmother laughs. Mita sleeps under the red blanket.",
        "In the morning, the launch arrives in Barishal. The air smells of green paddy fields. \"Wake up, Mita, look!\" grandmother says. Mita sees the river port and the palm trees. Her cousins wait at the ghat with sweets. Mita waves her hand. What a beautiful first journey!",
      ],
      vocabulary: [
        {
          word: "launch",
          meaning: {
            bn: "লঞ্চ — নদীতে চলা বড় যাত্রীবাহী নৌযান",
            en: "a big passenger boat that runs on rivers",
            hi: "लॉन्च — नदी में चलने वाला बड़ा यात्री जहाज़",
          },
          example: "The launch to Barishal leaves at night.",
        },
        {
          word: "ghat",
          meaning: {
            bn: "ঘাট — নদীর ধারে ওঠা-নামার সিঁড়ি",
            en: "river steps where boats stop",
            hi: "घाट — नदी किनारे चढ़ने-उतरने की सीढ़ियाँ",
          },
          example: "We wait for the boat at the ghat.",
        },
        {
          word: "blanket",
          meaning: {
            bn: "কম্বল — গা গুটানোর মোটা নরম কাপড়",
            en: "a thick, soft cover for sleeping",
            hi: "कंबल — सोने के लिए मोटा मुलायम कपड़ा",
          },
          example: "The night is cold, so Mita needs a blanket.",
        },
        {
          word: "wind",
          meaning: {
            bn: "হাওয়া — চলমান বাতাস",
            en: "moving air",
            hi: "हवा — बहती हुई बातास",
          },
          example: "The cool wind blows over the river.",
        },
        {
          word: "moon",
          meaning: {
            bn: "চাঁদ — রাতের আকাশে আলো দেয় যে বস্তু",
            en: "the bright round light in the night sky",
            hi: "चाँद — रात के आकाश में चमकने वाला गोल टुकड़ा",
          },
          example: "The moon looks big over the river.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "মিতার যাত্রা কোথা থেকে শুরু হয়?",
            en: "Where does Mita's journey start?",
            hi: "मिता की यात्रा कहाँ से शुरू होती है?",
          },
          options: [
            { bn: "রেলস্টেশন থেকে", en: "At a railway station", hi: "रेलवे स्टेशन से" },
            { bn: "ঢাকার সদরঘাট থেকে", en: "At Sadar Ghat in Dhaka", hi: "ढाका के सदरघाट से" },
            { bn: "বরিশালের পোর্ট থেকে", en: "At Barishal port", hi: "बरिशाल के पोर्ट से" },
            { bn: "স্কুলের গেট থেকে", en: "At the school gate", hi: "स्कूल के गेट से" },
          ],
          answer: 1,
          explain: {
            bn: "প্রথম ও দ্বিতীয় অনুচ্ছেদে দেখা যায়, মিতা নানুর হাত ধরে ঢাকার ব্যস্ত সদরঘাটে দাঁড়িয়ে, সেখান থেকেই লঞ্চ ছাড়ে।",
            en: "In the first and second paragraphs, Mita stands at the busy Sadar Ghat in Dhaka, and the launch leaves from there.",
            hi: "पहले और दूसरे अनुच्छेद में मिता ढाका के व्यस्त सदरघाट पर नानी का हाथ थामे खड़ी है, वहीं से लॉन्च छूटता है।",
          },
        },
        {
          question: {
            bn: "মিতার ছোট্ট ব্যাগে কী কী আছে?",
            en: "What does Mita carry in her small bag?",
            hi: "मिता अपने छोटे बैग में क्या रखती है?",
          },
          options: [
            { bn: "খেলনা আর খেলা", en: "Toys and games", hi: "खिलौने और खेल" },
            { bn: "বই আর পেনসিল", en: "Books and pencils", hi: "किताबें और पेंसिल" },
            { bn: "বিস্কুট, পানি আর লাল কম্বল", en: "Biscuits, water and a red blanket", hi: "बिस्कुट, पानी और लाल कंबल" },
            { bn: "ভাত আর মাছ", en: "Rice and fish", hi: "चावल और मछली" },
          ],
          answer: 2,
          explain: {
            bn: "প্রথম অনুচ্ছেদে বলা আছে, মিতার ছোট্ট ব্যাগে বিস্কুট, পানি আর একটা লাল কম্বল আছে।",
            en: "The first paragraph says her small bag has biscuits, water and a red blanket.",
            hi: "पहले अनुच्छेद में लिखा है कि मिता के छोटे बैग में बिस्कुट, पानी और एक लाल कंबल है।",
          },
        },
        {
          question: {
            bn: "কয়টায় লঞ্চটা ঢাকা ছেড়ে যায়?",
            en: "When does the launch leave Dhaka?",
            hi: "लॉन्च ढाका कब छोड़ता है?",
          },
          options: [
            { bn: "তিনটায়", en: "At three o'clock", hi: "तीन बजे" },
            { bn: "দুপুরে", en: "At noon", hi: "दोपहर में" },
            { bn: "মাঝরাতে", en: "At midnight", hi: "आधी रात को" },
            { bn: "নয়টায়", en: "At nine o'clock", hi: "नौ बजे" },
          ],
          answer: 3,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদের শুরুতে সাফ লেখা — 'At nine o'clock, the launch leaves Dhaka.'",
            en: "The third paragraph starts clearly: \"At nine o'clock, the launch leaves Dhaka.\"",
            hi: "तीसरे अनुच्छेद की शुरुआत में साफ़ लिखा है — 'नौ बजे लॉन्च ढाका छोड़ता है'।",
          },
        },
        {
          question: {
            bn: "ভোরে ঘুম থেকে উঠে মিতা কী দেখে?",
            en: "What does Mita see when she wakes up in the morning?",
            hi: "सुबह जागकर मिता क्या देखती है?",
          },
          options: [
            { bn: "নদীর পোর্ট আর সবুজ তালগাছ", en: "The river port and green palm trees", hi: "नदी का पोर्ट और हरे ताड़ के पेड़" },
            { bn: "ছাদের ওপর বরফ", en: "Snow on the roofs", hi: "छतों पर बर्फ़" },
            { bn: "একটা বড় শহরের বাজার", en: "A big city market", hi: "एक बड़ा शहरी बाज़ार" },
            { bn: "তার স্কুল", en: "Her school", hi: "उसका स्कूल" },
          ],
          answer: 0,
          explain: {
            bn: "শেষ অনুচ্ছেদে নানুর ডাকে ঘুম ভেঙে মিতা দেখে নদীর পোর্ট আর তালগাছের সারি, ঘাটে অপেক্ষা করছে তার কাজিনরা।",
            en: "In the last paragraph, Mita wakes up and sees the river port and palm trees; her cousins wait at the ghat.",
            hi: "आख़िरी अनुच्छेद में नानी की आवाज़ से जागकर मिता नदी का पोर्ट और ताड़ के पेड़ देखती है; घाट पर उसके कज़िन इंतज़ार कर रहे हैं।",
          },
        },
      ],
    },
  },

  /* ── story 3 · work · first day at the tea stall ──────────────────── */
  {
    slug: "story3-b1-03",
    level: "beginner",
    category: "work",
    minutes: 3,
    unit: 0,
    data: {
      title: {
        bn: "চা-স্টলের প্রথম দিন",
        en: "First Day at the Tea Stall",
        hi: "चाय की दुकान का पहला दिन",
      },
      summary: {
        bn: "চাচার চা-স্টলে প্রথম দিন কাজ করতে যায় পনেরো বছরের সাব্বির। কাপ ধোয়া, টেবিল মোছা, আর ইংরেজিতে কাস্টমারকে অভ্যর্থনা জানানো শেখে সে। দিন শেষে এক বিদেশি পর্যটকের 'থ্যাংক ইউ'-ই হয়ে যায় তার সবচেয়ে বড় পুরস্কার।",
        en: "Fifteen-year-old Sabbir spends his first day working at his uncle's tea stall. He washes cups, cleans tables and learns to greet customers in English. At the end of the day, a foreign tourist's \"thank you\" becomes his best reward.",
        hi: "पंद्रह साल का सब्बीर चाचा की चाय की दुकान पर पहले दिन काम करने जाता है। वह कप धोता है, मेज़ें साफ़ करता है और ग्राहकों का अंग्रेज़ी में स्वागत करना सीखता है। दिन के अंत में एक विदेशी पर्यटक का 'धन्यवाद' उसका सबसे बड़ा इनाम बन जाता है।",
      },
      paragraphs: [
        "Sabbir is fifteen years old. His uncle has a small tea stall near the bus stand. Today Sabbir helps there for the first time. He wakes up very early. The stall opens at six o'clock. Sabbir feels excited, but his hands shake a little.",
        "Uncle shows him the work. \"First, wash your hands,\" he says. \"Then clean the tables.\" Sabbir washes many cups. He puts the cups on a big tray. Hot water runs over the tea leaves. The sweet smell of tea fills the morning air.",
        "Many customers come. Uncle says, \"Now greet them in English. Speak slowly and smile.\" Sabbir takes a deep breath. \"Good morning! How are you?\" he says. The customers laugh happily. \"Very good, boy!\" one man says. Sabbir feels proud. His shaking hands are still now.",
        "At ten o'clock, a foreign tourist stops at the stall. She has a big bag and a map. \"One tea, please,\" she says in English. Sabbir understands her words! \"Good morning! One tea, yes?\" he says. The tourist smiles and nods. He gives her a hot cup with care.",
        "The tourist drinks her tea slowly. \"Very good tea! Thank you, young man,\" she says. Sabbir's face shines like the morning sun. He bows his head a little. Uncle watches from the corner and smiles quietly.",
        "In the evening, the stall closes. Uncle puts his hand on Sabbir's head. \"You are a good helper, son,\" he says. Tomorrow, Sabbir comes again. He walks home in the orange light. English is not so hard, he thinks.",
      ],
      vocabulary: [
        {
          word: "stall",
          meaning: {
            bn: "স্টল — ছোট খোলা দোকান",
            en: "a small open shop",
            hi: "स्टॉल — छोटी खुली दुकान",
          },
          example: "Uncle's tea stall opens at six o'clock.",
        },
        {
          word: "customer",
          meaning: {
            bn: "গ্রাহক — দোকানে কেনাকাটায় আসা মানুষ",
            en: "a person who buys from a shop",
            hi: "ग्राहक — दुकान से खरीदने आने वाला व्यक्ति",
          },
          example: "The stall has many customers in the morning.",
        },
        {
          word: "greet",
          meaning: {
            bn: "অভ্যর্থনা জানানো — সালাম বা শুভেচ্ছা দেওয়া",
            en: "to say hello to someone",
            hi: "स्वागत करना — नमस्ते या अभिवादन कहना",
          },
          example: "We greet our teacher with a smile.",
        },
        {
          word: "tray",
          meaning: {
            bn: "ট্রে — কাপ-থালা রাখার চ্যাপ্টা পাত্র",
            en: "a flat plate for carrying cups",
            hi: "ट्रे — कप रखकर ले जाने की चपटी थाली",
          },
          example: "Sabbir carries six cups on one tray.",
        },
        {
          word: "tourist",
          meaning: {
            bn: "পর্যটক — ঘুরতে আসা মানুষ",
            en: "a person who travels for pleasure",
            hi: "पर्यटक — घूमने आने वाला व्यक्ति",
          },
          example: "The tourist drinks tea at our stall.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "চাচার চা-স্টলটা কোথায়?",
            en: "Where is uncle's tea stall?",
            hi: "चाचा की चाय की दुकान कहाँ है?",
          },
          options: [
            { bn: "স্কুলের পাশে", en: "Near the school", hi: "स्कूल के पास" },
            { bn: "বাসস্ট্যান্ডের কাছে", en: "Near the bus stand", hi: "बस स्टैंड के पास" },
            { bn: "বড় বাজারে", en: "In the big market", hi: "बड़े बाज़ार में" },
            { bn: "নদীর ধারে", en: "Near the river", hi: "नदी के किनारे" },
          ],
          answer: 1,
          explain: {
            bn: "প্রথম অনুচ্ছেদেই বলা আছে — চাচার ছোট্ট চা-স্টলটা বাসস্ট্যান্ডের কাছে।",
            en: "The first paragraph says it clearly — uncle's small tea stall is near the bus stand.",
            hi: "पहले अनुच्छेद में ही साफ़ लिखा है — चाचा की छोटी चाय की दुकान बस स्टैंड के पास है।",
          },
        },
        {
          question: {
            bn: "স্টলে সাব্বির প্রথমে কী করে?",
            en: "What does Sabbir do first at the stall?",
            hi: "दुकान पर सब्बीर सबसे पहले क्या करता है?",
          },
          options: [
            { bn: "চা বানায়", en: "He makes tea", hi: "चाय बनाता है" },
            { bn: "টাকা গোনে", en: "He counts the money", hi: "पैसे गिनता है" },
            {
              bn: "হাত ধোয়ে টেবিল পরিষ্কার করে",
              en: "He washes his hands and cleans the tables",
              hi: "हाथ धोकर मेज़ें साफ़ करता है",
            },
            { bn: "পর্যটককে অভ্যর্থনা জানায়", en: "He greets the tourist", hi: "पर्यटक का स्वागत करता है" },
          ],
          answer: 2,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে চাচা বলে, 'প্রথমে হাত ধোও, তারপর টেবিল পরিষ্কার করো' — সাব্বির তাই করে।",
            en: "In the second paragraph, uncle says, \"First, wash your hands. Then clean the tables.\" Sabbir does that first.",
            hi: "दूसरे अनुच्छेद में चाचा कहते हैं, 'पहले हाथ धोओ, फिर मेज़ें साफ़ करो' — सब्बीर वही पहले करता है।",
          },
        },
        {
          question: {
            bn: "দশটার সময় স্টলে কে আসে?",
            en: "Who comes to the stall at ten o'clock?",
            hi: "दस बजे दुकान पर कौन आता है?",
          },
          options: [
            { bn: "এক বিদেশি পর্যটক", en: "A foreign tourist", hi: "एक विदेशी पर्यटक" },
            { bn: "এক বাস চালক", en: "A bus driver", hi: "एक बस चालक" },
            { bn: "স্কুলের শিক্ষক", en: "A school teacher", hi: "स्कूल का अध्यापक" },
            { bn: "সাব্বিরের মা", en: "Sabbir's mother", hi: "सब्बीर की मम्मी" },
          ],
          answer: 0,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে দশটায় এক বিদেশি পর্যটক স্টলে থামে — বড় ব্যাগ আর মানচিত্র হাতে।",
            en: "In the fourth paragraph, at ten o'clock a foreign tourist stops at the stall with a big bag and a map.",
            hi: "चौथे अनुच्छेद में दस बजे एक विदेशी पर्यटक बड़े बैग और नक्शे के साथ दुकान पर रुकती है।",
          },
        },
        {
          question: {
            bn: "সাব্বির কেন গর্ব ও আনন্দ বোধ করে?",
            en: "Why does Sabbir feel proud and happy?",
            hi: "सब्बीर को गर्व और खुशी क्यों महसूस होती है?",
          },
          options: [
            { bn: "কারণ সে অনেক টাকা আয় করে", en: "Because he earns much money", hi: "क्योंकि वह बहुत पैसे कमाता है" },
            { bn: "কারণ সে দোকান তাড়াতাড়ি বন্ধ করে", en: "Because he closes the stall early", hi: "क्योंकि वह दुकान जल्दी बंद करता है" },
            { bn: "কারণ সে দৌড়ে দ্রুত", en: "Because he runs fast", hi: "क्योंकि वह तेज़ दौड़ता है" },
            {
              bn: "কারণ সে কাস্টমারদের সাথে ইংরেজিতে কথা বলে",
              en: "Because he speaks English with the customers",
              hi: "क्योंकि वह ग्राहकों से अंग्रेज़ी में बात करता है",
            },
          ],
          answer: 3,
          explain: {
            bn: "চাচার শেখানো ইংরেজি বাক্যে গ্রাহকরা 'খুব ভালো, ছেলে!' বলে প্রশংসা করে, আর পর্যটকও সাব্বিরের ইংরেজি বুঝে যায় — এজন্যই সে গর্বিত।",
            en: "The customers praise his English greeting — \"Very good, boy!\" — and the tourist understands him too. That is why Sabbir feels proud.",
            hi: "ग्राहक उसकी अंग्रेज़ी अभिवादन पर 'बहुत अच्छा, बेटा!' कहकर तारीफ़ करते हैं, और पर्यटक भी उसे समझ लेती है — इसीलिए सब्बीर को गर्व होता है।",
          },
        },
      ],
    },
  },

  /* ── story 4 · culture · winter pitha festival ────────────────────── */
  {
    slug: "story3-b1-04",
    level: "beginner",
    category: "culture",
    minutes: 2,
    unit: 0,
    data: {
      title: {
        bn: "শীতের পিঠা উৎসব",
        en: "The Winter Pitha Festival",
        hi: "सर्दियों का पिठा उत्सव",
      },
      summary: {
        bn: "পৌষের শীতে গ্রামের মাঠ জুড়ে পিঠা উৎসব। দাদিমার সঙ্গে চাল ধোয়া, গুড় মেশানো, ভাপার পিঠা ভাঁজা — সবই শেখে টুলি। মেলায় দাদিমার পিঠা প্রথম পুরস্কার জেতে, আর শীতটাও হয়ে ওঠে মিষ্টি।",
        en: "In the winter of Poush, the village field hosts a pitha festival. With her grandmother, Tuli learns to wash rice, mix jaggery and steam bhapa pitha. At the mela, grandmother's pitha wins the first prize — and winter turns sweet.",
        hi: "पौष की सर्दी में गाँव के मैदान में पिठा उत्सव होता है। दादी के साथ टुली चावल धोना, गुड़ मिलाना और भाप के पिठे बनाना सीखती है। मेले में दादी के पिठे को पहला इनाम मिलता है — और सर्दी मीठी बन जाती है।",
      },
      paragraphs: [
        "January comes with cold fog. In the village, everyone talks about the pitha festival. Tuli's grandmother plans a big day. She takes out her old clay pots. \"This year, you help me, Tuli,\" she says. Tuli jumps with joy.",
        "The night before, grandmother soaks the rice in water. In the morning, Tuli dries the rice on a cloth. Then grandmother grinds it into soft white flour. Sweet date jaggery waits in a pot. The kitchen becomes warm with fire and love.",
        "Now they make bhapa pitha. Grandmother mixes the flour and jaggery. Tuli fills the small clay pot with the mixture. Grandmother puts the pot over boiling water. Steam rises and sings a soft song. After ten minutes, the pitha is ready. It smells sweet like winter.",
        "In the afternoon, the village field becomes a mela. Neighbours bring their best pithas. There are chitoi, patishapta and nakshi pitha. Tuli's grandmother wins the first prize. Her bhapa pitha is the sweetest of all.",
        "Children sing Poush songs near the big fire. Cold wind blows outside, but the field is warm. Tuli sits with her grandmother and eats hot pitha. \"Next year, you make it alone,\" grandmother says. Tuli hugs her and smiles. Winter tastes sweet today.",
      ],
      vocabulary: [
        {
          word: "festival",
          meaning: {
            bn: "উৎসব — আনন্দের বিশেষ দিন",
            en: "a special day of joy",
            hi: "उत्सव — खुशी का खास दिन",
          },
          example: "Our village holds a pitha festival every winter.",
        },
        {
          word: "flour",
          meaning: {
            bn: "আটা — শস্য পেষে তৈরি গুঁড়া",
            en: "powder made from grain",
            hi: "आटा — अनाज पीसकर बना पाउडर",
          },
          example: "Grandmother makes soft white flour from rice.",
        },
        {
          word: "jaggery",
          meaning: {
            bn: "গুড় — খেজুর বা আখের রস থেকে তৈরি মিষ্টি",
            en: "sweet blocks made from palm or cane juice",
            hi: "गुड़ — खजूर या गन्ने के रस से बनी मिठाई",
          },
          example: "Sweet jaggery makes the pitha tasty.",
        },
        {
          word: "steam",
          meaning: {
            bn: "বাষ্প — ফুটন্ত পানির গরম হাওয়া",
            en: "hot air from boiling water",
            hi: "भाप — उबलते पानी की गरम हवा",
          },
          example: "Steam rises from the hot pitha pot.",
        },
        {
          word: "prize",
          meaning: {
            bn: "পুরস্কার — ভালো কাজের স্বীকৃতি",
            en: "a reward for good work",
            hi: "पुरस्कार — अच्छे काम का इनाम",
          },
          example: "Her pitha wins the first prize.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "গল্পটা কোন সময়ের?",
            en: "When does the story happen?",
            hi: "कहानी कब की है?",
          },
          options: [
            { bn: "গ্রীষ্মে", en: "In summer", hi: "गर्मियों में" },
            { bn: "বর্ষায়", en: "In the rainy season", hi: "बरसात में" },
            { bn: "শীতে, জানুয়ারিতে", en: "In winter, in January", hi: "सर्दियों में, जनवरी में" },
            { bn: "বসন্তে", en: "In spring", hi: "बसंत में" },
          ],
          answer: 2,
          explain: {
            bn: "প্রথম অনুচ্ছেদে লেখা — 'January comes with cold fog' — শীতের কুয়াশা নিয়ে জানুয়ারির কথা।",
            en: "The first paragraph says, \"January comes with cold fog\" — it is winter time.",
            hi: "पहले अनुच्छेद में लिखा है — 'ठंडी कोहरे के साथ जनवरी आती है' — यानी सर्दियों का समय।",
          },
        },
        {
          question: {
            bn: "আগের রাতে দাদিমা পানিতে কী ভিজিয়ে রাখেন?",
            en: "What does grandmother soak in water the night before?",
            hi: "पिछली रात दादी पानी में क्या भिगोती हैं?",
          },
          options: [
            { bn: "চাল", en: "Rice", hi: "चावल" },
            { bn: "গুড়", en: "Jaggery", hi: "गुड़" },
            { bn: "নারকেল", en: "Coconut", hi: "नारियल" },
            { bn: "চায়ের পাতা", en: "Tea leaves", hi: "चाय की पत्तियाँ" },
          ],
          answer: 0,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদের শুরুতে বলা আছে — উৎসবের আগের রাতে দাদিমা চাল পানিতে ভিজিয়ে রাখেন।",
            en: "The second paragraph starts with it — the night before, grandmother soaks the rice in water.",
            hi: "दूसरे अनुच्छेद की शुरुआत में लिखा है — उत्सव से पिछली रात दादी चावल पानी में भिगो देती हैं।",
          },
        },
        {
          question: {
            bn: "টুলি আর দাদিমা কোন পিঠা বানায়?",
            en: "Which pitha do Tuli and grandmother make?",
            hi: "टुली और दादी कौन-सा पिठा बनाते हैं?",
          },
          options: [
            { bn: "চিতই পিঠা", en: "Chitoi pitha", hi: "चितई पिठा" },
            { bn: "ভাপা পিঠা", en: "Bhapa pitha", hi: "भापा पिठा" },
            { bn: "পাটিসাপটা", en: "Patishapta", hi: "पतिशप्ता" },
            { bn: "নকশি পিঠা", en: "Nakshi pitha", hi: "नक्शी पिठा" },
          ],
          answer: 1,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদে সাফ বলা — 'Now they make bhapa pitha.' চিতই-পাটিসাপটা আনে প্রতিবেশীরা।",
            en: "The third paragraph says clearly: \"Now they make bhapa pitha.\" The neighbours bring chitoi and patishapta.",
            hi: "तीसरे अनुच्छेद में साफ़ लिखा है — 'अब वे भापा पिठा बनाते हैं।' चितई और पतिशप्ता पड़ोसी लाते हैं।",
          },
        },
        {
          question: {
            bn: "মেলায় প্রথম পুরস্কার কে জেতে?",
            en: "Who wins the first prize at the mela?",
            hi: "मेले में पहला इनाम कौन जीतता है?",
          },
          options: [
            { bn: "টুলি", en: "Tuli", hi: "टुली" },
            { bn: "এক প্রতিবেশী", en: "A neighbour", hi: "एक पड़ोसी" },
            { bn: "টুলির মা", en: "Tuli's mother", hi: "टुली की मम्मी" },
            { bn: "টুলির দাদিমা", en: "Tuli's grandmother", hi: "टुली की दादी" },
          ],
          answer: 3,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে লেখা — টুলির দাদিমা প্রথম পুরস্কার জেতেন, তাঁর ভাপা পিঠাই সবচেয়ে মিষ্টি।",
            en: "The fourth paragraph says Tuli's grandmother wins the first prize — her bhapa pitha is the sweetest of all.",
            hi: "चौथे अनुच्छेद में लिखा है — टुली की दादी पहला इनाम जीतती हैं, उनका भापा पिठा सबसे मीठा होता है।",
          },
        },
      ],
    },
  },

  /* ── story 5 · inspire · slow runner, big win ─────────────────────── */
  {
    slug: "story3-b1-05",
    level: "beginner",
    category: "inspire",
    minutes: 3,
    unit: 0,
    data: {
      title: {
        bn: "ধীর দৌড়ে জেতা মেয়ে",
        en: "The Girl Who Ran Slow but Won",
        hi: "धीमी दौड़ जीतने वाली लड़की",
      },
      summary: {
        bn: "দৌড়ে সবার শেষ হতো বলে কষ্ট পেত রুমি। কিন্তু মায়ের কথা মনে রেখে প্রতিদিন ভোরে উঠে দৌড়াতে বসে সে। দিনের পর দিন চেষ্টা শেষে স্কুলের দৌড় প্রতিযোগিতায় প্রথম হয়ে সে দেখায় — ধীর পায়েও উড়ার সাধ থাকে।",
        en: "Rumi feels hurt because she always runs last. But remembering her mother's words, she gets up at dawn and practises every day. After days of quiet effort, she wins the school race — proof that slow feet can learn to fly.",
        hi: "रुमी दौड़ में हमेशा सबसे पीछे रहने से दुखी होती है। लेकिन मम्मी की बात याद रखकर वह रोज़ भोर में उठकर अभ्यास करती है। दिन-ब-दिन की मेहनत के बाद वह स्कूल की दौड़ जीत जाती है — धीमे पैर भी उड़ना सीख सकते हैं।",
      },
      paragraphs: [
        "Rumi is a student of class six. She loves to run, but she runs slowly. In the last race, she comes last. Some children laugh at her. Rumi cries a little that night. Her mother holds her hand. \"Slow feet can learn to fly,\" she says.",
        "The next morning, Rumi wakes up at five o'clock. The sky is still dark and cool. She runs to the old banyan tree and back. Her legs hurt on the first day. She counts her steps and does not stop. A stray dog runs with her. Rumi names him Tufan.",
        "She practises every morning, rain or fog. Slowly, her steps become light and quick. At school, her friend Sumi runs with her. Sumi teaches her to breathe in and out. After one month, Rumi runs round the field two times. She is not the last any more.",
        "Today is the school sports day. The small race starts at ten o'clock. The whistle blows, and eight girls run. Rumi's heart beats like a drum. She remembers her mother's words. Near the end, she pushes her legs hard. She crosses the line first!",
        "Her classmates clap and call her name. Sumi hugs her with a big laugh. The head teacher gives Rumi a gold medal. \"You run with your heart,\" she says. That night, Rumi gives the medal to her mother. \"This is yours,\" she says. Her mother smiles with wet eyes. Slow feet really learn to fly.",
      ],
      vocabulary: [
        {
          word: "race",
          meaning: {
            bn: "দৌড় প্রতিযোগিতা — কে আগে পৌঁছায় তার খেলা",
            en: "a running contest",
            hi: "दौड़ प्रतियोगिता — कौन पहले पहुँचे वह खेल",
          },
          example: "The school race starts at ten o'clock.",
        },
        {
          word: "practise",
          meaning: {
            bn: "মহড়া দেওয়া — ভালো হতে বারবার করা",
            en: "to do something again and again to get better",
            hi: "अभ्यास करना — बेहतर होने के लिए बार-बार करना",
          },
          example: "Rumi practises every morning before school.",
        },
        {
          word: "breathe",
          meaning: {
            bn: "শ্বাস নেওয়া — ভেতরে-বাইরে হাওয়া নেওয়া",
            en: "to take air in and out",
            hi: "सांस लेना — हवा अंदर-बाहर लेना",
          },
          example: "Breathe in, breathe out, and run slow.",
        },
        {
          word: "whistle",
          meaning: {
            bn: "হুইসেল — তীক্ষ্ণ শব্দ করা ছোট যন্ত্র",
            en: "a small tool that makes a sharp sound",
            hi: "सीटी — तेज़ आवाज़ निकालने वाला छोटा यंत्र",
          },
          example: "The teacher blows the whistle, and the race starts.",
        },
        {
          word: "medal",
          meaning: {
            bn: "পদক — জেতার সোনালি স্মারক",
            en: "a round prize, often gold, for winning",
            hi: "पदक — जीत का गोल, अक्सर सुनहरा इनाम",
          },
          example: "The head teacher gives Rumi a gold medal.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "গল্পের শুরুতে রুমি কেন কষ্ট পায়?",
            en: "Why does Rumi feel hurt at the beginning?",
            hi: "कहानी की शुरुआत में रुमी को दुख क्यों होता है?",
          },
          options: [
            { bn: "সে স্কুলের ব্যাগ হারায়", en: "She loses her school bag", hi: "उसका स्कूल का बैग खो जाता है" },
            { bn: "সে অসুস্থ হয়", en: "She is ill", hi: "वह बीमार हो जाती है" },
            { bn: "তার বন্ধু চলে যায়", en: "Her friend moves away", hi: "उसका दोस्त चला जाता है" },
            { bn: "দৌড়ে সে সবার শেষে আসে", en: "She comes last in the race", hi: "दौड़ में वह सबसे पीछे आती है" },
          ],
          answer: 3,
          explain: {
            bn: "প্রথম অনুচ্ছেদে শেষ দৌড়ে রুমি সবার শেষে আসে, কিছু বাচ্চা হাসে — তাই রাতে সে একটু কেঁদে ফেলে।",
            en: "In the first paragraph, Rumi comes last in the race and some children laugh — so she cries a little that night.",
            hi: "पहले अनुच्छेद में रुमी दौड़ में सबसे पीछे आती है और कुछ बच्चे हँसते हैं — इसलिए रात में वह थोड़ा रो देती है।",
          },
        },
        {
          question: {
            bn: "মহড়া দিতে রুমি কয়টায় ঘুম থেকে ওঠে?",
            en: "What time does Rumi wake up to practise?",
            hi: "अभ्यास के लिए रुमी कितने बजे उठती है?",
          },
          options: [
            { bn: "আটটায়", en: "At eight o'clock", hi: "आठ बजे" },
            { bn: "পাঁচটায়", en: "At five o'clock", hi: "पाँच बजे" },
            { bn: "বারোটায়", en: "At twelve o'clock", hi: "बारह बजे" },
            { bn: "সাতটায়", en: "At seven o'clock", hi: "सात बजे" },
          ],
          answer: 1,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে লেখা — পরদিন ভোরে রুমি পাঁচটায় ঘুম থেকে ওঠে, আকাশ তখনও অন্ধকার।",
            en: "The second paragraph says — the next morning, Rumi wakes up at five o'clock; the sky is still dark.",
            hi: "दूसरे अनुच्छेद में लिखा है — अगली सुबह रुमी पाँच बजे उठती है; आकाश अभी भी अंधेरा है।",
          },
        },
        {
          question: {
            bn: "স্কুলে রুমির সাথে কে দৌড়ায়?",
            en: "Who runs with Rumi at school?",
            hi: "स्कूल में रुमी के साथ कौन दौड़ता है?",
          },
          options: [
            { bn: "তার বন্ধু সুমি", en: "Her friend Sumi", hi: "उसकी दोस्त सुमि" },
            { bn: "তার মা", en: "Her mother", hi: "उसकी मम्मी" },
            { bn: "প্রধান শিক্ষক", en: "The head teacher", hi: "प्रधानाध्यापक" },
            { bn: "তার কাজিন", en: "Her cousin", hi: "उसका कज़िन" },
          ],
          answer: 0,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদে বন্ধু সুমি স্কুলে তার সাথে দৌড়ায় আর শ্বাস নেওয়ার নিয়ম শেখায়।",
            en: "In the third paragraph, her friend Sumi runs with her at school and teaches her to breathe in and out.",
            hi: "तीसरे अनुच्छेद में उसकी दोस्त सुमि स्कूल में उसके साथ दौड़ती है और सांस लेना सिखाती है।",
          },
        },
        {
          question: {
            bn: "রাতে রুমি পদকটা কী করে?",
            en: "What does Rumi do with the medal at night?",
            hi: "रात में रुमी पदक का क्या करती है?",
          },
          options: [
            { bn: "একটা বাক্সে লুকিয়ে রাখে", en: "She hides it in a box", hi: "एक डिब्बे में छिपा देती है" },
            { bn: "ঘুমের সময় গলায় পরে", en: "She wears it when she sleeps", hi: "सोते समय पहन लेती है" },
            { bn: "মাকে দিয়ে দেয়", en: "She gives it to her mother", hi: "मम्मी को दे देती है" },
            { bn: "স্কুলের ব্যাগে রাখে", en: "She puts it in her school bag", hi: "स्कूल के बैग में रख देती है" },
          ],
          answer: 2,
          explain: {
            bn: "শেষ অনুচ্ছেদে রাতে রুমি পদকটা মাকে দিয়ে বলে, 'এটা তোমার' — মা ভেজা চোখে হাসেন।",
            en: "In the last paragraph, Rumi gives the medal to her mother at night and says, \"This is yours.\" Her mother smiles with wet eyes.",
            hi: "आख़िरी अनुच्छेद में रुमी रात में पदक मम्मी को देकर कहती है, 'यह आपका है।' मम्मी भीगी आँखों से मुस्कुराती हैं।",
          },
        },
      ],
    },
  },
];
