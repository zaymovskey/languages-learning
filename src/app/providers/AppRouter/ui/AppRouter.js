import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RouteConfig, RoutePath } from '../lib/routeConfig';
import { PageLoader } from '@/shared/ui';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
const AppRouter = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Navigate, { to: `${RoutePath.topics_list}`, replace: true }) }), Object.values(RouteConfig).map(({ path, element }) => (_jsx(Route, { path: path, element: _jsx(Suspense, { fallback: _jsx(PageLoader, {}), children: element }) }, path)))] }));
};
export default AppRouter;
