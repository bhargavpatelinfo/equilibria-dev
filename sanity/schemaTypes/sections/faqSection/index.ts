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
      title: "title.custom_rich_text",
    },
    prepare: ({ title }) => {
      const getTitle = title ? toPlainText(title) : null;
      return {
        title: getTitle || "Faq Section",
      };
    },
  },
} as SchemaTypeDefinition;
