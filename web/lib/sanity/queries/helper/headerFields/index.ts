import { imageFields } from "../imageFields";
import { linkFields } from "../linkFields";

{
  /*  Nav Item  */
}

export const navItemFields = /* groq */ `
_type,
title,
link{
${linkFields}
},  
`;

{
  /* Header */
}

export const headerFields = /* groq */ `
_id,
_type,
logo{
${imageFields}
},
navItems[]{
${navItemFields}
},
`;
