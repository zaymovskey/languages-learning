import { useAppDispatch, useAppSelector } from '@/app';
import { globalActions } from '@/shared/lib';
import { AnimatePresence, AnimationProps, motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

export const AnimatePageWrapper: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const location = useLocation();

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
        exit: { x: slideDirection === 'left' ? '-100%' : '100%' },
        transition: {
          ease: 'linear',
          x: { duration: 0.3 },
        },
      };

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        {...animationProps}
        onAnimationComplete={() => {
          dispatch(globalActions.setPageAnimationDirection(null));
        }}
        className="motion-div"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
