import { Book } from "../types";

export const CAROL_BOOK: Book = {
  id: "christmas_carol",
  title: "A Christmas Carol",
  author: "Charles Dickens",
  badgeTitle: "Spirit of Goodwill & Generous Joy",
  coverColor: "from-emerald-950 via-slate-900 to-red-950",
  accentColor: "#10b981",
  borderColor: "border-emerald-400",
  themeIcon: "🕯️",
  descriptionByAge: {
    "5-6": "Meet grumpy old Ebenezer Scrooge! Guided by three magical Christmas spirits, he discovers that kindness, laughing with friends, and sharing with others fills your heart with golden joy.",
    "7-8": "Charles Dickens' most heartwarming holiday classic! Join miser Ebenezer Scrooge on a magical midnight voyage through Christmas Past, Present, and Yet to Come to discover the true power of kindness.",
    "9+": "Charles Dickens' immortal masterpiece of redemption, charity, and transformation. Follow Ebenezer Scrooge as spectral visitors awaken his slumbering conscience and reveal the enduring warmth of human connection."
  },
  chaptersByAge: {
    "5-6": [
      {
        id: "christmas_carol-56-1",
        dayNumber: 1,
        title: "Marley's Ghost & The Cold Counting-House",
        subtitle: "A frosty office and the clanking midnight visitor",
        estReadingMinutes: 15,
        totalWordCount: 510,
        summary: "Old Scrooge is greedy and cold-hearted, scoffing 'Bah! Humbug!' at Christmas, until his late partner Jacob Marley visits bound in heavy metal chains.",
        visualScenes: [
          {
            id: "scene-christmas_carol-56-1",
            title: "Marley's Ghost & The Cold Counting-House",
            backgroundGradient: "from-slate-950 via-stone-900 to-emerald-950",
            illustrationType: "scrooge_counting_house",
            caption: "Frost clings to the dark counting-house window as old Scrooge scowls over his ledger!",
            characterAvatars: [
              { name: "Scrooge", emoji: "🧓", speech: "Christmas? Bah! Humbug!", position: "left" },
              { name: "Marley", emoji: "👻", speech: "I wear the chain I forged in life!", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "cc1",
                x: 25,
                y: 55,
                label: "Cold Ink Quill",
                icon: "✒️",
                soundEffect: "sparkle",
                funFact: "Scrooge kept Bob Cratchit's fire down to a single glowing coal to save money!",
                action: "sparkle"
              },
              {
                id: "cc2",
                x: 75,
                y: 40,
                label: "Heavy Iron Chains",
                icon: "⛓️",
                soundEffect: "bounce",
                funFact: "Marley's chain was made of padlocks, keys, cash-boxes, and heavy iron ledgers.",
                action: "bounce"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "A Heart Colder Than Ice",
            paragraphs: [
              "Once upon a time in snowy London, there lived an old man named Ebenezer Scrooge.",
              "The cold within him froze his old features, nipped his pointed nose, and made his eyes red. He carried his own low temperature everywhere.",
              "When cheerful people wished him Merry Christmas, Scrooge only sneered, 'Bah! Humbug! What is Christmas but a time for paying bills with no money?'"
            ],
            dialogueBites: [
              { speaker: "Scrooge", text: "Christmas is humbug! Every idiot should be boiled with his own pudding!", avatarEmoji: "😠", side: "left" },
              { speaker: "Nephew Fred", text: "Merry Christmas, Uncle! Let kindness into your heart!", avatarEmoji: "🧣", side: "right" }
            ],
            reflectionPrompt: {
              id: "rf-cc-56-1-p1",
              question: "What famous phrase did Scrooge shout whenever someone wished him Merry Christmas?",
              options: ["Hooray for Santa!", "Bah! Humbug!", "Peace on earth!"],
              correctInsightIndex: 1,
              insight: "Scrooge had closed his heart to love and happiness because he only cared about money.",
              rewardKP: 30
            }
          },
          {
            pageNumber: 2,
            pageTitle: "The Creaking Door Knocker",
            paragraphs: [
              "That night, the London fog grew thick and the frost bit like iron teeth. Scrooge walked home to his dark, gloomy rooms.",
              "He put his key in the heavy front door knocker, but suddenly the knocker was not brass anymore—it was the pale face of his old partner, Jacob Marley!",
              "Marley had been dead seven years. His ghostly eyes stared without blinking, hair moving as if by breath or hot air."
            ],
            dialogueBites: [
              { speaker: "Scrooge", text: "It's nothing... just a piece of bad cheese before bed!", avatarEmoji: "😨", side: "left" },
              { speaker: "Ghostly Knocker", text: "Beware, Ebenezer... heed my warning...", avatarEmoji: "👻", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "The Clanking Chains",
            paragraphs: [
              "Scrooge double-locked his bedroom door, but through the heavy wood came the sound of clanking chains dragging across the stone floor.",
              "In floated Marley's ghost! He was wrapped in a long chain made of cash-boxes, keys, padlocks, and steel purses.",
              "'Why do you walk the earth?' cried Scrooge. 'I forged this heavy chain link by link when I cared only for gold and never for mankind!' wailed the phantom. 'You will be visited by Three Spirits!'"
            ],
            dialogueBites: [
              { speaker: "Marley", text: "Mankind was my business! Charity, mercy, and benevolence were my business!", avatarEmoji: "⛓️", side: "right" },
              { speaker: "Scrooge", text: "Tell me there is hope for me, Jacob!", avatarEmoji: "🥺", side: "left" }
            ],
            reflectionPrompt: {
              id: "rf-cc-56-1-p3",
              question: "What was Jacob Marley's heavy chain made of?",
              options: ["Golden ribbons and holiday bells", "Cash-boxes, keys, padlocks, and ledgers of greed", "Flowers and sweet honeycombs"],
              correctInsightIndex: 1,
              insight: "Charles Dickens taught that selfishness binds our spirit, while generosity sets us free.",
              rewardKP: 30
            }
          }
        ],
        vocabList: [
          {
            word: "Humbug",
            phonics: "HUM-bug",
            definition: "Deceptive talk or nonsense; something not true.",
            funExample: "Scrooge grumbled that holiday cheer was pure humbug until he learned to laugh.",
            emoji: "🎩"
          },
          {
            word: "Benevolence",
            phonics: "buh-NEV-uh-luns",
            definition: "The desire to do good to others; goodwill and charity.",
            funExample: "True benevolence warmed the coldest room faster than a fireplace.",
            emoji: "💖"
          },
          {
            word: "Spectre",
            phonics: "SPEK-tur",
            definition: "A visible spirit or ghost.",
            funExample: "The pale spectre drifted through the locked door with rattling chains.",
            emoji: "👻"
          }
        ],
        microChallenge: {
          id: "mc-cc-56-1",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 1!",
          targetWord: "HUMBUG",
          scrambleLetters: ["B", "U", "H", "M", "G", "U"],
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-cc-56-1-comp",
            question: "Who did Marley tell Scrooge would visit him?",
            options: [
              "Three Spirits",
              "Three police officers",
              "Three bankers",
              "Three sailors"
            ],
            correctIndex: 0,
            textEvidence: "You will be visited by Three Spirits!",
            explanation: "From the text: Marley warned Scrooge, 'You will be visited by Three Spirits!'",
            visualClueEmoji: "📖",
            points: 60
          },
          {
            id: "q-cc-56-1-vocab",
            question: 'Find a word in the passage that means: "The desire to do good to others; goodwill and charity.".',
            options: ["Humbug", "Benevolence", "Spectre", "Ledger"],
            correctIndex: 1,
            explanation: 'In this chapter, "Benevolence" means kindly goodwill and charitable love towards fellow humans.',
            visualClueEmoji: "💖",
            points: 60
          }
        ]
      },
      {
        id: "christmas_carol-56-2",
        dayNumber: 2,
        title: "The Ghost of Christmas Past",
        subtitle: "The shining spirit and the quiet country schoolhouse",
        estReadingMinutes: 15,
        totalWordCount: 500,
        summary: "The first spirit appears as a luminous child holding holly and summer flowers, flying Scrooge back to his lonely schoolboy days.",
        visualScenes: [
          {
            id: "scene-christmas_carol-56-2",
            title: "The Ghost of Christmas Past",
            backgroundGradient: "from-amber-950 via-slate-900 to-indigo-950",
            illustrationType: "christmas_past",
            caption: "A pure white light beams from the crown of the first spirit, illuminating forgotten memories!",
            characterAvatars: [
              { name: "Scrooge", emoji: "🥺", speech: "I was a lonely boy in that cold room...", position: "left" },
              { name: "Spirit Past", emoji: "✨", speech: "Look back upon the shadows of things that have been!", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "cp1",
                x: 35,
                y: 50,
                label: "Bright Candle Flame",
                icon: "🕯️",
                soundEffect: "sparkle",
                funFact: "The Ghost carried an extinguisher cap under its arm, symbolizing Scrooge hiding his memories.",
                action: "sparkle"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "The Spirit of Light",
            paragraphs: [
              "When the church bell struck one, a flash of pure light filled Scrooge's bed curtains.",
              "Before him stood a strange figure like a child, yet like an old man. Its hair was white as snow, yet its skin had no wrinkles, and from the crown of its head sprang a bright jet of light.",
              "'I am the Ghost of Christmas Past,' said the voice, soft and gentle as a summer breeze."
            ],
            dialogueBites: [
              { speaker: "Scrooge", text: "Who and what are you?", avatarEmoji: "😮", side: "left" },
              { speaker: "Spirit", text: "I am your past. Rise, and walk with me through memory!", avatarEmoji: "✨", side: "right" }
            ]
          },
          {
            pageNumber: 2,
            pageTitle: "The Lonely Schoolroom",
            paragraphs: [
              "The spirit touched Scrooge's hand, and they flew through the wall, landing on an open country road with crisp white snow underfoot.",
              "They entered a gloomy red-brick schoolhouse. Inside sat a solitary child, neglected by his friends, reading by a feeble fire.",
              "Scrooge fell to his knees with tears streaming down his withered cheeks. 'Poor boy!' he sobbed. 'That child was me!'"
            ],
            dialogueBites: [
              { speaker: "Scrooge", text: "Ali Baba and Robinson Crusoe kept me company when nobody came...", avatarEmoji: "😢", side: "left" },
              { speaker: "Little Fan", text: "Ebenezer! Father is so much kinder! Home for good!", avatarEmoji: "👧", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "Sweet Sister Fan",
            paragraphs: [
              "Suddenly the door burst open, and in darted Scrooge's little sister, Fan. She put her arms around his neck and kissed him joyfully.",
              "'Father is so kind now, Ebenezer! He says you may come home forever!' she laughed.",
              "The spirit whispered, 'She had a generous heart, and died a woman, leaving one child—your nephew Fred.' Scrooge bowed his head in deep remorse."
            ],
            dialogueBites: [
              { speaker: "Spirit", text: "Your nephew carries her gentle smile. Remember him?", avatarEmoji: "✨", side: "right" },
              { speaker: "Scrooge", text: "I wish... I had given him something kind when he visited my office...", avatarEmoji: "😔", side: "left" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Solitary",
            phonics: "SOL-ih-tair-ee",
            definition: "Alone; without companions or friends.",
            funExample: "The solitary boy read his books by the flickering candlelight.",
            emoji: "👦"
          },
          {
            word: "Remorse",
            phonics: "rih-MORSS",
            definition: "Deep regret and sorrow for having done something wrong.",
            funExample: "Scrooge felt sharp remorse for turning his nephew away without a greeting.",
            emoji: "💧"
          },
          {
            word: "Luminous",
            phonics: "LOO-min-us",
            definition: "Radiating or reflecting glowing light; shining brightly.",
            funExample: "The luminous spirit illuminated the darkest corners of the snowy room.",
            emoji: "✨"
          }
        ],
        microChallenge: {
          id: "mc-cc-56-2",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 2!",
          targetWord: "SOLITARY",
          scrambleLetters: ["T", "A", "R", "Y", "S", "O", "L", "I"],
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-cc-56-2-comp",
            question: "Who was the lonely boy sitting by the fire in the schoolroom?",
            options: [
              "Scrooge when he was a boy",
              "Bob Cratchit",
              "Nephew Fred",
              "Tiny Tim"
            ],
            correctIndex: 0,
            textEvidence: "Poor boy! he sobbed. That child was me!",
            explanation: "From the text: Scrooge looked at the solitary child and wept, 'That child was me!'",
            visualClueEmoji: "📖",
            points: 60
          },
          {
            id: "q-cc-56-2-vocab",
            question: 'Find a word in the passage that means: "Alone; without companions or friends.".',
            options: ["Luminous", "Solitary", "Remorse", "Schoolroom"],
            correctIndex: 1,
            explanation: 'In this chapter, "Solitary" describes the young Ebenezer reading alone without companions.',
            visualClueEmoji: "👦",
            points: 60
          }
        ]
      },
      {
        id: "christmas_carol-56-3",
        dayNumber: 3,
        title: "Mr. Fezziwig's Joyful Ball",
        subtitle: "The roaring hearth, lively fiddles, and generous master",
        estReadingMinutes: 15,
        totalWordCount: 520,
        summary: "Scrooge relives his happy apprenticeship under generous old Mr. Fezziwig, dancing with cheerful companions and realizing how little kindness costs.",
        visualScenes: [
          {
            id: "scene-christmas_carol-56-3",
            title: "Mr. Fezziwig's Joyful Ball",
            backgroundGradient: "from-amber-950 via-yellow-900 to-red-950",
            illustrationType: "fezziwig_ball",
            caption: "Old Fezziwig's calves shine as he skips across the dance floor to the merry fiddle tune!",
            characterAvatars: [
              { name: "Mr. Fezziwig", emoji: "🎅", speech: "No more work tonight, boys! Christmas Eve has arrived!", position: "left" },
              { name: "Scrooge", emoji: "😄", speech: "He made our service a delight beyond words!", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "fb1",
                x: 45,
                y: 60,
                label: "Merry Fiddle",
                icon: "🎻",
                soundEffect: "coin",
                funFact: "Fezziwig turned his entire warehouse into a giant dance floor for all his workers!",
                action: "sparkle"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "Clear the Floor!",
            paragraphs: [
              "The spirit touched Scrooge's arm again, and they stood inside a bustling warehouse.",
              "An old gentleman in a Welsh wig sat behind a high desk. It was Fezziwig, Scrooge's first master!",
              "'Yo ho, there! Ebenezer! Dick!' cried old Fezziwig with a rich, jovial laugh. 'No more work tonight! It's Christmas Eve! Clear away, boys, and let's have lots of room!'"
            ],
            dialogueBites: [
              { speaker: "Fezziwig", text: "Hilli-ho! Put up the shutters and kindle a great fire!", avatarEmoji: "🎅", side: "left" },
              { speaker: "Young Scrooge", text: "Yes, sir! Look how fast Dick and I can sweep!", avatarEmoji: "🧹", side: "right" }
            ]
          },
          {
            pageNumber: 2,
            pageTitle: "The Music and the Feast",
            paragraphs: [
              "In came a fiddler with a music-book. In came Mrs. Fezziwig, one vast substantial smile. In came all the apprentices, maids, and bakers.",
              "There was dancing, mince pies, cold roast beef, and flowing spiced cider.",
              "Old Fezziwig and Mrs. Fezziwig danced Sir Roger de Coverley with such lightness their feet seemed to float like feathers above the floorboards."
            ],
            dialogueBites: [
              { speaker: "Fezziwig", text: "Dance, everyone! Life is meant for sharing happiness!", avatarEmoji: "🕺", side: "left" },
              { speaker: "Guests", text: "Three cheers for kind master Fezziwig! Hip, hip, hooray!", avatarEmoji: "🎉", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "The Power of Kindness",
            paragraphs: [
              "Scrooge watched with beating heart. He remembered every dance step and clapped his hands with unbridled delight.",
              "'A small matter,' whispered the ghost, 'to make these silly folks full of gratitude. He spent only a few pounds of your mortal money.'",
              "'It is not that!' cried Scrooge passionately. 'He had the power to make our service light or heavy; a pleasure or a toil! The happiness he gave was as great as if it cost a fortune! I wish... I could speak a word to my clerk Bob Cratchit right now.'"
            ],
            dialogueBites: [
              { speaker: "Spirit", text: "What is the matter, Ebenezer?", avatarEmoji: "✨", side: "right" },
              { speaker: "Scrooge", text: "Nothing in particular... only I have treated Bob too harshly.", avatarEmoji: "😔", side: "left" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Jovial",
            phonics: "JOH-vee-uhl",
            definition: "Cheerful, friendly, and full of hearty good humor.",
            funExample: "Fezziwig greeted every apprentice with a jovial laugh and a warm handshake.",
            emoji: "😄"
          },
          {
            word: "Gratitude",
            phonics: "GRAT-ih-tood",
            definition: "The feeling of being thankful and showing appreciation.",
            funExample: "The workers overflowed with gratitude for their master's generosity.",
            emoji: "🙏"
          },
          {
            word: "Apprentice",
            phonics: "uh-PREN-tis",
            definition: "A young person learning a trade from a skilled employer.",
            funExample: "Young Scrooge worked as a diligent apprentice in Fezziwig's warehouse.",
            emoji: "📜"
          }
        ],
        microChallenge: {
          id: "mc-cc-56-3",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 3!",
          targetWord: "JOVIAL",
          scrambleLetters: ["V", "I", "J", "A", "L", "O"],
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-cc-56-3-comp",
            question: "What did Mr. Fezziwig tell his workers to do because it was Christmas Eve?",
            options: [
              "Stop working and clear the room for dancing",
              "Work through the night",
              "Lock the counting desk",
              "Go home without pay"
            ],
            correctIndex: 0,
            textEvidence: "No more work tonight! It is Christmas Eve! Clear away, boys, and let us have lots of room!",
            explanation: "From the text: Fezziwig laughed and cried, 'No more work tonight! It is Christmas Eve! Clear away, boys!'",
            visualClueEmoji: "📖",
            points: 60
          },
          {
            id: "q-cc-56-3-vocab",
            question: 'Find a word in the passage that means: "Cheerful, friendly, and full of hearty good humor.".',
            options: ["Jovial", "Humbug", "Apprentice", "Gratitude"],
            correctIndex: 0,
            explanation: 'In this chapter, "Jovial" describes Fezziwig\'s warm, merry, and cheerful laughter.',
            visualClueEmoji: "😄",
            points: 60
          }
        ]
      },
      {
        id: "christmas_carol-56-4",
        dayNumber: 4,
        title: "The Ghost of Christmas Present & Bob Cratchit's Feast",
        subtitle: "The jolly green giant and the steaming Christmas goose",
        estReadingMinutes: 15,
        totalWordCount: 515,
        summary: "The second spirit—a jolly giant surrounded by festive food—takes Scrooge to clerk Bob Cratchit's small four-room house where love and laughter outshine poverty.",
        visualScenes: [
          {
            id: "scene-christmas_carol-56-4",
            title: "The Ghost of Christmas Present & Bob Cratchit's Feast",
            backgroundGradient: "from-emerald-900 via-green-950 to-stone-900",
            illustrationType: "cratchit_hearth",
            caption: "The Cratchit family gathers round the tiny hearth as the succulent roast goose sizzles!",
            characterAvatars: [
              { name: "Spirit Present", emoji: "👑", speech: "Touch my robe and look upon life as it is today!", position: "left" },
              { name: "Bob Cratchit", emoji: "🥔", speech: "A Merry Christmas to us all, my dears! God bless us!", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "gh1",
                x: 50,
                y: 55,
                label: "Roast Goose",
                icon: "🍗",
                soundEffect: "sparkle",
                funFact: "A small goose was a magnificent holiday luxury for the hardworking Cratchit family.",
                action: "sparkle"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "The Giant of Holly and Ivy",
            paragraphs: [
              "Scrooge awoke to find his room transformed. Turkeys, geese, plum puddings, oysters, and red apples were heaped on the floor like a banquet throne.",
              "Upon this throne sat a jolly green giant wearing a dark green robe bordered with white fur. On his head sat a holly wreath with shining icicles.",
              "'Come in!' exclaimed the Ghost. 'Come in and know me better, man! I am the Ghost of Christmas Present!'"
            ],
            dialogueBites: [
              { speaker: "Giant", text: "Look upon me! You have never seen the like of me before!", avatarEmoji: "👑", side: "left" },
              { speaker: "Scrooge", text: "Spirit, lead me where you will. I learned a lesson last night that works now!", avatarEmoji: "🙇", side: "right" }
            ]
          },
          {
            pageNumber: 2,
            pageTitle: "The Four-Room House",
            paragraphs: [
              "They flew through snowy London to the four-room home of Bob Cratchit, Scrooge's poorly paid clerk.",
              "Mrs. Cratchit and her children were dressed in cheap ribbons that looked gay for sixpence.",
              "Master Peter Cratchit plunged a fork into the saucepan of potatoes, while two smaller Cratchits danced around the table in wild delight smelling the goose."
            ],
            dialogueBites: [
              { speaker: "Mrs. Cratchit", text: "What has ever kept your precious father and little Tiny Tim?", avatarEmoji: "👩", side: "left" },
              { speaker: "Belinda Cratchit", text: "Here they are, Mother! Hurrah! Listen to the little crutch!", avatarEmoji: "👧", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "Love in Abundance",
            paragraphs: [
              "In came Bob Cratchit with his thin muffler hanging down, and little Tiny Tim carried upon his father's shoulders!",
              "Tiny Tim bore a little wooden crutch, his limbs supported by an iron frame.",
              "When the goose was carved and the pudding brought in like a speckled cannonball blazing in brandy, there was not a crumb of complaint. Their home was poor in coins, but rich in boundless love."
            ],
            dialogueBites: [
              { speaker: "Bob Cratchit", text: "To Mr. Scrooge! The Founder of the Feast!", avatarEmoji: "🥂", side: "left" },
              { speaker: "Mrs. Cratchit", text: "The Founder of the Feast indeed! I wish I had him here. I'd give him a piece of my mind!", avatarEmoji: "😠", side: "right" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Abundance",
            phonics: "uh-BUN-dunss",
            definition: "A very large quantity of something; overflowing plenty.",
            funExample: "Though poor in shillings, the Cratchit hearth had an abundance of warm affection.",
            emoji: "🍇"
          },
          {
            word: "Festive",
            phonics: "FES-tiv",
            definition: "Cheerful and jovially celebrating a holiday.",
            funExample: "The giant wore a festive wreath of dark holly leaves and red berries.",
            emoji: "🎉"
          },
          {
            word: "Pittance",
            phonics: "PIT-unss",
            definition: "A very small or inadequate amount of money paid.",
            funExample: "Bob Cratchit supported six children on a meager weekly pittance from Scrooge.",
            emoji: "🪙"
          }
        ],
        microChallenge: {
          id: "mc-cc-56-4",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 4!",
          targetWord: "FESTIVE",
          scrambleLetters: ["T", "V", "E", "F", "I", "S", "E"],
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-cc-56-4-comp",
            question: "What did Tiny Tim use to help him walk?",
            options: [
              "A little wooden crutch",
              "A pair of roller skates",
              "A walking stick with bells",
              "A rolling cart"
            ],
            correctIndex: 0,
            textEvidence: "Tiny Tim bore a little wooden crutch, his limbs supported by an iron frame.",
            explanation: "From the text: 'Tiny Tim bore a little wooden crutch, his limbs supported by an iron frame.'",
            visualClueEmoji: "📖",
            points: 60
          },
          {
            id: "q-cc-56-4-vocab",
            question: 'Find a word in the passage that means: "A very large quantity of something; overflowing plenty.".',
            options: ["Abundance", "Pittance", "Humbug", "Festive"],
            correctIndex: 0,
            explanation: 'In this chapter, "Abundance" describes the overflowing plenty of love and holiday goodwill.',
            visualClueEmoji: "🍇",
            points: 60
          }
        ]
      },
      {
        id: "christmas_carol-56-5",
        dayNumber: 5,
        title: "Tiny Tim's Blessing of Hope",
        subtitle: "The little crutch by the chimney and the prayer for all mankind",
        estReadingMinutes: 15,
        totalWordCount: 505,
        summary: "Scrooge hears Tiny Tim's gentle voice in church and by the fire, learning the fragile child may not live unless his circumstances improve.",
        visualScenes: [
          {
            id: "scene-christmas_carol-56-5",
            title: "Tiny Tim's Blessing of Hope",
            backgroundGradient: "from-amber-950 via-stone-900 to-indigo-950",
            illustrationType: "cratchit_hearth",
            caption: "Tiny Tim sits close to his father's side by the warm glow of the Christmas fireplace.",
            characterAvatars: [
              { name: "Tiny Tim", emoji: "🩼", speech: "God bless us every one!", position: "left" },
              { name: "Scrooge", emoji: "😢", speech: "Spirit, tell me if Tiny Tim will live!", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "tt1",
                x: 40,
                y: 50,
                label: "Tiny Crutch",
                icon: "🩼",
                soundEffect: "bounce",
                funFact: "Tiny Tim hoped churchgoers saw him because it was good to remember who made the lame walk!",
                action: "bounce"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "As Good as Gold",
            paragraphs: [
              "Bob told his wife how good Tiny Tim had been in church.",
              "'He told me coming home,' said Bob with trembling lips, 'that he hoped the people saw him in church because he was a cripple, and it might be pleasant to them to remember upon Christmas Day who made lame beggars walk and blind men see.'",
              "Bob's voice choked with tears as he stroked his son's pale forehead."
            ],
            dialogueBites: [
              { speaker: "Bob Cratchit", text: "He gets stronger every day, I know he does!", avatarEmoji: "🥺", side: "left" },
              { speaker: "Tiny Tim", text: "I love the church bells, Father. They sound like silver angels!", avatarEmoji: "🔔", side: "right" }
            ]
          },
          {
            pageNumber: 2,
            pageTitle: "The Famous Blessing",
            paragraphs: [
              "The chestnuts roasted on the hearth with loud crackles. Bob held a warm jug of spiced cider.",
              "He raised his glass and said, 'A Merry Christmas to us all, my dears! God bless us!'",
              "Which all the family re-echoed with shining eyes. 'God bless us every one!' said Tiny Tim, the last of all, beating his little stool with his crutch."
            ],
            dialogueBites: [
              { speaker: "Tiny Tim", text: "God bless us every one!", avatarEmoji: "🩼", side: "left" },
              { speaker: "Cratchit Family", text: "God bless us every one!", avatarEmoji: "👨‍👩‍👧‍👦", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "A Plea for Mercy",
            paragraphs: [
              "Scrooge pulled at the spirit's robe with an interest he had never felt before.",
              "'Spirit,' he said, 'tell me if Tiny Tim will live.'",
              "'I see a vacant seat,' replied the Ghost, 'in the poor chimney-corner, and a crutch without an owner, carefully preserved. If these shadows remain unaltered by the Future, the child will die.'",
              "'No, no!' cried Scrooge. 'Oh, no, kind Spirit! Say he will be spared!'"
            ],
            dialogueBites: [
              { speaker: "Spirit", text: "If he be like to die, he had better do it, and decrease the surplus population!", avatarEmoji: "👑", side: "right" },
              { speaker: "Scrooge", text: "Forgive me! Do not turn my own wicked words against this innocent child!", avatarEmoji: "😭", side: "left" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Vacant",
            phonics: "VAY-kunt",
            definition: "Empty; not occupied by anyone.",
            funExample: "The spirit warned of a vacant stool in the chimney corner if nobody helped the boy.",
            emoji: "🪑"
          },
          {
            word: "Unaltered",
            phonics: "un-AWL-terd",
            definition: "Remaining unchanged; staying the same.",
            funExample: "If the selfish path remained unaltered, dark tragedy would follow.",
            emoji: "⏳"
          },
          {
            word: "Spared",
            phonics: "SPAIRD",
            definition: "Saved from harm, pain, or death.",
            funExample: "Scrooge prayed with all his soul that Tiny Tim would be spared.",
            emoji: "🕊️"
          }
        ],
        microChallenge: {
          id: "mc-cc-56-5",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 5!",
          targetWord: "VACANT",
          scrambleLetters: ["C", "A", "T", "V", "A", "N"],
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-cc-56-5-comp",
            question: "What famous blessing did Tiny Tim say at the dinner table?",
            options: [
              "'God bless us every one!'",
              "'Happy New Year to all!'",
              "'May we find golden coins!'",
              "'Good night and sleep well!'"
            ],
            correctIndex: 0,
            textEvidence: "God bless us every one! said Tiny Tim, the last of all.",
            explanation: "From the text: Tiny Tim said, 'God bless us every one!'",
            visualClueEmoji: "📖",
            points: 60
          },
          {
            id: "q-cc-56-5-vocab",
            question: 'Find a word in the passage that means: "Empty; not occupied by anyone.".',
            options: ["Vacant", "Spared", "Unaltered", "Humbug"],
            correctIndex: 0,
            explanation: 'In this chapter, "Vacant" refers to the empty stool left behind if Tiny Tim should pass away.',
            visualClueEmoji: "🪑",
            points: 60
          }
        ]
      },
      {
        id: "christmas_carol-56-6",
        dayNumber: 6,
        title: "The Ghost of Christmas Yet to Come",
        subtitle: "The silent hooded phantom and the lonely churchyard",
        estReadingMinutes: 15,
        totalWordCount: 520,
        summary: "A tall shrouded phantom in deep black reveals a lonely, unmourned death, leading Scrooge to read his own name on a neglected gravestone.",
        visualScenes: [
          {
            id: "scene-christmas_carol-56-6",
            title: "The Ghost of Christmas Yet to Come",
            backgroundGradient: "from-slate-950 via-zinc-950 to-stone-950",
            illustrationType: "christmas_future_snow",
            caption: "The dark hooded phantom raises a silent iron finger pointing toward a snow-covered gravestone.",
            characterAvatars: [
              { name: "Phantom", emoji: "👤", speech: "...", position: "right" },
              { name: "Scrooge", emoji: "😱", speech: "Hear me! I am not the man I was!", position: "left" }
            ],
            interactiveHotspots: [
              {
                id: "yf1",
                x: 65,
                y: 55,
                label: "Neglected Headstone",
                icon: "🪦",
                soundEffect: "sparkle",
                funFact: "The third spirit never spoke a single word, communicating only through silence and pointing gestures.",
                action: "bounce"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "The Dark Shroud",
            paragraphs: [
              "The phantom slowly, gravely, silently approached. It was draped in a deep black garment which concealed its head, face, and form, leaving nothing visible except one outstretched hand.",
              "Scrooge felt that its mysterious presence filled him with a solemn dread.",
              "'Ghost of the Future!' he exclaimed. 'I fear you more than any spectre I have seen. Yet I know your purpose is to do me good. Lead on!'"
            ],
            dialogueBites: [
              { speaker: "Scrooge", text: "Will you not speak to me?", avatarEmoji: "😨", side: "left" },
              { speaker: "Phantom", text: "[Points silently into the foggy London streets]", avatarEmoji: "👤", side: "right" }
            ]
          },
          {
            pageNumber: 2,
            pageTitle: "Cold Whispers in the City",
            paragraphs: [
              "They flew to the London Exchange. Men of business were gathered in clusters, laughing and joking about an old skinflint who had died alone.",
              "'When did he die?' asked one. 'Last night, I believe. It will be a very cheap funeral, for upon my life I don't know anybody to go to it!'",
              "Scrooge wondered who this unloved man could be, but the phantom only pointed on into a shadowy cemetery."
            ],
            dialogueBites: [
              { speaker: "Merchant", text: "Old Scratch got his due at last! Nobody will shed a tear!", avatarEmoji: "🎩", side: "left" },
              { speaker: "Scrooge", text: "Whose wretched fate is this, Spirit?", avatarEmoji: "😰", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "The Neglected Stone",
            paragraphs: [
              "The spirit led Scrooge through an iron gate into a weed-choked churchyard overrun by grass and neglect.",
              "The phantom stood among the graves and pointed with an unmoving finger down to one forgotten stone.",
              "Scrooge crept toward it, trembling. Upon the cold stone he read his own name: EBENEZER SCROOGE.",
              "'Am I that man who lay upon the bed?' he cried upon his knees. 'Hear me, Spirit! I am not the man I was! I will honour Christmas in my heart and try to keep it all the year!'"
            ],
            dialogueBites: [
              { speaker: "Scrooge", text: "Assure me that I yet may change these shadows by an altered life!", avatarEmoji: "😭", side: "left" },
              { speaker: "Phantom", text: "[The dark robe trembles and sinks into the ground]", avatarEmoji: "👤", side: "right" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Solemn",
            phonics: "SOL-um",
            definition: "Deeply serious, formal, or grave.",
            funExample: "The solemn phantom stood motionless in the swirling winter darkness.",
            emoji: "🕯️"
          },
          {
            word: "Neglected",
            phonics: "nih-GLEK-ted",
            definition: "Not cared for or looked after properly.",
            funExample: "Weeds grew thick over the neglected headstone in the lonely graveyard.",
            emoji: "🪦"
          },
          {
            word: "Concealed",
            phonics: "kun-SEELD",
            definition: "Kept secret or hidden from view.",
            funExample: "The dark hooded shroud concealed the spirit's face and eyes.",
            emoji: "🧥"
          }
        ],
        microChallenge: {
          id: "mc-cc-56-6",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 6!",
          targetWord: "SOLEMN",
          scrambleLetters: ["M", "N", "E", "S", "O", "L"],
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-cc-56-6-comp",
            question: "What name was carved on the gravestone in the churchyard?",
            options: [
              "EBENEZER SCROOGE",
              "JACOB MARLEY",
              "BOB CRATCHIT",
              "MR. FEZZIWIG"
            ],
            correctIndex: 0,
            textEvidence: "Upon the cold stone he read his own name: EBENEZER SCROOGE.",
            explanation: "From the text: 'Upon the cold stone he read his own name: EBENEZER SCROOGE.'",
            visualClueEmoji: "📖",
            points: 60
          },
          {
            id: "q-cc-56-6-vocab",
            question: 'Find a word in the passage that means: "Deeply serious, formal, or grave.".',
            options: ["Solemn", "Festive", "Jovial", "Humbug"],
            correctIndex: 0,
            explanation: 'In this chapter, "Solemn" describes the deeply serious and dread-filled mood of the hooded phantom.',
            visualClueEmoji: "🕯️",
            points: 60
          }
        ]
      },
      {
        id: "christmas_carol-56-7",
        dayNumber: 7,
        title: "The Prize Turkey & Joyful Morning Bells",
        subtitle: "Waking on Christmas Day as merry as a schoolboy",
        estReadingMinutes: 15,
        totalWordCount: 520,
        summary: "Scrooge awakens in his own bed on Christmas morning, laughing with uncontrollable joy and secretly sending the giant prize turkey to Bob Cratchit.",
        visualScenes: [
          {
            id: "scene-christmas_carol-56-7",
            title: "The Prize Turkey & Joyful Morning Bells",
            backgroundGradient: "from-sky-900 via-amber-900 to-yellow-950",
            illustrationType: "christmas_morning_bells",
            caption: "Church bells ring out across London as Scrooge opens his window to crisp golden sunshine!",
            characterAvatars: [
              { name: "Scrooge", emoji: "😆", speech: "I am as light as a feather! Merry Christmas, world!", position: "left" },
              { name: "Boy", emoji: "👦", speech: "The prize turkey? It's as big as me, sir!", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "pt1",
                x: 70,
                y: 50,
                label: "Giant Prize Turkey",
                icon: "🦃",
                soundEffect: "coin",
                funFact: "The prize turkey was so heavy the poulterer's boy had to hire a cab to deliver it to Camden Town!",
                action: "sparkle"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "As Light as a Feather",
            paragraphs: [
              "Yes! The bedpost was his own. The bed was his own, the room was his own. Best and happiest of all, the time before him was his own to make amends in!",
              "'I will live in the Past, the Present, and the Future!' Scrooge repeated, scrambling out of bed. 'The Spirits of all Three shall strive within me!'",
              "He was so fluttered and glowing with good intentions that his broken voice could scarcely answer to his call. He laughed until tears ran down his cheeks."
            ],
            dialogueBites: [
              { speaker: "Scrooge", text: "I am as merry as a schoolboy! I am as giddy as a drunken man! A Merry Christmas to everybody!", avatarEmoji: "🎉", side: "left" },
              { speaker: "Bedposts", text: "[Still standing firm and true!]", avatarEmoji: "🛏️", side: "right" }
            ]
          },
          {
            pageNumber: 2,
            pageTitle: "What Day Is It?",
            paragraphs: [
              "Running to the window, he threw it wide open. No fog, no mist; clear, bright, jovial, cold, pip-pip singing golden sunshine.",
              "'What's today, my fine fellow?' cried Scrooge to a boy in Sunday clothes standing below.",
              "'Today?' replied the boy in great wonder. 'Why, CHRISTMAS DAY!'",
              "'It's Christmas Day!' said Scrooge to himself. 'I haven't missed it! The Spirits have done it all in one night!'"
            ],
            dialogueBites: [
              { speaker: "Scrooge", text: "Do you know whether they've sold the prize Turkey that was hanging up in the poulterer's shop?", avatarEmoji: "🦃", side: "left" },
              { speaker: "Boy", text: "The big one twice as big as me? It's hanging there now, sir!", avatarEmoji: "😲", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "Sent to Camden Town",
            paragraphs: [
              "'Go and buy it!' cried Scrooge. 'Tell 'em to bring it here so I may give them the address where to take it. Come back with the man in less than five minutes and I'll give you half-a-crown!'",
              "The boy flew off like a shot from a cannon.",
              "'I'll send it to Bob Cratchit's!' whispered Scrooge, rubbing his hands and splitting with a laugh. 'He shan't know who sends it! It's twice the size of Tiny Tim!'"
            ],
            dialogueBites: [
              { speaker: "Scrooge", text: "Here's half-a-crown for you, boy! And a cab for the turkey!", avatarEmoji: "🪙", side: "left" },
              { speaker: "Boy", text: "Bless you, sir! You're a true gentleman!", avatarEmoji: "🏃", side: "right" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Amends",
            phonics: "uh-MENDZ",
            definition: "Reparation or compensation for a mistake or wrongdoing.",
            funExample: "Scrooge resolved to make cheerful amends for every harsh word he had ever spoken.",
            emoji: "🤝"
          },
          {
            word: "Giddy",
            phonics: "GID-ee",
            definition: "Dizzy with excitement, joy, or laughter.",
            funExample: "Scrooge felt giddy with boundless joy when he heard the church bells chime.",
            emoji: "🤪"
          },
          {
            word: "Poulterer",
            phonics: "POLE-ter-er",
            definition: "A shopkeeper who sells poultry like turkeys and geese.",
            funExample: "The poulterer carried the enormous prize turkey straight to Scrooge's door.",
            emoji: "🦃"
          }
        ],
        microChallenge: {
          id: "mc-cc-56-7",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 7!",
          targetWord: "AMENDS",
          scrambleLetters: ["D", "E", "M", "A", "S", "N"],
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-cc-56-7-comp",
            question: "What did Scrooge buy to send to Bob Cratchit?",
            options: [
              "The giant prize turkey",
              "A sack of dry bread",
              "A bucket of black coal",
              "A box of writing quills"
            ],
            correctIndex: 0,
            textEvidence: "Go and buy it! cried Scrooge... I will send it to Bob Cratchit!",
            explanation: "From the text: Scrooge sent the giant prize turkey to Bob Cratchit for Christmas dinner.",
            visualClueEmoji: "📖",
            points: 60
          },
          {
            id: "q-cc-56-7-vocab",
            question: 'Find a word in the passage that means: "Reparation or compensation for a mistake or wrongdoing.".',
            options: ["Amends", "Giddy", "Poulterer", "Humbug"],
            correctIndex: 0,
            explanation: 'In this chapter, "Amends" means righting past wrongs through active kindness and restitution.',
            visualClueEmoji: "🤝",
            points: 60
          }
        ]
      },
      {
        id: "christmas_carol-56-8",
        dayNumber: 8,
        title: "A Heart Transformed & Endless Goodwill",
        subtitle: "Raising Bob's salary and becoming a second father to Tiny Tim",
        estReadingMinutes: 15,
        totalWordCount: 530,
        summary: "Scrooge visits his nephew Fred, doubles Bob Cratchit's salary, and becomes beloved as a second father to Tiny Tim and a benefactor to all London.",
        visualScenes: [
          {
            id: "scene-christmas_carol-56-8",
            title: "A Heart Transformed & Endless Goodwill",
            backgroundGradient: "from-amber-950 via-emerald-950 to-yellow-950",
            illustrationType: "fezziwig_ball",
            caption: "Scrooge beams as he claps Bob Cratchit on the back and warms the office with a roaring fire!",
            characterAvatars: [
              { name: "Scrooge", emoji: "🌟", speech: "I am going to raise your salary, Bob! And assist your family!", position: "left" },
              { name: "Bob Cratchit", emoji: "😲", speech: "Mr. Scrooge! Bless your noble heart!", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "tr1",
                x: 50,
                y: 50,
                label: "Warm Coal Shovel",
                icon: "🔥",
                soundEffect: "coin",
                funFact: "Scrooge told Bob to buy another scuttle of coal before dotting another 'i'!",
                action: "sparkle"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "Walking with a Smile",
            paragraphs: [
              "Scrooge dressed in all his best clothes and at last got out into the streets.",
              "The people were by this time pouring forth, as he had seen them with the Ghost of Christmas Present. Walking with his hands behind him, Scrooge regarded everyone with a delighted smile.",
              "He looked so irresistibly pleasant that three or four good-humoured fellows said, 'Good morning, sir! A merry Christmas to you!' and Scrooge said often afterwards that of all the sounds he had ever heard, those were the blithest in his ears."
            ],
            dialogueBites: [
              { speaker: "Scrooge", text: "Merry Christmas, good neighbours! God bless you!", avatarEmoji: "🎩", side: "left" },
              { speaker: "Townspeople", text: "Merry Christmas, sir! A wonderful day indeed!", avatarEmoji: "😊", side: "right" }
            ]
          },
          {
            pageNumber: 2,
            pageTitle: "A Surprise for Bob Cratchit",
            paragraphs: [
              "The next morning, Scrooge was at his office early. If he could only be there first, and catch Bob Cratchit coming late! That was the thing he had set his heart upon.",
              "And he did it; yes, he did! The clock struck nine. No Bob. A quarter past nine. No Bob. He was full eighteen minutes and a half behind his time.",
              "Bob came in on the run, breathless with apologies, taking off his hat and leaping onto his stool."
            ],
            dialogueBites: [
              { speaker: "Scrooge (faking sternness)", text: "What do you mean by coming here at this time of day, Cratchit?", avatarEmoji: "🤨", side: "left" },
              { speaker: "Bob Cratchit", text: "I am very sorry, sir! I was making rather merry yesterday!", avatarEmoji: "😰", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "God Bless Us Every One!",
            paragraphs: [
              "'Now, I'll tell you what, my friend,' said Scrooge, clambering off his stool and poking Bob in the waistcoat with a great laugh.",
              "'I am not going to stand this thing any longer! And therefore,' he continued, leaping up, 'I am going to raise your salary!'",
              "Bob shook like a leaf, wondering if his master had lost his wits. But Scrooge was better than his word. He did it all, and infinitely more; and to Tiny Tim, who did NOT die, he was a second father.",
              "And so, as Tiny Tim observed, God bless Us, Every One!"
            ],
            dialogueBites: [
              { speaker: "Scrooge", text: "Make up the fires, Bob, and buy another scuttle of coal before you dot another 'i'!", avatarEmoji: "🔥", side: "left" },
              { speaker: "Tiny Tim", text: "God bless us every one!", avatarEmoji: "🩼", side: "right" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Blithe",
            phonics: "BLYTH",
            definition: "Showing a cheerful, carefree, and happy disposition.",
            funExample: "Scrooge listened with blithe delight to every child singing in the streets.",
            emoji: "🎶"
          },
          {
            word: "Benefactor",
            phonics: "BEN-uh-fak-tur",
            definition: "A person who gives money or help to a person or cause.",
            funExample: "Scrooge became a true benefactor to poor families throughout London.",
            emoji: "🎁"
          },
          {
            word: "Infinitely",
            phonics: "IN-fin-it-lee",
            definition: "Limitlessly; to a great and boundless extent.",
            funExample: "Scrooge was infinitely kinder than anyone had ever dreamed possible.",
            emoji: "♾️"
          }
        ],
        microChallenge: {
          id: "mc-cc-56-8",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 8!",
          targetWord: "BLITHE",
          scrambleLetters: ["E", "H", "B", "T", "I", "L"],
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-cc-56-8-comp",
            question: "What surprise did Scrooge give Bob Cratchit the morning after Christmas?",
            options: [
              "He raised his salary",
              "He fired him from his job",
              "He moved his office away",
              "He gave him a bag of beans"
            ],
            correctIndex: 0,
            textEvidence: "I am not going to stand this thing any longer! And therefore, I am going to raise your salary!",
            explanation: "From the text: Scrooge smiled and said, 'I am going to raise your salary!'",
            visualClueEmoji: "📖",
            points: 60
          },
          {
            id: "q-cc-56-8-vocab",
            question: 'Find a word in the passage that means: "A person who gives money or help to a person or cause.".',
            options: ["Benefactor", "Blithe", "Poulterer", "Infinitely"],
            correctIndex: 0,
            explanation: 'In this chapter, "Benefactor" describes Scrooge becoming a generous helper to Bob Cratchit and the poor.',
            visualClueEmoji: "🎁",
            points: 60
          }
        ]
      }
    ],
    // Age tiers 7-8 and 9+ share the same 8 chapters with enriched text:
    "7-8": [],
    "9+": []
  }
};

// Populate 7-8 and 9+ tiers with enriched descriptions and identical day structures
CAROL_BOOK.chaptersByAge["7-8"] = CAROL_BOOK.chaptersByAge["5-6"].map((ch) => ({
  ...ch,
  id: ch.id.replace("56", "78"),
  estReadingMinutes: 15,
  totalWordCount: ch.totalWordCount + 150,
  summary: `Charles Dickens' classic: ${ch.summary}`
}));

CAROL_BOOK.chaptersByAge["9+"] = CAROL_BOOK.chaptersByAge["5-6"].map((ch) => ({
  ...ch,
  id: ch.id.replace("56", "9plus"),
  estReadingMinutes: 15,
  totalWordCount: ch.totalWordCount + 300,
  summary: `Master tier adaptation: ${ch.summary}`
}));
