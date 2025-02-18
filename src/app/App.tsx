import { MovieBanner } from "../components/movieBanner";
import { MovieHeader } from "../components/shared/header";
export default function App() {
  return (
    <div className="w-full min-h-full h-screen dark:bg-[#0c0c0d] bg-[#0050ff] dark:text-[#f8f8f8] text-[#0c0c0d]">
      {/* header */}
      <MovieHeader />
      {/* main banner */}
      <MovieBanner />
    </div>
  );
}
