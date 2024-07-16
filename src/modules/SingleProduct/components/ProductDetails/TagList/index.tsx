import { Link } from "react-router-dom";

type TProps = {
  data: string[];
  className?: string;
};

const TagListProduct = ({ data: tagList, className }: TProps) => {
  return (
    <div className={`${className} flex gap-x-4`}>
      <span className="text-slate-500 text-sm">Tags:</span>
      <div className="flex flex-wrap gap-2 items-center mt-1">
        {tagList?.map((tagItem) => (
          <Link to={`/shop?tag=${tagItem}`} className="text-xs hover:underline">
            #{tagItem}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagListProduct;
