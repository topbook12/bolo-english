import type { BankLesson } from "./types";

// Static grammar bank — foundation topics, INTERMEDIATE level (CEFR ~B1),
// English explanations (for users whose UI language is English).
const LESSONS: BankLesson[] = [
  {
    topic: "Tense basics",
    level: "intermediate",
    locale: "en",
    title: "Tense Basics: Perfect and Continuous Forms",
    intro:
      "You already control the three simple tenses; now it is time to add depth. Perfect and continuous forms let you say not just WHEN something happens, but how long it lasts and in what order events unfold.",
    sections: [
      {
        heading: "The perfect forms: one event seen from another moment",
        explanation:
          "The present perfect (have/has + past participle) connects a past action to now: 'I have lost my keys.' The past perfect (had + past participle) steps further back and marks the EARLIER of two past events: 'When I reached the station, the train had left.' Think of had + participle as the past of the past.",
        examples: [
          {
            wrong: "When the train left, I reached the station.",
            right: "When I reached the station, the train had left.",
            note: "The past perfect (had left) marks the action that happened first.",
          },
          {
            wrong: "She is working at this school since 2019.",
            right: "She has been working at this school since 2019.",
            note: "Since + a starting point needs the present perfect continuous, not the present continuous.",
          },
          {
            wrong: "I had went to bed before the phone rang.",
            right: "I had gone to bed before the phone rang.",
            note: "After had, use the past participle gone, never went.",
          },
        ],
      },
      {
        heading: "Continuous forms: past and future in progress",
        explanation:
          "The past continuous (was/were + -ing) paints the background of a story: 'I was cooking when the lights went out.' The future continuous (will be + -ing) describes an action already in progress at a future moment: 'This time tomorrow I will be sitting on the train to Rajshahi.' Both forms make your timeline precise instead of vague.",
        examples: [
          {
            wrong: "While I cooked dinner, the lights went out.",
            right: "While I was cooking dinner, the lights went out.",
            note: "The longer background action takes the past continuous.",
          },
          {
            wrong: "This time tomorrow I will travel to Rajshahi.",
            right: "This time tomorrow I will be travelling to Rajshahi.",
            note: "Will be + -ing places the action in progress at that future moment.",
          },
          {
            wrong: "At ten o'clock he will wait for you at the gate.",
            right: "At ten o'clock he will be waiting for you at the gate.",
            note: "A fixed future moment plus an action in progress calls for the future continuous.",
          },
        ],
      },
      {
        heading: "Keeping your tenses consistent in a story",
        explanation:
          "A narrative needs one anchor tense. If you start a story in the past, stay in the past, and use the past perfect only to flash back further: 'I reached home late. My mother had already eaten.' Jumping between tenses without a reason is one of the clearest markers of a B1 learner — and one of the easiest habits to fix.",
        examples: [
          {
            wrong: "Yesterday I go to the market and meet my old teacher.",
            right: "Yesterday I went to the market and met my old teacher.",
            note: "Yesterday locks the whole story into the past.",
          },
          {
            wrong: "When I got home, my mother already cooks dinner.",
            right: "When I got home, my mother had already cooked dinner.",
            note: "Her cooking happened before I got home, so use had cooked.",
          },
          {
            wrong: "Last week we are visiting our village and it rained heavily.",
            right: "Last week we visited our village and it rained heavily.",
            note: "Do not mix a present form into a finished past event.",
          },
        ],
      },
    ],
    tips: [
      "Before speaking, choose your time anchor — now, before now, or after now — and keep every verb loyal to it.",
      "Two past actions? Give the earlier one the past perfect and the later one the simple past.",
      "For + a length of time loves the perfect continuous: I have been waiting for three hours.",
      "Rewrite one diary line each night in three layers — simple, continuous, perfect — and feel the difference.",
    ],
    quiz: [
      {
        question: "By the time we reached the hall, the seminar ___.",
        options: ["already started", "has already started", "had already started", "was already starting"],
        answer: 2,
        explanation:
          "Our reaching came second; the starting came first, so the earlier action takes the past perfect.",
      },
      {
        question: "I ___ for my exam results since Monday morning.",
        options: ["wait", "am waiting", "have been waiting", "waited"],
        answer: 2,
        explanation:
          "Since Monday stretches from the past into now, so the present perfect continuous fits best.",
      },
      {
        question: "This time next Sunday we ___ our grandparents in the village.",
        options: ["will visit", "will be visiting", "visit", "have visited"],
        answer: 1,
        explanation:
          "This time next Sunday fixes a moment, and the visit will be in progress at that moment: will be visiting.",
      },
      {
        question: "While I ___ the dishes, my brother was watching TV.",
        options: ["did", "was doing", "have done", "had done"],
        answer: 1,
        explanation:
          "Two parallel past actions: the longer background one takes the past continuous, was doing.",
      },
      {
        question: "Last night I ___ my homework and then helped my mother.",
        options: ["finish", "have finished", "had finished", "finished"],
        answer: 3,
        explanation:
          "The word then makes the order clear, so both actions stay in the simple past: finished.",
      },
    ],
  },
  {
    topic: "Subject-Verb Agreement",
    level: "intermediate",
    locale: "en",
    title: "Subject-Verb Agreement: The Tricky Subjects",
    intro:
      "Most agreement rules are easy — until everyone, neither nor, and ten kilometres walk into your sentence. This lesson covers exactly those traps that separate careful speakers from careless ones.",
    sections: [
      {
        heading: "Each, every and the -body/-one family are singular",
        explanation:
          "Each, every, everyone, everybody, somebody, nobody and either always take a singular verb, even when a plural noun follows: 'Every one of the students has a roll number.' Do not let the nearby plural fool you — find the true subject before choosing the verb.",
        examples: [
          {
            wrong: "Everyone in our class have submitted the form.",
            right: "Everyone in our class has submitted the form.",
            note: "Everyone is singular, so it takes has.",
          },
          {
            wrong: "Each of the players were given a new jersey.",
            right: "Each of the players was given a new jersey.",
            note: "The subject is each, not players — cross out the phrase and check.",
          },
          {
            wrong: "Neither of my two cousins live in Chattogram.",
            right: "Neither of my two cousins lives in Chattogram.",
            note: "Neither of + a plural noun still takes a singular verb in careful English.",
          },
        ],
      },
      {
        heading: "Either/or and neither/nor: agree with the nearer subject",
        explanation:
          "With either...or and neither...nor, the verb agrees with the subject closest to it. 'Neither the players nor the coach was happy.' 'Either the coach or the players are responsible.' When one part is plural, placing it nearer the verb usually sounds smoother too.",
        examples: [
          {
            wrong: "Neither the manager nor the workers was satisfied.",
            right: "Neither the manager nor the workers were satisfied.",
            note: "Workers sits nearer to the verb, so the verb becomes plural.",
          },
          {
            wrong: "Either Rina or her sisters is coming today.",
            right: "Either Rina or her sisters are coming today.",
            note: "Her sisters stands next to the verb, so use are.",
          },
          {
            wrong: "Not only the teacher but also the students was praised.",
            right: "Not only the teacher but also the students were praised.",
            note: "The same near-subject rule applies after not only...but also.",
          },
        ],
      },
      {
        heading: "Collectives, uncountables and measured amounts",
        explanation:
          "Collective nouns like team, family and committee normally take a singular verb when the group acts as one unit. Uncountables — news, information, furniture, advice, luggage — are always singular. And an amount of money, time or distance behaves as one single thing: 'Ten thousand taka is a big sum.'",
        examples: [
          {
            wrong: "The news are very sad today.",
            right: "The news is very sad today.",
            note: "News ends in -s but is uncountable and singular.",
          },
          {
            wrong: "Our team have won all five matches this season.",
            right: "Our team has won all five matches this season.",
            note: "The team acting as one unit takes has.",
          },
          {
            wrong: "Five kilometres are too far to walk in this heat.",
            right: "Five kilometres is too far to walk in this heat.",
            note: "A measured distance acts as one single amount.",
          },
        ],
      },
    ],
    tips: [
      "Cross out prepositional phrases like 'of the players' before choosing the verb — the true subject hides behind them.",
      "Memorise the singular squad: everyone, each, every, everybody, nobody, neither of, either of.",
      "With neither...nor and either...or, point at the noun nearest the verb — that noun decides.",
      "News, physics, mathematics and information end in -s but are singular; they love a singular verb.",
    ],
    quiz: [
      {
        question: "Everyone in the queue ___ waiting patiently for the counter to open.",
        options: ["is", "are", "were", "have been"],
        answer: 0,
        explanation: "Everyone is always singular, so the verb is is.",
      },
      {
        question: "Neither the students nor the teacher ___ informed about the change.",
        options: ["were", "have been", "was", "are"],
        answer: 2,
        explanation: "The nearer subject, teacher, is singular, so was is correct.",
      },
      {
        question: "The list of selected candidates ___ on the notice board.",
        options: ["are", "is", "were", "have been"],
        answer: 1,
        explanation: "The subject is list, not candidates — a singular list is.",
      },
      {
        question: "Ten thousand taka ___ enough for the semester's books.",
        options: ["are", "were", "is", "have been"],
        answer: 2,
        explanation: "A sum of money acts as one single amount, so the singular is fits.",
      },
      {
        question: "Each of the participants ___ a certificate at the closing ceremony.",
        options: ["were given", "have been given", "was given", "are given"],
        answer: 2,
        explanation: "Each is the real subject and it is singular, so was given is correct.",
      },
    ],
  },
  {
    topic: "Question Formation",
    level: "intermediate",
    locale: "en",
    title: "Question Formation: Indirect Questions, Tags and Subject Questions",
    intro:
      "At B1 you need two kinds of questions: the polite kind that opens doors and the natural kind that keeps conversations flowing. This lesson polishes both — including the famous universal 'isn't it' problem.",
    sections: [
      {
        heading: "Indirect questions: polite and mistake-proof",
        explanation:
          "To sound polite, wrap your question inside a phrase: 'Could you tell me...?', 'Do you know...?', 'I wonder...'. After the phrase, use normal statement order — no do/does/did, and the verb comes after the subject: 'Could you tell me where the station is?' Getting this wrong is the most visible B1 slip in polite situations.",
        examples: [
          {
            wrong: "Could you tell me where is the station?",
            right: "Could you tell me where the station is?",
            note: "Inside an indirect question the subject comes before the verb.",
          },
          {
            wrong: "Do you know what means this word?",
            right: "Do you know what this word means?",
            note: "No do-support inside the embedded question.",
          },
          {
            wrong: "Can you tell me how much does this book cost?",
            right: "Can you tell me how much this book costs?",
            note: "Drop does and let costs follow the subject.",
          },
        ],
      },
      {
        heading: "Tag questions: matching the right tag",
        explanation:
          "A tag copies the auxiliary of the main clause and flips it: positive sentence, negative tag — 'You are coming, aren't you?' Negative sentence, positive tag — 'He can drive, can't he?' Learn the specials: I am → aren't I, and Let's → shall we. The all-purpose tag 'isn't it?' works in South Asian classrooms but not in international English.",
        examples: [
          {
            wrong: "You are coming to the wedding, isn't it?",
            right: "You are coming to the wedding, aren't you?",
            note: "The tag must match the subject and the auxiliary: are → aren't you.",
          },
          {
            wrong: "They didn't reach home late, didn't they?",
            right: "They didn't reach home late, did they?",
            note: "A negative sentence takes a positive tag.",
          },
          {
            wrong: "Let's start the revision, will we?",
            right: "Let's start the revision, shall we?",
            note: "Suggestions with let's always take shall we.",
          },
        ],
      },
      {
        heading: "Subject questions, negative questions and stranded prepositions",
        explanation:
          "When who or what IS the subject of the question, there is no do: 'Who broke the window?' — not 'Who did break the window?' Negative questions like 'Didn't you get my message?' express surprise or a check. And in everyday English a preposition can stay at the end: 'Which college are you applying to?'",
        examples: [
          {
            wrong: "Who did call you last night?",
            right: "Who called you last night?",
            note: "When who is the subject, use statement word order.",
          },
          {
            wrong: "Didn't you finished the assignment?",
            right: "Didn't you finish the assignment?",
            note: "After didn't, the base form finish returns.",
          },
          {
            wrong: "About which topic are you talking?",
            right: "Which topic are you talking about?",
            note: "Everyday English leaves the preposition at the end.",
          },
        ],
      },
    ],
    tips: [
      "Indirect question formula: polite opener + statement order. Say the direct question first, then remove do/does/did.",
      "Tags mirror the verb: is → isn't, can → can't, did → didn't — and I am becomes aren't I.",
      "If who or what replaces the subject, delete do/does/did instantly.",
      "Soften any request by upgrading can to could or may: Could I leave a little early today?",
    ],
    quiz: [
      {
        question: "Could you tell me ___?",
        options: ["where is the exam hall", "where the exam hall is", "where is exam hall", "the exam hall is where"],
        answer: 1,
        explanation: "An indirect question keeps statement order: the exam hall is.",
      },
      {
        question: "You have finished the whole chapter, ___?",
        options: ["isn't it", "haven't you", "didn't you", "have you"],
        answer: 1,
        explanation: "A positive sentence with have takes the negative tag haven't you.",
      },
      {
        question: "___ the lights when the storm started?",
        options: ["Who switched off", "Who did switch off", "Who switches off", "Whom switched off"],
        answer: 0,
        explanation: "Who is the subject of the question, so no did is needed: who switched off.",
      },
      {
        question: "I am on the list of finalists, ___?",
        options: ["amn't I", "am not I", "aren't I", "isn't I"],
        answer: 2,
        explanation: "The standard tag for I am is aren't I.",
      },
      {
        question: "Do you know ___?",
        options: ["when does the shop open", "when the shop opens", "when opens the shop", "when shop opens"],
        answer: 1,
        explanation: "After do you know, the embedded clause uses statement order and no does.",
      },
    ],
  },
  {
    topic: "Prepositions (in/on/at)",
    level: "intermediate",
    locale: "en",
    title: "Prepositions in Depth: in time, on time and Other Fixed Pairs",
    intro:
      "At B1 the small words start doing big work. in time and on time are five letters apart but mean completely different things — and dozens of adjective + preposition pairs refuse to follow any logic at all.",
    sections: [
      {
        heading: "in time vs on time — and other time pairs",
        explanation:
          "On time means punctual, exactly at the agreed moment: 'The 8 a.m. train left on time.' In time means early enough, before it is too late: 'We reached the platform in time to catch the train.' Similarly, at the end points to the final part of something, while in the end means eventually, after everything has happened.",
        examples: [
          {
            wrong: "The rickshaw arrived exactly in time.",
            right: "The rickshaw arrived exactly on time.",
            note: "Punctual arrival is on time.",
          },
          {
            wrong: "We reached the stadium on time to see the first goal.",
            right: "We reached the stadium in time to see the first goal.",
            note: "Early enough to do something is in time to...",
          },
          {
            wrong: "At the end, we decided to share the bill.",
            right: "In the end, we decided to share the bill.",
            note: "In the end means finally, after all of it.",
          },
        ],
      },
      {
        heading: "Adjective and verb + preposition partnerships",
        explanation:
          "These pairs are fixed — no logic, just memory: interested in, good at, afraid of, depend on, married to, angry with. Learn them as single chunks the way you learn vocabulary, and never translate them word by word from your first language.",
        examples: [
          {
            wrong: "I am interested on photography.",
            right: "I am interested in photography.",
            note: "Interested always partners with in.",
          },
          {
            wrong: "She is very good in mental maths.",
            right: "She is very good at mental maths.",
            note: "Good at a skill, but good for your health.",
          },
          {
            wrong: "Whether we play depends of the weather.",
            right: "Whether we play depends on the weather.",
            note: "Depend takes on, never of.",
          },
        ],
      },
      {
        heading: "Idiomatic chunks: in a hurry, on purpose, at risk",
        explanation:
          "Everyday English stores feelings and situations in three-word chunks: in a hurry (rushing), on purpose (deliberately), at risk (in danger), in a good mood, on duty, at ease. Say them whole — splitting or swapping one word makes the phrase sound foreign instantly.",
        examples: [
          {
            wrong: "Sorry I can't talk — I am on a hurry.",
            right: "Sorry I can't talk — I am in a hurry.",
            note: "Rushing is in a hurry.",
          },
          {
            wrong: "I didn't switch off the alarm with purpose.",
            right: "I didn't switch off the alarm on purpose.",
            note: "Deliberately is on purpose; its opposite is by accident.",
          },
          {
            wrong: "Families near the river are on risk of flooding.",
            right: "Families near the river are at risk of flooding.",
            note: "In danger is at risk.",
          },
        ],
      },
    ],
    tips: [
      "Stop translating prepositions; memorise the whole chunk — interested IN, good AT, depend ON.",
      "On time = punctual; in time = early enough. Test yourself with the train timetable.",
      "Collect three-word phrases from dramas and note them whole in a notebook: in a hurry, at risk, on duty.",
      "Most mistakes come from on/of swaps — pause and double-check every 'of' you say.",
    ],
    quiz: [
      {
        question: "The flight left exactly ___ 7:30 — beautifully punctual.",
        options: ["in time", "on time", "at time", "by time"],
        answer: 1,
        explanation: "Punctual, at the scheduled moment, is on time.",
      },
      {
        question: "Luckily the doctor arrived ___ to save the patient.",
        options: ["on time", "in time", "at time", "for time"],
        answer: 1,
        explanation: "Early enough to do something is in time to do it.",
      },
      {
        question: "My younger sister is very good ___ drawing mehendi patterns.",
        options: ["at", "in", "on", "with"],
        answer: 0,
        explanation: "Good at is the fixed pair for skills.",
      },
      {
        question: "The whole village depends ___ the river for fish and farming.",
        options: ["of", "in", "on", "from"],
        answer: 2,
        explanation: "Depend on is the fixed pair.",
      },
      {
        question: "He broke my favourite cup, but it wasn't ___ — it slipped.",
        options: ["with purpose", "on purpose", "in purpose", "for purpose"],
        answer: 1,
        explanation: "Deliberately is on purpose; its opposite is by accident.",
      },
    ],
  },
  {
    topic: "Articles (a/an/the)",
    level: "intermediate",
    locale: "en",
    title: "Articles at B1: Zero Article, Generics and Second Mentions",
    intro:
      "Bangla and Hindi manage perfectly well without a, an and the — English refuses to. At this level the danger is no longer missing articles; it is the silent traps, above all knowing when to use none at all.",
    sections: [
      {
        heading: "Zero article: abstract and uncountable nouns in general",
        explanation:
          "When you mean an idea in general — honesty, education, happiness, information — use no article at all: 'Honesty is the best policy.' Adding the suddenly narrows the meaning to a specific instance: 'The honesty of that shopkeeper impressed everyone.' One tiny word, one whole shift of meaning.",
        examples: [
          {
            wrong: "The honesty is the best policy.",
            right: "Honesty is the best policy.",
            note: "An abstract idea in general takes no article.",
          },
          {
            wrong: "She gave me an useful advice before the exam.",
            right: "She gave me useful advice before the exam.",
            note: "Advice is uncountable — no a/an and no plural -s.",
          },
          {
            wrong: "The life in a village is simple.",
            right: "Life in a village is simple.",
            note: "Life as a general idea takes no article.",
          },
        ],
      },
      {
        heading: "Generic plural vs the + specific group",
        explanation:
          "A plural noun with no article makes a general statement about all of them: 'Rickshaws are part of Dhaka's charm.' The + plural points at a particular, identifiable set: 'The rickshaws near the station charge double.' Same word, different world. And remember the chain: first mention a shawl, second mention the shawl.",
        examples: [
          {
            wrong: "The tigers are beautiful animals.",
            right: "Tigers are beautiful animals.",
            note: "Talking about tigers in general? Drop the.",
          },
          {
            wrong: "Tigers of the Sundarbans are endangered.",
            right: "The tigers of the Sundarbans are endangered.",
            note: "A specific, identified group needs the.",
          },
          {
            wrong: "I bought a shawl. Shawl was woven in Tangail.",
            right: "I bought a shawl. The shawl was woven in Tangail.",
            note: "The second mention switches a to the.",
          },
        ],
      },
      {
        heading: "Superlatives, unique things and one-of-a-kind nouns",
        explanation:
          "Superlatives always carry the: the best, the tallest, the most delicious. So do unique things — the sun, the moon, the sky, the internet. But single-mount names stay bare: we say the Himalayas yet Mount Everest. These small traditions are learned one by one, not by rule.",
        examples: [
          {
            wrong: "She is most talented singer in our club.",
            right: "She is the most talented singer in our club.",
            note: "A superlative always takes the.",
          },
          {
            wrong: "We found the answer on Internet.",
            right: "We found the answer on the Internet.",
            note: "The internet is one of the unique nouns that takes the.",
          },
          {
            wrong: "The Mount Everest lies between Nepal and Tibet.",
            right: "Mount Everest lies between Nepal and Tibet.",
            note: "Single mountain names keep the bare form: Mount Everest, but the Himalayas.",
          },
        ],
      },
    ],
    tips: [
      "Abstract idea in general → no article. The same idea tied to a phrase → the: education, but the education system of our district.",
      "First mention a, second mention the — follow the shawl through your own story.",
      "Spot a superlative? Put the in front of it, every single time.",
      "Uncountables never take a: advice, information, furniture, luggage, homework.",
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
        explanation: "Patience as a general abstract idea takes no article.",
      },
      {
        question: "I saw a stray dog near the gate. ___ dog was limping.",
        options: ["A", "The", "One", "Some"],
        answer: 1,
        explanation: "The second mention of the same dog takes the.",
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
        explanation: "A generic plural (rickshaws) plus a superlative with the is the natural combination.",
      },
      {
        question: "She won ___ prize for the best essay in the competition.",
        options: ["a", "the", "an", "no article"],
        answer: 0,
        explanation: "One prize among many takes a, while the best essay is a superlative with the.",
      },
      {
        question: "My grandfather listens to ___ news on the radio every evening.",
        options: ["a", "the", "an", "no article"],
        answer: 1,
        explanation: "The news is a fixed expression that always takes the.",
      },
    ],
  },
  {
    topic: "Present Perfect vs Past Simple",
    level: "intermediate",
    locale: "en",
    title: "Present Perfect vs Past Simple: The B1 Borderline",
    intro:
      "You met this pair as a beginner; now we cross the real border between them — still, yet, already, and the news-reader's rule. Get these right and examiners visibly relax.",
    sections: [
      {
        heading: "Finished time vs time that still touches now",
        explanation:
          "The past simple lives with closed time words: yesterday, last week, in 2021, two years ago. The present perfect lives with open stretches: today, this week, so far, ever, since 2021. Ask yourself one question — is the time window still open? If it is, the perfect keeps it open too.",
        examples: [
          {
            wrong: "I have watched two films last night.",
            right: "I watched two films last night.",
            note: "Last night is closed time — past simple.",
          },
          {
            wrong: "I saw three films this week so far.",
            right: "I have seen three films this week so far.",
            note: "So far keeps the week open — present perfect.",
          },
          {
            wrong: "She has visited her village in 2022.",
            right: "She visited her village in 2022.",
            note: "In 2022 is a finished year.",
          },
        ],
      },
      {
        heading: "yet, already, just, still — four tiny signals",
        explanation:
          "Yet lives in negatives and questions: 'I haven't finished yet.' Already lives in positives, often meaning sooner than expected: 'He has already left.' Just marks completion seconds ago: 'The shop has just closed.' Still, usually with a negative perfect, complains about duration: 'She still hasn't replied.'",
        examples: [
          {
            wrong: "I have finished my revision yet.",
            right: "I haven't finished my revision yet.",
            note: "Yet needs a negative or a question.",
          },
          {
            wrong: "He didn't arrive still.",
            right: "He still hasn't arrived.",
            note: "Still + hasn't/haven't shows the delay continues up to now.",
          },
          {
            wrong: "The rickshaw has come just.",
            right: "The rickshaw has just come.",
            note: "Just sits between have and the participle.",
          },
        ],
      },
      {
        heading: "News first, details second",
        explanation:
          "Announce fresh news with the present perfect, then give the details in the past simple: 'Bangladesh has won the series! They beat Ireland by four wickets last night.' The perfect opens the topic; the past simple fills in when, where and how. This headline rhythm is exactly how newsreaders and commentators speak.",
        examples: [
          {
            wrong: "Our team has beaten them in the final last Friday.",
            right: "Our team beat them in the final last Friday.",
            note: "Last Friday is closed time, even inside news.",
          },
          {
            wrong: "Have you seen Rahim? — Yes, I have seen him at ten o'clock.",
            right: "Have you seen Rahim? — Yes, I saw him at ten o'clock.",
            note: "A stated clock time pulls the answer into the past simple.",
          },
          {
            wrong: "The minister announced a new stipend — she has made the speech an hour ago.",
            right: "The minister has announced a new stipend. She made the speech an hour ago.",
            note: "News in the perfect; the dated detail in the past simple.",
          },
        ],
      },
    ],
    tips: [
      "Ask one question: is the time window still open? Open → present perfect; closed → past simple.",
      "yet = negative or question; already = positive surprise; just = brand new; still = still waiting.",
      "For news, open the headline with the perfect, then stamp the timestamp in the past simple.",
      "Ever and never almost always drag the present perfect with them: Have you ever eaten Thai food?",
    ],
    quiz: [
      {
        question: "I ___ my glasses — I can't find them anywhere.",
        options: ["lost", "have lost", "was losing", "had lost"],
        answer: 1,
        explanation: "The result matters right now (I can't find them), so the present perfect fits.",
      },
      {
        question: "She ___ her cousins in Chattogram last Eid.",
        options: ["has visited", "visits", "visited", "has been visiting"],
        answer: 2,
        explanation: "Last Eid is finished time, so the past simple visited is correct.",
      },
      {
        question: "We ___ for the bus for forty minutes and it still isn't here.",
        options: ["wait", "waited", "have been waiting", "are waiting"],
        answer: 2,
        explanation: "The waiting began in the past and continues now: have been waiting.",
      },
      {
        question: "He is the most honest shopkeeper I ___ ever ___.",
        options: ["did / met", "have / met", "had / met", "am / meeting"],
        answer: 1,
        explanation: "Ever + life experience takes the present perfect: have met.",
      },
      {
        question: "I ___ him at the market yesterday, but I ___ him since.",
        options: ["met / have not seen", "have met / did not see", "met / did not see", "have met / have not seen"],
        answer: 0,
        explanation:
          "Yesterday is closed time (met), while since leaves the window open (have not seen).",
      },
    ],
  },
  {
    topic: "Conditionals",
    level: "intermediate",
    locale: "en",
    title: "Conditionals: If, Unless and Wishes",
    intro:
      "Type 1 plans the future; type 2 dreams about the impossible present. Then there is unless, which quietly flips everything on its head. Master these and your English becomes both more careful and more creative.",
    sections: [
      {
        heading: "Type 1 vs type 2: real chance vs imagination",
        explanation:
          "Type 1 (if + present, will + verb) deals with real possibilities: 'If it rains tomorrow, the match will be cancelled.' Type 2 (if + past, would + verb) imagines unlikely or impossible presents: 'If I were the captain, I would change the batting order.' The golden rule: will and would never enter the if-clause.",
        examples: [
          {
            wrong: "If it will rain tomorrow, we will cancel the picnic.",
            right: "If it rains tomorrow, we will cancel the picnic.",
            note: "The if-clause stays in the simple present.",
          },
          {
            wrong: "If I was a bird, I will fly to Saint Martin's.",
            right: "If I were a bird, I would fly to Saint Martin's.",
            note: "An impossible dream takes the past form plus would.",
          },
          {
            wrong: "If she studies harder, she would top the class.",
            right: "If she studied harder, she would top the class.",
            note: "Would in the result needs the past form in the if-clause.",
          },
        ],
      },
      {
        heading: "unless, as long as, provided that",
        explanation:
          "Unless means if...not: 'Unless you hurry, you will miss the rickshaw.' Never add a second not — one negative is enough. As long as and provided that add a condition with a promise inside: 'You can borrow my notes as long as you return them on Sunday.' They sound more confident than a plain if.",
        examples: [
          {
            wrong: "Unless you don't book early, you won't get a seat.",
            right: "Unless you book early, you won't get a seat.",
            note: "Unless already carries the 'not' — remove the extra don't.",
          },
          {
            wrong: "You can join the trip as long you share the fuel cost.",
            right: "You can join the trip as long as you share the fuel cost.",
            note: "The chunk is as long as — three words, always together.",
          },
          {
            wrong: "We will reach Sylhet by noon, provided the traffic will stay light.",
            right: "We will reach Sylhet by noon, provided that the traffic stays light.",
            note: "The condition clause takes the simple present, not will.",
          },
        ],
      },
      {
        heading: "wish + past: regretting right now",
        explanation:
          "To want a different present, step the verb back: 'I wish I had a motorcycle' (I don't have one). Careful English prefers were for every subject: 'I wish I were taller.' And remember — wish + would complains about other people or the weather, never about your own actions.",
        examples: [
          {
            wrong: "I wish I have more free time.",
            right: "I wish I had more free time.",
            note: "An unreal present takes the past form had.",
          },
          {
            wrong: "I wish my exam comes next month.",
            right: "I wish my exam came next month.",
            note: "You want a different present, so shift the verb back: came.",
          },
          {
            wrong: "I wish I am taller so I could play in the front row.",
            right: "I wish I were taller so I could play in the front row.",
            note: "Wishes prefer were for every subject.",
          },
        ],
      },
    ],
    tips: [
      "The if-clause takes present or past only; will and would live in the other half of the sentence.",
      "Hear unless? Delete any second not — 'unless you don't' is a double negative.",
      "Type 2 test: real or dream? If it is a dream, add would and step the verb back to past.",
      "For wishes about now, take one step back: have → had, am → were, comes → came.",
    ],
    quiz: [
      {
        question: "If the rickshaw puller ___ fast, we will catch the six o'clock train.",
        options: ["will go", "goes", "would go", "went"],
        answer: 1,
        explanation: "Type 1 keeps the if-clause in the simple present: goes.",
      },
      {
        question: "If I ___ the manager, I would give everyone a festival bonus.",
        options: ["am", "was", "were", "will be"],
        answer: 2,
        explanation: "An imaginary present takes the past form — and were is the classic choice.",
      },
      {
        question: "___ you leave now, you will miss the last launch to Barishal.",
        options: ["Unless", "If", "As long as", "Provided that"],
        answer: 0,
        explanation: "Only unless gives the negative meaning: if you do not leave...",
      },
      {
        question: "You may borrow my cycle ___ you bring it back by evening.",
        options: ["unless", "as long as", "in case", "otherwise"],
        answer: 1,
        explanation: "A condition attached to permission is as long as (or provided that).",
      },
      {
        question: "I wish our exams ___ next week instead of tomorrow.",
        options: ["will start", "start", "started", "would starting"],
        answer: 2,
        explanation: "A wish about the present steps back to the past form: started.",
      },
    ],
  },
  {
    topic: "Passive Voice",
    level: "intermediate",
    locale: "en",
    title: "Passive Voice Across the Tenses",
    intro:
      "The passive is not just 'be + past participle' — at B1 it changes costume in every tense. It also decides who gets the spotlight in your sentence: the action, or the actor.",
    sections: [
      {
        heading: "One passive, many tenses",
        explanation:
          "The pattern is be + past participle, and only the be changes: 'The bridge is repaired every year' (present), 'is being repaired right now' (present continuous), 'was repaired last month', 'has been repaired', 'had been repaired before the rains', 'will be repaired soon'. Notices, news and exam questions use every one of these forms.",
        examples: [
          {
            wrong: "The new flyover is building right now.",
            right: "The new flyover is being built right now.",
            note: "An action in progress takes is being + built.",
          },
          {
            wrong: "Your parcel has been send to the wrong branch.",
            right: "Your parcel has been sent to the wrong branch.",
            note: "After has been, use the participle sent.",
          },
          {
            wrong: "The results will announce next Sunday.",
            right: "The results will be announced next Sunday.",
            note: "Will needs be before the participle: will be announced.",
          },
        ],
      },
      {
        heading: "The by-phrase: keep it only when it matters",
        explanation:
          "Add by + doer only when the doer is new, interesting information: 'The National Anthem was written by Rabindranath Tagore.' If the doer is unknown, obvious or unimportant, drop it: 'My phone was stolen,' 'The road is cleaned every morning.' A by-phrase that adds nothing is dead weight.",
        examples: [
          {
            wrong: "My wallet was stolen by somebody on the crowded bus.",
            right: "My wallet was stolen on the crowded bus.",
            note: "By somebody adds no information — cut it.",
          },
          {
            wrong: "English is spoken by people all over the world.",
            right: "English is spoken all over the world.",
            note: "The doer is general, so the by-phrase disappears.",
          },
          {
            wrong: "The thief arrested by the police yesterday.",
            right: "The thief was arrested by the police yesterday.",
            note: "A passive still needs be: was arrested.",
          },
        ],
      },
      {
        heading: "Choosing the passive on purpose",
        explanation:
          "Use the passive when the receiver matters more than the doer — processes, rules, headlines: 'First the tea leaves are picked, then they are dried in the sun.' News loves it too: 'Three students were rescued from the river.' The passive keeps the topic of your story in the subject position of every sentence.",
        examples: [
          {
            wrong: "First somebody picks the leaves, then somebody dries them, and finally somebody packs them.",
            right: "First the leaves are picked, then they are dried, and finally they are packed.",
            note: "Processes flow better when the product stays the subject.",
          },
          {
            wrong: "Mobile phones must not use during the exam.",
            right: "Mobile phones must not be used during the exam.",
            note: "After must, the passive needs be + used.",
          },
          {
            wrong: "The new library will opening next month.",
            right: "The new library will be opened next month.",
            note: "The future passive is will be + participle.",
          },
        ],
      },
    ],
    tips: [
      "Build every passive in two moves: choose be in the right tense, then add the past participle.",
      "Name the doer only if the listener would ask 'who did it?' Otherwise send the by-phrase home.",
      "Past participles are the fuel: send–sent, build–built, write–written, steal–stolen. Drill the irregular list.",
      "Describing a process — tea, salt, paper, jute? The passive will make you sound instantly professional.",
    ],
    quiz: [
      {
        question: "The classroom ___ whitewashed every winter.",
        options: ["is", "is being", "was", "has been"],
        answer: 0,
        explanation: "Every winter marks a regular habit — the simple present passive is.",
      },
      {
        question: "Look! The old theatre ___ into a museum.",
        options: ["is converting", "is being converted", "has converted", "converts"],
        answer: 1,
        explanation: "It is happening right now, and the theatre receives the action: is being converted.",
      },
      {
        question: "The notice ___ before we reached the office.",
        options: ["has been taken down", "had been taken down", "was taking down", "is taken down"],
        answer: 1,
        explanation: "Before we reached marks the earlier of two past events: had been taken down.",
      },
      {
        question: "This song ___ by Kazi Nazrul Islam.",
        options: ["wrote", "was written", "is writing", "has written"],
        answer: 1,
        explanation: "The doer is the interesting information here, so the passive keeps the by-phrase: was written.",
      },
      {
        question: "Applications ___ accepted after Friday.",
        options: ["will not", "will be not", "will not been", "will not be"],
        answer: 3,
        explanation: "The future passive is will not be + participle: will not be accepted.",
      },
    ],
  },
  {
    topic: "Modals (can/should/must)",
    level: "intermediate",
    locale: "en",
    title: "Modals at B1: Deduction, Obligation and Polite Permission",
    intro:
      "can, should and must are only the entrance; the real power lies in must be, can't be, have to and may. This lesson trains you to guess smartly, obey gracefully and ask politely.",
    sections: [
      {
        heading: "Deduction: must be, might be, can't be",
        explanation:
          "Use must be for a confident conclusion from evidence: 'The lights are on — they must be home.' Use might or could be for an open guess: 'She might be at the library.' Use can't be for an impossible conclusion: 'That can't be Rahim — he flew to Dubai yesterday.' And remember: the negative of must be (deduction) is can't be, not mustn't be.",
        examples: [
          {
            wrong: "The shop is closed, so he mustn't be at the market.",
            right: "The shop is closed, so he can't be at the market.",
            note: "An impossible conclusion takes can't be; mustn't means forbidden.",
          },
          {
            wrong: "She must to be tired after the night shift.",
            right: "She must be tired after the night shift.",
            note: "Modals never take to before the next verb.",
          },
          {
            wrong: "He might to know the answer.",
            right: "He might know the answer.",
            note: "After might, the base verb follows directly.",
          },
        ],
      },
      {
        heading: "Obligation vs advice: must, have to, should",
        explanation:
          "Must often comes from the speaker's own feeling or authority: 'I must call my mother tonight.' Have to comes from outside rules: 'Students have to wear the uniform.' Should is advice, not law: 'You should drink more water.' In everyday speech have to is the workhorse, and must can even sound dramatic or urgent.",
        examples: [
          {
            wrong: "At our college you should wear the ID card — it is a strict rule.",
            right: "At our college you have to wear the ID card — it is a strict rule.",
            note: "An external rule takes have to, not the soft should.",
          },
          {
            wrong: "You must seeing a doctor about that cough.",
            right: "You should see a doctor about that cough.",
            note: "Friendly advice is should, and modals take the base verb.",
          },
          {
            wrong: "I don't must work on Friday.",
            right: "I don't have to work on Friday.",
            note: "Negative obligation uses don't have to; must has no don't.",
          },
        ],
      },
      {
        heading: "Polite permission and the semi-modals",
        explanation:
          "'Can I open the window?' is correct but casual. 'May I...?' and 'Could I...?' raise the politeness level: 'May I come in, sir?' The semi-modals extend the family: be able to (ability in any tense), have to (obligation), used to (past habit) — 'I used to play in this field as a boy.'",
        examples: [
          {
            wrong: "Sir, can I leaving five minutes early today?",
            right: "Sir, may I leave five minutes early today?",
            note: "May I is the polite standard in classrooms and offices.",
          },
          {
            wrong: "I am used to get up at dawn.",
            right: "I am used to getting up at dawn.",
            note: "Be used to + -ing means 'accustomed to'.",
          },
          {
            wrong: "After the surgery she will can walk again.",
            right: "After the surgery she will be able to walk again.",
            note: "Will can is impossible; use will be able to.",
          },
        ],
      },
    ],
    tips: [
      "Deduction ladder: must be (sure) → might/could be (maybe) → can't be (impossible).",
      "mustn't = don't do it; don't have to = no need to do it. Two very different doors.",
      "Every modal takes the bare base verb: can go, must go, should go — no to, no -s, no -ing.",
      "In shops and offices, upgrade can to could: Could I see the price list, please?",
    ],
    quiz: [
      {
        question: "Anis isn't answering his phone. He ___ in the exam hall.",
        options: ["mustn't be", "must be", "can't to be", "should be"],
        answer: 1,
        explanation: "A confident guess from evidence takes must be; mustn't would mean prohibition.",
      },
      {
        question: "That ___ be the postman at this hour — the postman always comes after lunch.",
        options: ["should", "would", "can't", "must"],
        answer: 2,
        explanation: "Something you believe is impossible takes can't be.",
      },
      {
        question: "Passengers ___ show their tickets before boarding the launch.",
        options: ["must to", "have to", "would rather", "am used to"],
        answer: 1,
        explanation: "An outside rule takes have to — and only have to is grammatical in this list.",
      },
      {
        question: "You ___ eat so much junk food — it is bad for your stomach.",
        options: ["shouldn't", "don't have to", "mustn't to", "haven't to"],
        answer: 0,
        explanation: "Advice against something is shouldn't; don't have to would only remove an obligation.",
      },
      {
        question: "Ma'am, ___ I use your charger for a minute?",
        options: ["May", "Must", "Should", "Would"],
        answer: 0,
        explanation: "For polite permission, may I is the safest formal choice.",
      },
    ],
  },
  {
    topic: "Phrasal Verbs",
    level: "intermediate",
    locale: "en",
    title: "Phrasal Verbs: Pronoun Position and Everyday Sets",
    intro:
      "Phrasal verbs are the heartbeat of spoken English — and pronouns are exactly where learners stumble. Pick it up, never pick up it. Let's sort the separable from the inseparable once and for all.",
    sections: [
      {
        heading: "Separable verbs: the pronoun goes in the middle",
        explanation:
          "With separable phrasal verbs — turn on, pick up, put off, give up, turn down — a short object like it, them or him must sit between the verb and the particle: 'turn it on.' A long noun phrase can sit on either side: 'turn the fan on' or 'turn on the fan.' But 'turn on it' is always wrong.",
        examples: [
          {
            wrong: "It is too loud — please turn down it.",
            right: "It is too loud — please turn it down.",
            note: "A pronoun object always splits a separable phrasal verb.",
          },
          {
            wrong: "She picked up it from the floor and gave it back.",
            right: "She picked it up from the floor and gave it back.",
            note: "Pick it up, never pick up it.",
          },
          {
            wrong: "We put off it until after the exams.",
            right: "We put it off until after the exams.",
            note: "The pronoun sits in the middle: put it off.",
          },
        ],
      },
      {
        heading: "Inseparable and three-word verbs: no splitting allowed",
        explanation:
          "Inseparable verbs keep the verb and particle glued together: look after, run into, come across. Three-word verbs end with a preposition that never leaves: run out of, come up with, look forward to, catch up with. Watch the surprise: look forward to + -ing, because that to is a preposition, not part of an infinitive.",
        examples: [
          {
            wrong: "We ran out the cooking gas in the middle of dinner.",
            right: "We ran out of the cooking gas in the middle of dinner.",
            note: "Run out of never drops its of.",
          },
          {
            wrong: "How did you come up this brilliant plan?",
            right: "How did you come up with this brilliant plan?",
            note: "Come up with stays whole; with belongs to the verb.",
          },
          {
            wrong: "I look forward to hear from you soon.",
            right: "I look forward to hearing from you soon.",
            note: "Here to is a preposition, so the -ing form follows.",
          },
        ],
      },
      {
        heading: "The everyday set you will actually use",
        explanation:
          "Get up (leave bed), look after (take care of), look for (search), give up (stop trying), find out (discover), turn up (arrive unexpectedly), put off (postpone), turn down (refuse an offer). Ten of these used naturally in conversation beat a hundred memorised from a list.",
        examples: [
          {
            wrong: "I was looking after my keys all morning.",
            right: "I was looking for my keys all morning.",
            note: "Look for = search; look after = take care of.",
          },
          {
            wrong: "My uncle gave up to smoke last Ramadan.",
            right: "My uncle gave up smoking last Ramadan.",
            note: "Give up takes a gerund: smoking.",
          },
          {
            wrong: "Please put off the fan before you sleep.",
            right: "Please turn off the fan before you sleep.",
            note: "Put off means postpone; machines and lights take turn off.",
          },
        ],
      },
    ],
    tips: [
      "Pronoun rule: it, them and him sit inside separable verbs — pick it up, put them on, turn it down.",
      "Treat three-word verbs as indivisible chunks: run out OF, come up WITH, look forward TO + -ing.",
      "Make one sentence per day about your own life: I need to look after my health, I ran out of data.",
      "Same verb, different particle, different world: look after / look for / look up / look into.",
    ],
    quiz: [
      {
        question: "Your music is very loud — could you ___?",
        options: ["turn down it", "turn it down", "turn down them", "it turn down"],
        answer: 1,
        explanation: "With a pronoun object, separable verbs split: turn it down.",
      },
      {
        question: "We have ___ sugar — could you buy some on your way home?",
        options: ["run out of", "run out", "ran out of", "running out"],
        answer: 0,
        explanation: "Run out of keeps its preposition, and the present perfect needs the participle run.",
      },
      {
        question: "I really look forward to ___ you at the reunion.",
        options: ["meet", "met", "meeting", "have met"],
        answer: 2,
        explanation: "In look forward to, the to is a preposition, so the -ing form follows.",
      },
      {
        question: "Can you ___ my plants while I visit my village?",
        options: ["look for", "look after", "look up", "look into"],
        answer: 1,
        explanation: "Taking care of something is look after; look for means search.",
      },
      {
        question: "The principal ___ our proposal at yesterday's meeting.",
        options: ["turned down it", "turn it down", "turned it down", "turning it down"],
        answer: 2,
        explanation: "Turn down separates before the pronoun, and yesterday needs the past form turned.",
      },
    ],
  },
];

export default LESSONS;
