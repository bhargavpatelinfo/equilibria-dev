import { OpenGraph as NextSeoOpenGraph } from 'next-seo/lib/types'
import { resolveImage } from '../getMetaAttribute'
import { OpenGraphType } from '../../sanity/types/seoType'

export const getOpenGraph = (args: OpenGraphType) => {
    const { description, image, title, _type, siteName, url } = args
    const getImage = image ? resolveImage(image) : null
    const values = {
        _type,
        description,
        siteName,
        url,
        title,
        images: [{ url: getImage ?? '' }],
    }
    return values as NextSeoOpenGraph
}
