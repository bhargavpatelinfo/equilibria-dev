import { Iframe, type IframeOptions } from 'sanity-plugin-iframe-pane'

import { DefaultDocumentNodeResolver } from 'sanity/structure'
import { JsonView } from './JsonView'

export const iframeOptions: IframeOptions = {
  url: {
    origin: 'http://localhost:3000/',
    preview: (document) => {
      const slug = (document?.slug as { current: string })?.current
      if (slug) {
        switch (document?._type) {
          case 'page':
            return slug?.startsWith('/') ? slug : `/${slug}`
          default:
            return slug?.startsWith("/") ? slug : `/${slug}`;
        }
      }
      return new Error('Missing slug')
    },
    draftMode: '/api/draft',
  },
  reload: { button: true },
}

export const previewDocumentNode = (): DefaultDocumentNodeResolver => {
  return (S, { schemaType }) => {
    switch (schemaType) {
      case 'page':
        return S.document().views([
          S.view.form(),
          S.view.component(Iframe).options(iframeOptions).title('Preview'),
        ])
      default:
        return S.document().views([
          S.view.form(),
          S.view.component(JsonView).title("JSON"),
        ]);
    }
  }
}
