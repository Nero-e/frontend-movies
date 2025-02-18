import { MovieBanner } from "../components/MovieBanner";
import { MovieHeader } from "../components/shared/Header";
export default function App() {
  return (
    <div className="relative w-full min-h-full h-screen dark:bg-[#0c0c0d] bg-[#0050ff] dark:text-[#f8f8f8] text-[#0c0c0d]">
      {/* header */}
      <MovieHeader />
      {/* main banner */}
      <main className="flex flex-col pt-[6em] items-center">
        <MovieBanner />
      </main>
    </div>
  );
}
