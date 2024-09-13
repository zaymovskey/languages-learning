import { ITopic } from '@/DB';
import { TypeQuestionTypes } from '@/entities/Game/Question/types/TypeQuestionTypes';

export interface ICurrentTopicScheme extends ITopic {
  answers: {
    wrong: number;
    right: number;
  };
  currentQuestionType: TypeQuestionTypes | null;
  isBlocked: boolean;
}
