export const QUESTION_TYPES = ['Choice'] as const;

export type TypeQuestionTypes = (typeof QUESTION_TYPES)[number];
