import cls from './TopicListItem.module.scss';
import { ITopic } from '@/DB.tsx';
import { EnumAppRoutes } from '@/app';
import { RoutePath } from '@/app';
import { LinkWithAnimation } from '@/shared/ui';
import { type FC } from 'react';

interface ITopicListItemProps extends ITopic {
  className?: string;
}

export const TopicListItem: FC<ITopicListItemProps> = (
  { slug, title, Icon }
) => {
  return (
    <LinkWithAnimation
      to={`${RoutePath[EnumAppRoutes.TOPICS_LIST]}/${slug}`}
      className={cls.topicLink}
    >
      <button className={cls.topicListItem}>
        <div className={cls.imageBlock}>
          <Icon width={30} height={30} color={'white'} />
        </div>
        <h4 className={cls.titleBlock}>{title}</h4>
      </button>
    </LinkWithAnimation>
  );
};
