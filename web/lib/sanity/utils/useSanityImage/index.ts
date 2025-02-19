import {
  useNextSanityImage,
  UseNextSanityImageBuilder,
  UseNextSanityImageOptions,
} from "next-sanity-image";
import { getClient } from "../getClient";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const defaultImageBuilder: UseNextSanityImageBuilder = (
  imageUrlBuilder,
  options
) => {
  return imageUrlBuilder
    .width(
      options.width || Math.min(options.originalImageDimensions.width, 1920)
    )
    .quality(options.quality || 100)
    .fit("clip");
};
export const useSanityImage = function (
  img: SanityImageSource,
  options?: UseNextSanityImageOptions
) {
  const client = getClient();
  const { alt, caption } = img as { alt: string, caption: string } || {}
  try {
    const imageProps = useNextSanityImage(client!, img, {
      ...options,
      imageBuilder: options?.imageBuilder ?? defaultImageBuilder,
    });
    return { ...imageProps, alt: alt ?? "", caption: caption ?? "" };
  } catch (error) {
    // TODO: catch error
    return null;
  }
};
