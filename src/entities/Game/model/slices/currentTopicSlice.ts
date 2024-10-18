import { type ICurrentTopicScheme } from '../types/ICurrentTopicScheme';
import { IWord } from '@/DB.tsx';
import { TypeQuestionTypes } from '@/entities/Question';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ICurrentTopicScheme = {
  title: '',
  Icon: () => null,
  slug: '',
  words: [],
  currentQuestionType: null,
  isBlocked: false,
  isFade: false,
  answersHistory: [],
};

export const currentTopicSlice = createSlice({
  name: 'currentTopic',
  initialState,
  reducers: {
    setCurrentQuestionType(
      state,
      action: PayloadAction<TypeQuestionTypes | null>
    ) {
      state.currentQuestionType = action.payload;
    },
    setWords(state, action: PayloadAction<IWord[]>) {
      state.words = action.payload;
    },
    setIsBlocked(state, action: PayloadAction<boolean>) {
      state.isBlocked = action.payload;
    },
    setIsFade(state, action: PayloadAction<boolean>) {
      state.isFade = action.payload;
    },
    addAnswersHistory(
      state,
      action: PayloadAction<{ word: string; isRight: boolean }>
    ) {
      const historyItem:
        | { word: string; rightCount: number; wrongCount: number }
        | undefined = state.answersHistory.find(
        (item) => item.word === action.payload.word
      );

      if (historyItem) {
        state.answersHistory = state.answersHistory.map((item) => {
          if (item.word === historyItem.word) {
            return {
              ...historyItem,
              rightCount:
                historyItem.rightCount + Number(action.payload.isRight),
              wrongCount:
                historyItem.wrongCount + Number(!action.payload.isRight),
            };
          } else {
            return item;
          }
        });
      } else {
        state.answersHistory = [
          ...state.answersHistory,
          {
            word: action.payload.word,
            rightCount: action.payload.isRight ? 1 : 0,
            wrongCount: action.payload.isRight ? 0 : 1,
          },
        ];
      }
    },
    resetAnswersHistory(state) {
      state.answersHistory = [];
    },
  },
});

export const { actions: currentTopicActions } = currentTopicSlice;
export const { reducer: currentTopicReducer } = currentTopicSlice;
