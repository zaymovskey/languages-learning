import { ITopic } from '@/DB';
import { TypeQuestionTypes } from '@/entities/Question';

export interface ICurrentTopicScheme extends ITopic {
  currentQuestionType: TypeQuestionTypes | null;
  isBlocked: boolean;
  isFade: boolean;
  answersHistory: { word: string; rightCount: number; wrongCount: number }[];
}
