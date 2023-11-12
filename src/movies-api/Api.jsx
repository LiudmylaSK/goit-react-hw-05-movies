import axios from "axios";

const API_KEY = '9e79bf179828bbd88a056650275888ae';

const BASE_URL = 'https://api.themoviedb.org/3';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
    query: '',
  },
});

const fetchTrendingMovies = async () => {
  const response = await axiosInstance.get(`trending/movie/day`);
  return response.data.results;
};

const fetchMovieDetails = async movieId => {
  const response = await axiosInstance.get(`/movie/${movieId}`);
  return response.data;
};

const fetchSearch = async movieName => {
  const response = await axiosInstance.get(`/search/movie?query=${movieName}`);
  return response.data.results;
};

const fetchMovieCast = async movieId => {
  const response = await axiosInstance.get(`movie/${movieId}/credits`);
  return response.data.cast;
};

const fetchMovieReviews = async movieId => {
  const response = await axiosInstance.get(`movie/${movieId}/reviews`);
  return response.data.results;
};

export {
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchSearch,
  fetchMovieCast,
  fetchMovieReviews,
};
    
    
// import axios from "axios";

// const API_KEY = '9e79bf179828bbd88a056650275888ae';

// const BASE_URL = 'https://api.themoviedb.org/3';

// const params = {
//     params: {
//         api_key: API_KEY,
//         language: 'en-US',
//         // include_adult: false,
//         // query: '',
//     }
// };

// // Get the trending movies
// export const fetchTrendingMovies = async () => {
//     const response = await axios.get(`trending/movie/day?`, params);
//     return response.data.results;
// };

// // Get full movie information
// export const fetchMovieDetails = async movieId => {
//     const response = await axios.get(`/movie/${movieId}?`, params);
//     return response.data;
// };

// // Search for movies by their original, translated and alternative titles
// export const fetchSearch = async movieName => {
//     const response = await axios.get(`/search/movie?query=${movieName}`, params);
//     return response.data.results;
// };


// // Get the cast information
// export const fetchMovieCast = async movieId => {
//     const response = await axios.get(`movie/${movieId}/credits?`, params);
//     return response.data.cast;
// };

// // Get the user reviews for a movie
// export const fetchMovieReviews = async movieId => {
//     const response = await axios.get(`movie/${movieId}/reviews?`, params);
//     return response.data.results;
// };





