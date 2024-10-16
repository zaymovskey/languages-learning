import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { WordListItem } from '../WordListItem/WordListItem.tsx';
import cls from './WordList.module.scss';
import { classNames } from '@/shared/lib';
export const WordList = ({ words, className }) => {
    return (_jsx("div", { className: classNames(cls.wordList, {}, [className]), children: words.map((word, index) => (_createElement(WordListItem, { ...word, key: index }))) }));
};
