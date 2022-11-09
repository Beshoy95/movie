/* eslint-disable import/no-anonymous-default-export */
//const API_KEY = process.env.API_KEY;
export const API_KEY = '13261900e23432183fa92f71503de473'
export const BASE_URL = 'https://api.themoviedb.org/3/';
export const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/original';

export default {
  fetchTopRated: {
    title: 'TopRated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: 'Action',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: 'Comedy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: 'Horror',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: 'Romance',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: 'Mystery',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchWestern: {
    title: 'Western',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchTv: {
    title: 'Tv Movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};
