import type { BankLesson } from "./types";

// Static grammar bank — advanced topics, ADVANCED level (CEFR ~C1),
// Bengali explanations. English sentences stay English (that's what is
// being learned); every explanation/intro/tip/note is natural Bengali.
const LESSONS: BankLesson[] = [
  {
    topic: "Inversion & Emphasis Structures",
    level: "advanced",
    locale: "bn",
    title: "Inversion: জোর দেওয়ার সাহসী কাঠামো",
    intro:
      "উন্নত ইংরেজিতে auxiliary verb-কে subject-এর আগে তুলে দিলে বক্তব্যে নাটকীয় জোর আসে — এটাই inversion। সংবাদ, সাহিত্য ও ফরমাল লেখায় এই কাঠামোর নিখুঁত ব্যবহারই দক্ষ লেখকের স্বাক্ষর।",
    sections: [
      {
        heading: "নেগেটিভ অ্যাডভার্বিয়ালের পরে পূর্ণ ইনভার্শন",
        explanation:
          "বাক্যের শুরুতে Never, Rarely, Seldom, Hardly, Little, Not once, Under no circumstances-এর মতো নেগেটিভ বা সীমাবদ্ধকারী অংশ এলে মূল ক্রিয়ার আগে auxiliary বসে — ঠিক প্রশ্নবোধক বাক্যের মতো। এই কাঠামো বক্তব্যকে শুধু শুদ্ধই করে না, প্রাণ দেয়। মনে রাখবেন: নেগেটিভ অংশটির ঠিক পরেই auxiliary, তারপর subject, তারপর main verb।",
        examples: [
          {
            wrong: "Never I have seen such a chaotic exam hall.",
            right: "Never have I seen such a chaotic exam hall.",
            note: "Never-এর পরে সরাসরি subject নয়; auxiliary have subject-এর আগে উঠে আসে।",
          },
          {
            wrong: "Not only she lost her passport, but she also missed the flight.",
            right: "Not only had she lost her passport, but she had also missed the flight.",
            note: "Not only দিয়ে শুরু হলে প্রথম clause-এ inversion বাধ্যতামূলক, এবং আগের ঘটনা দেখাতে past perfect বেশি প্রচলিত।",
          },
          {
            wrong: "Hardly the results were announced when phones started ringing.",
            right: "Hardly had the results been announced when phones started ringing.",
            note: "Hardly/Scarcely-এর মানক জুটি হলো had + subject + V3 ... when — সময়ের ক্রম নিখুঁতভাবে ফুটে ওঠে।",
          },
        ],
      },
      {
        heading: "So, Such ও Only দিয়ে জোরদার ইনভার্শন",
        explanation:
          "So + adjective বা Such + noun phrase বাক্যের শুরুতে এলেও একই রকম উল্টোগল্প হয়: So complete was the silence that even breathing felt loud। Only then, Only after, Only when জাতীয় অংশ দিয়ে শুরু করলেও auxiliary সামনে আসে, কারণ পুরো বাক্যের ওপর বিশেষ focus পড়ে। No sooner ... than-ও এই গোষ্ঠীরই ঘনিষ্ঠ আত্মীয়।",
        examples: [
          {
            wrong: "So the lecture was boring that half the hall slipped out.",
            right: "So boring was the lecture that half the hall slipped out.",
            note: "So + adjective সামনে এলে adjective-এর পরে be-verb, তারপর subject — এই ছন্দেই জোর তৈরি হয়।",
          },
          {
            wrong: "Only after the third reminder I received a reply from the office.",
            right: "Only after the third reminder did I receive a reply from the office.",
            note: "Only + সময়সূচক অংশ দিয়ে শুরু হলে মূল clause-এ did জাতীয় auxiliary-র inversion আবশ্যক।",
          },
          {
            wrong: "No sooner the ceremony started than the rain arrived.",
            right: "No sooner had the ceremony started than the rain arrived.",
            note: "No sooner-এর জুটি than, আর গঠন হয় No sooner had + subject + V3।",
          },
        ],
      },
    ],
    tips: [
      "নেগেটিভ অ্যাডভার্বিয়ালের তালিকা মুখস্থ রাখুন: never, rarely, seldom, hardly, scarcely, barely, little, nowhere, not once, at no point, under no circumstances, no sooner।",
      "প্রতি অনুচ্ছেদে এক-দুটি যথাযথ ইনভার্শনই যথেষ্ট; প্রতি বাক্যে করলে নাটকীয়তা কৃত্রিম লাগে।",
      "IELTS বা একাডেমিক লেখায় সঠিক ইনভার্শন sentence variety বাড়ায় — Grammatical Range ব্যান্ডে সরাসরি লাভ।",
      "Speaking-এ জোর দিতে ব্যবহার করুন: Rarely does a week go by without a new discovery — শ্রোতার কান দাঁড়িয়ে যায়।",
    ],
    quiz: [
      {
        question: "Choose the correct inverted form of: She had hardly sat down when the phone rang.",
        options: [
          "Hardly she had sat down when the phone rang.",
          "Hardly had she sat down when the phone rang.",
          "Hardly sat she down when the phone rang.",
          "Hardly did she had sat down when the phone rang.",
        ],
        answer: 1,
        explanation: "Hardly-এর পরে auxiliary had subject-এর আগে আসে — এটাই পূর্ণ ইনভার্শন।",
      },
      {
        question: "Complete with inversion: Not until the refund was processed ___ the complaint.",
        options: ["I withdrew", "I did withdraw", "withdrawn I", "did I withdraw"],
        answer: 3,
        explanation: "Not until দিয়ে শুরু হলে মূল clause-এ did + subject + base verb বসে।",
      },
      {
        question: "Which sentence is correct?",
        options: [
          "Little did they know that the offer had expired.",
          "Little they knew that the offer had expired.",
          "Little they did know that the offer had expired.",
          "Little knew they that the offer had expired.",
        ],
        answer: 0,
        explanation: "Little-ও নেগেটিভ অ্যাডভার্বিয়াল, তাই did they know — auxiliary সামনে।",
      },
      {
        question: "Choose the emphatic equivalent of: The demand was so huge that the server crashed.",
        options: [
          "So was huge the demand that the server crashed.",
          "Such huge was the demand that the server crashed.",
          "So huge was the demand that the server crashed.",
          "So huge the demand was that the server crashed.",
        ],
        answer: 2,
        explanation: "So + adjective সামনে এলে be-verb subject-এর আগে যায় — So huge was the demand।",
      },
      {
        question: "Complete the formal warning: Under no circumstances ___ the laboratory unattended.",
        options: ["you should leave", "should leave you", "leave you should", "should you leave"],
        answer: 3,
        explanation: "Under no circumstances-এর পরে should + subject + base verb — পূর্ণ ইনভার্শন।",
      },
    ],
  },
  {
    topic: "Mixed & Inverted Conditionals",
    level: "advanced",
    locale: "bn",
    title: "Mixed ও Inverted Conditionals: সময় আর শর্তের সূক্ষ্ম খেলা",
    intro:
      "শর্ত অতীতের কিন্তু ফল এখনো বর্তমানে — এমন হলে সাধারণ second বা third conditional আর যথেষ্ট নয়। আর if বাদ দিয়ে Had/Were/Should দিয়ে শুরু করলে বাক্য হয়ে ওঠে আরও প্রফেশনাল।",
    sections: [
      {
        heading: "Mixed Conditionals: অতীতের শর্ত, বর্তমানের ফল",
        explanation:
          "শর্তটা অতীতে ঘটে যাওয়া কিন্তু ফলাফল এখনো বর্তমানে বহমান — তখন দরকার If + past perfect, would + base verb। উল্টোটাও হয়: বর্তমান অভ্যাস বা অবস্থা দিয়ে অতীতের ফল ব্যাখ্যা করা (If + past simple, would have + V3)। দুই অর্ধের সময় আলাদা কি না — এটাই চেনার মূল সূত্র।",
        examples: [
          {
            wrong: "If she took that job last year, she would be happier now.",
            right: "If she had taken that job last year, she would be happier now.",
            note: "সিদ্ধান্তটা অতীতের (last year), ফলটা বর্তমানের (now) — তাই শর্তে past perfect, ফলে would + base verb।",
          },
          {
            wrong: "If I had eaten breakfast, I would have more energy yesterday.",
            right: "If I ate breakfast regularly, I would have had more energy yesterday.",
            note: "এখানে শর্তটা বর্তমান অভ্যাস (regularly), ফলটা অতীতের (yesterday) — উল্টো দিকের mixed conditional।",
          },
          {
            wrong: "If he had saved money in his twenties, he would have bought a house today.",
            right: "If he had saved money in his twenties, he would own a house today.",
            note: "অতীতের সঞ্চয়ের ফল আজও বহমান — বর্তমান ফলে would + base verb, would have + V3 নয়।",
          },
        ],
      },
      {
        heading: "If-ছাড়া শর্ত: Had, Were, Should দিয়ে ইনভার্শন",
        explanation:
          "ফরমাল ইংরেজিতে if বাদ দিয়ে auxiliary-কে subject-এর সামনে আনা হয়: Had I known..., Were I you..., Should you need help...। Were I you পরামর্শের সুর দেয়, আর Should you... ভবিষ্যৎ সম্ভাবনাকে ভদ্রভাবে খোলা রাখে। নেগেটিভ হলে contraction নয় — Had I not seen it ঠিক, Hadn't I seen it ফরমাল লেখায় অনুচিত।",
        examples: [
          {
            wrong: "If I had known you were in town, I would have called you.",
            right: "Had I known you were in town, I would have called you.",
            note: "ফরমাল বর্ণনায় if বাদ দিয়ে Had + subject + V3 দিয়ে শুরুই শ্রেয়।",
          },
          {
            wrong: "If I were the manager, I would have hired more interns this quarter.",
            right: "Were I the manager, I would have hired more interns this quarter.",
            note: "Were সামনে এলে if-এর প্রয়োজনই নেই — কল্পনা বা পরামর্শের সুর আরও ধারালো হয়।",
          },
          {
            wrong: "Should you not received the invoice, please contact accounts.",
            right: "Should you not receive the invoice, please contact accounts.",
            note: "Should-conditional-এ base verb বসে; নেগেটিভে not মাঝে, contraction নয়।",
          },
        ],
      },
    ],
    tips: [
      "Mixed conditional চেনার নিয়ম: বাক্যের দুই অর্ধে আলাদা সময়ের ইঙ্গিত (last year/now, regularly/yesterday) খুঁজুন।",
      "Email-এ Should you require any further assistance, please let us know — এই একটি কাঠামোই লেখাকে প্রফেশনাল মান দেয়।",
      "নেগেটিভ inverted conditional-এ contraction (Hadn't, Weren't) এড়িয়ে চলুন; লিখুন Had you not replied...।",
      "উচ্চারণে শর্তসূচক অর্ধ হালকায়, ফলসূচক অর্ধ জোরে বললে দীর্ঘ mixed conditional-ও স্পষ্ট শোনায়।",
    ],
    quiz: [
      {
        question: "Choose the correct mixed conditional: ___ that job offer, she would be working abroad now.",
        options: ["If she would accept", "If she accepted", "If she had accepted", "If she accepts"],
        answer: 2,
        explanation: "শর্তটা অতীতের (past perfect), ফলটা বর্তমানের (would be working now) — এটাই mixed conditional।",
      },
      {
        question: "Complete formally: ___ more time, we would have finished the report.",
        options: ["Had we had", "Should we have", "Were we have", "Had we have"],
        answer: 0,
        explanation: "If বাদ দিয়ে Had + subject + had — inverted third conditional।",
      },
      {
        question: "Which sentence is correct?",
        options: [
          "Should you not be satisfied, you may request a refund.",
          "Should not you be satisfied, you may request a refund.",
          "Shouldn't you be satisfied, you may request a refund.",
          "Should you not satisfied, you may request a refund.",
        ],
        answer: 0,
        explanation: "Should-conditional-এ নেগেটিভ হলে not মূল ক্রিয়ার আগে বসে, contraction চলে না।",
      },
      {
        question:
          "Choose the correct version of: She did not take that course last year, so she does not have the certificate now.",
        options: [
          "If she took that course, she would have the certificate now.",
          "If she had taken that course, she would have had the certificate now.",
          "If she would take that course, she has the certificate now.",
          "If she had taken that course, she would have the certificate now.",
        ],
        answer: 3,
        explanation: "অতীতের শর্ত (last year), বর্তমানের ফল (now) — তাই শর্তে past perfect, ফলে would + have।",
      },
      {
        question: "Complete the formal conditional: ___ he to arrive earlier, he would meet the delegates.",
        options: ["Had", "Were", "Was", "Would"],
        answer: 1,
        explanation: "Were + subject + to + base verb — if ছাড়া ভবিষ্যতের কল্পিত শর্ত।",
      },
    ],
  },
  {
    topic: "Cleft Sentences",
    level: "advanced",
    locale: "bn",
    title: "Cleft Sentences: বাক্য ভেঙে জোর আনা",
    intro:
      "যখন বাক্যের একটি নির্দিষ্ট অংশকে spotlight-এ তুলতে হয়, cleft sentence সবচেয়ে নিখুঁত অস্ত্র। সাক্ষাৎকার, উপস্থাপনা ও একাডেমিক লেখায় এর দক্ষ ব্যবহার বক্তব্যকে অমোঘ করে তোলে।",
    sections: [
      {
        heading: "It-cleft: জোরটা ঠিক জায়গায় বসানো",
        explanation:
          "It + be + গুরুত্বপূর্ণ অংশ + who/that... কাঠামো বাক্যের যেকোনো উপাদানকে সামনে এনে দাঁড় করায়। সাধারণ বাক্য Sadia broke the printer থেকে It was Sadia who broke the printer — এখন জোর পুরোপুরি সাদিয়ার ওপর। দোষ বা কৃতিত্ব নির্দিষ্ট করতে ফরমাল বিবরণীতে এর জুড়ি নেই।",
        examples: [
          {
            wrong: "The delayed shipment caused the loss, not the pricing.",
            right: "It was the delayed shipment that caused the loss, not the pricing.",
            note: "It-cleft সন্দেহ দূর করে — দায় কোথায়, বাক্যের কাঠামোতেই প্রমাণ হয়ে যায়।",
          },
          {
            wrong: "The manager, not the intern, signed the contract.",
            right: "It was the manager, not the intern, who signed the contract.",
            note: "X, not Y জাতীয় তুলনায় it-cleft দিলে contrast আরও ধারালো হয়।",
          },
          {
            wrong: "I did not realize the deadline until Tuesday.",
            right: "It was not until Tuesday that I realized the deadline.",
            note: "It was not until ... that ... — সময়ের জোর দেওয়ার ক্লাসিক ফরমাল কাঠামো।",
          },
        ],
      },
      {
        heading: "Wh-cleft ও Reverse cleft: What, All, The thing",
        explanation:
          "What + clause + be + focus কাঠামো মূল বার্তাকে বাক্যের শেষে নিয়ে যায়, যেখানে শ্রোতার মনোযোগ সবচেয়ে বেশি — এটাই end-focus নীতি। All I want is... সংক্ষিপ্ত ও আবেগঘন সংস্করণ, আর The thing that matters is... আলাপচারিতা সাজাতে সাহায্য করে। Reverse cleft (A promotion is what I deserve) গুরুত্বপূর্ণ অংশটাকে প্রথমেই রেখে জোর দেয়।",
        examples: [
          {
            wrong: "We need clearer communication from headquarters.",
            right: "What we need from headquarters is clearer communication.",
            note: "Wh-cleft জোরটা নিয়ে যায় বাক্যের শেষ প্রান্তে — যেখানে শোনা যায়, চেনা যায়।",
          },
          {
            wrong: "I only want an apology.",
            right: "All I want is an apology.",
            note: "All + clause + be — ন্যূনতম চাহিদার আবেগ নিখুঁতভাবে প্রকাশ করে।",
          },
          {
            wrong: "Flexibility matters most to me.",
            right: "The thing that matters most to me is flexibility.",
            note: "The thing that... দিয়ে মূল বিষয়টা আলাদা করে সামনে আনা যায় — বিশেষত তুলনামূলক আলোচনায়।",
          },
        ],
      },
    ],
    tips: [
      "উপস্থাপনায় মূল কথা বলার আগে What I want to emphasize is... বলুন — দর্শক সরাসরি মূল পয়েন্টে পৌঁছাবে।",
      "নথিতে it-cleft, বক্তৃতায় wh-cleft বেশি শোভা পায় — এই ভারসাম্য মেনে চলুন।",
      "It was not until ... that ... মুখস্থ রাখুন; Not until দিয়ে শুরু করলে মূল clause-এ inversion-ও লাগে (Not until Tuesday did I realize...)।",
      "Cleft-এর বৈশিষ্ট্য: মূল বাক্যের তথ্য কিছুই বাদ যায় না, শুধু জায়গা বদলায় — নামটাও তাই (ফাটল/ভাগ)।",
    ],
    quiz: [
      {
        question: "Choose the correct it-cleft: ___ who solved the network outage.",
        options: [
          "There was the night-shift team",
          "It the night-shift team was",
          "It was the night-shift team",
          "That was the night-shift team",
        ],
        answer: 2,
        explanation: "It-cleft-এর গঠন It + was/were + focus + who/that — অন্যগুলো কাঠামোগত ভুল বা cleft নয়।",
      },
      {
        question: "Complete the wh-cleft: ___ surprised me was how quickly the client replied.",
        options: ["That", "What", "Which", "It"],
        answer: 1,
        explanation: "What surprised me was ... — what এখানে clause-এর subject, cleft-এর মাথা।",
      },
      {
        question: "Choose the emphatic equivalent of: I did not notice the error until Friday.",
        options: [
          "Not until Friday it was I noticed the error.",
          "It was not Friday until I noticed the error.",
          "Until Friday was not it that I noticed the error.",
          "It was not until Friday that I noticed the error.",
        ],
        answer: 3,
        explanation: "It was not until + সময় + that + বাকি বাক্য — সময়ের ওপর জোরের মানক কাঠামো।",
      },
      {
        question: "Complete: ___ I ask is that you reply within 24 hours.",
        options: ["Everything what", "That which", "All that", "All what"],
        answer: 2,
        explanation: "All that I ask is... — all-এর পরে that জোটবাঁধে, what নয়।",
      },
      {
        question: "Transform into a wh-cleft: Her calmness impressed the panel most.",
        options: [
          "What was her calmness impressed the panel most.",
          "What impressed the panel most was her calmness.",
          "Her calmness what impressed the panel was most.",
          "The panel what was impressed most was her calmness.",
        ],
        answer: 1,
        explanation: "What + বিশেষ অংশ + be + বাকি — What impressed the panel most was her calmness।",
      },
    ],
  },
  {
    topic: "Subjunctive & Unreal Uses",
    level: "advanced",
    locale: "bn",
    title: "Subjunctive: কল্পনা আর আদেশের বিশেষ ক্রিয়ারূপ",
    intro:
      "Subjunctive হলো সেই বিরল ক্রিয়ারূপ যেখানে subject যা-ই হোক, ক্রিয়া থাকে base form-এ বা were-এ। ফরমাল সুপারিশ, প্রস্তাব ও প্রার্থনায় এর ব্যবহার ইংরেজিকে অভিজাত করে তোলে।",
    sections: [
      {
        heading: "Mandative Subjunctive: দাবি ও পরামর্শের ব্যাকরণ",
        explanation:
          "suggest, demand, insist, recommend, request, propose, urge-এর পরে that + subject + base verb বসে — তৃতীয় পুরুষ singular-এও -s যোগ হয় না। It is essential/important/vital that... কাঠামোতেও একই নিয়ম। নেগেটিভ হলে not সরাসরি base verb-এর আগে বসে — auxiliary দরকার হয় না।",
        examples: [
          {
            wrong: "The committee recommends that the Dean attends the hearing.",
            right: "The committee recommends that the Dean attend the hearing.",
            note: "recommend-এর পরের that-clause-এ ক্রিয়া base form থাকে — attends নয়, attend।",
          },
          {
            wrong: "It is essential that every candidate brings two references.",
            right: "It is essential that every candidate bring two references.",
            note: "It is essential/vital/important that...-ও mandative subjunctive চায়: bring, not brings।",
          },
          {
            wrong: "The board insisted that he does not chair the meeting.",
            right: "The board insisted that he not chair the meeting.",
            note: "নেগেটিভ subjunctive-এ not + base verb সরাসরি বসে — does not chair ভুল।",
          },
        ],
      },
      {
        heading: "Were-Subjunctive ও সূত্রবদ্ধ ঐতিহ্যবাহী রূপ",
        explanation:
          "অবাস্তব বা কল্পিত অবস্থায় singular subject-এর জন্যও were ব্যবহৃত হয়: If I were you, I wish it were Friday, as if she were floating। Formulaic subjunctive স্থির অভিব্যক্তি বহন করে: God save the King, Come what may, Be that as it may, Far be it from me to complain। এগুলো বদলায় না — জোড়ায় জোড়ায় শিখে রাখতেই হয়।",
        examples: [
          {
            wrong: "I wish my commute was shorter.",
            right: "I wish my commute were shorter.",
            note: "wish-এর পরে অবাস্তব অবস্থায় লেখার মানদণ্ড were; কথ্যায় was চললেও পরীক্ষায় were-ই নিরাপদ।",
          },
          {
            wrong: "He talked as if he was the owner of the company.",
            right: "He talked as if he were the owner of the company.",
            note: "as if/as though-এর পরে কল্পিত তুলনায় were বসে।",
          },
          {
            wrong: "Whatever happens, we will submit the proposal tomorrow.",
            right: "Come what may, we will submit the proposal tomorrow.",
            note: "Come what may — ক্রিয়া সামনে, নির্দিষ্ট subject নেই; এটাই formulaic subjunctive।",
          },
        ],
      },
    ],
    tips: [
      "insist-এর দুই মুখ চিনুন: দৃঢ় দাবি (subjunctive চায়) আর জোর দিয়ে বলা (সাধারণ tense চলে) — He insisted that she was innocent বনাম He insisted that she be released।",
      "IELTS speaking-এ If I were the minister, I would... — were-ই বলুন; পরীক্ষক এটাই শুনতে অভ্যস্ত।",
      "ব্রিটিশ লেখায় should-সংস্করণ (The report suggests that funding should increase) ঠিক আছে, কিন্তু একই নথিতে দুই স্টাইল মেশাবেন না।",
      "Formulaic জুটি নোট করুন: come what may, be that as it may, so be it, God forbid — ব্যবহারে সাহস বাড়ে।",
    ],
    quiz: [
      {
        question: "Choose the correct mandative subjunctive: The regulator demanded that the bank ___ its disclosures.",
        options: ["expands", "will expand", "expand", "expanded"],
        answer: 2,
        explanation: "demand-এর পরের that-clause-এ ক্রিয়া base form — expand।",
      },
      {
        question: "Complete: It is vital that she ___ at the hearing in person.",
        options: ["appears", "will appear", "is appearing", "appear"],
        answer: 3,
        explanation: "It is vital that...-ও mandative subjunctive — appear, not appears।",
      },
      {
        question: "Which sentence is stylistically correct in formal writing?",
        options: [
          "Were I the chair, I would postpone the vote.",
          "If I was the chair, I would postpone the vote.",
          "If I am the chair, I would postpone the vote.",
          "Was I the chair, I would postpone the vote.",
        ],
        answer: 0,
        explanation: "কল্পিত শর্তে were-subjunctive: Were I the chair — if ছাড়া সংস্করণ।",
      },
      {
        question: "Complete: He spoke about the merger as though he ___ inside information.",
        options: ["has", "is having", "had", "was having"],
        answer: 2,
        explanation: "as though-এর পরে অবাস্তব অবস্থায় past form — had (state verb, continuous নয়)।",
      },
      {
        question: "Which formulaic subjunctive means no matter what happens?",
        options: ["So be it.", "Come what may.", "God forbid.", "Be that as it may."],
        answer: 1,
        explanation: "Come what may = যা-ই ঘটুক — formulaic subjunctive; বাকিগুলোর অর্থ অন্য।",
      },
    ],
  },
  {
    topic: "Participle Clauses",
    level: "advanced",
    locale: "bn",
    title: "Participle Clauses: অল্প শব্দে ঘন বাক্য",
    intro:
      "Present ও past participle দিয়ে তৈরি clause দীর্ঘ বাক্যকে টানটান ও প্রফেশনাল করে — বিশেষত রিপোর্ট আর সংবাদে। তবে কর্তা ভুল হলে অর্থ উল্টে যায়, তাই ফাঁদগুলোও জানা জরুরি।",
    sections: [
      {
        heading: "তিন রূপ: -ing, -ed আর Having + V3",
        explanation:
          "Present participle (-ing) বোঝায় সক্রিয় বা একসঙ্গে চলা কাজ: Walking home, I met an old friend। Past participle (-ed/V3) বোঝায় নিষ্ক্রিয়: Built in 1905, the bridge still carries traffic। Perfect participle (Having + V3) দেখায় প্রথম কাজ শেষ হয়ে দ্বিতীয়টা শুরু: Having submitted the form, she left।",
        examples: [
          {
            wrong: "The man who was standing by the door asked for directions.",
            right: "The man standing by the door asked for directions.",
            note: "অপ্রয়োজনীয় relative clause -ing participle-এ ছোট হলো — অর্থ অক্ষুণ্ণ, বাক্য হালকা।",
          },
          {
            wrong: "The documents, which were leaked to the press, revealed the deal.",
            right: "The documents, leaked to the press, revealed the deal.",
            note: "Passive relative clause থেকে which were বাদ দিলে past participle clause হয়।",
          },
          {
            wrong: "After she had finished the presentation, she answered questions for an hour.",
            right: "Having finished the presentation, she answered questions for an hour.",
            note: "আগে-পরের ক্রম দেখাতে Having + V3 নিখুঁত — সাধারণ -ing ক্রম অস্পষ্ট করতে পারে।",
          },
        ],
      },
      {
        heading: "Dangling Participle: ভুল কর্তার ফাঁদ",
        explanation:
          "Participle clause-এর কর্তা মূল clause-এর subject হতে হয়। Walking to the bus stop, the rain started — এতে মনে হয় বৃষ্টিই হেঁটে আসছে; এটাই dangling modifier। সংশোধনে হয় মূল কর্তা ঠিক করুন, নয়তো participle-কে পূর্ণ clause বানান: While I was walking to the bus stop, the rain started।",
        examples: [
          {
            wrong: "Reading the report, several errors came to light.",
            right: "While I was reading the report, several errors came to light.",
            note: "errors পড়ে না — পড়ে মানুষ; তাই participle-এর কর্তা আলাদা করে বলতেই হলো।",
          },
          {
            wrong: "Born in Dhaka, the university awarded her an honorary degree.",
            right: "Born in Dhaka, she later received an honorary degree from the university.",
            note: "Born-এর কর্তা হতে হবে she, university নয় — জন্ম নিয়েছে তিনি।",
          },
          {
            wrong: "Having reviewed the accounts, the discrepancies were obvious.",
            right: "Having reviewed the accounts, the auditor found the discrepancies obvious.",
            note: "discrepancies কখনো হিসাব পর্যালোচনা করে না — করে auditor।",
          },
        ],
      },
    ],
    tips: [
      "প্রতিটি participle clause লেখার পরে প্রশ্ন করুন: এই কাজটা কে করছে? উত্তর মূল clause-এর subject না হলে বাক্য ঠিক করুন।",
      "সংবাদ ও রিপোর্ট পড়ার সময় কমার আগের অংশ আলাদা করে চিনুন — জটিল বাক্য তাতে সোজা হয়ে যায়।",
      "স্পষ্ট সময়ের ফাঁক দেখাতে Having + V3, একসঙ্গে চলা কাজে শুধু -ing — পার্থক্যটা মেনে চলুন।",
      "IELTS writing-এ relative clause কমিয়ে participle clause আনলে grammatical range বাড়ে — তবে কর্তা-মিল যাচাই করা প্রথম কাজ।",
    ],
    quiz: [
      {
        question: "Combine correctly: She opened the laptop. Then she checked her emails.",
        options: [
          "Opening the laptop, her emails were checked.",
          "Opened the laptop, she checked her emails.",
          "Having opened the laptop, she checked her emails.",
          "While opening the laptop, emails checked her.",
        ],
        answer: 2,
        explanation: "কাজের ক্রম (আগে খোলা, পরে দেখা) — Having opened + কর্তা she।",
      },
      {
        question: "Choose the correct sentence:",
        options: [
          "Having missed the bus, the meeting had to be rescheduled.",
          "Having missed the bus, we had to reschedule the meeting.",
          "Having missed the bus, rescheduling the meeting happened.",
          "Missed the bus, we had to reschedule the meeting.",
        ],
        answer: 1,
        explanation: "বাস মিস করেছে we — তাই মূল কর্তাও we হতে হবে।",
      },
      {
        question: "Choose the correct reduced form of: The painting, which was stolen in 1990, was recovered.",
        options: [
          "The painting, stealing in 1990, was recovered.",
          "The painting, was stolen in 1990, was recovered.",
          "The painting stolen it in 1990, was recovered.",
          "The painting, stolen in 1990, was recovered.",
        ],
        answer: 3,
        explanation: "Passive relative clause ছোট করলে which were বাদ গিয়ে past participle থাকে।",
      },
      {
        question: "Fix the dangling modifier: Waiting for the results, his nerves got worse.",
        options: [
          "As he waited for the results, his nerves got worse.",
          "Waiting for the results, the nerves of him got worse.",
          "Waiting for the results, his nerves were gotten worse.",
          "Waiting for the results, worse got his nerves.",
        ],
        answer: 0,
        explanation: "অপেক্ষা করেছিল he — তাই পূর্ণ clause দিয়ে কর্তা স্পষ্ট করতে হলো।",
      },
      {
        question: "Choose the option that shows she finished BEFORE sending: ___ the final draft, she sent it to the client.",
        options: ["Finishing", "Having finished", "To finish", "Finish"],
        answer: 1,
        explanation: "Having + V3 আগের কাজের সম্পূর্ণতা বোঝায় — পাঠানোর আগেই শেষ হয়েছিল।",
      },
    ],
  },
  {
    topic: "Discourse Markers & Cohesion",
    level: "advanced",
    locale: "bn",
    title: "Discourse Markers: লেখার মেরুদণ্ড",
    intro:
      "বাক্য ঠিক থাকলেও অনুচ্ছেদে সংযোগ না থাকলে লেখা ভাঙা ইটের দেয়ালের মতো লাগে। Discourse marker আর cohesive device-ই প্রবন্ধকে এক টানে পড়ার যোগ্য করে।",
    sections: [
      {
        heading: "যুক্তির সেতু: বৈপরীত্য, ফলাফল ও স্বীকৃতি",
        explanation:
          "বৈপরীত্যের জন্য however, nevertheless, on the other hand; ফলাফলের জন্য consequently, as a result, hence; স্বীকৃতির জন্য admittedly, granted। মনে রাখবেন: however বা nevertheless হলো conjunctive adverb — দুই স্বাধীন clause জোটাতে এর আগে সেমিকোলন বা নতুন বাক্য দরকার, শুধু comma নয়। comma দিয়ে জোড়া বাক্য comma splice — এটাই সবচেয়ে সাধারণ উন্নত স্তরের ভুল।",
        examples: [
          {
            wrong: "Costs rose sharply, however the board approved the project.",
            right: "Costs rose sharply; however, the board approved the project.",
            note: "however-এর আগে সেমিকোলন বা ফুল স্টপ লাগবেই — খালি comma দিয়ে জোড়া comma splice।",
          },
          {
            wrong: "Despite of the criticism, the policy stayed.",
            right: "Despite the criticism, the policy stayed.",
            note: "Despite-এর পরে of আসে না; of থাকে in spite of-এ।",
          },
          {
            wrong: "Admitted, the plan has risks, but the upside is larger.",
            right: "Admittedly, the plan has risks, but the upside is larger.",
            note: "Admittedly/granted দিয়ে শুরু করলে বিপক্ষ যুক্তি আগে স্বীকার করে নেওয়ার মার্জিত ভঙ্গি তৈরি হয়।",
          },
        ],
      },
      {
        heading: "সূচক শব্দে সংযোগ: This, Such আর ক্রমসূচক",
        explanation:
          "আগের বাক্যের ধারণাকে this + summary noun দিয়ে টেনে আনুন: The trial collapsed. This failure delayed the approval by a year। Such + noun বোঝায় এ-জাতীয়: Such delays discourage investors। ক্রমসূচক marker (First, Subsequently, Finally) পরিকল্পিত লেখায় পথ দেখায়, তবে প্রতি বাক্যে নয় — বাড়তি link লেখাকে যান্ত্রিক করে।",
        examples: [
          {
            wrong: "The trial collapsed. It delayed the approval by a year.",
            right: "The trial collapsed. This failure delayed the approval by a year.",
            note: "It-এর বদলে this + summary noun — কোন বিষয়ের কথা, সন্দেহই থাকে না।",
          },
          {
            wrong: "Companies face such a problems during recessions.",
            right: "Companies face such problems during recessions.",
            note: "such + plural noun (article ছাড়া); such a শুধু singular countable-এ।",
          },
          {
            wrong: "Firstly we collected data, secondly we cleaned it, finally we published.",
            right: "First, we collected the data; next, we cleaned it; finally, we published the results.",
            note: "আধুনিক একাডেমিক স্টাইল First, Next, Finally পছন্দ করে, আর ধাপে ধাপে সেমিকোলন পরিষ্কার।",
          },
        ],
      },
    ],
    tips: [
      "এক অনুচ্ছেদে একই marker দুবার নয়; however-এর জায়গায় মাঝে মাঝে yet, still, even so আনুন।",
      "Speaking-এর ত্রয়ী রাখুন: সূচনায় To begin with, মাঝে That said, উপসংহারে All things considered।",
      "Marker বাঁচান: অর্থে সত্যিই ঘুর বা যোগ হলে তখনই link আনুন — প্রতি বাক্যে দিলে লেখা রোবটের মতো শোনায়।",
      "This/that + summary noun (this decision, such a shift) cohesion ব্যান্ডে সরাসরি নম্বর আনে — IELTS-এর Coherence & Cohesion-এ লাভ।",
    ],
    quiz: [
      {
        question: "Choose the correctly punctuated sentence:",
        options: [
          "The bid was rejected; however, we will reapply.",
          "The bid was rejected, however we will reapply.",
          "The bid was rejected however; we will reapply.",
          "The bid was rejected, however; we will reapply.",
        ],
        answer: 0,
        explanation: "however conjunctive adverb — তার আগে সেমিকোলন, পরে comma।",
      },
      {
        question: "Complete: The two products are similar; ___, ours costs half as much.",
        options: ["moreover", "however", "hence", "similarly"],
        answer: 1,
        explanation: "দামের বৈপরীত্য বোঝাতে however — বাকিগুলো যোগ, কারণ বা সমরূপতা দেখায়।",
      },
      {
        question: "Complete: The forecasts were optimistic; ___, actual sales fell short.",
        options: ["moreover", "likewise", "in fact", "for instance"],
        answer: 2,
        explanation: "in fact বাস্তবতার উল্টো ধাক্কা দেখায় — প্রত্যাশা বনাম বাস্তবতা।",
      },
      {
        question: "Complete: The project ran 40% over budget. ___ overruns are rare in this division.",
        options: ["So", "That", "This", "Such"],
        answer: 3,
        explanation: "Such + noun বোঝায় এ-জাতীয় — আগের বাক্যকে শ্রেণিতে ফেলে।",
      },
      {
        question: "Choose the correct sentence:",
        options: [
          "In spite the rain, the match continued.",
          "Despite of the rain, the match continued.",
          "In spite of the rain, the match continued.",
          "Despite the rain was falling, the match continued.",
        ],
        answer: 2,
        explanation: "in spite of / despite + noun phrase — of শুধু in spite-এর সঙ্গে, আর দুটোতেই পূর্ণ clause চলে না।",
      },
    ],
  },
  {
    topic: "Hedging & Softening Language",
    level: "advanced",
    locale: "bn",
    title: "Hedging & Softening: নম্র কিন্তু আত্মবিশ্বাসী ইংরেজি",
    intro:
      "একাডেমিক লেখা ও পেশাদার feedback-এ দাবি সামান্য নরম করা বুদ্ধিমত্তার লক্ষণ, দুর্বলতা নয়। Hedging শিখলে আত্মবিশ্বাস হারানো ছাড়াই বিনয়ী থাকা যায়।",
    sections: [
      {
        heading: "Hedge-এর হাতিয়ার: Modal, Adverb আর Seem/Appear/Tend",
        explanation:
          "might, may, could-এর মতো modal দাবির নিশ্চয়তা কমায়: The policy may reduce inequality। perhaps, possibly, arguably, somewhat, relatively-র মতো adverb-ও তা-ই করে। seem, appear, tend to ক্রিয়াকে পর্যবেক্ষণের সুরে নামিয়ে আনে: Respondents tend to overstate their income। প্রমাণের সীমা অনুযায়ী হাতিয়ার বেছে নেওয়াই পণ্ডিতির লক্ষণ।",
        examples: [
          {
            wrong: "Social media destroys teenagers' attention spans.",
            right: "Social media may undermine teenagers' attention spans.",
            note: "একটি may দাবিটাকে পর্যবেক্ষণভিত্তিক সম্ভাবনায় নামায় — গবেষণার ভাষার মানদণ্ড।",
          },
          {
            wrong: "The results prove that the vaccine works.",
            right: "The results suggest that the vaccine is effective.",
            note: "prove সর্বোচ্চ দাবি; suggest/indicate প্রমাণের সীমা স্বীকার করে — পর্যালোচনায় নিরাপদ।",
          },
          {
            wrong: "This approach is obviously better.",
            right: "This approach appears to be more effective.",
            note: "obviously পাঠককে অপমান করতে পারে; appears to be তুলনামূলক মূল্যায়নে শান্ত।",
          },
        ],
      },
      {
        heading: "Softening Feedback: সমালোচনা যেন মেনে নেওয়া যায়",
        explanation:
          "সমালোচনার আগে I am afraid, I wonder if, It seems that জাতীয় ঢাল দিলে শ্রোতার প্রতিরোধ কমে। আদেশ প্রশ্নে রূপ নিতে পারে: Could we revisit the timeline? — আসলে অনুরোধ। Impersonal কাঠামো (There appears to be a problem / The report has not been updated) ব্যক্তিকে লক্ষ্য থেকে সরিয়ে সমস্যার ওপর আলো ফেলে।",
        examples: [
          {
            wrong: "Your introduction is too long.",
            right: "I am afraid the introduction feels a little long — perhaps trim the background section.",
            note: "I am afraid + perhaps সমালোচনাকে পরামর্শে রূপ দেয়, মর্মান্তিক আঘাতে নয়।",
          },
          {
            wrong: "You made a mistake in the invoice.",
            right: "It seems there may be a discrepancy in the invoice — could you take a look?",
            note: "ব্যক্তির বদলে সমস্যার ওপর আলো, আর প্রশ্নে সমাধানের দরজা খোলা।",
          },
          {
            wrong: "Send me the revised file today.",
            right: "Would it be possible to send me the revised file today?",
            note: "সরাসরি আদেশের বদলে ভদ্র প্রশ্ন — পেশাদার email-এর সোনালি নিয়ম।",
          },
        ],
      },
    ],
    tips: [
      "প্রতিটি দাবিতে hedge দেবেন না; প্রমাণ দুর্বল সেখানেই hedge দিন — অতিরিক্ত hedging লেখাকে অনিশ্চিত লাগায়।",
      "may আর might-এর সূক্ষ্মতা: may = সম্ভাবনা বেশি, might = আরও দূরে; দাবির শক্তি অনুযায়ী বেছে নিন।",
      "Feedback-এর সূত্র: প্রশংসা → I am afraid/It seems দিয়ে সমস্যা → প্রশ্নে প্রস্তাব — তিন ধাপে সমালোচনা গিলে যায়।",
      "বাংলার বোধহয় বা মনে হচ্ছে-র জন্য একটি ইংরেজি শব্দ নেই — perhaps, arguably, it seems আলাদা সূক্ষ্মতা বহন করে; পুরো phrase হিসেবে শিখুন।",
    ],
    quiz: [
      {
        question: "Choose the most appropriately hedged academic statement:",
        options: [
          "Poverty causes crime.",
          "Poverty might contribute to higher crime rates.",
          "Poverty definitely causes all crime.",
          "Crime is never related to poverty.",
        ],
        answer: 1,
        explanation: "might contribute — সম্ভাবনা স্বীকার করে নেওয়া গবেষণার ভাষার মান।",
      },
      {
        question: "Complete the softened request: ___ you possibly review the draft by Thursday?",
        options: ["Will", "Should", "Could", "Must"],
        answer: 2,
        explanation: "Could you possibly... — ভদ্র অনুরোধের মানক কাঠামো।",
      },
      {
        question: "Which verb best hedges the claim: The data ___ a link between sleep and memory.",
        options: ["proves", "confirms", "establishes", "suggests"],
        answer: 3,
        explanation: "suggests দাবির শক্তি কমিয়ে পর্যবেক্ষণের সুরে রাখে — বাকিগুলো পূর্ণ নিশ্চয়তা।",
      },
      {
        question: "Choose the softest professional correction:",
        options: [
          "This is wrong.",
          "There appears to be an outdated figure here — could we double-check?",
          "You failed to update the figures.",
          "The figures are a disaster.",
        ],
        answer: 1,
        explanation: "সমস্যার ওপর আলো + প্রশ্নে প্রস্তাব — সবচেয়ে নম্র ও কার্যকর।",
      },
      {
        question: "Complete the hedged generalisation: Respondents ___ to underestimate their spending.",
        options: ["tend", "tends", "is tending", "to tend"],
        answer: 0,
        explanation: "Plural subject-এ tend; সাধারণ প্রবণতা বোঝাতে simple present।",
      },
    ],
  },
  {
    topic: "Advanced Reported Speech",
    level: "advanced",
    locale: "bn",
    title: "Advanced Reported Speech: শব্দ নয়, অর্থ বদলানো",
    intro:
      "C1 স্তরে reported speech মানে শুধু tense বদলানো নয় — সঠিক reporting verb, তার প্যাটার্ন আর অর্থের রঙ। নিউজ, মিনিট ও প্রতিবেদনে এর নিখুঁত ব্যবহারই পেশাদারিত্বের চিহ্ন।",
    sections: [
      {
        heading: "Reporting Verb Patterns: কোন ক্রিয়ার পরে কী",
        explanation:
          "প্রতিটি reporting verb-এর নিজস্ব প্যাটার্ন আছে: admit/deny/suggest + -ing; advise/warn/remind/urge + object + (not) to-infinitive; accuse somebody of / blame somebody for / congratulate somebody on + -ing। ক্রিয়া ভুল প্যাটার্নে বসালে ব্যাকরণ আর অর্থ দুটোই ভাঙে। এগুলো tense-এর চেয়েও গুরুত্বপূর্ণ — এখানেই C1-এর বেশিরভাগ ভুল।",
        examples: [
          {
            wrong: "He suggested to postpone the launch.",
            right: "He suggested postponing the launch.",
            note: "suggest-এর পরে to-infinitive আসে না; -ing form বা that-clause বসে।",
          },
          {
            wrong: "She warned me staying out too late.",
            right: "She warned me not to stay out too late.",
            note: "warn-এর প্যাটার্ন object + (not) to-infinitive।",
          },
          {
            wrong: "They accused him for leaking the memo.",
            right: "They accused him of leaking the memo.",
            note: "accuse somebody of something — preposition নির্দিষ্ট; blame-এ জুটি উল্টো (blame him for it)।",
          },
        ],
      },
      {
        heading: "Distancing ও Journalism: সংবাদের distal ছন্দ",
        explanation:
          "সংবাদে ঘটনাকে reporter-এর সময় থেকে দূরে রাখতে past tense ব্যবহৃত হয় যদিও বক্তব্যটি এখনো সত্য: The minister said the talks were ongoing — আলোচনা আসলে এখনো চলছে। এটাকে distancing বলে। আর reporting verb নিজেই বিশ্বাসযোগ্যতার ইঙ্গিত দেয়: claim/allege মানে প্রমাণ নেই, admit মানে স্বীকারোক্তি।",
        examples: [
          {
            wrong: "Police said the suspect has confessed.",
            right: "Police said the suspect had confessed.",
            note: "সংবাদে backshift মানে মিথ্যা নয় — ঘটনাকে reporter-এর সময় থেকে দূরে রাখার রীতি।",
          },
          {
            wrong: "The report alleged that the scheme is a success.",
            right: "The report claimed that the scheme was a success.",
            note: "allege মানে বিনা প্রমাণে অভিযোগ (সাধারণত অনৈতিক কিছুর); প্রশংসার দাবিতে claim শোভে।",
          },
          {
            wrong: "He said he will support the strike.",
            right: "He said he would support the strike.",
            note: "will → would — উদ্ধৃতিটি আজও সত্য হলেও সংবাদের distal রীতিতে backshift চলে।",
          },
        ],
      },
    ],
    tips: [
      "Reporting verb-এর রঙ চিনুন: state নিরপেক্ষ, claim সন্দেহজনক দাবি, admit স্বীকারোক্তি, deny অস্বীকার — নিউজ পড়তে পড়তে নির্বাচনের ধরন খেয়াল করুন।",
      "বক্তব্য এখনো সত্য ও তাৎক্ষণিক হলে backshift বাদও চলে (She said she loves you) — কিন্তু নথিতে ধারাবাহিক backshift-ই নিরাপদ।",
      "প্রশ্নের রিপোর্টে auxiliary উল্টোয় না: Where do you live? → He asked where I lived — do/did সম্পূর্ণ বাদ।",
      "সভার মিনিটের জন্য জোড়া তৈরি করুন: suggested, agreed, noted, requested, expressed concern — এতে নথি প্রফেশনাল হয়।",
    ],
    quiz: [
      {
        question: "Report correctly: 'Don't touch the wires,' said the engineer.",
        options: [
          "The engineer suggested to not touch the wires.",
          "The engineer warned us not to touch the wires.",
          "The engineer accused us of touching the wires.",
          "The engineer reminded us touching the wires.",
        ],
        answer: 1,
        explanation: "সতর্কবার্তার জন্য warn + object + not to-infinitive।",
      },
      {
        question: "Complete: He denied ___ the confidential file.",
        options: ["to leak", "for leaking", "leaking", "that he leaks"],
        answer: 2,
        explanation: "deny-এর পরে -ing form — denied leaking।",
      },
      {
        question: "Complete: The committee agreed ___ the deadline by a week.",
        options: ["that extend", "to extend", "extending", "for extending"],
        answer: 1,
        explanation: "agree + to-infinitive — agreed to extend।",
      },
      {
        question: "Report correctly: When did the audit begin?",
        options: [
          "She asked when did the audit begin.",
          "She asked when began the audit.",
          "She asked when the audit did begin.",
          "She asked when the audit began.",
        ],
        answer: 3,
        explanation: "Reported question-এ auxiliary উল্টোয় না, do/did বাদ — শুধু tense backshift।",
      },
      {
        question: "Which reporting verb signals an unproven accusation?",
        options: ["confirmed", "announced", "alleged", "recalled"],
        answer: 2,
        explanation: "allege মানে বিনা প্রমাণে অভিযোগ করা — সংবাদে সতর্ক নির্বাচন।",
      },
    ],
  },
  {
    topic: "Nominalisation & Academic Style",
    level: "advanced",
    locale: "bn",
    title: "Nominalisation & Academic Style: বিশেষ্যের ঘন লেখা",
    intro:
      "একাডেমিক ও প্রশাসনিক ইংরেজিতে ক্রিয়া-বিশেষণকে বিশেষ্যে রূপান্তর (nominalisation) লেখাকে ঘন, বস্তুনিষ্ঠ ও সংক্ষিপ্ত করে। রিসার্চ পেপার আর অফিসিয়াল রিপোর্টের ভাষা এই কৌশলেই দাঁড়ায়।",
    sections: [
      {
        heading: "Verb → Noun: রূপান্তরের যন্ত্র",
        explanation:
          "The government decided... → The government's decision...; Sales increased sharply → The sharp increase in sales। -tion, -ment, -ance, -cy প্রত্যয় এখানে কাজ করে: analyse → analysis, implement → implementation, fail → failure, efficient → efficiency। বিশেষ্য হলে কর্তা পেছনে সরে যেতে পারে — এজন্যই বিজ্ঞানের লেখায় এর সুনাম ও কুনাম দুটোই আছে।",
        examples: [
          {
            wrong: "The team failed to meet the deadline, which annoyed the client.",
            right: "The team's failure to meet the deadline annoyed the client.",
            note: "failure বিশেষ্যে গেলে ঘটনাটা এক শব্দে প্রকাশিত হয় এবং বাক্য সংক্ষিপ্ত ও ফরমাল হয়।",
          },
          {
            wrong: "We analysed the data carefully, and we found a pattern.",
            right: "Careful analysis of the data revealed a pattern.",
            note: "analysis + revealed জুটি একাডেমিক স্টাইলের প্রতিনিধি — adjective-ও বিশেষণের সঙ্গে সরে আসে।",
          },
          {
            wrong: "Because the prices increased suddenly, many shoppers stopped buying.",
            right: "The sudden increase in prices discouraged many shoppers.",
            note: "increase বিশেষ্যে গেলে কারণ-ফল এক বাক্যে — ঘনত্ব বাড়ে।",
          },
        ],
      },
      {
        heading: "কখন ব্যবহার করবেন, কখন এড়াবেন",
        explanation:
          "Nominalisation cohesion-ও দেয়: The delay was unexpected. This delay cost the firm a contract। কিন্তু পরপর বাক্যে বারবার বিশেষ্য-স্তূপ (over-nominalisation) লেখাকে ভারী ও অস্পষ্ট করে। নিয়ম সহজ: যেখানে ঘটনাটা আলোচনার বিষয় হয়ে ওঠে সেখানে বিশেষ্য করুন, বাকি জায়গায় ক্রিয়াই রাখুন।",
        examples: [
          {
            wrong: "The undertaking of the implementation of the new system commenced.",
            right: "They began implementing the new system.",
            note: "টানা তিন-চার abstract noun-এর স্তূপ পাঠককে ডুবিয়ে মারে — ক্রিয়ায় ফিরে যান।",
          },
          {
            wrong: "The delay was unexpected. The delay cost us the contract. The delay also hurt morale.",
            right: "The delay was unexpected: it cost us the contract and hurt morale.",
            note: "একবার this/it দিয়ে টেনে নিন — একই বিশেষ্যের পুনরাবৃত্তি নয়।",
          },
          {
            wrong: "There was a decision by the committee to postpone the vote by the members.",
            right: "The committee decided to postpone the vote.",
            note: "দায় স্পষ্ট রাখতে চাইলে ক্রিয়া-নির্ভর বাক্যই সবচেয়ে পরিষ্কার।",
          },
        ],
      },
    ],
    tips: [
      "প্যারাগ্রাফের ছন্দ: শুরুতে nominalisation দিয়ে বিষয় পরিচয়, পরের বাক্যে ক্রিয়া দিয়ে বিশ্লেষণ — এটাই একাডেমিক রীতি।",
      "মূল রূপান্তরগুলো মুখস্থ করুন: decide → decision, analyse → analysis, require → requirement, inform → information (uncountable)।",
      "Nominalisation-এর preposition শিখুন: analysis of, increase in, failure to, access to, impact on — এখানেই বেশিরভাগ ভুল।",
      "প্রতি বাক্যে দুটির বেশি abstract noun জমলে সন্দেহ করুন — পাঠকের প্রথম অভিযোগ থাকে heavy sentences।",
    ],
    quiz: [
      {
        question: "Convert to nominalised academic style: Sales dropped suddenly, so we revised the forecast.",
        options: [
          "The sudden drop in sales led to a revision of the forecast.",
          "The suddenly drop of sales led to revise the forecast.",
          "Sales' sudden dropped led to forecast revisioning.",
          "The drop sudden in sales revised the forecast.",
        ],
        answer: 0,
        explanation: "sudden drop in sales — adjective + বিশেষ্য + সঠিক preposition in।",
      },
      {
        question: "Choose the correct collocation: The report provides an in-depth ___ of the crisis.",
        options: ["analyse", "analysis", "analysing", "analyses"],
        answer: 1,
        explanation: "an in-depth analysis of — এখানে বিশেষ্য রূপই দরকার।",
      },
      {
        question: "Complete: There has been a significant increase ___ energy costs.",
        options: ["of", "on", "for", "in"],
        answer: 3,
        explanation: "increase in something — preposition নির্দিষ্ট।",
      },
      {
        question: "Which sentence is clearest (avoids over-nominalisation)?",
        options: [
          "The undertaking of the examination of the applications was completed.",
          "Examination of the applications was undertaken by us in completion.",
          "We examined the applications.",
          "The examination's undertaking of applications happened.",
        ],
        answer: 2,
        explanation: "ক্রিয়া-নির্ভর সরল বাক্যই সবচেয়ে স্পষ্ট — দায়ও পরিষ্কার।",
      },
      {
        question: "Complete: Their failure ___ comply with the rules led to a fine.",
        options: ["in", "of", "for", "to"],
        answer: 3,
        explanation: "failure to + base verb — failure-এর জুটি to-infinitive।",
      },
    ],
  },
  {
    topic: "Ellipsis & Substitution",
    level: "advanced",
    locale: "bn",
    title: "Ellipsis & Substitution: পুনরাবৃত্তি নয়, প্রবহ",
    intro:
      "দক্ষ বক্তা একই শব্দ বারবার বলেন না — ellipsis আর substitution দিয়ে বাক্য হালকা ও প্রবহমান রাখেন। কথ্যা-লিখিত দুই ক্ষেত্রেই এটাই প্রাকৃতিকতার চিহ্ন।",
    sections: [
      {
        heading: "Ellipsis: যা বোঝা যায় তা আবার বলা হয় না",
        explanation:
          "সমান্তরাল clause-এ পুনরাবৃত্ত অংশ বাদ দেওয়া যায়: She can speak French, and he can too — দ্বিতীয় speak French বাদ। Infinitive-এর পরে to-ই যথেষ্ট: I did not go, but I wanted to। when/while/if/where + ellipsis-ও চলে: When in doubt, ask। শর্ত একটাই — বাদ পড়া অংশ আগের বাক্য থেকে স্পষ্টভাবে পুনরুদ্ধারযোগ্য হতে হবে।",
        examples: [
          {
            wrong: "She has finished the report, and he has finished the report too.",
            right: "She has finished the report, and he has too.",
            note: "দ্বিতীয় clause-এ finished the report বাদ — auxiliary has-ই পুরো অর্থ বহন করে।",
          },
          {
            wrong: "Will you join us for lunch? — I would love to join you for lunch.",
            right: "Will you join us for lunch? — I would love to.",
            note: "to-র পরে সব বাদ — এটাই স্বাভাবিক কথ্যা ছন্দ।",
          },
          {
            wrong: "When you are in doubt about the figures, ask the accounts team.",
            right: "When in doubt about the figures, ask the accounts team.",
            note: "when/if/while + (subject + be) বাদ দিলে ফরমাল সংক্ষিপ্ততা আসে।",
          },
        ],
      },
      {
        heading: "Substitution: do, one, so/not",
        explanation:
          "ক্রিয়ার প্রতিস্থাপনে do বা do so: He promised to help, and he did। বিশেষ্যের প্রতিস্থাপনে one/ones: I lost my umbrella, so I bought a new one। পুরো clause-এর প্রতিস্থাপনে so (হ্যাঁ-সুরে) আর not (না-সুরে): I believe so / I hope not। think, believe, hope, expect, afraid-এর সঙ্গে so/not সহজাত জুটি।",
        examples: [
          {
            wrong: "She promised to email the minutes, and she emailed the minutes.",
            right: "She promised to email the minutes, and she did.",
            note: "did দিয়ে পুরো verb phrase-এর প্রতিস্থাপন — পুনরাবৃত্তি অপ্রয়োজনীয়।",
          },
          {
            wrong: "This chair is broken. Please bring that chair.",
            right: "This chair is broken. Please bring another one.",
            note: "one গণনীয় বিশেষ্যের প্রতিস্থাপক; that chair বললে অর্থ বদলে যেতে পারে।",
          },
          {
            wrong: "Will the deal close this month? — I do not believe that the deal will close this month.",
            right: "Will the deal close this month? — I do not believe so.",
            note: "believe/think/hope-এর পরে so/not-ই পুরো that-clause-এর বিকল্প।",
          },
        ],
      },
    ],
    tips: [
      "Ellipsis-এর সোনালি নিয়ম: বাদ দেওয়ার পরে অর্থ ambiguous হলে শব্দ রেখে দিন — সংক্ষিপ্ততার চেয়ে স্পষ্টতা বড়।",
      "do so শুধু ইচ্ছাকৃত, নিয়ন্ত্রিত কাজের প্রতিস্থাপনে চলে; love, know-এর মতো অবস্থা-ক্রিয়ায় নয়।",
      "I hope so ঠিক, কিন্তু নেগেটিভে I hope not — I do not hope so কখনো নয়।",
      "সংক্ষিপ্ত উত্তর প্রশ্নের auxiliary ধরে: Are you...? → Yes, I am। Do you...? → No, I do not — auxiliary মেলানোই নিয়ম।",
    ],
    quiz: [
      {
        question: "Choose the natural short answer: Are you coming to the workshop?",
        options: ["Yes, I am coming to the workshop.", "Yes, I do.", "Yes, I am.", "Yes, I coming."],
        answer: 2,
        explanation: "উত্তর প্রশ্নের auxiliary (are) ধরে — Yes, I am।",
      },
      {
        question: "Complete the reply: I have never tried sushi. — Neither ___.",
        options: ["I have", "I do", "have I", "do I"],
        answer: 2,
        explanation: "Neither/nor-এর পরে inversion — Neither have I।",
      },
      {
        question: "Choose the correct substitution: He said the parts would arrive on Monday, but they ___.",
        options: ["did not do", "did not", "did not so", "not did"],
        answer: 1,
        explanation: "ক্রিয়ার প্রতিস্থাপক did — they did not।",
      },
      {
        question: "Complete: Will prices fall? — I hope ___.",
        options: ["not", "not to", "no", "will not"],
        answer: 0,
        explanation: "hope-এর পরে clause-প্রতিস্থাপক not — I hope not।",
      },
      {
        question: "Complete: I can attend on Friday, and my colleague can ___.",
        options: ["too can", "too", "as well to", "also can"],
        answer: 1,
        explanation: "auxiliary + too — my colleague can too।",
      },
    ],
  },
  {
    topic: "Collocations & Word Partnerships",
    level: "advanced",
    locale: "bn",
    title: "Collocations: স্বাভাবিক ইংরেজির শব্দজুটি",
    intro:
      "ব্যাকরণ শুদ্ধ হলেও শব্দজুটি অস্বাভাবিক হলে ইংরেজি পরীক্ষার প্যাঁচানো ইংরেজি শোনায়। Collocation আয়ত্তে থাকলে বাক্য হয়ে ওঠে স্থানীয়দের মতো প্রবহমান।",
    sections: [
      {
        heading: "Delexical Verbs: make, take, have, give, do",
        explanation:
          "অনেক সময় আসল অর্থ বিশেষ্যে থাকে, ক্রিয়াটা শুধু বাহক: make a decision, take a risk, have an argument, give a speech, do research। ক্রিয়াটা নিজে অর্থ হারিয়ে ফেলে বলে কোন বিশেষ্যের সঙ্গে কোনটা — তা জোড়ায় জোড়ায় শিখতে হয়: make a mistake (do নয়), take a photo (make নয়)।",
        examples: [
          {
            wrong: "We need to do a decision before Friday.",
            right: "We need to make a decision before Friday.",
            note: "decision-এর সঙ্গী make; do-র জুটি homework, research-এর মতো কাজ।",
          },
          {
            wrong: "The team did a big mistake in the calculations.",
            right: "The team made a serious mistake in the calculations.",
            note: "do a mistake কখনো নয় — make a mistake; আর serious mistake-ই প্রচলিত সঙ্গী।",
          },
          {
            wrong: "I will do a photo of the building.",
            right: "I will take a photo of the building.",
            note: "photo-র ক্রিয়া take — do শুধু do a photoshoot-এর মতো নির্দিষ্ট ক্ষেত্রে।",
          },
        ],
      },
      {
        heading: "বিশেষণ-সঙ্গী আর Intensifier-এর শক্তি",
        explanation:
          "কিছু বিশেষণ নির্দিষ্ট সঙ্গী চায়: heavy rain (strong নয়), strong coffee, a narrow escape, a close call। Intensifier-ও collocation: utterly exhausted, deeply concerned, bitterly disappointed, fully aware — very-র বদলে এই অর্থপূর্ণ জোড়াই ভাষাকে সমৃদ্ধ করে। শেখার পদ্ধতি: বিচ্ছিন্ন শব্দ নয়, পুরো phrase হিসেবে।",
        examples: [
          {
            wrong: "There was strong rain all afternoon.",
            right: "There was heavy rain all afternoon.",
            note: "rain-এর প্রচলিত সঙ্গী heavy; strong যায় coffee, argument, evidence-এর সঙ্গে।",
          },
          {
            wrong: "I am very exhausted after the flight.",
            right: "I am utterly exhausted after the flight.",
            note: "চরম অর্থের বিশেষণ (exhausted, delighted, terrified) very নেয় না — utterly/completely লাগে।",
          },
          {
            wrong: "We are strongly concerned about the delays.",
            right: "We are deeply concerned about the delays.",
            note: "concerned-এর সঙ্গী deeply/seriously; strongly যায় recommend, oppose, suspect-এর সঙ্গে।",
          },
        ],
      },
    ],
    tips: [
      "নতুন শব্দ শেখার সময় অন্তত একটি প্রচলিত সঙ্গীসহ নোট করুন — শুধু decision নয়, make a decision।",
      "বাংলা থেকে সরাসরি অনুবাদে জুটি ভাঙে — কড়া বৃষ্টি হলেও ইংরেজিতে heavy rain; ইংরেজি থেকে ইংরেজিতে শিখুন।",
      "IELTS-এ collocation-এর নির্ভুলতা Lexical Resource ব্যান্ডে সরাসরি নম্বর আনে — সাহসী ভুল জোড়ার চেয়ে নিরাপদ সঠিক জোড়া ভালো।",
      "নিজের ঘন ঘন ভুল জোড়া খুঁজুন (do/make, say/tell, spend/pay) — লিখে লিখে ঠিক জোড়া গায়ে বসান।",
    ],
    quiz: [
      {
        question: "Choose the correct collocation: The company will ___ a major announcement tomorrow.",
        options: ["do", "make", "give", "take"],
        answer: 1,
        explanation: "make an announcement — প্রচলিত জুটি।",
      },
      {
        question: "Complete the collocation: The patient is in ___ condition after the surgery.",
        options: ["critical", "seriously", "strong", "heavy"],
        answer: 0,
        explanation: "in critical condition — স্থির প্রচলিত জুটি; বাকিগুলো এখানে অস্বাভাবিক।",
      },
      {
        question: "Choose the natural intensifier: I am ___ grateful for your prompt reply.",
        options: ["deeply", "strongly", "highly", "widely"],
        answer: 0,
        explanation: "deeply grateful — প্রচলিত জোড়া; strongly/highly এখানে মানায় না।",
      },
      {
        question: "Choose the correct collocation: She ___ a speech at the conference.",
        options: ["did", "made", "gave", "spoke"],
        answer: 2,
        explanation: "give a speech — মানক জুটি; spoke a speech নয়।",
      },
      {
        question: "Complete: The report had a ___ impact on policy.",
        options: ["powerful", "heavy", "loud", "tall"],
        answer: 0,
        explanation: "impact-এর সঙ্গী powerful/significant/profound; heavy যায় rain, traffic-এ।",
      },
    ],
  },
  {
    topic: "Register: Formal vs Informal English",
    level: "advanced",
    locale: "bn",
    title: "Register: Formal বনাম Informal English",
    intro:
      "একই অর্থ ভিন্ন পরিস্থিতিতে ভিন্ন পোশাকে বলা হয় — email-এ postpone, বন্ধুর সঙ্গে put off। Register বুঝে বাছাই করাই C1 স্তরের সবচেয়ে দৃশ্যমান স্বাক্ষর।",
    sections: [
      {
        heading: "শব্দের Register: Phrasal Verb বনাম Latinate",
        explanation:
          "ফরমাল লেখা phrasal verb কমায়, লাতিন-বংশোদ্ভূত শব্দ আনে: put off → postpone, look into → investigate, carry out → conduct, find out → determine। কথ্যা দিকে যাওয়া মানে contractions (don't, can't), আলাপচারিতার শব্দ (kids, a lot of, stuff)। শব্দ ভালো-খারাপ নয় — উপযুক্ততাই মাপকাঠি।",
        examples: [
          {
            wrong: "We will look into the complaint and get back to you shortly. (formal complaint reply-তে)",
            right: "We shall investigate the complaint and respond shortly.",
            note: "আনুষ্ঠানিক উত্তরে investigate + respond — register পরিষ্কার হয়ে যায়।",
          },
          {
            wrong: "The study was conducted on kids aged 5 to 10. (গবেষণাপত্রে)",
            right: "The study was conducted on children aged 5 to 10.",
            note: "kids কথ্যা; গবেষণাপত্রে children বা participants।",
          },
          {
            wrong: "Dear Sir, I wanna know about the vacancy.",
            right: "Dear Sir, I would like to enquire about the vacancy.",
            note: "wanna/gonna শুধু কথ্যায়; ফরমাল চিঠিতে would like to।",
          },
        ],
      },
      {
        heading: "বাক্যগঠনে Register: আদেশ, Contractions আর ভদ্র অনুরোধ",
        explanation:
          "ফরমাল ভাষা সরাসরি আদেশ এড়িয়ে impersonal কাঠামো নেয়: Applicants must submit... (You must... নয়)। ফরমাল লেখায় contraction বাদ: It is not available (not It's not available)। অনুরোধ বাড়িয়ে বলা হয়: We would appreciate it if you could... — দীর্ঘ কিন্তু মার্জিত। Informal-এ ছোট বাক্য, প্রশ্ন, ব্যক্তিগত সুর।",
        examples: [
          {
            wrong: "Send the documents ASAP, and do not forget the invoice. (ফরমাল email-এ)",
            right: "Please send the documents at your earliest convenience, including the invoice.",
            note: "ASAP আর আদেশ-সুর জরুরি চ্যাটে চলে; ফরমাল চিঠিতে সৌজন্যমূলক বাক্যাংশ প্রত্যাশিত।",
          },
          {
            wrong: "It's crucial that everyone attends; we can't delay this. (official circular-এ)",
            right: "It is crucial that all members attend; the matter cannot be delayed.",
            note: "contraction বাদ + impersonal কাঠামো circular-এর গাম্ভীর্য বাড়ায়।",
          },
          {
            wrong: "You are kindly requested to grant me leave for three days.",
            right: "I would be grateful if you could grant me three days' leave.",
            note: "kindly requested ভারী পুরনো প্রশাসনিক ইংরেজি; আধুনিক ফরমাল সুর I would be grateful।",
          },
        ],
      },
    ],
    tips: [
      "Email লেখার আগে ভাবুন: পাঠক কে? প্রতিষ্ঠান হলে formal-neutral, ঘনিষ্ঠ সহকর্মী হলে neutral-informal — সন্দেহ থাকলে neutral-ই নিরাপদ।",
      "ফরমাল লেখা পাঠানোর আগে contractions (don't, it's, can't) খুঁজে বার করে সরান — find and replace ভালো বন্ধু।",
      "IELTS General Task 1-এ register নম্বরের অংশ: চিঠি বন্ধুকে না ম্যানেজারকে — tone না মিললে ব্যান্ড কমে।",
      "নিজের register-থিসরাস গড়ুন: put off/postpone, ask for/request, help/assist, get/receive — জোড়া করে নোট করুন।",
    ],
    quiz: [
      {
        question: "Choose the most formal option: The committee will ___ the proposal next week.",
        options: ["check out", "look at", "review", "go over"],
        answer: 2,
        explanation: "review — ফরমাল single-word verb; বাকিগুলো phrasal বা কথ্যা।",
      },
      {
        question: "Which sentence suits a formal complaint letter?",
        options: [
          "I am really fed up with your service.",
          "I am writing to express my dissatisfaction with the service provided.",
          "Your service is terrible and I am angry.",
          "Your service is not good at all, sorry.",
        ],
        answer: 1,
        explanation: "express my dissatisfaction — অভিযোগপত্রের মানক ফরমাল ফ্রেজ।",
      },
      {
        question: "Choose the formal equivalent of the informal verb buy:",
        options: ["purchase", "grab", "pick up", "get"],
        answer: 0,
        explanation: "purchase — ফরমাল; বাকিগুলো কথ্যা।",
      },
      {
        question: "Choose the appropriately informal sentence for a text to a close colleague:",
        options: [
          "I would be most grateful if you could forward the file at your earliest convenience.",
          "Could you send me the file when you get a sec?",
          "Kindly forward the aforementioned file.",
          "The file's transmission is requested.",
        ],
        answer: 1,
        explanation: "ঘনিষ্ঠ সহকর্মীর টেক্সটে হালকা কথ্যা সুর ঠিক — বাকিগুলো অতিফরমাল বা কৃত্রিম।",
      },
      {
        question: "Complete formally: We ___ it if you could confirm attendance by Friday.",
        options: ["would appreciate", "will appreciate a lot", "are appreciating", "appreciate much"],
        answer: 0,
        explanation: "We would appreciate it if you could... — ফরমাল অনুরোধের মানক কাঠামো।",
      },
    ],
  },
  {
    topic: "Advanced Tense & Aspect Nuances",
    level: "advanced",
    locale: "bn",
    title: "Advanced Tense & Aspect: ক্রিয়ার সূক্ষ্ম রঙ",
    intro:
      "একই ঘটনা ভিন্ন aspect-এ বললে ভাব বদলে যায় — স্থায়িত্ব, বিরক্তি, আগাম পরিকল্পনা সবই ক্রিয়ার রঙে প্রকাশ পায়। C1 স্তরে এই সূক্ষ্মতাই প্রকৃত দক্ষতার প্রমাণ।",
    sections: [
      {
        heading: "Continuous-এর অতিরিক্ত অর্থ: বিরক্তি, অস্থায়ীত্ব, State Verbs",
        explanation:
          "always/constantly + continuous বিরক্তি বা অভিযোগ বোঝায়: He is always interrupting me — শুধু ঘন ঘন নয়, রাগও আছে। Continuous অস্থায়ী পরিস্থিতি দেখায়: I am living with my parents at the moment (অস্থায়ী) বনাম I live with my parents (স্থায়ী)। State verb প্রসঙ্গে গতিময় হলে অর্থ বদলায়: The sauce tastes great (অবস্থা) বনাম She is tasting the sauce (কাজ)।",
        examples: [
          {
            wrong: "He always interrupts me in meetings. (অভিযোগের সুরে)",
            right: "He is always interrupting me in meetings.",
            note: "always + -ing অভ্যাসের সঙ্গে বিরক্তি যোগ করে — অভিযোগের নিখুঁত রূপ।",
          },
          {
            wrong: "I am hating this weather this week.",
            right: "I hate this weather we are having this week.",
            note: "hate সাধারণত continuous নেয় না; অস্থায়ী আবহাওয়া continuous নেয় — this weather we are having।",
          },
          {
            wrong: "She is owning two apartments in Gulshan.",
            right: "She owns two apartments in Gulshan.",
            note: "own, know, believe-এর মতো state verb সাধারণত continuous-এ আসে না।",
          },
        ],
      },
      {
        heading: "Future in the Past আর Perfect-এর পটভূমি",
        explanation:
          "অতীতের দৃষ্টিকোণ থেকে ভবিষ্যৎ বলতে was/were going to, was about to, was due to ব্যবহৃত হয়: We were about to sign the deal when the investor pulled out। Past perfect continuous দীর্ঘ পূর্ববর্তী প্রচেষ্টার পটভূমি দেখায়: She had been working there for a decade before the reorganisation। সংবাদে এই aspect নতুন ঘটনার নিচে মাটি তৈরি করে।",
        examples: [
          {
            wrong: "We would sign the contract when the investor pulled out.",
            right: "We were about to sign the contract when the investor pulled out.",
            note: "ঠিক ঘটনার দ্বারপ্রান্তে থাকা বোঝাতে was/were about to — would এখানে ভুল সংকেত দেয়।",
          },
          {
            wrong: "The team worked on the prototype for months before the funding came through, so they were exhausted.",
            right: "The team had been working on the prototype for months before the funding came through, so they were exhausted.",
            note: "had been working দেখায় ক্লান্তির কারণ — দীর্ঘ পূর্ববর্তী প্রচেষ্টা।",
          },
          {
            wrong: "By the time we reached the hall, the keynote speaker already finished.",
            right: "By the time we reached the hall, the keynote speaker had already finished.",
            note: "অতীতের এক ঘটনার আগে সম্পন্ন অন্য ঘটনায় past perfect আবশ্যক।",
          },
        ],
      },
    ],
    tips: [
      "বাংলার করছিলাম আর করেছিলাম-এর পার্থক্য ইংরেজির continuous/perfect পার্থক্যের কাছাকাছি — বাংলা aspect-এর অনুভূতি দিয়ে ম্যাপ করুন।",
      "সংবাদের ছন্দ লক্ষ করুন: প্রথম বাক্যে simple past (নতুন ঘটনা), পরের বাক্যে past perfect (প্রেক্ষাপট) — নিজের লেখায় অনুকরণ করুন।",
      "was going to ব্যবহার করুন যখন পরিকল্পনা বাস্তবায়িত হয়নি: I was going to call you, but I forgot — ব্যাখ্যা বা আফসোসের প্রাকৃতিক রূপ।",
      "State verb-এর গতিময় মুখ চিনুন: be being difficult (এখনকার আচরণ) ঠিক, be knowing ভুল — ক্রিয়াপ্রতি অর্থ বদলায়।",
    ],
    quiz: [
      {
        question: "Choose the sentence that expresses annoyance: My neighbour ___ loud music late at night.",
        options: ["plays", "has played", "is always playing", "used to play"],
        answer: 2,
        explanation: "is always + -ing — ঘন ঘন ঘটনার সঙ্গে বিরক্তির সুর।",
      },
      {
        question: "Complete: I ___ to resign, but then the promotion came through.",
        options: ["was going", "will go", "have gone", "am going"],
        answer: 0,
        explanation: "was going to = অতীতের পরিকল্পনা যা বাস্তবায়িত হয়নি।",
      },
      {
        question: "Complete: By the time the auditors arrived, the manager ___ the files.",
        options: ["already removed", "has already removed", "had already removed", "was already removed"],
        answer: 2,
        explanation: "অতীতের আগের অতীত — past perfect (had already removed)।",
      },
      {
        question: "Choose the correct form: This soup ___ delicious.",
        options: ["is tasting", "is taste", "taste", "tastes"],
        answer: 3,
        explanation: "এখানে taste অবস্থা বোঝায় — simple present ব্যবহৃত হয়।",
      },
      {
        question: "Complete: She ___ at the bank for twenty years before she retired.",
        options: ["has been working", "had been working", "was working", "works"],
        answer: 1,
        explanation: "অতীত ঘটনার (retired) আগে দীর্ঘ সময়ের বহমান পটভূমি — past perfect continuous।",
      },
    ],
  },
  {
    topic: "Precision Articles & Quantifiers",
    level: "advanced",
    locale: "bn",
    title: "Precision Articles & Quantifiers: ক্ষুদ্র শব্দের বড় পার্থক্য",
    intro:
      "a few আর few-এর মাঝে পুরো মনোভাব লুকিয়ে থাকে; in prison আর in the prison অর্থে ভিন্ন পৃথিবী। উন্নত লেখায় এই ক্ষুদ্র শব্দগুলোই নির্ভুলতার সাক্ষী দেয়।",
    sections: [
      {
        heading: "Article-এর অর্থবহ উপস্থিতি ও অনুপস্থিতি",
        explanation:
          "প্রতিষ্ঠান-অবস্থা বোঝালে article বাদ: in prison, at school, in hospital (BrE) — উদ্দেশ্য বোঝায়; ভবনটা বোঝালে the: in the prison building। A/an + singular noun গোটা শ্রেণি বোঝাতে পারে: A doctor must be patient। The + adjective পুরো গোষ্ঠী: the elderly, the unemployed।",
        examples: [
          {
            wrong: "He spent three years in the prison for fraud.",
            right: "He spent three years in prison for fraud.",
            note: "কারাবাস অবস্থা হিসেবে zero article; the prison বললে বোঝায় সে ওই ভবনে ছিল, সাজা নয়।",
          },
          {
            wrong: "The society must care for elderly.",
            right: "Society must care for the elderly.",
            note: "সাধারণ অর্থে society-তে article হয় না; the + adjective = পুরো গোষ্ঠী (বয়স্করা)।",
          },
          {
            wrong: "She went to university to meet professor.",
            right: "She went to the university to meet the professor.",
            note: "পড়াশোনার উদ্দেশ্যে go to university (zero article), ভবনে গেলে the; নির্দিষ্ট অধ্যাপকের জন্য the।",
          },
        ],
      },
      {
        heading: "Quantifier-এর সূক্ষ্মতা: few/a few, each/every, most/most of",
        explanation:
          "few = প্রায় কিছুই নেই (নেতিবাচক মনোভাব), a few = কিছু আছে (আশাবাদী) — সংখ্যা এক, বার্তা ভিন্ন। little/a little-ও uncountable-এ একই নিয়ম। each = একজন করে আলাদা দৃষ্টি, every = পুরো দলকে এক দৃষ্টিতে। most + noun (সাধারণীকরণ) আর most of the + noun (নির্দিষ্ট দলের অধিকাংশ) আলাদা কাজ করে।",
        examples: [
          {
            wrong: "Few delegates arrived early, so the hall felt quite full.",
            right: "A few delegates arrived early, so the hall felt quite full.",
            note: "ফল ইতিবাচক (হল ভরা) — তাই a few; few দিলে অর্থ উল্টে যেত।",
          },
          {
            wrong: "Most of students found the exam difficult.",
            right: "Most students found the exam difficult.",
            note: "সাধারণীকরণে most + noun; of লাগে শুধু most of the/these/our students-এ।",
          },
          {
            wrong: "Every of the candidates was given five minutes.",
            right: "Each of the candidates was given five minutes.",
            note: "every-এর পরে সরাসরি of আসে না — every one of হয়; আলাদা আলাদা দৃষ্টিতে each of।",
          },
        ],
      },
    ],
    tips: [
      "Quantifier লেখার আগে নিজের মনোভাব যাচাই করুন: অভাব/সমালোচনা few/little, সন্তুষ্টি a few/a little।",
      "প্রতিষ্ঠান-অবস্থার তালিকা মুখস্থ রাখুন: in prison, at school, in class, at sea, in hospital (BrE) — উদ্দেশ্য বোঝালে article নেই।",
      "all আর whole-এর অবস্থান আলাদা: all day ঠিক, whole the day ভুল — the whole day লিখুন।",
      "একাডেমিক লেখায় some অস্পষ্ট লাগতে পারে; পরিমাণ জানা থাকলে several, a majority of, a substantial proportion of ব্যবহার করুন।",
    ],
    quiz: [
      {
        question: "Choose the correct sentence (he served a sentence for embezzlement):",
        options: [
          "He spent five years in the prison for embezzlement.",
          "He spent five years at prison for embezzlement.",
          "He spent five years in prison for embezzlement.",
          "He spent five years on prison for embezzlement.",
        ],
        answer: 2,
        explanation: "সাজা হিসেবে কারাবাস — zero article: in prison।",
      },
      {
        question: "Complete: ___ of the participants completed all four sessions.",
        options: ["Most", "The most", "Mostly", "Much"],
        answer: 0,
        explanation: "Most of the participants — most of + নির্দিষ্ট দল।",
      },
      {
        question: "Choose the sentence with a positive attitude: We still have ___ time before the deadline.",
        options: ["few", "a few", "little", "a little"],
        answer: 3,
        explanation: "time uncountable, আর আশাবাদী সুরে a little — কিছুটা সময় আছে।",
      },
      {
        question: "Choose the correct quantifier: ___ employee receives a monthly stipend.",
        options: ["Every of the", "Each", "All of", "Most of"],
        answer: 1,
        explanation: "Each employee — একজন করে আলাদা দৃষ্টি; every of / all of + singular noun ভুল।",
      },
      {
        question:
          "Complete: ___ candidates applied, but ___ were qualified. (The speaker is disappointed that almost nobody was qualified.)",
        options: ["A number of, few", "A number of, a few", "Number of, few", "The number of, a few"],
        answer: 0,
        explanation: "A number of = অনেকে আবেদন করেছে; few = প্রায় কেউই যোগ্য ছিল না (নেতিবাচক মনোভাব)।",
      },
    ],
  },
];

export default LESSONS;
