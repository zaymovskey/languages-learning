import { currentTopicReducer } from './model/slices/currentTopicSlice.ts';
import { currentTopicActions } from './model/slices/currentTopicSlice.ts';
import { type ICurrentTopicScheme } from './model/types/ICurrentTopicScheme.ts';
import { Statistics } from '@/entities/Statistics/Statistics.tsx';

export {
  currentTopicReducer,
  ICurrentTopicScheme,
  currentTopicActions,
  Statistics,
};
