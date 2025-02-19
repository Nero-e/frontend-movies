import { MovieBanner } from "../../components/MovieBanner";
import { MovieGallery } from "../../components/MovieGallery";

export default function Home() {
  return (
    <div className="p-[5em]">
      {/* Contenido */}
      <main className="flex flex-col items-center">
        {/* banner */}
        <MovieBanner />
        {/* Galleria de pelis */}
        <MovieGallery />
      </main>
    </div>
  );
}
