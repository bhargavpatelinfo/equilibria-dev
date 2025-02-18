
import { SchemaTypeDefinition } from 'sanity'
export default {
    name: 'imageTitleList',
    title: 'Image Title List',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Image',
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
    ],
    preview: {
        select: {
            title: 'title',
            image: "image"
        },
        prepare({ title, image }) {
            return {
                title: title || 'Image Title List',
                media: image
            }
        },
    },
} as SchemaTypeDefinition
