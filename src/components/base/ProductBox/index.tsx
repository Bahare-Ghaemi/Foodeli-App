import { Link } from "react-router-dom";
import TProductItem from "../../../types/product";
import Heart from "../icons/Heart";
import PlateIcon from "../icons/Plate";
import { useMemo, useState } from "react";
import StarIconFill from "../icons/star/Fill";

type TProps = {
  data: TProductItem;
  className?: string;
};

const ProductBox = ({ data: productItem, className }: TProps) => {
  const [imgIsLoaded, setImgIsLoaded] = useState(false);

  const pathname = useMemo(() => {
    return productItem?.name?.split(" ").join("-");
  }, [productItem?.name]);

  return (
    <Link
      to={`/shop/${pathname}?id=${productItem?.id}`}
      className={`product-box bg-boxBg px-[30px] py-[25px] rounded-3xl relative group cursor-pointer flex flex-col justify-between ${className}`}
      style={{ boxShadow: "2px 9px 42px 0px rgba(0,0,0,0.08)" }}
    >
      <button className="top-0 right-0 absolute w-[50px] h-[42px] rounded-tr-3xl rounded-bl-3xl bg-primaryColor flex justify-center items-center">
        <Heart outLine={true} size={16} />
      </button>
      <div className="">
        <figure>
          <img
            src={productItem?.image}
            alt={productItem?.name}
            style={imgIsLoaded ? {} : { filter: "blur(10px)" }}
            onLoad={() => setImgIsLoaded(true)}
            className="rounded-full w-[160px] h-[160px] mx-auto group-hover:scale-105 duration-300"
          />
        </figure>
        <h4 className="text-mutedColor font-bold mt-7 ">
          {productItem?.name}
        </h4>
      </div>
      <div className="flex justify-between mt-6">
        {/* Price */}
        <div className="flex items-end gap-x-1">
          <span className="text-primaryColor">$</span>
          <span className="text-titleColor text-xl font-bold">
            {productItem?.userId}.00
          </span>
        </div>

        <div className="flex gap-x-4">
          {/* Serving */}
          <div className="flex items-center gap-x-1">
            <PlateIcon size={19} />
            <span className="text-mutedColor text-xs">
              {productItem?.servings}
            </span>
          </div>
          {/* Rating */}
          <div className="flex items-center">
            <StarIconFill size={25} color="#facc15"/>
            <span className="text-mutedColor text-xs">
              {productItem?.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductBox;
