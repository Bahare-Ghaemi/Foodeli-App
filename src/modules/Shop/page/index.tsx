import { useEffect, useMemo } from "react";
import { useGetProductList } from "../hooks/useGetProductList";
import { useShopStore } from "../store";
import ProductList from "../components/ProductList";
import useFilterByMeal from "../hooks/useFilterByMeal";
import { useFilterByTag } from "../hooks/useFilterByTag";
import scrollToTop from "../../../utils/scrollToTop";

const ShopPage = () => {
  const { currentPage, selectedMeal, selectedTag } = useShopStore();

  const skip = useMemo(() => {
    return (Number(currentPage) - 1) * 9;
  }, [currentPage]);

  const { getAllProductList, getIsLoading } = useGetProductList(9, skip);
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
    if (selectedMeal) {
      getProductsByMeal();
      console.log("get meals");
    } else if (selectedTag) {
      getProductsByTag();
      console.log("get tags");
    } else {
      getAllProductList();
      console.log("get all");
    }
  }, [selectedMeal, selectedTag, currentPage]);

  useEffect(() => {
    scrollToTop();
  }, []);

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
