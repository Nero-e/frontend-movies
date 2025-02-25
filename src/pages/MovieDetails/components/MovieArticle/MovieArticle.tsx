import { MovieInfo } from "../MovieInfo";
import { MoviePoster } from "../MoviePoster";

type MovieArticleProps = {
  title: string;
  poster: string;
  overview: string;
  runtime: string;
  originalTitle: string;
  originalLanguage: string;
  genres: [{ id: number; name: string }];
};

export const MovieArticle = (props: MovieArticleProps) => {
  const {
    title,
    poster,
    overview,
    runtime,
    originalTitle,
    originalLanguage,
    genres,
  } = props;

  return (
    <article className="flex p-[5em] space-y-2.5 gap-6">
      {/* Poster */}
      <MoviePoster title={title} poster={poster} />
      {/* Mas informacion */}
      <MovieInfo
        overview={overview}
        runtime={runtime}
        originalTitle={originalTitle}
        originalLanguage={originalLanguage}
        genres={genres}
      />
    </article>
  );
};
