import { SchemaTypeDefinition } from "sanity";

export default {
  name: "page",
  title: "Page",
  type: "document",
  groups: [
    {
      name: "main",
      title: "Main",
      default: true,
    },
    {
      name: "seo",
      title: "Seo",
    },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "This field is only used for CMS.",
      group: "main",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: 'title',
        maxLength: 200,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      group: "main",
    },
    {
      name: "pageBuilder",
      type: "array",
      of: [{ type: "reference", to: { type: "section" } }],
      group: "main",
    },
    {
      title: "Seo",
      name: "seo",
      type: "seoMetaFields",
      group: "seo",
    },
  ],
} as SchemaTypeDefinition;
