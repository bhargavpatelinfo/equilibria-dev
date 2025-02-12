import { toPlainText } from "@portabletext/react";
import { SchemaTypeDefinition } from "sanity";

export default {
  name: "titleDescription",
  title: "Title Description",
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
  ],
  preview: {
    select: {
      title: "title",
      description: "description.custom_rich_text",
    },
    prepare({ title, description }) {
      const getDescription = description ? toPlainText(description) : null;
      return {
        title:title ||  "Title Description",
        subtitle: getDescription,
      };
    },
  },
} as SchemaTypeDefinition;
