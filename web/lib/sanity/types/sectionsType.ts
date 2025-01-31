import { ButtonType, CustomImageType, RichTextType } from "./common";
import {
  ImageTitleDescriptionCtaType,
  TitleDescriptionImageType,
  TitleValueUnitType,
} from "./global";

export type SectionType =
  | HomeHeroSectionType
  | LifeChangingResultsSectionType
  | SliderSectionType
  | BestCareSectionType
  | StopManagingSectionType
  | WeCanHelpSectionType
  | BetterHealthSectionType

{
  /*  Home Hero Section */
}

export interface HomeHeroSectionType {
  _type: "homeHeroSection";
  id?: string;
  title?: RichTextType;
  description?: RichTextType;
}

{
  /*  Life Changing Results Section */
}

export interface LifeChangingResultsSectionType {
  _type: "lifeChangingResultsSection";
  id?: string;
  headLine?: string;
  title?: RichTextType;
  buttons: ButtonType[];
  titleValueUnit: TitleValueUnitType;
}

{
  /*  Slider Section */
}

export interface SliderSectionType {
  _type: "sliderSection";
  id?: string;
  texts: string[];
}

{
  /* Best Care Section */
}

export interface BestCareSectionType {
  _type: "bestCareSection";
  id?: string;
  title: RichTextType;
  imageTitleDescriptionCtas: ImageTitleDescriptionCtaType[];
}

{
  /* Stop Managing Section */
}

export interface StopManagingSectionType {
  _type: "stopManagingSection";
  id?: string;
  title: RichTextType;
  description: RichTextType;
  titleDescriptionImages: TitleDescriptionImageType[];
}

{
  /* Better Health Section */
}

export interface BetterHealthSectionType {
  _type: "betterHealthSection";
  id?: string;
  title: RichTextType;
  titleDescriptionImages: TitleDescriptionImageType[];
}

{
  /* We Can Help Section */
}

export interface WeCanHelpSectionType {
  _type: "weCanHelpSection";
  id?: string;
  backgroundImage: CustomImageType;
  title: RichTextType;
  description: RichTextType;
  button: ButtonType;
}
