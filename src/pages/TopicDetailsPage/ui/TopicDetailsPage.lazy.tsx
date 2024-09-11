import { lazy } from 'react';

export const TopicsDetailsPage = lazy(
  async () => await import('./TopicDetailsPage')
);
