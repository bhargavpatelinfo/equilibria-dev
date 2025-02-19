import { createClient } from '@sanity/client';
import { apiVersion, dataset, projectId, readToken, useCdn } from '../../config';

export const sanityConfig = {
  projectId,
  dataset,
  useCdn,
  apiVersion,
};

export const client = createClient(sanityConfig)

export const sanityClientWithToken = createClient({
  ...sanityConfig,
  token: readToken,
})

export function getPreviewClient(preview?: { token: string }) {
  if (preview) {
    if (!preview.token) {
      throw new Error("You must provide a token to preview drafts");
    }
    return createClient({
      ...sanityConfig,
      token: preview.token,
      perspective: "previewDrafts",
    });
  }
  return client;
}