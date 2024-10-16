import { jsx as _jsx } from "react/jsx-runtime";
import cls from './Header.module.scss';
import { classNames } from '@/shared/lib';
import { ArrowRight02Icon } from 'hugeicons-react';
import { Link, useLocation } from 'react-router-dom';
export const Header = ({ className }) => {
    const location = useLocation();
    const prevUrl = location.state?.prevUrl || '/';
    return (_jsx("div", { className: classNames(cls.header, {}, [className]), children: _jsx(Link, { to: prevUrl, className: cls.backButton, children: _jsx(ArrowRight02Icon, { className: cls.backArrow }) }) }));
};
