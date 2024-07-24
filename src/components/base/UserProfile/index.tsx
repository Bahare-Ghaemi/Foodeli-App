import { Link } from "react-router-dom";
import { useLoginStore } from "../../../modules/Login/store";
import ImageLoader from "../Loading/Image";

const UserProfile = () => {
  const { loggedInUser } = useLoginStore();

  return (
    <div className="dropdown dropdown-end dropdown-hover">
      <button
        tabIndex={0}
        role="button"
        className="btn px-2 py-0 -mr-2 border-2 border-primaryColor hover:border-primaryColor hover:bg-primaryColor group rounded-full bg-backgroundColor"
      >
        <figure>
          <ImageLoader
            src={loggedInUser?.image}
            alt="avatar"
            className="w-8 h-8 md:w-10 md:h-10"
          />
        </figure>
        <div className="hidden md:flex items-center text-sm text-primaryColor">
          <span className="group-hover:text-white">
            {loggedInUser?.firstName}
          </span>
          <span className="group-hover:text-white">
            {loggedInUser?.lastName}
          </span>
        </div>
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-backgroundColor rounded-box z-[1] w-52 p-2 shadow-lg"
      >
        <li>
          <Link to={"#"}>Dashboard</Link>
        </li>
        <li>
          <Link to={"#"}>Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
