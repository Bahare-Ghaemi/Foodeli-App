import { useQuery } from "@tanstack/react-query";
import { getLoggedInUserService } from "../service";
import { useEffect } from "react";
import { useLoginStore } from "../store";

const useGetLoggedInUser = () => {
  const {loggedInUser, setLoggedInUser } = useLoginStore();

  const {
    data,
    refetch: getLoggedInUser,
    isLoading: getLoggedInUserLoading,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["get-current-user"],
    queryFn: getLoggedInUserService,
    // enabled: false,
  });

  useEffect(() => {
    if (isSuccess) {
      setLoggedInUser(data);
      console.log("^^^^^^^^", loggedInUser)
    } else if (isError) {
      // errorAlert(error);
      setLoggedInUser(null)
    }
  }, [isSuccess,isError,error]);

  return { getLoggedInUser, getLoggedInUserLoading };
};

export default useGetLoggedInUser;
