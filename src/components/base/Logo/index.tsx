import { Link } from "react-router-dom";

type TLogo = {
  width?: number;
  height?: number;
  mobWidth?: number;
  mobHeight?: number;
};

const FoodeliLogo = ({
  width = 45,
  height = 45,
  mobWidth = 45,
  mobHeight,
}: TLogo) => {
  return (
    <Link to={"/"} className="flex gap-x-2.5 items-center">
      <figure>
        {/* Desktop */}
        <img
          src="/assets/images/logo.svg"
          style={{ width: `${width}px`, height: `${height}px` }}
          className="hidden md:block rounded-lg"
          alt="logo"
        />
        {/* Mobile */}
        <img
          src="/assets/images/logo.svg"
          style={{ width: `${mobWidth}px`, height: `${mobHeight}px` }}
          className="md:hidden rounded-lg"
          alt="logo"
        />
      </figure>
      <span className="font-bold text-titleColor">Foodeli</span>
    </Link>
  );
};

export default FoodeliLogo;