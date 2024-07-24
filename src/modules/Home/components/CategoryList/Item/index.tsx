import { Link } from "react-router-dom";
import TCategoryItem from "../../../../../types/category";

type TProps = {
  data: TCategoryItem;
  className?: string;
};

const CategoryItem = ({ data: categoryItem, className }: TProps) => {
  return (
    <Link
      className={`category-item bg-boxBg flex flex-col gap-y-3 items-center my-7 py-6 rounded-3xl hover:scale-[95%] duration-300 ${className}`}
      style={{ boxShadow: "2px 10px 30px 0px rgba(0,0,0,0.1" }}
      to={`/shop?meal=${categoryItem?.title}`}
    >
      {/* Image */}
      <div className="w-28 h-28 rounded-full bg-[#ff95016e] flex justify-center items-center">
        <figure>
          <img
            src={categoryItem?.src}
            alt={categoryItem?.title}
            className="w-[100px] h-20"
          />
        </figure>
      </div>
      <h5 className="text-titleColor">{categoryItem?.title}</h5>
    </Link>
  );
};

export default CategoryItem;
