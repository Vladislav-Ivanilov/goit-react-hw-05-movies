import { getDetails } from 'services/moviesAPI';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Back, Container } from './MovieDetails.styled.jsx';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getDetails(movieId).then(res => setMovieDetails(res.data));
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }
  const backLink = location.state?.from ?? '/';

  return (
    <>
      <Container>
        <Back to={backLink}> ← Go back</Back>
        <MovieCard movie={movieDetails} />
      </Container>
      <Container>
        <Back to={'cast'} state={{ from: backLink }}>
          Cast
        </Back>
        <Back to={'reviews'} state={{ from: backLink }}>
          Reviews
        </Back>
      </Container>
      <Outlet />
    </>
  );
};

export default MovieDetails;
