import { useParams } from "react-router-dom";
import { useGetMovieByIdQuery } from "../../api/apiSlice";
import { useEffect, useState } from "react";

function MovieDetails() {
  const { id } = useParams();
  const movieId = id && !isNaN(Number(id)) ? parseInt(id, 10) : null;
  const { data, error, isLoading } = useGetMovieByIdQuery(movieId!, {
    skip: !movieId,
  });

  const score = data ? parseFloat(data.vote_average).toFixed(1) : 0;

  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (error) {
      setNotFound(true);
    }
  }, [error]);

  if (isLoading) return <p>Cargando...</p>;

  if (!movieId) return <p>ID de película inválido.</p>;

  if (notFound) return <p>Película no encontrada.</p>;

  return (
    <>
      <section className="flex w-full h-full p-5 justify-center pt-[5em]">
        <div className="flex flex-col w-[1400px] min-w-[400px] h-full py-16">
          <div className="bg-[#f8f8f8] rounded-[.8rem]">
            {/* imagen */}
            <figure className="relative w-full h-full aspect-video">
              <img
                src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
                alt="About me"
                className="rounded-t-[.8rem]"
              />
              {/* capa de color y contenido */}
              <div className="absolute flex flex-col justify-end inset-0 text-[#f8f8f8] bg-gradient-to-t from-black via-black/20 to-transparent z-10 p-[5em]">
                <h1 className="text-5xl font-bold">{data?.title}</h1>
                <p className="text-xl text-gray-600">
                  {data?.release_date.split("-")[0]}
                </p>
                <div className="absolute top-[5em] right-[5em] text-[#f8f8f8] font-bold">
                  <p className="text-6xl">⭐{score}</p>
                </div>
              </div>
            </figure>
            <article className="flex flex-col p-[5em] space-y-2.5">
              {/* <p className="text-gray-600">{data?.overview}</p> */}
              <img
                src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                alt={"Poster " + data?.title}
                className="w-[180px] h-full block object-cover rounded-[.8rem]"
              />
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default MovieDetails;
