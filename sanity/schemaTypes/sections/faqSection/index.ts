import { toPlainText } from "@portabletext/react";
import { SchemaTypeDefinition } from "sanity";

export default {
  name: "faqSection",
  title: "Faq Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "richText",
    },
    {
      name: "questionAndAnswers",
      title: "Question And Answers",
      type: "array",
      of: [{ type: "questionAndAnswer" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      description: "description.custom_rich_text",
    },
    prepare: ({ title, description }) => {
      const getDescription = description ? toPlainText(description) : null;
      return {
        title: title || "Faq Section",
        subtitle: getDescription,
      };
    },
  },
} as SchemaTypeDefinition;
