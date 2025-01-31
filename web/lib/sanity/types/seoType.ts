import { CustomImageType } from "./common";


{/* Seo*/ }

export type SeoType = {
    _type?: "seo";
    nofollowAttributes?: boolean
    seoKeywords?: string[]
    metaDescription?: string;
    additionalMetaTags?: MetaTagType[];
    metaTitle?: string;
    openGraph?: OpenGraphType;
    twitter?: Twitter;
};


{/* Meta Attribute */ }

export type MetaAttributeType = {
    _type: "metaAttribute";
    attributeKey?: string;
    attributeType?: string;
    attributeValueString?: string;
    attributeValueImage?: CustomImageType;
};

{/* Open Graph */ }

export type OpenGraphType = {
    _type: "openGraph";
    url?: string
    siteName?: string
    title: string;
    description: string;
    image: CustomImageType;
};

{/* Twitter */ }

export type Twitter = {
    _type: "twitter";
    creator?: string
    handle?: string;
    site?: string;
    cardType?: string;
};

{/* Meta Tag */ }

export type MetaTagType = {
    _type: "metaTag";
    metaAttributes?: MetaAttributeType[];
};
