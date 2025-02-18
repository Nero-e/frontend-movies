export const MovieHeader = () => {
  return (
    <header className="fixed flex justify-between items-center w-full px-16 py-5 h-[5em] rounded-xs dark:bg-[#0c0c0d] bg-[#f8f8f8] z-10">
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
          <a href="/" className="">
            Inicio
          </a>
          <a href="/" className="">
            Lsita de peliculas
          </a>
        </div>
      <div className="space-x-2.5">
        {/* Search bar */}
        {/* <input type="text" id="voice-search" className=" border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-[#0050ff] focus:border-[#0050ff] w-full py-2 px-2.5" /> */}
        <button className="">Ingresar</button>
        <button className="px-4 py-2 bg-[#F3F4FA] cursor-pointer hover:bg-amber-300">Registar</button>
      </div>
    </header>
  );
};

