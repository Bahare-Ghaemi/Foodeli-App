import FilterMyMeal from "./Filter/ByMeal";
import FilterByTag from "./Filter/ByTag";

type TProps ={
  className?: string
}

const ShopSidebar = ({className}: TProps) => {
  return <aside className={`${className}`}>
    <FilterMyMeal/>
    <FilterByTag/>
  </aside>;
};

export default ShopSidebar;
