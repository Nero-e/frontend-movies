import { MovieBanner } from "../components/MovieBanner";
import { MovieGallery } from "../components/MovieGallery";

export default function Home() {
  return (
    <div className="">
      {/* Contenido */}
      <main className="flex flex-col items-center">
        {/* banner */}
        <div className="pt-[5em]"><MovieBanner /></div>
        
        {/* Galleria de pelis */}
        <MovieGallery />
      </main>
    </div>
  );
}
