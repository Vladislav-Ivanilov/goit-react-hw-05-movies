import { getReviews } from 'services/moviesAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NoReviews from 'Error/NoReviews';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(res => setReviews(res.data.results));
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <ul>
      {reviews.length === 0 && <NoReviews />}
      {reviews.map(({ id, content, author }) => (
        <li key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
