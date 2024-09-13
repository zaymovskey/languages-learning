import cls from './Choice.module.scss';
import { IWord } from '@/DB.tsx';
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks.ts';
import { IQuestionComponentProps } from '@/entities/Game/Question/types/TypeQuestionTypes.ts';
import { classNames } from '@/shared/lib/utils/classNames/classNames.ts';
import { getRandomNumberFromInterval } from '@/shared/lib/utils/getRandomNumberFromInterval/getRandomNumberFromInterval.ts';
import { getRandomUniqueElements } from '@/shared/lib/utils/getRandomUniqueElements/getRandomUniqueElements.ts';
import { Typography } from 'antd';
import { FC, useEffect, useState } from 'react';

interface IChoiceProps extends IQuestionComponentProps {
  className?: string;
}

export const Choice: FC<IChoiceProps> = ({ toNextQuestion }) => {
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
    setSelectedAnswer(word);

    toNextQuestion(refreshQuestion);
    // setTimeout(() => {
    //   toNextQuestion(refreshQuestion);
    // }, 3000);
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
                [cls.selected]: selectedAnswer?.russian === word.russian,
                [cls.isWrong]:
                  selectedAnswer?.russian === word.russian &&
                  selectedAnswer?.russian !== rightAnswer.russian,
                [cls.isRight]:
                  selectedAnswer?.russian === word.russian &&
                  selectedAnswer?.russian === rightAnswer.russian,
              },
              []
            )}
          >
            {isShowIcons && (
              <word.Icon color={'inherit'} width={40} height={40} />
            )}
            <Typography.Text className={cls.variantText}>
              {isVariantsLanguageIsHebrew ? word.hebrew : word.russian}
            </Typography.Text>
          </button>
        ))}
      </div>
      <div className={cls.questionWord}>
        {isAnswerLanguageIsHebrew ? rightAnswer.hebrew : rightAnswer.russian}
      </div>
    </div>
  );
};
