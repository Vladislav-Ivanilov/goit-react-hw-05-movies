import axios from 'axios';

const searchParams = new URLSearchParams({
  api_key: 'ffe5635381226a05cd5d4da4ec565c9d',
});

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrending = () => {
  return axios.get(`/trending/all/week?${searchParams}`);
};

export const getByName = name => {
  return axios.get(`/search/movie?${searchParams}&query=${name}`);
};

export const getDetails = id => {
  return axios.get(`/movie/${id}?${searchParams}`);
};

export const getCast = id => {
  return axios.get(`/movie/${id}/credits?${searchParams}`);
};

export const getReviews = id => {
  return axios.get(`/movie/${id}/reviews?${searchParams}`);
};
