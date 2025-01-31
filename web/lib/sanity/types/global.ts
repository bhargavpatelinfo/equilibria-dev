import { LabelLinkType } from "./common";

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
  title: string;
  labelLink: LabelLinkType;
};
