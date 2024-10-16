import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IGlobalScheme {
  url: string;
  slideDirection: 'left' | 'right' | null;
}

const initialState: IGlobalScheme = {
  url: '/',
  slideDirection: null,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setUrl(state, action: PayloadAction<string>) {
      state.url = action.payload;
    },
    setPageAnimationDirection(
      state,
      action: PayloadAction<'left' | 'right' | null>
    ) {
      state.slideDirection = action.payload;
    },
  },
});

export const { actions: globalActions } = globalSlice;
export const { reducer: globalReducer } = globalSlice;
