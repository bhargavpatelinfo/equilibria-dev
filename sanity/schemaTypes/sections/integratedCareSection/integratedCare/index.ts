

import { SchemaTypeDefinition } from 'sanity'
export default {
    name: 'integratedCare',
    title: 'Integrated Care',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Integrated Care',
            }
        },
    },
} as SchemaTypeDefinition
