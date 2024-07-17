import { Swiper } from "swiper/react";
import { SwiperModule } from "swiper/types";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "./styles.css";

type TBreakPoint = {
  slidesPerView: number;
  spaceBetween: number;
};

type TProps = {
  pagination?: boolean;
  navigation?: boolean;
  modules: SwiperModule[];
  loop: boolean;
  break320: TBreakPoint;
  break1280: TBreakPoint;
  break1500: TBreakPoint;
  children: React.ReactNode;
  autoplay: boolean;
};

const Slider = ({
  pagination,
  navigation,
  autoplay,
  loop,
  modules,
  break320,
  break1280,
  break1500,
  children,
}: TProps) => {
  return (
    <Swiper
      pagination={
        pagination
          ? {
              clickable: true,
            }
          : false
      }
      autoplay={autoplay ? { delay: 2000, pauseOnMouseEnter: true } : false}
      modules={modules}
      loop={loop}
      navigation={navigation}
      className="mySwiper"
      breakpoints={{ 320: break320, 1280: break1280, 1500: break1500 }}
      // effect={"fade"}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
