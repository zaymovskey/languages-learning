import cls from './GameHeader.module.scss';
import { useAppDispatch } from '@/app';
import { currentTopicActions } from '@/entities/Game';
import { classNames } from '@/shared/lib';
import { stopwatchActions } from '@/shared/ui';
import { PauseIcon } from 'lucide-react';
import { FC } from 'react';

interface IGameHeaderProps {
  className?: string;
}

export const GameHeader: FC<IGameHeaderProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const onClickPauseBtn = () => {
    dispatch(stopwatchActions.toggle());
    dispatch(currentTopicActions.togglePauseMenuOpen());
  };

  return (
    <div className={classNames(cls.gameHeader, {}, [className])}>
      <button className={cls.pauseBtn} onClick={onClickPauseBtn}>
        <PauseIcon />
      </button>
    </div>
  );
};
