import { Link } from "react-router-dom";

import { useGetRandomMovieQuery } from "../../app/api/apiSlice";

export const MovieBanner = () => {
  const { data } = useGetRandomMovieQuery();

  const score = data?.vote_average
    ? parseFloat(data?.vote_average).toFixed(1)
    : 0;
  return (
    <section className="flex flex-col p-[1vw]">
      <figure className="relative p-[1px] w-[1800px] h-[500px]">
        {/* capa oscura */}
        <div className="absolute flex flex-col justify-end inset-0 text-[#f8f8f8] bg-gradient-to-t from-black via-black/20 to-transparent z-10 p-[4em]">
          <h1 className="text-5xl font-bold hover:underline">
            <Link to={`movie/${data?.id}`}>{data?.title}</Link>
          </h1>
          <p className="text-xl text-gray-600">
            ({data?.release_date.split("-")[0]})
          </p>
          <div className="absolute top-[4em] right-[4em] text-[#f8f8f8] font-bold">
            <p className="text-4xl">⭐ {score}</p>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden w-full h-full transition-all duration-500">
          {/* imagen */}
          <div className="relative flex justify-center items-center mt-[20em] w-[1800px] h-[500px] shadow-2xl">
            <div className="absolute flex flex-col items-center justify-center w-full overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
                alt="About me"
              />
            </div>

            {/* capa oscura */}
          </div>
        </div>
      </figure>
    </section>
  );
};
