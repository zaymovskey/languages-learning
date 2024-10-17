import cls from './GamePage.module.scss';
import { TOPICS } from '@/DB.tsx';
import { useAppDispatch, useAppSelector } from '@/app';
import { currentTopicActions, Statistics } from '@/entities/Game';
import {
  QUESTION_TYPES,
  QUESTION_TYPES_COMPONENTS,
  useNextQuestion,
} from '@/entities/Question';
import { classNames } from '@/shared/lib';
import { AnimatePageWrapper } from '@/shared/ui';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

const GamePage: FC = () => {
  const dispatch = useAppDispatch();

  const { slug } = useParams();
  const currentTopic = TOPICS.find((topic) => topic.slug === slug);

  if (!currentTopic) {
    return <div>Тема не найдена</div>;
  }

  const isFadeQuestion = useAppSelector((state) => state.currentTopic.isFade);

  const toNextQuestion = useNextQuestion();

  const currentQuestionType = useAppSelector(
    (state) => state.currentTopic.currentQuestionType
  );
  const isBlocked = useAppSelector((state) => state.currentTopic.isBlocked);

  dispatch(currentTopicActions.setWords(currentTopic.words));
  dispatch(
    currentTopicActions.setAnswersHistory(
      currentTopic.words.map((word) => ({
        rightCount: 0,
        word: word.hebrew.withoutAnnouncement,
      }))
    )
  );

  if (currentQuestionType === null) {
    const randomIndex = Math.floor(Math.random() * QUESTION_TYPES.length);
    dispatch(
      currentTopicActions.setCurrentQuestionType(QUESTION_TYPES[randomIndex])
    );
  }

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
            <QuestionComponent toNextQuestion={toNextQuestion} />
          </div>
          <Statistics />
        </div>
      </div>
    </AnimatePageWrapper>
  );
};

export default GamePage;
