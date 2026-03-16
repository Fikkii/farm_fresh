import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function DefaultLayout({children}) {
  return (
    <div className='w-full bg-[#F2F6F2]'>
        <Navbar />
        <div className="m-4">
          <Outlet />
        </div>
        <Footer />
    </div>
  );
}
