import { Outlet } from "react-router-dom";
import Header from "../../components/app/Header";
import Footer from "../../components/app/Footer";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default DefaultLayout;
