  import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
  import type { Movie } from "../../../types/movie";

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
    }),
  });

  export const { useGetRandomMovieQuery } = moviesApi;
