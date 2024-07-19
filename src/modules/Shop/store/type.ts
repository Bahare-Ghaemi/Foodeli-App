import TProductItem from "../../../types/product";

type TShopStore = {
  productList: TProductItem[];
  currentPage: number | null;
  totalProductsCount: number | null;
  selectedMeal: string | null;
  selectedTag: string | null;

  setProductList: (list: TProductItem[]) => void;
  setCurrentPage: (page: number) => void;
  setTotalProductsCount: (count: number) => void;
  setSelectedMeal: (meal: string | null) => void;
  setSelectedTag: (tag: string | null) => void;
};

export default TShopStore;
