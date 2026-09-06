import { Book } from "../types";

export const DANNY_BOOK: Book = {
  "id": "danny",
  "title": "Danny, the Champion of the World",
  "author": "Roald Dahl",
  "badgeTitle": "Woodland Master & Champion of the World",
  "coverColor": "from-amber-700 via-emerald-800 to-stone-950",
  "accentColor": "#d97706",
  "borderColor": "border-amber-500",
  "themeIcon": "🏕️",
  "descriptionByAge": {
    "5-6": "Step into Danny's cozy wooden caravan with warm lanterns and apple trees! 5 daily 15-minute chapters: fix cozy cars with Dad, drive on a secret night adventure, invent sleepy raisin treats, catch bedtime birds in the wood, and become the Champion of the World!",
    "7-8": "Join Danny and his father William on an unforgettable father-son adventure across 5 daily chapters! Outsmart the greedy Mr. Victor Hazell, invent the legendary 'Sleeping Beauty' raisin method, drive the Austin Seven car at midnight, and liberate 120 pheasants.",
    "9+": "Roald Dahl's most heartwarming adventure across 5 exciting chapters! Follow Danny and his father in their cozy caravan, drive through the midnight woods, invent the famous Sleeping Beauty raisins, and become Champion of the World!"
  },
  "chaptersByAge": {
    "5-6": [
      {
        "id": "danny-56-1",
        "dayNumber": 1,
        "title": "The Cozy Gypsy Caravan",
        "subtitle": "Living in a yellow wooden house under apple trees!",
        "estReadingMinutes": 15,
        "totalWordCount": 530,
        "summary": "Danny and his father William live in a beautiful little yellow caravan behind a filling station. Dad teaches Danny how to fix car engines and tells wonderful bedtime stories by the warm paraffin lamp.",
        "visualScenes": [
          {
            "id": "scene-d56-1",
            "title": "The Caravan by the Apple Orchard",
            "backgroundGradient": "from-amber-200 via-emerald-100 to-amber-100",
            "illustrationType": "danny_caravan",
            "caption": "The little yellow caravan had round wooden wheels and a cozy chimney. Inside, warm lantern light made everything glow like honey!",
            "characterAvatars": [
              {
                "name": "Danny",
                "emoji": "👦",
                "speech": "My dad knows how to fix every car in the world!",
                "position": "left"
              },
              {
                "name": "Dad (William)",
                "emoji": "👨‍🔧",
                "speech": "Watch the spark plugs, Danny, see how they glow!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hd1",
                "x": 30,
                "y": 65,
                "label": "Paraffin Lamp",
                "icon": "🏮",
                "soundEffect": "magic",
                "funFact": "The caravan had no electricity, so they lit gentle lamps that smelled of warm cinnamon and tea!",
                "action": "sparkle"
              },
              {
                "id": "hd2",
                "x": 75,
                "y": 40,
                "label": "Big Apple Tree",
                "icon": "🍏",
                "soundEffect": "bounce",
                "funFact": "Crisp red apples grew right outside the little caravan window!",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "A House on Wooden Wheels",
            "paragraphs": [
              "When Danny was very little, his father carried him in his arms to live in a wonderful old gypsy caravan painted bright yellow and royal blue.",
              "The caravan sat in a small green meadow behind a filling station, sheltered beneath two giant apple trees that dropped sweet red fruit onto the grass.",
              "Inside, there was a little cast-iron stove that burned dry pine cones, two cozy bunks with warm wool blankets, and a tiny wooden table with a soft yellow paraffin lamp."
            ],
            "dialogueBites": [
              {
                "speaker": "Danny",
                "text": "Listen to the kettle whistling on the stove, Dad!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Dad",
                "text": "Hot cocoa and toast by the lantern, Danny. The best meal in the world!",
                "avatarEmoji": "👨‍🔧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d56-1-1",
              "question": "Where did Danny and his father live?",
              "options": [
                "In a skyscraper in the big city",
                "In a cozy yellow gypsy caravan under giant apple trees",
                "In an underground submarine"
              ],
              "correctInsightIndex": 1,
              "insight": "Danny lived in a charming, cozy wooden caravan full of love and warmth!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Sparky Eyes & Engine Magic",
            "paragraphs": [
              "Danny's father was an expert motor mechanic. His fingernails were always stained with dark motor oil, but his hands were clean and gentle.",
              "Whenever his father smiled, his dark brown eyes had a golden sparkle dancing right in the center, like a tiny star shining in the dark.",
              "By the time Danny was five years old, his father taught him how to take apart a carburetor, clean a spark plug, and listen to the gentle purr of a healthy engine."
            ],
            "dialogueBites": [
              {
                "speaker": "Dad",
                "text": "An engine is like a little metal heart, Danny. Treat it with care and it will run forever.",
                "avatarEmoji": "👨‍🔧",
                "side": "left"
              },
              {
                "speaker": "Danny",
                "text": "I love turning the wrench with you, Dad!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-danny-56-1-p2",
              "question": "Find a word on this page that means: \"A cozy wooden house on wheels pulled by horses or parked in a meadow.\".",
              "options": [
                "Danny",
                "Little",
                "Caravan"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Caravan\" (CAR-A-VAN) means a cozy wooden house on wheels pulled by horses or parked in a meadow.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "Bedtime Tales of the BFG",
            "paragraphs": [
              "Every evening, after washing their hands with Pumice soap, Danny would climb into his top bunk.",
              "His father would sit on the wooden chair, adjust the lantern wick, and tell thrilling stories about the Big Friendly Giant who caught dreams in glass jars and blew them into children's bedrooms.",
              "Danny felt so safe and loved. He knew his dad was the most marvelous, sparky father a boy could ever have in the whole wide world."
            ],
            "dialogueBites": [
              {
                "speaker": "Dad",
                "text": "The BFG walks through the misty hills with his long dream-trumpet...",
                "avatarEmoji": "👨‍🔧",
                "side": "left"
              },
              {
                "speaker": "Danny",
                "text": "Goodnight, Dad. I love you to the moon and back.",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d56-1-3",
              "question": "What character did Danny's dad tell bedtime stories about?",
              "options": [
                "The Big Friendly Giant (BFG) who catches good dreams",
                "A grumpy troll who lives under a bridge",
                "A flying robot"
              ],
              "correctInsightIndex": 0,
              "insight": "Roald Dahl first introduced the BFG inside the stories Danny's dad told by the lantern!",
              "rewardKP": 15
            }
          }
        ],
        "vocabList": [
          {
            "word": "Caravan",
            "phonics": "CAR-A-VAN",
            "definition": "A cozy wooden house on wheels pulled by horses or parked in a meadow.",
            "funExample": "Danny lived in a beautiful yellow gypsy caravan!",
            "emoji": "🏕️"
          },
          {
            "word": "Mechanic",
            "phonics": "ME-CHAN-IC",
            "definition": "A skilled person who repairs and cares for engines and machines.",
            "funExample": "Danny's dad was the best mechanic in the countryside.",
            "emoji": "🔧"
          }
        ],
        "microChallenge": {
          "id": "mc-d56-1",
          "title": "Spark Plug Tool Match",
          "type": "word_scramble",
          "prompt": "Unscramble Danny's favorite workshop tool: 'W R E N C H'",
          "targetWord": "WRENCH",
          "scrambleLetters": [
            "N",
            "C",
            "H",
            "W",
            "R",
            "E"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-d56-1-1",
            "question": "What fruit grew on the trees sheltering Danny's caravan?",
            "options": [
              "Yellow bananas",
              "Crisp red apples",
              "Coconuts",
              "Pineapples"
            ],
            "correctIndex": 1,
            "explanation": "Two big apple trees grew over the little yellow caravan!",
            "visualClueEmoji": "📖",
            "points": 50
          },
          {
            "id": "q-danny-56-1-vocab1",
            "question": "Find a word in the passage that means: \"A cozy wooden house on wheels pulled by horses or parked in a meadow.\".",
            "options": [
              "Danny",
              "Little",
              "Caravan",
              "Father"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Caravan\" means a cozy wooden house on wheels pulled by horses or parked in a meadow.",
            "visualClueEmoji": "🏕️",
            "points": 60
          },
          {
            "id": "q-danny-56-1-3",
            "question": "How do the characters resolve the main problem in this chapter?",
            "options": [
              "By showing courage, quick thinking, and teamwork",
              "By waiting for someone else to fix it",
              "By running away as fast as possible",
              "By forgetting about the problem completely"
            ],
            "correctIndex": 0,
            "explanation": "Their ingenuity and teamwork helped them overcome the obstacle.",
            "visualClueEmoji": "💡",
            "points": 60
          },
          {
            "id": "q-danny-56-1-vocab2",
            "question": "Find a word in the passage that means: \"A skilled person who repairs and cares for engines and machines.\".",
            "options": [
              "Danny",
              "Little",
              "Father",
              "Mechanic"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Mechanic\" means a skilled person who repairs and cares for engines and machines.",
            "visualClueEmoji": "🔧",
            "points": 60
          }
        ]
      },
      {
        "id": "danny-56-2",
        "dayNumber": 2,
        "title": "The Midnight Car Rescue",
        "subtitle": "Danny drives the little Austin Seven car into the dark woods!",
        "estReadingMinutes": 15,
        "totalWordCount": 550,
        "summary": "When Danny wakes up at 2:10 AM and finds his father hasn't returned from Hazell's Wood, he bravely starts the little Austin Seven car and drives into the night to rescue him from a hidden pit.",
        "visualScenes": [
          {
            "id": "scene-d56-2",
            "title": "Driving Through the Moonlit Lane",
            "backgroundGradient": "from-slate-900 via-indigo-950 to-emerald-950",
            "illustrationType": "danny_caravan",
            "caption": "Nine-year-old Danny sat on two cushions to see over the steering wheel, driving through the quiet country night!",
            "characterAvatars": [
              {
                "name": "Danny",
                "emoji": "👦",
                "speech": "Hold on, Dad! I'm coming to find you!",
                "position": "center"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hda1",
                "x": 40,
                "y": 60,
                "label": "Austin 7 Headlights",
                "icon": "🚗",
                "soundEffect": "click",
                "funFact": "The little car went twenty miles an hour in second gear down the dark lane!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "An Empty Bed at 2:10 AM",
            "paragraphs": [
              "Danny woke up suddenly in the middle of the night. The caravan was cold and pitch black. The scene was filled with courageous, creating an unforgettable moment.",
              "He reached his hand down toward his father's bunk. The blankets were untouched and cold. His father had not come home from Hazell's Wood!",
              "'Something is wrong,' thought Danny, his little heart thumping like a drum. 'My dad promised he would be home by ten o'clock. I must go find him!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Danny",
                "text": "Dad always keeps his promises. He must be hurt or trapped in the woods!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d56-2-1",
              "question": "Why did Danny realize his father was in trouble?",
              "options": [
                "Because a siren sounded outside",
                "Because a letter arrived in the mail",
                "Because his father always kept his promises and had not returned by 2:10 AM"
              ],
              "correctInsightIndex": 2,
              "insight": "Danny knew his father was faithful and would never stay away unless hurt!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Sitting on Two Cushions",
            "paragraphs": [
              "Danny ran to the garage workshop. Parked in the corner was a tiny baby Austin Seven car with a soft canvas roof.",
              "Danny placed two thick cushions on the driver's seat so he could see over the big wooden steering wheel. His feet could just reach the pedals.",
              "He pulled the choke, turned the key, and pressed the starter button. The little engine roared to life with a happy purr: Chug-chug-chug!"
            ],
            "dialogueBites": [
              {
                "speaker": "Danny",
                "text": "Clutch down, first gear, gentle on the gas... we're moving!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-danny-56-2-p2",
              "question": "Find a word on this page that means: \"Brave, bold, and ready to face danger without fear.\".",
              "options": [
                "Courageous",
                "Danny",
                "Woke"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Courageous\" (COUR-AGE-OUS) means brave, bold, and ready to face danger without fear.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "Found in the Keeper's Pit",
            "paragraphs": [
              "Danny drove carefully down the winding, moonlit country lanes until he reached the dark edge of Hazell's Wood.",
              "He crept through the ferns with a flashlight, whispering: 'Dad! Dad, it's Danny!'",
              "A faint voice answered from beneath a patch of pine branches. His dad had fallen into a deep pit dug by the greedy keepers and broke his ankle! Danny tied a rope to a birch tree and helped pull his brave father up to safety!"
            ],
            "dialogueBites": [
              {
                "speaker": "Dad",
                "text": "Danny! You drove the car all by yourself? You magnificent boy!",
                "avatarEmoji": "👨‍🔧",
                "side": "left"
              },
              {
                "speaker": "Danny",
                "text": "I've got you, Dad! We're going home to bandage your ankle!",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d56-2-3",
              "question": "How did Danny save his father from the deep pit?",
              "options": [
                "He called an airplane",
                "He drove to the wood, found the pit, and lowered a rope to pull his father up",
                "He dug a tunnel"
              ],
              "correctInsightIndex": 1,
              "insight": "Danny's love, bravery, and mechanical skills saved his father's life!",
              "rewardKP": 15
            }
          }
        ],
        "vocabList": [
          {
            "word": "Courageous",
            "phonics": "COUR-AGE-OUS",
            "definition": "Brave, bold, and ready to face danger without fear.",
            "funExample": "Danny was courageous when driving into the dark woods.",
            "emoji": "🦁"
          },
          {
            "word": "Choke",
            "phonics": "CHOKE",
            "definition": "A valve in an engine that enriches fuel for starting in the cold.",
            "funExample": "Danny pulled the choke to start the little car.",
            "emoji": "🚗"
          }
        ],
        "microChallenge": {
          "id": "mc-d56-2",
          "title": "Night Drive Path Finder",
          "type": "word_scramble",
          "prompt": "Unscramble: 'C O U R A G E'",
          "targetWord": "COURAGE",
          "scrambleLetters": [
            "G",
            "E",
            "C",
            "O",
            "U",
            "R",
            "A"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-d56-2-1",
            "question": "What model of car did Danny drive to rescue his father?",
            "options": [
              "Rolls-Royce",
              "Formula One Racer",
              "Austin Seven",
              "Monster Truck"
            ],
            "correctIndex": 2,
            "explanation": "Danny drove the little Austin Seven car parked in their workshop!",
            "visualClueEmoji": "📖",
            "points": 50
          },
          {
            "id": "q-danny-56-2-vocab1",
            "question": "Find a word in the passage that means: \"Brave, bold, and ready to face danger without fear.\".",
            "options": [
              "Courageous",
              "Danny",
              "Woke",
              "Suddenly"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Courageous\" means brave, bold, and ready to face danger without fear.",
            "visualClueEmoji": "🦁",
            "points": 60
          },
          {
            "id": "q-danny-56-2-3",
            "question": "How do the characters resolve the main problem in this chapter?",
            "options": [
              "By waiting for someone else to fix it",
              "By running away as fast as possible",
              "By forgetting about the problem completely",
              "By showing courage, quick thinking, and teamwork"
            ],
            "correctIndex": 3,
            "explanation": "Their ingenuity and teamwork helped them overcome the obstacle.",
            "visualClueEmoji": "💡",
            "points": 60
          },
          {
            "id": "q-danny-56-2-vocab2",
            "question": "Find a word in the passage that means: \"A valve in an engine that enriches fuel for starting in the cold.\".",
            "options": [
              "Danny",
              "Choke",
              "Woke",
              "Suddenly"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Choke\" means a valve in an engine that enriches fuel for starting in the cold.",
            "visualClueEmoji": "🚗",
            "points": 60
          }
        ]
      },
      {
        "id": "danny-56-3",
        "dayNumber": 3,
        "title": "The Sleeping Beauty Raisin Trick",
        "subtitle": "Inventing sleepy sweet treats for the woodland pheasants!",
        "estReadingMinutes": 15,
        "totalWordCount": 560,
        "summary": "To outsmart the bully Mr. Victor Hazell before his big shooting party, Danny invents the 'Sleeping Beauty' method: soaking plump green raisins in water, slitting them open, and stuffing them with gentle sleeping powder.",
        "visualScenes": [
          {
            "id": "scene-d56-3",
            "title": "Preparing the Sleeping Raisins",
            "backgroundGradient": "from-amber-100 via-rose-100 to-amber-200",
            "illustrationType": "sleeping_potion",
            "caption": "Danny and his dad soaked big juicy raisins until they puffed up like green grapes, ready for a pinch of sleepy powder!",
            "characterAvatars": [
              {
                "name": "Danny",
                "emoji": "👦",
                "speech": "One pinch of powder inside each sweet raisin!",
                "position": "left"
              },
              {
                "name": "Dad",
                "emoji": "👨‍🔧",
                "speech": "Danny, you are a true genius of poaching!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hsr1",
                "x": 45,
                "y": 55,
                "label": "Plump Raisin Bowl",
                "icon": "🍇",
                "soundEffect": "magic",
                "funFact": "Pheasants love sweet raisins more than any food in the whole forest!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Mr. Victor Hazell's Greedy Plan",
            "paragraphs": [
              "Mr. Victor Hazell was a huge, red-faced, arrogant man who owned the giant estate next door. He treated people unkindly and bullied everyone in the village. The scene was filled with ingenuity, creating an unforgettable moment.",
              "Every autumn, Mr. Hazell hosted a giant shooting party where hundreds of wealthy guests came to shoot all the woodland pheasants.",
              "'Tomorrow is his big shooting party,' said Danny's dad, resting his bandaged leg. 'If only we could catch all his pheasants tonight and leave his woods completely empty!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Dad",
                "text": "Old poachers tried horsehair and sticky paper hats, but they only catch two or three birds.",
                "avatarEmoji": "👨‍🔧",
                "side": "left"
              },
              {
                "speaker": "Danny",
                "text": "Dad, what if we put them to sleep gently with delicious food?",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d56-3-1",
              "question": "Why did Danny and his father want to catch the pheasants before the shooting party?",
              "options": [
                "To save the birds from being shot by the greedy bully Mr. Hazell",
                "Because they wanted to open a pet zoo",
                "Because Mr. Hazell asked them to help"
              ],
              "correctInsightIndex": 0,
              "insight": "They wanted to outsmart the arrogant bully and protect the birds from the shooting party!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Danny's Master Stroke of Genius",
            "paragraphs": [
              "'Listen, Dad!' said Danny excitedly. 'Pheasants love sweet raisins more than anything in the world!'",
              "'What if we take Doctor Spencer's sleeping pills, crush them into fine white powder, and sew a tiny pinch into the belly of one hundred plump raisins?'",
              "His father stared at Danny with wide, shining eyes. The golden star in his eyes danced with unmatched brilliance. 'Danny!' he gasped. 'You have just invented the greatest poaching method in the history of the world! We shall call it The Sleeping Beauty!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Dad",
                "text": "The Sleeping Beauty! It is pure, absolute, dazzling genius!",
                "avatarEmoji": "👨‍🔧",
                "side": "left"
              },
              {
                "speaker": "Danny",
                "text": "The birds will eat the sweet raisins, get sleepy, and float down from the trees!",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-danny-56-3-p2",
              "question": "Find a word on this page that means: \"Full, rounded, and juicy in a pleasant way.\".",
              "options": [
                "Victor",
                "Plump",
                "Hazell"
              ],
              "correctInsightIndex": 1,
              "insight": "\"Plump\" (PLUMP) means full, rounded, and juicy in a pleasant way.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "Stuffing One Hundred and Twenty Raisins",
            "paragraphs": [
              "They soaked dried raisins in warm water until they swelled up plump, sweet, and juicy.",
              "With a razor blade, Danny carefully slit each raisin along the seam. His father dropped in a tiny white dusting of sleeping pill powder, and Danny pinched the sticky fruit closed.",
              "By sunset, they had one hundred and twenty sleeping raisins packed safely into a clean tin box, ready for their grand woodland expedition!"
            ],
            "dialogueBites": [
              {
                "speaker": "Danny",
                "text": "One hundred and twenty sweet sleeping treats ready for tonight!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d56-3-3",
              "question": "How many sleeping raisins did Danny and his father prepare?",
              "options": [
                "Five raisins",
                "One million raisins",
                "One hundred and twenty raisins"
              ],
              "correctInsightIndex": 2,
              "insight": "They prepared 120 raisins to catch the pheasants roosting in Hazell's Wood!",
              "rewardKP": 15
            }
          }
        ],
        "vocabList": [
          {
            "word": "Plump",
            "phonics": "PLUMP",
            "definition": "Full, rounded, and juicy in a pleasant way.",
            "funExample": "The soaked raisins were soft and plump.",
            "emoji": "🍇"
          },
          {
            "word": "Ingenuity",
            "phonics": "IN-GE-NU-I-TY",
            "definition": "The quality of being clever, original, and inventive.",
            "funExample": "Danny showed brilliant ingenuity with his raisin trick.",
            "emoji": "💡"
          }
        ],
        "microChallenge": {
          "id": "mc-d56-3",
          "title": "Sleeping Raisin Pack",
          "type": "pheasant_capture",
          "prompt": "Prepare the raisin: 1. Slit Seam -> 2. Insert Powder -> 3. Pinch Closed!",
          "options": [
            "Insert Sleeping Powder",
            "Slit Raisin Seam",
            "Pinch Seam Closed"
          ],
          "correctOrder": [
            "Slit Raisin Seam",
            "Insert Sleeping Powder",
            "Pinch Seam Closed"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-d56-3-1",
            "question": "What sweet fruit did Danny use to hide the sleeping powder?",
            "options": [
              "Chocolate bars",
              "Marshmallows",
              "Sliced apples",
              "Plump green raisins"
            ],
            "correctIndex": 3,
            "explanation": "Danny used sweet soaked raisins, which pheasants adore!",
            "visualClueEmoji": "📖",
            "points": 50
          },
          {
            "id": "q-danny-56-3-vocab1",
            "question": "Find a word in the passage that means: \"Full, rounded, and juicy in a pleasant way.\".",
            "options": [
              "Victor",
              "Plump",
              "Hazell",
              "Huge"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Plump\" means full, rounded, and juicy in a pleasant way.",
            "visualClueEmoji": "🍇",
            "points": 60
          },
          {
            "id": "q-danny-56-3-3",
            "question": "How do the characters resolve the main problem in this chapter?",
            "options": [
              "By waiting for someone else to fix it",
              "By running away as fast as possible",
              "By showing courage, quick thinking, and teamwork",
              "By forgetting about the problem completely"
            ],
            "correctIndex": 2,
            "explanation": "Their ingenuity and teamwork helped them overcome the obstacle.",
            "visualClueEmoji": "💡",
            "points": 60
          },
          {
            "id": "q-danny-56-3-vocab2",
            "question": "Find a word in the passage that means: \"The quality of being clever, original, and inventive.\".",
            "options": [
              "Ingenuity",
              "Victor",
              "Hazell",
              "Huge"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Ingenuity\" means the quality of being clever, original, and inventive.",
            "visualClueEmoji": "💡",
            "points": 60
          }
        ]
      },
      {
        "id": "danny-56-4",
        "dayNumber": 4,
        "title": "The Great Night in Hazell's Wood",
        "subtitle": "Falling asleep in the trees and filling burlap sacks!",
        "estReadingMinutes": 15,
        "totalWordCount": 570,
        "summary": "In the pitch-black woods, Danny and his father scatter the sleeping raisins. As night falls, sleepy pheasants tumble down softly from high branches like giant ripe fruit!",
        "visualScenes": [
          {
            "id": "scene-d56-4",
            "title": "The Falling Pheasants in the Moonlight",
            "backgroundGradient": "from-slate-950 via-emerald-950 to-stone-900",
            "illustrationType": "pheasant_roost",
            "caption": "Soft thuds sounded all across the mossy forest floor: Flump! Flump! Sleepy pheasants drifted down from the pine branches!",
            "characterAvatars": [
              {
                "name": "Danny",
                "emoji": "👦",
                "speech": "Look up in the larch trees, Dad! They're getting sleepy!",
                "position": "left"
              },
              {
                "name": "Dad",
                "emoji": "👨‍🔧",
                "speech": "Here comes another one! Catch it gently!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hpr1",
                "x": 50,
                "y": 50,
                "label": "Sleeping Pheasant",
                "icon": "🪶",
                "soundEffect": "magic",
                "funFact": "Pheasants sleep high up on branches at night to stay safe from foxes!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Creeping into the Deep Woods",
            "paragraphs": [
              "Danny and his dad walked quietly under the tall pine trees of Hazell's Wood. The autumn air smelled of damp moss and fallen leaves.",
              "Danny knelt along the woodland path and scattered the sticky sweet raisins beneath the branches of the tall larch trees where the pheasants loved to roost.",
              "They hid behind a giant oak tree, holding their breath as hundreds of golden pheasants pecked hungrily at the sweet treats: Peck! Peck! Peck!"
            ],
            "dialogueBites": [
              {
                "speaker": "Dad",
                "text": "They're eating every single raisin, Danny! Now we wait for the roost...",
                "avatarEmoji": "👨‍🔧",
                "side": "left"
              },
              {
                "speaker": "Danny",
                "text": "They're flying up into the high branches to go to sleep!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d56-4-1",
              "question": "Where do pheasants go to sleep at sunset?",
              "options": [
                "In underground rabbit holes",
                "Up in the high branches of tall trees",
                "In cozy dog houses"
              ],
              "correctInsightIndex": 1,
              "insight": "Pheasants fly up into high tree branches (roosting) to sleep safely at night!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Flump! Flump! The Rain of Sleepy Birds",
            "paragraphs": [
              "About twenty minutes later, a strange soft rustling started in the canopy high above.",
              "Suddenly: Flump! A big, fat, gorgeous pheasant tumbled off its branch and landed softly in a pile of golden leaves, fast asleep and snoring quietly.",
              "Then another: Flump! And another: Flump! Flump! It was raining sleepy, snoozing pheasants all over the forest floor!"
            ],
            "dialogueBites": [
              {
                "speaker": "Danny",
                "text": "Dad! It's working! They're raining down like big ripe pears!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Dad",
                "text": "Quick, Danny! Gather them into the sacks before the keepers hear!",
                "avatarEmoji": "👨‍🔧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-danny-56-4-p2",
              "question": "Find a word on this page that means: \"A place where birds settle to rest or sleep for the night.\".",
              "options": [
                "Danny",
                "Walked",
                "Roost"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Roost\" (ROOST) means a place where birds settle to rest or sleep for the night.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "One Hundred and Twenty Birds in Sacks",
            "paragraphs": [
              "Danny and his dad worked with silent joy, filling big burlap sacks with one hundred and twenty slumbering pheasants.",
              "They carried the heavy sacks out of the woods and loaded them safely into Mrs. Clipstone's giant baby carriage to wheel back to the filling station.",
              "Danny's heart sang with happiness. They had pulled off the greatest, funniest, most peaceful triumph in the history of the county!"
            ],
            "dialogueBites": [
              {
                "speaker": "Dad",
                "text": "One hundred and twenty birds! Not a single one harmed!",
                "avatarEmoji": "👨‍🔧",
                "side": "left"
              },
              {
                "speaker": "Danny",
                "text": "Mr. Hazell won't have a single bird for his snooty shooting party!",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d56-4-3",
              "question": "How were the pheasants transported safely out of the woods?",
              "options": [
                "In burlap sacks hidden inside Mrs. Clipstone's giant baby carriage",
                "In a giant wooden wheelbarrow",
                "Inside a hot air balloon"
              ],
              "correctInsightIndex": 0,
              "insight": "Mrs. Clipstone used her giant baby pram as a clever disguise to transport the birds!",
              "rewardKP": 15
            }
          }
        ],
        "vocabList": [
          {
            "word": "Roost",
            "phonics": "ROOST",
            "definition": "A place where birds settle to rest or sleep for the night.",
            "funExample": "The pheasants flew into the larch trees to roost.",
            "emoji": "🌲"
          },
          {
            "word": "Slumber",
            "phonics": "SLUM-BER",
            "definition": "To sleep peacefully and deeply.",
            "funExample": "The birds slumbered peacefully in the burlap sacks.",
            "emoji": "💤"
          }
        ],
        "microChallenge": {
          "id": "mc-d56-4",
          "title": "Pheasant Roost Counter",
          "type": "word_scramble",
          "prompt": "Unscramble the bird name: 'P H E A S A N T'",
          "targetWord": "PHEASANT",
          "scrambleLetters": [
            "A",
            "S",
            "A",
            "N",
            "T",
            "P",
            "H",
            "E"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-d56-4-1",
            "question": "How many total pheasants did Danny and his dad collect in the woods?",
            "options": [
              "120 pheasants",
              "12 pheasants",
              "500 pheasants",
              "Zero"
            ],
            "correctIndex": 0,
            "explanation": "They collected all 120 sleeping pheasants from the trees!",
            "visualClueEmoji": "📖",
            "points": 50
          },
          {
            "id": "q-danny-56-4-vocab1",
            "question": "Find a word in the passage that means: \"A place where birds settle to rest or sleep for the night.\".",
            "options": [
              "Danny",
              "Walked",
              "Quietly",
              "Roost"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Roost\" means a place where birds settle to rest or sleep for the night.",
            "visualClueEmoji": "🌲",
            "points": 60
          },
          {
            "id": "q-danny-56-4-3",
            "question": "How do the characters resolve the main problem in this chapter?",
            "options": [
              "By waiting for someone else to fix it",
              "By showing courage, quick thinking, and teamwork",
              "By running away as fast as possible",
              "By forgetting about the problem completely"
            ],
            "correctIndex": 1,
            "explanation": "Their ingenuity and teamwork helped them overcome the obstacle.",
            "visualClueEmoji": "💡",
            "points": 60
          },
          {
            "id": "q-danny-56-4-vocab2",
            "question": "Find a word in the passage that means: \"To sleep peacefully and deeply.\".",
            "options": [
              "Danny",
              "Walked",
              "Slumber",
              "Quietly"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Slumber\" means to sleep peacefully and deeply.",
            "visualClueEmoji": "💤",
            "points": 60
          }
        ]
      },
      {
        "id": "danny-56-5",
        "dayNumber": 5,
        "title": "Champion of the World!",
        "subtitle": "The pheasants wake up on the roof & Mr. Hazell's defeat!",
        "estReadingMinutes": 15,
        "totalWordCount": 580,
        "summary": "The sleeping pills wear off just as Mr. Victor Hazell arrives in his fancy Rolls-Royce! One hundred and twenty pheasants wake up, flutter all over his car, and fly free across the blue sky as Dad proudly names Danny the Champion of the World!",
        "visualScenes": [
          {
            "id": "scene-d56-5",
            "title": "Pheasants Swarming over Mr. Hazell's Car",
            "backgroundGradient": "from-amber-200 via-yellow-100 to-sky-200",
            "illustrationType": "champions_flight",
            "caption": "Scores of waking pheasants swooped and fluttered all over Mr. Hazell's shiny Rolls-Royce before flying away into freedom!",
            "characterAvatars": [
              {
                "name": "Mr. Victor Hazell",
                "emoji": "😡",
                "speech": "My pheasants! Get off my Rolls-Royce!",
                "position": "left"
              },
              {
                "name": "Danny",
                "emoji": "👦",
                "speech": "Look at them fly, Dad! They are free!",
                "position": "center"
              },
              {
                "name": "Dad",
                "emoji": "👨‍🔧",
                "speech": "You are the Champion of the World, Danny!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hch1",
                "x": 50,
                "y": 35,
                "label": "Flying Pheasant",
                "icon": "🪶",
                "soundEffect": "success",
                "funFact": "Pheasants are wild birds that legally belong to nobody until they are caught!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Waking Up on the Filling Station Roof",
            "paragraphs": [
              "Back at the filling station, the sun rose bright and golden in the morning sky.",
              "Suddenly, the sleeping pill powder began to wear off! Inside the pram and on the garage roof, sleepy pheasants began to blink their eyes and shake their glossy feathers.",
              "Dozens of colorful birds fluttered up to perch along the red roof tiles, looking like a grand royal parade of feathers!"
            ],
            "dialogueBites": [
              {
                "speaker": "Danny",
                "text": "Dad! The sleeping pills are wearing off! The birds are waking up!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Dad",
                "text": "Look at them stretch their wings in the morning sunshine!",
                "avatarEmoji": "👨‍🔧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d56-5-1",
              "question": "What happened to the pheasants when the sun rose?",
              "options": [
                "They turned into statues",
                "They swam away in a river",
                "The sleeping pills wore off and the birds woke up healthy and lively"
              ],
              "correctInsightIndex": 2,
              "insight": "The sleeping medicine was completely harmless and wore off naturally!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Mr. Victor Hazell's Big Red Face",
            "paragraphs": [
              "Just then, a long, shiny, maroon Rolls-Royce screeched to a halt in the driveway. Mr. Victor Hazell stepped out in his fancy tweed shooting jacket, his red face puffing with fury.",
              "'Those are MY pheasants on your roof!' he bellowed, waving his silver walking cane.",
              "Sergeant Samways, the village policeman who arrived on his bicycle, smiled politely. 'Excuse me, Mr. Hazell, but wild birds in the open air belong to nobody! You cannot claim them unless you hold them in your hand!'",
              "At that exact moment, fifty pheasants swooped off the roof, fluttering and flapping all over Mr. Hazell's precious shiny Rolls-Royce before soaring high into the open blue sky!"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Hazell",
                "text": "Shoo! Shoo! Get off my paintwork! You ruined my shooting party!",
                "avatarEmoji": "😡",
                "side": "left"
              },
              {
                "speaker": "Sergeant Samways",
                "text": "Have a pleasant day, Mr. Hazell! Mind the speed limit on your way home!",
                "avatarEmoji": "👮",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-danny-56-5-p2",
              "question": "Find a word on this page that means: \"A feeling of foolishness or shame from being proven wrong.\".",
              "options": [
                "Humiliation",
                "Filling",
                "Station"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Humiliation\" (HU-MIL-I-A-TION) means a feeling of foolishness or shame from being proven wrong.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Champion of the World",
            "paragraphs": [
              "Mr. Hazell drove away in complete humiliation. His giant shooting party was completely ruined without a single bird in his woods.",
              "Danny's father put his arm around Danny's shoulders and pulled him close. The golden star in his eyes was blazing with pure pride and love.",
              "'You did it, Danny,' whispered his father with a joyful laugh. 'You invented the greatest method, you rescued your old dad, and you outsmarted the biggest bully in the county. You, my boy, are the Champion of the World!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Dad",
                "text": "You are the Champion of the World, Danny!",
                "avatarEmoji": "👨‍🔧",
                "side": "left"
              },
              {
                "speaker": "Danny",
                "text": "And you are the Champion Dad of the World!",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d56-5-3",
              "question": "What title did Danny's father give him at the end of the story?",
              "options": [
                "The Chief Mechanic",
                "The Champion of the World",
                "The King of Apples"
              ],
              "correctInsightIndex": 1,
              "insight": "Danny earned the title 'Champion of the World' through courage, cleverness, and love!",
              "rewardKP": 15
            }
          }
        ],
        "vocabList": [
          {
            "word": "Humiliation",
            "phonics": "HU-MIL-I-A-TION",
            "definition": "A feeling of foolishness or shame from being proven wrong.",
            "funExample": "Mr. Hazell drove away in total humiliation.",
            "emoji": "😳"
          },
          {
            "word": "Champion",
            "phonics": "CHAM-PI-ON",
            "definition": "A person who has surpassed all rivals; a hero of great valor and heart.",
            "funExample": "Danny was crowned Champion of the World!",
            "emoji": "🏆"
          }
        ],
        "microChallenge": {
          "id": "mc-d56-5",
          "title": "Champion Golden Trophy",
          "type": "golden_ticket_scratch",
          "prompt": "Scratch the golden spark plug to claim your Champion of the World Badge!",
          "rewardGems": 2
        },
        "quizQuestions": [
          {
            "id": "q-d56-5-1",
            "question": "What happened to Mr. Hazell's shiny Rolls-Royce?",
            "options": [
              "It turned into a pumpkin",
              "It got a flat tire in a mud puddle",
              "The waking pheasants fluttered and perched all over it before flying free",
              "Danny bought it for one penny"
            ],
            "correctIndex": 2,
            "explanation": "The waking pheasants fluttered all over Mr. Hazell's car, ruining his pompous pride!",
            "visualClueEmoji": "📖",
            "points": 50
          },
          {
            "id": "q-danny-56-5-vocab1",
            "question": "Find a word in the passage that means: \"A feeling of foolishness or shame from being proven wrong.\".",
            "options": [
              "Filling",
              "Station",
              "Rose",
              "Humiliation"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Humiliation\" means a feeling of foolishness or shame from being proven wrong.",
            "visualClueEmoji": "😳",
            "points": 60
          },
          {
            "id": "q-d56-5-2",
            "question": "What is the most important lesson from Danny, the Champion of the World?",
            "options": [
              "A parent's love, warmth, and spark in their eye is the greatest gift in the whole world",
              "You should always buy expensive cars",
              "You should never fix your own engine",
              "Big bullies always win"
            ],
            "correctIndex": 0,
            "explanation": "Roald Dahl wrote the story to celebrate the unmatched beauty of a loving, sparky father!",
            "visualClueEmoji": "🔍",
            "points": 50
          },
          {
            "id": "q-danny-56-5-vocab2",
            "question": "Find a word in the passage that means: \"A person who has surpassed all rivals; a hero of great valor and heart.\".",
            "options": [
              "Filling",
              "Champion",
              "Station",
              "Rose"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Champion\" means a person who has surpassed all rivals; a hero of great valor and heart.",
            "visualClueEmoji": "🏆",
            "points": 60
          }
        ]
      }
    ],
    "7-8": [
      {
        "id": "danny-78-1",
        "dayNumber": 1,
        "title": "The Caravan & The Mechanic's Spark",
        "subtitle": "Engines, gypsy lore, and the father with sparky eyes",
        "estReadingMinutes": 15,
        "totalWordCount": 780,
        "summary": "Danny reflects on his life growing up in a gypsy caravan with his father William, mastering automotive mechanics, and discovering the spark in his father's eyes.",
        "visualScenes": [
          {
            "id": "scene-d78-1",
            "title": "Workshop by the Apple Orchard",
            "backgroundGradient": "from-amber-100 via-emerald-100 to-stone-200",
            "illustrationType": "danny_caravan",
            "caption": "Between the petrol pumps and the apple trees stood the yellow gypsy caravan and the grease-stained workshop.",
            "characterAvatars": [
              {
                "name": "Danny",
                "emoji": "👦",
                "speech": "By age seven, I could tune a four-cylinder engine!",
                "position": "left"
              },
              {
                "name": "Dad (William)",
                "emoji": "👨‍🔧",
                "speech": "A real smile must always reach the eyes, Danny.",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hd78_1",
                "x": 45,
                "y": 60,
                "label": "Cast-Iron Stove",
                "icon": "🔥",
                "soundEffect": "magic",
                "funFact": "The caravan stove burned dry birch twigs and kept them warm through snowy winters!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The World Inside a Wooden Wagon",
            "paragraphs": [
              "The gypsy caravan was at least one hundred and fifty years old. It had been built with curved wooden ribs, ornate floral carvings around the doorway, and large wooden wheels shod with iron rims.",
              "It was small—only seven feet wide and ten feet long—yet it contained everything Danny and his father needed: two bunks, a small cast-iron stove, a tin basin, and shelves filled with books.",
              "They had no electric light, but the soft golden glow of their paraffin lamp created an atmosphere of supreme safety and warmth."
            ],
            "dialogueBites": [
              {
                "speaker": "Danny",
                "text": "We didn't have television or fancy toys, but we had the richest life imaginable.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d78-1-1",
              "question": "Why was Danny's simple life in the caravan so fulfilling?",
              "options": [
                "Because they had hundreds of video games",
                "Because it was grounded in deep parental love, warmth, craftsmanship, and storytelling",
                "Because they never had to eat vegetables"
              ],
              "correctInsightIndex": 1,
              "insight": "Simplicity, love, and attentive parenting create deep emotional wealth!",
              "rewardKP": 20
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Philosophy of the Spark",
            "paragraphs": [
              "Danny's father William had a face lined with kindness, but his most remarkable feature was his eyes.",
              "'A smile that does not reach the eyes is a counterfeit smile,' his father would say. When William smiled, a golden spark would ignite in the center of each dark pupil, twinkling like a distant star.",
              "Under his patient guidance, Danny learned how an internal combustion engine functioned—understanding fuel-air mixtures, crankshaft revolutions, and the music of a well-tuned motor."
            ],
            "dialogueBites": [
              {
                "speaker": "Dad",
                "text": "Look closely at people's eyes, Danny. That's where you discover who they truly are.",
                "avatarEmoji": "👨‍🔧",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-danny-78-1-p2",
              "question": "Find a word on this page that means: \"Made in exact imitation of something valuable with the intention to deceive.\".",
              "options": [
                "Gypsy",
                "Caravan",
                "Counterfeit"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Counterfeit\" (COUN-TER-FEIT) means made in exact imitation of something valuable with the intention to deceive.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Revelation of the Secret",
            "paragraphs": [
              "When Danny reached nine years old, his father revealed a secret he had kept hidden for years.",
              "Beneath his gentle, law-abiding exterior, William harbored an unstoppable passion for the ancient rural art of pheasant poaching.",
              "'It is not stealing for food, Danny,' his father explained gently. 'It is a battle of wits against greedy squires who lock away the beauty of nature for their own vanity.'"
            ],
            "dialogueBites": [
              {
                "speaker": "Dad",
                "text": "Poaching is a contest of craft, stealth, and woodland lore.",
                "avatarEmoji": "👨‍🔧",
                "side": "left"
              },
              {
                "speaker": "Danny",
                "text": "And your father and grandfather were masters of the craft before you!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d78-1-3",
              "question": "How did Danny's father view rural pheasant poaching?",
              "options": [
                "As an honorable battle of woodland craft and defiance against greedy land barons",
                "As a way to get rich quick",
                "As a boring chore"
              ],
              "correctInsightIndex": 0,
              "insight": "Poaching was viewed as a folk tradition of working-class defiance against aristocratic greed!",
              "rewardKP": 20
            }
          }
        ],
        "vocabList": [
          {
            "word": "Counterfeit",
            "phonics": "COUN-TER-FEIT",
            "definition": "Made in exact imitation of something valuable with the intention to deceive.",
            "funExample": "A smile that doesn't reach the eyes is a counterfeit smile.",
            "emoji": "🎭"
          },
          {
            "word": "Combustion",
            "phonics": "COM-BUS-TION",
            "definition": "The process of burning something, as in an internal combustion engine.",
            "funExample": "Danny understood the internal combustion engine completely.",
            "emoji": "⚙️"
          }
        ],
        "microChallenge": {
          "id": "mc-d78-1",
          "title": "Carburetor Assembly",
          "type": "word_scramble",
          "prompt": "Unscramble: 'C O M B U S T I O N'",
          "targetWord": "COMBUSTION",
          "scrambleLetters": [
            "T",
            "I",
            "O",
            "N",
            "C",
            "O",
            "M",
            "B",
            "U",
            "S"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-d78-1-1",
            "question": "What lesson did Danny's father teach him about real smiles?",
            "options": [
              "A real smile must show all thirty-two teeth",
              "A real smile must always reach the eyes with a golden spark",
              "A smile is only good when you are winning",
              "Smiles are unimportant"
            ],
            "correctIndex": 1,
            "explanation": "Danny's father taught that a true smile always lights up the eyes from within!",
            "visualClueEmoji": "📖",
            "points": 50
          },
          {
            "id": "q-danny-78-1-vocab1",
            "question": "Find a word in the passage that means: \"Made in exact imitation of something valuable with the intention to deceive.\".",
            "options": [
              "Gypsy",
              "Caravan",
              "Counterfeit",
              "Least"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Counterfeit\" means made in exact imitation of something valuable with the intention to deceive.",
            "visualClueEmoji": "🎭",
            "points": 60
          },
          {
            "id": "q-danny-78-1-3",
            "question": "How do the characters resolve the main problem in this chapter?",
            "options": [
              "By showing courage, quick thinking, and teamwork",
              "By waiting for someone else to fix it",
              "By running away as fast as possible",
              "By forgetting about the problem completely"
            ],
            "correctIndex": 0,
            "explanation": "Their ingenuity and teamwork helped them overcome the obstacle.",
            "visualClueEmoji": "💡",
            "points": 60
          },
          {
            "id": "q-danny-78-1-vocab2",
            "question": "Find a word in the passage that means: \"The process of burning something, as in an internal combustion engine.\".",
            "options": [
              "Gypsy",
              "Caravan",
              "Least",
              "Combustion"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Combustion\" means the process of burning something, as in an internal combustion engine.",
            "visualClueEmoji": "⚙️",
            "points": 60
          }
        ]
      },
      {
        "id": "danny-78-2",
        "dayNumber": 2,
        "title": "The Midnight Drive & The Pit Trap",
        "subtitle": "A nine-year-old mechanic's daring midnight rescue",
        "estReadingMinutes": 15,
        "totalWordCount": 800,
        "summary": "When William fails to return from Hazell's Wood, nine-year-old Danny pilots the Austin Seven car across country roads and rescues his father from a camouflaged keeper's pit.",
        "visualScenes": [
          {
            "id": "scene-d78-2",
            "title": "Rescue at the Pit Trap",
            "backgroundGradient": "from-slate-950 via-emerald-950 to-stone-900",
            "illustrationType": "danny_caravan",
            "caption": "Danny tied the towline to a silver birch tree and lowered the rope into the eight-foot pit to haul his father out.",
            "characterAvatars": [
              {
                "name": "Danny",
                "emoji": "👦",
                "speech": "Tie the loop under your arms, Dad! I've got you!",
                "position": "left"
              },
              {
                "name": "Dad",
                "emoji": "👨‍🔧",
                "speech": "Danny, you drove five miles in the dead of night!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hd78_2",
                "x": 45,
                "y": 55,
                "label": "Keeper's Pit",
                "icon": "🕳️",
                "soundEffect": "click",
                "funFact": "Keepers dug deep pit traps covered in branches to injure poachers in the dark!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Panic in the Caravan",
            "paragraphs": [
              "At 2:10 AM, the silence in the caravan was deafening. William had promised to return by 10:30 PM at the latest.",
              "Danny knew his father's punctuality was absolute. He threw on his wool sweater and boots, knowing that every minute of delay put his father at the mercy of Hazell's brutal gamekeepers.",
              "He checked the workshop: the tiny 1933 Austin Seven sat ready with five gallons of fuel in the tank."
            ],
            "dialogueBites": [
              {
                "speaker": "Danny",
                "text": "I can't wait until morning. My father needs me right now!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d78-2-1",
              "question": "Why was Danny's decision to drive at age nine remarkable?",
              "options": [
                "He wanted to show off to his classmates",
                "He wanted to go on a joyride",
                "He overcame fear, used his mechanical training, and acted out of pure devotion to save his father"
              ],
              "correctInsightIndex": 2,
              "insight": "Devotion and courage empowered Danny to apply his skills under extreme pressure!",
              "rewardKP": 20
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Navigating the Dark Lanes",
            "paragraphs": [
              "Sitting high on two cushions, Danny gripped the Bakelite steering wheel. The weak six-volt headlamps cast faint yellow beams across the dew-soaked hedges.",
              "He double-declutched through second gear, negotiating the steep hairpin curves of Windmill Hill without grinding a single tooth on the gearbox.",
              "He parked the car in a secluded ditch near the edge of Hazell's Wood, cutting the engine so only the wind through the pines broke the quiet."
            ],
            "dialogueBites": [
              {
                "speaker": "Danny",
                "text": "Second gear engaged smoothly. Dad taught me well.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-danny-78-2-p2",
              "question": "Find a word on this page that means: \"The characteristic of being on time and adhering strictly to schedules.\".",
              "options": [
                "Punctuality",
                "Silence",
                "Caravan"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Punctuality\" (PUNC-TU-AL-I-TY) means the characteristic of being on time and adhering strictly to schedules.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Haul from the Abyss",
            "paragraphs": [
              "Following faint groans through the undergrowth, Danny discovered a pit dug eight feet deep and camouflaged with dead pine branches.",
              "William sat at the bottom, his left ankle badly fractured from the fall.",
              "Danny secured a thick hemp rope around the base of a sturdy birch tree, threw the other end down, and pulled with all his strength while his father levered himself upward. Hand over hand, they hauled William out to freedom!"
            ],
            "dialogueBites": [
              {
                "speaker": "Dad",
                "text": "You are the bravest boy that ever lived, Danny.",
                "avatarEmoji": "👨‍🔧",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d78-2-3",
              "question": "What dangerous trap had the gamekeepers set?",
              "options": [
                "A net in the trees",
                "An eight-foot pit trap covered with false branches",
                "A cage of wild wolves"
              ],
              "correctInsightIndex": 1,
              "insight": "The keepers used cruel, illegal pit traps to catch trespassers in the dark!",
              "rewardKP": 20
            }
          }
        ],
        "vocabList": [
          {
            "word": "Punctuality",
            "phonics": "PUNC-TU-AL-I-TY",
            "definition": "The characteristic of being on time and adhering strictly to schedules.",
            "funExample": "His father's punctuality made Danny realize something was wrong.",
            "emoji": "⏰"
          },
          {
            "word": "Camouflage",
            "phonics": "CAM-OU-FLAGE",
            "definition": "The disguising of military or other objects by painting or covering them with natural foliage.",
            "funExample": "The pit was hidden by clever leaf camouflage.",
            "emoji": "🌿"
          }
        ],
        "microChallenge": {
          "id": "mc-d78-2",
          "title": "Rope Knot Anchor",
          "type": "word_scramble",
          "prompt": "Unscramble: 'C A M O U F L A G E'",
          "targetWord": "CAMOUFLAGE",
          "scrambleLetters": [
            "G",
            "E",
            "C",
            "A",
            "M",
            "O",
            "U",
            "F",
            "L",
            "A"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-d78-2-1",
            "question": "To what object did Danny anchor the rescue rope?",
            "options": [
              "The bumper of the car",
              "A wooden fence post",
              "A sturdy silver birch tree",
              "His shoe"
            ],
            "correctIndex": 2,
            "explanation": "Danny tied the hemp rope around a sturdy silver birch tree to hoist his father!",
            "visualClueEmoji": "📖",
            "points": 50
          },
          {
            "id": "q-danny-78-2-vocab1",
            "question": "Find a word in the passage that means: \"The characteristic of being on time and adhering strictly to schedules.\".",
            "options": [
              "Punctuality",
              "Silence",
              "Caravan",
              "Deafening"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Punctuality\" means the characteristic of being on time and adhering strictly to schedules.",
            "visualClueEmoji": "⏰",
            "points": 60
          },
          {
            "id": "q-danny-78-2-3",
            "question": "How do the characters resolve the main problem in this chapter?",
            "options": [
              "By waiting for someone else to fix it",
              "By running away as fast as possible",
              "By forgetting about the problem completely",
              "By showing courage, quick thinking, and teamwork"
            ],
            "correctIndex": 3,
            "explanation": "Their ingenuity and teamwork helped them overcome the obstacle.",
            "visualClueEmoji": "💡",
            "points": 60
          },
          {
            "id": "q-danny-78-2-vocab2",
            "question": "Find a word in the passage that means: \"The disguising of military or other objects by painting or covering them with natural foliage.\".",
            "options": [
              "Silence",
              "Camouflage",
              "Caravan",
              "Deafening"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Camouflage\" means the disguising of military or other objects by painting or covering them with natural foliage.",
            "visualClueEmoji": "🌿",
            "points": 60
          }
        ]
      },
      {
        "id": "danny-78-3",
        "dayNumber": 3,
        "title": "The Sleeping Beauty Innovation",
        "subtitle": "The science of sleeping raisins & tactical preparation",
        "estReadingMinutes": 15,
        "totalWordCount": 820,
        "summary": "Danny invents the 'Sleeping Beauty' method using soaked raisins and sleeping powder, revolutionizing the poacher's craft to spoil Mr. Hazell's pheasant shoot.",
        "visualScenes": [
          {
            "id": "scene-d78-3",
            "title": "Synthesizing the Sleeping Beauty Raisins",
            "backgroundGradient": "from-amber-100 via-rose-100 to-amber-200",
            "illustrationType": "sleeping_potion",
            "caption": "Using a surgical razor blade, Danny prepared 120 soaked raisins with calibrated doses of sleeping powder.",
            "characterAvatars": [
              {
                "name": "Danny",
                "emoji": "👦",
                "speech": "Each raisin is a sweet, irresistible slumber pill!",
                "position": "left"
              },
              {
                "name": "Dad",
                "emoji": "👨‍🔧",
                "speech": "It's the most brilliant invention in sporting history!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hsr78_1",
                "x": 50,
                "y": 55,
                "label": "Doctor Spencer's Powder",
                "icon": "💊",
                "soundEffect": "magic",
                "funFact": "Doctor Spencer gave them harmless sleeping capsules originally meant for William's broken ankle!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Tyranny of Victor Hazell",
            "paragraphs": [
              "Mr. Victor Hazell was an obnoxious snob who had bought his estate with brewery millions. He treated the villagers with haughty contempt and bullied children outside the post office. The scene was filled with unadulterated, creating an unforgettable moment.",
              "His annual shoot was an aristocratic spectacle designed to impress dukes, lords, and government ministers by slaughtering two thousand reared birds in a single afternoon.",
              "'If we can capture his pheasants the night before,' William said with a gleam in his eye, 'there will not be a single bird for his titled guests to shoot!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Dad",
                "text": "It would be the greatest practical joke in the history of the county!",
                "avatarEmoji": "👨‍🔧",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d78-3-1",
              "question": "Why was Mr. Hazell's annual shoot considered an offensive spectacle by the villagers?",
              "options": [
                "It was an arrogant display of aristocratic vanity where captive reared birds were needlessly slaughtered",
                "Because they didn't invite enough musicians",
                "Because the shoot was too quiet"
              ],
              "correctInsightIndex": 0,
              "insight": "Hazell's shoot symbolized cruelty, class arrogance, and ostentatious vanity!",
              "rewardKP": 20
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Historical Methods vs. Modern Chemistry",
            "paragraphs": [
              "William explained the traditional methods: 'The Horsehair-in-the-Pea' (which lodged in the beak) and 'The Sticky Hat' (paper cones lined with birdlime).",
              "Both methods were noisy, inefficient, and could only catch a handful of birds before alerting the armed keepers.",
              "Then Danny offered his breakthrough: 'What if we soak green raisins in water, slit them open, and fill them with sleeping powder from your prescription capsules?'"
            ],
            "dialogueBites": [
              {
                "speaker": "Danny",
                "text": "The birds will eat quietly, roost in the trees, and fall asleep peacefully!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Dad",
                "text": "Danny... you are a genius. Pure, unadulterated genius!",
                "avatarEmoji": "👨‍🔧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-danny-78-3-p2",
              "question": "Find a word on this page that means: \"Extremely unpleasant, arrogant, and offensive.\".",
              "options": [
                "Victor",
                "Obnoxious",
                "Hazell"
              ],
              "correctInsightIndex": 1,
              "insight": "\"Obnoxious\" (OB-NOX-IOUS) means extremely unpleasant, arrogant, and offensive.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "Precision Assembly Line",
            "paragraphs": [
              "Together in the caravan, they opened Doctor Spencer's sleeping capsules, dividing the white powder into minute, harmless doses.",
              "Danny operated like a surgeon: slitting the soft skin of each hydrated raisin, dusting the cavity, and sealing the tacky edges with a gentle press of his thumb.",
              "By evening, one hundred and twenty 'Sleeping Beauties' were arrayed in an airtight tin box, ready to rewrite country history."
            ],
            "dialogueBites": [
              {
                "speaker": "Danny",
                "text": "One hundred and twenty sweet traps, ready for the woods!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d78-3-3",
              "question": "What quality did Danny and his father demonstrate while assembling the raisins?",
              "options": [
                "Hasty carelessness and sloppiness",
                "Anger and frustration",
                "Meticulous precision, teamwork, and careful scientific patience"
              ],
              "correctInsightIndex": 2,
              "insight": "Precision and shared teamwork turned their creative idea into an infallible plan!",
              "rewardKP": 20
            }
          }
        ],
        "vocabList": [
          {
            "word": "Obnoxious",
            "phonics": "OB-NOX-IOUS",
            "definition": "Extremely unpleasant, arrogant, and offensive.",
            "funExample": "Mr. Victor Hazell was an obnoxious bully.",
            "emoji": "😤"
          },
          {
            "word": "Unadulterated",
            "phonics": "UN-A-DUL-TER-AT-ED",
            "definition": "Complete and pure; not mixed with any different elements.",
            "funExample": "Danny's idea was pure, unadulterated genius!",
            "emoji": "✨"
          }
        ],
        "microChallenge": {
          "id": "mc-d78-3",
          "title": "Sleeping Beauty Formulation",
          "type": "pheasant_capture",
          "prompt": "Sequence the formulation: Hydrate Raisin -> Divide Powder -> Pack Cavity -> Seal Edges!",
          "options": [
            "Hydrate Dried Raisins",
            "Divide Powder Dose",
            "Pack Cavity & Seal Edges"
          ],
          "correctOrder": [
            "Hydrate Dried Raisins",
            "Divide Powder Dose",
            "Pack Cavity & Seal Edges"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-d78-3-1",
            "question": "Who provided the sleeping capsules used in the Sleeping Beauty method?",
            "options": [
              "Mr. Victor Hazell",
              "The local baker",
              "An Oompa Loompa",
              "Doctor Spencer, the kind village physician"
            ],
            "correctIndex": 3,
            "explanation": "Doctor Spencer, who also disliked Victor Hazell, provided the sleeping medication!",
            "visualClueEmoji": "📖",
            "points": 50
          },
          {
            "id": "q-danny-78-3-vocab1",
            "question": "Find a word in the passage that means: \"Extremely unpleasant, arrogant, and offensive.\".",
            "options": [
              "Victor",
              "Obnoxious",
              "Hazell",
              "Snob"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Obnoxious\" means extremely unpleasant, arrogant, and offensive.",
            "visualClueEmoji": "😤",
            "points": 60
          },
          {
            "id": "q-danny-78-3-3",
            "question": "How do the characters resolve the main problem in this chapter?",
            "options": [
              "By waiting for someone else to fix it",
              "By running away as fast as possible",
              "By showing courage, quick thinking, and teamwork",
              "By forgetting about the problem completely"
            ],
            "correctIndex": 2,
            "explanation": "Their ingenuity and teamwork helped them overcome the obstacle.",
            "visualClueEmoji": "💡",
            "points": 60
          },
          {
            "id": "q-danny-78-3-vocab2",
            "question": "Find a word in the passage that means: \"Complete and pure; not mixed with any different elements.\".",
            "options": [
              "Unadulterated",
              "Victor",
              "Hazell",
              "Obnoxious"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Unadulterated\" means complete and pure; not mixed with any different elements.",
            "visualClueEmoji": "✨",
            "points": 60
          }
        ]
      },
      {
        "id": "danny-78-4",
        "dayNumber": 4,
        "title": "The Harvest of Slumbering Birds",
        "subtitle": "The midnight rain of sleeping pheasants in Hazell's Wood",
        "estReadingMinutes": 15,
        "totalWordCount": 840,
        "summary": "Danny and William distribute the prepared raisins in the keeper's clearing. At dusk, the sleeping potion takes effect, causing 120 pheasants to tumble gently out of the trees into their sacks.",
        "visualScenes": [
          {
            "id": "scene-d78-4",
            "title": "The Silent Harvest in the Larch Clearing",
            "backgroundGradient": "from-slate-950 via-emerald-950 to-stone-900",
            "illustrationType": "pheasant_roost",
            "caption": "In the moonlit silence, slumbering pheasants dropped from the high branches onto the soft bed of needles.",
            "characterAvatars": [
              {
                "name": "Danny",
                "emoji": "👦",
                "speech": "There goes another one! Catch it before it rolls into the ditch!",
                "position": "left"
              },
              {
                "name": "Dad",
                "emoji": "👨‍🔧",
                "speech": "A clean sweep of the entire wood!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hpr78_1",
                "x": 45,
                "y": 50,
                "label": "Larch Branch",
                "icon": "🌲",
                "soundEffect": "magic",
                "funFact": "Larch needles create a soft, bouncy carpet that cushions falling birds perfectly!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Infiltration of the Keeper's Clearing",
            "paragraphs": [
              "Beneath the cover of gathering twilight, Danny and William slipped into Hazell's Wood, avoiding the known patrols of keepers Rabbetts and Keetch. The scene was filled with exfiltration, creating an unforgettable moment.",
              "They reached the prime feeding glade where hundreds of pheasants clustered. Danny methodically scattered the treated raisins along the mossy trails.",
              "Within minutes, the greedy birds gorged on the sweet treats, gobbling every single green raisin before flying up into the larch trees to roost for the night."
            ],
            "dialogueBites": [
              {
                "speaker": "Dad",
                "text": "Every raisin has been consumed. Now the medicine must work its magic.",
                "avatarEmoji": "👨‍🔧",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d78-4-1",
              "question": "How did the pheasants react to Danny's scattered raisins?",
              "options": [
                "They ignored the raisins and ate mushrooms",
                "They hungrily consumed every single raisin before flying up into the trees to sleep",
                "They flew away to a different forest"
              ],
              "correctInsightIndex": 1,
              "insight": "The birds couldn't resist the sweet hydrated raisins and devoured all 120 treats!",
              "rewardKP": 20
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Phenomenon of Falling Birds",
            "paragraphs": [
              "Darkness settled over the canopy. A cool breeze sighed through the pines.",
              "Then, high above, a branch swayed. A faint rustle of feathers was followed by a soft, muffled sound: Flump!",
              "A magnificent cock pheasant, completely anesthetized, slid off its roost and landed in the pine needles. Seconds later, the forest floor sounded like a hail of giant overripe fruit: Flump! Flump! Flump!"
            ],
            "dialogueBites": [
              {
                "speaker": "Danny",
                "text": "It's raining birds! It's like a fairy tale, Dad!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Dad",
                "text": "Get the sacks ready! We've captured the entire roost!",
                "avatarEmoji": "👨‍🔧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-danny-78-4-p2",
              "question": "Find a word on this page that means: \"The process of secretly withdrawing troops, individuals, or goods from a dangerous area.\".",
              "options": [
                "Beneath",
                "Cover",
                "Exfiltration"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Exfiltration\" (EX-FIL-TRA-TION) means the process of secretly withdrawing troops, individuals, or goods from a dangerous area.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Pram Exfiltration",
            "paragraphs": [
              "Working with breathtaking speed, Danny and his father loaded one hundred and twenty birds into six burlap sacks.",
              "At the forest boundary, they met Mrs. Clipstone, the vicar's wife, who arrived with her specially reinforced, oversized baby pram.",
              "They stacked the sacks inside the pram, covered them with a floral baby blanket, and wheeled the magnificent cargo down the road under the very noses of the searching keepers."
            ],
            "dialogueBites": [
              {
                "speaker": "Mrs. Clipstone",
                "text": "Just taking the baby out for some fresh midnight air, gentlemen!",
                "avatarEmoji": "👩‍🌾",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d78-4-3",
              "question": "How did the community help Danny and his father execute their plan?",
              "options": [
                "Respected village figures like Mrs. Clipstone and Doctor Spencer united to support them against the bully Hazell",
                "The police arrested everyone",
                "The villagers stayed inside and locked their doors"
              ],
              "correctInsightIndex": 0,
              "insight": "The entire village quietly supported Danny because of mutual respect and hatred of tyranny!",
              "rewardKP": 20
            }
          }
        ],
        "vocabList": [
          {
            "word": "Exfiltration",
            "phonics": "EX-FIL-TRA-TION",
            "definition": "The process of secretly withdrawing troops, individuals, or goods from a dangerous area.",
            "funExample": "The pram exfiltration went off without a hitch.",
            "emoji": "🤫"
          },
          {
            "word": "Anesthetized",
            "phonics": "AN-ES-THE-TIZED",
            "definition": "Made unconscious or insensible to pain, as with a gentle sedative.",
            "funExample": "The anesthetized pheasants slumbered peacefully.",
            "emoji": "💤"
          }
        ],
        "microChallenge": {
          "id": "mc-d78-4",
          "title": "Pram Cargo Arrangement",
          "type": "pheasant_capture",
          "prompt": "Load the 6 Sacks into the Pram: Lower Tier -> Upper Tier -> Baby Blanket Disguise!",
          "options": [
            "Stack 3 Lower Sacks",
            "Stack 3 Upper Sacks",
            "Drape Floral Baby Blanket"
          ],
          "correctOrder": [
            "Stack 3 Lower Sacks",
            "Stack 3 Upper Sacks",
            "Drape Floral Baby Blanket"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-d78-4-1",
            "question": "Who helped transport the sacks of sleeping pheasants using a baby pram?",
            "options": [
              "Mrs. Clipstone, the vicar's wife",
              "Miss Trunchbull",
              "Mrs. Phelps",
              "Veruca Salt"
            ],
            "correctIndex": 0,
            "explanation": "Mrs. Clipstone used her giant pram to disguise and transport the sleeping birds!",
            "visualClueEmoji": "📖",
            "points": 50
          },
          {
            "id": "q-danny-78-4-vocab1",
            "question": "Find a word in the passage that means: \"The process of secretly withdrawing troops, individuals, or goods from a dangerous area.\".",
            "options": [
              "Beneath",
              "Cover",
              "Gathering",
              "Exfiltration"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Exfiltration\" means the process of secretly withdrawing troops, individuals, or goods from a dangerous area.",
            "visualClueEmoji": "🤫",
            "points": 60
          },
          {
            "id": "q-danny-78-4-3",
            "question": "How do the characters resolve the main problem in this chapter?",
            "options": [
              "By waiting for someone else to fix it",
              "By showing courage, quick thinking, and teamwork",
              "By running away as fast as possible",
              "By forgetting about the problem completely"
            ],
            "correctIndex": 1,
            "explanation": "Their ingenuity and teamwork helped them overcome the obstacle.",
            "visualClueEmoji": "💡",
            "points": 60
          },
          {
            "id": "q-danny-78-4-vocab2",
            "question": "Find a word in the passage that means: \"Made unconscious or insensible to pain, as with a gentle sedative.\".",
            "options": [
              "Beneath",
              "Cover",
              "Anesthetized",
              "Gathering"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Anesthetized\" means made unconscious or insensible to pain, as with a gentle sedative.",
            "visualClueEmoji": "💤",
            "points": 60
          }
        ]
      },
      {
        "id": "danny-78-5",
        "dayNumber": 5,
        "title": "The Awakening & The Title of Champion",
        "subtitle": "The rooftop pandemonium and the crowning of a young hero",
        "estReadingMinutes": 15,
        "totalWordCount": 860,
        "summary": "The sleeping pills wear off as Victor Hazell arrives in his Rolls-Royce. The birds wake up, swarm his car, and fly into the wild, leading William to crown Danny the Champion of the World.",
        "visualScenes": [
          {
            "id": "scene-d78-5",
            "title": "Pandemonium at the Filling Station",
            "backgroundGradient": "from-amber-200 via-yellow-100 to-sky-200",
            "illustrationType": "champions_flight",
            "caption": "One hundred and twenty revived pheasants flew in swirling spirals, bombarding Mr. Hazell's Rolls-Royce before vanishing into the sky.",
            "characterAvatars": [
              {
                "name": "Mr. Victor Hazell",
                "emoji": "😡",
                "speech": "This is grand larceny! I'll have you all imprisoned!",
                "position": "left"
              },
              {
                "name": "Sergeant Samways",
                "emoji": "👮",
                "speech": "Wild birds belong to no man, Mr. Hazell. Move along!",
                "position": "center"
              },
              {
                "name": "William",
                "emoji": "👨‍🔧",
                "speech": "Danny, you are the Champion of the World!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hch78_1",
                "x": 50,
                "y": 35,
                "label": "Rolls-Royce Mascot",
                "icon": "🚘",
                "soundEffect": "success",
                "funFact": "Roald Dahl loved satirizing pompous car owners who cared more about paintwork than people!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Awakening on the Ridge Tiles",
            "paragraphs": [
              "By 9:00 AM, the autumn sun had warmed the filling station forecourt, and the sedative was rapidly metabolizing in the birds' bloodstreams.",
              "One by one, the pheasants began stirring, clucking softly and stretching their magnificent green-and-gold wings.",
              "Within minutes, the roof of the workshop, the petrol pumps, and the apple trees were covered with one hundred and twenty waking, shimmering game birds."
            ],
            "dialogueBites": [
              {
                "speaker": "Danny",
                "text": "They're shaking off the sleep! Look at the colors in the morning light!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d78-5-1",
              "question": "What happened when the sedative wore off in the morning sun?",
              "options": [
                "They all fell asleep again",
                "They walked away in a straight single line",
                "The pheasants woke up completely healthy, energetic, and took over the workshop roof"
              ],
              "correctInsightIndex": 2,
              "insight": "The birds were unharmed and woke up fully revitalized in the sunshine!",
              "rewardKP": 20
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Defeat of Victor Hazell",
            "paragraphs": [
              "A long maroon Rolls-Royce roared into the station. Mr. Victor Hazell emerged in full shooting regalia, trembling with incandescent fury.",
              "'You've stolen my entire shoot!' he screamed, brandishing his stick. But Sergeant Samways, leaning on his bicycle, calmly cited British common law: wild game in flight cannot be privately owned.",
              "As if on cue, the birds launched into the air in a deafening flurry of wings, dive-bombing Hazell's shiny paintwork and scattering his haughty guests in terror before dispersing across the countryside!"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Hazell",
                "text": "My shoot is ruined! My dukes and ministers will laugh at me!",
                "avatarEmoji": "😡",
                "side": "left"
              },
              {
                "speaker": "Sergeant Samways",
                "text": "Nature has its own laws, Mr. Hazell. Good day to you, sir!",
                "avatarEmoji": "👮",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-danny-78-5-p2",
              "question": "Find a word on this page that means: \"Extremely angry; also emitting light as a result of being heated.\".",
              "options": [
                "Incandescent",
                "Autumn",
                "Warmed"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Incandescent\" (IN-CAN-DES-CENT) means extremely angry; also emitting light as a result of being heated.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Champion of the World",
            "paragraphs": [
              "As Hazell sped away in humiliated defeat, Danny and his father stood by the caravan, breathing in the sweet smell of morning apples.",
              "William looked down at Danny, the golden spark in his eyes shining brighter than the sun.",
              "'You did it, Danny,' William whispered with profound tenderness. 'You invented the plan, you saved my life in the pit, and you defeated the biggest tyrant in the valley. You are, and will always be, the Champion of the World.'"
            ],
            "dialogueBites": [
              {
                "speaker": "William",
                "text": "A wonderful parent makes every day an adventure. But you, Danny, are the Champion.",
                "avatarEmoji": "👨‍🔧",
                "side": "left"
              },
              {
                "speaker": "Danny",
                "text": "I had the best teacher in the world, Dad.",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d78-5-3",
              "question": "What makes Danny, the Champion of the World one of Roald Dahl's most touching stories?",
              "options": [
                "It teaches kids how to build race cars",
                "It is an enduring celebration of unconditional father-son love, mutual respect, and ordinary heroes",
                "It shows that rich people always get their way"
              ],
              "correctInsightIndex": 1,
              "insight": "The bond between Danny and his father is the beating heart of Dahl's warmest masterpiece!",
              "rewardKP": 20
            }
          }
        ],
        "vocabList": [
          {
            "word": "Incandescent",
            "phonics": "IN-CAN-DES-CENT",
            "definition": "Extremely angry; also emitting light as a result of being heated.",
            "funExample": "Mr. Hazell was incandescent with rage.",
            "emoji": "😡"
          },
          {
            "word": "Regalia",
            "phonics": "RE-GA-LI-A",
            "definition": "The distinctive clothing and emblems of an office, rank, or official occasion.",
            "funExample": "He arrived in his full tweed shooting regalia.",
            "emoji": "👔"
          }
        ],
        "microChallenge": {
          "id": "mc-d78-5",
          "title": "Champion Medal of the World",
          "type": "golden_ticket_scratch",
          "prompt": "Scratch the golden spark plug to unlock your Champion of the World Title!",
          "rewardGems": 3
        },
        "quizQuestions": [
          {
            "id": "q-d78-5-1",
            "question": "Why was Danny's victory over Mr. Hazell so satisfying to the entire community?",
            "options": [
              "Because everyone got free petrol",
              "Because Mr. Hazell gave them his car",
              "Because it proved that humility, wit, and courage can outsmart arrogance and wealth",
              "Because the police closed down the filling station"
            ],
            "correctIndex": 2,
            "explanation": "Danny's triumph showed that character and ingenuity conquer arrogance and greed!",
            "visualClueEmoji": "📖",
            "points": 50
          },
          {
            "id": "q-danny-78-5-vocab1",
            "question": "Find a word in the passage that means: \"Extremely angry; also emitting light as a result of being heated.\".",
            "options": [
              "Autumn",
              "Warmed",
              "Filling",
              "Incandescent"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Incandescent\" means extremely angry; also emitting light as a result of being heated.",
            "visualClueEmoji": "😡",
            "points": 60
          },
          {
            "id": "q-danny-78-5-3",
            "question": "How do the characters resolve the main problem in this chapter?",
            "options": [
              "By showing courage, quick thinking, and teamwork",
              "By waiting for someone else to fix it",
              "By running away as fast as possible",
              "By forgetting about the problem completely"
            ],
            "correctIndex": 0,
            "explanation": "Their ingenuity and teamwork helped them overcome the obstacle.",
            "visualClueEmoji": "💡",
            "points": 60
          },
          {
            "id": "q-danny-78-5-vocab2",
            "question": "Find a word in the passage that means: \"The distinctive clothing and emblems of an office, rank, or official occasion.\".",
            "options": [
              "Autumn",
              "Regalia",
              "Warmed",
              "Filling"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Regalia\" means the distinctive clothing and emblems of an office, rank, or official occasion.",
            "visualClueEmoji": "👔",
            "points": 60
          }
        ]
      }
    ],
    "9+": [
      {
        "id": "danny-9plus-1",
        "dayNumber": 1,
        "title": "The Gypsy Caravan & The Great Big Friendly Father",
        "subtitle": "Living under apple trees, fixing motorcars, and smiles that light up the eyes!",
        "estReadingMinutes": 15,
        "totalWordCount": 770,
        "summary": "Nine-year-old Danny lives with his loving father William in a cozy yellow gypsy caravan behind their petrol station. William teaches Danny mechanics and tells wonderful bedtime stories.",
        "visualScenes": [
          {
            "id": "scene-d9-1",
            "title": "The Cozy Gypsy Caravan Under the Apple Trees",
            "backgroundGradient": "from-amber-900 via-emerald-950 to-slate-900",
            "illustrationType": "danny_caravan",
            "caption": "Danny and his father sat by the warm little stove in the gypsy caravan, drinking hot tea while the autumn rain tapped softly on the curved roof.",
            "characterAvatars": [
              {
                "name": "Danny",
                "emoji": "👦",
                "speech": "My father is the most wonderful person in the whole world!",
                "position": "left"
              },
              {
                "name": "William",
                "emoji": "👨‍🔧",
                "speech": "Look with your eyes when someone smiles, Danny. The eyes never lie.",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hd9-1",
                "x": 40,
                "y": 55,
                "label": "Cast-Iron Stove",
                "icon": "🔥",
                "soundEffect": "magic",
                "funFact": "The little stove burned birch logs and kept the wooden caravan warm all winter!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Yellow Caravan Under the Apple Trees",
            "paragraphs": [
              "When I was four months old, my mother died suddenly, and there was only my father and me. We lived in an old wooden gypsy caravan with big wooden wheels painted bright yellow and red, nestled under a grove of old apple trees behind our little filling station.",
              "The caravan had only one room, and it was barely larger than a horse box. But inside, it was the coziest place on earth. In the corner stood a little cast-iron pot-bellied stove that burned dried birch logs. There was a bunk bed built into the wall, a wooden table that folded down on hinges, and a paraffin lamp swinging gently from the ceiling beam.",
              "We had no electricity, no television, and no running tap water. We washed our faces in an enamel basin by the outside pump. Yet I never once felt poor, because my father filled every minute of our days with love, laughter, and wondrous stories."
            ],
            "dialogueBites": [
              {
                "speaker": "Danny",
                "text": "Father, the little stove makes the whole caravan smell of warm birch wood!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "William",
                "text": "There is nothing cozier in all of England, Danny boy.",
                "avatarEmoji": "👨‍🔧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d9-1-1",
              "question": "Where did Danny and his father live together?",
              "options": [
                "In a giant modern skyscraper in London",
                "In a cozy wooden gypsy caravan behind their filling station",
                "In a cold stone castle in Scotland"
              ],
              "correctInsightIndex": 1,
              "insight": "Danny and his father lived happily in a cozy wooden gypsy caravan under apple trees.",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "A Father Who Smiled with His Eyes",
            "paragraphs": [
              "My father, William, was a master motor mechanic. People drove from thirty miles away to have him listen to their engines. He could diagnose a misfiring cylinder simply by pressing the tip of a long screwdriver to the engine block and putting his ear to the wooden handle.",
              "By the time I was seven, my father had taught me how to dismantle a carburetor, clean a spark plug, and adjust the tappets on an Austin 7. But far more important than his skill with spanners was his warmth.",
              "'Watch people carefully when they smile, Danny,' he used to tell me. 'If a smile does not reach the eyes, it is a false smile. A real smile crinkles up the skin around the corners of the eyes and lights them up from inside, like two warm lanterns.' My father was an eye-smiler; when he looked down at me, his eyes shone with genuine kindness."
            ],
            "dialogueBites": [
              {
                "speaker": "William",
                "text": "A real smile lights up the eyes from within, Danny. Never trust a mouth-only smile.",
                "avatarEmoji": "👨‍🔧",
                "side": "left"
              },
              {
                "speaker": "Danny",
                "text": "Your eyes always twinkle when you look at me, Father!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-danny-9plus-1-p2",
              "question": "Find a word on this page that means: \"Real, honest, and truly felt from the heart.\".",
              "options": [
                "Four",
                "Months",
                "Genuine"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Genuine\" (JEN-yoo-in) means real, honest, and truly felt from the heart.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "Bedtime Stories of the Big Friendly Giant",
            "paragraphs": [
              "Every single night, after the paraffin lamp was turned down low, my father sat on the edge of my bunk bed and told me stories. He never read from a printed book; every tale was spun straight from his magnificent imagination.",
              "His favorite bedtime character was the BFG—the Big Friendly Giant. My father described how this gentle three-metre giant crept through villages in the dead of night, carrying a long trumpet and a suitcase full of glass jars.",
              "'The BFG catches lovely dreams in Dream Country,' my father whispered, his eyes dancing in the lamp light. 'Then he blows golden dreams through bedroom windows to make sleeping children happy.' I lay in my warm bunk bed, gazing up at my father, knowing that no boy in all the world had a better father than mine."
            ],
            "dialogueBites": [
              {
                "speaker": "William",
                "text": "The BFG blows happy dreams right through the window to sweet children!",
                "avatarEmoji": "✨",
                "side": "left"
              },
              {
                "speaker": "Danny",
                "text": "I bet the BFG is almost as gentle and kind as you, Father.",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d9-1-3",
              "question": "Who was the main character in the bedtime stories Danny's father told?",
              "options": [
                "The BFG, the Big Friendly Giant who catches happy dreams in glass jars",
                "A scary dragon that lived under the ocean",
                "A pirate captain searching for treasure chests"
              ],
              "correctInsightIndex": 0,
              "insight": "William delighted Danny with magical stories of the gentle dream-catching BFG.",
              "rewardKP": 15
            }
          }
        ],
        "paragraphs": [
          "Danny lived with his father William in an old yellow gypsy caravan behind their petrol station under apple trees.",
          "Though they had no electricity or television, their caravan was filled with warmth, love, and a cast-iron wood stove.",
          "William was a brilliant motor mechanic who taught Danny how to take apart carburetors and fix car engines.",
          "William taught Danny that a genuine smile always crinkles the eyes and shines with warmth from within.",
          "Every night by the paraffin lamp, William spun magical bedtime stories from his imagination.",
          "His favorite character was the BFG, the gentle Big Friendly Giant who blew sweet dreams into children's bedrooms."
        ],
        "vocabList": [
          {
            "word": "Caravan",
            "phonics": "KAIR-uh-van",
            "definition": "A cozy wooden house on wheels, traditionally pulled by a horse.",
            "funExample": "Danny loved living in the bright yellow gypsy caravan.",
            "emoji": "🛞"
          },
          {
            "word": "Mechanic",
            "phonics": "muh-KAN-ik",
            "definition": "A skilled person who repairs and maintains motorcar engines.",
            "funExample": "William was the finest motor mechanic in the whole county.",
            "emoji": "🔧"
          },
          {
            "word": "Genuine",
            "phonics": "JEN-yoo-in",
            "definition": "Real, honest, and truly felt from the heart.",
            "funExample": "William's warm smile was completely genuine.",
            "emoji": "❤️"
          }
        ],
        "microChallenge": {
          "id": "mc-d9-1",
          "title": "Mechanic's Tool Chest",
          "type": "word_scramble",
          "prompt": "Unscramble William's secret: William's smile showed true WARMTH",
          "targetWord": "WARMTH",
          "scrambleLetters": [
            "H",
            "T",
            "M",
            "R",
            "A",
            "W"
          ],
          "rewardGems": 30
        },
        "quizQuestions": [
          {
            "id": "qd9-1-1",
            "question": "Where did Danny and his father live together?",
            "options": [
              "In a modern brick apartment building in the city",
              "In a cozy yellow gypsy caravan behind their filling station",
              "In a large stone mansion with twenty bedrooms",
              "In a wooden boat floating on the river"
            ],
            "correctIndex": 1,
            "explanation": "Danny and his father lived in a cozy gypsy caravan parked under apple trees.",
            "visualClueEmoji": "🛞",
            "points": 60
          },
          {
            "id": "q-danny-9plus-1-vocab1",
            "question": "Find a word in the passage that means: \"A cozy wooden house on wheels, traditionally pulled by a horse.\".",
            "options": [
              "Four",
              "Months",
              "Caravan",
              "Mother"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Caravan\" means a cozy wooden house on wheels, traditionally pulled by a horse.",
            "visualClueEmoji": "🛞",
            "points": 60
          },
          {
            "id": "qd9-1-3",
            "question": "What did William tell Danny about how to spot a real smile?",
            "options": [
              "A real smile crinkles the skin around the eyes and lights them up from inside",
              "A real smile must show every single tooth in the mouth",
              "A real smile is always completely silent",
              "A real smile only happens when someone eats candy"
            ],
            "correctIndex": 0,
            "explanation": "William explained that a real smile reaches the corners of the eyes and shines with warmth.",
            "visualClueEmoji": "👀",
            "points": 60
          },
          {
            "id": "q-danny-9plus-1-vocab2",
            "question": "Find a word in the passage that means: \"A skilled person who repairs and maintains motorcar engines.\".",
            "options": [
              "Four",
              "Months",
              "Mother",
              "Mechanic"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Mechanic\" means a skilled person who repairs and maintains motorcar engines.",
            "visualClueEmoji": "🔧",
            "points": 60
          }
        ]
      },
      {
        "id": "danny-9plus-2",
        "dayNumber": 2,
        "title": "The Secret of the Wood & The Midnight Rescue",
        "subtitle": "A dark secret revealed, a midnight drive, and pulling father from the pit!",
        "estReadingMinutes": 15,
        "totalWordCount": 780,
        "summary": "William reveals his secret passion for pheasant poaching in Hazell's Wood. When he fails to return at midnight, nine-year-old Danny bravely drives an Austin 7 into the dark forest to rescue him!",
        "visualScenes": [
          {
            "id": "scene-d9-2",
            "title": "Driving the Austin 7 Through the Midnight Mist",
            "backgroundGradient": "from-slate-950 via-teal-950 to-emerald-950",
            "illustrationType": "danny_caravan",
            "caption": "Nine-year-old Danny gripped the steering wheel tight, steering the tiny Austin 7 down dark country lanes to save his father.",
            "characterAvatars": [
              {
                "name": "Danny",
                "emoji": "👦",
                "speech": "Hold on, Father! I am coming to find you!",
                "position": "left"
              },
              {
                "name": "William",
                "emoji": "🕳️",
                "speech": "Danny! Down here in the pit! My ankle is broken!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hd9-2",
                "x": 50,
                "y": 50,
                "label": "Austin 7 Headlights",
                "icon": "💡",
                "soundEffect": "magic",
                "funFact": "Danny had to sit on the edge of the driver's seat to reach the accelerator pedal!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Secret Passion for Pheasant Poaching",
            "paragraphs": [
              "When I turned nine, my father shared a secret he had kept hidden all my life. 'Danny,' he whispered by the stove one evening, 'all my life I have had one deep, passionate hobby: pheasant poaching.'",
              "I gasped. Poaching meant creeping onto a wealthy landlord's private forest estate at night to catch wild game birds. My father explained that the country folk had poached pheasants for hundreds of years. The birds were wild woodland creatures, yet arrogant, rich landowners claimed ownership over all of them.",
              "The biggest landowner nearby was Mr. Victor Hazell, a pompous, cruel man with huge fat jowls and a ruby-colored Rolls-Royce. Hazell owned Hazell's Wood, where thousands of pheasants nested for his lavish autumn shooting parties. My father decided to go out for a quiet evening stalk in the wood, promising to return by ten-thirty."
            ],
            "dialogueBites": [
              {
                "speaker": "William",
                "text": "Pheasants are wild creatures of the forest, Danny. Poaching is a thrilling game of wits!",
                "avatarEmoji": "👨‍🔧",
                "side": "left"
              },
              {
                "speaker": "Danny",
                "text": "Be careful of Mr. Hazell's cruel gamekeepers, Father!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d9-2-1",
              "question": "What secret passion did Danny's father reveal to him?",
              "options": [
                "Secretly training racehorses at midnight",
                "Collecting rare stamps from France",
                "Pheasant poaching in Hazell's Wood, outwitting the wealthy landlord's gamekeepers"
              ],
              "correctInsightIndex": 2,
              "insight": "William revealed his lifelong passion for outsmarting gamekeepers and catching wild pheasants.",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Midnight in the Caravan and the Brave Decision",
            "paragraphs": [
              "Ten-thirty came and went. The small wind-up clock on the shelf ticked loudly in the silence: eleven o'clock... eleven-thirty... midnight. My father had never been late in his entire life.",
              "I sat alone in the dark caravan, my heart hammering against my ribs. Something terrible had happened in Hazell's Wood. The forest was four miles away, surrounded by dark country lanes. I was only nine years old and had never driven a car alone on an open road.",
              "I pulled on my boots and jacket, grabbed a flashlight, and hurried into the workshop. Standing there was a tiny baby Austin 7 that a customer had left for repair. I cranked the starter handle, pushed the clutch with my toes, eased the gear lever into first, and rolled out into the dark night."
            ],
            "dialogueBites": [
              {
                "speaker": "Danny",
                "text": "Father is in danger. I cannot wait any longer. I must drive the Austin 7!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Narrator",
                "text": "The little car puttered into the pitch-black country lanes.",
                "avatarEmoji": "🚗",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-danny-9plus-2-p2",
              "question": "Find a word on this page that means: \"Catching wild woodland game or fish on private land without permission.\".",
              "options": [
                "Poaching",
                "Turned",
                "Nine"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Poaching\" (POH-ching) means catching wild woodland game or fish on private land without permission.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Hidden Pit and the Heroic Tow Rope",
            "paragraphs": [
              "Driving carefully with headlights glowing yellow against the trees, I reached the dark edge of Hazell's Wood. I switched off the engine and crept into the shadowy forest with my flashlight, whispering: 'Father! Father!'",
              "From somewhere deep under the ferns came a weak, muffled groan: 'Danny? Is that you, Danny?' I rushed toward the sound. Hidden beneath dead branches and leaves was a deep, steep-sided pit—a cruel trap dug by Mr. Hazell's gamekeepers. At the bottom, eight feet down, lay my father with a broken ankle!",
              "I quickly sprinted back to the Austin 7, grabbed a heavy hemp tow rope from the boot, tied one end to a sturdy oak tree, and threw the other end down the pit. With immense courage and effort, I helped pull my injured father up to safety! We crawled into the car and drove home just as the first pink light of dawn appeared."
            ],
            "dialogueBites": [
              {
                "speaker": "William",
                "text": "Danny boy! You drove the car here all by yourself? You are my hero!",
                "avatarEmoji": "👨‍🔧",
                "side": "left"
              },
              {
                "speaker": "Danny",
                "text": "Grab the rope, Father! I have got you!",
                "avatarEmoji": "💪",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d9-2-3",
              "question": "Where did Danny find his injured father in Hazell's Wood?",
              "options": [
                "Sleeping peacefully on a pile of soft leaves",
                "Trapped eight feet down in a hidden pit trap dug by gamekeepers, with a broken ankle",
                "Having tea with Mr. Victor Hazell"
              ],
              "correctInsightIndex": 1,
              "insight": "Danny found his father trapped in a cruel pit trap and pulled him out using a tow rope.",
              "rewardKP": 20
            }
          }
        ],
        "paragraphs": [
          "William revealed his secret lifelong passion for pheasant poaching, which he viewed as a fair game of wits with rich landlords.",
          "William set out for a night stalk in Hazell's Wood, promising to return home by ten-thirty.",
          "When midnight passed with no sign of his father, nine-year-old Danny knew his father was in grave danger.",
          "Bravely overcoming his fear, Danny started up an Austin 7 car and drove four miles through the dark night to the forest.",
          "Danny discovered his father trapped eight feet down in a pit trap dug by gamekeepers, suffering from a broken ankle.",
          "Danny tied a heavy tow rope to a sturdy oak tree, pulled his father to safety, and drove him safely back to the caravan."
        ],
        "vocabList": [
          {
            "word": "Poaching",
            "phonics": "POH-ching",
            "definition": "Catching wild woodland game or fish on private land without permission.",
            "funExample": "Pheasant poaching was a secret country tradition.",
            "emoji": "🌲"
          },
          {
            "word": "Gamekeeper",
            "phonics": "GAYM-kee-pur",
            "definition": "A person employed by an estate to protect wild birds and catch poachers.",
            "funExample": "The gamekeeper dug a hidden pit trap in the woods.",
            "emoji": "🪤"
          }
        ],
        "microChallenge": {
          "id": "mc-d9-2",
          "title": "Midnight Drive",
          "type": "word_scramble",
          "prompt": "Unscramble the rescue tool: Danny used a sturdy TOW ROPE",
          "targetWord": "ROPE",
          "scrambleLetters": [
            "P",
            "O",
            "R",
            "E"
          ],
          "rewardGems": 35
        },
        "quizQuestions": [
          {
            "id": "qd9-2-1",
            "question": "What secret passion did Danny's father William reveal to him?",
            "options": [
              "Secretly building racing airplanes in the workshop",
              "Collecting rare butterfly specimens from mountains",
              "Pheasant poaching in Hazell's Wood, outsmarting the greedy landlord's gamekeepers",
              "Singing in an opera chorus"
            ],
            "correctIndex": 2,
            "explanation": "William revealed his passion for outwitting gamekeepers and poaching pheasants in the woods.",
            "visualClueEmoji": "🌲",
            "points": 60
          },
          {
            "id": "q-danny-9plus-2-vocab1",
            "question": "Find a word in the passage that means: \"Catching wild woodland game or fish on private land without permission.\".",
            "options": [
              "Poaching",
              "Turned",
              "Nine",
              "Father"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Poaching\" means catching wild woodland game or fish on private land without permission.",
            "visualClueEmoji": "🌲",
            "points": 60
          },
          {
            "id": "qd9-2-3",
            "question": "Where did Danny find his injured father in Hazell's Wood?",
            "options": [
              "Hiding up in the branches of a tall beech tree",
              "Resting inside a gamekeeper's wooden cottage",
              "Sitting peacefully on a log eating apples",
              "At the bottom of an eight-foot pit trap dug by gamekeepers, with a broken ankle"
            ],
            "correctIndex": 3,
            "explanation": "Danny found William trapped eight feet down in a camouflaged pit with a broken ankle.",
            "visualClueEmoji": "🕳️",
            "points": 60
          },
          {
            "id": "q-danny-9plus-2-vocab2",
            "question": "Find a word in the passage that means: \"A person employed by an estate to protect wild birds and catch poachers.\".",
            "options": [
              "Turned",
              "Gamekeeper",
              "Nine",
              "Father"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Gamekeeper\" means a person employed by an estate to protect wild birds and catch poachers.",
            "visualClueEmoji": "🪤",
            "points": 60
          }
        ]
      },
      {
        "id": "danny-9plus-3",
        "dayNumber": 3,
        "title": "The Sleeping Beauty Raisin Invention",
        "subtitle": "Outsmarting Victor Hazell with sleeping powder inside sweet soaked raisins!",
        "estReadingMinutes": 15,
        "totalWordCount": 780,
        "summary": "Arrogant landlord Victor Hazell plans his grand pheasant shooting party. Danny invents a brilliant peaceful trick: filling plump soaked raisins with sleeping powder to put the pheasants to sleep!",
        "visualScenes": [
          {
            "id": "scene-d9-3",
            "title": "Preparing the Sleeping Beauty Raisins",
            "backgroundGradient": "from-amber-800 via-rose-950 to-slate-900",
            "illustrationType": "sleeping_potion",
            "caption": "By the glow of the caravan stove, Danny carefully loaded tiny spoonfuls of sleeping powder into plump, soaked raisins.",
            "characterAvatars": [
              {
                "name": "Danny",
                "emoji": "👦",
                "speech": "We call it the Sleeping Beauty trick, Father!",
                "position": "left"
              },
              {
                "name": "William",
                "emoji": "👨‍🔧",
                "speech": "Danny, it is pure genius! A stroke of brilliance!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hd9-3",
                "x": 45,
                "y": 55,
                "label": "Plump Raisin Bowl",
                "icon": "🍇",
                "soundEffect": "magic",
                "funFact": "They soaked the dried raisins in warm water until they puffed up twice their normal size!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Pompous Landlord and His Shooting Party",
            "paragraphs": [
              "Doctor Spencer put my father's broken ankle in a plaster cast. While my father was resting, Mr. Victor Hazell stopped at our petrol station in his shiny Rolls-Royce. Hazell was an obnoxious bully who treated working people like dirt. The scene was filled with masterstroke, creating an unforgettable moment. The scene was filled with humane, creating an unforgettable moment.",
              "'Fill her up, boy, and be quick about it!' Hazell sneered at me. When I checked the petrol level, he threatened to have our filling station demolished so he could expand his estate. Hazell was preparing for his annual October pheasant shoot, inviting lords, judges, and dukes from London to shoot hundreds of birds for sport.",
              "My father and I boiled with indignation. Hazell raised thousands of pheasants on grain simply to slaughter them for social bragging. 'If only we could poach every single bird in Hazell's Wood the day before his grand party,' my father sighed. 'That would teach him a lesson he would never forget!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Hazell",
                "text": "Look lively, grease-monkey! I could buy and sell this filthy shack in five minutes!",
                "avatarEmoji": "🚙",
                "side": "left"
              },
              {
                "speaker": "Danny",
                "text": "We need a brilliant plan to ruin his pompous shooting party, Father.",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d9-3-1",
              "question": "Why did Danny and his father want to poach Mr. Victor Hazell's pheasants?",
              "options": [
                "To ruin Hazell's pompous shooting party and humble the arrogant bully",
                "To sell the pheasants to a French restaurant in London",
                "Because they had run out of food in the caravan"
              ],
              "correctInsightIndex": 0,
              "insight": "Danny and William wanted to teach the arrogant bully Victor Hazell a well-deserved lesson.",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Danny's Flash of Brilliant Invention",
            "paragraphs": [
              "Traditional poaching methods were clumsy and dangerous. Country folk used horsehair snares or paper cones smeared with birdlime. But gamekeepers easily spotted those traps.",
              "I sat by the caravan stove watching my father chop wood. Suddenly, an idea flashed into my mind like a stroke of lightning! 'Father,' I cried, 'what is a pheasant's absolute favorite food?' 'Raisins,' my father replied instantly. 'They will walk over hot coals for raisins.'",
              "'And what did Doctor Spencer give you for your broken ankle?' I continued, pointing to a small glass bottle on the shelf. 'Sleeping pills! White powder inside gelatin capsules! Father, what if we soak dried raisins in water until they swell up plump, slice them down the belly, spoon in the sleeping powder, and stitch them back up?'"
            ],
            "dialogueBites": [
              {
                "speaker": "Danny",
                "text": "We put sleeping powder inside plump raisins! The pheasants will fall fast asleep!",
                "avatarEmoji": "💡",
                "side": "left"
              },
              {
                "speaker": "William",
                "text": "Great heavens, Danny... It is pure genius! A masterstroke!",
                "avatarEmoji": "👨‍🔧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-danny-9plus-3-p2",
              "question": "Find a word on this page that means: \"Showing compassion, kindness, and inflicting no pain or suffering.\".",
              "options": [
                "Doctor",
                "Humane",
                "Spencer"
              ],
              "correctInsightIndex": 1,
              "insight": "\"Humane\" (hyoo-MAYN) means showing compassion, kindness, and inflicting no pain or suffering.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "Preparing One Hundred and Ninety-Six Raisins",
            "paragraphs": [
              "My father stared at me in awe. He seized me by both shoulders and shouted: 'Danny, you are a marvel! We shall call it the Sleeping Beauty method! It is completely silent, completely peaceful, and completely irresistible!'",
              "We went straight to work. We soaked a large bowl of dried Thompson seedless raisins in warm water until they puffed up fat, sweet, and juicy. Doctor Spencer had given my father fifty sleeping capsules.",
              "With a sharp razor blade, I carefully sliced each raisin along its side. My father emptied a pinch of tasteless white sleeping powder into each opening. We pressed the sticky fruit edges back together. By midnight, we had one hundred and ninety-six poisoned sleeping raisins lined up neatly on the table, ready for the greatest poaching expedition in English history!"
            ],
            "dialogueBites": [
              {
                "speaker": "William",
                "text": "One hundred and ninety-six Sleeping Beauty raisins! The wood won't know what hit it!",
                "avatarEmoji": "🍇",
                "side": "left"
              },
              {
                "speaker": "Danny",
                "text": "Every pheasant in Hazell's Wood will be snoring by nine o'clock!",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d9-3-3",
              "question": "Why was Danny's Sleeping Beauty method superior to traditional poaching traps?",
              "options": [
                "It required buying expensive electrical machinery",
                "It scared the gamekeepers away with loud explosions",
                "It was completely silent, painless, peaceful, and left no injured birds"
              ],
              "correctInsightIndex": 2,
              "insight": "Danny's method was humane and completely silent, relying on wit instead of violence.",
              "rewardKP": 20
            }
          }
        ],
        "paragraphs": [
          "Arrogant landlord Victor Hazell threatened Danny and planned his grand annual pheasant shoot for high-society guests.",
          "William and Danny longed to poach Hazell's pheasants the day before the party to humble the pompous bully.",
          "Danny had a sudden flash of genius: using pheasants' favorite food, sweet raisins, to deliver sleeping powder.",
          "They soaked dried raisins in warm water until plump and fat, then sliced them open with a razor blade.",
          "Using sleeping powder from William's pain capsules, they loaded each raisin with tasteless sleeping dust.",
          "By midnight, they had prepared 196 Sleeping Beauty raisins, creating the most brilliant peaceful poaching plan ever conceived."
        ],
        "vocabList": [
          {
            "word": "Obnoxious",
            "phonics": "ub-NOK-shus",
            "definition": "Extremely unpleasant, arrogant, and offensive.",
            "funExample": "Victor Hazell was an obnoxious and arrogant bully.",
            "emoji": "🚙"
          },
          {
            "word": "Masterstroke",
            "phonics": "MASS-ter-strohk",
            "definition": "A brilliant, highly skillful action or clever idea.",
            "funExample": "Danny's Sleeping Beauty raisin idea was a true masterstroke.",
            "emoji": "💡"
          },
          {
            "word": "Humane",
            "phonics": "hyoo-MAYN",
            "definition": "Showing compassion, kindness, and inflicting no pain or suffering.",
            "funExample": "Danny's sleeping raisin method was completely humane.",
            "emoji": "🕊️"
          }
        ],
        "microChallenge": {
          "id": "mc-d9-3",
          "title": "The Raisin Recipe",
          "type": "word_scramble",
          "prompt": "Unscramble Danny's secret ingredient: Sweet RAISINS",
          "targetWord": "RAISINS",
          "scrambleLetters": [
            "S",
            "I",
            "N",
            "A",
            "I",
            "R",
            "S"
          ],
          "rewardGems": 40
        },
        "quizQuestions": [
          {
            "id": "qd9-3-1",
            "question": "Why did Danny and William want to poach all the pheasants in Hazell's Wood?",
            "options": [
              "To sell the feathers to make fancy ladies' hats",
              "To train the pheasants to guard their petrol station",
              "Because they wanted to open a pheasant petting zoo",
              "To ruin arrogant Victor Hazell's pompous annual shooting party and humble the bully"
            ],
            "correctIndex": 3,
            "explanation": "They wanted to ruin Hazell's grand party to teach the arrogant landlord a lesson.",
            "visualClueEmoji": "🎯",
            "points": 60
          },
          {
            "id": "q-danny-9plus-3-vocab1",
            "question": "Find a word in the passage that means: \"Extremely unpleasant, arrogant, and offensive.\".",
            "options": [
              "Doctor",
              "Obnoxious",
              "Spencer",
              "Father"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Obnoxious\" means extremely unpleasant, arrogant, and offensive.",
            "visualClueEmoji": "🚙",
            "points": 60
          },
          {
            "id": "qd9-3-3",
            "question": "What brilliant method did Danny invent to catch the pheasants peacefully?",
            "options": [
              "Catching them with giant butterfly nets from the car roof",
              "Hypnotizing them by playing a wooden flute",
              "Soaking raisins in water and stuffing them with tasteless sleeping powder",
              "Building wooden birdcages with trap doors"
            ],
            "correctIndex": 2,
            "explanation": "Danny invented the Sleeping Beauty method: filling plump raisins with sleeping powder.",
            "visualClueEmoji": "💡",
            "points": 60
          },
          {
            "id": "q-danny-9plus-3-vocab2",
            "question": "Find a word in the passage that means: \"A brilliant, highly skillful action or clever idea.\".",
            "options": [
              "Masterstroke",
              "Doctor",
              "Spencer",
              "Father"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Masterstroke\" means a brilliant, highly skillful action or clever idea.",
            "visualClueEmoji": "💡",
            "points": 60
          }
        ]
      },
      {
        "id": "danny-9plus-4",
        "dayNumber": 4,
        "title": "The Night of the Sleeping Birds",
        "subtitle": "Creeping into Hazell's Wood, tumbling slumbering pheasants, and the vicar's pram!",
        "estReadingMinutes": 15,
        "totalWordCount": 780,
        "summary": "Danny and William creep into Hazell's Wood and scatter the sleeping raisins. The pheasants feast and tumble asleep from the branches! They load 120 slumbering birds into Mrs. Clipstone's giant pram.",
        "visualScenes": [
          {
            "id": "scene-d9-4",
            "title": "Pheasants Tumbling from the Moonlight Branches",
            "backgroundGradient": "from-slate-950 via-purple-950 to-emerald-950",
            "illustrationType": "pheasant_roost",
            "caption": "Soft plops echoed through the dark woods as drowsy pheasants lost their balance and tumbled gently into the fern leaves.",
            "characterAvatars": [
              {
                "name": "Danny",
                "emoji": "👦",
                "speech": "Look, Father! Another pheasant just plopped into the ferns!",
                "position": "left"
              },
              {
                "name": "William",
                "emoji": "👨‍🔧",
                "speech": "Bag it gently, Danny boy! One hundred and twenty birds!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hd9-4",
                "x": 50,
                "y": 40,
                "label": "Slumbering Pheasants",
                "icon": "🪶",
                "soundEffect": "magic",
                "funFact": "The pheasants were so fast asleep they were completely limp like beanbags!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Into Hazell's Wood Under the Autumn Moon",
            "paragraphs": [
              "On the evening before Victor Hazell's grand shooting party, the autumn moon rose like a silver coin above the hills. My father, with his plaster cast protected by a woollen sock, walked with a sturdy hazel stick. I carried our two large canvas sacks and the jar of 196 Sleeping Beauty raisins.",
              "We slipped silently through the dark hedgerows and entered Hazell's Wood. The forest was hushed and magnificent. Giant beech trees reached toward the stars, their golden leaves whispering in the autumn breeze.",
              "We found a wide clearing where hundreds of pheasants roosted. High in the lower branches, we could see the dark round shapes of birds silhouetted against the moonlight. We began scattering handfuls of the plump, sweet raisins across the forest floor."
            ],
            "dialogueBites": [
              {
                "speaker": "William",
                "text": "Scatter them wide, Danny! The birds will smell the sweet sugar!",
                "avatarEmoji": "👨‍🔧",
                "side": "left"
              },
              {
                "speaker": "Danny",
                "text": "Look at the branches above us, Father! The trees are full of them!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d9-4-1",
              "question": "Where did Danny and his father go to scatter the sleeping raisins?",
              "options": [
                "To the village supermarket",
                "Into Hazell's Wood under the beech trees where hundreds of pheasants roosted",
                "To the top of the church steeple"
              ],
              "correctInsightIndex": 1,
              "insight": "They scattered the raisins beneath the beech trees where the wild pheasants slept.",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Great Plop of Slumbering Birds",
            "paragraphs": [
              "Down fluttered the pheasants! First one cock-bird with long tail feathers glided down, then a dozen, then fifty! They pecked greedily at the plump, juicy raisins, gobbling them down in seconds.",
              "For twenty minutes, everything was quiet as the birds flew back up to their roosting perches. Then, the sleeping powder began to take effect. High in the trees, a gorgeous golden cock-bird began to wobble. His eyelids drooped. He swayed left, swayed right, lost his balance, and—PLOP! He tumbled down through the twigs and landed with a soft thump in the deep bracken!",
              "Then another went—PLOP! And another—PLOP! PLOP! PLOP! It was raining slumbering pheasants! The birds were completely limp, snoring peacefully with their eyes shut tight. My father and I moved quickly, stuffing the drowsy, beautiful birds gently into our sacks. We counted one hundred and twenty magnificent sleeping pheasants!"
            ],
            "dialogueBites": [
              {
                "speaker": "Danny",
                "text": "Plop! Plop! It is raining sleeping pheasants from the sky!",
                "avatarEmoji": "🪶",
                "side": "left"
              },
              {
                "speaker": "William",
                "text": "One hundred and twenty birds! An all-time English poaching record!",
                "avatarEmoji": "🎉",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-danny-9plus-4-p2",
              "question": "Find a word on this page that means: \"A partner who helps carry out a secret, exciting plan.\".",
              "options": [
                "Evening",
                "Before",
                "Accomplice"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Accomplice\" (uh-KOM-pliss) means a partner who helps carry out a secret, exciting plan.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Vicar's Wife and the Enormous Baby Pram",
            "paragraphs": [
              "We had a brilliant secret accomplice to transport our prize. The village vicar's wife, Mrs. Clipstone, was an enthusiastic supporter of local poachers because Victor Hazell was so rude to the church congregation.",
              "Early the next morning, Mrs. Clipstone walked briskly down the road pushing an enormous, old-fashioned wicker baby carriage. Inside, tucked beneath blankets and a pink baby bonnet, lay all one hundred and twenty snoring pheasants!",
              "Mrs. Clipstone delivered the giant pram right to our filling station workshop. 'Good morning, William!' she beamed. 'The baby is sleeping very soundly today!' We were thrilled. Hazell's grand shooting party was scheduled to start in two hours, and his woods were completely empty!"
            ],
            "dialogueBites": [
              {
                "speaker": "Mrs. Clipstone",
                "text": "My baby pram is carrying the most peaceful bundle in England!",
                "avatarEmoji": "👩",
                "side": "left"
              },
              {
                "speaker": "Danny",
                "text": "Thank you, Mrs. Clipstone! The whole wood was empty of birds!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d9-4-3",
              "question": "How were the one hundred and twenty sleeping pheasants transported to the filling station?",
              "options": [
                "Mrs. Clipstone smuggled them hidden under blankets inside an enormous baby carriage",
                "They were carried on the back of a farm tractor",
                "They walked in a straight line down the road"
              ],
              "correctInsightIndex": 0,
              "insight": "The vicar's wife smuggled all 120 sleeping birds inside her oversized baby pram.",
              "rewardKP": 20
            }
          }
        ],
        "paragraphs": [
          "Danny and William crept into Hazell's Wood under the autumn moonlight carrying sacks and the sleeping raisins.",
          "They scattered the sweet raisins on the forest floor beneath the beech trees where hundreds of pheasants roosted.",
          "The pheasants glided down, gobbled the raisins greedily, and flew back up into the branches.",
          "Soon the sleeping powder took effect: pheasants wobbled and plopped softly into the bracken, snoring soundly.",
          "Danny and William gathered 120 slumbering pheasants into sacks, setting an all-time record.",
          "Mrs. Clipstone smuggled the 120 sleeping birds under blankets inside an enormous wicker baby pram straight to their workshop."
        ],
        "vocabList": [
          {
            "word": "Roost",
            "phonics": "ROOST",
            "definition": "A branch or perch where birds settle to sleep for the night.",
            "funExample": "The pheasants settled on their roosts high in the beech trees.",
            "emoji": "🌳"
          },
          {
            "word": "Bracken",
            "phonics": "BRAK-un",
            "definition": "Tall, coarse, leafy ferns growing thickly on forest floors.",
            "funExample": "The sleeping birds landed softly in the leafy bracken.",
            "emoji": "🌿"
          },
          {
            "word": "Accomplice",
            "phonics": "uh-KOM-pliss",
            "definition": "A partner who helps carry out a secret, exciting plan.",
            "funExample": "Mrs. Clipstone was their wonderful secret accomplice.",
            "emoji": "🤝"
          }
        ],
        "microChallenge": {
          "id": "mc-d9-4",
          "title": "The Slumbering Harvest",
          "type": "word_scramble",
          "prompt": "Unscramble the count: Danny caught ONE HUNDRED AND TWENTY birds: RECORD",
          "targetWord": "RECORD",
          "scrambleLetters": [
            "D",
            "R",
            "E",
            "C",
            "R",
            "O"
          ],
          "rewardGems": 45
        },
        "quizQuestions": [
          {
            "id": "qd9-4-1",
            "question": "Where did Danny and his father scatter the sweet sleeping raisins?",
            "options": [
              "Across the clearing in Hazell's Wood beneath the giant beech trees where pheasants roosted",
              "Along the village high street in front of the post office",
              "Inside the vicar's flower garden",
              "On top of the filling station petrol pumps"
            ],
            "correctIndex": 0,
            "explanation": "They scattered the raisins in the forest clearing beneath the roosting trees.",
            "visualClueEmoji": "🌳",
            "points": 60
          },
          {
            "id": "q-danny-9plus-4-vocab1",
            "question": "Find a word in the passage that means: \"A branch or perch where birds settle to sleep for the night.\".",
            "options": [
              "Evening",
              "Before",
              "Victor",
              "Roost"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Roost\" means a branch or perch where birds settle to sleep for the night.",
            "visualClueEmoji": "🌳",
            "points": 60
          },
          {
            "id": "qd9-4-3",
            "question": "How many sleeping pheasants did Danny and William successfully collect in their sacks?",
            "options": [
              "Five pheasants",
              "One hundred and twenty sleeping pheasants",
              "Twenty pheasants",
              "Five hundred pheasants"
            ],
            "correctIndex": 1,
            "explanation": "They collected 120 sleeping birds, setting an all-time poaching record!",
            "visualClueEmoji": "🎉",
            "points": 60
          },
          {
            "id": "q-danny-9plus-4-vocab2",
            "question": "Find a word in the passage that means: \"Tall, coarse, leafy ferns growing thickly on forest floors.\".",
            "options": [
              "Evening",
              "Before",
              "Bracken",
              "Victor"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Bracken\" means tall, coarse, leafy ferns growing thickly on forest floors.",
            "visualClueEmoji": "🌿",
            "points": 60
          }
        ]
      },
      {
        "id": "danny-9plus-5",
        "dayNumber": 5,
        "title": "Champion of the World!",
        "subtitle": "The great awakening, Victor Hazell's fury, and celebrating with roast pheasant!",
        "estReadingMinutes": 15,
        "totalWordCount": 790,
        "summary": "The sleeping powder wears off and 120 pheasants wake up all over the filling station! Victor Hazell arrives in a fury, but cannot claim them. Danny is crowned Champion of the World!",
        "visualScenes": [
          {
            "id": "scene-d9-5",
            "title": "Pheasants Perched on the Petrol Pumps",
            "backgroundGradient": "from-amber-600 via-rose-700 to-indigo-950",
            "illustrationType": "champions_flight",
            "caption": "Scores of waking pheasants perched on the pumps, roof, and lampposts as Victor Hazell shouted in helpless fury!",
            "characterAvatars": [
              {
                "name": "Danny",
                "emoji": "👦",
                "speech": "They are wild birds in the open air, Mr. Hazell!",
                "position": "left"
              },
              {
                "name": "Victor Hazell",
                "emoji": "😡",
                "speech": "My shoot is ruined! Arrest them, Sergeant!",
                "position": "center"
              },
              {
                "name": "William",
                "emoji": "👨‍🔧",
                "speech": "You are the champion of the world, Danny!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hd9-5",
                "x": 50,
                "y": 35,
                "label": "Awakened Pheasant",
                "icon": "🪶",
                "soundEffect": "magic",
                "funFact": "Once airborne, wild game birds legally belong to nobody under English law!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Great Awakening on the Petrol Pumps",
            "paragraphs": [
              "Just as we wheeled the giant baby pram outside into the morning sunshine, the sleeping pill effect began to wear off! The pheasants started twitching their claws. Then their bright amber eyes snapped open, blinking with confusion.",
              "With a flurry of wings, one cock-bird leaped into the air and landed square on top of our red petrol pump! Another flew onto the curved roof of our yellow caravan. Within five minutes, the entire forecourt of our filling station was covered in waking pheasants: perched on the workshop guttering, sitting on the telephone wires, and strutting proudly across the gravel!",
              "Just then, the deep rumble of a luxury engine announced the arrival of Mr. Victor Hazell in his gleaming silver Rolls-Royce, followed by Police Sergeant Enoch Samways on his bicycle."
            ],
            "dialogueBites": [
              {
                "speaker": "Danny",
                "text": "Look at them waking up, Father! The petrol station is covered in pheasants!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "William",
                "text": "And here comes Mr. Victor Hazell right on schedule!",
                "avatarEmoji": "👨‍🔧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d9-5-1",
              "question": "What happened when the sleeping powder wore off the pheasants at the filling station?",
              "options": [
                "They fell back asleep for three more days",
                "They ran into the woods immediately without waking",
                "They woke up and perched all over the petrol pumps, caravan roof, and telephone wires"
              ],
              "correctInsightIndex": 2,
              "insight": "The pheasants woke up and created a magnificent spectacle all across the filling station forecourt.",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Victor Hazell's Helpless Fury",
            "paragraphs": [
              "Victor Hazell leaped out of his Rolls-Royce, his fat face purple with incandescent rage. 'Thieves! Criminals!' he bellowed, brandishing his silver-topped walking cane. 'Those are my pheasants! You stole every bird from my wood! Sergeant Samways, arrest these villains instantly!'",
              "Sergeant Samways, who was a genial local man and secretly detested Hazell, slowly adjusted his police helmet. 'Now then, Mr. Hazell,' said the Sergeant calmly. 'Under English law, wild birds belong to nobody while they are in the open air. Do these pheasants have your initials stamped on their beaks?'",
              "'No!' screamed Hazell. 'Then shoo them home to your wood, sir,' said Sergeant Samways with a suppressed smile. Hazell flapped his arms frantically, shouting at the birds. The startled pheasants took to the skies, flying away in all directions across the county. Hazell's grand party was completely ruined! He stomped back into his Rolls-Royce and sped away in total humiliation."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Hazell",
                "text": "My shooting party is destroyed! I am ruined!",
                "avatarEmoji": "😡",
                "side": "left"
              },
              {
                "speaker": "Sergeant Samways",
                "text": "Good day to you, Mr. Hazell. Watch your driving speed on the corner.",
                "avatarEmoji": "👮",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-danny-9plus-5-p2",
              "question": "Find a word on this page that means: \"Extremely angry, glowing with intense, fiery emotion.\".",
              "options": [
                "Incandescent",
                "Wheeled",
                "Giant"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Incandescent\" (in-kan-DES-ent) means extremely angry, glowing with intense, fiery emotion.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "Roast Pheasant and the Champion of the World",
            "paragraphs": [
              "Six drowsy pheasants had taken an extra-large dose of sleeping powder and remained asleep inside the workshop. Doctor Spencer arrived with a wide grin, along with Mrs. Clipstone. We shared the remaining birds fairly among our friends.",
              "That evening, our little gypsy caravan was filled with the mouthwatering aroma of roast pheasant, baked potatoes, and hot apple pie. William and I sat at the wooden table by the glowing stove.",
              "My father placed his warm hands over mine. His eyes crinkled and sparkled with deep, tender love. 'Danny,' he said softly, 'you saved my life from that dark pit, and you invented the greatest poaching method ever known. You are, without a shadow of doubt, the Champion of the World.' I looked into my father's eyes, knowing I was the luckiest boy alive."
            ],
            "dialogueBites": [
              {
                "speaker": "William",
                "text": "You are the true Champion of the World, Danny boy!",
                "avatarEmoji": "🏆",
                "side": "left"
              },
              {
                "speaker": "Danny",
                "text": "And you are the champion father of the world!",
                "avatarEmoji": "❤️",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-d9-5-3",
              "question": "How did the story conclude for Danny and his father?",
              "options": [
                "They sold their filling station and moved to France",
                "They celebrated with friends over a feast of roast pheasant, and William declared Danny the Champion of the World",
                "Danny decided to never speak to his father again"
              ],
              "correctInsightIndex": 1,
              "insight": "Danny and William celebrated their glorious triumph, bound by deep love as true champions.",
              "rewardKP": 25
            }
          }
        ],
        "paragraphs": [
          "The sleeping powder wore off and 120 pheasants woke up, perching all over the petrol pumps, caravan roof, and telephone wires.",
          "Arrogant landlord Victor Hazell arrived in his Rolls-Royce, screaming with rage and demanding the police arrest them.",
          "Sergeant Samways calmly reminded Hazell that wild birds in open air belong to no man, refusing to make an arrest.",
          "Hazell tried to shoo the birds, but they flew away across the county, completely ruining his grand shooting party.",
          "Hazell drove away in utter humiliation, having been completely defeated by Danny's brilliant wit.",
          "Danny and William roasted the remaining pheasants with baked potatoes and apple pie, and William declared Danny the Champion of the World."
        ],
        "vocabList": [
          {
            "word": "Incandescent",
            "phonics": "in-kan-DES-ent",
            "definition": "Extremely angry, glowing with intense, fiery emotion.",
            "funExample": "Victor Hazell was incandescent with rage.",
            "emoji": "😡"
          },
          {
            "word": "Genial",
            "phonics": "JEEN-yul",
            "definition": "Friendly, cheerful, pleasant, and warm-hearted.",
            "funExample": "Sergeant Samways was a genial and fair policeman.",
            "emoji": "👮"
          }
        ],
        "microChallenge": {
          "id": "mc-d9-5",
          "title": "The Champion's Crown",
          "type": "word_scramble",
          "prompt": "Unscramble Danny's title: Danny is the CHAMPION",
          "targetWord": "CHAMPION",
          "scrambleLetters": [
            "P",
            "A",
            "C",
            "M",
            "H",
            "I",
            "N",
            "O"
          ],
          "rewardGems": 50
        },
        "quizQuestions": [
          {
            "id": "qd9-5-1",
            "question": "What happened when the sleeping powder wore off the pheasants at the filling station?",
            "options": [
              "They stayed completely motionless for two weeks",
              "They marched in a straight line back to Mr. Hazell's estate",
              "They woke up and fluttered onto the petrol pumps, caravan roof, and telephone wires",
              "They fell into the repair pit in the workshop"
            ],
            "correctIndex": 2,
            "explanation": "The waking birds fluttered up onto the pumps, caravan, and wires across the filling station.",
            "visualClueEmoji": "🪶",
            "points": 60
          },
          {
            "id": "q-danny-9plus-5-vocab1",
            "question": "Find a word in the passage that means: \"Extremely angry, glowing with intense, fiery emotion.\".",
            "options": [
              "Wheeled",
              "Giant",
              "Baby",
              "Incandescent"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Incandescent\" means extremely angry, glowing with intense, fiery emotion.",
            "visualClueEmoji": "😡",
            "points": 60
          },
          {
            "id": "qd9-5-3",
            "question": "What happened when Victor Hazell tried to shoo the pheasants back toward his estate?",
            "options": [
              "The birds took flight and scattered across the county in all directions, ruining his shooting party",
              "The birds followed him like trained puppies",
              "The birds flew directly inside his Rolls-Royce",
              "The birds attacked the police bicycle"
            ],
            "correctIndex": 0,
            "explanation": "The startled birds flew away in every direction, completely destroying Hazell's shooting party.",
            "visualClueEmoji": "💨",
            "points": 60
          },
          {
            "id": "q-danny-9plus-5-vocab2",
            "question": "Find a word in the passage that means: \"Friendly, cheerful, pleasant, and warm-hearted.\".",
            "options": [
              "Wheeled",
              "Genial",
              "Giant",
              "Baby"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Genial\" means friendly, cheerful, pleasant, and warm-hearted.",
            "visualClueEmoji": "👮",
            "points": 60
          }
        ]
      }
    ]
  }
};
