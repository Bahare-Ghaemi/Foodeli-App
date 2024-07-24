import CallToActionBtn from "../../../../components/base/Buttons/CallToAction";
import PlayIcon from "../../../../components/base/icons/Play";
import ImageLoader from "../../../../components/base/Loading/Image";

type TProps = {
  className?: string;
};

const Landing = ({ className }: TProps) => {
  return (
    <section
      className={`w-10/12 mx-auto flex flex-col gap-y-10 md:flex-row justify-between min-h-[calc(100vh-122px)] md:h-[calc(100vh-122px)] ${className}`}
    >
      {/* Left Side */}
      <div className="w-full md:w-6/12 flex flex-col justify-center">
        <h1 className="text-titleColor text-5xl md:text-[62px] leading-[60px] md:leading-normal font-extrabold">
          Dive into Delights Of Delectable{" "}
          <span className="text-primaryColor">Food</span>
        </h1>
        <p className="text-mutedColor text-sm md:text-lg w-10/12 mt-[25px] md:mt-[40px]">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>

        {/* Action buttons */}
        <div className="flex gap-x-[35px] items-center mt-10 md:mt-[50px]">
          <CallToActionBtn
            width={150}
            height={60}
            text="Order Now"
            textSize="text-md"
            hasShadow={true}
            hoverAnimate={true}
            className="hidden md:flex"
          />
          <CallToActionBtn
            width={130}
            height={50}
            text="Order Now"
            textSize="text-sm"
            hasShadow={true}
            hoverAnimate={true}
            className="md:hidden"
          />
          <button className="flex items-center gap-x-5 group">
            <span className="whitespace-nowrap text-sm md:text-md group-hover:text-primaryColor duration-300">
              Watch Video
            </span>
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white shadow-lg group-hover:scale-90 duration-300">
              <PlayIcon />
            </div>
          </button>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-full md:w-6/12">
        <ImageLoader
          src="/assets/images/landing-img.svg"
          alt="landing-img"
          className="h-full hidden md:flex justify-end"
          imgClassName="h-full"
        />
        <ImageLoader
          src="/assets/images/Home/about-us-res.svg"
          alt="landing-img"
          className="h-full md:hidden justify-end"
          imgClassName="h-full"
        />
      </div>
    </section>
  );
};

export default Landing;
