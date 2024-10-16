import { IStateScheme } from './IStateScheme.ts';
import { currentTopicReducer } from '@/entities/Game';
import { globalReducer } from '@/shared/lib';
import type { ReducersMapObject } from '@reduxjs/toolkit';

export const rootReducer: ReducersMapObject<IStateScheme> = {
  currentTopic: currentTopicReducer,
  global: globalReducer,
};
