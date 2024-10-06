import { ReactNode } from "react";

const Dashbordlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:inset-y-0 z-[80] md:flex-col md:fixed bg-gray-900 text-white ">
        <div>hellow sidebar</div>
      </div>

      <main className="md:pl-72 text-black">{children}</main>
    </div>
  );
};

export default Dashbordlayout;
