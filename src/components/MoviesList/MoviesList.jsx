import { Link, useLocation } from "react-router-dom";
import css from "./MoviesList.module.css";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={css.moviesList}>
      {movies.map((movie, index) => {
        return (
          <li className={css.movieItem} key={`${movie.id}_${index}`}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : defaultImg
                }
                alt={movie.original_title || "No Poster Available"}
                width={300}
                height={450}
              />
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default MoviesList;
