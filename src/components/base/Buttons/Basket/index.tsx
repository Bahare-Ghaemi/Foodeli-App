import { Link } from "react-router-dom";
import BasketIcon from "../../icons/Basket";

const BasketBtn = () => {
  return (
    <Link to={"/cart"} className="relative">
      <div className="text-titleColor">
      <BasketIcon />
      </div>
      <span className="-top-[3px] -right-[7px] w-[18px] h-[18px] bg-primaryColor rounded-full absolute text-xs text-white flex justify-center items-center">
        0
      </span>
    </Link>
  );
};

export default BasketBtn;
