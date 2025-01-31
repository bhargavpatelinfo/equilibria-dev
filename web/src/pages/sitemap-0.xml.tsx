import type { GetServerSidePropsContext } from "next";
import { fetchDataFromSanity, sitemapQuery } from "../../lib/sanity";

export interface SitemapEntry {
  url: string;
  imageUrl?: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

export interface SanityData {
  locUrl: string;
  _updatedAt: string;
  imageUrl?: string;
}

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

export const defaultSitemapEntries: SitemapEntry[] = [
  {
    url: `${baseUrl}`,
    priority: 1,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
  },
];

export const generateSitemapXml = (entries: SitemapEntry[]) => {
  const sitemapXmlEntries = entries
    .map((entry) => {
      return `
        <url>
         <loc>${entry?.url}</loc>
          ${entry.lastModified ? `<lastmod>${entry.lastModified}</lastmod>` : ""}
          ${entry.priority ? `<priority>${entry.priority}</priority>` : ""}
          ${entry.imageUrl ? `<image:image><image:loc>${entry.imageUrl}</image:loc></image:image>` : ""}
        </url>
        `;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
    >
      ${sitemapXmlEntries}
    </urlset>
    `;
};

export default function Sitemap0() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const sanityData = await fetchDataFromSanity<SanityData[]>({
    query: { groqQuery: sitemapQuery.query.groqQuery },
  });

  const dynamicEntries: SitemapEntry[] = sanityData.map((route) => {
    return {
      url: `${baseUrl}/${route?.locUrl}`,
      lastModified: new Date(route._updatedAt).toISOString(),
      priority: 0.5,
      imageUrl: route?.imageUrl,
    };
  });

  const sitemapEntries = [...defaultSitemapEntries, ...dynamicEntries];

  const sitemapXml = generateSitemapXml(sitemapEntries);

  res.setHeader("Content-Type", "application/xml");
  res.end(sitemapXml);

  return {
    props: {},
  };
}
