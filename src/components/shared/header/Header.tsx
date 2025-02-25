import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#f8f8f8] dark:bg-[#0c0c0d] z-20 dark:shadow-[#f1f0f1]/5 dark:shadow-2xl">
      <nav className="max-w-screen flex justify-between items-center px-6 md:px-16 py-4">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <a href="/">
            <h1 className="text-[22px] md:text-[25px] font-bold tracking-wider">
              Frontend
            </h1>
            <span className="text-xs font-bold tracking-[0.15em] text-[#D81159]">
              películas
            </span>
          </a>
        </div>

        {/* Menú */}
        <nav className="hidden md:flex text-lg font-semibold space-x-8">
          <Link to="/" className="hover:text-[#D81159]">
            Inicio
          </Link>
          <Link to="/list-movies" className="hover:text-[#D81159]">
            Lista de películas
          </Link>
        </nav>

        {/* Botones */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-1.5 border border-[#0c0c0d] hover:border-[#D81159] hover:bg-[#D81159] hover:text-[#f1f0f1]  dark:border-[#f1f0f1]  rounded-[.5em] cursor-pointer">
            Ingresar
          </button>
          <button className="px-4 py-1.5 bg-[#f1f0f1] text-[#0c0c0d] hover:bg-[#D81159] hover:text-[#f1f0f1] rounded-lg cursor-pointer">
            Registar
          </button>
        </div>

        {/* Menú Móvil */}
        <button
          className="md:hidden text-[#0c0c0d] dark:text-[#f1f0f1] text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ✨
        </button>
      </nav>

      {/* Menú Móvil (dropdown) */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col p-4 bg-[#f8f8f8] dark:bg-[#0c0c0d] w-screen space-y-5">
          <Link to="/" className="block hover:text-[#D81159]">
            Inicio
          </Link>
          <Link to="/" className="block hover:text-[#D81159]">
            Lista de películas
          </Link>
          <button className="px-4 py-1.5 border border-[#0c0c0d] dark:border-[#f1f0f1] hover:bg-[#D81159] hover:text-[#f1f0f1] rounded-md cursor-pointer">
            Ingresar
          </button>
          <button className="px-4 py-1.5 bg-[#f1f0f1] text-[#0c0c0d] hover:bg-[#D81159] hover:text-[#f1f0f1] rounded-md cursor-pointer">
            Registrarse
          </button>
        </nav>
      )}
    </header>
  );
};
