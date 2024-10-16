import { jsx as _jsx } from "react/jsx-runtime";
import App from '@/app/App';
import { StoreProvider } from '@/app/providers/StoreProvider/ui/StoreProvider.tsx';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(_jsx(StoreProvider, { children: _jsx(BrowserRouter, { children: _jsx(App, {}) }) }));
