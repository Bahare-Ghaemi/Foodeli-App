import { useState } from "react";

type TProps = {
  className?: string;
  src: string;
  name: string;
};

const ProductImage = ({ name, src, className }: TProps) => {
  const [imgIsLoaded, setImgIsLoaded] = useState(false);
  
  return (
    <figure className="w-full overflow-hidden rounded-[40px] min-h-[290px] md:min-h-auto">
      <img
        src={src}
        alt={name}
        className={`rounded-[40px] duration-300 hover:scale-110 cursor-zoom-in ${
          imgIsLoaded ? "" : "blur-md"
        }`}
        onLoad={() => setImgIsLoaded(true)}
      />
    </figure>
  );
};

export default ProductImage;
