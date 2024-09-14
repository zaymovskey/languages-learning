import cls from './PageLoader.module.scss';
import { Loader } from '@/shared/Loader/Loader.tsx';
import { classNames } from '@/shared/lib/utils/classNames/classNames.ts';
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
