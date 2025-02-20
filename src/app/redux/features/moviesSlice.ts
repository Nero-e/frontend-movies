import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Movie } from "../../../../types/movie";

interface MoviesState {
  movies: Movie[];
  page: number;
  genre?: number | null;
  year?: number;
  rating?: number;
}

const initialState: MoviesState = {
  movies: [],
  page: 1,
  genre: null,
  year: undefined,
  rating: undefined,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<Movie[]>) => {
      const newMovies = action.payload.filter(
        (movie) => !state.movies.some((m) => m.id === movie.id)
      );
      state.movies.push(...newMovies);
    },
    nextPage: (state) => {
      state.page += 1;
    },
    resetMovies: (state) => {
      state.movies = [];
      state.page = 1;
    },
    setFilters: (
      state,
      action: PayloadAction<Partial<MoviesState>>
    ) => {
      state.genre = action.payload.genre;
      state.year = action.payload.year;
      state.rating = action.payload.rating;
      state.page = 1;
    },
  },
});

export const { addMovies, nextPage, resetMovies, setFilters } = moviesSlice.actions;
export default moviesSlice.reducer;
