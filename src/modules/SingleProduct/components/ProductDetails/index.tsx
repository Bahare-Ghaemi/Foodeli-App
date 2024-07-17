import Breadcrumbs from "../../../../components/base/Beadcrumbs";
import TProductItem from "../../../../types/product";
import PlateIcon from "../../../../components/base/icons/Plate";
import PersonIcon from "../../../../components/base/icons/Person";
import CategoryList from "./CategoryList";
import AddToCart from "../AddToCart";
import TagListProduct from "./TagList";
import ProductImage from "./Image";
import TabsProduct from "./Tabs";
import StarIconFill from "../../../../components/base/icons/star/Fill";

type TProps = {
  className?: string;
  data: TProductItem;
};

const ProductDetail = ({ data: productItem, className }: TProps) => {
  return (
    <>
      <section className={`${className} flex flex-col md:flex-row gap-y-6 gap-x-10`}>
        <div className="w-full md:w-5/12">
          <ProductImage name={productItem?.name} src={productItem?.image} />
        </div>
        <div className="w-full md:w-7/12">
          <Breadcrumbs currTitle={productItem?.name} prevLink="shop" />
          <h1 className="text-titleColor font-bold text-3xl mt-5 leading-[43px]">
            {productItem?.name}
          </h1>
          <div className="flex justify-between items-center w-full md:w-3/12 mt-6">
            {/* Servings */}
            <div className="flex gap-x-2 items-center">
              <PlateIcon size={21} />
              <span className="text-sm text-slate-400">
                {productItem?.servings}
              </span>
            </div>
            {/* Rating */}
            <div className="flex gap-x-2 items-center">
              <StarIconFill size={25} color="#facc15"/>
              <span className="text-sm text-slate-400">
                {productItem?.rating}
              </span>
            </div>
            {/* Reviews */}
            <div className="flex gap-x-2 items-center">
              <PersonIcon />
              <span className="text-sm text-slate-400">
                {productItem?.reviewCount}
              </span>
            </div>
          </div>
          {/* Details Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7 mt-12">
            {/* Left */}
            <div className="text-sm">
              <hr />
              <div className="py-2 flex justify-between items-center">
                <span className="text-slate-400">Preparation Time</span>
                <span className="text-slate-500">
                  {productItem?.prepTimeMinutes} min
                </span>
              </div>
              <hr />
              <div className="py-2 flex justify-between items-center">
                <span className="text-slate-400">Cook Time</span>
                <span className="text-slate-500">
                  {productItem?.cookTimeMinutes} min
                </span>
              </div>
              <hr />
            </div>
            {/* Right */}
            <div className="text-sm">
              <hr />
              <div className="py-2 flex justify-between items-center">
                <span className="text-slate-400">Difficulty</span>
                <span className="text-slate-500">
                  {productItem?.difficulty}
                </span>
              </div>
              <hr />
              <div className="py-2 flex justify-between items-center">
                <span className="text-slate-400">Calories Per Serving</span>
                <span className="text-slate-500">
                  {productItem?.caloriesPerServing} cal
                </span>
              </div>
              <hr />
            </div>
          </div>
          <CategoryList data={productItem?.mealType} className="mt-14 md:mt-9" />
          <AddToCart price={productItem?.userId} className="mt-10" />
          <TagListProduct data={productItem?.tags} className="mt-20" />
        </div>
      </section>
      <section>
        <TabsProduct
          className="w-10/12 mx-auto mt-16"
          ingredients={productItem?.ingredients}
          instructions={productItem?.instructions}
        />
      </section>
    </>
  );
};

export default ProductDetail;
