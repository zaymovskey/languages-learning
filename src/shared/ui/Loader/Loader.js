import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../lib/utils/classNames/classNames.ts';
import cls from './Loader.module.scss';
export const Loader = ({ className }) => {
    return (_jsxs("div", { className: classNames(cls.Loader, {}, [className]), children: [_jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {})] }));
};
