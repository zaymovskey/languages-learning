import {
  useAppDispatch,
  useAppSelector,
} from '@/app/providers/StoreProvider/lib/hooks.ts';
import { QUESTION_TYPES } from '@/entities/Game/Question/types/TypeQuestionTypes.ts';
import { currentTopicActions } from '@/entities/Game/model/slices/currentTopicSlice.ts';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useNextQuestion = () => {
  const dispatch = useAppDispatch();

  const [, setRefreshCount] = useState(1);

  const refreshQuestion = () => {
    setRefreshCount((prev) => prev + 1);
  };

  const currentQuestionType = useAppSelector(
    (state) => state.currentTopic.currentQuestionType
  );

  const currentQuestionTypeRef = useRef(currentQuestionType);

  useEffect(() => {
    currentQuestionTypeRef.current = currentQuestionType;
  }, [currentQuestionType]);

  return useCallback(() => {
    const randomIndex = Math.floor(Math.random() * QUESTION_TYPES.length);
    if (QUESTION_TYPES[randomIndex] === currentQuestionTypeRef.current) {
      refreshQuestion();
      return;
    }

    dispatch(
      currentTopicActions.setCurrentQuestionType(QUESTION_TYPES[randomIndex])
    );
  }, [currentQuestionType]);
};
