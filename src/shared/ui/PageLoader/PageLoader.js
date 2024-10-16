import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '../..//lib/utils/classNames/classNames.ts';
import { Loader } from '../Loader/Loader.tsx';
import cls from './PageLoader.module.scss';
export const PageLoader = ({ className }) => {
    return (_jsx("div", { className: classNames(cls.PageLoader, {}, [className]), children: _jsx(Loader, {}) }));
};
