import cls from './TopicsGroupItem.module.scss';
import { ITopic, ITopicGroup } from '@/DB.tsx';
import { useAppDispatch } from '@/app';
import { currentTopicActions } from '@/entities/Game';
import { TopicListItem } from '@/entities/Topic/ui/TopicListItem/TopicListItem.tsx';
import { classNames } from '@/shared/lib';
import { ChevronUp } from 'lucide-react';
import { type FC, useState } from 'react';
import AnimateHeight from 'react-animate-height';

interface ITopicsGroupItemProps {
  className?: string;
  item: ITopicGroup;
}

export const TopicsGroupItem: FC<ITopicsGroupItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();

  const setCurrentTopicInfo = (topic: ITopic) => {
    dispatch(currentTopicActions.setCurrentTopic(topic));
  };

  return (
    <div>
      <div className={cls.topicLink} onClick={() => setIsOpen(!isOpen)}>
        <button className={cls.topicListItem}>
          <div className={cls.imageBlock}>
            <item.Icon width={30} height={30} color={'white'} />
          </div>
          <h4 className={cls.titleBlock}>{item.title}</h4>
          <div className={classNames(cls.arrow, { [cls.active]: isOpen }, [])}>
            <ChevronUp />
          </div>
        </button>
      </div>
      <AnimateHeight duration={200} height={isOpen ? 'auto' : 0}>
        <ul className={cls.topicsList}>
          {item.topics.map((topic, index) => (
            <div onClick={() => setCurrentTopicInfo(topic)}>
              <TopicListItem key={index} {...topic} />
            </div>
          ))}
        </ul>
      </AnimateHeight>
    </div>
  );
};
