import { SchemaTypeDefinition } from 'sanity'

export default {
  name: 'footerLink',
  title: 'Footer Link',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'labelLinks',
      title: 'Label Links',
      type: 'array',
      of: [{ type: 'labelLink' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || "Footer Link",
      }
    },
  },
} as SchemaTypeDefinition
