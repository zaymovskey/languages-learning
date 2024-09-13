import cls from './WordList.module.scss';
import { IWord } from '@/DB.tsx';
import { WordListItem } from '@/entities/Word/ui/WordListItem/WordListItem.tsx';
import { classNames } from '@/shared/lib/utils/classNames/classNames.ts';
import { type FC } from 'react';

interface IWordListProps {
  words: IWord[];

  className?: string;
}

export const WordList: FC<IWordListProps> = ({ words, className }) => {
  return (
    <div className={classNames(cls.wordList, {}, [className])}>
      {words.map((word, index) => (
        <WordListItem {...word} key={index} />
      ))}
    </div>
  );
};
