const { buildBook } = require('./gen_classics_helper.cjs');

const OLIVER_SPEC = {
  fileName: 'src/data/oliverData.ts',
  varName: 'OLIVER_BOOK',
  id: 'oliver_twist',
  title: 'Oliver Twist',
  author: 'Charles Dickens',
  badgeTitle: 'Kind Heart & Unbreakable Spirit',
  coverColor: 'from-amber-950 via-slate-900 to-stone-900',
  accentColor: '#f59e0b',
  borderColor: 'border-amber-400',
  themeIcon: '🥣',
  descriptions: {
    '5-6': 'Follow brave orphan Oliver Twist from the cold workhouse to London! Meet the Artful Dodger, kind Mr. Brownlow, and discover that honesty, love, and courage always shine through the darkest streets.',
    '7-8': "Charles Dickens' timeless classic! Follow young Oliver Twist as he dares to ask for more, escapes to Victorian London, navigates Fagin's pickpocket gang, and is rescued by the kindness of true friends.",
    '9+': "Charles Dickens' gripping masterpiece of innocence, injustice, and redemption. Journey with orphan Oliver Twist from parish workhouse cruelty through London's shadowy underworld to uncovering his true heritage."
  },
  chapters: [
    {
      day: 1,
      title: 'Please, Sir, I Want Some More',
      subtitle: 'The hungry boys cast lots in the gloomy stone hall',
      summary: 'Born in a dreary parish workhouse, young orphan Oliver is pushed forward by his starving companions to ask the astonished master for another ladle of thin gruel.',
      illustrationType: 'workhouse_hall',
      sceneCaption: 'Oliver steps forward with his wooden bowl into the stone dining hall as the master stares in shock!',
      avatars: [
        { name: 'Oliver', emoji: '👦', speech: 'Please, sir, I want some more...', position: 'left' },
        { name: 'Mr. Bumble', emoji: '🎩', speech: 'More?! Never has any boy asked for more in this parish!', position: 'right' }
      ],
      hotspots: [
        { id: 'ot1', x: 25, y: 60, label: 'Wooden Gruel Bowl', icon: '🥣', soundEffect: 'coin', funFact: 'Workhouse boys were fed only three small meals of thin gruel a day.', action: 'sparkle' },
        { id: 'ot2', x: 75, y: 45, label: 'Master Copper Ladle', icon: '🥄', soundEffect: 'bounce', funFact: 'The parish master wore a grand cocked hat and carried a huge iron ladle.', action: 'bounce' }
      ],
      scrambleWord: 'GRUEL',
      vocab: [
        { word: 'Gruel', phonics: 'GROO-uhl', definition: 'A thin, watery porridge boiled in water or milk.', funExample: 'The hungry boys scraped their wooden bowls clean of every drop of gruel.', emoji: '🥣' },
        { word: 'Astonishment', phonics: 'uh-STON-ish-munt', definition: 'A feeling of great surprise and wonder.', funExample: 'The master stared in silent astonishment at Oliver.', emoji: '😲' },
        { word: 'Trembling', phonics: 'TREM-bling', definition: 'Shaking involuntarily with fear, cold, or weakness.', funExample: 'Oliver stood trembling before the stern parish beadle.', emoji: '🥶' }
      ],
      pages: [
        {
          pageTitle: 'The Starving Stone Hall',
          paras56: [
            'In a cold English town, a little boy named Oliver Twist was born in a grey workhouse.',
            'The stone room was freezing in winter, and the boys were given only one small bowl of thin gruel each morning and evening.',
            'The boys were so hungry their eyes grew large and wild. Their wooden bowls shone bright because they licked them with their spoons until not a drop was left.'
          ],
          paras78: [
            'Oliver Twist was born into a world of hardship within the cold stone walls of a parish workhouse.',
            'The dining hall was a great stone hall, with a copper cauldron at one end, out of which the master ladled the gruel at mealtimes.',
            'Each boy was allowed one small basin of gruel and no more. The bowls never needed washing, for the boys polished them with their spoons until they sparkled like mirrors.'
          ],
          paras9: [
            'Oliver Twist entered existence in the dreary confines of a municipal workhouse under the neglectful oversight of parish authorities.',
            'The cavernous refectory was paved with flagstones, where twice daily the master dispensed a meager ration of gruel from a bubbling copper boiler.',
            'Famine reigned among the juvenile inmates; the boys grew ravenous, whispering in desperation about devouring their straw mattresses if no further sustenance was provided.'
          ],
          dialogue: [
            { speaker: 'Boy', text: 'Oliver, the lot fell on you! You must go up and ask for another spoonful!', avatarEmoji: '👦', side: 'left' },
            { speaker: 'Oliver', text: 'My knees shake, but I promised I would go...', avatarEmoji: '🥺', side: 'right' }
          ],
          p1Question: 'Why did the boys in the workhouse never need to wash their wooden bowls?',
          p1Options: [
            'Because they scraped and licked them so clean with their spoons that not a crumb remained',
            'Because the kitchen staff washed them in soapy boiling river water',
            'Because the boys threw their bowls away into the fireplace every day'
          ],
          p1Insight: 'Charles Dickens highlighted the severe poverty and hunger faced by children in 19th-century Britain.'
        },
        {
          pageTitle: 'The Unthinkable Question',
          paras56: [
            'One evening, the boys held a secret council. One tall boy was so hungry he warned he might bite his neighbor!',
            'They cast lots with slips of paper, and the lot fell on little Oliver. He had to walk up to the master after supper and ask for more gruel.',
            'Oliver rose from the table, shivering all over. He held his little wooden bowl tightly in both hands.'
          ],
          paras78: [
            'A council was held among the starving boys, and lots were cast to decide who should walk up to the master after supper.',
            'It fell to young Oliver Twist. Child as he was, he was desperate with hunger and reckless with misery.',
            'He rose from the bench, advanced to the master, basin and spoon in hand, and said in trembling astonishment at his own boldness: "Please, sir, I want some more."'
          ],
          paras9: [
            'A desperate conclave was convened among the emaciated youths; lots were inscribed on scrap paper, and fate designated young Oliver Twist.',
            'Childhood innocence struggled with hollow starvation; propelled forward by the nudges of his companions, Oliver advanced toward the imposing dais.',
            'Grasping his wooden vessel, he uttered the historic plea in breathless astonishment: "Please, sir, I want some more."'
          ],
          dialogue: [
            { speaker: 'Oliver', text: 'Please, sir, I want some more gruel.', avatarEmoji: '🥣', side: 'left' },
            { speaker: 'Master', text: 'WHAT?! Say that again if you dare, boy!', avatarEmoji: '😡', side: 'right' }
          ]
        },
        {
          pageTitle: 'Uproar and Confinement',
          paras56: [
            'The fat master turned pale with shock! He clung to his great copper ladle for support.',
            'He struck Oliver with the ladle and shrieked for Mr. Bumble, the parish beadle in his grand gold-braided coat.',
            'The parish board decided Oliver was too rebellious. They posted a bill offering five pounds to anyone who would take him away!'
          ],
          paras78: [
            'The master turned very pale and stared in stupefied astonishment at the small rebel for several seconds.',
            'He aimed a blow at Oliver\'s head with the ladle, pinioned him in his arms, and shrieked aloud for the parish beadle, Mr. Bumble.',
            'The parish board declared that Oliver would surely come to be hanged. A bill was posted on the workhouse gates offering five pounds to any person who would take Oliver Twist off their hands.'
          ],
          paras9: [
            'The master grew pale with incredulity, clutching the copper ladle as if confronted by open mutiny.',
            'Recovering his faculties, he dealt a resounding blow against Oliver\'s crown and summoned Mr. Bumble with hysterical shouts.',
            'The parish board convened in immediate horror, decreeing that this insolent rebel must be apprenticed immediately. A placard was posted on the exterior gate offering five pounds to anyone who would relieve the parish of Oliver Twist.'
          ],
          dialogue: [
            { speaker: 'Mr. Bumble', text: 'That boy will come to be hanged! I knew it from the hour of his birth!', avatarEmoji: '🎩', side: 'right' },
            { speaker: 'Oliver', text: 'I only wanted a little more warm gruel to stop the pain in my stomach...', avatarEmoji: '😢', side: 'left' }
          ],
          p3Question: 'What did the parish board do after Oliver asked for more food?',
          p3Options: [
            'They posted a notice offering five pounds to anyone who would take Oliver away as an apprentice',
            'They gave every boy a feast of roasted turkey and plum pudding',
            'They elected Oliver as the new leader of the school council'
          ],
          p3Insight: 'Even in dark times, Oliver remained kind-hearted and brave.'
        }
      ],
      compQuestion: {
        question: 'Why did young Oliver walk up to the master in the workhouse hall to ask for more food?',
        options: [
          'Because the boys cast lots due to intense hunger, and Oliver was chosen to ask for more gruel',
          'Because he wanted to spill the pot of porridge onto the master\'s shiny black shoes',
          'Because Mr. Bumble ordered him to test if the copper ladle was boiling hot',
          'Because he was greedy and had already eaten five roasted chickens'
        ],
        explanation: 'The starving boys held a council and drew lots; fate chose Oliver to ask the master for extra gruel.',
        visualClueEmoji: '🥣'
      }
    },
    {
      day: 2,
      title: "The Undertaker's Apprentice & Flight to London",
      subtitle: 'Defending his mother and walking the great North Road',
      summary: 'Apprenticed to Mr. Sowerberry the undertaker, Oliver defends his mother from cruel insults, then escapes on foot toward the distant lights of London.',
      illustrationType: 'undertaker_shop',
      sceneCaption: 'Oliver slips past the coffin workshop at dawn, starting his seventy-mile journey to London!',
      avatars: [
        { name: 'Oliver', emoji: '👦', speech: "She was my mother, and you shall not speak ill of her!", position: 'left' },
        { name: 'Noah Claypole', emoji: '🥊', speech: 'Workhouse brat! Your mother was a wretched nobody!', position: 'right' }
      ],
      hotspots: [
        { id: 'ot3', x: 30, y: 50, label: 'Undertaker Coffin Shop', icon: '⚰️', soundEffect: 'bounce', funFact: 'Mr. Sowerberry made Oliver a mute mourner at children funerals because of his gentle face.', action: 'bounce' },
        { id: 'ot4', x: 70, y: 65, label: 'London Milestone Stone', icon: '🪨', soundEffect: 'magic', funFact: 'London was seventy miles away from Oliver native parish town.', action: 'sparkle' }
      ],
      scrambleWord: 'FLIGHT',
      vocab: [
        { word: 'Apprentice', phonics: 'uh-PREN-tis', definition: 'A young person learning a trade from a skilled employer.', funExample: 'Oliver was bound as an apprentice in the quiet undertaker shop.', emoji: '📜' },
        { word: 'Valiant', phonics: 'VAL-yunt', definition: 'Possessing or showing courage or determination.', funExample: 'Oliver stood valiant when defending his mother memory against Noah.', emoji: '🛡️' },
        { word: 'Solitary', phonics: 'SOL-ih-tair-ee', definition: 'Existing or living alone; without companions.', funExample: 'The boy walked solitary along the dusty high road toward London.', emoji: '🚶' }
      ],
      pages: [
        {
          pageTitle: 'Sleeping Under the Coffin Bench',
          paras56: [
            'Oliver was taken as an apprentice by Mr. Sowerberry, a tall undertaker who made wooden coffins.',
            'Oliver had to sleep on a thin mattress under the shop counter, surrounded by dark wooden boards and black cloth.',
            'Mr. Sowerberry liked Oliver gentle face and made him walk in funerals, but Mrs. Sowerberry gave him only cold dog scraps to eat.'
          ],
          paras78: [
            'Oliver was bound as an apprentice to Mr. Sowerberry, the parish undertaker, who dressed in gloomy black.',
            'His bed was a wretched sack under the counter, surrounded by sombre coffins that rattled when the wind blew through the keyhole.',
            'Mr. Sowerberry recognized Oliver\'s melancholy sweetness and dressed him in black mourning clothes for children\'s funerals, exciting the bitter jealousy of Noah Claypole.'
          ],
          paras9: [
            'Oliver commenced his servitude as an indentured apprentice to Mr. Sowerberry, the undertaker who held the parochial funeral contract.',
            'He slumbered among the half-finished coffins beneath the dusty counter, enveloped in the heavy atmosphere of human mortality.',
            'While the master appreciated the boy\'s solemn demeanor, Mrs. Sowerberry relegated Oliver to stale kitchen scraps and the malicious scorn of the charity boy Noah Claypole.'
          ],
          dialogue: [
            { speaker: 'Mr. Sowerberry', text: 'The boy has a pleasant, mournful face. He will make a fine mute for child funerals!', avatarEmoji: '🎩', side: 'right' },
            { speaker: 'Oliver', text: 'I will work hard and sweep the shop every morning, sir.', avatarEmoji: '👦', side: 'left' }
          ],
          p1Question: 'Where did Oliver sleep while working for Mr. Sowerberry?',
          p1Options: [
            'Under the wooden counter in the undertaker shop among the coffins',
            'In a luxurious feather bed at the village inn',
            'Up in an attic filled with bright toys and books'
          ],
          p1Insight: 'Dickens showed how friendless orphans were treated with harsh indifference.'
        },
        {
          pageTitle: 'A Valiant Stand for Mother',
          paras56: [
            'Noah Claypole was a lazy older boy who worked in the shop. He loved to tease and bully little Oliver.',
            'One morning, Noah sneered at Oliver and called his poor dead mother a wicked, bad woman.',
            'A fire blazed in Oliver\'s gentle heart! He sprang forward, seized Noah by the throat, and knocked the big bully flat upon the ground!'
          ],
          paras78: [
            'Noah Claypole was a cowardly charity boy who delighted in tormenting Oliver whenever the master was absent.',
            'One day Noah taunted him cruelly about his deceased mother, sneering: "Workhouse, your mother was a right bad one!"',
            'Crimson fury flushed Oliver\'s cheeks. He sprang upon the bully with valiant strength, struck him down, and stood over him like a fierce young lion.'
          ],
          paras9: [
            'Noah Claypole, cowardly by nature, subjected Oliver to habitual harassment to compensate for his own humble charity origins.',
            'One morning he ventured into unforgivable malice, defaming Oliver\'s departed mother with vulgar slurs.',
            'An incandescent spark of filial devotion ignited in Oliver; rising with valiant fury, he felled the much larger youth with a single blow of righteous outrage.'
          ],
          dialogue: [
            { speaker: 'Noah', text: 'Your mother was a bad one, Oliver! She deserved to die!', avatarEmoji: '🥊', side: 'right' },
            { speaker: 'Oliver', text: 'Do not dare speak ill of my mother! She was good and pure!', avatarEmoji: '😠', side: 'left' }
          ]
        },
        {
          pageTitle: 'The Road to London',
          paras56: [
            'Mrs. Sowerberry and Mr. Bumble locked Oliver in the dark cellar, but in the quiet night, Oliver slipped out the back door.',
            'He stopped at the workhouse wall to say goodbye to his dying friend, little Dick, who whispered: "God bless you, Oliver!"',
            'With a crust of bread and a tiny bundle, Oliver set off on the long seventy-mile road toward the great city of London.'
          ],
          paras78: [
            'Locked in the cellar for daring to defend his mother, Oliver waited until the dead of night when the house was asleep.',
            'He slipped through the garden latch and paused at the workhouse railing, where little Dick blessed him with sweet tears.',
            'Setting his face toward the London milestone, Oliver began a solitary march through wind, dust, and rain, hoping to find fortune where no one knew his name.'
          ],
          paras9: [
            'After enduring unjust castigation and imprisonment in the coal cellar, Oliver seized an opportunity to unlatch the courtyard gate at daybreak.',
            'Pausing only to receive the tender parting blessing of his fragile friend little Dick, Oliver embarked upon the great high road.',
            'The stone marker read seventy miles to London; with bleeding feet and solitary fortitude, the runaway orphan trudged toward the imperial metropolis.'
          ],
          dialogue: [
            { speaker: 'Little Dick', text: 'God bless you, dear Oliver! I shall never see you again in this world.', avatarEmoji: '🥺', side: 'left' },
            { speaker: 'Oliver', text: 'Goodbye, sweet Dick! I will pray for you every single night!', avatarEmoji: '👦', side: 'right' }
          ],
          p3Question: 'Who gave Oliver a loving parting blessing as he slipped away into the morning light?',
          p3Options: [
            'His frail little workhouse friend, Dick',
            'Mr. Bumble the parish beadle',
            'Noah Claypole with a handshake'
          ],
          p3Insight: 'True friendship brought light to Oliver even on his loneliest journey.'
        }
      ],
      compQuestion: {
        question: 'Why did gentle Oliver knock down Noah Claypole in the undertaker shop?',
        options: [
          'Because Noah cruelly insulted and mocked Oliver\'s beloved deceased mother',
          'Because Noah stole Oliver\'s breakfast bowl of fresh strawberries and milk',
          'Because Mr. Sowerberry asked them to practice a boxing match',
          'Because Oliver wanted to take Noah\'s fine velvet coat'
        ],
        explanation: 'Oliver was gentle, but he fiercely defended his mother\'s memory when Noah insulted her.',
        visualClueEmoji: '🛡️'
      }
    },
    {
      day: 3,
      title: 'The Artful Dodger & Fagin\'s Lair',
      subtitle: 'Meeting Jack Dawkins at Barnet and entering London by night',
      summary: 'Limping and famished at Barnet, Oliver meets Jack Dawkins, known as the Artful Dodger, who guides him into London to meet the eccentric old gentleman Fagin.',
      illustrationType: 'fagin_den',
      sceneCaption: 'Fagin fries sausages over a smoky fire in his dark den as the boys show their treasures!',
      avatars: [
        { name: 'The Dodger', emoji: '🎩', speech: 'Cheer up, mate! I know a respectable gent in London who will give you free lodgings!', position: 'left' },
        { name: 'Fagin', emoji: '🧔', speech: 'Welcome, my dear Oliver! Come warm yourself by our merry fire!', position: 'right' }
      ],
      hotspots: [
        { id: 'ot5', x: 30, y: 40, label: 'Dodger Oversized Hat', icon: '🎩', soundEffect: 'bounce', funFact: 'The Dodger wore a man coat with sleeves rolled up and a hat stuck on the back of his head.', action: 'bounce' },
        { id: 'ot6', x: 75, y: 55, label: 'Frying Pan Sausages', icon: '🍳', soundEffect: 'coin', funFact: 'Fagin cooked sausages in an iron skillet over a charcoal brazier for his boys.', action: 'sparkle' }
      ],
      scrambleWord: 'DODGER',
      vocab: [
        { word: 'Peculiar', phonics: 'pih-KYOOL-yer', definition: 'Strange, odd, or unusual in character or appearance.', funExample: 'The boy wore a peculiar long coat that dragged on the ground.', emoji: '🧐' },
        { word: 'Handkerchief', phonics: 'HANG-ker-chif', definition: 'A small square of fabric used for wiping the nose or eyes.', funExample: 'Silk handkerchiefs hung drying on a line across the smoky ceiling.', emoji: '🧣' },
        { word: 'Nimble', phonics: 'NIM-buhl', definition: 'Quick and light in movement or action.', funExample: 'The nimble Dodger danced across the muddy London stones.', emoji: '🏃' }
      ],
      pages: [
        {
          pageTitle: 'The Stranger at Barnet',
          paras56: [
            'Oliver walked for seven weary days. His feet were bruised and cut, and his little pennies were all gone.',
            'At the town of Barnet, just outside London, he sat on a cold stone doorstep, too tired to take another step.',
            'A boy with a peculiar rolling swagger approached. He wore an adult coat with sleeves turned back, a crushed top hat, and the sharpest eyes Oliver had ever seen.'
          ],
          paras78: [
            'On the seventh morning, Oliver limped into Barnet with bleeding feet and an empty stomach, crouching upon a milestone.',
            'He was spotted by one of the queerest looking boys that ever lived. His name was Jack Dawkins, known among his comrades as the Artful Dodger.',
            'He was a short boy with bowlegs, sharp eyes, and a peculiar swagger, dressed in a man\'s coat that reached nearly to his heels and an oversized beaver hat tilted on his brow.'
          ],
          paras9: [
            'By the seventh dawn, Oliver arrived in Barnet in a state of advanced physical exhaustion, having subsisted on water and donated crusts.',
            'He attracted the notice of Jack Dawkins, an adolescent vagabond celebrated throughout the London underworld as the Artful Dodger.',
            'The Dodger possessed a remarkably peculiar air of worldly self-possession, sporting an oversized top hat, rolled cuffs, and the shrewd, assessing demeanor of an experienced veteran of the streets.'
          ],
          dialogue: [
            { speaker: 'The Dodger', text: 'Hullo, my covey! What is the row? You look down in the mouth!', avatarEmoji: '🎩', side: 'right' },
            { speaker: 'Oliver', text: 'I have walked seventy miles, and I have had no food for days...', avatarEmoji: '🥺', side: 'left' }
          ],
          p1Question: 'What did the Artful Dodger do when he first met starving Oliver at Barnet?',
          p1Options: [
            'He bought Oliver bread and ham and offered him free lodgings in London',
            'He called the police to send Oliver back to the workhouse',
            'He stole Oliver\'s shoes and ran away into the countryside'
          ],
          p1Insight: 'Even in dark times, unexpected companions can offer warmth, though appearances may mislead.'
        },
        {
          pageTitle: 'Entering Dark London by Night',
          paras56: [
            'The Dodger bought Oliver a feast of bread, ham, and small beer at an eating house.',
            'He told Oliver he knew a sweet old gentleman in London who would let Oliver sleep in his rooms for nothing!',
            'Night was falling as they slipped through the narrow, crooked alleys of London, dodging puddles of black mud and noisy carts.'
          ],
          paras78: [
            'The Dodger treated Oliver to a hearty meal of bread and meat, assuring him that a respectable old gentleman in London would provide free shelter and employment.',
            'They entered the sprawling metropolis after nightfall, navigating filthy alleys lined with dilapidated houses and squalid shops.',
            'Oliver had never seen streets so dark, noisy, and foul-smelling, but he clung to his nimble guide as they approached Field Lane.'
          ],
          paras9: [
            'After satisfying Oliver\'s famished appetite, the Dodger dangled the prospect of complimentary lodging with a benign elderly benefactor in London.',
            'Under cover of nocturnal darkness, they penetrated the subterranean labyrinths of Saffron Hill, traversing foul gutters and decrepit tenements.',
            'The bewildering squalor and clamor of the urban slums filled Oliver with unease, yet the Dodger navigated the labyrinth with nimble familiarity.'
          ],
          dialogue: [
            { speaker: 'The Dodger', text: 'Keep close to me, Oliver! The old gent is cooking something tasty tonight!', avatarEmoji: '🎩', side: 'left' },
            { speaker: 'Oliver', text: 'It smells very strange here, but I am thankful for a warm roof.', avatarEmoji: '👦', side: 'right' }
          ]
        },
        {
          pageTitle: 'Fagin and the Sizzling Pan',
          paras56: [
            'They climbed a creaking wooden staircase into a smoky back room.',
            'An old gentleman with matted red hair was standing by the fire, holding a fork over a frying pan of sizzling sausages.',
            'Around the room were several boys smoking pipes and laughing. Rows of silk handkerchiefs hung on a line to dry like laundry.'
          ],
          paras78: [
            'The door was opened to the Dodger\'s secret whistle, and they stepped into a dim, smoke-filled garret.',
            'Standing over a charcoal fire was an elderly man in a greasy flannel gown, holding a toasting fork over a pan of bubbling sausages.',
            'He was introduced as Fagin. Several boys surrounded the table, and dozens of patterned silk handkerchiefs hung drying overhead.'
          ],
          paras9: [
            'Gaining admittance via a coded knock, Oliver crossed the threshold into a gloomy, soot-encrusted apartment.',
            'Before a charcoal brazier stood an elderly man with villainous features and tangled whiskers, toasting sausages with an iron fork.',
            'This was Fagin; around him lounged youth of Dodger\'s acquaintance, while an overhead line was draped with scores of washed silk pocket handkerchiefs.'
          ],
          dialogue: [
            { speaker: 'Fagin', text: 'Welcome, young Oliver, welcome! We are so glad to make your acquaintance, my dear!', avatarEmoji: '🧔', side: 'right' },
            { speaker: 'Oliver', text: 'Thank you, sir! The sausages smell wonderful!', avatarEmoji: '👦', side: 'left' }
          ],
          p3Question: 'What was Fagin doing when Oliver first entered the smoky den?',
          p3Options: [
            'Toasting savory sausages over a fire with an iron fork',
            'Reading a thick Latin dictionary by candlelight',
            'Painting a portrait of the King on an easel'
          ],
          p3Insight: 'Fagin disguised his illegal gang under the guise of grandfatherly hospitality.'
        }
      ],
      compQuestion: {
        question: 'Who was Jack Dawkins, and what was his famous nickname on the London streets?',
        options: [
          'A clever street boy known across London as the Artful Dodger',
          'A wealthy prince who was travelling disguised as a chimney sweep',
          'A stern schoolmaster who taught Oliver Latin grammar',
          'A palace guard who guarded the Tower of London'
        ],
        explanation: 'Jack Dawkins was known as the Artful Dodger because of his nimble tricks and street cleverness.',
        visualClueEmoji: '🎩'
      }
    },
    {
      day: 4,
      title: 'The Pocket Handkerchief Game',
      subtitle: 'A curious game of watches, rings, and nimble fingers',
      summary: 'Oliver observes Fagin and the boys playing a strange, laughing game with watches and silk handkerchiefs, unaware that he is witnessing lessons in pickpocketing.',
      illustrationType: 'pocket_game',
      sceneCaption: 'Fagin pretends to stroll like an old gentleman while the Dodger and Charley Bates pick his pockets!',
      avatars: [
        { name: 'Fagin', emoji: '🧔', speech: 'Watch how an old gentleman strolls, Oliver! See if you can take my handkerchief without a rustle!', position: 'left' },
        { name: 'Charley Bates', emoji: '😂', speech: 'Ha ha ha! The Dodger got his watch without touching the coat buttons!', position: 'right' }
      ],
      hotspots: [
        { id: 'ot7', x: 30, y: 45, label: 'Gold Pocket Watch', icon: '⏱️', soundEffect: 'bounce', funFact: 'Gentlemen kept gold watches attached to chains inside their waistcoat pockets.', action: 'bounce' },
        { id: 'ot8', x: 70, y: 60, label: 'Silk Handkerchief', icon: '🧣', soundEffect: 'coin', funFact: 'Victorian silk handkerchiefs had initials embroidered in the corners that the gang picked out with needles.', action: 'sparkle' }
      ],
      scrambleWord: 'POCKET',
      vocab: [
        { word: 'Curiosity', phonics: 'kyoo-ree-OSS-ih-tee', definition: 'A strong desire to know or learn something.', funExample: 'Oliver watched the morning game with innocent curiosity.', emoji: '🤔' },
        { word: 'Dexterity', phonics: 'deks-TAIR-ih-tee', definition: 'Skill and grace in physical movement, especially with hands.', funExample: 'The Dodger removed the silk cloth with incredible dexterity.', emoji: '🖐️' },
        { word: 'Deception', phonics: 'dih-SEP-shun', definition: 'The act of misleading or deceiving someone.', funExample: 'Oliver did not suspect the clever deception behind Fagin game.', emoji: '🎭' }
      ],
      pages: [
        {
          pageTitle: 'The Secret Box Under the Floor',
          paras56: [
            'Oliver woke up the next morning feeling warm and rested. Fagin made him a cup of hot coffee and buttered toast.',
            'While the boys were out, Fagin pulled a heavy box from a hole in the floorboards. Oliver watched with quiet curiosity.',
            'The box was full of sparkling gold watches, diamond rings, and shiny bracelets. Fagin smiled at them as if they were his dear children.'
          ],
          paras78: [
            'When Oliver awoke, the morning sun pierced through the grime of the skylight. Fagin was already boiling water for coffee.',
            'Believing the boy was still asleep, Fagin raised a trapdoor in the floor and drew forth a small tin box.',
            'With sparkling eyes and pure curiosity, Oliver watched Fagin fondle magnificent gold chronometers, jeweled pins, and diamond rings that sparkled in the dim beam of light.'
          ],
          paras9: [
            'Oliver awakened to the cheerful aroma of breakfast coffee, discovering Fagin alone in the garret.',
            'Deeming the orphan asleep, the old man extracted a hidden strongbox from beneath a concealed floorboard, handling its contents with avaricious reverence.',
            'Oliver observed through half-closed lids with breathless curiosity as Fagin admired glittering timepieces and gem-encrusted rings before hastily reburying his cache.'
          ],
          dialogue: [
            { speaker: 'Fagin', text: 'Ah! Sparklers, rings, and pretty watches! What a fine collection an industrious man can gather!', avatarEmoji: '🧔', side: 'left' },
            { speaker: 'Oliver', text: 'Good morning, sir! May I help you make the breakfast?', avatarEmoji: '👦', side: 'right' }
          ],
          p1Question: 'What did Fagin keep hidden in the secret box beneath the floorboards?',
          p1Options: [
            'Stolen gold watches, diamond rings, and sparkling jewelry',
            'Old schoolbooks and Latin dictionaries',
            'Seeds for planting a flower garden'
          ],
          p1Insight: 'Fagin was a receiver of stolen goods who trained orphaned children to steal for him.'
        },
        {
          pageTitle: 'A Very Curious Game',
          paras56: [
            'Soon, the Dodger and a merry boy named Charley Bates returned with pocketbooks and silk handkerchiefs.',
            'Fagin played a curious game. He put a watch in his waistcoat pocket and walked around the room like an old gentleman.',
            'The boys had to sneak up behind Fagin with great dexterity and pull out the watch without making him feel a touch!'
          ],
          paras78: [
            'The Dodger and young Charley Bates returned shortly, handing over several pocketbooks and fine cambric handkerchiefs.',
            'After breakfast, Fagin commenced a game of extraordinary dexterity. Putting a gold watch in his vest, he strolled up and down the floor like an elderly gentleman taking a morning walk.',
            'The Dodger and Charley followed stealthily behind, snatching the watch and handkerchief with such speed that Fagin never felt a thing, laughing heartily.'
          ],
          paras9: [
            'Following the arrival of the Dodger and Charley Bates with their morning plunder, an extraordinary exhibition of dexterity took place.',
            'Fagin draped his person with various accouterments and promenaded about the chamber, mimicking the absentminded stroll of an elderly London citizen.',
            'The two boys trailed him with feline stealth, extracting handkerchief, snuffbox, and spectacles without disturbing a single seam of his coat.'
          ],
          dialogue: [
            { speaker: 'Fagin', text: 'Did you feel anything, boys? Ha! Not a twitch! Now let young Oliver try the game!', avatarEmoji: '🧔', side: 'right' },
            { speaker: 'Oliver', text: 'You are so clever at making fun, sir! I would love to learn!', avatarEmoji: '👦', side: 'left' }
          ]
        },
        {
          pageTitle: 'Innocence in the Shadows',
          paras56: [
            'Oliver thought the game was just a funny sport to make everyone laugh.',
            'He practiced pulling Fagin\'s handkerchief and succeeded! Fagin patted Oliver on the head and gave him a shiny shilling.',
            'He told Oliver that if he practiced hard, he would grow up to be a great gentleman with his own carriage!'
          ],
          paras78: [
            'In his pure innocence, Oliver thought the exercise was an innocent game designed to sharpen wit and hand speed.',
            'He tried his hand at extracting Fagin\'s handkerchief and managed it without being caught, earning a pat on the cheek and praise.',
            'Oliver had no inkling of the deception that surrounded him, believing Fagin\'s household was the happiest and kindest place on earth.'
          ],
          paras9: [
            'In his total moral innocence, Oliver regarded the proceeding as an ingenious parlor amusement designed to cultivate dexterity.',
            'He attempted the maneuver himself, successfully abstracting the silk handkerchief to Fagin\'s effusive approbation.',
            'Completely oblivious to the sinister deception beneath this pantomime, Oliver rejoiced in having found mentors who seemed as cheerful as they were affectionate.'
          ],
          dialogue: [
            { speaker: 'Fagin', text: 'You will be a great man, Oliver! You will make your fortune like the Dodger!', avatarEmoji: '🧔', side: 'left' },
            { speaker: 'Charley Bates', text: 'Look at the greenhorn! He does it as neat as wax! Ha ha ha!', avatarEmoji: '😂', side: 'right' }
          ],
          p3Question: 'What did innocent Oliver believe Fagin\'s handkerchief game really was?',
          p3Options: [
            'A fun and cheerful parlor game to practice nimble fingers and make people laugh',
            'A serious training academy for the royal military',
            'A cooking test to see who could bake bread faster'
          ],
          p3Insight: 'Oliver\'s pure heart prevented him from recognizing the crime occurring right before his eyes.'
        }
      ],
      compQuestion: {
        question: 'What was the true, secret purpose behind Fagin\'s game with the silk handkerchiefs and watches?',
        options: [
          'To train the boys in the art of picking pockets without being noticed by victims',
          'To teach the boys how to properly clean and iron gentleman\'s clothing',
          'To audition the boys for a musical play in London\'s West End theaters',
          'To test if Oliver was strong enough to become a blacksmith like Joe Gargery'
        ],
        explanation: 'Fagin used the game to train young boys to steal watches and silk handkerchiefs from wealthy pedestrians.',
        visualClueEmoji: '🖐️'
      }
    },
    {
      day: 5,
      title: 'The Bookstall & Kind Mr. Brownlow',
      subtitle: 'Confusion at the bookstall and rescue from the court',
      summary: 'Oliver accompanies the boys into the street, witnesses them steal a gentleman\'s handkerchief, runs in panic, and is rescued by the kindly victim, Mr. Brownlow.',
      illustrationType: 'brownlow_library',
      sceneCaption: 'Mr. Brownlow gazes down kindly at feverish Oliver in his quiet, book-lined study!',
      avatars: [
        { name: 'Mr. Brownlow', emoji: '👴', speech: 'Poor boy, there is something in his gentle face that touches my very soul!', position: 'right' },
        { name: 'Oliver', emoji: '👦', speech: 'I did not take the handkerchief, sir, I promise on my life!', position: 'left' }
      ],
      hotspots: [
        { id: 'ot9', x: 25, y: 55, label: 'Clerkenwell Bookstall', icon: '📚', soundEffect: 'magic', funFact: 'Mr. Brownlow was absorbed in reading an old book when his pocket was picked.', action: 'sparkle' },
        { id: 'ot10', x: 75, y: 40, label: 'Brownlow Fireplace Tea', icon: '🫖', soundEffect: 'coin', funFact: 'Mrs. Bedwin, the kind housekeeper, brewed hot broth and tea for sick Oliver.', action: 'bounce' }
      ],
      scrambleWord: 'RESCUE',
      vocab: [
        { word: 'Compassion', phonics: 'kum-PASH-un', definition: 'Sympathetic pity and concern for the misfortunes of others.', funExample: 'Mr. Brownlow looked upon the pale orphan with deep compassion.', emoji: '💖' },
        { word: 'Tumult', phonics: 'TOO-mult', definition: 'A loud, confused noise, especially one caused by a large mass of people.', funExample: 'A great tumult arose as the crowd chased Oliver through the streets.', emoji: '🏃' },
        { word: 'Benefactor', phonics: 'BEN-uh-fak-ter', definition: 'A generous person who gives help, money, or kindness to another.', funExample: 'Kind Mr. Brownlow became Oliver true protector and benefactor.', emoji: '🤝' }
      ],
      pages: [
        {
          pageTitle: 'The Crime at the Bookstall',
          paras56: [
            'At last, Fagin let Oliver go out for a walk with the Dodger and Charley Bates.',
            'At Clerkenwell Green, an elderly gentleman with gold spectacles stood reading outside a little bookstall.',
            'Suddenly, Oliver saw the Dodger reach his nimble hand into the gentleman\'s pocket, pull out a silk handkerchief, and sprint away!'
          ],
          paras78: [
            'Oliver was permitted to accompany the Dodger and Charley Bates on a stroll through the busy streets.',
            'At Clerkenwell Green, they noticed an elderly, benevolent-looking gentleman absorbed in reading an old book at a stall.',
            'To Oliver\'s utter horror, the Dodger crept forward, plunged his hand into the gentleman\'s pocket, drew out a handkerchief, and darted down a side street.'
          ],
          paras9: [
            'Oliver made his initial expedition into the bustling city escorted by Jack Dawkins and Charley Bates.',
            'Near Clerkenwell Green, their attention settled upon a respectable elderly gentleman immersed in examining volumes at an open bookstall.',
            'In an instant, Oliver witnessed the mystery of the handkerchief game unmasked: the Dodger extracted the silk square from the gentleman\'s pocket and fled at top speed.'
          ],
          dialogue: [
            { speaker: 'Oliver', text: 'Oh! They are thieves! What have I done?!', avatarEmoji: '😨', side: 'left' },
            { speaker: 'Dodger', text: 'Run, Charley! The old bloke is turning round!', avatarEmoji: '🏃', side: 'right' }
          ],
          p1Question: 'What did Oliver suddenly realize when the Dodger snatched the handkerchief?',
          p1Options: [
            'That the boys were pickpockets and Fagin was a master of thieves',
            'That the book was written in ancient hieroglyphics',
            'That the old gentleman was Oliver\'s long-lost uncle'
          ],
          p1Insight: 'Truth burst upon Oliver in a flash of terror and clarity.'
        },
        {
          pageTitle: 'Stop Thief! The Wild Chase',
          paras56: [
            'Oliver was so terrified that he ran as fast as his legs could carry him!',
            'The gentleman turned, missed his handkerchief, and saw Oliver running. "Stop thief!" he shouted.',
            'A great crowd of dogs, boys, and men joined the chase. A big man struck Oliver down, and the boy lay stunned in the muddy street.'
          ],
          paras78: [
            'Terrified beyond measure, Oliver took to his heels, not knowing where he fled.',
            'The old gentleman, missing his handkerchief and observing the running boy, shouted the dreaded hue and cry: "Stop thief!"',
            'A wild tumult erupted through the streets as hundreds joined the pursuit. A stout man dealt Oliver a cruel blow, knocking the breathless child into the gutter.'
          ],
          paras9: [
            'Overwhelmed with panic, Oliver sprinted blindly down the thoroughfare in a desperate effort to escape association with the crime.',
            'Perceiving the running youth, the gentleman raised the alarm, inciting the furious cry of "Stop thief!" across the neighborhood.',
            'A chaotic tumult swept through the streets until a burly drayman intercepted the exhausted child, felling him with a vicious blow to the pavement.'
          ],
          dialogue: [
            { speaker: 'Crowd', text: 'Stop thief! Stop thief! Lay hold of him!', avatarEmoji: '📢', side: 'right' },
            { speaker: 'Oliver', text: 'I didn\'t do it! Please, I didn\'t take anything!', avatarEmoji: '😭', side: 'left' }
          ]
        },
        {
          pageTitle: 'The Magistrate and the Bookstall Keeper',
          paras56: [
            'Oliver was dragged before a harsh magistrate named Mr. Fang, who wanted to send him to prison for hard labor.',
            'Just then, the bookstall keeper rushed in and shouted: "Stop! I saw it all! It was another boy who stole the handkerchief!"',
            'Oliver fainted from high fever. The kind gentleman, Mr. Brownlow, took the sick boy into his carriage with deep compassion and drove him home.'
          ],
          paras78: [
            'Oliver was dragged before the tyrannical magistrate Mr. Fang, who refused to listen and sentenced him to three months of hard labour.',
            'At that critical moment, the owner of the bookstall burst into the courtroom, declaring that two other boys had committed the theft.',
            'Oliver collapsed in a dead faint upon the courtroom floor. Moved by immense compassion, Mr. Brownlow placed the feverish child in a coach and carried him to his quiet residence in Pentonville.'
          ],
          paras9: [
            'The prisoner was hauled before Mr. Fang, an irascible magistrate notorious for summary cruelty.',
            'As Fang pronounced a sentence of hard labor, the proprietor of the bookstall burst forward, testifying that two other youths had perpetrated the larceny.',
            'Overcome by fever and terror, Oliver lost consciousness. Moved by profound compassion and an uncanny recognition in the child\'s countenance, Mr. Brownlow had the invalid conveyed to his peaceful home.'
          ],
          dialogue: [
            { speaker: 'Bookseller', text: 'Stop! I saw the whole affair! This boy never touched the handkerchief!', avatarEmoji: '📖', side: 'left' },
            { speaker: 'Mr. Brownlow', text: 'Poor child! He is burning with fever. Bring him to my carriage at once!', avatarEmoji: '👴', side: 'right' }
          ],
          p3Question: 'Who saved Oliver from being sent to prison by the harsh magistrate Mr. Fang?',
          p3Options: [
            'The honest bookstall keeper who witnessed the real thieves steal the handkerchief',
            'Fagin dressed in a judge\'s black robe',
            'Noah Claypole who apologized for everything'
          ],
          p3Insight: 'Honesty and evidence saved Oliver from terrible injustice.'
        }
      ],
      compQuestion: {
        question: 'How did Mr. Brownlow treat Oliver after the confusion at the bookstall was cleared?',
        options: [
          'With gentle compassion, taking the feverish boy into his peaceful home to nurse him back to health',
          'He sent Oliver back to the Kent workhouse in leg irons',
          'He demanded that Oliver pay him twenty gold sovereigns for the lost handkerchief',
          'He forced Oliver to sweep all the chimneys on his street'
        ],
        explanation: 'Mr. Brownlow saw Oliver\'s innocence and gentleness, taking him home in his carriage to nurse his fever.',
        visualClueEmoji: '💖'
      }
    },
    {
      day: 6,
      title: 'The Portrait & The Five-Pound Note',
      subtitle: 'A sweet face on the wall and an ambush in the street',
      summary: 'Recovering in Mr. Brownlow\'s peaceful home, Oliver notices a mysterious portrait of a sweet lady. Sent on an errand with books and money, he is ambushed by Fagin\'s gang.',
      illustrationType: 'portrait_room',
      sceneCaption: 'Oliver gazes up at the portrait of the beautiful lady while holding Mr. Brownlow\'s books!',
      avatars: [
        { name: 'Mrs. Bedwin', emoji: '👵', speech: 'Look at the sweet boy! His eyes are the very spit of the lady in the painting!', position: 'left' },
        { name: 'Bill Sikes', emoji: '🐕', speech: 'Come along, young viper! You won\'t squeak on us to your fancy friends!', position: 'right' }
      ],
      hotspots: [
        { id: 'ot11', x: 30, y: 40, label: 'Lady Portrait Painting', icon: '🖼️', soundEffect: 'magic', funFact: 'The lady in the portrait had the exact same gentle eyes and forehead as Oliver.', action: 'sparkle' },
        { id: 'ot12', x: 75, y: 60, label: 'Five Pound Banknote', icon: '💷', soundEffect: 'coin', funFact: 'Five pounds in Victorian times was worth several months of an average worker wages.', action: 'bounce' }
      ],
      scrambleWord: 'PORTRAIT',
      vocab: [
        { word: 'Likeness', phonics: 'LIKE-nis', definition: 'The fact or quality of being alike; a portrait or resemblance.', funExample: 'The painted portrait bore a striking likeness to young Oliver.', emoji: '🖼️' },
        { word: 'Betrayal', phonics: 'bih-TRAY-ul', definition: 'The breaking or violation of trust or confidence.', funExample: 'Mr. Grimwig wrongly predicted Oliver would commit a betrayal.', emoji: '💔' },
        { word: 'Faithful', phonics: 'FAYTH-ful', definition: 'Steadfast in affection, allegiance, or duty.', funExample: 'Oliver was determined to be faithful to his kind protector.', emoji: '🌟' }
      ],
      pages: [
        {
          pageTitle: 'A Haven of Peace and Kindness',
          paras56: [
            'For many days, Oliver lay in a clean, soft bed with white curtains. Kind Mrs. Bedwin gave him warm broth.',
            'When he sat up, he saw a portrait of a beautiful young lady on the wall. Her face was sweet and sad.',
            'Every time Oliver looked at the painting, his heart thumped. Her eyes looked at him with tender love.'
          ],
          paras78: [
            'For several days Oliver hovered between life and death, nursed tenderly by Mrs. Bedwin, the motherly housekeeper.',
            'When his fever broke, he was seated in an armchair opposite the portrait of a lovely lady with sorrowful, beautiful eyes.',
            'Mrs. Bedwin gasped when she looked from the portrait to Oliver: the eyes, the brow, the shape of the mouth were an astonishing likeness of the boy.'
          ],
          paras9: [
            'Convalescing in the immaculate tranquility of Mr. Brownlow\'s residence, Oliver experienced human kindness for the first time.',
            'His attention was repeatedly drawn to an oil portrait of a young woman possessed of singular grace and melancholic beauty.',
            'Both Mr. Brownlow and his housekeeper were arrested by the startling likeness between the painted countenance and the living child.'
          ],
          dialogue: [
            { speaker: 'Mrs. Bedwin', text: 'Bless his sweet heart! Look, sir, he has her very eyes and smile!', avatarEmoji: '👵', side: 'left' },
            { speaker: 'Oliver', text: 'I feel as though she were smiling right at me, ma\'am.', avatarEmoji: '👦', side: 'right' }
          ],
          p1Question: 'What startled Mrs. Bedwin when she looked from the painted portrait to Oliver?',
          p1Options: [
            'The painting had the exact same eyes, forehead, and sweet expression as Oliver',
            'The lady in the painting was wearing an apron just like Mrs. Bedwin',
            'The picture fell off the wall and cracked the tea tray'
          ],
          p1Insight: 'Dickens dropped subtle clues about Oliver\'s true family heritage.'
        },
        {
          pageTitle: 'The Test of Trust',
          paras56: [
            'Mr. Brownlow bought Oliver a fine suit of new clothes, a neat cap, and shiny leather shoes.',
            'A grumpy friend named Mr. Grimwig visited. He claimed all street boys were ungrateful and would run away with money.',
            'To prove Oliver\'s honesty, Mr. Brownlow gave the boy some valuable books to return and a crisp five-pound note to pay the bookseller.'
          ],
          paras78: [
            'Oliver was dressed in a new suit of clothes, shedding his workhouse rags forever.',
            'Mr. Grimwig, an eccentric friend of Brownlow\'s who was always threatening to eat his own head, expressed cynicism regarding the boy\'s loyalty.',
            'To vindicate the child, Mr. Brownlow entrusted Oliver with two volumes to return to the bookstall and a five-pound note, sending him into the sunshine with high confidence.'
          ],
          paras9: [
            'Outfitted in respectable attire, Oliver appeared the picture of refined innocence.',
            'Mr. Grimwig, a crusty cynic who perpetually wagered his own head upon his pessimistic predictions, challenged Brownlow\'s confidence in the foundling.',
            'Eager to demonstrate Oliver\'s faithful character, Mr. Brownlow dispatched the boy with five pounds and several parcels of books to settle an account with the Clerkenwell vendor.'
          ],
          dialogue: [
            { speaker: 'Mr. Grimwig', text: 'He will run away with your books and your money! If he comes back, I will eat my head!', avatarEmoji: '🎩', side: 'right' },
            { speaker: 'Oliver', text: 'I will be back in twenty minutes, sir! You may count upon me!', avatarEmoji: '👦', side: 'left' }
          ]
        },
        {
          pageTitle: 'Ambush in the Dark Alley',
          paras56: [
            'Oliver walked happily down the sunny street, proud to carry out the errand for his dear benefactor.',
            'Suddenly, a young woman in an apron seized him around the neck, screaming: "Oh, Oliver, my dear lost brother! Come home!"',
            'It was Nancy, working for Fagin! Then a fierce man named Bill Sikes and his savage dog grabbed Oliver and dragged him into a dark alley.'
          ],
          paras78: [
            'Oliver turned down a narrow lane near Whitechapel, eager to complete his mission and prove his devotion.',
            'Without warning, a young woman threw her arms around him, crying hysterically to the bystanders that she had found her runaway brother.',
            'It was Nancy, acting on Fagin\'s orders! Before Oliver could cry out, Bill Sikes and his vicious dog Bull\'s-eye seized him, stripping his new clothes and plunging him back into darkness.'
          ],
          paras9: [
            'Proceeding through a secluded passage, Oliver was abruptly ambushed by Nancy, who staged a sensational scene of fraternal reclamation before curious onlookers.',
            'Ere Oliver could articulate a protest or appeal for rescue, the brutal burglar Bill Sikes materialized with his vicious white terrier.',
            'Coerced by threats of murder, Oliver was stripped of his new apparel, his books, and the five-pound note, delivered once more into Fagin\'s clutching hands.'
          ],
          dialogue: [
            { speaker: 'Nancy', text: 'Oh, you naughty boy! Mother has been crying her eyes out for you! Come along home!', avatarEmoji: '👩', side: 'left' },
            { speaker: 'Oliver', text: 'Help! Help! I do not know these people! The books belong to Mr. Brownlow!', avatarEmoji: '😭', side: 'right' }
          ],
          p3Question: 'Who ambushed Oliver in the street and dragged him back to Fagin\'s gang?',
          p3Options: [
            'Nancy and the fierce burglar Bill Sikes with his dog Bull\'s-eye',
            'Mr. Bumble who chased him in a horse-drawn coach',
            'The workhouse master with his copper ladle'
          ],
          p3Insight: 'Even when captured, Oliver thought only of not letting down his kind benefactor.'
        }
      ],
      compQuestion: {
        question: 'What important task did Mr. Brownlow entrust to Oliver to prove the boy\'s honesty?',
        options: [
          'To return several valuable books and deliver a five-pound note to the Clerkenwell bookstall',
          'To guard the strongbox of jewels in the library overnight',
          'To travel across the ocean to America to buy tea',
          'To sell newspapers at London Bridge station'
        ],
        explanation: 'Mr. Brownlow trusted Oliver with valuable books and a five-pound note to settle his account at the bookstall.',
        visualClueEmoji: '💷'
      }
    },
    {
      day: 7,
      title: "Nancy's Brave Midnight Journey",
      subtitle: 'The secret meeting on the dark stone steps of London Bridge',
      summary: 'Deeply moved by Oliver\'s innocence, Nancy risks her life to meet Mr. Brownlow and Rose Maylie on London Bridge at midnight, revealing the plot against the boy.',
      illustrationType: 'london_bridge_night',
      sceneCaption: 'Nancy speaks in hushed tones to Rose and Mr. Brownlow on the misty stone steps of London Bridge!',
      avatars: [
        { name: 'Nancy', emoji: '👩', speech: 'Oliver is innocent as an angel! A villain named Monks wants him destroyed for his inheritance!', position: 'left' },
        { name: 'Rose Maylie', emoji: '🌹', speech: 'Brave Nancy, let us help you escape this dangerous life!', position: 'right' }
      ],
      hotspots: [
        { id: 'ot13', x: 30, y: 55, label: 'London Bridge Stone Steps', icon: '🌉', soundEffect: 'bounce', funFact: 'The stone steps led down to the dark Thames water where boats were moored in fog.', action: 'bounce' },
        { id: 'ot14', x: 70, y: 40, label: 'Midnight Big Ben Bell', icon: '🕰️', soundEffect: 'magic', funFact: 'The heavy bell of St. Paul\'s Cathedral tolled midnight across the river.', action: 'sparkle' }
      ],
      scrambleWord: 'BRIDGE',
      vocab: [
        { word: 'Sacrifice', phonics: 'SAK-rih-fise', definition: 'An act of giving up something valuable for the sake of something more important.', funExample: 'Nancy made a heroic sacrifice to protect innocent Oliver.', emoji: '🕊️' },
        { word: 'Archway', phonics: 'ARTCH-way', definition: 'A curved structure forming a passage or entrance.', funExample: 'They stood under the dark stone archway beneath the bridge.', emoji: '🏛️' },
        { word: 'Midnight', phonics: 'MID-nite', definition: 'Twelve o\'clock at night; the middle of the night.', funExample: 'The clocks struck midnight across the misty river Thames.', emoji: '🌙' }
      ],
      pages: [
        {
          pageTitle: 'A Heart Awakened to Goodness',
          paras56: [
            'Back at Fagin\'s den, Oliver wept for Mr. Brownlow. He feared his kind friend would think he was a wicked thief.',
            'When Bill Sikes set his vicious dog on Oliver, Nancy jumped between them, shouting: "You shall not hurt the boy!"',
            'Nancy had lived a hard life of crime, but Oliver\'s pure heart touched something tender inside her soul.'
          ],
          paras78: [
            'Oliver was returned to the squalid den, weeping bitterly that Mr. Brownlow would believe he had run away with the money.',
            'When Sikes attempted to strike the child with his cudgel, Nancy sprang forward like a fury, defending Oliver at the peril of her own life.',
            'Though raised in crime and misery, Nancy possessed a noble spark of compassion that Oliver\'s innocence had fanned into flame.'
          ],
          paras9: [
            'Confined again within Fagin\'s clutches, Oliver\'s primary anguish was the certainty that his benefactor would despise his memory as a perfidious thief.',
            'When Sikes threatened the lad with his ferocious mastiff, Nancy interposed her own body, defying the tyrant with passionate resolve.',
            'Oliver\'s uncorrupted virtue had awakened in Nancy\'s degraded soul a fierce determination to shield the child from destruction, whatever the personal cost.'
          ],
          dialogue: [
            { speaker: 'Nancy', text: 'I won\'t stand by and see him beaten! He is a sweet child, better than all of us!', avatarEmoji: '👩', side: 'left' },
            { speaker: 'Fagin', text: 'Quiet, girl! You will ruin us all with your foolish tears!', avatarEmoji: '🧔', side: 'right' }
          ],
          p1Question: 'Why did Nancy courageously defend Oliver from Bill Sikes and Fagin?',
          p1Options: [
            'Because Oliver\'s pure innocence awakened the goodness and compassion in her heart',
            'Because Fagin promised to give her a thousand gold coins',
            'Because she wanted to adopt Oliver and become a schoolteacher'
          ],
          p1Insight: 'Charles Dickens believed that even in the darkest circumstances, the human soul could choose goodness.'
        },
        {
          pageTitle: 'The Mysterious Villain Monks',
          paras56: [
            'A dark, sinister man named Monks visited Fagin. Oliver heard him whisper about destroying a golden locket.',
            'Monks wanted Oliver to become a thief so the boy would be thrown into prison and lose his rightful name.',
            'Nancy overheard everything through a keyhole. She knew she had to warn Oliver\'s friends before it was too late.'
          ],
          paras78: [
            'A shadowy figure named Monks arrived at the den, his face twisted with malice and dark hatred toward Oliver.',
            'Nancy eavesdropped and discovered that Monks had purchased a gold locket containing Oliver\'s mother\'s name and thrown it into the river.',
            'Monks sought to ruin Oliver so that the boy could never inherit his father\'s vast fortune, leaving Monks with all the wealth.'
          ],
          paras9: [
            'A malignant confederate named Monks held secret conclaves with Fagin, exhibiting an obsessive animosity toward the orphan.',
            'Overhearing their nocturnal council, Nancy learned that Monks had tracked down and cast into the river a golden locket proving Oliver\'s legitimate birth.',
            'His scheme was to lure Oliver into felony so that criminal conviction would forfeit the boy\'s legal claim to his father\'s estate.'
          ],
          dialogue: [
            { speaker: 'Monks', text: 'Make him a thief! Put him in the dock! He must never know who his father was!', avatarEmoji: '👤', side: 'left' },
            { speaker: 'Nancy', text: 'I must find Mr. Brownlow... I cannot let them destroy this boy.', avatarEmoji: '👩', side: 'right' }
          ]
        },
        {
          pageTitle: 'The Midnight Meeting on the Steps',
          paras56: [
            'At midnight, Nancy slipped away to London Bridge, where church bells were tolling in the dark mist.',
            'Waiting under the stone archway were kind Mr. Brownlow and a sweet, beautiful lady named Rose Maylie.',
            'Nancy told them everything about Monks and the secret locket, refusing any money or escape for herself.'
          ],
          paras78: [
            'At the stroke of midnight, Nancy met Mr. Brownlow and the angelic Rose Maylie on the cold stone steps of London Bridge.',
            'The river Thames lapped against the slimy stone piles below as Nancy revealed the entire conspiracy orchestrated by Monks.',
            'Rose begged Nancy to let them rescue her from her wretched companions, but Nancy refused with noble sacrifice, returning to face her fate.'
          ],
          paras9: [
            'Beneath the foggy arches of London Bridge, as the bell of St. Paul\'s struck the midnight hour, Nancy met Mr. Brownlow and Rose Maylie.',
            'Descending the slippery stone staircase toward the water\'s edge, she disclosed the full particulars of Monks\' conspiracy against Oliver\'s inheritance.',
            'Though Rose implored her to accept sanctuary and an honorable life, Nancy declined with tragic sacrifice, choosing to return to her world.'
          ],
          dialogue: [
            { speaker: 'Rose Maylie', text: 'Dear Nancy, come with us tonight! We can give you a safe, happy home far from here!', avatarEmoji: '🌹', side: 'right' },
            { speaker: 'Nancy', text: 'No, miss... I cannot leave him. But save Oliver! He is pure and good!', avatarEmoji: '👩', side: 'left' }
          ],
          p3Question: 'Where did Nancy meet Mr. Brownlow and Rose Maylie to reveal the plot against Oliver?',
          p3Options: [
            'On the dark stone steps of London Bridge at the stroke of midnight',
            'Inside the royal dining room at Buckingham Palace',
            'At the parish workhouse gates in Kent'
          ],
          p3Insight: 'Nancy\'s courage became the turning point that saved Oliver\'s life and legacy.'
        }
      ],
      compQuestion: {
        question: 'Why did brave Nancy secretly meet Mr. Brownlow and Rose Maylie on London Bridge at midnight?',
        options: [
          'To protect Oliver from harm by revealing the secret conspiracy of Monks and Fagin',
          'To sell them a basket of stolen silver spoons from the kitchen',
          'To ask Mr. Brownlow for a job as a ship captain on the Thames',
          'To guide them to a hidden pirate treasure buried in the river'
        ],
        explanation: 'Nancy risked her own safety to reveal Monks\' plot to ruin Oliver, ensuring the boy would be rescued.',
        visualClueEmoji: '🌉'
      }
    },
    {
      day: 8,
      title: 'The Secret Heritage & A Peaceful Home',
      subtitle: 'The truth revealed, adoption, and a garden of love',
      summary: 'Monks is unmasked and forced to confess. Oliver discovers his true name and inheritance, and is legally adopted by kind Mr. Brownlow to live in joy.',
      illustrationType: 'peaceful_parsonage',
      sceneCaption: 'Oliver runs across the sunny garden lawn into the loving arms of Mr. Brownlow and Rose!',
      avatars: [
        { name: 'Oliver', emoji: '👦', speech: 'I have a real father and a true home at last!', position: 'left' },
        { name: 'Mr. Brownlow', emoji: '👴', speech: 'You are my own son now, Oliver, and nothing shall ever separate us!', position: 'right' }
      ],
      hotspots: [
        { id: 'ot15', x: 30, y: 55, label: 'Country Cottage Garden', icon: '🏡', soundEffect: 'magic', funFact: 'Oliver moved to a peaceful country village with Rose, Harry, and Mr. Brownlow.', action: 'sparkle' },
        { id: 'ot16', x: 70, y: 45, label: 'Inheritance Legal Will', icon: '📜', soundEffect: 'coin', funFact: 'Oliver received a generous inheritance left to him by his true father, Edwin Leeford.', action: 'bounce' }
      ],
      scrambleWord: 'HERITAGE',
      vocab: [
        { word: 'Inheritance', phonics: 'in-HAIR-ih-tuns', definition: 'Property, money, or a title received upon someone\'s death.', funExample: 'Oliver divided his rightful inheritance generously with Monks.', emoji: '📜' },
        { word: 'Sanctuary', phonics: 'SANK-choo-air-ee', definition: 'A place of safety, refuge, or quiet protection.', funExample: 'The sunny country cottage was a true sanctuary for Oliver.', emoji: '🏡' },
        { word: 'Gratitude', phonics: 'GRAT-ih-tood', definition: 'The feeling of being thankful and appreciative.', funExample: 'Oliver heart was filled with boundless love and gratitude.', emoji: '🙏' }
      ],
      pages: [
        {
          pageTitle: 'Monks Unmasked',
          paras56: [
            'With Nancy\'s clues, Mr. Brownlow captured the villain Monks and brought him to his library.',
            'Mr. Brownlow revealed the great secret: Monks was really Oliver\'s older half-brother, Edward Leeford!',
            'Their father had loved Oliver\'s mother, Agnes, and left a large fortune in his will for little Oliver.'
          ],
          paras78: [
            'Armed with the evidence Nancy provided, Mr. Brownlow cornered Monks and compelled a full confession.',
            'Monks was unmasked as Edward Leeford, Oliver\'s half-brother, whose mother had separated from his father years before.',
            'Their father had died leaving a will bequeathing a handsome inheritance to young Oliver, provided the boy grew up without a stain upon his name.'
          ],
          paras9: [
            'Confronted by Mr. Brownlow with incontrovertible evidence, the craven Monks capitulated and delivered a complete deposition.',
            'Monks was revealed to be Edward Leeford, the elder son of Brownlow\'s dearest companion; Oliver was his half-brother, born to Agnes Fleming.',
            'The father had bequeathed a substantial estate to the unborn Oliver, which Monks had sought to defraud by thrusting the child into a life of crime.'
          ],
          dialogue: [
            { speaker: 'Mr. Brownlow', text: 'You knew your brother was alive, and you sought to destroy him for gold!', avatarEmoji: '👴', side: 'left' },
            { speaker: 'Monks', text: 'I confess everything... Let me take my share of the money and leave England forever!', avatarEmoji: '👤', side: 'right' }
          ],
          p1Question: 'Who was the mysterious villain Monks revealed to be?',
          p1Options: [
            'Oliver\'s older half-brother, who wanted to steal the family inheritance',
            'The King\'s royal tax collector from Scotland',
            'The original founder of the parish workhouse'
          ],
          p1Insight: 'Truth prevailed, exposing the greed that had caused Oliver so much suffering.'
        },
        {
          pageTitle: 'Justice and Farewell to the Past',
          paras56: [
            'The wicked gang was broken up by the police. Fagin and his companions could never hurt another child.',
            'Even though Monks had tried to ruin him, kind Oliver gave half of his inheritance money to his brother so he could start a new life.',
            'Oliver visited his old parish town one last time to say a prayer at his mother\'s memorial.'
          ],
          paras78: [
            'The law swiftly dissolved Fagin\'s den of thieves, bringing an end to the dark empire of pickpockets.',
            'Oliver demonstrated his saintly nature by forgiving Monks, insisting that half of the paternal estate be granted to his wayward brother.',
            'Oliver revisited the workhouse village, weeping at the grave of little Dick, who had passed away to a gentler world, free from cold and hunger.'
          ],
          paras9: [
            'Retribution dismantled the criminal syndicate, liberating the innocent and consigning the guilty to the justice of the courts.',
            'With noble magnanimity, Oliver consented to divide the contested patrimony with Monks, enabling his brother to seek rehabilitation abroad.',
            'Returning to his natal parish, Oliver shed tears of sorrow over the humble resting place of his beloved comrade little Dick.'
          ],
          dialogue: [
            { speaker: 'Mr. Brownlow', text: 'You are generous to a fault, Oliver. You give gold to one who plotted your doom.', avatarEmoji: '👴', side: 'right' },
            { speaker: 'Oliver', text: 'He is my father\'s son, sir. I wish him only peace and repentance.', avatarEmoji: '👦', side: 'left' }
          ]
        },
        {
          pageTitle: 'A Son, A Home, A Happy Life',
          paras56: [
            'Mr. Brownlow legally adopted Oliver as his own beloved son!',
            'They moved to a beautiful country cottage with Rose Maylie and her husband Harry, surrounded by green lawns and fragrant roses.',
            'Oliver learned to read, rode ponies through the woods, and knew that after all the dark trials, love and goodness had won forever.'
          ],
          paras78: [
            'Mr. Brownlow formally adopted Oliver Twist as his own son, filling the empty places in both their hearts.',
            'They settled in a tranquil country village near the parsonage of Rose and Harry Maylie, surrounded by flowering meadows and singing birds.',
            'Oliver grew in stature, wisdom, and boundless joy, surrounded by friends whose affection shielded him forever from the cold stones of the past.'
          ],
          paras9: [
            'Mr. Brownlow formalized the legal adoption of Oliver as his legitimate heir and beloved son, cementing an enduring bond of mutual devotion.',
            'They established their sanctuary within a pastoral hamlet adjacent to Rose and Harry Maylie\'s rural parish, surrounded by orchards and woodland paths.',
            'Through every succeeding year, Oliver\'s gentle spirit blossomed in the sunshine of domestic affection, a living testament that pure innocence shall forever triumph over the darkest adversity.'
          ],
          dialogue: [
            { speaker: 'Mr. Brownlow', text: 'You are my dear son now, Oliver. This home and everything in it belongs to you.', avatarEmoji: '👴', side: 'right' },
            { speaker: 'Oliver', text: 'My heart is so full of happiness! God bless everyone who showed me kindness!', avatarEmoji: '👦', side: 'left' }
          ],
          p3Question: 'How does Oliver Twist\'s story conclude in joy and peace?',
          p3Options: [
            'Mr. Brownlow legally adopts Oliver as his son, and they live happily in a peaceful country cottage',
            'Oliver returns to the workhouse to become the headmaster',
            'Oliver becomes a sailor and travels around the world forever'
          ],
          p3Insight: 'Love, kindness, and honest courage conquered all adversity.'
        }
      ],
      compQuestion: {
        question: 'How does the heartwarming conclusion of Oliver Twist bring peace and happiness to the young boy?',
        options: [
          'Mr. Brownlow legally adopts Oliver, his true name and inheritance are restored, and they live in a peaceful country home',
          'Oliver buys the workhouse and turns it into a giant candy factory with chocolate rivers',
          'Oliver runs away to sea and becomes a pirate captain on the Spanish Main',
          'Noah Claypole becomes the town mayor and gives Oliver a golden chariot'
        ],
        explanation: 'Oliver is adopted by kind Mr. Brownlow, discovering his noble parentage, receiving his inheritance, and living in love and peace.',
        visualClueEmoji: '🏡'
      }
    }
  ]
};

buildBook(OLIVER_SPEC);
