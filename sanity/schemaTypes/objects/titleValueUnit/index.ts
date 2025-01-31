
import { SchemaTypeDefinition } from "sanity";

export default {
    name: "titleValueUnit",
    title: "Title Value Unit",
    type: "object",
    fields: [
        {
            name: "color",
            title: "Color",
            type: "color",
        },
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: 'value',
            title: 'Value',
            type: 'string',
        },
        {
            name: 'suffix',
            title: 'Suffix',
            type: 'string',
        }
    ],
    preview: {
        select: {
            title: "title",
            value: "value",
            suffix: "suffix"
        },
        prepare({ title, value, suffix }) {
            return {
                title: title || "Title",
                subtitle: `${value || 'No Value'} ${suffix || ''}`
            };
        },
    },
} as SchemaTypeDefinition;
