import { toPlainText } from '@portabletext/react'
import { SchemaTypeDefinition } from 'sanity'
export default {
  name: 'homeHeroSection',
  title: 'Home Hero Section',
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
  ],
  preview: {
    select: {
      title: 'title.custom_rich_text',
    },
    prepare({ title }) {
      const getTitle = title ? toPlainText(title) : null
      return {
        title: getTitle || 'Home Hero Section',
      }
    },
  },
} as SchemaTypeDefinition
