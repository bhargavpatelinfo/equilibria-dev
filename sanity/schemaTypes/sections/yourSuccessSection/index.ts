

import { toPlainText } from '@portabletext/react'
import { SchemaTypeDefinition } from 'sanity'
export default {
    name: 'yourSuccessSection',
    title: 'Your Success Section',
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
            name: 'image',
            title: 'Image',
            type: 'customImage',
        },
        {
            name: 'titleDescriptions',
            title: 'Title Descriptions',
            type: 'array',
            of: [{ type: 'titleDescription' }],
        },
    ],
    preview: {
        select: {
            title: 'title.custom_rich_text',
        },
        prepare({ title }) {
            const getTitle = title ? toPlainText(title) : null
            return {
                title: getTitle || 'Your Success Section',
            }
        },
    },
} as SchemaTypeDefinition
