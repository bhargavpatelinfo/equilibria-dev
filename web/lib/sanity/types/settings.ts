import { CustomImageType } from "./common";
import { LinkType } from "./linkType";




{/* Nav Item */ }

export interface NavItemType {
  _type: "navItem";
  title: string
  link: LinkType
}

{/* Header */ }

export interface HeaderType {
  _type: "header";
  logo?: CustomImageType;
  navItems?: NavItemType[]
}

{/* Footer */ }

export interface FooterType {
  _type: "footer";
  logo?: CustomImageType
}
