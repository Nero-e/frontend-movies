import { useParams } from "react-router-dom";
import { useGetMovieByIdQuery } from "../../api/apiSlice";
import { Suspense } from "react";

import { MovieHeader } from "./components/MovieHeader";
import { MovieArticle } from "./components/MovieArticle";

import MovieDetailsSkeleton from "./components/Skeleton/MovieDetailsSkeleton";

function MovieDetails() {
  const { id } = useParams();
  const movieId = id && !isNaN(Number(id)) ? parseInt(id, 10) : null;
  const {
    data: movie,
    isLoading,
    isError,
  } = useGetMovieByIdQuery(movieId!, {
    skip: !movieId,
  });

  if (isLoading) return <p className="text-center">Cargando...</p>;
  if (!movieId)
    return <p className="p-60 text-center">ID de película inválido.</p>;
  if (isError || !movie)
    return <p className="p-60 text-center">Película no encontrada. </p>;

  const { vote_average: voteAverage } = movie;

  const score = voteAverage ? parseFloat(voteAverage).toFixed(1) : "0";

  return (
    <Suspense fallback={<MovieDetailsSkeleton />}>
      {movie && (
        <section className="flex w-full h-full p-5 justify-center pt-[5em]">
          <div className="flex flex-col w-[1400px] min-w-[400px] h-full py-16">
            <div className="bg-[#f8f8f8] rounded-[.8rem]">
              {/* Imagen Principal */}
              <MovieHeader
                title={movie.title}
                backdrop={movie.backdrop_path}
                releaseDate={movie.release_date}
                score={score}
              />
              {/* informacion de la peli */}
              <MovieArticle
                title={movie.title}
                poster={movie.poster_path}
                overview={movie.overview}
                runtime={movie.runtime}
                originalTitle={movie.original_title}
                originalLanguage={movie.original_language}
                genres={movie.genres}
              />
            </div>
          </div>
        </section>
      )}
    </Suspense>
  );
}

export default MovieDetails;
