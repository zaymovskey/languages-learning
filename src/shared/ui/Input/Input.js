import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '../../lib/utils/classNames/classNames.ts';
import cls from './Input.module.scss';
export var EnumInputTheme;
(function (EnumInputTheme) {
    EnumInputTheme["PRIMARY"] = "primary";
    EnumInputTheme["WRONG"] = "wrong";
    EnumInputTheme["RIGHT"] = "right";
})(EnumInputTheme || (EnumInputTheme = {}));
export const Input = ({ className, value, theme = EnumInputTheme.PRIMARY, onChange, ...defaultInputProps }) => {
    return (_jsx("input", { type: "text", value: value, onChange: onChange, className: classNames(cls.input, {}, [className, cls[theme]]), ...defaultInputProps }));
};
