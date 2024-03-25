import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { getSearchMovies } from "../../servises/api";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import MoviesList from "../../components/MoviesList/MoviesList";

export default function MoviesPage() {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    if (!query.get("query")) {
      setMovies(null);
      return;
    }
    const getData = async () => {
      try {
        const results = await getSearchMovies(query.get("query"));
        setMovies(results);
        if (results.length === 0) {
          Notify.info("Movies is not found");
        }
      } catch (error) {
        Notify.info(`${error.code}`);
      }
    };
    getData();
  }, [query]);

  const handleSearchChange = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      Notify.info("Please enter film name");
    }
    setQuery({ query: inputValue });
    setInputValue("");
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleSearchChange} />
        <button type="submit">Search</button>
      </form>
      {!movies && query.get("query") && <Loader />}
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
