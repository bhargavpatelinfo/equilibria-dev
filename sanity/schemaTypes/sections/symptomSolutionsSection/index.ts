
import {toPlainText} from '@portabletext/react'
import {SchemaTypeDefinition} from 'sanity'
export default {
  name: 'symptomSolutionsSection',
  title: 'Symptom Solutions Section',
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
      name: 'symptomSolutions',
      title: 'Symptom Solutions',
      type: 'array',
      of: [{type: 'symptomSolution'}],
    },
  ],
  preview: {
    select: {
      title: 'title.custom_rich_text',
    },
    prepare({title}) {
      const getTitle = title ? toPlainText(title) : null
      return {
        title: getTitle || 'Symptom Solutions Section',
      }
    },
  },
} as SchemaTypeDefinition
