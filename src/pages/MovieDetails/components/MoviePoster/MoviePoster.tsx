type MoviePosterProps = {
    poster: string,
    title: string,
}

export const MoviePoster = ({poster, title}: MoviePosterProps) => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/w500/${poster}`}
      alt={`Poster de ${title}`}
      className="w-[180px] h-full block object-cover rounded-[.8rem]"
    />
  );
};
