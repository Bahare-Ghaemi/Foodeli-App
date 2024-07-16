import { useEffect } from "react";
import useLocaleStorage from "../../../hooks/useLocaleStorage";
import { useGlobalStore } from "../../../store/global";
import MoonIcon from "../icons/Moon";
import SunIcon from "../icons/Sun";

type TProps = {
  className?: string;
  size?: number;
};

const ToggleTheme = ({ size = 35, className }: TProps) => {
  const { currentTheme, setCurrentTheme } = useGlobalStore();

  const [theme, setTheme] = useLocaleStorage("theme", "light");

  useEffect(() => {
    setTheme(currentTheme);
    console.log(currentTheme)
    if (currentTheme == "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }else{
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light");
    }
  }, [currentTheme,document.querySelector("body")]);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <div className={` ${className} flex items-center`}>
      {currentTheme == "light" ? (
        <button
          disabled={currentTheme == "light" ? false : true}
          onClick={() => setCurrentTheme("dark")}
        >
          <MoonIcon color="#FF9401"/>
        </button>
      ) : (
        <button
          disabled={currentTheme == "dark" ? false : true}
          onClick={() => setCurrentTheme("light")}
        >
          <SunIcon color="#FF9401"/>
        </button>
      )}
    </div>
  );
};

export default ToggleTheme;
