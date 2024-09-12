import cls from './TopicListItem.module.scss';
import { Typography } from 'antd';
import { ComponentType, type FC, SVGProps } from 'react';

export interface ITopicListItem {
  title: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

interface ITopicListItemProps extends ITopicListItem {
  className?: string;
}

export const TopicListItem: FC<ITopicListItemProps> = ({ title, Icon }) => {
  return (
    <div className={cls.topicListItem}>
      <div className={cls.imageBlock}>
        <Icon color={'inherit'} width={30} height={30} />
      </div>
      <Typography.Title level={4} className={cls.titleBlock}>
        {title}
      </Typography.Title>
    </div>
  );
};
