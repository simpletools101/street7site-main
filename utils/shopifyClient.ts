import { gql, GraphQLClient } from 'graphql-request'


/**
 * The storefrom  accsess token,
 */
const storefrontAccessToken = process.env.SHOPIFY_DEV_STORE_ACCESS_TOKEN! as string

/**
 * The storefront access endpoint;
 */
const endpoint = process.env.SHOPIFY_DEV_ENDPOINT! as string


/**
 * The Client
 */

export const shopifyClient = new GraphQLClient(endpoint, {
    headers: {
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
         'Content-Type': 'application/json'
    },
})
