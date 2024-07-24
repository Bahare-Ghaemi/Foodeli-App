import { useRoutes } from "react-router-dom";
import { router } from "./routes";
import { useEffect } from "react";
import { useShopStore } from "./modules/Shop/store";
import useLocaleStorage from "./hooks/useLocaleStorage";
import { useGlobalStore } from "./store/global";

const App = () => {
  const { currentPage } = useShopStore();
  const [page, setPage] = useLocaleStorage("current-page");

  const routes = useRoutes(router);

  const { currentTheme, setCurrentTheme } = useGlobalStore();

  const [theme, setTheme] = useLocaleStorage("theme", "light");

  useEffect(() => {
    setTheme(currentTheme);
    console.log(currentTheme)
    if (currentTheme == "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }else{
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light");
    }
  }, [currentTheme,document.querySelector("body")]);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  useEffect(() => {
    setPage(currentPage);
    console.log(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return routes;
};

export default App;