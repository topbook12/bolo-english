// BUILT-IN LISTENING LIBRARY — 18 curated graded stories (6 per level).
// Works WITHOUT any API key: static data, converted to ListeningStoryContent
// at the component boundary. Story text is always ENGLISH (listening practice);
// titles, summaries, vocabulary meanings and quiz text carry bn + en + hi
// (Bengali primary, English/Hindi optional) per the language policy.
// All content is original and graded: beginner A2 (~180-260 words),
// intermediate B1 (~280-400), advanced C1 (~420-600).

import type { ListeningStoryContent } from "@/lib/types";
import { pickLang, type LibraryCategory, type LibraryStory } from "./types";

// ---------------------------------------------------------------- BEGINNER

const BEGINNER: LibraryStory[] = [
  {
    id: "rainy-day-market",
    level: "beginner",
    category: "daily",
    minutes: 3,
    title: {
      bn: "বৃষ্টির দিনে বাজার",
      en: "The Rainy Day Market",
      hi: "बारिश वाले दिन की मंडी",
    },
    summary: {
      bn: "রাশিদা তার মায়ের সঙ্গে শনিবার সকালে বাজারে যায়। হঠাৎ বৃষ্টি নামলে সবাই ছাতার নিচে দাঁড়ায়, আর রাশিদা এক বৃদ্ধের উপর নিজের ছাতা ধরে দেয়।",
      en: "Rashida goes to the market with her mother on Saturday morning. When sudden rain falls, everyone hides under a tin roof — and Rashida shares her umbrella with an old man.",
      hi: "राशिदा शनिवार सुबह अपनी माँ के साथ मंडी जाती है। अचानक बारिश होने पर सब टिन की छत के नीचे छिप जाते हैं — और राशिदा एक बूढ़े आदमी को अपना छाता दे देती है।",
    },
    paragraphs: [
      "It is Saturday morning. Rashida walks to the market with her mother. The sky is grey. “Rain is coming,” her mother says. “We must be quick.”",
      "The market is busy. There are tomatoes, onions, and fresh green chillies on every table. Rashida carries the shopping bag. Her mother counts the money slowly and carefully.",
      "Then the first raindrops fall. Drip, drip, drip! Everyone runs. The sellers cover their vegetables with big blue paper. Rashida and her mother stand under a tin roof with ten other people.",
      "Next to Rashida stands an old man. He has no umbrella and his shirt is wet. Rashida moves closer and holds her umbrella over him. “Thank you, little sister,” he says with a warm smile.",
      "The rain stops after ten minutes. The road is wet and shining. Rashida and her mother buy tomatoes, fish, and some rice. Mother also buys two sweet oranges for Rashida.",
      "At home, the kitchen smells wonderful. Mother cooks fish curry with the fresh tomatoes. Rashida cuts the vegetables. Father makes tea for everyone.",
      "Outside, the rain starts again. But Rashida is warm and happy. A little rain cannot stop a good day.",
    ],
    vocabulary: [
      {
        word: "market",
        meaning: { bn: "বাজার", en: "a place to buy and sell", hi: "मंडी, बाज़ार" },
        example: "We buy fresh fish at the market every Friday.",
      },
      {
        word: "umbrella",
        meaning: { bn: "ছাতা", en: "it protects you from rain", hi: "छाता" },
        example: "Take your umbrella; the sky looks dark.",
      },
      {
        word: "grey",
        meaning: { bn: "ধূসর", en: "the colour of clouds before rain", hi: "स्लेटी रंग" },
        example: "The sky is grey before the rain comes.",
      },
      {
        word: "seller",
        meaning: { bn: "বিক্রেতা", en: "a person who sells things", hi: "विक्रेता, दुकानदार" },
        example: "The seller covered his vegetables with paper.",
      },
      {
        word: "curry",
        meaning: { bn: "তরকারি / ঝোল", en: "a dish cooked with sauce", hi: "सब्ज़ी, करी" },
        example: "Mother cooks fish curry on Saturdays.",
      },
      {
        word: "shine",
        meaning: { bn: "চকচকে হওয়া", en: "to give bright light or look bright", hi: "चमकना" },
        example: "The wet road shines after the rain.",
      },
    ],
    quiz: [
      {
        question: {
          bn: "গল্পটা কখন ঘটে?",
          en: "When does the story happen?",
          hi: "कहानी कब की है?",
        },
        options: [
          { bn: "সোমবার সন্ধ্যায়", en: "On Monday evening", hi: "सोमवार शाम को" },
          { bn: "শনিবার সকালে", en: "On Saturday morning", hi: "शनिवार सुबह" },
          { bn: "রবিবার রাতে", en: "On Sunday night", hi: "रविवार रात" },
          { bn: "শুক্রবার দুপুরে", en: "On Friday afternoon", hi: "शुक्रवार दोपहर" },
        ],
        answer: 1,
        explain: {
          bn: "শুরুতেই লেখা আছে: “It is Saturday morning.”",
          en: "The first line says: “It is Saturday morning.”",
          hi: "पहली पंक्ति कहती है: “It is Saturday morning.”",
        },
      },
      {
        question: {
          bn: "সবাই কেন দৌড়ালো?",
          en: "Why does everyone run?",
          hi: "सब लोग क्यों दौड़े?",
        },
        options: [
          { bn: "বাজার বন্ধ হয়ে গেল বলে", en: "Because the market closed", hi: "क्योंकि मंडी बंद हो गई" },
          { bn: "বৃষ্টি শুরু হলো বলে", en: "Because the rain started", hi: "क्योंकि बारिश शुरू हुई" },
          { bn: "তারা দেরি করছিল বলে", en: "Because they were late", hi: "क्योंकि वे लेट थे" },
          { bn: "একটা কুকুর এলো বলে", en: "Because a dog came", hi: "क्योंकि एक कुत्ता आया" },
        ],
        answer: 1,
        explain: {
          bn: "প্রথম ফোঁটা পড়তেই সবাই দৌড়ায় এবং টিনের চালের নিচে আশ্রয় নেয়।",
          en: "When the first raindrops fall, everyone runs and hides under a tin roof.",
          hi: "पहली बूँदें गिरते ही सब दौड़कर टिन की छत के नीचे छिप जाते हैं।",
        },
      },
      {
        question: {
          bn: "ছাদের নিচে রাশিদার পাশে কে দাঁড়িয়ে ছিল?",
          en: "Who stands next to Rashida under the roof?",
          hi: "छत के नीचे राशिदा के पास कौन खड़ा था?",
        },
        options: [
          { bn: "একজন পুলিশ", en: "A policeman", hi: "एक पुलिसवाला" },
          { bn: "তার বাবা", en: "Her father", hi: "उसके पिता" },
          { bn: "এক বৃদ্ধ লোক", en: "An old man", hi: "एक बूढ़ा आदमी" },
          { bn: "একটা ছোট মেয়ে", en: "A small girl", hi: "एक छोटी लड़की" },
        ],
        answer: 2,
        explain: {
          bn: "“Next to Rashida stands an old man. He has no umbrella.”",
          en: "“Next to Rashida stands an old man. He has no umbrella.”",
          hi: "“Next to Rashida stands an old man. He has no umbrella.”",
        },
      },
      {
        question: {
          bn: "রাশিদা বৃদ্ধের জন্য কী করল?",
          en: "What does Rashida do for the old man?",
          hi: "राशिदा ने उस बूढ़े के लिए क्या किया?",
        },
        options: [
          { bn: "তাকে টাকা দিল", en: "She gave him money", hi: "उसे पैसे दिए" },
          { bn: "তার উপর ছাতা ধরে দিল", en: "She held her umbrella over him", hi: "उस पर अपना छाता धरा दिया" },
          { bn: "তার জন্য চা কিনল", en: "She bought him tea", hi: "उसके लिए चाय खरीदी" },
          { bn: "বাড়ি পর্যন্ত পাঠাল", en: "She walked him home", hi: "उसे घर तक छोड़ा" },
        ],
        answer: 1,
        explain: {
          bn: "সে একটু এগিয়ে গিয়ে তার ছাতাটা বৃদ্ধের উপর ধরে দেয়।",
          en: "She moves closer and holds her umbrella over him.",
          hi: "वह पास आकर अपना छाता उसके ऊपर धरा देती है।",
        },
      },
    ],
  },
  {
    id: "first-train-ride",
    level: "beginner",
    category: "travel",
    minutes: 3,
    title: {
      bn: "নুসরাতের প্রথম ট্রেন যাত্রা",
      en: "Nusrat's First Train Ride",
      hi: "नुसरत की पहली ट्रेन यात्रा",
    },
    summary: {
      bn: "নুসরাত প্রথমবার ট্রেনে করে দাদুর বাড়ির গ্রামে যাচ্ছে। জানালার ধারে বসে সে সবুজ ধানক্ষেত, পুকুর আর তালগাছ দেখে, আর ছোট স্টেশনে নেমে দাদুর সঙ্গে দেখা হয়।",
      en: "Nusrat takes her first train ride to her grandmother's village. From the window she watches green fields, ponds and palm trees — and at a small station, grandmother waits with open arms.",
      hi: "नुसरत पहली बार ट्रेन से अपनी दादी के गाँव जाती है। खिड़की से वह हरे खेत, तालाब और ताड़ के पेड़ देखती है — और छोटे स्टेशन पर दादी उसका इंतज़ार कर रही होती है।",
    },
    paragraphs: [
      "Today is a big day. Nusrat is going to her grandmother's village by train. It is her first train ride, and she wakes up before the sun.",
      "At the station, Papa buys three tickets. The train is long and green. It makes a loud sound — toooot! Nusrat holds Papa's hand tightly.",
      "They find their seats near the window. Mama sits beside her. The train moves slowly at first, then faster and faster. The station flies away behind them.",
      "Nusrat looks out of the window. She sees green rice fields, small houses, ponds, and tall palm trees. Cows eat grass near the railway line. “Look, Papa! The world is moving!”",
      "A man comes with a pot of hot tea. “Tea? Tea?” he calls. Mama buys two cups. The tea is sweet and milky. Nusrat feels like a big girl now.",
      "After one hour, the train stops at a small station. A cool wind comes in through the window. Nusrat sees her grandmother from far away. She waves with both hands.",
      "Grandmother hugs her for a long time. “My little Nusrat came by train all alone with her parents!” she laughs. Nusrat smiles. Trains are wonderful.",
    ],
    vocabulary: [
      {
        word: "station",
        meaning: { bn: "স্টেশন", en: "where trains stop", hi: "स्टेशन" },
        example: "We waited at the station for twenty minutes.",
      },
      {
        word: "ticket",
        meaning: { bn: "টিকিট", en: "the paper that lets you travel", hi: "टिकट" },
        example: "Papa buys three tickets at the counter.",
      },
      {
        word: "tightly",
        meaning: { bn: "শক্ত করে", en: "in a firm way", hi: "कसकर" },
        example: "The little girl holds her mother's hand tightly.",
      },
      {
        word: "pond",
        meaning: { bn: "পুকুর", en: "a small body of water", hi: "तालाब, पोखर" },
        example: "Ducks swim in the pond near our house.",
      },
      {
        word: "wave",
        meaning: { bn: "হাত নাড়ানো", en: "to move your hand to say hello", hi: "हाथ हिलाना" },
        example: "She waves with both hands when she sees her grandmother.",
      },
      {
        word: "hug",
        meaning: { bn: "জড়িয়ে ধরা", en: "to hold someone with love", hi: "गले लगाना" },
        example: "Grandmother hugs her for a long time.",
      },
    ],
    quiz: [
      {
        question: {
          bn: "আজ নুসরাতের জন্য কেন বড় দিন?",
          en: "Why is today a big day for Nusrat?",
          hi: "आज नुसरत के लिए क्यों बड़ा दिन है?",
        },
        options: [
          { bn: "সে নতুন স্কুলে যাচ্ছে", en: "She is going to a new school", hi: "वह नए स्कूल जा रही है" },
          { bn: "সে প্রথমবার ট্রেনে যাচ্ছে", en: "It is her first train ride", hi: "यह उसकी पहली ट्रेन यात्रा है" },
          { bn: "আজ তার জন্মদিন", en: "It is her birthday", hi: "आज उसका जन्मदिन है" },
          { bn: "বাবা নতুন কেনা গাড়ি চালাচ্ছেন", en: "Papa bought a new car", hi: "पापा नई गाड़ी लाए हैं" },
        ],
        answer: 1,
        explain: {
          bn: "“It is her first train ride” — এজন্যই দিনটা বড়।",
          en: "The story says: “It is her first train ride.”",
          hi: "कहानी कहती है: “It is her first train ride.”",
        },
      },
      {
        question: {
          bn: "জানালার বাইরে নুসরাত কী দেখে না?",
          en: "Which one does Nusrat NOT see from the window?",
          hi: "खिड़की से नुसरत को क्या नहीं दिखता?",
        },
        options: [
          { bn: "সবুজ ধানক্ষেত", en: "Green rice fields", hi: "हरे धान के खेत" },
          { bn: "তালগাছ", en: "Tall palm trees", hi: "लंबे ताड़ के पेड़" },
          { bn: "চলন্ত গাড়ির লাইন", en: "A line of moving cars", hi: "चलती गाड़ियों की कतार" },
          { bn: "ঘাসে গরু", en: "Cows eating grass", hi: "घास खाती गायें" },
        ],
        answer: 2,
        explain: {
          bn: "গল্পে ক্ষেত, বাড়ি, পুকুর, তালগাছ ও গরুর কথা আছে — গাড়ির লাইনের নয়।",
          en: "She sees fields, houses, ponds, palms and cows — no line of cars.",
          hi: "उसे खेत, घर, तालाब, ताड़ और गायें दिखती हैं — गाड़ियाँ नहीं।",
        },
      },
      {
        question: {
          bn: "চা-ওয়ালা কী বিক্রি করছিল?",
          en: "What does the man with the pot sell?",
          hi: "भगौना लेकर आया आदमी क्या बेच रहा था?",
        },
        options: [
          { bn: "ঠান্ডা পানি", en: "Cold water", hi: "ठंडा पानी" },
          { bn: "মিষ্টি দুধ-চা", en: "Sweet milky tea", hi: "मीठी दूध वाली चाय" },
          { bn: "ফলের জুস", en: "Fruit juice", hi: "फलों का जूस" },
          { bn: "কফি", en: "Coffee", hi: "कॉफ़ी" },
        ],
        answer: 1,
        explain: {
          bn: "“The tea is sweet and milky.”",
          en: "The story says: “The tea is sweet and milky.”",
          hi: "कहानी कहती है: “The tea is sweet and milky.”",
        },
      },
      {
        question: {
          bn: "ছোট স্টেশনে কে অপেক্ষা করছিল?",
          en: "Who is waiting at the small station?",
          hi: "छोटे स्टेशन पर कौन इंतज़ार कर रहा था?",
        },
        options: [
          { bn: "দাদু", en: "Grandfather", hi: "दादाजी" },
          { bn: "দাদি", en: "Grandmother", hi: "दादी" },
          { bn: "মাসি", en: "Aunt", hi: "मौसी" },
          { bn: "এক পুরনো বন্ধু", en: "An old friend", hi: "एक पुराना दोस्त" },
        ],
        answer: 1,
        explain: {
          bn: "“Nusrat sees her grandmother from far away. She waves with both hands.”",
          en: "Nusrat sees her grandmother and waves with both hands.",
          hi: "नुसरत को दादी दिखती हैं और वह दोनों हाथों से हाथ हिलाती है।",
        },
      },
    ],
  },
  {
    id: "first-day-at-work",
    level: "beginner",
    category: "work",
    minutes: 3,
    title: {
      bn: "সাব্বিরের প্রথম কর্মদিবস",
      en: "Sabbir's First Day at Work",
      hi: "सब्बीर का पहला कार्यदिवस",
    },
    summary: {
      bn: "সাব্বিরের অফিস সহকারীর নতুন চাকরির প্রথম দিন। সে প্রিন্টার চালানো শেখে, মেহমানদের চা দেয় আর ফাইলের রং মনে রাখে। বিকেলে বস বলেন “Good work” — আর ভয়টা কেটে যায়।",
      en: "Sabbir starts his first day as an office assistant. He learns the printer, serves tea to visitors and remembers his files. When the boss says “Good work”, his fear melts away.",
      hi: "सब्बीर ऑफिस असिस्टेंट के रूप में अपना पहला दिन शुरू करता है। वह प्रिंटर चलाना सीखता है, मेहमानों को चाय देता है। बॉस “Good work” कहते हैं और उसका डर दूर हो जाता है।",
    },
    paragraphs: [
      "Sabbir has a new job. He is an office assistant at a small company. Today is his first day, and his white shirt is clean and new.",
      "At nine o'clock, he walks into the office. His heart beats fast. “Good morning,” he says to everyone. “Good morning! You must be Sabbir,” a woman smiles. “I am Mita. Welcome.”",
      "Mita shows him his desk and the office kitchen. “First, learn the printer,” she says. The printer is big and old. It makes a funny noise, but Sabbir learns quickly.",
      "At eleven o'clock, two visitors come. “Please, offer them tea,” Mita says. Sabbir makes four cups of tea and carries them carefully, one by one. Nobody laughs when his hand shakes a little.",
      "In the afternoon, Mita teaches him about the files. “Blue for bills, green for letters,” she explains. Sabbir writes it down in his small notebook.",
      "At five o'clock, the office boss walks past his desk. “Good work today, Sabbir,” he says. Sabbir feels ten centimetres taller.",
      "On the bus home, Sabbir looks at his notebook and smiles. First days are not so scary when kind people help you.",
    ],
    vocabulary: [
      {
        word: "assistant",
        meaning: { bn: "সহকারী", en: "a helper at work", hi: "सहायक" },
        example: "He is an office assistant at a small company.",
      },
      {
        word: "printer",
        meaning: { bn: "প্রিন্টার", en: "a machine that puts text on paper", hi: "प्रिंटर" },
        example: "First, learn how to use the printer.",
      },
      {
        word: "offer",
        meaning: { bn: "প্রস্তাব দেওয়া / পরিবেশন করা", en: "to give something to someone", hi: "अर्पित करना, देना" },
        example: "Please offer the guests some tea.",
      },
      {
        word: "notebook",
        meaning: { bn: "নোটবুক", en: "a small book for writing notes", hi: "नोटबुक" },
        example: "He writes the rules in his notebook.",
      },
      {
        word: "boss",
        meaning: { bn: "বস / কর্তা", en: "the person you work for", hi: "मालिक, बॉस" },
        example: "The boss says “good work” at the end of the day.",
      },
      {
        word: "scary",
        meaning: { bn: "ভয়ের / আতঙ্কের", en: "making you afraid", hi: "डरावना, भयानक" },
        example: "First days are not so scary with kind people.",
      },
    ],
    quiz: [
      {
        question: {
          bn: "সাব্বিরের নতুন চাকরি কী?",
          en: "What is Sabbir's new job?",
          hi: "सब्बीर की नई नौकरी क्या है?",
        },
        options: [
          { bn: "চা-ওয়ালা", en: "Tea seller", hi: "चाय वाला" },
          { bn: "অফিস সহকারী", en: "Office assistant", hi: "ऑफिस असिस्टेंट" },
          { bn: "প্রিন্টার মেকানিক", en: "Printer mechanic", hi: "प्रिंटर मैकेनिक" },
          { bn: "বাস ড্রাইভার", en: "Bus driver", hi: "बस ड्राइवर" },
        ],
        answer: 1,
        explain: {
          bn: "“He is an office assistant at a small company.”",
          en: "The story says he is an office assistant.",
          hi: "कहानी कहती है कि वह ऑफिस असिस्टेंट है।",
        },
      },
      {
        question: {
          bn: "অফিসে তাকে প্রথমে কী শেখানো হয়?",
          en: "What does Mita teach him first?",
          hi: "मीता सबसे पहले उसे क्या सिखाती है?",
        },
        options: [
          { bn: "চা বানানো", en: "How to make tea", hi: "चाय बनाना" },
          { bn: "ফাইলের রং", en: "The colours of the files", hi: "फाइलों के रंग" },
          { bn: "প্রিন্টার চালানো", en: "How to use the printer", hi: "प्रिंटर चलाना" },
          { bn: "বসের সাথে কথা বলা", en: "How to talk to the boss", hi: "बॉस से बात करना" },
        ],
        answer: 2,
        explain: {
          bn: "মিতা বলে: “First, learn the printer.”",
          en: "Mita says: “First, learn the printer.”",
          hi: "मीता कहती है: “First, learn the printer.”",
        },
      },
      {
        question: {
          bn: "বিল ও চিঠির জন্য কোন রং?",
          en: "Which colours are for bills and letters?",
          hi: "बिल और चिट्ठियों के लिए कौन-से रंग हैं?",
        },
        options: [
          { bn: "লাল ও সবুজ", en: "Red and green", hi: "लाल और हरा" },
          { bn: "নীল ও সবুজ", en: "Blue and green", hi: "नीला और हरा" },
          { bn: "নীল ও হলুদ", en: "Blue and yellow", hi: "नीला और पीला" },
          { bn: "কালো ও সাদা", en: "Black and white", hi: "काला और सफ़ेद" },
        ],
        answer: 1,
        explain: {
          bn: "“Blue for bills, green for letters.”",
          en: "“Blue for bills, green for letters.”",
          hi: "“Blue for bills, green for letters.”",
        },
      },
      {
        question: {
          bn: "দিনের শেষে সাব্বির কেমন অনুভব করে?",
          en: "How does Sabbir feel at the end of the day?",
          hi: "दिन के अंत में सब्बीर कैसा महसूस करता है?",
        },
        options: [
          { bn: "রাগী ও ক্লান্ত", en: "Angry and tired", hi: "गुस्से में और थका हुआ" },
          { bn: "বিরক্ত", en: "Bored", hi: "ऊबा हुआ" },
          { bn: "গর্বিত ও খুশি", en: "Proud and happy", hi: "गर्व और खुशी से भरा" },
          { bn: "এখনও ভীত", en: "Still afraid", hi: "अब भी डरा हुआ" },
        ],
        answer: 2,
        explain: {
          bn: "বসের প্রশংসা শুনে সে মনে করে “ten centimetres taller” — অর্থাৎ গর্বিত।",
          en: "After the boss praises him, he feels ten centimetres taller — proud.",
          hi: "बॉस की तारीफ़ सुनकर वह “ten centimetres taller” महसूस करता है — यानी गर्वित।",
        },
      },
    ],
  },
  {
    id: "boishakh-fair",
    level: "beginner",
    category: "culture",
    minutes: 3,
    title: {
      bn: "বৈশাখী মেলার এক দিন",
      en: "A Day at the Boishakh Fair",
      hi: "बैशाखी मेले का एक दिन",
    },
    summary: {
      bn: "পহেলা বৈশাখের দিনে রিমা আর সামি চাচার সঙ্গে মেলায় যায়। মাটির পুতুল, বাউল গান, নাগরদোলা আর মিষ্টি — নতুন বছরের শুরুটা হয় আনন্দে।",
      en: "On the first day of the Bangla year, Rima and Sami visit the village fair with their uncle. Clay dolls, Baul songs, a big swing and sweets — the new year begins with joy.",
      hi: "बांग्ला नववर्ष के पहले दिन रिमा और सामी अपने चाचा के साथ मेले जाते हैं। मिट्टी की गुड़िया, बाउल गीत, झूला और मिठाइयाँ — नया साल खुशी से शुरू होता है।",
    },
    paragraphs: [
      "It is the first day of the Bangla year. Rima wears a new red-and-white dress. Her little brother Sami wears a white panjabi. Today they are going to the Boishakh fair with Uncle.",
      "The fair is under a big banyan tree. There are colourful stalls everywhere. One stall sells clay dolls. Another sells paper birds and small wooden horses.",
      "Sami wants a wooden horse, but Uncle says, “First, lunch!” They sit on mats and eat panta rice with fried fish and green chillies. A singer near the tree sings old Baul songs. His voice is strong and sweet.",
      "After lunch, the children ride the nagordola. It is a big round swing that turns in the sky. Sami shouts with joy. Rima holds the rope and looks at the green fields below.",
      "Then they buy sweets. Rima chooses sweet yogurt in a small clay pot. Sami picks sweet rasgullas. “Happy New Year!” the seller says. “Happy New Year!” they answer.",
      "In the evening, they walk home slowly. Sami sleeps on Uncle's shoulder, holding his wooden horse. Rima thinks the new year started in the best way.",
    ],
    vocabulary: [
      {
        word: "fair",
        meaning: { bn: "মেলা", en: "a big outdoor market with fun", hi: "मेला" },
        example: "The village fair is under the big banyan tree.",
      },
      {
        word: "stall",
        meaning: { bn: "দোকান / স্টল", en: "a small open shop", hi: "दुकान, स्टॉल" },
        example: "One stall sells clay dolls.",
      },
      {
        word: "clay",
        meaning: { bn: "মাটি", en: "soft earth used for making things", hi: "मिट्टी" },
        example: "She buys sweet yogurt in a small clay pot.",
      },
      {
        word: "swing",
        meaning: { bn: "দুলনি / নাগরদোলা", en: "a seat that moves in the air", hi: "झूला" },
        example: "The children ride the big round swing.",
      },
      {
        word: "rope",
        meaning: { bn: "দড়ি", en: "thick string", hi: "रस्सी" },
        example: "Rima holds the rope tightly.",
      },
      {
        word: "yogurt",
        meaning: { bn: "দই", en: "a food made from milk", hi: "दही" },
        example: "Rima chooses sweet yogurt in a clay pot.",
      },
    ],
    quiz: [
      {
        question: {
          bn: "মেলাটা কোথায় বসে?",
          en: "Where is the fair?",
          hi: "मेला कहाँ लगता है?",
        },
        options: [
          { bn: "স্কুল মাঠে", en: "On the school field", hi: "स्कूल के मैदान पर" },
          { bn: "নদীর ধারে", en: "Beside the river", hi: "नदी के किनारे" },
          { bn: "একটা বড় বটগাছের নিচে", en: "Under a big banyan tree", hi: "एक बड़े बरगद के पेड़ के नीचे" },
          { bn: "শহরের বাজারে", en: "In the city market", hi: "शहर के बाज़ार में" },
        ],
        answer: 2,
        explain: {
          bn: "“The fair is under a big banyan tree.”",
          en: "The story says the fair is under a big banyan tree.",
          hi: "कहानी कहती है कि मेला बड़े बरगद के पेड़ के नीचे है।",
        },
      },
      {
        question: {
          bn: "দুপুরের খাবারে কী ছিল?",
          en: "What do they eat for lunch?",
          hi: "वे दोपहर के भोजन में क्या खाते हैं?",
        },
        options: [
          { bn: "পান্তা ভাত ও ভাজা মাছ", en: "Panta rice and fried fish", hi: "पकी हुई चावल और तली मछली" },
          { bn: "মুরগির রোস্ট", en: "Chicken roast", hi: "चिकन रोस्ट" },
          { bn: "রসগোল্লা ও দই", en: "Rasgullas and yogurt", hi: "रसगुल्ले और दही" },
          { bn: "শুধু ফল", en: "Only fruit", hi: "सिर्फ़ फल" },
        ],
        answer: 0,
        explain: {
          bn: "তারা মাদুরে বসে পান্তা ভাত, ভাজা মাছ ও কাঁচা মরিচ খায়।",
          en: "They sit on mats and eat panta rice with fried fish and green chillies.",
          hi: "वे चटाई पर बैठकर पके चावल, तली मछली और हरी मिर्च खाते हैं।",
        },
      },
      {
        question: {
          bn: "নাগরদোলা কী?",
          en: "What is the nagordola?",
          hi: "नागरदोला क्या है?",
        },
        options: [
          { bn: "একধরনের গান", en: "A kind of song", hi: "एक तरह का गीत" },
          { bn: "আকাশে ঘোরা বড় গোল দুলনি", en: "A big round swing in the sky", hi: "आकाश में घूमने वाला बड़ा गोल झूला" },
          { bn: "মাটির পুতুল", en: "A clay doll", hi: "मिट्टी की गुड़िया" },
          { bn: "মিষ্টির দোকান", en: "A sweets shop", hi: "मिठाई की दुकान" },
        ],
        answer: 1,
        explain: {
          bn: "গল্পে বলা হয়েছে — “a big round swing that turns in the sky.”",
          en: "The story explains it as “a big round swing that turns in the sky.”",
          hi: "कहानी में यह “a big round swing that turns in the sky” कहा गया है।",
        },
      },
      {
        question: {
          bn: "সামি কী ধরে ঘুমিয়ে পড়ে?",
          en: "What is Sami holding when he falls asleep?",
          hi: "सामी सोते समय क्या पकड़े रहता है?",
        },
        options: [
          { bn: "কাগজের পাখি", en: "A paper bird", hi: "कागज़ का पक्षी" },
          { bn: "মাটির পুতুল", en: "A clay doll", hi: "मिट्टी की गुड़िया" },
          { bn: "মিষ্টির পাত্র", en: "A pot of sweets", hi: "मिठाई का बर्तन" },
          { bn: "কাঠের ঘোড়া", en: "A wooden horse", hi: "लकड़ी का घोड़ा" },
        ],
        answer: 3,
        explain: {
          bn: "সে চাচার কাঁধে ঘুমিয়ে পড়ে, হাতে কাঠের ঘোড়া।",
          en: "He sleeps on Uncle's shoulder, holding his wooden horse.",
          hi: "वह चाचा के कंधे पर सो जाता है, हाथ में लकड़ी का घोड़ा।",
        },
      },
    ],
  },
  {
    id: "ants-in-the-garden",
    level: "beginner",
    category: "science",
    minutes: 3,
    title: {
      bn: "আমাদের বাগানের পিঁপড়ে",
      en: "The Ants in Our Garden",
      hi: "हमारे बगीचे की चींटियाँ",
    },
    summary: {
      bn: "তানিয়া বাগানে বসে পিঁপড়ে দেখে — একটা পিঁপড়ে বিস্কুট খুঁজে পেয়ে চলে যায়, তারপর ফিরে আসে পঞ্চাশ পিঁপড়ের লম্বা সারি! বৃষ্টি আসার আগেই তারা সব টুকরো বাড়ি পৌঁছে দেয়।",
      en: "Tania watches ants in the garden: one ant finds her biscuit, walks away — and returns with a line of fifty ants! Before the rain comes, they carry every piece home.",
      hi: "तानिया बगीचे में चींटियों को देखती है — एक चींटी उसका बिस्कुट ढूँढकर चली जाती है, और पचास चींटियों की कतार लेकर लौटती है! बारिश से पहले वे सब टुकड़े घर पहुँचा देती हैं।",
    },
    paragraphs: [
      "Tania sits in the garden with a piece of sweet biscuit. She sees a tiny ant walking near her foot. The ant stops. Its long feelers move left and right, left and right, like small fingers touching the air.",
      "Soon the ant finds the biscuit. It walks around the sweet piece two times. Then, strangely, it walks away. Tania is confused. “Don't you like biscuits?” she asks.",
      "Ten minutes later, Tania sees something amazing. A long line of ants is coming! One, two, ten, fifty ants! They walk like little soldiers in a straight line.",
      "The ants climb the biscuit and carry small pieces. Some ants pull. Some ants push. Together they carry pieces much bigger than their bodies. Tania watches with her mouth open.",
      "Big black clouds cover the sun. Rain is coming! The ants work faster and faster. Tania counts to one hundred, and the biscuit is gone. The line of ants disappears under a stone.",
      "Tania learned something that day. Ants are small, but they are strong, and they always help each other. Maybe we can learn from the ants too.",
    ],
    vocabulary: [
      {
        word: "tiny",
        meaning: { bn: "ক্ষুদ্র", en: "very small", hi: "बहुत छोटा" },
        example: "A tiny ant walks near her foot.",
      },
      {
        word: "feelers",
        meaning: { bn: "স্পর্শক / অ্যান্টেনা", en: "the thin “fingers” on an ant's head", hi: "स्पर्शक, एंटीना" },
        example: "The ant's long feelers move left and right.",
      },
      {
        word: "confused",
        meaning: { bn: "বিভ্রান্ত", en: "not able to understand", hi: "उलझा हुआ" },
        example: "Tania is confused when the ant walks away.",
      },
      {
        word: "amazing",
        meaning: { bn: "অবিশ্বাস্য / চমৎকার", en: "very surprising and good", hi: "अद्भुत" },
        example: "She sees something amazing — a line of fifty ants.",
      },
      {
        word: "straight",
        meaning: { bn: "সোজা", en: "not bending or curving", hi: "सीधा" },
        example: "The ants walk in a straight line.",
      },
      {
        word: "disappear",
        meaning: { bn: "অদৃশ্য হয়ে যাওয়া", en: "to go away so you cannot see it", hi: "गायब हो जाना" },
        example: "The line of ants disappears under a stone.",
      },
    ],
    quiz: [
      {
        question: {
          bn: "তানিয়া বাগানে কী নিয়ে বসেছিল?",
          en: "What does Tania have in the garden?",
          hi: "तानिया बगीचे में क्या लेकर बैठी थी?",
        },
        options: [
          { bn: "এক টুকরো বিস্কুট", en: "A piece of biscuit", hi: "बिस्कुट का एक टुकड़ा" },
          { bn: "এক টুকরো কেক", en: "A piece of cake", hi: "केक का एक टुकड़ा" },
          { bn: "এক কাপ চা", en: "A cup of tea", hi: "चाय का एक कप" },
          { bn: "কয়েকটা আম", en: "Some mangoes", hi: "कुछ आम" },
        ],
        answer: 0,
        explain: {
          bn: "সে মিষ্টি বিস্কুটের এক টুকরো নিয়ে বাগানে বসে।",
          en: "She sits in the garden with a piece of sweet biscuit.",
          hi: "वह मीठे बिस्कुट का एक टुकड़ा लेकर बगीचे में बैठती है।",
        },
      },
      {
        question: {
          bn: "প্রথম পিঁপড়েটা বিস্কুটের চারপাশে ঘুরে কী করল?",
          en: "After walking around the biscuit, what does the first ant do?",
          hi: "बिस्कुट के चारों ओर घूमकर पहली चींटी ने क्या किया?",
        },
        options: [
          { bn: "বিস্কুট খেয়ে ফেলল", en: "It ate the biscuit", hi: "वह बिस्कुट खा गई" },
          { bn: "দূরে চলে গেল", en: "It walked away", hi: "वह दूर चली गई" },
          { bn: "তানিয়াকে কামড় দিল", en: "It bit Tania", hi: "वह तानिया को काटने लगी" },
          { bn: "পাথরের নিচে লুকাল", en: "It hid under a stone", hi: "वह पत्थर के नीचे छिप गई" },
        ],
        answer: 1,
        explain: {
          bn: "বিস্কুট ঘুরে দেখে সে অদ্ভুতভাবে দূরে চলে যায় — সঙ্গী ডেকে আনতে।",
          en: "It walks around the biscuit and then, strangely, walks away.",
          hi: "वह बिस्कुट के चारों ओर घूमकर अजीब तरह से दूर चली जाती है।",
        },
      },
      {
        question: {
          bn: "বৃষ্টি আসছে বুঝে পিঁপড়েরা কী করল?",
          en: "What do the ants do when rain is coming?",
          hi: "बारिश आने पर चींटियों ने क्या किया?",
        },
        options: [
          { bn: "সব ছেড়ে পালিয়ে গেল", en: "They ran away and left everything", hi: "वे सब छोड़कर भाग गईं" },
          { bn: "আরও দ্রুত কাজ করল", en: "They worked faster", hi: "वे और तेज़ काम करने लगीं" },
          { bn: "ঘুমিয়ে পড়ল", en: "They fell asleep", hi: "वे सो गईं" },
          { bn: "তানিয়ার কাছে এল", en: "They came to Tania", hi: "वे तानिया के पास आ गईं" },
        ],
        answer: 1,
        explain: {
          bn: "মেঘ ঢেকে এলে পিঁপড়েরা আরও দ্রুত কাজ করে সব টুকরো বাড়ি নিয়ে যায়।",
          en: "When clouds cover the sun, the ants work faster and carry every piece home.",
          hi: "बादल छा जाने पर चींटियाँ और तेज़ काम करके सब टुकड़े घर ले जाती हैं।",
        },
      },
      {
        question: {
          bn: "তানিয়া সেদিন কী শিখল?",
          en: "What does Tania learn that day?",
          hi: "तानिया उस दिन क्या सीखती है?",
        },
        options: [
          { bn: "পিঁপড়ে বিপজ্জনক", en: "Ants are dangerous", hi: "चींटियाँ ख़तरनाक होती हैं" },
          { bn: "বৃষ্টিতে বাইরে বসা উচিত নয়", en: "Never sit outside in the rain", hi: "बारिश में बाहर नहीं बैठना चाहिए" },
          { bn: "একসাথে কাজ করলে ছোটরাও বড় হয়", en: "Small workers are strong when they help each other", hi: "मिलकर काम करने से छोटे भी बड़े बनते हैं" },
          { bn: "বিস্কুট বাইরে খাওয়া উচিত নয়", en: "Never eat biscuits outside", hi: "बाहर बिस्कुट नहीं खाना चाहिए" },
        ],
        answer: 2,
        explain: {
          bn: "পিঁপড়েরা ছোট কিন্তু শক্তিশালী এবং সবসময় একে অপরকে সাহায্য করে।",
          en: "Ants are small but strong, and they always help each other.",
          hi: "चींटियाँ छोटी हैं पर मज़बूत, और वे हमेशा एक-दूसरे की मदद करती हैं।",
        },
      },
    ],
  },
  {
    id: "mina-learns-to-swim",
    level: "beginner",
    category: "inspire",
    minutes: 3,
    title: {
      bn: "মিনা সাঁতার শেখে",
      en: "Mina Learns to Swim",
      hi: "मीना स्विमिंग सीखती है",
    },
    summary: {
      bn: "মিনা নদীর ধারে থাকে কিন্তু পানির ভয়ে সাঁতার জানে না। চাচা ধীরে ধীরে শেখায় — প্রথমে মুখ, তারপর ভাসা, তারপর এক মিটার! গ্রীষ্ম শেষে মিনা নদী পার হয়।",
      en: "Mina lives by a river but is afraid of the water. Her uncle teaches her slowly — first her face, then floating, then one whole metre. By the end of summer, Mina swims across.",
      hi: "मीना नदी किनारे रहती है पर पानी से डरती है। उसके चाचा धीरे-धीरे सिखाते हैं — पहले चेहरा, फिर तैरना, फिर पूरा एक मीटर। गर्मी के अंत तक मीना नदी पार कर जाती है।",
    },
    paragraphs: [
      "Mina is nine years old. She lives near a river, but she cannot swim. When other children jump into the water, Mina sits on the big stone and watches. Water looks deep and scary.",
      "One day her uncle says, “Mina, water is your friend. But you must learn slowly. I will teach you.”",
      "The next morning, they go to the shallow water. Mina's feet touch the soft sand. Her uncle holds her hands. “Breathe in, breathe out,” he says softly. “Feel the water. Don't fight it.”",
      "On the first day, Mina only puts her face in the water. On the third day, she floats like a dry leaf. On the tenth day, she kicks her legs and moves one metre. One whole metre!",
      "Some days are hard. One morning the water is cold, and Mina wants to go home. “Good swimmers rest, but they don't stop,” her uncle smiles. So she swims a little more.",
      "At the end of the summer, the children have a small race. Mina is not the fastest, but she swims all the way to the other side. Her mother claps loudly from the stone.",
      "Now Mina jumps into the river too. But she remembers her first day. “If you want to learn something,” she says, “start small, and don't stop.”",
    ],
    vocabulary: [
      {
        word: "deep",
        meaning: { bn: "গভীর", en: "going far down", hi: "गहरा" },
        example: "The water looks deep and scary to her.",
      },
      {
        word: "shallow",
        meaning: { bn: "অগভীর", en: "not deep", hi: "उथला" },
        example: "They practise in the shallow water first.",
      },
      {
        word: "breathe",
        meaning: { bn: "শ্বাস নেওয়া", en: "to take air in and out", hi: "साँस लेना" },
        example: "Breathe in, breathe out, and feel the water.",
      },
      {
        word: "float",
        meaning: { bn: "ভাসা", en: "to stay on top of water", hi: "तैरना, तैरते रहना" },
        example: "On the third day, she floats like a dry leaf.",
      },
      {
        word: "kick",
        meaning: { bn: "পা চালানো", en: "to hit with your foot", hi: "लात मारना" },
        example: "She kicks her legs and moves one metre.",
      },
      {
        word: "race",
        meaning: { bn: "প্রতিযোগিতা / দৌড়", en: "a game to see who is fastest", hi: "प्रतियोगिता, दौड़" },
        example: "At the end of summer, the children have a small race.",
      },
    ],
    quiz: [
      {
        question: {
          bn: "মিনা কেন পাথরের উপর বসে থাকে?",
          en: "Why does Mina sit on the stone?",
          hi: "मीना पत्थर पर क्यों बैठी रहती है?",
        },
        options: [
          { bn: "সে ক্লান্ত", en: "Because she is tired", hi: "क्योंकि वह थकी हुई है" },
          { bn: "সে সাঁতার জানে না", en: "Because she cannot swim", hi: "क्योंकि उसे तैरना नहीं आता" },
          { bn: "মা নিষেধ করেছেন", en: "Because her mother said no", hi: "क्योंकि उसकी माँ ने मना किया" },
          { bn: "পানি ঠান্ডা", en: "Because the water is cold", hi: "क्योंकि पानी ठंडा है" },
        ],
        answer: 1,
        explain: {
          bn: "“She lives near a river, but she cannot swim.”",
          en: "She cannot swim, so she watches the other children.",
          hi: "उसे तैरना नहीं आता, इसलिए वह दूसरे बच्चों को देखती है।",
        },
      },
      {
        question: {
          bn: "প্রথম দিনে মিনা কী করতে পারল?",
          en: "What does Mina do on the first day?",
          hi: "पहले दिन मीना ने क्या किया?",
        },
        options: [
          { bn: "নদী পার হলো", en: "She crossed the river", hi: "वह नदी पार कर गई" },
          { bn: "পানিতে ভাসল", en: "She floated", hi: "वह तैर गई" },
          { bn: "মুখ পানিতে ডোবাল", en: "She put her face in the water", hi: "वह पानी में चेहरा डुबोती है" },
          { bn: "এক মিটার এগোল", en: "She moved one metre", hi: "वह एक मीटर आगे बढ़ी" },
        ],
        answer: 2,
        explain: {
          bn: "প্রথম দিনে সে শুধু মুখ পানিতে ডোবায় — ছোট শুরু।",
          en: "On the first day, she only puts her face in the water.",
          hi: "पहले दिन वह सिर्फ़ पानी में चेहरा डुबोती है।",
        },
      },
      {
        question: {
          bn: "ঠান্ডা সকালে চাচা কী বলেন?",
          en: "What does her uncle say on the cold morning?",
          hi: "ठंडी सुबह उसके चाचा क्या कहते हैं?",
        },
        options: [
          { bn: "“বাড়ি ফিরে যাও”", en: "“Go home.”", hi: "“घर जाओ।”" },
          { bn: "“ভালো সাঁতারু বিশ্রাম নেয়, কিন্তু থামে না”", en: "“Good swimmers rest, but they don't stop.”", hi: "“अच्छे तैराक आराम करते हैं, पर रुकते नहीं।”" },
          { bn: "“আজ আর প্র্যাকটিস নেই”", en: "“No practice today.”", hi: "“आज अभ्यास नहीं।”" },
          { bn: "“আরেকটা মিনার দরকার”", en: "“You need one more minute.”", hi: "“एक मिनट और चाहिए।”" },
        ],
        answer: 1,
        explain: {
          bn: "চাচা হাসিমুখে বলেন — ভালো সাঁতারু বিশ্রাম নেয়, কিন্তু থামে না।",
          en: "Her uncle smiles: good swimmers rest, but they don't stop.",
          hi: "चाचा मुस्कुराकर कहते हैं — अच्छे तैराक आराम करते हैं, पर रुकते नहीं।",
        },
      },
      {
        question: {
          bn: "মিনার শেষ কথাটা কী?",
          en: "What is Mina's final message?",
          hi: "मीना का अंतिम संदेश क्या है?",
        },
        options: [
          { bn: "শেখা সহজ নয়", en: "Learning is not easy", hi: "सीखना आसान नहीं है" },
          { bn: "পানি বিপজ্জনক", en: "Water is dangerous", hi: "पानी ख़तरनाक है" },
          { bn: "সাঁতার শুধু বড়দের জন্য", en: "Swimming is only for older people", hi: "तैराकी सिर्फ़ बड़ों के लिए है" },
          { bn: "ছোট করে শুরু করো, থেমো না", en: "Start small, and don't stop", hi: "छोटी शुरुआत करो, रुको मत" },
        ],
        answer: 3,
        explain: {
          bn: "“If you want to learn something, start small, and don't stop.”",
          en: "She says: start small, and don't stop.",
          hi: "वह कहती है: छोटी शुरुआत करो, और रुको मत।",
        },
      },
    ],
  },
];

