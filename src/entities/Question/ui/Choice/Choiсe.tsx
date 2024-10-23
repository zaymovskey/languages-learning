import cls from './Choice.module.scss';
import { IWord } from '@/DB.tsx';
import { useAppDispatch, useAppSelector } from '@/app';
import { currentTopicActions } from '@/entities/Game';
import { IQuestionComponentProps } from '@/entities/Question';
import { useAnswersHistory } from '@/entities/Question/lib/hooks/useAnswersHistory.ts';
import { getWordsAndRightAnswer } from '@/entities/Question/lib/utils/getWordsAndRightAnswer.ts';
import {
  classNames,
  getRandomNumberFromInterval,
  playWord,
} from '@/shared/lib';
import { FC, useEffect, useState } from 'react';

interface IChoiceProps extends IQuestionComponentProps {
  className?: string;
}

export const Choice: FC<IChoiceProps> = ({ toNextQuestion }) => {
  const dispatch = useAppDispatch();

  const adAnswersHistory = useAnswersHistory();

  // TODO: Нужно, чтобы слова принимались через пропсы, чтобы компонент был независимым
  const topicWords = useAppSelector((state) => state.currentTopic.words);
  const answersHistory = useAppSelector(
    (state) => state.currentTopic.answersHistory
  );

  const [currentQuestionWords, setCurrentQuestionWords] = useState<IWord[]>();

  const [rightAnswer, setRightAnswer] = useState<IWord>();

  useEffect(() => {
    if (answersHistory.length > 0) {
      const [words, rightAnswer] = getWordsAndRightAnswer(
        topicWords,
        answersHistory,
        getRandomNumberFromInterval(4, 6)
      );
      setCurrentQuestionWords(words);
      setRightAnswer(rightAnswer);
    }
  }, []);

  const [isShowIcons, setIsShowIcons] = useState(Math.random() < 0.5);
  const [isVariantsLanguageIsHebrew, setIsVariantsLanguageIsHebrew] =
    useState<boolean>();
  const [isAnswerLanguageIsHebrew, setIsAnswerLanguageIsHebrew] =
    useState<boolean>();

  useEffect(() => {
    setLanguageOfAnswersNQuestions();
  }, []);

  const [isRightAnswerHighlight, setIsRightAnswerHighlight] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState<IWord | null>(null);

  const refreshQuestion = () => {
    const newWordsCount = getRandomNumberFromInterval(4, 6);

    const [words, rightAnswer] = getWordsAndRightAnswer(
      topicWords,
      answersHistory,
      newWordsCount
    );
    setCurrentQuestionWords(words);
    setRightAnswer(rightAnswer);

    setSelectedAnswer(null);

    setIsShowIcons(Math.random() < 0.5);

    setLanguageOfAnswersNQuestions();
  };

  const setLanguageOfAnswersNQuestions = () => {
    const isVariantsLanguageIsHebrew = Math.random() < 0.5;
    let isAnswerLanguageIsHebrew = Math.random() < 0.5;

    if (isVariantsLanguageIsHebrew === isAnswerLanguageIsHebrew) {
      isAnswerLanguageIsHebrew = !isAnswerLanguageIsHebrew;
    }

    setIsVariantsLanguageIsHebrew(isVariantsLanguageIsHebrew);
    setIsAnswerLanguageIsHebrew(isAnswerLanguageIsHebrew);
  };

  const handleSelectAnswer = (word: IWord) => {
    dispatch(currentTopicActions.setIsBlocked(true));

    setSelectedAnswer(word);

    adAnswersHistory(
      word.hebrew.withoutAnnouncement,
      rightAnswer!.hebrew.withoutAnnouncement
    );

    setTimeout(() => {
      setIsRightAnswerHighlight(true);
      playWord(rightAnswer!.hebrew.withoutAnnouncement, () => {
        setTimeout(() => {
          setIsRightAnswerHighlight(false);
          toNextQuestion(refreshQuestion);
          dispatch(currentTopicActions.setIsBlocked(false));
        }, 1000);
      });
    }, 500);
  };

  const isWrongSelectedAnswer = (word: IWord) => {
    return (
      selectedAnswer?.russian === word.russian &&
      selectedAnswer?.russian !== rightAnswer!.russian
    );
  };

  const isRightSelectedAnswer = (word: IWord) => {
    return (
      selectedAnswer?.russian === word.russian &&
      selectedAnswer?.russian === rightAnswer!.russian
    );
  };

  if (!currentQuestionWords || !rightAnswer) return <div></div>;

  return (
    <div>
      <div className={cls.variants}>
        {currentQuestionWords.map((word, index) => (
          <button
            key={index}
            onClick={() => handleSelectAnswer(word)}
            className={classNames(
              cls.variantsItem,
              {
                [cls.isWrong]: isWrongSelectedAnswer(word),
                [cls.isRight]:
                  isRightSelectedAnswer(word) ||
                  (word.russian === rightAnswer.russian &&
                    isRightAnswerHighlight),
              },
              []
            )}
          >
            {isShowIcons && (
              <word.Icon width={40} height={40} color={'white'} />
            )}
            <span className={cls.variantText}>
              {isVariantsLanguageIsHebrew
                ? word.hebrew.withoutAnnouncement
                : word.russian}
            </span>
          </button>
        ))}
      </div>
      <div className={cls.questionWord}>
        {isAnswerLanguageIsHebrew
          ? rightAnswer.hebrew.withoutAnnouncement
          : rightAnswer.russian}
      </div>
    </div>
  );
};
