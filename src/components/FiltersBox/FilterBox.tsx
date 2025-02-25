import { useGetGenresListQuery } from "../../api/apiSlice";
import { TagBox } from "../Tag/TagBox";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { resetMovies, setFilters } from "../../features/moviesSlice";

export const FilterBox = () => {
  const { data: genres } = useGetGenresListQuery();
  const dispatch = useAppDispatch();
  const { genre: genereData, year: yearData } = useAppSelector((state) => state.movies);

  const handleFilterChange = (id?: number | null, yearValue?: number | null ) => {
    dispatch(setFilters({ genre: id, year: yearValue}));
    dispatch(resetMovies());
  };

  return (
    <div className="flex flex-col gap-2 p-5 border dark:border-[#474747] rounded-[.5em] bg-[#f1f0f1]/10 border-[#f1f0f1] shadow-2xl">
      <h1 className="text-lg dark:text-[#f1f0f1] font-bold tracking-wider">Filtros</h1>
      <div className="flex flex-row">
        <h2 className="text-md font-semibold pr-5 dark:text-[#f1f0f1]">Género</h2>
        <div className="flex flex-wrap gap-2">
          <TagBox
            isSimple
            id={0}
            name="Todo"
            isDisabled={genereData === null}
            isSelected={genereData === null}
            onClick={() => handleFilterChange(null,yearData)}
          />
          {genres?.genres.map((genre) => (
            <TagBox
              isSimple
              key={genre.id}
              id={genre.id}
              name={genre.name}
              isDisabled={genereData === genre.id}
              isSelected={genereData === genre.id}
              onClick={() => handleFilterChange(genre.id, yearData)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <h2 className="text-md font-semibold pr-5 dark:text-[#f1f0f1]">Año</h2>
          <div className="flex flex-wrap gap-2">
            <TagBox
              isSimple
              id={0}
              name="Todo"
              isDisabled={false}
              isSelected={yearData === null}
              onClick={() => handleFilterChange(genereData,null)}
            />
            <TagBox
              isSimple
              id={2025}
              name="2025"
              isDisabled={false}
              isSelected={yearData === 2025}
              onClick={() => handleFilterChange(genereData,2025)}
            />
            <TagBox
              isSimple
              id={2024}
              name="2024"
              isDisabled={false}
              isSelected={yearData === 2024}
              onClick={() => handleFilterChange(genereData,2024)}
            />
            <TagBox
              isSimple
              id={2023}
              name="2023"
              isDisabled={false}
              isSelected={yearData === 2023}
              onClick={() => handleFilterChange(genereData,2023)}
            />
          </div>
        </div>
    </div>
  );
};
