type TProps = {
  className?: string;
};

const ProductBoxSkeleton = ({ className }: TProps) => {
  return (
    <div
      className={`animate-pulse shadow-md shadow-skeletonShadowColor relative group cursor-pointer bg-boxBg rounded-3xl px-8 py-7 inline-block ${className}`}
    >
      <div className="absolute top-0 right-0 w-12 h-10 rounded-tr-3xl bg-skeletonDetailsColor flex justify-center items-center rounded-bl-3xl"></div>
      <div className="w-40 h-40 mx-auto bg-skeletonDetailsColor rounded-full mt-5"></div>
      <div className="h-3.5 bg-skeletonDetailsColor rounded-full w-3/4 mt-7"></div>
      <div className="h-2.5 bg-skeletonDetailsColor rounded-full w-full mt-5"></div>
    </div>
  );
};

export default ProductBoxSkeleton;
