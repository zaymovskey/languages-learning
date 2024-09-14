import './styles/index.scss';
import AppRouter from '@/app/providers/AppRouter/ui/AppRouter.tsx';
import { Header } from '@/widgets/Header/ui/Header.tsx';

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
