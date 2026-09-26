import { Book } from "../types";

export const ELEVATOR_BOOK: Book = {
  "id": "elevator",
  "title": "Charlie & the Great Glass Elevator",
  "author": "Roald Dahl",
  "badgeTitle": "Orbit Voyager & Knid Conqueror",
  "coverColor": "from-indigo-600 via-purple-800 to-slate-950",
  "accentColor": "#8b5cf6",
  "borderColor": "border-purple-400",
  "themeIcon": "🚀",
  "descriptionByAge": {
    "5-6": "Zoom up into the starry sky with Mr. Wonka and Charlie! 5 exciting daily 15-minute adventures: blast into space orbit, visit the floating Space Hotel, meet silly shape-shifting Knids, travel to mysterious Minusland, and receive a shiny invitation from the White House!",
    "7-8": "Follow Charlie, Grandpa Joe, and Willy Wonka in the sequel to Charlie and the Chocolate Factory! Soar into outer orbit, battle terrifying Vermicious Knids, test the rejuvenating Wonka-Vite formula, and save the planet across 5 daily chapters.",
    "9+": "Experience Roald Dahl's hilarious sci-fi adventure across 5 full-length daily chapters! Rocket into orbit in the Great Glass Elevator, dock at Space Hotel USA, outwit the Vermicious Knids, rescue Grandma from Minusland, and celebrate at the White House!"
  },
  "chaptersByAge": {
    "5-6": [
      {
        "id": "elevator-56-1",
        "dayNumber": 1,
        "title": "Blast Off into the Starry Sky!",
        "subtitle": "The Great Glass Elevator shoots up past the clouds!",
        "estReadingMinutes": 15,
        "totalWordCount": 540,
        "summary": "Mr. Wonka pushes the secret Green Button on the ceiling. Whoosh! The glass elevator zooms right through the factory roof and up into the sparkling starry sky!",
        "visualScenes": [
          {
            "id": "scene-e56-1",
            "title": "Shooting Past the Stars",
            "backgroundGradient": "from-slate-900 via-indigo-950 to-purple-900",
            "illustrationType": "great_glass_elevator",
            "caption": "The giant glass box rocketed above the fluffy clouds. The four grandparents floated above their cozy wooden bed in zero gravity!",
            "characterAvatars": [
              {
                "name": "Willy Wonka",
                "emoji": "🎩",
                "speech": "Up, up, and away into orbit!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "👦",
                "speech": "Look Grandpa, we're floating!",
                "position": "center"
              },
              {
                "name": "Grandpa Joe",
                "emoji": "👴",
                "speech": "Yippee! Hold on to your nightcaps!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "he1",
                "x": 30,
                "y": 60,
                "label": "Floating Bed",
                "icon": "🛏️",
                "soundEffect": "magic",
                "funFact": "All four grandparents stayed together in one big bed for over twenty years!",
                "action": "bounce"
              },
              {
                "id": "he2",
                "x": 75,
                "y": 35,
                "label": "Green Button",
                "icon": "🟢",
                "soundEffect": "click",
                "funFact": "The green button fired candy-powered rocket thrusters!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Pushed to the Sky",
            "paragraphs": [
              "The great glass elevator was cruising high above the town. Inside, Charlie Bucket, his parents, and all four elderly grandparents were riding together in their pajamas.",
              "Mr. Willy Wonka skipped across the glass floor in his plum-colored velvet coat. 'We must go higher!' he shouted with a sparkle in his eyes. 'We need enough speed to loop all the way back down to the chocolate factory!'",
              "He reached up his walking cane and pressed a tiny round green button on the glass ceiling. Instantly, giant sweet-smelling rocket boosters ignited with a cheerful whoosh!"
            ],
            "dialogueBites": [
              {
                "speaker": "Willy Wonka",
                "text": "Hold onto your slippers, everyone! We are heading for outer orbit!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Grandma Josephine",
                "text": "Mercy me! My nightcap is lifting right off my head!",
                "avatarEmoji": "👵",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e56-1-1",
              "question": "Why did Mr. Wonka push the green button on the ceiling?",
              "options": [
                "To turn the elevator into an ice cream maker",
                "To gain enough rocket speed to zoom up into the sky",
                "To turn off the lights for a nap"
              ],
              "correctInsightIndex": 1,
              "insight": "Mr. Wonka needed high altitude and speed to steer the elevator back home!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Floating in Zero Gravity",
            "paragraphs": [
              "Suddenly, the rumbling rocket noise stopped. Everything became as silent and still as a snowflake.",
              "Charlie let go of the glass railing, and to his utter astonishment, his feet lifted gently off the floor! He was floating weightlessly like a happy helium balloon.",
              "The four grandparents in their big wooden bed began to rise into the air too. Grandma Georgina, Grandma Josephine, Grandpa George, and Grandpa Joe were giggling as their pillows drifted like soft white clouds around the elevator!"
            ],
            "dialogueBites": [
              {
                "speaker": "Charlie",
                "text": "Grandpa Joe, look! I'm swimming through the air like a little fish!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Grandpa Joe",
                "text": "Look at me, Charlie! I haven't danced like this in sixty years!",
                "avatarEmoji": "👴",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-elevator-56-1-p2",
              "question": "Find a word on this page that means: \"Floating freely because there is no gravity pulling you down.\".",
              "options": [
                "Great",
                "Glass",
                "Weightless"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Weightless\" (WEIGHT-LESS) means floating freely because there is no gravity pulling you down.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Beautiful Blue Planet",
            "paragraphs": [
              "Charlie pressed his nose against the cool toughened glass. Down below, he saw the giant round Earth glowing with sapphire blue oceans, green continents, and swirly white storm clouds.",
              "'Look at our home!' Charlie whispered in awe. 'It looks like a giant sparkling marble in a sea of velvet night.'",
              "Mr. Wonka beamed with pride. 'That, my dear boy, is the wonder of exploration. When you open your eyes and dare to dream, the whole universe becomes your playground!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Charlie",
                "text": "It is the most beautiful sight in the whole wide world!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Willy Wonka",
                "text": "And our adventure is only just beginning, Charlie!",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e56-1-3",
              "question": "What did Earth look like to Charlie from space?",
              "options": [
                "A glowing sapphire marble with blue oceans and white clouds",
                "A giant flat square made of cardboard",
                "A dark bowl full of soup"
              ],
              "correctInsightIndex": 0,
              "insight": "From orbit, our Earth is a gorgeous blue and green sphere glowing in the sun!",
              "rewardKP": 15
            }
          }
        ],
        "vocabList": [
          {
            "word": "Weightless",
            "phonics": "WEIGHT-LESS",
            "definition": "Floating freely because there is no gravity pulling you down.",
            "funExample": "Charlie felt weightless and floated above the floor!",
            "emoji": "🎈"
          },
          {
            "word": "Toughened",
            "phonics": "TOUGH-ENED",
            "definition": "Made extra strong and unbreakable.",
            "funExample": "The glass elevator was made of super toughened crystal!",
            "emoji": "🛡️"
          }
        ],
        "microChallenge": {
          "id": "mc-e56-1",
          "title": "Space Word Scramble",
          "type": "word_scramble",
          "prompt": "Unscramble the letters to name Charlie's giant flying vehicle!",
          "targetWord": "ELEVATOR",
          "scrambleLetters": [
            "V",
            "A",
            "T",
            "O",
            "R",
            "E",
            "L",
            "E"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-e56-1-1",
            "question": "What color was the button Mr. Wonka pushed on the ceiling?",
            "options": [
              "Purple",
              "Green",
              "Polka-dot",
              "Silver"
            ],
            "correctIndex": 1,
            "explanation": "Mr. Wonka pushed the secret green button to ignite the sweet-smelling rocket boosters!",
            "visualClueEmoji": "📖",
            "points": 50
          },
          {
            "id": "q-elevator-56-1-vocab1",
            "question": "Find a word in the passage that means: \"Floating freely because there is no gravity pulling you down.\".",
            "options": [
              "Great",
              "Glass",
              "Weightless",
              "Elevator"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Weightless\" means floating freely because there is no gravity pulling you down.",
            "visualClueEmoji": "🎈",
            "points": 60
          },
          {
            "id": "q-e56-1-2",
            "question": "How did Charlie move around once they reached outer space?",
            "options": [
              "He floated weightlessly in the air",
              "He crawled under the bed",
              "He put on roller skates",
              "He swam in chocolate"
            ],
            "correctIndex": 0,
            "explanation": "In zero gravity, everyone floated weightlessly like balloons!",
            "visualClueEmoji": "🔍",
            "points": 50
          },
          {
            "id": "q-elevator-56-1-vocab2",
            "question": "Find a word in the passage that means: \"Made extra strong and unbreakable.\".",
            "options": [
              "Great",
              "Glass",
              "Elevator",
              "Toughened"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Toughened\" means made extra strong and unbreakable.",
            "visualClueEmoji": "🛡️",
            "points": 60
          }
        ],
        "dahlGobblefunk": [
          {
            "word": "Whooshtastic",
            "meaning": "Moving with incredible rocket-powered speed.",
            "roaldDahlQuote": "Up they whooshed into the velvety ink of the cosmos!"
          }
        ]
      },
      {
        "id": "elevator-56-2",
        "dayNumber": 2,
        "title": "The Floating Space Hotel",
        "subtitle": "Docking with the giant silver hotel in space!",
        "estReadingMinutes": 15,
        "totalWordCount": 560,
        "summary": "Mr. Wonka spots Space Hotel 'U.S.A.' floating ahead like a giant silver sausage. They glide through the airlock doors into a magical floating resort!",
        "visualScenes": [
          {
            "id": "scene-e56-2",
            "title": "Space Hotel 'U.S.A.'",
            "backgroundGradient": "from-blue-900 via-indigo-950 to-slate-900",
            "illustrationType": "space_hotel",
            "caption": "The giant Space Hotel gleamed with gold antennas and silver docking bays high above the planet!",
            "characterAvatars": [
              {
                "name": "Willy Wonka",
                "emoji": "🎩",
                "speech": "Look at that colossal floating palace!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "👦",
                "speech": "It has hundreds of sparkling windows!",
                "position": "center"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hsh1",
                "x": 45,
                "y": 50,
                "label": "Airlock Bay",
                "icon": "🚪",
                "soundEffect": "magic",
                "funFact": "The Space Hotel was built with five hundred luxury carpeted bedrooms!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "A Giant Silver Castle in Orbit",
            "paragraphs": [
              "As the elevator drifted higher, a magnificent sight appeared ahead. It looked like a colossal silver palace floating peacefully above the clouds.",
              "'Look over there!' cried Mr. Wonka, dancing a little jig on the ceiling. 'It's Space Hotel 'U.S.A.'! It was just launched into orbit last week!'",
              "The Space Hotel had shining golden solar panels, sparkling glass observation domes, and giant letters across the side that said: WELCOME TO SPACE HOTEL 'U.S.A.'!"
            ],
            "dialogueBites": [
              {
                "speaker": "Willy Wonka",
                "text": "Shall we pop inside for a little visit? It would be rude to pass by without saying hello!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "Can we really go inside a real space hotel, Mr. Wonka?",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e56-2-1",
              "question": "What did Mr. Wonka discover floating in space?",
              "options": [
                "A giant floating pirate ship",
                "A floating mountain of strawberry ice cream",
                "Space Hotel 'U.S.A.', a giant luxury hotel in orbit"
              ],
              "correctInsightIndex": 2,
              "insight": "Space Hotel 'U.S.A.' was a marvelous floating hotel orbiting above Earth!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Steering Through the Airlock",
            "paragraphs": [
              "Mr. Wonka grabbed a golden steering wheel and guided the glass elevator toward the hotel's giant automatic airlock doors.",
              "With a gentle hiss of compressed air, the giant silver doors slid open. The elevator drifted smoothly inside the warm, carpeted lobby.",
              "Inside, crystal chandeliers floated from the ceiling, soft velvet armchairs rested along the walls, and colorful paintings lined the grand hallways."
            ],
            "dialogueBites": [
              {
                "speaker": "Grandma Josephine",
                "text": "Look at those fluffy carpets! Even in space, it's remarkably cozy!",
                "avatarEmoji": "👵",
                "side": "left"
              },
              {
                "speaker": "Grandpa Joe",
                "text": "Mr. Wonka, you are truly a master pilot!",
                "avatarEmoji": "👴",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-elevator-56-2-p2",
              "question": "Find a word on this page that means: \"Extremely large, huge, and magnificent.\".",
              "options": [
                "Colossal",
                "Elevator",
                "Drifted"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Colossal\" (CO-LOS-SAL) means extremely large, huge, and magnificent.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "A Strange Message on the Screen",
            "paragraphs": [
              "Suddenly, the giant hotel television screen flickered to life. A man with gray hair and a serious suit appeared on the broadcast.",
              "'This is the President of the United States!' boomed the voice from the White House in Washington. 'Who are you mysterious floating visitors in our Space Hotel?'",
              "Mr. Wonka tipped his top hat to the camera and bowed. 'We are humble tourists from a candy factory, Mr. President, and we come in peace and chocolate!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Willy Wonka",
                "text": "Greetings, Mr. President! We are simply admiring the view!",
                "avatarEmoji": "🎩",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e56-2-3",
              "question": "Who contacted the elevator visitors on the television screen?",
              "options": [
                "A singing penguin",
                "The President of the United States",
                "A local baker"
              ],
              "correctInsightIndex": 1,
              "insight": "The President was watching the space hotel live from the White House!",
              "rewardKP": 15
            }
          }
        ],
        "vocabList": [
          {
            "word": "Colossal",
            "phonics": "CO-LOS-SAL",
            "definition": "Extremely large, huge, and magnificent.",
            "funExample": "The Space Hotel was a colossal silver palace in space!",
            "emoji": "🏰"
          },
          {
            "word": "Airlock",
            "phonics": "AIR-LOCK",
            "definition": "A special airtight chamber that allows entry into a spacecraft.",
            "funExample": "The airlock doors opened with a gentle hiss of air.",
            "emoji": "🚪"
          }
        ],
        "microChallenge": {
          "id": "mc-e56-2",
          "title": "Airlock Docking Puzzle",
          "type": "space_docking",
          "prompt": "Align the elevator thrusters with the space hotel docking bay!",
          "options": [
            "Align Left Booster",
            "Center Target",
            "Engage Soft Docking"
          ],
          "correctOrder": [
            "Center Target",
            "Align Left Booster",
            "Engage Soft Docking"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-e56-2-1",
            "question": "What was written on the side of the giant floating hotel?",
            "options": [
              "WONKA CHOCOLATE SHOP",
              "LUNAR CANDY CAFE",
              "SPACE HOTEL 'U.S.A.'",
              "GRANDPA JOE'S CABIN"
            ],
            "correctIndex": 2,
            "explanation": "The giant floating palace was called Space Hotel 'U.S.A.'!",
            "visualClueEmoji": "📖",
            "points": 50
          },
          {
            "id": "q-elevator-56-2-vocab1",
            "question": "Find a word in the passage that means: \"Extremely large, huge, and magnificent.\".",
            "options": [
              "Colossal",
              "Elevator",
              "Drifted",
              "Higher"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Colossal\" means extremely large, huge, and magnificent.",
            "visualClueEmoji": "🏰",
            "points": 60
          },
          {
            "id": "q-elevator-56-2-3",
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
            "id": "q-elevator-56-2-vocab2",
            "question": "Find a word in the passage that means: \"A special airtight chamber that allows entry into a spacecraft.\".",
            "options": [
              "Elevator",
              "Airlock",
              "Drifted",
              "Higher"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Airlock\" means a special airtight chamber that allows entry into a spacecraft.",
            "visualClueEmoji": "🚪",
            "points": 60
          }
        ]
      },
      {
        "id": "elevator-56-3",
        "dayNumber": 3,
        "title": "The Squishy Vermicious Knids!",
        "subtitle": "Brave Charlie and Mr. Wonka outsmart silly space monsters!",
        "estReadingMinutes": 15,
        "totalWordCount": 550,
        "summary": "Mysterious dark egg-shaped creatures with glowing red eyes appear in the hotel. They are Vermicious Knids! Mr. Wonka races to protect everyone in the glass elevator.",
        "visualScenes": [
          {
            "id": "scene-e56-3",
            "title": "The Menace of the Knids",
            "backgroundGradient": "from-purple-950 via-rose-950 to-slate-950",
            "illustrationType": "vermicious_knid",
            "caption": "The shape-shifting Knids curled into letters and bumped against the toughened glass, but Wonka's elevator was completely invincible!",
            "characterAvatars": [
              {
                "name": "Vermicious Knid",
                "emoji": "👾",
                "speech": "SCRAM!",
                "position": "left"
              },
              {
                "name": "Willy Wonka",
                "emoji": "🎩",
                "speech": "Ha! You can't break my candy-tempered glass!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hvk1",
                "x": 50,
                "y": 50,
                "label": "Toughened Glass",
                "icon": "🛡️",
                "soundEffect": "success",
                "funFact": "Wonka glass was tempered with melted jawbreakers so nothing in the galaxy could smash it!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Strange Shadows in the Elevator Room",
            "paragraphs": [
              "As they wandered through the luxury suites of the Space Hotel, Charlie noticed strange dark shadows moving behind the glass pillars. The scene was filled with invincible, creating an unforgettable moment.",
              "They were shaped like giant dark green eggs, with shiny skin and glowing ruby-red eyes that blinked without stopping.",
              "'Look out!' whispered Mr. Wonka, rushing everyone back into the elevator. 'Those are Vermicious Knids, the most mischievous, shape-shifting beasts in the galaxy!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Willy Wonka",
                "text": "Quick! Back into the elevator, everyone! Lock the doors!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "They're twisting their bodies into giant shapes!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e56-3-1",
              "question": "What creature did Mr. Wonka spot in the space hotel?",
              "options": [
                "Vermicious Knids, shape-shifting space beasts",
                "Fluffy space bunnies",
                "Friendly robotic waiters"
              ],
              "correctInsightIndex": 0,
              "insight": "Vermicious Knids are alien creatures from deep outer space!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Spelling Out Words",
            "paragraphs": [
              "Outside the elevator, the Knids curled and bent their squishy bodies. Five of them lined up together and formed giant squiggly letters.",
              "Charlie read the letters aloud: 'S... C... R... A... M! They are spelling SCRAM!'",
              "Grandma Georgina covered her eyes with her blanket. 'They want us to leave right now!' she squeaked."
            ],
            "dialogueBites": [
              {
                "speaker": "Grandma Georgina",
                "text": "They're spelling rude words at us from outside the window!",
                "avatarEmoji": "👵",
                "side": "left"
              },
              {
                "speaker": "Grandpa Joe",
                "text": "Don't worry, Georgina! Mr. Wonka's glass is stronger than iron!",
                "avatarEmoji": "👴",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-elevator-56-3-p2",
              "question": "Find a word on this page that means: \"Playfully causing trouble or tricks.\".",
              "options": [
                "Wandered",
                "Mischievous",
                "Through"
              ],
              "correctInsightIndex": 1,
              "insight": "\"Mischievous\" (MIS-CHIE-VOUS) means playfully causing trouble or tricks.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Great Tow-Line Rescue",
            "paragraphs": [
              "Outside in orbit, a small Commuter Capsule filled with astronauts was being surrounded by the Knids.",
              "'We must rescue them!' declared Charlie bravely. 'We can't leave them out there!'",
              "Mr. Wonka cheered. 'Splendid courage, Charlie! We'll hook a steel tow-cable to their ship and tow them safely through the Earth's atmosphere!'",
              "With a roar of rocket boosters, the elevator swooped down, hooked the tow-rope, and pulled the capsule away to safety. As they entered the warm atmosphere, the Knids were left far behind in cold space!"
            ],
            "dialogueBites": [
              {
                "speaker": "Charlie",
                "text": "Hold tight, astronauts! We're bringing you home safely!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Willy Wonka",
                "text": "Full throttle toward Earth! We did it, Charlie!",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e56-3-3",
              "question": "How did Charlie and Mr. Wonka save the astronauts?",
              "options": [
                "They fed the Knids chocolate until they fell asleep",
                "They played loud rock music",
                "They hooked a tow-cable to their capsule and pulled them safely to Earth"
              ],
              "correctInsightIndex": 2,
              "insight": "Charlie showed bravery and kindness by saving the astronauts in distress!",
              "rewardKP": 15
            }
          }
        ],
        "vocabList": [
          {
            "word": "Mischievous",
            "phonics": "MIS-CHIE-VOUS",
            "definition": "Playfully causing trouble or tricks.",
            "funExample": "The mischievous Knids spelled funny words in space!",
            "emoji": "😈"
          },
          {
            "word": "Invincible",
            "phonics": "IN-VIN-CI-BLE",
            "definition": "Too strong or sturdy to be defeated or broken.",
            "funExample": "The glass elevator was completely invincible!",
            "emoji": "💎"
          }
        ],
        "microChallenge": {
          "id": "mc-e56-3",
          "title": "Knid Rescue Dash",
          "type": "word_scramble",
          "prompt": "Unscramble the word to power the rescue cable!",
          "targetWord": "RESCUE",
          "scrambleLetters": [
            "S",
            "C",
            "U",
            "E",
            "R",
            "E"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-e56-3-1",
            "question": "Why couldn't the Knids break through the glass elevator?",
            "options": [
              "The elevator was covered in sticky butterscotch",
              "The Knids had no teeth",
              "The elevator was invisible",
              "The glass was specially tempered and unbreakable"
            ],
            "correctIndex": 3,
            "explanation": "Mr. Wonka's glass elevator was made of super-strong candy-tempered glass!",
            "visualClueEmoji": "📖",
            "points": 50
          },
          {
            "id": "q-elevator-56-3-vocab1",
            "question": "Find a word in the passage that means: \"Playfully causing trouble or tricks.\".",
            "options": [
              "Wandered",
              "Mischievous",
              "Through",
              "Luxury"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Mischievous\" means playfully causing trouble or tricks.",
            "visualClueEmoji": "😈",
            "points": 60
          },
          {
            "id": "q-elevator-56-3-3",
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
            "id": "q-elevator-56-3-vocab2",
            "question": "Find a word in the passage that means: \"Too strong or sturdy to be defeated or broken.\".",
            "options": [
              "Invincible",
              "Wandered",
              "Through",
              "Luxury"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Invincible\" means too strong or sturdy to be defeated or broken.",
            "visualClueEmoji": "💎",
            "points": 60
          }
        ]
      },
      {
        "id": "elevator-56-4",
        "dayNumber": 4,
        "title": "Wonka-Vite & Minusland",
        "subtitle": "The magical drops that make people younger!",
        "estReadingMinutes": 15,
        "totalWordCount": 560,
        "summary": "Back at the chocolate factory, Mr. Wonka introduces Wonka-Vite drops that make people 20 years younger per pill. When Grandma Georgina takes too many, they have to journey to Minusland to bring her back!",
        "visualScenes": [
          {
            "id": "scene-e56-4",
            "title": "The Mysterious Minusland",
            "backgroundGradient": "from-emerald-950 via-slate-900 to-teal-950",
            "illustrationType": "wonka_vites",
            "caption": "In the misty glow of Minusland, gentle whispers floated among the trees until Mr. Wonka sprayed Vita-Wonk!",
            "characterAvatars": [
              {
                "name": "Willy Wonka",
                "emoji": "🎩",
                "speech": "Spray Vita-Wonk into the mist!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "👦",
                "speech": "Grandma Georgina, we found you!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hwv1",
                "x": 40,
                "y": 55,
                "label": "Wonka-Vite Bottle",
                "icon": "🧪",
                "soundEffect": "magic",
                "funFact": "Each yellow drop of Wonka-Vite subtracts exactly 20 years of age!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Magical Yellow Drops",
            "paragraphs": [
              "After splashing safely back down into the factory courtyard, the grandparents still refused to leave their bed.",
              "'I have just the cure for tired bones!' announced Mr. Wonka, pulling out a tiny golden bottle labeled WONKA-VITE.",
              "'Each tiny drop makes you twenty years younger and full of bouncing energy!' But Grandma Georgina was so impatient she swallowed four whole drops at once!"
            ],
            "dialogueBites": [
              {
                "speaker": "Grandma Georgina",
                "text": "Give me four drops! I want to be young and sprightly again!",
                "avatarEmoji": "👵",
                "side": "left"
              },
              {
                "speaker": "Willy Wonka",
                "text": "Wait! Four drops is eighty years! That's too much!",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e56-4-1",
              "question": "What did each drop of Wonka-Vite do?",
              "options": [
                "Turned a person into a chocolate frog",
                "Made a person 20 years younger",
                "Made someone grow ten feet tall"
              ],
              "correctInsightIndex": 1,
              "insight": "Wonka-Vite was an age-reversing formula that subtracted 20 years per drop!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Grandma Georgina Disappears into Minusland!",
            "paragraphs": [
              "Since Grandma Georgina was only seventy-eight years old, swallowing four drops subtracted eighty years—leaving her at minus two!",
              "With a gentle puff of violet smoke, she vanished right out of the bed! 'Where has she gone?' cried Charlie in alarm.",
              "'She is in Minusland,' explained Mr. Wonka calmly. 'The place where people wait before they are born. We must take the elevator down deep into the earth to find her and spray Vita-Wonk!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Charlie",
                "text": "We have to rescue Grandma Georgina from Minusland!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Willy Wonka",
                "text": "Down, down, deep under the roots of the earth we go!",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-elevator-56-4-p2",
              "question": "Find a word on this page that means: \"A special recipe of ingredients that creates magic or science.\".",
              "options": [
                "Splashing",
                "Safely",
                "Formula"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Formula\" (FOR-MU-LA) means a special recipe of ingredients that creates magic or science.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Gentle Spray of Vita-Wonk",
            "paragraphs": [
              "The glass elevator sank deep underground into a magical misty realm full of soft whispers and glowing roots.",
              "Mr. Wonka loaded an atomizer with Vita-Wonk—the opposite formula that adds years back. He sprayed a fine scented mist into the air.",
              "Pop! A tiny baby appeared, then a happy toddler, then a sprightly lady! Grandma Georgina was back, smiling, healthy, and walking on her own two feet!"
            ],
            "dialogueBites": [
              {
                "speaker": "Grandma Georgina",
                "text": "Goodness me! My knees feel like springy rubber bands!",
                "avatarEmoji": "👵",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "Grandma! You're walking out of bed!",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e56-4-3",
              "question": "What happened when Mr. Wonka sprayed Vita-Wonk in Minusland?",
              "options": [
                "Grandma Georgina came back and was able to walk happily on her own",
                "All the trees turned into lollipops",
                "The elevator ran out of fuel"
              ],
              "correctInsightIndex": 0,
              "insight": "Vita-Wonk successfully restored Grandma Georgina to a healthy, walking age!",
              "rewardKP": 15
            }
          }
        ],
        "vocabList": [
          {
            "word": "Formula",
            "phonics": "FOR-MU-LA",
            "definition": "A special recipe of ingredients that creates magic or science.",
            "funExample": "Wonka-Vite was a miraculous age formula!",
            "emoji": "🧪"
          },
          {
            "word": "Sprightly",
            "phonics": "SPRIGHT-LY",
            "definition": "Full of energy, joy, and quick bouncy movement.",
            "funExample": "Grandma Georgina felt sprightly and danced across the room!",
            "emoji": "💃"
          }
        ],
        "microChallenge": {
          "id": "mc-e56-4",
          "title": "Potion Balance Mixer",
          "type": "potion_mix",
          "prompt": "Select the exact drops to balance age to a healthy 75 years!",
          "options": [
            "Add 1 Drop Vita-Wonk (+20)",
            "Add 2 Drops Vita-Wonk (+40)",
            "Spray Balancing Mist"
          ],
          "correctOrder": [
            "Add 2 Drops Vita-Wonk (+40)",
            "Add 1 Drop Vita-Wonk (+20)",
            "Spray Balancing Mist"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-e56-4-1",
            "question": "What was the name of the formula used to bring people back from Minusland?",
            "options": [
              "Vita-Wonk",
              "Fizzy Lifting Drink",
              "Everlasting Gobstopper",
              "Snozzberry Juice"
            ],
            "correctIndex": 0,
            "explanation": "Vita-Wonk was the special formula that added years back to make people older!",
            "visualClueEmoji": "📖",
            "points": 50
          },
          {
            "id": "q-elevator-56-4-vocab1",
            "question": "Find a word in the passage that means: \"A special recipe of ingredients that creates magic or science.\".",
            "options": [
              "Splashing",
              "Safely",
              "Factory",
              "Formula"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Formula\" means a special recipe of ingredients that creates magic or science.",
            "visualClueEmoji": "🧪",
            "points": 60
          },
          {
            "id": "q-elevator-56-4-3",
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
            "id": "q-elevator-56-4-vocab2",
            "question": "Find a word in the passage that means: \"Full of energy, joy, and quick bouncy movement.\".",
            "options": [
              "Splashing",
              "Safely",
              "Sprightly",
              "Factory"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Sprightly\" means full of energy, joy, and quick bouncy movement.",
            "visualClueEmoji": "💃",
            "points": 60
          }
        ]
      },
      {
        "id": "elevator-56-5",
        "dayNumber": 5,
        "title": "The White House Invitation!",
        "subtitle": "A royal helicopter arrives to celebrate the heroes of Earth!",
        "estReadingMinutes": 15,
        "totalWordCount": 570,
        "summary": "A golden telegram arrives from President Gilligrass inviting Charlie, Mr. Wonka, and the whole family to the White House for a grand banquet of honor. All the grandparents leap out of bed in joy!",
        "visualScenes": [
          {
            "id": "scene-e56-5",
            "title": "Royal Helicopter at the Factory",
            "backgroundGradient": "from-amber-200 via-yellow-100 to-rose-200",
            "illustrationType": "champions_flight",
            "caption": "Giant green helicopters with presidential flags touched down in the chocolate factory courtyard to escort the heroes!",
            "characterAvatars": [
              {
                "name": "Willy Wonka",
                "emoji": "🎩",
                "speech": "Pack your finest hats, we are heading to Washington!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "👦",
                "speech": "The whole family is going together!",
                "position": "center"
              },
              {
                "name": "Grandpa Joe",
                "emoji": "👴",
                "speech": "Look at all four grandparents walking!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hwh1",
                "x": 50,
                "y": 40,
                "label": "Gold Telegram",
                "icon": "✉️",
                "soundEffect": "success",
                "funFact": "President Gilligrass sent a personal telegram carried by presidential courier!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "A Knock at the Factory Gates",
            "paragraphs": [
              "Just as everyone was enjoying cups of hot butterscotch chocolate in the Inventing Room, a loud tapping echoed at the factory doors.",
              "An officer in a crisp uniform marched in carrying a sealed golden envelope with the official Presidential Seal of the United States.",
              "'A telegram for Mr. Willy Wonka and Young Charlie Bucket from the White House!' announced the messenger with a salute."
            ],
            "dialogueBites": [
              {
                "speaker": "Willy Wonka",
                "text": "Open it up, Charlie! Read it aloud to the whole room!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "It's addressed to all of us!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e56-5-1",
              "question": "Who delivered the special message to the factory?",
              "options": [
                "A pizza delivery driver",
                "A carrier pigeon",
                "An official presidential courier from the White House"
              ],
              "correctInsightIndex": 2,
              "insight": "The White House sent an official courier with an invitation from the President!",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Heroes of the Galaxy",
            "paragraphs": [
              "Charlie unfolded the crisp golden paper. In elegant script, the telegram read:",
              "'Dear Mr. Wonka and Charlie Bucket: For your heroic rescue of our astronauts from the Vermicious Knids, you and your entire family are invited to a Grand Presidential Feast at the White House!'",
              "'Helicopters are already on their way to escort you across the ocean in grand royal style!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Charlie",
                "text": "They called us Heroes of the Galaxy, Grandpa!",
                "avatarEmoji": "✨",
                "side": "left"
              },
              {
                "speaker": "Grandpa Joe",
                "text": "Three cheers for Charlie and Mr. Wonka! Hooray!",
                "avatarEmoji": "👴",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-elevator-56-5-p2",
              "question": "Find a word on this page that means: \"To accompany and guide someone safely and honorably.\".",
              "options": [
                "Escort",
                "Everyone",
                "Enjoying"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Escort\" (ES-CORT) means to accompany and guide someone safely and honorably.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "Out of Bed Forever!",
            "paragraphs": [
              "Upon hearing that they were going to the White House to meet the President, Grandma Josephine, Grandma Georgina, and Grandpa George threw off their blankets.",
              "They jumped straight out of the wooden bed and began doing joyful pirouettes across the factory floor. They were out of bed forever!",
              "Outside, shiny green helicopters landed in the courtyard. Hand in hand, Charlie and his family climbed aboard, soaring toward a bright and happy future full of wonder and love."
            ],
            "dialogueBites": [
              {
                "speaker": "Grandma Josephine",
                "text": "I'm never staying in bed all day again! The world is too wonderful!",
                "avatarEmoji": "👵",
                "side": "left"
              },
              {
                "speaker": "Willy Wonka",
                "text": "Off to the White House! The sky is never the limit when you have an open heart!",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e56-5-3",
              "question": "What did the grandparents do when they heard about the White House invitation?",
              "options": [
                "They went straight to sleep",
                "They leaped out of bed and danced across the floor",
                "They hid under the mattress"
              ],
              "correctInsightIndex": 1,
              "insight": "Joy, excitement, and health gave the grandparents energy to get out of bed for good!",
              "rewardKP": 15
            }
          }
        ],
        "vocabList": [
          {
            "word": "Escort",
            "phonics": "ES-CORT",
            "definition": "To accompany and guide someone safely and honorably.",
            "funExample": "Presidential helicopters arrived to escort the family!",
            "emoji": "🚁"
          },
          {
            "word": "Banquet",
            "phonics": "BAN-QUET",
            "definition": "A grand, celebratory feast with delicious food and honored guests.",
            "funExample": "The President prepared a joyful banquet of honor!",
            "emoji": "🍲"
          }
        ],
        "microChallenge": {
          "id": "mc-e56-5",
          "title": "Golden Telegram Stamp",
          "type": "golden_ticket_scratch",
          "prompt": "Scratch the presidential wax seal to reveal your White House Pass!",
          "rewardGems": 2
        },
        "quizQuestions": [
          {
            "id": "q-e56-5-1",
            "question": "How did the family travel to the White House feast?",
            "options": [
              "On a wooden bicycle",
              "By swimming across the ocean",
              "In royal presidential helicopters",
              "On the back of an elephant"
            ],
            "correctIndex": 2,
            "explanation": "Helicopters arrived at the chocolate factory to escort the family in grand style!",
            "visualClueEmoji": "📖",
            "points": 50
          },
          {
            "id": "q-elevator-56-5-vocab1",
            "question": "Find a word in the passage that means: \"To accompany and guide someone safely and honorably.\".",
            "options": [
              "Everyone",
              "Enjoying",
              "Cups",
              "Escort"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Escort\" means to accompany and guide someone safely and honorably.",
            "visualClueEmoji": "🚁",
            "points": 60
          },
          {
            "id": "q-e56-5-2",
            "question": "What wonderful change happened to all four grandparents at the end?",
            "options": [
              "They all got out of bed, healthy, joyful, and full of life",
              "They turned into astronauts permanently",
              "They built a house on the moon",
              "They bought a bakery"
            ],
            "correctIndex": 0,
            "explanation": "All four grandparents recovered their energy and joy, getting out of bed forever!",
            "visualClueEmoji": "🔍",
            "points": 50
          },
          {
            "id": "q-elevator-56-5-vocab2",
            "question": "Find a word in the passage that means: \"A grand, celebratory feast with delicious food and honored guests.\".",
            "options": [
              "Everyone",
              "Banquet",
              "Enjoying",
              "Cups"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Banquet\" means a grand, celebratory feast with delicious food and honored guests.",
            "visualClueEmoji": "🍲",
            "points": 60
          }
        ]
      }
    ],
    "7-8": [
      {
        "id": "elevator-78-1",
        "dayNumber": 1,
        "title": "Rocketing Past the Stratosphere",
        "subtitle": "Orbital physics, zero gravity, and the Great Glass Elevator!",
        "estReadingMinutes": 15,
        "totalWordCount": 780,
        "summary": "Willy Wonka pushes the secret ceiling button to launch the elevator into orbit. Charlie and his family experience zero gravity and witness Earth from outer space.",
        "visualScenes": [
          {
            "id": "scene-e78-1",
            "title": "Zero Gravity in the Stratosphere",
            "backgroundGradient": "from-indigo-950 via-slate-900 to-purple-950",
            "illustrationType": "great_glass_elevator",
            "caption": "The glass elevator entered low Earth orbit at fifteen thousand miles an hour, leaving the atmosphere behind.",
            "characterAvatars": [
              {
                "name": "Willy Wonka",
                "emoji": "🎩",
                "speech": "We have broken free of gravitational pull!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "👦",
                "speech": "Look at the curvature of the Earth!",
                "position": "center"
              },
              {
                "name": "Grandpa Joe",
                "emoji": "👴",
                "speech": "My slippers are floating over my nose!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "he78_1",
                "x": 35,
                "y": 60,
                "label": "Rocket Thruster",
                "icon": "🚀",
                "soundEffect": "magic",
                "funFact": "Wonka's candy rockets produced pure peppermint-scented thrust!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Green Button on the Ceiling",
            "paragraphs": [
              "The Great Glass Elevator hung suspended high above the snowy roofs of the town. Inside, the four grandparents still sat in their bed, clutching their blankets with wide eyes.",
              "'We need more altitude!' exclaimed Mr. Willy Wonka, tapping his walking stick against the glass ceiling. 'To re-enter the factory at the correct angle without smashing into the fudge boilers, we must loop into orbit!'",
              "Without waiting for a response, he reached up and jabbed a bright emerald-green button. A tremendous thundering roar shook the cabin as hidden candy-rocket boosters ignited beneath the floor, propelling the elevator straight up into the stratosphere!"
            ],
            "dialogueBites": [
              {
                "speaker": "Willy Wonka",
                "text": "Hang onto your whiskers! We are going into low Earth orbit!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Grandma Josephine",
                "text": "He's mad! He's stark raving bonkers! We're shooting into outer space!",
                "avatarEmoji": "👵",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e78-1-1",
              "question": "Why did Mr. Wonka decide they needed to enter orbit?",
              "options": [
                "Because he wanted to catch falling meteors",
                "To achieve the correct trajectory and speed to re-enter the factory safely",
                "Because he forgot where the chocolate factory was"
              ],
              "correctInsightIndex": 1,
              "insight": "Mr. Wonka calculated that orbital trajectory was required to return cleanly to the factory!",
              "rewardKP": 20
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Floating Weightless in Orbit",
            "paragraphs": [
              "Within seconds, the rushing wind and roaring thrusters ceased. An ethereal, crystalline silence enveloped the glass elevator.",
              "Charlie felt a strange tickling sensation in his stomach. When he stepped forward, his shoes parted from the crystal floor, and he found himself gently gliding toward the ceiling like a feather in a warm updraft.",
              "Even the heavy brass-and-oak bed of the grandparents lifted gently, floating at a forty-five-degree angle. Grandpa Joe began doing backflips in mid-air, cheering with boyish delight!"
            ],
            "dialogueBites": [
              {
                "speaker": "Grandpa Joe",
                "text": "Look at me, Charlie! No rheumatism, no stiff joints! I'm completely weightless!",
                "avatarEmoji": "👴",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "It's like swimming in clear water, only there's no water at all!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-elevator-78-1-p2",
              "question": "Find a word on this page that means: \"The upper layer of the Earth's atmosphere above the clouds.\".",
              "options": [
                "Great",
                "Glass",
                "Stratosphere"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Stratosphere\" (STRAT-O-SPHERE) means the upper layer of the earth's atmosphere above the clouds.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "A Cosmic Perspective",
            "paragraphs": [
              "Through the toughened glass walls, Charlie gazed down upon the brilliant curvature of the Earth. Swirls of white clouds drifted over emerald continents and sapphire oceans.",
              "'Look at how small and peaceful our town looks from up here,' Charlie whispered. 'All our worries look so tiny from above the world.'",
              "Mr. Wonka nodded with unexpected tenderness. 'That is why everyone should look at the world from high above, Charlie. It reminds us of how precious and fragile our home really is.'"
            ],
            "dialogueBites": [
              {
                "speaker": "Willy Wonka",
                "text": "A broad mind requires a broad horizon, Charlie.",
                "avatarEmoji": "🎩",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e78-1-3",
              "question": "What lesson did Charlie and Mr. Wonka share while looking at Earth?",
              "options": [
                "Viewing Earth from above gives a broad perspective on how precious our planet is",
                "Space is only good for storing old furniture",
                "The Earth looks like a chocolate pancake"
              ],
              "correctInsightIndex": 0,
              "insight": "Seeing Earth from orbit inspires humility, wonder, and deep gratitude for our world!",
              "rewardKP": 20
            }
          }
        ],
        "vocabList": [
          {
            "word": "Stratosphere",
            "phonics": "STRAT-O-SPHERE",
            "definition": "The upper layer of the Earth's atmosphere above the clouds.",
            "funExample": "The elevator climbed beyond the stratosphere into space!",
            "emoji": "🌌"
          },
          {
            "word": "Curvature",
            "phonics": "CUR-VA-TURE",
            "definition": "The smooth curving shape of a round object or planet.",
            "funExample": "Charlie admired the beautiful curvature of the Earth.",
            "emoji": "🌐"
          }
        ],
        "microChallenge": {
          "id": "mc-e78-1",
          "title": "Orbital Speed Calculator",
          "type": "word_scramble",
          "prompt": "Unscramble the key space term: 'T R A J E C T O R Y'",
          "targetWord": "TRAJECTORY",
          "scrambleLetters": [
            "T",
            "O",
            "R",
            "Y",
            "J",
            "E",
            "C",
            "T",
            "R",
            "A"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-e78-1-1",
            "question": "What caused the grandparents' bed to float inside the glass cabin?",
            "options": [
              "A hidden balloon beneath the mattress",
              "Zero gravity / free-fall in Earth orbit",
              "Wonka's magic anti-gravity chewing gum",
              "Grandma Georgina's sneezing"
            ],
            "correctIndex": 1,
            "explanation": "Entering orbit creates free-fall, causing weightlessness for everything inside the elevator!",
            "visualClueEmoji": "📖",
            "points": 50
          },
          {
            "id": "q-elevator-78-1-vocab1",
            "question": "Find a word in the passage that means: \"The upper layer of the Earth's atmosphere above the clouds.\".",
            "options": [
              "Great",
              "Glass",
              "Stratosphere",
              "Elevator"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Stratosphere\" means the upper layer of the earth's atmosphere above the clouds.",
            "visualClueEmoji": "🌌",
            "points": 60
          },
          {
            "id": "q-elevator-78-1-3",
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
            "id": "q-elevator-78-1-vocab2",
            "question": "Find a word in the passage that means: \"The smooth curving shape of a round object or planet.\".",
            "options": [
              "Great",
              "Glass",
              "Elevator",
              "Curvature"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Curvature\" means the smooth curving shape of a round object or planet.",
            "visualClueEmoji": "🌐",
            "points": 60
          }
        ]
      },
      {
        "id": "elevator-78-2",
        "dayNumber": 2,
        "title": "Infiltrating Space Hotel 'U.S.A.'",
        "subtitle": "The floating orbital station and the presidential hotline!",
        "estReadingMinutes": 15,
        "totalWordCount": 800,
        "summary": "Mr. Wonka docks the glass elevator inside Space Hotel 'U.S.A.', leading to confusion in the White House where President Gilligrass suspects alien invaders or secret agents.",
        "visualScenes": [
          {
            "id": "scene-e78-2",
            "title": "Docked at Space Hotel 'U.S.A.'",
            "backgroundGradient": "from-blue-950 via-slate-900 to-indigo-950",
            "illustrationType": "space_hotel",
            "caption": "The glass elevator docked seamlessly inside the pressurized lobby of the world's first orbiting hotel.",
            "characterAvatars": [
              {
                "name": "Willy Wonka",
                "emoji": "🎩",
                "speech": "Let us inspect the accommodations!",
                "position": "left"
              },
              {
                "name": "President Gilligrass",
                "emoji": "👔",
                "speech": "Who is that man in the velvet tailcoat?!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hsh78_1",
                "x": 50,
                "y": 45,
                "label": "Presidential Video Link",
                "icon": "📺",
                "soundEffect": "magic",
                "funFact": "The White House had direct telemetry linked to every corner of the Space Hotel!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Giant Silver Cylinder",
            "paragraphs": [
              "Floating a few thousand yards ahead in synchronous orbit was a glistening titanium cylinder nearly a thousand feet long. The scene was filled with telemetry, creating an unforgettable moment.",
              "'Behold!' cried Mr. Wonka. 'Space Hotel 'U.S.A.'! Built at immense expense by the United States government and scheduled to open to tourists next month!'",
              "With expert touch on the elevator's thruster controls, Mr. Wonka slipped the glass box directly through the outer atmospheric seal into the reception lobby."
            ],
            "dialogueBites": [
              {
                "speaker": "Willy Wonka",
                "text": "Clean carpets, ambient oxygen, and not a soul in sight! Perfect for an afternoon stroll!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "Look at the five hundred luxury suites along the curved hallway!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e78-2-1",
              "question": "What was Space Hotel 'U.S.A.' designed for?",
              "options": [
                "A secret underground mining facility",
                "A giant greenhouse for growing space pineapples",
                "A luxury orbiting hotel for civilian tourists in space"
              ],
              "correctInsightIndex": 2,
              "insight": "Space Hotel 'U.S.A.' was the world's premier orbital tourist destination!",
              "rewardKP": 20
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Panic in the Oval Office",
            "paragraphs": [
              "Meanwhile, down in Washington D.C., alarms blared throughout the Pentagon and the White House.",
              "President Lancelot R. Gilligrass stared at the giant video screens in disbelief. 'Who are those eight people in nightshirts floating around our top-secret hotel?' he shouted.",
              "The Vice President, Miss Elvira Tibbs, adjusted her spectacles. 'Sir, they appear to be riding in a giant glass box, and one of them is wearing a top hat!'"
            ],
            "dialogueBites": [
              {
                "speaker": "President Gilligrass",
                "text": "Connect me to the Space Hotel immediately! I want answers!",
                "avatarEmoji": "👔",
                "side": "left"
              },
              {
                "speaker": "Miss Tibbs",
                "text": "Calling them on the satellite intercom right now, Mr. President!",
                "avatarEmoji": "👩‍💼",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-elevator-78-2-p2",
              "question": "Find a word on this page that means: \"Existing or occurring at the same time or rate.\".",
              "options": [
                "Synchronous",
                "Floating",
                "Thousand"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Synchronous\" (SYN-CHRO-NOUS) means existing or occurring at the same time or rate.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "A Whimsical Intercom Exchange",
            "paragraphs": [
              "When the President's booming voice rang out across the lobby speakers, Mr. Wonka seized the opportunity for theatrical Gobblefunk.",
              "'We are the Grand High Exalted Emperors of Oompa-Land!' Mr. Wonka announced with a flourish. 'We come seeking fifty tons of butterscotch and three hundred pairs of warm woolen socks!'",
              "Grandpa Joe had to stifle a laugh into his sleeve as the generals in Washington frantically tried to decode Wonka's nonsensical demands."
            ],
            "dialogueBites": [
              {
                "speaker": "Willy Wonka",
                "text": "If you don't send the butterscotch, we shall tickle your satellites with peppermint sticks!",
                "avatarEmoji": "🎩",
                "side": "left"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e78-2-3",
              "question": "How did Mr. Wonka respond to the President's serious questions?",
              "options": [
                "By surrendering immediately",
                "With playful, eccentric jokes and whimsical Gobblefunk demands",
                "By turning off the television"
              ],
              "correctInsightIndex": 1,
              "insight": "Mr. Wonka defused the tension using his signature theatrical humor!",
              "rewardKP": 20
            }
          }
        ],
        "vocabList": [
          {
            "word": "Synchronous",
            "phonics": "SYN-CHRO-NOUS",
            "definition": "Existing or occurring at the same time or rate.",
            "funExample": "The hotel floated in synchronous orbit with the Earth.",
            "emoji": "⏱️"
          },
          {
            "word": "Telemetry",
            "phonics": "TE-LEM-E-TRY",
            "definition": "The automated recording and transmission of data from remote sources.",
            "funExample": "The White House monitored live video telemetry from space.",
            "emoji": "📡"
          }
        ],
        "microChallenge": {
          "id": "mc-e78-2",
          "title": "Satellite Intercom Decoder",
          "type": "word_scramble",
          "prompt": "Decode the White House classification code: 'S A T E L L I T E'",
          "targetWord": "SATELLITE",
          "scrambleLetters": [
            "T",
            "E",
            "L",
            "L",
            "I",
            "T",
            "E",
            "S",
            "A"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-e78-2-1",
            "question": "Who was the President of the United States monitoring the Space Hotel?",
            "options": [
              "President Wonka",
              "President Bucket",
              "President Lancelot R. Gilligrass",
              "President Wormwood"
            ],
            "correctIndex": 2,
            "explanation": "Roald Dahl's satirical US President in the story was Lancelot R. Gilligrass!",
            "visualClueEmoji": "📖",
            "points": 50
          },
          {
            "id": "q-elevator-78-2-vocab1",
            "question": "Find a word in the passage that means: \"Existing or occurring at the same time or rate.\".",
            "options": [
              "Synchronous",
              "Floating",
              "Thousand",
              "Yards"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Synchronous\" means existing or occurring at the same time or rate.",
            "visualClueEmoji": "⏱️",
            "points": 60
          },
          {
            "id": "q-elevator-78-2-3",
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
            "id": "q-elevator-78-2-vocab2",
            "question": "Find a word in the passage that means: \"The automated recording and transmission of data from remote sources.\".",
            "options": [
              "Floating",
              "Telemetry",
              "Thousand",
              "Yards"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Telemetry\" means the automated recording and transmission of data from remote sources.",
            "visualClueEmoji": "📡",
            "points": 60
          }
        ]
      },
      {
        "id": "elevator-78-3",
        "dayNumber": 3,
        "title": "The Battle of the Vermicious Knids",
        "subtitle": "Shapeshifting horrors from planet Vermes & the heroic rescue!",
        "estReadingMinutes": 15,
        "totalWordCount": 820,
        "summary": "The hotel is invaded by Vermicious Knids, gelatinous alien predators. When an astronaut commuter capsule is attacked, Charlie and Mr. Wonka mount a daring orbital rescue mission.",
        "visualScenes": [
          {
            "id": "scene-e78-3",
            "title": "Knids Attacking the Commuter Capsule",
            "backgroundGradient": "from-rose-950 via-purple-950 to-slate-950",
            "illustrationType": "vermicious_knid",
            "caption": "The monstrous Vermicious Knids swarmed around the stranded commuter capsule as Wonka's elevator swooped in with the towline.",
            "characterAvatars": [
              {
                "name": "Vermicious Knid",
                "emoji": "👾",
                "speech": "SCRAM!",
                "position": "left"
              },
              {
                "name": "Willy Wonka",
                "emoji": "🎩",
                "speech": "Hook the titanium towline to their airlock!",
                "position": "center"
              },
              {
                "name": "Charlie",
                "emoji": "👦",
                "speech": "Grandpa Joe, help me secure the winch!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hvk78_1",
                "x": 45,
                "y": 55,
                "label": "Titanium Towline",
                "icon": "🪢",
                "soundEffect": "success",
                "funFact": "Wonka's towline was woven from spun sugar and high-tensile carbon alloy!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Eldritch Predators of the Cosmos",
            "paragraphs": [
              "Just as Mr. Wonka was enjoying his joke, a dark, oily mass oozed from the hotel elevator shaft. It had no bones, no limbs, and skin like glistening dark olive jelly.",
              "A single, malevolent red eye opened on its torso, glaring directly at the intruders. 'Knids!' whispered Mr. Wonka, his face turning dead serious.",
              "'They come from the distant planet Vermes. They are the most brutal, shape-shifting predators in the known cosmos. Into the elevator, now!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Willy Wonka",
                "text": "Do not look them in the eye! Secure the airlock immediately!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Grandma Georgina",
                "text": "Heaven protect us! They're multiplying like dark puddles!",
                "avatarEmoji": "👵",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e78-3-1",
              "question": "Where did the Vermicious Knids originate according to Mr. Wonka?",
              "options": [
                "From the distant planet Vermes",
                "From a secret underground volcano",
                "From a jar of spoiled pickles"
              ],
              "correctInsightIndex": 0,
              "insight": "The Knids were alien predators originating from the planet Vermes!",
              "rewardKP": 20
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The Commuter Capsule Under Siege",
            "paragraphs": [
              "Outside in open space, the United States Commuter Capsule carrying twenty-four astronauts and hotel staff had just arrived.",
              "Dozens of Knids swarmed around the metal capsule, battering against its fragile aluminum hull and wrapping their elastic bodies around the thruster nozzles.",
              "'Their engines are disabled!' cried Charlie, peering through the glass. 'If we don't help them, the Knids will breach their hull!'",
              "Mr. Wonka grabbed his walking stick. 'Charlie is right! We have toughened, blast-proof glass. We are going to rescue those people!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Charlie",
                "text": "We cannot leave those brave astronauts behind, Mr. Wonka!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Willy Wonka",
                "text": "Right you are, my boy! Prepare the high-tensile towline!",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-elevator-78-3-p2",
              "question": "Find a word on this page that means: \"Having or showing a wish to do evil to others.\".",
              "options": [
                "Wonka",
                "Malevolent",
                "Enjoying"
              ],
              "correctInsightIndex": 1,
              "insight": "\"Malevolent\" (MA-LEV-O-LENT) means having or showing a wish to do evil to others.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Re-Entry Tow",
            "paragraphs": [
              "Grandpa Joe and Charlie fastened the heavy steel towline to the capsule's forward ring while Mr. Wonka fired reverse thrusters.",
              "With the Commuter Capsule firmly in tow, the Great Glass Elevator dove down toward the thick upper atmosphere of Earth.",
              "Frictional heat began to glow outside the glass. The Knids, unable to withstand the fiery heat of atmospheric re-entry, disintegrated into shooting sparks, leaving both vessels safe in clear blue sky!"
            ],
            "dialogueBites": [
              {
                "speaker": "Grandpa Joe",
                "text": "We pulled them through! The Knids are gone!",
                "avatarEmoji": "👴",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "We're heading safely home to Earth!",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e78-3-3",
              "question": "How did the elevator defeat the Knids?",
              "options": [
                "By spraying chocolate fudge into space",
                "By turning on windshield wipers",
                "By towing the capsule into Earth's fiery atmospheric re-entry which the Knids could not survive"
              ],
              "correctInsightIndex": 2,
              "insight": "The extreme friction and heat of re-entry burned away the pursuing alien Knids!",
              "rewardKP": 20
            }
          }
        ],
        "vocabList": [
          {
            "word": "Malevolent",
            "phonics": "MA-LEV-O-LENT",
            "definition": "Having or showing a wish to do evil to others.",
            "funExample": "The Knid fixed Charlie with a malevolent red glare.",
            "emoji": "👁️"
          },
          {
            "word": "Re-entry",
            "phonics": "RE-EN-TRY",
            "definition": "The return of a spacecraft into the Earth's atmosphere.",
            "funExample": "Atmospheric re-entry generated bright glowing heat.",
            "emoji": "🔥"
          }
        ],
        "microChallenge": {
          "id": "mc-e78-3",
          "title": "Towline Winch Anchor",
          "type": "space_docking",
          "prompt": "Lock the towline anchors to secure the astronaut capsule!",
          "options": [
            "Fasten Bow Ring",
            "Tension Spool Cable",
            "Fire Retro-Thrusters"
          ],
          "correctOrder": [
            "Fasten Bow Ring",
            "Tension Spool Cable",
            "Fire Retro-Thrusters"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-e78-3-1",
            "question": "How many astronauts and staff were aboard the stranded commuter capsule?",
            "options": [
              "Three",
              "One hundred",
              "Zero",
              "Twenty-four"
            ],
            "correctIndex": 3,
            "explanation": "The Commuter Capsule held 24 astronauts and hotel staff who were saved by Charlie and Wonka!",
            "visualClueEmoji": "📖",
            "points": 50
          },
          {
            "id": "q-elevator-78-3-vocab1",
            "question": "Find a word in the passage that means: \"Having or showing a wish to do evil to others.\".",
            "options": [
              "Wonka",
              "Malevolent",
              "Enjoying",
              "Joke"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Malevolent\" means having or showing a wish to do evil to others.",
            "visualClueEmoji": "👁️",
            "points": 60
          },
          {
            "id": "q-elevator-78-3-3",
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
            "id": "q-elevator-78-3-vocab2",
            "question": "Find a word in the passage that means: \"The return of a spacecraft into the Earth's atmosphere.\".",
            "options": [
              "Re-entry",
              "Wonka",
              "Enjoying",
              "Joke"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Re-entry\" means the return of a spacecraft into the earth's atmosphere.",
            "visualClueEmoji": "🔥",
            "points": 60
          }
        ]
      },
      {
        "id": "elevator-78-4",
        "dayNumber": 4,
        "title": "The Minusland Paradox & Vita-Wonk",
        "subtitle": "Mathematical age reversals and the journey to the subterranean void!",
        "estReadingMinutes": 15,
        "totalWordCount": 840,
        "summary": "After returning to the factory, the elderly grandparents overdose on Wonka-Vite. Grandma Georgina vanishes into Minusland at age minus two, prompting a dangerous elevator descent.",
        "visualScenes": [
          {
            "id": "scene-e78-4",
            "title": "Descent into Subterranean Minusland",
            "backgroundGradient": "from-teal-950 via-slate-900 to-emerald-950",
            "illustrationType": "wonka_vites",
            "caption": "The glass elevator pierced the bedrock of the earth into the misty silence of Minusland to rescue Grandma Georgina.",
            "characterAvatars": [
              {
                "name": "Willy Wonka",
                "emoji": "🎩",
                "speech": "Minusland is where the un-born exist in mist!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "👦",
                "speech": "Grandma, listen to my voice!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hml78_1",
                "x": 50,
                "y": 50,
                "label": "Vita-Wonk Atomizer",
                "icon": "💨",
                "soundEffect": "magic",
                "funFact": "Vita-Wonk was synthesized from the sap of a 4,000-year-old Bristlecone pine!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "An Impatient Overdose",
            "paragraphs": [
              "Safely back on solid ground in the factory's Inventing Room, the three remaining grandparents—Josephine, Georgina, and George—demanded Mr. Wonka's secret medicine to make them young. The scene was filled with reconstitution, creating an unforgettable moment.",
              "'Wonka-Vite is extremely potent,' warned Mr. Wonka. 'One pill subtracts precisely twenty years from your biological age. Do not take more than three!'",
              "Ignoring the warnings, Grandma Georgina snatched four pills and gulped them down in greed. Within seconds, her wrinkles vanished, her grey hair turned golden, then her body shrank into a baby, and finally vanished entirely with a soft pop!"
            ],
            "dialogueBites": [
              {
                "speaker": "Grandpa Joe",
                "text": "Georgina was seventy-eight years old! Four pills subtracted eighty years!",
                "avatarEmoji": "👴",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "That means she's minus two years old! She's been subtracted right out of existence!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e78-4-1",
              "question": "What mathematical calculation explains why Grandma Georgina vanished?",
              "options": [
                "78 plus 80 equals 158",
                "78 minus 80 equals -2, making her two years younger than zero",
                "She ate too much sugar and fell asleep"
              ],
              "correctInsightIndex": 1,
              "insight": "Subtracting 80 from 78 yields -2, banishing her to Minusland!",
              "rewardKP": 20
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Descent to the Roots of Being",
            "paragraphs": [
              "Mr. Wonka immediately pressed a ruby button marked SUBTERRANEAN VOID.",
              "The glass elevator plunged through the factory foundations, past coal seams, ancient fossils, and subterranean rivers until it entered a luminous, boundless mist.",
              "'This is Minusland,' whispered Wonka reverently. 'The realm of Gnoolies and un-born souls. We must find Georgina's spirit before she drifts away into eternity.'"
            ],
            "dialogueBites": [
              {
                "speaker": "Willy Wonka",
                "text": "Look for a faint glow resembling a two-year-old child in reverse!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "I see a gentle golden swirl of mist near the elevator wall!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-elevator-78-4-p2",
              "question": "Find a word on this page that means: \"Existing, situated, or operating below the surface of the earth.\".",
              "options": [
                "Safely",
                "Solid",
                "Subterranean"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Subterranean\" (SUB-TER-RA-NE-AN) means existing, situated, or operating below the surface of the earth.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Reconstitution of Georgina",
            "paragraphs": [
              "Mr. Wonka pulled out an elegant brass atomizer filled with Vita-Wonk, distilled from the oldest living organisms on Earth.",
              "He leaned through a small circular port and sprayed the golden mist directly onto the swirling vapor. Instantly, the mist solidified into an infant, then a schoolgirl, then a robust woman in her seventies.",
              "Grandma Georgina blinked, shook her head, and stood firmly upon both feet. 'My stars!' she gasped. 'I feel completely regenerated!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Grandma Georgina",
                "text": "I have walked in the land of shadows and returned with brand new knees!",
                "avatarEmoji": "👵",
                "side": "left"
              },
              {
                "speaker": "Willy Wonka",
                "text": "Precision chemistry, my dear boy! A perfect balance of age and vigor!",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e78-4-3",
              "question": "How did Vita-Wonk restore Grandma Georgina?",
              "options": [
                "It systematically added years back until her biological age was balanced and healthy",
                "It put her into a frozen crystal",
                "It transformed her into a mechanical robot"
              ],
              "correctInsightIndex": 0,
              "insight": "Vita-Wonk acted as the precise antidote, restoring her to a healthy living age!",
              "rewardKP": 20
            }
          }
        ],
        "vocabList": [
          {
            "word": "Subterranean",
            "phonics": "SUB-TER-RA-NE-AN",
            "definition": "Existing, situated, or operating below the surface of the earth.",
            "funExample": "The elevator plunged into subterranean chambers.",
            "emoji": "🕳️"
          },
          {
            "word": "Reconstitution",
            "phonics": "RE-CON-STI-TU-TION",
            "definition": "The act of restoring something back to its original physical state.",
            "funExample": "The chemical spray allowed the reconstitution of Grandma Georgina.",
            "emoji": "✨"
          }
        ],
        "microChallenge": {
          "id": "mc-e78-4",
          "title": "Bio-Age Balance Formula",
          "type": "potion_mix",
          "prompt": "Calculate: If age is -2, select the right Vita-Wonk doses to reach age 78!",
          "options": [
            "Dose A (+40 Years)",
            "Dose B (+40 Years)",
            "Stabilizer (-2 Years)"
          ],
          "correctOrder": [
            "Dose A (+40 Years)",
            "Dose B (+40 Years)",
            "Stabilizer (-2 Years)"
          ],
          "rewardGems": 1
        },
        "quizQuestions": [
          {
            "id": "q-e78-4-1",
            "question": "From what natural organism did Mr. Wonka synthesize Vita-Wonk?",
            "options": [
              "Ancient Bristlecone pine trees and oldest living organisms",
              "Marshmallow roots",
              "Synthetic plastic crystals",
              "Boiled cabbage leaves"
            ],
            "correctIndex": 0,
            "explanation": "Mr. Wonka collected sap from 4,000-year-old Bristlecone pines to formulate Vita-Wonk!",
            "visualClueEmoji": "📖",
            "points": 50
          },
          {
            "id": "q-elevator-78-4-vocab1",
            "question": "Find a word in the passage that means: \"Existing, situated, or operating below the surface of the earth.\".",
            "options": [
              "Safely",
              "Solid",
              "Ground",
              "Subterranean"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Subterranean\" means existing, situated, or operating below the surface of the earth.",
            "visualClueEmoji": "🕳️",
            "points": 60
          },
          {
            "id": "q-elevator-78-4-3",
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
            "id": "q-elevator-78-4-vocab2",
            "question": "Find a word in the passage that means: \"The act of restoring something back to its original physical state.\".",
            "options": [
              "Safely",
              "Solid",
              "Reconstitution",
              "Ground"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Reconstitution\" means the act of restoring something back to its original physical state.",
            "visualClueEmoji": "✨",
            "points": 60
          }
        ]
      },
      {
        "id": "elevator-78-5",
        "dayNumber": 5,
        "title": "Triumph at the White House",
        "subtitle": "Presidential honors, helicopter cavalcades, and the celebration of courage!",
        "estReadingMinutes": 15,
        "totalWordCount": 850,
        "summary": "President Gilligrass sends a presidential helicopter squadron to the factory to bring Charlie, Willy Wonka, and the Buckets to a grand State Dinner in Washington.",
        "visualScenes": [
          {
            "id": "scene-e78-5",
            "title": "Presidential Cavalcade to Washington",
            "backgroundGradient": "from-amber-200 via-yellow-100 to-rose-200",
            "illustrationType": "champions_flight",
            "caption": "Presidential helicopters escorted the entire Bucket family to the White House lawn to receive the Congressional Medal of Bravery.",
            "characterAvatars": [
              {
                "name": "President Gilligrass",
                "emoji": "👔",
                "speech": "To Charlie Bucket and Willy Wonka: Saviors of humanity!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "👦",
                "speech": "We are so honored, Mr. President!",
                "position": "center"
              },
              {
                "name": "Willy Wonka",
                "emoji": "🎩",
                "speech": "Never underestimate the power of candy and courage!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "hwh78_1",
                "x": 50,
                "y": 35,
                "label": "Medal of Honor",
                "icon": "🎖️",
                "soundEffect": "success",
                "funFact": "Charlie was the youngest civilian in history to receive the Presidential citation!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Official Presidential Courier",
            "paragraphs": [
              "A thunderous whirring filled the skies above the chocolate factory. Four giant olive-green helicopters bearing the presidential crest descended into the courtyard. The scene was filled with cavalcade, creating an unforgettable moment.",
              "A Marine major marched forward with a gold-trimmed parchment signed by the President of the United States and the United Nations Security Council.",
              "'By order of the President: For extraordinary gallantry in outer space and the rescue of the Commuter Capsule, Mr. Willy Wonka, Mr. Charlie Bucket, and their family are requested as Guests of Honor at the White House!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Charlie",
                "text": "The President wants all of us at the White House for dinner!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Grandpa Joe",
                "text": "I told you Charlie was destined for greatness!",
                "avatarEmoji": "👴",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e78-5-1",
              "question": "What citation did the President award to Charlie and Mr. Wonka?",
              "options": [
                "A parking ticket for the elevator",
                "A recipe book for apple pie",
                "Guests of Honor for extraordinary gallantry in outer space"
              ],
              "correctInsightIndex": 2,
              "insight": "Their space rescue was recognized as an act of international gallantry!",
              "rewardKP": 20
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "An End to Twenty Years of Bedrest",
            "paragraphs": [
              "The prospect of attending a State Dinner with world leaders accomplished what twenty years of medicine could not.",
              "Grandma Josephine, Grandma Georgina, and Grandpa George leaped out of bed, donned their finest Sunday coats, and helped each other into the waiting helicopter.",
              "'We are leaving this bed forever!' declared Grandma Josephine with a fiery grin. 'Life is too magnificent to spend under the covers!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Grandma Josephine",
                "text": "Pack away the bedpans! We are dining with the President of the United States!",
                "avatarEmoji": "👵",
                "side": "left"
              },
              {
                "speaker": "Willy Wonka",
                "text": "Bravo! A spirited heart is the best medicine in the universe!",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-elevator-78-5-p2",
              "question": "Find a word on this page that means: \"Courageous behavior, noble valor, and heroic bravery.\".",
              "options": [
                "Gallantry",
                "Thunderous",
                "Whirring"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Gallantry\" (GAL-LAN-TRY) means courageous behavior, noble valor, and heroic bravery.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "A Legacy of Wonder",
            "paragraphs": [
              "As the helicopters flew low over the illuminated capital, crowds gathered on the White House lawns waving flags and banners.",
              "President Gilligrass pinned the Congressional Medal of Bravery onto Charlie's jacket, while Willy Wonka smiled in quiet admiration.",
              "Charlie held hands with his mother and grandfather. He knew that whatever mysteries the future held, with imagination, loyalty, and courage, there was no limit to how high they could fly."
            ],
            "dialogueBites": [
              {
                "speaker": "President Gilligrass",
                "text": "To Charlie Bucket: Champion of Earth and space!",
                "avatarEmoji": "👔",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "Thank you, Mr. President. And thank you, Mr. Wonka, for teaching me to believe!",
                "avatarEmoji": "✨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e78-5-3",
              "question": "What core values guided Charlie throughout his entire journey?",
              "options": [
                "Greed, selfishness, and pride",
                "Imagination, loyalty to his family, and selfless courage in the face of the unknown",
                "Laziness and staying in bed"
              ],
              "correctInsightIndex": 1,
              "insight": "Integrity, love for family, and courage make Charlie a true Roald Dahl hero!",
              "rewardKP": 20
            }
          }
        ],
        "vocabList": [
          {
            "word": "Gallantry",
            "phonics": "GAL-LAN-TRY",
            "definition": "Courageous behavior, noble valor, and heroic bravery.",
            "funExample": "Charlie received an award for extraordinary gallantry.",
            "emoji": "🎖️"
          },
          {
            "word": "Cavalcade",
            "phonics": "CAV-AL-CADE",
            "definition": "A formal procession of riders, vehicles, or aircraft.",
            "funExample": "The helicopter cavalcade landed on the White House lawn.",
            "emoji": "🚁"
          }
        ],
        "microChallenge": {
          "id": "mc-e78-5",
          "title": "Congressional Medal Seal",
          "type": "golden_ticket_scratch",
          "prompt": "Uncover the gold presidential medal ribbon to claim your Grand Master Badge!",
          "rewardGems": 3
        },
        "quizQuestions": [
          {
            "id": "q-e78-5-1",
            "question": "What medal was awarded to Charlie by the President of the United States?",
            "options": [
              "The Candy Ribbon of Honor",
              "The Bronze Horseshoe",
              "The Congressional Medal of Bravery",
              "The Oompa Loompa Trophy"
            ],
            "correctIndex": 2,
            "explanation": "Charlie was awarded the Congressional Medal of Bravery for saving the astronauts!",
            "visualClueEmoji": "📖",
            "points": 50
          },
          {
            "id": "q-elevator-78-5-vocab1",
            "question": "Find a word in the passage that means: \"Courageous behavior, noble valor, and heroic bravery.\".",
            "options": [
              "Thunderous",
              "Whirring",
              "Filled",
              "Gallantry"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Gallantry\" means courageous behavior, noble valor, and heroic bravery.",
            "visualClueEmoji": "🎖️",
            "points": 60
          },
          {
            "id": "q-elevator-78-5-3",
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
            "id": "q-elevator-78-5-vocab2",
            "question": "Find a word in the passage that means: \"A formal procession of riders, vehicles, or aircraft.\".",
            "options": [
              "Thunderous",
              "Cavalcade",
              "Whirring",
              "Filled"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Cavalcade\" means a formal procession of riders, vehicles, or aircraft.",
            "visualClueEmoji": "🚁",
            "points": 60
          }
        ]
      }
    ],
    "9+": [
      {
        "id": "elevator-9plus-1",
        "dayNumber": 1,
        "title": "Blast Off Past the Stratosphere!",
        "subtitle": "The big green button, zero gravity somersaults, and the blue planet below!",
        "estReadingMinutes": 15,
        "totalWordCount": 780,
        "summary": "Mr. Wonka pushes the highest green button on the Glass Elevator ceiling. The elevator rockets through the roof into outer space, where Charlie and his grandparents float in weightlessness!",
        "visualScenes": [
          {
            "id": "scene-e9-1",
            "title": "Floating in Zero Gravity Above Planet Earth",
            "backgroundGradient": "from-slate-950 via-indigo-950 to-blue-900",
            "illustrationType": "great_glass_elevator",
            "caption": "The grandparents floated out of their featherbed, spinning like balloons in zero gravity while Charlie looked down at the sparkling blue planet.",
            "characterAvatars": [
              {
                "name": "Mr. Wonka",
                "emoji": "🎩",
                "speech": "We have reached escape velocity! Welcome to outer space!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "👦",
                "speech": "Look at Earth below us, Grandpa Joe! It is glowing blue!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "he9-1",
                "x": 50,
                "y": 35,
                "label": "Planet Earth",
                "icon": "🌍",
                "soundEffect": "magic",
                "funFact": "The Great Glass Elevator orbited Earth once every eighty-nine minutes!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Highest Button on the Glass Ceiling",
            "paragraphs": [
              "When we last left Charlie Bucket and his family, they were hovering inside the Great Glass Elevator above the town. Inside were Mr. Willy Wonka, Charlie, Grandpa Joe, Mr. and Mrs. Bucket, and the three old grandparents—Grandpa George, Grandma Georgina, and Grandma Josephine—who had not left their giant wooden featherbed in twenty years. The scene was filled with stratosphere, creating an unforgettable moment. The scene was filled with orbit, creating an unforgettable moment.",
              "'We must go up before we can come down!' announced Mr. Wonka, his eyes twinkling brightly. He reached up to the very center of the elevator ceiling and pressed a large emerald-green button labelled: UP AND OUT.",
              "With an almighty roaring WHOOSH, the elevator accelerated straight upward! It blasted through the roof of the Chocolate Factory with a shower of tiles, soaring through the clouds, past jet airplanes, and straight through the pale blue rim of the atmosphere into the pitch-black ocean of outer space!"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "Hold onto your hats and whiskers! We are ascending to the stars!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Grandma Josephine",
                "text": "Help! Murder! We are flying off the earth!",
                "avatarEmoji": "👵",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e9-1-1",
              "question": "What button did Mr. Wonka press on the elevator ceiling?",
              "options": [
                "The red button labelled 'STOP'",
                "The emerald-green button labelled 'UP AND OUT'",
                "The yellow button labelled 'LEMON DROPS'"
              ],
              "correctInsightIndex": 1,
              "insight": "Mr. Wonka pressed the highest green button, rocketing them past the atmosphere into space.",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Floating Bed in Zero Gravity",
            "paragraphs": [
              "Suddenly, the roaring engine cut out, and a profound, magical silence enveloped the elevator. The roaring g-force vanished, replaced by an extraordinary lightness.",
              "'Great Scott!' cried Grandpa Joe. 'I am floating!' His feet lifted off the glass floor. Charlie floated upward too, his arms outstretched like an eagle. Then, with a gentle creak, the giant four-poster bed lifted into mid-air!",
              "Grandpa George, Grandma Georgina, and Grandma Josephine hovered above their mattress in their nightshirts, kicking their legs like upside-down turtles. Grandma Georgina did three complete somersaults in mid-air! Mr. Wonka laughed with absolute glee, gliding gracefully from corner to corner like an acrobat."
            ],
            "dialogueBites": [
              {
                "speaker": "Grandpa Joe",
                "text": "Look at me, Charlie! I am swimming through the air without water!",
                "avatarEmoji": "👴",
                "side": "left"
              },
              {
                "speaker": "Grandma Georgina",
                "text": "Catch me! My nightcap is drifting away toward the ceiling!",
                "avatarEmoji": "👵",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-elevator-9plus-1-p2",
              "question": "Find a word on this page that means: \"The curved path of an object traveling around a star or planet in space.\".",
              "options": [
                "Last",
                "Left",
                "Orbit"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Orbit\" (OR-bit) means the curved path of an object traveling around a star or planet in space.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Glorious View of Mother Earth",
            "paragraphs": [
              "Charlie pressed his nose against the cool, transparent glass wall. Beneath them, one hundred miles down, curved the magnificent sphere of planet Earth.",
              "The deep blue oceans sparkled in the sunlight like liquid sapphires. White swirl patterns of storm clouds drifted over green continents, and the golden deserts of Africa shone like polished brass. Charlie could see the whole curve of the world at once.",
              "'Isn't she a beauty?' whispered Mr. Wonka, joining Charlie at the glass. 'From up here, there are no borders, no arguments, and no fences. Just one splendid blue marble floating in the dark. And now, my friends, look ahead! Our first space port awaits!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Charlie",
                "text": "It is the most beautiful thing in the universe, Mr. Wonka!",
                "avatarEmoji": "👦",
                "side": "left"
              },
              {
                "speaker": "Mr. Wonka",
                "text": "Behold, Charlie! Space Hotel 'U.S.A.' straight ahead!",
                "avatarEmoji": "🏨",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e9-1-3",
              "question": "What did Charlie see through the glass walls of the elevator?",
              "options": [
                "The breathtaking curved sphere of Earth, sparkling with blue oceans and white clouds",
                "A dark brick wall blocking the view",
                "Only grey storm clouds with lightning"
              ],
              "correctInsightIndex": 0,
              "insight": "Charlie saw the glorious, borderless curve of planet Earth floating in space.",
              "rewardKP": 15
            }
          }
        ],
        "paragraphs": [
          "Mr. Wonka pressed the big emerald-green button labelled UP AND OUT on the Glass Elevator ceiling.",
          "The elevator blasted through the Chocolate Factory roof, rocketing through the atmosphere into outer space.",
          "Once in orbit, gravity disappeared, and everyone began floating weightlessly inside the glass cabin.",
          "The entire giant four-poster featherbed rose into the air, with the three grandparents doing somersaults in nightshirts.",
          "Charlie looked out the transparent glass floor and saw the breathtaking blue curve of planet Earth with all its oceans.",
          "Mr. Wonka guided their floating elevator toward an enormous orbiting structure: Space Hotel U.S.A."
        ],
        "vocabList": [
          {
            "word": "Stratosphere",
            "phonics": "STRAT-uh-sfeer",
            "definition": "The upper layer of the Earth's atmosphere above the clouds.",
            "funExample": "The elevator soared right past the stratosphere.",
            "emoji": "🚀"
          },
          {
            "word": "Weightlessness",
            "phonics": "WAYT-lis-nis",
            "definition": "The state of experiencing zero gravity, where objects float freely.",
            "funExample": "Weightlessness caused the four-poster bed to lift off the floor.",
            "emoji": "🪶"
          },
          {
            "word": "Orbit",
            "phonics": "OR-bit",
            "definition": "The curved path of an object traveling around a star or planet in space.",
            "funExample": "The Glass Elevator entered a smooth orbit around Earth.",
            "emoji": "🌍"
          }
        ],
        "microChallenge": {
          "id": "mc-e9-1",
          "title": "Orbital Trajectory",
          "type": "word_scramble",
          "prompt": "Unscramble the view: The blue planet EARTH",
          "targetWord": "EARTH",
          "scrambleLetters": [
            "H",
            "T",
            "R",
            "A",
            "E"
          ],
          "rewardGems": 30
        },
        "quizQuestions": [
          {
            "id": "qe9-1-1",
            "question": "What button did Mr. Wonka press on the elevator ceiling to launch them into space?",
            "options": [
              "The red emergency stop lever",
              "The big emerald-green button labelled 'UP AND OUT'",
              "The blue button for strawberry fizz",
              "The silver elevator call button"
            ],
            "correctIndex": 1,
            "explanation": "Mr. Wonka pushed the big green button labelled UP AND OUT on the glass ceiling.",
            "visualClueEmoji": "🟢",
            "points": 60
          },
          {
            "id": "q-elevator-9plus-1-vocab1",
            "question": "Find a word in the passage that means: \"The upper layer of the Earth's atmosphere above the clouds.\".",
            "options": [
              "Last",
              "Left",
              "Stratosphere",
              "Charlie"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Stratosphere\" means the upper layer of the earth's atmosphere above the clouds.",
            "visualClueEmoji": "🚀",
            "points": 60
          },
          {
            "id": "qe9-1-3",
            "question": "How did planet Earth appear to Charlie from one hundred miles in space?",
            "options": [
              "A magnificent glowing blue sphere with swirling white clouds and sparkling oceans",
              "A flat grey square covered in smoke",
              "A giant red ball of fire",
              "Completely pitch-black and invisible"
            ],
            "correctIndex": 0,
            "explanation": "Charlie saw Earth as a breathtaking glowing blue marble floating in the dark.",
            "visualClueEmoji": "🌍",
            "points": 60
          },
          {
            "id": "q-elevator-9plus-1-vocab2",
            "question": "Find a word in the passage that means: \"The state of experiencing zero gravity, where objects float freely.\".",
            "options": [
              "Last",
              "Left",
              "Charlie",
              "Weightlessness"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Weightlessness\" means the state of experiencing zero gravity, where objects float freely.",
            "visualClueEmoji": "🪶",
            "points": 60
          }
        ]
      },
      {
        "id": "elevator-9plus-2",
        "dayNumber": 2,
        "title": "The Floating Space Hotel 'U.S.A.'",
        "subtitle": "Docking in the airlock, the White House videophone, and President Gilligrass!",
        "estReadingMinutes": 15,
        "totalWordCount": 780,
        "summary": "The Elevator docks inside Space Hotel 'U.S.A.' President Gilligrass spots them on radar and calls on the videophone, convinced they are alien invaders or enemy secret agents!",
        "visualScenes": [
          {
            "id": "scene-e9-2",
            "title": "Inside the Orbiting Space Hotel 'U.S.A.'",
            "backgroundGradient": "from-slate-900 via-blue-950 to-indigo-900",
            "illustrationType": "space_hotel",
            "caption": "The Glass Elevator floated right through the giant airlock into the grand carpeted lobby of Space Hotel 'U.S.A.'",
            "characterAvatars": [
              {
                "name": "Mr. Wonka",
                "emoji": "🎩",
                "speech": "Greetings, Mr. President! We are having a wonderful stay!",
                "position": "left"
              },
              {
                "name": "President Gilligrass",
                "emoji": "📞",
                "speech": "Identify yourselves! Who are those old people floating in a bed?!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "he9-2",
                "x": 45,
                "y": 55,
                "label": "Videophone Screen",
                "icon": "📺",
                "soundEffect": "magic",
                "funFact": "President Gilligrass called directly from the Oval Office in Washington D.C.!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Docking in the Orbiting Giant",
            "paragraphs": [
              "Space Hotel 'U.S.A.' was the most colossal engineering marvel ever launched into orbit. It was a silver cylinder nearly a mile long, equipped with five hundred guest suites, swimming pools, tennis courts, and grand carpeted ballrooms.",
              "The American space agency had prepared the hotel for its grand opening next week. An automatic beacon guided the Great Glass Elevator straight into the main airlock. With a gentle hiss of pressurizing air, the inner blast doors slid open.",
              "Mr. Wonka floated the Elevator right out into the lobby. Thick crimson carpet lined the floors, crystal chandeliers hung from the ceilings, and music played softly from hidden speakers. But strangely, there was not a single human being inside."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "Step right up! We are the very first guests at the grandest hotel in the cosmos!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "Look at the chandeliers, Mr. Wonka! Everything is ready for visitors!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e9-2-1",
              "question": "What was Space Hotel 'U.S.A.'?",
              "options": [
                "A rusty submarine floating in the Atlantic",
                "A wooden cabin on top of a snowy mountain",
                "A colossal orbiting luxury hotel launched into space by the American government"
              ],
              "correctInsightIndex": 2,
              "insight": "Space Hotel U.S.A. was a giant luxury orbiting cylinder waiting for its grand opening.",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "The White House Video Call",
            "paragraphs": [
              "Down in Washington D.C., radar screens in the White House War Room began blaring red alarms! President Lancelot R. Gilligrass, Vice-President Miss Tibbs, and the Joint Chiefs of Staff stared in stunned disbelief at the live satellite broadcast.",
              "On the giant video screen in the Oval Office, they could see a transparent glass box inside their multi-billion-dollar space hotel. And inside that glass box was a gentleman in a plum-colored coat and a top hat, accompanied by a little boy and three elderly people floating in a giant brass bed!",
              "'Great jumping catfishes!' yelled President Gilligrass. 'Who are they? Spies? Martians? Chinese astronauts? Get them on the videophone immediately!'"
            ],
            "dialogueBites": [
              {
                "speaker": "President Gilligrass",
                "text": "Identify yourselves! You are trespassing in Space Hotel U.S.A.!",
                "avatarEmoji": "📞",
                "side": "left"
              },
              {
                "speaker": "Chief of Staff",
                "text": "Mr. President, they are floating in an ordinary featherbed!",
                "avatarEmoji": "🎖️",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-elevator-9plus-2-p2",
              "question": "Find a word on this page that means: \"Extremely large, giant, or immense in scale.\".",
              "options": [
                "Colossal",
                "Space",
                "Hotel"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Colossal\" (kuh-LOS-ul) means extremely large, giant, or immense in scale.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "Mr. Wonka's Hilarious Nonsense",
            "paragraphs": [
              "The giant videophone screen on the hotel lobby wall lit up with the red, frantic face of President Gilligrass. 'This is the President of the United States!' boomed the voice. 'State your names and nationality, or we will blow you out of the sky!'",
              "Mr. Wonka stepped up to the camera, tipped his top hat, and began speaking in wild, magnificent gobblefunk: 'Greetings, Most High and Mighty Ruler of the Potentates! We are the Great Gillygaloos from the planet Snozzwanger! We have come to inspect your carpets and sample your plum pudding!'",
              "Grandma Georgina leaned over the edge of the floating bed and shouted into the microphone: 'And tell the cook we want hot buttered crumpets right this instant!' The President and his generals stared in utter bewilderment, convinced they were dealing with the most eccentric extraterrestrials in the universe."
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "We are the Great Gillygaloos from planet Snozzwanger, Mr. President!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Grandma Georgina",
                "text": "Where is room service? Send up crumpets and tea at once!",
                "avatarEmoji": "👵",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e9-2-3",
              "question": "How did Mr. Wonka respond to President Gilligrass's interrogation?",
              "options": [
                "He surrendered and asked to be locked up",
                "He made up hilarious nonsense, pretending to be from planet Snozzwanger to confuse the President",
                "He switched off the videophone and hid under a pillow"
              ],
              "correctInsightIndex": 1,
              "insight": "Wonka amused himself by speaking hilarious gobblefunk, baffling the White House.",
              "rewardKP": 20
            }
          }
        ],
        "paragraphs": [
          "The Great Glass Elevator docked safely inside Space Hotel U.S.A. through the automatic airlock doors.",
          "The hotel lobby was furnished with crimson carpets and crystal chandeliers, but was completely empty of people.",
          "In Washington D.C., radar operators alerted President Gilligrass to the unidentified object inside the space hotel.",
          "President Gilligrass was shocked to see a man in a top hat and an elderly bed floating on his high-security screens.",
          "Gilligrass called through the videophone demanding their identification and nationality.",
          "Mr. Wonka replied with hilarious gobblefunk nonsense about being Snozzwangers, completely bewildering the White House generals."
        ],
        "vocabList": [
          {
            "word": "Colossal",
            "phonics": "kuh-LOS-ul",
            "definition": "Extremely large, giant, or immense in scale.",
            "funExample": "Space Hotel U.S.A. was a colossal silver cylinder.",
            "emoji": "🏨"
          },
          {
            "word": "Airlock",
            "phonics": "AIR-lok",
            "definition": "An airtight compartment with two doors that allows passage between different pressures.",
            "funExample": "The Elevator passed through the space hotel's airlock.",
            "emoji": "🚪"
          }
        ],
        "microChallenge": {
          "id": "mc-e9-2",
          "title": "Decode the White House Call",
          "type": "word_scramble",
          "prompt": "Unscramble the call: The Oval Office is calling from the WHITE HOUSE",
          "targetWord": "WHITE",
          "scrambleLetters": [
            "T",
            "I",
            "H",
            "W",
            "E"
          ],
          "rewardGems": 35
        },
        "quizQuestions": [
          {
            "id": "qe9-2-1",
            "question": "How did the Great Glass Elevator enter Space Hotel 'U.S.A.'?",
            "options": [
              "By crashing through a bedroom window",
              "By drilling a hole through the floor",
              "Through the automatic airlock blast doors guided by a docking beacon",
              "By sliding down a water slide"
            ],
            "correctIndex": 2,
            "explanation": "The Elevator entered smoothly through the automatic airlock blast doors.",
            "visualClueEmoji": "🚪",
            "points": 60
          },
          {
            "id": "q-elevator-9plus-2-vocab1",
            "question": "Find a word in the passage that means: \"Extremely large, giant, or immense in scale.\".",
            "options": [
              "Colossal",
              "Space",
              "Hotel",
              "Engineering"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Colossal\" means extremely large, giant, or immense in scale.",
            "visualClueEmoji": "🏨",
            "points": 60
          },
          {
            "id": "qe9-2-3",
            "question": "What did President Gilligrass suspect when he saw the Elevator occupants on radar?",
            "options": [
              "He thought they were circus clowns performing a show",
              "He thought they were schoolteachers on a field trip",
              "He thought they were hotel maintenance workers",
              "He suspected they were dangerous spies or hostile alien invaders"
            ],
            "correctIndex": 3,
            "explanation": "The President panicked, thinking they were secret enemy spies or alien invaders.",
            "visualClueEmoji": "🚨",
            "points": 60
          },
          {
            "id": "q-elevator-9plus-2-vocab2",
            "question": "Find a word in the passage that means: \"An airtight compartment with two doors that allows passage between different pressures.\".",
            "options": [
              "Space",
              "Airlock",
              "Hotel",
              "Colossal"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Airlock\" means an airtight compartment with two doors that allows passage between different pressures.",
            "visualClueEmoji": "🚪",
            "points": 60
          }
        ]
      },
      {
        "id": "elevator-9plus-3",
        "dayNumber": 3,
        "title": "The Menace of the Vermicious Knids",
        "subtitle": "Shape-shifting alien beasts, spelling 'SCRAM', and the daring tow rope rescue!",
        "estReadingMinutes": 15,
        "totalWordCount": 790,
        "summary": "Dangerous alien Vermicious Knids attack the Space Hotel and threaten a commuter shuttle. Mr. Wonka heroically hitches a tow rope and pulls the stranded astronauts safely to Earth!",
        "visualScenes": [
          {
            "id": "scene-e9-3",
            "title": "Battle Against the Vermicious Knids",
            "backgroundGradient": "from-slate-950 via-rose-950 to-purple-950",
            "illustrationType": "vermicious_knid",
            "caption": "Swarming Vermicious Knids shaped like giant squishy eggs attacked the shuttle, but Wonka's toughened glass bounced them off harmlessly!",
            "characterAvatars": [
              {
                "name": "Mr. Wonka",
                "emoji": "🎩",
                "speech": "Tie the steel tow rope! We are pulling that commuter ship out of here!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "👦",
                "speech": "The Knids are spelling words with their bodies! Look out!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "he9-3",
                "x": 50,
                "y": 40,
                "label": "Vermicious Knid",
                "icon": "👾",
                "soundEffect": "magic",
                "funFact": "Knids can change shape instantly into spheres, serpents, or giant letters!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Squishy Horrors from Planet Vermes",
            "paragraphs": [
              "Suddenly, the hotel corridor plunged into chilling darkness. A strange, slimy scraping sound echoed from the elevator shafts. Floating in the shadows were dozens of dark, glistening, brownish-green shapes.",
              "'Merciful heavens!' gasped Mr. Wonka, grabbing Charlie's arm. 'Vermicious Knids!' Knids were the most terrifying predators in the entire universe. They hailed from the distant planet Vermes, traveling through space like squishy meteorites. They had no bones and could shape their bodies into anything they pleased.",
              "To Charlie's horror, six giant Knids linked together in the air, twisting their squishy bodies to spell out five giant letters: S - C - R - A - M. Then, with a hideous hissing sound, they launched themselves straight at the Glass Elevator!"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "Vermicious Knids! The most brutal, carnivorous brutes in the cosmos!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "They spelled out SCRAM! They want to devour us!",
                "avatarEmoji": "😱",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e9-3-1",
              "question": "What terrifying alien creatures appeared inside the space hotel?",
              "options": [
                "Vermicious Knids, shape-shifting squishy predators from the planet Vermes",
                "Friendly purple space butterflies",
                "Golden robot waiters serving lemonade"
              ],
              "correctInsightIndex": 0,
              "insight": "Vermicious Knids were shape-shifting alien predators that terrified everyone.",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Toughened Glass and the Battered Commuter Ship",
            "paragraphs": [
              "BANG! CRUNCH! The Knids slammed full force against the Elevator's transparent walls. The grandparents shrieked in terror under their blankets. But Mr. Wonka only grinned.",
              "'Not a scratch!' chuckled Wonka. 'The Great Glass Elevator is made of toughened, knid-proof glass! A cannonball wouldn't crack it!' But outside, a far worse disaster was unfolding. The American commuter capsule, carrying thirty astronauts and hotel workers, had just arrived and was completely surrounded by hundreds of ravenous Knids!",
              "The Knids were battering the commuter ship's thin metal skin, denting the engine rockets and smashing the communications antenna. The astronauts were trapped, screaming for help over the radio as the Knids prepared to drag them off into deep space!"
            ],
            "dialogueBites": [
              {
                "speaker": "Astronauts",
                "text": "Mayday! Mayday! Our rockets are smashed! The monsters are crushing our hull!",
                "avatarEmoji": "👨‍🚀",
                "side": "left"
              },
              {
                "speaker": "Mr. Wonka",
                "text": "Charlie! We cannot leave thirty brave men to be eaten! Prepare the tow cable!",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-elevator-9plus-3-p2",
              "question": "Find a word on this page that means: \"A Roald Dahl word describing treacherous, squishy, and ravenous worm-like creatures.\".",
              "options": [
                "Suddenly",
                "Vermicious",
                "Hotel"
              ],
              "correctInsightIndex": 1,
              "insight": "\"Vermicious\" (ver-MISH-us) means a roald dahl word describing treacherous, squishy, and ravenous worm-like creatures.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Daring Tow Rope Rescue",
            "paragraphs": [
              "Mr. Wonka opened a small roof hatch. Working with rapid precision, he threaded a heavy steel towing cable through the elevator's reinforced nose ring and secured it to the commuter capsule's front bumper.",
              "Hundreds of angry Knids swarmed the Elevator, gnashing their teeth and slamming their bodies against the glass. But Wonka strapped himself in and hit the main thrusters! 'Hang on to your whiskers!' he bellowed.",
              "The Glass Elevator leaped forward, dragging the damaged commuter capsule behind it like a tugboat pulling a barge! Knids clung furiously to the cable, but as Wonka plunged into Earth's atmosphere, the friction of re-entry ignited the air into blazing heat. The Knids sizzled and vaporized into harmless shooting stars, and both ships glided down safely into the clouds!"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "Re-entry heat! Look at those nasty Knids burning up like Roman candles!",
                "avatarEmoji": "🔥",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "We saved the astronauts, Mr. Wonka! We pulled them safe and sound!",
                "avatarEmoji": "🎉",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e9-3-3",
              "question": "How did Mr. Wonka and Charlie save the stranded astronauts from the Knids?",
              "options": [
                "They threw chocolate bars at the Knids",
                "They built a laser cannon out of copper wire",
                "They hitched a heavy steel tow cable to the shuttle and towed it safely down to Earth"
              ],
              "correctInsightIndex": 2,
              "insight": "Wonka towed the damaged spacecraft using the Glass Elevator, burning off the Knids upon re-entry.",
              "rewardKP": 20
            }
          }
        ],
        "paragraphs": [
          "Dangerous shape-shifting alien predators called Vermicious Knids invaded the Space Hotel corridors.",
          "The Knids linked their bodies together to spell SCRAM, before launching a violent attack against the Elevator.",
          "Wonka's toughened glass withstood the Knids' violent impacts without a single scratch or crack.",
          "A commuter capsule containing thirty astronauts was swarmed by hundreds of Knids and suffered engine failure.",
          "Mr. Wonka heroically attached a steel tow cable to the shuttle, using the Glass Elevator as a rescue tugboat.",
          "Wonka fired the thrusters, towing the shuttle into Earth's atmosphere where the re-entry friction incinerated the Knids."
        ],
        "vocabList": [
          {
            "word": "Vermicious",
            "phonics": "ver-MISH-us",
            "definition": "A Roald Dahl word describing treacherous, squishy, and ravenous worm-like creatures.",
            "funExample": "The Vermicious Knids were feared across the galaxy.",
            "emoji": "👾"
          },
          {
            "word": "Commuter",
            "phonics": "kuh-MYOO-ter",
            "definition": "A vehicle used for regular transport of passengers between two places.",
            "funExample": "The space commuter capsule carried thirty workers.",
            "emoji": "🚀"
          }
        ],
        "microChallenge": {
          "id": "mc-e9-3",
          "title": "Knid Spelling Trap",
          "type": "word_scramble",
          "prompt": "Unscramble the alien warning: S-C-R-A-M: SCRAM",
          "targetWord": "SCRAM",
          "scrambleLetters": [
            "M",
            "A",
            "R",
            "C",
            "S"
          ],
          "rewardGems": 40
        },
        "quizQuestions": [
          {
            "id": "qe9-3-1",
            "question": "What shape-shifting alien creatures invaded the Space Hotel corridors?",
            "options": [
              "Snozzwangers from the jungle",
              "Whangdoodles from the mountains",
              "Hornswogglers from the sea",
              "Vermicious Knids from the distant planet Vermes"
            ],
            "correctIndex": 3,
            "explanation": "The creatures were Vermicious Knids, brutal predators from the planet Vermes.",
            "visualClueEmoji": "👾",
            "points": 60
          },
          {
            "id": "q-elevator-9plus-3-vocab1",
            "question": "Find a word in the passage that means: \"A Roald Dahl word describing treacherous, squishy, and ravenous worm-like creatures.\".",
            "options": [
              "Suddenly",
              "Vermicious",
              "Hotel",
              "Corridor"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Vermicious\" means a roald dahl word describing treacherous, squishy, and ravenous worm-like creatures.",
            "visualClueEmoji": "👾",
            "points": 60
          },
          {
            "id": "qe9-3-3",
            "question": "Why were the thirty astronauts in the commuter shuttle in mortal danger?",
            "options": [
              "They had run out of drinking water",
              "Their steering wheel fell off into the sun",
              "Their engine rockets were smashed by Knids and they were being dragged into deep space",
              "They forgot how to fly the rocket"
            ],
            "correctIndex": 2,
            "explanation": "The Knids smashed the commuter shuttle's engines, leaving the crew helpless.",
            "visualClueEmoji": "👨‍🚀",
            "points": 60
          },
          {
            "id": "q-elevator-9plus-3-vocab2",
            "question": "Find a word in the passage that means: \"A vehicle used for regular transport of passengers between two places.\".",
            "options": [
              "Commuter",
              "Suddenly",
              "Hotel",
              "Corridor"
            ],
            "correctIndex": 0,
            "explanation": "In this story, \"Commuter\" means a vehicle used for regular transport of passengers between two places.",
            "visualClueEmoji": "🚀",
            "points": 60
          }
        ]
      },
      {
        "id": "elevator-9plus-4",
        "dayNumber": 4,
        "title": "Wonka-Vite and the Minusland Journey",
        "subtitle": "Four drops too many, vanishing into negative age, and the rescue in Minusland!",
        "estReadingMinutes": 15,
        "totalWordCount": 790,
        "summary": "Back in the factory, Grandma Georgina takes too much Wonka-Vite and vanishes into Minusland at minus two years old! Wonka and Charlie descend in the Elevator with Vita-Wonk to rescue her.",
        "visualScenes": [
          {
            "id": "scene-e9-4",
            "title": "Descent into Smoky Minusland",
            "backgroundGradient": "from-slate-950 via-stone-900 to-purple-950",
            "illustrationType": "minusland",
            "caption": "The Glass Elevator hovered through the misty gloom of Minusland, searching for the invisible presence of Grandma Georgina.",
            "characterAvatars": [
              {
                "name": "Mr. Wonka",
                "emoji": "🎩",
                "speech": "Spray the Vita-Wonk into the mist! We must add eighty years to her age!",
                "position": "left"
              },
              {
                "name": "Charlie",
                "emoji": "👦",
                "speech": "Grandma Georgina! Can you hear us in the mist?",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "he9-4",
                "x": 45,
                "y": 55,
                "label": "Vita-Wonk Spray",
                "icon": "🧪",
                "soundEffect": "magic",
                "funFact": "Vita-Wonk was made from the oldest living things on Earth, including 4000-year-old pine trees!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "The Temptation of Wonka-Vite",
            "paragraphs": [
              "Safely back inside the Chocolate Factory, the three old grandparents climbed back into their featherbed and insisted they would never leave it again. Mr. Wonka shook his head in pity.",
              "'You are merely suffering from old age!' cried Wonka. He produced a small bottle filled with glowing yellow pills: Wonka-Vite! Each pill made the person who swallowed it exactly twenty years younger.",
              "Grandpa George and Grandma Josephine took two pills each and were instantly transformed into energetic twenty-eight-year-olds! But Grandma Georgina, who was seventy-eight years old, greedily snatched four pills and swallowed them all at once!"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "Stop! Four pills will subtract eighty years! You are only seventy-eight!",
                "avatarEmoji": "🎩",
                "side": "left"
              },
              {
                "speaker": "Grandma Georgina",
                "text": "Down the hatch! I want to be young and sprightly!",
                "avatarEmoji": "💊",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e9-4-1",
              "question": "What went wrong when Grandma Georgina swallowed four Wonka-Vite pills?",
              "options": [
                "She turned into a purple flamingo",
                "She subtracted eighty years from seventy-eight, vanishing to minus two years old",
                "She fell asleep for two hundred years"
              ],
              "correctInsightIndex": 1,
              "insight": "Four pills subtracted 80 years from 78, leaving Grandma Georgina at minus two years old.",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Vanishing into Thin Air",
            "paragraphs": [
              "Before their horrified eyes, Grandma Georgina began shrinking at dizzying speed! Her wrinkles vanished; her grey hair turned golden; her nightshirt swallowed her up like a tent.",
              "She shrank into a girl of ten... a toddler of two... a tiny infant in diapers... and then—POOF! She disappeared completely! On the bed sat only an empty nightgown.",
              "'Where is she?' wept Mrs. Bucket. 'She has become a Minus!' exclaimed Mr. Wonka gravely. 'She is minus two years old! She is trapped in Minusland, the shadowy realm of people who have not yet been born! There is only one thing to do: we must ride down and rescue her!'"
            ],
            "dialogueBites": [
              {
                "speaker": "Mrs. Bucket",
                "text": "My poor mother has vanished into nothingness!",
                "avatarEmoji": "😭",
                "side": "left"
              },
              {
                "speaker": "Mr. Wonka",
                "text": "Do not despair! We have Vita-Wonk to age her back up!",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-elevator-9plus-4-p2",
              "question": "Find a word on this page that means: \"Roald Dahl's fictional realm where people with negative ages reside before birth.\".",
              "options": [
                "Safely",
                "Inside",
                "Minusland"
              ],
              "correctInsightIndex": 2,
              "insight": "\"Minusland\" (MY-nus-land) means roald dahl's fictional realm where people with negative ages reside before birth.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "The Rescue in the Smoky Depths",
            "paragraphs": [
              "Mr. Wonka pressed the button labelled DOWN AND UNDER. The Glass Elevator plunged straight through the factory floor, shooting miles down into the smoky, subterranean caverns beneath the earth.",
              "Minusland was filled with swirling yellow mist and eerie phantom whispers. Wonka equipped a brass spray gun with Vita-Wonk—a magical concoction brewed from thousand-year-old pine sap, giant tortoise shells, and ancient bristlecone trees.",
              "Listening carefully to the air, Wonka located a faint, ghostly giggle. He aimed the spray gun into the yellow fog and pumped ten squirts of Vita-Wonk. Suddenly, a tiny baby appeared in the mist, growing into a toddler, then a little girl, and finally seventy-eight-year-old Grandma Georgina stepped out of the fog, fully restored and scolding Wonka at the top of her lungs!"
            ],
            "dialogueBites": [
              {
                "speaker": "Mr. Wonka",
                "text": "Ten squirts of Vita-Wonk! One, two, three... and presto!",
                "avatarEmoji": "🧪",
                "side": "left"
              },
              {
                "speaker": "Grandma Georgina",
                "text": "You took your sweet time, Willy Wonka! My toes are freezing!",
                "avatarEmoji": "👵",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e9-4-3",
              "question": "How did Mr. Wonka restore Grandma Georgina back to her normal age?",
              "options": [
                "He sprayed her with Vita-Wonk, an elixir made from the oldest living things on Earth to add years",
                "He gave her a cup of hot chocolate",
                "He read her a bedtime poem"
              ],
              "correctInsightIndex": 0,
              "insight": "Wonka used Vita-Wonk to add back 80 years, safely bringing Grandma Georgina back to life.",
              "rewardKP": 20
            }
          }
        ],
        "paragraphs": [
          "Back in the Chocolate Factory, Wonka showed the grandparents Wonka-Vite, which made people twenty years younger per pill.",
          "Grandpa George and Grandma Josephine took two pills each and happily became twenty-eight years old.",
          "Seventy-eight-year-old Grandma Georgina greedily swallowed four pills, subtracting eighty years and vanishing into thin air.",
          "Grandma Georgina was now minus two years old, trapped in the underworld of Minusland among the unborn.",
          "Mr. Wonka and Charlie descended in the Glass Elevator into the misty caverns of Minusland armed with Vita-Wonk.",
          "Wonka sprayed the invisible Grandma with Vita-Wonk, adding eighty years and safely restoring her back to seventy-eight."
        ],
        "vocabList": [
          {
            "word": "Minusland",
            "phonics": "MY-nus-land",
            "definition": "Roald Dahl's fictional realm where people with negative ages reside before birth.",
            "funExample": "Grandma Georgina was trapped in misty Minusland.",
            "emoji": "🌫️"
          },
          {
            "word": "Subterranean",
            "phonics": "sub-ter-AY-nee-un",
            "definition": "Existing, situated, or operating below the surface of the earth.",
            "funExample": "Minusland was located in deep subterranean caverns.",
            "emoji": "🕳️"
          }
        ],
        "microChallenge": {
          "id": "mc-e9-4",
          "title": "Calculate the Age Difference",
          "type": "word_scramble",
          "prompt": "Unscramble the antidote: Wonka's potion: VITA-WONK: POTION",
          "targetWord": "POTION",
          "scrambleLetters": [
            "T",
            "O",
            "N",
            "I",
            "P",
            "O"
          ],
          "rewardGems": 40
        },
        "quizQuestions": [
          {
            "id": "qe9-4-1",
            "question": "What effect did each pill of Wonka-Vite have on the person who took it?",
            "options": [
              "It subtracted exactly twenty years from their age, making them twenty years younger",
              "It turned their skin bright purple like a blueberry",
              "It allowed them to speak fluent Spanish",
              "It made them grow two feet taller"
            ],
            "correctIndex": 0,
            "explanation": "Each pill of Wonka-Vite made the person exactly twenty years younger.",
            "visualClueEmoji": "💊",
            "points": 60
          },
          {
            "id": "q-elevator-9plus-4-vocab1",
            "question": "Find a word in the passage that means: \"Roald Dahl's fictional realm where people with negative ages reside before birth.\".",
            "options": [
              "Safely",
              "Inside",
              "Chocolate",
              "Minusland"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Minusland\" means roald dahl's fictional realm where people with negative ages reside before birth.",
            "visualClueEmoji": "🌫️",
            "points": 60
          },
          {
            "id": "qe9-4-3",
            "question": "Where did Mr. Wonka and Charlie go in the Glass Elevator to rescue Grandma Georgina?",
            "options": [
              "To the top of the Eiffel Tower in Paris",
              "Miles deep into the smoky subterranean realm of Minusland",
              "To the bottom of the Pacific Ocean",
              "To a pharmacy in London"
            ],
            "correctIndex": 1,
            "explanation": "They descended miles underground into the misty caves of Minusland.",
            "visualClueEmoji": "🕳️",
            "points": 60
          },
          {
            "id": "q-elevator-9plus-4-vocab2",
            "question": "Find a word in the passage that means: \"Existing, situated, or operating below the surface of the earth.\".",
            "options": [
              "Safely",
              "Inside",
              "Subterranean",
              "Chocolate"
            ],
            "correctIndex": 2,
            "explanation": "In this story, \"Subterranean\" means existing, situated, or operating below the surface of the earth.",
            "visualClueEmoji": "🕳️",
            "points": 60
          }
        ]
      },
      {
        "id": "elevator-9plus-5",
        "dayNumber": 5,
        "title": "The White House Feast & The Grand Invitation",
        "subtitle": "Presidential helicopters, jumping out of bed, and a State Banquet in Washington!",
        "estReadingMinutes": 15,
        "totalWordCount": 800,
        "summary": "President Gilligrass sends presidential helicopters to the Chocolate Factory with a golden scroll inviting Charlie, Wonka, and the whole family to a grand State Banquet at the White House!",
        "visualScenes": [
          {
            "id": "scene-e9-5",
            "title": "Presidential Helicopters on the Factory Roof",
            "backgroundGradient": "from-amber-600 via-rose-700 to-indigo-950",
            "illustrationType": "great_glass_elevator",
            "caption": "Giant green presidential helicopters landed with a roar on the roof, carrying the President's invitation to a White House banquet!",
            "characterAvatars": [
              {
                "name": "Mr. Wonka",
                "emoji": "🎩",
                "speech": "Pack your suitcases! We are dining with the President of the United States!",
                "position": "left"
              },
              {
                "name": "Grandpa Joe",
                "emoji": "👴",
                "speech": "Hooray! The whole family is going to Washington D.C.!",
                "position": "center"
              },
              {
                "name": "General",
                "emoji": "🎖️",
                "speech": "By order of President Gilligrass, you are all national heroes!",
                "position": "right"
              }
            ],
            "interactiveHotspots": [
              {
                "id": "he9-5",
                "x": 50,
                "y": 35,
                "label": "Presidential Scroll",
                "icon": "📜",
                "soundEffect": "magic",
                "funFact": "The invitation promised 100 courses of dessert including chocolate fudge cake!",
                "action": "sparkle"
              }
            ]
          }
        ],
        "pages": [
          {
            "pageNumber": 1,
            "pageTitle": "Roar of the Presidential Helicopters",
            "paragraphs": [
              "Back in the great Chocolate Room, the family was resting when a deafening roar shook the walls! The glass roof rattled, and looking up, Charlie saw three giant, olive-green military helicopters bearing the presidential seal circling above.",
              "The helicopters landed smoothly on the flat roof of the Chocolate Factory. Down the roof stairs marched a regiment of soldiers in dress uniforms, led by Chief of the Army General Ghengis Khan and Vice-President Miss Tibbs herself.",
              "General Khan unrolled a massive golden scroll tied with red, white, and blue ribbons. He cleared his throat loudly and read: 'To Mr. Willy Wonka, Master Charlie Bucket, and their distinguished family!'"
            ],
            "dialogueBites": [
              {
                "speaker": "General Khan",
                "text": "Attention! An official proclamation from President Lancelot R. Gilligrass!",
                "avatarEmoji": "🎖️",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "Helicopters on the roof! Look at their golden medals, Grandpa!",
                "avatarEmoji": "👦",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e9-5-1",
              "question": "Who arrived on the Chocolate Factory roof in military helicopters?",
              "options": [
                "A troop of traveling musicians",
                "A delivery driver with pizza boxes",
                "A presidential delegation sent by President Gilligrass with an official proclamation"
              ],
              "correctInsightIndex": 2,
              "insight": "President Gilligrass sent an official delegation to honor Wonka and Charlie.",
              "rewardKP": 15
            }
          },
          {
            "pageNumber": 2,
            "pageTitle": "Heroes of the United States of America",
            "paragraphs": [
              "'By order of the President,' boomed General Khan, 'the United States of America officially thanks Mr. Willy Wonka and Charlie Bucket for their daring heroism in outer space!'",
              "'You single-handedly saved thirty American citizens and astronauts from being devoured alive by the monstrous Vermicious Knids! In gratitude, President Gilligrass formally invites the entire Bucket family to a State Banquet at the White House in Washington D.C.!'",
              "The General presented Charlie with a solid gold medal shaped like a soaring elevator, and handed Mr. Wonka an official letter giving the Chocolate Factory tax-free status across the entire world!"
            ],
            "dialogueBites": [
              {
                "speaker": "General Khan",
                "text": "You are the saviors of the astronauts! A banquet of one hundred courses awaits!",
                "avatarEmoji": "🎖️",
                "side": "left"
              },
              {
                "speaker": "Mr. Wonka",
                "text": "A banquet! With ice cream, waffles, and butterscotch pudding!",
                "avatarEmoji": "🎩",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "rf-elevator-9plus-5-p2",
              "question": "Find a word on this page that means: \"Great bravery, courage, and selfless action in the face of danger.\".",
              "options": [
                "Heroism",
                "Great",
                "Chocolate"
              ],
              "correctInsightIndex": 0,
              "insight": "\"Heroism\" (HAIR-oh-iz-um) means great bravery, courage, and selfless action in the face of danger.",
              "rewardKP": 30
            }
          },
          {
            "pageNumber": 3,
            "pageTitle": "Leaping Out of Bed and Flying to Washington",
            "paragraphs": [
              "Upon hearing the words 'one hundred courses of dessert,' the three elderly grandparents did something miraculous. Grandma Josephine kicked off the bedsheets. Grandpa George threw his pillow in the air. Grandma Georgina stood right up on her own two feet!",
              "For twenty years, they had refused to leave their featherbed. Now, they were dancing a joyous jig across the factory floor! 'Washington D.C., here we come!' sang Grandma Georgina.",
              "Charlie, his parents, the grandparents, and Mr. Wonka climbed aboard the presidential helicopter. As the giant blades spun and lifted them into the sunset sky, Charlie held Mr. Wonka's hand. Together, they had conquered outer space, defeated the Knids, and proved that wonder and courage can carry you anywhere in the universe."
            ],
            "dialogueBites": [
              {
                "speaker": "Grandma Josephine",
                "text": "Out of bed at last! I'm going to dance with the President of America!",
                "avatarEmoji": "👵",
                "side": "left"
              },
              {
                "speaker": "Charlie",
                "text": "This is the happiest day of my life, Mr. Wonka!",
                "avatarEmoji": "🌟",
                "side": "right"
              }
            ],
            "reflectionPrompt": {
              "id": "ref-e9-5-3",
              "question": "What amazing thing did the three elderly grandparents do when they heard about the banquet?",
              "options": [
                "They refused to go and locked the doors",
                "They leaped out of bed after twenty years and danced a joyous jig on the floor",
                "They fell fast asleep for a week"
              ],
              "correctInsightIndex": 1,
              "insight": "The grand invitation inspired the grandparents to finally leap out of bed and dance.",
              "rewardKP": 25
            }
          }
        ],
        "paragraphs": [
          "Three presidential helicopters landed on the Chocolate Factory roof carrying an official military delegation.",
          "Chief of the Army General Khan delivered a golden scroll from President Gilligrass honoring their heroism in outer space.",
          "The President thanked Charlie and Wonka for saving thirty astronauts from the Vermicious Knids.",
          "The entire Bucket family was invited to a lavish State Banquet of one hundred dessert courses at the White House.",
          "Hearing about the grand feast, the three grandparents leaped out of bed for the first time in twenty years and danced.",
          "The family boarded the presidential helicopter, flying off into the sunset to celebrate their magnificent victory."
        ],
        "vocabList": [
          {
            "word": "Heroism",
            "phonics": "HAIR-oh-iz-um",
            "definition": "Great bravery, courage, and selfless action in the face of danger.",
            "funExample": "Wonka and Charlie were honored for their space heroism.",
            "emoji": "🎖️"
          },
          {
            "word": "Banquet",
            "phonics": "BANG-kwit",
            "definition": "A grand, lavish celebratory feast for many people.",
            "funExample": "The White House banquet featured one hundred courses.",
            "emoji": "🍽️"
          }
        ],
        "microChallenge": {
          "id": "mc-e9-5",
          "title": "The Golden Medal",
          "type": "word_scramble",
          "prompt": "Unscramble the destination: The President invited them to the BANQUET",
          "targetWord": "BANQUET",
          "scrambleLetters": [
            "T",
            "E",
            "Q",
            "B",
            "A",
            "U",
            "N"
          ],
          "rewardGems": 50
        },
        "quizQuestions": [
          {
            "id": "qe9-5-1",
            "question": "How did the presidential delegation arrive at the Chocolate Factory?",
            "options": [
              "On a fleet of white horses with silver bells",
              "By swimming up the chocolate river in diving suits",
              "In three giant olive-green military helicopters that landed directly on the factory roof",
              "In a yellow school bus"
            ],
            "correctIndex": 2,
            "explanation": "Three presidential helicopters landed on the flat roof of the Chocolate Factory.",
            "visualClueEmoji": "🚁",
            "points": 60
          },
          {
            "id": "q-elevator-9plus-5-vocab1",
            "question": "Find a word in the passage that means: \"Great bravery, courage, and selfless action in the face of danger.\".",
            "options": [
              "Great",
              "Chocolate",
              "Room",
              "Heroism"
            ],
            "correctIndex": 3,
            "explanation": "In this story, \"Heroism\" means great bravery, courage, and selfless action in the face of danger.",
            "visualClueEmoji": "🎖️",
            "points": 60
          },
          {
            "id": "qe9-5-3",
            "question": "What did the three elderly grandparents do upon hearing about the White House feast?",
            "options": [
              "They leaped out of bed for the first time in twenty years and danced a joyful jig",
              "They pulled the blankets over their heads and went to sleep",
              "They asked for more medicine",
              "They demanded that the helicopters leave immediately"
            ],
            "correctIndex": 0,
            "explanation": "Excited by the feast, the grandparents finally leaped out of bed and danced with joy.",
            "visualClueEmoji": "💃",
            "points": 60
          },
          {
            "id": "q-elevator-9plus-5-vocab2",
            "question": "Find a word in the passage that means: \"A grand, lavish celebratory feast for many people.\".",
            "options": [
              "Great",
              "Banquet",
              "Chocolate",
              "Room"
            ],
            "correctIndex": 1,
            "explanation": "In this story, \"Banquet\" means a grand, lavish celebratory feast for many people.",
            "visualClueEmoji": "🍽️",
            "points": 60
          }
        ]
      }
    ]
  }
};
