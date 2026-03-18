import { Outlet } from "react-router-dom";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function TwoColumns({children}) {
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen">
      <div className="hidden md:block bg-[url(/auth-image.png)] bg-cover  w-[50vw]"></div>
      <div className="md:hidden">
        <AppNavbar />
      </div>
      <div className="bg-[#F2F6F2] w-full  min-w-[400px] md:w-[50vw] grid place-items-center overflow-scroll">
      <Outlet />
      <div className="md:hidden">
        <Footer />
      </div>
      </div>
    </div>
  );
}
