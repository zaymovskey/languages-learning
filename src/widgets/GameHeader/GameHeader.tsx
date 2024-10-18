import cls from './GameHeader.module.scss';
import { useAppDispatch } from '@/app';
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
    dispatch(stopwatchActions.pause());
  };

  return (
    <div
      className={classNames(cls.gameHeader, {}, [className])}
      onClick={onClickPauseBtn}
    >
      <button className={cls.pauseBtn}>
        <PauseIcon />
      </button>
    </div>
  );
};
