import { useAppDispatch, useAppSelector } from '@/app';
import { stopwatchActions } from '@/shared/ui';
import { useEffect } from 'react';

export const Stopwatch = () => {
  const dispatch = useAppDispatch();
  const stopwatchData = useAppSelector((state) => state.stopwatch);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(stopwatchActions.tick());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {stopwatchData.minutes}:{stopwatchData.seconds}
    </div>
  );
};
