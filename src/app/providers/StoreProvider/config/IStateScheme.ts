import { ICurrentTopicScheme } from '@/entities/Game';
import { IPrevUrlScheme } from '@/shared/lib';

export interface IStateScheme {
  currentTopic: ICurrentTopicScheme;
  prevUrl: IPrevUrlScheme;
}
