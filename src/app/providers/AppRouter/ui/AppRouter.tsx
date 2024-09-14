import { RouteConfig } from '../lib/routeConfig';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { type FC, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/topic" replace />} />
      {Object.values(RouteConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>{<PageLoader />}</Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
