import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { groq } from "next-sanity";
import { sanityClientWithToken } from "../../lib/sanity";
import { imageFields } from "../../lib/sanity/queries/helper/imageFields";
import { CustomImageType } from "../../lib/sanity/types";

interface CustomDocumentProps {
  faviconImage: string;
}

class MyDocument extends Document<CustomDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    let faviconImage = "/favicon.ico";

    try {
      const settings = await sanityClientWithToken.fetch<{ favicon?: CustomImageType }>(
        groq`
          *[_type == "settings"][0] {
            favicon {
              ${imageFields}
            }
          }
        `
      );

      faviconImage = settings?.favicon?.asset?.url || faviconImage;
    } catch (error) {
      console.error("Error fetching favicon image:", error);
    }

    return { ...initialProps, faviconImage };
  }

  render() {
    const { faviconImage } = this.props;

    return (
      <Html lang={"en"}>
        <Head>
          <link rel="icon" href={faviconImage} type="image/x-icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />


          <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kulim+Park:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />


          <noscript>
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
          </noscript>
          <noscript>
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kulim+Park:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
          </noscript>
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
