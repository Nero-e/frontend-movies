import { useSelector, useDispatch } from "react-redux";

import {
  useGetMoviesListQuery,
  useGetSearchQuery,
} from "../../app/api/apiSlice";
import { MovieBox } from "./MovieBox/MovieBox";
import { SearchBar } from "../Search/SearchBar";
import type { Movie } from "../../../types/movie";
import { setSearchQuery } from "../../app/redux/searchSlice";

export const MovieGallery = () => {
  // const [name, setName] = useState<string>("");
  const dispatch = useDispatch();
  const name = useSelector((state) => state.search.query);

  const { data: moviesData, isError: isMovieError } = useGetMoviesListQuery();
  const { data: searchData, isError: isSearchError } = useGetSearchQuery(name, {
    skip: name.length === 0,
  });

  const handleSearch = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  const movies = name.length > 0 ? searchData?.results : moviesData?.results;

  return (
    <section className="flex flex-col overflow-hidden w-full h-full min-h-screen py-48 px-[10vw] z-10">
      {!isMovieError || !isSearchError ? (
        <div className="w-full h-full max-w-[1600px] mx-auto space-y-6">
          {/* Componente de barra de búsqueda */}
          <SearchBar onSearch={handleSearch} />

          {/* Si no hay resultados en la búsqueda */}
          {name.length > 0 && searchData?.results?.length === 0 && (
            <p className="text-white text-center text-xl">
              😢 No se encontraron resultados para "{name}".
            </p>
          )}

          {/* Lista de películas */}
          <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:grid-rows-4 xl:grid-cols-3 xl:grid-rows-3 gap-6">
            {movies
              ?.filter((movie: Movie) => movie.poster_path)
              .map((movie: Movie) => <MovieBox key={movie.id} {...movie} />)}
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
          {isSearchError && (
            <p className="text-red-500">⚠️ Error al buscar películas.</p>
          )}
        </div>
      )}
    </section>
  );
};
