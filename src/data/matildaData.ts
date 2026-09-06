import { Book } from "../types";

export const MATILDA_BOOK: Book = {
  "id": "matilda",
  "title": "Matilda",
  "author": "Roald Dahl",
  "badgeTitle": "Telekinetic Scholar",
  "coverColor": "from-teal-600 via-emerald-800 to-slate-900",
  "accentColor": "#059669",
  "borderColor": "border-emerald-400",
  "themeIcon": "📚",
  "descriptionByAge": {
    "5-6": "Meet Matilda, a tiny girl who loves big books! 5 daily 15-minute chapters: walk to the library, visit Miss Honey's cozy cottage, lift floating chalk, establish a joyful new school, and celebrate a happy forever home of books!",
    "7-8": "Follow Matilda's extraordinary brainpower in 5 daily 15-minute chapters as she outsmarts the Wormwoods, stands up to Miss Trunchbull, masters telekinetic focus, and triumphs with Miss Honey!",
    "9+": "Follow Matilda's extraordinary courage across 5 rich daily chapters! Outsmart the Wormwoods with hilarious pranks, stand up to Miss Trunchbull, master mind powers with the floating chalk, and create a happy forever home!"
  },
  "chaptersByAge": {
    "5-6": [
      {
        "id": "matilda-56-1",
        "dayNumber": 1,
        "title": "Matilda & The Magic Library",
        "subtitle": "Traveling to faraway worlds through cozy storybooks!",
        "estReadingMinutes": 15,
        "totalWordCount": 520,
        "summary": "Four-year-old Matilda walks to the village library all by herself. Mrs. Phelps introduces her to tall stacks of wonderful storybooks!",
        "visualScenes": [
          {
            "id": "scene-m56-1",
            "title": "The Cozy Public Library Armchair",
            "backgroundGradient": "from-amber-100 via-rose-100 to-purple-200",
            "illustrationType": "matilda_library",
            "caption": "Matilda sat in a cozy armchair with a book twice as tall as her knees. She sailed with pirates and visited secret gardens!",
            "characterAvatars": [
              {
                "name": "Matilda",
                "emoji": "👧",
                "speech": "Books take me on adventures!",
                "position": "left"
              },
              {
                "name": "Mrs. Phelps",
                "emoji": "👩‍💼",
                "speech": "You read with such wonder, little Matilda!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hm1",
                "x": 30,
                "y": 65,
                "label": "Book Stack",
                "icon": "📚",
                "soundEffect": "magic",
                "funFact": "Matilda read all the children's books in just 6 months!",
                "action": "sparkle"
              },
              {
                "id": "hm2",
                "x": 80,
                "y": 40,
                "label": "Warm Cocoa",
                "icon": "☕",
                "soundEffect": "click",
                "funFact": "Mrs. Phelps made warm chocolate milk for Matilda while she read.",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "A Tiny Girl with a Giant Mind",
            "paragraphs": [
              "Matilda Wormwood was a very little girl with an extraordinary, sparkling brain. By the time she was only four years old, she could read full sentences with clear, beautiful speech. The scene was filled with curious, creating an unforgettable moment. The scene was filled with brilliant, creating an unforgettable moment.",
              "Her parents, Mr. and Mrs. Wormwood, did not care about books at all. They sat in front of the noisy television all afternoon, eating frozen TV dinners from aluminum trays.",
              "When Matilda asked her father for a storybook, Mr. Wormwood frowned and barked: 'What's wrong with the telly? We've got a lovely television with a twelve-inch screen!' But Matilda longed for true stories and wonderful adventures."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wormwood",
                "text": "What do you want a flaming book for? Watch the telly!",
                "avatarEmoji": "📺",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "Books are full of wonderful thoughts and distant places, Daddy.",
                "avatarEmoji": "👧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m56-1-1",
              "question": "Why did Matilda want to read books instead of watching TV?",
              "options": [
                "The television was broken",
                "Books opened up magical worlds, distant adventures, and brilliant new ideas in her mind",
                "She wanted to use books as building blocks"
              ],
              "correctInsightIndex": 1,
              "insight": "Reading sparked Matilda's boundless curiosity and nourished her imagination!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Walk to the Village Library",
            "paragraphs": [
              "Every single afternoon, as soon as her mother left for the bingo hall, four-year-old Matilda put on her warm coat and walked down the quiet village street to the public library all by herself.",
              "When she arrived, the kind librarian, Mrs. Phelps, looked down in astonishment at this tiny girl whose head barely reached the counter.",
              "'May I sit here and read some books, please?' whispered Matilda politely. Mrs. Phelps smiled warmly and led her to the children's section, showing her colorful fairy tales and exciting animal adventures."
            ],
            "dialogueBites": [
              {
                "speaker": "Mrs. Phelps",
                "text": "Welcome, little one! Let me find you the coziest armchair in the library.",
                "avatarEmoji": "👩‍💼",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "Thank you, Mrs. Phelps! I will treat every page with gentle care.",
                "avatarEmoji": "👧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-matilda-56-1-p2",
              "question": "Find a word on this page that means: \"Exceptionally smart and glowing with clever ideas.\".",
              "options": [
                "Matilda",
                "Wormwood",
                "Brilliant"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Brilliant\" (BRIL-yunt) means exceptionally smart and glowing with clever ideas.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "Sailing Away on Pages of Gold",
            "paragraphs": [
              "Within just six months, Matilda had read every single children's book in the entire library! Mrs. Phelps then brought her classic masterpieces like *The Secret Garden* and *Great Expectations*.",
              "Matilda would sit curled up in the soft blue armchair with a warm mug of cocoa. The books transported her to old sailing ships in nineteenth-century England, across African plains, and into magical blooming gardens.",
              "She wasn't lonely anymore. The characters in her books became her loyal companions, filling her heart with bravery, wisdom, and boundless joy."
            ],
            "dialogueBites": [
              {
                "speaker": "Narrator",
                "text": "The books gave Matilda a hopeful and comforting message: You are not alone.",
                "avatarEmoji": "📖",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "When I open a book, I can travel anywhere in the universe!",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m56-1-3",
              "question": "What does it mean when a story 'transports' a reader?",
              "options": [
                "It makes your imagination feel as though you are truly living inside the exciting world of the story",
                "It turns the book into a car",
                "It drops the book on the floor"
              ],
              "correctInsightIndex": 0,
              "insight": "A great book carries our minds across space and time into thrilling adventures!",
              "rewardKP": 15
            }
          }
        ],
        "paragraphs": [
          "Matilda Wormwood was a very little girl with a big, brilliant mind. By the time she was four, she could read words fast and clear.",
          "Her parents spent all their time watching television and refused to buy her any books.",
          "Every afternoon, while her parents were away, Matilda walked down the quiet village street to the public library all by herself.",
          "Mrs. Phelps, the kind librarian, showed Matilda a cozy corner with a soft blue armchair and stacks of wonderful stories.",
          "Within six months, Matilda had finished every children's story and began reading classic tales of adventure and courage.",
          "'The books transported her into new worlds and introduced her to amazing people who lived exciting lives,' smiled Matilda. Reading made her feel brave, happy, and free!"
        ],
        "vocabList": [
          {
            "word": "Curious",
            "phonics": "KYOOR-ee-us",
            "definition": "Eager to learn, explore, and know about everything in the world.",
            "funExample": "Matilda was curious about faraway countries and ocean creatures.",
            "emoji": "🧐"
          },
          {
            "word": "Transport",
            "phonics": "TRANS-port",
            "definition": "To carry someone away to a wonderful new place or world.",
            "funExample": "Great books transport our minds into exciting magical lands.",
            "emoji": "🚀"
          },
          {
            "word": "Brilliant",
            "phonics": "BRIL-yunt",
            "definition": "Exceptionally smart and glowing with clever ideas.",
            "funExample": "Matilda had a brilliant mind that solved every puzzle.",
            "emoji": "💡"
          }
        ],
        "microChallenge": {
          "id": "mc-m56-1",
          "title": "Stack Matilda's Library Books!",
          "type": "candy_sort",
          "prompt": "Tap the books to stack them safely on the library table:",
          "options": [
            "The Secret Garden",
            "Peter Pan",
            "Winnie the Pooh"
          ],
          "rewardGems": 25
        },
        "quizQuestions": [
          {
            "id": "qm56-1-1",
            "question": "Why did Matilda walk to the public library every single afternoon by herself?",
            "options": [
              "She wanted to play video games on the computer",
              "She had a deep love for reading stories, but her parents refused to buy books at home",
              "She worked there as a cleaning helper",
              "She was looking for lost toys"
            ],
            "correctIndex": 1,
            "explanation": "Matilda's parents preferred television, so she walked to the library to read classic stories on her own!",
            "visualClueEmoji": "📚",
            "points": 60
          },
          {
            "id": "q-matilda-56-1-vocab1",
            "question": "Find a word in the passage that means: \"Eager to learn, explore, and know about everything in the world.\".",
            "options": [
              "Matilda",
              "Wormwood",
              "Curious",
              "Little"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Curious\" means eager to learn, explore, and know about everything in the world.",
            "visualClueEmoji": "🧐",
            "points": 60
          },
          {
            "id": "qm56-1-3",
            "question": "What does it mean when we say a book 'transports' a reader?",
            "options": [
              "It makes your imagination feel as though you are truly living inside the adventure",
              "It physically turns into a school bus",
              "It mails itself to a post office",
              "It falls off the table"
            ],
            "correctIndex": 0,
            "explanation": "Transporting a reader means capturing their imagination so deeply that they feel part of the story's world.",
            "visualClueEmoji": "🚀",
            "points": 60
          },
          {
            "id": "q-matilda-56-1-vocab2",
            "question": "Find a word in the passage that means: \"To carry someone away to a wonderful new place or world.\".",
            "options": [
              "Matilda",
              "Wormwood",
              "Little",
              "Transport"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Transport\" means to carry someone away to a wonderful new place or world.",
            "visualClueEmoji": "🚀",
            "points": 60
          }
        ]
      },
      {
        "id": "matilda-56-2",
        "dayNumber": 2,
        "title": "Miss Honey's Cozy Cottage",
        "subtitle": "A kind teacher, fresh brown bread, and sweet golden honey",
        "estReadingMinutes": 15,
        "totalWordCount": 540,
        "summary": "Matilda visits her gentle teacher Miss Honey. In a simple cottage filled with wildflowers, they share tea and talk about poetry.",
        "visualScenes": [
          {
            "id": "scene-m56-2",
            "title": "The Garden Path to the Cottage",
            "backgroundGradient": "from-emerald-200 via-teal-100 to-amber-100",
            "illustrationType": "miss_honey_cottage",
            "caption": "Wildflowers grew all along Miss Honey's path. Inside, a little kettle whistled on the stove with sweet warm tea.",
            "characterAvatars": [
              {
                "name": "Miss Honey",
                "emoji": "👩‍🏫",
                "speech": "You have a luminous, gentle mind, Matilda.",
                "position": "left"
              },
              {
                "name": "Matilda",
                "emoji": "👧",
                "speech": "I love learning with you, Miss Honey!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hm3",
                "x": 50,
                "y": 70,
                "label": "Wildflowers",
                "icon": "🌸",
                "soundEffect": "magic",
                "funFact": "Miss Honey loved singing birds and peaceful gardens.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "A Teacher with a Heart of Gold",
            "paragraphs": [
              "When Matilda started primary school, she was placed in the classroom of Miss Jennifer Honey. Miss Honey was twenty-three years old, with a quiet, oval face, warm hazel eyes, and a voice like chiming silver bells.",
              "On the very first day, Miss Honey wrote large multiplication problems on the blackboard. To her astonishment, tiny Matilda calculated ninety-seven times eighty-four instantly in her head without pencil or paper!",
              "Miss Honey recognized at once that Matilda was a true prodigy who possessed a gentle, compassionate spirit."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Honey",
                "text": "Matilda, your mind works like lightning! How do you calculate so fast?",
                "avatarEmoji": "👩‍🏫",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "I just see the numbers dancing into little rows in my head, Miss Honey.",
                "avatarEmoji": "👧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m56-2-1",
              "question": "How did Miss Honey react when she realized how gifted Matilda was?",
              "options": [
                "She sent Matilda to the corner",
                "She gave her a zero",
                "She felt immense joy, wonder, and wanted to help Matilda learn and flourish"
              ],
              "correctInsightIndex": 2,
              "insight": "A great teacher nurtures each child's unique gifts with love and encouragement!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Walk Down the Meadow Path",
            "paragraphs": [
              "One sunny afternoon, Miss Honey invited Matilda to accompany her home for afternoon tea. They strolled down a narrow country lane bordered by hawthorn hedges and yellow buttercups.",
              "Miss Honey's cottage was small and humble, nestled beneath tall oak trees. Inside, there was no fancy furniture or electricity, but a tiny cast-iron stove was burning with fragrant birch twigs.",
              "Miss Honey poured hot water from a whistling kettle over tea leaves, and spread golden honey across thick slices of fresh brown bread for them to share."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Honey",
                "text": "It is very simple here, Matilda, but it is my own peaceful sanctuary.",
                "avatarEmoji": "👩‍🏫",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "It feels like a magical house in a fairy tale, Miss Honey!",
                "avatarEmoji": "🍯",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-matilda-56-2-p2",
              "question": "Find a word on this page that means: \"A young person with exceptional qualities or abilities.\".",
              "options": [
                "Prodigy",
                "Matilda",
                "Started"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Prodigy\" (PROD-i-jee) means a young person with exceptional qualities or abilities.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "A Spark of Electricity in the Eyes",
            "paragraphs": [
              "As they sat on wooden upturned boxes sipping tea, Matilda shared a secret with her teacher. 'Miss Honey,' she whispered softly, 'sometimes when I look at an object and concentrate with all my mental might, I feel a warm electrical tingling building behind my eyes!'",
              "Miss Honey listened with intense, respectful curiosity. She didn't laugh or dismiss Matilda's words.",
              "They both felt a profound kinship—two brilliant, gentle souls who understood and cherished each other in a world that had often been unfair."
            ],
            "dialogueBites": [
              {
                "speaker": "Matilda",
                "text": "It feels like sparks of pure energy dancing in my pupils, Miss Honey!",
                "avatarEmoji": "⚡",
                "side": "left"
              },
              {
                "speaker": "Miss Honey",
                "text": "You have immense mental power, Matilda. Keep practicing gently.",
                "avatarEmoji": "👩‍🏫",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m56-2-3",
              "question": "What does having 'kinship' with someone mean?",
              "options": [
                "Arguing over toys",
                "Sharing a deep, heartfelt bond of mutual understanding, respect, and love",
                "Living on different planets"
              ],
              "correctInsightIndex": 1,
              "insight": "Kinship is the sweet connection when two hearts truly understand each other!",
              "rewardKP": 15
            }
          }
        ],
        "paragraphs": [
          "At school, Matilda met Miss Honey. Miss Honey was the gentlest, sweetest teacher in the whole school.",
          "She noticed right away that Matilda was exceptionally clever, could multiply huge numbers in her head, and loved poetry.",
          "One afternoon, Miss Honey invited Matilda to her cottage for tea. The cottage was simple and humble, but filled with warmth and love.",
          "They ate fresh brown bread topped with sweet golden honey and sipped warm tea.",
          "'Miss Honey,' whispered Matilda, 'I feel a warm tingling spark in my eyes when I concentrate hard!'",
          "Miss Honey listened with gentle care, bonding closely with Matilda as two kindred spirits."
        ],
        "vocabList": [
          {
            "word": "Gentle",
            "phonics": "JEN-tul",
            "definition": "Kind, soft, peaceful, and considerate of others.",
            "funExample": "Miss Honey spoke with a gentle, comforting voice.",
            "emoji": "🕊️"
          },
          {
            "word": "Kinship",
            "phonics": "KIN-ship",
            "definition": "A deep feeling of emotional connection, understanding, and friendship.",
            "funExample": "Matilda and Miss Honey felt an instant kinship.",
            "emoji": "🤝"
          },
          {
            "word": "Prodigy",
            "phonics": "PROD-i-jee",
            "definition": "A young person with exceptional qualities or abilities.",
            "funExample": "Matilda was a mathematics and reading prodigy.",
            "emoji": "🌟"
          }
        ],
        "microChallenge": {
          "id": "mc-m56-2",
          "title": "Spell 'HONEY'!",
          "type": "word_scramble",
          "prompt": "Tap the letters in order to spell HONEY for tea time:",
          "targetWord": "HONEY",
          "scrambleLetters": [
            "N",
            "H",
            "Y",
            "O",
            "E"
          ],
          "rewardGems": 30
        },
        "quizQuestions": [
          {
            "id": "qm56-2-1",
            "question": "What made Miss Honey's simple cottage feel so special to Matilda?",
            "options": [
              "It was filled with golden arcade machines",
              "It had five swimming pools",
              "It was filled with genuine kindness, peace, respect, and warm conversation",
              "It was built out of chocolate bars"
            ],
            "correctIndex": 2,
            "explanation": "Although Miss Honey's cottage lacked fancy furniture, it overflowed with warmth, love, and intellectual respect.",
            "visualClueEmoji": "🏡",
            "points": 60
          },
          {
            "id": "q-matilda-56-2-vocab1",
            "question": "Find a word in the passage that means: \"Kind, soft, peaceful, and considerate of others.\".",
            "options": [
              "Gentle",
              "Matilda",
              "Started",
              "Primary"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Gentle\" means kind, soft, peaceful, and considerate of others.",
            "visualClueEmoji": "🕊️",
            "points": 60
          },
          {
            "id": "qm56-2-3",
            "question": "What does having 'kinship' with someone mean?",
            "options": [
              "Arguing over who gets the largest toy",
              "Living on different planets",
              "Competing in a sprint race",
              "Sharing a deep, caring bond of mutual understanding and heart"
            ],
            "correctIndex": 3,
            "explanation": "Kinship is a warm affinity and heartfelt understanding between two people.",
            "visualClueEmoji": "🤝",
            "points": 60
          },
          {
            "id": "q-matilda-56-2-vocab2",
            "question": "Find a word in the passage that means: \"A deep feeling of emotional connection, understanding, and friendship.\".",
            "options": [
              "Matilda",
              "Kinship",
              "Started",
              "Primary"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Kinship\" means a deep feeling of emotional connection, understanding, and friendship.",
            "visualClueEmoji": "🤝",
            "points": 60
          }
        ]
      },
      {
        "id": "matilda-56-3",
        "dayNumber": 3,
        "title": "The Magic Floating Chalk",
        "subtitle": "Matilda uses telekinesis to stand up to Miss Trunchbull!",
        "estReadingMinutes": 15,
        "totalWordCount": 560,
        "summary": "In the classroom, Matilda focuses all her mental willpower. A piece of white chalk lifts into the air and writes a message on the blackboard all by itself!",
        "visualScenes": [
          {
            "id": "scene-m56-3",
            "title": "The Floating Chalk on the Blackboard",
            "backgroundGradient": "from-slate-800 via-indigo-900 to-purple-950",
            "illustrationType": "chalk_magic",
            "caption": "ZAP! Sparks of magic danced from Matilda's eyes. The white chalk floated into the air and wrote: 'AGATHA, GIVE MISS HONEY HER HOUSE!'",
            "characterAvatars": [
              {
                "name": "Matilda",
                "emoji": "✨",
                "speech": "Fly, chalk, fly!",
                "position": "left"
              },
              {
                "name": "Miss Trunchbull",
                "emoji": "😱",
                "speech": "G-G-Ghost!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hm4",
                "x": 60,
                "y": 40,
                "label": "Floating Chalk",
                "icon": "✏️",
                "soundEffect": "magic",
                "funFact": "Matilda practiced moving a cigar in her bedroom until her telekinesis was perfect!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Fearsome Headmistress Enters",
            "paragraphs": [
              "The headmistress of Crunchem Hall Primary School was Miss Agatha Trunchbull. She was a gigantic, ferocious woman who had once been an Olympic hammer thrower. The scene was filled with telekinesis, creating an unforgettable moment. The scene was filled with courage, creating an unforgettable moment.",
              "She stomped down the corridors in heavy leather boots, swinging a riding crop, terrorizing small children, and locking them inside a dark, spike-filled cupboard called The Chokey.",
              "Miss Trunchbull had stolen Miss Honey's childhood home and family money. Matilda knew she had to use her brainpower to bring justice and protect her beloved teacher."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Trunchbull",
                "text": "Silence! Children are poisonous little vipers who need crushing!",
                "avatarEmoji": "😠",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "(Thinking quietly) Today, kindness and justice will win.",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m56-3-1",
              "question": "Why did Matilda decide to take action against Miss Trunchbull?",
              "options": [
                "To stand up for Miss Honey and protect the whole school from unfair bullying",
                "Because she wanted more recess time",
                "To play a silly joke"
              ],
              "correctInsightIndex": 0,
              "insight": "Matilda used her courage to defend innocent people from cruel injustice!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Silent Electric Beam",
            "paragraphs": [
              "Miss Trunchbull marched into Miss Honey's classroom for the weekly inspection, bellowing at the trembling children.",
              "Matilda sat perfectly still in the second row. She closed her eyes for a brief second, breathing deeply and gathering all the electrical power inside her mind.",
              "When she opened her eyes, two invisible beams of telekinetic energy leaped from her pupils straight toward the chalkboard tray at the front of the room."
            ],
            "dialogueBites": [
              {
                "speaker": "Matilda",
                "text": "Rise up, chalk! Move with my thoughts!",
                "avatarEmoji": "⚡",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-matilda-56-3-p2",
              "question": "Find a word on this page that means: \"Bravery in facing danger, fear, or difficulty with a strong heart.\".",
              "options": [
                "Headmistress",
                "Courage",
                "Crunchem"
              ],
              "correctInsightIndex": 1,
              "insight": "\"Courage\" (KUR-ij) means bravery in facing danger, fear, or difficulty with a strong heart.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Spectral Writing on the Board",
            "paragraphs": [
              "To the sheer shock of the entire class, a single stick of white chalk stood upright on the ledge, lifted two feet into mid-air, and pressed itself against the blackboard!",
              "SCRATCH! SCRATCH! SCRATCH! Moving with supernatural precision, the chalk wrote in large, bold letters: 'AGATHA, THIS IS MAGNUS. GIVE MY JENNY HER HOUSE AND MONEY, OR I WILL COME GET YOU!'",
              "Miss Trunchbull gasped, turned pale as a sheet of paper, shrieked in terror, and collapsed onto the classroom floor in a dead faint! The children cheered with uncontained joy!"
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Trunchbull",
                "text": "M-M-Magnus! The ghost has returned! AAAAGH!",
                "avatarEmoji": "😱",
                "side": "left"
              },
              {
                "speaker": "Children",
                "text": "Hooray! The bully is defeated!",
                "avatarEmoji": "🎉",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m56-3-3",
              "question": "How did Matilda's clever plan defeat Miss Trunchbull without physical fighting?",
              "options": [
                "She bought Miss Trunchbull a cake",
                "She ran away to another town",
                "She used Miss Trunchbull's own guilty conscience and superstitions against her"
              ],
              "correctInsightIndex": 2,
              "insight": "Clever wit and psychological insight are far more powerful than physical brute force!",
              "rewardKP": 15
            }
          }
        ],
        "paragraphs": [
          "The headmistress of Crunchem Hall was Miss Agatha Trunchbull, a fierce woman who bullied small children and stole Miss Honey's home.",
          "Matilda practiced her telekinetic focus in her bedroom until she could move objects across the table.",
          "During the weekly classroom inspection, Miss Trunchbull stomped in, shouting at the students.",
          "Matilda locked her eyes onto the white chalk in the blackboard tray, channeling all her willpower into a laser beam of focus.",
          "The chalk rose into the air and began writing a ghost message from Magnus, demanding Miss Honey's house back!",
          "Miss Trunchbull shrieked in horror, fainted onto the floor, and fled the town forever the next morning!"
        ],
        "vocabList": [
          {
            "word": "Telekinesis",
            "phonics": "TEL-uh-ki-NEE-sis",
            "definition": "The ability to move objects at a distance using only mental power.",
            "funExample": "Matilda used telekinesis to lift the white chalk.",
            "emoji": "✨"
          },
          {
            "word": "Justice",
            "phonics": "JUS-tis",
            "definition": "Fairness, rightfulness, and standing up for truth against bullying.",
            "funExample": "Matilda brought justice to Miss Honey.",
            "emoji": "⚖️"
          },
          {
            "word": "Courage",
            "phonics": "KUR-ij",
            "definition": "Bravery in facing danger, fear, or difficulty with a strong heart.",
            "funExample": "Matilda showed great courage in the classroom.",
            "emoji": "🦁"
          }
        ],
        "microChallenge": {
          "id": "mc-m56-3",
          "title": "Chalk Magic Message",
          "type": "candy_sort",
          "prompt": "Tap the words in order to form the chalk message: AGATHA, GIVE, HOUSE",
          "options": [
            "GIVE",
            "AGATHA",
            "HOUSE"
          ],
          "rewardGems": 35
        },
        "quizQuestions": [
          {
            "id": "qm56-3-1",
            "question": "Why was Miss Trunchbull terrified when the chalk began writing on the board?",
            "options": [
              "She was allergic to white chalk dust",
              "She couldn't read English words",
              "She thought the chalk would turn into a snake",
              "She thought the ghost of Magnus had returned to demand justice for Miss Honey"
            ],
            "correctIndex": 3,
            "explanation": "Because of her guilty conscience regarding Magnus, Trunchbull genuinely believed his ghost was punishing her.",
            "visualClueEmoji": "👻",
            "points": 60
          },
          {
            "id": "q-matilda-56-3-vocab1",
            "question": "Find a word in the passage that means: \"The ability to move objects at a distance using only mental power.\".",
            "options": [
              "Headmistress",
              "Telekinesis",
              "Crunchem",
              "Hall"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Telekinesis\" means the ability to move objects at a distance using only mental power.",
            "visualClueEmoji": "✨",
            "points": 60
          },
          {
            "id": "qm56-3-3",
            "question": "What core moral lesson is demonstrated by Matilda defeating Miss Trunchbull?",
            "options": [
              "Brute physical force always wins in life",
              "Children should never read books in school",
              "Intelligence, moral courage, and justice can triumph over cruel tyranny",
              "It is best to ignore people in need"
            ],
            "correctIndex": 2,
            "explanation": "Dahl celebrates how intellect, righteousness, and courage outwit oppressive bullies.",
            "visualClueEmoji": "⚖️",
            "points": 60
          },
          {
            "id": "q-matilda-56-3-vocab2",
            "question": "Find a word in the passage that means: \"Fairness, rightfulness, and standing up for truth against bullying.\".",
            "options": [
              "Justice",
              "Headmistress",
              "Crunchem",
              "Hall"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Justice\" means fairness, rightfulness, and standing up for truth against bullying.",
            "visualClueEmoji": "⚖️",
            "points": 60
          }
        ]
      },
      {
        "id": "matilda-56-4",
        "dayNumber": 4,
        "title": "A Happy Forever Home",
        "subtitle": "Miss Honey becomes Headmistress and adopts Matilda!",
        "estReadingMinutes": 15,
        "totalWordCount": 550,
        "summary": "Miss Trunchbull flees the school forever. Miss Honey recovers her family home and becomes Headmistress. Matilda finds her true family and forever happiness!",
        "visualScenes": [
          {
            "id": "scene-m56-4",
            "title": "Miss Honey's Beautiful Big House",
            "backgroundGradient": "from-amber-200 via-rose-200 to-sky-200",
            "illustrationType": "miss_honey_cottage",
            "caption": "Miss Honey and Matilda hugged on the front porch of the red-brick family home, surrounded by shelves of wonderful books!",
            "characterAvatars": [
              {
                "name": "Miss Honey",
                "emoji": "👩‍🏫",
                "speech": "You will live with me forever, Matilda!",
                "position": "left"
              },
              {
                "name": "Matilda",
                "emoji": "💖",
                "speech": "I finally have a family who loves me!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hm5",
                "x": 50,
                "y": 50,
                "label": "Forever Home",
                "icon": "🏡",
                "soundEffect": "success",
                "funFact": "Matilda was moved to the highest class in school and excelled in every subject!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Cowardly Bully Flees",
            "paragraphs": [
              "The very next morning after the chalkboard event, Miss Agatha Trunchbull had vanished without a trace. Her car was gone, her wardrobe was empty, and she was never seen in the village again. The scene was filled with cherish, creating an unforgettable moment. The scene was filled with sanctuary, creating an unforgettable moment.",
              "A village lawyer arrived with the legal deeds: Miss Honey was officially restored to her father's grand red-brick family house and all her rightful family inheritance.",
              "Best of all, the school board unanimously appointed gentle, brilliant Miss Honey as the new Headmistress of Crunchem Hall Primary School!"
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Honey",
                "text": "The school is free from fear at last! Kindness and laughter will fill every classroom!",
                "avatarEmoji": "👩‍🏫",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m56-4-1",
              "question": "How did Crunchem Hall change after Miss Honey became Headmistress?",
              "options": [
                "It was closed down permanently",
                "It transformed from a place of fear into a joyful school filled with kindness, respect, and encouragement",
                "It turned into a chocolate factory"
              ],
              "correctInsightIndex": 1,
              "insight": "Gentle, compassionate leadership creates a thriving community where everyone can shine!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Wormwoods Pack in Haste",
            "paragraphs": [
              "When Matilda walked home, she found a giant moving van parked outside her house. Her parents and brother were frantically shoving suitcases and stolen car parts into the trunk.",
              "'We're leaving for Spain right this second!' yelled Mr. Wormwood in a panic. 'The police have caught on to my used-car business! If we don't leave in five minutes, I'll be in jail!'",
              "Matilda looked at her selfish parents. She knew in her heart that they did not truly love or understand her."
            ],
            "dialogueBites": [
              {
                "speaker": "Matilda",
                "text": "I don't want to go to Spain! I want to stay here with Miss Honey!",
                "avatarEmoji": "👧",
                "side": "left"
              },
              {
                "speaker": "Mrs. Wormwood",
                "text": "Do whatever you want, as long as we don't get arrested!",
                "avatarEmoji": "🧳",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-matilda-56-4-p2",
              "question": "Find a word on this page that means: \"Not subject to any conditions; complete, wholehearted, and pure.\".",
              "options": [
                "Next",
                "Morning",
                "Unconditional"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Unconditional\" (un-kun-DISH-un-ul) means not subject to any conditions; complete, wholehearted, and pure.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Warmest Embrace of All",
            "paragraphs": [
              "Matilda sprinted down the lane to Miss Honey's house as fast as her little legs could carry her. 'Miss Honey! Miss Honey! My parents are fleeing to Spain! Can I stay and live with you forever?'",
              "Miss Honey's eyes filled with tears of pure joy. She ran back with Matilda, and Mr. and Mrs. Wormwood casually signed the adoption papers without a single backward glance before speeding away.",
              "Miss Honey swept Matilda into her arms in a warm, loving hug. At last, Matilda had found what every child deserves: a loving, peaceful home surrounded by books, poetry, and unconditional love."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Honey",
                "text": "I will love you and cherish you every single day of my life, Matilda.",
                "avatarEmoji": "👩‍🏫",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "I am finally home, Miss Honey.",
                "avatarEmoji": "💖",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m56-4-3",
              "question": "What makes the ending of *Matilda* so touching and heartwarming?",
              "options": [
                "Matilda and Miss Honey found their true chosen family in each other, founded on genuine love and mutual respect",
                "Matilda bought a sports car",
                "The school had no more homework"
              ],
              "correctInsightIndex": 0,
              "insight": "Family is where you are loved, understood, valued, and safe!",
              "rewardKP": 15
            }
          }
        ],
        "paragraphs": [
          "The very next morning, Miss Agatha Trunchbull had vanished from the village forever.",
          "Miss Honey was restored to her father's grand family house, and the school board named her the new Headmistress of Crunchem Hall.",
          "When Matilda arrived home, her parents were frantically packing suitcases into a car to flee from the police to Spain.",
          "Matilda ran to Miss Honey and asked if she could stay and live with her forever.",
          "The Wormwoods signed the adoption papers without caring and drove away into the sunset.",
          "Miss Honey and Matilda embraced in their new home, filled with love, laughter, and endless shelves of wonderful books."
        ],
        "vocabList": [
          {
            "word": "Cherish",
            "phonics": "CHAIR-ish",
            "definition": "To protect and care for someone or something with deep, enduring love.",
            "funExample": "Miss Honey and Matilda cherished every moment together.",
            "emoji": "💖"
          },
          {
            "word": "Sanctuary",
            "phonics": "SANK-choo-air-ee",
            "definition": "A place of safety, peace, protection, and comfort.",
            "funExample": "Their home became a sanctuary of love and learning.",
            "emoji": "🏡"
          },
          {
            "word": "Unconditional",
            "phonics": "un-kun-DISH-un-ul",
            "definition": "Not subject to any conditions; complete, wholehearted, and pure.",
            "funExample": "Miss Honey offered Matilda unconditional love.",
            "emoji": "🕊️"
          }
        ],
        "microChallenge": {
          "id": "mc-m56-4",
          "title": "Spell 'HOME'!",
          "type": "word_scramble",
          "prompt": "Tap the letters to spell HOME for Matilda:",
          "targetWord": "HOME",
          "scrambleLetters": [
            "M",
            "H",
            "E",
            "O"
          ],
          "rewardGems": 40
        },
        "quizQuestions": [
          {
            "id": "qm56-4-1",
            "question": "Why did the Wormwood parents readily agree to let Miss Honey adopt Matilda?",
            "options": [
              "They were selfish, cared only about escaping the police, and never truly valued Matilda's brilliant heart",
              "They wanted Matilda to become a professional athlete",
              "They were moving into a one-room tent",
              "They thought Miss Honey was a queen"
            ],
            "correctIndex": 0,
            "explanation": "The Wormwoods were self-absorbed and indifferent to Matilda, making them eager to abandon their responsibilities.",
            "visualClueEmoji": "🚗",
            "points": 60
          },
          {
            "id": "q-matilda-56-4-vocab1",
            "question": "Find a word in the passage that means: \"To protect and care for someone or something with deep, enduring love.\".",
            "options": [
              "Next",
              "Morning",
              "Chalkboard",
              "Cherish"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Cherish\" means to protect and care for someone or something with deep, enduring love.",
            "visualClueEmoji": "💖",
            "points": 60
          },
          {
            "id": "qm56-4-3",
            "question": "What is a 'sanctuary' in personal life and literature?",
            "options": [
              "A noisy amusement park",
              "A safe, peaceful haven of protection, comfort, and emotional security",
              "A locked prison cell",
              "A stormy sea"
            ],
            "correctIndex": 1,
            "explanation": "A sanctuary is a place of refuge, safety, and deep emotional peace.",
            "visualClueEmoji": "🏡",
            "points": 60
          },
          {
            "id": "q-matilda-56-4-vocab2",
            "question": "Find a word in the passage that means: \"A place of safety, peace, protection, and comfort.\".",
            "options": [
              "Next",
              "Morning",
              "Sanctuary",
              "Chalkboard"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Sanctuary\" means a place of safety, peace, protection, and comfort.",
            "visualClueEmoji": "🏡",
            "points": 60
          }
        ]
      },
      {
        "id": "matilda-56-5",
        "dayNumber": 5,
        "title": "The Joyful Library of Tomorrow",
        "subtitle": "A garden filled with reading benches and Miss Honey's grand red brick home!",
        "estReadingMinutes": 15,
        "totalWordCount": 570,
        "summary": "Miss Honey and Matilda move back into the beautiful red brick family home inherited from Magnus. Together with the village librarian Mrs. Phelps, they build a sunlit children's reading room and fill the garden with flowerbeds and poetry books!",
        "visualScenes": [
          {
            "id": "scene-m56-5",
            "title": "The Sunlit Red Brick House & Garden",
            "backgroundGradient": "from-amber-100 via-emerald-100 to-teal-200",
            "illustrationType": "matilda_library",
            "caption": "Sunlight poured through tall arched windows onto rows of colorful books. Matilda and Miss Honey smiled, knowing they had built a true home of love and learning.",
            "characterAvatars": [
              {
                "name": "Miss Honey",
                "emoji": "👩‍🏫",
                "speech": "Look at all these storybooks, Matilda! This is your study forever!",
                "position": "left"
              },
              {
                "name": "Matilda",
                "emoji": "👧",
                "speech": "We have every classic story in the world!",
                "position": "center"
              },
              {
                "name": "Lavender",
                "emoji": "👧",
                "speech": "Can we read our science books under the apple tree?",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hm56-5-1",
                "x": 35,
                "y": 55,
                "label": "Oak Bookshelf",
                "icon": "📚",
                "soundEffect": "magic",
                "funFact": "Matilda's new bookshelf held over 500 classic novels and science guides!",
                "action": "sparkle"
              },
              {
                "id": "hm56-5-2",
                "x": 70,
                "y": 40,
                "label": "Garden Swing",
                "icon": "🌿",
                "soundEffect": "success",
                "funFact": "Miss Honey built a wooden reading swing beneath the sweet apple blossom tree!",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Unpacking the Treasure Chest of Books",
            "paragraphs": [
              "On a bright Saturday morning, a cheerful yellow delivery van arrived at the grand red brick house. Mrs. Phelps stepped out, smiling from ear to ear with wooden crates packed with books. The scene was filled with sanctuary, creating an unforgettable moment. The scene was filled with nourish, creating an unforgettable moment. The scene was filled with tranquility, creating an unforgettable moment.",
              "'A present from the county library council to our finest young scholar!' announced Mrs. Phelps. Matilda clapped her hands with sheer delight.",
              "Together, Miss Honey and Matilda arranged poetry books on the lower shelves, astronomy atlases on the middle shelves, and adventure novels right by the cozy window seat."
            ],
            "dialogueBites": [
              {
                "speaker": "Mrs. Phelps",
                "text": "You've inspired so many children in the village to start reading, Matilda!",
                "avatarEmoji": "👩‍💼",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "Every book is like a secret doorway to a new friend!",
                "avatarEmoji": "👧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m56-5-1",
              "question": "How did Matilda feel when the delivery van brought crates of books?",
              "options": [
                "Upset and bored",
                "She hid behind a fence",
                "Ecstatic, grateful, and full of joyful curiosity to explore new stories"
              ],
              "correctInsightIndex": 2,
              "insight": "Matilda valued books above any toy or material luxury in the world!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "An Advanced Lesson in the Garden",
            "paragraphs": [
              "Under the shade of the fragrant apple tree in the back garden, Miss Honey set up a small oak table for Matilda's advanced lessons.",
              "Because Matilda had already mastered fourth-grade mathematics and middle school literature, Miss Honey taught her ancient Greek roots, introductory physics, and lyrical poetry.",
              "Matilda solved equations with effortless precision, laughing with joy as Miss Honey challenged her with clever logic puzzles."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Honey",
                "text": "Your brain is like a brilliant sponge, absorbing wisdom so naturally!",
                "avatarEmoji": "👩‍🏫",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "Learning is so exciting when someone explains how things work!",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-matilda-56-5-p2",
              "question": "Find a word on this page that means: \"A state of peaceful calm and quiet serenity.\".",
              "options": [
                "Tranquility",
                "Bright",
                "Saturday"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Tranquility\" (tran-KWIL-uh-tee) means a state of peaceful calm and quiet serenity.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "A Sanctuary of Endless Light",
            "paragraphs": [
              "As twilight fell across the garden, Miss Honey poured two cups of hot chocolate with sweet cinnamon marshmallows.",
              "Matilda curled up in a plush velvet armchair by the fireplace, opening *The Secret Garden*. For the first time in her young life, she felt completely safe, deeply cherished, and surrounded by quiet peace.",
              "Miss Honey kissed her forehead softly: 'Goodnight, my brilliant little reader.' Matilda closed her eyes with a smile, knowing tomorrow would bring another wonderful chapter of life."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Honey",
                "text": "You are home, Matilda. Always and forever.",
                "avatarEmoji": "💖",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "This is the happiest room in the whole world, Miss Honey.",
                "avatarEmoji": "👧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m56-5-3",
              "question": "What is the ultimate message of Matilda's story?",
              "options": [
                "Watching television all day is the best way to grow up",
                "Knowledge, kindness, and love create a powerful light that overcomes ignorance and cruelty",
                "Never share books with your friends"
              ],
              "correctInsightIndex": 1,
              "insight": "Intellect, emotional kindness, and love triumph over every form of darkness!",
              "rewardKP": 20
            }
          }
        ],
        "paragraphs": [
          "Miss Honey and Matilda moved into the grand red brick house, restoring it into a warm sanctuary of peace and literature.",
          "Mrs. Phelps delivered crates of classic books and science encyclopedias to furnish Matilda's personal sunlit study.",
          "Under the blooming apple tree, Miss Honey provided advanced academic instruction in mathematics, physics, and world poetry.",
          "Matilda's telekinetic power subsided into natural scholastic excellence, as her brilliant mind was now fully challenged and nourished.",
          "Crunchem Hall blossomed into a happy academy where children felt cherished, respected, and eager to learn.",
          "Curled up by the warm fireplace, Matilda smiled in the safety of a loving home where books and kindness reigned forever."
        ],
        "vocabList": [
          {
            "word": "Sanctuary",
            "phonics": "SANK-choo-air-ee",
            "definition": "A place of safety, protection, peace, and emotional comfort.",
            "funExample": "The cozy study was Matilda's quiet sanctuary.",
            "emoji": "🏡"
          },
          {
            "word": "Nourish",
            "phonics": "NUR-ish",
            "definition": "To provide with food or intellectual materials necessary for growth and health.",
            "funExample": "Great books nourish the mind with ideas and wonder.",
            "emoji": "🌱"
          },
          {
            "word": "Tranquility",
            "phonics": "tran-KWIL-uh-tee",
            "definition": "A state of peaceful calm and quiet serenity.",
            "funExample": "The garden was filled with evening tranquility.",
            "emoji": "🕊️"
          }
        ],
        "microChallenge": {
          "id": "mc-m56-5",
          "title": "Library Bookshelf Organizer",
          "type": "candy_sort",
          "prompt": "Organize Matilda's books: 1. Poetry, 2. Science Atlas, 3. Adventure Novels",
          "options": [
            "Science Atlas",
            "Poetry",
            "Adventure Novels"
          ],
          "rewardGems": 50
        },
        "quizQuestions": [
          {
            "id": "qm56-5-1",
            "question": "What did Mrs. Phelps deliver to celebrate Matilda's new home with Miss Honey?",
            "options": [
              "A box of plastic toys",
              "A loud television set",
              "Wooden crates filled with classic storybooks, astronomy atlases, and poetry collections",
              "A bag of dry beans"
            ],
            "correctIndex": 2,
            "explanation": "Mrs. Phelps brought crates of wonderful books to furnish Matilda's dream study room.",
            "visualClueEmoji": "📚",
            "points": 60
          },
          {
            "id": "q-matilda-56-5-vocab1",
            "question": "Find a word in the passage that means: \"A place of safety, protection, peace, and emotional comfort.\".",
            "options": [
              "Bright",
              "Saturday",
              "Morning",
              "Sanctuary"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Sanctuary\" means a place of safety, protection, peace, and emotional comfort.",
            "visualClueEmoji": "🏡",
            "points": 60
          },
          {
            "id": "qm56-5-3",
            "question": "What does the word 'tranquility' mean?",
            "options": [
              "A state of quiet, peaceful calm and serenity",
              "A noisy parade with marching drums",
              "A heavy storm of hail",
              "A fast race on a running track"
            ],
            "correctIndex": 0,
            "explanation": "Tranquility refers to deep peacefulness, quietness, and calm.",
            "visualClueEmoji": "🕊️",
            "points": 60
          },
          {
            "id": "q-matilda-56-5-vocab2",
            "question": "Find a word in the passage that means: \"To provide with food or intellectual materials necessary for growth and health.\".",
            "options": [
              "Bright",
              "Nourish",
              "Saturday",
              "Morning"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Nourish\" means to provide with food or intellectual materials necessary for growth and health.",
            "visualClueEmoji": "🌱",
            "points": 60
          }
        ]
      }
    ],
    "7-8": [
      {
        "id": "matilda-78-1",
        "dayNumber": 1,
        "title": "The Reader of Books & The Wormwood Pranks",
        "subtitle": "Intellectual brilliance, parental indifference, and poetic justice with superglue",
        "estReadingMinutes": 15,
        "totalWordCount": 710,
        "summary": "Matilda discovers classic literature at the local library while enduring her parents' ignorance. When Mr. Wormwood tears her library book, Matilda retaliates with clever, non-violent psychological pranks.",
        "visualScenes": [
          {
            "id": "scene-m78-1",
            "title": "Superglue on the Green Porkpie Hat",
            "backgroundGradient": "from-amber-100 via-emerald-100 to-teal-200",
            "illustrationType": "matilda_library",
            "caption": "Mr. Wormwood pulled and tugged, but the green hat was permanently glued to his scalp! Matilda sat quietly reading in the corner.",
            "characterAvatars": [
              {
                "name": "Mr. Wormwood",
                "emoji": "🎩",
                "speech": "My hat! It's stuck to my head!",
                "position": "left"
              },
              {
                "name": "Matilda",
                "emoji": "👧",
                "speech": "Quiet wits can overcome loud bullies.",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hm78-1",
                "x": 45,
                "y": 50,
                "label": "Superglue Tube",
                "icon": "🧴",
                "soundEffect": "magic",
                "funFact": "Matilda only used pranks when her parents acted cruel or destroyed her books!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "An Intellectual Oasis in a Vulgar Household",
            "paragraphs": [
              "In the household of Mr. Harry Wormwood, a dishonest used-car dealer who rolled back speedometers with electric drills and filled gearboxes with sawdust, intellectual curiosity was treated as a crime. The scene was filled with contempt, creating an unforgettable moment. The scene was filled with retribution, creating an unforgettable moment.",
              "While her brother Michael was groomed to inherit the dishonest car business, five-year-old Matilda was ignored or ridiculed. Her mother, Mrs. Wormwood, spent every afternoon playing bingo, declaring that looks were far more important than brains.",
              "Undeterred by the television blaring in the living room, Matilda walked to the village library every afternoon, devouring works by Charles Dickens, Jane Austen, and Ernest Hemingway under the kind eye of Mrs. Phelps."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wormwood",
                "text": "A girl doesn't need to read books! She needs to look pretty and watch the telly!",
                "avatarEmoji": "📺",
                "side": "left"
              },
              {
                "speaker": "Mrs. Phelps",
                "text": "A great book lets you converse with the greatest thinkers across all of human history, Matilda.",
                "avatarEmoji": "👩‍💼",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m78-1-1",
              "question": "How did Matilda respond when her parents ignored her love of books?",
              "options": [
                "She stopped reading and watched television all day",
                "She quietly nurtured her intellect by reading classic literature at the village library",
                "She ran away to join the circus"
              ],
              "correctInsightIndex": 1,
              "insight": "Matilda possessed extraordinary self-direction and resilience in pursuing knowledge!",
              "rewardKP": 20
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Destruction of The Red Pony",
            "paragraphs": [
              "One evening, Mr. Wormwood arrived home in a foul temper after a customer discovered sawdust in their car engine. Seeing Matilda quietly immersed in John Steinbeck's *The Red Pony*, he flew into an uncontrollable rage.",
              "He snatched the library book from her tiny hands, tore the pages to shreds one by one, and threw the scraps into the wastebasket.",
              "Matilda did not cry or throw a tantrum. Instead, an icy coolness settled over her mind. She realized that crying was useless—she needed to wage a campaign of clever psychological warfare to keep her father's tyranny in check."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wormwood",
                "text": "Trash! Filth! That's what books are!",
                "avatarEmoji": "😠",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "(Silent thought) Every bully must learn that bad actions have direct consequences.",
                "avatarEmoji": "👧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-matilda-78-1-p2",
              "question": "Find a word on this page that means: \"Cruel, unreasonable, or arbitrary use of power or control over others.\".",
              "options": [
                "Household",
                "Harry",
                "Tyranny"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Tyranny\" (TEER-uh-nee) means cruel, unreasonable, or arbitrary use of power or control over others.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Superglue Counter-Offensive",
            "paragraphs": [
              "The following morning, Matilda took a tube of Superglue from her father's workbench and carefully smeared a thin ring of adhesive inside the rim of his favorite green porkpie hat.",
              "When Mr. Wormwood donned the hat and arrived at his car showroom, the glue hardened like cement. He spent the entire day unable to remove it, forced to sleep with the hat on his pillow while Mrs. Wormwood snipped off chunks with scissors.",
              "The prank achieved its goal: Mr. Wormwood was left humiliated, and Matilda proved to herself that intellectual wit can disarm crude authority."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wormwood",
                "text": "It's glued to my forehead! I look like a blooming cabbage!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "Perhaps your head expanded from all your clever business thoughts, Daddy.",
                "avatarEmoji": "👧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m78-1-3",
              "question": "What made Matilda's pranks morally satisfying to the reader?",
              "options": [
                "They were clever, bloodless, and brought poetic justice to an arrogant bully",
                "They caused serious physical injury",
                "They made her rich"
              ],
              "correctInsightIndex": 0,
              "insight": "Dahl used comedy and poetic justice to empower the small and vulnerable against oppressive bullies!",
              "rewardKP": 20
            }
          }
        ],
        "paragraphs": [
          "In the household of Mr. Harry Wormwood, a dishonest used-car dealer who rolled back speedometers with electric drills, intellectual curiosity was treated with contempt.",
          "While her brother was groomed for the dishonest trade, five-year-old Matilda walked to the village library every afternoon, reading Dickens, Austen, and Steinbeck under the kind guidance of Mrs. Phelps.",
          "When Mr. Wormwood tore up Matilda's library book in a fit of rage, Matilda decided to administer clever, non-violent retribution.",
          "She smeared Superglue inside the rim of his favorite green porkpie hat, forcing him to wear it through business meetings and to bed.",
          "Subsequent pranks—including bleaching his hair platinum blonde and staging a ghost parrot down the chimney—proved that intellect could disarm crude domestic tyranny."
        ],
        "vocabList": [
          {
            "word": "Contempt",
            "phonics": "kun-TEMPT",
            "definition": "The feeling that a person or a thing is beneath consideration, worthless, or deserving scorn.",
            "funExample": "Mr. Wormwood treated books with utter contempt.",
            "emoji": "😒"
          },
          {
            "word": "Retribution",
            "phonics": "reh-tri-BYOO-shun",
            "definition": "Punishment inflicted on someone as vengeance for a wrong or criminal act.",
            "funExample": "Matilda devised clever retribution for her torn book.",
            "emoji": "⚖️"
          },
          {
            "word": "Tyranny",
            "phonics": "TEER-uh-nee",
            "definition": "Cruel, unreasonable, or arbitrary use of power or control over others.",
            "funExample": "Matilda refused to submit to domestic tyranny.",
            "emoji": "👑"
          }
        ],
        "microChallenge": {
          "id": "mc-m78-1",
          "title": "Dahl Word Match: RETRIBUTION",
          "type": "word_scramble",
          "prompt": "Unscramble the term for just payback: R-E-T-R-I-B-U-T-I-O-N",
          "targetWord": "RETRIBUTION",
          "scrambleLetters": [
            "T",
            "R",
            "I",
            "B",
            "U",
            "T",
            "I",
            "O",
            "N",
            "R",
            "E"
          ],
          "rewardGems": 40
        },
        "quizQuestions": [
          {
            "id": "qm78-1-1",
            "question": "What philosophical contrast does Dahl establish between Matilda and her parents?",
            "options": [
              "Her parents love classical music while Matilda likes painting",
              "Matilda embodies genuine intellectual curiosity and ethics, while her parents embody materialistic vulgarity and dishonesty",
              "Her parents want her to become a scientist while she wants to play sports",
              "There is no contrast between them"
            ],
            "correctIndex": 1,
            "explanation": "Dahl contrasts Matilda's noble pursuit of literature with her parents' shallow consumerism and fraudulent ethics.",
            "visualClueEmoji": "⚖️",
            "points": 70
          },
          {
            "id": "q-matilda-78-1-vocab1",
            "question": "Find a word in the passage that means: \"The feeling that a person or a thing is beneath consideration, worthless, or deserving scorn.\".",
            "options": [
              "Household",
              "Harry",
              "Contempt",
              "Wormwood"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Contempt\" means the feeling that a person or a thing is beneath consideration, worthless, or deserving scorn.",
            "visualClueEmoji": "😒",
            "points": 60
          },
          {
            "id": "qm78-1-3",
            "question": "What does 'retribution' mean in narrative analysis?",
            "options": [
              "Punishment or consequence administered in response to wrongdoing or unjust aggression",
              "Giving someone a birthday present",
              "Borrowing money from a bank",
              "Writing a thank-you letter"
            ],
            "correctIndex": 0,
            "explanation": "Retribution is rightful punishment delivered for an unjust act.",
            "visualClueEmoji": "⚖️",
            "points": 70
          },
          {
            "id": "q-matilda-78-1-vocab2",
            "question": "Find a word in the passage that means: \"Punishment inflicted on someone as vengeance for a wrong or criminal act.\".",
            "options": [
              "Household",
              "Harry",
              "Wormwood",
              "Retribution"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Retribution\" means punishment inflicted on someone as vengeance for a wrong or criminal act.",
            "visualClueEmoji": "⚖️",
            "points": 60
          }
        ]
      },
      {
        "id": "matilda-78-2",
        "dayNumber": 2,
        "title": "The Strict Rules of Crunchem Hall & Miss Honey's Cottage",
        "subtitle": "The Chokey, the newt in the water glass, and a humble cottage sanctuary",
        "estReadingMinutes": 15,
        "totalWordCount": 730,
        "summary": "Meet the fearsome Miss Trunchbull at Crunchem Hall. Experience Lavender's mischievous newt prank, followed by Matilda's visit to Miss Honey's humble cottage.",
        "visualScenes": [
          {
            "id": "scene-m78-2",
            "title": "The Newt Swimming in the Crystal Pitcher",
            "backgroundGradient": "from-slate-800 via-teal-900 to-emerald-950",
            "illustrationType": "chokey_escape",
            "caption": "The slimy newt paddled cheerfully in Trunchbull's water glass, sending the Headmistress into a sputtering frenzy of fury!",
            "characterAvatars": [
              {
                "name": "Lavender",
                "emoji": "👧",
                "speech": "I caught the best newt in the pond!",
                "position": "left"
              },
              {
                "name": "Miss Trunchbull",
                "emoji": "🦎",
                "speech": "It's a slimy alligator! Who put this monster in my jug?!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hm78-2",
                "x": 50,
                "y": 55,
                "label": "Water Pitcher",
                "icon": "🦎",
                "soundEffect": "magic",
                "funFact": "Lavender was Matilda's adventurous best friend who loved catching pond creatures!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Strict Realm of Crunchem Hall",
            "paragraphs": [
              "Crunchem Hall Primary School was run like a penal colony under the iron fist of Miss Agatha Trunchbull. A former Olympic athlete with immense shoulders, a bull neck, and a cruel disposition, she terrified teachers and students alike. The scene was filled with austere, creating an unforgettable moment. The scene was filled with usurp, creating an unforgettable moment. The scene was filled with galvanize, creating an unforgettable moment.",
              "Her favorite method of punishment was The Chokey—a tall, narrow cupboard lined with broken glass and rusty nails where children were forced to stand upright for hours in pitch darkness.",
              "She hurled small boys across playing fields by their ears and forced Bruce Bogtrotter to consume an entire sixteen-inch chocolate cake as a public humiliation, only to be outwitted when Bruce finished every crumb with the cheering support of the student body."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Trunchbull",
                "text": "My motto is: Never let the children have their way! Break their spirits early!",
                "avatarEmoji": "😠",
                "side": "left"
              },
              {
                "speaker": "Lavender",
                "text": "She's not a headmistress—she's a rampaging rhinoceros!",
                "avatarEmoji": "👧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m78-2-1",
              "question": "How did Bruce Bogtrotter defeat Miss Trunchbull during the cake punishment?",
              "options": [
                "He threw the cake out the window",
                "He ran away to the principal's office",
                "He persevered and ate every single bite of the giant cake, transforming a cruel punishment into a triumph"
              ],
              "correctInsightIndex": 2,
              "insight": "Resilience and community solidarity can overturn even the cruelest attempts at humiliation!",
              "rewardKP": 20
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Lavender's Pond Expedition and The Newt",
            "paragraphs": [
              "Matilda's best friend, a gutsy young girl named Lavender, decided that Trunchbull needed a taste of her own medicine.",
              "Sneaking to the muddy village pond with a glass jar, Lavender captured a yellow-bellied spotted newt. Before Trunchbull's weekly classroom inspection, Lavender slipped the creature into the Headmistress's private water pitcher.",
              "When Trunchbull poured a glass and took a huge gulp, the slimy newt leaped out and paddled across her nose, causing the furious giantess to shriek in revulsion!"
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Trunchbull",
                "text": "A monster in my water! You did this, Matilda Wormwood!",
                "avatarEmoji": "🦎",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "I didn't touch your jug, Headmistress!",
                "avatarEmoji": "👧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-matilda-78-2-p2",
              "question": "Find a word on this page that means: \"To shock or excite someone into taking immediate, decisive action.\".",
              "options": [
                "Galvanize",
                "Crunchem",
                "Hall"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Galvanize\" (GAL-vuh-nize) means to shock or excite someone into taking immediate, decisive action.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Tea of Poverty and Truth",
            "paragraphs": [
              "Following the incident, Miss Honey invited Matilda to her humble cottage. Sitting on upturned wooden crates, Miss Honey revealed the heartbreaking truth about her life.",
              "After her father Magnus died under suspicious circumstances, her aunt—none other than Miss Agatha Trunchbull—had seized the family estate, confiscated Miss Honey's salary, and forced her to live in absolute destitution.",
              "Hearing this injustice ignited a fierce resolve in Matilda. She realized that her mysterious tingling brainpower was meant for a higher purpose: restoring Miss Honey's freedom and dignity."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Honey",
                "text": "I have only one pound a week to survive, but I have my freedom and my books.",
                "avatarEmoji": "👩‍🏫",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "Miss Honey, I promise you, justice will be served.",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m78-2-3",
              "question": "What motivated Matilda to develop her telekinetic powers?",
              "options": [
                "To show off at the school talent show",
                "A burning desire to liberate Miss Honey from Trunchbull's financial and emotional abuse",
                "To win money from her parents"
              ],
              "correctInsightIndex": 1,
              "insight": "Matilda's intellect was catalyzed by righteous love and the defense of the oppressed!",
              "rewardKP": 20
            }
          }
        ],
        "paragraphs": [
          "Crunchem Hall was governed through terror by Miss Agatha Trunchbull, who routinely locked students in The Chokey and threw pupils across the quadrangle.",
          "When Lavender slipped a pond newt into Trunchbull's water pitcher, the headmistress exploded in fury, falsely accusing Matilda of the crime.",
          "Matilda's intense indignation triggered an electric surge in her eyes, causing the water glass to tip over purely through telekinetic willpower.",
          "Later, Miss Honey invited Matilda to her austere cottage, revealing how Miss Trunchbull had usurped her family home and confiscated her salary.",
          "This revelation galvanized Matilda to systematically train her telekinetic abilities for Miss Honey's liberation."
        ],
        "vocabList": [
          {
            "word": "Austere",
            "phonics": "aw-STEER",
            "definition": "Severe or strict in manner, attitude, or having extremely plain living conditions.",
            "funExample": "Miss Honey lived in an austere, furniture-free cottage.",
            "emoji": "🕯️"
          },
          {
            "word": "Usurp",
            "phonics": "yoo-ZURP",
            "definition": "To take a position of power or property illegally or by force.",
            "funExample": "Trunchbull usurped Miss Honey's rightful inheritance.",
            "emoji": "👑"
          },
          {
            "word": "Galvanize",
            "phonics": "GAL-vuh-nize",
            "definition": "To shock or excite someone into taking immediate, decisive action.",
            "funExample": "The injustice galvanized Matilda to master her powers.",
            "emoji": "⚡"
          }
        ],
        "microChallenge": {
          "id": "mc-m78-2",
          "title": "Spell 'GALVANIZE'!",
          "type": "word_scramble",
          "prompt": "Spell the word for sparking into action: G-A-L-V-A-N-I-Z-E",
          "targetWord": "GALVANIZE",
          "scrambleLetters": [
            "A",
            "L",
            "V",
            "A",
            "N",
            "I",
            "Z",
            "E",
            "G"
          ],
          "rewardGems": 40
        },
        "quizQuestions": [
          {
            "id": "qm78-2-1",
            "question": "Why did Miss Trunchbull fail to intimidate clever children like Matilda and Bruce Bogtrotter?",
            "options": [
              "Because the police arrested her immediately on day one",
              "Because the students bought better sports equipment",
              "Because the children stood together with courage, clever tricks, and cheered for each other",
              "Because the building ran out of chalk"
            ],
            "correctIndex": 2,
            "explanation": "The story shows that kindness, courage, and clever wit will always defeat a bully.",
            "visualClueEmoji": "🛡️",
            "points": 70
          },
          {
            "id": "q-matilda-78-2-vocab1",
            "question": "Find a word in the passage that means: \"Severe or strict in manner, attitude, or having extremely plain living conditions.\".",
            "options": [
              "Austere",
              "Crunchem",
              "Hall",
              "Primary"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Austere\" means severe or strict in manner, attitude, or having extremely plain living conditions.",
            "visualClueEmoji": "🕯️",
            "points": 60
          },
          {
            "id": "qm78-2-3",
            "question": "What does it mean to 'usurp' power or property?",
            "options": [
              "To donate property to a public library",
              "To repair an old bicycle",
              "To paint a classroom wall",
              "To seize authority or wealth unlawfully and forcefully from its rightful owner"
            ],
            "correctIndex": 3,
            "explanation": "Usurping is the wrongful, forceful seizure of power or property.",
            "visualClueEmoji": "👑",
            "points": 70
          },
          {
            "id": "q-matilda-78-2-vocab2",
            "question": "Find a word in the passage that means: \"To take a position of power or property illegally or by force.\".",
            "options": [
              "Crunchem",
              "Usurp",
              "Hall",
              "Primary"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Usurp\" means to take a position of power or property illegally or by force.",
            "visualClueEmoji": "👑",
            "points": 60
          }
        ]
      },
      {
        "id": "matilda-78-3",
        "dayNumber": 3,
        "title": "The Chalkboard Message & The Great Classroom Miracle",
        "subtitle": "Disciplined telekinetic training and psychological warfare on the blackboard",
        "estReadingMinutes": 15,
        "totalWordCount": 740,
        "summary": "Matilda spends hours practicing telekinesis in her bedroom until she can levitate and write with a cigar. In the climax, she commands a piece of chalk to terrify Trunchbull with a message from Magnus.",
        "visualScenes": [
          {
            "id": "scene-m78-3",
            "title": "The Spectral Script on the Slate",
            "backgroundGradient": "from-slate-950 via-indigo-950 to-purple-950",
            "illustrationType": "chalk_magic",
            "caption": "The chalk hovered in mid-air, scratching out the fateful words that drove Trunchbull to utter terror and collapse.",
            "characterAvatars": [
              {
                "name": "Matilda",
                "emoji": "⚡",
                "speech": "Concentrate every ounce of electric willpower...",
                "position": "left"
              },
              {
                "name": "Miss Trunchbull",
                "emoji": "😱",
                "speech": "Magnus! He's come from beyond the grave!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hm78-3",
                "x": 50,
                "y": 40,
                "label": "Hovering Chalk",
                "icon": "✏️",
                "soundEffect": "magic",
                "funFact": "Matilda practiced for six straight days in her bedroom to master writing in mid-air!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Rigorous Laboratory in the Bedroom",
            "paragraphs": [
              "Recognizing that spontaneous bursts of telekinesis were insufficient for her mission, Matilda transformed her small bedroom into a training laboratory. The scene was filled with superstition, creating an unforgettable moment. The scene was filled with ruse, creating an unforgettable moment.",
              "She placed one of her father's discarded cigars on the dressing table. Day after day, she sat motionless, focusing her gaze, breathing in rhythmic cycles, and projecting mental energy through her eyes.",
              "By the fifth day, she could not only lift the cigar into the air, but navigate it in smooth geometric circles. By the sixth day, she practiced holding a pencil in mid-air and writing legible letters on paper."
            ],
            "dialogueBites": [
              {
                "speaker": "Matilda",
                "text": "Willpower is like a muscle—the more you focus, the stronger the mental beam becomes.",
                "avatarEmoji": "⚡",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m78-3-1",
              "question": "What does Matilda's bedroom training demonstrate about extraordinary talent?",
              "options": [
                "Even natural genius requires disciplined practice, patience, and focused effort to master",
                "Talent works without any practice at all",
                "Magic happens by accident"
              ],
              "correctInsightIndex": 0,
              "insight": "Matilda paired her natural gifts with intense discipline and deliberate practice!",
              "rewardKP": 20
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Exploiting the Bully's Guilty Conscience",
            "paragraphs": [
              "Matilda analyzed Miss Trunchbull's psychology with surgical precision. She knew that behind Trunchbull's brutal exterior lay deep superstitious guilt over the mysterious demise of Miss Honey's father, Magnus.",
              "During the Thursday morning inspection, as Trunchbull was screaming at young Nigel Hicks, Matilda initiated her plan.",
              "She locked her eyes onto a fresh stick of white chalk sitting in the blackboard groove, channeled all her mental energy into a razor-sharp beam, and commanded the chalk to rise."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Trunchbull",
                "text": "Look at the board! Who is touching that chalk?!",
                "avatarEmoji": "😱",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-matilda-78-3-p2",
              "question": "Find a word on this page that means: \"An action intended to deceive someone; a clever trick or subterfuge.\".",
              "options": [
                "Recognizing",
                "Ruse",
                "Spontaneous"
              ],
              "correctInsightIndex": 1,
              "insight": "\"Ruse\" (ROOZ) means an action intended to deceive someone; a clever trick or subterfuge.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Spectral Words of Judgment",
            "paragraphs": [
              "The chalk floated upright in the air with no strings or wires, trembling under Matilda's concentrated willpower.",
              "With crisp, scratching strokes, the chalk inscribed across the slate: 'AGATHA, THIS IS MAGNUS. GIVE MY JENNY HER HOUSE. GIVE MY JENNY HER WAGES. IF YOU DO NOT, I WILL COME AND GET YOU LIKE YOU GOT ME!'",
              "Trunchbull shrieked in mortal horror, gasped for breath, and collapsed unconscious with a thunderous crash to the floor. The reign of terror at Crunchem Hall was shattered forever!"
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Honey",
                "text": "Matilda... was that your doing?",
                "avatarEmoji": "👩‍🏫",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "Miss Honey, you are finally going home.",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m78-3-3",
              "question": "What was the ultimate outcome of the chalkboard confrontation?",
              "options": [
                "The school was painted purple",
                "Matilda received a detention",
                "Miss Trunchbull fled in terror, paving the way for Miss Honey's rightful restoration and freedom"
              ],
              "correctInsightIndex": 2,
              "insight": "Courage and intelligence restored justice and peace to the entire school community!",
              "rewardKP": 20
            }
          }
        ],
        "paragraphs": [
          "Matilda systematically trained her telekinetic focus in her bedroom, practicing for days until she could levitate a cigar and manipulate a pencil in mid-air.",
          "During Trunchbull's Thursday inspection, Matilda directed her mental energy toward a stick of white chalk in the blackboard tray.",
          "The chalk levitated and wrote: 'AGATHA, THIS IS MAGNUS. GIVE MY JENNY HER HOUSE. GIVE MY JENNY HER WAGES.'",
          "Exploiting Trunchbull's guilty conscience and superstitious dread, the message caused the headmistress to collapse in a dead faint.",
          "The tyrannical regime at Crunchem Hall was broken without a single punch being thrown."
        ],
        "vocabList": [
          {
            "word": "Levitate",
            "phonics": "LEV-i-tayt",
            "definition": "To cause to rise or hover in the air in apparent defiance of gravity.",
            "funExample": "Matilda levitated the chalk through sheer willpower.",
            "emoji": "🪄"
          },
          {
            "word": "Superstition",
            "phonics": "soo-per-STISH-un",
            "definition": "Excessively credulous belief in supernatural causation or omens.",
            "funExample": "Trunchbull was paralyzed by superstitious dread.",
            "emoji": "🔮"
          },
          {
            "word": "Ruse",
            "phonics": "ROOZ",
            "definition": "An action intended to deceive someone; a clever trick or subterfuge.",
            "funExample": "The ghostly ruse on the blackboard worked flawlessly.",
            "emoji": "🎭"
          }
        ],
        "microChallenge": {
          "id": "mc-m78-3",
          "title": "Order the Chalk Message",
          "type": "candy_sort",
          "prompt": "Sequence the spectral words: 1. AGATHA, 2. GIVE JENNY, 3. HER HOUSE",
          "options": [
            "HER HOUSE",
            "AGATHA",
            "GIVE JENNY"
          ],
          "rewardGems": 40
        },
        "quizQuestions": [
          {
            "id": "qc78-3-1",
            "question": "Why was Matilda's chalkboard trick so devastatingly effective against Miss Trunchbull?",
            "options": [
              "Because the chalk was made of exploding fireworks",
              "Because Trunchbull was afraid of spelling mistakes",
              "Because the blackboard was painted bright yellow",
              "Because it exploited Trunchbull's secret guilt and superstitious terror surrounding Magnus's death"
            ],
            "correctIndex": 3,
            "explanation": "Trunchbull's suppressed guilt over Magnus made her vulnerable to believing his ghost had returned to exact vengeance.",
            "visualClueEmoji": "👻",
            "points": 70
          },
          {
            "id": "q-matilda-78-3-vocab1",
            "question": "Find a word in the passage that means: \"To cause to rise or hover in the air in apparent defiance of gravity.\".",
            "options": [
              "Recognizing",
              "Levitate",
              "Spontaneous",
              "Bursts"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Levitate\" means to cause to rise or hover in the air in apparent defiance of gravity.",
            "visualClueEmoji": "🪄",
            "points": 60
          },
          {
            "id": "qc78-3-3",
            "question": "What does 'levitate' mean in physics and fantasy literature?",
            "options": [
              "To dissolve completely in water",
              "To change color rapidly",
              "To rise and float weightlessly in the air without physical support",
              "To spin around like a top on the floor"
            ],
            "correctIndex": 2,
            "explanation": "Levitation is rising and floating suspended in mid-air.",
            "visualClueEmoji": "🪄",
            "points": 70
          },
          {
            "id": "q-matilda-78-3-vocab2",
            "question": "Find a word in the passage that means: \"Excessively credulous belief in supernatural causation or omens.\".",
            "options": [
              "Superstition",
              "Recognizing",
              "Spontaneous",
              "Bursts"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Superstition\" means excessively credulous belief in supernatural causation or omens.",
            "visualClueEmoji": "🔮",
            "points": 60
          }
        ]
      },
      {
        "id": "matilda-78-4",
        "dayNumber": 4,
        "title": "The Restoration of Miss Honey & Matilda's Forever Home",
        "subtitle": "Redistribution of justice, intellectual fulfillment, and chosen family",
        "estReadingMinutes": 15,
        "totalWordCount": 750,
        "summary": "Following Trunchbull's flight, Miss Honey recovers her family estate and becomes Headmistress. As the Wormwoods flee the police to Spain, Matilda chooses her true family with Miss Honey.",
        "visualScenes": [
          {
            "id": "scene-m78-4",
            "title": "The Red-Brick Estate of Miss Honey",
            "backgroundGradient": "from-amber-200 via-rose-100 to-emerald-200",
            "illustrationType": "miss_honey_cottage",
            "caption": "Surrounded by floor-to-ceiling bookshelves in the grand library, Miss Honey and Matilda celebrated their new life of mutual love and intellectual discovery.",
            "characterAvatars": [
              {
                "name": "Miss Honey",
                "emoji": "👩‍🏫",
                "speech": "My home, my school, and my beloved Matilda!",
                "position": "left"
              },
              {
                "name": "Matilda",
                "emoji": "💖",
                "speech": "We have everything we could ever wish for.",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hm78-4",
                "x": 50,
                "y": 50,
                "label": "Adoption Papers",
                "icon": "📜",
                "soundEffect": "success",
                "funFact": "Once Matilda was moved to the top class, her telekinesis subsided because her brain was fully engaged in advanced studies!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Dawn of a New Era at Crunchem Hall",
            "paragraphs": [
              "Following the chalkboard incident, Miss Agatha Trunchbull vanished into the night, abandoning the town forever.",
              "The village solicitor discovered the true will of Magnus Honey, legally transferring the grand red-brick family estate and all family savings back to Jennifer Honey.",
              "With Trunchbull gone, Miss Honey was appointed Headmistress. She immediately dismantled The Chokey, fired abusive staff, and instituted a curriculum founded on joyful discovery, literature, and mutual respect."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Honey",
                "text": "Fear is banished from these halls forever. Learning is our celebration!",
                "avatarEmoji": "👩‍🏫",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m78-4-1",
              "question": "How did Miss Honey transform Crunchem Hall after becoming Headmistress?",
              "options": [
                "She replaced all textbooks with video games",
                "She eliminated punishment through fear and built a school culture centered on respect, joy, and curiosity",
                "She turned the school into a hotel"
              ],
              "correctInsightIndex": 1,
              "insight": "True leadership creates an environment where every child feels valued, safe, and inspired!",
              "rewardKP": 20
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Channeling of Mental Energy",
            "paragraphs": [
              "Matilda was immediately moved into the top class with fourteen-year-old students, where she mastered advanced algebra, Latin poetry, and physics effortlessly.",
              "Fascinatingly, Matilda noticed that her telekinetic powers had subsided. Miss Honey explained that previously, Matilda's massive intellect had been under-stimulated, causing the excess mental energy to discharge outward through telekinesis.",
              "Now that her brain was fully challenged and nourished every day by complex academics, all her mental horsepower was channeled constructively into learning."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Honey",
                "text": "Your brain is no longer a boiling kettle with no outlet, Matilda—it is doing the work it was born to do!",
                "avatarEmoji": "👩‍🏫",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-matilda-78-4-p2",
              "question": "Find a word on this page that means: \"To become less intense, violent, or severe; to settle down.\".",
              "options": [
                "Following",
                "Chalkboard",
                "Subside"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Subside\" (sub-SYD) means to become less intense, violent, or severe; to settle down.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "Chosen Family and The Final Departure",
            "paragraphs": [
              "When the police closed in on Mr. Wormwood's fraudulent car ring, the family prepared to flee to Spain. Matilda sprinted to Miss Honey to ask if she could stay behind.",
              "Mr. and Mrs. Wormwood, eager to discard parental responsibility, signed the adoption consent papers without looking back and accelerated down the street.",
              "As the car disappeared in a cloud of dust, Miss Honey and Matilda walked hand in hand up the garden path to their grand estate. In each other, they had found their true chosen family—anchored in unconditional love, wisdom, and lifelong companionship."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Honey",
                "text": "We belong together, Matilda. Today and every day.",
                "avatarEmoji": "👩‍🏫",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "I have a mother who reads with me, loves me, and understands my heart.",
                "avatarEmoji": "💖",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m78-4-3",
              "question": "What core theme about family concludes the novel *Matilda*?",
              "options": [
                "True family is defined by genuine love, emotional connection, and mutual respect rather than mere biology",
                "It is best to live alone in a treehouse",
                "Parents must always be obeyed even if they are criminals"
              ],
              "correctInsightIndex": 0,
              "insight": "Love, respect, and deep understanding create the truest and most lasting families!",
              "rewardKP": 20
            }
          }
        ],
        "paragraphs": [
          "Miss Agatha Trunchbull vanished forever, allowing Miss Honey to recover her father's grand red-brick home and become Headmistress of Crunchem Hall.",
          "Matilda was promoted to the highest academic form, where her telekinetic powers naturally subsided as her colossal intellect was finally channeled into advanced studies.",
          "When the police closed in on Mr. Wormwood's fraudulent car racket, the Wormwoods prepared to flee to Spain.",
          "Matilda pleaded to stay behind with Miss Honey, and her indifferent parents casually signed the adoption papers before speeding away.",
          "The novel concludes on an uplifting theme of chosen family, intellectual fulfillment, and enduring love."
        ],
        "vocabList": [
          {
            "word": "Subside",
            "phonics": "sub-SYD",
            "definition": "To become less intense, violent, or severe; to settle down.",
            "funExample": "Matilda's telekinesis subsided as her brain was fully engaged.",
            "emoji": "🌊"
          },
          {
            "word": "Chosen Family",
            "phonics": "CHOH-zen FAM-uh-lee",
            "definition": "A group of people consciously chosen to provide mutual love and support, regardless of biological ties.",
            "funExample": "Miss Honey and Matilda formed a beautiful chosen family.",
            "emoji": "🤝"
          }
        ],
        "microChallenge": {
          "id": "mc-m78-4",
          "title": "Spell 'FAMILY'!",
          "type": "word_scramble",
          "prompt": "Tap the letters to spell FAMILY for Miss Honey and Matilda:",
          "targetWord": "FAMILY",
          "scrambleLetters": [
            "M",
            "I",
            "F",
            "Y",
            "A",
            "L"
          ],
          "rewardGems": 40
        },
        "quizQuestions": [
          {
            "id": "qc78-4-1",
            "question": "According to Miss Honey's psychological explanation, why did Matilda's telekinetic powers diminish after she was moved to the top class?",
            "options": [
              "Her colossal mental energy was now fully engaged and challenged by advanced schoolwork rather than overflowing through telekinesis",
              "She lost her memory of the classroom events",
              "She stopped eating healthy meals",
              "Telekinesis only works on Mondays"
            ],
            "correctIndex": 0,
            "explanation": "Miss Honey explained that Matilda's powers were an outlet for an under-stimulated brain; once challenged with advanced studies, her energy was channeled into learning.",
            "visualClueEmoji": "🧠",
            "points": 70
          },
          {
            "id": "q-matilda-78-4-vocab1",
            "question": "Find a word in the passage that means: \"To become less intense, violent, or severe; to settle down.\".",
            "options": [
              "Following",
              "Chalkboard",
              "Incident",
              "Subside"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Subside\" means to become less intense, violent, or severe; to settle down.",
            "visualClueEmoji": "🌊",
            "points": 60
          },
          {
            "id": "qc78-4-3",
            "question": "What does it mean for an intense force or symptom to 'subside'?",
            "options": [
              "To double in size rapidly",
              "To diminish, settle down, or return to a calm state",
              "To turn into a solid block of gold",
              "To start shouting loudly"
            ],
            "correctIndex": 1,
            "explanation": "Subside means to calm down, ease off, or become less intense.",
            "visualClueEmoji": "🌊",
            "points": 70
          },
          {
            "id": "q-matilda-78-4-vocab2",
            "question": "Find a word in the passage that means: \"A group of people consciously chosen to provide mutual love and support, regardless of biological ties.\".",
            "options": [
              "Following",
              "Chalkboard",
              "Chosen Family",
              "Incident"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Chosen Family\" means a group of people consciously chosen to provide mutual love and support, regardless of biological ties.",
            "visualClueEmoji": "🤝",
            "points": 60
          }
        ]
      },
      {
        "id": "matilda-78-5",
        "dayNumber": 5,
        "title": "The Golden Age of Crunchem Hall & The Legacy of Miss Honey",
        "subtitle": "A revitalized academy, advanced scholastic honors, and an enduring sanctuary of love",
        "estReadingMinutes": 15,
        "totalWordCount": 780,
        "summary": "Explore the glorious renaissance of Crunchem Hall under Headmistress Miss Honey. With the Chokey dismantled and the red-brick estate restored into a sanctuary of learning, Matilda embarks on advanced secondary academics, proving that wisdom and love triumph over tyranny.",
        "visualScenes": [
          {
            "id": "scene-m78-5",
            "title": "The Renaissance of Crunchem Hall & The Great Library",
            "backgroundGradient": "from-emerald-900 via-teal-900 to-amber-950",
            "illustrationType": "matilda_library",
            "caption": "Under Miss Honey's leadership, the grim fortress of Crunchem Hall blossomed into a vibrant beacon of intellectual curiosity, artistic joy, and warm encouragement.",
            "characterAvatars": [
              {
                "name": "Miss Honey",
                "emoji": "👩‍🏫",
                "speech": "Every child is a unique constellation of brilliance and promise.",
                "position": "left"
              },
              {
                "name": "Matilda",
                "emoji": "👧",
                "speech": "We have unlocked every door of knowledge together, Miss Honey!",
                "position": "center"
              },
              {
                "name": "Nigel",
                "emoji": "👦",
                "speech": "No more Chokey! We love coming to school every morning!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "h78-5-1",
                "x": 45,
                "y": 55,
                "label": "Scholastic Honors Scroll",
                "icon": "📜",
                "soundEffect": "success",
                "funFact": "Matilda was placed in the highest secondary academic form at age six!",
                "action": "sparkle"
              },
              {
                "id": "h78-5-2",
                "x": 80,
                "y": 40,
                "label": "Memorial Wildflower Garden",
                "icon": "🌸",
                "soundEffect": "magic",
                "funFact": "Miss Honey planted a circle of lavender and white roses in honor of her father Magnus.",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Dismantling the Architecture of Oppression",
            "paragraphs": [
              "On Miss Honey's first official day as Headmistress, the senior students joined together with sledgehammers and crowbars to tear down the dreaded Chokey cupboard in the hallway.",
              "In its place, Miss Honey commissioned a glass-fronted library annex filled with natural light, watercolor paintings, and hundreds of vibrant encyclopedias donated by the county educational trust.",
              "The dark shadow that had gripped Crunchem Hall for decades dissolved completely, replaced by children's laughter, violin melodies from the music hall, and lively scientific debates."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Honey",
                "text": "Fear has no place where young minds come to grow. Today, we inaugurate an academy of joy!",
                "avatarEmoji": "👩‍🏫",
                "side": "left"
              },
              {
                "speaker": "Bruce Bogtrotter",
                "text": "Three cheers for Headmistress Honey! The best teacher in England!",
                "avatarEmoji": "🍰",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m78-5-1",
              "question": "What symbolic importance did dismantling the Chokey hold for the school community?",
              "options": [
                "They needed more firewood for the winter",
                "It was done to make room for a candy vending machine",
                "It represented the permanent eradication of fear and tyranny, replacing cruelty with an architecture of light and learning"
              ],
              "correctInsightIndex": 2,
              "insight": "True education flourishes only when the structures of intimidation are entirely replaced with empathy and respect!",
              "rewardKP": 20
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Channels of Mental Genius",
            "paragraphs": [
              "In her accelerated classes with the sixth-formers, Matilda engaged in advanced calculus, comparative world literature, and conversational Latin.",
              "Without the constant frustration of being forced to repeat elementary nursery rhymes, Matilda's extraordinary brain found its natural equilibrium.",
              "Her telekinetic bursts became a serene, calm clarity of thought. As Miss Honey had predicted, when towering mental capacity is nourished with profound intellectual challenges, it converts effortlessly into scholarly mastery."
            ],
            "dialogueBites": [
              {
                "speaker": "Matilda",
                "text": "It feels as though my thoughts are swimming in a deep, crystal-clear ocean of ideas.",
                "avatarEmoji": "👧",
                "side": "left"
              },
              {
                "speaker": "Miss Honey",
                "text": "Your intellect is a rare gift, Matilda. Use it always to uplift and understand the world.",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-matilda-78-5-p2",
              "question": "Find a word on this page that means: \"Given, felt, or done in return; mutual.\".",
              "options": [
                "Reciprocal",
                "Miss",
                "Honey"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Reciprocal\" (rih-SIP-ruh-kul) means given, felt, or done in return; mutual.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Sanctuary of Chosen Kinship",
            "paragraphs": [
              "Every afternoon after the school bell rang, Matilda and Miss Honey walked hand in hand back up the leafy country lane to the grand red-brick house.",
              "In the evening, the drawing room was illuminated by a warm crackling hearth. Matilda would curl up in a comfortable chair with *Jane Eyre*, while Miss Honey composed lesson plans at Magnus's polished mahogany desk.",
              "They had both escaped cruelty and neglect; together, they had established an enduring sanctuary where love, intellect, and reciprocal dignity would reign forever."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Honey",
                "text": "We have given each other the greatest gift in life: a home where our souls belong.",
                "avatarEmoji": "💖",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "We are the luckiest family in the whole world, Miss Honey.",
                "avatarEmoji": "👧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m78-5-3",
              "question": "What core truth about human relationships is highlighted by Matilda and Miss Honey's shared victory?",
              "options": [
                "Wealth is the only true measure of happiness",
                "True family is forged through deep reciprocal love, emotional safety, and shared values rather than mere biological coincidence",
                "One should never trust teachers or librarians"
              ],
              "correctInsightIndex": 1,
              "insight": "Chosen family rooted in love and mutual respect provides the ultimate emotional foundation in life.",
              "rewardKP": 25
            }
          }
        ],
        "paragraphs": [
          "Miss Honey was formally appointed Headmistress of Crunchem Hall, leading a dramatic transformation of the school's culture from tyranny to joy.",
          "The infamous Chokey was demolished and replaced with a luminous library annex stocked with classic literature and scientific journals.",
          "Matilda was placed in the highest academic form, where advanced mathematics and comparative literature fully channeled her intellectual genius.",
          "With her mind challenged and her spirit emotionally secure, Matilda's telekinetic power settled into permanent scholastic brilliance.",
          "Restored to the red-brick estate inherited from Magnus, Miss Honey and Matilda created an unbreakable sanctuary of love, books, and mutual devotion."
        ],
        "vocabList": [
          {
            "word": "Renaissance",
            "phonics": "ren-uh-SAHNS",
            "definition": "A revival of or renewed interest in something, especially culture, learning, or art.",
            "funExample": "Crunchem Hall experienced a wonderful educational renaissance.",
            "emoji": "🏛️"
          },
          {
            "word": "Equilibrium",
            "phonics": "ee-kwuh-LIB-ree-um",
            "definition": "A state in which opposing forces or influences are balanced and harmoniously stable.",
            "funExample": "Matilda's mind reached perfect intellectual equilibrium.",
            "emoji": "⚖️"
          },
          {
            "word": "Reciprocal",
            "phonics": "rih-SIP-ruh-kul",
            "definition": "Given, felt, or done in return; mutual.",
            "funExample": "Matilda and Miss Honey shared reciprocal love and respect.",
            "emoji": "🤝"
          }
        ],
        "microChallenge": {
          "id": "mc-m78-5",
          "title": "Thematic Harmony: Sequence the Resolution",
          "type": "candy_sort",
          "prompt": "Sequence the three elements of the resolution: 1. School Reformation, 2. Intellectual Equilibrium, 3. Chosen Sanctuary",
          "options": [
            "Intellectual Equilibrium",
            "School Reformation",
            "Chosen Sanctuary"
          ],
          "rewardGems": 60
        },
        "quizQuestions": [
          {
            "id": "qm78-5-1",
            "question": "How did Miss Honey replace the atmosphere of fear at Crunchem Hall once she became Headmistress?",
            "options": [
              "By hiring stricter guards",
              "By eliminating all homework and reading",
              "By demolishing the Chokey and creating a sunlit library annex with encouraging, joyful academic methods",
              "By increasing the number of physical exercise drills"
            ],
            "correctIndex": 2,
            "explanation": "Miss Honey dismantled the symbols of oppression and fostered an environment of curiosity and warmth.",
            "visualClueEmoji": "🏫",
            "points": 70
          },
          {
            "id": "q-matilda-78-5-vocab1",
            "question": "Find a word in the passage that means: \"A revival of or renewed interest in something, especially culture, learning, or art.\".",
            "options": [
              "Miss",
              "Honey",
              "Official",
              "Renaissance"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Renaissance\" means a revival of or renewed interest in something, especially culture, learning, or art.",
            "visualClueEmoji": "🏛️",
            "points": 60
          },
          {
            "id": "qm78-5-3",
            "question": "What does the word 'reciprocal' mean in describing the bond between Matilda and Miss Honey?",
            "options": [
              "Mutual, shared equally in both directions with genuine affection and respect",
              "One-sided and forced by law",
              "Temporary and expiring after one month",
              "Purely business-oriented"
            ],
            "correctIndex": 0,
            "explanation": "Reciprocal means mutual—felt, given, and returned equally by both individuals.",
            "visualClueEmoji": "🤝",
            "points": 70
          },
          {
            "id": "q-matilda-78-5-vocab2",
            "question": "Find a word in the passage that means: \"A state in which opposing forces or influences are balanced and harmoniously stable.\".",
            "options": [
              "Miss",
              "Equilibrium",
              "Honey",
              "Official"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Equilibrium\" means a state in which opposing forces or influences are balanced and harmoniously stable.",
            "visualClueEmoji": "⚖️",
            "points": 60
          }
        ]
      }
    ],
    "9+": [
      {
        "id": "matilda-9-1",
        "dayNumber": 1,
        "title": "Matilda and the Wonderful World of Books",
        "subtitle": "A brilliant four-year-old reader and poetic justice with Superglue!",
        "estReadingMinutes": 15,
        "totalWordCount": 760,
        "summary": "Brilliant four-year-old Matilda teaches herself to read and discovers great literature at the library. When her dishonest parents mistreat her, Matilda retaliates with clever pranks!",
        "visualScenes": [
          {
            "id": "scene-m9-1",
            "title": "The Sanctuary of the Public Library",
            "backgroundGradient": "from-slate-900 via-emerald-950 to-teal-950",
            "illustrationType": "matilda_library",
            "caption": "Mrs. Phelps watched in awe as little Matilda read Charles Dickens and Ernest Hemingway, finding friendship in books.",
            "characterAvatars": [
              {
                "name": "Matilda",
                "emoji": "👧",
                "speech": "Books take me on magnificent adventures across the globe!",
                "position": "left"
              },
              {
                "name": "Mrs. Phelps",
                "emoji": "👩‍💼",
                "speech": "You read with such wonder, Matilda!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hm9-1",
                "x": 30,
                "y": 65,
                "label": "Classic Novels",
                "icon": "📚",
                "soundEffect": "magic",
                "funFact": "Matilda read Great Expectations, Jane Eyre, and The Secret Garden by age four!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "A Tiny Girl with an Astonishing Mind",
            "paragraphs": [
              "In a quiet English village, four-year-old Matilda Wormwood possessed an astonishing, brilliant mind. By the age of one and a half, she spoke with the clarity of an adult. By age four, she had taught herself to read using old newspapers and magazines scattered around the house.",
              "Her parents, Mr. and Mrs. Wormwood, were loud, foolish, and completely indifferent to her brilliance. Mr. Wormwood was a dishonest used-car dealer who wore loud checked jackets and used an electric drill to run car mileages backwards to cheat his customers. Mrs. Wormwood spent five afternoons a week playing bingo in Aylesbury. Every evening, the family sat glued to the television screen, eating frozen dinners from aluminium trays in total silence.",
              "When Matilda politely asked her father for a book, he barked: 'A book? What do you want a flaming book for? What's wrong with the telly?' Matilda decided that if her parents would not buy her books, she would find them herself."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wormwood",
                "text": "What do you want a flaming book for? Watch the telly like everyone else!",
                "avatarEmoji": "👨",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "Books carry me to distant worlds and introduce me to wonderful friends.",
                "avatarEmoji": "👧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m9-1-1",
              "question": "How did Matilda's parents treat her remarkable love of books?",
              "options": [
                "They bought her a room full of storybooks",
                "They ignored her, scolded her, and demanded she watch television instead",
                "They hired a famous private tutor for her"
              ],
              "correctInsightIndex": 1,
              "insight": "Matilda's parents were shallow and ignored her brilliance, demanding she watch television.",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Public Library and The Red Pony",
            "paragraphs": [
              "Every afternoon, while her mother was away at bingo, Matilda walked down to the village public library. The kind librarian, Mrs. Phelps, was amazed to see a tiny girl reading entirely on her own. Within six months, Matilda had read every children's book in the building.",
              "Mrs. Phelps then introduced Matilda to the adult section, beginning with Great Expectations by Charles Dickens. The magnificent stories transported Matilda into wonderful distant worlds. She traveled to nineteenth-century London with Dickens, to India with Rudyard Kipling, and across the African plains with Ernest Hemingway.",
              "One evening, Matilda was reading The Red Pony by John Steinbeck at home. Mr. Wormwood marched in, snatched the precious library book from her hands, and ripped the pages to shreds, throwing them into the rubbish bin. Matilda's heart burned with anger. She resolved that whenever her parents were beastly, she would punish them with a clever, harmless prank."
            ],
            "dialogueBites": [
              {
                "speaker": "Mrs. Phelps",
                "text": "You have finished all the children's stories, Matilda! Here is Charles Dickens!",
                "avatarEmoji": "👩‍💼",
                "side": "left"
              },
              {
                "speaker": "Mr. Wormwood",
                "text": "Trash! Filth! No daughter of mine reads books in this house!",
                "avatarEmoji": "👨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-matilda-9-1-p2",
              "question": "Find a word on this page that means: \"Causing immense wonder, surprise, or amazement.\".",
              "options": [
                "Quiet",
                "English",
                "Astonishing"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Astonishing\" (uh-STON-ish-ing) means causing immense wonder, surprise, or amazement.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "Superglue on the Porkpie Hat and the Ghostly Parrot",
            "paragraphs": [
              "Matilda's first act of justice targeted her father's vanity. Mr. Wormwood was extremely proud of his green porkpie hat with a feather in the band. Before he left for work, Matilda sneakily squeezed Superglue all along the inside leather rim.",
              "When Mr. Wormwood put the hat on his head, it bonded permanently to his scalp! He pulled and he tugged, but the hat stayed firmly stuck. He had to wear the hat all day at work, through dinner, and even in bed. Mrs. Wormwood finally had to snip the hat off with scissors, leaving bald white patches on his head!",
              "A week later, Matilda borrowed a talking parrot named Chopper from her friend Fred and hid the cage inside the dark chimney. That night, when the parrot croaked from the fireplace: 'Rattle my bones! Hullo, hullo!', the terrified Wormwoods thought a burglar was in the room and hid under the sofa in terror. Matilda sat calmly in the armchair, smiling quietly over her book."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wormwood",
                "text": "My hat! It's glued to my skull! I can't get it off!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "You must have a very sticky head, Father!",
                "avatarEmoji": "👧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m9-1-3",
              "question": "How did Matilda solve the problem of her father's cruel bullying?",
              "options": [
                "She outsmarted him using clever, peaceful pranks that targeted his vanity",
                "She yelled and threw plates in the kitchen",
                "She called the local newspaper to complain"
              ],
              "correctInsightIndex": 0,
              "insight": "Matilda used her sharp intelligence to deliver non-violent justice and keep her self-respect intact.",
              "rewardKP": 15
            }
          }
        ],
        "paragraphs": [
          "Four-year-old Matilda Wormwood lived in an English village with parents who cared only for television and ignored her brilliance.",
          "Matilda taught herself to read and walked to the public library every afternoon, guided by the kind librarian Mrs. Phelps.",
          "Matilda devoured classic literature by Charles Dickens, Jane Austen, and Ernest Hemingway, finding comfort and adventures in books.",
          "When Mr. Wormwood cruelly ripped her library book The Red Pony into shreds, Matilda decided to punish her parents with clever pranks.",
          "She spread Superglue inside her father's favorite green porkpie hat, permanently bonding it to his head until it had to be snipped off.",
          "She hid a talking parrot inside the chimney, terrifying her foolish parents into believing a ghostly burglar was in the house."
        ],
        "vocabList": [
          {
            "word": "Indifferent",
            "phonics": "in-DIF-er-unt",
            "definition": "Having no interest, care, or sympathy for something.",
            "funExample": "Matilda's parents were completely indifferent to her reading.",
            "emoji": "😐"
          },
          {
            "word": "Retaliate",
            "phonics": "ri-TAL-ee-ayt",
            "definition": "To return an action, especially to deliver fair justice.",
            "funExample": "Matilda decided to retaliate against cruelty with clever wit.",
            "emoji": "⚖️"
          },
          {
            "word": "Astonishing",
            "phonics": "uh-STON-ish-ing",
            "definition": "Causing immense wonder, surprise, or amazement.",
            "funExample": "Matilda had an astonishing mind for a four-year-old child.",
            "emoji": "✨"
          }
        ],
        "microChallenge": {
          "id": "mc-m9-1",
          "title": "Library Book Stack",
          "type": "word_scramble",
          "prompt": "Unscramble the word: Dickens wrote stories of great WONDER",
          "targetWord": "WONDER",
          "scrambleLetters": [
            "D",
            "E",
            "W",
            "R",
            "O",
            "N"
          ],
          "rewardGems": 30
        },
        "quizQuestions": [
          {
            "id": "qm9-1-1",
            "question": "Why did Matilda start walking to the village public library all by herself?",
            "options": [
              "She was assigned to clean the library shelves after school",
              "Her parents ignored her and she loved reading stories that took her on great adventures",
              "She wanted to sell old magazines to the librarian",
              "The television in her house had run out of batteries"
            ],
            "correctIndex": 1,
            "explanation": "Matilda walked to the library because her parents refused to buy books and she loved story adventures.",
            "visualClueEmoji": "📚",
            "points": 60
          },
          {
            "id": "q-matilda-9-1-vocab1",
            "question": "Find a word in the passage that means: \"Having no interest, care, or sympathy for something.\".",
            "options": [
              "Quiet",
              "English",
              "Indifferent",
              "Village"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Indifferent\" means having no interest, care, or sympathy for something.",
            "visualClueEmoji": "😐",
            "points": 60
          },
          {
            "id": "qm9-1-3",
            "question": "How did Matilda get revenge on her father's vanity with his favorite porkpie hat?",
            "options": [
              "She lined the inner rim with Superglue so it stuck permanently to his scalp",
              "She painted the hat with bright orange polka dots",
              "She fed the hat to the neighbor's dog",
              "She hid the hat in the vegetable garden"
            ],
            "correctIndex": 0,
            "explanation": "Matilda put Superglue inside the hat, so it stuck firmly to Mr. Wormwood's head all day!",
            "visualClueEmoji": "🎩",
            "points": 60
          },
          {
            "id": "q-matilda-9-1-vocab2",
            "question": "Find a word in the passage that means: \"To return an action, especially to deliver fair justice.\".",
            "options": [
              "Quiet",
              "English",
              "Village",
              "Retaliate"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Retaliate\" means to return an action, especially to deliver fair justice.",
            "visualClueEmoji": "⚖️",
            "points": 60
          }
        ]
      },
      {
        "id": "matilda-9-2",
        "dayNumber": 2,
        "title": "The Terror of Crunchem Hall & Miss Trunchbull",
        "subtitle": "Miss Honey's warmth, Amanda's pigtails, and Bruce's chocolate cake victory!",
        "estReadingMinutes": 15,
        "totalWordCount": 770,
        "summary": "Matilda starts school at Crunchem Hall. The gentle Miss Honey recognizes her genius, while the fearsome Headmistress Miss Trunchbull terrorizes the students with hammer-throwing feats!",
        "visualScenes": [
          {
            "id": "scene-m9-2",
            "title": "The School Assembly and the Giant Cake",
            "backgroundGradient": "from-amber-900 via-rose-950 to-slate-900",
            "illustrationType": "chokey_escape",
            "caption": "Bruce Bogtrotter held up the empty platter in triumph! All the students erupted into wild cheers of victory.",
            "characterAvatars": [
              {
                "name": "Miss Trunchbull",
                "emoji": "👹",
                "speech": "Eat the cake, Bogtrotter, or face the Chokey!",
                "position": "left"
              },
              {
                "name": "Bruce",
                "emoji": "🎂",
                "speech": "I finished every single crumb!",
                "position": "center"
              },
              {
                "name": "Miss Honey",
                "emoji": "👩‍🏫",
                "speech": "Matilda's mathematical mind is miraculous!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hm9-2",
                "x": 50,
                "y": 55,
                "label": "Chocolate Platter",
                "icon": "🍰",
                "soundEffect": "magic",
                "funFact": "The chocolate cake was sixteen inches wide and made with real melted chocolate!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Gentle Teacher and the Mathematical Miracle",
            "paragraphs": [
              "At the age of five and a half, Matilda finally started school at Crunchem Hall Primary School. Her classroom teacher was Miss Jennifer Honey, a quiet, gentle woman of twenty-three with a warm oval face and kind brown eyes. The children loved her instantly. The scene was filled with tyrannical, creating an unforgettable moment. The scene was filled with prodigy, creating an unforgettable moment. The scene was filled with resilience, creating an unforgettable moment.",
              "During their very first morning lesson, Miss Honey tested the children's counting. To her complete amazement, Matilda multiplied fourteen times nineteen in her head in less than two seconds! Miss Honey wrote down longer and longer equations, and Matilda solved them all without paper or pencil. When Matilda recited a complex poem with perfect expression, Miss Honey gasped in wonder. She knew she had encountered a true child genius.",
              "Deeply excited, Miss Honey walked straight to the Headmistress's office to urge that Matilda be moved up to the highest class immediately."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Honey",
                "text": "Fourteen times nineteen... Matilda, how did you calculate two hundred and sixty-six so fast?",
                "avatarEmoji": "👩‍🏫",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "I just see the numbers dancing together in my head, Miss Honey.",
                "avatarEmoji": "👧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m9-2-1",
              "question": "What did Miss Honey discover during Matilda's very first morning at school?",
              "options": [
                "Matilda did not know how to count to ten",
                "Matilda wanted to sleep during the math lesson",
                "Matilda could multiply large numbers in seconds and read adult poetry with ease"
              ],
              "correctInsightIndex": 2,
              "insight": "Miss Honey immediately recognized Matilda's extraordinary mathematical and literary genius.",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Fearsome Headmistress Miss Trunchbull",
            "paragraphs": [
              "The headmistress of Crunchem Hall was Miss Agatha Trunchbull, a former Olympic hammer thrower with massive shoulders, bull-like neck, and fierce, glaring eyes. She marched through the corridors in brown riding breeches and heavy boots, carrying a riding crop.",
              "Miss Trunchbull despised small children with all her heart. 'Nasty little stinkers!' she bellowed. 'Small children are like poisonous bedbugs! They ought to be locked in cages!' When Miss Honey asked for Matilda to be promoted, Trunchbull sneered that Mr. Wormwood had warned her Matilda was a deceitful viper. She refused to move Matilda and threatened Miss Honey with dismissal.",
              "The Trunchbull ruled the school through terrifying punishments. Her favorite threat was the Chokey—a tall, pitch-black cupboard lined with broken glass and sharp nails, where children were locked upright in the dark for hours."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Trunchbull",
                "text": "Children are filthy little vipers! I will break their spirits!",
                "avatarEmoji": "👹",
                "side": "left"
              },
              {
                "speaker": "Miss Honey",
                "text": "Matilda is a brilliant child who deserves encouragement, Headmistress!",
                "avatarEmoji": "👩‍🏫",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-matilda-9-2-p2",
              "question": "Find a word on this page that means: \"The ability to withstand tough challenges and bounce back with strength.\".",
              "options": [
                "Resilience",
                "Five",
                "Half"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Resilience\" (ri-ZIL-yunss) means the ability to withstand tough challenges and bounce back with strength.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "Amanda's Pigtails and Bruce Bogtrotter's Triumph",
            "paragraphs": [
              "Miss Trunchbull's cruelty was on full display in the playground. When she spotted little Amanda Thripp with two long, lovely golden pigtails, Trunchbull roared: 'Cut off those filthy pigtails!' When Amanda protested, Trunchbull seized Amanda by the pigtails, spun like an Olympic hammer thrower, and hurled Amanda flying fifty yards across the sky right over the chain-link fence! Miraculously, Amanda landed on soft grass and bounced to her feet unhurt.",
              "The next afternoon, Trunchbull gathered the entire school in the assembly hall. She accused eleven-year-old Bruce Bogtrotter of stealing a slice of her private chocolate cake. As punishment, she forced him onto the stage to eat an entire sixteen-inch chocolate cake in front of everyone.",
              "Trunchbull expected Bruce to burst or collapse. But cheered on by Matilda and the hundreds of whispering students, Bruce ate every crumb, licked the silver platter completely clean, and held it above his head in victory! The entire school erupted in deafening cheers, leaving Miss Trunchbull trembling with helpless fury."
            ],
            "dialogueBites": [
              {
                "speaker": "Bruce Bogtrotter",
                "text": "I did it! The platter is empty!",
                "avatarEmoji": "🎂",
                "side": "left"
              },
              {
                "speaker": "Students",
                "text": "Hooray for Bruce! He ate the whole cake!",
                "avatarEmoji": "🎉",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m9-2-3",
              "question": "How did the students defeat Miss Trunchbull during Bruce Bogtrotter's cake ordeal?",
              "options": [
                "They threw food at the stage",
                "They cheered for Bruce together, turning her cruel punishment into a joyful victory",
                "They ran home to call the fire department"
              ],
              "correctInsightIndex": 1,
              "insight": "By uniting together and cheering for Bruce, the students shattered Trunchbull's fear.",
              "rewardKP": 15
            }
          }
        ],
        "paragraphs": [
          "Matilda began attending Crunchem Hall Primary School, where the gentle teacher Miss Honey discovered her extraordinary genius in math and reading.",
          "Miss Honey tried to persuade the headmistress to move Matilda to the top class, but Miss Trunchbull flatly refused.",
          "Headmistress Miss Trunchbull was a terrifying former Olympic hammer thrower who hated small children and punished them with the Chokey.",
          "In the playground, Trunchbull swung little Amanda Thripp by her golden pigtails and hurled her over the fence like a sports hammer.",
          "Trunchbull forced Bruce Bogtrotter to eat a giant sixteen-inch chocolate cake in front of the whole school, expecting him to burst.",
          "With the whole school cheering him on, Bruce heroically ate every single crumb, transforming Trunchbull's cruel punishment into a glorious victory."
        ],
        "vocabList": [
          {
            "word": "Tyrannical",
            "phonics": "tuh-RAN-ih-kul",
            "definition": "Cruel, harsh, and abusing power over others without mercy.",
            "funExample": "Miss Trunchbull was a tyrannical headmistress.",
            "emoji": "👹"
          },
          {
            "word": "Prodigy",
            "phonics": "PROD-uh-jee",
            "definition": "A young person endowed with exceptional abilities or genius.",
            "funExample": "Matilda was a true mathematical prodigy.",
            "emoji": "⭐"
          },
          {
            "word": "Resilience",
            "phonics": "ri-ZIL-yunss",
            "definition": "The ability to withstand tough challenges and bounce back with strength.",
            "funExample": "Bruce showed incredible resilience by finishing the giant cake.",
            "emoji": "💪"
          }
        ],
        "microChallenge": {
          "id": "mc-m9-2",
          "title": "The Chocolate Cake Countdown",
          "type": "word_scramble",
          "prompt": "Unscramble Bruce's victory: Bruce showed great COURAGE",
          "targetWord": "COURAGE",
          "scrambleLetters": [
            "G",
            "A",
            "C",
            "R",
            "U",
            "E",
            "O"
          ],
          "rewardGems": 35
        },
        "quizQuestions": [
          {
            "id": "qm9-2-1",
            "question": "What did Miss Honey discover about Matilda during their first math lesson?",
            "options": [
              "Matilda needed help writing the number one",
              "Matilda had forgotten how to speak English",
              "Matilda could multiply large numbers in seconds and read adult poetry with ease",
              "Matilda only wanted to play with building blocks"
            ],
            "correctIndex": 2,
            "explanation": "Miss Honey discovered that Matilda could multiply complex numbers in seconds without paper.",
            "visualClueEmoji": "🧠",
            "points": 60
          },
          {
            "id": "q-matilda-9-2-vocab1",
            "question": "Find a word in the passage that means: \"Cruel, harsh, and abusing power over others without mercy.\".",
            "options": [
              "Tyrannical",
              "Five",
              "Half",
              "Matilda"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Tyrannical\" means cruel, harsh, and abusing power over others without mercy.",
            "visualClueEmoji": "👹",
            "points": 60
          },
          {
            "id": "qm9-2-3",
            "question": "What did Miss Trunchbull do to Amanda Thripp in the playground?",
            "options": [
              "She gave Amanda a silver medal for running",
              "She invited Amanda to have tea in her office",
              "She braided Amanda's hair with ribbons",
              "She grabbed Amanda by her golden pigtails and hurled her over the playground fence"
            ],
            "correctIndex": 3,
            "explanation": "Trunchbull used her Olympic hammer-throwing technique to spin Amanda by her pigtails over the fence!",
            "visualClueEmoji": "🤸",
            "points": 60
          },
          {
            "id": "q-matilda-9-2-vocab2",
            "question": "Find a word in the passage that means: \"A young person endowed with exceptional abilities or genius.\".",
            "options": [
              "Five",
              "Prodigy",
              "Half",
              "Matilda"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Prodigy\" means a young person endowed with exceptional abilities or genius.",
            "visualClueEmoji": "⭐",
            "points": 60
          }
        ]
      },
      {
        "id": "matilda-9-3",
        "dayNumber": 3,
        "title": "Miss Honey's Secret and the Narrow Cottage",
        "subtitle": "A tiny wooden box for a table, and the tragic secret of Magnus!",
        "estReadingMinutes": 15,
        "totalWordCount": 760,
        "summary": "Matilda visits Miss Honey's humble cottage and discovers her beloved teacher lives in deep poverty. Miss Honey reveals her dark past: Miss Trunchbull is her cruel aunt who stole her home!",
        "visualScenes": [
          {
            "id": "scene-m9-3",
            "title": "Tea from the Primus Stove",
            "backgroundGradient": "from-amber-100 via-amber-200 to-stone-400",
            "illustrationType": "miss_honey_cottage",
            "caption": "Miss Honey poured tea from a boiling kettle into two tin mugs. Matilda listened in awe to the story of Magnus.",
            "characterAvatars": [
              {
                "name": "Miss Honey",
                "emoji": "👩‍🏫",
                "speech": "My father Dr. Magnus Honey loved me dearly.",
                "position": "left"
              },
              {
                "name": "Matilda",
                "emoji": "👧",
                "speech": "Miss Honey, this injustice must be corrected!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hm9-3",
                "x": 45,
                "y": 55,
                "label": "Primus Stove",
                "icon": "🔥",
                "soundEffect": "magic",
                "funFact": "Miss Honey cooked all her meals on a small camping stove with no electricity!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Walk to the Little Red Brick Cottage",
            "paragraphs": [
              "One warm afternoon after school, Miss Honey invited Matilda to her cottage for a cup of tea. They walked hand in hand down a narrow, overgrown country lane fringed with hazel trees and wild primroses. The scene was filled with usurp, creating an unforgettable moment. The scene was filled with sanctuary, creating an unforgettable moment.",
              "At the end of the path stood a tiny, weathered brick cottage that looked like something out of a fairy tale. The roof was made of mossy slate, and the front door was faded green. But when Matilda stepped inside, she was stunned by what she saw.",
              "The cottage was almost completely empty. There was no sofa, no armchairs, and no electric lights. The walls were bare plaster, and in the center of the room sat three upturned wooden boxes: one served as a table, and the other two as stools. The kitchen had no tap; water had to be hauled in buckets from a well at the end of the garden."
            ],
            "dialogueBites": [
              {
                "speaker": "Matilda",
                "text": "Miss Honey, do you live here all alone? Where is your furniture?",
                "avatarEmoji": "👧",
                "side": "left"
              },
              {
                "speaker": "Miss Honey",
                "text": "It is very simple, Matilda, but it is my peaceful sanctuary.",
                "avatarEmoji": "👩‍🏫",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m9-3-1",
              "question": "What was surprising about the inside of Miss Honey's cottage?",
              "options": [
                "It was almost completely empty, with upturned wooden boxes for furniture and no electricity",
                "It was filled with gold mirrors and crystal tables",
                "It was crowded with twenty television sets"
              ],
              "correctInsightIndex": 0,
              "insight": "Matilda was shocked to discover that her brilliant teacher lived in extreme, bare poverty.",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Tea on the Primus Stove and Miss Honey's Wages",
            "paragraphs": [
              "Miss Honey smiled gently at Matilda's wide eyes. She lit a small paraffin primus stove on the hearth, set a tin kettle to boil, and produced two tin mugs, a loaf of brown bread, and a small scrape of margarine.",
              "'I know it looks sparse, Matilda,' Miss Honey explained as she poured the tea. 'I can afford only one pound of margarine a week, and my salary as a teacher is completely signed away before I ever touch it.'",
              "Matilda leaned forward across the wooden box: 'Why, Miss Honey? How could anyone take your wages?' Miss Honey took a deep breath. She had never spoken of her past to any living soul, but Matilda's wise, loving eyes gave her the courage to reveal her darkest secret."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Honey",
                "text": "I have never told anyone this story, Matilda, but I trust you completely.",
                "avatarEmoji": "👩‍🏫",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "I will keep your secret safe, Miss Honey. Please tell me.",
                "avatarEmoji": "👧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-matilda-9-3-p2",
              "question": "Find a word on this page that means: \"A safe, peaceful place of shelter and refuge.\".",
              "options": [
                "Warm",
                "Sanctuary",
                "Afternoon"
              ],
              "correctInsightIndex": 1,
              "insight": "\"Sanctuary\" (SANK-choo-air-ee) means a safe, peaceful place of shelter and refuge.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Mystery of Magnus and the Cruel Aunt",
            "paragraphs": [
              "'My father was Dr. Magnus Honey,' whispered Miss Honey. 'He was a wonderful doctor who loved me with all his heart. When my mother passed away, my father invited my mother's unmarried stepsister to come and live with us to look after me.'",
              "'That aunt,' Miss Honey continued with a shudder, 'was Miss Agatha Trunchbull! She was cold, cruel, and terrifying. When I was five, my father died under mysterious circumstances in the woods. Trunchbull claimed he left a will giving the grand family house and all his money to her! She treated me like a slave, and when I grew up, she forced me to sign over all my teacher's wages to pay for my childhood food!'",
              "Matilda sat completely still, her brilliant brain whirring like clockwork. Trunchbull was a thief and a cruel bully who had robbed gentle Miss Honey of her rightful life. Matilda made a silent promise: she would bring justice to Miss Honey."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Honey",
                "text": "My cruel aunt was Miss Trunchbull. She took my father's house and my whole life.",
                "avatarEmoji": "👩‍🏫",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "Her name is Agatha, and your father's name was Magnus... I will help you, Miss Honey!",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m9-3-3",
              "question": "Who was the cruel aunt who stole Miss Honey's childhood home and wages?",
              "options": [
                "Mrs. Phelps, the village librarian",
                "Mrs. Wormwood, Matilda's mother",
                "Miss Agatha Trunchbull, the fearsome headmistress of Crunchem Hall"
              ],
              "correctInsightIndex": 2,
              "insight": "Miss Trunchbull was Miss Honey's cruel aunt who seized her family house and stolen her wages.",
              "rewardKP": 15
            }
          }
        ],
        "paragraphs": [
          "Miss Honey invited Matilda to her cottage for afternoon tea down a narrow, winding country lane.",
          "Matilda was astonished to find the cottage almost bare, with upturned wooden boxes for furniture, no running water, and no electricity.",
          "Miss Honey boiled tea over a paraffin primus stove and served tea in tin mugs with brown bread and margarine.",
          "Miss Honey confessed that her salary was secretly signed away every month, leaving her in extreme poverty.",
          "She revealed that her father was Dr. Magnus Honey, who died mysteriously when she was five years old.",
          "Her cruel aunt who seized the house and stole her wages was none other than Headmistress Miss Agatha Trunchbull. Matilda promised to deliver justice."
        ],
        "vocabList": [
          {
            "word": "Sparse",
            "phonics": "SPARSS",
            "definition": "Thinly scattered, bare, or containing very little.",
            "funExample": "Miss Honey's cottage had very sparse wooden furniture.",
            "emoji": "🪑"
          },
          {
            "word": "Usurp",
            "phonics": "yoo-ZURP",
            "definition": "To seize power, property, or position wrongfully by force.",
            "funExample": "Trunchbull usurped Miss Honey's rightful family house.",
            "emoji": "🏰"
          },
          {
            "word": "Sanctuary",
            "phonics": "SANK-choo-air-ee",
            "definition": "A safe, peaceful place of shelter and refuge.",
            "funExample": "The tiny cottage was Miss Honey's quiet sanctuary.",
            "emoji": "🌿"
          }
        ],
        "microChallenge": {
          "id": "mc-m9-3",
          "title": "Memory of Magnus",
          "type": "word_scramble",
          "prompt": "Unscramble the doctor's name: MAGNUS",
          "targetWord": "MAGNUS",
          "scrambleLetters": [
            "S",
            "U",
            "N",
            "G",
            "A",
            "M"
          ],
          "rewardGems": 35
        },
        "quizQuestions": [
          {
            "id": "qm9-3-1",
            "question": "What furniture did Miss Honey have in her cottage sitting room?",
            "options": [
              "A velvet couch and giant crystal chandeliers",
              "Three television sets and leather recliner chairs",
              "A grand piano and a banquet table",
              "Only three upturned wooden boxes for chairs and a table, with a primus stove"
            ],
            "correctIndex": 3,
            "explanation": "Miss Honey lived in extreme poverty with only upturned wooden boxes for a table and stools.",
            "visualClueEmoji": "📦",
            "points": 60
          },
          {
            "id": "q-matilda-9-3-vocab1",
            "question": "Find a word in the passage that means: \"Thinly scattered, bare, or containing very little.\".",
            "options": [
              "Warm",
              "Sparse",
              "Afternoon",
              "School"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Sparse\" means thinly scattered, bare, or containing very little.",
            "visualClueEmoji": "🪑",
            "points": 60
          },
          {
            "id": "qm9-3-3",
            "question": "Who was the cruel aunt who stole Miss Honey's family home and money?",
            "options": [
              "Mrs. Phelps, the village librarian",
              "Mrs. Wormwood, Matilda's mother",
              "Miss Agatha Trunchbull, the tyrannical headmistress of Crunchem Hall",
              "A stranger from another country"
            ],
            "correctIndex": 2,
            "explanation": "Miss Trunchbull was Miss Honey's cruel aunt who seized her father's house and stolen her wages.",
            "visualClueEmoji": "👹",
            "points": 60
          },
          {
            "id": "q-matilda-9-3-vocab2",
            "question": "Find a word in the passage that means: \"To seize power, property, or position wrongfully by force.\".",
            "options": [
              "Usurp",
              "Warm",
              "Afternoon",
              "School"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Usurp\" means to seize power, property, or position wrongfully by force.",
            "visualClueEmoji": "🏰",
            "points": 60
          }
        ]
      },
      {
        "id": "matilda-9-4",
        "dayNumber": 4,
        "title": "The Mystery of the Floating Chalk",
        "subtitle": "Lavender's pond newt, mind power, and the ghost of Magnus on the blackboard!",
        "estReadingMinutes": 15,
        "totalWordCount": 780,
        "summary": "Lavender slips a newt into Trunchbull's water jug. Matilda discovers her telekinetic power, practices lifting objects at home, and writes Magnus's warning on the blackboard!",
        "visualScenes": [
          {
            "id": "scene-m9-4",
            "title": "The Floating Chalk on the Blackboard",
            "backgroundGradient": "from-slate-950 via-purple-950 to-emerald-950",
            "illustrationType": "chalk_magic",
            "caption": "The white chalk hovered in mid-air, writing in giant letters: 'Agatha, this is Magnus! Give my Jenny her house!'",
            "characterAvatars": [
              {
                "name": "Matilda",
                "emoji": "👧",
                "speech": "My eyes are sending laser beams of pure energy!",
                "position": "left"
              },
              {
                "name": "Miss Trunchbull",
                "emoji": "😱",
                "speech": "Magnus! It cannot be!",
                "position": "center"
              },
              {
                "name": "Miss Honey",
                "emoji": "👩‍🏫",
                "speech": "Look at the blackboard! It's writing by itself!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hm9-4",
                "x": 50,
                "y": 35,
                "label": "Floating Chalk",
                "icon": "🪄",
                "soundEffect": "magic",
                "funFact": "Matilda moved the chalk purely through the power of her focused mind!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Lavender's Slimy Newt and the First Spark",
            "paragraphs": [
              "Before Miss Trunchbull's weekly classroom inspection, Matilda's spunky best friend Lavender decided to play a trick. She caught a slimy, spotted pond newt from the garden ditch and slipped it inside the Headmistress's glass water jug on the desk. The scene was filled with telekinesis, creating an unforgettable moment. The scene was filled with confrontation, creating an unforgettable moment. The scene was filled with indomitable, creating an unforgettable moment.",
              "When Miss Trunchbull marched in and poured herself a tumbler of water, the spotted newt splashed out and landed right on her massive bosom! The Trunchbull shrieked in horror, dancing like a madwoman. Seeing Matilda watching, Trunchbull pointed a thick finger and screamed: 'You did this, Matilda Wormwood! You disgusting little beast, you are going straight to the Chokey!'",
              "Matilda's blood boiled. She had not touched the jug! An extraordinary sensation began gathering behind her eyes—a strange, buzzing electricity of intense heat. She glared at the heavy water glass on the desk with all her mental focus. Suddenly, millions of tiny invisible hands seemed to shoot from her pupils. With a sharp crack, the water glass tipped over, spilling cold water all over Miss Trunchbull!"
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Trunchbull",
                "text": "A newt! A poisonous crocodile! Matilda, you put it in my water!",
                "avatarEmoji": "👹",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "I did not touch that jug, but watch what my mind can do!",
                "avatarEmoji": "⚡",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m9-4-1",
              "question": "How did Matilda discover her secret mind power in the classroom?",
              "options": [
                "She clapped her hands three times",
                "She focused intense energy from her eyes to tip over the glass of water on Trunchbull",
                "She read a magic incantation from a notebook"
              ],
              "correctInsightIndex": 1,
              "insight": "Matilda's fierce anger at being falsely blamed unlocked her extraordinary telekinetic power.",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Practicing with the Cigar in the Bedroom",
            "paragraphs": [
              "After school, Matilda stayed behind to demonstrate her power to Miss Honey, gently tipping the glass back and forth with her eyes. Miss Honey was thunderstruck, realizing that Matilda's unused brainpower was channeling pure kinetic energy.",
              "Matilda knew what she had to do. For the next six days, Matilda locked herself in her bedroom every afternoon. She took one of her father's cigars from the drawer, placed it on her dressing table, and practiced focusing her mind.",
              "At first, the cigar only trembled. But Matilda practiced with fierce discipline. By Wednesday, she could lift the heavy cigar completely into the air, guide it in circles around her bedroom, and balance it delicately on the wardrobe! She was ready to execute her master plan for Miss Honey."
            ],
            "dialogueBites": [
              {
                "speaker": "Matilda",
                "text": "The cigar is floating! I can steer it anywhere in the room with my mind!",
                "avatarEmoji": "🪄",
                "side": "left"
              },
              {
                "speaker": "Miss Honey",
                "text": "Your brain produces energy like a powerhouse, Matilda!",
                "avatarEmoji": "👩‍🏫",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-matilda-9-4-p2",
              "question": "Find a word on this page that means: \"Impossible to subdue, defeat, or discourage.\".",
              "options": [
                "Before",
                "Miss",
                "Indomitable"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Indomitable\" (in-DOM-ih-tuh-bul) means impossible to subdue, defeat, or discourage.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Chalkboard Confrontation and Trunchbull's Collapse",
            "paragraphs": [
              "On Thursday afternoon, Miss Trunchbull marched into class for her dreaded inspection. She began shouting at the children, demanding they recite their three-times tables backwards.",
              "Matilda sat in the second row, her hands folded neatly on the desk. She locked her eyes on a piece of white chalk sitting in the wooden blackboard groove. She summoned all the fiery electric power in her brain. Slowly, silently, the chalk rose into the air! It hovered before the blackboard and began writing in bold, jagged white letters:",
              "'Agatha, this is Magnus! Give my Jenny her house! Give my Jenny her wages! Give my Jenny her house and get out of here! If you don't, I will come and get you like you got me!'",
              "Miss Trunchbull's face turned chalky white. Her eyes bulged with pure horror. She gave a choking gasp: 'Magnus!'—and collapsed flat on the floor in a dead faint! When the school nurse and teachers rushed in, Trunchbull had vanished into her office, completely broken."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Trunchbull",
                "text": "Magnus! No, it cannot be! Mercy!",
                "avatarEmoji": "😱",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "The chalk wrote every single word! Miss Honey is free!",
                "avatarEmoji": "👧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m9-4-3",
              "question": "What terrifying message did Matilda's floating chalk write on the blackboard?",
              "options": [
                "'Agatha, this is Magnus! Give my Jenny her house! Give my Jenny her wages!'",
                "'Welcome to Crunchem Hall Primary School!'",
                "'Please remember to turn in your homework tomorrow!'"
              ],
              "correctInsightIndex": 0,
              "insight": "Matilda used Magnus's name to strike terror into Trunchbull and force her to return what she stole.",
              "rewardKP": 20
            }
          }
        ],
        "paragraphs": [
          "Lavender slipped a spotted garden newt into Miss Trunchbull's water jug before the weekly inspection.",
          "When the newt splashed onto Trunchbull's chest, she shrieked and falsely accused Matilda, threatening her with the Chokey.",
          "Matilda's fierce anger ignited a warm electric energy in her eyes, tipping the water glass right onto Miss Trunchbull.",
          "Matilda practiced for six days in her bedroom, learning to lift and steer her father's cigar through the air with her focused mind.",
          "During Thursday's inspection, Matilda used her telekinesis to lift a piece of chalk and write Magnus's ghostly warning on the blackboard.",
          "Trunchbull read the terrifying message demanding Jenny's house and wages, shrieked with horror, and collapsed flat on the floor in a dead faint."
        ],
        "vocabList": [
          {
            "word": "Telekinesis",
            "phonics": "tel-uh-kih-NEE-sis",
            "definition": "The ability to move objects from a distance using only the power of the mind.",
            "funExample": "Matilda unlocked telekinesis to lift the white chalk.",
            "emoji": "🪄"
          },
          {
            "word": "Confrontation",
            "phonics": "kon-frun-TAY-shun",
            "definition": "A direct face-to-face clash or meeting between opposing forces.",
            "funExample": "The blackboard confrontation ended Trunchbull's reign.",
            "emoji": "⚡"
          },
          {
            "word": "Indomitable",
            "phonics": "in-DOM-ih-tuh-bul",
            "definition": "Impossible to subdue, defeat, or discourage.",
            "funExample": "Matilda had an indomitable spirit of justice.",
            "emoji": "🛡️"
          }
        ],
        "microChallenge": {
          "id": "mc-m9-4",
          "title": "Levitate the Chalk",
          "type": "telekinesis_order",
          "prompt": "Tap the message words in order: 1. AGATHA, 2. MAGNUS, 3. HOUSE",
          "options": [
            "MAGNUS",
            "AGATHA",
            "HOUSE"
          ],
          "correctOrder": [
            "AGATHA",
            "MAGNUS",
            "HOUSE"
          ],
          "rewardGems": 40
        },
        "quizQuestions": [
          {
            "id": "qm9-4-1",
            "question": "What creature did Lavender put into Miss Trunchbull's water jug?",
            "options": [
              "A slimy, spotted pond newt",
              "A green garden caterpillar",
              "A furry brown field mouse",
              "A black water beetle"
            ],
            "correctIndex": 0,
            "explanation": "Lavender caught a spotted pond newt from the garden ditch and put it in Trunchbull's jug.",
            "visualClueEmoji": "🦎",
            "points": 60
          },
          {
            "id": "q-matilda-9-4-vocab1",
            "question": "Find a word in the passage that means: \"The ability to move objects from a distance using only the power of the mind.\".",
            "options": [
              "Before",
              "Miss",
              "Trunchbull",
              "Telekinesis"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Telekinesis\" means the ability to move objects from a distance using only the power of the mind.",
            "visualClueEmoji": "🪄",
            "points": 60
          },
          {
            "id": "qm9-4-3",
            "question": "How did Matilda practice controlling her mind power at home?",
            "options": [
              "She tried to lift heavy stone boulders in the garden",
              "She practiced lifting her father's cigar until she could steer it anywhere in the air",
              "She bent metal kitchen spoons with a hammer",
              "She practiced balancing books on her head"
            ],
            "correctIndex": 1,
            "explanation": "Matilda practiced in her bedroom lifting a cigar until she could guide it anywhere with her eyes.",
            "visualClueEmoji": "🪄",
            "points": 60
          },
          {
            "id": "q-matilda-9-4-vocab2",
            "question": "Find a word in the passage that means: \"A direct face-to-face clash or meeting between opposing forces.\".",
            "options": [
              "Before",
              "Miss",
              "Confrontation",
              "Trunchbull"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Confrontation\" means a direct face-to-face clash or meeting between opposing forces.",
            "visualClueEmoji": "⚡",
            "points": 60
          }
        ]
      },
      {
        "id": "matilda-9-5",
        "dayNumber": 5,
        "title": "A New School and a Happy Forever Home",
        "subtitle": "Miss Honey becomes headmistress, and Matilda finds her true loving family!",
        "estReadingMinutes": 15,
        "totalWordCount": 770,
        "summary": "Miss Trunchbull flees the village forever. Miss Honey recovers her family home and becomes headmistress of Crunchem Hall. When the Wormwoods flee to Spain, Matilda stays forever with Miss Honey!",
        "visualScenes": [
          {
            "id": "scene-m9-5",
            "title": "Embrace on the Green Lawn",
            "backgroundGradient": "from-emerald-800 via-teal-700 to-amber-200",
            "illustrationType": "miss_honey_cottage",
            "caption": "Matilda and Miss Honey hugged on the lawn outside the red brick house, their arms wrapped tight in joyful love.",
            "characterAvatars": [
              {
                "name": "Miss Honey",
                "emoji": "👩‍🏫",
                "speech": "You will live with me forever, my sweet Matilda!",
                "position": "left"
              },
              {
                "name": "Matilda",
                "emoji": "👧",
                "speech": "I finally have a true loving family!",
                "position": "center"
              },
              {
                "name": "Mr. Wormwood",
                "emoji": "🚗",
                "speech": "Speed up! We're heading to Spain!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hm9-5",
                "x": 45,
                "y": 50,
                "label": "Red Brick House",
                "icon": "🏡",
                "soundEffect": "magic",
                "funFact": "Miss Honey's family house had lovely apple trees and shelves filled with books!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Disappearance of Miss Trunchbull",
            "paragraphs": [
              "The morning after the blackboard miracle, Headmistress Miss Agatha Trunchbull was nowhere to be found. When the school nurse unlocked her private quarters, the rooms were empty. Trunchbull had packed her trunk in the dead of night and fled the village forever. The scene was filled with restoration, creating an unforgettable moment. The scene was filled with sanctuary, creating an unforgettable moment. The scene was filled with adoption, creating an unforgettable moment.",
              "A few days later, a letter arrived from the family lawyer. Dr. Magnus Honey's true legal will had mysteriously surfaced! The will proved beyond any doubt that the magnificent red brick family home, the grounds, and all the family money belonged entirely to his daughter, Miss Jennifer Honey.",
              "Miss Honey packed up her little cottage and moved back into her childhood home. With Trunchbull gone, the school board appointed Miss Honey as the brand new Headmistress of Crunchem Hall!"
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Honey",
                "text": "The house is mine again! My father's will has been restored!",
                "avatarEmoji": "👩‍🏫",
                "side": "left"
              },
              {
                "speaker": "Students",
                "text": "Trunchbull is gone! Hooray for Headmistress Honey!",
                "avatarEmoji": "🎉",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m9-5-1",
              "question": "What happened to Miss Trunchbull after the chalkboard incident?",
              "options": [
                "She apologized and bought ice cream for the whole school",
                "She became a librarian in town",
                "She packed her bags in the middle of the night and fled the village forever"
              ],
              "correctInsightIndex": 2,
              "insight": "Terrified of Magnus's ghost, Trunchbull abandoned the village and disappeared forever.",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "A Golden Age of Books and Laughter",
            "paragraphs": [
              "Under Headmistress Honey, Crunchem Hall underwent a miraculous transformation. The dark and terrifying Chokey was ripped out and replaced with a sunlit library filled with colorful beanbags and thousands of storybooks. The teachers smiled, the playground echoed with laughter, and children were treated with warmth and dignity.",
              "Matilda was moved immediately to the top class with the older children, where her brilliant mind was finally challenged with advanced literature and mathematics. Interestingly, as soon as her brain was occupied with rigorous learning every day, her strange telekinetic powers quietly faded away. Miss Honey explained that her brain had simply redirected all its excess energy into learning.",
              "Every afternoon after school, Matilda walked up to Miss Honey's lovely red brick house. They baked scones together, drank tea by the fireplace, and read poetry under the blooming apple trees in the garden."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Honey",
                "text": "A school should be a garden of joy, curiosity, and books!",
                "avatarEmoji": "👩‍🏫",
                "side": "left"
              },
              {
                "speaker": "Matilda",
                "text": "I love learning in the top class, Miss Honey!",
                "avatarEmoji": "👧",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-matilda-9-5-p2",
              "question": "Find a word on this page that means: \"Legally taking a child into one's family to love and raise as one's own.\".",
              "options": [
                "Adoption",
                "Morning",
                "Blackboard"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Adoption\" (uh-DOP-shun) means legally taking a child into one's family to love and raise as one's own.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Flight to Spain and the Forever Home",
            "paragraphs": [
              "One afternoon, Matilda walked home to find a scene of total chaos. Suitcases, coats, and cardboard boxes were piled high on the driveway. Mr. and Mrs. Wormwood and her brother Michael were frantically cramming everything into the boot of their car.",
              "'What's happening?' cried Matilda. 'Don't just stand there!' yelled Mr. Wormwood. 'We're clearing out! We're flying to Spain in thirty minutes!' The police had finally uncovered Mr. Wormwood's stolen car racket, and the family was fleeing the country to avoid arrest.",
              "Matilda's heart leaped. 'I don't want to go to Spain!' she cried. 'Can I stay here with Miss Honey?' Mr. Wormwood shoved the last suitcase in: 'Fine! One less mouth to feed! Go on then!' Matilda ran as fast as her legs could carry her up the lane to Miss Honey, who took her hand and asked her parents for official permission. With a screech of tires, the Wormwoods sped off forever. Matilda and Miss Honey wrapped their arms around each other, safe and loved in their forever home."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wormwood",
                "text": "Go live with your teacher then! One less mouth to feed!",
                "avatarEmoji": "🚗",
                "side": "left"
              },
              {
                "speaker": "Miss Honey",
                "text": "You are home with me now, Matilda. I love you with all my heart.",
                "avatarEmoji": "❤️",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-m9-5-3",
              "question": "Why was Matilda's family fleeing to Spain?",
              "options": [
                "They won a free luxury holiday on a cruise ship",
                "The police were coming to arrest Mr. Wormwood for his stolen car racket",
                "They wanted Matilda to learn Spanish"
              ],
              "correctInsightIndex": 1,
              "insight": "Mr. Wormwood was fleeing the police, giving Matilda the chance to stay with Miss Honey.",
              "rewardKP": 20
            }
          }
        ],
        "paragraphs": [
          "Miss Trunchbull vanished in the middle of the night, leaving the village forever after the chalkboard message.",
          "Dr. Magnus Honey's true will was recovered, restoring the red brick family home and inheritance to Miss Jennifer Honey.",
          "Miss Honey became the new Headmistress of Crunchem Hall, replacing the Chokey with a library and filling the school with books and joy.",
          "Matilda was promoted to the top class, where her brilliant brain was challenged and her telekinesis safely subsided into learning.",
          "The Wormwoods frantically packed their car to flee to Spain to escape the police after Mr. Wormwood's illegal car racket was discovered.",
          "Matilda begged to stay with Miss Honey. Her parents agreed and sped off, leaving Matilda and Miss Honey embracing happily in their forever home."
        ],
        "vocabList": [
          {
            "word": "Restoration",
            "phonics": "res-tuh-RAY-shun",
            "definition": "The act of returning something to its rightful owner or proper condition.",
            "funExample": "The legal restoration gave Miss Honey her house back.",
            "emoji": "🏰"
          },
          {
            "word": "Sanctuary",
            "phonics": "SANK-choo-air-ee",
            "definition": "A safe and peaceful place where someone is protected.",
            "funExample": "Miss Honey's home became Matilda's loving sanctuary.",
            "emoji": "🏡"
          },
          {
            "word": "Adoption",
            "phonics": "uh-DOP-shun",
            "definition": "Legally taking a child into one's family to love and raise as one's own.",
            "funExample": "Matilda's informal adoption brought deep happiness to both.",
            "emoji": "❤️"
          }
        ],
        "microChallenge": {
          "id": "mc-m9-5",
          "title": "Forever Home Journey",
          "type": "word_scramble",
          "prompt": "Unscramble Matilda's forever home: A true FAMILY",
          "targetWord": "FAMILY",
          "scrambleLetters": [
            "I",
            "M",
            "A",
            "L",
            "F",
            "Y"
          ],
          "rewardGems": 50
        },
        "quizQuestions": [
          {
            "id": "qm9-5-1",
            "question": "What happened to Miss Trunchbull after the incident with the floating chalk?",
            "options": [
              "She apologized to the children and gave them chocolate",
              "She bought the local sweet shop in town",
              "She packed her bags in the middle of the night and vanished from the village forever",
              "She became the head librarian"
            ],
            "correctIndex": 2,
            "explanation": "Trunchbull packed her bags in the middle of the night and fled the village forever.",
            "visualClueEmoji": "🏃‍♀️",
            "points": 60
          },
          {
            "id": "q-matilda-9-5-vocab1",
            "question": "Find a word in the passage that means: \"The act of returning something to its rightful owner or proper condition.\".",
            "options": [
              "Morning",
              "Blackboard",
              "Miracle",
              "Restoration"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Restoration\" means the act of returning something to its rightful owner or proper condition.",
            "visualClueEmoji": "🏰",
            "points": 60
          },
          {
            "id": "qm9-5-3",
            "question": "Why was the Wormwood family frantically packing their suitcases into the car?",
            "options": [
              "The police were coming because of Mr. Wormwood's illegal stolen car racket, and they were fleeing to Spain",
              "They won a luxury cruise around the world",
              "They bought a new television factory in Paris",
              "They were going on a weekend camping trip"
            ],
            "correctIndex": 0,
            "explanation": "The police had uncovered Mr. Wormwood's illegal car racket, forcing them to flee to Spain.",
            "visualClueEmoji": "🚗",
            "points": 60
          },
          {
            "id": "q-matilda-9-5-vocab2",
            "question": "Find a word in the passage that means: \"A safe and peaceful place where someone is protected.\".",
            "options": [
              "Morning",
              "Sanctuary",
              "Blackboard",
              "Miracle"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Sanctuary\" means a safe and peaceful place where someone is protected.",
            "visualClueEmoji": "🏡",
            "points": 60
          }
        ]
      }
    ]
  }
};
