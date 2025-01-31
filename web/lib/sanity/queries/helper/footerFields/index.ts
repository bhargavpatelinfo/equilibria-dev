import { imageFields } from "../imageFields";



{/* Footer  */ }

export const footerFields = /* groq */ `
_id,
_type,
logo{
${imageFields}
},
`;