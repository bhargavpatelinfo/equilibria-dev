import { labelLinkFields } from "../commonFields";
import { titleLabelLinkFields } from "../globalFields";
import { imageFields } from "../imageFields";



{/* Footer Connect With Us  */ }

export const footerConnectWithUsFields = /* groq */ `
_type,
title,
titleLabelLinks[]{
${titleLabelLinkFields}
},
`;

{/* Footer Link  */ }

export const footerLinkFields = /* groq */ `
_type,
title,
labelLinks[]{
${labelLinkFields}
},
`;

{/* Footer  */ }

export const footerFields = /* groq */ `
_id,
_type,
logo{
${imageFields}
},
footerLinks[]{
${footerLinkFields}
},
connectWithUs{
${footerConnectWithUsFields}
},
legalLinks[]{
${labelLinkFields}
},
bottomDescription
`;