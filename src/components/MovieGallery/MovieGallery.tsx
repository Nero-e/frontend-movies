import { useEffect, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";

import {
  useGetMoviesListQuery,
  useGetSearchQuery,
} from "../../app/api/apiSlice";
import { MovieBox } from "./MovieBox/MovieBox";
import { SearchBar } from "../Search/SearchBar";
import { setSearchQuery } from "../../app/redux/searchSlice";
import { addMovies, nextPage } from "../../app/redux/moviesSlice";

export const MovieGallery = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.search.query);

  const { page, movies } = useAppSelector((state) => state.movies);
  console.log("pagina " + page);

  const { data: moviesData, isError: isMovieError } =
    useGetMoviesListQuery(page);
  const { data: searchData, isError: isSearchError } = useGetSearchQuery(
    searchQuery,
    {
      skip: !searchQuery,
    }
  );

  useEffect(() => {
    if (moviesData?.results) {
      dispatch(addMovies(moviesData.results));
    }
  }, [moviesData, dispatch]);

  const handleSearch = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  const loadMoreMovies = () => {
    if (!searchQuery) {
      dispatch(nextPage());
    }
  };

  const moviesList = useMemo(
    () => (searchQuery ? (searchData?.results ?? []) : movies),
    [searchQuery, searchData, movies]
  );

  return (
    <section className="flex flex-col overflow-hidden w-full h-full min-h-screen py-48 px-[10vw] z-10">
      {!isMovieError || !isSearchError ? (
        <div className="w-full h-full max-w-[1600px] mx-auto space-y-6">
          {/* Componente de barra de búsqueda */}
          <SearchBar onSearch={handleSearch} />

          {/* Si no hay resultados en la búsqueda */}
          {searchQuery.length > 0 && searchData?.results?.length === 0 && (
            <p className="text-white text-center text-xl">
              😢 No se encontraron resultados para "{searchQuery}".
            </p>
          )}

          {/* scroll */}
          <InfiniteScroll
            dataLength={moviesList.length}
            next={loadMoreMovies}
            hasMore={moviesList.length > 0 && !searchQuery}
            loader={
              <div className="text-[#f1f0f1] text-center text-2xl">
                Cargando...
              </div>
            }
          >
            {/* Lista de películas */}
            <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:grid-rows-4 xl:grid-cols-3 xl:grid-rows-3 gap-6">
              {moviesList
                ?.filter((movie) => movie.poster_path)
                .map((movie) => <MovieBox key={movie.id} {...movie} />)}
            </div>
          </InfiniteScroll>
        </div>
      ) : (
        <div>
          {/* Errores */}
          {isMovieError && (
            <p className="text-red-500">
              ⚠️ Error al cargar la lista de películas.
            </p>
          )}
          {isSearchError && (
            <p className="text-red-500">⚠️ Error al buscar películas.</p>
          )}
        </div>
      )}
    </section>
  );
};
