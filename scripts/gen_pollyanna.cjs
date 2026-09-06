const { buildBook } = require('./gen_classics_helper.cjs');

const POLLYANNA_SPEC = {
  fileName: 'src/data/pollyannaData.ts',
  varName: 'POLLYANNA_BOOK',
  id: 'pollyanna',
  title: 'Pollyanna',
  author: 'Eleanor H. Porter',
  badgeTitle: 'Glad Game Champion & Sunbeam of Beldingsville',
  coverColor: 'from-amber-600 via-rose-700 to-indigo-950',
  accentColor: '#e11d48',
  borderColor: 'border-rose-400',
  themeIcon: '☀️',
  descriptions: {
    '5-6': 'Meet cheerful eleven-year-old Pollyanna Whittier! Playing her father\'s wonderful "Glad Game"—finding something to be glad about in everything—she melts strict Aunt Polly\'s heart and brings sunshine and joy to the entire town.',
    '7-8': "Eleanor H. Porter's beloved heartwarming classic! When orphaned Pollyanna arrives in Beldingsville, her infectious optimism and famous 'Glad Game' transform grumpy hermits, bedridden neighbours, and strict Aunt Polly.",
    '9+': "Eleanor H. Porter's inspiring classic of resilience, empathy, and joy. Through hardship and heartbreak, Pollyanna's unwavering 'Glad Game' revitalizes a weary New England community and demonstrates the invincible power of gratitude."
  },
  chapters: [
    {
      day: 1,
      title: 'Miss Polly Harrington & The Attic Room',
      subtitle: 'A duty performed without warmth and a bare attic room',
      summary: 'Stern, wealthy Miss Polly Harrington agrees out of stern family duty to take in her newly orphaned eleven-year-old niece Pollyanna, preparing a bare, stuffy attic room for her arrival.',
      illustrationType: 'attic_window',
      sceneCaption: 'Miss Polly stands stiffly in her elegant parlour while housemaid Nancy dusts the grand mahogany furniture!',
      avatars: [
        { name: 'Miss Polly', emoji: '👩‍🦳', speech: 'I hope I know my duty, Nancy! She will sleep up in the attic room.', position: 'right' },
        { name: 'Nancy', emoji: '🧹', speech: 'Poor little lamb, put up in that hot garret under the roof!', position: 'left' }
      ],
      hotspots: [
        { id: 'po1', x: 35, y: 55, label: 'Attic Window', icon: '🪟', soundEffect: 'bounce', funFact: 'The attic room had no carpet or pictures, but it looked out over green trees and the distant river!', action: 'bounce' },
        { id: 'po2', x: 75, y: 40, label: 'Dusting Cloth', icon: '🧹', soundEffect: 'magic', funFact: 'Nancy had to dust Miss Polly\'s parlour every morning at eight o\'clock sharp!', action: 'sparkle' }
      ],
      scrambleWord: 'DUTY',
      vocab: [
        { word: 'Duty', phonics: 'DOO-tee', definition: 'A moral or legal obligation; something one feels compelled to do because it is right.', funExample: 'Miss Polly accepted the orphan strictly out of a stern sense of duty.', emoji: '📜' },
        { word: 'Garret', phonics: 'GAIR-it', definition: 'A top-floor attic room directly under the sloping roof of a house.', funExample: 'The warm summer sun baked through the roof of the little garret.', emoji: '🏠' },
        { word: 'Austere', phonics: 'aw-STEER', definition: 'Severe, strict, or plain in manner or appearance, without comforts.', funExample: 'Miss Polly maintained an austere household with rigid rules.', emoji: '📏' }
      ],
      pages: [
        {
          pageTitle: 'Miss Polly\'s Duty',
          paras56: [
            'Miss Polly Harrington was a wealthy, serious lady who lived in the grandest white house in Beldingsville, Vermont.',
            'She did not smile very often. She believed in duty, order, and keeping every brass candlestick polished clean.',
            'One morning, she told her warmhearted maid Nancy that her sister\'s orphaned child, Pollyanna, was coming to live with them.'
          ],
          paras78: [
            'Miss Polly Harrington did not rise from her chair to greet visitors if she could help it. She was forty years old and believed intensely in family duty.',
            'Her sister had married a poor minister years ago against the family\'s wishes and moved far away to the western frontier.',
            'Now both parents were dead, leaving eleven-year-old Pollyanna alone in the world. Miss Polly resolved to provide for her niece, solely out of duty.'
          ],
          paras9: [
            'Miss Polly Harrington presided over her ancestral Beldingsville estate with unbending discipline and rigorous decorum.',
            'Years of pride and wounded family vanity had ossified her emotional life into a mechanical adherence to formal propriety.',
            'Upon receiving notification of the demise of her missionary brother-in-law, she dispatched instructions to receive the orphan Pollyanna Whittier.'
          ],
          dialogue: [
            { speaker: 'Miss Polly', text: 'Nancy, my niece will arrive tomorrow on the afternoon train. Prepare the attic bedroom.', avatarEmoji: '👩‍🦳', side: 'right' },
            { speaker: 'Nancy', text: 'Yes, ma\'am! But wouldn\'t one of the pretty guest rooms with carpets be better?', avatarEmoji: '🧹', side: 'left' }
          ],
          p1Question: 'Why did Miss Polly Harrington agree to take in her orphaned niece Pollyanna?',
          p1Options: [
            'Out of a strict, unbending sense of Christian duty to her late sister',
            'Because she was terribly lonely and wanted someone to play board games with',
            'Because she needed a helper to cook meals in the kitchen'
          ],
          p1Insight: 'Duty without warmth provided shelter, but not the love an orphan needed.'
        },
        {
          pageTitle: 'The Room Under the Roof',
          paras56: [
            'Miss Polly chose the hottest room in the whole house: the little attic garret right under the roof.',
            'There were no pretty curtains, no soft rugs on the bare yellow floor, and no colorful pictures on the plain walls.',
            'Nancy\'s kind eyes filled with tears as she made the bed with coarse white sheets, feeling sorry for the little newcomer.'
          ],
          paras78: [
            'The attic room was stiflingly hot in the summer heat, with only one small gable window looking out toward the river.',
            'Miss Polly specifically ordered that no fine furnishings or carpets be placed there, claiming children only made messes.',
            'Nancy swept the bare floorboards with fierce indignation, muttering to Timothy the gardener about Miss Polly’s cold heart.'
          ],
          paras9: [
            'The garret allotted to the young orphan was an austere chamber nestled beneath the eaves, uninsulated and devoid of ornament.',
            'Stripped of draperies, rugs, or paintings, the utilitarian enclosure served as a spatial manifestation of Miss Polly\'s unyielding severity.',
            'Nancy performed her domestic duties with simmering resentment, determined to extend clandestine tenderness toward the child.'
          ],
          dialogue: [
            { speaker: 'Nancy', text: 'Putting a poor motherless mite up in this oven of an attic! It breaks my heart!', avatarEmoji: '🧹', side: 'left' },
            { speaker: 'Timothy', text: 'The mistress thinks it’s her duty, Nancy, but duty can be mighty cold comfort.', avatarEmoji: '🧑‍🌾', side: 'right' }
          ]
        },
        {
          pageTitle: 'A Sunbeam in Red Gingham',
          paras56: [
            'When the train arrived at the station, Nancy and Timothy spotted a slender girl in a red-and-white checked dress.',
            'She had two thick braided pigtails of yellow hair and eyes that shone like bright blue stars.',
            'She threw her arms around Nancy with a joyous squeal, so glad to arrive in beautiful Vermont!'
          ],
          paras78: [
            'At the railway depot, Nancy looked for a mournful, weeping orphan dressed in dreary black mourning clothes.',
            'Instead, out bounced a girl of eleven in a faded red gingham dress, with dancing blue eyes and a face covered in freckles.',
            '\'Oh, I am so glad, glad, GLAD to see you!\' cried Pollyanna, wrapping Nancy in an exuberant, breathless hug.'
          ],
          paras9: [
            'Departing from the railway carriage, Pollyanna Whittier immediately confounded expectations of somber orphanhood.',
            'Clad in a modest red gingham frock, she radiated an incandescent vitality that captivated the waiting domestics.',
            'Her effervescent greeting enveloped Nancy in an embrace of spontaneous warmth, signaling the arrival of a transformative spirit.'
          ],
          dialogue: [
            { speaker: 'Pollyanna', text: 'Oh, you must be Aunt Polly! I love you already! I\'m so glad you sent for me!', avatarEmoji: '👧', side: 'left' },
            { speaker: 'Nancy', text: 'Bless your heart, honey! I’m only Nancy the maid, not your Aunt Polly!', avatarEmoji: '🧹', side: 'right' }
          ],
          p3Question: 'How did Pollyanna look and act when she stepped off the afternoon train?',
          p3Options: [
            'Cheerful and radiant in a red gingham dress, greeting Nancy with a warm, exuberant hug',
            'Frightened and weeping into a black handkerchief',
            'Proud and demanding a coach with four white horses'
          ],
          p3Insight: 'Pollyanna\'s boundless warmth disarmed everyone she met from the very first moment.'
        }
      ],
      compQuestion: {
        question: 'Which room in the Harrington mansion did Miss Polly prepare for her niece Pollyanna?',
        options: [
          'The bare, stifling attic garret directly under the sloping roof',
          'The spacious ground-floor guest suite overlooking the rose garden',
          'The comfortable library bedroom with velvet draperies',
          'A sunny corner room next to Miss Polly\'s own dressing room'
        ],
        explanation: 'Miss Polly assigned Pollyanna to the uncarpeted, plain attic room right under the roof.',
        visualClueEmoji: '🪟'
      }
    },
    {
      day: 2,
      title: 'The Glad Game & The Crutches',
      subtitle: 'Finding something to be glad about in everything that happens',
      summary: 'When Pollyanna explores her bare attic room, she reveals to Nancy the secret "Glad Game" taught by her missionary father, which started when a charity barrel mistakenly contained crutches instead of a doll.',
      illustrationType: 'attic_window',
      sceneCaption: 'Pollyanna looks out the attic window at green hills, explaining the magical Glad Game to Nancy!',
      avatars: [
        { name: 'Pollyanna', emoji: '👧', speech: 'There is always something in everything that you can be glad about, if you keep hunting!', position: 'left' },
        { name: 'Nancy', emoji: '🧹', speech: 'Well, I never! Being glad for crutches when you wanted a doll?', position: 'right' }
      ],
      hotspots: [
        { id: 'po3', x: 45, y: 55, label: 'Wooden Crutches', icon: '🩼', soundEffect: 'bounce', funFact: 'The Glad Game was invented when Pollyanna was only eight years old!', action: 'bounce' },
        { id: 'po4', x: 75, y: 35, label: 'Window View', icon: '🌄', soundEffect: 'magic', funFact: 'Pollyanna preferred her bare room because the window framed trees and river better than any painting!', action: 'sparkle' }
      ],
      scrambleWord: 'GLADGAME',
      vocab: [
        { word: 'Optimism', phonics: 'OP-tuh-miz-um', definition: 'Hopefulness and confidence about the future or positive outcomes.', funExample: 'Pollyanna\'s cheerful optimism brightened every room she entered.', emoji: '☀️' },
        { word: 'Missionary', phonics: 'MISH-uh-nair-ee', definition: 'A person sent on a religious mission to promote faith and help communities.', funExample: 'Her father was a kind missionary minister who loved helping others.', emoji: '📖' },
        { word: 'Crutches', phonics: 'KRUCH-iz', definition: 'Wooden or metal supports used under the armpits by someone injured or lame.', funExample: 'A pair of small wooden crutches arrived in the donation box.', emoji: '🩼' }
      ],
      pages: [
        {
          pageTitle: 'Seeing the Picture in the Window',
          paras56: [
            'Miss Polly met Pollyanna coldly, reminding her to stand straight and mind her manners before sending her up to the attic.',
            'Nancy followed Pollyanna upstairs, dreading the moment the child would burst into tears over the plain, empty room.',
            'Instead, Pollyanna ran straight to the little gable window and clapped her hands with delight!',
            '\'Look at those lovely green elm trees and the silver river!\' Pollyanna laughed. \'I\'m glad there are no pictures on the walls, because this window is the prettiest picture in the world!\''
          ],
          paras78: [
            'Miss Polly received her niece with chilly formality, promptly dismissing her to unpack her meager cardboard trunk.',
            'Expecting a torrent of disappointment over the hot, barren attic, Nancy was astonished when Pollyanna embraced the room with joy.',
            '\'I don\'t need mirrors or rugs,\' Pollyanna exclaimed happily. \'Without a looking-glass, I don\'t have to see my freckles, and this window shows the glorious Vermont hills!\''
          ],
          paras9: [
            'Miss Polly\'s reception was a study in cold restraint, underscoring the transactional nature of her domestic charity.',
            'Anticipating emotional devastation upon inspecting the spartan garret, Nancy witnessed an astounding display of psychological resilience.',
            'Pollyanna transmuted every physical deprivation into a celebratory virtue, transforming the window framing the Green Mountains into a masterpiece of landscape art.'
          ],
          dialogue: [
            { speaker: 'Nancy', text: 'You poor lamb, aren\'t you brokenhearted by this bare old garret?', avatarEmoji: '🧹', side: 'right' },
            { speaker: 'Pollyanna', text: 'Brokenhearted? Why, Nancy, it\'s lovely! I\'m just so glad about everything!', avatarEmoji: '👧', side: 'left' }
          ],
          p1Question: 'Why did Pollyanna say she was glad her attic room had no mirrors or wall pictures?',
          p1Options: [
            'Because without a mirror she wouldn\'t see her freckles, and the window framed the prettiest view',
            'Because she was afraid of glass reflections',
            'Because she planned to draw giant purple dragons on every wall'
          ],
          p1Insight: 'Pollyanna found beauty and gratitude where others saw only deprivation.'
        },
        {
          pageTitle: 'The Story of the Crutches',
          paras56: [
            'Nancy shook her head in utter bewilderment. \'How can you be glad about an empty room?\' she asked.',
            'Pollyanna sat down on the edge of the bed and smiled. \'It’s all because of the Game! Father and I invented it when I was eight years old.\'',
            '\'I had wished and prayed for a doll from the missionary barrels. But when the box arrived, there was no doll—only a pair of little wooden crutches!\''
          ],
          paras78: [
            'Curious and intrigued, Nancy sat down beside the little girl on the bed.',
            'Pollyanna explained that their missionary family lived on charitable barrels sent from wealthy churches in the east.',
            'She had desperately longed for a doll with golden hair. Instead, a lady had donated a pair of small crutches for an injured child.'
          ],
          paras9: [
            'Nancy\'s skepticism invited the disclosure of Pollyanna\'s foundational philosophy.',
            'The child recounted how missionary families depended upon donation barrels filled with random assortments of surplus goods.',
            'Having harbored intense aspirations for a porcelain doll, she was confronted with a pair of pediatric crutches.'
          ],
          dialogue: [
            { speaker: 'Nancy', text: 'Goodness me! What on earth could anyone find to be glad about in a pair of crutches?', avatarEmoji: '🧹', side: 'right' },
            { speaker: 'Pollyanna', text: 'Father taught me! Can you guess what it was, Nancy?', avatarEmoji: '👧', side: 'left' }
          ]
        },
        {
          pageTitle: 'The Rules of the Game',
          paras56: [
            '\'Father told me,\' Pollyanna whispered softly, \'we can be glad about the crutches because we don\'t need them!\'',
            '\'And ever since that day, we played the Glad Game: finding something to be glad about in every single thing that happens, no matter what it is!\'',
            'Nancy wiped away a tear and pulled Pollyanna into a warm hug. \'Well, from now on, little miss,\' she declared, \'I\'m going to play that game right along with you!\''
          ],
          paras78: [
            '\'It was hard at first,\' admitted Pollyanna, \'because I had cried so much for the doll. But Father showed me that healthy legs were worth more than ten dolls!\'',
            'The game was simple: the harder something was to be glad about, the more fun it was to hunt until you found the glad thing.',
            'Nancy was deeply moved by the wisdom of the child, swearing a solemn pact to become Pollyanna’s partner in the Glad Game.'
          ],
          paras9: [
            '\'We can be glad because our limbs are sound and we do not require crutches,\' Pollyanna explained with disarming simplicity.',
            'This counter-intuitive logic transformed emotional vulnerability into an empowering spiritual discipline.',
            'Nancy recognized in this childlike game a profound antidote to the bitterness that pervaded the Harrington manor.'
          ],
          dialogue: [
            { speaker: 'Pollyanna', text: 'The harder it is to find the glad thing, the more exciting the game is!', avatarEmoji: '👧', side: 'left' },
            { speaker: 'Nancy', text: 'I\'ll play it with you, Pollyanna! Every single day!', avatarEmoji: '🧹', side: 'right' }
          ],
          p3Question: 'Why did Pollyanna\'s father say they could be glad about receiving a pair of crutches?',
          p3Options: [
            'Because they could be glad that their own legs were healthy and didn\'t need crutches',
            'Because the crutches made great firewood for the winter stove',
            'Because they could sell the crutches for two bags of hard peppermint candy'
          ],
          p3Insight: 'The Glad Game reframed adversity into gratitude for life\'s everyday blessings.'
        }
      ],
      compQuestion: {
        question: 'What incident originally inspired Pollyanna and her father to invent the famous \'Glad Game\'?',
        options: [
          'Receiving a pair of wooden crutches in a charity barrel when she had longed for a doll',
          'Missing their morning train to a church picnic in the mountains',
          'Breaking a favourite ceramic teacup during Sunday breakfast',
          'Getting caught in a summer thunderstorm without an umbrella'
        ],
        explanation: 'The game began when a missionary barrel contained crutches instead of the doll she hoped for.',
        visualClueEmoji: '🩼'
      }
    },
    {
      day: 3,
      title: 'Fluffy Kittens, Stray Dogs & Old Tom',
      subtitle: 'Filling the grand Harrington mansion with life and laughter',
      summary: 'Pollyanna brings stray animals into Aunt Polly\'s strictly ordered house, befriends wise old gardener Tom, and begins cracking the icy exterior of her aunt\'s rigid household.',
      illustrationType: 'sunlit_veranda',
      sceneCaption: 'Pollyanna cradles a fluffy white kitten on the porch while Aunt Polly gasps in strict dismay!',
      avatars: [
        { name: 'Pollyanna', emoji: '👧', speech: 'Look at this darling kitten, Aunt Polly! Isn\'t she the gladdest little thing?', position: 'left' },
        { name: 'Miss Polly', emoji: '👩‍🦳', speech: 'Pollyanna! You know animals are strictly forbidden in this house!', position: 'right' }
      ],
      hotspots: [
        { id: 'po5', x: 40, y: 50, label: 'Fluffy Kitten', icon: '🐱', soundEffect: 'bounce', funFact: 'Pollyanna named the stray kitten Fluffy and fed her warm saucers of cream!', action: 'bounce' },
        { id: 'po6', x: 75, y: 40, label: 'Watering Can', icon: '🪴', soundEffect: 'magic', funFact: 'Old gardener Tom had worked for the Harrington family for over sixty years!', action: 'sparkle' }
      ],
      scrambleWord: 'KITTEN',
      vocab: [
        { word: 'Forbidden', phonics: 'for-BID-un', definition: 'Not allowed; strictly banned by rule or law.', funExample: 'Stray animals were strictly forbidden in Aunt Polly\'s spotless parlour.', emoji: '🚫' },
        { word: 'Compassion', phonics: 'kum-PASH-un', definition: 'Sympathetic pity and concern for the sufferings or misfortunes of others.', funExample: 'Pollyanna showed sweet compassion to every stray creature.', emoji: '💖' },
        { word: 'Scandalized', phonics: 'SKAN-duh-lyzd', definition: 'Shocked or horrified by an action perceived as improper or unruly.', funExample: 'Miss Polly was scandalized by muddy paws upon her polished veranda.', emoji: '😱' }
      ],
      pages: [
        {
          pageTitle: 'Old Tom and Miss Polly\'s Past',
          paras56: [
            'Every morning after breakfast, Pollyanna ran out to explore the sunny gardens behind the mansion.',
            'She met old Tom, a bent old man with white hair who was tenderly pruning the rosebushes.',
            'Old Tom told Pollyanna that her mother had been the sweetest, sunniest girl in Beldingsville, and that Aunt Polly had once had a handsome lover who broke her heart.'
          ],
          paras78: [
            'Old Tom leaned on his garden rake and smiled fondly into Pollyanna’s bright face, seeing her mother’s ghost in her cheerful smile.',
            'He confided that Miss Polly had not always been so cold and bitter; years ago, a terrible quarrel had separated her from her beloved suitor.',
            'Since that fateful day, Miss Polly had closed her heart to romance, burying herself in duty and strict propriety.'
          ],
          paras9: [
            'In the veteran horticulturist Old Tom, Pollyanna found a living chronicle of the Harrington lineage.',
            'Tom recounted how the younger sister, Pollyanna’s mother, possessed radiant beauty and spontaneous joy.',
            'He hinted at the tragic romance that had embittered Miss Polly, transforming a passionate young heiress into a rigid guardian of etiquette.'
          ],
          dialogue: [
            { speaker: 'Old Tom', text: 'You’ve got your mother’s sunny eyes, little miss! Don’t let anyone dim their light.', avatarEmoji: '👨‍🌾', side: 'right' },
            { speaker: 'Pollyanna', text: 'I love Aunt Polly! I\'m going to help her play the Glad Game until she smiles every day!', avatarEmoji: '👧', side: 'left' }
          ],
          p1Question: 'What secret about Aunt Polly\'s past did old gardener Tom reveal?',
          p1Options: [
            'That Aunt Polly had once had a lover, but a terrible quarrel broke her heart and made her bitter',
            'That Aunt Polly used to be a world-famous tightrope walker in Paris',
            'That she had hidden a pirate treasure map under the kitchen sink'
          ],
          p1Insight: 'Understanding her aunt\'s hidden heartbreak inspired Pollyanna to love her even more.'
        },
        {
          pageTitle: 'The Stray Kitten and the Muddy Pup',
          paras56: [
            'Walking down the village street, Pollyanna spotted a tiny, shivering white kitten meowing pitifully by a fence.',
            'She scooped the kitten into her arms, tucked it into her apron, and marched straight into Aunt Polly\'s gleaming parlour.',
            'The next day, she returned with a scruffy, wagging brown stray dog who had followed her home from the post office!'
          ],
          paras78: [
            'Pollyanna possessed an irresistible affinity for abandoned creatures.',
            'When she discovered a famished white kitten, she carried it directly to Miss Polly, declaring how glad Aunt Polly would be for the opportunity to care for it.',
            'Disarmed by Pollyanna’s assumption of her generosity, Miss Polly found herself powerless to turn the animals back out into the cold.'
          ],
          paras9: [
            'Pollyanna\'s moral genius lay in attributing noble motives to those whose actions had long been ruled by pettiness.',
            'Presenting the emaciated kitten and a vagrant terrier to her aunt, she framed their adoption as an act of Christian benevolence.',
            'Constrained by her own stated devotion to duty, Miss Polly capitulated, permitting the creatures sanctuary within her pristine domain.'
          ],
          dialogue: [
            { speaker: 'Miss Polly', text: 'Pollyanna, this is outrageous! What will the neighbours say about animals in my parlour?', avatarEmoji: '👩‍🦳', side: 'right' },
            { speaker: 'Pollyanna', text: 'They\'ll say how wonderfully good and kind you are, Aunt Polly! That\'s what they\'ll say!', avatarEmoji: '👧', side: 'left' }
          ]
        },
        {
          pageTitle: 'The Softening Heart',
          paras56: [
            'Aunt Polly scolded and frowned, but she poured a saucer of fresh milk for the kitten and set out a bowl of scraps for the puppy.',
            'Nancy watched from the kitchen doorway with tears of laughter in her eyes.',
            'Little by little, Pollyanna\'s sunshine was melting the thick ice in the Harrington mansion.'
          ],
          paras78: [
            'For the first time in twenty years, laughter and playful barks echoed through the silent corridors of the mansion.',
            'Miss Polly found herself stroking the sleeping kitten on her lap while reading the evening paper, wondering what was happening to her.',
            'Nancy whispered to Timothy that Pollyanna was performing miracles without even knowing she was doing it.'
          ],
          paras9: [
            'The domestic atmosphere underwent an inexorable transformation as the silent mansion resonated with organic life.',
            'Miss Polly’s fortress of emotional detachment was breached not by confrontation, but by Pollyanna’s disarming presumption of her goodness.',
            'The household observed with wonder as the icy matriarch unconsciously adjusted her routine to accommodate the lively interlopers.'
          ],
          dialogue: [
            { speaker: 'Nancy', text: 'Look at the mistress petting that kitten! The world must be turning upside down!', avatarEmoji: '🧹', side: 'left' },
            { speaker: 'Timothy', text: 'It\'s not upside down, Nancy—it\'s right side up for the first time in years!', avatarEmoji: '🧑‍🌾', side: 'right' }
          ],
          p3Question: 'How did Aunt Polly react when Pollyanna brought stray animals home to the spotless parlour?',
          p3Options: [
            'She scolded, but could not resist Pollyanna\'s innocent trust and ended up feeding them milk and scraps',
            'She locked Pollyanna in the cellar for three weeks',
            'She sold the house and moved to Boston immediately'
          ],
          p3Insight: 'Pollyanna\'s belief in other people\'s goodness brought out the best in them.'
        }
      ],
      compQuestion: {
        question: 'Why did Miss Polly feel unable to throw out the stray kitten and puppy that Pollyanna brought home?',
        options: [
          'Because Pollyanna praised Aunt Polly\'s goodness and duty so innocently that Aunt Polly could not bear to look cruel',
          'Because the kitten had a solid gold collar worth hundreds of dollars',
          'Because the puppy was trained to guard the bank safe in town',
          'Because the town mayor ordered everyone to keep two dogs'
        ],
        explanation: 'Pollyanna always assumed Aunt Polly was deeply kind and glad to do her duty, making it impossible for her aunt to refuse.',
        visualClueEmoji: '🐱'
      }
    },
    {
      day: 4,
      title: 'The Grumpy Hermit: Mr. Pendleton',
      subtitle: 'A solitary man in the deep woods and a broken leg',
      summary: 'Pollyanna befriends the mysterious, reclusive millionaire John Pendleton, who never speaks to anyone. When she finds him injured with a broken leg in the forest, her courage saves his life.',
      illustrationType: 'pendleton_mansion',
      sceneCaption: 'Pollyanna kneels beside John Pendleton in the shadowy woods, holding his hand as he groans with a broken leg!',
      avatars: [
        { name: 'Mr. Pendleton', emoji: '🧔', speech: 'Leave me alone, child! I don\'t want to speak to anyone!', position: 'right' },
        { name: 'Pollyanna', emoji: '👧', speech: 'Good morning, Mr. Pendleton! Isn\'t it a gloriously glad day to be alive?', position: 'left' }
      ],
      hotspots: [
        { id: 'po7', x: 45, y: 55, label: 'Carved Walking Stick', icon: '🦯', soundEffect: 'bounce', funFact: 'John Pendleton had travelled all across Africa and Asia, collecting rare treasures for his lonely mansion!', action: 'bounce' },
        { id: 'po8', x: 75, y: 35, label: 'Deep Woods Path', icon: '🌲', soundEffect: 'magic', funFact: 'Pendleton Woods were thick with tall pine trees and singing chickadees!', action: 'sparkle' }
      ],
      scrambleWord: 'PENDLETON',
      vocab: [
        { word: 'Recluse', phonics: 'REK-loos', definition: 'A person who lives a solitary life and tends to avoid other people.', funExample: 'Mr. Pendleton was a gloomy recluse living alone in his grand stone house.', emoji: '🚪' },
        { word: 'Solitary', phonics: 'SOL-uh-tair-ee', definition: 'Existing or living alone without companions or society.', funExample: 'He walked solitary paths through the dark pine forest.', emoji: '🌲' },
        { word: 'Courageous', phonics: 'kuh-RAY-jus', definition: 'Brave; not deterred by danger or pain.', funExample: 'Pollyanna was courageous when she ran through the woods to fetch the doctor.', emoji: '🦁' }
      ],
      pages: [
        {
          pageTitle: 'The Man Who Never Smiled',
          paras56: [
            'Every day on her walk, Pollyanna passed a tall, stern man dressed in fine black clothes.',
            'He carried a walking cane, walked with quick strides, and never smiled or looked at anyone.',
            'Everyone in Beldingsville was terrified of him. His name was John Pendleton, and he lived all alone in a massive stone mansion in the deep woods.'
          ],
          paras78: [
            'John Pendleton was the town\'s most enigmatic and wealthy citizen, renowned for his caustic wit and reclusive habits.',
            'Having explored exotic foreign continents in his youth, he had returned to Beldingsville to lock himself away in misanthropic isolation.',
            'While other children scampered out of his path, Pollyanna cheerfully greeted him with a bright \'Good morning!\' every single day.'
          ],
          paras9: [
            'John Pendleton inhabited an imposing stone manor on Pendleton Hill, enveloped in an aura of haughty aloofness.',
            'A globe-trotting adventurer in his youth, he had succumbed to profound cynicism, spurning the provincial society of Beldingsville.',
            'Undaunted by his formidable scowl, Pollyanna subjected the reclusive millionaire to her daily barrage of sunny salutations.'
          ],
          dialogue: [
            { speaker: 'Mr. Pendleton', text: 'Why do you speak to me every day, little girl? You don\'t know who I am!', avatarEmoji: '🧔', side: 'right' },
            { speaker: 'Pollyanna', text: 'I don\'t need to know your name to know you\'re a person on a lovely sunny day!', avatarEmoji: '👧', side: 'left' }
          ],
          p1Question: 'Why were the townspeople of Beldingsville afraid of John Pendleton?',
          p1Options: [
            'Because he was a wealthy, grumpy recluse who never smiled or spoke to anyone',
            'Because he kept six roaring lions on his front porch',
            'Because he was a retired pirate captain with a wooden leg'
          ],
          p1Insight: 'Pollyanna saw past the rough exterior of a lonely, wounded soul.'
        },
        {
          pageTitle: 'A Cry in the Woods',
          paras56: [
            'One afternoon, Pollyanna walked along the winding trail through the deep Pendleton woods, listening to the birds.',
            'Suddenly, a small black-and-tan dog bounded out of the bushes, barking frantically and pulling at her skirt.',
            'Pollyanna followed the faithful dog into a rocky hollow and found Mr. Pendleton lying on the ground, groaning with a broken leg!'
          ],
          paras78: [
            'While taking her daily ramble through the dense pine woods, Pollyanna was accosted by Mr. Pendleton\'s faithful terrier.',
            'Recognizing the animal\'s agitation, she allowed the dog to guide her down a steep, treacherous ravine.',
            'There lay John Pendleton, immobilized and grey with agony, having slipped on wet moss and fractured his leg.'
          ],
          paras9: [
            'During a solitary excursion through the Pendleton timberland, Pollyanna encountered John Pendleton\'s canine companion in a state of distress.',
            'Guided by the animal\'s urgent solicitations, she descended into a rugged declivity screened by dense foliage.',
            'She discovered the proud recluse incapacitated upon the rocks, suffering from an acute compound fracture.'
          ],
          dialogue: [
            { speaker: 'Mr. Pendleton', text: 'Little girl... Thank God you came! My leg is broken... I cannot move!', avatarEmoji: '🧔', side: 'right' },
            { speaker: 'Pollyanna', text: 'Don\'t worry, Mr. Pendleton! I will run to town and bring Dr. Chilton this very minute!', avatarEmoji: '👧', side: 'left' }
          ]
        },
        {
          pageTitle: 'The Brave Messenger',
          paras56: [
            'Mr. Pendleton gave Pollyanna the key to his great house and told her how to find Dr. Chilton without causing a panic.',
            'Pollyanna sprinted through the forest with all her might, her red dress flashing between the dark green trees.',
            'She guided Dr. Chilton back to the woods, saving Mr. Pendleton\'s life and winning the lifelong gratitude of the lonely hermit.'
          ],
          paras78: [
            'Enduring severe pain, Pendleton entrusted the little girl with his pocket keys and precise directions to notify his physician.',
            'Pollyanna ran with heroic speed, reaching Dr. Chilton’s office breathless and delivering her message with remarkable clarity.',
            'Dr. Chilton and a rescue party carried the injured man to his mansion, marvelling at the little girl\'s cool head and brave heart.'
          ],
          paras9: [
            'Displaying extraordinary presence of mind, Pollyanna accepted Pendleton’s latchkey and memorized his emergency instructions.',
            'She traversed the forest trail with athletic velocity, alerting Dr. Thomas Chilton without inciting general hysteria.',
            'The timely intervention averted fatal shock, establishing an indelible bond between the eccentric millionaire and his youthful rescuer.'
          ],
          dialogue: [
            { speaker: 'Dr. Chilton', text: 'You are the bravest, quickest little messenger in this whole county, Pollyanna!', avatarEmoji: '🩺', side: 'right' },
            { speaker: 'Pollyanna', text: 'I was just so glad I took the woods path today instead of the road!', avatarEmoji: '👧', side: 'left' }
          ],
          p3Question: 'How did Pollyanna react when she found Mr. Pendleton with a broken leg in the forest?',
          p3Options: [
            'She stayed calm, took his house key, and ran to town to bring Dr. Chilton and a rescue party',
            'She ran away screaming and hid in the attic',
            'She tried to pull him up the mountain by his coat collar'
          ],
          p3Insight: 'Pollyanna\'s courage and presence of mind saved a man\'s life.'
        }
      ],
      compQuestion: {
        question: 'Who alerted Pollyanna to Mr. Pendleton\'s injury in the deep woods?',
        options: [
          'Mr. Pendleton\'s faithful little dog, who barked and tugged at her dress to lead her to the ravine',
          'A flock of noisy crows circling above the treetops',
          'Nancy, who was picking wild blueberries along the trail',
          'A forest ranger carrying an iron lantern'
        ],
        explanation: 'John Pendleton\'s loyal terrier ran out to find help and led Pollyanna directly to his injured master.',
        visualClueEmoji: '🐕'
      }
    },
    {
      day: 5,
      title: 'Prisms of Rainbow Light & Mrs. Snow',
      subtitle: 'Beads of glass, dancing sunbeams, and a bedridden neighbour',
      summary: 'Pollyanna visits the complaining, bedridden Mrs. Snow with calves-foot jelly and hangs glass chandelier prisms in her window, filling the gloomy bedroom with dancing rainbows and teaching her the Glad Game.',
      illustrationType: 'rainbow_prisms',
      sceneCaption: 'Brilliant rainbow colors dance across the walls of Mrs. Snow\'s bedroom as sunlight strikes the crystal prisms!',
      avatars: [
        { name: 'Pollyanna', emoji: '👧', speech: 'Look, Mrs. Snow! There are a hundred dancing rainbows on your wall!', position: 'left' },
        { name: 'Mrs. Snow', emoji: '👵', speech: 'Well, I declare! I never saw anything so dazzling in all my days!', position: 'right' }
      ],
      hotspots: [
        { id: 'po9', x: 40, y: 45, label: 'Crystal Prisms', icon: '💎', soundEffect: 'magic', funFact: 'Glass prisms split white sunlight into all seven colours of the spectrum!', action: 'sparkle' },
        { id: 'po10', x: 75, y: 55, label: 'Jelly Dish', icon: '🍮', soundEffect: 'bounce', funFact: 'Mrs. Snow always complained whether visitors brought lamb broth, chicken soup, or jelly!', action: 'bounce' }
      ],
      scrambleWord: 'RAINBOW',
      vocab: [
        { word: 'Prism', phonics: 'PRIZ-um', definition: 'A transparent glass object that separates white light into a rainbow spectrum.', funExample: 'Sunlight shining through the crystal prism cast rainbows across the room.', emoji: '💎' },
        { word: 'Bedridden', phonics: 'BED-rid-un', definition: 'Confined to bed because of sickness, injury, or old age.', funExample: 'Poor Mrs. Snow had been bedridden in her darkened room for years.', emoji: '🛏️' },
        { word: 'Iridescent', phonics: 'ir-i-DES-unt', definition: 'Showing luminous colours that seem to change when seen from different angles.', funExample: 'Iridescent beams of violet and gold danced upon the ceiling.', emoji: '🌈' }
      ],
      pages: [
        {
          pageTitle: 'The Chronic Complainer',
          paras56: [
            'Aunt Polly sent Pollyanna down the street to deliver a bowl of calves-foot jelly to Mrs. Snow.',
            'Mrs. Snow was an elderly bedridden lady who had spent years complaining in a gloomy, shuttered room.',
            'If someone brought her chicken broth, she wished for lamb; if they brought her jelly, she wished for beef tea!'
          ],
          paras78: [
            'Mrs. Snow was renowned throughout the township as an incorrigible chronic invalid whom nobody could satisfy.',
            'Her long-suffering daughter Milly kept the window shutters bolted shut because Mrs. Snow complained that daylight hurt her eyes.',
            'Pollyanna entered the dim bedchamber carrying Aunt Polly’s jelly, refusing to be intimidated by the sick woman’s scowl.'
          ],
          paras9: [
            'Mrs. Snow represented the apex of hypochondriacal discontent within the Beldingsville community.',
            'Enclosed within a darkened sickroom, she had cultivated an elaborate repertoire of grievances against Providence and her neighbours.',
            'Pollyanna crossed the threshold bearing an invalid delicacy, greeting the sullen matriarch with irrepressible cordiality.'
          ],
          dialogue: [
            { speaker: 'Mrs. Snow', text: 'I suppose your aunt sent that jelly! I wanted lamb broth today, not sweet jelly!', avatarEmoji: '👵', side: 'right' },
            { speaker: 'Pollyanna', text: 'Oh, I\'m so glad she sent jelly, because jelly is so much prettier to look at in the sunlight!', avatarEmoji: '👧', side: 'left' }
          ],
          p1Question: 'Why was Mrs. Snow famous throughout Beldingsville?',
          p1Options: [
            'She was a bedridden lady who constantly complained about whatever food or help people brought',
            'She was the fastest runner in the county fair',
            'She had written twenty mystery novels in her bed'
          ],
          p1Insight: 'Patience and cheerful perspective can disarm even the most stubborn complaints.'
        },
        {
          pageTitle: 'Hanging the Crystal Prisms',
          paras56: [
            'Pollyanna noticed that Mr. Pendleton had sent an old broken crystal lamp chandelier to be mended.',
            'She strung dozens of cut-glass prisms on yellow ribbons and carried them to Mrs. Snow\'s dark house.',
            'She threw open the wooden shutters and tied the sparkling prisms across the curtain rod in the bright afternoon sun!'
          ],
          paras78: [
            'Inspired by a decorative lamp at Pendleton\'s house, Pollyanna conceived a brilliant plan to brighten Mrs. Snow\'s existence.',
            'Securing a box of crystal prisms from Mr. Pendleton, she strung them carefully on cords and brought them to the dark sickroom.',
            'With cheerful audacity, she pulled back the heavy curtains, allowing full sunlight to strike the faceted glass crystals.'
          ],
          paras9: [
            'Borrowing discarded chandelier prisms from John Pendleton’s collection, Pollyanna devised an optical surprise for the invalid.',
            'Arriving at the gloomy domicile, she mounted a chair and affixed the cut crystals along the upper sash of the window.',
            'Parting the oppressive draperies, she admitted the afternoon rays, transforming the aperture into a luminous spectrum.'
          ],
          dialogue: [
            { speaker: 'Mrs. Snow', text: 'Child, what are you doing with my curtains? The light will blind me!', avatarEmoji: '👵', side: 'right' },
            { speaker: 'Pollyanna', text: 'Just wait one second, Mrs. Snow! Look at your walls! Look at the ceiling!', avatarEmoji: '👧', side: 'left' }
          ]
        },
        {
          pageTitle: 'A Room Full of Rainbows',
          paras56: [
            'Instantly, the dark bedroom exploded with dancing colors of red, orange, yellow, green, blue, indigo, and violet!',
            'Rainbows sparkled on the white bedspread, fluttered across the ceiling, and danced on the floorboards like magical fairies.',
            'Mrs. Snow gasped in wonder. She reached out her thin hands, laughing out loud for the first time in fifteen years.'
          ],
          paras78: [
            'The transformation was breathtaking: hundreds of dazzling rainbow prisms floated and shimmered across the bedchamber.',
            'Even the sick woman’s sour visage melted into childlike fascination as jewel-toned light washed over her hands.',
            'Pollyanna taught her the Glad Game, showing her that even in bed, she could be glad that her hands could knit and that rainbows lived in her room.'
          ],
          paras9: [
            'The chamber dissolved into an ethereal kaleidoscope of refracted sunlight, splashing iridescent hues across every surface.',
            'The psychological impact upon Mrs. Snow was miraculous: years of calcified bitterness evaporated before this optical enchantment.',
            'Instilled with the principles of the Glad Game, the chronic invalid commenced a new existence centered upon gratitude and aesthetic joy.'
          ],
          dialogue: [
            { speaker: 'Mrs. Snow', text: 'Oh, Milly! Look at the violet and crimson! It’s like being inside a jewel box!', avatarEmoji: '👵', side: 'right' },
            { speaker: 'Pollyanna', text: 'Now you can play the Glad Game, Mrs. Snow! You have rainbows to watch all afternoon!', avatarEmoji: '👧', side: 'left' }
          ],
          p3Question: 'How did Pollyanna transform Mrs. Snow\'s dark, gloomy bedroom?',
          p3Options: [
            'By hanging crystal prisms in the sunny window, filling the room with dancing rainbows of light',
            'By painting the four walls bright orange and yellow',
            'By hiring a brass marching band to play outside the porch'
          ],
          p3Insight: 'Bringing light and joy into dark places helped a sick woman rediscover hope.'
        }
      ],
      compQuestion: {
        question: 'What wonderful visual effect happened when sunlight struck the glass prisms in Mrs. Snow\'s room?',
        options: [
          'Hundreds of dazzling rainbows danced and shimmered across the walls and ceiling',
          'The glass melted and created a small puddle of water',
          'A loud musical chime rang out through the village',
          'A sudden puff of purple smoke filled the air'
        ],
        explanation: 'The cut-glass crystal prisms refracted the sunlight into dancing rainbows all across the room.',
        visualClueEmoji: '🌈'
      }
    },
    {
      day: 6,
      title: 'Jimmy Bean & A Real Home',
      subtitle: 'An orphan boy without a family and a house that needs a son',
      summary: 'Pollyanna meets Jimmy Bean, a homeless ten-year-old runaway from the orphan asylum. Determined to find him a real home, she boldly asks John Pendleton to adopt the boy and fill his empty mansion.',
      illustrationType: 'pendleton_mansion',
      sceneCaption: 'Pollyanna introduces ragged young Jimmy Bean to John Pendleton inside his grand library!',
      avatars: [
        { name: 'Jimmy Bean', emoji: '👦', speech: 'I don\'t want charity! I just want a regular home and folks to belong to!', position: 'left' },
        { name: 'Mr. Pendleton', emoji: '🧔', speech: 'I wanted you to be my daughter, Pollyanna, but perhaps this boy needs me more.', position: 'right' }
      ],
      hotspots: [
        { id: 'po11', x: 45, y: 55, label: 'Pendleton Library', icon: '📚', soundEffect: 'bounce', funFact: 'The Pendleton mansion library had floor-to-ceiling mahogany bookshelves and a roaring stone fireplace!', action: 'bounce' },
        { id: 'po12', x: 75, y: 40, label: 'Patchwork Cap', icon: '🧢', soundEffect: 'magic', funFact: 'Jimmy Bean was a hardworking boy who was glad to weed gardens and chop wood for his keep!', action: 'sparkle' }
      ],
      scrambleWord: 'HOME',
      vocab: [
        { word: 'Asylum', phonics: 'uh-SY-lum', definition: 'An old-fashioned term for an institution providing care and shelter to orphans.', funExample: 'Jimmy had run away from the crowded orphan asylum.', emoji: '🏛️' },
        { word: 'Adoption', phonics: 'uh-DOP-shun', definition: 'The legal process of taking another\'s child into one\'s family as one\'s own.', funExample: 'Finding an adoption family was Jimmy\'s greatest dream.', emoji: '👨‍👦' },
        { word: 'Benevolent', phonics: 'buh-NEV-uh-lunt', definition: 'Well-meaning, kindhearted, and actively doing good for others.', funExample: 'Mr. Pendleton made a benevolent choice to welcome the boy.', emoji: '🤝' }
      ],
      pages: [
        {
          pageTitle: 'The Boy by the Roadside',
          paras56: [
            'One morning, Pollyanna found a ten-year-old boy sitting on a stone wall by the road, crying into his dusty cap.',
            'His name was Jimmy Bean. He was an orphan who had run away from the county asylum because there were too many children and nobody had time to love him.',
            '\'I don\'t want handouts,\' sniffled Jimmy. \'I can work hard! I just want folks of my own to belong to!\''
          ],
          paras78: [
            'Pollyanna encountered Jimmy Bean, an orphan lad with ragged trousers and an earnest, determined face.',
            'He had fled the overcrowded orphanage, yearning for a real home with parents who cared about him as an individual.',
            'Deeply moved by his plight, Pollyanna promised that she would find someone in Beldingsville who had an empty home and a hungry heart.'
          ],
          paras9: [
            'Pollyanna discovered Jimmy Bean, an escapee from the municipal orphanage, resting dejectedly beside the highway.',
            'Driven by a legitimate longing for familial belonging, the lad sought honest employment in exchange for domestic shelter.',
            'Recognizing the universal human hunger for kinship, Pollyanna resolved to engineer a benevolent solution to his destitution.'
          ],
          dialogue: [
            { speaker: 'Jimmy', text: 'Nobody wants an orphan boy when they can get girls who don\'t track in dirt!', avatarEmoji: '👦', side: 'left' },
            { speaker: 'Pollyanna', text: 'Don\'t you cry, Jimmy! I know someone with a huge, giant house with dozens of empty rooms!', avatarEmoji: '👧', side: 'right' }
          ],
          p1Question: 'Why had young Jimmy Bean run away from the county orphanage?',
          p1Options: [
            'Because it was overcrowded and he desperately wanted a real home with folks of his own',
            'Because he wanted to sail across the ocean as a cabin boy',
            'Because the headmaster made him eat cabbage soup three times a day'
          ],
          p1Insight: 'Every child deserves love and a place to truly belong.'
        },
        {
          pageTitle: 'A Bold Idea',
          paras56: [
            'Pollyanna first asked the Ladies\' Aid society in town, but they were too busy raising money for faraway places to help a boy in their own town.',
            'Then she remembered John Pendleton, sitting alone in his massive stone castle with no family and no children.',
            'She took Jimmy by the hand and marched right up Pendleton Hill to present him to the recovering millionaire.'
          ],
          paras78: [
            'After being rebuffed by hypocritical committee ladies, Pollyanna realized where Jimmy’s real sanctuary lay.',
            'Mr. Pendleton was lonely; he had even asked Pollyanna to come live with him as his adopted daughter, but Pollyanna could not abandon Aunt Polly.',
            'She realized that Jimmy Bean was the perfect boy to fill the silent, echoing halls of Pendleton mansion with youthful life.'
          ],
          paras9: [
            'Frustrated by the bureaucratic indifference of the parish charitable societies, Pollyanna formulated a daring strategy.',
            'Pendleton had previously proposed adopting Pollyanna to assuage his profound loneliness, an offer she had declined out of loyalty to her aunt.',
            'She reasoned that Jimmy’s need for paternal guardianship converged perfectly with Pendleton’s need for emotional renewal.'
          ],
          dialogue: [
            { speaker: 'Pollyanna', text: 'Mr. Pendleton, you said you had a great, empty house with no one in it. I brought you Jimmy Bean!', avatarEmoji: '👧', side: 'right' },
            { speaker: 'Mr. Pendleton', text: 'A boy? In my house? Pollyanna, have you lost your senses?', avatarEmoji: '🧔', side: 'left' }
          ]
        },
        {
          pageTitle: 'A Father and a Son',
          paras56: [
            'Jimmy looked Mr. Pendleton straight in the eye and said he could chop wood, groom horses, and work from sunrise to sunset.',
            'Mr. Pendleton looked at the boy\'s sturdy chin and honest eyes. A warm smile broke across his weathered face.',
            'He shook Jimmy\'s hand and promised to adopt him as his son, giving Jimmy a real home and himself a loving family forever.'
          ],
          paras78: [
            'Jimmy Bean spoke with such manly independence and clear honesty that Pendleton’s aristocratic reserve dissolved.',
            'Recognizing in Jimmy the same fierce integrity he valued in himself, Pendleton agreed to take the boy into his home.',
            'Jimmy’s face shone with unbelievable joy. Pollyanna skipped all the way down the hill, singing at the top of her lungs.'
          ],
          paras9: [
            'Jimmy’s unpretentious dignity and willingness to labor commanded Pendleton’s immediate respect.',
            'Sensing an authentic opportunity for paternal redemption, the millionaire committed to formal legal adoption.',
            'In uniting two solitary souls, Pollyanna achieved a profound victory for love over alienation.'
          ],
          dialogue: [
            { speaker: 'Mr. Pendleton', text: 'Well, Jimmy Bean, how would you like to become Jimmy Pendleton and help me run this big place?', avatarEmoji: '🧔', side: 'right' },
            { speaker: 'Jimmy', text: 'I\'d... I\'d work my fingers to the bone for you, sir! I\'m so glad, I could burst!', avatarEmoji: '👦', side: 'left' }
          ],
          p3Question: 'How did John Pendleton respond to Jimmy Bean\'s honest desire for a home and work?',
          p3Options: [
            'He was deeply moved by the boy\'s integrity and agreed to adopt him as his son',
            'He called the police to take the boy back to the orphanage',
            'He gave him five cents and told him to buy a train ticket to New York'
          ],
          p3Insight: 'Compassion united a lonely man and a homeless boy into a real family.'
        }
      ],
      compQuestion: {
        question: 'Why did Pollyanna bring Jimmy Bean to John Pendleton\'s mansion?',
        options: [
          'Because Jimmy needed a loving home and Mr. Pendleton had a massive, lonely house that needed a son',
          'Because Jimmy was an expert at polishing silver antiques',
          'Because Mr. Pendleton wanted to teach geometry to village boys',
          'Because Aunt Polly told her to clear all visitors out of the village'
        ],
        explanation: 'Pollyanna realized that John Pendleton was lonely and that Jimmy needed a father and a home.',
        visualClueEmoji: '🏠'
      }
    },
    {
      day: 7,
      title: 'The Silent Town & The Sudden Shock',
      subtitle: 'A speeding motor car, hushed whispers, and a dark shadow',
      summary: 'Walking home from school, Pollyanna is struck by a speeding automobile. The terrible news that she may never walk again hushes the entire town of Beldingsville in grief, testing the Glad Game to its ultimate limit.',
      illustrationType: 'attic_window',
      sceneCaption: 'Aunt Polly weeps at Pollyanna\'s bedside in the sunlit bedroom as townspeople gather anxiously at the gate!',
      avatars: [
        { name: 'Aunt Polly', emoji: '👩‍🦳', speech: 'My darling child... Oh, forgive me! I love you so dearly!', position: 'right' },
        { name: 'Pollyanna', emoji: '👧', speech: 'Aunt Polly... My legs won\'t move... How can I play the Glad Game now?', position: 'left' }
      ],
      hotspots: [
        { id: 'po13', x: 40, y: 50, label: 'Mansion Gate', icon: '⛩️', soundEffect: 'bounce', funFact: 'Dozens of townspeople visited the gate every hour to ask for news of Pollyanna!', action: 'bounce' },
        { id: 'po14', x: 75, y: 35, label: 'Doctor\'s Bag', icon: '🩺', soundEffect: 'magic', funFact: 'Specialist doctors were summoned from New York to examine the injured girl.', action: 'sparkle' }
      ],
      scrambleWord: 'COURAGE',
      vocab: [
        { word: 'Grief-stricken', phonics: 'GREEF-strik-un', definition: 'Deeply affected or overwhelmed by extreme sorrow and heartbreak.', funExample: 'The entire grief-stricken town prayed for Pollyanna\'s recovery.', emoji: '💔' },
        { word: 'Automobile', phonics: 'AW-tuh-muh-beel', definition: 'An early motorized motor car driven on roads.', funExample: 'A speeding automobile struck the girl as she crossed the street.', emoji: '🚗' },
        { word: 'Humbled', phonics: 'HUM-buld', definition: 'Made to feel modest, deeply moved, or aware of one\'s weaknesses.', funExample: 'Aunt Polly was humbled by how much the town loved her niece.', emoji: '🥺' }
      ],
      pages: [
        {
          pageTitle: 'The Terrible Accident',
          paras56: [
            'On a sunny October afternoon, Pollyanna was walking home from school, skipping and humming a happy tune.',
            'As she crossed the main street, a new motor car came speeding around the corner without honking its horn.',
            'There was a terrible screech of brakes, a sudden shout, and Pollyanna was knocked to the cobblestones, motionless and pale.'
          ],
          paras78: [
            'The tragedy struck on a crisp autumn afternoon as school dismissed the town children.',
            'An unfamiliar automobile, roaring down the hill at reckless speed, swerved around the corner and struck the child.',
            'Neighbors rushed forward and carried the limp, unconscious little girl up to the Harrington mansion, where Miss Polly turned white as paper.'
          ],
          paras9: [
            'The serenity of Beldingsville was shattered by a vehicular catastrophe on Main Street.',
            'Struck down by an errant motor car, Pollyanna was conveyed in a comatose condition to the Harrington estate.',
            'The sight of her broken niece shattered Miss Polly\'s veneer of aloofness, exposing the ferocious maternal love that had taken root in her soul.'
          ],
          dialogue: [
            { speaker: 'Miss Polly', text: 'Bring her into my own bedroom! The warmest, sunniest room in the house!', avatarEmoji: '👩‍🦳', side: 'right' },
            { speaker: 'Nancy', text: 'Oh, dear God in heaven, save our little angel!', avatarEmoji: '🧹', side: 'left' }
          ],
          p1Question: 'What tragic accident happened to Pollyanna on her way home from school?',
          p1Options: [
            'She was struck by a speeding automobile while crossing the village street',
            'She fell out of an apple tree in old Tom\'s orchard',
            'She slipped on river ice while skating'
          ],
          p1Insight: 'A sudden tragedy tested the resilience of an entire community.'
        },
        {
          pageTitle: 'The Verdict of the Doctors',
          paras56: [
            'Miss Polly did not put Pollyanna in the cold attic room. She laid her gently upon her own grand feather bed in the finest bedroom.',
            'When Pollyanna woke up, she smiled weakly, but she could not feel her feet or move her legs at all.',
            'A famous specialist from New York came and examined her spine. Outside the door, he whispered the tragic news: Pollyanna might never walk again.'
          ],
          paras78: [
            'For days, fever raged while Miss Polly sat vigil beside the bed, never leaving her niece\'s side for an hour.',
            'When the fever broke, Pollyanna overheard the visiting surgeon tell Miss Polly that her spine was injured and that she was permanently paralyzed.',
            'For the very first time in her life, Pollyanna buried her face in the pillow and wept bitter, heartbroken tears. She could not find a single thing to be glad about.'
          ],
          paras9: [
            'A distinguished neurological consultant delivered the catastrophic prognosis: irreparable spinal trauma resulting in permanent paralysis.',
            'Overhearing the verdict, Pollyanna experienced the complete collapse of her optimistic worldview.',
            'Confronted with lifelong immobility, the child surrendered to inconsolable weeping, unable to extract a shred of consolation from her condition.'
          ],
          dialogue: [
            { speaker: 'Pollyanna', text: 'Aunt Polly... The doctor said I\'ll never walk again... I can\'t play the Glad Game now! I can\'t!', avatarEmoji: '👧', side: 'left' },
            { speaker: 'Miss Polly', text: 'My precious child... Don\'t talk about the game. Just let your Aunt Polly hold you!', avatarEmoji: '👩‍🦳', side: 'right' }
          ]
        },
        {
          pageTitle: 'The Pilgrimage of Love',
          paras56: [
            'When the townspeople heard the news, a quiet sadness fell over Beldingsville.',
            'Every afternoon, dozens of neighbours walked up the hill to Miss Polly\'s door: Mrs. Snow, John Pendleton, Jimmy Bean, and the church choir.',
            'They told Aunt Polly how Pollyanna’s Glad Game had changed their lives, begging her to tell the little girl that the whole town was playing the game for her!'
          ],
          paras78: [
            'The response of the community was unprecedented in the history of Beldingsville.',
            'A steady stream of callers arrived at the mansion: reformed drunkards, quarreling families who had reconciled, and lonely widows.',
            'Each visitor left a message: \'Tell Pollyanna we are glad she came to town, and that we are playing the Glad Game in her honor!\''
          ],
          paras9: [
            'The collective consciousness of Beldingsville mobilized in a magnificent outpouring of reciprocal gratitude.',
            'Dozens of citizens, whose lives had been revitalized by Pollyanna’s influence, converged upon the Harrington estate.',
            'This pilgrimage of love revealed to Miss Polly the monumental spiritual legacy her little niece had generated.'
          ],
          dialogue: [
            { speaker: 'Mrs. Snow', text: 'Tell her I’m glad for my hands and for the rainbows in my room! Tell her she saved my life!', avatarEmoji: '👵', side: 'left' },
            { speaker: 'Miss Polly', text: 'I will tell her, Mrs. Snow... I had no idea how much she gave to everyone.', avatarEmoji: '👩‍🦳', side: 'right' }
          ],
          p3Question: 'How did the townspeople of Beldingsville respond when they heard Pollyanna could not walk?',
          p3Options: [
            'They streamed to the mansion gates to send messages of love and show that they were playing the Glad Game for her',
            'They held an angry town meeting to ban all bicycles',
            'They forgot about her and moved on with their work'
          ],
          p3Insight: 'The love Pollyanna had scattered across the town returned to comfort her in her darkest hour.'
        }
      ],
      compQuestion: {
        question: 'Why did Pollyanna weep bitter tears in her bed after the doctor examined her?',
        options: [
          'Because she learned she might never walk again and could not find anything to be glad about',
          'Because she was forbidden from eating chocolate pudding',
          'Because Aunt Polly took away her red gingham dress',
          'Because the kitten had run away into the woods'
        ],
        explanation: 'Hearing that she was permanently paralyzed shattered her optimism, leaving her unable to play the Glad Game.',
        visualClueEmoji: '💔'
      }
    },
    {
      day: 8,
      title: 'Glad Again & The Letters of Love',
      subtitle: 'Walking on sunny sands and a family united in joy',
      summary: 'Dr. Chilton marries Aunt Polly and takes Pollyanna to a pioneering hospital in Germany. Months later, a joyous letter arrives announcing that Pollyanna has taken her first steps on her own two feet!',
      illustrationType: 'sunlit_veranda',
      sceneCaption: 'Pollyanna walks across the hospital veranda toward Aunt Polly and Dr. Chilton with arms outstretched in triumph!',
      avatars: [
        { name: 'Pollyanna', emoji: '👧', speech: 'Dear Aunt Polly and Uncle Tom! I walked today! I walked six steps on my own feet!', position: 'left' },
        { name: 'Dr. Chilton', emoji: '🩺', speech: 'You are our miracle girl, Pollyanna! The gladdest girl in the world!', position: 'right' }
      ],
      hotspots: [
        { id: 'po15', x: 45, y: 60, label: 'Letter from Sanatorium', icon: '✉️', soundEffect: 'bounce', funFact: 'Pollyanna\'s letter was read aloud from the pulpit in the Beldingsville church!', action: 'bounce' },
        { id: 'po16', x: 75, y: 40, label: 'Sunny Steps', icon: '🩴', soundEffect: 'magic', funFact: 'Walking on the soft sand of the beach helped strengthen Pollyanna\'s legs every morning!', action: 'sparkle' }
      ],
      scrambleWord: 'MIRACLE',
      vocab: [
        { word: 'Sanatorium', phonics: 'san-uh-TOR-ee-um', definition: 'A specialized medical hospital for the treatment of long-term illness or recovery.', funExample: 'Pollyanna traveled to a famous sanatorium by the sea.', emoji: '🏥' },
        { word: 'Exultant', phonics: 'ig-ZUL-tunt', definition: 'Triumphantly happy, joyful, and celebrating a great success.', funExample: 'She wrote an exultant letter describing her first steps.', emoji: '🎉' },
        { word: 'Reconciliation', phonics: 'rek-un-sil-ee-AY-shun', definition: 'The restoring of friendly and loving relations after a long estrangement.', funExample: 'Aunt Polly and Dr. Chilton celebrated their joyful reconciliation.', emoji: '💍' }
      ],
      pages: [
        {
          pageTitle: 'A Love Reunited',
          paras56: [
            'Dr. Chilton was the only doctor who knew of a famous bone specialist across the country who could heal Pollyanna\'s spine.',
            'Years ago, Dr. Chilton had been Miss Polly\'s beloved suitor before their bitter quarrel.',
            'To save Pollyanna, Miss Polly put away her stubborn pride. Dr. Chilton walked into the Harrington mansion, took Miss Polly\'s hands, and they forgave each other with joyful tears.'
          ],
          paras78: [
            'Dr. Thomas Chilton was the estranged lover of Miss Polly’s youth, separated by fifteen years of stubborn pride and silence.',
            'Knowing that only his medical colleague Dr. Mead could cure Pollyanna, Chilton pleaded for permission to help.',
            'Overcome by love for her niece, Miss Polly surrendered her ancient grievance. The lovers were reunited at Pollyanna\'s bedside and married in the parlour.'
          ],
          paras9: [
            'The imperative to secure specialized medical intervention catalyzed the long-delayed reconciliation between Miss Polly and Dr. Chilton.',
            'The barrier of pride that had entombed their youthful romance evaporated before their shared devotion to Pollyanna.',
            'Their matrimonial union at the child\'s bedside healed the central rift in Beldingsville society, setting the stage for Pollyanna’s journey toward recovery.'
          ],
          dialogue: [
            { speaker: 'Dr. Chilton', text: 'Polly, my beloved Polly... Will you let me take our little girl to the specialist?', avatarEmoji: '🩺', side: 'right' },
            { speaker: 'Miss Polly', text: 'Yes, Thomas! Oh, yes! Let us save her together!', avatarEmoji: '👩‍🦳', side: 'left' }
          ],
          p1Question: 'What ancient quarrel was healed because of the town\'s desire to save Pollyanna?',
          p1Options: [
            'The long, bitter estrangement between Aunt Polly and her former lover Dr. Chilton',
            'A dispute between two bakers over the price of apple pies',
            'A fence boundary argument between John Pendleton and the mayor'
          ],
          p1Insight: 'Love and forgiveness healed decades of stubborn silence.'
        },
        {
          pageTitle: 'The Journey to the Sea',
          paras56: [
            'Dr. Chilton and Aunt Polly carried Pollyanna aboard a special train bound for a famous hospital beside the blue ocean.',
            'Every day for ten months, expert doctors massaged her spine, and gentle nurses helped her practice standing.',
            'Back in Beldingsville, Jimmy Bean, Mr. Pendleton, Mrs. Snow, and Nancy gathered every week to read updates on her progress.'
          ],
          paras78: [
            'At the coastal sanatorium, Pollyanna underwent rigorous physical therapy under the care of pioneering orthopedic surgeons.',
            'Surrounded by salty sea breezes and the unwavering devotion of her new uncle and aunt, Pollyanna’s spirit revived.',
            'She resumed playing the Glad Game with the other invalid children at the hospital, turning the sanatorium into a place of song.'
          ],
          paras9: [
            'Pollyanna was relocated to a premier orthopedic institute on the Atlantic seaboard.',
            'Subjected to advanced kinesiological therapy and therapeutic hydrotherapy, her neuromuscular pathways gradually regenerated.',
            'Her psychological vitality acted as a formidable catalyst, inspiring fellow patients and medical staff alike.'
          ],
          dialogue: [
            { speaker: 'Nurse', text: 'Look at your toes wiggling today, Pollyanna! That is real progress!', avatarEmoji: '👩‍⚕️', side: 'right' },
            { speaker: 'Pollyanna', text: 'I\'m so glad! I can feel the sand beneath my feet!', avatarEmoji: '👧', side: 'left' }
          ]
        },
        {
          pageTitle: 'The Gladdest Letter of All',
          paras56: [
            'Then, on a glorious spring morning, a letter postmarked from the sanatorium arrived in Beldingsville.',
            'Nancy rushed to the gate, waving the envelope above her head. The letter said:',
            '\'Dear Aunt Polly and Uncle Tom: I walked today! I got out of bed and walked six whole steps all by myself from the bed to the window! Oh, I am so glad, glad, GLAD!\''
          ],
          paras78: [
            'The letter from Pollyanna was read aloud by the minister from the pulpit of the village church, while the entire congregation wept for joy.',
            '\'I can walk!\' Pollyanna wrote. \'My legs are strong and straight again! I am coming home to Beldingsville next month, and oh, I am glad for every single thing that ever happened to me!\'',
            'Beldingsville was changed forever: a whole town united in gratitude, laughter, and the invincible power of the Glad Game.'
          ],
          paras9: [
            'The arrival of Pollyanna’s epistolary dispatch marked the culmination of a community\'s collective prayers.',
            'Recounting her autonomous ambulation across the veranda, the letter testified to the triumph of medical skill and spiritual resilience.',
            'Beldingsville stood transformed: an interconnected fellowship of renewed hearts, living testaments to the indelible ministry of gladness.'
          ],
          dialogue: [
            { speaker: 'Nancy', text: 'She walked! Our little lamb walked all by herself! The bells ought to ring all day!', avatarEmoji: '🧹', side: 'left' },
            { speaker: 'Old Tom', text: 'Aye, Nancy! God bless the little maid who taught us all how to be glad!', avatarEmoji: '👨‍🌾', side: 'right' }
          ],
          p3Question: 'What wonderful news was contained in Pollyanna\'s letter to Beldingsville?',
          p3Options: [
            'She had taken her first six steps on her own feet and was fully walking again',
            'She had bought a steamship to sail around the world',
            'She had decided to stay at the hospital forever'
          ],
          p3Insight: 'Perseverance, love, and the Glad Game brought joy and healing to all.'
        }
      ],
      compQuestion: {
        question: 'What triumphant sentence concluded Pollyanna\'s joyous letter from the sanatorium?',
        options: [
          'I walked today! I walked six whole steps all by myself from the bed to the window!',
          'I have decided never to visit Beldingsville again!',
          'The doctors told me I must eat oatmeal for ten years!',
          'Please pack all my dolls into the wooden trunk!'
        ],
        explanation: 'Pollyanna joyfully announced that she had taken six autonomous steps from her bed to the window.',
        visualClueEmoji: '🎉'
      }
    }
  ]
};

buildBook(POLLYANNA_SPEC);
