import { useState, useEffect } from "react";
import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { Notify } from "notiflix/build/notiflix-notify-aio";

import { getMovieDetails } from "../../servises/api";
import css from "./MovieDetailsPage.module.css";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const backLink = location.state?.from ?? "/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await getMovieDetails(movieId);
        setMovie(results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        Notify.info(`${error.code}`);
      }
    };

    fetchData();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  if (!movie || movie.length === 0) {
    return <NotFoundPage />;
  }

  const handleClickGoBack = () => {
    navigate(backLink);
  };

  return (
    <>
      {!loading ? (
        <>
          <button
            className={css.movieButton}
            type="button"
            onClick={() => handleClickGoBack()}
          >
            Go back
          </button>

          <div className={css.movieContainer}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : defaultImg
              }
              alt={"poster"}
              width={300}
              height={450}
            />
            <div className={css.movieInfo}>
              <h1>
                {movie.title}({movie?.release_date?.split("-")[0]})
              </h1>
              <p>User Score: {movie.vote_average * 10}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              <p>
                {movie.genres.map((genre) => (
                  <span key={genre.id}>{genre.name} </span>
                ))}
              </p>
            </div>
          </div>
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to="cast" state={location.state}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" state={location.state}>
                Reviews
              </NavLink>
            </li>
          </ul>
          <Outlet />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
