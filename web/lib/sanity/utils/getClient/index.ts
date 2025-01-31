import { createClient } from '@sanity/client';
import { apiVersion, dataset, projectId, useCdn } from '../../config';

export const sanityConfig = {
  projectId,
  dataset,
  useCdn,
  apiVersion,
};

const client = createClient({
  ...sanityConfig,
  perspective: "published",
});


function getPreviewClient(previewToken?: string) {
  return createClient({
    ...sanityConfig,
    useCdn: !previewToken,
    token: previewToken,
    perspective: 'previewDrafts',
  })
}

export function getClient(previewToken?: string) {
  return previewToken ? getPreviewClient(previewToken) : client
}