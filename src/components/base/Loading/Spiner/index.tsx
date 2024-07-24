type TProps = {
  color?: string;
  size?: string;
};

const SpinerLoading = ({
  color = "text-primaryColor",
  size = "loading-lg",
}: TProps) => {
  return <span className={`loading loading-spinner ${color} ${size}`}></span>;
};

export default SpinerLoading;
