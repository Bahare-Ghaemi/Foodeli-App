import useCheckAuth from "../../../modules/Auth/hooks/useCheckAuth";
import { useLoginStore } from "../../../modules/Login/store";
import BasketBtn from "../../base/Buttons/Basket";
import LoginBtn from "../../base/Buttons/Login";
import SearchBtn from "../../base/Buttons/Search";
import Drawer from "../../base/Drawer";
import FoodeliLogo from "../../base/Logo";
import ToggleTheme from "../../base/ToggleTheme";
import Navigation from "./Navigation";
import SpinerLoading from "../../base/Loading/Spiner";
import UserProfile from "../../base/UserProfile";

const Header = () => {
  const { getLoggedInUserLoading } = useCheckAuth();
  const { loggedInUser } = useLoginStore();

  return (
    <header className="flex justify-center bg-backgroundColor">
      <div className="w-10/12 mx-auto flex items-center justify-between py-[35px]">
        <FoodeliLogo />
        <Navigation className="hidden md:block" />
        <div className="flex gap-x-4 md:gap-x-8 items-center">
          <ToggleTheme className="hidden md:flex" />
          <SearchBtn className="hidden md:block" />
          <BasketBtn />
          {loggedInUser ? (
            getLoggedInUserLoading ? (
              <SpinerLoading size="loading-md" />
            ) : (
              <UserProfile />
            )
          ) : (
            <LoginBtn className="hidden md:flex" />
          )}
          <Drawer className="ml-2 md:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;
