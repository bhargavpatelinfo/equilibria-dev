import { SanityDocument } from "next-sanity";
import { SectionType } from "./sectionsType";
import { SeoType } from "./seoType";
import { FooterType, HeaderType } from "./settings";

{
  /* Layout Props */
}

export interface LayoutPropsType {
  _id: "settings";
  _type: "settings";
  header?: HeaderType;
  footer?: FooterType;
}

{
  /* Page Builder */
}

export interface PageBuilderType {
  _type: "section";
  content: SectionType[];
}

{
  /* Page */
}

export interface Page extends SanityDocument {
  slug: string;
  _id: string;
  seo: SeoType;
  layoutProps: LayoutPropsType;
  pageBuilder?: PageBuilderType[];
}
