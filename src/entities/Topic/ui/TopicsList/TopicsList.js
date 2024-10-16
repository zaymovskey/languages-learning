import { jsx as _jsx } from "react/jsx-runtime";
import { TopicListItem } from '../TopicListItem/TopicListItem.tsx';
import cls from './TopicsList.module.scss';
export const TopicsList = ({ topics }) => {
    return (_jsx("div", { className: cls.topicsList, children: topics.map((topic, index) => (_jsx(TopicListItem, { ...topic }, index))) }));
};
