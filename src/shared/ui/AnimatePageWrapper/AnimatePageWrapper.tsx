import { useAppDispatch, useAppSelector } from '@/app';
import { globalActions } from '@/shared/lib';
import { AnimationProps, motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

export const AnimatePageWrapper: FC<{ children: ReactNode }> = (
  { children }
) => {
  const slideDirection = useAppSelector((state) => state.global.slideDirection);
  const dispatch = useAppDispatch();

  const animationProps: AnimationProps = !slideDirection
    ? {
        animate: { opacity: 1, x: 0 },
        initial: { opacity: 0, x: 0 },
        transition: {
          duration: 0.3,
        },
      }
    : {
        animate: { x: 0 },
        initial: { x: slideDirection === 'left' ? '100%' : '-100%' },
        transition: {
          ease: 'linear',
          x: { duration: 0.3 },
        },
      };

  return (
    <motion.div
      {...animationProps}
      onAnimationComplete={() => {
        dispatch(globalActions.setPageAnimationDirection(null));
      }}
      className="motion-div"
    >
      {children}
    </motion.div>
  );
};
