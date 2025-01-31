import { labelLinkFields } from "../commonFields";
import { imageFields } from "../imageFields";

{/* Image Label Link  */ }

export const imageLabelLinkFields = /* groq */ `
_type,
image{
${imageFields}
},
labelLink{
${labelLinkFields}
}
`;
