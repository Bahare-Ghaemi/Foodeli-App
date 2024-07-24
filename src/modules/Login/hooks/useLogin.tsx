import { useMutation } from "@tanstack/react-query";
import { loginService } from "../service";
import errorAlert from "../../../utils/errorAlert";
import { useNavigate } from "react-router-dom";
import useLocaleStorage from "../../../hooks/useLocaleStorage";
import successAlert from "../../../utils/successAlert";

const useLogin = () => {
  const navigateTo = useNavigate();
  const [setAccessToken] = useLocaleStorage("access-token", "");
  const [ setRefreshToken] = useLocaleStorage("refresh-token", "");

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

  return { loginUSer, loginRes, loginIsLoading };
};

export default useLogin;
