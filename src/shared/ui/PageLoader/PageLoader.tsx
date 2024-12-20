import { classNames } from '../../lib/utils/classNames/classNames.ts';
import { Loader } from '../Loader/Loader.tsx';
import cls from './PageLoader.module.scss';
import { type FC } from 'react';

interface IPageLoaderProps {
  className?: string;
}

export const PageLoader: FC<IPageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
