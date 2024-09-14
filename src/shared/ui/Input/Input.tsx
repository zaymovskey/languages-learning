import cls from './Input.module.scss';
import { classNames } from '@/shared/lib/utils/classNames/classNames.ts';
import { type FC, InputHTMLAttributes } from 'react';

export enum EnumInputTheme {
  PRIMARY = 'primary',
  WRONG = 'wrong',
  RIGHT = 'right',
}

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  theme?: EnumInputTheme;
}

export const Input: FC<IInputProps> = (
  {
    className,
    value,
    theme = EnumInputTheme.PRIMARY,
    onChange,
    ...defaultInputProps
  }
) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={classNames(cls.input, {}, [className, cls[theme]])}
      {...defaultInputProps}
    ></input>
  );
};
