import cls from './Input.module.scss';
import { IQuestionComponentProps } from '@/entities/Game/Question/types/TypeQuestionTypes.ts';
import { classNames } from '@/shared/lib/utils/classNames/classNames.ts';
import { type FC } from 'react';

interface IInputProps extends IQuestionComponentProps {
  className?: string;
}

export const Input: FC<IInputProps> = ({ className }) => {
  return <div className={classNames(cls.Input, {}, [className])}>fdsafdf</div>;
};
