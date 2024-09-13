import { TOPICS } from '@/DB.tsx';
import {
  useAppDispatch,
  useAppSelector,
} from '@/app/providers/StoreProvider/lib/hooks.ts';
import {
  QUESTION_TYPES,
  QUESTION_TYPES_COMPONENTS,
} from '@/entities/Game/Question/types/TypeQuestionTypes.ts';
import { currentTopicActions } from '@/entities/Game/model/slices/currentTopicSlice.ts';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

const GamePage: FC = () => {
  const dispatch = useAppDispatch();

  const { slug } = useParams();
  const currentTopic = TOPICS.find((topic) => topic.slug === slug);

  if (!currentTopic) {
    return <div>Тема не найдена</div>;
  }

  const questionType = useAppSelector(
    (state) => state.currentTopic.currentQuestionType
  );

  if (questionType === null) {
    const randomIndex = Math.floor(Math.random() * QUESTION_TYPES.length);
    dispatch(currentTopicActions.setQuestionType(QUESTION_TYPES[randomIndex]));
    dispatch(currentTopicActions.setWords(currentTopic.words));
  }

  const QuestionComponent = QUESTION_TYPES_COMPONENTS[questionType || 'Choice'];

  return (
    <div>
      <div className="paddings-content">
        <QuestionComponent />
      </div>
    </div>
  );
};

export default GamePage;
