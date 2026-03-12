import { Outlet } from "react-router-dom";

export default function TwoColumns({children}) {
  return (
    <div className="flex h-screen w-screen">
      <div className="hidden md:block bg-[url(/auth-image.png)] bg-cover  w-[50vw]"></div>
      <div className="bg-[#F2F6F2] w-full  min-w-[400px] md:w-[50vw] grid place-items-center overflow-scroll p-10">
        <Outlet />
      </div>
    </div>
  );
}
