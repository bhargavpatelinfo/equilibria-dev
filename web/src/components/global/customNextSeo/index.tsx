import React, { useMemo } from 'react'
import { NextSeo } from 'next-seo'
import { NEXT_PUBLIC_APP_URL } from '../../../../lib/constants';
import { getMetaObjects, getOpenGraph } from '../../../../lib/metaHelper';
import { SeoType } from '../../../../lib/sanity/types/seoType';
import { MetaTag as NextSeoMetaTag } from "next-seo/lib/types";

interface CustomNextSeoProps {
    seo: SeoType | null;
    slug: string;
}

const CustomNextSeo: React.FC<CustomNextSeoProps> = ({ seo, slug }) => {
    const { additionalMetaTags, metaDescription, metaTitle, twitter, nofollowAttributes, seoKeywords } = seo || {};
    const tags = useMemo(
        () => (additionalMetaTags ? getMetaObjects(additionalMetaTags) : []),
        [additionalMetaTags]
    );
    const openGraph = useMemo(
        () => (seo?.openGraph ? getOpenGraph(seo.openGraph) : undefined),
        [seo]
    );
    const defaultUrl = typeof window !== "undefined" ? window.location.href : "";
    const url = NEXT_PUBLIC_APP_URL ? (NEXT_PUBLIC_APP_URL ?? "") + (slug?.startsWith("/") ? slug : `/${slug}`) : defaultUrl;
    return (
        <NextSeo
            twitter={twitter}
            nofollow={nofollowAttributes}
            noindex={nofollowAttributes}
            openGraph={openGraph}
            canonical={url || ""}
            title={metaTitle ?? ""}
            description={metaDescription ?? ""}
            additionalMetaTags={((seoKeywords && seoKeywords?.length > 0
                ? [{ name: "keywords", content: seoKeywords?.join(", ") }]
                : []) as NextSeoMetaTag[]).concat(tags ?? [])}
        />
    )
}

export default CustomNextSeo