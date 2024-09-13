import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks.ts';
import { FC } from 'react';

const GamePage: FC = () => {
  const questionType = useAppSelector(
    (state) => state.currentTopic.currentQuestionType
  );

  return <div>{questionType}</div>;
};

export default GamePage;
