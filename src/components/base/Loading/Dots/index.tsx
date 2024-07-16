type TProps = {
  size: "xs" | "sm" | "md" | "lg";
};

const DotsLoading = ({ size }: TProps) => {
  return (
    <span
      className={`loading loading-dots loading-${size} text-primaryColor`}
    ></span>
  );
};

export default DotsLoading;
