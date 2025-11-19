import { gql } from "graphql-request"
import { shopifyClient } from "../shopifyClient"

/**
 * Get the checkout URL
 * @param cartId 
 * @returns 
 */

export const getCheckoutUrl = async (cartId:string) => {
    const getCheckoutUrlQuery = gql`
        query checkoutURL($cartId: ID!) {
            cart(id: $cartId) {
                checkoutUrl
            }
        }
    `
    const variables = {
        cartId: cartId,
    }
    try {
        return await shopifyClient.request(getCheckoutUrlQuery, variables)
    } catch (error) {
        // throw new Error(error)
    }
}
