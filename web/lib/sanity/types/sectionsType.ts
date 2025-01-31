import { RichTextType } from "./common";

export type SectionType =
  | HomeHeroSectionType
  

{
  /*  Home Hero Section */
}

export interface HomeHeroSectionType {
  _type: "homeHeroSection";
  id?: string;
  title?: RichTextType;
  description?: RichTextType;
}