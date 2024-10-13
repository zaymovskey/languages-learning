import AppRouter from './providers/AppRouter/ui/AppRouter.tsx';
import './styles/index.scss';
import { Header } from '@/widgets';

function App() {
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
