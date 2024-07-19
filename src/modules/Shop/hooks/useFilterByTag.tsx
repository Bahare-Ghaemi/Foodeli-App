import { useQuery } from "@tanstack/react-query";
import { filterByTagService } from "../shop.service";
import { useEffect } from "react";
import { useShopStore } from "../store";

export const useFilterByTag = (
  tag: string | null,
  limit?: number,
  skip?: number
) => {
  const { setTotalProductsCount, setProductList } = useShopStore();

  const {
    data,
    refetch: getProductsByTag,
    isLoading: productsByTagIsLoading,
    isSuccess: productsByTagIsSuccess,
    isError: productsByTagIsError,
  } = useQuery({
    queryKey: ["filterByTag", tag],
    queryFn: () => filterByTagService(tag, limit, skip),
    enabled: false,
  });

  const { recipes: productsByTag, total } = data || {};

  useEffect(() => {
    if (productsByTagIsSuccess) {
      setProductList(productsByTag);
      setTotalProductsCount(total);
    }
  }, [productsByTagIsSuccess, productsByTag, total]);

  return {
    productsByTag,
    getProductsByTag,
    productsByTagIsLoading,
    productsByTagIsSuccess,
    productsByTagIsError,
  };
};
