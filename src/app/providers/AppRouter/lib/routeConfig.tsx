import { TopicDetailsPage } from '@/pages/TopicDetailsPage';
import { TopicsListPage } from '@/pages/TopicsListPage';
import { type RouteProps } from 'react-router-dom';

export enum EnumAppRoutes {
  TOPICS_LIST = 'topics_list',
  TOPIC_DETAILS = 'topic_details',
}

export const RoutePath: Record<EnumAppRoutes, string> = {
  [EnumAppRoutes.TOPICS_LIST]: '/',
  [EnumAppRoutes.TOPIC_DETAILS]: '/topic/:slug',
};

export const RouteConfig: Record<EnumAppRoutes, RouteProps> = {
  [EnumAppRoutes.TOPICS_LIST]: {
    path: RoutePath.topics_list,
    element: <TopicsListPage />,
  },
  [EnumAppRoutes.TOPIC_DETAILS]: {
    path: RoutePath.topic_details,
    element: <TopicDetailsPage />,
  },
};
