import { Choice } from '@/entities/Question/ui/Choice/Choiсe.tsx';
import { Typing } from '@/entities/Question/ui/Typing/Typing.tsx';
export const QUESTION_TYPES = ['Input', 'Choice'];
export const QUESTION_TYPES_COMPONENTS = {
    Choice: Choice,
    Input: Typing,
};
