import { useLocation, useRoutes } from "react-router-dom";
import { router } from "./routes";
import useLocaleStorage from "./hooks/useLocaleStorage";
import { useEffect } from "react";

const App = () => {
  const { pathname } = useLocation();
  const [page, setPage] = useLocaleStorage("current-page");

  const routes = useRoutes(router);

  useEffect(() => {
    setPage(1);
    console.log(page)
  }, [pathname]);

  return routes;
};

export default App;
