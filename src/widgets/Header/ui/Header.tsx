import cls from './Header.module.scss';
import { classNames } from '@/shared/lib/utils/classNames/classNames.ts';
import { ArrowRight02Icon } from 'hugeicons-react';
import { type FC } from 'react';

interface IHeaderProps {
  className?: string;
}

export const Header: FC<IHeaderProps> = ({ className }) => {
  return (
    <div className={classNames(cls.header, {}, [className])}>
      <ArrowRight02Icon className={cls.backArrow} />
    </div>
  );
};
