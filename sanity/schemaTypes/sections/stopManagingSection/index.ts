import {toPlainText} from '@portabletext/react'
import {SchemaTypeDefinition} from 'sanity'
export default {
  name: 'stopManagingSection',
  title: 'Stop Managing Section',
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
      name: 'titleDescriptionImages',
      title: 'Title Description Images',
      type: 'array',
      of: [{type: 'titleDescriptionImage'}],
    },
  ],
  preview: {
    select: {
      title: 'title.custom_rich_text',
    },
    prepare({title}) {
      const getTitle = title ? toPlainText(title) : null
      return {
        title: getTitle || 'Stop Managing Section',
      }
    },
  },
} as SchemaTypeDefinition
