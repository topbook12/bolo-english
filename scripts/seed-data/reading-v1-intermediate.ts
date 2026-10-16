// ─── Reading library seeds v1: INTERMEDIATE (B1–B2) ───
// 6 trilingual reading passages. English paragraphs are the learning content
// (CEFR B1–B2: present perfect, past continuous, first conditional, simple
// passive); bn/hi are faithful line-by-line assist translations.
import type {
  LibraryReadingCategory,
  LibraryReadingData,
  LibraryReadingGenre,
  LibraryLevel,
} from "../../src/lib/library-types";

export interface SeedReadingEntry {
  slug: string;
  level: LibraryLevel;
  category: LibraryReadingCategory;
  minutes: number;
  unit: number; // 0 = standalone
  data: LibraryReadingData;
}

export const SEED_READING_V1_INTERMEDIATE: SeedReadingEntry[] = [
  /* ───────────────────────── 1. The Night Bus Ticket ───────────────────────── */
  {
    slug: "read-i1-nightbus",
    level: "intermediate",
    category: "daily",
    minutes: 4,
    unit: 1,
    data: {
      title: {
        bn: "নাইট বাসের টিকিট",
        en: "The Night Bus Ticket",
        hi: "नाइट बस का टिकट",
      },
      summary: {
        bn: "রাজশাহীর বাড়ি ফেরার পথে ঢাকার নাইট বাসে সবুজ হারিয়ে ফেলে তার টিকিট। ভয় পাওয়া তরুণের সাহায্যে এগিয়ে আসে এক দয়ালু কন্ডাক্টর — আর ঘটে যায় এক রাতের ছোট্ট শিক্ষা।",
        en: "On a night bus from Dhaka, Sabuj loses his ticket home to Rajshahi. A kind conductor steps in to help the frightened young man — and a small overnight lesson is learned.",
        hi: "ढाका की एक नाइट बस में सबुज राजशाही जाने वाला अपना टिकट खो देता है। घबराए हुए नौजवान की मदद को आता है एक दयालु कंडक्टर — और रात की एक छोटी सी सीख मिलती है।",
      },
      genre: "story",
      paragraphs: [
        {
          en: "The night bus from Dhaka to Rajshahi had already left the city when Sabuj reached for his pocket. His fingers searched his jacket, then his jeans, and finally his small blue bag. The return ticket was gone. He had bought it two days earlier at the Gabtoli counter, and he remembered putting it in his jacket pocket carefully. His heart started beating faster.",
          bn: "ঢাকা থেকে রাজশাহীর নাইট বাসটা তখন শহর ছেড়ে অনেক এগিয়ে গেছে, তখনই সবুজ পকেটে হাত দিল। আঙুলগুলো খুঁজল জ্যাকেট, তারপর জিন্স, শেষে ছোট্ট নীল ব্যাগটা। রিটার্ন টিকিট নেই। দুই দিন আগে সে গাবতলীর কাউন্টার থেকে ওটা কিনেছিল, যত্ন করে জ্যাকেটের পকেটে রেখেছিল বলেও মনে পড়ল। তার বুক দুরুদুরু করে উঠল।",
          hi: "ढाका से राजशाही की नाइट बस शहर छोड़ चुकी थी, तभी सबुज ने अपनी जेब में हाथ डाला। उंगलियों ने पहले जैकेट, फिर जींस और आख़िर में छोटे नीले बैग को छाना। रिटर्न टिकट गायब था। उसने वह दो दिन पहले गाबतली काउंटर से ख़रीदा था और उसे याद भी था कि वह उसे सावधानी से जैकेट की जेब में रखा था। उसका दिल तेज़ी से धड़कने लगा।",
        },
        {
          en: "He was travelling home for his cousin's wedding, and the bus would reach Rajshahi before dawn. Without the ticket, the conductor could refuse him his seat, or worse, ask him to buy a new one. Sabuj had only six hundred taka in his wallet, and a new ticket would cost nearly half of that. He checked every pocket again, but the small paper had disappeared.",
          bn: "কাজিনের বিয়েতে বাড়ি যাচ্ছিল সে, আর ভোরের আগেই বাস রাজশাহী পৌঁছে যাবে। টিকিট ছাড়া কন্ডাক্টর তার সিট দিতে অস্বীকার করতে পারে, আরও খারাপ হলে নতুন টিকিট কিনতে বলতে পারে। সবুজের মানিব্যাগে মাত্র ছয়শো টাকা, অথচ নতুন টিকিটের দাম প্রায় তার অর্ধেক। সে সব পকেট আবার খুঁজল, কিন্তু ছোট্ট কাগজটা কোথায় যেন মিলিয়ে গেছে।",
          hi: "वह अपने कज़िन की शादी में घर जा रहा था, और भोर होने से पहले ही बस राजशाही पहुँच जाएगी। टिकट के बिना कंडक्टर उसे सीट देने से इनकार कर सकता था, या इससे भी बुरा — नया टिकट ख़रीदने को कह सकता था। सबुज के बटुए में सिर्फ़ छह सौ टका थे, जबकि नए टिकट की क़ीमत लगभग उतने का आधा थी। उसने हर जेब दोबारा छानी, लेकिन छोटा-सा काग़ज़ कहीं ग़ायब था।",
        },
        {
          en: "The conductor, a middle-aged man with a warm smile, was walking down the aisle collecting tickets. When he stopped beside Sabuj, the young man's voice was shaking. 'I'm really sorry, sir. I had a ticket, but I have lost it somewhere. Perhaps it fell out at the rest stop.' Sabuj expected an argument, but the conductor simply looked at him for a moment.",
          bn: "কন্ডাক্টর — মাঝবয়সী, মুখে উষ্ণ হাসি ফোটানো মানুষ — আইল ধরে হেঁটে হেঁটে টিকিট তুলছিলেন। সবুজের পাশে দাঁড়াতেই তরুণের গলা কেঁপে গেল। 'স্যার, আমি সত্যিই দুঃখিত। টিকিট ছিল, কিন্তু কোথায় যেন হারিয়ে ফেলেছি। বোধহয় রেস্ট স্টপে পকেট থেকে পড়ে গেছে।' সবুজ ঝগড়ার প্রত্যাশা করছিল, কিন্তু কন্ডাক্টর কিছু না বলে শুধু এক মুহূর্ত তার দিকে তাকালেন।",
          hi: "कंडक्टर — मुस्कान भरा चेहरा लिए मध्यम उम्र का आदमी — गलियारे में चलते हुए टिकट काट रहा था। सबुज के पास आकर रुकते ही नौजवान की आवाज़ काँप गई। 'सर, मुझे सचमुच अफ़सोस है। टिकट मेरे पास था, लेकिन कहीं खो गया। शायद आराम-स्टॉप पर जेब से निकल गया।' सबुज को लगा था कि बहस होगी, लेकिन कंडक्टर कुछ कहे बिना बस एक पल उसकी ओर देखा।",
        },
        {
          en: "'These things happen,' the man said calmly. 'Do you remember the ticket number?' Sabuj shook his head. 'All right. What is your seat number, and where did you buy it?' Sabuj explained: seat C14, Gabtoli counter, two days ago. The conductor took out a small notebook where he had written down the numbers of the tickets he had sold that week.",
          bn: "'এসব তো হয়,' শান্ত গলায় বললেন কন্ডাক্টর। 'টিকিট নম্বর মনে আছে?' সবুজ মাথা নাড়ল। 'আচ্ছা তাহলে সিট নম্বর কত, আর কোথা থেকে কিনেছ?' সবুজ বলল: সিট C14, গাবতলী কাউন্টার, দুই দিন আগে। কন্ডাক্টর ছোট্ট একটা খাতা বের করলেন — এ সপ্তাহে বিক্রি করা টিকিটগুলোর নম্বর তিনি তাতে লিখে রেখেছিলেন।",
          hi: "'ऐसा होता रहता है,' आदमी ने शांत स्वर में कहा। 'टिकट नंबर याद है?' सबुज ने सिर हिलाया। 'ठीक है। आपका सीट नंबर क्या है, और कहाँ से ख़रीदा?' सबुज ने बताया: सीट C14, गाबतली काउंटर, दो दिन पहले। कंडक्टर ने एक छोटी डायरी निकाली, जिसमें उसने उस हफ़्ते बेचे गए टिकटों के नंबर लिख रखे थे।",
        },
        {
          en: "He checked the list slowly while the bus hummed along the dark highway. 'Here it is — seat C14, Gabtoli to Rajshahi, paid in cash. No need to pay twice. But listen, young man: next time, keep your ticket in your bag, not in your pocket.' Sabuj thanked him again and again, feeling the worry melt away like fog in the morning sun.",
          bn: "অন্ধকার মহাসড়ক ধরে বাস যখন গুনগুন করে ছুটছে, তখন তিনি ধীরে ধীরে তালিকাটা মিলিয়ে দেখলেন। 'পেয়েছি — সিট C14, গাবতলী থেকে রাজশাহী, নগদে টাকা দেওয়া। দুইবার টাকা দিতে হবে না। তবে শোনো তরুণ, পরেরবার টিকিট পকেটে না, ব্যাগে রাখবে।' সবুজ বারবার ধন্যবাদ দিল, আর অনুভব করল ভয়টা সকালের রোদে কুয়াশা গলে যাওয়ার মতো কেটে যাচ্ছে।",
          hi: "अंधेरे राजमार्ग पर बस जब गुनगुनाती चल रही थी, वह धीरे-धीरे सूची मिलाने लगा। 'मिल गया — सीट C14, गाबतली से राजशाही, नकद भुगतान। दो बार पैसे देने की ज़रूरत नहीं। पर सुनो, नौजवान — अगली बार टिकट जेब में नहीं, बैग में रखना।' सबुज बार-बार उसका धन्यवाद किया, और महसूस किया कि चिंता सुबह की धूप में धुंध पिघलने की तरह कट रही है।",
        },
        {
          en: "When the bus finally reached Rajshahi, the sky was turning grey. Sabuj stepped down with his bag and looked back at the conductor, who was helping an old lady with her basket. Some lessons, he thought, you learn on a night bus: keep important things safe, and be kind, because someone may need that kindness one day.",
          bn: "বাস যখন শেষমেশ রাজশাহীতে পৌঁছাল, আকাশ তখন ধূসর হচ্ছিল। ব্যাগ হাতে নেমে সবুজ পেছন ফিরে তাকাল — কন্ডাক্টর তখন এক বুড়ির ঝুড়িটা ধরে দিচ্ছেন। কিছু শিক্ষা, সে ভাবল, নাইট বাসেই শেখা যায়: দামি জিনিস সাবধানে রাখো, আর দয়ালু হও — কারণ কোনো একদিন কেউ ওই দয়ার দরকার করতেই পারে।",
          hi: "बस आख़िरकार जब राजशाही पहुँची, आसमान तब सलेटी हो रहा था। बैग लेकर उतरते हुए सबुज ने पीछे मुड़कर देखा — कंडक्टर उस वक़्त एक बूढ़ी औरत की टोकरी थाम रहा था। कुछ सबक़, उसने सोचा, नाइट बस में ही सीखे जाते हैं: क़ीमती चीज़ें सावधानी से रखो, और दयालु बनो — क्योंकि किसी दिन किसी को वही दया चाहिए हो सकती है।",
        },
      ],
      vocabulary: [
        {
          word: "conductor",
          meaning: {
            bn: "কন্ডাক্টর — বাসে টিকিট কাটা ও যাত্রীদের দেখাশোনা করা কর্মী",
            en: "the staff member on a bus who checks tickets and helps passengers",
            hi: "कंडक्टर — बस में टिकट काटने और यात्रियों की देखभाल करने वाला कर्मचारी",
          },
          example: "The conductor announced the next stop politely.",
        },
        {
          word: "aisle",
          meaning: {
            bn: "আইল — বাস বা ট্রেনের ভেতরের হাঁটার পথ",
            en: "the walking path between rows of seats inside a bus or train",
            hi: "गलियारा — बस या ट्रेन में सीटों के बीच चलने का रास्ता",
          },
          example: "She walked down the aisle to find her seat.",
        },
        {
          word: "wallet",
          meaning: {
            bn: "মানিব্যাগ — টাকা-পয়সা রাখার ছোট থলে",
            en: "a small folded case for keeping money and cards",
            hi: "बटुआ — पैसे और कार्ड रखने का छोटा थैला",
          },
          example: "He found a wallet on the street and handed it to the police.",
        },
        {
          word: "refuse",
          meaning: {
            bn: "অস্বীকার করা — রাজি না হওয়া, ফিরিয়ে দেওয়া",
            en: "to say no to something or someone",
            hi: "इनकार करना — कुछ स्वीकार न करना",
          },
          example: "They refused to open the door after midnight.",
        },
        {
          word: "counter",
          meaning: {
            bn: "কাউন্টার — টিকিট বা মালামাল বেচাকেনার লম্বা টেবিল",
            en: "the long table where tickets or goods are sold in an office or shop",
            hi: "काउंटर — दफ़्तर या दुकान में टिकट या सामान बेचने की मेज़",
          },
          example: "Buy your launch ticket from the front counter.",
        },
        {
          word: "highway",
          meaning: {
            bn: "মহাসড়ক — শহরের সঙ্গে শহর যুক্ত করা বড় রাস্তা",
            en: "a wide main road that connects cities and towns",
            hi: "राजमार्ग — शहरों को जोड़ने वाली चौड़ी मुख्य सड़क",
          },
          example: "The highway was empty at three in the morning.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "সবুজ কোথা থেকে তার টিকিট কিনেছিল?",
            en: "Where did Sabuj buy his ticket?",
            hi: "सबुज ने अपना टिकट कहाँ से ख़रीदा था?",
          },
          options: [
            {
              bn: "গাবতলী কাউন্টার থেকে",
              en: "From the Gabtoli counter",
              hi: "गाबतली काउंटर से",
            },
            {
              bn: "বাসের ভেতরে কন্ডাক্টরের কাছ থেকে",
              en: "Inside the bus from the conductor",
              hi: "बस में कंडक्टर से",
            },
            {
              bn: "রাজশাহী বাস স্ট্যান্ড থেকে",
              en: "From the Rajshahi bus stand",
              hi: "राजशाही बस स्टैंड से",
            },
            {
              bn: "রেস্ট স্টপের একটি দোকান থেকে",
              en: "From a shop at the rest stop",
              hi: "आराम-स्टॉप की एक दुकान से",
            },
          ],
          answer: 0,
          explain: {
            bn: "প্রথম অনুচ্ছেদে বলা আছে, সবুজ দুই দিন আগে গাবতলীর কাউন্টার থেকে টিকিটটা কিনেছিল।",
            en: "The first paragraph says Sabuj bought the ticket two days earlier at the Gabtoli counter.",
            hi: "पहले अनुच्छेद में कहा गया है कि सबुज ने दो दिन पहले गाबतली काउंटर से टिकट ख़रीदा था।",
          },
        },
        {
          question: {
            bn: "টিকিট না থাকলে কন্ডাক্টর কী করতে পারত?",
            en: "What could the conductor do without the ticket?",
            hi: "टिकट के बिना कंडक्टर क्या कर सकता था?",
          },
          options: [
            {
              bn: "তার সিট দিতে অস্বীকার করা বা নতুন টিকিট কিনতে বলা",
              en: "Refuse his seat or ask him to buy a new ticket",
              hi: "सीट देने से इनकार करना या नया टिकट ख़रीदने को कहना",
            },
            {
              bn: "পুলিশকে ফোন করা",
              en: "Call the police",
              hi: "पुलिस को फ़ोन करना",
            },
            {
              bn: "তাকে বাস থেকে নামিয়ে দেওয়া",
              en: "Make him get off the bus",
              hi: "उसे बस से उतरवा देना",
            },
            {
              bn: "তার ব্যাগ খোলাখুলি খোঁজা",
              en: "Search his bag openly",
              hi: "उसका बैग खुलकर तलाशी लेना",
            },
          ],
          answer: 0,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে: টিকিট ছাড়া কন্ডাক্টর সিট দিতে অস্বীকার করতে পারে, আরও খারাপ হলে নতুন টিকিট কিনতে বলতে পারে।",
            en: "Second paragraph: without the ticket, the conductor could refuse his seat or ask him to buy a new one.",
            hi: "दूसरे अनुच्छेद में: टिकट के बिना कंडक्टर सीट देने से इनकार कर सकता था या नया टिकट ख़रीदने को कह सकता था।",
          },
        },
        {
          question: {
            bn: "কন্ডাক্টর টিকিটটা খুঁজে বের করতে কী ব্যবহার করলেন?",
            en: "What did the conductor use to find the ticket?",
            hi: "कंडक्टर ने टिकट ढूँढ़ने के लिए क्या इस्तेमाल किया?",
          },
          options: [
            {
              bn: "একটা ছোট খাতা, যাতে সে সপ্তাহে বিক্রি করা টিকিটের নম্বর লিখে রেখেছিলেন",
              en: "A small notebook where he had written the numbers of the tickets sold that week",
              hi: "एक छोटी डायरी, जिसमें उसने उस हफ़्ते बेचे गए टिकटों के नंबर लिख रखे थे",
            },
            {
              bn: "বাসের কম্পিউটার সিস্টেম",
              en: "The bus's computer system",
              hi: "बस का कंप्यूटर सिस्टम",
            },
            {
              bn: "সবুজের মানিব্যাগের রসিদ",
              en: "A receipt from Sabuj's wallet",
              hi: "सबुज के बटुए की रसीद",
            },
            {
              bn: "ড্রাইভারের মনে রাখা তালিকা",
              en: "A list the driver remembered",
              hi: "ड्राइवर की याद की गई सूची",
            },
          ],
          answer: 0,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে কন্ডাক্টর ছোট্ট খাতা বের করেন, যেখানে ওই সপ্তাহে বিক্রি করা টিকিটগুলোর নম্বর লেখা ছিল।",
            en: "In the fourth paragraph the conductor takes out a small notebook with the numbers of the tickets sold that week.",
            hi: "चौथे अनुच्छेद में कंडक्टर एक छोटी डायरी निकालता है, जिसमें उस हफ़्ते बेचे गए टिकटों के नंबर लिखे थे।",
          },
        },
        {
          question: {
            bn: "কন্ডাক্টর সবুজকে কী পরামর্শ দিলেন?",
            en: "What advice did the conductor give Sabuj?",
            hi: "कंडक्टर ने सबुज को क्या सलाह दी?",
          },
          options: [
            {
              bn: "পরের বার টিকিট পকেটে না রেখে ব্যাগে রাখতে",
              en: "Next time, keep the ticket in the bag, not in the pocket",
              hi: "अगली बार टिकट जेब में नहीं, बैग में रखना",
            },
            {
              bn: "ভবিষ্যতে নাইট বাসে না ওঠতে",
              en: "Never take a night bus again",
              hi: "दोबारा कभी नाइट बस में न चढ़ना",
            },
            {
              bn: "প্রতিটি টিকিটের ফটো তুলে রাখতে",
              en: "Take a photo of every ticket",
              hi: "हर टिकट की फ़ोटो ले लेना",
            },
            {
              bn: "সবসময় দুটো টিকিট কিনতে",
              en: "Always buy two tickets",
              hi: "हमेशा दो टिकट ख़रीदना",
            },
          ],
          answer: 0,
          explain: {
            bn: "পঞ্চম অনুচ্ছেদে কন্ডাক্টর বলেন: পরেরবার টিকিট পকেটে না, ব্যাগে রাখবে।",
            en: "In the fifth paragraph the conductor says: next time, keep your ticket in your bag, not in your pocket.",
            hi: "पाँचवें अनुच्छेद में कंडक्टर कहता है: अगली बार टिकट जेब में नहीं, बैग में रखना।",
          },
        },
        {
          question: {
            bn: "গল্পের শেষে সবুজের কী বোঝা হলো?",
            en: "What did Sabuj realise at the end of the story?",
            hi: "कहानी के अंत में सबुज को क्या समझ आया?",
          },
          options: [
            {
              bn: "দামি জিনিস সাবধানে রাখতে হয় আর দয়ালু হতে হয়",
              en: "Keep important things safe, and be kind",
              hi: "क़ीमती चीज़ें सावधानी से रखो, और दयालु बनो",
            },
            {
              bn: "রাতের বাসে ভ্রমণ করা ঠিক নয়",
              en: "Travelling on night buses is a bad idea",
              hi: "नाइट बस में सफ़र करना ठीक नहीं",
            },
            {
              bn: "সব কন্ডাক্টর কড়া হওয়া উচিত",
              en: "All conductors should be strict",
              hi: "सभी कंडक्टरों को सख़्त होना चाहिए",
            },
            {
              bn: "টাকা সবসময় হাতে রাখা দরকার",
              en: "Money should always be kept in hand",
              hi: "पैसे हमेशा हाथ में रखने चाहिए",
            },
          ],
          answer: 0,
          explain: {
            bn: "শেষ অনুচ্ছেদে সবুজ ভাবে — দামি জিনিস সাবধানে রাখো আর দয়ালু হও, কোনো একদিন কেউ ওই দয়ার দরকার করতে পারে।",
            en: "In the last paragraph Sabuj thinks: keep important things safe and be kind, because someone may need that kindness one day.",
            hi: "अंतिम अनुच्छेद में सबुज सोचता है — क़ीमती चीज़ें सावधानी से रखो और दयालु बनो, क्योंकि किसी दिन किसी को वही दया चाहिए हो सकती है।",
          },
        },
      ],
    },
  },

  /* ───────────────────────── 2. The Job Interview ───────────────────────── */
  {
    slug: "read-i1-interview",
    level: "intermediate",
    category: "work",
    minutes: 3,
    unit: 2,
    data: {
      title: {
        bn: "চাকরির সাক্ষাৎকার",
        en: "The Job Interview",
        hi: "नौकरी का साक्षात्कार",
      },
      summary: {
        bn: "বনানীর একটি সফটওয়্যার কোম্পানিতে ওয়েব ডেভেলপার পদের সাক্ষাৎকারে বসেছে ইমরান। এই কথোপকথনে দেখা যাবে — দক্ষতা ও অভিজ্ঞতা বলা, একটা কঠিন প্রশ্নের শালীন উত্তর আর ভদ্র ইংরেজি বাক্যের নমুনা।",
        en: "Imran sits for an interview at a software company for a web developer post. The dialogue shows how to describe your strengths and experience — and how to answer one tricky question politely.",
        hi: "इमरान एक सॉफ़्टवेयर कंपनी में वेब डेवलपर पद के साक्षात्कार में बैठा है। इस संवाद में देखिए — अपनी खूबियाँ और अनुभव बताना, एक कठिन सवाल का विनम्र जवाब और शिष्ट अंग्रेज़ी वाक्यांश।",
      },
      genre: "dialog",
      paragraphs: [
        {
          en: "Imran: Good morning, ma'am. Thank you for inviting me for this interview. I have been looking forward to it ever since I received your email last Thursday. My name is Imran Hossain, and I live in Mirpur with my parents and my younger sister.",
          bn: "ইমরান: সুপ্রভাত, ম্যাডাম। এই সাক্ষাৎকারের জন্য ডেকে আমাকে ধন্যবাদ। গত বৃহস্পতিবার আপনাদের ইমেইলটা পাওয়ার পর থেকেই অপেক্ষায় ছিলাম। আমি ইমরান হোসেন — মিরপুরে বাবা-মা আর ছোট বোনের সঙ্গে থাকি।",
          hi: "इमरान: सुप्रभात, मैडम। इस साक्षात्कार के लिए बुलाने के लिए धन्यवाद। पिछले गुरुवार आपका ईमेल मिलने के बाद से मैं इसकी प्रतीक्षा में था। मेरा नाम इमरान होसैन है — मीरपुर में माता-पिता और छोटी बहन के साथ रहता हूँ।",
        },
        {
          en: "Ms. Chowdhury: Good morning, Imran. Please have a seat. I'm Shamima Chowdhury, the HR manager at DataPath Solutions, and I handle hiring for the development team. So tell me — what are your main strengths, and why do you want to join a software company?",
          bn: "মিসেস চৌধুরী: সুপ্রভাত, ইমরান। বসুন তো। আমি শামীমা চৌধুরী, ডেটাপাথ সলিউশনসের এইচআর ম্যানেজার — ডেভেলপমেন্ট টিমের নিয়োগ আমিই দেখি। বলুন দেখি — আপনার প্রধান দক্ষতাগুলো কী কী, আর সফটওয়্যার কোম্পানিতে ঢোকার ইচ্ছা কেন?",
          hi: "मिसेज़ चौधरी: सुप्रभात, इमरान। बैठिए। मैं शमीमा चौधरी हूँ, डेटापाथ सॉल्यूशंस की HR मैनेजर — डेवलपमेंट टीम की भर्ती मैं ही देखती हूँ। बताइए — आपकी मुख्य खूबियाँ क्या हैं, और सॉफ़्टवेयर कंपनी में जुड़ना चाहते हैं क्यों?",
        },
        {
          en: "Imran: Thank you for asking, ma'am. For the last two years, I have been working as a junior web developer at a small software house in Banani. My main strength is solving problems patiently instead of panicking. My teammates often say that I can explain technical issues in simple language, which helps when we talk to clients. I also inform my team leader honestly whenever a deadline becomes difficult. And I want to join a bigger company like yours because here I can learn from senior engineers every day.",
          bn: "ইমরান: জিজ্ঞেস করার জন্য ধন্যবাদ, ম্যাডাম। গত দুই বছর ধরে বনানীর একটা ছোট সফটওয়্যার ফার্মে জুনিয়র ওয়েব ডেভেলপার হিসেবে কাজ করছি। আমার প্রধান দক্ষতা হলো ঘাবড়ে না গিয়ে ধৈর্য ধরে সমস্যা সমাধান করা। কাজের সঙ্গীরা প্রায়ই বলে, কারিগরি সমস্যাগুলো আমি সহজ ভাষায় বোঝাতে পারি — যা ক্লায়েন্টদের সঙ্গে কথা বলার সময় বেশ কাজে দেয়। কোনো ডেডলাইন কঠিন হয়ে পড়লে আমি টিম লিডারকে সত্যি কথাটাই জানাই। আর আপনাদের মতো বড় কোম্পানিতে ঢুকতে চাই, কারণ এখানে প্রতিদিন সিনিয়র ইঞ্জিনিয়ারদের কাছ থেকে শেখার সুযোগ পাই।",
          hi: "इमरान: पूछने के लिए धन्यवाद, मैडम। पिछले दो साल से मैं बनानी के एक छोटे सॉफ़्टवेयर फ़र्म में जूनियर वेब डेवलपर के रूप में काम कर रहा हूँ। मेरी सबसे बड़ी खूबी है — घबराए बिना धैर्य से समस्या सुलझाना। मेरे साथी अक्सर कहते हैं कि मैं तकनीकी मुद्दों को आसान भाषा में समझा सकता हूँ, जो क्लाइंट्स से बात करते वक़्त काफ़ी काम आता है। कोई डेडलाइन मुश्किल हो जाए तो मैं टीम लीडर को ईमानदारी से बता देता हूँ। और मैं आपकी जैसी बड़ी कंपनी में जुड़ना चाहता हूँ, क्योंकि यहाँ रोज़ सीनियर इंजीनियरों से सीखने का मौक़ा मिलता है।",
        },
        {
          en: "Ms. Chowdhury: That sounds promising. Now, here is a slightly tricky question, and I want an honest answer: you have two years of experience, but this post clearly asks for three. Why should we consider you anyway?",
          bn: "মিসেস চৌধুরী: সে তো ভালো শোনাল। এবার একটা সামান্য কঠিন প্রশ্ন করি, আর সৎ উত্তরটা শুনতে চাই: আপনার হাতে দুই বছরের অভিজ্ঞতা, কিন্তু এই পদে স্পষ্ট করেই তিন বছর চাওয়া হয়েছে। তবু আপনাকে কেন বিবেচনায় নেব?",
          hi: "मिसेज़ चौधरी: सुनने में अच्छा लगा। अब एक थोड़ा कठिन सवाल पूछूँगी, और ईमानदार जवाब सुनना चाहती हूँ: आपके पास दो साल का अनुभव है, लेकिन इस पद के लिए साफ़ तौर पर तीन साल माँगे गए हैं। फिर भी हम आपको क्यों चुनें?",
        },
        {
          en: "Imran: That's a fair question, ma'am. It is true that I have worked formally for only two years, but I have been building mobile apps on my own since my second year at university. Because of that self-practice, I have already used most of the tools mentioned in your job description. If you give me three months, I promise you will not feel any difference in my speed.",
          bn: "ইমরান: সিদ্ধ প্রশ্ন, ম্যাডাম। সত্যিই আমি মাত্র দুই বছর আনুষ্ঠানিকভাবে কাজ করেছি, কিন্তু বিশ্ববিদ্যালয়ের দ্বিতীয় বর্ষ থেকে নিজে নিজে মোবাইল অ্যাপ বানাচ্ছি। সেই নিজের চর্চার কারণেই আপনাদের চাকরির বিজ্ঞাপনে উল্লেখ করা বেশিরভাগ টুলই আমি ব্যবহার করে ফেলেছি। যদি আমাকে তিন মাস দেন, প্রতিশ্রুতি দিচ্ছি — আমার কাজের গতিতে আপনারা কোনো পার্থক্য টের পাবেন না।",
          hi: "इमरान: जायज़ सवाल है, मैडम। सच है कि मैंने सिर्फ़ दो साल औपचारिक रूप से काम किया है, लेकिन यूनिवर्सिटी के दूसरे साल से मैं ख़ुद मोबाइल ऐप्स बना रहा हूँ। उसी ख़ुद की प्रैक्टिस की वजह से आपकी जॉब डिसक्रिप्शन में लिखे ज़्यादातर टूल्स मैं पहले ही इस्तेमाल कर चुका हूँ। अगर आप मुझे तीन महीने दें, वादा करता हूँ — मेरी रफ़्तार में आपको कोई फ़र्क़ महसूस नहीं होगा।",
        },
        {
          en: "Ms. Chowdhury: I like your honesty, and honest learners usually grow fast in our team. We are interviewing three more candidates this week, so you will hear from us within seven days. Imran: Thank you so much for your time, ma'am. I look forward to hearing from you. Have a wonderful day.",
          bn: "মিসেস চৌধুরী: আপনার সততা ভালো লাগল, আর সৎ শিক্ষার্থীরা আমাদের টিমে সাধারণত দ্রুত এগোয়। এই সপ্তাহে আরও তিনজন প্রার্থীর সাক্ষাৎকার নেব, তাই সাত দিনের মধ্যে আমাদের কাছ থেকে খবর পাবেন। ইমরান: সময় দেওয়ার জন্য আপনার অনেক ধন্যবাদ, ম্যাডাম। আপনার খবরের অপেক্ষায় থাকব। আপনার দিন শুভ হোক।",
          hi: "मिसेज़ चौधरी: आपकी ईमानदारी अच्छी लगी, और ईमानदार सीखने वाले हमारी टीम में अक्सर तेज़ी से आगे बढ़ते हैं। इस हफ़्ते हम तीन और उम्मीदवारों का साक्षात्कार लेंगे, इसलिए सात दिन के भीतर हमारी ओर से ख़बर मिलेगी। इमरान: समय देने के लिए आपका बहुत-बहुत धन्यवाद, मैडम। आपके जवाब की प्रतीक्षा में रहूँगा। आपका दिन शुभ हो।",
        },
      ],
      vocabulary: [
        {
          word: "interview",
          meaning: {
            bn: "সাক্ষাৎকার — চাকরির জন্য প্রার্থীকে প্রশ্ন করার সাক্ষাৎ",
            en: "a formal meeting where a company asks a candidate questions for a job",
            hi: "साक्षात्कार — नौकरी के लिए कंपनी द्वारा उम्मीदवार से प्रश्न पूछने की औपचारिक बैठक",
          },
          example: "She prepared for her interview by practising common questions.",
        },
        {
          word: "strengths",
          meaning: {
            bn: "দক্ষতা / শক্তিমত্তা — যে বিষয়ে কেউ ভালো",
            en: "the things a person is naturally good at",
            hi: "खूबियाँ — जिन कामों में कोई व्यक्ति अच्छा हो",
          },
          example: "Patience and teamwork are my greatest strengths.",
        },
        {
          word: "experience",
          meaning: {
            bn: "অভিজ্ঞতা — কাজ বা ঘটনা থেকে অর্জিত জ্ঞান ও দক্ষতা",
            en: "knowledge or skill gained from doing a job or activity",
            hi: "अनुभव — काम या गतिविधि से मिली जानकारी या कौशल",
          },
          example: "He has three years of experience in graphic design.",
        },
        {
          word: "deadline",
          meaning: {
            bn: "ডেডলাইন — কাজ জমা দেওয়ার শেষ সময়সীমা",
            en: "the latest time by which a task must be finished",
            hi: "डेडलाइन — काम पूरा करने की आख़िरी समय-सीमा",
          },
          example: "The report must be ready before Friday's deadline.",
        },
        {
          word: "candidates",
          meaning: {
            bn: "প্রার্থীরা — যারা কোনো পদের জন্য আবেদন করে",
            en: "people who apply or compete for a position",
            hi: "उम्मीदवार — जो किसी पद के लिए आवेदन करते हैं",
          },
          example: "Five candidates were called for the final round.",
        },
        {
          word: "honesty",
          meaning: {
            bn: "সততা — সত্যি বলা ও সোজাসাপ্টা চরিত্র",
            en: "the quality of being truthful and fair",
            hi: "ईमानदारी — सच्चा और निष्पक्ष होने का गुण",
          },
          example: "His honesty earned him everyone's trust.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "শামীমা চৌধুরীর পদবি কী?",
            en: "What is Shamima Chowdhury's position?",
            hi: "शमीमा चौधरी का पद क्या है?",
          },
          options: [
            {
              bn: "ডেটাপাথ সলিউশনসের এইচআর ম্যানেজার",
              en: "HR manager at DataPath Solutions",
              hi: "डेटापाथ सॉल्यूशंस की HR मैनेजर",
            },
            {
              bn: "ডেভেলপমেন্ট টিমের প্রধান প্রোগ্রামার",
              en: "Lead programmer of the development team",
              hi: "डेवलपमेंट टीम की मुख्य प्रोग्रामर",
            },
            {
              bn: "কোম্পানির মালিক",
              en: "Owner of the company",
              hi: "कंपनी की मालकिन",
            },
            {
              bn: "মিরপুর শাখার ম্যানেজার",
              en: "Manager of the Mirpur branch",
              hi: "मीरपुर शाखा की मैनेजर",
            },
          ],
          answer: 0,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে তিনি নিজের পরিচয় দেন — ডেটাপাথ সলিউশনসের এইচআর ম্যানেজার।",
            en: "In the second paragraph she introduces herself as the HR manager at DataPath Solutions.",
            hi: "दूसरे अनुच्छेद में वह अपना परिचय देती हैं — डेटापाथ सॉल्यूशंस की HR मैनेजर।",
          },
        },
        {
          question: {
            bn: "ইমরান এখন পর্যন্ত কত বছর আনুষ্ঠানিকভাবে কাজ করেছে?",
            en: "How many years has Imran worked formally so far?",
            hi: "इमरान ने अब तक कितने साल औपचारिक रूप से काम किया है?",
          },
          options: [
            {
              bn: "দুই বছর",
              en: "Two years",
              hi: "दो साल",
            },
            {
              bn: "তিন বছর",
              en: "Three years",
              hi: "तीन साल",
            },
            {
              bn: "পাঁচ বছর",
              en: "Five years",
              hi: "पाँच साल",
            },
            {
              bn: "এক বছর",
              en: "One year",
              hi: "एक साल",
            },
          ],
          answer: 0,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদে বলা হয়েছে, গত দুই বছর ধরে সে জুনিয়র ওয়েব ডেভেলপার হিসেবে কাজ করছে।",
            en: "The third paragraph says he has been working as a junior web developer for the last two years.",
            hi: "तीसरे अनुच्छेद में कहा गया है कि वह पिछले दो साल से जूनियर वेब डेवलपर के रूप में काम कर रहा है।",
          },
        },
        {
          question: {
            bn: "ইমরানের প্রধান দক্ষতা কী বলা হয়েছে?",
            en: "What does Imran call his main strength?",
            hi: "इमरान ने अपनी मुख्य खूबी क्या बताई?",
          },
          options: [
            {
              bn: "ঘাবড়ে না গিয়ে ধৈর্য ধরে সমস্যা সমাধান করা",
              en: "Solving problems patiently instead of panicking",
              hi: "घबराए बिना धैर्य से समस्या सुलझाना",
            },
            {
              bn: "দ্রুত টাইপ করা",
              en: "Typing very fast",
              hi: "बहुत तेज़ टाइप करना",
            },
            {
              bn: "নতুন ক্লায়েন্ট খুঁজে আনা",
              en: "Finding new clients",
              hi: "नए क्लाइंट ढूँढ़ लाना",
            },
            {
              bn: "বাংলা ও ইংরেজি অনুবাদ করা",
              en: "Translating between Bengali and English",
              hi: "बांग्ला और अंग्रेज़ी में अनुवाद करना",
            },
          ],
          answer: 0,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদে ইমরান বলে — তার প্রধান দক্ষতা ধৈর্য ধরে সমস্যা সমাধান করা।",
            en: "In the third paragraph Imran says his main strength is solving problems patiently.",
            hi: "तीसरे अनुच्छेद में इमरान कहता है — उसकी सबसे बड़ी खूबी धैर्य से समस्या सुलझाना है।",
          },
        },
        {
          question: {
            bn: "বিশ্ববিদ্যালয়ের দ্বিতীয় বর্ষ থেকে ইমরান কী করছে?",
            en: "What has Imran been doing since his second year at university?",
            hi: "यूनिवर्सिटी के दूसरे साल से इमरान क्या कर रहा है?",
          },
          options: [
            {
              bn: "নিজে নিজে মোবাইল অ্যাপ বানানো",
              en: "Building mobile apps on his own",
              hi: "ख़ुद मोबाइल ऐप्स बनाना",
            },
            {
              bn: "ইংরেজি কোর্স করা",
              en: "Taking an English course",
              hi: "अंग्रेज़ी का कोर्स करना",
            },
            {
              bn: "ফ্রিল্যান্স লেখালেখি করা",
              en: "Working as a freelance writer",
              hi: "फ़्रीलांस लेखन करना",
            },
            {
              bn: "রাতের ক্লাস পড়ানো",
              en: "Teaching evening classes",
              hi: "शाम की कक्षाएँ पढ़ाना",
            },
          ],
          answer: 0,
          explain: {
            bn: "পঞ্চম অনুচ্ছেদে বলা হয়েছে, বিশ্ববিদ্যালয়ের দ্বিতীয় বর্ষ থেকে সে নিজে নিজে মোবাইল অ্যাপ বানাচ্ছে।",
            en: "The fifth paragraph says he has been building mobile apps on his own since his second year at university.",
            hi: "पाँचवें अनुच्छेद में कहा गया है कि वह यूनिवर्सिटी के दूसरे साल से ख़ुद मोबाइल ऐप्स बना रहा है।",
          },
        },
        {
          question: {
            bn: "চাকরির বিজ্ঞাপনে কত বছরের অভিজ্ঞতা চাওয়া হয়েছে?",
            en: "How much experience does the post ask for?",
            hi: "इस पद के लिए कितने साल का अनुभव माँगा गया है?",
          },
          options: [
            {
              bn: "তিন বছর",
              en: "Three years",
              hi: "तीन साल",
            },
            {
              bn: "দুই বছর",
              en: "Two years",
              hi: "दो साल",
            },
            {
              bn: "চার বছর",
              en: "Four years",
              hi: "चार साल",
            },
            {
              bn: "এক বছর",
              en: "One year",
              hi: "एक साल",
            },
          ],
          answer: 0,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে মিসেস চৌধুরী বলেন — পদটিতে স্পষ্ট করেই তিন বছর চাওয়া হয়েছে।",
            en: "In the fourth paragraph Ms. Chowdhury says the post clearly asks for three years.",
            hi: "चौथे अनुच्छेद में मिसेज़ चौधरी कहती हैं — इस पद के लिए साफ़ तौर पर तीन साल माँगे गए हैं।",
          },
        },
      ],
    },
  },

  /* ───────────────────────── 3. A Letter from Kuala Lumpur ───────────────────────── */
  {
    slug: "read-i1-kualalumpur",
    level: "intermediate",
    category: "culture",
    minutes: 3,
    unit: 3,
    data: {
      title: {
        bn: "কুয়ালালামপুর থেকে একটি চিঠি",
        en: "A Letter from Kuala Lumpur",
        hi: "कुआलालंपुर से एक चिट्ठी",
      },
      summary: {
        bn: "কুয়ালালামপুরের এক বাংলাদেশি শ্রমিক মায়ের কাছে লেখা চিঠিতে বিদেশের ঈদ, পরিবারের জন্য ব্যথা আর নতুন বন্ধুদের গল্প লিখেছে — হারানোর মধ্যেও পাওয়ার সব রঙ।",
        en: "In a letter to his mother, a Bangladeshi worker in Kuala Lumpur writes about Eid abroad, missing his family, and the new friends who have become his second family.",
        hi: "कुआलालंपुर में काम कर रहा एक बांग्लादेशी मज़दूर अपनी माँ को लिखे ख़त में विदेश की ईद, घर की याद और नए दोस्तों की कहानी लिखता है।",
      },
      genre: "letter",
      paragraphs: [
        {
          en: "Dear Ma, Assalamu alaikum. It is late night here in Kuala Lumpur, and everyone in the hostel is sleeping, but I cannot close my eyes. Tomorrow morning we will celebrate Eid, and for the first time in my life, I will not wake up in our own house in Comilla. I have been looking at your photograph for an hour.",
          bn: "মা, আসসালামু আলাইকুম। কুয়ালালামপুরে এখন গভীর রাত, হোস্টেলে সবাই ঘুমিয়ে আছে, কিন্তু আমার চোখ বন্ধ হচ্ছে না। কাল সকালে ঈদ পালন করব, আর জীবনে প্রথমবার কমিলার নিজের বাড়িতে নয়, অন্য কোথাও সকাল হবে। এক ঘণ্টা ধরে তোমার ছবিটা দেখছি।",
          hi: "प्यारी माँ, अस्सलामु अलैकुम। कुआलालंपुर में अब देर रात है, हॉस्टल में सब सो रहे हैं, लेकिन मेरी आँखें बंद नहीं हो रहीं। कल सुबह हम ईद मनाएँगे, और ज़िंदगी में पहली बार मैं कोमिल्ला के अपने घर में नहीं, दूसरी जगह सुबह करूँगा। एक घंटे से तुम्हारी तस्वीर देख रहा हूँ।",
        },
        {
          en: "You know how hard I tried to get leave, but the construction site does not stop even for Eid, and the supervisor said only half of us could go home. I lost the lottery, Ma. I have already sent my Eid money through bKash — please buy something nice for Apu and tell Babu that his brother remembers him every day.",
          bn: "জানো ছুটি পেতে আমি কী কষ্ট করেছিলাম, কিন্তু নির্মাণকাজ ঈদেও থামে না, আর সুপারভাইজার বলল মাত্র অর্ধেক লোক দেশে যেতে পারবে। লটারিতে আমার নাম উঠল না, মা। ঈদের টাকা আমি বিকাশে পাঠিয়ে দিয়েছি — আপুর জন্য ভালো কিছু কিনে নিও, আর বাবুকে বলো, তার ভাই প্রতিদিন তাকে মনে করে।",
          hi: "तुम जानती हो छुट्टी के लिए मैंने कितनी कोशिश की, लेकिन निर्माण-काम ईद में भी नहीं रुकता, और सुपरवाइज़र ने कहा कि आधे लोग ही घर जा सकेंगे। लॉटरी में मेरा नाम नहीं निकला, माँ। ईद के पैसे मैंने बिकाश से भेज दिए हैं — आपू के लिए कुछ अच्छा ख़रीद लो, और बाबू से कहो कि उसका भाई उसे रोज़ याद करता है।",
        },
        {
          en: "Still, I don't want you to worry. There are eleven Bangladeshi workers on our floor, and we have become like a family. Rafiq bhai from Sylhet has been teaching me Malay words in the evenings, and Kamal from Chittagong cooks khichuri on a small stove every Thursday. Last night we cleaned the whole kitchen together and prepared the ingredients for tomorrow's special breakfast.",
          bn: "তবু তুমি চিন্তা করো না। আমাদের তলায় এগারো জন বাংলাদেশি শ্রমিক আছে, আমরা এখন একেকটা পরিবারের মতো। সিলেটের রফিক ভাই সন্ধ্যায় সন্ধ্যায় মালয় শব্দ শেখাচ্ছেন, আর চট্টগ্রামের কামাল প্রতি বৃহস্পতিবার ছোট্ট একটা চুলায় খিচুড়ি রান্না করে। গত রাতে আমরা সবাই মিলে পুরো রান্নাঘরটা পরিষ্কার করলাম আর কালকের বিশেষ নাস্তার উপকরণ গুছিয়ে রাখলাম।",
          hi: "फिर भी तुम चिंता मत करो। हमारी मंज़िल पर ग्यारह बांग्लादेशी मज़दूर हैं, और हम अब एक परिवार जैसे हो गए हैं। सिलहट के रफ़ीक़ भाई शाम-शाम मलय शब्द सिखा रहे हैं, और चटगाँव का कमाल हर गुरुवार छोटी सी चूल्हे पर खिचड़ी पकाता है। कल रात हम सब ने मिलकर पूरी रसोई साफ़ की और कल के ख़ास नाश्ते की सामग्री तैयार कर दी।",
        },
        {
          en: "In the morning we will go to the mosque near the Petronas Towers — yes, the famous twin towers, Ma! After the prayer, a Malaysian engineer has invited our group to his house. His wife speaks a little English, and we will try to explain our Eid dishes to each other. I have been practising how to say 'Selamat Hari Raya' — it means happy Eid here.",
          bn: "সকালে পেট্রোনাস টাওয়ারের কাছের মসজিদে যাব — হ্যাঁ মা, সেই বিখ্যাত জমজমাট দুই টাওয়ার! নামাজের পর এক মালয়েশীয় প্রকৌশলী আমাদের দলকে তার বাড়িতে দাওয়াত দিয়েছেন। তার স্ত্রী একটু ইংরেজি বলতে পারেন, আমরা একে অন্যকে ঈদের খাবারগুলোর ব্যাখ্যা দেওয়ার চেষ্টা করব। 'সেলামাত হারি রায়া' কী করে বলতে হয় তার চর্চা করছি — এখানে এর অর্থ ঈদ মোবারক।",
          hi: "सुबह हम पेट्रोनास टावर्स के पास की मस्जिद जाएँगे — हाँ माँ, वही मशहूर जुड़वाँ टावर! नमाज़ के बाद एक मलेशियाई इंजीनियर ने हमारे समूह को अपने घर बुलाया है। उसकी पत्नी थोड़ी अंग्रेज़ी बोलती हैं, और हम एक-दूसरे को ईद के व्यंजनों के बारे में समझाने की कोशिश करेंगे। मैं 'सेलामात हारी राया' कहने की प्रैक्टिस कर रहा हूँ — यहाँ इसका मतलब ईद मुबारक होता है।",
        },
        {
          en: "I miss our courtyard, the smell of your semai in the morning, and the noise of relatives arriving all day. Sometimes I feel tears when the call to prayer starts, but then I remember why I am here: Apu's school fees, Babu's books, and the small house we are building brick by brick.",
          bn: "আমাদের উঠান, সকালে তোমার রান্না করা সেমাইয়ের গন্ধ, সারাদিন আত্মীয়স্বজনের আসা-যাওয়ার কোলাহল — সব কেমন অভাব করছে। মাঝে মাঝে আজানের আওয়াজ শুরু হলেই চোখ ভিজে যায়, কিন্তু তখন নিজেকে মনে করিয়ে দিই — এখানে কেন এসেছি: আপুর স্কুল ফি, বাবুর বই, আর ইটের ওপর ইট বসিয়ে যে ছোট্ট ঘর বানাচ্ছি, সেটা।",
          hi: "हमारा आँगन, सुबह तुम्हारी सेमइयों की महक, दिन भर रिश्तेदारों के आने-जाने का शोर — सबकी कमी खलती है। कभी-कभी अज़ान की आवाज़ सुनते ही आँखें भर आती हैं, लेकिन फिर ख़ुद को याद दिलाता हूँ कि मैं यहाँ क्यों हूँ: आपू की स्कूल फ़ीस, बाबू की किताबें, और ईंट पर ईंट रखकर वह छोटा-सा घर, जिसे हम बना रहे हैं।",
        },
        {
          en: "Kiss Apu and Babu for me. I will call you after the prayer tomorrow, insha'Allah. Take care of your health, and don't skip your medicine. Your loving son, Jamil.",
          bn: "আপু আর বাবুকে আমার পক্ষ থেকে ভালোবেসে ছোঁয়া দিও। কাল নামাজের পর ইনশাআল্লাহ ফোন করব। নিজের শরীরের যত্ন নিও, আর ওষুধ খেতে ভুলো না। তোমার ভালোবাসার ছেলে, জামিল।",
          hi: "आपू और बाबू को मेरी ओर से प्यार से छू लो। कल नमाज़ के बाद इंशाअल्लाह फ़ोन करूँगा। अपनी सेहत का ख़्याल रखो, और दवा लेना मत भूलना। तुम्हारा प्यारा बेटा, जमील।",
        },
      ],
      vocabulary: [
        {
          word: "hostel",
          meaning: {
            bn: "হোস্টেল — শ্রমিক বা ছাত্রদের থাকার সাঝা ভবন",
            en: "a building with shared rooms where workers or students live",
            hi: "हॉस्टल — मज़दूरों या छात्रों के रहने की साझा इमारत",
          },
          example: "The company provides a free hostel for its workers.",
        },
        {
          word: "supervisor",
          meaning: {
            bn: "সুপারভাইজার — কাজ তদারকি করেন যিনি",
            en: "the person who watches over and directs others' work",
            hi: "सुपरवाइज़र — जो दूसरों के काम की निगरानी और निर्देशन करता है",
          },
          example: "Ask the supervisor before leaving the site.",
        },
        {
          word: "lottery",
          meaning: {
            bn: "লটারি — ভাগ্যের টানাটানি, নাম উঠলেই সুযোগ",
            en: "a game of chance where names are drawn for a prize or chance",
            hi: "लॉटरी — भाग्य का खेल, जिसमें नाम निकलने पर मौक़ा मिलता है",
          },
          example: "She won the lottery for the apartment near her office.",
        },
        {
          word: "mosque",
          meaning: {
            bn: "মসজিদ — মুসলমানদের নামাজ পড়ার উপাসনালয়",
            en: "the Muslim place of worship for prayers",
            hi: "मस्जिद — मुसलमानों की नमाज़ पढ़ने की जगह",
          },
          example: "The mosque near the harbour opens before sunrise.",
        },
        {
          word: "relatives",
          meaning: {
            bn: "আত্মীয়স্বজন — পরিবারের দূর-নিকটের সদস্যরা",
            en: "members of your extended family",
            hi: "रिश्तेदार — परिवार के दूर-पास के सदस्य",
          },
          example: "Relatives started arriving a week before the wedding.",
        },
        {
          word: "courtyard",
          meaning: {
            bn: "উঠান — বাড়ির ভেতরের খোলা চাতাল",
            en: "the open space in the middle of a house or building",
            hi: "आँगन — घर के बीच का खुला स्थान",
          },
          example: "Grandmother dried the rice in the sunny courtyard.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "জামিল কোথায় কাজ করে?",
            en: "Where does Jamil work?",
            hi: "जमील कहाँ काम करता है?",
          },
          options: [
            {
              bn: "কুয়ালালামপুরের একটি নির্মাণকাজে",
              en: "At a construction site in Kuala Lumpur",
              hi: "कुआलालंपुर के एक निर्माण-काम पर",
            },
            {
              bn: "কমিলার একটি স্কুলে",
              en: "At a school in Comilla",
              hi: "कोमिल्ला के एक स्कूल में",
            },
            {
              bn: "পেট্রোনাস টাওয়ারের রেস্তোরাঁয়",
              en: "At a restaurant in the Petronas Towers",
              hi: "पेट्रोनास टावर्स के एक रेस्तराँ में",
            },
            {
              bn: "মালয়েশিয়ার একটি মসজিদে",
              en: "At a mosque in Malaysia",
              hi: "मलेशिया की एक मस्जिद में",
            },
          ],
          answer: 0,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে বলা হয়েছে, নির্মাণকাজ ঈদেও থামে না — জামিল সেখানেই কাজ করে।",
            en: "The second paragraph mentions the construction site that does not stop even for Eid.",
            hi: "दूसरे अनुच्छेद में कहा गया है कि निर्माण-काम ईद में भी नहीं रुकता।",
          },
        },
        {
          question: {
            bn: "ঈদে দেশে ফিরতে পারল না কেন?",
            en: "Why could Jamil not go home for Eid?",
            hi: "ईद पर जमील घर क्यों नहीं जा सका?",
          },
          options: [
            {
              bn: "অর্ধেক লোক যেতে পারবে বলে লটারিতে তার নাম ওঠেনি",
              en: "Only half could go, and he lost the lottery",
              hi: "आधे लोग ही जा सकेंगे, और लॉटरी में उसका नाम नहीं निकला",
            },
            {
              bn: "টিকিটের দাম খুব বেশি ছিল",
              en: "The ticket price was too high",
              hi: "टिकट की क़ीमत बहुत ज़्यादा थी",
            },
            {
              bn: "সে পাসপোর্ট হারিয়ে ফেলেছিল",
              en: "He lost his passport",
              hi: "वह अपना पासपोर्ट खो गया था",
            },
            {
              bn: "মালিক কাউকে ছুটি দিতে রাজি হননি",
              en: "The owner refused leave to anyone",
              hi: "मालिक किसी को छुट्टी देने को तैयार नहीं था",
            },
          ],
          answer: 0,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে: সুপারভাইজার বলেন মাত্র অর্ধেক লোক যেতে পারবে, আর লটারিতে জামিলের নাম ওঠেনি।",
            en: "Second paragraph: the supervisor says only half can go home, and Jamil lost the lottery.",
            hi: "दूसरे अनुच्छेद में: सुपरवाइज़र कहता है कि आधे लोग ही जा सकेंगे, और लॉटरी में जमील का नाम नहीं निकला।",
          },
        },
        {
          question: {
            bn: "প্রতি বৃহস্পতিবার খিচুড়ি রান্না করে কে?",
            en: "Who cooks khichuri every Thursday?",
            hi: "हर गुरुवार खिचड़ी कौन पकाता है?",
          },
          options: [
            {
              bn: "চট্টগ্রামের কামাল",
              en: "Kamal from Chittagong",
              hi: "चटगाँव का कमाल",
            },
            {
              bn: "সিলেটের রফিক ভাই",
              en: "Rafiq bhai from Sylhet",
              hi: "सिलहट के रफ़ीक़ भाई",
            },
            {
              bn: "মালয়েশীয় প্রকৌশলী",
              en: "The Malaysian engineer",
              hi: "मलेशियाई इंजीनियर",
            },
            {
              bn: "হোস্টেলের ম্যানেজার",
              en: "The hostel manager",
              hi: "हॉस्टल का मैनेजर",
            },
          ],
          answer: 0,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদে বলা হয়েছে, চট্টগ্রামের কামাল প্রতি বৃহস্পতিবার খিচুড়ি রান্না করে।",
            en: "The third paragraph says Kamal from Chittagong cooks khichuri every Thursday.",
            hi: "तीसरे अनुच्छेद में कहा गया है कि चटगाँव का कमाल हर गुरुवार खिचड़ी पकाता है।",
          },
        },
        {
          question: {
            bn: "'সেলামাত হারি রায়া' মানে কী?",
            en: "What does 'Selamat Hari Raya' mean?",
            hi: "'सेलामात हारी राया' का मतलब क्या है?",
          },
          options: [
            {
              bn: "ঈদ মোবারক",
              en: "Happy Eid",
              hi: "ईद मुबारक",
            },
            {
              bn: "শুভ সকাল",
              en: "Good morning",
              hi: "सुप्रभात",
            },
            {
              bn: "স্বাগতম",
              en: "Welcome",
              hi: "स्वागत है",
            },
            {
              bn: "ধন্যবাদ",
              en: "Thank you",
              hi: "धन्यवाद",
            },
          ],
          answer: 0,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে বলা আছে — এখানে 'সেলামাত হারি রায়া' মানে ঈদ মোবারক।",
            en: "The fourth paragraph says it means happy Eid in Malaysia.",
            hi: "चौथे अनुच्छेद में कहा गया है — यहाँ इसका मतलब ईद मुबारक होता है।",
          },
        },
        {
          question: {
            bn: "জামিল বিদেশে কাজ করছে কেন?",
            en: "Why is Jamil working abroad?",
            hi: "जमील विदेश में काम क्यों कर रहा है?",
          },
          options: [
            {
              bn: "আপুর স্কুল ফি, বাবুর বই আর পরিবারের ঘরের জন্য",
              en: "For Apu's school fees, Babu's books, and the family house",
              hi: "आपू की स्कूल फ़ीस, बाबू की किताबें और परिवार के घर के लिए",
            },
            {
              bn: "মালয় ভাষা শেখার জন্য",
              en: "To learn the Malay language",
              hi: "मलय भाषा सीखने के लिए",
            },
            {
              bn: "পেট্রোনাস টাওয়ার দেখার জন্য",
              en: "To see the Petronas Towers",
              hi: "पेट्रोनास टावर्स देखने के लिए",
            },
            {
              bn: "মায়ের চিকিৎসার জন্য",
              en: "For his mother's treatment",
              hi: "माँ के इलाज के लिए",
            },
          ],
          answer: 0,
          explain: {
            bn: "পঞ্চম অনুচ্ছেদে জামিল লেখে — আপুর স্কুল ফি, বাবুর বই, আর ইটের ওপর ইট বসিয়ে বানানো ঘরটার জন্য সে এখানে আছে।",
            en: "In the fifth paragraph Jamil writes why he is here: Apu's school fees, Babu's books, and the small house they are building.",
            hi: "पाँचवें अनुच्छेद में जमील लिखता है — वह यहाँ इसलिए है: आपू की स्कूल फ़ीस, बाबू की किताबें और वह छोटा घर।",
          },
        },
      ],
    },
  },

  /* ───────────────────────── 4. Sundarbans Diary ───────────────────────── */
  {
    slug: "read-i1-sundarbans",
    level: "intermediate",
    category: "travel",
    minutes: 4,
    unit: 4,
    data: {
      title: {
        bn: "সুন্দরবনের দিনলিপি",
        en: "Sundarbans Diary",
        hi: "सुंदरबन की डायरी",
      },
      summary: {
        bn: "দুই দিনের নৌ-ভ্রমণের দিনলিপি: ঘন ম্যানগ্রোভ, চিত্রা হরিণ, জোয়ার-ভাটার হিসাব আর রাতে রেডিওতে বাঘ দেখা গেছে বলে সতর্কবার্তা।",
        en: "A two-day boat diary: dense mangroves, spotted deer, the arithmetic of tides, and a night-time radio warning that a tiger has been seen.",
        hi: "दो दिन की नाव-यात्रा की डायरी: घने मैंग्रोव, चीतल हिरण, ज्वार-भाटा का हिसाब, और रात में रेडियो पर बाघ दिखने की चेतावनी।",
      },
      genre: "diary",
      paragraphs: [
        {
          en: "Day 1 — 6:30 a.m. Our boat finally left the ghat at Khulna after two hours of loading rice, diesel and drinking water. I had never imagined the Sundarbans would feel so endless: green trees on both sides, and dark channels running between them like roads. The guide told us that the tide would rise again around noon, so we had to plan every stop carefully.",
          bn: "প্রথম দিন — সকাল ৬টা ৩০। চাল, ডিজেল আর খাবার পানি তোলায় দুই ঘণ্টা পর অবশেষে খুলনার ঘাট ছাড়ল আমাদের নৌকা। কখনো ভাবিনি সুন্দরবন এত বিস্তৃত মনে হবে: দু'পাশে সবুজ গাছ, আর তাদের মাঝে অন্ধকার খালগুলো রাস্তার মতো চলে গেছে। গাইড বলল, দুপুরের দিকে আবার জোয়ার উঠবে, তাই প্রতিটা স্টপ ভেবেচিন্তে সাজাতে হবে।",
          hi: "पहला दिन — सुबह 6:30। चावल, डीज़ल और पीने के पानी चढ़ाने के दो घंटे बाद आख़िरकार खुलना का घाट छोड़ा हमारी नाव ने। कभी सोचा नहीं था कि सुंदरबन इतना अनंत लगेगा: दोनों ओर हरे पेड़, और उनके बीच अंधेरी खाड़ियाँ सड़कों जैसी दौड़ रही हैं। गाइड ने बताया कि दोपहर के आसपास फिर ज्वार चढ़ेगा, इसलिए हर रुकने की जगह सोच-समझकर तय करनी होगी।",
        },
        {
          en: "Day 1 — 11:00 a.m. We stopped near a narrow canal and walked quietly to a watchtower. From the top, we counted seven spotted deer drinking at the water's edge, their ears moving like radar. Wild boars were digging the mud nearby. Our guide had been working here for nine years, and he could name every bird just by its sound.",
          bn: "প্রথম দিন — সকাল ১১টা। একটা সরু খালের ধারে নৌকা ভিড়লাম, তারপর চুপিচুপি হেঁটে ওয়াচটাওয়ারে উঠলাম। ওপর থেকে গুনলাম — পানির কিনারায় পান করছে সাতটা চিত্রা হরিণ, তাদের কান রাডারের মতো নড়ছে। কাছে বুনো শূকররা কাদা খুঁড়ছে। আমাদের গাইড নয় বছর ধরে এখানে কাজ করছেন, শুধু ডাক শুনেই যেকোনো পাখির নাম বলে দিতে পারেন।",
          hi: "पहला दिन — सुबह 11:00। एक तंग नहर के पास नाव रोकी, फिर धीरे-धीरे चलकर वॉचटावर पर चढ़े। ऊपर से गिने — पानी के किनारे सात चीतल जल पी रहे थे, उनके कान रडार की तरह हिल रहे थे। पास जंगली सूअर कीचड़ खोद रहे थे। हमारा गाइड नौ साल से यहाँ काम कर रहा है, सिर्फ़ आवाज़ सुनकर किसी भी पक्षी का नाम बता देता है।",
        },
        {
          en: "Day 1 — 4:00 p.m. The tide turned in the afternoon, and the direction of the water changed completely. Our cook said the rivers here breathe twice a day — high tide, low tide, like our own chest. The boatmen depend on these timings; if you anchor at the wrong hour, your boat can get stuck in the mud until the water returns.",
          bn: "প্রথম দিন — বিকেল ৪টা। বিকেলে জোয়ার ঘুরল, পানির দিক পুরো বদলে গেল। আমাদের রাঁধুনি বললেন, এখানকার নদী দিনে দুইবার শ্বাস নেয় — জোয়ার, ভাটা, আমাদের বুকের মতোই। মাঝিদের ভরসা এই সময়ের হিসাবেই; ভুল সময়ে নোঙর ফেললে নৌকা কাদায় আটকে যেতে পারে, পানি ফিরবে তখনই ছাড়া।",
          hi: "पहला दिन — शाम 4:00। दोपहर में ज्वार मुड़ा, और पानी की दिशा पूरी बदल गई। हमारे रसोइए ने कहा, यहाँ की नदियाँ दिन में दो बार साँस लेती हैं — ज्वार, भाटा, हमारी सीने की तरह। माझियों का भरोसा इन्हीं समयों पर है; ग़लत समय पर लंगर डाल दो तो नाव कीचड़ में फँस सकती है, तब तक जब पानी वापस न आ जाए।",
        },
        {
          en: "Day 2 — 7:00 a.m. This morning we found fresh paw prints on the muddy bank, pressed deep and wide. A tiger had walked here only a few hours ago. Nobody spoke loudly for the rest of the morning. The forest, which had seemed friendly yesterday, suddenly felt older and more careful than us.",
          bn: "দ্বিতীয় দিন — সকাল ৭টা। আজ সকালে কাদামাখা ডোবায় টাটকা পায়ের ছাপ দেখলাম — গভীর আর চওড়া। কয়েক ঘণ্টা আগেই বাঘ এখানে হেঁটে গেছে। সকালটা আর কেউ জোরে কথা বলল না। কাল যে বনটা বন্ধুর মতো মনে হচ্ছিল, হঠাৎ সেটা আমাদের চেয়ে বেশি প্রবীণ, বেশি সতর্ক মনে হতে লাগল।",
          hi: "दूसरा दिन — सुबह 7:00। आज सुबह कीचड़ भरे किनारे पर ताज़ा पंजों के निशान दिखे — गहरे और चौड़े। कुछ ही घंटे पहले बाघ यहाँ से गुज़रा था। उस सुबह अब कोई ऊँची आवाज़ में नहीं बोला। कल जो जंगल मित्रवत लग रहा था, वह अचानक हमसे पुराना और ज़्यादा सतर्क लगने लगा।",
        },
        {
          en: "Day 2 — 9:30 p.m. A warning came from another boat over the radio: a tiger had been seen swimming across a channel near our route, so the sailors must keep lamps and sounds ready. We were told not to sleep on the deck and to keep the kitchen fire small. The crew checked the boat's fences twice before dinner.",
          bn: "দ্বিতীয় দিন — রাত ৯টা ৩০। রেডিওতে আরেকটা নৌকা থেকে সতর্কবার্তা এল: আমাদের পথের কাছে একটা খাল পার হতে দেখা গেছে বাঘকে, তাই মাঝিদের লণ্ঠন আর শব্দ প্রস্তুত রাখতে হবে। ডেকে ঘুমোতে নিষেধ করা হলো, আর রান্নাঘরের আগুন ছোট রাখতে বলা হলো। রাতের খাওয়ার আগে ক্রু দুবার নৌকার বেড়াগুলো দেখে নিল।",
          hi: "दूसरा दिन — रात 9:30। रेडियो पर दूसरी नाव से चेतावनी आई: हमारे रास्ते के पास एक खाड़ी पार करते हुए बाघ देखा गया है, इसलिए माझियों को लालटेन और आवाज़ें तैयार रखनी होंगी। हमें डेक पर सोने से मना किया गया और रसोई की आग छोटी रखने को कहा गया। रात के खाने से पहले क्रू ने दो बार नाव की बाड़ें जाँचीं।",
        },
        {
          en: "Day 2 — 10:30 p.m. I am writing under a dim lamp while the forest hums outside. Somewhere in that darkness, the Royal Bengal Tiger is also awake. We came here as tourists, but tonight I understand one thing clearly: in the Sundarbans, humans are only guests, and the forest sets the rules.",
          bn: "দ্বিতীয় দিন — রাত ১০টা ৩০। ম্লান লণ্ঠনের আলোয় লিখছি, বাইরে বনটা গুনগুন করছে। ওই অন্ধকারের কোথাও রয়েল বেঙ্গল টাইগারও জেগে আছে। পর্যটক হয়ে এসেছি আমরা, কিন্তু আজ রাতে একটা কথা পরিষ্কার বুঝলাম: সুন্দরবনে মানুষ মাত্র অতিথি, আর নিয়ম ঠিক করে বনই।",
          hi: "दूसरा दिन — रात 10:30। मँझली लालटेन की रोशनी में लिख रहा हूँ, बाहर जंगल गुनगुना रहा है। उसी अँधेरे में कहीं रॉयल बंगाल टाइगर भी जाग रहा है। हम पर्यटक बनकर आए थे, लेकिन आज रात एक बात साफ़ समझ आई: सुंदरबन में इंसान सिर्फ़ मेहमान है, और नियम बनाता जंगल है।",
        },
      ],
      vocabulary: [
        {
          word: "tide",
          meaning: {
            bn: "জোয়ার-ভাটা — সমুদ্রের পানির নিয়মিত উঠা-নামা",
            en: "the regular rise and fall of the sea's water",
            hi: "ज्वार-भाटा — समुद्र के पानी का नियमित चढ़ना-उतरना",
          },
          example: "The fishermen check the tide before every trip.",
        },
        {
          word: "channel",
          meaning: {
            bn: "খাল / জলপথ — দুই ভূমির মাঝে পানি চলাচলের পথ",
            en: "a narrow passage of water between two lands",
            hi: "जलमार्ग — दो भूमि के बीच पानी का संकरा रास्ता",
          },
          example: "Our boat entered the channel between two islands.",
        },
        {
          word: "watchtower",
          meaning: {
            bn: "ওয়াচটাওয়ার — বন্যপ্রাণী দেখার জন্য ওঠা উঁচু মিনার",
            en: "a tall tower built for watching animals or the land around",
            hi: "वॉचटावर — जानवर या आसपास देखने के लिए बनी ऊँची मीनार",
          },
          example: "From the watchtower we saw the whole lake.",
        },
        {
          word: "anchor",
          meaning: {
            bn: "নোঙর ফেলা — নৌকা থামিয়ে স্থির করা",
            en: "to drop a heavy weight so a boat stops moving",
            hi: "लंगर डालना — नाव रोकने के लिए भारी वज़न गिराना",
          },
          example: "We anchored the boat near the fishing village.",
        },
        {
          word: "deck",
          meaning: {
            bn: "ডেক — নৌকা বা জাহাজের ওপরের খোলা তলা",
            en: "the open flat surface of a boat or ship",
            hi: "डेक — नाव या जहाज़ की खुली ऊपरी सतह",
          },
          example: "The sailors cleaned the deck every morning.",
        },
        {
          word: "bank",
          meaning: {
            bn: "ডোবা / নদীর ধার — নদী বা খালের পাশের জমি",
            en: "the land along the side of a river",
            hi: "किनारा — नदी के दोनों ओर की भूमि",
          },
          example: "Cattle were grazing on the river bank.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "নৌকা খুলনার ঘাট ছেড়েছিল কখন?",
            en: "When did the boat leave the ghat at Khulna?",
            hi: "नाव खुलना का घाट कब छोड़ी?",
          },
          options: [
            {
              bn: "মালপত্র তোলায় দুই ঘণ্টা পর, সকালে",
              en: "In the morning, after two hours of loading",
              hi: "सुबह, सामान चढ़ाने के दो घंटे बाद",
            },
            {
              bn: "দুপুরে জোয়ার ওঠার ঠিক আগে",
              en: "Just before the noon tide",
              hi: "दोपहर के ज्वार चढ़ने के ठीक पहले",
            },
            {
              bn: "প্রথম দিনের বিকেলে",
              en: "In the afternoon of Day 1",
              hi: "पहले दिन की दोपहर में",
            },
            {
              bn: "রাতে বাঘের সতর্কবার্তার পরে",
              en: "After the night tiger warning",
              hi: "रात की बाघ चेतावनी के बाद",
            },
          ],
          answer: 0,
          explain: {
            bn: "প্রথম অনুচ্ছেদে: চাল, ডিজেল আর পানি তোলায় দুই ঘণ্টা পর সকালে ঘাট ছাড়ে।",
            en: "First paragraph: the boat left in the morning after two hours of loading rice, diesel and water.",
            hi: "पहले अनुच्छेद में: चावल, डीज़ल और पानी चढ़ाने के दो घंटे बाद सुबह घाट छोड़ी।",
          },
        },
        {
          question: {
            bn: "ওয়াচটাওয়ার থেকে কী দেখা গেল?",
            en: "What did they see from the watchtower?",
            hi: "वॉचटावर से उन्हें क्या दिखा?",
          },
          options: [
            {
              bn: "পানির কিনারায় পান করতে থাকা সাতটা চিত্রা হরিণ",
              en: "Seven spotted deer drinking at the water's edge",
              hi: "पानी के किनारे जल पीते सात चीतल",
            },
            {
              bn: "একটা রয়েল বেঙ্গল টাইগার",
              en: "A Royal Bengal Tiger",
              hi: "एक रॉयल बंगाल टाइगर",
            },
            {
              bn: "নদীতে সাঁতার কাটা বুনো শূকর",
              en: "Wild boars swimming across the river",
              hi: "नदी पार करते जंगली सूअर",
            },
            {
              bn: "মাছ ধরতে থাকা মাঝিরা",
              en: "Boatmen catching fish",
              hi: "मछली पकड़ते माझी",
            },
          ],
          answer: 0,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে ওয়াচটাওয়ারে ওঠার পর সাতটা চিত্রা হরিণ গোনা হয়।",
            en: "In the second paragraph, seven spotted deer are counted from the watchtower.",
            hi: "दूसरे अनुच्छेद में वॉचटावर से सात चीतल गिने गए।",
          },
        },
        {
          question: {
            bn: "ভুল সময়ে নোঙর ফেললে কী হয়?",
            en: "What happens if you anchor at the wrong hour?",
            hi: "ग़लत समय पर लंगर डालने पर क्या होता है?",
          },
          options: [
            {
              bn: "নৌকা কাদায় আটকে যেতে পারে, পানি ফিরলে ছাড়ে",
              en: "The boat can get stuck in the mud until the water returns",
              hi: "नाव कीचड़ में फँस सकती है, जब तक पानी वापस न आए",
            },
            {
              bn: "নৌকা ডুবে যেতে পারে",
              en: "The boat can sink",
              hi: "नाव डूब सकती है",
            },
            {
              bn: "বাঘ নৌকার কাছে চলে আসে",
              en: "A tiger comes near the boat",
              hi: "बाघ नाव के पास आ जाता है",
            },
            {
              bn: "গাইডরা নতুন রাস্তা খোঁজে",
              en: "The guides find a new route",
              hi: "गाइड नया रास्ता ढूँढ़ते हैं",
            },
          ],
          answer: 0,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদে মাঝিদের সময়-হিসাব নিয়ে এ কথা বলা হয়েছে।",
            en: "The third paragraph explains this about the boatmen's tide timings.",
            hi: "तीसरे अनुच्छेद में माझियों के समय-हिसाब के बारे में यह कहा गया है।",
          },
        },
        {
          question: {
            bn: "কাদামাখা ডোবায় টাটকা পায়ের ছাপ কী বোঝাল?",
            en: "What did the fresh paw prints on the muddy bank mean?",
            hi: "कीचड़ भरे किनारे पर ताज़ा पंजों के निशान का क्या मतलब था?",
          },
          options: [
            {
              bn: "কয়েক ঘণ্টা আগে বাঘ হেঁটে গেছে",
              en: "A tiger had walked there a few hours ago",
              hi: "कुछ ही घंटे पहले बाघ वहाँ से गुज़रा था",
            },
            {
              bn: "হরিণের পাল সেদিন ঘুরেছে",
              en: "A herd of deer had passed by",
              hi: "हिरणों का झुंड वहाँ से गुज़रा था",
            },
            {
              bn: "মাছ ধরার নতুন নৌকা এসেছে",
              en: "A new fishing boat had arrived",
              hi: "मछली पकड़ने की नई नाव आई थी",
            },
            {
              bn: "ভারী বৃষ্টি পড়েছে",
              en: "It had rained heavily",
              hi: "भारी बारिश हुई थी",
            },
          ],
          answer: 0,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে: গভীর-চওড়া ছাপ দেখে বোঝা যায়, কয়েক ঘণ্টা আগেই বাঘ হেঁটে গেছে।",
            en: "Fourth paragraph: the deep, wide prints showed a tiger had walked there only a few hours ago.",
            hi: "चौथे अनुच्छेद में: गहरे-चौड़े निशान बताते हैं कि कुछ ही घंटे पहले बाघ वहाँ से गुज़रा था।",
          },
        },
        {
          question: {
            bn: "রাতের সতর্কবার্তায় যাত্রীদের কী নিষেধ করা হলো?",
            en: "What were the passengers told not to do at night?",
            hi: "रात में यात्रियों को क्या करने से मना किया गया?",
          },
          options: [
            {
              bn: "ডেকে ঘুমোতে নিষেধ করা হলো",
              en: "They were told not to sleep on the deck",
              hi: "डेक पर सोने से मना किया गया",
            },
            {
              bn: "রেডিও চালাতে নিষেধ করা হলো",
              en: "They were told not to use the radio",
              hi: "रेडियो चलाने से मना किया गया",
            },
            {
              bn: "জানালা খোলা রাখতে নিষেধ করা হলো",
              en: "They were told not to keep the windows open",
              hi: "खिड़कियाँ खुली रखने से मना किया गया",
            },
            {
              bn: "রাতের খাওয়া না খেতে নিষেধ করা হলো",
              en: "They were told not to eat dinner",
              hi: "रात का खाना न खाने को कहा गया",
            },
          ],
          answer: 0,
          explain: {
            bn: "পঞ্চম অনুচ্ছেদে: ডেকে ঘুমোতে নিষেধ করা হয় আর রান্নার আগুন ছোট রাখতে বলা হয়।",
            en: "Fifth paragraph: they were told not to sleep on the deck and to keep the kitchen fire small.",
            hi: "पाँचवें अनुच्छेद में: डेक पर सोने से मना किया गया और रसोई की आग छोटी रखने को कहा गया।",
          },
        },
      ],
    },
  },

  /* ───────────────────────── 5. Why Our Rivers Are Changing ───────────────────────── */
  {
    slug: "read-i1-rivers",
    level: "intermediate",
    category: "science",
    minutes: 4,
    unit: 5,
    data: {
      title: {
        bn: "আমাদের নদীগুলো বদলে যাচ্ছে কেন",
        en: "Why Our Rivers Are Changing",
        hi: "हमारी नदियाँ बदल क्यों रही हैं",
      },
      summary: {
        bn: "নদীভাঙন আর দূষণ কীভাবে গ্রাম গিলে ফেলছে, মাছ-ফসলে কী প্রভাব পড়ছে — আর সাধারণ মানুষ এখনই কী করতে পারে, সহজ ভাষায় এক বিজ্ঞানভিত্তিক প্রবন্ধ।",
        en: "A simple science article on how river erosion and pollution swallow villages, what they do to fish and crops, and what ordinary people can do right now.",
        hi: "एक सरल विज्ञान लेख: नदी कटाव और प्रदूषण कैसे गाँव निगल रहे हैं, मछलियों और फ़सलों पर क्या असर पड़ रहा है, और आम लोग अभी क्या कर सकते हैं।",
      },
      genre: "article",
      paragraphs: [
        {
          en: "Every year, thousands of families in Bangladesh watch their land disappear into the river. This process is called river erosion, and it happens when strong currents slowly wash away the soil of the riverbank. Scientists say that erosion has become faster in the last thirty years because of climate change and because dams upstream control the water unnaturally.",
          bn: "প্রতি বছর বাংলাদেশের হাজার হাজার পরিবার দেখে — তাদের জমি নদীতে গিলে যাচ্ছে। এই প্রক্রিয়ার নাম নদীভাঙন; স্রোত যখন ধীরে ধীরে নদীর পাড়ের মাটি বয়ে নিয়ে যায়, তখনই ঘটে এ ঘটনা। বিজ্ঞানীরা বলছেন, জলবায়ু পরিবর্তন আর ওপরের স্রোতে বাঁধ দিয়ে পানির অস্বাভাবিক নিয়ন্ত্রণের কারণে গত ত্রিশ বছরে ভাঙন আরও দ্রুত হয়েছে।",
          hi: "हर साल बांग्लादेश के हज़ारों परिवार देखते हैं कि उनकी ज़मीन नदी में समा रही है। इस प्रक्रिया का नाम नदी-कटाव है; यह तब होता है जब तेज़ धाराएँ धीरे-धीरे नदी के किनारे की मिट्टी बहा ले जाती हैं। वैज्ञानिक कहते हैं, जलवायु परिवर्तन और ऊपरी धारा में बाँधों द्वारा पानी के अस्वाभाविक नियंत्रण की वजह से पिछले तीस सालों में कटाव और तेज़ हुआ है।",
        },
        {
          en: "During the monsoon, rivers carry much more water than in the dry season. When this flood water hits a weak bank, it pulls out sand and clay piece by piece. In a single night, a village school or a hundred-year-old homestead can fall into the water. People who lose their land usually move to cities, where they often end up living in slums.",
          bn: "বর্ষাকালে নদী শুকনো মৌসুমের চেয়ে অনেক বেশি পানি বহন করে। এই বন্যার পানি যখন দুর্বল পাড়ে আছড়ে পড়ে, তখন বালি আর এঁটেল মাটি একে একে খুলে নিয়ে যায়। এক রাতেই গ্রামের স্কুল বা শতবর্ষ-পুরোনো ভিটা পানিতে তলিয়ে যেতে পারে। জমি হারানো মানুষরা সাধারণত শহরে চলে যান, আর সেখানে তাদের অনেকে শেষমেশ বস্তিতে জীবন কাটাতে বাধ্য হন।",
          hi: "मानसून में नदियाँ शुष्क मौसम से कहीं ज़्यादा पानी ढोती हैं। जब यह बाढ़ का पानी कमज़ोर किनारे से टकराता है, तो रेत और चिकनी मिट्टी एक-एक कर बहा ले जाता है। एक ही रात में गाँव का स्कूल या सौ साल पुराना घर पानी में समा सकता है। ज़मीन खोने वाले लोग आम तौर पर शहर चले जाते हैं, और वहाँ उनमें से बहुतों को अंत में झुग्गियों में रहना पड़ता है।",
        },
        {
          en: "Erosion is not the only danger. Pollution is slowly poisoning our rivers as well. Factories near Dhaka and Narayanganj release chemical waste directly into the water, and many of them have never installed a proper treatment plant. As a result, fish populations have dropped sharply, and some rivers now smell bad even in winter.",
          bn: "ভাঙনই একমাত্র বিপদ নয়। দূষণও ধীরে ধীরে আমাদের নদীগুলোকে বিষ দিচ্ছে। ঢাকা আর নারায়ণগঞ্জের কারখানাগুলো রাসায়নিক বর্জ্য সোজা পানিতে ছেড়ে দেয়, আর তাদের অনেকেই কোনোদিন যথাযথ শোধনাগার বসায়নি। ফলে মাছের সংখ্যা কমে গেছে ভয়ংকরভাবে, আর কিছু নদী এখন শীতকালেও দুর্গন্ধ ছড়ায়।",
          hi: "कटाव ही एकमात्र ख़तरा नहीं है। प्रदूषण भी धीरे-धीरे हमारी नदियों को ज़हर दे रहा है। ढाका और नारायणगंज के क़रीब के कारख़ाने रासायनिक कचरा सीधे पानी में छोड़ देते हैं, और उनमें से कई ने कभी ठीक से ट्रीटमेंट प्लांट नहीं लगाया। नतीजतन, मछलियों की संख्या तेज़ी से घट गई है, और कुछ नदियाँ अब सर्दियों में भी बदबू देती हैं।",
        },
        {
          en: "The effects reach far beyond the river itself. Farmers who used the water for irrigation find that their pumps pull up dirty water that damages crops. Boatmen report fewer passengers because there are fewer fish markets on the banks. Children who swim in polluted water suffer from skin diseases every summer.",
          bn: "প্রভাব শুধু নদীতেই থেমে থাকে না। যেসব কৃষক পানি সেচের কাজে লাগাতেন, তারা দেখছেন তাদের পাম্প তুলে আনা নোংরা পানি ফসলের ক্ষতি করছে। পাড়ে মাছের আড়ত কমে যাওয়ায় মাঝিরা কম যাত্রী পাচ্ছেন। দূষিত পানিতে সাঁতার কাটা শিশুরা প্রতি গ্রীষ্মে চর্মরোগে ভোগে।",
          hi: "असर सिर्फ़ नदी तक ही नहीं रुकता। जो किसान पानी सिंचाई में इस्तेमाल करते थे, वे पा रहे हैं कि उनके पंप जो गंदा पानी ऊपर उठाते हैं, वह फ़सल बिगाड़ देता है। किनारों पर मछली के बाज़ार घट जाने से माझियों को कम सवारियाँ मिलती हैं। प्रदूषित पानी में तैरने वाले बच्चे हर गर्मी में त्वचा-रोग से पीड़ित होते हैं।",
        },
        {
          en: "The good news is that people are not helpless. Villages that plant vetiver grass and trees along the bank lose soil more slowly, because the roots hold the earth together. Local committees can also stop illegal sand lifting by informing the administration, and schools have started teaching students to test water samples with simple kits.",
          bn: "ভালো খবর হলো — মানুষ অসহায় নয়। যেসব গ্রাম পাড় ধরে বেতরাজ ঘাস আর গাছ লাগায়, তাদের মাটি ধীরে খসে পড়ে, কারণ শিকড় মাটিকে জড়িয়ে ধরে রাখে। স্থানীয় কমিটি প্রশাসনকে খবর দিয়ে অবৈধ বালু উত্তোলন থামাতে পারে, আর স্কুলগুলো শিক্ষার্থীদের সহজ কিট দিয়ে পানির নমুনা পরীক্ষা শেখানো শুরু করেছে।",
          hi: "अच्छी ख़बर यह है कि लोग बेबस नहीं हैं। जो गाँव किनारे के साथ खस-घास और पेड़ लगाते हैं, उनकी मिट्टी धीरे बहती है, क्योंकि जड़ें मिट्टी को बाँधकर रखती हैं। स्थानीय समितियाँ प्रशासन को सूचना देकर अवैध रेत खनन रोक सकती हैं, और स्कूलों ने बच्चों को आसान किट से पानी के नमूने जाँचना सिखाना शुरू कर दिया है।",
        },
        {
          en: "Rivers have given our country its fertile land, its fish and its transport routes for centuries. If we protect them now — by planting green belts, treating factory waste and raising awareness — we will be able to hand over living rivers to our children, not dying streams.",
          bn: "শত শত বছর ধরে নদীই দিয়েছে আমাদের দেশের উর্বর জমি, মাছ আর যাতায়াতের জলপথ। আমরা এখনই যদি ওদের বাঁচাই — সবুজ বেল্ট লাগিয়ে, কারখানার বর্জ্য শোধন করে, সচেতনতা ছড়িয়ে — তাহলে আমাদের সন্তানদের হাতে তুলে দিতে পারব প্রাণবন্ত নদী, মরতে থাকা খাল নয়।",
          hi: "सदियों से नदियों ने ही हमारे देश को उपजाऊ ज़मीन, मछलियाँ और आवाजाही के जलमार्ग दिए हैं। अगर हम अब उनकी रक्षा करें — हरी पट्टियाँ लगाकर, कारख़ानों का कचरा शुद्ध करके और जागरूकता फैलाकर — तो हम अपने बच्चों को सौंप पाएँगे जीवंत नदियाँ, मरती धाराएँ नहीं।",
        },
      ],
      vocabulary: [
        {
          word: "erosion",
          meaning: {
            bn: "ভাঙন / ক্ষয় — স্রোতে মাটি ধীরে ধীরে খসে যাওয়া",
            en: "the slow washing away of soil by water or wind",
            hi: "कटाव — पानी या हवा से मिट्टी का धीरे-धीरे बह जाना",
          },
          example: "Planting trees reduces soil erosion on hillsides.",
        },
        {
          word: "currents",
          meaning: {
            bn: "স্রোত — পানির টানা বয়ে চলা প্রবাহ",
            en: "the steady flow of water moving in one direction",
            hi: "धाराएँ — पानी का एक दिशा में बहता प्रवाह",
          },
          example: "Strong currents make swimming dangerous.",
        },
        {
          word: "monsoon",
          meaning: {
            bn: "বর্ষা — টানা মাসের পর মাস ভারী বৃষ্টির মৌসুম",
            en: "the season when heavy rains fall for months",
            hi: "मानसून — वह मौसम जब महीनों भारी बारिश होती है",
          },
          example: "Villagers repair the roads before the monsoon arrives.",
        },
        {
          word: "irrigation",
          meaning: {
            bn: "সেচ — ফসলের খেতে পানি পৌঁছে দেওয়ার ব্যবস্থা",
            en: "the system of bringing water to fields for crops",
            hi: "सिंचाई — खेतों में फ़सल के लिए पानी पहुँचाने की व्यवस्था",
          },
          example: "The new canal improved irrigation for fifty farms.",
        },
        {
          word: "fertile",
          meaning: {
            bn: "উর্বর — যে জমিতে ভালো ফসল জন্মে",
            en: "land where crops grow easily and well",
            hi: "उपजाऊ — जिस ज़मीन में फ़सल अच्छी होती है",
          },
          example: "The delta's fertile soil feeds millions of people.",
        },
        {
          word: "treatment",
          meaning: {
            bn: "শোধন — নোংরা পানি বা বর্জ্য পরিষ্কার করার প্রক্রিয়া",
            en: "the process of cleaning something, such as dirty water",
            hi: "शोधन — किसी चीज़ को साफ़ करने की प्रक्रिया, जैसे गंदा पानी",
          },
          example: "The city built a treatment plant for dirty water.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "নদীভাঙন কখন ঘটে?",
            en: "When does river erosion happen?",
            hi: "नदी कटाव कब होता है?",
          },
          options: [
            {
              bn: "স্রোত ধীরে ধীরে নদীর পাড়ের মাটি বয়ে নিলে",
              en: "When strong currents slowly wash away the soil of the riverbank",
              hi: "जब तेज़ धाराएँ किनारे की मिट्टी धीरे-धीरे बहा ले जाती हैं",
            },
            {
              bn: "শীতে নদীর পানি শুকিয়ে গেলে",
              en: "When rivers dry up in winter",
              hi: "जब सर्दियों में नदी सूख जाती है",
            },
            {
              bn: "জাহাজ বেশি মাল নিয়ে চললে",
              en: "When ships carry too much cargo",
              hi: "जब जहाज़ ज़्यादा माल ढोते हैं",
            },
            {
              bn: "মাছের সংখ্যা কমে গেলে",
              en: "When fish populations drop",
              hi: "जब मछलियों की संख्या घट जाती है",
            },
          ],
          answer: 0,
          explain: {
            bn: "প্রথম অনুচ্ছেদে: স্রোত ধীরে ধীরে নদীর পাড়ের মাটি বয়ে নিলেই ভাঙন ঘটে।",
            en: "First paragraph: erosion happens when strong currents slowly wash away the riverbank soil.",
            hi: "पहले अनुच्छेद में: तेज़ धाराएँ किनारे की मिट्टी धीरे-धीरे बहा ले जाने पर कटाव होता है।",
          },
        },
        {
          question: {
            bn: "গত ত্রিশ বছরে ভাঙন দ্রুত হওয়ার কারণ কী?",
            en: "Why has erosion become faster in the last thirty years?",
            hi: "पिछले तीस सालों में कटाव तेज़ क्यों हुआ है?",
          },
          options: [
            {
              bn: "জলবায়ু পরিবর্তন ও ওপরস্রোতে বাঁধের অস্বাভাবিক নিয়ন্ত্রণ",
              en: "Climate change and dams controlling the water unnaturally upstream",
              hi: "जलवायु परिवर्तन और ऊपरी धारा में बाँधों का अस्वाभाविक नियंत्रण",
            },
            {
              bn: "মাঝিদের বেশি নৌকা চালানো",
              en: "Too many boats run by boatmen",
              hi: "माझियों की बहुत सारी नावें",
            },
            {
              bn: "পাড়ে শিকড়ওয়ালা গাছ লাগানো",
              en: "Planting rooted trees on the bank",
              hi: "किनारे पर जड़ वाले पेड़ लगाना",
            },
            {
              bn: "শীতের কুয়াশা",
              en: "Winter fog",
              hi: "सर्दियों की कोहरा",
            },
          ],
          answer: 0,
          explain: {
            bn: "প্রথম অনুচ্ছেদে বিজ্ঞানীদের ব্যাখ্যা: জলবায়ু পরিবর্তন আর ওপরস্রোতের বাঁধ।",
            en: "First paragraph: scientists blame climate change and upstream dams.",
            hi: "पहले अनुच्छेद में वैज्ञानिकों की व्याख्या: जलवायु परिवर्तन और ऊपरी धारा के बाँध।",
          },
        },
        {
          question: {
            bn: "কারখানাগুলো নদীতে কী করছে?",
            en: "What are the factories doing to the rivers?",
            hi: "कारख़ाने नदियों के साथ क्या कर रहे हैं?",
          },
          options: [
            {
              bn: "রাসায়নিক বর্জ্য সোজা পানিতে ছেড়ে দেয়",
              en: "They release chemical waste directly into the water",
              hi: "रासायनिक कचरा सीधे पानी में छोड़ देते हैं",
            },
            {
              bn: "মাছের পোনা ছাড়ছে",
              en: "They release fish fry",
              hi: "मछली के बच्चे छोड़ते हैं",
            },
            {
              bn: "পানি শোধনাগারে পাঠাচ্ছে",
              en: "They send water to treatment plants",
              hi: "पानी ट्रीटमेंट प्लांट में भेजते हैं",
            },
            {
              bn: "নতুন ঘাট নির্মাণ করছে",
              en: "They build new ghats",
              hi: "नए घाट बनाते हैं",
            },
          ],
          answer: 0,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদে: ঢাকা-নারায়ণগঞ্জের কারখানাগুলো রাসায়নিক বর্জ্য সোজা পানিতে ছাড়ে।",
            en: "Third paragraph: factories near Dhaka and Narayanganj release chemical waste directly into the water.",
            hi: "तीसरे अनुच्छेद में: ढाका-नारायणगंज के कारख़ाने रासायनिक कचरा सीधे पानी में छोड़ते हैं।",
          },
        },
        {
          question: {
            bn: "পাড়ে বেতরাজ ঘাস ও গাছ লাগালে কী হয়?",
            en: "What happens when villages plant vetiver grass and trees along the bank?",
            hi: "किनारे पर खस-घास और पेड़ लगाने से क्या होता है?",
          },
          options: [
            {
              bn: "শিকড় মাটি জড়িয়ে রাখায় মাটি ধীরে খসে",
              en: "The roots hold the earth together, so soil is lost more slowly",
              hi: "जड़ें मिट्टी को बाँधकर रखती हैं, इसलिए मिट्टी धीरे बहती है",
            },
            {
              bn: "পানি শুকিয়ে যায়",
              en: "The water dries up",
              hi: "पानी सूख जाता है",
            },
            {
              bn: "ফসল দ্বিগুণ হয়ে যায়",
              en: "Crops double at once",
              hi: "फ़सल तुरंत दोगुनी हो जाती है",
            },
            {
              bn: "মাছ বেশি জন্মায়",
              en: "More fish are born",
              hi: "ज़्यादा मछलियाँ पैदा होती हैं",
            },
          ],
          answer: 0,
          explain: {
            bn: "পঞ্চম অনুচ্ছেদে: শিকড় মাটিকে জড়িয়ে রাখে বলে মাটি ধীরে খসে পড়ে।",
            en: "Fifth paragraph: because the roots hold the earth together, soil is lost more slowly.",
            hi: "पाँचवें अनुच्छेद में: जड़ें मिट्टी को बाँधकर रखती हैं, इसलिए मिट्टी धीरे बहती है।",
          },
        },
        {
          question: {
            bn: "জমি হারানো মানুষের সাধারণত কী হয়?",
            en: "What usually happens to people who lose their land?",
            hi: "ज़मीन खोने वाले लोगों का आम तौर पर क्या होता है?",
          },
          options: [
            {
              bn: "শহরে চলে যায়, অনেকে বস্তিতে জীবন কাটাতে বাধ্য হয়",
              en: "They move to cities and often end up living in slums",
              hi: "वे शहर चले जाते हैं और अक्सर झुग्गियों में रहने पड़ते हैं",
            },
            {
              bn: "নদীর পাড়ে নতুন ঘর বাঁধে",
              en: "They build new houses on the riverbank",
              hi: "वे नदी के किनारे नए घर बनाते हैं",
            },
            {
              bn: "বিদেশে চাকরি খোঁজে",
              en: "They look for jobs abroad",
              hi: "वे विदेश में नौकरी ढूँढ़ते हैं",
            },
            {
              bn: "সরকারি চাকরি পেয়ে যায়",
              en: "They easily get government jobs",
              hi: "उन्हें आसानी से सरकारी नौकरी मिल जाती है",
            },
          ],
          answer: 0,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে: জমি হারানো মানুষরা সাধারণত শহরে যান, অনেকে বস্তিতে জীবন কাটাতে বাধ্য হন।",
            en: "Second paragraph: people who lose their land usually move to cities and often end up in slums.",
            hi: "दूसरे अनुच्छेद में: ज़मीन खोने वाले लोग आम तौर पर शहर जाते हैं और अक्सर झुग्गियों में रहने पड़ते हैं।",
          },
        },
      ],
    },
  },

  /* ───────────────────────── 6. Rickshaw Driver's Daughter Wins Scholarship ───────────────────────── */
  {
    slug: "read-i1-scholarship",
    level: "intermediate",
    category: "inspire",
    minutes: 3,
    unit: 0,
    data: {
      title: {
        bn: "রিকশাওয়ালার মেয়ে পেল বৃত্তি",
        en: "Rickshaw Driver's Daughter Wins Scholarship",
        hi: "रिक्शा चालक की बेटी को मिली छात्रवृत्ति",
      },
      summary: {
        bn: "কমিলার রিকশাচালক জয়নালের মেয়ে সুমাইয়া পাবলিক বিশ্ববিদ্যালয়ে ইঞ্জিনিয়ারিং পড়ার পূর্ণ বৃত্তি জিতেছে — বাবা, মেয়ে আর হেডমাস্টারের সরাসরি উদ্ধৃতিসহ সংবাদ প্রতিবেদন।",
        en: "Sumaiya, daughter of a Comilla rickshaw puller, has won a full scholarship to study engineering at a public university — a news report with direct quotes from the father, the daughter and the headmaster.",
        hi: "कोमिल्ला के रिक्शा चालक की बेटी सुमैया ने सरकारी यूनिवर्सिटी में इंजीनियरिंग पढ़ने की पूरी छात्रवृत्ति जीती है — पिता, बेटी और प्रधानाध्यापक के सीधे कथनों के साथ समाचार रिपोर्ट।",
      },
      genre: "news",
      paragraphs: [
        {
          en: "COMILLA, March 12: When the result was published on the school notice board, eighteen-year-old Sumaiya Akter could not believe her eyes. The daughter of a rickshaw puller from Muradnagar has won a fully funded scholarship to study engineering at a public university — one of only twelve such scholarships given across the country this year.",
          bn: "কমিলা, ১২ মার্চ: স্কুলের নোটিশ বোর্ডে ফল টাঙানো হলে আঠারো বছরের সুমাইয়া আক্তার নিজের চোখকে বিশ্বাস করতে পারেননি। মুরাদনগরের এক রিকশাচালকের মেয়ে জিতেছে পাবলিক বিশ্ববিদ্যালয়ে ইঞ্জিনিয়ারিং পড়ার সম্পূর্ণ বৃত্তি — এ বছর সারা দেশে এ ধরনের মাত্র বারোটি বৃত্তি দেওয়া হয়েছে।",
          hi: "कोमिल्ला, 12 मार्च: स्कूल के नोटिस बोर्ड पर परिणाम लगते ही अठारह साल की सुमैया आक्तार अपनी आँखों पर विश्वास नहीं कर पाईं। मुरादनगर के एक रिक्शा चालक की बेटी ने सरकारी यूनिवर्सिटी में इंजीनियरिंग पढ़ने की पूरी छात्रवृत्ति जीती है — इस साल पूरे देश में ऐसी सिर्फ़ बारह छात्रवृत्तियाँ दी गई हैं।",
        },
        {
          en: "Her father, Md. Joynal Mia, has been pulling a rickshaw in Comilla town for twenty-two years. 'I never studied past class five, but I always told my daughter that education would carry her further than my rickshaw can,' he said, wiping his tears in front of reporters. 'Today my dream has been answered.'",
          bn: "তার বাবা মো. জয়নাল মিয়া বাইশ বছর ধরে কমিলা শহরে রিকশা চালাচ্ছেন। 'আমি পঞ্চম শ্রেণির পরে আর পড়িনি, কিন্তু মেয়েকে সবসময় বলেছি — শিক্ষা তোকে আমার রিকশার চেয়েও দূরে নিয়ে যাবে,' সাংবাদিকদের সামনে চোখ মোছতে মোছতে বললেন তিনি। 'আজ আমার স্বপ্নের জবাব মিলেছে।'",
          hi: "उनके पिता मोहम्मद जयनाल मिया बाईस साल से कोमिल्ला शहर में रिक्शा चला रहे हैं। 'मैंने पाँचवीं कक्षा के आगे नहीं पढ़ा, लेकिन बेटी से हमेशा कहता था — पढ़ाई तुझे मेरे रिक्शे से भी आगे ले जाएगी,' संवाददाताओं के सामने आँखें पोंछते हुए उन्होंने कहा। 'आज मेरे सपने का जवाब मिल गया।'",
        },
        {
          en: "Sumaiya's journey was not easy. She studied at night under a dim solar lamp because electricity in her village failed often, and she helped her mother roll bidis after school to support the family. Despite these difficulties, she stood third in her district in the higher secondary examinations.",
          bn: "সুমাইয়ার পথ একেবারে মসৃণ ছিল না। গ্রামে প্রায়ই বিদ্যুৎ চলে যেত, তাই রাতে সে পড়ত ম্লান একটা সোলার ল্যাম্পের আলোয়; আর পরিবারের হাল ধরতে স্কুলের পরে মাকে বিড়ি বাঁধতে সাহায্য করত। এত বাধা পেরিয়েও উচ্চ মাধ্যমিক পরীক্ষায় জেলায় সে তৃতীয় স্থান পেয়েছে।",
          hi: "सुमैया का सफ़र बिल्कुल आसान नहीं था। गाँव में अक्सर बिजली चली जाती थी, इसलिए वह रात में एक मँझले सोलर लैंप की रोशनी में पढ़ती थी; और परिवार का सहारा बनने के लिए स्कूल के बाद माँ को बीड़ी बाँधने में मदद करती थी। इतनी कठिनाइयों के बावजूद उच्च माध्यमिक परीक्षा में वह ज़िले में तीसरा स्थान पाई।",
        },
        {
          en: "'My father's hands know only hard work, and mine will know machines and mathematics,' Sumaiya told this reporter with a bright smile. 'I want to design low-cost water filters for villages like ours. So many people drink unsafe water here, and I have been thinking about this problem since class nine.'",
          bn: "'আব্বার হাত শুধু কষ্টের কাজ চেনে, আর আমার হাত চিনবে যন্ত্র আর অঙ্ক,' উজ্জ্বল হাসিতে এই প্রতিবেদককে বললেন সুমাইয়া। 'আমি আমাদের মতো গ্রামের জন্য কম খরচের পানি ছাঁকনি ডিজাইন করতে চাই। এখানে এত মানুষ অনিরাপদ পানি খায়, আর নবম শ্রেণি থেকেই এই সমস্যা নিয়ে ভাবছি।'",
          hi: "'पिताजी के हाथ सिर्फ़ कठिन मेहनत जानते हैं, और मेरे हाथ मशीनें और गणित जानेंगे,' सुमैया ने चमकती मुस्कान के साथ इस रिपोर्टर से कहा। 'मैं हमारे जैसे गाँवों के लिए कम ख़र्च वाले पानी-फ़िल्टर डिज़ाइन करना चाहती हूँ। यहाँ इतने लोग असुरक्षित पानी पीते हैं, और मैं नौवीं कक्षा से इस समस्या पर सोच रही हूँ।'",
        },
        {
          en: "The headmaster of her school, Abdul Karim, praised both the student and her family. 'Sumaiya has never missed a single class in two years, even during the flood season,' he said. 'This scholarship proves that talent exists everywhere in Bangladesh. What is missing is opportunity, and when opportunity arrives, our children fly.'",
          bn: "তার স্কুলের প্রধান শিক্ষক আবদুল করিম শিক্ষার্থী আর তার পরিবার — দুজনকেই প্রশংসা করলেন। 'দুই বছরে সুমাইয়া একটা ক্লাসও মিস করেনি, বানের মৌসুমেও না,' বললেন তিনি। 'এই বৃত্তি প্রমাণ করে, প্রতিভা বাংলাদেশের প্রতিটা কোণায় আছে। যা নেই, তা সুযোগ; আর সুযোগ এলেই আমাদের ছেলেমেয়ে উড়ে যায়।'",
          hi: "उनके स्कूल के प्रधानाध्यापक अब्दुल करीम ने छात्रा और उसके परिवार — दोनों की प्रशंसा की। 'दो साल में सुमैया ने एक भी कक्षा नहीं छोड़ी, बाढ़ के मौसम में भी नहीं,' उन्होंने कहा। 'यह छात्रवृत्ति साबित करती है कि प्रतिभा बांग्लादेश के हर कोने में है। जो नहीं है वह मौक़ा; और मौक़ा आते ही हमारे बच्चे उड़ जाते हैं।'",
        },
        {
          en: "The scholarship will cover her tuition, books and hostel fees for four years. The university authorities confirmed that Sumaiya has already been admitted to the Department of Electrical Engineering, where classes will begin next month. Her village, meanwhile, is preparing a small reception — the biggest celebration Muradnagar has seen in years.",
          bn: "বৃত্তিতে চার বছরের টিউশন, বই আর হোস্টেল ফি — সবই মিটবে। বিশ্ববিদ্যালয় কর্তৃপক্ষ নিশ্চিত করেছে, সুমাইয়া ইতোমধ্যে তড়িৎ প্রকৌশল বিভাগে ভর্তি হয়েছে; ক্লাস শুরু হবে আগামী মাসে। অন্যদিকে তার গ্রাম সাজিয়ে চলেছে এক ছোট্ট সংবর্ধনা — মুরাদনগর বহু বছর পর যে উৎসব দেখতে যাচ্ছে।",
          hi: "छात्रवृत्ति में चार साल की ट्यूशन, किताबें और हॉस्टल फ़ीस — सब शामिल है। यूनिवर्सिटी प्रशासन ने पुष्टि की है कि सुमैया का भर्ती पहले ही इलेक्ट्रिकल इंजीनियरिंग विभाग में हो चुका है; कक्षाएँ अगले महीने से शुरू होंगी। इधर उसका गाँव एक छोटे स्वागत-समारोह की तैयारी कर रहा है — मुरादनगर वर्षों बाद जो जश्न देखने जा रहा है।",
        },
      ],
      vocabulary: [
        {
          word: "scholarship",
          meaning: {
            bn: "বৃত্তি — পড়াশোনার খরচ মেটাতে দেওয়া পুরস্কার",
            en: "money given to a student to pay for their studies",
            hi: "छात्रवृत्ति — पढ़ाई के ख़र्च के लिए दी जाने वाली राशि",
          },
          example: "He won a scholarship to a medical college.",
        },
        {
          word: "examinations",
          meaning: {
            bn: "পরীক্ষাগুলো — যোগ্যতা যাচাইয়ের আনুষ্ঠানিক পরীক্ষা",
            en: "formal tests that measure what students have learned",
            hi: "परीक्षाएँ — छात्रों की योग्यता जाँचने के औपचारिक टेस्ट",
          },
          example: "She passed all her examinations with high marks.",
        },
        {
          word: "opportunity",
          meaning: {
            bn: "সুযোগ — কিছু করার বা এগিয়ে যাওয়ার মৌকা",
            en: "a chance to do or achieve something",
            hi: "अवसर — कुछ करने या हासिल करने का मौक़ा",
          },
          example: "This job is a great opportunity for young engineers.",
        },
        {
          word: "tuition",
          meaning: {
            bn: "টিউশন ফি — প্রতিষ্ঠানে পড়ানোর নিয়মিত বেতন",
            en: "the regular fee a school or university charges for teaching",
            hi: "ट्यूशन — स्कूल या यूनिवर्सिटी द्वारा पढ़ाई के लिए ली जाने वाली फ़ीस",
          },
          example: "The government pays the tuition of poor students.",
        },
        {
          word: "admitted",
          meaning: {
            bn: "ভর্তি হওয়া — কোনো প্রতিষ্ঠানে আনুষ্ঠানিকভাবে নাম লেখানো",
            en: "officially accepted into a school, college or hospital",
            hi: "भर्ती — स्कूल, कॉलेज या अस्पताल में आधिकारिक रूप से स्वीकार",
          },
          example: "She was admitted to the best university in the city.",
        },
        {
          word: "reception",
          meaning: {
            bn: "সংবর্ধনা — কাউকে সম্মান জানানোর স্বাগত অনুষ্ঠান",
            en: "a formal welcome event or party for a person",
            hi: "स्वागत-समारोह — किसी का सम्मान करने का आयोजन",
          },
          example: "The club held a reception for the new members.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "সুমাইয়া কী জিতেছে?",
            en: "What has Sumaiya won?",
            hi: "सुमैया ने क्या जीता है?",
          },
          options: [
            {
              bn: "পাবলিক বিশ্ববিদ্যালয়ে ইঞ্জিনিয়ারিং পড়ার সম্পূর্ণ বৃত্তি",
              en: "A fully funded scholarship to study engineering at a public university",
              hi: "सरकारी यूनिवर्सिटी में इंजीनियरिंग पढ़ने की पूरी छात्रवृत्ति",
            },
            {
              bn: "নতুন একটা রিকশা",
              en: "A new rickshaw",
              hi: "एक नई रिक्शा",
            },
            {
              bn: "এক লাখ টাকার নগদ পুরস্কার",
              en: "A cash prize of one lakh taka",
              hi: "एक लाख टका का नकद पुरस्कार",
            },
            {
              bn: "বিদেশে পড়ার সুযোগ",
              en: "A chance to study abroad",
              hi: "विदेश में पढ़ने का मौक़ा",
            },
          ],
          answer: 0,
          explain: {
            bn: "প্রথম অনুচ্ছেদে: সুমাইয়া পাবলিক বিশ্ববিদ্যালয়ে ইঞ্জিনিয়ারিং পড়ার সম্পূর্ণ বৃত্তি জিতেছে।",
            en: "First paragraph: Sumaiya has won a fully funded scholarship to study engineering.",
            hi: "पहले अनुच्छेद में: सुमैया ने इंजीनियरिंग पढ़ने की पूरी छात्रवृत्ति जीती है।",
          },
        },
        {
          question: {
            bn: "সুমাইয়ার বাবা কত বছর ধরে রিকশা চালাচ্ছেন?",
            en: "For how many years has Sumaiya's father been pulling a rickshaw?",
            hi: "सुमैया के पिता कितने साल से रिक्शा चला रहे हैं?",
          },
          options: [
            {
              bn: "বাইশ বছর",
              en: "Twenty-two years",
              hi: "बाईस साल",
            },
            {
              bn: "বারো বছর",
              en: "Twelve years",
              hi: "बारह साल",
            },
            {
              bn: "আঠারো বছর",
              en: "Eighteen years",
              hi: "अठारह साल",
            },
            {
              bn: "ত্রিশ বছর",
              en: "Thirty years",
              hi: "तीस साल",
            },
          ],
          answer: 0,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে: জয়নাল মিয়া বাইশ বছর ধরে কমিলা শহরে রিকশা চালাচ্ছেন।",
            en: "Second paragraph: Md. Joynal Mia has been pulling a rickshaw for twenty-two years.",
            hi: "दूसरे अनुच्छेद में: जयनाल मिया बाईस साल से रिक्शा चला रहे हैं।",
          },
        },
        {
          question: {
            bn: "সুমাইয়া কী ডিজাইন করতে চায়?",
            en: "What does Sumaiya want to design?",
            hi: "सुमैया क्या डिज़ाइन करना चाहती है?",
          },
          options: [
            {
              bn: "গ্রামের জন্য কম খরচের পানি ছাঁকনি",
              en: "Low-cost water filters for villages",
              hi: "गाँवों के लिए कम ख़र्च वाले पानी-फ़िल्टर",
            },
            {
              bn: "সৌর ল্যাম্প",
              en: "Solar lamps",
              hi: "सोलर लैंप",
            },
            {
              bn: "নতুন ধরনের রিকশা",
              en: "A new kind of rickshaw",
              hi: "एक नए तरह की रिक्शा",
            },
            {
              bn: "বিড়ি-বাঁধার যন্ত্র",
              en: "A bidi-rolling machine",
              hi: "बीड़ी बाँधने की मशीन",
            },
          ],
          answer: 0,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে সুমাইয়া বলে — সে আমাদের মতো গ্রামের জন্য কম খরচের পানি ছাঁকনি বানাতে চায়।",
            en: "In the fourth paragraph Sumaiya says she wants to design low-cost water filters for villages like hers.",
            hi: "चौथे अनुच्छेद में सुमैया कहती है — वह अपने जैसे गाँवों के लिए कम ख़र्च वाले पानी-फ़िल्टर बनाना चाहती है।",
          },
        },
        {
          question: {
            bn: "হেডমাস্টার সুমাইয়ার সম্পর্কে কী বললেন?",
            en: "What did the headmaster say about Sumaiya?",
            hi: "प्रधानाध्यापक ने सुमैया के बारे में क्या कहा?",
          },
          options: [
            {
              bn: "দুই বছরে সে একটা ক্লাসও মিস করেনি",
              en: "She has never missed a single class in two years",
              hi: "दो साल में उसने एक भी कक्षा नहीं छोड़ी",
            },
            {
              bn: "সে প্রায়ই স্কুলে দেরি করত",
              en: "She was often late for school",
              hi: "वह अक्सर स्कूल में देर से पहुँचती थी",
            },
            {
              bn: "সে বানের মৌসুমে স্কুল ফেলত",
              en: "She skipped school during the flood season",
              hi: "वह बाढ़ के मौसम में स्कूल छोड़ देती थी",
            },
            {
              bn: "সে গণিতে দুর্বল ছিল",
              en: "She was weak in mathematics",
              hi: "वह गणित में कमज़ोर थी",
            },
          ],
          answer: 0,
          explain: {
            bn: "পঞ্চম অনুচ্ছেদে হেডমাস্টার বলেন — দুই বছরে সুমাইয়া একটা ক্লাসও মিস করেনি, বানের মৌসুমেও না।",
            en: "In the fifth paragraph the headmaster says she has never missed a single class in two years, even during the flood season.",
            hi: "पाँचवें अनुच्छेद में प्रधानाध्यापक कहते हैं — दो साल में उसने एक भी कक्षा नहीं छोड़ी, बाढ़ के मौसम में भी नहीं।",
          },
        },
        {
          question: {
            bn: "বৃত্তিতে কী কী কভার হবে?",
            en: "What will the scholarship cover?",
            hi: "छात्रवृत्ति में क्या-क्या शामिल है?",
          },
          options: [
            {
              bn: "চার বছরের টিউশন, বই আর হোস্টেল ফি",
              en: "Four years of tuition, books and hostel fees",
              hi: "चार साल की ट्यूशन, किताबें और हॉस्टल फ़ीस",
            },
            {
              bn: "শুধু বই",
              en: "Only books",
              hi: "सिर्फ़ किताबें",
            },
            {
              bn: "বিদেশ ভ্রমণের খরচ",
              en: "Travel expenses abroad",
              hi: "विदेश यात्रा का ख़र्च",
            },
            {
              bn: "টিউশনের অর্ধেক টাকা",
              en: "Half of the tuition fee",
              hi: "ट्यूशन फ़ीस का आधा पैसा",
            },
          ],
          answer: 0,
          explain: {
            bn: "শেষ অনুচ্ছেদে: বৃত্তিতে চার বছরের টিউশন, বই আর হোস্টেল ফি মিটবে।",
            en: "Last paragraph: the scholarship will cover tuition, books and hostel fees for four years.",
            hi: "अंतिम अनुच्छेद में: छात्रवृत्ति में चार साल की ट्यूशन, किताबें और हॉस्टल फ़ीस शामिल है।",
          },
        },
      ],
    },
  },
];

export default SEED_READING_V1_INTERMEDIATE;
