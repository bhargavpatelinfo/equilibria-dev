import React from "react";
import { PortableTextComponents } from "@portabletext/react";

import RichTextColor from "../richTextColor";
import RichTextImage from "../richTextImage";
import RichTextLink, { CustomLinkProps } from "../richTextLink";
import {
  BulletList,
  RichTextItalic,
  NumberList,
  RichTextBold,
  RichTextCode,
  RichTextStrikeThrough,
} from "../richTextList";
import RichTextBlock from "../richTextBlock";
import { RichTextLinkType } from "../../../../../lib/sanity/types";

export interface CreateRichTextComponentProps {
  richTextLinks: RichTextLinkType[];
  isRichTextBlock?: boolean;
}

const CreateRichTextComponent = ({
  richTextLinks,
  isRichTextBlock,
}: CreateRichTextComponentProps): PortableTextComponents => {
  return {
    types: {
      customImage: RichTextImage,
    },
    marks: {
      link: (props: CustomLinkProps) => (
        <RichTextLink {...props} richTextLinks={richTextLinks} />
      ),
      color: RichTextColor,
      em: RichTextItalic,
      strong: RichTextBold,
      code: RichTextCode,
      "strike-through": RichTextStrikeThrough,
    },
    list: {
      bullet: BulletList,
      number: NumberList,
    },
    block: isRichTextBlock ? RichTextBlock : undefined,
  };
};

export default CreateRichTextComponent;
