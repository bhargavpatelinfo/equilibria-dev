import {
  PortableTextBlock,
  PortableTextComponentProps,
} from "@portabletext/react";
import React from "react";

export type PortableTextStyleType =
  | "normal"
  | "blockquote"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

const RichTextBlock = ({
  value,
  children,
}: PortableTextComponentProps<
  Omit<PortableTextBlock, "style"> & { style: PortableTextStyleType }
>) => {
  switch (value.style) {
    case "h1":
      return <h1 className="">{children}</h1>;
    case "h2":
      return <h2 className="">{children}</h2>;
    case "h3":
      return <h3 className="">{children}</h3>;
    case "h4":
      return <h4 className="">{children}</h4>;
    case "h5":
      return <h5 className="">{children}</h5>;
    case "h6":
      return <h6 className="">{children}</h6>;
    case "blockquote":
      return <blockquote className="">{children}</blockquote>;
    default:
      return <p className="">{children}</p>;
  }
};

export default RichTextBlock;
