import { Autoplay } from "swiper/modules";
import Slider from "../../../../components/base/Slider";
import testimonialList from "../../../../data/testimonials";
import TestimonialItem from "./Item";
import { SwiperSlide } from "swiper/react";

type TProps = {
  className?: string;
};

const Testimonials = ({ className }: TProps) => {
  return (
    <div
      className={`testimonials flex flex-col md:flex-row gap-x-[50px] ${className}`}
    >
      {/* Left */}
      <div className="w-full md:w-6/12">
        <figure>
          <img src="/assets/images/Home/testimonial.svg" alt="model" />
        </figure>
      </div>
      {/* Right */}
      <div className="w-full md:w-6/12 flex flex-col justify-center">
        <span className="text-primaryColor">WHAT THEY SAY</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-[40px] md:leading-[47px]">
          What Our Customers <br /> Say About Us
        </h2>
        <div className="mt-7 w-full md:w-7/12">
          <Slider
            loop
            modules={[Autoplay]}
            autoplay
            break320={{slidesPerView: 1, spaceBetween: 0}}
            break1280={{ slidesPerView: 1, spaceBetween: 0 }}
            break1500={{ slidesPerView: 1, spaceBetween: 0 }}
          >
            {testimonialList?.map((testimonial) => (
              <SwiperSlide>
                <TestimonialItem data={testimonial} key={testimonial?.name}/>
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
