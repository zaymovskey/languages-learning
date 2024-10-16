import { rootReducer } from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';
export function createReduxStore() {
    return configureStore({
        reducer: rootReducer,
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    });
}
export const store = createReduxStore();
