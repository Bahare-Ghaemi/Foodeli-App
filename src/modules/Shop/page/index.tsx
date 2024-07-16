import { useEffect, useMemo } from "react";
import { useGetProductList } from "../hooks/useGetProductList";
import { useShopStore } from "../store";
import ProductList from "../components/ProductList";

const ShopPage = () => {
  const { currentPage, setProductList } = useShopStore();

  const skip = useMemo(() => {
    return (Number(currentPage) - 1) * 9;
  }, [currentPage]);

  const { productList, getIsSuccess, getIsLoading } = useGetProductList(
    9,
    skip
  );

  useEffect(() => {
    if (getIsSuccess) {
      setProductList(productList);
    }
  }, [getIsSuccess,currentPage]);

  return (
    <div className="shop-page">
      <ProductList
        className="grid grid-cols-1 md:grid-cols-3 gap-7"
        isLoading={getIsLoading}
      />
    </div>
  );
};

export default ShopPage;
