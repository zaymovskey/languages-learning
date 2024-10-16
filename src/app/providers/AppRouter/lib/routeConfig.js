import { jsx as _jsx } from "react/jsx-runtime";
import { GamePage } from '@/pages/GamePage';
import { TopicDetailsPage } from '@/pages/TopicDetailsPage';
import { TopicsListPage } from '@/pages/TopicsListPage';
export var EnumAppRoutes;
(function (EnumAppRoutes) {
    EnumAppRoutes["TOPICS_LIST"] = "topics_list";
    EnumAppRoutes["TOPIC_DETAILS"] = "topic_details";
    EnumAppRoutes["GAME"] = "game";
})(EnumAppRoutes || (EnumAppRoutes = {}));
export const RoutePath = {
    [EnumAppRoutes.TOPICS_LIST]: '/topics',
    [EnumAppRoutes.TOPIC_DETAILS]: '/topics/:slug',
    [EnumAppRoutes.GAME]: '/topics/:slug/game',
};
export const RouteConfig = {
    [EnumAppRoutes.TOPICS_LIST]: {
        path: RoutePath.topics_list,
        element: _jsx(TopicsListPage, {}),
    },
    [EnumAppRoutes.TOPIC_DETAILS]: {
        path: RoutePath.topic_details,
        element: _jsx(TopicDetailsPage, {}),
    },
    [EnumAppRoutes.GAME]: {
        path: RoutePath.game,
        element: _jsx(GamePage, {}),
    },
};
