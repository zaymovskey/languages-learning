import { rootReducer } from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';

export function createReduxStore() {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
  });
}

export const store = createReduxStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
