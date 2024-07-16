import { create } from "zustand";
import TGlobalStore from "./type";

export const useGlobalStore = create<TGlobalStore>((set) => ({
    currentTheme: "light",

    setCurrentTheme: (theme) => {
        set(() => ({
            currentTheme: theme
        }))
    }
}))