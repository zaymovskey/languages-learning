import { jsx as _jsx } from "react/jsx-runtime";
import { createReduxStore } from '../config/store';
import { Provider } from 'react-redux';
export const StoreProvider = (props) => {
    const { children } = props;
    const store = createReduxStore();
    return _jsx(Provider, { store: store, children: children });
};
