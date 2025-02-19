import { useParams } from "react-router-dom";
import { useGetMovieByIdQuery } from "../../api/apiSlice";
import { Suspense, useEffect, useState } from "react";

import { MovieHeader } from "./components/MovieHeader";
import { MovieArticle } from "./components/MovieArticle";

import MovieDetailsSkeleton from "./components/Skeleton/MovieDetailsSkeleton";

function MovieDetails() {
  const { id } = useParams();
  const movieId = id && !isNaN(Number(id)) ? parseInt(id, 10) : null;
  const { data, error, isLoading } = useGetMovieByIdQuery(movieId!, {
    skip: !movieId,
  });

  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (error) {
      setNotFound(true);
    }
  }, [error]);

  if (isLoading) return <p className="text-center">Cargando...</p>;
  if (!movieId)
    return <p className="p-60 text-center">ID de película inválido.</p>;
  if (notFound || !data)
    return <p className="p-60 text-center">Película no encontrada.</p>;

  const { vote_average: voteAverage } = data;

  const score = voteAverage ? parseFloat(voteAverage).toFixed(1) : "0";

  return (
    <Suspense fallback={<MovieDetailsSkeleton />}>
      {data && (
        <section className="flex w-full h-full p-5 justify-center pt-[5em]">
          <div className="flex flex-col w-[1400px] min-w-[400px] h-full py-16">
            <div className="bg-[#f8f8f8] rounded-[.8rem]">
              {/* Imagen Principal */}
              <MovieHeader
                title={data.title}
                backdrop={data.backdrop_path}
                releaseDate={data.release_date}
                score={score}
              />
              {/* informacion de la peli */}
              <MovieArticle
                title={data.title}
                poster={data.poster_path}
                overview={data.overview}
                runtime={data.runtime}
                originalTitle={data.original_title}
                originalLanguage={data.original_language}
                genres={data.genres}
              />
            </div>
          </div>
        </section>
      )}
    </Suspense>
  );
}

export default MovieDetails;
