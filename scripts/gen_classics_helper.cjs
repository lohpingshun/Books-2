const fs = require('fs');

const STOP_WORDS = new Set([
  'the', 'and', 'that', 'have', 'for', 'not', 'with', 'you', 'this', 'but', 'his', 'from',
  'they', 'say', 'her', 'she', 'will', 'one', 'all', 'would', 'there', 'their', 'what',
  'out', 'about', 'who', 'get', 'which', 'when', 'make', 'can', 'like', 'time', 'just',
  'him', 'know', 'take', 'people', 'into', 'year', 'your', 'good', 'some', 'could', 'them',
  'see', 'other', 'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think',
  'also', 'back', 'after', 'use', 'two', 'how', 'our', 'work', 'first', 'well', 'way',
  'even', 'new', 'want', 'because', 'any', 'these', 'give', 'day', 'most', 'us', 'very',
  'were', 'been', 'was', 'are', 'is', 'said', 'went', 'down', 'made', 'came',
  'felt', 'took', 'told', 'heard', 'knew', 'saw', 'had', 'has', 'did', 'does', 'done', 'shall'
]);

function extractWords(text) {
  const matches = text.match(/[a-zA-Z]{4,}/g) || [];
  const seen = new Set();
  const res = [];
  for (const w of matches) {
    const low = w.toLowerCase();
    if (!STOP_WORDS.has(low) && !seen.has(low)) {
      seen.add(low);
      res.push(w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
    }
  }
  return res;
}

function jumbleOptions(target, distractors, targetIdx) {
  const filtered = distractors.filter(d => d.toLowerCase() !== target.toLowerCase());
  const opts = filtered.slice(0, 3);
  const idx = Math.min(targetIdx, opts.length);
  opts.splice(idx, 0, target);
  return { options: opts, correctIndex: idx };
}

function shuffleComp(options, targetIdx) {
  const correct = options[0];
  const distractors = options.slice(1);
  const opts = [...distractors];
  const idx = Math.min(targetIdx, opts.length);
  opts.splice(idx, 0, correct);
  return { options: opts, correctIndex: idx };
}

function buildBook(spec) {
  const compTargets = [1, 2, 0, 3, 2, 0, 3, 1];
  const vocabTargets = [2, 0, 3, 1, 3, 1, 0, 2];
  const tiers = ['5-6', '7-8', '9+'];
  const chaptersByAge = {};

  for (const tier of tiers) {
    const tierSuffix = tier === '9+' ? '9plus' : tier.replace('-', '');
    const tierChapters = [];

    spec.chapters.forEach((ch, idx) => {
      const day = ch.day;
      const chId = `${spec.id}-${tierSuffix}-${day}`;
      const allText = [ch.summary];

      const pages = ch.pages.map((p, pIdx) => {
        const paras = tier === '5-6' ? p.paras56 : (tier === '7-8' ? p.paras78 : p.paras9);
        allText.push(...paras);

        let rf = undefined;
        if (pIdx === 0 && p.p1Question) {
          const s = shuffleComp(p.p1Options, (idx + 1) % p.p1Options.length);
          rf = {
            id: `rf-${chId}-p1`,
            question: p.p1Question,
            options: s.options,
            correctInsightIndex: s.correctIndex,
            insight: p.p1Insight || 'A thoughtful moment from this classic story.',
            rewardKP: 30
          };
        } else if (pIdx === 2 && p.p3Question) {
          const s = shuffleComp(p.p3Options, (idx + 2) % p.p3Options.length);
          rf = {
            id: `rf-${chId}-p3`,
            question: p.p3Question,
            options: s.options,
            correctInsightIndex: s.correctIndex,
            insight: p.p3Insight || 'A lesson of courage and character.',
            rewardKP: 30
          };
        }

        return {
          pageNumber: pIdx + 1,
          pageTitle: p.pageTitle,
          paragraphs: paras,
          dialogueBites: p.dialogue || [],
          reflectionPrompt: rf
        };
      });

      const passageWords = extractWords(allText.join(' '));

      // 1 Comprehension MCQ
      const compTarget = compTargets[idx % compTargets.length];
      const compShuffled = shuffleComp(ch.compQuestion.options, compTarget);
      const qComp = {
        id: `q-${chId}-comp`,
        question: ch.compQuestion.question,
        options: compShuffled.options,
        correctIndex: compShuffled.correctIndex,
        explanation: ch.compQuestion.explanation,
        visualClueEmoji: ch.compQuestion.visualClueEmoji || '📖',
        points: 60
      };

      // 1 Vocabulary MCQ (word from text, distractors from passage)
      const primaryVocab = ch.vocab[0];
      const vocabTarget = vocabTargets[idx % vocabTargets.length];
      const vocabJumbled = jumbleOptions(primaryVocab.word, passageWords, vocabTarget);
      const qVocab = {
        id: `q-${chId}-vocab`,
        question: `Find a word in the passage that means: "${primaryVocab.definition}".`,
        options: vocabJumbled.options,
        correctIndex: vocabJumbled.correctIndex,
        explanation: `In this chapter, "${primaryVocab.word}" means ${primaryVocab.definition.toLowerCase()}`,
        visualClueEmoji: primaryVocab.emoji || '✨',
        points: 60
      };

      const scene = {
        id: `scene-${chId}`,
        title: ch.title,
        backgroundGradient: 'from-slate-950 via-stone-900 to-indigo-950',
        illustrationType: ch.illustrationType,
        caption: ch.sceneCaption,
        characterAvatars: ch.avatars,
        interactiveHotspots: ch.hotspots
      };

      const letters = ch.scrambleWord.split('').reverse();
      const micro = {
        id: `mc-${chId}`,
        title: 'Word Scramble Challenge',
        type: 'word_scramble',
        prompt: `Unscramble the secret word from Day ${day}!`,
        targetWord: ch.scrambleWord,
        scrambleLetters: letters,
        rewardGems: 1
      };

      const wordCount = tier === '5-6' ? 520 : (tier === '7-8' ? 680 : 820);

      tierChapters.push({
        id: chId,
        dayNumber: day,
        title: ch.title,
        subtitle: ch.subtitle,
        estReadingMinutes: 15,
        totalWordCount: wordCount,
        summary: ch.summary,
        visualScenes: [scene],
        pages: pages,
        vocabList: ch.vocab,
        microChallenge: micro,
        quizQuestions: [qComp, qVocab]
      });
    });

    chaptersByAge[tier] = tierChapters;
  }

  const bookObj = {
    id: spec.id,
    title: spec.title,
    author: spec.author,
    badgeTitle: spec.badgeTitle,
    coverColor: spec.coverColor,
    accentColor: spec.accentColor,
    borderColor: spec.borderColor,
    themeIcon: spec.themeIcon,
    descriptionByAge: spec.descriptions,
    chaptersByAge: chaptersByAge
  };

  const fileContent = `import { Book } from "../types";\n\nexport const ${spec.varName}: Book = ${JSON.stringify(bookObj, null, 2)};\n`;
  fs.writeFileSync(spec.fileName, fileContent, 'utf-8');
  console.log(`Successfully generated ${spec.fileName}`);
}

module.exports = { buildBook };
