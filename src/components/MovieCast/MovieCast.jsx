import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Loader } from "../Loader/Loader";
import { getMovieCredits } from "../../servises/api";

export default function CastPage() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const result = await getMovieCredits(movieId);
        setCast(result);
      } catch (error) {
        Notify.info(`${error.code}`);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {!cast && <Loader />}

      {cast?.length === 0 && <p>We do not have any casters info</p>}

      {cast?.length > 0 && (
        <ul>
          {cast.map((item) => {
            return (
              <li key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt=""
                />
                <p>{item.name}</p>
                <p>
                  <b>Character:</b> {item.character}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
