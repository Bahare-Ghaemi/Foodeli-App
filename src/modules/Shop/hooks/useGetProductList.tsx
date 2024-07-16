import { useMutation, useQuery } from "@tanstack/react-query";
import { getProductListService } from "../shop.service";
import { useShopStore } from "../store";
import { useEffect } from "react";

export const useGetProductList = (limit?: number, skip?: number) => {
  const { setTotalProductsCount, setProductList } = useShopStore();

  const {
    data,
    isLoading: getIsLoading,
    isSuccess: getIsSuccess,
    isError: getIsError,
  } = useQuery({
    queryKey: ["product-list", skip,limit],
    queryFn: () => getProductListService(limit, skip),
  });

  const { recipes: productList, total } = data || {};

  useEffect(() => {
    if (getIsSuccess) {
      setProductList(productList);
      setTotalProductsCount(total);
    }
  }, [getIsSuccess]);

  return { productList, getIsSuccess, getIsLoading, getIsError };
};
