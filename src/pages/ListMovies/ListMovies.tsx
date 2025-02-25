// import { useEffect } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";

// import { useAppDispatch } from "../../../hooks/useAppDispatch";
// import { useAppSelector } from "../../../hooks/useAppSelector";
import { useGetMoviesListQuery } from "../../api/apiSlice";
// import {
//   addMovies,
//   nextPage,
//   resetMovies,
// } from "../../redux/features/moviesSlice";

function ListMovies() {
  //   const dispatch = useAppDispatch();
  //   const {  movies } = useAppSelector((state) => state.movies);
  const { data: moviesData, isError: isMovieError } = useGetMoviesListQuery({
    page: 1,
  });

  const movies = moviesData?.results;
  return (
    <>
      <section className="flex flex-col overflow-hidden w-full h-full min-h-screen py-48 px-[10vw] z-10">
        {!isMovieError ? (
          <div className="w-full h-full max-w-[1600px] mx-auto space-y-6">
            {/* Lista de películas */}
            <div className="gap-5">
              {movies
                ?.filter((movie) => movie.poster_path)
                .map((movie) => (
                  <div key={movie.id} className="flex flex-row">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="w-[200px]"
                    />
                    <h3 className="w-full">{movie.title}</h3>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div>
            {/* Errores */}
            {isMovieError && (
              <p className="text-red-500">
                ⚠️ Error al cargar la lista de películas.
              </p>
            )}
          </div>
        )}
      </section>
    </>
  );
}

export default ListMovies;
