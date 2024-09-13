import cls from './Choice.module.scss';
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks.ts';
import { getRandomNumberFromInterval } from '@/shared/lib/utils/getRandomNumberFromInterval/getRandomNumberFromInterval.ts';
import { getRandomUniqueElements } from '@/shared/lib/utils/getRandomUniqueElements/getRandomUniqueElements.ts';
import { Typography } from 'antd';
import { useMemo } from 'react';

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

  return (
    <div>
      <div className={cls.variants}>
        {currentQuestionWords.map((word) => (
          <button className={cls.variantsItem}>
            <word.Icon color={'inherit'} width={40} height={40} />
            <Typography.Text>{word.russian}</Typography.Text>
          </button>
        ))}
      </div>
      <div className={cls.questionWord}>{questionWord[0].russian}</div>
    </div>
  );
};
