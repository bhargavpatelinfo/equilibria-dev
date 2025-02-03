import { clsx, type ClassValue } from "clsx";
import slugify from "slugify";
import { twMerge } from "tailwind-merge";
import { getClient, readToken } from "../../sanity";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const groupItems = <T>(items: T[], size: number): T[][] => {
  const data: T[][] = [];
  for (let i = 0; i < items?.length; i += size) {
    data?.push(items?.slice(i, i + size));
  }
  return data;
};

export const fetchSanityAsset = async <T>({
  ref,
}: {
  ref: string;
}): Promise<T> => {
  const client = getClient(readToken);
  try {
    const response = await client.getDocument(ref);
    return response as T;
  } catch (error) {
    console.error("Error fetching :", error);
    return null;
  }
};

export const generateSlug = (text: string) =>
  slugify(text, { lower: true, strict: true });

export const generateFormattedIndex = (index: number) => {
  const updatedCount = index + 1;
  const formattedIndex = updatedCount < 10 ? `0${updatedCount}` : updatedCount;
  return formattedIndex;
};
