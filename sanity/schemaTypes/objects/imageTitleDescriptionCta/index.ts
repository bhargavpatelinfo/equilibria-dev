import { toPlainText } from '@portabletext/react'
import { SchemaTypeDefinition } from 'sanity'

export default {
  name: 'imageTitleDescriptionCta',
  title: 'Image Title Description Cta',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
    },
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
      name: 'cta',
      title: 'Cta',
      type: 'button',
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description.custom_rich_text',
      media: 'image',
    },
    prepare({ title, description, media }) {
      const getDescription = description ? toPlainText(description) : null
      return {
        title: title || 'Image Title Description Cta',
        subtitle: getDescription,
        media: media && media,
      }
    },
  },
} as SchemaTypeDefinition
