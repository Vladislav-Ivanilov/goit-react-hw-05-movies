import NoCast from 'Error/NoCast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/moviesAPI';

import { List, ListItem, Img } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    getCast(movieId).then(data => setCast(data.data.cast));
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <List>
      {cast.length === 0 && <NoCast />}

      {cast.map(({ id, profile_path, name, original_name, character }) => (
        <ListItem key={id}>
          <Img
            width="200"
            src={
              profile_path
                ? imgBaseUrl + profile_path
                : 'https://svgsilh.com/svg_v2/1363011.svg'
            }
            alt="Foto"
          />
          <div>
            <h2>{name && original_name}</h2>
            <p>{character}</p>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default Cast;
