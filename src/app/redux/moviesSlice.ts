import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Movie } from "../../../types/movie";

interface MoviesState {
  movies: Movie[];
  page: number;
}

const initialState: MoviesState = {
  movies: [],
  page: 1,
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
  },
});

export const { addMovies, nextPage, resetMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
