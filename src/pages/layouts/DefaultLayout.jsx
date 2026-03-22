import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import { Progress } from "@heroui/react";

export default function DefaultLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className='w-full bg-[#F2F6F2] relative'>
        <ScrollToTop />
        {isLoading && (
          <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="fixed top-0 left-0 right-0 z-[100]"
            color="success"
          />
        )}
        <Navbar />
        <div className="m-4 min-h-screen">
          <Outlet />
        </div>
        <Footer />
    </div>
  );
}
