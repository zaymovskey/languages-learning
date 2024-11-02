import cls from './GamePage.module.scss';
import { useAppDispatch, useAppSelector } from '@/app';
import { currentTopicActions } from '@/entities/Game';
import {
  QUESTION_TYPES,
  QUESTION_TYPES_COMPONENTS,
  useNextQuestion,
} from '@/entities/Question';
import { classNames, globalActions } from '@/shared/lib';
import { AnimatePageWrapper, stopwatchActions } from '@/shared/ui';
import { GamePauseMenu, Statistics } from '@/widgets';
import { FC, useEffect } from 'react';

const GamePage: FC = () => {
  const dispatch = useAppDispatch();

  const currentTopic = useAppSelector((state) => state.currentTopic);

  const currentStoreTopicSlug = useAppSelector(
    (state) => state.currentTopic.slug
  );
  const isFadeQuestion = useAppSelector((state) => state.currentTopic.isFade);
  const toNextQuestion = useNextQuestion();
  const currentQuestionType = useAppSelector(
    (state) => state.currentTopic.currentQuestionType
  );
  const isBlocked = useAppSelector((state) => state.currentTopic.isBlocked);
  const topicWords = useAppSelector((state) => state.currentTopic.words);
  const gamePauseMenuIsOpen = useAppSelector(
    (state) => state.currentTopic.isPauseMenuOpen
  );
  const answersHistory = useAppSelector(
    (state) => state.currentTopic.answersHistory
  );

  useEffect(() => {
    // Устанавливаем тип вопроса
    if (!currentTopic) return;

    if (currentQuestionType === null) {
      const randomIndex = Math.floor(Math.random() * QUESTION_TYPES.length);
      dispatch(
        currentTopicActions.setCurrentQuestionType(QUESTION_TYPES[randomIndex])
      );
    }
  }, [currentQuestionType, currentTopic, dispatch]);

  useEffect(() => {
    dispatch(globalActions.setGameHeaderType('gameHeader'));

    return () => {
      dispatch(globalActions.setGameHeaderType('default'));
    };
  }, []);

  useEffect(() => {
    // Закрываем меню, если открыто
    if (gamePauseMenuIsOpen) {
      dispatch(currentTopicActions.togglePauseMenuOpen());
    }
  }, []);

  useEffect(() => {
    if (!currentTopic) return;
    dispatch(stopwatchActions.play());

    // Проверяем сменялась ли тема
    if (currentTopic.slug === currentStoreTopicSlug) return;

    dispatch(currentTopicActions.resetAnswersHistory());
    dispatch(stopwatchActions.reset());
  }, [currentStoreTopicSlug, currentTopic, dispatch]);

  const QuestionComponent =
    QUESTION_TYPES_COMPONENTS[currentQuestionType || 'Input'];

  console.log(topicWords);

  return (
    <AnimatePageWrapper>
      <div
        className={classNames(cls.gamePage, { [cls.blocked]: isBlocked }, [])}
      >
        <div className="paddings-content">
          <div
            className={classNames(
              cls.questionWrapper,
              { [cls.fade]: isFadeQuestion },
              []
            )}
          >
            {topicWords.length && answersHistory.length && (
              <QuestionComponent toNextQuestion={toNextQuestion} />
            )}
          </div>
          <Statistics />
        </div>
        <GamePauseMenu />
      </div>
    </AnimatePageWrapper>
  );
};

export default GamePage;
