import React from "react";
import { PortableTextMarkComponentProps } from "@portabletext/react";

import Link from "../../link";
import { RichTextLinkType } from "../../../../../lib/sanity/types";
import { LinkType } from "../../../../../lib/sanity/types/linkType";

export interface RichTextLinkComponentProps {
  richTextLinks: RichTextLinkType[];
}

export interface RichTextLinkData {
  _type: "link";
  link: LinkType & { page?: { _ref?: string }; anchor?: string; link?: string };
}

export type CustomLinkProps = PortableTextMarkComponentProps<RichTextLinkData>

const RichTextLink: React.FC<CustomLinkProps & RichTextLinkComponentProps> = ({ children, value, richTextLinks, text }) => {

  const richTextLink = richTextLinks?.find(
    (item) => item?.link?.id === value?.link?.page?._ref
  );

  const { link } = value || {};
  const { type, openTheLinkinANewWindow, link: linkUrl, anchor } = link || {};

  const richTextSectionReferenceUrl = "#" + anchor;

  let href: string | LinkType;
  let target: string;

  switch (type) {
    case "reference":
      href = richTextLink?.link || "#";
      break;
    case "externalReference":
      href = linkUrl || "#";
      target = openTheLinkinANewWindow ? "_blank" : "_self";
      break;
    case "sectionReference":
      href = richTextSectionReferenceUrl;
      break;
  }

  return (
    <Link
      className="text-[blue] underline underline-offset-4"
      to={href}
      target={target}
    >
      {children}
    </Link>
  );
};

export default RichTextLink