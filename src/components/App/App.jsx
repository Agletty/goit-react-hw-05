import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { infoStyle } from "../../servises/userInform";
import { Loader } from "../Loader/Loader";

infoStyle();

const Layout = lazy(() => import("../Layout/Layout"));

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MoviesDetailsPage/MoviesDetailsPage")
);
const CastPage = lazy(() => import("../MovieCast/MovieCast"));
const ReviewsPages = lazy(() => import("../MovieReviews/MovieReviews"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

export const App = () => {
  return (
    <>
      <Suspense fallback={<>{<Loader />}</>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route
                path="cast"
                element={
                  <Suspense fallback={<>{<Loader />}</>}>
                    <CastPage />
                  </Suspense>
                }
              />
              <Route
                path="reviews"
                element={
                  <Suspense fallback={<>{<Loader />}</>}>
                    <ReviewsPages />
                  </Suspense>
                }
              />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
