import {
  ButtonType,
  CustomImageType,
  LabelLinkType,
  RichTextType,
} from "./common";

export declare interface Slug {
  _type: "slug";
  current: string;
}

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

{
  /* Title Description */
}

export type TitleDescriptionType = {
  _type: "titleDescription";
  title: string;
  description: RichTextType;
};

{
  /* Equilibria Success Stories */
}

export type EquilibriaSuccessStoriesType = {
  _type: "equilibriaSuccessStories";
  titleColor:string
  title: string;
  description: RichTextType;
  name: string;
  age: string;
  bio: string;
  image: CustomImageType;
};

{
  /* Leader */
}

export type LeaderType = {
  _type: "leader";
  name: string;
  slug: Slug;
  bio: string;
  image: CustomImageType;
};

{
  /* Circular Progress Bar */
}

export type CircularProgressBarType = {
  _type: "circularProgressBar";
  progressBarColor: ColorType;
  valueColor: ColorType;
  title: string;
  value: string;
  suffix: string;
};

{
  /* Question And Answer */
}

export type QuestionAndAnswerType = {
  _type: "questionAndAnswer";
  question?: string;
  answer?: RichTextType;
};