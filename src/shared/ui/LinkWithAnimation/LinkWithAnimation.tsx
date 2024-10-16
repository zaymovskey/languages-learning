import { useAppDispatch } from '@/app';
import { globalActions } from '@/shared/lib';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface ILinkWithAnimationProps extends LinkProps {
  slideDirection?: 'left' | 'right';
}

export const LinkWithAnimation: FC<ILinkWithAnimationProps> = (
  { slideDirection = 'left', ...defaultProps }
) => {
  const dispatch = useAppDispatch();

  return (
    <Link
      {...defaultProps}
      onClick={() => {
        dispatch(globalActions.setTest(slideDirection));
      }}
    ></Link>
  );
};
