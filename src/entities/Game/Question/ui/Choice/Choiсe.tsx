import cls from './Choice.module.scss';
import { IWord } from '@/DB.tsx';
import {
  useAppDispatch,
  useAppSelector,
} from '@/app/providers/StoreProvider/lib/hooks.ts';
import { IQuestionComponentProps } from '@/entities/Game/Question/types/TypeQuestionTypes.ts';
import { currentTopicActions } from '@/entities/Game/model/slices/currentTopicSlice.ts';
import { classNames } from '@/shared/lib/utils/classNames/classNames.ts';
import { getRandomNumberFromInterval } from '@/shared/lib/utils/getRandomNumberFromInterval/getRandomNumberFromInterval.ts';
import { getRandomUniqueElements } from '@/shared/lib/utils/getRandomUniqueElements/getRandomUniqueElements.ts';
import { FC, useEffect, useState } from 'react';

interface IChoiceProps extends IQuestionComponentProps {
  className?: string;
}

export const Choice: FC<IChoiceProps> = ({ toNextQuestion }) => {
  const dispatch = useAppDispatch();

  const [wordsCount, setWordsCount] = useState(
    getRandomNumberFromInterval(2, 6)
  );

  const topicWords = useAppSelector((state) => state.currentTopic.words);
  const [currentQuestionWords, setCurrentQuestionWords] = useState(
    getRandomUniqueElements(topicWords, wordsCount)
  );

  const [rightAnswer, setRightAnswer] = useState(
    getRandomUniqueElements(currentQuestionWords, 1)[0]
  );

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
    const newWordsCount = getRandomNumberFromInterval(2, 6);
    setWordsCount(newWordsCount);
    const newRandomUniqueElements = getRandomUniqueElements(
      topicWords,
      newWordsCount
    );
    setCurrentQuestionWords(newRandomUniqueElements);
    setRightAnswer(getRandomUniqueElements(newRandomUniqueElements, 1)[0]);
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

    const action =
      word.russian === rightAnswer.russian
        ? currentTopicActions.increaseRightAnswers
        : currentTopicActions.increaseWrongAnswers;

    dispatch(action());

    const utterance = new SpeechSynthesisUtterance(
      rightAnswer.hebrew.withoutAnnouncement
    );
    utterance.lang = 'he-IL';
    setTimeout(() => {
      setIsRightAnswerHighlight(true);
      window.speechSynthesis.speak(utterance);
    }, 1000);

    setTimeout(() => {
      dispatch(currentTopicActions.setIsBlocked(false));
      setTimeout(() => {
        setIsRightAnswerHighlight(false);
        toNextQuestion(refreshQuestion);
      }, 1000);
    }, 2000);
  };

  const isWrongSelectedAnswer = (word: IWord) => {
    return (
      selectedAnswer?.russian === word.russian &&
      selectedAnswer?.russian !== rightAnswer.russian
    );
  };

  const isRightSelectedAnswer = (word: IWord) => {
    return (
      selectedAnswer?.russian === word.russian &&
      selectedAnswer?.russian === rightAnswer.russian
    );
  };

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
              <word.Icon color={'inherit'} width={40} height={40} />
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
