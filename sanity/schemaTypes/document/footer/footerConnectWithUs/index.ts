
import { SchemaTypeDefinition } from 'sanity'

export default {
  name: 'footerConnectWithUs',
  title: 'Footer Connect With Us',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'titleLabelLinks',
      title: 'Title Label Links',
      type: 'array',
      of: [{ type: 'titleLabelLink' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || "Footer Connect With Us",
      }
    },
  },
} as SchemaTypeDefinition
