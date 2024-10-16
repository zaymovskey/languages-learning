import { createSlice } from '@reduxjs/toolkit';
const initialState = {
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
        setCurrentQuestionType(state, action) {
            state.currentQuestionType = action.payload;
        },
        setWords(state, action) {
            state.words = action.payload;
        },
        increaseRightAnswers(state) {
            state.answers.right += 1;
        },
        increaseWrongAnswers(state) {
            state.answers.wrong += 1;
        },
        setIsBlocked(state, action) {
            state.isBlocked = action.payload;
        },
    },
});
export const { actions: currentTopicActions } = currentTopicSlice;
export const { reducer: currentTopicReducer } = currentTopicSlice;
