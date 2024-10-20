import { ICurrentTopicScheme } from '@/entities/Game';
import { IGlobalScheme } from '@/shared/lib';
import { IStopwatchScheme } from '@/shared/ui';

export interface IStateScheme {
  currentTopic: ICurrentTopicScheme;
  global: IGlobalScheme;
  stopwatch: IStopwatchScheme;
}
