import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { lazy } from "react";
import { ModalsProvider } from "@/components/commons/modalsProvider";

import { SharedPageProps } from "../../lib/sanity/types";

const PreviewProvider = lazy(
  () => import("@/components/global/previewView/previewProvider")
);
export default function App({ Component, pageProps }: AppProps<SharedPageProps>) {
  return (
    <ModalsProvider key={pageProps?.page?._id}>
      {pageProps.draftMode && (
        <PreviewProvider token={pageProps.token}>
          <Component {...pageProps} />
        </PreviewProvider>
      )}
      {!pageProps.draftMode && <Component {...pageProps} />}
    </ModalsProvider>
  );
}
