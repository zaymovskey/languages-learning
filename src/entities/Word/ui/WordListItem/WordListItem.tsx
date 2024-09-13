import cls from './WordListItem.module.scss';
import { IWord } from '@/DB.tsx';
import { Typography } from 'antd';
import { type FC } from 'react';

interface IWordsListItemProps extends IWord {
  className?: string;
}

export const WordListItem: FC<IWordsListItemProps> = (
  { Icon, hebrew, russian }
) => {
  return (
    <div className={cls.wordListItem}>
      <Icon color={'inherit'} width={40} height={40} />
      <div className={cls.wordInfo}>
        <Typography.Text className={cls.hebrew}>{hebrew}</Typography.Text>
        <Typography.Text>{russian}</Typography.Text>
      </div>
    </div>
  );
};
