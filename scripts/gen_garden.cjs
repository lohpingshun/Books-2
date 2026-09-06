const { buildBook } = require('./gen_classics_helper.cjs');

const GARDEN_SPEC = {
  fileName: 'src/data/gardenData.ts',
  varName: 'GARDEN_BOOK',
  id: 'secret_garden',
  title: 'The Secret Garden',
  author: 'Frances Hodgson Burnett',
  badgeTitle: 'Keeper of the Key & Garden Healer',
  coverColor: 'from-emerald-800 via-teal-900 to-stone-900',
  accentColor: '#059669',
  borderColor: 'border-emerald-500',
  themeIcon: '🗝️',
  descriptions: {
    '5-6': 'Step into Yorkshire with young Mary Lennox! With a friendly robin and a hidden brass key, unlock an overgrown secret walled garden and watch flowers, friendship, and joy burst into bloom!',
    '7-8': "Frances Hodgson Burnett's enchanting classic of nature's magic! Follow lonely Mary Lennox as she discovers an abandoned secret garden, befriends animal-whisperer Dickon, and helps her sickly cousin Colin walk.",
    '9+': "Frances Hodgson Burnett's timeless masterpiece of healing and renewal. On the brooding Yorkshire moors, a locked walled garden and a robin's chirp ignite a transformative journey of friendship, vitality, and love."
  },
  chapters: [
    {
      day: 1,
      title: 'Across the Moor to Misselthwaite',
      subtitle: 'A stormy journey across the wild Yorkshire heather',
      summary: 'Sour and lonely orphan Mary Lennox arrives in England from India and journeys across the vast, windblown Yorkshire moors to the gloomy hundred-room Misselthwaite Manor.',
      illustrationType: 'secret_garden_door',
      sceneCaption: 'A carriage rattles through the wild purple moorland toward the ancient stone manor of Misselthwaite!',
      avatars: [
        { name: 'Mary', emoji: '👧', speech: 'What a queer, dark place! The wind sounds like someone crying.', position: 'left' },
        { name: 'Mrs. Medlock', emoji: '👵', speech: 'That\'s just the moor wind howling across six miles of heather, child!', position: 'right' }
      ],
      hotspots: [
        { id: 'sg1', x: 35, y: 55, label: 'Purple Heather', icon: '🌾', soundEffect: 'magic', funFact: 'Heather is a hardy evergreen shrub with purple flowers that carpets the Yorkshire moors!', action: 'sparkle' },
        { id: 'sg2', x: 75, y: 40, label: 'Iron Manor Gates', icon: '🏰', soundEffect: 'bounce', funFact: 'Misselthwaite Manor was hundreds of years old with nearly one hundred locked rooms!', action: 'bounce' }
      ],
      scrambleWord: 'MOORLAND',
      vocab: [
        { word: 'Moorland', phonics: 'MOOR-land', definition: 'A wide expanse of open, uncultivated highland covered with heather.', funExample: 'The cold wind swept fiercely across the purple moorland.', emoji: '🌾' },
        { word: 'Cantankerous', phonics: 'kan-TANG-ker-us', definition: 'Bad-tempered, argumentative, and uncooperative.', funExample: 'Young Mary was sour and cantankerous when she first arrived.', emoji: '😠' },
        { word: 'Manor', phonics: 'MAN-er', definition: 'A large country house surrounded by extensive gardens and lands.', funExample: 'Misselthwaite Manor had dark corridors and locked antique rooms.', emoji: '🏰' }
      ],
      pages: [
        {
          pageTitle: 'The Girl with the Sour Face',
          paras56: [
            'When Mary Lennox was sent to England, everyone said she was the most disagreeable-looking child ever seen.',
            'She had a little thin face, thin light hair, and a sour yellow expression because she had been born in hot India.',
            'Now she was an orphan on a train rushing through the night toward Yorkshire, wrapped in a thick woollen traveling coat.'
          ],
          paras78: [
            'When Mary Lennox was sent to Misselthwaite Manor to live with her uncle, everybody said she was the most disagreeable child ever seen.',
            'She had a little thin face and a little thin body, thin light hair, and a sour expression. Her hair was yellow, and her face was yellow because she had been sickly.',
            'Beside her in the railway carriage sat stout Mrs. Medlock, the housekeeper, who warned her that Mr. Archibald Craven was a hunchbacked recluse who saw no one.'
          ],
          paras9: [
            'When Mary Lennox was consigned to Misselthwaite Manor to reside under the guardianship of her uncle, she arrived with the reputation of an incorrigible child.',
            'Born in colonial India and neglected by parents who prized social vanity over domestic affection, she had developed a haughty, recalcitrant disposition.',
            'As the train hurtled northward through the gloom, Mrs. Medlock imparted chilling details concerning Mr. Archibald Craven, the reclusive widower presiding over Misselthwaite.'
          ],
          dialogue: [
            { speaker: 'Mrs. Medlock', text: 'Don\'t expect to see much of your uncle! He keeps to himself and locks up his rooms.', avatarEmoji: '👵', side: 'right' },
            { speaker: 'Mary', text: 'I do not care. I do not like people anyway.', avatarEmoji: '👧', side: 'left' }
          ],
          p1Question: 'Why was Mary Lennox travelling on the night train to Yorkshire?',
          p1Options: [
            'Because she was an orphan being sent to live at Misselthwaite Manor with her uncle',
            'Because she had won a scholarship to a fancy boarding school',
            'Because she was visiting her aunt for the summer holidays'
          ],
          p1Insight: 'A lonely journey across the moors marked the beginning of Mary\'s rebirth.'
        },
        {
          pageTitle: 'The Wild Night Wind',
          paras56: [
            'They climbed into a carriage waiting at the station. Outside the window, darkness stretched out endlessly like a stormy ocean.',
            '\'What is this place?\' Mary asked, hearing the loud roaring sound outside.',
            '\'It\'s the moor,\' said Mrs. Medlock. \'Just miles and miles of wild bushes and wind where nothing grows but heather and gorse.\''
          ],
          paras78: [
            'The carriage lamps cast yellow beams into pitch-black darkness as horses galloped over bumpy stone roads.',
            '\'It\'s not the sea, is it?\' asked Mary, listening to the rushing sound that resembled giant ocean waves.',
            '\'No, child, it\'s just the great Yorkshire moor,\' replied Mrs. Medlock. \'A wild, dreary place with nothing on it but heather and wild ponies.\''
          ],
          paras9: [
            'The post-chaise plunged into an abyss of darkness as they crossed the threshold of the Yorkshire moorland.',
            'A tempestuous wind swept through the heather, producing a hollow, undulating roar evocative of a turbulent ocean.',
            'Mary peered into the impenetrable void, captivated despite herself by the savage majesty of this untamed wilderness.'
          ],
          dialogue: [
            { speaker: 'Mary', text: 'It sounds just like the sea, roaring in the black night!', avatarEmoji: '👧', side: 'left' },
            { speaker: 'Mrs. Medlock', text: 'That\'s only the wind blowing across six miles of wilderness, little miss!', avatarEmoji: '👵', side: 'right' }
          ]
        },
        {
          pageTitle: 'The Hundred Locked Rooms',
          paras56: [
            'At last, the carriage drew up to a huge stone house with tall chimneys and gloomy flickering windows.',
            'Inside, a kind housemaid named Martha had lit a warm coal fire in Mary\'s nursery bedroom.',
            'Martha told Mary that ten years ago, her uncle had locked up a special walled garden after his beloved wife died, burying the key deep in the earth.'
          ],
          paras78: [
            'Misselthwaite Manor appeared enormous and cavernous, with long shadowy corridors hung with ancient portraits of long-dead lords and ladies.',
            'The next morning, warm-hearted Yorkshire maid Martha brought Mary hot porridge and encouraged her to run outdoors.',
            'Martha whispered of a tragic secret: a walled rose garden locked ten years ago by Mr. Craven, who forbade anyone from ever setting foot inside.'
          ],
          paras9: [
            'The ancient manor loomed like a feudal stronghold, its myriad mullioned windows reflecting the bleak dawn over the moor.',
            'In the rustic Yorkshire maid Martha Sowerby, Mary encountered a refreshing simplicity devoid of deference or malice.',
            'Martha divulged the central tragedy haunting the estate: the walled pleasure garden locked by Mr. Craven upon the tragic demise of his wife, its key buried in forgotten soil.'
          ],
          dialogue: [
            { speaker: 'Martha', text: 'There\'s a garden no one has been inside for ten whole years! He locked the door and dug a hole for the key.', avatarEmoji: '👩‍🌾', side: 'right' },
            { speaker: 'Mary', text: 'Why did he lock it? How I should like to see it!', avatarEmoji: '👧', side: 'left' }
          ],
          p3Question: 'What intriguing secret about a garden did Martha reveal to Mary?',
          p3Options: [
            'That Mr. Craven had locked a walled garden ten years ago and buried the key',
            'That the garden was guarded by three fierce dragons',
            'That all the fruit trees grew silver coins instead of pears'
          ],
          p3Insight: 'The mystery of a locked garden sparked Mary\'s curiosity for the first time.'
        }
      ],
      compQuestion: {
        question: 'Why had Mr. Archibald Craven locked the secret walled garden ten years before Mary\'s arrival?',
        options: [
          'Because his beloved wife tragically died there and his grief made him lock it forever',
          'Because the local villagers complained about the thorny rose bushes',
          'Because he wanted to hide his vast collection of gold coins inside',
          'Because he was building a high stone tower for birds'
        ],
        explanation: 'Mr. Craven locked the garden in overwhelming grief after Mrs. Craven died from a tragic fall in the garden.',
        visualClueEmoji: '🗝️'
      }
    },
    {
      day: 2,
      title: 'The Friendly Robin Redbreast',
      subtitle: 'A feathered songbird perched atop the high stone wall',
      summary: 'Exploring the walled orchards, Mary meets grumpy old gardener Ben Weatherstaff and befriends a cheerful, curious robin redbreast who changes her sour attitude.',
      illustrationType: 'robin_perch',
      sceneCaption: 'A bright-eyed robin redbreast tilts his head on the ivy-covered wall, chirping a joyful melody to Mary!',
      avatars: [
        { name: 'Robin', emoji: '🐦', speech: 'Chirp-chirp! Tweet-tweet!', position: 'right' },
        { name: 'Mary', emoji: '👧', speech: 'You sweet little thing! Are you really singing just for me?', position: 'left' }
      ],
      hotspots: [
        { id: 'sg3', x: 40, y: 50, label: 'Robin\'s Red Breast', icon: '🐦', soundEffect: 'magic', funFact: 'British robins are naturally bold and curious, often following gardeners to catch worms!', action: 'sparkle' },
        { id: 'sg4', x: 75, y: 45, label: 'Gardener\'s Spade', icon: '🪴', soundEffect: 'bounce', funFact: 'Ben Weatherstaff had tended the Misselthwaite gardens for over forty years.', action: 'bounce' }
      ],
      scrambleWord: 'ROBIN',
      vocab: [
        { word: 'Inquisitive', phonics: 'in-KWIZ-i-tiv', definition: 'Eager for knowledge; curious and asking many questions.', funExample: 'The inquisitive robin cocked his head to inspect Mary closely.', emoji: '🧐' },
        { word: 'Chirping', phonics: 'CHURP-ing', definition: 'Making short, high-pitched sounds or cheerful bird calls.', funExample: 'A merry bird was chirping atop the mossy brick wall.', emoji: '🐦' },
        { word: 'Orchard', phonics: 'OR-cherd', definition: 'A piece of enclosed land planted with fruit trees like apples and pears.', funExample: 'Mary strolled between the bare apple trees of the kitchen orchard.', emoji: '🍎' }
      ],
      pages: [
        {
          pageTitle: 'The Kitchen Gardens and Old Ben',
          paras56: [
            'The fresh outdoor air of Yorkshire smelled sweet and clean after the hot dust of India.',
            'Mary put on her warm coat and skipped through the courtyard into the kitchen gardens.',
            'She found an old man with a spade digging up potatoes. His name was Ben Weatherstaff, and he looked almost as sour as Mary herself.'
          ],
          paras78: [
            'The crisp morning air on the moors had a tangy freshness that made Mary\'s pale cheeks turn faintly pink.',
            'She wandered through walled kitchen gardens, vegetable plots, and fruit orchards where bare espalier trees hugged the brick walls.',
            'She encountered an elderly gardener digging soil. Ben Weatherstaff scowled at her, muttering in broad Yorkshire that he had never seen such a cross-looking child.'
          ],
          paras9: [
            'The bracing moorland atmosphere exercised an invigorating effect upon Mary\'s torpid circulation.',
            'Traversing a series of interconnected kitchen gardens, she observed dormant fruit trees affixed to ancient stone boundaries.',
            'She disturbed the solitary labours of Ben Weatherstaff, a crusty horticulturist who mirrored Mary\'s own misanthropic temperament.'
          ],
          dialogue: [
            { speaker: 'Ben', text: 'We\'re neither of us good-lookin\', miss, and we\'re both of us sour as vinegar!', avatarEmoji: '👨‍🌾', side: 'right' },
            { speaker: 'Mary', text: 'I never thought of myself as sour until I came to England.', avatarEmoji: '👧', side: 'left' }
          ],
          p1Question: 'Whom did Mary encounter digging in the kitchen garden?',
          p1Options: [
            'Ben Weatherstaff, the crusty and plain-spoken old gardener',
            'The postman delivering morning parcels',
            'A travelling flute player from York'
          ],
          p1Insight: 'Meeting someone just as sour as herself showed Mary a mirror to her own behaviour.'
        },
        {
          pageTitle: 'The Feathered Friend',
          paras56: [
            'Suddenly, Ben stopped digging and put his fingers to his lips. A soft, clear whistle trilled through the branches.',
            'A tiny bird with bright black eyes and a bright red chest flew down and perched upon a clod of brown earth.',
            'The robin looked right into Mary\'s eyes, cocking his head to one side as if he wanted to be her very first friend.'
          ],
          paras78: [
            'Ben Weatherstaff whistled softly, and almost instantly, a feathered creature with a scarlet waistcoat fluttered down from an apple bough.',
            'It was a robin redbreast, plump and bold, cocking his head inquisitively as he hopped near Ben\'s boots.',
            '\'He\'s the only friend I\'ve got in the world,\' said Ben gently, his wrinkled face softening into a warm smile.'
          ],
          paras9: [
            'Ben emitted a low melodious trill, which summoned a spirited avian companion from the dormant boughs.',
            'The robin possessed a vibrant crimson breast and lustrous dark eyes that sparkled with intelligence.',
            'Observing the bird\'s familiar rapport with the crusty gardener, Mary experienced an unfamiliar yearning for companionship.'
          ],
          dialogue: [
            { speaker: 'Ben', text: 'He knows he\'s the king of this garden! Watch him cock his tail at you!', avatarEmoji: '👨‍🌾', side: 'right' },
            { speaker: 'Mary', text: 'He really isn\'t afraid of me at all! He looks like a tiny person.', avatarEmoji: '👧', side: 'left' }
          ]
        },
        {
          pageTitle: 'Singing on the Ivy Wall',
          paras56: [
            'When Ben walked away, the robin flew up to the top of a high stone wall covered in thick ivy.',
            'Mary walked softly along the path, whispering to the bird in a gentle voice she had never used before.',
            'The robin burst into a glorious, bubbling song, making Mary feel happy and alive for the first time in her life.'
          ],
          paras78: [
            'The robin hopped along the crest of the ivy-draped boundary wall, keeping pace with Mary as she walked beneath.',
            'Mary paused and mimicked his chirping sound, feeling an extraordinary surge of warmth in her lonely heart.',
            'The little bird puffed his red feathers and poured forth a joyous carol, convinced that this curious little girl meant him no harm.'
          ],
          paras9: [
            'The bird flitted along the ivy-clad parapet, following Mary with inquisitive scrutiny as she paced the gravel walk.',
            'Moved by an instinctive impulse, Mary addressed the creature in whispered tones of unfeigned tenderness.',
            'The robin reciprocated with an exuberant burst of song, melting the icy defenses that had encrusted the orphan\'s spirit.'
          ],
          dialogue: [
            { speaker: 'Mary', text: 'Would you please be my friend? I have never had a friend in my whole life.', avatarEmoji: '👧', side: 'left' },
            { speaker: 'Robin', text: 'Chirp-chirp! Tweet-weet! (I\'ll be your friend!)', avatarEmoji: '🐦', side: 'right' }
          ],
          p3Question: 'How did Mary feel when the robin redbreast sang directly to her from the ivy wall?',
          p3Options: [
            'She felt happy and gentle for the first time, knowing she had found a true friend',
            'She felt scared that the bird might peck her fingers',
            'She felt bored and wished she had a storybook instead'
          ],
          p3Insight: 'The robin\'s gentle friendship began to thaw Mary\'s cold and lonely heart.'
        }
      ],
      compQuestion: {
        question: 'How did old Ben Weatherstaff summon the friendly robin redbreast to his garden plot?',
        options: [
          'By putting his fingers to his lips and whistling a soft, melodious trill',
          'By banging two tin cups together loudly',
          'By tossing a handful of shiny copper pennies into the air',
          'By waving a red handkerchief above his head'
        ],
        explanation: 'Ben Weatherstaff whistled softly, and the bold little robin flew down immediately to inspect him.',
        visualClueEmoji: '🐦'
      }
    },
    {
      day: 3,
      title: 'The Buried Brass Key',
      subtitle: 'A patch of overturned earth and a flash of ancient metal',
      summary: 'Following her friendly robin across the orchard border, Mary watches the bird scratch up the damp earth and discovers an old brass key buried for ten years.',
      illustrationType: 'robin_perch',
      sceneCaption: 'The robin pecks beside a worm hole as Mary spots the tarnished brass ring of the buried key!',
      avatars: [
        { name: 'Mary', emoji: '👧', speech: 'Look! The robin is scratching the soil! What is that rusty thing?', position: 'left' },
        { name: 'Robin', emoji: '🐦', speech: 'Chirp! Chirp! Peck-peck! (Look beneath the ivy!)', position: 'right' }
      ],
      hotspots: [
        { id: 'sg5', x: 45, y: 60, label: 'Tarnished Key', icon: '🗝️', soundEffect: 'bounce', funFact: 'The brass key had lain buried in the dark earth for ten cold Yorkshire winters!', action: 'bounce' },
        { id: 'sg6', x: 75, y: 35, label: 'Skipping Rope', icon: '🪢', soundEffect: 'magic', funFact: 'Martha gave Mary a red-handled skipping rope that helped her build healthy muscles!', action: 'sparkle' }
      ],
      scrambleWord: 'BRASSKEY',
      vocab: [
        { word: 'Tarnished', phonics: 'TAR-nisht', definition: 'Dull or discoloured after being exposed to air and moisture over time.', funExample: 'The tarnished key was green and brown with garden soil.', emoji: '🗝️' },
        { word: 'Unearth', phonics: 'un-ERTH', definition: 'To dig up or discover something that was hidden or buried underground.', funExample: 'The robin helped Mary unearth the ancient brass key.', emoji: '🌱' },
        { word: 'Treasure', phonics: 'TREZH-er', definition: 'A precious, valuable, or cherished object found after searching.', funExample: 'To Mary, that rusted key was more precious than any royal treasure.', emoji: '✨' }
      ],
      pages: [
        {
          pageTitle: 'The Skipping Rope Gift',
          paras56: [
            'Martha Sowerby brought Mary a wonderful present from her mother: a skipping rope with polished red wooden handles!',
            'Mary had never seen a skipping rope in India. She skipped around the stone courtyard until her cheeks glowed pink.',
            'She skipped out to the long walk near the walled gardens, where the robin hopped merrily along the path.'
          ],
          paras78: [
            'Martha brought a delightful parcel wrapped in brown paper: a sturdy skipping rope sent with love by Martha\'s mother, Mrs. Sowerby.',
            'Delighted by the novel exercise, Mary skipped along the flagstones, her lungs filling with invigorating moorland breeze.',
            'Her counting reached one hundred skips as she arrived beneath the ivy-clad wall where her feathered friend was waiting.'
          ],
          paras9: [
            'A thoughtful token from Martha\'s mother arrived in the form of a crimson-handled skipping rope.',
            'The rhythmic physical exertion stimulated Mary\'s sluggish vitality, imparting a healthy bloom to her previously sallow complexion.',
            'Skipping with mounting dexterity, she proceeded toward the perimeter wall where the robin maintained his watchful sentinel.'
          ],
          dialogue: [
            { speaker: 'Martha', text: 'Our mother says skipping will strengthen your legs and put good Yorkshire beef on your bones!', avatarEmoji: '👩‍🌾', side: 'right' },
            { speaker: 'Mary', text: 'It makes me feel so warm and hungry, Martha! I skipped one hundred times!', avatarEmoji: '👧', side: 'left' }
          ],
          p1Question: 'What thoughtful gift did Martha\'s mother send to young Mary?',
          p1Options: [
            'A sturdy skipping rope with polished red wooden handles',
            'A porcelain doll dressed in blue velvet',
            'A silver music box playing a lullaby'
          ],
          p1Insight: 'Active outdoor play revitalized Mary\'s health and lifted her spirits.'
        },
        {
          pageTitle: 'The Robin Points the Way',
          paras56: [
            'The robin was perched upon a mound of freshly turned earth, pecking at a wriggling fat earthworm.',
            'When Mary stopped skipping, the robin cocked his eye and chirped, hopping to another patch of soil under the ivy.',
            'Mary knelt down beside the bird. In the loose dirt, she noticed a strange ring of tarnished metal sticking out.'
          ],
          paras78: [
            'The robin was perched atop a freshly dug furrow, busily unearthing a plump earthworm for his breakfast.',
            'As Mary approached, the bird fluttered into the flowerbed, cocking his head as if deliberately beckoning her closer.',
            'Glancing downward at the soil where the bird had been scratching, Mary\'s eye caught a glimpse of an unusual metallic loop.'
          ],
          paras9: [
            'The robin occupied an overturned clod of earth, industriously foraging for invertebrate prey among the damp roots.',
            'Observing Mary\'s approach, he executed a delicate hop toward a secluded recess beneath the tangled ivy foliage.',
            'Directing her gaze toward the disturbance in the humus, Mary detected the curved perimeter of an oxidized metallic object.'
          ],
          dialogue: [
            { speaker: 'Mary', text: 'What are you showing me, little bird? Is there something hiding in the dirt?', avatarEmoji: '👧', side: 'left' },
            { speaker: 'Robin', text: 'Chirp! Chirp! (Dig here, Mary! Look!)', avatarEmoji: '🐦', side: 'right' }
          ]
        },
        {
          pageTitle: 'The Secret in the Soil',
          paras56: [
            'Mary reached down and pulled on the metal ring. The soil crumbled away, revealing a heavy brass key!',
            'It was covered with green mold and rust because it had been buried in the ground for ten whole years.',
            '\'It is the key to the secret garden!\' Mary whispered in wonder, holding the cold metal tightly in her coat pocket.'
          ],
          paras78: [
            'Mary plunged her fingers into the damp black soil and grasped the half-buried ring with trembling excitement.',
            'Out came an antique brass key, heavy and rusted, encrusted with damp loam from a decade of subterranean slumber.',
            'Heart pounding with exhilarating suspense, she clutched the treasure to her chest: the key to the mysterious locked garden!'
          ],
          paras9: [
            'Extricating the artifact from its subterranean resting place, Mary inspected a substantial brass key corroded with verdigris.',
            'Ten winters had elapsed since Archibald Craven consigned this instrument to the earth in a paroxysm of grief.',
            'Possession of this relic electrified Mary\'s imagination; the portal to the forbidden sanctuary lay tantalizingly within her reach.'
          ],
          dialogue: [
            { speaker: 'Mary', text: 'It is the key! The key that was buried ten years ago! Perhaps I can find the door!', avatarEmoji: '👧', side: 'left' },
            { speaker: 'Robin', text: 'Chirp! Chirp! Tweet! (Keep it safe in your pocket!)', avatarEmoji: '🐦', side: 'right' }
          ],
          p3Question: 'What object did the robin help Mary unearth from the damp soil?',
          p3Options: [
            'The tarnished brass key to the locked secret garden',
            'A silver pocket watch belonging to old Ben',
            'A lost gold wedding band'
          ],
          p3Insight: 'The discovery of the buried key brought Mary one step closer to her magical world.'
        }
      ],
      compQuestion: {
        question: 'Where was the tarnished brass key hidden before the robin revealed it to Mary?',
        options: [
          'Buried in the damp earth beneath the ivy where the robin was scratching for worms',
          'Hanging from a bronze nail in the greenhouse potting shed',
          'Tucked inside an old leather boot in Martha\'s pantry',
          'Resting at the bottom of the stone courtyard fountain'
        ],
        explanation: 'The key had been buried in the soil for ten years until the robin\'s pecking caught Mary\'s eye.',
        visualClueEmoji: '🗝️'
      }
    },
    {
      day: 4,
      title: 'Behind the Curtain of Ivy',
      subtitle: 'A gust of wind, a swinging curtain of leaves, and an open lock',
      summary: 'A sudden gust of moorland wind lifts the heavy tapestry of climbing ivy, revealing a round wooden door. Mary inserts the brass key, turns the lock, and steps into the sleeping secret garden.',
      illustrationType: 'secret_garden_door',
      sceneCaption: 'Wind blows aside the thick ivy to reveal the round wooden door and its rusted keyhole!',
      avatars: [
        { name: 'Mary', emoji: '👧', speech: 'The key fits! The lock is turning! I am inside the secret garden!', position: 'left' },
        { name: 'Robin', emoji: '🐦', speech: 'Chirp! Chirp! Welcome to our secret kingdom!', position: 'right' }
      ],
      hotspots: [
        { id: 'sg7', x: 40, y: 50, label: 'Rusted Lock', icon: '🚪', soundEffect: 'bounce', funFact: 'Mary had to turn the heavy brass key with both hands because the lock was so stiff!', action: 'bounce' },
        { id: 'sg8', x: 75, y: 40, label: 'Green Rose Shoots', icon: '🌱', soundEffect: 'magic', funFact: 'Rose bushes can stay alive under grey wood for years, waiting for spring sunshine!', action: 'sparkle' }
      ],
      scrambleWord: 'GARDEN',
      vocab: [
        { word: 'Overgrown', phonics: 'oh-ver-GROHN', definition: 'Covered with wild, untrimmed, or excessive plant growth.', funExample: 'The garden was overgrown with tangled brown rose vines.', emoji: '🌿' },
        { word: 'Whispering', phonics: 'HWIS-per-ing', definition: 'Making a soft, rustling sound like wind through leaves.', funExample: 'The whispering wind blew the heavy ivy aside.', emoji: '🍃' },
        { word: 'Slumber', phonics: 'SLUM-ber', definition: 'A quiet, peaceful sleep or dormant state of rest.', funExample: 'The flowers were resting in a deep ten-year slumber.', emoji: '😴' }
      ],
      pages: [
        {
          pageTitle: 'The Wind Blows the Ivy',
          paras56: [
            'Mary carried the heavy brass key in her pocket for two whole days, searching every stone wall for a hidden door handle.',
            'Then, on a windy afternoon, the robin perched upon a high branch above her head, chirping loudly.',
            'A sudden strong gust of wind blew across the moor. It caught a long curtain of climbing ivy and lifted it high in the air!'
          ],
          paras78: [
            'Possession of the key consumed Mary\'s waking thoughts. She traced miles of brickwork covered in thick curtains of dark green leaves.',
            'While skipping beneath the perimeter wall, she spotted the robin fluttering among the vines as if sending an urgent signal.',
            'Just then, a tremendous gust of moor wind roared through the orchard, sweeping aside a dense veil of hanging ivy like a theatre curtain.'
          ],
          paras9: [
            'Having acquired the key, Mary conducted an exhaustive reconnaissance of the exterior masonry concealed beneath evergreen foliage.',
            'The robin fluttered persistently above a specific segment of the boundary, orchestrating her movements with uncanny prescience.',
            'A sudden gale sweeping off the moors dislodged a luxuriant curtain of ivy, exposing what decades of vegetation had kept hidden.'
          ],
          dialogue: [
            { speaker: 'Mary', text: 'Look! The wind is lifting the ivy! There is something behind the leaves!', avatarEmoji: '👧', side: 'left' },
            { speaker: 'Robin', text: 'Chirp! Chirp! (The door is right there, Mary!)', avatarEmoji: '🐦', side: 'right' }
          ],
          p1Question: 'What caused the hidden door in the stone wall to be revealed?',
          p1Options: [
            'A strong gust of moor wind blew aside the heavy curtain of hanging ivy',
            'Ben Weatherstaff cut the ivy down with garden clippers',
            'Lightning struck the stone wall during a midnight storm'
          ],
          p1Insight: 'Nature seemed to conspire to help Mary unlock the long-closed garden.'
        },
        {
          pageTitle: 'The Turning of the Lock',
          paras56: [
            'Beneath the lifted ivy, Mary saw a round wooden door with heavy iron studs and a rusted keyhole.',
            'Her heart thumped against her ribs. She slipped the brass key into the lock. It slid right in!',
            'Using both hands, she turned the key with all her strength. \'Click!\' The heavy old lock sprang open.'
          ],
          paras78: [
            'Underneath the displaced foliage lay an arched oak door studded with iron nails, its surface weathered by years of storms.',
            'Trembling with nervous anticipation, Mary extracted the key from her pocket and inserted it into the keyhole. It fitted perfectly.',
            'She grasped the key with both hands and twisted with all her might. With a dry, grinding groan, the ancient tumblers yielded.'
          ],
          paras9: [
            'The revelation materialized as a stout oak portal reinforced with iron strapping, embedded within the masonry.',
            'With palpitating pulse, Mary inserted the brass key into the corroded escutcheon; the mechanism engaged without resistance.',
            'Exerting reciprocal leverage, she compelled the rusted bolt to retreat, shattering a decade of enforced seclusion.'
          ],
          dialogue: [
            { speaker: 'Mary', text: 'It turned! The door is unlocking! I can push it open!', avatarEmoji: '👧', side: 'left' },
            { speaker: 'Robin', text: 'Tweet! Tweet! (Step inside quietly!)', avatarEmoji: '🐦', side: 'right' }
          ]
        },
        {
          pageTitle: 'Inside the Secret World',
          paras56: [
            'Mary pushed the heavy door open and slipped inside. She quickly closed the door behind her so no one would see.',
            'She was standing in the sweetest, most mysterious place imaginable. High stone walls surrounded her, covered in climbing grey rose trees.',
            'The grass was pale brown, and fairy-like branches hung down in graceful arches. \'How still it is,\' she whispered. \'The whole garden is asleep!\''
          ],
          paras78: [
            'Slipping through the narrow aperture, Mary pushed the door shut behind her, standing breathless in an enchanting wonderland.',
            'High walls encircled an enclosed paradise where old rose climbers had spread from tree to tree, weaving grey canopies in the air.',
            'No footstep had disturbed this sanctuary for ten years. It felt like an enchanted kingdom suspended in a peaceful, magical slumber.'
          ],
          paras9: [
            'Stepping across the mossy threshold, Mary secured the portal, isolating herself within a realm untouched by the outer world.',
            'An ethereal network of rambling rose vines bridged the canopy between dormant fruit trees, creating a labyrinth of gossamer grey stems.',
            'A profound tranquility enveloped the enclosure; Mary felt as though she had entered an enchanted fairytale forest suspended in time.'
          ],
          dialogue: [
            { speaker: 'Mary', text: 'It is the secret garden! And I am the only person in the world who knows it is alive!', avatarEmoji: '👧', side: 'left' },
            { speaker: 'Robin', text: 'Chirp-chirp! (It\'s our secret garden now!)', avatarEmoji: '🐦', side: 'right' }
          ],
          p3Question: 'What was the secret garden like when Mary first stepped inside?',
          p3Options: [
            'Quiet, mysterious, and magical, with climbing rose vines hanging in graceful arches like a sleeping kingdom',
            'Completely flooded with muddy river water and fallen trees',
            'Filled with stone statues of kings and queens drinking tea'
          ],
          p3Insight: 'Mary stepped into a hidden sanctuary that would soon blossom along with her own heart.'
        }
      ],
      compQuestion: {
        question: 'How did Mary manage to turn the heavy brass key inside the stiff, ancient lock?',
        options: [
          'By grasping the key with both hands and twisting with all her strength',
          'By tapping the key with a small silver hammer',
          'By pouring warm olive oil into the keyhole first',
          'By asking old Ben Weatherstaff to push it for her'
        ],
        explanation: 'The lock was stiff from ten years of rust, so Mary used both hands to force the bolt open.',
        visualClueEmoji: '🚪'
      }
    },
    {
      day: 5,
      title: 'Dickon & The Living Earth',
      subtitle: 'An animal charmer with tame foxes, crows, and packets of seeds',
      summary: 'Mary meets Martha\'s brother Dickon, an animal-whisperer who charms wild creatures with his wooden pipe and teaches Mary that the secret garden is alive with \'wick\' green shoots.',
      illustrationType: 'garden_in_bloom',
      sceneCaption: 'Dickon sits beneath a birch tree playing his pipe as a red fox and tame crow rest peacefully beside him!',
      avatars: [
        { name: 'Dickon', emoji: '🧑‍🌾', speech: 'Eh, she’s not dead at all! That green wood is as wick as you or me!', position: 'right' },
        { name: 'Mary', emoji: '👧', speech: 'Wick? What does \'wick\' mean, Dickon?', position: 'left' }
      ],
      hotspots: [
        { id: 'sg9', x: 35, y: 55, label: 'Tame Crow Soot', icon: '🐦‍⬛', soundEffect: 'bounce', funFact: 'Dickon had rescued a young crow named Soot and taught him to perch on his shoulder!', action: 'bounce' },
        { id: 'sg10', x: 75, y: 45, label: 'Garden Trowel', icon: '🪴', soundEffect: 'magic', funFact: 'Dickon bought garden trowels and flower seeds using pennies earned from odd jobs!', action: 'sparkle' }
      ],
      scrambleWord: 'DICKON',
      vocab: [
        { word: 'Creature', phonics: 'KREE-chur', definition: 'Any living animal or beast, especially a wild or tame one.', funExample: 'Every wild creature on the moor trusted gentle Dickon.', emoji: '🦊' },
        { word: 'Sprouting', phonics: 'SPROWT-ing', definition: 'Growing and pushing up new green shoots from seeds or soil.', funExample: 'Tiny green crocus tips were sprouting through the brown earth.', emoji: '🌱' },
        { word: 'Whistle', phonics: 'HWIS-ul', definition: 'To produce a musical sound by blowing through a pipe or puckered lips.', funExample: 'Dickon played a soft whistle on his homemade wooden pipe.', emoji: '🎶' }
      ],
      pages: [
        {
          pageTitle: 'The Boy on the Moor',
          paras56: [
            'One bright morning, Mary walked toward the woods and heard a queer, piping sound like a bird singing tunes.',
            'Sitting with his back against an ash tree was a boy about twelve years old, with funny turned-up nose, rosy cheeks, and blue eyes.',
            'Resting near his feet were a little brown wild rabbit, two squirrels, and a coal-black crow perched on a branch above!'
          ],
          paras78: [
            'Guided by strange rustic music, Mary wandered toward a copse of trees where a boy sat playing a rough wooden pipe.',
            'He had a wide, happy smile, red cheeks as bright as poppies, and eyes the colour of the moorland sky.',
            'He was surrounded by tame wild creatures: a bushy-tailed red fox cub nuzzled his knee, while a crow named Soot cawed softly on his shoulder.'
          ],
          paras9: [
            'Following an artless pastoral melody, Mary discovered twelve-year-old Dickon Sowerby reclining against an ash tree.',
            'He radiated an aura of buoyant health and unpretentious harmony with the natural world.',
            'A menagerie of wild fauna congregated fearlessly around him, responding to his soothing presence with instinctive trust.'
          ],
          dialogue: [
            { speaker: 'Dickon', text: 'I’m Dickon! Martha told me you wanted some garden seeds and a spade.', avatarEmoji: '🧑‍🌾', side: 'right' },
            { speaker: 'Mary', text: 'Are those wild animals your friends? They don\'t run away from you!', avatarEmoji: '👧', side: 'left' }
          ],
          p1Question: 'What was extraordinary about the wild animals surrounding Dickon under the tree?',
          p1Options: [
            'They were completely tame and rested peacefully beside him without fear',
            'They were performing circus acrobatics on a rope',
            'They were wearing little red jackets made of wool'
          ],
          p1Insight: 'Dickon\'s gentle kindness allowed him to communicate with wild nature.'
        },
        {
          pageTitle: 'The Meaning of \'Wick\'',
          paras56: [
            'Mary trusted Dickon completely. She led him through the door into the secret garden and showed him the tangled rose vines.',
            'Dickon pulled out his pocket knife and gently shaved the bark of a dry brown branch.',
            '\'Look here!\' he exclaimed with a grin. \'Inside, it’s tender and green! That wood is wick! It’s alive and full of juice!\''
          ],
          paras78: [
            'Knowing Dickon would never betray a secret, Mary led him through the hidden door into her walled kingdom.',
            'Dickon walked among the tangled arches with reverence, examining the climbing roses with his expert country eyes.',
            'Scraping the dry grey bark, he revealed succulent emerald tissue beneath: \'The roots are strong! In Yorkshire, we say it’s wick—which means bursting with life!\''
          ],
          paras9: [
            'Recognizing Dickon\'s innate integrity, Mary inducted him into the sanctuary of the secret garden.',
            'Dickon assessed the arboricultural condition of the roses with instinctive horticultural acumen.',
            'Pruning an apparently desiccated stem, he exposed vibrant green cambium: \'The plants have survived! They be wick—alive to the very core!\''
          ],
          dialogue: [
            { speaker: 'Dickon', text: 'When spring sunshine gets warm, there will be thousands of roses blooming over these walls!', avatarEmoji: '🧑‍🌾', side: 'right' },
            { speaker: 'Mary', text: 'Wick! Oh, I am so glad it is wick! We will help it grow!', avatarEmoji: '👧', side: 'left' }
          ]
        },
        {
          pageTitle: 'Planting the Seeds',
          paras56: [
            'Together, Mary and Dickon worked all morning clearing away dry weeds and loosening the damp earth.',
            'They planted seeds of sweet peas, delphiniums, and white poppies in little round beds along the paths.',
            'For the first time, Mary worked until her hands were stained with black garden dirt and her heart was full of laughter.'
          ],
          paras78: [
            'Armed with Dickon’s trowels, the two children cleared suffocating nettles from around the tender green crocus shoots.',
            'Dickon showed Mary how to plant seeds at proper depth and gently pack the fragrant soil with her fingers.',
            'The garden seemed to respond to their loving care, breathing fresh earthy perfume into the warm morning air.'
          ],
          paras9: [
            'United in purpose, Mary and Dickon liberated choked bulb shoots from encumbering weeds and detritus.',
            'They sown flower seeds in carefully prepared borders, revitalizing the neglected beds with youthful zeal.',
            'Through shared manual labor in the restorative soil, Mary experienced the profound joy of nurturing life.'
          ],
          dialogue: [
            { speaker: 'Dickon', text: 'We’ll make this garden the bonniest place on all the Yorkshire moors!', avatarEmoji: '🧑‍🌾', side: 'right' },
            { speaker: 'Mary', text: 'I never knew working with soil could make someone so happy, Dickon!', avatarEmoji: '👧', side: 'left' }
          ],
          p3Question: 'What does the Yorkshire word \'wick\' mean according to Dickon?',
          p3Options: [
            'Alive, healthy, and full of growing sap and green life',
            'Dead, dry, and brittle like old firewood',
            'Covered in prickly thorns that sting your fingers'
          ],
          p3Insight: 'Understanding that the garden was alive filled Mary with hopeful purpose.'
        }
      ],
      compQuestion: {
        question: 'How did Dickon prove to Mary that the dry-looking climbing roses were still alive?',
        options: [
          'By shaving the bark with his pocket knife to show the tender green wood inside',
          'By pouring boiling water over the roots to see if steam came up',
          'By asking his tame crow Soot to peck the high branches',
          'By setting fire to the dry leaves at the base'
        ],
        explanation: 'Dickon scraped back the rough outer bark to reveal vibrant, sap-filled green wood beneath.',
        visualClueEmoji: '🌿'
      }
    },
    {
      day: 6,
      title: 'The Mysterious Crying in the Night',
      subtitle: 'Long shadowy corridors, a hidden door, and a weeping boy',
      summary: 'Woken by mysterious weeping in the dark manor, Mary creeps through locked corridors and discovers her sickly, bedridden cousin Colin Craven, who believes he is doomed to die.',
      illustrationType: 'secret_garden_door',
      sceneCaption: 'Candlelight illuminates a velvet-draped bed where Mary discovers her cousin Colin weeping in the dark!',
      avatars: [
        { name: 'Colin', emoji: '👦', speech: 'Who are you? Are you a ghost from my dreams?', position: 'right' },
        { name: 'Mary', emoji: '👧', speech: 'No, I am Mary Lennox! And you are my cousin Colin!', position: 'left' }
      ],
      hotspots: [
        { id: 'sg11', x: 40, y: 45, label: 'Velvet Bed Curtain', icon: '🛏️', soundEffect: 'bounce', funFact: 'Colin had spent ten years locked in his dark bedroom, never seeing visitors!', action: 'bounce' },
        { id: 'sg12', x: 75, y: 60, label: 'Brass Candlestick', icon: '🕯️', soundEffect: 'magic', funFact: 'Mary carried a flickering wax candle through the secret corridors to find the crying.', action: 'sparkle' }
      ],
      scrambleWord: 'CORRIDOR',
      vocab: [
        { word: 'Corridor', phonics: 'KOR-i-der', definition: 'A long hallway in a building from which doors open into rooms.', funExample: 'Mary tiptoed down the shadowy stone corridor of the manor.', emoji: '🚪' },
        { word: 'Melancholy', phonics: 'MEL-un-kol-ee', definition: 'A deep, pensive, and long-lasting sadness or sorrow.', funExample: 'The weeping sound had a melancholy echo in the quiet night.', emoji: '😢' },
        { word: 'Tapestry', phonics: 'TAP-is-tree', definition: 'A heavy piece of thick fabric with woven pictures hung on walls.', funExample: 'Ancient woven tapestries rustled along the manor walls.', emoji: '🖼️' }
      ],
      pages: [
        {
          pageTitle: 'The Sound of Weeping',
          paras56: [
            'That night, a fierce rainstorm beat against the manor windows, shaking the heavy glass panes.',
            'Mary woke up and heard a faint, mournful sound coming from far away down the dark hallways: someone was crying like a child.',
            'She lit her small candle, wrapped herself in a woollen dressing gown, and crept quietly out into the cold stone corridor.'
          ],
          paras78: [
            'The tempest howling across the moors rattled every casement in Misselthwaite Manor.',
            'Awakened in the dead of night, Mary distinguished the unmistakable sound of human sobbing echoing from distant wings.',
            'Determined to solve the mystery Mrs. Medlock had repeatedly denied, Mary picked up a candle and ventured down the labyrinthine gallery.'
          ],
          paras9: [
            'A violent moorland gale besieged the estate, producing a cacophony of groaning timbers and rattling shutters.',
            'Amid the tempest, Mary perceived the plaintive lamentation that had previously aroused her suspicions.',
            'Defying household injunctions, she embarked upon a nocturnal exploration, guided solely by the flickering taper in her hand.'
          ],
          dialogue: [
            { speaker: 'Mary', text: 'Someone is crying in this house, and I am going to find out who it is!', avatarEmoji: '👧', side: 'left' },
            { speaker: 'Wind', text: 'Whooo-sh! (Beware the dark halls!)', avatarEmoji: '💨', side: 'right' }
          ],
          p1Question: 'Why did Mary venture out into the dark manor corridors late at night?',
          p1Options: [
            'To discover who was crying so sorrowfully in the distant rooms',
            'To search the kitchen pantry for fresh sweet tarts',
            'To look for the robin sleeping in the courtyard'
          ],
          p1Insight: 'Courage and curiosity led Mary to break the rules and help someone in need.'
        },
        {
          pageTitle: 'The Secret Room',
          paras56: [
            'Mary followed the sound past old oil paintings and heavy velvet tapestries to a door hidden behind a curtain.',
            'She pushed the door gently open. A fire glowed in a grand, dimly lit bedchamber.',
            'Lying inside a huge carved four-poster bed was a boy with dark hair and huge, frightened grey eyes. He looked pale and sickly.'
          ],
          paras78: [
            'Pushing aside an embroidered tapestry, Mary discovered an unlatched door leading into a stately, shadowy apartment.',
            'Upon an ornate four-poster bed hung with rose damask lay a boy of about ten, his face ivory-pale and his eyes unnaturally large.',
            'Startled by her entrance, the boy sat up and stared in amazement, asking if she was a ghost or a dream.'
          ],
          paras9: [
            'Penetrating a concealed portal behind a tapestry, Mary entered a lavishly appointed yet suffocating bedchamber.',
            'Recumbent upon a monumental four-poster bed was a frail boy whose striking grey eyes dominated a fragile countenance.',
            'The children regarded each other with mutual astonishment, each perceiving the other as a supernatural apparition.'
          ],
          dialogue: [
            { speaker: 'Colin', text: 'Who are you? Are you a ghost? Where did you come from?', avatarEmoji: '👦', side: 'right' },
            { speaker: 'Mary', text: 'I am Mary Lennox. I am your cousin, and I live here now!', avatarEmoji: '👧', side: 'left' }
          ]
        },
        {
          pageTitle: 'A Sickly Prince',
          paras56: [
            'The boy was Colin Craven, Mr. Archibald Craven\'s only son.',
            'Because his mother had died when he was born, doctors had kept him locked in bed, telling him his back was crooked and that he would die young.',
            'Colin acted like a spoiled little prince who threw screaming tantrums whenever he was upset, but Mary spoke to him like a friend and told him about the magical moor.'
          ],
          paras78: [
            'Colin explained that his father could barely look at him because his eyes reminded him of his lost wife.',
            'Pampered by frightened nurses and terrified of developing a hunchback, Colin lived in morbid dread of early death.',
            'Instead of pitying him, Mary treated him with brisk honesty, describing the robin, Dickon’s wild animals, and the sweet moor wind.'
          ],
          paras9: [
            'Colin Craven was the tragic scion of Misselthwaite, shrouded in an atmosphere of morbid fatalism by overprotective attendants.',
            'Convinced of his impending demise and imaginary deformities, he exerted tyrannical authority over the subservient household.',
            'Mary punctured his hypochondria with bracing Yorkshire candor, captivating his cloistered imagination with tales of the blooming moors.'
          ],
          dialogue: [
            { speaker: 'Colin', text: 'Everyone says I shall grow crooked and die before I am a man!', avatarEmoji: '👦', side: 'right' },
            { speaker: 'Mary', text: 'You won\'t die! You are just cooped up in this stuffy room! What you need is fresh air and sunshine!', avatarEmoji: '👧', side: 'left' }
          ],
          p3Question: 'Why had Colin been kept locked inside his bedroom for so many years?',
          p3Options: [
            'Because doctors and servants feared his back was crooked and that he would die young',
            'Because he was studying to become an astronomer',
            'Because he was hiding from wild moorland pirates'
          ],
          p3Insight: 'Honest friendship and truth began to break Colin\'s prison of self-pity.'
        }
      ],
      compQuestion: {
        question: 'What startling revelation did Colin Craven make about why his father could barely bear to look at him?',
        options: [
          'Because Colin\'s grey eyes were identical to his deceased mother\'s eyes',
          'Because Colin refused to wear formal velvet jackets',
          'Because Colin had broken a valuable grandfather clock',
          'Because Colin wanted to become a blacksmith like Joe'
        ],
        explanation: 'Colin\'s father Archibald Craven avoided looking at his son because Colin\'s eyes painfully reminded him of his late wife.',
        visualClueEmoji: '😢'
      }
    },
    {
      day: 7,
      title: 'Wheeling Colin into the Sunshine',
      subtitle: 'A wheeled chair, closed curtains, and a golden garden secret',
      summary: 'Mary and Dickon persuade Colin to venture outdoors in his wheelchair. They secretly wheel him through the ivy door, where the beauty and warmth of the secret garden ignite Colin\'s will to live.',
      illustrationType: 'garden_in_bloom',
      sceneCaption: 'Colin sits in his wheeled bath chair inside the secret garden, gasping at blooming roses and purple crocuses!',
      avatars: [
        { name: 'Colin', emoji: '👦', speech: 'I shall get well! I shall live forever and ever and ever!', position: 'left' },
        { name: 'Dickon', emoji: '🧑‍🌾', speech: 'Aye, lad! Magic and sunshine are getting right into your bones!', position: 'right' }
      ],
      hotspots: [
        { id: 'sg13', x: 45, y: 60, label: 'Wheeled Bath Chair', icon: '🦽', soundEffect: 'bounce', funFact: 'A bath chair was a Victorian wheelchair pushed by hand through country gardens!', action: 'bounce' },
        { id: 'sg14', x: 75, y: 35, label: 'Blooming Crocus', icon: '🌷', soundEffect: 'magic', funFact: 'Crocuses and snowdrops are the very first flowers to break through winter snow!', action: 'sparkle' }
      ],
      scrambleWord: 'SUNSHINE',
      vocab: [
        { word: 'Invigorating', phonics: 'in-VIG-er-ay-ting', definition: 'Making one feel strong, healthy, and full of fresh energy.', funExample: 'The warm sunshine had an invigorating effect on sick Colin.', emoji: '☀️' },
        { word: 'Radiance', phonics: 'RAY-dee-uns', definition: 'A glowing brightness or dazzling light shining warmly.', funExample: 'Golden radiance flooded through the green leaves above.', emoji: '✨' },
        { word: 'Foliage', phonics: 'FOH-lee-ij', definition: 'The collective green leaves of trees, shrubs, and blooming plants.', funExample: 'Thick emerald foliage covered the high stone garden walls.', emoji: '🍃' }
      ],
      pages: [
        {
          pageTitle: 'The Great Expedition',
          paras56: [
            'Colin had never been outside in the garden since he was a tiny baby.',
            'Mary and Dickon promised to take him on a grand secret adventure, but only if he kept his eyes closed until they arrived.',
            'Dickon wheeled Colin\'s bath chair through the manor doors and down the long gravel paths toward the orchard.'
          ],
          paras78: [
            'On a gloriously mild spring morning, Colin commanded his servants to leave him in the care of Mary and Dickon.',
            'Wrapped in velvet rugs, Colin leaned back in his wheeled bath chair as Dickon steered him through the kitchen gardens.',
            'Mary ran ahead to unlock the secret ivy-covered door, checking anxiously to make sure no gardeners were watching.'
          ],
          paras9: [
            'The vernal equinox brought unseasonable warmth, creating ideal conditions for Colin\'s unprecedented excursion.',
            'Exercising his imperious will, Colin dismissed his retinue, entrusting his mobility entirely to Dickon and Mary.',
            'Mary served as an agile scout, ensuring the pathway to the secluded portal remained devoid of curious observers.'
          ],
          dialogue: [
            { speaker: 'Colin', text: 'Are we near it, Mary? I can smell roses and damp earth!', avatarEmoji: '👦', side: 'left' },
            { speaker: 'Mary', text: 'Keep your eyes shut tight, Colin! We are crossing the threshold now!', avatarEmoji: '👧', side: 'right' }
          ],
          p1Question: 'How did Mary and Dickon transport Colin from his dark room into the gardens?',
          p1Options: [
            'In a wheeled bath chair wrapped in warm velvet rugs',
            'On the back of a large brown moorland horse',
            'In a wooden wheelbarrow filled with straw'
          ],
          p1Insight: 'Taking Colin outside required teamwork, secrecy, and deep trust.'
        },
        {
          pageTitle: 'Opening His Eyes',
          paras56: [
            'Dickon wheeled the chair through the round doorway, and Mary clicked the heavy lock shut behind them.',
            '\'Now open your eyes!\' Mary shouted with joy.',
            'Colin opened his eyes and gasped. The secret garden had burst into thousands of blooming flowers, green leaves, and flying songbirds under a sky of radiant blue.'
          ],
          paras78: [
            'Inside the garden, sunlight poured down like molten gold, illuminating emerald moss and carpets of purple crocuses.',
            'Colin opened his eyes and gazed in breathless awe at the fairy-like canopy of awakening roses.',
            'His pale face flushed with colour as the warm breeze brushed his hair, banishing ten years of gloomy bedridden memories.'
          ],
          paras9: [
            'The transition across the threshold was miraculous: sunlight illuminated a tapestry of nascent flora.',
            'Unclosing his eyes, Colin beheld an Eden of emerald shoots, purple irises, and blossoming fruit boughs.',
            'The psychological impact was instantaneous, shattering his morbid delusions with the triumphant reality of life.'
          ],
          dialogue: [
            { speaker: 'Colin', text: 'It’s alive! The whole world is alive! I shall get well! I shall live forever!', avatarEmoji: '👦', side: 'left' },
            { speaker: 'Dickon', text: 'Look at the robin, lad! He\'s singing his welcome just for you!', avatarEmoji: '🧑‍🌾', side: 'right' }
          ]
        },
        {
          pageTitle: 'The Magic of Spring',
          paras56: [
            'All afternoon, Colin sat among the flowers while Dickon showed him how to plant seeds in the soft earth.',
            'Old Ben Weatherstaff climbed a ladder over the wall, thinking someone was trespassing, but when he saw young Colin smiling, tears ran down his wrinkled cheeks.',
            'Colin proclaimed that a great Magic was inside the garden—a Magic that made green shoots sprout and sick children strong.'
          ],
          paras78: [
            'Colin touched the damp soil for the very first time in his life, marvelling at the roots of living plants.',
            'When gruff Ben Weatherstaff discovered them from a ladder, Colin ordered him down and made him swear solemn secrecy.',
            'Deeply moved, old Ben revealed that Colin’s mother had loved that very tree, and that the boy possessed her radiant smile.'
          ],
          paras9: [
            'Colin experienced an epiphany of vitality, interacting directly with the restorative loam of the garden beds.',
            'The unexpected confrontation with Ben Weatherstaff dissolved into solemn reconciliation under Colin’s awakening authority.',
            'The boy articulated a rudimentary philosophy of natural \'Magic\'—the creative, restorative potency animating the universe.'
          ],
          dialogue: [
            { speaker: 'Colin', text: 'Magic is in this garden, Ben! Magic made me come here, and Magic will make me walk!', avatarEmoji: '👦', side: 'left' },
            { speaker: 'Ben', text: 'God bless your pretty eyes, lad... You\'ve got your mother\'s sweet face after all.', avatarEmoji: '👨‍🌾', side: 'right' }
          ],
          p3Question: 'What did Colin joyfully declare when he opened his eyes inside the secret garden?',
          p3Options: [
            'That he would get well, that the garden was alive, and that he would live forever',
            'That he was cold and wanted his medicine at once',
            'That he wanted to build a stone wall through the middle'
          ],
          p3Insight: 'The beauty of nature awakened Colin\'s will to live and thrive.'
        }
      ],
      compQuestion: {
        question: 'What did Colin shout with overwhelming joy upon opening his eyes inside the secret garden?',
        options: [
          'I shall get well! I shall live forever and ever and ever!',
          'Take me back to my dark bedroom immediately!',
          'Who gave you permission to plant purple crocuses?',
          'The wind on the moor is far too noisy for my head!'
        ],
        explanation: 'Overwhelmed by the beauty and sunlight, Colin joyously cried out that he would recover and live forever.',
        visualClueEmoji: '☀️'
      }
    },
    {
      day: 8,
      title: 'Standing Tall & The Magic of Life',
      subtitle: 'Taking steps on strong legs and a father\'s tearful return',
      summary: 'Colin miraculously stands and walks on his own feet in the secret garden. Drawn by a dream, Mr. Archibald Craven returns to Misselthwaite and discovers a son who is healthy, tall, and laughing.',
      illustrationType: 'colin_standing',
      sceneCaption: 'Colin stands tall and proud on his own two feet as his astonished father embraces him in the blooming garden!',
      avatars: [
        { name: 'Colin', emoji: '👦', speech: 'Look at me, Father! I can walk! I can run! I am completely well!', position: 'left' },
        { name: 'Mr. Craven', emoji: '👨', speech: 'My boy... my darling boy! The secret garden has brought you back to life!', position: 'right' }
      ],
      hotspots: [
        { id: 'sg15', x: 45, y: 55, label: 'Blooming Rose Arches', icon: '🌹', soundEffect: 'bounce', funFact: 'Hundreds of pink, white, and red roses bloomed together in celebration!', action: 'bounce' },
        { id: 'sg16', x: 75, y: 40, label: 'Father\'s Arms', icon: '🫂', soundEffect: 'magic', funFact: 'Mr. Craven felt his ten years of grief wash away the moment he held Colin in the garden.', action: 'sparkle' }
      ],
      scrambleWord: 'HEALING',
      vocab: [
        { word: 'Miraculous', phonics: 'mi-RAK-yuh-lus', definition: 'Extraordinary, wonderful, and resembling an unexpected miracle.', funExample: 'Colin\'s sudden ability to walk seemed truly miraculous to all.', emoji: '✨' },
        { word: 'Triumphant', phonics: 'try-UM-funt', definition: 'Feeling or expressing great happiness and pride in victory.', funExample: 'Colin stood triumphant on his own two feet in the garden.', emoji: '🏆' },
        { word: 'Resplendent', phonics: 'ri-SPLEN-dunt', definition: 'Attractive and impressive through being richly colorful or shining.', funExample: 'The garden was resplendent with roses, butterflies, and sunlight.', emoji: '🌺' }
      ],
      pages: [
        {
          pageTitle: 'Standing on His Own Feet',
          paras56: [
            'Day after day, the three children secretly worked, sang, and laughed in the hidden garden.',
            'Then, one golden afternoon, Colin pushed himself out of his bath chair. He wobbled for a second, gripped Dickon\'s hand, and stood straight as an arrow!',
            '\'Look at me!\' Colin shouted with triumph. \'I am standing on my own two feet! My back is as straight as any boy in Yorkshire!\''
          ],
          paras78: [
            'Nourished by fresh vegetables, buttermilk from Martha\'s mother, and wholesome exercise, Colin’s muscles grew sturdier every day.',
            'One sunny afternoon, Colin summoned his inner resolve and stood upright, discarding his chair forever.',
            'He marched triumphantly around the perimeter paths, chanting a hymn of thanksgiving while Dickon, Mary, and Ben cheered with tearful joy.'
          ],
          paras9: [
            'Through regular physical exertion and psychological liberation, Colin\'s physical rehabilitation proceeded with astonishing speed.',
            'Achieving vertical equilibrium, he demonstrated that his supposed spinal infirmities were mere phantoms of hypochondria.',
            'He paraded through the flowering alleys, vindicating his innate vitality and triumphing over years of fabricated helplessness.'
          ],
          dialogue: [
            { speaker: 'Colin', text: 'Look at me, Ben Weatherstaff! Look at me, Mary! I am standing as tall as a soldier!', avatarEmoji: '👦', side: 'left' },
            { speaker: 'Ben', text: 'You be standing straight and strong as an oak sapling, young master!', avatarEmoji: '👨‍🌾', side: 'right' }
          ],
          p1Question: 'What incredible milestone did Colin achieve inside the secret garden?',
          p1Options: [
            'He stood upright on his own two feet and walked without any help',
            'He caught a wild trout in the garden well',
            'He built a treehouse out of fallen apple branches'
          ],
          p1Insight: 'Determination, fresh air, and friendship cured Colin\'s imaginary illness.'
        },
        {
          pageTitle: 'The Father\'s Journey Home',
          paras56: [
            'Far away in the mountains of Europe, Mr. Archibald Craven had been wandering in sorrow for ten long years.',
            'One night, sitting beside a mountain lake, he heard a sweet voice whisper in his heart: \'Archibald! Come back to the garden!\'',
            'He packed his bags and hurried across land and sea, returning to Yorkshire with a strange, hopeful peace in his soul.'
          ],
          paras78: [
            'While travelling through Switzerland, Mr. Craven felt a sudden lifting of the dark cloud of grief that had oppressed him for a decade.',
            'In a dream, his late wife seemed to call to him from the garden, urging him to return home without delay.',
            'As his carriage crossed the familiar moorland, he felt eager anticipation rather than the customary dread of Misselthwaite.'
          ],
          paras9: [
            'In the Austrian valleys, Archibald Craven experienced a profound psychological catharsis, his chronic melancholia mysteriously lifting.',
            'A telepathic summons seemed to reach him from his wife\'s cherished sanctuary, prompting his urgent repatriation.',
            'Crossing the threshold of Misselthwaite, he was informed by Mrs. Medlock that a baffling transformation had overtaken the household.'
          ],
          dialogue: [
            { speaker: 'Mr. Craven', text: 'Where is the boy? Where is Master Colin?', avatarEmoji: '👨', side: 'left' },
            { speaker: 'Mrs. Medlock', text: 'He is outdoors in the grounds, sir, but he is unlike anything you have ever seen!', avatarEmoji: '👵', side: 'right' }
          ]
        },
        {
          pageTitle: 'The Race to the Door',
          paras56: [
            'Mr. Craven walked quietly toward the walled gardens, drawn by the sound of childish laughter echoing through the trees.',
            'Just as he reached the ivy-covered door, it burst open! A tall, handsome boy ran out into his arms, laughing with radiant joy.',
            '\'Father!\' cried Colin, hugging him tightly. \'It is Colin! The secret garden has made me completely well!\' Father and son wept tears of pure joy.'
          ],
          paras78: [
            'Drawn by exuberant laughter and footsteps racing on gravel, Mr. Craven reached the unlocked ivy portal.',
            'Suddenly, the door flew open, and a boy burst forth at full speed, colliding straight into Mr. Craven’s embrace.',
            'Looking into the boy’s radiant grey eyes, Mr. Craven recognized his son: robust, handsome, and triumphant. The tragic past was healed forever.'
          ],
          paras9: [
            'Guided by melodious youthful laughter, Archibald Craven approached the boundary wall, finding the long-sealed portal ajar.',
            'The door swung outward as a vigorous, athletic youth bolted through the aperture, colliding directly with the traveler.',
            'Confronting his son standing tall and magnificent, Archibald embraced Colin with profound paternal adoration: life, love, and joy had conquered despair.'
          ],
          dialogue: [
            { speaker: 'Mr. Craven', text: 'Colin... my boy! Can it really be you, running and laughing?', avatarEmoji: '👨', side: 'right' },
            { speaker: 'Colin', text: 'Yes, Father! It is Mary, Dickon, and the secret garden that brought me back to life!', avatarEmoji: '👦', side: 'left' }
          ],
          p3Question: 'What happened when Mr. Craven reached the ivy door of the secret garden?',
          p3Options: [
            'Colin ran out through the open door on strong legs and collided into his father\'s joyful embrace',
            'The heavy stone door fell off its iron hinges',
            'Ben Weatherstaff locked the gate and refused to let Mr. Craven in'
          ],
          p3Insight: 'Love, nature, and friendship restored life and happiness to the entire family.'
        }
      ],
      compQuestion: {
        question: 'What miraculous transformation did Mr. Archibald Craven discover upon his return to Misselthwaite Manor?',
        options: [
          'His son Colin was fully healed, standing tall, and running happily in the blooming garden',
          'The entire hundred-room manor had been painted bright red',
          'Mary Lennox had sailed back to India on a merchant ship',
          'The secret garden had been turned into a vegetable farm for the village'
        ],
        explanation: 'Mr. Craven found his once-bedridden son walking, running, and full of health and laughter.',
        visualClueEmoji: '🌺'
      }
    }
  ]
};

buildBook(GARDEN_SPEC);
