import { Link } from "react-router-dom";

import { useGetRandomMovieQuery } from "../../api/apiSlice";

export const MovieBanner = () => {
  const { data } = useGetRandomMovieQuery();

  const score = data?.vote_average
    ? parseFloat(data?.vote_average).toFixed(1)
    : 0;
  return (
    <section className="flex flex-col pt-[5em]">
      <figure className="hidden md:flex relative p-[1px] w-[1800px] h-[50vw] max-h-[500px]">
        {/* capa oscura */}
        <div className="absolute flex flex-col justify-end inset-0 text-[#f1f0f1] bg-gradient-to-t from-[#0c0c0d]/80 via-[#0c0c0d]/30 to-transparent z-10 p-[4em] rounded-[.5em]">
          <h1 className="text-5xl font-bold hover:underline">
            <Link to={`movie/${data?.id}`}>{data?.title}</Link>
          </h1>
          <span className="text-xl pt-[.2em] text-slate-400">
            {data?.release_date ? data?.release_date.split("-")[0] : null}
          </span>
          <div className="absolute top-[4em] right-[4em] text-[#f1f0f1] font-bold">
            <p className="text-4xl">⭐ {score}</p>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden w-full h-full transition-all duration-500 rounded-[.5em] object-center">
          {/* imagen */}
          <div className="relative flex justify-center items-center top-40 w-[1800px] h-[500px] shadow-2xl">
            <div className="absolute flex flex-col items-center justify-center w-full overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
                alt="backdrop"
                className=""
              />
            </div>
          </div>
        </div>
      </figure>
    </section>
  );
};
