
import {toPlainText} from '@portabletext/react'
import {SchemaTypeDefinition} from 'sanity'
export default {
  name: 'equilibriaSuccessStoriesSection',
  title: 'Equilibria Success Stories Section',
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
      name: 'equilibriaSuccessStories',
      title: 'Equilibria Success Stories',
      type: 'array',
      of: [{type: 'equilibriaSuccessStories'}],
    },
  ],
  preview: {
    select: {
      title: 'title.custom_rich_text',
    },
    prepare({title}) {
      const getTitle = title ? toPlainText(title) : null
      return {
        title: getTitle || 'Equilibria Success Stories Section',
      }
    },
  },
} as SchemaTypeDefinition
