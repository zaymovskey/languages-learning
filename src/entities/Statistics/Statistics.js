import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cls from './Statistics.module.scss';
import { useAppSelector } from '@/app';
import { classNames } from '@/shared/lib';
export const Statistics = ({ className }) => {
    const statistics = useAppSelector((state) => state.currentTopic.answers);
    return (_jsxs("div", { className: classNames(cls.statistics, {}, [className]), children: [_jsxs("div", { className: classNames(cls.statisticsItem, {}, []), children: [_jsx("div", { className: classNames(cls.circle, {}, [cls.right]) }), statistics.right] }), _jsxs("div", { className: classNames(cls.statisticsItem, {}, []), children: [_jsx("div", { className: classNames(cls.circle, {}, [cls.wrong]) }), statistics.wrong] })] }));
};
