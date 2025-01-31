import { richTextFields } from "../commonFields";

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
