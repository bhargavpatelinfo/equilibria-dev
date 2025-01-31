import { groq } from "next-sanity";
import { seo } from "../helper/seoFields";
import { layoutProps, pageBuilder } from "../helperQueries";

const groqQuery = groq`*[_type == "page" && slug.current==$slug]{
_type,
_id,
"slug":slug.current,
"layoutProps":${layoutProps},
${seo},
${pageBuilder}
}`;

const pageSlugQuery = groq`
*[_type == "page" && defined(slug.current) && ! (slug.current in ["/","404"])]{
"slug":slug.current,
}
`

export const query = {
  groqQuery,
  pageSlugQuery
};
