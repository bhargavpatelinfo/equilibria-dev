import { SchemaTypeDefinition } from "sanity";
import ArrayMaxItems from "../../../component/arrayFunctions";

export default {
  name: "section",
  title: "Section",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "This field is only used for CMS.",
    },

    {
      name: "content",
      type: "array",
      components: { input: ArrayMaxItems },
      validation: (Rule) => Rule.max(1),
      of: [
        { type: "homeHeroSection" },
        { type: "lifeChangingResultsSection" },
        { type: "sliderSection" },
        { type: "bestCareSection" },
        { type: "stopManagingSection" },
        { type: "weCanHelpSection" },
        { type: "betterHealthSection" },
        { type: "equilibriaSuccessStoriesSection" },
        { type: "affordableExpertCareSection" },
      ],
    },
  ],
} as SchemaTypeDefinition;
