import { gql } from "graphql-request"
import { shopifyClient } from "../shopifyClient"

/**
 * Get the checkout URL from Shopify
 */
export const getCheckoutUrl = async (cartId: string) => {
    const query = gql`
        query checkoutURL($cartId: ID!) {
            cart(id: $cartId) {
                checkoutUrl
            }
        }
    `

    try {
        const data = await shopifyClient.request(query, { cartId })
        
        if (!data?.cart?.checkoutUrl) {
            throw new Error("Checkout URL missing — possible invalid Cart ID")
        }
        console.log("Returned-checkout-url",data.cart.checkoutUrl)

        return data.cart.checkoutUrl
    } catch (err: any) {
        console.error("❌ Shopify Get Checkout URL Error:", err?.response || err)
        throw new Error("Failed to fetch checkout URL")
    }
}
