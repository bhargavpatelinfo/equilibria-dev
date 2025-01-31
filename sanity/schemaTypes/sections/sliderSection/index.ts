import {SchemaTypeDefinition} from 'sanity'

export default {
  name: 'sliderSection',
  title: 'Slider Section',
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
      name: 'texts',
      title: 'Texts',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Slider Section',
      }
    },
  },
} as SchemaTypeDefinition
