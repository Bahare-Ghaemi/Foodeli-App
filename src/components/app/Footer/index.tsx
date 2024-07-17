import { Link } from "react-router-dom";
import FacebookIcon from "../../base/icons/Facebook";
import InstagramIcon from "../../base/icons/Instagram";
import TwitterIcon from "../../base/icons/Twitter";
import FoodeliLogo from "../../base/Logo";
import CallToActionBtn from "../../base/Buttons/CallToAction";

const socialList = [
  { icon: <FacebookIcon />, link: "#" },
  { icon: <InstagramIcon />, link: "#" },
  { icon: <TwitterIcon />, link: "#" },
];

const Summary = ({ className }: any) => {
  return (
    <div className={`${className}`}>
      <FoodeliLogo width={45} height={45} />
      <p className="text-sm text-mutedColor mt-5">
        Savor the artistry where every dish is a culinary masterpiece
      </p>
      <div className="flex gap-x-5 items-center mt-7">
        {socialList?.map((socialItem) => (
          <Link
            to={socialItem?.link}
            className="text-primaryColor hover:scale-110 duration-300"
          >
            {socialItem?.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navigation = ({ className }: any) => {
  return (
    <div className={`${className}`}>
      <h5 className="text-titleColor mb-5 font-bold">Useful links</h5>
      <nav>
        <ul className="space-y-4 text-sm">
          <li>
            <Link to={"#"} className="text-gray-500">
              Shop
            </Link>
          </li>
          <li>
            <Link to={"#"} className="text-gray-500">
              Events
            </Link>
          </li>
          <li>
            <Link to={"#"} className="text-gray-500">
              About us
            </Link>
          </li>
          <li>
            <Link to={"#"} className="text-gray-500">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const ContactUs = ({ className }: any) => {
  return (
    <div className={`${className}`}>
      <h5 className="text-titleColor mb-5 font-bold">Contact Us</h5>
      <nav>
        <ul className="space-y-4 text-sm">
          <li className="text-gray-500">foodeli@gmail.com</li>
          <li className="text-gray-500">+64 958 248 966</li>
          <li className="text-gray-500">+64 958 248 966</li>
        </ul>
      </nav>
    </div>
  );
};

const Subscribtion = ({ className }: any) => {
  return (
    <div className={`${className}`}>
      <h5 className="text-titleColor mb-5 font-bold">Get in touch</h5>
      <div className="flex flex-col gap-y-1.5 text-sm text-mutedColor">
        <span>Question or feedback?</span>
        <span>We’d love to hear from you</span>
      </div>
      <div className="mt-5 flex gap-x-2">
        <input
          type="text"
          placeholder="Email"
          className="bg-[#dddddd] rounded-full px-4 py-2 focus:outline-0 w-7/12"
        />
        <CallToActionBtn
          text="Subscribe"
          width={118}
          height={50}
          hasShadow
          className="hidden md:flex"
        />
        <CallToActionBtn
          text="Subscribe"
          width={90}
          height={40}
          hasShadow
          className="md:hidden w-5/12"
        />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer
      className="py-16 mt-[150px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 148, 1, 0.05) 0%, rgba(255, 237, 211, 0) 100%)",
      }}
    >
      <div className="w-10/12 mx-auto flex flex-wrap gap-y-14 justify-between">
        <Summary className="w-full md:w-3/12" />
        <Navigation className="w-6/12 md:w-2/12" />
        <ContactUs className="w-6/12 md:w-2/12" />
        <Subscribtion />
      </div>
    </footer>
  );
};

export default Footer;
