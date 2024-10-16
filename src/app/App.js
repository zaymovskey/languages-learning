import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import AppRouter from './providers/AppRouter/ui/AppRouter.tsx';
import './styles/index.scss';
import { Header } from '@/widgets';
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx("main", { className: "content-page", children: _jsx(AppRouter, {}) })] }));
}
export default App;
