import { useMemo } from "react";
import Slider from "../../../../components/base/Slider";
import { useShopStore } from "../../../Shop/store";
import ProductBox from "../../../../components/base/ProductBox";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import ProductBoxSkeleton from "../../../../components/base/Loading/ProductBox";
import "./styles.css";

type TProps = {
  className?: string;
  isLoading: boolean;
};

const BestDishList = ({ isLoading, className }: TProps) => {
  const { productList } = useShopStore();

  const bestDishList = useMemo(() => {
    return productList?.filter((productItem) => productItem?.rating >= 4.7);
  }, [productList]);

  return (
    <section
      className={`best-dishes py-14 ${className}`}
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 148, 1, 0.05) 0%, rgba(255, 237, 211, 0) 100%)",
      }}
    >
      <div className="w-10/12 mx-auto">
        <span className="text-primaryColor">Special Dishes</span>
        <h2 className="text-3xl md:text-4xl mt-3 md:mt-4 font-bold leading-[38px] md:leading-[48px]">
          Standout Dishes <br /> From Our Menu
        </h2>
        <div className="">
          {isLoading ? (
            <>
              <div className="hidden md:grid grid-cols-4 gap-x-4 mt-[60px]">
                {[...Array(4)].map((i) => (
                  <ProductBoxSkeleton key={i} />
                ))}
              </div>
              <div className="md:hidden">
                <ProductBoxSkeleton className="w-full mt-[60px]" />
              </div>
            </>
          ) : (
            <Slider
              navigation
              break320={{ slidesPerView: 1, spaceBetween: 0 }}
              break1280={{ slidesPerView: 4, spaceBetween: 20 }}
              break1500={{ slidesPerView: 4, spaceBetween: 20 }}
              loop
              modules={[Navigation]}
              autoplay={false}
            >
              {bestDishList?.map((bestDishItem) => (
                <SwiperSlide key={bestDishItem?.id}>
                  <ProductBox data={bestDishItem} className="mx-4 md:mx-0" />
                </SwiperSlide>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </section>
  );
};

export default BestDishList;
