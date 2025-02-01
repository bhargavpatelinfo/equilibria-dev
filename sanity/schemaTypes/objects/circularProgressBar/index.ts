import {SchemaTypeDefinition} from 'sanity'

export default {
  name: 'circularProgressBar',
  title: 'Circular Progress Bar',
  type: 'object',
  fields: [
    {
      name: 'progressBarColor',
      title: 'Progress Bar Color',
      type: 'color',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'valueColor',
      title: 'Value Color',
      type: 'color',
    },
    {
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'Progress value (0 to 100)',
    },
    {
      name: 'suffix',
      title: 'Suffix',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      value: 'value',
      suffix: 'suffix',
    },
    prepare({title, value, suffix}) {
      return {
        title: title || 'Title',
        subtitle: `${value || 'No Value'} ${suffix || ''}`,
      }
    },
  },
} as SchemaTypeDefinition
