import { gql } from 'graphql-request'
import { shopifyClient } from '../shopifyClient'

/**
 * Used to fetch a product.
 */

const productQuery = gql`
    query getProduct($id: ID!) {
        product(id: $id) {
            id
            handle
            title
            description
            priceRange {
                minVariantPrice {
                    amount
                    currencyCode
                }
            }
            featuredImage {
                url
                altText
            }
            variants(first: 10) {
                edges {
                    node {
                        id
                    }
                }
            }
        }
    }
`

export const fetchProduct = async (id: string) => {
    const variables = {
        id,
    }
    try {
        const data = await shopifyClient.request(productQuery, variables)
        return data.product
    } catch (error) {
        // throw new Error(error)
    }
}
