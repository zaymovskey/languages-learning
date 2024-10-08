import cls from './Header.module.scss';
import { classNames } from '@/shared/lib/utils/classNames/classNames.ts';
import { ArrowRight02Icon } from 'hugeicons-react';
import { type FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface IHeaderProps {
  className?: string;
}

export const Header: FC<IHeaderProps> = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickBack = () => {
    const newPath = removeLastSegment(location.pathname);
    if (newPath !== '') {
      navigate(newPath);
    }
  };

  function removeLastSegment(path: string): string {
    const normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;

    const lastSlashIndex = normalizedPath.lastIndexOf('/');

    if (lastSlashIndex !== -1) {
      return normalizedPath.slice(0, lastSlashIndex);
    }

    return normalizedPath;
  }

  return (
    <div className={classNames(cls.header, {}, [className])}>
      <button className={cls.backButton} onClick={handleClickBack}>
        <ArrowRight02Icon className={cls.backArrow} />
      </button>
    </div>
  );
};
