import { useRoutes } from 'react-router-dom';

import { Router } from './route';

const AppRouter = () => {
  const commonRoutes = [{ path: '/', element: <div>되라</div> }];
  const element = useRoutes([...Router, ...commonRoutes]);

  return <>{element}</>;
};

export default AppRouter;
