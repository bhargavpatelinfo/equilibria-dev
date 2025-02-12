import { toPlainText } from '@portabletext/react'
import { SchemaTypeDefinition } from 'sanity'
export default {
    name: 'heroSection',
    title: 'Hero Section',
    type: 'object',
    fields: [
        {
            name: 'id',
            title: 'Id',
            type: 'string',
            description:
                'Use the same ID provided in the anchor link to navigate to a specific section on the same page.',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'richText',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'richText',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'customImage',
        },
        {
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'buttons',
            title: 'Buttons',
            type: 'array',
            of: [{ type: 'button' }],
        },
    ],
    preview: {
        select: {
            title: 'title.custom_rich_text',
        },
        prepare({ title }) {
            const getTitle = title ? toPlainText(title) : null
            return {
                title: getTitle || 'Hero Section',
            }
        },
    },
} as SchemaTypeDefinition
