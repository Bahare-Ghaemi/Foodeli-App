import CallToActionBtn from "../../../../components/base/Buttons/CallToAction";
import SocialMediaBox from "../../../../components/base/SocialMediaBox";

type TProps = {
  className?: string;
};

const AboutUs = ({className}: TProps) => {
  return (
    <section
      className={`py-12 md:py-[92px] ${className}`}
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 148, 1, 0.05) 0%, rgba(255, 237, 211, 0) 100%)",
      }}
    >
      <div className="w-10/12 mx-auto flex flex-col-reverse gap-y-11 md:flex-row items-center">
        {/* Left Side */}
        <figure className="w-full md:w-6/12">
          <img
            src="/assets/images/Home/about-us.svg"
            alt=""
            className="hidden md:block rotate-180"
          />
          <img
            src="/assets/images/landing-img.svg"
            alt=""
            className="md:hidden"
          />
        </figure>
        {/* Right Side */}
        <div className="w-full md:w-5/12">
          <span className="text-base md:text-2xl text-primaryColor md:font-semibold">
            About us
          </span>
          <h2 className="text-4xl md:text-5xl leading-[50px] md:leading-[65px] font-bold mt-4 md:mt-6 mb-4">
            Simple Way of Eating Delicious
          </h2>
          <p className="text-sm md:text-base">
            This is a type of resturent which typically serves food and drink,
            in addition to light refreshments such as baked goods or snacks. The
            term comes frome the rench word meaning food
          </p>
          <div className="flex justify-between md:gap-x-10 items-center mt-10">
            <CallToActionBtn
              width={150}
              height={60}
              text="Explore More"
              hoverAnimate
              hasShadow
              navigateTo="/about-us"
              className="hidden md:flex"
            />
            <CallToActionBtn
              width={120}
              height={50}
              text="Explore More"
              hoverAnimate
              hasShadow
              navigateTo="/about-us"
              className="md:hidden"
            />
            <SocialMediaBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
