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

{/* Title Description */ }

export const titleDescriptionFields = /* groq */ `
_type,
title,
description{
${richTextFields}
}
`;

{/* Equilibria Success Stories */ }

export const equilibriaSuccessStoriesFields = /* groq */ `
_type,
titleColor,
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

{/* Leader*/ }

export const leaderFields = /* groq */ `
_type,
_id,
name,
slug,
bio,
image{
${imageFields}
}
`;

{/* Circular Progress Bar */ }

export const circularProgressBarFields = /* groq */ `
_type,
progressBarColor,
title,
valueColor,
value,
suffix
`;

{/* Question And Answer */ }

export const questionAndAnswerFields = /* groq */ `
_type,
question,
answer{
${richTextFields}
},
`;

{/* Image Title List */ }

export const imageTitleListFields = /* groq */ `
_type,
image{
${imageFields}
},
title,
lists
`;