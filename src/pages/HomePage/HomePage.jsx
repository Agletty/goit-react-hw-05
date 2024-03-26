import { useEffect, useState } from "react";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import MovieList from "../../components/MovieList/MovieList";
import { getTrendingMovies } from "../../servises/api";
import { Loader } from "../../components/Loader/Loader";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
        Notify.info(`${error.code}`);
        setIsLoading(false);
      }
    };

    if (movies.length === 0 && isLoading) {
      fetchMovies();
    }
  }, [movies, isLoading]);

  return (
    <>
      <PageTitle text={"Trending Movies"} />
      {isLoading ? <Loader /> : <MovieList movies={movies} />}
    </>
  );
}
