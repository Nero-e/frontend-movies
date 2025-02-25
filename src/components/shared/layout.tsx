import { Outlet } from "react-router-dom";
import { Header } from "./Header";

import { useState } from "react";


export const MainLayout = () => {
  const [isDark, setIsDark] = useState(false);
  const handleChange =() =>{
    setIsDark(!isDark);
  }

  return (
    <div className={`${isDark && "dark"} relative w-full min-h-screen h-full dark:bg-[#0c0c0d] bg-[#f1f0f1] dark:text-[#f1f0f1] text-[#0c0c0d]`}>
      <Header />
      <Outlet />
      <button onClick={handleChange} className="fixed bottom-16 right-16 rounded-full font-semibold tracking-wide text-[#f1f0f1] dark:text-[#0c0c0d] cursor-pointer bg-[#0c0c0d] dark:bg-[#f8f8f8] aspect-square w-14 z-10">
        {!isDark  ? "DRK": "LGT"}
      </button>
    </div>
  );
};
