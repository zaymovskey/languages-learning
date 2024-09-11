import { lazy } from 'react';

export const TopicsListPage = lazy(
  async () => await import('./TopicsListPage')
);
