import cls from './WordListItem.module.scss';
import { IWord } from '@/DB.tsx';
import { type FC } from 'react';

interface IWordsListItemProps extends IWord {
  className?: string;
}

export const WordListItem: FC<IWordsListItemProps> = (
  { Icon, hebrew, russian }
) => {
  return (
    <div className={cls.wordListItem}>
      <Icon color={'inherit'} width={40} height={40} stroke={'white'} />
      <div className={cls.wordInfo}>
        <span className={cls.hebrew}>{hebrew.withAnnouncement}</span>
        <span>{russian}</span>
      </div>
    </div>
  );
};
