import CallToActionBtn from "../../../../components/base/Buttons/CallToAction";

type TProps = {
  className?: string;
};

const Application = ({ className }: TProps) => {
  return (
    <div className={`bg-orange-100 rounded-[48px] pt-14 md:pt-20 ${className}`}>
      <div className="flex flex-col gap-y-8 md:flex-row w-10/12 mx-auto md:justify-between">
        <div className="w-full md:w-5/12 flex flex-col md:mt-11">
          <span className="text-primaryColor block mb-2">DOWNLOAD APP</span>
          <h4 className="text-black text-3xl md:text-[40px] font-bold leading-[45px] md:leading-[55px]">
            Get Started With <br /> Foodeli Today!
          </h4>
          <p className="text-sm text-mutedColor mt-3 md:mt-5 mb-7">
            Discover food wherever and whenever and get your food delivered
            quickly.
          </p>
          <CallToActionBtn
            text="Get The App"
            width={150}
            height={55}
            hoverAnimate
            className="hidden md:flex"
          />
          <CallToActionBtn
            text="Get The App"
            width={130}
            height={45}
            hoverAnimate
            className="md:hidden"
          />
        </div>
        <figure className="">
          <img src="/assets/images/Home/get-app.svg" alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Application;
