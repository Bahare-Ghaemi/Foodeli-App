import { useQuery } from "@tanstack/react-query";
import { filterByMealService } from "../shop.service";
import { useEffect } from "react";
import { useShopStore } from "../store";

const useFilterByMeal = (
  meal: string | null,
  limit?: number,
  skip?: number
) => {
  const { setTotalProductsCount, setProductList, productList } = useShopStore();

  const {
    data,
    refetch: getProductsByMeal,
    isLoading: productsByMealIsLoading,
    isSuccess: productsByMealIsSuccess,
    isError: productsByMealIsError,
  } = useQuery({
    queryKey: ["get-by-meal", meal],
    queryFn: () => filterByMealService(meal, limit, skip),
    enabled: false,
  });
  const { recipes: productsByMeal, total } = data || {};

  useEffect(() => {
    if (productsByMealIsSuccess) {
      console.log("**********", productsByMeal);
      setProductList(productsByMeal);
      console.log("**********", productList);
      setTotalProductsCount(total);
    }
  }, [productsByMealIsSuccess,productsByMeal,meal]);

  useEffect(() => {
    console.log("$$$$$$$$$$4", productList);
  },[productsByMeal])

  return {
    productsByMeal,
    getProductsByMeal,
    productsByMealIsLoading,
    productsByMealIsSuccess,
    productsByMealIsError,
  };
};

export default useFilterByMeal;
