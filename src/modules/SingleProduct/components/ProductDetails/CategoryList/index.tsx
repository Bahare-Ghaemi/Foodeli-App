import { Link } from "react-router-dom";

type TProps = {
  data: string[];
  className?: string;
};

const CategoryList = ({ data: categoryList, className }: TProps) => {
  return (
    <div className={`${className} flex gap-x-4`}>
      <span className="text-slate-500 text-sm">Category:</span>
      <div className="flex gap-x-1.5">
        {categoryList?.map((categoryItem) => (
          <Link
            to={`/shop?category=${categoryItem}`}
            className="text-xs text-gray-400 bg-gray-200 rounded-full px-2 py-[3px] block"
            key={categoryItem}
          >
            {categoryItem}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
