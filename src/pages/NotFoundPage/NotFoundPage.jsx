import { Link } from "react-router-dom";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export default function NotFoundPage() {
  Notify.info("Sorry, page not found :(");
  return (
    <p>
      Sorry, page not found : <Link to="/">Please go to main page</Link>
    </p>
  );
}
