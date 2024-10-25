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
      .slice(0, 4);

    const randomHistoryWord = getRandomElementFromArray(
      rarestSortedWordsHistory
    ).word;

    const randomElement = words.find(
      (word) => word.hebrew.withoutAnnouncement === randomHistoryWord
    )!;

    return [[], randomElement];
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

    const randomWords = shuffleArray(
      words.filter(
        (word) => !rarestWordsStrings.includes(word.hebrew.withoutAnnouncement)
      )
    ).slice(0, randomWordsCount);

    const rightAnswer = getRandomElementFromArray(rarestWords);

    return [shuffleArray([...randomWords, ...rarestWords]), rightAnswer];
  }
};
