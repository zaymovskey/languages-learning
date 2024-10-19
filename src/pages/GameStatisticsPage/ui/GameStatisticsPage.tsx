import cls from './GameStatisticsPage.module.scss';
import { classNames } from '@/shared/lib';
import { AnimatePageWrapper } from '@/shared/ui';
import { type FC } from 'react';

interface IGameStatisticsPageProps {
  className?: string;
}

const GameStatisticsPage: FC<IGameStatisticsPageProps> = ({ className }) => {
  return (
    <AnimatePageWrapper>
      <div className={classNames(cls.GameStatisticsPage, {}, [className])}>
        Статистика
      </div>
    </AnimatePageWrapper>
  );
};

export default GameStatisticsPage;
