import axios from "axios";

const api = axios.create({
  baseURL: " https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
    // Authorization: localStorage.getItem("x_access_token"),
  },
});

export default api;
