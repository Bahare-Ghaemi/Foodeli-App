import { TIcon } from "../../../types/icon";

const HamburgerMenu = ({ color = "currentColor", size = 18 }: TIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M7.95 11.95h32m-32 12h32m-32 12h32"
      />
    </svg>
  );
};

export default HamburgerMenu;
