import {createClient} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production", // "pv8y60vp"
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // "production"
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-22',
    useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)
