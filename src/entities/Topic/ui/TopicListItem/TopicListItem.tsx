import cls from './TopicListItem.module.scss';
import { ITopic } from '@/DB.tsx';
import { type FC } from 'react';
import { Link } from 'react-router-dom';

interface ITopicListItemProps extends ITopic {
  className?: string;
}

export const TopicListItem: FC<ITopicListItemProps> = (
  { slug, title, Icon }
) => {
  return (
    <Link to={`/topic/${slug}`} className={cls.topicListItem}>
      <div className={cls.imageBlock}>
        <Icon color={'inherit'} width={30} height={30} />
      </div>
      <h4 className={cls.titleBlock}>{title}</h4>
    </Link>
  );
};
