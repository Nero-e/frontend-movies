import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  genre: number | null;
  year: number | null;
  rating: number | null;
}

const initialState: FiltersState = {
  genre: null,
  year: null,
  rating: null,
};

export const filterSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<FiltersState>>) => {
      return { ...state, ...action.payload };
    },
    resetMovies: () => initialState,
  },
});

export const { setFilters, resetMovies } = filterSlice.actions;
export default filterSlice.reducer;
