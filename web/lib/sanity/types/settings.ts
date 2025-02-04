import { CustomImageType, LabelLinkType } from "./common";
import { TitleLabelLinkType } from "./global";
import { LinkType } from "./linkType";

{
  /* Nav Item */
}

export interface NavItemType {
  _type: "navItem";
  title: string;
  link: LinkType;
}

{
  /* Header */
}

export interface HeaderType {
  _type: "header";
  logo?: CustomImageType;
  navItems?: NavItemType[];
}

{
  /* Footer Connect With Us */
}

export interface FooterConnectWithUsType {
  _type: "footerConnectWithUs";
  title?: string;
  titleLabelLinks?: TitleLabelLinkType[];
}

{
  /* Footer Link */
}

export interface FooterLinkType {
  _type: "footerLink";
  title?: string;
  labelLinks?: LabelLinkType[];
}

{
  /* Footer */
}

export interface FooterType {
  _type: "footer";
  logo?: CustomImageType;
  footerLinks: FooterLinkType[];
  connectWithUs: FooterConnectWithUsType;
  legalLinks: LabelLinkType[];
  bottomDescription: string;
  buildWith: LabelLinkType
}
