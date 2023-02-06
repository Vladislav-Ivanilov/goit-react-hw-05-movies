import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { NotFoundPage } from '../Error/NotFoundPage';
import { Home } from '../Page/Home/Home';
import { Movies } from '../Page/Movies/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<NotFoundPage />} path="*" />
        </Route>
        <Route index element={<Home />} />
        <Route errorElement={<Movies />} path="movies"></Route>
      </Routes>
    </>
  );
};
