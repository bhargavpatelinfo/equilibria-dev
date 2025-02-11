import { LINK_TYPES } from "../../utils/resolveUrl";

{/* Core Link*/ }

export type CoreLinkFields = {
  _type: "link";
  openTheLinkinANewWindow?: boolean;
  id?: string;
};

export type LinkFields<T> = CoreLinkFields & T;

{/*  External Link */ }

export interface ExternalReferenceFields {
  type: LINK_TYPES.externalReference;
  url: string;
}

{/*  Internal Link */ }

export interface InternalReferenceFields {
  type: LINK_TYPES.reference;
  slug: string;
  pageType: string;
}

{/*  Section Reference Link */ }

export interface SectionReferenceFields {
  type: LINK_TYPES.sectionReference;
  url: `#${string}` | null;
}

{/* Link */ }

export type LinkType = LinkFields<
  ExternalReferenceFields | InternalReferenceFields | SectionReferenceFields
>;
