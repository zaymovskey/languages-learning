import { lazy } from 'react';

export const GameStatisticsPage = lazy(
  async () => await import('./GameStatisticsPage')
);
