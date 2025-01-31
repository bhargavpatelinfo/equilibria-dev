import {SchemaTypeDefinition} from 'sanity'

export default {
  name: 'leader',
  title: 'Leader',
  type: 'document',
  groups: [
    {
      name: 'main',
      title: 'Main',
      default: true,
    },
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      group: 'main',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      group: 'main',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'string',
      group: 'main',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
      group: 'main',
    },
  ],
} as SchemaTypeDefinition
