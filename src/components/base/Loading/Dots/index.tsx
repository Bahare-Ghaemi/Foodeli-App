type TProps = {
  size: "xs" | "sm" | "md" | "lg";
  color?: string;
  className?: string;
};

const DotsLoading = ({ size, color = "primaryColor", className }: TProps) => {
  return (
    <span
      className={`loading loading-dots loading-${size} text-${color} ${className}`}
    ></span>
  );
};

export default DotsLoading;
