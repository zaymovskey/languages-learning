import cls from './GamePauseMenu.module.scss';
import { useAppDispatch, useAppSelector } from '@/app';
import { currentTopicActions } from '@/entities/Game';
import { classNames } from '@/shared/lib';
import { stopwatchActions } from '@/shared/ui';
import { type FC } from 'react';

interface IGamePauseMenuProps {
  className?: string;
}

export const GamePauseMenu: FC<IGamePauseMenuProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const pauseMenuIsOpen = useAppSelector(
    (state) => state.currentTopic.isPauseMenuOpen
  );

  return (
    <>
      <div
        className={classNames(cls.backdrop, { [cls.active]: pauseMenuIsOpen }, [
          className,
        ])}
        onClick={() => {
          dispatch(stopwatchActions.toggle());
          dispatch(currentTopicActions.togglePauseMenuOpen());
        }}
      ></div>
      <div
        className={classNames(
          cls.gamePauseMenu,
          { [cls.active]: pauseMenuIsOpen },
          [className]
        )}
      ></div>
    </>
  );
};
