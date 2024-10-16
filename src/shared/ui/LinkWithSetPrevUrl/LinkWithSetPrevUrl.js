import { jsx as _jsx } from "react/jsx-runtime";
import { Link, useLocation } from 'react-router-dom';
export const LinkWithSetPrevUrl = (props) => {
    const location = useLocation();
    return _jsx(Link, { ...props, state: { prevUrl: location.pathname } });
};
