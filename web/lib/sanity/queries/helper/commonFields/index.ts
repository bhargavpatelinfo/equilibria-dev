import { imageFields } from "../imageFields";
import { linkFields } from "../linkFields";

{/* RichText  */ }

export const richTextFields = /* groq */ `
_type,
custom_rich_text,
"richTextLinks":custom_rich_text["block"==@._type].markDefs["link"==@._type]{
_type,
link{
${linkFields}
},
}
`;

{/* Image With Link   */ }

export const imageWithLinkFields = /* groq */ `
_type,
image{
${imageFields}
},
link{
${linkFields}
}
`;

{/* Button  */ }

export const buttonFields = /* groq */ `
_type,
variant,
label,
link{
${linkFields}
}
`;

{/* Label Link  */ }

export const labelLinkFields = /* groq */ `
_type,
link{
${linkFields}
},
label
`;