import {
  IAnswersHistoryItem,
  type ICurrentTopicScheme,
} from '../types/ICurrentTopicScheme';
import { ITopic, IWord } from '@/DB.tsx';
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
  isPauseMenuOpen: false,
};

export const currentTopicSlice = createSlice({
  name: 'currentTopic',
  initialState,
  reducers: {
    setCurrentTopic(state, action: PayloadAction<ITopic>) {
      state.title = action.payload.title;
      state.Icon = action.payload.Icon;
      state.slug = action.payload.slug;
      state.words = action.payload.words;
    },
    togglePauseMenuOpen(state) {
      state.isPauseMenuOpen = !state.isPauseMenuOpen;
    },
    setSlug(state, action: PayloadAction<string>) {
      state.slug = action.payload;
    },
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
    setAnswersHistory(state, action: PayloadAction<IWord[]>) {
      state.answersHistory = action.payload.map((word) => ({
        rightCount: 0,
        wrongCount: 0,
        word: word.hebrew.withoutAnnouncement,
        frequency: 0,
      }));
    },
    addToAnswersHistory(
      state,
      action: PayloadAction<{ word: string; isRight: boolean }>
    ) {
      const historyItem: IAnswersHistoryItem | undefined =
        state.answersHistory.find((item) => item.word === action.payload.word);

      if (historyItem) {
        state.answersHistory = state.answersHistory.map((item) => {
          if (item.word === historyItem.word) {
            return {
              ...historyItem,
              rightCount:
                historyItem.rightCount + Number(action.payload.isRight),
              wrongCount:
                historyItem.wrongCount + Number(!action.payload.isRight),
              frequency: historyItem.frequency + 1,
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
            frequency: 1,
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
