import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IGlobalScheme {
  url: string;
  slideDirection: 'left' | 'right' | null;
  headerType: 'default' | 'gameHeader';
}

const initialState: IGlobalScheme = {
  url: '/',
  slideDirection: null,
  headerType: 'default',
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
    setGameHeaderType(state, action: PayloadAction<'default' | 'gameHeader'>) {
      state.headerType = action.payload;
    },
  },
});

export const { actions: globalActions } = globalSlice;
export const { reducer: globalReducer } = globalSlice;
