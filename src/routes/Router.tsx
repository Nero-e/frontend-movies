import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainLayout } from "../components/shared/layout";


const Home = lazy(() => import("../pages/Home"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const ListMovies = lazy(() => import("../pages/ListMovies/ListMovies"));


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/list-movies" element={<ListMovies />}/>
          <Route path="*" element={<div>page no found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
