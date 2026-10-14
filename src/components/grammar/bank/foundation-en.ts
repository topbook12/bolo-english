import type { BankLesson } from "./types";

// Static grammar bank — foundation topics, BEGINNER level (CEFR ~A2),
// English explanations (for users whose UI language is English).
const LESSONS: BankLesson[] = [
  {
    topic: "Tense basics",
    level: "beginner",
    locale: "en",
    title: "Tense Basics: Present, Past and Future",
    intro:
      "Tenses tell your listener WHEN something happens. Master these three simple tenses first and most everyday conversation becomes easy.",
    sections: [
      {
        heading: "The three simple tenses",
        explanation:
          "The simple present describes habits and facts: 'I walk to school.' The simple past describes finished actions: 'I walked to school yesterday.' The simple future with 'will' describes plans and predictions: 'I will walk tomorrow.'",
        examples: [
          {
            wrong: "She go to work by bus.",
            right: "She goes to work by bus.",
            note: "With he, she or it, the present simple adds -s (or -es).",
          },
          {
            wrong: "I am go to the market yesterday.",
            right: "I went to the market yesterday.",
            note: "A finished time like yesterday needs the simple past, not the present.",
          },
          {
            wrong: "Tomorrow I will went to Dhaka.",
            right: "Tomorrow I will go to Dhaka.",
            note: "After will, use the base verb — will never changes the verb.",
          },
        ],
      },
      {
        heading: "Adding -ing: the continuous forms",
        explanation:
          "Continuous tenses show an action in progress around now or at a past moment. Use am, is or are plus the -ing verb for now: 'She is cooking.' Use was or were plus -ing for the past: 'She was cooking at eight.' State verbs like know, like, want and understand stay simple — they do not take -ing.",
        examples: [
          {
            wrong: "I am knowing the answer.",
            right: "I know the answer.",
            note: "Know is a state verb, so it stays in the simple present.",
          },
          {
            wrong: "They playing football now.",
            right: "They are playing football now.",
            note: "The continuous needs am, is or are before the -ing verb.",
          },
          {
            wrong: "We was watching a movie last night.",
            right: "We were watching a movie last night.",
            note: "With we, you and they, use were, not was.",
          },
        ],
      },
    ],
    tips: [
      "Pick one tense per sentence and stick to it — mixing tenses confuses the listener.",
      "Add time words (yesterday, now, tomorrow); they show you which tense you need.",
      "Practise the -s out loud: he plays, she watches, it rains. Ten times each.",
      "Keep a tiny diary: write one past-tense sentence every night, like 'I cooked rice today.'",
    ],
    quiz: [
      {
        question: "My sister ___ tea every morning.",
        options: ["drink", "drunk", "drinks", "is drink"],
        answer: 2,
        explanation:
          "Every morning shows a habit, so use the simple present with -s after she.",
      },
      {
        question: "We ___ to the beach last Sunday.",
        options: ["went", "go", "will go", "are going"],
        answer: 0,
        explanation: "Last Sunday is finished time, so the simple past went is correct.",
      },
      {
        question: "Look! The baby ___ right now.",
        options: ["sleep", "slept", "sleeps", "is sleeping"],
        answer: 3,
        explanation: "Right now signals an action in progress, so use is plus sleeping.",
      },
      {
        question: "I ___ the answer, but thank you.",
        options: ["am knowing", "know", "am know", "known"],
        answer: 1,
        explanation: "Know is a state verb, so it takes the simple present, never -ing.",
      },
      {
        question: "Tomorrow I ___ my grandmother.",
        options: ["will visit", "will visited", "will visiting", "am will visit"],
        answer: 0,
        explanation: "After will, always use the base form of the verb.",
      },
    ],
  },
  {
    topic: "Present Perfect vs Past Simple",
    level: "beginner",
    locale: "en",
    title: "Present Perfect vs Past Simple",
    intro:
      "Both tenses talk about the past, but they answer different questions. Choose the right one and your stories become instantly clearer.",
    sections: [
      {
        heading: "Finished time vs time up to now",
        explanation:
          "Use the past simple when the time is finished and stated: 'I saw that film last week.' Use the present perfect when the time connects to now or is not stated: 'I have seen that film.' Think of it this way: the past simple lives in a closed box of finished time, while the present perfect reaches into the present.",
        examples: [
          {
            wrong: "I have visited Cox's Bazar in 2019.",
            right: "I visited Cox's Bazar in 2019.",
            note: "A finished year like 2019 takes the past simple, not the present perfect.",
          },
          {
            wrong: "I seen this film already.",
            right: "I have seen this film already.",
            note: "Have plus a past participle makes the present perfect: have seen, not seen.",
          },
          {
            wrong: "She has went home.",
            right: "She has gone home.",
            note: "The participle of go is gone — has went is never correct.",
          },
        ],
      },
      {
        heading: "Signal words that decide for you",
        explanation:
          "Some signal words point straight to one tense. Yesterday, last year, in 2020 and ago go with the past simple. Ever, never, just, already and yet usually go with the present perfect. If an action started in the past and continues now, use the present perfect too.",
        examples: [
          {
            wrong: "I have met him two years ago.",
            right: "I met him two years ago.",
            note: "Ago measures finished time, so use the past simple.",
          },
          {
            wrong: "Did you ever eat sushi?",
            right: "Have you ever eaten sushi?",
            note: "Ever asks about life experience up to now, so it belongs with the present perfect.",
          },
          {
            wrong: "I just finish my homework.",
            right: "I have just finished my homework.",
            note: "Just means a very recent completion, so use have finished.",
          },
        ],
      },
    ],
    tips: [
      "Hear a finished time (yesterday, ago, in 2010)? Use the past simple automatically.",
      "Remember the pattern: have or has plus past participle builds the present perfect.",
      "Learn irregular participles in pairs: go–gone, see–seen, eat–eaten, do–done.",
      "'Have you ever...?' is a perfect conversation starter at any gathering.",
    ],
    quiz: [
      {
        question: "I ___ my keys yesterday.",
        options: ["have lost", "lost", "lose", "was losing"],
        answer: 1,
        explanation: "Yesterday is finished time, so the past simple lost fits.",
      },
      {
        question: "She ___ in this office since 2021.",
        options: ["works", "worked", "is working", "has worked"],
        answer: 3,
        explanation: "Since 2021 continues up to now, so the present perfect is correct.",
      },
      {
        question: "___ you ever ___ a horse?",
        options: ["Did / ride", "Have / rode", "Have / ridden", "Do / ridden"],
        answer: 2,
        explanation: "Ever asks about life experience, so use Have with the participle ridden.",
      },
      {
        question: "We ___ that restaurant last Friday.",
        options: ["have tried", "try", "tried", "have try"],
        answer: 2,
        explanation: "Last Friday names a finished day, so the past simple tried is right.",
      },
      {
        question: "The bus ___ just ___.",
        options: ["has / left", "have / left", "has / leave", "is / left"],
        answer: 0,
        explanation: "Just plus a very recent action uses has with the participle left.",
      },
    ],
  },
  {
    topic: "Articles (a/an/the)",
    level: "beginner",
    locale: "en",
    title: "Articles: a, an and the",
    intro:
      "Tiny words, big difference. Articles tell your listener whether you mean any one thing or one exact thing.",
    sections: [
      {
        heading: "a/an: any one of many",
        explanation:
          "Use a or an for one singular countable thing when the listener does not know which one: 'She has a car.' Choose an before a vowel sound: an apple, an egg, an hour. Choose a before a consonant sound: a book, a pen, a university — university starts with a 'yoo' sound.",
        examples: [
          {
            wrong: "I bought an book yesterday.",
            right: "I bought a book yesterday.",
            note: "Book starts with a consonant sound, so a is correct.",
          },
          {
            wrong: "She is a honest woman.",
            right: "She is an honest woman.",
            note: "The h in honest is silent, so the word starts with a vowel sound.",
          },
          {
            wrong: "He is an university student.",
            right: "He is a university student.",
            note: "University begins with a 'yoo' sound, which counts as a consonant sound.",
          },
        ],
      },
      {
        heading: "the: we both know which one",
        explanation:
          "Use the when the listener knows exactly which thing you mean: it was mentioned before, it is unique, or it is the only one nearby. First mention takes a or an, and the second mention takes the: 'I saw a cat. The cat was black.' Superlatives and unique things always take the: the best, the sun, the moon.",
        examples: [
          {
            wrong: "I saw a movie. A movie was great.",
            right: "I saw a movie. The movie was great.",
            note: "The second mention is now known to both speakers, so it takes the.",
          },
          {
            wrong: "Sun rises in east.",
            right: "The sun rises in the east.",
            note: "Unique things like the sun, and directions like the east, take the.",
          },
          {
            wrong: "She is best player in team.",
            right: "She is the best player in the team.",
            note: "Superlatives like best always need the in front.",
          },
        ],
      },
    ],
    tips: [
      "Ask yourself: does my listener know exactly which one? No means a/an, yes means the.",
      "Say the word out loud — choose a or an by the first SOUND, not the first letter.",
      "First mention a/an, second mention the. That one rule fixes most article mistakes.",
      "No article for general plurals: say 'Dogs are loyal', not 'The dogs are loyal'.",
    ],
    quiz: [
      {
        question: "She bought ___ umbrella for the rain.",
        options: ["a", "the", "no article", "an"],
        answer: 3,
        explanation: "Umbrella starts with a vowel sound, so an is correct.",
      },
      {
        question: "I need ___ hour to finish this.",
        options: ["a", "an", "the", "no article"],
        answer: 1,
        explanation: "The h in hour is silent, so the word starts with a vowel sound: an.",
      },
      {
        question: "We stayed at ___ hotel near the station.",
        options: ["the", "no article", "a", "an"],
        answer: 2,
        explanation: "It is one of many hotels and new information, so a is correct.",
      },
      {
        question: "___ moon looks beautiful tonight.",
        options: ["The", "A", "An", "No article"],
        answer: 0,
        explanation: "There is only one moon, so unique things take the.",
      },
      {
        question: "I saw ___ eagle. ___ eagle was huge.",
        options: ["a / A", "an / The", "the / An", "a / The"],
        answer: 1,
        explanation: "The first mention is an eagle; the second mention takes the.",
      },
    ],
  },
  {
    topic: "Prepositions (in/on/at)",
    level: "beginner",
    locale: "en",
    title: "Prepositions of Time and Place: in, on, at",
    intro:
      "In, on and at are small words with strict rules. Learn the three layers and you stop guessing forever.",
    sections: [
      {
        heading: "Place: from big to small",
        explanation:
          "Think of a funnel that goes from big to small. Use in for large areas: in Dhaka, in Bangladesh, in the room. Use on for surfaces and lines: on the table, on the wall, on the bus. Use at for exact points: at the door, at the bus stop, at home.",
        examples: [
          {
            wrong: "I live on Dhaka.",
            right: "I live in Dhaka.",
            note: "A whole city is a large area, so use in.",
          },
          {
            wrong: "Your keys are in the table.",
            right: "Your keys are on the table.",
            note: "A flat surface takes on, not in.",
          },
          {
            wrong: "She is waiting in the bus stop.",
            right: "She is waiting at the bus stop.",
            note: "A bus stop is an exact point, so use at.",
          },
        ],
      },
      {
        heading: "Time: from long to exact",
        explanation:
          "The same funnel works for time. Use in for months, years and seasons: in July, in 2024, in winter. Use on for days and dates: on Monday, on 15 August. Use at for clock times and set points: at 6 o'clock, at night, at noon.",
        examples: [
          {
            wrong: "My birthday is in 5 May.",
            right: "My birthday is on 5 May.",
            note: "A specific date takes on, not in.",
          },
          {
            wrong: "We will meet in 7 p.m.",
            right: "We will meet at 7 p.m.",
            note: "Clock times always take at.",
          },
          {
            wrong: "I was born at 1999.",
            right: "I was born in 1999.",
            note: "Years take in, never at.",
          },
        ],
      },
    ],
    tips: [
      "Memorise the funnel: in = big (city, month, year), on = middle (day, surface), at = exact (point, clock time).",
      "Learn fixed phrases as chunks: at home, at night, on time, in a hurry.",
      "Unsure about place? Ask: is it an area (in), a surface (on) or a point (at)?",
      "Practise with your own day: 'I wake up at 7, work in Dhaka, rest on Friday.'",
    ],
    quiz: [
      {
        question: "The bank opens ___ 9 a.m.",
        options: ["at", "in", "on", "by"],
        answer: 0,
        explanation: "Exact clock times always take at.",
      },
      {
        question: "We have class ___ Tuesday.",
        options: ["in", "on", "at", "for"],
        answer: 1,
        explanation: "Days of the week take on.",
      },
      {
        question: "She grew up ___ Chattogram.",
        options: ["at", "in", "on", "to"],
        answer: 1,
        explanation: "Cities are large areas, so use in.",
      },
      {
        question: "The cat is sleeping ___ the chair.",
        options: ["at", "in", "of", "on"],
        answer: 3,
        explanation: "Resting on a surface takes on.",
      },
      {
        question: "Many flowers bloom ___ spring.",
        options: ["on", "in", "at", "since"],
        answer: 1,
        explanation: "Seasons take in: in spring, in summer, in winter.",
      },
    ],
  },
  {
    topic: "Subject-Verb Agreement",
    level: "beginner",
    locale: "en",
    title: "Subject-Verb Agreement: Make the Verb Match",
    intro:
      "The verb must match its subject in number. One small -s decides whether your sentence sounds right or wrong.",
    sections: [
      {
        heading: "The basic -s rule",
        explanation:
          "With he, she, it or one person, the present simple verb takes -s: 'She plays tennis.' With I, you, we, they or more than one, the verb stays plain: 'They play tennis.' In questions and negatives, does carries the -s, so the main verb returns to base form: 'Does she play?'",
        examples: [
          {
            wrong: "My brother play cricket on Fridays.",
            right: "My brother plays cricket on Fridays.",
            note: "My brother is third-person singular, so the verb needs -s.",
          },
          {
            wrong: "They goes to the same school.",
            right: "They go to the same school.",
            note: "They is plural, so the verb takes no -s.",
          },
          {
            wrong: "Does she likes coffee?",
            right: "Does she like coffee?",
            note: "After does, use the base form: does she like.",
          },
        ],
      },
      {
        heading: "Tricky subjects that fool you",
        explanation:
          "Words like everyone, somebody, each and nobody look plural but take a singular verb: 'Everyone is here.' Two subjects joined by and take a plural verb: 'Rahim and Karim are friends.' With or or nor, the verb matches the nearer subject: 'Neither the boys nor their father was ready.' Extra details between the subject and verb never change the number: 'The box of chocolates is empty.'",
        examples: [
          {
            wrong: "Everyone are happy today.",
            right: "Everyone is happy today.",
            note: "Everyone is always singular, so it takes is.",
          },
          {
            wrong: "The list of names are on the desk.",
            right: "The list of names is on the desk.",
            note: "The subject is list (singular); of names is just extra detail.",
          },
          {
            wrong: "My shoes is new.",
            right: "My shoes are new.",
            note: "Shoes is plural, so the verb must be are.",
          },
        ],
      },
    ],
    tips: [
      "Find the real subject first, then match the verb — ignore the words in between.",
      "Say it aloud: your ear catches 'she play' faster than your eye does.",
      "Treat everyone, nobody, each and every as singular, always.",
      "With there is / there are, match the verb to the noun that follows.",
    ],
    quiz: [
      {
        question: "My father ___ newspapers every morning.",
        options: ["read", "reading", "reads", "is read"],
        answer: 2,
        explanation: "My father is third-person singular, so the present simple needs -s.",
      },
      {
        question: "The colour of these walls ___ amazing.",
        options: ["are", "is", "were", "be"],
        answer: 1,
        explanation: "The subject is colour (singular); of these walls is extra detail.",
      },
      {
        question: "Everyone ___ ready for the test.",
        options: ["is", "are", "were", "have"],
        answer: 0,
        explanation: "Everyone feels plural but is grammatically singular.",
      },
      {
        question: "Rahim and his sister ___ a small shop.",
        options: ["runs", "is running", "has run", "run"],
        answer: 3,
        explanation: "Two subjects joined by and make a plural subject, so use run.",
      },
      {
        question: "Neither the players nor the coach ___ satisfied.",
        options: ["are", "were", "is", "have"],
        answer: 2,
        explanation: "With nor, the verb matches the nearer subject, coach (singular).",
      },
    ],
  },
  {
    topic: "Question Formation",
    level: "beginner",
    locale: "en",
    title: "Question Formation: Asking Clearly",
    intro:
      "Good questions keep conversations alive. English builds them with a fixed word order you can learn in minutes.",
    sections: [
      {
        heading: "The auxiliary-first rule",
        explanation:
          "English questions move the helper verb in front of the subject: 'You are ready' becomes 'Are you ready?' With ordinary verbs, add do, does or did and keep the main verb in base form: 'She works here' becomes 'Does she work here?' The helper carries the tense, so never add -s to the main verb as well.",
        examples: [
          {
            wrong: "Where you live?",
            right: "Where do you live?",
            note: "Questions with ordinary verbs need do, does or did before the subject.",
          },
          {
            wrong: "Does she speaks English?",
            right: "Does she speak English?",
            note: "Does carries the tense, so the main verb stays in base form.",
          },
          {
            wrong: "You are coming tomorrow?",
            right: "Are you coming tomorrow?",
            note: "With be or a helper verb, put it before the subject to ask a question.",
          },
        ],
      },
      {
        heading: "Question words and tags",
        explanation:
          "Question words come first, then the helper, then the subject: 'Where did you go?' Use what for things, where for places, when for time, why for reasons and how for manner. For quick confirmations, add a small tag at the end: 'It is hot, isn't it?' — a positive sentence takes a negative tag.",
        examples: [
          {
            wrong: "What you did last night?",
            right: "What did you do last night?",
            note: "Question word, then did, then subject, then base verb.",
          },
          {
            wrong: "Why she is late?",
            right: "Why is she late?",
            note: "With be, the be-verb moves before the subject after the question word.",
          },
          {
            wrong: "How much cost this bag?",
            right: "How much does this bag cost?",
            note: "Use does, then the subject, then the base verb.",
          },
        ],
      },
    ],
    tips: [
      "Remember the dance: question word, helper, subject, verb.",
      "One tense marker per question: did OR the past verb — never both.",
      "Practise five question-word questions a day about your own life: 'What did I eat?'",
      "Use friendly tags like 'Nice day, isn't it?' to start conversations.",
    ],
    quiz: [
      {
        question: "___ your brother play football?",
        options: ["Do", "Does", "Is", "Has"],
        answer: 1,
        explanation: "Your brother is singular, so the question helper is does.",
      },
      {
        question: "Where ___ you go last weekend?",
        options: ["did", "do", "does", "were"],
        answer: 0,
        explanation: "Last weekend is past time, so the helper is did.",
      },
      {
        question: "___ she coming to the party?",
        options: ["Do", "Does", "Has", "Is"],
        answer: 3,
        explanation: "Coming needs a be-verb helper, and she takes is.",
      },
      {
        question: "___ did you buy yesterday?",
        options: ["Where", "What", "When", "Why"],
        answer: 1,
        explanation: "The question asks about a thing, so what is correct.",
      },
      {
        question: "It's a lovely day, ___?",
        options: ["is it", "isn't it", "does it", "isn't there"],
        answer: 1,
        explanation: "A positive statement takes a negative tag with the same verb: isn't it.",
      },
    ],
  },
  {
    topic: "Conditionals",
    level: "beginner",
    locale: "en",
    title: "Conditionals: Sentences with If",
    intro:
      "If-sentences let you talk about plans, dreams and advice. English keeps them in just three easy patterns.",
    sections: [
      {
        heading: "Real possibilities: types 0 and 1",
        explanation:
          "Type 0 talks about facts and habits: 'If you heat ice, it melts.' Both sides use the present simple. Type 1 talks about real future chances: 'If it rains, I will stay home.' The if-side stays in the present; only the result side takes will.",
        examples: [
          {
            wrong: "If she will come, I will tell her.",
            right: "If she comes, I will tell her.",
            note: "The if-part uses the present simple; will only appears in the result.",
          },
          {
            wrong: "If you will study, you pass.",
            right: "If you study, you will pass.",
            note: "Present after if, will in the result — that is type 1.",
          },
          {
            wrong: "If water reach 100 degrees, it boils.",
            right: "If water reaches 100 degrees, it boils.",
            note: "Type 0 uses the present simple on both sides, with -s after it.",
          },
        ],
      },
      {
        heading: "Dreams and advice: type 2",
        explanation:
          "Type 2 talks about unreal or unlikely situations: 'If I had a million taka, I would travel the world.' Use the past simple after if and would plus the base verb in the result. For advice, use the fixed phrase 'If I were you, I would apologise' — were for every subject. This pattern sounds imaginary, not past.",
        examples: [
          {
            wrong: "If I was you, I would apologise.",
            right: "If I were you, I would apologise.",
            note: "Advice conditionals use were for all subjects: if I were you.",
          },
          {
            wrong: "If I have more time, I would read more.",
            right: "If I had more time, I would read more.",
            note: "Unreal situations take the past after if, not the present.",
          },
          {
            wrong: "If he studied harder, he will pass.",
            right: "If he studied harder, he would pass.",
            note: "Match the result to the dream: would, not will.",
          },
        ],
      },
    ],
    tips: [
      "Fixed formula for the future: if plus present, then will plus verb.",
      "Formula for dreams: if plus past, then would plus verb. Say it like a chant.",
      "'If I were you, I'd...' is your go-to phrase for polite advice.",
      "Never put will or would inside the if-part of the sentence.",
    ],
    quiz: [
      {
        question: "If it ___ tomorrow, we will cancel the picnic.",
        options: ["will rain", "rained", "would rain", "rains"],
        answer: 3,
        explanation: "Type 1 uses the present simple after if for real future chances.",
      },
      {
        question: "If I ___ rich, I would buy a boat.",
        options: ["am", "will be", "were", "have been"],
        answer: 2,
        explanation: "Type 2 dreams use the past form: if I were.",
      },
      {
        question: "If you mix blue and yellow, you ___ green.",
        options: ["will get", "would get", "get", "got"],
        answer: 2,
        explanation: "Type 0 facts use the present simple on both sides.",
      },
      {
        question: "If I were you, I ___ that job.",
        options: ["will take", "would take", "take", "took"],
        answer: 1,
        explanation: "Advice conditionals finish with would plus the base verb.",
      },
      {
        question: "She will pass the exam if she ___ harder.",
        options: ["will study", "would study", "studied", "studies"],
        answer: 3,
        explanation: "Even when if comes second, the if-part stays in the present simple.",
      },
    ],
  },
  {
    topic: "Passive Voice",
    level: "beginner",
    locale: "en",
    title: "Passive Voice: When the Action Matters",
    intro:
      "Sometimes the doer is unknown or unimportant. The passive moves the object into the spotlight instead.",
    sections: [
      {
        heading: "Building the passive",
        explanation:
          "The passive is built with be plus the past participle: 'The letter was written.' The be-verb carries the tense: is for present, was or were for past, will be for future. You can name the doer with by: 'The letter was written by Rahim.'",
        examples: [
          {
            wrong: "The window broke by the boys.",
            right: "The window was broken by the boys.",
            note: "The passive needs be plus the participle: was broken.",
          },
          {
            wrong: "Rice is grow in Bangladesh.",
            right: "Rice is grown in Bangladesh.",
            note: "Grow becomes the participle grown in the passive.",
          },
          {
            wrong: "The email will sent tomorrow.",
            right: "The email will be sent tomorrow.",
            note: "The future passive is will be plus the participle.",
          },
        ],
      },
      {
        heading: "When to choose the passive",
        explanation:
          "Use the passive when the doer is unknown, obvious or unimportant: 'My bag was stolen.' It also keeps the same subject through a text: 'The school was built in 1990 and was repaired in 2015.' In friendly conversation the active voice is usually more natural, so treat the passive as a tool, not a habit.",
        examples: [
          {
            wrong: "My phone stolen last night.",
            right: "My phone was stolen last night.",
            note: "The passive needs the be-verb: was stolen.",
          },
          {
            wrong: "English speaks in many countries.",
            right: "English is spoken in many countries.",
            note: "English receives the action, so use is plus the participle spoken.",
          },
          {
            wrong: "This bridge built in 1932.",
            right: "This bridge was built in 1932.",
            note: "Finished passive actions use was or were plus the participle.",
          },
        ],
      },
    ],
    tips: [
      "Formula to memorise: the correct tense of be plus the past participle.",
      "Add by only when the doer gives real information.",
      "When the doer is unknown ('my bag was stolen'), the passive sounds natural.",
      "Check your participles: speak–spoken, write–written, grow–grown, build–built.",
    ],
    quiz: [
      {
        question: "This song ___ by millions every year.",
        options: ["is played", "plays", "played", "is playing"],
        answer: 0,
        explanation: "The song receives the action, so the present passive is played fits.",
      },
      {
        question: "The office ___ cleaned every evening.",
        options: ["are", "was", "will be", "is"],
        answer: 3,
        explanation: "Every evening signals a present habit, so the passive needs is cleaned.",
      },
      {
        question: "The thief ___ by the police last night.",
        options: ["catch", "caught", "was caught", "is catching"],
        answer: 2,
        explanation: "The past passive is was or were plus the participle: was caught.",
      },
      {
        question: "English ___ all over the world.",
        options: ["speaking", "is spoken", "speaks", "spoken"],
        answer: 1,
        explanation: "English receives the action, so use is plus spoken.",
      },
      {
        question: "A new road ___ next month.",
        options: ["will build", "builds", "is building", "will be built"],
        answer: 3,
        explanation: "The future passive is will be plus the participle: will be built.",
      },
    ],
  },
  {
    topic: "Modals (can/should/must)",
    level: "beginner",
    locale: "en",
    title: "Modals: can, should and must",
    intro:
      "These three little verbs express ability, advice and duty. Use them well and you sound both polite and clear.",
    sections: [
      {
        heading: "can: ability and permission",
        explanation:
          "Can shows ability: 'I can swim.' It also asks for and gives permission: 'Can I open the window?' Can has one form for every subject and takes the base verb with no to. For past ability, use could: 'I could read at five.'",
        examples: [
          {
            wrong: "She can drives a car.",
            right: "She can drive a car.",
            note: "After any modal, the main verb stays in base form.",
          },
          {
            wrong: "I can to swim very well.",
            right: "I can swim very well.",
            note: "No to after can — the two verbs sit side by side.",
          },
          {
            wrong: "He cans speak three languages.",
            right: "He can speak three languages.",
            note: "Modals never take -s, even after he or she.",
          },
        ],
      },
      {
        heading: "should and must: advice and necessity",
        explanation:
          "Should gives friendly advice or opinions: 'You should rest.' Must expresses strong necessity or rules: 'You must wear a helmet.' Must not means forbidden: 'You must not smoke here,' while don't have to only means it is not necessary. For missed past advice, use should have plus the participle: 'You should have called me.'",
        examples: [
          {
            wrong: "You should to see a doctor.",
            right: "You should see a doctor.",
            note: "Like can, should takes the base verb with no to.",
          },
          {
            wrong: "Students musts submit homework by Friday.",
            right: "Students must submit homework by Friday.",
            note: "Must has one form for every subject.",
          },
          {
            wrong: "You don't should eat so fast.",
            right: "You shouldn't eat so fast.",
            note: "The negative of should is shouldn't, not don't should.",
          },
        ],
      },
    ],
    tips: [
      "Golden rule: modal plus base verb. No to, no -s, no -ing.",
      "Soften requests with could and should — they sound politer than must.",
      "must not means forbidden; don't have to only means not necessary. Big difference!",
      "For past advice, use should have plus the participle: 'I should have studied.'",
    ],
    quiz: [
      {
        question: "___ you help me lift this box?",
        options: ["Should", "Must", "Could", "Must not"],
        answer: 2,
        explanation: "Could makes a polite request for help.",
      },
      {
        question: "You ___ wear a seatbelt. It's the law.",
        options: ["must", "can", "could", "might"],
        answer: 0,
        explanation: "Rules and strong necessity take must.",
      },
      {
        question: "He ___ speak Arabic fluently — amazing!",
        options: ["cans", "can", "is can", "can to"],
        answer: 1,
        explanation: "Can has one form for every subject and takes the base verb.",
      },
      {
        question: "You ___ smoke here. It's forbidden.",
        options: ["don't must", "not can", "shouldn't have", "must not"],
        answer: 3,
        explanation: "Prohibition uses must not: it is against the rules.",
      },
      {
        question: "You look tired. You ___ go to bed early.",
        options: ["must not", "can", "should", "would"],
        answer: 2,
        explanation: "Friendly advice uses should.",
      },
    ],
  },
  {
    topic: "Phrasal Verbs",
    level: "beginner",
    locale: "en",
    title: "Phrasal Verbs: Small Words, Big Meanings",
    intro:
      "Native speakers rarely say 'enter' — they say 'come in'. Phrasal verbs make your English sound natural and alive.",
    sections: [
      {
        heading: "Verb plus little word, new meaning",
        explanation:
          "A phrasal verb is a verb plus a small word (up, down, in, out, on, off) that creates a brand-new meaning: 'give up' means quit and 'look after' means take care of. The meaning rarely comes from the parts, so learn each phrase like a single word. Phrasal verbs often replace formal verbs: 'find out' means discover, and 'put off' means postpone.",
        examples: [
          {
            wrong: "I will search my keys in my bag.",
            right: "I will look for my keys in my bag.",
            note: "Look for is the natural phrasal verb for searching.",
          },
          {
            wrong: "Don't quit up now — you are close!",
            right: "Don't give up now — you are close!",
            note: "The phrasal verb for quitting is give up, not quit up.",
          },
          {
            wrong: "Please take care about my cat.",
            right: "Please look after my cat.",
            note: "Look after means to take care of someone or something.",
          },
        ],
      },
      {
        heading: "Separable or inseparable?",
        explanation:
          "Some phrasal verbs split around the object: 'turn off the light' or 'turn the light off.' With pronouns the split is required: 'turn it off,' never 'turn off it.' Other phrases never split: 'look after her,' never 'look her after.' Three-word phrases like 'run out of' keep all their parts: 'We ran out of milk.'",
        examples: [
          {
            wrong: "I will turn off it.",
            right: "I will turn it off.",
            note: "With a pronoun object, separable phrasal verbs must split.",
          },
          {
            wrong: "Can you look my bags after?",
            right: "Can you look after my bags?",
            note: "Look after never splits — the object follows the whole phrase.",
          },
          {
            wrong: "I ran out money before payday.",
            right: "I ran out of money before payday.",
            note: "Run out of is a three-word phrase, so of is required.",
          },
        ],
      },
    ],
    tips: [
      "Learn phrasal verbs in pairs with their plain verb: discover = find out.",
      "Learn each phrase as one chunk — the meaning rarely comes from the parts.",
      "Pronoun rule: it goes in the middle — turn it off, pick it up, put it on.",
      "Use five today: wake up, get up, look for, give up, come back.",
    ],
    quiz: [
      {
        question: "They ___ the match because of rain.",
        options: ["put on", "put off", "put up", "put in"],
        answer: 1,
        explanation: "Put off means to postpone something to a later time.",
      },
      {
        question: "Please ___ the baby while I cook.",
        options: ["look after", "look for", "look up", "look into"],
        answer: 0,
        explanation: "Look after means to take care of someone.",
      },
      {
        question: "I must ___ my glasses. Have you seen them?",
        options: ["give up", "turn up", "look for", "look after"],
        answer: 2,
        explanation: "Look for means to search for something you have lost.",
      },
      {
        question: "She ___ smoking last year. She feels great.",
        options: ["gave in", "gave away", "gave out", "gave up"],
        answer: 3,
        explanation: "Give up means to stop a habit for good.",
      },
      {
        question: "___ the light before you leave the room.",
        options: ["Turn on", "Turn up", "Turn off", "Turn into"],
        answer: 2,
        explanation: "Turn off switches something to its not-working state.",
      },
    ],
  },
  {
    topic: "Common Mistakes by Bengali Speakers",
    level: "beginner",
    locale: "en",
    title: "Common Mistakes by Bengali Speakers",
    intro:
      "Bengali and English play by different rules, so certain errors appear again and again. Spotting your top ones is the fastest fix you will ever get.",
    sections: [
      {
        heading: "Articles, the be-verb and 'I am agree'",
        explanation:
          "Bengali has no separate words for a, an and the, so learners often drop them: 'I saw bird' instead of 'I saw a bird.' Bengali can also build a sentence with no be-verb at all — the equivalent of 'I teacher' — which produces mistakes like 'He very tall.' And because Bengali often uses continuous-style verbs for states, learners say 'I am agree,' but agree is a full verb in English, so it is simply 'I agree.'",
        examples: [
          {
            wrong: "I am agree with your plan.",
            right: "I agree with your plan.",
            note: "Agree is a normal verb in English — am is not needed.",
          },
          {
            wrong: "She is knowing the answer.",
            right: "She knows the answer.",
            note: "Mental states like know use the simple present, never -ing.",
          },
          {
            wrong: "He is very honest person.",
            right: "He is a very honest person.",
            note: "Singular countable nouns need a or an before them.",
          },
        ],
      },
      {
        heading: "Word-for-word translation traps",
        explanation:
          "Some polite Bengali phrases translate word for word and puzzle English speakers: 'What is your good name?' is simply 'What is your name?' State verbs like know, like, want and understand stay simple in English — the Bengali continuous form does not transfer. And some English verbs take a direct object with no preposition: we discuss a topic (not 'discuss about'), and we request something (not 'request for').",
        examples: [
          {
            wrong: "What is your good name, sir?",
            right: "What is your name, sir?",
            note: "English has no 'good name' — just ask for the name.",
          },
          {
            wrong: "We discussed about the issue.",
            right: "We discussed the issue.",
            note: "Discuss takes a direct object — no about.",
          },
          {
            wrong: "I am going to the office daily.",
            right: "I go to the office daily.",
            note: "Daily habits take the simple present, not the continuous.",
          },
        ],
      },
    ],
    tips: [
      "Train your ear for articles: say 'a bird, the sky' until it feels natural.",
      "Ban 'I am agree' from your speech today — just say 'I agree.'",
      "Use the present simple for habits: daily, usually and every day all signal it.",
      "Swap 'good name' for 'name' — it sounds friendly and professional.",
    ],
    quiz: [
      {
        question: "Choose the correct sentence.",
        options: [
          "I am agree with you.",
          "I am agreeing with you.",
          "I am agree to you.",
          "I agree with you.",
        ],
        answer: 3,
        explanation: "Agree is a normal verb in English, so it needs no am.",
      },
      {
        question: "Choose the correct sentence.",
        options: [
          "We discussed about the plan.",
          "We discussed the plan.",
          "We discussed for the plan.",
          "We discussed to the plan.",
        ],
        answer: 1,
        explanation: "Discuss takes a direct object with no preposition.",
      },
      {
        question: "Choose the correct sentence.",
        options: [
          "I saw a bird in the tree.",
          "I saw bird in tree.",
          "I saw the bird in a sky.",
          "I saw an birds in tree.",
        ],
        answer: 0,
        explanation: "English needs articles: a bird, the tree.",
      },
      {
        question: "Which question is natural English?",
        options: [
          "What is your good name?",
          "Which is your good name?",
          "What is your name?",
          "How is your name?",
        ],
        answer: 2,
        explanation: "English speakers simply ask 'What is your name?'",
      },
      {
        question: "Choose the correct sentence.",
        options: [
          "She goes to university by bus.",
          "She is going to university by bus every day.",
          "She go to university by bus.",
          "She is go to university by bus.",
        ],
        answer: 0,
        explanation: "Habits with every day take the present simple: she goes.",
      },
    ],
  },
  {
    topic: "Since vs For",
    level: "beginner",
    locale: "en",
    title: "Since vs For: Talking About Time Up to Now",
    intro:
      "'Since 2020' and 'for five years' both point back in time, but mixing them up is one of the most common slips in English. One glance at the rule and you will never mix them again.",
    sections: [
      {
        heading: "for: a length of time",
        explanation:
          "For answers the question 'how long?' — it takes a length of time: for ten minutes, for three days, for a long time. The length can sit in the past, present or future: 'I lived there for two years,' 'I have lived here for two years,' 'I will stay for a week.' Quick test: if you can count it in minutes, days, months or years, use for.",
        examples: [
          {
            wrong: "I have lived here since five years.",
            right: "I have lived here for five years.",
            note: "Five years is a length of time, so use for.",
          },
          {
            wrong: "She has worked here for 2019.",
            right: "She has worked here since 2019.",
            note: "2019 is a starting point, so since is required.",
          },
          {
            wrong: "I will stay there since a week.",
            right: "I will stay there for a week.",
            note: "A week is a counted period, so future plans use for.",
          },
        ],
      },
      {
        heading: "since: a starting point",
        explanation:
          "Since points to the exact moment something started: since Monday, since 2015, since childhood. Since is normally paired with a perfect tense: 'It has rained since morning.' Both words can even appear together: 'I have known her for ten years, since 2015.' Remember the pair: a point in time takes since, and a stretch of time takes for.",
        examples: [
          {
            wrong: "I know him since 2010.",
            right: "I have known him since 2010.",
            note: "Since needs a perfect tense: have known.",
          },
          {
            wrong: "He has been sick for Monday.",
            right: "He has been sick since Monday.",
            note: "Monday is a starting point, so use since.",
          },
          {
            wrong: "They are married since ten years.",
            right: "They have been married for ten years.",
            note: "Ten years is a length, and the sentence needs have been.",
          },
        ],
      },
    ],
    tips: [
      "Point vs length: a starting moment takes since; a counted stretch takes for.",
      "Since usually partners with the present perfect (have or has plus participle).",
      "Say it to yourself: 'since Monday' (a point), 'for five days' (a stretch).",
      "Watch your own sentences for 'since [number] years' — that mix-up is everywhere.",
    ],
    quiz: [
      {
        question: "I have lived in Dhaka ___ 2018.",
        options: ["for", "from", "since", "at"],
        answer: 2,
        explanation: "2018 is a starting point, so since is correct.",
      },
      {
        question: "We have waited ___ twenty minutes.",
        options: ["since", "from", "at", "for"],
        answer: 3,
        explanation: "Twenty minutes is a length of time, so use for.",
      },
      {
        question: "She has been my friend ___ childhood.",
        options: ["for", "since", "during", "from"],
        answer: 1,
        explanation: "Childhood marks when the friendship started: since childhood.",
      },
      {
        question: "They have been married ___ ten years.",
        options: ["for", "since", "from", "during"],
        answer: 0,
        explanation: "Ten years is a counted period, so for fits.",
      },
      {
        question: "___ I moved here, I have made many friends.",
        options: ["For", "Since", "During", "While"],
        answer: 1,
        explanation: "Since plus a past event marks the starting point of the ongoing situation.",
      },
    ],
  },
];

export default LESSONS;
