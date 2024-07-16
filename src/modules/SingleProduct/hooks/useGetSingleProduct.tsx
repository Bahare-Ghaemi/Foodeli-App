import { useQuery } from "@tanstack/react-query";
import { getSingleProductService } from "../services";
import useGetUrlQuery from "../../../hooks/useGetUrlQuery";

const useGetSingleProduct = () => {
  const id = useGetUrlQuery("id")

  const {
    data: productItem,
    isError: getProductError,
    isSuccess: getProductSuccess,
    isLoading: getProductLoading,
  } = useQuery({
    queryKey: ["get-single-product",id],
    queryFn: getSingleProductService,
  });

  return { productItem, getProductError, getProductSuccess, getProductLoading };
};

export default useGetSingleProduct;
