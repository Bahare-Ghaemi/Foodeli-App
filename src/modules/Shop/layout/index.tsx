import { Outlet } from "react-router-dom";
import Header from "../../../components/app/Header";
import ShopSidebar from "../components/Sidebar";
import Breadcrumbs from "../../../components/base/Beadcrumbs";
import Pagination from "../components/Pagination";
import Footer from "../../../components/app/Footer";

const ShopLayout = () => {
  return (
    <>
      <Header />
      <div className="shop-layout w-10/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-x-10 min-h-screen">
        {/* Sidebar */}
        <ShopSidebar className="col-span-3 hidden md:block" />
        {/* MAin Content */}
        <main className="md:col-span-9">
          <Breadcrumbs prevLink="home" currTitle="Shop" className="mb-6" />
          <Outlet />
          <Pagination className="w-full mt-16" />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ShopLayout;
