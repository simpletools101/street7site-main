import { gql, GraphQLClient } from 'graphql-request'


/**
 * The storefrom  accsess token,
 */
const storefrontAccessToken = process.env.STOREFRONTACCESSTOKEN! as string

/**
 * The storefront access endpoint;
 */
const endpoint = process.env.SHOPURL! as string


/**
 * The Client
 */

export const shopifyClient = new GraphQLClient(endpoint, {
    headers: {
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    },
})
