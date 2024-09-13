import cls from './Input.module.scss';
import { classNames } from '@/shared/lib/utils/classNames/classNames.ts';
import { type FC } from 'react';

interface IInputProps {
  className?: string;
}

export const Input: FC<IInputProps> = ({ className }) => {
  return <div className={classNames(cls.Input, {}, [className])}>fdsafdf</div>;
};
