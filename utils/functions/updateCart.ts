import { gql } from 'graphql-request'
import { shopifyClient } from '../shopifyClient'

const updateCartMutation = gql`
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
            cart {
                id
            }
        }
    }
`

export async function updateCart(cartId: string, itemId: string, quantity: string) {
    const variables = {
        cartId: cartId,
        lines: [
            {
                quantity: parseInt(quantity),
                merchandiseId: itemId,
            },
        ],
    }
    try {
        return await shopifyClient.request(updateCartMutation, variables)
    } catch (error) {
        // throw new Error(error);
    }
}
