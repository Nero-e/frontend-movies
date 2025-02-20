import { useEffect, useState } from "react";

import { setSearchQuery } from "../../../app/redux/features/searchSlice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useDebounce } from "../../../hooks/useDebounce";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.query);

  const [inputValue, setInputValue] = useState(search);
  const debouncedValue = useDebounce(inputValue, 500);

  useEffect(() => {
    dispatch(setSearchQuery(debouncedValue));
    onSearch(debouncedValue);
  }, [debouncedValue, dispatch, onSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <div className="flex flex-row justify-end gap-2">
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Buscar película..."
          className="w-full bg-[#f1f0f1]/10 text-[#0c0c0d] dark:text-[#f1f0f1] placeholder:text-[#0c0c0d]/50 dark:placeholder:text-[#f1f0f1]/50  text-lg border-4 border-[#0c0c0d] dark:border-[#f1f0f1] rounded-[.5em] p-2 transition duration-300 ease focus:outline-none focus:border-[#D81159] hover:border-[#D81159] shadow-sm focus:shadow"
        />
      </div>
    </div>
  );
};
