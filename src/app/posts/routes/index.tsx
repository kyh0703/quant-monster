import { Routes, Route } from 'react-router-dom';
import PostListPage from './post-list';
import PostWritePage from './post-write';

const PostRoutes = () => {
  return (
    <Routes>
      <Route index element={<PostListPage />} />
      <Route path="write" element={<PostWritePage />} />
    </Routes>
  );
};

export default PostRoutes;