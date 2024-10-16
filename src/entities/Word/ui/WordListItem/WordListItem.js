import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cls from './WordListItem.module.scss';
export const WordListItem = ({ Icon, hebrew, russian }) => {
    return (_jsxs("div", { className: cls.wordListItem, children: [_jsx(Icon, { color: 'inherit', width: 40, height: 40 }), _jsxs("div", { className: cls.wordInfo, children: [_jsx("span", { className: cls.hebrew, children: hebrew.withAnnouncement }), _jsx("span", { children: russian })] })] }));
};
