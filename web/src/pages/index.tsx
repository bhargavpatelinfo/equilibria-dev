import React from "react";
import dynamic from "next/dynamic";
import { GetStaticProps, NextPage } from "next";

import { fetchDataFromSanity, pageQuery, readToken } from "../../lib/sanity";
import { filterSanityDataToSingleItem } from "../../lib/sanity/utils/filterSanityDataToSingleItem";
import { REVALIDATE_DURATION } from "../../lib/constants";

import PageView from "../../views/PageView";
import { SharedPageProps } from "../../lib/sanity/types";
import type { Page } from "../../lib/sanity/types/Page";


const PreviewPageView = dynamic(() => import("../../views/PreviewPageView"));

export interface PageProps extends SharedPageProps {
  page: Page;
}
const Page: NextPage<PageProps> = ({ page, draftMode,}) => {
  if (draftMode) {
    return (
      <PreviewPageView page={page} preview={draftMode} slug={`/`} />
    );
  }
  return (
    <PageView page={page} slug={`/`}  />
  );
};
export const getStaticProps: GetStaticProps<PageProps> = async (ctx) => {
  const { draftMode = false, } = ctx;

  const pageData = await fetchDataFromSanity<Page[]>({
    query: { groqQuery: pageQuery.query.groqQuery },
    queryParams: {
      slug: "/",
    },
  });

  const page = filterSanityDataToSingleItem({
    data: pageData,
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
export default Page;
