import cls from './Header.module.scss';
import { useAppSelector } from '@/app';
import { classNames } from '@/shared/lib';
import { LinkWithAnimation } from '@/shared/ui';
import { ArrowRight02Icon } from 'hugeicons-react';
import { type FC } from 'react';

interface IHeaderProps {
  className?: string;
}

export const Header: FC<IHeaderProps> = ({ className }) => {
  const prevUrl = useAppSelector((state) => state.prevUrl.url);

  return (
    <div className={classNames(cls.header, {}, [className])}>
      <LinkWithAnimation
        to={prevUrl || '/'}
        className={cls.backButton}
        slideDirection={'right'}
      >
        <ArrowRight02Icon className={cls.backArrow} />
      </LinkWithAnimation>
    </div>
  );
};
