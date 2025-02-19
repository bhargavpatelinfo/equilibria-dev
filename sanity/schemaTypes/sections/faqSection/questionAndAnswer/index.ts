import { toPlainText } from "@portabletext/react";
import { SchemaTypeDefinition } from "sanity";

export default {
    name: "questionAndAnswer",
    title: "Question And Answer",
    type: "object",
    fields: [
        {
            name: "question",
            title: "Question",
            type: "string",
        },
        {
            name: "answer",
            title: "Answer",
            type: "richText",
        },
    ],
    preview: {
        select: {
            title: "question",
            description: "answer.custom_rich_text"
        },
        prepare: ({ title, description }) => {
            const getDescription = description ? toPlainText(description) : null
            return {
                title: title || "Question",
                subtitle: getDescription
            };
        },
    },
} as SchemaTypeDefinition;
