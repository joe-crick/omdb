import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import { getMovies } from "./api/api";

function App() {
  const [movies, setMovies] = useState([]);

  async function runSearch(searchQuery) {
    const movies = await getMovies(searchQuery);
    setMovies(movies);
  }

  return (
    <div>
      <Header />
      <Search runSearch={runSearch} />
      {movies.map((movie) => (
        <div>{movie.Title}</div>
      ))}
    </div>
  );
}

export default App;
