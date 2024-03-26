import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Loader } from "../Loader/Loader";
import { getMovieReviews } from "../../servises/api";

export default function ReviewsPages() {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const result = await getMovieReviews(movieId);
        setReviews(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        Notify.info(`${error.code}`);
      }
    };
    fetchReviews();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  if (!reviews || reviews.length === 0) {
    return <p>We do not have any reviews info</p>;
  }

  return (
    <>
      {!loading && reviews && (
        <ul>
          {reviews.map((item) => (
            <li key={item.id}>
              <b>
                <b>Author: </b>
                {item.author}
              </b>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
