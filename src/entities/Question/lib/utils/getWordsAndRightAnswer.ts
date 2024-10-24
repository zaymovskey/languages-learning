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
  const wordsToLearn = words.filter((word) => {
    // Выбрать слова, которые пользователь еще не знает
    return (
      answersHistory.find(
        (history) => history.word === word.hebrew.withoutAnnouncement
      )!.frequency === 0
    );
  });

  const wordsToRepeat = words.filter((word) => {
    // Выбрать слова, которые пользователь уже знает, но которые ему нужно повторить
    const history = answersHistory.find(
      (history) => history.word === word.hebrew.withoutAnnouncement
    );
    return history && history.wrongCount > 0; // Повторять слова, которые пользователь знает, но сделал хотя бы одну ошибку
  });

  const allWords = wordsToLearn.concat(wordsToRepeat);
  const shuffledWords = shuffleArray(allWords);

  const rarestWords = shuffledWords.slice(0, count);

  const mostDifficultWord = rarestWords.reduce((max, current) => {
    // Выбрать слово с наибольшим количеством неправильных ответов
    const historyCurrent = answersHistory.find(
      (history) => history.word === current.hebrew.withoutAnnouncement
    );
    const historyMax = answersHistory.find(
      (history) => history.word === max.hebrew.withoutAnnouncement
    );
    return (historyCurrent ? historyCurrent.wrongCount : 0) >
      (historyMax ? historyMax.wrongCount : 0)
      ? current
      : max;
  }, rarestWords[0]);

  return [shuffleArray(rarestWords), mostDifficultWord!];
};
