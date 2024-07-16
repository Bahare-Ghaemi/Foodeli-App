import { useEffect, useState } from "react";

const useLocaleStorage = (key: string, initialState?: any) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key)
      ? localStorage.getItem(key)
      : "";
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocaleStorage;
