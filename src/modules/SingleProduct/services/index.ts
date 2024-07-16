import api from "../../../services/api";

export const getSingleProductService = async () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("id");

  const { data } = await api.get(`/recipes/${id}`);

  return data;
};
