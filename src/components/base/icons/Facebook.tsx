import { TIcon } from "../../../types/icon";

const FacebookIcon = ({ color = "currentColor", width = 9, height = 16 }: TIcon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 5.97668H9V8.96502H6V15.9378H3V8.96502H0L0 5.97668H3V4.72656C3 3.54218 3.374 2.04602 4.118 1.22821C4.862 0.408406 5.791 0 6.904 0L9 0V2.98834H6.9C6.402 2.98834 6 3.38878 6 3.88384V5.97668Z"
        fill={color}
      />
    </svg>
  );
};

export default FacebookIcon;
