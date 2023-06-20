import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthRoutes } from '@/app/auth/routes';
import PostRoutes from '@/app/posts/routes';

const App = () => {
  return (
    <>
      <Suspense>
        <div>app</div>
        <Outlet />
      </Suspense>
    </>
  );
};

export const Router = [
  {
    path: '/app',
    element: <App />,
    children: [
      // { path: '/auth/*', element: <AuthRoutes /> },
      // { path: '/posts/*', element: <PostRoutes /> },
      // { path: '/', element: <div>Test</div> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
