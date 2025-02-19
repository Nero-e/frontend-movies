const MovieDetailsSkeleton = () => {
  return (
    <section className="flex w-full h-full p-5 justify-center pt-[5em]">
      <div className="flex flex-col w-[1400px] min-w-[400px] h-full py-16">
        <div className="bg-[#f8f8f8] rounded-[.8rem] animate-pulse">
          {/* Imagen Skeleton */}
          <div className="relative w-full h-full aspect-video bg-gray-300 rounded-t-[.8rem]" />

          {/* Contenido Skeleton */}
          <article className="flex p-[5em] space-y-2.5 gap-6">
            {/* Poster Skeleton */}
            <div className="w-[180px] h-[270px] block bg-gray-300 rounded-[.8rem]" />

            <div className="flex flex-col w-full max-h-full bg-[#f1f0f1] p-10 rounded-[.8rem] shadow-sm">
              <div className="flex flex-row h-full w-full">
                {/* Sinopsis Skeleton */}
                <div className="px-5 h-full w-full space-y-4">
                  <div className="w-3/4 h-6 bg-gray-300 rounded" />
                  <div className="w-full h-6 bg-gray-300 rounded" />
                  <div className="w-5/6 h-6 bg-gray-300 rounded" />
                </div>
              </div>
              {/* Tags Skeleton */}
              <div className="flex flex-row gap-2 px-5 pt-10">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="px-[7px] py-[5px] bg-gray-300 rounded-[7px] w-16 h-6"
                  />
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsSkeleton;
