import { jsx as _jsx } from "react/jsx-runtime";
import { TOPICS } from '@/DB.tsx';
import { TopicsList } from '@/entities/Topic';
import { useState } from 'react';
const TopicsListPage = () => {
    const [huy, sethuy] = useState(2323);
    return (_jsx("div", { children: _jsx("div", { className: "paddings-content", children: _jsx(TopicsList, { topics: TOPICS }) }) }));
};
export default TopicsListPage;
