import { Choice } from '@/entities/Game/Question/ui/Choice/Choiсe.tsx';
import { InputQuestion } from '@/entities/Game/Question/ui/InputQuestion/InputQuestion.tsx';
import { FC } from 'react';

export const QUESTION_TYPES = ['Input', 'Choice'] as const;

export type TypeQuestionTypes = (typeof QUESTION_TYPES)[number];

export interface IQuestionComponentProps {
  toNextQuestion: (refreshQuestion: () => void) => void;
}

export const QUESTION_TYPES_COMPONENTS: Record<
  TypeQuestionTypes,
  FC<IQuestionComponentProps>
> = {
  Choice: Choice,
  Input: InputQuestion,
};
