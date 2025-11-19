import { gql } from 'graphql-request'
import { shopifyClient } from '../shopifyClient'

const createCartMutation = gql`
    mutation createCart($cartInput: CartInput) {
        cartCreate(input: $cartInput) {
            cart {
                id
            }
        }
    }
`

export async function addToCart(itemId: string, quantity: string) {
    const variables = {
        cartInput: {
            lines: [
                {
                    quantity: parseInt(quantity),
                    merchandiseId: itemId,
                },
            ],
        },
    }
    try {
        return await shopifyClient.request(createCartMutation, variables)
    } catch (error) {
        // throw new Error(error)
    }
}
