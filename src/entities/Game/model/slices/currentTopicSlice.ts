import { type ICurrentTopicScheme } from '../types/ICurrentTopicScheme';
import { IWord } from '@/DB.tsx';
import { TypeQuestionTypes } from '@/entities/Game/Question/types/TypeQuestionTypes.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ICurrentTopicScheme = {
  title: '',
  Icon: () => null,
  slug: '',
  words: [],
  answers: {
    wrong: 0,
    right: 0,
  },
  currentQuestionType: null,
  isBlocked: false,
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
    increaseRightAnswers(state) {
      state.answers.right += 1;
    },
    increaseWrongAnswers(state) {
      state.answers.wrong += 1;
    },
    setIsBlocked(state, action: PayloadAction<boolean>) {
      state.isBlocked = action.payload;
    },
  },
});

export const { actions: currentTopicActions } = currentTopicSlice;
export const { reducer: currentTopicReducer } = currentTopicSlice;
