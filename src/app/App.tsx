import AppRouter from './providers/AppRouter/ui/AppRouter.tsx';
import './styles/index.scss';
import {
  useAppDispatch,
  useAppSelector,
} from '@/app/providers/StoreProvider/lib/hooks.ts';
import { globalActions, removeLastSegment } from '@/shared/lib';
import { GameHeader, Header } from '@/widgets';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(globalActions.setUrl(removeLastSegment(location.pathname)));
  }, [dispatch, location]);

  const headerType = useAppSelector((state) => state.global.headerType);

  return (
    <>
      {headerType === 'default' && <Header />}
      {headerType === 'gameHeader' && <GameHeader />}

      <main className="content-page">
        <AppRouter />
      </main>
    </>
  );
}

export default App;
