import { gql } from 'graphql-request'
import { shopifyClient } from '../shopifyClient'

/**
 * Used to get products.
 */

export const getAllProductsQuery = gql`
    {
        products(first: 10) {
            edges {
                node {
                    id
                    title
                    handle
                    priceRange {
                        minVariantPrice {
                            amount
                        }
                    }
                    featuredImage {
                        altText
                        url
                    }
                }
            }
        }
    }
`
export async function getProductss() {
    try {
        return await shopifyClient.request(getAllProductsQuery)
    } catch (error) {
        // throw new Error(error)
    }
}
