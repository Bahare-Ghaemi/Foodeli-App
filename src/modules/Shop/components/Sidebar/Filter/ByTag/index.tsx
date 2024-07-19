import useGetTagList from "../../../../hooks/useGetTagList";
import DotsLoading from "../../../../../../components/base/Loading/Dots";
import { useShopStore } from "../../../../store";
import useGetUrlQuery from "../../../../../../hooks/useGetUrlQuery";
import { useEffect } from "react";
import { Link } from "react-router-dom";

type TTagsProps = {
  data: string[];
};

const TagList = ({ data: tagList }: TTagsProps) => {
  const { setSelectedTag, setCurrentPage } = useShopStore();
  const tag = useGetUrlQuery("tag");

  useEffect(() => {
    setSelectedTag(tag);
    setCurrentPage(1)
  }, [tag]);

  return (
    <div className="flex gap-2 flex-wrap">
      {tagList?.map((tagItem) => (
        <Link
          to={`/shop?tag=${tagItem}`}
          key={tagItem}
          className={`inline-block text-[13px] text-gray-400 border-[1.5px] border-gray-400 px-1.5 py-.5 rounded-md duration-300 ${
            tag == tagItem
              ? "bg-primaryColor text-white border-primaryColor"
              : "hover:border-primaryColor hover:text-primaryColor"
          }`}
        >
          {tagItem}
        </Link>
      ))}
    </div>
  );
};

const FilterByTag = () => {
  const { tagList, getTagsIsLoading, getTagsIsError } = useGetTagList();

  return (
    <div className="collapse collapse-arrow border-b border-primaryColor rounded-none">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title p-0 flex items-center text-primaryColor">
        Filter by Tag
      </div>
      <div className="collapse-content p-0">
        <div
          className={`max-h-[140px] overflow-y-auto ${
            getTagsIsLoading && "flex justify-center items-center"
          }`}
        >
          {getTagsIsLoading ? (
            <DotsLoading size="sm" />
          ) : getTagsIsError ? (
            <span className="text-red-500 text-sm">
              there is an error while fetching tags
            </span>
          ) : (
            <TagList data={tagList} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterByTag;
