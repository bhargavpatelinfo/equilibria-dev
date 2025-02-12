import { buttonFields, richTextFields } from "../commonFields";
import { circularProgressBarFields, equilibriaSuccessStoriesFields, imageTitleDescriptionCtaFields, leaderFields, questionAndAnswerFields, titleDescriptionFields, titleDescriptionImageFields, } from "../globalFields";
import { imageFields } from "../imageFields";

{
  /* Home Hero Section */
}

export const homeHeroSectionFields = /* groq */ `
_type,
id,
prefix,
suffix,
rotatingSubtitles,
description{
${richTextFields}
},
`;

{
  /* Hero Section */
}

export const heroSectionFields = /* groq */ `
_type,
id,
title{
${richTextFields}
},
description{
${richTextFields}
},
image{
${imageFields}
},
features,
buttons[]{
${buttonFields}
}
`;

{
  /* Life Changing Results Section */
}

export const lifeChangingResultsSectionFields = /* groq */ `
_type,
id,
headLine,
title{
${richTextFields}
},
buttons[]{
${buttonFields}
},
circularProgressBar{
${circularProgressBarFields}
}
`;

{
  /* Slider Section */
}

export const sliderSectionFields = /* groq */ `
_type,
id,
texts
`;

{
  /* Best Care Section */
}

export const bestCareSectionFields = /* groq */ `
_type,
id,
title{
${richTextFields}
},
imageTitleDescriptionCtas[]{
${imageTitleDescriptionCtaFields}
}
`;

{
  /* Stop Managing Section */
}

export const stopManagingSectionFields = /* groq */ `
_type,
id,
title{
${richTextFields}
},
description{
${richTextFields}
},
titleDescriptionImages[]{
${titleDescriptionImageFields}
}
`;

{
  /* Better Health Section */
}

export const betterHealthSectionFields = /* groq */ `
_type,
id,
title{
${richTextFields}
},
titleDescriptionImages[]{
${titleDescriptionImageFields}
}
`;

{
  /* Equilibria Success Stories Section */
}

export const equilibriaSuccessStoriesSectionFields = /* groq */ `
_type,
id,
equilibriaSuccessStories[]{
${equilibriaSuccessStoriesFields}
}
`;

{
  /* Affordable Expert Care Section */
}

export const affordableExpertCareSectionFields = /* groq */ `
_type,
id,
title{
${richTextFields}
},
description{
${richTextFields}
},
imageTitleDescriptionCtas[]{
${imageTitleDescriptionCtaFields}
}
`;

{
  /* Leaders Section */
}

export const leadersSectionFields = /* groq */ `
_type,
id,
title{
${richTextFields}
},
description{
${richTextFields}
},
buttons[]{
${buttonFields}
},
leaders[]->{
${leaderFields}
}
`;

{
  /* We Can Help Section */
}

export const weCanHelpSectionFields = /* groq */ `
_type,
id,
backgroundImage{
${imageFields}
},
title{
${richTextFields}
},
description{
${richTextFields}
},
button{
${buttonFields}
}
`;

{
  /* Integrated Care */
}

export const integratedCareFields = /* groq */ `
_type,
id,
title,
features
`;

{
  /* Integrated Care Section */
}

export const integratedCareSectionFields = /* groq */ `
_type,
id,
title{
${richTextFields}
},
integratedCares[]{
${integratedCareFields}
}
`;

{
  /* Simple Steps Section */
}

export const simpleStepsSectionFields = /* groq */ `
_type,
id,
title{
${richTextFields}
},
image{
${imageFields}
},
titleDescriptions[]{
${titleDescriptionFields}
}
`;

{
  /* Your Success Section*/
}

export const yourSuccessSectionFields = /* groq */ `
_type,
id,
title{
${richTextFields}
},
image{
${imageFields}
},
titleDescriptions[]{
${titleDescriptionFields}
}
`;

{
  /* Faq Section */
}

export const faqSectionFields = /* groq */ `
_type,
id,
title{
${richTextFields}
},
questionAndAnswers[]{
${questionAndAnswerFields}
},
`;
