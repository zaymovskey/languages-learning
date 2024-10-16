import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cls from './TopicListItem.module.scss';
import { EnumAppRoutes } from '@/app';
import { RoutePath } from '@/app';
import { LinkWithSetPrevUrl } from '@/shared/ui';
export const TopicListItem = ({ slug, title, Icon }) => {
    return (_jsxs(LinkWithSetPrevUrl, { to: `${RoutePath[EnumAppRoutes.TOPICS_LIST]}/${slug}`, className: cls.topicListItem, children: [_jsx("div", { className: cls.imageBlock, children: _jsx(Icon, { color: 'inherit', width: 30, height: 30 }) }), _jsx("h4", { className: cls.titleBlock, children: title })] }));
};
