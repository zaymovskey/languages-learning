import cls from './WordListItem.module.scss';
import { IWord } from '@/DB.tsx';
import { playWord } from '@/shared/lib';
import { HeadphonesIcon } from 'hugeicons-react';
import { type FC } from 'react';

interface IWordsListItemProps extends IWord {
  className?: string;
}

export const WordListItem: FC<IWordsListItemProps> = ({
  Icon,
  hebrew,
  russian,
}) => {
  const onSoundBtnClick = () => {
    playWord(hebrew.withoutAnnouncement);
  };

  return (
    <div className={cls.wordListItem}>
      <Icon width={40} height={40} color={'white'} />
      <div className={cls.wordInfo}>
        <span className={cls.hebrew}>{hebrew.withAnnouncement}</span>
        <span>{russian}</span>
      </div>
      <button className={cls.soundBtn} onClick={onSoundBtnClick}>
        <HeadphonesIcon color={'#f1ee46'} width={40} height={40} />
      </button>
    </div>
  );
};
