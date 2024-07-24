import { useState } from "react";

type TProps = {
  src?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

const ImageLoader = ({ src, alt, className, imgClassName }: TProps) => {
  const [imgIsLoaded, setImgIsLoaded] = useState(false);
  return (
    <figure className={`${className}`}>
      <img
        src={src}
        alt={alt}
        className={`${imgIsLoaded ? "" : "blur-md"} ${imgClassName}`}
        onLoad={() => setImgIsLoaded(true)}
      />
    </figure>
  );
};

export default ImageLoader;
