import AuthRoutes from '@/app/auth/routes';
import PostRoutes from '@/app/post/routes';

const App = () => {};

export const Router = [
  {
    path: '/app',
    element: <AuthRoutes />,
    children: [
      { path: '/users', element: <AuthRoutes /> },
      { path: '/posts', element: <PostRoutes /> },
    ],
  },
];
