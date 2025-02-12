import { footerFields } from "../helper/footerFields";
import { headerFields } from "../helper/headerFields";
import { affordableExpertCareSectionFields, bestCareSectionFields, betterHealthSectionFields, equilibriaSuccessStoriesSectionFields, faqSectionFields, heroSectionFields, homeHeroSectionFields, integratedCareSectionFields, leadersSectionFields, lifeChangingResultsSectionFields, simpleStepsSectionFields, sliderSectionFields, stopManagingSectionFields, transformationSectionFields, weCanHelpSectionFields, yourSuccessSectionFields } from "../helper/sectionFields";
import { seofields } from "../helper/seoFields";

{
  /*  Seo */
}

export const seo = /* groq */ `seo{
${seofields}  
}`;

{
  /*  Header */
}

export const header = /* groq */ `
header->{
${headerFields}
} 
`;

{
  /*  Footer */
}

export const footer = /* groq */ `
footer->{
${footerFields}
} 
`;

{
  /*  Layout Props */
}

export const layoutProps = /* groq */ `*[_type == "settings"][0]{
_id,
_type,
${header},
${footer},
}`;

{
  /* Page Builder */
}

export const pageBuilder = /* groq */ `
pageBuilder[]->{
_type,
content[]{
(_type == "homeHeroSection") => {
${homeHeroSectionFields}
},
(_type == "heroSection") => {
${heroSectionFields}
},
(_type == "lifeChangingResultsSection") => {
${lifeChangingResultsSectionFields}
},
(_type == "sliderSection") => {
${sliderSectionFields}
},
(_type == "bestCareSection") => {
${bestCareSectionFields}
},
(_type == "stopManagingSection") => {
${stopManagingSectionFields}
},
(_type == "weCanHelpSection") => {
${weCanHelpSectionFields}
},
(_type == "betterHealthSection") => {
${betterHealthSectionFields}
},
(_type == "equilibriaSuccessStoriesSection") => {
${equilibriaSuccessStoriesSectionFields}
},
(_type == "affordableExpertCareSection") => {
${affordableExpertCareSectionFields}
},
(_type == "leadersSection") => {
${leadersSectionFields}
},
(_type == "integratedCareSection") => {
${integratedCareSectionFields}
},
(_type == "simpleStepsSection") => {
${simpleStepsSectionFields}
},
(_type == "yourSuccessSection") => {
${yourSuccessSectionFields}
},
(_type == "faqSection") => {
${faqSectionFields}
},
(_type == "transformationSection") => {
${transformationSectionFields}
},
  
},
}
`;
