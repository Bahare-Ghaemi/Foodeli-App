import { useEffect } from "react";
import AboutUs from "../components/AboutUS";
import Landing from "../components/Landing";
import CategoryList from "../components/CategoryList";
import scrollToTop from "../../../utils/scrollToTop";
import { useGetProductList } from "../../Shop/hooks/useGetProductList";
import BestDishList from "../components/BestDishList";
import Testimonials from "../components/Testimonials";
import Application from "../components/Application";

const HomePage = () => {
  const { getIsLoading } = useGetProductList(0, 0);

  useEffect(() => {
    // scrollToTop();
  }, []);

  return (
    <div className="home-page">
      <Landing />
      <AboutUs className="mt-24 md:mt-0"/>
      <CategoryList className="w-10/12 mx-auto mt-14 md:mt-0" />
      <BestDishList className="mt-[80px] md:mt-[150px]" isLoading={getIsLoading} />
      <Testimonials className="w-10/12 mx-auto mt-[300x]" />
      <Application className="w-10/12 mx-auto mt-20" />
    </div>
  );
};

export default HomePage;
