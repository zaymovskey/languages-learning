import { ITopic } from '@/DB';
import { TypeQuestionTypes } from '@/entities/Question';

export interface ICurrentTopicScheme extends ITopic {
  currentQuestionType: TypeQuestionTypes | null;
  isBlocked: boolean;
  isFade: boolean;
  answersHistory: IAnswersHistoryItem[];
  isPauseMenuOpen: boolean;
}

export interface IAnswersHistoryItem {
  word: string;
  rightCount: number;
  wrongCount: number;
  frequency: number;
}
