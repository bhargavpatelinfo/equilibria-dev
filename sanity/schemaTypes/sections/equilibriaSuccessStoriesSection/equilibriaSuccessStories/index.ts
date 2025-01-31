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
      title: 'name',
      description: 'description.custom_rich_text',
      image: 'image',
    },
    prepare({title, description, image}) {
      const getDescription = description ? toPlainText(description) : null
      return {
        title: title || 'Equilibria Success Stories',
        subtitle: getDescription,
        media: image,
      }
    },
  },
} as SchemaTypeDefinition
