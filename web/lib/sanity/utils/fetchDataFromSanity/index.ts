import { readToken } from '../../config'
import { getClient } from '../getClient'

export type FetchSanityQuery = {
  groqQuery: string
}

type FetchSanityQueryParams = { [key: string]: unknown }

type FetchSanityParams = {
  query: FetchSanityQuery
  queryParams?: FetchSanityQueryParams
  isPreview?: boolean
}

export const fetchDataFromSanity = async <T = unknown>({
  query,
  queryParams = {},
  isPreview = false,
}: FetchSanityParams): Promise<T | undefined> => {
  const { groqQuery } = query
  const client = getClient(isPreview ? readToken : undefined)
  try {
    const data = await client.fetch<T>(groqQuery, queryParams)
    return data
  } catch (error) {
    console.log(error);
  }
}
