import { TOPICS } from '@/DB.tsx';
import {
  useAppDispatch,
  useAppSelector,
} from '@/app/providers/StoreProvider/lib/hooks.ts';
import { useNextQuestion } from '@/entities/Game/Question/lib/hooks/useNextQuestion.ts';
import {
  QUESTION_TYPES,
  QUESTION_TYPES_COMPONENTS,
} from '@/entities/Game/Question/types/TypeQuestionTypes.ts';
import { currentTopicActions } from '@/entities/Game/model/slices/currentTopicSlice.ts';
import { Statistics } from '@/entities/Game/ui/Statistics/Statistics.tsx';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

const GamePage: FC = () => {
  const dispatch = useAppDispatch();

  const { slug } = useParams();
  const currentTopic = TOPICS.find((topic) => topic.slug === slug);

  if (!currentTopic) {
    return <div>Тема не найдена</div>;
  }

  const toNextQuestion = useNextQuestion();

  const currentQuestionType = useAppSelector(
    (state) => state.currentTopic.currentQuestionType
  );

  if (currentQuestionType === null) {
    const randomIndex = Math.floor(Math.random() * QUESTION_TYPES.length);
    dispatch(
      currentTopicActions.setCurrentQuestionType(QUESTION_TYPES[randomIndex])
    );
    dispatch(currentTopicActions.setWords(currentTopic.words));
  }

  const QuestionComponent =
    QUESTION_TYPES_COMPONENTS[currentQuestionType || 'Choice'];

  return (
    <div>
      <div className="paddings-content">
        <QuestionComponent toNextQuestion={toNextQuestion} />
        <Statistics />
      </div>
    </div>
  );
};

export default GamePage;
