import { QueryParams } from 'next-sanity'
import { client } from '../getClient'

export type FetchSanityQuery = {
  groqQuery: string
}


type FetchSanityParams = {
  query: FetchSanityQuery
  queryParams?: QueryParams
}

export const fetchDataFromSanity = async <T = unknown>({
  query,
  queryParams = {},
}: FetchSanityParams): Promise<T | undefined> => {
  const { groqQuery } = query
  try {
    const data = await client.fetch<T>(groqQuery, queryParams)
    return data
  } catch (error) {
    console.log(error);
  }
}
