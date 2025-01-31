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
