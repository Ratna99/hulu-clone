const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery  Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchThriller: {
    title: "Thriller  Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  },
  fetchWar: {
    title: "War  Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  },
  fetchHistory: {
    title: "History  Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  },
};
