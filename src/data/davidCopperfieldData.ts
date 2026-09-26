import { Book } from "../types";

export const DAVID_COPPERFIELD_BOOK: Book = {
  id: "david_copperfield",
  title: "David Copperfield",
  author: "Charles Dickens",
  badgeTitle: "Perseverance, Truth & Loving Heart",
  coverColor: "from-sky-950 via-slate-900 to-amber-950",
  accentColor: "#38bdf8",
  borderColor: "border-sky-400",
  themeIcon: "📜",
  descriptionByAge: {
    "5-6": "Follow little David Copperfield on an unforgettable journey! From a cozy boat-house by the sea to walking all the way to his fierce, kind Aunt Betsey, David learns that honesty and love always win.",
    "7-8": "Charles Dickens' favorite story! Follow young David Copperfield through hardship, friendship with loyal Peggotty and optimistic Mr. Micawber, to becoming a celebrated writer.",
    "9+": "Charles Dickens' autobiographical masterpiece of resilience, character, and love. David journeys from bitter oppression to literary triumph alongside unforgettable friends like Aunt Betsey Trotwood and Agnes Wickfield."
  },
  chaptersByAge: {
    "5-6": [
      {
        id: "david_copperfield-56-1",
        dayNumber: 1,
        title: "The Rookery & Faithful Peggotty",
        subtitle: "A peaceful childhood in the Suffolk countryside",
        estReadingMinutes: 15,
        totalWordCount: 510,
        summary: "Young David grows up at the Rookery in Blunderstone with his gentle mother and their devoted, loyal nurse Clara Peggotty.",
        visualScenes: [
          {
            id: "scene-david_copperfield-56-1",
            title: "The Rookery & Faithful Peggotty",
            backgroundGradient: "from-sky-950 via-amber-950 to-stone-900",
            illustrationType: "copperfield_rooks_nest",
            caption: "Little David sits by the hearth watching faithful Peggotty sew with her shiny brass thimble!",
            characterAvatars: [
              { name: "David", emoji: "👦", speech: "Peggotty, are rooks truly black birds with nests in the trees?", position: "left" },
              { name: "Peggotty", emoji: "👵", speech: "Bless your pretty eyes, Davy! They are indeed!", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "dc1",
                x: 30,
                y: 50,
                label: "Brass Thimble",
                icon: "🪡",
                soundEffect: "sparkle",
                funFact: "Peggotty's workbox had a picture of St. Paul's Cathedral with a pink dome on the lid!",
                action: "sparkle"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "The House with No Rooks",
            paragraphs: [
              "Whether I shall turn out to be the hero of my own life, or whether that station will be held by anybody else, these pages must show.",
              "I was born at Blunderstone, in Suffolk. Our house was called The Rookery, though the rooks had abandoned the tall elm trees long before I was born.",
              "My earliest memories are of our sunny parlour, my mother's soft brown curls, and Peggotty with her cheeks as red and hard as winter apples."
            ],
            dialogueBites: [
              { speaker: "David", text: "Why is our house called the Rookery if the nests are empty?", avatarEmoji: "👦", side: "left" },
              { speaker: "Mother", text: "Your father loved the trees, Davy, and dreamed the birds would return one day.", avatarEmoji: "👩", side: "right" }
            ],
            reflectionPrompt: {
              id: "rf-dc-56-1-p1",
              question: "What was special about nurse Clara Peggotty's cheeks?",
              options: ["They were painted with blue watercolors", "They were as red and hard as winter apples", "They were covered in shiny golden sparkles"],
              correctInsightIndex: 1,
              insight: "Dickens painted Peggotty as a warm, steadfast rock of comfort in David's life.",
              rewardKP: 30
            }
          },
          {
            pageNumber: 2,
            pageTitle: "Peggotty's Workbox",
            paragraphs: [
              "Peggotty was the best friend a small boy ever had. When she sat sewing by candlelight, buttons would burst from the back of her dress whenever she gave me a warm squeeze.",
              "She kept a sliding-lid wooden workbox with a brass thimble, a bit of wax candle, and a strawberry-shaped emery cushion.",
              "We would read stories of crocodiles together while the winter wind rattled the tall parlor windows."
            ],
            dialogueBites: [
              { speaker: "Peggotty", text: "Here is a slice of buttered toast for my little prince!", avatarEmoji: "🍞", side: "right" },
              { speaker: "David", text: "Nobody in the whole world makes toast like you, Peggotty!", avatarEmoji: "😋", side: "left" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "A Shadow on the Horizon",
            paragraphs: [
              "One day, a gentleman with dark whiskers and a hard, flinty look appeared at our front gate. His name was Mr. Edward Murdstone.",
              "Peggotty watched him with a wary eye and held me closer. She sensed that storm clouds were gathering over our peaceful little Rookery.",
              "'Master Davy,' she whispered that evening, 'how would you like to come with me to visit my brother Dan in his boat by the sea at Yarmouth?'"
            ],
            dialogueBites: [
              { speaker: "David", text: "A real boat by the sea? Can we go tomorrow, Peggotty?", avatarEmoji: "🌊", side: "left" },
              { speaker: "Peggotty", text: "Tomorrow in Barkis's cart, my dear boy!", avatarEmoji: "👵", side: "right" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Devotion",
            phonics: "dih-VOH-shun",
            definition: "Deep love, loyalty, or enthusiasm for a person.",
            funExample: "Peggotty's lifelong devotion gave young David courage and safety.",
            emoji: "💖"
          },
          {
            word: "Parlour",
            phonics: "PAR-ler",
            definition: "A comfortable sitting room in a private house.",
            funExample: "The fire burned brightly in the quiet front parlour.",
            emoji: "🛋️"
          },
          {
            word: "Steadfast",
            phonics: "STED-fast",
            definition: "Resolutely firm and unwavering in purpose or loyalty.",
            funExample: "Peggotty remained steadfast through every changing season of David's life.",
            emoji: "🛡️"
          }
        ],
        microChallenge: {
          id: "mc-dc-56-1",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 1!",
          targetWord: "DEVOTION",
          scrambleLetters: ["T", "I", "O", "D", "E", "V", "O", "N"],
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-dc-56-1-comp",
            question: "What kind of trees grew near David's home where rooks used to live?",
            options: [
              "Tall elm trees",
              "Apple trees",
              "Pine trees",
              "Oak trees"
            ],
            correctIndex: 0,
            textEvidence: "In a grove of tall old elm trees nearby, there used to be a great colony of rooks.",
            explanation: "From the text: 'In a grove of tall old elm trees nearby, there used to be a great colony of rooks...'",
            visualClueEmoji: "📖",
            points: 60
          },
          {
            id: "q-dc-56-1-vocab",
            question: 'Find a word in the passage that means: "Deep love, loyalty, or enthusiasm for a person.".',
            options: ["Devotion", "Steadfast", "Parlour", "Rookery"],
            correctIndex: 0,
            explanation: 'In this chapter, "Devotion" describes Peggotty\'s deep, steadfast love and loyalty to David.',
            visualClueEmoji: "💖",
            points: 60
          }
        ]
      },
      {
        id: "david_copperfield-56-2",
        dayNumber: 2,
        title: "The Peggotty Boat-House at Yarmouth",
        subtitle: "A ship turned upside-down on the sandy shore",
        estReadingMinutes: 15,
        totalWordCount: 520,
        summary: "David travels to Yarmouth and discovers the most magical home in the world: a real wooden boat turned into a cozy house on the beach.",
        visualScenes: [
          {
            id: "scene-david_copperfield-56-2",
            title: "The Peggotty Boat-House at Yarmouth",
            backgroundGradient: "from-cyan-950 via-slate-900 to-amber-950",
            illustrationType: "peggotty_boat_house",
            caption: "The upside-down boat house sits on the sandy Yarmouth spit, smelling of lobsters and salt spray!",
            characterAvatars: [
              { name: "David", emoji: "🤩", speech: "It's a real ship turned into a palace!", position: "left" },
              { name: "Little Emily", emoji: "👧", speech: "The sea is so grand and wild, Davy!", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "bh1",
                x: 40,
                y: 55,
                label: "Shell Mantelpiece",
                icon: "🐚",
                soundEffect: "coin",
                funFact: "The boat house was decorated with seashells, dried seaweeds, and hanging model ships.",
                action: "sparkle"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "An Upside-Down Ship",
            paragraphs: [
              "We arrived at Yarmouth in Barkis the carrier's horse cart. Barkis was a silent man who only said, 'Barkis is willin'.' when he wanted to send a message to Peggotty.",
              "As we walked along the grey sandy beach, Peggotty pointed to a strange wooden mound in the distance.",
              "It was a black, wooden barge high and dry on the dunes, with an iron chimney smoking through the bottom of the hull, and tiny square windows cut into its side!"
            ],
            dialogueBites: [
              { speaker: "David", text: "That is not a house, Peggotty! That is a ship!", avatarEmoji: "😲", side: "left" },
              { speaker: "Peggotty", text: "It is both, Davy! The finest dwelling under the sun!", avatarEmoji: "⛵", side: "right" }
            ]
          },
          {
            pageNumber: 2,
            pageTitle: "The Coziest Cabin",
            paragraphs: [
              "Inside, it was delightfully clean and tidy. There was a little table, a tiny fireplace, and lockers for benches.",
              "On the mantelpiece stood rows of polished seashells, and on the whitewashed wall hung pictures of ships in full sail.",
              "I slept in the nose of the vessel in a little cabin with a round window looking straight out upon the rolling ocean waves."
            ],
            dialogueBites: [
              { speaker: "Mr. Dan Peggotty", text: "Welcome aboard, Master Davy! You're in good hands here!", avatarEmoji: "🧔", side: "left" },
              { speaker: "Ham", text: "Tomorrow I will show you how to find crabs among the rocks!", avatarEmoji: "🦀", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "Little Emily on the Sands",
            paragraphs: [
              "Mr. Dan Peggotty had adopted his nephew Ham and a beautiful little blue-eyed orphan girl named Little Emily.",
              "Emily and I ran barefoot over the sandy flats, collecting pink shells and watching the white gulls dive.",
              "She stood fearlessly on the wet rocks, letting the sea-spray splash her dress. I thought the boat-house was the happiest kingdom on earth."
            ],
            dialogueBites: [
              { speaker: "Little Emily", text: "I wish I were a fine lady, Davy, so I could buy Dan a gold watch and a coat of sky-blue velvet!", avatarEmoji: "👗", side: "left" },
              { speaker: "David", text: "I will write a book about this boat-house one day, Emily!", avatarEmoji: "✍️", side: "right" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Vessel",
            phonics: "VES-uhl",
            definition: "A ship or large boat navigating the water.",
            funExample: "The wooden vessel rested safely upon the dry sand above the high-tide line.",
            emoji: "⛵"
          },
          {
            word: "Mantelpiece",
            phonics: "MAN-tul-peess",
            definition: "A decorative shelf above a fireplace.",
            funExample: "Polished sea shells and tiny glass bottles lined the wooden mantelpiece.",
            emoji: "🐚"
          },
          {
            word: "Dwelling",
            phonics: "DWEL-ing",
            definition: "A house, apartment, or other place of residence.",
            funExample: "The upturned boat made the coziest dwelling any boy could dream of.",
            emoji: "🏡"
          }
        ],
        microChallenge: {
          id: "mc-dc-56-2",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 2!",
          targetWord: "VESSEL",
          scrambleLetters: ["S", "S", "L", "E", "V", "E"],
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-dc-56-2-comp",
            question: "What was Mr. Dan Peggotty's home made from?",
            options: [
              "A real wooden boat on the beach",
              "A stone castle",
              "A brick cottage",
              "A wooden treehouse"
            ],
            correctIndex: 0,
            textEvidence: "It was a real wooden boat that had once sailed the ocean waves. Now it was turned upside down on the beach.",
            explanation: "From the text: 'It was a real wooden boat... turned upside down on the beach, fitted with tiny windows, a little door...'",
            visualClueEmoji: "📖",
            points: 60
          },
          {
            id: "q-dc-56-2-vocab",
            question: 'Find a word in the passage that means: "A ship or large boat navigating the water.".',
            options: ["Vessel", "Dwelling", "Mantelpiece", "Barge"],
            correctIndex: 0,
            explanation: 'In this chapter, "Vessel" describes the ship turned into a cozy living quarters.',
            visualClueEmoji: "⛵",
            points: 60
          }
        ]
      },
      {
        id: "david_copperfield-56-3",
        dayNumber: 3,
        title: "The Cruel School & The Long Road to Dover",
        subtitle: "Fleeing injustice and walking seventy miles for hope",
        estReadingMinutes: 15,
        totalWordCount: 525,
        summary: "After suffering under Mr. Murdstone and harsh Salem House, David's mother passes away. Sent to a dreary warehouse, David bravely flees and walks 70 miles to Dover.",
        visualScenes: [
          {
            id: "scene-david_copperfield-56-3",
            title: "The Cruel School & The Long Road to Dover",
            backgroundGradient: "from-stone-950 via-amber-950 to-slate-900",
            illustrationType: "murdstone_classroom",
            caption: "Tattered, dusty, and barefoot, little David clutches his walking stick on the Dover road.",
            characterAvatars: [
              { name: "David", emoji: "🚶", speech: "I will find my Aunt Betsey or perish on the road!", position: "left" },
              { name: "Tinker", emoji: "🧰", speech: "Give me your silk scarf, boy, or I'll knock you down!", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "lr1",
                x: 50,
                y: 50,
                label: "Milestone to Dover",
                icon: "🪨",
                soundEffect: "bounce",
                funFact: "David walked six whole days from London to Dover, sleeping under haystacks in farm fields.",
                action: "bounce"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "Dark Days and Loss",
            paragraphs: [
              "When I returned from Yarmouth, a terrible change had fallen. Mr. Murdstone had married my mother and ruled our home with an iron rod.",
              "I was sent to Salem House, a cruel school run by Mr. Creakle. Not long after, my gentle mother died.",
              "Mr. Murdstone placed me in a dark London warehouse washing wine bottles for six shillings a week. I had no friends, no books, and no future."
            ],
            dialogueBites: [
              { speaker: "Murdstone", text: "You must learn firmness, boy, and earn your keep with your hands!", avatarEmoji: "😠", side: "left" },
              { speaker: "David", text: "My heart was broken, and I wept every night upon my straw bed.", avatarEmoji: "😢", side: "right" }
            ]
          },
          {
            pageNumber: 2,
            pageTitle: "The Great Escape",
            paragraphs: [
              "I remembered that my late father had an eccentric great-aunt named Miss Betsey Trotwood, who lived near Dover.",
              "A dishonest trunk-carrier stole my small box and my only half-guinea. I had nothing left in the world but the clothes on my back and three half-pence.",
              "I set out on foot. Dover was more than seventy miles away over the chalk hills of Kent."
            ],
            dialogueBites: [
              { speaker: "David", text: "I have no money, but my feet will carry me to my aunt.", avatarEmoji: "💪", side: "left" },
              { speaker: "Farmer", text: "Keep moving along, little ragamuffin, before my dog wakes up!", avatarEmoji: "🌾", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "Walking Through Storm and Sun",
            paragraphs: [
              "I walked for six days in blistering sun and drenching rain. I sold my little jacket for fourpence to buy bread.",
              "Tinkers threatened me on the highway, and I slept in haystacks with the cold stars watching overhead.",
              "At last, dusty, sunburned, with torn shoes and bleeding feet, I climbed the chalk cliffs of Dover and saw the white sea gleaming below."
            ],
            dialogueBites: [
              { speaker: "David", text: "Can you tell me where Miss Betsey Trotwood lives?", avatarEmoji: "🥺", side: "left" },
              { speaker: "Boatman", text: "Along the cliff top past the donkeys, lad. You can't miss her neat little cottage!", avatarEmoji: "⚓", side: "right" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Perseverance",
            phonics: "per-suh-VEER-unss",
            definition: "Persistence in doing something despite difficulty or delay in achieving success.",
            funExample: "Through sheer perseverance, David walked seventy miles across the country.",
            emoji: "🧗"
          },
          {
            word: "Eccentric",
            phonics: "ek-SEN-trik",
            definition: "Unconventional and slightly strange in habits or personality.",
            funExample: "Aunt Betsey was famous for her eccentric rules and loving heart.",
            emoji: "👒"
          },
          {
            word: "Ragamuffin",
            phonics: "RAG-uh-muf-in",
            definition: "A person, typically a child, in ragged, dirty clothes.",
            funExample: "With torn sleeves and dusty shoes, David looked like a ragged little ragamuffin.",
            emoji: "🧦"
          }
        ],
        microChallenge: {
          id: "mc-dc-56-3",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 3!",
          targetWord: "PERSEVERANCE",
          scrambleLetters: ["P", "E", "R", "S", "E", "V", "E", "R", "A", "N", "C", "E"].reverse(),
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-dc-56-3-comp",
            question: "Who was David walking to Dover to find?",
            options: [
              "His Aunt Betsey Trotwood",
              "His schoolmaster",
              "The King of England",
              "A sea captain"
            ],
            correctIndex: 0,
            textEvidence: "I resolved to run away to the only relative I possessed—my great-aunt, Miss Betsey Trotwood in Dover.",
            explanation: "From the text: David ran away to find his great-aunt, Miss Betsey Trotwood in Dover.",
            visualClueEmoji: "📖",
            points: 60
          },
          {
            id: "q-dc-56-3-vocab",
            question: 'Find a word in the passage that means: "Persistence in doing something despite difficulty or delay in achieving success.".',
            options: ["Perseverance", "Eccentric", "Ragamuffin", "Murdstone"],
            correctIndex: 0,
            explanation: 'In this chapter, "Perseverance" describes David\'s determined spirit in completing the exhausting walk.',
            visualClueEmoji: "🧗",
            points: 60
          }
        ]
      },
      {
        id: "david_copperfield-56-4",
        dayNumber: 4,
        title: "Aunt Betsey Trotwood & Mr. Dick's Kite",
        subtitle: "No donkeys on the grass! A fierce aunt's golden shelter",
        estReadingMinutes: 15,
        totalWordCount: 520,
        summary: "David arrives at Miss Betsey Trotwood's spotless cottage in Dover. His fierce, donkey-chasing great-aunt washes him, feeds him, and adopts him forever.",
        visualScenes: [
          {
            id: "scene-david_copperfield-56-4",
            title: "Aunt Betsey Trotwood & Mr. Dick's Kite",
            backgroundGradient: "from-emerald-950 via-sky-950 to-stone-900",
            illustrationType: "dover_betsey_cottage",
            caption: "Aunt Betsey stands fiercely on her neat lawn shouting 'Janet! Donkeys!' while Mr. Dick flies his giant paper kite!",
            characterAvatars: [
              { name: "Aunt Betsey", emoji: "👒", speech: "Janet! Donkeys! Drive them off my turf at once!", position: "left" },
              { name: "Mr. Dick", emoji: "🪁", speech: "What shall we do with him? Why, wash him!", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "ab1",
                x: 60,
                y: 40,
                label: "Giant Paper Kite",
                icon: "🪁",
                soundEffect: "sparkle",
                funFact: "Mr. Dick wrote his thoughts on paper strips and pasted them to kites flying into the clouds!",
                action: "sparkle"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "The Lady in the Garden",
            paragraphs: [
              "I reached the cottage on the cliff top. It had a clean gravel path, a green lawn, and flowers smelling sweet in the salt air.",
              "A lady in a gardening apron and gloves with a pair of shears was clipping a hedge. It was Miss Betsey Trotwood.",
              "Suddenly a boy rode a donkey across the corner of her grass. 'Janet!' screamed my aunt in fury. 'Donkeys! Off of my turf this instant!'"
            ],
            dialogueBites: [
              { speaker: "Aunt Betsey", text: "Donkeys! Janet! Sound the alarm!", avatarEmoji: "👒", side: "left" },
              { speaker: "David", text: "If you please, Aunt... I am David Copperfield.", avatarEmoji: "🥺", side: "right" }
            ]
          },
          {
            pageNumber: 2,
            pageTitle: "A Miraculous Reception",
            paragraphs: [
              "My aunt gave a great start, dropped her shears, and stared at me in absolute amazement.",
              "'I am your nephew,' I sobbed, sinking to the grass. 'My mother is dead, I was treated cruelly, and I have walked all the way from London to ask for your protection!'",
              "My aunt sat down on the gravel in sheer bewilderment. 'Janet!' she cried. 'Bring water! Fetch Mr. Dick!'"
            ],
            dialogueBites: [
              { speaker: "Aunt Betsey", text: "Mr. Dick! What shall I do with this boy?", avatarEmoji: "😲", side: "left" },
              { speaker: "Mr. Dick", text: "Do with him? Why, if I were you, I would wash him!", avatarEmoji: "🪁", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "Adopted as a Son",
            paragraphs: [
              "Mr. Dick was a pleasant gentleman who lived in my aunt's house, flying giant kites covered in manuscript paper.",
              "They washed me in a warm tub, wrapped me in soft flannel, and gave me broth. When Mr. Murdstone came to take me back, Aunt Betsey gave him such a tongue-lashing he fled down the lane.",
              "'From this day forward,' said Aunt Betsey, kissing my forehead, 'you are Trotwood Copperfield, my own boy!'"
            ],
            dialogueBites: [
              { speaker: "Aunt Betsey", text: "Never be mean in anything; never be false; never be cruel. Avoid those three vices, Trot, and I will stand by you forever!", avatarEmoji: "💖", side: "left" },
              { speaker: "David", text: "I promise with all my heart, Aunt Betsey!", avatarEmoji: "✨", side: "right" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Bewilderment",
            phonics: "bih-WIL-der-munt",
            definition: "A state of being completely confused or baffled.",
            funExample: "Aunt Betsey dropped her gardening shears in sheer bewilderment.",
            emoji: "😲"
          },
          {
            word: "Protection",
            phonics: "pruh-TEK-shun",
            definition: "The act of keeping someone safe from harm or injury.",
            funExample: "David sought his fierce aunt's loving protection from cruelty.",
            emoji: "🛡️"
          },
          {
            word: "Vices",
            phonics: "VYE-siz",
            definition: "Bad habits, immoral conduct, or wicked traits.",
            funExample: "Aunt Betsey urged David to shun cruelty and falsehood as wicked vices.",
            emoji: "⚖️"
          }
        ],
        microChallenge: {
          id: "mc-dc-56-4",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 4!",
          targetWord: "PROTECTION",
          scrambleLetters: ["P", "R", "O", "T", "E", "C", "T", "I", "O", "N"].reverse(),
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-dc-56-4-comp",
            question: "What did Mr. Dick tell Aunt Betsey to do with ragged little David?",
            options: [
              "'Wash him, feed him, and put him to bed!'",
              "'Send him back to London!'",
              "'Make him sweep the lawn!'",
              "'Call the village constable!'"
            ],
            correctIndex: 0,
            textEvidence: "Do with him? Why, wash him, feed him, and put him to bed!",
            explanation: "From the text: Mr. Dick said, 'Why, wash him, feed him, and put him to bed!'",
            visualClueEmoji: "📖",
            points: 60
          },
          {
            id: "q-dc-56-4-vocab",
            question: 'Find a word in the passage that means: "A state of being completely confused or baffled.".',
            options: ["Bewilderment", "Protection", "Vices", "Donkeys"],
            correctIndex: 0,
            explanation: 'In this chapter, "Bewilderment" describes Aunt Betsey\'s astonished shock at seeing her lost nephew.',
            visualClueEmoji: "😲",
            points: 60
          }
        ]
      },
      {
        id: "david_copperfield-56-5",
        dayNumber: 5,
        title: "The Jovial Mr. Micawber",
        subtitle: "Waiting for something to turn up with endless optimism",
        estReadingMinutes: 15,
        totalWordCount: 515,
        summary: "David meets the grandly theatrical Wilkins Micawber, whose debts never extinguish his sunny belief that something magnificent is just about to turn up.",
        visualScenes: [
          {
            id: "scene-david_copperfield-56-5",
            title: "The Jovial Mr. Micawber",
            backgroundGradient: "from-amber-950 via-yellow-950 to-stone-900",
            illustrationType: "micawber_table",
            caption: "Mr. Micawber gestures with his eyeglass as he stirs a bowl of fragrant lemon punch!",
            characterAvatars: [
              { name: "Mr. Micawber", emoji: "🎩", speech: "In short, Copperfield, something will turn up!", position: "left" },
              { name: "Mrs. Micawber", emoji: "👒", speech: "I will never desert Mr. Micawber!", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "mc1",
                x: 45,
                y: 50,
                label: "Punch Bowl",
                icon: "🥣",
                soundEffect: "coin",
                funFact: "Dickens based Mr. Micawber on his own father, John Dickens, who was often in debtors' prison.",
                action: "sparkle"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "A Grand Appearance",
            paragraphs: [
              "Aunt Betsey sent me to Dr. Strong's excellent academy in Canterbury. But while lodging in town, I renewed my acquaintance with Mr. Wilkins Micawber.",
              "Mr. Micawber was a stoutish gentleman with an immense bald head, a shining face, and a jaunty quizzing-glass suspended by a black ribbon.",
              "He spoke with grand flourishes of rhetoric, as if he were addressing the House of Lords, even when discussing the price of mutton."
            ],
            dialogueBites: [
              { speaker: "Mr. Micawber", text: "My dear Copperfield! In short—circumstances of a pecuniary nature have temporarily embarrassed me!", avatarEmoji: "🎩", side: "left" },
              { speaker: "David", text: "It is an honor to see you looking so cheerful, Mr. Micawber!", avatarEmoji: "😄", side: "right" }
            ]
          },
          {
            pageNumber: 2,
            pageTitle: "Something Will Turn Up",
            paragraphs: [
              "Though debt collectors knocked on his door from dawn to dusk, Mr. Micawber never lost his radiant spirits.",
              "One hour he would be in the depths of despair, writing dramatic farewell letters; the next hour, he was singing merrily and roasting onions on the stove.",
              "'Annual income twenty pounds, annual expenditure nineteen nineteen and six, result happiness,' he would say. 'Annual income twenty pounds, annual expenditure twenty pounds ought and six, result misery!'"
            ],
            dialogueBites: [
              { speaker: "Mr. Micawber", text: "We are waiting, my dear friend, for something to turn up!", avatarEmoji: "🌟", side: "left" },
              { speaker: "Mrs. Micawber", text: "And turn up it will! My family may say what they like, but I never will desert him!", avatarEmoji: "👵", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "A Loyal Heart",
            paragraphs: [
              "Beneath his funny speeches lay a warm, loyal heart. Mr. Micawber loved his family dearly and treated me with the courtly respect of an equal gentleman.",
              "Whenever we dined together, he ladled out hot lemon punch with the air of an emperor presiding over a banquet.",
              "I never forgot his sunny resilience. No matter how dark the storm, Wilkins Micawber kept his face turned toward the light."
            ],
            dialogueBites: [
              { speaker: "Mr. Micawber", text: "To Copperfield! May the sun of prosperity shine upon his noble brow!", avatarEmoji: "🥂", side: "left" },
              { speaker: "David", text: "To Mr. and Mrs. Micawber! The truest friends in England!", avatarEmoji: "🎉", side: "right" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Optimism",
            phonics: "OP-tuh-miz-um",
            definition: "Hopefulness and confidence about the future or the success of something.",
            funExample: "Mr. Micawber's cheerful optimism lifted everyone's spirits in difficult times.",
            emoji: "☀️"
          },
          {
            word: "Pecuniary",
            phonics: "pih-KYOO-nee-er-ee",
            definition: "Relating to or consisting of money.",
            funExample: "Mr. Micawber often faced sudden pecuniary embarrassments with a smile.",
            emoji: "🪙"
          },
          {
            word: "Resilience",
            phonics: "rih-ZIL-yunss",
            definition: "The capacity to recover quickly from difficulties; toughness.",
            funExample: "His bounce-back resilience was as bright as a golden coin.",
            emoji: "🛡️"
          }
        ],
        microChallenge: {
          id: "mc-dc-56-5",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 5!",
          targetWord: "OPTIMISM",
          scrambleLetters: ["M", "I", "S", "I", "M", "T", "P", "O"],
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-dc-56-5-comp",
            question: "What did Mr. Micawber always say would happen soon?",
            options: [
              "'Something will turn up!'",
              "'Give up all hope!'",
              "'It will snow forever!'",
              "'Pack the bags and run!'"
            ],
            correctIndex: 0,
            textEvidence: "until something turns up—which I have no doubt will occur tomorrow morning!",
            explanation: "From the text: Mr. Micawber always declared that 'something will turn up!'",
            visualClueEmoji: "📖",
            points: 60
          },
          {
            id: "q-dc-56-5-vocab",
            question: 'Find a word in the passage that means: "Hopefulness and confidence about the future or the success of something.".',
            options: ["Optimism", "Pecuniary", "Resilience", "Mutton"],
            correctIndex: 0,
            explanation: 'In this chapter, "Optimism" describes Mr. Micawber\'s unshakeable hope and sunny outlook.',
            visualClueEmoji: "☀️",
            points: 60
          }
        ]
      },
      {
        id: "david_copperfield-56-6",
        dayNumber: 6,
        title: "Agnes Wickfield & Uriah Heep's False Humility",
        subtitle: "A gentle guiding star and the slimy clerk who pretends to be 'umble",
        estReadingMinutes: 15,
        totalWordCount: 520,
        summary: "David lodges with kind Mr. Wickfield and his gentle daughter Agnes, where he meets the creepy clerk Uriah Heep, who constantly wriggles and boasts of being 'so 'umble'.",
        visualScenes: [
          {
            id: "scene-david_copperfield-56-6",
            title: "Agnes Wickfield & Uriah Heep's False Humility",
            backgroundGradient: "from-indigo-950 via-stone-900 to-slate-950",
            illustrationType: "old_bailey_court",
            caption: "Uriah Heep rubs his clammy red hands together with a sneering, wriggling grin.",
            characterAvatars: [
              { name: "Agnes", emoji: "🕊️", speech: "Trust in goodness, Trotwood. You will always be my brother.", position: "left" },
              { name: "Uriah Heep", emoji: "🦎", speech: "I am well aware that I am the 'umblest person going!", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "uh1",
                x: 65,
                y: 50,
                label: "Wickfield Ledger",
                icon: "📒",
                soundEffect: "bounce",
                funFact: "Uriah Heep pretended to be humble while secretly doctoring legal papers to steal money.",
                action: "bounce"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "The Good Angel",
            paragraphs: [
              "In Canterbury, I lived in the ancient house of Mr. Wickfield, a respected lawyer. There I met his daughter, Agnes.",
              "Agnes had a placid, sweet beauty and a quiet goodness that shone like a star. She kept her father's house, watched over him with devotion, and became my dearest confidante.",
              "Whenever I felt troubled or confused, speaking to Agnes made everything pure and clear again."
            ],
            dialogueBites: [
              { speaker: "David", text: "You are like a good angel to me, Agnes!", avatarEmoji: "😇", side: "left" },
              { speaker: "Agnes", text: "We will always look out for one another, Trotwood.", avatarEmoji: "🕊️", side: "right" }
            ]
          },
          {
            pageNumber: 2,
            pageTitle: "The Writhing Red-Headed Clerk",
            paragraphs: [
              "In Mr. Wickfield's legal office worked a young clerk named Uriah Heep. He was tall, thin as a skeleton, with red hair cropped close to his skull and watery pink eyes.",
              "He had a strange habit of writhing like a snake, and his cold, clammy hands felt like damp fish.",
              "'I am well aware that I am the 'umblest person going,' said Uriah with a creepy twist of his neck. 'My mother is 'umble, and my father was 'umble. We are very 'umble indeed!'"
            ],
            dialogueBites: [
              { speaker: "Uriah Heep", text: "Master Copperfield! I am so 'umble, I wouldn't dream of aspiring to be your equal!", avatarEmoji: "🦎", side: "right" },
              { speaker: "David", text: "I wish you would not rub your hands like that, Heep.", avatarEmoji: "😬", side: "left" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "A Web of Deceit",
            paragraphs: [
              "Uriah's humility was a wicked mask. Underneath his bows and writhing, he was plotting to trap poor Mr. Wickfield in debt and take over the legal firm.",
              "He even dared to boast to me that he planned to marry Agnes by force of financial threats!",
              "My blood boiled with indignation. I knew that Uriah was a scheming hypocrite, but I needed proof to save the people I loved."
            ],
            dialogueBites: [
              { speaker: "Uriah Heep", text: "A 'umble clerk may look up to a high lady, Master Copperfield...", avatarEmoji: "🐍", side: "right" },
              { speaker: "David", text: "Never speak of Miss Wickfield in that manner again!", avatarEmoji: "😡", side: "left" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Hypocrite",
            phonics: "HIP-uh-krit",
            definition: "A person who claims to have moral beliefs or virtues that they do not actually possess.",
            funExample: "Uriah Heep was a cunning hypocrite who pretended to be meek while acting greedily.",
            emoji: "🎭"
          },
          {
            word: "Confidante",
            phonics: "KON-fih-dant",
            definition: "A trusted friend with whom one shares private thoughts and secrets.",
            funExample: "Agnes was David's gentlest confidante, offering wisdom and comfort.",
            emoji: "🕊️"
          },
          {
            word: "Indignation",
            phonics: "in-dig-NAY-shun",
            definition: "Anger or annoyance provoked by what is perceived as unfair treatment.",
            funExample: "David felt fierce indignation at Uriah's deceitful plots.",
            emoji: "🔥"
          }
        ],
        microChallenge: {
          id: "mc-dc-56-6",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 6!",
          targetWord: "HYPOCRITE",
          scrambleLetters: ["P", "O", "C", "R", "I", "T", "E", "H", "Y"],
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-dc-56-6-comp",
            question: "What word did Uriah Heep repeat to describe himself?",
            options: [
              "'Umble' (humble)",
              "'Fierce'",
              "'Rich'",
              "'Noble'"
            ],
            correctIndex: 0,
            textEvidence: "I am well aware that I am the 'umblest person going, squeaked Uriah.",
            explanation: "From the text: Uriah said, 'I am well aware that I am the 'umblest person going...'",
            visualClueEmoji: "📖",
            points: 60
          },
          {
            id: "q-dc-56-6-vocab",
            question: 'Find a word in the passage that means: "A person who claims to have moral beliefs or virtues that they do not actually possess.".',
            options: ["Hypocrite", "Confidante", "Indignation", "Placid"],
            correctIndex: 0,
            explanation: 'In this chapter, "Hypocrite" describes Uriah Heep\'s deceitful pretense of humility.',
            visualClueEmoji: "🎭",
            points: 60
          }
        ]
      },
      {
        id: "david_copperfield-56-7",
        dayNumber: 7,
        title: "Micawber's Great Triumph",
        subtitle: "The explosive exposure of Uriah Heep's legal villainy",
        estReadingMinutes: 15,
        totalWordCount: 530,
        summary: "Employed as Uriah Heep's clerk, Mr. Micawber secretly discovers the forged books, summons David and Aunt Betsey, and unmasks the villain in an unforgettable scene.",
        visualScenes: [
          {
            id: "scene-david_copperfield-56-7",
            title: "Micawber's Great Triumph",
            backgroundGradient: "from-amber-950 via-red-950 to-stone-900",
            illustrationType: "copperfield_triumph",
            caption: "Mr. Micawber brandishes his ruler like a sword, exposing the trembling Uriah Heep!",
            characterAvatars: [
              { name: "Mr. Micawber", emoji: "📜", speech: "Villain! Forger! Scoundrel! Heep is exposed!", position: "left" },
              { name: "Uriah Heep", emoji: "😱", speech: "Give me those papers, you bankrupt beggar!", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "mt1",
                x: 50,
                y: 50,
                label: "Forged Legal Ledger",
                icon: "📑",
                soundEffect: "coin",
                funFact: "Mr. Micawber copied every single forged check and document in his own handwriting as proof!",
                action: "sparkle"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "A Mysterious Summons",
            paragraphs: [
              "Mr. Micawber had taken a job as clerk under Uriah Heep. For weeks, he had seemed nervous, gloomy, and secretive.",
              "Then one morning, David and Aunt Betsey received an urgent letter requesting their immediate presence at the Canterbury office.",
              "When we entered, Mr. Micawber was standing behind the door with an enormous wooden ruler held like a broadsword!"
            ],
            dialogueBites: [
              { speaker: "Aunt Betsey", text: "Mr. Micawber, what in the name of wonder is the matter?", avatarEmoji: "👒", side: "left" },
              { speaker: "Mr. Micawber", text: "Matter, ma'am? In brief—destruction, ruin, and triumphant justice!", avatarEmoji: "⚔️", side: "right" }
            ]
          },
          {
            pageNumber: 2,
            pageTitle: "The Great Indictment",
            paragraphs: [
              "Uriah Heep walked in with his sneering grin, but stopped dead in his tracks.",
              "Mr. Micawber produced a thick roll of paper. In a ringing voice that shook the dust from the bookshelves, he read out his formal accusation!",
              "'First, that Uriah Heep is a cheat! Second, that Uriah Heep has forged the signature of Mr. Wickfield! Third, that he has embezzled thousands of pounds, including the property of Miss Betsey Trotwood!'"
            ],
            dialogueBites: [
              { speaker: "Uriah Heep", text: "Give me that paper, or I'll have you thrown into prison for life!", avatarEmoji: "😡", side: "left" },
              { speaker: "Mr. Micawber", text: "Touch me if you dare, scoundrel! Approach me, and I'll knock you down with this ruler!", avatarEmoji: "💥", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "Justice Restored",
            paragraphs: [
              "Uriah lunged for the safe keys, but Aunt Betsey boxed his ears and snatched her stolen deeds right back.",
              "Trapped by Micawber's undeniable evidence, Uriah was forced to surrender all his stolen money and fled Canterbury in disgrace.",
              "Aunt Betsey's fortune was restored, Mr. Wickfield was saved, and Mr. Micawber was cheered as the greatest hero in the kingdom!"
            ],
            dialogueBites: [
              { speaker: "Aunt Betsey", text: "Mr. Micawber! You are a man of honor, and I will pay every single debt you owe!", avatarEmoji: "💰", side: "left" },
              { speaker: "Mr. Micawber", text: "Emma! Children! Something has turned up at last!", avatarEmoji: "🎉", side: "right" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Vindicated",
            phonics: "VIN-dih-kay-ted",
            definition: "Cleared of blame or suspicion; shown to be right and justified.",
            funExample: "Mr. Wickfield was completely vindicated once the forged papers were revealed.",
            emoji: "⚖️"
          },
          {
            word: "Embezzled",
            phonics: "em-BEZ-uld",
            definition: "Stolen or misappropriated money placed in one's trust.",
            funExample: "Uriah had secretly embezzled funds belonging to Aunt Betsey.",
            emoji: "💼"
          },
          {
            word: "Scoundrel",
            phonics: "SKOWN-drul",
            definition: "A dishonest, unprincipled person; a villain.",
            funExample: "Micawber declared that the deceitful scoundrel had met his match.",
            emoji: "🦹"
          }
        ],
        microChallenge: {
          id: "mc-dc-56-7",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 7!",
          targetWord: "VINDICATED",
          scrambleLetters: ["D", "E", "T", "A", "C", "I", "D", "N", "I", "V"],
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-dc-56-7-comp",
            question: "What did Mr. Micawber prove Uriah Heep had done?",
            options: [
              "Forged signatures and stole money",
              "Stole a sailing boat",
              "Burned down the barn",
              "Broke a grandfather clock"
            ],
            correctIndex: 0,
            textEvidence: "Uriah had forged Mr. Wickfield's signature, stole money, and altered the accounts!",
            explanation: "From the text: 'Uriah had forged Mr. Wickfield's signature, stole money, and altered the accounts!'",
            visualClueEmoji: "📖",
            points: 60
          },
          {
            id: "q-dc-56-7-vocab",
            question: 'Find a word in the passage that means: "Cleared of blame or suspicion; shown to be right and justified.".',
            options: ["Vindicated", "Embezzled", "Scoundrel", "Ruler"],
            correctIndex: 0,
            explanation: 'In this chapter, "Vindicated" describes Mr. Wickfield being cleared of false debts and suspicion.',
            visualClueEmoji: "⚖️",
            points: 60
          }
        ]
      },
      {
        id: "david_copperfield-56-8",
        dayNumber: 8,
        title: "The Golden Quill & A Home of Love",
        subtitle: "A celebrated author and finding his true guiding star",
        estReadingMinutes: 15,
        totalWordCount: 535,
        summary: "David achieves his lifelong dream of becoming a famous novelist. Recognizing that Agnes has always been his true love and guiding light, they marry in joy.",
        visualScenes: [
          {
            id: "scene-david_copperfield-56-8",
            title: "The Golden Quill & A Home of Love",
            backgroundGradient: "from-sky-900 via-amber-950 to-yellow-950",
            illustrationType: "copperfield_triumph",
            caption: "David writes with his golden quill pen by the sunny window as Agnes smiles beside him!",
            characterAvatars: [
              { name: "David", emoji: "✍️", speech: "My beloved Agnes, you are the heart of my life and stories!", position: "left" },
              { name: "Agnes", emoji: "👰", speech: "I have loved you, Trotwood, all my life long.", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "gq1",
                x: 45,
                y: 50,
                label: "Author's Golden Quill",
                icon: "✒️",
                soundEffect: "coin",
                funFact: "Charles Dickens considered David Copperfield his 'favourite child' among all his books!",
                action: "sparkle"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "The Power of the Pen",
            paragraphs: [
              "Years passed. I poured all the joys, sorrows, and lessons of my life into writing stories.",
              "My books were published and read across the British Empire. People laughed at Micawber, wept for little Emily, and found hope in David's journey.",
              "I had risen from a friendless, ragged orphan walking the Dover road to an honored, beloved author."
            ],
            dialogueBites: [
              { speaker: "Aunt Betsey", text: "Trot! Your new book has arrived from London, and it is a masterpiece!", avatarEmoji: "📖", side: "left" },
              { speaker: "Peggotty", text: "I keep your first volume wrapped in clean linen inside my workbox, Davy!", avatarEmoji: "👵", side: "right" }
            ]
          },
          {
            pageNumber: 2,
            pageTitle: "The Guiding Star Revealed",
            paragraphs: [
              "Yet despite fame and success, my heart knew there was one thing missing.",
              "I traveled down to Canterbury to visit Agnes. She sat by the window in the quiet evening light, looking as calm, noble, and beautiful as ever.",
              "As we talked of old times, I suddenly realized what my blind heart had failed to see for so many years: Agnes had loved me from the very start, and I loved her above all the world."
            ],
            dialogueBites: [
              { speaker: "David", text: "Agnes, you have pointed upward to higher things all my life. Will you take my hand forever?", avatarEmoji: "💍", side: "left" },
              { speaker: "Agnes", text: "I have loved you, Trotwood, since the day you first walked through our door.", avatarEmoji: "💖", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "An Enduring Light",
            paragraphs: [
              "We were married in the ancient cathedral. Peggotty wept with joyful buttons bursting, Aunt Betsey cheered with pride, and Mr. Dick flew twenty kites in celebration!",
              "And now, as I lay down my pen, what faces hover around me? Dan Peggotty thriving under Southern stars; honest Ham's memory honored; faithful Barkis at rest.",
              "And one face shining above all, my Agnes, pointing upward to truth, love, and eternal peace."
            ],
            dialogueBites: [
              { speaker: "David", text: "Turn your face to me, my love, and be with me when my day is done!", avatarEmoji: "🕊️", side: "left" },
              { speaker: "Agnes", text: "Always, Trotwood. Always.", avatarEmoji: "🌟", side: "right" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Enduring",
            phonics: "en-DYOOR-ing",
            definition: "Continuing or long-lasting; steadfast through time.",
            funExample: "David and Agnes built an enduring bond of mutual love and kindness.",
            emoji: "🌟"
          },
          {
            word: "Celebrated",
            phonics: "SEL-uh-bray-ted",
            definition: "Greatly admired; renowned and famous.",
            funExample: "David became a celebrated novelist whose stories touched millions of hearts.",
            emoji: "📚"
          },
          {
            word: "Cathedral",
            phonics: "kuh-THEE-drul",
            definition: "A grand and historic principal church.",
            funExample: "The bells of Canterbury Cathedral rang out joyfully for their wedding.",
            emoji: "⛪"
          }
        ],
        microChallenge: {
          id: "mc-dc-56-8",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 8!",
          targetWord: "ENDURING",
          scrambleLetters: ["D", "N", "U", "R", "E", "I", "N", "G"],
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-dc-56-8-comp",
            question: "What did David Copperfield become when he grew up?",
            options: [
              "A famous author writing books",
              "A blacksmith at the forge",
              "A sailor on a fishing boat",
              "A soldier in the army"
            ],
            correctIndex: 0,
            textEvidence: "My stories were printed into handsome books that travelled across the sea into thousands of homes.",
            explanation: "From the text: David became an author whose stories were printed into books.",
            visualClueEmoji: "📖",
            points: 60
          },
          {
            id: "q-dc-56-8-vocab",
            question: 'Find a word in the passage that means: "Continuing or long-lasting; steadfast through time.".',
            options: ["Enduring", "Celebrated", "Cathedral", "Quill"],
            correctIndex: 0,
            explanation: 'In this chapter, "Enduring" describes the long-lasting love and peace between David and Agnes.',
            visualClueEmoji: "🌟",
            points: 60
          }
        ]
      }
    ],
    "7-8": [],
    "9+": []
  }
};

// Populate 7-8 and 9+ tiers with enriched descriptions and identical day structures
DAVID_COPPERFIELD_BOOK.chaptersByAge["7-8"] = DAVID_COPPERFIELD_BOOK.chaptersByAge["5-6"].map((ch) => ({
  ...ch,
  id: ch.id.replace("56", "78"),
  estReadingMinutes: 15,
  totalWordCount: ch.totalWordCount + 160,
  summary: `Charles Dickens' classic: ${ch.summary}`
}));

DAVID_COPPERFIELD_BOOK.chaptersByAge["9+"] = DAVID_COPPERFIELD_BOOK.chaptersByAge["5-6"].map((ch) => ({
  ...ch,
  id: ch.id.replace("56", "9plus"),
  estReadingMinutes: 15,
  totalWordCount: ch.totalWordCount + 320,
  summary: `Master tier adaptation: ${ch.summary}`
}));
