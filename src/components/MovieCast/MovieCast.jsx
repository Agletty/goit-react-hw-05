import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Loader } from "../Loader/Loader";
import { getMovieCredits } from "../../servises/api";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

export default function CastPage() {
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const result = await getMovieCredits(movieId);
        setCast(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        Notify.info(`${error.code}`);
      }
    };
    fetchCast();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  if (!cast || cast.length === 0) {
    return <p>We do not have any casters info</p>;
  }

  return (
    <ul>
      {cast.map((item) => {
        return (
          <li key={item.id}>
            <img
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                  : defaultImg
              }
              alt={"poster"}
              width={300}
              height={450}
            />

            <p>{item.name}</p>
            <p>
              <b>Character:</b> {item.character}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
