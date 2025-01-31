import { SchemaTypeDefinition } from "sanity";
import { GrImage } from "react-icons/gr";

export default {
  name: "customImage",
  title: "Custom Image",
  type: "image",
  icon: GrImage,
  options: {
    hotspot: true, // <-- Defaults to false
  },
  fields: [
    {
      name: "alt",
      title: "Alt",
      type: "string",
    },
  ],
  preview: {
    select: {
      imageUrl: "asset",
      alt: "alt",
    },
    prepare(select) {
      const { imageUrl, alt, } = select;
      return {
        title: alt ? `Alternative text : ${alt}` : null,
        media: imageUrl && imageUrl,
      };
    },
  },
} as SchemaTypeDefinition;
