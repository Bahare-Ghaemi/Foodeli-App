import { Link } from "react-router-dom";

type TProps = {
  clickHandler?: () => void;
  navigateTo?: string;
  width: number;
  height: number;
  text: string;
  icon?: React.ReactNode;
  hasShadow?: boolean;
  textSize?: string;
  space?: string;
  hoverAnimate?: boolean;
  className?: string;
};

const CallToActionBtn = ({
  clickHandler,
  navigateTo,
  width,
  height,
  text,
  icon,
  hasShadow = false,
  textSize = "text-sm",
  space = "gap-x-[5px]",
  hoverAnimate = false,
  className,
}: TProps) => {
  return navigateTo ? (
    <Link
      style={{ width: `${width}px`, height: `${height}px` }}
      to={navigateTo}
      className={`bg-primaryColor rounded-full flex justify-center ${
        hoverAnimate && "hover:scale-95 duration-300"
      } ${space} items-center ${
        hasShadow && "shadow-xl shadow-[#ff95015d]"
      } ${className}`}
    >
      {icon && icon}
      <span className={`text-white ${textSize}`}>{text}</span>
    </Link>
  ) : (
    <button
      onClick={clickHandler}
      style={{ width: `${width}px`, height: `${height}px` }}
      className={`bg-primaryColor rounded-full flex justify-center ${
        hoverAnimate && "hover:scale-95 duration-300"
      } ${space} items-center ${
        hasShadow && "shadow-xl shadow-[#ff95015d]"
      } ${className}`}
    >
      {icon && icon}
      <span className={`text-white ${textSize}`}>{text}</span>
    </button>
  );
};

export default CallToActionBtn;
