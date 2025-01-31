import { buttonFields, richTextFields } from "../commonFields";
import { imageTitleDescriptionCtaFields, titleDescriptionImageFields, titleValueUnitFields } from "../globalFields";

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
