import cls from './Header.module.scss';
import { useAppSelector } from '@/app';
import { classNames } from '@/shared/lib';
import { LinkWithAnimation } from '@/shared/ui';
import { ArrowRight02Icon } from 'hugeicons-react';
import { type FC } from 'react';
import { useLocation } from 'react-router-dom';

interface IHeaderProps {
  className?: string;
}

export const Header: FC<IHeaderProps> = ({ className }) => {
  const prevUrl = useAppSelector((state) => state.global.prevUrl);
  const location = useLocation();

  return (
    <div className={classNames(cls.header, {}, [className])}>
      <LinkWithAnimation
        to={prevUrl || '/'}
        slideDirection={'right'}
        style={{
          pointerEvents: location.pathname === '/topics' ? 'none' : 'unset',
        }}
      >
        <button className={cls.backButton}>
          <ArrowRight02Icon className={cls.backArrow} />
        </button>
      </LinkWithAnimation>
    </div>
  );
};
