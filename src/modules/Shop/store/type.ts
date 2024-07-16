import TProductItem from "../../../types/product";

type TShopStore = {
  productList: TProductItem[];
  currentPage: number | string | null;
  totalProductsCount: number | null;

  setProductList: (list: TProductItem[]) => void;
  setCurrentPage: (page: number) => void;
  setTotalProductsCount: (count: number) => void;
};

export default TShopStore;
