import { useEffect } from "react";
import DotsLoading from "../../../components/base/Loading/Dots";
import ProductDetail from "../components/ProductDetails";
import useGetSingleProduct from "../hooks/useGetSingleProduct";
import scrollToTop from "../../../utils/scrollToTop";

const SingleProductPage = () => {
  const { productItem, getProductLoading } = useGetSingleProduct();

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div
      className={`single-product-page min-h-[calc(100vh-122px)] ${
        getProductLoading && "flex justify-center items-center"
      } pt-5`}
    >
      {getProductLoading ? (
        <DotsLoading size="lg" />
      ) : (
        <ProductDetail data={productItem} className="w-10/12 mx-auto" />
      )}
    </div>
  );
};

export default SingleProductPage;
