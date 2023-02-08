import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getByName } from 'services/moviesAPI';
import { MoviesList } from 'components/MovieList/MovieList';
import { SearchBox } from 'components/SearchBox/SearchBox';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }

    getByName(query).then(res => setMovies(res.data.results));
  }, [query, searchParams]);

  const handleChange = element => setQuery(element.target.value);

  const handleSubmit = element => {
    element.preventDefault();

    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <>
      <SearchBox onSubmit={handleSubmit} onChange={handleChange} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
