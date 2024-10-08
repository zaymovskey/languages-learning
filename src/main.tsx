import App from '@/app/App';
import { StoreProvider } from '@/app/providers/StoreProvider/ui/StoreProvider.tsx';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>
);
