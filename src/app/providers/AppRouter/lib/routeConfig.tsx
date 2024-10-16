import { GamePage } from '@/pages/GamePage';
import { TopicDetailsPage } from '@/pages/TopicDetailsPage';
import { TopicsListPage } from '@/pages/TopicsListPage';
import { type RouteProps } from 'react-router-dom';

export enum EnumAppRoutes {
  TOPICS_LIST = 'topics_list',
  TOPIC_DETAILS = 'topic_details',
  GAME = 'game',
}

export const RoutePath: Record<EnumAppRoutes, string> = {
  [EnumAppRoutes.TOPICS_LIST]: '/topics',
  [EnumAppRoutes.TOPIC_DETAILS]: '/topics/:slug',
  [EnumAppRoutes.GAME]: '/topics/:slug/game',
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
  [EnumAppRoutes.GAME]: {
    path: RoutePath.game,
    element: <GamePage />,
  },
};
