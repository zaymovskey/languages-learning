import { TopicListItem } from '../TopicListItem/TopicListItem.tsx';
import cls from './TopicsList.module.scss';
import { ITopic } from '@/DB.tsx';
import { type FC } from 'react';

interface ITopicsListProps {
  topics: ITopic[];
  className?: string;
}

export const TopicsList: FC<ITopicsListProps> = ({ topics }) => {
  return (
    <div className={cls.topicsList}>
      {topics.map((topic, index) => (
        <TopicListItem key={index} {...topic} />
      ))}
    </div>
  );
};
