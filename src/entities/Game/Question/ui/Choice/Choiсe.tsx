import cls from './Choice.module.scss';
import { IWord } from '@/DB.tsx';
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks.ts';
import { classNames } from '@/shared/lib/utils/classNames/classNames.ts';
import { getRandomNumberFromInterval } from '@/shared/lib/utils/getRandomNumberFromInterval/getRandomNumberFromInterval.ts';
import { getRandomUniqueElements } from '@/shared/lib/utils/getRandomUniqueElements/getRandomUniqueElements.ts';
import { Typography } from 'antd';
import { useMemo, useState } from 'react';

export const Choice = () => {
  const wordsCount = useMemo(() => getRandomNumberFromInterval(2, 6), []);
  const topicWords = useAppSelector((state) => state.currentTopic.words);
  const currentQuestionWords = useMemo(
    () => getRandomUniqueElements(topicWords, wordsCount),
    []
  );
  const questionWord = useMemo(
    () => getRandomUniqueElements(currentQuestionWords, 1),
    []
  );

  const [selectedAnswer, setSelectedAnswer] = useState<IWord | undefined>(
    undefined
  );

  const handleSelectAnswer = (word: IWord) => {
    setSelectedAnswer(word);
  };

  return (
    <div>
      <div className={cls.variants}>
        {currentQuestionWords.map((word) => (
          <button
            onClick={() => handleSelectAnswer(word)}
            className={classNames(
              cls.variantsItem,
              { [cls.selected]: selectedAnswer?.russian === word.russian },
              []
            )}
          >
            <word.Icon color={'inherit'} width={40} height={40} />
            <Typography.Text>{word.russian}</Typography.Text>
          </button>
        ))}
      </div>
      <div className={cls.questionWord}>{questionWord[0].russian}</div>
    </div>
  );
};
