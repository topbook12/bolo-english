import type { BankLesson } from "./types";

// Static grammar bank — advanced topics, ADVANCED level (CEFR ~C1),
// Hindi explanations. English sentences stay English (that's what is
// being learned); every explanation/intro/tip/note is natural Hindi.
// Topic strings MUST match GrammarTopic.topic in ../shared.ts exactly.

const LESSONS: BankLesson[] = [
  // 1
  {
    topic: "Inversion & Emphasis Structures",
    level: "advanced",
    locale: "hi",
    title: "इनवर्ज़न: वाक्य में ज़ोर देने की कला",
    intro:
      "इनवर्ज़न का मतलब है वाक्य में auxiliary और कर्ता की जगह बदल देना — और इसी छोटी-सी बदली से आपकी बात में नाटकीय ज़ोर आ जाता है। Formal लेखन, speeches और C1 परीक्षाओं में यह स्ट्रक्चर बार-बार काम आता है।",
    sections: [
      {
        heading: "नकारात्मक क्रिया-विशेषण के बाद इनवर्ज़न (Negative Adverbial Inversion)",
        explanation:
          "जब वाक्य की शुरुआत never, rarely, seldom, hardly, little, not only, under no circumstances जैसे नकारात्मक या सीमित-अर्थ वाले शब्दों से होती है, तो सामान्य word order नहीं चलेगा — auxiliary कर्ता से पहले आएगी। यानी 'I have never seen' बन जाता है 'Never have I seen'। ध्यान रखें कि इनवर्ज़न के बाद वाक्य question नहीं बनता, बल्कि statement ही रहता है — सिर्फ़ क्रम बदलता है।",
        examples: [
          {
            wrong: "Rarely I have seen such dedication in a new employee.",
            right: "Rarely have I seen such dedication in a new employee.",
            note: "Rarely से वाक्य शुरू होने पर auxiliary 'have' कर्ता 'I' से पहले आना ज़रूरी है।",
          },
          {
            wrong: "No sooner she had sat down than the phone rang.",
            right: "No sooner had she sat down than the phone rang.",
            note: "No sooner...than के साथ past perfect और इनवर्ज़न का जोड़ा ही मानक रूप है।",
          },
          {
            wrong: "Not only he missed the deadline, but he also lost the client's trust.",
            right: "Not only did he miss the deadline, but he also lost the client's trust.",
            note: "Not only के बाद 'did + base verb' वाला इनवर्ज़न चाहिए, सीधा simple past नहीं।",
          },
        ],
      },
      {
        heading: "Only और So/Such के साथ ज़ोर",
        explanation:
          "'only then', 'only after', 'only when' से शुरू होने वाले वाक्यों में भी auxiliary कर्ता से पहले आती है — यही 'Only then did I realise' जैसा प्रसिद्ध रूप है। इसी तरह 'so' या 'such' को ज़ोर देने के लिए आगे खींचा जाता है: 'So beautiful was the view that everyone fell silent'। ये स्ट्रक्चर story-telling, भाषणों और formal essays में वाक्य को यादगार बना देते हैं।",
        examples: [
          {
            wrong: "Only after the results were announced I realised how much hard work mattered.",
            right: "Only after the results were announced did I realise how much hard work mattered.",
            note: "'Only after...'-क्लॉज़ के बाद मुख्य क्लॉज़ में 'did I realise' वाला इनवर्ज़न लाज़मी है।",
          },
          {
            wrong: "So the traffic was heavy that we missed the flight.",
            right: "So heavy was the traffic that we missed the flight.",
            note: "'So + adjective' को आगे लाने पर क्रिया कर्ता से पहले चली जाती है — 'was the traffic'।",
          },
          {
            wrong: "Under no circumstances you should share your password.",
            right: "Under no circumstances should you share your password.",
            note: "नकारात्मक phrase से शुरुआत होने पर modal 'should' कर्ता से पहले आता है।",
          },
        ],
      },
    ],
    tips: [
      "बोलचाल में इनवर्ज़न का इस्तेमाल कम होता है, पर presentation या interview में 'Never have I...' जैसा एक वाक्य तुरंत असर छोड़ता है।",
      "इनवर्ज़न वाला वाक्य question नहीं होता — लिखते समय question mark न लगाएँ, full stop ही लगाएँ और rising intonation न लें।",
      "No sooner के साथ हमेशा 'than' आता है, जबकि hardly/scarcely के साथ 'when/before' — यह जोड़ी रट लें।",
      "'Not only did he...' के बाद दूसरा हिस्सा 'but he also...' से जोड़ें और दोनों हिस्सों का ढाँचा एक जैसा (parallel) रखें।",
    ],
    quiz: [
      {
        question: "Rewrite correctly: 'Never I had imagined that the launch would fail so badly.'",
        options: [
          "Never I had imagined that the launch would fail so badly.",
          "Never had I imagined that the launch would fail so badly.",
          "Never had I imagine that the launch would fail so badly.",
          "Never I have imagined that the launch would fail so badly.",
        ],
        answer: 1,
        explanation:
          "नकारात्मक adverbial से शुरुआत पर past perfect का इनवर्ज़न 'Never had I imagined' ही सही है।",
      },
      {
        question: "Complete: 'No sooner ____ the announcement than the crowd started cheering.'",
        options: [
          "the minister made",
          "did the minister make",
          "had the minister made",
          "the minister had made",
        ],
        answer: 2,
        explanation:
          "No sooner के साथ past perfect और इनवर्ज़न — 'had the minister made' — तथा 'than' दोनों ज़रूरी हैं।",
      },
      {
        question: "Choose the correct emphatic sentence:",
        options: [
          "So convincing was his argument that nobody objected.",
          "So convincing his argument was that nobody objected.",
          "So was convincing his argument that nobody objected.",
          "So his argument was convincing that nobody objected.",
        ],
        answer: 0,
        explanation:
          "'So + adjective' आगे आने पर क्रिया कर्ता से पहले जाती है: 'So convincing was his argument...'।",
      },
      {
        question: "Which sentence uses 'only then' correctly?",
        options: [
          "Only then she understood the real cost of the decision.",
          "Only then she did understand the real cost of the decision.",
          "Only then did she understood the real cost of the decision.",
          "Only then did she understand the real cost of the decision.",
        ],
        answer: 3,
        explanation:
          "'Only then' के बाद auxiliary 'did' + base verb 'understand' का इनवर्ज़न होता है।",
      },
      {
        question:
          "Begin with the negative phrase: 'You must not open the door in any circumstances.' → 'Under no circumstances...'",
        options: [
          "Under no circumstances must you open the door.",
          "Under no circumstances you must open the door.",
          "Under no circumstances you must to open the door.",
          "Under no circumstances must you to open the door.",
        ],
        answer: 0,
        explanation:
          "नकारात्मक phrase के बाद modal 'must' कर्ता से पहले आता है और मुख्य क्रिया base form में रहती है।",
      },
    ],
  },

  // 2
  {
    topic: "Mixed & Inverted Conditionals",
    level: "advanced",
    locale: "hi",
    title: "मिक्स्ड और इनवर्टेड कंडीशनल्स",
    intro:
      "असल ज़िंदगी की बातें अक्सर एक ही समय-रेखा में नहीं रहतीं — अतीत की गलती और आज का नतीजा एक साथ आते हैं। Mixed conditionals और if की जगह इनवर्ज़न आपकी English को C2 की ओर ले जाते हैं।",
    sections: [
      {
        heading: "मिक्स्ड कंडीशनल्स: अतीत और वर्तमान को मिलाना",
        explanation:
          "Mixed conditional तब बनता है जब शर्त और नतीजा अलग-अलग समय के हों। अतीत की शर्त + वर्तमान नतीजे के लिए: 'If + past perfect, would + base verb + now' — जैसे 'If I had taken that job, I would be living in Delhi now'। उलटा, आज की आदत/स्थिति वाली शर्त + अतीत का नतीजा: 'If I were more organised, I would not have missed the deadline'। मुख्य क्लॉज़ में समय का इशारा (now, today) देखकर tense चुनें।",
        examples: [
          {
            wrong: "If I had saved money earlier, I would have bought a house now.",
            right: "If I had saved money earlier, I would have a house now.",
            note: "नतीजा वर्तमान में है, इसलिए 'would have a house now' — 'would have bought...now' समय मिलाने में ग़लत है।",
          },
          {
            wrong: "If she is not so shy, she would have spoken at the conference.",
            right: "If she weren't so shy, she would have spoken at the conference.",
            note: "शर्त आज की स्थिति की है (present), नतीजा अतीत का — 'is' नहीं, 'weren't' आएगा।",
          },
          {
            wrong: "If I would have known about the traffic, I would have left earlier.",
            right: "If I had known about the traffic, I would have left earlier.",
            note: "if-क्लॉज़ में 'would have' कभी नहीं आता — past perfect ही आता है।",
          },
        ],
      },
      {
        heading: "if हटाकर इनवर्ज़न: Had I..., Were I..., Should you...",
        explanation:
          "Formal English में if को हटाकर auxiliary को कर्ता से पहले रखा जाता है: 'Had I known' (= if I had known), 'Were I you' (= if I were you), 'Should you need help' (= if you should need help)। यह रूप business emails, academic writing और interviews में बहुत परिष्कृत लगता है। ध्यान रखें — इनवर्ज़न में contraction (Hadn't, Weren't) नहीं चलती; 'Were it not for' का पूरा रूप इस्तेमाल करें।",
        examples: [
          {
            wrong: "If you should require further information, please contact the office.",
            right: "Should you require further information, please contact the office.",
            note: "Formal अनुरोध में 'Should you + base verb' if-क्लॉज़ का परिष्कृत इनवर्टेड रूप है।",
          },
          {
            wrong: "Weren't for your support, the project would have collapsed.",
            right: "Were it not for your support, the project would have collapsed.",
            note: "इनवर्ज़न में contraction नहीं चलती — 'Were it not for' का पूरा रूप लाज़मी है।",
          },
          {
            wrong: "Had you told me earlier, I would helped you.",
            right: "Had you told me earlier, I would have helped you.",
            note: "मुख्य क्लॉज़ में 'would have + participle' का पूरा रूप रखें — would के बाद have छोड़ना नहीं।",
          },
        ],
      },
    ],
    tips: [
      "मिक्स्ड कंडीशनल में सबसे पहले पूछें — नतीजा किस समय का है? उसी हिसाब से मुख्य क्लॉज़ का tense तय करें।",
      "Formal email में 'Should you have any questions...' जैसा एक इनवर्टेड conditional पढ़ने वाले पर सकारात्मक असर डालता है।",
      "बोलचाल में 'Had I known' पूरी तरह स्वाभाविक है — इसे speaking में भी बेझिझक इस्तेमाल करें।",
      "'If I would have...' सुनते ही ग़लती पकड़ में आती है — यह रूप न लिखें, न बोलें; if-क्लॉज़ में हमेशा past perfect रखें।",
    ],
    quiz: [
      {
        question: "Complete: 'If I ____ that promotion years ago, I would be earning twice as much today.'",
        options: ["had accepted", "accepted", "would have accepted", "have accepted"],
        answer: 0,
        explanation:
          "अतीत की शर्त + वर्तमान नतीजे वाले मिक्स्ड कंडीशनल में if-क्लॉज़ में past perfect आता है।",
      },
      {
        question: "Which sentence correctly combines a past condition with a present result?",
        options: [
          "If he had studied law, he would have become a lawyer.",
          "If he studied law, he would be a lawyer today.",
          "If he had studied law, he would be a lawyer today.",
          "If he would have studied law, he would be a lawyer today.",
        ],
        answer: 2,
        explanation:
          "शर्त अतीत में (past perfect) और नतीजा आज (would be...today) — यही मिक्स्ड कंडीशनल की पहचान है।",
      },
      {
        question: "Rewrite formally without 'if': 'If you need any clarification, call me.'",
        options: [
          "Had you need any clarification, call me.",
          "Were you needing any clarification, call me.",
          "Should you need any clarification, call me.",
          "Would you need any clarification, call me.",
        ],
        answer: 2,
        explanation: "'Should you + base verb' भविष्य की संभावित शर्त का formal इनवर्टेड रूप है।",
      },
      {
        question: "Choose the correct inverted form: 'If it were not for her guidance, I would have failed.'",
        options: [
          "Weren't it for her guidance, I would have failed.",
          "Were it not for her guidance, I would have failed.",
          "It were not for her guidance, I would have failed.",
          "Was it not for her guidance, I would have failed.",
        ],
        answer: 1,
        explanation:
          "इनवर्ज़न में contraction नहीं चलती; 'Were it not for...' ही मानक रूप है।",
      },
      {
        question: "Find the correct sentence:",
        options: [
          "Had I booked earlier, I would have paid half the fare.",
          "Had I booked earlier, I would paid half the fare.",
          "If I had booked earlier, I would paid half the fare.",
          "I had booked earlier, would have paid half the fare.",
        ],
        answer: 0,
        explanation:
          "इनवर्टेड शर्त ('Had I booked') और पूरा मुख्य क्लॉज़ ('would have paid') — दोनों हिस्से सही हैं।",
      },
    ],
  },

  // 3
  {
    topic: "Cleft Sentences",
    level: "advanced",
    locale: "hi",
    title: "क्लेफ़्ट सेंटेंस: बात को वाक्य के केंद्र में लाना",
    intro:
      "एक ही बात कहने के कई तरीक़े होते हैं, पर cleft sentence उसमें सबसे अहम हिस्से को spotlight दे देता है। Presentations, debates और academic writing में focus बदलने का यही हथियार है।",
    sections: [
      {
        heading: "It-cleft: 'It is/was X that...'",
        explanation:
          "It-cleft में वाक्य 'It is/was' + ज़ोर देने वाला हिस्सा + who/that + बाकी जानकारी के रूप में बँट जाता है — 'I admire her honesty' से बना 'It is her honesty that I admire'। लोग, जगह, समय या चीज़ — किसी को भी आगे लाया जा सकता है; लोगों के लिए that की जगह who ज़्यादा बेहतर लगती है। समय के हिसाब से 'It is' या 'It was' चुनें।",
        examples: [
          {
            wrong: "The delay in funding hurt the startup most.",
            right: "It was the delay in funding that hurt the startup most.",
            note: "It-cleft ने 'delay in funding' को वाक्य के ज़ोर के केंद्र में पहुँचा दिया।",
          },
          {
            wrong: "My mentor taught me the value of patience.",
            right: "It was my mentor who taught me the value of patience.",
            note: "व्यक्ति पर ज़ोर देने के लिए 'It was...who' वाला रूप सबसे सहज है।",
          },
          {
            wrong: "I don't understand his reasons.",
            right: "It is his reasons that I don't understand.",
            note: "Cleft के बाद बाकी हिस्सा सामान्य order में आता है — ज़ोर वाली चीज़ को 'It is...that' के बीच रखा जाता है।",
          },
        ],
      },
      {
        heading: "Wh-cleft (Pseudo-cleft): 'What... is...'",
        explanation:
          "Wh-cleft 'What' से शुरू होकर असली जानकारी को वाक्य के आख़िर में रखता है — 'What I need is more time', 'What surprised me was his calmness'। 'All (that)', 'The thing (that)', 'The reason why' भी इसी परिवार से हैं: 'All I want is a fair chance'। यह स्ट्रक्चर बातचीत में अपनी सबसे बड़ी माँग या भावना को रेखांकित करने के लिए बेहद असरदार है।",
        examples: [
          {
            wrong: "I need your support more than anything else.",
            right: "What I need most is your support.",
            note: "Wh-cleft में चाहत पहले और असली चीज़ (support) आख़िर में — जहाँ ज़ोर पड़ता है।",
          },
          {
            wrong: "His calmness during the crisis impressed me.",
            right: "What impressed me was his calmness during the crisis.",
            note: "'What + क्लॉज़' के बाद जवाब आख़िर में आकर प्रभाव बढ़ाता है।",
          },
          {
            wrong: "I only want an apology from him.",
            right: "All I want from him is an apology.",
            note: "'All (that) I want is...' छोटी और सीधी wh-cleft है, जो माँग को तीखा कर देती है।",
          },
        ],
      },
    ],
    tips: [
      "Presentation का conclusion 'What this data tells us is...' से शुरू करें — यह तुरंत ध्यान खींचता है।",
      "It-cleft में person के लिए who, बाकी के लिए that चुनें; that छोड़ना बोलचाल में चलता है, formal writing में नहीं।",
      "Wh-cleft में 'What we need is one more option' बनाम 'What we need are more options' — is/was के आगे आने वाले हिस्से के number से मेल रखें।",
      "ज़रूरत से ज़्यादा clefts वाक्य को भारी बना देते हैं — एक paragraph में एक-दो से आगे न बढ़ें।",
    ],
    quiz: [
      {
        question: "Complete the it-cleft: '____ the second draft that finally convinced the editor.'",
        options: ["It was", "It is", "There was", "That was"],
        answer: 0,
        explanation:
          "वाक्य अतीत की घटना की ओर इशारा करता है, इसलिए 'It was' वाला it-cleft सही बैठता है।",
      },
      {
        question: "Which sentence correctly emphasises 'his honesty' in 'His honesty won everyone over'?",
        options: [
          "What won everyone over it was his honesty.",
          "It was his honesty who won everyone over.",
          "What his honesty won everyone over.",
          "It was his honesty that won everyone over.",
        ],
        answer: 3,
        explanation: "It-cleft का ढाँचा है 'It was + ज़ोर वाला हिस्सा + that + बाकी वाक्य'।",
      },
      {
        question: "Choose the correct wh-cleft:",
        options: [
          "What surprised me most it was her willingness to admit mistakes.",
          "What was surprised me most her willingness to admit mistakes.",
          "What surprised me most was her willingness to admit mistakes.",
          "What did surprise me was most her willingness to admit mistakes.",
        ],
        answer: 2,
        explanation: "Wh-cleft में 'What + क्लॉज़ + is/was + ज़ोर वाली चीज़' का साफ़ रूप चाहिए।",
      },
      {
        question: "Complete: 'All ____ is a sincere apology.'",
        options: ["what I want", "that I want", "I want that", "which I want it"],
        answer: 1,
        explanation:
          "'All (that) I want is...' — that वाला relative क्लॉज़ चलता है; 'all what' अमान्य है।",
      },
      {
        question: "Which option best emphasises 'the ending' in 'I loved the ending of the film'?",
        options: [
          "It was the ending of the film that I loved.",
          "I loved the ending of the film it was.",
          "The ending of the film was loved by me it.",
          "It is loved the ending of the film that I did.",
        ],
        answer: 0,
        explanation: "It-cleft ही यहाँ सही ज़ोर देता है: 'It was the ending of the film that I loved'।",
      },
    ],
  },

  // 4
  {
    topic: "Subjunctive & Unreal Uses",
    level: "advanced",
    locale: "hi",
    title: "सबजंक्टिव: इच्छा, सुझाव और अवास्तविकता",
    intro:
      "Subjunctive वह सूक्ष्म रूप है जो बताता है कि बात वास्तविकता नहीं, बल्कि इच्छा, सुझाव या कल्पना है। C1 लेखन में यह छोटा-सा base verb आपकी formal English को authentic बना देता है।",
    sections: [
      {
        heading: "मांडेटिव सबजंक्टिव: suggest/insist/demand के बाद base verb",
        explanation:
          "जब suggest, recommend, insist, demand, request, propose जैसी क्रियाओं के बाद 'that'-क्लॉज़ आता है, तो उसकी क्रिया base form में रहती है — कर्ता चाहे कोई भी हो: 'They insisted that he be present', 'I suggest that she submit the report today'। यह रूप especially American English में मानक है; British English में 'should + base verb' भी देखा जाता है, पर C1 परीक्षाओं में सीधा base verb सबसे सुरक्षित है। Negative में 'not + base verb' आता है।",
        examples: [
          {
            wrong: "The doctor recommended that he takes complete rest for a week.",
            right: "The doctor recommended that he take complete rest for a week.",
            note: "recommend के बाद that-क्लॉज़ की क्रिया base form ('take') में रहती है — third person का -s नहीं लगता।",
          },
          {
            wrong: "It is essential that every student submits the form before Friday.",
            right: "It is essential that every student submit the form before Friday.",
            note: "'It is essential that...' के बाद भी subjunctive 'submit' ही आता है।",
          },
          {
            wrong: "The committee demanded that the report is not published yet.",
            right: "The committee demanded that the report not be published yet.",
            note: "Subjunctive का negative 'not + base verb' होता है — यहाँ 'not be published'।",
          },
        ],
      },
      {
        heading: "were-सबजंक्टिव और ठहरे हुए वाक्यांश (Formulaic Uses)",
        explanation:
          "'If I were you', 'I wish she were here', 'He talks as if he were the CEO' — कर्ता चाहे कुछ भी हो, अवास्तविक स्थिति में 'were' ही आता है। इसके अलावा कुछ ठहरे-ठहरे वाक्यांश subjunctive ही रखते हैं: 'Come what may', 'Be that as it may', 'God forbid', 'Suffice it to say', 'Far be it from me'। ये phrases formal speech और लेखन में परिपक्वता दिखाते हैं।",
        examples: [
          {
            wrong: "I wish I was able to attend the ceremony.",
            right: "I wish I were able to attend the ceremony.",
            note: "wish के बाद विपरीत-वास्तविकता वाली स्थिति में formal रूप 'were' है।",
          },
          {
            wrong: "He behaves as if he is the owner of the company.",
            right: "He behaves as if he were the owner of the company.",
            note: "as if के बाद असलियत से उलटी कल्पना दिखाने के लिए 'were' आता है।",
          },
          {
            wrong: "Whatever happens, the show must continue — come what will.",
            right: "Whatever happens, the show must continue — come what may.",
            note: "'Come what may' subjunctive का ठहरा हुआ रूप है; 'come what will' ग़लत है।",
          },
        ],
      },
    ],
    tips: [
      "recommend, suggest, insist, demand, propose, request — इन क्रियाओं के बाद that-क्लॉज़ दिखते ही base verb सोचें।",
      "'I wish I was...' बोलचाल में सुनाई देता है, पर formal writing और परीक्षा में 'were' ही लिखें।",
      "Email में 'I would suggest that the deadline be extended' जैसा वाक्य आपकी formal tone तुरंत ऊपर उठा देता है।",
      "'Be that as it may' का मतलब है 'बात जो भी हो' — debate में दूसरे पक्ष को स्वीकार करके आगे बढ़ने का परिष्कृत तरीक़ा।",
    ],
    quiz: [
      {
        question: "Choose the correct sentence:",
        options: [
          "The board insisted that the CEO resigns immediately.",
          "The board insisted that the CEO resign immediately.",
          "The board insisted that the CEO to resign immediately.",
          "The board insisted the CEO resigning immediately.",
        ],
        answer: 1,
        explanation: "insist के बाद that-क्लॉज़ में subjunctive base form 'resign' आती है।",
      },
      {
        question: "Complete: 'It is vital that she ____ informed about the changes.'",
        options: ["is", "being", "was", "be"],
        answer: 3,
        explanation: "'It is vital that...' के बाद subjunctive 'be' आता है, 'is' नहीं।",
      },
      {
        question: "Which sentence uses the were-subjunctive correctly?",
        options: [
          "If the weather was better, we would hike today.",
          "If the weather were better, we would hike today.",
          "If the weather would be better, we would hike today.",
          "If the weather is better, we would hike today.",
        ],
        answer: 1,
        explanation:
          "अवास्तविक वर्तमान शर्त में formal 'were' आता है — 'If the weather were better...'।",
      },
      {
        question: "Complete the formulaic phrase: '____ may, the festival will go ahead.'",
        options: ["Come what", "Comes what", "Come whatever", "Coming what"],
        answer: 0,
        explanation: "'Come what may' ठहरा हुआ subjunctive वाक्यांश है — इसका रूप नहीं बदलता।",
      },
      {
        question: "Complete: 'The judge ordered that the documents ____ released to the press.'",
        options: ["is not", "are not", "not be", "will not be"],
        answer: 2,
        explanation: "order के बाद negative subjunctive 'not be released' आता है।",
      },
    ],
  },

  // 5
  {
    topic: "Participle Clauses",
    level: "advanced",
    locale: "hi",
    title: "पार्टिसिपल क्लॉज़: संक्षिप्त और सहज वाक्य",
    intro:
      "Participle clauses दो-दो वाक्यों की भारी श्रृंखला को एक सहज वाक्य में सिमट देते हैं — यही कौशल academic essays और ऊँचे स्तर के लेखन को अलग पहचान देता है।",
    sections: [
      {
        heading: "-ing, -ed और having + participle के रूप",
        explanation:
          "सक्रिय और साथ चलने वाली क्रिया के लिए present participle (-ing) आता है: 'Walking into the room, she noticed the silence'। Passive या पूरी हो चुकी क्रिया के लिए past participle: 'Written in 1962, the novel still feels modern'। अतीत में पहले हो चुकी क्रिया दिखाने के लिए perfect participle: 'Having finished the report, she left early'। तीनों में मुख्य क्लॉज़ का कर्ता ही participle क्रिया का कर्ता माना जाता है।",
        examples: [
          {
            wrong: "The candidate who is waiting outside has already passed two rounds.",
            right: "The candidate waiting outside has already passed two rounds.",
            note: "'who is waiting' की जगह -ing participle वाक्य को हल्का और तेज़ बना देता है।",
          },
          {
            wrong: "The bridge, which was built in 1935, still carries heavy traffic.",
            right: "The bridge, built in 1935, still carries heavy traffic.",
            note: "Passive relative क्लॉज़ ('which was built') का संक्षिप्त रूप past participle 'built' है।",
          },
          {
            wrong: "She finished the presentation and then she answered the questions.",
            right: "Having finished the presentation, she answered the questions.",
            note: "क्रम दिखाने के लिए 'Having + participle' पहली क्रिया को पहले स्थापित कर देता है।",
          },
        ],
      },
      {
        heading: "डेंगलिंग participle से बचाव",
        explanation:
          "जब participle क्रिया का कर्ता मुख्य क्लॉज़ में नहीं मिलता, तो 'dangling participle' बन जाता है — 'Walking to college, my bag tore' में bag ही टहलता दिखता है! इलाज सीधा है: participle का असली कर्ता मुख्य क्लॉज़ के subject position में रखें, या participle-क्लॉज़ को पूरा क्लॉज़ बना दें। यही सूक्ष्मता examiner और editor दोनों की नज़र में आपको ऊपर रखती है।",
        examples: [
          {
            wrong: "Running through the park, the sunrise looked breathtaking.",
            right: "Running through the park, I found the sunrise breathtaking.",
            note: "दौड़ने वाला कर्ता 'I' है, sunrise नहीं — कर्ता मुख्य क्लॉज़ में होना चाहिए।",
          },
          {
            wrong: "Having reviewed the applications, several candidates were shortlisted.",
            right: "Having reviewed the applications, the panel shortlisted several candidates.",
            note: "Applications ख़ुद review नहीं करतीं — असली कर्ता 'the panel' आगे आना चाहिए।",
          },
          {
            wrong: "Being a rainy day, we cancelled the picnic.",
            right: "As it was a rainy day, we cancelled the picnic.",
            note: "'Being' का कर्ता 'it' वाक्य में नहीं है, इसलिए पूरा क्लॉज़ ('As it was...') ही सही है।",
          },
        ],
      },
    ],
    tips: [
      "Participle लिखने के बाद एक सवाल पूछें — मुख्य क्लॉज़ का कर्ता ही यह क्रिया कर रहा है? जवाब न हो तो वाक्य दोबारा बनाएँ।",
      "Email में 'Looking forward to your reply' भी participle clause ही है — यह रूप आप पहले से इस्तेमाल करते हैं, बस और संदर्भों में लगाएँ।",
      "दो घटनाओं में समय-क्रम दिखाना हो तो 'Having done..., ...' चुनें; काम साथ-साथ हों तो सीधा -ing रूप।",
      "हर relative clause नहीं हटाना चाहिए — कारण या विरोध बताने वाले क्लॉज़ (as, because, although) को participle बनाते समय अर्थ की स्पष्टता जाँचें।",
    ],
    quiz: [
      {
        question: "Complete: '____ by the reviews, I decided to watch the film.'",
        options: ["Encouraging", "Having encourage", "Encourage", "Encouraged"],
        answer: 3,
        explanation:
          "'I' passive अर्थ में encourage हुआ, इसलिए past participle 'Encouraged' आएगा।",
      },
      {
        question: "Which sentence has a dangling participle?",
        options: [
          "Having missed the train, we hired a taxi.",
          "Written in haste, the email confused everyone.",
          "Walking home, my phone slipped into a puddle.",
          "Exhausted after the match, the players slept early.",
        ],
        answer: 2,
        explanation:
          "'Walking home' करने वाला 'I' है, phone नहीं — कर्ता की असमानता dangling participle बनाती है।",
      },
      {
        question:
          "Combine correctly: 'He opened the laptop. He started typing immediately.' (show the sequence)",
        options: [
          "Having opened the laptop, he started typing immediately.",
          "Opened the laptop, he started typing immediately.",
          "Opening the laptop, typing was started by him immediately.",
          "He opened the laptop, started typing was immediately.",
        ],
        answer: 0,
        explanation:
          "पहली क्रिया पूरी होने के बाद दूसरी हुई — perfect participle 'Having opened' यह क्रम दिखाता है।",
      },
      {
        question:
          "Reduce the relative clause: 'The students who were selected for the final round received certificates.'",
        options: [
          "The students selecting for the final round received certificates.",
          "The students who selected for the final round received certificates.",
          "The students selected for the final round received certificates.",
          "The students been selected for the final round received certificates.",
        ],
        answer: 2,
        explanation: "'who were selected' का संक्षिप्त passive रूप past participle 'selected' है।",
      },
      {
        question: "Choose the correct sentence:",
        options: [
          "Being my birthday, my family organised a surprise dinner.",
          "As it was my birthday, my family organised a surprise dinner.",
          "Been my birthday, my family organised a surprise dinner.",
          "It being birthday, my family organised a surprise dinner.",
        ],
        answer: 1,
        explanation:
          "'Being my birthday' में कर्ता ग़ायब है; पूरा क्लॉज़ 'As it was my birthday' स्पष्ट और सही है।",
      },
    ],
  },

  // 6
  {
    topic: "Discourse Markers & Cohesion",
    level: "advanced",
    locale: "hi",
    title: "डिस्कोर्स मार्कर्स और कोहेज़न: बातों को जोड़ना",
    intro:
      "Advanced English में वाक्य अलग-अलग नहीं, आपस में बुने हुए लगते हैं — और यह बुनाई discourse markers से आती है। Essay, report और लंबी discussion तीनों में यही आपकी writing को structured दिखाता है।",
    sections: [
      {
        heading: "सादे and/but/so से आगे के जोड़",
        explanation:
          "and/but/so छोटी बातचीत के लिए ठीक हैं, पर formal लेखन में उनकी जगह अर्थ के हिसाब से चुने हुए connectors चाहिए — विरोध के लिए however, nonetheless, whereas; परिणाम के लिए consequently, as a result, hence; जोड़ के लिए moreover, furthermore, in addition। ध्यान रखें: however जैसे adverbs के आसपास semicolon या full stop चाहिए — 'The data was thin; however, the conclusion was bold'।",
        examples: [
          {
            wrong: "The prototype was expensive. So the team abandoned it.",
            right: "The prototype was expensive; consequently, the team abandoned it.",
            note: "Formal लेखन में 'so' की जगह 'consequently' और वाक्य जोड़ने के लिए semicolon परिष्कृत माना जाता है।",
          },
          {
            wrong: "The theory is elegant. But the evidence is weak.",
            right: "The theory is elegant; the evidence, however, is weak.",
            note: "'However' को क्लॉज़ के बीच रखने से विरोध परिष्कृत ढंग से उभरता है।",
          },
          {
            wrong: "The drug reduced symptoms. Also it improved sleep quality.",
            right: "The drug reduced symptoms. Moreover, it improved sleep quality.",
            note: "बढ़ता हुआ नया point जोड़ने के लिए 'Moreover' का वज़न 'Also' से ज़्यादा formal है।",
          },
        ],
      },
      {
        heading: "संदर्भ (Reference) से वाक्यों को बाँधना",
        explanation:
          "Cohesion का दूसरा हथियार है पुरानी बात को सस्ते शब्दों में फिर बुलाना — this, such a decision, the former, the latter। 'Two plans were proposed: the former was cheap but slow; the latter was costly but fast' जैसा वाक्य दोहराव के बिना तुलना करा देता है। अकेला 'this' अस्पष्ट रह जाता है — 'this approach', 'this delay' जैसा noun साथ देना academic English की पहचान है।",
        examples: [
          {
            wrong: "A hybrid model and a fully remote model were tested. The first one failed fast.",
            right: "A hybrid model and a fully remote model were tested. The former failed fast.",
            note: "'the former' दो उल्लेखों में पहले को बिना दोहराए सीधे बुलाता है।",
          },
          {
            wrong: "The committee rejected the proposal. This means they do not care about climate goals.",
            right: "The committee rejected the proposal. Such a rejection signals weak commitment to climate goals.",
            note: "अकेले 'this' की जगह 'such a rejection' जैसा noun जोड़ने से संदर्भ साफ़ और formal होता है।",
          },
          {
            wrong: "We can hire more staff or upgrade the software. Upgrading the software is cheaper.",
            right: "We can hire more staff or upgrade the software. The latter is cheaper.",
            note: "दो विकल्पों में दूसरे को बिना दोहराए बुलाने के लिए 'the latter' आता है।",
          },
        ],
      },
    ],
    tips: [
      "Essay के हर paragraph की पहली लाइन में एक connector रखें (Moreover, By contrast, As a result) — पाठक को दिशा तुरंत मिल जाती है।",
      "'However' को 'but' की तरह conjunction न समझें; इसे semicolon/full stop और comma के साथ adverb की तरह लिखें।",
      "बोलते समय 'on top of that', 'that said', 'mind you' जैसे markers प्रवाह बढ़ाते हैं — पर formal essay में इनके औपचारिक रूप लिखें।",
      "एक ही connector (especially 'moreover') बार-बार न दोहराएँ; विविधता ही cohesion को स्वाभाविक बनाती है।",
    ],
    quiz: [
      {
        question: "Choose the best connector: 'The startup burned cash rapidly; ____, it never reached profitability.'",
        options: ["moreover", "consequently", "otherwise", "likewise"],
        answer: 1,
        explanation:
          "पहला वाक्य कारण है, दूसरा उसका परिणाम — 'consequently' यह संबंध जोड़ता है।",
      },
      {
        question: "Which sentence punctuates 'however' correctly?",
        options: [
          "The evidence is thin, however, the argument is persuasive.",
          "The evidence is thin; however the argument is persuasive.",
          "The evidence is thin however the argument is persuasive.",
          "The evidence is thin; however, the argument is persuasive.",
        ],
        answer: 3,
        explanation:
          "however एक conjunctive adverb है — इससे पहले semicolon और उसके बाद comma आता है।",
      },
      {
        question:
          "Complete: 'Two candidates were shortlisted: Meera and Arjun. Meera has ten years of experience, and Arjun is a fresher. The panel chose ____, valuing experience over potential.'",
        options: ["the former", "the latter", "the last", "the one before"],
        answer: 0,
        explanation: "दो उल्लेखों में पहले (Meera) के लिए 'the former' ही आता है।",
      },
      {
        question: "Choose the correct connector: 'Costs rose sharply last quarter, ____ revenues remained flat.'",
        options: ["moreover", "whereas", "hence", "likewise"],
        answer: 1,
        explanation:
          "दोनों हिस्सों में विरोधाभास है — 'whereas' (जबकि) ही यह contrast दिखाता है।",
      },
      {
        question: "Choose the sentence with the correct contrast marker:",
        options: [
          "The salaries are low; nonetheless, applications keep pouring in.",
          "The salaries are low, nonetheless applications keep pouring in.",
          "The salaries are low nonetheless, applications keep pouring in.",
          "The salaries are low; nonetheless applications keep pouring in.",
        ],
        answer: 0,
        explanation:
          "'nonetheless' के आसपास semicolon और comma का सही उपयोग ही वाक्य को formal बनाता है।",
      },
    ],
  },

  // 7
  {
    topic: "Hedging & Softening Language",
    level: "advanced",
    locale: "hi",
    title: "हेजिंग और सॉफ़्टनिंग: सटीक और विनम्र English",
    intro:
      "C1 स्तर की सबसे बड़ी पहचान है — ज़िद से नहीं, सटीकता से बात करना। Hedging दावे को कठोर बनाए बिना प्रभावी रखने की कला सिखाता है, और softening आलोचना को सुधार में बदल देती है।",
    sections: [
      {
        heading: "दावों को वैज्ञानिक बनाने वाले hedges",
        explanation:
          "Academic और professional English में 'This proves' जैसे पूर्ण दावे आक्रामक लगते हैं, क्योंकि एक उलटा उदाहरण उन्हें गिरा देता है। इसलिए 'suggests', 'appears to', 'is likely to', 'tends to', 'may contribute to' जैसे hedges इस्तेमाल होते हैं — 'The data suggests that...', 'This may partly explain...'। इससे बात कमज़ोर नहीं होती, बल्कि ज़्यादा भरोसेमंद हो जाती है, क्योंकि सीमाएँ स्वीकार की गई हैं।",
        examples: [
          {
            wrong: "This experiment proves that social media causes anxiety.",
            right: "This experiment suggests that social media may contribute to anxiety.",
            note: "'suggests' और 'may contribute to' दावे को साक्ष्य की सीमा के भीतर रखते हैं।",
          },
          {
            wrong: "Everyone knows that remote work is more productive.",
            right: "It is widely believed that remote work can be more productive.",
            note: "'Everyone knows' अतिशयोक्ति है; 'It is widely believed' बात को स्रोत की ओर ठीक करता है।",
          },
          {
            wrong: "The new policy will definitely improve reading scores.",
            right: "The new policy is likely to improve reading scores.",
            note: "'definitely' की जगह 'is likely to' भविष्यवाणी को व्यावहारिक बनाता है।",
          },
        ],
      },
      {
        heading: "आलोचना और अनुरोध को नरम करना",
        explanation:
          "Speaking में softening के तीन हथियार हैं: modal past ('could', 'would', 'might'), indirect questions ('I was wondering if...') और polite openers ('I'm afraid...', 'With respect...')। 'Your report is wrong' की जगह 'I'm afraid there may be a couple of issues with the report' — मतलब वही, पर सामने वाला बचाव की बजाय सुधार पर ध्यान देता है। Emails में 'Would you be able to...?', 'Would it be possible to...?' भी इसी परिवार के हैं।",
        examples: [
          {
            wrong: "Send me the revised file by evening.",
            right: "Would you be able to send me the revised file by evening?",
            note: "Modal 'would' + प्रश्न-रूप आदेश को सम्मानजनक अनुरोध में बदल देता है।",
          },
          {
            wrong: "Your design is confusing and hard to use.",
            right: "I'm afraid some parts of the design may be a little confusing for new users.",
            note: "'I'm afraid' + 'may be a little' आलोचना को ठोस और निर्माणक बनाते हैं।",
          },
          {
            wrong: "I want you to explain this section again.",
            right: "Could you possibly walk me through this section once more?",
            note: "'Could you possibly' सबसे विनम्र स्तर का अनुरोध है — सामने वाले को मना करने की जगह छोड़ता है।",
          },
        ],
      },
    ],
    tips: [
      "Essay में हर claim के आगे ख़ुद से पूछें — क्या पूरा प्रमाण है? नहीं तो 'suggests / appears / is likely to' लगाएँ।",
      "Hedging की भी सीमा है — हर वाक्य hedged हो तो लेखन दुर्बल लगता है; मुख्य conclusion को साफ़ रखें।",
      "असहमति के लिए पैटर्न अपनाएँ: 'I see your point, but...' / 'That's true to some extent, however...' — discussion में यही चलता है।",
      "Email में 'Kindly do the needful' जैसे पुराने ठहरे रूपों की जगह स्पष्ट soft request लिखें: 'Would you be able to...'।",
    ],
    quiz: [
      {
        question: "Choose the most appropriately hedged academic sentence:",
        options: [
          "Pollution destroys health completely.",
          "Pollution may adversely affect respiratory health.",
          "Pollution always causes respiratory illness.",
          "Pollution destroys every child's health.",
        ],
        answer: 1,
        explanation:
          "'may adversely affect' दावे को साक्ष्य की सीमा में रखता है — यही academic hedging है।",
      },
      {
        question: "Make this request polite: 'Give me the report now.'",
        options: [
          "You must give me the report now.",
          "Give me the report now, okay?",
          "Could you send me the report when you get a chance?",
          "I demand the report this instant.",
        ],
        answer: 2,
        explanation:
          "'Could you...when you get a chance' अनुरोध को विनम्र बनाता है और सामने वाले को जगह देता है।",
      },
      {
        question: "Which sentence softens criticism best in a meeting?",
        options: [
          "I'm afraid there might be a few issues we should look at in the code.",
          "Your code is full of bugs.",
          "Whoever wrote this code made a mess.",
          "This code is unacceptable, honestly.",
        ],
        answer: 0,
        explanation:
          "'I'm afraid' + 'might be a few issues' आरोप की जगह समस्या पर ध्यान केंद्रित करता है।",
      },
      {
        question: "Complete the research-style sentence with the most appropriate verb: 'The findings ____ that exercise improves memory.'",
        options: ["prove beyond doubt", "suggest", "confirm absolutely", "guarantee"],
        answer: 1,
        explanation:
          "शोध-भाषा में 'suggest' ही संतुलित क्रिया है — prove जैसे पूर्ण दावे जल्दी ग़लत साबित होते हैं।",
      },
      {
        question: "Which hedge best fits a general trend? 'Teenagers ____ prefer short videos.'",
        options: ["never", "must", "tend to", "always"],
        answer: 2,
        explanation:
          "'tend to' सामान्य प्रवृत्ति बताता है बिना हर व्यक्ति पर लागू किए।",
      },
    ],
  },

  // 8
  {
    topic: "Advanced Reported Speech",
    level: "advanced",
    locale: "hi",
    title: "एडवांस्ड रिपोर्टेड स्पीच: किसी ने क्या कहा, सही ढंग से",
    intro:
      "असली मीटिंग और रिपोर्ट में सिर्फ़ 'He said that...' नहीं चलता — आपको apologise, warn, suggest जैसे reporting verbs और उनके ठीक grammar patterns चाहिए। यही इस पाठ का काम है।",
    sections: [
      {
        heading: "Reporting verbs + सही pattern",
        explanation:
          "हर reporting verb का अपना ढाँचा होता है: 'advise/tell/ask somebody to do', 'suggest + -ing' या 'suggest that + clause', 'apologise for + -ing', 'accuse somebody of + -ing', 'warn somebody about'। 'She suggested me to take rest' जैसी ग़लती C1 में भी बहुत दिखती है — suggest के साथ object + to-infinitive कभी नहीं आता। Verb चुनते समय पहले अर्थ सोचें (चेतावनी, क्षमा, आरोप), pattern उसके बाद।",
        examples: [
          {
            wrong: "The trainer suggested me to revise the chapter.",
            right: "The trainer advised me to revise the chapter.",
            note: "Object + to-infinitive के साथ 'advise' सही क्रिया है — 'suggest' के साथ यह ढाँचा नहीं चलता।",
          },
          {
            wrong: "He said me that the meeting was postponed.",
            right: "He told me that the meeting had been postponed.",
            note: "'said me' ग़लत है — say के साथ 'to me', और object देना हो तो 'tell' इस्तेमाल होता है।",
          },
          {
            wrong: "She told that she would call later.",
            right: "She said that she would call later.",
            note: "'tell' के बिना object अधूरा है — 'tell that' नहीं, 'said that' आता है।",
          },
        ],
      },
      {
        heading: "प्रश्न, चेतावनी और क्षमा की रिपोर्टिंग",
        explanation:
          "Reported question में word order statement जैसा होता है — 'He asked where the hall was', not 'He asked where was the hall'। yes/no प्रश्नों के लिए whether/if आता है: 'She asked whether I had finished'। भावना वाले वाक्यों के लिए सटीक verb चुनें: 'I'm sorry I shouted' → 'She apologised for shouting'; 'Don't touch the wire!' → 'He warned me not to touch the wire'; 'Let's take a break' → 'He suggested taking a break'।",
        examples: [
          {
            wrong: "The interviewer asked me what was my biggest weakness.",
            right: "The interviewer asked me what my biggest weakness was.",
            note: "Reported question में question-order नहीं आता — कर्ता पहले, क्रिया बाद में।",
          },
          {
            wrong: "He warned me don't share the document externally.",
            right: "He warned me not to share the document externally.",
            note: "warn के बाद negative infinitive 'not to + verb' आता है, अलग clause नहीं।",
          },
          {
            wrong: "She apologised to miss the presentation.",
            right: "She apologised for missing the presentation.",
            note: "'apologise for + -ing' ढाँचा है; 'apologise to + verb' ग़लत है।",
          },
        ],
      },
    ],
    tips: [
      "Reporting verb बदलने से भाव बदलता है — 'He said we should leave' और 'He urged us to leave' में ज़ोर का फ़र्क़ ध्यान रखें।",
      "Reported speech में समय/स्थान के शब्द बदलें: tomorrow → the next day, here → there, this → that — पर सीधे quotes के साथ नहीं।",
      "अनिश्चित जवाब वाले प्रश्नों के लिए 'whether' ज़्यादा formal है — 'She asked whether the vendor had been notified'।",
      "मीटिंग मिनट्स में 'claimed', 'pointed out', 'highlighted', 'objected to' जैसे verbs से बहस का सही रंग आता है — हर बात 'said' न लिखें।",
    ],
    quiz: [
      {
        question: "Report correctly: 'Where do you live?' (He asked me...)",
        options: [
          "He asked me where did I live.",
          "He asked me where do I live.",
          "He asked me where I lived.",
          "He asked me where I do live.",
        ],
        answer: 2,
        explanation:
          "Reported question में statement order (where I lived) और backshift दोनों लाज़मी हैं।",
      },
      {
        question: "Choose the correct pattern:",
        options: [
          "She suggested taking a short break.",
          "She suggested him to take a short break.",
          "She suggested that he takes a short break.",
          "She suggested for him to take a short break.",
        ],
        answer: 0,
        explanation:
          "'suggest + -ing' या 'suggest that + clause (subjunctive)' चलता है; 'suggest + object + to-infinitive' अमान्य है।",
      },
      {
        question: "Report: 'Don't leave the door unlocked!'",
        options: [
          "He told us don't leave the door unlocked.",
          "He warned us not to leave the door unlocked.",
          "He warned us to not leaving the door unlocked.",
          "He said us not leave the door unlocked.",
        ],
        answer: 1,
        explanation: "चेतावनी की रिपोर्टिंग 'warn + object + not to + verb' ढाँचे से होती है।",
      },
      {
        question: "Complete: 'She ____ for forgetting to attach the file.'",
        options: ["apologised", "said sorry that", "told sorry", "regretted to say"],
        answer: 0,
        explanation: "'apologise for + -ing' का ढाँचा है — और यहाँ 'apologised' सही reporting verb है।",
      },
      {
        question: "Report: 'I have already emailed the client.'",
        options: [
          "He said he already emailed the client.",
          "He said he has already emailed the client.",
          "He said that he had already emailed the client.",
          "He told that he had already emailed the client.",
        ],
        answer: 2,
        explanation:
          "Backshift से present perfect → past perfect बनता है और 'said that' आता है, 'told that' नहीं।",
      },
    ],
  },

  // 9
  {
    topic: "Nominalisation & Academic Style",
    level: "advanced",
    locale: "hi",
    title: "नॉमिनलाइज़ेशन और एकेडेमिक स्टाइल",
    intro:
      "Academic और policy writing में क्रियाएँ संज्ञाओं में बदल जाती हैं — 'we decided' से 'the decision' — और इसी से लेखन dense व वस्तुनिष्ठ लगता है। पर अति में यही तकनीक वाक्य को ऊबाऊ बना देती है; संतुलन ही कौशल है।",
    sections: [
      {
        heading: "क्रिया/विशेषण से संज्ञा बनाना",
        explanation:
          "नॉमिनलाइज़ेशन का मूल ढाँचा है: decide → decision, analyse → analysis, fail → failure, respond → response; important → importance, accurate → accuracy। इसके बाद 'The decision to postpone the election surprised analysts' जैसा वाक्य क्रिया-वाले वाक्य से अधिक formal और compact लगता है। Academic prose में इससे process, कारण और परिणाम को subject बनाया जा सकता है — 'The introduction of the tax led to a sharp decline in sales'।",
        examples: [
          {
            wrong: "The government decided to raise fuel prices, and this made transport costly.",
            right: "The government's decision to raise fuel prices increased transport costs.",
            note: "क्रिया 'decide' संज्ञा 'decision' बनने से दो वाक्य एक dense academic वाक्य में सिमट गए।",
          },
          {
            wrong: "They analysed the samples carefully, which improved the results.",
            right: "Careful analysis of the samples improved the results.",
            note: "'analyse' → 'analysis' और 'carefully' → 'careful' — यही दो कदम nominalisation के हैं।",
          },
          {
            wrong: "It is important to check the data regularly.",
            right: "Regular verification of the data is essential.",
            note: "'check' → 'verification' जैसी संज्ञा से वाक्य का केंद्र कार्य (process) बन जाता है।",
          },
        ],
      },
      {
        heading: "कब nominalisation न करें",
        explanation:
          "हर वाक्य को noun-भारी बनाने से अर्थ दम घुटने लगता है — 'The implementation of the facilitation of learning' जैसी श्रृंखलाएँ बुरी लेखन हैं। नियम: जब कर्ता वास्तव में व्यक्ति हो और क्रिया गतिशील हो, तो सीधी क्रिया रखें — 'The team reviewed the data' बेहतर है 'A review of the data was conducted by the team'। Passive + nominalisation का दोहरा बोझ वाक्य को जड़ बना देता है। संक्षेप, स्पष्टता और प्रवाह — इन तीन को हर nominalisation की कसौटी बनाएँ।",
        examples: [
          {
            wrong: "A decision was made by the committee to conduct an investigation of the delay.",
            right: "The committee decided to investigate the delay.",
            note: "दोहरी nominalisation + passive से वाक्य भारी था — मूल क्रियाओं पर लौटने से स्पष्टता लौटी।",
          },
          {
            wrong: "The implementation of the recommendation was carried out successfully.",
            right: "The recommendation was implemented successfully.",
            note: "'implementation...carried out' में दोहराव था — एक nominalisation हटाने से वाक्य सीधा हुआ।",
          },
          {
            wrong: "Failure of the students to attend classes regularly results in deterioration of academic performance.",
            right: "When students skip classes regularly, their performance deteriorates.",
            note: "संज्ञाओं की श्रृंखला (failure, deterioration) से अर्थ छिप गया था; क्रियाओं वाला वाक्य ज़्यादा स्पष्ट है।",
          },
        ],
      },
    ],
    tips: [
      "Essay के introduction में 'The rapid growth of cities has created...' जैसा nominalised वाक्य thesis को गंभीरता देता है — मुख्य दावों पर इस्तेमाल करें।",
      "प्रत्यय (suffix) याद रखें: -tion/-sion (decide→decision), -ment (develop→development), -ance (perform→performance), -ity (equal→equality)।",
      "एक वाक्य में एक से अधिक nominalisations दिखें तो रुक जाएँ — आमतौर पर एक काफ़ी होती है।",
      "Report की headings और निष्कर्ष nominalised रूप में अच्छे लगते हैं ('Key Findings', 'Budget Allocation'), पर समझाने वाले paragraphs में क्रियाएँ वापस लाएँ।",
    ],
    quiz: [
      {
        question: "Nominalise: 'They decided to expand the plant.'",
        options: [
          "Their decision to expand the plant",
          "Their deciding expand the plant",
          "Their decide to expansion the plant",
          "They decision expanding the plant",
        ],
        answer: 0,
        explanation: "'decide' की संज्ञा 'decision' है और उसके बाद to-infinitive ठीक चलता है।",
      },
      {
        question: "Complete: 'The ____ of the new policy affected thousands of families.'",
        options: ["introduce", "introducing", "introduction", "introduced"],
        answer: 2,
        explanation: "'The' के बाद संज्ञा चाहिए — 'introduction' यहीं nominalised रूप है।",
      },
      {
        question: "Which revision is the clearest (de-nominalised)?",
        options: [
          "An examination of the data was undertaken by the analysts.",
          "The analysts examined the data.",
          "The examination by analysts of the data took place.",
          "Undertaking of examination of data was done by analysts.",
        ],
        answer: 1,
        explanation:
          "जब कर्ता व्यक्ति हो, सीधी क्रिया ('The analysts examined...') सबसे स्पष्ट रहती है।",
      },
      {
        question: "Which suffix correctly turns 'accurate' into a noun?",
        options: ["-tion", "-ment", "-acy", "-ness"],
        answer: 2,
        explanation: "'accurate' → 'accuracy' — -acy प्रत्यय यहाँ सही है।",
      },
      {
        question: "Choose the appropriately nominalised academic sentence:",
        options: [
          "The rapid decline in bee populations worries scientists.",
          "Bees are declining fast and scientists get worried a lot.",
          "Scientists worry because bees decline rapidly so.",
          "It is the worrying of scientists about bees decline.",
        ],
        answer: 0,
        explanation:
          "'decline' यहाँ संज्ञा है और वाक्य compact व वस्तुनिष्ठ है — academic style की पहचान।",
      },
    ],
  },

  // 10
  {
    topic: "Ellipsis & Substitution",
    level: "advanced",
    locale: "hi",
    title: "इलिप्सिस और सब्स्टिट्यूशन: दोहराव से मुक्ति",
    intro:
      "Native speakers एक ही शब्द को बार-बार नहीं कहते — वे उसे छोड़ देते हैं (ellipsis) या 'do/so/one' जैसे स्थानापन्न शब्दों से बुलाते हैं। यही सूक्ष्म तकनीक बातचीत को रटी-रटाई से तरोताज़ा बनाती है।",
    sections: [
      {
        heading: "Ellipsis: दोहराए गए शब्द छोड़ना",
        explanation:
          "जब अर्थ स्पष्ट हो, तो दोहराया हुआ हिस्सा छोड़ा जा सकता है: 'She can play the sitar and (she can) sing' में दूसरा कर्ता + auxiliary हट सकता है। to-infinitive के बाद क्रिया छोड़कर सिर्फ़ 'to' रहता है: 'I wanted to join, but I wasn't able to'। 'than' और 'as' के बाद भी यही होता है: 'He earns more than she does', 'She is as tall as her brother'। छोड़ा गया हिस्सा सुनने वाले के लिए बिना दुविधा वापस लाया जा सकना चाहिए।",
        examples: [
          {
            wrong: "I have never been to Ladakh, but my brother has been to Ladakh.",
            right: "I have never been to Ladakh, but my brother has.",
            note: "दोहराया हिस्सा छोड़कर सिर्फ़ auxiliary 'has' रखना ही स्वाभाविक spoken English है।",
          },
          {
            wrong: "Would you like to come to the workshop? Yes, I would like to come to the workshop.",
            right: "Would you like to come to the workshop? Yes, I would love to.",
            note: "to-infinitive के बाद क्रिया छोड़ना ('I would love to') बातचीत का मानक रूप है।",
          },
          {
            wrong: "She sings better than what I sing.",
            right: "She sings better than I do.",
            note: "'what' यहाँ ग़लत है; 'than I do' में substitution से दोहराव टल गया।",
          },
        ],
      },
      {
        heading: "Substitution: do, so, one/neither का इस्तेमाल",
        explanation:
          "क्रिया की जगह 'do/does/did' चलती है: 'He works harder than she does'। पूरे statement की जगह 'so' (सहमति) या 'not' (असहमति): 'I think so', 'I hope not', 'It appears so'। संज्ञा की जगह 'one/ones': 'This calculator is broken — can I use the other one?' और समानता/असमानता के लिए 'so do I', 'neither do I': 'I have never missed a deadline.' — 'Neither have I'।",
        examples: [
          {
            wrong: "I enjoyed the novel and my sister enjoyed the novel too.",
            right: "I enjoyed the novel and so did my sister.",
            note: "'so did...' पिछले वाक्य का पूरा अर्थ अपने भीतर समेट लेता है।",
          },
          {
            wrong: "Do you think the deal will be approved? I don't think the deal will be approved.",
            right: "Do you think the deal will be approved? I don't think so.",
            note: "'think so/not' से पूरे क्लॉज़ को दोहराने की ज़रूरत ख़त्म हो जाती है।",
          },
          {
            wrong: "These chairs are broken. Please bring the broken chairs from the other room.",
            right: "These chairs are broken. Please bring the ones from the other room.",
            note: "'the ones' दोहराए गए noun की जगह लेता है और बात को हल्का रखता है।",
          },
        ],
      },
    ],
    tips: [
      "Interview में छोटे जवाब प्रभावी होते हैं — 'So do I', 'Absolutely, I'd love to', 'I'm afraid not' जैसे रूप आत्मविश्वास दिखाते हैं।",
      "Ellipsis की सीमा: जहाँ अर्थ दो तरफ़ मुड़ सकता हो (ambiguity), वहाँ शब्द दोहराना ही बेहतर है।",
      "'so/not' वाले जवाब क्रिया के हिसाब से चलते हैं — believe, expect, hope, suppose, seem, appear के साथ ठीक हैं; 'know' के साथ नहीं ('I know so' ग़लत है)।",
      "Writing में 'do so' formal काम आता है: 'If you wish to cancel, you may do so online' — यह पूरी क्रिया दोहराने से बचाता है।",
    ],
    quiz: [
      {
        question: "Complete: 'She has visited Japan, and ____ her husband.'",
        options: ["so has", "so does", "so did", "has so"],
        answer: 0,
        explanation:
          "पहले वाक्य में present perfect ('has visited') है, इसलिए सहमति 'so has' से दिखेगी।",
      },
      {
        question: "Choose the natural reply: 'Would you like to join the trek?'",
        options: [
          "Yes, I would like to join the trek very much, please.",
          "Yes, I'd love to.",
          "Yes, I love.",
          "Yes, I'd love it to.",
        ],
        answer: 1,
        explanation: "to-infinitive ellipsis ('I'd love to') ही स्वाभाविक छोटा जवाब है।",
      },
      {
        question: "Complete: 'Do you think prices will fall? — I ____.'",
        options: ["don't think so", "don't hope", "think not to", "not think"],
        answer: 0,
        explanation: "'think' के साथ असहमति 'I don't think so' से दिखाई जाती है।",
      },
      {
        question: "Choose the correct sentence:",
        options: [
          "She works faster than what he works.",
          "She works more fast than he does.",
          "She works faster than he does.",
          "She works faster than he working.",
        ],
        answer: 2,
        explanation: "'than' के बाद substitution 'he does' ही मानक रूप है; 'what' यहाँ आता ही नहीं।",
      },
      {
        question: "Complete: 'This charger isn't working — can I try ____?'",
        options: ["other", "one another", "another one", "one other"],
        answer: 2,
        explanation: "'another one' दूसरी चीज़ (charger) की सहज substitution है।",
      },
    ],
  },

  // 11
  {
    topic: "Collocations & Word Partnerships",
    level: "advanced",
    locale: "hi",
    title: "कोलोकेशन: सही शब्द-जोड़ियों की ताक़त",
    intro:
      "English में शब्द अकेले नहीं, जोड़ों में रहते हैं — 'heavy rain' होता है, 'strong rain' नहीं। Collocations जानने वाला learner ही सहज, native-जैसी English बोल पाता है।",
    sections: [
      {
        heading: "Verb + Noun की ठहरी जोड़ियाँ",
        explanation:
          "किसी noun के साथ कौन-सी verb चलेगी, यह logic से नहीं, रिवाज़ से तय होता है: 'make a mistake/decision/plan', 'take a risk/a photo', 'pay attention/a compliment', 'conduct research/an experiment', 'meet a deadline', 'break the news'। 'Do a mistake' या 'make research' अर्थ समझ में आने पर भी ग़लत लगते हैं, क्योंकि native कान उम्मीद का जोड़ा सुनना चाहता है। इन्हें शब्द के साथ नहीं, पूरी जोड़ी के साथ याद करें।",
        examples: [
          {
            wrong: "We need to do a decision about the venue today.",
            right: "We need to make a decision about the venue today.",
            note: "decision के साथ 'make' की जोड़ी ठहरी हुई है — 'do a decision' कभी नहीं चलता।",
          },
          {
            wrong: "The scientists made a research on sleep patterns.",
            right: "The scientists conducted research on sleep patterns.",
            note: "research के साथ 'conduct/carry out/do' चलता है — 'make research' आम ग़लती है।",
          },
          {
            wrong: "Please give attention to the highlighted rows.",
            right: "Please pay attention to the highlighted rows.",
            note: "'pay attention' की जोड़ी मानक है; 'give attention' सुनने में अटपटा लगता है।",
          },
        ],
      },
      {
        heading: "Adjective + Noun और Adverb + Adjective जोड़ियाँ",
        explanation:
          "विशेषण-संज्ञा जोड़े भी ठहरे होते हैं: 'heavy rain/traffic', 'strong coffee/argument', 'deep sleep/concern', 'close friend/exam', 'bitter dispute'। तीव्रता बताने वाले adverb + adjective जोड़े भी: 'utterly ridiculous', 'deeply concerned', 'highly successful', 'bitterly disappointed', 'fully aware'। यहाँ भी 'very' हर जगह नहीं चलेगा — 'very ridiculous' नहीं, 'utterly ridiculous' ही native कान को ठीक लगता है।",
        examples: [
          {
            wrong: "There was strong rain throughout the weekend.",
            right: "There was heavy rain throughout the weekend.",
            note: "बारिश और ट्रैफ़िक के साथ 'heavy' आता है — 'strong' coffee और argument का साथी है।",
          },
          {
            wrong: "She was completely disappointed with the verdict.",
            right: "She was bitterly disappointed with the verdict.",
            note: "'bitterly disappointed' ठहरा हुआ जोड़ा है — 'completely disappointed' सही होकर भी साधारण लगता है।",
          },
          {
            wrong: "The report gave big emphasis on teamwork.",
            right: "The report placed great emphasis on teamwork.",
            note: "'place/put emphasis on' की जोड़ी मानक है — 'gave big emphasis' अमान्य है।",
          },
        ],
      },
    ],
    tips: [
      "शब्द को कभी अकेला न रटें — हमेशा उसके दो-तीन आम साथियों के साथ याद करें: 'risk (take/run)', 'deadline (meet/miss)', 'attention (pay/attract)'।",
      "नया शब्द लिखने से पहले collocation dictionary या online tools से उसके साथी जाँच लें — आधे संदेह वहीं ख़त्म हो जाते हैं।",
      "बोलचाल में ग़लत जोड़ा भी समझ आ जाता है, पर interview और essay में सही collocation ही credibility देता है।",
      "मज़बूत adverbs (utterly, deeply, highly, bitterly) वाले जोड़े चुनकर लिखना शुरू करें — 'very' का बोझ तुरंत घट जाएगा।",
    ],
    quiz: [
      {
        question: "Choose the correct collocation: 'The manager must ____ a decision by Friday.'",
        options: ["do", "give", "make", "perform"],
        answer: 2,
        explanation: "'make a decision' ठहरी हुई जोड़ी है; do/give/perform यहाँ नहीं चलते।",
      },
      {
        question: "Choose the correct collocation: 'The court issued a ____ ruling against the company.'",
        options: ["landmark", "earth-shaking", "monument", "milestone"],
        answer: 0,
        explanation:
          "'landmark ruling/decision' की जोड़ी मानक है — ऐतिहासिक महत्व का फ़ैसला इसी से बताया जाता है।",
      },
      {
        question: "Complete the fixed phrase: 'When asked about the missing file, the clerk drew a ____.'",
        options: ["white", "blank", "empty", "vacant"],
        answer: 1,
        explanation: "'draw a blank' का मतलब है कुछ याद न आना — यह ठहरा हुआ वाक्यांश है।",
      },
      {
        question: "Choose the strongest natural intensifier: 'The suggestion was ____ ridiculous and was rejected at once.'",
        options: ["very", "much", "utterly", "too"],
        answer: 2,
        explanation:
          "'utterly ridiculous' ठहरा हुआ adverb + adjective जोड़ा है; 'very ridiculous' native कान को ठीक नहीं लगता।",
      },
      {
        question: "Choose the correct verb: 'The team managed to ____ the deadline despite the outage.'",
        options: ["reach", "meet", "arrive", "catch"],
        answer: 1,
        explanation:
          "'meet a deadline' की जोड़ी मानक है — तारीख़ तक काम पूरा करना इसी क्रिया से कहा जाता है।",
      },
    ],
  },

  // 12
  {
    topic: "Register: Formal vs Informal English",
    level: "advanced",
    locale: "hi",
    title: "रजिस्टर: औपचारिक बनाम अनौपचारिक English",
    intro:
      "एक ही बात को दोस्त से कहने और नियोक्ता को लिखने का ढंग बिल्कुल अलग होता है — यही register है। C1 पर यह पहचानना और संदर्भ के अनुसार बदलना ही सबसे बड़ा practical कौशल है।",
    sections: [
      {
        heading: "शब्द-चयन में फ़र्क़: phrasal vs Latinate",
        explanation:
          "Informal English फ़्रेज़ल verbs और छोटे शब्द पसंद करती है ('put off', 'look into', 'get in touch'), जबकि formal English एक ही Latinate verb चुनती है ('postpone', 'investigate', 'contact')। इसी तरह 'buy → purchase', 'ask → enquire', 'help → assist', 'start → commence'। यह भी याद रखें कि contractions (I'm, don't) formal writing में पूरे रूप (I am, do not) बन जाते हैं।",
        examples: [
          {
            wrong: "The board will look into the complaint and get back to you soon.",
            right: "The board will investigate the complaint and respond to you shortly.",
            note: "Formal report में फ़्रेज़ल verbs ('look into', 'get back') की जगह एक-एक formal verb बेहतर है।",
          },
          {
            wrong: "We wanna start the project asap.",
            right: "We would like to commence the project at the earliest.",
            note: "'wanna' और 'asap' केवल बेहद informal संदर्भ के हैं; formal लेखन में पूरे रूप लिखें।",
          },
          {
            wrong: "Thanks a lot for your help with the audit.",
            right: "I am grateful for your assistance with the audit.",
            note: "Formal email में 'thanks a lot' की जगह 'I am grateful for...' जैसा वाक्यांश उचित है।",
          },
        ],
      },
      {
        heading: "Formal अनुरोध और सूचना के ढाँचे",
        explanation:
          "Formal requests में 'I want you to...' की जगह 'I would be grateful if you could...', 'Would you mind + -ing', 'We kindly request that...' चलते हैं। बुरी ख़बर देने के लिए 'We regret to inform you that...', जानकारी देने के लिए 'I am writing to inform you that...'। Informal तरफ़ 'Just letting you know...', 'Sorry to break the news, but...', 'Can you do me a favour?' — संदर्भ पहचानें और उसी की भाषा बोलें।",
        examples: [
          {
            wrong: "I want you to send the signed copy immediately.",
            right: "I would be grateful if you could send the signed copy at your earliest convenience.",
            note: "'I would be grateful if you could...' formal अनुरोध का मानक ढाँचा है।",
          },
          {
            wrong: "Hey, your application got rejected.",
            right: "We regret to inform you that your application was unsuccessful.",
            note: "औपचारिक निराशा-सूचना के लिए 'We regret to inform you' ढाँचा professional और सहानुभूतिपूर्ण है।",
          },
          {
            wrong: "Dear Sir, I am writing this mail for asking about the job.",
            right: "Dear Sir, I am writing to enquire about the vacancy advertised on your website.",
            note: "'I am writing to + base verb' ही सही ढाँचा है; 'for asking' register और grammar दोनों में ग़लत है।",
          },
        ],
      },
    ],
    tips: [
      "हर email भेजने से पहले स्वयं से पूछें — पाठक कौन है और रिश्ता कितना दूर का है? दूर का रिश्ता = अधिक formal चयन।",
      "Formal writing में contractions हटाएँ, informal speech में रखें — 'do not' और 'don't' का फ़र्क़ ही register का संकेत है।",
      "Exclamations और भावुक शब्द (awesome, super cool) formal documents से दूर रखें; वहाँ प्रशंसा भी तथ्यों से करें।",
      "चार formal ढाँचे कंठस्थ कर लें: 'I am writing to...', 'I would be grateful if...', 'Please find attached...', 'I look forward to hearing from you'।",
    ],
    quiz: [
      {
        question: "Which is the most formal version?",
        options: [
          "We'll get in touch with you soon.",
          "You will hear from us shortly.",
          "We are gonna contact you fast.",
          "We'll buzz you later.",
        ],
        answer: 1,
        explanation:
          "'You will hear from us shortly' में कोई contraction नहीं और 'shortly' formal adverb है।",
      },
      {
        question: "Make formal: 'They put off the meeting.'",
        options: [
          "They stopped the meeting.",
          "They cancelled the meeting.",
          "They postponed the meeting.",
          "They rejected the meeting.",
        ],
        answer: 2,
        explanation: "'put off' का formal single-verb समतुल्य 'postpone' है — अर्थ वही, रजिस्टर ऊँचा।",
      },
      {
        question: "Choose the appropriately formal request:",
        options: [
          "Could you kindly forward the certificate at your earliest convenience?",
          "Send me the certificate fast.",
          "Certificate needed. Send now.",
          "I want the certificate today only.",
        ],
        answer: 0,
        explanation:
          "'Could you kindly...at your earliest convenience' formal अनुरोध का मानक, विनम्र ढाँचा है।",
      },
      {
        question: "Which sentence is informal in register?",
        options: [
          "I regret to inform you that the shipment was delayed.",
          "I look forward to your response.",
          "Just letting you know the parcel's late — sorry!",
          "Please find the revised invoice attached.",
        ],
        answer: 2,
        explanation:
          "'Just letting you know' और contraction वाला ढीला ढंग informal register की पहचान है।",
      },
      {
        question: "Complete the formal opener: '____ enquire about the internship programme, I have attached my résumé.'",
        options: ["For", "In order to", "So as for", "With a view for"],
        answer: 1,
        explanation: "'In order to + base verb' formal उद्देश्य-वाक्यांश है; बाकी रूप अमान्य हैं।",
      },
    ],
  },

  // 13
  {
    topic: "Advanced Tense & Aspect Nuances",
    level: "advanced",
    locale: "hi",
    title: "एडवांस्ड टेंस और आस्पेक्ट की बारीकियाँ",
    intro:
      "C1 पर tense सिर्फ़ 'समय' नहीं, दृष्टिकोण (aspect) चुनने का फ़ैसला है — 'I will present' और 'I will be presenting' के बीच का सूक्ष्म फ़र्क़ ही बड़ा फ़र्क़ है।",
    sections: [
      {
        heading: "Future continuous और future perfect का दृष्टिकोण",
        explanation:
          "Future continuous ('will be + -ing') भविष्य में चल रही प्रक्रिया या तय कार्यक्रम दिखाता है — 'This time tomorrow, we will be flying to Delhi', 'I will be presenting the results at 3 p.m.'। Future perfect ('will have + participle') किसी भविष्य-बिंदु तक पूरी हो चुकी क्रिया बताता है — 'By December, I will have worked here for ten years'। 'by + समय' future perfect की ख़ास पहचान है, जबकि 'this time tomorrow/at 5 p.m.' continuous की।",
        examples: [
          {
            wrong: "At 10 a.m. tomorrow, I will submit the report.",
            right: "At 10 a.m. tomorrow, I will be submitting the report.",
            note: "भविष्य में उस समय जारी/नियोजित कार्य के लिए future continuous ज़्यादा सटीक दृष्टिकोण देता है।",
          },
          {
            wrong: "Until March, I will work here for ten years.",
            right: "By March, I will have worked here for ten years.",
            note: "'by + भविष्य का बिंदु' के साथ future perfect ('will have worked') ही पूरा अर्थ देता है।",
          },
          {
            wrong: "Don't call at nine — we will have dinner.",
            right: "Don't call at nine — we will be having dinner.",
            note: "उस समय चल रही गतिविधि बताने के लिए 'will be having' स्वाभाविक है।",
          },
        ],
      },
      {
        heading: "Past perfect की सूक्ष्म भूमिकाएँ और 'always + -ing'",
        explanation:
          "Past perfect सिर्फ़ क्रम नहीं, अधूरी प्रत्याशा भी दिखाता है — 'I had hoped to attend the summit, but the visa never arrived', 'She had meant to reply, and then forgot'। वर्तमान continuous + always बार-बार की चिढ़ भरी आदत बताता है: 'He is always interrupting me' — simple present की तुलना में इसमें शिकायत का सूर है। 'was going to / was about to' अतीत में बनी भविष्य-योजना बताते हैं: 'I was about to leave when she called'।",
        examples: [
          {
            wrong: "I hoped to meet the author, but she left early.",
            right: "I had hoped to meet the author, but she left early.",
            note: "'had hoped' बताता है कि उम्मीद पहले से थी और पूरी नहीं हुई — निराशा का रंग आ गया।",
          },
          {
            wrong: "He always interrupts me when I speak.",
            right: "He is always interrupting me when I speak.",
            note: "'always + present continuous' चिढ़/शिकायत का सूर देता है, सादा fact नहीं।",
          },
          {
            wrong: "The train was just left when we reached the platform.",
            right: "The train was just about to leave when we reached the platform.",
            note: "'was about to leave' उस क्षण तक पहुँची निकट-योजना बताता है; 'was just left' ग़लत रूप है।",
          },
        ],
      },
    ],
    tips: [
      "भविष्य की योजना बताते समय 'will be + -ing' चुनें — यह कम आक्रामक और अधिक संगठित लगता है ('I will be sending the agenda tomorrow')।",
      "'by' दिखते ही future perfect की ओर ध्यान दें; भविष्य-बिंदु तक की अवधि हो तो भी 'will have + participle' ही चलेगा।",
      "शिकायत ज़ाहिर करनी हो तो 'always/constantly + -ing' का रूप आज़माएँ — 'She is constantly rescheduling meetings'।",
      "Story-telling में पृष्ठभूमि के लिए past continuous, उससे पहले की घटना के लिए past perfect और मुख्य घटना के लिए simple past — यह त्रयी कहानी को गहराई देती है।",
    ],
    quiz: [
      {
        question: "Complete: 'This time next week, we ____ across the Bay of Bengal.'",
        options: ["will sail", "will have sailed", "will be sailing", "are sailing to"],
        answer: 2,
        explanation:
          "'This time next week' उस समय जारी क्रिया दिखाता है — future continuous 'will be sailing' सही है।",
      },
      {
        question: "Complete: 'By the time the auditors arrive, we ____ all the records.'",
        options: ["will have prepared", "will prepare", "will be preparing", "prepare"],
        answer: 0,
        explanation:
          "'By the time...' किसी भविष्य-बिंदु तक पूर्णता बताता है — future perfect 'will have prepared' चाहिए।",
      },
      {
        question: "Which sentence shows unfulfilled hope?",
        options: [
          "I hope to visit Kyoto someday.",
          "I had hoped to visit Kyoto last spring, but the trip fell through.",
          "I will hope to visit Kyoto next year.",
          "I hope I will visit Kyoto soon.",
        ],
        answer: 1,
        explanation:
          "'had hoped...but...' पहले से थी उम्मीद के अधूरे रह जाने को दिखाता है।",
      },
      {
        question: "Choose the sentence that expresses annoyance:",
        options: [
          "He always forgets his badge.",
          "He always forgot his badge.",
          "He is always forgetting his badge.",
          "He will always forget his badge.",
        ],
        answer: 2,
        explanation:
          "'always + present continuous' आदत की चिढ़ ज़ाहिर करता है; simple present केवल fact बताता है।",
      },
      {
        question: "Complete: 'I ____ leave when the fire alarm went off.'",
        options: ["was about to", "have been about to", "am about to", "will be about to"],
        answer: 0,
        explanation:
          "अतीत में निकट भविष्य की योजना 'was about to + base verb' से दिखाई जाती है।",
      },
    ],
  },

  // 14
  {
    topic: "Precision Articles & Quantifiers",
    level: "advanced",
    locale: "hi",
    title: "सटीक आर्टिकल्स और क्वांटिफ़ायर",
    intro:
      "a/an/the और few/a few जैसे छोटे शब्द C1 पर अर्थ बदल देते हैं — 'few friends' और 'a few friends' का अंतर ही आपकी सटीकता की कसौटी है।",
    sections: [
      {
        heading: "the, a/an और zero article की सूक्ष्म शर्तें",
        explanation:
          "'The' तब आता है जब पाठक जानता हो कि हम किस की बात कर रहे हैं — पहला उल्लेख 'a meeting', दूसरा 'the meeting'। संस्था/सामान्य-उद्देश्य अर्थ में zero article चलता है: 'School starts at eight' (पढ़ाई के अर्थ में), पर भवन के अर्थ में 'The school was painted last year'। BrE/AmE की बारीकी भी जान लें: 'in hospital' (BrE, इलाज के लिए) बनाम 'in the hospital' (AmE)। सार-भाव (abstract noun) के सामान्य उल्लेख में article नहीं आता: 'Honesty matters'।",
        examples: [
          {
            wrong: "I had meeting with manager yesterday.",
            right: "I had a meeting with the manager yesterday.",
            note: "पहला उल्लेख 'a meeting', पर 'the manager' — क्योंकि दोनों जानते हैं कि किस प्रबंधक की बात है।",
          },
          {
            wrong: "The honesty is the best policy.",
            right: "Honesty is the best policy.",
            note: "सार-भाव (honesty) के सामान्य उल्लेख में article नहीं आता, चाहे आगे 'the best policy' में the आए।",
          },
          {
            wrong: "School where I studied has become a museum.",
            right: "The school where I studied has become a museum.",
            note: "'where I studied' वाला क्लॉज़ स्कूल को विशिष्ट बना देता है — अब 'the school' ही सही है।",
          },
        ],
      },
      {
        heading: "few/a few और less/fewer की सटीकता",
        explanation:
          "'a few' = कुछ (सकारात्मक रंग) — 'A few students volunteered'; 'few' = लगभग कोई नहीं (नकारात्मक रंग) — 'Few students volunteered, so the event was cancelled'। little/a little भी यही अंतर रखते हैं। गिनने योग्य nouns के लिए fewer, अगिनने योग्य के लिए less — 'fewer employees, less paperwork'। और ध्यान दें: 'A number of students have complained' (plural verb) बनाम 'The number of students has increased' (singular verb) — article बदलते ही verb बदल जाती है।",
        examples: [
          {
            wrong: "Few guests confirmed, so we are confident about the catering.",
            right: "A few guests confirmed, so we are confident about the catering.",
            note: "सकारात्मक उम्मीद वाले संदर्भ में 'a few' (कुछ मेहमान) चाहिए; 'few' यहाँ अर्थ उलट देता है।",
          },
          {
            wrong: "There are less applicants this year than last year.",
            right: "There are fewer applicants this year than last year.",
            note: "applicants गिने जा सकते हैं, इसलिए 'fewer' सही है — 'less' अगिनने योग्य मात्रा के लिए है।",
          },
          {
            wrong: "The number of complaints have doubled this quarter.",
            right: "The number of complaints has doubled this quarter.",
            note: "'The number of...' का कर्ता 'number' है (singular) — verb भी singular आएगी।",
          },
        ],
      },
    ],
    tips: [
      "Paragraph में किसी noun के दूसरे उल्लेख पर स्वयं से पूछें — क्या पाठक अब उसे पहचानता है? हाँ तो 'the' लगाएँ।",
      "'few' या 'little' को बिना 'a' के इस्तेमाल से पहले नकारात्मक रंग जाँचें — 'Little is known about...' जैसे formal रूप बिना 'a' ही सही हैं।",
      "Email में संख्या-तुलना लिखते समय fewer/less और 'a number of / the number of' का फ़र्क़ जाँच लें — reviewer यही दो सूक्ष्मताएँ सबसे पहले पकड़ते हैं।",
      "संस्था-शब्दों (school, hospital, university, prison) के साथ article का निर्णय अर्थ से करें: संस्था/उद्देश्य = zero article; भवन/विशिष्ट = the।",
    ],
    quiz: [
      {
        question: "Complete: '____ honesty of her answer impressed the panel.'",
        options: ["A", "The", "An", "No article"],
        answer: 1,
        explanation:
          "'of her answer' का विशेषक-क्लॉज़ honesty को निश्चित बना देता है — 'The honesty' सही है।",
      },
      {
        question: "Choose the correct sentence (British English):",
        options: [
          "She was in hospital for two weeks after the surgery.",
          "She was in the hospital for two weeks after the surgery.",
          "She was at hospital for two weeks after the surgery.",
          "She was in an hospital for two weeks after the surgery.",
        ],
        answer: 0,
        explanation:
          "BrE में इलाज के उद्देश्य से अस्पताल में रहना zero article के साथ 'in hospital' कहलाता है।",
      },
      {
        question:
          "Complete: '____ candidates applied despite the attractive salary, so the HR team revised the advert.'",
        options: ["A few", "Few", "A little", "The few"],
        answer: 1,
        explanation:
          "नतीजा (advert बदलना) बताता है कि आवेदन पर्याप्त नहीं आए — यही नकारात्मक रंग 'Few' का है।",
      },
      {
        question: "Choose the correct sentence:",
        options: [
          "There is less traffic on Sundays.",
          "There are less cars on Sundays.",
          "There is fewer traffic on Sundays.",
          "There are fewer traffic on Sundays.",
        ],
        answer: 0,
        explanation:
          "traffic अगिनने योग्य है — 'less traffic' सही; cars गिनने योग्य होते तो 'fewer cars' कहते।",
      },
      {
        question:
          "Complete: 'A number of employees ____ requested remote work; the number of requests ____ surprising.'",
        options: ["has / is", "have / are", "have / is", "has / are"],
        answer: 2,
        explanation:
          "'A number of + plural' के बाद plural verb, पर 'The number of' का कर्ता 'number' है, इसलिए singular verb।",
      },
    ],
  },
];

export default LESSONS;
