import React from "react";
import dynamic from "next/dynamic";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { fetchDataFromSanity, pageQuery, readToken } from "../../lib/sanity";
import { filterSanityDataToSingleItem } from "../../lib/sanity/utils/filterSanityDataToSingleItem";
import { REVALIDATE_DURATION } from "../../lib/constants";
import PageView from "../../views/PageView";
import { SharedPageProps } from "../../lib/sanity/types";
import type { Page } from "../../lib/sanity/types/Page";


const PreviewPageView = dynamic(() => import("../../views/PreviewPageView"));

interface PageProps extends SharedPageProps {
  page: Page;
}

interface Query {
  [key: string]: string;
}

const Page: NextPage<PageProps> = ({ page, draftMode }) => {
  if (draftMode) {
    return (
      <PreviewPageView page={page} preview={draftMode} slug={`/${page?.slug}`}  />
    );
  }
  return (
    <PageView page={page} slug={`/${page?.slug}`} />
  );
};
export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params } = ctx;

  const pageData = await fetchDataFromSanity<Page[]>({
    query: { groqQuery: pageQuery.query.groqQuery },
    queryParams: {
      slug: params?.slug,
    },
    isPreview: draftMode,
  });

  const page = filterSanityDataToSingleItem({
    data: pageData,
    isPreview: draftMode,
  });

  if (!page) {
    return {
      notFound: true,
    };
  }


  return {
    props: {
      page,
      draftMode,
      token: draftMode ? readToken : "",
    },
    revalidate: REVALIDATE_DURATION,
  };
};


export const getStaticPaths: GetStaticPaths = async () => {
  const allSlugs = await fetchDataFromSanity<Pick<Page, "slug">[]>({
    query: { groqQuery: pageQuery?.query?.pageSlugQuery },
  }) || []

  const paths = allSlugs.map((item) => ({
    params: { slug: item?.slug },
  })) || [];

  return {
    paths,
    fallback: 'blocking',
  };
};
export default Page;
