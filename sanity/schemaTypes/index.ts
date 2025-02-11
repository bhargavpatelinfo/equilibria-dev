import documentsTypes from "./document";
import globalTypes from "./global";
import objectTypes from "./objects";
import sectionsTypes from "./sections";


export const schemaTypes = [...documentsTypes, ...objectTypes, ...globalTypes, ...sectionsTypes]
