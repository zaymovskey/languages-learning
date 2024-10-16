import AppRouter from './providers/AppRouter/ui/AppRouter.tsx';
import './styles/index.scss';
import { useAppDispatch } from '@/app/providers/StoreProvider/lib/hooks.ts';
import { globalActions, removeLastSegment } from '@/shared/lib';
import { Header } from '@/widgets';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(globalActions.setUrl(removeLastSegment(location.pathname)));
  }, [location]);

  return (
    <>
      <Header />
      <main className="content-page">
        <AppRouter />
      </main>
    </>
  );
}

export default App;
