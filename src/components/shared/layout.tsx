import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const MainLayout = () => {
  return (
    <div className="relative w-full min-h-screen h-full dark:bg-[#0c0c0d] bg-[#0050ff] dark:text-[#f8f8f8] text-[#0c0c0d]">
      <Header />
      <Outlet />
    </div>
  );
};
