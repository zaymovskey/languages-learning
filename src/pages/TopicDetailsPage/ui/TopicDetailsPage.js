import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cls from './TopicDetailsPage.module.scss';
import { TOPICS } from '@/DB.tsx';
import { WordList } from '@/entities/Word';
import { Button, LinkWithSetPrevUrl } from '@/shared/ui';
import { useParams } from 'react-router-dom';
const TopicDetailsPage = () => {
    const { slug } = useParams();
    const currentTopic = TOPICS.find((topic) => topic.slug === slug);
    return (_jsxs("div", { children: [_jsx("div", { className: cls.imageBlock, children: _jsx(currentTopic.Icon, { color: 'inherit', width: 110, height: 110 }) }), _jsxs("div", { className: "paddings-content", children: [_jsx("h2", { className: cls.title, children: currentTopic.title }), _jsx(LinkWithSetPrevUrl, { to: 'game', style: { display: 'flex', justifyContent: 'center' }, children: _jsx(Button, { children: "\u0423\u0447\u0438\u0442\u044C" }) }), _jsx(WordList, { words: currentTopic.words, className: cls.wordList })] })] }));
};
export default TopicDetailsPage;