// ------------------------------------------------------------ INTERMEDIATE

const INTERMEDIATE: LibraryStory[] = [
  {
    id: "the-new-flatmate",
    level: "intermediate",
    category: "daily",
    minutes: 4,
    title: {
      bn: "নতুন ফ্ল্যাটমেট",
      en: "The New Flatmate",
      hi: "नया फ्लैटमेट",
    },
    summary: {
      bn: "আরিফ ঢাকায় ইমরানের সঙ্গে ফ্ল্যাট শেয়ার করে — একজন নিশাচর, একজন ভোরের পাখি। খাবার পাত্র নিয়ে ঝামেলার পর দুজনে চায়ের কাপ হাতে বসে আসল কথা বলে এবং ফ্রিজে লাগানো “নিয়মের চুক্তি” বানায়।",
      en: "Arif shares a Dhaka flat with Imran — one a night owl, the other an early bird. After a row over dirty dishes, they talk over two cups of tea and draw up a contract that ends up on the fridge.",
      hi: "आरिफ ढाका में इमरान के साथ फ्लैट शेयर करता है — एक रात का उल्लू, दूसरा भोर का पंछी। बर्तनों को लेकर झगड़े के बाद दोनों चाय के साथ दिल खोलकर बात करते हैं और फ्रिज पर चिपकने वाला “नियमों का अनुबंध” बनाते हैं।",
    },
    paragraphs: [
      "Arif needed a cheaper place to live, so he moved into a two-room flat in Dhaka with a flatmate named Imran. On paper, they were a perfect match: both students, both quiet, both non-smokers. Reality was a little different.",
      "Arif studied at night. His best ideas came after midnight, when the city finally went quiet. Imran, on the other hand, woke at five for his morning run and slept by ten.",
      "In the first week, the sound of Arif's keyboard kept Imran awake. In the second week, Imran's five o'clock alarm woke Arif three times. Neither of them said anything, but the silence in the kitchen grew thicker every morning.",
      "Then came the dishes. One evening Arif found every pot dirty, and something inside him snapped. He wrote an angry message, deleted it, wrote another one, deleted that too. Finally, he put the kettle on and made two cups of tea.",
      "“Bhai,” he said, handing one cup to Imran, “I think we need to talk. Like humans, not like roommates.”",
      "They talked for two hours. Imran admitted that the keyboard noise felt like rain on a tin roof — impossible to sleep through. Arif admitted that he never answered the alarm for his own good morning calls. They laughed at themselves, and then they took a blank page and made rules.",
      "Headphones after eleven. Alarm on the balcony side. Dishes washed before bed, no exceptions. They signed the page like a real contract and stuck it on the fridge with a magnet.",
      "Six months later, the fridge paper is old and full of tea stains, but nobody has taken it down. Arif still works at night, and Imran still runs at dawn. But now they drink the evening tea together — one cup for the night owl, one for the early bird.",
    ],
    vocabulary: [
      {
        word: "flatmate",
        meaning: { bn: "ফ্ল্যাট শেয়ারকারী", en: "a person you share a flat with", hi: "फ्लैट साझेदार" },
        example: "He moved in with a flatmate named Imran.",
      },
      {
        word: "on the other hand",
        meaning: { bn: "অন্যদিকে", en: "used to show a different side", hi: "दूसरी ओर" },
        example: "Imran, on the other hand, woke at five.",
      },
      {
        word: "snap",
        meaning: { bn: "হঠাৎ রেগে যাওয়া", en: "to suddenly lose control", hi: "अचानक आवेश में आना" },
        example: "Something inside him snapped when he saw the dirty pots.",
      },
      {
        word: "admit",
        meaning: { bn: "স্বীকার করা", en: "to say something is true", hi: "स्वीकार करना" },
        example: "Imran admitted that the keyboard noise kept him awake.",
      },
      {
        word: "exception",
        meaning: { bn: "ব্যতিক্রম", en: "something not included in a rule", hi: "अपवाद" },
        example: "Dishes washed before bed — no exceptions.",
      },
      {
        word: "night owl",
        meaning: { bn: "নিশাচর মানুষ", en: "a person who stays up late", hi: "रात में जागने वाला" },
        example: "One cup for the night owl, one for the early bird.",
      },
    ],
    quiz: [
      {
        question: {
          bn: "আরিফ কেন নতুন ফ্ল্যাটে উঠেছিল?",
          en: "Why did Arif move into the flat?",
          hi: "आरिफ फ्लैट में क्यों शिफ़्ट हुआ?",
        },
        options: [
          { bn: "ঢাবির হলে সিট পায়নি", en: "He didn't get a hall seat", hi: "उसे हॉस्टल की सीट नहीं मिली" },
          { bn: "খরচ কমাতে চেয়েছিল", en: "He wanted to spend less on rent", hi: "वह किराया बचाना चाहता था" },
          { bn: "পুরনো ফ্ল্যাটমেট ঝগড়াটিয়া ছিল", en: "His old flatmate was quarrelsome", hi: "पुराना फ्लैटमेट झगड़ालू था" },
          { bn: "ক্যাম্পাসের খুব কাছে থাকতে চেয়েছিল", en: "He wanted to live near campus", hi: "वह कैंपस के पास रहना चाहता था" },
        ],
        answer: 1,
        explain: {
          bn: "গল্পের শুরুতেই বলা হয়েছে — তার সস্তায় থাকার জায়গা দরকার ছিল।",
          en: "The first line says he needed a cheaper place to live.",
          hi: "पहली पंक्ति कहती है कि उसे रहने के लिए सस्ती जगह चाहिए थी।",
        },
      },
      {
        question: {
          bn: "রাগ চেপে গিয়ে আরিফ কী করল?",
          en: "What did Arif do instead of sending an angry message?",
          hi: "गुस्से का मैसेज भेजने की बजाय आरिफ ने क्या किया?",
        },
        options: [
          { bn: "বাসা ছেড়ে চলে গেল", en: "He left the flat", hi: "वह फ्लैट छोड़ दिया" },
          { bn: "ইমরানের কিবোর্ড সরিয়ে ফেলল", en: "He hid Imran's keyboard", hi: "उसने इमरान का कीबोर्ड छिपा दिया" },
          { bn: "দুই কাপ চা বানিয়ে কথা বলল", en: "He made two cups of tea and talked", hi: "दो कप चाय बनाकर बात की" },
          { bn: "মালকড়ের সাথে অভিযোগ করল", en: "He complained to the landlord", hi: "उसने मकान मालिक से शिकायत की" },
        ],
        answer: 2,
        explain: {
          bn: "রাগী মেসেজ দুবার লিখে মুছে ফেলে সে কেতলিতে চা বানায় এবং আলাপ শুরু করে।",
          en: "After deleting two angry drafts, he made tea and started a real conversation.",
          hi: "दो गुस्से वाले मैसेज मिटाने के बाद उसने चाय बनाई और असली बातचीत शुरू की।",
        },
      },
      {
        question: {
          bn: "ফ্রিজে লাগানো “চুক্তিতে” কোন নিয়ম ছিল না?",
          en: "Which rule was NOT on the fridge contract?",
          hi: "फ्रिज के “अनुबंध” में कौन-सा नियम नहीं था?",
        },
        options: [
          { bn: "এগারোটার পর হেডফোন", en: "Headphones after eleven", hi: "ग्यारह बजे के बाद हेडफ़ोन" },
          { bn: "বারান্দার দিকে অ্যালার্ম", en: "Alarm on the balcony side", hi: "बालकनी वाली ओर अलार्म" },
          { bn: "ঘুমানোর আগে বাসন ধোয়া", en: "Dishes washed before bed", hi: "सोने से पहले बर्तन धोना" },
          { bn: "সপ্তাহে একদিন রান্না ঘর বন্ধ", en: "Kitchen closed one day a week", hi: "हफ़्ते में एक दिन रसोई बंद" },
        ],
        answer: 3,
        explain: {
          bn: "তিনটি নিয়মই গল্পে আছে; রান্নাঘর বন্ধের নিয়ম কোথাও নেই।",
          en: "The first three rules appear in the story; a closed kitchen never does.",
          hi: "पहले तीन नियम कहानी में हैं; रसोई बंद करने का नियम कहीं नहीं है।",
        },
      },
      {
        question: {
          bn: "গল্পের মূল বার্তা কোনটি?",
          en: "What is the main message of the story?",
          hi: "कहानी का मुख्य संदेश क्या है?",
        },
        options: [
          { bn: "ফ্ল্যাটমেট সবসময় ঝামেলা", en: "Flatmates always cause trouble", hi: "फ्लैटमेट हमेशा परेशानी लाते हैं" },
          { bn: "একা থাকাই ভালো", en: "Living alone is better", hi: "अकेले रहना बेहतर है" },
          { bn: "সমস্যা মানুষের নয়, আলাপের অভাবের", en: "Problems come from silence, not from people", hi: "समस्या लोगों से नहीं, चुप्पी से आती है" },
          { bn: "রাত জাগা উচিত নয়", en: "Nobody should stay up late", hi: "किसी को देर रात तक जागना नहीं चाहिए" },
        ],
        answer: 2,
        explain: {
          bn: "চুপচাপ ভোগার বদলে মানুষের মতো কথা বললেই সমাধান বেরোয়।",
          en: "Talking “like humans” — instead of staying silent — is what solves it.",
          hi: "चुप रहने के बजाय “इंसानों की तरह” बात करने से ही समाधान निकलता है।",
        },
      },
    ],
  },
  {
    id: "lost-in-the-new-city",
    level: "intermediate",
    category: "travel",
    minutes: 4,
    title: {
      bn: "নতুন শহরে পথ হারানো",
      en: "Lost in a New City",
      hi: "नए शहर में रास्ता भटकना",
    },
    summary: {
      bn: "দিল্লিতে সম্মেলনে যাওয়া প্রিয়ার ফোন ঠিক সময়েই বন্ধ হয়ে যায়। ভয় কাটিয়ে চা-দোকানে রাস্তা জিজ্ঞেস করতে গিয়ে সে বুঝল — মানুষই সবচেয়ে ভালো ম্যাপ, শুধু জিজ্ঞেস করতে হয়।",
      en: "Priya's phone dies at the worst moment in Delhi. Choosing courage over panic, she asks a tea stall for directions and learns that people are also maps — you only have to ask.",
      hi: "दिल्ली में कॉन्फ़्रेंस के दिन प्रिया का फ़ोन ठीक समय पर बंद हो जाता है। डर पर जीत दर्ज करते हुए वह चाय की दुकान से रास्ता पूछती है और सीखती है कि लोग भी नक़्शे होते हैं — बस पूछना पड़ता है।",
    },
    paragraphs: [
      "Priya had travelled to Delhi for a two-day conference, and she had a plan: leave the hotel ninety minutes early, follow the map, and arrive calm. The plan worked perfectly for exactly ten minutes.",
      "Then her phone died. Not low battery — completely dead, a black screen. She stood at a crossing where six roads met, holding a phone that now cost more as a paperweight than as a map.",
      "Her first instinct was panic. In her experience, big cities were places where nobody had time for a stranger. She thought about going back to the hotel and missing the opening speech.",
      "Instead, she walked to a small tea stall and asked the man behind the counter, “Excuse me, how do I get to the Convention Centre?” He looked at her the way teachers look at students who have asked a good question.",
      "“Convention Centre? Straight road, then left at the gurudwara. Twenty minutes walking. But it's hot — take water.” He refused her money for the water he handed her.",
      "An auto-rickshaw driver waiting nearby overheard and joined in. “Walking? In this sun? Madam, I'll drop you for thirty rupees.” On the way, he pointed out a hundred-year-old school, a market famous for street food, and his own nephew's shop.",
      "She arrived forty minutes early after all — earlier than the plan would have allowed. She found the registration desk, got her badge, and sat with her tea, thinking about the morning.",
      "Her phone, charged during the session, showed her exactly where she had been. The map called it “a route”. Priya called it a lesson: a dead phone is not the end of the journey. People, it turns out, are also maps — you only have to ask.",
    ],
    vocabulary: [
      {
        word: "conference",
        meaning: { bn: "সম্মেলন", en: "a big formal meeting", hi: "सम्मेलन" },
        example: "She travelled to Delhi for a two-day conference.",
      },
      {
        word: "instinct",
        meaning: { bn: "স্বতঃস্ফূর্ত প্রবণতা", en: "the first feeling that makes you act", hi: "सहज प्रवृत्ति" },
        example: "Her first instinct was panic.",
      },
      {
        word: "stranger",
        meaning: { bn: "অপরিচিত মানুষ", en: "a person you don't know", hi: "अनजान व्यक्ति" },
        example: "She believed nobody had time for a stranger.",
      },
      {
        word: "overheard",
        meaning: { bn: "কানে পড়ে শোনা", en: "heard by chance", hi: "संयोग से सुन लिया" },
        example: "The rickshaw driver overheard and joined in.",
      },
      {
        word: "registration",
        meaning: { bn: "নিবন্ধন / রেজিস্ট্রেশন", en: "signing in for an event", hi: "पंजीकरण" },
        example: "She found the registration desk and got her badge.",
      },
      {
        word: "route",
        meaning: { bn: "পথ / রুট", en: "the way from one place to another", hi: "रास्ता, मार्ग" },
        example: "The map called it “a route”.",
      },
    ],
    quiz: [
      {
        question: {
          bn: "প্রথম সমস্যাটা কী ছিল?",
          en: "What was the first thing to go wrong?",
          hi: "पहली समस्या क्या थी?",
        },
        options: [
          { bn: "ট্যাক্সি পাওয়া যায়নি", en: "She couldn't find a taxi", hi: "उसे टैक्सी नहीं मिली" },
          { bn: "ফোন সম্পূর্ণ বন্ধ হয়ে গেল", en: "Her phone died completely", hi: "उसका फ़ोन पूरी तरह बंद हो गया" },
          { bn: "সে হোটেলের চাবি হারিয়েছিল", en: "She lost her hotel key", hi: "वह होटल की चाबी खो देती है" },
          { bn: "সম্মেলন বাতিল হয়ে গিয়েছিল", en: "The conference was cancelled", hi: "सम्मेलन रद्द हो गया था" },
        ],
        answer: 1,
        explain: {
          bn: "দশ মিনিটের মাথায় ফোনটা সম্পূর্ণ বন্ধ — কালো স্ক্রিন।",
          en: "After ten minutes her phone died completely — a black screen.",
          hi: "दस मिनट में ही उसका फ़ोन पूरी तरह बंद हो गया — काली स्क्रीन।",
        },
      },
      {
        question: {
          bn: "চা-দোকানের লোকটি কীভাবে সাহায্য করল?",
          en: "How did the man at the tea stall help?",
          hi: "चाय की दुकान वाले ने कैसे मदद की?",
        },
        options: [
          { bn: "নিজের ফোন ধার দিল", en: "He lent her his phone", hi: "उसने अपना फ़ोन उधार दिया" },
          { bn: "রাস্তা বলল ও পানি দিল", en: "He gave directions and free water", hi: "उसने रास्ता बताया और मुफ़्त पानी दिया" },
          { bn: "কনভেনশন সেন্টারে পৌঁছে দিল", en: "He drove her there", hi: "वह उसे वहाँ तक ले गया" },
          { bn: "পুলিশ ডাকল", en: "He called the police", hi: "उसने पुलिस बुलाई" },
        ],
        answer: 1,
        explain: {
          bn: "সে রাস্তা বলে দেয়, পানির বোতল ধরিয়ে দেয় এবং টাকাও নেয় না।",
          en: "He explained the way, handed her water, and refused her money.",
          hi: "उसने रास्ता बताया, पानी थमाया और पैसे लेने से मना कर दिया।",
        },
      },
      {
        question: {
          bn: "অটো-চালক কী করল?",
          en: "What did the auto-rickshaw driver do?",
          hi: "ऑटो-रिक्शा चालक ने क्या किया?",
        },
        options: [
          { bn: "শুধু দাম বাড়াল", en: "He only raised the fare", hi: "उसने सिर्फ़ किराया बढ़ाया" },
          { bn: "পুরনো স্কুল ও বাজার দেখাল পথে", en: "He showed her the city on the way", hi: "रास्ते में उसने पुराना स्कूल और बाज़ार दिखाया" },
          { bn: "ফোন চার্জ করে দিল", en: "He charged her phone", hi: "उसने उसका फ़ोन चार्ज किया" },
          { bn: "সম্মেলনে ঢুকতে সাহায্য করল", en: "He helped her get inside the venue", hi: "उसने उसे अंदर जाने में मदद की" },
        ],
        answer: 1,
        explain: {
          bn: "পথে সে শতবর্ষ পুরনো স্কুল, স্ট্রিট ফুডের বাজার আর ভাতিজার দোকান দেখায়।",
          en: "On the way he pointed out a hundred-year-old school, a food market and his nephew's shop.",
          hi: "रास्ते में उसने सौ साल पुराना स्कूल, फ़ूड मार्केट और अपने भतीजे की दुकान दिखाई।",
        },
      },
      {
        question: {
          bn: "প্রিয়া গল্পের শেষে কী শিখল?",
          en: "What lesson does Priya take away?",
          hi: "प्रिया को अंत में क्या सीख मिली?",
        },
        options: [
          { bn: "ফোন ছাড়া কখনো বেরোনো উচিত নয়", en: "Never leave the hotel without a phone", hi: "फ़ोन के बिना कभी बाहर न निकलें" },
          { bn: "বড় শহরে কেউ সাহায্য করে না", en: "Nobody helps in big cities", hi: "बड़े शहरों में कोई मदद नहीं करता" },
          { bn: "মানুষও ম্যাপ — জিজ্ঞেস করলেই হয়", en: "People are also maps — you only have to ask", hi: "लोग भी नक़्शे हैं — बस पूछना पड़ता है" },
          { bn: "সম্মেলনে সোজা যাওয়াই ভালো", en: "Conferences are not worth the trouble", hi: "सम्मेलन में जाना बेकार है" },
        ],
        answer: 2,
        explain: {
          bn: "সে নিজেই বলে — মানুষও ম্যাপ, শুধু জিজ্ঞেস করতে হয়।",
          en: "Her own conclusion: people are also maps — you only have to ask.",
          hi: "उसका निष्कर्ष: लोग भी नक़्शे हैं — बस पूछना पड़ता है।",
        },
      },
    ],
  },
  {
    id: "the-video-interview",
    level: "intermediate",
    category: "work",
    minutes: 4,
    title: {
      bn: "ভিডিও ইন্টারভিউ",
      en: "The Video Interview",
      hi: "वीडियो इंटरव्यू",
    },
    summary: {
      bn: "রাফির জীবনের গুরুত্বপূর্ণ অনলাইন ইন্টারভিউয়ের ঠিক আগে লোডশেডিং! আধঘণ্টা অন্ধকারে বসে না থেকে সে মোবাইল হটস্পট, ইমেইল আর শান্ত মাথায় সমস্যা সমাধান করে — আর ইন্টারভিউয়ার মুগ্ধ হয়।",
      en: "Minutes before Rafi's most important online interview, the power goes out. Instead of giving up in the dark, he fixes things step by step — and the interviewer is impressed by his calm.",
      hi: "राफ़ी के सबसे ज़रूरी ऑनलाइन इंटरव्यू से कुछ मिनट पहले बिजली चली जाती है। अंधेरे में हार न मानकर वह क़दम-दर-क़दम समाधान ढूँढता है — और इंटरव्यूअर उसके धैर्य से प्रभावित होता है।",
    },
    paragraphs: [
      "Rafi had waited three weeks for this interview — a junior developer job at a company in the capital. The interview was online, at three in the afternoon, and he had prepared like a student before finals: answers written, projects reviewed, shirt ironed.",
      "He tested everything the night before. Camera: working. Microphone: working. Internet: strong. His notebook, which was three years old and had never let him down, sat charging like a racehorse in its stable.",
      "At twenty past two, the lights went out. Load shedding — the scheduled power cut that every Bangladeshi knows by its first name. The fan stopped. The router died. The notebook battery, which should have lasted, showed ten percent and falling.",
      "For one long minute, Rafi sat in the dark and felt his preparation melt. Then he stood up and started solving problems, the way he would solve a bug: one step at a time.",
      "He found his phone and turned on the mobile hotspot. He planned an audio-only call and wrote a polite email to the interviewer: “My area has a power cut. I may join by phone connection; I apologise in advance.”",
      "At three o'clock, from the brightest corner of his room, he joined the call — voice clear, connection a little slow but steady. The interviewer had already read his email. “Impressive,” she said. “Most candidates simply disappear. You adapted.”",
      "They talked for fifty minutes. Yes, his voice came through a phone hotspot during a power cut. But his answers were prepared, his projects made sense, and his calm under pressure was on full display.",
      "A week later, the second-round invitation arrived. Rafi printed it and stuck it above his desk — next to a small note he had written that dark afternoon: “Plans fail. Preparation doesn't.”",
    ],
    vocabulary: [
      {
        word: "interview",
        meaning: { bn: "চাকরির সাক্ষাৎকার", en: "a formal meeting for a job", hi: "नौकरी का साक्षात्कार" },
        example: "He had waited three weeks for this interview.",
      },
      {
        word: "load shedding",
        meaning: { bn: "লোডশেডিং (পরিকল্পিত বিদ্যুৎ বিভ্রাট)", en: "a planned power cut", hi: "नियोजित बिजली कटौती" },
        example: "At twenty past two, load shedding hit the whole area.",
      },
      {
        word: "apologise",
        meaning: { bn: "ক্ষমা চাওয়া", en: "to say sorry", hi: "क्षमा माँगना" },
        example: "He apologised in advance for the slow connection.",
      },
      {
        word: "candidate",
        meaning: { bn: "প্রার্থী", en: "a person trying for a job", hi: "उम्मीदवार" },
        example: "Most candidates simply disappear, she said.",
      },
      {
        word: "adapt",
        meaning: { bn: "মানিয়ে নেওয়া", en: "to change to fit a new situation", hi: "अनुकूलन करना" },
        example: "You adapted, the interviewer said with a smile.",
      },
      {
        word: "steady",
        meaning: { bn: "স্থির", en: "not shaking; reliable", hi: "स्थिर, भरोसेमंद" },
        example: "His connection was a little slow but steady.",
      },
    ],
    quiz: [
      {
        question: {
          bn: "রাফি রাতভর কী প্রস্তুতি নিয়েছিল?",
          en: "How did Rafi prepare the night before?",
          hi: "राफ़ी ने रात भर कैसे तैयारी की?",
        },
        options: [
          { bn: "ক্যামেরা, মাইক, ইন্টারনেট সব পরীক্ষা করেছিল", en: "He tested his camera, microphone and internet", hi: "उसने कैमरा, माइक और इंटरनेट जाँचे" },
          { bn: "সারারাত কোড লিখেছিল", en: "He coded all night", hi: "वह रात भर कोड लिखता रहा" },
          { bn: "নতুন ল্যাপটপ কিনেছিল", en: "He bought a new laptop", hi: "उसने नया लैपटॉप खरीदा" },
          { bn: "কিছুই করেনি", en: "He did nothing special", hi: "उसने कुछ ख़ास नहीं किया" },
        ],
        answer: 0,
        explain: {
          bn: "সে আগের রাতেই ক্যামেরা, মাইক ও ইন্টারনেট পরীক্ষা করে নিশ্চিত হয়েছিল।",
          en: "He tested camera, microphone and internet the night before.",
          hi: "उसने एक दिन पहले कैमरा, माइक और इंटरनेट जाँच लिए थे।",
        },
      },
      {
        question: {
          bn: "দুটো বজায় কী ঘটল?",
          en: "What happened at twenty past two?",
          hi: "दो बजकर बीस मिनट पर क्या हुआ?",
        },
        options: [
          { bn: "ইন্টারভিউ এক ঘণ্টা পিছিয়ে গেল", en: "The interview was postponed", hi: "इंटरव्यू टल गया" },
          { bn: "ল্যাপটপ ভেঙে গেল", en: "His laptop broke", hi: "उसका लैपटॉप टूट गया" },
          { bn: "পরিকল্পিত বিদ্যুৎ বিভ্রাট শুরু হলো", en: "A scheduled power cut began", hi: "नियोजित बिजली कटौती शुरू हो गई" },
          { bn: "ইন্টারভিউয়ার অসুস্থ হয়ে পড়লেন", en: "The interviewer fell ill", hi: "इंटरव्यूअर बीमार हो गई" },
        ],
        answer: 2,
        explain: {
          bn: "দুটো বজায় লোডশেডিং — ফ্যান, রাউটার সব বন্ধ।",
          en: "Load shedding began: the fan stopped and the router died.",
          hi: "लोड शेडिंग शुरू हो गई: पंखा रुक गया, राउटर बंद हो गया।",
        },
      },
      {
        question: {
          bn: "রাফি অন্ধকার মিনিটটার পর কীভাবে এগোল?",
          en: "How did Rafi respond after the dark minute?",
          hi: "अंधेरे वाले मिनट के बाद राफ़ी ने क्या किया?",
        },
        options: [
          { bn: "কান্না করে বসে রইল", en: "He gave up and sat in the dark", hi: "वह हार मानकर बैठ गया" },
          { bn: "একে একে সমস্যা সমাধান করল", en: "He solved problems one step at a time", hi: "वह क़दम-दर-क़दम समस्या सुलझाता है" },
          { bn: "অন্য দিনের জন্য চেয়ে নিল", en: "He asked for another date", hi: "उसने दूसरी तारीख़ माँगी" },
          { bn: "বন্ধুর বাসায় চলে গেল", en: "He ran to a friend's house", hi: "वह दोस्त के घर भागा" },
        ],
        answer: 1,
        explain: {
          bn: "সে বাগ সমাধানের মতো করে — একে একে প্রতিটি সমস্যা মেলাতে থাকে।",
          en: "He stood up and solved problems one step at a time, like fixing a bug.",
          hi: "वह उठा और बग ठीक करने की तरह एक-एक कदम से समस्या सुलझाने लगा।",
        },
      },
      {
        question: {
          bn: "ইন্টারভিউয়ার কী দেখে মুগ্ধ হলেন?",
          en: "What impressed the interviewer most?",
          hi: "इंटरव्यूअर को सबसे ज़्यादा क्या प्रभावित किया?",
        },
        options: [
          { bn: "তার নতুন ল্যাপটপ", en: "His new laptop", hi: "उसका नया लैपटॉप" },
          { bn: "তার ইংরেজি উচ্চারণ", en: "His English accent", hi: "उसका अंग्रेज़ी उच्चारण" },
          { bn: "বিপদে সে হারিয়ে যায়নি, মানিয়ে নিয়েছে", en: "He adapted instead of disappearing", hi: "वह लापता नहीं हुआ, बल्कि अनुकूलन कर गया" },
          { bn: "তার পুরনো প্রজেক্টের তালিকা", en: "His long list of projects", hi: "उसके प्रोजेक्ट्स की लंबी सूची" },
        ],
        answer: 2,
        explain: {
          bn: "“Most candidates simply disappear. You adapted.” — এই ব্যবধানটাই মুগ্ধ করে।",
          en: "“Most candidates simply disappear. You adapted.”",
          hi: "“Most candidates simply disappear. You adapted.”",
        },
      },
      {
        question: {
          bn: "রাফির ডেস্কের উপরের নোটে কী লেখা?",
          en: "What is written on the note above Rafi's desk?",
          hi: "राफ़ी के डेस्क के ऊपर नोट पर क्या लिखा है?",
        },
        options: [
          { bn: "“ভাগ্য সব বদলায়”", en: "“Luck changes everything.”", hi: "“क़िस्मत सब बदलती है।”" },
          { bn: "“পরিকল্পনা ভুল হয়, প্রস্তুতি নয়”", en: "“Plans fail. Preparation doesn't.”", hi: "“योजनाएँ फेल होती हैं, तैयारी नहीं।”" },
          { bn: "“নেভার গিভ আপ”", en: "“Never give up.”", hi: "“कभी हार मत मानो।”" },
          { bn: "“প্র্যাকটিস মেকস পারফেক্ট”", en: "“Practice makes perfect.”", hi: "“अभ्यास से ही सिद्धि मिलती है।”" },
        ],
        answer: 1,
        explain: {
          bn: "গল্পের শেষ লাইন: “Plans fail. Preparation doesn't.”",
          en: "The last line of the story: “Plans fail. Preparation doesn't.”",
          hi: "कहानी की अंतिम पंक्ति: “Plans fail. Preparation doesn't.”",
        },
      },
    ],
  },
  {
    id: "the-mango-summer",
    level: "intermediate",
    category: "culture",
    minutes: 4,
    title: {
      bn: "আমের গ্রীষ্ম",
      en: "The Mango Summer",
      hi: "आम की गर्मी",
    },
    summary: {
      bn: "প্রতি গ্রীষ্মে পুরো পরিবার দাদুর গ্রামের আমবাগানে জড়ো হয়। ঝড়ে ঝরে পড়া কাঁচা আম থেকে দাদিমা বানালেন বিশটা আচারের জার — আর লেখক শিখল, কিছু শিক্ষা মানুষের চেয়েও টিকে থাকে।",
      en: "Every summer the family gathers at grandfather's mango orchard. After a storm drops the green fruit, grandmother turns loss into twenty jars of pickle — and the narrator learns that some lessons outlive people.",
      hi: "हर गर्मी में पूरा परिवार दादाजी के आम के बाग में जुटता है। तूफ़ान में गिरे कच्चे आमों से दादी बीस जार अचार बनाती हैं — और लेखक सीखता है कि कुछ सबक़ इंसानों से भी लंबे जीवित रहते हैं।",
    },
    paragraphs: [
      "Every summer, the whole family travelled to Dadu's village, where twelve mango trees stood like old kings in the courtyard. Dadu — our grandfather — knew each tree by name and by taste.",
      "The children arrived first in the fields, of course. My cousin Jui could climb a tree in eight seconds flat. I was slower, but I had a better job: I stood below with the bamboo hook and pulled down the highest branches.",
      "Dadu taught us patience. “A mango tells you when it's ready,” he said. “Never pull hard. Hold it gently and turn. If it comes away with a soft snap, it was waiting for you. If it fights, let it rest.”",
      "Grandmother turned the kitchen into a mango laboratory. Green mangoes became sour chutney; soft ones became ice cream; the famous Himsagar ones were saved for juice, cold and golden.",
      "In the evenings, we carried baskets to the neighbours. Nobody in the village bought mangoes that month; nobody needed to. Dadu believed fruit tasted better when it was given away, and I think he was right.",
      "One July evening, a storm hit the village. We heard mangoes falling in the dark like heavy rain. In the morning, the ground was covered with green fruit. Jui almost cried — “All wasted!”",
      "But Grandmother was already awake, collecting the fallen mangoes in a basket. “Wasted?” she said. “The tree gave us a gift early.” That day we made twenty jars of pickle — sour, spicy, and so salty that we ate them with every meal for a year.",
      "Dadu is gone now, and the old trees are fewer. But every summer, when the first mangoes arrive in the city market, I hold one gently, turn, and wait for the soft snap. Some lessons live longer than people.",
    ],
    vocabulary: [
      {
        word: "courtyard",
        meaning: { bn: "উঠান", en: "an open space inside a house", hi: "आँगन" },
        example: "Twelve mango trees stood in the courtyard.",
      },
      {
        word: "branch",
        meaning: { bn: "ডাল", en: "the arm of a tree", hi: "शाखा, डाल" },
        example: "He pulled down the highest branches with a hook.",
      },
      {
        word: "patience",
        meaning: { bn: "ধৈর্য", en: "waiting calmly without anger", hi: "धैर्य" },
        example: "Dadu taught us patience with mangoes.",
      },
      {
        word: "gently",
        meaning: { bn: "আলতো করে", en: "in a soft, careful way", hi: "धीरे से, सावधानी से" },
        example: "Hold the mango gently and turn it.",
      },
      {
        word: "chutney",
        meaning: { bn: "চাটনি", en: "a sour-spicy side dish", hi: "चटनी" },
        example: "Green mangoes became sour chutney.",
      },
      {
        word: "pickle",
        meaning: { bn: "আচার", en: "fruit or vegetables preserved in salt and spices", hi: "अचार" },
        example: "They made twenty jars of mango pickle.",
      },
    ],
    quiz: [
      {
        question: {
          bn: "লেখকের বাগানে কাজ কোনটি ছিল?",
          en: "What was the narrator's job in the orchard?",
          hi: "बाग में लेखक का काम क्या था?",
        },
        options: [
          { bn: "গাছে ওঠা", en: "Climbing the trees", hi: "पेड़ पर चढ़ना" },
          { bn: "বাঁশের হুক দিয়ে উঁচু ডাল টানা", en: "Pulling high branches with the bamboo hook", hi: "बाँस के हुक से ऊँची डालें खींचना" },
          { bn: "রস তৈরি করা", en: "Making juice", hi: "जूस बनाना" },
          { bn: "পাড়ায় আম পৌঁছে দেওয়া", en: "Carrying mangoes to neighbours", hi: "पड़ोसियों को आम पहुँचाना" },
        ],
        answer: 1,
        explain: {
          bn: "সে নিচে দাঁড়িয়ে বাঁশের হুক দিয়ে উঁচু ডালগুলো টেনে নামাত।",
          en: "He stood below and pulled down the highest branches with the bamboo hook.",
          hi: "वह नीचे खड़ा होकर बाँस के हुक से ऊँची डालें खींचता था।",
        },
      },
      {
        question: {
          bn: "দাদুর আম তোলার নিয়ম কী ছিল?",
          en: "What was Dadu's rule for picking a mango?",
          hi: "दादाजी का आम तोड़ने का नियम क्या था?",
        },
        options: [
          { bn: "জোরে টানতে হবে", en: "Pull as hard as you can", hi: "ज़ोर से खींचो" },
          { bn: "সিঁড়ি দিয়ে উঠে কাটতে হবে", en: "Use a ladder and a knife", hi: "सीढ़ी लगाकर चाकू से काटो" },
          { bn: "আলতো ধরে ঘুরিয়ে নাও — soft snap হলে পাকা", en: "Hold gently, turn — a soft snap means it's ready", hi: "धीरे पकड़कर घुमाओ — नरम “क्लिक” का मतलब पका है" },
          { bn: "শুধু ঝরে পড়া আম নেওয়া যাবে", en: "Only pick up fallen mangoes", hi: "सिर्फ़ गिरे आम ही उठाओ" },
        ],
        answer: 2,
        explain: {
          bn: "দাদু বলতেন — আলতো ধরে ঘোরাও; soft snap মানে আম তোমার জন্য অপেক্ষা করছিল।",
          en: "Dadu said: hold gently and turn; a soft snap means it was waiting for you.",
          hi: "दादाजी कहते थे: धीरे पकड़कर घुमाओ; नरम “क्लिक” का मतलब आम तैयार है।",
        },
      },
      {
        question: {
          bn: "ঝড়ের পর জুই কেন কাঁদতে চাইছিল?",
          en: "Why did Jui almost cry after the storm?",
          hi: "तूफ़ान के बाद जुई रोने क्यों जा रही थी?",
        },
        options: [
          { bn: "তার প্রিয় গাছ ভেঙে গিয়েছিল", en: "Her favourite tree had broken", hi: "उसका प्रिय पेड़ टूट गया था" },
          { bn: "ভিজে আম আর স্বাদু থাকে না", en: "Wet mangoes don't taste good", hi: "भीगे आम स्वादिष्ट नहीं होते" },
          { bn: "মনে হচ্ছিল সব আম নষ্ট", en: "She thought all the mangoes were wasted", hi: "उसे लगा सारे आम बर्बाद हो गए" },
          { bn: "রাতে ভয় পেয়েছিল", en: "The storm had frightened her", hi: "तूफ़ान से वह डर गई थी" },
        ],
        answer: 2,
        explain: {
          bn: "সকালে মাটি কাঁচা আমে ঢাকা — জুই বলেছিল “All wasted!”",
          en: "The ground was covered with green fruit — “All wasted!” she said.",
          hi: "ज़मीन कच्चे आमों से ढकी थी — “All wasted!” उसने कहा।",
        },
      },
      {
        question: {
          bn: "দাদিমা ঝরে পড়া আম দিয়ে কী বানালেন?",
          en: "What did Grandmother make from the fallen mangoes?",
          hi: "दादी ने गिरे आमों से क्या बनाया?",
        },
        options: [
          { bn: "আইসক্রিম", en: "Ice cream", hi: "आइस क्रीम" },
          { bn: "বিশটা আচারের জার", en: "Twenty jars of pickle", hi: "बीस जार अचार" },
          { bn: "আমের জুস", en: "Mango juice", hi: "आम का जूस" },
          { bn: "টক চাটনি", en: "Sour chutney", hi: "खट्टी चटनी" },
        ],
        answer: 1,
        explain: {
          bn: "“The tree gave us a gift early” — সেদিন বিশটা জার আচার হয়েছিল।",
          en: "“The tree gave us a gift early” — and they made twenty jars of pickle.",
          hi: "“पेड़ ने उपहार जल्दी दे दिया” — और उन्होंने बीस जार अचार बनाया।",
        },
      },
      {
        question: {
          bn: "গল্পের শেষ অনুচ্ছেদের মূল কথা কী?",
          en: "What does the last paragraph mean?",
          hi: "आख़िरी पैराग्राफ का क्या अर्थ है?",
        },
        options: [
          { bn: "শহরের আম কম স্বাদু", en: "City mangoes taste worse", hi: "शहर के आम कम स्वादिष्ट होते हैं" },
          { bn: "আম গাছ বহু বছর বাঁচে", en: "Mango trees live for centuries", hi: "आम के पेड़ सदियों जीते हैं" },
          { bn: "প্রিয় মানুষ চলে গেলেও তাদের শেখানো থেকে যায়", en: "Lessons from loved ones outlive them", hi: "अपनों की सीख उनसे भी लंबी चलती है" },
          { bn: "আচার এক বছরের বেশি খাওয়া উচিত নয়", en: "One should not eat pickle for a year", hi: "साल भर अचार नहीं खाना चाहिए" },
        ],
        answer: 2,
        explain: {
          bn: "“Some lessons live longer than people” — দাদু-দাদিমার শিক্ষা এখনও প্রযোজ্য।",
          en: "“Some lessons live longer than people” — their teachings still guide him.",
          hi: "“कुछ सबक़ इंसानों से भी लंबे जीते हैं” — उनकी सीख आज भी उसके साथ है।",
        },
      },
    ],
  },
  {
    id: "how-the-monsoon-arrives",
    level: "intermediate",
    category: "science",
    minutes: 5,
    title: {
      bn: "বর্ষা কীভাবে আসে",
      en: "How the Monsoon Arrives",
      hi: "मानसून कैसे आता है",
    },
    summary: {
      bn: "সমুদ্র যখন “শ্বাস নেয়” — গরম স্থলের উপর ভেজা হাওয়া উঠে ঠান্ডা হয়ে বৃষ্টি হয়ে ঝরে। চাঁদপুরের মানুষ ক্যালেন্ডার নয়, আকাশ দেখে বর্ষার অপেক্ষা করে, আর বিজ্ঞানীরা দেখেন কীভাবে এই ছন্দ বদলাচ্ছে।",
      en: "How the sea “breathes” rain: hot land pulls in wet ocean air, the air cools, and the drops fall. In Chandpur people watch the sky, not the calendar — and scientists watch a pattern that is changing.",
      hi: "समुद्र जब “साँस लेता है” — गर्म ज़मीन भीगी हवा खींचती है, हवा ठंडी होकर बारिश बन जाती है। चाँदपुर के लोग कैलेंडर नहीं, आसमान देखते हैं — और वैज्ञानिक देखते हैं कि यह लय कैसे बदल रही है।",
    },
    paragraphs: [
      "In the village of Chandpur, everyone watched the sky, not the calendar. The school exams ended, the jackfruit ripened, the ponds shrank — and still there was no rain. “The monsoon is late,” the farmers said, and their voices carried worry.",
      "Monsoon is not just rain. It is a machine made of sun, sea, and wind. All summer, the sun heats the great plains of Asia, and the land grows hot. The sea beside it stays cooler.",
      "Warm air rises; that is its nature. As the hot air over the land climbs, cooler air must come in to replace it. And that cooler air comes from the ocean — heavy with water it has collected as vapour.",
      "This wet wind travels hundreds of kilometres. When it meets hills or simply rises over the hot land, it cools down. Cool air cannot hold as much water vapour, so the vapour turns into millions of tiny drops. We have a name for what happens next: rain.",
      "Old Hasan explained it more simply, sitting on the shop veranda. “The sea breathes towards us,” he said, “and its breath is water. When the sea finishes breathing, the rivers fill, and the earth turns green.”",
      "That year, the monsoon arrived on a Tuesday. First came the wind, bending the banana leaves. Then the smell — wet dust and green things — a smell every child of the region knows. Then the sky opened.",
      "Children ran out of doors; farmers stood in their fields without umbrellas, laughing. The ponds filled, the frogs started their nightly concerts, and the rice seedlings drank.",
      "Scientists say the monsoon is changing — arriving late some years, leaving early in others, raining too much in one week and too little in the next month. In Chandpur, the farmers keep watching the sky. They always have.",
    ],
    vocabulary: [
      {
        word: "monsoon",
        meaning: { bn: "বর্ষা / মৌসুমি বায়ু", en: "the rainy season wind system", hi: "मानसून, बरसात" },
        example: "The monsoon is late this year, the farmers say.",
      },
      {
        word: "ripen",
        meaning: { bn: "পাকা হওয়া", en: "to become ready to eat", hi: "पकना" },
        example: "The jackfruit ripened, and still there was no rain.",
      },
      {
        word: "vapour",
        meaning: { bn: "জলীয় বাষ্প", en: "water in the air you cannot see", hi: "वाष्प" },
        example: "The ocean air is heavy with water vapour.",
      },
      {
        word: "veranda",
        meaning: { bn: "বারান্দা", en: "a roofed open area by a house", hi: "बरामदा" },
        example: "Old Hasan sat on the shop veranda.",
      },
      {
        word: "seedling",
        meaning: { bn: "চারা", en: "a very young plant", hi: "पौधा, बीज पौधा" },
        example: "The rice seedlings drank and grew taller.",
      },
      {
        word: "bend",
        meaning: { bn: "বাঁকানো", en: "to curve something, not break it", hi: "मोड़ना" },
        example: "The wind came first, bending the banana leaves.",
      },
    ],
    quiz: [
      {
        question: {
          bn: "বর্ষার “মেশিনের” তিনটি অংশ কোনগুলো?",
          en: "What three parts make the “monsoon machine”?",
          hi: "“मानसून मशीन” के तीन हिस्से कौन-से हैं?",
        },
        options: [
          { bn: "সূর্য, সমুদ্র ও বাতাস", en: "Sun, sea and wind", hi: "सूरज, समुद्र और हवा" },
          { bn: "মেঘ, বজ্র ও বিদ্যুৎ", en: "Clouds, thunder and lightning", hi: "बादल, बिजली और गरज" },
          { bn: "নদী, পুকুর ও পাহাড়", en: "Rivers, ponds and hills", hi: "नदियाँ, तालाब और पहाड़" },
          { bn: "শ্রমিক, কৃষক ও জেলে", en: "Workers, farmers and fishermen", hi: "मज़दूर, किसान और मछुआरे" },
        ],
        answer: 0,
        explain: {
          bn: "গল্পে বলা হয়েছে — “a machine made of sun, sea, and wind.”",
          en: "The story calls it “a machine made of sun, sea, and wind.”",
          hi: "कहानी इसे “a machine made of sun, sea, and wind” कहती है।",
        },
      },
      {
        question: {
          bn: "সমুদ্র থেকে আসা বাতাস কেন ভারী?",
          en: "Why is the air from the ocean “heavy”?",
          hi: "समुद्र से आने वाली हवा “भारी” क्यों होती है?",
        },
        options: [
          { bn: "এতে প্রচুর জলীয় বাষ্প থাকে", en: "It carries a lot of water vapour", hi: "उसमें बहुत जलवाष्प होती है" },
          { bn: "এটা খুব ঠান্ডা", en: "Because it is very cold", hi: "क्योंकि वह बहुत ठंडी होती है" },
          { bn: "এতে লবণ থাকে", en: "Because it carries salt", hi: "उसमें नमक होता है" },
          { bn: "পাখিরা ওড়ে এর ভিতর", en: "Because birds fly in it", hi: "उसमें पक्षी उड़ते हैं" },
        ],
        answer: 0,
        explain: {
          bn: "সমুদ্রের হাওয়া বাষ্পরূপে জল টেনে নিয়ে আসে — তাই ভারী।",
          en: "The ocean air carries water as vapour — that makes it heavy.",
          hi: "समुद्र की हवा वाष्प रूप में पानी लाती है — इसीलिए भारी।",
        },
      },
      {
        question: {
          bn: "বৃষ্টি শুরু হয় কখন?",
          en: "When does the rain actually begin?",
          hi: "बारिश शुरू कब होती है?",
        },
        options: [
          { bn: "ভেজা বাতাস উঠে ঠান্ডা হলে", en: "When the wet wind rises and cools", hi: "जब भीगी हवा ऊपर उठकर ठंडी हो जाती है" },
          { bn: "সমুদ্র যখন উত্তপ্ত হয়", en: "When the sea gets hotter", hi: "जब समुद्र गर्म हो जाता है" },
          { bn: "বাতাস যখন থেমে যায়", en: "When the wind stops", hi: "जब हवा रुक जाती है" },
          { bn: "রাত হলেই", en: "As soon as night falls", hi: "रात होते ही" },
        ],
        answer: 0,
        explain: {
          bn: "ঠান্ডা বাতাস কম বাষ্প ধরে রাখতে পারে — তাই বাষ্প ফোঁটায় পরিণত হয়।",
          en: "Cool air cannot hold as much vapour, so the drops form.",
          hi: "ठंडी हवा कम वाष्प रख पाती है, इसलिए बूँदें बनती हैं।",
        },
      },
      {
        question: {
          bn: "“সমুদ্র শ্বাস নেয়” মানে কী?",
          en: "What does “the sea breathes towards us” mean?",
          hi: "“समुद्र हमारी ओर साँस लेता है” का क्या मतलब है?",
        },
        options: [
          { bn: "সমুদ্রের ঢেউ শ্বাসের মতো ওঠানামা করে", en: "The waves move like breathing", hi: "लहरें साँस की तरह उठती-गिरती हैं" },
          { bn: "মাছরাঙা সমুদ্রে ডুব দেয়", en: "Kingfishers dive into the sea", hi: "राम चिरैया समुद्र में डुबकी लगाती है" },
          { bn: "ভেজা মৌসুমি বাতাস স্থলের দিকে আসে", en: "The wet monsoon wind flows towards the land", hi: "भीगी मानसून हवा ज़मीन की ओर बहती है" },
          { bn: "নদী সমুদ্রে মিশে যায়", en: "Rivers flow into the sea", hi: "नदियाँ समुद्र में मिल जाती हैं" },
        ],
        answer: 2,
        explain: {
          bn: "হাসান দাদুর ভাষায় — সমুদ্রের শ্বাসই মানে আমাদের দিকে আসা ভেজা বাতাস।",
          en: "Old Hasan means the wet monsoon wind flowing from sea to land.",
          hi: "हासन चाचा का मतलब है समुद्र से ज़मीन की ओर बहती भीगी मानसून हवा।",
        },
      },
      {
        question: {
          bn: "বিজ্ঞানীরা কী পরিবর্তন লক্ষ্য করছেন?",
          en: "What change do scientists notice?",
          hi: "वैज्ञानिक किस बदलाव पर ध्यान दे रहे हैं?",
        },
        options: [
          { bn: "বর্ষা আর ভয়ংকর হচ্ছে না", en: "Monsoons are getting weaker every year", hi: "मानसून हर साल कमज़ोर हो रहा है" },
          { bn: "বর্ষার সময় ও ছন্দ অনিয়মিত হচ্ছে", en: "The timing and pattern are becoming irregular", hi: "समय और लय अनियमित हो रहे हैं" },
          { bn: "চাঁদপুরে বৃষ্টি আর হয় না", en: "Chandpur no longer gets rain", hi: "चाँदपुर में अब बारिश नहीं होती" },
          { bn: "সমুদ্র শুকিয়ে যাচ্ছে", en: "The sea is drying up", hi: "समुद्र सूख रहा है" },
        ],
        answer: 1,
        explain: {
          bn: "কোনো বছর দেরিতে, কোনো বছর আগে চলে যায় — ছন্দটাই বদলাচ্ছে।",
          en: "Some years it arrives late, some years it leaves early — the pattern shifts.",
          hi: "कभी देर से आता है, कभी जल्दी चला जाता है — लय बदल रही है।",
        },
      },
    ],
  },
  {
    id: "the-bicycle-library",
    level: "intermediate",
    category: "inspire",
    minutes: 4,
    title: {
      bn: "সাইকেল লাইব্রেরি",
      en: "The Bicycle Library",
      hi: "साइकिल लाइब्रेरी",
    },
    summary: {
      bn: "কলেজছাত্রী শান্তা প্রতি শুক্রবার সাইকেলের ঝুড়িতে গ্রামের বাচ্চাদের জন্য বই নিয়ে যেত। এক প্রশ্ন থেকে শুরু — আজ সেখানে বটগাছের নিচে প্রায় আশি বছরের চেয়েও দামি সম্পদ: আটশো বইয়ের লাইব্রেরি।",
      en: "College student Shanta started carrying books to her village in a bicycle basket. One cousin's question grew into a library of eight hundred books — living in a wooden box under a banyan tree.",
      hi: "कॉलेज छात्रा शांता ने साइकिल की टोकरी में गाँव के बच्चों के लिए किताबें लाना शुरू किया। एक भतीजे के सवाल से शुरू होकर आज बरगद के पेड़ के नीचे आठ सौ किताबों की लाइब्रेरी है।",
    },
    paragraphs: [
      "Shanta was a college student in a small town, and every Friday she rode her bicycle home to her village, twelve kilometres away. In the basket behind her seat, she started carrying something new: books.",
      "It began with her cousin's question. “Didi, what happens after the tiger in the story?” He had read half of a torn textbook and there was no library within thirty kilometres.",
      "The next Friday she carried four books. The Friday after, nine. Children began waiting near the banyan tree, and not only children — a farmer asked for a book about mushroom farming, and an older woman wanted to learn to read her own letters at last.",
      "Shanta made a simple rule: anyone could borrow a book for one week — no card, no fee, only a promise to return it. Out of the first hundred books, ninety-eight came back. One went to the river with a careless boy; one stayed with a girl who loved it too much to let go.",
      "Word travelled. A teacher in town donated two shelves of books. A doctor gave magazines. Shanta's father, who had once called reading “a luxury”, built a small wooden box and fixed it under the banyan tree, so the books could live in the village all week.",
      "Three years later, the “bicycle library” has a name painted on the box, a roster of volunteer riders, and nearly eight hundred books. Shanta has graduated, but every Friday a bicycle still leaves the town with books in its basket.",
      "The rule has not changed: borrow for a week, promise to return. And under the banyan tree, the first question children ask is still the one her cousin asked: “Didi, what happens next?”",
    ],
    vocabulary: [
      {
        word: "borrow",
        meaning: { bn: "ধার করা", en: "to take something for a short time", hi: "उधार लेना" },
        example: "Anyone could borrow a book for one week.",
      },
      {
        word: "fee",
        meaning: { bn: "ফি / মাশুল", en: "money you pay for a service", hi: "शुल्क" },
        example: "No card, no fee — only a promise.",
      },
      {
        word: "donate",
        meaning: { bn: "দান করা", en: "to give something for free", hi: "दान करना" },
        example: "A teacher donated two shelves of books.",
      },
      {
        word: "luxury",
        meaning: { bn: "বিলাসিতা", en: "something costly, not necessary", hi: "विलासिता" },
        example: "Her father once called reading “a luxury”.",
      },
      {
        word: "volunteer",
        meaning: { bn: "স্বেচ্ছাসেবক", en: "someone who works for free by choice", hi: "स्वयंसेवक" },
        example: "The library now has a roster of volunteer riders.",
      },
      {
        word: "roster",
        meaning: { bn: "তালিকা / শিফট-তালিকা", en: "a list of who does what and when", hi: "कार्य-सूची" },
        example: "A roster decides who rides the bicycle each Friday.",
      },
    ],
    quiz: [
      {
        question: {
          bn: "সবকিছুর শুরু কোন প্রশ্ন থেকে?",
          en: "What question started everything?",
          hi: "किस सवाल से सब शुरू हुआ?",
        },
        options: [
          { bn: "“কোথায় পড়তে যাব?”", en: "“Where should I study?”", hi: "“मैं कहाँ पढ़ूँ?”" },
          { bn: "“গল্পের বাঘের পরে কী হয়?”", en: "“What happens after the tiger?”", hi: "“बाघ के बाद क्या होता है?”" },
          { bn: "“সাইকেল কেনা যাবে কোথায়?”", en: "“Where can I buy a bicycle?”", hi: "“साइकिल कहाँ मिलेगी?”" },
          { bn: "“কিতাবের দাম কত?”", en: "“How much does the book cost?”", hi: "“किताब की क़ीमत क्या है?”" },
        ],
        answer: 1,
        explain: {
          bn: "ভাগ্নের প্রশ্নটাই — “গল্পের বাঘের পরে কী হয়?” — সবকিছুর সূচনা করে।",
          en: "Her cousin's question — “What happens after the tiger?” — started it all.",
          hi: "उसके भतीजे का सवाल — “बाघ के बाद क्या होता है?” — ही शुरुआत था।",
        },
      },
      {
        question: {
          bn: "শান্তার ধার দেওয়ার নিয়ম কী ছিল?",
          en: "What was Shanta's borrowing rule?",
          hi: "शांता का उधार नियम क्या था?",
        },
        options: [
          { bn: "এক সপ্তাহ ধার, ফেরতের প্রতিশ্রুতি", en: "One week, with a promise to return", hi: "एक सप्ताह, लौटाने का वादा" },
          { bn: "এক মাস ধার, দুই টাকা ফি", en: "One month, with a small fee", hi: "एक माह, थोड़ा शुल्क" },
          { bn: "শুধু স্কুলপড়ুয়া বাচ্চারা নিতে পারবে", en: "Only schoolchildren could borrow", hi: "सिर्फ़ स्कूली बच्चे ले सकते थे" },
          { bn: "এক জন একবারে পাঁচটা বই নিতে পারবে", en: "Five books at a time for everyone", hi: "एक बार में पाँच किताबें" },
        ],
        answer: 0,
        explain: {
          bn: "কোনো কার্ড নেই, ফি নেই — এক সপ্তাহ ধার, শুধু ফেরতের প্রতিশ্রুতি।",
          en: "No card, no fee — one week, only a promise to return.",
          hi: "न कार्ड, न शुल्क — एक सप्ताह, सिर्फ़ लौटाने का वादा।",
        },
      },
      {
        question: {
          bn: "প্রথম একশো বইয়ের মধ্যে কয়টা ফেরত এসেছিল?",
          en: "How many of the first hundred books came back?",
          hi: "पहली सौ किताबों में से कितनी लौटीं?",
        },
        options: [
          { bn: "সবগুলো", en: "All of them", hi: "सभी" },
          { bn: "আশিটা", en: "Eighty", hi: "अस्सी" },
          { bn: "আটান্নটা", en: "Ninety-eight", hi: "अट्ठानवे" },
          { bn: "পঞ্চাশটা", en: "Fifty", hi: "पचास" },
        ],
        answer: 2,
        explain: {
          bn: "একটা নদীতে গিয়েছিল, আরেকটা একটা মেয়ে ফেরত দিতে রাজি হয়নি — বাকি আটান্নটা ফিরে এসেছিল।",
          en: "One went to the river, one stayed with a girl who loved it — ninety-eight returned.",
          hi: "एक नदी में चली गई, एक उसे बहुत प्रिय लड़की ने रख ली — अट्ठानवे लौटीं।",
        },
      },
      {
        question: {
          bn: "বাবা একসময় পড়াকে “বিলাসিতা” বলতেন — এখন তিনি কী করেন?",
          en: "The father once called reading “a luxury”. What does he do now?",
          hi: "पिता पढ़ने को “विलासिता” कहते थे। अब वे क्या करते हैं?",
        },
        options: [
          { bn: "বটগাছের নিচে কাঠের বাক্স বানিয়েছেন", en: "He built the wooden box under the banyan tree", hi: "उन्होंने बरगद के नीचे लकड़ी का बक्सा बनाया" },
          { bn: "সাইকেল কিনে দিয়েছেন", en: "He bought the bicycle", hi: "उन्होंने साइकिल खरीदी" },
          { bn: "গ্রামে স্কুল খুলেছেন", en: "He opened a village school", hi: "उन्होंने गाँव में स्कूल खोला" },
          { bn: "সাপ্তাহিক পত্রিকা আনেন", en: "He brings weekly newspapers", hi: "वे हफ़्तेवार अख़बार लाते हैं" },
        ],
        answer: 0,
        explain: {
          bn: "বইগুলো গ্রামেই থাকতে পাকা কাঠের বাক্সটা বানিয়ে দিয়েছেন বাবা।",
          en: "Her father built the wooden box so the books could live in the village.",
          hi: "पिता ने लकड़ी का बक्सा बनाया ताकि किताबें गाँव में ही रह सकें।",
        },
      },
      {
        question: {
          bn: "তিন বছর পর লাইব্রেরিতে প্রায় কত বই?",
          en: "How many books does the library have three years later?",
          hi: "तीन साल बाद लाइब्रेरी में लगभग कितनी किताबें हैं?",
        },
        options: [
          { bn: "একশোটা", en: "One hundred", hi: "एक सौ" },
          { bn: "তিনশোটা", en: "Three hundred", hi: "तीन सौ" },
          { bn: "পাঁচশোটা", en: "Five hundred", hi: "पाँच सौ" },
          { bn: "প্রায় আটশোটা", en: "Nearly eight hundred", hi: "लगभग आठ सौ" },
        ],
        answer: 3,
        explain: {
          bn: "তিন বছরে বই জমে প্রায় আটশো — সঙ্গে স্বেচ্ছাসেবক সাইকেল-তালিকা।",
          en: "Three years on, there are nearly eight hundred books and volunteer riders.",
          hi: "तीन साल में लगभग आठ सौ किताबें और स्वयंसेवक सवारों की सूची तैयार है।",
        },
      },
    ],
  },
];

