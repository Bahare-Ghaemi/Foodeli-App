import { useLocation } from "react-router-dom";

const useGetUrlQuery = (key: string) => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const queryValue = params.get(key);
  
  return queryValue;
};

export default useGetUrlQuery;
