import { Choice } from '@/entities/Game/Question/ui/Choice/Choiсe.tsx';
import { Input } from '@/entities/Game/Question/ui/Input/Input.tsx';
import { FC } from 'react';

export const QUESTION_TYPES = ['Choice', 'Input'] as const;

export type TypeQuestionTypes = (typeof QUESTION_TYPES)[number];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const QUESTION_TYPES_COMPONENTS: Record<TypeQuestionTypes, FC<any>> = {
  Choice: Choice,
  Input: Input,
};
