import cls from './Header.module.scss';
import { useAppSelector } from '@/app';
import { classNames } from '@/shared/lib';
import { ArrowRight02Icon } from 'hugeicons-react';
import { type FC } from 'react';
import { Link } from 'react-router-dom';

interface IHeaderProps {
  className?: string;
}

export const Header: FC<IHeaderProps> = ({ className }) => {
  const prevUrl = useAppSelector((state) => state.prevUrl.url);

  return (
    <div className={classNames(cls.header, {}, [className])}>
      <Link to={prevUrl || '/'} className={cls.backButton}>
        <ArrowRight02Icon className={cls.backArrow} />
      </Link>
    </div>
  );
};
