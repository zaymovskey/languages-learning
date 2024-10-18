import cls from './GameHeader.module.scss';
import { classNames } from '@/shared/lib';
import { PauseIcon } from 'lucide-react';
import { FC } from 'react';

interface IGameHeaderProps {
  className?: string;
}

export const GameHeader: FC<IGameHeaderProps> = ({ className }) => {
  return (
    <div className={classNames(cls.gameHeader, {}, [className])}>
      <button className={cls.pauseBtn}>
        <PauseIcon />
      </button>
    </div>
  );
};
