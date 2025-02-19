import { clsx, type ClassValue } from "clsx";
import slugify from "slugify";
import { twMerge } from "tailwind-merge";
import { sanityClientWithToken } from "../../sanity";

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
  try {
    const response = await sanityClientWithToken.getDocument(ref);
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
  const formattedIndex = updatedCount < 10 ? `${updatedCount}` : updatedCount;
  return formattedIndex;
};
