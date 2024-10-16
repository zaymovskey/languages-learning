import { useAppDispatch, useAppSelector } from '@/app';
import { currentTopicActions } from '@/entities/Game';
import { QUESTION_TYPES } from '@/entities/Question';
import { useCallback, useEffect, useRef } from 'react';

export const useNextQuestion = () => {
  const dispatch = useAppDispatch();

  const currentQuestionType = useAppSelector(
    (state) => state.currentTopic.currentQuestionType
  );

  const currentQuestionTypeRef = useRef(currentQuestionType);

  useEffect(() => {
    currentQuestionTypeRef.current = currentQuestionType;
  }, [currentQuestionType]);

  const changeQuestionWithFadeAnimation = (callback: () => void) => {
    setTimeout(() => {
      callback();
      setTimeout(() => {
        dispatch(currentTopicActions.setIsFade(false));
      }, 200);
    }, 500);
  };

  return useCallback(
    (refreshQuestion?: () => void) => {
      dispatch(currentTopicActions.setIsFade(true));
      const randomIndex = Math.floor(Math.random() * QUESTION_TYPES.length);

      if (QUESTION_TYPES[randomIndex] === currentQuestionTypeRef.current) {
        changeQuestionWithFadeAnimation(() => {
          refreshQuestion?.();
        });
        return;
      }

      changeQuestionWithFadeAnimation(() => {
        dispatch(
          currentTopicActions.setCurrentQuestionType(
            QUESTION_TYPES[randomIndex]
          )
        );
      });
    },
    [currentQuestionType]
  );
};
