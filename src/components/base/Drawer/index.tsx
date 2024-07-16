import { Link, useLocation } from "react-router-dom";
import navList from "../../../data/navList";
import HamburgerMenu from "../icons/Hamburger";
import FoodeliLogo from "../Logo";
import ToggleTheme from "../ToggleTheme";
import { useMemo } from "react";
import LoginBtn from "../Buttons/Login";
import SearchInput from "../Inputs/Search";

type TProps = {
  className?: string;
};

const Drawer = ({ className }: TProps) => {
  const location = useLocation();

  const pathname = useMemo(() => {
    return location.pathname;
  }, [location.pathname]);
  return (
    <div className={`drawer z-10 ${className}`}>
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button flex justify-center items-center rounded-lg bg-primaryColor border-0 w-[35px] h-[35px] p-0"
        >
          <HamburgerMenu size={25} color="white" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-boxBg min-h-full w-72 p-8 flex flex-col justify-between">
          <div className="">
            <div className="flex justify-between items-center">
              <FoodeliLogo />
              <ToggleTheme />
            </div>
            <SearchInput className="mt-10"/>
            <ul className="mt-10 flex flex-col gap-y-5">
              {navList?.map((navItem) => (
                <li key={navItem?.title}>
                  <Link
                    to={navItem?.link}
                    className={`${
                      navItem?.link == pathname
                        ? "text-primaryColor"
                        : "text-mutedColor"
                    }`}
                  >
                    {navItem?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <LoginBtn width={150} className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
