import { IStateScheme } from './IStateScheme.ts';
import { currentTopicReducer } from '@/entities/Game';
import { prevUrlReducer } from '@/shared/lib';
import type { ReducersMapObject } from '@reduxjs/toolkit';

export const rootReducer: ReducersMapObject<IStateScheme> = {
  currentTopic: currentTopicReducer,
  prevUrl: prevUrlReducer,
};
