import { TagBox } from "../../../../../components/Tag/TagBox";

type MovieInfoProps = {
  overview: string;
  runtime: string;
  originalTitle: string;
  originalLanguage: string;
  genres: [{ id: number; name: string }];
};

export const MovieInfo = (props: MovieInfoProps) => {
  const { overview, runtime, originalTitle, originalLanguage, genres } = props;

  return (
    <div className="flex flex-col w-full max-h-full bg-[#f1f0f1] dark:bg-[#f1f0f1]/5 p-10 rounded-[.8rem] shadow-sm">
      <div className="flex flex-row w-full">
        {/* Sinopsis */}
        <div className="px-5 w-[80%]">
          <p className="dark:text-[#f1f0f1]/70 text-[#0c0c0d]/70 text-xl">
            {overview || "Sin sinopsis disponible."}
          </p>
        </div>

        {/* Mas detalles */}
        <div className="border-l dark:border-[#f1f0f1]/20 border-[#202020]/20 px-5">
          <div className="flex flex-col w-full space-y-5 dark:text-[#f1f0f1]/70 text-[#0c0c0d]/70">
            <div>
              <h3 className="font-bold">Duración</h3>
              <p>⏳ {runtime ? `${runtime} minutos` : "No disponible"}</p>
            </div>
            <div>
              <h3 className="font-bold">Título Original</h3>
              <p>{originalTitle || "No disponible"}</p>
            </div>
            <div>
              <h3 className="font-bold">Idioma Original</h3>
              <p>{originalLanguage || "No disponible"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* tags */}
      <div className="flex flex-row gap-2 px-5 pt-10">
        {genres &&
          genres.map((genre: { id: number; name: string }) => (
            <TagBox key={genre.id} id={genre.id} name={genre.name} />
          ))}
      </div>
    </div>
  );
};
