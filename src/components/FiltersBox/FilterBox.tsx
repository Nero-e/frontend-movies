import { useGetGenresListQuery } from "../../app/api/apiSlice";
import { TagBox } from "../Tag/TagBox";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { resetMovies, setFilters } from "../../app/redux/features/moviesSlice";

export const FilterBox = () => {
  const { data: genres } = useGetGenresListQuery();
  const dispatch = useAppDispatch();
  const selectedGenre = useAppSelector((state) => state.movies.genre);

  const handleFilterChange = (id: number | null) => {
    dispatch(setFilters({ genre: id }));
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
            isDisabled={selectedGenre === null}
            isSelected={selectedGenre === null}
            onClick={() => handleFilterChange(null)}
          />
          {genres?.genres.map((genre) => (
            <TagBox
              isSimple
              key={genre.id}
              id={genre.id}
              name={genre.name}
              isDisabled={selectedGenre === genre.id}
              isSelected={selectedGenre === genre.id}
              onClick={() => handleFilterChange(genre.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
