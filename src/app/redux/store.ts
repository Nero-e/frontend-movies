import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { moviesApi } from "../api/apiSlice";
import searchReducer from "./features/searchSlice";
import MoviesReducer from "./features/moviesSlice";
// import FiltersReducer from "./features/filtersSlice";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    search: searchReducer,
    movies: MoviesReducer,
    // filters: FiltersReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
