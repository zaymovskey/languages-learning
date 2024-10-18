import cls from './GamePage.module.scss';
import { TOPICS } from '@/DB.tsx';
import { useAppDispatch, useAppSelector } from '@/app';
import { currentTopicActions } from '@/entities/Game';
import {
  QUESTION_TYPES,
  QUESTION_TYPES_COMPONENTS,
  useNextQuestion,
} from '@/entities/Question';
import { classNames, globalActions } from '@/shared/lib';
import { AnimatePageWrapper, stopwatchActions } from '@/shared/ui';
import { Statistics } from '@/widgets';
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const GamePage: FC = () => {
  const dispatch = useAppDispatch();

  const { slug } = useParams();
  const currentTopic = TOPICS.find((topic) => topic.slug === slug);
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

  const headerType = useAppSelector((state) => state.global.headerType);

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
    if (headerType === 'gameHeader') return;
    dispatch(globalActions.setGameHeaderType('gameHeader'));

    return () => {
      dispatch(globalActions.setGameHeaderType('default'));
    };
  }, []);

  useEffect(() => {
    // Проверяем сменялась ли тема
    if (!currentTopic) return;
    if (currentTopic.slug === currentStoreTopicSlug) return;

    dispatch(currentTopicActions.setSlug(currentTopic.slug));
    dispatch(currentTopicActions.setWords(currentTopic.words));
    dispatch(currentTopicActions.resetAnswersHistory());
    dispatch(stopwatchActions.reset());
  }, [currentStoreTopicSlug, currentTopic, dispatch]);

  const QuestionComponent =
    QUESTION_TYPES_COMPONENTS[currentQuestionType || 'Input'];

  return (
    <AnimatePageWrapper>
      <div className={classNames('', { [cls.blocked]: isBlocked }, [])}>
        <div className="paddings-content">
          <div
            className={classNames(
              cls.questionWrapper,
              { [cls.fade]: isFadeQuestion },
              []
            )}
          >
            {topicWords.length && (
              <QuestionComponent toNextQuestion={toNextQuestion} />
            )}
          </div>
          <Statistics />
        </div>
      </div>
    </AnimatePageWrapper>
  );
};

export default GamePage;
