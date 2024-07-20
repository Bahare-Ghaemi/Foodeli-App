import { useRoutes } from "react-router-dom";
import { router } from "./routes";
import { useEffect } from "react";
import { useShopStore } from "./modules/Shop/store";
import useLocaleStorage from "./hooks/useLocaleStorage";

const App = () => {
  const { currentPage } = useShopStore();
  const [page, setPage] = useLocaleStorage("current-page");

  const routes = useRoutes(router);

  // const isInitialMount = useRef(true);

  // useEffect(() => {
  //   if (isInitialMount.current) {
  //       isInitialMount.current = false;
  //    } else {
  //        setCurrentPage(1)
  //        console.log("@@@@@@",window.location.href)
  //    }
  // }, [window.location.href])

  useEffect(() => {
    setPage(currentPage);
    console.log(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // useEffect(() => {
  //   if (!pathname.includes("/shop")) {
  //     setCurrentPage(1);
  //     console.log("set page to 1")
  //   }
  // }, [pathname]);

  return routes;
};

export default App;
