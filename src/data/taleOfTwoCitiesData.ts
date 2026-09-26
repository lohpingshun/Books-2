import { Book } from "../types";

export const TALE_OF_TWO_CITIES_BOOK: Book = {
  id: "tale_of_two_cities",
  title: "A Tale of Two Cities",
  author: "Charles Dickens",
  badgeTitle: "Sacrifice, Courage & Golden Light",
  coverColor: "from-rose-950 via-neutral-900 to-amber-950",
  accentColor: "#f43f5e",
  borderColor: "border-rose-400",
  themeIcon: "⚖️",
  descriptionByAge: {
    "5-6": "Step into London and Paris! Meet brave Lucie Manette, Charles Darnay, and Sydney Carton. Discover how love and courage bring light even through the stormiest days.",
    "7-8": "Charles Dickens' thrilling historical epic! Set across Paris and London during the French Revolution, follow a family's fight for freedom and Sydney Carton's heroic sacrifice.",
    "9+": "Charles Dickens' immortal masterpiece of sacrifice, resurrection, and devotion. 'It was the best of times, it was the worst of times'—unfolding against the tempest of revolutionary Paris."
  },
  chaptersByAge: {
    "5-6": [
      {
        id: "tale_of_two_cities-56-1",
        dayNumber: 1,
        title: "Recalled to Life & The Attic Shoemaker",
        subtitle: "A daughter's golden hair brings light to a dark Paris room",
        estReadingMinutes: 15,
        totalWordCount: 515,
        summary: "Lucie Manette travels to a dark garret in Paris to find her lost father Dr. Alexandre Manette, who has spent eighteen years imprisoned in the Bastille making shoes.",
        visualScenes: [
          {
            id: "scene-tale_of_two_cities-56-1",
            title: "Recalled to Life & The Attic Shoemaker",
            backgroundGradient: "from-amber-950 via-stone-900 to-slate-950",
            illustrationType: "manette_shoemaker",
            caption: "Dr. Manette holds a lock of golden hair in the dusty Paris attic as Lucie embraces him with tears of love.",
            characterAvatars: [
              { name: "Lucie", emoji: "👧", speech: "Father! I have come to take you home to England!", position: "left" },
              { name: "Dr. Manette", emoji: "👴", speech: "One Hundred and Five, North Tower... is that you, my lost child?", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "ttc1",
                x: 35,
                y: 50,
                label: "Shoemaker's Bench",
                icon: "👞",
                soundEffect: "sparkle",
                funFact: "Dr. Manette learned shoemaking in prison to keep his mind from going completely blank!",
                action: "sparkle"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "The Garret in the Suburb",
            paragraphs: [
              "It was the best of times, it was the worst of times; it was the age of wisdom, it was the age of foolishness.",
              "In a narrow, winding street in Paris above a wine shop, young Lucie Manette climbed a dark wooden staircase with kind Mr. Lorry.",
              "Behind a locked garret door sat a frail, white-haired old man bent over a low shoemaker's bench. His voice was faint and hollow like a whisper from an underground cave."
            ],
            dialogueBites: [
              { speaker: "Mr. Lorry", text: "Do you know who we are, Dr. Manette?", avatarEmoji: "🎩", side: "left" },
              { speaker: "Dr. Manette", text: "One Hundred and Five, North Tower. That is my name.", avatarEmoji: "👞", side: "right" }
            ],
            reflectionPrompt: {
              id: "rf-ttc-56-1-p1",
              question: "What number did Dr. Manette give instead of his real name when he was first found?",
              options: ["Room Seven on the High Hill", "One Hundred and Five, North Tower", "Five Thousand Golden Shillings"],
              correctInsightIndex: 1,
              insight: "His prison cell number in the Bastille had replaced his identity during eighteen years of unjust captivity.",
              rewardKP: 30
            }
          },
          {
            pageNumber: 2,
            pageTitle: "The Golden Thread",
            paragraphs: [
              "The old man took from a folded scrap of rag around his neck a tiny pinch of golden hair, saved from long ago.",
              "He looked up at Lucie. Her hair was the same shining gold, her blue eyes filled with the same gentle mercy.",
              "'Are you my lost wife?' he murmured, trembling. 'No,' she cried, falling to her knees and wrapping her arms around him. 'I am your daughter Lucie, born after you were taken away!'"
            ],
            dialogueBites: [
              { speaker: "Lucie", text: "If you hear in my voice the voice of one you loved, weep for her! Weep for her on my chest!", avatarEmoji: "😭", side: "left" },
              { speaker: "Dr. Manette", text: "My child... your tears are rain falling upon parched earth...", avatarEmoji: "🥺", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "Recalled to Life",
            paragraphs: [
              "With tender care, Lucie led her bewildered father out of the dark attic into a waiting coach.",
              "They crossed the sea to London, where Lucie tended to him day and night with infinite patience and sweet songs.",
              "Slowly, like a withered flower drinking morning dew, the doctor's mind returned to light and memory. He was recalled to life."
            ],
            dialogueBites: [
              { speaker: "Mr. Lorry", text: "The message is sent: Recalled to life!", avatarEmoji: "📜", side: "left" },
              { speaker: "Lucie", text: "He will heal, Mr. Lorry. Love can mend any broken heart.", avatarEmoji: "💖", side: "right" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Garret",
            phonics: "GAIR-it",
            definition: "A top-floor or attic room, often small, dark, and dismal.",
            funExample: "The shoemaker worked quietly in the dimly lit garret above the wine shop.",
            emoji: "🏚️"
          },
          {
            word: "Recalled",
            phonics: "rih-KAWLD",
            definition: "Brought back to mind or restored to life and purpose.",
            funExample: "Dr. Manette was joyfully recalled to life by his daughter's boundless love.",
            emoji: "🕊️"
          },
          {
            word: "Frail",
            phonics: "FRAYL",
            definition: "Weak and delicate; easily damaged or broken.",
            funExample: "The frail old doctor leaned gently upon his daughter's strong arm.",
            emoji: "🌾"
          }
        ],
        microChallenge: {
          id: "mc-ttc-56-1",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 1!",
          targetWord: "RECALLED",
          scrambleLetters: ["D", "E", "L", "L", "A", "C", "E", "R"],
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-ttc-56-1-comp",
            question: "How did Lucie Manette help restore her father's memory and spirit after his long imprisonment?",
            options: [
              "She forced him to work eighteen hours a day in a clock factory",
              "She surrounded him with patient love, tender care, and gentle music in London",
              "She bought him a fleet of warships to attack Paris",
              "She locked him in an underground cellar"
            ],
            correctIndex: 1,
            explanation: "Lucie's devotion became the 'golden thread' that tied Dr. Manette back to sanity, health, and joy.",
            visualClueEmoji: "💖",
            points: 60
          },
          {
            id: "q-ttc-56-1-vocab",
            question: 'Find a word in the passage that means: "A top-floor or attic room, often small, dark, and dismal.".',
            options: ["Garret", "Frail", "Recalled", "Bastille"],
            correctIndex: 0,
            explanation: 'In this chapter, "Garret" describes the attic room where Dr. Manette lived above the wine shop.',
            visualClueEmoji: "🏚️",
            points: 60
          }
        ]
      },
      {
        id: "tale_of_two_cities-56-2",
        dayNumber: 2,
        title: "The Old Bailey & A Mirror of Two Men",
        subtitle: "A courtroom trial and an uncanny resemblance that saves a life",
        estReadingMinutes: 15,
        totalWordCount: 510,
        summary: "Charles Darnay is on trial for his life at the Old Bailey. He is miraculously saved when lawyer Sydney Carton points out their identical facial appearance.",
        visualScenes: [
          {
            id: "scene-tale_of_two_cities-56-2",
            title: "The Old Bailey & A Mirror of Two Men",
            backgroundGradient: "from-slate-950 via-stone-900 to-indigo-950",
            illustrationType: "old_bailey_court",
            caption: "Sydney Carton tosses off his wig and looks across the courtroom at Charles Darnay—they look like identical twins!",
            characterAvatars: [
              { name: "Darnay", emoji: "🧑", speech: "I am innocent of any treason against England!", position: "left" },
              { name: "Sydney Carton", emoji: "🍷", speech: "Look closely at me, gentlemen! Are we not mirrors?", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "ob1",
                x: 55,
                y: 45,
                label: "Barrister's Wig",
                icon: "⚖️",
                soundEffect: "bounce",
                funFact: "English lawyers in the Old Bailey wore powdered wigs made of white horsehair.",
                action: "bounce"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "The Danger at the Old Bailey",
            paragraphs: [
              "Five years later, the courtroom of the Old Bailey in London was packed to the rafters. A young French gentleman named Charles Darnay was on trial for high treason.",
              "Spies swore they had seen him passing secret papers between London and Paris.",
              "Lucie Manette and her father sat in the witness box, their hearts aching for the handsome, gentle prisoner."
            ],
            dialogueBites: [
              { speaker: "Judge", text: "Does the witness identify the prisoner as the man on the packet-ship?", avatarEmoji: "👨‍⚖️", side: "left" },
              { speaker: "Witness", text: "I swear upon my life it was he and no other!", avatarEmoji: "🕵️", side: "right" }
            ]
          },
          {
            pageNumber: 2,
            pageTitle: "The Flash of Genius",
            paragraphs: [
              "Sitting at the table with his hands in his pockets, staring up at the plaster ceiling, was a careless young barrister named Sydney Carton.",
              "Carton leaned over and scribbled a note, tossing it across to Mr. Stryver, the lead defense counsel.",
              "Stryver looked at the paper, smiled, and turned to the star witness: 'Look upon the gentleman sitting next to me! Look upon both men side by side!'"
            ],
            dialogueBites: [
              { speaker: "Stryver", text: "Are they not so alike that one might easily be mistaken for the other?", avatarEmoji: "📜", side: "left" },
              { speaker: "Witness", text: "Good heavens... they are as like as two peas in a pod!", avatarEmoji: "😲", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "Acquitted!",
            paragraphs: [
              "The jury gasped. Sydney Carton and Charles Darnay had the exact same brow, the same dark eyes, the same noble features.",
              "If two men in that very courtroom looked so identical, how could anyone be sure whom they had seen on the dark highway?",
              "The jury conferred for only minutes before delivering their verdict: ACQUITTED! Charles Darnay walked free into the London sunlight."
            ],
            dialogueBites: [
              { speaker: "Darnay", text: "I owe you my life, Mr. Carton!", avatarEmoji: "🤝", side: "left" },
              { speaker: "Sydney Carton", text: "I am a disappointed drudge, sir. Do not thank me, but treasure your freedom.", avatarEmoji: "🍷", side: "right" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Acquitted",
            phonics: "uh-KWIT-ed",
            definition: "Declared not guilty of a crime by a court of law.",
            funExample: "The jury declared Darnay acquitted of all false treason charges.",
            emoji: "⚖️"
          },
          {
            word: "Resemblance",
            phonics: "rih-ZEM-blunss",
            definition: "The state of being similar in appearance or character.",
            funExample: "The striking resemblance between the two men astonished the courtroom.",
            emoji: "🪞"
          },
          {
            word: "Barrister",
            phonics: "BAIR-ih-ster",
            definition: "A lawyer entitled to practice as an advocate in higher courts.",
            funExample: "Sydney Carton was a brilliant but careless barrister in London.",
            emoji: "📜"
          }
        ],
        microChallenge: {
          id: "mc-ttc-56-2",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 2!",
          targetWord: "ACQUITTED",
          scrambleLetters: ["Q", "U", "I", "T", "T", "E", "D", "A", "C"],
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-ttc-56-2-comp",
            question: "How did Sydney Carton save Charles Darnay from being convicted at the Old Bailey?",
            options: [
              "He secretly climbed through the courtroom window and stole the evidence",
              "He showed the jury that he and Darnay looked virtually identical, shattering the eyewitness's certainty",
              "He offered the judge a sack of silver coins",
              "He gave a five-hour speech about ancient Roman laws"
            ],
            correctIndex: 1,
            explanation: "Carton's uncanny physical likeness to Darnay made it impossible to prove beyond doubt that Darnay was the man seen by the spy.",
            visualClueEmoji: "🪞",
            points: 60
          },
          {
            id: "q-ttc-56-2-vocab",
            question: 'Find a word in the passage that means: "Declared not guilty of a crime by a court of law.".',
            options: ["Acquitted", "Resemblance", "Barrister", "Treason"],
            correctIndex: 0,
            explanation: 'In this chapter, "Acquitted" means cleared of all criminal charges by the jury.',
            visualClueEmoji: "⚖️",
            points: 60
          }
        ]
      },
      {
        id: "tale_of_two_cities-56-3",
        dayNumber: 3,
        title: "The Peaceful Haven in Soho",
        subtitle: "Echoing footsteps and a garden beneath the plane trees",
        estReadingMinutes: 15,
        totalWordCount: 515,
        summary: "In a quiet London square in Soho, Dr. Manette, Lucie, and Charles Darnay build a home of peace, while Sydney Carton visits and makes a sacred promise.",
        visualScenes: [
          {
            id: "scene-tale_of_two_cities-56-3",
            title: "The Peaceful Haven in Soho",
            backgroundGradient: "from-emerald-950 via-teal-950 to-stone-900",
            illustrationType: "peaceful_parsonage",
            caption: "Summer leaves rustle in the Soho garden as Lucie pours tea for her father and true friends.",
            characterAvatars: [
              { name: "Lucie", emoji: "🌸", speech: "Listen to the distant footsteps echoing down our quiet corner!", position: "left" },
              { name: "Sydney Carton", emoji: "🕯️", speech: "For you and any dear to you, I would do anything!", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "sh1",
                x: 45,
                y: 55,
                label: "Soho Plane Tree",
                icon: "🌿",
                soundEffect: "sparkle",
                funFact: "Soho was a quiet haven in London where many French refugees found peace and safety.",
                action: "sparkle"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "A Quiet Corner",
            paragraphs: [
              "In a quiet corner not far from Soho Square stood Dr. Manette's pleasant house.",
              "A plane tree grew in the courtyard, rustling its cool green leaves in the summer breeze. Inside, books lined the shelves, flowers bloomed on the windowsills, and the kettle hummed merrily on the hearth.",
              "Dr. Manette practiced medicine once again, his noble intellect shining brightly."
            ],
            dialogueBites: [
              { speaker: "Dr. Manette", text: "I have you, my Lucie, and all the dark shadows are banished.", avatarEmoji: "👨‍⚕️", side: "left" },
              { speaker: "Lucie", text: "Our home is the happiest haven in all London, Father.", avatarEmoji: "💖", side: "right" }
            ]
          },
          {
            pageNumber: 2,
            pageTitle: "Echoing Footsteps",
            paragraphs: [
              "On quiet summer evenings, they would sit by the window listening to footsteps echoing from the distant London streets.",
              "Charles Darnay visited often, winning Lucie's heart with his modesty, kindness, and devotion.",
              "They were married with Dr. Manette's joyful blessing. Darnay revealed his true secret to the doctor: he was of noble French blood, but had renounced his family's cruel titles to live as an honest French teacher in England."
            ],
            dialogueBites: [
              { speaker: "Darnay", text: "I have renounced all French lands to earn my own bread with honor.", avatarEmoji: "💍", side: "left" },
              { speaker: "Dr. Manette", text: "You are the son of my heart, Charles.", avatarEmoji: "🤝", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "Carton's Sacred Vow",
            paragraphs: [
              "Sydney Carton also visited the Soho garden. Though he felt his own life was wasted and solitary, he revered Lucie with pure, selfless devotion.",
              "One afternoon, he looked into her kind eyes and whispered a sacred vow: 'For you, and for any dear to you, I would do anything.'",
              "'I would embrace any sacrifice for you and for those you love. Remember that there is a man who would give his life to keep a life you love beside you!'"
            ],
            dialogueBites: [
              { speaker: "Sydney Carton", text: "Remember my words, Lucie, when dark days come.", avatarEmoji: "🕯️", side: "left" },
              { speaker: "Lucie", text: "You have a noble soul, Sydney, and we will always hold you in our prayers.", avatarEmoji: "🕊️", side: "right" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Haven",
            phonics: "HAY-vun",
            definition: "A place of safety or refuge; a peaceful sanctuary.",
            funExample: "The quiet Soho house was a loving haven away from London's noisy streets.",
            emoji: "🏡"
          },
          {
            word: "Renounced",
            phonics: "rih-NOWNST",
            definition: "Formally declared one's abandonment of a claim, right, or title.",
            funExample: "Charles Darnay renounced his wealthy French title to live honestly.",
            emoji: "📜"
          },
          {
            word: "Selfless",
            phonics: "SELF-lis",
            definition: "Concerned more with the needs and wishes of others than with one's own.",
            funExample: "Carton loved Lucie with a selfless devotion that asked for nothing in return.",
            emoji: "💖"
          }
        ],
        microChallenge: {
          id: "mc-ttc-56-3",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 3!",
          targetWord: "SELFLESS",
          scrambleLetters: ["S", "S", "E", "L", "F", "L", "E", "S"].reverse(),
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-ttc-56-3-comp",
            question: "What sacred vow did Sydney Carton make to Lucie Manette in the quiet Soho garden?",
            options: [
              "That he would buy her a castle in Scotland",
              "That he would give his own life to save someone she loved if ever the need arose",
              "That he would become the Lord Chief Justice of England",
              "That he would never drink cold tea again"
            ],
            correctIndex: 1,
            explanation: "Carton promised that he would willingly sacrifice his life for anyone dear to Lucie.",
            visualClueEmoji: "🕯️",
            points: 60
          },
          {
            id: "q-ttc-56-3-vocab",
            question: 'Find a word in the passage that means: "A place of safety or refuge; a peaceful sanctuary.".',
            options: ["Haven", "Renounced", "Selfless", "Courtyard"],
            correctIndex: 0,
            explanation: 'In this chapter, "Haven" describes the peaceful, safe Soho home of the Manettes.',
            visualClueEmoji: "🏡",
            points: 60
          }
        ]
      },
      {
        id: "tale_of_two_cities-56-4",
        dayNumber: 4,
        title: "Storming of the Bastille & The Red Knitting",
        subtitle: "The storm breaks over Paris and the bells of revolution chime",
        estReadingMinutes: 15,
        totalWordCount: 520,
        summary: "The oppressed people of Paris rise up, storming the grim fortress of the Bastille, while Madame Defarge knits the names of the guilty into her red wool.",
        visualScenes: [
          {
            id: "scene-tale_of_two_cities-56-4",
            title: "Storming of the Bastille & The Red Knitting",
            backgroundGradient: "from-red-950 via-stone-900 to-amber-950",
            illustrationType: "two_cities_wine_shop",
            caption: "Smoke billows over the Bastille's stone towers as the bells ring out across Paris!",
            characterAvatars: [
              { name: "Defarge", emoji: "🚩", speech: "To the Bastille! Down with the North Tower!", position: "left" },
              { name: "Madame Defarge", emoji: "🧶", speech: "The knit stitches never forget a single name.", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "sb1",
                x: 60,
                y: 50,
                label: "Red Knitting Needles",
                icon: "🧶",
                soundEffect: "coin",
                funFact: "Madame Defarge knitted a secret code of names condemned by the revolutionaries.",
                action: "sparkle"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "The Sea of Red Caps",
            paragraphs: [
              "In July 1789, the thunder that had been muttering over France for a hundred years broke at last.",
              "A living sea of angry, starving people in wooden shoes and red caps surged through the streets of Saint Antoine.",
              "Muskets, pikes, iron bars, and torches flashed in the smoke. 'To the Bastille!' the cry echoed from rooftop to rooftop."
            ],
            dialogueBites: [
              { speaker: "People of Paris", text: "Down with the tyrant's fortress! Liberty, equality, brotherhood!", avatarEmoji: "📢", side: "left" },
              { speaker: "Defarge", text: "Follow me to the North Tower! I know where the dark secrets lie!", avatarEmoji: "🚩", side: "right" }
            ]
          },
          {
            pageNumber: 2,
            pageTitle: "The North Tower 105",
            paragraphs: [
              "The drawbridges fell with a tremendous crash! Cannon smoke choked the stone courtyards as the people poured into the gloomy prison.",
              "Defarge forced a trembling turnkey to lead him up the winding stone stairs to cell One Hundred and Five, North Tower—Dr. Manette's old dungeon.",
              "On the damp stone wall, beneath the letters 'A.M.', Defarge searched the stone chimney and unearthed a hidden, yellowed manuscript."
            ],
            dialogueBites: [
              { speaker: "Defarge", text: "The doctor wrote his testimony in his own blood and ink. It is safe in my pocket.", avatarEmoji: "📜", side: "left" },
              { speaker: "Turnkey", text: "Mercy! The fortress has fallen!", avatarEmoji: "😨", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "The Knitting that Never Stops",
            paragraphs: [
              "Beside the wine shop, Therese Defarge sat with her arms folded, knitting steadily with red wool.",
              "Into every row and stitch, she knitted the names of noble families who had ground the poor into dust under their carriage wheels.",
              "The name of Charles Darnay's aristocratic ancestors—the Evremondes—was knitted deep into the crimson pattern. The tempest was rising, and nobody would be safe."
            ],
            dialogueBites: [
              { speaker: "Madame Defarge", text: "Be patient. When the time comes, vengeance will strike like lightning!", avatarEmoji: "🧶", side: "right" },
              { speaker: "Jacques", text: "The knitting will tell the tribunal whom to punish!", avatarEmoji: "⚔️", side: "left" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Tempest",
            phonics: "TEM-pist",
            definition: "A violent windy storm; an upheaval of tumult and rage.",
            funExample: "The revolutionary tempest shook the foundations of Paris.",
            emoji: "🌪️"
          },
          {
            word: "Fortress",
            phonics: "FOR-tris",
            definition: "A heavily protected and fortified building or town.",
            funExample: "The grim Bastille fortress loomed over the cobblestone streets.",
            emoji: "🏰"
          },
          {
            word: "Aristocratic",
            phonics: "uh-ris-tuh-KRAT-ik",
            definition: "Belonging to or typical of the nobility or highest ruling class.",
            funExample: "The aristocratic lords had ignored the cries of the starving peasants.",
            emoji: "👑"
          }
        ],
        microChallenge: {
          id: "mc-ttc-56-4",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 4!",
          targetWord: "TEMPEST",
          scrambleLetters: ["P", "E", "S", "T", "T", "E", "M"],
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-ttc-56-4-comp",
            question: "What secret code did Madame Defarge record into her red wool knitting?",
            options: [
              "Recipes for baking French baguettes and brioche",
              "The names of aristocratic families condemned to face revolutionary justice",
              "Songs to sing at the theatre in Soho",
              "A map to an ancient Roman silver mine"
            ],
            correctIndex: 1,
            explanation: "Madame Defarge used her rhythmic knitting to encode a secret blacklist of nobles targeted for vengeance.",
            visualClueEmoji: "🧶",
            points: 60
          },
          {
            id: "q-ttc-56-4-vocab",
            question: 'Find a word in the passage that means: "A violent windy storm; an upheaval of tumult and rage.".',
            options: ["Tempest", "Fortress", "Aristocratic", "Bastille"],
            correctIndex: 0,
            explanation: 'In this chapter, "Tempest" describes the violent, storm-like uprising of the revolution.',
            visualClueEmoji: "🌪️",
            points: 60
          }
        ]
      },
      {
        id: "tale_of_two_cities-56-5",
        dayNumber: 5,
        title: "In the Shadow of the Guillotine",
        subtitle: "Charles Darnay drawn into the vortex of revolutionary Paris",
        estReadingMinutes: 15,
        totalWordCount: 520,
        summary: "Charles Darnay travels to Paris to save his faithful old steward Gabelle. Recognized as an emigrant noble, he is seized and imprisoned in the grim prison of La Force.",
        visualScenes: [
          {
            id: "scene-tale_of_two_cities-56-5",
            title: "In the Shadow of the Guillotine",
            backgroundGradient: "from-stone-950 via-slate-900 to-red-950",
            illustrationType: "old_bailey_court",
            caption: "Armed revolutionary guards surround Charles Darnay at the Paris city gates.",
            characterAvatars: [
              { name: "Darnay", emoji: "🧑", speech: "I came to Paris only to save an innocent man!", position: "left" },
              { name: "Guard", emoji: "💂", speech: "You are an aristocrat and an emigrant! To La Force prison!", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "lf1",
                x: 35,
                y: 50,
                label: "Iron Cell Bars",
                icon: "⛓️",
                soundEffect: "bounce",
                funFact: "La Force was a former ducal palace turned into one of Paris's grimmest revolutionary prisons.",
                action: "bounce"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "The Desperate Letter",
            paragraphs: [
              "A letter from Paris reached Tellson's Bank in London addressed to the Marquis St. Evremonde.",
              "It was from old Theophile Gabelle, Darnay's honest family steward, who had been thrown into prison merely for collecting rents for his master.",
              "'Ah, Monsieur formerly the Marquis,' wrote the old man, 'for the love of heaven, come and save me! I die without your testimony!'"
            ],
            dialogueBites: [
              { speaker: "Darnay", text: "I cannot let an innocent servant die for my family's deeds. Honor calls me to Paris!", avatarEmoji: "🏇", side: "left" },
              { speaker: "Duty", text: "You must go alone, and leave Lucie safe in London.", avatarEmoji: "🛡️", side: "right" }
            ]
          },
          {
            pageNumber: 2,
            pageTitle: "Arrest at the City Gates",
            paragraphs: [
              "Darnay rode post-haste toward Paris, but France was in the grip of the Reign of Terror.",
              "At the city barrier, armed patriots in red caps stopped his carriage. New laws had made all aristocrats who left France guilty of treason.",
              "'You are an emigrant,' shouted the officer. 'You have returned to betray the Republic! You are consigned to the prison of La Force!'"
            ],
            dialogueBites: [
              { speaker: "Darnay", text: "I am a citizen who renounced all titles voluntarily!", avatarEmoji: "📄", side: "left" },
              { speaker: "Officer", text: "The law knows no titles! Take him in secret!", avatarEmoji: "⚔️", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "Alone in the Cell",
            paragraphs: [
              "Darnay was locked in a dark, cold cell called 'In secret.' Heavy iron bolts slid shut with a dull boom.",
              "He paced the floor, measuring the stones: five paces by four and a half. Outside, drums rattled and crowds cheered in the misty rain.",
              "In London, Lucie and Dr. Manette learned of Charles's peril. Taking the child and Mr. Lorry, they rushed across the sea into the lion's den to save him."
            ],
            dialogueBites: [
              { speaker: "Dr. Manette", text: "I was a prisoner in the Bastille. No patriot will harm the husband of my child!", avatarEmoji: "👴", side: "left" },
              { speaker: "Lucie", text: "Charles! Hold on, my love! We are coming!", avatarEmoji: "😭", side: "right" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Consigned",
            phonics: "kun-SYND",
            definition: "Delivered or assigned to someone's care or into an unpleasant place.",
            funExample: "Charles Darnay was consigned to the gloomy prison cell without a trial.",
            emoji: "⛓️"
          },
          {
            word: "Steward",
            phonics: "STOO-erd",
            definition: "An official appointed to supervise property or financial affairs.",
            funExample: "The faithful steward had served the estate honestly for forty years.",
            emoji: "📜"
          },
          {
            word: "Peril",
            phonics: "PAIR-ul",
            definition: "Serious and immediate danger.",
            funExample: "Lucie braved immense peril to travel into revolutionary Paris.",
            emoji: "⚠️"
          }
        ],
        microChallenge: {
          id: "mc-ttc-56-5",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 5!",
          targetWord: "CONSIGNED",
          scrambleLetters: ["S", "I", "G", "N", "E", "D", "C", "O", "N"],
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-ttc-56-5-comp",
            question: "Why did Charles Darnay risk his life to return to revolutionary Paris?",
            options: [
              "To search for buried family jewels inside the Louvre Palace",
              "To rescue his loyal old steward Gabelle who had been imprisoned on his account",
              "To buy a racing carriage for his London garden",
              "To become the president of the revolutionary tribunal"
            ],
            correctIndex: 1,
            explanation: "Darnay's noble sense of honor compelled him to clear the name of his faithful servant Gabelle.",
            visualClueEmoji: "🏇",
            points: 60
          },
          {
            id: "q-ttc-56-5-vocab",
            question: 'Find a word in the passage that means: "Delivered or assigned to someone\'s care or into an unpleasant place.".',
            options: ["Consigned", "Steward", "Peril", "Emigrant"],
            correctIndex: 0,
            explanation: 'In this chapter, "Consigned" describes Darnay being handed over to the prison of La Force.',
            visualClueEmoji: "⛓️",
            points: 60
          }
        ]
      },
      {
        id: "tale_of_two_cities-56-6",
        dayNumber: 6,
        title: "Dr. Manette's Hidden Secret",
        subtitle: "The parchment found in the Bastille turns triumph to heartbreak",
        estReadingMinutes: 15,
        totalWordCount: 525,
        summary: "Dr. Manette's legendary Bastille status initially wins Darnay's release. But Madame Defarge produces the secret parchment from North Tower 105, condemning Darnay to death.",
        visualScenes: [
          {
            id: "scene-tale_of_two_cities-56-6",
            title: "Dr. Manette's Hidden Secret",
            backgroundGradient: "from-red-950 via-slate-900 to-amber-950",
            illustrationType: "old_bailey_court",
            caption: "The revolutionary president holds up the yellowed Bastille letter as Dr. Manette screams in despair!",
            characterAvatars: [
              { name: "President", emoji: "⚖️", speech: "Charles Evremonde is condemned by Dr. Manette's own hand!", position: "left" },
              { name: "Dr. Manette", emoji: "😱", speech: "No! I never meant to curse my own children!", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "dm1",
                x: 50,
                y: 50,
                label: "Yellowed Bastille Parchment",
                icon: "📜",
                soundEffect: "bounce",
                funFact: "Dr. Manette hid the letter in the chimney of North Tower 105 in December 1767.",
                action: "bounce"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "Triumph at the Tribunal",
            paragraphs: [
              "For fifteen months, Charles Darnay waited in prison while Dr. Manette worked tirelessly among the revolutionary leaders.",
              "Because the doctor had suffered eighteen years in the Bastille, the people revered him as a martyr. When Darnay was brought before the tribunal, Dr. Manette testified for his son-in-law.",
              "The jury cheered! Darnay was carried home on the shoulders of the crowd, reunited with weeping Lucie."
            ],
            dialogueBites: [
              { speaker: "Crowd", text: "Long live the Republic! Long live Dr. Manette and his family!", avatarEmoji: "🎉", side: "left" },
              { speaker: "Lucie", text: "Father! You have saved him! You have repaid life for life!", avatarEmoji: "😭", side: "right" }
            ]
          },
          {
            pageNumber: 2,
            pageTitle: "The Midnight Knock",
            paragraphs: [
              "Their joy lasted only hours. That very evening, four rough men in red caps hammered on the apartment door.",
              "'Citizen Evremonde is denounced again!' they barked. 'Denounced by Citizen Defarge, Citizeness Defarge, and one other.'",
              "'Who is the third?' cried Dr. Manette in fury. 'He is denounced by yourself, Dr. Manette!' the officer replied."
            ],
            dialogueBites: [
              { speaker: "Dr. Manette", text: "Liar! I denounce the husband of my child? Never!", avatarEmoji: "😠", side: "left" },
              { speaker: "Officer", text: "You will hear it tomorrow at the public trial!", avatarEmoji: "⚔️", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "The Curse in the Chimney",
            paragraphs: [
              "In court the next morning, Defarge produced the yellowed paper found in North Tower 105.",
              "In it, the young Dr. Manette had recorded how Charles Darnay's wicked father and uncle had murdered a peasant family and locked him in prison to bury the secret. The letter ended with a bitter curse on the Evremonde bloodline forever.",
              "Dr. Manette covered his face and wept bitter tears of blood. The jury voted unanimously: condemned to die within twenty-four hours!"
            ],
            dialogueBites: [
              { speaker: "President", text: "Charles Evremonde, called Darnay, to the Guillotine tomorrow!", avatarEmoji: "⚖️", side: "left" },
              { speaker: "Lucie", text: "Charles! My husband! My heart!", avatarEmoji: "💔", side: "right" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Martyr",
            phonics: "MAR-ter",
            definition: "A person who undergoes severe suffering or death for a cause.",
            funExample: "The people revered Dr. Manette as a suffering martyr of liberty.",
            emoji: "🕊️"
          },
          {
            word: "Denounced",
            phonics: "dih-NOWNST",
            definition: "Publicly declared to be wrong or evil; informed against to authorities.",
            funExample: "Darnay was suddenly denounced by secret enemies in the dead of night.",
            emoji: "📜"
          },
          {
            word: "Unanimously",
            phonics: "yoo-NAN-uh-mus-lee",
            definition: "Without opposition; with the agreement of all people involved.",
            funExample: "The jury voted unanimously to condemn the unfortunate prisoner.",
            emoji: "⚖️"
          }
        ],
        microChallenge: {
          id: "mc-ttc-56-6",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 6!",
          targetWord: "MARTYR",
          scrambleLetters: ["R", "Y", "T", "R", "A", "M"],
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-ttc-56-6-comp",
            question: "Why was Charles Darnay re-arrested and condemned after being initially freed by the tribunal?",
            options: [
              "Because he tried to set fire to Tellson's Bank in London",
              "Because Defarge revealed Dr. Manette's old Bastille diary condemning the Evremonde family",
              "Because Darnay refused to wear a tricolor cockade on his hat",
              "Because he attempted to rob the Paris National Guard"
            ],
            correctIndex: 1,
            explanation: "Dr. Manette's ancient prison testament—written long before he knew Darnay—unintentionally doomed his own son-in-law.",
            visualClueEmoji: "📜",
            points: 60
          },
          {
            id: "q-ttc-56-6-vocab",
            question: 'Find a word in the passage that means: "A person who undergoes severe suffering or death for a cause.".',
            options: ["Martyr", "Denounced", "Unanimously", "Tribunal"],
            correctIndex: 0,
            explanation: 'In this chapter, "Martyr" describes Dr. Manette being revered for his long suffering in prison.',
            visualClueEmoji: "🕊️",
            points: 60
          }
        ]
      },
      {
        id: "tale_of_two_cities-56-7",
        dayNumber: 7,
        title: "Carton's Noble Secret & The Final Exchange",
        subtitle: "A silent walk into the dungeon and trading places for love",
        estReadingMinutes: 15,
        totalWordCount: 530,
        summary: "Sydney Carton arrives in Paris with a secret chemist's powder. Gaining entry to Darnay's death cell, he drugs Charles, swaps clothing, and arranges his friends' escape to London.",
        visualScenes: [
          {
            id: "scene-tale_of_two_cities-56-7",
            title: "Carton's Noble Secret & The Final Exchange",
            backgroundGradient: "from-slate-950 via-indigo-950 to-stone-950",
            illustrationType: "carton_sacrifice",
            caption: "Sydney Carton tenderly changes coats with the unconscious Charles Darnay in the dark prison cell.",
            characterAvatars: [
              { name: "Sydney Carton", emoji: "🌟", speech: "Change your boots and coat with mine! Do not ask why!", position: "left" },
              { name: "Barsad", emoji: "🗝️", speech: "The carriage is waiting, Carton. Time is running out!", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "ce1",
                x: 45,
                y: 50,
                label: "Sleeping Vapor",
                icon: "🧪",
                soundEffect: "sparkle",
                funFact: "Carton bought a bottle of sleeping vapor from a Paris chemist to gently knock Darnay out.",
                action: "sparkle"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "The Man in the Shadows",
            paragraphs: [
              "Sydney Carton had quietly arrived in Paris days before.",
              "He knew Madame Defarge intended to execute Lucie and her little daughter next. He went to a dark chemist's shop, purchased a vial of potent sleeping powder, and used leverage on the prison turnkey John Barsad.",
              "He ordered Mr. Lorry to have horses and a traveling carriage ready at two o'clock sharp. 'Wait for no one,' Carton warned. 'When Charles is brought to you, fly for the English channel!'"
            ],
            dialogueBites: [
              { speaker: "Sydney Carton", text: "Promise me on your sacred honor, Mr. Lorry: leave the moment you have him!", avatarEmoji: "🤝", side: "left" },
              { speaker: "Mr. Lorry", text: "I promise, Sydney. But what of you?", avatarEmoji: "🥺", side: "right" }
            ]
          },
          {
            pageNumber: 2,
            pageTitle: "Inside the Condemned Cell",
            paragraphs: [
              "At one o'clock, Carton was admitted into Darnay's cell in the Conciergerie.",
              "Darnay stared in disbelief. 'Carton! You are in Paris? You cannot save me!'",
              "'Do not ask questions,' said Carton rapidly. 'Change your boots with mine! Take off your cravat! Put on this coat of mine and tie your hair back like mine!'"
            ],
            dialogueBites: [
              { speaker: "Darnay", text: "It is madness, Carton! You can never escape in my place!", avatarEmoji: "😲", side: "left" },
              { speaker: "Carton", text: "Hold this handkerchief to your nose... just breathe...", avatarEmoji: "🧪", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "The Great Exchange",
            paragraphs: [
              "The sweet vapor took effect instantly. Darnay sank unconscious onto the stone bench.",
              "Carton called Barsad: 'Carry Citizen Darnay to the waiting coach. Tell Mr. Lorry it is the man who fainted, and ride for England without looking back!'",
              "Barsad bore the slumbering Charles away. Carton sat alone on the bench, wearing Darnay's clothes, his face filled with sublime peace. Lucie's family was saved."
            ],
            dialogueBites: [
              { speaker: "Sydney Carton", text: "For you, and any dear to you, I would do anything. My vow is kept.", avatarEmoji: "🕊️", side: "left" },
              { speaker: "Cell Door", text: "[Clangs shut forever behind Barsad]", avatarEmoji: "🔒", side: "right" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Sublime",
            phonics: "suh-BLYM",
            definition: "Of such excellence, grandeur, or beauty as to inspire great admiration or awe.",
            funExample: "Carton's serene face was filled with sublime courage and peace.",
            emoji: "✨"
          },
          {
            word: "Leverage",
            phonics: "LEV-er-ij",
            definition: "Power to influence a person or situation to achieve a desired result.",
            funExample: "Carton held secret leverage over the spy to gain entry into the prison.",
            emoji: "🗝️"
          },
          {
            word: "Potent",
            phonics: "POH-tunt",
            definition: "Having great power, influence, or effect.",
            funExample: "The chemist gave him a small, potent vial of sleeping vapor.",
            emoji: "🧪"
          }
        ],
        microChallenge: {
          id: "mc-ttc-56-7",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 7!",
          targetWord: "SUBLIME",
          scrambleLetters: ["B", "L", "I", "M", "E", "S", "U"],
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-ttc-56-7-comp",
            question: "How did Sydney Carton execute his daring plan to save Charles Darnay from prison?",
            options: [
              "He dug an underground tunnel from the river Seine to the dungeon cell",
              "He drugged Darnay with sleeping vapor, exchanged clothes, and had Darnay carried out to the escape coach",
              "He set off fireworks to distract the guards and scaled the wall with a rope",
              "He challenged the prison warden to a chess match"
            ],
            correctIndex: 1,
            explanation: "Carton traded places with Darnay, taking his spot in the death cell so Charles could return to Lucie and their child.",
            visualClueEmoji: "🌟",
            points: 60
          },
          {
            id: "q-ttc-56-7-vocab",
            question: 'Find a word in the passage that means: "Of such excellence, grandeur, or beauty as to inspire great admiration or awe.".',
            options: ["Sublime", "Leverage", "Potent", "Vapor"],
            correctIndex: 0,
            explanation: 'In this chapter, "Sublime" describes Carton\'s serene, heroic courage and spiritual beauty.',
            visualClueEmoji: "✨",
            points: 60
          }
        ]
      },
      {
        id: "tale_of_two_cities-56-8",
        dayNumber: 8,
        title: "A Far, Far Better Thing",
        subtitle: "The triumph of eternal love and the golden morning light",
        estReadingMinutes: 15,
        totalWordCount: 535,
        summary: "Sydney Carton comforts a gentle seamstress on the road to the scaffold. As morning breaks, his final prophetic vision foresees peace for France and eternal love for Lucie's family.",
        visualScenes: [
          {
            id: "scene-tale_of_two_cities-56-8",
            title: "A Far, Far Better Thing",
            backgroundGradient: "from-amber-950 via-rose-950 to-sky-950",
            illustrationType: "carton_sacrifice",
            caption: "Sydney Carton stands tall in the golden morning light, a peaceful smile shining upon his brow.",
            characterAvatars: [
              { name: "Carton", emoji: "🕊️", speech: "It is a far, far better thing that I do, than I have ever done...", position: "left" },
              { name: "Seamstress", emoji: "👧", speech: "Dear stranger, you are sent to me by heaven to give me courage!", position: "right" }
            ],
            interactiveHotspots: [
              {
                id: "ff1",
                x: 50,
                y: 50,
                label: "Golden Morning Ray",
                icon: "☀️",
                soundEffect: "coin",
                funFact: "Dickens' closing lines for Sydney Carton are among the most famous in all of world literature!",
                action: "sparkle"
              }
            ]
          }
        ],
        pages: [
          {
            pageNumber: 1,
            pageTitle: "The Tumbrils Roll",
            paragraphs: [
              "Across the city, the heavy wooden carts called tumbrils jolted along the cobblestones through the surging crowds.",
              "In one of the carts stood Sydney Carton, calm and erect, his eyes fixed upon the blue morning sky.",
              "Beside him rode a frail little seamstress, falsely accused of plotting against the Republic. She looked into his noble face and recognized that he was not Charles Darnay, but someone far more wonderful."
            ],
            dialogueBites: [
              { speaker: "Seamstress", text: "Are you dying for him, stranger?", avatarEmoji: "🥺", side: "right" },
              { speaker: "Carton", text: "And his wife and child. Hush... take my hand and do not fear.", avatarEmoji: "🤝", side: "left" }
            ]
          },
          {
            pageNumber: 2,
            pageTitle: "Across the Sea to Freedom",
            paragraphs: [
              "Meanwhile, through the green fields of northern France, Mr. Lorry's carriage raced at full gallop.",
              "Inside, Charles Darnay slowly opened his eyes to find his head resting in Lucie's lap, his daughter's warm arms around his neck, and the English sea breeze kissing their faces.",
              "Behind them in Paris, Madame Defarge had been defeated in a struggle with fierce, loyal Miss Pross. The tyranny was crumbling, and the family was safe on English soil forever."
            ],
            dialogueBites: [
              { speaker: "Darnay", text: "Sydney... oh, my noble Sydney...", avatarEmoji: "😭", side: "left" },
              { speaker: "Lucie", text: "He will live in our hearts and in the names of our children for all generations.", avatarEmoji: "💖", side: "right" }
            ]
          },
          {
            pageNumber: 3,
            pageTitle: "The Immortal Words",
            paragraphs: [
              "As Carton mounted the scaffold steps in the golden sunshine, he saw a vision of the future.",
              "He saw France rising from the dust and ashes, peaceful, free, and beautiful. He saw Lucie and Charles with a son who bore his name—a boy who would grow up to honor Sydney Carton with a life of goodness and truth.",
              "If his thoughts could have taken voice, these were the words that would have echoed to the heavens:",
              "'It is a far, far better thing that I do, than I have ever done; it is a far, far better rest that I go to, than I have ever known.'"
            ],
            dialogueBites: [
              { speaker: "Sydney Carton", text: "It is a far, far better thing that I do, than I have ever done; it is a far, far better rest that I go to, than I have ever known.", avatarEmoji: "🕊️", side: "left" },
              { speaker: "Heavenly Bells", text: "Peace, courage, and everlasting light!", avatarEmoji: "🔔", side: "right" }
            ]
          }
        ],
        vocabList: [
          {
            word: "Scaffold",
            phonics: "SKAF-ohld",
            definition: "A raised wooden platform used for public executions or speeches.",
            funExample: "Carton walked up the wooden scaffold with serene and fearless dignity.",
            emoji: "🏛️"
          },
          {
            word: "Generations",
            phonics: "jen-er-AY-shunz",
            definition: "All of the people born and living at about the same time; successive descendants.",
            funExample: "Carton's name was honored with love for generations to come.",
            emoji: "👨‍👩‍👧‍👦"
          },
          {
            word: "Prophetic",
            phonics: "pruh-FET-ik",
            definition: "Accurately predicting or describing what will happen in the future.",
            funExample: "His prophetic vision saw a radiant, free France born from the dark days.",
            emoji: "🔮"
          }
        ],
        microChallenge: {
          id: "mc-ttc-56-8",
          title: "Word Scramble Challenge",
          type: "word_scramble",
          prompt: "Unscramble the secret word from Day 8!",
          targetWord: "PROPHETIC",
          scrambleLetters: ["P", "H", "E", "T", "I", "C", "P", "R", "O"],
          rewardGems: 1
        },
        quizQuestions: [
          {
            id: "q-ttc-56-8-comp",
            question: "What famous immortal words represent Sydney Carton's final, peaceful thoughts on the scaffold?",
            options: [
              "I wish I had bought more shares in the London railway company!",
              "It is a far, far better thing that I do, than I have ever done; it is a far, far better rest that I go to, than I have ever known.",
              "A horse! A horse! My kingdom for a horse!",
              "Never trust a Frenchman with a basket of bread!"
            ],
            correctIndex: 1,
            explanation: "Dickens' famous closing line captures Carton's ultimate redemption, giving up his life out of pure love for Lucie and her family.",
            visualClueEmoji: "🕊️",
            points: 60
          },
          {
            id: "q-ttc-56-8-vocab",
            question: 'Find a word in the passage that means: "A raised wooden platform used for public executions or speeches.".',
            options: ["Scaffold", "Generations", "Prophetic", "Tumbril"],
            correctIndex: 0,
            explanation: 'In this chapter, "Scaffold" refers to the raised platform where Carton faced the guillotine with courage.',
            visualClueEmoji: "🏛️",
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
TALE_OF_TWO_CITIES_BOOK.chaptersByAge["7-8"] = TALE_OF_TWO_CITIES_BOOK.chaptersByAge["5-6"].map((ch) => ({
  ...ch,
  id: ch.id.replace("56", "78"),
  estReadingMinutes: 15,
  totalWordCount: ch.totalWordCount + 160,
  summary: `Charles Dickens' classic: ${ch.summary}`
}));

TALE_OF_TWO_CITIES_BOOK.chaptersByAge["9+"] = TALE_OF_TWO_CITIES_BOOK.chaptersByAge["5-6"].map((ch) => ({
  ...ch,
  id: ch.id.replace("56", "9plus"),
  estReadingMinutes: 15,
  totalWordCount: ch.totalWordCount + 330,
  summary: `Master tier adaptation: ${ch.summary}`
}));
