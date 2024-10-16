import { RouteConfig } from '../lib/routeConfig';
import { PageLoader } from '@/shared/ui';
import { type FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRouter: FC = () => {
  return (
    <Routes>
      {Object.values(RouteConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<Suspense fallback={<PageLoader />}>{element}</Suspense>}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
