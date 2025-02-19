export interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
  poster_path: string;
  vote_average: string;
  release_date: string;
  original_title: string;
  original_language: string;
  runtime: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  genres: [
    {
      id: number;
      name: string;
    },
  ];
}
