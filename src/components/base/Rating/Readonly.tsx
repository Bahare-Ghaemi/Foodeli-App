import StarIconFill from "../icons/star/Fill";
import StarIconOutline from "../icons/star/Outline";

type TProps = {
  className?: string;
  rate: number;
  size?: number;
};

const RatingReadonly = ({ rate, size, className }: TProps) => {
  return (
    <div className={`flex gap-x-.5 items-center text-yellow-400 ${className}`}>
      {[...Array(5)].map((e, i) =>
        i + 1 <= rate ? (
          <StarIconFill size={size} />
        ) : (
          <StarIconOutline size={size} />
        )
      )}
    </div>
  );
};

export default RatingReadonly;
