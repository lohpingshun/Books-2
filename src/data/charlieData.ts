import { Book } from "../types";

export const CHARLIE_BOOK: Book = {
  "id": "charlie",
  "title": "Charlie and the Chocolate Factory",
  "author": "Roald Dahl",
  "badgeTitle": "Golden Ticket Explorer",
  "coverColor": "from-amber-600 via-amber-800 to-yellow-950",
  "accentColor": "#D97706",
  "borderColor": "border-amber-400",
  "themeIcon": "🍫",
  "descriptionByAge": {
    "5-6": "Join humble Charlie Bucket as he finds the fifth Golden Ticket and tours Willy Wonka's extraordinary chocolate factory with Grandpa Joe!",
    "7-8": "Experience Charlie Bucket's incredible journey into Willy Wonka's secret chocolate factory, meeting the Oompa Loompas and discovering the great glass elevator!",
    "9+": "Delve into Roald Dahl's classic tale of poverty, humility, and moral integrity as Charlie Bucket inherits Willy Wonka's wonderland."
  },
  "chaptersByAge": {
    "5-6": [
      {
        "id": "charlie-56-1",
        "dayNumber": 1,
        "title": "The Shiny Golden Ticket",
        "subtitle": "Charlie's snowy day surprise and the fifth ticket!",
        "estReadingMinutes": 15,
        "totalWordCount": 680,
        "summary": "Freezing and hungry in the deep winter snow, little Charlie Bucket finds a shiny silver coin. He buys a Wonka chocolate bar and discovers the fifth Golden Ticket!",
        "visualScenes": [
          {
            "id": "scene-c56-1",
            "title": "Snowy Town & The Corner Shop",
            "backgroundGradient": "from-sky-900 via-blue-800 to-amber-100",
            "illustrationType": "wonka_gates",
            "caption": "Charlie walked through the cold white snow with his thin jacket. Outside the warm sweet shop, he spotted a shiny silver coin half-buried by the curb!",
            "characterAvatars": [
              {
                "name": "Charlie",
                "emoji": "👦",
                "speech": "My tummy is rumbling, but look at that silver coin in the snow!",
                "position": "left"
              },
              {
                "name": "Shopkeeper",
                "emoji": "👨‍🍳",
                "speech": "Welcome in from the freezing cold, young lad!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "h1",
                "x": 30,
                "y": 70,
                "label": "Silver Coin",
                "icon": "🪙",
                "soundEffect": "coin",
                "funFact": "Charlie found a shiny silver dollar lying in the snow near the curb!",
                "action": "sparkle"
              },
              {
                "id": "h2",
                "x": 75,
                "y": 40,
                "label": "Sweet Shop Window",
                "icon": "🍫",
                "soundEffect": "success",
                "funFact": "The shop window was filled with glass jars of mint drops, fudge, and chocolate bars!",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Cold Winter Walk and the Little House",
            "paragraphs": [
              "Little Charlie Bucket walked slowly down the snowy street on his way home from school. The freezing winter wind blew right through the tiny holes in his thin coat, making his teeth chatter like little drums. The white snow was deep and icy under his worn-out boots, crunching with every single step he took.",
              "Charlie lived with his mother, his father, and four elderly grandparents in a tiny wooden cottage at the edge of the great town. The cottage had only two small rooms and only one bed. The four grandparents—Grandpa Joe and Grandma Josephine on one side, and Grandpa George and Grandma Georgina on the other—were all over ninety years old. They stayed tucked under their warm patchwork quilt all day to keep warm.",
              "Every evening, Charlie's family sat around the little table and ate watery cabbage soup with thin slices of bread and margarine. They were very poor, and Charlie was always hungry. But Charlie never cried or complained. He loved his parents and his four sweet grandparents with all his heart, and every night Grandpa Joe would tell him wonderful bedtime stories.",
              "On his daily walk home, Charlie always had to walk right past Willy Wonka's giant chocolate factory. The factory had high iron gates and tall brick walls with white smoke curling from its chimneys. Whenever Charlie walked by, he would hold his breath, stop on his tiptoes, and take huge deep sniffs. The cold winter air smelled richly of melted milk chocolate, roasted cocoa beans, and sweet warm vanilla sugar. It made Charlie's tummy rumble with longing!"
            ],
            "dialogueBites": [
              {
                "speaker": "Charlie",
                "text": "Oh, sniff that sweet air, Grandpa! It smells just like melted chocolate and warm sugar!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Grandpa Joe",
                "text": "Willy Wonka is the most clever chocolate maker who ever lived, Charlie!",
                "avatarEmoji": "👴",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c56-1-1",
              "question": "What was the only food Charlie's family could afford for dinner?",
              "options": [
                "Hot pizza with melted cheese",
                "Watery cabbage soup and bread",
                "Bowls of fresh strawberries and cream"
              ],
              "correctInsightIndex": 1,
              "insight": "Charlie's poor family could only afford watery cabbage soup and bread, but they loved each other deeply!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "A Shiny Coin in the Cold White Snow",
            "paragraphs": [
              "During that freezing winter, exciting news shook the entire world! Mr. Willy Wonka announced that he had hidden five secret Golden Tickets underneath the paper wrappers of five ordinary Wonka chocolate bars. The lucky children who found them would win a full day's tour inside the secret factory, plus enough sweets to last them their whole lives!",
              "Four of the tickets were quickly found by greedy and selfish children. Augustus Gloop, an enormously fat boy who ate candy all day, found the first ticket. Veruca Salt, a spoiled girl whose rich father bought thousands of candy boxes, found the second. Violet Beauregarde, who chewed gum all day, found the third. Mike Teavee, who watched television gun fights all day, found the fourth. Now, only one single Golden Ticket remained hidden anywhere on earth.",
              "One freezing afternoon, as Charlie walked past the shops with his hands jammed deep into his empty pockets, something shiny caught his eye. Down in the gutter, half-buried under the frozen white slush, lay a round silver coin! Charlie stopped and knelt in the snow. His fingers were so numb with cold that he could barely pick it up, but he brushed away the ice. It was a real, shiny silver dollar!",
              "Charlie's heart thumped against his ribs. He looked around to see if someone had dropped it, but the snowy street was completely empty. His belly rumbled with hunger. He knew he should take the money home to help his family, but he was so terribly hungry. He decided he would buy just one chocolate bar, and take all the rest of the silver coins straight home to his mother."
            ],
            "dialogueBites": [
              {
                "speaker": "Charlie",
                "text": "A silver dollar in the snow! I can buy one sweet chocolate bar and give the rest of the money to Mother!",
                "avatarEmoji": "🪙",
                "side": "left"
              },
              {
                "speaker": "Narrator",
                "text": "There was only one final Golden Ticket left in the whole wide world...",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-charlie-56-1-p2",
              "question": "Find a word on this page that means: \"Worth a great deal of love or value; very special.\".",
              "options": [
                "Little",
                "Charlie",
                "Precious"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Precious\" (PRESH-us) means worth a great deal of love or value; very special.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Dazzling Flash of Pure Gold",
            "paragraphs": [
              "Charlie pushed open the door of the warm corner sweet shop. A little brass bell went ting-a-ling over his head. The air inside was wonderfully warm and smelled of peppermint drops, fudge, and roasting nuts. A friendly, fat shopkeeper stood smiling behind the wooden counter.",
              "Charlie stepped up to the counter and placed the silver coin on the wood. He spoke politely with good manners: \"One Wonka Whipple-Scrumptious Fudgemallow Delight, please!\" The shopkeeper smiled warmly, took down a thick brown chocolate bar, and handed Charlie nine silver nickels in change.",
              "Charlie tore off the brown paper wrapper. He took a huge bite of the creamy chocolate. It tasted like heaven on his tongue! But then, underneath the wrapper, something bright and metallic caught the light. It gave a brilliant, dazzling flash of pure gold!",
              "The shopkeeper leaned over the counter and gasped in total shock. \"Good heavens, look at that!\" he shouted at the top of his voice. \"It's a Golden Ticket! You've found Wonka's last Golden Ticket!\" People in the shop rushed around Charlie, clapping and cheering. But Charlie held the precious gold paper tight in his hands and ran out the door. He ran as fast as his legs could carry him, heading straight home to share the glorious news with his loving family!"
            ],
            "dialogueBites": [
              {
                "speaker": "Shopkeeper",
                "text": "You've found the fifth Golden Ticket, young lad! Run home quick and tell your family!",
                "avatarEmoji": "👨‍🍳",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "Grandpa Joe! Mother! Father! Look what I found!",
                "avatarEmoji": "🎫",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c56-1-3",
              "question": "What did Charlie do as soon as he saw the Golden Ticket?",
              "options": [
                "Ran straight home to share the happy news with his loving family",
                "Ate the ticket because he thought it was candy",
                "Hid under the store counter and went to sleep"
              ],
              "correctInsightIndex": 0,
              "insight": "Charlie's very first thought was to rush home and share the wonderful miracle with his parents and grandparents!",
              "rewardKP": 15
            }
          }
        ],
        "paragraphs": [
          "Little Charlie Bucket walked slowly down the snowy street on his way home from school. The freezing winter wind blew right through the holes in his thin jacket, making his teeth chatter like little drums. The white snow was deep and icy under his worn-out boots.",
          "Charlie lived with his mother, his father, and four cozy grandparents in a tiny wooden cottage at the edge of town. They were very poor and could only afford watery cabbage soup and bread. But Charlie never complained, because he loved his family with all his heart.",
          "Every afternoon on his walk home, Charlie walked past Willy Wonka's giant chocolate factory. The air smelled richly of melted milk chocolate, roasted cocoa beans, and warm vanilla sugar. Charlie would take huge deep breaths just to taste the sweet air.",
          "Exciting news shook the world: Mr. Wonka had hidden five secret Golden Tickets inside five ordinary chocolate bars! Four tickets had already been found by greedy children. Only one final Golden Ticket remained hidden in the entire world.",
          "One cold afternoon, Charlie spotted a shiny round silver dollar half-buried in the snow near the curb. His tummy rumbled with hunger. He picked up the coin and decided to buy one chocolate bar, and take all the rest of the money home to his mother.",
          "Charlie walked into the warm corner sweet shop and said politely: \"One Wonka Whipple-Scrumptious Fudgemallow Delight, please!\" He tore off the brown paper wrapper, and suddenly saw a dazzling flash of pure gold underneath!",
          "The shopkeeper cried with joy: \"It's a Golden Ticket! You found Wonka's fifth ticket!\" Charlie clutched the shiny gold paper tightly and dashed through the snowy streets to tell his loving parents and grandparents!"
        ],
        "vocabList": [
          {
            "word": "Dazzling",
            "phonics": "DAZ-ling",
            "definition": "Shining very bright and sparkling, like pure gold in the light.",
            "funExample": "The Golden Ticket gave a dazzling flash of bright gold!",
            "emoji": "✨"
          },
          {
            "word": "Polite",
            "phonics": "puh-LITE",
            "definition": "Having gentle manners, saying please, and treating others with kindness.",
            "funExample": "Charlie was polite and said please to the shopkeeper.",
            "emoji": "🤝"
          },
          {
            "word": "Precious",
            "phonics": "PRESH-us",
            "definition": "Worth a great deal of love or value; very special.",
            "funExample": "Charlie held the precious Golden Ticket tight in his hands.",
            "emoji": "💎"
          }
        ],
        "microChallenge": {
          "id": "mc-c56-1",
          "title": "Find the Fifth Golden Ticket!",
          "type": "golden_ticket_scratch",
          "prompt": "Tap the chocolate wrapper to reveal the shiny golden ticket:",
          "options": [
            "Silver Foil",
            "Golden Ticket",
            "Brown Paper"
          ],
          "rewardGems": 25
        },
        "quizQuestions": [
          {
            "id": "qc56-1-1",
            "question": "What was the only food Charlie's family could afford for dinner?",
            "options": [
              "Hot pizza with melted cheese",
              "Watery cabbage soup and bread",
              "Crispy fried chicken and chips",
              "Fresh strawberries and sweet cream"
            ],
            "correctIndex": 1,
            "explanation": "The story says Charlie's poor family could only afford watery cabbage soup and bread.",
            "visualClueEmoji": "🥣",
            "points": 60
          },
          {
            "id": "q-charlie-56-1-vocab1",
            "question": "Find a word in the passage that means: \"Shining very bright and sparkling, like pure gold in the light.\".",
            "options": [
              "Little",
              "Charlie",
              "Dazzling",
              "Bucket"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Dazzling\" means shining very bright and sparkling, like pure gold in the light.",
            "visualClueEmoji": "✨",
            "points": 60
          },
          {
            "id": "qc56-1-3",
            "question": "The story says the ticket had a dazzling shine. What does \"dazzling\" mean?",
            "options": [
              "Shining very bright and sparkling like pure gold",
              "Dark and muddy like winter slush",
              "Completely hidden under a heavy stone",
              "Grey and dull like cold winter fog"
            ],
            "correctIndex": 0,
            "explanation": "Dazzling means shining very bright and sparkling, just like the pure gold on the ticket!",
            "visualClueEmoji": "✨",
            "points": 60
          },
          {
            "id": "q-charlie-56-1-vocab2",
            "question": "Find a word in the passage that means: \"Having gentle manners, saying please, and treating others with kindness.\".",
            "options": [
              "Little",
              "Charlie",
              "Bucket",
              "Polite"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Polite\" means having gentle manners, saying please, and treating others with kindness.",
            "visualClueEmoji": "🤝",
            "points": 60
          }
        ]
      },
      {
        "id": "charlie-56-2",
        "dayNumber": 2,
        "title": "The Chocolate Waterfall Room",
        "subtitle": "A roaring river of chocolate and sweet mint grass you can eat!",
        "estReadingMinutes": 15,
        "totalWordCount": 710,
        "summary": "Mr. Wonka opens the giant purple doors to reveal the Great Chocolate Room. Charlie sees a roaring waterfall churning melted chocolate into a brown river, and sweet mint grass you can eat!",
        "visualScenes": [
          {
            "id": "scene-c56-2",
            "title": "The Roaring Waterfall of Cocoa",
            "backgroundGradient": "from-amber-700 via-amber-500 to-emerald-300",
            "illustrationType": "chocolate_waterfall",
            "caption": "A giant waterfall whipped brown chocolate into silky smooth candy. Along the banks grew edible sweet green mint sugar grass!",
            "characterAvatars": [
              {
                "name": "Mr. Wonka",
                "emoji": "🎩",
                "speech": "Everything in this room is eatable! Even the grass!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "🤩",
                "speech": "Look at the giant brown chocolate river!",
                "position": "center"
              },
              {
                "name": "Augustus",
                "emoji": "🍫",
                "speech": "I must drink from the river right now!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "h4",
                "x": 40,
                "y": 60,
                "label": "Chocolate River",
                "icon": "🌊",
                "soundEffect": "magic",
                "funFact": "The waterfall churns the chocolate to make it light and frothy!",
                "action": "sparkle"
              },
              {
                "id": "h5",
                "x": 80,
                "y": 70,
                "label": "Mint Candy Grass",
                "icon": "🌱",
                "soundEffect": "success",
                "funFact": "The grass tastes like sweet peppermint sugar!",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Through the Secret Purple Doors",
            "paragraphs": [
              "At ten o'clock on the first day of February, the tall iron gates of Willy Wonka's factory swung wide open. A crowd of cheering people stood in the snow as Mr. Willy Wonka stepped forward to welcome the five ticket winners and their families.",
              "Mr. Wonka was an extraordinary little man. He wore a plum-colored velvet tailcoat, bottle-green trousers, pearl-grey gloves, and a tall black top hat perched crookedly on his head. He carried a fine gold-topped cane, and his bright blue eyes sparkled with playful mischief and clever smiles.",
              "He skipped down a long, winding corridor of gleaming white tiles with a jaunty spring in his step. The children and their parents had to hurry to keep up with him. Finally, Mr. Wonka stopped outside a gigantic pair of polished purple double doors.",
              "'Important room this!' shouted Mr. Wonka, waving his walking cane with excitement. 'This is the nerve center of the whole operation! The beating heart of my entire factory! Hold your breath, my lovely children, for you are about to see wonder itself!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "Hold your breath, children! You are about to see the most marvelous room in the world!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Grandpa Joe",
                "text": "Hold my hand tight, Charlie. We are entering candy paradise!",
                "avatarEmoji": "👴",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c56-2-1",
              "question": "What was Mr. Wonka wearing when he welcomed the children?",
              "options": [
                "A suit of heavy metal armor",
                "A yellow raincoat with giant rubber boots",
                "A plum-colored velvet coat, green trousers, and a black top hat"
              ],
              "correctInsightIndex": 2,
              "insight": "Mr. Wonka wore a colorful plum velvet coat and a crooked top hat with sparkling blue eyes!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Sweet Valley of Edible Mint Grass",
            "paragraphs": [
              "Mr. Wonka flung the giant purple doors wide open. An astonishing sight opened up before everyone's eyes! They were standing at the top of a lush, rolling green valley that stretched as far as the eye could see.",
              "Flowing right through the middle of the valley was a wide, swirling river of rich brown liquid. At the far end of the valley, a tremendous fifty-foot waterfall crashed down a rocky cliff, splashing froth, mist, and creamy bubbles high into the air.",
              "'That river is pure melted chocolate!' cried Mr. Wonka proudly. 'Every single drop is rich, warm chocolate! There is enough chocolate in that river to fill every bathtub and swimming pool in the whole country! And the waterfall churns and mixes the chocolate with air to make it light, fluffy, and delicious!'",
              "Mr. Wonka pointed down at the lovely green field. 'And look at the ground! That grass is made of a new soft mint sugar that I have just invented! It is completely eatable! Try a blade of grass beneath your feet, my dear Charlie!\\' Charlie knelt down and nibbled a tiny blade of green sugar grass. It tasted sweetly of cool peppermint, melting instantly on his tongue."
            ],
            "dialogueBites": [
              {
                "speaker": "Charlie",
                "text": "Grandpa Joe, the grass is delicious! It tastes like sweet peppermint sugar!",
                "avatarEmoji": "🌱",
                "side": "left"
              },
              {
                "speaker": "Augustus",
                "text": "I don't care about little blades of grass! I want to drink the chocolate river!",
                "avatarEmoji": "🍫",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-charlie-56-2-p2",
              "question": "Find a word on this page that means: \"Safe, clean, and delicious to eat.\".",
              "options": [
                "Eatable",
                "Clock",
                "February"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Eatable\" (EAT-uh-bul) means safe, clean, and delicious to eat.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "Augustus Takes a Plunge in the River",
            "paragraphs": [
              "Across the river, on the green banks beneath weeping willow candy trees, tiny little men with neon hair were busy working. They were no taller than Charlie's knee, wearing brown deer skins. 'Those are the Oompa Loompas!' whispered Mr. Wonka happily. 'My wonderful workers from Loompaland!'",
              "While Charlie and Grandpa Joe watched the little Oompa Loompas in wonder, Augustus Gloop was already scrambling greedily down the steep slippery bank. His eyes were wide with hunger as he stared at the warm brown river.",
              "'Augustus!' shouted Mr. Wonka in alarm. 'Please step back! Do not touch the chocolate river! My chocolate must be kept completely untouched by human hands!'",
              "Augustus completely ignored Mr. Wonka's warning. He threw himself onto his knees, dunked his face right into the warm chocolate, and began gulping it down like a thirsty dog. Suddenly, his shoes slipped on the wet bank—SPLASH! Augustus plunged headfirst into the deep chocolate river! He bobbed up and down, sputtering brown foam, before being sucked into a giant glass transport pipe that carried him away to the fudge room. On the far bank, the Oompa Loompas began beating little drums and singing a funny song about the dangers of greed."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "My chocolate river! Augustus has fallen in! Call the pump!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Oompa Loompas",
                "text": "Oompa Loompa doompety dee, greedy children get stuck, you see!",
                "avatarEmoji": "🧑‍🌾",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c56-2-3",
              "question": "What happened when Augustus Gloop ignored Mr. Wonka's warning?",
              "options": [
                "He found another Golden Ticket in his pocket",
                "His shoes slipped and he fell headfirst into the chocolate river",
                "He flew up into the sky like a bird"
              ],
              "correctInsightIndex": 1,
              "insight": "Augustus didn't listen to instructions and fell right into the river because of his greed!",
              "rewardKP": 15
            }
          }
        ],
        "paragraphs": [
          "At ten o'clock on the first day of February, the iron gates of Willy Wonka's factory opened. Mr. Wonka stepped forward in his plum velvet tailcoat, bottle-green trousers, and tall black top hat with sparkling blue eyes.",
          "He led the children down a long corridor of white tiles, stopping outside a gigantic pair of polished purple double doors. Mr. Wonka shouted: \"Hold your breath, children! You are about to see wonder itself!\"",
          "Mr. Wonka swung open the purple doors. Before them lay a vast green valley with a swirling river of warm melted chocolate and a fifty-foot roaring waterfall crashing down rocky cliffs.",
          "Mr. Wonka explained proudly that the roaring waterfall churns and mixes the chocolate with air to make it light and fluffy. He showed them the green grass, which was made of soft edible mint sugar.",
          "Charlie nibbled a blade of grass, tasting cool peppermint sugar that melted on his tongue. Across the river, tiny knee-high Oompa Loompas in deer skins waved cheerfully.",
          "Suddenly, greedy Augustus Gloop ran down the bank to drink from the river, ignoring Mr. Wonka's warning. His shoes slipped on the wet bank and SPLASH! He fell headfirst into the deep chocolate river and got sucked into a glass pipe!",
          "On the far bank, the Oompa Loompas beat on little candy drums and sang a playful song about how greed always leads to trouble."
        ],
        "vocabList": [
          {
            "word": "Waterfall",
            "phonics": "WAH-ter-fall",
            "definition": "A stream of water or liquid falling from a high rocky cliff.",
            "funExample": "The roaring waterfall churned the chocolate into sweet foam.",
            "emoji": "🌊"
          },
          {
            "word": "Churn",
            "phonics": "CHURN",
            "definition": "To stir and mix a liquid fast so it becomes light, fluffy, and smooth.",
            "funExample": "The waterfall churned the chocolate with fresh air.",
            "emoji": "🥣"
          },
          {
            "word": "Eatable",
            "phonics": "EAT-uh-bul",
            "definition": "Safe, clean, and delicious to eat.",
            "funExample": "The green sugar grass was completely eatable and sweet!",
            "emoji": "🌱"
          }
        ],
        "microChallenge": {
          "id": "mc-c56-2",
          "title": "Sort the Wonka Candies!",
          "type": "candy_sort",
          "prompt": "Help the Oompa Loompas organize the edible sweets for the riverboat:",
          "options": [
            "Sugar Mint Grass",
            "Cocoa Marshmallow",
            "Caramel Pebble"
          ],
          "rewardGems": 30
        },
        "quizQuestions": [
          {
            "id": "qc56-2-1",
            "question": "Why did Mr. Wonka mix his chocolate with a giant roaring waterfall?",
            "options": [
              "Because metal mixing spoons were too expensive to buy",
              "To make a swimming pool for the visitors to swim in",
              "The waterfall churns and mixes the chocolate to make it light and fluffy",
              "To wash the factory floor every morning"
            ],
            "correctIndex": 2,
            "explanation": "The story says the roaring waterfall churns and mixes the chocolate with air to make it light and fluffy!",
            "visualClueEmoji": "🌊",
            "points": 60
          },
          {
            "id": "q-charlie-56-2-vocab1",
            "question": "Find a word in the passage that means: \"A stream of water or liquid falling from a high rocky cliff.\".",
            "options": [
              "Waterfall",
              "Clock",
              "February",
              "Tall"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Waterfall\" means a stream of water or liquid falling from a high rocky cliff.",
            "visualClueEmoji": "🌊",
            "points": 60
          },
          {
            "id": "qc56-2-3",
            "question": "What does it mean to \"churn\" a liquid like chocolate?",
            "options": [
              "To freeze it into a hard block of ice",
              "To spill it on the floor by accident",
              "To paint it with red dye",
              "To stir and mix it fast so it becomes light and smooth"
            ],
            "correctIndex": 3,
            "explanation": "To churn means to stir and mix liquid fast so it gets light, fluffy, and smooth.",
            "visualClueEmoji": "🥣",
            "points": 60
          },
          {
            "id": "q-charlie-56-2-vocab2",
            "question": "Find a word in the passage that means: \"To stir and mix a liquid fast so it becomes light, fluffy, and smooth.\".",
            "options": [
              "Clock",
              "Churn",
              "February",
              "Tall"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Churn\" means to stir and mix a liquid fast so it becomes light, fluffy, and smooth.",
            "visualClueEmoji": "🥣",
            "points": 60
          }
        ]
      },
      {
        "id": "charlie-56-3",
        "dayNumber": 3,
        "title": "The Rainbow Inventing Room",
        "subtitle": "Everlasting Gobstoppers and the magical three-course dinner gum!",
        "estReadingMinutes": 15,
        "totalWordCount": 690,
        "summary": "Mr. Wonka takes the visitors into his top-secret Inventing Room, showing Everlasting Gobstoppers and a giant machine that produces three-course dinner chewing gum!",
        "visualScenes": [
          {
            "id": "scene-c56-3",
            "title": "The Whistling Pots of Invention",
            "backgroundGradient": "from-purple-900 via-pink-700 to-amber-300",
            "illustrationType": "inventing_room",
            "caption": "Kettles whistled and pots bubbled with rainbow syrups. Mr. Wonka showed Charlie an Everlasting Gobstopper that never gets smaller!",
            "characterAvatars": [
              {
                "name": "Mr. Wonka",
                "emoji": "🎩",
                "speech": "Do not touch anything in this room! It is all experimental!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "🍭",
                "speech": "Look at the little Gobstopper! It sparkles like a crystal!",
                "position": "center"
              },
              {
                "name": "Violet",
                "emoji": "🫐",
                "speech": "I must chew that amazing dinner gum right now!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "h6",
                "x": 45,
                "y": 55,
                "label": "Gobstopper Vat",
                "icon": "🍬",
                "soundEffect": "magic",
                "funFact": "You can suck an Everlasting Gobstopper forever and it never loses its taste!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Pots Bubbling with Secret Candy",
            "paragraphs": [
              "Mr. Wonka unlocked an iron door with three heavy brass keys. The sign on the door read in red letters: 'INVENTING ROOM — PRIVATE — KEEP OUT!'",
              "'This is the most important room in the entire factory!' warned Mr. Wonka in a quiet whisper. 'All my secret new recipes are cooked up in here. None of my rival candy makers must ever find out what we are doing! Don't touch anything, children! Keep your hands to yourselves!'",
              "Charlie stared around the giant room in utter wonder. Black metal pots were boiling and bubbling on gigantic stoves. Glass kettles hissed, copper pipes rattled, and strange metal contraptions squirted colorful drops of liquid into silver pans. The air was filled with delicious smells: roasted nuts, spun sugar, sweet caramel, and warm lemon drops.",
              "Mr. Wonka led them past rows of bubbling cauldrons. He pointed to a small metal trough where round, multi-colored candy balls were tumbling out into a wicker basket. They sparkled like colorful marbles in the light."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "Step carefully, everyone! Everything here is fresh from the laboratory!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "Look at those shiny round candy balls, Grandpa Joe!",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c56-3-1",
              "question": "Why was the Inventing Room kept locked and private?",
              "options": [
                "To keep Wonka's secret candy recipes safe from rival spies",
                "Because the floor was covered with water",
                "Because the lights were turned off"
              ],
              "correctInsightIndex": 0,
              "insight": "Mr. Wonka guarded his top-secret inventions so competing candy makers couldn't copy them!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Everlasting Gobstopper",
            "paragraphs": [
              "'Everlasting Gobstoppers!' announced Mr. Wonka proudly, holding up a little striped candy ball. 'They are completely new! I am inventing them especially for children who are given very little pocket money by their parents!'",
              "Charlie leaned forward with wide, curious eyes. 'What do they do, Mr. Wonka?' he asked softly.",
              "'You can put an Everlasting Gobstopper in your mouth,' said Mr. Wonka, 'and you can suck it, and suck it, and suck it forever, and it will never get any smaller! It never loses its sweet flavor! Every week it changes to a brand new delicious color and taste. One Gobstopper will last you for the rest of your life!'",
              "Charlie thought of how little money his poor family had, and he smiled with pure delight. 'That is the most wonderful candy ever invented,' Charlie whispered. Grandpa Joe nodded happily in agreement."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "You can suck it forever, and it will never get any smaller!",
                "avatarEmoji": "🍬",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "That is perfect for children with very little pocket money!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-charlie-56-3-p2",
              "question": "Find a word on this page that means: \"To create or make a brand new thing that has never existed before.\".",
              "options": [
                "Wonka",
                "Invent",
                "Unlocked"
              ],
              "correctInsightIndex": 1,
              "insight": "\"Invent\" (in-VENT) means to create or make a brand new thing that has never existed before.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Chewing Gum Dinner and Violet's Blueberry",
            "paragraphs": [
              "Mr. Wonka hurried over to a huge rumbling machine in the center of the room. It had hundreds of glass tubes, spinning wheels, and brass levers. The machine shivered, shook, and with a loud CHUG-CHUG-PING, popped out a single, flat grey strip of chewing gum into a little tray.",
              "'This,' proclaimed Mr. Wonka, 'is a three-course dinner chewing gum! As you chew it, you taste hot tomato soup, followed by tender roast beef and baked potatoes, and finished with warm blueberry pie with rich cream!'",
              "Violet Beauregarde, who had a piece of old chewing gum behind her ear, stepped forward with greedy eyes. 'A gum that is a whole dinner? Give it to me!'",
              "'Stop! Don't touch it!' shouted Mr. Wonka in alarm. 'The gum is not ready yet! The dessert part has gone wrong in the testing!' But Violet snatched the gum and shoved it into her mouth. She chewed happily, shouting about tomato soup and juicy roast beef. But when she reached the blueberry pie, her nose turned purple. Then her cheeks turned blue! Within seconds, her whole body swelled up into a giant, round, juicy blue blueberry! Mr. Wonka shook his head and called the Oompa Loompas to roll her off to the juicing room."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "Don't chew it! The dessert part is not ready yet!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Violet",
                "text": "I'm turning blue! Help me, I feel like a giant balloon!",
                "avatarEmoji": "🫐",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c56-3-3",
              "question": "What warning did Mr. Wonka give about the three-course dinner gum?",
              "options": [
                "The gum would turn your teeth into wooden blocks",
                "The gum tasted like salty soap",
                "The gum was not ready yet and the dessert part had gone wrong"
              ],
              "correctInsightIndex": 2,
              "insight": "Mr. Wonka told Violet not to chew it because the dessert part was still experimental and not ready!",
              "rewardKP": 15
            }
          }
        ],
        "paragraphs": [
          "Mr. Wonka unlocked the heavy iron door marked: \"INVENTING ROOM — PRIVATE — KEEP OUT!\" He warned everyone to keep their hands to themselves because the room was full of top-secret recipes.",
          "Inside, black pots bubbled on huge stoves, glass kettles hissed, and colorful drops of sweet liquid dripped into silver pans. The room smelled delightfully of roasted nuts and caramel.",
          "Mr. Wonka showed them the Everlasting Gobstopper, specially invented for children with little pocket money. He explained: \"You can suck it forever, and it will never get any smaller!\"",
          "Charlie thought of his poor family and smiled with wonder at such a marvelous invention.",
          "Next, a giant rumbling machine popped out a flat grey strip of chewing gum. Mr. Wonka explained it was a three-course dinner: tomato soup, roast beef, and blueberry pie.",
          "Mr. Wonka shouted at Violet Beauregarde: \"Stop! The gum is not ready yet! The dessert part has gone wrong!\" But stubborn Violet snatched the gum and popped it into her mouth.",
          "Violet chewed happily until she reached the blueberry pie. Suddenly, her skin turned bright purple and her body swelled up into a giant round blueberry! The Oompa Loompas had to roll her away to the juicing room."
        ],
        "vocabList": [
          {
            "word": "Invent",
            "phonics": "in-VENT",
            "definition": "To create or make a brand new thing that has never existed before.",
            "funExample": "Mr. Wonka loved to invent magical new sweets.",
            "emoji": "💡"
          },
          {
            "word": "Everlasting",
            "phonics": "ev-er-LAST-ing",
            "definition": "Lasting forever; never ending or running out.",
            "funExample": "The Everlasting Gobstopper lasts forever and never gets smaller.",
            "emoji": "⏳"
          }
        ],
        "microChallenge": {
          "id": "mc-c56-3",
          "title": "Build the Gobstopper Layers!",
          "type": "candy_sort",
          "prompt": "Stack the Gobstopper color layers: Purple Grape, Sunny Lemon, Mint Green",
          "options": [
            "Sunny Lemon",
            "Purple Grape",
            "Mint Green"
          ],
          "rewardGems": 35
        },
        "quizQuestions": [
          {
            "id": "qc56-3-1",
            "question": "Why was the Everlasting Gobstopper special for children with little pocket money?",
            "options": [
              "It was made of cheap painted wood",
              "It could be traded for bags of flour at the bakery",
              "It grew into a toy airplane that could fly home",
              "You can suck it forever and it will never get any smaller"
            ],
            "correctIndex": 3,
            "explanation": "Mr. Wonka told them you can suck an Everlasting Gobstopper forever and it never gets smaller!",
            "visualClueEmoji": "🍬",
            "points": 60
          },
          {
            "id": "q-charlie-56-3-vocab1",
            "question": "Find a word in the passage that means: \"To create or make a brand new thing that has never existed before.\".",
            "options": [
              "Wonka",
              "Invent",
              "Unlocked",
              "Iron"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Invent\" means to create or make a brand new thing that has never existed before.",
            "visualClueEmoji": "💡",
            "points": 60
          },
          {
            "id": "qc56-3-3",
            "question": "What does the word \"experimental\" mean in the story?",
            "options": [
              "Something that has been sold in shops for fifty years",
              "A broken toy that should be thrown away in the trash",
              "Something new that is still being tested to see if it works",
              "A sweet made only for school teachers"
            ],
            "correctIndex": 2,
            "explanation": "Experimental means something brand new that is still being tested in the workshop.",
            "visualClueEmoji": "🧪",
            "points": 60
          },
          {
            "id": "q-charlie-56-3-vocab2",
            "question": "Find a word in the passage that means: \"Lasting forever; never ending or running out.\".",
            "options": [
              "Everlasting",
              "Wonka",
              "Unlocked",
              "Iron"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Everlasting\" means lasting forever; never ending or running out.",
            "visualClueEmoji": "⏳",
            "points": 60
          }
        ]
      },
      {
        "id": "charlie-56-4",
        "dayNumber": 4,
        "title": "The Great Glass Elevator Flight",
        "subtitle": "Up and Out! Charlie inherits the entire chocolate factory!",
        "estReadingMinutes": 15,
        "totalWordCount": 720,
        "summary": "Only Charlie and Grandpa Joe remain. Mr. Wonka leads them into the Great Glass Elevator, presses the red button 'UP AND OUT', and reveals that he is giving the entire factory to Charlie!",
        "visualScenes": [
          {
            "id": "scene-c56-4",
            "title": "Soaring Above the Town in Glass",
            "backgroundGradient": "from-sky-500 via-indigo-400 to-purple-500",
            "illustrationType": "great_glass_elevator",
            "caption": "WHOOSH! The Glass Elevator shot through the factory roof into the blue winter sky! Charlie saw the snowy town sparkling below.",
            "characterAvatars": [
              {
                "name": "Mr. Wonka",
                "emoji": "🎩",
                "speech": "Charlie, I am giving my whole factory to you!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "🚀",
                "speech": "I will care for it with all my heart!",
                "position": "center"
              },
              {
                "name": "Grandpa Joe",
                "emoji": "👴",
                "speech": "Yippee! Our sweet Charlie has won!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "h7",
                "x": 50,
                "y": 30,
                "label": "Red Button",
                "icon": "🔴",
                "soundEffect": "magic",
                "funFact": "The elevator can fly slantways, sideways, and loop-the-loop!",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Crystal Cube of Gold Buttons",
            "paragraphs": [
              "Only Charlie Bucket and Grandpa Joe remained on the factory tour. The other four children had all gotten into trouble because of their bad habits: Augustus fell in the river, Violet turned into a blueberry, Veruca was thrown down the rubbish chute by squirrels, and Mike Teavee shrank into a tiny television person.",
              "Mr. Wonka turned to Charlie with a tender, glowing smile. 'My dear boy!' cried Mr. Wonka. 'That means you are the only one left! You have won! We must celebrate by riding in my favorite invention of all!'",
              "He skipped down the hall and led Charlie and Grandpa Joe into a magnificent, sparkling room made entirely of thick clear glass. It was the Great Glass Elevator! Even the floor and ceiling were made of solid crystal glass.",
              "Every single wall was covered with thousands of tiny gold buttons. There were buttons for 'Lollipop Mountain', 'Fudge Volcanoes', 'Invisible Chocolate Bars', 'Rainbow Drops', and 'Candy Pistols'. Mr. Wonka explained: 'This elevator does not just go up and down like ordinary elevators. It can go sideways, slantways, and through the sky in any direction you like!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "This elevator travels sideways, slantways, and straight up into the clouds!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Grandpa Joe",
                "text": "Look at all these miraculous gold buttons, Charlie!",
                "avatarEmoji": "👴",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c56-4-1",
              "question": "How was the Great Glass Elevator different from ordinary building elevators?",
              "options": [
                "It only went backwards into the dark basement",
                "It could travel in any direction—sideways, slantways, and through the sky",
                "It had no floor and was made of cardboard"
              ],
              "correctInsightIndex": 1,
              "insight": "Wonka's glass elevator could fly in any direction—up, down, sideways, and through the sky!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Up and Out into the Blue Winter Sky!",
            "paragraphs": [
              "Mr. Wonka searched through the thousands of gold buttons until his finger found a large, shiny red button marked in bold letters: 'UP AND OUT'.",
              "'Hold on tight to the railings!' shouted Mr. Wonka joyfully. He slammed his palm down on the red button. Instantly, the glass elevator leaped into action!",
              "WHOOOOOOSH! The elevator rocketed upward at tremendous speed! The wind roared, the crystal walls hummed, and with a giant CRASH, the elevator burst right through the factory roof, shooting high into the crisp blue winter air!",
              "Charlie and Grandpa Joe gasped in pure delight. They were floating weightlessly in the sky! Below them, the giant brick chocolate factory looked like a toy model, and the snowy town sparkled peacefully in the cold afternoon sun."
            ],
            "dialogueBites": [
              {
                "speaker": "Charlie",
                "text": "We are flying in a glass box! The houses below look like tiny toys!",
                "avatarEmoji": "🚀",
                "side": "left"
              },
              {
                "speaker": "Mr. Wonka",
                "text": "Hold tight, Charlie! We are hovering over the world!",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-charlie-56-4-p2",
              "question": "Find a word on this page that means: \"A moving cabin that carries people up, down, and across spaces.\".",
              "options": [
                "Charlie",
                "Bucket",
                "Elevator"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Elevator\" (EL-uh-vay-ter) means a moving cabin that carries people up, down, and across spaces.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Wonderful Gift for Charlie and His Family",
            "paragraphs": [
              "Hovering peacefully high above the town, Mr. Wonka looked down at the snow-covered rooftops, then turned to look at little Charlie. His bright blue eyes were filled with deep warmth and kindness.",
              "'Charlie,' said Mr. Wonka softly, 'I am getting to be an old man. I have no children of my own, and no family to take care of my beloved factory and my dear Oompa Loompas when I grow too old.'",
              "'I needed a good, honest, loving child who would understand my inventions and treat everyone with kindness. An adult wouldn't listen to me; they would want to do things their own way. But you, Charlie... you were polite, gentle, and honest throughout the entire visit. You never acted greedy or selfish once.'",
              "Mr. Wonka smiled with tears in his eyes: 'Charlie, my dear boy, I am giving my whole chocolate factory to YOU and your family!' Charlie gasped in amazement, and Grandpa Joe danced a happy jig on the glass floor. Charlie threw his arms around Mr. Wonka's velvet coat, weeping with pure joy. Their days of cold cabbage soup and freezing winters were over forever!"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "The entire chocolate factory is yours, Charlie! You will care for it with love!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "Thank you, Mr. Wonka! I love the factory and the Oompa Loompas with all my heart!",
                "avatarEmoji": "❤️",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c56-4-3",
              "question": "Why did Mr. Wonka choose Charlie to inherit the chocolate factory?",
              "options": [
                "Because Charlie was polite, kind, honest, and unselfish",
                "Because Charlie had the loudest shout",
                "Because Charlie won a coin flip in the shop"
              ],
              "correctInsightIndex": 0,
              "insight": "Charlie proved himself to be kind, loving, and honest, making him the perfect person to care for the factory!",
              "rewardKP": 15
            }
          }
        ],
        "paragraphs": [
          "Only Charlie Bucket and Grandpa Joe remained on the factory tour after the other four children got into trouble because of their bad behavior.",
          "Mr. Wonka beamed with joy and led them into the Great Glass Elevator, made entirely of thick clear crystal glass.",
          "Thousands of tiny gold buttons covered every wall. Mr. Wonka explained that the elevator could travel in any direction: up, down, sideways, slantways, and through the sky.",
          "Mr. Wonka pressed a shiny red button marked: \"UP AND OUT\". The elevator rocketed upward at lightning speed and burst right through the factory roof into the blue winter sky!",
          "Hovering high above the snowy town, Mr. Wonka spoke gently: \"Charlie, I am an old man with no family. I needed a kind, honest, unselfish child to look after my factory.\"",
          "\"You were polite and caring through every test. I am giving the entire chocolate factory to YOU and your family!\"",
          "Charlie hugged Mr. Wonka with tears of joy, while Grandpa Joe danced a happy jig on the glass floor. Their cold days of hunger were finished forever!"
        ],
        "vocabList": [
          {
            "word": "Elevator",
            "phonics": "EL-uh-vay-ter",
            "definition": "A moving cabin that carries people up, down, and across spaces.",
            "funExample": "The Great Glass Elevator flew through the clouds above the town.",
            "emoji": "🛗"
          },
          {
            "word": "Honest",
            "phonics": "ON-ist",
            "definition": "Truthful, trustworthy, and doing the right thing even when no one is watching.",
            "funExample": "Charlie was honest and kind during the whole tour.",
            "emoji": "⭐"
          }
        ],
        "microChallenge": {
          "id": "mc-c56-4",
          "title": "Elevator Flight Direction",
          "type": "candy_sort",
          "prompt": "Tap the elevator directions in order: Up, Sideways, Slantways",
          "options": [
            "Sideways",
            "Up",
            "Slantways"
          ],
          "rewardGems": 40
        },
        "quizQuestions": [
          {
            "id": "qc56-4-1",
            "question": "How was the Great Glass Elevator different from ordinary building elevators?",
            "options": [
              "It could travel in any direction—up, down, sideways, slantways, and through the sky",
              "It only moved two inches every hour",
              "It was made of heavy solid lead and had no doors",
              "It required five horses to pull it along the street"
            ],
            "correctIndex": 0,
            "explanation": "Mr. Wonka explained that his elevator could travel sideways, slantways, and through the open sky!",
            "visualClueEmoji": "🚀",
            "points": 60
          },
          {
            "id": "q-charlie-56-4-vocab1",
            "question": "Find a word in the passage that means: \"A moving cabin that carries people up, down, and across spaces.\".",
            "options": [
              "Charlie",
              "Bucket",
              "Grandpa",
              "Elevator"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Elevator\" means a moving cabin that carries people up, down, and across spaces.",
            "visualClueEmoji": "🛗",
            "points": 60
          },
          {
            "id": "qc56-4-3",
            "question": "What does it mean to \"inherit\" something of great value?",
            "options": [
              "To borrow something for just five minutes and give it back",
              "To receive something precious to keep and care for forever",
              "To accidentally drop something into a deep river",
              "To paint something with bright yellow glitter"
            ],
            "correctIndex": 1,
            "explanation": "To inherit means to receive something precious from someone to look after and cherish.",
            "visualClueEmoji": "🏰",
            "points": 60
          },
          {
            "id": "q-charlie-56-4-vocab2",
            "question": "Find a word in the passage that means: \"Truthful, trustworthy, and doing the right thing even when no one is watching.\".",
            "options": [
              "Charlie",
              "Bucket",
              "Honest",
              "Grandpa"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Honest\" means truthful, trustworthy, and doing the right thing even when no one is watching.",
            "visualClueEmoji": "⭐",
            "points": 60
          }
        ]
      },
      {
        "id": "charlie-56-5",
        "dayNumber": 5,
        "title": "Flying Home & The Great Family Feast",
        "subtitle": "Hovering over Charlie's cottage and bringing the grandparents to their sweet new home!",
        "estReadingMinutes": 15,
        "totalWordCount": 710,
        "summary": "Mr. Wonka flies the Great Glass Elevator directly to Charlie's little wooden cottage. They gently lift the four grandparents in their bed into the elevator and fly everyone to live happily ever after in the chocolate factory!",
        "visualScenes": [
          {
            "id": "scene-c56-5",
            "title": "Hovering Above the Little Cottage",
            "backgroundGradient": "from-sky-700 via-indigo-500 to-amber-200",
            "illustrationType": "great_glass_elevator",
            "caption": "The glass elevator landed gently over Charlie's snowy roof! Charlie called down to his mother and grandparents with joyful news of their forever home.",
            "characterAvatars": [
              {
                "name": "Mr. Wonka",
                "emoji": "🎩",
                "speech": "Pack your bags, Bucket family! You're moving in!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "🏠",
                "speech": "Grandma, Grandpa, we will never be hungry again!",
                "position": "center"
              },
              {
                "name": "Grandpa Joe",
                "emoji": "👴",
                "speech": "Look at the stars shining through our glass floor!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "h56-5-1",
                "x": 40,
                "y": 50,
                "label": "Golden Elevator Key",
                "icon": "🗝️",
                "soundEffect": "magic",
                "funFact": "The key unlocks all 1,000 secret candy laboratories in the factory!",
                "action": "sparkle"
              },
              {
                "id": "h56-5-2",
                "x": 75,
                "y": 70,
                "label": "Warm Cocoa Thermos",
                "icon": "☕",
                "soundEffect": "success",
                "funFact": "Oompa Loompas prepared steaming mugs of butterscotch cocoa for the grandparents!",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Steering Through the Evening Clouds",
            "paragraphs": [
              "High up in the winter clouds, Mr. Wonka took Charlie's hands and placed them gently on the crystal steering dial of the Great Glass Elevator. 'Go on, Charlie! You are the new captain now! Steer her home!' The scene was filled with feast, creating an unforgettable moment. The scene was filled with celebrate, creating an unforgettable moment.",
              "Charlie carefully turned the smooth crystal dial. The glass elevator tilted softly and swooped down through fluffy pink and golden clouds. The cold winter air rushed past the outside of the glass, but inside the elevator cabin it was cozy, warm, and bright.",
              "Down below, the town's streetlights were starting to glow like fireflies in the gathering dusk. Charlie spotted the tiny wooden cottage at the edge of the town. It looked tiny, like a miniature toy house resting peacefully in the white snow.",
              "'There it is!' cried Charlie, pointing with excitement. 'That's my house! And look—there is smoke coming from the little chimney!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "Line her up right over your cottage roof, Captain Charlie!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "Look, Grandpa! Mother is waving from the little kitchen window!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c56-5-1",
              "question": "How did Charlie feel when Mr. Wonka let him steer the elevator?",
              "options": [
                "Terrified and wanted to jump out into the snow",
                "He refused to touch the steering wheel",
                "Proud, excited, and happy to be the new captain"
              ],
              "correctInsightIndex": 2,
              "insight": "Charlie felt proud and happy as Mr. Wonka let him steer the elevator toward home!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Lifting the Grandparents' Bed Through the Roof",
            "paragraphs": [
              "With a soft WHOOSH, the glass elevator settled right above the snowy roof of Charlie's cottage. Mr. Wonka pressed a special green button marked 'BED HOIST'.",
              "A gentle golden light shone down from the bottom of the elevator. The roof of the cottage opened smoothly like the lid of a sweet box. Down in the bedroom, Grandpa George, Grandma Georgina, and Grandma Josephine were resting under their patchwork quilt, wondering what the bright light was.",
              "'Hold onto your nightcaps, everyone!' laughed Grandpa Joe merrily. The four golden magnetic ropes gently attached to the corners of the wooden bed. Slowly, smoothly, and weightlessly, the entire bed floated right up through the roof and settled inside the warm glass elevator cabin!",
              "Grandma Josephine gasped in astonishment, clutching her nightcap. 'Mercy on us! Where on earth are we?' Charlie hugged his grandmother warmly: 'We are in Mr. Wonka's flying elevator, Grandma! We are moving to the chocolate factory!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Grandma Josephine",
                "text": "Mercy me! We are floating in a glass carriage in the sky!",
                "avatarEmoji": "👵",
                "side": "left"
              },
              {
                "speaker": "Charlie's Mother",
                "text": "Oh Charlie, my darling boy, is this all real?",
                "avatarEmoji": "👩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-charlie-56-5-p2",
              "question": "Find a word on this page that means: \"To do something fun and joyful because something wonderful happened.\".",
              "options": [
                "Celebrate",
                "High",
                "Winter"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Celebrate\" (SEL-uh-brayt) means to do something fun and joyful because something wonderful happened.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "A Sweet New Life in the Chocolate Factory",
            "paragraphs": [
              "Charlie's mother and father stepped into the elevator too, and the glass doors slid shut with a happy click. Mr. Wonka pressed the button to head back to the factory.",
              "As the elevator soared across the winter sky toward the great glowing chimneys, friendly Oompa Loompas in velvet aprons appeared with silver trays. They served steaming mugs of hot butterscotch cocoa and warm bowls of marshmallow stew to the whole family.",
              "Grandma Georgina took a sip of cocoa and smiled with tears of happiness in her eyes. 'This is the most delicious thing I have ever tasted in all my ninety years!'",
              "The glass elevator glided down through the factory gates into the Great Chocolate Room. Charlie stood at the window, holding Mr. Wonka's hand on one side and his mother's hand on the other. Mr. Wonka smiled with gentle love: 'Welcome home, Charlie Bucket. Our sweetest adventure has just begun!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "Welcome home, Bucket family! There is enough chocolate and love here for a lifetime!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "Thank you, Mr. Wonka! We will care for every sweet with all our hearts!",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c56-5-3",
              "question": "What treats did the Oompa Loompas serve Charlie's family on the flight?",
              "options": [
                "Cold cabbage soup with stale bread",
                "Hot butterscotch cocoa and warm marshmallow stew",
                "Salty crackers and sour lemons"
              ],
              "correctInsightIndex": 1,
              "insight": "The Oompa Loompas welcomed the family with delicious hot butterscotch cocoa and marshmallow stew!",
              "rewardKP": 20
            }
          }
        ],
        "paragraphs": [
          "High up in the winter clouds, Mr. Wonka placed Charlie's hands on the crystal steering dial and let him steer the elevator home.",
          "Charlie steered the flying elevator smoothly through pink clouds, spotting his family's little cottage with smoke curling from its chimney.",
          "The elevator hovered over the roof, and Mr. Wonka pressed the \"BED HOIST\" button. Gentle golden ropes lifted the four grandparents in their cozy wooden bed right into the elevator.",
          "Grandma Josephine and Grandma Georgina clutched their nightcaps in happy wonder as Charlie told them they were moving to the chocolate factory.",
          "Charlie's mother and father stepped inside, and the elevator flew back toward the glowing chimneys of Wonka's factory.",
          "Friendly Oompa Loompas served steaming mugs of hot butterscotch cocoa and warm marshmallow stew to the whole family.",
          "Mr. Wonka smiled with deep love as the elevator landed in the Great Chocolate Room: \"Welcome home, Charlie Bucket. Our sweetest adventure has just begun!\""
        ],
        "vocabList": [
          {
            "word": "Feast",
            "phonics": "FEEST",
            "definition": "A large, wonderful meal shared with family and friends to celebrate.",
            "funExample": "The family celebrated with a delicious sweet feast.",
            "emoji": "🍲"
          },
          {
            "word": "Cabin",
            "phonics": "KAB-in",
            "definition": "A cozy room or enclosed space inside a vehicle like an elevator.",
            "funExample": "The elevator cabin was warm, bright, and made of clear glass.",
            "emoji": "🛗"
          },
          {
            "word": "Celebrate",
            "phonics": "SEL-uh-brayt",
            "definition": "To do something fun and joyful because something wonderful happened.",
            "funExample": "Charlie and his family celebrated their wonderful new home.",
            "emoji": "🎉"
          }
        ],
        "microChallenge": {
          "id": "mc-c56-5",
          "title": "Elevator Steering Pilot",
          "type": "candy_sort",
          "prompt": "Tap the flight steps in order: 1. Steer Home, 2. Lift Grandparents, 3. Enter Factory Gates",
          "options": [
            "Lift Grandparents",
            "Steer Home",
            "Enter Factory Gates"
          ],
          "rewardGems": 50
        },
        "quizQuestions": [
          {
            "id": "qc56-5-1",
            "question": "Where did Charlie and Mr. Wonka fly the Great Glass Elevator first?",
            "options": [
              "To a busy supermarket in another town",
              "To an empty desert island in the sea",
              "Straight to Charlie's little cottage to pick up his family",
              "To the top of a snowy mountain peak"
            ],
            "correctIndex": 2,
            "explanation": "The story tells us Charlie and Mr. Wonka flew straight to Charlie's little cottage to fetch his beloved family!",
            "visualClueEmoji": "🏠",
            "points": 60
          },
          {
            "id": "q-charlie-56-5-vocab1",
            "question": "Find a word in the passage that means: \"A large, wonderful meal shared with family and friends to celebrate.\".",
            "options": [
              "High",
              "Winter",
              "Clouds",
              "Feast"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Feast\" means a large, wonderful meal shared with family and friends to celebrate.",
            "visualClueEmoji": "🍲",
            "points": 60
          },
          {
            "id": "qc56-5-3",
            "question": "What delicious treats did the Oompa Loompas serve to Charlie's family?",
            "options": [
              "Hot butterscotch cocoa and warm marshmallow stew",
              "Cold water and plain cabbage leaves",
              "Bitter coffee and salty crackers",
              "Frozen peas and dry bread crusts"
            ],
            "correctIndex": 0,
            "explanation": "The text says friendly Oompa Loompas served steaming mugs of hot butterscotch cocoa and marshmallow stew!",
            "visualClueEmoji": "☕",
            "points": 60
          },
          {
            "id": "q-charlie-56-5-vocab2",
            "question": "Find a word in the passage that means: \"A cozy room or enclosed space inside a vehicle like an elevator.\".",
            "options": [
              "High",
              "Cabin",
              "Winter",
              "Clouds"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Cabin\" means a cozy room or enclosed space inside a vehicle like an elevator.",
            "visualClueEmoji": "🛗",
            "points": 60
          }
        ]
      }
    ],
    "7-8": [
      {
        "id": "charlie-78-1",
        "dayNumber": 1,
        "title": "The Golden Ticket Craze",
        "subtitle": "A worldwide candy hunt and one poor boy's snowy miracle!",
        "estReadingMinutes": 15,
        "totalWordCount": 720,
        "summary": "As the entire world scrambles for Willy Wonka's five Golden Tickets, poor Charlie Bucket finds a silver dollar in the snow. He buys a chocolate bar and uncovers the final Golden Ticket!",
        "visualScenes": [
          {
            "id": "scene-c78-1",
            "title": "The Snowy Street & The Sweet Shop",
            "backgroundGradient": "from-slate-900 via-blue-900 to-amber-100",
            "illustrationType": "wonka_gates",
            "caption": "Freezing winds swept through the town. Outside the corner sweet shop, Charlie spotted a round silver dollar half-buried in the slush!",
            "characterAvatars": [
              {
                "name": "Charlie",
                "emoji": "👦",
                "speech": "My tummy is rumbling, but look at that silver coin!",
                "position": "left"
              },
              {
                "name": "Shopkeeper",
                "emoji": "👨‍🍳",
                "speech": "Warm up by the counter, young lad!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "h78-1",
                "x": 35,
                "y": 65,
                "label": "Silver Coin",
                "icon": "🪙",
                "soundEffect": "coin",
                "funFact": "Charlie found a shiny silver dollar lying in the snow near the curb!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Poverty, Hunger, and the Five Golden Tickets",
            "paragraphs": [
              "Little Charlie Bucket lived in a small wooden house at the edge of town with his parents and four elderly grandparents: Grandpa Joe, Grandma Josephine, Grandpa George, and Grandma Georgina. The family was desperately poor. Mr. Bucket worked long hours at a toothpaste factory screwing caps onto tubes, but his small wages barely bought watery cabbage soup and bread with margarine.",
              "That winter grew bitterly cold. The toothpaste factory closed down, leaving Mr. Bucket with no job. The family began to starve. Charlie grew thin as a skeleton, his cheekbones pressing against his skin. Every afternoon, on his walk home from school, he had to walk right past Willy Wonka's giant chocolate factory. The air around the brick walls was thick with the rich scent of melted chocolate, roasting nuts, and warm vanilla sugar. Charlie would take huge breaths just to taste the sweet air.",
              "The entire world was seized by Golden Ticket fever. Mr. Willy Wonka had announced that five Golden Tickets were hidden inside five ordinary chocolate bars. The first four tickets were found by greedy, spoiled children: Augustus Gloop, Veruca Salt, Violet Beauregarde, and Mike Teavee. Millions of children across the globe bought thousands of candy bars, searching desperately for the fifth and final ticket."
            ],
            "dialogueBites": [
              {
                "speaker": "Charlie",
                "text": "The air outside the factory smells like melted chocolate and roasted nuts!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Grandpa Joe",
                "text": "Wonka's factory is full of miracles, Charlie. Keep hoping!",
                "avatarEmoji": "👴",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c78-1-1",
              "question": "Why was Charlie's family struggling so terribly during the winter?",
              "options": [
                "They spent all their savings on vacations",
                "Mr. Bucket lost his job at the toothpaste factory and food was scarce",
                "Their cottage was flooded with water"
              ],
              "correctInsightIndex": 1,
              "insight": "Mr. Bucket's factory closed down, leaving the poor family with almost no food to eat.",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "A Silver Dollar in the Cold Slush",
            "paragraphs": [
              "One freezing afternoon, as the bitter wind whistled through the holes in Charlie's thin coat, he walked slowly home from school. He kept his eyes cast downward to avoid the biting snowflakes stinging his face.",
              "Suddenly, something shiny caught his eye near the edge of the pavement. Half-buried in the dirty grey slush lay a round piece of silver. Charlie dropped to his knees in the cold snow. His fingers were so numb he could scarcely grasp it, but he wiped away the ice. It was a real, shiny silver dollar!",
              "Charlie held the heavy silver coin in his palm. He knew his family needed every penny for bread, but his stomach was cramping with terrible hunger. He decided he would buy just one Wonka chocolate bar to satisfy his hunger, and take all nine silver nickels in change straight home to his mother."
            ],
            "dialogueBites": [
              {
                "speaker": "Charlie",
                "text": "A silver dollar in the snow! I can buy one sweet bar and bring the rest of the money home to Mother!",
                "avatarEmoji": "🪙",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-charlie-78-1-p2",
              "question": "Find a word on this page that means: \"Shining so brightly that it sparkles in the light.\".",
              "options": [
                "Little",
                "Charlie",
                "Dazzling"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Dazzling\" (DAZ-ling) means shining so brightly that it sparkles in the light.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Brilliant Flash of Gold",
            "paragraphs": [
              "Charlie entered the warm sweet shop and stepped up to the wooden counter. 'One Wonka Whipple-Scrumptious Fudgemallow Delight, please,' he said politely. The kind shopkeeper handed him the brown chocolate bar and nine nickels in change.",
              "Charlie tore off the brown paper wrapper. He took one ravenous bite of the sweet, rich chocolate. Then, beneath the chocolate bar, a brilliant flash of dazzling gold caught his eye! It was thick paper made of pure, sparkling gold!",
              "The shopkeeper gasped, leaning over the counter: 'It's a Golden Ticket! You've found Wonka's last Golden Ticket!' People rushed into the shop, offering money to buy it, but the shopkeeper told Charlie: 'Don't let anyone have it! Run straight home, boy, and tell your family!' Charlie clutched the precious ticket and dashed through the snowy streets straight to his little wooden cottage, bursting through the door to tell Grandpa Joe!"
            ],
            "dialogueBites": [
              {
                "speaker": "Shopkeeper",
                "text": "You've found Wonka's last Golden Ticket! Run home to your family!",
                "avatarEmoji": "👨‍🍳",
                "side": "left"
              },
              {
                "speaker": "Grandpa Joe",
                "text": "Yippee! Our sweet Charlie has won the Golden Ticket!",
                "avatarEmoji": "👴",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c78-1-3",
              "question": "How did Grandpa Joe react when Charlie showed him the Golden Ticket?",
              "options": [
                "He leaped out of bed and danced with joy for the first time in twenty years",
                "He went to sleep under the patchwork quilt",
                "He told Charlie to return the ticket to the shop"
              ],
              "correctInsightIndex": 0,
              "insight": "Grandpa Joe was so overjoyed that he leaped out of bed and danced a jig on the wooden floor!",
              "rewardKP": 15
            }
          }
        ],
        "paragraphs": [
          "Little Charlie Bucket lived in a tiny wooden house with his parents and four elderly grandparents. When the toothpaste factory closed down, the family began to starve on watery cabbage soup.",
          "The entire world was searching for Willy Wonka's five Golden Tickets hidden inside chocolate bars. Four tickets had been found by greedy, spoiled children, leaving only one final ticket.",
          "One freezing afternoon, Charlie spotted a shiny silver dollar half-buried in the snowy gutter. He decided to buy one chocolate bar and bring all the change home to his mother.",
          "Charlie politely bought a Wonka Whipple-Scrumptious Fudgemallow Delight. As he tore the wrapper, a brilliant flash of dazzling gold shone in the light!",
          "The shopkeeper cried out that Charlie had found the fifth and final Golden Ticket. Charlie clutched the shiny ticket and ran home as fast as his legs could carry him.",
          "Ninety-year-old Grandpa Joe leaped out of bed and danced a joyful jig on the wooden floor. Charlie and Grandpa Joe were going to visit Willy Wonka's magical chocolate factory!"
        ],
        "vocabList": [
          {
            "word": "Scarce",
            "phonics": "SKAIRSS",
            "definition": "Very small in amount; hard to find or get.",
            "funExample": "Food was scarce during the cold winter months.",
            "emoji": "🥣"
          },
          {
            "word": "Ravenous",
            "phonics": "RAV-uh-nus",
            "definition": "Extremely hungry; starving for food.",
            "funExample": "Charlie took a ravenous bite of the delicious chocolate bar.",
            "emoji": "😋"
          },
          {
            "word": "Dazzling",
            "phonics": "DAZ-ling",
            "definition": "Shining so brightly that it sparkles in the light.",
            "funExample": "The Golden Ticket had a dazzling shine of pure gold.",
            "emoji": "✨"
          }
        ],
        "microChallenge": {
          "id": "mc-c78-1",
          "title": "Find the Fifth Ticket!",
          "type": "golden_ticket_scratch",
          "prompt": "Tap the chocolate wrapper to reveal the shiny ticket:",
          "options": [
            "Silver Foil",
            "Golden Ticket",
            "Brown Paper"
          ],
          "rewardGems": 30
        },
        "quizQuestions": [
          {
            "id": "qc78-1-1",
            "question": "Why was Charlie's family having such a hard time during the winter?",
            "options": [
              "They spent all their money buying new furniture",
              "Mr. Bucket lost his job at the toothpaste factory and food was scarce",
              "Their cottage was flooded by heavy rain",
              "They forgot where the local bakery was located"
            ],
            "correctIndex": 1,
            "explanation": "The story tells us Mr. Bucket lost his job when the toothpaste factory closed down, leaving food scarce.",
            "visualClueEmoji": "🥣",
            "points": 60
          },
          {
            "id": "q-charlie-78-1-vocab1",
            "question": "Find a word in the passage that means: \"Very small in amount; hard to find or get.\".",
            "options": [
              "Little",
              "Charlie",
              "Scarce",
              "Bucket"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Scarce\" means very small in amount; hard to find or get.",
            "visualClueEmoji": "🥣",
            "points": 60
          },
          {
            "id": "qc78-1-3",
            "question": "What did the shopkeeper shout when Charlie opened the chocolate wrapper?",
            "options": [
              "'It's a Golden Ticket! You've found Wonka's last Golden Ticket!'",
              "'You must pay five more dollars right now!'",
              "'Please put that candy back on the shelf!'",
              "'The shop is closed for the night!'"
            ],
            "correctIndex": 0,
            "explanation": "The shopkeeper shouted with joy that Charlie had found Wonka's last Golden Ticket!",
            "visualClueEmoji": "🎫",
            "points": 60
          },
          {
            "id": "q-charlie-78-1-vocab2",
            "question": "Find a word in the passage that means: \"Extremely hungry; starving for food.\".",
            "options": [
              "Little",
              "Charlie",
              "Bucket",
              "Ravenous"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Ravenous\" means extremely hungry; starving for food.",
            "visualClueEmoji": "😋",
            "points": 60
          }
        ]
      },
      {
        "id": "charlie-78-2",
        "dayNumber": 2,
        "title": "The Great Chocolate Room",
        "subtitle": "A roaring river of chocolate, peppermint grass, and Oompa Loompa songs!",
        "estReadingMinutes": 15,
        "totalWordCount": 730,
        "summary": "Mr. Wonka reveals the Great Chocolate Room with its roaring waterfall churning melted chocolate into a brown river. Greedy Augustus Gloop ignores safety warnings and falls into the river!",
        "visualScenes": [
          {
            "id": "scene-c78-2",
            "title": "The Roaring Waterfall of Cocoa",
            "backgroundGradient": "from-amber-700 via-amber-500 to-emerald-300",
            "illustrationType": "chocolate_waterfall",
            "caption": "A fifty-foot waterfall churned melted chocolate into a swirling brown river, lined with sweet edible mint grass!",
            "characterAvatars": [
              {
                "name": "Mr. Wonka",
                "emoji": "🎩",
                "speech": "Everything here is eatable, even the grass!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "🤩",
                "speech": "Look at the giant waterfall mixing the chocolate!",
                "position": "center"
              },
              {
                "name": "Augustus",
                "emoji": "🍫",
                "speech": "I must drink from the river!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "h78-2",
                "x": 50,
                "y": 50,
                "label": "Waterfall",
                "icon": "🌊",
                "soundEffect": "magic",
                "funFact": "The waterfall mixes the chocolate with air to make it light and fluffy!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Entering the Marvelous Valley",
            "paragraphs": [
              "On the first day of February, the iron gates of Willy Wonka's factory swung open. Mr. Wonka greeted the five children and their parents in his plum velvet tailcoat, bottle-green trousers, and tall top hat. His bright blue eyes sparkled with playful energy as he skipped along gleaming white corridors.",
              "He stopped outside a massive pair of purple double doors. 'This is the heart of the entire factory!' Wonka proclaimed. 'Everything in this room is delicious, wonderful, and eatable! Hold your breath!'",
              "He flung open the doors. An astonishing sight met their eyes: a vast green valley stretching into the distance. A wide river of rich brown melted chocolate flowed through the center, fed by a roaring fifty-foot waterfall crashing down a rocky cliff."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "Welcome to the Great Chocolate Room! Breathe in that sweet cocoa air!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "Grandpa Joe, the whole river is made of melted chocolate!",
                "avatarEmoji": "🤩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c78-2-1",
              "question": "What makes Mr. Wonka's Chocolate Room so extraordinary?",
              "options": [
                "It is made of concrete and steel with no candy",
                "It is completely empty and dark inside",
                "It has a roaring waterfall that churns a river of pure melted chocolate"
              ],
              "correctInsightIndex": 2,
              "insight": "The room features an entire valley with a flowing river of melted chocolate mixed by a waterfall!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Waterfall Mixing and Edible Mint Grass",
            "paragraphs": [
              "'No other factory in the world mixes its chocolate by waterfall!' cried Mr. Wonka with pride. 'The force of the falling liquid churns and aerates the chocolate, infusing it with tiny air bubbles so my candy bars are light, fluffy, and melt softly on your tongue!'",
              "Mr. Wonka then pointed to the rolling green meadows on both sides of the river. 'The grass beneath your feet is made of a new soft mint sugar that I have just invented! It is completely eatable! Try a blade, Charlie!'",
              "Charlie knelt down and tasted a blade of grass. It was delightfully sweet and minty, melting like sugar crystal. Across the river, tiny knee-high workers with bright neon hair appeared under the candy trees. 'Those are the Oompa Loompas!' explained Mr. Wonka. 'They love music, dancing, and cocoa beans!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Charlie",
                "text": "The grass tastes like refreshing sweet peppermint!",
                "avatarEmoji": "🌱",
                "side": "left"
              },
              {
                "speaker": "Mr. Wonka",
                "text": "The Oompa Loompas are my wonderful helpers from Loompaland!",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-charlie-78-2-p2",
              "question": "Find a word on this page that means: \"To mix air into a liquid to make it light and bubbly.\".",
              "options": [
                "Aerate",
                "February",
                "Iron"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Aerate\" (AIR-ayt) means to mix air into a liquid to make it light and bubbly.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "Augustus Plunges and the Oompa Loompas Sing",
            "paragraphs": [
              "While everyone admired the scenery, Augustus Gloop sneaked down the slippery bank. He knelt in the mud and plunged his face directly into the warm chocolate river, gulping it down greedily.",
              "'Augustus!' shouted Mr. Wonka in alarm. 'Step back! Human hands must never touch the chocolate! You will contaminate the river!' But Augustus paid no attention. Suddenly, his boots lost their grip on the wet bank. With a tremendous SPLASH, Augustus fell headfirst into the deep chocolate river!",
              "He was sucked into the mouth of a giant glass transport pipe, which pulled him upward toward the fudge mixing room. On the far bank, the Oompa Loompas began beating little drums and singing a humorous song about how uncontrolled greed and overeating always lead to embarrassment and disaster."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "He's gone up the pipe! He will be turned into fudge if we don't hurry!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Oompa Loompas",
                "text": "Oompa Loompa doompety doo, greedy children get stuck in the flue!",
                "avatarEmoji": "🧑‍🌾",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c78-2-3",
              "question": "What caused Augustus Gloop to fall into the chocolate river?",
              "options": [
                "He was pushed by an Oompa Loompa",
                "He ignored Mr. Wonka's warning and knelt on the slippery bank to drink from the river",
                "A strong gust of wind blew him into the water"
              ],
              "correctInsightIndex": 1,
              "insight": "Augustus ignored clear safety warnings because of his greed, and slipped right into the river.",
              "rewardKP": 15
            }
          }
        ],
        "paragraphs": [
          "Mr. Wonka opened the purple double doors to reveal the Great Chocolate Room, featuring a vast green valley with a river of melted chocolate.",
          "A fifty-foot waterfall crashed down a rocky cliff, churning and mixing the chocolate with air to make it light, fluffy, and smooth.",
          "The green grass lining the riverbanks was made of edible soft mint sugar that tasted like cool peppermint.",
          "Tiny knee-high Oompa Loompas worked across the river under candy trees, singing and dancing happily.",
          "Greedy Augustus Gloop ignored Mr. Wonka's warnings and knelt to drink directly from the river. His boots slipped on the wet bank and he plunged in with a giant splash!",
          "Augustus was sucked into a large glass transport pipe, and the Oompa Loompas sang a witty song about the perils of overeating and greed."
        ],
        "vocabList": [
          {
            "word": "Aerate",
            "phonics": "AIR-ayt",
            "definition": "To mix air into a liquid to make it light and bubbly.",
            "funExample": "The waterfall aerates the chocolate to make it fluffy.",
            "emoji": "🫧"
          },
          {
            "word": "Contaminate",
            "phonics": "kun-TAM-ih-nayt",
            "definition": "To make something unclean or impure by touching it.",
            "funExample": "Wonka warned Augustus not to contaminate the pure river.",
            "emoji": "⚠️"
          }
        ],
        "microChallenge": {
          "id": "mc-c78-2",
          "title": "Sort the River Candies",
          "type": "candy_sort",
          "prompt": "Sort the edible sweets from the riverbank:",
          "options": [
            "Mint Sugar Grass",
            "Caramel Pebble",
            "Fudge Marshmallow"
          ],
          "rewardGems": 35
        },
        "quizQuestions": [
          {
            "id": "qc78-2-1",
            "question": "Why does Mr. Wonka mix his chocolate with a roaring waterfall instead of metal mixers?",
            "options": [
              "Because metal mixers were too expensive to buy",
              "To wash the factory floors every morning",
              "The waterfall churns and mixes the chocolate with air to make it light and fluffy",
              "To cool down the chocolate with mountain ice"
            ],
            "correctIndex": 2,
            "explanation": "The story says the waterfall churns and mixes the chocolate with air to make it light and fluffy!",
            "visualClueEmoji": "🌊",
            "points": 60
          },
          {
            "id": "q-charlie-78-2-vocab1",
            "question": "Find a word in the passage that means: \"To mix air into a liquid to make it light and bubbly.\".",
            "options": [
              "Aerate",
              "February",
              "Iron",
              "Gates"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Aerate\" means to mix air into a liquid to make it light and bubbly.",
            "visualClueEmoji": "🫧",
            "points": 60
          },
          {
            "id": "qc78-2-3",
            "question": "What does the sweet green grass growing in the valley taste like?",
            "options": [
              "Salty cabbage and cold water",
              "Bitter lemons and black pepper",
              "Hot mustard and vinegar",
              "Cool peppermint sugar that melts on the tongue"
            ],
            "correctIndex": 3,
            "explanation": "Charlie tasted the grass and found it tasted sweetly of cool peppermint sugar!",
            "visualClueEmoji": "🌱",
            "points": 60
          },
          {
            "id": "q-charlie-78-2-vocab2",
            "question": "Find a word in the passage that means: \"To make something unclean or impure by touching it.\".",
            "options": [
              "February",
              "Contaminate",
              "Iron",
              "Gates"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Contaminate\" means to make something unclean or impure by touching it.",
            "visualClueEmoji": "⚠️",
            "points": 60
          }
        ]
      },
      {
        "id": "charlie-78-3",
        "dayNumber": 3,
        "title": "The Rainbow Inventing Room",
        "subtitle": "Everlasting Gobstoppers and the experimental dinner gum!",
        "estReadingMinutes": 15,
        "totalWordCount": 720,
        "summary": "Mr. Wonka shows his secret laboratory with Everlasting Gobstoppers and three-course dinner chewing gum. Gum-chewer Violet Beauregarde ignores warnings and turns into a giant blueberry!",
        "visualScenes": [
          {
            "id": "scene-c78-3",
            "title": "The Whistling Laboratory",
            "backgroundGradient": "from-purple-900 via-pink-700 to-amber-300",
            "illustrationType": "inventing_room",
            "caption": "Kettles hissed and pots bubbled with secret sweets. Mr. Wonka displayed the Everlasting Gobstopper that never shrinks!",
            "characterAvatars": [
              {
                "name": "Mr. Wonka",
                "emoji": "🎩",
                "speech": "Do not touch anything in this room! It is all experimental!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "🍭",
                "speech": "Look at the Gobstoppers! They sparkle like jewels!",
                "position": "center"
              },
              {
                "name": "Violet",
                "emoji": "🫐",
                "speech": "I must chew this amazing dinner gum right now!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "h78-3",
                "x": 45,
                "y": 55,
                "label": "Gobstopper Vat",
                "icon": "🍬",
                "soundEffect": "magic",
                "funFact": "You can suck a Gobstopper forever and it never loses its taste!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Top-Secret Laboratory",
            "paragraphs": [
              "Mr. Wonka unlocked a heavy iron door with three brass keys. A red warning sign declared: 'INVENTING ROOM — PRIVATE — KEEP OUT!' The scene was filled with experimental, creating an unforgettable moment. The scene was filled with disruptive, creating an unforgettable moment.",
              "'Keep your hands strictly to yourselves, children!' warned Mr. Wonka in a hushed whisper. 'This is where all my newest candy secrets are born. Years ago, rival candy makers sent spies to steal my recipes, which is why I locked the gates. Nothing in here has been released to the public!'",
              "Charlie gazed around the bustling workshop in awe. Giant black pots bubbled over glowing stoves, glass kettles hissed with steam, and copper pipes dripped rainbow syrups into silver trays. The air smelled heavenly: warm roasted pecans, spun caramel, and sweet cherry syrup."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "Keep your hands in your pockets! Everything here is fresh from the laboratory!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "Look at all the strange machines making candy, Grandpa Joe!",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c78-3-1",
              "question": "Why was the Inventing Room kept strictly private and locked?",
              "options": [
                "To protect Wonka's secret recipes from rival candy spies",
                "Because the machines were painted green",
                "Because the factory had run out of lights"
              ],
              "correctInsightIndex": 0,
              "insight": "Mr. Wonka guarded his new recipes closely so competing makers couldn't steal his secrets.",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Everlasting Gobstopper",
            "paragraphs": [
              "Mr. Wonka led the group to a silver trough where colorful candy balls were tumbling out. 'Everlasting Gobstoppers!' cried Mr. Wonka proudly.",
              "'I invented these specifically for children whose parents give them very little pocket money! You can put one in your mouth, and suck it, and suck it forever, and it will never get any smaller! It never loses its flavor, and every week it changes to a brand new delicious taste!'",
              "Charlie thought of his own poor family, who could barely afford soup, and smiled with deep admiration. To a child with no money, an Everlasting Gobstopper was the greatest treasure imaginable."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "One Gobstopper will last a child for the rest of their life!",
                "avatarEmoji": "🍬",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "That is the kindest invention in the world, Mr. Wonka!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-charlie-78-3-p2",
              "question": "Find a word on this page that means: \"Changing the way things are normally done in a major way.\".",
              "options": [
                "Wonka",
                "Disruptive",
                "Unlocked"
              ],
              "correctInsightIndex": 1,
              "insight": "\"Disruptive\" (dis-RUP-tiv) means changing the way things are normally done in a major way.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Three-Course Dinner Gum and Violet's Fate",
            "paragraphs": [
              "Next, Mr. Wonka led them to a giant rumbling contraption. The machine shivered, whirred, and with a loud PING, spat out a flat strip of grey chewing gum into a metal tray.",
              "'This is a three-course dinner chewing gum!' announced Mr. Wonka. 'As you chew, you taste hot tomato soup, followed by roast beef and baked potatoes, finishing with warm blueberry pie and ice cream!'",
              "Competitive Violet Beauregarde immediately reached out her hand. 'Stop! Don't touch it!' shouted Mr. Wonka. 'The gum is not ready yet! The blueberry dessert stage has gone wrong in the testing!' But Violet ignored him, popped the gum into her mouth, and chewed greedily. Suddenly, her skin turned bright purple, and her body puffed up like a giant round balloon! She had turned into a massive blueberry, and the Oompa Loompas rolled her off to the juicing room."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "Don't chew it! The blueberry dessert stage is not ready yet!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Violet",
                "text": "My skin is turning purple! I feel like a giant bowling ball!",
                "avatarEmoji": "🫐",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c78-3-3",
              "question": "What warning did Mr. Wonka give about the chewing gum?",
              "options": [
                "The gum was made of rubber and wood",
                "The gum had lost all its flavor",
                "The gum was not ready yet because the dessert stage had gone wrong"
              ],
              "correctInsightIndex": 2,
              "insight": "Mr. Wonka warned that the experimental gum had not finished testing and the dessert was faulty.",
              "rewardKP": 15
            }
          }
        ],
        "paragraphs": [
          "Mr. Wonka unlocked the heavy iron door of the Inventing Room, warning the children not to touch anything because of top-secret recipes.",
          "Inside, kettles whistled and pots bubbled with warm caramel, roasted nuts, and cherry syrup.",
          "Wonka introduced the Everlasting Gobstopper, specially invented for children with little pocket money because you can suck it forever and it never gets smaller.",
          "Charlie appreciated how thoughtful this invention was for children whose families could not afford sweets.",
          "A rumbling machine produced a strip of three-course dinner gum containing tomato soup, roast beef, and blueberry pie.",
          "Mr. Wonka shouted at Violet Beauregarde that the gum was not ready yet because the dessert stage had gone wrong.",
          "Violet chewed the gum anyway, turned bright purple, and swelled into a giant blueberry. The Oompa Loompas rolled her away to the juicing room."
        ],
        "vocabList": [
          {
            "word": "Inventing",
            "phonics": "in-VENT-ing",
            "definition": "Creating brand new things that have never been made before.",
            "funExample": "Wonka spent years inventing marvelous sweets in his laboratory.",
            "emoji": "💡"
          },
          {
            "word": "Experimental",
            "phonics": "ek-spair-uh-MEN-tul",
            "definition": "Still being tested to see if it works safely.",
            "funExample": "The dinner gum was experimental and not ready for chewing.",
            "emoji": "🧪"
          },
          {
            "word": "Disruptive",
            "phonics": "dis-RUP-tiv",
            "definition": "Changing the way things are normally done in a major way.",
            "funExample": "The Gobstopper was disruptive because one piece lasted forever.",
            "emoji": "⚡"
          }
        ],
        "microChallenge": {
          "id": "mc-c78-3",
          "title": "Dinner Gum Flavors",
          "type": "candy_sort",
          "prompt": "Tap the dinner courses in order: Tomato Soup, Roast Beef, Blueberry Pie",
          "options": [
            "Roast Beef",
            "Tomato Soup",
            "Blueberry Pie"
          ],
          "rewardGems": 35
        },
        "quizQuestions": [
          {
            "id": "qc78-3-1",
            "question": "Why was the Everlasting Gobstopper especially helpful for children with little money?",
            "options": [
              "It can be traded for silver coins at the bank",
              "It was made of painted wood that never rots",
              "It grew into a toy carriage",
              "You can suck it forever and it will never get any smaller"
            ],
            "correctIndex": 3,
            "explanation": "Mr. Wonka explained that you can suck an Everlasting Gobstopper forever and it never shrinks!",
            "visualClueEmoji": "🍬",
            "points": 60
          },
          {
            "id": "q-charlie-78-3-vocab1",
            "question": "Find a word in the passage that means: \"Creating brand new things that have never been made before.\".",
            "options": [
              "Wonka",
              "Inventing",
              "Unlocked",
              "Heavy"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Inventing\" means creating brand new things that have never been made before.",
            "visualClueEmoji": "💡",
            "points": 60
          },
          {
            "id": "qc78-3-3",
            "question": "What three courses were contained in the experimental chewing gum?",
            "options": [
              "Chicken soup, fried fish, and apple crumble",
              "Cabbage soup, stale bread, and margarine",
              "Tomato soup, roast beef and potatoes, and blueberry pie with cream",
              "Pancakes, bacon, and strawberry ice cream"
            ],
            "correctIndex": 2,
            "explanation": "The three courses were tomato soup, roast beef and baked potatoes, and blueberry pie with cream.",
            "visualClueEmoji": "🍽️",
            "points": 60
          },
          {
            "id": "q-charlie-78-3-vocab2",
            "question": "Find a word in the passage that means: \"Still being tested to see if it works safely.\".",
            "options": [
              "Experimental",
              "Wonka",
              "Unlocked",
              "Heavy"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Experimental\" means still being tested to see if it works safely.",
            "visualClueEmoji": "🧪",
            "points": 60
          }
        ]
      },
      {
        "id": "charlie-78-4",
        "dayNumber": 4,
        "title": "The Great Glass Elevator Flight",
        "subtitle": "Up and Out into the clouds, and Wonka's grand inheritance!",
        "estReadingMinutes": 15,
        "totalWordCount": 730,
        "summary": "Only Charlie and Grandpa Joe remain. Mr. Wonka takes them into the Great Glass Elevator, shoots through the roof into the clouds, and passes the entire factory to Charlie!",
        "visualScenes": [
          {
            "id": "scene-c78-4",
            "title": "Soaring Above the Town in Glass",
            "backgroundGradient": "from-sky-500 via-indigo-400 to-purple-500",
            "illustrationType": "great_glass_elevator",
            "caption": "The crystal elevator burst through the factory roof into the blue winter sky, revealing the sparkling town below.",
            "characterAvatars": [
              {
                "name": "Mr. Wonka",
                "emoji": "🎩",
                "speech": "Charlie, I am giving my whole factory to you!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "🚀",
                "speech": "I will care for it with all my heart!",
                "position": "center"
              },
              {
                "name": "Grandpa Joe",
                "emoji": "👴",
                "speech": "Yippee! Charlie has won!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "h78-4",
                "x": 50,
                "y": 30,
                "label": "Red Button",
                "icon": "🔴",
                "soundEffect": "magic",
                "funFact": "The elevator can fly slantways, sideways, and loop-the-loop!",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Crystal Cube of Gold Buttons",
            "paragraphs": [
              "After the other four children had been eliminated through their bad behavior, only Charlie Bucket and Grandpa Joe remained on the tour. The scene was filled with inherit, creating an unforgettable moment. The scene was filled with stewardship, creating an unforgettable moment.",
              "Mr. Wonka turned to Charlie with genuine affection. 'My dear boy! That means you have won! We must celebrate by riding in my favorite invention of all!'",
              "He skipped down the hall and led them into a sparkling room made entirely of thick toughened crystal glass. Thousands of tiny gold buttons covered every wall, offering destinations like 'Fudge Volcanoes', 'Lollipop Mountain', and 'Invisible Chocolate Bars'. Mr. Wonka explained: 'This elevator can travel in any direction—up, down, sideways, slantways, and anywhere through the open sky!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "This elevator travels sideways, slantways, and through the sky!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Grandpa Joe",
                "text": "Look at all these miraculous gold buttons, Charlie!",
                "avatarEmoji": "👴",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c78-4-1",
              "question": "How did the Great Glass Elevator differ from regular elevators?",
              "options": [
                "It only moved backwards into the basement",
                "It could fly in any direction—up, down, sideways, slantways, and through the sky",
                "It was pulled by ropes and horses"
              ],
              "correctInsightIndex": 1,
              "insight": "Wonka's elevator defied gravity and could travel in any direction through the sky!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Up and Out into the Winter Clouds",
            "paragraphs": [
              "Mr. Wonka searched the walls until he found a shiny red button marked: 'UP AND OUT'. 'Hold on tight to the rails!' he shouted joyfully, slamming his palm onto the button.",
              "WHOOOOOOSH! The elevator rocketed upward at tremendous speed. The wind howled against the glass, and with a tremendous CRASH, the elevator smashed right through the factory roof!",
              "They burst into the crisp blue winter sky, soaring thousands of feet above the snowy rooftops. Down below, the great factory looked like a toy model, and the town sparkled in the afternoon sun. Charlie and Grandpa Joe gasped in pure amazement."
            ],
            "dialogueBites": [
              {
                "speaker": "Charlie",
                "text": "We are flying! The whole town looks like tiny toy houses below!",
                "avatarEmoji": "🚀",
                "side": "left"
              },
              {
                "speaker": "Mr. Wonka",
                "text": "Hold tight, Charlie! We are hovering over the world!",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-charlie-78-4-p2",
              "question": "Find a word on this page that means: \"The caring responsibility of looking after something precious.\".",
              "options": [
                "Four",
                "Children",
                "Stewardship"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Stewardship\" (STOO-urd-ship) means the caring responsibility of looking after something precious.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Factory Passed to Charlie",
            "paragraphs": [
              "Hovering high above the snowy town, Mr. Wonka looked at Charlie with deep warmth. 'Charlie,' said Mr. Wonka gently, 'I am getting old. I have no family of my own to look after my factory and my dear Oompa Loompas.'",
              "'I needed a good, honest, loving child who would understand my inventions and treat everyone with kindness. An adult would want to do things their own way, but a sensible child will learn with wonder. Charlie, you were polite, humble, and unselfish throughout the whole visit. I am giving my entire factory to YOU and your family!'",
              "Charlie gasped with tears of joy, and Grandpa Joe danced on the crystal floor. Their cold days of hunger and poverty were over forever!"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "The entire chocolate factory is yours, Charlie! Take the helm!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "Thank you, Mr. Wonka! I will care for every sweet with all my heart!",
                "avatarEmoji": "❤️",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c78-4-3",
              "question": "Why did Mr. Wonka choose Charlie Bucket to inherit the factory?",
              "options": [
                "Because Charlie proved to be polite, kind, honest, and unselfish",
                "Because Charlie had the most money to buy it",
                "Because Charlie was the loudest child"
              ],
              "correctInsightIndex": 0,
              "insight": "Charlie's honesty, kindness, and humility showed he was the perfect person to care for the factory.",
              "rewardKP": 15
            }
          }
        ],
        "paragraphs": [
          "Only Charlie Bucket and Grandpa Joe remained on the factory tour after the other four children were escorted away.",
          "Mr. Wonka led them into the Great Glass Elevator, made entirely of toughened crystal and covered with thousands of gold buttons.",
          "The elevator could travel in any direction: up, down, sideways, slantways, and through the open sky.",
          "Mr. Wonka pressed the red button marked \"UP AND OUT\", and the elevator rocketed upward, bursting through the factory roof into the blue winter clouds.",
          "Hovering over the snowy rooftops, Mr. Wonka explained that he was getting old and needed a kind, honest child to inherit the factory.",
          "Wonka officially gave the entire chocolate factory to Charlie and his family, ending their days of hunger and poverty forever."
        ],
        "vocabList": [
          {
            "word": "Inherit",
            "phonics": "in-HAIR-it",
            "definition": "To receive something precious from someone to keep and care for forever.",
            "funExample": "Charlie was chosen to inherit the magnificent factory.",
            "emoji": "🏰"
          },
          {
            "word": "Slantways",
            "phonics": "SLANT-wayz",
            "definition": "Moving diagonally at an angle rather than straight.",
            "funExample": "The elevator could travel sideways and slantways.",
            "emoji": "↗️"
          },
          {
            "word": "Stewardship",
            "phonics": "STOO-urd-ship",
            "definition": "The caring responsibility of looking after something precious.",
            "funExample": "Charlie accepted the stewardship of Wonka's factory.",
            "emoji": "🗝️"
          }
        ],
        "microChallenge": {
          "id": "mc-c78-4",
          "title": "Elevator Direction Challenge",
          "type": "candy_sort",
          "prompt": "Tap the flight directions in order: Up, Sideways, Slantways",
          "options": [
            "Sideways",
            "Up",
            "Slantways"
          ],
          "rewardGems": 40
        },
        "quizQuestions": [
          {
            "id": "qc78-4-1",
            "question": "How was the Great Glass Elevator able to travel through the air?",
            "options": [
              "It could travel in any direction—up, down, sideways, slantways, and through the sky",
              "It could only move backwards along a railroad track",
              "It had to be pushed by five horses",
              "It could only travel underwater like a submarine"
            ],
            "correctIndex": 0,
            "explanation": "Mr. Wonka explained that the elevator could travel sideways, slantways, and through the open sky!",
            "visualClueEmoji": "🚀",
            "points": 60
          },
          {
            "id": "q-charlie-78-4-vocab1",
            "question": "Find a word in the passage that means: \"To receive something precious from someone to keep and care for forever.\".",
            "options": [
              "Four",
              "Children",
              "Eliminated",
              "Inherit"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Inherit\" means to receive something precious from someone to keep and care for forever.",
            "visualClueEmoji": "🏰",
            "points": 60
          },
          {
            "id": "qc78-4-3",
            "question": "Why did Mr. Wonka want a child rather than an adult to take over the factory?",
            "options": [
              "Adults were not allowed to eat candy",
              "A child would listen, learn with wonder, and care for the factory with kindness",
              "Adults were too busy playing video games",
              "A child was small enough to fit inside the pipes"
            ],
            "correctIndex": 1,
            "explanation": "Mr. Wonka explained that an adult would be rigid, while a child would learn with wonder and kindness.",
            "visualClueEmoji": "❤️",
            "points": 60
          },
          {
            "id": "q-charlie-78-4-vocab2",
            "question": "Find a word in the passage that means: \"Moving diagonally at an angle rather than straight.\".",
            "options": [
              "Four",
              "Children",
              "Slantways",
              "Eliminated"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Slantways\" means moving diagonally at an angle rather than straight.",
            "visualClueEmoji": "↗️",
            "points": 60
          }
        ]
      },
      {
        "id": "charlie-78-5",
        "dayNumber": 5,
        "title": "Flying Home & The Great Family Feast",
        "subtitle": "Hovering over Charlie's cottage and bringing the grandparents to their sweet new home!",
        "estReadingMinutes": 15,
        "totalWordCount": 720,
        "summary": "Mr. Wonka flies the Great Glass Elevator directly to Charlie's cottage. They lift the four grandparents in their wooden bed into the elevator and fly everyone back to live in the chocolate factory!",
        "visualScenes": [
          {
            "id": "scene-c78-5",
            "title": "Hovering Above the Little Cottage",
            "backgroundGradient": "from-sky-700 via-indigo-500 to-amber-200",
            "illustrationType": "great_glass_elevator",
            "caption": "The glass elevator hovered right above Charlie's snowy roof, ready to lift the grandparents' bed into the warm cabin!",
            "characterAvatars": [
              {
                "name": "Mr. Wonka",
                "emoji": "🎩",
                "speech": "Pack your bags, Bucket family! You're moving in!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "🏠",
                "speech": "Grandma, Grandpa, we will never be hungry again!",
                "position": "center"
              },
              {
                "name": "Grandpa Joe",
                "emoji": "👴",
                "speech": "Look at the stars shining through our glass floor!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "h78-5",
                "x": 40,
                "y": 50,
                "label": "Bed Hoist",
                "icon": "🛏️",
                "soundEffect": "magic",
                "funFact": "Wonka lifted the entire bed gently through the roof!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Piloting the Elevator Through the Evening Sky",
            "paragraphs": [
              "High up in the winter clouds, Mr. Wonka placed Charlie's hands on the crystal steering dial. 'Take the helm, Captain Charlie! You're the new master of the factory!' The scene was filled with reunion, creating an unforgettable moment. The scene was filled with sanctuary, creating an unforgettable moment.",
              "Charlie carefully turned the smooth dial. The glass elevator tilted gracefully, swooping down through golden evening clouds. Down below, streetlights twinkled in the dusk, and Charlie spotted his family's little cottage with smoke curling from the chimney.",
              "'There it is!' Charlie cheered. 'That's my house! And Mother is waving from the kitchen window!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "Line her up right over your chimney, Captain Charlie!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "Mother! Father! Look up at the sky!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c78-5-1",
              "question": "How did Charlie feel when Mr. Wonka let him steer the elevator?",
              "options": [
                "Terrified and refused to touch the dial",
                "Angry that he had to steer",
                "Proud, excited, and happy to steer toward his home"
              ],
              "correctInsightIndex": 2,
              "insight": "Charlie felt proud and thrilled as Mr. Wonka guided him to pilot the elevator home.",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Hoisting the Bed Through the Cottage Roof",
            "paragraphs": [
              "The glass elevator settled gently onto the snowy rooftop. Mr. Wonka pushed the green button marked 'BED HOIST'.",
              "A warm golden light beamed down from the floor of the elevator. The roof of the cottage opened smoothly like a box lid. Down in the bedroom, Grandpa George, Grandma Georgina, and Grandma Josephine were resting under their patchwork quilt.",
              "Golden magnetic ropes attached to the wooden bedposts, and slowly, weightlessly, the entire bed floated right up through the roof into the warm elevator cabin! Grandma Josephine gasped in astonishment, clutching her nightcap: 'Mercy on us! Where in the world are we?' Charlie hugged her happily: 'We are in Mr. Wonka's flying elevator, Grandma! We are moving to the chocolate factory!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Grandma Josephine",
                "text": "Mercy me! We are floating in a glass carriage in the sky!",
                "avatarEmoji": "👵",
                "side": "left"
              },
              {
                "speaker": "Charlie's Mother",
                "text": "Oh Charlie, is this all real?",
                "avatarEmoji": "👩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-charlie-78-5-p2",
              "question": "Find a word on this page that means: \"A safe, peaceful, and warm place to live.\".",
              "options": [
                "Sanctuary",
                "High",
                "Winter"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Sanctuary\" (SANK-choo-air-ee) means a safe, peaceful, and warm place to live.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "A Feast and a Forever Home",
            "paragraphs": [
              "Charlie's mother and father stepped into the elevator cabin, and the doors clicked shut. Mr. Wonka pressed the button to head back to the factory.",
              "As they soared across the winter sky, Oompa Loompas in velvet aprons appeared with silver trays, serving steaming mugs of butterscotch cocoa and warm bowls of marshmallow stew to the whole family.",
              "Grandma Georgina took a warm sip and smiled through tears of joy: 'This is the most delicious thing I have ever tasted in all my ninety years!' The elevator touched down gently in the Great Chocolate Room. Charlie held Mr. Wonka's hand on one side and his mother's hand on the other. Mr. Wonka whispered with deep love: 'Welcome home, Bucket family. Our greatest adventure is just beginning!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "Welcome home, Bucket family! There is enough chocolate and love here for ten lifetimes!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "Thank you, Mr. Wonka! We will care for every sweet with all our hearts!",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c78-5-3",
              "question": "What treats did the Oompa Loompas serve Charlie's family on the flight?",
              "options": [
                "Cold cabbage soup and dry bread",
                "Hot butterscotch cocoa and warm marshmallow stew",
                "Salty crackers and sour lemons"
              ],
              "correctInsightIndex": 1,
              "insight": "The Oompa Loompas served steaming hot butterscotch cocoa and marshmallow stew to celebrate!",
              "rewardKP": 20
            }
          }
        ],
        "paragraphs": [
          "Mr. Wonka placed Charlie's hands on the crystal steering dial, letting him pilot the Great Glass Elevator toward his family's cottage.",
          "The elevator hovered over the snowy roof, and Wonka pressed the \"BED HOIST\" button to lift the three grandparents in their cozy bed right into the cabin.",
          "Grandma Josephine and Grandma Georgina clutched their nightcaps in astonishment as Charlie explained that they were moving to the chocolate factory.",
          "Charlie's parents climbed aboard, and the elevator flew back toward the glowing factory chimneys.",
          "Friendly Oompa Loompas served steaming mugs of butterscotch cocoa and bowls of marshmallow stew to the celebrating family.",
          "Mr. Wonka welcomed the Bucket family to their new home in the Great Chocolate Room, marking the joyful beginning of their new lives."
        ],
        "vocabList": [
          {
            "word": "Hoist",
            "phonics": "HOYST",
            "definition": "To lift or raise something heavy up into the air.",
            "funExample": "The bed hoist gently lifted the grandparents' bed into the elevator.",
            "emoji": "🏗️"
          },
          {
            "word": "Reunion",
            "phonics": "ree-YOON-yun",
            "definition": "Coming together again with loved ones after being apart.",
            "funExample": "The family enjoyed a joyful reunion in the glass cabin.",
            "emoji": "👨‍👩‍👦"
          },
          {
            "word": "Sanctuary",
            "phonics": "SANK-choo-air-ee",
            "definition": "A safe, peaceful, and warm place to live.",
            "funExample": "The chocolate factory became a warm sanctuary for Charlie's family.",
            "emoji": "🏰"
          }
        ],
        "microChallenge": {
          "id": "mc-c78-5",
          "title": "Steer the Elevator Home",
          "type": "candy_sort",
          "prompt": "Tap the flight steps in order: 1. Steer Home, 2. Lift Grandparents, 3. Enter Factory Gates",
          "options": [
            "Lift Grandparents",
            "Steer Home",
            "Enter Factory Gates"
          ],
          "rewardGems": 50
        },
        "quizQuestions": [
          {
            "id": "qc78-5-1",
            "question": "Where did Charlie and Mr. Wonka fly the Great Glass Elevator first?",
            "options": [
              "To a busy shopping mall in another country",
              "To an empty desert island in the sea",
              "Straight to Charlie's little cottage to pick up his parents and grandparents",
              "To the top of a snowy mountain"
            ],
            "correctIndex": 2,
            "explanation": "Charlie and Mr. Wonka flew straight to Charlie's little cottage to fetch his beloved family!",
            "visualClueEmoji": "🏠",
            "points": 60
          },
          {
            "id": "q-charlie-78-5-vocab1",
            "question": "Find a word in the passage that means: \"To lift or raise something heavy up into the air.\".",
            "options": [
              "High",
              "Winter",
              "Clouds",
              "Hoist"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Hoist\" means to lift or raise something heavy up into the air.",
            "visualClueEmoji": "🏗️",
            "points": 60
          },
          {
            "id": "qc78-5-3",
            "question": "What delicious treats did the Oompa Loompas serve to Charlie's family?",
            "options": [
              "Steaming mugs of hot butterscotch cocoa and warm marshmallow stew",
              "Cold cabbage soup and dry bread crusts",
              "Bitter coffee and salty crackers",
              "Frozen peas and boiled carrots"
            ],
            "correctIndex": 0,
            "explanation": "Friendly Oompa Loompas served steaming mugs of hot butterscotch cocoa and warm marshmallow stew!",
            "visualClueEmoji": "☕",
            "points": 60
          },
          {
            "id": "q-charlie-78-5-vocab2",
            "question": "Find a word in the passage that means: \"Coming together again with loved ones after being apart.\".",
            "options": [
              "High",
              "Reunion",
              "Winter",
              "Clouds"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Reunion\" means coming together again with loved ones after being apart.",
            "visualClueEmoji": "👨‍👩‍👦",
            "points": 60
          }
        ]
      }
    ],
    "9+": [
      {
        "id": "charlie-9-1",
        "dayNumber": 1,
        "title": "The Golden Ticket Fever",
        "subtitle": "A worldwide craze, industrial intrigue, and a boy's snowy destiny!",
        "estReadingMinutes": 15,
        "totalWordCount": 750,
        "summary": "Amid worldwide mania for Willy Wonka's five Golden Tickets, starving Charlie Bucket finds a silver dollar in the snow. He buys a chocolate bar and discovers the final Golden Ticket!",
        "visualScenes": [
          {
            "id": "scene-c9-1",
            "title": "Snowy Town & The Sweet Shop",
            "backgroundGradient": "from-slate-950 via-blue-950 to-amber-200",
            "illustrationType": "wonka_gates",
            "caption": "Freezing blizzards blew across the town. Outside the corner sweet shop, Charlie spotted a round silver dollar half-buried in the slush!",
            "characterAvatars": [
              {
                "name": "Charlie",
                "emoji": "👦",
                "speech": "My tummy is rumbling, but look at that silver coin!",
                "position": "left"
              },
              {
                "name": "Shopkeeper",
                "emoji": "👨‍🍳",
                "speech": "Warm up by the counter, young lad!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "h9-1",
                "x": 35,
                "y": 65,
                "label": "Silver Dollar",
                "icon": "🪙",
                "soundEffect": "coin",
                "funFact": "Charlie found a shiny silver dollar lying in the snow near the curb!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Poverty, Secrecy, and the Golden Tickets",
            "paragraphs": [
              "Little Charlie Bucket lived with his parents and four elderly grandparents in a cramped wooden cottage at the edge of a great industrial town. The four grandparents—all over ninety years old—lay bundled together in the single bed in the back room, wrapped in worn blankets to stave off the winter chill. The family subsisted on watery cabbage soup, dry bread, and margarine. The scene was filled with reclusive, creating an unforgettable moment. The scene was filled with serendipity, creating an unforgettable moment.",
              "A decade earlier, Mr. Willy Wonka had locked the giant iron gates of his chocolate factory after rival candy makers planted undercover spies to steal his revolutionary recipes. Ever since, no worker was ever seen entering or leaving, yet sweet-smelling smoke billowed from the tall chimneys, and millions of candy bars flowed out to shops worldwide. Every afternoon on his walk home from school, Charlie would pause outside the towering brick walls, breathing in the rich scents of roasting cocoa beans, melted butterscotch, and warm vanilla sugar.",
              "Then came the announcement that sent shockwaves across the globe: five Golden Tickets were hidden beneath the wrappers of ordinary Wonka chocolate bars. The finders would be granted a full tour of the secret factory and a lifetime supply of sweets. Four tickets were swiftly claimed by gluttonous Augustus Gloop, spoiled Veruca Salt, gum-obsessed Violet Beauregarde, and television-fixated Mike Teavee. Only one ticket remained hidden."
            ],
            "dialogueBites": [
              {
                "speaker": "Charlie",
                "text": "The air outside the factory smells like melted chocolate and roasted nuts!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Grandpa Joe",
                "text": "Wonka's factory is full of miracles, Charlie. Never give up hope!",
                "avatarEmoji": "👴",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c9-1-1",
              "question": "Why did Willy Wonka lock his factory gates years before the tour?",
              "options": [
                "Because the factory ran out of electricity",
                "Because rival candy makers sent spies to steal his secret recipes",
                "Because he wanted to convert the building into an ice rink"
              ],
              "correctInsightIndex": 1,
              "insight": "Wonka closed the gates to the public to prevent industrial spies from stealing his secret candy recipes.",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "A Silver Dollar in the Frozen Slush",
            "paragraphs": [
              "As a harsh blizzard gripped the town, the toothpaste factory where Mr. Bucket worked suddenly shut down. Starvation pressed hard against the Bucket household. Charlie's bones showed through his skin, and his steps became slow and weak.",
              "Walking home through the biting gale with his thin coat clutching his frame, Charlie kept his eyes glued to the snowy ground. Near the pavement curb, half-buried under frozen grey slush, something caught the light. He dropped to his knees, his numb fingers digging into the ice. It was a genuine silver dollar!",
              "Charlie stared at the heavy coin. He knew his family desperately needed bread, but his stomach cramped with agonizing hunger. He resolved to purchase just one Wonka chocolate bar to satisfy his hunger, and take every penny of the nine nickels in change directly home to his mother."
            ],
            "dialogueBites": [
              {
                "speaker": "Charlie",
                "text": "A silver dollar in the slush! I can buy one bar and bring all the change to Mother!",
                "avatarEmoji": "🪙",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-charlie-9-1-p2",
              "question": "Find a word on this page that means: \"Brilliantly radiant and sparkling brightly in the light.\".",
              "options": [
                "Little",
                "Charlie",
                "Dazzling"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Dazzling\" (DAZ-ling) means brilliantly radiant and sparkling brightly in the light.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Dazzling Flash of the Final Ticket",
            "paragraphs": [
              "Charlie pushed open the door of the warm corner sweet shop, the little brass bell ringing overhead. He politely asked the shopkeeper: 'One Wonka Whipple-Scrumptious Fudgemallow Delight, please.'",
              "The shopkeeper handed him the bar and his change. Charlie tore off the paper wrapper, devouring a mouthful of rich chocolate. Then, beneath the chocolate bar, a brilliant, dazzling flash of pure gold gleamed in the shop's warm lighting!",
              "The shopkeeper leaned over the wooden counter and gasped in utter astonishment: 'It's a Golden Ticket! You've found Wonka's last Golden Ticket!' Customers crowded around offering stacks of cash to buy it, but the shopkeeper urged Charlie: 'Don't let anyone take it! Run straight home, boy!' Clutching the precious gold paper tightly, Charlie dashed through the snowy streets to his family, where ninety-year-old Grandpa Joe leaped out of bed in triumph!"
            ],
            "dialogueBites": [
              {
                "speaker": "Shopkeeper",
                "text": "You've found Wonka's last Golden Ticket! Run home to your family!",
                "avatarEmoji": "👨‍🍳",
                "side": "left"
              },
              {
                "speaker": "Grandpa Joe",
                "text": "Yippee! Our sweet Charlie has found the fifth Golden Ticket!",
                "avatarEmoji": "👴",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c9-1-3",
              "question": "How did Grandpa Joe react when Charlie revealed the Golden Ticket?",
              "options": [
                "He leaped out of bed and danced with joy for the first time in twenty years",
                "He rolled over and went back to sleep under the blanket",
                "He told Charlie to sell it to the neighbors"
              ],
              "correctInsightIndex": 0,
              "insight": "Grandpa Joe was so inspired by Charlie's discovery that his strength returned and he danced with joy.",
              "rewardKP": 15
            }
          }
        ],
        "paragraphs": [
          "Little Charlie Bucket lived in poverty with his parents and four bedridden grandparents in a town dominated by Willy Wonka's mysterious chocolate factory.",
          "Years earlier, Wonka locked the factory gates to protect his secret recipes from industrial spies, running the plant with mysterious unseen workers.",
          "Worldwide hysteria erupted when Wonka hid five Golden Tickets inside chocolate bars. Four were claimed by greedy children, leaving only one ticket.",
          "During a freezing winter, Charlie found a silver dollar in the snowy slush, deciding to buy one chocolate bar and take the change home to his mother.",
          "Charlie politely purchased a Wonka Whipple-Scrumptious Fudgemallow Delight, uncovering a dazzling flash of pure gold beneath the wrapper.",
          "The shopkeeper announced the discovery of the fifth Golden Ticket, and Charlie sprinted home to celebrate with his overjoyed family and Grandpa Joe."
        ],
        "vocabList": [
          {
            "word": "Reclusive",
            "phonics": "ri-KLOO-siv",
            "definition": "Living apart from society and private from the public.",
            "funExample": "Mr. Wonka was a reclusive inventor who worked behind closed gates.",
            "emoji": "🏰"
          },
          {
            "word": "Serendipity",
            "phonics": "sair-en-DIP-uh-tee",
            "definition": "Finding valuable or agreeable things not sought for; good fortune.",
            "funExample": "Finding the silver dollar in the snow was pure serendipity for Charlie.",
            "emoji": "✨"
          },
          {
            "word": "Dazzling",
            "phonics": "DAZ-ling",
            "definition": "Brilliantly radiant and sparkling brightly in the light.",
            "funExample": "The Golden Ticket gave off a dazzling golden sheen.",
            "emoji": "🌟"
          }
        ],
        "microChallenge": {
          "id": "mc-c9-1",
          "title": "Golden Ticket Reveal",
          "type": "golden_ticket_scratch",
          "prompt": "Tap to unwrap the Golden Ticket:",
          "options": [
            "Silver Foil",
            "Golden Ticket",
            "Brown Paper"
          ],
          "rewardGems": 30
        },
        "quizQuestions": [
          {
            "id": "qc9-1-1",
            "question": "Why did Willy Wonka lock his factory gates ten years before the story began?",
            "options": [
              "To save money on winter heating bills",
              "Because rival candy makers sent spies to steal his secret recipes",
              "Because the town ordered the factory to shut down",
              "Because he decided to quit making candy"
            ],
            "correctIndex": 1,
            "explanation": "Mr. Wonka locked the gates because competing confectioners sent spies disguised as workers to steal recipes.",
            "visualClueEmoji": "🔒",
            "points": 60
          },
          {
            "id": "q-charlie-9-1-vocab1",
            "question": "Find a word in the passage that means: \"Living apart from society and private from the public.\".",
            "options": [
              "Little",
              "Charlie",
              "Reclusive",
              "Bucket"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Reclusive\" means living apart from society and private from the public.",
            "visualClueEmoji": "🏰",
            "points": 60
          },
          {
            "id": "qc9-1-3",
            "question": "What did the shopkeeper shout when Charlie opened the chocolate wrapper?",
            "options": [
              "'It's a Golden Ticket! You've found Wonka's last Golden Ticket!'",
              "'You must pay extra tax on that chocolate bar!'",
              "'Please put that wrapper into the recycling bin!'",
              "'The store is closed for the evening!'"
            ],
            "correctIndex": 0,
            "explanation": "The shopkeeper shouted in astonishment that Charlie had found Wonka's last Golden Ticket!",
            "visualClueEmoji": "🎫",
            "points": 60
          },
          {
            "id": "q-charlie-9-1-vocab2",
            "question": "Find a word in the passage that means: \"Finding valuable or agreeable things not sought for; good fortune.\".",
            "options": [
              "Little",
              "Charlie",
              "Bucket",
              "Serendipity"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Serendipity\" means finding valuable or agreeable things not sought for; good fortune.",
            "visualClueEmoji": "✨",
            "points": 60
          }
        ]
      },
      {
        "id": "charlie-9-2",
        "dayNumber": 2,
        "title": "The Great Chocolate Room",
        "subtitle": "A roaring waterfall, edible mint grass, and Oompa Loompa songs!",
        "estReadingMinutes": 15,
        "totalWordCount": 750,
        "summary": "Mr. Wonka reveals the Great Chocolate Room, where a roaring waterfall mixes melted chocolate into a river. Augustus Gloop falls in, and the Oompa Loompas sing about greed.",
        "visualScenes": [
          {
            "id": "scene-c9-2",
            "title": "The Roaring Waterfall of Cocoa",
            "backgroundGradient": "from-amber-800 via-amber-600 to-emerald-400",
            "illustrationType": "chocolate_waterfall",
            "caption": "A fifty-foot waterfall churned melted chocolate into a river, framed by sweet edible mint sugar grass.",
            "characterAvatars": [
              {
                "name": "Mr. Wonka",
                "emoji": "🎩",
                "speech": "Everything in this room is eatable, even the grass!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "🤩",
                "speech": "Look at the giant waterfall mixing the chocolate!",
                "position": "center"
              },
              {
                "name": "Augustus",
                "emoji": "🍫",
                "speech": "I must drink from the river!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "h9-2",
                "x": 50,
                "y": 50,
                "label": "Waterfall",
                "icon": "🌊",
                "soundEffect": "magic",
                "funFact": "The waterfall aerates the chocolate to make it light and fluffy!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Grand Entrance to the Chocolate Valley",
            "paragraphs": [
              "On February first, the iron gates opened, and Mr. Willy Wonka welcomed the five Golden Ticket winners. Dressed in a plum velvet tailcoat, bottle-green trousers, and a crooked top hat, Wonka skipped with lively energy through gleaming white hallways.",
              "He halted before massive purple double doors. 'This is the nerve center of the entire enterprise!' Wonka proclaimed. 'Everything inside is eatable, beautiful, and delicious!'",
              "He threw open the doors. A breathtaking landscape unfolded before them: a lush green valley cleft by a wide river of swirling melted chocolate. At the far end, a colossal fifty-foot waterfall crashed over rocky cliffs, splashing warm cocoa mist and frothy bubbles into the sweet-scented air."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "Welcome to the Great Chocolate Room! Breathe in that sweet cocoa air!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "Grandpa Joe, the whole river is made of warm melted chocolate!",
                "avatarEmoji": "🤩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c9-2-1",
              "question": "What makes the Great Chocolate Room unique in the world of candy making?",
              "options": [
                "It is made of concrete and steel with no edible sweets",
                "It is a tiny basement room with no windows",
                "It features an entire valley with a flowing river of chocolate mixed by a waterfall"
              ],
              "correctInsightIndex": 2,
              "insight": "Wonka created an entire natural valley where all elements, from river to grass, are delicious candy!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Waterfall Mixing and Edible Peppermint Sugar Grass",
            "paragraphs": [
              "'No other factory in the world mixes its chocolate by waterfall!' cried Mr. Wonka proudly. 'The kinetic force of the cascading torrent churns and aerates the cocoa, infusing fine air bubbles so that my chocolate bars are light, frothy, and melt luxuriously on the palate!'",
              "Wonka gestured to the emerald slopes beside the river. 'And behold the ground! The grass beneath your feet is composed of a new variety of soft mint sugar that I have just synthesized! Try a blade, Charlie!'",
              "Charlie knelt and tasted a blade of green grass. It dissolved instantly, filling his mouth with sweet, refreshing peppermint. Across the river, tiny knee-high workers with bright neon hair waved from beneath candy willow trees. 'Those are the Oompa Loompas!' explained Mr. Wonka. 'My wonderful workforce from Loompaland!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Charlie",
                "text": "The grass tastes like refreshing sweet peppermint sugar!",
                "avatarEmoji": "🌱",
                "side": "left"
              },
              {
                "speaker": "Mr. Wonka",
                "text": "The Oompa Loompas are my wonderful helpers from Loompaland!",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-charlie-9-2-p2",
              "question": "Find a word on this page that means: \"To introduce air into a liquid to make it light and bubbly.\".",
              "options": [
                "Aerate",
                "February",
                "Iron"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Aerate\" (AIR-ayt) means to introduce air into a liquid to make it light and bubbly.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "Augustus Gloop's Plunge and the Oompa Loompa Chorus",
            "paragraphs": [
              "While the others listened in wonder, Augustus Gloop crept down the slippery bank. Ignoring Wonka's desperate cries that human hands must never contaminate the chocolate, Augustus knelt and dunked his face into the river, drinking greedily.",
              "Suddenly, his heavy boots lost their traction on the muddy slope. With a tremendous SPLASH, Augustus fell headfirst into the chocolate river! He floundered in the warm torrent before being sucked into a large glass suction pipe that pulled him upward toward the fudge mixing room.",
              "Across the river, the Oompa Loompas began beating little candy drums, bursting into a satirical chorus about the dangers of unchecked gluttony and the comical justice of greedy behavior."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "My chocolate! Unclean! Call the juicing pump before he turns into fudge!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Oompa Loompas",
                "text": "Oompa Loompa doompety doo, greedy children get stuck in the flue!",
                "avatarEmoji": "🧑‍🌾",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c9-2-3",
              "question": "What caused Augustus Gloop's accident at the chocolate river?",
              "options": [
                "He was pushed by an Oompa Loompa",
                "He ignored Mr. Wonka's direct warning and knelt on the slippery bank to drink from the river",
                "A sudden gust of wind blew him in"
              ],
              "correctInsightIndex": 1,
              "insight": "Augustus let his uncontrolled greed overpower clear safety warnings, slipping right into the river.",
              "rewardKP": 15
            }
          }
        ],
        "paragraphs": [
          "Mr. Wonka led the visitors into the Great Chocolate Room, featuring a vast valley with a roaring fifty-foot waterfall and a river of melted chocolate.",
          "The waterfall churns and mixes the chocolate with air, ensuring Wonka bars are light, fluffy, and melt smoothly on the tongue.",
          "The green grass was made of edible soft mint sugar that tasted of refreshing peppermint.",
          "Across the river, tiny knee-high Oompa Loompas in deer skins worked beneath candy trees, singing and dancing happily.",
          "Augustus Gloop ignored Wonka's warnings not to touch the chocolate, knelt on the muddy bank, slipped, and fell headfirst into the river.",
          "Augustus was sucked into a glass transport pipe, and the Oompa Loompas sang a witty song about the perils of overeating and greed."
        ],
        "vocabList": [
          {
            "word": "Aerate",
            "phonics": "AIR-ayt",
            "definition": "To introduce air into a liquid to make it light and bubbly.",
            "funExample": "The waterfall aerates the chocolate to make it fluffy.",
            "emoji": "🫧"
          },
          {
            "word": "Satirical",
            "phonics": "suh-TEER-uh-kul",
            "definition": "Using humor or mockery to expose foolish behavior.",
            "funExample": "The Oompa Loompas sang satirical songs about greedy habits.",
            "emoji": "🎭"
          }
        ],
        "microChallenge": {
          "id": "mc-c9-2",
          "title": "Organize River Sweets",
          "type": "candy_sort",
          "prompt": "Sort the edible sweets from the riverbank:",
          "options": [
            "Mint Sugar Grass",
            "Caramel Pebble",
            "Fudge Marshmallow"
          ],
          "rewardGems": 35
        },
        "quizQuestions": [
          {
            "id": "qc9-2-1",
            "question": "Why does Mr. Wonka mix his chocolate with a roaring waterfall instead of ordinary metal mixer pots?",
            "options": [
              "Because metal mixers were too expensive to purchase",
              "To wash the factory floor every morning",
              "The waterfall churns and mixes the chocolate with air to make it light and fluffy",
              "To cool down the chocolate with mountain ice"
            ],
            "correctIndex": 2,
            "explanation": "Mr. Wonka explained that the waterfall churns and aerates the chocolate to make it light and fluffy!",
            "visualClueEmoji": "🌊",
            "points": 60
          },
          {
            "id": "q-charlie-9-2-vocab1",
            "question": "Find a word in the passage that means: \"To introduce air into a liquid to make it light and bubbly.\".",
            "options": [
              "Aerate",
              "February",
              "Iron",
              "Gates"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Aerate\" means to introduce air into a liquid to make it light and bubbly.",
            "visualClueEmoji": "🫧",
            "points": 60
          },
          {
            "id": "qc9-2-3",
            "question": "What did Charlie notice when he tasted the sweet green grass in the valley?",
            "options": [
              "It tasted of bitter cabbage and cold water",
              "It was sharp plastic painted green",
              "It was too spicy to swallow",
              "It tasted like cool peppermint sugar that melted on the tongue"
            ],
            "correctIndex": 3,
            "explanation": "Charlie tasted the grass and found it was edible mint sugar that melted into cool peppermint on his tongue.",
            "visualClueEmoji": "🌱",
            "points": 60
          },
          {
            "id": "q-charlie-9-2-vocab2",
            "question": "Find a word in the passage that means: \"Using humor or mockery to expose foolish behavior.\".",
            "options": [
              "February",
              "Satirical",
              "Iron",
              "Gates"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Satirical\" means using humor or mockery to expose foolish behavior.",
            "visualClueEmoji": "🎭",
            "points": 60
          }
        ]
      },
      {
        "id": "charlie-9-3",
        "dayNumber": 3,
        "title": "The Rainbow Inventing Room",
        "subtitle": "Everlasting Gobstoppers and the experimental dinner chewing gum!",
        "estReadingMinutes": 15,
        "totalWordCount": 750,
        "summary": "In his top-secret Inventing Room, Mr. Wonka showcases Everlasting Gobstoppers and three-course dinner gum. Violet Beauregarde ignores warnings and transforms into a giant blueberry!",
        "visualScenes": [
          {
            "id": "scene-c9-3",
            "title": "The Whistling Laboratory",
            "backgroundGradient": "from-purple-900 via-pink-700 to-amber-300",
            "illustrationType": "inventing_room",
            "caption": "Kettles whistled and pots bubbled with secret sweets. Mr. Wonka displayed the Everlasting Gobstopper that never shrinks!",
            "characterAvatars": [
              {
                "name": "Mr. Wonka",
                "emoji": "🎩",
                "speech": "Do not touch anything in this room! It is all experimental!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "🍭",
                "speech": "Look at the Gobstoppers! They sparkle like jewels!",
                "position": "center"
              },
              {
                "name": "Violet",
                "emoji": "🫐",
                "speech": "I must chew this amazing dinner gum right now!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "h9-3",
                "x": 45,
                "y": 55,
                "label": "Gobstopper Vat",
                "icon": "🍬",
                "soundEffect": "magic",
                "funFact": "You can suck a Gobstopper forever and it never loses its taste!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Inside the Secret Laboratory",
            "paragraphs": [
              "Mr. Wonka unlocked a heavy iron door with three brass keys, revealing a sign: 'INVENTING ROOM — PRIVATE — KEEP OUT!' The scene was filled with hubris, creating an unforgettable moment. The scene was filled with espionage, creating an unforgettable moment.",
              "'Keep your hands strictly in your pockets, children!' Wonka commanded softly. 'This is the creative sanctuary of the factory. Years ago, rival candy manufacturers sent spies to steal my formulas, forcing me to dismiss my workforce. What you see here is entirely secret!'",
              "Charlie marveled at the laboratory. Black cauldrons simmered over glowing burners, glass retorts hissed with condensed steam, and intricate copper tubing distilled colorful syrups into silver basins. The room smelled delightfully of roasted nuts, spun toffee, and candied cherries."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "Step carefully! Everything here is fresh from the laboratory!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "Look at all the strange machines making candy, Grandpa Joe!",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c9-3-1",
              "question": "Why was the Inventing Room kept under such strict lock and key?",
              "options": [
                "To prevent rival confectionery spies from stealing Wonka's secret recipes",
                "Because the floor was freshly painted red",
                "Because there was no electricity in the room"
              ],
              "correctInsightIndex": 0,
              "insight": "Wonka strictly protected his experimental recipes from industrial theft by rival candy makers.",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Everlasting Gobstopper",
            "paragraphs": [
              "Wonka led them to a silver machine dispensing glistening striped candy orbs. 'Everlasting Gobstoppers!' he announced proudly.",
              "'I have designed these specifically for children whose parents can provide only meager pocket money. You can place one in your mouth, and suck it, and suck it forever, and it will never diminish in size! It never loses its sweet flavor, and every week it shifts to a brand new delicious taste!'",
              "Charlie thought of his family's poverty, where a single coin was a rare luxury. To a child with no money, an Everlasting Gobstopper was an invaluable gift of enduring sweetness."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "One Gobstopper will last a child for the rest of their life!",
                "avatarEmoji": "🍬",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "That is the kindest invention in the world, Mr. Wonka!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-charlie-9-3-p2",
              "question": "Find a word on this page that means: \"Based on new, untested ideas still in development.\".",
              "options": [
                "Wonka",
                "Experimental",
                "Unlocked"
              ],
              "correctInsightIndex": 1,
              "insight": "\"Experimental\" (ek-spair-uh-MEN-tul) means based on new, untested ideas still in development.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Three-Course Dinner Gum and Violet's Hubris",
            "paragraphs": [
              "Next, Wonka demonstrated a colossal mechanical apparatus that whirred and clanked before ejecting a single flat grey strip of chewing gum.",
              "'This,' Wonka proclaimed, 'is a three-course dinner in chewing gum form! As you chew, you experience piping hot tomato soup, followed by savory roast beef and baked potatoes, finishing with warm blueberry pie with clotted cream!'",
              "Violet Beauregarde, obsessed with chewing records, snatched the gum. 'Hold on! Do not chew that!' shouted Mr. Wonka in alarm. 'It is experimental and not yet ready! The blueberry dessert stage has gone wrong in testing!' But Violet chewed defiantly. Her skin turned bright violet, and her body swelled up like a giant balloon into a massive round blueberry! The Oompa Loompas were summoned to roll her away to the juicing room."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "Don't chew it! The blueberry dessert stage is not ready yet!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Violet",
                "text": "My skin is turning purple! I feel like a giant bowling ball!",
                "avatarEmoji": "🫐",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c9-3-3",
              "question": "What warning did Mr. Wonka give about the three-course dinner gum?",
              "options": [
                "The gum had turned into rubber",
                "The gum had lost all its flavor",
                "The gum was not ready yet because the dessert stage had gone wrong"
              ],
              "correctInsightIndex": 2,
              "insight": "Mr. Wonka warned that the experimental gum had not finished testing and the dessert was faulty.",
              "rewardKP": 15
            }
          }
        ],
        "paragraphs": [
          "Mr. Wonka unlocked the Inventing Room, explaining that he protected his recipes from corporate espionage.",
          "Inside, cauldrons bubbled with toffee, roasted nuts, and syrups in a dazzling display of candy chemistry.",
          "Wonka revealed the Everlasting Gobstopper, specially engineered for children with little money because you can suck it forever and it never gets smaller.",
          "Charlie admired how Wonka's invention thoughtfully addressed the financial struggles of poor children.",
          "A rumbling machine produced a strip of three-course dinner chewing gum containing tomato soup, roast beef, and blueberry pie.",
          "Wonka shouted at Violet Beauregarde that the gum was not ready yet because the dessert stage had gone wrong in testing.",
          "Violet chewed the gum anyway, turned bright purple, and swelled into a giant blueberry, requiring the Oompa Loompas to roll her to the juicing room."
        ],
        "vocabList": [
          {
            "word": "Hubris",
            "phonics": "HYOO-bris",
            "definition": "Excessive pride or defiance that leads to a downfall.",
            "funExample": "Violet's hubris caused her to chew the untested gum.",
            "emoji": "🫐"
          },
          {
            "word": "Espionage",
            "phonics": "ES-pee-uh-nahzh",
            "definition": "The practice of using spies to obtain secret business information.",
            "funExample": "Wonka locked his gates to prevent corporate espionage.",
            "emoji": "🕵️"
          },
          {
            "word": "Experimental",
            "phonics": "ek-spair-uh-MEN-tul",
            "definition": "Based on new, untested ideas still in development.",
            "funExample": "The dinner gum was an experimental formula.",
            "emoji": "🧪"
          }
        ],
        "microChallenge": {
          "id": "mc-c9-3",
          "title": "Dinner Course Sequence",
          "type": "candy_sort",
          "prompt": "Tap the dinner courses in order: Tomato Soup, Roast Beef, Blueberry Pie",
          "options": [
            "Roast Beef",
            "Tomato Soup",
            "Blueberry Pie"
          ],
          "rewardGems": 35
        },
        "quizQuestions": [
          {
            "id": "qc9-3-1",
            "question": "Why was the Everlasting Gobstopper especially beneficial for poor children?",
            "options": [
              "It can be exchanged for gold coins at the bank",
              "It is made of painted wood that never rots",
              "It grows into a toy carriage",
              "You can suck it forever and it will never get any smaller"
            ],
            "correctIndex": 3,
            "explanation": "Mr. Wonka explained that you can suck an Everlasting Gobstopper forever and it never shrinks!",
            "visualClueEmoji": "🍬",
            "points": 60
          },
          {
            "id": "q-charlie-9-3-vocab1",
            "question": "Find a word in the passage that means: \"Excessive pride or defiance that leads to a downfall.\".",
            "options": [
              "Wonka",
              "Hubris",
              "Unlocked",
              "Heavy"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Hubris\" means excessive pride or defiance that leads to a downfall.",
            "visualClueEmoji": "🫐",
            "points": 60
          },
          {
            "id": "qc9-3-3",
            "question": "What three courses were contained in the experimental chewing gum?",
            "options": [
              "Chicken soup, fried fish, and apple crumble",
              "Cabbage soup, stale bread, and margarine",
              "Tomato soup, roast beef and potatoes, and blueberry pie with cream",
              "Pancakes, bacon, and strawberry ice cream"
            ],
            "correctIndex": 2,
            "explanation": "The three courses were tomato soup, roast beef and baked potatoes, and blueberry pie with cream.",
            "visualClueEmoji": "🍽️",
            "points": 60
          },
          {
            "id": "q-charlie-9-3-vocab2",
            "question": "Find a word in the passage that means: \"The practice of using spies to obtain secret business information.\".",
            "options": [
              "Espionage",
              "Wonka",
              "Unlocked",
              "Heavy"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Espionage\" means the practice of using spies to obtain secret business information.",
            "visualClueEmoji": "🕵️",
            "points": 60
          }
        ]
      },
      {
        "id": "charlie-9-4",
        "dayNumber": 4,
        "title": "The Great Glass Elevator Flight",
        "subtitle": "Up and Out into the clouds, and Wonka's grand inheritance!",
        "estReadingMinutes": 15,
        "totalWordCount": 750,
        "summary": "Only Charlie and Grandpa Joe remain. Mr. Wonka takes them into the Great Glass Elevator, shoots through the roof into the clouds, and passes the entire factory to Charlie!",
        "visualScenes": [
          {
            "id": "scene-c9-4",
            "title": "Soaring Above the Town in Glass",
            "backgroundGradient": "from-sky-500 via-indigo-400 to-purple-500",
            "illustrationType": "great_glass_elevator",
            "caption": "The crystal elevator burst through the factory roof into the blue winter sky, revealing the sparkling town below.",
            "characterAvatars": [
              {
                "name": "Mr. Wonka",
                "emoji": "🎩",
                "speech": "Charlie, I am giving my whole factory to you!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "🚀",
                "speech": "I will care for it with all my heart!",
                "position": "center"
              },
              {
                "name": "Grandpa Joe",
                "emoji": "👴",
                "speech": "Yippee! Charlie has won!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "h9-4",
                "x": 50,
                "y": 30,
                "label": "Red Button",
                "icon": "🔴",
                "soundEffect": "magic",
                "funFact": "The elevator can fly slantways, sideways, and loop-the-loop!",
                "action": "bounce"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Crystal Cube of Gold Buttons",
            "paragraphs": [
              "With the elimination of the other four children through their vices, only Charlie Bucket and Grandpa Joe remained on the factory tour. The scene was filled with inherit, creating an unforgettable moment. The scene was filled with stewardship, creating an unforgettable moment.",
              "Mr. Wonka turned to Charlie with radiant warmth: 'My dear boy, you are the only one left! You have won! We must celebrate by riding in my masterpiece!'",
              "He ushered them into a magnificent cube constructed entirely of thick, toughened crystal glass. Every surface was studded with thousands of gold buttons labeled with destinations like 'Fudge Volcanoes', 'Lollipop Mountain', and 'Invisible Chocolate Bars'. Wonka explained: 'This elevator travels in any direction—up, down, sideways, slantways, and through the sky!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "This elevator travels sideways, slantways, and through the sky!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Grandpa Joe",
                "text": "Look at all these miraculous gold buttons, Charlie!",
                "avatarEmoji": "👴",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c9-4-1",
              "question": "How did the Great Glass Elevator differ from conventional elevators?",
              "options": [
                "It only moved backwards into the basement",
                "It could travel in any direction—up, down, sideways, slantways, and through the sky",
                "It had no floor and was made of cardboard"
              ],
              "correctInsightIndex": 1,
              "insight": "Wonka's elevator defied gravity and could travel in any direction through the sky!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Up and Out into the Stratosphere",
            "paragraphs": [
              "Wonka located a prominent red button inscribed: 'UP AND OUT'. 'Hold on tight!' he cried, slamming down his hand.",
              "WHOOOOOOSH! The elevator rocketed upward at supersonic velocity. With an almighty CRASH, it punched straight through the factory roof, shooting into the crisp blue winter sky!",
              "Hovering thousands of feet above the snowy rooftops, Charlie looked down upon the town. The great chocolate factory resembled a toy model, and the snow sparkled peacefully in the cold afternoon sun. Charlie and Grandpa Joe gasped in pure wonder."
            ],
            "dialogueBites": [
              {
                "speaker": "Charlie",
                "text": "We are flying! The whole town looks like tiny toy houses below!",
                "avatarEmoji": "🚀",
                "side": "left"
              },
              {
                "speaker": "Mr. Wonka",
                "text": "Hold tight, Charlie! We are hovering over the world!",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-charlie-9-4-p2",
              "question": "Find a word on this page that means: \"The caring responsibility of looking after something precious.\".",
              "options": [
                "Elimination",
                "Four",
                "Stewardship"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Stewardship\" (STOO-urd-ship) means the caring responsibility of looking after something precious.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Factory Given to Charlie",
            "paragraphs": [
              "Gazing down upon the town, Mr. Wonka turned to Charlie with a gentle smile: 'Charlie, I am an old man with no family to look after my factory and my dear Oompa Loompas.'",
              "'I needed a good, honest, loving child who would understand my inventions and treat everyone with kindness. An adult would be rigid and stubborn, but a child will learn with humility and wonder. Charlie, you were polite, humble, and unselfish throughout the whole visit. I am giving my entire factory to YOU and your family!'",
              "Charlie hugged Mr. Wonka with tears of joy, while Grandpa Joe danced on the crystal floor. Their days of cold cabbage soup and poverty were over forever!"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "The entire chocolate factory is yours, Charlie! Take the helm!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "Thank you, Mr. Wonka! I will care for every sweet with all my heart!",
                "avatarEmoji": "❤️",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c9-4-3",
              "question": "Why did Mr. Wonka choose Charlie Bucket to inherit the factory?",
              "options": [
                "Because Charlie proved to be polite, kind, honest, and unselfish",
                "Because Charlie had the most money to buy it",
                "Because Charlie was the loudest child"
              ],
              "correctInsightIndex": 0,
              "insight": "Charlie's honesty, kindness, and humility showed he was the perfect person to care for the factory.",
              "rewardKP": 15
            }
          }
        ],
        "paragraphs": [
          "Only Charlie Bucket and Grandpa Joe remained on the factory tour after the other four children were escorted away.",
          "Mr. Wonka led them into the Great Glass Elevator, made entirely of toughened crystal and covered with thousands of gold buttons.",
          "The elevator could travel in any direction: up, down, sideways, slantways, and through the open sky.",
          "Mr. Wonka pressed the red button marked \"UP AND OUT\", and the elevator rocketed upward, bursting through the factory roof into the blue winter clouds.",
          "Hovering over the snowy rooftops, Mr. Wonka explained that he was getting old and needed a kind, honest child to inherit the factory.",
          "Wonka officially gave the entire chocolate factory to Charlie and his family, ending their days of hunger and poverty forever."
        ],
        "vocabList": [
          {
            "word": "Inherit",
            "phonics": "in-HAIR-it",
            "definition": "To receive something precious from someone to keep and care for forever.",
            "funExample": "Charlie was chosen to inherit the magnificent factory.",
            "emoji": "🏰"
          },
          {
            "word": "Slantways",
            "phonics": "SLANT-wayz",
            "definition": "Moving diagonally at an angle rather than straight.",
            "funExample": "The elevator could travel sideways and slantways.",
            "emoji": "↗️"
          },
          {
            "word": "Stewardship",
            "phonics": "STOO-urd-ship",
            "definition": "The caring responsibility of looking after something precious.",
            "funExample": "Charlie accepted the stewardship of Wonka's factory.",
            "emoji": "🗝️"
          }
        ],
        "microChallenge": {
          "id": "mc-c9-4",
          "title": "Elevator Direction Challenge",
          "type": "candy_sort",
          "prompt": "Tap the flight directions in order: Up, Sideways, Slantways",
          "options": [
            "Sideways",
            "Up",
            "Slantways"
          ],
          "rewardGems": 40
        },
        "quizQuestions": [
          {
            "id": "qc9-4-1",
            "question": "How was the Great Glass Elevator able to travel through the air?",
            "options": [
              "It could travel in any direction—up, down, sideways, slantways, and through the sky",
              "It could only move backwards along a railroad track",
              "It had to be pushed by five horses",
              "It could only travel underwater like a submarine"
            ],
            "correctIndex": 0,
            "explanation": "Mr. Wonka explained that the elevator could travel sideways, slantways, and through the open sky!",
            "visualClueEmoji": "🚀",
            "points": 60
          },
          {
            "id": "q-charlie-9-4-vocab1",
            "question": "Find a word in the passage that means: \"To receive something precious from someone to keep and care for forever.\".",
            "options": [
              "Elimination",
              "Four",
              "Children",
              "Inherit"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Inherit\" means to receive something precious from someone to keep and care for forever.",
            "visualClueEmoji": "🏰",
            "points": 60
          },
          {
            "id": "qc9-4-3",
            "question": "Why did Mr. Wonka want a child rather than an adult to take over the factory?",
            "options": [
              "Adults were not allowed to eat candy",
              "A child would listen, learn with wonder, and care for the factory with kindness",
              "Adults were too busy playing video games",
              "A child was small enough to fit inside the pipes"
            ],
            "correctIndex": 1,
            "explanation": "Mr. Wonka explained that an adult would be rigid, while a child would learn with wonder and kindness.",
            "visualClueEmoji": "❤️",
            "points": 60
          },
          {
            "id": "q-charlie-9-4-vocab2",
            "question": "Find a word in the passage that means: \"Moving diagonally at an angle rather than straight.\".",
            "options": [
              "Elimination",
              "Four",
              "Slantways",
              "Children"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Slantways\" means moving diagonally at an angle rather than straight.",
            "visualClueEmoji": "↗️",
            "points": 60
          }
        ]
      },
      {
        "id": "charlie-9-5",
        "dayNumber": 5,
        "title": "Flying Home & The Great Family Feast",
        "subtitle": "Hovering over Charlie's cottage and bringing the grandparents to their sweet new home!",
        "estReadingMinutes": 15,
        "totalWordCount": 740,
        "summary": "Mr. Wonka flies the Great Glass Elevator directly to Charlie's cottage. They lift the four grandparents in their wooden bed into the elevator and fly everyone back to live in the chocolate factory!",
        "visualScenes": [
          {
            "id": "scene-c9-5",
            "title": "Hovering Above the Little Cottage",
            "backgroundGradient": "from-sky-700 via-indigo-500 to-amber-200",
            "illustrationType": "great_glass_elevator",
            "caption": "The glass elevator hovered right above Charlie's snowy roof, ready to lift the grandparents' bed into the warm cabin!",
            "characterAvatars": [
              {
                "name": "Mr. Wonka",
                "emoji": "🎩",
                "speech": "Pack your bags, Bucket family! You're moving in!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "🏠",
                "speech": "Grandma, Grandpa, we will never be hungry again!",
                "position": "center"
              },
              {
                "name": "Grandpa Joe",
                "emoji": "👴",
                "speech": "Look at the stars shining through our glass floor!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "h9-5",
                "x": 40,
                "y": 50,
                "label": "Bed Hoist",
                "icon": "🛏️",
                "soundEffect": "magic",
                "funFact": "Wonka lifted the entire bed gently through the roof!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Piloting the Elevator Through the Evening Sky",
            "paragraphs": [
              "High up in the winter clouds, Mr. Wonka placed Charlie's hands on the crystal steering dial. 'Take the helm, Captain Charlie! You're the new master of the factory!' The scene was filled with reunion, creating an unforgettable moment. The scene was filled with sanctuary, creating an unforgettable moment.",
              "Charlie carefully turned the smooth dial. The glass elevator tilted gracefully, swooping down through golden evening clouds. Down below, streetlights twinkled in the dusk, and Charlie spotted his family's little cottage with smoke curling from the chimney.",
              "'There it is!' Charlie cheered. 'That's my house! And Mother is waving from the kitchen window!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "Line her up right over your chimney, Captain Charlie!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "Mother! Father! Look up at the sky!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c9-5-1",
              "question": "How did Charlie feel when Mr. Wonka let him steer the elevator?",
              "options": [
                "Terrified and refused to touch the dial",
                "Angry that he had to steer",
                "Proud, excited, and happy to steer toward his home"
              ],
              "correctInsightIndex": 2,
              "insight": "Charlie felt proud and thrilled as Mr. Wonka guided him to pilot the elevator home.",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Hoisting the Bed Through the Cottage Roof",
            "paragraphs": [
              "The glass elevator settled gently onto the snowy rooftop. Mr. Wonka pushed the green button marked 'BED HOIST'.",
              "A warm golden light beamed down from the floor of the elevator. The roof of the cottage opened smoothly like a box lid. Down in the bedroom, Grandpa George, Grandma Georgina, and Grandma Josephine were resting under their patchwork quilt.",
              "Golden magnetic ropes attached to the wooden bedposts, and slowly, weightlessly, the entire bed floated right up through the roof into the warm elevator cabin! Grandma Josephine gasped in astonishment, clutching her nightcap: 'Mercy on us! Where in the world are we?' Charlie hugged her happily: 'We are in Mr. Wonka's flying elevator, Grandma! We are moving to the chocolate factory!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Grandma Josephine",
                "text": "Mercy me! We are floating in a glass carriage in the sky!",
                "avatarEmoji": "👵",
                "side": "left"
              },
              {
                "speaker": "Charlie's Mother",
                "text": "Oh Charlie, is this all real?",
                "avatarEmoji": "👩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-charlie-9-5-p2",
              "question": "Find a word on this page that means: \"A safe, peaceful, and warm place to live.\".",
              "options": [
                "Sanctuary",
                "High",
                "Winter"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Sanctuary\" (SANK-choo-air-ee) means a safe, peaceful, and warm place to live.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "A Feast and a Forever Home",
            "paragraphs": [
              "Charlie's mother and father stepped into the elevator cabin, and the doors clicked shut. Mr. Wonka pressed the button to head back to the factory.",
              "As they soared across the winter sky, Oompa Loompas in velvet aprons appeared with silver trays, serving steaming mugs of butterscotch cocoa and warm bowls of marshmallow stew to the whole family.",
              "Grandma Georgina took a warm sip and smiled through tears of joy: 'This is the most delicious thing I have ever tasted in all my ninety years!' The elevator touched down gently in the Great Chocolate Room. Charlie held Mr. Wonka's hand on one side and his mother's hand on the other. Mr. Wonka whispered with deep love: 'Welcome home, Bucket family. Our greatest adventure is just beginning!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "Welcome home, Bucket family! There is enough chocolate and love here for ten lifetimes!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "Thank you, Mr. Wonka! We will care for every sweet with all our hearts!",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-c9-5-3",
              "question": "What treats did the Oompa Loompas serve Charlie's family on the flight?",
              "options": [
                "Cold cabbage soup and dry bread",
                "Hot butterscotch cocoa and warm marshmallow stew",
                "Salty crackers and sour lemons"
              ],
              "correctInsightIndex": 1,
              "insight": "The Oompa Loompas served steaming hot butterscotch cocoa and marshmallow stew to celebrate!",
              "rewardKP": 20
            }
          }
        ],
        "paragraphs": [
          "Mr. Wonka placed Charlie's hands on the crystal steering dial, letting him pilot the Great Glass Elevator toward his family's cottage.",
          "The elevator hovered over the snowy roof, and Wonka pressed the \"BED HOIST\" button to lift the three grandparents in their cozy bed right into the cabin.",
          "Grandma Josephine and Grandma Georgina clutched their nightcaps in astonishment as Charlie explained that they were moving to the chocolate factory.",
          "Charlie's parents climbed aboard, and the elevator flew back toward the glowing factory chimneys.",
          "Friendly Oompa Loompas served steaming mugs of butterscotch cocoa and bowls of marshmallow stew to the celebrating family.",
          "Mr. Wonka welcomed the Bucket family to their new home in the Great Chocolate Room, marking the joyful beginning of their new lives."
        ],
        "vocabList": [
          {
            "word": "Hoist",
            "phonics": "HOYST",
            "definition": "To lift or raise something heavy up into the air.",
            "funExample": "The bed hoist gently lifted the grandparents' bed into the elevator.",
            "emoji": "🏗️"
          },
          {
            "word": "Reunion",
            "phonics": "ree-YOON-yun",
            "definition": "Coming together again with loved ones after being apart.",
            "funExample": "The family enjoyed a joyful reunion in the glass cabin.",
            "emoji": "👨‍👩‍👦"
          },
          {
            "word": "Sanctuary",
            "phonics": "SANK-choo-air-ee",
            "definition": "A safe, peaceful, and warm place to live.",
            "funExample": "The chocolate factory became a warm sanctuary for Charlie's family.",
            "emoji": "🏰"
          }
        ],
        "microChallenge": {
          "id": "mc-c9-5",
          "title": "Steer the Elevator Home",
          "type": "candy_sort",
          "prompt": "Tap the flight steps in order: 1. Steer Home, 2. Lift Grandparents, 3. Enter Factory Gates",
          "options": [
            "Lift Grandparents",
            "Steer Home",
            "Enter Factory Gates"
          ],
          "rewardGems": 50
        },
        "quizQuestions": [
          {
            "id": "qc9-5-1",
            "question": "Where did Charlie and Mr. Wonka fly the Great Glass Elevator first?",
            "options": [
              "To a busy shopping mall in another country",
              "To an empty desert island in the sea",
              "Straight to Charlie's little cottage to pick up his parents and grandparents",
              "To the top of a snowy mountain"
            ],
            "correctIndex": 2,
            "explanation": "Charlie and Mr. Wonka flew straight to Charlie's little cottage to fetch his beloved family!",
            "visualClueEmoji": "🏠",
            "points": 60
          },
          {
            "id": "q-charlie-9-5-vocab1",
            "question": "Find a word in the passage that means: \"To lift or raise something heavy up into the air.\".",
            "options": [
              "High",
              "Winter",
              "Clouds",
              "Hoist"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Hoist\" means to lift or raise something heavy up into the air.",
            "visualClueEmoji": "🏗️",
            "points": 60
          },
          {
            "id": "qc9-5-3",
            "question": "What delicious treats did the Oompa Loompas serve to Charlie's family?",
            "options": [
              "Steaming mugs of hot butterscotch cocoa and warm marshmallow stew",
              "Cold cabbage soup and dry bread crusts",
              "Bitter coffee and salty crackers",
              "Frozen peas and boiled carrots"
            ],
            "correctIndex": 0,
            "explanation": "Friendly Oompa Loompas served steaming mugs of hot butterscotch cocoa and warm marshmallow stew!",
            "visualClueEmoji": "☕",
            "points": 60
          },
          {
            "id": "q-charlie-9-5-vocab2",
            "question": "Find a word in the passage that means: \"Coming together again with loved ones after being apart.\".",
            "options": [
              "High",
              "Reunion",
              "Winter",
              "Clouds"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Reunion\" means coming together again with loved ones after being apart.",
            "visualClueEmoji": "👨‍👩‍👦",
            "points": 60
          }
        ]
      }
    ]
  }
};
