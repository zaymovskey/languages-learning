import { ITopic } from '@/DB';
import { TypeQuestionTypes } from '@/entities/Question';

export interface ICurrentTopicScheme extends ITopic {
  answers: {
    wrong: number;
    right: number;
  };
  currentQuestionType: TypeQuestionTypes | null;
  isBlocked: boolean;
  isFade: boolean;
}
