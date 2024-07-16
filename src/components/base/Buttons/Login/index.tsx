import LoginIcon from "../../icons/Login";
import CallToActionBtn from "../CallToAction";

type TProps = {
  className?: string;
  width?: number;
  height?: number;
};

const LoginBtn = ({ width = 118, height = 52, className }: TProps) => {
  return (
    <CallToActionBtn
      className={`${className}`}
      width={width}
      height={height}
      text="Login"
      navigateTo="/login"
      icon={<LoginIcon />}
    />
  );
};

export default LoginBtn;
