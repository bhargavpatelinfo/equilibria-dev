export const REVALIDATE_DURATION = Number(process.env.REVALIDATE_DURATION) || 60;

let url = process.env.NEXT_PUBLIC_APP_URL
  ? process.env.NEXT_PUBLIC_APP_URL
  : "";

if (url && !url?.startsWith("https://")) {
  url = `https://${url}`;
}
const siteUrl = url;
const baseUrl = siteUrl.endsWith("/")
  ? siteUrl.slice(0, siteUrl.length - 1)
  : siteUrl;
export const NEXT_PUBLIC_APP_URL = baseUrl;