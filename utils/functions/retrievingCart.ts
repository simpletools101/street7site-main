import { gql } from 'graphql-request'
import { shopifyClient } from '../shopifyClient'

const cartQuery = gql`
    query cartQuery($cartId: ID!) {
        cart(id: $cartId) {
            id
            createdAt
            updatedAt

            lines(first: 10) {
                edges {
                    node {
                        id
                        quantity
                        merchandise {
                            ... on ProductVariant {
                                id
                            }
                        }
                    }
                }
            }
            estimatedCost {
                totalAmount {
                    amount
                }
            }
        }
    }
`

export async function retrieveCart(cartId: string) {
    const variables = {
        cartId,
    }
    try {
        const data = await shopifyClient.request(cartQuery, variables)
        return data.cart
    } catch (error) {
        
    }
}
