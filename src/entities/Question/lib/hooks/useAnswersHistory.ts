import { useAppDispatch } from '@/app';
import { currentTopicActions } from '@/entities/Game';

export const useAnswersHistory = () => {
  const dispatch = useAppDispatch();

  return (answer: string, rightAnswer: string) => {
    dispatch(
      currentTopicActions.addToAnswersHistory({
        word: rightAnswer,
        isRight: answer === rightAnswer,
      })
    );
  };
};
