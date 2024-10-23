import { IWord } from '@/DB.tsx';
import { IAnswersHistoryItem } from '@/entities/Game/model/types/ICurrentTopicScheme.ts';

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const getWordsAndRightAnswer = (
  words: IWord[],
  answersHistory: IAnswersHistoryItem[],
  count: number
): [IWord[], IWord] => {
  const rarestHistoryWords = [...answersHistory]
    .sort((a, b) => a.frequency - b.frequency)
    .slice(0, count);

  const mostDifficultHistoryWord = rarestHistoryWords.reduce((max, current) => {
    return current.wrongCount > max.wrongCount ? current : max;
  }, rarestHistoryWords[0]);

  const wordsStrings = rarestHistoryWords.map((word) => word.word);

  const rarestWords = words.filter((word) =>
    wordsStrings.includes(word.hebrew.withoutAnnouncement)
  );
  const mostDifficultWord = words.find(
    (word) => word.hebrew.withoutAnnouncement === mostDifficultHistoryWord.word
  );

  return [shuffleArray(rarestWords), mostDifficultWord!];
};