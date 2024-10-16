import { Choice } from '@/entities/Question/ui/Choice/Choiсe.tsx';
import { Typing } from '@/entities/Question/ui/Typing/Typing.tsx';
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
  Input: Typing,
};
