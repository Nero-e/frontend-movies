import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Movie } from "../../../types/movie";
import type { Movies } from "../../../types/movies";

export const moviesApi = createApi({
  reducerPath: "TMDBMovie",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${import.meta.env.VITE_API_TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getRandomMovie: builder.query<Movie | null, void>({
      query: () => "/movie/now_playing?language=es-ES",
      transformResponse: (response: { results: Movie[] }) => {
        if (response.results.length === 0) {
          return null;
        }
        const randomId = Math.floor(Math.random() * response.results.length);
        return response.results[randomId] || null;
      },
    }),
    getMoviesList: builder.query<Movies | null, number>({
      query: (page = 1) => `/movie/popular?language=es-ES&page=${page}`,
    }),
    getMovieById: builder.query<Movie | null, number>({
      query: (id) => `/movie/${id}?language=es-ES`,
    }),
    getSearch: builder.query<Movies | null, string>({
      query: (query) => `/search/movie?query=${query}&language=es-ES`,
    }),
  }),
});

export const {
  useGetRandomMovieQuery,
  useGetMoviesListQuery,
  useGetMovieByIdQuery,
  useGetSearchQuery,
} = moviesApi;
