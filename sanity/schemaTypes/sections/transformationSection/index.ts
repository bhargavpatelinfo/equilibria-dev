
import { toPlainText } from '@portabletext/react'
import { SchemaTypeDefinition } from 'sanity'
export default {
    name: 'transformationSection',
    title: 'Transformation Section',
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
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'customImage',
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
                title: getTitle || 'Transformation Section',
            }
        },
    },
} as SchemaTypeDefinition
