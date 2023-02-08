import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AppBar } from './AppBar/AppBar';

const Home = lazy(() => import('../Page/Home/Home'));
const Movies = lazy(() => import('../Page/Movies/Movies'));
const MovieDetails = lazy(() => import('../Page/MovieDetails/MovieDetails'));
const NotFoundPage = lazy(() => import('../Error/NotFoundPage'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h3>Loading....</h3>}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Movies />} path="movies" />
          <Route element={<MovieDetails />} path="movies/:movieId">
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route element={<NotFoundPage />} path="*" />
        </Routes>
      </Suspense>
    </>
  );
};
