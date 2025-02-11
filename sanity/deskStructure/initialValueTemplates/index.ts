import { Template } from "sanity";

export const OLD_PAGE_ID_LIST = {} as Record<string, string>

export const getPageId = (new_id: string) => OLD_PAGE_ID_LIST[new_id] ?? new_id;

export const InitialValueTemplates = {
  PAGE: getPageId("page"),
  HEADER: getPageId("header"),
  FOOTER: getPageId("footer"),
};

export const templateBuilders: Template[] = [
  {
    id: 'settings',
    title: "Settings",
    schemaType: "settings",
    value: {
      type: "settings",
    },
  },
];

export default [...templateBuilders.map((template) => template)];

