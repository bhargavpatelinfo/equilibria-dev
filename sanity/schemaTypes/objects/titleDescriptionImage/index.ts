import { toPlainText } from "@portabletext/react";
import { SchemaTypeDefinition } from "sanity";

export default {
  name: "titleDescriptionImage",
  title: "Title Description Image",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "richText",
    },
    {
      name: "image",
      title: "Image",
      type: "customImage",
    },
  ],
  preview: {
    select: {
      title: "title",
      description: "description.custom_rich_text",
      media: "image"
    },
    prepare({ title, description, media }) {
      const getDescription = description ? toPlainText(description) : null;
      return {
        title:title ||  "Title Description Image",
        subtitle: getDescription,
        media: media && media
      };
    },
  },
} as SchemaTypeDefinition;
