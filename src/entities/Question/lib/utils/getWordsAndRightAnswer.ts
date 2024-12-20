import { IWord } from '@/DB.tsx';
import { IAnswersHistoryItem } from '@/entities/Game/model/types/ICurrentTopicScheme.ts';

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const getRandomElementFromArray = <T>(array: T[]): T => {
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
};

export const getWordsAndRightAnswer = (
  words: IWord[],
  answersHistory: IAnswersHistoryItem[],
  count: number
): [IWord[], IWord] => {
  if (count === 1) {
    const rarestSortedWordsHistory = [...answersHistory]
      .sort((a, b) => a.frequency - b.frequency)
      .slice(0, 2);

    const rarestWordsStrings = rarestSortedWordsHistory.map(
      (historyWord) => historyWord.word
    );

    const difficultSortedWordsHistory = [...answersHistory]
      .filter((historyWord) => !rarestWordsStrings.includes(historyWord.word))
      .sort((a, b) => b.wrongCount - a.wrongCount)
      .slice(0, 2);

    const randomHistoryWord = getRandomElementFromArray([
      ...rarestSortedWordsHistory,
      ...difficultSortedWordsHistory,
    ]).word;

    const rightAnswer = words.find(
      (word) => word.hebrew.withoutAnnouncement === randomHistoryWord
    )!;

    return [[], rightAnswer];
  } else {
    const rarestWordsCount = Math.ceil(count / 2);
    const randomWordsCount = count - rarestWordsCount;

    const rarestSortedWordsHistory = [...answersHistory]
      .sort((a, b) => a.frequency - b.frequency)
      .slice(0, rarestWordsCount);

    const rarestWords = rarestSortedWordsHistory.map(
      (historyWord) =>
        words.find(
          (word) => word.hebrew.withoutAnnouncement === historyWord.word
        )!
    );

    const rarestWordsStrings = rarestWords.map(
      (word) => word.hebrew.withoutAnnouncement
    );

    const difficultySortedWordsHistory = [...answersHistory]
      .filter((historyWord) => !rarestWordsStrings.includes(historyWord.word))
      .sort((a, b) => b.wrongCount - a.wrongCount)
      .slice(0, randomWordsCount);

    const difficultyWords = difficultySortedWordsHistory.map(
      (historyWord) =>
        words.find(
          (word) => word.hebrew.withoutAnnouncement === historyWord.word
        )!
    );

    const rightAnswer = getRandomElementFromArray(rarestWords);

    return [shuffleArray([...difficultyWords, ...rarestWords]), rightAnswer];
  }
};
