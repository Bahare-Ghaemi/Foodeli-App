import { Link } from "react-router-dom";
import categoryList from "../../../../../../data/categoryList";
import { useShopStore } from "../../../../store";
import useGetUrlQuery from "../../../../../../hooks/useGetUrlQuery";
import { useEffect } from "react";

type TProps = {
  defaultChecked?: boolean
};

const FilterMyMeal = ({defaultChecked = false}: TProps) => {
  const { setSelectedMeal, setCurrentPage } = useShopStore();
  const meal = useGetUrlQuery("meal");

  useEffect(() => {
    setSelectedMeal(meal);
  }, [meal]);

  return (
    <div className="collapse collapse-arrow border-b border-primaryColor rounded-none">
      <input type="radio" name="my-accordion-2" defaultChecked={defaultChecked} />
      <div className="collapse-title p-0 flex items-center text-primaryColor">
        Filter by Meal
      </div>
      <div className="collapse-content p-0">
        <div className="meal-list flex flex-col">
          {categoryList?.map((categoryItem, index) => (
            <Link
              className={`meal-item py-2 duration-300 ${
                index < categoryList?.length - 1 && "border-b"
              } ${
                categoryItem?.title == meal
                  ? "text-primaryColor"
                  : "hover:text-titleColor"
              }`}
              to={`/shop?meal=${categoryItem?.title}`}
              onClick={() => setCurrentPage(1)}
              key={categoryItem?.id}
            >
              {categoryItem?.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterMyMeal;
