import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '../../lib/utils/classNames/classNames.ts';
import cls from './Button.module.scss';
export var EnumButtonTheme;
(function (EnumButtonTheme) {
    EnumButtonTheme["PRIMARY"] = "primary";
    EnumButtonTheme["WRONG"] = "wrong";
    EnumButtonTheme["RIGHT"] = "right";
})(EnumButtonTheme || (EnumButtonTheme = {}));
export var EnumButtonSize;
(function (EnumButtonSize) {
    EnumButtonSize["M"] = "size-m";
})(EnumButtonSize || (EnumButtonSize = {}));
export const Button = ({ className, children, theme = EnumButtonTheme.PRIMARY, size = EnumButtonSize.M, loading = false, ...defaultButtonProps }) => {
    const mods = {
        [cls.loading]: loading,
    };
    const additional = [cls[theme], cls[size]];
    return (_jsx("button", { className: classNames(cls.Button, mods, [className, ...additional]), ...defaultButtonProps, children: _jsx("div", { className: cls.children, children: children }) }));
};
