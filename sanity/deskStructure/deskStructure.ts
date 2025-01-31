import { CogIcon } from '@sanity/icons'
import { StructureBuilder, StructureResolverContext } from 'sanity/structure'
import { RiPagesLine } from 'react-icons/ri'
import { HiOutlineTerminal } from 'react-icons/hi'
import { AiOutlineGlobal, AiOutlineTeam } from 'react-icons/ai'


export const deskStructure = (S: StructureBuilder, context: StructureResolverContext) => {
  return S.list()
    .title('Documents')
    .items([
      S.listItem()
        .title('settings')
        .icon(CogIcon)
        .child(S.editor().id('settings').schemaType('settings').documentId('settings')),
      S.listItem()
        .title('Global')
        .icon(AiOutlineGlobal)
        .child(
          S.list()
            .title('Global')
            .items([
              S.listItem()
                .title('Header')
                .icon(HiOutlineTerminal)
                .child(S.documentTypeList('header').schemaType('header').title('Header')),
              S.listItem()
                .title('Footer')
                .icon(HiOutlineTerminal)
                .child(S.documentTypeList('footer').schemaType('footer').title('Footer')),
              S.listItem()
                .title('Section')
                .icon(HiOutlineTerminal)
                .child(S.documentTypeList('section').schemaType('section').title('Section')),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Page')
        .icon(RiPagesLine)
        .child(S.documentTypeList('page').schemaType('page').title('Page')),
      S.divider(),
      S.listItem()
        .title('Leader')
        .icon(AiOutlineTeam)
        .child(S.documentTypeList('leader').schemaType('leader').title('Leader')),
    ])
}
