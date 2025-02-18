export const MovieHeader = () => {
  return (
    <header className="fixed flex justify-between items-center w-full px-16 py-5 h-[5em] rounded-xs dark:bg-[#0c0c0d] bg-[#f8f8f8] z-20">
      {/* Logo */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[25px] leading-7 font-bold tracking-wider">
          Candela Soft
        </h1>
        <span className="text-xs leading-[13px] font-bold tracking-[0.15em] text-[#D81159]">
          películas
        </span>
      </div>
      <div className="flex text-lg leading-[14px] font-semibold space-x-16">
          <a href="/" className="hover:text-[#D81159]">
            Inicio
          </a>
          <a href="/" className="hover:text-[#D81159]">
            Lista de películas
          </a>
        </div>
      <div className="space-x-2.5">
        {/* Search bar */}
        {/* <input type="text" id="voice-search" className=" border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-[#0050ff] focus:border-[#0050ff] w-full py-2 px-2.5" /> */}
        <button className="">Ingresar</button>
        <button className="px-4 py-1.5 bg-[#f1f0f1] hover:bg-[#D81159] hover:text-[#f1f0f1] rounded-lg cursor-pointer">Registar</button>
      </div>
    </header>
  );
};

