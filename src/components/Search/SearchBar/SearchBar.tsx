import { useEffect, useState } from "react";

import { setSearchQuery } from "../../../app/redux/searchSlice";
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
    // dispatch(setSearchQuery(value));
    // onSearch(value === "" ? "" : value);
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
          className="w-full bg-[#f1f0f1]/20 placeholder:text-[#f1f0f1]/50 text-[#f1f0f1] text-xl border-2 border-[#f1f0f1] rounded-[.5em] p-5 transition duration-300 ease focus:outline-none focus:border-[#D81159] hover:border-[#D81159] shadow-sm focus:shadow"
        />
      </div>
      {/* 
      <button
        type="button"
        onClick={handleSearchClick}
        className="px-4 py-1.5 bg-[#f1f0f1] hover:bg-[#D81159] hover:text-[#f1f0f1] rounded-lg cursor-pointer"
      >
        🔍 Buscar
      </button> */}
    </div>
  );
};
