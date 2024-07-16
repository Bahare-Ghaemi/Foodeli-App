import { useLocation, useRoutes } from "react-router-dom";
import { router } from "./routes";
import useLocaleStorage from "./hooks/useLocaleStorage";
import { useEffect } from "react";
import { useGlobalStore } from "./store/global";

const App = () => {
  const { pathname } = useLocation();
  const [page, setPage] = useLocaleStorage("current-page");

  const routes = useRoutes(router);

  useEffect(() => {
    setPage(1);
  }, [pathname]);

  return routes;
};

export default App;
