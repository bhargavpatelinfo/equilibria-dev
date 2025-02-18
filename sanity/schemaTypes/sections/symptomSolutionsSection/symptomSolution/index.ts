import { SchemaTypeDefinition } from 'sanity'
import ArrayMaxItems from '../../../../component/arrayFunctions'
export default {
    name: 'symptomSolution',
    title: 'Symptom Solution',
    type: 'object',
    fields: [
        {
            name: 'imageTitleLists',
            title: 'Image Title Lists',
            type: 'array',
            components: { input: ArrayMaxItems },
            validation: (Rule) => Rule.max(2),
            of: [{ type: 'imageTitleList' }],
        },
        {
            name: 'image',
            title: 'Image',
            type: 'customImage',
        },
    ],
    preview: {
        select: {
            image: "image"
        },
        prepare({ image }) {
            return {
                title: 'Symptom Solution',
                media: image
            }
        },
    },
} as SchemaTypeDefinition
