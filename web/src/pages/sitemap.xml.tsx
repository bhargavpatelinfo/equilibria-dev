import { GetServerSidePropsContext } from "next";

let vercelUrl = process.env.NEXT_PUBLIC_APP_URL
  ? process.env.NEXT_PUBLIC_APP_URL
  : "";
if (vercelUrl) {
  // Remove 'www.' and 'https://' if present
  vercelUrl = vercelUrl.replace(/^(https?:\/\/)?/, "https://");
  // Append 'https://' if not present
  if (!vercelUrl.startsWith("https://")) {
    vercelUrl = `https://${vercelUrl}`;
  }
  // Append '/' if not present
  if (!vercelUrl.endsWith("/")) {
    vercelUrl += "/";
  }
} else {
  // Default URL
  vercelUrl = "";
}

const siteUrl = vercelUrl || ""; // Make sure to configure this
const baseUrl = siteUrl.endsWith("/")
  ? siteUrl.slice(0, siteUrl.length - 1)
  : siteUrl;

export default function SitemapIndex() {
  return null; // Server-side rendered, no need to render anything.
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {

  const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
      <loc>${baseUrl}/sitemap-0.xml</loc>
    </sitemap>
  </sitemapindex>`.trim();

  res.setHeader('Content-Type', 'application/xml');
  res.end(sitemapIndexXml);

  return { props: {} };
}
