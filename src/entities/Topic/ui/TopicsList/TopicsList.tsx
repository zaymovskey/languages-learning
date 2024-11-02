import { TopicListItem } from '../TopicListItem/TopicListItem.tsx';
import cls from './TopicsList.module.scss';
import { ITopic, ITopicGroup } from '@/DB.tsx';
import { useAppDispatch } from '@/app';
import { currentTopicActions } from '@/entities/Game';
import { TopicsGroupItem } from '@/entities/Topic/ui/TopicsGroupItem/TopicsGroupItem.tsx';
import { type FC } from 'react';

interface ITopicsListProps {
  topics: (ITopic | ITopicGroup)[];
  className?: string;
}

export const TopicsList: FC<ITopicsListProps> = ({ topics }) => {
  const dispatch = useAppDispatch();

  const setCurrentTopicInfo = (topic: ITopic) => {
    dispatch(currentTopicActions.setCurrentTopic(topic));
    dispatch(currentTopicActions.setAnswersHistory(topic.words));
  };

  return (
    <div className={cls.topicsList}>
      {topics.map((topic, index) => {
        if ('words' in topic) {
          return (
            <div onClick={() => setCurrentTopicInfo(topic)} key={index}>
              <TopicListItem {...topic} />
            </div>
          );
        } else {
          return (
            <div key={index}>
              <TopicsGroupItem item={topic} />
            </div>
          );
        }
      })}
    </div>
  );
};
