import { PortableTextBlock, SanityImageAssetDocument } from "next-sanity";
import { LinkType } from "./linkType";


{/* Button Variant */ }

export type ButtonVariantType = "pinkPurple" | "darkPink";

{/* Rich Text Link */ }

export type RichTextLinkType = {
  _type: "link";
  link?: LinkType;
};

{/* Rich Text */ }

export type RichTextType = {
  _type: "richText";
  custom_rich_text?: PortableTextBlock[];
  richTextLinks?: RichTextLinkType[];
};


{/* Label Link */ }

export type LabelLinkType = {
  _type: "labelLink";
  label?: string;
  link?: LinkType;
};

{/* Image With Link */ }

export type ImageWithLinkType = {
  _type: "imageWithLink";
  image?: CustomImageType;
  link?: LinkType;
};


{/* Button */ }

export type ButtonType = {
  _type: "button";
  variant?: ButtonVariantType;
  label?: string;
  link?: LinkType | string;
};


{/* Custom Image */ }

export type CustomImageType = {
  _type: "customImage";
  alt?: string;
  hasCaption: boolean
  caption: string
  asset?: SanityImageAssetDocument;
  crop?: SanityImageCropType
  hotspot?: SanityImageHotspotType
};

{/* Sanity Image Crop */ }

export type SanityImageCropType = {
  _type: "SanityImageCrop";
  right: number;
  top: number;
  left: number;
  bottom: number;
}

{/* Sanity Image Hotspot */ }

export type SanityImageHotspotType = {
  _type: "SanityImageHotspot";
  width?: number;
  x: number;
  y: number;
  height: number;
}
