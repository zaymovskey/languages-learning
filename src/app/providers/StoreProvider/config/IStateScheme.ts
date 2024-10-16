import { ICurrentTopicScheme } from '@/entities/Game';
import { IGlobalScheme } from '@/shared/lib';

export interface IStateScheme {
  currentTopic: ICurrentTopicScheme;
  global: IGlobalScheme;
}
