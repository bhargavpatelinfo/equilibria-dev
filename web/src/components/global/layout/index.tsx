import React from "react";
import type { PropsWithChildren } from "react";
import { LocalBusinessJsonLd, LogoJsonLd, SocialProfileJsonLd } from "next-seo";
import Header from "@/components/global/header";
import { FooterType, HeaderType } from "../../../../lib/sanity/types";
import { SeoType } from "../../../../lib/sanity/types/seoType";
import AlertBanner from "../previewView/alertBanner";
import Footer from "../footer";
import CustomNextSeo from "../customNextSeo";
import { useSanityImage } from "../../../../lib/sanity";
import { NEXT_PUBLIC_APP_URL } from "../../../../lib/constants";

interface LayoutProps {
  header: HeaderType;
  footer: FooterType;
  preview: boolean;
  loading: boolean;
  seo: SeoType | null;
  slug: string;
}
const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  children,
  header,
  seo,
  loading,
  preview,
  slug,
  footer,
}) => {
  return (
    <main>
      <CustomNextSeo seo={seo} slug={slug} />
      {header && (
        <Header
        block={header}
        path={slug?.startsWith("/") ? slug : `/${slug}`}
        />
      )}
      {children}
      {footer && <Footer block={footer} />}
      {preview && <AlertBanner preview={preview} loading={loading} />}
    </main>
  );
};

export default Layout;
