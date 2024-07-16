import RatingReadonly from "../../../../../components/base/Rating/Readonly";

export type TTestimonial = {
  name: string;
  role: string;
  rate: number;
  avatar: string;
  comment: string;
};

type TProps = {
  data: TTestimonial;
};

const TestimonialItem = ({ data: testimonial }: TProps) => {
  return (
    <div className="">
      {/* Author */}
      <div className="flex items-center gap-x-[14px]">
        <figure>
          <img
            src={testimonial?.avatar}
            className="w-[52px] h-[52px]"
            alt={testimonial?.name}
          />
        </figure>
        <div className="flex flex-col gap-y-[3px]">
          <span className="text-sm text-titleColor">{testimonial?.name}</span>
          <span className="text-xs text-mutedColor">{testimonial?.role}</span>
        </div>
      </div>
      {/* Comment */}
      <p className="text-sm mt-4">{testimonial?.comment}</p>
      {/* Rating */}
      <div className="flex items-center gap-x-2 mt-3">
        <RatingReadonly
          rate={Math.floor(testimonial?.rate)}
          size={26}
          className=""
        />
        <span className="text-gray-300 text-xs">({testimonial?.rate})</span>
      </div>
    </div>
  );
};

export default TestimonialItem;
