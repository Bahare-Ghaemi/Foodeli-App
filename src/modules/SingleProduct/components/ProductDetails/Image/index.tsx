import ImageLoader from "../../../../../components/base/Loading/Image";

type TProps = {
  className?: string;
  src: string;
  name: string;
};

const ProductImage = ({ name, src }: TProps) => {
  return (
    <ImageLoader
      src={src}
      alt={name}
      imgClassName={`rounded-[40px] duration-300 hover:scale-110 cursor-zoom-in`}
      className="w-full overflow-hidden rounded-[40px] min-h-[290px] md:min-h-auto"
    />
  );
};

export default ProductImage;
