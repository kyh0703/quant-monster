import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthRoutes } from '@/app/auth/routes';
import PostRoutes from '@/app/posts/routes';
import Header from '@/app/ui/header/header.component';

export const Router = [
  {
    path: '/',
    element: <Header />,
    children: [
      { path: '/auth/*', element: <AuthRoutes /> },
      { path: '/posts/*', element: <PostRoutes /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
