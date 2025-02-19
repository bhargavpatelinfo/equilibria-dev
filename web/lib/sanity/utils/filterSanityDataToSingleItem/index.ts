type Params<T> = {
  data: T | T[];
};
export const filterSanityDataToSingleItem = <T extends { _id: string }>({
  data,
}: Params<T | undefined>) => {
  let result: T | undefined

  if (!Array.isArray(data)) {
    result = data;
  }

  if (Array.isArray(data)) {
    if (data.length === 1) {
      const [firstItem] = data;
      result = firstItem;
    }

    result = data?.find((i) => !i?._id?.startsWith("drafts.")) || data[0];
  }

  return result ?? null;
};
