// import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieDetails from "../app/pages/MovieDetails/MovieDetails";
import Home from "../app/pages/Home";
import { MainLayout } from "../components/shared/layout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<div>page no found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