const ADVANCED: LibraryStory[] = [
  {
    id: "candlelight-at-eight",
    level: "advanced",
    category: "daily",
    minutes: 8,
    title: {
      bn: "আটটায় মোমবাতির আলো",
      en: "Candlelight at Eight",
      hi: "आठ बजे मोमबत्ती की रोशनी",
    },
    summary: {
      bn: "ঠিক রাত আটটায় লোডশেডিং নেমে এলে নাদিয়ার পরিবার অভ্যস্ত স্ক্রিনের জগৎ ছেড়ে একসঙ্গে মোমবাতির আলোয় বসে পড়ে। বিদ্যুৎ ফেরার আগেই বাবার পুরনো গল্পে অজানা এক অধ্যায় উঠে আসে, আর ভাই তানভীর তার প্রজেক্টের দ্বিধা খুলে বলে। পরদিন নাদিয়া সিদ্ধান্ত নেয় — সপ্তাহে এক সন্ধ্যা ইচ্ছে করেই মোমবাতির আলোয় কাটা হবে।",
      en: "A load-shedding cut at exactly eight o'clock pulls Nadia's family away from their screens and into a candlelit dinner. Before the power returns, an untold chapter of her father's old story surfaces, and her brother Tanvir opens up about a decision he has been wrestling with. The next day Nadia decides to keep one evening a week dark by choice.",
      hi: "ठीक आठ बजे लोडशेडिंग होने पर नादिया का परिवार स्क्रीन की आदी दुनिया छोड़कर मोमबत्ती की रोशनी में एक साथ बैठ जाता है। बिजली लौटने से पहले ही पिता की पुरानी कहानी का एक अनसुना पहलू सामने आता है और भाई तनवीर अपने प्रोजेक्ट की दुविधा खोलकर बताता है। अगले दिन नादिया तय करती है कि हर हफ़्ते एक शाम जान-बूझकर मोमबत्ती की रोशनी में बिताई जाएगी।",
    },
    paragraphs: [
      "The power cut arrived at exactly eight o'clock, as though the electricity board kept office hours. Nadia had just served the rice when the fan sighed to a stop and the whole building sank into darkness. Somewhere downstairs a child whooped with delight; somewhere above, an old woman muttered a complaint she had clearly been saving for years.",
      "Her father found the candles in the drawer where they always lived, and her brother Tanvir lit them with the ceremony of a man performing a sacred rite. Three flames, three trembling shadows on the wall. The ceiling fan's silence was the strangest part of all; after years of its whirring, the room felt oddly naked without it.",
      "“Load-shedding,” Father announced, in the tone of a judge delivering a familiar verdict. The word had entered the family's vocabulary decades before Nadia was born, and it still arrived with the weary authority of an old friend nobody had invited. On sweltering summer evenings it came nightly; in winter it mostly spared them.",
      "Instead of retreating to their separate screens — a reflex Nadia now recognised with some embarrassment — the family drifted toward the dinner table. The lentils tasted no different by candlelight, and yet everyone ate more slowly, as though the darkness demanded a different rhythm from the room.",
      "Father launched into the story of his first job, the one about an office that ran on generators and optimism. Nadia had heard it perhaps forty times; tonight she caught a detail she had somehow missed all these years — that he had quietly shared his lunch with the electrician who kept the machines alive.",
      "Tanvir, fifteen and theoretically allergic to family conversation, surprised everyone. He had been wrestling with a decision about his science-fair project, and somewhere between the candle's second hour and the rice pot's last serving, he laid the whole dilemma on the table. Nobody interrupted. Nobody reached for a phone.",
      "When the lights flickered back at half past ten, there was a moment of collective disappointment. The sudden brightness felt almost intrusive, like a stranger switching on a lamp in one's own bedroom. Mother joked that the electricity board had a poor sense of timing; Tanvir said nothing, but he was still turning his idea over, visibly, like a coin he could not pocket.",
      "Lying in bed later, Nadia thought about what the outage had managed where family meetings had always failed. It had not given them anything. It had taken something away — the endless, glittering distraction that filled every pause — and into the empty space, conversation had quietly moved in.",
      "She decided to keep one evening a week candlelit by choice. Her father approved of the thrift, her mother suspected an unfinished assignment, and Tanvir asked only whether there would be payesh. “There will be payesh,” Nadia promised — and for once, the dark felt like a plan rather than a failure.",
    ],
    vocabulary: [
      {
        word: "load-shedding",
        meaning: {
          bn: "লোডশেডিং; চাহিদা মেটাতে না পারায় বিদ্যুৎ সরবরাহ সাময়িকভাবে বন্ধ রাখা",
          en: "a planned, temporary cut in the electricity supply",
          hi: "लोडशेडिंग; बिजली की नियोजित, अस्थायी कटौती",
        },
        example: "Load-shedding arrived every evening that summer.",
      },
      {
        word: "reflex",
        meaning: {
          bn: "প্রতিবর্ত; চিন্তা না করেই করা কাজ",
          en: "an action you do automatically, without thinking",
          hi: "प्रतिवर्त; बिना सोचे-समझे किया गया काम",
        },
        example: "Reaching for her phone was pure reflex.",
      },
      {
        word: "weary",
        meaning: {
          bn: "ক্লান্ত, বিরক্তিভরা",
          en: "very tired; showing boredom or fatigue",
          hi: "थका हुआ, ऊबा हुआ",
        },
        example: "He delivered the verdict with a weary sigh.",
      },
      {
        word: "dilemma",
        meaning: {
          bn: "দ্বিধা; কঠিন দুটোর একটা বেছে নেওয়ার অবস্থা",
          en: "a difficult choice between two options",
          hi: "दुविधा; दो कठिन विकल्पों में से चुनने की स्थिति",
        },
        example: "Tanvir finally laid out his dilemma.",
      },
      {
        word: "intrusive",
        meaning: {
          bn: "অযাচিতভাবে ঢুকে পড়া, উপদ্রবজনক",
          en: "entering where it is not wanted; too noticeable",
          hi: "अतिक्रमणकारी, उपद्रवी; जहाँ नहीं चाहिए वहाँ घुसने वाला",
        },
        example: "The sudden brightness felt intrusive after the calm darkness.",
      },
      {
        word: "outage",
        meaning: {
          bn: "বিদ্যুৎ বিভ্রাট; সরবরাহ বন্ধ থাকার সময়",
          en: "a period when the power supply stops working",
          hi: "बिजली गुल रहने की अवधि",
        },
        example: "The outage lasted two and a half hours.",
      },
      {
        word: "thrift",
        meaning: {
          bn: "মিতব্যয়িতা; বাঁচিয়ে খরচ করার অভ্যাস",
          en: "careful, economical use of money or resources",
          hi: "मितव्ययिता, किफ़ायत",
        },
        example: "Her father approved of the thrift of candle nights.",
      },
      {
        word: "visibly",
        meaning: {
          bn: "প্রকটভাবে; চোখে পড়ার মতো করে",
          en: "in a way that can clearly be seen",
          hi: "स्पष्ट रूप से, दिखाई देने वाले ढंग से",
        },
        example: "He was still turning the idea over, visibly.",
      },
    ],
    quiz: [
      {
        question: {
          bn: "সেই সন্ধ্যায় পরিবারের সবাই কেন এত বেশি কথা বলল?",
          en: "Why did the family end up talking so much that evening?",
          hi: "उस शाम परिवार के लोग इतनी बातें क्यों कर पाए?",
        },
        options: [
          { bn: "নাদিয়া আগে থেকেই পরিবারের মিটিং ডেকেছিল", en: "Nadia had planned a family meeting", hi: "नादिया ने पहले से पारिवारिक बैठक बुलाई थी" },
          { bn: "বিদ্যুৎ চলে যাওয়ায় স্ক্রিনের বিভ্রান্তিগুলো সরে গিয়েছিল", en: "The power cut removed their usual distractions", hi: "बिजली जाने से स्क्रीन का विकर्षण हट गया था" },
          { bn: "বাবা তাদের জন্য গুরুত্বপূর্ণ খবর নিয়ে এসেছিলেন", en: "Father had brought important news", hi: "पिता कोई ज़रूरी ख़बर लेकर आए थे" },
          { bn: "তানভীর স্কুলের ফলাফল নিয়ে আলোচনা চেয়েছিল", en: "Tanvir wanted to discuss his exam results", hi: "तनवीर अपने परीक्षा परिणाम पर बात करना चाहता था" },
        ],
        answer: 1,
        explain: {
          bn: "গল্পের কেন্দ্রীয় পর্যবেক্ষণই এখানে: বিদ্যুৎ ‘প্রতিটা বিরতি ভরিয়ে রাখা ঝলমলে বিভ্রান্তিটা’ নিয়ে গিয়েছিল, আর সেই ফাঁকা জায়গায় কথা চুপচাপ ঢুকে পড়ে।",
          en: "This is the story's central observation: the outage took away the glittering distractions that filled every pause, and into the empty space, conversation quietly moved in.",
          hi: "यही कहानी का केंद्रीय बिंदु है: बिजली ने हर ठहराव को भरने वाले चमकीले विकर्षण हटा दिए, और उस खाली जगह में बातचीत चुपचाप घर कर गई।",
        },
      },
      {
        question: {
          bn: "“যেন বিদ্যুৎ দপ্তর অফিস টাইম মানে” — লেখক এ বলে কী বোঝাতে চেয়েছেন?",
          en: "What does 'as though the electricity board kept office hours' suggest?",
          hi: "'जैसे बिजली विभाग दफ़्तरी समय मानता हो' से लेखक क्या कहना चाहते हैं?",
        },
        options: [
          { bn: "কর্মচারীরা অত্যন্ত দায়িত্বশীল", en: "The staff are extremely responsible", hi: "कर्मचारी बहुत ज़िम्मेदार हैं" },
          { bn: "দপ্তরটি সন্ধ্যায় অতিরিক্ত কাজ করে", en: "The board works extra hours in the evening", hi: "विभाग शाम को अतिरिक्त काम करता है" },
          { bn: "আটটার পর বিদ্যুৎ ফ্রি হয়ে যায়", en: "Electricity becomes free after eight", hi: "आठ बजे के बाद बिजली मुफ़्त हो जाती है" },
          { bn: "কাটগুলো এত নিয়মিত যে মনে হয় সময়সূচি মেনেই হয়", en: "The cuts are so regular they seem scheduled", hi: "कटौतियाँ इतनी नियमित हैं कि तय समय-सारणी से होती हों" },
        ],
        answer: 3,
        explain: {
          bn: "ঠিক আটটায়, ঘড়া ধরে বিদ্যুৎ যাওয়াকে অফিস-টাইমের সঙ্গে তুলনা করা হয়েছে — কটাক্ষ যে লোডশেডিং ঘড়া ধরে নামে।",
          en: "Power failing at exactly eight is compared to office hours — a wry way of saying the cuts arrive on schedule.",
          hi: "ठीक आठ बजे बिजली जाने की तुलना दफ़्तरी समय से की गई है — व्यंग्य यह कि कटौती घड़ी देखकर होती है।",
        },
      },
      {
        question: {
          bn: "বাবার পুরনো গল্পে নাদিয়া আজ প্রথম কী শুনল?",
          en: "Which detail in her father's old story did Nadia notice for the first time?",
          hi: "पिता की पुरानी कहानी में नादिया ने आज पहली बार क्या सुना?",
        },
        options: [
          { bn: "বাবা ইলেকট্রিশিয়ানের সঙ্গে দুপুরের খাবার ভাগ করে নিতেন", en: "Her father shared his lunch with the electrician", hi: "पिता इलेक्ट्रीशियन से अपना दोपहर का खाना बाँटते थे" },
          { bn: "প্রথম দিনেই তাঁর বেতন কেটে নেওয়া হয়েছিল", en: "Her father's salary was cut on his first day", hi: "पहले ही दिन पिता का वेतन कट गया था" },
          { bn: "বাবা সবাইকে জেনারেটর চালানো শিখিয়েছিলেন", en: "Her father had taught the staff to run the generator", hi: "पिता ने सबको जनरेटर चलाना सिखाया था" },
          { bn: "বাবা একসময় চাকরি ছাড়ার কথা ভেবেছিলেন", en: "Her father had once thought of quitting", hi: "पिता ने कभी नौकरी छोड़ने की सोची थी" },
        ],
        answer: 0,
        explain: {
          bn: "লেখা আছে — সে আজ এমন এক খুঁটিনাটি ধরতে পারল যা এত বছর বাদ পড়েছিল: বাবা যে মেশিন জীবিত রাখা ইলেকট্রিশিয়ানের সঙ্গে নিজের দুপুরের খাবার ভাগ করে নিতেন।",
          en: "The text says she 'caught a detail she had somehow missed' — that he shared his lunch with the electrician who kept the machines alive.",
          hi: "पाठ कहता है कि उसने 'एक ऐसा विवरण पकड़ा जो अब तक छूटा रहा' — पिता मशीनें चालू रखने वाले इलेक्ट्रीशियन से अपना खाना बाँटते थे।",
        },
      },
      {
        question: {
          bn: "শেষে নাদিয়া কী সিদ্ধান্ত নিল?",
          en: "What decision does Nadia make at the end?",
          hi: "अंत में नादिया ने क्या फ़ैसला लिया?",
        },
        options: [
          { bn: "বিদ্যুৎ দপ্তরে অভিযোগ করবে", en: "She will complain to the electricity board", hi: "वह बिजली विभाग में शिकायत करेगी" },
          { bn: "সবার মোবাইল পুরোপুরি বন্ধ করার নিয়ম বানাবে", en: "She will ban everyone's phones outright", hi: "सबके फ़ोन पूरी तरह बंद करने का नियम बनाएगी" },
          { bn: "সপ্তাহে এক সন্ধ্যা ইচ্ছে করেই মোমবাতির আলোয় রাখবে", en: "She will keep one evening a week candlelit by choice", hi: "हर हफ़्ते एक शाम जान-बूझकर मोमबत्ती की रोशनी में रखेगी" },
          { bn: "বাড়িতে জেনারেটর কেনার পরামর্শ দেবে", en: "She will suggest buying a generator", hi: "वह जनरेटर खरीदने की सलाह देगी" },
        ],
        answer: 2,
        explain: {
          bn: "শেষ অনুচ্ছেদে স্পষ্ট: সে ঠিক করল, সপ্তাহে এক সন্ধ্যা নিজে বেছে নিয়ে মোমবাতির আলোয় কাটা হবে।",
          en: "The last paragraph states it plainly: she decided 'to keep one evening a week candlelit by choice.'",
          hi: "आख़िरी अनुच्छेद में साफ़ है: उसने तय किया कि हर हफ़्ते एक शाम अपनी इच्छा से मोमबत्ती की रोशनी में बिताई जाएगी।",
        },
      },
      {
        question: {
          bn: "“অন্ধকারটা এবার ব্যর্থতা নয়, পরিকল্পনার মতো মনে হলো” — এর অর্থ কী?",
          en: "What does 'the dark felt like a plan rather than a failure' mean?",
          hi: "'अंधेरा असफलता नहीं, योजना जैसा लगा' का क्या अर्थ है?",
        },
        options: [
          { bn: "বিদ্যুৎ দপ্তর আসলে কাট নয়, পরিকল্পনা করেই বিদ্যুৎ দেয়", en: "The electricity board actually plans supply, not cuts", hi: "बिजली विभाग दरअसल कटौती नहीं, आपूर्ति की योजना बनाता है" },
          { bn: "অন্ধকার চোখের জন্য ভালো", en: "Darkness is good for the eyes", hi: "अंधेरा आँखों के लिए अच्छा है" },
          { bn: "নাদিয়া সন্ধ্যাটা নিয়ে অপরাধবোধ অনুভব করছিল", en: "Nadia felt guilty about the evening", hi: "नादिया उस शाम को लेकर अपराधबोध महसूस कर रही थी" },
          { bn: "নিজে বেছে নেওয়া অন্ধকারের মূল্য আলাদা — সেটা ইচ্ছার ফসল", en: "Darkness you choose yourself carries a different value", hi: "स्वयं चुना अंधेरा अलग मूल्य रखता है — वह इच्छा का परिणाम है" },
        ],
        answer: 3,
        explain: {
          bn: "বিদ্যুৎ গেলে অন্ধকার ‘ব্যর্থতা’; কিন্তু নিজে বেছে নিলে সেটা ইচ্ছাকৃত পরিকল্পনা — গল্পের মোড়টা এখানেই।",
          en: "When the power fails, darkness is a failure; chosen deliberately, it becomes a plan. That shift is the story's point.",
          hi: "बिजली जाने पर अंधेरा 'असफलता' है; स्वयं चुनने पर वह योजना बन जाता है — यही कहानी का मोड़ है।",
        },
      },
    ],
  },
  {
    id: "stranded-above-the-clouds",
    level: "advanced",
    category: "travel",
    minutes: 8,
    title: {
      bn: "মেঘের দেশে আটকে পড়া",
      en: "Stranded Above the Clouds",
      hi: "बादलों के बीच फँसे",
    },
    summary: {
      bn: "মিনিটে মিনিটে সাজানো ভ্রমণসূচি নিয়ে মাহিন পাহাড়ি জেলার রাতের বাসে ওঠে, কিন্তু ভূমিধস পুরো পরিকল্পনা উল্টে দেয়। ভোর পর্যন্ত পাহাড়ের চা-দোকানে আটকে নার্স, ট্রাকচালক, ছাত্র — অচেনা মানুষেরা এক সাময়িক পরিবার হয়ে ওঠে। রাস্তা খুলতে দেরি হলেও দুই কাজিন মানতে বাধ্য হয়: ভ্রমণের সবচেয়ে সুন্দর অংশটা ঘটে গেছে ভ্রমণ শুরুর আগেই।",
      en: "Mahin boards the overnight bus to the hill district armed with an itinerary planned to the minute, but a landslide turns the journey upside down. Stranded till dawn at a mountain tea stall, strangers — a nurse, a truck driver, a student — become a temporary family. By the time the road reopens, both cousins admit the best part of the trip happened before the trip.",
      hi: "मिनट-दर-मिनट तैयार यात्रा-कार्यक्रम के साथ माहिन पहाड़ी ज़िले की रात की बस में चढ़ता है, लेकिन भूस्खलन पूरी योजना पलट देता है। भोर तक पहाड़ की चाय की दुकान पर फँसे रहने पर नर्स, ट्रक चालक और छात्र जैसे अजनबी एक अस्थायी परिवार बन जाते हैं। रास्ता खुलने तक दोनों कज़िन मानने को मजबूर होते हैं कि यात्रा का सबसे सुंदर हिस्सा यात्रा शुरू होने से पहले ही हो चुका था।",
    },
    paragraphs: [
      "Mahin had planned the trip with military precision: an overnight bus to the hill district, a hotel booking confirmed twice, and a neatly folded itinerary that he read aloud to his cousin Samir at the bus counter. “We reach at dawn,” he declared, “and we are on the trail by eight.” The universe, as any seasoned traveller eventually learns, rarely signs off on such schedules.",
      "The first four hours went smoothly. The bus climbed out of the plains, the air cooling by degrees, the conversation dwindling as passengers dozed against their rucksacks. Then, somewhere past midnight, the driver braked hard and a low murmur ran through the cabin: the road ahead was gone.",
      "A landslide — nothing theatrical, just a heap of rain-soft earth and broken shrubs — had swallowed a stretch of the hill road. No machinery could arrive before morning. The driver stepped down, scratched his head, and delivered the verdict with the practised resignation of a man who had seen many seasons defeat many schedules: everyone would wait at the tea stall a little further up.",
      "The stall was a wooden shack lit by a single bulb and an abiding sense of hospitality. Its owner, a wiry man in his sixties, took in the stranded crowd without a flicker of surprise. Within minutes water was boiling, benches were being rearranged, and an old radio was murmuring film songs into the dark.",
      "Strangers began, cautiously at first, to turn into temporary companions. A nurse shared her biscuits; a truck driver produced a chessboard from under his seat; a university student argued cheerfully with Samir about whether the mountains were better in autumn or spring. Mahin, who guarded his personal space like a family heirloom, found himself explaining his itinerary to a woman who had clearly never needed one in her life — and enjoying it.",
      "By two in the morning the tea stall had developed its own small civilisation. Someone organised the children into a sleeping corner; someone else negotiated a group rate for blankets; a quiet agreement formed that whoever woke first would wake the rest before sunrise. When the rain returned, nobody complained. They simply shifted closer together, the way people do when discomfort turns out to be shared.",
      "Dawn, when it finally arrived, was worth every minute of the delay. The clouds lay below the road like a white sea, and the stall owner pointed out a ridge where, he claimed, the sunrise set the mist on fire. Even the sleep-deprived stood up for it. Even Mahin forgot his itinerary.",
      "The road reopened at noon, and the buses moved off in an apologetic single file. By evening, Mahin and Samir were finally on the trail — a full eight hours behind schedule and strangely unbothered. “The best part of the trip happened before the trip,” Samir said. Mahin, still smelling of woodsmoke and cardamom tea, could only agree.",
    ],
    vocabulary: [
      {
        word: "itinerary",
        meaning: {
          bn: "ভ্রমণসূচি; দিন-ঘণ্টা ধরে সাজানো ভ্রমণ পরিকল্পনা",
          en: "a detailed plan of a journey",
          hi: "यात्रा-कार्यक्रम; दिन-घंटा दर दिन बनी योजना",
        },
        example: "He read the itinerary aloud at the bus counter.",
      },
      {
        word: "landslide",
        meaning: {
          bn: "ভূমিধস; পাহাড় থেকে মাটি-পাথর নেমে আসা",
          en: "a mass of earth and rock sliding down a slope",
          hi: "भूस्खलन; ढलान से मिट्टी-पत्थर खिसक आना",
        },
        example: "A landslide swallowed a stretch of the hill road.",
      },
      {
        word: "stranded",
        meaning: {
          bn: "পথে আটকে পড়া; এগোনোর উপায়হীন",
          en: "left somewhere with no way to continue travelling",
          hi: "रास्ते में फँसा हुआ; आगे बढ़ने का कोई साधन न हो",
        },
        example: "The stall owner sheltered the stranded travellers.",
      },
      {
        word: "resignation",
        meaning: {
          bn: "নিষ্প্রাণ স্বীকৃতি; না-চাইতেই মেনে নেওয়া",
          en: "calm acceptance of something unpleasant",
          hi: "सहज स्वीकृति; बिना विरोध के स्वीकार कर लेना",
        },
        example: "The driver announced the delay with practised resignation.",
      },
      {
        word: "hospitality",
        meaning: {
          bn: "আপ্যায়ন; অতিথিদের যত্ন নেওয়ার গুণ",
          en: "friendly, generous treatment of guests",
          hi: "आतिथ्य; मेहमानों का स्नेहपूर्ण स्वागत",
        },
        example: "The stall's hospitality was as steady as its tea.",
      },
      {
        word: "murmur",
        meaning: {
          bn: "মনমরা গুঞ্জন; মৃদু ফিসফিসানি",
          en: "a soft, low, continuous sound",
          hi: "बुदबुदाहट; मंद, धीमी आवाज़",
        },
        example: "An old radio murmured film songs into the dark.",
      },
      {
        word: "sleep-deprived",
        meaning: {
          bn: "ঘুমের অভাবে জর্জরিত",
          en: "suffering from a lack of sleep",
          hi: "नींद की कमी से थका हुआ",
        },
        example: "Even the sleep-deprived stood up for the sunrise.",
      },
      {
        word: "negotiate",
        meaning: {
          bn: "আলোচনার মাধ্যমে সমাধান বা দর করা",
          en: "to arrange or settle something by discussion",
          hi: "बातचीत से तय करना, मोल-भाव करना",
        },
        example: "Someone negotiated a group rate for blankets.",
      },
    ],
    quiz: [
      {
        question: {
          bn: "“পৃথিবী এমন সময়সূচিতে সই দেয় না” — লেখকের ইঙ্গিত কী?",
          en: "What does 'the universe rarely signs off on such schedules' imply?",
          hi: "'ब्रह्मांड ऐसे कार्यक्रमों पर दस्तख़त कम ही करता है' का आशय क्या है?",
        },
        options: [
          { bn: "ভ্রমণ সংস্থাকে ছুটির অনুমতি দিতে হয়", en: "Travel agencies must approve holiday plans", hi: "ट्रैवल एजेंसी को छुट्टियों की मंज़ूरी देनी पड़ती है" },
          { bn: "মাহিনের সময়সূচি সবার জন্যই অসম্ভব ছিল", en: "Mahin's schedule was impossible for everyone", hi: "माहिन का कार्यक्रम सबके लिए असंभव था" },
          { bn: "যাত্রা বিরলভাবেই পরিকল্পনার মতো চলে", en: "Journeys rarely go exactly to plan", hi: "यात्राएँ कभी-कभार ही योजना के अनुसार चलती हैं" },
          { bn: "রাতের বাস সবসময় আট ঘণ্টা দেরিতে চলে", en: "Night buses always run eight hours late", hi: "रात की बसें हमेशा आठ घंटे लेट चलती हैं" },
        ],
        answer: 2,
        explain: {
          bn: "মিনিটে মিনিটে সাজানো প্ল্যানের পরপরই এই বাক্যটা এসেছে — আগাম ইঙ্গিত যে ভাগ্য নিজের ছক মানে।",
          en: "The line follows the minute-by-minute plan — an early hint that fate keeps its own timetable.",
          hi: "मिनट-दर-मिनट योजना के तुरंत बाद यह पंक्ति आती है — पहले से संकेत कि नियति अपनी ही समय-सारणी रखती है।",
        },
      },
      {
        question: {
          bn: "যাত্রায় দেরির আসল কারণ কী ছিল?",
          en: "What actually caused the delay?",
          hi: "यात्रा में देरी का असली कारण क्या था?",
        },
        options: [
          { bn: "ভূমিধসে রাস্তার একাংশ ঢেকে গিয়েছিল", en: "A landslide covered part of the road", hi: "भूस्खलन से सड़क का हिस्सा ढक गया था" },
          { bn: "বাসের ইঞ্জিন নষ্ট হয়ে গিয়েছিল", en: "The bus engine broke down", hi: "बस का इंजन ख़राब हो गया था" },
          { bn: "পাহাড়ে প্রবল বন্যা নেমেছিল", en: "Severe floods hit the hills", hi: "पहाड़ों में भीषण बाढ़ आई थी" },
          { bn: "চালক রাস্তা ভুলে চলে গিয়েছিলেন", en: "The driver took the wrong road", hi: "चालक रास्ता भटक गया था" },
        ],
        answer: 0,
        explain: {
          bn: "মাঝরাতে ব্রেক কষার পর স্পষ্ট করা হয়: ভূমিধসের নরম মাটি-ঝোপের স্তূপ রাস্তার একটা অংশ গিলে ফেলেছিল।",
          en: "After the midnight braking, the text is clear: a landslide of rain-soft earth had swallowed a stretch of the road.",
          hi: "आधी रात ब्रेक लगाने के बाद पाठ साफ़ है: भूस्खलन की नरम मिट्टी ने सड़क का हिस्सा निगल लिया था।",
        },
      },
      {
        question: {
          bn: "চা-দোকানের মালিক আটকে পড়া যাত্রীদের কীভাবে গ্রহণ করলেন?",
          en: "How did the stall owner receive the stranded travellers?",
          hi: "दुकानदार ने फँसे हुए यात्रियों का स्वागत कैसे किया?",
        },
        options: [
          { bn: "তাদের কাছে অতিরিক্ত টাকা চাইলেন", en: "He charged them extra", hi: "उनसे अतिरिक्त पैसे लिए" },
          { bn: "অবাক ও বিরক্ত হয়ে উঠলেন", en: "He seemed surprised and annoyed", hi: "वह हैरान और नाराज़ लगा" },
          { bn: "অন্য কোথাও আশ্রয় খুঁজতে বললেন", en: "He told them to find shelter elsewhere", hi: "उसने कहीं और आश्रय ढूँढने को कहा" },
          { bn: "একটুও বিস্মিত না হয়ে আপ্যায়ন করলেন", en: "He welcomed them without a flicker of surprise", hi: "उसने बिना थोड़ी भी हैरानी के स्वागत किया" },
        ],
        answer: 3,
        explain: {
          bn: "লেখা আছে — ‘বিস্ময়ের কোনো সুর ছাড়াই’ তিনি ভিড়টাকে ভেতরে নিলেন; কয়েক মিনিটেই পানি ফুটছিল, বেঞ্চ সাজানো হচ্ছিল।",
          en: "The text says he took in the crowd 'without a flicker of surprise'; within minutes water was boiling and benches were rearranged.",
          hi: "पाठ कहता है कि उसने भीड़ को 'बिना थोड़ी भी हैरानी' भीतर लिया; कुछ ही मिनटों में पानी उबलने लगा और बेंच लग गईं।",
        },
      },
      {
        question: {
          bn: "“চা-দোকানটির নিজস্ব ছোট সভ্যতা গড়ে উঠল” — এর মানে কী?",
          en: "What does 'the tea stall had developed its own small civilisation' suggest?",
          hi: "'चाय की दुकान की अपनी छोटी सभ्यता बन गई' का क्या संकेत है?",
        },
        options: [
          { bn: "দোকানটি ছিল প্রাচীন ও ঐতিহাসিক", en: "The stall was ancient and historic", hi: "दुकान प्राचीन और ऐतिहासिक थी" },
          { bn: "অপরিচিতরা সাময়িক, সুসংগঠিত এক কমিউনিটি হয়ে উঠেছিল", en: "Strangers had formed a temporary, organised community", hi: "अजनबी एक अस्थायी, व्यवस्थित समुदाय बन गए थे" },
          { bn: "যাত্রীরা ইতিহাস নিয়ে বিতর্ক করছিল", en: "The travellers were debating history", hi: "यात्री इतिहास पर बहस कर रहे थे" },
          { bn: "শিশুরা মাটির ছোট ছোট ঘর বানাচ্ছিল", en: "The children were building tiny houses", hi: "बच्चे छोटे-छोटे घर बना रहे थे" },
        ],
        answer: 1,
        explain: {
          bn: "‘সভ্যতা’ শব্দটা রসিকতা করে ব্যবহৃত — শোবার কোণ, কম্বলের দর, ‘যে আগে ওঠে বাকিদের ডাকবে’ এমন যত্নের শৃঙ্খলা গড়ে উঠেছিল।",
          en: "'Civilisation' is used playfully: a sleeping corner, negotiated blankets, an agreement that whoever woke first would wake the rest.",
          hi: "'सभ्यता' शब्द खिलंदापन में है: सोने का कोना, तय क़ीमत पर कंबल, और 'जो पहले जागे बाकियों को जगाएगा' की सहमति।",
        },
      },
      {
        question: {
          bn: "শেষে মাহিন দেরি নিয়ে আর বিরক্ত হলো না কেন?",
          en: "Why did Mahin stop minding the delay by the end?",
          hi: "अंत तक माहिन को देरी की चिंता क्यों नहीं रही?",
        },
        options: [
          { bn: "হোটেল টাকা ফেরত দিয়েছিল", en: "The hotel refunded the booking", hi: "होटल ने पैसे लौटा दिए थे" },
          { bn: "তার ট্রেইলের চেয়ে পাহাড়ই ভালো লাগছিল", en: "He preferred the mountains to the trail", hi: "उसे ट्रेल से पहाड़ ज़्यादा अच्छे लगने लगे" },
          { bn: "অপরিচিতদের সঙ্গে কাটা রাতটাই ভ্রমণের সেরা অংশ হয়ে উঠেছিল", en: "The night among strangers had become the best part of the trip", hi: "अजनबियों के साथ बिताई रात ही यात्रा का सबसे सुंदर हिस्सा बन गई थी" },
          { bn: "বাস সংস্থা ক্ষতিপূরণ দিয়েছিল", en: "The bus company paid compensation", hi: "बस कंपनी ने मुआवज़ा दिया" },
        ],
        answer: 2,
        explain: {
          bn: "সমিরের মন্তব্যই উত্তর — ‘ভ্রমণের সেরা অংশটা ঘটেছিল ভ্রমণের আগে’ — আর কাঠ-ধোঁয়ার গন্ধ নিয়ে মাহিন তাতে সহমত।",
          en: "Samir's line settles it — 'the best part of the trip happened before the trip' — and Mahin, smelling of woodsmoke, agrees.",
          hi: "समीर की पंक्ति उत्तर दे देती है — 'यात्रा का सबसे सुंदर हिस्सा यात्रा से पहले ही हुआ' — और लकड़ी के धुएँ की गंध लिए माहिन सहमत है।",
        },
      },
    ],
  },
  {
    id: "the-eleventh-hour-correction",
    level: "advanced",
    category: "work",
    minutes: 7,
    title: {
      bn: "শেষ মুহূর্তের সংশোধন",
      en: "The Eleventh-Hour Correction",
      hi: "आख़िरी क्षण का सुधार",
    },
    summary: {
      bn: "বড় ক্লায়েন্ট প্রেজেন্টেশনের আগের রাতে জুনিয়র বিশ্লেষক তাহসিন ছকে একটা ছোট কিন্তু বিপজ্জনক ভুল খুঁজে পায় — চুপ করে ঠিক করবে, নাকি শেষ মুহূর্তে স্বীকার করবে? টিম লিড রেজা ভুলটা লুকানোর বদলে খোলাখুলি মেনে নেওয়ার সিদ্ধান্ত নেন, আর ক্লায়েন্টের প্রতিক্রিয়া দুজনকেই ভাবিয়ে তোলে। একটা হলুদ স্টিকি নোট হয়ে ওঠে তাহসিনের ক্যারিয়ারের শিক্ষা।",
      en: "On the eve of a major client presentation, junior analyst Tahsin spots a small but dangerous error in the figures: fix it silently, or confess at the eleventh hour? Her lead, Reza, chooses to disclose the mistake openly — and the client's reaction teaches them both something. A yellow sticky note becomes the lesson of her career.",
      hi: "बड़े क्लाइंट प्रेज़ेंटेशन से एक रात पहले जूनियर विश्लेषक तहसीन को आँकड़ों में एक छोटी लेकिन ख़तरनाक ग़लती मिलती है: चुपचाप ठीक कर दे, या आख़िरी क्षण पर स्वीकार करे? उनकी टीम लीड रेज़ा ग़लती छिपाने की बजाय खुले तौर पर मानने का फ़ैसला करते हैं — और क्लाइंट की प्रतिक्रिया दोनों को कुछ सिखा देती है। एक पीला स्टिकी नोट उसके करियर की सबक़ बन जाता है।",
    },
    paragraphs: [
      "The presentation was scheduled for nine the next morning, and by eight in the evening the office floor had emptied, leaving only Tahsin, a proofreading checklist and the hum of the central air conditioning. She had volunteered for the final review — partly out of diligence, partly, she admitted to herself, for the small vanity of seeing her own charts on the big screen.",
      "On page fourteen, her cursor stopped. A growth figure in the quarterly summary was wrong — not dramatically wrong, not absurd, but wrong by exactly the kind of margin nobody questions. The rest of the deck was flawless — confident projections, elegant charts. Somebody, probably weeks ago, had typed last year's number into this year's column, and the error had sailed through three reviews without raising an eyebrow.",
      "Her options sat in front of her like a pair of scales. She could correct the figure silently and let the presentation proceed; the client would never know, and no one would ever be blamed. Or she could raise it now, at the eleventh hour, and set fire to a comfortable evening that several senior colleagues had already gone home from.",
      "She called her team lead. Reza answered on the fourth ring with the careful voice of a man expecting bad news, and when she finished explaining, there was a pause long enough for Tahsin to hear a television murmuring somewhere behind him.",
      "“You're certain?” he asked at last. She was. Another pause. Then, unexpectedly: “Good catch. Send me the corrected slide and a one-line note on what happened. We show them the fixed figure, and we tell them it was corrected. No hiding.”",
      "The next morning the presentation ran smoothly until the correction came up. Reza mentioned it plainly — an error found in final review, fixed before delivery — and moved on within a single breath. The client's director, a woman famous for her ferocious questions, nodded slowly and said something nobody had scripted: “Firms that find their own mistakes are the firms we keep.”",
      "Afterwards, a senior colleague teased Reza about airing dirty laundry in front of a client. Reza shrugged. “A hidden error is a debt,” he said. “It collects interest. We simply paid early.” He was smiling when he said it. Tahsin wrote the sentence on a yellow sticky note that would outlive three of her laptops.",
      "Months later, when the team expanded, Reza put Tahsin's name forward to lead the review process. In his recommendation he wrote: “She found the number. More importantly, she never looked for a way around it.” The sticky note is pinned above her desk even now — a small, faded reminder that integrity, unlike figures, never needs correcting.",
    ],
    vocabulary: [
      {
        word: "diligence",
        meaning: {
          bn: "পরিশ্রমী সতর্কতা; গুতিগুতো করে করা যত্ন",
          en: "careful, steady effort in one's work",
          hi: "लगन; सावधानी से किया गया परिश्रम",
        },
        example: "She proofread the slides out of diligence.",
      },
      {
        word: "at the eleventh hour",
        meaning: {
          bn: "একদম শেষ মুহূর্তে",
          en: "at the last possible moment",
          hi: "आख़िरी क्षण पर",
        },
        example: "She raised the problem at the eleventh hour.",
      },
      {
        word: "sail through",
        meaning: {
          bn: "অনায়াসে, কারো নজর এড়িয়ে পার হয়ে যাওয়া",
          en: "to pass easily, without being noticed or challenged",
          hi: "आसानी से, बिना किसी के ध्यान गए पार हो जाना",
        },
        example: "The error sailed through three reviews.",
      },
      {
        word: "ferocious",
        meaning: {
          bn: "প্রচণ্ড, ভয়ংকর",
          en: "fierce, intense",
          hi: "उग्र, प्रचंड",
        },
        example: "The director was famous for her ferocious questions.",
      },
      {
        word: "air dirty laundry",
        meaning: {
          bn: "ভেতরের দোষত্রুটি সবার সামনে তুলে ধরা",
          en: "to make private problems or faults public",
          hi: "भीतर की कमियाँ सबके सामने लाना",
        },
        example: "He teased Reza about airing dirty laundry before a client.",
      },
      {
        word: "outlive",
        meaning: {
          bn: "অপেক্ষা বেশি দিন টিকে থাকা",
          en: "to last or live longer than something else",
          hi: "किसी और चीज़ से अधिक समय टिकना",
        },
        example: "The sticky note would outlive three of her laptops.",
      },
      {
        word: "integrity",
        meaning: {
          bn: "নৈতিক সততা ও দৃঢ়তা",
          en: "the quality of being honest with strong moral principles",
          hi: "ईमानदारी; दृढ़ नैतिक सिद्धांत",
        },
        example: "Integrity, unlike figures, never needs correcting.",
      },
      {
        word: "put one's name forward",
        meaning: {
          bn: "কারো নাম প্রস্তাব বা সুপারিশ করা",
          en: "to recommend someone for a role or honour",
          hi: "किसी का नाम किसी पद के लिए सुझाना",
        },
        example: "Reza put Tahsin's name forward to lead the reviews.",
      },
    ],
    quiz: [
      {
        question: {
          bn: "তাহসিন ভুলটা আদৌ ধরতে পারল কীসের জন্য?",
          en: "Why did Tahsin notice the error at all?",
          hi: "तहसीन को ग़लती बिल्कुल क्यों दिखी?",
        },
        options: [
          { bn: "ক্লায়েন্ট আগেই ইঙ্গিত দিয়েছিল", en: "The client had hinted at it", hi: "क्लाइंट ने पहले ही इशारा कर दिया था" },
          { bn: "সফটওয়্যার ভুলটা আপনাআপনি ধরে ফেলেছিল", en: "The software flagged it automatically", hi: "सॉफ़्टवेयर ने उसे स्वतः पकड़ लिया था" },
          { bn: "সে নিজেই শেষ রিভিউয়ের দায়িত্ব নিয়েছিল", en: "She had volunteered to do the final review", hi: "उसने स्वयं अंतिम समीक्षा का ज़िम्मा लिया था" },
          { bn: "রেজা ফোনে জানিয়ে দিয়েছিলেন", en: "Reza had told her over the phone", hi: "रेज़ा ने फ़ोन पर बता दिया था" },
        ],
        answer: 2,
        explain: {
          bn: "প্রথম অনুচ্ছেদে বলা হয়েছে, সে শেষ রিভিউয়ের জন্য নিজেই দায়িত্ব নিয়েছিল — তার পরিশ্রমী সতর্কতাই ভুলটা ধরিয়ে দেয়।",
          en: "Paragraph one says she 'had volunteered for the final review' — her diligence is what catches the error.",
          hi: "पहले अनुच्छेद में है कि उसने अंतिम समीक्षा के लिए स्वेच्छा से हामी भरी — उसकी मेहनत ही ग़लती पकड़ लेती है।",
        },
      },
      {
        question: {
          bn: "ভুলটা বিশেষ করে ‘বিপজ্জনক’ ছিল কেন?",
          en: "What made the error especially dangerous?",
          hi: "ग़लती विशेष रूप से ख़तरनाक क्यों थी?",
        },
        options: [
          { bn: "এটা প্রতিটি পাতায় উপস্থিত ছিল", en: "It appeared on every page", hi: "वह हर पृष्ठ पर मौजूद थी" },
          { bn: "ক্লায়েন্ট নিজেই সংখ্যাটা লিখেছিল", en: "The client had written it themselves", hi: "वह ग़लती क्लाइंट ने ही की थी" },
          { bn: "তা ঠিক করতে অনেক খরচ হতো", en: "Fixing it would have been very expensive", hi: "उसे ठीक करना बहुत महँगा पड़ता" },
          { bn: "সংখ্যাটা এত বিশ্বাসযোগ্য দেখাত যে কেউ প্রশ্ন করত না", en: "The figure looked plausible enough that nobody would question it", hi: "आँकड़ा इतना विश्वसनीय लगता था कि कोई शक नहीं करता" },
        ],
        answer: 3,
        explain: {
          bn: "লেখা আছে — ‘এমন মাত্রার ভুল যা কেউ প্রশ্ন করে না’ — বড় নয়, অস্বাভাবিকও নয়, তাই তিনটা রিভিউ পেরিয়ে গেছে।",
          en: "The text calls it 'exactly the kind of margin nobody questions' — big enough to matter, normal enough to slip through three reviews.",
          hi: "पाठ कहता है — 'ठीक वैसा अंतर जिस पर कोई सवाल नहीं उठाता' — काफ़ी बड़ा, फिर भी सामान्य, इसलिए तीन समीक्षाएँ पार हो गईं।",
        },
      },
      {
        question: {
          bn: "রেজা বিষয়টা কীভাবে সামলালেন?",
          en: "How did Reza handle the situation?",
          hi: "रेज़ा ने मामला कैसे सँभाला?",
        },
        options: [
          { bn: "সংশোধিত সংখ্যা দেখিয়ে, সংশোধনের কথা খোলাখুলি বললেন", en: "He showed the corrected figure and disclosed the fix openly", hi: "उन्होंने सुधारा हुआ आँकड़ा दिखाकर सुधार खुले तौर पर बताया" },
          { bn: "তাহসিনকে চুপ থাকতে বললেন", en: "He asked Tahsin to stay quiet", hi: "उन्होंने तहसीन से चुप रहने को कहा" },
          { bn: "প্রেজেন্টেশন অনির্দিষ্টকালের জন্য স্থগিত করলেন", en: "He postponed the presentation indefinitely", hi: "उन्होंने प्रेज़ेंटेशन अनिश्चितकाल के लिए टाल दिया" },
          { bn: "দায় জুনিয়র বিশ্লেষকদের ঘাড়ে চাপালেন", en: "He blamed the junior analysts", hi: "उन्होंने जूनियर विश्लेषकों पर दोष डाला" },
        ],
        answer: 0,
        explain: {
          bn: "রেজার নির্দেশ: ‘সংশোধিত সংখ্যা দেখাবো, আর বলবো যে সংশোধন করা হয়েছে। লুকানো যাবে না।’ পরদিন তিনি ঠিক তা-ই করেন।",
          en: "Reza's instruction: 'We show them the fixed figure, and we tell them it was corrected. No hiding.' The next morning he does exactly that.",
          hi: "रेज़ा का निर्देश: 'हम ठीक किया आँकड़ा दिखाएँगे और बताएँगे कि सुधार किया गया। छिपाना नहीं।' अगली सुबह उन्होंने वही किया।",
        },
      },
      {
        question: {
          bn: "ক্লায়েন্টের পরিচালকের মন্তব্য থেকে কী বোঝা যায়?",
          en: "What does the client's director imply?",
          hi: "क्लाइंट की निदेशक के कथन से क्या संकेत मिलता है?",
        },
        options: [
          { bn: "চুক্তিটা এখন ঝুঁকিতে পড়েছে", en: "The contract is now at risk", hi: "अब ठेका ख़तरे में है" },
          { bn: "নিজের ভুল নিজে ধরতে পারা প্রতিষ্ঠানের ওপর ভরসা করা যায়", en: "Firms that catch their own mistakes can be trusted", hi: "अपनी ग़लतियाँ ख़ुद पकड़ने वाली फ़र्मों पर भरोसा किया जा सकता है" },
          { bn: "ছোট ভুল ব্যাপারই নয়", en: "Small errors simply do not matter", hi: "छोटी ग़लतियों से कोई फ़र्क़ नहीं पड़ता" },
          { bn: "রিভিউ প্রক্রিয়া অতিরিক্ত ধীর", en: "The review process is too slow", hi: "समीक्षा प्रक्रिया बहुत धीमी है" },
        ],
        answer: 1,
        explain: {
          bn: "তাঁর সরাসরি কথা: ‘যে প্রতিষ্ঠান নিজের ভুল নিজে খোঁজে, সেই প্রতিষ্ঠানই আমরা ধরে রাখি’ — অর্থাৎ স্বচ্ছতা বিশ্বাস বাড়ায়।",
          en: "Her line is direct: 'Firms that find their own mistakes are the firms we keep' — transparency builds trust.",
          hi: "उनकी पंक्ति सीधी है: 'जो फ़र्में अपनी ग़लतियाँ ख़ुद ढूँढती हैं, हम उन्हीं को रखते हैं' — पारदर्शिता भरोसा बनाती है।",
        },
      },
      {
        question: {
          bn: "“লুকানো ভুল ঋণের মতো — সুদ ধরে” — এর অর্থ কী?",
          en: "What does 'a hidden error is a debt; it collects interest' mean?",
          hi: "'छिपी ग़लती क़र्ज़ है; सूद देती है' का क्या अर्थ है?",
        },
        options: [
          { bn: "ভুল ঠিক করলে সঙ্গে সঙ্গে টাকা লাগে", en: "Fixing errors always costs money immediately", hi: "ग़लती सुधारने में हमेशा तुरंत पैसा लगता है" },
          { bn: "ক্লায়েন্ট অবশ্যই ক্ষতিপূরণ চাইবে", en: "The client will certainly demand compensation", hi: "क्लाइंट ज़रूर मुआवज़ा माँगेगा" },
          { bn: "চাপা পড়ে থাকা ভুল সময়ের সঙ্গে আরও ক্ষতিকর হয়ে ওঠে", en: "Concealed mistakes grow more damaging over time", hi: "छिपी ग़लतियाँ समय के साथ और नुक़सानदेह होती जाती हैं" },
          { bn: "রেজা আগে ব্যাংকে কাজ করতেন", en: "Reza once worked in banking", hi: "रेज़ा पहले बैंक में काम करते थे" },
        ],
        answer: 2,
        explain: {
          bn: "ঋণের সুদের মতো, লুকানো ভুলও সময়ের সঙ্গে বাড়তে থাকে — তাই আগে স্বীকার করাই ভালো (‘আমরা কেবল আগেই পরিশোধ করলাম’)।",
          en: "Like interest on a debt, a concealed error compounds with time — which is why admitting it early is better ('we simply paid early').",
          hi: "क़र्ज़ के सूद की तरह छिपी ग़लती समय के साथ बढ़ती है — इसलिए जल्दी स्वीकारना ही बेहतर है ('हमने बस जल्दी चुका दिया')।",
        },
      },
    ],
  },
  {
    id: "the-last-jamdani-loom",
    level: "advanced",
    category: "culture",
    minutes: 7,
    title: {
      bn: "শেষ জামদানির তাঁত",
      en: "The Last Jamdani Loom",
      hi: "आख़िरी जामदानी का करघा",
    },
    summary: {
      bn: "শহর থেকে বিয়ের আমন্ত্রণে গ্রামে ফেরা রাবেয়া দাদির তাঁতের পাশে বসে এক শিল্পের ধীর মৃত্যুর গল্প শোনে — প্রতিবেশী বুনন-পরিবারগুলো একে একে তাঁত বিক্রি করে দিচ্ছে। কারো দোষ নেই; ‘ঐতিহ্য ভাড়া দেয় না।’ এক ভিডিও পোস্ট করা থেকেই শুরু হয় নতুন অধ্যায় — ঢাকার তরুণ এক ডিজাইনারের সঙ্গে ন্যায্য চুক্তি, আর রাবেয়ার নিজেই শিক্ষানবিশ হয়ে যাওয়া।",
      en: "Home from the city for a wedding, Rabeya sits by her grandmother's loom and hears the slow death of a craft: the weaving families around them are selling out one by one. No one is to blame — 'heritage does not pay rent.' Then a posted video leads to a young Dhaka designer, a fair deal, and, to her own surprise, Rabeya asking to be apprenticed.",
      hi: "शहर से शादी में गाँव लौटी रबेया दादी के करघे के पास बैठकर एक कला की धीमी मौत की कहानी सुनती है — आस-पास के बुनकर परिवार एक-एक करके करघे बेच रहे हैं। किसी पर दोष नहीं — 'विरासत किराया नहीं देती।' फिर एक अपलोड किए गए वीडियो से नई कहानी शुरू होती है — ढाका की एक युवा डिज़ाइनर, एक इंसाफ़ भरा सौदा, और अपने ही हैरानी में रबेया का शिक्षु बनना।",
    },
    paragraphs: [
      "The loom stood in the courtyard like a patient animal — wooden, ribbed, older than anyone in the household could remember. Rabeya's grandmother had worked it for fifty years, and her fingers moved across the threads with the certainty of a person reading a familiar book in the dark. Its warp and weft had been renewed so many times that, her grandmother liked to joke, the only original thing left was the patience.",
      "Rabeya had come home from the city for a cousin's wedding, and on the first afternoon she found herself sitting on the low stool where generations of learners had once sat. “Hold this shuttle,” her grandmother said, pressing it into her hands. “Feel the weight. A motif is not drawn; it is carried.”",
      "Jamdani, the old woman explained, was weaving and embroidery happening at once: patterns floated onto the cloth by hand, thread by thread, while the fabric still hung on the loom. A single sari could consume months of quiet labour. “The cloth remembers every hand that has touched it,” she said, “which is why we do not hurry.”",
      "Yet the courtyard was quieter than Rabeya remembered from childhood. Of the eight weaving families in her grandmother's stories, three had sold their looms; their frames stood under tarpaulins, or had been split for firewood. The young had left for the city — garment factories with fixed salaries, shops, screens. “Nobody blames them,” her grandmother said, tightening a thread. “Heritage does not pay rent.”",
      "That night Rabeya did something her grandmother considered mildly scandalous: she filmed the loom at work and posted the clip online. It gathered curious strangers, then admiring comments, then — two weeks later — a message from a young designer in Dhaka who wanted to visit the workshop in person.",
      "The designer arrived in winter. She handled the cloth the way one handles a museum piece, then asked questions that were neither sentimental nor dismissive: about wages, about time, about whether traditional motifs could live on scarves, shirts and curtains — things the modern world actually bought. Her grandmother answered shrewdly, and the discussion stretched late into the evening over tea and pithas.",
      "The arrangement, when it finally came together, respected both sides. Fewer orders, but paid fairly; the grandmother would weave the intricate pieces, while Rabeya — to her own astonishment — asked to be apprenticed. “I have ten thousand followers,” she said, “but I cannot make one motif. It is time I carried something.”",
      "By the following monsoon the courtyard had a new rhythm: two shuttles instead of one. Neighbours began dropping in again, first to gossip, then, hesitantly, to ask whether their own daughters might learn. The loom, patient as ever, seemed entirely unsurprised by any of it.",
    ],
    vocabulary: [
      {
        word: "loom",
        meaning: {
          bn: "তাঁত; কাপড় বোনার কাঠের কাঠামো",
          en: "a frame on which cloth is woven",
          hi: "करघा; जिस पर कपड़ा बुना जाता है",
        },
        example: "The loom stood in the courtyard like a patient animal.",
      },
      {
        word: "motif",
        meaning: {
          bn: "নকশা; বারবার ফিরে আসা অলংকরণ-রূপ",
          en: "a repeated decorative pattern or design",
          hi: "नक्शा; बार-बार आने वाला अलंकरण रूप",
        },
        example: "A motif is not drawn; it is carried.",
      },
      {
        word: "shuttle",
        meaning: {
          bn: "শাটল; তাঁতে সুতো এপাশ-ওপাশ নেওয়ার যন্ত্র",
          en: "a tool that carries the thread back and forth in weaving",
          hi: "शटल; बुनाई में धागा इधर-उधर ले जाने वाला यंत्र",
        },
        example: "Hold this shuttle and feel its weight.",
      },
      {
        word: "intricate",
        meaning: {
          bn: "নিখুঁত ও জটিল; সূক্ষ্ম কারুকাজের",
          en: "very detailed and finely made",
          hi: "सूक्ष्म और जटिल; बारीक कारीगरी वाला",
        },
        example: "The grandmother wove the most intricate pieces.",
      },
      {
        word: "heritage",
        meaning: {
          bn: "ঐতিহ্য; প্রজন্ম থেকে প্রজন্মে আসা সম্পদ",
          en: "traditions and values passed down through generations",
          hi: "विरासत; पीढ़ी दर पीढ़ी आई परंपराएँ",
        },
        example: "'Heritage does not pay rent,' she said.",
      },
      {
        word: "dismissive",
        meaning: {
          bn: "অবজ্ঞাভরে উড়িয়ে দেওয়া, তোচগ্য না ভাবা",
          en: "showing that you think something is unimportant",
          hi: "उपेक्षापूर्ण; तुच्छ समझने वाला",
        },
        example: "Her questions were neither sentimental nor dismissive.",
      },
      {
        word: "shrewdly",
        meaning: {
          bn: "কৌশলী বুদ্ধি দিয়ে; বাস্তবমুখী চাতুর্যে",
          en: "in a clever, practical way",
          hi: "चतुराई से; व्यावहारिक बुद्धि से",
        },
        example: "Her grandmother answered shrewdly.",
      },
      {
        word: "apprentice",
        meaning: {
          bn: "শিক্ষানবিশ হওয়া; উস্তাদের কাছে হাতে-কলমে শেখা",
          en: "to learn a skill by working with a master",
          hi: "शिक्षु बनना; उस्ताद के साथ काम करके सीखना",
        },
        example: "Rabeya asked to be apprenticed to her grandmother.",
      },
    ],
    quiz: [
      {
        question: {
          bn: "“নকশা আঁকা হয় না, বহন করা হয়” — দাদির কথার মানে কী?",
          en: "What does 'a motif is not drawn; it is carried' mean?",
          hi: "'नक्शा बनाया नहीं जाता, ढोया जाता है' — दादी का आशय क्या है?",
        },
        options: [
          { bn: "নকশা পরে কাপড়ে ছাপা হয়", en: "Motifs are printed onto the cloth later", hi: "नक्शे बाद में कपड़े पर छापे जाते हैं" },
          { bn: "মেশিন নকশা আঁকতে পারে না", en: "Machines cannot draw motifs", hi: "मशीन नक्शे नहीं बना सकती" },
          { bn: "বুননের সময়ই হাতে হাতে প্যাটার্ন গড়ে ওঠে", en: "Patterns are built by hand while the weaving is happening", hi: "बुनाई के दौरान ही नक्शे हाथ से गढ़े जाते हैं" },
          { bn: "নকশা মুখস্থ রাখতে হয়", en: "Motifs must be memorised", hi: "नक्शे रटने पड़ते हैं" },
        ],
        answer: 2,
        explain: {
          bn: "তৃতীয় অনুচ্ছেদে ব্যাখ্যা আছে: তাঁতে কাপড় ঝুলে থাকতেই সুতো ধরে ধরে হাতে প্যাটার্ন বসানো হয় — বুনন আর কারুকাজ একসঙ্গে।",
          en: "The third paragraph explains it: patterns are floated onto the cloth by hand, thread by thread, while it is still on the loom — weaving and embroidery at once.",
          hi: "तीसरा अनुच्छेद समझाता है: कपड़ा करघे पर ही रहते धागा-दर-धागा हाथ से नक्शा बैठाया जाता है — बुनाई और कढ़ाई एक साथ।",
        },
      },
      {
        question: {
          bn: "প্রতিবেশীর তিনটি বুনন-পরিবার তাঁত কেন বিক্রি করে দিয়েছিল?",
          en: "Why had three neighbouring weaving families sold their looms?",
          hi: "पड़ोस के तीन बुनकर परिवारों ने करघे क्यों बेच दिए?",
        },
        options: [
          { bn: "তাঁতগুলো মেরামতের ঊর্ধ্বে ভেঙে গিয়েছিল", en: "Their looms had broken beyond repair", hi: "उनके करघे टूटकर ठीक नहीं हो सकते थे" },
          { bn: "তরুণরা শহরে স্থায়ী আয়ের পথ বেছেছিল", en: "The young had left for steadier incomes in the city", hi: "युवा शहर की स्थिर आय की ओर चले गए थे" },
          { bn: "সরকার বুননকাজ নিষিদ্ধ করেছিল", en: "The government had banned weaving", hi: "सरकार ने बुनाई प्रतिबंधित कर दी थी" },
          { bn: "গ্রাহকরা জামদানি একেবারে ছেড়ে দিয়েছিল", en: "Customers had completely stopped wanting Jamdani", hi: "ग्राहक जामदानी से पूरी तरह मुँह मोड़ चुके थे" },
        ],
        answer: 1,
        explain: {
          bn: "চতুর্থ অনুচ্ছেদ: তরুণরা গার্মেন্টস, দোকান, স্ক্রিনের পথে চলে গেছে; দাদির স্বীকারোক্তি — ‘ঐতিহ্য ভাড়া দেয় না।’",
          en: "Paragraph four: the young left for garment factories, shops, screens; the grandmother concedes, 'Heritage does not pay rent.'",
          hi: "चौथा अनुच्छेद: युवा गार्मेंट फ़ैक्ट्री, दुकानों, स्क्रीन की ओर चले गए; दादी स्वीकारती हैं — 'विरासत किराया नहीं देती।'",
        },
      },
      {
        question: {
          bn: "রাবেয়ার ভিডিও পোস্ট করা দাদির কাছে ‘সামান্য অগতানুগত্য’ কেন ছিল?",
          en: "Why did her grandmother find Rabeya's posted video mildly scandalous?",
          hi: "रबेया का अपलोड किया वीडियो दादी को हल्का-सा चौंकाने वाला क्यों लगा?",
        },
        options: [
          { bn: "ভিডিওতে কাপড়ের দাম দেখানো হয়েছিল", en: "The video revealed the cloth's prices", hi: "वीडियो में कपड़े के दाम दिख गए थे" },
          { bn: "ভিডিওতে বিয়ের অনুষ্ঠান দেখা যাচ্ছিল", en: "The video showed the wedding ceremony", hi: "वीडियो में शादी की रस्म दिख रही थी" },
          { bn: "সে দাদির অনুমতি ছাড়াই তাঁত বিক্রির বিজ্ঞাপন দিয়েছিল", en: "She had advertised the loom for sale without asking", hi: "उसने बिना पूछे करघा बेचने का विज्ञापन कर दिया" },
          { bn: "পরিবারের বাইরের মানুষ এখন অনলাইনে হাতের কাজটা দেখে ফেলবে", en: "Outsiders beyond the family would now see the handwork online", hi: "परिवार से बाहर के लोग अब हाथ का काम ऑनलाइन देख लेंगे" },
        ],
        answer: 3,
        explain: {
          bn: "পুরনো প্রজন্মের চোখে তাঁতের কাজ পরিবারের ভেতরের ব্যাপার; অচেনা হাজারো মানুষের সামনে তা তুলে ধরাই ‘অগতানুগত্য’ — নিষেধ নয়, শুধু চমক।",
          en: "To the older generation the loom was family business; showing it to thousands of strangers online is the mild shock — not forbidden, just startling.",
          hi: "पुरानी पीढ़ी की नज़र में करघा परिवार का विषय था; उसे हज़ारों अजनबियों को ऑनलाइन दिखाना ही हल्का सदमा था — वर्जित नहीं, बस चौंकाने वाला।",
        },
      },
      {
        question: {
          bn: "ঢাকার ডিজাইনারের প্রশ্নগুলো এক পর্যটকের প্রশ্ন থেকে আলাদা কীভাবে?",
          en: "How were the designer's questions different from a tourist's?",
          hi: "डिज़ाइनर के सवाल किसी पर्यटक के सवालों से किस तरह अलग थे?",
        },
        options: [
          { bn: "সেগুলো ছিল বাস্তবসম্মত — মজুরি, সময় আর আধুনিক পণ্য নিয়ে", en: "They were practical — about wages, time and products the modern world buys", hi: "वे व्यावहारिक थे — मज़दूरी, समय और आधुनिक उत्पादों को लेकर" },
          { bn: "সে ভয়ংকরভাবে দরদাম শুরু করেছিল", en: "She began bargaining fiercely", hi: "वह ज़ोर-शोर से मोल-भाव करने लगी" },
          { bn: "সে পুরো তাঁতটাই কিনতে চেয়েছিল", en: "She wanted to buy the whole loom", hi: "वह पूरा करघा ख़रीदना चाहती थी" },
          { bn: "সে কেবল ছবি তুলে চলে গিয়েছিল", en: "She only took photographs and left", hi: "वह बस तस्वीरें लेकर चली गई" },
        ],
        answer: 0,
        explain: {
          bn: "ষষ্ঠ অনুচ্ছেদে বলা — প্রশ্নগুলো ‘আবেগঘন নয়, অবজ্ঞাপূর্ণও নয়’: মজুরি, সময়, আর স্কার্ফ-শার্ট-পর্দায় প্যাটার্ন বাঁচানো যায় কি না।",
          en: "Paragraph six: her questions were 'neither sentimental nor dismissive' — wages, time, and whether motifs could live on scarves, shirts, curtains.",
          hi: "छठा अनुच्छेद: उसके सवाल 'न भावुक थे, न उपेक्षापूर्ण' — मज़दूरी, समय, और क्या नक्शे स्कार्फ़, शर्ट, पर्दों पर जीवित रह सकते हैं।",
        },
      },
      {
        question: {
          bn: "গল্পের কেন্দ্রীয় ভাবনা কোনটি?",
          en: "What is the central idea of the story?",
          hi: "कहानी का केंद्रीय विचार क्या है?",
        },
        options: [
          { bn: "শিল্পকলা বাঁচাতে হলে কোনো বদল আসা চলবে না", en: "Crafts must stay untouched to survive", hi: "कला को बचाना है तो कोई बदलाव नहीं आना चाहिए" },
          { bn: "সোশ্যাল মিডিয়া পুরনো শিল্প ধ্বংস করে", en: "Social media destroys old crafts", hi: "सोशल मीडिया पुरानी कलाओं को नष्ट करता है" },
          { bn: "ঐতিহ্য আর আধুনিক বাজার যখন একে অন্যের সঙ্গে মানিয়ে নেয়, শিল্প বাঁচে", en: "Crafts survive when tradition and the modern market adapt to each other", hi: "जब परंपरा और आधुनिक बाज़ार एक-दूसरे के साथ ढल जाते हैं, कला बचती है" },
          { bn: "বুননকাজ কেবল পরিবারের ভেতরেই থাকা উচিত", en: "Weaving should remain within families only", hi: "बुनाई केवल परिवार के भीतर ही रहनी चाहिए" },
        ],
        answer: 2,
        explain: {
          bn: "সমাধানটাই বার্তা: কম অর্ডার কিন্তু ন্যায্য মজুরি, নতুন পণ্যে পুরনো প্যাটার্ন, আর শহুরে নাতনির হাতে-কলমে শেখা — একপক্ষ আরেক পক্ষের সঙ্গে মানিয়ে নেওয়া।",
          en: "The deal itself is the message: fewer orders but fair pay, old motifs on new products, and the city granddaughter apprenticing — each side adapting to the other.",
          hi: "समझौता ही संदेश है: कम ऑर्डर पर उचित वेतन, नए उत्पादों पर पुराने नक्शे, और शहरी नातिन का शिक्षु बनना — दोनों पक्षों का एक-दूसरे के साथ ढलना।",
        },
      },
    ],
  },
  {
    id: "the-night-the-stars-came-back",
    level: "advanced",
    category: "science",
    minutes: 7,
    title: {
      bn: "যে রাতে তারারা ফিরে এসেছিল",
      en: "The Night the Stars Came Back",
      hi: "जिस रात तारे लौट आए",
    },
    summary: {
      bn: "পনেরো বছর ধরে জ্যোতির্বিজ্ঞানী ড. সুলতানা দেখে এসেছেন শহরের কৃত্রিম আলোয় রাতের আকাশ কীভাবে মিলিয়ে যাচ্ছে। শান্তিনগরের বিজ্ঞান উৎসবে তিনি অস্বাভাবিক এক প্রস্তাব দেন: এক ঘণ্টার জন্য পুরো শহরের বাতি নিভিয়ে দাও। ফলটা কেউ ভাবতেও পারেনি — সেই এক ঘণ্টা শেষে শুধু আকাশ নয়, শহরটাই বদলে যায়।",
      en: "For fifteen years, astronomer Dr. Sultana has watched artificial light erase the night sky. At Shantinagar's science festival she makes an unusual request: switch off the entire town for one hour. What happens surprises everyone — and by the end of that hour, it is not only the sky that has changed.",
      hi: "पंद्रह साल से खगोलविद् डॉ. सुलताना देख रही हैं कि कैसे कृत्रिम रोशनी रात के आसमान को मिटा रही है। शांतिनगर के विज्ञान उत्सव में वे एक असामान्य प्रस्ताव रखती हैं: एक घंटे के लिए पूरे शहर की बत्तियाँ बुझा दो। नतीजा किसी ने सोचा भी नहीं था — उस एक घंटे के बाद सिर्फ़ आसमान नहीं, पूरा शहर बदल जाता है।",
    },
    paragraphs: [
      "Dr. Sultana had spent fifteen years pointing telescopes at the sky, and fifteen years watching the sky disappear. Not literally — the stars were still up there — but behind the orange glow that hung over every town like a permanent, artificial dawn. Her colleagues called it light pollution; the children she visited called it nothing at all, because they had never known anything else.",
      "When she arrived in Shantinagar to open the district science festival, she made an unusual proposal. “For one hour on Saturday night,” she told the organising committee, “switch off the town. Every non-essential light. Streetlamps can go dark, shops can close their shutters early. I promise you something you have never truly seen.”",
      "The committee was skeptical. Shopkeepers worried about thieves, parents worried about falls, and one councillor asked, with genuine confusion, what exactly people were supposed to look at in the dark. “The sky,” said Dr. Sultana, “which has been running a free show for several billion years.”",
      "Saturday came. At eight o'clock, lights began to wink out across the town — shop by shop, street by street, like a city quietly exhaling. A hush fell over the lanes; the town smelled of cooking smoke and jasmine. For the first minute the darkness was disorienting; eyes raised on brightness needed time to remember how to see.",
      "Then someone near the school field gasped. Stretching overhead, faint at first and then astonishing, lay a hazy river of light — thousands of stars crowded into a luminous band. The Milky Way, which most of the audience had met only in textbooks, had simply been waiting behind the glare.",
      "Dr. Sultana let the silence do its work before she explained the science. Harsh, unshielded lights, she said, do not merely hide the stars: they pull migratory birds off course, exhaust the insects that pollinate our crops, and scramble the human body clock that evolution tuned to sunlight and starlight. “We did not design our nights,” she said. “We simply forgot to question them.”",
      "The town council, to its credit, did not stop at applause. Within the year, Shantinagar had replaced its naked streetlamps with shielded fixtures that threw light down at the pavement instead of up at the sky, and dimmed themselves after midnight. The electricity bill, the treasurer noted with quiet satisfaction, fell by a fifth.",
      "The dark hour survived as a monthly festival. Children now point out constellations their parents never learned at school, and researchers suspect the migrating birds cross overhead with a little less confusion. For Dr. Sultana, though, the deepest change is quieter: a generation that no longer believes the night sky belongs to other places.",
    ],
    vocabulary: [
      {
        word: "light pollution",
        meaning: {
          bn: "আলোক দূষণ; অতিরিক্ত কৃত্রিম আলোয় রাতের আকাশ ঢাকা পড়া",
          en: "excess artificial light that hides the night sky",
          hi: "प्रकाश प्रदूषण; अतिरिक्त कृत्रिम रोशनी से रात का आसमान ढक जाना",
        },
        example: "Light pollution has erased the stars over most towns.",
      },
      {
        word: "skeptical",
        meaning: {
          bn: "সংশয়ী; সন্দেহের চোখে দেখা",
          en: "doubting that something is true or will work",
          hi: "संशयवादी; शक करने वाला",
        },
        example: "The committee was skeptical of the plan.",
      },
      {
        word: "disorienting",
        meaning: {
          bn: "দিগ্বিভ্রান্তকর; দিক-জ্ঞান কেড়ে নেয় এমন",
          en: "making you lose your sense of direction",
          hi: "दिशाभ्रम पैदा करने वाला",
        },
        example: "The sudden darkness was disorienting.",
      },
      {
        word: "luminous",
        meaning: {
          bn: "উজ্জ্বল, আলোকিত",
          en: "shining or glowing with light",
          hi: "प्रकाशमान, चमकीला",
        },
        example: "A luminous band of stars stretched overhead.",
      },
      {
        word: "migratory",
        meaning: {
          bn: "পরিযায়ী; ঋতু বদলে স্থান বদলায় এমন",
          en: "moving from place to place with the seasons",
          hi: "प्रवासी; ऋतु के अनुसार स्थान बदलने वाला",
        },
        example: "Bright lights pull migratory birds off course.",
      },
      {
        word: "pollinate",
        meaning: {
          bn: "পরাগায়ন ঘটানো; ফল-বীজ ধরার জন্য পরাগ স্থানান্তর করা",
          en: "to carry pollen between plants so they can produce fruit and seeds",
          hi: "परागित करना; पौधों में फल-बीज बनने के लिए पराग पहुँचाना",
        },
        example: "Insects that pollinate our crops are exhausted by glare.",
      },
      {
        word: "unshielded",
        meaning: {
          bn: "খোলা, অনাবৃত; যে আলো সব দিকে ছড়িয়ে পড়ে",
          en: "not covered, so light spreads in every direction",
          hi: "बिना आवरण का; जिसकी रोशनी हर तरफ़ फैलती है",
        },
        example: "Unshielded lamps throw light up at the sky.",
      },
      {
        word: "glare",
        meaning: {
          bn: "ঝলসানো তীব্র আলো",
          en: "very strong, unpleasantly bright light",
          hi: "तेज़ चकाचौंध",
        },
        example: "The Milky Way had been waiting behind the glare.",
      },
    ],
    quiz: [
      {
        question: {
          bn: "ড. সুলতানার অস্বাভাবিক প্রস্তাবটা কী ছিল?",
          en: "What was Dr. Sultana's unusual proposal?",
          hi: "डॉ. सुलताना का असामान्य प्रस्ताव क्या था?",
        },
        options: [
          { bn: "শহরে বড় টেলিস্কোপ বসানো", en: "Install a large telescope in the town", hi: "शहर में बड़ी दूरबीन लगाना" },
          { bn: "এক ঘণ্টার জন্য অপ্রয়োজনীয় সব বাতি নিভিয়ে দেওয়া", en: "Switch off all non-essential lights for one hour", hi: "एक घंटे के लिए ग़ैर-ज़रूरी सारी बत्तियाँ बुझा देना" },
          { bn: "উৎসবটা স্কুল মাঠে সরিয়ে নেওয়া", en: "Move the festival to the school field", hi: "उत्सव को स्कूल के मैदान में ले जाना" },
          { bn: "রাতে দোকান খোলা রাখা নিষিদ্ধ করা", en: "Ban shops from staying open at night", hi: "रात में दुकानें खोलने पर रोक लगाना" },
        ],
        answer: 1,
        explain: {
          bn: "দ্বিতীয় অনুচ্ছেদে তাঁর সরাসরি কথা: ‘শনিবার রাতে এক ঘণ্টার জন্য শহর বন্ধ করে দাও — অপ্রয়োজনীয় সব বাতি।’",
          en: "Paragraph two quotes her directly: 'For one hour on Saturday night, switch off the town. Every non-essential light.'",
          hi: "दूसरा अनुच्छेद उनके शब्द देता है: 'शनिवार रात एक घंटे के लिए शहर बुझा दो। हर ग़ैर-ज़रूरी बत्ती।'",
        },
      },
      {
        question: {
          bn: "শহরবাসী আগে কখনো উজ্জ্বল আকাশ নিয়ে অভিযোগ করেনি কেন?",
          en: "Why had townspeople never complained about the glowing sky?",
          hi: "शहरवालों ने चमकते आसमान की शिकायत कभी क्यों नहीं की?",
        },
        options: [
          { bn: "তাদের জ্যোতির্বিজ্ঞান পছন্দ ছিল না", en: "They did not like astronomy", hi: "उन्हें खगोल विज्ञान पसंद नहीं था" },
          { bn: "তারা বিশ্বাস করত আলোটা ফসল রক্ষা করে", en: "They believed the glow protected the crops", hi: "उन्हें लगता था कि रोशनी फ़सलों को बचाती है" },
          { bn: "কেউ কোনোদিন উৎসবেই যায়নি", en: "Nobody had ever attended the festival", hi: "कोई कभी उत्सव में नहीं गया था" },
          { bn: "তারা অন্য কোনো আকাশ কখনো দেখেনি", en: "They had never known a different sky", hi: "उन्होंने कोई और आसमान कभी देखा ही नहीं था" },
        ],
        answer: 3,
        explain: {
          bn: "প্রথম অনুচ্ছেদের শেষ বাক্যটাই চাবিকাঠি: বাচ্চারা একে ‘কিছুই’ ডাকে না, ‘কারণ তারা অন্য কিছু জানেই না।’",
          en: "The last line of paragraph one is the key: children call it nothing 'because they have never known anything else.'",
          hi: "पहले अनुच्छेद की अंतिम पंक्ति चाबी है: बच्चे इसे कुछ नहीं कहते, 'क्योंकि उन्होंने कभी और कुछ देखा ही नहीं।'",
        },
      },
      {
        question: {
          bn: "ড. সুলতানার ব্যাখ্যা অনুযায়ী খোলা-আলোর ল্যাম্প কী ক্ষতি করে?",
          en: "According to Dr. Sultana, what harm do unshielded lights do?",
          hi: "डॉ. सुलताना के अनुसार, बिना आवरण की बत्तियाँ क्या हानि करती हैं?",
        },
        options: [
          { bn: "পরিযায়ী পাখি ভটকায়, পরাগায়নকারী পোকা ক্লান্ত করে, মানুষের জৈবিক ঘড়ি এলোমেলো করে", en: "They disorient migratory birds, exhaust pollinating insects and scramble human body clocks", hi: "प्रवासी पक्षियों को भटकाती, पराग ले जाने वाले कीटों को थकाती और मानव जैविक घड़ी बिगाड़ती हैं" },
          { bn: "শুধু জ্যোতির্বিজ্ঞানীদের দূরবীন নষ্ট করে", en: "They only ruin astronomers' telescopes", hi: "वे केवल खगोलविदों की दूरबीन ख़राब करती हैं" },
          { bn: "বিদ্যুৎ কোম্পানির ব্যবসা কমায়", en: "They reduce the electricity company's business", hi: "वे बिजली कंपनी का कारोबार घटाती हैं" },
          { bn: "আসলে কোনো ক্ষতিই করে না", en: "In truth, they do no harm at all", hi: "सच में वे कोई हानि नहीं करतीं" },
        ],
        answer: 0,
        explain: {
          bn: "ষষ্ঠ অনুচ্ছেদে তিনটি ক্ষতির কথা বলা হয়েছে — পাখি পথ হারায়, ফসলের পোকা ক্লান্ত হয়, আর সূর্য-তারায় মানানসই মানুষের জৈবিক ঘড়ি এলোমেলো হয়।",
          en: "Paragraph six lists three harms: birds pulled off course, pollinating insects exhausted, and the human body clock — tuned to sun and stars — scrambled.",
          hi: "छठा अनुच्छेद तीन हानियाँ गिनाता है: पक्षी रास्ता भटकते हैं, पराग ले जाने वाले कीट थक जाते हैं, और सूरज-तारों से तालमेल वाली मानव जैविक घड़ी बिगड़ जाती है।",
        },
      },
      {
        question: {
          bn: "পরে পৌরসভা কী করল?",
          en: "What did the town council do afterwards?",
          hi: "बाद में नगर परिषद ने क्या किया?",
        },
        options: [
          { bn: "নিরাপত্তার জন্য আরও বাতি বসাল", en: "It installed more lights for safety", hi: "सुरक्षा के लिए और बत्तियाँ लगवाईं" },
          { bn: "রাতে বাইরে যাওয়া নিষিদ্ধ করল", en: "It banned going out at night", hi: "उसने रात में बाहर जाना प्रतिबंधित किया" },
          { bn: "এমন আবৃত ল্যাম্প বসাল যা মাঝরাতের পর ম্লান হয়ে যায়", en: "It fitted shielded lamps that dim after midnight", hi: "उसने आवरणयुक्त लाइटें लगाईं जो आधी रात बाद मंद हो जाती हैं" },
          { bn: "মাসিক উৎসব বাতিল করল", en: "It cancelled the monthly festival", hi: "उसने मासिक उत्सव रद्द कर दिया" },
        ],
        answer: 2,
        explain: {
          bn: "সপ্তম অনুচ্ছেদ: ‘খোলা’ ল্যাম্পের বদলে এমন ফিক্সচার বসানো হয় যা আলো ফেলে ফুটপাতের দিকে, নাকি আকাশের দিকে — আর মাঝরাতে আলো ম্লান হয়ে যায়।",
          en: "Paragraph seven: naked lamps were replaced by shielded fixtures throwing light down at the pavement, dimming after midnight.",
          hi: "सातवाँ अनुच्छेद: खुली बत्तियों की जगह ऐसी लाइटें लगीं जो रोशनी फ़ुटपाथ की ओर गिराती हैं और आधी रात बाद मंद हो जाती हैं।",
        },
      },
      {
        question: {
          bn: "শেষ অনুচ্ছেদের ‘গভীরতম পরিবর্তন’ বলতে লেখক কী বুঝিয়েছেন?",
          en: "What does the writer mean by 'the deepest change' in the final paragraph?",
          hi: "अंतिम अनुच्छेद में 'सबसे गहरा बदलाव' से लेखक का क्या आशय है?",
        },
        options: [
          { bn: "বিদ্যুৎ বিল কমে যাওয়া", en: "The lower electricity bill", hi: "कम हुआ बिजली का बिल" },
          { bn: "নতুন প্রজন্ম আর ভাবে না তারার আকাশ ‘অন্য শহরের’ ব্যাপার", en: "A generation no longer believes the night sky belongs to other places", hi: "नई पीढ़ी अब नहीं सोचती कि तारों भरा आसमान किसी और जगह की चीज़ है" },
          { bn: "শান্তিনগরে পর্যটকের সংখ্যা বেড়েছে", en: "More tourists now visit Shantinagar", hi: "अब शांतिनगर में पर्यटक बढ़ गए हैं" },
          { bn: "পরিষদের জনপ্রিয়তা বেড়েছে", en: "The council has become more popular", hi: "परिषद अधिक लोकप्रिय हो गई है" },
        ],
        answer: 1,
        explain: {
          bn: "শেষ বাক্যেই উত্তর: এমন এক প্রজন্ম যা ‘আর বিশ্বাস করে না রাতের আকাশ অন্য জায়গার সম্পত্তি।’",
          en: "The final sentence answers it: a generation 'that no longer believes the night sky belongs to other places.'",
          hi: "अंतिम वाक्य उत्तर देता है: ऐसी पीढ़ी 'जो अब मानती ही नहीं कि रात का आसमान दूसरी जगहों की संपत्ति है।'",
        },
      },
    ],
  },
  {
    id: "grandmothers-first-signature",
    level: "advanced",
    category: "inspire",
    minutes: 8,
    title: {
      bn: "দাদির প্রথম সই",
      en: "Grandmother's First Signature",
      hi: "दादी का पहला हस्ताक्षर",
    },
    summary: {
      bn: "একষট্টি বছর বয়সে আমিনা সারা জীবন চলেছেন অন্যের চোখে — দাম, চিঠি, এমনকি নিজের ওষুধের নির্দেশও পড়ে শুনতে হতো। ভুল ডোজ খেয়ে এক ভয়ের রাত কাটার পর তিনি গোপনে নাতনির পুরনো বই নিয়ে বর্ণমালা শেখা শুরু করেন। তিন মাস পর দোকানের সাইনবোর্ড, আর কিছুদিন পর নাতির স্কুলের ফর্মে নিজের হাতের সই — দেরিতে শেখা এই পাঠ পুরো পরিবারকে বদলে দেয়।",
      en: "At sixty-one, Amina has spent her life seeing the world through other people's eyes — prices, letters, even her own medicine instructions read out to her. After a frightening night caused by a mis-taken dose, she secretly begins learning the alphabet from her granddaughter's old books. Three months later comes a shop signboard, then her own signature on a school form — and a lesson that changes the whole family.",
      hi: "इकसठ साल की उम्र में आमिना ने पूरी ज़िंदगी दूसरों की आँखों से दुनिया देखी है — दाम, चिट्ठियाँ, यहाँ तक कि अपनी दवा के निर्देश भी सुनकर समझने पड़ते थे। ग़लत खुराक लेने की एक डरावनी रात के बाद वे चुपके से नातिन की पुरानी किताबों से वर्णमाला सीखना शुरू करती हैं। तीन महीने बाद दुकान का साइनबोर्ड, फिर स्कूल के फ़ॉर्म पर अपने हाथ का हस्ताक्षर — और देर से सीखा यह पाठ पूरे परिवार को बदल देता है।",
    },
    paragraphs: [
      "For sixty-one years, Amina had navigated the world through other people's eyes. Shopkeepers read prices to her, neighbours read letters from her sons in the city, and even the instructions on her own medicine bottles lived in the memory of whoever happened to be kind that day. She carried the arrangement with dignity — and privately, with the ache of a door she had never been given the key to.",
      "The turning point arrived without drama. A doctor prescribed new tablets, her granddaughter read out the instructions, and Amina, priding herself on her memory, repeated them: one after dinner. At two in the morning she woke dizzy and frightened, and understood what had happened — memory had quietly split one dose into two, and she had taken the tablet after dinner and again before bed. No one's fault, exactly. That was the trouble. There was nobody to blame, and nobody who could fix it but herself.",
      "The following week, while the household napped, she carried her granddaughter's old schoolbooks to the kitchen and began with the alphabet, sounding out letters like a child learning to whistle. Her granddaughter caught her at it — and after one startled heartbeat quietly pulled up a chair and became her first teacher.",
      "Progress was slow and humbling. Letters swapped places, rules she had spoken all her life turned out to be written differently, and her hand cramped around the pencil. There were afternoons of stubborn tears. But she had raised four children on less sleep and more patience than this, and she refused to let a book outlast her.",
      "In the third month came the first small miracle: a signboard read silently, unaided, outside the corner shop. It said nothing important — “Fresh fish today” — yet Amina stood before it for a full minute, doing the quiet arithmetic of a new life. Words, it turned out, had been everywhere, waiting for her all along.",
      "She practised on everything: rice sacks, bus destination boards, the small print on the medicine box — that box above all, until she could read her own instructions without borrowing anyone's morning. Her daughter-in-law stopped calling it “Amma's hobby” and began asking her to read the family's messages aloud in the evening, a small ceremony everyone had come to look forward to.",
      "When her grandson's school sent home a form for guardians, Amina filled it in herself and signed the bottom line — a slow, deliberate signature, each letter standing up straight like a student at assembly. The teacher's glance lingered on it, and Amina met the glance without flinching. “My granddaughter taught me,” she said. “She had a good teacher herself, once.”",
      "She is seventy now. On Friday afternoons she sits in the courtyard with three other grandmothers and a borrowed primer, sounding out sentences together and laughing at their own mistakes. Asked why she began so late, she gives the same answer every time: “I could not read the door. So I knocked until it opened.”",
    ],
    vocabulary: [
      {
        word: "navigate",
        meaning: {
          bn: "(রূপক) কঠিন কোনো জগৎ ঘুরে বেড়ানো, পথ খুঁজে নেওয়া",
          en: "to find one's way through something difficult",
          hi: "(लाक्षणिक) कठिन परिस्थिति में रास्ता निकालना",
        },
        example: "She had navigated the world through other people's eyes.",
      },
      {
        word: "dosage",
        meaning: {
          bn: "ওষুধের মাত্রা বা ডোজ",
          en: "the amount of medicine to be taken",
          hi: "खुराक; दवा की मात्रा",
        },
        example: "The dosage lived in other people's memory.",
      },
      {
        word: "humbling",
        meaning: {
          bn: "বিনয় শেখায় এমন; অহংকার ভাঙায় এমন",
          en: "making you feel modest rather than proud",
          hi: "विनम्र बनाने वाला; अहंकार तोड़ने वाला",
        },
        example: "Progress was slow and humbling.",
      },
      {
        word: "unaided",
        meaning: {
          bn: "নিজের চেষ্টায়, সাহায্য ছাড়া",
          en: "without any help",
          hi: "बिना किसी सहायता के",
        },
        example: "She read the signboard unaided.",
      },
      {
        word: "deliberate",
        meaning: {
          bn: "ধীর, সচেতন ও ইচ্ছাকৃত",
          en: "slow, careful and intentional",
          hi: "सोचा-समझा, जानबूझकर किया हुआ",
        },
        example: "Her signature was slow and deliberate.",
      },
      {
        word: "linger",
        meaning: {
          bn: "বিলম্ব করে থেকে যাওয়া; দৃষ্টি পড়ে থাকা",
          en: "to stay somewhere longer than expected",
          hi: "ठहर जाना; देर तक टिके रहना",
        },
        example: "The teacher's glance lingered on the signature.",
      },
      {
        word: "flinch",
        meaning: {
          bn: "চমকে বা ভয়ে মুখ ফিরিয়ে নেওয়া",
          en: "to make a small backward movement from fear or shock",
          hi: "घबराकर पीछे हटना",
        },
        example: "She met the glance without flinching.",
      },
      {
        word: "primer",
        meaning: {
          bn: "প্রাথমিক পাঠ্যপুস্তক; বর্ণপরিচয় বই",
          en: "a simple first book for teaching reading",
          hi: "प्राथमिक पाठ्यपुस्तक; वर्णमाला की किताब",
        },
        example: "They practised together from a borrowed primer.",
      },
    ],
    quiz: [
      {
        question: {
          bn: "আমিনাকে পড়তে শেখার দিকে ঠেলে দেওয়া ঘটনাটা কী ছিল?",
          en: "What event pushed Amina towards learning to read?",
          hi: "आमिना को पढ़ना सीखने की ओर कौन-सी घटना ले गई?",
        },
        options: [
          { bn: "নাতি স্কুলে ভালো ফল করেছিল", en: "Her grandson did well at school", hi: "उसका नाती स्कूल में अच्छा कर रहा था" },
          { bn: "ডাক্তার পড়তে শিখতে বলেছিলেন", en: "Her doctor told her to learn to read", hi: "डॉक्टर ने पढ़ना सीखने को कहा था" },
          { bn: "ভুল ডোজ খেয়ে কাটা এক ভয়ের রাত", en: "A frightening night caused by a wrongly repeated dose", hi: "ग़लत खुराक दोहराने से बीती एक डरावनी रात" },
          { bn: "পুরনো চিঠিগুলো হারিয়ে গিয়েছিল", en: "Her old letters had been lost", hi: "उसकी पुरानी चिट्ठियाँ खो गई थीं" },
        ],
        answer: 2,
        explain: {
          bn: "দ্বিতীয় অনুচ্ছেদ: স্মৃতির ভরসায় সে ট্যাবলেট দুবার খেয়ে ফেলে; রাত দুটোয় মাথা ঘুরতে থাকলে সে বোঝে — ঠিক করতে পারবে একমাত্র সে নিজেই।",
          en: "Paragraph two: relying on memory, she takes the tablet twice; dizzy at two in the morning, she realises only she can fix this.",
          hi: "दूसरा अनुच्छेद: याद पर भरोसा करते हुए वह गोली दो बार ले लेती हैं; दो बजे चक्कर महसूस होता है तो समझ आता है कि यह केवल वे ही ठीक कर सकती हैं।",
        },
      },
      {
        question: {
          bn: "পড়ার ‘প্রথম ক্ষুদ্র অলৌকিক ঘটনা’ কোনটি ছিল?",
          en: "What was the 'first small miracle' of reading?",
          hi: "पढ़ाई का 'पहला छोटा चमत्कार' क्या था?",
        },
        options: [
          { bn: "দোকানের সাইনবোর্ড সম্পূর্ণ নিজে নিজে পড়া", en: "Reading the shop signboard entirely by herself", hi: "दुकान का साइनबोर्ड पूरी तरह ख़ुद पढ़ लेना" },
          { bn: "বর্ণমালার বই শেষ করা", en: "Finishing the alphabet book", hi: "वर्णमाला की किताब पूरी करना" },
          { bn: "ছেলেকে প্রথম চিঠি লেখা", en: "Writing her first letter to her son", hi: "बेटे को पहली चिट्ठी लिखना" },
          { bn: "শিক্ষকের মন্তব্য পড়া", en: "Reading the teacher's comments", hi: "शिक्षक की टिप्पणी पढ़ लेना" },
        ],
        answer: 0,
        explain: {
          bn: "পঞ্চম অনুচ্ছেদ: কোণার দোকানের বাইরে ‘আজ তাজা মাছ’ — এই সাইনবোর্ডটাই প্রথম, নিজের চেষ্টায়, চুপচাপ পড়া লেখা।",
          en: "Paragraph five: the corner shop's sign — 'Fresh fish today' — is the first text she reads silently and unaided.",
          hi: "पाँचवाँ अनुच्छेद: कोने की दुकान का 'आज ताज़ा मछली' साइनबोर्ड ही पहला पाठ है जिसे वे बिना मदद, चुपचाप पढ़ लेती हैं।",
        },
      },
      {
        question: {
          bn: "ওষুধের বাক্সের ছোট অক্ষরে আমিনা সবচেয়ে বেশি অভ্যাস করলেন কেন?",
          en: "Why did Amina practise above all on the medicine box?",
          hi: "आमिना ने दवा के डिब्बे पर सबसे ज़्यादा अभ्यास क्यों किया?",
        },
        options: [
          { bn: "ওটাই ছিল তাঁর কাছের সবচেয়ে কঠিন লেখা", en: "It was the hardest text she owned", hi: "वह उनकी सबसे कठिन पाठ्यसामग्री थी" },
          { bn: "মূল বিপদটাই এসেছিল ওষুধের নির্দেশ না পড়তে পারা থেকে", en: "The original danger had come from unread medicine instructions", hi: "मूल ख़तरा ही बिना पढ़ी दवा के निर्देशों से आया था" },
          { bn: "নাতনি প্রতিদিন অনুশীলন করাত", en: "Her granddaughter made her practise daily", hi: "नातिन रोज़ अभ्यास करवाती थी" },
          { bn: "পরিবার ওষুধের দোকান চালাত", en: "Her family ran a pharmacy", hi: "उनका परिवार दवा की दुकान चलाता था" },
        ],
        answer: 1,
        explain: {
          bn: "ষষ্ঠ অনুচ্ছেদ: ‘ওই বাক্সই সবার আগে — যতক্ষণ না নিজের নির্দেশ অন্যের সকাল ধার না নিয়ে পড়তে পারে।’ ভয়ের উৎসটাই জয়ের জায়গা হয়ে ওঠে।",
          en: "Paragraph six: 'that box above all, until she could read her own instructions without borrowing anyone's morning.' The source of fear becomes the site of victory.",
          hi: "छठा अनुच्छेद: 'वह डिब्बा सबसे ऊपर — जब तक वे किसी की सुबह उधार लिए बिना अपने निर्देश न पढ़ लें।' डर का स्रोत ही जीत की जगह बन जाता है।",
        },
      },
      {
        question: {
          bn: "পরিবারের মনোভাব বদলে যাওয়াটা কোন দৃশ্যে ধরা পড়েছে?",
          en: "Which detail shows the family's attitude changing?",
          hi: "कौन-सा विवरण परिवार के बदलते रवैये को दिखाता है?",
        },
        options: [
          { bn: "ছেলেরা তাঁকে শহরের পাঠশালায় ভর্তি করায়", en: "Her sons enrol her in a city school", hi: "बेटे उन्हें शहर के स्कूल में भर्ती कराते हैं" },
          { bn: "পরিবার ওষুধের বাক্সটা লুকিয়ে রাখে", en: "The family hides the medicine box", hi: "परिवार दवा का डिब्बा छुपा लेता है" },
          { bn: "নাতনি লজ্জায় শেখানো বন্ধ করে দেয়", en: "Her granddaughter stops teaching out of embarrassment", hi: "नातिन शर्मिंदगी में सिखाना बंद कर देती है" },
          { bn: "শাশুড়ি ‘আম্মুর শখ’ বলা বাদ দিয়ে নিজেই পড়তে শোনার অনুরোধ করতে থাকেন", en: "Her daughter-in-law stops calling it 'Amma's hobby' and asks her to read aloud", hi: "बहू 'अम्मा का शौक' कहना छोड़ देती है और उनसे ज़ोर से पढ़वाने लगती है" },
        ],
        answer: 3,
        explain: {
          bn: "ষষ্ঠ অনুচ্ছেদেই পরিবর্তন: ‘শখ’ থেকে পরিবারের সন্ধ্যার অনুষ্ঠান — বার্তা পড়ার দায়িত্ব এখন দাদির।",
          en: "Paragraph six shows the shift: from 'hobby' to an evening family ritual where she reads the messages aloud.",
          hi: "छठा अनुच्छेद बदलाव दिखाता है: 'शौक' से सांझ की पारिवारिक रस्म तक, जहाँ वे संदेश ज़ोर से पढ़ती हैं।",
        },
      },
      {
        question: {
          bn: "“দরজার লেখা পড়তে পারতাম না, তাই খোলা পর্যন্ত কড়া নেড়েছি” — এই উপমার অর্থ?",
          en: "What does 'I could not read the door. So I knocked until it opened.' mean?",
          hi: "'मैं दरवाज़ा नहीं पढ़ सकती थी। इसलिए खुलने तक दस्तक देती रही' का आशय?",
        },
        options: [
          { bn: "তিনি একসময় সত্যিই বাড়ির বাইরে আটকে ছিলেন", en: "She was once literally locked out of her home", hi: "वे कभी सचमुच घर के बाहर बंद हो गई थीं" },
          { bn: "বাধা না ভাঙা পর্যন্ত অবিরাম চেষ্টা চালিয়ে গেছেন", en: "She kept trying persistently until the barrier gave way", hi: "वे बाधा टूटने तक लगातार कोशिश करती रहीं" },
          { bn: "দরজা শেখা, বই শেখার চেয়ে সহজ", en: "Doors are easier to learn than books", hi: "दरवाज़े किताबों से आसान होते हैं" },
          { bn: "তিনি প্রতিবেশীদের ওপর অনেকটাই নির্ভরশীল ছিলেন", en: "She depended heavily on her neighbours", hi: "वे पड़ोसियों पर बहुत निर्भर थीं" },
        ],
        answer: 1,
        explain: {
          bn: "দরজা = অপঠিত জগৎ; কড়া নাড়া = নিরলস অনুশীলন। অর্থাৎ — অক্ষরের দেয়াল ভেদ করতে তাঁর ধৈর্যই ছিল চাবি।",
          en: "The door stands for the unread world; knocking for relentless practice. Her patience was the key through the wall of illiteracy.",
          hi: "दरवाज़ा = अपठित संसार; दस्तक = अथक अभ्यास। यानी निरक्षरता की दीवार तोड़ने में उनका धैर्य ही चाबी था।",
        },
      },
    ],
  },
];

