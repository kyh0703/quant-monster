import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthRoutes } from '@/app/auth/routes';
import PostRoutes from '@/app/posts/routes';

export const Router = [
  { path: '/', element: <div>Test</div> },
  { path: '/auth/*', element: <AuthRoutes /> },
  { path: '/posts/*', element: <PostRoutes /> },
  { path: '*', element: <Navigate to="." /> },
];
