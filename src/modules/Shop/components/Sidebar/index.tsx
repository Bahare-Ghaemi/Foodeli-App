import { useShopStore } from "../../store";
import FilterMyMeal from "./Filter/ByMeal";
import FilterByPrice from "./Filter/ByPrice";
import FilterByTag from "./Filter/ByTag";

type TProps = {
  className?: string;
};

const ShopSidebar = ({ className }: TProps) => {
  const {selectedMeal,selectedTag} = useShopStore()

  return (
    <aside className={`${className}`}>
      <FilterMyMeal defaultChecked={selectedMeal ? true : true}/>
      <FilterByTag defaultChecked={selectedTag ? true : false}/>
      <FilterByPrice />
    </aside>
  );
};

export default ShopSidebar;
