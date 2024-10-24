import cls from './GameStatisticsPage.module.scss';
import { useAppSelector } from '@/app';
import { classNames } from '@/shared/lib';
import { AnimatePageWrapper } from '@/shared/ui';
import { type FC } from 'react';
import { Navigate } from 'react-router-dom';

interface IGameStatisticsPageProps {
  className?: string;
}

const GameStatisticsPage: FC<IGameStatisticsPageProps> = ({ className }) => {
  const statistics = useAppSelector(
    (state) => state.currentTopic.answersHistory
  );
  const topicWords = useAppSelector((state) => state.currentTopic.words);
  const prevUrl = useAppSelector((state) => state.global.prevUrl);

  if (topicWords.length === 0) {
    return <Navigate to={prevUrl} replace />;
  }

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
              <div
                key={index}
                className={classNames(
                  cls.statisticsWordItem,
                  {
                    [cls.fade]:
                      statisticItem.rightCount === 0 &&
                      statisticItem.wrongCount === 0,
                  },
                  []
                )}
              >
                <div className={cls.wordInfo}>
                  <span className={cls.hebrew}>
                    {word.hebrew.withAnnouncement}
                  </span>
                  <span>{word.russian}</span>
                </div>
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
