import { SchemaTypeDefinition } from 'sanity'
export default {
    name: 'symptomSolution',
    title: 'Symptom Solution',
    type: 'object',
    fields: [
        {
            name: 'icon',
            title: 'Icon',
            type: 'customImage',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: "lists",
            title: "Lists",
            type: "array",
            of: [{ type: "string" }],
        },
        {
            name: 'image',
            title: 'Image',
            type: 'customImage',
        },
    ],
    preview: {
        select: {
            title: 'title',
            image: "image"
        },
        prepare({ title, image }) {
            return {
                title: title || 'Symptom Solution',
                media: image
            }
        },
    },
} as SchemaTypeDefinition
