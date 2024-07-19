import { useEffect, useMemo } from "react";
import { useGetProductList } from "../hooks/useGetProductList";
import { useShopStore } from "../store";
import ProductList from "../components/ProductList";
import useFilterByMeal from "../hooks/useFilterByMeal";
import { useFilterByTag } from "../hooks/useFilterByTag";

const ShopPage = () => {
  const { currentPage, setProductList, selectedMeal, selectedTag } =
    useShopStore();

  const skip = useMemo(() => {
    return (Number(currentPage) - 1) * 9;
  }, [currentPage]);

  const { productList, getAllProductList, getIsSuccess, getIsLoading } =
    useGetProductList(9, skip);
  const { getProductsByMeal, productsByMealIsLoading } = useFilterByMeal(
    selectedMeal,
    9,
    skip
  );
  const { getProductsByTag, productsByTagIsLoading } = useFilterByTag(
    selectedTag,
    9,
    skip
  );

  useEffect(() => {
    selectedMeal
      ? getProductsByMeal()
      : selectedTag
      ? getProductsByTag()
      : getAllProductList();
  }, [selectedMeal, selectedTag, currentPage]);

  useEffect(() => {
    if (getIsSuccess) {
      setProductList(productList);
    }
  }, [getIsSuccess, currentPage]);

  return (
    <div className="shop-page">
      <ProductList
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7"
        isLoading={
          selectedMeal
            ? productsByMealIsLoading
            : selectedTag
            ? productsByTagIsLoading
            : getIsLoading
        }
      />
    </div>
  );
};

export default ShopPage;
