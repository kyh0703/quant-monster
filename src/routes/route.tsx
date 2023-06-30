import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthRoutes } from '@/app/auth/routes';
import PostRoutes from '@/app/posts/routes';
import Header from '@/app/ui/layout/header/header.component';
import MainLayout from '@/app/ui/layout/main-layout/main-layout.component';

const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const Router = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/auth/*', element: <AuthRoutes /> },
      { path: '/posts/*', element: <PostRoutes /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
