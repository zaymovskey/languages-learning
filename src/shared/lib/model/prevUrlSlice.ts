import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPrevUrlScheme {
  url: string;
  slideDirection: 'left' | 'right';
}

const initialState: IPrevUrlScheme = {
  url: '/',
  slideDirection: 'left',
};

export const prevUrlSlice = createSlice({
  name: 'prevUrl',
  initialState,
  reducers: {
    setUrl(state, action: PayloadAction<string>) {
      state.url = action.payload;
    },
    setTest(state, action: PayloadAction<'left' | 'right'>) {
      state.slideDirection = action.payload;
    },
  },
});

export const { actions: prevUrlActions } = prevUrlSlice;
export const { reducer: prevUrlReducer } = prevUrlSlice;
