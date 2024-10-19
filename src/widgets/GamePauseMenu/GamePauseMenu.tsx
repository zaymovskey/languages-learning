import cls from './GamePauseMenu.module.scss';
import { useAppDispatch, useAppSelector } from '@/app';
import { currentTopicActions } from '@/entities/Game';
import { WordList } from '@/entities/Word';
import { classNames } from '@/shared/lib';
import { Button, LinkWithAnimation, stopwatchActions } from '@/shared/ui';
import { CircleStop, LogOut, Play } from 'lucide-react';
import { type FC } from 'react';

interface IGamePauseMenuProps {
  className?: string;
}

export const GamePauseMenu: FC<IGamePauseMenuProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const pauseMenuIsOpen = useAppSelector(
    (state) => state.currentTopic.isPauseMenuOpen
  );

  const prevUrl = useAppSelector((state) => state.global.url);

  const currentTopicWords = useAppSelector((state) => state.currentTopic.words);

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
      >
        <div className={cls.title}>Пауза</div>
        <div className={cls.buttons}>
          <LinkWithAnimation
            to={prevUrl}
            className={cls.buttonContainer}
            slideDirection={'right'}
          >
            <Button
              style={{
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                backgroundColor: '#631a8a',
              }}
              onClick={() => {
                dispatch(currentTopicActions.togglePauseMenuOpen());
              }}
            >
              <LogOut color={'white'} />
            </Button>
            <p>К теме</p>
          </LinkWithAnimation>
          <LinkWithAnimation
            to={prevUrl}
            className={cls.buttonContainer}
            slideDirection={'right'}
          >
            <Button
              style={{
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                backgroundColor: '#631a8a',
              }}
              onClick={() => {
                dispatch(currentTopicActions.togglePauseMenuOpen());
              }}
            >
              <CircleStop color={'white'} />
            </Button>
            <p>Завершить</p>
          </LinkWithAnimation>
          <div className={cls.buttonContainer}>
            <Button
              style={{ borderRadius: '50%', width: '60px', height: '60px' }}
              onClick={() => {
                dispatch(currentTopicActions.togglePauseMenuOpen());
                dispatch(stopwatchActions.play());
              }}
            >
              <Play color={'#530b78'} />
            </Button>
            <p>Продолжить</p>
          </div>
        </div>
        <div style={{ marginTop: '40px' }}>
          <WordList words={currentTopicWords} />
        </div>
      </div>
    </>
  );
};
