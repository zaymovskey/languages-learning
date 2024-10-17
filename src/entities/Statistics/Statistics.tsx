import cls from './Statistics.module.scss';
import { useAppSelector } from '@/app';
import { classNames } from '@/shared/lib';
import { type FC } from 'react';

interface IStatisticsProps {
  className?: string;
}

export const Statistics: FC<IStatisticsProps> = ({ className }) => {
  const answersHistory = useAppSelector(
    (state) => state.currentTopic.answersHistory
  );

  const totalRightCount = answersHistory.reduce(
    (accumulator, currentValue) => accumulator + currentValue.rightCount,
    0
  );

  const totalWrong = answersHistory.reduce(
    (accumulator, currentValue) => accumulator + currentValue.wrongCount,
    0
  );

  return (
    <div className={classNames(cls.statistics, {}, [className])}>
      <div className={classNames(cls.statisticsItem, {}, [])}>
        <div className={classNames(cls.circle, {}, [cls.right])}></div>
        {totalRightCount}
      </div>
      <div className={classNames(cls.statisticsItem, {}, [])}>
        <div className={classNames(cls.circle, {}, [cls.wrong])}></div>
        {totalWrong}
      </div>
    </div>
  );
};
