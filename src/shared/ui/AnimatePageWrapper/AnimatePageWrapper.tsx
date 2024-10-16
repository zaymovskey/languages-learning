import { useAppSelector } from '@/app';
import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

export const AnimatePageWrapper: FC<{ children: ReactNode }> = (
  { children }
) => {
  const slideDirection = useAppSelector((state) => state.global.slideDirection);

  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: slideDirection === 'left' ? '100%' : '-100%' }}
      transition={{
        ease: 'linear',
        x: { duration: 0.3 },
      }}
      className="motion-div"
    >
      {children}
    </motion.div>
  );
};
