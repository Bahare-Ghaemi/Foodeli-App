import TUser from "../../../types/user";

type TLoginStore = {
  loggedInUser: TUser | null;

  setLoggedInUser: (user: TUser | null) => void;
};
export default TLoginStore;
