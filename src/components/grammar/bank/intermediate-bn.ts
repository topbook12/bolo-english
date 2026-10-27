import type { BankLesson } from "./types";

// Static grammar bank — foundation topics, INTERMEDIATE level (CEFR ~B1),
// Bengali explanations (for users whose UI language is Bengali).
const LESSONS: BankLesson[] = [
  {
    topic: "Tense basics",
    level: "intermediate",
    locale: "bn",
    title: "টেন্সের গভীরে: perfect আর continuous রূপ",
    intro:
      "তিনটি simple টেন্স আপনি এখন পারেন; এবার গল্পে গভীরতা যোগ হবে। Perfect আর continuous ফর্ম শিখলে শুধু কখন ঘটেছে নয়, কতক্ষণ ধরে চলছে আর কোনটা আগে ঘটেছে — সবটাই বলতে পারবেন।",
    sections: [
      {
        heading: "Perfect ফর্ম: এক মুহূর্ত থেকে আরেক মুহূর্তের গল্প",
        explanation:
          "Present perfect (have/has + participle) অতীতের কাজকে এখনের সঙ্গে জোড়ে: I have lost my keys. আর past perfect (had + participle) আরও এক ধাপ পেছনে যায় — দুটো অতীত ঘটনার মধ্যে আগেরটা বোঝায়: When I reached the station, the train had left. মনে রাখুন, had + participle মানে অতীতেরও অতীত। বাংলায় আমরা আগে-পরে বলে দিই, কিন্তু ইংরেজি সেই ক্রম had দিয়েই দেখায়।",
        examples: [
          {
            wrong: "When the train left, I reached the station.",
            right: "When I reached the station, the train had left.",
            note: "আগের ঘটনাটা past perfect-এ যায় — had left বলেই বোঝা যায় ট্রেনটা আগে চলে গিয়েছিল।",
          },
          {
            wrong: "She is working at this school since 2019.",
            right: "She has been working at this school since 2019.",
            note: "বাংলায় ২০১৯ থেকে কাজ করছেন — একটাই রূপ চলে, কিন্তু ইংরেজিতে since থাকলে have been + -ing লাগে।",
          },
          {
            wrong: "I had went to bed before the phone rang.",
            right: "I had gone to bed before the phone rang.",
            note: "had-এর পরে participle বসে — went নয়, gone।",
          },
        ],
      },
      {
        heading: "Continuous ফর্ম: অতীত ও ভবিষ্যতে চলমান কাজ",
        explanation:
          "Past continuous (was/were + -ing) গল্পের পটভূমি আঁকে: I was cooking when the lights went out. ভবিষ্যতের কোনো নির্দিষ্ট মুহূর্তে কাজ চলমান থাকলে ব্যবহার হয় future continuous (will be + -ing): This time tomorrow I will be sitting on the train to Rajshahi. দুটো ফর্মই আপনার সময়রেখাকে অস্পষ্ট না বানিয়ে নিখুঁত করে।",
        examples: [
          {
            wrong: "While I cooked dinner, the lights went out.",
            right: "While I was cooking dinner, the lights went out.",
            note: "দীর্ঘ পটভূমির কাজটা past continuous-এ থাকে, হঠাৎ-ঘটনাটা simple past-এ।",
          },
          {
            wrong: "This time tomorrow I will travel to Rajshahi.",
            right: "This time tomorrow I will be travelling to Rajshahi.",
            note: "ভবিষ্যতের নির্দিষ্ট মুহূর্তে কাজ চলমান মানে will be + -ing।",
          },
          {
            wrong: "At ten o'clock he will wait for you at the gate.",
            right: "At ten o'clock he will be waiting for you at the gate.",
            note: "নির্দিষ্ট সময় + চলমান কাজ = future continuous।",
          },
        ],
      },
      {
        heading: "গল্পে টেন্স ধরে রাখা",
        explanation:
          "গল্পের একটা প্রধান টেন্স থাকা চাই। অতীতে শুরু করলে পুরো গল্প অতীতেই থাকুন, আর আরও আগের ঘটনা বলতে হলে শুধু তখন past perfect আনুন: I reached home late. My mother had already eaten. কারণ ছাড়া টেন্স এদিক-ওদিক করা B1 শেখার সবচেয়ে চেনা ভুল — আর অভ্যাস বানালে সবচেয়ে সহজে ঠিক হয়ে যায়।",
        examples: [
          {
            wrong: "Yesterday I go to the market and meet my old teacher.",
            right: "Yesterday I went to the market and met my old teacher.",
            note: "yesterday থাকলে পুরো গল্পটা past-এই থাকবে।",
          },
          {
            wrong: "When I got home, my mother already cooks dinner.",
            right: "When I got home, my mother had already cooked dinner.",
            note: "রান্নাটা বাড়ি ফেরার আগেই শেষ হয়েছিল, তাই had cooked।",
          },
          {
            wrong: "Last week we are visiting our village and it rained heavily.",
            right: "Last week we visited our village and it rained heavily.",
            note: "শেষ হয়ে যাওয়া অতীত ঘটনার ভেতরে present ফর্ম মেশানো যায় না।",
          },
        ],
      },
    ],
    tips: [
      "কথা বলার আগে সময়ের নোঙর ঠিক করুন — এখন, এর আগে, নাকি এর পরে; তারপর প্রতিটি ক্রিয়াকে সেই নোঙরের প্রতি বিশ্বস্ত রাখুন।",
      "দুটো অতীত ঘটনা? আগেরটা past perfect-এ, পরেরটা simple past-এ।",
      "for + সময়ের দৈর্ঘ্য perfect continuous-এর সঙ্গী: I have been waiting for three hours.",
      "প্রতি রাতে ডায়েরির একটা বাক্য তিন রূপে লিখুন — simple, continuous, perfect; পার্থক্যটা নিজেই চোখে পড়বে।",
    ],
    quiz: [
      {
        question: "By the time we reached the hall, the seminar ___.",
        options: ["already started", "has already started", "had already started", "was already starting"],
        answer: 2,
        explanation: "আমাদের পৌঁছানো পরে, শুরুটা আগে — তাই আগের ঘটনাটা past perfect-এ যায়।",
      },
      {
        question: "I ___ for my exam results since Monday morning.",
        options: ["wait", "am waiting", "have been waiting", "waited"],
        answer: 2,
        explanation: "since Monday অতীত থেকে এখন পর্যন্ত টেনে আনে, তাই present perfect continuous মানানসই।",
      },
      {
        question: "This time next Sunday we ___ our grandparents in the village.",
        options: ["will visit", "will be visiting", "visit", "have visited"],
        answer: 1,
        explanation: "This time next Sunday একটা মুহূর্ত ঠিক করে, আর সেই মুহূর্তে দেখা চলমান থাকবে — will be visiting।",
      },
      {
        question: "While I ___ the dishes, my brother was watching TV.",
        options: ["did", "was doing", "have done", "had done"],
        answer: 1,
        explanation: "অতীতের দুই পাশাপাশি কাজের মধ্যে লম্বা পটভূমিটা past continuous-এ: was doing।",
      },
      {
        question: "Last night I ___ my homework and then helped my mother.",
        options: ["finish", "have finished", "had finished", "finished"],
        answer: 3,
        explanation: "then শব্দেই ক্রম স্পষ্ট, তাই দুই কাজই simple past-এ থাকে: finished।",
      },
    ],
  },
  {
    topic: "Subject-Verb Agreement",
    level: "intermediate",
    locale: "bn",
    title: "Subject-Verb Agreement: ফাঁদ পাতা কর্তারা",
    intro:
      "সাধারণ agreement নিয়ম সহজ — কিন্তু everyone, neither nor আর ten kilometres যখন বাক্যে ঢোকে, তখনই ফাঁদ পাতা হয়। এই পাঠে ঠিক সেই ফাঁদগুলোই সাজানো হলো।",
    sections: [
      {
        heading: "Each, every আর -body/-one পরিবার সবসময় একবচন",
        explanation:
          "Each, every, everyone, everybody, somebody, nobody, either — এরা পাশে বহুবচন নাম থাকলেও সবসময় একবচন ক্রিয়া নেয়: Every one of the students has a roll number. কাছের বহুবচন দেখে ফাঁদে পা দেবেন না — আগে আসল কর্তা খুঁজুন, তারপর ক্রিয়া বসান। বাংলায় ক্রিয়া একবচন-বহুবচনে বদলায় না, তাই এই অভ্যাসটা ইচ্ছে করে গড়তে হয়।",
        examples: [
          {
            wrong: "Everyone in our class have submitted the form.",
            right: "Everyone in our class has submitted the form.",
            note: "everyone একবচন, তাই has।",
          },
          {
            wrong: "Each of the players were given a new jersey.",
            right: "Each of the players was given a new jersey.",
            note: "আসল কর্তা each, players নয় — of-ফ্রেজ বাদ দিয়ে চেক করুন।",
          },
          {
            wrong: "Neither of my two cousins live in Chattogram.",
            right: "Neither of my two cousins lives in Chattogram.",
            note: "neither of + বহুবচন হলেও যত্নশীল ইংরেজিতে একবচন ক্রিয়া বসে।",
          },
        ],
      },
      {
        heading: "Either/or, neither/nor: কাছের কর্তাই ক্রিয়া ঠিক করে",
        explanation:
          "either...or আর neither...nor-এ ক্রিয়ার সবচেয়ে কাছের কর্তার সঙ্গে মেলে: Neither the players nor the coach was happy. Either the coach or the players are responsible. একটা অংশ বহুবচন হলে সেটা ক্রিয়ার কাছে রাখলে বাক্য আরও মসৃণ শোনায়।",
        examples: [
          {
            wrong: "Neither the manager nor the workers was satisfied.",
            right: "Neither the manager nor the workers were satisfied.",
            note: "workers ক্রিয়ার কাছে, তাই ক্রিয়া বহুবচন — were।",
          },
          {
            wrong: "Either Rina or her sisters is coming today.",
            right: "Either Rina or her sisters are coming today.",
            note: "her sisters ক্রিয়ার ঠিক পাশে, তাই are।",
          },
          {
            wrong: "Not only the teacher but also the students was praised.",
            right: "Not only the teacher but also the students were praised.",
            note: "not only...but also-তেও একই কাছের-কর্তার নিয়ম চলে।",
          },
        ],
      },
      {
        heading: "সমষ্টিবাচক, অগণনযোগ্য আর পরিমাপক শব্দ",
        explanation:
          "Team, family, committee-র মতো সমষ্টিবাচক নাম পুরো দল এক ইউনিট হিসেবে কাজ করলে একবচন ক্রিয়া নেয়। News, information, furniture, advice, luggage — এই অগণনযোগ্য শব্দগুলো সবসময় একবচন। টাকা, সময় বা দূরত্বের পরিমাণ একটাই অখণ্ড বিষয় হিসেবে গণ্য হয়: Ten thousand taka is a big sum।",
        examples: [
          {
            wrong: "The news are very sad today.",
            right: "The news is very sad today.",
            note: "news-এর শেষে s থাকলেও শব্দটা অগণনযোগ্য আর একবচন।",
          },
          {
            wrong: "Our team have won all five matches this season.",
            right: "Our team has won all five matches this season.",
            note: "দল এক ইউনিট হিসেবে জিতেছে, তাই has।",
          },
          {
            wrong: "Five kilometres are too far to walk in this heat.",
            right: "Five kilometres is too far to walk in this heat.",
            note: "পরিমাপ করা দূরত্ব একটাই পরিমাণ — তাই is।",
          },
        ],
      },
    ],
    tips: [
      "ক্রিয়া বাছাইয়ের আগে of the players-জাতীয় ফ্রেজ কেটে ফেলুন — আসল কর্তা তার আড়ালে লুকিয়ে থাকে।",
      "একবচন-দল মুখস্থ করুন: everyone, each, every, everybody, nobody, neither of, either of।",
      "neither...nor বা either...or-এ ক্রিয়ার কাছের নামটার দিকে তাকান — সেটাই সিদ্ধান্ত নেয়।",
      "News, physics, mathematics, information — s দিয়ে শেষ হলেও এরা একবচন; এদের সঙ্গে একবচন ক্রিয়াই ভালোবাসে।",
    ],
    quiz: [
      {
        question: "Everyone in the queue ___ waiting patiently for the counter to open.",
        options: ["is", "are", "were", "have been"],
        answer: 0,
        explanation: "everyone সবসময় একবচন, তাই ক্রিয়া is।",
      },
      {
        question: "Neither the students nor the teacher ___ informed about the change.",
        options: ["were", "have been", "was", "are"],
        answer: 2,
        explanation: "কাছের কর্তা teacher একবচন, তাই was।",
      },
      {
        question: "The list of selected candidates ___ on the notice board.",
        options: ["are", "is", "were", "have been"],
        answer: 1,
        explanation: "আসল কর্তা list, candidates নয় — একটা list মানে is।",
      },
      {
        question: "Ten thousand taka ___ enough for the semester's books.",
        options: ["are", "were", "is", "have been"],
        answer: 2,
        explanation: "টাকার অঙ্ক একটাই পরিমাণ হিসেবে কাজ করে, তাই একবচন is।",
      },
      {
        question: "Each of the participants ___ a certificate at the closing ceremony.",
        options: ["were given", "have been given", "was given", "are given"],
        answer: 2,
        explanation: "আসল কর্তা each আর সেটা একবচন — তাই was given।",
      },
    ],
  },
  {
    topic: "Question Formation",
    level: "intermediate",
    locale: "bn",
    title: "প্রশ্ন গড়া: indirect question, tag আর subject question",
    intro:
      "B1 লেভেলে দুই ধরনের প্রশ্ন দরকার — দরজা খুলে দেয় এমন ভদ্র প্রশ্ন আর কথা চালিয়ে নেয় এমন স্বাভাবিক প্রশ্ন। এই পাঠে দুটোই ঘষামাজা — সেই বিখ্যাত isn't it-সমস্যাটাও।",
    sections: [
      {
        heading: "Indirect question: ভদ্র আর ভুল-প্রমাণ",
        explanation:
          "ভদ্র শোনাতে প্রশ্নটাকে একটা বাক্যাংশের ভেতরে মুড়ে ফেলুন: Could you tell me...?, Do you know...?, I wonder...। বাক্যাংশের পরে সাধারণ বাক্যের ক্রম থাকে — do/does/did নেই, ক্রিয়া কর্তার পরে বসে: Could you tell me where the station is? বাংলায় প্রশ্নে কোনো সাহায্যকারী উল্টে যায় না, তাই নিয়মটা মনে রাখার সবচেয়ে সহজ উপায় — ভেতরের অংশটাকে সাধারণ বাক্যের মতোই সাজান।",
        examples: [
          {
            wrong: "Could you tell me where is the station?",
            right: "Could you tell me where the station is?",
            note: "indirect question-এর ভেতরে কর্তা আগে, ক্রিয়া পরে।",
          },
          {
            wrong: "Do you know what means this word?",
            right: "Do you know what this word means?",
            note: "ভেতরের প্রশ্নে দ্বিতীয়বার do/does ঢোকে না।",
          },
          {
            wrong: "Can you tell me how much does this book cost?",
            right: "Can you tell me how much this book costs?",
            note: "does বাদ, costs কর্তার পরেই বসবে।",
          },
        ],
      },
      {
        heading: "Tag question: সঠিক ট্যাগ মেলানো",
        explanation:
          "ট্যাগ মূল বাক্যের auxiliary হুবহু কপি করে তারপর উল্টে দেয়: হ্যাঁ-সূচক বাক্যে না-সূচক ট্যাগ — You are coming, aren't you? আর না-সূচক বাক্যে হ্যাঁ-সূচক ট্যাগ — He can drive, can't he? বিশেষ রূপগুলো মুখস্থ রাখুন: I am → aren't I, আর Let's → shall we। সব প্রশ্নে isn't it? ব্যবহারের অভ্যাসটা আমাদের ক্লাসরুমে চলে, কিন্তু আন্তর্জাতিক ইংরেজিতে জানা ভুল।",
        examples: [
          {
            wrong: "You are coming to the wedding, isn't it?",
            right: "You are coming to the wedding, aren't you?",
            note: "ট্যাগ কর্তা আর auxiliary দুটোরই প্রতিধ্বনি: are → aren't you।",
          },
          {
            wrong: "They didn't reach home late, didn't they?",
            right: "They didn't reach home late, did they?",
            note: "না-সূচক বাক্যে হ্যাঁ-সূচক ট্যাগ লাগে।",
          },
          {
            wrong: "Let's start the revision, will we?",
            right: "Let's start the revision, shall we?",
            note: "let's দিয়ে প্রস্তাবের ট্যাগ সবসময় shall we।",
          },
        ],
      },
      {
        heading: "Subject question, negative question আর শেষে preposition",
        explanation:
          "যখন who বা what নিজেই প্রশ্নের কর্তা, তখন do আসে না: Who broke the window? — Who did break the window? নয়। Didn't you get my message? জাতীয় negative question অবাক হওয়া বা নিশ্চিত করা বোঝায়। আর রোজকার ইংরেজিতে preposition বাক্যের শেষে থেকে যেতে পারে: Which college are you applying to?",
        examples: [
          {
            wrong: "Who did call you last night?",
            right: "Who called you last night?",
            note: "who যখন কর্তা, তখন সাধারণ বাক্যের ক্রমই থাকে।",
          },
          {
            wrong: "Didn't you finished the assignment?",
            right: "Didn't you finish the assignment?",
            note: "didn't-এর পরে ক্রিয়ার মূল রূপ finish ফিরে আসে।",
          },
          {
            wrong: "About which topic are you talking?",
            right: "Which topic are you talking about?",
            note: "রোজকার ইংরেজি preposition-কে বাক্যের শেষেই ছেড়ে দেয়।",
          },
        ],
      },
    ],
    tips: [
      "indirect question-এর সূত্র: ভদ্র শুরু + সাধারণ বাক্যের ক্রম। আগে সরাসরি প্রশ্ন বলুন, তারপর do/does/did বাদ দিন।",
      "ট্যাগ ক্রিয়ারই প্রতিবিম্ব: is → isn't, can → can't, did → didn't — আর I am হয় aren't I।",
      "who/what যদি কর্তা হয়, do/does/did সাথে সাথে মুছে দিন।",
      "অনুরোধ নরম করতে can-এর জায়গায় could বা may আনুন: Could I leave a little early today?",
    ],
    quiz: [
      {
        question: "Could you tell me ___?",
        options: ["where is the exam hall", "where the exam hall is", "where is exam hall", "the exam hall is where"],
        answer: 1,
        explanation: "indirect question সাধারণ বাক্যের ক্রম রাখে: the exam hall is।",
      },
      {
        question: "You have finished the whole chapter, ___?",
        options: ["isn't it", "haven't you", "didn't you", "have you"],
        answer: 1,
        explanation: "have-সহ হ্যাঁ-সূচক বাক্যে না-সূচক ট্যাগ haven't you বসে।",
      },
      {
        question: "___ the lights when the storm started?",
        options: ["Who switched off", "Who did switch off", "Who switches off", "Whom switched off"],
        answer: 0,
        explanation: "who এখানে কর্তা, তাই did লাগে না: who switched off।",
      },
      {
        question: "I am on the list of finalists, ___?",
        options: ["amn't I", "am not I", "aren't I", "isn't I"],
        answer: 2,
        explanation: "I am-এর প্রচলিত ট্যাগ হলো aren't I।",
      },
      {
        question: "Do you know ___?",
        options: ["when does the shop open", "when the shop opens", "when opens the shop", "when shop opens"],
        answer: 1,
        explanation: "do you know-র পরে ভেতরের অংশে সাধারণ ক্রম থাকে, does আসে না।",
      },
    ],
  },
  {
    topic: "Prepositions (in/on/at)",
    level: "intermediate",
    locale: "bn",
    title: "Preposition-এর গভীরে: in time, on time আর জোড়া-শব্দ",
    intro:
      "B1 লেভেলে ছোট শব্দগুলো বড় কাজ করে। in time আর on time পাঁচটা অক্ষরের ব্যবধানে একদম আলাদা অর্থ — আর কয়েক ডজন জোড়া-শব্দ কোনো যুক্তি মানেই না, শুধু মুখস্থ চায়।",
    sections: [
      {
        heading: "in time বনাম on time — আর সময়ের অন্য জুটি",
        explanation:
          "On time মানে সময়মতো, ঠিক নির্ধারিত মুহূর্তে: The 8 a.m. train left on time. আর in time মানে যথেষ্ট আগে, দেরি হওয়ার আগেই: We reached the platform in time to catch the train. একই ভাবে at the end কোনো কিছুর শেষ অংশ বোঝায়, কিন্তু in the end মানে শেষ পর্যন্ত, সবকিছুর পরে। বাংলায় দুটোই সময়মতো-শেষমেশ জাতীয় কথায় নেমে আসে, তাই ইংরেজি পার্থক্যটা আলাদা করে মুখস্থ করতে হয়।",
        examples: [
          {
            wrong: "The rickshaw arrived exactly in time.",
            right: "The rickshaw arrived exactly on time.",
            note: "সময়মতো পৌঁছানো = on time।",
          },
          {
            wrong: "We reached the stadium on time to see the first goal.",
            right: "We reached the stadium in time to see the first goal.",
            note: "কিছু করার জন্য যথেষ্ট আগে পৌঁছানো = in time to...",
          },
          {
            wrong: "At the end, we decided to share the bill.",
            right: "In the end, we decided to share the bill.",
            note: "শেষ পর্যন্ত, সবকিছুর পরে = in the end।",
          },
        ],
      },
      {
        heading: "Adjective/verb + preposition: স্থির জুটি",
        explanation:
          "এই জুটিগুলো স্থির — কোনো যুক্তি নেই, শুধু স্মৃতি: interested in, good at, afraid of, depend on, married to, angry with। শব্দভাণ্ডারের মতোই এদের এক টুকরো হিসেবে শিখুন, আর মাতৃভাষা থেকে শব্দে শব্দে অনুবাদ করে ফেলবেন না — বাংলার তে/এর সঙ্গে ইংরেজির in/on/of হুবহু মেলে না।",
        examples: [
          {
            wrong: "I am interested on photography.",
            right: "I am interested in photography.",
            note: "interested সবসময় in-এর সঙ্গী।",
          },
          {
            wrong: "She is very good in mental maths.",
            right: "She is very good at mental maths.",
            note: "দক্ষতায় পারদর্শী = good at।",
          },
          {
            wrong: "Whether we play depends of the weather.",
            right: "Whether we play depends on the weather.",
            note: "depend সবসময় on নেয়, of কখনো নয়।",
          },
        ],
      },
      {
        heading: "তিন শব্দের চাঙ্ক: in a hurry, on purpose, at risk",
        explanation:
          "রোজকার ইংরেজি অনুভূতি আর পরিস্থিতি তিন শব্দের চাঙ্কে গুছিয়ে রাখে: in a hurry (তাড়ায়), on purpose (ইচ্ছা করে), at risk (বিপদে), in a good mood, on duty, at ease। পুরো চাঙ্ক হিসেবে বলুন — একটা শব্দ বদলে দিলেই বাক্যটা সঙ্গে সঙ্গে বিদেশি শোনায়।",
        examples: [
          {
            wrong: "Sorry I can't talk — I am on a hurry.",
            right: "Sorry I can't talk — I am in a hurry.",
            note: "তাড়ায় থাকা = in a hurry।",
          },
          {
            wrong: "I didn't switch off the alarm with purpose.",
            right: "I didn't switch off the alarm on purpose.",
            note: "ইচ্ছা করে = on purpose; এর বিপরীত by accident।",
          },
          {
            wrong: "Families near the river are on risk of flooding.",
            right: "Families near the river are at risk of flooding.",
            note: "বিপদে থাকা = at risk।",
          },
        ],
      },
    ],
    tips: [
      "Preposition অনুবাদ করা বন্ধ করুন; পুরো চাঙ্ক মুখস্থ করুন — interested IN, good AT, depend ON।",
      "On time = সময়মতো; in time = যথেষ্ট আগে। ট্রেনের সময়সূচি দিয়ে নিজেকে পরীক্ষা করুন।",
      "নাটক-সিনেমা থেকে তিন শব্দের বাক্যাংশ পুরোটা নোট করুন: in a hurry, at risk, on duty।",
      "বেশিরভাগ ভুল আসে of/on বিনিময় থেকে — মুখে বলা প্রতিটা of-এ এক মুহূর্ত থামুন।",
    ],
    quiz: [
      {
        question: "The flight left exactly ___ 7:30 — beautifully punctual.",
        options: ["in time", "on time", "at time", "by time"],
        answer: 1,
        explanation: "নির্ধারিত মুহূর্তে সময়মতো = on time।",
      },
      {
        question: "Luckily the doctor arrived ___ to save the patient.",
        options: ["on time", "in time", "at time", "for time"],
        answer: 1,
        explanation: "কিছু করার জন্য যথেষ্ট আগে = in time to do it।",
      },
      {
        question: "My younger sister is very good ___ drawing mehendi patterns.",
        options: ["at", "in", "on", "with"],
        answer: 0,
        explanation: "দক্ষতার জন্য স্থির জুটি good at।",
      },
      {
        question: "The whole village depends ___ the river for fish and farming.",
        options: ["of", "in", "on", "from"],
        answer: 2,
        explanation: "depend on-ই স্থির জুটি।",
      },
      {
        question: "He broke my favourite cup, but it wasn't ___ — it slipped.",
        options: ["with purpose", "on purpose", "in purpose", "for purpose"],
        answer: 1,
        explanation: "ইচ্ছা করে = on purpose; বিপরীতে by accident।",
      },
    ],
  },
  {
    topic: "Articles (a/an/the)",
    level: "intermediate",
    locale: "bn",
    title: "B1-এ Article: zero article, সাধারণ অর্থ আর দ্বিতীয় উল্লেখ",
    intro:
      "বাংলায় a, an, the ছাড়াই সব চলে যায় — ইংরেজি মানে না। এই লেভেলে বিপদ আর article বাদ পড়া নয়; আসল ফাঁদ হলো কখন একেবারেই কিছু বসাতে হয় না, সেটা জানা।",
    sections: [
      {
        heading: "Zero article: সাধারণ অর্থে বিমূর্ত ও অগণনযোগ্য নাম",
        explanation:
          "কোনো ধারণা সাধারণ অর্থে বোঝালে — honesty, education, happiness, information — একদম কোনো article বসে না: Honesty is the best policy। কিন্তু the বসানোর সঙ্গে সঙ্গে অর্থ সরু হয়ে নির্দিষ্ট উদাহরণে নেমে আসে: The honesty of that shopkeeper impressed everyone। একটা ছোট শব্দ, পুরো অর্থের বদল — আর যেহেতু বাংলায় article নেই, এই শূন্য-জায়গাটাই সবচেয়ে বেশি অদৃশ্য ভুলের উৎস।",
        examples: [
          {
            wrong: "The honesty is the best policy.",
            right: "Honesty is the best policy.",
            note: "সাধারণ অর্থে বিমূর্ত ধারণায় কোনো article বসে না।",
          },
          {
            wrong: "She gave me an useful advice before the exam.",
            right: "She gave me useful advice before the exam.",
            note: "advice অগণনযোগ্য — a/an নেই, plural s-ও নেই।",
          },
          {
            wrong: "The life in a village is simple.",
            right: "Life in a village is simple.",
            note: "সাধারণ অর্থে life-এর আগে কিছু বসে না।",
          },
        ],
      },
      {
        heading: "সাধারণ বহুবচন বনাম the + নির্দিষ্ট দল",
        explanation:
          "Article-হীন বহুবচন নাম সবার বিষয়ে সাধারণ কথা বলে: Rickshaws are part of Dhaka's charm। আর the + বহুবচন চিহ্নিত নির্দিষ্ট এক দলের কথা বলে: The rickshaws near the station charge double। একই শব্দ, দুই পৃথিবী। আর চেইনটা মনে রাখুন — প্রথম উল্লেখে a shawl, দ্বিতীয় উল্লেখে the shawl।",
        examples: [
          {
            wrong: "The tigers are beautiful animals.",
            right: "Tigers are beautiful animals.",
            note: "বাঘ সম্পর্কে সাধারণ কথা? the বাদ দিন।",
          },
          {
            wrong: "Tigers of the Sundarbans are endangered.",
            right: "The tigers of the Sundarbans are endangered.",
            note: "চিহ্নিত নির্দিষ্ট দলে the লাগে।",
          },
          {
            wrong: "I bought a shawl. Shawl was woven in Tangail.",
            right: "I bought a shawl. The shawl was woven in Tangail.",
            note: "দ্বিতীয় উল্লেখে a বদলে the বসে।",
          },
        ],
      },
      {
        heading: "Superlative, অনন্য জিনিস আর একক নাম",
        explanation:
          "Superlative-এর সঙ্গে সবসময় the যায়: the best, the tallest, the most delicious। অনন্য জিনিসেও the বসে — the sun, the moon, the sky, the internet। তবে একক পাহাড়ের নাম খালি থাকে: the Himalayas বলি, কিন্তু Mount Everest। এই ছোট ছোট প্রথা নিয়মে নয়, একটা একটা করে শেখা যায়।",
        examples: [
          {
            wrong: "She is most talented singer in our club.",
            right: "She is the most talented singer in our club.",
            note: "superlative-এর আগে the সবসময় লাগে।",
          },
          {
            wrong: "We found the answer on Internet.",
            right: "We found the answer on the Internet.",
            note: "the internet অনন্য জিনিস — the লাগে।",
          },
          {
            wrong: "The Mount Everest lies between Nepal and Tibet.",
            right: "Mount Everest lies between Nepal and Tibet.",
            note: "একক পাহাড়ের নাম খালি থাকে: Mount Everest, কিন্তু the Himalayas।",
          },
        ],
      },
    ],
    tips: [
      "সাধারণ বিমূর্ত ধারণা → কোনো article নেই। একই ধারণা ফ্রেজে বাঁধা → the: education, কিন্তু the education system of our district।",
      "প্রথম উল্লেখ a, দ্বিতীয় উল্লেখ the — নিজের গল্পে shawl-টাকে ধরে রাখুন।",
      "superlative চোখে পড়লেই সামনে the বসান, কোনো ব্যতিক্রম নেই।",
      "অগণনযোগ্য শব্দ কখনো a নেয় না: advice, information, furniture, luggage, homework।",
    ],
    quiz: [
      {
        question: "Choose the correct sentence.",
        options: [
          "The patience is a virtue.",
          "Patience is a virtue.",
          "A patience is a virtue.",
          "Patience is virtue the.",
        ],
        answer: 1,
        explanation: "সাধারণ অর্থে patience বিমূর্ত ধারণা — কোনো article লাগে না।",
      },
      {
        question: "I saw a stray dog near the gate. ___ dog was limping.",
        options: ["A", "The", "One", "Some"],
        answer: 1,
        explanation: "একই কুকুরের দ্বিতীয় উল্লেখে the বসে।",
      },
      {
        question: "Choose the correct sentence.",
        options: [
          "Rickshaw is cheapest transport in Dhaka.",
          "The rickshaws are cheapest transport in Dhaka.",
          "Rickshaws are the cheapest transport in Dhaka.",
          "A rickshaws are cheapest transport in Dhaka.",
        ],
        answer: 2,
        explanation: "সাধারণ বহুবচন (rickshaws) + superlative-এর the — এই জোড়াই স্বাভাবিক।",
      },
      {
        question: "She won ___ prize for the best essay in the competition.",
        options: ["a", "the", "an", "no article"],
        answer: 0,
        explanation: "অনেক পুরস্কারের মধ্যে একটি মানে a prize; আর the best essay হলো the-সহ superlative।",
      },
      {
        question: "My grandfather listens to ___ news on the radio every evening.",
        options: ["a", "the", "an", "no article"],
        answer: 1,
        explanation: "the news একটা স্থির বাক্যাংশ — the-ই লাগে।",
      },
    ],
  },
  {
    topic: "Present Perfect vs Past Simple",
    level: "intermediate",
    locale: "bn",
    title: "Present Perfect বনাম Past Simple: B1-এর আসল সীমান্ত",
    intro:
      "শুরুর পাঠে এই জুটিকে চেনেন; এবার আসল সীমান্ত পার হওয়া যাক — still, yet, already, আর সংবাদপাঠকের নিয়ম। এগুলো ঠিক হলে পরীক্ষকের ভুরুও শিথিল হয়।",
    sections: [
      {
        heading: "বন্ধ সময় বনাম এখনো খোলা সময়",
        explanation:
          "Past simple থাকে বন্ধ হয়ে যাওয়া সময়ের শব্দের সঙ্গে: yesterday, last week, in 2021, two years ago। Present perfect থাকে এখনো খোলা সময়ের সঙ্গে: today, this week, so far, ever, since 2021। একটাই প্রশ্ন করুন — সময়ের জানালাটা এখনো খোলা তো? খোলা থাকলে perfect-ও জানালা খোলা রাখে। বাংলায় করলাম-করেছি দুটো রূপই আছে, কিন্তু এখনো-ধরার দায়িত্বটা ইংরেজিতে perfect-এর।",
        examples: [
          {
            wrong: "I have watched two films last night.",
            right: "I watched two films last night.",
            note: "last night বন্ধ সময় — তাই past simple।",
          },
          {
            wrong: "I saw three films this week so far.",
            right: "I have seen three films this week so far.",
            note: "so far সপ্তাহটাকে খোলা রাখে — present perfect।",
          },
          {
            wrong: "She has visited her village in 2022.",
            right: "She visited her village in 2022.",
            note: "in 2022 একটা শেষ হয়ে যাওয়া বছর।",
          },
        ],
      },
      {
        heading: "yet, already, just, still — চারটা ক্ষুদ্র সংকেত",
        explanation:
          "Yet থাকে না-সূচক বাক্যে আর প্রশ্নে: I haven't finished yet। Already থাকে হ্যাঁ-সূচক বাক্যে, অনেক সময় প্রত্যাশার চেয়ে আগে হওয়ার অর্থে: He has already left। Just বোঝায় এই মুহূর্তে শেষ হওয়া: The shop has just closed। আর still, সাধারণত না-সূচক perfect-এর সঙ্গে, দীর্ঘ অপেক্ষার অভিযোগ করে: She still hasn't replied।",
        examples: [
          {
            wrong: "I have finished my revision yet.",
            right: "I haven't finished my revision yet.",
            note: "yet-এর জন্য না-সূচক বাক্য বা প্রশ্ন লাগে।",
          },
          {
            wrong: "He didn't arrive still.",
            right: "He still hasn't arrived.",
            note: "still + hasn't/haven't বোঝায় দেরিটা এখনো চলছে।",
          },
          {
            wrong: "The rickshaw has come just.",
            right: "The rickshaw has just come.",
            note: "just বসে have আর participle-এর মাঝখানে।",
          },
        ],
      },
      {
        heading: "আগে সংবাদ, পরে খুঁটিনাটি",
        explanation:
          "তাজা সংবাদ ঘোষণা করুন present perfect-এ, তারপর খুঁটিনাটি বলুন past simple-এ: Bangladesh has won the series! They beat Ireland by four wickets last night। Perfect বিষয়টা খুলে দেয়, past simple ঠিক করে দেয় কখন, কোথায়, কীভাবে। সংবাদপাঠক-ধারাভাষ্যকাররা ঠিক এই ছন্দেই কথা বলেন।",
        examples: [
          {
            wrong: "Our team has beaten them in the final last Friday.",
            right: "Our team beat them in the final last Friday.",
            note: "সংবাদের ভেতরেও last Friday বন্ধ সময়।",
          },
          {
            wrong: "Have you seen Rahim? — Yes, I have seen him at ten o'clock.",
            right: "Have you seen Rahim? — Yes, I saw him at ten o'clock.",
            note: "নির্দিষ্ট সময় বলে দিলে উত্তর past simple-এ নেমে আসে।",
          },
          {
            wrong: "The minister announced a new stipend — she has made the speech an hour ago.",
            right: "The minister has announced a new stipend. She made the speech an hour ago.",
            note: "সংবাদ perfect-এ, তারিখ-সময়ের খুঁটিনাটি past simple-এ।",
          },
        ],
      },
    ],
    tips: [
      "একটাই প্রশ্ন করুন: সময়ের জানালা খোলা না বন্ধ? খোলা → perfect; বন্ধ → past simple।",
      "yet = না-বাক্য/প্রশ্ন; already = হ্যাঁ-বাক্যে আশ্চর্য; just = এইমাত্র; still = এখনো অপেক্ষা।",
      "সংবাদে শিরোনাম perfect-এ, সময়ের সিলমোহর past simple-এ।",
      "Ever আর never প্রায় সবসময় present perfect টেনে আনে: Have you ever eaten Thai food?",
    ],
    quiz: [
      {
        question: "I ___ my glasses — I can't find them anywhere.",
        options: ["lost", "have lost", "was losing", "had lost"],
        answer: 1,
        explanation: "ফলাফল এখনও চোখে পড়ছে (খুঁজে পাচ্ছি না), তাই present perfect।",
      },
      {
        question: "She ___ her cousins in Chattogram last Eid.",
        options: ["has visited", "visits", "visited", "has been visiting"],
        answer: 2,
        explanation: "last Eid বন্ধ সময়, তাই past simple visited।",
      },
      {
        question: "We ___ for the bus for forty minutes and it still isn't here.",
        options: ["wait", "waited", "have been waiting", "are waiting"],
        answer: 2,
        explanation: "অপেক্ষা অতীতে শুরু হয়ে এখনও চলছে — have been waiting।",
      },
      {
        question: "He is the most honest shopkeeper I ___ ever ___.",
        options: ["did / met", "have / met", "had / met", "am / meeting"],
        answer: 1,
        explanation: "ever + জীবনের অভিজ্ঞতা মানে present perfect: have met।",
      },
      {
        question: "I ___ him at the market yesterday, but I ___ him since.",
        options: ["met / have not seen", "have met / did not see", "met / did not see", "have met / have not seen"],
        answer: 0,
        explanation: "yesterday বন্ধ সময় (met), আর since জানালা খোলা রাখে (have not seen)।",
      },
    ],
  },
  {
    topic: "Conditionals",
    level: "intermediate",
    locale: "bn",
    title: "Conditional: If, Unless আর Wish",
    intro:
      "Type 1 ভবিষ্যৎ গোছায়; type 2 অসম্ভব বর্তমান নিয়ে স্বপ্ন দেখে। তার মাঝে unless নিঃশব্দে সব উল্টে দেয়। এগুলো দখলে এলে আপনার ইংরেজি একসঙ্গে সতর্কও হবে, সৃজনশীলও।",
    sections: [
      {
        heading: "Type 1 বনাম Type 2: বাস্তব সম্ভাবনা বনাম কল্পনা",
        explanation:
          "Type 1 (if + present, will + verb) বাস্তব সম্ভাবনার কথা বলে: If it rains tomorrow, the match will be cancelled। Type 2 (if + past, would + verb) অসম্ভব বা কল্পিত বর্তমানের: If I were the captain, I would change the batting order। সোনার নিয়ম — will বা would কখনো if-অংশে ঢোকে না। বাংলায় যদি-অংশে সব সমান শোনায়, তাই এই বিভাজনটা ইচ্ছে করে চর্চা করতে হয়।",
        examples: [
          {
            wrong: "If it will rain tomorrow, we will cancel the picnic.",
            right: "If it rains tomorrow, we will cancel the picnic.",
            note: "if-অংশ simple present-এই থাকে।",
          },
          {
            wrong: "If I was a bird, I will fly to Saint Martin's.",
            right: "If I were a bird, I would fly to Saint Martin's.",
            note: "অসম্ভব স্বপ্ন মানে past রূপ + would।",
          },
          {
            wrong: "If she studies harder, she would top the class.",
            right: "If she studied harder, she would top the class.",
            note: "ফলাফলে would থাকলে if-অংশ past রূপে যায়।",
          },
        ],
      },
      {
        heading: "unless, as long as, provided that",
        explanation:
          "Unless মানে if...not: Unless you hurry, you will miss the rickshaw। দ্বিতীয় একটা not যোগ করবেন না — একটা না-ই যথেষ্ট। As long as আর provided that শর্তের ভেতরে একটা প্রতিশ্রুতি জুড়ে দেয়: You can borrow my notes as long as you return them on Sunday। সাধারণ if-এর চেয়ে এরা আত্মবিশ্বাসী শোনায়।",
        examples: [
          {
            wrong: "Unless you don't book early, you won't get a seat.",
            right: "Unless you book early, you won't get a seat.",
            note: "unless-এর ভেতরেই not লুকিয়ে আছে — অতিরিক্ত don't বাদ।",
          },
          {
            wrong: "You can join the trip as long you share the fuel cost.",
            right: "You can join the trip as long as you share the fuel cost.",
            note: "চাঙ্কটা as long as — তিনটা শব্দ, সবসময় একসঙ্গে।",
          },
          {
            wrong: "We will reach Sylhet by noon, provided the traffic will stay light.",
            right: "We will reach Sylhet by noon, provided that the traffic stays light.",
            note: "শর্তের অংশে simple present বসে, will নয়।",
          },
        ],
      },
      {
        heading: "wish + past: বর্তমান নিয়ে আফসোস",
        explanation:
          "ভিন্ন বর্তমান চাইলে ক্রিয়াকে এক ধাপ পেছনে নিন: I wish I had a motorcycle (আসলে নেই)। যত্নশীল ইংরেজিতে সব কর্তার সঙ্গে were পছন্দ করা হয়: I wish I were taller। আর মনে রাখুন — wish + would দিয়ে অন্য মানুষ বা আবহাওয়ার অভিযোগ হয়, নিজের কাজের নয়।",
        examples: [
          {
            wrong: "I wish I have more free time.",
            right: "I wish I had more free time.",
            note: "অবাস্তব বর্তমান মানে past রূপ had।",
          },
          {
            wrong: "I wish my exam comes next month.",
            right: "I wish my exam came next month.",
            note: "ভিন্ন বর্তমান চাইলে ক্রিয়া পেছনে: came।",
          },
          {
            wrong: "I wish I am taller so I could play in the front row.",
            right: "I wish I were taller so I could play in the front row.",
            note: "wish-এ সব কর্তার সঙ্গে were-ই পছন্দনীয়।",
          },
        ],
      },
    ],
    tips: [
      "if-অংশে present বা past কেবল; will আর would বাক্যের অন্য অর্ধে বাস করে।",
      "unless শুনলেই দ্বিতীয় কোনো not খুঁজে মুছুন — unless you don't মানে দ্বি-না-বোধক।",
      "Type 2 পরীক্ষা: কথাটা বাস্তব না স্বপ্ন? স্বপ্ন হলে would জুড়ুন, ক্রিয়াকে past-এ নিন।",
      "বর্তমান নিয়ে wish-এ এক ধাপ পেছন: have → had, am → were, comes → came।",
    ],
    quiz: [
      {
        question: "If the rickshaw puller ___ fast, we will catch the six o'clock train.",
        options: ["will go", "goes", "would go", "went"],
        answer: 1,
        explanation: "Type 1-এ if-অংশ simple present-এ থাকে: goes।",
      },
      {
        question: "If I ___ the manager, I would give everyone a festival bonus.",
        options: ["am", "was", "were", "will be"],
        answer: 2,
        explanation: "কল্পিত বর্তমানে past রূপ লাগে — আর were-ই ক্লাসিক পছন্দ।",
      },
      {
        question: "___ you leave now, you will miss the last launch to Barishal.",
        options: ["Unless", "If", "As long as", "Provided that"],
        answer: 0,
        explanation: "না-বোধক অর্থ কেবল unless-ই দেয়: if you do not leave...",
      },
      {
        question: "You may borrow my cycle ___ you bring it back by evening.",
        options: ["unless", "as long as", "in case", "otherwise"],
        answer: 1,
        explanation: "অনুমতির সঙ্গে জুড়া শর্ত = as long as (বা provided that)।",
      },
      {
        question: "I wish our exams ___ next week instead of tomorrow.",
        options: ["will start", "start", "started", "would starting"],
        answer: 2,
        explanation: "বর্তমান নিয়ে wish মানে ক্রিয়া এক ধাপ পেছনে: started।",
      },
    ],
  },
  {
    topic: "Passive Voice",
    level: "intermediate",
    locale: "bn",
    title: "Passive Voice: সব টেন্স জুড়ে",
    intro:
      "Passive মানে শুধু be + participle নয় — B1-এ এটা প্রতিটি টেন্সে সাজ বদলায়। সঙ্গে সিদ্ধান্তটাও নিতে হয়: বাক্যের আলো পড়বে কাজের দিকে না কর্তার দিকে।",
    sections: [
      {
        heading: "একটা passive, অনেক টেন্স",
        explanation:
          "গঠন be + past participle, বদলায় কেবল be: The bridge is repaired every year (বর্তমান), is being repaired right now (present continuous), was repaired last month, has been repaired, had been repaired before the rains, will be repaired soon। নোটিশ, সংবাদ আর পরীক্ষার প্রশ্নে এই সব রূপই ঘোরে। বাংলার করা হয়-জাতীয় গঠনের সঙ্গে মিল রেখে বিভ্রান্তি কমান।",
        examples: [
          {
            wrong: "The new flyover is building right now.",
            right: "The new flyover is being built right now.",
            note: "এই মুহূর্তে চলছে মানে is being + built।",
          },
          {
            wrong: "Your parcel has been send to the wrong branch.",
            right: "Your parcel has been sent to the wrong branch.",
            note: "has been-এর পরে participle বসে — sent।",
          },
          {
            wrong: "The results will announce next Sunday.",
            right: "The results will be announced next Sunday.",
            note: "will-এর পরে participle-এর আগে be লাগে: will be announced।",
          },
        ],
      },
      {
        heading: "by-ফ্রেজ: দরকার হলেই রাখুন",
        explanation:
          "by + কর্তা যোগ করুন কেবল যখন কর্তাটাই নতুন, আকর্ষণীয় তথ্য: The National Anthem was written by Rabindranath Tagore। কর্তা অজানা, স্পষ্ট বা গুরুত্বহীন হলে বাদ দিন: My phone was stolen, The road is cleaned every morning। কিছু না যোগ করা by somebody শুধু ভার।",
        examples: [
          {
            wrong: "My wallet was stolen by somebody on the crowded bus.",
            right: "My wallet was stolen on the crowded bus.",
            note: "by somebody কোনো তথ্য যোগ করে না — কেটে ফেলুন।",
          },
          {
            wrong: "English is spoken by people all over the world.",
            right: "English is spoken all over the world.",
            note: "কর্তা সাধারণ, তাই by-ফ্রেজ মিলিয়ে যায়।",
          },
          {
            wrong: "The thief arrested by the police yesterday.",
            right: "The thief was arrested by the police yesterday.",
            note: "passive-এও be লাগবেই: was arrested।",
          },
        ],
      },
      {
        heading: "ইচ্ছে করে passive বাছাই",
        explanation:
          "কর্তার চেয়ে কাজের প্রাপক গুরুত্বপূর্ণ হলে passive-ই ভরসা — প্রক্রিয়া, নিয়ম, শিরোনাম: First the tea leaves are picked, then they are dried in the sun। সংবাদও এটা ভালোবাসে: Three students were rescued from the river। Passive আপনার গল্পের মূল বিষয়কে প্রতিটি বাক্যের কর্তার আসনেই বসিয়ে রাখে।",
        examples: [
          {
            wrong: "First somebody picks the leaves, then somebody dries them, and finally somebody packs them.",
            right: "First the leaves are picked, then they are dried, and finally they are packed.",
            note: "প্রক্রিয়ার বর্ণনায় পণ্যকে কর্তা রাখলে গল্প মসৃণ হয়।",
          },
          {
            wrong: "Mobile phones must not use during the exam.",
            right: "Mobile phones must not be used during the exam.",
            note: "must-এর পরে passive-এ be + used লাগে।",
          },
          {
            wrong: "The new library will opening next month.",
            right: "The new library will be opened next month.",
            note: "ভবিষ্যতের passive = will be + participle।",
          },
        ],
      },
    ],
    tips: [
      "Passive বানান দুই ধাপে: সঠিক টেন্সে be বসান, তারপর past participle জুড়ুন।",
      "শ্রোতা যদি জিজ্ঞেস করে কে করল? — তখনই কর্তার নাম বলুন; নইলে by-ফ্রেজকে বাড়ি পাঠান।",
      "Past participle হলো জ্বালানি: send-sent, build-built, write-written, steal-stolen — অনিয়মিত তালিকা ঘষুন।",
      "চা, লবণ, কাগজ, পাট — যেকোনো প্রক্রিয়া বর্ণনায় passive আপনাকে এক মুহূর্তে পেশাদার বানিয়ে দেবে।",
    ],
    quiz: [
      {
        question: "The classroom ___ whitewashed every winter.",
        options: ["is", "is being", "was", "has been"],
        answer: 0,
        explanation: "every winter মানে নিয়মিত অভ্যাস — simple present passive is।",
      },
      {
        question: "Look! The old theatre ___ into a museum.",
        options: ["is converting", "is being converted", "has converted", "converts"],
        answer: 1,
        explanation: "এই মুহূর্তে ঘটছে আর theatre কাজের প্রাপক — is being converted।",
      },
      {
        question: "The notice ___ before we reached the office.",
        options: ["has been taken down", "had been taken down", "was taking down", "is taken down"],
        answer: 1,
        explanation: "before we reached আগের ঘটনাটা চিহ্নিত করে — had been taken down।",
      },
      {
        question: "This song ___ by Kazi Nazrul Islam.",
        options: ["wrote", "was written", "is writing", "has written"],
        answer: 1,
        explanation: "এখানে কর্তাই আকর্ষণীয় তথ্য, তাই passive by-ফ্রেজ রাখে: was written।",
      },
      {
        question: "Applications ___ accepted after Friday.",
        options: ["will not", "will be not", "will not been", "will not be"],
        answer: 3,
        explanation: "ভবিষ্যতের না-সূচক passive = will not be + participle।",
      },
    ],
  },
  {
    topic: "Modals (can/should/must)",
    level: "intermediate",
    locale: "bn",
    title: "B1-এ Modal: অনুমান, বাধ্যবাধকতা আর ভদ্র অনুমতি",
    intro:
      "can, should, must তো প্রবেশদ্বার মাত্র; আসল শক্তি লুকিয়ে আছে must be, can't be, have to আর may-র ভেতরে। এই পাঠ শেখাবে চতুরতায় অনুমান করতে, মার্জিতভাবে মানতে আর ভদ্রতায় অনুমতি চাইতে।",
    sections: [
      {
        heading: "অনুমান: must be, might be, can't be",
        explanation:
          "প্রমাণ দেখে নিশ্চিত সিদ্ধান্তে must be: The lights are on — they must be home। খোলা অনুমানে might বা could be: She might be at the library। আর অসম্ভব সিদ্ধান্তে can't be: That can't be Rahim — he flew to Dubai yesterday। মনে রাখুন, অনুমানের must be-র বিপরীত can't be — mustn't নয়। বাংলায় এসব আবেগ-অনুমান কথায় নেমে আসে, ইংরেজিতে modal-ই দায়িত্ব নেয়।",
        examples: [
          {
            wrong: "The shop is closed, so he mustn't be at the market.",
            right: "The shop is closed, so he can't be at the market.",
            note: "অসম্ভব সিদ্ধান্ত = can't be; mustn't মানে নিষেধ।",
          },
          {
            wrong: "She must to be tired after the night shift.",
            right: "She must be tired after the night shift.",
            note: "Modal-এর পরে কখনো to আসে না।",
          },
          {
            wrong: "He might to know the answer.",
            right: "He might know the answer.",
            note: "might-এর পরে সরাসরি ক্রিয়ার মূল রূপ।",
          },
        ],
      },
      {
        heading: "বাধ্যবাধকতা বনাম পরামর্শ: must, have to, should",
        explanation:
          "Must প্রায়ই স্বয়ং বক্তার অনুভূতি বা কর্তৃত্ব থেকে আসে: I must call my mother tonight। Have to আসে বাইরের নিয়ম থেকে: Students have to wear the uniform। Should পরামর্শ, আইন নয়: You should drink more water। রোজকার কথায় have to-ই মূল অস্ত্র; must কখনো কখনো নাটকীয় বা জরুরি শোনায়।",
        examples: [
          {
            wrong: "At our college you should wear the ID card — it is a strict rule.",
            right: "At our college you have to wear the ID card — it is a strict rule.",
            note: "বাইরের কঠোর নিয়ম = have to, নরম should নয়।",
          },
          {
            wrong: "You must seeing a doctor about that cough.",
            right: "You should see a doctor about that cough.",
            note: "বন্ধুসুলভ পরামর্শ = should; আর modal-এর পরে মূল রূপ।",
          },
          {
            wrong: "I don't must work on Friday.",
            right: "I don't have to work on Friday.",
            note: "না-বাধ্যবাধকতা = don't have to; must-এর সঙ্গে don't চলে না।",
          },
        ],
      },
      {
        heading: "ভদ্র অনুমতি আর semi-modal",
        explanation:
          "Can I open the window? ঠিক আছে, কিন্তু আনাড়ি। May I...? আর Could I...? ভদ্রতার স্তর বাড়ায়: May I come in, sir? Semi-modal পরিবারটা সীমা বাড়ায়: be able to (যেকোনো টেন্সে সামর্থ্য), have to (বাধ্যবাধকতা), used to (অতীত অভ্যাস) — I used to play in this field as a boy।",
        examples: [
          {
            wrong: "Sir, can I leaving five minutes early today?",
            right: "Sir, may I leave five minutes early today?",
            note: "ক্লাস-অফিসে ভদ্র মানদণ্ড May I।",
          },
          {
            wrong: "I am used to get up at dawn.",
            right: "I am used to getting up at dawn.",
            note: "be used to + -ing মানে অভ্যস্ত থাকা।",
          },
          {
            wrong: "After the surgery she will can walk again.",
            right: "After the surgery she will be able to walk again.",
            note: "will can অসম্ভব; লিখতে হবে will be able to।",
          },
        ],
      },
    ],
    tips: [
      "অনুমানের সিঁড়ি: must be (নিশ্চিত) → might/could be (সম্ভবত) → can't be (অসম্ভব)।",
      "mustn't = করবেন না; don't have to = করার দরকার নেই। দুটো সম্পূর্ণ আলাদা দরজা।",
      "প্রতিটা modal ক্রিয়ার খাঁটি মূল রূপ নেয়: can go, must go, should go — to নেই, s নেই, -ing নেই।",
      "দোকান-অফিসে can-কে could-এ উন্নীত করুন: Could I see the price list, please?",
    ],
    quiz: [
      {
        question: "Anis isn't answering his phone. He ___ in the exam hall.",
        options: ["mustn't be", "must be", "can't to be", "should be"],
        answer: 1,
        explanation: "প্রমাণ থেকে নিশ্চিত অনুমান = must be; mustn't মানে নিষেধ।",
      },
      {
        question: "That ___ be the postman at this hour — the postman always comes after lunch.",
        options: ["should", "would", "can't", "must"],
        answer: 2,
        explanation: "অবিশ্বাস্য, অসম্ভব কিছুর জন্য can't be।",
      },
      {
        question: "Passengers ___ show their tickets before boarding the launch.",
        options: ["must to", "have to", "would rather", "am used to"],
        answer: 1,
        explanation: "বাইরের নিয়ম বোঝাতে have to — আর তালিকায় ব্যাকরণগতভাবে শুদ্ধও শুধু এটাই।",
      },
      {
        question: "You ___ eat so much junk food — it is bad for your stomach.",
        options: ["shouldn't", "don't have to", "mustn't to", "haven't to"],
        answer: 0,
        explanation: "কোনো কিছুর বিরুদ্ধে পরামর্শ = shouldn't; don't have to শুধু বাধ্যবাধকতা তুলে নেয়।",
      },
      {
        question: "Ma'am, ___ I use your charger for a minute?",
        options: ["May", "Must", "Should", "Would"],
        answer: 0,
        explanation: "ভদ্র অনুমতি চাওয়ার সবচেয়ে নিরাপদ রূপ May I।",
      },
    ],
  },
  {
    topic: "Phrasal Verbs",
    level: "intermediate",
    locale: "bn",
    title: "Phrasal Verb: pronoun-এর আসন আর রোজকার সেট",
    intro:
      "কথ্য ইংরেজির হৃৎস্পন্দন phrasal verb — আর ভুলের ঠিকানা প্রায়ই pronoun। Pick it up হয়, pick up it হয় না। চলুন separable আর inseparable-এর হিসাবটা একবারে চূড়ান্ত করি।",
    sections: [
      {
        heading: "Separable verb: pronoun বসে মাঝখানে",
        explanation:
          "Separable phrasal verb — turn on, pick up, put off, give up, turn down — এর সঙ্গে it, them, him-এর মতো ছোট কর্তা-কর্ম অবশ্যই ক্রিয়া আর particle-এর মাঝে বসে: turn it on। লম্বা noun-ফ্রেজ দুই পাশেই যেতে পারে: turn the fan on বা turn on the fan। কিন্তু turn on it সবসময় ভুল। বাংলায় অর্থটা আলাদা ক্রিয়ায় থাকে (তোলা, বন্ধ করা), তাই এই ভাঙা-জোড়ার হিসাব চর্চা করতে হয়।",
        examples: [
          {
            wrong: "It is too loud — please turn down it.",
            right: "It is too loud — please turn it down.",
            note: "pronoun কর্তা-কর্ম হলে separable verb দুই ভাগে ভাঙে।",
          },
          {
            wrong: "She picked up it from the floor and gave it back.",
            right: "She picked it up from the floor and gave it back.",
            note: "pick it up হয়, pick up it কখনো নয়।",
          },
          {
            wrong: "We put off it until after the exams.",
            right: "We put it off until after the exams.",
            note: "pronoun-এর আসন মাঝখানে: put it off।",
          },
        ],
      },
      {
        heading: "Inseparable ও তিন শব্দের verb: ভাঙা নিষেধ",
        explanation:
          "Inseparable verb ক্রিয়া-particle একসুতোয় বাঁধা থাকে: look after, run into, come across। তিন শব্দের verb-এর শেষে এমন preposition থাকে যেটা কখনো ছেড়ে যায় না: run out of, come up with, look forward to, catch up with। আর এক চমক — look forward to + -ing, কারণ এই to-টা preposition, infinitive-এর to নয়।",
        examples: [
          {
            wrong: "We ran out the cooking gas in the middle of dinner.",
            right: "We ran out of the cooking gas in the middle of dinner.",
            note: "run out of তার of কখনো ছাড়ে না।",
          },
          {
            wrong: "How did you come up this brilliant plan?",
            right: "How did you come up with this brilliant plan?",
            note: "come up with অখণ্ড থাকে; with ক্রিয়ারই অংশ।",
          },
          {
            wrong: "I look forward to hear from you soon.",
            right: "I look forward to hearing from you soon.",
            note: "এখানে to একটা preposition, তাই -ing ফর্ম বসে।",
          },
        ],
      },
      {
        heading: "যে সেট আসলেই প্রতিদিন লাগবে",
        explanation:
          "Get up (বিছানা ছাড়া), look after (দেখাশোনা করা), look for (খোঁজা), give up (হাল ছাড়া), find out (জেনে বেরোনো), turn up (হঠাৎ হাজির), put off (স্থগিত করা), turn down (প্রস্তাব ফেরানো)। তালিকা মুখস্থ করা শতটার চেয়ে কথায় স্বাভাবিকভাবে ব্যবহৃত দশটা বেশি কাজে দেয়।",
        examples: [
          {
            wrong: "I was looking after my keys all morning.",
            right: "I was looking for my keys all morning.",
            note: "look for = খোঁজা; look after = দেখাশোনা করা।",
          },
          {
            wrong: "My uncle gave up to smoke last Ramadan.",
            right: "My uncle gave up smoking last Ramadan.",
            note: "give up-এর পরে gerund বসে: smoking।",
          },
          {
            wrong: "Please put off the fan before you sleep.",
            right: "Please turn off the fan before you sleep.",
            note: "put off মানে পিছিয়ে দেওয়া; পাখি-বাতি বন্ধ করে turn off।",
          },
        ],
      },
    ],
    tips: [
      "Pronoun-নিয়ম: it, them, him separable verb-এর ভেতরে বসে — pick it up, put them on, turn it down।",
      "তিন শব্দের verb-কে অখণ্ড চাঙ্ক হিসেবে ধরুন: run out OF, come up WITH, look forward TO + -ing।",
      "প্রতিদিন নিজের জীবন নিয়ে একটা বাক্য বানান: I need to look after my health, I ran out of data।",
      "এক ক্রিয়া, ভিন্ন particle, ভিন্ন পৃথিবী: look after / look for / look up / look into।",
    ],
    quiz: [
      {
        question: "Your music is very loud — could you ___?",
        options: ["turn down it", "turn it down", "turn down them", "it turn down"],
        answer: 1,
        explanation: "pronoun কর্তা-কর্ম হলে separable verb ভেঙে যায়: turn it down।",
      },
      {
        question: "We have ___ sugar — could you buy some on your way home?",
        options: ["run out of", "run out", "ran out of", "running out"],
        answer: 0,
        explanation: "run out of-এর of থাকে, আর present perfect-এ participle run লাগে।",
      },
      {
        question: "I really look forward to ___ you at the reunion.",
        options: ["meet", "met", "meeting", "have met"],
        answer: 2,
        explanation: "look forward to-র to প্রি-পজিশন, তাই -ing ফর্ম বসে।",
      },
      {
        question: "Can you ___ my plants while I visit my village?",
        options: ["look for", "look after", "look up", "look into"],
        answer: 1,
        explanation: "দেখাশোনা করা = look after; look for মানে খোঁজা।",
      },
      {
        question: "The principal ___ our proposal at yesterday's meeting.",
        options: ["turned down it", "turn it down", "turned it down", "turning it down"],
        answer: 2,
        explanation: "turn down (ফেরানো) pronoun-এর আগে ভাঙে, আর yesterday-তে past রূপ turned।",
      },
    ],
  },
];

export default LESSONS;
