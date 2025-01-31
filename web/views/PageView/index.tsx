import Layout from "@/components/global/layout";
import SectionView from "@/components/global/sectionView";
import { Page } from "../../lib/sanity/types/Page";

export interface PageViewProps {
  preview?: boolean;
  loading?: boolean;
  page: Page;
  slug: string;
}

export default function PageView(props: PageViewProps) {
  const { preview, loading, page, slug } = props;
  const { layoutProps } = page || {};
  return (
    <Layout
      seo={page?.seo}
      preview={preview}
      loading={loading}
      header={layoutProps?.header}
      footer={layoutProps?.footer}
      slug={slug}
    >
      {Array.isArray(page?.pageBuilder) &&
        page?.pageBuilder.map((i, index) => (
          <SectionView block={i} key={index} />
        ))}
    </Layout>
  );
}
