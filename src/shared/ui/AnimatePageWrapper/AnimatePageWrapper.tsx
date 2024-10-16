import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

export const AnimatePageWrapper: FC<{ children: ReactNode }> = (
  { children }
) => {
  return (
    <motion.div
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      initial={{ x: '100%' }}
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
