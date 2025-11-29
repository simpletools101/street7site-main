// /lib/shopify/cartCreate.ts
import { gql } from 'graphql-request'
import { shopifyClient } from '../shopifyClient'

const CART_CREATE_MUTATION = gql`
    mutation cartCreate($input: CartInput!) {
        cartCreate(input: $input) {
            cart {
                id
                createdAt
                updatedAt
            }
            userErrors {
                field
                message
            }
        }
    }
`

/**
 * Create a cart for BOTH guests & logged-in customers
 */
export async function createCart2({ lines = [], buyerIdentity = null } = {}) {
    const input: any = {}

    // Only include lines if user provided items
    if (lines.length > 0) {
        input.lines = lines
    }

    // Only include identity if user provided it (logged-in)
    if (buyerIdentity) {
        input.buyerIdentity = buyerIdentity
    }

    try {
        const res = await shopifyClient.request(CART_CREATE_MUTATION, { input })

        if (res.cartCreate.userErrors.length > 0) {
            throw new Error(res.cartCreate.userErrors[0].message)
        }

        return res.cartCreate.cart
    } catch (err) {
        console.error('Cart Create Error:', err)
        throw new Error('Failed to create cart')
    }
}
