import { useLocation } from 'react-router-dom';
import {
  MoviesBlock,
  MovieItem,
  MovieImg,
  Link,
  Name,
} from './MovieList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    movies && (
      <MoviesBlock>
        {movies.map(({ id, title, original_name, poster_path }) => (
          <MovieItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <MovieImg
                src={
                  poster_path
                    ? imageBaseUrl + poster_path
                    : 'https://svgsilh.com/svg_v2/1363011.svg'
                }
                alt="Foto"
              />
              <Name>{title ?? original_name}</Name>
            </Link>
          </MovieItem>
        ))}
      </MoviesBlock>
    )
  );
};
