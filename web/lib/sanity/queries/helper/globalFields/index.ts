import { labelLinkFields } from "../commonFields";

{/* Title Label Link  */ }

export const titleLabelLinkFields = /* groq */ `
_type,
title,
labelLink{
${labelLinkFields}
}
`;

{/* Title Value Unit */ }

export const titleValueUnitFields = /* groq */ `
color,
title,
value,
suffix
`;
