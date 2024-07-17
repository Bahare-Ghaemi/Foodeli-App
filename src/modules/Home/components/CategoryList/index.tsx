import { Autoplay, Pagination } from "swiper/modules";
import Slider from "../../../../components/base/Slider";
import categoryList from "../../../../data/categoryList";
import { SwiperSlide } from "swiper/react";
import CategoryItem from "./Item";
import "./styles.css";

type TProps = {
  className?: string;
};

const CategoryList = ({ className }: TProps) => {
  return (
    <section className={`${className}`}>
      <span className="text-primaryColor block text-center">
        Customer Favorites
      </span>
      <h2 className="font-bold text-3xl md:text-4xl text-center mt-[10px] mb-2 md:mb-[30px]">
        Popular Catagories
      </h2>
      <div className="category-list">
        <Slider
          pagination={true}
          autoplay={true}
          modules={[Pagination, Autoplay]}
          loop={true}
          break1500={{ slidesPerView: 5, spaceBetween: 25 }}
          break1280={{ slidesPerView: 4, spaceBetween: 20 }}
          break320={{ slidesPerView: 1, spaceBetween: 30 }}
        >
          {categoryList?.map((categoryItem) => (
            <SwiperSlide key={categoryItem?.id} >
              <CategoryItem data={categoryItem} className="mx-6 md:mx-0"/>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CategoryList;
