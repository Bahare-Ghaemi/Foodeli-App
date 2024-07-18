import { create } from "zustand";
import TShopStore from "./type";

export const useShopStore = create<TShopStore>()((set) => ({
  productList: [],
  currentPage: Number(localStorage.getItem("current-page")),
  totalProductsCount: null,

  setProductList: (list) => {
    set(() => ({
      productList: [...list],
    }));
  },

  setCurrentPage: (page) => {
    set(() => ({
      currentPage: page,
    }));
  },

  setTotalProductsCount: (count) => {
    set(() => ({
      totalProductsCount: count,
    }));
  },
}));
