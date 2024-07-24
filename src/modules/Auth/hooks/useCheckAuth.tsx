import { useEffect } from "react";
import useLocaleStorage from "../../../hooks/useLocaleStorage";
import useGetLoggedInUser from "../../Login/hooks/useGetLoggedInUser";

const useCheckAuth = () => {
  const [accessToken, setAccessToken] = useLocaleStorage("access-token");

  const { getLoggedInUser, getLoggedInUserLoading } = useGetLoggedInUser();

  useEffect(() => {
    if (accessToken) {
      getLoggedInUser();
    } else {
      setAccessToken("");
    }
  }, [accessToken]);

  return { getLoggedInUserLoading };

  //   return (props: any) => <Component {...props} />;
};

export default useCheckAuth;
