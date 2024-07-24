import api from "../../../services/api";

type TLoginProps = {
  username: string;
  password: string;
};

export const loginService = async ({ username, password }: TLoginProps) => {
  const { data } = await api.post("/auth/login", {
    username,
    password,
    expiresInMins: 120,
  });

  return data;
};

export const getLoggedInUserService = async () => {
  const { data } = await api.get("/auth/me", {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("access-token") as string),
    },
  });
  return data;
};
