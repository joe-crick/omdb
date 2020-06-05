import axios from "axios";

export async function getMovies(searchQuery) {
  const movies = await axios.get(
    `${process.env.REACT_APP_API_URL}/?s=${searchQuery}&apiKey=${process.env.REACT_APP_API_KEY}`
  );
  return movies.data.Search;
}
