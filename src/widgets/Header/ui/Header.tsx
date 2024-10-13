import cls from './Header.module.scss';
import { classNames } from '@/shared/lib';
import { ArrowRight02Icon } from 'hugeicons-react';
import { type FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface IHeaderProps {
  className?: string;
}

export const Header: FC<IHeaderProps> = ({ className }) => {
  const location = useLocation();
  const prevUrl = location.state?.prevUrl || '/';

  return (
    <div className={classNames(cls.header, {}, [className])}>
      <Link to={prevUrl} className={cls.backButton}>
        <ArrowRight02Icon className={cls.backArrow} />
      </Link>
    </div>
  );
};
