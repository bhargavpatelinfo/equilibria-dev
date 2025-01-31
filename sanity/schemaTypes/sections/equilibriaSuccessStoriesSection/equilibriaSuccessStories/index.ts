import {toPlainText} from '@portabletext/react'
import {SchemaTypeDefinition} from 'sanity'
export default {
  name: 'equilibriaSuccessStories',
  title: 'Equilibria Success Stories',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'richText',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'age',
      title: 'Age',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
    },
  ],
  preview: {
    select: {
      title: 'title.custom_rich_text',
    },
    prepare({title}) {
      const getTitle = title ? toPlainText(title) : null
      return {
        title: getTitle || 'Equilibria Success Stories',
      }
    },
  },
} as SchemaTypeDefinition
