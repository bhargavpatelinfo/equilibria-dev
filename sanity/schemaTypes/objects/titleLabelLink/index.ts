import {SchemaTypeDefinition} from 'sanity'

export default {
  name: 'titleLabelLink',
  title: 'Title Label Link',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'labelLink',
      title: 'Label Link',
      type: 'labelLink',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Title Label Link',
      }
    },
  },
} as SchemaTypeDefinition
