// /lib/shopify/getProducts.ts
import { gql } from 'graphql-request'
import { shopifyClient } from '../shopifyClient'

export const getAllProductsQuery = gql`
    {
        products(first: 20) {
            edges {
                node {
                    id
                    title
                    handle

                    featuredImage {
                        altText
                        url
                    }

                    variants(first: 1) {
                        edges {
                            node {
                                id # ✔ VARIANT ID (for cart)
                                title
                                price {
                                    amount
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export async function getProducts() {
    try {
        const data = await shopifyClient.request(getAllProductsQuery)

        //@ts-expect-error
        return data.products.edges.map(({ node }) => {
            return {
                id: node.id, // product ID
                variantId: node.variants.edges[0]?.node.id, // ✔ correct ID for cart
                title: node.title,
                price: node.variants.edges[0]?.node.price.amount,
                featuredImage: node.featuredImage?.url,
                handle: node.handle,
            }
        })
    } catch (err) {
        console.error('Product Fetch Error:', err)
        throw err
    }
}
