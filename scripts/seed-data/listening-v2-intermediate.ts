// ─── Learning-path listening seeds: INTERMEDIATE serial "The Internship" ───
// Part of Task 9 (library enrichment). 5 episodes = 5 path units.
import type {
  LibraryListeningData,
  LibraryLevel,
  LibraryListeningCategory,
} from "../../src/lib/library-types";

export interface SeedListeningV2Entry {
  slug: string;
  level: LibraryLevel;
  category: LibraryListeningCategory;
  minutes: number;
  unit: number; // episode number = path unit (1-5)
  data: LibraryListeningData;
}

export const SEED_LISTENING_V2_INTERMEDIATE: SeedListeningV2Entry[] = [
  {
    slug: "internship-ep1",
    level: "intermediate",
    category: "work",
    minutes: 3,
    unit: 1, // unit 1 theme: talking & opinions
    data: {
      title: {
        bn: "ইন্টার্নশিপ — পর্ব ১: প্রথম দিন",
        en: "The Internship — Episode 1: The First Day",
        hi: "इंटर्नशिप — एपिसोड 1: पहला दिन",
      },
      summary: {
        bn: "খুলনার ২৩ বছরের ছাত্র তানভীর ঢাকার একটি মার্কেটিং কোম্পানিতে ইন্টার্ন হিসেবে প্রথম দিনে ঢোকে। হাসিখুশি প্রিয়া, আত্মবিশ্বাসী নাবিল আর স্নেহময়ী ম্যানেজার মিসেস রহমান তার নতুন জগৎ। শুক্রবারের মিটিংয়ে তানভীর প্রথমবারের মতো নিজের মতামত জানাতে পারে — আর বুঝতে পারে, হয়তো সে পারবে!",
        en: "Tanvir, a 23-year-old student from Khulna, starts his first day as a marketing intern at a Dhaka company. Friendly Priya, confident Nabil and warm Ms. Rahman welcome him. In the Friday meeting, Tanvir describes the company with his own opinion — and feels for the first time that he can really do this.",
        hi: "खुलना का 23 साल का छात्र तानवीर ढाका की एक मार्केटिंग कंपनी में इंटर्न के रूप में पहला दिन शुरू करता है। दोस्ताना प्रिया, आत्मविश्वासी नबील और प्यारी मिसेज़ रहमान उसका स्वागत करते हैं। शुक्रवार की मीटिंग में तानवीर पहली बार अपनी राय रखता है — और महसूस करता है कि शायद वह यह कर सकता है।",
      },
      paragraphs: [
        "On a bright Sunday morning, Tanvir stood outside the Orion Media office in Gulshan and took a deep breath. He was twenty-three, a university student from Khulna, and this was his first day as a marketing intern in Dhaka. His shirt felt too formal, his bag felt too heavy, and his heart was beating fast. 'Stay calm,' he told himself quietly.",
        "In the lobby, a friendly woman smiled at him immediately. 'You must be Tanvir. I'm Priya — I joined last year, and I still remember this nervous feeling.' She led him upstairs and introduced him to Ms. Rahman, the marketing manager. 'Welcome to the team,' Ms. Rahman said warmly. 'Our interns learn quickly here because we give them real work from the very first day.'",
        "At the interns' desk sat another young man, typing with total confidence. 'Nabil,' he said, shaking Tanvir's hand firmly. 'My cousin works in advertising, so I already know this industry well. I'm sure I'll stand out here.' Tanvir smiled politely, but inside he felt smaller. Nabil spoke English so smoothly, while Tanvir's thoughts kept getting stuck on the way to his tongue.",
        "On Friday, Ms. Rahman called both interns into the weekly meeting. 'Our new client wants to know who we are. Tanvir, can you describe our company in three sentences?' Tanvir's hands went cold. Then he remembered his habit: he explained things to his younger sister at home every night. He spoke slowly and clearly about the company's clients, its campaigns, and its goals.",
        "'Excellent,' Ms. Rahman said, nodding slowly. 'You didn't just recite facts — you gave us your own opinion about what makes this company special. That is a rare skill.' Priya squeezed his shoulder proudly. Nabil said nothing at all, but he looked up from his screen for the first time. That evening, Tanvir wrote in his diary: 'Maybe I can actually do this internship.'",
      ],
      vocabulary: [
        {
          word: "intern",
          meaning: {
            bn: "ইন্টার্ন — শেখার জন্য অস্থায়ীভাবে কাজ করা ব্যক্তি",
            en: "a person who works temporarily at a company to learn",
            hi: "इंटर्न — सीखने के लिए कंपनी में अस्थायी रूप से काम करने वाला व्यक्ति",
          },
          example: "She worked as an intern at a newspaper for six months.",
        },
        {
          word: "nervous",
          meaning: {
            bn: "নার্ভাস — উদ্বিগ্ন, ঘাবড়ে যাওয়া অবস্থা",
            en: "worried and slightly afraid about something that will happen",
            hi: "घबराया हुआ — जो कुछ होने वाला है उसकी चिंता में",
          },
          example: "I always feel nervous before an exam.",
        },
        {
          word: "introduce",
          meaning: {
            bn: "পরিচয় করিয়ে দেওয়া — একজনকে আরেকজনের সঙ্গে নাম ধরে চেনানো",
            en: "to tell someone another person's name for the first time",
            hi: "परिचय कराना — किसी को दूसरे व्यक्ति से पहली बार मिलवाना",
          },
          example: "Let me introduce you to my team leader.",
        },
        {
          word: "confidence",
          meaning: {
            bn: "আত্মবিশ্বাস — নিজের সামর্থ্যে বিশ্বাস",
            en: "the feeling that you can do something well",
            hi: "आत्मविश्वास — यह विश्वास कि आप कुछ अच्छी तरह कर सकते हैं",
          },
          example: "Practice every day and your confidence will grow.",
        },
        {
          word: "politely",
          meaning: {
            bn: "ভদ্রভাবে — নম্র ও শালীন ভঙ্গিতে",
            en: "in a calm, respectful way",
            hi: "विनम्रता से — शांत और सम्मानजनक तरीके से",
          },
          example: "He politely asked the teacher to repeat the question.",
        },
        {
          word: "opinion",
          meaning: {
            bn: "মতামত — নিজের ভাবনা বা ধারণা",
            en: "what you think or believe about something",
            hi: "राय — आप किसी बारे में क्या सोचते हैं",
          },
          example: "In our meeting, everyone shares their opinion freely.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "তানভীর কেন প্রথম সকালে নার্ভাস ছিল?",
            en: "Why was Tanvir nervous on the first morning?",
            hi: "तानवीर पहली सुबह घबराया हुआ क्यों था?",
          },
          options: [
            { bn: "অফিসে দেরি হয়েছিল", en: "He was late for the office", hi: "वह ऑफिस के लिए लेट हो गया था" },
            { bn: "এটা ছিল তার প্রথম দিন", en: "It was his first day as an intern", hi: "वह इंटर्न के रूप में अपना पहला दिन कर रहा था" },
            { bn: "সে তার ব্যাগ হারিয়ে ফেলেছিল", en: "He had lost his bag", hi: "उसका बैग खो गया था" },
            { bn: "সে ঢাকা শহর পছন্দ করত না", en: "He did not like Dhaka city", hi: "वह ढाका शहर पसंद नहीं करता था" },
          ],
          answer: 1,
          explain: {
            bn: "গল্পের শুরুতেই বলা আছে — এটা ছিল তানভীরের প্রথম দিন, তাই তার হৃদস্পন্দন দ্রুত ছিল এবং সে নিজেকে 'stay calm' বলছিল।",
            en: "The story opens with Tanvir's first day, which is why his heart was beating fast and he told himself to stay calm.",
            hi: "कहानी की शुरुआत में ही बताया गया है — यह तानवीर का पहला दिन था, इसलिए उसका दिल तेज़ चल रहा था और वह खुद से कह रहा था कि शांत रहो।",
          },
        },
        {
          question: {
            bn: "কে তানভীরকে মিসেস রহমানের সঙ্গে পরিচয় করিয়ে দিয়েছিল?",
            en: "Who introduced Tanvir to Ms. Rahman?",
            hi: "तानवीर का परिचय मिसेज़ रहमान से किसने कराया?",
          },
          options: [
            { bn: "প্রিয়া", en: "Priya", hi: "प्रिया" },
            { bn: "নাবিল", en: "Nabil", hi: "नबील" },
            { bn: "নাবিলের চাচাতো ভাই", en: "Nabil's cousin", hi: "नबील का कज़िन" },
            { bn: "নতুন ক্লায়েন্ট", en: "The new client", hi: "नया क्लाइंट" },
          ],
          answer: 0,
          explain: {
            bn: "প্রিয়া লবিতে তানভীরকে চিনে ফেলে উপরে নিয়ে গিয়ে ম্যানেজার মিসেস রহমানের সঙ্গে পরিচয় করিয়ে দেয়।",
            en: "Priya recognised Tanvir in the lobby, took him upstairs and introduced him to the manager, Ms. Rahman.",
            hi: "प्रिया ने लॉबी में तानवीर को पहचाना, ऊपर ले गई और मैनेजर मिसेज़ रहमान से उसका परिचय कराया।",
          },
        },
        {
          question: {
            bn: "শুক্রবারের মিটিংয়ে তানভীর কীভাবে কোম্পানির কথা বলল?",
            en: "How did Tanvir describe the company in the Friday meeting?",
            hi: "शुक्रवार की मीटिंग में तानवीर ने कंपनी का वर्णन कैसे किया?",
          },
          options: [
            { bn: "ফাইল থেকে তথ্য মুখস্থ পড়ে", en: "He recited facts from a file", hi: "फाइल से तथ्य रटकर पढ़ा" },
            { bn: "ধীরে পরিষ্কারভাবে বলল আর নিজের মতামত যোগ করল", en: "He spoke slowly and clearly and added his own opinion", hi: "वह धीरे-धीरे साफ़-साफ़ बोला और अपनी राय जोड़ी" },
            { bn: "নাবিলকে উত্তর দিতে বলল", en: "He asked Nabil to answer instead", hi: "उसने नबील से जवाब देने को कहा" },
            { bn: "সে কিছুই বলতে পারেনি", en: "He could not say anything", hi: "वह कुछ भी नहीं बोल पाया" },
          ],
          answer: 1,
          explain: {
            bn: "তানভীর ধীরে ও পরিষ্কারভাবে কোম্পানির ক্লায়েন্ট, ক্যাম্পেইন আর লক্ষ্যের কথা বলে, আর মিসেস রহমান বলেন — সে শুধু তথ্য পড়েনি, নিজের মতামতও দিয়েছে।",
            en: "Tanvir spoke slowly and clearly about the company's clients, campaigns and goals, and Ms. Rahman said he gave his own opinion, not just facts.",
            hi: "तानवीर ने धीरे-धीरे और साफ़-साफ़ कंपनी के क्लाइंट्स, कैंपेन और लक्ष्यों के बारे में बताया, और मिसेज़ रहमान ने कहा कि उसने सिर्फ़ तथ्य नहीं, अपनी राय भी दी।",
          },
        },
      ],
    },
  },
  {
    slug: "internship-ep2",
    level: "intermediate",
    category: "work",
    minutes: 3,
    unit: 2, // unit 2 theme: work & money
    data: {
      title: {
        bn: "ইন্টার্নশিপ — পর্ব ২: বেতনের কথা",
        en: "The Internship — Episode 2: Money Matters",
        hi: "इंटर्नशिप — एपिसोड 2: पैसों की बात",
      },
      summary: {
        bn: "ইন্টার্নদের ছোট ভাতার খবর আর তানভীরের প্রথম বাজেট — দশ হাজার টাকার ক্যাম্পেইন। হঠাৎ প্রিন্টিংয়ের দাম বেড়ে যায়! তানভীর ঘাবড়ে না গিয়ে পরিকল্পনা ঠিক করে, আর মিসেস রহমান শেখান: ভালো ম্যানেজার হঠাৎ-বিপদের জন্য সবসময় প্রস্তুত থাকে।",
        en: "The interns hear about their small allowance, and Tanvir gets his first budget: ten thousand taka for a campaign. When printing costs suddenly rise, he does not panic — he replans. Ms. Rahman teaches him the real lesson: a good manager always expects surprises.",
        hi: "इंटर्नों को उनके छोटे भत्ते की खबर मिलती है, और तानवीर को पहला बजट मिलता है: एक कैंपेन के लिए दस हज़ार टका। जब प्रिंटिंग का खर्च अचानक बढ़ जाता है, तो वह घबराता नहीं — नया प्लान बनाता है। मिसेज़ रहमान उसे असली सबक सिखाती हैं: अच्छा मैनेजर हमेशा अचानक आने वाली मुश्किलों की उम्मीद रखता है।",
      },
      paragraphs: [
        "Two weeks passed, and Tanvir slowly stopped feeling like a stranger in the office. One morning, Priya waved him over with a grin. 'Good news — Ms. Rahman is talking about our internship allowance. Come and listen quickly.' Tanvir hurried to the meeting room, where Ms. Rahman was explaining that every intern would receive a small monthly amount to cover transport and lunch.",
        "'The allowance isn't big,' Ms. Rahman said honestly, 'but money is only part of your payment. The experience you earn here will be worth far more later.' Nabil nodded quickly, but Tanvir wrote her words in his notebook. That night he called his father in Khulna. 'Baba, I don't need extra money from home now. I can manage,' he said proudly.",
        "A few days later, Ms. Rahman gave the interns their first real task. 'Here is a budget of ten thousand taka for a small social media campaign. Plan it together.' Nabil immediately started listing expensive video ideas, but Tanvir opened a spreadsheet. 'First we should decide the priority,' he said. 'If we spend everything on one video, we can't afford anything else.'",
        "On Thursday, the printing shop called: the poster paper price had gone up, and the campaign needed three hundred taka more than planned. Tanvir felt panic rising, but he didn't hide it or ignore the problem. He checked the spreadsheet again, cut one extra design, and balanced the numbers by Friday afternoon. The campaign was ready, and the budget still worked.",
        "Ms. Rahman reviewed the numbers and raised her eyebrows. 'Who cut the extra design?' she asked. Tanvir admitted it calmly. 'That's planning,' she said. 'A good manager expects surprises and keeps a plan ready for them. Remember this day.' That night, Tanvir updated his spreadsheet and smiled. Budgets, he realized, were like study routines — small daily discipline, not lucky jumps. Next week, the interns would travel to Chattogram.",
      ],
      vocabulary: [
        {
          word: "allowance",
          meaning: {
            bn: "ভাতা — কাজের পাশাপাশি খরচ চালাতে পাওয়া নিয়মিত টাকা",
            en: "money given regularly to cover expenses",
            hi: "भत्ता — खर्च चलाने के लिए नियमित रूप से दी जाने वाली रकम",
          },
          example: "The company pays a travel allowance every month.",
        },
        {
          word: "manage",
          meaning: {
            bn: "চালানো / সামলানো — কঠিন অবস্থা বা টাকা-পয়সা ঠিকভাবে নিয়ন্ত্রণ করা",
            en: "to handle a situation or money successfully",
            hi: "प्रबंधन करना / सँभालना — कठिन हालत या पैसे को ठीक तरह निभाना",
          },
          example: "With a small income, she manages her whole family.",
        },
        {
          word: "budget",
          meaning: {
            bn: "বাজেট — কাজের জন্য ঠিক করা খরচের পরিকল্পনা",
            en: "a plan of how much money you can spend",
            hi: "बजट — कितना पैसा खर्च करेंगे, उसकी योजना",
          },
          example: "Our budget for the event is five thousand taka.",
        },
        {
          word: "afford",
          meaning: {
            bn: "সামর্থ্য থাকা — কিছু কেনার মতো যথেষ্ট টাকা বা ক্ষমতা থাকা",
            en: "to have enough money for something",
            hi: "सामर्थ्य होना — किसी चीज़ के लिए पर्याप्त पैसा होना",
          },
          example: "We cannot afford a new laptop this year.",
        },
        {
          word: "ignore",
          meaning: {
            bn: "অবহেলা করা — ইচ্ছা করে না দেখা বা না শোনা",
            en: "to pay no attention to something",
            hi: "नज़रअंदाज़ करना — किसी बात पर ध्यान न देना",
          },
          example: "Don't ignore small problems; they grow bigger.",
        },
        {
          word: "discipline",
          meaning: {
            bn: "নিয়মানুবর্তিতা — প্রতিদিনের ছোট ছোট নিয়ম মেনে চলা",
            en: "the habit of following rules and doing things regularly",
            hi: "अनुशासन — नियम मानकर नियमित रूप से काम करने की आदत",
          },
          example: "Ten minutes of daily discipline beats one long weekend effort.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "সেই সকালে ইন্টার্নরা কী বিষয়ে শুনতে পায়?",
            en: "What did the interns hear about that morning?",
            hi: "उस सुबह इंटर्न किस बारे में सुनते हैं?",
          },
          options: [
            { bn: "তাদের ইন্টার্নশিপ ভাতা", en: "Their internship allowance", hi: "उनका इंटर्नशिप भत्ता" },
            { bn: "নতুন ক্লায়েন্ট", en: "A new client", hi: "एक नया क्लाइंट" },
            { bn: "অফিসের ছুটির নিয়ম", en: "Office holiday rules", hi: "ऑफिस के छुट्टी के नियम" },
            { bn: "চট্টগ্রাম ট্রিপ", en: "A trip to Chattogram", hi: "चट्टग्राम की यात्रा" },
          ],
          answer: 0,
          explain: {
            bn: "প্রিয়া ডেকে বলে 'মিসেস রহমান আমাদের ইন্টার্নশিপ ভাতার কথা বলছেন' — পরিবহন ও দুপুরের খাবারের জন্য ছোট মাসিক ভাতা।",
            en: "Priya calls him over because Ms. Rahman is talking about their internship allowance — a small monthly amount for transport and lunch.",
            hi: "प्रिया बुलाकर कहती है कि मिसेज़ रहमान उनके इंटर्नशिप भत्ते के बारे में बात कर रही हैं — यातायात और दोपहर के खाने के लिए छोटी मासिक रकम।",
          },
        },
        {
          question: {
            bn: "দশ হাজার টাকার বাজেটটা কীসের জন্য ছিল?",
            en: "What was the ten thousand taka budget for?",
            hi: "दस हज़ार टका का बजट किस चीज़ के लिए था?",
          },
          options: [
            { bn: "একটি ছোট সোশ্যাল মিডিয়া ক্যাম্পেইন", en: "A small social media campaign", hi: "एक छोटा सोशल मीडिया कैंपेन" },
            { bn: "অফিসের দুপুরের খাবার", en: "Office lunch", hi: "ऑफिस का दोपहर का खाना" },
            { bn: "নতুন কম্পিউটার", en: "New computers", hi: "नए कंप्यूटर" },
            { bn: "ট্রেনের টিকিট", en: "Train tickets", hi: "ट्रेन के टिकट" },
          ],
          answer: 0,
          explain: {
            bn: "মিসেস রহমান স্পষ্ট বলেছিলেন: 'a budget of ten thousand taka for a small social media campaign' — ইন্টার্নদের প্রথম আসল কাজ।",
            en: "Ms. Rahman clearly says it is a budget of ten thousand taka for a small social media campaign — the interns' first real task.",
            hi: "मिसेज़ रहमान साफ़ कहती हैं कि यह एक छोटे सोशल मीडिया कैंपेन के लिए दस हज़ार टका का बजट है — इंटर्नों का पहला असली काम।",
          },
        },
        {
          question: {
            bn: "অতিরিক্ত তিনশ টাকার সমস্যাটা তানভীর কীভাবে সামলাল?",
            en: "How did Tanvir handle the extra three hundred taka problem?",
            hi: "अतिरिक्त तीन सौ टका की समस्या का तानवीर ने क्या किया?",
          },
          options: [
            { bn: "বাবার কাছ থেকে টাকা চেয়েছিল", en: "He asked his father for money", hi: "उसने पापा से पैसे माँगे" },
            { bn: "একটি এক্সট্রা ডিজাইন বাদ দিয়ে হিসাব মেলাল", en: "He cut one extra design and balanced the numbers", hi: "उसने एक एक्स्ट्रा डिज़ाइन हटाकर हिसाब मिलाया" },
            { bn: "সমস্যাটা চেপে গিয়েছিল", en: "He ignored the problem", hi: "उसने समस्या को नज़रअंदाज़ किया" },
            { bn: "মিসেস রহমানকে সত্যি বলেনি", en: "He hid the truth from Ms. Rahman", hi: "उसने मिसेज़ रहमान से सच छिपाया" },
          ],
          answer: 1,
          explain: {
            bn: "তানভীর স্প্রেডশিট আবার দেখে, একটা এক্সট্রা ডিজাইন বাদ দেয় এবং শুক্রবারের মধ্যে হিসাব মেলায় — বাজেট তখনও কাজ করে যায়।",
            en: "Tanvir checks the spreadsheet again, cuts one extra design and balances the numbers by Friday — the budget still works.",
            hi: "तानवीर स्प्रेडशीट दोबारा देखता है, एक एक्स्ट्रा डिज़ाइन हटाता है और शुक्रवार तक हिसाब मिला देता है — बजट फिर भी चलता रहता है।",
          },
        },
      ],
    },
  },
  {
    slug: "internship-ep3",
    level: "intermediate",
    category: "travel",
    minutes: 3,
    unit: 3, // unit 3 theme: travel
    data: {
      title: {
        bn: "ইন্টার্নশিপ — পর্ব ৩: চট্টগ্রাম ট্রিপ",
        en: "The Internship — Episode 3: The Chattogram Trip",
        hi: "इंटर्नशिप — एपिसोड 3: चट्टग्राम यात्रा",
      },
      summary: {
        bn: "ইন্টার্ন টিম সকাল ছয়টার ট্রেনে চট্টগ্রাম রওনা দেয়। দুপুরে পৌঁছেই খবর: পরদিনের বড় মিটিং বাতিল! কিন্তু মিসেস রহমান টিমকে সরাসরি ক্লায়েন্টের দোকানে নিয়ে যান — আর তানভীরের ট্রেন-জার্নির নোটগুলোই হয়ে ওঠে আসল জাদু।",
        en: "The intern team catches the six o'clock train to Chattogram. Right after they arrive at noon, bad news: the next morning's big meeting is cancelled. But Ms. Rahman takes the team straight to the client's shop — and Tanvir's train-ride notes turn out to be the real magic.",
        hi: "इंटर्न टीम छह बजे की ट्रेन से चट्टग्राम जाती है। दोपहर में पहुँचते ही बुरी खबर: अगली सुबह की बड़ी मीटिंग रद्द हो गई! लेकिन मिसेज़ रहमान टीम को सीधे क्लाइंट की दुकान पर ले जाती हैं — और तानवीर के ट्रेन-सफ़र के नोट्स असली जादू बन जाते हैं।",
      },
      paragraphs: [
        "Early on Monday, the three interns and Priya reached Kamlapur railway station in the dark. Their train to Chattogram would depart at six o'clock exactly. Tanvir had packed twice the night before because he was so excited. 'Take your seats,' Priya laughed, 'the train won't wait for your excitement.' They found the window seats, and soon Dhaka's lights were sliding away behind them.",
        "The journey was long but beautiful. Green fields, small stations, and tea sellers walking between the seats. Ms. Rahman had given them a task on the way: watch the countryside and note what products people were using there. 'A marketer observes,' she had said. Tanvir filled two pages with notes about tea brands, mobile shops, and the stickers on the buses.",
        "They arrived at noon, right on time. After lunch at the hotel, the bad news came: the big partner meeting for the next morning was cancelled. Nabil looked defeated, but Ms. Rahman turned calm. 'A cancelled meeting is not a cancelled day,' she said. 'Tomorrow we will visit our client's shop directly. Sometimes the road less planned teaches you more.'",
        "The next morning, the small team walked through the busy port city to the client's shop. The owner was surprised and pleased to see them in person. Tanvir showed his train-ride notes and pointed out what local customers might love. The owner listened carefully and asked real questions. By lunchtime, they had a warmer deal than any formal meeting could have produced.",
        "On the evening train home, Priya ordered tea for everyone. 'Not bad for your first business trip,' she smiled. Nabil quietly admitted, 'Your notes actually saved us.' Tanvir looked out at the dark fields and felt the trip had changed something inside him. Two days away from his desk had taught him more than two weeks of reading. Back in Dhaka, a harder test was waiting.",
      ],
      vocabulary: [
        {
          word: "depart",
          meaning: {
            bn: "রওনা দেওয়া — কোনো জায়গা থেকে যাত্রা শুরু করা",
            en: "to leave a place, especially to start a journey",
            hi: "प्रस्थान करना / रवाना होना — किसी जगह से यात्रा शुरू करना",
          },
          example: "Our train departs at six in the morning.",
        },
        {
          word: "journey",
          meaning: {
            bn: "যাত্রা — এক জায়গা থেকে আরেক জায়গায় যাওয়া",
            en: "the act of travelling from one place to another",
            hi: "यात्रा — एक जगह से दूसरी जगह जाना",
          },
          example: "The journey from Dhaka to Khulna takes about seven hours.",
        },
        {
          word: "countryside",
          meaning: {
            bn: "গ্রামাঞ্চল — শহরের বাইরের গ্রামীণ এলাকা",
            en: "land outside towns and cities",
            hi: "ग्रामीण इलाका — शहरों के बाहर का क्षेत्र",
          },
          example: "From the train window, the green countryside looks like a painting.",
        },
        {
          word: "cancelled",
          meaning: {
            bn: "বাতিল — যা ঠিক ছিল কিন্তু আর হবে না",
            en: "no longer going to happen",
            hi: "रद्द — जो तय था पर अब नहीं होगा",
          },
          example: "The flight was cancelled because of the storm.",
        },
        {
          word: "observe",
          meaning: {
            bn: "পর্যবেক্ষণ করা — মন দিয়ে ভালোভাবে খেয়াল করা",
            en: "to watch carefully in order to learn something",
            hi: "ध्यान से देखना / अवलोकन करना — कुछ सीखने के लिए गौर से देखना",
          },
          example: "Good journalists observe people before they write.",
        },
        {
          word: "owner",
          meaning: {
            bn: "মালিক — যার দোকান বা সম্পত্তি",
            en: "the person who owns something",
            hi: "मालिक — जिसकी कोई दुकान या चीज़ है",
          },
          example: "The shop owner greeted us at the door.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "চট্টগ্রামের ট্রেনটা কখন ছেড়ে যায়?",
            en: "When did the train to Chattogram depart?",
            hi: "चट्टग्राम की ट्रेन कब रवाना हुई?",
          },
          options: [
            { bn: "দুপুর বারোটায়", en: "At twelve noon", hi: "दोपहर बारह बजे" },
            { bn: "সকাল ঠিক ছয়টায়", en: "At six o'clock exactly", hi: "ठीक छह बजे" },
            { bn: "রাতে", en: "At night", hi: "रात में" },
            { bn: "রবিবার সকালে", en: "On Sunday morning", hi: "रविवार सुबह" },
          ],
          answer: 1,
          explain: {
            bn: "গল্পে লেখা আছে — ট্রেনটা 'six o'clock exactly' ছেড়ে যাবে, তাই তারা এখনো অন্ধকার থাকতেই কামলাপুর স্টেশনে পৌঁছায়।",
            en: "The story says the train would depart at six o'clock exactly, so the team reached Kamlapur station while it was still dark.",
            hi: "कहानी में लिखा है कि ट्रेन ठीक छह बजे रवाना होगी, इसलिए टीम अँधेरे में ही कमलापुर स्टेशन पहुँच गई।",
          },
        },
        {
          question: {
            bn: "চট্টগ্রামে পৌঁছানোর পর খারাপ খবরটা কী ছিল?",
            en: "What was the bad news after they arrived in Chattogram?",
            hi: "चट्टग्राम पहुँचने के बाद बुरी खबर क्या थी?",
          },
          options: [
            { bn: "হোটেলে ঘর খালি ছিল না", en: "The hotel had no rooms", hi: "होटल में कमरे खाली नहीं थे" },
            { bn: "পরদিন সকালের বড় মিটিং বাতিল হয়ে গেছে", en: "The next morning's big meeting was cancelled", hi: "अगली सुबह की बड़ी मीटिंग रद्द हो गई" },
            { bn: "ক্লায়েন্ট শহর ছেড়ে চলে গিয়েছিল", en: "The client had left the city", hi: "क्लाइंट शहर छोड़कर चला गया था" },
            { bn: "তাদের ফেরার ট্রেন দেরিতে ছিল", en: "Their return train was delayed", hi: "उनकी वापसी की ट्रेन लेट थी" },
          ],
          answer: 1,
          explain: {
            bn: "হোটেলে দুপুরের খাবারের পরপরই খবর আসে — পরদিন সকালের বড় পার্টনার মিটিং বাতিল।",
            en: "Right after lunch at the hotel, the news comes that the big partner meeting for the next morning was cancelled.",
            hi: "होटल में दोपहर के खाने के तुरंत बाद खबर आती है कि अगली सुबह की बड़ी पार्टनर मीटिंग रद्द हो गई है।",
          },
        },
        {
          question: {
            bn: "ক্লায়েন্টের দোকানে সরাসরি ভিজিটটা কেন এত ভালো হল?",
            en: "Why did the direct visit to the client's shop go so well?",
            hi: "क्लाइंट की दुकान पर सीधे जाने से विज़िट इतनी अच्छी क्यों हुई?",
          },
          options: [
            { bn: "তানভীর লোকাল কাস্টমারদের নিয়ে আসল নোট দেখাল", en: "Tanvir showed real notes about local customers", hi: "तानवीर ने लोकल ग्राहकों के बारे में असली नोट्स दिखाए" },
            { bn: "তারা মালিকের জন্য উপহার নিয়ে গিয়েছিল", en: "They brought a gift for the owner", hi: "वे मालिक के लिए उपहार लाए थे" },
            { bn: "নাবিল দীর্ঘ ভাষণ দিয়েছিল", en: "Nabil gave a long speech", hi: "नबील ने लंबा भाषण दिया" },
            { bn: "মিসেস রহমান দাম কমিয়ে দিয়েছিলেন", en: "Ms. Rahman lowered the price", hi: "मिसेज़ रहमान ने दाम कम कर दिया" },
          ],
          answer: 0,
          explain: {
            bn: "তানভীর ট্রেন-জার্নিতে ভরা দুই পাতার নোট দেখিয়ে বলে লোকাল কাস্টমাররা কী পছন্দ করবে; মালিক মনোযোগ দিয়ে শোনেন এবং আসল প্রশ্ন করেন।",
            en: "Tanvir shows his two pages of train-ride notes and points out what local customers might love; the owner listens carefully and asks real questions.",
            hi: "तानवीर अपने ट्रेन-सफ़र के दो पन्नों के नोट्स दिखाकर बताता है कि लोकल ग्राहक क्या पसंद करेंगे; मालिक ध्यान से सुनता है और असली सवाल पूछता है।",
          },
        },
      ],
    },
  },
  {
    slug: "internship-ep4",
    level: "intermediate",
    category: "work",
    minutes: 3,
    unit: 4, // unit 4 theme: character & feelings
    data: {
      title: {
        bn: "ইন্টার্নশিপ — পর্ব ৪: কঠিন সহকর্মী",
        en: "The Internship — Episode 4: The Difficult Colleague",
        hi: "इंटर्नशिप — एपिसोड 4: कठिन सहकर्मी",
      },
      summary: {
        bn: "সাপ্তাহিক মিটিংয়ে নাবিল তানভীরের আইডিয়া নিজের নামে চালিয়ে দেয়। রাগ চেপে আসে, তবু তানভীর শান্ত থেকে সত্যি কথাটা ভদ্রভাবে বলে। মিসেস রহমান ফাইলের তারিখ দেখে সব বুঝে যান — আর শেখান: আইডিয়া চুরি করা সহজ, কিন্তু সততা নয়।",
        en: "In the weekly meeting, Nabil presents Tanvir's idea as his own. Anger rises inside Tanvir, yet he stays calm and tells the truth politely. Ms. Rahman checks the file dates, understands everything — and teaches the room: ideas are easy to copy, but honesty is not.",
        hi: "साप्ताहिक मीटिंग में नबील तानवीर के आइडिया को अपने नाम पर पेश कर देता है। तानवीर के अंदर गुस्सा उठता है, फिर भी वह शांत रहकर विनम्रता से सच बोलता है। मिसेज़ रहमान फाइल की तारीखें देखकर सब समझ जाती हैं — और सिखाती हैं: आइडिया कॉपी करना आसान है, लेकिन ईमानदारी नहीं।",
      },
      paragraphs: [
        "Back at the office, Ms. Rahman asked for a fresh idea for the client's new poster campaign. That night, Tanvir stayed up late and sketched a bold concept: posters written in everyday Bangla, the kind people actually speak on the street. He wrote four pages of notes, saved the file carefully, and went to bed feeling proud for the first time in weeks.",
        "The next morning, the weekly meeting began as usual. Before Tanvir could open his mouth, Nabil stood up. 'I have a strong idea,' he announced. 'Street-style Bangla posters!' He presented Tanvir's concept smoothly, word by word, without mentioning the four pages he had quietly copied from the shared folder. Tanvir froze. His face burned, and for a moment he could not breathe.",
        "Anger pushed up inside him — shout, accuse, defend himself now! But Tanvir remembered who he wanted to be. He waited, then spoke honestly and softly: 'I'm glad you liked it. I wrote those notes on Tuesday night. I can share the full pages, and I'd love to build the campaign together.' His voice shook a little, but every word was true.",
        "The room went very quiet. Ms. Rahman looked at the timestamps of the saved files — dates never lie. Then she turned to Tanvir with new respect. 'Thank you for staying generous under pressure. Ideas are easy to copy, but honesty is not.' Nabil stared at his shoes. Nobody shouted, nobody apologized loudly, yet everyone in the room understood exactly what had happened.",
        "That evening, Priya found Tanvir on the office balcony. 'You know,' she said, 'most people would have exploded. You chose respect instead of revenge — that's rare character.' Tanvir shrugged, still feeling the day's weight. Then Ms. Rahman stepped out with an envelope in her hand. 'Clear your schedule for next Thursday, Tanvir. You and Nabil will co-present the final project to the full board.'",
      ],
      vocabulary: [
        {
          word: "announce",
          meaning: {
            bn: "ঘোষণা করা — সবার সামনে স্পষ্টভাবে জানানো",
            en: "to say something publicly and clearly",
            hi: "घोषणा करना — सबके सामने साफ़-साफ़ बताना",
          },
          example: "The manager announced the results in the meeting.",
        },
        {
          word: "concept",
          meaning: {
            bn: "কনসেপ্ট / মূল ধারণা — কোনো পরিকল্পনার ভেতরের ভাবনা",
            en: "the main idea behind a plan",
            hi: "कॉन्सेप्ट / मूल विचार — किसी योजना के पीछे का मुख्य विचार",
          },
          example: "Her concept for the poster won the client's heart.",
        },
        {
          word: "honestly",
          meaning: {
            bn: "সততার সঙ্গে / সোজাসুজি",
            en: "in a truthful way",
            hi: "ईमानदारी से — सच्चाई के साथ",
          },
          example: "He honestly said he did not know the answer.",
        },
        {
          word: "generous",
          meaning: {
            bn: "উদার — সহজে ভাগ করে নেওয়া, বদান্য মনের",
            en: "kind and willing to share",
            hi: "उदार — दिल से बाँटने वाला, दयालु",
          },
          example: "A generous teammate shares credit with others.",
        },
        {
          word: "respect",
          meaning: {
            bn: "সম্মান — কাউকে মর্যাদা দেওয়া",
            en: "a feeling that someone is good and important",
            hi: "सम्मान — किसी को महत्व देने का भाव",
          },
          example: "We earn respect by respecting others first.",
        },
        {
          word: "pressure",
          meaning: {
            bn: "চাপ — কাজ বা সময়ের ভারী টানাপোড়েন",
            en: "the feeling of stress from work or time limits",
            hi: "दबाव — काम या समय से होने वाला तनाव",
          },
          example: "She stays calm under pressure during exams.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "তানভীরের আইডিয়াটা কী নিয়ে ছিল?",
            en: "What was Tanvir's idea about?",
            hi: "तानवीर का आइडिया किस बारे में था?",
          },
          options: [
            { bn: "দামি টিভি বিজ্ঞাপন", en: "Expensive TV ads", hi: "महँगे टीवी विज्ञापन" },
            { bn: "রাস্তার মানুষের চালে লেখা বাংলা পোস্টার", en: "Posters written in everyday street Bangla", hi: "रोज़मर्रा की बोलचाल की बंगाली में लिखे पोस्टर" },
            { bn: "নতুন রেডিও গান", en: "A new radio song", hi: "एक नया रेडियो गाना" },
            { bn: "কোম্পানির নতুন নাম", en: "A new company name", hi: "कंपनी का नया नाम" },
          ],
          answer: 1,
          explain: {
            bn: "তানভীর রাত জেগে এঁকেছিল সাহসী এক কনসেপ্ট — রাস্তার মানুষ যেভাবে আসলে কথা বলে, সেই চালচলনের বাংলায় লেখা পোস্টার।",
            en: "Tanvir stayed up late sketching a bold concept — posters written in everyday Bangla, the kind people actually speak on the street.",
            hi: "तानवीर देर रात तक एक बोल्ड कॉन्सेप्ट बनाता रहा — रोज़मर्रा की बोलचाल की बंगाली में लिखे पोस्टर, जैसे लोग सड़क पर सच में बोलते हैं।",
          },
        },
        {
          question: {
            bn: "নাবিল তার আইডিয়া নিজের নামে চালিয়ে দিলে তানভীর কী করল?",
            en: "How did Tanvir react when Nabil presented his idea as his own?",
            hi: "जब नबील ने उसका आइडिया अपने नाम पर पेश किया, तो तानवीर ने क्या किया?",
          },
          options: [
            { bn: "রেগে গিয়ে চিৎকার করল", en: "He shouted angrily", hi: "वह गुस्से से चिल्लाया" },
            { bn: "শান্ত থেকে সত্যি কথা ভদ্রভাবে বলল", en: "He stayed calm and told the truth politely", hi: "वह शांत रहकर सच विनम्रता से बोला" },
            { bn: "মিটিং ছেড়ে চলে গেল", en: "He left the meeting", hi: "वह मीटिंग छोड़कर चला गया" },
            { bn: "ক্লায়েন্টের কাছে অভিযোগ করল", en: "He complained to the client", hi: "उसने क्लाइंट से शिकायत की" },
          ],
          answer: 1,
          explain: {
            bn: "রাগ উঠলেও তানভীর অপেক্ষা করে, তারপর সত্যি ও নরম গলায় বলে — নোটগুলো সে মঙ্গলবার রাতে লিখেছিল এবং সব পাতা ভাগ করে একসঙ্গে কাজ করতে চায়।",
            en: "Although anger rose, Tanvir waited, then spoke truthfully and softly — he wrote the notes on Tuesday night and offered to share the full pages and build the campaign together.",
            hi: "गुस्सा उठने पर भी तानवीर ने इंतज़ार किया, फिर सच्चाई से और धीरे से कहा — नोट्स उसने मंगलवार रात लिखे थे और वह पूरे पन्ने साझा करके साथ काम करना चाहता है।",
          },
        },
        {
          question: {
            bn: "সততা নিয়ে মিসেস রহমান কী বললেন?",
            en: "What did Ms. Rahman say about honesty?",
            hi: "मिसेज़ रहमान ने ईमानदारी के बारे में क्या कहा?",
          },
          options: [
            { bn: "আইডিয়া কপি করা সহজ, কিন্তু সততা নয়", en: "Ideas are easy to copy, but honesty is not", hi: "आइडिया कॉपी करना आसान है, लेकिन ईमानदारी नहीं" },
            { bn: "সততা মানেই বেশি টাকা", en: "Honesty always brings money", hi: "ईमानदारी का मतलब हमेशा पैसा होता है" },
            { bn: "শুধু ম্যানেজারদের সততা দরকার", en: "Only managers need honesty", hi: "सिर्फ़ मैनेजरों को ईमानदारी चाहिए" },
            { bn: "অফিসে সততা ঝুঁকিপূর্ণ", en: "Honesty is risky at the office", hi: "ऑफिस में ईमानदारी जोखिम भरी है" },
          ],
          answer: 0,
          explain: {
            bn: "মিসেস রহমান ফাইলের টাইমস্ট্যাম্প দেখে সব বুঝে তানভীরকে ধন্যবাদ দেন — 'আইডিয়া কপি করা সহজ, কিন্তু সততা নয়'।",
            en: "After checking the file timestamps, Ms. Rahman thanks Tanvir: ideas are easy to copy, but honesty is not.",
            hi: "फाइल के टाइमस्टैम्प देखने के बाद मिसेज़ रहमान तानवीर को धन्यवाद देती हैं: आइडिया कॉपी करना आसान है, लेकिन ईमानदारी नहीं।",
          },
        },
      ],
    },
  },
  {
    slug: "internship-ep5",
    level: "intermediate",
    category: "work",
    minutes: 3,
    unit: 5, // unit 5 theme: study & goals — closes the arc
    data: {
      title: {
        bn: "ইন্টার্নশিপ — পর্ব ৫: শেষ উপস্থাপনা",
        en: "The Internship — Episode 5: The Final Presentation",
        hi: "इंटर्नशिप — एपिसोड 5: आखिरी प्रेज़ेन्टेशन",
      },
      summary: {
        bn: "শেষ উপস্থাপনার দিন। প্রতি রাতের অভ্যাস করা প্র্যাকটিস তানভীরের কাজে লাগে; একটি কঠিন প্রশ্নে মাথা ফাঁকা হয়ে যায়, তবু সে সোজাসুজি উত্তর দিয়ে ফিরে আসে। আর তারপর আসে সেই খবর — পড়াশোনার পাশাপাশি পার্ট-টাইম রোলের অফার, সঙ্গে পরের বড় চ্যালেঞ্জের ইঙ্গিত!",
        en: "The day of the final presentation. Tanvir's nightly practice pays off; one hard question blanks his mind, but he recovers with an honest answer. Then comes the news he dreamed of — a part-time role offer alongside his degree, and a hint of the next big challenge!",
        hi: "आखिरी प्रेज़ेन्टेशन का दिन। तानवीर की रोज़ रात की प्रैक्टिस काम आती है; एक कठिन सवाल पर उसका दिमाग़ सांझ हो जाता है, लेकिन वह ईमानदार जवाब देकर सँभल जाता है। फिर आती है वह खबर जिसका सपना था — पढ़ाई के साथ पार्ट-टाइम रोल का ऑफ़र, और अगली बड़ी चुनौती का इशारा!",
      },
      paragraphs: [
        "Thursday finally arrived. The boardroom had a long glass table, a big screen, and seven senior managers. Tanvir had rehearsed his slides every night for two weeks — in front of his mirror, his diary, and once, bravely, Priya. His mouth was dry, but his preparation sat calm inside him like a friend. 'Ready?' Ms. Rahman asked. He nodded.",
        "Nabil opened with the market numbers, speaking fast and fluently. Then it was Tanvir's turn. He presented the street-Bangla campaign slowly, with clear examples from the Chattogram trip and the budget lessons. His voice grew steadier with every slide. He even added his own opinion: 'People don't buy posters; they buy the feeling of being understood.' Several managers wrote that line down.",
        "Then came the questions. The first two were easy. The third one hit hard: 'What will you do if the client rejects this campaign tomorrow?' Tanvir's mind went completely blank for five long seconds. His rehearsed answers had run out. He admitted it openly: 'I haven't thought that far yet — but I would start by listening to the client's fear.'",
        "A senior manager smiled at that answer. 'That is exactly what we would do too.' The tension in the room melted. When the presentation ended, the managers asked normal, friendly questions — a sure sign of success. Ms. Rahman kept her face serious, but Priya, watching from the door, was grinning like the sun. Nabil, to his credit, congratulated Tanvir first.",
        "The next morning, Ms. Rahman called Tanvir to her desk. 'Your daily practice, your honest notes, your calm under pressure — they all paid off,' she said. 'We would like to offer you a part-time role here while you finish your degree.' Tanvir's goal, the one from his first nervous Sunday, had finally come true. He accepted with a happy, shaking voice.",
        "That evening, Tanvir called his family in Khulna with the news, then opened a fresh page in his diary. Under 'Goals achieved,' he wrote his first line. Then he added a second: 'January — the festival campaign. Bigger stage, bigger pressure.' Outside, Dhaka glittered like a challenge. The intern from Khulna smiled. His next story had already begun.",
      ],
      vocabulary: [
        {
          word: "rehearse",
          meaning: {
            bn: "মহড়া দেওয়া — উপস্থাপন বা পরীক্ষার আগে বারবার অভ্যাস করা",
            en: "to practise something before you perform it",
            hi: "रिहर्सल करना — पेश करने से पहले बार-बार अभ्यास करना",
          },
          example: "She rehearsed her speech in front of the mirror.",
        },
        {
          word: "preparation",
          meaning: {
            bn: "প্রস্তুতি — ভালো করার জন্য আগে থেকে করা কাজ",
            en: "the work you do before an event to be ready",
            hi: "तैयारी — किसी काम से पहले की गई मेहनत",
          },
          example: "Good preparation turns fear into confidence.",
        },
        {
          word: "tension",
          meaning: {
            bn: "উত্তেজনা / টানাপোড়েন — মন বা পরিবেশের চাপা চাপ",
            en: "a nervous, stretched feeling in you or in a room",
            hi: "तनाव — मन या माहौल में फैली बेचैनी",
          },
          example: "After a joke from the teacher, the tension in the class melted.",
        },
        {
          word: "offer",
          meaning: {
            bn: "অফার / প্রস্তাব — চাকরি বা সুযোগ দেওয়ার ইচ্ছা জানানো",
            en: "to say you will give someone a job or a chance",
            hi: "ऑफ़र / प्रस्ताव — किसी को नौकरी या मौका देने की पेशकश करना",
          },
          example: "The company offered her a job after the internship.",
        },
        {
          word: "pay off",
          meaning: {
            bn: "ফল দেওয়া — অনুশীলন বা কষ্টের শেষে সফল ফলাফল আসা",
            en: "to bring success after effort",
            hi: "फल देना — मेहनत का सफल नतीजा निकलना",
          },
          example: "Months of practice finally paid off in the match.",
        },
        {
          word: "goal",
          meaning: {
            bn: "লক্ষ্য — যে জিনিস পেতে বা অর্জন করতে চাই",
            en: "the result you want to achieve",
            hi: "लक्ष्य — जो हासिल करना चाहते हैं",
          },
          example: "My goal is to speak English confidently in one year.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "চূড়ান্ত উপস্থাপনার জন্য তানভীর কীভাবে প্রস্তুতি নিয়েছিল?",
            en: "How did Tanvir prepare for the final presentation?",
            hi: "आखिरी प्रेज़ेन्टेशन के लिए तानवीर ने कैसे तैयारी की?",
          },
          options: [
            { bn: "দুই সপ্তাহ ধরে প্রতি রাতে মহড়া দিয়েছিল", en: "He rehearsed every night for two weeks", hi: "उसने दो हफ़्ते तक हर रात रिहर्सल किया" },
            { bn: "কাজটা নাবিলকে দিয়ে দিয়েছিল", en: "He gave the job to Nabil", hi: "उसने काम नबील को सौंप दिया" },
            { bn: "স্লাইডগুলো একবার পড়েছিল", en: "He read the slides once", hi: "उसने स्लाइड्स एक बार पढ़ीं" },
            { bn: "ভিডিও থেকে স্ক্রিপ্ট কপি করেছিল", en: "He copied a script from a video", hi: "उसने वीडियो से स्क्रिप्ट कॉपी की" },
          ],
          answer: 0,
          explain: {
            bn: "গল্পে আছে — তানভীর দুই সপ্তাহ ধরে প্রতি রাতে আয়নার সামনে, ডায়েরির সামনে, এমনকি প্রিয়ার সামনেও স্লাইডগুলোর মহড়া দিয়েছিল।",
            en: "The story says Tanvir rehearsed his slides every night for two weeks — in front of his mirror, his diary, and once Priya.",
            hi: "कहानी कहती है कि तानवीर ने दो हफ़्ते तक हर रात अपनी स्लाइड्स का रिहर्सल किया — आईने के सामने, डायरी के सामने, और एक बार प्रिया के सामने भी।",
          },
        },
        {
          question: {
            bn: "কঠিন প্রশ্নটা এলে কী হল?",
            en: "What happened when the hard question came?",
            hi: "कठिन सवाल आने पर क्या हुआ?",
          },
          options: [
            { bn: "মাথা ফাঁকা হলো, তবু সে সত্যি উত্তর দিয়ে সামলে নিল", en: "His mind went blank, but he recovered with an honest answer", hi: "उसका दिमाग़ सांझ हो गया, लेकिन वह ईमानदार जवाब देकर सँभल गया" },
            { bn: "সে ঘর ছেড়ে দৌড়ে গেল", en: "He ran out of the room", hi: "वह कमरे से बाहर भाग गया" },
            { bn: "সে নাবিলকে দোষ দিল", en: "He blamed Nabil", hi: "उसने नबील पर इलज़ाम लगाया" },
            { bn: "মিসেস রহমান তার জায়গায় উত্তর দিলেন", en: "Ms. Rahman answered for him", hi: "मिसेज़ रहमान ने उसकी जगह जवाब दिया" },
          ],
          answer: 0,
          explain: {
            bn: "পাঁচ সেকেন্ড তার মাথা সম্পূর্ণ ফাঁকা হয়ে যায়, কিন্তু সে সোজাসুজি স্বীকার করে বলে — এতদূর ভাবেনি, তবে ক্লায়েন্টের ভয়টা আগে শুনবে; আর সিনিয়র ম্যানেজার হাসেন।",
            en: "His mind went completely blank for five seconds, but he openly admitted it and said he would start by listening to the client's fear — and a senior manager smiled.",
            hi: "पाँच सेकंड उसका दिमाग़ पूरी तरह खाली हो गया, लेकिन उसने खुलकर माना कि वह इतना नहीं सोच पाया — पहले क्लाइंट का डर सुनेगा; और एक सीनियर मैनेजर मुस्कुरा दिया।",
          },
        },
        {
          question: {
            bn: "শেষে মিসেস রহমান তানভীরকে কী অফার করলেন?",
            en: "What did Ms. Rahman offer Tanvir at the end?",
            hi: "अंत में मिसेज़ रहमान ने तानवीर को क्या ऑफ़र किया?",
          },
          options: [
            { bn: "বিদেশে ফুল-টাইম চাকরি", en: "A full-time job abroad", hi: "विदेश में फुल-टाइम नौकरी" },
            { bn: "ডিগ্রি শেষ না হওয়া পর্যন্ত পার্ট-টাইম রোল", en: "A part-time role while he finishes his degree", hi: "पढ़ाई पूरी होने तक पार्ट-टाइम रोल" },
            { bn: "এক বছরের ফ্রি লাঞ্চ", en: "Free lunch for a year", hi: "एक साल का मुफ़्त लंच" },
            { bn: "বিশ্ববিদ্যালয়ের স্কলারশিপ", en: "A university scholarship", hi: "यूनिवर्सिटी की स्कॉलरशिप" },
          ],
          answer: 1,
          explain: {
            bn: "পরদিন সকালে মিসেস রহমান বলেন — ডিগ্রি শেষ না হওয়া পর্যন্ত এখানে পার্ট-টাইম রোল; সঙ্গে জানুয়ারির ফেস্টিভ্যাল ক্যাম্পেইনের চ্যালেঞ্জের ইঙ্গিতও।",
            en: "The next morning Ms. Rahman offers him a part-time role while he finishes his degree — and hints at the January festival campaign challenge.",
            hi: "अगली सुबह मिसेज़ रहमान उसे पढ़ाई पूरी होने तक पार्ट-टाइम रोल का ऑफ़र देती हैं — और जनवरी के फेस्टिवल कैंपेन की चुनौती का इशारा भी देती हैं।",
          },
        },
      ],
    },
  },
];
