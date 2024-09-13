import cls from './Statistics.module.scss';
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks.ts';
import { classNames } from '@/shared/lib/utils/classNames/classNames.ts';
import { type FC } from 'react';

interface IStatisticsProps {
  className?: string;
}

export const Statistics: FC<IStatisticsProps> = ({ className }) => {
  const statistics = useAppSelector((state) => state.currentTopic.answers);

  return (
    <div className={classNames(cls.statistics, {}, [className])}>
      <div className={classNames(cls.statisticsItem, {}, [])}>
        <div className={classNames(cls.circle, {}, [cls.right])}></div>
        {statistics.right}
      </div>
      <div className={classNames(cls.statisticsItem, {}, [])}>
        <div className={classNames(cls.circle, {}, [cls.wrong])}></div>
        {statistics.wrong}
      </div>
    </div>
  );
};
