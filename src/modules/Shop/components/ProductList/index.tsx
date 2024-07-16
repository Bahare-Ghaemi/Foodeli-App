import ProductBoxSkeleton from "../../../../components/base/Loading/ProductBox";
import ProductBox from "../../../../components/base/ProductBox";
import { useShopStore } from "../../store";

type TProps = {
  className?: string;
  isLoading: boolean;
};

const ProductList = ({ className, isLoading }: TProps) => {
  const { productList } = useShopStore();

  return (
    <div className={`product-list ${className}`}>
      {isLoading
        ? [...Array(9)].map((e, i) => <ProductBoxSkeleton key={i}/>)
        : productList?.map((productItem) => (
            <ProductBox data={productItem} key={productItem?.id} />
          ))}
    </div>
  );
};

export default ProductList;
