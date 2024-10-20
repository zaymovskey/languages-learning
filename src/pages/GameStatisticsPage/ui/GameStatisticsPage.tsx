import cls from './GameStatisticsPage.module.scss';
import { useAppSelector } from '@/app';
import { WordListItem } from '@/entities/Word/ui/WordListItem/WordListItem.tsx';
import { classNames } from '@/shared/lib';
import { AnimatePageWrapper } from '@/shared/ui';
import { type FC } from 'react';

interface IGameStatisticsPageProps {
  className?: string;
}

const GameStatisticsPage: FC<IGameStatisticsPageProps> = ({ className }) => {
  const statistics = useAppSelector(
    (state) => state.currentTopic.answersHistory
  );
  const topicWords = useAppSelector((state) => state.currentTopic.words);

  console.log(statistics);

  return (
    <AnimatePageWrapper>
      <div className={classNames(cls.gameStatisticsPage, {}, [className])}>
        <div className="paddings-content">
          {statistics.map((statisticItem, index) => {
            const word = topicWords.find(
              (word) => word.hebrew.withoutAnnouncement === statisticItem.word
            );
            if (!word) {
              return <></>;
            }

            return (
              <div key={index} className={cls.statisticsWordItem}>
                <WordListItem {...word} />
                <div className={cls.statisticsValues}>
                  <div className={classNames(cls.statisticsItem, {}, [])}>
                    <div
                      className={classNames(cls.circle, {}, [cls.right])}
                    ></div>
                    {statisticItem.rightCount}
                  </div>
                  <div className={classNames(cls.statisticsItem, {}, [])}>
                    <div
                      className={classNames(cls.circle, {}, [cls.wrong])}
                    ></div>
                    {statisticItem.wrongCount}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatePageWrapper>
  );
};

export default GameStatisticsPage;