export const LIBRARY_STORIES: LibraryStory[] = [...BEGINNER, ...INTERMEDIATE, ...ADVANCED];

/** Display order of the six library categories. */
export const LIBRARY_CATEGORIES: LibraryCategory[] = [
  "daily",
  "travel",
  "work",
  "culture",
  "science",
  "inspire",
];

/** Look up a catalog story by its stable slug. */
export function getLibraryStory(id: string): LibraryStory | undefined {
  return LIBRARY_STORIES.find((s) => s.id === id);
}

/**
 * Convert a catalog story into the AI story contract (ListeningStoryContent),
 * resolving trilingual text with the current locale. The English paragraphs
 * stay untouched — only title/summary/quiz text is localized.
 */
export function toStoryContent(story: LibraryStory, locale: string): ListeningStoryContent {
  return {
    title: pickLang(story.title, locale),
    level: story.level,
    story: [...story.paragraphs],
    banglaSummary: pickLang(story.summary, locale),
    questions: story.quiz.map((q) => ({
      question: pickLang(q.question, locale),
      options: q.options.map((o) => pickLang(o, locale)),
      answer: q.answer,
      explanation: pickLang(q.explain, locale),
    })),
  };
}

// ---- completion tracking (localStorage "bolo_listening_done_v1") ----

