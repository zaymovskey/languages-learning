import { Choice } from '@/entities/Game/Question/ui/Choice/Choise.tsx';
import { ComponentType } from 'react';

export const QUESTION_TYPES = ['Choice'] as const;

export type TypeQuestionTypes = (typeof QUESTION_TYPES)[number];

export const QUESTION_TYPES_COMPONENTS: Record<
  TypeQuestionTypes,
  ComponentType
> = {
  Choice: Choice,
};
