import { TIcon } from "../../../types/icon";

const LoginIcon = ({color = "#F2F2F2" ,size  = 17}: TIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 15.5H7.5C7.23478 15.5 6.98043 15.3946 6.79289 15.2071C6.60536 15.0196 6.5 14.7652 6.5 14.5V13H7.5V14.5H13.5V2.5H7.5V4H6.5V2.5C6.5 2.23478 6.60536 1.98043 6.79289 1.79289C6.98043 1.60536 7.23478 1.5 7.5 1.5H13.5C13.7652 1.5 14.0196 1.60536 14.2071 1.79289C14.3946 1.98043 14.5 2.23478 14.5 2.5V14.5C14.5 14.7652 14.3946 15.0196 14.2071 15.2071C14.0196 15.3946 13.7652 15.5 13.5 15.5Z"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
      />
      <path
        d="M7.795 10.795L9.585 9H2.5V8H9.585L7.795 6.205L8.5 5.5L11.5 8.5L8.5 11.5L7.795 10.795Z"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
      />
    </svg>
  );
};

export default LoginIcon;
