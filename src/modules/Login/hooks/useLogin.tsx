import { useMutation } from "@tanstack/react-query";
import { loginService } from "../service";
import errorAlert from "../../../utils/errorAlert";
import { useNavigate } from "react-router-dom";
import useLocaleStorage from "../../../hooks/useLocaleStorage";
import successAlert from "../../../utils/successAlert";
import { useEffect } from "react";

const useLogin = () => {
  const navigateTo = useNavigate();
  const [accessToken, setAccessToken] = useLocaleStorage("access-token", "");
  const [refreshToken, setRefreshToken] = useLocaleStorage("refresh-token", "");

  const {
    mutate: loginUSer,
    data: loginRes,
    isPending: loginIsLoading,
  } = useMutation({
    mutationFn: loginService,
    onSuccess: (data) => {
      console.log(data);
      successAlert(["You Are Logged In Successfully"]);
      setAccessToken(data.token);
      setRefreshToken(data.refreshToken);
      setTimeout(() => {
        navigateTo("/");
      }, 3000);
    },
    onError: (err) => {
      errorAlert(err);
    },
  });

  useEffect(() => {
    console.log(accessToken, refreshToken);
  }, []);

  return { loginUSer, loginRes, loginIsLoading };
};

export default useLogin;
