import { groq } from "next-sanity";

const normalPage = /* groq */ `*[_type in ["page"] && defined(slug.current) 
&& !(_id in path("drafts.**")) && ! (slug.current in ["/","404"])]{

(_type == "page") => {
_updatedAt,
"locUrl": "/" + slug.current,
},


}`;

const groqQuery = groq`${normalPage}`;

export const query = {
  groqQuery,
};
