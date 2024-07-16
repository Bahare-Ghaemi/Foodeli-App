import { Link } from "react-router-dom";
import categoryList from "../../../../../../data/categoryList";

type TProps = {};

const FilterMyMeal = ({}: TProps) => {
  return (
    <div className="collapse collapse-arrow border-b border-primaryColor rounded-none">
      <input type="radio" name="my-accordion-2" defaultChecked />
      <div className="collapse-title p-0 flex items-center text-primaryColor">Filter by Meal</div>
      <div className="collapse-content p-0">
        <div className="meal-list flex flex-col">
          {categoryList?.map((categoryItem, index) => (
            <Link
              className={`meal-item  py-2 ${
                index < categoryList?.length - 1 && "border-b"
              }`}
              to={"#"}
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
