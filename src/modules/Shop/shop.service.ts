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

export const filterByMealService = async (
  meal: string | null,
  limit = 0,
  skip = 0
) => {
  const { data } = await api.get(
    `recipes/meal-type/${meal}?limit=${limit}&skip=${skip}`
  );
  return data;
};

export const filterByTagService = async (
  tag: string | null,
  limit = 0,
  skip = 0
) => {
  const { data } = await api.get(
    `recipes/tag/${tag}?limit=${limit}&skip=${skip}`
  );
  return data;
};
