import { useGlobalStore } from "../../../store/global";
import MoonIcon from "../icons/Moon";
import SunIcon from "../icons/Sun";

type TProps = {
  className?: string;
  size?: number;
};

const ToggleTheme = ({ size = 35, className }: TProps) => {
  const { currentTheme, setCurrentTheme } = useGlobalStore();

  return (
    <div className={` ${className} items-center`}>
      {currentTheme == "light" ? (
        <button
          disabled={currentTheme == "light" ? false : true}
          onClick={() => setCurrentTheme("dark")}
        >
          <MoonIcon color="#FF9401" size={size}/>
        </button>
      ) : (
        <button
          disabled={currentTheme == "dark" ? false : true}
          onClick={() => setCurrentTheme("light")}
        >
          <SunIcon color="#FF9401" size={size}/>
        </button>
      )}
    </div>
  );
};

export default ToggleTheme;
