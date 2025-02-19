import { useLiveQuery } from "next-sanity/preview";

import PageView, { PageViewProps } from "../PageView";

import { pageQuery } from "../../lib/sanity";
import { filterSanityDataToSingleItem } from "../../lib/sanity/utils/filterSanityDataToSingleItem";
import { Page } from "../../lib/sanity/types/Page";


export default function PreviewPageView(props: PageViewProps) {
  const [page, loadingPage] = useLiveQuery<Page[]>(
    [props.page],
    pageQuery.query.groqQuery,
    { slug: props.page.slug }
  );
  const pageFilteredData = filterSanityDataToSingleItem({
    data: page,
  });

  return (
    <PageView
      preview
      loading={loadingPage}
      page={pageFilteredData!}
      slug={props.slug}
    />
  );
}
