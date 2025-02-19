import { useGetMoviesListQuery} from "../../app/api/apiSlice";
import { MovieBox } from "./MovieBox/MovieBox";
import type { Movie } from "../../../types/movie";

export const MovieGallery = () => {
  
    const { data } = useGetMoviesListQuery();
    const movies = data?.results;

  return (
    <section className="flex flex-col overflow-hidden w-full h-full min-h-screen py-48 px-[10vw] z-10">
      <div className="w-full h-full max-w-[1600px] mx-auto">
        <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:grid-rows-4 xl:grid-cols-3 xl:grid-rows-3 gap-6">
            {movies?.map((movie: Movie) => {
                return <MovieBox key={movie.id} {...movie} />;
            })}
        </div>
      </div>
    </section>
  );
};
