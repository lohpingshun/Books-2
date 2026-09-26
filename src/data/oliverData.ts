import { Book } from "../types";

export const OLIVER_BOOK: Book = {
  "id": "oliver_twist",
  "title": "Oliver Twist",
  "author": "Charles Dickens",
  "badgeTitle": "Kind Heart & Unbreakable Spirit",
  "coverColor": "from-amber-950 via-slate-900 to-stone-900",
  "accentColor": "#f59e0b",
  "borderColor": "border-amber-400",
  "themeIcon": "🥣",
  "descriptionByAge": {
    "5-6": "Follow brave orphan Oliver Twist from the cold workhouse to London! Meet the Artful Dodger, kind Mr. Brownlow, and discover that honesty, love, and courage always shine through the darkest streets.",
    "7-8": "Charles Dickens' timeless classic! Follow young Oliver Twist as he dares to ask for more, escapes to Victorian London, navigates Fagin's pickpocket gang, and is rescued by the kindness of true friends.",
    "9+": "Charles Dickens' gripping masterpiece of innocence, injustice, and redemption. Journey with orphan Oliver Twist from parish workhouse cruelty through London's shadowy underworld to uncovering his true heritage."
  },
  "chaptersByAge": {
    "5-6": [
      {
        "id": "oliver_twist-56-1",
        "dayNumber": 1,
        "title": "Please, Sir, I Want Some More",
        "subtitle": "The hungry boys cast lots in the gloomy stone hall",
        "estReadingMinutes": 15,
        "totalWordCount": 520,
        "summary": "Born in a dreary parish workhouse, young orphan Oliver is pushed forward by his starving companions to ask the astonished master for another ladle of thin gruel.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-56-1",
            "title": "Please, Sir, I Want Some More",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "workhouse_hall",
            "caption": "Oliver steps forward with his wooden bowl into the stone dining hall as the master stares in shock!",
            "characterAvatars": [
              {
                "name": "Oliver",
                "emoji": "👦",
                "speech": "Please, sir, I want some more...",
                "position": "left"
              },
              {
                "name": "Mr. Bumble",
                "emoji": "🎩",
                "speech": "More?! Never has any boy asked for more in this parish!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot1",
                "x": 25,
                "y": 60,
                "label": "Wooden Gruel Bowl",
                "icon": "🥣",
                "soundEffect": "coin",
                "funFact": "Workhouse boys were fed only three small meals of thin gruel a day.",
                "action": "sparkle"
              },
              {
                "id": "ot2",
                "x": 75,
                "y": 45,
                "label": "Master Copper Ladle",
                "icon": "🥄",
                "soundEffect": "bounce",
                "funFact": "The parish master wore a grand cocked hat and carried a huge iron ladle.",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Starving Stone Hall",
            "paragraphs": [
              "In a cold English town, a little boy named Oliver Twist was born in a grey workhouse.",
              "The stone room was freezing in winter, and the boys were given only one small bowl of thin gruel each morning and evening.",
              "The boys were so hungry their eyes grew large and wild. Their wooden bowls shone bright because they licked them with their spoons until not a drop was left."
            ],
            "dialogueBites": [
              {
                "speaker": "Boy",
                "text": "Oliver, the lot fell on you! You must go up and ask for another spoonful!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Oliver",
                "text": "My knees shake, but I promised I would go...",
                "avatarEmoji": "🥺",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-56-1-p1",
              "question": "Why did the boys in the workhouse never need to wash their wooden bowls?",
              "options": [
                "Because the kitchen staff washed them in soapy boiling river water",
                "Because they scraped and licked them so clean with their spoons that not a crumb remained",
                "Because the boys threw their bowls away into the fireplace every day"
              ],
              "correctInsightIndex": 1,
              "insight": "Charles Dickens highlighted the severe poverty and hunger faced by children in 19th-century Britain.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Unthinkable Question",
            "paragraphs": [
              "One evening, the boys held a secret council. One tall boy was so hungry he warned he might bite his neighbor!",
              "They cast lots with slips of paper, and the lot fell on little Oliver. He had to walk up to the master after supper and ask for more gruel.",
              "Oliver rose from the table, shivering all over. He held his little wooden bowl tightly in both hands."
            ],
            "dialogueBites": [
              {
                "speaker": "Oliver",
                "text": "Please, sir, I want some more gruel.",
                "avatarEmoji": "🥣",
                "side": "left"
              },
              {
                "speaker": "Master",
                "text": "WHAT?! Say that again if you dare, boy!",
                "avatarEmoji": "😡",
                "side": "right"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Uproar and Confinement",
            "paragraphs": [
              "The fat master turned pale with shock! He clung to his great copper ladle for support.",
              "He struck Oliver with the ladle and shrieked for Mr. Bumble, the parish beadle in his grand gold-braided coat.",
              "The parish board decided Oliver was too rebellious. They posted a bill offering five pounds to anyone who would take him away!"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Bumble",
                "text": "That boy will come to be hanged! I knew it from the hour of his birth!",
                "avatarEmoji": "🎩",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "I only wanted a little more warm gruel to stop the pain in my stomach...",
                "avatarEmoji": "😢",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-56-1-p3",
              "question": "What did the parish board do after Oliver asked for more food?",
              "options": [
                "They gave every boy a feast of roasted turkey and plum pudding",
                "They elected Oliver as the new leader of the school council",
                "They posted a notice offering five pounds to anyone who would take Oliver away as an apprentice"
              ],
              "correctInsightIndex": 2,
              "insight": "Even in dark times, Oliver remained kind-hearted and brave.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Gruel",
            "phonics": "GROO-uhl",
            "definition": "A thin, watery porridge boiled in water or milk.",
            "funExample": "The hungry boys scraped their wooden bowls clean of every drop of gruel.",
            "emoji": "🥣"
          },
          {
            "word": "Astonishment",
            "phonics": "uh-STON-ish-munt",
            "definition": "A feeling of great surprise and wonder.",
            "funExample": "The master stared in silent astonishment at Oliver.",
            "emoji": "😲"
          },
          {
            "word": "Trembling",
            "phonics": "TREM-bling",
            "definition": "Shaking involuntarily with fear, cold, or weakness.",
            "funExample": "Oliver stood trembling before the stern parish beadle.",
            "emoji": "🥶"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-56-1",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 1!",
          "targetWord": "GRUEL",
          "scrambleLetters": [
            "L",
            "E",
            "U",
            "R",
            "G"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-56-1-comp",
            "question": "Why did Oliver walk up to the master to ask for more gruel?",
            "options": [
              "The boys cast lots and the choice fell on Oliver",
              "He wanted to play a trick",
              "The master called his name",
              "He was told to ask for salt"
            ],
            "correctIndex": 0,
            "textEvidence": "They cast lots with slips of paper, and the lot fell on little Oliver. He had to walk up to the master after supper and ask for more gruel.",
            "explanation": "From the text: 'They cast lots with slips of paper, and the lot fell on little Oliver.'",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-56-1-vocab",
            "question": "Find a word in the passage that means: \"A thin, watery porridge boiled in water or milk.\".",
            "options": [
              "Born",
              "Dreary",
              "Gruel",
              "Parish"
            ],
            "correctIndex": 2,
            "explanation": "In this chapter, \'Gruel\' means a thin, watery porridge boiled in water or milk.",
            "visualClueEmoji": "🥣",
            "points": 60
          }
        ]
      },
      {
        "id": "oliver_twist-56-2",
        "dayNumber": 2,
        "title": "The Undertaker's Apprentice & Flight to London",
        "subtitle": "Defending his mother and walking the great North Road",
        "estReadingMinutes": 15,
        "totalWordCount": 520,
        "summary": "Apprenticed to Mr. Sowerberry the undertaker, Oliver defends his mother from cruel insults, then escapes on foot toward the distant lights of London.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-56-2",
            "title": "The Undertaker's Apprentice & Flight to London",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "undertaker_shop",
            "caption": "Oliver slips past the coffin workshop at dawn, starting his seventy-mile journey to London!",
            "characterAvatars": [
              {
                "name": "Oliver",
                "emoji": "👦",
                "speech": "She was my mother, and you shall not speak ill of her!",
                "position": "left"
              },
              {
                "name": "Noah Claypole",
                "emoji": "🥊",
                "speech": "Workhouse brat! Your mother was a wretched nobody!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot3",
                "x": 30,
                "y": 50,
                "label": "Undertaker Coffin Shop",
                "icon": "⚰️",
                "soundEffect": "bounce",
                "funFact": "Mr. Sowerberry made Oliver a mute mourner at children funerals because of his gentle face.",
                "action": "bounce"
              },
              {
                "id": "ot4",
                "x": 70,
                "y": 65,
                "label": "London Milestone Stone",
                "icon": "🪨",
                "soundEffect": "magic",
                "funFact": "London was seventy miles away from Oliver native parish town.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Sleeping Under the Coffin Bench",
            "paragraphs": [
              "Oliver was taken as an apprentice by Mr. Sowerberry, a tall undertaker who made wooden coffins.",
              "Oliver had to sleep on a thin mattress under the shop counter, surrounded by dark wooden boards and black cloth.",
              "Mr. Sowerberry liked Oliver gentle face and made him walk in funerals, but Mrs. Sowerberry gave him only cold dog scraps to eat."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Sowerberry",
                "text": "The boy has a pleasant, mournful face. He will make a fine mute for child funerals!",
                "avatarEmoji": "🎩",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "I will work hard and sweep the shop every morning, sir.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-56-2-p1",
              "question": "Where did Oliver sleep while working for Mr. Sowerberry?",
              "options": [
                "In a luxurious feather bed at the village inn",
                "Up in an attic filled with bright toys and books",
                "Under the wooden counter in the undertaker shop among the coffins"
              ],
              "correctInsightIndex": 2,
              "insight": "Dickens showed how friendless orphans were treated with harsh indifference.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "A Valiant Stand for Mother",
            "paragraphs": [
              "Noah Claypole was a lazy older boy who worked in the shop. He loved to tease and bully little Oliver.",
              "One morning, Noah sneered at Oliver and called his poor dead mother a wicked, bad woman.",
              "A fire blazed in Oliver's gentle heart! He sprang forward, seized Noah by the throat, and knocked the big bully flat upon the ground!"
            ],
            "dialogueBites": [
              {
                "speaker": "Noah",
                "text": "Your mother was a bad one, Oliver! She deserved to die!",
                "avatarEmoji": "🥊",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "Do not dare speak ill of my mother! She was good and pure!",
                "avatarEmoji": "😠",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Road to London",
            "paragraphs": [
              "Mrs. Sowerberry and Mr. Bumble locked Oliver in the dark cellar, but in the quiet night, Oliver slipped out the back door.",
              "He stopped at the workhouse wall to say goodbye to his dying friend, little Dick, who whispered: \"God bless you, Oliver!\"",
              "With a crust of bread and a tiny bundle, Oliver set off on the long seventy-mile road toward the great city of London."
            ],
            "dialogueBites": [
              {
                "speaker": "Little Dick",
                "text": "God bless you, dear Oliver! I shall never see you again in this world.",
                "avatarEmoji": "🥺",
                "side": "left"
              },
              {
                "speaker": "Oliver",
                "text": "Goodbye, sweet Dick! I will pray for you every single night!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-56-2-p3",
              "question": "Who gave Oliver a loving parting blessing as he slipped away into the morning light?",
              "options": [
                "His frail little workhouse friend, Dick",
                "Mr. Bumble the parish beadle",
                "Noah Claypole with a handshake"
              ],
              "correctInsightIndex": 0,
              "insight": "True friendship brought light to Oliver even on his loneliest journey.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Apprentice",
            "phonics": "uh-PREN-tis",
            "definition": "A young person learning a trade from a skilled employer.",
            "funExample": "Oliver was bound as an apprentice in the quiet undertaker shop.",
            "emoji": "📜"
          },
          {
            "word": "Valiant",
            "phonics": "VAL-yunt",
            "definition": "Possessing or showing courage or determination.",
            "funExample": "Oliver stood valiant when defending his mother memory against Noah.",
            "emoji": "🛡️"
          },
          {
            "word": "Solitary",
            "phonics": "SOL-ih-tair-ee",
            "definition": "Existing or living alone; without companions.",
            "funExample": "The boy walked solitary along the dusty high road toward London.",
            "emoji": "🚶"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-56-2",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 2!",
          "targetWord": "FLIGHT",
          "scrambleLetters": [
            "T",
            "H",
            "G",
            "I",
            "L",
            "F"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-56-2-comp",
            "question": "Where did Oliver sleep at Mr. Sowerberry's shop?",
            "options": [
              "Under the shop counter among the coffins",
              "In a soft feather bed upstairs",
              "In the warm kitchen by the fire",
              "In a barn on the hay"
            ],
            "correctIndex": 0,
            "textEvidence": "Oliver had to sleep on a thin mattress under the shop counter, surrounded by dark wooden boards and black cloth.",
            "explanation": "From the text: 'Oliver had to sleep on a thin mattress under the shop counter, surrounded by dark wooden boards...'",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-56-2-vocab",
            "question": "Find a word in the passage that means: \"A young person learning a trade from a skilled employer.\".",
            "options": [
              "Apprentice",
              "Apprenticed",
              "Sowerberry",
              "Undertaker"
            ],
            "correctIndex": 0,
            "explanation": "In this chapter, \'Apprentice\' means a young person learning a trade from a skilled employer.",
            "visualClueEmoji": "📜",
            "points": 60
          }
        ]
      },
      {
        "id": "oliver_twist-56-3",
        "dayNumber": 3,
        "title": "The Artful Dodger & Fagin's Lair",
        "subtitle": "Meeting Jack Dawkins at Barnet and entering London by night",
        "estReadingMinutes": 15,
        "totalWordCount": 520,
        "summary": "Limping and famished at Barnet, Oliver meets Jack Dawkins, known as the Artful Dodger, who guides him into London to meet the eccentric old gentleman Fagin.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-56-3",
            "title": "The Artful Dodger & Fagin's Lair",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "fagin_den",
            "caption": "Fagin fries sausages over a smoky fire in his dark den as the boys show their treasures!",
            "characterAvatars": [
              {
                "name": "The Dodger",
                "emoji": "🎩",
                "speech": "Cheer up, mate! I know a respectable gent in London who will give you free lodgings!",
                "position": "left"
              },
              {
                "name": "Fagin",
                "emoji": "🧔",
                "speech": "Welcome, my dear Oliver! Come warm yourself by our merry fire!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot5",
                "x": 30,
                "y": 40,
                "label": "Dodger Oversized Hat",
                "icon": "🎩",
                "soundEffect": "bounce",
                "funFact": "The Dodger wore a man coat with sleeves rolled up and a hat stuck on the back of his head.",
                "action": "bounce"
              },
              {
                "id": "ot6",
                "x": 75,
                "y": 55,
                "label": "Frying Pan Sausages",
                "icon": "🍳",
                "soundEffect": "coin",
                "funFact": "Fagin cooked sausages in an iron skillet over a charcoal brazier for his boys.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Stranger at Barnet",
            "paragraphs": [
              "Oliver walked for seven weary days. His feet were bruised and cut, and his little pennies were all gone.",
              "At the town of Barnet, just outside London, he sat on a cold stone doorstep, too tired to take another step.",
              "A boy with a peculiar rolling swagger approached. He wore an adult coat with sleeves turned back, a crushed top hat, and the sharpest eyes Oliver had ever seen."
            ],
            "dialogueBites": [
              {
                "speaker": "The Dodger",
                "text": "Hullo, my covey! What is the row? You look down in the mouth!",
                "avatarEmoji": "🎩",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "I have walked seventy miles, and I have had no food for days...",
                "avatarEmoji": "🥺",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-56-3-p1",
              "question": "What did the Artful Dodger do when he first met starving Oliver at Barnet?",
              "options": [
                "He bought Oliver bread and ham and offered him free lodgings in London",
                "He called the police to send Oliver back to the workhouse",
                "He stole Oliver's shoes and ran away into the countryside"
              ],
              "correctInsightIndex": 0,
              "insight": "Even in dark times, unexpected companions can offer warmth, though appearances may mislead.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Entering Dark London by Night",
            "paragraphs": [
              "The Dodger bought Oliver a feast of bread, ham, and small beer at an eating house.",
              "He told Oliver he knew a sweet old gentleman in London who would let Oliver sleep in his rooms for nothing!",
              "Night was falling as they slipped through the narrow, crooked alleys of London, dodging puddles of black mud and noisy carts."
            ],
            "dialogueBites": [
              {
                "speaker": "The Dodger",
                "text": "Keep close to me, Oliver! The old gent is cooking something tasty tonight!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Oliver",
                "text": "It smells very strange here, but I am thankful for a warm roof.",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Fagin and the Sizzling Pan",
            "paragraphs": [
              "They climbed a creaking wooden staircase into a smoky back room.",
              "An old gentleman with matted red hair was standing by the fire, holding a fork over a frying pan of sizzling sausages.",
              "Around the room were several boys smoking pipes and laughing. Rows of silk handkerchiefs hung on a line to dry like laundry."
            ],
            "dialogueBites": [
              {
                "speaker": "Fagin",
                "text": "Welcome, young Oliver, welcome! We are so glad to make your acquaintance, my dear!",
                "avatarEmoji": "🧔",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "Thank you, sir! The sausages smell wonderful!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-56-3-p3",
              "question": "What was Fagin doing when Oliver first entered the smoky den?",
              "options": [
                "Reading a thick Latin dictionary by candlelight",
                "Toasting savory sausages over a fire with an iron fork",
                "Painting a portrait of the King on an easel"
              ],
              "correctInsightIndex": 1,
              "insight": "Fagin disguised his illegal gang under the guise of grandfatherly hospitality.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Peculiar",
            "phonics": "pih-KYOOL-yer",
            "definition": "Strange, odd, or unusual in character or appearance.",
            "funExample": "The boy wore a peculiar long coat that dragged on the ground.",
            "emoji": "🧐"
          },
          {
            "word": "Handkerchief",
            "phonics": "HANG-ker-chif",
            "definition": "A small square of fabric used for wiping the nose or eyes.",
            "funExample": "Silk handkerchiefs hung drying on a line across the smoky ceiling.",
            "emoji": "🧣"
          },
          {
            "word": "Nimble",
            "phonics": "NIM-buhl",
            "definition": "Quick and light in movement or action.",
            "funExample": "The nimble Dodger danced across the muddy London stones.",
            "emoji": "🏃"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-56-3",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 3!",
          "targetWord": "DODGER",
          "scrambleLetters": [
            "R",
            "E",
            "G",
            "D",
            "O",
            "D"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-56-3-comp",
            "question": "What food did the Artful Dodger buy for Oliver at the eating house?",
            "options": [
              "Bread, ham, and small beer",
              "Chocolate and sweet cakes",
              "Pork roast and apples",
              "Rice and honey"
            ],
            "correctIndex": 0,
            "textEvidence": "The Dodger bought Oliver a feast of bread, ham, and small beer at an eating house.",
            "explanation": "From the text: 'The Dodger bought Oliver a feast of bread, ham, and small beer at an eating house.'",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-56-3-vocab",
            "question": "Find a word in the passage that means: \"Strange, odd, or unusual in character or appearance.\".",
            "options": [
              "Limping",
              "Famished",
              "Barnet",
              "Peculiar"
            ],
            "correctIndex": 3,
            "explanation": "In this chapter, \'Peculiar\' means strange, odd, or unusual in character or appearance.",
            "visualClueEmoji": "🧐",
            "points": 60
          }
        ]
      },
      {
        "id": "oliver_twist-56-4",
        "dayNumber": 4,
        "title": "The Pocket Handkerchief Game",
        "subtitle": "A curious game of watches, rings, and nimble fingers",
        "estReadingMinutes": 15,
        "totalWordCount": 520,
        "summary": "Oliver observes Fagin and the boys playing a strange, laughing game with watches and silk handkerchiefs, unaware that he is witnessing lessons in pickpocketing.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-56-4",
            "title": "The Pocket Handkerchief Game",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "pocket_game",
            "caption": "Fagin pretends to stroll like an old gentleman while the Dodger and Charley Bates pick his pockets!",
            "characterAvatars": [
              {
                "name": "Fagin",
                "emoji": "🧔",
                "speech": "Watch how an old gentleman strolls, Oliver! See if you can take my handkerchief without a rustle!",
                "position": "left"
              },
              {
                "name": "Charley Bates",
                "emoji": "😂",
                "speech": "Ha ha ha! The Dodger got his watch without touching the coat buttons!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot7",
                "x": 30,
                "y": 45,
                "label": "Gold Pocket Watch",
                "icon": "⏱️",
                "soundEffect": "bounce",
                "funFact": "Gentlemen kept gold watches attached to chains inside their waistcoat pockets.",
                "action": "bounce"
              },
              {
                "id": "ot8",
                "x": 70,
                "y": 60,
                "label": "Silk Handkerchief",
                "icon": "🧣",
                "soundEffect": "coin",
                "funFact": "Victorian silk handkerchiefs had initials embroidered in the corners that the gang picked out with needles.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Secret Box Under the Floor",
            "paragraphs": [
              "Oliver woke up the next morning feeling warm and rested. Fagin made him a cup of hot coffee and buttered toast.",
              "While the boys were out, Fagin pulled a heavy box from a hole in the floorboards. Oliver watched with quiet curiosity.",
              "The box was full of sparkling gold watches, diamond rings, and shiny bracelets. Fagin smiled at them as if they were his dear children."
            ],
            "dialogueBites": [
              {
                "speaker": "Fagin",
                "text": "Ah! Sparklers, rings, and pretty watches! What a fine collection an industrious man can gather!",
                "avatarEmoji": "🧔",
                "side": "left"
              },
              {
                "speaker": "Oliver",
                "text": "Good morning, sir! May I help you make the breakfast?",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-56-4-p1",
              "question": "What did Fagin keep hidden in the secret box beneath the floorboards?",
              "options": [
                "Old schoolbooks and Latin dictionaries",
                "Stolen gold watches, diamond rings, and sparkling jewelry",
                "Seeds for planting a flower garden"
              ],
              "correctInsightIndex": 1,
              "insight": "Fagin was a receiver of stolen goods who trained orphaned children to steal for him.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "A Very Curious Game",
            "paragraphs": [
              "Soon, the Dodger and a merry boy named Charley Bates returned with pocketbooks and silk handkerchiefs.",
              "Fagin played a curious game. He put a watch in his waistcoat pocket and walked around the room like an old gentleman.",
              "The boys had to sneak up behind Fagin with great dexterity and pull out the watch without making him feel a touch!"
            ],
            "dialogueBites": [
              {
                "speaker": "Fagin",
                "text": "Did you feel anything, boys? Ha! Not a twitch! Now let young Oliver try the game!",
                "avatarEmoji": "🧔",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "You are so clever at making fun, sir! I would love to learn!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Innocence in the Shadows",
            "paragraphs": [
              "Oliver thought the game was just a funny sport to make everyone laugh.",
              "He practiced pulling Fagin's handkerchief and succeeded! Fagin patted Oliver on the head and gave him a shiny shilling.",
              "He told Oliver that if he practiced hard, he would grow up to be a great gentleman with his own carriage!"
            ],
            "dialogueBites": [
              {
                "speaker": "Fagin",
                "text": "You will be a great man, Oliver! You will make your fortune like the Dodger!",
                "avatarEmoji": "🧔",
                "side": "left"
              },
              {
                "speaker": "Charley Bates",
                "text": "Look at the greenhorn! He does it as neat as wax! Ha ha ha!",
                "avatarEmoji": "😂",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-56-4-p3",
              "question": "What did innocent Oliver believe Fagin's handkerchief game really was?",
              "options": [
                "A serious training academy for the royal military",
                "A cooking test to see who could bake bread faster",
                "A fun and cheerful parlor game to practice nimble fingers and make people laugh"
              ],
              "correctInsightIndex": 2,
              "insight": "Oliver's pure heart prevented him from recognizing the crime occurring right before his eyes.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Curiosity",
            "phonics": "kyoo-ree-OSS-ih-tee",
            "definition": "A strong desire to know or learn something.",
            "funExample": "Oliver watched the morning game with innocent curiosity.",
            "emoji": "🤔"
          },
          {
            "word": "Dexterity",
            "phonics": "deks-TAIR-ih-tee",
            "definition": "Skill and grace in physical movement, especially with hands.",
            "funExample": "The Dodger removed the silk cloth with incredible dexterity.",
            "emoji": "🖐️"
          },
          {
            "word": "Deception",
            "phonics": "dih-SEP-shun",
            "definition": "The act of misleading or deceiving someone.",
            "funExample": "Oliver did not suspect the clever deception behind Fagin game.",
            "emoji": "🎭"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-56-4",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 4!",
          "targetWord": "POCKET",
          "scrambleLetters": [
            "T",
            "E",
            "K",
            "C",
            "O",
            "P"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-56-4-comp",
            "question": "What was hidden inside the heavy box Fagin pulled from the floorboards?",
            "options": [
              "Gold watches, diamond rings, and bracelets",
              "Books and parchment paper",
              "Wooden spoons and silver bowls",
              "Old clothes and boots"
            ],
            "correctIndex": 0,
            "textEvidence": "The box was full of sparkling gold watches, diamond rings, and shiny bracelets.",
            "explanation": "From the text: 'The box was full of sparkling gold watches, diamond rings, and shiny bracelets.'",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-56-4-vocab",
            "question": "Find a word in the passage that means: \"A strong desire to know or learn something.\".",
            "options": [
              "Oliver",
              "Curiosity",
              "Observes",
              "Fagin"
            ],
            "correctIndex": 1,
            "explanation": "In this chapter, \'Curiosity\' means a strong desire to know or learn something.",
            "visualClueEmoji": "🤔",
            "points": 60
          }
        ]
      },
      {
        "id": "oliver_twist-56-5",
        "dayNumber": 5,
        "title": "The Bookstall & Kind Mr. Brownlow",
        "subtitle": "Confusion at the bookstall and rescue from the court",
        "estReadingMinutes": 15,
        "totalWordCount": 520,
        "summary": "Oliver accompanies the boys into the street, witnesses them steal a gentleman's handkerchief, runs in panic, and is rescued by the kindly victim, Mr. Brownlow.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-56-5",
            "title": "The Bookstall & Kind Mr. Brownlow",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "brownlow_library",
            "caption": "Mr. Brownlow gazes down kindly at feverish Oliver in his quiet, book-lined study!",
            "characterAvatars": [
              {
                "name": "Mr. Brownlow",
                "emoji": "👴",
                "speech": "Poor boy, there is something in his gentle face that touches my very soul!",
                "position": "right"
              },
              {
                "name": "Oliver",
                "emoji": "👦",
                "speech": "I did not take the handkerchief, sir, I promise on my life!",
                "position": "left"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot9",
                "x": 25,
                "y": 55,
                "label": "Clerkenwell Bookstall",
                "icon": "📚",
                "soundEffect": "magic",
                "funFact": "Mr. Brownlow was absorbed in reading an old book when his pocket was picked.",
                "action": "sparkle"
              },
              {
                "id": "ot10",
                "x": 75,
                "y": 40,
                "label": "Brownlow Fireplace Tea",
                "icon": "🫖",
                "soundEffect": "coin",
                "funFact": "Mrs. Bedwin, the kind housekeeper, brewed hot broth and tea for sick Oliver.",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Crime at the Bookstall",
            "paragraphs": [
              "At last, Fagin let Oliver go out for a walk with the Dodger and Charley Bates.",
              "At Clerkenwell Green, an elderly gentleman with gold spectacles stood reading outside a little bookstall.",
              "Suddenly, Oliver saw the Dodger reach his nimble hand into the gentleman's pocket, pull out a silk handkerchief, and sprint away!"
            ],
            "dialogueBites": [
              {
                "speaker": "Oliver",
                "text": "Oh! They are thieves! What have I done?!",
                "avatarEmoji": "😨",
                "side": "left"
              },
              {
                "speaker": "Dodger",
                "text": "Run, Charley! The old bloke is turning round!",
                "avatarEmoji": "🏃",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-56-5-p1",
              "question": "What did Oliver suddenly realize when the Dodger snatched the handkerchief?",
              "options": [
                "That the book was written in ancient hieroglyphics",
                "That the old gentleman was Oliver's long-lost uncle",
                "That the boys were pickpockets and Fagin was a master of thieves"
              ],
              "correctInsightIndex": 2,
              "insight": "Truth burst upon Oliver in a flash of terror and clarity.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Stop Thief! The Wild Chase",
            "paragraphs": [
              "Oliver was so terrified that he ran as fast as his legs could carry him!",
              "The gentleman turned, missed his handkerchief, and saw Oliver running. \"Stop thief!\" he shouted.",
              "A great crowd of dogs, boys, and men joined the chase. A big man struck Oliver down, and the boy lay stunned in the muddy street."
            ],
            "dialogueBites": [
              {
                "speaker": "Crowd",
                "text": "Stop thief! Stop thief! Lay hold of him!",
                "avatarEmoji": "📢",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "I didn't do it! Please, I didn't take anything!",
                "avatarEmoji": "😭",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Magistrate and the Bookstall Keeper",
            "paragraphs": [
              "Oliver was dragged before a harsh magistrate named Mr. Fang, who wanted to send him to prison for hard labor.",
              "Just then, the bookstall keeper rushed in and shouted: \"Stop! I saw it all! It was another boy who stole the handkerchief!\"",
              "Oliver fainted from high fever. The kind gentleman, Mr. Brownlow, took the sick boy into his carriage with deep compassion and drove him home."
            ],
            "dialogueBites": [
              {
                "speaker": "Bookseller",
                "text": "Stop! I saw the whole affair! This boy never touched the handkerchief!",
                "avatarEmoji": "📖",
                "side": "left"
              },
              {
                "speaker": "Mr. Brownlow",
                "text": "Poor child! He is burning with fever. Bring him to my carriage at once!",
                "avatarEmoji": "👴",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-56-5-p3",
              "question": "Who saved Oliver from being sent to prison by the harsh magistrate Mr. Fang?",
              "options": [
                "The honest bookstall keeper who witnessed the real thieves steal the handkerchief",
                "Fagin dressed in a judge's black robe",
                "Noah Claypole who apologized for everything"
              ],
              "correctInsightIndex": 0,
              "insight": "Honesty and evidence saved Oliver from terrible injustice.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Compassion",
            "phonics": "kum-PASH-un",
            "definition": "Sympathetic pity and concern for the misfortunes of others.",
            "funExample": "Mr. Brownlow looked upon the pale orphan with deep compassion.",
            "emoji": "💖"
          },
          {
            "word": "Tumult",
            "phonics": "TOO-mult",
            "definition": "A loud, confused noise, especially one caused by a large mass of people.",
            "funExample": "A great tumult arose as the crowd chased Oliver through the streets.",
            "emoji": "🏃"
          },
          {
            "word": "Benefactor",
            "phonics": "BEN-uh-fak-ter",
            "definition": "A generous person who gives help, money, or kindness to another.",
            "funExample": "Kind Mr. Brownlow became Oliver true protector and benefactor.",
            "emoji": "🤝"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-56-5",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 5!",
          "targetWord": "RESCUE",
          "scrambleLetters": [
            "E",
            "U",
            "C",
            "S",
            "E",
            "R"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-56-5-comp",
            "question": "Who shouted to the magistrate that Oliver did not steal the handkerchief?",
            "options": [
              "The bookstall keeper who saw it all",
              "The Artful Dodger",
              "A police officer",
              "Mr. Bumble"
            ],
            "correctIndex": 0,
            "textEvidence": "Just then, the bookstall keeper rushed in and shouted: Stop! I saw it all! It was another boy who stole the handkerchief!",
            "explanation": "From the text: The bookstall keeper cried, 'Stop! I saw it all! It was another boy who stole the handkerchief!'",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-56-5-vocab",
            "question": "Find a word in the passage that means: \"Sympathetic pity and concern for the misfortunes of others.\".",
            "options": [
              "Oliver",
              "Accompanies",
              "Boys",
              "Compassion"
            ],
            "correctIndex": 3,
            "explanation": "In this chapter, \'Compassion\' means sympathetic pity and concern for the misfortunes of others.",
            "visualClueEmoji": "💖",
            "points": 60
          }
        ]
      },
      {
        "id": "oliver_twist-56-6",
        "dayNumber": 6,
        "title": "The Portrait & The Five-Pound Note",
        "subtitle": "A sweet face on the wall and an ambush in the street",
        "estReadingMinutes": 15,
        "totalWordCount": 520,
        "summary": "Recovering in Mr. Brownlow's peaceful home, Oliver notices a mysterious portrait of a sweet lady. Sent on an errand with books and money, he is ambushed by Fagin's gang.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-56-6",
            "title": "The Portrait & The Five-Pound Note",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "portrait_room",
            "caption": "Oliver gazes up at the portrait of the beautiful lady while holding Mr. Brownlow's books!",
            "characterAvatars": [
              {
                "name": "Mrs. Bedwin",
                "emoji": "👵",
                "speech": "Look at the sweet boy! His eyes are the very spit of the lady in the painting!",
                "position": "left"
              },
              {
                "name": "Bill Sikes",
                "emoji": "🐕",
                "speech": "Come along, young viper! You won't squeak on us to your fancy friends!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot11",
                "x": 30,
                "y": 40,
                "label": "Lady Portrait Painting",
                "icon": "🖼️",
                "soundEffect": "magic",
                "funFact": "The lady in the portrait had the exact same gentle eyes and forehead as Oliver.",
                "action": "sparkle"
              },
              {
                "id": "ot12",
                "x": 75,
                "y": 60,
                "label": "Five Pound Banknote",
                "icon": "💷",
                "soundEffect": "coin",
                "funFact": "Five pounds in Victorian times was worth several months of an average worker wages.",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "A Haven of Peace and Kindness",
            "paragraphs": [
              "For many days, Oliver lay in a clean, soft bed with white curtains. Kind Mrs. Bedwin gave him warm broth.",
              "When he sat up, he saw a portrait of a beautiful young lady on the wall. Her face was sweet and sad.",
              "Every time Oliver looked at the painting, his heart thumped. Her eyes looked at him with tender love."
            ],
            "dialogueBites": [
              {
                "speaker": "Mrs. Bedwin",
                "text": "Bless his sweet heart! Look, sir, he has her very eyes and smile!",
                "avatarEmoji": "👵",
                "side": "left"
              },
              {
                "speaker": "Oliver",
                "text": "I feel as though she were smiling right at me, ma'am.",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-56-6-p1",
              "question": "What startled Mrs. Bedwin when she looked from the painted portrait to Oliver?",
              "options": [
                "The painting had the exact same eyes, forehead, and sweet expression as Oliver",
                "The lady in the painting was wearing an apron just like Mrs. Bedwin",
                "The picture fell off the wall and cracked the tea tray"
              ],
              "correctInsightIndex": 0,
              "insight": "Dickens dropped subtle clues about Oliver's true family heritage.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Test of Trust",
            "paragraphs": [
              "Mr. Brownlow bought Oliver a fine suit of new clothes, a neat cap, and shiny leather shoes.",
              "A grumpy friend named Mr. Grimwig visited. He claimed all street boys were ungrateful and would run away with money.",
              "To prove Oliver's honesty, Mr. Brownlow gave the boy some valuable books to return and a crisp five-pound note to pay the bookseller."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Grimwig",
                "text": "He will run away with your books and your money! If he comes back, I will eat my head!",
                "avatarEmoji": "🎩",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "I will be back in twenty minutes, sir! You may count upon me!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Ambush in the Dark Alley",
            "paragraphs": [
              "Oliver walked happily down the sunny street, proud to carry out the errand for his dear benefactor.",
              "Suddenly, a young woman in an apron seized him around the neck, screaming: \"Oh, Oliver, my dear lost brother! Come home!\"",
              "It was Nancy, working for Fagin! Then a fierce man named Bill Sikes and his savage dog grabbed Oliver and dragged him into a dark alley."
            ],
            "dialogueBites": [
              {
                "speaker": "Nancy",
                "text": "Oh, you naughty boy! Mother has been crying her eyes out for you! Come along home!",
                "avatarEmoji": "👩",
                "side": "left"
              },
              {
                "speaker": "Oliver",
                "text": "Help! Help! I do not know these people! The books belong to Mr. Brownlow!",
                "avatarEmoji": "😭",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-56-6-p3",
              "question": "Who ambushed Oliver in the street and dragged him back to Fagin's gang?",
              "options": [
                "Mr. Bumble who chased him in a horse-drawn coach",
                "Nancy and the fierce burglar Bill Sikes with his dog Bull's-eye",
                "The workhouse master with his copper ladle"
              ],
              "correctInsightIndex": 1,
              "insight": "Even when captured, Oliver thought only of not letting down his kind benefactor.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Likeness",
            "phonics": "LIKE-nis",
            "definition": "The fact or quality of being alike; a portrait or resemblance.",
            "funExample": "The painted portrait bore a striking likeness to young Oliver.",
            "emoji": "🖼️"
          },
          {
            "word": "Betrayal",
            "phonics": "bih-TRAY-ul",
            "definition": "The breaking or violation of trust or confidence.",
            "funExample": "Mr. Grimwig wrongly predicted Oliver would commit a betrayal.",
            "emoji": "💔"
          },
          {
            "word": "Faithful",
            "phonics": "FAYTH-ful",
            "definition": "Steadfast in affection, allegiance, or duty.",
            "funExample": "Oliver was determined to be faithful to his kind protector.",
            "emoji": "🌟"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-56-6",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 6!",
          "targetWord": "PORTRAIT",
          "scrambleLetters": [
            "T",
            "I",
            "A",
            "R",
            "T",
            "R",
            "O",
            "P"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-56-6-comp",
            "question": "What did Mr. Brownlow give Oliver to return to the bookstall?",
            "options": [
              "Valuable books and a five-pound note",
              "A gold pocket watch",
              "A silver tea set",
              "A box of leather gloves"
            ],
            "correctIndex": 0,
            "textEvidence": "Mr. Brownlow gave the boy some valuable books to return and a crisp five-pound note to pay the bookseller.",
            "explanation": "From the text: Mr. Brownlow gave Oliver valuable books and a five-pound note to pay the bookseller.",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-56-6-vocab",
            "question": "Find a word in the passage that means: \"The fact or quality of being alike; a portrait or resemblance.\".",
            "options": [
              "Recovering",
              "Likeness",
              "Brownlow",
              "Peaceful"
            ],
            "correctIndex": 1,
            "explanation": "In this chapter, \'Likeness\' means the fact or quality of being alike; a portrait or resemblance.",
            "visualClueEmoji": "🖼️",
            "points": 60
          }
        ]
      },
      {
        "id": "oliver_twist-56-7",
        "dayNumber": 7,
        "title": "Nancy's Brave Midnight Journey",
        "subtitle": "The secret meeting on the dark stone steps of London Bridge",
        "estReadingMinutes": 15,
        "totalWordCount": 520,
        "summary": "Deeply moved by Oliver's innocence, Nancy risks her life to meet Mr. Brownlow and Rose Maylie on London Bridge at midnight, revealing the plot against the boy.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-56-7",
            "title": "Nancy's Brave Midnight Journey",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "london_bridge_night",
            "caption": "Nancy speaks in hushed tones to Rose and Mr. Brownlow on the misty stone steps of London Bridge!",
            "characterAvatars": [
              {
                "name": "Nancy",
                "emoji": "👩",
                "speech": "Oliver is innocent as an angel! A villain named Monks wants him destroyed for his inheritance!",
                "position": "left"
              },
              {
                "name": "Rose Maylie",
                "emoji": "🌹",
                "speech": "Brave Nancy, let us help you escape this dangerous life!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot13",
                "x": 30,
                "y": 55,
                "label": "London Bridge Stone Steps",
                "icon": "🌉",
                "soundEffect": "bounce",
                "funFact": "The stone steps led down to the dark Thames water where boats were moored in fog.",
                "action": "bounce"
              },
              {
                "id": "ot14",
                "x": 70,
                "y": 40,
                "label": "Midnight Big Ben Bell",
                "icon": "🕰️",
                "soundEffect": "magic",
                "funFact": "The heavy bell of St. Paul's Cathedral tolled midnight across the river.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "A Heart Awakened to Goodness",
            "paragraphs": [
              "Back at Fagin's den, Oliver wept for Mr. Brownlow. He feared his kind friend would think he was a wicked thief.",
              "When Bill Sikes set his vicious dog on Oliver, Nancy jumped between them, shouting: \"You shall not hurt the boy!\"",
              "Nancy had lived a hard life of crime, but Oliver's pure heart touched something tender inside her soul."
            ],
            "dialogueBites": [
              {
                "speaker": "Nancy",
                "text": "I won't stand by and see him beaten! He is a sweet child, better than all of us!",
                "avatarEmoji": "👩",
                "side": "left"
              },
              {
                "speaker": "Fagin",
                "text": "Quiet, girl! You will ruin us all with your foolish tears!",
                "avatarEmoji": "🧔",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-56-7-p1",
              "question": "Why did Nancy courageously defend Oliver from Bill Sikes and Fagin?",
              "options": [
                "Because Fagin promised to give her a thousand gold coins",
                "Because Oliver's pure innocence awakened the goodness and compassion in her heart",
                "Because she wanted to adopt Oliver and become a schoolteacher"
              ],
              "correctInsightIndex": 1,
              "insight": "Charles Dickens believed that even in the darkest circumstances, the human soul could choose goodness.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Mysterious Villain Monks",
            "paragraphs": [
              "A dark, sinister man named Monks visited Fagin. Oliver heard him whisper about destroying a golden locket.",
              "Monks wanted Oliver to become a thief so the boy would be thrown into prison and lose his rightful name.",
              "Nancy overheard everything through a keyhole. She knew she had to warn Oliver's friends before it was too late."
            ],
            "dialogueBites": [
              {
                "speaker": "Monks",
                "text": "Make him a thief! Put him in the dock! He must never know who his father was!",
                "avatarEmoji": "👤",
                "side": "left"
              },
              {
                "speaker": "Nancy",
                "text": "I must find Mr. Brownlow... I cannot let them destroy this boy.",
                "avatarEmoji": "👩",
                "side": "right"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Midnight Meeting on the Steps",
            "paragraphs": [
              "At midnight, Nancy slipped away to London Bridge, where church bells were tolling in the dark mist.",
              "Waiting under the stone archway were kind Mr. Brownlow and a sweet, beautiful lady named Rose Maylie.",
              "Nancy told them everything about Monks and the secret locket, refusing any money or escape for herself."
            ],
            "dialogueBites": [
              {
                "speaker": "Rose Maylie",
                "text": "Dear Nancy, come with us tonight! We can give you a safe, happy home far from here!",
                "avatarEmoji": "🌹",
                "side": "right"
              },
              {
                "speaker": "Nancy",
                "text": "No, miss... I cannot leave him. But save Oliver! He is pure and good!",
                "avatarEmoji": "👩",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-56-7-p3",
              "question": "Where did Nancy meet Mr. Brownlow and Rose Maylie to reveal the plot against Oliver?",
              "options": [
                "Inside the royal dining room at Buckingham Palace",
                "At the parish workhouse gates in Kent",
                "On the dark stone steps of London Bridge at the stroke of midnight"
              ],
              "correctInsightIndex": 2,
              "insight": "Nancy's courage became the turning point that saved Oliver's life and legacy.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Sacrifice",
            "phonics": "SAK-rih-fise",
            "definition": "An act of giving up something valuable for the sake of something more important.",
            "funExample": "Nancy made a heroic sacrifice to protect innocent Oliver.",
            "emoji": "🕊️"
          },
          {
            "word": "Archway",
            "phonics": "ARTCH-way",
            "definition": "A curved structure forming a passage or entrance.",
            "funExample": "They stood under the dark stone archway beneath the bridge.",
            "emoji": "🏛️"
          },
          {
            "word": "Midnight",
            "phonics": "MID-nite",
            "definition": "Twelve o'clock at night; the middle of the night.",
            "funExample": "The clocks struck midnight across the misty river Thames.",
            "emoji": "🌙"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-56-7",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 7!",
          "targetWord": "BRIDGE",
          "scrambleLetters": [
            "E",
            "G",
            "D",
            "I",
            "R",
            "B"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-56-7-comp",
            "question": "Where did Nancy secretly meet Mr. Brownlow at midnight?",
            "options": [
              "On London Bridge under a stone arch",
              "Inside Tellson's Bank",
              "In a churchyard in Dover",
              "At a tea shop in the village"
            ],
            "correctIndex": 0,
            "textEvidence": "At midnight, Nancy slipped away to London Bridge... Waiting under the stone archway were kind Mr. Brownlow and a sweet, beautiful lady named Rose Maylie.",
            "explanation": "From the text: Nancy met Mr. Brownlow and Rose Maylie on London Bridge at midnight.",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-56-7-vocab",
            "question": "Find a word in the passage that means: \"An act of giving up something valuable for the sake of something more important.\".",
            "options": [
              "Sacrifice",
              "Deeply",
              "Moved",
              "Oliver"
            ],
            "correctIndex": 0,
            "explanation": "In this chapter, \'Sacrifice\' means an act of giving up something valuable for the sake of something more important.",
            "visualClueEmoji": "🕊️",
            "points": 60
          }
        ]
      },
      {
        "id": "oliver_twist-56-8",
        "dayNumber": 8,
        "title": "The Secret Heritage & A Peaceful Home",
        "subtitle": "The truth revealed, adoption, and a garden of love",
        "estReadingMinutes": 15,
        "totalWordCount": 520,
        "summary": "Monks is unmasked and forced to confess. Oliver discovers his true name and inheritance, and is legally adopted by kind Mr. Brownlow to live in joy.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-56-8",
            "title": "The Secret Heritage & A Peaceful Home",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "peaceful_parsonage",
            "caption": "Oliver runs across the sunny garden lawn into the loving arms of Mr. Brownlow and Rose!",
            "characterAvatars": [
              {
                "name": "Oliver",
                "emoji": "👦",
                "speech": "I have a real father and a true home at last!",
                "position": "left"
              },
              {
                "name": "Mr. Brownlow",
                "emoji": "👴",
                "speech": "You are my own son now, Oliver, and nothing shall ever separate us!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot15",
                "x": 30,
                "y": 55,
                "label": "Country Cottage Garden",
                "icon": "🏡",
                "soundEffect": "magic",
                "funFact": "Oliver moved to a peaceful country village with Rose, Harry, and Mr. Brownlow.",
                "action": "sparkle"
              },
              {
                "id": "ot16",
                "x": 70,
                "y": 45,
                "label": "Inheritance Legal Will",
                "icon": "📜",
                "soundEffect": "coin",
                "funFact": "Oliver received a generous inheritance left to him by his true father, Edwin Leeford.",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Monks Unmasked",
            "paragraphs": [
              "With Nancy's clues, Mr. Brownlow captured the villain Monks and brought him to his library.",
              "Mr. Brownlow revealed the great secret: Monks was really Oliver's older half-brother, Edward Leeford!",
              "Their father had loved Oliver's mother, Agnes, and left a large fortune in his will for little Oliver."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Brownlow",
                "text": "You knew your brother was alive, and you sought to destroy him for gold!",
                "avatarEmoji": "👴",
                "side": "left"
              },
              {
                "speaker": "Monks",
                "text": "I confess everything... Let me take my share of the money and leave England forever!",
                "avatarEmoji": "👤",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-56-8-p1",
              "question": "Who was the mysterious villain Monks revealed to be?",
              "options": [
                "The King's royal tax collector from Scotland",
                "The original founder of the parish workhouse",
                "Oliver's older half-brother, who wanted to steal the family inheritance"
              ],
              "correctInsightIndex": 2,
              "insight": "Truth prevailed, exposing the greed that had caused Oliver so much suffering.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Justice and Farewell to the Past",
            "paragraphs": [
              "The wicked gang was broken up by the police. Fagin and his companions could never hurt another child.",
              "Even though Monks had tried to ruin him, kind Oliver gave half of his inheritance money to his brother so he could start a new life.",
              "Oliver visited his old parish town one last time to say a prayer at his mother's memorial."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Brownlow",
                "text": "You are generous to a fault, Oliver. You give gold to one who plotted your doom.",
                "avatarEmoji": "👴",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "He is my father's son, sir. I wish him only peace and repentance.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "A Son, A Home, A Happy Life",
            "paragraphs": [
              "Mr. Brownlow legally adopted Oliver as his own beloved son!",
              "They moved to a beautiful country cottage with Rose Maylie and her husband Harry, surrounded by green lawns and fragrant roses.",
              "Oliver learned to read, rode ponies through the woods, and knew that after all the dark trials, love and goodness had won forever."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Brownlow",
                "text": "You are my dear son now, Oliver. This home and everything in it belongs to you.",
                "avatarEmoji": "👴",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "My heart is so full of happiness! God bless everyone who showed me kindness!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-56-8-p3",
              "question": "How does Oliver Twist's story conclude in joy and peace?",
              "options": [
                "Mr. Brownlow legally adopts Oliver as his son, and they live happily in a peaceful country cottage",
                "Oliver returns to the workhouse to become the headmaster",
                "Oliver becomes a sailor and travels around the world forever"
              ],
              "correctInsightIndex": 0,
              "insight": "Love, kindness, and honest courage conquered all adversity.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Inheritance",
            "phonics": "in-HAIR-ih-tuns",
            "definition": "Property, money, or a title received upon someone's death.",
            "funExample": "Oliver divided his rightful inheritance generously with Monks.",
            "emoji": "📜"
          },
          {
            "word": "Sanctuary",
            "phonics": "SANK-choo-air-ee",
            "definition": "A place of safety, refuge, or quiet protection.",
            "funExample": "The sunny country cottage was a true sanctuary for Oliver.",
            "emoji": "🏡"
          },
          {
            "word": "Gratitude",
            "phonics": "GRAT-ih-tood",
            "definition": "The feeling of being thankful and appreciative.",
            "funExample": "Oliver heart was filled with boundless love and gratitude.",
            "emoji": "🙏"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-56-8",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 8!",
          "targetWord": "HERITAGE",
          "scrambleLetters": [
            "E",
            "G",
            "A",
            "T",
            "I",
            "R",
            "E",
            "H"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-56-8-comp",
            "question": "What did kind Mr. Brownlow do for Oliver at the end of the story?",
            "options": [
              "He legally adopted Oliver as his own beloved son",
              "He sent Oliver to sea on a ship",
              "He made Oliver an apprentice blacksmith",
              "He sent Oliver back to the workhouse"
            ],
            "correctIndex": 0,
            "textEvidence": "Mr. Brownlow legally adopted Oliver as his own beloved son! They moved to a beautiful country cottage...",
            "explanation": "From the text: 'Mr. Brownlow legally adopted Oliver as his own beloved son!'",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-56-8-vocab",
            "question": "Find a word in the passage that means: \"Property, money, or a title received upon someone's death.\".",
            "options": [
              "Monks",
              "Unmasked",
              "Inheritance",
              "Forced"
            ],
            "correctIndex": 2,
            "explanation": "In this chapter, \'Inheritance\' means property, money, or a title received upon someone's death.",
            "visualClueEmoji": "📜",
            "points": 60
          }
        ]
      }
    ],
    "7-8": [
      {
        "id": "oliver_twist-78-1",
        "dayNumber": 1,
        "title": "Please, Sir, I Want Some More",
        "subtitle": "The hungry boys cast lots in the gloomy stone hall",
        "estReadingMinutes": 15,
        "totalWordCount": 680,
        "summary": "Born in a dreary parish workhouse, young orphan Oliver is pushed forward by his starving companions to ask the astonished master for another ladle of thin gruel.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-78-1",
            "title": "Please, Sir, I Want Some More",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "workhouse_hall",
            "caption": "Oliver steps forward with his wooden bowl into the stone dining hall as the master stares in shock!",
            "characterAvatars": [
              {
                "name": "Oliver",
                "emoji": "👦",
                "speech": "Please, sir, I want some more...",
                "position": "left"
              },
              {
                "name": "Mr. Bumble",
                "emoji": "🎩",
                "speech": "More?! Never has any boy asked for more in this parish!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot1",
                "x": 25,
                "y": 60,
                "label": "Wooden Gruel Bowl",
                "icon": "🥣",
                "soundEffect": "coin",
                "funFact": "Workhouse boys were fed only three small meals of thin gruel a day.",
                "action": "sparkle"
              },
              {
                "id": "ot2",
                "x": 75,
                "y": 45,
                "label": "Master Copper Ladle",
                "icon": "🥄",
                "soundEffect": "bounce",
                "funFact": "The parish master wore a grand cocked hat and carried a huge iron ladle.",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Starving Stone Hall",
            "paragraphs": [
              "Oliver Twist was born into a world of hardship within the cold stone walls of a parish workhouse.",
              "The dining hall was a great stone hall, with a copper cauldron at one end, out of which the master ladled the gruel at mealtimes.",
              "Each boy was allowed one small basin of gruel and no more. The bowls never needed washing, for the boys polished them with their spoons until they sparkled like mirrors."
            ],
            "dialogueBites": [
              {
                "speaker": "Boy",
                "text": "Oliver, the lot fell on you! You must go up and ask for another spoonful!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Oliver",
                "text": "My knees shake, but I promised I would go...",
                "avatarEmoji": "🥺",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-78-1-p1",
              "question": "Why did the boys in the workhouse never need to wash their wooden bowls?",
              "options": [
                "Because the kitchen staff washed them in soapy boiling river water",
                "Because they scraped and licked them so clean with their spoons that not a crumb remained",
                "Because the boys threw their bowls away into the fireplace every day"
              ],
              "correctInsightIndex": 1,
              "insight": "Charles Dickens highlighted the severe poverty and hunger faced by children in 19th-century Britain.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Unthinkable Question",
            "paragraphs": [
              "A council was held among the starving boys, and lots were cast to decide who should walk up to the master after supper.",
              "It fell to young Oliver Twist. Child as he was, he was desperate with hunger and reckless with misery.",
              "He rose from the bench, advanced to the master, basin and spoon in hand, and said in trembling astonishment at his own boldness: \"Please, sir, I want some more.\""
            ],
            "dialogueBites": [
              {
                "speaker": "Oliver",
                "text": "Please, sir, I want some more gruel.",
                "avatarEmoji": "🥣",
                "side": "left"
              },
              {
                "speaker": "Master",
                "text": "WHAT?! Say that again if you dare, boy!",
                "avatarEmoji": "😡",
                "side": "right"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Uproar and Confinement",
            "paragraphs": [
              "The master turned very pale and stared in stupefied astonishment at the small rebel for several seconds.",
              "He aimed a blow at Oliver's head with the ladle, pinioned him in his arms, and shrieked aloud for the parish beadle, Mr. Bumble.",
              "The parish board declared that Oliver would surely come to be hanged. A bill was posted on the workhouse gates offering five pounds to any person who would take Oliver Twist off their hands."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Bumble",
                "text": "That boy will come to be hanged! I knew it from the hour of his birth!",
                "avatarEmoji": "🎩",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "I only wanted a little more warm gruel to stop the pain in my stomach...",
                "avatarEmoji": "😢",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-78-1-p3",
              "question": "What did the parish board do after Oliver asked for more food?",
              "options": [
                "They gave every boy a feast of roasted turkey and plum pudding",
                "They elected Oliver as the new leader of the school council",
                "They posted a notice offering five pounds to anyone who would take Oliver away as an apprentice"
              ],
              "correctInsightIndex": 2,
              "insight": "Even in dark times, Oliver remained kind-hearted and brave.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Gruel",
            "phonics": "GROO-uhl",
            "definition": "A thin, watery porridge boiled in water or milk.",
            "funExample": "The hungry boys scraped their wooden bowls clean of every drop of gruel.",
            "emoji": "🥣"
          },
          {
            "word": "Astonishment",
            "phonics": "uh-STON-ish-munt",
            "definition": "A feeling of great surprise and wonder.",
            "funExample": "The master stared in silent astonishment at Oliver.",
            "emoji": "😲"
          },
          {
            "word": "Trembling",
            "phonics": "TREM-bling",
            "definition": "Shaking involuntarily with fear, cold, or weakness.",
            "funExample": "Oliver stood trembling before the stern parish beadle.",
            "emoji": "🥶"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-78-1",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 1!",
          "targetWord": "GRUEL",
          "scrambleLetters": [
            "L",
            "E",
            "U",
            "R",
            "G"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-78-1-comp",
            "question": "Why did Oliver walk up to the master to ask for more gruel?",
            "options": [
              "The boys cast lots and the choice fell on Oliver",
              "He wanted to play a trick",
              "The master called his name",
              "He was told to ask for salt"
            ],
            "correctIndex": 0,
            "textEvidence": "They cast lots with slips of paper, and the lot fell on little Oliver. He had to walk up to the master after supper and ask for more gruel.",
            "explanation": "From the text: 'They cast lots with slips of paper, and the lot fell on little Oliver.'",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-78-1-vocab",
            "question": "Find a word in the passage that means: \"A thin, watery porridge boiled in water or milk.\".",
            "options": [
              "Born",
              "Dreary",
              "Gruel",
              "Parish"
            ],
            "correctIndex": 2,
            "explanation": "In this chapter, \'Gruel\' means a thin, watery porridge boiled in water or milk.",
            "visualClueEmoji": "🥣",
            "points": 60
          }
        ]
      },
      {
        "id": "oliver_twist-78-2",
        "dayNumber": 2,
        "title": "The Undertaker's Apprentice & Flight to London",
        "subtitle": "Defending his mother and walking the great North Road",
        "estReadingMinutes": 15,
        "totalWordCount": 680,
        "summary": "Apprenticed to Mr. Sowerberry the undertaker, Oliver defends his mother from cruel insults, then escapes on foot toward the distant lights of London.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-78-2",
            "title": "The Undertaker's Apprentice & Flight to London",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "undertaker_shop",
            "caption": "Oliver slips past the coffin workshop at dawn, starting his seventy-mile journey to London!",
            "characterAvatars": [
              {
                "name": "Oliver",
                "emoji": "👦",
                "speech": "She was my mother, and you shall not speak ill of her!",
                "position": "left"
              },
              {
                "name": "Noah Claypole",
                "emoji": "🥊",
                "speech": "Workhouse brat! Your mother was a wretched nobody!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot3",
                "x": 30,
                "y": 50,
                "label": "Undertaker Coffin Shop",
                "icon": "⚰️",
                "soundEffect": "bounce",
                "funFact": "Mr. Sowerberry made Oliver a mute mourner at children funerals because of his gentle face.",
                "action": "bounce"
              },
              {
                "id": "ot4",
                "x": 70,
                "y": 65,
                "label": "London Milestone Stone",
                "icon": "🪨",
                "soundEffect": "magic",
                "funFact": "London was seventy miles away from Oliver native parish town.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Sleeping Under the Coffin Bench",
            "paragraphs": [
              "Oliver was bound as an apprentice to Mr. Sowerberry, the parish undertaker, who dressed in gloomy black.",
              "His bed was a wretched sack under the counter, surrounded by sombre coffins that rattled when the wind blew through the keyhole.",
              "Mr. Sowerberry recognized Oliver's melancholy sweetness and dressed him in black mourning clothes for children's funerals, exciting the bitter jealousy of Noah Claypole."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Sowerberry",
                "text": "The boy has a pleasant, mournful face. He will make a fine mute for child funerals!",
                "avatarEmoji": "🎩",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "I will work hard and sweep the shop every morning, sir.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-78-2-p1",
              "question": "Where did Oliver sleep while working for Mr. Sowerberry?",
              "options": [
                "In a luxurious feather bed at the village inn",
                "Up in an attic filled with bright toys and books",
                "Under the wooden counter in the undertaker shop among the coffins"
              ],
              "correctInsightIndex": 2,
              "insight": "Dickens showed how friendless orphans were treated with harsh indifference.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "A Valiant Stand for Mother",
            "paragraphs": [
              "Noah Claypole was a cowardly charity boy who delighted in tormenting Oliver whenever the master was absent.",
              "One day Noah taunted him cruelly about his deceased mother, sneering: \"Workhouse, your mother was a right bad one!\"",
              "Crimson fury flushed Oliver's cheeks. He sprang upon the bully with valiant strength, struck him down, and stood over him like a fierce young lion."
            ],
            "dialogueBites": [
              {
                "speaker": "Noah",
                "text": "Your mother was a bad one, Oliver! She deserved to die!",
                "avatarEmoji": "🥊",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "Do not dare speak ill of my mother! She was good and pure!",
                "avatarEmoji": "😠",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Road to London",
            "paragraphs": [
              "Locked in the cellar for daring to defend his mother, Oliver waited until the dead of night when the house was asleep.",
              "He slipped through the garden latch and paused at the workhouse railing, where little Dick blessed him with sweet tears.",
              "Setting his face toward the London milestone, Oliver began a solitary march through wind, dust, and rain, hoping to find fortune where no one knew his name."
            ],
            "dialogueBites": [
              {
                "speaker": "Little Dick",
                "text": "God bless you, dear Oliver! I shall never see you again in this world.",
                "avatarEmoji": "🥺",
                "side": "left"
              },
              {
                "speaker": "Oliver",
                "text": "Goodbye, sweet Dick! I will pray for you every single night!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-78-2-p3",
              "question": "Who gave Oliver a loving parting blessing as he slipped away into the morning light?",
              "options": [
                "His frail little workhouse friend, Dick",
                "Mr. Bumble the parish beadle",
                "Noah Claypole with a handshake"
              ],
              "correctInsightIndex": 0,
              "insight": "True friendship brought light to Oliver even on his loneliest journey.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Apprentice",
            "phonics": "uh-PREN-tis",
            "definition": "A young person learning a trade from a skilled employer.",
            "funExample": "Oliver was bound as an apprentice in the quiet undertaker shop.",
            "emoji": "📜"
          },
          {
            "word": "Valiant",
            "phonics": "VAL-yunt",
            "definition": "Possessing or showing courage or determination.",
            "funExample": "Oliver stood valiant when defending his mother memory against Noah.",
            "emoji": "🛡️"
          },
          {
            "word": "Solitary",
            "phonics": "SOL-ih-tair-ee",
            "definition": "Existing or living alone; without companions.",
            "funExample": "The boy walked solitary along the dusty high road toward London.",
            "emoji": "🚶"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-78-2",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 2!",
          "targetWord": "FLIGHT",
          "scrambleLetters": [
            "T",
            "H",
            "G",
            "I",
            "L",
            "F"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-78-2-comp",
            "question": "Where did Oliver sleep at Mr. Sowerberry's shop?",
            "options": [
              "Under the shop counter among the coffins",
              "In a soft feather bed upstairs",
              "In the warm kitchen by the fire",
              "In a barn on the hay"
            ],
            "correctIndex": 0,
            "textEvidence": "Oliver had to sleep on a thin mattress under the shop counter, surrounded by dark wooden boards and black cloth.",
            "explanation": "From the text: 'Oliver had to sleep on a thin mattress under the shop counter, surrounded by dark wooden boards...'",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-78-2-vocab",
            "question": "Find a word in the passage that means: \"A young person learning a trade from a skilled employer.\".",
            "options": [
              "Apprentice",
              "Apprenticed",
              "Sowerberry",
              "Undertaker"
            ],
            "correctIndex": 0,
            "explanation": "In this chapter, \'Apprentice\' means a young person learning a trade from a skilled employer.",
            "visualClueEmoji": "📜",
            "points": 60
          }
        ]
      },
      {
        "id": "oliver_twist-78-3",
        "dayNumber": 3,
        "title": "The Artful Dodger & Fagin's Lair",
        "subtitle": "Meeting Jack Dawkins at Barnet and entering London by night",
        "estReadingMinutes": 15,
        "totalWordCount": 680,
        "summary": "Limping and famished at Barnet, Oliver meets Jack Dawkins, known as the Artful Dodger, who guides him into London to meet the eccentric old gentleman Fagin.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-78-3",
            "title": "The Artful Dodger & Fagin's Lair",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "fagin_den",
            "caption": "Fagin fries sausages over a smoky fire in his dark den as the boys show their treasures!",
            "characterAvatars": [
              {
                "name": "The Dodger",
                "emoji": "🎩",
                "speech": "Cheer up, mate! I know a respectable gent in London who will give you free lodgings!",
                "position": "left"
              },
              {
                "name": "Fagin",
                "emoji": "🧔",
                "speech": "Welcome, my dear Oliver! Come warm yourself by our merry fire!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot5",
                "x": 30,
                "y": 40,
                "label": "Dodger Oversized Hat",
                "icon": "🎩",
                "soundEffect": "bounce",
                "funFact": "The Dodger wore a man coat with sleeves rolled up and a hat stuck on the back of his head.",
                "action": "bounce"
              },
              {
                "id": "ot6",
                "x": 75,
                "y": 55,
                "label": "Frying Pan Sausages",
                "icon": "🍳",
                "soundEffect": "coin",
                "funFact": "Fagin cooked sausages in an iron skillet over a charcoal brazier for his boys.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Stranger at Barnet",
            "paragraphs": [
              "On the seventh morning, Oliver limped into Barnet with bleeding feet and an empty stomach, crouching upon a milestone.",
              "He was spotted by one of the queerest looking boys that ever lived. His name was Jack Dawkins, known among his comrades as the Artful Dodger.",
              "He was a short boy with bowlegs, sharp eyes, and a peculiar swagger, dressed in a man's coat that reached nearly to his heels and an oversized beaver hat tilted on his brow."
            ],
            "dialogueBites": [
              {
                "speaker": "The Dodger",
                "text": "Hullo, my covey! What is the row? You look down in the mouth!",
                "avatarEmoji": "🎩",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "I have walked seventy miles, and I have had no food for days...",
                "avatarEmoji": "🥺",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-78-3-p1",
              "question": "What did the Artful Dodger do when he first met starving Oliver at Barnet?",
              "options": [
                "He bought Oliver bread and ham and offered him free lodgings in London",
                "He called the police to send Oliver back to the workhouse",
                "He stole Oliver's shoes and ran away into the countryside"
              ],
              "correctInsightIndex": 0,
              "insight": "Even in dark times, unexpected companions can offer warmth, though appearances may mislead.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Entering Dark London by Night",
            "paragraphs": [
              "The Dodger treated Oliver to a hearty meal of bread and meat, assuring him that a respectable old gentleman in London would provide free shelter and employment.",
              "They entered the sprawling metropolis after nightfall, navigating filthy alleys lined with dilapidated houses and squalid shops.",
              "Oliver had never seen streets so dark, noisy, and foul-smelling, but he clung to his nimble guide as they approached Field Lane."
            ],
            "dialogueBites": [
              {
                "speaker": "The Dodger",
                "text": "Keep close to me, Oliver! The old gent is cooking something tasty tonight!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Oliver",
                "text": "It smells very strange here, but I am thankful for a warm roof.",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Fagin and the Sizzling Pan",
            "paragraphs": [
              "The door was opened to the Dodger's secret whistle, and they stepped into a dim, smoke-filled garret.",
              "Standing over a charcoal fire was an elderly man in a greasy flannel gown, holding a toasting fork over a pan of bubbling sausages.",
              "He was introduced as Fagin. Several boys surrounded the table, and dozens of patterned silk handkerchiefs hung drying overhead."
            ],
            "dialogueBites": [
              {
                "speaker": "Fagin",
                "text": "Welcome, young Oliver, welcome! We are so glad to make your acquaintance, my dear!",
                "avatarEmoji": "🧔",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "Thank you, sir! The sausages smell wonderful!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-78-3-p3",
              "question": "What was Fagin doing when Oliver first entered the smoky den?",
              "options": [
                "Reading a thick Latin dictionary by candlelight",
                "Toasting savory sausages over a fire with an iron fork",
                "Painting a portrait of the King on an easel"
              ],
              "correctInsightIndex": 1,
              "insight": "Fagin disguised his illegal gang under the guise of grandfatherly hospitality.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Peculiar",
            "phonics": "pih-KYOOL-yer",
            "definition": "Strange, odd, or unusual in character or appearance.",
            "funExample": "The boy wore a peculiar long coat that dragged on the ground.",
            "emoji": "🧐"
          },
          {
            "word": "Handkerchief",
            "phonics": "HANG-ker-chif",
            "definition": "A small square of fabric used for wiping the nose or eyes.",
            "funExample": "Silk handkerchiefs hung drying on a line across the smoky ceiling.",
            "emoji": "🧣"
          },
          {
            "word": "Nimble",
            "phonics": "NIM-buhl",
            "definition": "Quick and light in movement or action.",
            "funExample": "The nimble Dodger danced across the muddy London stones.",
            "emoji": "🏃"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-78-3",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 3!",
          "targetWord": "DODGER",
          "scrambleLetters": [
            "R",
            "E",
            "G",
            "D",
            "O",
            "D"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-78-3-comp",
            "question": "What food did the Artful Dodger buy for Oliver at the eating house?",
            "options": [
              "Bread, ham, and small beer",
              "Chocolate and sweet cakes",
              "Pork roast and apples",
              "Rice and honey"
            ],
            "correctIndex": 0,
            "textEvidence": "The Dodger bought Oliver a feast of bread, ham, and small beer at an eating house.",
            "explanation": "From the text: 'The Dodger bought Oliver a feast of bread, ham, and small beer at an eating house.'",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-78-3-vocab",
            "question": "Find a word in the passage that means: \"Strange, odd, or unusual in character or appearance.\".",
            "options": [
              "Limping",
              "Famished",
              "Barnet",
              "Peculiar"
            ],
            "correctIndex": 3,
            "explanation": "In this chapter, \'Peculiar\' means strange, odd, or unusual in character or appearance.",
            "visualClueEmoji": "🧐",
            "points": 60
          }
        ]
      },
      {
        "id": "oliver_twist-78-4",
        "dayNumber": 4,
        "title": "The Pocket Handkerchief Game",
        "subtitle": "A curious game of watches, rings, and nimble fingers",
        "estReadingMinutes": 15,
        "totalWordCount": 680,
        "summary": "Oliver observes Fagin and the boys playing a strange, laughing game with watches and silk handkerchiefs, unaware that he is witnessing lessons in pickpocketing.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-78-4",
            "title": "The Pocket Handkerchief Game",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "pocket_game",
            "caption": "Fagin pretends to stroll like an old gentleman while the Dodger and Charley Bates pick his pockets!",
            "characterAvatars": [
              {
                "name": "Fagin",
                "emoji": "🧔",
                "speech": "Watch how an old gentleman strolls, Oliver! See if you can take my handkerchief without a rustle!",
                "position": "left"
              },
              {
                "name": "Charley Bates",
                "emoji": "😂",
                "speech": "Ha ha ha! The Dodger got his watch without touching the coat buttons!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot7",
                "x": 30,
                "y": 45,
                "label": "Gold Pocket Watch",
                "icon": "⏱️",
                "soundEffect": "bounce",
                "funFact": "Gentlemen kept gold watches attached to chains inside their waistcoat pockets.",
                "action": "bounce"
              },
              {
                "id": "ot8",
                "x": 70,
                "y": 60,
                "label": "Silk Handkerchief",
                "icon": "🧣",
                "soundEffect": "coin",
                "funFact": "Victorian silk handkerchiefs had initials embroidered in the corners that the gang picked out with needles.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Secret Box Under the Floor",
            "paragraphs": [
              "When Oliver awoke, the morning sun pierced through the grime of the skylight. Fagin was already boiling water for coffee.",
              "Believing the boy was still asleep, Fagin raised a trapdoor in the floor and drew forth a small tin box.",
              "With sparkling eyes and pure curiosity, Oliver watched Fagin fondle magnificent gold chronometers, jeweled pins, and diamond rings that sparkled in the dim beam of light."
            ],
            "dialogueBites": [
              {
                "speaker": "Fagin",
                "text": "Ah! Sparklers, rings, and pretty watches! What a fine collection an industrious man can gather!",
                "avatarEmoji": "🧔",
                "side": "left"
              },
              {
                "speaker": "Oliver",
                "text": "Good morning, sir! May I help you make the breakfast?",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-78-4-p1",
              "question": "What did Fagin keep hidden in the secret box beneath the floorboards?",
              "options": [
                "Old schoolbooks and Latin dictionaries",
                "Stolen gold watches, diamond rings, and sparkling jewelry",
                "Seeds for planting a flower garden"
              ],
              "correctInsightIndex": 1,
              "insight": "Fagin was a receiver of stolen goods who trained orphaned children to steal for him.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "A Very Curious Game",
            "paragraphs": [
              "The Dodger and young Charley Bates returned shortly, handing over several pocketbooks and fine cambric handkerchiefs.",
              "After breakfast, Fagin commenced a game of extraordinary dexterity. Putting a gold watch in his vest, he strolled up and down the floor like an elderly gentleman taking a morning walk.",
              "The Dodger and Charley followed stealthily behind, snatching the watch and handkerchief with such speed that Fagin never felt a thing, laughing heartily."
            ],
            "dialogueBites": [
              {
                "speaker": "Fagin",
                "text": "Did you feel anything, boys? Ha! Not a twitch! Now let young Oliver try the game!",
                "avatarEmoji": "🧔",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "You are so clever at making fun, sir! I would love to learn!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Innocence in the Shadows",
            "paragraphs": [
              "In his pure innocence, Oliver thought the exercise was an innocent game designed to sharpen wit and hand speed.",
              "He tried his hand at extracting Fagin's handkerchief and managed it without being caught, earning a pat on the cheek and praise.",
              "Oliver had no inkling of the deception that surrounded him, believing Fagin's household was the happiest and kindest place on earth."
            ],
            "dialogueBites": [
              {
                "speaker": "Fagin",
                "text": "You will be a great man, Oliver! You will make your fortune like the Dodger!",
                "avatarEmoji": "🧔",
                "side": "left"
              },
              {
                "speaker": "Charley Bates",
                "text": "Look at the greenhorn! He does it as neat as wax! Ha ha ha!",
                "avatarEmoji": "😂",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-78-4-p3",
              "question": "What did innocent Oliver believe Fagin's handkerchief game really was?",
              "options": [
                "A serious training academy for the royal military",
                "A cooking test to see who could bake bread faster",
                "A fun and cheerful parlor game to practice nimble fingers and make people laugh"
              ],
              "correctInsightIndex": 2,
              "insight": "Oliver's pure heart prevented him from recognizing the crime occurring right before his eyes.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Curiosity",
            "phonics": "kyoo-ree-OSS-ih-tee",
            "definition": "A strong desire to know or learn something.",
            "funExample": "Oliver watched the morning game with innocent curiosity.",
            "emoji": "🤔"
          },
          {
            "word": "Dexterity",
            "phonics": "deks-TAIR-ih-tee",
            "definition": "Skill and grace in physical movement, especially with hands.",
            "funExample": "The Dodger removed the silk cloth with incredible dexterity.",
            "emoji": "🖐️"
          },
          {
            "word": "Deception",
            "phonics": "dih-SEP-shun",
            "definition": "The act of misleading or deceiving someone.",
            "funExample": "Oliver did not suspect the clever deception behind Fagin game.",
            "emoji": "🎭"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-78-4",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 4!",
          "targetWord": "POCKET",
          "scrambleLetters": [
            "T",
            "E",
            "K",
            "C",
            "O",
            "P"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-78-4-comp",
            "question": "What was hidden inside the heavy box Fagin pulled from the floorboards?",
            "options": [
              "Gold watches, diamond rings, and bracelets",
              "Books and parchment paper",
              "Wooden spoons and silver bowls",
              "Old clothes and boots"
            ],
            "correctIndex": 0,
            "textEvidence": "The box was full of sparkling gold watches, diamond rings, and shiny bracelets.",
            "explanation": "From the text: 'The box was full of sparkling gold watches, diamond rings, and shiny bracelets.'",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-78-4-vocab",
            "question": "Find a word in the passage that means: \"A strong desire to know or learn something.\".",
            "options": [
              "Oliver",
              "Curiosity",
              "Observes",
              "Fagin"
            ],
            "correctIndex": 1,
            "explanation": "In this chapter, \'Curiosity\' means a strong desire to know or learn something.",
            "visualClueEmoji": "🤔",
            "points": 60
          }
        ]
      },
      {
        "id": "oliver_twist-78-5",
        "dayNumber": 5,
        "title": "The Bookstall & Kind Mr. Brownlow",
        "subtitle": "Confusion at the bookstall and rescue from the court",
        "estReadingMinutes": 15,
        "totalWordCount": 680,
        "summary": "Oliver accompanies the boys into the street, witnesses them steal a gentleman's handkerchief, runs in panic, and is rescued by the kindly victim, Mr. Brownlow.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-78-5",
            "title": "The Bookstall & Kind Mr. Brownlow",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "brownlow_library",
            "caption": "Mr. Brownlow gazes down kindly at feverish Oliver in his quiet, book-lined study!",
            "characterAvatars": [
              {
                "name": "Mr. Brownlow",
                "emoji": "👴",
                "speech": "Poor boy, there is something in his gentle face that touches my very soul!",
                "position": "right"
              },
              {
                "name": "Oliver",
                "emoji": "👦",
                "speech": "I did not take the handkerchief, sir, I promise on my life!",
                "position": "left"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot9",
                "x": 25,
                "y": 55,
                "label": "Clerkenwell Bookstall",
                "icon": "📚",
                "soundEffect": "magic",
                "funFact": "Mr. Brownlow was absorbed in reading an old book when his pocket was picked.",
                "action": "sparkle"
              },
              {
                "id": "ot10",
                "x": 75,
                "y": 40,
                "label": "Brownlow Fireplace Tea",
                "icon": "🫖",
                "soundEffect": "coin",
                "funFact": "Mrs. Bedwin, the kind housekeeper, brewed hot broth and tea for sick Oliver.",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Crime at the Bookstall",
            "paragraphs": [
              "Oliver was permitted to accompany the Dodger and Charley Bates on a stroll through the busy streets.",
              "At Clerkenwell Green, they noticed an elderly, benevolent-looking gentleman absorbed in reading an old book at a stall.",
              "To Oliver's utter horror, the Dodger crept forward, plunged his hand into the gentleman's pocket, drew out a handkerchief, and darted down a side street."
            ],
            "dialogueBites": [
              {
                "speaker": "Oliver",
                "text": "Oh! They are thieves! What have I done?!",
                "avatarEmoji": "😨",
                "side": "left"
              },
              {
                "speaker": "Dodger",
                "text": "Run, Charley! The old bloke is turning round!",
                "avatarEmoji": "🏃",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-78-5-p1",
              "question": "What did Oliver suddenly realize when the Dodger snatched the handkerchief?",
              "options": [
                "That the book was written in ancient hieroglyphics",
                "That the old gentleman was Oliver's long-lost uncle",
                "That the boys were pickpockets and Fagin was a master of thieves"
              ],
              "correctInsightIndex": 2,
              "insight": "Truth burst upon Oliver in a flash of terror and clarity.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Stop Thief! The Wild Chase",
            "paragraphs": [
              "Terrified beyond measure, Oliver took to his heels, not knowing where he fled.",
              "The old gentleman, missing his handkerchief and observing the running boy, shouted the dreaded hue and cry: \"Stop thief!\"",
              "A wild tumult erupted through the streets as hundreds joined the pursuit. A stout man dealt Oliver a cruel blow, knocking the breathless child into the gutter."
            ],
            "dialogueBites": [
              {
                "speaker": "Crowd",
                "text": "Stop thief! Stop thief! Lay hold of him!",
                "avatarEmoji": "📢",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "I didn't do it! Please, I didn't take anything!",
                "avatarEmoji": "😭",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Magistrate and the Bookstall Keeper",
            "paragraphs": [
              "Oliver was dragged before the tyrannical magistrate Mr. Fang, who refused to listen and sentenced him to three months of hard labour.",
              "At that critical moment, the owner of the bookstall burst into the courtroom, declaring that two other boys had committed the theft.",
              "Oliver collapsed in a dead faint upon the courtroom floor. Moved by immense compassion, Mr. Brownlow placed the feverish child in a coach and carried him to his quiet residence in Pentonville."
            ],
            "dialogueBites": [
              {
                "speaker": "Bookseller",
                "text": "Stop! I saw the whole affair! This boy never touched the handkerchief!",
                "avatarEmoji": "📖",
                "side": "left"
              },
              {
                "speaker": "Mr. Brownlow",
                "text": "Poor child! He is burning with fever. Bring him to my carriage at once!",
                "avatarEmoji": "👴",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-78-5-p3",
              "question": "Who saved Oliver from being sent to prison by the harsh magistrate Mr. Fang?",
              "options": [
                "The honest bookstall keeper who witnessed the real thieves steal the handkerchief",
                "Fagin dressed in a judge's black robe",
                "Noah Claypole who apologized for everything"
              ],
              "correctInsightIndex": 0,
              "insight": "Honesty and evidence saved Oliver from terrible injustice.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Compassion",
            "phonics": "kum-PASH-un",
            "definition": "Sympathetic pity and concern for the misfortunes of others.",
            "funExample": "Mr. Brownlow looked upon the pale orphan with deep compassion.",
            "emoji": "💖"
          },
          {
            "word": "Tumult",
            "phonics": "TOO-mult",
            "definition": "A loud, confused noise, especially one caused by a large mass of people.",
            "funExample": "A great tumult arose as the crowd chased Oliver through the streets.",
            "emoji": "🏃"
          },
          {
            "word": "Benefactor",
            "phonics": "BEN-uh-fak-ter",
            "definition": "A generous person who gives help, money, or kindness to another.",
            "funExample": "Kind Mr. Brownlow became Oliver true protector and benefactor.",
            "emoji": "🤝"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-78-5",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 5!",
          "targetWord": "RESCUE",
          "scrambleLetters": [
            "E",
            "U",
            "C",
            "S",
            "E",
            "R"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-78-5-comp",
            "question": "Who shouted to the magistrate that Oliver did not steal the handkerchief?",
            "options": [
              "The bookstall keeper who saw it all",
              "The Artful Dodger",
              "A police officer",
              "Mr. Bumble"
            ],
            "correctIndex": 0,
            "textEvidence": "Just then, the bookstall keeper rushed in and shouted: Stop! I saw it all! It was another boy who stole the handkerchief!",
            "explanation": "From the text: The bookstall keeper cried, 'Stop! I saw it all! It was another boy who stole the handkerchief!'",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-78-5-vocab",
            "question": "Find a word in the passage that means: \"Sympathetic pity and concern for the misfortunes of others.\".",
            "options": [
              "Oliver",
              "Accompanies",
              "Boys",
              "Compassion"
            ],
            "correctIndex": 3,
            "explanation": "In this chapter, \'Compassion\' means sympathetic pity and concern for the misfortunes of others.",
            "visualClueEmoji": "💖",
            "points": 60
          }
        ]
      },
      {
        "id": "oliver_twist-78-6",
        "dayNumber": 6,
        "title": "The Portrait & The Five-Pound Note",
        "subtitle": "A sweet face on the wall and an ambush in the street",
        "estReadingMinutes": 15,
        "totalWordCount": 680,
        "summary": "Recovering in Mr. Brownlow's peaceful home, Oliver notices a mysterious portrait of a sweet lady. Sent on an errand with books and money, he is ambushed by Fagin's gang.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-78-6",
            "title": "The Portrait & The Five-Pound Note",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "portrait_room",
            "caption": "Oliver gazes up at the portrait of the beautiful lady while holding Mr. Brownlow's books!",
            "characterAvatars": [
              {
                "name": "Mrs. Bedwin",
                "emoji": "👵",
                "speech": "Look at the sweet boy! His eyes are the very spit of the lady in the painting!",
                "position": "left"
              },
              {
                "name": "Bill Sikes",
                "emoji": "🐕",
                "speech": "Come along, young viper! You won't squeak on us to your fancy friends!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot11",
                "x": 30,
                "y": 40,
                "label": "Lady Portrait Painting",
                "icon": "🖼️",
                "soundEffect": "magic",
                "funFact": "The lady in the portrait had the exact same gentle eyes and forehead as Oliver.",
                "action": "sparkle"
              },
              {
                "id": "ot12",
                "x": 75,
                "y": 60,
                "label": "Five Pound Banknote",
                "icon": "💷",
                "soundEffect": "coin",
                "funFact": "Five pounds in Victorian times was worth several months of an average worker wages.",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "A Haven of Peace and Kindness",
            "paragraphs": [
              "For several days Oliver hovered between life and death, nursed tenderly by Mrs. Bedwin, the motherly housekeeper.",
              "When his fever broke, he was seated in an armchair opposite the portrait of a lovely lady with sorrowful, beautiful eyes.",
              "Mrs. Bedwin gasped when she looked from the portrait to Oliver: the eyes, the brow, the shape of the mouth were an astonishing likeness of the boy."
            ],
            "dialogueBites": [
              {
                "speaker": "Mrs. Bedwin",
                "text": "Bless his sweet heart! Look, sir, he has her very eyes and smile!",
                "avatarEmoji": "👵",
                "side": "left"
              },
              {
                "speaker": "Oliver",
                "text": "I feel as though she were smiling right at me, ma'am.",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-78-6-p1",
              "question": "What startled Mrs. Bedwin when she looked from the painted portrait to Oliver?",
              "options": [
                "The painting had the exact same eyes, forehead, and sweet expression as Oliver",
                "The lady in the painting was wearing an apron just like Mrs. Bedwin",
                "The picture fell off the wall and cracked the tea tray"
              ],
              "correctInsightIndex": 0,
              "insight": "Dickens dropped subtle clues about Oliver's true family heritage.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Test of Trust",
            "paragraphs": [
              "Oliver was dressed in a new suit of clothes, shedding his workhouse rags forever.",
              "Mr. Grimwig, an eccentric friend of Brownlow's who was always threatening to eat his own head, expressed cynicism regarding the boy's loyalty.",
              "To vindicate the child, Mr. Brownlow entrusted Oliver with two volumes to return to the bookstall and a five-pound note, sending him into the sunshine with high confidence."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Grimwig",
                "text": "He will run away with your books and your money! If he comes back, I will eat my head!",
                "avatarEmoji": "🎩",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "I will be back in twenty minutes, sir! You may count upon me!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Ambush in the Dark Alley",
            "paragraphs": [
              "Oliver turned down a narrow lane near Whitechapel, eager to complete his mission and prove his devotion.",
              "Without warning, a young woman threw her arms around him, crying hysterically to the bystanders that she had found her runaway brother.",
              "It was Nancy, acting on Fagin's orders! Before Oliver could cry out, Bill Sikes and his vicious dog Bull's-eye seized him, stripping his new clothes and plunging him back into darkness."
            ],
            "dialogueBites": [
              {
                "speaker": "Nancy",
                "text": "Oh, you naughty boy! Mother has been crying her eyes out for you! Come along home!",
                "avatarEmoji": "👩",
                "side": "left"
              },
              {
                "speaker": "Oliver",
                "text": "Help! Help! I do not know these people! The books belong to Mr. Brownlow!",
                "avatarEmoji": "😭",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-78-6-p3",
              "question": "Who ambushed Oliver in the street and dragged him back to Fagin's gang?",
              "options": [
                "Mr. Bumble who chased him in a horse-drawn coach",
                "Nancy and the fierce burglar Bill Sikes with his dog Bull's-eye",
                "The workhouse master with his copper ladle"
              ],
              "correctInsightIndex": 1,
              "insight": "Even when captured, Oliver thought only of not letting down his kind benefactor.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Likeness",
            "phonics": "LIKE-nis",
            "definition": "The fact or quality of being alike; a portrait or resemblance.",
            "funExample": "The painted portrait bore a striking likeness to young Oliver.",
            "emoji": "🖼️"
          },
          {
            "word": "Betrayal",
            "phonics": "bih-TRAY-ul",
            "definition": "The breaking or violation of trust or confidence.",
            "funExample": "Mr. Grimwig wrongly predicted Oliver would commit a betrayal.",
            "emoji": "💔"
          },
          {
            "word": "Faithful",
            "phonics": "FAYTH-ful",
            "definition": "Steadfast in affection, allegiance, or duty.",
            "funExample": "Oliver was determined to be faithful to his kind protector.",
            "emoji": "🌟"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-78-6",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 6!",
          "targetWord": "PORTRAIT",
          "scrambleLetters": [
            "T",
            "I",
            "A",
            "R",
            "T",
            "R",
            "O",
            "P"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-78-6-comp",
            "question": "What did Mr. Brownlow give Oliver to return to the bookstall?",
            "options": [
              "Valuable books and a five-pound note",
              "A gold pocket watch",
              "A silver tea set",
              "A box of leather gloves"
            ],
            "correctIndex": 0,
            "textEvidence": "Mr. Brownlow gave the boy some valuable books to return and a crisp five-pound note to pay the bookseller.",
            "explanation": "From the text: Mr. Brownlow gave Oliver valuable books and a five-pound note to pay the bookseller.",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-78-6-vocab",
            "question": "Find a word in the passage that means: \"The fact or quality of being alike; a portrait or resemblance.\".",
            "options": [
              "Recovering",
              "Likeness",
              "Brownlow",
              "Peaceful"
            ],
            "correctIndex": 1,
            "explanation": "In this chapter, \'Likeness\' means the fact or quality of being alike; a portrait or resemblance.",
            "visualClueEmoji": "🖼️",
            "points": 60
          }
        ]
      },
      {
        "id": "oliver_twist-78-7",
        "dayNumber": 7,
        "title": "Nancy's Brave Midnight Journey",
        "subtitle": "The secret meeting on the dark stone steps of London Bridge",
        "estReadingMinutes": 15,
        "totalWordCount": 680,
        "summary": "Deeply moved by Oliver's innocence, Nancy risks her life to meet Mr. Brownlow and Rose Maylie on London Bridge at midnight, revealing the plot against the boy.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-78-7",
            "title": "Nancy's Brave Midnight Journey",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "london_bridge_night",
            "caption": "Nancy speaks in hushed tones to Rose and Mr. Brownlow on the misty stone steps of London Bridge!",
            "characterAvatars": [
              {
                "name": "Nancy",
                "emoji": "👩",
                "speech": "Oliver is innocent as an angel! A villain named Monks wants him destroyed for his inheritance!",
                "position": "left"
              },
              {
                "name": "Rose Maylie",
                "emoji": "🌹",
                "speech": "Brave Nancy, let us help you escape this dangerous life!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot13",
                "x": 30,
                "y": 55,
                "label": "London Bridge Stone Steps",
                "icon": "🌉",
                "soundEffect": "bounce",
                "funFact": "The stone steps led down to the dark Thames water where boats were moored in fog.",
                "action": "bounce"
              },
              {
                "id": "ot14",
                "x": 70,
                "y": 40,
                "label": "Midnight Big Ben Bell",
                "icon": "🕰️",
                "soundEffect": "magic",
                "funFact": "The heavy bell of St. Paul's Cathedral tolled midnight across the river.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "A Heart Awakened to Goodness",
            "paragraphs": [
              "Oliver was returned to the squalid den, weeping bitterly that Mr. Brownlow would believe he had run away with the money.",
              "When Sikes attempted to strike the child with his cudgel, Nancy sprang forward like a fury, defending Oliver at the peril of her own life.",
              "Though raised in crime and misery, Nancy possessed a noble spark of compassion that Oliver's innocence had fanned into flame."
            ],
            "dialogueBites": [
              {
                "speaker": "Nancy",
                "text": "I won't stand by and see him beaten! He is a sweet child, better than all of us!",
                "avatarEmoji": "👩",
                "side": "left"
              },
              {
                "speaker": "Fagin",
                "text": "Quiet, girl! You will ruin us all with your foolish tears!",
                "avatarEmoji": "🧔",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-78-7-p1",
              "question": "Why did Nancy courageously defend Oliver from Bill Sikes and Fagin?",
              "options": [
                "Because Fagin promised to give her a thousand gold coins",
                "Because Oliver's pure innocence awakened the goodness and compassion in her heart",
                "Because she wanted to adopt Oliver and become a schoolteacher"
              ],
              "correctInsightIndex": 1,
              "insight": "Charles Dickens believed that even in the darkest circumstances, the human soul could choose goodness.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Mysterious Villain Monks",
            "paragraphs": [
              "A shadowy figure named Monks arrived at the den, his face twisted with malice and dark hatred toward Oliver.",
              "Nancy eavesdropped and discovered that Monks had purchased a gold locket containing Oliver's mother's name and thrown it into the river.",
              "Monks sought to ruin Oliver so that the boy could never inherit his father's vast fortune, leaving Monks with all the wealth."
            ],
            "dialogueBites": [
              {
                "speaker": "Monks",
                "text": "Make him a thief! Put him in the dock! He must never know who his father was!",
                "avatarEmoji": "👤",
                "side": "left"
              },
              {
                "speaker": "Nancy",
                "text": "I must find Mr. Brownlow... I cannot let them destroy this boy.",
                "avatarEmoji": "👩",
                "side": "right"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Midnight Meeting on the Steps",
            "paragraphs": [
              "At the stroke of midnight, Nancy met Mr. Brownlow and the angelic Rose Maylie on the cold stone steps of London Bridge.",
              "The river Thames lapped against the slimy stone piles below as Nancy revealed the entire conspiracy orchestrated by Monks.",
              "Rose begged Nancy to let them rescue her from her wretched companions, but Nancy refused with noble sacrifice, returning to face her fate."
            ],
            "dialogueBites": [
              {
                "speaker": "Rose Maylie",
                "text": "Dear Nancy, come with us tonight! We can give you a safe, happy home far from here!",
                "avatarEmoji": "🌹",
                "side": "right"
              },
              {
                "speaker": "Nancy",
                "text": "No, miss... I cannot leave him. But save Oliver! He is pure and good!",
                "avatarEmoji": "👩",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-78-7-p3",
              "question": "Where did Nancy meet Mr. Brownlow and Rose Maylie to reveal the plot against Oliver?",
              "options": [
                "Inside the royal dining room at Buckingham Palace",
                "At the parish workhouse gates in Kent",
                "On the dark stone steps of London Bridge at the stroke of midnight"
              ],
              "correctInsightIndex": 2,
              "insight": "Nancy's courage became the turning point that saved Oliver's life and legacy.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Sacrifice",
            "phonics": "SAK-rih-fise",
            "definition": "An act of giving up something valuable for the sake of something more important.",
            "funExample": "Nancy made a heroic sacrifice to protect innocent Oliver.",
            "emoji": "🕊️"
          },
          {
            "word": "Archway",
            "phonics": "ARTCH-way",
            "definition": "A curved structure forming a passage or entrance.",
            "funExample": "They stood under the dark stone archway beneath the bridge.",
            "emoji": "🏛️"
          },
          {
            "word": "Midnight",
            "phonics": "MID-nite",
            "definition": "Twelve o'clock at night; the middle of the night.",
            "funExample": "The clocks struck midnight across the misty river Thames.",
            "emoji": "🌙"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-78-7",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 7!",
          "targetWord": "BRIDGE",
          "scrambleLetters": [
            "E",
            "G",
            "D",
            "I",
            "R",
            "B"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-78-7-comp",
            "question": "Where did Nancy secretly meet Mr. Brownlow at midnight?",
            "options": [
              "On London Bridge under a stone arch",
              "Inside Tellson's Bank",
              "In a churchyard in Dover",
              "At a tea shop in the village"
            ],
            "correctIndex": 0,
            "textEvidence": "At midnight, Nancy slipped away to London Bridge... Waiting under the stone archway were kind Mr. Brownlow and a sweet, beautiful lady named Rose Maylie.",
            "explanation": "From the text: Nancy met Mr. Brownlow and Rose Maylie on London Bridge at midnight.",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-78-7-vocab",
            "question": "Find a word in the passage that means: \"An act of giving up something valuable for the sake of something more important.\".",
            "options": [
              "Sacrifice",
              "Deeply",
              "Moved",
              "Oliver"
            ],
            "correctIndex": 0,
            "explanation": "In this chapter, \'Sacrifice\' means an act of giving up something valuable for the sake of something more important.",
            "visualClueEmoji": "🕊️",
            "points": 60
          }
        ]
      },
      {
        "id": "oliver_twist-78-8",
        "dayNumber": 8,
        "title": "The Secret Heritage & A Peaceful Home",
        "subtitle": "The truth revealed, adoption, and a garden of love",
        "estReadingMinutes": 15,
        "totalWordCount": 680,
        "summary": "Monks is unmasked and forced to confess. Oliver discovers his true name and inheritance, and is legally adopted by kind Mr. Brownlow to live in joy.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-78-8",
            "title": "The Secret Heritage & A Peaceful Home",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "peaceful_parsonage",
            "caption": "Oliver runs across the sunny garden lawn into the loving arms of Mr. Brownlow and Rose!",
            "characterAvatars": [
              {
                "name": "Oliver",
                "emoji": "👦",
                "speech": "I have a real father and a true home at last!",
                "position": "left"
              },
              {
                "name": "Mr. Brownlow",
                "emoji": "👴",
                "speech": "You are my own son now, Oliver, and nothing shall ever separate us!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot15",
                "x": 30,
                "y": 55,
                "label": "Country Cottage Garden",
                "icon": "🏡",
                "soundEffect": "magic",
                "funFact": "Oliver moved to a peaceful country village with Rose, Harry, and Mr. Brownlow.",
                "action": "sparkle"
              },
              {
                "id": "ot16",
                "x": 70,
                "y": 45,
                "label": "Inheritance Legal Will",
                "icon": "📜",
                "soundEffect": "coin",
                "funFact": "Oliver received a generous inheritance left to him by his true father, Edwin Leeford.",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Monks Unmasked",
            "paragraphs": [
              "Armed with the evidence Nancy provided, Mr. Brownlow cornered Monks and compelled a full confession.",
              "Monks was unmasked as Edward Leeford, Oliver's half-brother, whose mother had separated from his father years before.",
              "Their father had died leaving a will bequeathing a handsome inheritance to young Oliver, provided the boy grew up without a stain upon his name."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Brownlow",
                "text": "You knew your brother was alive, and you sought to destroy him for gold!",
                "avatarEmoji": "👴",
                "side": "left"
              },
              {
                "speaker": "Monks",
                "text": "I confess everything... Let me take my share of the money and leave England forever!",
                "avatarEmoji": "👤",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-78-8-p1",
              "question": "Who was the mysterious villain Monks revealed to be?",
              "options": [
                "The King's royal tax collector from Scotland",
                "The original founder of the parish workhouse",
                "Oliver's older half-brother, who wanted to steal the family inheritance"
              ],
              "correctInsightIndex": 2,
              "insight": "Truth prevailed, exposing the greed that had caused Oliver so much suffering.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Justice and Farewell to the Past",
            "paragraphs": [
              "The law swiftly dissolved Fagin's den of thieves, bringing an end to the dark empire of pickpockets.",
              "Oliver demonstrated his saintly nature by forgiving Monks, insisting that half of the paternal estate be granted to his wayward brother.",
              "Oliver revisited the workhouse village, weeping at the grave of little Dick, who had passed away to a gentler world, free from cold and hunger."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Brownlow",
                "text": "You are generous to a fault, Oliver. You give gold to one who plotted your doom.",
                "avatarEmoji": "👴",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "He is my father's son, sir. I wish him only peace and repentance.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "A Son, A Home, A Happy Life",
            "paragraphs": [
              "Mr. Brownlow formally adopted Oliver Twist as his own son, filling the empty places in both their hearts.",
              "They settled in a tranquil country village near the parsonage of Rose and Harry Maylie, surrounded by flowering meadows and singing birds.",
              "Oliver grew in stature, wisdom, and boundless joy, surrounded by friends whose affection shielded him forever from the cold stones of the past."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Brownlow",
                "text": "You are my dear son now, Oliver. This home and everything in it belongs to you.",
                "avatarEmoji": "👴",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "My heart is so full of happiness! God bless everyone who showed me kindness!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-78-8-p3",
              "question": "How does Oliver Twist's story conclude in joy and peace?",
              "options": [
                "Mr. Brownlow legally adopts Oliver as his son, and they live happily in a peaceful country cottage",
                "Oliver returns to the workhouse to become the headmaster",
                "Oliver becomes a sailor and travels around the world forever"
              ],
              "correctInsightIndex": 0,
              "insight": "Love, kindness, and honest courage conquered all adversity.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Inheritance",
            "phonics": "in-HAIR-ih-tuns",
            "definition": "Property, money, or a title received upon someone's death.",
            "funExample": "Oliver divided his rightful inheritance generously with Monks.",
            "emoji": "📜"
          },
          {
            "word": "Sanctuary",
            "phonics": "SANK-choo-air-ee",
            "definition": "A place of safety, refuge, or quiet protection.",
            "funExample": "The sunny country cottage was a true sanctuary for Oliver.",
            "emoji": "🏡"
          },
          {
            "word": "Gratitude",
            "phonics": "GRAT-ih-tood",
            "definition": "The feeling of being thankful and appreciative.",
            "funExample": "Oliver heart was filled with boundless love and gratitude.",
            "emoji": "🙏"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-78-8",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 8!",
          "targetWord": "HERITAGE",
          "scrambleLetters": [
            "E",
            "G",
            "A",
            "T",
            "I",
            "R",
            "E",
            "H"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-78-8-comp",
            "question": "What did kind Mr. Brownlow do for Oliver at the end of the story?",
            "options": [
              "He legally adopted Oliver as his own beloved son",
              "He sent Oliver to sea on a ship",
              "He made Oliver an apprentice blacksmith",
              "He sent Oliver back to the workhouse"
            ],
            "correctIndex": 0,
            "textEvidence": "Mr. Brownlow legally adopted Oliver as his own beloved son! They moved to a beautiful country cottage...",
            "explanation": "From the text: 'Mr. Brownlow legally adopted Oliver as his own beloved son!'",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-78-8-vocab",
            "question": "Find a word in the passage that means: \"Property, money, or a title received upon someone's death.\".",
            "options": [
              "Monks",
              "Unmasked",
              "Inheritance",
              "Forced"
            ],
            "correctIndex": 2,
            "explanation": "In this chapter, \'Inheritance\' means property, money, or a title received upon someone's death.",
            "visualClueEmoji": "📜",
            "points": 60
          }
        ]
      }
    ],
    "9+": [
      {
        "id": "oliver_twist-9plus-1",
        "dayNumber": 1,
        "title": "Please, Sir, I Want Some More",
        "subtitle": "The hungry boys cast lots in the gloomy stone hall",
        "estReadingMinutes": 15,
        "totalWordCount": 820,
        "summary": "Born in a dreary parish workhouse, young orphan Oliver is pushed forward by his starving companions to ask the astonished master for another ladle of thin gruel.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-9plus-1",
            "title": "Please, Sir, I Want Some More",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "workhouse_hall",
            "caption": "Oliver steps forward with his wooden bowl into the stone dining hall as the master stares in shock!",
            "characterAvatars": [
              {
                "name": "Oliver",
                "emoji": "👦",
                "speech": "Please, sir, I want some more...",
                "position": "left"
              },
              {
                "name": "Mr. Bumble",
                "emoji": "🎩",
                "speech": "More?! Never has any boy asked for more in this parish!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot1",
                "x": 25,
                "y": 60,
                "label": "Wooden Gruel Bowl",
                "icon": "🥣",
                "soundEffect": "coin",
                "funFact": "Workhouse boys were fed only three small meals of thin gruel a day.",
                "action": "sparkle"
              },
              {
                "id": "ot2",
                "x": 75,
                "y": 45,
                "label": "Master Copper Ladle",
                "icon": "🥄",
                "soundEffect": "bounce",
                "funFact": "The parish master wore a grand cocked hat and carried a huge iron ladle.",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Starving Stone Hall",
            "paragraphs": [
              "Oliver Twist entered existence in the dreary confines of a municipal workhouse under the neglectful oversight of parish authorities.",
              "The cavernous refectory was paved with flagstones, where twice daily the master dispensed a meager ration of gruel from a bubbling copper boiler.",
              "Famine reigned among the juvenile inmates; the boys grew ravenous, whispering in desperation about devouring their straw mattresses if no further sustenance was provided."
            ],
            "dialogueBites": [
              {
                "speaker": "Boy",
                "text": "Oliver, the lot fell on you! You must go up and ask for another spoonful!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Oliver",
                "text": "My knees shake, but I promised I would go...",
                "avatarEmoji": "🥺",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-9plus-1-p1",
              "question": "Why did the boys in the workhouse never need to wash their wooden bowls?",
              "options": [
                "Because the kitchen staff washed them in soapy boiling river water",
                "Because they scraped and licked them so clean with their spoons that not a crumb remained",
                "Because the boys threw their bowls away into the fireplace every day"
              ],
              "correctInsightIndex": 1,
              "insight": "Charles Dickens highlighted the severe poverty and hunger faced by children in 19th-century Britain.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Unthinkable Question",
            "paragraphs": [
              "A desperate conclave was convened among the emaciated youths; lots were inscribed on scrap paper, and fate designated young Oliver Twist.",
              "Childhood innocence struggled with hollow starvation; propelled forward by the nudges of his companions, Oliver advanced toward the imposing dais.",
              "Grasping his wooden vessel, he uttered the historic plea in breathless astonishment: \"Please, sir, I want some more.\""
            ],
            "dialogueBites": [
              {
                "speaker": "Oliver",
                "text": "Please, sir, I want some more gruel.",
                "avatarEmoji": "🥣",
                "side": "left"
              },
              {
                "speaker": "Master",
                "text": "WHAT?! Say that again if you dare, boy!",
                "avatarEmoji": "😡",
                "side": "right"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Uproar and Confinement",
            "paragraphs": [
              "The master grew pale with incredulity, clutching the copper ladle as if confronted by open mutiny.",
              "Recovering his faculties, he dealt a resounding blow against Oliver's crown and summoned Mr. Bumble with hysterical shouts.",
              "The parish board convened in immediate horror, decreeing that this insolent rebel must be apprenticed immediately. A placard was posted on the exterior gate offering five pounds to anyone who would relieve the parish of Oliver Twist."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Bumble",
                "text": "That boy will come to be hanged! I knew it from the hour of his birth!",
                "avatarEmoji": "🎩",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "I only wanted a little more warm gruel to stop the pain in my stomach...",
                "avatarEmoji": "😢",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-9plus-1-p3",
              "question": "What did the parish board do after Oliver asked for more food?",
              "options": [
                "They gave every boy a feast of roasted turkey and plum pudding",
                "They elected Oliver as the new leader of the school council",
                "They posted a notice offering five pounds to anyone who would take Oliver away as an apprentice"
              ],
              "correctInsightIndex": 2,
              "insight": "Even in dark times, Oliver remained kind-hearted and brave.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Gruel",
            "phonics": "GROO-uhl",
            "definition": "A thin, watery porridge boiled in water or milk.",
            "funExample": "The hungry boys scraped their wooden bowls clean of every drop of gruel.",
            "emoji": "🥣"
          },
          {
            "word": "Astonishment",
            "phonics": "uh-STON-ish-munt",
            "definition": "A feeling of great surprise and wonder.",
            "funExample": "The master stared in silent astonishment at Oliver.",
            "emoji": "😲"
          },
          {
            "word": "Trembling",
            "phonics": "TREM-bling",
            "definition": "Shaking involuntarily with fear, cold, or weakness.",
            "funExample": "Oliver stood trembling before the stern parish beadle.",
            "emoji": "🥶"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-9plus-1",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 1!",
          "targetWord": "GRUEL",
          "scrambleLetters": [
            "L",
            "E",
            "U",
            "R",
            "G"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-9plus-1-comp",
            "question": "Why did Oliver walk up to the master to ask for more gruel?",
            "options": [
              "The boys cast lots and the choice fell on Oliver",
              "He wanted to play a trick",
              "The master called his name",
              "He was told to ask for salt"
            ],
            "correctIndex": 0,
            "textEvidence": "They cast lots with slips of paper, and the lot fell on little Oliver. He had to walk up to the master after supper and ask for more gruel.",
            "explanation": "From the text: 'They cast lots with slips of paper, and the lot fell on little Oliver.'",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-9plus-1-vocab",
            "question": "Find a word in the passage that means: \"A thin, watery porridge boiled in water or milk.\".",
            "options": [
              "Born",
              "Dreary",
              "Gruel",
              "Parish"
            ],
            "correctIndex": 2,
            "explanation": "In this chapter, \'Gruel\' means a thin, watery porridge boiled in water or milk.",
            "visualClueEmoji": "🥣",
            "points": 60
          }
        ]
      },
      {
        "id": "oliver_twist-9plus-2",
        "dayNumber": 2,
        "title": "The Undertaker's Apprentice & Flight to London",
        "subtitle": "Defending his mother and walking the great North Road",
        "estReadingMinutes": 15,
        "totalWordCount": 820,
        "summary": "Apprenticed to Mr. Sowerberry the undertaker, Oliver defends his mother from cruel insults, then escapes on foot toward the distant lights of London.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-9plus-2",
            "title": "The Undertaker's Apprentice & Flight to London",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "undertaker_shop",
            "caption": "Oliver slips past the coffin workshop at dawn, starting his seventy-mile journey to London!",
            "characterAvatars": [
              {
                "name": "Oliver",
                "emoji": "👦",
                "speech": "She was my mother, and you shall not speak ill of her!",
                "position": "left"
              },
              {
                "name": "Noah Claypole",
                "emoji": "🥊",
                "speech": "Workhouse brat! Your mother was a wretched nobody!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot3",
                "x": 30,
                "y": 50,
                "label": "Undertaker Coffin Shop",
                "icon": "⚰️",
                "soundEffect": "bounce",
                "funFact": "Mr. Sowerberry made Oliver a mute mourner at children funerals because of his gentle face.",
                "action": "bounce"
              },
              {
                "id": "ot4",
                "x": 70,
                "y": 65,
                "label": "London Milestone Stone",
                "icon": "🪨",
                "soundEffect": "magic",
                "funFact": "London was seventy miles away from Oliver native parish town.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Sleeping Under the Coffin Bench",
            "paragraphs": [
              "Oliver commenced his servitude as an indentured apprentice to Mr. Sowerberry, the undertaker who held the parochial funeral contract.",
              "He slumbered among the half-finished coffins beneath the dusty counter, enveloped in the heavy atmosphere of human mortality.",
              "While the master appreciated the boy's solemn demeanor, Mrs. Sowerberry relegated Oliver to stale kitchen scraps and the malicious scorn of the charity boy Noah Claypole."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Sowerberry",
                "text": "The boy has a pleasant, mournful face. He will make a fine mute for child funerals!",
                "avatarEmoji": "🎩",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "I will work hard and sweep the shop every morning, sir.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-9plus-2-p1",
              "question": "Where did Oliver sleep while working for Mr. Sowerberry?",
              "options": [
                "In a luxurious feather bed at the village inn",
                "Up in an attic filled with bright toys and books",
                "Under the wooden counter in the undertaker shop among the coffins"
              ],
              "correctInsightIndex": 2,
              "insight": "Dickens showed how friendless orphans were treated with harsh indifference.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "A Valiant Stand for Mother",
            "paragraphs": [
              "Noah Claypole, cowardly by nature, subjected Oliver to habitual harassment to compensate for his own humble charity origins.",
              "One morning he ventured into unforgivable malice, defaming Oliver's departed mother with vulgar slurs.",
              "An incandescent spark of filial devotion ignited in Oliver; rising with valiant fury, he felled the much larger youth with a single blow of righteous outrage."
            ],
            "dialogueBites": [
              {
                "speaker": "Noah",
                "text": "Your mother was a bad one, Oliver! She deserved to die!",
                "avatarEmoji": "🥊",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "Do not dare speak ill of my mother! She was good and pure!",
                "avatarEmoji": "😠",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Road to London",
            "paragraphs": [
              "After enduring unjust castigation and imprisonment in the coal cellar, Oliver seized an opportunity to unlatch the courtyard gate at daybreak.",
              "Pausing only to receive the tender parting blessing of his fragile friend little Dick, Oliver embarked upon the great high road.",
              "The stone marker read seventy miles to London; with bleeding feet and solitary fortitude, the runaway orphan trudged toward the imperial metropolis."
            ],
            "dialogueBites": [
              {
                "speaker": "Little Dick",
                "text": "God bless you, dear Oliver! I shall never see you again in this world.",
                "avatarEmoji": "🥺",
                "side": "left"
              },
              {
                "speaker": "Oliver",
                "text": "Goodbye, sweet Dick! I will pray for you every single night!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-9plus-2-p3",
              "question": "Who gave Oliver a loving parting blessing as he slipped away into the morning light?",
              "options": [
                "His frail little workhouse friend, Dick",
                "Mr. Bumble the parish beadle",
                "Noah Claypole with a handshake"
              ],
              "correctInsightIndex": 0,
              "insight": "True friendship brought light to Oliver even on his loneliest journey.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Apprentice",
            "phonics": "uh-PREN-tis",
            "definition": "A young person learning a trade from a skilled employer.",
            "funExample": "Oliver was bound as an apprentice in the quiet undertaker shop.",
            "emoji": "📜"
          },
          {
            "word": "Valiant",
            "phonics": "VAL-yunt",
            "definition": "Possessing or showing courage or determination.",
            "funExample": "Oliver stood valiant when defending his mother memory against Noah.",
            "emoji": "🛡️"
          },
          {
            "word": "Solitary",
            "phonics": "SOL-ih-tair-ee",
            "definition": "Existing or living alone; without companions.",
            "funExample": "The boy walked solitary along the dusty high road toward London.",
            "emoji": "🚶"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-9plus-2",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 2!",
          "targetWord": "FLIGHT",
          "scrambleLetters": [
            "T",
            "H",
            "G",
            "I",
            "L",
            "F"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-9plus-2-comp",
            "question": "Where did Oliver sleep at Mr. Sowerberry's shop?",
            "options": [
              "Under the shop counter among the coffins",
              "In a soft feather bed upstairs",
              "In the warm kitchen by the fire",
              "In a barn on the hay"
            ],
            "correctIndex": 0,
            "textEvidence": "Oliver had to sleep on a thin mattress under the shop counter, surrounded by dark wooden boards and black cloth.",
            "explanation": "From the text: 'Oliver had to sleep on a thin mattress under the shop counter, surrounded by dark wooden boards...'",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-9plus-2-vocab",
            "question": "Find a word in the passage that means: \"A young person learning a trade from a skilled employer.\".",
            "options": [
              "Apprentice",
              "Apprenticed",
              "Sowerberry",
              "Undertaker"
            ],
            "correctIndex": 0,
            "explanation": "In this chapter, \'Apprentice\' means a young person learning a trade from a skilled employer.",
            "visualClueEmoji": "📜",
            "points": 60
          }
        ]
      },
      {
        "id": "oliver_twist-9plus-3",
        "dayNumber": 3,
        "title": "The Artful Dodger & Fagin's Lair",
        "subtitle": "Meeting Jack Dawkins at Barnet and entering London by night",
        "estReadingMinutes": 15,
        "totalWordCount": 820,
        "summary": "Limping and famished at Barnet, Oliver meets Jack Dawkins, known as the Artful Dodger, who guides him into London to meet the eccentric old gentleman Fagin.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-9plus-3",
            "title": "The Artful Dodger & Fagin's Lair",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "fagin_den",
            "caption": "Fagin fries sausages over a smoky fire in his dark den as the boys show their treasures!",
            "characterAvatars": [
              {
                "name": "The Dodger",
                "emoji": "🎩",
                "speech": "Cheer up, mate! I know a respectable gent in London who will give you free lodgings!",
                "position": "left"
              },
              {
                "name": "Fagin",
                "emoji": "🧔",
                "speech": "Welcome, my dear Oliver! Come warm yourself by our merry fire!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot5",
                "x": 30,
                "y": 40,
                "label": "Dodger Oversized Hat",
                "icon": "🎩",
                "soundEffect": "bounce",
                "funFact": "The Dodger wore a man coat with sleeves rolled up and a hat stuck on the back of his head.",
                "action": "bounce"
              },
              {
                "id": "ot6",
                "x": 75,
                "y": 55,
                "label": "Frying Pan Sausages",
                "icon": "🍳",
                "soundEffect": "coin",
                "funFact": "Fagin cooked sausages in an iron skillet over a charcoal brazier for his boys.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Stranger at Barnet",
            "paragraphs": [
              "By the seventh dawn, Oliver arrived in Barnet in a state of advanced physical exhaustion, having subsisted on water and donated crusts.",
              "He attracted the notice of Jack Dawkins, an adolescent vagabond celebrated throughout the London underworld as the Artful Dodger.",
              "The Dodger possessed a remarkably peculiar air of worldly self-possession, sporting an oversized top hat, rolled cuffs, and the shrewd, assessing demeanor of an experienced veteran of the streets."
            ],
            "dialogueBites": [
              {
                "speaker": "The Dodger",
                "text": "Hullo, my covey! What is the row? You look down in the mouth!",
                "avatarEmoji": "🎩",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "I have walked seventy miles, and I have had no food for days...",
                "avatarEmoji": "🥺",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-9plus-3-p1",
              "question": "What did the Artful Dodger do when he first met starving Oliver at Barnet?",
              "options": [
                "He bought Oliver bread and ham and offered him free lodgings in London",
                "He called the police to send Oliver back to the workhouse",
                "He stole Oliver's shoes and ran away into the countryside"
              ],
              "correctInsightIndex": 0,
              "insight": "Even in dark times, unexpected companions can offer warmth, though appearances may mislead.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Entering Dark London by Night",
            "paragraphs": [
              "After satisfying Oliver's famished appetite, the Dodger dangled the prospect of complimentary lodging with a benign elderly benefactor in London.",
              "Under cover of nocturnal darkness, they penetrated the subterranean labyrinths of Saffron Hill, traversing foul gutters and decrepit tenements.",
              "The bewildering squalor and clamor of the urban slums filled Oliver with unease, yet the Dodger navigated the labyrinth with nimble familiarity."
            ],
            "dialogueBites": [
              {
                "speaker": "The Dodger",
                "text": "Keep close to me, Oliver! The old gent is cooking something tasty tonight!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Oliver",
                "text": "It smells very strange here, but I am thankful for a warm roof.",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Fagin and the Sizzling Pan",
            "paragraphs": [
              "Gaining admittance via a coded knock, Oliver crossed the threshold into a gloomy, soot-encrusted apartment.",
              "Before a charcoal brazier stood an elderly man with villainous features and tangled whiskers, toasting sausages with an iron fork.",
              "This was Fagin; around him lounged youth of Dodger's acquaintance, while an overhead line was draped with scores of washed silk pocket handkerchiefs."
            ],
            "dialogueBites": [
              {
                "speaker": "Fagin",
                "text": "Welcome, young Oliver, welcome! We are so glad to make your acquaintance, my dear!",
                "avatarEmoji": "🧔",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "Thank you, sir! The sausages smell wonderful!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-9plus-3-p3",
              "question": "What was Fagin doing when Oliver first entered the smoky den?",
              "options": [
                "Reading a thick Latin dictionary by candlelight",
                "Toasting savory sausages over a fire with an iron fork",
                "Painting a portrait of the King on an easel"
              ],
              "correctInsightIndex": 1,
              "insight": "Fagin disguised his illegal gang under the guise of grandfatherly hospitality.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Peculiar",
            "phonics": "pih-KYOOL-yer",
            "definition": "Strange, odd, or unusual in character or appearance.",
            "funExample": "The boy wore a peculiar long coat that dragged on the ground.",
            "emoji": "🧐"
          },
          {
            "word": "Handkerchief",
            "phonics": "HANG-ker-chif",
            "definition": "A small square of fabric used for wiping the nose or eyes.",
            "funExample": "Silk handkerchiefs hung drying on a line across the smoky ceiling.",
            "emoji": "🧣"
          },
          {
            "word": "Nimble",
            "phonics": "NIM-buhl",
            "definition": "Quick and light in movement or action.",
            "funExample": "The nimble Dodger danced across the muddy London stones.",
            "emoji": "🏃"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-9plus-3",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 3!",
          "targetWord": "DODGER",
          "scrambleLetters": [
            "R",
            "E",
            "G",
            "D",
            "O",
            "D"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-9plus-3-comp",
            "question": "What food did the Artful Dodger buy for Oliver at the eating house?",
            "options": [
              "Bread, ham, and small beer",
              "Chocolate and sweet cakes",
              "Pork roast and apples",
              "Rice and honey"
            ],
            "correctIndex": 0,
            "textEvidence": "The Dodger bought Oliver a feast of bread, ham, and small beer at an eating house.",
            "explanation": "From the text: 'The Dodger bought Oliver a feast of bread, ham, and small beer at an eating house.'",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-9plus-3-vocab",
            "question": "Find a word in the passage that means: \"Strange, odd, or unusual in character or appearance.\".",
            "options": [
              "Limping",
              "Famished",
              "Barnet",
              "Peculiar"
            ],
            "correctIndex": 3,
            "explanation": "In this chapter, \'Peculiar\' means strange, odd, or unusual in character or appearance.",
            "visualClueEmoji": "🧐",
            "points": 60
          }
        ]
      },
      {
        "id": "oliver_twist-9plus-4",
        "dayNumber": 4,
        "title": "The Pocket Handkerchief Game",
        "subtitle": "A curious game of watches, rings, and nimble fingers",
        "estReadingMinutes": 15,
        "totalWordCount": 820,
        "summary": "Oliver observes Fagin and the boys playing a strange, laughing game with watches and silk handkerchiefs, unaware that he is witnessing lessons in pickpocketing.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-9plus-4",
            "title": "The Pocket Handkerchief Game",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "pocket_game",
            "caption": "Fagin pretends to stroll like an old gentleman while the Dodger and Charley Bates pick his pockets!",
            "characterAvatars": [
              {
                "name": "Fagin",
                "emoji": "🧔",
                "speech": "Watch how an old gentleman strolls, Oliver! See if you can take my handkerchief without a rustle!",
                "position": "left"
              },
              {
                "name": "Charley Bates",
                "emoji": "😂",
                "speech": "Ha ha ha! The Dodger got his watch without touching the coat buttons!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot7",
                "x": 30,
                "y": 45,
                "label": "Gold Pocket Watch",
                "icon": "⏱️",
                "soundEffect": "bounce",
                "funFact": "Gentlemen kept gold watches attached to chains inside their waistcoat pockets.",
                "action": "bounce"
              },
              {
                "id": "ot8",
                "x": 70,
                "y": 60,
                "label": "Silk Handkerchief",
                "icon": "🧣",
                "soundEffect": "coin",
                "funFact": "Victorian silk handkerchiefs had initials embroidered in the corners that the gang picked out with needles.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Secret Box Under the Floor",
            "paragraphs": [
              "Oliver awakened to the cheerful aroma of breakfast coffee, discovering Fagin alone in the garret.",
              "Deeming the orphan asleep, the old man extracted a hidden strongbox from beneath a concealed floorboard, handling its contents with avaricious reverence.",
              "Oliver observed through half-closed lids with breathless curiosity as Fagin admired glittering timepieces and gem-encrusted rings before hastily reburying his cache."
            ],
            "dialogueBites": [
              {
                "speaker": "Fagin",
                "text": "Ah! Sparklers, rings, and pretty watches! What a fine collection an industrious man can gather!",
                "avatarEmoji": "🧔",
                "side": "left"
              },
              {
                "speaker": "Oliver",
                "text": "Good morning, sir! May I help you make the breakfast?",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-9plus-4-p1",
              "question": "What did Fagin keep hidden in the secret box beneath the floorboards?",
              "options": [
                "Old schoolbooks and Latin dictionaries",
                "Stolen gold watches, diamond rings, and sparkling jewelry",
                "Seeds for planting a flower garden"
              ],
              "correctInsightIndex": 1,
              "insight": "Fagin was a receiver of stolen goods who trained orphaned children to steal for him.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "A Very Curious Game",
            "paragraphs": [
              "Following the arrival of the Dodger and Charley Bates with their morning plunder, an extraordinary exhibition of dexterity took place.",
              "Fagin draped his person with various accouterments and promenaded about the chamber, mimicking the absentminded stroll of an elderly London citizen.",
              "The two boys trailed him with feline stealth, extracting handkerchief, snuffbox, and spectacles without disturbing a single seam of his coat."
            ],
            "dialogueBites": [
              {
                "speaker": "Fagin",
                "text": "Did you feel anything, boys? Ha! Not a twitch! Now let young Oliver try the game!",
                "avatarEmoji": "🧔",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "You are so clever at making fun, sir! I would love to learn!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Innocence in the Shadows",
            "paragraphs": [
              "In his total moral innocence, Oliver regarded the proceeding as an ingenious parlor amusement designed to cultivate dexterity.",
              "He attempted the maneuver himself, successfully abstracting the silk handkerchief to Fagin's effusive approbation.",
              "Completely oblivious to the sinister deception beneath this pantomime, Oliver rejoiced in having found mentors who seemed as cheerful as they were affectionate."
            ],
            "dialogueBites": [
              {
                "speaker": "Fagin",
                "text": "You will be a great man, Oliver! You will make your fortune like the Dodger!",
                "avatarEmoji": "🧔",
                "side": "left"
              },
              {
                "speaker": "Charley Bates",
                "text": "Look at the greenhorn! He does it as neat as wax! Ha ha ha!",
                "avatarEmoji": "😂",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-9plus-4-p3",
              "question": "What did innocent Oliver believe Fagin's handkerchief game really was?",
              "options": [
                "A serious training academy for the royal military",
                "A cooking test to see who could bake bread faster",
                "A fun and cheerful parlor game to practice nimble fingers and make people laugh"
              ],
              "correctInsightIndex": 2,
              "insight": "Oliver's pure heart prevented him from recognizing the crime occurring right before his eyes.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Curiosity",
            "phonics": "kyoo-ree-OSS-ih-tee",
            "definition": "A strong desire to know or learn something.",
            "funExample": "Oliver watched the morning game with innocent curiosity.",
            "emoji": "🤔"
          },
          {
            "word": "Dexterity",
            "phonics": "deks-TAIR-ih-tee",
            "definition": "Skill and grace in physical movement, especially with hands.",
            "funExample": "The Dodger removed the silk cloth with incredible dexterity.",
            "emoji": "🖐️"
          },
          {
            "word": "Deception",
            "phonics": "dih-SEP-shun",
            "definition": "The act of misleading or deceiving someone.",
            "funExample": "Oliver did not suspect the clever deception behind Fagin game.",
            "emoji": "🎭"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-9plus-4",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 4!",
          "targetWord": "POCKET",
          "scrambleLetters": [
            "T",
            "E",
            "K",
            "C",
            "O",
            "P"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-9plus-4-comp",
            "question": "What was hidden inside the heavy box Fagin pulled from the floorboards?",
            "options": [
              "Gold watches, diamond rings, and bracelets",
              "Books and parchment paper",
              "Wooden spoons and silver bowls",
              "Old clothes and boots"
            ],
            "correctIndex": 0,
            "textEvidence": "The box was full of sparkling gold watches, diamond rings, and shiny bracelets.",
            "explanation": "From the text: 'The box was full of sparkling gold watches, diamond rings, and shiny bracelets.'",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-9plus-4-vocab",
            "question": "Find a word in the passage that means: \"A strong desire to know or learn something.\".",
            "options": [
              "Oliver",
              "Curiosity",
              "Observes",
              "Fagin"
            ],
            "correctIndex": 1,
            "explanation": "In this chapter, \'Curiosity\' means a strong desire to know or learn something.",
            "visualClueEmoji": "🤔",
            "points": 60
          }
        ]
      },
      {
        "id": "oliver_twist-9plus-5",
        "dayNumber": 5,
        "title": "The Bookstall & Kind Mr. Brownlow",
        "subtitle": "Confusion at the bookstall and rescue from the court",
        "estReadingMinutes": 15,
        "totalWordCount": 820,
        "summary": "Oliver accompanies the boys into the street, witnesses them steal a gentleman's handkerchief, runs in panic, and is rescued by the kindly victim, Mr. Brownlow.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-9plus-5",
            "title": "The Bookstall & Kind Mr. Brownlow",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "brownlow_library",
            "caption": "Mr. Brownlow gazes down kindly at feverish Oliver in his quiet, book-lined study!",
            "characterAvatars": [
              {
                "name": "Mr. Brownlow",
                "emoji": "👴",
                "speech": "Poor boy, there is something in his gentle face that touches my very soul!",
                "position": "right"
              },
              {
                "name": "Oliver",
                "emoji": "👦",
                "speech": "I did not take the handkerchief, sir, I promise on my life!",
                "position": "left"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot9",
                "x": 25,
                "y": 55,
                "label": "Clerkenwell Bookstall",
                "icon": "📚",
                "soundEffect": "magic",
                "funFact": "Mr. Brownlow was absorbed in reading an old book when his pocket was picked.",
                "action": "sparkle"
              },
              {
                "id": "ot10",
                "x": 75,
                "y": 40,
                "label": "Brownlow Fireplace Tea",
                "icon": "🫖",
                "soundEffect": "coin",
                "funFact": "Mrs. Bedwin, the kind housekeeper, brewed hot broth and tea for sick Oliver.",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Crime at the Bookstall",
            "paragraphs": [
              "Oliver made his initial expedition into the bustling city escorted by Jack Dawkins and Charley Bates.",
              "Near Clerkenwell Green, their attention settled upon a respectable elderly gentleman immersed in examining volumes at an open bookstall.",
              "In an instant, Oliver witnessed the mystery of the handkerchief game unmasked: the Dodger extracted the silk square from the gentleman's pocket and fled at top speed."
            ],
            "dialogueBites": [
              {
                "speaker": "Oliver",
                "text": "Oh! They are thieves! What have I done?!",
                "avatarEmoji": "😨",
                "side": "left"
              },
              {
                "speaker": "Dodger",
                "text": "Run, Charley! The old bloke is turning round!",
                "avatarEmoji": "🏃",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-9plus-5-p1",
              "question": "What did Oliver suddenly realize when the Dodger snatched the handkerchief?",
              "options": [
                "That the book was written in ancient hieroglyphics",
                "That the old gentleman was Oliver's long-lost uncle",
                "That the boys were pickpockets and Fagin was a master of thieves"
              ],
              "correctInsightIndex": 2,
              "insight": "Truth burst upon Oliver in a flash of terror and clarity.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Stop Thief! The Wild Chase",
            "paragraphs": [
              "Overwhelmed with panic, Oliver sprinted blindly down the thoroughfare in a desperate effort to escape association with the crime.",
              "Perceiving the running youth, the gentleman raised the alarm, inciting the furious cry of \"Stop thief!\" across the neighborhood.",
              "A chaotic tumult swept through the streets until a burly drayman intercepted the exhausted child, felling him with a vicious blow to the pavement."
            ],
            "dialogueBites": [
              {
                "speaker": "Crowd",
                "text": "Stop thief! Stop thief! Lay hold of him!",
                "avatarEmoji": "📢",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "I didn't do it! Please, I didn't take anything!",
                "avatarEmoji": "😭",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Magistrate and the Bookstall Keeper",
            "paragraphs": [
              "The prisoner was hauled before Mr. Fang, an irascible magistrate notorious for summary cruelty.",
              "As Fang pronounced a sentence of hard labor, the proprietor of the bookstall burst forward, testifying that two other youths had perpetrated the larceny.",
              "Overcome by fever and terror, Oliver lost consciousness. Moved by profound compassion and an uncanny recognition in the child's countenance, Mr. Brownlow had the invalid conveyed to his peaceful home."
            ],
            "dialogueBites": [
              {
                "speaker": "Bookseller",
                "text": "Stop! I saw the whole affair! This boy never touched the handkerchief!",
                "avatarEmoji": "📖",
                "side": "left"
              },
              {
                "speaker": "Mr. Brownlow",
                "text": "Poor child! He is burning with fever. Bring him to my carriage at once!",
                "avatarEmoji": "👴",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-9plus-5-p3",
              "question": "Who saved Oliver from being sent to prison by the harsh magistrate Mr. Fang?",
              "options": [
                "The honest bookstall keeper who witnessed the real thieves steal the handkerchief",
                "Fagin dressed in a judge's black robe",
                "Noah Claypole who apologized for everything"
              ],
              "correctInsightIndex": 0,
              "insight": "Honesty and evidence saved Oliver from terrible injustice.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Compassion",
            "phonics": "kum-PASH-un",
            "definition": "Sympathetic pity and concern for the misfortunes of others.",
            "funExample": "Mr. Brownlow looked upon the pale orphan with deep compassion.",
            "emoji": "💖"
          },
          {
            "word": "Tumult",
            "phonics": "TOO-mult",
            "definition": "A loud, confused noise, especially one caused by a large mass of people.",
            "funExample": "A great tumult arose as the crowd chased Oliver through the streets.",
            "emoji": "🏃"
          },
          {
            "word": "Benefactor",
            "phonics": "BEN-uh-fak-ter",
            "definition": "A generous person who gives help, money, or kindness to another.",
            "funExample": "Kind Mr. Brownlow became Oliver true protector and benefactor.",
            "emoji": "🤝"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-9plus-5",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 5!",
          "targetWord": "RESCUE",
          "scrambleLetters": [
            "E",
            "U",
            "C",
            "S",
            "E",
            "R"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-9plus-5-comp",
            "question": "Who shouted to the magistrate that Oliver did not steal the handkerchief?",
            "options": [
              "The bookstall keeper who saw it all",
              "The Artful Dodger",
              "A police officer",
              "Mr. Bumble"
            ],
            "correctIndex": 0,
            "textEvidence": "Just then, the bookstall keeper rushed in and shouted: Stop! I saw it all! It was another boy who stole the handkerchief!",
            "explanation": "From the text: The bookstall keeper cried, 'Stop! I saw it all! It was another boy who stole the handkerchief!'",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-9plus-5-vocab",
            "question": "Find a word in the passage that means: \"Sympathetic pity and concern for the misfortunes of others.\".",
            "options": [
              "Oliver",
              "Accompanies",
              "Boys",
              "Compassion"
            ],
            "correctIndex": 3,
            "explanation": "In this chapter, \'Compassion\' means sympathetic pity and concern for the misfortunes of others.",
            "visualClueEmoji": "💖",
            "points": 60
          }
        ]
      },
      {
        "id": "oliver_twist-9plus-6",
        "dayNumber": 6,
        "title": "The Portrait & The Five-Pound Note",
        "subtitle": "A sweet face on the wall and an ambush in the street",
        "estReadingMinutes": 15,
        "totalWordCount": 820,
        "summary": "Recovering in Mr. Brownlow's peaceful home, Oliver notices a mysterious portrait of a sweet lady. Sent on an errand with books and money, he is ambushed by Fagin's gang.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-9plus-6",
            "title": "The Portrait & The Five-Pound Note",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "portrait_room",
            "caption": "Oliver gazes up at the portrait of the beautiful lady while holding Mr. Brownlow's books!",
            "characterAvatars": [
              {
                "name": "Mrs. Bedwin",
                "emoji": "👵",
                "speech": "Look at the sweet boy! His eyes are the very spit of the lady in the painting!",
                "position": "left"
              },
              {
                "name": "Bill Sikes",
                "emoji": "🐕",
                "speech": "Come along, young viper! You won't squeak on us to your fancy friends!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot11",
                "x": 30,
                "y": 40,
                "label": "Lady Portrait Painting",
                "icon": "🖼️",
                "soundEffect": "magic",
                "funFact": "The lady in the portrait had the exact same gentle eyes and forehead as Oliver.",
                "action": "sparkle"
              },
              {
                "id": "ot12",
                "x": 75,
                "y": 60,
                "label": "Five Pound Banknote",
                "icon": "💷",
                "soundEffect": "coin",
                "funFact": "Five pounds in Victorian times was worth several months of an average worker wages.",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "A Haven of Peace and Kindness",
            "paragraphs": [
              "Convalescing in the immaculate tranquility of Mr. Brownlow's residence, Oliver experienced human kindness for the first time.",
              "His attention was repeatedly drawn to an oil portrait of a young woman possessed of singular grace and melancholic beauty.",
              "Both Mr. Brownlow and his housekeeper were arrested by the startling likeness between the painted countenance and the living child."
            ],
            "dialogueBites": [
              {
                "speaker": "Mrs. Bedwin",
                "text": "Bless his sweet heart! Look, sir, he has her very eyes and smile!",
                "avatarEmoji": "👵",
                "side": "left"
              },
              {
                "speaker": "Oliver",
                "text": "I feel as though she were smiling right at me, ma'am.",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-9plus-6-p1",
              "question": "What startled Mrs. Bedwin when she looked from the painted portrait to Oliver?",
              "options": [
                "The painting had the exact same eyes, forehead, and sweet expression as Oliver",
                "The lady in the painting was wearing an apron just like Mrs. Bedwin",
                "The picture fell off the wall and cracked the tea tray"
              ],
              "correctInsightIndex": 0,
              "insight": "Dickens dropped subtle clues about Oliver's true family heritage.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Test of Trust",
            "paragraphs": [
              "Outfitted in respectable attire, Oliver appeared the picture of refined innocence.",
              "Mr. Grimwig, a crusty cynic who perpetually wagered his own head upon his pessimistic predictions, challenged Brownlow's confidence in the foundling.",
              "Eager to demonstrate Oliver's faithful character, Mr. Brownlow dispatched the boy with five pounds and several parcels of books to settle an account with the Clerkenwell vendor."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Grimwig",
                "text": "He will run away with your books and your money! If he comes back, I will eat my head!",
                "avatarEmoji": "🎩",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "I will be back in twenty minutes, sir! You may count upon me!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Ambush in the Dark Alley",
            "paragraphs": [
              "Proceeding through a secluded passage, Oliver was abruptly ambushed by Nancy, who staged a sensational scene of fraternal reclamation before curious onlookers.",
              "Ere Oliver could articulate a protest or appeal for rescue, the brutal burglar Bill Sikes materialized with his vicious white terrier.",
              "Coerced by threats of murder, Oliver was stripped of his new apparel, his books, and the five-pound note, delivered once more into Fagin's clutching hands."
            ],
            "dialogueBites": [
              {
                "speaker": "Nancy",
                "text": "Oh, you naughty boy! Mother has been crying her eyes out for you! Come along home!",
                "avatarEmoji": "👩",
                "side": "left"
              },
              {
                "speaker": "Oliver",
                "text": "Help! Help! I do not know these people! The books belong to Mr. Brownlow!",
                "avatarEmoji": "😭",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-9plus-6-p3",
              "question": "Who ambushed Oliver in the street and dragged him back to Fagin's gang?",
              "options": [
                "Mr. Bumble who chased him in a horse-drawn coach",
                "Nancy and the fierce burglar Bill Sikes with his dog Bull's-eye",
                "The workhouse master with his copper ladle"
              ],
              "correctInsightIndex": 1,
              "insight": "Even when captured, Oliver thought only of not letting down his kind benefactor.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Likeness",
            "phonics": "LIKE-nis",
            "definition": "The fact or quality of being alike; a portrait or resemblance.",
            "funExample": "The painted portrait bore a striking likeness to young Oliver.",
            "emoji": "🖼️"
          },
          {
            "word": "Betrayal",
            "phonics": "bih-TRAY-ul",
            "definition": "The breaking or violation of trust or confidence.",
            "funExample": "Mr. Grimwig wrongly predicted Oliver would commit a betrayal.",
            "emoji": "💔"
          },
          {
            "word": "Faithful",
            "phonics": "FAYTH-ful",
            "definition": "Steadfast in affection, allegiance, or duty.",
            "funExample": "Oliver was determined to be faithful to his kind protector.",
            "emoji": "🌟"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-9plus-6",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 6!",
          "targetWord": "PORTRAIT",
          "scrambleLetters": [
            "T",
            "I",
            "A",
            "R",
            "T",
            "R",
            "O",
            "P"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-9plus-6-comp",
            "question": "What did Mr. Brownlow give Oliver to return to the bookstall?",
            "options": [
              "Valuable books and a five-pound note",
              "A gold pocket watch",
              "A silver tea set",
              "A box of leather gloves"
            ],
            "correctIndex": 0,
            "textEvidence": "Mr. Brownlow gave the boy some valuable books to return and a crisp five-pound note to pay the bookseller.",
            "explanation": "From the text: Mr. Brownlow gave Oliver valuable books and a five-pound note to pay the bookseller.",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-9plus-6-vocab",
            "question": "Find a word in the passage that means: \"The fact or quality of being alike; a portrait or resemblance.\".",
            "options": [
              "Recovering",
              "Likeness",
              "Brownlow",
              "Peaceful"
            ],
            "correctIndex": 1,
            "explanation": "In this chapter, \'Likeness\' means the fact or quality of being alike; a portrait or resemblance.",
            "visualClueEmoji": "🖼️",
            "points": 60
          }
        ]
      },
      {
        "id": "oliver_twist-9plus-7",
        "dayNumber": 7,
        "title": "Nancy's Brave Midnight Journey",
        "subtitle": "The secret meeting on the dark stone steps of London Bridge",
        "estReadingMinutes": 15,
        "totalWordCount": 820,
        "summary": "Deeply moved by Oliver's innocence, Nancy risks her life to meet Mr. Brownlow and Rose Maylie on London Bridge at midnight, revealing the plot against the boy.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-9plus-7",
            "title": "Nancy's Brave Midnight Journey",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "london_bridge_night",
            "caption": "Nancy speaks in hushed tones to Rose and Mr. Brownlow on the misty stone steps of London Bridge!",
            "characterAvatars": [
              {
                "name": "Nancy",
                "emoji": "👩",
                "speech": "Oliver is innocent as an angel! A villain named Monks wants him destroyed for his inheritance!",
                "position": "left"
              },
              {
                "name": "Rose Maylie",
                "emoji": "🌹",
                "speech": "Brave Nancy, let us help you escape this dangerous life!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot13",
                "x": 30,
                "y": 55,
                "label": "London Bridge Stone Steps",
                "icon": "🌉",
                "soundEffect": "bounce",
                "funFact": "The stone steps led down to the dark Thames water where boats were moored in fog.",
                "action": "bounce"
              },
              {
                "id": "ot14",
                "x": 70,
                "y": 40,
                "label": "Midnight Big Ben Bell",
                "icon": "🕰️",
                "soundEffect": "magic",
                "funFact": "The heavy bell of St. Paul's Cathedral tolled midnight across the river.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "A Heart Awakened to Goodness",
            "paragraphs": [
              "Confined again within Fagin's clutches, Oliver's primary anguish was the certainty that his benefactor would despise his memory as a perfidious thief.",
              "When Sikes threatened the lad with his ferocious mastiff, Nancy interposed her own body, defying the tyrant with passionate resolve.",
              "Oliver's uncorrupted virtue had awakened in Nancy's degraded soul a fierce determination to shield the child from destruction, whatever the personal cost."
            ],
            "dialogueBites": [
              {
                "speaker": "Nancy",
                "text": "I won't stand by and see him beaten! He is a sweet child, better than all of us!",
                "avatarEmoji": "👩",
                "side": "left"
              },
              {
                "speaker": "Fagin",
                "text": "Quiet, girl! You will ruin us all with your foolish tears!",
                "avatarEmoji": "🧔",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-9plus-7-p1",
              "question": "Why did Nancy courageously defend Oliver from Bill Sikes and Fagin?",
              "options": [
                "Because Fagin promised to give her a thousand gold coins",
                "Because Oliver's pure innocence awakened the goodness and compassion in her heart",
                "Because she wanted to adopt Oliver and become a schoolteacher"
              ],
              "correctInsightIndex": 1,
              "insight": "Charles Dickens believed that even in the darkest circumstances, the human soul could choose goodness.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Mysterious Villain Monks",
            "paragraphs": [
              "A malignant confederate named Monks held secret conclaves with Fagin, exhibiting an obsessive animosity toward the orphan.",
              "Overhearing their nocturnal council, Nancy learned that Monks had tracked down and cast into the river a golden locket proving Oliver's legitimate birth.",
              "His scheme was to lure Oliver into felony so that criminal conviction would forfeit the boy's legal claim to his father's estate."
            ],
            "dialogueBites": [
              {
                "speaker": "Monks",
                "text": "Make him a thief! Put him in the dock! He must never know who his father was!",
                "avatarEmoji": "👤",
                "side": "left"
              },
              {
                "speaker": "Nancy",
                "text": "I must find Mr. Brownlow... I cannot let them destroy this boy.",
                "avatarEmoji": "👩",
                "side": "right"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Midnight Meeting on the Steps",
            "paragraphs": [
              "Beneath the foggy arches of London Bridge, as the bell of St. Paul's struck the midnight hour, Nancy met Mr. Brownlow and Rose Maylie.",
              "Descending the slippery stone staircase toward the water's edge, she disclosed the full particulars of Monks' conspiracy against Oliver's inheritance.",
              "Though Rose implored her to accept sanctuary and an honorable life, Nancy declined with tragic sacrifice, choosing to return to her world."
            ],
            "dialogueBites": [
              {
                "speaker": "Rose Maylie",
                "text": "Dear Nancy, come with us tonight! We can give you a safe, happy home far from here!",
                "avatarEmoji": "🌹",
                "side": "right"
              },
              {
                "speaker": "Nancy",
                "text": "No, miss... I cannot leave him. But save Oliver! He is pure and good!",
                "avatarEmoji": "👩",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-9plus-7-p3",
              "question": "Where did Nancy meet Mr. Brownlow and Rose Maylie to reveal the plot against Oliver?",
              "options": [
                "Inside the royal dining room at Buckingham Palace",
                "At the parish workhouse gates in Kent",
                "On the dark stone steps of London Bridge at the stroke of midnight"
              ],
              "correctInsightIndex": 2,
              "insight": "Nancy's courage became the turning point that saved Oliver's life and legacy.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Sacrifice",
            "phonics": "SAK-rih-fise",
            "definition": "An act of giving up something valuable for the sake of something more important.",
            "funExample": "Nancy made a heroic sacrifice to protect innocent Oliver.",
            "emoji": "🕊️"
          },
          {
            "word": "Archway",
            "phonics": "ARTCH-way",
            "definition": "A curved structure forming a passage or entrance.",
            "funExample": "They stood under the dark stone archway beneath the bridge.",
            "emoji": "🏛️"
          },
          {
            "word": "Midnight",
            "phonics": "MID-nite",
            "definition": "Twelve o'clock at night; the middle of the night.",
            "funExample": "The clocks struck midnight across the misty river Thames.",
            "emoji": "🌙"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-9plus-7",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 7!",
          "targetWord": "BRIDGE",
          "scrambleLetters": [
            "E",
            "G",
            "D",
            "I",
            "R",
            "B"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-9plus-7-comp",
            "question": "Where did Nancy secretly meet Mr. Brownlow at midnight?",
            "options": [
              "On London Bridge under a stone arch",
              "Inside Tellson's Bank",
              "In a churchyard in Dover",
              "At a tea shop in the village"
            ],
            "correctIndex": 0,
            "textEvidence": "At midnight, Nancy slipped away to London Bridge... Waiting under the stone archway were kind Mr. Brownlow and a sweet, beautiful lady named Rose Maylie.",
            "explanation": "From the text: Nancy met Mr. Brownlow and Rose Maylie on London Bridge at midnight.",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-9plus-7-vocab",
            "question": "Find a word in the passage that means: \"An act of giving up something valuable for the sake of something more important.\".",
            "options": [
              "Sacrifice",
              "Deeply",
              "Moved",
              "Oliver"
            ],
            "correctIndex": 0,
            "explanation": "In this chapter, \'Sacrifice\' means an act of giving up something valuable for the sake of something more important.",
            "visualClueEmoji": "🕊️",
            "points": 60
          }
        ]
      },
      {
        "id": "oliver_twist-9plus-8",
        "dayNumber": 8,
        "title": "The Secret Heritage & A Peaceful Home",
        "subtitle": "The truth revealed, adoption, and a garden of love",
        "estReadingMinutes": 15,
        "totalWordCount": 820,
        "summary": "Monks is unmasked and forced to confess. Oliver discovers his true name and inheritance, and is legally adopted by kind Mr. Brownlow to live in joy.",
        "visualScenes": [
          {
            "id": "scene-oliver_twist-9plus-8",
            "title": "The Secret Heritage & A Peaceful Home",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "peaceful_parsonage",
            "caption": "Oliver runs across the sunny garden lawn into the loving arms of Mr. Brownlow and Rose!",
            "characterAvatars": [
              {
                "name": "Oliver",
                "emoji": "👦",
                "speech": "I have a real father and a true home at last!",
                "position": "left"
              },
              {
                "name": "Mr. Brownlow",
                "emoji": "👴",
                "speech": "You are my own son now, Oliver, and nothing shall ever separate us!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ot15",
                "x": 30,
                "y": 55,
                "label": "Country Cottage Garden",
                "icon": "🏡",
                "soundEffect": "magic",
                "funFact": "Oliver moved to a peaceful country village with Rose, Harry, and Mr. Brownlow.",
                "action": "sparkle"
              },
              {
                "id": "ot16",
                "x": 70,
                "y": 45,
                "label": "Inheritance Legal Will",
                "icon": "📜",
                "soundEffect": "coin",
                "funFact": "Oliver received a generous inheritance left to him by his true father, Edwin Leeford.",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Monks Unmasked",
            "paragraphs": [
              "Confronted by Mr. Brownlow with incontrovertible evidence, the craven Monks capitulated and delivered a complete deposition.",
              "Monks was revealed to be Edward Leeford, the elder son of Brownlow's dearest companion; Oliver was his half-brother, born to Agnes Fleming.",
              "The father had bequeathed a substantial estate to the unborn Oliver, which Monks had sought to defraud by thrusting the child into a life of crime."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Brownlow",
                "text": "You knew your brother was alive, and you sought to destroy him for gold!",
                "avatarEmoji": "👴",
                "side": "left"
              },
              {
                "speaker": "Monks",
                "text": "I confess everything... Let me take my share of the money and leave England forever!",
                "avatarEmoji": "👤",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-9plus-8-p1",
              "question": "Who was the mysterious villain Monks revealed to be?",
              "options": [
                "The King's royal tax collector from Scotland",
                "The original founder of the parish workhouse",
                "Oliver's older half-brother, who wanted to steal the family inheritance"
              ],
              "correctInsightIndex": 2,
              "insight": "Truth prevailed, exposing the greed that had caused Oliver so much suffering.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Justice and Farewell to the Past",
            "paragraphs": [
              "Retribution dismantled the criminal syndicate, liberating the innocent and consigning the guilty to the justice of the courts.",
              "With noble magnanimity, Oliver consented to divide the contested patrimony with Monks, enabling his brother to seek rehabilitation abroad.",
              "Returning to his natal parish, Oliver shed tears of sorrow over the humble resting place of his beloved comrade little Dick."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Brownlow",
                "text": "You are generous to a fault, Oliver. You give gold to one who plotted your doom.",
                "avatarEmoji": "👴",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "He is my father's son, sir. I wish him only peace and repentance.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "A Son, A Home, A Happy Life",
            "paragraphs": [
              "Mr. Brownlow formalized the legal adoption of Oliver as his legitimate heir and beloved son, cementing an enduring bond of mutual devotion.",
              "They established their sanctuary within a pastoral hamlet adjacent to Rose and Harry Maylie's rural parish, surrounded by orchards and woodland paths.",
              "Through every succeeding year, Oliver's gentle spirit blossomed in the sunshine of domestic affection, a living testament that pure innocence shall forever triumph over the darkest adversity."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Brownlow",
                "text": "You are my dear son now, Oliver. This home and everything in it belongs to you.",
                "avatarEmoji": "👴",
                "side": "right"
              },
              {
                "speaker": "Oliver",
                "text": "My heart is so full of happiness! God bless everyone who showed me kindness!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-oliver_twist-9plus-8-p3",
              "question": "How does Oliver Twist's story conclude in joy and peace?",
              "options": [
                "Mr. Brownlow legally adopts Oliver as his son, and they live happily in a peaceful country cottage",
                "Oliver returns to the workhouse to become the headmaster",
                "Oliver becomes a sailor and travels around the world forever"
              ],
              "correctInsightIndex": 0,
              "insight": "Love, kindness, and honest courage conquered all adversity.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Inheritance",
            "phonics": "in-HAIR-ih-tuns",
            "definition": "Property, money, or a title received upon someone's death.",
            "funExample": "Oliver divided his rightful inheritance generously with Monks.",
            "emoji": "📜"
          },
          {
            "word": "Sanctuary",
            "phonics": "SANK-choo-air-ee",
            "definition": "A place of safety, refuge, or quiet protection.",
            "funExample": "The sunny country cottage was a true sanctuary for Oliver.",
            "emoji": "🏡"
          },
          {
            "word": "Gratitude",
            "phonics": "GRAT-ih-tood",
            "definition": "The feeling of being thankful and appreciative.",
            "funExample": "Oliver heart was filled with boundless love and gratitude.",
            "emoji": "🙏"
          }
        ],
        "microChallenge": {
          "id": "mc-oliver_twist-9plus-8",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 8!",
          "targetWord": "HERITAGE",
          "scrambleLetters": [
            "E",
            "G",
            "A",
            "T",
            "I",
            "R",
            "E",
            "H"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-oliver_twist-9plus-8-comp",
            "question": "What did kind Mr. Brownlow do for Oliver at the end of the story?",
            "options": [
              "He legally adopted Oliver as his own beloved son",
              "He sent Oliver to sea on a ship",
              "He made Oliver an apprentice blacksmith",
              "He sent Oliver back to the workhouse"
            ],
            "correctIndex": 0,
            "textEvidence": "Mr. Brownlow legally adopted Oliver as his own beloved son! They moved to a beautiful country cottage...",
            "explanation": "From the text: 'Mr. Brownlow legally adopted Oliver as his own beloved son!'",
            "visualClueEmoji": "📖",
            "points": 60
          },
          {
            "id": "q-oliver_twist-9plus-8-vocab",
            "question": "Find a word in the passage that means: \"Property, money, or a title received upon someone's death.\".",
            "options": [
              "Monks",
              "Unmasked",
              "Inheritance",
              "Forced"
            ],
            "correctIndex": 2,
            "explanation": "In this chapter, \'Inheritance\' means property, money, or a title received upon someone's death.",
            "visualClueEmoji": "📜",
            "points": 60
          }
        ]
      }
    ]
  }
};
