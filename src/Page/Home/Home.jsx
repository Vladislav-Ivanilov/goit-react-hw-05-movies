import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MovieList/MovieList';
import { getTrending } from 'services/moviesAPI';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(res => setMovies(res.data.results));
  }, []);

  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
