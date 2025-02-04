import { SchemaTypeDefinition } from 'sanity'

export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  groups: [
    {
      name: 'main',
      title: 'Main',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'This field is only used for CMS.',
      group: 'main',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'customImage',
      group: 'main',
    },
    {
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',
      of: [{ type: 'footerLink' }],
      group: 'main',
    },
    {
      name: 'connectWithUs',
      title: 'ConnectWithUs',
      type: 'footerConnectWithUs',
      group: 'main',
    },
    {
      name: 'legalLinks',
      title: 'Legal Links',
      type: 'array',
      of: [{ type: 'labelLink' }],
      group: 'main',
    },
    {
      name: 'bottomDescription',
      title: 'Bottom Description',
      type: 'string',
      description: '© 2024 will be included automatically.',
      group: 'main',
    },
    {
      name: 'buildWith',
      title: 'Build With',
      type: 'labelLink',
  },
  ],
} as SchemaTypeDefinition
