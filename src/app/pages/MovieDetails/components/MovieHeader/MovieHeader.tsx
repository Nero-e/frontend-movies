type MovieHeaderProps = {
  title: string;
  backdrop: string;
  releaseDate: string;
  score: string;
};

export const MovieHeader = ({
  title,
  backdrop,
  releaseDate,
  score,
}: MovieHeaderProps) => {
  return (
    <figure className="relative w-full h-full aspect-video">
      <img
        src={`https://image.tmdb.org/t/p/original${backdrop}`}
        alt={title}
        className="rounded-t-[.8rem] w-full h-full"
      />
      {/* Capa oscura, titulo y puntuación */}
      <div className="absolute flex flex-col justify-end inset-0 text-[#f8f8f8] bg-gradient-to-t from-black via-black/20 to-transparent z-10 p-[5em]">
        <h1 className="text-5xl font-bold">{title}</h1>
        <span className="text-xl pt-[.2em] text-slate-400 ">
          {releaseDate ? releaseDate.split("-")[0] : null}
        </span>
        <div className="absolute top-[5em] right-[5em] text-[#f8f8f8] font-bold">
          <p className="text-6xl">⭐ {score}</p>
        </div>
      </div>
    </figure>
  );
};
