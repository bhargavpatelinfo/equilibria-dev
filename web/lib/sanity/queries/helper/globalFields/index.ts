import { buttonFields, labelLinkFields, richTextFields } from "../commonFields";
import { imageFields } from "../imageFields";

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
_type,
color,
title,
value,
suffix
`;

{/* Image Title Description Cta */ }

export const imageTitleDescriptionCtaFields = /* groq */ `
_type,
image{
${imageFields}
},
title,
description{
${richTextFields}
},
cta{
${buttonFields}
}
`;

{/* Title Description Image */ }

export const titleDescriptionImageFields = /* groq */ `
_type,
image{
${imageFields}
},
title,
description{
${richTextFields}
}
`;

{/* Equilibria Success Stories */ }

export const equilibriaSuccessStoriesFields = /* groq */ `
_type,
title,
description{
${richTextFields}
},
name,
age,
bio,
image{
${imageFields}
}
`;
