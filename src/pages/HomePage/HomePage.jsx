import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import MoviesList from "../../components/MoviesList/MoviesList";
import { getTrendingMovies } from "../../servises/api";

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  // const location = useLocation();
  // console.log(location);

  useEffect(() => {
    if (!movies) {
      const getMovies = async () => {
        const fetchMovies = await getTrendingMovies();
        setMovies(fetchMovies);
      };
      getMovies();
    }
  }, [movies]);

  return (
    <>
      <PageTitle text={"Trending Movies"} />
      {movies && <MoviesList movies={movies} />}
      <Outlet />
    </>
  );
}
