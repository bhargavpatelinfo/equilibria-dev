import { buttonFields, richTextFields } from "../commonFields";
import { equilibriaSuccessStoriesFields, imageTitleDescriptionCtaFields, titleDescriptionImageFields, titleValueUnitFields } from "../globalFields";
import { imageFields } from "../imageFields";

{
  /* Home Hero Section */
}

export const homeHeroSectionFields = /* groq */ `
_type,
id,
title{
${richTextFields}
},
description{
${richTextFields}
},
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
titleValueUnit{
${titleValueUnitFields}
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
