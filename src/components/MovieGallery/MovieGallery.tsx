import { useEffect, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";

import { useGetMoviesListQuery, useGetSearchQuery } from "../../api/apiSlice";
import { MovieBox } from "./MovieBox/MovieBox";
import { SearchBar } from "../Search/SearchBar";
import { setSearchQuery } from "../../features/searchSlice";
import { addMovies, nextPage } from "../../features/moviesSlice";
import { FilterBox } from "../FiltersBox";

export const MovieGallery = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.search.query);
  const { page, movies, genre, year, rating } = useAppSelector(
    (state) => state.movies
  );
  // hock lista de peliculas
  const { data: moviesData, isError: isMovieError } = useGetMoviesListQuery({
    page,
    genre,
    year,
    rating,
  });
  // hook buscador de peliculas
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
          <div className="pb-10 space-y-5">
            <SearchBar onSearch={handleSearch} />
            <FilterBox />
          </div>

          {/* Si no hay resultados en la búsqueda */}
          {searchQuery.length > 0 && searchData?.results?.length === 0 && (
            <p className="text-center text-xl">
              😢 No se encontraron resultados para "{searchQuery}".
            </p>
          )}

          {/* scroll */}
          <InfiniteScroll
            dataLength={moviesList.length}
            next={loadMoreMovies}
            hasMore={moviesList.length > 0 && !searchQuery}
            loader={<div className="text-center text-2xl">Cargando...</div>}
          >
            {/* Lista de películas */}
            <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 md:grid-rows-2 lg:grid-cols-2 2xl:grid-cols-3 xl:grid-rows-3 gap-6">
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
