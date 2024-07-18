import { useLocation, useRoutes } from "react-router-dom";
import { router } from "./routes";
// import useLocaleStorage from "./hooks/useLocaleStorage";
import { useEffect } from "react";
import { useShopStore } from "./modules/Shop/store";
import useLocaleStorage from "./hooks/useLocaleStorage";

const App = () => {
  const { pathname } = useLocation();
  const { currentPage, setCurrentPage } = useShopStore();
  const [page, setPage] = useLocaleStorage("current-page");

  const routes = useRoutes(router);

  useEffect(() => {
    setPage(currentPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  useEffect(() => {
    console.log(page,pathname);
    if (!pathname.includes("/shop")) {
      setCurrentPage(1);
    }
  }, [pathname]);

  return routes;
};

export default App;
