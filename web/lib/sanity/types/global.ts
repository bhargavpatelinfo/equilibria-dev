import {
  ButtonType,
  CustomImageType,
  LabelLinkType,
  RichTextType,
} from "./common";

{
  /* Color */
}

export type ColorType = {
  _type: "color";
  hex: string;
};

{
  /* Alignment */
}

export type AlignmentType = "left" | "right";

{
  /* Title Label Link */
}

export type TitleLabelLinkType = {
  _type: "titleLabelLink";
  title: string;
  labelLink: LabelLinkType;
};

{
  /* Title Value Unit */
}

export type TitleValueUnitType = {
  _type: "titleValueUnit";
  color: ColorType;
  title: string;
  value: string;
  suffix: string;
};

{
  /* Image Title Description Cta */
}

export type ImageTitleDescriptionCtaType = {
  _type: "imageTitleDescriptionCta";
  image: CustomImageType;
  title: string;
  description: RichTextType;
  cta: ButtonType;
};

{
  /* Title Description Image */
}

export type TitleDescriptionImageType = {
  _type: "titleDescriptionImage";
  image: CustomImageType;
  title: string;
  description: RichTextType;
};
