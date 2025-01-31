import { ButtonType, RichTextType } from "./common";
import { TitleValueUnitType } from "./global";

export type SectionType = HomeHeroSectionType | LifeChangingResultsSectionType | SliderSectionType;

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
