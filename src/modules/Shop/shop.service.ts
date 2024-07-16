import api from "../../services/api";

export const getProductListService = async (limit = 0, skip = 0) => {
  const { data } = await api.get(
    `/recipes?limit=${limit ? limit : "0"}&skip=${skip ? skip : "0"}`
  );

  return data;
};

export const getTagListService = async (limit = 0, skip = 0, select = "") => {
  const { data } = await api.get(
    `recipes/tags?limit=${limit}&skip=${skip}&select=${select}`
  );
  return data;
};
