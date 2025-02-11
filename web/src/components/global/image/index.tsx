import { default as NextImage, ImageProps } from "next/image";

import SanityImage from "../sanityImage";
import { CustomImageType } from "../../../../lib/sanity/types";

const Image: React.FC<
  Omit<ImageProps, "src" | "alt"> & {
    src: string | CustomImageType;
    alt: string;
  }
> = ({ src, quality, alt, ...props }) => {
  switch (typeof src) {
    case "object":
      return <SanityImage src={src} {...props} />;
    default:
      return (
        <NextImage src={src} alt={alt || "Image"} quality={100} {...props} />
      );
  }
};
export default Image;
