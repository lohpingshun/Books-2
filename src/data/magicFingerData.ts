import { Book } from "../types";

export const MAGIC_FINGER_BOOK: Book = {
  "id": "magic_finger",
  "title": "The Magic Finger",
  "author": "Roald Dahl",
  "badgeTitle": "Master of the Spark & Friend of the Wild",
  "coverColor": "from-fuchsia-700 via-purple-900 to-indigo-950",
  "accentColor": "#c026d3",
  "borderColor": "border-fuchsia-500",
  "themeIcon": "⚡",
  "descriptionByAge": {
    "5-6": "Meet an eight-year-old girl with an electric finger! In 5 exciting 15-minute daily chapters: zap the grumpy teacher with cat whiskers, stop the duck-hunting Greggs, watch them flap feathery wings, and teach everyone how to be kind!",
    "7-8": "Roald Dahl's electrifying tale of empathy and justice! When the narrator sees red at animal hunters, her Magic Finger fires. The Gregg family wakes up with bird wings and must nest in a tree while giant ducks take over their home!",
    "9+": "Roald Dahl's thrilling fable on empathy, wild nature, and unexpected magic. Follow the spirited narrator whose fiery Magic Finger turns duck hunters into miniature feathered birds nesting in treetops while giant ducks claim their farm."
  },
  "chaptersByAge": {
    "5-6": [
      {
        "id": "magic_finger-56-1",
        "dayNumber": 1,
        "title": "The Mysterious Tingle",
        "subtitle": "A strange spark and whiskers on the teacher!",
        "estReadingMinutes": 15,
        "totalWordCount": 480,
        "summary": "An eight-year-old girl discovers she has a mysterious Magic Finger. Whenever she becomes angry and sees red, an electric spark leaps from her finger tip with astonishing magical surprises.",
        "visualScenes": [
          {
            "id": "scene-magic_finger-56-1",
            "title": "The Mysterious Tingle",
            "backgroundGradient": "from-purple-900 via-fuchsia-900 to-indigo-950",
            "illustrationType": "mrs_winter_cat",
            "caption": "Sparks flash from the narrator's fingertip! Mrs. Winter gasps as soft cat whiskers and a bushy tail begin to sprout!",
            "characterAvatars": [
              {
                "name": "Narrator",
                "emoji": "👧",
                "speech": "My forefinger began to tingle with electric sparks!",
                "position": "left"
              },
              {
                "name": "Mrs. Winter",
                "emoji": "👩‍🏫",
                "speech": "Goodness gracious! Why is my nose twitching like a cat?",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "mf1",
                "x": 35,
                "y": 55,
                "label": "Electric Spark",
                "icon": "⚡",
                "soundEffect": "magic",
                "funFact": "The Magic Finger makes a buzzing sound like a tiny trapped bee!",
                "action": "sparkle"
              },
              {
                "id": "mf2",
                "x": 75,
                "y": 40,
                "label": "Blackboard",
                "icon": "📝",
                "soundEffect": "bounce",
                "funFact": "Mrs. Winter was trying to teach the class how to spell 'cat'!",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Tingling Forefinger",
            "paragraphs": [
              "I have a secret power that nobody can explain. It happens whenever I get terribly angry and see red all around me.",
              "First, my whole body gets scorching hot like a little oven. Then, a peculiar tingle starts at the tip of my right forefinger.",
              "A bright flash of blue electricity leaps out, making a loud buzzing sound like an angry bumblebee!"
            ],
            "dialogueBites": [
              {
                "speaker": "Narrator",
                "text": "Whenever I get furious, my finger starts to tingle and glow!",
                "avatarEmoji": "👧",
                "side": "left"
              },
              {
                "speaker": "Grandma",
                "text": "Be careful where you point that glowing finger, my dear!",
                "avatarEmoji": "👵",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-56-1-p1",
              "question": "What happens right before the Magic Finger shoots electricity?",
              "options": [
                "She begins singing a sleepy lullaby in the garden",
                "The girl's body gets scorching hot and her forefinger starts tingling",
                "She eats three whole bowls of cabbage soup"
              ],
              "correctInsightIndex": 1,
              "insight": "Her emotional spark triggers the magical surge of energy!",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Mrs. Winter's Spelling Lesson",
            "paragraphs": [
              "One morning at school, my strict teacher Mrs. Winter yelled at me in front of the whole classroom because I could not spell the word 'cat'.",
              "She called me a stupid little girl and made me stand in the corner. I grew so angry that red sparks flew across my eyes.",
              "Before I could stop myself, my finger pointed straight at Mrs. Winter. An astonishing flash lit up the blackboard!"
            ],
            "dialogueBites": [
              {
                "speaker": "Mrs. Winter",
                "text": "Stand in the corner this instant and think about your spelling!",
                "avatarEmoji": "👩‍🏫",
                "side": "right"
              },
              {
                "speaker": "Narrator",
                "text": "I did not mean to zap her, but the sparks were unstoppable!",
                "avatarEmoji": "👧",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-56-1-p2",
              "question": "Find a word on this page that means: \"Strange, unusual, or curious in a surprising way.\".",
              "options": [
                "Secret",
                "Power",
                "Peculiar"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Peculiar\" (peh-KYOO-lee-er) means strange, unusual, or curious in a surprising way.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "Whiskers and a Bushy Tail",
            "paragraphs": [
              "The moment the blue spark touched Mrs. Winter, long black whiskers sprouted right out of her cheeks!",
              "Then, a large furry tail popped out from under her skirt, swishing back and forth like a real ginger tabby cat.",
              "Mrs. Winter meowed in horror and dashed out of the schoolhouse. I promised myself I would never use the Magic Finger again... until the Gregg family went hunting."
            ],
            "dialogueBites": [
              {
                "speaker": "Classmates",
                "text": "Look at Mrs. Winter! She has real cat whiskers and a bushy tail!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Mrs. Winter",
                "text": "Meow! Goodness me! What has happened to my nose?",
                "avatarEmoji": "🐱",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-56-1-p3",
              "question": "What grew on Mrs. Winter after she got zapped?",
              "options": [
                "Long whiskers on her cheeks and a bushy furry tail",
                "Golden eagle wings and silver feathers",
                "A pair of shiny green frog legs"
              ],
              "correctInsightIndex": 0,
              "insight": "The Magic Finger gives naughty bullies a taste of their own medicine!",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Tingle",
            "phonics": "TING-gul",
            "definition": "A prickling, stinging feeling like tiny electric sparks on your skin.",
            "funExample": "Her forefinger began to tingle with electric energy.",
            "emoji": "⚡"
          },
          {
            "word": "Astonishing",
            "phonics": "uh-STON-ish-ing",
            "definition": "Extremely surprising, amazing, and wondrous to behold.",
            "funExample": "It was an astonishing sight when Mrs. Winter sprouted cat whiskers!",
            "emoji": "😲"
          },
          {
            "word": "Peculiar",
            "phonics": "peh-KYOO-lee-er",
            "definition": "Strange, unusual, or curious in a surprising way.",
            "funExample": "The classroom grew quiet at this peculiar transformation.",
            "emoji": "🔍"
          }
        ],
        "microChallenge": {
          "id": "mc-magic_finger-56-1",
          "title": "Electric Spark Scramble",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from today's Magic Finger chapter!",
          "targetWord": "SPARK",
          "scrambleLetters": [
            "K",
            "R",
            "A",
            "P",
            "S"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-magic_finger-56-1-comp1",
            "question": "Why did the narrator accidentally zap Mrs. Winter with the Magic Finger?",
            "options": [
              "Because Mrs. Winter asked for a glass of apple juice",
              "Because Mrs. Winter cruelly yelled at her and made her stand in the corner",
              "Because the class was playing a game of tag on the lawn",
              "Because Mrs. Winter wanted to learn how to fly"
            ],
            "correctIndex": 1,
            "explanation": "Mrs. Winter humiliated the narrator, causing her to see red and trigger the Magic Finger.",
            "visualClueEmoji": "👩‍🏫",
            "points": 60
          },
          {
            "id": "q-magic_finger-56-1-vocab1",
            "question": "Find a word in the passage that means: \"A prickling, stinging feeling like tiny electric sparks on your skin.\".",
            "options": [
              "Secret",
              "Power",
              "Tingle",
              "Nobody"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Tingle\" means a prickling, stinging feeling like tiny electric sparks on your skin.",
            "visualClueEmoji": "⚡",
            "points": 60
          },
          {
            "id": "q-magic_finger-56-1-comp2",
            "question": "What physical clue tells the girl the Magic Finger is about to fire?",
            "options": [
              "Her body feels scorching hot and her forefinger begins to tingle",
              "Her ears turn bright purple and begin to flap",
              "Her toes freeze into solid blocks of ice",
              "She starts speaking backwards like a wizard"
            ],
            "correctIndex": 0,
            "explanation": "The story explains that heat and a tingling forefinger always signal the electric magic spark.",
            "visualClueEmoji": "⚡",
            "points": 60
          },
          {
            "id": "q-magic_finger-56-1-vocab2",
            "question": "Find a word in the passage that means: \"Extremely surprising, amazing, and wondrous to behold.\".",
            "options": [
              "Secret",
              "Power",
              "Nobody",
              "Astonishing"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Astonishing\" means extremely surprising, amazing, and wondrous to behold.",
            "visualClueEmoji": "😲",
            "points": 60
          }
        ]
      },
      {
        "id": "magic_finger-56-2",
        "dayNumber": 2,
        "title": "The Duck Hunt & Seeing Red",
        "subtitle": "Standing up for sixteen innocent wild ducks!",
        "estReadingMinutes": 15,
        "totalWordCount": 480,
        "summary": "The neighboring Gregg family shoots sixteen beautiful wild ducks for sport. When they laugh at the narrator's pleas for mercy, the girl's Magic Finger unleashes a massive electric beam.",
        "visualScenes": [
          {
            "id": "scene-magic_finger-56-2",
            "title": "The Duck Hunt & Seeing Red",
            "backgroundGradient": "from-purple-900 via-fuchsia-900 to-indigo-950",
            "illustrationType": "magic_finger_spark",
            "caption": "A dazzling crimson beam strikes the Gregg farm as the girl unleashes the power of the Magic Finger!",
            "characterAvatars": [
              {
                "name": "Mr. Gregg",
                "emoji": "👨‍🌾",
                "speech": "Hunting is great sport! Look at our sixteen ducks!",
                "position": "right"
              },
              {
                "name": "Narrator",
                "emoji": "👧",
                "speech": "Stop shooting the ducks! They have done you no harm!",
                "position": "left"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "mf3",
                "x": 45,
                "y": 60,
                "label": "Magic Beam",
                "icon": "💥",
                "soundEffect": "magic",
                "funFact": "The flash illuminated the entire forest in glowing violet light!",
                "action": "sparkle"
              },
              {
                "id": "mf4",
                "x": 80,
                "y": 35,
                "label": "Wild Ducks",
                "icon": "🦆",
                "soundEffect": "bounce",
                "funFact": "The flock flew high above the pond, seeking safety from the guns.",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Gregg Family's Guns",
            "paragraphs": [
              "The Gregg family lived in the farm next to ours: Mr. Gregg, Mrs. Gregg, and their two boys, Philip and William.",
              "They were passionate about hunting. Every Saturday morning, they grabbed their heavy guns and marched into the woods to shoot ducks and deer.",
              "I hated seeing gentle wild creatures getting hurt. I begged Philip and William to play with me instead, but they only laughed."
            ],
            "dialogueBites": [
              {
                "speaker": "Philip",
                "text": "Go away, girl! Shooting ducks is the greatest fun in the world!",
                "avatarEmoji": "👦",
                "side": "right"
              },
              {
                "speaker": "Narrator",
                "text": "Those ducks love their families just like you love yours!",
                "avatarEmoji": "👧",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-56-2-p1",
              "question": "What did the Gregg family do every Saturday morning?",
              "options": [
                "They planted sweet apple trees in their garden",
                "They baked warm cinnamon bread for the neighbors",
                "They marched into the woods with guns to shoot ducks and deer"
              ],
              "correctInsightIndex": 2,
              "insight": "Their obsession with hunting hurt innocent wildlife in the forest.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Sixteen Fallen Ducks",
            "paragraphs": [
              "One crisp Saturday afternoon, I saw the Greggs returning home from the lake carrying sixteen dead wild ducks over their shoulders.",
              "My heart felt heavy and sad. I ran across the meadow and shouted at Mr. Gregg, pleading with him to stop this cruel sport.",
              "Instead of listening, Mr. Gregg told me to mind my own business, and both boys made mocking faces at me."
            ],
            "dialogueBites": [
              {
                "speaker": "Narrator",
                "text": "Please stop shooting the innocent ducks! It is unfair and cruel!",
                "avatarEmoji": "👧",
                "side": "left"
              },
              {
                "speaker": "Mr. Gregg",
                "text": "Mind your own business, little girl, and go play with your dolls!",
                "avatarEmoji": "👨‍🌾",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-56-2-p2",
              "question": "Find a word on this page that means: \"Laughing at someone in a mean, teasing, and unkind way.\".",
              "options": [
                "Mocking",
                "Gregg",
                "Family"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Mocking\" (MOK-ing) means laughing at someone in a mean, teasing, and unkind way.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Crimson Flash",
            "paragraphs": [
              "Their mocking laughter made everything inside me turn white-hot. I saw a furious crimson light cover the trees.",
              "Before I could count to three, my forefinger snapped forward. A dazzling beam of electric magic flashed straight at the Gregg family!",
              "The electric spark swept over Mr. Gregg, Mrs. Gregg, Philip, and William. Then silence fell over the farm, and a strange spell began to work."
            ],
            "dialogueBites": [
              {
                "speaker": "Narrator",
                "text": "I point my finger straight at you! See how you like being hunted!",
                "avatarEmoji": "👧",
                "side": "left"
              },
              {
                "speaker": "William",
                "text": "Look at her finger glowing! What is that buzzing spark?",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-56-2-p3",
              "question": "Why did the narrator point her Magic Finger at the Greggs?",
              "options": [
                "Because they forgot to invite her to breakfast",
                "Because they laughed and mocked her after shooting sixteen wild ducks",
                "Because they painted their tractor bright green"
              ],
              "correctInsightIndex": 1,
              "insight": "Her anger was born from defending innocent living creatures.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Cruel",
            "phonics": "KROO-ul",
            "definition": "Causing pain or suffering to living creatures without care.",
            "funExample": "She believed shooting gentle animals for fun was cruel.",
            "emoji": "💔"
          },
          {
            "word": "Furious",
            "phonics": "FYOOR-ee-us",
            "definition": "Extremely angry; filled with unstoppable, boiling rage.",
            "funExample": "The girl grew furious when the hunters laughed at her.",
            "emoji": "😡"
          },
          {
            "word": "Mocking",
            "phonics": "MOK-ing",
            "definition": "Laughing at someone in a mean, teasing, and unkind way.",
            "funExample": "Philip gave a mocking chuckle as he marched past.",
            "emoji": "😏"
          }
        ],
        "microChallenge": {
          "id": "mc-magic_finger-56-2",
          "title": "Electric Spark Scramble",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from today's Magic Finger chapter!",
          "targetWord": "FEATHER",
          "scrambleLetters": [
            "R",
            "E",
            "H",
            "T",
            "A",
            "E",
            "F"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-magic_finger-56-2-comp1",
            "question": "How many wild ducks did the Gregg family shoot on that Saturday afternoon?",
            "options": [
              "Only two baby ducks",
              "Fifty golden geese",
              "Sixteen wild ducks",
              "None, because it was raining"
            ],
            "correctIndex": 2,
            "explanation": "The text specifically mentions that the Greggs shot sixteen dead wild ducks.",
            "visualClueEmoji": "🦆",
            "points": 60
          },
          {
            "id": "q-magic_finger-56-2-vocab1",
            "question": "Find a word in the passage that means: \"Causing pain or suffering to living creatures without care.\".",
            "options": [
              "Cruel",
              "Gregg",
              "Family",
              "Lived"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Cruel\" means causing pain or suffering to living creatures without care.",
            "visualClueEmoji": "💔",
            "points": 60
          },
          {
            "id": "q-magic_finger-56-2-comp2",
            "question": "How did Mr. Gregg and his sons react when the girl begged them to stop hunting?",
            "options": [
              "They immediately apologized and put their guns away",
              "They invited her into their kitchen for tea and cake",
              "They promised never to enter the woods again",
              "They mocked her, laughed, and told her to mind her own business"
            ],
            "correctIndex": 3,
            "explanation": "The Gregg family made mocking faces and dismissed her pleas.",
            "visualClueEmoji": "😤",
            "points": 60
          },
          {
            "id": "q-magic_finger-56-2-vocab2",
            "question": "Find a word in the passage that means: \"Extremely angry; filled with unstoppable, boiling rage.\".",
            "options": [
              "Gregg",
              "Furious",
              "Family",
              "Lived"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Furious\" means extremely angry; filled with unstoppable, boiling rage.",
            "visualClueEmoji": "😡",
            "points": 60
          }
        ]
      },
      {
        "id": "magic_finger-56-3",
        "dayNumber": 3,
        "title": "Wings, Beaks & Giant Ducks",
        "subtitle": "Waking up the size of birds with giant ducks in the kitchen!",
        "estReadingMinutes": 15,
        "totalWordCount": 480,
        "summary": "The next morning, the Gregg family wakes up to an astonishing shock: their arms have turned into feathery wings and their bodies have shrunk to tiny bird size, while giant wild ducks occupy their house!",
        "visualScenes": [
          {
            "id": "scene-magic_finger-56-3",
            "title": "Wings, Beaks & Giant Ducks",
            "backgroundGradient": "from-purple-900 via-fuchsia-900 to-indigo-950",
            "illustrationType": "duck_family_wings",
            "caption": "The tiny Gregg family flaps their feathery wings in astonishment while four giant ducks march into their home!",
            "characterAvatars": [
              {
                "name": "Mr. Gregg",
                "emoji": "🪶",
                "speech": "Where are my arms? I have grown duck wings!",
                "position": "left"
              },
              {
                "name": "Giant Duck",
                "emoji": "🦆",
                "speech": "Quack! This looks like a splendid farmhouse for us!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "mf5",
                "x": 30,
                "y": 50,
                "label": "Feathery Wings",
                "icon": "🪶",
                "soundEffect": "bounce",
                "funFact": "Philip and William learned to flap their wings and hover above the rug!",
                "action": "bounce"
              },
              {
                "id": "mf6",
                "x": 70,
                "y": 45,
                "label": "Giant Duck Footprint",
                "icon": "🐾",
                "soundEffect": "magic",
                "funFact": "The ducks were now eight feet tall with human arms and hands!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Feathered Morning Surprise",
            "paragraphs": [
              "The next morning, Mr. Gregg woke up and reached out to brush his teeth. But when he looked at his arm, it wasn't an arm at all!",
              "In its place was a long, silky wing covered in warm brown feathers! He jumped out of bed and discovered he had shrunk to miniature size.",
              "Mrs. Gregg, Philip, and William were also tiny feathered creatures, no taller than teacups, staring in utter astonishment."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Gregg",
                "text": "Look at my body! I have brown wings instead of arms!",
                "avatarEmoji": "🪶",
                "side": "left"
              },
              {
                "speaker": "Mrs. Gregg",
                "text": "Oh dear me! How are we going to cook breakfast with wings?",
                "avatarEmoji": "🪽",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-56-3-p1",
              "question": "What did Mr. Gregg find when he woke up in the morning?",
              "options": [
                "He had shrunk to miniature size and grown feathery wings instead of arms",
                "He had turned into a tall green wooden tree",
                "He had turned into a shiny silver motorcar"
              ],
              "correctInsightIndex": 0,
              "insight": "The Magic Finger swapped their human bodies for bird-like features!",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Learning to Fly",
            "paragraphs": [
              "Philip and William hopped onto the windowsill. They began flapping their wings up and down with great speed.",
              "Whoosh! Up into the air they soared, zooming around the bedroom ceiling like lively bumblebees.",
              "Mr. and Mrs. Gregg spread their feathered wings and joined their sons, gliding smoothly out the open window into the bright sunshine."
            ],
            "dialogueBites": [
              {
                "speaker": "William",
                "text": "Look at me, Dad! Flapping my wings is so easy and fun!",
                "avatarEmoji": "🪽",
                "side": "left"
              },
              {
                "speaker": "Mr. Gregg",
                "text": "Keep flapping, boys! Let's fly down to the garden to see our house!",
                "avatarEmoji": "🪶",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-56-3-p2",
              "question": "Find a word on this page that means: \"Moving wings quickly up and down to rise into the air.\".",
              "options": [
                "Next",
                "Flapping",
                "Morning"
              ],
              "correctInsightIndex": 1,
              "insight": "\"Flapping\" (FLAP-ing) means moving wings quickly up and down to rise into the air.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Giant Ducks Take Over",
            "paragraphs": [
              "When the feathered Gregg family flew down toward their front door, they saw an astonishing sight.",
              "Four colossal wild ducks, standing tall on their hind legs and sporting human arms, were marching into the Gregg farmhouse!",
              "One duck held Mr. Gregg's favorite hunting gun, while the mother duck prepared to boil tea on the kitchen stove. The tables had turned!"
            ],
            "dialogueBites": [
              {
                "speaker": "Giant Duck",
                "text": "Quack! What a lovely house with soft beds and a warm stove!",
                "avatarEmoji": "🦆",
                "side": "right"
              },
              {
                "speaker": "Mr. Gregg",
                "text": "Hey! That is my house! You cannot sleep in our beds!",
                "avatarEmoji": "🪶",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-56-3-p3",
              "question": "Who took over the Gregg farmhouse while the family was flying?",
              "options": [
                "A friendly family of squirrels carrying acorns",
                "Three sleepy brown bears wearing pajamas",
                "Four colossal wild ducks with human arms and hands"
              ],
              "correctInsightIndex": 2,
              "insight": "The hunters were locked out of their own home by the animals they hunted.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Astonishment",
            "phonics": "uh-STON-ish-ment",
            "definition": "A feeling of overwhelming shock, great wonder, and disbelief.",
            "funExample": "Mr. Gregg stared at his new feathery wings in total astonishment.",
            "emoji": "😲"
          },
          {
            "word": "Miniature",
            "phonics": "MIN-ee-uh-chur",
            "definition": "Very small; shrunken down to a tiny, compact size.",
            "funExample": "The Greggs were now miniature humans no bigger than robins.",
            "emoji": "🔬"
          },
          {
            "word": "Flapping",
            "phonics": "FLAP-ing",
            "definition": "Moving wings quickly up and down to rise into the air.",
            "funExample": "The boys practiced flapping their wings across the bedroom.",
            "emoji": "🪽"
          }
        ],
        "microChallenge": {
          "id": "mc-magic_finger-56-3",
          "title": "Electric Spark Scramble",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from today's Magic Finger chapter!",
          "targetWord": "WINGS",
          "scrambleLetters": [
            "S",
            "G",
            "N",
            "I",
            "W"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-magic_finger-56-3-comp1",
            "question": "What replaced the arms of the Gregg family when they woke up?",
            "options": [
              "Wooden branches with green leaves",
              "Long golden dragon tentacles",
              "Shiny steel robot arms",
              "Silky wings covered in warm feathers"
            ],
            "correctIndex": 3,
            "explanation": "The magic spell transformed their human arms into bird-like feathered wings.",
            "visualClueEmoji": "🪶",
            "points": 60
          },
          {
            "id": "q-magic_finger-56-3-vocab1",
            "question": "Find a word in the passage that means: \"A feeling of overwhelming shock, great wonder, and disbelief.\".",
            "options": [
              "Next",
              "Astonishment",
              "Morning",
              "Gregg"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Astonishment\" means a feeling of overwhelming shock, great wonder, and disbelief.",
            "visualClueEmoji": "😲",
            "points": 60
          },
          {
            "id": "q-magic_finger-56-3-comp2",
            "question": "What were the giant wild ducks doing inside the Gregg house?",
            "options": [
              "Cleaning the windows and baking birthday cookies for the family",
              "Painting the walls bright pink and singing choir songs",
              "Moving into the house, boiling tea, and holding the hunting guns",
              "Fixing the tractor engine in the barn"
            ],
            "correctIndex": 2,
            "explanation": "The giant ducks occupied the house and held the guns, reversing the roles of hunter and hunted.",
            "visualClueEmoji": "🦆",
            "points": 60
          },
          {
            "id": "q-magic_finger-56-3-vocab2",
            "question": "Find a word in the passage that means: \"Very small; shrunken down to a tiny, compact size.\".",
            "options": [
              "Miniature",
              "Next",
              "Morning",
              "Gregg"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Miniature\" means very small; shrunken down to a tiny, compact size.",
            "visualClueEmoji": "🔬",
            "points": 60
          }
        ]
      },
      {
        "id": "magic_finger-56-4",
        "dayNumber": 4,
        "title": "The Tree Nest & The Storm",
        "subtitle": "Sleeping on twigs and facing the barrels of the guns!",
        "estReadingMinutes": 15,
        "totalWordCount": 480,
        "summary": "Exiled from their house, the miniature Greggs build a nest in a high tree and eat raw worms. In the morning, the giant ducks corner them with guns, forcing them to see the horror of hunting.",
        "visualScenes": [
          {
            "id": "scene-magic_finger-56-4",
            "title": "The Tree Nest & The Storm",
            "backgroundGradient": "from-purple-900 via-fuchsia-900 to-indigo-950",
            "illustrationType": "tree_nest_life",
            "caption": "The four tiny Greggs huddle inside their leafy tree nest as giant ducks aim guns upward from the ground!",
            "characterAvatars": [
              {
                "name": "Mrs. Gregg",
                "emoji": "🪽",
                "speech": "Please do not shoot us! We are only little humans!",
                "position": "left"
              },
              {
                "name": "Duck Leader",
                "emoji": "🦆",
                "speech": "You shot sixteen of our family yesterday! Why shouldn't we shoot you?",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "mf7",
                "x": 40,
                "y": 35,
                "label": "Tree Nest",
                "icon": "🪺",
                "soundEffect": "bounce",
                "funFact": "Mr. Gregg wove sticks and dry leaves together to keep his family warm!",
                "action": "bounce"
              },
              {
                "id": "mf8",
                "x": 75,
                "y": 70,
                "label": "Hunting Guns",
                "icon": "💥",
                "soundEffect": "magic",
                "funFact": "The giant ducks held the guns firmly with their human hands!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Building a High Nest",
            "paragraphs": [
              "Because the giant ducks locked all the doors, the miniature Gregg family had nowhere to sleep.",
              "Mr. Gregg flew up into the highest branches of an old oak tree. With twigs, moss, and dry leaves, he built a cozy bird nest.",
              "For supper, the boys tried eating barley seeds and wriggly worms, making funny disgusted faces at every bite."
            ],
            "dialogueBites": [
              {
                "speaker": "Philip",
                "text": "Dad, I cannot eat this worm! It keeps wiggling on my tongue!",
                "avatarEmoji": "🪽",
                "side": "left"
              },
              {
                "speaker": "Mr. Gregg",
                "text": "Eat the seeds instead, son! We must keep our strength up!",
                "avatarEmoji": "🪶",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-56-4-p1",
              "question": "Where did the miniature Gregg family sleep that night?",
              "options": [
                "In the soft glove compartment of their car",
                "In a high oak tree nest made of twigs, moss, and leaves",
                "Under a shiny flower pot in the tomato garden"
              ],
              "correctInsightIndex": 1,
              "insight": "Living like wild birds gave them a true taste of animal life in nature.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "A Storm in the Treetops",
            "paragraphs": [
              "During the night, cold wind howled through the forest and heavy rain poured down from black clouds.",
              "The four tiny feathered humans clung together in the swaying nest, feeling wet, cold, and miserable.",
              "Mr. Gregg thought about all the wild animals that slept in freezing woods while he had sat warm by his fireplace."
            ],
            "dialogueBites": [
              {
                "speaker": "Mrs. Gregg",
                "text": "Hold onto me, children! The wind is shaking our little nest!",
                "avatarEmoji": "🪽",
                "side": "left"
              },
              {
                "speaker": "Mr. Gregg",
                "text": "I never knew how hard and cold it was to live out in the wild.",
                "avatarEmoji": "🪶",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-56-4-p2",
              "question": "Find a word on this page that means: \"Filled with extreme, heart-pounding fear and panic.\".",
              "options": [
                "Giant",
                "Ducks",
                "Terrified"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Terrified\" (TAIR-uh-fide) means filled with extreme, heart-pounding fear and panic.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Ducks at Dawn",
            "paragraphs": [
              "At sunrise, the miniature family awoke to hear heavy footsteps crunching on the wet ground below.",
              "The four giant ducks stood beneath the tree, pointing the heavy hunting guns straight up at the nest!",
              "The Greggs were terrified. Mr. Gregg began pleading with tears in his eyes: 'Please don't shoot! We swear we will never hurt a bird again!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Duck Leader",
                "text": "You shot sixteen of our friends yesterday! Why should we show mercy?",
                "avatarEmoji": "🦆",
                "side": "right"
              },
              {
                "speaker": "Mr. Gregg",
                "text": "I was foolish and cruel! I promise we will smash our guns forever!",
                "avatarEmoji": "🪶",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-56-4-p3",
              "question": "What promise did Mr. Gregg make to the giant ducks?",
              "options": [
                "He promised never to hurt animals again and to smash all his guns forever",
                "He promised to buy them bigger boots for the winter",
                "He promised to teach them how to drive the farm tractor"
              ],
              "correctInsightIndex": 0,
              "insight": "Experiencing fear firsthand transformed Mr. Gregg's heart forever.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Miserable",
            "phonics": "MIZ-er-uh-bul",
            "definition": "Extremely unhappy, uncomfortable, cold, or wretched.",
            "funExample": "The cold rain made their night in the tree truly miserable.",
            "emoji": "🌧️"
          },
          {
            "word": "Pleading",
            "phonics": "PLEED-ing",
            "definition": "Begging earnestly with deep, heartfelt emotion and desperation.",
            "funExample": "Mr. Gregg was pleading with the giant ducks for mercy.",
            "emoji": "🙏"
          },
          {
            "word": "Terrified",
            "phonics": "TAIR-uh-fide",
            "definition": "Filled with extreme, heart-pounding fear and panic.",
            "funExample": "The miniature family was terrified by the sight of the gun barrels.",
            "emoji": "😨"
          }
        ],
        "microChallenge": {
          "id": "mc-magic_finger-56-4",
          "title": "Electric Spark Scramble",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from today's Magic Finger chapter!",
          "targetWord": "MERCIES",
          "scrambleLetters": [
            "S",
            "E",
            "I",
            "C",
            "R",
            "E",
            "M"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-magic_finger-56-4-comp1",
            "question": "What did the miniature Gregg boys eat for supper in their tree nest?",
            "options": [
              "Barley seeds and wriggly worms",
              "Hot roast chicken with gravy",
              "Fresh strawberry ice cream with chocolate syrup",
              "Warm macaroni and cheese"
            ],
            "correctIndex": 0,
            "explanation": "As birds in the wild, they had to eat barley seeds and worms instead of cooked food.",
            "visualClueEmoji": "🪱",
            "points": 60
          },
          {
            "id": "q-magic_finger-56-4-vocab1",
            "question": "Find a word in the passage that means: \"Extremely unhappy, uncomfortable, cold, or wretched.\".",
            "options": [
              "Giant",
              "Ducks",
              "Locked",
              "Miserable"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Miserable\" means extremely unhappy, uncomfortable, cold, or wretched.",
            "visualClueEmoji": "🌧️",
            "points": 60
          },
          {
            "id": "q-magic_finger-56-4-comp2",
            "question": "Why did the giant ducks point their guns at the Gregg family's nest?",
            "options": [
              "Because they wanted to play a game of hide-and-seek",
              "To show the hunters what it feels like to be terrified and hunted",
              "Because they wanted the family to build them a bigger nest",
              "Because the ducks were practicing for an Olympic parade"
            ],
            "correctIndex": 1,
            "explanation": "The giant ducks wanted the Greggs to understand the terrible cruelty of hunting living creatures.",
            "visualClueEmoji": "🎯",
            "points": 60
          },
          {
            "id": "q-magic_finger-56-4-vocab2",
            "question": "Find a word in the passage that means: \"Begging earnestly with deep, heartfelt emotion and desperation.\".",
            "options": [
              "Giant",
              "Ducks",
              "Pleading",
              "Locked"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Pleading\" means begging earnestly with deep, heartfelt emotion and desperation.",
            "visualClueEmoji": "🙏",
            "points": 60
          }
        ]
      },
      {
        "id": "magic_finger-56-5",
        "dayNumber": 5,
        "title": "The Sacred Vow & The Flying Eggs",
        "subtitle": "Smashing the guns, feeding the birds, and changing their name!",
        "estReadingMinutes": 15,
        "totalWordCount": 480,
        "summary": "The giant ducks spare the family after they vow to protect nature. The magic spell lifts, the Greggs return to normal, smash their guns with sledgehammers, and change their family name to Egg!",
        "visualScenes": [
          {
            "id": "scene-magic_finger-56-5",
            "title": "The Sacred Vow & The Flying Eggs",
            "backgroundGradient": "from-purple-900 via-fuchsia-900 to-indigo-950",
            "illustrationType": "flying_eggs",
            "caption": "The reformed Egg family merrily scatters golden grain for flocks of birds while smashing their hunting rifles with hammers!",
            "characterAvatars": [
              {
                "name": "Mr. Egg",
                "emoji": "🔨",
                "speech": "We have smashed all our guns into tiny pieces!",
                "position": "left"
              },
              {
                "name": "Narrator",
                "emoji": "👧",
                "speech": "You are true friends to all the birds in the forest now!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "mf9",
                "x": 35,
                "y": 65,
                "label": "Smashed Guns",
                "icon": "🔨",
                "soundEffect": "magic",
                "funFact": "Mr. Egg used a giant blacksmith hammer to break every gun barrel!",
                "action": "sparkle"
              },
              {
                "id": "mf10",
                "x": 75,
                "y": 40,
                "label": "Golden Grain Feed",
                "icon": "🌾",
                "soundEffect": "bounce",
                "funFact": "Hundreds of wild ducks and songbirds gathered for the delicious feast!",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Magic Lifts",
            "paragraphs": [
              "The giant ducks nodded in agreement and lowered their guns. The moment the promise was made, a warm golden glow wrapped around the tree.",
              "Whoosh! The feathery wings melted away, and the Gregg family grew back into full-sized humans standing firmly on the green meadow.",
              "The four giant ducks shrank back into beautiful wild birds, quacking happily as they flew across the sparkling blue lake."
            ],
            "dialogueBites": [
              {
                "speaker": "Mrs. Gregg",
                "text": "My hands! My fingers! We are real humans once again!",
                "avatarEmoji": "👩‍🌾",
                "side": "left"
              },
              {
                "speaker": "Mr. Gregg",
                "text": "Thank goodness! Now let us make good on our sacred vow!",
                "avatarEmoji": "👨‍🌾",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-56-5-p1",
              "question": "What happened after the Greggs promised never to hunt again?",
              "options": [
                "They turned into stone statues in the garden",
                "They were transported to the moon in a flying saucer",
                "The wings disappeared and they grew back into full-sized humans"
              ],
              "correctInsightIndex": 2,
              "insight": "Keeping their word restored harmony between humans and wildlife.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Smashing the Guns to Pieces",
            "paragraphs": [
              "When I walked over to their farm later that afternoon, I saw an amazing sight.",
              "Mr. Gregg was swinging a huge iron sledgehammer, smashing every hunting rifle into twisted bits of scrap metal!",
              "Philip and William were filling buckets with sweet barley grain and breadcrumbs, calling all the wild birds down for a grand feast."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Egg",
                "text": "We have changed our name to the Egg family in honor of our feathered friends!",
                "avatarEmoji": "🔨",
                "side": "left"
              },
              {
                "speaker": "Narrator",
                "text": "Look at all the ducks landing on your lawn! They love you now!",
                "avatarEmoji": "👧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-56-5-p2",
              "question": "Find a word on this page that means: \"Willing and eager to give freely of kindness, food, and help.\".",
              "options": [
                "Generous",
                "Giant",
                "Ducks"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Generous\" (JEN-er-us) means willing and eager to give freely of kindness, food, and help.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "A New Sound in the Woods",
            "paragraphs": [
              "The newly named Egg family became the most generous guardians of wildlife in the entire countryside.",
              "Just as we were celebrating with hot cocoa, the distant sound of 'BANG! BANG!' echoed from the Cooper farm down the lane.",
              "I looked down at my right hand. A warm spark was starting to tingle at the tip of my forefinger... The Magic Finger was ready again!"
            ],
            "dialogueBites": [
              {
                "speaker": "Philip Egg",
                "text": "The Cooper family is shooting in the woods down the road!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Narrator",
                "text": "Don't worry, Philip... My Magic Finger is tingling again!",
                "avatarEmoji": "⚡",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-56-5-p3",
              "question": "What sound did the narrator hear at the end of the story?",
              "options": [
                "A train whistle blowing at the station",
                "Gunshots from the Cooper family hunting down the lane",
                "A rooster crowing at the break of dawn"
              ],
              "correctInsightIndex": 1,
              "insight": "Justice never rests when innocent creatures need a champion!",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Sledgehammer",
            "phonics": "SLEDJ-ham-er",
            "definition": "A large, heavy hammer used for breaking hard objects into pieces.",
            "funExample": "Mr. Egg raised the heavy sledgehammer and smashed his rifle.",
            "emoji": "🔨"
          },
          {
            "word": "Feast",
            "phonics": "FEEST",
            "definition": "A large, wonderful meal with abundant food celebrating a special event.",
            "funExample": "The garden was filled with a feast of barley for the wild birds.",
            "emoji": "🌾"
          },
          {
            "word": "Generous",
            "phonics": "JEN-er-us",
            "definition": "Willing and eager to give freely of kindness, food, and help.",
            "funExample": "The reformed family became generous protectors of every animal.",
            "emoji": "💖"
          }
        ],
        "microChallenge": {
          "id": "mc-magic_finger-56-5",
          "title": "Electric Spark Scramble",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from today's Magic Finger chapter!",
          "targetWord": "HAMMER",
          "scrambleLetters": [
            "R",
            "E",
            "M",
            "M",
            "A",
            "H"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-magic_finger-56-5-comp1",
            "question": "What did Mr. Gregg do to all of his hunting guns with the sledgehammer?",
            "options": [
              "He painted them gold and hung them in the hallway",
              "He buried them under the kitchen floorboards",
              "He smashed them into twisted pieces of scrap metal",
              "He sold them to the shopkeeper in town"
            ],
            "correctIndex": 2,
            "explanation": "Mr. Gregg completely destroyed all his hunting weapons so he could never shoot again.",
            "visualClueEmoji": "🔨",
            "points": 60
          },
          {
            "id": "q-magic_finger-56-5-vocab1",
            "question": "Find a word in the passage that means: \"A large, heavy hammer used for breaking hard objects into pieces.\".",
            "options": [
              "Giant",
              "Ducks",
              "Nodded",
              "Sledgehammer"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Sledgehammer\" means a large, heavy hammer used for breaking hard objects into pieces.",
            "visualClueEmoji": "🔨",
            "points": 60
          },
          {
            "id": "q-magic_finger-56-5-comp2",
            "question": "What family name did the Greggs choose to adopt in honor of their bird adventure?",
            "options": [
              "The Egg family",
              "The Feather family",
              "The Wonka family",
              "The Sparrow family"
            ],
            "correctIndex": 0,
            "explanation": "To show their deep love for birds, they changed their name from Gregg to Egg.",
            "visualClueEmoji": "🥚",
            "points": 60
          },
          {
            "id": "q-magic_finger-56-5-vocab2",
            "question": "Find a word in the passage that means: \"A large, wonderful meal with abundant food celebrating a special event.\".",
            "options": [
              "Giant",
              "Feast",
              "Ducks",
              "Nodded"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Feast\" means a large, wonderful meal with abundant food celebrating a special event.",
            "visualClueEmoji": "🌾",
            "points": 60
          }
        ]
      }
    ],
    "7-8": [
      {
        "id": "magic_finger-78-1",
        "dayNumber": 1,
        "title": "The Mysterious Tingle",
        "subtitle": "A strange spark and whiskers on the teacher!",
        "estReadingMinutes": 15,
        "totalWordCount": 620,
        "summary": "An eight-year-old girl discovers she has a mysterious Magic Finger. Whenever she becomes angry and sees red, an electric spark leaps from her finger tip with astonishing magical surprises.",
        "visualScenes": [
          {
            "id": "scene-magic_finger-78-1",
            "title": "The Mysterious Tingle",
            "backgroundGradient": "from-purple-900 via-fuchsia-900 to-indigo-950",
            "illustrationType": "mrs_winter_cat",
            "caption": "Sparks flash from the narrator's fingertip! Mrs. Winter gasps as soft cat whiskers and a bushy tail begin to sprout!",
            "characterAvatars": [
              {
                "name": "Narrator",
                "emoji": "👧",
                "speech": "My forefinger began to tingle with electric sparks!",
                "position": "left"
              },
              {
                "name": "Mrs. Winter",
                "emoji": "👩‍🏫",
                "speech": "Goodness gracious! Why is my nose twitching like a cat?",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "mf1",
                "x": 35,
                "y": 55,
                "label": "Electric Spark",
                "icon": "⚡",
                "soundEffect": "magic",
                "funFact": "The Magic Finger makes a buzzing sound like a tiny trapped bee!",
                "action": "sparkle"
              },
              {
                "id": "mf2",
                "x": 75,
                "y": 40,
                "label": "Blackboard",
                "icon": "📝",
                "soundEffect": "bounce",
                "funFact": "Mrs. Winter was trying to teach the class how to spell 'cat'!",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Tingling Forefinger",
            "paragraphs": [
              "I possess an extraordinary, mysterious power that nobody can explain. It happens whenever I get terribly angry and see red all around me.",
              "First, my whole body gets scorching hot like a little oven. Then, a peculiar tingle starts at the tip of my right forefinger.",
              "A bright flash of blue electricity leaps out, making a loud buzzing sound like an angry bumblebee!"
            ],
            "dialogueBites": [
              {
                "speaker": "Narrator",
                "text": "Whenever I get furious, my finger starts to tingle and glow!",
                "avatarEmoji": "👧",
                "side": "left"
              },
              {
                "speaker": "Grandma",
                "text": "Be careful where you point that glowing finger, my dear!",
                "avatarEmoji": "👵",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-78-1-p1",
              "question": "What happens right before the Magic Finger shoots electricity?",
              "options": [
                "She begins singing a sleepy lullaby in the garden",
                "The girl's body gets scorching hot and her forefinger starts tingling",
                "She eats three whole bowls of cabbage soup"
              ],
              "correctInsightIndex": 1,
              "insight": "Her emotional spark triggers the magical surge of energy!",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Mrs. Winter's Spelling Lesson",
            "paragraphs": [
              "One morning at school, my strict teacher Mrs. Winter yelled at me in front of the whole classroom because I could not spell the word 'cat'.",
              "She called me a stupid little girl and made me stand in the corner. I grew so angry that red sparks flew across my eyes.",
              "Before I could stop myself, my finger pointed straight at Mrs. Winter. An astonishing flash lit up the blackboard!"
            ],
            "dialogueBites": [
              {
                "speaker": "Mrs. Winter",
                "text": "Stand in the corner this instant and think about your spelling!",
                "avatarEmoji": "👩‍🏫",
                "side": "right"
              },
              {
                "speaker": "Narrator",
                "text": "I did not mean to zap her, but the sparks were unstoppable!",
                "avatarEmoji": "👧",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-78-1-p2",
              "question": "Find a word on this page that means: \"Strange, unusual, or curious in a surprising way.\".",
              "options": [
                "Possess",
                "Extraordinary",
                "Peculiar"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Peculiar\" (peh-KYOO-lee-er) means strange, unusual, or curious in a surprising way.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "Whiskers and a Bushy Tail",
            "paragraphs": [
              "The moment the blue spark touched Mrs. Winter, long black whiskers sprouted right out of her cheeks!",
              "Then, a large furry tail popped out from under her skirt, swishing back and forth like a real ginger tabby cat.",
              "Mrs. Winter meowed in horror and dashed out of the schoolhouse. I promised myself I would never use the Magic Finger again... until the Gregg family went hunting."
            ],
            "dialogueBites": [
              {
                "speaker": "Classmates",
                "text": "Look at Mrs. Winter! She has real cat whiskers and a bushy tail!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Mrs. Winter",
                "text": "Meow! Goodness me! What has happened to my nose?",
                "avatarEmoji": "🐱",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-78-1-p3",
              "question": "What grew on Mrs. Winter after she got zapped?",
              "options": [
                "Long whiskers on her cheeks and a bushy furry tail",
                "Golden eagle wings and silver feathers",
                "A pair of shiny green frog legs"
              ],
              "correctInsightIndex": 0,
              "insight": "The Magic Finger gives naughty bullies a taste of their own medicine!",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Tingle",
            "phonics": "TING-gul",
            "definition": "A prickling, stinging feeling like tiny electric sparks on your skin.",
            "funExample": "Her forefinger began to tingle with electric energy.",
            "emoji": "⚡"
          },
          {
            "word": "Astonishing",
            "phonics": "uh-STON-ish-ing",
            "definition": "Extremely surprising, amazing, and wondrous to behold.",
            "funExample": "It was an astonishing sight when Mrs. Winter sprouted cat whiskers!",
            "emoji": "😲"
          },
          {
            "word": "Peculiar",
            "phonics": "peh-KYOO-lee-er",
            "definition": "Strange, unusual, or curious in a surprising way.",
            "funExample": "The classroom grew quiet at this peculiar transformation.",
            "emoji": "🔍"
          }
        ],
        "microChallenge": {
          "id": "mc-magic_finger-78-1",
          "title": "Electric Spark Scramble",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from today's Magic Finger chapter!",
          "targetWord": "SPARK",
          "scrambleLetters": [
            "K",
            "R",
            "A",
            "P",
            "S"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-magic_finger-78-1-comp1",
            "question": "Why did the narrator accidentally zap Mrs. Winter with the Magic Finger?",
            "options": [
              "Because Mrs. Winter asked for a glass of apple juice",
              "Because Mrs. Winter cruelly yelled at her and made her stand in the corner",
              "Because the class was playing a game of tag on the lawn",
              "Because Mrs. Winter wanted to learn how to fly"
            ],
            "correctIndex": 1,
            "explanation": "Mrs. Winter humiliated the narrator, causing her to see red and trigger the Magic Finger.",
            "visualClueEmoji": "👩‍🏫",
            "points": 60
          },
          {
            "id": "q-magic_finger-78-1-vocab1",
            "question": "Find a word in the passage that means: \"A prickling, stinging feeling like tiny electric sparks on your skin.\".",
            "options": [
              "Possess",
              "Extraordinary",
              "Tingle",
              "Mysterious"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Tingle\" means a prickling, stinging feeling like tiny electric sparks on your skin.",
            "visualClueEmoji": "⚡",
            "points": 60
          },
          {
            "id": "q-magic_finger-78-1-comp2",
            "question": "What physical clue tells the girl the Magic Finger is about to fire?",
            "options": [
              "Her body feels scorching hot and her forefinger begins to tingle",
              "Her ears turn bright purple and begin to flap",
              "Her toes freeze into solid blocks of ice",
              "She starts speaking backwards like a wizard"
            ],
            "correctIndex": 0,
            "explanation": "The story explains that heat and a tingling forefinger always signal the electric magic spark.",
            "visualClueEmoji": "⚡",
            "points": 60
          },
          {
            "id": "q-magic_finger-78-1-vocab2",
            "question": "Find a word in the passage that means: \"Extremely surprising, amazing, and wondrous to behold.\".",
            "options": [
              "Possess",
              "Extraordinary",
              "Mysterious",
              "Astonishing"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Astonishing\" means extremely surprising, amazing, and wondrous to behold.",
            "visualClueEmoji": "😲",
            "points": 60
          }
        ]
      },
      {
        "id": "magic_finger-78-2",
        "dayNumber": 2,
        "title": "The Duck Hunt & Seeing Red",
        "subtitle": "Standing up for sixteen innocent wild ducks!",
        "estReadingMinutes": 15,
        "totalWordCount": 620,
        "summary": "The neighboring Gregg family shoots sixteen beautiful wild ducks for sport. When they laugh at the narrator's pleas for mercy, the girl's Magic Finger unleashes a massive electric beam.",
        "visualScenes": [
          {
            "id": "scene-magic_finger-78-2",
            "title": "The Duck Hunt & Seeing Red",
            "backgroundGradient": "from-purple-900 via-fuchsia-900 to-indigo-950",
            "illustrationType": "magic_finger_spark",
            "caption": "A dazzling crimson beam strikes the Gregg farm as the girl unleashes the power of the Magic Finger!",
            "characterAvatars": [
              {
                "name": "Mr. Gregg",
                "emoji": "👨‍🌾",
                "speech": "Hunting is great sport! Look at our sixteen ducks!",
                "position": "right"
              },
              {
                "name": "Narrator",
                "emoji": "👧",
                "speech": "Stop shooting the ducks! They have done you no harm!",
                "position": "left"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "mf3",
                "x": 45,
                "y": 60,
                "label": "Magic Beam",
                "icon": "💥",
                "soundEffect": "magic",
                "funFact": "The flash illuminated the entire forest in glowing violet light!",
                "action": "sparkle"
              },
              {
                "id": "mf4",
                "x": 80,
                "y": 35,
                "label": "Wild Ducks",
                "icon": "🦆",
                "soundEffect": "bounce",
                "funFact": "The flock flew high above the pond, seeking safety from the guns.",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Gregg Family's Guns",
            "paragraphs": [
              "The Gregg family lived in the farm next to ours: Mr. Gregg, Mrs. Gregg, and their two boys, Philip and William.",
              "They were passionate about hunting. Every Saturday morning, they grabbed their heavy guns and marched into the woods to shoot ducks and deer.",
              "I hated seeing gentle wild creatures getting hurt. I begged Philip and William to play with me instead, but they only laughed."
            ],
            "dialogueBites": [
              {
                "speaker": "Philip",
                "text": "Go away, girl! Shooting ducks is the greatest fun in the world!",
                "avatarEmoji": "👦",
                "side": "right"
              },
              {
                "speaker": "Narrator",
                "text": "Those ducks love their families just like you love yours!",
                "avatarEmoji": "👧",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-78-2-p1",
              "question": "What did the Gregg family do every Saturday morning?",
              "options": [
                "They planted sweet apple trees in their garden",
                "They baked warm cinnamon bread for the neighbors",
                "They marched into the woods with guns to shoot ducks and deer"
              ],
              "correctInsightIndex": 2,
              "insight": "Their obsession with hunting hurt innocent wildlife in the forest.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Sixteen Fallen Ducks",
            "paragraphs": [
              "One crisp Saturday afternoon, I saw the Greggs returning home from the lake carrying sixteen dead wild ducks over their shoulders.",
              "My heart felt heavy and sad. I ran across the meadow and shouted at Mr. Gregg, pleading with him to stop this cruel sport.",
              "Instead of listening, Mr. Gregg told me to mind my own business, and both boys made mocking faces at me."
            ],
            "dialogueBites": [
              {
                "speaker": "Narrator",
                "text": "Please stop shooting the innocent ducks! It is unfair and cruel!",
                "avatarEmoji": "👧",
                "side": "left"
              },
              {
                "speaker": "Mr. Gregg",
                "text": "Mind your own business, little girl, and go play with your dolls!",
                "avatarEmoji": "👨‍🌾",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-78-2-p2",
              "question": "Find a word on this page that means: \"Laughing at someone in a mean, teasing, and unkind way.\".",
              "options": [
                "Mocking",
                "Gregg",
                "Family"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Mocking\" (MOK-ing) means laughing at someone in a mean, teasing, and unkind way.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Crimson Flash",
            "paragraphs": [
              "Their mocking laughter made everything inside me turn white-hot. I saw a furious crimson light cover the trees.",
              "Before I could count to three, my forefinger snapped forward. A dazzling beam of electric magic flashed straight at the Gregg family!",
              "The electric spark swept over Mr. Gregg, Mrs. Gregg, Philip, and William. Then silence fell over the farm, and a strange spell began to work."
            ],
            "dialogueBites": [
              {
                "speaker": "Narrator",
                "text": "I point my finger straight at you! See how you like being hunted!",
                "avatarEmoji": "👧",
                "side": "left"
              },
              {
                "speaker": "William",
                "text": "Look at her finger glowing! What is that buzzing spark?",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-78-2-p3",
              "question": "Why did the narrator point her Magic Finger at the Greggs?",
              "options": [
                "Because they forgot to invite her to breakfast",
                "Because they laughed and mocked her after shooting sixteen wild ducks",
                "Because they painted their tractor bright green"
              ],
              "correctInsightIndex": 1,
              "insight": "Her anger was born from defending innocent living creatures.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Cruel",
            "phonics": "KROO-ul",
            "definition": "Causing pain or suffering to living creatures without care.",
            "funExample": "She believed shooting gentle animals for fun was cruel.",
            "emoji": "💔"
          },
          {
            "word": "Furious",
            "phonics": "FYOOR-ee-us",
            "definition": "Extremely angry; filled with unstoppable, boiling rage.",
            "funExample": "The girl grew furious when the hunters laughed at her.",
            "emoji": "😡"
          },
          {
            "word": "Mocking",
            "phonics": "MOK-ing",
            "definition": "Laughing at someone in a mean, teasing, and unkind way.",
            "funExample": "Philip gave a mocking chuckle as he marched past.",
            "emoji": "😏"
          }
        ],
        "microChallenge": {
          "id": "mc-magic_finger-78-2",
          "title": "Electric Spark Scramble",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from today's Magic Finger chapter!",
          "targetWord": "FEATHER",
          "scrambleLetters": [
            "R",
            "E",
            "H",
            "T",
            "A",
            "E",
            "F"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-magic_finger-78-2-comp1",
            "question": "How many wild ducks did the Gregg family shoot on that Saturday afternoon?",
            "options": [
              "Only two baby ducks",
              "Fifty golden geese",
              "Sixteen wild ducks",
              "None, because it was raining"
            ],
            "correctIndex": 2,
            "explanation": "The text specifically mentions that the Greggs shot sixteen dead wild ducks.",
            "visualClueEmoji": "🦆",
            "points": 60
          },
          {
            "id": "q-magic_finger-78-2-vocab1",
            "question": "Find a word in the passage that means: \"Causing pain or suffering to living creatures without care.\".",
            "options": [
              "Cruel",
              "Gregg",
              "Family",
              "Lived"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Cruel\" means causing pain or suffering to living creatures without care.",
            "visualClueEmoji": "💔",
            "points": 60
          },
          {
            "id": "q-magic_finger-78-2-comp2",
            "question": "How did Mr. Gregg and his sons react when the girl begged them to stop hunting?",
            "options": [
              "They immediately apologized and put their guns away",
              "They invited her into their kitchen for tea and cake",
              "They promised never to enter the woods again",
              "They mocked her, laughed, and told her to mind her own business"
            ],
            "correctIndex": 3,
            "explanation": "The Gregg family made mocking faces and dismissed her pleas.",
            "visualClueEmoji": "😤",
            "points": 60
          },
          {
            "id": "q-magic_finger-78-2-vocab2",
            "question": "Find a word in the passage that means: \"Extremely angry; filled with unstoppable, boiling rage.\".",
            "options": [
              "Gregg",
              "Furious",
              "Family",
              "Lived"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Furious\" means extremely angry; filled with unstoppable, boiling rage.",
            "visualClueEmoji": "😡",
            "points": 60
          }
        ]
      },
      {
        "id": "magic_finger-78-3",
        "dayNumber": 3,
        "title": "Wings, Beaks & Giant Ducks",
        "subtitle": "Waking up the size of birds with giant ducks in the kitchen!",
        "estReadingMinutes": 15,
        "totalWordCount": 620,
        "summary": "The next morning, the Gregg family wakes up to an astonishing shock: their arms have turned into feathery wings and their bodies have shrunk to tiny bird size, while giant wild ducks occupy their house!",
        "visualScenes": [
          {
            "id": "scene-magic_finger-78-3",
            "title": "Wings, Beaks & Giant Ducks",
            "backgroundGradient": "from-purple-900 via-fuchsia-900 to-indigo-950",
            "illustrationType": "duck_family_wings",
            "caption": "The tiny Gregg family flaps their feathery wings in astonishment while four giant ducks march into their home!",
            "characterAvatars": [
              {
                "name": "Mr. Gregg",
                "emoji": "🪶",
                "speech": "Where are my arms? I have grown duck wings!",
                "position": "left"
              },
              {
                "name": "Giant Duck",
                "emoji": "🦆",
                "speech": "Quack! This looks like a splendid farmhouse for us!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "mf5",
                "x": 30,
                "y": 50,
                "label": "Feathery Wings",
                "icon": "🪶",
                "soundEffect": "bounce",
                "funFact": "Philip and William learned to flap their wings and hover above the rug!",
                "action": "bounce"
              },
              {
                "id": "mf6",
                "x": 70,
                "y": 45,
                "label": "Giant Duck Footprint",
                "icon": "🐾",
                "soundEffect": "magic",
                "funFact": "The ducks were now eight feet tall with human arms and hands!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Feathered Morning Surprise",
            "paragraphs": [
              "The next morning, Mr. Gregg woke up and reached out to brush his teeth. But when he looked at his arm, it wasn't an arm at all!",
              "In its place was a long, silky wing covered in warm brown feathers! He jumped out of bed and discovered he had shrunk to miniature size.",
              "Mrs. Gregg, Philip, and William were also tiny feathered creatures, no taller than teacups, staring in utter astonishment."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Gregg",
                "text": "Look at my body! I have brown wings instead of arms!",
                "avatarEmoji": "🪶",
                "side": "left"
              },
              {
                "speaker": "Mrs. Gregg",
                "text": "Oh dear me! How are we going to cook breakfast with wings?",
                "avatarEmoji": "🪽",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-78-3-p1",
              "question": "What did Mr. Gregg find when he woke up in the morning?",
              "options": [
                "He had shrunk to miniature size and grown feathery wings instead of arms",
                "He had turned into a tall green wooden tree",
                "He had turned into a shiny silver motorcar"
              ],
              "correctInsightIndex": 0,
              "insight": "The Magic Finger swapped their human bodies for bird-like features!",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Learning to Fly",
            "paragraphs": [
              "Philip and William hopped onto the windowsill. They began flapping their wings up and down with great speed.",
              "Whoosh! Up into the air they soared, zooming around the bedroom ceiling like lively bumblebees.",
              "Mr. and Mrs. Gregg spread their feathered wings and joined their sons, gliding smoothly out the open window into the bright sunshine."
            ],
            "dialogueBites": [
              {
                "speaker": "William",
                "text": "Look at me, Dad! Flapping my wings is so easy and fun!",
                "avatarEmoji": "🪽",
                "side": "left"
              },
              {
                "speaker": "Mr. Gregg",
                "text": "Keep flapping, boys! Let's fly down to the garden to see our house!",
                "avatarEmoji": "🪶",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-78-3-p2",
              "question": "Find a word on this page that means: \"Moving wings quickly up and down to rise into the air.\".",
              "options": [
                "Next",
                "Flapping",
                "Morning"
              ],
              "correctInsightIndex": 1,
              "insight": "\"Flapping\" (FLAP-ing) means moving wings quickly up and down to rise into the air.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Giant Ducks Take Over",
            "paragraphs": [
              "When the feathered Gregg family flew down toward their front door, they saw an astonishing sight.",
              "Four colossal wild ducks, standing tall on their hind legs and sporting human arms, were marching into the Gregg farmhouse!",
              "One duck held Mr. Gregg's favorite hunting gun, while the mother duck prepared to boil tea on the kitchen stove. The tables had turned!"
            ],
            "dialogueBites": [
              {
                "speaker": "Giant Duck",
                "text": "Quack! What a lovely house with soft beds and a warm stove!",
                "avatarEmoji": "🦆",
                "side": "right"
              },
              {
                "speaker": "Mr. Gregg",
                "text": "Hey! That is my house! You cannot sleep in our beds!",
                "avatarEmoji": "🪶",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-78-3-p3",
              "question": "Who took over the Gregg farmhouse while the family was flying?",
              "options": [
                "A friendly family of squirrels carrying acorns",
                "Three sleepy brown bears wearing pajamas",
                "Four colossal wild ducks with human arms and hands"
              ],
              "correctInsightIndex": 2,
              "insight": "The hunters were locked out of their own home by the animals they hunted.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Astonishment",
            "phonics": "uh-STON-ish-ment",
            "definition": "A feeling of overwhelming shock, great wonder, and disbelief.",
            "funExample": "Mr. Gregg stared at his new feathery wings in total astonishment.",
            "emoji": "😲"
          },
          {
            "word": "Miniature",
            "phonics": "MIN-ee-uh-chur",
            "definition": "Very small; shrunken down to a tiny, compact size.",
            "funExample": "The Greggs were now miniature humans no bigger than robins.",
            "emoji": "🔬"
          },
          {
            "word": "Flapping",
            "phonics": "FLAP-ing",
            "definition": "Moving wings quickly up and down to rise into the air.",
            "funExample": "The boys practiced flapping their wings across the bedroom.",
            "emoji": "🪽"
          }
        ],
        "microChallenge": {
          "id": "mc-magic_finger-78-3",
          "title": "Electric Spark Scramble",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from today's Magic Finger chapter!",
          "targetWord": "WINGS",
          "scrambleLetters": [
            "S",
            "G",
            "N",
            "I",
            "W"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-magic_finger-78-3-comp1",
            "question": "What replaced the arms of the Gregg family when they woke up?",
            "options": [
              "Wooden branches with green leaves",
              "Long golden dragon tentacles",
              "Shiny steel robot arms",
              "Silky wings covered in warm feathers"
            ],
            "correctIndex": 3,
            "explanation": "The magic spell transformed their human arms into bird-like feathered wings.",
            "visualClueEmoji": "🪶",
            "points": 60
          },
          {
            "id": "q-magic_finger-78-3-vocab1",
            "question": "Find a word in the passage that means: \"A feeling of overwhelming shock, great wonder, and disbelief.\".",
            "options": [
              "Next",
              "Astonishment",
              "Morning",
              "Gregg"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Astonishment\" means a feeling of overwhelming shock, great wonder, and disbelief.",
            "visualClueEmoji": "😲",
            "points": 60
          },
          {
            "id": "q-magic_finger-78-3-comp2",
            "question": "What were the giant wild ducks doing inside the Gregg house?",
            "options": [
              "Cleaning the windows and baking birthday cookies for the family",
              "Painting the walls bright pink and singing choir songs",
              "Moving into the house, boiling tea, and holding the hunting guns",
              "Fixing the tractor engine in the barn"
            ],
            "correctIndex": 2,
            "explanation": "The giant ducks occupied the house and held the guns, reversing the roles of hunter and hunted.",
            "visualClueEmoji": "🦆",
            "points": 60
          },
          {
            "id": "q-magic_finger-78-3-vocab2",
            "question": "Find a word in the passage that means: \"Very small; shrunken down to a tiny, compact size.\".",
            "options": [
              "Miniature",
              "Next",
              "Morning",
              "Gregg"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Miniature\" means very small; shrunken down to a tiny, compact size.",
            "visualClueEmoji": "🔬",
            "points": 60
          }
        ]
      },
      {
        "id": "magic_finger-78-4",
        "dayNumber": 4,
        "title": "The Tree Nest & The Storm",
        "subtitle": "Sleeping on twigs and facing the barrels of the guns!",
        "estReadingMinutes": 15,
        "totalWordCount": 620,
        "summary": "Exiled from their house, the miniature Greggs build a nest in a high tree and eat raw worms. In the morning, the giant ducks corner them with guns, forcing them to see the horror of hunting.",
        "visualScenes": [
          {
            "id": "scene-magic_finger-78-4",
            "title": "The Tree Nest & The Storm",
            "backgroundGradient": "from-purple-900 via-fuchsia-900 to-indigo-950",
            "illustrationType": "tree_nest_life",
            "caption": "The four tiny Greggs huddle inside their leafy tree nest as giant ducks aim guns upward from the ground!",
            "characterAvatars": [
              {
                "name": "Mrs. Gregg",
                "emoji": "🪽",
                "speech": "Please do not shoot us! We are only little humans!",
                "position": "left"
              },
              {
                "name": "Duck Leader",
                "emoji": "🦆",
                "speech": "You shot sixteen of our family yesterday! Why shouldn't we shoot you?",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "mf7",
                "x": 40,
                "y": 35,
                "label": "Tree Nest",
                "icon": "🪺",
                "soundEffect": "bounce",
                "funFact": "Mr. Gregg wove sticks and dry leaves together to keep his family warm!",
                "action": "bounce"
              },
              {
                "id": "mf8",
                "x": 75,
                "y": 70,
                "label": "Hunting Guns",
                "icon": "💥",
                "soundEffect": "magic",
                "funFact": "The giant ducks held the guns firmly with their human hands!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Building a High Nest",
            "paragraphs": [
              "Because the giant ducks locked all the doors, the miniature Gregg family had nowhere to sleep.",
              "Mr. Gregg flew up into the highest branches of an old oak tree. With twigs, moss, and dry leaves, he built a cozy bird nest.",
              "For supper, the boys tried eating barley seeds and wriggly worms, making funny disgusted faces at every bite."
            ],
            "dialogueBites": [
              {
                "speaker": "Philip",
                "text": "Dad, I cannot eat this worm! It keeps wiggling on my tongue!",
                "avatarEmoji": "🪽",
                "side": "left"
              },
              {
                "speaker": "Mr. Gregg",
                "text": "Eat the seeds instead, son! We must keep our strength up!",
                "avatarEmoji": "🪶",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-78-4-p1",
              "question": "Where did the miniature Gregg family sleep that night?",
              "options": [
                "In the soft glove compartment of their car",
                "In a high oak tree nest made of twigs, moss, and leaves",
                "Under a shiny flower pot in the tomato garden"
              ],
              "correctInsightIndex": 1,
              "insight": "Living like wild birds gave them a true taste of animal life in nature.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "A Storm in the Treetops",
            "paragraphs": [
              "During the night, cold wind howled through the forest and heavy rain poured down from black clouds.",
              "The four tiny feathered humans clung together in the swaying nest, feeling wet, cold, and miserable.",
              "Mr. Gregg thought about all the wild animals that slept in freezing woods while he had sat warm by his fireplace."
            ],
            "dialogueBites": [
              {
                "speaker": "Mrs. Gregg",
                "text": "Hold onto me, children! The wind is shaking our little nest!",
                "avatarEmoji": "🪽",
                "side": "left"
              },
              {
                "speaker": "Mr. Gregg",
                "text": "I never knew how hard and cold it was to live out in the wild.",
                "avatarEmoji": "🪶",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-78-4-p2",
              "question": "Find a word on this page that means: \"Filled with extreme, heart-pounding fear and panic.\".",
              "options": [
                "Giant",
                "Ducks",
                "Terrified"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Terrified\" (TAIR-uh-fide) means filled with extreme, heart-pounding fear and panic.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Ducks at Dawn",
            "paragraphs": [
              "At sunrise, the miniature family awoke to hear heavy footsteps crunching on the wet ground below.",
              "The four giant ducks stood beneath the tree, pointing the heavy hunting guns straight up at the nest!",
              "The Greggs were terrified. Mr. Gregg began pleading with tears in his eyes: 'Please don't shoot! We swear we will never hurt a bird again!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Duck Leader",
                "text": "You shot sixteen of our friends yesterday! Why should we show mercy?",
                "avatarEmoji": "🦆",
                "side": "right"
              },
              {
                "speaker": "Mr. Gregg",
                "text": "I was foolish and cruel! I promise we will smash our guns forever!",
                "avatarEmoji": "🪶",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-78-4-p3",
              "question": "What promise did Mr. Gregg make to the giant ducks?",
              "options": [
                "He promised never to hurt animals again and to smash all his guns forever",
                "He promised to buy them bigger boots for the winter",
                "He promised to teach them how to drive the farm tractor"
              ],
              "correctInsightIndex": 0,
              "insight": "Experiencing fear firsthand transformed Mr. Gregg's heart forever.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Miserable",
            "phonics": "MIZ-er-uh-bul",
            "definition": "Extremely unhappy, uncomfortable, cold, or wretched.",
            "funExample": "The cold rain made their night in the tree truly miserable.",
            "emoji": "🌧️"
          },
          {
            "word": "Pleading",
            "phonics": "PLEED-ing",
            "definition": "Begging earnestly with deep, heartfelt emotion and desperation.",
            "funExample": "Mr. Gregg was pleading with the giant ducks for mercy.",
            "emoji": "🙏"
          },
          {
            "word": "Terrified",
            "phonics": "TAIR-uh-fide",
            "definition": "Filled with extreme, heart-pounding fear and panic.",
            "funExample": "The miniature family was terrified by the sight of the gun barrels.",
            "emoji": "😨"
          }
        ],
        "microChallenge": {
          "id": "mc-magic_finger-78-4",
          "title": "Electric Spark Scramble",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from today's Magic Finger chapter!",
          "targetWord": "MERCIES",
          "scrambleLetters": [
            "S",
            "E",
            "I",
            "C",
            "R",
            "E",
            "M"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-magic_finger-78-4-comp1",
            "question": "What did the miniature Gregg boys eat for supper in their tree nest?",
            "options": [
              "Barley seeds and wriggly worms",
              "Hot roast chicken with gravy",
              "Fresh strawberry ice cream with chocolate syrup",
              "Warm macaroni and cheese"
            ],
            "correctIndex": 0,
            "explanation": "As birds in the wild, they had to eat barley seeds and worms instead of cooked food.",
            "visualClueEmoji": "🪱",
            "points": 60
          },
          {
            "id": "q-magic_finger-78-4-vocab1",
            "question": "Find a word in the passage that means: \"Extremely unhappy, uncomfortable, cold, or wretched.\".",
            "options": [
              "Giant",
              "Ducks",
              "Locked",
              "Miserable"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Miserable\" means extremely unhappy, uncomfortable, cold, or wretched.",
            "visualClueEmoji": "🌧️",
            "points": 60
          },
          {
            "id": "q-magic_finger-78-4-comp2",
            "question": "Why did the giant ducks point their guns at the Gregg family's nest?",
            "options": [
              "Because they wanted to play a game of hide-and-seek",
              "To show the hunters what it feels like to be terrified and hunted",
              "Because they wanted the family to build them a bigger nest",
              "Because the ducks were practicing for an Olympic parade"
            ],
            "correctIndex": 1,
            "explanation": "The giant ducks wanted the Greggs to understand the terrible cruelty of hunting living creatures.",
            "visualClueEmoji": "🎯",
            "points": 60
          },
          {
            "id": "q-magic_finger-78-4-vocab2",
            "question": "Find a word in the passage that means: \"Begging earnestly with deep, heartfelt emotion and desperation.\".",
            "options": [
              "Giant",
              "Ducks",
              "Pleading",
              "Locked"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Pleading\" means begging earnestly with deep, heartfelt emotion and desperation.",
            "visualClueEmoji": "🙏",
            "points": 60
          }
        ]
      },
      {
        "id": "magic_finger-78-5",
        "dayNumber": 5,
        "title": "The Sacred Vow & The Flying Eggs",
        "subtitle": "Smashing the guns, feeding the birds, and changing their name!",
        "estReadingMinutes": 15,
        "totalWordCount": 620,
        "summary": "The giant ducks spare the family after they vow to protect nature. The magic spell lifts, the Greggs return to normal, smash their guns with sledgehammers, and change their family name to Egg!",
        "visualScenes": [
          {
            "id": "scene-magic_finger-78-5",
            "title": "The Sacred Vow & The Flying Eggs",
            "backgroundGradient": "from-purple-900 via-fuchsia-900 to-indigo-950",
            "illustrationType": "flying_eggs",
            "caption": "The reformed Egg family merrily scatters golden grain for flocks of birds while smashing their hunting rifles with hammers!",
            "characterAvatars": [
              {
                "name": "Mr. Egg",
                "emoji": "🔨",
                "speech": "We have smashed all our guns into tiny pieces!",
                "position": "left"
              },
              {
                "name": "Narrator",
                "emoji": "👧",
                "speech": "You are true friends to all the birds in the forest now!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "mf9",
                "x": 35,
                "y": 65,
                "label": "Smashed Guns",
                "icon": "🔨",
                "soundEffect": "magic",
                "funFact": "Mr. Egg used a giant blacksmith hammer to break every gun barrel!",
                "action": "sparkle"
              },
              {
                "id": "mf10",
                "x": 75,
                "y": 40,
                "label": "Golden Grain Feed",
                "icon": "🌾",
                "soundEffect": "bounce",
                "funFact": "Hundreds of wild ducks and songbirds gathered for the delicious feast!",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Magic Lifts",
            "paragraphs": [
              "The giant ducks nodded in agreement and lowered their guns. The moment the promise was made, a warm golden glow wrapped around the tree.",
              "Whoosh! The feathery wings melted away, and the Gregg family grew back into full-sized humans standing firmly on the green meadow.",
              "The four giant ducks shrank back into beautiful wild birds, quacking happily as they flew across the sparkling blue lake."
            ],
            "dialogueBites": [
              {
                "speaker": "Mrs. Gregg",
                "text": "My hands! My fingers! We are real humans once again!",
                "avatarEmoji": "👩‍🌾",
                "side": "left"
              },
              {
                "speaker": "Mr. Gregg",
                "text": "Thank goodness! Now let us make good on our sacred vow!",
                "avatarEmoji": "👨‍🌾",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-78-5-p1",
              "question": "What happened after the Greggs promised never to hunt again?",
              "options": [
                "They turned into stone statues in the garden",
                "They were transported to the moon in a flying saucer",
                "The wings disappeared and they grew back into full-sized humans"
              ],
              "correctInsightIndex": 2,
              "insight": "Keeping their word restored harmony between humans and wildlife.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Smashing the Guns to Pieces",
            "paragraphs": [
              "When I walked over to their farm later that afternoon, I saw an amazing sight.",
              "Mr. Gregg was swinging a huge iron sledgehammer, smashing every hunting rifle into twisted bits of scrap metal!",
              "Philip and William were filling buckets with sweet barley grain and breadcrumbs, calling all the wild birds down for a grand feast."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Egg",
                "text": "We have changed our name to the Egg family in honor of our feathered friends!",
                "avatarEmoji": "🔨",
                "side": "left"
              },
              {
                "speaker": "Narrator",
                "text": "Look at all the ducks landing on your lawn! They love you now!",
                "avatarEmoji": "👧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-78-5-p2",
              "question": "Find a word on this page that means: \"Willing and eager to give freely of kindness, food, and help.\".",
              "options": [
                "Generous",
                "Giant",
                "Ducks"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Generous\" (JEN-er-us) means willing and eager to give freely of kindness, food, and help.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "A New Sound in the Woods",
            "paragraphs": [
              "The newly named Egg family became the most generous guardians of wildlife in the entire countryside.",
              "Just as we were celebrating with hot cocoa, the distant sound of 'BANG! BANG!' echoed from the Cooper farm down the lane.",
              "I looked down at my right hand. A warm spark was starting to tingle at the tip of my forefinger... The Magic Finger was ready again!"
            ],
            "dialogueBites": [
              {
                "speaker": "Philip Egg",
                "text": "The Cooper family is shooting in the woods down the road!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Narrator",
                "text": "Don't worry, Philip... My Magic Finger is tingling again!",
                "avatarEmoji": "⚡",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-78-5-p3",
              "question": "What sound did the narrator hear at the end of the story?",
              "options": [
                "A train whistle blowing at the station",
                "Gunshots from the Cooper family hunting down the lane",
                "A rooster crowing at the break of dawn"
              ],
              "correctInsightIndex": 1,
              "insight": "Justice never rests when innocent creatures need a champion!",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Sledgehammer",
            "phonics": "SLEDJ-ham-er",
            "definition": "A large, heavy hammer used for breaking hard objects into pieces.",
            "funExample": "Mr. Egg raised the heavy sledgehammer and smashed his rifle.",
            "emoji": "🔨"
          },
          {
            "word": "Feast",
            "phonics": "FEEST",
            "definition": "A large, wonderful meal with abundant food celebrating a special event.",
            "funExample": "The garden was filled with a feast of barley for the wild birds.",
            "emoji": "🌾"
          },
          {
            "word": "Generous",
            "phonics": "JEN-er-us",
            "definition": "Willing and eager to give freely of kindness, food, and help.",
            "funExample": "The reformed family became generous protectors of every animal.",
            "emoji": "💖"
          }
        ],
        "microChallenge": {
          "id": "mc-magic_finger-78-5",
          "title": "Electric Spark Scramble",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from today's Magic Finger chapter!",
          "targetWord": "HAMMER",
          "scrambleLetters": [
            "R",
            "E",
            "M",
            "M",
            "A",
            "H"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-magic_finger-78-5-comp1",
            "question": "What did Mr. Gregg do to all of his hunting guns with the sledgehammer?",
            "options": [
              "He painted them gold and hung them in the hallway",
              "He buried them under the kitchen floorboards",
              "He smashed them into twisted pieces of scrap metal",
              "He sold them to the shopkeeper in town"
            ],
            "correctIndex": 2,
            "explanation": "Mr. Gregg completely destroyed all his hunting weapons so he could never shoot again.",
            "visualClueEmoji": "🔨",
            "points": 60
          },
          {
            "id": "q-magic_finger-78-5-vocab1",
            "question": "Find a word in the passage that means: \"A large, heavy hammer used for breaking hard objects into pieces.\".",
            "options": [
              "Giant",
              "Ducks",
              "Nodded",
              "Sledgehammer"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Sledgehammer\" means a large, heavy hammer used for breaking hard objects into pieces.",
            "visualClueEmoji": "🔨",
            "points": 60
          },
          {
            "id": "q-magic_finger-78-5-comp2",
            "question": "What family name did the Greggs choose to adopt in honor of their bird adventure?",
            "options": [
              "The Egg family",
              "The Feather family",
              "The Wonka family",
              "The Sparrow family"
            ],
            "correctIndex": 0,
            "explanation": "To show their deep love for birds, they changed their name from Gregg to Egg.",
            "visualClueEmoji": "🥚",
            "points": 60
          },
          {
            "id": "q-magic_finger-78-5-vocab2",
            "question": "Find a word in the passage that means: \"A large, wonderful meal with abundant food celebrating a special event.\".",
            "options": [
              "Giant",
              "Feast",
              "Ducks",
              "Nodded"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Feast\" means a large, wonderful meal with abundant food celebrating a special event.",
            "visualClueEmoji": "🌾",
            "points": 60
          }
        ]
      }
    ],
    "9+": [
      {
        "id": "magic_finger-9plus-1",
        "dayNumber": 1,
        "title": "The Mysterious Tingle",
        "subtitle": "A strange spark and whiskers on the teacher!",
        "estReadingMinutes": 15,
        "totalWordCount": 750,
        "summary": "An eight-year-old girl discovers she has a mysterious Magic Finger. Whenever she becomes angry and sees red, an electric spark leaps from her finger tip with astonishing magical surprises.",
        "visualScenes": [
          {
            "id": "scene-magic_finger-9plus-1",
            "title": "The Mysterious Tingle",
            "backgroundGradient": "from-purple-900 via-fuchsia-900 to-indigo-950",
            "illustrationType": "mrs_winter_cat",
            "caption": "Sparks flash from the narrator's fingertip! Mrs. Winter gasps as soft cat whiskers and a bushy tail begin to sprout!",
            "characterAvatars": [
              {
                "name": "Narrator",
                "emoji": "👧",
                "speech": "My forefinger began to tingle with electric sparks!",
                "position": "left"
              },
              {
                "name": "Mrs. Winter",
                "emoji": "👩‍🏫",
                "speech": "Goodness gracious! Why is my nose twitching like a cat?",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "mf1",
                "x": 35,
                "y": 55,
                "label": "Electric Spark",
                "icon": "⚡",
                "soundEffect": "magic",
                "funFact": "The Magic Finger makes a buzzing sound like a tiny trapped bee!",
                "action": "sparkle"
              },
              {
                "id": "mf2",
                "x": 75,
                "y": 40,
                "label": "Blackboard",
                "icon": "📝",
                "soundEffect": "bounce",
                "funFact": "Mrs. Winter was trying to teach the class how to spell 'cat'!",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Tingling Forefinger",
            "paragraphs": [
              "Deep within my right hand lies an enigmatic and electrifying secret that nobody can explain. It happens whenever I get terribly angry and see red all around me.",
              "First, my whole body gets scorching hot like a little oven. Then, a peculiar tingle starts at the tip of my right forefinger.",
              "A bright flash of blue electricity leaps out, making a loud buzzing sound like an angry bumblebee!"
            ],
            "dialogueBites": [
              {
                "speaker": "Narrator",
                "text": "Whenever I get furious, my finger starts to tingle and glow!",
                "avatarEmoji": "👧",
                "side": "left"
              },
              {
                "speaker": "Grandma",
                "text": "Be careful where you point that glowing finger, my dear!",
                "avatarEmoji": "👵",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-9plus-1-p1",
              "question": "What happens right before the Magic Finger shoots electricity?",
              "options": [
                "She begins singing a sleepy lullaby in the garden",
                "The girl's body gets scorching hot and her forefinger starts tingling",
                "She eats three whole bowls of cabbage soup"
              ],
              "correctInsightIndex": 1,
              "insight": "Her emotional spark triggers the magical surge of energy!",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Mrs. Winter's Spelling Lesson",
            "paragraphs": [
              "One morning at school, my strict teacher Mrs. Winter yelled at me in front of the whole classroom because I could not spell the word 'cat'.",
              "She called me a stupid little girl and made me stand in the corner. I grew so angry that red sparks flew across my eyes.",
              "Before I could stop myself, my finger pointed straight at Mrs. Winter. An astonishing flash lit up the blackboard!"
            ],
            "dialogueBites": [
              {
                "speaker": "Mrs. Winter",
                "text": "Stand in the corner this instant and think about your spelling!",
                "avatarEmoji": "👩‍🏫",
                "side": "right"
              },
              {
                "speaker": "Narrator",
                "text": "I did not mean to zap her, but the sparks were unstoppable!",
                "avatarEmoji": "👧",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-9plus-1-p2",
              "question": "Find a word on this page that means: \"Strange, unusual, or curious in a surprising way.\".",
              "options": [
                "Deep",
                "Within",
                "Peculiar"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Peculiar\" (peh-KYOO-lee-er) means strange, unusual, or curious in a surprising way.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "Whiskers and a Bushy Tail",
            "paragraphs": [
              "At the precise instant the electric beam made contact with Mrs. Winter, long black whiskers sprouted right out of her cheeks!",
              "Then, a large furry tail popped out from under her skirt, swishing back and forth like a real ginger tabby cat.",
              "Mrs. Winter meowed in horror and dashed out of the schoolhouse. I promised myself I would never use the Magic Finger again... until the Gregg family went hunting."
            ],
            "dialogueBites": [
              {
                "speaker": "Classmates",
                "text": "Look at Mrs. Winter! She has real cat whiskers and a bushy tail!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Mrs. Winter",
                "text": "Meow! Goodness me! What has happened to my nose?",
                "avatarEmoji": "🐱",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-9plus-1-p3",
              "question": "What grew on Mrs. Winter after she got zapped?",
              "options": [
                "Long whiskers on her cheeks and a bushy furry tail",
                "Golden eagle wings and silver feathers",
                "A pair of shiny green frog legs"
              ],
              "correctInsightIndex": 0,
              "insight": "The Magic Finger gives naughty bullies a taste of their own medicine!",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Tingle",
            "phonics": "TING-gul",
            "definition": "A prickling, stinging feeling like tiny electric sparks on your skin.",
            "funExample": "Her forefinger began to tingle with electric energy.",
            "emoji": "⚡"
          },
          {
            "word": "Astonishing",
            "phonics": "uh-STON-ish-ing",
            "definition": "Extremely surprising, amazing, and wondrous to behold.",
            "funExample": "It was an astonishing sight when Mrs. Winter sprouted cat whiskers!",
            "emoji": "😲"
          },
          {
            "word": "Peculiar",
            "phonics": "peh-KYOO-lee-er",
            "definition": "Strange, unusual, or curious in a surprising way.",
            "funExample": "The classroom grew quiet at this peculiar transformation.",
            "emoji": "🔍"
          }
        ],
        "microChallenge": {
          "id": "mc-magic_finger-9plus-1",
          "title": "Electric Spark Scramble",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from today's Magic Finger chapter!",
          "targetWord": "SPARK",
          "scrambleLetters": [
            "K",
            "R",
            "A",
            "P",
            "S"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-magic_finger-9plus-1-comp1",
            "question": "Why did the narrator accidentally zap Mrs. Winter with the Magic Finger?",
            "options": [
              "Because Mrs. Winter asked for a glass of apple juice",
              "Because Mrs. Winter cruelly yelled at her and made her stand in the corner",
              "Because the class was playing a game of tag on the lawn",
              "Because Mrs. Winter wanted to learn how to fly"
            ],
            "correctIndex": 1,
            "explanation": "Mrs. Winter humiliated the narrator, causing her to see red and trigger the Magic Finger.",
            "visualClueEmoji": "👩‍🏫",
            "points": 60
          },
          {
            "id": "q-magic_finger-9plus-1-vocab1",
            "question": "Find a word in the passage that means: \"A prickling, stinging feeling like tiny electric sparks on your skin.\".",
            "options": [
              "Deep",
              "Within",
              "Tingle",
              "Right"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Tingle\" means a prickling, stinging feeling like tiny electric sparks on your skin.",
            "visualClueEmoji": "⚡",
            "points": 60
          },
          {
            "id": "q-magic_finger-9plus-1-comp2",
            "question": "What physical clue tells the girl the Magic Finger is about to fire?",
            "options": [
              "Her body feels scorching hot and her forefinger begins to tingle",
              "Her ears turn bright purple and begin to flap",
              "Her toes freeze into solid blocks of ice",
              "She starts speaking backwards like a wizard"
            ],
            "correctIndex": 0,
            "explanation": "The story explains that heat and a tingling forefinger always signal the electric magic spark.",
            "visualClueEmoji": "⚡",
            "points": 60
          },
          {
            "id": "q-magic_finger-9plus-1-vocab2",
            "question": "Find a word in the passage that means: \"Extremely surprising, amazing, and wondrous to behold.\".",
            "options": [
              "Deep",
              "Within",
              "Right",
              "Astonishing"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Astonishing\" means extremely surprising, amazing, and wondrous to behold.",
            "visualClueEmoji": "😲",
            "points": 60
          }
        ]
      },
      {
        "id": "magic_finger-9plus-2",
        "dayNumber": 2,
        "title": "The Duck Hunt & Seeing Red",
        "subtitle": "Standing up for sixteen innocent wild ducks!",
        "estReadingMinutes": 15,
        "totalWordCount": 750,
        "summary": "The neighboring Gregg family shoots sixteen beautiful wild ducks for sport. When they laugh at the narrator's pleas for mercy, the girl's Magic Finger unleashes a massive electric beam.",
        "visualScenes": [
          {
            "id": "scene-magic_finger-9plus-2",
            "title": "The Duck Hunt & Seeing Red",
            "backgroundGradient": "from-purple-900 via-fuchsia-900 to-indigo-950",
            "illustrationType": "magic_finger_spark",
            "caption": "A dazzling crimson beam strikes the Gregg farm as the girl unleashes the power of the Magic Finger!",
            "characterAvatars": [
              {
                "name": "Mr. Gregg",
                "emoji": "👨‍🌾",
                "speech": "Hunting is great sport! Look at our sixteen ducks!",
                "position": "right"
              },
              {
                "name": "Narrator",
                "emoji": "👧",
                "speech": "Stop shooting the ducks! They have done you no harm!",
                "position": "left"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "mf3",
                "x": 45,
                "y": 60,
                "label": "Magic Beam",
                "icon": "💥",
                "soundEffect": "magic",
                "funFact": "The flash illuminated the entire forest in glowing violet light!",
                "action": "sparkle"
              },
              {
                "id": "mf4",
                "x": 80,
                "y": 35,
                "label": "Wild Ducks",
                "icon": "🦆",
                "soundEffect": "bounce",
                "funFact": "The flock flew high above the pond, seeking safety from the guns.",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Gregg Family's Guns",
            "paragraphs": [
              "The Gregg family lived in the farm next to ours: Mr. Gregg, Mrs. Gregg, and their two boys, Philip and William.",
              "They were passionate about hunting. Every Saturday morning, they grabbed their heavy guns and marched into the woods to shoot ducks and deer.",
              "I hated seeing gentle wild creatures getting hurt. I begged Philip and William to play with me instead, but they only laughed."
            ],
            "dialogueBites": [
              {
                "speaker": "Philip",
                "text": "Go away, girl! Shooting ducks is the greatest fun in the world!",
                "avatarEmoji": "👦",
                "side": "right"
              },
              {
                "speaker": "Narrator",
                "text": "Those ducks love their families just like you love yours!",
                "avatarEmoji": "👧",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-9plus-2-p1",
              "question": "What did the Gregg family do every Saturday morning?",
              "options": [
                "They planted sweet apple trees in their garden",
                "They baked warm cinnamon bread for the neighbors",
                "They marched into the woods with guns to shoot ducks and deer"
              ],
              "correctInsightIndex": 2,
              "insight": "Their obsession with hunting hurt innocent wildlife in the forest.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Sixteen Fallen Ducks",
            "paragraphs": [
              "One crisp Saturday afternoon, I saw the Greggs returning home from the lake carrying sixteen dead wild ducks over their shoulders.",
              "My heart felt heavy and sad. I ran across the meadow and shouted at Mr. Gregg, pleading with him to stop this cruel sport.",
              "Instead of listening, Mr. Gregg told me to mind my own business, and both boys made mocking faces at me."
            ],
            "dialogueBites": [
              {
                "speaker": "Narrator",
                "text": "Please stop shooting the innocent ducks! It is unfair and cruel!",
                "avatarEmoji": "👧",
                "side": "left"
              },
              {
                "speaker": "Mr. Gregg",
                "text": "Mind your own business, little girl, and go play with your dolls!",
                "avatarEmoji": "👨‍🌾",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-9plus-2-p2",
              "question": "Find a word on this page that means: \"Laughing at someone in a mean, teasing, and unkind way.\".",
              "options": [
                "Mocking",
                "Gregg",
                "Family"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Mocking\" (MOK-ing) means laughing at someone in a mean, teasing, and unkind way.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Crimson Flash",
            "paragraphs": [
              "Their mocking laughter made everything inside me turn white-hot. I saw a furious crimson light cover the trees.",
              "Before I could count to three, my forefinger snapped forward. A dazzling beam of electric magic flashed straight at the Gregg family!",
              "The electric spark swept over Mr. Gregg, Mrs. Gregg, Philip, and William. Then silence fell over the farm, and a strange spell began to work."
            ],
            "dialogueBites": [
              {
                "speaker": "Narrator",
                "text": "I point my finger straight at you! See how you like being hunted!",
                "avatarEmoji": "👧",
                "side": "left"
              },
              {
                "speaker": "William",
                "text": "Look at her finger glowing! What is that buzzing spark?",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-9plus-2-p3",
              "question": "Why did the narrator point her Magic Finger at the Greggs?",
              "options": [
                "Because they forgot to invite her to breakfast",
                "Because they laughed and mocked her after shooting sixteen wild ducks",
                "Because they painted their tractor bright green"
              ],
              "correctInsightIndex": 1,
              "insight": "Her anger was born from defending innocent living creatures.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Cruel",
            "phonics": "KROO-ul",
            "definition": "Causing pain or suffering to living creatures without care.",
            "funExample": "She believed shooting gentle animals for fun was cruel.",
            "emoji": "💔"
          },
          {
            "word": "Furious",
            "phonics": "FYOOR-ee-us",
            "definition": "Extremely angry; filled with unstoppable, boiling rage.",
            "funExample": "The girl grew furious when the hunters laughed at her.",
            "emoji": "😡"
          },
          {
            "word": "Mocking",
            "phonics": "MOK-ing",
            "definition": "Laughing at someone in a mean, teasing, and unkind way.",
            "funExample": "Philip gave a mocking chuckle as he marched past.",
            "emoji": "😏"
          }
        ],
        "microChallenge": {
          "id": "mc-magic_finger-9plus-2",
          "title": "Electric Spark Scramble",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from today's Magic Finger chapter!",
          "targetWord": "FEATHER",
          "scrambleLetters": [
            "R",
            "E",
            "H",
            "T",
            "A",
            "E",
            "F"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-magic_finger-9plus-2-comp1",
            "question": "How many wild ducks did the Gregg family shoot on that Saturday afternoon?",
            "options": [
              "Only two baby ducks",
              "Fifty golden geese",
              "Sixteen wild ducks",
              "None, because it was raining"
            ],
            "correctIndex": 2,
            "explanation": "The text specifically mentions that the Greggs shot sixteen dead wild ducks.",
            "visualClueEmoji": "🦆",
            "points": 60
          },
          {
            "id": "q-magic_finger-9plus-2-vocab1",
            "question": "Find a word in the passage that means: \"Causing pain or suffering to living creatures without care.\".",
            "options": [
              "Cruel",
              "Gregg",
              "Family",
              "Lived"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Cruel\" means causing pain or suffering to living creatures without care.",
            "visualClueEmoji": "💔",
            "points": 60
          },
          {
            "id": "q-magic_finger-9plus-2-comp2",
            "question": "How did Mr. Gregg and his sons react when the girl begged them to stop hunting?",
            "options": [
              "They immediately apologized and put their guns away",
              "They invited her into their kitchen for tea and cake",
              "They promised never to enter the woods again",
              "They mocked her, laughed, and told her to mind her own business"
            ],
            "correctIndex": 3,
            "explanation": "The Gregg family made mocking faces and dismissed her pleas.",
            "visualClueEmoji": "😤",
            "points": 60
          },
          {
            "id": "q-magic_finger-9plus-2-vocab2",
            "question": "Find a word in the passage that means: \"Extremely angry; filled with unstoppable, boiling rage.\".",
            "options": [
              "Gregg",
              "Furious",
              "Family",
              "Lived"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Furious\" means extremely angry; filled with unstoppable, boiling rage.",
            "visualClueEmoji": "😡",
            "points": 60
          }
        ]
      },
      {
        "id": "magic_finger-9plus-3",
        "dayNumber": 3,
        "title": "Wings, Beaks & Giant Ducks",
        "subtitle": "Waking up the size of birds with giant ducks in the kitchen!",
        "estReadingMinutes": 15,
        "totalWordCount": 750,
        "summary": "The next morning, the Gregg family wakes up to an astonishing shock: their arms have turned into feathery wings and their bodies have shrunk to tiny bird size, while giant wild ducks occupy their house!",
        "visualScenes": [
          {
            "id": "scene-magic_finger-9plus-3",
            "title": "Wings, Beaks & Giant Ducks",
            "backgroundGradient": "from-purple-900 via-fuchsia-900 to-indigo-950",
            "illustrationType": "duck_family_wings",
            "caption": "The tiny Gregg family flaps their feathery wings in astonishment while four giant ducks march into their home!",
            "characterAvatars": [
              {
                "name": "Mr. Gregg",
                "emoji": "🪶",
                "speech": "Where are my arms? I have grown duck wings!",
                "position": "left"
              },
              {
                "name": "Giant Duck",
                "emoji": "🦆",
                "speech": "Quack! This looks like a splendid farmhouse for us!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "mf5",
                "x": 30,
                "y": 50,
                "label": "Feathery Wings",
                "icon": "🪶",
                "soundEffect": "bounce",
                "funFact": "Philip and William learned to flap their wings and hover above the rug!",
                "action": "bounce"
              },
              {
                "id": "mf6",
                "x": 70,
                "y": 45,
                "label": "Giant Duck Footprint",
                "icon": "🐾",
                "soundEffect": "magic",
                "funFact": "The ducks were now eight feet tall with human arms and hands!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Feathered Morning Surprise",
            "paragraphs": [
              "The next morning, Mr. Gregg woke up and reached out to brush his teeth. But when he looked at his arm, it wasn't an arm at all!",
              "In its place was a long, silky wing covered in warm brown feathers! He jumped out of bed and discovered he had shrunk to miniature size.",
              "Mrs. Gregg, Philip, and William were also tiny feathered creatures, no taller than teacups, staring in utter astonishment."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Gregg",
                "text": "Look at my body! I have brown wings instead of arms!",
                "avatarEmoji": "🪶",
                "side": "left"
              },
              {
                "speaker": "Mrs. Gregg",
                "text": "Oh dear me! How are we going to cook breakfast with wings?",
                "avatarEmoji": "🪽",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-9plus-3-p1",
              "question": "What did Mr. Gregg find when he woke up in the morning?",
              "options": [
                "He had shrunk to miniature size and grown feathery wings instead of arms",
                "He had turned into a tall green wooden tree",
                "He had turned into a shiny silver motorcar"
              ],
              "correctInsightIndex": 0,
              "insight": "The Magic Finger swapped their human bodies for bird-like features!",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Learning to Fly",
            "paragraphs": [
              "Philip and William hopped onto the windowsill. They began flapping their wings up and down with great speed.",
              "Whoosh! Up into the air they soared, zooming around the bedroom ceiling like lively bumblebees.",
              "Mr. and Mrs. Gregg spread their feathered wings and joined their sons, gliding smoothly out the open window into the bright sunshine."
            ],
            "dialogueBites": [
              {
                "speaker": "William",
                "text": "Look at me, Dad! Flapping my wings is so easy and fun!",
                "avatarEmoji": "🪽",
                "side": "left"
              },
              {
                "speaker": "Mr. Gregg",
                "text": "Keep flapping, boys! Let's fly down to the garden to see our house!",
                "avatarEmoji": "🪶",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-9plus-3-p2",
              "question": "Find a word on this page that means: \"Moving wings quickly up and down to rise into the air.\".",
              "options": [
                "Next",
                "Flapping",
                "Morning"
              ],
              "correctInsightIndex": 1,
              "insight": "\"Flapping\" (FLAP-ing) means moving wings quickly up and down to rise into the air.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Giant Ducks Take Over",
            "paragraphs": [
              "When the feathered Gregg family flew down toward their front door, they saw an astonishing sight.",
              "Four colossal wild ducks, standing tall on their hind legs and sporting human arms, were marching into the Gregg farmhouse!",
              "One duck held Mr. Gregg's favorite hunting gun, while the mother duck prepared to boil tea on the kitchen stove. The tables had turned!"
            ],
            "dialogueBites": [
              {
                "speaker": "Giant Duck",
                "text": "Quack! What a lovely house with soft beds and a warm stove!",
                "avatarEmoji": "🦆",
                "side": "right"
              },
              {
                "speaker": "Mr. Gregg",
                "text": "Hey! That is my house! You cannot sleep in our beds!",
                "avatarEmoji": "🪶",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-9plus-3-p3",
              "question": "Who took over the Gregg farmhouse while the family was flying?",
              "options": [
                "A friendly family of squirrels carrying acorns",
                "Three sleepy brown bears wearing pajamas",
                "Four colossal wild ducks with human arms and hands"
              ],
              "correctInsightIndex": 2,
              "insight": "The hunters were locked out of their own home by the animals they hunted.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Astonishment",
            "phonics": "uh-STON-ish-ment",
            "definition": "A feeling of overwhelming shock, great wonder, and disbelief.",
            "funExample": "Mr. Gregg stared at his new feathery wings in total astonishment.",
            "emoji": "😲"
          },
          {
            "word": "Miniature",
            "phonics": "MIN-ee-uh-chur",
            "definition": "Very small; shrunken down to a tiny, compact size.",
            "funExample": "The Greggs were now miniature humans no bigger than robins.",
            "emoji": "🔬"
          },
          {
            "word": "Flapping",
            "phonics": "FLAP-ing",
            "definition": "Moving wings quickly up and down to rise into the air.",
            "funExample": "The boys practiced flapping their wings across the bedroom.",
            "emoji": "🪽"
          }
        ],
        "microChallenge": {
          "id": "mc-magic_finger-9plus-3",
          "title": "Electric Spark Scramble",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from today's Magic Finger chapter!",
          "targetWord": "WINGS",
          "scrambleLetters": [
            "S",
            "G",
            "N",
            "I",
            "W"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-magic_finger-9plus-3-comp1",
            "question": "What replaced the arms of the Gregg family when they woke up?",
            "options": [
              "Wooden branches with green leaves",
              "Long golden dragon tentacles",
              "Shiny steel robot arms",
              "Silky wings covered in warm feathers"
            ],
            "correctIndex": 3,
            "explanation": "The magic spell transformed their human arms into bird-like feathered wings.",
            "visualClueEmoji": "🪶",
            "points": 60
          },
          {
            "id": "q-magic_finger-9plus-3-vocab1",
            "question": "Find a word in the passage that means: \"A feeling of overwhelming shock, great wonder, and disbelief.\".",
            "options": [
              "Next",
              "Astonishment",
              "Morning",
              "Gregg"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Astonishment\" means a feeling of overwhelming shock, great wonder, and disbelief.",
            "visualClueEmoji": "😲",
            "points": 60
          },
          {
            "id": "q-magic_finger-9plus-3-comp2",
            "question": "What were the giant wild ducks doing inside the Gregg house?",
            "options": [
              "Cleaning the windows and baking birthday cookies for the family",
              "Painting the walls bright pink and singing choir songs",
              "Moving into the house, boiling tea, and holding the hunting guns",
              "Fixing the tractor engine in the barn"
            ],
            "correctIndex": 2,
            "explanation": "The giant ducks occupied the house and held the guns, reversing the roles of hunter and hunted.",
            "visualClueEmoji": "🦆",
            "points": 60
          },
          {
            "id": "q-magic_finger-9plus-3-vocab2",
            "question": "Find a word in the passage that means: \"Very small; shrunken down to a tiny, compact size.\".",
            "options": [
              "Miniature",
              "Next",
              "Morning",
              "Gregg"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Miniature\" means very small; shrunken down to a tiny, compact size.",
            "visualClueEmoji": "🔬",
            "points": 60
          }
        ]
      },
      {
        "id": "magic_finger-9plus-4",
        "dayNumber": 4,
        "title": "The Tree Nest & The Storm",
        "subtitle": "Sleeping on twigs and facing the barrels of the guns!",
        "estReadingMinutes": 15,
        "totalWordCount": 750,
        "summary": "Exiled from their house, the miniature Greggs build a nest in a high tree and eat raw worms. In the morning, the giant ducks corner them with guns, forcing them to see the horror of hunting.",
        "visualScenes": [
          {
            "id": "scene-magic_finger-9plus-4",
            "title": "The Tree Nest & The Storm",
            "backgroundGradient": "from-purple-900 via-fuchsia-900 to-indigo-950",
            "illustrationType": "tree_nest_life",
            "caption": "The four tiny Greggs huddle inside their leafy tree nest as giant ducks aim guns upward from the ground!",
            "characterAvatars": [
              {
                "name": "Mrs. Gregg",
                "emoji": "🪽",
                "speech": "Please do not shoot us! We are only little humans!",
                "position": "left"
              },
              {
                "name": "Duck Leader",
                "emoji": "🦆",
                "speech": "You shot sixteen of our family yesterday! Why shouldn't we shoot you?",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "mf7",
                "x": 40,
                "y": 35,
                "label": "Tree Nest",
                "icon": "🪺",
                "soundEffect": "bounce",
                "funFact": "Mr. Gregg wove sticks and dry leaves together to keep his family warm!",
                "action": "bounce"
              },
              {
                "id": "mf8",
                "x": 75,
                "y": 70,
                "label": "Hunting Guns",
                "icon": "💥",
                "soundEffect": "magic",
                "funFact": "The giant ducks held the guns firmly with their human hands!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Building a High Nest",
            "paragraphs": [
              "Because the giant ducks locked all the doors, the miniature Gregg family had nowhere to sleep.",
              "Mr. Gregg flew up into the highest branches of an old oak tree. With twigs, moss, and dry leaves, he built a cozy bird nest.",
              "For supper, the boys tried eating barley seeds and wriggly worms, making funny disgusted faces at every bite."
            ],
            "dialogueBites": [
              {
                "speaker": "Philip",
                "text": "Dad, I cannot eat this worm! It keeps wiggling on my tongue!",
                "avatarEmoji": "🪽",
                "side": "left"
              },
              {
                "speaker": "Mr. Gregg",
                "text": "Eat the seeds instead, son! We must keep our strength up!",
                "avatarEmoji": "🪶",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-9plus-4-p1",
              "question": "Where did the miniature Gregg family sleep that night?",
              "options": [
                "In the soft glove compartment of their car",
                "In a high oak tree nest made of twigs, moss, and leaves",
                "Under a shiny flower pot in the tomato garden"
              ],
              "correctInsightIndex": 1,
              "insight": "Living like wild birds gave them a true taste of animal life in nature.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "A Storm in the Treetops",
            "paragraphs": [
              "During the night, cold wind howled through the forest and heavy rain poured down from black clouds.",
              "The four tiny feathered humans clung together in the swaying nest, feeling wet, cold, and miserable.",
              "Mr. Gregg thought about all the wild animals that slept in freezing woods while he had sat warm by his fireplace."
            ],
            "dialogueBites": [
              {
                "speaker": "Mrs. Gregg",
                "text": "Hold onto me, children! The wind is shaking our little nest!",
                "avatarEmoji": "🪽",
                "side": "left"
              },
              {
                "speaker": "Mr. Gregg",
                "text": "I never knew how hard and cold it was to live out in the wild.",
                "avatarEmoji": "🪶",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-9plus-4-p2",
              "question": "Find a word on this page that means: \"Filled with extreme, heart-pounding fear and panic.\".",
              "options": [
                "Giant",
                "Ducks",
                "Terrified"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Terrified\" (TAIR-uh-fide) means filled with extreme, heart-pounding fear and panic.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Ducks at Dawn",
            "paragraphs": [
              "At sunrise, the miniature family awoke to hear heavy footsteps crunching on the wet ground below.",
              "The four giant ducks stood beneath the tree, pointing the heavy hunting guns straight up at the nest!",
              "The Greggs were terrified. Mr. Gregg began pleading with tears in his eyes: 'Please don't shoot! We swear we will never hurt a bird again!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Duck Leader",
                "text": "You shot sixteen of our friends yesterday! Why should we show mercy?",
                "avatarEmoji": "🦆",
                "side": "right"
              },
              {
                "speaker": "Mr. Gregg",
                "text": "I was foolish and cruel! I promise we will smash our guns forever!",
                "avatarEmoji": "🪶",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-9plus-4-p3",
              "question": "What promise did Mr. Gregg make to the giant ducks?",
              "options": [
                "He promised never to hurt animals again and to smash all his guns forever",
                "He promised to buy them bigger boots for the winter",
                "He promised to teach them how to drive the farm tractor"
              ],
              "correctInsightIndex": 0,
              "insight": "Experiencing fear firsthand transformed Mr. Gregg's heart forever.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Miserable",
            "phonics": "MIZ-er-uh-bul",
            "definition": "Extremely unhappy, uncomfortable, cold, or wretched.",
            "funExample": "The cold rain made their night in the tree truly miserable.",
            "emoji": "🌧️"
          },
          {
            "word": "Pleading",
            "phonics": "PLEED-ing",
            "definition": "Begging earnestly with deep, heartfelt emotion and desperation.",
            "funExample": "Mr. Gregg was pleading with the giant ducks for mercy.",
            "emoji": "🙏"
          },
          {
            "word": "Terrified",
            "phonics": "TAIR-uh-fide",
            "definition": "Filled with extreme, heart-pounding fear and panic.",
            "funExample": "The miniature family was terrified by the sight of the gun barrels.",
            "emoji": "😨"
          }
        ],
        "microChallenge": {
          "id": "mc-magic_finger-9plus-4",
          "title": "Electric Spark Scramble",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from today's Magic Finger chapter!",
          "targetWord": "MERCIES",
          "scrambleLetters": [
            "S",
            "E",
            "I",
            "C",
            "R",
            "E",
            "M"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-magic_finger-9plus-4-comp1",
            "question": "What did the miniature Gregg boys eat for supper in their tree nest?",
            "options": [
              "Barley seeds and wriggly worms",
              "Hot roast chicken with gravy",
              "Fresh strawberry ice cream with chocolate syrup",
              "Warm macaroni and cheese"
            ],
            "correctIndex": 0,
            "explanation": "As birds in the wild, they had to eat barley seeds and worms instead of cooked food.",
            "visualClueEmoji": "🪱",
            "points": 60
          },
          {
            "id": "q-magic_finger-9plus-4-vocab1",
            "question": "Find a word in the passage that means: \"Extremely unhappy, uncomfortable, cold, or wretched.\".",
            "options": [
              "Giant",
              "Ducks",
              "Locked",
              "Miserable"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Miserable\" means extremely unhappy, uncomfortable, cold, or wretched.",
            "visualClueEmoji": "🌧️",
            "points": 60
          },
          {
            "id": "q-magic_finger-9plus-4-comp2",
            "question": "Why did the giant ducks point their guns at the Gregg family's nest?",
            "options": [
              "Because they wanted to play a game of hide-and-seek",
              "To show the hunters what it feels like to be terrified and hunted",
              "Because they wanted the family to build them a bigger nest",
              "Because the ducks were practicing for an Olympic parade"
            ],
            "correctIndex": 1,
            "explanation": "The giant ducks wanted the Greggs to understand the terrible cruelty of hunting living creatures.",
            "visualClueEmoji": "🎯",
            "points": 60
          },
          {
            "id": "q-magic_finger-9plus-4-vocab2",
            "question": "Find a word in the passage that means: \"Begging earnestly with deep, heartfelt emotion and desperation.\".",
            "options": [
              "Giant",
              "Ducks",
              "Pleading",
              "Locked"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Pleading\" means begging earnestly with deep, heartfelt emotion and desperation.",
            "visualClueEmoji": "🙏",
            "points": 60
          }
        ]
      },
      {
        "id": "magic_finger-9plus-5",
        "dayNumber": 5,
        "title": "The Sacred Vow & The Flying Eggs",
        "subtitle": "Smashing the guns, feeding the birds, and changing their name!",
        "estReadingMinutes": 15,
        "totalWordCount": 750,
        "summary": "The giant ducks spare the family after they vow to protect nature. The magic spell lifts, the Greggs return to normal, smash their guns with sledgehammers, and change their family name to Egg!",
        "visualScenes": [
          {
            "id": "scene-magic_finger-9plus-5",
            "title": "The Sacred Vow & The Flying Eggs",
            "backgroundGradient": "from-purple-900 via-fuchsia-900 to-indigo-950",
            "illustrationType": "flying_eggs",
            "caption": "The reformed Egg family merrily scatters golden grain for flocks of birds while smashing their hunting rifles with hammers!",
            "characterAvatars": [
              {
                "name": "Mr. Egg",
                "emoji": "🔨",
                "speech": "We have smashed all our guns into tiny pieces!",
                "position": "left"
              },
              {
                "name": "Narrator",
                "emoji": "👧",
                "speech": "You are true friends to all the birds in the forest now!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "mf9",
                "x": 35,
                "y": 65,
                "label": "Smashed Guns",
                "icon": "🔨",
                "soundEffect": "magic",
                "funFact": "Mr. Egg used a giant blacksmith hammer to break every gun barrel!",
                "action": "sparkle"
              },
              {
                "id": "mf10",
                "x": 75,
                "y": 40,
                "label": "Golden Grain Feed",
                "icon": "🌾",
                "soundEffect": "bounce",
                "funFact": "Hundreds of wild ducks and songbirds gathered for the delicious feast!",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Magic Lifts",
            "paragraphs": [
              "The giant ducks nodded in agreement and lowered their guns. The moment the promise was made, a warm golden glow wrapped around the tree.",
              "Whoosh! The feathery wings melted away, and the Gregg family grew back into full-sized humans standing firmly on the green meadow.",
              "The four giant ducks shrank back into beautiful wild birds, quacking happily as they flew across the sparkling blue lake."
            ],
            "dialogueBites": [
              {
                "speaker": "Mrs. Gregg",
                "text": "My hands! My fingers! We are real humans once again!",
                "avatarEmoji": "👩‍🌾",
                "side": "left"
              },
              {
                "speaker": "Mr. Gregg",
                "text": "Thank goodness! Now let us make good on our sacred vow!",
                "avatarEmoji": "👨‍🌾",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-9plus-5-p1",
              "question": "What happened after the Greggs promised never to hunt again?",
              "options": [
                "They turned into stone statues in the garden",
                "They were transported to the moon in a flying saucer",
                "The wings disappeared and they grew back into full-sized humans"
              ],
              "correctInsightIndex": 2,
              "insight": "Keeping their word restored harmony between humans and wildlife.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Smashing the Guns to Pieces",
            "paragraphs": [
              "When I walked over to their farm later that afternoon, I saw an amazing sight.",
              "Mr. Gregg was swinging a huge iron sledgehammer, smashing every hunting rifle into twisted bits of scrap metal!",
              "Philip and William were filling buckets with sweet barley grain and breadcrumbs, calling all the wild birds down for a grand feast."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Egg",
                "text": "We have changed our name to the Egg family in honor of our feathered friends!",
                "avatarEmoji": "🔨",
                "side": "left"
              },
              {
                "speaker": "Narrator",
                "text": "Look at all the ducks landing on your lawn! They love you now!",
                "avatarEmoji": "👧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-9plus-5-p2",
              "question": "Find a word on this page that means: \"Willing and eager to give freely of kindness, food, and help.\".",
              "options": [
                "Generous",
                "Giant",
                "Ducks"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Generous\" (JEN-er-us) means willing and eager to give freely of kindness, food, and help.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "A New Sound in the Woods",
            "paragraphs": [
              "The newly named Egg family became the most generous guardians of wildlife in the entire countryside.",
              "Just as we were celebrating with hot cocoa, the distant sound of 'BANG! BANG!' echoed from the Cooper farm down the lane.",
              "I looked down at my right hand. A warm spark was starting to tingle at the tip of my forefinger... The Magic Finger was ready again!"
            ],
            "dialogueBites": [
              {
                "speaker": "Philip Egg",
                "text": "The Cooper family is shooting in the woods down the road!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Narrator",
                "text": "Don't worry, Philip... My Magic Finger is tingling again!",
                "avatarEmoji": "⚡",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-magic_finger-9plus-5-p3",
              "question": "What sound did the narrator hear at the end of the story?",
              "options": [
                "A train whistle blowing at the station",
                "Gunshots from the Cooper family hunting down the lane",
                "A rooster crowing at the break of dawn"
              ],
              "correctInsightIndex": 1,
              "insight": "Justice never rests when innocent creatures need a champion!",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Sledgehammer",
            "phonics": "SLEDJ-ham-er",
            "definition": "A large, heavy hammer used for breaking hard objects into pieces.",
            "funExample": "Mr. Egg raised the heavy sledgehammer and smashed his rifle.",
            "emoji": "🔨"
          },
          {
            "word": "Feast",
            "phonics": "FEEST",
            "definition": "A large, wonderful meal with abundant food celebrating a special event.",
            "funExample": "The garden was filled with a feast of barley for the wild birds.",
            "emoji": "🌾"
          },
          {
            "word": "Generous",
            "phonics": "JEN-er-us",
            "definition": "Willing and eager to give freely of kindness, food, and help.",
            "funExample": "The reformed family became generous protectors of every animal.",
            "emoji": "💖"
          }
        ],
        "microChallenge": {
          "id": "mc-magic_finger-9plus-5",
          "title": "Electric Spark Scramble",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from today's Magic Finger chapter!",
          "targetWord": "HAMMER",
          "scrambleLetters": [
            "R",
            "E",
            "M",
            "M",
            "A",
            "H"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-magic_finger-9plus-5-comp1",
            "question": "What did Mr. Gregg do to all of his hunting guns with the sledgehammer?",
            "options": [
              "He painted them gold and hung them in the hallway",
              "He buried them under the kitchen floorboards",
              "He smashed them into twisted pieces of scrap metal",
              "He sold them to the shopkeeper in town"
            ],
            "correctIndex": 2,
            "explanation": "Mr. Gregg completely destroyed all his hunting weapons so he could never shoot again.",
            "visualClueEmoji": "🔨",
            "points": 60
          },
          {
            "id": "q-magic_finger-9plus-5-vocab1",
            "question": "Find a word in the passage that means: \"A large, heavy hammer used for breaking hard objects into pieces.\".",
            "options": [
              "Giant",
              "Ducks",
              "Nodded",
              "Sledgehammer"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Sledgehammer\" means a large, heavy hammer used for breaking hard objects into pieces.",
            "visualClueEmoji": "🔨",
            "points": 60
          },
          {
            "id": "q-magic_finger-9plus-5-comp2",
            "question": "What family name did the Greggs choose to adopt in honor of their bird adventure?",
            "options": [
              "The Egg family",
              "The Feather family",
              "The Wonka family",
              "The Sparrow family"
            ],
            "correctIndex": 0,
            "explanation": "To show their deep love for birds, they changed their name from Gregg to Egg.",
            "visualClueEmoji": "🥚",
            "points": 60
          },
          {
            "id": "q-magic_finger-9plus-5-vocab2",
            "question": "Find a word in the passage that means: \"A large, wonderful meal with abundant food celebrating a special event.\".",
            "options": [
              "Giant",
              "Feast",
              "Ducks",
              "Nodded"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Feast\" means a large, wonderful meal with abundant food celebrating a special event.",
            "visualClueEmoji": "🌾",
            "points": 60
          }
        ]
      }
    ]
  }
};
