import CallToActionBtn from "../../../../components/base/Buttons/CallToAction";

type TProps = {
  className?: string;
  price: number;
};

const AddToCart = ({ className, price }: TProps) => {
  return (
    <div className={`${className} flex gap-x-10`}>
      {/* Price */}
      <div className="flex items-center gap-x-1">
        <span className="text-slate-400 text-xl mt-2.5">$</span>
        <span className="text-[32px] font-bold text-titleColor">{price}.00</span>
      </div>
      {/* Buttons */}
      <div className="">
        <CallToActionBtn
          width={120}
          height={50}
          text="Add To Cart"
        //   hasShadow
          hoverAnimate
        />
      </div>
    </div>
  );
};

export default AddToCart;
