import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2YzMzU0OWYzYjc3MDE2MDcxYzYwYTlmM2IyNWU4NiIsInN1YiI6IjY1ZmMxMmRmNjA2MjBhMDE3YzI3MTUxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bpsk2SRHCKtimBFb0iVHaVxrP_IpAcKrpk3AiH6f_Uo",
  },
  params: {
    language: "en-US",
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/all/day`, options);
  return response.data.results;
};

export const getSearchMovies = async (searchQuery) => {
  const response = await axios.get(
    `/search/movie?query=${searchQuery}`,
    options
  );
  return response.data.results;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(`/movie/${id}`, options);
  return response.data;
};

export const getMovieCredits = async (id) => {
  const response = await axios.get(`/movie/${id}/credits`, options);
  return response.data.cast;
};

export const getMovieReviews = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews`, options);
  return response.data.results;
};
