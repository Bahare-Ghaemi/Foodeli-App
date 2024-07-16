import { Link } from "react-router-dom";
import FacebookIcon from "../icons/Facebook";
import InstagramIcon from "../icons/Instagram";
import TwitterIcon from "../icons/Twitter";

const socialList = [
  { icon: <FacebookIcon />, link: "#" },
  { icon: <InstagramIcon />, link: "#" },
  { icon: <TwitterIcon />, link: "#" },
];

const SocialMediaBox = () => {
  return (
    <ul className="flex items-center gap-x-[15px]">
      {socialList?.map((socialItem, index) => (
        <li key={index}>
          <Link
            to={socialItem.link}
            target="_blank"
            className="rounded-full w-[45px] h-[45px] flex justify-center items-center shadow-xl hover:shadow-md duration-300"
          >
            {socialItem?.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaBox;
