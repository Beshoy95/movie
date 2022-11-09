import { BASE_URL ,API_KEY } from './../../utils/requests';
import axios from 'axios';

const getSelectedMovies = async (id) => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

const getSearchMovies = async (searchTerm) => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page-1`
  );

  return response.data;
};

const moviesService = { getSelectedMovies ,getSearchMovies};

export default moviesService;
