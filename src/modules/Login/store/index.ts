import { create } from "zustand";
import TLoginStore from "./type";

export const useLoginStore = create<TLoginStore>()((set) => ({
  loggedInUser: null,

  setLoggedInUser: (user) => {
    set(() => ({
      loggedInUser: user ? { ...user } : null,
    }));
  },
}));
