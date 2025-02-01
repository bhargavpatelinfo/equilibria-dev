import {toPlainText} from '@portabletext/react'
import {SchemaTypeDefinition} from 'sanity'
export default {
  name: 'lifeChangingResultsSection',
  title: 'Life Changing Results Section',
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
      name: 'headLine',
      title: 'HeadLine',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'richText',
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{type: 'button'}],
    },
    {
      name: 'circularProgressBar',
      title: 'Circular Progress Bar',
      type: 'circularProgressBar',
    },
  ],
  preview: {
    select: {
      title: 'title.custom_rich_text',
    },
    prepare({title}) {
      const getTitle = title ? toPlainText(title) : null
      return {
        title: getTitle || 'Life Changing Results Section',
      }
    },
  },
} as SchemaTypeDefinition
