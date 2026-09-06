import { Book } from "../types";

export const EXPECTATIONS_BOOK: Book = {
  "id": "great_expectations",
  "title": "Great Expectations",
  "author": "Charles Dickens",
  "badgeTitle": "True Gentleman & Loyal Friend",
  "coverColor": "from-slate-800 via-indigo-950 to-amber-950",
  "accentColor": "#d97706",
  "borderColor": "border-amber-500",
  "themeIcon": "⏳",
  "descriptionByAge": {
    "5-6": "Join young Pip on the foggy Kent marshes! Meet an escaped convict, visit mysterious Miss Havisham in her dusty mansion, travel to bustling London, and discover that true greatness comes from an honest, loving heart.",
    "7-8": "Charles Dickens' beloved classic! Follow orphan Pip as a mysterious fortune takes him from Joe Gargery's humble blacksmith forge to high Victorian society, learning that loyalty and kind love matter far more than gold.",
    "9+": "Charles Dickens' enduring masterpiece of ambition, loyalty, and redemption. Pip journeys from the eerie Kent marshes and cobwebbed Satis House to Victorian London, untangling the secrets of his mysterious benefactor."
  },
  "chaptersByAge": {
    "5-6": [
      {
        "id": "great_expectations-56-1",
        "dayNumber": 1,
        "title": "The Foggy Marshes & The Escaped Prisoner",
        "subtitle": "A shivering meeting in the cold Kent churchyard",
        "estReadingMinutes": 15,
        "totalWordCount": 520,
        "summary": "Young orphan Pip visits his parents' gravestones on the misty Kent marshes, where a desperate escaped convict in leg irons terrifies him into promising a blacksmith's file and food.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-56-1",
            "title": "The Foggy Marshes & The Escaped Prisoner",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "marsh_mist",
            "caption": "Grey fog rolls over the lonely churchyard as an escaped prisoner emerges from the marsh weeds!",
            "characterAvatars": [
              {
                "name": "Pip",
                "emoji": "👦",
                "speech": "Please don't hurt me, sir! I will bring you food!",
                "position": "left"
              },
              {
                "name": "Magwitch",
                "emoji": "⛓️",
                "speech": "Bring me a blacksmith's file and a pork pie by dawn!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge1",
                "x": 30,
                "y": 55,
                "label": "Rusty Leg Irons",
                "icon": "⛓️",
                "soundEffect": "bounce",
                "funFact": "The convict had escaped from the prison hulks floating on the river Thames!",
                "action": "bounce"
              },
              {
                "id": "ge2",
                "x": 70,
                "y": 40,
                "label": "Misty Gravestones",
                "icon": "🪦",
                "soundEffect": "magic",
                "funFact": "Pip traced his parents' names in stone because he never saw their portraits.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Among the Cold Tombstones",
            "paragraphs": [
              "My first name was Philip, but my infant tongue could only say Pip. That is how everybody in our village came to call me Pip.",
              "Our lonely village lay near the damp marshes, where river water met the windy sea. On a cold Christmas Eve, I walked into the dark churchyard alone.",
              "Suddenly, a fierce man in ragged grey clothes leapt from behind the nettles! His legs were locked in heavy iron chains."
            ],
            "dialogueBites": [
              {
                "speaker": "Magwitch",
                "text": "Hold your noise or I'll cut your throat this instant!",
                "avatarEmoji": "⛓️",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "Oh, please do not hurt me, sir! I live at the forge!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-56-1-p1",
              "question": "Who startled young Pip among the damp churchyard tombstones?",
              "options": [
                "A cheerful village baker delivering warm loaves of bread",
                "An escaped convict in ragged grey clothes and heavy leg irons",
                "A royal naval officer carrying a brass telescope"
              ],
              "correctInsightIndex": 1,
              "insight": "A frightening encounter on the lonely marshes began Pip's life journey!",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "A Secret Promise",
            "paragraphs": [
              "The starving man held me upside down to shake the crust of bread from my pocket.",
              "He told me that if I did not bring him a blacksmith's file to cut his chains and some food by morning, a fierce companion would catch me.",
              "I was shivering with fright. I promised to sneak into Joe's pantry and bring whatever food I could find."
            ],
            "dialogueBites": [
              {
                "speaker": "Magwitch",
                "text": "You bring me that file and that wittles tomorrow dawn, or your heart will be roasted!",
                "avatarEmoji": "⛓️",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "I swear on my honour, sir, I shall return at sunrise!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Theft in the Larder",
            "paragraphs": [
              "Back at home, my fierce sister Mrs. Joe was angry that I was late, but kind blacksmith Joe protected me with warm gravy.",
              "At dawn, I crept down to the cold pantry on tiptoe. My heart thumped as I took some bread, cheese, and a magnificent pork pie.",
              "I ran out into the thick white mist with Joe's file, heading straight back to the damp battery where the shivering man waited."
            ],
            "dialogueBites": [
              {
                "speaker": "Joe",
                "text": "Have some more gravy, Pip! It will warm your little bones on a frosty night.",
                "avatarEmoji": "👨‍🏭",
                "side": "left"
              },
              {
                "speaker": "Pip",
                "text": "Thank you, dear Joe. You are always so good to me.",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-56-1-p3",
              "question": "What food and tool did Pip secretly take from the pantry and forge?",
              "options": [
                "A bowl of porridge, dried oats, and a brass candlestick",
                "Three fresh red apples and a tin box of matches",
                "Bread, cheese, a savoury pork pie, and Joe's blacksmith file"
              ],
              "correctInsightIndex": 2,
              "insight": "Compassion mixed with fear led young Pip to risk severe punishment for a stranger.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Terrified",
            "phonics": "TAIR-uh-fide",
            "definition": "Overcome with extreme, trembling fear.",
            "funExample": "Pip was terrified by the rough man hiding among the marsh reeds.",
            "emoji": "😨"
          },
          {
            "word": "Shivering",
            "phonics": "SHIV-er-ing",
            "definition": "Shaking involuntarily from bitter cold or anxiety.",
            "funExample": "The freezing wind left the boy shivering on the muddy path.",
            "emoji": "🥶"
          },
          {
            "word": "Churchyard",
            "phonics": "CHURCH-yard",
            "definition": "An enclosed grassy ground around a church with gravestones.",
            "funExample": "Fog settled low across the quiet country churchyard.",
            "emoji": "⛪"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-56-1",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 1!",
          "targetWord": "MARSH",
          "scrambleLetters": [
            "H",
            "S",
            "R",
            "A",
            "M"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-56-1-comp",
            "question": "What two critical items did the escaped convict command Pip to bring to him on the marsh?",
            "options": [
              "A pair of leather boots and a warm woollen overcoat",
              "A blacksmith's file to cut his chains and some savoury food",
              "A silver watch and a bottle of writing ink",
              "A wooden rowboat and a brass compass"
            ],
            "correctIndex": 1,
            "explanation": "Magwitch desperately needed a blacksmith's file to cut off his iron fetters and food to stay alive.",
            "visualClueEmoji": "⛓️",
            "points": 60
          },
          {
            "id": "q-great_expectations-56-1-vocab",
            "question": "Find a word in the passage that means: \"Overcome with extreme, trembling fear.\".",
            "options": [
              "Young",
              "Orphan",
              "Terrified",
              "Visits"
            ],
            "correctIndex": 2,
            "explanation": "In this chapter, \"Terrified\" means overcome with extreme, trembling fear.",
            "visualClueEmoji": "😨",
            "points": 60
          }
        ]
      },
      {
        "id": "great_expectations-56-2",
        "dayNumber": 2,
        "title": "Joe Gargery's Forge & Honest Work",
        "subtitle": "The clinking hammer, glowing coals, and a kind blacksmith",
        "estReadingMinutes": 15,
        "totalWordCount": 520,
        "summary": "Pip grows up as an apprentice to gentle blacksmith Joe Gargery, learning the honest trade of the hammer and anvil amidst glowing sparks and village fellowship.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-56-2",
            "title": "Joe Gargery's Forge & Honest Work",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "blacksmith_forge",
            "caption": "Golden sparks shower through the dark forge as Joe Gargery hammers red-hot iron on the anvil!",
            "characterAvatars": [
              {
                "name": "Joe",
                "emoji": "👨‍🏭",
                "speech": "There's one thing you may be sure of, Pip: you and me are best friends!",
                "position": "left"
              },
              {
                "name": "Pip",
                "emoji": "👦",
                "speech": "I love working the bellows and watching the coals glow!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge3",
                "x": 45,
                "y": 60,
                "label": "Glowing Anvil",
                "icon": "🔨",
                "soundEffect": "bounce",
                "funFact": "Joe's heavy iron anvil rang out like a church bell across the village!",
                "action": "bounce"
              },
              {
                "id": "ge4",
                "x": 80,
                "y": 35,
                "label": "Forge Bellows",
                "icon": "🔥",
                "soundEffect": "magic",
                "funFact": "Pumping the leather bellows pumped oxygen to make the coal fire roar!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Song of the Anvil",
            "paragraphs": [
              "Joe Gargery was a big, strong man with flaxen curls and mild blue eyes. He was the kindest person in the whole wide world.",
              "Every day, the forge fire crackled brightly with orange embers. Joe sang jolly blacksmith songs while he hammered glowing iron horseshoes.",
              "I loved pulling the long wooden handle of the leather bellows to blow gusts of wind into the coal fire."
            ],
            "dialogueBites": [
              {
                "speaker": "Joe",
                "text": "Old Clem was a noble smith, Pip, and we shall hammer out honest iron together!",
                "avatarEmoji": "👨‍🏭",
                "side": "left"
              },
              {
                "speaker": "Pip",
                "text": "I want to be your loyal apprentice forever, Joe!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-56-2-p1",
              "question": "What was Joe Gargery's honest trade in the village?",
              "options": [
                "He was a merchant sailor navigating trading vessels to France",
                "He was a schoolmaster who taught Latin and geometry",
                "He was a gentle, hardworking blacksmith who hammered iron at the forge"
              ],
              "correctInsightIndex": 2,
              "insight": "Joe's honest craft and humble kindness made him a true moral anchor.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Evenings by the Hearth",
            "paragraphs": [
              "After a long day of hammering metal, Joe and I sat by the warm fireplace in our little kitchen.",
              "I tried to teach Joe the letters of the alphabet on a small slate. Joe knew the letter 'J' and the letter 'O' because they spelled his name!",
              "Whenever my sister Mrs. Joe complained, Joe would slip another lump of butter onto my toast to make me smile."
            ],
            "dialogueBites": [
              {
                "speaker": "Joe",
                "text": "When you read so uncommon well, Pip, you are an absolute scholar!",
                "avatarEmoji": "👨‍🏭",
                "side": "left"
              },
              {
                "speaker": "Pip",
                "text": "One day I will teach you how to write every single letter, Joe!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Summons to Satis House",
            "paragraphs": [
              "One snowy evening, Uncle Pumblechook arrived with astonishing news from the market town.",
              "The wealthy and mysterious lady, Miss Havisham, wanted a young boy to come play at her grand mansion.",
              "Joe cleaned my boots and smoothed my collar, proud that his little Pip had been chosen for such an important visit."
            ],
            "dialogueBites": [
              {
                "speaker": "Mrs. Joe",
                "text": "This is your chance to become a gentleman, Pip! Mind your manners!",
                "avatarEmoji": "👩",
                "side": "left"
              },
              {
                "speaker": "Joe",
                "text": "Be true to yourself, Pip, and remember your old companion Joe.",
                "avatarEmoji": "👨‍🏭",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-56-2-p3",
              "question": "Why was Pip invited to Miss Havisham's grand house?",
              "options": [
                "Because the reclusive wealthy lady wanted a young boy to visit and play",
                "Because she needed someone to chop firewood in her courtyard",
                "Because she wanted to buy Joe's iron anvil for her garden"
              ],
              "correctInsightIndex": 0,
              "insight": "An invitation to Satis House set Pip on a path that changed his whole life.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Blacksmith",
            "phonics": "BLAK-smith",
            "definition": "A craftsman who heats iron in a forge and hammers it into tools.",
            "funExample": "Joe was a noble blacksmith with strong hands and a gentle heart.",
            "emoji": "👨‍🏭"
          },
          {
            "word": "Anvil",
            "phonics": "AN-vil",
            "definition": "A heavy, solid iron block with a flat top on which hot metal is hammered.",
            "funExample": "The hammer struck the red horseshoe upon the sturdy anvil.",
            "emoji": "🔨"
          },
          {
            "word": "Contentment",
            "phonics": "kun-TENT-munt",
            "definition": "A peaceful state of calm happiness and satisfaction with one's life.",
            "funExample": "Working beside Joe filled the rustic cottage with quiet contentment.",
            "emoji": "😊"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-56-2",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 2!",
          "targetWord": "FORGE",
          "scrambleLetters": [
            "E",
            "G",
            "R",
            "O",
            "F"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-56-2-comp",
            "question": "Which two letters did kind blacksmith Joe proudly identify on Pip's writing slate?",
            "options": [
              "The letters 'A' and 'B' because they were at the front of the book",
              "The letters 'P' and 'I' because they spelled Pip",
              "The letters 'J' and 'O' because they spelled his name",
              "The letters 'X' and 'Z' because they looked like crossed swords"
            ],
            "correctIndex": 2,
            "explanation": "Joe proudly pointed out 'J' and 'O', saying they made up his own cheerful name.",
            "visualClueEmoji": "📝",
            "points": 60
          },
          {
            "id": "q-great_expectations-56-2-vocab",
            "question": "Find a word in the passage that means: \"A craftsman who heats iron in a forge and hammers it into tools.\".",
            "options": [
              "Blacksmith",
              "Grows",
              "Apprentice",
              "Gentle"
            ],
            "correctIndex": 0,
            "explanation": "In this chapter, \"Blacksmith\" means a craftsman who heats iron in a forge and hammers it into tools.",
            "visualClueEmoji": "👨‍🏭",
            "points": 60
          }
        ]
      },
      {
        "id": "great_expectations-56-3",
        "dayNumber": 3,
        "title": "Satis House & The Stopped Clocks",
        "subtitle": "A dusty mansion where all the clocks stopped at twenty to nine",
        "estReadingMinutes": 15,
        "totalWordCount": 520,
        "summary": "Pip enters gloomy Satis House and meets elderly Miss Havisham, who sits frozen in time in her yellowed bridal dress amidst cobwebs and stopped clocks.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-56-3",
            "title": "Satis House & The Stopped Clocks",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "satis_house",
            "caption": "Miss Havisham sits motionless by candlelight in her faded wedding gown surrounded by cobwebs!",
            "characterAvatars": [
              {
                "name": "Miss Havisham",
                "emoji": "👰",
                "speech": "Do you know what I have in here? Broken hearts!",
                "position": "right"
              },
              {
                "name": "Pip",
                "emoji": "👦",
                "speech": "Everything in this room is withered and yellowed with dust.",
                "position": "left"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge5",
                "x": 40,
                "y": 45,
                "label": "Stopped Watch",
                "icon": "🕰️",
                "soundEffect": "bounce",
                "funFact": "Every clock in Satis House was stopped at precisely twenty minutes to nine!",
                "action": "bounce"
              },
              {
                "id": "ge6",
                "x": 75,
                "y": 60,
                "label": "Bridal Veil",
                "icon": "👰",
                "soundEffect": "magic",
                "funFact": "Miss Havisham never took off her wedding veil after being jilted on her wedding day.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Behind the Iron Bars",
            "paragraphs": [
              "Satis House was a massive mansion made of old dark brick, but all the courtyard windows were barred with heavy iron.",
              "A beautiful young girl with dark hair opened the courtyard gate. Her name was Estella, and she looked down at me with proud eyes.",
              "She carried a lantern down dark, cold passages where no daylight ever entered, leading me up a grand wooden staircase."
            ],
            "dialogueBites": [
              {
                "speaker": "Estella",
                "text": "Don't loiter, boy! Miss Havisham is waiting for you in her dressing room.",
                "avatarEmoji": "👧",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "Yes, miss. I am coming right behind you.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-56-3-p1",
              "question": "What barred the windows and courtyard of Satis House?",
              "options": [
                "Heavy iron bars and walled-up bricks that shut out daylight",
                "Bright green climbing roses and ivy trellises",
                "White painted wooden shutters decorated with brass bells"
              ],
              "correctInsightIndex": 0,
              "insight": "The dark mansion shut out the warmth and vitality of the outside world.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Lady in the Wedding Gown",
            "paragraphs": [
              "Inside the candlelit room sat the strangest lady I had ever seen. She was dressed from head to foot in rich satin, lace, and silk.",
              "Everything she wore had once been pure white, but now it was aged and yellowed like withered autumn leaves.",
              "A bridal veil covered her silver hair, and jewels sparkled on her skinny fingers. She looked like a ghostly wax statue."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Havisham",
                "text": "Look at me, boy! Does it frighten you to see a woman who has not seen the sun since you were born?",
                "avatarEmoji": "👰",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "It is very strange and sad, ma'am, but I am not afraid.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Twenty Minutes to Nine",
            "paragraphs": [
              "I looked at the mantelpiece and noticed that the golden clock was not ticking. Its hands were frozen at twenty minutes to nine.",
              "Miss Havisham's own watch, hanging beside her jeweled mirror, also pointed to the exact same hour.",
              "Time had stopped inside Satis House on the terrible morning when her bridegroom deserted her and never came back."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Havisham",
                "text": "Call Estella! Let me watch you two play cards together!",
                "avatarEmoji": "👰",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "I shall call her at once, ma'am.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-56-3-p3",
              "question": "At what exact minute were all the clocks in Satis House permanently stopped?",
              "options": [
                "Exactly twelve o'clock midnight",
                "Twenty minutes to nine",
                "Half past three in the afternoon"
              ],
              "correctInsightIndex": 1,
              "insight": "Miss Havisham trapped herself in the very hour of her bitter heartbreak.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Cobweb",
            "phonics": "KOB-web",
            "definition": "A dusty, tangled web spun by a spider, often found in old houses.",
            "funExample": "Heavy grey cobwebs draped across the ornate dressing mirror.",
            "emoji": "🕸️"
          },
          {
            "word": "Gloomy",
            "phonics": "GLOO-mee",
            "definition": "Dark, shadowy, and causing feelings of sadness and mystery.",
            "funExample": "The gloomy hallways of Satis House were lit only by wax candles.",
            "emoji": "🕯️"
          },
          {
            "word": "Solitary",
            "phonics": "SOL-uh-tair-ee",
            "definition": "Existing alone; lonely and separated from other people.",
            "funExample": "She lived a solitary life locked away behind iron gates.",
            "emoji": "🚪"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-56-3",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 3!",
          "targetWord": "CANDLE",
          "scrambleLetters": [
            "E",
            "L",
            "D",
            "N",
            "A",
            "C"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-56-3-comp",
            "question": "What had happened to Miss Havisham's bridal gown after years of living in the dark?",
            "options": [
              "It had faded and yellowed like withered autumn leaves",
              "It had turned bright crimson red like a ruby",
              "It was bleached sparkling clean every morning",
              "It was dyed dark purple by the house servants"
            ],
            "correctIndex": 0,
            "explanation": "The text states that her silk dress had aged, faded, and yellowed over the decades.",
            "visualClueEmoji": "👰",
            "points": 60
          },
          {
            "id": "q-great_expectations-56-3-vocab",
            "question": "Find a word in the passage that means: \"A dusty, tangled web spun by a spider, often found in old houses.\".",
            "options": [
              "Enters",
              "Gloomy",
              "Satis",
              "Cobweb"
            ],
            "correctIndex": 3,
            "explanation": "In this chapter, \"Cobweb\" means a dusty, tangled web spun by a spider, often found in old houses.",
            "visualClueEmoji": "🕸️",
            "points": 60
          }
        ]
      },
      {
        "id": "great_expectations-56-4",
        "dayNumber": 4,
        "title": "Estella & The Game of Cards",
        "subtitle": "Beggar My Neighbour and the pangs of wounded pride",
        "estReadingMinutes": 15,
        "totalWordCount": 520,
        "summary": "Pip plays cards with the haughty Estella, who mocks his coarse hands and thick boots, sparking in Pip a painful longing to become an educated gentleman.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-56-4",
            "title": "Estella & The Game of Cards",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "satis_house",
            "caption": "Estella deals playing cards with cold disdain while Pip looks self-consciously at his rough boots!",
            "characterAvatars": [
              {
                "name": "Estella",
                "emoji": "👧",
                "speech": "He calls the knaves, Jacks, this boy! And what coarse hands he has!",
                "position": "right"
              },
              {
                "name": "Pip",
                "emoji": "👦",
                "speech": "Her words stung my heart, and I wished I were not so common.",
                "position": "left"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge7",
                "x": 45,
                "y": 55,
                "label": "Playing Cards",
                "icon": "🃏",
                "soundEffect": "bounce",
                "funFact": "Beggar My Neighbour was a simple Victorian card game won by capturing picture cards!",
                "action": "bounce"
              },
              {
                "id": "ge8",
                "x": 75,
                "y": 40,
                "label": "Rough Boots",
                "icon": "👢",
                "soundEffect": "magic",
                "funFact": "Pip's thick working boots were made for forge mud, not polished mansion floors!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Beggar My Neighbour",
            "paragraphs": [
              "Estella brought a pack of playing cards and sat down opposite me at a small round table.",
              "Miss Havisham watched us from her high-backed velvet armchair, whispering eagerly: 'Break their hearts, Estella! Break their hearts!'",
              "We played a game called Beggar My Neighbour. I was so nervous that I kept dropping my cards on the dusty floor."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Havisham",
                "text": "Well, boy! What do you think of her? Is she pretty?",
                "avatarEmoji": "👰",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "I think she is very pretty, ma'am, and very proud, and very insulting.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-56-4-p1",
              "question": "What card game did Pip and Estella play under Miss Havisham's watchful gaze?",
              "options": [
                "Go Fish on the carpet",
                "Beggar My Neighbour",
                "Snap with picture cards"
              ],
              "correctInsightIndex": 1,
              "insight": "A simple card game revealed the deep social divide between the two children.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Coarse Hands and Thick Boots",
            "paragraphs": [
              "Whenever I laid down a card, Estella pointed out all my clumsy village habits.",
              "'He calls the knaves Jacks, this common boy!' she exclaimed with a scornful laugh. 'And look at his coarse hands! Look at his thick boots!'",
              "I looked down at my rough hands and my heavy blacksmith boots. I had never felt ashamed of them before, but now my cheeks burned red."
            ],
            "dialogueBites": [
              {
                "speaker": "Estella",
                "text": "You may put down that greasy bread, boy! You are far too coarse to sit near me.",
                "avatarEmoji": "👧",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "I did not choose my hands, miss, but I will wash them cleaner next time.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Tears in the Courtyard",
            "paragraphs": [
              "When the game ended, Estella led me down to the cobbled courtyard and shoved a plate of bread and meat at me as if I were a dog.",
              "As soon as she turned her back, I hid behind a stone wall and cried bitter tears of shame and heartache.",
              "I walked home through the mist, determined that somehow, someday, I would learn how to read, write, and become a true gentleman."
            ],
            "dialogueBites": [
              {
                "speaker": "Estella",
                "text": "Why don't you cry again, boy? You cried like a baby in the yard!",
                "avatarEmoji": "👧",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "I shall not give you the pleasure of seeing me cry ever again!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-56-4-p3",
              "question": "What did Estella mock about Pip that made him feel deeply ashamed?",
              "options": [
                "His bright red hair and tall height",
                "His ability to whistle church hymns",
                "His coarse blacksmith hands, thick village boots, and calling knaves Jacks"
              ],
              "correctInsightIndex": 2,
              "insight": "Wounded pride ignited Pip's desire to become an educated gentleman.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Haughty",
            "phonics": "HAW-tee",
            "definition": "Arrogantly proud and looking down upon others as inferior.",
            "funExample": "Estella tossed her dark hair with a haughty little laugh.",
            "emoji": "👑"
          },
          {
            "word": "Disdainful",
            "phonics": "dis-DAYN-ful",
            "definition": "Showing a feeling of contempt or lack of respect for someone.",
            "funExample": "Her disdainful glance made Pip feel clumsy and embarrassed.",
            "emoji": "😒"
          },
          {
            "word": "Knave",
            "phonics": "NAYV",
            "definition": "An old-fashioned card name for the Jack in a deck of playing cards.",
            "funExample": "He called the knaves Jacks, much to her amusement.",
            "emoji": "🃏"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-56-4",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 4!",
          "targetWord": "ESTELLA",
          "scrambleLetters": [
            "A",
            "L",
            "L",
            "E",
            "T",
            "S",
            "E"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-56-4-comp",
            "question": "Why did Pip hide behind the stone wall in the courtyard and weep bitter tears?",
            "options": [
              "Because he lost his favourite marble in the courtyard drain",
              "Because Miss Havisham refused to let him taste the wedding cake",
              "Because he was frightened of the guard dogs in the brewery",
              "Because Estella's mocking words about his coarse hands and boots hurt his pride deeply"
            ],
            "correctIndex": 3,
            "explanation": "Estella's cruel ridicule of his humble background deeply wounded Pip's self-esteem.",
            "visualClueEmoji": "😢",
            "points": 60
          },
          {
            "id": "q-great_expectations-56-4-vocab",
            "question": "Find a word in the passage that means: \"Arrogantly proud and looking down upon others as inferior.\".",
            "options": [
              "Plays",
              "Haughty",
              "Cards",
              "Estella"
            ],
            "correctIndex": 1,
            "explanation": "In this chapter, \"Haughty\" means arrogantly proud and looking down upon others as inferior.",
            "visualClueEmoji": "👑",
            "points": 60
          }
        ]
      },
      {
        "id": "great_expectations-56-5",
        "dayNumber": 5,
        "title": "Great Expectations & Mr. Jaggers",
        "subtitle": "A mysterious fortune and a departure from the forge",
        "estReadingMinutes": 15,
        "totalWordCount": 520,
        "summary": "The imposing London lawyer Mr. Jaggers arrives at the village inn to announce that an anonymous benefactor has bestowed upon Pip a handsome fortune and great expectations.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-56-5",
            "title": "Great Expectations & Mr. Jaggers",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "marsh_mist",
            "caption": "Mr. Jaggers waves his heavy pocket watch as he announces Pip's sudden fortune to Joe and the villagers!",
            "characterAvatars": [
              {
                "name": "Mr. Jaggers",
                "emoji": "⚖️",
                "speech": "Pip will be brought up as a gentleman of great expectations!",
                "position": "right"
              },
              {
                "name": "Joe",
                "emoji": "👨‍🏭",
                "speech": "Pip will always be welcome at my forge, fortune or no fortune!",
                "position": "left"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge9",
                "x": 40,
                "y": 50,
                "label": "Gold Pocket Watch",
                "icon": "🕰️",
                "soundEffect": "bounce",
                "funFact": "Mr. Jaggers constantly polished his spectacles and checked his heavy gold watch!",
                "action": "bounce"
              },
              {
                "id": "ge10",
                "x": 75,
                "y": 35,
                "label": "Scented Soap",
                "icon": "🧼",
                "soundEffect": "magic",
                "funFact": "Jaggers washed his hands with carbolic soap after every legal client to wash away guilt!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Stranger at the Three Jolly Bargemen",
            "paragraphs": [
              "One Saturday evening, Joe and I were sitting at the village inn with our neighbours, listening to the crackling fire.",
              "A tall, stern gentleman with bushy black eyebrows and a dark suit stepped into the room. It was Mr. Jaggers, the famous London lawyer.",
              "He asked to speak with Joe Gargery and his young apprentice Pip alone in our private parlour."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Jaggers",
                "text": "I have an extraordinary communication to make on behalf of a secret patron!",
                "avatarEmoji": "⚖️",
                "side": "right"
              },
              {
                "speaker": "Joe",
                "text": "Speak on, sir! Pip and I have no secrets between us.",
                "avatarEmoji": "👨‍🏭",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-56-5-p1",
              "question": "Who arrived at the village inn with extraordinary news about Pip?",
              "options": [
                "The postman carrying a letter from the King",
                "A wandering clockmaker looking for broken gears",
                "Mr. Jaggers, the formidable London lawyer with bushy eyebrows"
              ],
              "correctInsightIndex": 2,
              "insight": "A high-powered attorney brought news that altered Pip's entire destiny.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Conditions of the Fortune",
            "paragraphs": [
              "Mr. Jaggers cleared his throat and looked right at me. 'Pip has great expectations,' he declared in a booming voice.",
              "'A secret benefactor has bequeathed you a magnificent fortune! You must leave the forge at once and travel to London to become a gentleman.'",
              "There were only two strict conditions: I must always keep the name of Pip, and I must never ask who the secret benefactor was."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Jaggers",
                "text": "You must always bear the name of Pip, and you must never seek to discover your patron.",
                "avatarEmoji": "⚖️",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "I promise faithfully, sir! When do I depart for London?",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Farewell to the Forge",
            "paragraphs": [
              "Mr. Jaggers offered Joe a generous sum of money to compensate for losing his apprentice, but noble Joe shook his head.",
              "'Pip is welcome to go and become a gentleman,' said Joe with tears in his eyes, 'but Joe Gargery will never take money for loving him.'",
              "The next morning, dressed in fine new city clothes, I climbed into the London coach, leaving gentle Joe waving by the forge."
            ],
            "dialogueBites": [
              {
                "speaker": "Joe",
                "text": "God bless you, dear Pip! May you prosper in London, and never forget old Joe.",
                "avatarEmoji": "👨‍🏭",
                "side": "left"
              },
              {
                "speaker": "Pip",
                "text": "Goodbye, Joe! I will write to you often!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-56-5-p3",
              "question": "How did Joe Gargery respond when offered money for releasing Pip's apprenticeship?",
              "options": [
                "He proudly refused every penny, declaring that love cannot be bought with gold",
                "He happily pocketed the money to buy new forge tools",
                "He asked for double the amount before saying farewell"
              ],
              "correctInsightIndex": 0,
              "insight": "Joe's selfless love showed that true goodness cannot be purchased with money.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Benefactor",
            "phonics": "BEN-uh-fak-tur",
            "definition": "A generous person who gives financial help or gifts to support someone.",
            "funExample": "Pip's mysterious benefactor paid for all his gentleman's education.",
            "emoji": "🎁"
          },
          {
            "word": "Fortune",
            "phonics": "FOR-chun",
            "definition": "A large sum of money or riches that brings wealth and security.",
            "funExample": "An unexpected fortune lifted Pip out of his humble blacksmith life.",
            "emoji": "💰"
          },
          {
            "word": "Guardian",
            "phonics": "GAR-dee-un",
            "definition": "An appointed adult responsible for the welfare and property of a youth.",
            "funExample": "Mr. Jaggers was named as Pip's legal guardian in London.",
            "emoji": "⚖️"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-56-5",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 5!",
          "targetWord": "FORTUNE",
          "scrambleLetters": [
            "E",
            "N",
            "U",
            "T",
            "R",
            "O",
            "F"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-56-5-comp",
            "question": "What two strict conditions were placed upon Pip receiving his fortune?",
            "options": [
              "He must live in Satis House and marry Estella within three years",
              "He must wear black coats every day and learn how to fence",
              "He must always keep the name Pip and never ask who his secret benefactor was",
              "He must give half his yearly allowance to the village churchyard"
            ],
            "correctIndex": 2,
            "explanation": "Mr. Jaggers explicitly instructed that Pip must keep his name and never seek the identity of his patron.",
            "visualClueEmoji": "⚖️",
            "points": 60
          },
          {
            "id": "q-great_expectations-56-5-vocab",
            "question": "Find a word in the passage that means: \"A generous person who gives financial help or gifts to support someone.\".",
            "options": [
              "Imposing",
              "London",
              "Lawyer",
              "Benefactor"
            ],
            "correctIndex": 3,
            "explanation": "In this chapter, \"Benefactor\" means a generous person who gives financial help or gifts to support someone.",
            "visualClueEmoji": "🎁",
            "points": 60
          }
        ]
      },
      {
        "id": "great_expectations-56-6",
        "dayNumber": 6,
        "title": "London Streets & Herbert Pocket",
        "subtitle": "Learning gentlemanly manners and discovering true friendship",
        "estReadingMinutes": 15,
        "totalWordCount": 520,
        "summary": "In the bustling streets of London, Pip rooms with warmhearted Herbert Pocket, who teaches him city etiquette and becomes his dearest, most loyal companion.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-56-6",
            "title": "London Streets & Herbert Pocket",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "london_river",
            "caption": "Pip and Herbert Pocket walk along the lively banks of the River Thames in Victorian London!",
            "characterAvatars": [
              {
                "name": "Herbert",
                "emoji": "🧑",
                "speech": "We shall call you Handel, Pip, in honour of the harmonious blacksmith!",
                "position": "right"
              },
              {
                "name": "Pip",
                "emoji": "🎩",
                "speech": "London is so noisy and vast, but your friendship makes me feel at home!",
                "position": "left"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge11",
                "x": 35,
                "y": 55,
                "label": "Thames Barges",
                "icon": "⛵",
                "soundEffect": "bounce",
                "funFact": "Wooden sailing barges brought coal and vegetables up the river Thames right into London!",
                "action": "bounce"
              },
              {
                "id": "ge12",
                "x": 70,
                "y": 40,
                "label": "Teacup Etiquette",
                "icon": "☕",
                "soundEffect": "magic",
                "funFact": "Herbert gently showed Pip never to put his dinner knife into his mouth!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Barnard's Inn and A Familiar Face",
            "paragraphs": [
              "London was not the glittering paradise I had dreamed of. The air was thick with dark chimney smoke, and streets were packed with shouting crowds.",
              "I arrived at my new lodgings in Barnard's Inn and knocked on the door. To my amazement, the young man who opened it was someone I knew!",
              "It was the pale young gentleman I had once wrestled with years ago in the overgrown garden of Satis House. His name was Herbert Pocket."
            ],
            "dialogueBites": [
              {
                "speaker": "Herbert",
                "text": "Welcome to London, Pip! Have some fresh strawberries while we unpack your trunks!",
                "avatarEmoji": "🧑",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "You are the pale gentleman from Satis House! What a wonderful coincidence!",
                "avatarEmoji": "🎩",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-56-6-p1",
              "question": "Who greeted Pip at Barnard's Inn as his new London roommate?",
              "options": [
                "Herbert Pocket, the pale young gentleman from Satis House",
                "Uncle Pumblechook with a sack of grain",
                "Mr. Jaggers' chief clerk Mr. Wemmick"
              ],
              "correctInsightIndex": 0,
              "insight": "A boyhood opponent blossomed into Pip's truest and most generous friend.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Lessons in Table Manners",
            "paragraphs": [
              "Herbert was poor, but he had the most elegant and polite manners in the entire city.",
              "During dinner, he gently taught me how to use a silver fork and never to put my table knife into my mouth.",
              "Because of Joe's forge, he gave me the affectionate nickname 'Handel', after the famous composer who wrote 'The Harmonious Blacksmith'."
            ],
            "dialogueBites": [
              {
                "speaker": "Herbert",
                "text": "Always rest your knife on the plate, Handel, and let your fork do the honours!",
                "avatarEmoji": "🧑",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "Thank you, Herbert. You teach me with such gentle kindness.",
                "avatarEmoji": "🎩",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Joe's Awkward Visit",
            "paragraphs": [
              "One morning, dear Joe Gargery came to London to bring me a message from Miss Havisham.",
              "Joe felt clumsy in his stiff Sunday suit, and he kept dropping his top hat onto the carpet in embarrassment.",
              "Instead of welcoming my dear friend with open arms, I felt snobbish and ashamed of him. After Joe quietly left, I felt terribly guilty in my heart."
            ],
            "dialogueBites": [
              {
                "speaker": "Joe",
                "text": "You and me is not two figures to be together in London, Pip. My place is at the forge.",
                "avatarEmoji": "👨‍🏭",
                "side": "left"
              },
              {
                "speaker": "Pip",
                "text": "Oh Joe, forgive me... My pride blinded me to the best friend I ever had.",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-56-6-p3",
              "question": "Why did Pip feel guilty and ashamed after Joe Gargery visited him in London?",
              "options": [
                "Because Joe forgot to bring Pip's favourite warm scarf",
                "Because Pip acted proud and snobbish instead of greeting Joe with warm love",
                "Because Herbert refused to allow Joe to sit at the table"
              ],
              "correctInsightIndex": 1,
              "insight": "Pip realized that newfound wealth had made him foolishly ashamed of true love.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Bustling",
            "phonics": "BUS-ling",
            "definition": "Full of lively, energetic, and crowded activity.",
            "funExample": "The bustling streets of London were packed with horse carriages and vendors.",
            "emoji": "🏙️"
          },
          {
            "word": "Etiquette",
            "phonics": "ET-i-ket",
            "definition": "The customary code of polite and refined behaviour in society.",
            "funExample": "Herbert kindly instructed Pip in gentlemanly table etiquette.",
            "emoji": "🎩"
          },
          {
            "word": "Lodgings",
            "phonics": "LOJ-ingz",
            "definition": "Rented rooms or living quarters where someone stays temporarily.",
            "funExample": "The two young friends shared cosy lodgings at Barnard's Inn.",
            "emoji": "🛋️"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-56-6",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 6!",
          "targetWord": "LONDON",
          "scrambleLetters": [
            "N",
            "O",
            "D",
            "N",
            "O",
            "L"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-56-6-comp",
            "question": "What affectionate musical nickname did Herbert Pocket give Pip in honour of his forge background?",
            "options": [
              "Handel, after the composer of 'The Harmonious Blacksmith'",
              "Mozart, because Pip played the parlour violin",
              "Beethoven, after the stormy thunder music",
              "Chopin, because of Pip's delicate handwriting"
            ],
            "correctIndex": 0,
            "explanation": "Herbert nicknamed Pip 'Handel' because Handel composed 'The Harmonious Blacksmith'.",
            "visualClueEmoji": "🎵",
            "points": 60
          },
          {
            "id": "q-great_expectations-56-6-vocab",
            "question": "Find a word in the passage that means: \"Full of lively, energetic, and crowded activity.\".",
            "options": [
              "Streets",
              "Bustling",
              "London",
              "Rooms"
            ],
            "correctIndex": 1,
            "explanation": "In this chapter, \"Bustling\" means full of lively, energetic, and crowded activity.",
            "visualClueEmoji": "🏙️",
            "points": 60
          }
        ]
      },
      {
        "id": "great_expectations-56-7",
        "dayNumber": 7,
        "title": "The Secret Benefactor Revealed",
        "subtitle": "A stormy midnight, heavy footsteps, and a shocking revelation",
        "estReadingMinutes": 15,
        "totalWordCount": 520,
        "summary": "On a wild, stormy night in London, an aged sailor climbs the stairs to Pip's rooms: it is Magwitch, the escaped convict, revealing that he—not Miss Havisham—is Pip's real benefactor.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-56-7",
            "title": "The Secret Benefactor Revealed",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "marsh_mist",
            "caption": "Rain lashes against the window as the weather-beaten convict Magwitch reveals his secret to Pip!",
            "characterAvatars": [
              {
                "name": "Magwitch",
                "emoji": "👴",
                "speech": "Yes, Pip, dear boy! It’s me what made a gentleman out of you!",
                "position": "right"
              },
              {
                "name": "Pip",
                "emoji": "🎩",
                "speech": "You? All my fortune came from an escaped convict?",
                "position": "left"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge13",
                "x": 40,
                "y": 55,
                "label": "Weathered Hands",
                "icon": "🤝",
                "soundEffect": "bounce",
                "funFact": "Magwitch worked twenty hard years sheep-farming in Australia to send his savings to Pip!",
                "action": "bounce"
              },
              {
                "id": "ge14",
                "x": 75,
                "y": 40,
                "label": "Stormy Window",
                "icon": "🌧️",
                "soundEffect": "magic",
                "funFact": "High winds in London tore roofs and blew out street lamps on that fateful night.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "A Knock in the Midnight Gale",
            "paragraphs": [
              "It was a wild, stormy November night in London. Rain lashed violently against my high windows, and the wind blew out the street lamps below.",
              "Herbert was away on business in France, and I sat alone by my dying fire reading a book.",
              "Suddenly, I heard heavy, dragging footsteps slowly ascending the dark wooden stairs outside my door. A gentle knock sounded."
            ],
            "dialogueBites": [
              {
                "speaker": "Magwitch",
                "text": "Pip, Mr. Pip... Don't you know me, dear boy?",
                "avatarEmoji": "👴",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "Who are you, sir? Why have you come here at this late hour?",
                "avatarEmoji": "🎩",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-56-7-p1",
              "question": "Who appeared at Pip's chambers during the violent midnight storm?",
              "options": [
                "Miss Havisham wrapped in a silk travelling cloak",
                "Magwitch, the escaped convict Pip helped on the marshes as a child",
                "Uncle Pumblechook seeking shelter from the rain"
              ],
              "correctInsightIndex": 1,
              "insight": "The past returned in the middle of a tempest to reshape Pip's destiny.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Truth Laid Bare",
            "paragraphs": [
              "The stranger threw off his heavy coat and grabbed both of my hands with tears rolling down his scarred cheeks.",
              "'Look at me, Pip!' he cried. 'I am the hunted prisoner you fed on the cold marsh with a pork pie and Joe's file!'",
              "He pulled out a heavy purse of gold coins and laid it on the table. He told me he had worked twenty years under scorching desert suns in Australia just to make me a rich gentleman."
            ],
            "dialogueBites": [
              {
                "speaker": "Magwitch",
                "text": "I swore that lonely night on the marshes that the little boy who saved me would be made into a grand gentleman!",
                "avatarEmoji": "👴",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "My fortune... my expectations... they came from you all along!",
                "avatarEmoji": "🎩",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "A Life in Peril",
            "paragraphs": [
              "My shock turned to sheer terror when Magwitch explained that returning to England from Australia was punishable by death.",
              "If the police discovered him in London, he would be thrown back into prison and never see freedom again.",
              "Looking at the rough old man who had loved me so devotedly, my disgust melted into deep pity and loyalty. I vowed to protect him with my life."
            ],
            "dialogueBites": [
              {
                "speaker": "Magwitch",
                "text": "I've seen my boy, and I can die happy now, whatever happens to me.",
                "avatarEmoji": "👴",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "You must stay hidden in our rooms. Herbert and I will smuggle you safely out of England!",
                "avatarEmoji": "🎩",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-56-7-p3",
              "question": "Why was Magwitch in mortal danger by returning to London?",
              "options": [
                "Because he owed money to the London taxi coachmen",
                "Because he had forgotten to renew his travelling passport",
                "Because escaped transportees returning to England faced the death penalty under the law"
              ],
              "correctInsightIndex": 2,
              "insight": "Love led Magwitch to risk everything just to gaze upon his gentleman.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Tempestuous",
            "phonics": "tem-PES-choo-us",
            "definition": "Characterized by violent, stormy, and wild wind and rain.",
            "funExample": "The tempestuous night rattled the wooden shutters of the apartment.",
            "emoji": "🌪️"
          },
          {
            "word": "Gratitude",
            "phonics": "GRAT-i-tood",
            "definition": "A strong feeling of thankfulness and appreciation for kindness received.",
            "funExample": "Magwitch felt lifelong gratitude to the little boy who fed him on the marshes.",
            "emoji": "🙏"
          },
          {
            "word": "Convict",
            "phonics": "KON-vikt",
            "definition": "A person found guilty of a crime and sentenced to serve prison time.",
            "funExample": "The former convict risked his life by returning to England.",
            "emoji": "⛓️"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-56-7",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 7!",
          "targetWord": "MAGWITCH",
          "scrambleLetters": [
            "H",
            "C",
            "T",
            "I",
            "W",
            "G",
            "A",
            "M"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-56-7-comp",
            "question": "How did Magwitch earn the fortune that paid for Pip's gentlemanly education?",
            "options": [
              "By discovering a pirate treasure chest in the English Channel",
              "By winning horse races at the royal fair in Epsom",
              "By inheriting an old silver mine in the Scottish Highlands",
              "By working hard for twenty years as a successful sheep-farmer in Australia"
            ],
            "correctIndex": 3,
            "explanation": "Magwitch endured decades of harsh labor in Australia, sending all his earnings to Mr. Jaggers for Pip.",
            "visualClueEmoji": "🐑",
            "points": 60
          },
          {
            "id": "q-great_expectations-56-7-vocab",
            "question": "Find a word in the passage that means: \"Characterized by violent, stormy, and wild wind and rain.\".",
            "options": [
              "Tempestuous",
              "Wild",
              "Stormy",
              "Night"
            ],
            "correctIndex": 0,
            "explanation": "In this chapter, \"Tempestuous\" means characterized by violent, stormy, and wild wind and rain.",
            "visualClueEmoji": "🌪️",
            "points": 60
          }
        ]
      },
      {
        "id": "great_expectations-56-8",
        "dayNumber": 8,
        "title": "Loyalty, Forgiveness & True Nobility",
        "subtitle": "A river escape, a peaceful farewell, and the forge of true love",
        "estReadingMinutes": 15,
        "totalWordCount": 520,
        "summary": "Pip attempts to rescue Magwitch by rowing down the Thames. Though captured, Magwitch dies peacefully knowing Pip loves him, and Pip returns home to the true nobility of Joe and Biddy.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-56-8",
            "title": "Loyalty, Forgiveness & True Nobility",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "london_river",
            "caption": "Pip holds Magwitch's hand tenderly as sunset gilds the tranquil waters of the River Thames!",
            "characterAvatars": [
              {
                "name": "Magwitch",
                "emoji": "👴",
                "speech": "God bless you, dear boy! You've never left my side!",
                "position": "left"
              },
              {
                "name": "Pip",
                "emoji": "🎩",
                "speech": "I will never leave you, my dear friend. You are at peace now.",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge15",
                "x": 45,
                "y": 60,
                "label": "Rowboat on the River",
                "icon": "🚣",
                "soundEffect": "bounce",
                "funFact": "Pip and Herbert rowed miles every day to train for their daring river escape!",
                "action": "bounce"
              },
              {
                "id": "ge16",
                "x": 75,
                "y": 35,
                "label": "Golden Sunset",
                "icon": "🌅",
                "soundEffect": "magic",
                "funFact": "The sunset over the marshes reminded Pip of the quiet forge where his journey began.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Race on the River Thames",
            "paragraphs": [
              "Herbert and I hid Magwitch in a quiet riverside cottage while we practiced rowing our small wooden boat every day.",
              "When the day arrived, we rowed with all our might down the wide river Thames, hoping to board a steamer ship bound for Hamburg.",
              "Just as the great steamship came into view, a police galley darted out from the shadows! In the struggle on the churning water, Magwitch was injured and arrested."
            ],
            "dialogueBites": [
              {
                "speaker": "Magwitch",
                "text": "Don't weep for me, dear boy. I am happier here with you than I ever was on the ranches.",
                "avatarEmoji": "👴",
                "side": "left"
              },
              {
                "speaker": "Pip",
                "text": "I will never forsake you, Magwitch, as long as I draw breath.",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-56-8-p1",
              "question": "How did Pip and Herbert attempt to help Magwitch escape to Europe?",
              "options": [
                "By disguising him as a postman on a mail coach to Dover",
                "By hiding him in a flour barrel inside a bakery wagon",
                "By rowing a small wooden boat down the River Thames to meet a Hamburg steamer"
              ],
              "correctInsightIndex": 2,
              "insight": "Pip risked everything to save the man who had sacrificed so much for him.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "A Peaceful Passing",
            "paragraphs": [
              "Magwitch was carried to the prison hospital. Every single day, I sat beside his bedside, holding his bruised, rough hand.",
              "I told him the secret he had always longed to know: that his lost daughter Estella was alive, beautiful, and loved.",
              "With a serene smile on his face, the old man pressed my hand to his heart and passed away in peaceful slumber."
            ],
            "dialogueBites": [
              {
                "speaker": "Pip",
                "text": "Dear Magwitch, your lost child is living. She is a beautiful lady, and I love her.",
                "avatarEmoji": "🎩",
                "side": "right"
              },
              {
                "speaker": "Magwitch",
                "text": "God bless you... my faithful, darling boy...",
                "avatarEmoji": "👴",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Return to the Anvil",
            "paragraphs": [
              "I fell terribly ill with fever, but when I opened my eyes, dear Joe Gargery was sitting by my bedside, nursing me back to health.",
              "He paid off all my debts and took me back to the forge, where the crackling coals smelled sweeter than any palace in London.",
              "I learned that true greatness does not come from money or fancy clothes, but from an honest, humble, and loving heart."
            ],
            "dialogueBites": [
              {
                "speaker": "Joe",
                "text": "Pip, old chap, you’re well again! And we are ever the best of friends!",
                "avatarEmoji": "👨‍🏭",
                "side": "left"
              },
              {
                "speaker": "Pip",
                "text": "Dear Joe, forgive me for ever straying from your loving hearth.",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-56-8-p3",
              "question": "Who nursed Pip through his fever and paid off all his debts in London?",
              "options": [
                "Dear Joe Gargery, the gentle blacksmith",
                "Mr. Jaggers from his office",
                "Uncle Pumblechook from the corn chandler shop"
              ],
              "correctInsightIndex": 0,
              "insight": "Joe's selfless love showed Pip what true gentlemanly nobility really means.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Devotion",
            "phonics": "dih-VOH-shun",
            "definition": "Deep, steadfast loyalty, dedication, and affectionate love.",
            "funExample": "Pip stayed beside the sick old man with unwavering devotion.",
            "emoji": "💖"
          },
          {
            "word": "Reconciliation",
            "phonics": "rek-un-sil-ee-AY-shun",
            "definition": "The restoration of friendly relations and harmony after conflict or distance.",
            "funExample": "Pip wept with joy at his tearful reconciliation with kind blacksmith Joe.",
            "emoji": "🤝"
          },
          {
            "word": "Noble",
            "phonics": "NOH-bul",
            "definition": "Having high moral qualities like courage, generosity, and honour.",
            "funExample": "Joe was a truly noble man whose worth came from his loving heart.",
            "emoji": "👑"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-56-8",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 8!",
          "targetWord": "NOBILITY",
          "scrambleLetters": [
            "Y",
            "T",
            "I",
            "L",
            "I",
            "B",
            "O",
            "N"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-56-8-comp",
            "question": "What profound moral lesson did Pip finally learn after his journey of great expectations?",
            "options": [
              "It is always best to stay away from rivers on foggy mornings",
              "True greatness and nobility come from an honest, loving heart, not money or fancy clothes",
              "Only people who own big mansions in London can be happy",
              "A blacksmith should never learn how to read or write"
            ],
            "correctIndex": 1,
            "explanation": "Pip realized that Joe Gargery's humble, loyal love was far more noble than superficial wealth.",
            "visualClueEmoji": "💖",
            "points": 60
          },
          {
            "id": "q-great_expectations-56-8-vocab",
            "question": "Find a word in the passage that means: \"Deep, steadfast loyalty, dedication, and affectionate love.\".",
            "options": [
              "Attempts",
              "Rescue",
              "Devotion",
              "Magwitch"
            ],
            "correctIndex": 2,
            "explanation": "In this chapter, \"Devotion\" means deep, steadfast loyalty, dedication, and affectionate love.",
            "visualClueEmoji": "💖",
            "points": 60
          }
        ]
      }
    ],
    "7-8": [
      {
        "id": "great_expectations-78-1",
        "dayNumber": 1,
        "title": "The Foggy Marshes & The Escaped Prisoner",
        "subtitle": "A shivering meeting in the cold Kent churchyard",
        "estReadingMinutes": 15,
        "totalWordCount": 680,
        "summary": "Young orphan Pip visits his parents' gravestones on the misty Kent marshes, where a desperate escaped convict in leg irons terrifies him into promising a blacksmith's file and food.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-78-1",
            "title": "The Foggy Marshes & The Escaped Prisoner",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "marsh_mist",
            "caption": "Grey fog rolls over the lonely churchyard as an escaped prisoner emerges from the marsh weeds!",
            "characterAvatars": [
              {
                "name": "Pip",
                "emoji": "👦",
                "speech": "Please don't hurt me, sir! I will bring you food!",
                "position": "left"
              },
              {
                "name": "Magwitch",
                "emoji": "⛓️",
                "speech": "Bring me a blacksmith's file and a pork pie by dawn!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge1",
                "x": 30,
                "y": 55,
                "label": "Rusty Leg Irons",
                "icon": "⛓️",
                "soundEffect": "bounce",
                "funFact": "The convict had escaped from the prison hulks floating on the river Thames!",
                "action": "bounce"
              },
              {
                "id": "ge2",
                "x": 70,
                "y": 40,
                "label": "Misty Gravestones",
                "icon": "🪦",
                "soundEffect": "magic",
                "funFact": "Pip traced his parents' names in stone because he never saw their portraits.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Among the Cold Tombstones",
            "paragraphs": [
              "My father's family name being Pirrip, and my christian name Philip, my infant tongue could make of both names nothing longer than Pip.",
              "The marshes were a dark flat wilderness intersected with dikes and mounds. I sat reading the inscriptions on the mossy churchyard tombstones as twilight fell.",
              "A terrifying figure in coarse grey cloth, with a great iron chain clanking on his leg, sprang from the tall weeds with a fierce growl."
            ],
            "dialogueBites": [
              {
                "speaker": "Magwitch",
                "text": "Hold your noise or I'll cut your throat this instant!",
                "avatarEmoji": "⛓️",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "Oh, please do not hurt me, sir! I live at the forge!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-78-1-p1",
              "question": "Who startled young Pip among the damp churchyard tombstones?",
              "options": [
                "A cheerful village baker delivering warm loaves of bread",
                "An escaped convict in ragged grey clothes and heavy leg irons",
                "A royal naval officer carrying a brass telescope"
              ],
              "correctInsightIndex": 1,
              "insight": "A frightening encounter on the lonely marshes began Pip's life journey!",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "A Secret Promise",
            "paragraphs": [
              "The ravenous man devoured the small dry crust he found in my coat pocket with desperate greed.",
              "He demanded that I bring him an iron file from Joe's forge and a pie of savoury meat early at sunrise, threatening terrible retribution if I spoke a single word.",
              "Trembling like a reed in the river breeze, I swore a solemn oath to return to the battery on the marsh with the promised provisions."
            ],
            "dialogueBites": [
              {
                "speaker": "Magwitch",
                "text": "You bring me that file and that wittles tomorrow dawn, or your heart will be roasted!",
                "avatarEmoji": "⛓️",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "I swear on my honour, sir, I shall return at sunrise!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Theft in the Larder",
            "paragraphs": [
              "In our forge kitchen, my severe sister Mrs. Joe scolded me sharply, but dear, gentle Joe gave me comforting smiles over the hearth.",
              "While the household slept, I tiptoed into the dark larder. Guilt weighed upon my conscience as I concealed bread, a jar of mincemeat, and a splendid round pork pie.",
              "Slipping Joe's iron rasp into my pocket, I fled into the dense, clammy morning fog to fulfill my fearful promise."
            ],
            "dialogueBites": [
              {
                "speaker": "Joe",
                "text": "Have some more gravy, Pip! It will warm your little bones on a frosty night.",
                "avatarEmoji": "👨‍🏭",
                "side": "left"
              },
              {
                "speaker": "Pip",
                "text": "Thank you, dear Joe. You are always so good to me.",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-78-1-p3",
              "question": "What food and tool did Pip secretly take from the pantry and forge?",
              "options": [
                "A bowl of porridge, dried oats, and a brass candlestick",
                "Three fresh red apples and a tin box of matches",
                "Bread, cheese, a savoury pork pie, and Joe's blacksmith file"
              ],
              "correctInsightIndex": 2,
              "insight": "Compassion mixed with fear led young Pip to risk severe punishment for a stranger.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Terrified",
            "phonics": "TAIR-uh-fide",
            "definition": "Overcome with extreme, trembling fear.",
            "funExample": "Pip was terrified by the rough man hiding among the marsh reeds.",
            "emoji": "😨"
          },
          {
            "word": "Shivering",
            "phonics": "SHIV-er-ing",
            "definition": "Shaking involuntarily from bitter cold or anxiety.",
            "funExample": "The freezing wind left the boy shivering on the muddy path.",
            "emoji": "🥶"
          },
          {
            "word": "Churchyard",
            "phonics": "CHURCH-yard",
            "definition": "An enclosed grassy ground around a church with gravestones.",
            "funExample": "Fog settled low across the quiet country churchyard.",
            "emoji": "⛪"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-78-1",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 1!",
          "targetWord": "MARSH",
          "scrambleLetters": [
            "H",
            "S",
            "R",
            "A",
            "M"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-78-1-comp",
            "question": "What two critical items did the escaped convict command Pip to bring to him on the marsh?",
            "options": [
              "A pair of leather boots and a warm woollen overcoat",
              "A blacksmith's file to cut his chains and some savoury food",
              "A silver watch and a bottle of writing ink",
              "A wooden rowboat and a brass compass"
            ],
            "correctIndex": 1,
            "explanation": "Magwitch desperately needed a blacksmith's file to cut off his iron fetters and food to stay alive.",
            "visualClueEmoji": "⛓️",
            "points": 60
          },
          {
            "id": "q-great_expectations-78-1-vocab",
            "question": "Find a word in the passage that means: \"Overcome with extreme, trembling fear.\".",
            "options": [
              "Young",
              "Orphan",
              "Terrified",
              "Visits"
            ],
            "correctIndex": 2,
            "explanation": "In this chapter, \"Terrified\" means overcome with extreme, trembling fear.",
            "visualClueEmoji": "😨",
            "points": 60
          }
        ]
      },
      {
        "id": "great_expectations-78-2",
        "dayNumber": 2,
        "title": "Joe Gargery's Forge & Honest Work",
        "subtitle": "The clinking hammer, glowing coals, and a kind blacksmith",
        "estReadingMinutes": 15,
        "totalWordCount": 680,
        "summary": "Pip grows up as an apprentice to gentle blacksmith Joe Gargery, learning the honest trade of the hammer and anvil amidst glowing sparks and village fellowship.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-78-2",
            "title": "Joe Gargery's Forge & Honest Work",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "blacksmith_forge",
            "caption": "Golden sparks shower through the dark forge as Joe Gargery hammers red-hot iron on the anvil!",
            "characterAvatars": [
              {
                "name": "Joe",
                "emoji": "👨‍🏭",
                "speech": "There's one thing you may be sure of, Pip: you and me are best friends!",
                "position": "left"
              },
              {
                "name": "Pip",
                "emoji": "👦",
                "speech": "I love working the bellows and watching the coals glow!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge3",
                "x": 45,
                "y": 60,
                "label": "Glowing Anvil",
                "icon": "🔨",
                "soundEffect": "bounce",
                "funFact": "Joe's heavy iron anvil rang out like a church bell across the village!",
                "action": "bounce"
              },
              {
                "id": "ge4",
                "x": 80,
                "y": 35,
                "label": "Forge Bellows",
                "icon": "🔥",
                "soundEffect": "magic",
                "funFact": "Pumping the leather bellows pumped oxygen to make the coal fire roar!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Song of the Anvil",
            "paragraphs": [
              "Joe was a fair man, with curls of flaxen hair on each side of his smooth face, and eyes of such a very undecided blue.",
              "The village blacksmith forge stood right next to our cottage, glowing with cheerful embers that illuminated the twilight.",
              "I took pride in working as Joe's young apprentice, pumping the great leather bellows and learning the rhythm of the hammer."
            ],
            "dialogueBites": [
              {
                "speaker": "Joe",
                "text": "Old Clem was a noble smith, Pip, and we shall hammer out honest iron together!",
                "avatarEmoji": "👨‍🏭",
                "side": "left"
              },
              {
                "speaker": "Pip",
                "text": "I want to be your loyal apprentice forever, Joe!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-78-2-p1",
              "question": "What was Joe Gargery's honest trade in the village?",
              "options": [
                "He was a merchant sailor navigating trading vessels to France",
                "He was a schoolmaster who taught Latin and geometry",
                "He was a gentle, hardworking blacksmith who hammered iron at the forge"
              ],
              "correctInsightIndex": 2,
              "insight": "Joe's honest craft and humble kindness made him a true moral anchor.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Evenings by the Hearth",
            "paragraphs": [
              "When the forge cooled down for the night, Joe and I shared peaceful hours beside the kitchen hearth.",
              "I was eager to learn reading and writing, and I attempted to instruct Joe on my little wooden slate, though he only recognized 'J' and 'O'.",
              "Joe's loyalty was boundless; he regarded my clumsy letters with absolute wonder and boundless admiration."
            ],
            "dialogueBites": [
              {
                "speaker": "Joe",
                "text": "When you read so uncommon well, Pip, you are an absolute scholar!",
                "avatarEmoji": "👨‍🏭",
                "side": "left"
              },
              {
                "speaker": "Pip",
                "text": "One day I will teach you how to write every single letter, Joe!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Summons to Satis House",
            "paragraphs": [
              "The tranquil routine of our smithy was disrupted when pompous Uncle Pumblechook burst into our cottage.",
              "Miss Havisham, the reclusive heiress who lived behind locked iron gates at Satis House, had requested a village boy to visit her.",
              "Though Joe felt reluctant to part with me, my sister insisted that this unexpected invitation would surely make my fortune."
            ],
            "dialogueBites": [
              {
                "speaker": "Mrs. Joe",
                "text": "This is your chance to become a gentleman, Pip! Mind your manners!",
                "avatarEmoji": "👩",
                "side": "left"
              },
              {
                "speaker": "Joe",
                "text": "Be true to yourself, Pip, and remember your old companion Joe.",
                "avatarEmoji": "👨‍🏭",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-78-2-p3",
              "question": "Why was Pip invited to Miss Havisham's grand house?",
              "options": [
                "Because the reclusive wealthy lady wanted a young boy to visit and play",
                "Because she needed someone to chop firewood in her courtyard",
                "Because she wanted to buy Joe's iron anvil for her garden"
              ],
              "correctInsightIndex": 0,
              "insight": "An invitation to Satis House set Pip on a path that changed his whole life.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Blacksmith",
            "phonics": "BLAK-smith",
            "definition": "A craftsman who heats iron in a forge and hammers it into tools.",
            "funExample": "Joe was a noble blacksmith with strong hands and a gentle heart.",
            "emoji": "👨‍🏭"
          },
          {
            "word": "Anvil",
            "phonics": "AN-vil",
            "definition": "A heavy, solid iron block with a flat top on which hot metal is hammered.",
            "funExample": "The hammer struck the red horseshoe upon the sturdy anvil.",
            "emoji": "🔨"
          },
          {
            "word": "Contentment",
            "phonics": "kun-TENT-munt",
            "definition": "A peaceful state of calm happiness and satisfaction with one's life.",
            "funExample": "Working beside Joe filled the rustic cottage with quiet contentment.",
            "emoji": "😊"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-78-2",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 2!",
          "targetWord": "FORGE",
          "scrambleLetters": [
            "E",
            "G",
            "R",
            "O",
            "F"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-78-2-comp",
            "question": "Which two letters did kind blacksmith Joe proudly identify on Pip's writing slate?",
            "options": [
              "The letters 'A' and 'B' because they were at the front of the book",
              "The letters 'P' and 'I' because they spelled Pip",
              "The letters 'J' and 'O' because they spelled his name",
              "The letters 'X' and 'Z' because they looked like crossed swords"
            ],
            "correctIndex": 2,
            "explanation": "Joe proudly pointed out 'J' and 'O', saying they made up his own cheerful name.",
            "visualClueEmoji": "📝",
            "points": 60
          },
          {
            "id": "q-great_expectations-78-2-vocab",
            "question": "Find a word in the passage that means: \"A craftsman who heats iron in a forge and hammers it into tools.\".",
            "options": [
              "Blacksmith",
              "Grows",
              "Apprentice",
              "Gentle"
            ],
            "correctIndex": 0,
            "explanation": "In this chapter, \"Blacksmith\" means a craftsman who heats iron in a forge and hammers it into tools.",
            "visualClueEmoji": "👨‍🏭",
            "points": 60
          }
        ]
      },
      {
        "id": "great_expectations-78-3",
        "dayNumber": 3,
        "title": "Satis House & The Stopped Clocks",
        "subtitle": "A dusty mansion where all the clocks stopped at twenty to nine",
        "estReadingMinutes": 15,
        "totalWordCount": 680,
        "summary": "Pip enters gloomy Satis House and meets elderly Miss Havisham, who sits frozen in time in her yellowed bridal dress amidst cobwebs and stopped clocks.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-78-3",
            "title": "Satis House & The Stopped Clocks",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "satis_house",
            "caption": "Miss Havisham sits motionless by candlelight in her faded wedding gown surrounded by cobwebs!",
            "characterAvatars": [
              {
                "name": "Miss Havisham",
                "emoji": "👰",
                "speech": "Do you know what I have in here? Broken hearts!",
                "position": "right"
              },
              {
                "name": "Pip",
                "emoji": "👦",
                "speech": "Everything in this room is withered and yellowed with dust.",
                "position": "left"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge5",
                "x": 40,
                "y": 45,
                "label": "Stopped Watch",
                "icon": "🕰️",
                "soundEffect": "bounce",
                "funFact": "Every clock in Satis House was stopped at precisely twenty minutes to nine!",
                "action": "bounce"
              },
              {
                "id": "ge6",
                "x": 75,
                "y": 60,
                "label": "Bridal Veil",
                "icon": "👰",
                "soundEffect": "magic",
                "funFact": "Miss Havisham never took off her wedding veil after being jilted on her wedding day.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Behind the Iron Bars",
            "paragraphs": [
              "Satis House was of old brick, and dismal, with great numbers of iron bars to it. Some of the windows had been walled up.",
              "A young lady, proud and beautiful, answered the courtyard bell. She called me 'boy' with an air of immense disdain.",
              "She guided me through dim corridors where shutters blocked out the sun, until we reached a candlelit bedchamber."
            ],
            "dialogueBites": [
              {
                "speaker": "Estella",
                "text": "Don't loiter, boy! Miss Havisham is waiting for you in her dressing room.",
                "avatarEmoji": "👧",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "Yes, miss. I am coming right behind you.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-78-3-p1",
              "question": "What barred the windows and courtyard of Satis House?",
              "options": [
                "Heavy iron bars and walled-up bricks that shut out daylight",
                "Bright green climbing roses and ivy trellises",
                "White painted wooden shutters decorated with brass bells"
              ],
              "correctInsightIndex": 0,
              "insight": "The dark mansion shut out the warmth and vitality of the outside world.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Lady in the Wedding Gown",
            "paragraphs": [
              "She was dressed in rich materials—satins, and lace, and silks—all of white. Her shoes were white, and she had a long white veil dependent from her hair.",
              "Yet everything that ought to be white had lost its lustre, and was faded and yellow. Her silk dress hung loosely upon an emaciated frame.",
              "Without looking at me, she pointed to her breast and whispered: 'Do you know what I touch here? A broken heart!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Havisham",
                "text": "Look at me, boy! Does it frighten you to see a woman who has not seen the sun since you were born?",
                "avatarEmoji": "👰",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "It is very strange and sad, ma'am, but I am not afraid.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Twenty Minutes to Nine",
            "paragraphs": [
              "Every timepiece within the chamber had been arrested at the exact same minute: twenty minutes to nine.",
              "Miss Havisham had commanded that time should stand still from the very instant she received the letter of betrayal.",
              "In the adjoining banquet room, a giant wedding cake lay smothered under decades of thick cobwebs, devoured by mice and black beetles."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Havisham",
                "text": "Call Estella! Let me watch you two play cards together!",
                "avatarEmoji": "👰",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "I shall call her at once, ma'am.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-78-3-p3",
              "question": "At what exact minute were all the clocks in Satis House permanently stopped?",
              "options": [
                "Exactly twelve o'clock midnight",
                "Twenty minutes to nine",
                "Half past three in the afternoon"
              ],
              "correctInsightIndex": 1,
              "insight": "Miss Havisham trapped herself in the very hour of her bitter heartbreak.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Cobweb",
            "phonics": "KOB-web",
            "definition": "A dusty, tangled web spun by a spider, often found in old houses.",
            "funExample": "Heavy grey cobwebs draped across the ornate dressing mirror.",
            "emoji": "🕸️"
          },
          {
            "word": "Gloomy",
            "phonics": "GLOO-mee",
            "definition": "Dark, shadowy, and causing feelings of sadness and mystery.",
            "funExample": "The gloomy hallways of Satis House were lit only by wax candles.",
            "emoji": "🕯️"
          },
          {
            "word": "Solitary",
            "phonics": "SOL-uh-tair-ee",
            "definition": "Existing alone; lonely and separated from other people.",
            "funExample": "She lived a solitary life locked away behind iron gates.",
            "emoji": "🚪"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-78-3",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 3!",
          "targetWord": "CANDLE",
          "scrambleLetters": [
            "E",
            "L",
            "D",
            "N",
            "A",
            "C"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-78-3-comp",
            "question": "What had happened to Miss Havisham's bridal gown after years of living in the dark?",
            "options": [
              "It had faded and yellowed like withered autumn leaves",
              "It had turned bright crimson red like a ruby",
              "It was bleached sparkling clean every morning",
              "It was dyed dark purple by the house servants"
            ],
            "correctIndex": 0,
            "explanation": "The text states that her silk dress had aged, faded, and yellowed over the decades.",
            "visualClueEmoji": "👰",
            "points": 60
          },
          {
            "id": "q-great_expectations-78-3-vocab",
            "question": "Find a word in the passage that means: \"A dusty, tangled web spun by a spider, often found in old houses.\".",
            "options": [
              "Enters",
              "Gloomy",
              "Satis",
              "Cobweb"
            ],
            "correctIndex": 3,
            "explanation": "In this chapter, \"Cobweb\" means a dusty, tangled web spun by a spider, often found in old houses.",
            "visualClueEmoji": "🕸️",
            "points": 60
          }
        ]
      },
      {
        "id": "great_expectations-78-4",
        "dayNumber": 4,
        "title": "Estella & The Game of Cards",
        "subtitle": "Beggar My Neighbour and the pangs of wounded pride",
        "estReadingMinutes": 15,
        "totalWordCount": 680,
        "summary": "Pip plays cards with the haughty Estella, who mocks his coarse hands and thick boots, sparking in Pip a painful longing to become an educated gentleman.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-78-4",
            "title": "Estella & The Game of Cards",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "satis_house",
            "caption": "Estella deals playing cards with cold disdain while Pip looks self-consciously at his rough boots!",
            "characterAvatars": [
              {
                "name": "Estella",
                "emoji": "👧",
                "speech": "He calls the knaves, Jacks, this boy! And what coarse hands he has!",
                "position": "right"
              },
              {
                "name": "Pip",
                "emoji": "👦",
                "speech": "Her words stung my heart, and I wished I were not so common.",
                "position": "left"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge7",
                "x": 45,
                "y": 55,
                "label": "Playing Cards",
                "icon": "🃏",
                "soundEffect": "bounce",
                "funFact": "Beggar My Neighbour was a simple Victorian card game won by capturing picture cards!",
                "action": "bounce"
              },
              {
                "id": "ge8",
                "x": 75,
                "y": 40,
                "label": "Rough Boots",
                "icon": "👢",
                "soundEffect": "magic",
                "funFact": "Pip's thick working boots were made for forge mud, not polished mansion floors!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Beggar My Neighbour",
            "paragraphs": [
              "Estella dealt the cards with careless grace, while Miss Havisham leaned forward, her dark eyes glittering with unnatural malice.",
              "'Beggar him,' whispered Miss Havisham. 'Play cards with this common working boy and let him see your beauty.'",
              "Whenever I won a trick or lost a card, Estella watched me with cool amusement, treating me like an inferior creature."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Havisham",
                "text": "Well, boy! What do you think of her? Is she pretty?",
                "avatarEmoji": "👰",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "I think she is very pretty, ma'am, and very proud, and very insulting.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-78-4-p1",
              "question": "What card game did Pip and Estella play under Miss Havisham's watchful gaze?",
              "options": [
                "Go Fish on the carpet",
                "Beggar My Neighbour",
                "Snap with picture cards"
              ],
              "correctInsightIndex": 1,
              "insight": "A simple card game revealed the deep social divide between the two children.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Coarse Hands and Thick Boots",
            "paragraphs": [
              "'He calls the knaves, Jacks, this boy!' said Estella with disdain. 'And what coarse hands he has! And what thick boots!'",
              "Her scornful words pierced straight into my youthful vanity. For the first time in my life, I felt humiliated by my humble origins.",
              "I looked at my fingernails stained with forge soot and wished with all my heart that I were refined and genteel."
            ],
            "dialogueBites": [
              {
                "speaker": "Estella",
                "text": "You may put down that greasy bread, boy! You are far too coarse to sit near me.",
                "avatarEmoji": "👧",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "I did not choose my hands, miss, but I will wash them cleaner next time.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Tears in the Courtyard",
            "paragraphs": [
              "In the desolate stone courtyard, Estella set meat and beer upon the stones without looking at me, slamming the gate shut.",
              "Overwhelmed by wounded pride, I wept solitary tears, kicking the brewery wall with my clumsy village boots.",
              "That dreary afternoon marked the dawn of my restless ambition. I could no longer look at Joe's humble smithy with the same happy eyes."
            ],
            "dialogueBites": [
              {
                "speaker": "Estella",
                "text": "Why don't you cry again, boy? You cried like a baby in the yard!",
                "avatarEmoji": "👧",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "I shall not give you the pleasure of seeing me cry ever again!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-78-4-p3",
              "question": "What did Estella mock about Pip that made him feel deeply ashamed?",
              "options": [
                "His bright red hair and tall height",
                "His ability to whistle church hymns",
                "His coarse blacksmith hands, thick village boots, and calling knaves Jacks"
              ],
              "correctInsightIndex": 2,
              "insight": "Wounded pride ignited Pip's desire to become an educated gentleman.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Haughty",
            "phonics": "HAW-tee",
            "definition": "Arrogantly proud and looking down upon others as inferior.",
            "funExample": "Estella tossed her dark hair with a haughty little laugh.",
            "emoji": "👑"
          },
          {
            "word": "Disdainful",
            "phonics": "dis-DAYN-ful",
            "definition": "Showing a feeling of contempt or lack of respect for someone.",
            "funExample": "Her disdainful glance made Pip feel clumsy and embarrassed.",
            "emoji": "😒"
          },
          {
            "word": "Knave",
            "phonics": "NAYV",
            "definition": "An old-fashioned card name for the Jack in a deck of playing cards.",
            "funExample": "He called the knaves Jacks, much to her amusement.",
            "emoji": "🃏"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-78-4",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 4!",
          "targetWord": "ESTELLA",
          "scrambleLetters": [
            "A",
            "L",
            "L",
            "E",
            "T",
            "S",
            "E"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-78-4-comp",
            "question": "Why did Pip hide behind the stone wall in the courtyard and weep bitter tears?",
            "options": [
              "Because he lost his favourite marble in the courtyard drain",
              "Because Miss Havisham refused to let him taste the wedding cake",
              "Because he was frightened of the guard dogs in the brewery",
              "Because Estella's mocking words about his coarse hands and boots hurt his pride deeply"
            ],
            "correctIndex": 3,
            "explanation": "Estella's cruel ridicule of his humble background deeply wounded Pip's self-esteem.",
            "visualClueEmoji": "😢",
            "points": 60
          },
          {
            "id": "q-great_expectations-78-4-vocab",
            "question": "Find a word in the passage that means: \"Arrogantly proud and looking down upon others as inferior.\".",
            "options": [
              "Plays",
              "Haughty",
              "Cards",
              "Estella"
            ],
            "correctIndex": 1,
            "explanation": "In this chapter, \"Haughty\" means arrogantly proud and looking down upon others as inferior.",
            "visualClueEmoji": "👑",
            "points": 60
          }
        ]
      },
      {
        "id": "great_expectations-78-5",
        "dayNumber": 5,
        "title": "Great Expectations & Mr. Jaggers",
        "subtitle": "A mysterious fortune and a departure from the forge",
        "estReadingMinutes": 15,
        "totalWordCount": 680,
        "summary": "The imposing London lawyer Mr. Jaggers arrives at the village inn to announce that an anonymous benefactor has bestowed upon Pip a handsome fortune and great expectations.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-78-5",
            "title": "Great Expectations & Mr. Jaggers",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "marsh_mist",
            "caption": "Mr. Jaggers waves his heavy pocket watch as he announces Pip's sudden fortune to Joe and the villagers!",
            "characterAvatars": [
              {
                "name": "Mr. Jaggers",
                "emoji": "⚖️",
                "speech": "Pip will be brought up as a gentleman of great expectations!",
                "position": "right"
              },
              {
                "name": "Joe",
                "emoji": "👨‍🏭",
                "speech": "Pip will always be welcome at my forge, fortune or no fortune!",
                "position": "left"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge9",
                "x": 40,
                "y": 50,
                "label": "Gold Pocket Watch",
                "icon": "🕰️",
                "soundEffect": "bounce",
                "funFact": "Mr. Jaggers constantly polished his spectacles and checked his heavy gold watch!",
                "action": "bounce"
              },
              {
                "id": "ge10",
                "x": 75,
                "y": 35,
                "label": "Scented Soap",
                "icon": "🧼",
                "soundEffect": "magic",
                "funFact": "Jaggers washed his hands with carbolic soap after every legal client to wash away guilt!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Stranger at the Three Jolly Bargemen",
            "paragraphs": [
              "While Joe and I rested at the Three Jolly Bargemen after a hard week at the anvil, a formidable stranger appeared in our midst.",
              "He possessed a large head, dark complexion, and an impressive air of authority that commanded instant silence throughout the tavern.",
              "Mr. Jaggers informed us that he carried grave private business concerning young Pip's immediate future."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Jaggers",
                "text": "I have an extraordinary communication to make on behalf of a secret patron!",
                "avatarEmoji": "⚖️",
                "side": "right"
              },
              {
                "speaker": "Joe",
                "text": "Speak on, sir! Pip and I have no secrets between us.",
                "avatarEmoji": "👨‍🏭",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-78-5-p1",
              "question": "Who arrived at the village inn with extraordinary news about Pip?",
              "options": [
                "The postman carrying a letter from the King",
                "A wandering clockmaker looking for broken gears",
                "Mr. Jaggers, the formidable London lawyer with bushy eyebrows"
              ],
              "correctInsightIndex": 2,
              "insight": "A high-powered attorney brought news that altered Pip's entire destiny.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Conditions of the Fortune",
            "paragraphs": [
              "'I am instructed to communicate to him,' said Mr. Jaggers, 'that he will come into a handsome property. He has great expectations.'",
              "The benefactor's identity was to remain a sealed secret until that person chose to reveal it in their own good time.",
              "I felt dizzy with triumph and wonder. In my heart, I was certain the generous patron could be none other than Miss Havisham!"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Jaggers",
                "text": "You must always bear the name of Pip, and you must never seek to discover your patron.",
                "avatarEmoji": "⚖️",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "I promise faithfully, sir! When do I depart for London?",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Farewell to the Forge",
            "paragraphs": [
              "When Jaggers offered financial compensation for releasing my apprenticeship indentures, Joe stood tall and declined every penny with quiet majesty.",
              "'If you think as money can make compensation to me for the loss of the little child—what come to the forge—and ever the best of friends!' Joe choked with emotion.",
              "With a mixture of elation and lingering sadness, I watched the church spire and the misty marshlands disappear behind my speeding carriage."
            ],
            "dialogueBites": [
              {
                "speaker": "Joe",
                "text": "God bless you, dear Pip! May you prosper in London, and never forget old Joe.",
                "avatarEmoji": "👨‍🏭",
                "side": "left"
              },
              {
                "speaker": "Pip",
                "text": "Goodbye, Joe! I will write to you often!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-78-5-p3",
              "question": "How did Joe Gargery respond when offered money for releasing Pip's apprenticeship?",
              "options": [
                "He proudly refused every penny, declaring that love cannot be bought with gold",
                "He happily pocketed the money to buy new forge tools",
                "He asked for double the amount before saying farewell"
              ],
              "correctInsightIndex": 0,
              "insight": "Joe's selfless love showed that true goodness cannot be purchased with money.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Benefactor",
            "phonics": "BEN-uh-fak-tur",
            "definition": "A generous person who gives financial help or gifts to support someone.",
            "funExample": "Pip's mysterious benefactor paid for all his gentleman's education.",
            "emoji": "🎁"
          },
          {
            "word": "Fortune",
            "phonics": "FOR-chun",
            "definition": "A large sum of money or riches that brings wealth and security.",
            "funExample": "An unexpected fortune lifted Pip out of his humble blacksmith life.",
            "emoji": "💰"
          },
          {
            "word": "Guardian",
            "phonics": "GAR-dee-un",
            "definition": "An appointed adult responsible for the welfare and property of a youth.",
            "funExample": "Mr. Jaggers was named as Pip's legal guardian in London.",
            "emoji": "⚖️"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-78-5",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 5!",
          "targetWord": "FORTUNE",
          "scrambleLetters": [
            "E",
            "N",
            "U",
            "T",
            "R",
            "O",
            "F"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-78-5-comp",
            "question": "What two strict conditions were placed upon Pip receiving his fortune?",
            "options": [
              "He must live in Satis House and marry Estella within three years",
              "He must wear black coats every day and learn how to fence",
              "He must always keep the name Pip and never ask who his secret benefactor was",
              "He must give half his yearly allowance to the village churchyard"
            ],
            "correctIndex": 2,
            "explanation": "Mr. Jaggers explicitly instructed that Pip must keep his name and never seek the identity of his patron.",
            "visualClueEmoji": "⚖️",
            "points": 60
          },
          {
            "id": "q-great_expectations-78-5-vocab",
            "question": "Find a word in the passage that means: \"A generous person who gives financial help or gifts to support someone.\".",
            "options": [
              "Imposing",
              "London",
              "Lawyer",
              "Benefactor"
            ],
            "correctIndex": 3,
            "explanation": "In this chapter, \"Benefactor\" means a generous person who gives financial help or gifts to support someone.",
            "visualClueEmoji": "🎁",
            "points": 60
          }
        ]
      },
      {
        "id": "great_expectations-78-6",
        "dayNumber": 6,
        "title": "London Streets & Herbert Pocket",
        "subtitle": "Learning gentlemanly manners and discovering true friendship",
        "estReadingMinutes": 15,
        "totalWordCount": 680,
        "summary": "In the bustling streets of London, Pip rooms with warmhearted Herbert Pocket, who teaches him city etiquette and becomes his dearest, most loyal companion.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-78-6",
            "title": "London Streets & Herbert Pocket",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "london_river",
            "caption": "Pip and Herbert Pocket walk along the lively banks of the River Thames in Victorian London!",
            "characterAvatars": [
              {
                "name": "Herbert",
                "emoji": "🧑",
                "speech": "We shall call you Handel, Pip, in honour of the harmonious blacksmith!",
                "position": "right"
              },
              {
                "name": "Pip",
                "emoji": "🎩",
                "speech": "London is so noisy and vast, but your friendship makes me feel at home!",
                "position": "left"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge11",
                "x": 35,
                "y": 55,
                "label": "Thames Barges",
                "icon": "⛵",
                "soundEffect": "bounce",
                "funFact": "Wooden sailing barges brought coal and vegetables up the river Thames right into London!",
                "action": "bounce"
              },
              {
                "id": "ge12",
                "x": 70,
                "y": 40,
                "label": "Teacup Etiquette",
                "icon": "☕",
                "soundEffect": "magic",
                "funFact": "Herbert gently showed Pip never to put his dinner knife into his mouth!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Barnard's Inn and A Familiar Face",
            "paragraphs": [
              "My first impression of London was rather disappointing: narrow, grimy thoroughfares choked with soot, mud, and endless rumbling dray carts.",
              "When I reached Barnard's Inn, I was greeted by my future roommate, a slender, cheerful youth carrying strawberries.",
              "We recognized each other instantly—he was the very same pale young gentleman who had challenged me to a boxing match at Miss Havisham's."
            ],
            "dialogueBites": [
              {
                "speaker": "Herbert",
                "text": "Welcome to London, Pip! Have some fresh strawberries while we unpack your trunks!",
                "avatarEmoji": "🧑",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "You are the pale gentleman from Satis House! What a wonderful coincidence!",
                "avatarEmoji": "🎩",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-78-6-p1",
              "question": "Who greeted Pip at Barnard's Inn as his new London roommate?",
              "options": [
                "Herbert Pocket, the pale young gentleman from Satis House",
                "Uncle Pumblechook with a sack of grain",
                "Mr. Jaggers' chief clerk Mr. Wemmick"
              ],
              "correctInsightIndex": 0,
              "insight": "A boyhood opponent blossomed into Pip's truest and most generous friend.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Lessons in Table Manners",
            "paragraphs": [
              "Herbert had a frank and sunny nature, combined with natural breeding and unaffected gentleness.",
              "Observing my provincial awkwardness at mealtime, he tactfully imparted the essentials of polite dining without a single harsh word.",
              "'We must call you Handel,' Herbert laughed warmly, 'for there is a charming piece of music by Handel called The Harmonious Blacksmith!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Herbert",
                "text": "Always rest your knife on the plate, Handel, and let your fork do the honours!",
                "avatarEmoji": "🧑",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "Thank you, Herbert. You teach me with such gentle kindness.",
                "avatarEmoji": "🎩",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Joe's Awkward Visit",
            "paragraphs": [
              "The arrival of faithful Joe Gargery in London tested my newfound gentlemanly pretensions.",
              "Uncomfortable in his rigid Sunday finery, Joe fumbled nervously with his hat, addressing me stiffly as 'Sir'.",
              "Ashamed of his rustic speech before Herbert, I treated Joe with cool distance. Only when he walked away into the fog did I realize the cruelty of my vanity."
            ],
            "dialogueBites": [
              {
                "speaker": "Joe",
                "text": "You and me is not two figures to be together in London, Pip. My place is at the forge.",
                "avatarEmoji": "👨‍🏭",
                "side": "left"
              },
              {
                "speaker": "Pip",
                "text": "Oh Joe, forgive me... My pride blinded me to the best friend I ever had.",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-78-6-p3",
              "question": "Why did Pip feel guilty and ashamed after Joe Gargery visited him in London?",
              "options": [
                "Because Joe forgot to bring Pip's favourite warm scarf",
                "Because Pip acted proud and snobbish instead of greeting Joe with warm love",
                "Because Herbert refused to allow Joe to sit at the table"
              ],
              "correctInsightIndex": 1,
              "insight": "Pip realized that newfound wealth had made him foolishly ashamed of true love.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Bustling",
            "phonics": "BUS-ling",
            "definition": "Full of lively, energetic, and crowded activity.",
            "funExample": "The bustling streets of London were packed with horse carriages and vendors.",
            "emoji": "🏙️"
          },
          {
            "word": "Etiquette",
            "phonics": "ET-i-ket",
            "definition": "The customary code of polite and refined behaviour in society.",
            "funExample": "Herbert kindly instructed Pip in gentlemanly table etiquette.",
            "emoji": "🎩"
          },
          {
            "word": "Lodgings",
            "phonics": "LOJ-ingz",
            "definition": "Rented rooms or living quarters where someone stays temporarily.",
            "funExample": "The two young friends shared cosy lodgings at Barnard's Inn.",
            "emoji": "🛋️"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-78-6",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 6!",
          "targetWord": "LONDON",
          "scrambleLetters": [
            "N",
            "O",
            "D",
            "N",
            "O",
            "L"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-78-6-comp",
            "question": "What affectionate musical nickname did Herbert Pocket give Pip in honour of his forge background?",
            "options": [
              "Handel, after the composer of 'The Harmonious Blacksmith'",
              "Mozart, because Pip played the parlour violin",
              "Beethoven, after the stormy thunder music",
              "Chopin, because of Pip's delicate handwriting"
            ],
            "correctIndex": 0,
            "explanation": "Herbert nicknamed Pip 'Handel' because Handel composed 'The Harmonious Blacksmith'.",
            "visualClueEmoji": "🎵",
            "points": 60
          },
          {
            "id": "q-great_expectations-78-6-vocab",
            "question": "Find a word in the passage that means: \"Full of lively, energetic, and crowded activity.\".",
            "options": [
              "Streets",
              "Bustling",
              "London",
              "Rooms"
            ],
            "correctIndex": 1,
            "explanation": "In this chapter, \"Bustling\" means full of lively, energetic, and crowded activity.",
            "visualClueEmoji": "🏙️",
            "points": 60
          }
        ]
      },
      {
        "id": "great_expectations-78-7",
        "dayNumber": 7,
        "title": "The Secret Benefactor Revealed",
        "subtitle": "A stormy midnight, heavy footsteps, and a shocking revelation",
        "estReadingMinutes": 15,
        "totalWordCount": 680,
        "summary": "On a wild, stormy night in London, an aged sailor climbs the stairs to Pip's rooms: it is Magwitch, the escaped convict, revealing that he—not Miss Havisham—is Pip's real benefactor.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-78-7",
            "title": "The Secret Benefactor Revealed",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "marsh_mist",
            "caption": "Rain lashes against the window as the weather-beaten convict Magwitch reveals his secret to Pip!",
            "characterAvatars": [
              {
                "name": "Magwitch",
                "emoji": "👴",
                "speech": "Yes, Pip, dear boy! It’s me what made a gentleman out of you!",
                "position": "right"
              },
              {
                "name": "Pip",
                "emoji": "🎩",
                "speech": "You? All my fortune came from an escaped convict?",
                "position": "left"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge13",
                "x": 40,
                "y": 55,
                "label": "Weathered Hands",
                "icon": "🤝",
                "soundEffect": "bounce",
                "funFact": "Magwitch worked twenty hard years sheep-farming in Australia to send his savings to Pip!",
                "action": "bounce"
              },
              {
                "id": "ge14",
                "x": 75,
                "y": 40,
                "label": "Stormy Window",
                "icon": "🌧️",
                "soundEffect": "magic",
                "funFact": "High winds in London tore roofs and blew out street lamps on that fateful night.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "A Knock in the Midnight Gale",
            "paragraphs": [
              "The tempestuous gale of that November evening tore chimney pots from roofs and whipped the river Thames into a frenzy.",
              "Alone in our chambers at the Temple, I was startled by the sound of deliberate footsteps climbing the exterior staircase.",
              "Opening the door with a trembling candle in my hand, I saw an aged, weather-beaten man with iron-grey hair standing in the rain."
            ],
            "dialogueBites": [
              {
                "speaker": "Magwitch",
                "text": "Pip, Mr. Pip... Don't you know me, dear boy?",
                "avatarEmoji": "👴",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "Who are you, sir? Why have you come here at this late hour?",
                "avatarEmoji": "🎩",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-78-7-p1",
              "question": "Who appeared at Pip's chambers during the violent midnight storm?",
              "options": [
                "Miss Havisham wrapped in a silk travelling cloak",
                "Magwitch, the escaped convict Pip helped on the marshes as a child",
                "Uncle Pumblechook seeking shelter from the rain"
              ],
              "correctInsightIndex": 1,
              "insight": "The past returned in the middle of a tempest to reshape Pip's destiny.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Truth Laid Bare",
            "paragraphs": [
              "'Yes, Pip, dear boy!' he whispered with trembling pride. 'I'm your second father. You're my gentleman!'",
              "He revealed that after being sent to the penal colonies in New South Wales, he prospered as a sheep-rancher, sending every guinea to Mr. Jaggers for my education.",
              "My world collapsed around me. Miss Havisham had never intended me for Estella; she had simply allowed me to deceive myself."
            ],
            "dialogueBites": [
              {
                "speaker": "Magwitch",
                "text": "I swore that lonely night on the marshes that the little boy who saved me would be made into a grand gentleman!",
                "avatarEmoji": "👴",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "My fortune... my expectations... they came from you all along!",
                "avatarEmoji": "🎩",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "A Life in Peril",
            "paragraphs": [
              "The mortal danger hanging over Magwitch immediately eclipsed my wounded vanity.",
              "The law decreed that any transportee who set foot back on British soil faced the gallows without mercy.",
              "Despite my initial recoil from his coarse demeanor, I recognized the immense nobility of his devotion and resolved to help him escape abroad."
            ],
            "dialogueBites": [
              {
                "speaker": "Magwitch",
                "text": "I've seen my boy, and I can die happy now, whatever happens to me.",
                "avatarEmoji": "👴",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "You must stay hidden in our rooms. Herbert and I will smuggle you safely out of England!",
                "avatarEmoji": "🎩",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-78-7-p3",
              "question": "Why was Magwitch in mortal danger by returning to London?",
              "options": [
                "Because he owed money to the London taxi coachmen",
                "Because he had forgotten to renew his travelling passport",
                "Because escaped transportees returning to England faced the death penalty under the law"
              ],
              "correctInsightIndex": 2,
              "insight": "Love led Magwitch to risk everything just to gaze upon his gentleman.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Tempestuous",
            "phonics": "tem-PES-choo-us",
            "definition": "Characterized by violent, stormy, and wild wind and rain.",
            "funExample": "The tempestuous night rattled the wooden shutters of the apartment.",
            "emoji": "🌪️"
          },
          {
            "word": "Gratitude",
            "phonics": "GRAT-i-tood",
            "definition": "A strong feeling of thankfulness and appreciation for kindness received.",
            "funExample": "Magwitch felt lifelong gratitude to the little boy who fed him on the marshes.",
            "emoji": "🙏"
          },
          {
            "word": "Convict",
            "phonics": "KON-vikt",
            "definition": "A person found guilty of a crime and sentenced to serve prison time.",
            "funExample": "The former convict risked his life by returning to England.",
            "emoji": "⛓️"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-78-7",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 7!",
          "targetWord": "MAGWITCH",
          "scrambleLetters": [
            "H",
            "C",
            "T",
            "I",
            "W",
            "G",
            "A",
            "M"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-78-7-comp",
            "question": "How did Magwitch earn the fortune that paid for Pip's gentlemanly education?",
            "options": [
              "By discovering a pirate treasure chest in the English Channel",
              "By winning horse races at the royal fair in Epsom",
              "By inheriting an old silver mine in the Scottish Highlands",
              "By working hard for twenty years as a successful sheep-farmer in Australia"
            ],
            "correctIndex": 3,
            "explanation": "Magwitch endured decades of harsh labor in Australia, sending all his earnings to Mr. Jaggers for Pip.",
            "visualClueEmoji": "🐑",
            "points": 60
          },
          {
            "id": "q-great_expectations-78-7-vocab",
            "question": "Find a word in the passage that means: \"Characterized by violent, stormy, and wild wind and rain.\".",
            "options": [
              "Tempestuous",
              "Wild",
              "Stormy",
              "Night"
            ],
            "correctIndex": 0,
            "explanation": "In this chapter, \"Tempestuous\" means characterized by violent, stormy, and wild wind and rain.",
            "visualClueEmoji": "🌪️",
            "points": 60
          }
        ]
      },
      {
        "id": "great_expectations-78-8",
        "dayNumber": 8,
        "title": "Loyalty, Forgiveness & True Nobility",
        "subtitle": "A river escape, a peaceful farewell, and the forge of true love",
        "estReadingMinutes": 15,
        "totalWordCount": 680,
        "summary": "Pip attempts to rescue Magwitch by rowing down the Thames. Though captured, Magwitch dies peacefully knowing Pip loves him, and Pip returns home to the true nobility of Joe and Biddy.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-78-8",
            "title": "Loyalty, Forgiveness & True Nobility",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "london_river",
            "caption": "Pip holds Magwitch's hand tenderly as sunset gilds the tranquil waters of the River Thames!",
            "characterAvatars": [
              {
                "name": "Magwitch",
                "emoji": "👴",
                "speech": "God bless you, dear boy! You've never left my side!",
                "position": "left"
              },
              {
                "name": "Pip",
                "emoji": "🎩",
                "speech": "I will never leave you, my dear friend. You are at peace now.",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge15",
                "x": 45,
                "y": 60,
                "label": "Rowboat on the River",
                "icon": "🚣",
                "soundEffect": "bounce",
                "funFact": "Pip and Herbert rowed miles every day to train for their daring river escape!",
                "action": "bounce"
              },
              {
                "id": "ge16",
                "x": 75,
                "y": 35,
                "label": "Golden Sunset",
                "icon": "🌅",
                "soundEffect": "magic",
                "funFact": "The sunset over the marshes reminded Pip of the quiet forge where his journey began.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Race on the River Thames",
            "paragraphs": [
              "Our daring escape down the bustling waterways of the Thames demanded supreme endurance and nerve.",
              "As we hailed the Hamburg steamer in the open channel, an armed police cutter intercepted us, guided by Magwitch's old enemy Compeyson.",
              "In the chaotic collision beneath the steamer's giant paddle-wheels, Magwitch was gravely hurt, but held fast to my hand with quiet serenity."
            ],
            "dialogueBites": [
              {
                "speaker": "Magwitch",
                "text": "Don't weep for me, dear boy. I am happier here with you than I ever was on the ranches.",
                "avatarEmoji": "👴",
                "side": "left"
              },
              {
                "speaker": "Pip",
                "text": "I will never forsake you, Magwitch, as long as I draw breath.",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-78-8-p1",
              "question": "How did Pip and Herbert attempt to help Magwitch escape to Europe?",
              "options": [
                "By disguising him as a postman on a mail coach to Dover",
                "By hiding him in a flour barrel inside a bakery wagon",
                "By rowing a small wooden boat down the River Thames to meet a Hamburg steamer"
              ],
              "correctInsightIndex": 2,
              "insight": "Pip risked everything to save the man who had sacrificed so much for him.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "A Peaceful Passing",
            "paragraphs": [
              "In the quiet infirmary, all the artificial barriers of wealth and class vanished completely between us.",
              "Before he closed his eyes forever, I whispered to him that his long-lost daughter was a lady whom I loved with all my soul.",
              "He raised my hand to his lips with profound gratitude, passing from this world with the calm dignity of a soul redeemed."
            ],
            "dialogueBites": [
              {
                "speaker": "Pip",
                "text": "Dear Magwitch, your lost child is living. She is a beautiful lady, and I love her.",
                "avatarEmoji": "🎩",
                "side": "right"
              },
              {
                "speaker": "Magwitch",
                "text": "God bless you... my faithful, darling boy...",
                "avatarEmoji": "👴",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Return to the Anvil",
            "paragraphs": [
              "Broken in health and fortune, I awoke from a delirious fever to find gentle Joe holding my hands with angelic tenderness.",
              "Joe had secretly paid every penny of my debts and nursed me back to life, expecting nothing but my friendship in return.",
              "I returned to the peaceful smithy a wiser, humbler man, knowing that Joe Gargery was the truest gentleman I would ever know."
            ],
            "dialogueBites": [
              {
                "speaker": "Joe",
                "text": "Pip, old chap, you’re well again! And we are ever the best of friends!",
                "avatarEmoji": "👨‍🏭",
                "side": "left"
              },
              {
                "speaker": "Pip",
                "text": "Dear Joe, forgive me for ever straying from your loving hearth.",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-78-8-p3",
              "question": "Who nursed Pip through his fever and paid off all his debts in London?",
              "options": [
                "Dear Joe Gargery, the gentle blacksmith",
                "Mr. Jaggers from his office",
                "Uncle Pumblechook from the corn chandler shop"
              ],
              "correctInsightIndex": 0,
              "insight": "Joe's selfless love showed Pip what true gentlemanly nobility really means.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Devotion",
            "phonics": "dih-VOH-shun",
            "definition": "Deep, steadfast loyalty, dedication, and affectionate love.",
            "funExample": "Pip stayed beside the sick old man with unwavering devotion.",
            "emoji": "💖"
          },
          {
            "word": "Reconciliation",
            "phonics": "rek-un-sil-ee-AY-shun",
            "definition": "The restoration of friendly relations and harmony after conflict or distance.",
            "funExample": "Pip wept with joy at his tearful reconciliation with kind blacksmith Joe.",
            "emoji": "🤝"
          },
          {
            "word": "Noble",
            "phonics": "NOH-bul",
            "definition": "Having high moral qualities like courage, generosity, and honour.",
            "funExample": "Joe was a truly noble man whose worth came from his loving heart.",
            "emoji": "👑"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-78-8",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 8!",
          "targetWord": "NOBILITY",
          "scrambleLetters": [
            "Y",
            "T",
            "I",
            "L",
            "I",
            "B",
            "O",
            "N"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-78-8-comp",
            "question": "What profound moral lesson did Pip finally learn after his journey of great expectations?",
            "options": [
              "It is always best to stay away from rivers on foggy mornings",
              "True greatness and nobility come from an honest, loving heart, not money or fancy clothes",
              "Only people who own big mansions in London can be happy",
              "A blacksmith should never learn how to read or write"
            ],
            "correctIndex": 1,
            "explanation": "Pip realized that Joe Gargery's humble, loyal love was far more noble than superficial wealth.",
            "visualClueEmoji": "💖",
            "points": 60
          },
          {
            "id": "q-great_expectations-78-8-vocab",
            "question": "Find a word in the passage that means: \"Deep, steadfast loyalty, dedication, and affectionate love.\".",
            "options": [
              "Attempts",
              "Rescue",
              "Devotion",
              "Magwitch"
            ],
            "correctIndex": 2,
            "explanation": "In this chapter, \"Devotion\" means deep, steadfast loyalty, dedication, and affectionate love.",
            "visualClueEmoji": "💖",
            "points": 60
          }
        ]
      }
    ],
    "9+": [
      {
        "id": "great_expectations-9plus-1",
        "dayNumber": 1,
        "title": "The Foggy Marshes & The Escaped Prisoner",
        "subtitle": "A shivering meeting in the cold Kent churchyard",
        "estReadingMinutes": 15,
        "totalWordCount": 820,
        "summary": "Young orphan Pip visits his parents' gravestones on the misty Kent marshes, where a desperate escaped convict in leg irons terrifies him into promising a blacksmith's file and food.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-9plus-1",
            "title": "The Foggy Marshes & The Escaped Prisoner",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "marsh_mist",
            "caption": "Grey fog rolls over the lonely churchyard as an escaped prisoner emerges from the marsh weeds!",
            "characterAvatars": [
              {
                "name": "Pip",
                "emoji": "👦",
                "speech": "Please don't hurt me, sir! I will bring you food!",
                "position": "left"
              },
              {
                "name": "Magwitch",
                "emoji": "⛓️",
                "speech": "Bring me a blacksmith's file and a pork pie by dawn!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge1",
                "x": 30,
                "y": 55,
                "label": "Rusty Leg Irons",
                "icon": "⛓️",
                "soundEffect": "bounce",
                "funFact": "The convict had escaped from the prison hulks floating on the river Thames!",
                "action": "bounce"
              },
              {
                "id": "ge2",
                "x": 70,
                "y": 40,
                "label": "Misty Gravestones",
                "icon": "🪦",
                "soundEffect": "magic",
                "funFact": "Pip traced his parents' names in stone because he never saw their portraits.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Among the Cold Tombstones",
            "paragraphs": [
              "My father's family name being Pirrip, and my christian name Philip, my infant tongue could formulate nothing more explicit than Pip.",
              "The bleak marshes formed a gloomy perimeter where the river wound out toward the sea under a leaden winter sky. I lingered by the solitary tombstones in solemn contemplation.",
              "Without warning, an escaped convict, limping painfully in rusted fetters and soaked in marsh mud, seized me by the chin and demanded utter silence."
            ],
            "dialogueBites": [
              {
                "speaker": "Magwitch",
                "text": "Hold your noise or I'll cut your throat this instant!",
                "avatarEmoji": "⛓️",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "Oh, please do not hurt me, sir! I live at the forge!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-9plus-1-p1",
              "question": "Who startled young Pip among the damp churchyard tombstones?",
              "options": [
                "A cheerful village baker delivering warm loaves of bread",
                "An escaped convict in ragged grey clothes and heavy leg irons",
                "A royal naval officer carrying a brass telescope"
              ],
              "correctInsightIndex": 1,
              "insight": "A frightening encounter on the lonely marshes began Pip's life journey!",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "A Secret Promise",
            "paragraphs": [
              "The famished outcast ravenously swallowed the wretched scrap of stale bread he emptied from my pocket.",
              "He extracted from my terror a solemn pledge to deliver an iron rasp from Joe Gargery's blacksmith shop alongside substantial nourishment before daybreak.",
              "Terrified by his harrowing threats, I hurried home across the desolate marshlands as the church bell tolled in the gathering dark."
            ],
            "dialogueBites": [
              {
                "speaker": "Magwitch",
                "text": "You bring me that file and that wittles tomorrow dawn, or your heart will be roasted!",
                "avatarEmoji": "⛓️",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "I swear on my honour, sir, I shall return at sunrise!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Theft in the Larder",
            "paragraphs": [
              "The domestic domain of Mrs. Joe Gargery was ruled with severe discipline, tempered solely by the tender, childlike benevolence of Joe the blacksmith.",
              "Under cover of dawn's first grey glimmer, I purloined an iron file from the forge and purloined a hearty pork pie from the festive Christmas larder.",
              "Every wooden floorboard seemed to cry out 'Stop thief!' as I sprinted through the blinding marsh mist toward the shivering outcast."
            ],
            "dialogueBites": [
              {
                "speaker": "Joe",
                "text": "Have some more gravy, Pip! It will warm your little bones on a frosty night.",
                "avatarEmoji": "👨‍🏭",
                "side": "left"
              },
              {
                "speaker": "Pip",
                "text": "Thank you, dear Joe. You are always so good to me.",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-9plus-1-p3",
              "question": "What food and tool did Pip secretly take from the pantry and forge?",
              "options": [
                "A bowl of porridge, dried oats, and a brass candlestick",
                "Three fresh red apples and a tin box of matches",
                "Bread, cheese, a savoury pork pie, and Joe's blacksmith file"
              ],
              "correctInsightIndex": 2,
              "insight": "Compassion mixed with fear led young Pip to risk severe punishment for a stranger.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Terrified",
            "phonics": "TAIR-uh-fide",
            "definition": "Overcome with extreme, trembling fear.",
            "funExample": "Pip was terrified by the rough man hiding among the marsh reeds.",
            "emoji": "😨"
          },
          {
            "word": "Shivering",
            "phonics": "SHIV-er-ing",
            "definition": "Shaking involuntarily from bitter cold or anxiety.",
            "funExample": "The freezing wind left the boy shivering on the muddy path.",
            "emoji": "🥶"
          },
          {
            "word": "Churchyard",
            "phonics": "CHURCH-yard",
            "definition": "An enclosed grassy ground around a church with gravestones.",
            "funExample": "Fog settled low across the quiet country churchyard.",
            "emoji": "⛪"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-9plus-1",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 1!",
          "targetWord": "MARSH",
          "scrambleLetters": [
            "H",
            "S",
            "R",
            "A",
            "M"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-9plus-1-comp",
            "question": "What two critical items did the escaped convict command Pip to bring to him on the marsh?",
            "options": [
              "A pair of leather boots and a warm woollen overcoat",
              "A blacksmith's file to cut his chains and some savoury food",
              "A silver watch and a bottle of writing ink",
              "A wooden rowboat and a brass compass"
            ],
            "correctIndex": 1,
            "explanation": "Magwitch desperately needed a blacksmith's file to cut off his iron fetters and food to stay alive.",
            "visualClueEmoji": "⛓️",
            "points": 60
          },
          {
            "id": "q-great_expectations-9plus-1-vocab",
            "question": "Find a word in the passage that means: \"Overcome with extreme, trembling fear.\".",
            "options": [
              "Young",
              "Orphan",
              "Terrified",
              "Visits"
            ],
            "correctIndex": 2,
            "explanation": "In this chapter, \"Terrified\" means overcome with extreme, trembling fear.",
            "visualClueEmoji": "😨",
            "points": 60
          }
        ]
      },
      {
        "id": "great_expectations-9plus-2",
        "dayNumber": 2,
        "title": "Joe Gargery's Forge & Honest Work",
        "subtitle": "The clinking hammer, glowing coals, and a kind blacksmith",
        "estReadingMinutes": 15,
        "totalWordCount": 820,
        "summary": "Pip grows up as an apprentice to gentle blacksmith Joe Gargery, learning the honest trade of the hammer and anvil amidst glowing sparks and village fellowship.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-9plus-2",
            "title": "Joe Gargery's Forge & Honest Work",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "blacksmith_forge",
            "caption": "Golden sparks shower through the dark forge as Joe Gargery hammers red-hot iron on the anvil!",
            "characterAvatars": [
              {
                "name": "Joe",
                "emoji": "👨‍🏭",
                "speech": "There's one thing you may be sure of, Pip: you and me are best friends!",
                "position": "left"
              },
              {
                "name": "Pip",
                "emoji": "👦",
                "speech": "I love working the bellows and watching the coals glow!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge3",
                "x": 45,
                "y": 60,
                "label": "Glowing Anvil",
                "icon": "🔨",
                "soundEffect": "bounce",
                "funFact": "Joe's heavy iron anvil rang out like a church bell across the village!",
                "action": "bounce"
              },
              {
                "id": "ge4",
                "x": 80,
                "y": 35,
                "label": "Forge Bellows",
                "icon": "🔥",
                "soundEffect": "magic",
                "funFact": "Pumping the leather bellows pumped oxygen to make the coal fire roar!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Song of the Anvil",
            "paragraphs": [
              "Joe Gargery possessed a sweet-tempered, easy-going nature, combined with the muscular stature of Hercules.",
              "Our rustic smithy stood at the village crossroads, its crackling hearth casting radiant amber reflections across the soot-stained rafters.",
              "I served faithfully as Joe's boyish assistant, cherishing his gentle companionship while sparks cascaded around us like shooting stars."
            ],
            "dialogueBites": [
              {
                "speaker": "Joe",
                "text": "Old Clem was a noble smith, Pip, and we shall hammer out honest iron together!",
                "avatarEmoji": "👨‍🏭",
                "side": "left"
              },
              {
                "speaker": "Pip",
                "text": "I want to be your loyal apprentice forever, Joe!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-9plus-2-p1",
              "question": "What was Joe Gargery's honest trade in the village?",
              "options": [
                "He was a merchant sailor navigating trading vessels to France",
                "He was a schoolmaster who taught Latin and geometry",
                "He was a gentle, hardworking blacksmith who hammered iron at the forge"
              ],
              "correctInsightIndex": 2,
              "insight": "Joe's honest craft and humble kindness made him a true moral anchor.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Evenings by the Hearth",
            "paragraphs": [
              "The evening hours afforded us tranquil refuge from Mrs. Joe's perpetual household crusades.",
              "Endeavouring to expand our literary horizons, I inscribed rudimentary sentences upon a slate for Joe's edification.",
              "Joe regarded each chalk squiggle with sublime reverence, praising my nascent scholarship with unadulterated fraternal affection."
            ],
            "dialogueBites": [
              {
                "speaker": "Joe",
                "text": "When you read so uncommon well, Pip, you are an absolute scholar!",
                "avatarEmoji": "👨‍🏭",
                "side": "left"
              },
              {
                "speaker": "Pip",
                "text": "One day I will teach you how to write every single letter, Joe!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Summons to Satis House",
            "paragraphs": [
              "The customary tranquility of our village existence was abruptly shattered by an extraordinary summons.",
              "The eccentric and wealthy recluse, Miss Havisham of Satis House, had signified her desire for a young lad to attend her.",
              "Anticipating grand prospects, Mrs. Joe scrubbed me vigorously, while gentle Joe watched with tender apprehension."
            ],
            "dialogueBites": [
              {
                "speaker": "Mrs. Joe",
                "text": "This is your chance to become a gentleman, Pip! Mind your manners!",
                "avatarEmoji": "👩",
                "side": "left"
              },
              {
                "speaker": "Joe",
                "text": "Be true to yourself, Pip, and remember your old companion Joe.",
                "avatarEmoji": "👨‍🏭",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-9plus-2-p3",
              "question": "Why was Pip invited to Miss Havisham's grand house?",
              "options": [
                "Because the reclusive wealthy lady wanted a young boy to visit and play",
                "Because she needed someone to chop firewood in her courtyard",
                "Because she wanted to buy Joe's iron anvil for her garden"
              ],
              "correctInsightIndex": 0,
              "insight": "An invitation to Satis House set Pip on a path that changed his whole life.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Blacksmith",
            "phonics": "BLAK-smith",
            "definition": "A craftsman who heats iron in a forge and hammers it into tools.",
            "funExample": "Joe was a noble blacksmith with strong hands and a gentle heart.",
            "emoji": "👨‍🏭"
          },
          {
            "word": "Anvil",
            "phonics": "AN-vil",
            "definition": "A heavy, solid iron block with a flat top on which hot metal is hammered.",
            "funExample": "The hammer struck the red horseshoe upon the sturdy anvil.",
            "emoji": "🔨"
          },
          {
            "word": "Contentment",
            "phonics": "kun-TENT-munt",
            "definition": "A peaceful state of calm happiness and satisfaction with one's life.",
            "funExample": "Working beside Joe filled the rustic cottage with quiet contentment.",
            "emoji": "😊"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-9plus-2",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 2!",
          "targetWord": "FORGE",
          "scrambleLetters": [
            "E",
            "G",
            "R",
            "O",
            "F"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-9plus-2-comp",
            "question": "Which two letters did kind blacksmith Joe proudly identify on Pip's writing slate?",
            "options": [
              "The letters 'A' and 'B' because they were at the front of the book",
              "The letters 'P' and 'I' because they spelled Pip",
              "The letters 'J' and 'O' because they spelled his name",
              "The letters 'X' and 'Z' because they looked like crossed swords"
            ],
            "correctIndex": 2,
            "explanation": "Joe proudly pointed out 'J' and 'O', saying they made up his own cheerful name.",
            "visualClueEmoji": "📝",
            "points": 60
          },
          {
            "id": "q-great_expectations-9plus-2-vocab",
            "question": "Find a word in the passage that means: \"A craftsman who heats iron in a forge and hammers it into tools.\".",
            "options": [
              "Blacksmith",
              "Grows",
              "Apprentice",
              "Gentle"
            ],
            "correctIndex": 0,
            "explanation": "In this chapter, \"Blacksmith\" means a craftsman who heats iron in a forge and hammers it into tools.",
            "visualClueEmoji": "👨‍🏭",
            "points": 60
          }
        ]
      },
      {
        "id": "great_expectations-9plus-3",
        "dayNumber": 3,
        "title": "Satis House & The Stopped Clocks",
        "subtitle": "A dusty mansion where all the clocks stopped at twenty to nine",
        "estReadingMinutes": 15,
        "totalWordCount": 820,
        "summary": "Pip enters gloomy Satis House and meets elderly Miss Havisham, who sits frozen in time in her yellowed bridal dress amidst cobwebs and stopped clocks.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-9plus-3",
            "title": "Satis House & The Stopped Clocks",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "satis_house",
            "caption": "Miss Havisham sits motionless by candlelight in her faded wedding gown surrounded by cobwebs!",
            "characterAvatars": [
              {
                "name": "Miss Havisham",
                "emoji": "👰",
                "speech": "Do you know what I have in here? Broken hearts!",
                "position": "right"
              },
              {
                "name": "Pip",
                "emoji": "👦",
                "speech": "Everything in this room is withered and yellowed with dust.",
                "position": "left"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge5",
                "x": 40,
                "y": 45,
                "label": "Stopped Watch",
                "icon": "🕰️",
                "soundEffect": "bounce",
                "funFact": "Every clock in Satis House was stopped at precisely twenty minutes to nine!",
                "action": "bounce"
              },
              {
                "id": "ge6",
                "x": 75,
                "y": 60,
                "label": "Bridal Veil",
                "icon": "👰",
                "soundEffect": "magic",
                "funFact": "Miss Havisham never took off her wedding veil after being jilted on her wedding day.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Behind the Iron Bars",
            "paragraphs": [
              "The exterior of Satis House presented an austere, fortress-like aspect, its courtyard overgrown and its fenestration barred against intrusion.",
              "The haughty young ward Estella admitted me with chilling condescension, her delicate beauty contrasting sharply with her contemptuous demeanor.",
              "We navigated subterranean corridors shrouded in perpetual twilight, ascending toward the mysterious sanctuary of the mistress of the house."
            ],
            "dialogueBites": [
              {
                "speaker": "Estella",
                "text": "Don't loiter, boy! Miss Havisham is waiting for you in her dressing room.",
                "avatarEmoji": "👧",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "Yes, miss. I am coming right behind you.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-9plus-3-p1",
              "question": "What barred the windows and courtyard of Satis House?",
              "options": [
                "Heavy iron bars and walled-up bricks that shut out daylight",
                "Bright green climbing roses and ivy trellises",
                "White painted wooden shutters decorated with brass bells"
              ],
              "correctInsightIndex": 0,
              "insight": "The dark mansion shut out the warmth and vitality of the outside world.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Lady in the Wedding Gown",
            "paragraphs": [
              "Seated before an ornate toilet table draped in aged lace sat Miss Havisham, attired in the spectral finery of a bride.",
              "The lavish fabrics had decayed into brittle, parchment-like yellow, mirroring the withered countenance of their solitary wearer.",
              "She inhabited a monument to devastated hope, her trembling fingers clutching at a heart irrevocably fractured decades before."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Havisham",
                "text": "Look at me, boy! Does it frighten you to see a woman who has not seen the sun since you were born?",
                "avatarEmoji": "👰",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "It is very strange and sad, ma'am, but I am not afraid.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Twenty Minutes to Nine",
            "paragraphs": [
              "The temporal dimension had been systematically frozen within those desolate walls, each chronometer immovably fixed at eight-forty.",
              "Upon that catastrophic hour, her anticipated matrimonial bliss had evaporated, casting her into perpetual mourning.",
              "Across the threshold, the decomposing bridal feast lay under shroud-like cobwebs, an eerie testament to ruined vows."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Havisham",
                "text": "Call Estella! Let me watch you two play cards together!",
                "avatarEmoji": "👰",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "I shall call her at once, ma'am.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-9plus-3-p3",
              "question": "At what exact minute were all the clocks in Satis House permanently stopped?",
              "options": [
                "Exactly twelve o'clock midnight",
                "Twenty minutes to nine",
                "Half past three in the afternoon"
              ],
              "correctInsightIndex": 1,
              "insight": "Miss Havisham trapped herself in the very hour of her bitter heartbreak.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Cobweb",
            "phonics": "KOB-web",
            "definition": "A dusty, tangled web spun by a spider, often found in old houses.",
            "funExample": "Heavy grey cobwebs draped across the ornate dressing mirror.",
            "emoji": "🕸️"
          },
          {
            "word": "Gloomy",
            "phonics": "GLOO-mee",
            "definition": "Dark, shadowy, and causing feelings of sadness and mystery.",
            "funExample": "The gloomy hallways of Satis House were lit only by wax candles.",
            "emoji": "🕯️"
          },
          {
            "word": "Solitary",
            "phonics": "SOL-uh-tair-ee",
            "definition": "Existing alone; lonely and separated from other people.",
            "funExample": "She lived a solitary life locked away behind iron gates.",
            "emoji": "🚪"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-9plus-3",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 3!",
          "targetWord": "CANDLE",
          "scrambleLetters": [
            "E",
            "L",
            "D",
            "N",
            "A",
            "C"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-9plus-3-comp",
            "question": "What had happened to Miss Havisham's bridal gown after years of living in the dark?",
            "options": [
              "It had faded and yellowed like withered autumn leaves",
              "It had turned bright crimson red like a ruby",
              "It was bleached sparkling clean every morning",
              "It was dyed dark purple by the house servants"
            ],
            "correctIndex": 0,
            "explanation": "The text states that her silk dress had aged, faded, and yellowed over the decades.",
            "visualClueEmoji": "👰",
            "points": 60
          },
          {
            "id": "q-great_expectations-9plus-3-vocab",
            "question": "Find a word in the passage that means: \"A dusty, tangled web spun by a spider, often found in old houses.\".",
            "options": [
              "Enters",
              "Gloomy",
              "Satis",
              "Cobweb"
            ],
            "correctIndex": 3,
            "explanation": "In this chapter, \"Cobweb\" means a dusty, tangled web spun by a spider, often found in old houses.",
            "visualClueEmoji": "🕸️",
            "points": 60
          }
        ]
      },
      {
        "id": "great_expectations-9plus-4",
        "dayNumber": 4,
        "title": "Estella & The Game of Cards",
        "subtitle": "Beggar My Neighbour and the pangs of wounded pride",
        "estReadingMinutes": 15,
        "totalWordCount": 820,
        "summary": "Pip plays cards with the haughty Estella, who mocks his coarse hands and thick boots, sparking in Pip a painful longing to become an educated gentleman.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-9plus-4",
            "title": "Estella & The Game of Cards",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "satis_house",
            "caption": "Estella deals playing cards with cold disdain while Pip looks self-consciously at his rough boots!",
            "characterAvatars": [
              {
                "name": "Estella",
                "emoji": "👧",
                "speech": "He calls the knaves, Jacks, this boy! And what coarse hands he has!",
                "position": "right"
              },
              {
                "name": "Pip",
                "emoji": "👦",
                "speech": "Her words stung my heart, and I wished I were not so common.",
                "position": "left"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge7",
                "x": 45,
                "y": 55,
                "label": "Playing Cards",
                "icon": "🃏",
                "soundEffect": "bounce",
                "funFact": "Beggar My Neighbour was a simple Victorian card game won by capturing picture cards!",
                "action": "bounce"
              },
              {
                "id": "ge8",
                "x": 75,
                "y": 40,
                "label": "Rough Boots",
                "icon": "👢",
                "soundEffect": "magic",
                "funFact": "Pip's thick working boots were made for forge mud, not polished mansion floors!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Beggar My Neighbour",
            "paragraphs": [
              "The card table became an arena of psychological torment presided over by the vindictive matriarch.",
              "Miss Havisham took perverse delight in watching Estella exercise her burgeoning power over an impressionable rustic youth.",
              "With effortless dexterity, Estella stripped me of my cards, reinforcing the vast social chasm that separated us."
            ],
            "dialogueBites": [
              {
                "speaker": "Miss Havisham",
                "text": "Well, boy! What do you think of her? Is she pretty?",
                "avatarEmoji": "👰",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "I think she is very pretty, ma'am, and very proud, and very insulting.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-9plus-4-p1",
              "question": "What card game did Pip and Estella play under Miss Havisham's watchful gaze?",
              "options": [
                "Go Fish on the carpet",
                "Beggar My Neighbour",
                "Snap with picture cards"
              ],
              "correctInsightIndex": 1,
              "insight": "A simple card game revealed the deep social divide between the two children.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Coarse Hands and Thick Boots",
            "paragraphs": [
              "Estella mercilessly catalogued my provincial deficiencies, holding up my nomenclature and rustic apparel to biting ridicule.",
              "The venom in her words inflicted a lasting wound upon my innocent self-esteem, breeding a bitter discontent with the forge.",
              "My rough blacksmith hands, formerly symbols of honest industry, suddenly appeared to me as badges of low social degradation."
            ],
            "dialogueBites": [
              {
                "speaker": "Estella",
                "text": "You may put down that greasy bread, boy! You are far too coarse to sit near me.",
                "avatarEmoji": "👧",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "I did not choose my hands, miss, but I will wash them cleaner next time.",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Tears in the Courtyard",
            "paragraphs": [
              "Banished to the flagstoned courtyard, I endured Estella's cruelty with silent mortification before surrendering to uncontrollable weeping.",
              "Her disdain acted as a potent catalyst, igniting an obsessive yearning to transcend my humble blacksmith lineage.",
              "The poison of social ambition had entered my soul, forever altering my relationship with the tranquil simplicity of the forge."
            ],
            "dialogueBites": [
              {
                "speaker": "Estella",
                "text": "Why don't you cry again, boy? You cried like a baby in the yard!",
                "avatarEmoji": "👧",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "I shall not give you the pleasure of seeing me cry ever again!",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-9plus-4-p3",
              "question": "What did Estella mock about Pip that made him feel deeply ashamed?",
              "options": [
                "His bright red hair and tall height",
                "His ability to whistle church hymns",
                "His coarse blacksmith hands, thick village boots, and calling knaves Jacks"
              ],
              "correctInsightIndex": 2,
              "insight": "Wounded pride ignited Pip's desire to become an educated gentleman.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Haughty",
            "phonics": "HAW-tee",
            "definition": "Arrogantly proud and looking down upon others as inferior.",
            "funExample": "Estella tossed her dark hair with a haughty little laugh.",
            "emoji": "👑"
          },
          {
            "word": "Disdainful",
            "phonics": "dis-DAYN-ful",
            "definition": "Showing a feeling of contempt or lack of respect for someone.",
            "funExample": "Her disdainful glance made Pip feel clumsy and embarrassed.",
            "emoji": "😒"
          },
          {
            "word": "Knave",
            "phonics": "NAYV",
            "definition": "An old-fashioned card name for the Jack in a deck of playing cards.",
            "funExample": "He called the knaves Jacks, much to her amusement.",
            "emoji": "🃏"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-9plus-4",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 4!",
          "targetWord": "ESTELLA",
          "scrambleLetters": [
            "A",
            "L",
            "L",
            "E",
            "T",
            "S",
            "E"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-9plus-4-comp",
            "question": "Why did Pip hide behind the stone wall in the courtyard and weep bitter tears?",
            "options": [
              "Because he lost his favourite marble in the courtyard drain",
              "Because Miss Havisham refused to let him taste the wedding cake",
              "Because he was frightened of the guard dogs in the brewery",
              "Because Estella's mocking words about his coarse hands and boots hurt his pride deeply"
            ],
            "correctIndex": 3,
            "explanation": "Estella's cruel ridicule of his humble background deeply wounded Pip's self-esteem.",
            "visualClueEmoji": "😢",
            "points": 60
          },
          {
            "id": "q-great_expectations-9plus-4-vocab",
            "question": "Find a word in the passage that means: \"Arrogantly proud and looking down upon others as inferior.\".",
            "options": [
              "Plays",
              "Haughty",
              "Cards",
              "Estella"
            ],
            "correctIndex": 1,
            "explanation": "In this chapter, \"Haughty\" means arrogantly proud and looking down upon others as inferior.",
            "visualClueEmoji": "👑",
            "points": 60
          }
        ]
      },
      {
        "id": "great_expectations-9plus-5",
        "dayNumber": 5,
        "title": "Great Expectations & Mr. Jaggers",
        "subtitle": "A mysterious fortune and a departure from the forge",
        "estReadingMinutes": 15,
        "totalWordCount": 820,
        "summary": "The imposing London lawyer Mr. Jaggers arrives at the village inn to announce that an anonymous benefactor has bestowed upon Pip a handsome fortune and great expectations.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-9plus-5",
            "title": "Great Expectations & Mr. Jaggers",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "marsh_mist",
            "caption": "Mr. Jaggers waves his heavy pocket watch as he announces Pip's sudden fortune to Joe and the villagers!",
            "characterAvatars": [
              {
                "name": "Mr. Jaggers",
                "emoji": "⚖️",
                "speech": "Pip will be brought up as a gentleman of great expectations!",
                "position": "right"
              },
              {
                "name": "Joe",
                "emoji": "👨‍🏭",
                "speech": "Pip will always be welcome at my forge, fortune or no fortune!",
                "position": "left"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge9",
                "x": 40,
                "y": 50,
                "label": "Gold Pocket Watch",
                "icon": "🕰️",
                "soundEffect": "bounce",
                "funFact": "Mr. Jaggers constantly polished his spectacles and checked his heavy gold watch!",
                "action": "bounce"
              },
              {
                "id": "ge10",
                "x": 75,
                "y": 35,
                "label": "Scented Soap",
                "icon": "🧼",
                "soundEffect": "magic",
                "funFact": "Jaggers washed his hands with carbolic soap after every legal client to wash away guilt!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Stranger at the Three Jolly Bargemen",
            "paragraphs": [
              "Our customary evening repose at the village hostelry was interrupted by the dramatic entrance of Mr. Jaggers of Little Britain.",
              "Exuding an intimidating aura of forensic precision, the eminent London attorney demanded an immediate private audience with Joe and myself.",
              "We withdrew to our humble parlour, where the ticking of our clock seemed suddenly magnified in the tense, expectant quiet."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Jaggers",
                "text": "I have an extraordinary communication to make on behalf of a secret patron!",
                "avatarEmoji": "⚖️",
                "side": "right"
              },
              {
                "speaker": "Joe",
                "text": "Speak on, sir! Pip and I have no secrets between us.",
                "avatarEmoji": "👨‍🏭",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-9plus-5-p1",
              "question": "Who arrived at the village inn with extraordinary news about Pip?",
              "options": [
                "The postman carrying a letter from the King",
                "A wandering clockmaker looking for broken gears",
                "Mr. Jaggers, the formidable London lawyer with bushy eyebrows"
              ],
              "correctInsightIndex": 2,
              "insight": "A high-powered attorney brought news that altered Pip's entire destiny.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Conditions of the Fortune",
            "paragraphs": [
              "Mr. Jaggers formally proclaimed that an immense inheritance awaited me, liberating me from the menial drudgery of the smithy.",
              "The stipulations were absolute: I was bound to retain my diminutive name 'Pip' and refrain from any inquiry regarding my anonymous benefactor.",
              "My inflamed imagination instantly attributed this miraculous windfall to the eccentric dowager of Satis House."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Jaggers",
                "text": "You must always bear the name of Pip, and you must never seek to discover your patron.",
                "avatarEmoji": "⚖️",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "I promise faithfully, sir! When do I depart for London?",
                "avatarEmoji": "👦",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Farewell to the Forge",
            "paragraphs": [
              "Joe Gargery's moral grandeur was never more magnificent than when he spurned Jaggers' patronizing offer of monetary compensation.",
              "His love was pure, devoid of mercenary calculation, exposing the superficiality of the gentlemanly status I so desperately craved.",
              "As the London post-coach rattled across the Kentish turnpike, I experienced my first bitter twinge of remorse for forsaking the loyal blacksmith."
            ],
            "dialogueBites": [
              {
                "speaker": "Joe",
                "text": "God bless you, dear Pip! May you prosper in London, and never forget old Joe.",
                "avatarEmoji": "👨‍🏭",
                "side": "left"
              },
              {
                "speaker": "Pip",
                "text": "Goodbye, Joe! I will write to you often!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-9plus-5-p3",
              "question": "How did Joe Gargery respond when offered money for releasing Pip's apprenticeship?",
              "options": [
                "He proudly refused every penny, declaring that love cannot be bought with gold",
                "He happily pocketed the money to buy new forge tools",
                "He asked for double the amount before saying farewell"
              ],
              "correctInsightIndex": 0,
              "insight": "Joe's selfless love showed that true goodness cannot be purchased with money.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Benefactor",
            "phonics": "BEN-uh-fak-tur",
            "definition": "A generous person who gives financial help or gifts to support someone.",
            "funExample": "Pip's mysterious benefactor paid for all his gentleman's education.",
            "emoji": "🎁"
          },
          {
            "word": "Fortune",
            "phonics": "FOR-chun",
            "definition": "A large sum of money or riches that brings wealth and security.",
            "funExample": "An unexpected fortune lifted Pip out of his humble blacksmith life.",
            "emoji": "💰"
          },
          {
            "word": "Guardian",
            "phonics": "GAR-dee-un",
            "definition": "An appointed adult responsible for the welfare and property of a youth.",
            "funExample": "Mr. Jaggers was named as Pip's legal guardian in London.",
            "emoji": "⚖️"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-9plus-5",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 5!",
          "targetWord": "FORTUNE",
          "scrambleLetters": [
            "E",
            "N",
            "U",
            "T",
            "R",
            "O",
            "F"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-9plus-5-comp",
            "question": "What two strict conditions were placed upon Pip receiving his fortune?",
            "options": [
              "He must live in Satis House and marry Estella within three years",
              "He must wear black coats every day and learn how to fence",
              "He must always keep the name Pip and never ask who his secret benefactor was",
              "He must give half his yearly allowance to the village churchyard"
            ],
            "correctIndex": 2,
            "explanation": "Mr. Jaggers explicitly instructed that Pip must keep his name and never seek the identity of his patron.",
            "visualClueEmoji": "⚖️",
            "points": 60
          },
          {
            "id": "q-great_expectations-9plus-5-vocab",
            "question": "Find a word in the passage that means: \"A generous person who gives financial help or gifts to support someone.\".",
            "options": [
              "Imposing",
              "London",
              "Lawyer",
              "Benefactor"
            ],
            "correctIndex": 3,
            "explanation": "In this chapter, \"Benefactor\" means a generous person who gives financial help or gifts to support someone.",
            "visualClueEmoji": "🎁",
            "points": 60
          }
        ]
      },
      {
        "id": "great_expectations-9plus-6",
        "dayNumber": 6,
        "title": "London Streets & Herbert Pocket",
        "subtitle": "Learning gentlemanly manners and discovering true friendship",
        "estReadingMinutes": 15,
        "totalWordCount": 820,
        "summary": "In the bustling streets of London, Pip rooms with warmhearted Herbert Pocket, who teaches him city etiquette and becomes his dearest, most loyal companion.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-9plus-6",
            "title": "London Streets & Herbert Pocket",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "london_river",
            "caption": "Pip and Herbert Pocket walk along the lively banks of the River Thames in Victorian London!",
            "characterAvatars": [
              {
                "name": "Herbert",
                "emoji": "🧑",
                "speech": "We shall call you Handel, Pip, in honour of the harmonious blacksmith!",
                "position": "right"
              },
              {
                "name": "Pip",
                "emoji": "🎩",
                "speech": "London is so noisy and vast, but your friendship makes me feel at home!",
                "position": "left"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge11",
                "x": 35,
                "y": 55,
                "label": "Thames Barges",
                "icon": "⛵",
                "soundEffect": "bounce",
                "funFact": "Wooden sailing barges brought coal and vegetables up the river Thames right into London!",
                "action": "bounce"
              },
              {
                "id": "ge12",
                "x": 70,
                "y": 40,
                "label": "Teacup Etiquette",
                "icon": "☕",
                "soundEffect": "magic",
                "funFact": "Herbert gently showed Pip never to put his dinner knife into his mouth!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Barnard's Inn and A Familiar Face",
            "paragraphs": [
              "The metropolitan reality of London dispelled my romantic illusions, greeting me with squalid alleyways and dismal overcast skies.",
              "Barnard's Inn stood as a melancholy enclosure of ancient brick tenements, within which Herbert Pocket provided a beacon of hospitality.",
              "Our mutual recognition of that boyhood sparring match at Satis House dissolved all awkwardness into exuberant laughter."
            ],
            "dialogueBites": [
              {
                "speaker": "Herbert",
                "text": "Welcome to London, Pip! Have some fresh strawberries while we unpack your trunks!",
                "avatarEmoji": "🧑",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "You are the pale gentleman from Satis House! What a wonderful coincidence!",
                "avatarEmoji": "🎩",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-9plus-6-p1",
              "question": "Who greeted Pip at Barnard's Inn as his new London roommate?",
              "options": [
                "Herbert Pocket, the pale young gentleman from Satis House",
                "Uncle Pumblechook with a sack of grain",
                "Mr. Jaggers' chief clerk Mr. Wemmick"
              ],
              "correctInsightIndex": 0,
              "insight": "A boyhood opponent blossomed into Pip's truest and most generous friend.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Lessons in Table Manners",
            "paragraphs": [
              "Herbert possessed that innate nobility of spirit that no superficial veneer of wealth could ever fabricate.",
              "With infinite delicacy, he corrected my rustic table habits, ensuring I would navigate high society with confidence and grace.",
              "By christening me 'Handel', he honored my blacksmith heritage while welcoming me into cultivated gentlemanly society."
            ],
            "dialogueBites": [
              {
                "speaker": "Herbert",
                "text": "Always rest your knife on the plate, Handel, and let your fork do the honours!",
                "avatarEmoji": "🧑",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "Thank you, Herbert. You teach me with such gentle kindness.",
                "avatarEmoji": "🎩",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Joe's Awkward Visit",
            "paragraphs": [
              "Joe's pilgrimage to London unmasked the corrupting influence that rapid social elevation had wrought upon my character.",
              "Conscious of fashionable appearances, I shrank from Joe's clumsy manners and provincial diction with inexcusable arrogance.",
              "Joe departed with dignified sorrow, reminding me that the forge was his proper place, while I stood consumed by shame and remorse."
            ],
            "dialogueBites": [
              {
                "speaker": "Joe",
                "text": "You and me is not two figures to be together in London, Pip. My place is at the forge.",
                "avatarEmoji": "👨‍🏭",
                "side": "left"
              },
              {
                "speaker": "Pip",
                "text": "Oh Joe, forgive me... My pride blinded me to the best friend I ever had.",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-9plus-6-p3",
              "question": "Why did Pip feel guilty and ashamed after Joe Gargery visited him in London?",
              "options": [
                "Because Joe forgot to bring Pip's favourite warm scarf",
                "Because Pip acted proud and snobbish instead of greeting Joe with warm love",
                "Because Herbert refused to allow Joe to sit at the table"
              ],
              "correctInsightIndex": 1,
              "insight": "Pip realized that newfound wealth had made him foolishly ashamed of true love.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Bustling",
            "phonics": "BUS-ling",
            "definition": "Full of lively, energetic, and crowded activity.",
            "funExample": "The bustling streets of London were packed with horse carriages and vendors.",
            "emoji": "🏙️"
          },
          {
            "word": "Etiquette",
            "phonics": "ET-i-ket",
            "definition": "The customary code of polite and refined behaviour in society.",
            "funExample": "Herbert kindly instructed Pip in gentlemanly table etiquette.",
            "emoji": "🎩"
          },
          {
            "word": "Lodgings",
            "phonics": "LOJ-ingz",
            "definition": "Rented rooms or living quarters where someone stays temporarily.",
            "funExample": "The two young friends shared cosy lodgings at Barnard's Inn.",
            "emoji": "🛋️"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-9plus-6",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 6!",
          "targetWord": "LONDON",
          "scrambleLetters": [
            "N",
            "O",
            "D",
            "N",
            "O",
            "L"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-9plus-6-comp",
            "question": "What affectionate musical nickname did Herbert Pocket give Pip in honour of his forge background?",
            "options": [
              "Handel, after the composer of 'The Harmonious Blacksmith'",
              "Mozart, because Pip played the parlour violin",
              "Beethoven, after the stormy thunder music",
              "Chopin, because of Pip's delicate handwriting"
            ],
            "correctIndex": 0,
            "explanation": "Herbert nicknamed Pip 'Handel' because Handel composed 'The Harmonious Blacksmith'.",
            "visualClueEmoji": "🎵",
            "points": 60
          },
          {
            "id": "q-great_expectations-9plus-6-vocab",
            "question": "Find a word in the passage that means: \"Full of lively, energetic, and crowded activity.\".",
            "options": [
              "Streets",
              "Bustling",
              "London",
              "Rooms"
            ],
            "correctIndex": 1,
            "explanation": "In this chapter, \"Bustling\" means full of lively, energetic, and crowded activity.",
            "visualClueEmoji": "🏙️",
            "points": 60
          }
        ]
      },
      {
        "id": "great_expectations-9plus-7",
        "dayNumber": 7,
        "title": "The Secret Benefactor Revealed",
        "subtitle": "A stormy midnight, heavy footsteps, and a shocking revelation",
        "estReadingMinutes": 15,
        "totalWordCount": 820,
        "summary": "On a wild, stormy night in London, an aged sailor climbs the stairs to Pip's rooms: it is Magwitch, the escaped convict, revealing that he—not Miss Havisham—is Pip's real benefactor.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-9plus-7",
            "title": "The Secret Benefactor Revealed",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "marsh_mist",
            "caption": "Rain lashes against the window as the weather-beaten convict Magwitch reveals his secret to Pip!",
            "characterAvatars": [
              {
                "name": "Magwitch",
                "emoji": "👴",
                "speech": "Yes, Pip, dear boy! It’s me what made a gentleman out of you!",
                "position": "right"
              },
              {
                "name": "Pip",
                "emoji": "🎩",
                "speech": "You? All my fortune came from an escaped convict?",
                "position": "left"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge13",
                "x": 40,
                "y": 55,
                "label": "Weathered Hands",
                "icon": "🤝",
                "soundEffect": "bounce",
                "funFact": "Magwitch worked twenty hard years sheep-farming in Australia to send his savings to Pip!",
                "action": "bounce"
              },
              {
                "id": "ge14",
                "x": 75,
                "y": 40,
                "label": "Stormy Window",
                "icon": "🌧️",
                "soundEffect": "magic",
                "funFact": "High winds in London tore roofs and blew out street lamps on that fateful night.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "A Knock in the Midnight Gale",
            "paragraphs": [
              "A cataclysmic storm swept across London that November night, howling through the desolate courtyards of the Middle Temple.",
              "The ominous creaking of the stairwell heralded an unexpected visitor ascending through the subterranean shadows.",
              "Illuminating the landing with my flickering taper, I confronted a rugged, leather-skinned mariner whose eyes fixed upon me with piercing intensity."
            ],
            "dialogueBites": [
              {
                "speaker": "Magwitch",
                "text": "Pip, Mr. Pip... Don't you know me, dear boy?",
                "avatarEmoji": "👴",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "Who are you, sir? Why have you come here at this late hour?",
                "avatarEmoji": "🎩",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-9plus-7-p1",
              "question": "Who appeared at Pip's chambers during the violent midnight storm?",
              "options": [
                "Miss Havisham wrapped in a silk travelling cloak",
                "Magwitch, the escaped convict Pip helped on the marshes as a child",
                "Uncle Pumblechook seeking shelter from the rain"
              ],
              "correctInsightIndex": 1,
              "insight": "The past returned in the middle of a tempest to reshape Pip's destiny.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Truth Laid Bare",
            "paragraphs": [
              "With overwhelming paternal pride, the ex-convict Magwitch disclosed that his entire life of exile had been dedicated to elevating me.",
              "The realization shattered my illusions: Miss Havisham was no fairy godmother, and Estella was not destined to be my bride.",
              "All my fashionable splendor had been bought with the sweat and sacrifice of a despised convict who loved me like a son."
            ],
            "dialogueBites": [
              {
                "speaker": "Magwitch",
                "text": "I swore that lonely night on the marshes that the little boy who saved me would be made into a grand gentleman!",
                "avatarEmoji": "👴",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "My fortune... my expectations... they came from you all along!",
                "avatarEmoji": "🎩",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "A Life in Peril",
            "paragraphs": [
              "The gravity of Magwitch's peril silenced every selfish regret; his presence in London was treasonous under penal statutes.",
              "I looked upon this rough, solitary man who had staked his very existence upon my affection with profound compassion.",
              "Forsaking all hopes of fortune, I dedicated every resource to orchestrating his safe passage across the English Channel."
            ],
            "dialogueBites": [
              {
                "speaker": "Magwitch",
                "text": "I've seen my boy, and I can die happy now, whatever happens to me.",
                "avatarEmoji": "👴",
                "side": "right"
              },
              {
                "speaker": "Pip",
                "text": "You must stay hidden in our rooms. Herbert and I will smuggle you safely out of England!",
                "avatarEmoji": "🎩",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-9plus-7-p3",
              "question": "Why was Magwitch in mortal danger by returning to London?",
              "options": [
                "Because he owed money to the London taxi coachmen",
                "Because he had forgotten to renew his travelling passport",
                "Because escaped transportees returning to England faced the death penalty under the law"
              ],
              "correctInsightIndex": 2,
              "insight": "Love led Magwitch to risk everything just to gaze upon his gentleman.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Tempestuous",
            "phonics": "tem-PES-choo-us",
            "definition": "Characterized by violent, stormy, and wild wind and rain.",
            "funExample": "The tempestuous night rattled the wooden shutters of the apartment.",
            "emoji": "🌪️"
          },
          {
            "word": "Gratitude",
            "phonics": "GRAT-i-tood",
            "definition": "A strong feeling of thankfulness and appreciation for kindness received.",
            "funExample": "Magwitch felt lifelong gratitude to the little boy who fed him on the marshes.",
            "emoji": "🙏"
          },
          {
            "word": "Convict",
            "phonics": "KON-vikt",
            "definition": "A person found guilty of a crime and sentenced to serve prison time.",
            "funExample": "The former convict risked his life by returning to England.",
            "emoji": "⛓️"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-9plus-7",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 7!",
          "targetWord": "MAGWITCH",
          "scrambleLetters": [
            "H",
            "C",
            "T",
            "I",
            "W",
            "G",
            "A",
            "M"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-9plus-7-comp",
            "question": "How did Magwitch earn the fortune that paid for Pip's gentlemanly education?",
            "options": [
              "By discovering a pirate treasure chest in the English Channel",
              "By winning horse races at the royal fair in Epsom",
              "By inheriting an old silver mine in the Scottish Highlands",
              "By working hard for twenty years as a successful sheep-farmer in Australia"
            ],
            "correctIndex": 3,
            "explanation": "Magwitch endured decades of harsh labor in Australia, sending all his earnings to Mr. Jaggers for Pip.",
            "visualClueEmoji": "🐑",
            "points": 60
          },
          {
            "id": "q-great_expectations-9plus-7-vocab",
            "question": "Find a word in the passage that means: \"Characterized by violent, stormy, and wild wind and rain.\".",
            "options": [
              "Tempestuous",
              "Wild",
              "Stormy",
              "Night"
            ],
            "correctIndex": 0,
            "explanation": "In this chapter, \"Tempestuous\" means characterized by violent, stormy, and wild wind and rain.",
            "visualClueEmoji": "🌪️",
            "points": 60
          }
        ]
      },
      {
        "id": "great_expectations-9plus-8",
        "dayNumber": 8,
        "title": "Loyalty, Forgiveness & True Nobility",
        "subtitle": "A river escape, a peaceful farewell, and the forge of true love",
        "estReadingMinutes": 15,
        "totalWordCount": 820,
        "summary": "Pip attempts to rescue Magwitch by rowing down the Thames. Though captured, Magwitch dies peacefully knowing Pip loves him, and Pip returns home to the true nobility of Joe and Biddy.",
        "visualScenes": [
          {
            "id": "scene-great_expectations-9plus-8",
            "title": "Loyalty, Forgiveness & True Nobility",
            "backgroundGradient": "from-slate-950 via-stone-900 to-indigo-950",
            "illustrationType": "london_river",
            "caption": "Pip holds Magwitch's hand tenderly as sunset gilds the tranquil waters of the River Thames!",
            "characterAvatars": [
              {
                "name": "Magwitch",
                "emoji": "👴",
                "speech": "God bless you, dear boy! You've never left my side!",
                "position": "left"
              },
              {
                "name": "Pip",
                "emoji": "🎩",
                "speech": "I will never leave you, my dear friend. You are at peace now.",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "ge15",
                "x": 45,
                "y": 60,
                "label": "Rowboat on the River",
                "icon": "🚣",
                "soundEffect": "bounce",
                "funFact": "Pip and Herbert rowed miles every day to train for their daring river escape!",
                "action": "bounce"
              },
              {
                "id": "ge16",
                "x": 75,
                "y": 35,
                "label": "Golden Sunset",
                "icon": "🌅",
                "soundEffect": "magic",
                "funFact": "The sunset over the marshes reminded Pip of the quiet forge where his journey began.",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Race on the River Thames",
            "paragraphs": [
              "Our desperate bid for freedom unfolded upon the murky currents of the Thames amid dense river traffic and swirling tides.",
              "Just as salvation seemed assured, the police craft surged forward, precipitating a violent aquatic struggle that ended our hopes.",
              "Though captured and mortally wounded, Magwitch harboured no bitterness, resting peacefully in the warmth of our unbreakable bond."
            ],
            "dialogueBites": [
              {
                "speaker": "Magwitch",
                "text": "Don't weep for me, dear boy. I am happier here with you than I ever was on the ranches.",
                "avatarEmoji": "👴",
                "side": "left"
              },
              {
                "speaker": "Pip",
                "text": "I will never forsake you, Magwitch, as long as I draw breath.",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-9plus-8-p1",
              "question": "How did Pip and Herbert attempt to help Magwitch escape to Europe?",
              "options": [
                "By disguising him as a postman on a mail coach to Dover",
                "By hiding him in a flour barrel inside a bakery wagon",
                "By rowing a small wooden boat down the River Thames to meet a Hamburg steamer"
              ],
              "correctInsightIndex": 2,
              "insight": "Pip risked everything to save the man who had sacrificed so much for him.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "A Peaceful Passing",
            "paragraphs": [
              "In the somber quietude of the prison hospital, I remained his steadfast comforter, cherishing his spirit of sacrifice.",
              "I bestowed upon him the ultimate solace by revealing that his daughter survived in beauty and grace, cherished by the boy he had fostered.",
              "He expired with an expression of sublime contentment, leaving me deeply humbled by the majesty of his selfless love."
            ],
            "dialogueBites": [
              {
                "speaker": "Pip",
                "text": "Dear Magwitch, your lost child is living. She is a beautiful lady, and I love her.",
                "avatarEmoji": "🎩",
                "side": "right"
              },
              {
                "speaker": "Magwitch",
                "text": "God bless you... my faithful, darling boy...",
                "avatarEmoji": "👴",
                "side": "left"
              }
            ]
          },
          {
            "pageNumber": 3,
            "pageTitle": "Return to the Anvil",
            "paragraphs": [
              "When fever brought me to the brink of the grave, it was Joe's magnificent, unmercenary love that restored me to life.",
              "Having discharged all my liabilities from his own hard-won savings, he quietly slipped away, reluctant to intrude upon my recovery.",
              "I walked back to the Kentish forge with a contrite heart, recognizing at last that true gentility resides solely in the virtues of the soul."
            ],
            "dialogueBites": [
              {
                "speaker": "Joe",
                "text": "Pip, old chap, you’re well again! And we are ever the best of friends!",
                "avatarEmoji": "👨‍🏭",
                "side": "left"
              },
              {
                "speaker": "Pip",
                "text": "Dear Joe, forgive me for ever straying from your loving hearth.",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-great_expectations-9plus-8-p3",
              "question": "Who nursed Pip through his fever and paid off all his debts in London?",
              "options": [
                "Dear Joe Gargery, the gentle blacksmith",
                "Mr. Jaggers from his office",
                "Uncle Pumblechook from the corn chandler shop"
              ],
              "correctInsightIndex": 0,
              "insight": "Joe's selfless love showed Pip what true gentlemanly nobility really means.",
              "rewardKP": 30
            }
          }
        ],
        "vocabList": [
          {
            "word": "Devotion",
            "phonics": "dih-VOH-shun",
            "definition": "Deep, steadfast loyalty, dedication, and affectionate love.",
            "funExample": "Pip stayed beside the sick old man with unwavering devotion.",
            "emoji": "💖"
          },
          {
            "word": "Reconciliation",
            "phonics": "rek-un-sil-ee-AY-shun",
            "definition": "The restoration of friendly relations and harmony after conflict or distance.",
            "funExample": "Pip wept with joy at his tearful reconciliation with kind blacksmith Joe.",
            "emoji": "🤝"
          },
          {
            "word": "Noble",
            "phonics": "NOH-bul",
            "definition": "Having high moral qualities like courage, generosity, and honour.",
            "funExample": "Joe was a truly noble man whose worth came from his loving heart.",
            "emoji": "👑"
          }
        ],
        "microChallenge": {
          "id": "mc-great_expectations-9plus-8",
          "title": "Word Scramble Challenge",
          "type": "word_scramble",
          "prompt": "Unscramble the secret word from Day 8!",
          "targetWord": "NOBILITY",
          "scrambleLetters": [
            "Y",
            "T",
            "I",
            "L",
            "I",
            "B",
            "O",
            "N"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-great_expectations-9plus-8-comp",
            "question": "What profound moral lesson did Pip finally learn after his journey of great expectations?",
            "options": [
              "It is always best to stay away from rivers on foggy mornings",
              "True greatness and nobility come from an honest, loving heart, not money or fancy clothes",
              "Only people who own big mansions in London can be happy",
              "A blacksmith should never learn how to read or write"
            ],
            "correctIndex": 1,
            "explanation": "Pip realized that Joe Gargery's humble, loyal love was far more noble than superficial wealth.",
            "visualClueEmoji": "💖",
            "points": 60
          },
          {
            "id": "q-great_expectations-9plus-8-vocab",
            "question": "Find a word in the passage that means: \"Deep, steadfast loyalty, dedication, and affectionate love.\".",
            "options": [
              "Attempts",
              "Rescue",
              "Devotion",
              "Magwitch"
            ],
            "correctIndex": 2,
            "explanation": "In this chapter, \"Devotion\" means deep, steadfast loyalty, dedication, and affectionate love.",
            "visualClueEmoji": "💖",
            "points": 60
          }
        ]
      }
    ]
  }
};
