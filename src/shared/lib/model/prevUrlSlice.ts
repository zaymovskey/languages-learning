import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPrevUrlScheme {
  url: string;
}

const initialState: IPrevUrlScheme = {
  url: '/',
};

export const prevUrlSlice = createSlice({
  name: 'prevUrl',
  initialState,
  reducers: {
    setUrl(state, action: PayloadAction<string>) {
      state.url = action.payload;
    },
  },
});

export const { actions: prevUrlActions } = prevUrlSlice;
export const { reducer: prevUrlReducer } = prevUrlSlice;
