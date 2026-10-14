import type { BankLesson } from "./types";

// Static grammar bank — foundation topics, BEGINNER level (CEFR ~A2),
// Bengali explanations. English sentences stay English (that's what is
// being learned); every explanation/intro/tip/note is natural Bengali.
const LESSONS: BankLesson[] = [
  {
    topic: "Tense basics",
    level: "beginner",
    locale: "bn",
    title: "টেন্স: অতীত, বর্তমান, ভবিষ্যৎ",
    intro:
      "বাংলায় আমরা শুধু ক্রিয়ার শেষটা একটু বদলে সময় বোঝাই, কিন্তু ইংরেজিতে সময় বদলালে ক্রিয়ার রূপটাই বদলে যায়। Tense ধরতে পারলে আপনার প্রতিটি বাক্য একবারে শুদ্ধ শোনাবে।",
    sections: [
      {
        heading: "সময়ের তিনটি দরজা: past, present, future",
        explanation:
          "ইংরেজিতে মূল তিনটি সময় আছে — অতীত (past), বর্তমান (present) আর ভবিষ্যৎ (future)। অতীতের ঘটনায় ক্রিয়ার অতীত রূপ বসে, বর্তমান কালে he/she/it-এর পরে ক্রিয়ায় s যোগ হয়, আর ভবিষ্যতে ক্রিয়ার আগে will বসে। বেশিরভাগ ভুল হয় তখন, যখন এক সময়ের কথা বলে অন্য সময়ের ক্রিয়া বসিয়ে দেওয়া হয়।",
        examples: [
          {
            wrong: "Yesterday I go to market.",
            right: "Yesterday I went to the market.",
            note: "গতকাল অতীত সময়, তাই went বসবে, go নয়।",
          },
          {
            wrong: "She play cricket every Friday.",
            right: "She plays cricket every Friday.",
            note: "প্রতি শুক্রবার অর্থাৎ অভ্যাস — she-এর সাথে ক্রিয়ায় s বসে।",
          },
          {
            wrong: "I will went to Dhaka tomorrow.",
            right: "I will go to Dhaka tomorrow.",
            note: "will-এর পরে সবসময় ক্রিয়ার মূল রূপ থাকে।",
          },
        ],
      },
      {
        heading: "আভাস শব্দ দেখেই টেন্স চেনা",
        explanation:
          "yesterday, ago, last year শুনলে বুঝবেন কথাটা অতীতের; every day, usually, now মানে বর্তমান; আর tomorrow, next week মানে ভবিষ্যৎ। এই আভাস শব্দগুলো বাক্যের ভেতরে টেন্সের সঠিক চাবি হাতে ধরে দেয়। প্রথমে আভাসটা খুঁজুন, তারপর ক্রিয়া বসান — অল্পদিনেই এটা অভ্যাস হয়ে যাবে।",
        examples: [
          {
            wrong: "Two years ago she is a teacher.",
            right: "Two years ago she was a teacher.",
            note: "ago অতীতের আভাস দেয়, তাই was।",
          },
          {
            wrong: "Next month they came to our house.",
            right: "Next month they will come to our house.",
            note: "next month ভবিষ্যতের কথা বলছে, তাই will come।",
          },
          {
            wrong: "Every morning he drink tea.",
            right: "Every morning he drinks tea.",
            note: "প্রতিদিন সকালের অভ্যাস — he-এর সাথে drinks।",
          },
        ],
      },
    ],
    tips: [
      "বাক্য বানানোর আগে সময়ের আভাস শব্দটি খুঁজুন — সেটাই বলে দেবে কোন টেন্স লাগবে।",
      "কমন ক্রিয়ার অতীত রূপ জোড়ায় জোড়ায় মুখস্থ করুন: go-went, eat-ate, come-came, see-saw, take-took।",
      "he, she, it বা একজনের নামের পরে বর্তমান কালে ক্রিয়ায় s যোগ করুন।",
      "এক বাক্যে একটাই সময় রাখুন — গতকালের গল্পের সাথে tomorrow মেশাবেন না।",
    ],
    quiz: [
      {
        question: "She ___ rice every day.",
        options: ["cook", "cooks", "cooked", "cooking"],
        answer: 1,
        explanation: "প্রতিদিনের অভ্যাস এবং she কর্তা — তাই ক্রিয়ায় s বসে, cooks।",
      },
      {
        question: "Yesterday we ___ a movie.",
        options: ["watch", "watches", "watched", "will watch"],
        answer: 2,
        explanation: "yesterday অতীত সময়, তাই ক্রিয়ার অতীত রূপ watched।",
      },
      {
        question: "They ___ visit us next week.",
        options: ["will", "was", "are", "did"],
        answer: 0,
        explanation: "next week ভবিষ্যতের কথা — ভবিষ্যৎ কালে will বসে।",
      },
      {
        question: "He ___ his homework last night.",
        options: ["finish", "finishes", "will finish", "finished"],
        answer: 3,
        explanation: "last night অতীত সময় — তাই অতীত রূপ finished।",
      },
      {
        question: "My father ___ tea in the morning.",
        options: ["drink", "drinks", "drank", "drunk"],
        answer: 1,
        explanation: "প্রতিদিনের অভ্যাস আর একবচন কর্তা — তাই drinks।",
      },
    ],
  },
  {
    topic: "Present Perfect vs Past Simple",
    level: "beginner",
    locale: "bn",
    title: "Present Perfect নাকি Past Simple",
    intro:
      "কাজটা কি শুধু অতীতে হয়েছিল, নাকি তার ফল এখনও চলছে — এই পার্থক্যটাই ইংরেজির সবচেয়ে জরুরি সূক্ষ্মতা। দুটো টেন্সের খেলা বুঝলে আপনার কথায় নেটিভদের মতো স্বাভাবিকতা আসবে।",
    sections: [
      {
        heading: "Past Simple: বন্ধ হয়ে যাওয়া অতীত",
        explanation:
          "সময় স্পষ্টভাবে অতীত হলে — yesterday, last week, two days ago, in 2019 — past simple ব্যবহার করুন। এই কাজ পুরোপুরি শেষ, সময়ের দরজাটাও বন্ধ হয়ে গেছে। বাংলায় এর সাথে সবচেয়ে কাছের রূপ হলো করেছিলাম-জাতীয় অতীত কাল।",
        examples: [
          {
            wrong: "I have seen him yesterday.",
            right: "I saw him yesterday.",
            note: "yesterday থাকলে কখনো present perfect হয় না।",
          },
          {
            wrong: "She has visited London in 2019.",
            right: "She visited London in 2019.",
            note: "নির্দিষ্ট অতীত সাল থাকলে past simple হবে।",
          },
          {
            wrong: "We did not went there.",
            right: "We did not go there.",
            note: "did-এর পরে ক্রিয়ার মূল রূপ বসে, অতীত রূপ নয়।",
          },
        ],
      },
      {
        heading: "Present Perfect: ফলটা এখনও বেঁচে আছে",
        explanation:
          "have/has + ক্রিয়ার ৩য় রূপ ব্যবহার হয় যখন কাজের সঠিক সময় গুরুত্বপূর্ণ নয়, কিন্তু ফল এখনও প্রাসঙ্গিক — যেমন খেয়ে ফেলেছি তাই এখন ক্ষুধা নেই। ever, never, just, already, yet, so far জাতীয় শব্দ থাকলে প্রায়ই present perfect লাগে। সময় উল্লেখ না থাকলে নিরাপদ পথটাই present perfect।",
        examples: [
          {
            wrong: "Did you ever go to Cox's Bazar?",
            right: "Have you ever been to Cox's Bazar?",
            note: "জীবনে কখনো গিয়েছি কি না জিজ্ঞেস করতে ever-এর সাথে have been।",
          },
          {
            wrong: "He has went home.",
            right: "He has gone home.",
            note: "have/has-এর পরে ৩য় রূপ gone বসে, went নয়।",
          },
          {
            wrong: "I have finished my homework just now.",
            right: "I finished my homework just now.",
            note: "just now মানে এইমাত্র — নির্দিষ্ট অতীত সময়, তাই past simple।",
          },
        ],
      },
    ],
    tips: [
      "yesterday, last, ago, নির্দিষ্ট সাল দেখলে past simple; ever, never, just, already, yet দেখলে present perfect।",
      "মনে রাখুন: have/has + ক্রিয়ার ৩য় রূপ — gone, eaten, done, seen, taken।",
      "জীবনের অভিজ্ঞতা জানতে চাইলে Have you ever...? দিয়ে প্রশ্ন করুন।",
      "সন্দেহ হলে নিজেকে জিজ্ঞেস করুন: বাক্যে সময় বলা আছে কি? আছে হলে past simple-ই নিরাপদ।",
    ],
    quiz: [
      {
        question: "I ___ my keys. I can't open the door.",
        options: ["lose", "lost", "have lost", "am losing"],
        answer: 2,
        explanation: "চাবি হারানোর ফল এখনও চলছে — তাই present perfect: have lost।",
      },
      {
        question: "She ___ to Dubai last winter.",
        options: ["has gone", "went", "goes", "has been"],
        answer: 1,
        explanation: "last winter নির্দিষ্ট অতীত সময়, তাই past simple: went।",
      },
      {
        question: "Have you ever ___ biryani?",
        options: ["eat", "ate", "eating", "eaten"],
        answer: 3,
        explanation: "have-এর পরে ক্রিয়ার ৩য় রূপ eaten বসে।",
      },
      {
        question: "We ___ each other in 2015.",
        options: ["met", "meet", "are meeting", "will meet"],
        answer: 0,
        explanation: "in 2015 নির্দিষ্ট অতীত সময় — তাই past simple: met।",
      },
      {
        question: "They ___ finished the project yet.",
        options: ["did not", "have not", "has not", "do not"],
        answer: 1,
        explanation: "yet-এর সাথে present perfect negative হয় — they-এর জন্য have not।",
      },
    ],
  },
  {
    topic: "Articles (a/an/the)",
    level: "beginner",
    locale: "bn",
    title: "আর্টিকেল: a, an, the",
    intro:
      "বাংলায় একটা বা টা শব্দটা মাঝে মাঝে বাদ পড়লেও ক্ষতি নেই, কিন্তু ইংরেজিতে a, an, the ছাড়া বাক্য অসম্পূর্ণ শোনায়। ছোট্ট এই তিনটি শব্দই আপনার ইংরেজির প্রথম ছাপ।",
    sections: [
      {
        heading: "a নাকি an — বানান নয়, উচ্চারণ দেখুন",
        explanation:
          "প্রথমবার কোনো গোনাযোগ্য একক জিনিসের কথা বললে a বা an বসে। যে শব্দের উচ্চারণ স্বরধ্বনি দিয়ে শুরু হয় সেখানে an, বাকি সব জায়গায় a। বানান নয়, উচ্চারণ দেখতে হবে — তাই a university (উচ্চারণ ইউ দিয়ে শুরু) হয়, কিন্তু an hour (h নীরব)।",
        examples: [
          {
            wrong: "He is a honest man.",
            right: "He is an honest man.",
            note: "honest-এ h নীরব, উচ্চারণ স্বরধ্বনিতে শুরু — তাই an।",
          },
          {
            wrong: "I saw a elephant at the zoo.",
            right: "I saw an elephant at the zoo.",
            note: "elephant স্বরধ্বনি দিয়ে শুরু হয়, তাই an।",
          },
          {
            wrong: "She studies in an university in Dhaka.",
            right: "She studies in a university in Dhaka.",
            note: "university-র উচ্চারণ ইউ দিয়ে শুরু — স্বরধ্বনি নয়, তাই a।",
          },
        ],
      },
      {
        heading: "the — যখন কথাটা নির্দিষ্ট",
        explanation:
          "কোনো জিনিস দ্বিতীয়বার উল্লেখ হলে বা দুজনেরই জানা হলে the বসে। পৃথিবীতে একটাই থাকা জিনিসের আগেও the হয় — the sun, the moon, the sky। আর সাধারণ অর্থে ব্যবহৃত plural বা অগণনযোগ্য জিনিসের (water, rice, milk) আগে কোনো আর্টিকেলই লাগে না।",
        examples: [
          {
            wrong: "I bought a shirt. A shirt is blue.",
            right: "I bought a shirt. The shirt is blue.",
            note: "শার্টটা দ্বিতীয়বার এলো — এখন নির্দিষ্ট, তাই the shirt।",
          },
          {
            wrong: "The rice grows in many countries.",
            right: "Rice grows in many countries.",
            note: "সাধারণ অর্থে অগণনযোগ্য rice-এর আগে আর্টিকেল লাগে না।",
          },
          {
            wrong: "Sun rises in the east.",
            right: "The sun rises in the east.",
            note: "সূর্য একটাই — এমন জিনিসের আগে সবসময় the।",
          },
        ],
      },
    ],
    tips: [
      "প্রথমবার a/an, দ্বিতীয়বার the — এই ছন্দটা মুখস্থ করে ফেলুন।",
      "বানান নয়, উচ্চারণ শুনুন: an hour, a university, an MBA।",
      "সাধারণ পছন্দ-অপছন্দ বলার সময় plural noun-এ আর্টিকেল লাগে না: I like mangoes।",
      "বাংলার টা/টি মনে পড়লে the, আর একটা মনে পড়লে a/an — এভাবে চেক করুন।",
    ],
    quiz: [
      {
        question: "She is ___ engineer.",
        options: ["an", "a", "the", "one"],
        answer: 0,
        explanation: "engineer-এর উচ্চারণ স্বরধ্বনি দিয়ে শুরু, তাই an।",
      },
      {
        question: "___ sun rises in the east.",
        options: ["A", "An", "The", "One"],
        answer: 2,
        explanation: "সূর্য পৃথিবীতে একটাই — এমন জিনিসের আগে the বসে।",
      },
      {
        question: "He is ___ honest man.",
        options: ["a", "an", "the", "his"],
        answer: 1,
        explanation: "honest-এ h নীরব, উচ্চারণ স্বরধ্বনিতে শুরু — তাই an।",
      },
      {
        question: "I bought a book. ___ book is about birds.",
        options: ["A", "An", "The", "One"],
        answer: 2,
        explanation: "আগের বাক্যের বইটাই দ্বিতীয়বার এলো — নির্দিষ্ট, তাই the।",
      },
      {
        question: "They play ___ football every evening.",
        options: ["a", "an", "the", "no article"],
        answer: 3,
        explanation: "খেলার নামের আগে কোনো আর্টিকেল বসে না।",
      },
    ],
  },
  {
    topic: "Prepositions (in/on/at)",
    level: "beginner",
    locale: "bn",
    title: "প্রিপোজিশন: in, on, at",
    intro:
      "ঢাকায়, টেবিলে, সকাল ৯টায় — বাংলায় এক প্রত্যয়ে হয়ে যায়, কিন্তু ইংরেজিতে in, on, at আলাদা কাজ করে। এই তিনটা ঠিক করলেই আপনার বেশিরভাগ প্রিপোজিশন-ভুল চলে যাবে।",
    sections: [
      {
        heading: "স্থানে: ভেতরে in, পৃষ্ঠে on, বিন্দুতে at",
        explanation:
          "in ব্যবহার হয় বড় বা আবদ্ধ জায়গায় — in Dhaka, in the room, in a car। on বসে পৃষ্ঠের ওপর বা লেগে থাকা কিছুতে — on the table, on the wall, on the bus। at বসে নির্দিষ্ট পয়েন্টে — at the door, at the bus stop, at home। ভাবুন: জায়গাটা চারপাশে ঘেরা (in), ওপরে লাগানো (on), নাকি শুধু একটা বিন্দু (at)।",
        examples: [
          {
            wrong: "I live on Dhaka.",
            right: "I live in Dhaka.",
            note: "শহরের ভেতরে বাস — বড় জায়গা, তাই in।",
          },
          {
            wrong: "The book is at the table.",
            right: "The book is on the table.",
            note: "টেবিলের পৃষ্ঠের ওপর — on।",
          },
          {
            wrong: "She is waiting in the bus stop.",
            right: "She is waiting at the bus stop.",
            note: "bus stop একটি নির্দিষ্ট বিন্দু — তাই at।",
          },
        ],
      },
      {
        heading: "সময়ে: বড় সময়ে in, দিন-তারিখে on, ঘড়ায় at",
        explanation:
          "সময়ের ক্ষেত্রেও একই ধারণা চলে: in বড় সময়ের জন্য — in 2024, in June, in the morning। on নির্দিষ্ট দিন ও তারিখে — on Monday, on 26 March, on Friday morning। at ঘড়ার সময় ও বিশেষ সময়ে — at 7 o'clock, at night, at noon। মাথায় রাখুন: in the morning কিন্তু at night — এই জোড়াটা ব্যতিক্রম।",
        examples: [
          {
            wrong: "My exam is on March.",
            right: "My exam is in March.",
            note: "মাস বড় সময়ের অংশ — মাসের আগে in।",
          },
          {
            wrong: "We met in Monday.",
            right: "We met on Monday.",
            note: "নির্দিষ্ট দিনের আগে on বসে।",
          },
          {
            wrong: "The class starts in 9 a.m.",
            right: "The class starts at 9 a.m.",
            note: "ঘড়ার নির্দিষ্ট সময় — তাই at।",
          },
        ],
      },
    ],
    tips: [
      "স্থানের ধাপ মনে রাখুন: in (ভেতরে) → on (ওপরে) → at (বিন্দু)।",
      "সময়ের সূত্র: in (মাস-বছর), on (দিন-তারিখ), at (ঘড়ার সময়)।",
      "ব্যতিক্রমগুলো জোড়ায় মুখস্থ করুন: at night, at home, at school, on foot।",
      "বাংলার এ-য় প্রত্যয় শুনলে যত টানলেও হবে না — আগে ভাবুন কথাটা স্থান না সময়, তারপর in/on/at মেলান।",
    ],
    quiz: [
      {
        question: "I was born ___ 2005.",
        options: ["at", "on", "in", "by"],
        answer: 2,
        explanation: "বছর বড় সময়ের অংশ — বছরের আগে in বসে।",
      },
      {
        question: "The cup is ___ the table.",
        options: ["in", "on", "at", "to"],
        answer: 1,
        explanation: "টেবিলের পৃষ্ঠের ওপর — on।",
      },
      {
        question: "We will meet ___ Sunday.",
        options: ["in", "at", "by", "on"],
        answer: 3,
        explanation: "নির্দিষ্ট দিনের আগে on বসে।",
      },
      {
        question: "She always sleeps ___ 10 p.m.",
        options: ["at", "on", "in", "from"],
        answer: 0,
        explanation: "ঘড়ার নির্দিষ্ট সময়ের আগে at বসে।",
      },
      {
        question: "My mother is ___ the kitchen.",
        options: ["on", "at", "in", "by"],
        answer: 2,
        explanation: "রান্নাঘরের ভেতরে — in।",
      },
    ],
  },
  {
    topic: "Subject-Verb Agreement",
    level: "beginner",
    locale: "bn",
    title: "Subject-Verb Agreement: কর্তা অনুযায়ী ক্রিয়া",
    intro:
      "বাংলায় কর্তা বদলালেও ক্রিয়া প্রায় একই থাকে, কিন্তু ইংরেজিতে কর্তা অনুযায়ী ক্রিয়ার রূপও বদলাতে হয়। এই নিয়মটা পরিষ্কার হলে ছোট-বড় সব বাক্যে আপনার ভিত মজবুত হবে।",
    sections: [
      {
        heading: "একবচন তৃতীয় পুরুষে ক্রিয়ায় s",
        explanation:
          "he, she, it বা যেকোনো এক জন/একটা জিনিসের পরে বর্তমান কালে ক্রিয়ায় s/es বসে: he plays, she writes, it rains। কিন্তু I, you, we, they-এর পরে s বসে না: they play, you write। উল্টো ধরবেন না — plural কর্তা (two boys) থাকলে ক্রিয়ায় s বসে না, ক্রিয়া সাধারণ রূপে থাকে।",
        examples: [
          {
            wrong: "My brother work in a bank.",
            right: "My brother works in a bank.",
            note: "my brother মানে একজন = he — তাই works।",
          },
          {
            wrong: "The boys plays football.",
            right: "The boys play football.",
            note: "boys plural কর্তা — plural-এ ক্রিয়ায় s বসে না।",
          },
          {
            wrong: "Rahim and Karim goes to the same school.",
            right: "Rahim and Karim go to the same school.",
            note: "দুজন মানেই they — তাই go।",
          },
        ],
      },
      {
        heading: "মাঝখানে ফাঁদ: আসল কর্তাকে খুঁজুন",
        explanation:
          "কর্তা আর ক্রিয়ার মাঝে অন্য নাম থাকলে অনেকে সেই শব্দটাকে কর্তা ভেবে ভুল করেন। যেমন — The box of chocolates is on the table বাক্যে আসল কর্তা box, chocolates নয়। আর each, every, everyone, nobody-র পরে সবসময় একবচন ক্রিয়া বসে, অর্থ যত বড়ই হোক।",
        examples: [
          {
            wrong: "The list of items are on the desk.",
            right: "The list of items is on the desk.",
            note: "আসল কর্তা list (একটি) — of items শুধু বর্ণনা, তাই is।",
          },
          {
            wrong: "Everybody in the class have finished.",
            right: "Everybody in the class has finished.",
            note: "everyone/everybody সবসময় একবচন — তাই has।",
          },
          {
            wrong: "Neither of the answers are correct.",
            right: "Neither of the answers is correct.",
            note: "neither মানে কোনোটাই নয় — একবচন, তাই is।",
          },
        ],
      },
    ],
    tips: [
      "বাক্য লেখার আগে কর্তাটি বের করুন — একজন নাকি একাধিক? তারপর ক্রিয়া মেলান।",
      "আসল কর্তা আর ক্রিয়ার মাঝের of... বাক্যাংশটা চোখ বন্ধ করে বাদ দিয়ে পড়ুন — নিয়ম পরিষ্কার হয়ে যাবে।",
      "everyone, each, every, nobody দেখলেই একবচন ক্রিয়া বসান।",
      "নিজের লেখায় he/she/it আছে কি না চেক করুন — আছে হলে ক্রিয়ায় s-ও আছে কি না দেখুন।",
    ],
    quiz: [
      {
        question: "The dog ___ at strangers.",
        options: ["bark", "barks", "barked", "barking"],
        answer: 1,
        explanation: "the dog একটি মাত্র — একবচন কর্তায় বর্তমান কালে ক্রিয়ায় s বসে।",
      },
      {
        question: "My friends ___ coming tonight.",
        options: ["is", "was", "are", "have"],
        answer: 2,
        explanation: "friends plural কর্তা — তাই are।",
      },
      {
        question: "The color of these roses ___ beautiful.",
        options: ["is", "are", "were", "have"],
        answer: 0,
        explanation: "আসল কর্তা color (একটি) — of these roses শুধু বর্ণনা, তাই is।",
      },
      {
        question: "Everyone ___ a phone nowadays.",
        options: ["have", "are", "were", "has"],
        answer: 3,
        explanation: "everyone সবসময় একবচন — তাই has।",
      },
      {
        question: "I ___ my homework after dinner.",
        options: ["does", "do", "is doing", "done"],
        answer: 1,
        explanation: "I-এর সাথে ক্রিয়ায় s বসে না — তাই do।",
      },
    ],
  },
  {
    topic: "Question Formation",
    level: "beginner",
    locale: "bn",
    title: "প্রশ্ন বানানোর নিয়ম: do, does, did ও wh-words",
    intro:
      "বাংলায় গলার সুর তুললেই বাক্য প্রশ্ন হয়ে যায়, কিন্তু ইংরেজিতে শব্দের ক্রম আসলেই বদলাতে হয়। প্রশ্ন ঠিকঠাক করতে পারলে কথোপকথনের দরজা খুলে যায়।",
    sections: [
      {
        heading: "Yes/No প্রশ্নে do/does/did সামনে",
        explanation:
          "yes/no প্রশ্নে do/does/did বাক্যের শুরুতে বসে: Do you like tea? Does she work here? Did they come? কর্তা I/you/we/they-এর সাথে do, আর he/she/it-এর সাথে does। সবচেয়ে জরুরি — does বা did বসলেই মূল ক্রিয়া আবার মূল রূপে ফিরে যায়।",
        examples: [
          {
            wrong: "Does she works here?",
            right: "Does she work here?",
            note: "does বসলেই ক্রিয়া মূল রূপে — work।",
          },
          {
            wrong: "Do he know you?",
            right: "Does he know you?",
            note: "he-এর সাথে do নয়, does।",
          },
          {
            wrong: "Did you went there?",
            right: "Did you go there?",
            note: "did-এর পরে অতীত রূপ নয়, মূল রূপ go।",
          },
        ],
      },
      {
        heading: "Wh-প্রশ্ন: wh-word + do/does/did + কর্তা",
        explanation:
          "wh-প্রশ্নের ক্রম হলো — wh-word, তারপর do/does/did, তারপর কর্তা, তারপর ক্রিয়া। যেমন: Where do you live? When did he arrive? আর am/is/are/was/were থাকলে অতিরিক্ত do লাগে না, শুধু কর্তাকে be-ক্রিয়ার পরে বসিয়ে দিন — Is he happy? Where are you?",
        examples: [
          {
            wrong: "Where you live?",
            right: "Where do you live?",
            note: "wh-প্রশ্নে wh-word-এর পরে do, তারপর কর্তা।",
          },
          {
            wrong: "What she is doing?",
            right: "What is she doing?",
            note: "be-ক্রিয়ার প্রশ্নে কর্তা be-এর পরে বসে।",
          },
          {
            wrong: "Why did he left?",
            right: "Why did he leave?",
            note: "did-এর পরে ক্রিয়ার মূল রূপ leave।",
          },
        ],
      },
    ],
    tips: [
      "প্রশ্নের সূত্র লিখে রাখুন: [wh-word] + [do/does/did] + [কর্তা] + [ক্রিয়া]।",
      "does বা did দেখলেই মূল ক্রিয়াকে মূল রূপে ফিরিয়ে দিন — works হবে work, went হবে go।",
      "am/is/are/was/were থাকলে do-এর দরকার নেই — শুধু কর্তার সাথে অদল-বদল করুন।",
      "প্রতিদিন অন্তত একটা ইংরেজি প্রশ্ন মুখে বলুন — প্রশ্ন করাটাই সবচেয়ে ভালো অভ্যাস।",
    ],
    quiz: [
      {
        question: "___ you like mango juice?",
        options: ["Does", "Are", "Do", "Is"],
        answer: 2,
        explanation: "you-এর সাথে প্রশ্নে do বসে — Do you...?",
      },
      {
        question: "Where ___ she study?",
        options: ["do", "does", "is", "did"],
        answer: 1,
        explanation: "she-এর সাথে does বসে — Where does she study?",
      },
      {
        question: "What ___ you do yesterday?",
        options: ["do", "does", "did", "are"],
        answer: 2,
        explanation: "yesterday অতীত সময়, তাই প্রশ্নে did।",
      },
      {
        question: "Is ___ coming to the party?",
        options: ["he", "he is", "does he", "he does"],
        answer: 0,
        explanation: "be-ক্রিয়ার প্রশ্নে কর্তা is-এর পরে আসে।",
      },
      {
        question: "Why ___ she call you last night?",
        options: ["does", "did", "do", "was"],
        answer: 1,
        explanation: "last night অতীত — প্রশ্নে did আর ক্রিয়া মূল রূপে call।",
      },
    ],
  },
  {
    topic: "Conditionals",
    level: "beginner",
    locale: "bn",
    title: "কন্ডিশনাল: যদি-তাহলের বাক্য",
    intro:
      "যদি বৃষ্টি হয়, আমি বাড়ি থাকব — এমন শর্তের বাক্য প্রতিদিন কাজে লাগে। ইংরেজিতে if-বাক্যের দুই অংশের টেন্স মেলানোটাই এখানকার মূল শিল্প।",
    sections: [
      {
        heading: "বাস্তব শর্ত: if + present, ... will",
        explanation:
          "যে শর্ত বাস্তবে ঘটতে পারে, সেখানে if-অংশে বর্তমান কাল, ফলাফলের অংশে will + ক্রিয়া: If it rains, I will stay home। মনে রাখুন — if-এর পরে will আসবে না, বাংলায় যদি হবে মনে হলেও না। দুই অংশ অদল-বদল করলেও অর্থ একই, শুধু কমা বাদ যায়: I will stay home if it rains।",
        examples: [
          {
            wrong: "If it will rain, I will stay home.",
            right: "If it rains, I will stay home.",
            note: "if-অংশে বর্তমান কাল — it rains।",
          },
          {
            wrong: "If you study hard, you will passed.",
            right: "If you study hard, you will pass.",
            note: "will-এর পরে ক্রিয়ার মূল রূপ pass।",
          },
          {
            wrong: "If he will call, I will answer.",
            right: "If he calls, I will answer.",
            note: "if-এর সাথে সাধারণ বর্তমান কালই চলে।",
          },
        ],
      },
      {
        heading: "কল্পনার শর্ত: if + past, ... would",
        explanation:
          "যে শর্ত বাস্তবে নয় বা কল্পনার — সেখানে if-অংশে অতীত রূপ, ফলে would + ক্রিয়া: If I had a car, I would drive to Sylhet (কিন্তু গাড়ি নেই)। অতীত রূপ থাকলেও অর্থ কিন্তু বর্তমানের — ইংরেজির সুন্দর ব্যতিক্রম এটা। আর If I were you-তে I-এর সাথেও were বসে, was নয়।",
        examples: [
          {
            wrong: "If I was rich, I would travel the world.",
            right: "If I were rich, I would travel the world.",
            note: "কল্পনার শর্তে I-এর সাথেও were বসে।",
          },
          {
            wrong: "If I have wings, I would fly.",
            right: "If I had wings, I would fly.",
            note: "কল্পনার বাক্যে if-অংশে অতীত রূপ had।",
          },
          {
            wrong: "If she would come, I would tell her.",
            right: "If she came, I would tell her.",
            note: "would if-অংশে বসে না, ফলাফলের অংশে বসে।",
          },
        ],
      },
    ],
    tips: [
      "দুটো সূত্র মুখস্থ করুন: বাস্তব = if + present, will; কল্পনা = if + past, would।",
      "if-এর ঠিক পরে will/would কখনো বসবে না — এটাই সবচেয়ে কমন ভুল।",
      "তোমার জায়গায় আমি হলে বলতে চাইলে বলুন If I were you... — এটা বহুল ব্যবহৃত বাক্য।",
      "নিজের জীবনের তিনটা শর্ত লিখুন — একটা বাস্তব, একটা কল্পনা, আরেকটা ভবিষ্যৎ পরিকল্পনা।",
    ],
    quiz: [
      {
        question: "If it ___ tomorrow, we will cancel the picnic.",
        options: ["rains", "will rain", "rained", "would rain"],
        answer: 0,
        explanation: "বাস্তব শর্তে if-এর পরে বর্তমান কাল — rains।",
      },
      {
        question: "If I ___ you, I would apologize.",
        options: ["am", "was", "were", "will be"],
        answer: 2,
        explanation: "কল্পনার শর্তে I-এর সাথেও were বসে — If I were you।",
      },
      {
        question: "If she had more time, she ___ learn cooking.",
        options: ["will", "does", "can", "would"],
        answer: 3,
        explanation: "কল্পনার শর্তের ফলাফলে would + ক্রিয়ার মূল রূপ।",
      },
      {
        question: "If they ___ the bus, they will be late.",
        options: ["will miss", "missed", "miss", "would miss"],
        answer: 2,
        explanation: "if-অংশে বর্তমান কাল — miss।",
      },
      {
        question: "If I had a bike, I ___ ride to school.",
        options: ["will", "would", "can", "am"],
        answer: 1,
        explanation: "কল্পনার শর্তের ফলাফল — would ride।",
      },
    ],
  },
  {
    topic: "Passive Voice",
    level: "beginner",
    locale: "bn",
    title: "Passive Voice: কাজের ওপর জোর",
    intro:
      "কে করেছে তা না বলে বা বলার দরকার না থাকলে ইংরেজিতে কাজের দিকে জোর দিতে passive voice ব্যবহার হয়। সংবাদ, নিয়ম-কানুন আর পরীক্ষার হলে এটা সবসময় দরকার।",
    sections: [
      {
        heading: "সূত্র: be + ক্রিয়ার ৩য় রূপ",
        explanation:
          "passive বানাতে হয় be-ক্রিয়ার (is/are/was/were/been) সাথে ক্রিয়ার past participle বা ৩য় রূপ: The letter is written। কে করেছে বলতে চাইলে শেষে by বসে: The letter is written by Rahim। বাংলার হয়/হয়েছে শুনলেই passive মনে করুন, কিন্তু be + ৩য় রূপ সূত্রটা না মানলে বাক্য ভেঙে যায়।",
        examples: [
          {
            wrong: "The rice is cook by my mother.",
            right: "The rice is cooked by my mother.",
            note: "passive-এ ক্রিয়ার ৩য় রূপ cooked বসে।",
          },
          {
            wrong: "The homework was gave to the teacher.",
            right: "The homework was given to the teacher.",
            note: "give-এর ৩য় রূপ given, gave নয়।",
          },
          {
            wrong: "This road repair every year.",
            right: "This road is repaired every year.",
            note: "be-ক্রিয়া বাদ পড়েছে — passive-এ is repaired লাগবেই।",
          },
        ],
      },
      {
        heading: "কখন passive, কখন active",
        explanation:
          "কে করেছে তা অজানা বা গুরুত্বহীন হলে passive স্বাভাবিক — My bag was stolen (চোর কে, জানি না)। নিয়ম, সংবাদ ও প্রক্রিয়া বর্ণনায়ও passive চলে: English is spoken all over the world। তবে কে করেছে জানানো দরকার হলে active-ই সহজ ও স্বাভাবিক — সব বাক্য passive করবেন না।",
        examples: [
          {
            wrong: "My phone stolen yesterday.",
            right: "My phone was stolen yesterday.",
            note: "কে চুরি করেছে জানা নেই — তাই passive: was stolen।",
          },
          {
            wrong: "The room was cleaned yesterday by he.",
            right: "The room was cleaned yesterday by him.",
            note: "by-এর পরে object রূপের সর্বনাম বসে — him।",
          },
          {
            wrong: "English speaks all over the world.",
            right: "English is spoken all over the world.",
            note: "কে বলে তা গুরুত্বপূর্ণ নয় — তাই is spoken।",
          },
        ],
      },
    ],
    tips: [
      "সূত্র লিখে ফেলুন: am/is/are/was/were + ৩য় রূপ — passive-এর হৃদয় এটাই।",
      "অনিয়মিত ৩য় রূপ মুখস্থ করুন: give-given, write-written, take-taken, break-broken।",
      "কে করেছে বলতে চাইলে শেষে by + কর্তা বসান: by the teacher, by my friend।",
      "বাংলায় করা হয়েছে বা হবে শুনলেই passive ভাবুন, তারপর সূত্রটা মেলান।",
    ],
    quiz: [
      {
        question: "The cake ___ by my sister.",
        options: ["bake", "is baked", "baked", "is baking"],
        answer: 1,
        explanation: "passive-এ be + ৩য় রূপ — is baked।",
      },
      {
        question: "The window ___ by the ball.",
        options: ["break", "broke", "was breaking", "was broken"],
        answer: 3,
        explanation: "কর্তা window নিজে কিছু করে না — passive: was broken।",
      },
      {
        question: "This temple ___ in 1850.",
        options: ["was built", "built", "is built", "was build"],
        answer: 0,
        explanation: "অতীতে নির্মিত — was + built (৩য় রূপ)।",
      },
      {
        question: "English ___ in many countries.",
        options: ["speak", "speaks", "is spoken", "speaking"],
        answer: 2,
        explanation: "কে বলে তা গুরুত্বপূর্ণ নয় — passive: is spoken।",
      },
      {
        question: "The letters ___ tomorrow.",
        options: ["will send", "will be sent", "will sent", "are sent"],
        answer: 1,
        explanation: "ভবিষ্যতের passive — will be + sent।",
      },
    ],
  },
  {
    topic: "Modals (can/should/must)",
    level: "beginner",
    locale: "bn",
    title: "মোডাল ভার্ব: can, should, must",
    intro:
      "অনুমতি চাওয়া, পরামর্শ দেওয়া, জরুরি কথা বলা — এই তিন কাজেই can, should, must প্রতিদিন লাগে। মোডাল আয়ত্তে থাকলে ভদ্র আর স্পষ্ট — দুটোই বলতে পারবেন।",
    sections: [
      {
        heading: "মোডালের পরে শুধুই ক্রিয়ার মূল রূপ",
        explanation:
          "মোডাল (can, could, should, must, will, may) ব্যবহারের পরে ক্রিয়া কখনো s নেয় না, to-ও বসে না, -ing-ও হয় না: He can swim, You must go। এটাই মোডালের সবচেয়ে কমন ভুল — can plays বা must to go জাতীয় রূপ ইংরেজিতে নেই। মোডাল বসলেই ক্রিয়া থাকবে একেবারে জন্মগত রূপে।",
        examples: [
          {
            wrong: "She can plays the guitar.",
            right: "She can play the guitar.",
            note: "can-এর পরে s ছাড়া মূল রূপ — play।",
          },
          {
            wrong: "You must to finish it now.",
            right: "You must finish it now.",
            note: "মোডালের পরে to বসে না।",
          },
          {
            wrong: "Can you helping me?",
            right: "Can you help me?",
            note: "can-এর পরে -ing নয়, মূল রূপ help।",
          },
        ],
      },
      {
        heading: "কখন can, কখন should, কখন must",
        explanation:
          "সক্ষমতা বা অনুমতি বোঝাতে can — I can drive, Can I leave early? পরামর্শ বা উচিত-অউচিত বোঝাতে should — You should sleep early। কঠোর নিয়ম বা বাধ্যবাধকতার জন্য must — Students must wear uniforms। কথা নরম করতে Could you...? দিয়ে শুরু করুন — ইংরেজিতে ভদ্রতা আসে শব্দ বেছে বলা থেকে।",
        examples: [
          {
            wrong: "You should to see a doctor.",
            right: "You should see a doctor.",
            note: "should-এর পরে to নেই, সরাসরি মূল রূপ।",
          },
          {
            wrong: "Students musts wear uniforms.",
            right: "Students must wear uniforms.",
            note: "মোডাল কখনো s নেয় না — must wear।",
          },
          {
            wrong: "I can to swim very well.",
            right: "I can swim very well.",
            note: "can + to ভুল — can swim বলুন।",
          },
        ],
      },
    ],
    tips: [
      "সূত্র মনে রাখুন: মোডাল + ক্রিয়ার মূল রূপ — to, s, -ing কিছুই বসবে না।",
      "অনুমতি ভদ্রভাবে চাইতে Could I...? বা May I...? বলুন — can-এর চেয়ে নরম শোনায়।",
      "পরামর্শ দিতে You should... বলুন — এটা আদেশ নয়, পরামর্শ শোনায়।",
      "must শুধু জরুরি নিয়মের জন্য রাখুন; সাধারণ কথায় must বললে কথা কড়া শোনায়।",
    ],
    quiz: [
      {
        question: "She ___ speak three languages.",
        options: ["can", "cans", "can to", "is can"],
        answer: 0,
        explanation: "সক্ষমতা বোঝাতে can + ক্রিয়ার মূল রূপ।",
      },
      {
        question: "You look tired. You ___ rest now.",
        options: ["must to", "should", "shoulds", "are should"],
        answer: 1,
        explanation: "পরামর্শ বোঝাতে should + মূল রূপ।",
      },
      {
        question: "Passengers ___ wear seatbelts. It is the rule.",
        options: ["can", "may", "must", "could"],
        answer: 2,
        explanation: "কঠোর নিয়ম বোঝাতে must হয়।",
      },
      {
        question: "Can you ___ me carry this bag?",
        options: ["helping", "to help", "help", "helps"],
        answer: 2,
        explanation: "can-এর পরে ক্রিয়ার মূল রূপ help বসে।",
      },
      {
        question: "He ___ swim when he was five.",
        options: ["can", "could", "should", "must"],
        answer: 1,
        explanation: "অতীতের সক্ষমতা বোঝাতে could হয়।",
      },
    ],
  },
  {
    topic: "Phrasal Verbs",
    level: "beginner",
    locale: "bn",
    title: "ফ্রেজাল ভার্ব: দুই শব্দের ক্রিয়া",
    intro:
      "get up, turn on, look for — একটা ক্রিয়ার সাথে ছোট শব্দ বসলেই অর্থ একদম বদলে যায়। প্রতিদিনের ইংরেজি কথাবার্তার বড় একটা অংশই ফ্রেজাল ভার্ব, তাই এগুলো ছাড়া কথা চলে না।",
    sections: [
      {
        heading: "অর্থ বদলে যায় — জোড়ায় জোড়ায় মুখস্থ করুন",
        explanation:
          "ফ্রেজাল ভার্ব মানে ক্রিয়া + ছোট শব্দ (up, on, off, out, for, after)। look মানে দেখা, কিন্তু look after মানে দেখভাল করা আর look for মানে খোঁজা — অর্থ পুরো জোড়াটার সাথে জড়িয়ে থাকে। তাই প্রতিটা জোড়া আলাদা শব্দের মতো মুখস্থ করুন, একক ক্রিয়ার অর্থ টেনে অনুমান করবেন না।",
        examples: [
          {
            wrong: "I am looking after my keys.",
            right: "I am looking for my keys.",
            note: "খোঁজা মানে look for; look after মানে দেখভাল করা।",
          },
          {
            wrong: "It is hot, so please turn off the fan.",
            right: "It is hot, so please turn on the fan.",
            note: "চালু করা মানে turn on; turn off মানে বন্ধ করা।",
          },
          {
            wrong: "She got up the bus at the stop.",
            right: "She got on the bus at the stop.",
            note: "যানবাহনে ওঠা মানে get on; get up মানে ঘুম থেকে ওঠা।",
          },
        ],
      },
      {
        heading: "সর্বনাম হলে বসবে মাঝখানে",
        explanation:
          "অনেক ফ্রেজাল ভার্ব ভেঙে যায় — কাজের জিনিসটা মাঝে বসে: turn on the light বা turn the light on, দুটোই ঠিক। তবে জিনিসটা যদি সর্বনাম হয় (it, them), তাহলে অবশ্যই মাঝখানে বসবে — turn it on ঠিক, turn on it ভুল। এই ছোট নিয়মটাই কথাকে নেটিভদের মতো স্বাভাবিক শোনায়।",
        examples: [
          {
            wrong: "Please put on it.",
            right: "Please put it on.",
            note: "সর্বনাম it সবসময় মাঝে বসে — put it on।",
          },
          {
            wrong: "He turned on them one by one.",
            right: "He turned them on one by one.",
            note: "them-এর ক্ষেত্রেও একই নিয়ম — turned them on।",
          },
          {
            wrong: "I can't figure out it.",
            right: "I can't figure it out.",
            note: "figure out মানে বুঝতে পারা — সর্বনাম মাঝে বসে: figure it out।",
          },
        ],
      },
    ],
    tips: [
      "প্রতিদিন ৩টা করে নতুন ফ্রেজাল ভার্ব মুখস্থ করুন — get up, wake up, sit down দিয়ে শুরু করুন।",
      "অর্থ অনুমান করবেন না — look মানে দেখা, কিন্তু look for মানে খোঁজা; পুরো জোড়াটাই শব্দ।",
      "it বা them-এর কথা বললে সেটা মাঝখানে বসান: turn it off, pick them up।",
      "নিজের দিনের কাজগুলো ফ্রেজাল ভার্ব দিয়ে বলুন: I get up at six, I put on my shirt — দুদিনেই মুখস্থ হয়ে যাবে।",
    ],
    quiz: [
      {
        question: "Please ___ the music. I am sleeping.",
        options: ["turn off", "turn on", "turn up", "put on"],
        answer: 0,
        explanation: "ঘুমানোর সময় মিউজিক বন্ধ করা — turn off।",
      },
      {
        question: "I can't find my glasses. I am ___ them.",
        options: ["looking after", "looking at", "looking for", "looking up"],
        answer: 2,
        explanation: "হারানো জিনিস খোঁজা মানে look for।",
      },
      {
        question: "She ___ early every morning.",
        options: ["gets on", "gets off", "gets in", "gets up"],
        answer: 3,
        explanation: "ঘুম থেকে ওঠা মানে get up।",
      },
      {
        question: "The plane took ___ on time.",
        options: ["off", "on", "up", "in"],
        answer: 0,
        explanation: "উড়োজাহাজের ওড়া মানে take off।",
      },
      {
        question: "Can you ___ this word in the dictionary?",
        options: ["look after", "look up", "look into", "look out"],
        answer: 1,
        explanation: "অভিধানে শব্দ খোঁজা মানে look up।",
      },
    ],
  },
  {
    topic: "Common Mistakes by Bengali Speakers",
    level: "beginner",
    locale: "bn",
    title: "বাঙালি শিক্ষার্থীদের কমন ভুল ও সমাধান",
    intro:
      "বাংলা আর ইংরেজির গঠন আলাদা হওয়ায় আমাদের কিছু ভুল প্রায় সবাই করে — ভুলগুলো চিনলেই অর্ধেক সমাধান। এই পাঠে সবচেয়ে ঘটা বাঙালি-ইংরেজি ভুলগুলো ধরে ধরে ঠিক করব।",
    sections: [
      {
        heading: "আর্টিকেল হারানো আর I am agree-জাতীয় ভুল",
        explanation:
          "বাংলা নামের আগে আর্টিকেল রাখে না বলে আমরা প্রায়ই I went to market বলে ফেলি — ইংরেজিতে the market বা a market লাগবেই। একইভাবে agree একটি ক্রিয়া, বিশেষণ নয়, তাই I am agree ভুল — একা I agree বলুন। আর What is your good name? বলাটা ইংরেজিতে অর্থহীন — সরাসরি What is your name? জিজ্ঞেস করুন।",
        examples: [
          {
            wrong: "I went to market yesterday.",
            right: "I went to the market yesterday.",
            note: "নির্দিষ্ট বাজার — আর্টিকেল the বাদ দেওয়া যায় না।",
          },
          {
            wrong: "I am agree with you.",
            right: "I agree with you.",
            note: "agree ক্রিয়া — তাই am লাগে না।",
          },
          {
            wrong: "What is your good name?",
            right: "What is your name?",
            note: "good name ইংরেজিতে চলে না — সরাসরি name জিজ্ঞেস করুন।",
          },
        ],
      },
      {
        heading: "টানা continuous আর প্রিপোজিশন টানাটানি",
        explanation:
          "বাংলার ছি-চ্ছি প্রত্যয় শোনায় বলে আমরা সব কিছুতে present continuous চালাই — কিন্তু অভ্যাস বোঝাতে সেখানে simple present হয়। know, like, want জাতীয় মানসিক অবস্থার ক্রিয়া কখনোই continuous হয় না। একইভাবে বাংলা প্রিপোজিশন ইংরেজিতে টেনে নেওয়া হয় — discuss about, marry with এসব ইংরেজিতে নেই; discuss আর marry একাই যথেষ্ট।",
        examples: [
          {
            wrong: "I am knowing the answer.",
            right: "I know the answer.",
            note: "know মানসিক অবস্থার ক্রিয়া — continuous হয় না।",
          },
          {
            wrong: "We discussed about the plan.",
            right: "We discussed the plan.",
            note: "discuss-এর পরে about বসে না — সরাসরি object।",
          },
          {
            wrong: "She married with a doctor.",
            right: "She married a doctor.",
            note: "marry-এর পরে with বসে না।",
          },
        ],
      },
    ],
    tips: [
      "নিজের কথায় আর্টিকেল খোঁজুন — বাংলায় যেখানে কিছু নেই, সেখানেই ভুলের সম্ভাবনা বেশি।",
      "am/is/are + ক্রিয়া বসানোর আগে ভাবুন: কাজটা কি এই মুহূর্তে চলছে? না হলে continuous বাদ।",
      "তথ্যের ইংরেজি information অগণনযোগ্য — some information বলুন, informations নয়।",
      "ভুল বলা লজ্জার নয় — প্রতিদিন একটা ভুল ধরুন, ঠিক রূপটা জোরে বলুন, কাল আর হবে না।",
    ],
    quiz: [
      {
        question: "Which sentence is correct?",
        options: ["I agree.", "I am agree.", "I am agreeing.", "I agrees."],
        answer: 0,
        explanation: "agree একটি ক্রিয়া — একা I agree বললেই হয়।",
      },
      {
        question: "Which sentence is correct?",
        options: [
          "We discussed about it.",
          "We discuss about it.",
          "We discussed it.",
          "We are discuss it.",
        ],
        answer: 2,
        explanation: "discuss-এর সাথে about লাগে না — সরাসরি object বসে।",
      },
      {
        question: "I need ___ about the exam.",
        options: [
          "some informations",
          "some information",
          "an information",
          "informations",
        ],
        answer: 1,
        explanation: "information অগণনযোগ্য — plural s বসে না।",
      },
      {
        question: "Which sentence is correct?",
        options: [
          "She is knowing him.",
          "She know him.",
          "She is know him.",
          "She knows him.",
        ],
        answer: 3,
        explanation: "know মানসিক অবস্থার ক্রিয়া — continuous নয়, তাই knows।",
      },
      {
        question: "Which sentence is correct?",
        options: [
          "I am go to school daily.",
          "I go to school daily.",
          "I goes to school daily.",
          "I am going to school daily.",
        ],
        answer: 1,
        explanation: "daily অভ্যাস বোঝায় — তাই simple present: I go।",
      },
    ],
  },
  {
    topic: "Since vs For",
    level: "beginner",
    locale: "bn",
    title: "Since বনাম For: শুরুর বিন্দু নাকি সময়ের দৈর্ঘ্য",
    intro:
      "দুই বছর ধরে আর গত বছর থেকে — একটায় for, আরেকটায় since। এই ভুলটা এতই কমন যে ঠিক করলেই আপনার ইংরেজি চোখে লাগার মতো শুদ্ধ হবে।",
    sections: [
      {
        heading: "for + সময়ের দৈর্ঘ্য, since + শুরুর বিন্দু",
        explanation:
          "কতক্ষণ ধরে চলছে সেই দৈর্ঘ্য বললে for — for two years, for ten minutes, for a long time। কোন সময় থেকে শুরু সেই বিন্দু বললে since — since 2020, since Monday, since morning, since my childhood। সহজ পরীক্ষা: সংখ্যা + সময় (দুই বছর, তিন ঘণ্টা) থাকলে for; একটা নির্দিষ্ট সময়ের নাম থাকলে since।",
        examples: [
          {
            wrong: "I live here since 2018.",
            right: "I have lived here since 2018.",
            note: "২০১৮ থেকে এখনও চলছে — since-এর সাথে present perfect লাগে।",
          },
          {
            wrong: "She has worked here for 2019.",
            right: "She has worked here since 2019.",
            note: "২০১৯ শুরুর বিন্দু, দৈর্ঘ্য নয় — তাই since।",
          },
          {
            wrong: "We have waited since three hours.",
            right: "We have waited for three hours.",
            note: "তিন ঘণ্টা সময়ের দৈর্ঘ্য — তাই for।",
          },
        ],
      },
      {
        heading: "since/for-এর সাথে টেন্সের জুটি",
        explanation:
          "since বা for দিয়ে এখনও চলমান সময় বোঝালে present perfect লাগে — have/has + ক্রিয়া; শুধু since/for বসিয়ে সাধারণ বর্তমান কাল চালালে বাক্য ভুল হয়। কাজটা আগে চলত, এখন আর চলে না — এমন হলে past simple লাগবে। কাজটা এখনও চলছে কি না, এই প্রশ্নটাই টেন্স ঠিক করে দেয়।",
        examples: [
          {
            wrong: "I am here since morning.",
            right: "I have been here since morning.",
            note: "সকাল থেকে এখনও আছি — তাই have been।",
          },
          {
            wrong: "He knows her since childhood.",
            right: "He has known her since childhood.",
            note: "শৈশব থেকে এখনও চেনা — তাই has known।",
          },
          {
            wrong: "I have lived there for five years before we moved.",
            right: "I lived there for five years before we moved.",
            note: "কাজটা শেষ, এখন আর চলে না — তাই past simple।",
          },
        ],
      },
    ],
    tips: [
      "সংখ্যা দেখলে for, তারিখ-দিন-ঘড়ির বিন্দু দেখলে since — প্রথমেই এটা চেক করুন।",
      "since/for বসলেই টেন্স মিলিয়ে নিন — কাজ এখনও চলছে? তাহলে have/has + ক্রিয়া।",
      "তালিকা মুখস্থ রাখুন: since — morning, Monday, 2020, my childhood; for — two hours, a week, ages।",
      "নিজের সম্পর্কে তিনটা বাক্য বলুন: I have studied English for..., I have known... since... — প্রতিদিন অভ্যাস করুন।",
    ],
    quiz: [
      {
        question: "I have known her ___ 2015.",
        options: ["for", "since", "from", "at"],
        answer: 1,
        explanation: "২০১৫ শুরুর বিন্দু — তাই since।",
      },
      {
        question: "They have lived here ___ ten years.",
        options: ["since", "from", "for", "during"],
        answer: 2,
        explanation: "দশ বছর সময়ের দৈর্ঘ্য — তাই for।",
      },
      {
        question: "She has been sick ___ Monday.",
        options: ["for", "since", "during", "in"],
        answer: 1,
        explanation: "সোমবার থেকে অর্থাৎ শুরুর বিন্দু — তাই since।",
      },
      {
        question: "We waited ___ two hours yesterday.",
        options: ["for", "since", "from", "during"],
        answer: 0,
        explanation: "দুই ঘণ্টা সময়ের দৈর্ঘ্য — তাই for।",
      },
      {
        question: "He ___ in this office since 2021.",
        options: ["work", "works", "has worked", "is working"],
        answer: 2,
        explanation: "since-এর সাথে চলমান কাজে present perfect — has worked।",
      },
    ],
  },
];

export default LESSONS;
