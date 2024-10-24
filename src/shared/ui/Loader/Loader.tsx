import { classNames } from '../../lib/utils/classNames/classNames.ts';
import cls from './Loader.module.scss';
import { type FC } from 'react';

interface ILoaderProps {
  className?: string;
}

export const Loader: FC<ILoaderProps> = ({ className }) => {
  return (
    <div className={classNames(cls.Loader, {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