const DONE_KEY = "bolo_listening_done_v1";
const DONE_EVENT = "bolo_listening_done_changed";

/** Subscribable snapshot source for useSyncExternalStore consumers. */
let doneCache: string[] | null = null;

/** Read the list of completed story ids. Effects-only — never during first render. */
export function readDoneIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(DONE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}

/** Hydration-safe external-store snapshot (stable reference until it changes). */
export function subscribeDoneIds(onChange: () => void): () => void {
  if (typeof window === "undefined") return () => undefined;
  window.addEventListener(DONE_EVENT, onChange);
  return () => window.removeEventListener(DONE_EVENT, onChange);
}

export function getDoneIdsSnapshot(): string[] {
  if (typeof window === "undefined") return [];
  if (doneCache === null) doneCache = readDoneIds();
  return doneCache;
}

const EMPTY_DONE: string[] = [];

/** Server snapshot — always empty (localStorage is client-only). */
export function getDoneIdsServerSnapshot(): string[] {
  return EMPTY_DONE;
}

/** Mark a story completed and persist. Notifies subscribers via a window event. */
export function markStoryDone(id: string): string[] {
  const done = readDoneIds();
  if (!done.includes(id)) done.push(id);
  try {
    window.localStorage.setItem(DONE_KEY, JSON.stringify(done));
  } catch {
    // storage unavailable (private mode) — progress stays session-only
  }
  doneCache = done;
  window.dispatchEvent(new Event(DONE_EVENT));
  return done;
}
