import { buttonFields, richTextFields } from "../commonFields";
import { titleValueUnitFields } from "../globalFields";

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
