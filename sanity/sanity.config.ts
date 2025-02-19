import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { colorInput } from '@sanity/color-input'
import { noteField } from 'sanity-plugin-note-field'
import { seoMetaFields } from 'sanity-plugin-seo'
import { deskStructure } from './deskStructure/deskStructure'
import { previewDocumentNode } from './sanityPreview'

export default defineConfig({
  title: 'Equilibria Health',
  projectId: '3bcx4obt',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: deskStructure,
      defaultDocumentNode: previewDocumentNode(),
    }),
    visionTool(),
    colorInput(),
    noteField(),
    seoMetaFields(),
  ],
  schema: {
    types: schemaTypes,
  },
})
