import cls from './TopicsList.module.scss';
import {
  ITopicListItem,
  TopicListItem,
} from '@/entities/Topic/ui/TopicListItem/TopicListItem.tsx';
import { type FC } from 'react';

interface ITopicsListProps {
  topics: ITopicListItem[];
  className?: string;
}

export const TopicsList: FC<ITopicsListProps> = ({ topics }) => {
  return (
    <div className={cls.topicsList}>
      {topics.map((topic) => (
        <TopicListItem {...topic} />
      ))}
    </div>
  );
};
