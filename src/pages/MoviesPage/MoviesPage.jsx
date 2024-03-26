import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { getSearchMovies } from "../../servises/api";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const results = await getSearchMovies(query.get("query"));
        setMovies(results);
        if (results.length === 0) {
          Notify.info("Movies is not found");
        }
      } catch (error) {
        Notify.info(`${error.code}`);
      } finally {
        setLoading(false);
      }
    };

    if (query.get("query")) {
      fetchData();
    }
  }, [query]);

  const handleSearchChange = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      Notify.info("Please enter film name");
      return;
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
      {loading && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}
